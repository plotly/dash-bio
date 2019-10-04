import os

from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate
import dash_html_components as html
import dash_core_components as dcc
import dash_daq as daq
import dash_bio

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


def header_colors():
    return {
        'bg_color': '#85002D',
        'font_color': 'white'
    }


initial_sequences = [
    {'sequence': 'GGUGCAUGCCGAGGGGCGGUUGGCCUCGUAAAAAGCCGCAAAAAAUAGCAUGUAGUACC',
     'structure': '((((((((((((((.[[[[[[..))))).....]]]]]]........)))))...))))',
     'options': {
         'applyForce': True,
         'circularizeExternal': True,
         'avoidOthers': True,
         'labelInterval': 5
     }}
]


def description():
    return 'RNA secondary structure analysis.'


def layout():
    return html.Div(
        id='forna-body',
        className='app-body',
        children=[
            html.Div(
                id='forna-control-tabs',
                className='control-tabs',
                children=[
                    dcc.Tabs(id='forna-tabs', value='what-is', children=[
                        dcc.Tab(
                            label='About',
                            value='what-is',
                            children=html.Div(className='control-tab', children=[
                                html.H4(className='what-is', children='What is FornaContainer?'),
                                html.P('FornaContainer is an awesome new component.')
                            ])
                        ),

                        dcc.Tab(
                            label='Add Sequence',
                            value='add-sequence',
                            children=html.Div(className='control-tab', children=[
                                html.Div(
                                    title='Enter a dot-bracket string and a nucleotide sequence.',
                                    className='app-controls-block',
                                    children=[
                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='Sequence'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify the nucleotide sequence as a string.'
                                                 ),
                                        dcc.Input(
                                            id='forna-sequence',
                                            value='GGUGCAUGCCGAGGGGCGGUUGGCCUCGUA\
                                            AAAAGCCGCAAAAAAUAGCAUGUAGUACC'
                                        ),

                                        html.Br(),
                                        html.Br(),

                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='Structure'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify the RNA secondary structure '
                                            'with a dot-bracket string.'
                                        ),
                                        dcc.Input(
                                            id='forna-structure',
                                            value='((((((((((((((.[[[[[[..))))).....]]]]]]'
                                            '........)))))...))))'
                                        ),

                                        html.Br(),
                                        html.Br(),

                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='ID'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify a unique ID for this sequence.'
                                        ),
                                        dcc.Input(id='forna-id', value='example')

                                             ]
                                ),

                                html.Div(
                                    title='Change some boolean properties.',
                                    className='app-controls-block',
                                    children=[
                                        html.Div(className='app-controls-name',
                                                 children='Apply force'),
                                        daq.BooleanSwitch(
                                            id='forna-apply-force',
                                            on=True,
                                            color='#85002D'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Indicate whether the force-directed layout ' +
                                            'will be applied to this molecule.'
                                        ),
                                        html.Br(),
                                        html.Div(className='app-controls-name',
                                                 children='Circularize external'),
                                        daq.BooleanSwitch(
                                            id='forna-circularize-external',
                                            on=True,
                                            color='#85002D'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Indicate whether the external loops ' +
                                            'should be forced to be arranged in a circle.'
                                        ),
                                        html.Br(),
                                        html.Div(className='app-controls-name',
                                                 children='Avoid others'),
                                        daq.BooleanSwitch(
                                            id='forna-avoid-others',
                                            on=True,
                                            color='#85002D'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Indicate whether this molecule should ' +
                                            '"avoid" being close to other molecules.'
                                        ),
                                        html.Br(),
                                        html.Div(className='app-controls-name',
                                                 children='Label interval'),
                                        dcc.Slider(
                                            id='forna-label-interval',
                                            min=1,
                                            max=10,
                                            value=5,
                                            marks={i+1: str(i+1) for i in range(10)}
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Indicate how often nucleotide numbers ' +
                                            'are labelled with their number.'
                                        )

                                    ]
                                ),

                                html.Hr(),
                                html.Div(id='forna-error-message'),
                                html.Button(id='forna-submit-sequence', children='Submit sequence'),
                            ])
                        ),
                        dcc.Tab(
                            label='Sequences',
                            value='show-sequences',
                            children=html.Div(className='control-tab', children=[
                                html.Div(
                                    className='app-controls-block',
                                    children=[
                                        html.Div(
                                            className='fullwidth-app-controls-name',
                                            children='Sequences to display'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Choose the sequences to display by ID.'
                                        ),
                                        html.Br(),
                                        dcc.Dropdown(
                                            id='forna-sequences-display',
                                            multi=True,
                                            clearable=True,
                                            value='example'
                                        )
                                    ]
                                ),
                                html.Hr(),
                                html.Div(
                                    className='app-controls-block',
                                    children=[
                                        html.Div(
                                            className='app-controls-name',
                                            children='Color scheme'
                                        ),
                                        dcc.Dropdown(
                                            id='forna-color-scheme',
                                            options=[
                                                {'label': color_scheme,
                                                 'value': color_scheme}
                                                for color_scheme in [
                                                        'sequence', 'structure', 'positions'
                                                ]
                                            ],
                                            value='sequence'
                                        ),
                                        html.Br(),
                                        html.Div(
                                            className='app-controls-desc',
                                            id='forna-color-scheme-desc',
                                            children='Choose the color scheme to use.'
                                        ),
                                    ]
                                ),
                                html.Hr(),
                                html.Div(
                                    className='app-controls-block',
                                    children=[
                                        html.Div(
                                            className='fullwidth-app-controls-name',
                                            children='Sequence information by ID'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Search for a sequence by ID ' +
                                            'to get more information.'
                                        ),
                                        html.Br(),
                                        dcc.Dropdown(
                                            id='forna-sequences-info-search',
                                            clearable=True
                                        ),
                                        html.Br(),
                                        html.Div(id='forna-sequence-info')
                                    ]
                                ),
                            ])
                        )
                    ])
                ]
            ),
            html.Div(id='forna-container', children=[
                dash_bio.FornaContainer(
                    id='forna',
                    height=700,
                    width=500,
                    sequences=initial_sequences
                )
            ]),

            dcc.Store(id='forna-sequences')
        ]
    )


