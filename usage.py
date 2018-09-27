import react_circos
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import graph_data as data



def radiusFunction():
    return list(filter(lambda d: float(d['value']) > 0.007, data.snp250))


app = dash.Dash('')

app.scripts.config.serve_locally = True


external_css = [
    "https://codepen.io/chriddyp/pen/bWLwgP.css",
    "https://cdn.rawgit.com/matthewchan15/dash-css-style-sheets/adf070fa/banner.css",
    "https://fonts.googleapis.com/css?family=Raleway:400,400i,700,700i",
    "https://fonts.googleapis.com/css?family=Product+Sans:400,400i,700,700i",
]


for css in external_css:
    app.css.append_css({"external_url": css})

app.layout = html.Div([
    html.Div(
        [
            html.Div(
                [
                    html.H1(
                        'Circos Graph Selector',
                        style={
                            'textAlign': 'center',
                            'margin': '48px 0',
                            'fontFamily': 'system-ui'}
                    ),
                    dcc.Tabs(
                        id="tabs",
                        value='tab-1',
                        children=[
                            dcc.Tab(
                                label="Custom",
                                value='tab-0',
                                children=[
                                    html.Div(
                                        [
                                            html.Div(
                                                [
                                                    html.H1(
                                                        'Options',
                                                        style={
                                                            'textAlign': 'center',
                                                            'margin': '48px 0',
                                                            'fontFamily': 'system-ui'}
                                                    ),
                                                    html.H2(
                                                        'Layout'
                                                    ),
                                                    html.H3('Presets'),
                                                    dcc.Dropdown(
                                                        id="layout-data",
                                                        options=[
                                                            {'label': 'None',
                                                                'value': 0},
                                                            {'label': 'Month Layout',
                                                                'value': 1},
                                                            {'label': 'GRCh37',
                                                                'value': 2},
                                                            {'label': 'Chr1,2,3 of GRCh37',
                                                                'value': 3},
                                                            {'label': 'Chr1,2,3 of GRCh37',
                                                                'value': 4},
                                                            {'label': 'GRCh37[0]',
                                                                'value': 5}
                                                            
                                                        ],
                                                        value=0
                                                    ),
                                                    html.H3('Manual Set'),
                                                    dcc.Slider(
                                                        id="layout-amount",
                                                        min=0,
                                                        max=10,
                                                        step=1,
                                                        value=0,
                                                    ),
                                                    dcc.Input(
                                                        id="layout-id",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="layout-len",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="layout-label",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="layout-color",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    html.Button('Set', id='layout-set'),
                                                    html.Button('Remove', id='remove-set'),
                                                    html.H2(
                                                        'Config'
                                                    ),
                                                    dcc.Input(
                                                        id="config-inner",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="config-outter",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    html.H3(
                                                        'Ticks'
                                                    ),
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
                                                    dcc.Dropdown(
                                                        id="ticks-labels",
                                                        options=[
                                                            {'label': 'On',
                                                                'value': True},
                                                            {'label': 'Off',
                                                                'value': False},
                                                        ],
                                                        value=False
                                                    ),
                                                    dcc.Input(
                                                        id="label-denom",
                                                        placeholder='Enter a value...',
                                                        type='number',
                                                        value=0
                                                    ),
                                                    dcc.Input(
                                                        id="ticks-spacing",
                                                        placeholder='Enter a value...',
                                                        type='number',
                                                        value=0
                                                    ),
                                                    dcc.Input(
                                                        id="label-suffix",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    html.H3(
                                                        'Labels'
                                                    ),
                                                    dcc.Dropdown(
                                                        id="label-labels",
                                                        options=[
                                                            {'label': 'On',
                                                                'value': True},
                                                            {'label': 'Off',
                                                                'value': False},
                                                        ],
                                                        value=False
                                                    ),
                                                    dcc.Input(
                                                        id="label-position",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Dropdown(
                                                        id="label-display",
                                                        options=[
                                                            {'label': 'On',
                                                                'value': True},
                                                            {'label': 'Off',
                                                                'value': False},
                                                        ],
                                                        value=False
                                                    ),
                                                    dcc.Input(
                                                        id="label-size",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="label-color",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="label-offset",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="label-spacing",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    html.H2(
                                                        'Tracks'
                                                    ),
                                                    dcc.Slider(
                                                        id="track-slider",
                                                        min=0,
                                                        max=3,
                                                        step=1,
                                                        value=0
                                                    ),
                                                    dcc.Dropdown(
                                                        id="track-type",
                                                        options=[
                                                            {'label': 'Heatmap',
                                                                'value': "HEATMAP"},
                                                            {'label': 'Highlight',
                                                                'value': "HIGHLIGHT"},
                                                            {'label': 'Chord',
                                                                'value': "CHORDS"},
                                                            {'label': 'Histogram',
                                                                'value': "HISTOGRAM"},
                                                            {'label': 'Line',
                                                                'value': "LINE"},
                                                            {'label': 'Scatter',
                                                                'value': "SCATTER"},
                                                        ],
                                                        value=False
                                                    ),
                                                    dcc.Dropdown(
                                                        id="track-data",
                                                        options=[
                                                            {'label': 'On',
                                                                'value': True},
                                                            {'label': 'Off',
                                                                'value': False},
                                                        ],
                                                        value=False
                                                    ),
                                                    html.H2(
                                                        'Size'
                                                    ),
                                                    dcc.Slider(
                                                        id="size-slider",
                                                        min=0,
                                                        max=800,
                                                        step=100,
                                                        value=800
                                                    ),
                                                    html.H3(
                                                        'Config'
                                                    ),
                                                    dcc.Input(
                                                        id="track-inner",
                                                        placeholder='Enter a value...',
                                                        type='number',
                                                        value=1
                                                    ),
                                                    dcc.Input(
                                                        id="track-outter",
                                                        placeholder='Enter a value...',
                                                        type='number',
                                                        value=1
                                                    ),
                                                    dcc.Input(
                                                        id="track-color",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                    dcc.Input(
                                                        id="track-tooltip",
                                                        placeholder='Enter a value...',
                                                        type='text',
                                                        value=''
                                                    ),
                                                ], className="four columns"
                                            ),
                                            html.Div(
                                                [
                                                    react_circos.DashCircos(
                                                        id="main-circos",
                                                        layout=data.month_layout,
                                                        config={
                                                            "innerRadius": (800 / 2 - 80),
                                                            "outerRadius": (800 / 2 - 30),
                                                            "ticks": {
                                                                "display": False
                                                            },
                                                            "labels": {
                                                                "position": "center",
                                                                "display": True,
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
                                                                    "tooltipContent": "value"
                                                                },
                                                                "tooltipContent": True,
                                                            },
                                                            {
                                                                "type": "HEATMAP",
                                                                "data": data.heatmap,
                                                                "config": {
                                                                    "innerRadius": 0.7,
                                                                    "outerRadius": 0.79,
                                                                    "logScale": False,
                                                                    "color": "Blues",
                                                                    "tooltipContent": "value"
                                                                },
                                                                "tooltipContent": True,
                                                            }
                                                        ],
                                                        size=800
                                                    )
                                                ], className="eight columns"
                                            )
                                        ]
                                    )
                                ]
                            ),
                            dcc.Tab(
                                label='Heatmap',
                                value='tab-1',
                                children=[
                                    react_circos.DashCircos(
                                        layout=data.month_layout,
                                        config={
                                            "innerRadius": (800 / 2 - 80),
                                            "outerRadius": (800 / 2 - 30),
                                            "ticks": {
                                                "display": False
                                            },
                                            "labels": {
                                                "position": "center",
                                                "display": True,
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
                                                    "tooltipContent": "value"
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
                                                    "tooltipContent": "value"
                                                },
                                                "tooltipContent": True,
                                            }
                                        ],
                                        size=800,
                                        style={"display":"flex", "justify-content":"center"}
                                    ),
                                ]
                            ),
                            dcc.Tab(
                                label='Chords',
                                value='tab-2',
                                children=[
                                    react_circos.DashCircos(
                                        layout=data.GRCh37,
                                        config={
                                            "innerRadius": 800 / 2 - 80,
                                            "outerRadius": 800 / 2 - 40,
                                            "ticks": {
                                                "display": False,
                                                "labelDenominator": 1000000
                                            },
                                            "labels": {
                                                "position": 'center',
                                                "display": True,
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
                                                    "tooltipContent": "name",
                                                    "color":{"name":"color"}
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
                                        style={"display":"flex", "justify-content":"center"}
                                    )

                                ]
                            ),
                            dcc.Tab(
                                label="Highlight",
                                value='tab-3',
                                children=[
                                    react_circos.DashCircos(
                                        layout=data.GRCh37,
                                        config={
                                            "innerRadius": 800 / 2 - 100,
                                            "outerRadius": 800 / 2 - 50,
                                            "ticks": {
                                                "display": False
                                            },
                                            "labels": {
                                                "display": False,
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
                                                    "tooltipContent": "name",
                                                    "color":{"name":"color"}
                                                }
                                            },
                                        ],
                                        size=800,
                                        style={"display":"flex", "justify-content":"center"}
                                    )

                                ]
                            ),
                            dcc.Tab(
                                label="Histogram",
                                value='tab-4',
                                children=[
                                    react_circos.DashCircos(
                                        layout=data.GRCh37,
                                        config={
                                            "innerRadius": 800 / 2 - 150,
                                            "outerRadius": 800 / 2 - 120,
                                            "ticks": {
                                                "display": False,
                                                "labelDenominator": 1000000
                                            },
                                            "labels": {
                                                "display": False
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
                                                    "tooltipContent": "name",
                                                    "color":{"name":"color"}
                                                }
                                            },
                                            {
                                                "type": "HISTOGRAM",
                                                "data": data.histogram,
                                                "config": {
                                                    "innerRadius": 1.01,
                                                    "outerRadius": 1.4,
                                                    "color": 'OrRd',
                                                    "tooltipContent": "value"
                                                }
                                            },
                                        ],
                                        size=800,
                                        style={"display":"flex", "justify-content":"center"}
                                    )

                                ]
                            ),
                            dcc.Tab(
                                label="Line",
                                value="tab-5",
                                children=[
                                    react_circos.DashCircos(
                                        layout=list(filter(lambda d: d['id'] in [
                                            'chr1', 'chr2', 'chr3'], data.GRCh37)),
                                        config={
                                            "innerRadius": 800 / 2 - 150,
                                            "outerRadius": 800 / 2 - 130,
                                            "ticks": {
                                                "display": False,
                                                "spacing": 1000000,
                                                'labelSuffix': ''
                                            },
                                            "labels": {
                                                "position": "center",
                                                "display": True,
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
                                                    "tooltipContent": "name",
                                                    "color":{"name":"color"}
                                                }
                                            },
                                            {
                                                "type": "LINE",
                                                "data": data.snp250,
                                                "config": {
                                                    "innerRadius": 0.5,
                                                    "outerRadius": 0.8,
                                                    "color": '#222222',
                                                    "tooltipContent": "value",
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
                                                    "tooltipContent": "value",
                                                    # tooltipContent: function (d, i) {
                                                    #         return `${d.block_id}:${Math.round(d.position)} ➤ ${d.value}`
                                                    #     }
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
                                                    "tooltipContent": "value",
                                                    # tooltipContent: function (d, i) {
                                                    #         return `${d.block_id}:${Math.round(d.position)} ➤ ${d.value}`
                                                    #     }
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
                                                    "tooltipContent": "value",
                                                    "axes": [
                                                        {"position": 0.002,
                                                            "color": '#f44336'},
                                                        {"position": 0.006,
                                                            "color": '#4caf50'},
                                                    ],
                                                    # "tooltipContent": "null"
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
                                                    "tooltipContent": "value",
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
                                                    "tooltipContent": "value",
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
                                                    "tooltipContent": "value",
                                                },
                                            }
                                        ],
                                        size=800,
                                        style={"display":"flex", "justify-content":"center"}
                                    )

                                ]
                            ),
                            dcc.Tab(
                                label="Scatter",
                                value="tab-6",
                                children=[
                                    react_circos.DashCircos(
                                        layout=list(filter(lambda d: d['id'] in [
                                            'chr1', 'chr2', 'chr3'], data.GRCh37)),
                                        config={
                                            "innerRadius": 800 / 2 - 150,
                                            "outerRadius": 800 / 2 - 130,
                                            "ticks": {
                                                "display": False,
                                                "spacing": 1000000,
                                                'labelSuffix': ''
                                            },
                                            "labels": {
                                                "display": False,
                                            },
                                        },
                                        tracks=[
                                            {
                                                "type": "HIGHLIGHT",
                                                "data": data.cytobands,
                                                "config": {
                                                    "innerRadius": 800/2 - 150,
                                                    "outerRadius": 800/2 - 130,
                                                    "opacity": 0.8,
                                                    "tooltipContent": "name",
                                                    "color":{"name":"color"}
                                                    
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
                                                        "target": "d.position",
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
                                                        "target": "d.position",
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
                                                        "target": "d.position",
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
                                                "config":{
                                                    "tooltipContent": {
                                                        "source": "block_id",
                                                        "target": "d.position",
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
                                        style={"display":"flex", "justify-content":"center"}
                                    )

                                ]
                            ),
                            dcc.Tab(
                                label="Stack",
                                value="tab-7",
                                children=[
                                    react_circos.DashCircos(
                                        layout=[
                                            {
                                                'id': 'chr9',
                                                'len': 8000000,
                                                'label': 'chr9',
                                                'color': '#FFCC00'
                                            }
                                        ],
                                        config={
                                            "innerRadius": 800 / 2 - 50,
                                            "outerRadius": 800 / 2 - 30,
                                            "ticks": {
                                                "display": True,
                                                "labels": False,
                                                "spacing": 10000
                                            },
                                            "labels": {
                                                "display": True,
                                                "labels": False,
                                                "spacing": 10000
                                            },
                                        },
                                        tracks=[
                                            {
                                                "type": "HIGHLIGHT",
                                                "data": list(filter(lambda d: d["block_id"] == "chr9", data.cytobands)),
                                                "config": {
                                                    "innerRadius": 800 / 2 - 50,
                                                    "outerRadius": 800 / 2 - 30,
                                                    "opacity": 0.8,
                                                    "tooltipContent": "name",
                                                    "color":{"name":"color"}
                                                }
                                            },
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
                                                    "tooltipContent": "chr"
                                                    #[d['color'] for d in data.cytobands]
                                                    # lambda d: d['color'] in [data.GRCh37))
                                                }
                                            },
                                        ],
                                        size=800,
                                        style={"display":"flex", "justify-content":"center"}
                                    )

                                ]
                            ),
                            dcc.Tab(
                                label="Text",
                                value="tab-8",
                                children=[
                                    react_circos.DashCircos(
                                        layout=[data.GRCh37[0]],
                                        config={
                                            "innerRadius": 800 / 2 - 100,
                                            "outerRadius": 800 / 2 - 80,
                                            "labels": {
                                                "display": False,
                                            },
                                            "ticks": {
                                                "display": False,
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
                                                    #[d['color'] for d in data.cytobands]
                                                    # lambda d: d['color'] in [data.GRCh37))
                                                    "tooltipContent": "name",
                                                    "color":{"name":"color"},
                                                }
                                            },
                                            {
                                                "type": "TEXT",
                                                "data": list(map(lambda d: {"position": (d['start'] + d['end']) / 2, "value":d['name'], "block_id": d["block_id"]}, filter(lambda d: d['block_id'] == data.GRCh37[0]['id'], data.cytobands))),
                                                "config": {
                                                    "innerRadius": 1.02,
                                                    "puterRadius": 1.3,
                                                    "style": {
                                                        "font-size": 12
                                                    }
                                                }
                                            },
                                        ],
                                        size=800,
                                        style={"display":"flex", "justify-content":"center"}
                                    )

                                ]
                            )
                        ]
                    ),
                ],
            ),
        ],
    ),
    html.Div(
        html.Div(
            [
                html.Div(id="slider-hold"),
                html.Div(id="datum-hold")
            ], # style={"visibility": "hidden"}
        )
    )
]
)


# # Circos Size Slider
# @app.callback(
#     Output('slider-hold', 'children'),
#     [Input('size-slider', 'value')],
# )
# def circos_layout(value):
#     return value


# @app.callback(
#     Output('main-circos', 'size'),
#     [Input('slider-hold', 'children')],
#     [State('main-circos', 'size')]
# )
# def circos_layout(tab, size):
#     return tab

@app.callback(
    Output('datum-hold', 'children'),
    [Input('main-circos', 'hoverDatum')]
)
def circos_layout(datum):
    print(datum)
    return datum["value"]

# Input('tabs', 'value'),
if __name__ == '__main__':

    app.run_server(debug=True)
