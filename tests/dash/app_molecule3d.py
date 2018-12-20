import dash_bio
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import base64
import json
import tempfile
from shutil import copy2
import os
from dash_bio.utils import pdbParser as parser
from dash_bio.utils import stylesParser as sparser

def header_colors():
    return {
        'bg_color':'#000080',
        'font_color':'white'
    }

def description():
    return 'Molecule visualization in 3D - perfect for viewing biomolecules like proteins, DNA and RNA'

def layout():
    return html.Div(id="mol3d-body", children=[

        html.Div(id="mol3d-controls-container", children= [

        ## Upload container
        html.Div(title='Upload biomolecule to view here',
         className='mol3d-controls', 
         id='mol3d-upload-container', children=[
            dcc.Upload(
            id='mol3d-upload-data',
            children=html.Div([
                'Drag and Drop or click to upload a file',
            ]),
            # Allow multiple files to be uploaded
            multiple=True
        ),
        ]),

        html.Div(
            title='download a sample data file to view',
            children=[
                html.A(
                    html.Button(
                        "Download sample structure",
                        id="mol3d-download-sample-data",
                    ),
                    href='/assets/sample_data/2mru.pdb',
                    download='2mru.pdb'
                )
            ]
        ),

        ## Dropdown for demo data
        html.Div(title= 'Select molecule to view', className="mol3d-controls", id="mol3d-demo-dropdown", children=[
            html.P('Select structure', style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Dropdown(
                id='dropdown-demostr',
                options=[
                    {'label': 'Protein', 'value':'./tests/dash/sample_data/3aid.pdb'},
                    {'label': 'DNA', 'value':'./tests/dash/sample_data/1bna.pdb'},
                    {'label': 'RNA', 'value':'./tests/dash/sample_data/6dls.pdb'},
                ],
                value='./tests/dash/sample_data/6dls.pdb'
            ),
        ],
        ),

        #Dropdown to select chain representation (sticks, cartoon, sphere)
        html.Div(title='select style for molecule representation', 
        className="mol3d-controls", id='mol3d-style', children=[
            html.P('Style', style={'font-weight':'bold', 'margin-bottom':'10px'}),
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
        
        #Dropdown to select color of representation
        html.Div(title='select color scheme for viewing biomolecule', 
        className="mol3d-controls", id='mol3d-style-color', children=[
            html.P('Color', style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Dropdown(
                id='dropdown-style-color',
                options=[
                    {'label': 'atom', 'value':'atomColor'},
                    {'label': 'residue identity', 'value':'residueID'},
                    {'label': 'residue property', 'value': 'residueProperty'},
                    {'label': 'chain', 'value':'chainColor'},    
                ],
                value='atomColor'
            ),
        ],
        ),
        
        #Dropdown menu for selecting the background color
        html.Div(title='select background color for molecule viewer', className="mol3d-controls", id="mol3d-control-bgcolor", children=[
            html.P('Background color', style={'font-weight':'bold', 'margin-bottom':'10px'}),
            # dcc.Dropdown(
            dcc.Input(
                id='mol3d-input-bgcolor',
                type='text',
                placeholder='#000000 (black), #ffffff (white)',
                value='#ffffff'
            ),
        ],
        ),

        #Slider to choose the background opacity
        html.Div(title='change background opacity of molecule viewer', className="mol3d-controls", children=[
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

        # Textarea container to display the selected atoms
        html.Div(title='view information about selected atoms of biomolecule', 
        className="mol3d-controls", id="mol3d-selection-display", children=[
            html.P("Selection", style={'font-weight':'bold', 'margin-bottom':'10px'}),
            dcc.Textarea(id='mol3d-selection_output'),
        ]),

        ]),
        #Main molecule visualization container
        html.Div(id='mol3d-biomolecule-viewer', children=[] ),

    ])

## Function to create the modelData and style files for molecule visualization
def files_data_style(content):
    fdat=tempfile.NamedTemporaryFile(suffix=".js",delete=False, mode='w+')
    fdat.write(content)
    dataFile=fdat.name
    fdat.close()
    return(dataFile)

def callbacks(app):
    @app.callback(
        Output('dropdown-demostr', 'value'),
        [Input('mol3d-upload-data', 'contents')],
        [State('dropdown-demostr', 'value')]
    )
    def reset_dropdown(upload_content, dem):
        if upload_content is not None:
            return None
        return dem
        
    ## Callback for molecule visualization based on uploaded PDB file
    @app.callback(
        Output("mol3d-biomolecule-viewer","children"),
        [Input("mol3d-upload-data","contents"),
        Input("dropdown-demostr","value"),
        Input("dropdown-styles", "value"),
        Input("dropdown-style-color", "value")]
    )
    def use_upload(contents, demostr, molStyle, molcolor):
        if demostr is not None:
            copy2(demostr, './str.pdb')
            fname='./str.pdb'
        elif contents is not None and demostr is None:
            try:
                content_type, content_string=str(contents).split(',')
                decoded_contents=base64.b64decode(content_string).decode("UTF-8")
                f=tempfile.NamedTemporaryFile(suffix=".pdb",delete=False, mode='w+')
                f.write(decoded_contents)
                fname=f.name
                f.close()
            except AttributeError:
                pass
        else:
            return ('demostr and contents are none')

        ## Create the model data from the decoded contents
        modata=parser.createData(fname)
        fmodel=files_data_style(modata)
        with open(fmodel) as fm:
            mdata=json.load(fm)

        ## Create the cartoon style from the decoded contents
        datstyle=sparser.createStyle(fname, molStyle, molcolor)
        fstyle=files_data_style(datstyle)
        with open(fstyle) as sf:
            data_style=json.load(sf)

        ## Delete all the temporary files that were created
        for x in [fname, fmodel, fstyle]:
            if(os.path.isfile(x)):
                os.unlink(x)
            else:
                pass

        ## Return the new molecule visualization container
        return (
            dash_bio.Molecule3dViewer(
            id='mol-3d',
            selectionType='Atom',
            modelData=mdata,
            styles=data_style,
            selectedAtomIds=[],
            backgroundColor='#ffffff',
            backgroundOpacity='1',
            atomLabelsShown=False,
            )
        )
    ## Callback to print details of each selected atom of the biomolecule
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
        return (str(res_summary))

    ## Callback to change background color of molecule visualization container
    @app.callback(
        Output('mol-3d','backgroundColor'),
        [Input('mol3d-input-bgcolor', 'value')]
    )
    def change_bgcolor(color):
        return color

    ## Callback to change background opacity of molecule visualization container
    @app.callback(
        Output('mol-3d', 'backgroundOpacity'),
        [Input('mol3d-slider-opacity', 'value')]
    )
    def change_bgopacity(opacity):
        return(opacity)