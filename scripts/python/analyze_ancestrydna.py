import json
import re
import os
import urllib.request as request
import gzip
import argparse
import shutil
from collections import OrderedDict

parser = argparse.ArgumentParser(description=
    "Analyze AncestryDNA raw data.  Outputs plaintext genome analysis and " +
    "interactive genome-wide visualization of AncestryDNA genomic data\n\n" +
    "Example:\n" +
    "python3 analyze_ancestrydna.py --input ~/AncestryDNA.txt",
    formatter_class=argparse.RawTextHelpFormatter
)
parser.add_argument("--input", "-i",
    help="Input AncestryDNA.txt file",
    required=True)
parser.add_argument("--snpedia", "-s",
    help="Show SNPpedia result.  Default: true",
    type=bool,
    default=True)
args = parser.parse_args()

show_snpedia_results = args.snpedia

data_dir = "../../data/analysis/"
if os.path.exists(data_dir) == False:
    os.mkdir(data_dir)

input_file = args.input
output_file = data_dir + "genome_analysis.txt"

# Raw sample data from AncestryDNA
ancestrydna_sample =  open(input_file).readlines()

# Download ClinVar data if not already available
date = '20170905'
year = date[:4]
leaf = 'clinvar_' + date + '.vcf'
clinvar_vcf_path = data_dir + leaf
if os.path.exists(clinvar_vcf_path) == False:
    url = "ftp://ftp.ncbi.nlm.nih.gov/pub/clinvar/vcf_GRCh37/archive_1.0/" + year + "/" + leaf + ".gz"
    with request.urlopen(url) as response:
        gzip_file = gzip.GzipFile(fileobj=response)
        with open(clinvar_vcf_path, "w") as f:
            for line in gzip_file:
                f.write(line.decode("utf-8"))

with open(clinvar_vcf_path) as f:
    clinvar_vcf_file = f.readlines()

# Download SNPedia data if not already available
snpedia_json_path = data_dir + "snpedia-archive.json"
if os.path.exists(snpedia_json_path) == False:
    url = "https://raw.githubusercontent.com/heiner/snpedia-23andme/master/snpedia-archive.json"
    with request.urlopen(url) as response:
        data = response.read()
        with open(snpedia_json_path, "w") as f:
            f.write(data.decode("utf-8"))

with open(snpedia_json_path) as f:
    snpedia_json = json.loads(f.read())

output = []

rsids = {}

bed = []

clinallele_re = re.compile("CLNALLE=(-?\d+)")
disease_re = re.compile("CLNDBN=([^;]*)")
clinsig_re = re.compile("CLNSIG=([^;]*)")
clinrevstat_re = re.compile("CLNREVSTAT=([^;]*)")
clinacc_re = re.compile("CLNACC=([^;]*)")
gene_re = re.compile("GENEINFO=(\w+)")

num_ancestrydna_rsids = 0
num_skipped_clinvars = 0

annots = []
clin_annots = []

allele_map = {
    "A": 0,
    "T": 1,
    "C": 2,
    "G": 3,
    "0": 4,
    "I": 4, # indel / insertion
    "D": 4 # indel / deletion
}

seen_chrs = {}
seen_chrs_clin_annots = {}

clinical_alleles = []

clinvar_url = "https://www.ncbi.nlm.nih.gov/clinvar/"

def complement(nt):
    complements = {
        "A": "T",
        "T": "A",
        "C": "G",
        "G": "C"
    }
    return complements[nt]


clinsig_labels = {
    0: "Uncertain significance",
    1: "Not provided",
    2: "Benign",
    3: "Likely benign",
    4: "Likely pathogenic",
    5: "Pathogenic",
    6: "Drug response",
    7: "Histocompatibility",
    255: "Other"
}

rs_summaries = OrderedDict([
    ("pathogenic", []),
    ("likely_pathogenic", []),
    ("drug_response", [])
])

if show_snpedia_results:
    rs_summaries["snpedia"] = []

