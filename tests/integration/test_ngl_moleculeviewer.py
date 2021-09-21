import glob
import time
import json
import gzip

from selenium.webdriver.common.action_chains import ActionChains

import dash
from dash.dash import no_update
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate
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
    "aaRange": "ALL",
    "chose": {"atoms": "", "residues": ""},
    "color": "#e41a1c",
    "filename": "placeholder",
    "ext": "",
    "config": {"type": "text/plain", "input": ""},
}


def get_highlights(string, sep, atom_indicator):
    residues_list = []
    atoms_list = []

    str_, _str = string.split(sep)
    for e in _str.split(","):
        if atom_indicator in e:
            atoms_list.append(e.replace(atom_indicator, ""))
        else:
            residues_list.append(e)

    return (str_, {"atoms": ",".join(atoms_list), "residues": ",".join(residues_list)})


# Helper function to load the data
def get_data(test_value, pdb_id, color, resetView=False):
    chain = "ALL"
    aa_range = "ALL"
    highlight_dic = {"atoms": "", "residues": ""}

    # Check if only one chain should be shown
    if "." in pdb_id:
        pdb_id, chain = pdb_id.split(".")

        highlights_sep = "@"
        atom_indicator = "a"
        # Check if only a specified amino acids range should be shown:
        if ":" in chain:
            chain, aa_range = chain.split(":")

            # Check if atoms should be highlighted
            if highlights_sep in aa_range:
                aa_range, highlight_dic = get_highlights(
                    aa_range, highlights_sep, atom_indicator
                )

        else:
            if highlights_sep in chain:
                chain, highlight_dic = get_highlights(
                    chain, highlights_sep, atom_indicator
                )

    fname = [f for f in glob.glob(data_path + pdb_id + ".*")][0]

    if "gz" in fname:
        ext = fname.split(".")[-2]
        with gzip.open(fname, "r") as f:
            content = f.read().decode("UTF-8")
    else:
        ext = fname.split(".")[-1]
        with open(fname, "r") as f:
            content = f.read()

    return {
        "filename": fname.split("/")[-1],
        "ext": ext,
        "selectedValue": test_value,
        "chain": chain,
        "aaRange": aa_range,
        "chosen": highlight_dic,
        "color": color,
        "config": {"type": "text/plain", "input": content},
        "resetView": resetView,
        "uploaded": False,
    }


# Get sample data for starting the app
_model_data = get_data(test_value="1BNA", pdb_id="1BNA", color="red", resetView=False)


viewer = html.Div(
    [dash_bio.NglMoleculeViewer(id=_COMPONENT_ID, data=[_model_data])],
    style={
        "display": "inline-block",
        "width": "calc(100% - 500px)",
        "float": "left",
        "marginTop": "50px",
        "marginRight": "50px",
    },
)


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
        html.Button("Download", id="download-button"),
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
        additional_functions=None,
):
    @app.callback(
        [
            Output(component_id, test_prop_name),
            Output(component_id, "molStyles"),
            Output(component_id, "downloadImage"),
            Output(component_id, "imageParameters"),
        ],
        [
            Input("submit-prop-button", "n_clicks"),
            Input("reset-view-button", "n_clicks"),
            Input("download-button", "n_clicks"),
        ],
        [State("prop-value", "value")],
    )
    def setup_click_callback(submit_nclicks, reset_nclicks, download_nclicks, value):

        if (
                submit_nclicks is None
                and reset_nclicks is None
                and download_nclicks is None
        ):
            raise PreventUpdate

        molstyles_dict = {
            "representations": ["cartoon", "axes+box"],
            "chosenAtomsColor": "white",
            "chosenAtomsRadius": 1,
            "molSpacingXaxis": 100,
        }

        ctx = dash.callback_context
        if ctx.triggered:
            input_id = ctx.triggered[0]["prop_id"].split(".")[0]
            print("triggred", input_id)

        reset_view = False
        if input_id == "reset-view-button":
            reset_view = True

        if input_id == "download-button":
            return (
                no_update,
                no_update,
                True,
                {
                    "antialias": True,
                    "trim": True,
                    "transparent": True,
                    "defaultFilename": "test_download",
                },
            )

        # test if the molecular representation should be changed:
        if ";" in value:
            value, molstyles = value.split(";")
            if "," in molstyles:
                reprs_list = []
                for e in molstyles.split(","):
                    if e.isnumeric():
                        molstyles_dict["molSpacingXaxis"] = float(e)
                    else:
                        reprs_list.append(e)

                molstyles_dict["representations"] = reprs_list

        # test if chosen atoms colors should be changed:
        if "|" in value:
            value, molstyles = value.split("|")
            molstyles_dict["chosenAtomsColor"] = molstyles.split(",")[0]
            molstyles_dict["chosenAtomsRadius"] = molstyles.split(",")[1]

        data_list = []
        if "_" in value:
            for i, pdb_id in enumerate(value.split("_")):
                data_list.append(
                    get_data(value, pdb_id, color_list[i], resetView=reset_view)
                )
        else:
            pdb_id = value
            data_list.append(
                get_data(pdb_id, pdb_id, color_list[0], resetView=reset_view)
            )
        return data_list, molstyles_dict, no_update, no_update

    dash_duo.start_server(app)
    dash_duo.wait_for_element("#" + component_id)

    input_prop_name = dash_duo.find_element("#prop-name")
    input_prop_value = dash_duo.find_element("#prop-value")

    input_send_button = dash_duo.find_element("#submit-prop-button")

    input_prop_name.send_keys(test_prop_name)
    input_prop_value.send_keys(test_prop_value)
    input_send_button.click()

    if additional_functions is not None:
        for function in additional_functions:
            # The previous function (get_data) needs some time therefore
            # it is better to wait some seconds before executing any other function
            time.sleep(5)
            if function == "rotate":
                stage = dash_duo.find_element("#" + _COMPONENT_ID + " canvas")
                ac = ActionChains(dash_duo.driver)
                ac.drag_and_drop_by_offset(stage, 100, 50).perform()

            if function == "reset":
                dash_duo.find_element("#reset-view-button").click()

            if function == "download":
                dash_duo.find_element("#download-button").click()

    time.sleep(5)
    if take_snapshot:
        dash_duo.percy_snapshot(f"{component_id}_{test_prop_name}_{test_prop_value}",
         convert_canvases=True)


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
        validation_fn=lambda x: x == stage_config,
        take_snapshot=True,
    )


