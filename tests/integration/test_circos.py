import json

import dash
import dash_bio
import dash_html_components as html

from common_features import simple_app_layout, simple_app_callback

_data = None

_COMPONENT_ID = 'test-circos'

with open(
        'tests/dashbio_demos/dash-circos/data/graph_data.json', 'r'
) as f:
    _data = json.loads(f.read())


def test_dbci001_graph_type(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37'],
        )
    ))

    histogram_layout = [
        {'type': 'HISTOGRAM', 'data': _data['histogram'][:5]}
    ]

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='tracks',
        test_prop_value=json.dumps(histogram_layout),
        prop_value_type='dict',
        validation_fn=lambda x: json.dumps(x) == json.dumps(histogram_layout)
    )

    # there should be five bins in the histogram
    assert len(dash_duo.find_elements('path.bin')) == 5


def test_dbci002_inner_outer_radii(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37']
        )
    ))

    change_radii_config = {'innerRadius': 20, 'outerRadius': 100}

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='config',
        test_prop_value=json.dumps(change_radii_config),
        prop_value_type='dict',
        validation_fn=lambda x:
        x['innerRadius'] == change_radii_config['innerRadius']
        and x['outerRadius'] == change_radii_config['outerRadius']
    )

    chr_one_div = dash_duo.find_element('path#chr1')

    assert int(chr_one_div.size['width']) == 41
    assert int(chr_one_div.size['height']) == 81
