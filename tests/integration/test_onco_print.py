import json
import re

import dash
import dash_bio
import dash_html_components as html

from common_features import simple_app_layout, simple_app_callback

_data = None

_COMPONENT_ID = 'test-onco-print'

with open(
        'tests/dashbio_demos/dash-onco-print/data/dataset1.json'
) as f:
    _data = json.loads(f.read())


def test_dbop001_background_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.OncoPrint(
            id=_COMPONENT_ID,
            data=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='backgroundcolor',
        test_prop_value='rgb(25, 211, 243)',
        prop_value_type='string',
        take_snapshot=True
    )

    background = dash_duo.find_elements(
        'g.cartesianlayer g.plot g.trace.bars:nth-child(1) g.point > path')

    for point in background:

        match = re.search(
            r'.*fill: ([\w\s,\(\)]+);.*',
            point.get_attribute('style')
        )
        assert match.group(1) == 'rgb(25, 211, 243)'


def test_dbop002_colorscale(dash_duo):

    app = dash.Dash(__name__)

    new_colorscale = {
        'AMP': 'rgb(10, 200, 100)',
        'FUSION': 'rgb(100, 10, 20)',
        'HOMDEL': 'rgb(200, 50, 60)'
    }
    # fusion deep del amp
    app.layout = html.Div(simple_app_layout(
        dash_bio.OncoPrint(
            id=_COMPONENT_ID,
            data=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='colorscale',
        test_prop_value=json.dumps(new_colorscale),
        prop_value_type='dict',
        validation_fn=lambda x: json.dumps(x) == json.dumps(new_colorscale),
        take_snapshot=True
    )

    fus = dash_duo.find_elements(
        'g.cartesianlayer g.plot g.trace.bars:nth-child(2) g.point > path'
    )
    for point in fus:
        match = re.search(
            r'.*fill: ([\w\s,\(\)]+);.*',
            point.get_attribute('style')
        )
        assert match.group(1) == 'rgb(100, 10, 20)'

    deep_del = dash_duo.find_elements(
        'g.cartesianlayer g.plot g.trace.bars:nth-child(3) g.point > path'
    )
    for point in deep_del:
        match = re.search(
            r'.*fill: ([\w\s,\(\)]+);.*',
            point.get_attribute('style')
        )
        assert match.group(1) == 'rgb(200, 50, 60)'

    amp = dash_duo.find_elements(
        'g.cartesianlayer g.plot g.trace.bars:nth-child(4) g.point > path'
    )
    for point in amp:
        match = re.search(
            r'.*fill: ([\w\s,\(\)]+);.*',
            point.get_attribute('style')
        )
        assert match.group(1) == 'rgb(10, 200, 100)'
