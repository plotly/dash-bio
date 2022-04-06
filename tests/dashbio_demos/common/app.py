import os

from dash import html, dcc, no_update
from dash.dependencies import Input, Output
import dash_bio

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
                                html.Div(className='app-controls-block', children=[
                                    html.Div(
                                        className='fullwidth-app-controls-name',
                                        children="Select preloaded dataset"
                                    ),
                                    dcc.Dropdown(
                                        id='sample-dropdown',
                                        options=[
                                            {
                                                'label': 'Sample.fasta',
                                                'value': 'dataset1'
                                            }
                                        ],
                                        value='dataset'
                                    )
                                ]),
                            ])
                        ),
                    ],
                ),
            ]),
        ]),
        dcc.Loading(parent_className='dashbio-loading', children=html.Div([
            dash_bio.AlignmentChart(
                id='sample-chart',
                height=725,
                data=dataset,
            ),
        ])),

        dcc.Store(id='sample-data-store'),
    ])


# Returns callbacks for the app
def callbacks(_app):
    # Render main chart
    @_app.callback(
        Output('sample-chart', 'data'),
        [Input('sample-data-store', 'data')]
    )
    def update_chart(input_data):
        if input_data is None:
            return no_update
        return input_data


# Helper function from `layout_helper` which generates app template
app = run_standalone_app(layout, callbacks, header_colors, __file__)
# Creates a server object for deployment
server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
