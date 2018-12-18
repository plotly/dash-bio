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


def header_colors():
    return {
        'bg_color': '#2b69fb',
        'font_color': 'white'
    }


def description():
    return 'Display protein and nucleotide sequences with \
    coverages, selection information, and search.'


def layout():

    return html.Div(id='seq-view-body', children=[
        html.Div(
            id='seq-view-upload-display',
            children=[
                html.Div(
                    id='seq-view-fasta-upload',
                    children=[
                        dcc.Upload(
                            id='upload-fasta-data',
                            children=html.Div([
                                "Drag and drop or click to upload a \
                                file."
                            ]),
                        ),
                    ]
                ),

                html.Div(
                    id='sequence-viewer-container',
                    children=[
                        dash_bio.SequenceViewer(
                            id='sequence-viewer',
                        )
                    ]
                )
            ]
        ),
        
        html.Div(
            id='seq-view-controls-container',
            children=[

                html.Div(
                    "Preloaded sequences",
                    className='seq-view-controls-name'
                ),
                dcc.Dropdown(
                    id='preloaded-sequences',
                    options=[
                        {'label': 'insulin',
                         'value': './tests/dash/sample_data/P01308.fasta.txt'},
                        {'label': 'keratin',
                         'value': './tests/dash/sample_data/P04264.fasta.txt'},
                        {'label': 'albumin',
                         'value': './tests/dash/sample_data/NX_P02768.fasta.txt'},
                        {'label': 'myosin (gene)',
                         'value': './tests/dash/sample_data/myosin.fasta.txt'},
                        {'label': 'HflX (gene)',
                         'value': './tests/dash/sample_data/hflx.fasta.txt'}
                    ],
                    value='./tests/dash/sample_data/P01308.fasta.txt'
                ),
                html.Br(), 
                html.Div(
                    id='seq-view-entry-dropdown-container',
                    children=[
                        html.Div(
                            "View entry:",
                            className='seq-view-controls-name'
                        ),
                        html.Div(
                            id='seq-view-number-entries'
                        ),
                        dcc.Dropdown(
                            id='fasta-entry-dropdown',
                            options=[
                                {'label': 1, 'value': 0}
                            ],
                            value=0
                        )
                    ]
                ),
                html.Br(),                
                html.Div(
                    id='seq-view-sel-or-cov-container',
                    children=[
                        html.Div(
                            "Selection or coverage",
                            className='seq-view-controls-name'
                        ), 
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
                
                html.Div(id='cov-options', children=[
                    html.Div(
                        "Add coverage",
                        style={'font-weight': 'bold'}
                    ),
                    dcc.RadioItems(
                        id='mouse-sel-or-subpart-sel',
                        options=[
                            {'label': 'Use mouse selection',
                             'value': 'mouse'},
                            {'label': 'Use subpart selection',
                             'value': 'subpart'}
                        ],
                        value='mouse'
                    ),
                    html.Br(), 
                    'Text color: ',
                    dcc.Input(
                        id='coverage-color',
                        type='text',
                        value='rgb(255, 0, 0)'
                    ),
                    'Background color: ',
                    dcc.Input(
                        id='coverage-bg-color',
                        type='text',
                        value='rgb(0, 0, 255)'
                    ),
                    'Tooltip: ',
                    dcc.Input(
                        id='coverage-tooltip',
                        type='text',
                        value='',
                        placeholder='hover text'
                    ),
                    dcc.Checklist(
                        id='coverage-underscore',
                        options=[
                            {'label': 'underscore text', 'value': 'underscore'}
                        ],
                        values=[]
                    ),
                    html.Br(), 
                    html.Button(
                        id='coverage-submit',
                        children='Submit'
                    ),
                    html.Button(
                        id='coverage-reset',
                        children='Reset'
                    ),                    
                    dcc.Store(
                        id='coverage-storage',
                        data=initialCov
                    )

                ]), 

                html.Div(
                    id='seq-view-sel-slider-container',
                    children=[
                        "Selection region",
                        dcc.RadioItems(
                            id='sel-slider-or-input', 
                            options=[
                                {'label': 'slider', 'value': 'slider'},
                                {'label': 'input', 'value': 'input'}
                            ],
                            value='slider'
                        ),
                        dcc.RangeSlider(
                            id='sel-slider',
                            min=0,
                            max=0,
                            step=1,
                            value=[0, 0]
                        ),
                        # optional numeric input for longer sequences
                        html.Div(
                            id='sel-region-inputs',
                            children=[
                                dcc.Input(id='sel-region-low', type='number',
                                          min=0, max=0,
                                          placeholder="low"),
                                dcc.Input(id='sel-region-high', type='number',
                                          min=0, max=0,
                                          placeholder="high"),
                                html.Button(id='submit-sel-region',
                                            children="Submit")
                            ],
                            style={'display': 'none'}
                        ),
                        
                        html.Br(),
                        
                        html.Div(
                            id='seq-view-dna-or-protein-container',
                            children=[
                                "Translate from",
                                dcc.RadioItems(
                                    id='translation-alphabet',
                                    options=[
                                        {'label': 'protein',
                                         'value': 'protein'},
                                        {'label': 'DNA',
                                         'value': 'dna'},
                                        {'label': 'RNA',
                                         'value': 'rna'}
                                    ],
                                    value='protein'
                                )
                            ]
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
                        ),
                    ]
                ),

            ]
        ),

        html.Div(
            id='seq-view-info-container',
            children=[
                html.Div(
                    id='preloaded-and-uploaded-alert',
                    children=[
                        'You have uploaded your own data. In order \
                        to view it, please ensure that the "preloaded \
                        sequences" dropdown has been cleared.'
                    ],
                    style={'display': 'none'}
                ), 
                
                html.Span(
                    "Description: ",
                    className='seq-view-info-element'
                ),
                html.Div(
                    id='desc-info',
                    children=[]
                ),
                html.Br(),

                html.Span(
                    "Amino acid composition: ",
                    className='seq-view-info-element'
                ),
                html.Div(
                    id='test-selection'
                ),
                html.Br(),

                html.Span(
                    "Coverage entry clicked: ",
                    className='seq-view-info-element'
                ),
                html.Div(
                    id='test-coverage-clicked'
                ),
                html.Br(),

                html.Span(
                    "Mouse selection: ",
                    className='seq-view-info-element'
                ), 
                html.Div(
                    id='test-mouse-selection'
                ),
                html.Br(),

                html.Span(
                    "Subpart sel: ",
                    className='seq-view-info-element'
                ),
                html.Div(
                    id='test-subpart-selection'
                ),

            ]
        )
    ])


def callbacks(app):

    # upload or preloaded
    @app.callback(
        Output('preloaded-sequences', 'value'),
        [Input('upload-fasta-data', 'contents')],
        state=[State('preloaded-sequences', 'value')]
    )
    def remove_preloaded(contents, current):
        if contents is not None:
            return None
        return current

    @app.callback(
        Output('preloaded-and-uploaded-alert', 'style'),
        [Input('preloaded-sequences', 'value')],
        state=[State('upload-fasta-data', 'contents')]
    )
    def display_preloaded_uploaded_warning(preloaded, contents):
        if(contents is not None and preloaded is not None):
            return {'display': 'inline-block'}
        return {'display': 'none'}

    # sequence viewer sequence
    
    @app.callback(
        Output('sequence-viewer', 'sequence'),
        [Input('upload-fasta-data', 'contents'),
         Input('fasta-entry-dropdown', 'value'),
         Input('preloaded-sequences', 'value')]
    )
    def update_sequence(upload_contents, entry, preloaded):
        
        if entry is None:
            return ''

        if preloaded is not None: 
            protein = pr.readFasta(filePath=preloaded)[entry]
        elif upload_contents is not None and preloaded is None:
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return '-'

            protein = pr.readFasta(dataString=data)[entry]
        else:
            return '-'
        
        return protein['sequence']
    
    # coverage

    # check if there is an overlap with an existing coverage item
    def overlaps_coverage(currentCov, covItem):
        for i in range(len(currentCov)):
            currentRange = list(range(currentCov[i]['start'],
                                      currentCov[i]['end']))
            itemRange = list(range(covItem['start'],
                                   covItem['end']))
            if(len(list(set(currentRange) & set(itemRange))) > 0):
                return True
        return False
    
    @app.callback(
        Output('coverage-storage', 'data'),
        [Input('coverage-submit', 'n_clicks'),
         Input('coverage-reset', 'n_clicks')],
        state=[State('coverage-storage', 'data'),
               State('mouse-sel-or-subpart-sel', 'value'), 
               State('sequence-viewer', 'mouseSelection'),
               State('sequence-viewer', 'subpartSelected'), 
               State('coverage-color', 'value'),
               State('coverage-bg-color', 'value'),
               State('coverage-underscore', 'values'),
               State('coverage-tooltip', 'value'),
               State('coverage-submit', 'n_clicks_timestamp'),
               State('coverage-reset', 'n_clicks_timestamp')]
    )
    def edit_coverage(s_nclicks, r_nclicks,
                      currentCov, mouse_subpart, 
                      mouseSel, subpartSel,
                      color, bgcolor,
                      underscore, tooltip,
                      s_timestamp, r_timestamp):
        
        if(r_timestamp is not None and
           (s_timestamp is None or s_timestamp < r_timestamp)):
            return []

        if mouse_subpart == 'mouse':
            if(mouseSel is not None and color is not None):    

                # first ensure that this hasn't already been covered
                if not overlaps_coverage(currentCov, mouseSel):
                    currentCov.append(
                        {'start': mouseSel['start']-1,
                         'end': mouseSel['end'],
                         'color': color,
                         'bgcolor': bgcolor,
                         'underscore': True if len(underscore) > 0 else False,
                         'tooltip': tooltip}
                    )                    

        elif mouse_subpart == 'subpart':
            cov_items = [{
                'start': subpart['start']-1,
                'end': subpart['end'],
                'color': color,
                'bgcolor': bgcolor,
                'underscore': True if len(underscore) > 0 else False,
                'tooltip': tooltip
            } for subpart in subpartSel]

            for cov_item in cov_items:
                if not overlaps_coverage(currentCov, cov_item):
                    currentCov.append(cov_item)
                    
        # sort so that the tooltips can match up
        currentCov.sort(key=lambda x: x['start'])

        return currentCov

    @app.callback(
        Output('sequence-viewer', 'coverage'),
        [Input('coverage-storage', 'data'),
         Input('selection-or-coverage', 'value')]
    )
    def apply_coverage(coverage_stored, selOrCov):
        
        if(selOrCov != 'cov'):
            return [] 

        return coverage_stored
    
    # selection

    @app.callback(
        Output('sel-slider', 'value'),
        [Input('sequence-viewer', 'sequence')]
    )
    def reset_selection(_):
        return [0, 0]

    @app.callback(
        Output('sel-region-low', 'value'),
        [Input('sequence-viewer', 'sequence')]
    )
    def reset_selection_low(*_):
        return 0

    @app.callback(
        Output('sel-region-high', 'min'),
        [Input('sel-region-low', 'value')]
    )
    def lower_bound(low_val):
        return low_val
    
    @app.callback(
        Output('sel-region-high', 'value'),
        [Input('sequence-viewer', 'sequence')]
    )
    def reset_selection_high(*_):
        return 0
    
    @app.callback(
        Output('sequence-viewer', 'selection'),
        [Input('sel-slider', 'value'),
         Input('submit-sel-region', 'n_clicks'), 
         Input('selection-or-coverage', 'value'),
         Input('sel-color', 'value')],
        state=[State('sel-slider-or-input', 'value'),
               State('sel-region-low', 'value'),
               State('sel-region-high', 'value')]
    )
    def update_sel(slider_value, _, selOrCov, color, slider_input,
                   sel_low, sel_high):
        if(selOrCov != 'sel'):
            return []
        if color is None:
            color = 'blue'
        if(slider_input == 'slider'): 
            return [slider_value[0], slider_value[1], color]
        elif(slider_input == 'input'):
            return [sel_low, sel_high, color]
        
    # clear mouse selection

    @app.callback(
        Output('sequence-viewer', 'mouseSelection'),
        [Input('sequence-viewer', 'sequence')]
    )
    def clear_mouse_selection(_):
        return None
        
    # controls

    @app.callback(
        Output('sel-slider', 'style'),
        [Input('sel-slider-or-input', 'value')]
    )
    def show_hide_slider(slider_input):
        return {'display': 'block'} if slider_input == 'slider' \
            else {'display': 'none'}

    @app.callback(
        Output('sel-region-inputs', 'style'),
        [Input('sel-slider-or-input', 'value')]
    )
    def show_hide_inputs(slider_input):
        return {'display': 'block'} if slider_input == 'input' \
                else {'display': 'none'}
    
    @app.callback(
        Output('cov-options', 'style'),
        [Input('selection-or-coverage', 'value')]
    )
    def show_cov_options(selOrCov):
        if(selOrCov == 'cov'):
            return {'display': 'inline-block'}
        else:
            return {'display': 'none'}
    
    @app.callback(
        Output('seq-view-sel-slider-container', 'style'),
        [Input('selection-or-coverage', 'value')]
    )
    def enable_disable_slider(selOrCov):
        if(selOrCov == 'sel'):
            return {'display': 'inline-block'}
        return {'display': 'none'}
    
    @app.callback(
        Output('seq-view-number-entries', 'children'),
        [Input('fasta-entry-dropdown', 'options')]
    )
    def update_num_entries(entries):
        return "Number of entries: {}".format(
            len(entries)
        )
    
    @app.callback(
        Output('fasta-entry-dropdown', 'options'),
        [Input('upload-fasta-data', 'contents'),
         Input('preloaded-sequences', 'value')]
    )
    def update_protein_options(upload_contents, preloaded):
        
        dropdownOptions = [
            {'label': 1, 'value': 0}
        ]
        
        if preloaded is not None:
            proteins = pr.readFasta(filePath=preloaded)
        elif upload_contents is not None and preloaded is None:
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            proteins = pr.readFasta(dataString=data)
        else:
            return dropdownOptions
        
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
        Output('sel-region-high', 'max'),
        [Input('sequence-viewer', 'sequence')]
    )
    def update_sel_low_max(seq):
        if seq is None:
            seq = ''
        return len(seq)

    @app.callback(
        Output('sel-region-low', 'max'),
        [Input('sequence-viewer', 'sequence')]
    )
    def update_sel_high_max(seq):
        if seq is None: 
            seq = ''
        return len(seq)
            
    @app.callback(
        Output('sequence-viewer', 'title'),
        [Input('sequence-viewer', 'sequence'),
         Input('fasta-entry-dropdown', 'value'),
         Input('preloaded-sequences', 'value')],
        state=[State('upload-fasta-data', 'contents')]
    )
    def update_sequence_title(seq, entry, preloaded, upload_contents):

        if entry is None:
            return ''
        
        if preloaded is not None: 
            protein = pr.readFasta(filePath=preloaded)[entry]
        elif upload_contents is not None and preloaded is None: 
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return ''
            protein = pr.readFasta(dataString=data)[entry]
        else:
            return ''            
            
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
            except TranslationError:
                return "Sequence does not represent DNA."
        elif(alphabet == 'rna'):
            subsequence = subsequence[:-(len(subsequence) % 3)] if \
                (len(subsequence) % 3) != 0 else subsequence
            s = Seq(subsequence, generic_rna)
            try:
                aaString = str(s.translate())
            except TranslationError:
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
        [Input('sequence-viewer', 'coverageClicked')],
        state=[State('coverage-storage', 'data')]
    )
    def update_cov_clicked(index, currentCov):
        if index is None or currentCov is None:
            return ''
        
        return 'Index: {} Tooltip: {}'.format(
            index,
            currentCov[index]['tooltip']
        )
    
    @app.callback(
        Output('test-mouse-selection', 'children'),
        [Input('sequence-viewer', 'mouseSelection')]
    )
    def update_mouse_sel(v):
        if(v is not None):
            return v['selection']
        return 'None'

    @app.callback(
        Output('fasta-entry-dropdown', 'value'),
        [Input('preloaded-sequences', 'value'),
         Input('upload-fasta-data', 'contents')]
    )
    def update_dropdown_value(v, c):
        return 0
    
    @app.callback(
        Output('desc-info', 'children'),
        [Input('upload-fasta-data', 'contents'),
         Input('fasta-entry-dropdown', 'value'),
         Input('preloaded-sequences', 'value')],
    )
    def update_desc_info(upload_contents, entry, preloaded):

        if entry is None:
            return 'Please select an entry.'
        
        if preloaded is not None:
            protein = pr.readFasta(filePath=preloaded)[entry]

        elif upload_contents is not None and preloaded is None:
            data = ''

            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return []
            try:
                protein = pr.readFasta(dataString=data)[entry]
            except Exception:
                return ['NA']
        else:
            return 'Please either upload a file or select one from \
            the dropdown.'
        
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


