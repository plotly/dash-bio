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

def description():
    return 'Molecule visualization in 3D - perfect for viewing biomolecules like proteins, DNA and RNA'

with open('./tests/dash/sample_data/data.js') as f:
    model=json.load(f)

def layout():
    return html.Div([
        ## Header container
        html.Div(id="header-mol3d",
            children=[ html.H2("Dash Molecule Visualization", 
            #style={'textAlign': 'center', 'background': 'grey', 'padding': '16px'}
            )]
            ),

        html.Div(id="controls-container-mol3d", children= [

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
        html.Div(className="controls-mol3d", id="control-bgcolor-mol3d", children=[
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
        html.Div(className="controls-mol3d", children=[
            html.P('Background opacity', style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Slider(
                id='slider-opacity-mol3d',
                min=0,
                max=1.0,
                step=0.1,
                value=1,
            ),
        ],
            #style={'margin-right':'40px', 'padding':'4px','width':'200px', 'height':'100px', 'float':'left'}
        ),

        #Dropdown to select chain representation (sticks, cartoon, sphere)
        html.Div(className="controls-mol3d", children=[
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
        html.Div(className="controls-mol3d", id="selection-display-mol3d", children=[
            html.P("Selection", style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Textarea(id='selection_output-mol3d'),
        ]),

        ]),
        #Main molecule visualization container
        html.Div(id='output-data-upload-mol3d', children=[], style={'float':'left'}),

        ]),


        ## Dummy hidden visualization container for initializing dash_bio.DashMolecule3d
        html.Div(id="molecule-container", 
            children=[dash_bio.DashMolecule3d(
                id='mol-3d',
                backgroundColor='#e1dabb',
                modelData=model,
                selectedAtomIds=[],
                styles={},
                atomLabelsShown=False,
            )
        ], style={"display":"none"}),
        # ),


        
    ])

## Function to parse contents - used in the app callbacks below
def parse_contents(contents):
    content_type, content_string=str(contents).split(',')
    decoded=base64.b64decode(content_string).decode("UTF-8")
    return(decoded)

## Function to create the modelData and style files for molecule visualization
def files_data_style(contents):
    fdat=tempfile.NamedTemporaryFile(suffix=".js",delete=False, mode='w+')
    fdat.write(contents)
    dataFile=fdat.name
    fdat.close()
    return(dataFile)

def callbacks(app):
    ## Callback for molecule visualization based on uploaded PDB file
    @app.callback(
        Output("output-data-upload-mol3d","children"),
        [Input("upload-data","contents"),
        Input("dropdown-bgcolor", 'value'),
        Input("slider-opacity-mol3d", "value"),
        Input("dropdown-styles", "value")]
    )
    def use_upload(contents, color, opacity, molStyle):
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
            #Use the files_data_style function to create the model data
            fmodel=files_data_style(mdata)
            with open(fmodel) as fm:
                mdata=json.load(fm)

            ## Create the cartoon style from the decoded contents
            datstyle=sparser.createStyle(fname, molStyle)
            #Use the files_data_style function to create the style data
            fstyle=files_data_style(datstyle)
            with open(fstyle) as sf:
                data_style=json.load(sf)

            # Delete all the temporary files that were created
            for x in [fname, fmodel, fstyle]:
                if(os.path.isfile(x)):
                    os.remove(x)
                else:
                    pass

            ## Return the new molecule visualization container
            return (
                dash_bio.DashMolecule3d(
                id='mol-3d',
                backgroundColor=color,
                backgroundOpacity=opacity,
                selectionType='Atom',
                modelData=mdata,
                selectedAtomIds=[],
                styles=data_style,
                atomLabelsShown=False,
                )
            )

    @app.callback(
        Output("selection_output-mol3d","value"),
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
            res_summary.append(residues)
        return '{} '.format(res_summary)

