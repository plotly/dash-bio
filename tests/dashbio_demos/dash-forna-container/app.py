import os

from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate
import dash_html_components as html
import dash_core_components as dcc
import dash_daq as daq
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


def header_colors():
    return {
        'bg_color': '#85002D',
        'font_color': 'white'
    }


initial_sequences = {
    'PDB_01019': {
        'sequence': 'AUGGGCCCGGGCCCAAUGGGCCCGGGCCCA',
        'structure': '.((((((())))))).((((((()))))))',
        'options': {
            'applyForce': True,
            'circularizeExternal': True,
            'avoidOthers': True,
            'labelInterval': 5,
            'name': 'PDB_01019'
        }
    }
}


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
                                dcc.Markdown('''
                                FornaContainer is a force-directed graph that is
                                used to represent the secondary structure of nucleic
                                acids (i.e., DNA and RNA).

                                In the "Add New" tab, you can enter a sequence
                                by specifying the nucleotide sequence and the
                                dot-bracket representation of the secondary
                                structure.

                                In the "Sequences" tab, you can select which
                                sequences will be displayed, as well as obtain
                                information about the sequences that you have
                                already created.

                                In the "Colors" tab, you can choose to color each
                                nucleotide according to its base, the structural
                                feature to which it belongs, or its position in
                                the sequence; you can also specify a custom color
                                scheme.

                                The example RNA molecule shown has ID
                                [PDB_01019](http://www.rnasoft.ca/strand/show_results.php?molecule_ID=PDB_01019)
                                 on the [RNA Strand](http://www.rnasoft.ca/strand/) database.
                                ''')
                            ])
                        ),

                        dcc.Tab(
                            label='Add New',
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
                                            placeholder=initial_sequences['PDB_01019']['sequence']
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
                                            placeholder=initial_sequences['PDB_01019']['structure']
                                        ),

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
                                            children='Indicate how often nucleotides are ' +
                                            'labelled with their number.'
                                        )

                                    ]
                                ),

                                html.Div(
                                    className='app-controls-block',
                                    children=[
                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='ID'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify a unique ID for this sequence.'
                                        ),
                                        dcc.Input(id='forna-id', placeholder='PDB_01019')
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
                                            value=['PDB_01019']
                                        )
                                    ]
                                ),
                                html.Hr(),
                                html.Div(
                                    className='app-controls-block',
                                    children=[
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
                                        )
                                    ]
                                )
                            ])
                        ),
                        dcc.Tab(
                            label='Colors',
                            value='colors',
                            children=html.Div(className='control-tab', children=[
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
                                            'sequence', 'structure', 'positions', 'custom'
                                        ]
                                    ],
                                    value='sequence',
                                    clearable=False
                                ),
                                html.Div(
                                    className='app-controls-desc',
                                    id='forna-color-scheme-desc',
                                    children='Choose the color scheme to use.'
                                ),
                                html.Div(
                                    id='forna-custom-colorscheme',
                                    className='app-controls-block',
                                    children=[
                                        html.Hr(),
                                        html.Div(
                                            className='app-controls-name',
                                            children='Molecule name'
                                        ),
                                        dcc.Dropdown(
                                            id='forna-custom-colors-molecule'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Select the sequence to which the custom ' +
                                            'color scheme will be applied. If none is selected, ' +
                                            'the color scheme will be applied to all molecules.'
                                        ),
                                        html.Br(),
                                        html.Div(
                                            className='app-controls-name',
                                            children='Coloring range'
                                        ),
                                        daq.ColorPicker(
                                            id='forna-color-low',
                                            label='Low',
                                            labelPosition='top',
                                            value={'hex': '#BE0000'}
                                        ),
                                        daq.ColorPicker(
                                            id='forna-color-high',
                                            label='High',
                                            labelPosition='top',
                                            value={'hex': '#336AFF'}
                                        ),
                                        html.Div(
                                            className='fullwidth-app-controls-name',
                                            children='Coloring domain'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify a minimum and maximum value ' +
                                            'which will be used to calculate intermediate ' +
                                            'colors for nucleotides that have a numerical ' +
                                            'value specified below.'
                                        ),
                                        html.Br(),
                                        dcc.Input(
                                            id='forna-color-domain-low',
                                            type='number',
                                            value=1
                                        ),
                                        dcc.Input(
                                            id='forna-color-domain-high',
                                            type='number',
                                            value=100
                                        ),
                                        html.Br(),
                                        html.Br(),
                                        html.Div(
                                            className='fullwidth-app-controls-name',
                                            children='Colors map'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify the colors for each ' +
                                            'nucleotide by entering the position of ' +
                                            'the nucleotide into the left input box, ' +
                                            'and either a) a string representation ' +
                                            'of a color or b) a number within the ' +
                                            'range specified above. Then, press the ' +
                                            '"Submit" button,'
                                        ),
                                        html.Br(),
                                        dcc.Input(
                                            id='forna-color-map-nucleotide',
                                            type='number',
                                            min=1,
                                            placeholder=1
                                        ),
                                        dcc.Input(
                                            id='forna-color-map-color',
                                            placeholder='green'
                                        ),
                                        html.Br(),
                                        html.Br(),
                                        html.Button(
                                            id='forna-submit-custom-colors',
                                            children='Submit'
                                        )
                                    ]
                                )
                            ])
                        )
                    ])
                ]),
            html.Div(id='forna-container', children=[
                dash_bio.FornaContainer(
                    id='forna',
                    height=500,
                    width=500
                )
            ]),

            dcc.Store(id='forna-sequences', data=initial_sequences),
            dcc.Store(id='forna-custom-colors')
        ]
    )


