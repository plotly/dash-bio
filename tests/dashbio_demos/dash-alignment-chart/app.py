import json
import base64
import os

import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}

DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

# Datasets
with open(os.path.join(DATAPATH, 'sample.fasta'), encoding='utf-8') as data_file:
    dataset1 = data_file.read()

with open(os.path.join(DATAPATH, 'p53.fasta'), encoding='utf-8') as data_file:
    dataset2 = data_file.read()

with open(os.path.join(DATAPATH, 'p53_clustalo.fasta'), encoding='utf-8') as data_file:
    dataset3 = data_file.read()

DATASETS = {
    'dataset1': dataset1,
    'dataset2': dataset2,
    'dataset3': dataset3,
}

COLORSCALES_DICT = [
    {'value': 'buried', 'label': 'Buried'},
    {'value': 'cinema', 'label': 'Cinema'},
    {'value': 'clustal2', 'label': 'Clustal2'},
    {'value': 'clustal', 'label': 'Clustal'},
    {'value': 'helix', 'label': 'Helix'},
    {'value': 'hydro', 'label': 'Hydrophobicity'},
    {'value': 'lesk', 'label': 'Lesk'},
    {'value': 'mae', 'label': 'Mae'},
    {'value': 'nucleotide', 'label': 'Nucleotide'},
    {'value': 'purine', 'label': 'Purine'},
    {'value': 'strand', 'label': 'Strand'},
    {'value': 'taylor', 'label': 'Taylor'},
    {'value': 'turn', 'label': 'Turn'},
    {'value': 'zappo', 'label': 'Zappo'},
]

GAP_COLORS_OPT = [
    'black',
    'grey',
    'white',
    'turquoise',
    'blue',
    'green',
    'red',
    'purple',
]

CONSERVATION_COLORS_OPT = [
    'Blackbody',
    'Bluered',
    'Blues',
    'Earth',
    'Electric',
    'Greens',
    'Greys',
    'Hot',
    'Jet',
    'Picnic',
    'Portland',
    'Rainbow',
    'RdBu',
    'Reds',
    'Viridis',
    'YlGnBu',
    'YlOrRd'
]


def description():
    return 'View multiple sequence alignments of genomic or protenomic sequences.'


def header_colors():
    return {
        'bg_color': '#0C4142',
        'font_color': 'white',
    }


