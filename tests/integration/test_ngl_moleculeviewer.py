import glob
import time
import json
import gzip

from selenium.webdriver.common.action_chains import ActionChains

import dash
from dash.dash import no_update
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
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
    "uploaed": False,
    "resetView": False,
    "selectedValue": "placeholder",
    "chain": "ALL",
    "range": "ALL",
    "color": "#e41a1c",
    "filename": "placeholder",
    "ext": "",
    "config": {"type": "text/plain", "input": ""},
}


# Helper function to load the data
def get_data(selection, pdb_id, color, resetView=False):
    chain = "ALL"
    aa_range = "ALL"

    # Check if only one chain should be shown
    if "." in pdb_id:
        pdb_id, chain = pdb_id.split(".")

        # Check if only a specified amino acids range should be shown:
        if ":" in chain:
            chain, aa_range = chain.split(":")

    fname = [f for f in glob.glob(data_path + pdb_id + ".*")][0]

    if "gz" in fname:
        ext = fname.split('.')[-2]
        with gzip.open(fname, 'r') as f:
            content = f.read().decode('UTF-8')
    else:
        ext = fname.split('.')[-1]
        with open(fname, 'r') as f:
            content = f.read()

    return {
        "filename": fname.split("/")[-1],
        "ext": ext,
        "selectedValue": selection,
        "chain": chain,
        "range": aa_range,
        "color": color,
        "config": {"type": "text/plain", "input": content},
        "resetView": resetView,
        "uploaded": False,
    }


# Get sample data for starting the app
_model_data = get_data(selection="1BNA",
                       pdb_id="1BNA",
                       color="red", resetView=False)


viewer = html.Div(
    [dash_bio.NglMoleculeViewer(
        id=_COMPONENT_ID,
        data=[_model_data])],
    style={
        "display": "inline-block",
        "width": "calc(100% - 500px)",
        "float": "left",
        "marginTop": "50px",
        "marginRight": "50px",
    },
)


# additional functions
def rotate_stage(dash_duo):
    # The previous function (get_data) needs some time therefore
    # it is better to wait some seconds before rotating the molecule
    time.sleep(5)

    stage = dash_duo.find_element("#" + _COMPONENT_ID + " canvas")
    ac = ActionChains(dash_duo.driver)
    ac.drag_and_drop_by_offset(stage, 100, 50).perform()


def reset_stageView(dash_duo):
    dash_duo.find_element("#reset-view-button").click()


# Based on simple_app_layout
# simple_app_layout does not work because:
# There needs to be an additional reset button
def modified_simple_app_layout(component):
    return [
        dcc.Input(id="prop-name"),
        dcc.Input(id="prop-value"),
        html.Div(id="pass-fail-div"),
        html.Button("Submit", id="submit-prop-button"),
        html.Button("Reset", id="reset-view-button"),
        component,
    ]


# Based on simple_app_callback
# simple_app_callback does not work because:
# NglMoleculeViewer does not accept the output as a string
def modified_simple_app_callback(
        app,
        dash_duo,
        component_id,
        test_prop_name,
        test_prop_value,
        take_snapshot=True,
        additional_functions=[],
):
    @app.callback(
        Output(component_id, test_prop_name),
        [
            Input("submit-prop-button", "n_clicks"),
            Input("reset-view-button", "n_clicks"),
        ],
        [State("prop-value", "value")],
    )
    def setup_click_callback(submit_nclicks, reset_nclicks, value):

        ctx = dash.callback_context
        if ctx.triggered:
            input_id = ctx.triggered[0]["prop_id"].split(".")[0]
            print("triggred", input_id)

        if value is None:
            return no_update

        reset_view = False
        if input_id == "reset-view-button":
            reset_view = True

        data_list = []
        if "_" in test_prop_value:
            for i, pdb_id in enumerate(test_prop_value.split("_")):
                data_list.append(
                    get_data(
                        test_prop_value, pdb_id,
                        color_list[i], resetView=reset_view
                    )
                )
        else:
            pdb_id = test_prop_value
            data_list.append(
                get_data(
                    pdb_id, pdb_id,
                    color_list[0], resetView=reset_view
                )
            )
        return data_list

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#" + component_id)

    input_prop_name = dash_duo.find_element("#prop-name")
    input_prop_value = dash_duo.find_element("#prop-value")

    input_send_button = dash_duo.find_element("#submit-prop-button")

    input_prop_name.send_keys(test_prop_name)
    input_prop_value.send_keys(test_prop_value)
    input_send_button.click()

    for function in additional_functions:
        if function == "rotate":
            rotate_stage(dash_duo)
        if function == "reset":
            reset_stageView(dash_duo)

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


def test_dbdn002_change_background(dash_duo):

    stage_config = {
        "backgroundColor": "black",
        "quality": "medium",
        "cameraType": "perspective",
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

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
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

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


def test_dbdn_005_show_oneMolecule_cif_gzipped(dash_duo):

    selection = "1KMQ"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


def test_dbdn_006_show_oneChain(dash_duo):

    selection = "6CHG.A"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


def test_dbdn_007_show_aaRange(dash_duo):

    selection = "6CHG.A:1-50"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


def test_dbdn_008_show_multipleMolecules(dash_duo):

    selection = "6CHG.A_3K8P.D"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
    )


def test_dbn_009_rotate_stage(dash_duo):

    selection = "6CHG.A_3K8P.D"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
        additional_functions=["rotate"],
    )


def test_dbn_010_reset_stageView(dash_duo):

    selection = "6CHG.A_3K8P.D"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=selection,
        take_snapshot=True,
        additional_functions=["rotate", "reset"],
    )
