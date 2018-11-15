import os
import subprocess
import pandas as pd
import csv
import json
import numpy as np
from random import randint
import re

'''
This code was written to parse data from the UCSC website, with settings:

Group: Mapping and Sequencing
Track: Chromosome band (Ideogram)

The parser can either create local .JSON or.CSV files, or be used directly
in your code.
@param txt_to_layout(...)
Call this function to produce a layout.

@param txt_to_layout(...)
Call this function to produce a track.

@param file_name
File name of track data set including .txt extension. Used for track.

@param file_one_name
File name of first data set including .txt extension. Don't fill in file_two_name 
if you just want the layout of one dataset. Used for layout.

@param file_two_name
File name second dataset including .txt extension. Don't fill in if you just
want the layout of file_one_name. Used for layout.

@param append_one
Append dataset labels of dataset one. Used if you are using two datasets with the same labels.

@param append_two
Append dataset labels of dataset one. Used if you are using two datasets with the same labels.

@param relPath 
Set to "True" if using a relative path for file_one_name, file_two_name, or file_name.

@param create_local
Set to to "True" if you want to create a .CSV and .JSON version of your dataset. When this
is "False" the program will return a direct python dict/JSON object that can be used in dash.
'''


def colors_array_layout(data):
    rows = len(data.index)
    array = []
    for row in range(rows):
        r = randint(0, 255)
        g = randint(0, 255)
        b = randint(0, 255)
        rgb = "rgb({},{},{})".format(r, g, b)
        array.append(rgb)
    return array


def colors_array_track(data):
    data['color'] = data['color'].ffill()
    data['color'] = data['color'].map(
        {"gneg": "rgb(173,6,6)",
         "acen": "rgb(130,130,130)",
         "n/a": "rgb(255,127,80)",
         "gpos25": "rgb(153, 204, 255)",
         "gpos100": "rgb(153, 255, 102)",
         "gpos75": "rgb(102, 51, 0)",
         "gpos50": "rgb(255, 0, 255)",
         "gvar": "rgb(204, 153, 0)"
         })
    return data


def txt_to_layout(file_one_name='', file_two_name='', append_one='', append_two='', relPath=False, create_local=True):
    data_name = os.path.splitext(file_one_name)[0]
    if file_two_name == '':
        if relPath is False:
            main_data = "{}.txt".format(data_name)
        else:
            main_data = os.path.basename(file_one_name)
            data_name = os.path.splitext(main_data)[0]
        
        data = pd.read_csv(main_data, delimiter='\t', engine="python")
        data["chromStart"] = data["#chrom"]
        data.rename(columns={'#chrom': 'id', 'chromStart': 'label',
                             'chromEnd': 'len', 'gieStain': 'color'}, inplace=True)
        data = data[data["id"].map(len) < 6]
        if append_one != '':
            data['id'] = data['id'] + append_one

        # Creates an array of random colors to be used for layout
        array = colors_array_layout(data)

        data["color"] = pd.Series(array, dtype="object")
        data = data.sort_values('id', ascending=False).drop_duplicates(['id'])
        data = data.dropna()

        if create_local:
            data.to_csv("{}Layout.csv".format(data_name),
                        encoding="utf-8", index=False)
            data = data.to_dict(orient='records')
            json_file = open("{}Layout.json".format(data_name), 'w')
            out = json.dumps(data)
            json_file.write(out)
        else:
            data = data.to_dict(orient='records')
        return data
    else:
        for file_name in [file_one_name, file_two_name]:
            if relPath is False:
                main_data = "{}.txt".format(os.path.splitext(file_name)[0])
                print("main_data file_name test", main_data)
            else:
                main_data = file_name

            data = pd.read_csv(main_data, delimiter='\t', engine="python")

            data["chromStart"] = data["#chrom"]
            data.rename(columns={'#chrom': 'id', 'chromStart': 'label',
                                 'chromEnd': 'len', 'gieStain': 'color'}, inplace=True)
            data = data[data["id"].map(len) < 6]

            if type(file_one_name) == type(''):
                data['id'] = data['id'] + append_one
            else:
                data['id'] = data['id'] + append_two

            # Creates an array of random colors to be used for layout
            array = colors_array_layout(data)

            data["color"] = pd.Series(array, dtype="object")
            data = data.sort_values(
                'id', ascending=False).drop_duplicates(['id'])
            if type(file_one_name) == type(''):
                file_one_name = data.copy()
            else:
                data = data.append(file_one_name, ignore_index=True)
                data = data.dropna()

        if create_local:
            data.to_csv("multi_layout.csv", encoding="utf-8", index=False)
            json_file = open("multi_layout.json", 'w')
            data = data.to_dict(orient='records')
            out = json.dumps(data)
            json_file.write(out)
            return
        else:
            data = data.to_dict(orient='records')
        return data


def txt_to_track(file_name='', append_block_id='', relPath=False, create_local=False):
    file_name = os.path.splitext(file_name)[0]
    main_data = "{}.txt".format(file_name)
    if relPath:
        file_name = os.path.basename(file_name) 
 

    data = pd.read_csv(main_data, delimiter='\t', engine="python")
    data.rename(columns={'#chrom': 'block_id', 'chromStart': 'start',
                         'chromEnd': 'end', 'gieStain': 'color'}, inplace=True)
    data = data[data["block_id"].map(len) < 6]

    if append_block_id != '':
        data['block_id'] = data['block_id'] + append_block_id

    # Replaces stains with an RGB color
    data = colors_array_track(data)

    # Edit Track Info
    if create_local:
        data.to_csv("{}.csv".format(file_name), encoding="utf-8", index=False)
        jsonfileOne = open("{}.json".format(file_name), 'w')
        data = data.to_dict(orient='records')
        out = json.dumps(data)
        jsonfileOne.write(out)
        return
    else:
        data = data.to_dict(orient='records')
    return data

# if __name__ == "__main__":
#     # layout = txt_to_layout(
#     # file_one_name="./dash_bio/utils/GRCh37.txt",
#     # file_two_name="./dash_bio/utils/GRCh38.txt",
#     # append_one="-7",
#     # append_two="-8",
#     # relPath=True,
#     # create_local=False,
#     # )

#     # track_one = txt_to_track(
#     #     file_name="./dash_bio/utils/GRCh37.txt",
#     #     append_block_id="-7",
#     #     relPath=True,
#     #     create_local=False,
#     # )
#     # track_two = txt_to_track(
#     #     file_name="./dash_bio/utils/GRCh38.txt",
#     #     append_block_id="-8",
#     #     relPath=True,
#     #     create_local=False,
#     # )

#     # layout = txt_to_layout(
#     #     file_one_name="GRCh37.txt",
#     #     file_two_name="GRCh38.txt",
#     #     append_one="-7",
#     #     append_two="-8",
#     #     relPath=False,
#     #     create_local=True,
#     # )

#     track_one = txt_to_track(
#         file_name="./test/GRCh37.txt",
#         append_block_id="-7",
#         relPath=True,
#         create_local=False,
#     )
    
#     print(track_one)

#     # track_two = txt_to_track(
#     #     file_name="GRCh38.txt",
#     #     append_block_id="-8",
#     #     relPath=False,
#     #     create_local=False,
#     # )

#     # print(layout)
#     # print(track_one)
#     # print(track_two)