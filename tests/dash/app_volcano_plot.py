# In[]:
# Import required libraries
import pandas as pd
import numpy as np
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State

import dash_bio

DATASETS = {
    'SET1': {
        'label': 'Set1',
        'dataframe': None,
        'datafile': 'tests/dash/sample_data/volcano_data1.csv',
        'datasource': 'ftp://ftp.ncbi.nlm.nih.gov/hapmap/genotypes/'
                      '2009-01_phaseIII/plink_format/',
        'dataprops': {}
    },
    'SET2': {
        'label': 'Set2',
        'dataframe': None,
        'datafile': 'tests/dash/sample_data/volcano_data2.csv',
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

for dataset in DATASETS:
    DATASETS[dataset]['dataframe'] = pd.read_csv(
        DATASETS[dataset]['datafile'], comment='#')


def description():
    return 'Interactively identify clinically meaningful markers in genomic \
    experiments with this volcano plot.'


def header_colors():
    return {
        'bg_color': '#19d3f3',
        'font_color': 'white',
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
                        title='',
                        children=[
                            html.H5(
                                children='Choose Dataset to plot :',
                                className='vp-title'
                            ),
                            dcc.Dropdown(
                                id='vp-dataset-dropdown',
                                options=[
                                    {
                                        'label': DATASETS[dset]['label'],
                                        'value': dset
                                    }
                                    for dset in DATASETS
                                ],
                                value='SET2'
                            )
                        ]
                    ),
                    html.Div(
                        id='vp-controls-div',
                        children=[
                            html.Div(
                                className='vp-vertical-style',
                                title='Changes the value of the left '
                                      'vertical dashed line.',
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
                                title='Changes the value of the right '
                                      'vertical dashed line.',
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
                                title='Changes the value of the '
                                      'horizontal dashed line.',
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
                    html.Div(
                        id='vp-indicators-div',
                        children=[
                            html.Div(
                                className='vp-vertical-style',
                                title='Number of points in the upper left',
                                children=[
                                    html.Div(
                                        "Upper left points",
                                        className='vp-text',
                                    ),
                                    html.Div(
                                        className='vp-input-like',
                                        id='vp-upper-left',
                                    ),
                                ],
                            ),
                            html.Div(
                                className='vp-vertical-style',
                                title='Number of points in the upper right',
                                children=[
                                    html.Div(
                                        "Upper right points",
                                        className='vp-text',
                                    ),
                                    html.Div(
                                        className='vp-input-like',
                                        id='vp-upper-right',
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
    def update_graph(u_lim, l_lim, genomic_line, datadset_id):
        """Update the data set of interest upon change the dashed lines
        value.
        """
        print(DATASETS[datadset_id]['dataprops'])
        return dash_bio.VolcanoPlot(
            DATASETS[datadset_id]['dataframe'],
            genomewideline_value=float(genomic_line),
            effect_size_line=[float(l_lim), float(u_lim)],
            **DATASETS[datadset_id]['dataprops']
        )

    @app.callback(
        Output('vp-dataset-div', 'title'),
        [
            Input('vp-dataset-dropdown', 'value')
        ]
    )
    def update_vp_dataset_div_hover(dataset_id):
        """Update the data set of interest upon change the dashed lines
        value.
        """
        return DATASETS[dataset_id]['datasource']

    @app.callback(
        Output('vp-upper-left', 'children'),
        [Input('vp-graph', 'figure')],
        [State('vp-lower-bound', 'value')]
    )
    def update_upper_left_number(fig, l_lim):
        """Update the number of points in the upper left zone delimited by
        the thresholds.
        """

        number = 0
        if len(fig['data']) > 1:
            x = np.array(fig['data'][0]['x'])
            idx = x < float(l_lim)
            number = len(x[idx])
        return str(number)

    @app.callback(
        Output('vp-upper-right', 'children'),
        [Input('vp-graph', 'figure')],
        [State('vp-upper-bound', 'value')]
    )
    def update_upper_right_number(fig, u_lim,):
        """Update the number of points in the upper right zone delimited by
        the thresholds.
        """

        number = 0
        if len(fig['data']) > 1:
            x = np.array(fig['data'][0]['x'])
            idx = x > float(u_lim)
            number = len(x[idx])
        return str(number)
