import os
import json

from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

import pubchempy as pcp

from dash_bio_utils.chem_structure_reader import read_structure
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')


def description():
    return 'Two-dimensional visualization of molecular structures.'


def header_colors():
    return {
        'bg_color': '#015BB0',
        'font_color': '#FFFFFF',
        'light_logo': True
    }


def layout():
    return html.Div(
        id='mol2d-body',
        className='app-body',
        children=[
            html.Div(
                id='mol2d-control-tabs',
                className='control-tabs',
                children=[
                    dcc.Tabs(id='mol2d-tabs', value='what-is', children=[
                        dcc.Tab(
                            label='About',
                            value='what-is',
                            children=html.Div(className='control-tab', children=[
                                html.H4(className='what-is', children='What is Molecule2D?'),
                                html.P('Molecule2D is a visualizer for molecular structures.'),
                                html.P('In the "View" tab, you can use the text input to '
                                       'search the PubChem database by molecule name for '
                                       'structural information.'),
                                html.P('You can also change the bond lengths with the '
                                       'slider provided.')
                            ])
                        ),
                        dcc.Tab(
                            label='View',
                            children=html.Div(className='control-tab', children=[
                                html.Div(
                                    title='Search for a molecule to view',
                                    className='app-controls-block',
                                    children=[
                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='Search for molecule by name'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Search the PubChem database for a molecule ' +
                                            'by typing in its common name or its IUPAC name, ' +
                                            'then pressing the return key. (e.g., ' +
                                            '"penta-2,3-diene", "tylenol", "norepinephrine")'
                                        ),
                                        dcc.Input(
                                            id='mol2d-search',
                                            placeholder='molecule name',
                                            type='text',
                                            value='buckminsterfullerene',
                                            n_submit=1
                                        )
                                    ]
                                ),
                                html.Div(
                                    title='Change the bond length multiplier',
                                    className='app-controls-block',
                                    children=[
                                        html.Div(className='app-controls-name',
                                                 children='Bond length multiplier'),
                                        dcc.Slider(
                                            id='mol2d-bond-length',
                                            min=1,
                                            max=100,
                                            value=1
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Increase bond lengths linearly from their ' +
                                            'values at equilibrium. This visualization will be ' +
                                            'reminiscent of chemical bond stretching.'
                                        )
                                    ]
                                ),
                                html.Div(
                                    id='mol2d-search-results-wrapper', children=[
                                        dcc.Dropdown(id='mol2d-search-results')
                                    ]
                                ),
                                html.Hr(),
                                html.Div(id='error-wrapper'),
                                html.Div(id='mol2d-sel-atoms-output'),
                            ])
                        )
                    ])
                ]
            ),
            html.Div(id='mol2d-container', children=[
                dash_bio.Molecule2dViewer(
                    id='mol2d',
                    height=700,
                    width=700
                )
            ]),
            dcc.Store(id='mol2d-search-results-store'),
            dcc.Store(id='mol2d-compound-options-store')
        ]
    )


def callbacks(_app):
    @_app.callback(
        Output('mol2d-sel-atoms-output', 'children'),
        [Input('mol2d', 'selectedAtomIds')]
    )
    def show_selected(ids):
        if ids is None or len(ids) == 0:
            return ''
        return str(ids)

    @_app.callback(
        [Output('mol2d-search-results-wrapper', 'style'),
         Output('mol2d-compound-options-store', 'data'),
         Output('mol2d-search-results-store', 'data')],
        [Input('mol2d-search', 'n_submit')],
        state=[State('mol2d-search', 'value')]
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

    @_app.callback(
        Output('search-results', 'value'),
        [Input('compound-options-store', 'data')]
    )
    def update_dropdown_options(compounds):
        return compounds

    @_app.callback(
        [Output('mol2d', 'modelData'),
         Output('error-wrapper', 'children')],
        [Input('mol2d-search-results-store', 'modified_timestamp'),
         Input('mol2d-bond-length', 'value')],
        state=[State('mol2d-search-results-store', 'data'),
               State('mol2d-search-results', 'value')]
    )
    def update_model(_, bond_length, stored_compounds, selected_compound):

        error_message = ''

        if stored_compounds is None or len(stored_compounds.keys()) == 0:
            error_message = 'No results found for your query.'
            model_data = {'nodes': [], 'links': []}

        elif len(stored_compounds.keys()) == 1:
            error_message = 'Displaying: {}'.format(
                list(stored_compounds.keys())[0]
            )
            model_data = read_structure(
                json.dumps(stored_compounds[list(stored_compounds.keys())[0]]),
                is_datafile=False,
                bond_distance=bond_length
            )
        elif selected_compound is not None:
            error_message = 'Displaying: {}'.format(
                selected_compound
            )
            model_data = read_structure(
                json.dumps(stored_compounds[selected_compound]),
                is_datafile=False,
                bond_distance=bond_length
            )

        return model_data, error_message

    @_app.callback(
        Output('mol2d', 'selectedAtomIds'),
        [Input('mol2d-search', 'n_submit')]
    )
    def reset_selected_atoms(_):
        return []


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
