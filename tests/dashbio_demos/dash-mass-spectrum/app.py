import os
import ast

import pandas as pd
import numpy as np
import dash_html_components as html
import dash_bootstrap_components as dbc
import dash_core_components as dcc
from dash.dependencies import Input, Output

from layout_helper import run_standalone_app

# Font and text color
text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}

# Set the data path for your demo app
DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

# Load the sample datasets
with open(os.path.join(DATAPATH, 'sample.fasta'), encoding='utf-8') as data_file:
    dataset = data_file.read()

# Description for your app that will be shown in the gallery
def description():
    return 'View multiple sequence samples of genomic or protenomic sequences.'

# Header colors for the app template
def header_colors():
    return {
        'bg_color': '#0C4142',
        'font_color': 'white',
    }

# Layout of the app
def layout():
    return html.Div(id='sample-body', className='app-body', children=[
        html.Div([
            html.Div(id='sample-control-tabs', className='control-tabs', children=[
                dcc.Tabs(
                    id='sample-tabs', value='what-is',
                    children=[
                        dcc.Tab(
                            label='About',
                            value='what-is',
                            children=html.Div(className='control-tab', children=[
                                html.P("Insert description here.")
                            ])
                        ),
                        dcc.Tab(
                            label='Data',
                            value='sample-tab-select',
                            children=html.Div(className='control-tab', children=[
                                # Input group for loading mass spectrum
                                dbc.Label("Enter mass spectrum (.msp, .json, .mgf)"),
                                dbc.Textarea(rows=10, id="mass-spectrum-input", placeholder="Enter your mass spectrum here"),
                                html.Br(),
                            ])
                        ),
                    ],
                ),
            ]),
        ]),
        # Plot for user-inputted mass spectrum
        html.Div(id="plot-container", className="plot-container", style={"display": "none"}, children=[
            dcc.Graph(id="mass-spectrum-plot")
        ]),
    ])

# Returns callbacks for the app
def callbacks(_app):
    @_app.callback(
        Output("mass-spectrum-plot", "figure"),
        Input("mass-spectrum-input", "value"),
        prevent_initial_call=True
    )
    def render_mass_spectrum(peak_data):
        
        """
        Renders plot for user-inputted mass spectrum
        """
        
        # Sample spectrum
        # [[67.142, 7.869], [79.134, 5.553], [91.056, 5.578], [105.039, 22.809], [115.033, 75.299], [116.993, 45.418], [130.149, 7.47], [131.984, 47.809], [133.085, 11.454], [142.064, 21.414], [143.274, 9.163], [159.734, 100.0]]
        
        try:
            # Convert string into object
            mass_spectrum = ast.literal_eval(peak_data)
            
            # Initialize DataFrame
            df_peaks = pd.DataFrame(np.array(mass_spectrum), columns=["m/z", "intensity"])
            
            # Render plot
            return MassSpectrum(df_peaks)
        
        except:
            return None, {"display": "none"}, False, True

# Helper function from `layout_helper` which generates app template
app = run_standalone_app(layout, callbacks, header_colors, __file__)

# Creates a server object for deployment
server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
