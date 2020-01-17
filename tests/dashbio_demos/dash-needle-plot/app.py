import os
import copy
import json
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State

from dash_bio_utils.uniprot_database_tools import UniprotQueryBuilder
from dash_bio_utils.mutation_data_parser import EMPTY_MUT_DATA, \
    load_protein_domains, parse_mutation_upload_file, \
    parse_domain_upload_file, parse_mutations_uniprot_data, load_mutation_data
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

# Data used for the default demo plot
DATA_URL = "https://raw.githubusercontent.com/bbglab/" \
           "muts-needle-plot/master/snippets/data/"
DEMO_DATA = [
    {'mutData': 'TP53.json', 'label': 'TP53'},
    {'mutData': 'ACVR1.json', 'label': 'ACVR1'},
    {'mutData': 'SMARCA4.json', 'label': 'SMARCA4'},
    {'mutData': 'ENTS00000557334.json', 'label': 'ENST00000557334'},
    {'mutData': 'PIK3CA.json', 'label': 'PIK3CA'},
    {'mutData': 'ATRX.json', 'label': 'ATRX'},
]


# Values of a the load dataset dropdown
DEMO_KEY = 'demo'
FILE_KEY = 'file'
DATABASE_KEY = 'db'

# Values of the data download dropdown
FULL_KEY = 'needleplot'
MUT_KEY = 'mutations'
DOM_KEY = 'protein_domains'

# Value of the cheklist to load the protein domain individually
INDIV_DOMS_KEY = 'indivual_domain_loading'
UNIPROT_DOMS_KEY = 'uniprot_domain_loading'

DB_LAST_QUERY_KEY = '%s-last-query' % DATABASE_KEY

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
]
HEAD_SYMBOLS = [
    'circle',
    'square',
    'triangle-up',
    'diamond'
]
STEM_COLOR = [
    'grey',
    'black',
    'white'
]

DOMAIN_COLORS = [
    '#8dd3c7',
    '#ffffb3',
    '#bebada',
    '#fb8072',
    '#80b1d3',
    '#fdb462',
    '#b3de69',
    '#fccde5',
    '#d9d9d9',
    '#bc80bd',
    '#ccebc5',
    '#ffed6f',
]


def description():
    return 'Display gene mutation of the genome thanks to this needle plot. \
    Also known under the lollipop plot name.'


def header_colors():
    return {
        'bg_color': '#0D1A51',
        'font_color': '#FFFFFF',
        'light_logo': True
    }


