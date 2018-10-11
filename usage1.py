import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import json

app = dash.Dash('')

with open ('./data/data.js') as f1:
    model=json.load(f1)

with open ('./data/style_cartoon.js') as s1:
    style_cartoon=json.load(s1)

with open ('./data/style_sphere.js') as s2:
    style_sphere=json.load(s2)

with open ('./data/style_stick.js') as s3:
    style_stick=json.load(s3)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([

    ## The main display for molecule visualization
    html.Div([
    dash_bio.DashMolecule3d(
        id='mol-3d',
        backgroundColor='#ffffff',
        #backgroundOpacity=0.,
        selectionType='ATOM',
        modelData=model,
        selectedAtomIds=[],
        defaultSelection=[],
        styles=style_cartoon,
        atomLabelsShown=False,
    ),
    ],
        style={'margin-right':'250px'}
    ),
   
    #Dropdown menu for selecting the background color
    html.Div([
        html.P('Background color', style={'font-weight':'bold', 'margin-bottom':'10px'}),
        dcc.Dropdown(
            id='dropdown-bgcolor',
            options=[
                {'label': 'Black', 'value':'#000000'},
                {'label': 'White', 'value':'#ffffff'},
                {'label': 'grey', 'value':'#7d7d7d'},
            ],
            value='#ffffff'
        ),
    ],
        style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
    ),

    #Radio to select atom, residue or chain
    html.Div([
        html.P('Selection type', style={'font-weight':'bold', 'margin-bottom':'10px', 'width':'200px'}),
        dcc.RadioItems(
            id='radio-selection',
            options=[
                {'label': 'atom', 'value': 'Atom'},
                {'label': 'residue', 'value': 'Residue'},
                {'label': 'chain', 'value': 'Chain'}
            ],
            value='Atom'
        ),
    ],
        style={'margin-bottom':'40px', 'padding':'4px', 'width':'200px', 'float':'left'}#'overflow':'hidden'}
    ),
    #Dropdown to select chain representation (sticks, cartoon, sphere)
    html.Div([
        html.P('Representation', style={'font-weight':'bold', 'margin-bottom':'10px'}),
        dcc.Dropdown(
            id='dropdown-styles',
            options=[
                {'label': 'Cartoon', 'value':style_cartoon},
                {'label': 'Spheres', 'value':style_sphere},
                {'label': 'Sticks', 'value':style_stick},
            ],
            value=style_cartoon
        ),
    ],
        style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
    ),

    html.Div(id='output')
])

@app.callback(
    Output("mol-3d", "backgroundColor"),
    [Input("dropdown-bgcolor", "value")]
)
def bgColor(color):
    return color

@app.callback(
    Output("mol-3d", "selectionType"),
    [Input("radio-selection", "value")]
)
def selection(sel):
    return sel

@app.callback(
    Output("mol-3d", "styles"),
    [Input("dropdown-styles", "value")]
)
def styles_representation(representation):
    return representation

@app.callback(
    Output("output", "children"),
    [Input("mol-3d", "selectedAtomIds")]
)
def styles(param):
    return '{} '.format(param)

if __name__ == '__main__':
    app.run_server(debug=True)
