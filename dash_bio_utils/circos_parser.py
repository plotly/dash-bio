"""Circos parser

 This code was written to parse data from the UCSC website, using the
 following settings:

 Group: Mapping and Sequencing
 Track: Chromosome band (Ideogram)

 The parser can either create local JSON or CSV files, or be used directly
 in your code."""

import json
import os
import pandas as pd
from colour import Color


def colors_array_layout(data):
    """Create an array of colors that is used to specify the layout datum colors.
    The colors are based on a gradient between two specified colors. In this case
    they are "red" and "blue". Change these colors if you'd like a different
    gradient.
    """
    if not isinstance(data, pd.DataFrame):
        raise Exception('This function must be called with a Pandas dataframe.')

    rows = len(data.index)
    input_color = Color("red")
    color_array = list(input_color.range_to(Color("blue"), rows))
    color_array = [color_iter.hex for color_iter in color_array]
    return color_array


def colors_array_track(data):
    """Replace the "stain" provided by the dataset with a RGB color that the
    circos graph can display.
    """
    data['color'] = data['color'].ffill()
    data['color'] = data['color'].map(
        {
            "gneg": "rgb(173,6,6)",
            "acen": "rgb(130,130,130)",
            "n/a": "rgb(255,127,80)",
            "gpos25": "rgb(153, 204, 255)",
            "gpos100": "rgb(153, 255, 102)",
            "gpos75": "rgb(102, 51, 0)",
            "gpos50": "rgb(255, 0, 255)",
            "gvar": "rgb(204, 153, 0)"
        }
    )
    return data


def layout_rename_columns(main_data):
    """Rename layout dataset columns to circos specific data keys."""
    data = pd.read_csv(main_data, delimiter='\t', engine='python')
    data["chromStart"] = data["#chrom"]
    data.rename(columns={'#chrom': 'id', 'chromStart': 'label',
                         'chromEnd': 'len', 'gieStain': 'color'}, inplace=True)
    data = data[data["id"].map(len) < 6]
    return data


def track_rename_columns(main_data):
    """Rename track dataset columns to circos specified data keys."""
    data = pd.read_csv(main_data, delimiter='\t', engine="python")
    data.rename(columns={'#chrom': 'block_id', 'chromStart': 'start',
                         'chromEnd': 'end', 'gieStain': 'color'}, inplace=True)
    data = data[data["block_id"].map(len) < 6]
    return data


def create_local_files(data, file_name):
    """Create local JSON and CSV files."""
    data.to_csv("{}.csv".format(file_name), encoding="utf-8", index=False)
    data = data.to_dict(orient='records')
    json_file = open("{}.json".format(file_name), 'w')
    out = json.dumps(data)
    json_file.write(out)


def txt_to_layout(
        file_one_name='',
        file_two_name='',
        append_one='',
        append_two='',
        rel_path=False,
        create_local=True
):
    """
    Call this function to produce a local .JSON & .CSV layout, or directly in the application.

    @param file_one_name
    File name of first data set including .txt extension. Don't fill in file_two_name
    if you just want the layout of one dataset.

    @param file_two_name
    File name second dataset including .txt extension. Don't fill in if you just
    want the layout of file_one_name.

    @param append_one
    Append dataset labels of dataset one. Use this if you are using two datasets
    with the same labels.

    @param append_two
    Append dataset labels of dataset two. Use this if you are using two datasets
    with the same labels.

    @param rel_path
    Set to "True" if using a relative path for file_one_name, file_two_name.

    @param create_local
    Set to to "True" if you want to create a .CSV and .JSON version of your dataset. When this
    is "False" the program will return a direct python dict/JSON object that can be used in dash.
    """

    data_name = os.path.splitext(file_one_name)[0]
    if file_two_name == '':
        if rel_path is False:
            main_data = "{}.txt".format(data_name)
        else:
            main_data = file_one_name
            data_name = os.path.splitext(os.path.basename(file_one_name))[0]

        # Rename dataset columns
        data = layout_rename_columns(main_data)

        if append_one != '':
            data['id'] = data['id'] + append_one

        # Creates an array of random colors to be used for layout
        array = colors_array_layout(data)

        data["color"] = pd.Series(array, dtype="object")
        data = data.sort_values('id', ascending=False).drop_duplicates(['id'])
        data = data.dropna()

        if create_local:
            file_name = "{}Layout".format(data_name)
            create_local_files(data, file_name)
        else:
            data = data.to_dict(orient='records')
    else:
        for file_name in [file_one_name, file_two_name]:
            if rel_path is False:
                main_data = "{}.txt".format(os.path.splitext(file_name)[0])
            else:
                main_data = file_name

            # Rename dataset columns
            data = layout_rename_columns(main_data)

            if isinstance(file_one_name, type('')):
                data['id'] = data['id'] + append_one
            else:
                data['id'] = data['id'] + append_two

            # Create colors to assign to the layout color
            array = colors_array_layout(data)

            data["color"] = pd.Series(array, dtype="object")
            data = data.sort_values(
                'id', ascending=False).drop_duplicates(['id'])
            if isinstance(file_one_name, type('')):
                file_one_name = data.copy()
            else:
                data = data.append(file_one_name, ignore_index=True)
                data = data.dropna()

        if create_local:
            file_name = "multi_layout"
            create_local_files(data, file_name)
        else:
            data = data.to_dict(orient='records')

    return data


def txt_to_track(file_name='', append_block_id='', rel_path=False, create_local=False):
    """
    Call this function to produce a local JSON & CSV track, or directly in the application.

    @param file_name
    File name of track data set including .txt extension. Used for track.

    @param append_block_id

    @param rel_path
    Set to "True" if using a relative path for file_name.

    @param create_local
    Set to "True" if you want to create a CSV and a JSON version of your dataset. When this
    is "False" the program will return a direct python dict/JSON object that can be used in dash.
    """

    file_name = os.path.splitext(file_name)[0]
    main_data = "{}.txt".format(file_name)
    if rel_path:
        file_name = os.path.basename(file_name)

    # Rename dataset columns
    data = track_rename_columns(main_data)

    if append_block_id != '':
        data['block_id'] = data['block_id'] + append_block_id

    # Replaces stains with an RGB color
    data = colors_array_track(data)

    # Edit Track Info
    if create_local:
        create_local_files(data, file_name)
    else:
        data = data.to_dict(orient='records')
    return data
