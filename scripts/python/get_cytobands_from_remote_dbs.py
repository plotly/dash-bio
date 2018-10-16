"""Fetch cytogenetic band data from third-party MySQL databases
"""

# TODO:
# - Bonus: Convert this data into AGP 2.0, send data missing from NCBI to them

import os
import json
from concurrent.futures import ThreadPoolExecutor
import argparse

parser = argparse.ArgumentParser(
    description=__doc__,
    formatter_class=argparse.RawDescriptionHelpFormatter)
parser.add_argument('--output_dir',
    help='Directory to send output data to',
    default='../../data/bands/native/')
# parser.add_argument('--fresh_run',
#     help='Do you want to use cached data, or fresh data fetched over ' +
#          'the Internet?',
#     default='True')
# parser.add_argument('--fill_cache',
#     help='Do you want to populate the cache?  Only applicable for fresh runs.',
#     default='False')
args = parser.parse_args()


def t_or_f(arg):
    ua = str(arg).upper()
    if 'TRUE'.startswith(ua):
        return True
    elif 'FALSE'.startswith(ua):
        return False
    else:
        pass  #error condition maybe?


# eweitz, 2017-12-01:
# The arguments '--fresh_run=False and --fresh_run=False' do not yet work.
# The code related to these arguments is a work in progress.
# They are intended to speed up development by enabling runs to
# bypass remote querying and download.
fresh_run = True # t_or_f(args.fresh_run)
fill_cache = False #t_or_f(args.fill_cache)
output_dir = args.output_dir
cache_dir = output_dir + 'cache/'
log_name = 'get_cytobands_from_remote_dbs'

import settings
logger = settings.init(fresh_run, fill_cache, output_dir, cache_dir, log_name)

from utils import request, db_connect, time_ms, natural_sort, chunkify

if os.path.exists(output_dir) is False:
    os.mkdir(output_dir)

# Caching scenarios
#
# | fresh_run  | True | True  | False | False |
# | fill_cache | True | False | True  | False |
# | Scenario   | A    | B     | C     | D     |
#
# Scenario A: Repopulate cache.  Slow run, prepare later cache.
# Scenario B: For production.  Slow run, don't write to cache.
# Scenario C: No-op.  Illogical state, throw error.
# Scenario D: For development, or debugging.  Fast run, usable offline.
#
# Scenario D can be useful when working without Internet access, e.g. on a
# train or in rural areas.  It also enables much faster iteration even when
# connectivity is good.  Be sure to run Scenario A first, though!
if fresh_run is False and fill_cache:
    raise ValueError(
        'Error: Attempting to use cache, but no cache exists.  ' +
        'Use other arguments, e.g. "--fill_cache=True --fill_cache=True".'
    )

if os.path.exists(cache_dir) is False:
    if fill_cache:
        os.mkdir(cache_dir)
    if fresh_run is False:
        raise ValueError(
            'No cache available.  ' +
            'Run with "--fresh_run=True --fill_cache=True" then try again.'
        )

time_ncbi = 0
time_ucsc = 0
time_ensembl = 0


def update_bands_by_chr(bands_by_chr, chr, band_name, start, stop, stain):
    chr = chr.replace('chr', '') # e.g. chr1 -> 1
    # band_name and stain can be omitted,
    # see e.g. Aspergillus oryzae, Anopheles gambiae
    if band_name is None:
        band_name = ''
    if stain is None:
        stain = ''
    stain = stain.lower()
    band = [band_name, str(start), str(stop), str(start), str(stop), stain]
    if chr in bands_by_chr:
        bands_by_chr[chr].append(band)
    else:
        bands_by_chr[chr] = [band]
    return bands_by_chr


def get_genbank_accession_from_ucsc_name(db):
    """Queries NCBI EUtils for the GenBank accession of a UCSC asseembly name
    """
    global time_ncbi
    t0 = time_ms()
    logger.info('Fetching GenBank accession from NCBI EUtils for: ' + db)

    eutils = 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/'
    esearch = eutils + 'esearch.fcgi?retmode=json'
    esummary = eutils + 'esummary.fcgi?retmode=json'

    asm_search = esearch + '&db=assembly&term=' + db

    # Example: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=assembly&retmode=json&term=panTro4
    data = json.loads(request(asm_search))
    id_list = data['esearchresult']['idlist']
    if len(id_list) > 0:
        assembly_uid = id_list[0]
    else:
        unfound_dbs.append(db)
        return ''
    asm_summary = esummary + '&db=assembly&id=' + assembly_uid

    # Example: https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?retmode=json&db=assembly&id=255628
    data = json.loads(request(asm_summary))
    result = data['result'][assembly_uid]
    acc = result['assemblyaccession'] # Accession.version

    # Return GenBank accession if it's default, else find and return it
    if "GCA_" not in acc:
        acc = result['synonym']['genbank']

    time_ncbi += time_ms() - t0
    return acc