def get_snpedia_comment(name, allele1, allele2):

    if name in snpedia_json and snpedia_json[name]:
        # SNPedia RS object, e.g.
        a1 = allele1
        a2 = allele2

        if a1 in (("I", "D", "0")) or a1 in (("I", "D", "0")):
            # Skip insertions, deletions, or unknown
            return []

        sample_genotype = a1 + a2
        srs = snpedia_json[name]
        if srs["original_orientation"] == "minus":
            sample_genotype = complement(a1) + complement(a2)
        if sample_genotype in srs["genotypes"]:
            sg = srs["genotypes"][sample_genotype]
            if sg["comment"].lower() in ((
                "", "common in clinvar", "common in complete genomics",
                "common on affy axiom data", "normal", "common", "?", "none",
                "normal risk", "average", "common/normal",
                "normal (orientation reversed)"
            )):
                # Skip uninformative entries
                return []
            else:
                return sg["comment"]

    return []

def convert_to_bed(ancestry_dna_columns):
    '''
    From https://www.biostars.org/p/153805/#153946:

    So here's what my original data from AncestryDNA would have looked like:
    rs4477212    1    82154    T    T
    rs3131972    1    752721    G    G
    rs12562034    1    768448    A    G

    And here's what it would look like in bed detail format:

    chr1    82153    82154    rs4477212    0    +    82153    82154    0,0,255    1    1    0    rs4477212    TT
    chr1    752720    752721    rs3131972    0    +    752720    752721    0,0,255    1    1    0    rs3131972    GG
    chr1    768447    768448    rs12562034    0    +    768447    768448    0,0,255    1    1    0    rs12562034    AG
    '''
    columns = ancestry_dna_columns
    bed_line = [
        "chr" + columns[1],
        columns[2],
        str(int(columns[2]) + 1),
        columns[0],
        "0\t+",
        columns[2],
        str(int(columns[2]) + 1),
        "0,0,255\t1\t1\t0",
        columns[0],
        columns[3] + columns[4]
    ]
    bed_line = "\t".join(bed_line)
    return bed_line

