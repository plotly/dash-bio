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
        validation_fn=lambda x: json.dumps(x) == json.dumps(new_needle_style),
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


def test_dbnp002_domainStyle(dash_duo):

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
        validation_fn=lambda x: json.dumps(x) == json.dumps(new_domain_style),
        take_snapshot=True
    )

    domains = dash_duo.find_elements('g.overplot g.scatterlayer.mlayer path.js-fill')

    for domain in domains:
        match = re.search(
            r'.*fill: ([\w\s,\(\)]+);.*',
            domain.get_attribute('style')
        )

        assert match.group(1) in new_domain_style['domainColor']
