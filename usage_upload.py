import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc
import base64
import json
import tempfile
import shutil
from dash_bio.helpers import pdbParser as parser
from dash_bio.helpers import stylesParser as sparser

app = dash.Dash('')

with open('./data/data.js') as f:
    model=json.load(f)
# data=parser.createData('./data/3aid.pdb')
# f=tempfile.NamedTemporaryFile(suffix=".js",delete=False, mode='w+')
# f.write(data)
# fname=f.name
# f.close()
# with open(fname) as f:
#     model=json.load(f)
#print (model)

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div([
    ## Header container
    html.Div(id="header",
        children=[ html.H2("Dash molecule3D", 
        style={'textAlign': 'center', 'background': 'grey', 'padding': '16px'}
        )]
        ),

    ## Upload container
    html.Div([
        dcc.Upload(
        id='upload-data',
        children=html.Div([
            'Drag and Drop or ',
            html.A('Select Files')
        ]),
        style={
            'width': '100%',
            'height': '60px',
            'lineHeight': '60px',
            'borderWidth': '1px',
            'borderStyle': 'dashed',
            'borderRadius': '5px',
            'textAlign': 'center',
            'margin': '10px'
        },
        # Allow multiple files to be uploaded
        multiple=True
    ),
    html.Div(id='output-data-upload'),
    ]),

    ## Molecule visualization container
    html.Div(id="molecule-container", 
        children=[dash_bio.DashMolecule3d(
            id='mol-3d',
            backgroundColor='#ffffff',
            backgroundOpacity=0.,
            selectionType='ATOM',
            modelData=model,
            #selectedAtomIds=[],
            defaultSelection=[],
            #styles=style_cartoon,
            atomLabelsShown=False,
        )
    ], style={"display":"none"}),


])

def parse_contents(contents): #, filename, date): 
    content_type, content_string=str(contents).split(',')
    decoded=base64.b64decode(content_string).decode("UTF-8")
    return(decoded)

## Callback for molecule visualization based on uploaded PDB file
@app.callback(
    Output("output-data-upload","children"),
    #Output("mol-3d","modelData"),
    #Output("molecule-container","children"),
    # [Input("upload-data","contents")]
    [Input("upload-data","contents")]
)
def use_upload(contents): #, filename, date):
    if contents==None:
        # return ("contents is empty",)
        pass
    else:
        decoded_contents=parse_contents(contents) #, filename, date)
        # with open (tempfile.NamedTemporaryFile(suffix=".pdb",delete=False, mode='w+')) as f:
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

        ## Create the cartoon style from the decoded contents
        datstyle=sparser.createStyle(fname, 'sphere')
        fs=tempfile.NamedTemporaryFile(suffix=".js",delete=False, mode='w+')
        fs.write(datstyle)
        fname1=fs.name
        fs.close()
        with open(fname1) as fs:
            style_sphere=json.load(fs)

        print ("func style:", style_sphere)

        ## Return the new molecule visualization container
        #return (mdata)
        return (
            dash_bio.DashMolecule3d(
            id='mol-3d',
            backgroundColor='#ffffff',
            backgroundOpacity=0.,
            selectionType='ATOM',
            modelData=mdata,
            selectedAtomIds=[],
            defaultSelection=[],
            styles=style_sphere,
            atomLabelsShown=False,
        )
        )

if __name__ == '__main__':
    app.run_server(debug=True)
