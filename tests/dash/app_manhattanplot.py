# In[]:
# Import required libraries
import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

from .utils.app_wrapper import app_page_layout

df = pd.read_csv("tests/dash/sample_data/manhattan_volcano_data.csv")  # Load the data

fig = dash_bio.ManhattanPlot(df)  # Feed the data to a function which creates a Manhattan Plot figure

text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}


def description():
    return 'Display genomic studies results sorted out by chromosome with this Manhattan plot.\
    Perfect to visualize genome wide association studies (GWAS).'


def layout():
    main_layout = html.Div(
        id='page-content',
        children=[
            html.Div(
                id='text',
                children=[
                    html.H2(
                        "Dash Manhattan",
                        style=text_style
                    ),
                    html.Div(
                        "Visualize genome wide association studies  ("
                        "GWAS) with efficient manhattan plots. Using "
                        "WebGL  under the hood, interactively explore  "
                        "hundred of thousands of points at once or  "
                        "individually hover over them.",
                        style=text_style
                    )
                ]
            ),
            html.Div(
                children=[
                    html.H5(
                        "Threshold value",
                        style=text_style
                    ),
                    html.Div(
                        children=dcc.Slider(
                            id='slider',
                            vertical=False,
                            updatemode='mouseup',
                            max=9,
                            min=1,
                            value=7,
                            marks={i + 1: '{}'.format(i + 1) for i in range(9)}
                        ),
                        style={
                            'width': "100%",
                            'margin': "2px"
                        }
                    )
                ],
                style={
                    'width': "80%",
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                }
            ),
            html.Div(
                children=[
                    dcc.Graph(
                        figure=fig,
                        id='graph_manhattan'
                    ),
                ],
                style={
                    'width': '100%',
                }
            )
        ],
        style={
            'width': '100%',
            'display': 'flex',
            'flexDirection': 'column',
            'alignItems': 'center',
        }
    )
    return app_page_layout(main_layout, "Manhattan Plot")


def callbacks(app):
    @app.callback(
        Output('graph_manhattan', 'figure'),
        [
            Input('slider', 'value'),
        ]
    )
    def update_graph(slider_val):
        """update the data sets upon change the genomewideline value"""
        return dash_bio.ManhattanPlot(df, genomewideline_value=float(slider_val))
