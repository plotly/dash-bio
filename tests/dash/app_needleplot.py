# In[]:
# Import required libraries
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
import dash_bio
from .utils.needle_plot_parser import extract_mutations, extract_domains
from .utils.app_wrapper import app_page_layout

DATA_URL = "https://raw.githubusercontent.com/bbglab/muts-needle-plot/master/snippets/data/"

DATA = [
    {'mutData': 'TP53_MUTATIONS.json', 'domains': 'TP53_REGIONS.json', 'label': 'TP53'},
    {'mutData': 'muts.json', 'domains': 'regions.json', 'label': 'ENST00000557334'},
]

HEAD_COLORS = [
    '#e41a1c',
    '#377eb8',
    '#4daf4a',
    '#984ea3',
    '#ff7f00',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#999999',
    '#e41a1c',
    '#377eb8',
    '#4daf4a',
    '#984ea3',
    '#ff7f00',
    '#ffff33',
    '#a65628',
    '#f781bf',
    '#999999',
    '#e41a1c',
]
HEAD_SYMBOLS = [
    'circle',
    'square',
    'up-triangle',
    'pentagon'
]
STEM_COLOR = [
    'grey',
    'black',
    'white'
]


def layout():
    app_main_layout = html.Div([
        html.Div(
            [
                html.Div(
                    [
                        html.Div(
                            [
                                html.Div(
                                    [
                                        dcc.Tabs(
                                            id="tabs",
                                            value='tab-1',
                                            children=[
                                                dcc.Tab(
                                                    label='Options',
                                                    value='tab-1',
                                                    children=[
                                                        html.Div(
                                                            [
                                                                html.H3("Config"),
                                                                html.H5("Stem thickness"),
                                                                dcc.Input(
                                                                    id='stem-thick-input',
                                                                    type='number',
                                                                    value=2,
                                                                    min=1,
                                                                    max=40
                                                                ),
                                                                html.H5("Needle head size"),
                                                                dcc.Input(
                                                                    id='head-size-input',
                                                                    type='number',
                                                                    value=4,
                                                                    min=1,
                                                                    max=40,
                                                                ),
                                                                html.H5("Stem color"),
                                                                html.Div(
                                                                    [
                                                                        dcc.Dropdown(
                                                                            id='stem-color-dropdown',
                                                                            options=[
                                                                                {'label': col, 'value': col}
                                                                                for col in STEM_COLOR
                                                                            ],
                                                                            value=STEM_COLOR[0],
                                                                        ),
                                                                    ], style={"width": "100%"},
                                                                ),
                                                                html.H5("Head color(s)"),
                                                                html.Div(
                                                                    [
                                                                        dcc.Dropdown(
                                                                            id='head-color-dropdown',
                                                                            options=[
                                                                                {'label': col, 'value': col}
                                                                                for col in HEAD_COLORS
                                                                            ],
                                                                            value=HEAD_COLORS[0:4],
                                                                            multi=True,
                                                                        ),
                                                                    ], style={"width": "100%"},
                                                                ),
                                                                html.H5("Head symbol(s)"),
                                                                html.Div(
                                                                    [
                                                                        dcc.Dropdown(
                                                                            id='head-symbol-dropdown',
                                                                            options=[
                                                                                {'label': sym, 'value': sym}
                                                                                for sym in HEAD_SYMBOLS
                                                                            ],
                                                                            value=HEAD_SYMBOLS[0],
                                                                            multi=True
                                                                        ),
                                                                    ], style={"width": "100%"},
                                                                ),
                                                                html.H5("Constant height needles"),
                                                                html.Div(
                                                                    [
                                                                        dcc.RadioItems(
                                                                            id='stem-height-radioitems',
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
                                                                html.H5("Rangeslider Display"),
                                                                html.Div(
                                                                    [
                                                                        dcc.RadioItems(
                                                                            id='rangeslider-radioitems',
                                                                            options=[
                                                                                {'label': 'On',
                                                                                 'value': True},
                                                                                {'label': 'Off',
                                                                                 'value': False},
                                                                            ],
                                                                            value=True
                                                                        ),
                                                                    ],
                                                                    style={
                                                                        "width": "100%", "marginBottom": "4%"},
                                                                ),
                                                            ],
                                                            style={"maxHeight": "90vh", "overflow": "auto"},
                                                        ),
                                                    ]
                                                ),
                                                dcc.Tab(
                                                    label="Sample Data",
                                                    style={"maxHeight": "90vh", "overflow": "auto"},
                                                    value='tab-2',
                                                    children=[
                                                        html.H5(
                                                            "Upload Select"
                                                        ),
                                                        dcc.Dropdown(
                                                            id='dataset-dropdown',
                                                            options=[
                                                                {'label': data['label'], 'value': i}
                                                                for i, data in enumerate(DATA)
                                                            ],
                                                            value=0
                                                        ),
                                                    ],
                                                ),
                                            ],
                                        ),
                                    ]
                                ),
                            ], className="four columns", style={"maxHeight": "90vh", "overflow": "auto"}
                        ),
                        html.Div(
                            id='plot-area',
                            children=[
                                dash_bio.NeedlePlot(
                                    id='needle-plot',
                                    rangeSlider=True
                                )
                            ], className="seven columns"
                        )
                    ], className="row"
                ),
            ]
        )
    ]
    )
    return app_page_layout(app_main_layout, app_title="Dash Bio : Needleplot")


def callbacks(app):
    @app.callback(
        Output('needle-plot', 'x'),
        [Input('dataset-dropdown', 'value')],
    )
    def change_x(value):
        x, y, mutationgroups = extract_mutations(DATA_URL, DATA[value]['mutData'])
        return x

    @app.callback(
        Output('needle-plot', 'y'),
        [Input('dataset-dropdown', 'value')],
    )
    def change_y(value):
        x, y, mutationgroups = extract_mutations(DATA_URL, DATA[value]['mutData'])
        return y

    @app.callback(
        Output('needle-plot', 'mutationGroups'),
        [Input('dataset-dropdown', 'value')],
    )
    def change_mutation_groups(value):
        x, y, mutationgroups = extract_mutations(DATA_URL, DATA[value]['mutData'])
        return mutationgroups

    @app.callback(
        Output('needle-plot', 'domains'),
        [Input('dataset-dropdown', 'value')],
    )
    def change_domains(value):
        return extract_domains(DATA_URL, DATA[value]['domains'])

    @app.callback(
        Output('needle-plot', 'rangeSlider'),
        [Input('rangeslider-radioitems', 'value')]
    )
    def toggle_rangeslider(val):
        return val

    @app.callback(
        Output('needle-plot', 'needleStyle'),
        [
            Input('stem-height-radioitems', 'value'),
            Input('stem-thick-input', 'value'),
            Input('stem-color-dropdown', 'value'),
            Input('head-size-input', 'value'),
            Input('head-color-dropdown', 'value'),
            Input('head-symbol-dropdown', 'value'),
        ],
        [State('needle-plot', 'needleStyle')]
    )
    def update_needle_style(
            const_height,
            stem_thick,
            stem_color,
            head_size,
            head_colors,
            head_symbols,
            needle_sty
    ):
        if needle_sty is None:
            needle_sty = {}
        needle_sty['stemConstHeight'] = const_height
        needle_sty['stemThickness'] = stem_thick
        needle_sty['stemColor'] = stem_color
        needle_sty['headSize'] = head_size
        needle_sty['headColor'] = head_colors
        needle_sty['headSymbol'] = head_symbols
        return needle_sty
