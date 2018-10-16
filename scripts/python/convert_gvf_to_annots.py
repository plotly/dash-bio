''' Converts GVF data from dbVar to JSON-formatted annotations'''

import re, json, random



def main():
    annots = []

    chrs = [
        "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
        "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
        "21", "22", "X", "Y"
    ]

    lengths_GRCh37 = {
        "1": 249250621, "2": 243199373, "3": 198022430,
        "4": 191154276, "5": 180915260, "6": 171115067,
        "7": 159138663, "8": 146364022, "9": 141213431,
        "10": 135534747, "11": 135006516, "12": 133851895,
        "13": 115169878, "14": 107349540, "15": 102531392,
        "16": 90354753, "17": 81195210, "18": 78077248,
        "19": 59128983, "20": 63025520, "21": 48129895,
        "22": 51304566, "X": 155270560, "Y": 59373566
    }

    lengths_GRCh38 = {
        "1": 248956422, "2": 242193529, "3": 198295559,
        "4": 190214555, "5": 181538259, "6": 170805979,
        "7": 159345973, "8": 145138636, "9": 138394717,
        "10": 133797422, "11": 135086622, "12": 133275309,
        "13": 114364328, "14": 107043718, "15": 101991189,
        "16": 90338345,	"17": 83257441, "18": 80373285,
        "19": 58617616, "20": 64444167, "21": 46709983,
        "22": 50818468, "X": 156040895, "Y": 57227415
    }

    file_name = "../../static/data/annotations/estd1.GRCh37.variant_region.gvf"

    file = open(file_name, "r").readlines()


    for chr in chrs:
        annots.append({"chr": chr, "annots": []})
    for line in file[1:]:
        if line[0] == "#":
            continue

        columns = line.strip().split("\t")

        chr = columns[0]

        # E.g. NC_000001.11 -> 1
        # This RefSeq hack only works for human chromosomes 1-22
        chr = str(int(chr.split(".")[0][-2:]))

        if chr == "23":
            chr = "X"
        elif chr == "24":
            chr = "Y"

        if chr not in chrs:
            # E.g. chrMT, alternate loci scaffolds
            continue

        name = ""
        gff_attrs = columns[8].split(";")
        for attr in gff_attrs:
            tmp = attr.split("=")
            if tmp[0] == "Name":
                name = tmp[1]

        start = int(columns[3])

        stop = int(columns[4]) - start

        annot = [
            name,
            start,
            stop,
            1 # placeholder for future use
        ]

        for x in annots:
            x['annots'].append(annot)


    annots = json.dumps(annots)
    annots = '{"annots":' + annots + '}'

    open("../../static/data/annotations/estd1.GRCh37.variant_region.json", "w").write(annots) 

if __name__ == '__main__':
    main()
