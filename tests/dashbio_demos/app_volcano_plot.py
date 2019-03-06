# In[]:
# Import required libraries
import os
import pandas as pd
import numpy as np
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_bio
import dash_daq as daq

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "volcano_")

DATASETS = {
    'SET1': {
        'label': 'Set1',
        'dataframe': None,
        'datafile': '{}data1.csv'.format(DATAPATH),
        'datasource': 'ftp://ftp.ncbi.nlm.nih.gov/hapmap/genotypes/'
                      '2009-01_phaseIII/plink_format/',
        'dataprops': {}
    },
    'SET2': {
        'label': 'Set2',
        'dataframe': None,
        'datafile': '{}data2.csv'.format(DATAPATH),
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
                                    daq.Slider(
                                        className='vp-input',
                                        id='vp-lower-bound',
                                        value=-1,
                                        max=0,
                                        min=-3,
                                        handleLabel={'showCurrentValue': True, 'label': ' '},
                                        step=0.01,
                                        marks={str(num): str(num) for num in range(0, -4, -1)}
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
                                    daq.Slider(
                                        className='vp-input',
                                        id='vp-upper-bound',
                                        value=1,
                                        min=0,
                                        max=3,
                                        handleLabel={'showCurrentValue': True, 'label': ' '},
                                        step=0.01,
                                        marks={str(num): str(num) for num in range(4) }
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
                                    daq.Slider(
                                        className='vp-input',
                                        id='vp-genomic-line',
                                        value=4,
                                        max=10,
                                        min=0,
                                        handleLabel={'showCurrentValue': True, 'label': ' '},
                                        step=0.01,
                                        marks={str(num): str(num) for num in range(0, 11, 2)}

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


def callbacks(app):  # pylint: disable=redefined-outer-name
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


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
