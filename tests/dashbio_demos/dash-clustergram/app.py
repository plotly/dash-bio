import base64
import os

import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_daq as daq

from dash_bio_utils import gene_expression_reader
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

color_palette = [
    'rgb(128, 0, 96)',
    'rgb(230, 115, 0)',
    'rgb(255, 191, 0)'
]

fig_options = dict(
    data=None, cluster='all',
    display_ratio=[0.3, 0.1],
    column_labels=None, row_labels=None,
    hidden_labels=['row'],
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
    center_values=False,
    log_transform=False,
    imputer_parameters={
        'strategy': 'mean',
        'missingValues': 'NaN',
        'axis': 1
    }
)


datasets = {
    'lungcancer': {
        'file': os.path.join(DATAPATH, 'GDS3627.soft'),
        'default_rows': 10,
        'default_cols': 10,
        'ignore_columns': [],
        'color_threshold': {
            'max_row': 50,
            'max_col': 20,
            'row': 10,
            'col': 4
        }
    },
    'prostatecancer': {
        'file': os.path.join(DATAPATH, 'GDS5373.soft'),
        'default_rows': 5,
        'default_cols': 5,
        'ignore_columns': [],
        'color_threshold': {
            'max_row': 20,
            'max_col': 20,
            'row': 5,
            'col': 5
        }
    },
    'transcription': {
        'file': os.path.join(DATAPATH, 'GSE18842.tsv'),
        'row_labels_source': 'ID_REF',
        'header_rows': 70,
        'header_cols': 1,
        'default_rows': 10,
        'ignore_columns': ['Gene ID'],
        'default_cols': 4,
        'color_threshold': {
            'max_row': 330,
            'max_col': 135,
            'row': 145,
            'col': 100
        }
    },
    'iris': {
        'file': os.path.join(DATAPATH, 'iris.tsv'),
        'row_labels_source': 'Num',
        'header_rows': 4,
        'header_cols': 2,
        'ignore_columns': ['Class'],
        'default_rows': 150,
        'default_cols': 4,
        'color_threshold': {
            'max_row': 7.5,
            'max_col': 60,
            'row': 3.5,
            'col': 34}
    },
    'mtcars': {
        'file': os.path.join(DATAPATH, 'mtcars.tsv'),
        'row_labels_source': 'model',
        'header_rows': 4,
        'header_cols': 1,
        'ignore_columns': [],
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

    return html.Div(id='clustergram-body', className='app-body', children=[

        dcc.Loading(className='dashbio-loading', children=html.Div(
            id='clustergram-wrapper',
            children=dcc.Graph(id='clustergram', style={'display': 'none'})
        )),

        html.Div(id='clustergram-control-tabs', className='control-tabs', children=[
            dcc.Tabs(id='clustergram-tabs', value='what-is', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='control-tab', children=[
                        html.H4(className='what-is', children='What is Clustergram?'),
                        html.P('Clustergram is a combination of a heatmap and '
                               'dendrograms that allows you to display '
                               'hierarchical clustering data. '
                               'Clusters on the dendrograms are highlighted in '
                               'one color if they comprise data points '
                               'that share some minimal level of correlation.'),
                        html.P('In the "Data" tab, you can select a preloaded '
                               'dataset to display or, alternatively, upload one '
                               'of your own. A sample dataset is also available '
                               'for download in the tab.'),
                        html.P('In the "Graph" tab, you can choose the '
                               'dimension(s) along which clustering will be '
                               'performed (row or column). You can also change '
                               'the threshold that determines the point at which '
                               'clusters are highlighted for the row and column '
                               'dendrograms, and choose which rows and columns '
                               'are used to compute the clustering.'),
                        html.P('In addition, you can highlight specific clusters '
                               'by adding annotations to the clustergram, and '
                               'choose whether to show or hide the labels for the '
                               'rows and/or columns.')
                    ])
                ),
                dcc.Tab(
                    label='Data',
                    value='datasets',
                    children=html.Div(className='control-tab', children=[

                        html.Div(
                            'Preloaded dataset',
                            title='Choose from some pre-loaded datasets ' +
                            'to view them on the heatmap.',
                            className='fullwidth-app-controls-name',
                        ),


                        dcc.Dropdown(
                            id='clustergram-datasets',
                            options=[
                                {'label': 'Anderson\'s Iris Data',
                                 'value': 'iris'},
                                {'label': 'mtcars',
                                 'value': 'mtcars'},
                                {'label': 'Prostate cancer',
                                 'value': 'prostatecancer'},
                                {'label': 'Lung cancer subtypes',
                                 'value': 'lungcancer'}
                            ],
                            value='prostatecancer'
                        ),

                        html.Br(),

                        html.Div(
                            'Upload dataset',
                            title='Upload your own dataset below.',
                            className='app-controls-name'
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
                                    className='control-upload',
                                    children=html.Div([
                                        "Drag and drop .soft files, or click \
                                        to select files."
                                    ]),
                                    accept='.soft'
                                ),
                            ],
                        ),

                        html.Div([
                            html.A(
                                html.Button(
                                    'Download sample .soft data',
                                    id='clustergram-download-sample-data',
                                    className='control-download'
                                ),
                                href=os.path.join('assets', 'sample_data', 'GDS5826.soft'),
                                download='GDS5826.soft'
                            )
                        ]),
                        html.Hr(),
                        html.Div(
                            id='clustergram-info'
                        ),
                    ])
                ),
                dcc.Tab(
                    label='Graph',
                    value='graph',
                    children=[html.Div(className='control-tab', children=[
                        html.Div(className='app-controls-block', children=[
                            html.Div(
                                'Cluster by:',
                                title='Calculate dendrogram for row data, column '
                                'data, or both.',
                                className='app-controls-name'
                            ),
                            dcc.Dropdown(
                                id='cluster-checklist',
                                options=[
                                    {'label': 'Row', 'value': 'row'},
                                    {'label': 'Column', 'value': 'col'}
                                ],
                                value=['row', 'col'],
                                multi=True
                            )
                        ]),
                        html.Div(className='app-controls-block', children=[
                            html.Div(
                                'Hide labels:',
                                title='Hide labels for the row and/or column ' +
                                'dendrograms.',
                                className='app-controls-name'
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
                        ]),

                        html.Hr(),

                        html.Div(className='app-controls-block', children=[
                            html.Div(
                                'Color threshold:',
                                className='app-controls-name'
                            ),
                            html.Div(
                                className='app-controls-desc',
                                children='Change the threshold level that is used to ' +
                                'determine separate clusters.',
                            ),
                        ]),

                        html.Br(),

                        html.Div(
                            id='threshold-wrapper',
                            children=[
                                'Column: ',
                                dcc.Slider(
                                    id='column-threshold',
                                    className='control-slider',
                                    min=0,
                                    max=20,
                                    step=0.5,
                                    value=10
                                ),
                                html.Br(),
                                'Row: ',
                                dcc.Slider(
                                    id='row-threshold',
                                    className='control-slider',
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
                            id='add-group-markers',
                            children=[
                                html.Div(className='app-controls-block', children=[
                                    html.Div(
                                        className='app-controls-name',
                                        children='Annotations:'
                                    ),
                                    html.Button(
                                        id='remove-all-group-markers',
                                        children='Remove all',
                                        n_clicks=0,
                                        n_clicks_timestamp=0
                                    ),

                                    html.Div(className='app-controls-desc', children=[
                                        'Annotate your heatmap by labeling clusters; '
                                        'below, you can choose a color for the annotation, '
                                        'as well as text for the annotation. Then, click '
                                        'on the row cluster or column cluster that you '
                                        'wish to annotate.']),
                                ]),
                                daq.ColorPicker(
                                    id='clustergram-annot-color',
                                    value={'hex': color_palette[0]},
                                    size=315
                                ),
                                dcc.Input(
                                    id='annotation',
                                    placeholder='annotation text',
                                    type='text',
                                    value=''
                                ),
                            ]
                        ),

                        html.Br(),

                        html.Hr(),

                        html.Div(className='app-controls-block', children=[
                            html.Div(
                                'Rows to display:',
                                title='Select a subset of rows from the uploaded ' +
                                'or preloaded dataset to compute clustering on.',
                                className='fullwidth-app-controls-name'
                            ),

                            dcc.Dropdown(
                                id='selected-rows',
                                multi=True,
                                value=[]
                            )
                        ]),

                        html.Div(className='app-controls-block', children=[
                            html.Div(
                                'Columns to display:',
                                title='Select a subset of columns from the uploaded ' +
                                'or preloaded dataset to compute clustering on.',
                                className='fullwidth-app-controls-name'
                            ),
                            dcc.Dropdown(
                                id='selected-columns',
                                multi=True,
                                value=[]
                            ),
                        ])
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
                id='curves-dict'
            ),

            dcc.Store(
                id='group-markers'
            ),
        ])
    ])


def callbacks(_app):

    @_app.callback(
        Output('data-meta-storage', 'data'),
        [Input('file-upload', 'contents'),
         Input('file-upload', 'filename'),
         Input('clustergram-datasets', 'value')]
    )
    def store_file_meta_data(
            contents, filename, dataset_name
    ):
        desc = ''
        subsets = []
        row_options = []
        col_options = []
        if dataset_name is not None:
            dataset = datasets[dataset_name]

            if dataset['file'].endswith('.tsv'):
                desc, row_options, col_options = \
                    gene_expression_reader.read_tsv_file(
                        filepath=dataset['file'],
                        index_column=dataset['row_labels_source'],
                        ignore_columns=dataset['ignore_columns']
                    )
                subsets = None

            elif dataset['file'].endswith('.soft'):
                desc, subsets, row_options, col_options = \
                    gene_expression_reader.read_soft(dataset['file'])

        elif contents is not None:
            content_type, content_string = contents.split(',')
            decoded = base64.b64decode(content_string).decode('UTF-8')

            try:
                desc, subsets, row_options, col_options = \
                    gene_expression_reader.read_soft(
                        decoded,
                        is_datafile=False
                    )
            except Exception:
                pass

        return {
            'desc': desc,
            'subsets': subsets,
            'row_options': row_options,
            'col_options': col_options
        }

    @_app.callback(
        Output('row-threshold', 'value'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_row_threshold_value(dataset_name, contents):
        if dataset_name is None:
            return 0
        return datasets[dataset_name]['color_threshold']['row']

    @_app.callback(
        Output('column-threshold', 'value'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_col_threshold_value(dataset_name, contents):
        if dataset_name is None:
            return 0
        return datasets[dataset_name]['color_threshold']['col']

    @_app.callback(
        Output('row-threshold', 'max'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_row_threshold_max(dataset_name, contents):
        if dataset_name is None:
            return 20
        return datasets[dataset_name]['color_threshold']['max_row']

    @_app.callback(
        Output('column-threshold', 'max'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_col_threshold_max(dataset_name, contents):
        if dataset_name is None:
            return 20
        return datasets[dataset_name]['color_threshold']['max_col']

    # store figure options

    @_app.callback(
        Output('fig-options-storage', 'data'),
        [Input('cluster-checklist', 'value'),
         Input('row-threshold', 'value'),
         Input('column-threshold', 'value'),
         Input('selected-rows', 'value'),
         Input('selected-columns', 'value'),
         Input('hide-labels', 'value')],
        state=[State('clustergram-datasets', 'value'),
               State('file-upload', 'contents'),
               State('data-meta-storage', 'data')]
    )
    def store_fig_options(
            cluster_by,
            row_thresh, col_thresh,
            sel_rows, sel_cols,
            hidden_labels,
            dataset_name, contents,
            metadata
    ):
        if len(cluster_by) == 0:
            cluster_by = [None]

        row_labels = []
        for row in sel_cols:
            label = ''
            try:
                for subset in metadata['subsets']:
                    subset_list = ','.split(metadata[subset]['sample_id'])
                    if row in subset_list:
                        label += metadata[subset]['description'] + ' | '
            except Exception:
                pass

            if label == '':
                row_labels.append(row)
            else:
                row_labels.append(label)

        return {
            'cluster': 'all' if len(cluster_by) > 1 else cluster_by[0],
            'color_threshold': {'row': row_thresh,
                                'col': col_thresh},
            'row_labels': sel_rows,
            'column_labels': sel_cols,
            'optimal_leaf_order': True,
            'hidden_labels': hidden_labels,
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
            'center_values': dataset_name is None,
            'log_transform': False,
            'imputer_parameters': {
                'strategy': 'median',
                'missing_values': 'NaN',
                'axis': 1
            }
        }

    # add group marker
    @_app.callback(
        Output('group-markers', 'data'),
        [Input('clustergram', 'clickData'),
         Input('remove-all-group-markers', 'n_clicks')],
        state=[State('curves-dict', 'data'),
               State('annotation', 'value'),
               State('clustergram-annot-color', 'value'),
               State('group-markers', 'data')]
    )
    def add_marker(
            click_data,
            remove_all,
            curves_dict,
            annotation,
            color,
            current_group_markers
    ):
        # remove all group markers, if necessary, or
        # initialize the group markers data
        ctx = dash.callback_context
        if ctx.triggered[0]['prop_id'].split('.')[0] == 'remove-all-group-markers':
            return {'row_group_marker': [],
                    'col_group_marker': []}

        if current_group_markers is None:
            current_group_markers = {'row_group_marker': [],
                                     'col_group_marker': []}

        if click_data is not None:
            curve_clicked = str(click_data['points'][0]['curveNumber'])
            if curves_dict is not None and curve_clicked in curves_dict.keys():
                cluster_number, cluster_dimension = \
                    curves_dict[curve_clicked][1], curves_dict[curve_clicked][0]

            # otherwise, add the appropriate marker
            marker = dict()

            try:
                marker['group'] = int(cluster_number)
                marker['annotation'] = annotation
                marker['color'] = color['hex']

                current_group_markers[
                    '{}_group_marker'.format(cluster_dimension)
                ].append(marker)
            except ValueError:
                pass
            except UnboundLocalError:
                pass

        return current_group_markers

    # description information

    @_app.callback(
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
                info = data['desc'][key]
                if isinstance(info, list):
                    info = info[0]
                infoContent.append(html.P("{}: {}".format(
                    key.replace('_', ' ').title(), info
                )))
        except Exception as e:
            infoContent.append(html.P("Exception: {}".format(e)))

        return infoContent

    # calculate and display clustergram

    @_app.callback(
        [Output('clustergram-wrapper', 'children'),
         Output('curves-dict', 'data'),
         Output('computed-traces', 'data')],
        [Input('fig-options-storage', 'modified_timestamp'),
         Input('group-markers', 'data'),
         Input('selected-rows', 'value'),
         Input('selected-columns', 'value')],
        state=[State('fig-options-storage', 'data'),
               State('clustergram-datasets', 'value'),
               State('file-upload', 'contents'),
               State('file-upload', 'filename'),
               State('computed-traces', 'data')]
    )
    def display_clustergram(
            _,
            group_markers,
            sel_rows, sel_cols,
            fig_opts,
            dataset_name,
            contents, filename,
            computed_traces
    ):
        ctx = dash.callback_context
        adding_grp_marker = ctx.triggered[0]['prop_id'].split('.')[0] == 'group-markers'

        wrapper_content = ''
        curves = None
        comp_traces = computed_traces

        if len(sel_rows) < 2 or len(sel_cols) < 2 and \
           dataset_name is None and contents is None:
            wrapper_content = html.Div(
                'No data have been selected to display. Please upload a file \
                or select a preloaded file from the dropdown, then select at \
                least two columns and two rows.',
                style={
                    'padding': '40px',
                    'font-size': '20pt'
                }
            )
            return wrapper_content, curves, comp_traces
        if fig_opts['cluster'] is None or len(fig_opts['cluster']) == 0:
            wrapper_content = html.Div(
                'No dimension has been selected along which to perform \
                clustering. \
                Please select at least one option from the dropdown.',
                style={
                    'padding': '30px',
                    'font-size': '20pt'
                }
            )
            return wrapper_content, curves, comp_traces

        if dataset_name is not None:
            dataset = datasets[dataset_name]

            if dataset['file'].endswith('.tsv'):
                data = gene_expression_reader.read_tsv_file(
                    filepath=dataset['file'],
                    rows=sel_rows,
                    columns=sel_cols,
                    ignore_columns=dataset['ignore_columns'],
                    index_column=dataset['row_labels_source'],
                    return_filtered_data=True
                )
            elif dataset['file'].endswith('.soft'):
                data = gene_expression_reader.read_soft(
                    dataset['file'],
                    return_filtered_data=True,
                    rows=sel_rows,
                    columns=sel_cols
                )

        elif contents is not None and dataset_name is None:
            content_type, content_string = contents.split(',')
            decoded = base64.b64decode(content_string).decode('UTF-8')

            try:
                data = gene_expression_reader.read_soft(
                    decoded,
                    is_datafile=False,
                    return_filtered_data=True,
                    rows=sel_rows,
                    columns=sel_cols
                )
            except Exception:
                data = None

        if group_markers is not None:
            fig_opts['row_group_marker'] = group_markers['row_group_marker']
            fig_opts['col_group_marker'] = group_markers['col_group_marker']

        try:
            # don't recompute the dendrogram traces if we're just adding a group
            # marker
            if adding_grp_marker and computed_traces is not None:
                fig, curves = dash_bio.Clustergram(
                    generate_curves_dict=True,
                    computed_traces=computed_traces,
                    data=data,
                    **fig_opts
                )
            else:
                fig, curves, comp_traces = dash_bio.Clustergram(
                    generate_curves_dict=True,
                    return_computed_traces=True,
                    data=data,
                    **fig_opts
                )
            wrapper_content = dcc.Graph(
                id='clustergram',
                figure=fig
            )

        except IndexError:
            wrapper_content = "Loading data..."
        except ValueError:
            wrapper_content = "Loading data..."
        except Exception as e:
            wrapper_content = "There was an error: {}".format(e)

        return wrapper_content, curves, comp_traces

    # update row and column options

    @_app.callback(
        Output('selected-rows', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_row_options(_, data):
        if data is not None:
            return [{'label': r, 'value': r} for r in data['row_options']]
        return []

    @_app.callback(
        Output('selected-columns', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_col_options(_, data):
        if data is not None:
            return [{'label': c, 'value': c} for c in data['col_options']]
        return []

    # update row and column selections

    @_app.callback(
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

    @_app.callback(
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

    @_app.callback(
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

    @_app.callback(
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
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