# Column headers of VCF file:
# #CHROM  POS     ID      REF     ALT     QUAL    FILTER  INFO
#
# Example line from body of VCF file:
# 1       169519049       rs6025  T       C       .       .       RS=6025;RSPOS=169519049;RV;dbSNPBuildID=52;SSR=0;SAO=1;VP=0x050168000a0504053f130101;GENEINFO=F5:2153;WGT=1;VC=SNV;PM;PMC;SLO;NSM;REF;ASP;VLD;HD;GNO;KGPhase1;KGPhase3;LSD;MTP;OM;CLNALLE=0,1;CLNHGVS=NC_000001.10:g.169519049T\x3d,NC_000001.10:g.169519049T>C;CLNSRC=OMIM_Allelic_Variant,PharmGKB_Clinical_Annotation|PharmGKB;CLNORIGIN=1,1;CLNSRCID=612309.0001,1183689558|1183689558;CLNSIG=5|255|255|255|5,6;CLNDSDB=MedGen|.|.|MedGen:OMIM:SNOMED_CT|MedGen:OMIM:ORPHA:SNOMED_CT,MedGen;CLNDSDBID=C2674152|.|.|C0000809:614389:102878001|C0015499:227400:326:4320005,CN236515;CLNDBN=Thrombophilia_due_to_factor_V_Leiden|Ischemic_stroke\x2c_susceptibility_to|Budd-Chiari_syndrome\x2c_susceptibility_to|Recurrent_abortion|Factor_V_deficiency,hormonal_contraceptives_for_systemic_use_response_-_Toxicity/ADR;CLNREVSTAT=no_criteria|no_criteria|no_criteria|no_criteria|single,exp;CLNACC=RCV000000674.2|RCV000000675.3|RCV000000676.2|RCV000023935.2|RCV000205002.3,RCV000211384.1;CAF=0.00599,0.994;COMMON=1
#
# See top of clinvar_vcf_file for description of inner INFO columns
for line in clinvar_vcf_file:

    # Skip header lines
    if line[0] == "#":
        continue

    columns = line.strip().split("\t")

    rsid = columns[2]

    info = columns[7]
    clinallele_indexes = clinallele_re.search(info).group(1).split(",")
    diseases = disease_re.search(info).group(1).split(",")
    clinsigs = clinsig_re.search(info).group(1).split(",")
    clinrevstats = clinrevstat_re.search(info).group(1).split(",")
    clinaccs = clinacc_re.search(info).group(1).split(",")

    if clinallele_indexes[0] == "-1":
        num_skipped_clinvars += 1

    ref = columns[3] # Reference allele, e.g. "A"
    alt = columns[4].split(",") # Alternate allele(s), e.g. ["T","C"]
    alleles = alt
    alleles.insert(0, ref) # Ref + alts, e.g. ["A", "T", "C"]

    gene_group = gene_re.search(info)
    if gene_group:
        gene = gene_group.group(1)
    else:
        gene = ""

    clinalleles = []
    if len(clinallele_indexes) > 1:
        for i in clinallele_indexes:
            clinalleles.append(int(alleles[i]))
    else:
        clinalleles.append(alleles[int(clinallele_indexes[0])])

    tmp = []
    # Mapping cardinalities:
    # 1 RS ID : 1+ clinical alleles (one-to-many)
    # 1 allele : 1+ diseases (one-to-many)
    # 1 disease : 1 clinical significance (one-to-one)
    # In other words, each RS ID can have multiple alleles, and each allele
    # can be associated multiple one of more diseases,
    # each of which has one clinical significance
    for i, clinsig_list in enumerate(clinsigs):
        for j, clinsig in enumerate(clinsig_list.split("|")):

            disease = diseases[i].split("|")[j]
            disease = disease.replace("_", " ")
            # TODO: Properly decode non-Python-Unicode Unicode hex codes
            disease = disease.replace("\\x2c", ",")

            clinacc = clinaccs[i].split("|")[j]

            clinrevstat = clinrevstats[i].split("|")[j]

            tmp.append([int(clinsig), disease, clinrevstat, clinacc])
    clinsigs = tmp

    rsids[rsid] = {
        "clinalleles": clinalleles,
        "clinsigs": clinsigs,
        "gene": gene
    }

