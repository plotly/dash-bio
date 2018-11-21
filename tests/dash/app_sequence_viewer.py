import dash_bio
from dash_bio.utils import proteinReader as pr
import base64
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
from Bio.SeqUtils import seq3
from Bio.Alphabet import generic_dna, generic_rna
from Bio.Seq import Seq
from Bio.Data.CodonTable import TranslationError

proteinFolder = 'proteins'
sequence = '-'

initialCov = [
    {'start': 26, 'end': 29, 'color': 'rgb(255,255,255)',
     'bgcolor': 'rgb(0,0,255)', 'tooltip': 'Beta strand', 'underscore': True},
    {'start': 33, 'end': 43, 'color': 'rgb(0,0,0)',
     'bgcolor': 'rgb(100,100,200)', 'tooltip': 'Helix', 'underscore': True},
    {'start': 44, 'end': 46, 'color': 'rgb(0,0,0)',
     'bgcolor': 'rgb(100,100,200)', 'tooltip': 'Helix', 'underscore': True},
    {'start': 48, 'end': 50, 'color': 'rgb(255,255,255)',
     'bgcolor': 'rgb(0,0,255)', 'tooltip': 'Beta strand', 'underscore': True},
    {'start': 56, 'end': 58, 'color': 'rgb(255,255,255)',
     'bgcolor': 'rgb(0,0,255)', 'tooltip': 'Beta strand', 'underscore': True},
    {'start': 59, 'end': 66, 'color': 'rgb(0,0,200)',
     'bgcolor': 'rgb(200,200,0)', 'tooltip': 'Turn', 'underscore': False},
    {'start': 74, 'end': 76, 'color': 'rgb(255,255,255)',
     'bgcolor': 'rgb(0,0,255)', 'tooltip': 'Beta strand', 'underscore': True},
    {'start': 79, 'end': 81, 'color': 'rgb(0,0,0)',
     'bgcolor': 'rgb(100,100,200)', 'tooltip': 'Helix', 'underscore': True},
    {'start': 84, 'end': 86, 'color': 'rgb(0,0,200)',
     'bgcolor': 'rgb(200,200,0)', 'tooltip': 'Turn', 'underscore': False},
    {'start': 91, 'end': 97, 'color': 'rgb(0,0,0)',
     'bgcolor': 'rgb(100,100,200)', 'tooltip': 'Helix', 'underscore': True},
    {'start': 98, 'end': 101, 'color': 'rgb(255,255,255)',
     'bgcolor': 'rgb(0,0,255)', 'tooltip': 'Beta strand', 'underscore': True},
    {'start': 102, 'end': 106, 'color': 'rgb(0,0,0)',
     'bgcolor': 'rgb(100,100,200)', 'tooltip': 'Helix', 'underscore': True},
    {'start': 107, 'end': 109, 'color': 'rgb(0,0,200)',
     'bgcolor': 'rgb(200,200,0)', 'tooltip': 'Turn', 'underscore': False}
]

initialFile = './tests/dash/sample_data/P01308.fasta.txt'
initialProtein = pr.readFasta(
    filePath=initialFile
)[0]


def description():
    return 'Display protein and nucleotide sequences with \
    coverages, selection information, and search.'