def query_ucsc_cytobandideo_db(db_tuples_list):
    """Queries UCSC DBs, called via a thread pool in fetch_ucsc_data
    """

    connection = db_connect(
        host='genome-mysql.soe.ucsc.edu',
        user='genome'
    )
    logger.info('Connected to UCSC database')
    cursor = connection.cursor()

    for db_tuple in db_tuples_list:
        db, name_slug = db_tuple
        cursor.execute('USE ' + db)
        cursor.execute('SHOW TABLES; # for ' + db)
        rows2 = cursor.fetchall()
        found_needed_table = False
        for row2 in rows2:
            if row2[0] == 'cytoBandIdeo':
                found_needed_table = True
                break
        if found_needed_table is False:
            continue

        # Excludes unplaced and unlocalized chromosomes
        query = ('''
            SELECT * FROM cytoBandIdeo
            WHERE chrom NOT LIKE "chrUn"
              AND chrom LIKE "chr%"
              AND chrom NOT LIKE "chr%\_%"
        ''')
        r = cursor.execute(query)
        if r <= 1:
            # Skip if result contains only e.g. chrMT
            continue

        bands_by_chr = {}
        has_bands = False
        rows3 = cursor.fetchall()
        for row3 in rows3:
            chr, start, stop, band_name, stain = row3
            bands_by_chr = update_bands_by_chr(
                bands_by_chr, chr, band_name, start, stop, stain
            )
            if band_name != '':
                has_bands = True
        if has_bands is False:
            continue

        genbank_accession = get_genbank_accession_from_ucsc_name(db)

        # name_slug = db_map[db]

        asm_data = [db, genbank_accession, bands_by_chr]

        logger.info('Got UCSC data: ' + str(asm_data))

        return asm_data


def fetch_from_ucsc():
    """Queries MySQL instances hosted by UCSC Genome Browser

    To connect via Terminal (e.g. to debug), run:
    mysql --user=genome --host=genome-mysql.soe.ucsc.edu -A
    """
    global time_ucsc
    t0 = time_ms()
    logger.info('Entering fetch_from_ucsc')
    connection = db_connect(
        host='genome-mysql.soe.ucsc.edu',
        user='genome'
    )
    logger.info('Connected to UCSC database')
    cursor = connection.cursor()

    db_map = {}
    org_map = {}

    cursor.execute('use hgcentral')
    cursor.execute('''
      SELECT name, scientificName FROM dbDb
        WHERE active = 1
    ''')
    rows = cursor.fetchall()

    for row in rows:
        db = row[0]
        # e.g. Homo sapiens -> homo-sapiens
        name_slug = row[1].lower().replace(' ', '-')
        db_map[db] = name_slug

    db_tuples = [item for item in db_map.items()]

    # Take the list of DBs we want to query for cytoBandIdeo data,
    # split it into 30 smaller lists,
    # then launch a new thread for each of those small new DB lists
    # to divide up the work of querying remote DBs.
    num_threads = 30
    db_tuples_lists = chunkify(db_tuples, num_threads)
    with ThreadPoolExecutor(max_workers=num_threads) as pool:
        for result in pool.map(query_ucsc_cytobandideo_db, db_tuples_lists):
            if result is None:
                continue
            asm_data = result
            if name_slug in org_map:
                org_map[name_slug].append(asm_data)
            else:
                org_map[name_slug] = [asm_data]

    time_ucsc += time_ms() - t0
    return org_map


def get_ensembl_chr_ids(cursor):
    """Get a map of Ensembl seq_region_ids to familiar chromosome names.
    Helper function for query_ensembl_karyotype_db.

    :param cursor: Cursor connected to Ensembl Genomes DB of interest
    :return: chr_id: Dictionary mapping seq_region_id to chromosome names
    """
    cursor.execute('''
      SELECT coord_system_id FROM coord_system
      WHERE name="chromosome" AND attrib="default_version"
    ''')
    coord_system_id = str(cursor.fetchall()[0][0])
    chr_ids = {}
    cursor.execute(
        'SELECT name, seq_region_id FROM seq_region ' +
        'WHERE coord_system_id = ' + coord_system_id
    )
    rows = cursor.fetchall()
    for row in rows:
        chr, seq_region_id = row
        chr_ids[seq_region_id] = chr

    return chr_ids


