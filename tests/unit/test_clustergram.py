import numpy as np

from dash_bio import Clustergram


def test_cluster_rows():
    """Test that rows of 1's and 3's are properly clustered."""
    data = np.array(
        [[1, 1, 1, 1],
         [3, 3, 3, 3],
         [1, 1, 1, 1],
         [3, 3, 3, 3],
         [1, 1, 1, 1],
         [3, 3, 3, 3]]
    )

    _, _, curves_dict = Clustergram(
        data,
        generate_curves_dict=True,
        return_computed_traces=True,
        center_values=False
    )

    clustered_data = np.array(
        [[1, 1, 1, 1],
         [1, 1, 1, 1],
         [1, 1, 1, 1],
         [3, 3, 3, 3],
         [3, 3, 3, 3],
         [3, 3, 3, 3]]
    )

    assert np.array_equal(curves_dict['heatmap']['z'], clustered_data)
