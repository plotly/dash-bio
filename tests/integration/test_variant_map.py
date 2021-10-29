import pandas as pd

import dash
import dash_bio
import dash_core_components as dcc


def test_dbvm001_basic(dash_duo):

    app = dash.Dash(__name__)

    # Load dataframe and metadata
    _data_file = 'tests/integration/assets/variantmap/sample_data.h5'

    with pd.HDFStore(_data_file, mode="r") as store:
        _data = store['dataset']
        metadata = store.get_storer('dataset').attrs.metadata

    # Add metadata to dataframe
    _data.metadata = ''
    _data.metadata = metadata

    app.layout = dcc.Graph(
        id="variantmap",
        figure=dash_bio.VariantMap(_data)
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element('.js-plotly-plot')
    dash_duo.percy_snapshot('variantmap-basic')
