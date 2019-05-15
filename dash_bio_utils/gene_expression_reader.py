import GEOparse as gp
import pandas as pd
import tempfile


# pylint: disable=unnecessary-lambda

def read_soft_file(
        contents='',
        filepath='',
        rows=None,
        columns=None,
        return_filtered_data=False
):
    if len(contents) > 0:
        with tempfile.NamedTemporaryFile(
                mode='w+', delete=False, suffix='.soft'
        ) as tf:
            tf.write(contents)
            filepath = tf.name

    geo_file = gp.get_GEO(filepath=filepath, geotype='GDS')

    df = geo_file.table
    df.set_index('ID_REF', inplace=True)

    all_rows = list(df.index.values)
    all_cols = list(df.columns.values)

    for column in all_cols:
        if 'GSM' not in column:
            all_cols.remove(column)

    if not return_filtered_data:
        desc = geo_file.metadata
        subsets = geo_file.subsets

        for subset in geo_file.subsets:
            subsets[subset] = geo_file.subsets[subset].metadata

        return desc, subsets, all_rows, all_cols

    return _get_selected_data(
        df,
        all_rows,
        all_cols,
        rows,
        columns
    )


def read_tsv_file(
        contents='',
        filepath='',
        rows=None,
        columns=None,
        description_row_prefix='#',
        description_separator=':',
        skiprows=0,
        ignore_columns=None,
        index_column='Gene Name',
        return_filtered_data=False
):
    desc = {}

    if len(contents) > 0:
        with tempfile.NamedTemporaryFile(
                mode='w+', delete=False, suffix='.soft'
        ) as tf:
            tf.write(contents)
            filepath = tf.name

        for line in tf.lines:
            if line[0] == description_row_prefix or len(line.strip()) == 0:
                if line[0] == description_row_prefix:
                    desc_line = line.strip(
                        description_row_prefix
                    ).strip().split(description_separator, 1)
                    desc[desc_line[0]] = desc_line[1]
                skiprows += 1
            else:
                break

    else:
        with open(filepath, 'r') as f:
            for line in f.readlines():
                if line[0] == description_row_prefix or len(line.strip()) == 0:
                    if line[0] == description_row_prefix:
                        desc_line = line.strip(
                            description_row_prefix
                        ).strip().split(description_separator, 1)
                        desc[desc_line[0]] = desc_line[1]
                        skiprows += 1
                else:
                    break

    df = pd.read_csv(filepath, sep='\t', skiprows=skiprows)

    df.set_index(index_column, inplace=True)

    all_rows = list(df.index.values)
    all_cols = list(df.columns.values)

    for ignore_col in ignore_columns:
        all_cols.remove(ignore_col)

    if not return_filtered_data:
        return desc, all_rows, all_cols

    return _get_selected_data(
        df,
        all_rows,
        all_cols,
        rows,
        columns
    )


def _get_selected_data(
        dataframe,
        all_rows=None,
        all_cols=None,
        rows=None,
        columns=None
):
    if all_rows is None:
        all_rows = []
    if all_cols is None:
        all_cols = []
    if rows is None:
        rows = []
    if columns is None:
        columns = []

    selected_rows = list(set(all_rows).intersection(rows))
    selected_cols = list(set(all_cols).intersection(columns))

    selected_data = dataframe.loc[selected_rows, selected_cols]
    data = selected_data.values

    return data