def layout():

    return html.Div(id='seq-view-body', children=[

        html.Div(
            id='seq-view-header',
            children=[
                html.Img(
                    src='data:image/png;base64,{}'.format(
                        base64.b64encode(
                            open(
                                './assets/dashbio_logo.png',
                                'rb'
                            ).read()
                        ).decode()
                    ),
                    style={'height': '50px',
                           'margin-right': '50px'}
                ),
                "Dash sequence viewer"
            ]
        ),
        html.Div(
            id='seq-view-fasta-upload',
            children=[
                dcc.Upload(
                    id='upload-fasta-data',
                    children=html.Div([
                        "Drag and Drop or ",
                        html.A("Select file")
                    ]),
                    style={
                        'width': '100%',
                        'height': '50px',
                        'lineHeight': '60px',
                        'borderWidth': '1px',
                        'borderStyle': 'dashed',
                        'borderRadius': '5px',
                        'textAlign': 'center',
                    }
                ),
            ]
        ),

        html.Div(
            id='sequence-viewer-container',
            children=[
                dash_bio.SequenceViewer(
                    id='sequence-viewer',
                    sequence=initialProtein['sequence'],
                    coverage=initialCov
                )
            ]
        ),

        html.Div(
            id='seq-view-controls-container',
            children=[

                html.Div(
                    id='seq-view-entry-dropdown-container',
                    children=[
                        "Entry to view",
                        dcc.Dropdown(
                            id='fasta-entry-dropdown',
                            options=[
                                {'label': 1, 'value': 0}
                            ],
                            value=0
                        )
                    ]
                ),
                
                html.Hr(), 

                html.Div(
                    id='seq-view-sel-or-cov-container',
                    children=[
                        "Selection or coverage",
                        dcc.RadioItems(
                            id='selection-or-coverage',
                            options=[
                                {'label': 'Enable selection', 'value': 'sel'},
                                {'label': 'Enable coverage', 'value': 'cov'}
                            ],
                            value='sel'
                        )
                    ]
                ),
                

                html.Hr(),

                "Subsequence selected:", 
                html.Div(
                    id='test-mouse-selection',
                    children="None"
                ),

                html.Div(id='cov-options', children=[
                    'Coverage text color: ',
                    dcc.Input(
                        id='coverage-color',
                        type='text',
                        value='rgb(255, 0, 0)'
                    ),
                    'Coverage background color: ',
                    dcc.Input(
                        id='coverage-bg-color',
                        type='text',
                        value='rgb(0, 0, 255)'
                    ),
                    'Coverage tooltip: ',
                    dcc.Input(
                        id='coverage-tooltip',
                        type='text',
                        value=''
                    ),
                    dcc.Checklist(
                        id='coverage-underscore',
                        options=[
                            {'label': 'underscore text', 'value': 'underscore'}
                        ],
                        values=[]
                    ),
                    html.Button(
                        id='coverage-submit',
                        children='Submit'
                    )

                ]), 

                html.Hr(), 
                
                html.Div(
                    id='seq-view-dna-or-protein-container',
                    children=[
                        dcc.RadioItems(
                            id='translation-alphabet',
                            options=[
                                {'label': 'Translate protein',
                                 'value': 'protein'},
                                {'label': 'Translate DNA',
                                 'value': 'dna'},
                                {'label': 'Translate RNA',
                                 'value': 'rna'}
                            ],
                            value='protein'
                        )
                    ]
                ),
                
                html.Hr(),

                html.Div(
                    id='seq-view-sel-slider-container',
                    children=[
                        "Selection slider",
                        dcc.RangeSlider(
                            id='sel-slider',
                            min=0,
                            max=0,
                            step=1,
                            value=[0, 0]
                        ),
                        html.Br(),
                        "Color", 
                        dcc.Dropdown(
                            id='sel-color',
                            options=[
                                {'label': 'violet', 'value': 'violet'},
                                {'label': 'indigo', 'value': 'indigo'}, 
                                {'label': 'blue', 'value': 'blue'},
                                {'label': 'green', 'value': 'green'},
                                {'label': 'yellow', 'value': 'yellow'},
                                {'label': 'orange', 'value': 'orange'},
                                {'label': 'red', 'value': 'red'}
                            ],
                            value='blue'
                        )
                    ]
                ),

            ]
        ),

        html.Div(
            id='seq-view-info-container',
            children=[
                html.Span(
                    "Description: ",
                    style={
                        'font-weight': 'bold'
                    }
                ),
                html.Div(
                    id='desc-info',
                    children=[]
                ),
                html.Br(),

                html.Span(
                    "Amino acid composition: ",
                    style={
                        'font-weight': 'bold'
                    }
                ),
                html.Div(
                    id='test-selection'
                ),
                html.Br(),

                html.Span(
                    "Coverage entry clicked: ",
                    style={
                        'font-weight': 'bold'
                    }
                ),
                html.Div(
                    id='test-coverage-clicked'
                ),
                html.Br(),

                html.Span(
                    "Mouse sel: ",
                    style={
                        'font-weight': 'bold'
                    }
                ),
                html.Br(),

                html.Span(
                    "Subpart sel: ",
                    style={
                        'font-weight': 'bold'
                    }
                ),
                html.Div(
                    id='test-subpart-selection'
                )
            ]
        )
    ])