def query_ensembl_karyotype_db(db_tuples_list):
    """Query for karyotype data in Ensembl Genomes.
    This function is launched many times simultaneously in a thread pool.

    :param db_tuples_list: List of (db, name_slug) tuples
    :return: List of [name_slug, asm_data] lists
    """

    connection = db_connect(
        host='mysql-eg-publicsql.ebi.ac.uk',
        user='anonymous',
        port=4157
    )
    cursor = connection.cursor()
    logger.info('Connected to Ensembl Genomes database via pool')

    pq_result = []

    for db_tuple in db_tuples_list:
        db, name_slug = db_tuple

        # Example for debugging: "USE zea_mays_core_35_88_7;"
        cursor.execute('USE ' + db)

        # Schema: https://www.ensembl.org/info/docs/api/core/core_schema.html#karyotype
        # | karyotype_id | seq_region_id | seq_region_start | seq_region_end | band | stain |
        cursor.execute('SELECT * FROM karyotype')
        rows = cursor.fetchall()
        # Omit assmblies that don't have cytoband data
        if len(rows) == 0:
            continue

        chr_ids = get_ensembl_chr_ids(cursor)

        bands_by_chr = {}

        for row in rows:
            pid, seq_region_id, start, stop, band_name, stain = row
            chr = chr_ids[seq_region_id]
            bands_by_chr = update_bands_by_chr(
                bands_by_chr, chr, band_name, start, stop, stain
            )

        cursor.execute('''
          SELECT meta_value FROM meta
          where meta_key = "assembly.accession"
        ''')
        genbank_accession = cursor.fetchone()[0]

        asm_data = [genbank_accession, db, bands_by_chr]
        pq_result.append([name_slug, asm_data])
        logger.info('Got Ensembl Genomes data: ' + str(asm_data))

    return pq_result


def fetch_from_ensembl_genomes():
    """Queries MySQL servers hosted by Ensembl Genomes

    To connect via Terminal (e.g. to debug), run:
    mysql --user=anonymous --host=mysql-eg-publicsql.ebi.ac.uk --port=4157 -A
    """
    global time_ensembl
    t0 = time_ms()
    logger.info('Entering fetch_from_ensembl_genomes')
    connection = db_connect(
        host='mysql-eg-publicsql.ebi.ac.uk',
        user='anonymous',
        port=4157
    )
    logger.info('Connected to Ensembl Genomes database')

    cursor = connection.cursor()

    db_map = {}
    org_map = {}

    # Get a list of databases we want to query for karyotype data
    cursor.execute('show databases like "%core_%"')
    for row in cursor.fetchall():
        db = row[0]
        if 'collection' in db:
            continue
        name_slug = db.split('_core')[0].replace('_', '-')
        db_map[db] = name_slug
    db_tuples = [item for item in db_map.items()]

    cursor.close()

    # Take the list of DBs we want to query for karyotype data,
    # split it into 100 smaller lists,
    # then launch a new thread for each of those small new DB lists
    # to divide up the work of querying remote DBs.
    num_threads = 100
    db_tuples_lists = chunkify(db_tuples, num_threads)
    with ThreadPoolExecutor(max_workers=num_threads) as pool:
        for result in pool.map(query_ensembl_karyotype_db, db_tuples_lists):
            for db_tuple in result:
                name_slug, asm_data = db_tuple
                if name_slug in org_map:
                    org_map[name_slug].append(asm_data)
                else:
                    org_map[name_slug] = [asm_data]

    logger.info('before exiting with clause')

    time_ensembl += time_ms() - t0
    return org_map


