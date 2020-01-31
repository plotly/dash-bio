import os

import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_daq as daq
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


def description():
    return 'Compare, and analyze chromosome bands with the Dash Ideogram.'


def header_colors():
    return {'bg_color': '#230047', 'font_color': '#FFFFFF', 'light_logo': True}


# Used to simplify chromosome inputs for Homology
def chromosome_div(
        id_tag='chr',
        name_tag='Chr',
        startone=0,
        stopone=1,
        starttwo=0,
        stoptwo=1
):
    return html.Div(
        [
            html.Div(className='app-controls-block', children=[
                html.Div(className='app-controls-name', children='%s Start-one' % name_tag),
                dcc.Input(
                    id='%s-startone' % id_tag,
                    placeholder='%s StartOne',
                    type='number',
                    value=startone,
                    className='ideogram-homology-inputs',
                )
            ]),
            html.Div(className='app-controls-block', children=[
                html.Div(className='app-controls-name', children='%s Stop-one' % name_tag),
                dcc.Input(
                    id='%s-stopone' % id_tag,
                    placeholder='Enter chromosomes',
                    type='number',
                    value=stopone,
                    className='ideogram-homology-inputs',
                )
            ]),
            html.Div(className='app-controls-block', children=[
                html.Div(className='app-controls-name', children='%s Start-two' % name_tag),
                dcc.Input(
                    id='%s-starttwo' % id_tag,
                    placeholder='%s Starttwo' % name_tag,
                    type='number',
                    value=starttwo,
                    className='ideogram-homology-inputs',
                )
            ]),
            html.Div(className='app-controls-block', children=[
                html.Div(className='app-controls-name', children='%s Stop-two' % name_tag),
                dcc.Input(
                    id='%s-stoptwo' % id_tag,
                    placeholder='Enter chromsomes',
                    type='number',
                    value=stoptwo,
                    className='ideogram-homology-inputs',
                )
            ])
        ]
    )


