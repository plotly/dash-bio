import glob
import json
import time

import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_bio

# from dash_bio_utils import pdb_parser as parser

from common_features import simple_app_layout, simple_app_callback

_COMPONENT_ID = "test-ngl"
data_path = "tests/dashbio_demos/dash-ngl-moleculeviewer/data/"

color_list = ["red", "blue"]

# PDB examples
dropdown_options = ["1PNK", "6CHG", "3K8P", "1BNA"]

# Placeholder which is loaded if no molecule is selected
data_dict = {
    "selectedValue": "placeholder",
    "chain": "ALL",
    "color": "#e41a1c",
    "filename": "placeholder",
    "ext": "",
    "config": {"type": "text/plain", "input": ""},
}


# Helper function to load the data
def get_data(selection, pdb_id, color):

    chain = "ALL"

    # Check if only one chain should be shown
    if "." in pdb_id:
        pdb_id, chain = pdb_id.split(".")

    fname = [f for f in glob.glob(data_path + pdb_id + ".*")][0]

    with open(fname, "r") as f:
        contents = f.read()

    return {
        "selectedValue": selection,
        "chain": chain,
        "color": color,
        "filename": fname.split("/")[-1],
        "ext": fname.split(".")[-1],
        "config": {"type": "text/plain", "input": contents},
    }


viewer = html.Div(
    [dash_bio.NglMoleculeViewer(id=_COMPONENT_ID, data=[data_dict])],
    style={
        "display": "inline-block",
        "width": "calc(100% - 500px)",
        "float": "left",
        "marginTop": "50px",
        "marginRight": "50px",
    },
)


# Based on simple_app_callback
# simple_app_callback does not work because:
# NglMoleculeViewer does not accept the output as a string
def callback_getData(
        app,
        dash_duo,
        component_id,
        test_prop_name,
        test_prop_value,
        take_snapshot=True
):
    @app.callback(
        Output(component_id, test_prop_name),
        [Input("submit-prop-button", "n_clicks")],
        [State("prop-value", "value")],
    )
    def setup_click_callback(nclicks, value):

        data_list = []

        if nclicks is not None and nclicks > 0:
            if "_" in test_prop_value:
                for i, pdb_id in enumerate(test_prop_value.split("_")):
                    data_list.append(get_data(
                        test_prop_value, pdb_id, color_list[i]))
            else:
                pdb_id = test_prop_value
                data_list.append(get_data(
                    test_prop_value, pdb_id, color_list[0]))
            return data_list

        raise dash.exceptions.PreventUpdate()

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#" + component_id)

    input_prop_name = dash_duo.find_element("#prop-name")
    input_prop_value = dash_duo.find_element("#prop-value")

    input_send_button = dash_duo.find_element("#submit-prop-button")

    input_prop_name.send_keys(test_prop_name)
    input_prop_value.send_keys(test_prop_value)
    input_send_button.click()

    # The molecule has an apearing animation therefore
    # It is better to wait some seconds before snapshotting it
    time.sleep(5)

    if take_snapshot:
        dash_duo.percy_snapshot(
            f"{component_id}_{test_prop_name}_{test_prop_value}")


def test_dbdn001_viewer_loaded(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(viewer,))

    dash_duo.start_server(app)

    dash_duo.wait_for_element("#" + _COMPONENT_ID + " canvas")
    assert dash_duo.find_element("#" + _COMPONENT_ID + " canvas")


# This test is still buggy because the background is not changed
def test_dbdn002_change_background(dash_duo):

    stage_config = {
        "stageParameters": {
            "backgroundColor": "black",
            "quality": "medium",
            "cameraType": "perspective",
        }
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(viewer,))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="stageParameters",
        test_prop_value=json.dumps(stage_config),
        prop_value_type="dict",
        validation_fn=lambda x: json.dumps(x) == json.dumps(stage_config),
        take_snapshot=True,
    )


def test_dbdn_003_show_oneMolecule_pdb(dash_duo):

    selection = "6CHG"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(viewer,))

    callback_getData(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


# tried to implement the test bases on shammamah's
# suggestions did not work (see comment in PR)
# def test_dbdn_003_show_oneMolecule_pdb(dash_duo):

#     fname = '1BNA.pdb'

#     d = data_dict.copy() #shallow copy
#     d['fname'] = fname
#     d['selectedValue'] = fname.split('.')[0]
#     d['ext'] = fname.split('.')[1]

#     with open(data_path+fname, "r") as f:
#         d['config']['input'] = f.read()

#     app = dash.Dash(__name__)

#     app.layout = html.Div(simple_app_layout(
#         viewer,
#     ))

#     simple_app_callback(
#         app,
#         dash_duo,
#         component_id=_COMPONENT_ID,
#         test_prop_name='data',
#         test_prop_value=json.dumps(d),
#         prop_value_type='dict'
#     )


def test_dbdn_004_show_oneMolecule_cif(dash_duo):

    selection = "1PNK"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(viewer,))

    callback_getData(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


def test_dbdn_005_show_oneChain(dash_duo):

    selection = "6CHG.A"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(viewer,))

    callback_getData(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


def test_dbdn_006_show_multipleMolecules(dash_duo):

    selection = "6CHG.A_3K8P.D"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(viewer,))

    callback_getData(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )
