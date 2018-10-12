import dash_bio
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import graph_data as data
import base64
import datetime
import io
import pandas as pd
import json
import test as test_data

empty = dash_bio.DashCircos(
    id='main-circos',
    selectEvent={},
    layout=[],
    size=800,
    config={},
    tracks=[],
)


app = dash.Dash('')

app.scripts.config.serve_locally = True


app.layout = html.Div([
    html.Div(
        [
            html.Div(
                [
                    html.H2(
                        'Circos Graph Selector',
                        style={
                            'textAlign': 'center'}
                    ),
                    html.Div(
                        [
                            html.Div(
                                [
                                    dcc.Tabs(
                                        id="tabs",
                                        value='tab-1',
                                        children=[
                                            dcc.Tab(
                                                label='Preset',
                                                value='tab-1',
                                                children=[
                                                    html.Div([
                                                        html.H3('Select Preset'),
                                                        html.Div(
                                                            [
                                                                dcc.Dropdown(
                                                                    id="preset-dropdown",
                                                                    options=[
                                                                        {'label': 'Select...',
                                                                         'value': 'select'},
                                                                        {'label': 'Heatmap',
                                                                         'value': 'heatmap'},
                                                                        {'label': 'Chords',
                                                                         'value': 'chords'},
                                                                        {'label': 'Highlight',
                                                                         'value': 'highlight'},
                                                                        {'label': 'Histogram',
                                                                         'value': 'histogram'},
                                                                        {'label': 'Line',
                                                                         'value': 'line'},
                                                                        {'label': 'Scatter',
                                                                         'value': 'scatter'},
                                                                        {'label': 'Stack',
                                                                         'value': 'stack'},
                                                                        {'label': 'Text',
                                                                         'value': 'text'}
                                                                    ],
                                                                    value='select'
                                                                ),
                                                            ], style={"width": "100%"}
                                                        ),
                                                        html.H3("Config"),
                                                        html.H5("Inner Radius"),
                                                        dcc.Input(
                                                            id="config-inner",
                                                            type='number',
                                                            value=800,
                                                        ),
                                                        html.H5("Outter Radius"),
                                                        dcc.Input(
                                                            id="config-outter",
                                                            type='number',
                                                            value=800
                                                        ),
                                                        html.H5("Tick Display"),
                                                        html.Div(
                                                            [
                                                                dcc.Dropdown(
                                                                    id="ticks-display",
                                                                    options=[
                                                                        {'label': 'On',
                                                                         'value': True},
                                                                        {'label': 'Off',
                                                                         'value': False},
                                                                    ],
                                                                    value=False
                                                                ),
                                                            ], style={"width": "100%"},
                                                        ),
                                                        html.H5(
                                                            "Label Display"),
                                                        html.Div(
                                                            [
                                                                dcc.Dropdown(
                                                                    id="label-display",
                                                                    options=[
                                                                        {'label': 'On',
                                                                         'value': True},
                                                                        {'label': 'Off',
                                                                         'value': False},
                                                                    ],
                                                                    value=True
                                                                ),
                                                            ], style={
                                                                "width": "100%", "marginBottom": "4%"},
                                                        ),
                                                    ],style={"maxHeight":"40vh", "overflow":"auto"},
                                                    ),
                                                ]
                                            ),
                                            dcc.Tab(
                                                label="Sample Upload",
                                                style={"maxHeight":"40vh", "overflow":"auto"},
                                                value='tab-2',
                                                children=[
                                                    html.H5(
                                                      "Upload Select"  
                                                    ),
                                                    dcc.Dropdown(
                                                        id="upload-select",
                                                        options=[
                                                            {'label': 'Layout',
                                                             'value': 0},
                                                            {'label': 'Track One',
                                                             'value': 1},
                                                            {'label': 'Track Two',
                                                             'value': 2}
                                                        ],
                                                        value=0
                                                    ),
                                                    dcc.Upload(
                                                        id='upload-data',
                                                        children=html.Div(
                                                            [
                                                            'Drag and Drop .CSV ',
                                                            html.A(
                                                                'Select Files')
                                                        ]
                                                        ),
                                                        style={
                                                            'width': '98.5%',
                                                            'height': '60px',
                                                            'lineHeight': '60px',
                                                            'borderWidth': '1px',
                                                            'borderStyle': 'dashed',
                                                            'borderRadius': '3px',
                                                            'textAlign': 'center',
                                                            "marginTop": "5%",
                                                            "marginBottom": "5%"
                                                        },
                                                        multiple=True
                                                    ),
                                                    html.Button(
                                                        "Render",
                                                        id="render-button",
                                                        style={"marginBottom":"5%"}
                                                    ),
                                                    html.Br(),
                                                    html.A(
                                                        "Download Data Here",
                                                        href="https://github.com/matthewchan15/Circos-Example-Data",
                                                        target="blank"
                                                    ),
                                                    html.Div(
                                                        id='output-data-upload',
                                                        style={"display":"none"}
                                                        ),
                                                ], 
                                            ),
                                        ], 
                                    ),
                                ]
                            ),
                            html.Div(
                                [
                                    dcc.Tabs(
                                        id="tabs-2",
                                        value='events',
                                        children=[
                                            dcc.Tab(
                                                label='Events',
                                                value='events',
                                                style={"maxHeight":"40vh", "overflow":"auto"},
                                                children=[
                                                    html.H5("Select Event"),
                                                    html.Div(
                                                        id="event-dropdown"),
                                                    dcc.Dropdown(
                                                        id="select-event",
                                                        options=[
                                                            {'label': 'Click',
                                                             'value': 'click'},
                                                            {'label': 'Hover',
                                                             'value': 'hover'},
                                                            {'label': 'Both',
                                                             'value': 'both'}
                                                        ],
                                                        value='both'
                                                    ),
                                                    html.H5("Select Track to Apply"),
                                                    dcc.Dropdown(
                                                        id="tracks-dropdown",
                                                        options=[
                                                            {'label': 'None',
                                                             'value': 0},
                                                        ],
                                                        value=0
                                                    ),
                                                    html.H5("Click Data:"),
                                                    html.Div(id="click-data"),
                                                    html.H5("Hover Data:"),
                                                    html.Div(id="hover-data")
                                                ]
                                            ),
                                            dcc.Tab(
                                                label="JSON Layout",
                                                value='layout',
                                                children=[

                                                        html.Pre(
                                                        id="layout-hold",
                                                        style={
                                                            "overflow":"auto",
                                                            "maxHeight":"30vh"
                                                            }
                                                        ),    
                                                ]
                                            ),
                                        ]
                                    ),

                                ]
                            )
                        ],  className="four columns", style={"maxHeight":"90vh", "overflow":"auto"}
                    ),
                    html.Div(
                        id="circos-hold",
                        children=[
                            empty
                        ], className="seven columns"
                    )
                ], className="row"
            ),
            html.Div(id="slider-hold"),
            html.Div(id="click-hold"),
            html.Div(id="hover-hold")
        ]
    )
]
)


def parse_contents(contents, filename, date):
    content_type, content_string = contents.split(',')

    decoded = base64.b64decode(content_string).decode("UTF-8")
    try:
        if 'csv' in filename:
            # Assume that the user uploaded a CSV file
            df = pd.read_csv(io.StringIO(decoded))
            df = df.to_dict(orient='records')
            return df
        # elif 'json' in filename:
        #     df = pd.read_json(io.StringIO(decoded))
        #     df = df.to_dict(orient='records')
        #     return df
    except Exception as e:
        print(e)
        return html.Div([
            'There was an error processing this file.'
        ])
    return 


@app.callback(Output('output-data-upload', 'children'),
              [Input('upload-data', 'contents')],
              [State('upload-data', 'filename'),
               State('upload-data', 'last_modified'),
               State('output-data-upload', 'children'),
               State("upload-select", "value")])
def update_output(list_of_contents, list_of_names, list_of_dates, data, upload_select):
    if data == None:
        array = [None, None, None]
    else:
        array = json.loads(data)

    if list_of_contents is not None:
        children = list(
            (parse_contents(c, n, d) for c, n, d in
             zip(list_of_contents, list_of_names, list_of_dates)))
        children = children[0]
        array[upload_select] = children
        return json.dumps(array)
    return


@app.callback(
    Output("circos-hold", "children"),
    [Input("render-button", "n_clicks"),
     Input("preset-dropdown", "value"),
     Input("tabs", "value"),
     Input("config-inner", "value"),
     Input("config-outter", "value"),
     Input("ticks-display", "value"),
     Input("label-display", "value"),
     ],
    [State('output-data-upload', 'children')])

