import pandas as pd

import dash
import dash_bio
import dash_core_components as dcc


# Load dataframe and metadata
_data_file = 'test/dashbio_demos/dash-variant-map/data/sample_data.h5'
with pd.HDFStore(_data_file, mode="r") as store:
    _data = store['dataset']
    metadata = store.get_storer('dataset').attrs.metadata

# Add metadata to dataframe
_data.metadata = ''
_data.metadata = metadata


def test_dbvm001_basic(dash_duo):

    app = dash.Dash(__name__)
    app.layout = dcc.Graph(
        id="variantmap",
        figure=dash_bio.VariantMap(_data)
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element('#variantmap')
    dash_duo.percy_snapshot('variantmap-basic')