def layout():
    return html.Div(id='alignment-body', className='app-body', children=[
        html.Div([
            html.Div(id='alignment-control-tabs', className='control-tabs', children=[
                dcc.Tabs(
                    id='alignment-tabs', value='what-is',
                    children=[
                        dcc.Tab(
                            label='About',
                            value='what-is',
                            children=html.Div(className='control-tab', children=[
                                html.H4(
                                    className='what-is',
                                    children='What is Alignment Viewer?'
                                ),
                                html.P(
                                    """
                                    The Alignment Viewer (MSA) component is used to align
                                    multiple genomic or proteomic sequences from a FASTA or
                                    Clustal file. Among its extensive set of features,
                                    the multiple sequence alignment viewer can display
                                    multiple subplots showing gap and conservation info,
                                    alongside industry standard colorscale support and
                                    consensus sequence. No matter what size your alignment
                                    is, Alignment Viewer is able to display your genes or
                                    proteins snappily thanks to the underlying WebGL
                                    architecture powering the component. You can quickly
                                    scroll through your long sequence with a slider or a
                                    heatmap overview.
                                    """
                                ),
                                html.P(
                                    """
                                    Note that the AlignmentChart only returns a chart of
                                    the sequence, while AlignmentViewer has integrated
                                    controls for colorscale, heatmaps, and subplots allowing
                                    you to interactively control your sequences.
                                    """
                                ),
                                html.P(
                                    """
                                    Read more about the component here:
                                    https://github.com/plotly/react-alignment-viewer
                                    """
                                ),
                            ])
                        ),
                        dcc.Tab(
                            label='Data',
                            value='alignment-tab-select',
                            children=html.Div(className='control-tab', children=[
                                html.Div(className='app-controls-block', children=[
                                    html.Div(
                                        className='fullwidth-app-controls-name',
                                        children="Select preloaded dataset"
                                    ),
                                    dcc.Dropdown(
                                        id='alignment-dropdown',
                                        options=[
                                            {
                                                'label': 'Sample.fasta',
                                                'value': 'dataset1'
                                            },
                                            {
                                                'label': 'P53.fasta naive',
                                                'value': 'dataset2'
                                            },
                                            {
                                                'label': 'P53.fasta aligned (ClustalW)',
                                                'value': 'dataset3'
                                            },
                                        ],
                                        value='dataset3',
                                    )
                                ]),


                                html.Div(className='app-controls-block', children=[
                                    html.Div(className='fullwidth-app-controls-name',
                                             children="Upload your own dataset"),
                                    html.A(
                                        html.Button(
                                            "Download sample data",
                                            className='control-download'
                                        ),
                                        href="/assets/sample_data/p53_clustalo.fasta",
                                        download="p53_clustalo.fasta",
                                    ),
                                    html.Div(id='alignment-file-upload-container', children=[
                                        dcc.Upload(
                                            id='alignment-file-upload',
                                            className='control-upload',
                                            children=html.Div([
                                                "Drag and drop FASTA files or select files."
                                            ]),
                                        )
                                    ])
                                ]),

                            ])
                        ),
                        dcc.Tab(
                            label='Interactions',
                            value='control-tab-select2',
                            children=html.Div(className='control-tab', children=[

                                html.Div(
                                    className='app-controls-name',
                                    children='Event Metadata'
                                ),
                                html.P('Hover or click on data to see it here.'),
                                html.Div(
                                    id='alignment-events'
                                )
                            ]),
                        ),
                        dcc.Tab(
                            label='Graph',
                            value='control-tab-customize',
                            children=html.Div(className='control-tab', children=[
                                html.Div([
                                    html.H3('General', className='alignment-settings-section'),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children="Colorscale"),
                                            dcc.Dropdown(
                                                id='alignment-colorscale-dropdown',
                                                className='app-controls-block-dropdown',
                                                options=COLORSCALES_DICT,
                                                value='clustal2',
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children='Choose the color theme of the viewer.'
                                            )
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Overview'),
                                            dcc.Dropdown(
                                                id='alignment-overview-dropdown',
                                                className='app-controls-block-dropdown',
                                                options=[
                                                    {'label': 'Heatmap', 'value': 'heatmap'},
                                                    {'label': 'Slider', 'value': 'slider'},
                                                    {'label': 'None', 'value': 'none'},
                                                ],
                                                value='heatmap',
                                            ),

                                            html.Div(
                                                className='app-controls-desc',
                                                children='Show slider, heatmap or no overview.'
                                            )
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Consensus'),
                                            dcc.RadioItems(
                                                id='alignment-showconsensus-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Show', 'value': True},
                                                    {'label': 'Hide', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),

                                            html.Div(
                                                className='app-controls-desc',
                                                children='Toggle the consensus '
                                                '(most frequent) sequence.'
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Text size'),
                                            dcc.Slider(
                                                className='control-slider',
                                                id='alignment-textsize-slider',
                                                value=10,
                                                min=8,
                                                max=12,
                                                step=1,
                                                marks={
                                                    '8': 8,
                                                    '9': 9,
                                                    '10': 10,
                                                    '11': 11,
                                                    '12': 12,
                                                },
                                            ),

                                            html.Div(
                                                className='app-controls-desc',
                                                children='Adjust the font size '
                                                '(in px) of viewer text.'
                                            ),
                                        ],
                                    ),
                                ]),
                                html.Hr(),
                                html.Div([
                                    html.H3('Conservation', className='alignment-settings-section'),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Barplot'),
                                            dcc.RadioItems(
                                                id='alignment-showconservation-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Show', 'value': True},
                                                    {'label': 'Hide', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children='Show or hide the conservation barplot.'
                                            )
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Colorscale'),
                                            dcc.Dropdown(
                                                id='alignment-conservationcolorscale-dropdown',
                                                className='app-controls-block-dropdown',
                                                options=[
                                                    {'label': col_code, 'value': col_code}
                                                    for col_code in CONSERVATION_COLORS_OPT
                                                ],
                                                value='Viridis',
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children='Change the colorscale for the '
                                                'conservation barplot.'),
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Method'),
                                            dcc.Dropdown(
                                                id='alignment-conservationmethod-dropdown',
                                                className='app-controls-block-dropdown',
                                                options=[
                                                    {'label': 'Entropy',
                                                     'value': 'entropy'},
                                                    {'label': 'Conservation',
                                                     'value': 'conservation'},
                                                ],
                                                value='entropy',
                                            ),

                                            html.Div(
                                                className='app-controls-desc',
                                                children="Conservation (MLE) or normalized entropy."
                                            ),
                                        ],
                                    ),
                                ]),
                                html.Hr(),
                                html.Div([
                                    html.H3('Conservation gap',
                                            className='alignment-settings-section'),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Colorscale'),
                                            dcc.RadioItems(
                                                id='alignment-correctgap-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Yes', 'value': True},
                                                    {'label': 'No', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children="Lowers conservation "
                                                "of high gap sequences."
                                            )
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Gap'),
                                            dcc.RadioItems(
                                                id='alignment-showgap-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Show', 'value': True},
                                                    {'label': 'Hide', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children="Show/hide the gap barplot."
                                            )
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Color'),
                                            dcc.Dropdown(
                                                id='alignment-gapcolor-dropdown',
                                                className='app-controls-block-dropdown',
                                                options=[
                                                    {'label': col_code, 'value': col_code}
                                                    for col_code in GAP_COLORS_OPT
                                                ],
                                                value='grey',
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children='Set the color of the traces '
                                                'that represent the gap.'
                                            )
                                        ],
                                    ),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Group'),
                                            dcc.RadioItems(
                                                id='alignment-groupbars-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Yes', 'value': True},
                                                    {'label': 'No', 'value': False},
                                                ],
                                                value=False,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children='Group gap and conservation bars.'
                                            )
                                        ],
                                    ),
                                    # Conservation colorscale
                                    # Gap color
                                ]),
                                html.Hr(),
                                html.Div([
                                    html.H3('Layout', className='alignment-settings-section'),
                                    html.Div(
                                        className='app-controls-block',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='Labels'),
                                            dcc.RadioItems(
                                                id='alignment-showlabel-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Show ',
                                                     'value': True},
                                                    {'label': 'Hide ',
                                                     'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children='Show track labels on the left.'
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='app-controls-name',
                                                     children='IDs'),
                                            dcc.RadioItems(
                                                id='alignment-showid-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Show ',
                                                     'value': True},
                                                    {'label': 'Hide ',
                                                     'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.Div(
                                                className='app-controls-desc',
                                                children='Show track IDs on the left.'
                                            )

                                        ],
                                    ),
                                ]),
                            ]),
                        ),
                    ],
                ),
            ]),
        ]),
        dcc.Loading(className='dashbio-loading', children=html.Div([
            dash_bio.AlignmentChart(
                id='alignment-chart',
                height=725,
                data=dataset3,
            ),
        ])),

        dcc.Store(id='alignment-data-store'),
    ])


