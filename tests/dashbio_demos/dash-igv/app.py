import os
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}

_COMPONENT_ID = 'igv-chart'


HOSTED_GENOME_DICT = [
    {'value': 'hg38', 'label': 'Human (GRCh38/hg38)'},
    {'value': 'hg19', 'label': 'Human (CRCh37/hg19)'},
    {'value': 'hg18', 'label': 'Human (hg18)'},
    {'value': 'mm10', 'label': 'Mouse (GRCm38/mm10)'},
    {'value': 'rn6', 'label': 'Rat (RGCS 6.0/rn6)'},
    {'value': 'gorGor4', 'label': 'Gorilla (gorGor4.1/gorGor4)'},
    {'value': 'panTro4', 'label': 'Chimp (SAC 2.1.4/panTro4)'},
    {'value': 'panPan2', 'label': 'Bonobo (MPI-EVA panpan1.1/panPan2)'},
    {'value': 'canFam3', 'label': 'Dog (Broad CanFam3.1/canFam3)'},
    {'value': 'ce11', 'label': 'C. elegans (ce11)'}
]


def description():
    return 'A high-performance genomics viewer with an interactive UI and support for a ' \
           'wide variety of data types and features.'


def header_colors():
    return {
        'bg_color': '#0F5BA7',
        'font_color': 'white',
    }


def layout():
    return html.Div(id='igv-body', className='app-body', children=[
        html.Div(id='igv-control-tabs', className='control-tabs', children=[
            dcc.Tabs(
                id='igv-tabs',
                value='what-is',
                children=[
                    dcc.Tab(
                        label='About',
                        value='what-is',
                        children=html.Div(className='control-tab', children=[
                            html.H4(className='what-is', children='What is IGV?'),
                            html.P(
                                """
                                The Dash IGV component is a high-performance genomics
                                data visualization component developed originally by the [IGV
                                Team]( based at UC San Diego and the Broad Institute. It offers
                                support for array-based and next-generation sequencing data,
                                and a smooth, interactive UI for real-time exploration of large
                                scale genomic data. This includes visualizing alignments, copy number,
                                genome-wide interactions, gene expression and methylation, and more 
                                data types. Data tracks, interactions, and analysis can be controlled
                                by integrating with a Dash app to create a complete dynamic workflow.
                                """
                            ),
                            html.P(
                                """
                                Read more about the component here:
                                https://github.com/igvteam/igv.js/
                                """
                            )
                        ])
                    ),
                    dcc.Tab(
                        label='Data',
                        value='data',
                        children=html.Div(className='control-tab', children=[
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='fullwidth-app-controls-name',
                                    children="Select a Genome"
                                ),
                                dcc.Dropdown(
                                    id='genome-dropdown',
                                    options=HOSTED_GENOME_DICT,
                                    value='rn6',
                                ),
                                html.Div(
                                    className='app-controls-desc',
                                    children='Select a Genome Identifier to display the remotely hosted '
                                             'genome.'
                                ),
                            ]),
                            html.Hr(
                                className='igv-separator'
                            ),
                            html.Div(
                                className='app-controls-block',
                                children=[
                                    html.Div(className='app-controls-name',
                                             children='Minimum Window Size'),
                                    dcc.Slider(
                                        className='control-slider',
                                        id='minimum-bases',
                                        value=100,
                                        min=10,
                                        max=200,
                                        step=10,
                                        marks=dict((i, str(i)) for i in range(10, 190, 30))
                                    ),

                                    html.Div(
                                        className='app-controls-desc',
                                        children='Minimum window size in base pairs when zooming '
                                                 'in.'
                                    ),
                                ],
                            ),
                        ])
                    )
                ]
            )
        ]),
        dcc.Loading(className='dashbio-loading', id='igv-output'),
    ])


def callbacks(_app):
    # Return the IGV component with the selected genome and base length
    @_app.callback(
        Output('igv-output', 'children'),
        [Input('genome-dropdown', 'value'),
         Input('minimum-bases', 'value')]
    )
    def return_igv(genome, bases):
        return(
            html.Div([
                dash_bio.Igv(
                    id=_COMPONENT_ID,
                    genome=genome,
                    reference=None,
                    minimumBases=bases,
                )
            ])
        )


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
