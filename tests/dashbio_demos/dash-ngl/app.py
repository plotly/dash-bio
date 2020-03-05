import os,glob

import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import dash_daq as daq
import dashbio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app

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

data_dict = {
    "selectedValue": "placeholder",
    "chain": "ALL",
    "color": "#e41a1c",
    "filename": "placeholder",
    "ext": "",
    "config": {"type": "", "input": ""},
}

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

# custom functions
def getData(selection, pdb_id, color):

    chain = "ALL"

    # check if only one chain should be displayed
    if "." in pdb_id:
        pdb_id, chain = pdb_id.split(".")

    # get path to protein structure
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


###Define app layout
label_width = 4
col_width = 8

styles = {"tab": {"height": "calc(98vh - 115px)"}}

theme = {
    "dark": True,
    "detail": "#007439",
    "primary": "#00EA64",
    "secondary": "#6E6E6E",
}

##NGL viewer
viewer = html.Div(
    [dashbio.DashNgl(id="viewport", data=data_dict)],
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
        [
            # header
            html.Div(
                children=[html.H1("NGL Protein Structure Viewer")],
                style={"backgroundColor": "#3aaab2", "height": "7vh"},
            ),
            viewer,
            # if you use dcc.Loading viewer the app goes into a mount loop!
            # dcc.Loading(viewer),
            dcc.Tabs(
                id="tabs",
                children=[
                    dcc.Tab(
                        label="Data",
                        children=[
                            # daq.ToggleSwitch(
                            #     id='toggle-theme',
                            #     label=['Light', 'Dark'],
                            #     style={'width': '250px', 'margin': 'auto'},
                            #     value=False
                            # ),
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
                                style={"width": "100%", "display": "inline-block"},
                            ),
                        ],
                    ),
                    dcc.Tab(
                        label="View",
                        children=[
                            html.Div(
                                style=styles["tab"],
                                children=[
                                    html.Div(["Camera settings"]),
                                    dcc.Dropdown(
                                        id="stage-camera-type",
                                        options=[
                                            {"label": k.capitalize(), "value": k}
                                            for k in ["perspective", "orthographic"]
                                        ],
                                        value="perspective",
                                    ),
                                    html.Div(["Background"]),
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

# ################################# APP LAYOUT ################################
app.layout = html.Div(
    id="dark-theme-container",
    children=[
        html.Div(
            id="dark-theme-components",
            children=[daq.DarkThemeProvider(theme=theme, children=rootLayout)],
        )
    ],
)

def callbacks(app):
##CB viewport
    @app.callback(
        [Output("viewport", "data")],
        [Input("pdb-dropdown", "value")]
    )
    def display_output(selection):

        data = []
        print(selection)

        if selection == None:
            data.append(data_dict)
        else:
            if "_" in selection:
                for i, pdb_id in enumerate(selection.split("_")):
                    data.append(getData(selection, pdb_id, color_list[i]))
            else:
                pdb_id = selection
                data.append(getData(selection, pdb_id, color_list[0]))

        return data


    # CB stage
    @app.callback(
        Output("viewport", "stageParameters"),
        [Input("stage-bg-color", "value"), Input("stage-camera-type", "value")],
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
