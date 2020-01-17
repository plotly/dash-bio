import os
import base64

from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
from dash_bio_utils.xyz_reader import read_xyz
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')


default_sliders = [
    html.Div(className='app-controls-block', children=[
        html.Div(
            "Atom radius",
            className='app-controls-name'
        ),
        dcc.Slider(
            id='speck-atom-radius',
            className='control-slider',
            max=1,
            step=0.01,
            value=0.6,
            updatemode='drag'
        ),
    ]),
    html.Div(className='app-controls-block', children=[
        html.Div(
            "Relative atom radius",
            className='app-controls-name'
        ),
        dcc.Slider(
            id='speck-relative-atom-radius',
            className='control-slider',
            max=1,
            step=0.01,
            value=1.0,
            updatemode='drag'
        ),
    ]),
    html.Div(className='app-controls-block', children=[
        html.Div(
            "Ambient occlusion",
            className='app-controls-name'
        ),
        dcc.Slider(
            id='speck-ao',
            className='control-slider',
            max=1,
            step=0.01,
            value=0.75
        ),
    ]),
    html.Div(className='app-controls-block', children=[
        html.Div(
            "Brightness",
            className='app-controls-name'
        ),
        dcc.Slider(
            id='speck-brightness',
            className='control-slider',
            max=1,
            step=0.01,
            value=0.5,
            updatemode='drag'
        )
    ]),
    html.Div(className='app-controls-block', children=[
        html.Div(
            "Outline",
            className='app-controls-name'
        ),
        dcc.Slider(
            id='speck-outline',
            className='control-slider',
            max=1,
            step=0.01,
            value=0.0,
            updatemode='drag'
        ),
    ]),
    html.Hr(),
    dcc.Checklist(
        id='speck-show-hide-bonds',
        options=[
            {'label': 'Show bonds',
             'value': 'True'}
        ],
        value=[]
    ),
    html.Div(className='app-controls-block', children=[
        html.Div(
            'Bond scale',
            className='app-controls-name'
        ),
        dcc.Slider(
            id='speck-bond-scale',
            className='control-slider',
            max=1,
            step=0.01,
            value=0.5,
            updatemode='drag'
        )
    ])

]


def header_colors():
    return {
        'bg_color': '#5673FA',
        'font_color': 'white'
    }


def description():
    return 'View molecules beautifully with this WebGL renderer.'


