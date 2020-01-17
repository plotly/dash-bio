import os
import json
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_daq as daq
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}

DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

# Datasets
with open(os.path.join(DATAPATH, 'dataset1.json'), encoding='utf-8') as data_file:
    dataset1 = json.loads(data_file.read())

with open(os.path.join(DATAPATH, 'dataset2.json'), encoding='utf-8') as data_file:
    dataset2 = json.loads(data_file.read())

with open(os.path.join(DATAPATH, 'dataset3.json'), encoding='utf-8') as data_file:
    dataset3 = json.loads(data_file.read())

with open(os.path.join(DATAPATH, 'cBioPortalData.json'), encoding='utf-8') as data_file:
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
        'bg_color': '#0F5BA7',
        'font_color': 'white',
    }


def layout():
    return html.Div(id='oncoprint-body', className='app-body', children=[

        dcc.Loading(className='dashbio-loading', children=dash_bio.OncoPrint(
            id='oncoprint-chart',
            height=550,
            data=[]
        )),

        html.Div(id='oncoprint-control-tabs', className='control-tabs', children=[
            dcc.Tabs(
                id='oncoprint-tabs',
                value='what-is',
                children=[
                    dcc.Tab(
                        label='About',
                        value='what-is',
                        children=html.Div(className='control-tab', children=[
                            html.H4(className='what-is', children='What is OncoPrint?'),
                            html.P(
                                """
                                The OncoPrint component is used to view multiple genomic
                                alteration events through an interactive and zoomable
                                heatmap. It is a React/Dash port of the popular
                                oncoPrint() function from the Bioconductor R
                                package. Under the hood, the rendering is done with
                                D3 via Plotly.js. Plotly's interactivity allows
                                you to bind clicks and hovers to genetic events,
                                letting you create complex bioinformatics apps
                                or workflows that leverage crossfiltering.
                                """
                            ),
                            html.P(
                                """
                                Read more about the component here:
                                https://github.com/plotly/react-oncoprint
                                """
                            )
                        ])
                    ),
                    dcc.Tab(
                        label='Data',
                        value='data',
                        children=html.Div(className='control-tab', children=[
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Select dataset'
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
                                    value='cBioPortalData',
                                ),
                            ]),
                            html.Hr(
                                className='oncoprint-separator'
                            ),
                            html.Div([
                                html.H4('Event metadata'),
                                html.Div(
                                    id='oncoprint-events'
                                ),
                            ])

                        ])
                    ),
                    dcc.Tab(
                        label='View',
                        value='view',
                        children=html.Div(className='control-tab', children=[
                            html.H4('Layout'),
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Overview'
                                ),
                                daq.ToggleSwitch(
                                    id='oncoprint-show-overview',
                                    label=['hide', 'show'],
                                    color='#009DFF',
                                    size=35,
                                    value=True
                                ),
                            ]),
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Legend'
                                ),
                                daq.ToggleSwitch(
                                    id='oncoprint-show-legend',
                                    label=['hide', 'show'],
                                    color='#009DFF',
                                    size=35,
                                    value=True
                                ),
                            ]),
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='app-controls-name',
                                    children='Padding'
                                ),
                                dcc.Slider(
                                    className='control-slider',
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
                                html.Div(
                                    className='app-controls-desc',
                                    children='Adjust padding (as percentage) '
                                    'between two tracks.'
                                ),
                            ]),
                            html.Hr(className='oncoprint-separator'),
                            html.Div([
                                html.H4('Colors'),
                                html.P(
                                    'Change default background '
                                    'color for the tracks.'
                                ),
                                html.Div(className='app-controls-block', children=[
                                    html.Div(
                                        className='fullwidth-app-controls-name',
                                        children='Track color'
                                    ),
                                    daq.ColorPicker(
                                        id='oncoprint-tracks-color',
                                        value={'hex': '#AAAAAA'}
                                    )
                                ]),
                                html.Hr(className='oncoprint-separator'),
                                html.H6("Mutation colors"),
                                html.P(
                                    "Select a mutation type and a color "
                                    "to customize its look."
                                ),
                                html.Div(className='app-controls-block', children=[
                                    html.Div(
                                        className='app-controls-name',
                                        children='Mutation type'
                                    ),
                                    dcc.Dropdown(
                                        id='oncoprint-colorscale-mutation-dropdown',
                                        options=[
                                            {'label': mut_type, 'value': mut_type}
                                            for mut_type in COLORSCALE_MUTATIONS_OPT
                                        ],
                                        value=COLORSCALE_MUTATIONS_OPT[0],
                                    ),
                                ]),
                                html.Div(className='app-controls-block', children=[
                                    html.Div(
                                        className='app-controls-name',
                                        children='Mutation color'
                                    ),
                                    daq.ColorPicker(
                                        id='oncoprint-mutation-color',
                                        value={'hex': COLORSCALE_COLORS_OPT[0]}
                                    )
                                ])
                            ])
                        ])
                    )
                ]
            )
        ]),
        dcc.Store(id='oncoprint-store'),
    ]),


def callbacks(_app):

    @_app.callback(
        Output('oncoprint-store', 'data'),
        [
            Input('oncoprint-padding-input', 'value'),
            Input('oncoprint-colorscale-mutation-dropdown', 'value'),
            Input('oncoprint-mutation-color', 'value'),
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

        if mut_col is None or 'hex' not in mut_col.keys():
            mut_col = {'hex': stored_data[COLORSCALE_KEY][mut_type]}

        mut_col = mut_col['hex']

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
    @_app.callback(
        Output("oncoprint-events", "children"),
        [Input("oncoprint-chart", "eventDatum")],
    )
    def event_data_select(data):
        if data is not None and len(str(data)) > 0:
            data = json.loads(data)
            return [
                html.Div('{}: {}'.format(
                    str(key.replace(
                        'eventType', 'event type').replace(
                            'curveNumber', 'curve number').title()),
                    str(data[key]).replace('<br>', ' - '))) for key in data.keys()
            ]
        return 'Hover over or click on a data point on the graph \
        to see it here.'

    # Render main chart
    @_app.callback(
        Output('oncoprint-chart', 'data'),
        [Input('oncoprint-dropdown', 'value')],
    )
    def update_chart(dropdown):
        return DATASETS[dropdown]

    # Customization callbacks
    @_app.callback(
        Output('oncoprint-chart', 'showlegend'),
        [Input('oncoprint-show-legend', 'value')],
    )
    def toggle_legend(val):
        return val

    @_app.callback(
        Output('oncoprint-chart', 'showoverview'),
        [Input('oncoprint-show-overview', 'value')],
    )
    def toggle_overview(val):
        return val

    @_app.callback(
        Output('oncoprint-chart', 'backgroundcolor'),
        [Input('oncoprint-tracks-color', 'value')],
    )
    def change_tracks_colors(val):
        if val is not None and 'hex' in val.keys():
            return val['hex']
        return '#AAAAAA'

    @_app.callback(
        Output('oncoprint-chart', 'padding'),
        [Input('oncoprint-store', 'data')],
    )
    def change_padding(data):
        return data[PADDING_KEY]

    @_app.callback(
        Output('oncoprint-chart', 'colorscale'),
        [Input('oncoprint-store', 'data')],
    )
    def update_colorscale(data):
        return data[COLORSCALE_KEY]


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
