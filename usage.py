import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import numpy as np

app = dash.Dash('')

import json

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

x = np.array(["1", "236", "6", "323", "9", "20"])
y = np.array(["3", "1", "6", "3", "1", "4"])
g = np.array(['a', 'b', 'a', 'b', 'a', 'a'])
domain=np.array([
    {
        "name": "P53_TAD",
        "coord": "6-29"
    },
    {
        "name": "P53",
        "coord": "95-288"
    },
    {
        "name": "P53_tetramer",
        "coord": "318-358"
    }
])
app.layout = html.Div([
    dash_bio.ExampleComponent(
        id='input',
        value='my-value',
        label='my-label'
    ),
    dash_bio.NeedlePlot(
        id='needle',
        x=x,
        y=y,
        groups=g,
        domains=domain
    ),
    html.Div(id='output')
])

@app.callback(Output('output', 'children'), [Input('input', 'value')])
def display_output(value):
    return 'You have entered {}'.format(value)


if __name__ == '__main__':
    app.run_server(debug=True)
