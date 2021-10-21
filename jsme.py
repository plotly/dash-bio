# -*- coding: utf-8 -*-

import dash
import dash_bio as dashbio
import dash_html_components as html

external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

app.layout = html.Div([
    dashbio.Jsme(
        options='reaction',
        smiles="CCC"
    ),
])

if __name__ == '__main__':
    app.run_server(debug=True)
