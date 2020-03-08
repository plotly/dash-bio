import os
import glob

from dash.dependencies import Input, Output, State
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

# PDB examples
# . indicates that only one chain should be shown
# _ indicates that more than one protein should be shown
dropdown_options = [
    "1PNK",
    "5L73",
    "4GWM",
    "3L9P",
    "6CHG",
    "3K8P",
    "2MRU",
    "1BNA",
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

# Canvas container to display the structures
viewer = html.Div(
    id='ngl-viewer-stage',
    children=[
        dash_bio.DashNgl(
            id="viewport",
            data=data_dict
            )
        ],
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
        id='ngl-body',
        className='app-body',
        children=[
            html.Div(
                id='ngl-viewer-container',
                children=[html.H1("NGL Protein Structure Viewer")],
                style={"backgroundColor": "#3aaab2", "height": "7vh"},
            ),
            dcc.Loading(viewer),
            dcc.Tabs(
                id="ngl-control-tabs",
                classname='control-tabs',
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
                                    ),
                                    dcc.Input(
                                        id="pdb-string",
                                        placeholder="pdbID1.chain_pdbID2.chain"
                                    ),
                                    html.Button('Submit', id='button')
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

    # Initialize the dictionary with placeholder values
    data = data_dict

    # Check if only one chain should be shown
    if "." in pdb_id:
        pdb_id, chain = pdb_id.split(".")

    if pdb_id in dropdown_options:
        fname = [f for f in glob.glob("data/" + pdb_id + ".*")][0]

        data["selectedValue"] = selection
        data["chain"] = chain
        data["color"] = color
        data["filename"] = fname.split("/")[-1]
        data["ext"] = fname.split(".")[-1]

        with open(fname, "r") as f:
            data["config"]["input"] = f.read()

    return data


def callbacks(_app):

    # Callback for molecule visualization based on the dropdown selection
    @_app.callback(
        Output('viewport', 'data'),
        [Input('pdb-dropdown', 'value'),
         Input('button', 'n_clicks')],
        [State('pdb-string', 'value')]
    )
    def display_output(selection, n_clicks, value):

        data = []

        if selection is None and value is None:
            data.append(data_dict)

        elif selection is not None and value is None:
            pdb_id = selection
            data.append(get_data(selection, pdb_id, color_list[0]))

        elif value is not None and n_clicks > 0:
            if len(value) > 4:
                pdb_id = value
                if "_" in value:
                    for i, pdb_id in enumerate(value.split("_")):
                        data.append(get_data(value, pdb_id, color_list[i]))
                else:
                    data.append(get_data(value, pdb_id, color_list[0]))
            else:
                data.append(data_dict)
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
