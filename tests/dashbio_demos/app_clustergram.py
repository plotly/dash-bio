import base64
import os
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_bio
from dash_bio.utils import gene_expression_reader

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "clustergram_")

color_palette = [
    'rgb(128, 0, 96)',
    'rgb(230, 115, 0)',
    'rgb(255, 191, 0)'
]

fig_options = dict(
    data=None, cluster='all',
    display_ratio=[0.3, 0.1],
    column_labels=None, row_labels=None,
    hide_labels=['row'],
    color_threshold=dict(row=9, col=35),
    height=650, width=900,
    color_map=[
        [0.0, color_palette[0]],
        [0.5, color_palette[1]],
        [1.0, color_palette[2]]
    ],
    color_list={
        'row': [color_palette[0], color_palette[1], color_palette[2]],
        'col': [color_palette[1], color_palette[2], color_palette[0]],
        'bg': 'rgb(255,255,255)'
    },
    annotation_font=dict(
        color='white',
        size=10
    ),
    tick_font=dict(
        size=7,
        color='rgb(200,200,200)'
    ),
    optimal_leaf_order=True,
    symmetric_value=False,
    log_transform=True,
    imputer_parameters={
        'strategy': 'mean',
        'missingValues': 'NaN',
        'axis': 1
    }
)


datasets = {
    'transcription': {
        'file': '{}E-GEOD-38612-query-results.tpms.tsv'.format(DATAPATH),
        'row_labels_source': 'Gene Name',
        'header_rows': 5,
        'header_cols': 2,
        'default_rows': 10,
        'default_cols': 4,
        'color_threshold': {
            'max_row': 330,
            'max_col': 135,
            'row': 145,
            'col': 100
        }
    },
    'iris': {
        'file': '{}iris.tsv'.format(DATAPATH),
        'row_labels_source': 'Num',
        'header_rows': 4,
        'header_cols': 2,
        'default_rows': 150,
        'default_cols': 4,
        'color_threshold': {
            'max_row': 7.5,
            'max_col': 60,
            'row': 3.5,
            'col': 34}
    },
    'mtcars': {
        'file': '{}mtcars.tsv'.format(DATAPATH),
        'row_labels_source': 'model',
        'header_rows': 4,
        'header_cols': 1,
        'default_rows': 32,
        'default_cols': 11,
        'color_threshold': {
            'max_row': 430,
            'max_col': 1460,
            'row': 215,
            'col': 660
        }
    }
}


def header_colors():
    return {
        'bg_color': '#232323',
        'font_color': 'white'
    }


def description():
    return 'Display hierarchical clustering and a heatmap with this clustergram. \
    Perfect for visualization of gene expression data.'


