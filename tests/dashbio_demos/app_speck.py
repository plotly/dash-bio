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


        html.Div(
            id='speck-controls',
            children=[
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

                dcc.Dropdown(
                    id='speck-preset-dropdown',
                    options=[
                        {'label': 'Default', 'value': 'default'},
                        {'label': 'Ball-and-stick', 'value': 'stickball'},
                        {'label': 'Toon', 'value': 'toon'},
                        {'label': 'Licorice', 'value': 'licorice'}
                    ]
                ),

                html.Hr(),

                dcc.Checklist(
                    id='speck-scroll-zoom-enable',
                    options=[
                        {'label': 'Scroll to zoom', 'value': 'scrollzoom'}
                    ],
                    values=['scrollzoom']
                ),

                html.Div(
                    id='speck-zoom-slider-container', children=[
                        "Zoom molecule",
                        html.Br(),
                        dcc.Slider(
                            id='speck-zoom-slider',
                            min=0,
                            max=0.1,
                            step=0.0001,
                            value=0.02,
                        ),
                    ]
                ),

                html.Hr(),
            ]
        ),


    ])


def callbacks(app):  # pylint: disable=redefined-outer-name

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
        [Input('speck-zoom-slider', 'value')],
        state=[State('speck', 'view')]
    )
    def zoom_callback(zoom_val, current_view):
        if current_view is not None:
            current_view.update(
                zoom=zoom_val
            )
        return current_view

    @app.callback(
        Output('speck', 'presetView'),
        [Input('speck-preset-dropdown', 'value')]
    )
    def preset_callback(preset_val):
        return preset_val


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__': 
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
