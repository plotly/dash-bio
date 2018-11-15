# In[]:
# Import required libraries
import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

from .utils.app_wrapper import app_page_layout

df = pd.read_csv("tests/dash/sample_data/manhattan_volcano_data.csv")  # Load the data

fig = dash_bio.VolcanoPlot(df)  # Feed the data to a function which creates a Volcano Plot figure

vertical_style = {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'space-between',
}

text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}


def description():
    return 'Interactively identify clinically meaningful markers in genomic \
    experiments with this volcano plot.'


def layout():

    main_layout = html.Div(
        id='page-content',
        children=[
            html.Div(
                id='text',
                children=[
                    html.H2(
                        "Dash Volcano",
                        style=text_style
                    ),
                    html.Div(
                        "Interactively identify clinically meaningful "
                        "markers in genomic experiments, i.e., markers "
                        "that are statistically significant and have an "
                        "effect size greater than some threshold. "
                        "Volcano plots are the negative log10 p-values "
                        "plotted against their effect size, odds ratio, "
                        "or log fold-change.",
                        style=text_style
                    ),
                    html.Div(
                        children=[
                            html.Div(
                                children=[
                                    html.Div(
                                        "Lower effect size",
                                        style=text_style
                                    ),
                                    dcc.Input(
                                        id='lower-bound',
                                        value=-1,
                                    ),
                                ],
                                style=vertical_style
                            ),
                            html.Div(
                                children=[
                                    html.Div(
                                        "Upper effect size",
                                        style=text_style
                                    ),
                                    dcc.Input(
                                        id='upper-bound',
                                        value=1,
                                    ),
                                ],
                                style=vertical_style
                            ),
                            html.Div(
                                children=[
                                    html.Div(
                                        "Threshold",
                                        style=text_style
                                    ),
                                    dcc.Input(
                                        id='genomic-line',
                                        value=7,
                                        max=10,
                                        min=0
                                    ),
                                ],
                                style=vertical_style
                            ),
                        ],
                        style={
                            'display': 'flex',
                            'flexDirection': 'row',
                            'alignItems': 'center',
                            'justifyContent': 'space-between',
                        }
                    ),
                ],
                style={
                    'width': '90%',
                    'margin': "15px"
                }
            ),
            html.Div(
                children=dcc.Graph(
                    figure=fig,
                    id='graph_volcano'
                ),
            )
        ],
        style={
            'width': '100%',
            'display': 'flex',
            'flexDirection': 'row',
            'alignItems': 'center',
            'justifyContent': 'space-between',
        }
    )
    return app_page_layout(main_layout, "Volcano Plot")


def callbacks(app):
    @app.callback(
        Output('graph_volcano', 'figure'),
        [
            Input('upper-bound', 'value'),
            Input('lower-bound', 'value'),
            Input('genomic-line', 'value'),
        ]
    )
    def update_graph(u_lim, l_lim, genomic_line):
        """update the data set of interest upon change the dashed lines value"""
        return dash_bio.VolcanoPlot(
            df,
            genomewideline_value=float(genomic_line),
            effect_size_line=[float(l_lim), float(u_lim)],
        )
