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


def test_dbop003_padding(dash_duo):

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
        test_prop_name='padding',
        test_prop_value=1,
        prop_value_type='int',
        take_snapshot=True
    )


def test_dbop004_range(dash_duo):

    range_list = [3, 7]

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.OncoPrint(
            id=_COMPONENT_ID,
            data=_data,
            range=range_list
        )
    ))

    dash_duo.start_server(app)

    assert len(dash_duo.get_logs()) == 0


def test_dbop005_showlegend(dash_duo):

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
        test_prop_name='showlegend',
        test_prop_value=False,
        prop_value_type='bool',
        take_snapshot=True
    )


def test_dbop006_showlegend(dash_duo):

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
        test_prop_name='showlegend',
        test_prop_value=False,
        prop_value_type='bool',
    )


def test_dbop007_showoverview(dash_duo):

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
        test_prop_name='showoverview',
        test_prop_value=False,
        prop_value_type='bool',
        take_snapshot=True
    )


def test_dbop008_width(dash_duo):

    new_width = 700

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
        test_prop_name='width',
        test_prop_value=new_width,
        prop_value_type='int',
        take_snapshot=True
    )

    plot = dash_duo.find_element('.js-plotly-plot')

    assert plot.size['width'] == new_width


def test_dbop009_height(dash_duo):

    new_height = 900

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
        test_prop_name='height',
        test_prop_value=new_height,
        prop_value_type='int',
        take_snapshot=True
    )

    plot = dash_duo.find_element('.js-plotly-plot')

    assert plot.size['height'] == new_height