def callbacks(_app):

    # Handle file upload/selection into data store
    @_app.callback(
        Output('alignment-data-store', 'data'),
        [Input('alignment-dropdown', 'value'),
         Input('alignment-file-upload', 'contents'),
         Input('alignment-file-upload', 'filename')]
    )
    def update_storage(dropdown, contents, filename):

        if (contents is not None) and ('fasta' in filename):
            content_type, content_string = contents.split(',')
            content = base64.b64decode(content_string).decode('UTF-8')
        else:
            content = DATASETS[dropdown]

        return content

    # Handle event data
    @_app.callback(
        Output("alignment-events", "children"),
        [Input("alignment-chart", "eventDatum")]
    )
    def event_data_select(data):
        if data is None:
            data = '{}'

        data = json.loads(data)

        if len(data.keys()) == 0:
            return 'No event data to display.'

        return [
            html.Div('- {}: {}'.format(key, data[key]))
            for key in data.keys()
        ]

    # Render main chart
    @_app.callback(
        Output('alignment-chart', 'data'),
        [Input('alignment-data-store', 'data')]
    )
    def update_chart(input_data):
        return input_data

    # Customization callbacks
    @_app.callback(
        Output('alignment-chart', 'colorscale'),
        [Input('alignment-colorscale-dropdown', 'value')],
    )
    def customize_colorscale(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'overview'),
        [Input('alignment-overview-dropdown', 'value')],
    )
    def customize_overview(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'showconsensus'),
        [Input('alignment-showconsensus-radio', 'value')],
    )
    def customize_showconsensus(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'textsize'),
        [Input('alignment-textsize-slider', 'value')],
    )
    def customize_textsize(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'showconservation'),
        [Input('alignment-showconservation-radio', 'value')],
    )
    def customize_showconservation(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'conservationcolorscale'),
        [Input('alignment-conservationcolorscale-dropdown', 'value')],
    )
    def customize_conservationcolorscale(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'conservationmethod'),
        [Input('alignment-conservationmethod-dropdown', 'value')],
    )
    def customize_conservationmethod(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'correctgap'),
        [Input('alignment-correctgap-radio', 'value')],
    )
    def customize_correctgap(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'showgap'),
        [Input('alignment-showgap-radio', 'value')],
    )
    def customize_showgap(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'gapcolor'),
        [Input('alignment-gapcolor-dropdown', 'value')],
    )
    def customize_gapcolor(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'groupbars'),
        [Input('alignment-groupbars-radio', 'value')],
    )
    def customize_groupbars(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'showlabel'),
        [Input('alignment-showlabel-radio', 'value')],
    )
    def customize_showlabel(val):
        return val

    @_app.callback(
        Output('alignment-chart', 'showid'),
        [Input('alignment-showid-radio', 'value')],
    )
    def customize_showid(val):
        return val


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