def layout():

    return html.Div(id='speck-body', className='app-body', children=[

        dcc.Loading(className='dashbio-loading', children=html.Div(
            id='speck-container',
            children=[
                dash_bio.Speck(
                    id='speck',
                    view={'resolution': 600, 'zoom': 0.3},
                    scrollZoom=True
                )
            ]
        )),

        html.Div(id='speck-control-tabs', className='control-tabs', children=[
            dcc.Tabs(id='speck-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='control-tab', children=[
                        html.H4(className='what-is', children='What is Speck?'),
                        html.P('Speck is a WebGL-based molecule renderer. By '
                               'using ambient occlusion, the resolution of '
                               'the rendering does not suffer as you zoom in.'),
                        html.P('You can toggle between molecules using the menu under the '
                               '"Data" tab, and control parameters related to '
                               'the appearance of the molecule in the "View" tab. '
                               'These parameters can be controlled at a low level '
                               'with the sliders provided, or preset views can be '
                               'applied for a higher-level demonstration of changing '
                               'atom styles and rendering.')
                        ])
                ),
                dcc.Tab(
                    label='Data',
                    value='datasets',
                    children=html.Div(className='control-tab', children=[
                        html.Div(
                            className='app-controls-block',
                            children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Preloaded'
                                ),
                                dcc.Dropdown(
                                    id='speck-molecule-dropdown',
                                    className='speck-dropdown',
                                    options=[
                                        {'label': 'DNA',
                                         'value': os.path.join(DATAPATH, 'dna.xyz')},
                                        {'label': 'Caffeine',
                                         'value': os.path.join(DATAPATH, 'caffeine.xyz')},
                                        {'label': 'Methane',
                                         'value': os.path.join(DATAPATH, 'methane.xyz')},
                                        {'label': 'Testosterone',
                                         'value': os.path.join(DATAPATH, 'testosterone.xyz')},
                                        {'label': 'Gold nanoparticle',
                                         'value': os.path.join(DATAPATH, 'au.xyz')},
                                        {'label': 'Thiolated gold nanoparticle',
                                         'value': os.path.join(DATAPATH, 'au_thiol.xyz')},
                                        {'label': 'Benzene',
                                         'value': os.path.join(DATAPATH, 'benzene.xyz')},
                                        {'label': 'Protein (4E0O)',
                                         'value': os.path.join(DATAPATH, '4E0O.xyz')}
                                    ],
                                    value=os.path.join(DATAPATH, 'dna.xyz')
                                )
                            ]
                        ),
                        html.Div(id='speck-preloaded-uploaded-alert'),
                        dcc.Upload(
                            id='speck-file-upload',
                            className='control-upload',
                            children=html.Div([
                                "Drag and drop .xyz files, or click \
                                    to select files."
                            ])
                        ),

                        html.A(
                            html.Button(
                                'Download sample .xyz data',
                                id='speck-file-download',
                                className='control-download'
                            ),
                            href=os.path.join('assets', 'sample_data',
                                              '4QCI.xyz'),
                            download='4QCI.xyz'
                        )
                    ])
                ),
                dcc.Tab(
                    label='View',
                    value='view-options',
                    children=html.Div(className='control-tab', children=[
                        dcc.Checklist(
                            id='speck-enable-presets',
                            options=[{'label': 'Use presets', 'value': 'True'}],
                            value=[]
                        ),
                        html.Hr(),
                        html.Div(id='speck-controls-detailed', children=default_sliders),
                        html.Div(
                            id='speck-controls-preset',
                            className='speck-controls',
                            children=[
                                html.Div(className='app-controls-block', children=[
                                    html.Div(className='app-controls-name',
                                             children='Rendering style'),
                                    dcc.Dropdown(
                                        id='speck-preset-rendering-dropdown',
                                        className='speck-dropdown',
                                        options=[
                                            {'label': 'Default/reset',
                                             'value': 'default'},
                                            {'label': 'Toon',
                                             'value': 'toon'},
                                        ],
                                        value='default'
                                    )
                                ]),
                                html.Div(className='app-controls-block', children=[
                                    html.Div(className='app-controls-name', children='Atom style'),
                                    dcc.Dropdown(
                                        id='speck-preset-atom-style-dropdown',
                                        className='speck-dropdown',
                                        options=[
                                            {'label': 'Ball-and-stick',
                                             'value': 'stickball'},
                                            {'label': 'Licorice',
                                             'value': 'licorice'}
                                        ],
                                        value='default'
                                    )
                                ])
                            ]
                        )
                    ])
                ),
            ])
        ]),


        dcc.Store(
            id='speck-store-preset-rendering',
            data=None
        ),
        dcc.Store(
            id='speck-store-preset-atom-style',
            data=None
        ),
    ])


