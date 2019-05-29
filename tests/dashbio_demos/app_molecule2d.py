import os
import json

from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

import pubchempy as pcp

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
        html.Div(id='mol2d-container', children=[
            dash_bio.Molecule2dViewer(
                id='mol2d',
            )
        ]),
        dcc.Input(id='mol-search'),
        html.Div(id='error-wrapper'),
        html.Div(
            id='search-results-wrapper', children=[
                dcc.Dropdown(id='search-results')
            ]
        ),
        html.Div(id='sel-atoms-output'),
        dcc.Store(id='search-results-store'),
        dcc.Store(id='compound-options-store')
    ])


def callbacks(app):  # pylint: disable=redefined-outer-name
    @app.callback(
        Output('sel-atoms-output', 'children'),
        [Input('mol2d', 'selectedAtomIds')]
    )
    def show_selected(ids):
        if ids is None or len(ids) == 0:
            return ''
        return str(ids)

    @app.callback(
        [Output('search-results-wrapper', 'style'),
         Output('compound-options-store', 'data'),
         Output('search-results-store', 'data')],
        [Input('mol-search', 'n_submit')],
        state=[State('mol-search', 'value')]
    )
    def update_results(_, query):
        results_dropdown = {'display': 'none'}
        options = []
        compounds = {}

        if query is not None:
            results = pcp.get_compounds(query, 'name')
            if len(results) > 1:
                options = [
                    {'label': compound.to_dict()['iupac_name'],
                     'value': compound.to_dict()['iupac_name']}
                    for compound in results
                ]
                results_dropdown = {'display': 'block'}

            compounds = {
                compound.to_dict()['iupac_name']: {
                    'PC_Compounds': [
                        compound.record
                    ]
                } for compound in results
            }

        return results_dropdown, options, compounds

    @app.callback(
        Output('search-results', 'value'),
        [Input('compound-options-store', 'data')]
    )
    def update_dropdown_options(compounds):
        return compounds

    @app.callback(
        [Output('mol2d', 'modelData'),
         Output('error-wrapper', 'children')],
        [Input('search-results-store', 'modified_timestamp')],
        state=[State('search-results-store', 'data'),
               State('search-results', 'value')]
    )
    def update_model(_, stored_compounds, selected_compound):

        error_message = ''

        if stored_compounds is None or len(stored_compounds.keys()) == 0:
            error_message = 'No results found for your query.'
            model_data = {'nodes': [], 'links': []}

        elif len(stored_compounds.keys()) == 1:
            error_message = 'Displaying: {}'.format(
                list(stored_compounds.keys())[0]
            )
            model_data = read_structure(
                data_string=json.dumps(
                    stored_compounds[list(stored_compounds.keys())[0]]
                )
            )
        elif selected_compound is not None:
            error_message = 'Displaying: {}'.format(
                selected_compound
            )
            model_data = read_structure(
                data_string=json.dumps(
                    stored_compounds[selected_compound]
                )
            )

        return model_data, error_message


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
