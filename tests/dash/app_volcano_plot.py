# In[]:
# Import required libraries
import pandas as pd
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output

import dash_bio

df1 = pd.read_csv("tests/dash/sample_data/manhattan_volcano_data.csv")  # Load the data
df2 = pd.read_csv("tests/dash/sample_data/volcano_data.csv", comment='#', header=0)


DATASETS = {
    'SET1': {
        'label': 'Set1',
        'dataframe': None,
        'datafile': 'tests/dash/sample_data/manhattan_volcano_data.csv',
        'datasource': '',
        'dataprops': {}
    },
    'SET2': {
        'label': 'Set2',
        'dataframe': None,
        'datafile': 'tests/dash/sample_data/volcano_data.csv',
        'datasource': 'https://doi.org/10.1371/journal.pntd.0001039.s001',
        'dataprops': dict(
            effect_size='log2_(L3i/L1)_signal_ratio',
            p='p-value',
            snp=None,
            gene='PFAM_database_id',
            annotation='annotation'
        )
    }
}

for dset in DATASETS:
    DATASETS[dset]['dataframe'] = pd.read_csv(DATASETS[dset]['datafile'], comment='#')


def description():
    return 'Interactively identify clinically meaningful markers in genomic \
    experiments with this volcano plot.'


def header_colors():
    return {
        'bg_color': '#19d3f3',
        'font_color': '#2a3f5f',
        'light_logo': False
    }


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
                        id='vp-dataset-div',
                        className='vp-horizontal-style',
                        children=[
                            html.H5(
                                children='Choose Dataset to plot :',
                                className='vp-title'
                            ),
                            dcc.Dropdown(
                                id='vp-dataset-dropdown',
                                options=[
                                    {'label': DATASETS[dset]['label'], 'value': dset}
                                    for dset in DATASETS
                                ],
                                value=dset
                            )
                        ]
                    ),
                    html.Div(
                        id='vp-controls-div',
                        children=[
                            html.Div(
                                className='vp-vertical-style',
                                title='Changes the value of the left vertical dashed line.',
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
                                        value=4,
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
                    id='vp-graph',
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
            Input('vp-dataset-dropdown', 'value')
        ]
    )
    def update_graph(u_lim, l_lim, genomic_line, datadsetd):
        """update the data set of interest upon change the dashed lines value"""
        return dash_bio.VolcanoPlot(
            DATASETS[datadsetd]['dataframe'],
            genomewideline_value=float(genomic_line),
            effect_size_line=[float(l_lim), float(u_lim)],
            **DATASETS[datadsetd]['dataprops']
        )
