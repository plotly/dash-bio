# In[]:
# Import required libraries
import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

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
    return html.Div(
        id='mhp-page-content',
        children=[
            html.Div(
                id='mhp-text',
                className='mhp-text mhp-intro',
                children="Visualize genome wide association studies  ("
                         "GWAS) with efficient manhattan plots. Using "
                         "WebGL  under the hood, interactively explore  "
                         "hundred of thousands of points at once or  "
                         "individually hover over them.",
            ),
            html.Div(
                id='mhp-controls-div',
                children=[
                    html.H5(
                        "Threshold value (red line)",
                        className='mhp-text',
                    ),
                    html.Div(
                        id='mhp-slider-div',
                        children=dcc.Slider(
                            id='mhp-slider',
                            vertical=False,
                            updatemode='mouseup',
                            max=9,
                            min=1,
                            value=7,
                            marks={i + 1: '{}'.format(i + 1) for i in range(9)}
                        ),
                    )
                ]
            ),
            html.Div(
                id='mhp-graph-div',
                children=dcc.Graph(
                    figure=fig,
                    id='mhp-graph'
                )
            )
        ]
    )


def callbacks(app):
    @app.callback(
        Output('mhp-graph', 'figure'),
        [
            Input('mhp-slider', 'value'),
        ]
    )
    def update_graph(slider_val):
        """update the data sets upon change the genomewideline value"""
        return dash_bio.ManhattanPlot(df, genomewideline_value=float(slider_val))