options = {
    'custom': [
        html.H4('Organism'),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Species'),
            dcc.Dropdown(
                className='ideogram-dropdown',
                id='organism-change',
                options=[
                    {
                        'label': 'Human',
                        'value': 'human',
                    },
                    {
                        'label': 'Drosophila-Melanogaster',
                        'value': 'drosophila-melanogaster',
                    },
                    {
                        'label': 'Zea-mays',
                        'value': 'zea-mays',
                    },
                    {
                        'label': 'Pan-troglodytes',
                        'value': 'pan-troglodytes',
                    },
                    {
                        'label': 'Macaca-fascicularis',
                        'value': 'macaca-fascicularis',
                    },
                ],
                value='human',
            )
        ]),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Sex'),
            daq.ToggleSwitch(
                id='sex-switch',
                color='#230047',
                label=['m', 'f'],
                size=35,
                labelPosition='bottom',
                value=True
            )
        ]),
        html.Div(id='ideogram-resolution-option', children=[
            html.Div(className='app-controls-block', children=[
                html.Div(className='app-controls-name', children='Resolution'),
                dcc.Dropdown(
                    className='ideogram-dropdown',
                    id='resolution-select',
                    options=[
                        {
                            'label': '550 bphs',
                            'value': 550,
                        },
                        {
                            'label': '650 bphs',
                            'value': 850,
                        },
                        {
                            'label': 'Off',
                            'value': 1,
                        },
                    ],
                    value=1,
                )
            ])
        ]),

        html.Hr(),

        html.H4('Labels'),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Band'),
            daq.ToggleSwitch(
                id='bandlabel-switch',
                color='#230047',
                label=['off', 'on'],
                size=35,
                labelPosition='bottom',
                value=True
            )
        ]),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Chromosome'),
            daq.ToggleSwitch(
                id='chromlabel-switch',
                color='#230047',
                label=['off', 'on'],
                size=35,
                labelPosition='bottom',
                value=True
            )
        ]),

        html.Hr(),

        html.H4('Chromosome display'),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Orientation'),
            dcc.Dropdown(
                className='ideogram-dropdown',
                id='orientation-switch',
                options=[
                    {
                        'label': 'Vertical',
                        'value': 'vertical',
                    },
                    {
                        'label': 'Horizontal',
                        'value': 'horizontal',
                    },
                ],
                value='horizontal',
            )
        ]),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Rotatable'),
            daq.ToggleSwitch(
                id='rotatable-switch',
                color='#230047',
                label=['off', 'on'],
                size=35,
                labelPosition='bottom',
                value=True
            )
        ]),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Margin'),
            dcc.Slider(
                id='chr-margin-input',
                className='ideogram-slider',
                value=10
            ),
            html.Div(className='app-controls-name', children='Height'),
            dcc.Slider(
                id='chr-height-input',
                className='ideogram-slider',
                min=100, max=700,
                value=300
            ),
            html.Div(className='app-controls-name', children='Width'),
            dcc.Slider(
                id='chr-width-input',
                className='ideogram-slider',
                min=5, max=30,
                value=8
            )
        ]),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Fully banded'),
            daq.ToggleSwitch(
                id='fullband-switch',
                color='#230047',
                label=['off', 'on'],
                size=35,
                labelPosition='bottom',
                value=True
            )
        ])
    ],

    'homology': [
        html.Div(className='app-controls-name', children='Chromosomes:'),
        dcc.Dropdown(
            className='ideogram-dropdown',
            id='chr-select-1',
            options=[
                {'label': str(i), 'value': str(i)}
                for i in range(1, 22)] +
            [{'label': 'X', 'value': 'X'},
             {'label': 'Y', 'value': 'Y'}],
            value='1'
        ),
        dcc.Dropdown(
            className='ideogram-dropdown',
            id='chr-select-2',
            value='2'
        ),
        chromosome_div(
            id_tag='chrone',
            name_tag='Chr 1',
            startone=50000,
            stopone=900000,
            starttwo=155701383,
            stoptwo=156030895,
        ),
        chromosome_div(
            id_tag='chrtwo',
            name_tag='Chr 2',
            startone=10001,
            stopone=2781479,
            starttwo=56887903,
            stoptwo=57217415,
        ),
    ],

    'brush': [
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', id='brush-control-name',
                     children='Chromosome:'),
            dcc.Dropdown(
                className='ideogram-dropdown',
                id='chr-brush',
                options=[
                    {'label': str(i), 'value': str(i)}
                    for i in range(1, 22)] +
                [{'label': 'X', 'value': 'X'},
                 {'lahel': 'Y', 'value': 'Y'}],
                value='X'
            )
        ]),
        html.Hr(),
        html.Div(
            id='brush-data',
            children=[
                html.H4('Brush data'),
                'Start: ',
                html.Span(
                    '',
                    id='brush-print-start',
                    style={'color': '#0D76BF'},
                ),
                html.Br(),
                'Extent: ',
                html.Span(
                    '',
                    id='brush-print-extent',
                    style={'color': '#0D76BF'},
                ),
                html.Br(),
                'End: ',
                html.Span(
                    '',
                    id='brush-print-end',
                    style={'color': '#0D76BF'},
                ),
            ],
            className='ideogram-databox-parameters',
        )
    ],

    'annotations': [
        html.H4('Hover data'),
        html.Div(
            children=[
                html.Span(
                    'None',
                    id='annote-data',
                    style={
                        'color': '#0D76BF'},
                )
            ],
            className='ideogram-databox-parameters',
        ),
        html.Hr(),
        html.H4('Appearance'),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Type:'),
            dcc.Dropdown(
                className='ideogram-dropdown',
                id='annotation-select',
                options=[
                    {
                        'label': 'Histogram',
                        'value': 'histogram',
                    },
                    {
                        'label': 'Overlay-1',
                        'value': 'overlay-1',
                    },
                    {
                        'label': 'Overlay-2',
                        'value': 'overlay-2',
                    },
                ],
                value='histogram',
            )
        ]),
        html.Div(id='ideogram-histo-options', children=[
            html.Div(className='app-controls-block', children=[
                html.Div(className='app-controls-name', children='Color:'),
                dcc.Input(
                    id='color-input',
                    className='ideogram-annot-inputs',
                    placeholder='Annotation Color',
                    type='text',
                    value='#FF0000'
                )
            ]),
            html.Div(className='app-controls-block', children=[
                html.Div(className='app-controls-name', children='Bar width:'),
                dcc.Slider(
                    id='bar-input',
                    className='ideogram-slider',
                    value=3,
                    min=1,
                    max=10
                )
            ])
        ]),

        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Height:'),
            dcc.Slider(
                id='height-input',
                min=1,
                max=10,
                value=3,
                className='ideogram-slider'
            )
        ]),
        html.Div(className='app-controls-block', children=[
            html.Div(className='app-controls-name', children='Orientation:'),
            dcc.Dropdown(
                className='ideogram-dropdown',
                id='orientation-anote',
                options=[
                    {
                        'label': 'Vertical',
                        'value': 'vertical',
                    },
                    {
                        'label': 'Horizontal',
                        'value': 'horizontal',
                    },
                ],
                value='horizontal',
            )
        ])
    ]
}

