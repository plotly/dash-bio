import os
import subprocess
import pandas as pd
import csv
import json
import numpy as np
from random import randint

'''
Use this script to convert data from http://genome.ucsc.edu/cgi-bin/hgTables
to usable .json or .CSV from a txt file. This is just a test script and
can still use some work.

On the UCSC website, be sure to select the following when retreiving your data:

Group: Mapping and Sequencing
Track: Chromosome band (Ideogram)
'''


def main():
    init_name = input("Enter file name (txt file without extension): ")
    main_data = "{}.txt".format(init_name)
    track_csv = "{}.csv".format(init_name)
    track_json = "{}.json".format(init_name)
    layout_csv = "{}Layout.csv".format(init_name)
    layout_json = "{}Layout.json".format(init_name)

    input_delimiter = input("Enter delimiter (Ex: '\t'): ")

    data_one = pd.read_csv(
        main_data, delimiter=input_delimiter, engine="python")
    data_one.rename(columns={'#chrom': 'block_id', 'chromStart': 'start',
                             'chromEnd': 'end', 'gieStain': 'color'}, inplace=True)
    data_one = data_one[data_one["block_id"].map(len) < 6]

    multi_chr = input("Add to Chromosome? (y/n)?: ")
    if multi_chr == "y":
        multi_chr = input("What to add?: ")
        data_one['block_id'] = data_one['block_id'] + multi_chr

    data_two = data_one.copy()
    data_two.rename(columns={'block_id': 'id', 'end': 'len'}, inplace=True)

    # Append Color Array
    rows = len(data_one.index)
    array = []
    for row in range(rows):
        r = randint(0, 255)
        g = randint(0, 255)
        b = randint(0, 255)
        rgb = "rgb({},{},{})".format(r, g, b)
        array.append(rgb)
        
    # print(pd.Series(color, dtype="object"))
    data_one['color'] = data_one['color'].ffill()
    print(data_one)
    data_one['color'] = data_one['color'].map(
        {"gneg": "rgb(173,6,6)",
         "acen": "rgb(130,130,130)",
         "n/a": "rgb(255,127,80)",
         "gpos25": "rgb(153, 204, 255)",
         "gpos100": "rgb(153, 255, 102)",
         "gpos75": "rgb(102, 51, 0)",
         "gpos50": "rgb(255, 0, 255)",
         "gvar": "rgb(204, 153, 0)"
         })

    data_two["color"] = pd.Series(array, dtype="object")
    data_two = data_two.sort_values(
        'id', ascending=False).drop_duplicates(['id'])
    data_one.to_csv(track_csv, encoding="utf-8", index=False)
    data_two.to_csv(layout_csv, encoding="utf-8", index=False)

    # Edit Track Info
    print("Please edit the CSV file columns to the Circos layout and remove any unneccessary data.")
    os.system(track_csv)

    data_one = pd.read_csv(track_csv)

    jsonfileOne = open(track_json, 'w')

    data_one = data_one.to_dict(orient='records')
    out = json.dumps(data_one)
    jsonfileOne.write(out)

    # Edit Layout Info
    print("Please edit the CSV file columns to the Circos layout and remove any unneccessary data.")
    os.system(layout_csv)

    data_two = pd.read_csv(layout_csv)
    jsonfileTwo = open(layout_json, 'w')

    data_two = data_two.to_dict(orient='records')
    out = json.dumps(data_two)
    jsonfileTwo.write(out)

    print("Finished")


if __name__ == "__main__":
    main()
