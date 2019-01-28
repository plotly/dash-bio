import base64
import json

import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_bio


text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}


# Datasets
with open('tests/dash/sample_data/dataset1.json', encoding='utf-8') as data_file:
    dataset1 = json.loads(data_file.read())

with open('tests/dash/sample_data/dataset2.json', encoding='utf-8') as data_file:
    dataset2 = json.loads(data_file.read())

with open('./tests/dash/sample_data/dataset3.json', encoding='utf-8') as data_file:
    dataset3 = json.loads(data_file.read())

with open('./tests/dash/sample_data/cBioPortalData.json', encoding='utf-8') as data_file:
    cBioPortalData = json.loads(data_file.read())

datasets = {
    'dataset1': dataset1,
    'dataset2': dataset2,
    'dataset3': dataset3,
    'cBioPortalData': cBioPortalData
}


def description():
    return 'View multiple genomic alternations with an interactive heatmap.'


def header_colors():
    return {
        'bg_color': '#84CFDB',
        'font_color': 'white',
    }


def layout():
    return html.Div(id='oncoprint-body', children=[
        html.Div([
            html.Div([
                dash_bio.OncoPrint(id='oncoprint-chart', data=dataset3)
            ], className='oncoprint-card eight columns'),
            html.Div([
                dcc.Tabs(
                    id='oncoprint-tabs',
                    value='oncoprint-tab-select',
                    children=[
                        dcc.Tab(
                            label='Select',
                            value='oncoprint-tab-select',
                            children=[
                                html.Div([
                                    html.H4(
                                        "Select Dataset"
                                    ),
                                    dcc.Dropdown(
                                        id='oncoprint-dropdown',
                                        className='oncoprint-select',
                                        options=[
                                            {'label': 'dataset1.json', 'value': 'dataset1'},
                                            {'label': 'dataset2.json', 'value': 'dataset2'},
                                            {'label': 'dataset3.json', 'value': 'dataset3'},
                                            {'label': 'cBioPortal.json', 'value': 'cBioPortalData'},
                                        ],
                                        value='dataset3',
                                    ),
                                ], className='oncoprint-subcard'),
                                html.Div([
                                    html.H4(
                                        "Hover/Click/Event Data"
                                    ),
                                    dcc.Textarea(
                                        id="oncoprint-events",
                                        placeholder="Hover or click on data to see it here.",
                                        value="Hover or click on data to see it here.",
                                        className="oncoprint-events",
                                    ),
                                ], className='oncoprint-subcard'),
                                html.Div([
                                    html.H4(
                                        "What is OncoPrint?"
                                    ),
                                    html.P(
                                        """
                                        The OncoPrint component is used to view multile genetic alteration events
                                        through an interactive and zoomable heatmap. It is a React/Dash port of the
                                        popular oncoPrint() function from the BioConductor R package.
                                        Under the hood, the rending is done using Plotly.js built upon D3.
                                        Plotly's interactivity allows the user to bind clicks and hovers to genetic
                                        events, allowing the user to create complex bioinformatic apps or workflows
                                        that rely on crossfiltering.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Read more about the component here:
                                        https://github.com/plotly/react-oncoprint
                                        """
                                    ),
                                ], className='oncoprint-subcard')
                            ],
                        ),
                        # dcc.Tab(
                        #     label='Upload',
                        #     value='oncoprint-tab-upload',
                        #     children=[
                        #         dcc.Upload(
                        #             id='oncoprint-file-upload',
                        #             className='oncoprint-upload',
                        #             children=html.Div([
                        #                 "Drag and drop FASTA files or select files."
                        #             ]),
                        #         ),
                        #         html.Div([
                        #             html.H4(
                        #                 "Hover/Click/Event Data"
                        #             ),
                        #             dcc.Textarea(
                        #                 id="oncoprint-events-2",
                        #                 placeholder="Hover or click on data to see it here.",
                        #                 value="Hover or click on data to see it here.",
                        #                 className="oncoprint-events",
                        #             ),
                        #         ], className='oncoprint-subcard'),
                        #         html.Div([
                        #             html.H4(
                        #                 "What is OncoPrint?"
                        #             ),
                        #             html.P(
                        #                 """
                        #                 The OncoPrint component is used to view multile genetic alteration events
                        #                 through an interactive and zoomable heatmap. It is a React/Dash port of the
                        #                 popular oncoPrint() function from the BioConductor R package.
                        #                 Under the hood, the rending is done using Plotly.js built upon D3.
                        #                 Plotly's interactivity allows the user to bind clicks and hovers to genetic
                        #                 events, allowing the user to create complex bioinformatic apps or workflows
                        #                 that rely on crossfiltering.
                        #                 """
                        #             ),
                        #             html.P(
                        #                 """
                        #                 Read more about the component here:
                        #                 https://github.com/plotly/react-oncoprint
                        #                 """
                        #             ),
                        #         ], className='oncoprint-subcard')
                        #     ],
                        # ),
                        dcc.Tab(
                            label='Customize',
                            value='oncoprint-tab-customize',
                            children=[
                                html.Div([
                                    html.H4('Work in progress')
                                ], className='oncoprint-subcard'),
                            ],
                        ),
                    ],
                ),
            ], className='oncoprint-card four columns'),
        ], className='oncoprint-wrapper row'),
        dcc.Store(id='oncoprint-data-store'),
    ])


def callbacks(app):

    # # Handle file upload/selection into data store
    # @app.callback(
    #     Output('oncoprint-data-store', 'data'),
    #     [Input('oncoprint-dropdown', 'value'),
    #      Input('oncoprint-file-upload', 'contents'),
    #      Input('oncoprint-file-upload', 'filename')]
    # )
    # def update_storage(dropdown, contents, filename):
    #
    #     if (contents is not None) and ('json' in filename):
    #         content_type, content_string = contents.split(',')
    #         content = base64.b64decode(content_string).decode('UTF-8')
    #     else:
    #         content = datasets[dropdown]
    #
    #     return content

    # Handle event data
    @app.callback(
        Output("oncoprint-events", "value"),
        [Input("oncoprint-chart", "eventDatum")]
    )
    def event_data_select(data):
        return str(data)

    # # Handle event data
    # @app.callback(
    #     Output("oncoprint-events-2", "value"),
    #     [Input("oncoprint-chart", "eventDatum")]
    # )
    # def event_data_select(data):
    #     return str(data)

    # # Render main chart
    # @app.callback(
    #     Output('oncoprint-chart', 'data'),
    #     [Input('oncoprint-data-store', 'data')]
    # )
    # def update_chart(input):
    #     return input

    # Render main chart
    @app.callback(
        Output('oncoprint-chart', 'data'),
        [Input('oncoprint-dropdown', 'value')]
    )
    def update_chart(dropdown):
        return datasets[dropdown]
