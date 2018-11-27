# In[]:
# Import required libraries
import numpy as np
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
import dash_bio
from .utils.needle_plot_parser import UniprotQueryBuilder, \
    extract_mutations, extract_domains, load_protein_domains, parse_mutation_data_file
from .utils.app_wrapper import app_page_layout

# Data used for the default demo plot
DATA_URL = "https://raw.githubusercontent.com/bbglab/muts-needle-plot/master/snippets/data/"
DATA = [
    {'mutData': 'TP53_MUTATIONS.json', 'domains': 'TP53_REGIONS.json', 'label': 'TP53'},
    {'mutData': 'muts.json', 'domains': 'regions.json', 'label': 'ENST00000557334'},
]

# Value of a dropdown
DEMO_KEY = 'demo'
FILE_KEY = 'file'
DATABASE_KEY = 'db'

# An object used to retrieve mutation information on UniPort database
UNIPROT_QUERY = UniprotQueryBuilder()

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


def description():
    return 'Display gene mutation of the genome thanks to this needle plot. \
    Also known under the lollipop plot name.'


def layout():
    app_main_layout = html.Div(
        className='row',
        children=[
            html.Div(
                className='four columns',
                style={'maxHeight': '90vh', 'overflow': 'auto'},
                children=dcc.Tabs(
                    id='tabs',
                    value='tab-data',
                    children=[
                        dcc.Tab(
                            label='Sample Data',
                            style={'maxHeight': '90vh', 'overflow': 'auto'},
                            value='tab-data',
                            children=[
                                html.Div(
                                    title='"Demo dataset" choice will allow you to play with the options.\n'
                                          '"UniProt dataset" choice will retrieve protein domain'
                                          'as well as mutation data from UniProt database.\n"Upload dataset"'
                                          'choice will let you choose your own mutation data with the option to'
                                          'load the protein domains from pfam database.',
                                    children=dcc.RadioItems(
                                        id='needle-dataset-select-radio',
                                        options=[
                                            {'label': 'Demo dataset', 'value': DEMO_KEY},
                                            {'label': 'Upload dataset', 'value': FILE_KEY},
                                            {'label': 'UniProt dataset', 'value': DATABASE_KEY},
                                        ],
                                        value=DEMO_KEY
                                    )
                                ),
                                html.Div(
                                    id='needle-%s-div' % DEMO_KEY,
                                    style={'width': '100%', 'display': 'none'},
                                    children=[
                                        html.H5(
                                            'Select demo dataset'
                                        ),
                                        dcc.Dropdown(
                                            id='needle-dataset-dropdown',
                                            options=[
                                                {'label': data['label'], 'value': i}
                                                for i, data in enumerate(DATA)
                                            ],
                                            value=0,
                                        ),
                                    ]
                                ),
                                html.Div(
                                    id='needle-%s-div' % DATABASE_KEY,
                                    style={'width': '100%', 'display': 'none'},
                                    children=[
                                        html.H5(
                                            'Search UniProt'
                                        ),
                                        html.Div(
                                            title='Enter the UniProt accession key '
                                                  'of the gene you want to display.\n'
                                                  'More information on https://www.uniprot.org/',
                                            children=[
                                                dcc.Input(
                                                    id='needle-sequence-input',
                                                    value='',
                                                    type='text',
                                                    placeholder='TP53, DDX3X, SMARCA4, ...',
                                                ),
                                                html.Button(
                                                    id='needle-search-sequence-button',
                                                    children='submit',
                                                    n_clicks=0,
                                                    n_clicks_timestamp=0,
                                                )
                                            ]
                                        ),
                                        html.Div(
                                            id='needle-uniprot-div',
                                            children='nothing to display',
                                        )
                                    ]
                                ),
                                html.Div(
                                    id='needle-%s-div' % FILE_KEY,
                                    style={'width': '100%', 'display': 'none'},
                                    children=[
                                        html.H5(
                                            'Upload file'
                                        ),
                                        dcc.Upload(
                                            id='needle-json-file-upload',
                                            children=html.Div([
                                                'Drag and Drop or ',
                                                html.A('Select Files')
                                            ]),
                                            style={
                                                'width': '90%',
                                                'borderWidth': '1px',
                                                'borderStyle': 'dashed',
                                                'borderRadius': '5px',
                                                'textAlign': 'center',
                                                'margin': '10px'
                                            },
                                        ),
                                        html.Div(
                                            id='needle-output-data-upload'
                                        ),
                                    ]
                                )
                            ],
                        ),
                        dcc.Tab(
                            label='Options',
                            value='tab-options',
                            children=[
                                html.Div(
                                    [
                                        html.H3('Config'),
                                        html.H5('Stem thickness'),
                                        dcc.Input(
                                            id='needle-stem-thick-input',
                                            type='number',
                                            value=2,
                                            min=1,
                                            max=40
                                        ),
                                        html.H5('Needle head size'),
                                        dcc.Input(
                                            id='needle-head-size-input',
                                            type='number',
                                            value=4,
                                            min=1,
                                            max=40,
                                        ),
                                        html.H5('Stem color'),
                                        html.Div(
                                            [
                                                dcc.Dropdown(
                                                    id='needle-stem-color-dropdown',
                                                    options=[
                                                        {'label': col, 'value': col}
                                                        for col in STEM_COLOR
                                                    ],
                                                    value=STEM_COLOR[0],
                                                ),
                                            ], style={'width': '100%'},
                                        ),
                                        html.H5('Head color(s)'),
                                        html.Div(
                                            [
                                                dcc.Dropdown(
                                                    id='needle-head-color-dropdown',
                                                    options=[
                                                        {'label': col, 'value': col}
                                                        for col in HEAD_COLORS
                                                    ],
                                                    value=HEAD_COLORS[0:4],
                                                    multi=True,
                                                ),
                                            ], style={'width': '100%'},
                                        ),
                                        html.H5('Head symbol(s)'),
                                        html.Div(
                                            [
                                                dcc.Dropdown(
                                                    id='needle-head-symbol-dropdown',
                                                    options=[
                                                        {'label': sym, 'value': sym}
                                                        for sym in HEAD_SYMBOLS
                                                    ],
                                                    value=HEAD_SYMBOLS[0],
                                                    multi=True
                                                ),
                                            ], style={'width': '100%'},
                                        ),
                                        html.H5('Constant height needles'),
                                        html.Div(
                                            [
                                                dcc.RadioItems(
                                                    id='needle-stem-height-radioitems',
                                                    options=[
                                                        {'label': 'On',
                                                         'value': True},
                                                        {'label': 'Off',
                                                         'value': False},
                                                    ],
                                                    value=False
                                                ),
                                            ], style={'width': '100%'},
                                        ),
                                        html.H5('Rangeslider Display'),
                                        html.Div(
                                            [
                                                dcc.RadioItems(
                                                    id='needle-rangeslider-radioitems',
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
                                                'width': '100%', 'marginBottom': '4%'},
                                        ),
                                    ],
                                    style={'maxHeight': '90vh', 'overflow': 'auto'},
                                ),
                            ],
                        )
                    ],
                ),
            ),
            html.Div(
                id='needle-plot-area',
                className='seven columns',
                children=dash_bio.NeedlePlot(
                    id='needle-plot',
                    rangeSlider=True,
                ),

            )
        ]

    )
    return app_page_layout(app_main_layout, app_title="Dash Bio : Needleplot")


def callbacks(app):

    @app.callback(
        Output('needle-%s-div' % DATABASE_KEY, 'style'),
        [
            Input('needle-dataset-select-radio', 'value'),
        ],
        [
            State('needle-%s-div' % DATABASE_KEY, 'style'),
        ]
    )
    def toggle_db(method, div_style):
        """updates what the user can use to load data to the graph"""
        if method == DATABASE_KEY:
            div_style.pop('display')
        else:
            div_style['display'] = 'none'

        return div_style

    @app.callback(
        Output('needle-%s-div' % DEMO_KEY, 'style'),
        [
            Input('needle-dataset-select-radio', 'value'),
        ],
        [
            State('needle-%s-div' % DEMO_KEY, 'style'),
        ]
    )
    def toggle_demo(method, div_style):
        """updates what the user can use to load data to the graph"""
        if method == DEMO_KEY:
            div_style.pop('display')
        else:
            div_style['display'] = 'none'

        return div_style

    @app.callback(
        Output('needle-%s-div' % FILE_KEY, 'style'),
        [
            Input('needle-dataset-select-radio', 'value'),
        ],
        [
            State('needle-%s-div' % FILE_KEY, 'style'),
        ]
    )
    def toggle_file(method, div_style):
        """updates what the user can use to load data to the graph"""
        if method == FILE_KEY:
            div_style.pop('display')
        else:
            div_style['display'] = 'none'

        return div_style

    @app.callback(
        Output('needle-plot', 'mutationData'),
        [
            Input('needle-search-sequence-button', 'n_clicks'),
            Input('needle-dataset-select-radio', 'value'),
            Input('needle-dataset-dropdown', 'value'),
            Input('needle-json-file-upload', 'contents'),
        ],
        [
            State('needle-json-file-upload', 'filename'),
            State('needle-sequence-input', 'value'),
        ]
    )
    def load_dataset(
            n_click,
            load_choice,
            demo_choice,
            contents,
            fname,
            query):
        """prepares mutation and protein domain datasets to be passed to
            the needle plot
        """
        x = []
        y = []
        mutationgroups = []
        domains = []

        if load_choice == DATABASE_KEY:
            # Performs a simple query in the UniProt database to find an
            # accession number, to get more than one number, change the limit
            # parameter
            if query:
                gene_search = UNIPROT_QUERY.query_into_pandas(
                    query,
                    fields=dict(
                        revieved='yes',
                        database='pfam',
                    ),
                    parameters=dict(
                        limit=1,
                        columns="id,entry name,length,genes,organism",
                        sort='score',
                        format='tab'
                    )
                )

                if not gene_search.empty:
                    accession = gene_search['id'][0]
                    domains = load_protein_domains(accession=accession)

                    # Query data from a GFF file (http://gmod.org/wiki/GFF3)
                    gff_data = UNIPROT_QUERY.query_into_pandas(
                        query,
                        fields=dict(
                            revieved='yes',
                            database='pfam',
                            accession=accession,
                        ),
                        parameters=dict(
                            format='gff'
                        ),
                        names=['name', 'db', 'mut', 'start', 'end', 'x1', 'x2', 'x3', 'note'],
                    )

                    # Gather the number of single mutations as well as their count
                    if not gff_data.empty:
                        mut_type = 'Natural variant'
                        data = gff_data[gff_data.mut == mut_type]['start'].value_counts()
                        x = np.array(data.index).astype('str')
                        y = np.array(data.values).astype('str')
                else:
                    print("'%s' doesn't yield any results on www.uniprot.org !" % query)

        elif load_choice == DEMO_KEY:
            #
            x, y, mutationgroups = extract_mutations(DATA_URL, DATA[demo_choice]['mutData'])
            domains = extract_domains(DATA_URL, DATA[demo_choice]['domains'])

        elif load_choice == FILE_KEY:
            # the user has to provide a file which is then parsed by a function to
            # make sure it is the right format
            return parse_mutation_data_file(contents, fname)

        return dict(
            x=x,
            y=y,
            mutationGroups=mutationgroups,
            domains=np.array(domains),
        )

    @app.callback(
        Output('needle-plot', 'rangeSlider'),
        [Input('needle-rangeslider-radioitems', 'value')]
    )
    def toggle_rangeslider(val):
        return val

    @app.callback(
        Output('needle-plot', 'needleStyle'),
        [
            Input('needle-stem-height-radioitems', 'value'),
            Input('needle-stem-thick-input', 'value'),
            Input('needle-stem-color-dropdown', 'value'),
            Input('needle-head-size-input', 'value'),
            Input('needle-head-color-dropdown', 'value'),
            Input('needle-head-symbol-dropdown', 'value'),
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
