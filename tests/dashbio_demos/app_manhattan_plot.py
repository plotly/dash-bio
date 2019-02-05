# In[]:
# Import required libraries
import os
import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "manhattan_")

# Load the data
df = pd.read_csv("{}data.csv".format(DATAPATH))

# Feed the data to a function which creates a Manhattan Plot figure
fig = dash_bio.ManhattanPlot(df)

text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}


def description():
    return 'Display genomic studies results sorted out by chromosome with ' \
           'this Manhattan plot.\
    Perfect to visualize genome wide association studies (GWAS).'


def header_colors():
    return {
        'bg_color': '#0D76BF',
        'font_color': '#C8D4E3',
        'light_logo': True
    }


def layout():
    return html.Div(
        id='mhp-page-content',
        children=[
            html.Div(
                id='mhp-graph-div',
                className='seven columns',
                children=dcc.Graph(
                    figure=fig,
                    id='mhp-graph',
                    config={'scrollZoom': True},
                )
            ),
            html.Div(
                id='mhp-info-div',
                className='four columns',
                children=[
                    html.Div(
                        id='mhp-text',
                        className='row mhp-text mhp-intro',
                        children="Visualize genome wide association studies "
                                 "(GWAS) with efficient manhattan plots. "
                                 "Using WebGL under the hood, interactively "
                                 "explore hundred of thousands of points at "
                                 "once or individually hover over them.",
                    ),
                    html.Div(
                        className='mhp-horizontal-style mph-control-div',
                        id='mhp-slider-genome-div',
                        children=[
                            html.H5(
                                "Threshold value (red line)",
                                className='mhp-text',
                            ),
                            html.Div(

                                className='mhp-slider-div',
                                children=dcc.Slider(
                                    id='mhp-slider-genome',
                                    vertical=False,
                                    updatemode='mouseup',
                                    max=9,
                                    min=1,
                                    value=7,
                                    marks={
                                        i + 1: '{}'.format(i + 1)
                                        for i in range(9)
                                    },
                                    step=0.05
                                ),
                            )
                        ]
                    ),
                    html.Div(
                        className='mhp-horizontal-style mph-control-div',
                        id='mhp-slider-indic-div',
                        children=[
                            html.H5(
                                "Suggestive line (purple)",
                                className='mhp-text',
                            ),
                            html.Div(
                                className='mhp-slider-div',
                                children=dcc.Slider(
                                    id='mhp-slider-indic',
                                    vertical=False,
                                    updatemode='mouseup',
                                    max=9,
                                    min=1,
                                    value=6,
                                    marks={
                                        i + 1: '{}'.format(i + 1)
                                        for i in range(9)
                                    },
                                    step=0.05
                                ),
                            )
                        ]
                    ),
                ]
            ),
        ]
    )


def callbacks(app):
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
            df,
            genomewideline_value=float(slider_genome),
            suggestiveline_value=float(slider_indic),
        )


if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app
    run_standalone_app(layout, callbacks)