ideograms_initial = {
    'custom': dict(
        id='ideo-custom',
        dataDir='https://unpkg.com/ideogram@1.3.0/'
        'dist/data/bands/native/',
        orientation='horizontal',
        organism='human',
        chrHeight=300,
        chrMargin=10,
        chrWidth=8,
        rotatable=True,
    ),

    'homology': dict(
        id='ideo-homology',
        showBandLabels=True,
        showChromosomeLabels=True,
        showFullyBanded=True,
        fullChromosomeLabels=True,
        chrHeight=400,
        chrMargin=200,
        rotatable=False,
        perspective='comparative',
    ),
    'brush': dict(
        id='brush-ideo',
        dataDir='https://unpkg.com/ideogram@1.3.0/'
        'dist/data/bands/native/',
        organism='human',
        chromosomes=['1'],
        brush='chr1:1-10000000',
        chrHeight=900,
        resolution=550,
        orientation='horizontal',
    ),
    'annotations': dict(
        id='ideo-annotations',
        dataDir='https://unpkg.com/ideogram@1.3.0/'
        'dist/data/bands/native/',
        organism='human',
        assembly='GRCh37',
        orientation='horizontal',
        showBandLabels=True,
        chrHeight=275,
        chrMargin=28,
        rotatable=True,
        filterable=True,
        className='ideogram-custom',
    )
}


def layout():
    return html.Div(id='ideogram-body', className='app-body', children=[
        dcc.Loading(className='dashbio-loading', children=html.Div(id='ideogram-container')),
        html.Div(className='control-tabs', children=[
            dcc.Tabs(id='ideogram-control-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='control-tab', children=[
                        html.H4(className='what-is', children='What is Ideogram?'),
                        html.P('Ideogram is a tool used to schematically '
                               'represent chromosomes. Bands on the chromosomes '
                               'can show the locations of specific genes.'),
                        html.P('In the "View" tab, you can choose to interact '
                               'with several different features of the Ideogram '
                               'component. You can customize the appearance of '
                               'the ideogram, as well as choose a different '
                               'organism to display, under the "Custom" option. '
                               'The homology, brush, and annotation features '
                               'are demonstrated under the corresponding options.')
                    ])
                ),
                dcc.Tab(
                    label='View',
                    value='view',
                    children=html.Div(className='control-tab', children=[
                        html.Div(id='ideogram-feature-select', children=[
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='View feature:'
                                ),
                                dcc.Dropdown(
                                    className='ideogram-dropdown',
                                    id='ideogram-feature-dropdown',
                                    options=[
                                        {'label': 'Customizability', 'value': 'custom'},
                                        {'label': 'Homology', 'value': 'homology'},
                                        {'label': 'Brush', 'value': 'brush'},
                                        {'label': 'Annotations', 'value': 'annotations'}
                                    ],
                                    clearable=False,
                                    value='custom'
                                )
                            ]),
                        ]),
                        html.Hr(),
                        html.Div(
                            id='ideogram-feature-view-options'
                        )
                    ])
                )
            ])
        ]),
        dcc.Store(id='ideo-custom-data', data=ideograms_initial['custom']),
        dcc.Store(id='ideo-homology-data', data=ideograms_initial['homology']),
        dcc.Store(id='brush-ideo-data', data=ideograms_initial['brush']),
        dcc.Store(id='ideo-annotations-data', data=ideograms_initial['annotations'])
    ])


