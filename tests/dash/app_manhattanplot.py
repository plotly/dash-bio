# In[]:
# Import required libraries
import pandas as pd
import dash
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

from dash_bio.figure_factory._manhattan import create_manhattan

df = pd.read_csv("tests/dash/HapMap.csv")  # Load the data

fig = create_manhattan(df)  # Feed the data to a function which creates a Manhattan Plot figure


def layout():
    return html.Div(
        id='main_page',
        children=[
            dcc.Location(id='url', refresh=False),
            html.Div(
                id='header',
                className='banner',
                children=[
                    html.H2('Dash bio: Manhattan plot'),
                    html.Img(
                        src='assets/dashbio_logo.svg',
                        style={
                            'height': '100',
                            'float': 'right',
                        }
                    )
                ],
                style={
                    'width': '100%',
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                    'background': '#A2B1C6',
                    'color': '#506784'
                }
            ),
            html.Div(
                id='page-content',
                children=[
                    html.Div(
                        id='text',
                        children=[
                            html.H2(
                                "Dash Manhattan",
                                style={
                                    'color': "#506784",
                                    'font-family': 'Dosis'
                                }
                            ),
                            html.Div(
                                "Visualize genome wide association studies  ("
                                "GWAS) with efficient manhattan plots. Using "
                                "WebGL  under the hood, interactively explore  "
                                "hundred of thousands of points at once or  "
                                "individually hover over them.",
                                style={
                                    'width': '400px',
                                    'color': "#506784",
                                    'font-family': 'Ubuntu'
                                }
                            )
                        ]
                    ),
                    html.Div(
                        children=[
                            html.H5(
                                "Threshold value",
                                style={
                                    'color': "red",
                                    'font-family': 'Ubuntu'
                                }
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
        ]
    )


def callbacks(app):
    @app.callback(
        Output('graph_manhattan', 'figure'),
        [
            Input('slider', 'value'),
        ]
    )
    def update_graph(slider_val):
        """update the data sets upon change the genomewideline value"""
        return create_manhattan(df, genomewideline_value=float(slider_val))