def fetch_maize_centromeres():
    """Reads local copy of centromeres from B73 v2 genome assembly for Zea mays

    Old documentation:
    Requests maize centromere data from Genomaize
    This is a special case for maize, a request for which began this module.

    To debug:
    curl 'http://genomaize.org/cgi-bin/hgTables' --data 'jsh_pageVertPos=0&clade=monocots&org=Zea+mays&db=zeaMay_b73_v2&hgta_group=map&hgta_track=cytoBandIdeo&hgta_table=cytoBandIdeo&hgta_regionType=genome&position=chr1%3A1-301354135&hgta_outputType=primaryTable&boolshad.sendToGalaxy=0&boolshad.sendToGreat=0&hgta_outFileName=&hgta_compressType=none&hgta_doTopSubmit=get+output'
    """
    centromeres_by_chr = {}

    '''
    post_body = (
        'jsh_pageVertPos=0' +
        '&clade=monocots' +
        '&org=Zea+mays' +
        '&db=zeaMay_b73_v2' +
        '&hgta_group=map' +
        '&hgta_track=cytoBandIdeo' +
        '&hgta_table=cytoBandIdeo' +
        '&hgta_regionType=genome' +
        '&position=chr1%3A1-301354135' +
        '&hgta_outputType=primaryTable' +
        '&boolshad.sendToGalaxy=0' +
        '&boolshad.sendToGreat=0' +
        '&hgta_outFileName=' +
        '&hgta_compressType=none' +
        '&hgta_doTopSubmit=get+output'
    )
    post_body = post_body.encode()
    url = 'http://genomaize.org/cgi-bin/hgTables'
    data = request(url, request_body=post_body)
    rows = data.split('\n')[1:-1]
    for row in rows:
        # Headers: chrom, chromStart, chromEnd, name, score
        chr, start, stop = row.split('\t')[:3]
        chr = chr.replace('chr', '')
        centromeres_by_chr[chr] = [start, stop]
    '''

    rows = open(output_dir + 'zea-mays-b73-v2-centromeres.tsv').readlines()
    for row in rows[1:]:
        chr, start, stop = row.split('\t')[:3]
        chr = chr.replace('chr', '')
        centromeres_by_chr[chr] = [start, stop]

    return centromeres_by_chr


def merge_centromeres(bands_by_chr, centromeres):
    """Adds p and q arms to cytobands; thus adds centromere to each chromosome.

    This is a special case for Zea mays (maize, i.e. corn).
    Ensembl Genomes provides band data with no cytogenetic arm assignment.
    Genomaize provides centromere positions for each chromosome.
    This function merges those two datasets to provide input directly
    useable to Ideogram.js.
    """
    logger.info('Entering merge_centromeres')
    new_bands = {}

    for chr in bands_by_chr:
        bands = bands_by_chr[chr]
        new_bands[chr] = []
        centromere = centromeres[chr]
        cen_start, cen_stop = centromere
        pcen_index = None

        j = 0
        for i, band in enumerate(bands):
            new_band = band
            band_start, band_stop = band[1:3]
            if int(band_stop) < int(cen_start):
                arm = 'p'
            else:

                arm = 'q'

                if int(band_start) < int(cen_stop):
                    # Omit any q-arm bands that start before q-arm pericentromeric band
                    if chr == '1':
                        logger.info('Omit band:')
                        logger.info(band)
                    j += 1
                    continue

                if pcen_index is None:
                    pcen_index = i - j

                    # Extend nearest p-arm band's stop coordinate to the
                    # p_cen's start coordinate (minus 1)
                    cen_start_pre = str(int(cen_start) - 1)
                    new_bands[chr][i - j - 1][3] = cen_start_pre
                    new_bands[chr][i - j - 1][5  ] = cen_start_pre

                    # Extend nearest q-arm band's start coordinate to the
                    # q_cen's stop coordinate (plus 1)
                    cen_stop_post = str(int(cen_stop) + 1)
                    bands[i + j][1] = cen_stop_post
                    bands[i + j][3] = cen_stop_post

                    # Coordinates of the centromere itself
                    cen_mid = int(cen_start) + round((int(cen_stop)-int(cen_start))/2)

                    pcen = [
                        'p', 'pcen', cen_start, str(cen_mid - 1),
                        cen_start, str(cen_mid - 1), 'acen'
                    ]
                    qcen = [
                        'q', 'qcen', str(cen_mid), cen_stop,
                        str(cen_mid), cen_stop, 'acen'
                    ]
            new_band.insert(0, arm)
            new_bands[chr].append(new_band)
        if pcen_index is not None:
            new_bands[chr].insert(pcen_index, qcen)
            new_bands[chr].insert(pcen_index, pcen)
    return new_bands