def callbacks(app):  # pylint: disable=redefined-outer-name

    @app.callback(
        [Output('forna-sequences', 'data'),
         Output('forna-error-message', 'children')],
        [Input('forna-submit-sequence', 'n_clicks')],
        [State('forna-sequence', 'value'),
         State('forna-structure', 'value'),
         State('forna-apply-force', 'on'),
         State('forna-circularize-external', 'on'),
         State('forna-avoid-others', 'on'),
         State('forna-label-interval', 'value'),
         State('forna-id', 'value'),
         State('forna-sequences', 'data')]
    )
    def add_sequence(nclicks, sequence, structure, apply_force,
                     circularize_ext, avoid_others, label_interval,
                     seqid, current):

        error_msg = html.P(
            'You already have a sequence with this ID. ' +
            'Please choose a different ID, or check the next tab ' +
            'to see which IDs have already been taken.',
            style={'color': 'red'}
        )

        if sequence is None or structure is None:
            raise PreventUpdate

        if current is None:
            current = {}

        if seqid not in current.keys():
            error_msg = html.P(
                'Successfully added {}!'.format(seqid),
                style={'color': 'green'}
            )
            current[seqid] = {
                'sequence': sequence,
                'structure': structure,
                'options': {
                    'applyForce': apply_force,
                    'circularizeExternal': circularize_ext,
                    'avoidOthers': avoid_others,
                    'labelInterval': label_interval
                }
            }

        return current, error_msg

    @app.callback(
        Output('forna', 'colorScheme'),
        [Input('forna-color-scheme', 'value')]
    )
    def update_color_scheme(color_scheme):
        return color_scheme

    @app.callback(
        [Output('forna-sequences-display', 'options'),
         Output('forna-sequences-info-search', 'options')],
        [Input('forna-sequences', 'data')]
    )
    def update_sequences(data):

        if data is None:
            raise PreventUpdate

        new_options = [
            {'label': sequence_id,
             'value': sequence_id}
            for sequence_id in data.keys()
        ]

        return new_options, new_options

    @app.callback(
        Output('forna-sequence-info', 'children'),
        [Input('forna-sequences-info-search', 'value')],
        [State('forna-sequences', 'data')]
    )
    def update_sequence_info(sequence_id, data):
        if data is None:
            raise PreventUpdate

        return html.Div(
            [
                'Sequence: {}'.format(data[sequence_id]['sequence']),
                html.Br(),
                'Structure: {}'.format(data[sequence_id]['structure'])
            ] + [
                html.Div([
                    '{}: {}'.format(
                        option, data[sequence_id]['options'][option]
                    ),
                    html.Br()
                ])
                for option in data[sequence_id]['options'].keys()
            ]
        )

    @app.callback(
        Output('forna', 'sequences'),
        [Input('forna-sequences-display', 'value')],
        [State('forna-sequences', 'data')]
    )
    def update_shown_sequences(selected_sequence_ids, stored_sequences):

        if selected_sequence_ids is None or stored_sequences is None:
            raise PreventUpdate

        sequences = []

        for sequence_id in selected_sequence_ids:
            sequences.append(
                stored_sequences[sequence_id]
            )

        return sequences


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
