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
        'bg_color': '#10785e',
        'font_color': 'white',
    }


def layout():
    return html.Div(id='alignment-body', children=[
        html.Div([
            html.Div([
                dash_bio.AlignmentChart(
                    id='alignment-chart',
                    data=dataset3,
                ),
            ], className='alignment-card eight columns'),
            html.Div([
                dcc.Tabs(
                    id='alignment-tabs',
                    value='alignment-tab-select',
                    children=[
                        dcc.Tab(
                            label='Choose/view Data',
                            value='alignment-tab-select',
                            children=[
                                html.Div([
                                    html.H4(
                                        "Select Dataset"
                                    ),
                                    dcc.Dropdown(
                                        id='alignment-dropdown',
                                        className='alignment-select',
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
                                ], className='alignment-subcard'),
                                html.Div([
                                    html.H4(
                                        "Hover/Click/Event Data"
                                    ),
                                    dcc.Textarea(
                                        id="alignment-events",
                                        placeholder="Hover or click on data to see it here.",
                                        value="Hover or click on data to see it here.",
                                        className="alignment-events",
                                    ),
                                ], className='alignment-subcard'),
                                html.Div([
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
                                        the user to interactively control their sequences.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Read more about the component here:
                                        https://github.com/plotly/react-alignment-viewer
                                        """
                                    ),
                                ], className='alignment-subcard')
                            ],
                        ),
                        dcc.Tab(
                            label='Upload Your Own',
                            value='alignment-tab-upload',
                            children=[
                                dcc.Upload(
                                    id='alignment-file-upload',
                                    className='alignment-upload',
                                    children=html.Div([
                                        "Drag and drop FASTA files or select files."
                                    ]),
                                ),
                                html.Div([
                                    html.H4(
                                        "Download sample data",
                                    ),
                                    html.A(
                                        html.Button(
                                            "Download",
                                            className='alignment-button',
                                        ),
                                        href="/assets/sample_data/alignment_viewer_p53_clustalo.fasta",
                                        download="alignment_viewer_p53_clustalo.fasta",
                                    )
                                ], className='alignment-subcard'),
                                html.Div([
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
                                        controls for colorscale, heatmaps, and subplots
                                        allowing the user to interactivelycontrol their sequences.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Read more about the component here:
                                        https://github.com/plotly/react-alignment-viewer
                                        """
                                    ),
                                ], className='alignment-subcard')
                            ],
                        ),
                        dcc.Tab(
                            label='Customize Chart',
                            value='alignment-tab-customize',
                            children=[
                                html.Div([
                                    html.H4('Viewer'),
                                    html.Hr(className='alignment-separator'),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Colorscale"),
                                            html.P("Choose color theme of the viewer."),
                                            dcc.Dropdown(
                                                id='alignment-colorscale-dropdown',
                                                options=COLORSCALES_DICT,
                                                value='clustal2',
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Overview method"),
                                            html.P("Show slider, heatmap or no overview."),
                                            dcc.Dropdown(
                                                id='alignment-overview-dropdown',
                                                options=[
                                                    {'label': 'Heatmap', 'value': 'heatmap'},
                                                    {'label': 'Slider', 'value': 'slider'},
                                                    {'label': 'None', 'value': 'none'},
                                                ],
                                                value='heatmap',
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Consensus sequence"),
                                            html.P(
                                                'Toggle the consensus (most frequent) sequence.'
                                            ),
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
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Text size"),
                                            html.P(
                                                'Adjust the font size (in px) of viewer text.'
                                            ),
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
                                        ],
                                    ),
                                ], className='alignment-subcard'),
                                html.Div([
                                    html.H4('Subplots'),
                                    html.Hr(className='alignment-separator'),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Conservation barplot"),
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
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Conservation colorscale"),
                                            dcc.Dropdown(
                                                id='alignment-conservationcolorscale-dropdown',
                                                options=[
                                                    {'label': col_code, 'value': col_code}
                                                    for col_code in CONSERVATION_COLORS_OPT
                                                ],
                                                value='Viridis',
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Conservation method"),
                                            html.P("Conservation (MLE) or normalized entropy."),
                                            dcc.Dropdown(
                                                id='alignment-conservationmethod-dropdown',
                                                options=[
                                                    {'label': 'Entropy',
                                                     'value': 'entropy'},
                                                    {'label': 'Conservation',
                                                     'value': 'conservation'},
                                                ],
                                                value='entropy',
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Conservation gap adjustment"),
                                            html.P("Lowers conservation of high gap sequences."),
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
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Gap barplot"),
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
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Gap color"),
                                            dcc.Dropdown(
                                                id='alignment-gapcolor-dropdown',
                                                options=[
                                                    {'label': col_code, 'value': col_code}
                                                    for col_code in GAP_COLORS_OPT
                                                ],
                                                value='grey',
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Group gap & conservation bars"),
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
                                        ],
                                    ),
                                    # Conservation colorscale
                                    # Gap color
                                ], className='alignment-subcard'),
                                html.Div([
                                    html.H4('Layout'),
                                    html.Hr(className='alignment-separator'),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("Labels"),
                                            html.P(
                                                'Show track labels on the left.'
                                            ),
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
                                        ],
                                    ),
                                    html.Div(
                                        className='alignment-settings',
                                        children=[
                                            html.H6("IDs"),
                                            html.P(
                                                'Show track IDs on the left.'
                                            ),
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
                                        ],
                                    ),
                                ], className='alignment-subcard'),
                            ],
                        ),
                    ],
                ),
            ], className='alignment-card four columns'),
        ], className='alignment-wrapper row'),
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
        Output("alignment-events", "value"),
        [Input("alignment-chart", "eventDatum")]
    )
    def event_data_select(data):
        return str(data)

    # # Handle event data
    # @app.callback(
    #     Output("alignment-events-2", "value"),
    #     [Input("alignment-chart", "eventDatum")]
    # )
    # def event_data_select_2(data):
    #     return str(data)

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