def callbacks(_app):

    @_app.callback(
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

        if nclicks is None or nclicks == 0:
            raise PreventUpdate

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
                    'labelInterval': label_interval,
                    'name': seqid
                }
            }

        return current, error_msg

    @_app.callback(
        Output('forna', 'colorScheme'),
        [Input('forna-color-scheme', 'value')]
    )
    def update_color_scheme(color_scheme):
        return color_scheme

    @_app.callback(
        Output('forna-custom-colorscheme', 'style'),
        [Input('forna-color-scheme', 'value')]
    )
    def show_hide_custom_colorscheme(color_scheme):
        return {'display': 'block' if color_scheme == 'custom' else 'none'}

    @_app.callback(
        Output('forna', 'customColors'),
        [Input('forna-custom-colors', 'data')]
    )
    def update_custom_colors(data):
        if data is None:
            raise PreventUpdate
        return data

    @_app.callback(
        Output('forna-custom-colors', 'data'),
        [Input('forna-submit-custom-colors', 'n_clicks'),
         Input('forna-color-low', 'value'),
         Input('forna-color-high', 'value')],
        [State('forna-color-domain-low', 'value'),
         State('forna-color-domain-high', 'value'),
         State('forna-color-map-nucleotide', 'value'),
         State('forna-color-map-color', 'value'),
         State('forna-custom-colors-molecule', 'value'),
         State('forna-custom-colors', 'data')]
    )
    def update_custom_colors_storage(nclicks, color_low, color_high,
                                     color_domain_low, color_domain_high,
                                     color_map_index, color_map_color,
                                     seq_id, current):
        if nclicks is None or nclicks == 0:
            raise PreventUpdate
        if color_low is None or color_high is None:
            raise PreventUpdate
        if color_domain_low is None or color_domain_high is None:
            raise PreventUpdate

        if color_map_index is None or color_map_color is None:
            raise PreventUpdate

        if seq_id is None:
            seq_id = ''

        try:
            color = float(color_map_color)
        except ValueError:
            color = color_map_color

        if current is None:
            current = {'domain': [], 'range': [], 'colorValues': {}}

        current['domain'] = [color_domain_low, color_domain_high]
        current['range'] = [color_low['hex'], color_high['hex']]

        if current['colorValues'].get(seq_id) is None:
            current['colorValues'][seq_id] = {}

        current['colorValues'][seq_id].update({color_map_index: color})

        return current

    @_app.callback(
        [Output('forna-sequences-display', 'options'),
         Output('forna-sequences-info-search', 'options'),
         Output('forna-custom-colors-molecule', 'options')],
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

        return new_options, new_options, new_options

    @_app.callback(
        Output('forna-sequence-info', 'children'),
        [Input('forna-sequences-info-search', 'value')],
        [State('forna-sequences', 'data')]
    )
    def update_sequence_info(sequence_id, data):
        if data is None or sequence_id is None:
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

    @_app.callback(
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
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
