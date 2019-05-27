import os
import base64
import json
import tempfile

from shutil import copy2
from textwrap import dedent as s

from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash_daq as daq

import dash_bio
from dash_bio_utils.chem_structure_reader import read_structure

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


residue = {
  'nodes': [
    {"id":1000,"atom":"HE22"},
    {"id":991,"atom":"C"},
    {"id":997,"atom":"NE2"},
    {"id":990,"atom":"CA"},
    {"id":995,"atom":"CD"},
    {"id":996,"atom":"OE1"},
    {"id":993,"atom":"CB"},
    {"id":992,"atom":"O"},
    {"id":994,"atom":"CG"},
    {"id":999,"atom":"HE21"},
    {"id":989,"atom":"N"},
    {"id":998,"atom":"H"}
  ],
  'links': [
    {"id": 90, "source":989,"target":990,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 91, "source":989,"target":998,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 92, "source":990,"target":991,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 93, "source":990,"target":993,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 94, "source":991,"target":992,"bond":2, "strength": 1, "distance": 30.0 },
    {"id": 95, "source":993,"target":994,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 96, "source":994,"target":995,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 97, "source":995,"target":997,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 98, "source":995,"target":996,"bond":2, "strength": 1, "distance": 30.0 },
    {"id": 99, "source":997,"target":1000,"bond":1, "strength": 1, "distance": 30.0 },
    {"id": 100, "source":997,"target":999,"bond":1, "strength": 1, "distance": 30.0 }
  ],
}

DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "mol2d_")

residue = read_structure(file_path='{}aspirin.json'.format(DATAPATH))


def header_colors():
    return {}


def description():
    return ''


def layout():
    return html.Div([
        dcc.Dropdown(
            id='mol-dropdown',
            options=[
                {'label': mol, 'value': '{}{}.json'.format(DATAPATH, mol)}
                for mol in ['aspirin', 'morphine']
            ],
            value='{}{}.json'.format(DATAPATH, 'aspirin')
        ),

        dash_bio.Molecule2dViewer(
            id='mol2d',
            modelData={'nodes': [], 'links': []},
            height=500,
            width=500
        ),
        html.Div(id='sel-atoms-output')
    ])


def callbacks(app):

    @app.callback(
        Output('sel-atoms-output', 'children'),
        [Input('mol2d', 'selectedAtomIds')]
    )
    def selected_atoms(ids):
        if ids is None:
            return ''
        atoms = {str(atm['id']): atm['atom'] for atm in residue['nodes']}
        sel_atoms = [atoms[str(i)] for i in ids]
        return str(sel_atoms)

    @app.callback(
        Output('mol2d', 'modelData'),
        [Input('mol-dropdown', 'value')]
    )
    def change_molecule(molfile):
        print(read_structure(file_path=molfile))
        return read_structure(file_path=molfile)


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
