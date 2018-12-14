import dash_bio
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
from dash_bio.utils.xyzReader import readXYZ


def header_colors():
    return {
        'bg_color': '#ab63fa',
        'font_color': 'white'
    }


def description():
    return 'View molecules beautifully with this webGL renderer.'


def layout():
    return html.Div(id='speck-body', children=[

                
        html.Div(
            id='speck-container',
            children=[
                dash_bio.SpeckComponent(
                    id='speck',
                    view={'resolution': 400}
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
                         'value': './tests/dash/sample_data/dna.xyz.txt'},
                        {'label': 'Caffeine',
                         'value': './tests/dash/sample_data/caffeine.xyz.txt'},
                        {'label': 'Methane',
                         'value': './tests/dash/sample_data/methane.xyz.txt'}
                    ],
                    value='./tests/dash/sample_data/dna.xyz.txt'
                ), 

                html.Hr(), 
                
                "Zoom molecule",
                html.Br(),
                dcc.Slider(
                    id='zoom-atom',
                    min=0,
                    max=0.1,
                    step=0.0001,
                    value=0.02,
                ),

                html.Hr(),
            ]
        ),

        
    ])


def callbacks(app):

    @app.callback(
        Output('speck', 'data'),
        [Input('speck-molecule-dropdown', 'value')]
    )
    def update_molecule(molecule_fname):
        return readXYZ(molecule_fname)

    @app.callback(
        Output('speck', 'view'),
        [Input('zoom-atom', 'value')],
        state=[State('speck', 'view')]
    )
    def zoom_callback(zoomVal, currentView):
        if currentView is not None:
            currentView.update(
                zoom = zoomVal
            )
        return currentView
