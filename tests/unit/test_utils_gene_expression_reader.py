from __future__ import absolute_import

import urllib.request

from dash_bio.utils.gene_expression_reader import read_soft

# Use the first `sample_length` characters of data file living at `url`
# as a piece of toy data, for testing gene expression reader functions.
url = 'https://raw.githubusercontent.com/plotly/datasets/master/clustergram_GDS5373.soft'
sample_length = 2161
f = urllib.request.urlopen(url)
DATASTRING = f.read(sample_length).decode('utf-8')


def test_read_soft_datastring():
    soft = read_soft(DATASTRING,
                     is_datafile=False)

    description = soft[0]
    assert 'title' in description.keys()

    subsets = soft[1]
    assert isinstance(subsets, dict)

    rows = soft[2]
    assert len(rows) == 7
    # first row is '1007_s_at'
    assert rows[0] == '1007_s_at'

    cols = soft[3]
    # SOFT reader keeps columns with label containing 'GSM'
    assert all(['GSM' in col for col in cols])


def test_read_soft_return_filtered():
    soft = read_soft(DATASTRING,
                     is_datafile=False,
                     return_filtered_data=True,
                     rows=['1007_s_at', '1053_at', '117_at'],
                     columns=['GSM1110880', 'GSM1110881'])

    # when filtering, return only the filtered data
    assert soft.shape[0] == 3
    assert soft.shape[1] == 2
