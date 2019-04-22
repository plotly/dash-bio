import os
import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "manhattan_")

# Load the data
DT = pd.read_csv("{}data.csv".format(DATAPATH))

# Trim down the data
datasets = [DT.loc[DT['CHR'] == i+1] for i in range(23)]
datasets = [dataset.iloc[:100] for dataset in datasets]

DATASET = pd.concat(datasets).reset_index(drop=True)

# Feed the data to a function which creates a Manhattan Plot figure
fig = dash_bio.ManhattanPlot(DATASET)


def description():
    return 'Display genomic studies results sorted out by chromosome with ' \
           'this Manhattan plot.\
    Perfect to visualize genome-wide association studies (GWAS).'


def header_colors():
    return {
        'bg_color': '#0D76BF',
        'font_color': '#fff',
        'light_logo': True
    }


def layout():
    return html.Div(id='mhp-page-content', children=[
        html.Div(
            id='mhp-graph-div',
            children=dcc.Graph(
                figure=fig,
                style={
                    'bgcolor': 'rgba(0,0,0,0)'
                },
                id='mhp-graph',
                config={'scrollZoom': True},
            )
        ),

        html.Div(id='manhattan-control-tabs', children=[
            dcc.Tabs(id='manhattan-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='manhattan-tab', children=[
                        html.H4('What is Manhattan Plot?'),
                        html.P('ManhattanPlot allows you to visualize genome-'
                               'wide association studies (GWAS) efficiently. '
                               'Using WebGL under the hood, you can interactively '
                               'explore overviews of massive datasets comprising '
                               'hundreds of thousands of points at once, or '
                               'take a closer look at a small subset of your data.'),
                        html.P('You can adjust the threshold level and the '
                               'suggestive line in the "Graph" tab.')
                    ])
                ),
                dcc.Tab(
                    label='Graph',
                    value='graph',
                    children=html.Div(className='manhattan-tab', children=[
                        html.Div(
                            className='manhattan-option-name',
                            children=[
                                'Threshold value (red)'
                            ]
                        ),
                        dcc.Slider(
                            id='mhp-slider-genome',
                            vertical=False,
                            updatemode='mouseup',
                            max=4,
                            min=1,
                            value=2,
                            marks={
                                i + 1: '{}'.format(i + 1)
                                for i in range(9)
                            },
                            step=0.05
                        ),
                        html.Br(),
                        html.Div(
                            className='manhattan-option-name',
                            children=[
                                'Suggestive line (purple)',
                            ]
                        ),
                        dcc.Slider(
                            id='mhp-slider-indic',
                            vertical=False,
                            updatemode='mouseup',
                            max=4,
                            min=1,
                            value=3,
                            marks={
                                i + 1: '{}'.format(i + 1)
                                for i in range(9)
                            },
                            step=0.05
                        )
                    ])
                )
            ])
        ]),
    ])


def callbacks(app):  # pylint: disable=redefined-outer-name
    @app.callback(
        Output('mhp-graph', 'figure'),
        [
            Input('mhp-slider-genome', 'value'),
            Input('mhp-slider-indic', 'value'),
        ]
    )
    def update_graph(slider_genome, slider_indic):
        """update the data sets upon change the genomewideline value"""
        return dash_bio.ManhattanPlot(
            DATASET,
            genomewideline_value=float(slider_genome),
            suggestiveline_value=float(slider_indic),
        )


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