def layout():
    return html.Div(id='needleplot-body', className='app-body', children=[
        dcc.Loading(className='dashbio-loading', children=html.Div(
            id='needleplot-wrapper',
            children=dash_bio.NeedlePlot(
                id='needle-plot',
                rangeSlider=True
            )
        )),

        html.Div(id='needleplot-control-tabs', className='control-tabs', children=[
            dcc.Tabs(id='needleplot-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='control-tab', children=[
                        html.H4(className='what-is', children='What is Needle Plot?'),
                        html.P('Needle Plot allows you to display mutations in '
                               'a genome. Due to its similarity to both a barplot '
                               'and a scatter plot, it can be used to plot '
                               'datasets that have too many mutations for a '
                               'barplot to be meaningful.'),
                        html.P('In the "Data" tab, you can choose from preloaded '
                               'datasets, as well as upload your own. You can '
                               'additionally search the UniProt database for '
                               'data to plot. If you wish to save the data that are '
                               'plotted, you can choose to download all of it, or '
                               'just the data corresponding to mutations or domains.'),
                        html.P('In the "Graph" tab, you can change the aesthetics of '
                               'the data points by customizing colors, marker shapes, '
                               'and more.')
                    ])
                ),

                dcc.Tab(
                    label='Data',
                    value='datasets',
                    children=html.Div(className='control-tab', children=[
                        html.Div(
                            className='app-controls-block',
                            title='"Demo dataset" choice will allow you to play '
                            'with the options.\n'
                            '"UniProt dataset" choice will retrieve protein '
                            'domain as well as mutation data from UniProt '
                            'database.\n"Upload dataset" choice will let '
                            'you choose your own mutation data with the '
                            'option to load the protein domains from pfam '
                            'database.',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Dataset source:'
                                ),
                                dcc.Dropdown(
                                    id='needle-dataset-select-dropdown',
                                    options=[
                                        {
                                            'label': 'Demo dataset',
                                            'value': DEMO_KEY
                                        },
                                        {
                                            'label': 'Upload dataset',
                                            'value': FILE_KEY
                                        },
                                        {
                                            'label': 'UniProt dataset',
                                            'value': DATABASE_KEY
                                        },
                                    ],
                                    value=DEMO_KEY
                                )
                            ]
                        ),

                        html.Hr(),

                        html.Div(
                            id='needle-%s-div' % DEMO_KEY,
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Dataset:'
                                ),
                                dcc.Dropdown(
                                    id='needle-dataset-dropdown',
                                    options=[
                                        {
                                            'label': data['label'],
                                            'value': i
                                        }
                                        for i, data in enumerate(DEMO_DATA)
                                    ],
                                    value=0
                                ),
                            ]
                        ),


                        html.Div(
                            id='needle-protein-domains-select-div',
                            className='app-controls-block',
                            title='Check this box to enable loading of '
                            'mutation data such as the protein coordinate '
                            '(x), mutation number (y) and mutation type '
                            '(mutationGroups), individually from the protein'
                            ' domains',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Load protein domains:'
                                ),
                                dcc.Checklist(
                                    id='needle-protein-domains-select-checklist',
                                    className='needle-checklist',
                                    options=[
                                        {
                                            'label': 'Individually',
                                            'value': INDIV_DOMS_KEY
                                        },
                                        {
                                            'label': 'From UniProt only',
                                            'value': UNIPROT_DOMS_KEY
                                        }
                                    ],
                                    value=[]
                                )
                            ]
                        ),

                        html.Div(
                            id='needle-%s-div' % DATABASE_KEY,
                            className='app-controls-block',
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
                                )
                            ]
                        ),

                        html.Div(
                            id='needle-%s-div' % FILE_KEY,
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    id='needle-mutdata-file-div',
                                    title='Mutation data files are JSON files containing '
                                          'the following fields :\n'
                                          '- "x" (protein coordinate of the mutation); \n'
                                          '- "y" (number of recorded mutations); \n'
                                          '- "mutationGroups" (type of mutations); \n'
                                          '- "domains" (protein domains).\n '
                                          '"x", "y", and "mutationGroups" are arrays, they '
                                          'must have the same length. '
                                          '"x" is required. "domains" is an array of '
                                          'JSON objects with required fields "name" '
                                          'and "coord"; "name" can be any string (think '
                                          'of it as a label), whereas "coord" should be '
                                          'a string formatted like '
                                          '"<start_coord>-<stop_coord>" where integer '
                                          '<start_coord> is less than integer <stop_coord> '
                                          '(e.g., "23-34"), giving the domain in protein '
                                          'coordinates.',
                                    children=[
                                        html.H5(
                                            'Upload mutation data JSON file'
                                        ),
                                        dcc.Upload(
                                            id='needle-mutdata-file-upload',
                                            className='control-upload',
                                            children=html.Div([
                                                'Drag and drop or ',
                                                html.A('select files')
                                            ]),
                                        ),
                                        html.Div(
                                            id='needle-mutdata-file-info-div'
                                        )
                                    ]
                                ),
                                html.Div(
                                    id='needle-domain-file-div',
                                    title='Protein data files accepted here can be of'
                                          ' two types: \n'
                                          '- an array of JSON objects with the required '
                                          'fields, i.e., "name" (any string) and "coord" '
                                          '(a string specifying domains in protein '
                                          'coordinates (e.g., "23-34");'
                                          '- a JSON file with the same structure as: '
                                          'http://pfam.xfam.org/protein/P04637/graphic.',
                                    children=[
                                        html.H5('Upload protein data JSON file'),
                                        dcc.Upload(
                                            id='needle-domains-file-upload',
                                            className='needle-upload',
                                            children=html.Div([
                                                'Drag and drop or ',
                                                html.A('select files')
                                            ]),
                                        ),
                                        html.Div(
                                            id='needle-domains-file-info-div'
                                        )
                                    ]
                                ),
                                html.Div(
                                    id='needle-domain-query-info-div'),
                            ]
                        ),

                        html.Hr(),

                        html.Br(),
                        html.Div(
                            id='needle-download-data-div',
                            children=[
                                html.Div(
                                    className='app-controls-block',
                                    children=[
                                        html.Div(
                                            className='app-controls-name',
                                            children='Download data:'
                                        ),
                                        dcc.Dropdown(
                                            id='needle-download-data-dropdown',
                                            options=[
                                                {
                                                    'label': 'All',
                                                    'value': FULL_KEY
                                                },
                                                {
                                                    'label': 'Mutations',
                                                    'value': MUT_KEY
                                                },
                                                {
                                                    'label': 'Domains',
                                                    'value': DOM_KEY
                                                },
                                            ],
                                            value=FULL_KEY
                                        )
                                    ]
                                ),
                                html.A(
                                    id='needle-download-data-button-link',
                                    children=html.Button(
                                        id='needle-download-data-button',
                                        className='control-download',
                                        children='Download graph data',
                                        n_clicks=0,
                                        n_clicks_timestamp=0,
                                    ),
                                    href="",
                                    download=""
                                ),
                            ]
                        ),


                    ])
                ),

                dcc.Tab(
                    label='Graph',
                    value='graph',
                    children=html.Div(className='control-tab', children=[
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Stem thickness'
                                ),
                                dcc.Slider(
                                    id='needle-stem-thick-input',
                                    value=2,
                                    min=1,
                                    max=10,
                                    step=1
                                )
                            ]
                        ),
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Needle head size'
                                ),
                                dcc.Slider(
                                    id='needle-head-size-input',
                                    value=7,
                                    min=1,
                                    max=10,
                                    step=1
                                )
                            ]
                        ),
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Stem color'
                                ),
                                dcc.Dropdown(
                                    id='needle-stem-color-dropdown',
                                    options=[
                                        {
                                            'label': col,
                                            'value': col
                                        }
                                        for col in STEM_COLOR
                                    ],
                                    value=STEM_COLOR[0],
                                )
                            ]
                        ),
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Head color(s)'
                                ),
                                dcc.Dropdown(
                                    id='needle-head-color-dropdown',
                                    options=[
                                        {
                                            'label': col,
                                            'value': col
                                        }
                                        for col in HEAD_COLORS
                                    ],
                                    value=HEAD_COLORS[0:4],
                                    multi=True,
                                ),
                            ],
                        ),
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Head symbol(s)'
                                ),
                                dcc.Dropdown(
                                    id='needle-head-symbol-dropdown',
                                    options=[
                                        {
                                            'label': sym,
                                            'value': sym
                                        }
                                        for sym in HEAD_SYMBOLS
                                    ],
                                    value=HEAD_SYMBOLS[0:4],
                                    multi=True
                                ),
                            ],
                        ),
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Constant height needles'
                                ),
                                dcc.RadioItems(
                                    id='needle-stem-height-radioitems',
                                    className='needle-radio',
                                    options=[
                                        {'label': 'On',
                                         'value': True},
                                        {'label': 'Off',
                                         'value': False},
                                    ],
                                    value=False
                                ),
                            ],
                        ),
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Rangeslider display'
                                ),
                                dcc.RadioItems(
                                    id='needle-rangeslider-radioitems',
                                    className='needle-radio',
                                    options=[
                                        {'label': 'On',
                                         'value': True},
                                        {'label': 'Off',
                                         'value': False},
                                    ],
                                    value=True
                                ),
                            ],
                        ),
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Small domains color(s)'
                                ),
                                dcc.Dropdown(
                                    id='needle-domains-color-dropdown',
                                    options=[
                                        {
                                            'label': col,
                                            'value': col
                                        }
                                        for col in DOMAIN_COLORS
                                    ],
                                    value=DOMAIN_COLORS[0:4],
                                    multi=True,
                                ),
                            ],
                        )

                    ]),
                )
            ])
        ]),

        dcc.Store(id='needle-store'),
    ])


