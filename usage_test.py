import dash_bio
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import json

with open('7000_virtual_snvs.json', 'r') as snvsJSON:
    snvs = json.load(snvsJSON) 

with open('animal_test.json', 'r') as animal_testJSON:
    animal_test = json.load(animal_testJSON) 

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    dash_bio.DashIdeogram(
        id="ideo",
        localOrganism=animal_test,
        orientation="vertical",
        showBandLabels=True,
        chrHeight=400,
        rotatable=True,
        annotations=snvs,
        style={
            "max-height": "80vh",
            "overflow": "auto",
        }
    ),
]
)
if __name__ == '__main__':
    app.run_server(debug=False)