def parse_centromeres(bands_by_chr):
    """Adds p and q arms to cytobands, by parsing embedded centromere bands.

    This is a special case for assigning cytogenetic arms to certain organisms
    from Ensembl Genomes, including: Aspergillus fumigatus, Aspergillus
    nidulans, Aspergillus niger, Aspergillus oryzae (various fungi);
    Oryza sativa (rice); and Hordeum vulgare (barley).

    Bands are assigned an arm based on their position relative to the embedded
    centromere.
    """
    logger.info('Entering parse_centromeres')

    # If centromeres aren't embedded in the input banding data,
    # then simply return the input without modification.
    has_centromere = False
    for chr in bands_by_chr:
        bands = bands_by_chr[chr]
        for band in bands:
            stain = band[-1]
            if stain == 'acen':
                has_centromere = True
    if has_centromere is False:
        return bands_by_chr

    new_bands = {}

    for chr in bands_by_chr:
        bands = bands_by_chr[chr]
        new_bands[chr] = []

        # On each side of the centromere -- the p-arm side and the q-arm
        # side -- there is a band with a "stain" value of "acen".  Here,
        # we find the index of the acen band on the p-arm side.  That
        # band and all bands to the left of it are on the p arm.  All
        # bands to the right of it are on the q arm.
        pcen_index = None
        for i, band in enumerate(bands):
            stain = band[-1]
            if stain == 'acen':
                pcen_index = i
        for i, band in enumerate(bands):
            arm = ''
            if pcen_index is not None:
                if i < pcen_index:
                    arm = 'p'
                else:
                    arm = 'q'
            band.insert(0, arm)
            new_bands[chr].append(band)

    return new_bands


def patch_telomeres(bands_by_chr):
    """Account for special case with Drosophila melanogaster
    """
    for chr in bands_by_chr:
        first_band = bands_by_chr[chr][0]
        start = first_band[1]
        if start != '1':
            stop = str(int(start) - 1)
            pter_band = ['pter', '1', stop, '1', stop, 'gpos']
            bands_by_chr[chr].insert(0, pter_band)

    new_bands = {}
    for chr in bands_by_chr:
        new_bands[chr] = []
        for band in bands_by_chr[chr]:
            band.insert(0, 'q')
            new_bands[chr].append(band)
    bands_by_chr = new_bands

    return bands_by_chr


def pool_processing(party):
    """Called once per "party" (i.e. UCSC, Ensembl, or GenoMaize)
    to fetch cytoband data from each.
    """
    logger.info('Entering pool processing, party: ' + party)
    if party == 'ensembl':
        org_map = fetch_from_ensembl_genomes()
    elif party == 'ucsc':
        org_map = fetch_from_ucsc()
    elif party == 'genomaize':
        org_map = fetch_maize_centromeres()

    logger.info('exiting pool processing')
    return [party, org_map]


party_list = []
unfound_dbs = []
zea_mays_centromeres = {}


def main():

    # Request data from all parties simultaneously
    num_threads = 3
    with ThreadPoolExecutor(max_workers=num_threads) as pool:
        parties = ['ensembl', 'ucsc', 'genomaize']
        for result in pool.map(pool_processing, parties):
            party = result[0]
            if party == 'genomaize':
                zea_mays_centromeres = result[1]
            else:
                party_list.append(result)

    logger.info('')
    logger.info('UCSC databases not mapped to GenBank assembly IDs:')
    logger.info(', '.join(unfound_dbs))
    logger.info('')

    # Third parties (e.g. UCSC, Ensembl) can have data for the same organism.
    # Convert any such duplicate data into a non-redundant (NR) organism map.
    nr_org_map = {}
    seen_orgs = {}
    for party, org_map in party_list:
        logger.info('Iterating organisms from ' + party)
        for org in org_map:
            logger.info('\t' + org)
            if org in seen_orgs:
                logger.info('Already saw ' + org)
                continue
            nr_org_map[org] = org_map[org]

    manifest = {}

    for org in nr_org_map:

        asm_data = sorted(nr_org_map[org], reverse=True)[0]
        genbank_accession, db, bands_by_chr = asm_data

        manifest[org] = [genbank_accession, db]

        if org == 'drosophila-melanogaster':
            bands_by_chr = patch_telomeres(bands_by_chr)

        # Assign cytogenetic arms for each band
        if org == 'zea-mays':
            bands_by_chr = merge_centromeres(bands_by_chr, zea_mays_centromeres)
        else:
            bands_by_chr = parse_centromeres(bands_by_chr)

        # Collapse chromosome-to-band dict, making it a list of strings
        band_list = []
        chrs = natural_sort(list(bands_by_chr.keys()))
        for chr in chrs:
            bands = bands_by_chr[chr]
            for band in bands:
                band_list.append(chr + ' ' + ' '.join(band))

        # Write actual cytoband data to file,
        # e.g. ../data/bands/native/anopheles-gambiae.js
        with open(output_dir + org + '.js', 'w') as f:
            f.write('window.chrBands = ' + str(band_list))

    logger.info('')

    # How long did each part take?
    logger.info('time_ucsc:')
    logger.info(time_ucsc)
    logger.info('time_ncbi:')
    logger.info(time_ncbi)
    logger.info('time_ensembl:')
    logger.info(time_ensembl)

    return manifest


if __name__ == '__main__':
    main()
