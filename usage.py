import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
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

    html.Button(
        id='button',
        n_clicks=0
    ),
    
    html.Div(id='output')
])


@app.callback(
    Output('speck', 'data'),
    [Input('button', 'n_clicks')]
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


@app.callback(
    Output('output', 'children'),
    [Input('speck', 'data')]
)
def attach_input_callback(n):
    return 'data changed!'


if __name__ == '__main__':
    app.run_server(debug=True)
