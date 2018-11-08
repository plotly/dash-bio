import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import base64
import json
import tempfile
import shutil
import os
from dash_bio.helpers import pdbParser as parser
from dash_bio.helpers import stylesParser as sparser

app = dash.Dash('')

with open('./data/data.js') as f:
    model=json.load(f)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

server = app.server  # Expose the server variable for deployments

app.layout = html.Div([
    ## Header container
    html.Div(id="header",
        children=[ html.H2("Dash Molecule Visualization", 
        #style={'textAlign': 'center', 'background': 'grey', 'padding': '16px'}
        )]
        ),

    html.Div(id="controls-container", children= [

    ## Upload container
    html.Div([
        dcc.Upload(
        id='upload-data',
        children=html.Div([
            'Drag and Drop or ',
            html.A('Select Files')
        ]),
        style={
            'width': '99%',
            'height': '50px',
            'lineHeight': '60px',
            'borderWidth': '1px',
            'borderStyle': 'dashed',
            'borderRadius': '5px',
            'textAlign': 'center',
            'margin': '3px',
            'padding': '5px'
        },
        # Allow multiple files to be uploaded
        multiple=True
    ),
    
    #Dropdown menu for selecting the background color
    html.Div(className="controls", id="control-bgcolor", children=[
        html.P('Background color', style={'font-weight':'bold', 'margin-bottom':'10px'}),
        dcc.Dropdown(
            id='dropdown-bgcolor',
            options=[
                {'label': 'Black', 'value':'#000000'},
                {'label': 'White', 'value':'#ffffff'},
                {'label': 'Cream', 'value':'#e1dabb'},
            ],
            value='#e1dabb'
        ),
    ],
        #style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
    ),

    #Slider to choose the background opacity
    html.Div(className="controls", children=[
        html.P('Background opacity', style={'font-weight':'bold', 'margin-bottom':'10px'}),
        dcc.Slider(
            id='slider-opacity',
            min=0,
            max=1.0,
            step=0.1,
            value=1,
        ),
    ],
        #style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
    ),

    #Dropdown to select chain representation (sticks, cartoon, sphere)
    html.Div(className="controls", children=[
        html.P('Representation', style={'font-weight':'bold', 'margin-bottom':'10px'}),
        dcc.Dropdown(
            id='dropdown-styles',
            options=[
                {'label': 'Sticks', 'value':'stick'},
                {'label': 'Cartoon', 'value':'cartoon'},
                {'label': 'Spheres', 'value':'sphere'},    
            ],
            value='stick'
        ),
    ],
        #style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
    ),

    # Textarea container to display the selected atoms
    html.Div(className="controls", id="selection-display", children=[
        html.P("Selection", style={'font-weight':'bold', 'margin-bottom':'10px'}),
        dcc.Textarea(id='selection_output'),
    ]),

    ]),
    #Main molecule visualization container
    html.Div(id='output-data-upload', children=[], style={'float':'left'}),

    ]),


    ## Dummy hidden visualization container for initializing dash_bio.DashMolecule3d
    html.Div(id="molecule-container", 
        children=[dash_bio.DashMolecule3d(
            id='mol-3d',
            backgroundColor='#e1dabb',
            #backgroundOpacity=0.,
            #selectionType='Atom',
            modelData=model,
            selectedAtomIds=[],
            defaultSelection=[],
            styles={},
            atomLabelsShown=False,
        )
    ], style={"display":"none"}),
    # ),


    
])

## Function to parse contents - used in the app callbacks below
def parse_contents(contents): #, filename, date): 
    content_type, content_string=str(contents).split(',')
    decoded=base64.b64decode(content_string).decode("UTF-8")
    return(decoded)

## Callback for molecule visualization based on uploaded PDB file
@app.callback(
    Output("output-data-upload","children"),
    [Input("upload-data","contents"),
     Input("dropdown-bgcolor", 'value'),
     Input("slider-opacity", "value"),
     Input("dropdown-styles", "value")] #,
    #  Input("radio-selection","value")]
)
def use_upload(contents, color, opacity, molStyle): #,selectn): #, filename, date):
    if contents==None:
        # return ("contents is empty",)
        pass
    else:
        decoded_contents=parse_contents(contents)

        ## Create the temporary PDB file for creating the model data and style files
        f=tempfile.NamedTemporaryFile(suffix=".pdb",delete=False, mode='w+')
        f.write(decoded_contents)
        fname=f.name
        f.close()

        ## Create the model data from the decoded contents
        mdata=parser.createData(fname)
        fm=tempfile.NamedTemporaryFile(suffix=".js",delete=False, mode='w+')
        fm.write(mdata)
        fname1=fm.name
        fm.close()
        with open(fname1) as fm:
            mdata=json.load(fm)

        #print (mdata)

        ## Create the cartoon style from the decoded contents
        datstyle=sparser.createStyle(fname, molStyle)
        fs=tempfile.NamedTemporaryFile(suffix=".js",delete=False, mode='w+')
        #tmp_dir=tempfile.TemporaryDirectory()
        fs.write(datstyle)
        fname2=fs.name
        fs.close()
        with open(fname2) as sf:
            data_style=json.load(sf)

        # Delete all the temporary files that were created
        for x in [fname, fname1, fname2]:
            if(os.path.isfile(x)):
                #print (str(x))
                os.remove(x)
                #print ("deleted")
            else:
                pass
        
        #print (str(fname1)) #, ">>", fname1, fname)

        ## Return the new molecule visualization container
        return (
            dash_bio.DashMolecule3d(
            id='mol-3d',
            backgroundColor=color, #'#ffffff',
            backgroundOpacity=opacity,
            selectionType='Atom',
            modelData=mdata,
            selectedAtomIds=[],
            defaultSelection=[],
            styles=data_style,
            atomLabelsShown=False,
            )
        )

@app.callback(
    # Output("selection_output","children"),
    Output("selection_output","value"),
    [Input("mol-3d", "selectedAtomIds"),
     Input("mol-3d","modelData")]
)
def selout(param, model):
    res_summary=[]
    res_info=""
    residues={}
    for i in param:
        res_info = model['atoms'][i]
        residues = {
            "residue": res_info['residue_name'],
            "chain": res_info['chain'],
            "xyz_coordinates": res_info['positions']
        }
        # res_summary.append(res_info)
        res_summary.append(residues)
    return '{} '.format(res_summary)

if __name__ == '__main__':
    app.run_server(debug=True)
