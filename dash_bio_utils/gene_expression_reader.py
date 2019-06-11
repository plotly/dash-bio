"""Gene expression reader

This module contains functions that parse SOFT files and TSV files
to extract metadata and numerical data."""

import tempfile

import pandas as pd
import GEOparse as gp


# pylint: disable=unnecessary-lambda

def read_soft(datapath_or_datastring,
              is_datafile=True,
              return_filtered_data=False,
              rows=None,
              columns=None):
    """Read a file in SOFT format, either from a file or from a string of raw data.

    :param (string) datapath_or_datastring: Either the path to the SOFT data file (can be relative
                                            or absolute), or a string corresponding to the content
                                            of a SOFT file (including newline characters).
    :param (bool, optional) is_datafile: Either True (default) if passing the filepath to the data,
                                         or False if passing a string of raw data.
    :param (bool) return_filtered_data: Either False (default) to return all the metadata, or True
                                        to return only the data filtered by rows and/or columns.
    :param (list[string]) rows: The rows that should be filtered in if `is_data_unfiltered` is
                                False.
    :param (list[string]) columns: The columns that should be filtered in if `is_data_unfiltered`
                                   is False.

    :rtype (tuple|ndarray): Either a tuple containing the description (metadata), subsets, row
                            names, and column names for the SOFT data if `return_filtered_data` is
                            False, or an array of the filtered SOFT data if `return_filtered_data`
                            is True.
    """

    # ensure required argument is a string
    err_msg = 'Please pass either the filepath to the data, or the data as a string.'
    assert isinstance(datapath_or_datastring, str), err_msg

    if is_datafile:
        filepath = datapath_or_datastring
    else:
        with tempfile.NamedTemporaryFile(
                mode='w+', delete=False, suffix='.soft'
        ) as tf:
            tf.write(datapath_or_datastring)
            filepath = tf.name

    geo_file = gp.get_GEO(filepath=filepath, geotype='GDS')

    df = geo_file.table
    df.set_index('ID_REF', inplace=True)

    all_rows = list(df.index.values)
    all_cols = list(df.columns.values)

    for column in all_cols:
        if 'GSM' not in column:
            all_cols.remove(column)

    if return_filtered_data:
        return _get_selected_data(df, all_rows, all_cols, rows, columns)

    desc = geo_file.metadata
    subsets = geo_file.subsets

    for subset in subsets:
        subsets[subset] = subsets[subset].metadata

    return desc, subsets, all_rows, all_cols


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
    """Read a file in TSV format, either from a file or from a string of raw data.

    :param (string) contents: A string corresponding to the FASTA file
                              (including newline characters).
    :param (string) file_path: The full path to the SOFT file (can be
                                relative or absolute).
    :param (list[string]) rows: The rows that should be returned in
                                the event that return_filtered_data is
                                True.
    :param (list[string]) columns: The columns that should be returned
                                   in the event that
                                   return_filtered_data is True.
    :param (string) description_row_prefix: The first character in any
                                            lines that contain
                                            metadata.
    :param (string) description_row_separator: The character that is
                                               used to separate keys
                                               and values in the
                                               description lines.
    :param (int) skiprows: The number of rows to skip after the
                           description lines when converting the TSV
                           to a dataframe.
    :param (list[string]) ignore_columns: A list of column names. The
                                          columns that have those
                                          names will not be included
                                          in the dataframe in the
                                          event that
                                          return_filtered_data is
                                          True.

    :param (bool) return_filtered_data: If True, the function will
                                        return metadata from the
                                        file. If False, it will return
                                        an ndarray that contains the
                                        data that are selected based
                                        on the values of the "rows"
                                        and "columns" arguments.

    :rtype (tuple|ndarray): A tuple containing the description,
                            subsets, row names, and column names for
                            the SOFT file, or a subset of data that
                            are selected with the "rows" and "columns"
                            arguments.

    """

    desc = {}

    if contents:
        with tempfile.NamedTemporaryFile(
                mode='w+', delete=False, suffix='.soft'
        ) as tf:
            tf.write(contents)
            filepath = tf.name

        for line in tf.lines:
            if line[0] == description_row_prefix or not line.strip():
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
                if line[0] == description_row_prefix or not line.strip():
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
