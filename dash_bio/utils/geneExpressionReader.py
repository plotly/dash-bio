import pandas as pd
import tempfile


# pylint: disable=unnecessary-lambda

def parse_tsv(
        contents='',
        filepath='',
        row_labels_source=None,
        rows=None,
        columns=None,
        header_rows=5,
        header_cols=2
):

    if len(contents) > 0:
        with tempfile.NamedTemporaryFile(mode='w+', delete=False) as tf:
            tf.write(contents)
            filepath = tf.name
    df = pd.read_csv(filepath, sep='\t', skiprows=header_rows-1)

    data = {}

    selected_rows = []
    selected_cols = []

    all_rows = []
    if (row_labels_source is not None) and (row_labels_source in df.keys().tolist()):
        all_rows = df[row_labels_source].tolist()

    all_cols = df.keys().tolist()[header_cols:]
    if (rows is not None) and (columns is not None):
        for r in rows:
            if r not in all_rows:
                continue
            selected_rows.append(r)
        selected_rows = list(map(lambda x: all_rows.index(x), selected_rows))

        for c in columns:
            if c not in all_cols:
                continue
            selected_cols.append(c)

        selected_data = df.loc[selected_rows, selected_cols]
        data = selected_data.values

    desc = {}
    info = pd.read_csv(filepath, sep='^', nrows=header_rows-1, header=None)[0]
    for i in info:
        tmp = i.strip('#').split(':', 1)
        if len(tmp) < 2:
            desc['Source'] = tmp[0]
            continue
        desc[tmp[0]] = tmp[1]

    return data, desc, all_rows, all_cols