def test_dbdn_003_show_oneMolecule_pdb(dash_duo):

    test_value = "6CHG"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
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

#     with open(data_path+fname, 'r') as f:
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


def test_dbdn_004_change_molRepresentation(dash_duo):

    test_mol_value = "6CHG"
    test_repr_value = "ball+stick,axes+box"
    test_value = test_mol_value + ";" + test_repr_value

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_005_show_oneMolecule_cif(dash_duo):

    test_value = "1PNK"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_006_show_oneMolecule_cif_gzipped(dash_duo):

    test_value = "1KMQ"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_007_show_oneChain(dash_duo):

    test_value = "6CHG.A"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_008_show_atomRange(dash_duo):

    test_value = "6CHG.A:1-50"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_009_show_chosenAtoms(dash_duo):

    test_value = "6CHG.A@a50,a100,a150"
    test_color_value = "black,1"
    test_value = test_value + "|" + test_color_value

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_010_show_chosenResidues(dash_duo):

    test_value = "6CHG.A@50,100,150"
    test_color_value = "grey,1.5"
    test_value = test_value + "|" + test_color_value

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_011_show_chosenAtomsResidues(dash_duo):

    # not yet working
    test_atoms_value = "a50,a100,a150"
    test_residues_value = "50,100,150"

    test_value = "6CHG.A@" + test_atoms_value + "," + test_residues_value
    test_color_value = "blue,0.8"
    test_value = test_value + "|" + test_color_value

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_012_show_multipleMolecules(dash_duo):

    test_mol_value = "6CHG.A:1-450@50,100,150_3K8P.D"
    test_repr_value = "cartoon,axes+box"
    test_value = test_mol_value + ";" + test_repr_value

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbdn_013_modified_molSpacing(dash_duo):

    test_mol_value = "6CHG.A:_3K8P.D"
    test_repr_value = "cartoon,axes+box,0"
    test_value = test_mol_value + ";" + test_repr_value

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
    )


def test_dbn_015_rotate_stage(dash_duo):

    test_value = "6CHG.A_3K8P.D"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
        additional_functions=["rotate"],
    )


def test_dbn_016_reset_stageView(dash_duo):

    test_value = "6CHG.A_3K8P.C"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
        additional_functions=["rotate", "reset"],
    )


def test_dbn_017_download_image(dash_duo):

    test_value = "6CHG.A_3K8P"

    app = dash.Dash(__name__)

    app.layout = html.Div(modified_simple_app_layout(viewer,))

    modified_simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="data",
        test_prop_value=test_value,
        take_snapshot=True,
        additional_functions=["download"],
    )
