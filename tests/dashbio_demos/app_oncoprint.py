import os
import json
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_bio


text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}


DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "oncoprint_")

# Datasets
with open('{}dataset1.json'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset1 = json.loads(data_file.read())

with open('{}dataset2.json'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset2 = json.loads(data_file.read())

with open('{}dataset3.json'.format(DATAPATH), encoding='utf-8') as data_file:
    dataset3 = json.loads(data_file.read())

with open('{}cBioPortalData.json'.format(DATAPATH), encoding='utf-8') as data_file:
    cBioPortalData = json.loads(data_file.read())

DATASETS = {
    'dataset1': dataset1,
    'dataset2': dataset2,
    'dataset3': dataset3,
    'cBioPortalData': cBioPortalData
}


TRACKS_COLORS_OPT = [
    '#aaaaaa',
    '#440154',
    '#472d7b',
    '#3b528b',
    '#2c728e',
    '#21918c',
    '#28ae80',
    '#5ec962',
    '#addc30',
    '#fde725'
]

COLORSCALE_MUTATIONS_OPT = [
    '',
    'MISSENSE',
    'INFRAME',
    'FUSION',
    'AMP',
    'GAIN',
    'HETLOSS',
    'HMODEL',
    'UP',
    'DOWN'
]

COLORSCALE_COLORS_OPT = [
    '',
    '#440154',
    '#472d7b',
    '#3b528b',
    '#2c728e',
    '#21918c',
    '#28ae80',
    '#5ec962',
    '#addc30',
    '#fde725'
]

TRIGGER_KEY = 'trigger'
PADDING_KEY = 'padding'
COLORSCALE_KEY = 'colorscale'
COLORSCALE_MUT_KEY = 'colorscale-mut'
COLORSCALE_COL_KEY = 'colorscale-col'


def description():
    return 'View multiple genomic alternations with an interactive heatmap.'


def header_colors():
    return {
        'bg_color': '#84CFDB',
        'font_color': 'white',
    }


def layout():
    return html.Div(id='oncoprint-body', children=[
        html.Div([
            html.Div([
                dash_bio.OncoPrint(
                    id='oncoprint-chart',
                    data=dataset3
                ),
            ], className='oncoprint-card eight columns'),
            html.Div([
                dcc.Tabs(
                    id='oncoprint-tabs',
                    value='oncoprint-tab-select',
                    children=[
                        dcc.Tab(
                            label='Select',
                            value='oncoprint-tab-select',
                            children=[
                                html.Div([
                                    html.H4(
                                        "Select Dataset"
                                    ),
                                    dcc.Dropdown(
                                        id='oncoprint-dropdown',
                                        className='oncoprint-select',
                                        options=[
                                            {
                                                'label': '{}.json'.format(ds),
                                                'value': ds
                                            }
                                            for ds in DATASETS
                                        ],
                                        value='dataset3',
                                    ),
                                ], className='oncoprint-subcard'),
                                html.Div([
                                    html.H4(
                                        "Hover/Click/Event Data"
                                    ),
                                    dcc.Textarea(
                                        id="oncoprint-events",
                                        placeholder="Hover or click on data to see it here.",
                                        value="Hover or click on data to see it here.",
                                        className="oncoprint-events",
                                    ),
                                ], className='oncoprint-subcard'),
                                html.Div([
                                    html.H4(
                                        "What is OncoPrint?"
                                    ),
                                    html.P(
                                        """
                                        The OncoPrint component is used to view multiple genetic
                                        alteration events through an interactive and zoomable
                                        heatmap. It is a React/Dash port of the popular
                                        oncoPrint() function from the BioConductor R
                                        package. Under the hood, the rendering is done using
                                        Plotly.js built upon D3. Plotly's interactivity allows
                                        the user to bind clicks and hovers to genetic events,
                                        allowing the user to create complex bioinformatic apps
                                        or workflows that rely on crossfiltering.
                                        """
                                    ),
                                    html.P(
                                        """
                                        Read more about the component here:
                                        https://github.com/plotly/react-oncoprint
                                        """
                                    ),
                                ], className='oncoprint-subcard'),
                            ],
                        ),
                        dcc.Tab(
                            label='Customize',
                            value='oncoprint-tab-customize',
                            children=[
                                html.Div([
                                    html.H4('Layout'),
                                    html.Hr(className='oncoprint-separator'),
                                    html.Div(
                                        className='oncoprint-settings',
                                        children=[
                                            html.H6("Overview"),
                                            dcc.RadioItems(
                                                id='oncoprint-show-overview-radio',
                                                className='oncoprint-radio',
                                                options=[
                                                    {'label': 'Show', 'value': True},
                                                    {'label': 'Hide', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='oncoprint-settings',
                                        children=[
                                            html.H6("Legend"),
                                            dcc.RadioItems(
                                                id='oncoprint-show-legend-radio',
                                                className='oncoprint-radio',
                                                options=[
                                                    {'label': 'Show ', 'value': True},
                                                    {'label': 'Hide ', 'value': False},
                                                ],
                                                value=True,
                                                labelStyle={
                                                    'display': 'inline-block',
                                                    'margin-right': '8px',
                                                },
                                            ),
                                        ],
                                    ),
                                    html.Div(
                                        className='oncoprint-settings',
                                        children=[
                                            html.H6("Padding"),
                                            html.P(
                                                'Adjust the padding (as percentage) '
                                                'between two tracks.'
                                            ),
                                            dcc.Slider(
                                                className='oncoprint-slider',
                                                id='oncoprint-padding-input',
                                                value=0.05,
                                                min=0,
                                                max=0.1,
                                                step=0.01,
                                                marks={
                                                    '0': '0',
                                                    '0.02': '0.02',
                                                    '0.04': '0.04',
                                                    '0.06': '0.06',
                                                    '0.08': '0.08',
                                                    '0.1': '0.1',
                                                },
                                            ),
                                        ],
                                    ),
                                ], className='oncoprint-subcard'),
                                html.Div([
                                    html.H4('Colorscale'),
                                    html.Hr(className='oncoprint-separator'),
                                    html.Div(
                                        className='oncoprint-settings',
                                        children=[
                                            html.H6("Track color"),
                                            html.P(
                                                'Change the default background '
                                                'color for the tracks.'
                                            ),
                                            dcc.Dropdown(
                                                id='oncoprint-tracks-color-dropdown',
                                                options=[
                                                    {'label': col_code,
                                                     'value': col_code}
                                                    for col_code in
                                                    TRACKS_COLORS_OPT
                                                ],
                                                value=TRACKS_COLORS_OPT[0],
                                            ),
                                        ],
                                    ),
                                    html.Hr(className='oncoprint-separator'),
                                    html.H6("Mutation colors"),
                                    html.P(
                                        "Select a mutation type and a color "
                                        "to customize its look."
                                    ),
                                    html.Div(
                                        className='oncoprint-half-container',
                                        children=[
                                            html.Div(
                                                className='oncoprint-half-settings',
                                                children=[
                                                    html.H6("Mutation type"),
                                                    dcc.Dropdown(
                                                        id='oncoprint-colorscale-mutation-dropdown',
                                                        options=[
                                                            {'label': mut_type, 'value': mut_type}
                                                            for mut_type in COLORSCALE_MUTATIONS_OPT
                                                        ],
                                                        value=COLORSCALE_MUTATIONS_OPT[0],
                                                    ),
                                                ],
                                            ),
                                            html.Div(
                                                className='oncoprint-half-settings',
                                                children=[
                                                    html.H6("Color"),
                                                    dcc.Dropdown(
                                                        id='oncoprint-colorscale-color-dropdown',
                                                        options=[
                                                            {'label': col_code, 'value': col_code}
                                                            for col_code in COLORSCALE_COLORS_OPT
                                                        ],
                                                        value=COLORSCALE_COLORS_OPT[0],
                                                    ),
                                                ],
                                            ),
                                        ],
                                    ),
                                ], className='oncoprint-subcard'),
                            ],
                        ),
                    ],
                ),
            ], className='oncoprint-card four columns'),
        ], className='oncoprint-wrapper row'),
        dcc.Store(id='oncoprint-store'),
    ])


def callbacks(app):

    @app.callback(
        Output('oncoprint-store', 'data'),
        [
            Input('oncoprint-padding-input', 'value'),
            Input('oncoprint-colorscale-mutation-dropdown', 'value'),
            Input('oncoprint-colorscale-color-dropdown', 'value'),
        ],
        [
            State('oncoprint-store', 'data'),
        ],
    )
    def update_data_store(padding_val, mut_type, mut_col, stored_data):
        if stored_data is None:
            stored_data = {
                PADDING_KEY: '',
                COLORSCALE_KEY: {},
                TRIGGER_KEY: '',
            }

        if padding_val != stored_data[PADDING_KEY]:
            stored_data[PADDING_KEY] = padding_val
            stored_data[TRIGGER_KEY] = PADDING_KEY

        if mut_type not in stored_data[COLORSCALE_KEY]:
            stored_data[COLORSCALE_KEY][mut_type] = mut_col

        else:
            if mut_col != stored_data[COLORSCALE_KEY][mut_type]:
                stored_data[COLORSCALE_KEY][mut_type] = mut_col
                stored_data[TRIGGER_KEY] = COLORSCALE_COL_KEY
            else:
                stored_data[TRIGGER_KEY] = COLORSCALE_MUT_KEY

        return stored_data

    # Handle event data
    @app.callback(
        Output("oncoprint-events", "value"),
        [Input("oncoprint-chart", "eventDatum")],
    )
    def event_data_select(data):
        return str(data)

    # Render main chart
    @app.callback(
        Output('oncoprint-chart', 'data'),
        [Input('oncoprint-dropdown', 'value')],
    )
    def update_chart(dropdown):
        return DATASETS[dropdown]

    # Customization callbacks
    @app.callback(
        Output('oncoprint-chart', 'showlegend'),
        [Input('oncoprint-show-legend-radio', 'value')],
    )
    def toggle_legend(val):
        return val

    @app.callback(
        Output('oncoprint-chart', 'showoverview'),
        [Input('oncoprint-show-overview-radio', 'value')],
    )
    def toggle_overview(val):
        return val

    @app.callback(
        Output('oncoprint-chart', 'backgroundcolor'),
        [Input('oncoprint-tracks-color-dropdown', 'value')],
    )
    def change_tracks_colors(val):
        return val

    @app.callback(
        Output('oncoprint-chart', 'padding'),
        [Input('oncoprint-store', 'data')],
    )
    def change_padding(data):
        return data[PADDING_KEY]

    @app.callback(
        Output('oncoprint-chart', 'colorscale'),
        [Input('oncoprint-store', 'data')],
    )
    def update_colorscale(data):
        return data[COLORSCALE_KEY]
