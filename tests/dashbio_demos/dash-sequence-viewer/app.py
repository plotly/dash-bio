import os
import base64

from Bio.SeqUtils import seq3
from Bio.Alphabet import generic_dna, generic_rna
from Bio.Seq import Seq
from Bio.Data.CodonTable import TranslationError
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

from dash_bio_utils import protein_reader as pr
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
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
        'bg_color': '#C50063',
        'font_color': 'white'
    }


def description():
    return 'Display protein and nucleotide sequences with \
    coverages, selection information, and search.'


def layout():

    return html.Div(id='seq-view-body', className='app-body', children=[
        html.Div(
            id='seq-view-container',
            children=[
                html.Div(
                    id='seq-view-component-container',
                    children=[
                        dash_bio.SequenceViewer(
                            id='sequence-viewer',
                            sequenceMaxHeight='100px'
                        ),
                    ]
                ),
                html.Div(id='seq-view-info-container', children=html.Div(
                    id='seq-view-info',
                    children=[
                        html.Div(id='seq-view-info-desc',
                                 children=[
                                     html.Span(
                                         "Description",
                                         className='seq-view-info-element-title'
                                     ),
                                     html.Div(
                                         id='desc-info',
                                         children=[]
                                     )
                                 ]),

                        html.Br(),

                        html.Div(id='seq-view-info-aa-comp',
                                 children=[
                                     html.Span(
                                         "Amino acid composition",
                                         className='seq-view-info-element-title'
                                     ),
                                     html.Div(
                                         id='test-selection'
                                     )
                                 ]),

                        html.Br(),

                        html.Div(id='seq-view-info-coverage-clicked',
                                 children=[
                                     html.Span(
                                         "Coverage entry clicked",
                                         className='seq-view-info-element-title'
                                     ),
                                     html.Div(
                                         id='test-coverage-clicked'
                                     )
                                 ]),

                        html.Br(),

                        html.Div(id='seq-view-info-mouse-selection',
                                 children=[
                                     html.Span(
                                         "Mouse selection",
                                         className='seq-view-info-element-title'
                                     ),
                                     html.Div(
                                         id='test-mouse-selection'
                                     )
                                 ]),

                        html.Br(),

                        html.Div(id='seq-view-info-subpart-sel', children=[
                            html.Span(
                                "Subpart selected",
                                className='seq-view-info-element-title'
                            ),
                            html.Div(
                                id='test-subpart-selection'
                            )
                        ])
                    ]
                ))
            ]
        ),
        html.Div(id='seq-view-control-tabs', className='control-tabs', children=[
            dcc.Tabs(id='seq-view-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='control-tab', children=[
                        html.H4(className='what-is', children='What is Sequence Viewer?'),
                        html.P('Sequence Viewer is a component that allows you '
                               'to display genomic and proteomic sequences. In '
                               'this app, you can choose to view one of the preloaded '
                               'data sets or upload your own FASTA file in the "Data" '
                               'tab. For FASTA files with multiple entries, the entry '
                               'to display in the component can be selected in the '
                               '"Sequence" tab.'),
                        html.P('In the "Sequence" tab, you can also select a region '
                               'of the sequence to highlight and view its amino '
                               'acid composition in the box under the component. '),
                        html.P('You can additionally create a sequence coverage '
                               '(i.e., a collection of subsequences to highlight '
                               'and annotate). These subsequences can be extracted '
                               'from your mouse selection, or from the results of the '
                               'search that is shown in the component. Upon clicking on '
                               'a coverage entry, you will be able to see the '
                               'annotation that you have provided.'),
                    ])
                ),
                dcc.Tab(
                    label='Data',
                    value='data',
                    children=html.Div(className='control-tab', children=[
                        html.Div(
                            id='preloaded-and-uploaded-alert',
                            className='app-controls-desc',
                            children=[
                                'You have uploaded your own data. In order \
                                to view it, please ensure that the "preloaded \
                                sequences" dropdown has been cleared.'
                            ],
                            style={'display': 'none'}
                        ),
                        html.Div(className='app-controls-block', children=[
                            html.Div(
                                "Preloaded sequences",
                                className='app-controls-name'
                            ),
                            dcc.Dropdown(
                                className='app-dropdown',
                                id='preloaded-sequences',
                                options=[
                                    {
                                        'label': 'insulin',
                                        'value': os.path.join(DATAPATH, 'P01308.fasta.txt')
                                    },
                                    {
                                        'label': 'keratin',
                                        'value': os.path.join(DATAPATH, 'P04264.fasta.txt')
                                    },
                                    {
                                        'label': 'albumin',
                                        'value': os.path.join(DATAPATH, 'NX_P02768.fasta.txt')
                                    },
                                    {
                                        'label': 'myosin (gene)',
                                        'value': os.path.join(DATAPATH, 'myosin.fasta.txt')
                                    },
                                    {
                                        'label': 'HflX (gene)',
                                        'value': os.path.join(DATAPATH, 'hflx.fasta.txt')
                                    }
                                ],
                                value=os.path.join(DATAPATH, 'P01308.fasta.txt')
                            )
                        ]),
                        html.Div(
                            id='seq-view-fasta-upload',
                            children=[
                                dcc.Upload(
                                    id='upload-fasta-data',
                                    className='control-upload',
                                    children=html.Div([
                                        "Drag and drop or click to upload a \
                                        file."
                                    ]),
                                ),
                            ]
                        ),

                        html.A(
                            children=html.Button(
                                "Download sample FASTA data",
                                id='seq-view-download-sample-data',
                                className='control-download',
                            ),
                            href=os.path.join('assets', 'sample_data', 'tubulin.fasta.txt'),
                            download="tubulin.fasta.txt"
                        )
                    ])
                ),
                dcc.Tab(
                    label='Sequence',
                    value='sequence',
                    children=html.Div(className='control-tab', children=[
                        html.Div(
                            id='seq-view-entry-dropdown-container',
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    "View entry:",
                                    className='app-controls-name'
                                ),
                                dcc.Dropdown(
                                    className='app-dropdown',
                                    id='fasta-entry-dropdown',
                                    options=[
                                        {'label': 1, 'value': 0}
                                    ],
                                    value=0
                                ),
                                html.Div(
                                    id='seq-view-number-entries',
                                    className='app-controls-desc'
                                )
                            ]
                        ),
                        html.Br(),
                        html.Div(
                            id='seq-view-sel-or-cov-container',
                            children=[
                                html.Div(
                                    "Selection or coverage:",
                                    className='app-controls-name'
                                ),
                                dcc.RadioItems(
                                    id='selection-or-coverage',
                                    options=[
                                        {
                                            'label': 'selection',
                                            'value': 'sel'
                                        },
                                        {
                                            'label': 'coverage',
                                            'value': 'cov'
                                        }
                                    ],
                                    value='sel'
                                )
                            ]
                        ),


                        html.Hr(),

                        html.Div(id='cov-options', children=[
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    "Add coverage from selection by:",
                                    className='app-controls-name'
                                ),
                                dcc.RadioItems(
                                    id='mouse-sel-or-subpart-sel',
                                    options=[
                                        {'label': 'mouse',
                                         'value': 'mouse'},
                                        {'label': 'search',
                                         'value': 'subpart'}
                                    ],
                                    value='mouse'
                                ),
                            ]),

                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    "Text color:",
                                    className='app-controls-name'
                                ),
                                dcc.Input(
                                    id='coverage-color',
                                    type='text',
                                    value='rgb(255, 0, 0)'
                                )
                            ]),
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    "Background color:",
                                    className='app-controls-name'
                                ),
                                dcc.Input(
                                    id='coverage-bg-color',
                                    type='text',
                                    value='rgb(0, 0, 255)'
                                ),
                            ]),
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    "Tooltip:",
                                    className='app-controls-name'
                                ),
                                dcc.Input(
                                    id='coverage-tooltip',
                                    type='text',
                                    value='',
                                    placeholder='hover text'
                                ),
                            ]),
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    "Underscore text: ",
                                    className='app-controls-name'
                                ),
                                dcc.Checklist(
                                    id='coverage-underscore',
                                    options=[
                                        {'label': '',
                                         'value': 'underscore'}
                                    ],
                                    value=[]
                                )
                            ]),
                            html.Div(className='app-controls-block', children=[
                                html.Button(
                                    id='coverage-submit',
                                    children='Submit'
                                ),
                                html.Button(
                                    id='coverage-reset',
                                    children='Reset'
                                )
                            ])
                        ]),

                        html.Div(id='seq-view-sel-slider-container', children=[
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='app-controls-name',
                                    children="Selection region:"
                                ),
                                dcc.RadioItems(
                                    id='sel-slider-or-input',
                                    options=[
                                        {'label': 'slider', 'value': 'slider'},
                                        {'label': 'input', 'value': 'input'}
                                    ],
                                    value='slider'
                                )
                            ]),
                            html.Div(className='app-controls-block', children=[
                                dcc.RangeSlider(
                                    id='sel-slider',
                                    min=0,
                                    max=0,
                                    step=1,
                                    value=[0, 0]
                                )
                            ]),
                            html.Div(className='app-controls-block', children=[
                                # optional numeric input for longer sequences
                                html.Div(
                                    id='sel-region-inputs',
                                    children=[
                                        "From: ",
                                        dcc.Input(
                                            id='sel-region-low',
                                            type='number',
                                            min=0,
                                            max=0,
                                            placeholder="low"
                                        ),
                                        "To: ",
                                        dcc.Input(
                                            id='sel-region-high',
                                            type='number',
                                            min=0,
                                            max=0,
                                            placeholder="high"
                                        ),
                                    ],
                                    style={'display': 'none'}
                                )
                            ]),

                            html.Div(
                                id='seq-view-dna-or-protein-container',
                                children=[
                                    html.Div(className='app-controls-block', children=[
                                        html.Div(
                                            className='app-controls-name',
                                            children="Translate selection from:"
                                        ),
                                        dcc.Dropdown(
                                            id='translation-alphabet',
                                            options=[
                                                {'label': 'DNA',
                                                 'value': 'dna'},
                                                {'label': 'RNA',
                                                 'value': 'rna'}
                                            ],
                                            value=None
                                        )
                                    ])
                                ]
                            ),

                            html.Div(
                                className='app-controls-name',
                                children="Selection highlight color:"
                            ),
                            dcc.Dropdown(
                                className='app-dropdown',
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
                                value='indigo'
                            )
                        ])
                    ])
                )
            ]),
        ]),
        dcc.Store(
            id='coverage-storage',
            data=initialCov
        ),
        dcc.Store(
            id='clear-coverage',
            data=0
        ),
        dcc.Store(
            id='current-sequence',
            data=0
        )
    ])