def callbacks(_app):

    @_app.callback(
        Output('ideogram-feature-view-options', 'children'),
        [Input('ideogram-feature-dropdown', 'value')]
    )
    def show_options(feature):
        return options[feature]

    @_app.callback(
        Output('ideogram-container', 'children'),
        [Input('ideo-custom-data', 'data'),
         Input('ideo-homology-data', 'data'),
         Input('brush-ideo-data', 'data'),
         Input('ideo-annotations-data', 'data')],
        state=[State('ideogram-feature-dropdown', 'value')]
    )
    def update_ideogram(
            ideo_custom,
            ideo_homology,
            brush_ideo,
            ideo_annotations,
            selected_ideo
    ):
        ideograms = {
            'custom': ideo_custom,
            'homology': ideo_homology,
            'brush': brush_ideo,
            'annotations': ideo_annotations
        }

        return dash_bio.Ideogram(**ideograms[selected_ideo])

    @_app.callback(
        Output('ideogram-resolution-option', 'style'),
        [Input('organism-change', 'value')]
    )
    def show_hide_resolution(organism):
        return {'display': 'none' if organism != 'human' else 'block'}

    @_app.callback(
        Output('ideogram-histo-options', 'style'),
        [Input('annotation-select', 'value')]
    )
    def show_hide_histo_options(annot_type):
        return {'display': 'none' if annot_type != 'histogram' else 'block'}

    # Custom callbacks
    @_app.callback(
        Output('ideo-custom-data', 'data'),
        [Input('organism-change', 'value'),
         Input('bandlabel-switch', 'value'),
         Input('chromlabel-switch', 'value'),
         Input('orientation-switch', 'value'),
         Input('chr-width-input', 'value'),
         Input('chr-height-input', 'value'),
         Input('chr-margin-input', 'value'),
         Input('rotatable-switch', 'value'),
         Input('resolution-select', 'value'),
         Input('sex-switch', 'value'),
         Input('fullband-switch', 'value')],
        state=[State('ideo-custom-data', 'data')]
    )
    def change_custom_ideogram(
            organism_sel,
            show_band_labels,
            show_chromosome_labels,
            orientation_value,
            chr_width,
            chr_height,
            chr_margin,
            rotatable_value,
            resolution_value,
            sex_value,
            show_banded,
            current):
        if current is None:
            current = ideograms_initial['custom']
        current.update(
            organism=organism_sel,
            showBandLabels=show_band_labels,
            showChromosomeLabels=show_chromosome_labels,
            orientation=orientation_value,
            chrWidth=chr_width,
            chrHeight=chr_height,
            chrMargin=chr_margin,
            rotatable=rotatable_value,
            resolution=resolution_value if resolution_value != 1 else None,
            sex='female' if sex_value else 'male',
            showFullyBanded=show_banded
        )
        return current

    @_app.callback(
        Output('chr-select-2', 'options'),
        [Input('chr-select-1', 'value')],
        state=[State('chr-select-1', 'options')]
    )
    def update_homology_options(chr_1, all_chromosomes):
        return [option for option in all_chromosomes
                if option['label'] != chr_1]

    @_app.callback(
        Output('ideo-homology-data', 'data'),
        [Input('chr-select-1', 'value'),
         Input('chr-select-2', 'value'),
         Input('chrone-startone', 'value'),
         Input('chrone-stopone', 'value'),
         Input('chrone-starttwo', 'value'),
         Input('chrone-stoptwo', 'value'),
         Input('chrtwo-startone', 'value'),
         Input('chrtwo-stopone', 'value'),
         Input('chrtwo-starttwo', 'value'),
         Input('chrtwo-stoptwo', 'value')],
        state=[State('ideo-homology-data', 'data')]
    )
    def change_homology_ideogram(
            chr_selected_1,
            chr_selected_2,
            start_one,
            stop_one,
            start_two,
            stop_two,
            start_one_a,
            stop_one_a,
            start_two_a,
            stop_two_a,
            current
    ):
        if current is None:
            current = ideograms_initial['homology']
        current.update(
            chromosomes=[chr_selected_1, chr_selected_2],
            homology={
                'chrOne': {
                    'organism': '9606',
                    'start': [start_one, start_two],
                    'stop': [stop_one, stop_two]
                },
                'chrTwo': {
                    'organism': '9606',
                    'start': [start_one_a, start_two_a],
                    'stop': [stop_one_a, stop_two_a]
                }
            }
        )

        return current

    @_app.callback(
        Output('brush-ideo-data', 'data'),
        [Input('chr-brush', 'value')],
        state=[State('brush-ideo-data', 'data')]
    )
    def change_brush_ideogram(brush_value, current):
        if current is None:
            current = ideograms_initial['brush']
        if brush_value is None:
            brush_value = '1'
        current.update(
            chromosomes=[str(brush_value)],
            brush='chr{}:1-10000000'.format(brush_value)
        )
        return current

    @_app.callback(
        Output('ideo-annotations-data', 'data'),
        [Input('annotation-select', 'value'),
         Input('bar-input', 'value'),
         Input('orientation-anote', 'value'),
         Input('color-input', 'value'),
         Input('height-input', 'value')],
        state=[State('ideo-annotations-data', 'data')]
    )
    def change_annotation_ideogram(
            annotation_select,
            bar_input,
            orientation_input,
            color_input,
            height_input,
            current
    ):
        if current is None:
            current = ideograms_initial['annotations']

        annotations_layout = ''
        annotations_path = None
        annotations_assembly = None
        annotation_tracks = None
        annotation_height = height_input

        if annotation_select == 'overlay-1':
            annotations_layout = 'overlay'
            annotations_path = 'https://eweitz.github.io/' + \
                'ideogram/data/annotations/10_virtual_cnvs.json'

        elif annotation_select == 'histogram':
            annotations_path = 'https://eweitz.github.io/' + \
                'ideogram/data/annotations/SRR562646.json'
            annotations_assembly = 'GRCh37'

        elif annotation_select == 'overlay-2':
            annotations_path = 'https://eweitz.github.io/' + \
                'ideogram/data/annotations/1000_virtual_snvs.json'

            annotation_tracks = [
                {
                    'id': 'pathogenicTrack',
                    'displayName': 'Pathogenic',
                    'color': '#F00',
                    'shape': 'triangle',
                },
                {
                    'id': 'uncertainSignificanceTrack',
                    'displayName': 'Uncertain significance',
                    'color': '#CCC',
                    'shape': 'triangle',
                },
                {
                    'id': 'benignTrack',
                    'displayName': 'Benign',
                    'color': '#8D4',
                    'shape': 'triangle',
                },
            ]

        current.update(
            annotationsLayout=annotations_layout,
            barWidth=bar_input,
            annotationsPath=annotations_path,
            assembly=annotations_assembly,
            annotationTracks=annotation_tracks,
            annotationHeight=annotation_height,
            annotationsColor=color_input,
            orientation=orientation_input
        )

        return current

    @_app.callback(
        Output('brush-print-start', 'children'),
        [Input('brush-ideo', 'brushData')]
    )
    def brush_data_start(brush_data):
        answer = None
        if brush_data is not None:
            answer = brush_data['start']
        return answer

    @_app.callback(
        Output('brush-print-end', 'children'),
        [Input('brush-ideo', 'brushData')]
    )
    def brush_data_end(brush_data):
        answer = None
        if brush_data is not None:
            answer = brush_data['end']
        return answer

    @_app.callback(
        Output('brush-print-extent', 'children'),
        [Input('brush-ideo', 'brushData')]
    )
    def brush_data_extent(brush_data):
        answer = None
        if brush_data is not None:
            answer = brush_data['extent']
        return answer

    # Event Call Annotation
    @_app.callback(
        Output('annote-data', 'children'),
        [Input('ideo-annotations', 'annotationsData')],
    )
    def annote_data(data):
        if data is None:
            data = 'None'
        data = data.replace('<br>', ' ')
        return data


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
