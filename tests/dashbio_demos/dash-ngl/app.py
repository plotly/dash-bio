import os
import glob

from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app

# Preset colors for the shown molecules
color_list = [
    "#e41a1c",
    "#377eb8",
    "#4daf4a",
    "#984ea3",
    "#ff7f00",
    "#ffff33",
    "#a65628",
    "#f781bf",
    "#999999",
]

# Placeholder which is loaded if no molecule is selected
data_dict = {
    "selectedValue": "placeholder",
    "chain": "ALL",
    "color": "#e41a1c",
    "filename": "placeholder",
    "ext": "",
    "config": {"type": "", "input": ""},
}

# PDB examples
# . indicates that only one chain should be shown
# _ indicates that more than one protein should be shown
dropdown_options = [
    "1PNK",
    "5L73",
    "4GWM",
    "3L9P",
    "5L73.A_4GWM.A_3L9P.A",
    "6CHG",
    "6CHG.A",
    "3K8P",
    "6CHG.A_3K8P.D",
    "2MRU",
    "1BNA",
    "2MRU_1BNA",
]

styles = {"tab": {"height": "calc(98vh - 115px)"}}

# Canvas container to display the structures
viewer = html.Div(
    [dash_bio.DashNgl(id="viewport", data=data_dict)],
    style={
        "display": "inline-block",
        "width": "calc(100% - 500px)",
        "float": "left",
        "marginTop": "50px",
        "marginRight": "50px",
    },
)


def header_colors():
    return {
        'bg_color': '#e7625f',
        'font_color': 'white'
    }


def description():
    return 'Molecule visualization in 3D - perfect for viewing ' \
           'biomolecules such as proteins, DNA and RNA. Includes ' \
           'stick, cartoon, and sphere representations.'


def layout():

    return html.Div(
        children=[
            html.Div(
                children=[html.H1("NGL Protein Structure Viewer")],
                style={"backgroundColor": "#3aaab2", "height": "7vh"},
            ),
            dcc.Loading(viewer),
            dcc.Tabs(
                id="tabs",
                children=[
                    dcc.Tab(
                        label="Data",
                        children=[
                            # Dropdown to select the molecule
                            html.Div(
                                [
                                    dcc.Dropdown(
                                        id="pdb-dropdown",
                                        clearable=False,
                                        options=[
                                            {"label": k, "value": k}
                                            for k in dropdown_options
                                        ],
                                        placeholder="Select a molecule",
                                    )
                                ],
                                style={"width": "100%",
                                       "display": "inline-block"},
                            ),
                        ],
                    ),
                    dcc.Tab(
                        label="View",
                        children=[
                            html.Div(
                                style={"height": "calc(98vh - 115px)"},
                                children=[
                                    # Dropdown to select the camera settings
                                    # (perspective, orthographic
                                    html.Div(["Camera settings"]),
                                    dcc.Dropdown(
                                        id="stage-camera-type",
                                        options=[
                                            {"label": k.capitalize(),
                                             "value": k}
                                            for k in ["perspective",
                                                      "orthographic"]
                                        ],
                                        value="perspective",
                                    ),
                                    html.Div(["Background"]),
                                    # Dropdown to select the background
                                    # (white, black)
                                    dcc.Dropdown(
                                        id="stage-bg-color",
                                        options=[
                                            {"label": c, "value": c.lower()}
                                            for c in ["black", "white"]
                                        ],
                                        value="white",
                                    ),
                                ],
                            )
                        ],
                    ),
                ],
            ),
        ]
    )


# Function to load the data from the folder data/
def get_data(selection, pdb_id, color):
    chain = "ALL"

    # Check if only one chain should be shown
    if "." in pdb_id:
        pdb_id, chain = pdb_id.split(".")

    fname = [f for f in glob.glob("data/" + pdb_id + ".*")][0]

    ext = fname.split(".")[-1]
    with open(fname, "r") as f:
        contents = f.read()

    return {
        "selectedValue": selection,
        "chain": chain,
        "color": color,
        "filename": fname.split("/")[-1],
        "ext": ext,
        "config": {"type": "text/plain", "input": contents},
    }


def callbacks(_app):

    # Callback for molecule visualization based on the dropdown selection
    @_app.callback(
        [Output("viewport", "data")],
        [Input("pdb-dropdown", "value")]
    )
    def display_output(selection):

        data = []

        if selection is None:
            data.append(data_dict)
        else:
            # Check if more than one molecule should be shown
            if "_" in selection:
                for i, pdb_id in enumerate(selection.split("_")):
                    data.append(get_data(selection, pdb_id, color_list[i]))
            else:
                pdb_id = selection
                data.append(get_data(selection, pdb_id, color_list[0]))

        return data

    # Callback for updating bg-color and camera-type
    @_app.callback(
        Output("viewport", "stageParameters"),
        [Input("stage-bg-color", "value"),
         Input("stage-camera-type", "value")],
    )
    def update_stage(bgcolor, camera_type):
        return {
            "backgroundColor": bgcolor,
            "cameraType": camera_type,
        }


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
