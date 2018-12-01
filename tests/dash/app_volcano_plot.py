# In[]:
# Import required libraries
import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

df = pd.read_csv("tests/dash/sample_data/manhattan_volcano_data.csv")  # Load the data

fig = dash_bio.VolcanoPlot(df)  # Feed the data to a function which creates a Volcano Plot figure


def description():
    return 'Interactively identify clinically meaningful markers in genomic \
    experiments with this volcano plot.'


def layout():

    return html.Div(
        id='vp-page-content',
        children=[
            html.Div(
                id='vp-info-panel-div',
                children=[
                    html.Div(
                        "Interactively identify clinically meaningful "
                        "markers in genomic experiments, i.e., markers "
                        "that are statistically significant and have an "
                        "effect size greater than some threshold. "
                        "Volcano plots are the negative log10 p-values "
                        "plotted against their effect size, odds ratio, "
                        "or log fold-change.",
                        className='vp-text vp-intro',
                    ),
                    html.Div(
                        id='vp-controls-div',
                        children=[
                            html.Div(
                                className='vp-vertical-style',
                                children=[
                                    html.Div(
                                        "Lower effect size",
                                        className='vp-text',
                                    ),
                                    dcc.Input(
                                        className='vp-input',
                                        id='vp-lower-bound',
                                        type='number',
                                        value=-1,
                                        max=0,
                                    ),
                                ],
                            ),
                            html.Div(
                                className='vp-vertical-style',
                                title='Changes the value of the right vertical dashed line.',
                                children=[
                                    html.Div(
                                        "Upper effect size",
                                        className='vp-text',
                                    ),
                                    dcc.Input(
                                        className='vp-input',
                                        id='vp-upper-bound',
                                        type='number',
                                        value=1,
                                        min=0,
                                    ),
                                ],
                            ),
                            html.Div(
                                className='vp-vertical-style',
                                title='Changes the value of the horizontal dashed line.',
                                children=[
                                    html.Div(
                                        "Threshold",
                                        className='vp-text',
                                    ),
                                    dcc.Input(
                                        className='vp-input',
                                        id='vp-genomic-line',
                                        type='number',
                                        value=7,
                                        max=10,
                                        min=0
                                    ),
                                ],
                            ),
                        ],
                    ),
                ],
            ),
            html.Div(
                id='vp-graph-div',
                children=dcc.Graph(
                    figure=fig,
                    id='vp-graph'
                ),
            )
        ],
    )


def callbacks(app):
    @app.callback(
        Output('vp-graph', 'figure'),
        [
            Input('vp-upper-bound', 'value'),
            Input('vp-lower-bound', 'value'),
            Input('vp-genomic-line', 'value'),
        ]
    )
    def update_graph(u_lim, l_lim, genomic_line):
        """update the data set of interest upon change the dashed lines value"""
        return dash_bio.VolcanoPlot(
            df,
            genomewideline_value=float(genomic_line),
            effect_size_line=[float(l_lim), float(u_lim)],
        )
