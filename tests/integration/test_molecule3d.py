import json

from selenium.webdriver.common.action_chains import ActionChains

import dash
import dash_bio
import dash_html_components as html
from dash_bio_utils import pdb_parser as parser, styles_parser as sparser

from common_features import simple_app_layout, simple_app_callback


_model_data = None
_styles_data = None

_model_data = json.loads(parser.create_data(
    'tests/dashbio_demos/dash-molecule-3d-viewer/data/1bna.pdb'
))
_styles_data = json.loads(sparser.create_style(
    'tests/dashbio_demos/dash-molecule-3d-viewer/data/1bna.pdb',
    'cartoon',
    'atom'
))

_COMPONENT_ID = 'test-mol3d'


def test_dbm3001_selection_type(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule3dViewer(
            id=_COMPONENT_ID,
            modelData=_model_data,
            styles=_styles_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='selectionType',
        test_prop_value='chain',
        prop_value_type='string'
    )

    # find and click on one of the DNA strands
    mol3d = dash_duo.find_element('#test-mol3d canvas')
    ac = ActionChains(dash_duo.driver)
    ac.move_to_element(mol3d).move_by_offset(0, -50).click().perform()

    dash_duo.percy_snapshot('test-mol3d_selectionType_chain')


def test_dbm3002_rotate(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div([
        dash_bio.Molecule3dViewer(
            id=_COMPONENT_ID,
            modelData=_model_data,
            styles=_styles_data
        )
    ])

    dash_duo.start_server(app)
    dash_duo.wait_for_element('#' + _COMPONENT_ID)

    mol3d = dash_duo.find_element('#' + _COMPONENT_ID + ' canvas')
    ac = ActionChains(dash_duo.driver)
    ac.drag_and_drop_by_offset(mol3d, 100, 50).perform()

    dash_duo.percy_snapshot('test-mol3d_rotate')


def test_dbm3003_selected_atom_ids(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule3dViewer(
            id=_COMPONENT_ID,
            modelData=_model_data,
            styles=_styles_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='selectedAtomIds',
        test_prop_value=json.dumps([1306, 1371, 1339, 1404]),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps([1306, 1371, 1339, 1404]),
        take_snapshot=True
    )
