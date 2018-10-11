import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import json

app = dash.Dash('')

with open ('./src/lib/example/js/dna_data.js') as f1:
    dna=json.load(f1)

# with open ('./data/input_data.js') as fa:
#     tst=json.load(fa)

with open ('./src/lib/example/js/3aid_data.js') as f2:
    protein=json.load(f2)

with open ('./src/lib/example/js/bipyridine_data.js') as f3:
    smallMolecule=json.load(f3)

with open ('./src/lib/example/js/3aid_style.js') as s1:
#with open ('./src/lib/example/js/style_3aid.js') as s1:
    styles_cartoon=json.load(s1)

with open ('./src/lib/example/js/sphere_style.js') as s2:
    styles_sphere=json.load(s2)

with open ('./src/lib/example/js/stick_style.js') as s3:
    styles_stick=json.load(s3)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([

     #Dropdown menu for selecting molecule type to show (Protein or DNA)
    html.Div([
        html.P("Select molecule", style={'font-weight':'bold','margin-bottom':'10px'}),
        dcc.Dropdown(
            id='dropdown-moltype',
            options=[
                # {'label': 'Tst molecule', 'value':tst},
                {'label': 'DNA molecule', 'value':dna},
                {'label': 'Protein molecule', 'value':protein},
                {'label': 'Small molecule', 'value':smallMolecule}
            ],
            value=protein
        ),
    ],
        style={'margin-bottom':'40px', 'margin-right':'250px'}
    ),

    #The main display for molecule visualization
    html.Div([
    dash_bio.DashMolecule3d(
        id='mol-3d',
        backgroundColor='#000000',
        backgroundOpacity=0.1,
        selectionType='ATOM',
        modelData=protein,
        selectedAtomIds=[],
        defaultSelection=[],
        styles={},
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
                #{'label': 'White', 'value':'#ffffff'},
                {'label': 'grey', 'value':'#7d7d7d'},
            ],
            value='#000000'
        ),
    ],
        style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
    ),
    #Slider to choose the background opacity
    html.Div([
        html.P('Background opacity', style={'font-weight':'bold', 'margin-bottom':'10px'}),
        dcc.Slider(
            id='slider-opacity',
            min=0,
            max=1.0,
            step=0.1,
            value=0.5,
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
                {'label': 'Cartoon', 'value':styles_cartoon},
                {'label': 'Spheres', 'value':styles_sphere},
                {'label': 'Sticks', 'value':styles_stick},
            ],
            value={}
        ),
    ],
        style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
    ),

    html.Div(id='output')
])

@app.callback(
    Output("mol-3d", "modelData"),
    [Input("dropdown-moltype", "value")]
)
def moleculeType(mol):
    return mol

# @app.callback(
#     Output("dropdown-bgcolor", "value"),
#     [Input("mol-3d", "backgroundColor")]
# )
# def bgColor(color):
#     return color
@app.callback(
    Output("mol-3d", "backgroundColor"),
    [Input("dropdown-bgcolor", "value")]
)
def bgColor(color):
    return color

@app.callback(
    Output("mol-3d", "backgroundOpacity"),
    [Input("slider-opacity", "value")]
)
def bgOpacity(val):
    return val

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

# @app.callback(
#     output("output", "children"),
#     [Input("mol-3d", "selectedAtomIds")]
# )

if __name__ == '__main__':
    app.run_server(debug=True)
