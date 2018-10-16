"""Converts cytogenetic band data from TSV to JSONP

Example:
cd python/scripts
python3 convert_band_data.py

NCBI provides cytogenetic band data as a TSV file.
This script parses those TSVs into JSONP, and assigns that to
a global variable in any HTML document that includes the output
file.

NCBI: #chromosome  arm band  iscn_start  iscn_stop bp_start  bp_stop stain density
ftp://ftp.ncbi.nlm.nih.gov/pub/gdp/ideogram_9606_GCF_000001305.14_550_V1

"""

import json
from os import walk

# Upstream NCBI ideogram files had the following naming pattern:
# * ideogram_$taxonomyID_$primaryAssemblyUnitAccession_$bandResolution_$version
#
# Transformed data files have been renamed to use the following pattern:
# * $scientificName-$assemblyAccession-$bandResolution.js
#
# The renaming improves human intelligibility, and allows Ideogram.js to
# bypass API calls to look up Taxonomy IDs and primary assembly unit
# acc.ver.  The latter significantly improves performance for simple use cases.
#
# Some mappings contain two output filenames.  This enables Ideogram.js to
# look up these local data files when assembly accession is specified in the
# Ideogram constructor
output_mappings = {
    'ideogram_9606_GCF_000001305.14_850_V1': [
        'homo-sapiens',
        'homo-sapiens-GCF_000001405.26'
    ],
    'ideogram_9606_GCF_000001305.14_550_V1': [
        'homo-sapiens-550',
        'homo-sapiens-GCF_000001405.26-550'
    ],
    'ideogram_9606_GCF_000001305.14_400_V1': [
        'homo-sapiens-400',
        'homo-sapiens-GCF_000001405.26-400'
    ],
    'ideogram_9606_GCF_000001305.13_850_V1': [
        'homo-sapiens-GCF_000001405.13',
        'homo-sapiens-GCF_000001405.13-850'
    ],
    'ideogram_9606_GCF_000001305.13_550_V1': [
        'homo-sapiens-GCF_000001405.13-550'
    ],
    'ideogram_9606_GCF_000001305.12_1200_V1': [
        'homo-sapiens-GCF_000001405.12-1200'
    ],
    'ideogram_9606_GCF_000001305.12_850_V1': [
        'homo-sapiens-GCF_000001405.12',
        'homo-sapiens-GCF_000001405.12-850'
    ],
    'ideogram_9606_GCF_000001305.12_550_V1': [
        'homo-sapiens-GCF_000001405.12-550'
    ],
    'ideogram_9606_GCF_000001305.12_400_V1': [
        'homo-sapiens-GCF_000001405.12-400'
    ],
    'ideogram_10090_GCF_000000055.19_NA_V2': [
        'mus-musculus',
        'mus-musculus-GCF_000001635.20'
    ],
    'ideogram_10116_GCF_000000225.4_NA_V1': [
        'rattus-norvegicus',
        'rattus-norvegicus-GCF_000001895.5'
    ],
    'ideogram_10116_GCF_000000225.1_NA_V1': [
        'test',
        'test-GCF_000000225.1'
    ]
}


def main():
    in_dir = '../../static/data/bands/ncbi/'
    out_dir = '../../static/data/bands/native/'

    f = []
    for (dirpath, dirnames, filenames) in walk(in_dir):
        print(filenames)
        f.extend(filenames)
        break

    for input_file in f:

        if input_file[-3:] != 'tsv':
            # Skip e.g. README.md
            continue

        output = []

        fn = input_file.split('.tsv')[0]
        if fn in output_mappings:
            fn = output_mappings[fn]
        else:
            # e.g. "banana.tsv" -- for pre-accessioned assemblies
            fn = [fn]
        output_file = out_dir + fn[0] + '.js'

        rows = open(in_dir + input_file, 'r').readlines()

        if len(rows[0].split("\t")) == 4:
            # e.g. ../data/bands/ncbi/ideogram_banana_v0.1.tsv
            #chromosome	arm	bp_start	bp_stop
            max_chr_length = 0
            for row in rows[1:]:
                columns = row.split('\t')
                bp_stop = int(columns[3])
                if bp_stop > max_chr_length:
                    max_chr_length = bp_stop
            for row in rows[1:]:
                columns = row.split('\t')

                chr = columns[0]
                arm = columns[1]
                band = '1'
                bp_start = int(columns[2])
                bp_stop = int(columns[3])
                iscn_start = '0'
                iscn_stop = str(round(bp_stop - bp_start) / max_chr_length * 10000)

                columns = [
                    chr, arm, band,
                    iscn_start, iscn_stop,
                    str(bp_start), str(bp_stop)
                ]
                output.append(" ".join(columns))

        else:
            # e.g. ../data/bands/ncbi/ideogram_9606_GCF_000001305.13_550_V1
            # #chromosome	arm	band	iscn_start	iscn_stop	bp_start	bp_stop	stain	density
            for row in rows[1:]:
                columns = row.replace('\n', '').replace('\t', ' ')
                output.append(columns)

        output = json.dumps(output)
        output = 'window.chrBands = ' + output + ';'
        open(output_file, 'w').write(output)

        # Write assembly-specific name, if default omits assembly
        if len(fn) > 1:
            output_file_2 = out_dir + fn[1] + '.js'
            open(output_file_2, 'w').write(output)


if __name__ == '__main__':
    main()
