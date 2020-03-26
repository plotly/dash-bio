import numpy as np
import pandas as pd

from dash_bio import Clustergram

DATA = np.array(
    [[1, 1, 1, 1],
     [3, 3, 3, 3],
     [1, 1, 1, 1],
     [3, 3, 3, 3],
     [1, 1, 1, 1],
     [3, 3, 3, 3]]
)
CLUSTERED_DATA = np.array(
    [[1, 1, 1, 1],
     [1, 1, 1, 1],
     [1, 1, 1, 1],
     [3, 3, 3, 3],
     [3, 3, 3, 3],
     [3, 3, 3, 3]]
)


def test_cluster_rows():
    """Test that rows of 1's and 3's are properly clustered."""

    data = DATA
    _, _, curves_dict = Clustergram(
        data,
        generate_curves_dict=True,
        return_computed_traces=True,
        center_values=False
    )
    clustered_data = CLUSTERED_DATA

    assert np.array_equal(curves_dict['heatmap']['z'], clustered_data)


def test_read_dataframe():
    """Test that input data can be in a dataframe."""

    data = pd.DataFrame(DATA)
    _, _, curves_dict = Clustergram(
        data,
        generate_curves_dict=True,
        return_computed_traces=True,
        center_values=False
    )
    clustered_data = CLUSTERED_DATA

    assert np.array_equal(curves_dict['heatmap']['z'], clustered_data)


def test_row_labels():
    """Test that specifying row labels preserves clustering."""

    data = DATA
    row_labels = ['a', 'b', 'b', 'b', 'b', 'b']
    _, _, curves_dict = Clustergram(
        data,
        generate_curves_dict=True,
        return_computed_traces=True,
        row_labels=row_labels,
        center_values=False
    )
    clustered_data = CLUSTERED_DATA

    assert np.array_equal(curves_dict['heatmap']['z'], clustered_data)


def test_column_labels():
    """Test that specifying column labels preserves clustering."""

    data = DATA.T
    column_labels = ['a', 'b', 'b', 'b', 'b', 'b']
    _, _, curves_dict = Clustergram(
        data,
        generate_curves_dict=True,
        return_computed_traces=True,
        column_labels=column_labels,
        center_values=False
    )
    clustered_data = CLUSTERED_DATA.T

    assert np.array_equal(curves_dict['heatmap']['z'], clustered_data)
