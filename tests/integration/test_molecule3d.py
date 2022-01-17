import json

from selenium.webdriver.common.action_chains import ActionChains

import dash
from dash.dependencies import Input, Output
import dash_html_components as html
from dash_bio.utils import pdb_parser as parser, mol3dviewer_styles_creator as sparser
import dash_bio

from common_features import simple_app_layout, simple_app_callback


_model_data = None
_styles_data = None

_pdb = parser.PdbParser('tests/dashbio_demos/dash-molecule-3d-viewer/data/1bna.pdb')

_model_data = _pdb.mol3d_data()
_styles_data = sparser.create_mol3d_style(
    _model_data.get("atoms"),
    'cartoon',
    'atom'
)

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

    dash_duo.wait_for_element_by_css_selector('.molecule-3d')

    dash_duo.percy_snapshot('test-mol3d_selectionType_chain', convert_canvases=True)


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

    dash_duo.wait_for_element_by_css_selector('.molecule-3d')

    mol3d = dash_duo.find_element('#' + _COMPONENT_ID + ' canvas')
    ac = ActionChains(dash_duo.driver)
    ac.drag_and_drop_by_offset(mol3d, 100, 50).perform()

    dash_duo.percy_snapshot('test-mol3d_rotate', convert_canvases=True)


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

    dash_duo.wait_for_element_by_css_selector('.molecule-3d')


def test_dbm3004_labels(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div([
        dash_bio.Molecule3dViewer(
            id=_COMPONENT_ID,
            modelData=_model_data,
            styles=_styles_data,
            labels=[
                {"text": "first_text", "fontColor": "red"},
                {"text": "second_text", "backgroundColor": "blue", "position": {"x": 10, "y": -10,
                                                                                "z": 0}}
            ]
        ),
        html.Div(id="labels-output")
    ])

    @app.callback(
        Output(component_id='labels-output', component_property='children'),
        Input(component_id=_COMPONENT_ID, component_property='labels')
    )
    def update_output_div(labels):
        return labels[0]['text']

    dash_duo.start_server(app, dev_tools_props_check=True)

    dash_duo.wait_for_element('#' + _COMPONENT_ID)

    dash_duo.wait_for_text_to_equal('#labels-output', 'first_text')

    dash_duo.percy_snapshot('test-mol3d_labels', convert_canvases=True)
