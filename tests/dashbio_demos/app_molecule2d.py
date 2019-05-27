import os

from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

from dash_bio_utils.chem_structure_reader import read_structure
import dash_bio

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app

DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "mol2d_")


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
                for mol in ['aspirin', 'benzene', 'morphine']
            ],
            value='{}{}.json'.format(DATAPATH, 'benzene')
        ),
        html.Div(id='mol2d-container', children=[
            dash_bio.Molecule2dViewer(
                id='mol2d',
            )
        ]),
        html.Div(id='sel-atoms-output')
    ])


def callbacks(app):  # pylint: disable=redefined-outer-name
    @app.callback(
        Output('sel-atoms-output', 'children'),
        [Input('mol2d', 'selectedAtomIds')]
    )
    def show_selected(ids):
        return str(ids)

    @app.callback(
        Output('mol2d', 'modelData'),
        [Input('mol-dropdown', 'value')]
    )
    def change_molecule(molfile):
        return read_structure(file_path=molfile)


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