def callbacks(_app):

    # upload or preloaded
    @_app.callback(
        Output('preloaded-sequences', 'value'),
        [Input('upload-fasta-data', 'contents')],
        state=[State('preloaded-sequences', 'value')]
    )
    def remove_preloaded(contents, current):
        if contents is not None:
            return None
        return current

    @_app.callback(
        Output('preloaded-and-uploaded-alert', 'style'),
        [Input('preloaded-sequences', 'value')],
        state=[State('upload-fasta-data', 'contents')]
    )
    def display_preloaded_uploaded_warning(preloaded, contents):
        answer = {'display': 'none'}
        if contents is not None and preloaded is not None:
            answer = {'display': 'inline-block'}
        return answer

    # sequence viewer sequence

    @_app.callback(
        Output('sequence-viewer', 'sequence'),
        [Input('upload-fasta-data', 'contents'),
         Input('fasta-entry-dropdown', 'value'),
         Input('preloaded-sequences', 'value')]
    )
    def update_sequence(upload_contents, entry, preloaded):

        if entry is None:
            return ''

        if preloaded is not None:
            protein = pr.read_fasta(preloaded)[entry]
        elif upload_contents is not None and preloaded is None:
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return '-'

            protein = pr.read_fasta(data, is_datafile=False)[entry]
        else:
            return '-'

        return protein['sequence']

    # coverage

    # check if there is an overlap with an existing coverage item
    def overlaps_coverage(current_cov, cov_item):
        for i in range(len(current_cov)):
            current_range = list(range(current_cov[i]['start'],
                                       current_cov[i]['end']))
            item_range = list(range(cov_item['start'],
                                    cov_item['end']))
            if len(list(set(current_range) & set(item_range))) > 0:
                return True
        return False

    # a way of getting the timestamp for a dropdown change
    @_app.callback(
        Output('current-sequence', 'data'),
        [Input('sequence-viewer', 'sequence')],
        state=[State('current-sequence', 'data')]
    )
    def signal_sequence_updated(_, current):
        if current is None:
            return 0
        return current + 1

    # whether or not to clear the coverage, based on a
    # change in the dropdown
    @_app.callback(
        Output('clear-coverage', 'data'),
        [Input('current-sequence', 'modified_timestamp'),
         Input('coverage-submit', 'n_clicks_timestamp')],
        state=[State('current-sequence', 'modified_timestamp')]
    )
    def signal_clear_coverage(_, c_timestamp, s_timestamp):
        # if the coverage has been modified at all and it was
        # modified more recently than the sequence, keep the current
        # coverage
        answer = 1
        if c_timestamp is not None:
            if c_timestamp > s_timestamp:
                answer = 0
            else:
                answer = 1
        # if the coverage has not yet been modified, we can clear
        # the coverage
        return answer

    # clear the subpart selected
    @_app.callback(
        Output('sequence-viewer', 'subpartSelected'),
        [Input('sequence-viewer', 'sequence')]
    )
    def clear_subpart_sel(_):
        return []

    @_app.callback(
        Output('coverage-storage', 'data'),
        [Input('coverage-submit', 'n_clicks'),
         Input('coverage-reset', 'n_clicks'),
         Input('clear-coverage', 'data')],
        state=[State('preloaded-sequences', 'value'),
               State('coverage-storage', 'data'),
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
    def edit_coverage(
            s_nclicks,
            r_nclicks,
            clear_coverage,
            preloaded,
            current_cov,
            mouse_subpart,
            mouse_sel,
            subpart_sel,
            color,
            bgcolor,
            underscore,
            tooltip,
            s_timestamp,
            r_timestamp
    ):
        # if the coverage hasn't been updated by resetting or
        # adding, and the sequence hasn't changed from the
        # initial one, then we return the initial coverage
        if s_nclicks is None and r_nclicks is None and 'P01308' in preloaded:
            return initialCov

        if r_timestamp is not None \
                and (s_timestamp is None or s_timestamp < r_timestamp):
            return []

        if clear_coverage == 1:
            return []

        if mouse_subpart == 'mouse':
            if mouse_sel is not None and color is not None:

                # first ensure that this hasn't already been covered
                if not overlaps_coverage(current_cov, mouse_sel):
                    current_cov.append(
                        {'start': mouse_sel['start']-1,
                         'end': mouse_sel['end'],
                         'color': color,
                         'bgcolor': bgcolor,
                         'underscore': bool(len(underscore) > 0),
                         'tooltip': tooltip}
                    )

        elif mouse_subpart == 'subpart':
            cov_items = [{
                'start': subpart['start']-1,
                'end': subpart['end'],
                'color': color,
                'bgcolor': bgcolor,
                'underscore': bool(len(underscore) > 0),
                'tooltip': tooltip
            } for subpart in subpart_sel]

            for cov_item in cov_items:
                if not overlaps_coverage(current_cov, cov_item):
                    current_cov.append(cov_item)

        # sort so that the tooltips can match up
        current_cov.sort(key=lambda x: x['start'])

        return current_cov

    @_app.callback(
        Output('sequence-viewer', 'coverage'),
        [Input('coverage-storage', 'data'),
         Input('selection-or-coverage', 'value')]
    )
    def apply_coverage(coverage_stored, sel_or_cov):

        if sel_or_cov != 'cov':
            return []

        return coverage_stored

    # selection

    @_app.callback(
        Output('sel-slider', 'value'),
        [Input('sequence-viewer', 'sequence')]
    )
    def reset_selection(_):
        return [0, 0]

    @_app.callback(
        Output('sel-region-low', 'value'),
        [Input('sequence-viewer', 'sequence')]
    )
    def reset_selection_low(*_):
        return 0

    @_app.callback(
        Output('sel-region-high', 'value'),
        [Input('sequence-viewer', 'sequence')]
    )
    def reset_selection_high(*_):
        return 0

    @_app.callback(
        Output('sequence-viewer', 'selection'),
        [Input('sel-slider', 'value'),
         Input('sel-region-low', 'value'),
         Input('sel-region-high', 'value'),
         Input('selection-or-coverage', 'value'),
         Input('sel-color', 'value')],
        state=[State('sel-slider-or-input', 'value')]
    )
    def update_sel(
            slider_value,
            sel_low,
            sel_high,
            sel_or_cov,
            color,
            slider_input,
    ):
        answer = []
        if sel_low > sel_high:
            sel_low = 0
            sel_high = 0
        if sel_or_cov != 'sel':
            answer = []
        else:
            if color is None:
                color = 'blue'
            if slider_input == 'slider':
                answer = [slider_value[0], slider_value[1], color]
            elif slider_input == 'input':
                answer = [sel_low, sel_high, color]
        return answer

    # clear mouse selection

    @_app.callback(
        Output('sequence-viewer', 'mouseSelection'),
        [Input('sequence-viewer', 'sequence')]
    )
    def clear_mouse_selection(_):
        return None

    # controls

    @_app.callback(
        Output('sel-slider', 'style'),
        [Input('sel-slider-or-input', 'value')]
    )
    def show_hide_slider(slider_input):
        return {'display': 'block'} if slider_input == 'slider' \
            else {'display': 'none'}

    @_app.callback(
        Output('sel-region-inputs', 'style'),
        [Input('sel-slider-or-input', 'value')]
    )
    def show_hide_inputs(slider_input):
        return {'display': 'block'} if slider_input == 'input' \
            else {'display': 'none'}

    @_app.callback(
        Output('cov-options', 'style'),
        [Input('selection-or-coverage', 'value')]
    )
    def show_cov_options(sel_or_cov):
        answer = {'display': 'none'}
        if sel_or_cov == 'cov':
            answer = {'display': 'inline-block'}
        return answer

    @_app.callback(
        Output('seq-view-sel-slider-container', 'style'),
        [Input('selection-or-coverage', 'value')]
    )
    def enable_disable_slider(sel_or_cov):
        answer = {'display': 'none'}
        if sel_or_cov == 'sel':
            answer = {'display': 'inline-block'}
        return answer

    @_app.callback(
        Output('seq-view-number-entries', 'children'),
        [Input('fasta-entry-dropdown', 'options')]
    )
    def update_num_entries(entries):
        return "Number of entries: {}".format(
            len(entries)
        )

    @_app.callback(
        Output('fasta-entry-dropdown', 'options'),
        [Input('upload-fasta-data', 'contents'),
         Input('preloaded-sequences', 'value')]
    )
    def update_protein_options(upload_contents, preloaded):

        dropdown_options = [
            {'label': 1, 'value': 0}
        ]

        if preloaded is not None:
            proteins = pr.read_fasta(preloaded)
        elif upload_contents is not None and preloaded is None:
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            proteins = pr.read_fasta(data, is_datafile=False)
        else:
            return dropdown_options

        if isinstance(proteins, list):
            dropdown_options = []
            for i in range(len(proteins)):
                dropdown_options.append(dict(
                    label=i+1,
                    value=i
                ))
        return dropdown_options

    @_app.callback(
        Output('sel-slider', 'max'),
        [Input('sequence-viewer', 'sequence')]
    )
    def update_slider_values(seq):
        if seq is None:
            seq = ''
        return len(seq)

    @_app.callback(
        Output('sel-region-high', 'max'),
        [Input('sequence-viewer', 'sequence')]
    )
    def update_sel_low_max(seq):
        if seq is None:
            seq = ''
        return len(seq)

    @_app.callback(
        Output('sel-region-low', 'max'),
        [Input('sequence-viewer', 'sequence')]
    )
    def update_sel_high_max(seq):
        if seq is None:
            seq = ''
        return len(seq)

    @_app.callback(
        Output('sequence-viewer', 'title'),
        [Input('sequence-viewer', 'sequence'),
         Input('fasta-entry-dropdown', 'value'),
         Input('preloaded-sequences', 'value')],
        state=[State('upload-fasta-data', 'contents')]
    )
    def update_sequence_title(_, entry, preloaded, upload_contents):

        if entry is None:
            return ''

        if preloaded is not None:
            protein = pr.read_fasta(preloaded)[entry]
        elif upload_contents is not None and preloaded is None:
            data = ''
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            if data == '':
                return ''
            protein = pr.read_fasta(data, is_datafile=False)[entry]
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
    @_app.callback(
        Output('test-selection', 'children'),
        [Input('sequence-viewer', 'selection'),
         Input('translation-alphabet', 'value'),
         Input('sequence-viewer', 'sequence')],
    )
    def get_aa_comp(v, alphabet, seq):
        answer = ''
        break_and_return = False
        if v is None or len(v) < 2:
            pass
        else:
            try:
                subsequence = seq[v[0]:v[1]]
            except TypeError:
                answer = html.Table([])
                break_and_return = True

            if not break_and_return:
                # default - file represents a protein
                aa_string = subsequence

                if alphabet == 'dna':
                    # remove partial codons
                    subsequence = subsequence[:-(len(subsequence) % 3)] \
                        if (len(subsequence) % 3) != 0 \
                        else subsequence
                    s = Seq(subsequence, generic_dna)
                    try:
                        aa_string = str(s.translate())
                    except TranslationError:
                        answer = "Sequence does not represent DNA."
                        break_and_return = True
                elif alphabet == 'rna':
                    subsequence = subsequence[:-(len(subsequence) % 3)] \
                        if (len(subsequence) % 3) != 0 \
                        else subsequence
                    s = Seq(subsequence, generic_rna)
                    try:
                        aa_string = str(s.translate())
                    except TranslationError:
                        answer = "Sequence does not represent RNA."
                        break_and_return = True

                if not break_and_return:
                    # all unique amino acids
                    amino_acids = list(set(aa_string))
                    aa_counts = [
                        {
                            'aa': seq3(aa),
                            'count': aa_string.count(aa)
                        }
                        for aa in amino_acids
                    ]

                    # sort by most common AA in sequence
                    aa_counts.sort(
                        key=lambda x: x['count'],
                        reverse=True
                    )

                    summary = [
                        html.Tr([html.Td(aac['aa']),
                                 html.Td(str(aac['count']))])
                        for aac in aa_counts]

                    # include explanation for translation if necessary
                    if alphabet in ('dna', 'rna') \
                            and len(summary) > 0:
                        answer = [
                            '(Protein translated from {}: {})'.format(
                                alphabet.upper(),
                                aa_string
                            ),
                            html.Table(summary)
                        ]
                    else:
                        answer = html.Table(summary)
        return answer

    @_app.callback(
        Output('test-coverage-clicked', 'children'),
        [Input('sequence-viewer', 'coverageClicked')],
        state=[State('coverage-storage', 'data')]
    )
    def update_cov_clicked(index, current_cov):
        if index is None or current_cov is None:
            return ''

        return 'Index: {} Tooltip: {}'.format(
            index,
            current_cov[index]['tooltip']
        )

    @_app.callback(
        Output('test-mouse-selection', 'children'),
        [Input('sequence-viewer', 'mouseSelection')]
    )
    def update_mouse_sel(v):
        if v is not None:
            return v['selection']
        return ''

    @_app.callback(
        Output('fasta-entry-dropdown', 'value'),
        [Input('preloaded-sequences', 'value'),
         Input('upload-fasta-data', 'contents')]
    )
    def update_dropdown_value(v, c):
        return 0

    @_app.callback(
        Output('desc-info', 'children'),
        [Input('upload-fasta-data', 'contents'),
         Input('fasta-entry-dropdown', 'value'),
         Input('preloaded-sequences', 'value')],
    )
    def update_desc_info(upload_contents, entry, preloaded):

        if entry is None:
            return 'Please select an entry.'

        if preloaded is not None:
            protein = pr.read_fasta(preloaded)[entry]

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
                protein = pr.read_fasta(data, is_datafile=False)[entry]
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

    @_app.callback(
        Output('test-subpart-selection', 'children'),
        [Input('sequence-viewer', 'subpartSelected')]
    )
    def update_subpart_sel(v):
        if v is None:
            return ''
        test = []
        for sel in v:
            if len(sel['sequence']) == 0:
                continue
            test.append("Start: %d " % sel['start'])
            test.append("End: %d " % sel['end'])
            test.append("Sequence: %s" % sel['sequence'])
            test.append(html.Br())
        return test


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
