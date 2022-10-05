import json

from selenium.webdriver.common.action_chains import ActionChains

import dash
from dash.dependencies import Input, Output
from dash import html
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


def test_dbm3005_background_color(dash_duo):

    background_color = '#938F64'

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
        test_prop_name='backgroundColor',
        test_prop_value=background_color,
        prop_value_type='string',
        validation_fn=lambda x: x == background_color,
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3005_background_opacity(dash_duo):

    background_opacity = 0.3

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
        test_prop_name='backgroundOpacity',
        test_prop_value=json.dumps(background_opacity),
        prop_value_type='float',
        validation_fn=lambda x: json.dumps(x) == json.dumps(background_opacity),
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3006_atom_labels_shown(dash_duo):

    atom_labels_shown = True

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
        test_prop_name='atomLabelsShown',
        test_prop_value=atom_labels_shown,
        prop_value_type='bool',
        validation_fn=lambda x: x == atom_labels_shown,
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3007_zoom(dash_duo):

    zoom = {
        'animationDuration': 5,
        'factor': 3,
        'fixedPath': True
    }

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
        test_prop_name='zoom',
        test_prop_value=json.dumps(zoom),
        prop_value_type='dict',
        validation_fn=lambda x: json.dumps(x) == json.dumps(zoom),
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3008_zoom_to(dash_duo):

    zoom_to = {
        'animationDuration': 5,
        'fixedPath': True,
        'sel': {
            'chain': 'C',
            'resi': 5
        }
    }

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
        test_prop_name='zoomTo',
        test_prop_value=json.dumps(zoom_to),
        prop_value_type='dict',
        validation_fn=lambda x: json.dumps(x) == json.dumps(zoom_to),
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3009_shapes(dash_duo):

    shapes = [
        {
            'type': 'Sphere',
            'center': {'x': 0, 'y': 0, 'z': 0},
            'radius': 3.0,
            'color': 'blue',
            'opacity': 1
        },
        {
            'type': 'Arrow',
            'start': {'x': 40, 'y': 20.0, 'z': 0.0},
            'end': {'x': 20.0, 'y': 10.0, 'z': 0.0},
            'radius': 1.0,
            'radiusRadio': 0.5,
            'mid': 1.0,
            'color': 'red',
            'opacity': 1
        },
        {
            'type': 'Cylinder',
            'start': {'x': 10.0, 'y': -30.0, 'z': 0.0},
            'end': {'x': 20.0, 'y': -50.0, 'z': 0.0},
            'radius': 1.0,
            'fromCap': 1,
            'toCap': 2,
            'color': 'green',
            'opacity': 1
        }
    ]

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule3dViewer(
            id=_COMPONENT_ID,
            modelData=_model_data,
            styles=_styles_data,
            shapes=shapes
        )
    ))

    dash_duo.start_server(app)

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3010_height(dash_duo):

    height = 500

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
        test_prop_name='height',
        test_prop_value=height,
        prop_value_type='int',
        validation_fn=lambda x: x == height,
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3011_width(dash_duo):

    width = 500

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
        test_prop_name='width',
        test_prop_value=width,
        prop_value_type='int',
        validation_fn=lambda x: x == width,
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3012_style(dash_duo):

    style = {
        'width': 300,
        'height': 350
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule3dViewer(
            id=_COMPONENT_ID,
            modelData=_model_data,
            styles=_styles_data,
            style=style
        )
    ))

    dash_duo.start_server(app)

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbm3013_orbital(dash_duo):

    orbital = {
        'cube_file': '',
        'iso_val': 0.1,
        'opacity': 1,
        'positiveVolumetricColor': 'red',
        'negativeVolumetricColor': 'blue',
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule3dViewer(
            id=_COMPONENT_ID,
            modelData=_model_data,
            styles=_styles_data,
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='orbital',
        test_prop_value=json.dumps(orbital),
        validation_fn=lambda x: json.dumps(x) == json.dumps(orbital),
        prop_value_type='dict',
        take_snapshot=True
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []
