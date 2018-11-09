import dash_bio
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc


def layout():
    return html.Div([
        dash_bio.SpeckComponent(
            id='speck',
            data=[
                {
                    'symbol': 'C',
                    'x': 0.0,
                    'y': 0.0,
                    'z': 0.0
                },
                {
                    'symbol': 'H',
                    'x': 0.0,
                    'y': 0.0,
                    'z': 1.089
                },
                {
                    'symbol': 'H',
                    'x': 1.026719,
                    'y': 0.0,
                    'z': -0.363
                },
                {
                    'symbol': 'H',
                    'x': -0.51336,
                    'y': -0.889165,
                    'z': -0.363
                },
                {
                    'symbol': 'H',
                    'x': -0.51336,
                    'y': 0.889165,
                    'z': -0.363
                }
            ]
        ),

        html.Div(
            id='controls',
            style={
                'width': '200px',
                'font-size': '20pt'
            },
            children=[
                "Move hydrogen atom",
                html.Br(),
                dcc.Slider(
                    id='move-atom',
                    min=0,
                    max=5,
                    step=0.1,
                    value=0,
                ),

                html.Hr(),

                "Zoom molecule",
                html.Br(),
                dcc.Slider(
                    id='zoom-atom',
                    min=0,
                    max=1,
                    step=0.001,
                    value=0.125,
                ),

                html.Hr(),

                "Depth of field",
                html.Br(),
                dcc.Slider(
                    id='depth-of-field-strength',
                    min=0,
                    max=100,
                    step=1,
                    value=1
                )

            ]
        ),

        html.Div(id='output')
    ])


def callbacks(app):
    
    @app.callback(
        Output('speck', 'data'),
        [Input('move-atom', 'value')]
    )
    def change_data(n):
        return [
            {
                'symbol': 'C',
                'x': 0.0,
                'y': 0.0,
                'z': 0.0
            },
            {
                'symbol': 'H',
                'x': 0.0,
                'y': 0.0+n,
                'z': 1.089
            },
            {
                'symbol': 'H',
                'x': 1.026719,
                'y': 0.0,
                'z': -0.363
            },
            {
                'symbol': 'H',
                'x': -0.51336,
                'y': -0.889165,
                'z': -0.363
            },
            {
                'symbol': 'H',
                'x': -0.51336,
                'y': 0.889165,
                'z': -0.363
            }
        ]

    @app.callback(
        Output('speck', 'view'),
        [Input('zoom-atom', 'value'),
         Input('depth-of-field-strength', 'value')],
        state=[State('speck', 'view')]
    )
    def zoom(zoomval, dofval, current):
        tmp_view = current
        tmp_view.update(
            zoom=zoomval,
            dofStrength=dofval
        )
        return tmp_view

    @app.callback(
        Output('output', 'children'),
        [Input('speck', 'view')]
    )
    def attach_input_callback(d):
        return d['zoom']