def callbacks(_app):

    @_app.callback(
        Output('speck-controls-detailed', 'style'),
        [Input('speck-enable-presets', 'value')]
    )
    def show_hide_detailed_controls(presets_enable):
        if len(presets_enable) > 0:
            return {'display': 'none'}
        return {'display': 'inline-block'}

    @_app.callback(
        Output('speck-controls-preset', 'style'),
        [Input('speck-enable-presets', 'value')]
    )
    def show_hide_preset_controls(presets_enable):
        if len(presets_enable) == 0:
            return {'display': 'none'}
        return {'display': 'inline-block'}

    @_app.callback(
        Output('speck-molecule-dropdown', 'value'),
        [Input('speck-file-upload', 'contents')],
        state=[State('speck-molecule-dropdown', 'value')]
    )
    def clear_preloaded_on_upload(upload_contents, current):
        if upload_contents is not None:
            return None
        return current

    @_app.callback(
        Output('speck-preloaded-uploaded-alert', 'children'),
        [Input('speck-molecule-dropdown', 'value'),
         Input('speck-file-upload', 'contents')],
        state=[State('speck-file-upload', 'filename')]
    )
    def alert_preloaded_and_uploaded(molecule_fname, upload_contents, upload_fname):
        if molecule_fname is not None and upload_contents is not None:
            return 'Warning: you have uploaded a dataset ({}). To view the \
            dataset, please ensure that the "Preloaded" dropdown has \
            been cleared.'.format(upload_fname)
        return ''

    @_app.callback(
        Output('speck', 'data'),
        [Input('speck-molecule-dropdown', 'value'),
         Input('speck-file-upload', 'contents')]
    )
    def update_molecule(molecule_fname, upload_contents):
        data = {}
        if upload_contents is not None and molecule_fname is None:
            try:
                content_type, content_string = upload_contents.split(',')
                data = base64.b64decode(content_string).decode('UTF-8')
            except AttributeError:
                pass
            data = read_xyz(data, is_datafile=False)
        elif molecule_fname is not None:
            data = read_xyz(molecule_fname)
        return data

    @_app.callback(
        Output('speck', 'view'),
        [Input('speck-enable-presets', 'value'),
         Input('speck-atom-radius', 'value'),
         Input('speck-relative-atom-radius', 'value'),
         Input('speck-show-hide-bonds', 'value'),
         Input('speck-bond-scale', 'value'),
         Input('speck-ao', 'value'),
         Input('speck-brightness', 'value'),
         Input('speck-outline', 'value')]
    )
    def change_view(
            presets_enabled,
            atom_radius,
            relative_atom_radius,
            show_bonds,
            bond_scale,
            ambient_occlusion,
            brightness,
            outline
    ):
        return {
            'atomScale': atom_radius,
            'relativeAtomScale': relative_atom_radius,
            'bonds': bool(len(show_bonds) > 0),
            'bondScale': bond_scale,
            'ao': ambient_occlusion,
            'brightness': brightness,
            'outline': outline
        }

    @_app.callback(
        Output('speck-store-preset-rendering', 'data'),
        [Input('speck-preset-rendering-dropdown', 'value')]
    )
    def update_rendering_option(render):
        return render

    @_app.callback(
        Output('speck-store-preset-atom-style', 'data'),
        [Input('speck-preset-atom-style-dropdown', 'value')]
    )
    def update_atomstyle_option(atomstyle):
        return atomstyle

    @_app.callback(
        Output('speck', 'presetView'),
        [Input('speck-store-preset-atom-style', 'modified_timestamp'),
         Input('speck-store-preset-rendering', 'modified_timestamp')],
        state=[State('speck-preset-rendering-dropdown', 'value'),
               State('speck-preset-atom-style-dropdown', 'value')]
    )
    def preset_callback(
            atomstyle_ts, render_ts,
            render, atomstyle
    ):
        preset = 'default'
        if atomstyle_ts is None and render_ts is None:
            return preset
        if atomstyle_ts is not None and render_ts is None:
            preset = atomstyle
        elif atomstyle_ts is None and render_ts is not None:
            preset = render
        else:
            if render_ts > atomstyle_ts or atomstyle is None:
                preset = render
            else:
                preset = atomstyle
        return preset

    @_app.callback(
        Output('speck-preset-atom-style-dropdown', 'value'),
        [Input('speck-preset-rendering-dropdown', 'value')],
        state=[State('speck-preset-atom-style-dropdown', 'value')]
    )
    def keep_atom_style(render, current):
        if render == 'default':
            return None
        return current


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