def callbacks(app):

    # sequence viewer display
    @app.callback(
        Output('sequence-viewer', 'sequence'),
        [Input('upload-fasta-data', 'contents'),
         Input('fasta-entry-dropdown', 'value')]
    )
    def update_sequence(upload_contents, v):
        
        if v is None:
            return ''

        
        if upload_contents is None or upload_contents == 0:
            protein = initialProtein
        else:            
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return '-'

            protein = pr.readFasta(dataString=data)[v]

        sequence = protein['sequence']

        return sequence


    @app.callback(
        Output('cov-options', 'style'),
        [Input('selection-or-coverage', 'value')]
    )
    def show_cov_options(v):
        if(v == 'cov'):
            return {'height': 'auto'}
        else:
            return {'height': '0px', 'overflow': 'hidden'}
    
    # coverage
    @app.callback(
        Output('sequence-viewer', 'coverage'),
        [Input('selection-or-coverage', 'value'),
         Input('coverage-submit', 'n_clicks'),
         Input('upload-fasta-data', 'contents')],
        state=[State('sequence-viewer', 'mouseSelection'),
               State('sequence-viewer', 'coverage'), 
               State('coverage-color', 'value'),
               State('coverage-bg-color', 'value'),
               State('coverage-underscore', 'values'),
               State('coverage-tooltip', 'value')]
    )
    def edit_coverage(selOrCov, nclicks, dataContents,
                      mouseSel, currentCov,
                      color, bgcolor, underscore,
                      tooltip):
        if(dataContents is None and selOrCov == 'cov' and
           len(currentCov) < len(initialCov)):
            currentCov = initialCov
        
        if(selOrCov != 'cov'):
            return [] 

        if(mouseSel is not None and color is not None): 
            
            # first ensure that this hasn't already been covered
            ranges = [(c['start'], c['end']) for c in currentCov]
            for i in range(len(currentCov)): 
                if(mouseSel['start'] in range(currentCov[i]['start'], currentCov[i]['end']) or
                   mouseSel['end'] in range(currentCov[i]['start'], currentCov[i]['end']) or
                   currentCov[i]['start'] in range(mouseSel['start'], mouseSel['end']) or
                   currentCov[i]['end'] in range(mouseSel['start'], mouseSel['end'])):
                    return currentCov
            
            currentCov.append(
                {'start': mouseSel['start']-1,
                 'end': mouseSel['end'],
                 'color': color,
                 'bgcolor': bgcolor,
                 'underscore': True if len(underscore) > 0 else False,
                 'tooltip': tooltip
                }
            )
        
        return currentCov

    # controls
    @app.callback(
        Output('sel-slider', 'disabled'),
        [Input('selection-or-coverage', 'value')]
    )
    def enable_disable_slider(v):
        if(v == 'sel'):
            return False
        return True

    @app.callback(
        Output('sel-color', 'disabled'),
        [Input('selection-or-coverage', 'value')]
    )
    def enable_disable_slider(v):
        if(v == 'sel'):
            return False
        return True

    
    @app.callback(
        Output('sequence-viewer', 'selection'),
        [Input('sel-slider', 'value'),
         Input('selection-or-coverage', 'value'),
         Input('sel-color', 'value')]
    )
    def update_sel(v, v2, color):
        if(v2 != 'sel'):
            return []
        if color is None:
            color='blue'
        return [v[0], v[1], color]

    @app.callback(
        Output('fasta-entry-dropdown', 'options'),
        [Input('upload-fasta-data', 'contents')]
    )
    def update_protein_options(upload_contents):
        
        dropdownOptions = [
            {'label': 1, 'value': 0}
        ]
        if(upload_contents is not None): 
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            proteins = pr.readFasta(dataString=data)
            if(type(proteins) is list):
                dropdownOptions = []
                for i in range(len(proteins)):
                    dropdownOptions.append(dict(
                        label=i+1,
                        value=i
                    ))
        return dropdownOptions

    @app.callback(
        Output('sel-slider', 'max'),
        [Input('sequence-viewer', 'sequence')]
    )
    def update_slider_values(seq):
        if seq is None:
            seq = ''
        return len(seq)

    @app.callback(
        Output('sequence-viewer', 'title'),
        [Input('sequence-viewer', 'sequence'),
         Input('fasta-entry-dropdown', 'value')],
        state=[State('upload-fasta-data', 'contents')]
    )
    def update_sequence_title(seq, v, upload_contents):

        if v is None:
            return ''
        
        if upload_contents is None: 
            protein = initialProtein

        else: 
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return ''

            protein = pr.readFasta(dataString=data)[v]
        
        titles = ['name', 'entry name', 'protein name', 'identifier', 'desc-0']

        for t in titles:
            try:
                return protein['description'][t]
            except KeyError:
                continue 
            
        return ''

    # info display
    @app.callback(
        Output('test-selection', 'children'),
        [Input('sequence-viewer', 'selection'),
         Input('translation-alphabet', 'value'),
         Input('sequence-viewer', 'sequence')],
    )
    def get_aa_comp(v, alphabet, seq):
        
        if(v is None):
            return ''
        if(len(v) < 2):
            return ''
        try:
            subsequence = seq[v[0]:v[1]]
        except TypeError:
            return html.Table([])

        # default - file represents a protein
        aaString = subsequence
        
        if(alphabet == 'dna'):
            # remove partial codons
            subsequence = subsequence[:-(len(subsequence) % 3)] if \
                (len(subsequence) % 3) != 0 else subsequence            
            s = Seq(subsequence, generic_dna)
            try:
                aaString = str(s.translate())
            except TranslationError as t:
                return "Sequence does not represent DNA."
        elif(alphabet == 'rna'):
            subsequence = subsequence[:-(len(subsequence) % 3)] if \
                (len(subsequence) % 3) != 0 else subsequence
            s = Seq(subsequence, generic_rna)
            try:
                aaString = str(s.translate())
            except TranslationError as t:
                return "Sequence does not represent RNA."

        # all unique amino acids
        aminoAcids = list(set(aaString))
        aaCounts = [{'aa': seq3(aa),
                     'count': aaString.count(aa)}
                    for aa in aminoAcids]

        # sort by most common AA in sequence
        aaCounts.sort(
            key=lambda x: x['count'],
            reverse=True
        )
        
        summary = [
            html.Tr([html.Td(aac['aa']),
                     html.Td(str(aac['count']))])
            for aac in aaCounts]

        # include explanation for translation if necessary
        if((alphabet == 'dna' or alphabet == 'rna') and
           len(summary) > 0):
            return ['(Protein translated from {} to {})'.format(
                alphabet.upper(),
                aaString
            ),
                    html.Table(summary)]
        return html.Table(summary)

    @app.callback(
        Output('test-coverage-clicked', 'children'),
        [Input('sequence-viewer', 'coverageClicked')]
    )
    def update_cov_clicked(v):
        return v


    @app.callback(
        Output('test-mouse-selection', 'children'),
        [Input('sequence-viewer', 'mouseSelection')]
    )
    def update_mouse_sel(v):
        if(v is not None):
            return v['selection']
        return 'None'

    @app.callback(
        Output('desc-info', 'children'),
        [Input('upload-fasta-data', 'contents'),
         Input('fasta-entry-dropdown', 'value')],
    )
    def update_desc_info(upload_contents, p):
        
        if(upload_contents is None or upload_contents == 0):
            protein = initialProtein

        else:
            data = ''

            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return []
            try:
                protein = pr.readFasta(dataString=data)[p]
            except Exception:
                return ['NA']
        
        desc = []
        for key in protein['description']:
            tmp = key.title() + ': ' if 'desc-' not in key else '-'
            tmp += protein['description'][key]
            desc.append(tmp)
            desc.append(html.Br())
        return desc

    @app.callback(
        Output('test-subpart-selection', 'children'),
        [Input('sequence-viewer', 'subpartSelected')]
    )
    def update_subpart_sel(v):
        if(v is None):
            return ''
        test = []
        for sel in v:
            test.append("Start: %d " % sel['start'])
            test.append("End: %d " % sel['end'])
            test.append("Sequence: %s" % sel['sequence'])
            test.append(html.Br())
        return test


