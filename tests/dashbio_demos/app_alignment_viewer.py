import json
import base64
import os

import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_bio

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}

DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "alignment_viewer_")

# Datasets
with open('{}sample.fasta'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset1 = data_file.read()

with open('{}p53.fasta'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset2 = data_file.read()

with open('{}p53_clustalo.fasta'.format(DATAPATH), encoding='utf-8') as data_file:
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
    return html.Div(id='alignment-body', children=[
        html.Div([
            html.Div(id='alignment-control-tabs', children=[
                dcc.Tabs(
                    id='alignment-tabs',
                    children=[
                        dcc.Tab(
                            label='About',
                            value='alignment-tab-about',
                            children=html.Div(className='alignment-tab', children=[
                                html.H4(
                                    "What is Alignment Viewer?"
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
                            children=html.Div(className='alignment-tab', children=[
                                html.H5(
                                    "Select preloaded dataset"
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
                                ),
                                html.Br(),
                                html.H5(
                                    "Upload your own dataset"
                                ),
                                html.Div([
                                    html.A(
                                        html.Button(
                                            "Download sample data",
                                            className='alignment-button',
                                        ),
                                        href="/assets/sample_data/p53_clustalo.fasta",
                                        download="p53_clustalo.fasta",
                                    )
                                ]),

                                html.Div(id='alignment-file-upload-container', children=[dcc.Upload(
                                    id='alignment-file-upload',
                                    className='alignment-upload',
                                    children=html.Div([
                                        "Drag and drop FASTA files or select files."
                                    ]),
                                )]),



                            ])
                        ),
                        dcc.Tab(
                            label='Interactions',
                            value='alignment-tab-select2',
                            children=html.Div(className='alignment-tab', children=[

                                html.H5(
                                    "Hover/Click/Event Data"
                                ),
                                html.P('Hover or click on data to see it here.'),
                                html.Div(
                                    id='alignment-events'
                                )
                            ]),
                        ),
                        dcc.Tab(
                            label='Graph',
                            value='alignment-tab-customize',
                            children=html.Div(className='alignment-tab', children=[
                                html.Div([
                                    html.H3('General', className='alignment-settings-section'),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children="Colorscale"),
                                            dcc.Dropdown(
                                                id='alignment-colorscale-dropdown',
                                                className='alignment-settings-dropdown',
                                                options=COLORSCALES_DICT,
                                                value='clustal2',
                                            ),
                                            html.P("Choose color theme of the viewer."),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children='Overview'),
                                            dcc.Dropdown(
                                                id='alignment-overview-dropdown',
                                                className='alignment-settings-dropdown',
                                                options=[
                                                    {'label': 'Heatmap', 'value': 'heatmap'},
                                                    {'label': 'Slider', 'value': 'slider'},
                                                    {'label': 'None', 'value': 'none'},
                                                ],
                                                value='heatmap',
                                            ),

                                            html.P("Show slider, heatmap or no overview."),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
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

                                            html.P(
                                                'Toggle the consensus (most frequent) sequence.'
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children='Text size'),
                                            dcc.Slider(
                                                className='alignment-slider',
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

                                            html.P(
                                                'Adjust the font size (in px) of viewer text.'
                                            ),
                                        ],
                                    ),
                                ]),
                                html.Hr(),
                                html.Div([
                                    html.H3('Conservation', className='alignment-settings-section'),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
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
                                            html.P('Show or hide the conservation barplot.')
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children='Colorscale'),
                                            dcc.Dropdown(
                                                id='alignment-conservationcolorscale-dropdown',
                                                className='alignment-settings-dropdown',
                                                options=[
                                                    {'label': col_code, 'value': col_code}
                                                    for col_code in CONSERVATION_COLORS_OPT
                                                ],
                                                value='Viridis',
                                            ),
                                            html.P('Change the colorscale for the '
                                                   'conservation barplot.'),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children='Method'),
                                            dcc.Dropdown(
                                                id='alignment-conservationmethod-dropdown',
                                                className='alignment-settings-dropdown',
                                                options=[
                                                    {'label': 'Entropy',
                                                     'value': 'entropy'},
                                                    {'label': 'Conservation',
                                                     'value': 'conservation'},
                                                ],
                                                value='entropy',
                                            ),

                                            html.P("Conservation (MLE) or normalized entropy."),
                                        ],
                                    ),
                                ]),
                                html.Hr(),
                                html.Div([
                                    html.H3('Conservation gap',
                                            className='alignment-settings-section'),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
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
                                            html.P("Lowers conservation of high gap sequences.")
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
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
                                            html.P("Show/hide the gap barplot.")
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children='Color'),
                                            dcc.Dropdown(
                                                id='alignment-gapcolor-dropdown',
                                                className='alignment-settings-dropdown',
                                                options=[
                                                    {'label': col_code, 'value': col_code}
                                                    for col_code in GAP_COLORS_OPT
                                                ],
                                                value='grey',
                                            ),
                                            html.P('Set the color of the traces '
                                                   'that represent the gap.')
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
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
                                            html.P('Group gap and conservation bars.')
                                        ],
                                    ),
                                    # Conservation colorscale
                                    # Gap color
                                ]),
                                html.Hr(),
                                html.Div([
                                    html.H3('Layout', className='alignment-settings-section'),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children='Labels'),
                                            dcc.RadioItems(
                                                id='alignment-showlabel-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Show ', 'value': True},
                                                    {'label': 'Hide ', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.P(
                                                'Show track labels on the left.'
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.Div(className='alignment-setting-name',
                                                     children='IDs'),
                                            dcc.RadioItems(
                                                id='alignment-showid-radio',
                                                className='alignment-radio',
                                                options=[
                                                    {'label': 'Show ', 'value': True},
                                                    {'label': 'Hide ', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                            html.P(
                                                'Show track IDs on the left.'
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
        html.Div([
            dash_bio.AlignmentChart(
                id='alignment-chart',
                height=725,
                data=dataset3,
            ),
        ]),

        dcc.Store(id='alignment-data-store'),
    ])


def callbacks(app):  # pylint: disable=redefined-outer-name

    # Handle file upload/selection into data store
    @app.callback(
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
    @app.callback(
        Output("alignment-events", "children"),
        [Input("alignment-chart", "eventDatum")]
    )
    def event_data_select(data):
        data = json.loads(data)

        if data is None or len(data.keys()) == 0:
            return 'No event data to display.'
        return [
            html.Div('- {}: {}'.format(key, data[key]))
            for key in data.keys()
        ]

    # Render main chart
    @app.callback(
        Output('alignment-chart', 'data'),
        [Input('alignment-data-store', 'data')]
    )
    def update_chart(input_data):
        return input_data

    # Customization callbacks
    @app.callback(
        Output('alignment-chart', 'colorscale'),
        [Input('alignment-colorscale-dropdown', 'value')],
    )
    def customize_colorscale(val):
        return val

    @app.callback(
        Output('alignment-chart', 'overview'),
        [Input('alignment-overview-dropdown', 'value')],
    )
    def customize_overview(val):
        return val

    @app.callback(
        Output('alignment-chart', 'showconsensus'),
        [Input('alignment-showconsensus-radio', 'value')],
    )
    def customize_showconsensus(val):
        return val

    @app.callback(
        Output('alignment-chart', 'textsize'),
        [Input('alignment-textsize-slider', 'value')],
    )
    def customize_textsize(val):
        return val

    @app.callback(
        Output('alignment-chart', 'showconservation'),
        [Input('alignment-showconservation-radio', 'value')],
    )
    def customize_showconservation(val):
        return val

    @app.callback(
        Output('alignment-chart', 'conservationcolorscale'),
        [Input('alignment-conservationcolorscale-dropdown', 'value')],
    )
    def customize_conservationcolorscale(val):
        return val

    @app.callback(
        Output('alignment-chart', 'conservationmethod'),
        [Input('alignment-conservationmethod-dropdown', 'value')],
    )
    def customize_conservationmethod(val):
        return val

    @app.callback(
        Output('alignment-chart', 'correctgap'),
        [Input('alignment-correctgap-radio', 'value')],
    )
    def customize_correctgap(val):
        return val

    @app.callback(
        Output('alignment-chart', 'showgap'),
        [Input('alignment-showgap-radio', 'value')],
    )
    def customize_showgap(val):
        return val

    @app.callback(
        Output('alignment-chart', 'gapcolor'),
        [Input('alignment-gapcolor-dropdown', 'value')],
    )
    def customize_gapcolor(val):
        return val

    @app.callback(
        Output('alignment-chart', 'groupbars'),
        [Input('alignment-groupbars-radio', 'value')],
    )
    def customize_groupbars(val):
        return val

    @app.callback(
        Output('alignment-chart', 'showlabel'),
        [Input('alignment-showlabel-radio', 'value')],
    )
    def customize_showlabel(val):
        return val

    @app.callback(
        Output('alignment-chart', 'showid'),
        [Input('alignment-showid-radio', 'value')],
    )
    def customize_showid(val):
        return val


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
