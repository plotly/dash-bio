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


DATAPATH = os.path.join('.', 'tests', 'dashbio_demos', 'sample_data', 'volcano_')

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

    return html.Div(id='vp-page-content', children=[
        html.Div(
            id='vp-graph-div',
            children=dcc.Graph(
                id='vp-graph'
            ),
        ),
        html.Div(id='vp-control-tabs', children=[
            dcc.Tabs(id='vp-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='vp-tab', children=[
                        html.H4('What is Volcano Plot?'),
                        html.P(
                            'You can use volcano plot to interactively '
                            'identify clinically meaningful markers in '
                            'genomic experiments, i.e., markers that are '
                            'statistically significant and have an effect '
                            'size greater than some threshold. '
                            'Specifically, volcano plots depict the negative '
                            'log-base-10 p-values plotted against their '
                            'effect size, odds ratio, or log fold-change. '
                        ),
                        html.P(
                            'In the "Data" tab, you can select a dataset '
                            'to view on the plot. In the "View" tab, you '
                            'can control the color of the highlighted '
                            'points, as well as the threshold lines that '
                            'define which values are significant. You can '
                            'also access hover data and click data from '
                            'your interactions with the graph. '
                        )
                    ])
                ),
                dcc.Tab(
                    label='Data',
                    value='data',
                    children=html.Div(className='vp-tab', children=[
                        html.Div(
                            className='vp-option-name',
                            children='Dataset: '
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
                    ])
                ),
                dcc.Tab(
                    label='View',
                    value='view',
                    children=html.Div(className='vp-tab', children=[
                        html.Div(className='vp-option', children=[
                            html.Div(
                                className='vp-option-name',
                                children='Effect sizes'
                            ),
                            dcc.RangeSlider(
                                id='vp-bound-val',
                                min=-4,
                                max=4,
                                value=[-1, 1],
                                step=0.01,
                                marks={str(num): str(num) for num in range(-4, 5)}
                            )
                        ]),
                        html.Div(className='vp-option', children=[
                            html.Div(
                                className='vp-option-name',
                                children='Threshold',
                            ),
                            dcc.Slider(
                                id='vp-genomic-line-val',
                                value=4,
                                max=10,
                                min=0,
                                step=0.01,
                                marks={str(num): str(num) for num in range(0, 11, 2)}
                            ),
                        ]),
                        daq.ColorPicker(
                            id='vp-color-picker',
                            value=dict(hex="#0000FF"),
                            size=150,
                        ),
                        html.Div(
                            id='vp-num-points-display',
                            children=[
                                html.Div(
                                    title='Number of points in the upper left',
                                    children=[
                                        daq.LEDDisplay(
                                            className='vp-input-like',
                                            label='Upper left points',
                                            id='vp-upper-left',
                                            size=25,
                                            color='#19D3F3'
                                        ),
                                        html.Div(
                                            className='vp-test-util-div',
                                            id='vp-upper-left-val'
                                        )
                                    ]
                                ),
                                html.Br(),
                                html.Div(
                                    className='vp-vertical-style',
                                    title='Number of points in the upper right',
                                    children=[
                                        daq.LEDDisplay(
                                            className='vp-input-like',
                                            label='Upper right points',
                                            id='vp-upper-right',
                                            size=25,
                                            color='#19D3F3'
                                        ),
                                        html.Div(
                                            className='vp-test-util-div',
                                            id='vp-upper-right-val'
                                        )
                                    ]
                                ),
                            ],
                        ),
                        html.Hr(),
                        html.Div(id='vp-event-data')
                    ])
                )
            ])
        ])
    ])


