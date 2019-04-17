import GEOparse as gp
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

    if rows is None:
        rows = []
    if columns is None:
        columns = []

    selected_rows = []
    selected_cols = []

    for row in rows:
        if row not in all_rows:
            continue
        selected_rows.append(row)

    for col in columns:
        if col not in all_cols:
            continue
        selected_cols.append(col)

    selected_data = df.loc[selected_rows, selected_cols]
    data = selected_data.values

    return data