def layout():

    return html.Div(id='clustergram-body', children=[

        html.Div(
            id='clustergram-wrapper'
        ),

        html.Div(id='clustergram-control-tabs', children=[
            dcc.Tabs(id='clustergram-tabs', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='clustergram-tab', children=[
                        html.P('Gene expression data and heatmap with dendrogram.')
                    ])
                ),
                dcc.Tab(
                    label='Data',
                    value='datasets',
                    children=html.Div(className='clustergram-tab', children=[
                        html.Div(
                            id='clustergram-info'
                        ),

                        html.Hr(),

                        html.Div(
                            'Preloaded dataset',
                            title='Choose from some pre-loaded datasets ' +
                            'to view them on the heatmap.',
                            className='clustergram-option-name'
                        ),


                        dcc.Dropdown(
                            id='clustergram-datasets',
                            options=[
                                {'label': 'Anderson\'s Iris Data',
                                 'value': 'iris'},
                                {'label': 'mtcars',
                                 'value': 'mtcars'},
                                {'label': 'Arabidopsis roots, leaves, \
                                flowers and siliques',
                                 'value': 'transcription'},
                            ],
                            value='iris'
                        ),

                        html.Br(),

                        html.Div(
                            'Upload dataset',
                            title='Upload your own dataset below.',
                            className='clustergram-option-name'
                        ),

                        html.Div(
                            id='file-upload-name'
                        ),

                        html.Div(
                            id='clustergram-file-upload-container',
                            title='Upload your own dataset here.',
                            children=[
                                dcc.Upload(
                                    id='file-upload',
                                    children=html.Div([
                                        "Drag and drop .tsv files, or click \
                                        to select files."
                                    ])
                                )
                            ],
                        ),

                        html.Div(
                            'Name of index column in uploaded dataset',
                            title='If a dataset was uploaded, enter the name of ' +
                            'the column to use as index.',
                            className='clustergram-option-name'
                        ),
                        html.Br(),
                        dcc.Input(
                            id='row-labels-source',
                            type='text',
                            value='Gene Name'
                        ),

                    ])
                ),
                dcc.Tab(
                    label='Graph',
                    value='display-options',
                    children=[html.Div(className='clustergram-tab', children=[
                        html.Div(
                            'Cluster by:',
                            title='Calculate dendrogram for row data, column '
                            'data, or both.',
                            className='clustergram-option-name'
                        ),
                        dcc.Dropdown(
                            id='cluster-checklist',
                            options=[
                                {'label': 'Row', 'value': 'row'},
                                {'label': 'Column', 'value': 'col'}
                            ],
                            value=['row', 'col'],
                            multi=True
                        ),

                        html.Br(),

                        html.Div(
                            'Hide labels:',
                            title='Hide labels for the row and/or column ' +
                            'dendrograms.',
                            className='clustergram-option-name'
                        ),
                        dcc.Dropdown(
                            id='hide-labels',
                            options=[
                                {'label': 'Row', 'value': 'row'},
                                {'label': 'Column', 'value': 'col'}
                            ],
                            multi=True,
                            value=['row']
                        ),

                        html.Hr(),

                        html.Div(
                            'Change color threshold',
                            title='Change the threshold level that is used to ' +
                            'determine separate clusters.',
                            className='clustergram-option-name'
                        ),

                        html.Br(),

                        html.Div(
                            id='threshold-wrapper',
                            title='Annotate your heatmap by labelling clusters; ' +
                            'hover over the clusters on the dendrogram to get their ' +
                            'index.',
                            children=[
                                'Column: ',
                                dcc.Slider(
                                    id='column-threshold',
                                    min=0,
                                    max=20,
                                    step=0.5,
                                    value=10
                                ),
                                html.Br(),
                                'Row: ',
                                dcc.Slider(
                                    id='row-threshold',
                                    min=0,
                                    max=20,
                                    step=0.5,
                                    value=10
                                )
                            ]
                        ),

                        html.Br(),

                        html.Hr(),

                        html.Div(
                            'Add or remove all group markers:',
                            className='clustergram-option-name'
                        ),

                        html.Br(),

                        html.Div(
                            id='add-group-markers',
                            title='Annotate your heatmap by labelling clusters; ' +
                            'hover over the clusters on the dendrogram to get their ' +
                            'index.',
                            children=[
                                dcc.Dropdown(
                                    id='row-or-col-group',
                                    options=[
                                        {'label': 'Row group', 'value': 'row'},
                                        {'label': 'Column group', 'value': 'col'}
                                    ]
                                ),
                                dcc.Input(
                                    id='group-number',
                                    placeholder='group number',
                                    type='number',
                                    value=''
                                ),
                                dcc.Input(
                                    id='color',
                                    placeholder='color',
                                    type='text',
                                    value=''
                                ),
                                dcc.Input(
                                    id='annotation',
                                    placeholder='annotation',
                                    type='text',
                                    value=''
                                ),
                                html.Button(
                                    id='submit-group-marker',
                                    children='submit',
                                    n_clicks=0,
                                    n_clicks_timestamp=0
                                )
                            ]
                        ),

                        html.Button(
                            id='remove-all-group-markers',
                            children=[
                                "Remove"
                            ],
                            n_clicks=0,
                            n_clicks_timestamp=0
                        ),

                        html.Br(),
                        html.Hr(),

                        html.Div(
                            'Rows to display',
                            title='Select a subset of rows from the uploaded ' +
                            'or preloaded dataset to compute clustering on.',
                            className='clustergram-option-name'
                        ),

                        html.Br(),

                        dcc.Dropdown(
                            id='selected-rows',
                            multi=True,
                            value=[]
                        ),

                        html.Br(),

                        html.Div(
                            'Columns to display',
                            title='Select a subset of columns from the uploaded ' +
                            'or preloaded dataset to compute clustering on.',
                            className='clustergram-option-name'
                        ),
                        html.Br(),
                        dcc.Dropdown(
                            id='selected-columns',
                            multi=True,
                            value=[]
                        ),

                    ])]
                )
            ]),


            dcc.Store(
                id='data-meta-storage'
            ),

            dcc.Store(
                id='fig-options-storage'
            ),

            dcc.Store(
                id='computed-traces'
            ),

            dcc.Store(
                id='group-markers'
            ),
        ])
    ])


