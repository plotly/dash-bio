import json
import re

import dash
import dash_bio
import dash_html_components as html

from common_features import simple_app_layout, simple_app_callback

_data = None

_COMPONENT_ID = 'test-needle-plot'

with open(
    'tests/dashbio_demos/dash-needle-plot/data/PIK3CA.json'
) as f:
    _data = json.loads(f.read())


def test_dbnp001_needle_style(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    new_needle_style = {
        'stemConstHeight': True,
        'stemColor': 'rgb(99, 110, 250)',
        'stemThickness': 4,
        'headColor': 'rgb(239, 85, 59)',
        'headSize': 10
    }

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='needleStyle',
        test_prop_value=json.dumps(new_needle_style),
        prop_value_type='dict',
        validation_fn=lambda x: x == new_needle_style,
        take_snapshot=True
    )

    # points should all be at the same height (y-value)
    points = dash_duo.find_elements('g.trace.scatter > g.points > path')
    lines = dash_duo.find_elements('g.trace.scatter > g.errorbars > g.errorbar > path')

    y_location = points[0].get_attribute('transform').strip(
        'translate(').strip(
            ')').split(',')[1]

    for point in points[1:]:
        point_y_location = point.get_attribute('transform').strip(
            'translate').strip(
                '(').strip(')').split(',')[1]
        assert point_y_location == y_location

        match = re.search(
            r'.*fill: ([\w\s,\(\)]+);.*',
            point.get_attribute('style')
        )
        assert match.group(1) == 'rgb(239, 85, 59)'

    for line in lines:
        match = re.search(
            r'.*stroke: ([\w\s,\(\)]+);.*',
            line.get_attribute('style')
        )
        assert match.group(1) == 'rgb(99, 110, 250)'

        match = re.search(
            r'.*stroke-width: ([\w]+);.*',
            line.get_attribute('style')
        )
        assert match.group(1) == '4px'


def test_dbnp002_domain_style(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    new_domain_style = {
        'domainColor': ['rgb(200, 100, 0)',
                        'rgb(120, 246, 100)',
                        'rgb(150, 245, 170)',
                        'rgb(0, 200, 150)',
                        'rgb(100, 70, 25)'],
        'displayMinorDomains': False
    }

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='domainStyle',
        test_prop_value=json.dumps(new_domain_style),
        prop_value_type='dict',
        validation_fn=lambda x: x == new_domain_style,
        take_snapshot=True
    )

    domains = dash_duo.find_elements('g.overplot g.scatterlayer.mlayer path.js-fill')

    for domain in domains:
        match = re.search(
            r'.*fill: ([\w\s,\(\)]+);.*',
            domain.get_attribute('style')
        )

        assert match.group(1) in new_domain_style['domainColor']


# My tests

def test_dbnp003_height(dash_duo):
    """ Test that checks if a height property is set correctly """
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    new_height = 250

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='height',
        test_prop_value=json.dumps(new_height),
        validation_fn=lambda x: x == new_height,
        prop_value_type='int',
        take_snapshot=True
    )

    main = dash_duo.find_element(f'#{_COMPONENT_ID}')

    assert int(main.size['height']) == new_height


def test_dbnp004_width(dash_duo):
    """ Test that checks if a width property is set correctly """
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    new_width = 350

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='width',
        test_prop_value=json.dumps(new_width),
        validation_fn=lambda x: x == new_width,
        prop_value_type='int',
        take_snapshot=True
    )

    main = dash_duo.find_element(f'#{_COMPONENT_ID}')

    assert int(main.size['width']) == new_width


def test_dbnp005_xlabel(dash_duo):
    """ Test that checks if xlabel property is work correctly """

    x_label = 'Test X title'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='xlabel',
        test_prop_value=x_label,
        validation_fn=lambda x: x == x_label,
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.find_element('.xtitle').text == x_label


def test_dbnp006_ylabel(dash_duo):
    """ Test that checks if ylabel property is work correctly """

    y_label = 'Test Y title'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='ylabel',
        test_prop_value=y_label,
        validation_fn=lambda x: x == y_label,
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.find_element('.ytitle').text == y_label


def test_dbnp007_range_slider(dash_duo):
    """ Test that checks if rangeSlider property is work correctly """

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='rangeSlider',
        test_prop_value=True,
        prop_value_type='bool',
        take_snapshot=True
    )


def test_dbnp008_click_data(dash_duo):
    """ Test that checks if clickData property is work correctly """

    click_data = ["271.0-279.0", "808.0-825.0", "661.0-672.0", "1016.0-1025.0",
                  "513.0-515.0", "609.0-622.0", "489.0-492.0", "237.0-242.0",
                  "134.0-142.0", "1032.0-1047.0", "160.0-166.0", "306.0-309.0",
                  "890.0-911.0", "65.0-67.0", "508.0-512.0", "625.0-638.0"]

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='click_data',
        test_prop_value=json.dumps(click_data),
        prop_value_type='list',
        validation_fn=lambda x: x == click_data,
        take_snapshot=True
    )