def callbacks(_app):

    @_app.callback(
        Output('needle-%s-div' % DATABASE_KEY, 'style'),
        [Input('needle-dataset-select-dropdown', 'value')],
        [State('needle-%s-div' % DATABASE_KEY, 'style')]
    )
    def toggle_db(load_choice, div_style):

        """updates what the user can use to load data to the graph"""
        if div_style is None:
            div_style = {'display': 'none'}

        if load_choice == DATABASE_KEY:
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style

    @_app.callback(
        Output('needle-%s-div' % DEMO_KEY, 'style'),
        [Input('needle-dataset-select-dropdown', 'value')],
        [State('needle-%s-div' % DEMO_KEY, 'style')]
    )
    def toggle_demo(load_choice, div_style):
        """updates what the user can use to load data to the graph"""
        if div_style is None:
            div_style = {'display': 'none'}
        if load_choice == DEMO_KEY:
            div_style['display'] = 'block'
        else:
            div_style['display'] = 'none'
        return div_style

    @_app.callback(
        Output('needle-%s-div' % FILE_KEY, 'style'),
        [Input('needle-dataset-select-dropdown', 'value')],
        [State('needle-%s-div' % FILE_KEY, 'style')]
    )
    def toggle_file(load_choice, div_style):
        """updates what the user can use to load data to the graph"""
        if div_style is None:
            div_style = {'display': 'none'}

        if load_choice == FILE_KEY:
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style

    @_app.callback(
        Output('needle-uniprot-div', 'style'),
        [Input('needle-dataset-select-dropdown', 'value')],
        [State('needle-uniprot-div', 'style')]
    )
    def toggle_domain_doma(load_choice, div_style):
        """updates what the user can use to load data to the graph"""
        if div_style is None:
            div_style = {'display': 'none'}

        if load_choice == DATABASE_KEY:
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style

    @_app.callback(
        Output('needle-uniprot-div', 'children'),
        [Input('needle-store', 'data')],
        [State('needle-dataset-select-dropdown', 'value')]
    )
    def display_query_information(stored_data, load_choice):
        """diplays information about the query to the UniProt database"""

        div = html.Div()
        if load_choice == DATABASE_KEY:
            if stored_data['info']['is_same_key']:
                title = "Query"
            else:
                title = "Last query"
            last_query = stored_data['info'][load_choice]
            if last_query:
                div = html.Div(
                    [
                        html.H5(title),
                        html.P(last_query)
                    ]
                )
        return div

    @_app.callback(
        Output('needle-sequence-input', 'value'),
        [Input('needle-store', 'data')],
        [State('needle-dataset-select-dropdown', 'value')]
    )
    def reset_database_query(stored_data, load_choice):
        """resets the last query if the user changed dataset loading option"""
        if load_choice == DATABASE_KEY:
            answer = stored_data['info'][DB_LAST_QUERY_KEY]
        else:
            answer = ""
        return answer

    @_app.callback(
        Output('needle-domain-file-div', 'style'),
        [Input('needle-protein-domains-select-checklist', 'values')],
        [State('needle-domain-file-div', 'value')]
    )
    def toggle_individual_domain_loading_in_upload(domains_opt, div_style):
        """toggles the view of the domain upload div"""
        if div_style is None:
            div_style = {'display': 'none'}

        if (INDIV_DOMS_KEY in domains_opt) \
                and (UNIPROT_DOMS_KEY not in domains_opt):
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style

    @_app.callback(
        Output('needle-domain-query-info-div', 'style'),
        [Input('needle-protein-domains-select-checklist', 'values')],
        [
            State('needle-domain-query-info-div', 'style'),
            State('needle-dataset-select-dropdown', 'value')
        ]
    )
    def toggle_domain_domain_query_information(
            domains_opt,
            div_style,
            load_choice
    ):
        """toggles the view of the domain-query-info div which displays
            information from the Unitprot query"""
        if div_style is None:
            div_style = {'display': 'none'}
        div_style['display'] = 'none'

        if load_choice == FILE_KEY:
            if UNIPROT_DOMS_KEY in domains_opt:
                div_style['display'] = 'inherit'

        return div_style

    @_app.callback(
        Output('needle-protein-domains-select-div', 'style'),
        [Input('needle-dataset-select-dropdown', 'value')],
        [State('needle-protein-domains-select-div', 'style')]
    )
    def toggle_protein_domain_select_div(load_choice, div_style):
        """toggles the view of the protein domain select div which displays
            the ability to load protein domains independently form mutation
            data
        """
        if div_style is None:
            div_style = {'display': 'none'}

        if load_choice == FILE_KEY:
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style

    # UPLOAD RELATED CALLBACKS========
    @_app.callback(
        Output('needle-mutdata-file-upload', 'contents'),
        [Input('needle-dataset-select-dropdown', 'value')],
        [State('needle-mutdata-file-upload', 'contents')]
    )
    def reset_mutdata_upload_content(load_choice, mut_contents):
        """reset the content of the mutation data upload"""
        if load_choice == DEMO_KEY:
            answer = None
        else:
            answer = mut_contents
        return answer

    @_app.callback(
        Output('needle-domains-file-upload', 'contents'),
        [Input('needle-dataset-select-dropdown', 'value')],
        [State('needle-domains-file-upload', 'contents')]
    )
    def reset_domains_upload_content(load_choice, dom_contents):
        """reset the content of the proteins domains upload"""
        if load_choice == DEMO_KEY:
            answer = None
        else:
            answer = dom_contents
        return answer

    @_app.callback(
        Output('needle-mutdata-file-info-div', 'children'),
        [
            Input('needle-mutdata-file-upload', 'contents'),
            Input('needle-mutdata-file-upload', 'filename'),
        ]
    )
    def display_mutdata_upload_file_info(mut_contents, mut_fname):
        """display the info about the source of the protein mutations data"""
        if mut_contents is not None:
            answer = "Loaded from : %s " % mut_fname
        else:
            answer = []
        return answer

    @_app.callback(
        Output('needle-domains-file-info-div', 'children'),
        [
            Input('needle-domains-file-upload', 'contents'),
            Input('needle-domains-file-upload', 'filename'),
        ]
    )
    def display_domains_upload_file_info(dom_contents, dom_fname):
        """display the info about the source of the protein domains data"""
        if dom_contents is not None:
            answer = "Loaded from : %s " % dom_fname
        else:
            answer = []
        return answer

    @_app.callback(
        Output('needle-domain-query-info-div', 'children'),
        [Input('needle-store', 'data')],
        [State('needle-protein-domains-select-checklist', 'values')]
    )
    def display_domain_query_info(stored_data, domains_opt):
        """display the info about the source of the protein domains data"""

        div = []
        accession = stored_data[INDIV_DOMS_KEY]['accession']

        if UNIPROT_DOMS_KEY in domains_opt and accession:
            div = html.Div(
                [
                    html.H5("Protein domains loaded from "),
                    html.A(
                        "http://pfam.xfam.org/protein/%s/graphic" % accession,
                        href="http://pfam.xfam.org/protein/"
                             "%s/graphic" % accession
                    )
                ]
            )

        return div

    # DATA RELATED CALLBACKS==========
    @_app.callback(
        Output('needle-download-data-button-link', 'download'),
        [
            Input('needle-plot', 'mutationData'),
            Input('needle-download-data-dropdown', 'value')
        ]
    )
    def toggle_download_data_fname(_, dl_data_choice):
        """changed the file name of the downloadable data based on
           the user choice"""
        return "%s_data.json" % dl_data_choice

    @_app.callback(
        Output('needle-download-data-button-link', 'href'),
        [
            Input('needle-plot', 'mutationData'),
            Input('needle-download-data-dropdown', 'value')
        ],
        [State('needle-store', 'data')]
    )
    def toggle_download_data_link(_, dl_data_choice, stored_data):
        """changed the link to the downloadable data"""
        fname = "%s_data.json" % dl_data_choice
        fpath = "%s/%s" % (stored_data['info']['dl_data_path'], fname)
        return fpath

    @_app.callback(
        Output('needle-download-data-div', 'style'),
        [Input('needle-plot', 'mutationData')],
        [State('needle-download-data-div', 'style')]
    )
    def toggle_download_data_div(plotted_data, div_style):
        """toggles the display of the download data div"""
        if div_style is None:
            div_style = {'display': 'block'}

        div_style['display'] = 'block'

        # Disables the download-data-div is there is no data plotted
        if not plotted_data['domains'] and not plotted_data['x']:
            div_style['display'] = 'none'

        return div_style

    @_app.callback(
        Output('needle-plot', 'mutationData'),
        [Input('needle-store', 'data')],
        [State('needle-download-data-dropdown', 'value')]
    )
    def plot_dataset(stored_data, dl_data_choice):
        """reloads the dataset of the graph if the stored data changed"""

        # Saves the data locally if the user wants to download it
        fname = '%s_data.json' % dl_data_choice
        with open("%s/%s" % (stored_data['info']['dl_data_path'], fname), 'w') \
                as fp:
            json.dump(stored_data['plot'], fp)
        return stored_data['plot']

    @_app.callback(
        Output('needle-store', 'data'),
        [
            Input('needle-search-sequence-button', 'n_clicks'),
            Input('needle-dataset-select-dropdown', 'value'),
            Input('needle-dataset-dropdown', 'value'),
            Input('needle-protein-domains-select-checklist', 'values'),
            Input('needle-mutdata-file-upload', 'contents'),
            Input('needle-domains-file-upload', 'contents'),
        ],
        [
            State('needle-mutdata-file-upload', 'filename'),
            State('needle-domains-file-upload', 'filename'),
            State('needle-sequence-input', 'value'),
            State('needle-store', 'data')
        ]
    )
    def load_dataset(
            _,
            load_choice,
            demo_choice,
            domains_opt,
            mut_contents,
            dom_contents,
            mut_fname,
            dom_fname,
            query,
            stored_data
    ):
        """prepares mutation and protein domain datasets to be passed to
            the needle plot
        """
        if stored_data is None:
            stored_data = {
                'plot': copy.deepcopy(EMPTY_MUT_DATA),
                'info': {
                    'previous_key': load_choice,
                    'is_same_key': False,
                    DB_LAST_QUERY_KEY: '',
                    DATABASE_KEY: '',
                    'previous_choice': '',
                    'dl_data_path': DATAPATH,
                },
                INDIV_DOMS_KEY: {
                    'domains': [],
                    'accession': ''
                }
            }

        if load_choice == DEMO_KEY:
            # Loads datasets from a github repo for demo purpose
            fpath = stored_data['info']['dl_data_path']
            fname = DEMO_DATA[demo_choice]['mutData']
            stored_data['plot'] = load_mutation_data('%s/%s' % (fpath, fname))

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
                # Keeps the query in memory
                stored_data['info'][DATABASE_KEY] = gene_search.to_string()

                if not gene_search.empty:
                    accession = gene_search['id'][0]
                    domains = load_protein_domains(accession=accession)

                    stored_data['plot']['domains'] = domains
                    # Saves the domain to be able to load it separately in
                    # file upload option
                    stored_data[INDIV_DOMS_KEY] = {
                        'domains': domains,
                        'accession': accession
                    }

                    # Queries data from a GFF file (http://gmod.org/wiki/GFF3)
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
                        names=['name', 'db', 'mut', 'start',
                               'end', 'x1', 'x2', 'x3', 'note'],
                    )

                    # Extract the mutations data from the GFF data
                    if not gff_data.empty:
                        formatted_data = parse_mutations_uniprot_data(gff_data)
                        stored_data['plot']['x'] = formatted_data['x']
                        stored_data['plot']['y'] = formatted_data['y']
                        stored_data['plot']['mutationGroups'] = \
                            formatted_data['mutationGroups']
                        stored_data['info'][DB_LAST_QUERY_KEY] = query
                else:
                    print(
                        "'%s' doesn't yield any results on www.uniprot.org !"
                        % query
                    )

        else:
            stored_data['info'][DB_LAST_QUERY_KEY] = ''

        if load_choice == FILE_KEY:
            # the user has to provide a file which is then parsed by a
            # function to make sure it is the right format
            stored_data['plot'] = copy.deepcopy(EMPTY_MUT_DATA)

            # Loads the mutation data (could also contain protein domain)
            stored_data['plot'] = parse_mutation_upload_file(
                mut_contents, mut_fname)

            # Loads the protein domain from another file or from
            # the last database query
            if INDIV_DOMS_KEY in domains_opt:
                stored_data['plot']['domains'] = []
                if UNIPROT_DOMS_KEY not in domains_opt:
                    if dom_contents is not None:
                        stored_data['plot']['domains'] = \
                            parse_domain_upload_file(dom_contents, dom_fname)
                else:
                    if INDIV_DOMS_KEY in stored_data:
                        stored_data['plot']['domains'] = \
                            stored_data[INDIV_DOMS_KEY]['domains']

        # Store the information about this load_choice for Div display
        if load_choice != stored_data['info']['previous_key']:
            stored_data['info']['is_same_key'] = False
        else:
            stored_data['info']['is_same_key'] = True

        stored_data['info']['previous_key'] = load_choice

        return stored_data

    # GRAPH OPTIONS CALLBACKS=========
    @_app.callback(
        Output('needle-plot', 'rangeSlider'),
        [Input('needle-rangeslider-radioitems', 'value')]
    )
    def toggle_rangeslider(val):
        return val

    @_app.callback(
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
            needle_sty,
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

    @_app.callback(
        Output('needle-plot', 'domainStyle'),
        [Input('needle-domains-color-dropdown', 'value')],
        [State('needle-plot', 'domainStyle')]
    )
    def update_domain_style(
            small_domains_colors,
            domain_sty
    ):
        if domain_sty is None:
            domain_sty = {}

        domain_sty['domainColor'] = small_domains_colors
        return domain_sty


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