def callbacks(app):  # pylint: disable=redefined-outer-name

    @app.callback(
        Output('data-meta-storage', 'data'),
        [Input('file-upload', 'contents'),
         Input('file-upload', 'filename'),
         Input('clustergram-datasets', 'value')],
        state=[State('row-labels-source', 'value')]
    )
    def store_file_meta_data(
            contents, filename, dataset_name,
            row_labels_source
    ):
        if dataset_name is not None:
            dataset = datasets[dataset_name]

            _, desc, row_options, col_options = \
                gene_expression_reader.parse_tsv(
                    filepath=dataset['file'],
                    header_rows=dataset['header_rows'],
                    header_cols=dataset['header_cols'],
                    row_labels_source=dataset['row_labels_source']
                )
        elif contents is not None:
            content_type, content_string = contents.split(',')
            decoded = base64.b64decode(content_string).decode('UTF-8')
            if row_labels_source is None:
                row_labels_source = 'Gene Name'

            _, desc, row_options, col_options = \
                gene_expression_reader.parse_tsv(
                    contents=decoded,
                    row_labels_source=row_labels_source
                )
        else:
            desc, row_options, col_options = '', [], []
        return {
            'desc': desc,
            'row_options': row_options,
            'col_options': col_options
        }

    @app.callback(
        Output('row-threshold', 'value'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_row_threshold_value(dataset_name, contents):
        if dataset_name is None:
            return 0
        return datasets[dataset_name]['color_threshold']['row']

    @app.callback(
        Output('column-threshold', 'value'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_col_threshold_value(dataset_name, contents):
        if dataset_name is None:
            return 0
        return datasets[dataset_name]['color_threshold']['col']

    @app.callback(
        Output('row-threshold', 'max'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_row_threshold_max(dataset_name, contents):
        if dataset_name is None:
            return 20
        return datasets[dataset_name]['color_threshold']['max_row']

    @app.callback(
        Output('column-threshold', 'max'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_col_threshold_max(dataset_name, contents):
        if dataset_name is None:
            return 20
        return datasets[dataset_name]['color_threshold']['max_col']

    # store figure options

    @app.callback(
        Output('fig-options-storage', 'data'),
        [Input('cluster-checklist', 'value'),
         Input('row-threshold', 'value'),
         Input('column-threshold', 'value'),
         Input('selected-rows', 'value'),
         Input('selected-columns', 'value'),
         Input('hide-labels', 'value')],
        state=[State('clustergram-datasets', 'value'),
               State('file-upload', 'contents')]
    )
    def store_fig_options(
            cluster_by,
            row_thresh, col_thresh,
            sel_rows, sel_cols,
            hide_labels,
            dataset_name, contents
    ):
        if len(cluster_by) == 0:
            cluster_by = [None]
        return {
            'cluster': 'all' if len(cluster_by) > 1 else cluster_by[0],
            'color_threshold': {'row': row_thresh,
                                'col': col_thresh},
            'row_labels': sel_rows,
            'column_labels': sel_cols,
            'optimal_leaf_order': True,
            'hide_labels': hide_labels,
            'display_ratio': [0.3, 0.1],
            'height': 650, 'width': 900,
            'color_map': [
                [0.0, color_palette[0]],
                [0.5, color_palette[1]],
                [1.0, color_palette[2]]
            ],
            'color_list': {
                'row': [color_palette[0], color_palette[1], color_palette[2]],
                'col': [color_palette[1], color_palette[2], color_palette[0]],
                'bg': 'rgb(255,255,255)'
            },
            'annotation_font': {
                'color': 'white',
                'size': 10
            },
            'tick_font': {
                'color': 'rgb(200,200,200)',
                'size': 10
            },
            'symmetric_value': dataset_name is None,
            'log_transform': dataset_name is None,
            'imputer_parameters': {
                'strategy': 'median',
                'missing_values': 'NaN',
                'axis': 1
            }
        }

    # add group marker

    @app.callback(
        Output('group-markers', 'data'),
        [Input('submit-group-marker', 'n_clicks'),
         Input('remove-all-group-markers', 'n_clicks')],
        state=[State('row-or-col-group', 'value'),
               State('group-number', 'value'),
               State('annotation', 'value'),
               State('color', 'value'),
               State('submit-group-marker', 'n_clicks_timestamp'),
               State('remove-all-group-markers', 'n_clicks_timestamp'),
               State('group-markers', 'data')]
    )
    def add_marker(
            submit_nclicks, remove_all_nclicks,
            row_or_col, group_num, annotation, color,
            submit_time, remove_time,
            current_group_markers
    ):
        # remove all group markers, if necessary, or
        # initialize the group markers data
        if current_group_markers is None or remove_time > submit_time:
            current_group_markers = {'row_group_marker': [],
                                     'col_group_marker': []}

        if remove_time > submit_time:
            return current_group_markers

        # otherwise, add the appropriate marker
        marker = dict()
        try:
            marker['group'] = int(group_num)
            marker['annotation'] = annotation
            marker['color'] = color
        except ValueError:
            pass
        if row_or_col == 'row':
            current_group_markers['row_group_marker'].append(marker)
        elif row_or_col == 'col':
            current_group_markers['col_group_marker'].append(marker)

        return current_group_markers

    # description information

    @app.callback(
        Output('clustergram-info', 'children'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_description_info(_, data):
        if data is None:
            return []
        infoContent = [html.H4('Dataset information')]
        try:
            for key in data['desc']:
                infoContent.append(html.P("{}: {}".format(
                    key, data['desc'][key]
                )))
        except Exception as e:
            infoContent.append(html.P("Exception: {}".format(e)))

        return infoContent

    # calculate and display clustergram

    @app.callback(
        Output('clustergram-wrapper', 'children'),
        [Input('fig-options-storage', 'modified_timestamp'),
         Input('group-markers', 'data'),
         Input('selected-rows', 'value'),
         Input('selected-columns', 'value')],
        state=[State('fig-options-storage', 'data'),
               State('clustergram-datasets', 'value'),
               State('file-upload', 'contents'),
               State('file-upload', 'filename'),
               State('row-labels-source', 'value')]
    )
    def display_clustergram(
            _, group_markers,
            sel_rows, sel_cols,
            fig_opts,
            dataset_name,
            contents, filename,
            row_labels_source
    ):
        if len(sel_rows) < 2 or len(sel_cols) < 2 or fig_opts is None:
            return html.Div(
                'No data have been selected to display. Please upload a file \
                or select a preloaded file from the dropdown, then select at \
                least two columns and two rows.',
                style={
                    'padding': '30px',
                    'font-size': '20pt'
                }
            )
        if fig_opts['cluster'] is None:
            return html.Div(
                'No clustering dimension has been selected to display. Please \
                select at least one option from the dropdown.',
                style={
                    'padding': '30px',
                    'font-size': '20pt'
                }
            )

        if dataset_name is not None:
            dataset = datasets[dataset_name]

            data, _, _, _ = \
                gene_expression_reader.parse_tsv(
                    filepath=dataset['file'],
                    row_labels_source=dataset['row_labels_source'],
                    header_rows=dataset['header_rows'],
                    header_cols=dataset['header_cols'],
                    rows=sel_rows,
                    columns=sel_cols
                )

        elif contents is not None and dataset_name is None:
            content_type, content_string = contents.split(',')
            decoded = base64.b64decode(content_string).decode('UTF-8')

            if row_labels_source is None:
                row_labels_source = 'Gene Name'

            data, _, _, _ = \
                gene_expression_reader.parse_tsv(
                    contents=decoded,
                    row_labels_source=row_labels_source,
                    rows=sel_rows,
                    columns=sel_cols
                )

        if group_markers is not None:
            fig_opts['row_group_marker'] = group_markers['row_group_marker']
            fig_opts['col_group_marker'] = group_markers['col_group_marker']

        try:
            fig, _ = dash_bio.Clustergram(
                computed_traces=None,
                data=data,
                **fig_opts
            )

            return dcc.Graph(
                id='clustergram',
                figure=fig
            )

        except IndexError:
            return "Loading data..."
        except ValueError:
            return "Loading data..."
        except Exception as e:
            return "There was an error: {}".format(e)

    # update row and column options

    @app.callback(
        Output('selected-rows', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_row_options(_, data):
        if data is not None:
            return [{'label': r, 'value': r} for r in data['row_options']]
        return []

    @app.callback(
        Output('selected-columns', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_col_options(_, data):
        if data is not None:
            return [{'label': c, 'value': c} for c in data['col_options']]
        return []

    # update row and column selections

    @app.callback(
        Output('selected-rows', 'value'),
        [Input('data-meta-storage', 'modified_timestamp'),
         Input('selected-rows', 'options')],
        state=[State('clustergram-datasets', 'value'),
               State('file-upload', 'contents')]
    )
    def clear_rows(_, row_options, dataset_name, contents):
        # if loading in a non-default dataset, clear all row selections
        if dataset_name is None or row_options is None:
            return []
        row_options = [r['value'] for r in row_options]
        return row_options[:datasets[dataset_name]['default_rows']]

    @app.callback(
        Output('selected-columns', 'value'),
        [Input('data-meta-storage', 'modified_timestamp'),
         Input('selected-columns', 'options')],
        state=[State('clustergram-datasets', 'value'),
               State('file-upload', 'contents')]
    )
    def clear_cols(_, col_options, dataset_name, contents):
        if dataset_name is None or col_options is None:
            return []
        col_options = [c['value'] for c in col_options]
        return col_options[:datasets[dataset_name]['default_cols']]

    # show filename that was uploaded

    @app.callback(
        Output('file-upload-name', 'children'),
        [Input('file-upload', 'contents'),
         Input('file-upload', 'filename'),
         Input('clustergram-datasets', 'value')]
    )
    def show_uploaded_filename(contents, filename, dataset_name):
        if filename is not None and dataset_name is not None:
            return ['Please ensure that the "preloaded datasets" \
            dropdown is cleared to show data from the file:',
                    html.Br(),
                    filename]

        if filename is not None:
            return 'Successfully uploaded file: {}'.format(filename)
        return ''

    # clear preloaded dataset if there is a file upload(

    @app.callback(
        Output('clustergram-datasets', 'value'),
        [Input('file-upload', 'contents'),
         Input('file-upload', 'filename')],
        state=[State('clustergram-datasets', 'value')]
    )
    def clear_preloaded_on_upload(contents, filename, current):
        if contents is not None:
            return None
        return current


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
