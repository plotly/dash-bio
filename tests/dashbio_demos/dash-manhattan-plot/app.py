import os

import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

# Load dataset into a DataFrame
df = pd.read_csv(os.path.join(DATAPATH, 'data.csv'))

n_chr = 23  # number of chromosome pairs in humans
assert 'CHR' in df.columns
assert df['CHR'].max() == n_chr

# Trim down the data
DATASET = df.groupby('CHR').apply(lambda u: u.head(50))
DATASET = DATASET.droplevel('CHR').reset_index(drop=True)

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
    return html.Div(id='mhp-page-content', className='app-body', children=[
        dcc.Loading(className='dashbio-loading', children=html.Div(
            id='mhp-graph-div',
            children=dcc.Graph(
                figure=fig,
                style={
                    'bgcolor': 'rgba(0,0,0,0)'
                },
                id='mhp-graph',
                config={'scrollZoom': True},
            )
        )),

        html.Div(id='manhattan-control-tabs', className='control-tabs', children=[
            dcc.Tabs(id='manhattan-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='control-tab', children=[
                        html.H4(className='what-is', children='What is Manhattan Plot?'),
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
                    children=html.Div(className='control-tab', children=[
                        html.Div(className='app-controls-block', children=[
                            html.Div(
                                className='app-controls-name',
                                children=[
                                    'Threshold value (red)'
                                ]
                            ),
                            dcc.Slider(
                                id='mhp-slider-genome',
                                className='control-slider',
                                vertical=False,
                                updatemode='mouseup',
                                max=4,
                                min=1,
                                value=2,
                                marks={
                                    i + 1: '{}'.format(i + 1)
                                    for i in range(4)
                                },
                                step=0.05
                            ),
                        ]),
                        html.Div(
                            className='app-controls-block', children=[
                                html.Div(
                                    className='app-controls-name',
                                    children=[
                                        'Suggestive line (purple)',
                                    ]
                                ),
                                dcc.Slider(
                                    id='mhp-slider-indic',
                                    className='control-slider',
                                    vertical=False,
                                    updatemode='mouseup',
                                    max=4,
                                    min=1,
                                    value=3,
                                    marks={
                                        i + 1: '{}'.format(i + 1)
                                        for i in range(4)
                                    },
                                    step=0.05
                                )
                            ]
                        )
                    ])
                )
            ])
        ]),
    ])


def callbacks(_app):
    @_app.callback(
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
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
