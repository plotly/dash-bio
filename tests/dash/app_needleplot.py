# In[]:
# Import required libraries
import numpy as np
import copy
import json
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
import dash_bio
from .utils.needle_plot_parser import UniprotQueryBuilder, extract_mutations, EMPTY_MUT_DATA,\
    extract_domains, load_protein_domains, parse_mutation_upload_file, parse_domain_upload_file,\
    parse_mutations_uniprot_data
from .utils.app_wrapper import app_page_layout

# Data used for the default demo plot
DATA_URL = "https://raw.githubusercontent.com/bbglab/muts-needle-plot/master/snippets/data/"
DATA = [
    {'mutData': 'TP53_MUTATIONS.json', 'domains': 'TP53_REGIONS.json', 'label': 'TP53'},
    {'mutData': 'muts.json', 'domains': 'regions.json', 'label': 'ENST00000557334'},
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
            dcc.Store(id='needle-store'),
            html.Div(
                className='four columns needle-tabs',
                children=dcc.Tabs(
                    id='tabs',
                    value='tab-data',
                    children=[
                        dcc.Tab(
                            label='Sample Data',
                            className='needle-tab',
                            value='tab-data',
                            children=[
                                html.Div(
                                    id='needle-dataset-header-div',
                                    children=[
                                        html.Div(
                                            id='needle-dataset-select-div',
                                            title='"Demo dataset" choice will allow you to play with the options.\n'
                                                  '"UniProt dataset" choice will retrieve protein domain '
                                                  'as well as mutation data from UniProt database.\n"Upload dataset"'
                                                  'choice will let you choose your own mutation data with the option to'
                                                  ' load the protein domains from pfam database.',
                                            className='needle-dataset-header-div',
                                            children=dcc.RadioItems(
                                                id='needle-dataset-select-radio',
                                                options=[
                                                    {'label': 'Demo dataset', 'value': DEMO_KEY},
                                                    {'label': 'Upload dataset', 'value': FILE_KEY},
                                                    {'label': 'UniProt dataset', 'value': DATABASE_KEY},
                                                ],
                                                value=FILE_KEY
                                            )
                                        ),
                                        html.Div(
                                            id='needle-protein-domains-select-div',
                                            title='If checked, it will allow the user to load mutation data such '
                                                  'as the protein coordinate (x), mutation number (y) and mutation '
                                                  'type (mutationGroups), individually from the protein domains',
                                            className='needle-dataset-header-div',
                                            children=dcc.Checklist(
                                                id='needle-protein-domains-select-checklist',
                                                options=[
                                                    {
                                                        'label': 'Load protein domains individually',
                                                        'value': INDIV_DOMS_KEY
                                                    },
                                                    {
                                                        'label': 'Load protein domains from UniProt only',
                                                        'value': UNIPROT_DOMS_KEY
                                                    }
                                                ],
                                                values=[]
                                            )
                                        ),
                                    ]
                                ),
                                html.Div(
                                    id='needle-download-data-div',
                                    className='needle-horizontal-style',
                                    children=[
                                        html.A(
                                            id='needle-download-data-button-link',
                                            children=html.Button(
                                                id='needle-download-data-button',
                                                children='Download data',
                                                n_clicks=0,
                                                n_clicks_timestamp=0,
                                            ),
                                            href="",
                                            download="",
                                        ),
                                        dcc.Dropdown(
                                            id='needle-download-data-dropdown',
                                            options=[
                                                {'label': 'Whole', 'value': FULL_KEY},
                                                {'label': 'Mutations', 'value': MUT_KEY},
                                                {'label': 'Domains', 'value': DOM_KEY},
                                            ],
                                            value=FULL_KEY,
                                        )
                                    ]
                                ),
                                html.Div(
                                    id='needle-%s-div' % DEMO_KEY,
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
                                                ),
                                            ]
                                        ),
                                        html.Div(
                                            id='needle-uniprot-div',
                                        )
                                    ]
                                ),
                                html.Div(
                                    id='needle-%s-div' % FILE_KEY,
                                    children=[
                                        html.H5(
                                            'Upload mutation data json file'
                                        ),
                                        dcc.Upload(
                                            id='needle-mutdata-file-upload',
                                            className='needle-upload',
                                            children=html.Div([
                                                'Drag and Drop or ',
                                                html.A('Select Files')
                                            ]),
                                        ),
                                        html.Div(
                                            id='needle-mutdata-file-info-div'
                                        ),
                                        html.Div(
                                            id='needle-domain-file-div',
                                            children=[
                                                html.H5(
                                                    'Upload protein domains json file'
                                                ),
                                                dcc.Upload(
                                                    id='needle-domains-file-upload',
                                                    className='needle-upload',
                                                    children=html.Div([
                                                        'Drag and Drop or ',
                                                        html.A('Select Files')
                                                    ]),
                                                ),
                                                html.Div(
                                                    id='needle-domains-file-info-div'
                                                ),
                                            ]
                                        ),
                                        html.Div(
                                            id='needle-domain-query-info-div'
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
                                    children=[
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
                                            ],
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
                                            ],
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
                                            ],
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
                                            ],
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
                                        ),
                                    ],
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
        [Input('needle-dataset-select-radio', 'value')],
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

    @app.callback(
        Output('needle-%s-div' % DEMO_KEY, 'style'),
        [Input('needle-dataset-select-radio', 'value')],
        [State('needle-%s-div' % DEMO_KEY, 'style')]
    )
    def toggle_demo(load_choice, div_style):
        """updates what the user can use to load data to the graph"""
        if div_style is None:
            div_style = {'display': 'none'}

        if load_choice == DEMO_KEY:
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style

    @app.callback(
        Output('needle-%s-div' % FILE_KEY, 'style'),
        [Input('needle-dataset-select-radio', 'value')],
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

    @app.callback(
        Output('needle-uniprot-div', 'children'),
        [Input('needle-store', 'data')],
        [State('needle-dataset-select-radio', 'value')]
    )
    def display_query_information(stored_data, load_choice):
        """diplays information about the query to the UniProt database"""
        if load_choice in stored_data['info']:
            return stored_data['info'][load_choice]
        else:
            return ''

    @app.callback(
        Output('needle-sequence-input', 'value'),
        [Input('needle-store', 'data')],
        [State('needle-dataset-select-radio', 'value')]
    )
    def reset_database_query(stored_data, load_choice):
        """resets the last query if the user changed dataset loading option"""
        if load_choice == DATABASE_KEY:
            return stored_data['info'][DB_LAST_QUERY_KEY]
        else:
            return ""

    @app.callback(
        Output('needle-domain-file-div', 'style'),
        [Input('needle-protein-domains-select-checklist', 'values')],
        [State('needle-domain-file-div', 'value')]
    )
    def toggle_individual_domain_loading_in_upload(domains_opt, div_style):
        """toggles the view of the domain upload div"""
        if div_style is None:
            div_style = {'display': 'none'}

        if (INDIV_DOMS_KEY in domains_opt) and (UNIPROT_DOMS_KEY not in domains_opt):
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style




    @app.callback(
        Output('needle-domain-query-info-div', 'style'),
        [Input('needle-protein-domains-select-checklist', 'values')],
        [State('needle-domain-query-info-div', 'value')]
    )
    def toggle_domain_upload_query_information(domains_opt, div_style):
        """toggles the view of the output domain upload div which displays
            information from the Unitprot query"""
        if div_style is None:
            div_style = {'display': 'none'}

        if UNIPROT_DOMS_KEY in domains_opt:
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style






    @app.callback(
        Output('needle-protein-domains-select-div', 'style'),
        [Input('needle-dataset-select-radio', 'value')],
        [State('needle-protein-domains-select-div', 'style')]
    )
    def toggle_protein_domain_select_div(load_choice, div_style):
        """toggles the view of the protein domain select div which displays
            the ability to load protein domains independently form mutation data"""
        if div_style is None:
            div_style = {'display': 'none'}

        if load_choice == FILE_KEY:
            div_style['display'] = 'inherit'
        else:
            div_style['display'] = 'none'

        return div_style

    # UPLOAD RELATED CALLBACKS========
    @app.callback(
        Output('needle-mutdata-file-upload', 'contents'),
        [Input('needle-dataset-select-radio', 'value')],
        [State('needle-mutdata-file-upload', 'contents')]
    )
    def reset_mutdata_upload_content(load_choice, mut_contents):
        """reset the content of the mutation data upload"""
        if load_choice == DEMO_KEY:
            return None
        else:
            return mut_contents

    @app.callback(
        Output('needle-domains-file-upload', 'contents'),
        [Input('needle-dataset-select-radio', 'value')],
        [State('needle-domains-file-upload', 'contents')]
    )
    def reset_domains_upload_content(load_choice, dom_contents):
        """reset the content of the proteins domains upload"""
        if load_choice == DEMO_KEY:
            return None
        else:
            return dom_contents

    @app.callback(
        Output('needle-mutdata-file-info-div', 'children'),
        [
            Input('needle-mutdata-file-upload', 'contents'),
            Input('needle-mutdata-file-upload', 'filename'),
        ]
    )
    def display_mutdata_upload_file_info(mut_contents, mut_fname):
        """display the info about the source of the protein mutations data"""
        if mut_contents is not None:
            return "Loaded from %s : " % mut_fname
        else:
            return []

    @app.callback(
        Output('needle-domains-file-info-div', 'children'),
        [
            Input('needle-domains-file-upload', 'contents'),
            Input('needle-domains-file-upload', 'filename'),
        ]
    )
    def display_domains_upload_file_info(dom_contents, dom_fname):
        """display the info about the source of the protein domains data"""
        if dom_contents is not None:
            return "Loaded from %s : " % dom_fname
        else:
            return []

    @app.callback(
        Output('needle-domain-query-info-div', 'children'),
        [Input('needle-store', 'data')]
    )
    def display_domain_query_info(stored_data):
        """display the info about the source of the protein domains data"""
        return stored_data['info'][DATABASE_KEY]

    # DATA RELATED CALLBACKS==========
    @app.callback(
        Output('needle-download-data-button-link', 'download'),
        [
            Input('needle-plot', 'mutationData'),
            Input('needle-download-data-dropdown', 'value')
        ]
    )
    def toggle_download_data_fname(plotted_data, dl_data_choice):
        """changed the file name of the downloadable data based on
           the user choice"""
        return "%s_data.json" % dl_data_choice

    @app.callback(
        Output('needle-download-data-button-link', 'href'),
        [
            Input('needle-plot', 'mutationData'),
            Input('needle-download-data-dropdown', 'value')
         ],
        [State('needle-store', 'data')]
    )
    def toggle_download_data_link(plotted_data, dl_data_choice, stored_data):
        """changed the link to the downloadable data"""
        fname = "%s_data.json" % dl_data_choice
        fpath = "%s%s" % (stored_data['info']['dl_data_path'], fname)
        return fpath

    @app.callback(
        Output('needle-download-data-div', 'style'),
        [Input('needle-plot', 'mutationData')],
        [State('needle-download-data-div', 'style')]
    )
    def toggle_download_data_div(plotted_data, div_style):
        """toggles the display of the download data div"""
        if div_style is None:
            div_style = {'display': 'flex'}

        div_style['display'] = 'flex'

        # Disables the download-data-div is there is no data plotted
        if not plotted_data['domains'] and not plotted_data['x']:
            div_style['display'] = 'none'

        return div_style

    @app.callback(
        Output('needle-plot', 'mutationData'),
        [Input('needle-store', 'data')],
        [State('needle-download-data-dropdown', 'value')]
    )
    def plot_dataset(stored_data, dl_data_choice):
        """reloads the dataset of the graph if the stored data changed"""

        # Saves the data locally if the user wants to download it
        fname = '%s_data.json' % dl_data_choice
        with open("%s%s" % (stored_data['info']['dl_data_path'], fname), 'w') as fp:
            json.dump(stored_data['plot'], fp)
        return stored_data['plot']

    @app.callback(
        Output('needle-store', 'data'),
        [
            Input('needle-search-sequence-button', 'n_clicks'),
            Input('needle-dataset-select-radio', 'value'),
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
            n_click,
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
                    DB_LAST_QUERY_KEY: '',
                    DATABASE_KEY: '',
                    'previous_choice': '',
                    'dl_data_path': './tests/dash/sample_data/',
                }
            }

        if load_choice == DEMO_KEY:
            # Loads datasets from a github repo for demo purpose
            x, y, mutationgroups = extract_mutations(DATA_URL, DATA[demo_choice]['mutData'])
            domains = extract_domains(DATA_URL, DATA[demo_choice]['domains'])
            stored_data['plot'] = dict(
                x=x,
                y=y,
                mutationGroups=mutationgroups,
                domains=np.array(domains),
            )

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
                    # Saves the domain to be able to load it separately in file upload option
                    stored_data[INDIV_DOMS_KEY] = {'domains': domains}

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
                        names=['name', 'db', 'mut', 'start', 'end', 'x1', 'x2', 'x3', 'note'],
                    )

                    # Extract the mutations data from the GFF data
                    if not gff_data.empty:
                        formatted_data = parse_mutations_uniprot_data(gff_data)
                        stored_data['plot']['x'] = formatted_data['x']
                        stored_data['plot']['y'] = formatted_data['y']
                        stored_data['plot']['mutationGroups'] = formatted_data['mutationGroups']
                        stored_data['info'][DB_LAST_QUERY_KEY] = query
                else:
                    print("'%s' doesn't yield any results on www.uniprot.org !" % query)

        else:

            stored_data['info'][DB_LAST_QUERY_KEY] = ''
            stored_data['info'][DATABASE_KEY] = ''

        if load_choice == FILE_KEY:
            # the user has to provide a file which is then parsed by a function to
            # make sure it is the right format
            stored_data['plot'] = copy.deepcopy(EMPTY_MUT_DATA)

            # Loads the mutation data (could also contain protein domain)
            stored_data['plot'] = parse_mutation_upload_file(mut_contents, mut_fname)

            # Loads the protein domain from another file or from the last database query
            if INDIV_DOMS_KEY in domains_opt:
                if UNIPROT_DOMS_KEY not in domains_opt:
                    if dom_contents is not None:
                        stored_data['plot']['domains'] = parse_domain_upload_file(dom_contents, dom_fname)
                else:
                    if INDIV_DOMS_KEY in stored_data:
                        stored_data['plot']['domains'] = stored_data[INDIV_DOMS_KEY]['domains']

        return stored_data

    # GRAPH OPTIONS CALLBACKS=========
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