def init(redner, preset, tabs, conIn, conOut, tickDisplay, labelDisplay, uploadData):
    if (tabs == "tab-2"):
            array = json.loads(uploadData)

            return dash_bio.DashCircos(
                id="main-circos",
                selectEvent={
                    "0": "hover",
                    "1": "click"
                },
                layout=array[0],
                config={
                    "innerRadius": conIn / 2 - 80,
                    "outerRadius": conOut / 2 - 40,
                    "ticks": {
                        "display": tickDisplay,
                        "labelDenominator": 1000000
                    },
                    "labels": {
                        "position": 'center',
                        "display": labelDisplay,
                        "size": 12,
                        "color": '#000',
                        "radialOffset": 70,
                    },
                },
                tracks=[
                    {
                        "type": "HIGHLIGHT",
                        "data": array[1],
                        "config": {
                            "innerRadius": 800 / 2 - 80,
                            "outerRadius": 800 / 2 - 40,
                            "opacity": 0.3,
                            "tooltipContent": {"name": "block_id"},
                            "color": {"name": "color"}
                        }
                    },
                    {
                        "type": "HIGHLIGHT",
                        "data": array[2],
                        "config": {
                            "innerRadius": 800 / 2 - 80,
                            "outerRadius": 800 / 2 - 40,
                            "opacity": 0.3,
                            "tooltipContent": {"name": "block_id"},
                            "color": {"name": "color"}
                        }
                    }
                ],
                
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )
    if tabs == "tab-1":
        if (preset == "select"):
            return dash_bio.DashCircos(
                id='main-circos',
                selectEvent={},
                layout=[],
                size=800,
                config={},
                tracks=[],
            )
        elif (preset == 'heatmap'):
            return dash_bio.DashCircos(
                id='main-circos',
                selectEvent={
                    "0": "hover",
                    "1": "hover"
                },
                layout=data.month_layout,
                config={
                    "innerRadius": (conIn / 2 - 80),
                    "outerRadius": (conOut / 2 - 30),
                    "ticks": {
                        "display": tickDisplay
                    },
                    "labels": {
                        "position": "center",
                        "display": labelDisplay,
                        "size": 14,
                        "color": "#000",
                        "radialOffset": 15
                    }
                },
                tracks=[
                    {
                        "type": "HEATMAP",
                        "data": data.heatmap,
                        "config": {
                            "innerRadius": 0.8,
                            "outerRadius": 0.98,
                            "logScale": False,
                            "color": "YlOrRd",
                            "tooltipContent": {"name": "value"}
                        },
                    },
                    {
                        "type": "HEATMAP",
                        "data": data.heatmap,
                        "config": {
                            "innerRadius": 0.7,
                            "outerRadius": 0.79,
                            "logScale": False,
                            "color": "Blues",
                            "tooltipContent": {"name": "value"}
                        },
                    }
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )
        elif(preset == 'chords'):
            return dash_bio.DashCircos(
                id='main-circos',
                selectEvent={
                    "0": "both",
                    "1": "both"
                },
                layout=data.GRCh37,
                config={
                    "innerRadius": conIn / 2 - 80,
                    "outerRadius": conOut / 2 - 40,
                    "ticks": {
                        "display": tickDisplay,
                        "labelDenominator": 1000000
                    },
                    "labels": {
                        "position": 'center',
                        "display": labelDisplay,
                        "size": 14,
                        "color": '#000',
                        "radialOffset": 70,
                    },
                },
                tracks=[
                    {
                        "type": "HIGHLIGHT",
                        "data": data.cytobands,
                        "config": {
                            "innerRadius": 800 / 2 - 80,
                            "outerRadius": 800 / 2 - 40,
                            "opacity": 0.3,
                            "tooltipContent": {"name": "name"},
                            "color": {"name": "color"}
                        }
                    },
                    {
                        "type": "CHORDS",
                        "data": data.chords,
                        "config": {
                            "logScale": False,
                            "opacity": 0.7,
                            "color": '#ff5722',
                            "tooltipContent": {
                                "source": "source",
                                "sourceID": "id",
                                "target": "target",
                                "targetID": "id",
                                "targetEnd": "end"
                            }
                        }
                    },
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )
        elif(preset == 'highlight'):
            return dash_bio.DashCircos(
                id='main-circos',
                selectEvent={
                    "0": "hover",
                    "1": "hover"
                },
                layout=data.GRCh37,
                config={
                    "innerRadius": conIn / 2 - 100,
                    "outerRadius": conOut / 2 - 50,
                    "ticks": {
                        "display": tickDisplay
                    },
                    "labels": {
                        "display": labelDisplay,
                    }
                },
                tracks=[
                    {
                        "type": "HIGHLIGHT",
                        "data": data.cytobands,
                        "config": {
                            "innerRadius": 800 / 2 - 100,
                            "outerRadius": 800 / 2 - 50,
                            "opacity": 0.5,
                            "tooltipContent": {"name": "name"},
                            "color": {"name": "color"}
                        }
                    },
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )

        elif(preset == 'histogram'):
            return dash_bio.DashCircos(
                id='main-circos',
                layout=data.GRCh37,
                config={
                    "innerRadius": conIn / 2 - 150,
                    "outerRadius": conOut / 2 - 120,
                    "ticks": {
                        "display": tickDisplay,
                        "labelDenominator": 1000000
                    },
                    "labels": {
                        "display": labelDisplay
                    },
                },
                tracks=[
                    {
                        "type": "HIGHLIGHT",
                        "data": data.cytobands,
                        "config": {
                            "innerRadius": 800 / 2 - 150,
                            "outerRadius": 800 / 2 - 120,
                            "opacity": 0.6,
                            "tooltipContent": {"name": "name"},
                            "color": {"name": "color"}
                        }
                    },
                    {
                        "type": "HISTOGRAM",
                        "data": data.histogram,
                        "config": {
                            "innerRadius": 1.01,
                            "outerRadius": 1.4,
                            "color": 'OrRd',
                            "tooltipContent": {"name": "value"}
                        }
                    },
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )
        elif(preset == 'line'):
            return dash_bio.DashCircos(
                id='main-circos',
                layout=list(filter(lambda d: d['id'] in [
                    'chr1', 'chr2', 'chr3'], data.GRCh37)),
                config={
                    "innerRadius": conIn / 2 - 150,
                    "outerRadius": conOut / 2 - 130,
                    "ticks": {
                        "display": tickDisplay,
                        "spacing": 1000000,
                        'labelSuffix': ''
                    },
                    "labels": {
                        "position": "center",
                        "display": labelDisplay,
                        "size": 14,
                        "color": "#000",
                        "radialOffset": 30
                    },
                },
                tracks=[
                    {
                        "type": "HIGHLIGHT",
                        "data": list(filter(lambda d: d['block_id'] in [
                            'chr1', 'chr2', 'chr3'], data.cytobands)),
                        "config": {
                            "innerRadius": 800/2 - 150,
                            "outerRadius": 800/2 - 130,
                            "opacity": 0.3,
                            "tooltipContent": {"name": "name"},
                            "color": {"name": "color"}
                        }
                    },
                    {
                        "type": "LINE",
                        "data": data.snp250,
                        "config": {
                            "innerRadius": 0.5,
                            "outerRadius": 0.8,
                            "color": '#222222',
                            "tooltipContent": {
                                "source": "block_id",
                                "target": "position",
                                "targetEnd": "value"
                            },
                            "axes": [
                                {
                                    "spacing": 0.001,
                                    "thickness": 1,
                                    "color": '#666666'
                                }
                            ],
                            "backgrounds": [
                                {
                                    "start": 0,
                                    "end": 0.002,
                                    "color": '#f44336',
                                    "opacity": 0.5
                                },
                                {
                                    "start": 0.006,
                                    "end": 0.015,
                                    "color": '#4caf50',
                                    "opacity": 0.5
                                }
                            ],
                            "maxGap": 1000000,
                            "min": 0,
                            "max": 0.015,
                        },
                    },
                    {
                        "type": "SCATTER",
                        "data": data.snp250,
                        "config": {
                            "innerRadius": 0.5,
                            "outerRadius": 0.8,
                            "min": 0,
                            "max": 0.015,
                            "fill": False,
                            "strokeWidth": 0,
                            "tooltipContent": {
                                "source": "block_id",
                                "target": "position",
                                "targetEnd": "value"
                            },
                        },
                    },
                    {
                        "type": "LINE",
                        "data": data.snp,
                        "config": {
                            "innerRadius": 1.01,
                            "outerRadius": 1.15,
                            "maxGap": 1000000,
                            "min": 0,
                            "max": 0.015,
                            "color": '#222222',
                            "tooltipContent": {"name": "value"},
                            "axes": [
                                {"position": 0.002,
                                    "color": '#f44336'},
                                {"position": 0.006,
                                    "color": '#4caf50'},
                            ],
                        },
                    },
                    {
                        "type": "LINE",
                        "data": data.snp1m,
                        "config": {
                            "innerRadius": 1.01,
                            "outerRadius": 1.15,
                            "maxGap": 1000000,
                            "min": 0,
                            "max": 0.015,
                            "color": '#f44336',
                            "tooltipContent": {"name": "value"},
                        },
                    },
                    {
                        "type": "LINE",
                        "data": data.snp,
                        "config": {
                            "innerRadius": 0.85,
                            "outerRadius": 0.95,
                            "maxGap": 1000000,
                            "direction": 'in',
                            "min": 0,
                            "max": 0.015,
                            "color": '#222222',
                            "axes": [
                                {"position": 0.01,
                                    "color": '#4caf50'},
                                {"position": 0.008,
                                    "color": '#4caf50'},
                                {"position": 0.006,
                                    "color": '#4caf50'},
                                {"position": 0.002,
                                    "color": '#f44336'},
                            ],
                        }
                    },
                    {
                        "type": "LINE",
                        "data": data.snp1m,
                        "config": {
                            "innerRadius": 0.85,
                            "outerRadius": 0.95,
                            "maxGap": 1000000,
                            "direction": 'in',
                            "min": 0,
                            "max": 0.015,
                            "color": '#f44336',
                            "tooltipContent": {"name": "value"},
                        },
                    }
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )
        elif(preset == 'scatter'):
            return dash_bio.DashCircos(
                id='main-circos',
                layout=list(filter(lambda d: d['id'] in [
                    'chr1', 'chr2', 'chr3'], data.GRCh37)),
                config={
                    "innerRadius": conIn / 2 - 150,
                    "outerRadius": conOut / 2 - 130,
                    "ticks": {
                        "display": tickDisplay,
                        "spacing": 1000000,
                        'labelSuffix': ''
                    },
                    "labels": {
                        "display": labelDisplay,
                    },
                },
                tracks=[
                    {
                        "type": "HIGHLIGHT",
                        "data": list(filter(lambda d: d['block_id'] in [
                            'chr1', 'chr2', 'chr3'], data.cytobands)),
                        "config": {
                            "innerRadius": 800/2 - 150,
                            "outerRadius": 800/2 - 130,
                            "opacity": 0.8,
                            "tooltipContent": {"name": "name"},
                            "color": {"name": "color"}

                        }
                    },
                    {
                        "type": "SCATTER",
                        "data": list(filter(lambda d: float(d['value']) > 0.007, data.snp250)),
                        "config": {
                            "innerRadius": 0.65,
                            'outerRadius': 0.95,
                            "color": {"colorData": "name"},
                            "tooltipContent": {
                                "source": "block_id",
                                "target": "position",
                                "targetEnd": "value"
                            },
                            'strokeColor': 'grey',
                            'strokeWidth': 1,
                            'shape': 'circle',
                            'size': 14,
                            'min': 0,
                            'max': 0.013,
                            'axes': [
                                {
                                    'spacing': 0.001,
                                    'start': 0.006,
                                    'thickness': 1,
                                    'color': '#4caf50',
                                    'opacity': 0.3,
                                },
                                {
                                    'spacing': 0.002,
                                    'start': 0.006,
                                    'thickness': 1,
                                    'color': '#4caf50',
                                    'opacity': 0.5,
                                },
                                {
                                    'spacing': 0.002,
                                    'start': 0.002,
                                    'end': 0.006,
                                    'thickness': 1,
                                    'color': '#666',
                                    'opacity': 0.5,
                                },
                                {
                                    'spacing': 0.001,
                                    'end': 0.002,
                                    'thickness': 1,
                                    'color': '#f44336',
                                    'opacity': 0.5,
                                },
                            ],
                            'backgrounds': [
                                {
                                    'start': 0.006,
                                    'color': '#4caf50',
                                    'opacity': 0.1,
                                },
                                {
                                    'start': 0.002,
                                    'end': 0.006,
                                    'color': '#d3d3d3',
                                    'opacity': 0.1,
                                },
                                {
                                    'end': 0.002,
                                    'color': '#f44336',
                                    'opacity': 0.1,
                                },
                            ],
                        }
                    },
                    {
                        'type': 'SCATTER',
                        'data': data.snp250,
                        'config': {
                            "tooltipContent": {
                                "source": "block_id",
                                "target": "position",
                                "targetEnd": "value"
                            },
                            'color': '#4caf50',
                            'strokeColor': 'green',
                            'strokeWidth': 1,
                            'shape': 'rectangle',
                            'size': 10,
                            'min': 0.007,
                            'max': 0.013,
                            'innerRadius': 1.075,
                            'outerRadius': 1.175,
                            'axes': [
                                {
                                    'spacing': 0.001,
                                    'thickness': 1,
                                    'color': '#4caf50',
                                    'opacity': 0.3,
                                },
                                {
                                    'spacing': 0.002,
                                    'thickness': 1,
                                    'color': '#4caf50',
                                    'opacity': 0.5,
                                },
                            ],
                            'backgrounds': [
                                {
                                    'start': 0.007,
                                    'color': '#4caf50',
                                    'opacity': 0.1,
                                },
                                {
                                    'start': 0.009,
                                    'color': '#4caf50',
                                    'opacity': 0.1,
                                },
                                {
                                    'start': 0.011,
                                    'color': '#4caf50',
                                    'opacity': 0.1,
                                },
                                {
                                    'start': 0.013,
                                    'color': '#4caf50',
                                    'opacity': 0.1,
                                },
                            ],
                        },
                    },
                    {
                        'type': 'SCATTER',
                        'data': list(filter(lambda d: float(d['value']) < 0.002, data.snp250)),
                        'config': {
                            "tooltipContent": {
                                "source": "block_id",
                                "target": "position",
                                "targetEnd": "value"
                            },
                            'color': '#f44336',
                            'strokeColor': 'red',
                            'strokeWidth': 1,
                            'shape': 'triangle',
                            'size': 10,
                            'min': 0,
                            'max': 0.002,
                            'innerRadius': 0.35,
                            'outerRadius': 0.60,
                            'axes': [
                                {
                                    'spacing': 0.0001,
                                    'thickness': 1,
                                    'color': '#f44336',
                                    'opacity': 0.3,
                                },
                                {
                                    'spacing': 0.0005,
                                    'thickness': 1,
                                    'color': '#f44336',
                                    'opacity': 0.5,
                                },
                            ],
                            'backgrounds': [
                                {
                                    'end': 0.0004,
                                    'color': '#f44336',
                                    'opacity': 0.1,
                                },
                                {
                                    'end': 0.0008,
                                    'color': '#f44336',
                                    'opacity': 0.1,
                                },
                                {
                                    'end': 0.0012,
                                    'color': '#f44336',
                                    'opacity': 0.1,
                                },
                                {
                                    'end': 0.0016,
                                    'color': '#f44336',
                                    'opacity': 0.1,
                                },
                                {
                                    'end': 0.002,
                                    'color': '#f44336',
                                    'opacity': 0.1,
                                },
                            ],
                        },
                    },
                    {
                        "type": "SCATTER",
                        "data": data.snp250,
                        "config": {
                            "tooltipContent": {
                                "source": "block_id",
                                "target": "position",
                                "targetEnd": "value"
                            },
                            "innerRadius": 0.65,
                            "outerRadius": 0.95,
                            "strokeColor": 'grey',
                            "strokeWidth": 1,
                            "shape": 'circle',
                            "size": 14,
                            "min": 0,
                            "max": 0.013,
                            "axes": [
                                {
                                    "spacing": 0.001,
                                    "start": 0.006,
                                    "thickness": 1,
                                    "color": '#4caf50',
                                    "opacity": 0.3
                                },
                                {
                                    "spacing": 0.002,
                                    "start": 0.006,
                                    "thickness": 1,
                                    "color": '#4caf50',
                                    "opacity": 0.5
                                },
                                {
                                    "spacing": 0.002,
                                    "start": 0.002,
                                    "end": 0.006,
                                    "thickness": 1,
                                    "color": '#666',
                                    "opacity": 0.5
                                },
                                {
                                    "spacing": 0.001,
                                    "end": "0.002",
                                    "thickness": 1,
                                    "color": '#f44336',
                                    "opacity": 0.5
                                }
                            ],
                            "backgrounds": [
                                {
                                    "start": 0.006,
                                    "color": '#4caf50',
                                    "opacity": 0.1
                                },
                                {
                                    "start": 0.002,
                                    "end": 0.006,
                                    "color": '#d3d3d3',
                                    "opacity": 0.1
                                },
                                {
                                    "end": 0.002,
                                    "color": '#f44336',
                                    "opacity": 0.1
                                }
                            ],
                        }
                    }
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )
        elif(preset == 'stack'):
            return dash_bio.DashCircos(
                id='main-circos',
                layout=[
                    {
                        'id': 'chr9',
                        'len': 8000000,
                        'label': 'chr9',
                        'color': '#FFCC00'
                    }
                ],
                config={
                    "innerRadius": conIn / 2 - 50,
                    "outerRadius": conOut / 2 - 30,
                    "ticks": {
                        "display": tickDisplay,
                        "labels": False,
                        "spacing": 10000
                    },
                    "labels": {
                        "display": labelDisplay,
                        "labels": False,
                        "spacing": 10000
                    },
                },
                tracks=[
                    {
                        "type": "STACK",
                        "data": data.stack,
                        "config": {
                            "innerRadius": 0.7,
                            "outerRadius": 1,
                            "thickness": 4,
                            "margin": 0.01 * 8000000,
                            "direction": 'out',
                            "strokeWidth": 0,
                            "opacity": 0.5,
                            "color": '#d3d3d3',
                            "tooltipContent": {"name": "chr"},
                            "color": {"conditional": {
                                "end": "end",
                                "start": "start",
                                "value": [150000, 120000, 90000, 60000, 30000],
                                "color":['red', 'black', "#000000", "#999", "#BBB"]
                            }

                            }
                            #[d['color'] for d in data.cytobands]
                            # lambda d: d['color'] in [data.GRCh37))
                        }
                    },
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )
        elif(preset == 'text'):
            return dash_bio.DashCircos(
                id="main-circos",
                layout=[data.GRCh37[0]],
                config={
                    "innerRadius": conIn / 2 - 100,
                    "outerRadius": conOut / 2 - 80,
                    "labels": {
                        "display": labelDisplay,
                    },
                    "ticks": {
                        "display": tickDisplay,
                    },
                },
                tracks=[
                    {
                        "type": "HIGHLIGHT",
                        "data": list(filter(lambda d: d['block_id'] == data.GRCh37[0]['id'], data.cytobands)),
                        "config": {
                            "innerRadius": 800 / 2 - 100,
                            "outerRadius": 800 / 2 - 80,
                            "opacity": 0.7,
                            "tooltipContent": {"name": "name"},
                            "color": {"name": "color"},
                        }
                    },
                    {
                        "type": "TEXT",
                        "data": list(map(lambda d: {"position": (d['start'] + d['end']) / 2, "value":d['name'], "block_id": d["block_id"]}, filter(lambda d: d['block_id'] == data.GRCh37[0]['id'], data.cytobands))),
                        "config": {
                            "innerRadius": 1.02,
                            "outerRadius": 1.3,
                            "style": {
                                "font-size": 12
                            }
                        }
                    },
                ],
                size=800,
                style={"display": "flex", "justify-content": "center"}
            )


@app.callback(
    Output("tracks-dropdown", "options"),
    [Input("circos-hold", "children")],
    [State("main-circos", "tracks")]
)
def event_dropdown(dropdown, tracks):
    if tracks is not None:
        array = []
        dropdown = []
        for k, v in [(k, v) for x in tracks for (k, v) in x.items()]:

            if k == "type":
                array.append(v)
        for i in range(len(tracks)):
            dropdown.append({'label': '{}'.format(array[i]), 'value': i})
        return dropdown
    else:
        return ["blank"]


@app.callback(
    Output("main-circos", "selectEvent"),
    [Input("select-event", "value")],
    [State("main-circos", "tracks"),
     State("tracks-dropdown", "value"),
     State("main-circos", "selectEvent")]
)
def selectEvent(select_value, circos_tracks, track_dropdown, select):
    if select is None:
        select = {}
        keys = [str(i) for i in range(len(circos_tracks))]
        for i in keys:
            select[i] = "both"
    print(select)
    select["{}".format(track_dropdown)] = select_value
    return select

@app.callback(
    Output("layout-hold", "children"),
    [Input("circos-hold", "children")]
)
def layout_show(circos_layout):
    # circos_layout = json.loads(circos_layout)
    # print("layout", circos_layout)
    config = json.dumps(circos_layout, sort_keys=True, indent=4)
    return config

@app.callback(
    Output("hover-data", "children"),
    [Input("main-circos", "hoverDatum")]
)
def hover(datum):
    return str(datum)


@app.callback(
    Output("click-data", "children"),
    [Input("main-circos", "clickDatum")]
)
def click(datum):
    return str(datum)


if __name__ == '__main__':

    app.run_server(debug=True)
