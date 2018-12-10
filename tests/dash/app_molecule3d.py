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
from dash_bio.utils import pdbParser as parser
from dash_bio.utils import stylesParser as sparser

def description():
    return 'Molecule visualization in 3D - perfect for viewing biomolecules like proteins, DNA and RNA'

def layout():
    return html.Div(id="mol3d-body", children=[

        html.Div(id="mol3d-controls-container", children= [

        ## Upload container
        html.Div(className='mol3d-controls', id='mol3d-upload-container', children=[
            dcc.Upload(
            id='mol3d-upload-data',
            children=html.Div([
                'Drag and Drop or ',
                html.A('Select Files')
            ]),
            # Allow multiple files to be uploaded
            multiple=True
        ),
        ]),

        ## Dropdown for demo data
        html.Div(className="mol3d-controls", id="mol3d-demo-dropdown", children=[
            html.P('Select structure', style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Dropdown(
                id='dropdown-demostr',
                options=[
                    {'label': 'Small protein', 'value':'./tests/dash/sample_data/3aid.pdb'},
                    {'label': 'Large protein', 'value':'./tests/dash/sample_data/6gbp.pdb'},
                    {'label': 'DNA', 'value':'./tests/dash/sample_data/1bna.pdb'},
                ],
                value='./tests/dash/sample_data/1bna.pdb'
            ),
        ],
        ),

        
        #Dropdown menu for selecting the background color
        html.Div(className="mol3d-controls", id="mol3d-control-bgcolor", children=[
            html.P('Background color', style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Dropdown(
                id='dropdown-bgcolor',
                options=[
                    {'label': 'Black', 'value':'#000000'},
                    {'label': 'White', 'value':'#ffffff'},
                    {'label': 'Cream', 'value':'#e1dabb'},
                ],
                value='#ffffff'
            ),
        ],
        ),

        #Slider to choose the background opacity
        html.Div(className="mol3d-controls", children=[
            html.P('Background opacity', style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Slider(
                id='mol3d-slider-opacity',
                min=0,
                max=1.0,
                step=0.1,
                value=1,
            ),
        ],
        ),

        #Dropdown to select chain representation (sticks, cartoon, sphere)
        html.Div(className="mol3d-controls", children=[
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
        ),

        # Textarea container to display the selected atoms
        html.Div(className="mol3d-controls", id="mol3d-selection-display", children=[
            html.P("Selection", style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Textarea(id='mol3d-selection_output'),
        ]),

        ]),
        #Main molecule visualization container
        html.Div(id='mol3d-output-data-upload', children=[] ),

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
        Output("mol3d-output-data-upload","children"),
        [Input("mol3d-upload-data","contents"),
        Input("dropdown-demostr","value"),
        Input("dropdown-bgcolor", "value"),
        Input("mol3d-slider-opacity", "value"),
        Input("dropdown-styles", "value")]
    )
    def use_upload(contents, demostr, color, opacity, molStyle):
        decoded_contents=None

        if contents is None:
            pass
        else:
            decoded_contents=parse_contents(contents)

        if decoded_contents is not None:
            f=tempfile.NamedTemporaryFile(suffix=".pdb",delete=False, mode='w+')
            f.write(decoded_contents)
            fname=f.name
            f.close()
        else:
            fname=demostr

        ## Create the model data from the decoded contents
        mdata=parser.createData(fname)

        #Use the files_data_style function to create the model data
        fmodel=files_data_style(mdata)
        with open(fmodel) as fm:
            mdata=json.load(fm)

        ## Create the cartoon style from the decoded contents
        datstyle=sparser.createStyle(fname, molStyle)
        ## Use the files_data_style function to create the style data
        fstyle=files_data_style(datstyle)
        with open(fstyle) as sf:
            data_style=json.load(sf)

        ## Delete all the temporary files that were created
        for x in [fmodel, fstyle]:
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
        Output("mol3d-selection_output","value"),
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
                "atom": res_info['name'],
                "chain": res_info['chain'],
                "xyz": res_info['positions']
            }
            res_summary.append(residues)
        return '{} '.format(res_summary)