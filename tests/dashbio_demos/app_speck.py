import os
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash_bio
from dash_bio.utils.xyzReader import read_xyz

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "speck_")


default_sliders = [
    html.Span(
        "Atom radius",
        className='speck-slider-description'
    ),
    dcc.Slider(
        id='speck-atom-radius',
        className='view-slider',
        max=1,
        step=0.01,
        value=0.6,
        updatemode='drag'
    ),
    html.Span(
        "Relative atom radius",
        className='speck-slider-description'
    ),
    dcc.Slider(
        id='speck-relative-atom-radius',
        className='view-slider',
        max=1,
        step=0.01,
        value=1.0,
        updatemode='drag'
    ),
    html.Span(
        "Ambient occlusion",
        className='speck-slider-description'
    ),
    dcc.Slider(
        id='speck-ao',
        className='view-slider',
        max=1,
        step=0.01,
        value=0.75
    ),
    html.Span(
        "Brightness",
        className='speck-slider-description'
    ),
    dcc.Slider(
        id='speck-brightness',
        className='view-slider',
        max=1,
        step=0.01,
        value=0.5,
        updatemode='drag'
    ),
    html.Span(
        "Outline",
        className='speck-slider-description'
    ),
    dcc.Slider(
        id='speck-outline',
        className='view-slider',
        max=1,
        step=0.01,
        value=0.0,
        updatemode='drag'
    ),

    html.Hr(),
    dcc.Checklist(
        id='speck-show-hide-bonds',
        options=[
            {'label': 'Show bonds',
             'value': 'True'}
        ],
        values=[]
    ),
    html.Span(
        'Bond Scale',
        className='speck-slider-description'
    ),
    dcc.Slider(
        id='speck-bond-scale',
        className='speck-slider-description',
        max=1,
        step=0.01,
        value=0.5,
        updatemode='drag'
    ),

]


def header_colors():
    return {
        'bg_color': '#ab63fa',
        'font_color': 'white'
    }


def description():
    return 'View molecules beautifully with this WebGL renderer.'


def layout():

    return html.Div(id='speck-body', children=[


        html.Div(
            id='speck-container',
            children=[
                dash_bio.Speck(
                    id='speck',
                    view={'resolution': 600},
                    scrollZoom=True
                )
            ]
        ),

        html.Br(),

        dcc.Checklist(
            id='speck-enable-presets',
            options=[{'label': 'Use presets', 'value': 'True'}],
            values=[]
        ),

        html.Br(),

        dcc.Dropdown(
            id='speck-molecule-dropdown',
            options=[
                {'label': 'DNA',
                 'value': '{}dna.xyz'.format(DATAPATH)},
                {'label': 'Caffeine',
                 'value': '{}caffeine.xyz'.format(DATAPATH)},
                {'label': 'Methane',
                 'value': '{}methane.xyz'.format(DATAPATH)}
            ],
            value='{}dna.xyz'.format(DATAPATH)
        ),

        html.Br(),

        html.Div(
            id='speck-controls-preset',
            className='speck-controls',
            children=[

                "1: Select rendering style",
                dcc.Dropdown(
                    id='speck-preset-rendering-dropdown',
                    options=[
                        {'label': 'Default/reset',
                         'value': 'default'},
                        {'label': 'Toon',
                         'value': 'toon'},
                    ],
                    value='default'
                ),
                "2: Select atom style",
                dcc.Dropdown(
                    id='speck-preset-atom-style-dropdown',
                    options=[
                        {'label': 'Ball-and-stick',
                         'value': 'stickball'},
                        {'label': 'Licorice',
                         'value': 'licorice'}
                    ],
                    value='default'
                ),

                dcc.Store(
                    id='speck-store-preset-rendering',
                    data=None
                ),
                dcc.Store(
                    id='speck-store-preset-atom-style',
                    data=None
                ),
                dcc.Store(
                    id='speck-view-updated',
                    data=None
                ),

                html.Div(
                    id='speck-idk'
                )
            ]
        ),

        html.Div(
            id='speck-controls-detailed',
            className='speck-controls',
            children=default_sliders
        )

    ])


def callbacks(app):  # pylint: disable=redefined-outer-name

    @app.callback(
        Output('speck-controls-detailed', 'style'),
        [Input('speck-enable-presets', 'values')]
    )
    def show_hide_detailed_controls(presets_enable):
        if len(presets_enable) > 0:
            return {'display': 'none'}
        return {'display': 'inline-block'}

    @app.callback(
        Output('speck-controls-preset', 'style'),
        [Input('speck-enable-presets', 'values')]
    )
    def show_hide_preset_controls(presets_enable):
        if len(presets_enable) == 0:
            return {'display': 'none'}
        return {'display': 'inline-block'}

    @app.callback(
        Output('speck-view-updated', 'data'),
        [Input('speck', 'view')]
    )
    def update_something(_):
        return 'update'

    @app.callback(
        Output('speck', 'data'),
        [Input('speck-molecule-dropdown', 'value')]
    )
    def update_molecule(molecule_fname):
        return read_xyz(molecule_fname)

    @app.callback(
        Output('speck', 'scrollZoom'),
        [Input('speck-scroll-zoom-enable', 'values')]
    )
    def toggle_scroll_zoom(scroll_zoom):
        if len(scroll_zoom) > 0:
            return True
        return False

    @app.callback(
        Output('speck-zoom-slider-container', 'style'),
        [Input('speck-scroll-zoom-enable', 'values')]
    )
    def toggle_zoom_slider_display(scroll_zoom):
        if len(scroll_zoom) > 0:
            return {'display': 'none'}
        return {'display': 'block'}

    @app.callback(
        Output('speck', 'view'),
        [Input('speck-enable-presets', 'values'),
         Input('speck-atom-radius', 'value'),
         Input('speck-relative-atom-radius', 'value'),
         Input('speck-show-hide-bonds', 'values'),
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

    @app.callback(
        Output('speck-store-preset-rendering', 'data'),
        [Input('speck-preset-rendering-dropdown', 'value')]
    )
    def update_rendering_option(render):
        return render

    @app.callback(
        Output('speck-store-preset-atom-style', 'data'),
        [Input('speck-preset-atom-style-dropdown', 'value')]
    )
    def update_atomstyle_option(atomstyle):
        return atomstyle

    @app.callback(
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

    @app.callback(
        Output('speck-preset-atom-style-dropdown', 'value'),
        [Input('speck-preset-rendering-dropdown', 'value')],
        state=[State('speck-preset-atom-style-dropdown', 'value')]
    )
    def keep_atom_style(render, current):
        if render == 'default':
            return None
        return current


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