for line in ancestrydna_sample:

    if line[0] == "#" or line[:4] == "rsid":
        continue

    num_ancestrydna_rsids += 1

    columns = line.strip().split("\t")

    bed_line = convert_to_bed(columns)
    bed.append(bed_line)

    name = columns[0] # rsid
    chr_index = int(columns[1])
    chr = str(chr_index) # chromosome
    start = int(columns[2]) # position
    length = 1 # they're all single nucleotide variants
    allele1 = columns[3]
    allele2 = columns[4]

    if chr == "23":
    	chr = "X"
    elif chr == "24":
    	chr = "Y"
    elif chr == "25" or chr == "26":
        continue # TODO: mitochondrial DNA

    homozygous = 0
    if (allele1 == allele2):
        homozygous = 1

    if homozygous == 1:
        # Zygosity
        zygo = "homozygous"
    else:
        zygo = "heterozygous"

    genotype = name + "(" + allele1 + ";" + allele2 + ")"

    if name not in rsids:
        continue

    clinalleles  = rsids[name]["clinalleles"]

    if show_snpedia_results:
        snpedia_comment = get_snpedia_comment(name, allele1, allele2)
        if len(snpedia_comment) > 0:
            # SNPedia seems noisier than ClinVar, also much overlap.
            rs_summaries["snpedia"].append(
                "SNPedia result for " + genotype + ":\n" +
                    "\t" + snpedia_comment
            )

    for i, clinallele in enumerate(clinalleles):
        if name in rsids and clinallele in set((allele1, allele2)):
            #output.append("clinical: " + name)
            # TODO: Hom vs. het clinsig
            cs_d_crs_ca = rsids[name]["clinsigs"][i]
            clinsig = cs_d_crs_ca[0]
            disease = cs_d_crs_ca[1]
            clinrevstat = cs_d_crs_ca[2]
            clinacc = cs_d_crs_ca[3]
            if clinsig > 3 and clinsig != 255:
                clinical_alleles.append(
                    name + " "
                    "chr" + chr + ":" + str(start) + " " +
                    rsids[name]["gene"]
                )

                cs_label = clinsig_labels[clinsig]

                rs_summary = (
                    "\n" + cs_label + ", " + zygo + ": " + genotype + "\n" +
                        "\tDisease: " + disease + "\n" +
                        "\tReview status: " + clinrevstat + "\n" +
                        "\tClinVar record: " + clinvar_url + clinacc
                )
                key = cs_label.lower().replace(" ", "_")
                rs_summaries[key].append(rs_summary)

            if clinsig in set((0,2,3,4,5)):
                track_index = clinsig - 1
                # Simplify to "Pathogenic or likely pathogenic" or
                # "Benign or likely benign"
                if track_index in ((4, 3)):
                    # Pathogenic or likely pathogenic
                    track_index = 2
                elif track_index == -1:
                    # Uncertain significance
                    track_index = 1
                elif track_index in ((1, 2)):
                    # Benign or likely benign
                    track_index = 0
                clin_annot = [name, start, length, track_index]
                if chr in seen_chrs_clin_annots:
                    clin_annots[chr_index - 1]["annots"].append(clin_annot)
                else:
                    clin_annots.append({"chr": chr, "annots": [clin_annot]})
                    seen_chrs_clin_annots[chr] = 1
        else:
            clinsig = -1 # Not in ClinVar

        allele1 = allele_map[allele1]
        allele2 = allele_map[allele2]

        annot = [
            name,
            start,
            length,
            homozygous,
            allele1,
            allele2,
            clinsig
        ]

        if chr in seen_chrs:
            annots[chr_index - 1]["annots"].append(annot)
        else:
            annots.append({"chr": chr, "annots": [annot]})
            seen_chrs[chr] = 1

top_annots = {}
top_annots["keys"] = [
    "name", "start", "length", "homozygous", "allele1", "allele2", "clinsig"
]
top_annots["annots"] = annots
annots = json.dumps(top_annots)
open(data_dir + "ancestrydna.json", "w").write(annots)

top_annots = {}
top_annots["keys"] = [
    "name", "start", "length", "trackIndex"
]
top_annots["annots"] = clin_annots
annots = json.dumps(top_annots)
open(data_dir + "ancestrydna-tracks.json", "w").write(annots)

bed = "\n".join(bed)
open(data_dir + "ancestrydna.bed", "w").write(bed)

output.append("Number variants in AncestryDNA sample:")
output.append(str(num_ancestrydna_rsids) + "\n")

output.append("Number of variants in ClinVar analyzed:")
output.append(str(len(rsids)) + "\n")

output.append("Number of skipped clinical variants:")
output.append(str(num_skipped_clinvars) + "\n")

#for rs in clinical_alleles:
#    output.append(rs)

s = rs_summaries

output.append(
    "\nClinically significant variants in AncestryDNA sample:\n" +
        "\tPathogenic: " + str(len(s["pathogenic"])) + "\n"
        "\tLikely pathogenic: " + str(len(s["likely_pathogenic"])) + "\n"
        "\tDrug response: " + str(len(s["drug_response"])) + "\n"
)

for key in rs_summaries:
    for summary in rs_summaries[key]:
        output.append(summary)

output = "\n".join(output)

open(output_file, "w").write(output)

shutil.copy("../../examples/vanilla/ancestry.html", data_dir)
shutil.copy("../../examples/vanilla/ancestry-tracks.html", data_dir)

print(
    "\nAnalysis of AncestryDNA data in:\n" +
    "\t../data/analysis/genome_analysis.txt\n" +
    "\thttp://localhost/ideogram/data/analysis/ancestry.html\n" +
    "\thttp://localhost/ideogram/data/analysis/ancestry-tracks.html\n"
)
