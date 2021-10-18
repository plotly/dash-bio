import re

import dash
import dash_bio
import dash_html_components as html

from common_features import simple_app_layout, simple_app_callback

_data = None

with open(
        'tests/dashbio_demos/dash-alignment-chart/data/p53.fasta', 'r'
) as f:
    _data = f.read()

_COMPONENT_ID = 'test-alignment-chart'


def test_dbav001_hide_conservation(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showconservation',
        test_prop_value=str(False),
        prop_value_type='bool',
        validation_fn=lambda x: x is False
    )

    assert len(dash_duo.find_elements('g.cartesianlayer.xy3')) == 0


def test_dbav002_change_colorscale(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='colorscale',
        test_prop_value='hydro',
        prop_value_type='string',
        take_snapshot=True
    )

    # the heatmap background is an image, so we can't programmatically
    # assert that the colors are correct; this test requires a look at
    # the Percy snapshot that is taken


def test_dbav003_change_conservation_colorscale(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='conservationcolorscale',
        test_prop_value='Blackbody',
        prop_value_type='string'
    )

    bars = dash_duo.find_elements('g.cartesianlayer g.subplot.xy2 g.plot path')

    # first bar should be black
    match = re.search(
        r'.*fill: ([\w\s,\(\)]+);.*',
        bars[0].get_attribute('style')
    )
    assert match.group(1) == 'rgb(0, 0, 0)'

    # second bar should be orange
    match = re.search(
        r'.*fill: ([\w\s,\(\)]+);.*',
        bars[1].get_attribute('style')
    )
    assert match.group(1) == 'rgb(230, 103, 0)'

def test_dbav004_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    new_width = 1200

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='width',
        test_prop_value=new_width,
        prop_value_type='int',
        validation_fn=lambda x: x == new_width
    )

    main = dash_duo.find_element(f'#{_COMPONENT_ID}')

    assert int(main.size['width']) == new_width


def test_dbnp005_height(dash_duo):
    """ Test that check if width property is setting correctly """
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.NeedlePlot(
            id=_COMPONENT_ID,
            mutationData=_data
        )
    ))

    new_height = 350

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='height',
        test_prop_value=new_height,
        validation_fn=lambda x: x == new_height,
        prop_value_type='int',
        take_snapshot=True
    )

    main = dash_duo.find_element(f'#{_COMPONENT_ID}')

    assert int(main.size['height']) == new_height