def callbacks(app):  # pylint: disable=redefined-outer-name
    @app.callback(
        Output('vp-event-data', 'children'),
        [Input('vp-graph', 'hoverData'),
         Input('vp-graph', 'clickData')]
    )
    def get_event_data(hover, click):
        hover_data_div = [
            html.Div(className='vp-option-name', children='Hover data')
        ]
        hover_data = 'Hover over a data point to see it here.'

        if hover is not None:
            hovered_point = hover['points'][0]
            hover_data = [
                'x: {}'.format(hovered_point['x']),
                html.Br(),
                'y: {}'.format(hovered_point['y']),
                html.Br(),
                hovered_point['text'].strip('<br>').replace(
                    '<br>', ' - ')
            ]

        hover_data_div.append(
            html.Div(className='vp-event-data-display', children=hover_data)
        )

        click_data_div = [
            html.Div(className='vp-option-name', children='Click data')
        ]
        click_data = 'Click on a data point to see it here.'

        if click is not None:
            clicked_point = click['points'][0]
            click_data = [
                'x: {}'.format(clicked_point['x']),
                html.Br(),
                'y: {}'.format(clicked_point['y']),
                html.Br(),
                clicked_point['text'].strip('<br>').replace(
                    '<br>', ' - ')
            ]

        click_data_div.append(
            html.Div(className='vp-event-data-display', children=click_data)
        )

        return html.Div([
            html.Div(hover_data_div),
            html.Div(click_data_div)
        ])

    @app.callback(
        Output('vp-graph', 'figure'),
        [
            Input('vp-bound-val', 'value'),
            Input('vp-genomic-line-val', 'value'),
            Input('vp-dataset-dropdown', 'value'),
            Input('vp-color-picker', 'value')
        ]
    )
    def update_graph(effect_lims, genomic_line, datadset_id, color):
        """Update rendering of data points upon changing x-value of vertical dashed lines."""
        l_lim = effect_lims[0]
        u_lim = effect_lims[1]
        if 'hex' in color:
            color = color.get('hex', 'red')
        return dash_bio.VolcanoPlot(
            DATASETS[datadset_id]['dataframe'],
            genomewideline_value=float(genomic_line),
            effect_size_line=[float(l_lim), float(u_lim)],
            highlight_color=color,
            **DATASETS[datadset_id]['dataprops']
        )

    @app.callback(
        Output('vp-dataset-div', 'title'),
        [
            Input('vp-dataset-dropdown', 'value')
        ]
    )
    def update_vp_dataset_div_hover(dataset_id):
        """Update the dataset of interest."""
        return DATASETS[dataset_id]['datasource']

    @app.callback(
        Output('vp-upper-right', 'value'),
        [Input('vp-graph', 'figure')],
        [State('vp-bound-val', 'value')]
    )
    def update_upper_right_number(fig, bounds):
        """Update the number of data points in the upper right corner."""
        u_lim = bounds[1]
        number = 0
        if len(fig['data']) > 1:
            x = np.array(fig['data'][0]['x'])
            idx = x > float(u_lim)
            number = len(x[idx])
        return number

    @app.callback(
        Output('vp-upper-left', 'value'),
        [Input('vp-graph', 'figure')],
        [State('vp-bound-val', 'value')]
    )
    def update_upper_left_number(fig, bounds):
        """Update the number of data points in the upper left corner."""
        l_lim = bounds[0]
        number = 0
        if len(fig['data']) > 1:
            x = np.array(fig['data'][0]['x'])
            idx = x < float(l_lim)
            number = len(x[idx])
        return number

    # Callbacks for integration test purposes
    @app.callback(
        Output('vp-upper-left-val', 'children'),
        [Input('vp-graph', 'figure')],
        [State('vp-bound-val', 'value')]
    )
    def update_upper_left_number_val(fig, bounds):
        """Update the number of data points in the upper left corner
        for testing purposes.
        """
        l_lim = bounds[0]
        number = 0
        if len(fig['data']) > 1:
            x = np.array(fig['data'][0]['x'])
            idx = x < float(l_lim)
            number = len(x[idx])
        return str(number)

    @app.callback(
        Output('vp-upper-bound-val', 'value'),
        [Input('vp-bound-val', 'value')],
    )
    def update_upper_bound_val(bounds):
        """For selenium tests."""
        return bounds[1]

    @app.callback(
        Output('vp-upper-right-val', 'children'),
        [Input('vp-graph', 'figure')],
        [State('vp-bound-val', 'value')]
    )
    def update_upper_right_number_val(fig, bounds):
        """Update the number of data points in the upper right corner
        for testing purposes.
        """
        u_lim = bounds[1]
        number = 0
        if len(fig['data']) > 1:
            x = np.array(fig['data'][0]['x'])
            idx = x > float(u_lim)
            number = len(x[idx])
        return str(number)

    @app.callback(
        Output('vp-lower-bound-val', 'value'),
        [Input('vp-bound-val', 'value')],
    )
    def update_lower_bound_val(bounds):
        """For selenium tests."""
        l_lim = bounds[0]
        return l_lim

    @app.callback(
        Output('vp-genomic-line-val', 'value'),
        [Input('vp-genomic-line', 'value')],
    )
    def update_genomic_line_val(val):
        """For selenium tests purpose."""

        # A value of 0 is forbidden by the component
        if val == 0:
            val = 1e-9
        return val


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
