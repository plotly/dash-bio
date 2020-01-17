import json

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys

import dash
import dash_bio
import dash_html_components as html
from dash_bio_utils import xyz_reader

from common_features import simple_app_layout, simple_app_callback

_data = None

with open('tests/dashbio_demos/dash-speck/data/methane.xyz', 'r') as f:
    _data = xyz_reader.read_xyz(datapath_or_datastring=f.read(),
                                is_datafile=False)

_COMPONENT_ID = 'test-speck'


def test_dbsp001_rotate(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        dash_bio.Speck(
            id=_COMPONENT_ID,
            data=_data
        )
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element('#' + _COMPONENT_ID)

    speck = dash_duo.find_element('#' + _COMPONENT_ID + ' canvas')
    ac = ActionChains(dash_duo.driver)
    ac.move_to_element(speck).drag_and_drop_by_offset(
        speck, 150, 200).perform()

    dash_duo.percy_snapshot('test-speck_rotate')


def test_dbsp002_click_and_drag(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        dash_bio.Speck(
            id=_COMPONENT_ID,
            data=_data
        )
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element('#' + _COMPONENT_ID)

    speck = dash_duo.find_element('#' + _COMPONENT_ID + ' canvas')
    ac = ActionChains(dash_duo.driver)
    ac.move_to_element(speck).key_down(Keys.SHIFT).drag_and_drop_by_offset(
        speck, -50, 100).key_up(Keys.SHIFT).perform()

    dash_duo.percy_snapshot('test-speck_click_and_drag')


def test_dbsp003_preset_view_licorice(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Speck(
            id=_COMPONENT_ID,
            data=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='presetView',
        test_prop_value='licorice',
        prop_value_type='string',
        take_snapshot=True
    )


def test_dbsp004_preset_view_toon(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Speck(
            id=_COMPONENT_ID,
            data=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='presetView',
        test_prop_value='toon',
        prop_value_type='string',
        take_snapshot=True
    )


def test_dbsp005_preset_view_stickball(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Speck(
            id=_COMPONENT_ID,
            data=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='presetView',
        test_prop_value='stickball',
        prop_value_type='string',
        take_snapshot=True
    )


def test_dbsp006_custom_view(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Speck(
            id=_COMPONENT_ID,
            data=_data
        )
    ))

    new_view = {
        'ao': 0.1,
        'outline': 1,
        'dofStrength': 0.4,
        'resolution': 600,
        'atomScale': 0.15,
        'relativeAtomScale': 0.51,
        'bonds': True,
        'bondScale': 0.75
    }

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='view',
        test_prop_value=json.dumps(new_view),
        prop_value_type='dict',
        validation_fn=lambda x: json.dumps(x) == json.dumps(new_view),
        take_snapshot=True
    )
