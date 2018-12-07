from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_bio
from dash_bio.utils import geneExpressionReader
import base64


colorPalette = [
    'rgb(128, 0, 96)',
    'rgb(230, 115, 0)',
    'rgb(255, 191, 0)'
]

fig_options = dict(
    data=None, cluster='all',
    displayRatio=[0.3, 0.1],
    columnLabels=None, rowLabels=None,
    hideLabels=['row'],
    colorThreshold=dict(row=9, col=35),
    height=650, width=900,
    colorMap=[
        [0.0, colorPalette[0]],
        [0.5, colorPalette[1]],
        [1.0, colorPalette[2]]
    ],
    colorList={
        'row': [colorPalette[0], colorPalette[1], colorPalette[2]],
        'col': [colorPalette[1], colorPalette[2], colorPalette[0]],
        'bg': 'rgb(255,255,255)'
    },
    annotationFont=dict(
        color='white',
        size=10
    ),
    tickFont=dict(
        size=7,
        color='rgb(200,200,200)'
    ),
    optimalLeafOrder=True,
    symmetricValue=False,
    logTransform=True,
    imputeFunction={
        'strategy': 'mean',
        'missingValues': 'NaN',
        'axis': 1
    }
)


datasets = {
    'transcription': {
        'file': './tests/dash/sample_data/E-GEOD-38612-query-results.tpms.tsv',
        'rowLabelsSource': 'Gene Name',
        'headerRows': 5,
        'headerCols': 2,
        'defaultRows': 10,
        'defaultCols': 4,
        'colorThreshold': {
            'maxRow': 330,
            'maxCol': 135,
            'row': 145,
            'col': 100
        }
    }, 
    'iris': {
        'file': './tests/dash/sample_data/iris.tsv',
        'rowLabelsSource': 'Num',
        'headerRows': 4,
        'headerCols': 2,
        'defaultRows': 150,
        'defaultCols': 4,
        'colorThreshold': {
            'maxRow': 7.5,
            'maxCol': 60,
            'row': 3.5,
            'col': 34}
    },
    'mtcars': {
        'file': './tests/dash/sample_data/mtcars.tsv',
        'rowLabelsSource': 'model',
        'headerRows': 4,
        'headerCols': 1,
        'defaultRows': 32,
        'defaultCols': 11,
        'colorThreshold': {
            'maxRow': 430,
            'maxCol': 1460,
            'row': 215,
            'col': 660
        }
    }
}


def header_colors():
    return {
        'bg_color': '#3e0f2e',
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
        
        html.Div(
            id='clustergram-options', children=[

                html.Div(
                    'View preloaded dataset:',
                    className='clustergram-option-name'
                ),
                
                html.Br(),
                
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

                html.Div(
                    id='clustergram-file-upload-container',
                    children=[
                        dcc.Upload(
                            id='file-upload',
                            children=html.Div([
                                "Drag and drop .tsv files or select files."
                            ])
                        )
                    ],
                ),
                html.Div(
                    id='file-upload-name'
                ),

                html.Hr(),
                
                html.Div(
                    'Header of row labels column in uploaded dataset',
                    className='clustergram-option-name'
                ), 
                html.Br(),
                dcc.Input(
                    id='row-labels-source',
                    type='text',
                    value='Gene Name'
                ),
                html.Hr(),
                html.Div(
                    'Cluster by:',
                    className='clustergram-option-name'
                ), 
                html.Br(),
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
                    className='clustergram-option-name'
                ), 
                html.Br(),
                html.Div(
                    id='threshold-wrapper',
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

                html.Hr(),

                html.Div(
                    'Add or remove all group markers:',
                    className='clustergram-option-name'
                ),
                
                html.Br(),

                html.Div(
                    id='add-group-markers',
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

                html.Hr(),
                
                html.Div(
                    'Rows to display',
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
                    className='clustergram-option-name'
                ), 
                html.Br(),
                dcc.Dropdown(
                    id='selected-columns',
                    multi=True,
                    value=[]
                ),


            ]
        ),

        html.Div(
            id='clustergram-info',
            children=[""]
        ),

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

        html.Div(
            id='test'
        )
    ])


def callbacks(app):

    @app.callback(
        Output('data-meta-storage', 'data'), 
        [Input('file-upload', 'contents'),
         Input('file-upload', 'filename'),
         Input('clustergram-datasets', 'value')],
        state=[State('row-labels-source', 'value')]
    )
    def store_file_meta_data(
            contents, filename, dataset_name,
            rowLabelsSource
    ):
        if(dataset_name is not None):
            dataset = datasets[dataset_name]
            
            _, desc, rowOptions, colOptions = \
                geneExpressionReader.parse_tsv(
                    filepath=dataset['file'],
                    headerRows=dataset['headerRows'],
                    headerCols=dataset['headerCols'],
                    rowLabelsSource=dataset['rowLabelsSource']
                )
        elif(contents is not None):
            content_type, content_string = contents.split(',')
            decoded = base64.b64decode(content_string).decode('UTF-8')
            if(rowLabelsSource is None):
                rowLabelsSource = 'Gene Name'
                
            _, desc, rowOptions, colOptions = \
                geneExpressionReader.parse_tsv(
                    contents=decoded,
                    rowLabelsSource=rowLabelsSource
                )
        else:
            desc = '',
            rowOptions = [],
            colOptions = []
        return {
            'desc': desc,
            'rowOptions': rowOptions,
            'colOptions': colOptions
        }

    @app.callback(
        Output('row-threshold', 'value'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_row_threshold_value(dataset_name, contents):
        if dataset_name is None:
            return 0
        return datasets[dataset_name]['colorThreshold']['row']

    @app.callback(
        Output('column-threshold', 'value'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_col_threshold_value(dataset_name, contents):
        if dataset_name is None:
            return 0
        return datasets[dataset_name]['colorThreshold']['col']

    @app.callback(
        Output('row-threshold', 'max'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_row_threshold_max(dataset_name, contents):
        if dataset_name is None:
            return 20
        return datasets[dataset_name]['colorThreshold']['maxRow']
    
    @app.callback(
        Output('column-threshold', 'max'),
        [Input('clustergram-datasets', 'value'),
         Input('file-upload', 'contents')]
    )
    def update_col_threshold_max(dataset_name, contents):
        if dataset_name is None:
            return 20
        return datasets[dataset_name]['colorThreshold']['maxCol']

    
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
            clusterBy,
            rowThresh, colThresh,
            selRows, selCols,
            hideLabels,
            dataset_name, contents
    ):
        return {
            'cluster': 'all' if len(clusterBy) > 1 else clusterBy[0],
            'colorThreshold': {'row': rowThresh,
                               'col': colThresh},
            'rowLabels': selRows,
            'columnLabels': selCols,
            'optimalLeafOrder': True,
            'hideLabels': hideLabels,
            'displayRatio': [0.3, 0.1],
            'height': 650, 'width': 900,
            'colorMap': [
                [0.0, colorPalette[0]],
                [0.5, colorPalette[1]],
                [1.0, colorPalette[2]]
            ],
            'colorList': {
                'row': [colorPalette[0], colorPalette[1], colorPalette[2]],
                'col': [colorPalette[1], colorPalette[2], colorPalette[0]],
                'bg': 'rgb(255,255,255)'
            },
            'annotationFont': {
                'color': 'white',
                'size': 10
            },
            'tickFont': {
                'color': 'rgb(200,200,200)',
                'size': 10
            },
            'symmetricValue': False if dataset_name is not None else True,
            'logTransform': False if dataset_name is not None else True,
            'imputeFunction': {
                'strategy': 'median',
                'missingValues': 'NaN',
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
            submit_nclicks,  removeAll_nclicks,
            rowOrCol, groupNum, annotation, color,
            submit_time, remove_time,
            current_group_markers
    ):
        # remove all group markers, if necessary, or
        # initialize the group markers data
        if(current_group_markers is None or remove_time > submit_time):
            current_group_markers = {'rowGroupMarker': [],
                                     'colGroupMarker': []}

        if(remove_time > submit_time):
            return current_group_markers
            
        else:
            # otherwise, add the appropriate marker
            marker = dict()
            try:
                marker['group'] = int(groupNum)
                marker['annotation'] = annotation
                marker['color'] = color
            except ValueError:
                pass
            if(rowOrCol == 'row'):
                current_group_markers['rowGroupMarker'].append(marker)
            elif(rowOrCol == 'col'):
                current_group_markers['colGroupMarker'].append(marker)

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
        infoContent = [html.H3('Information')]
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
            selRows, selCols,
            fig_options,
            dataset_name,
            contents, filename,
            rowLabelsSource
    ):
        if(len(selRows) < 2 or len(selCols) < 2 or fig_options is None): 
            return html.Div(
                'No data have been selected to display. Please upload a file or \
                select a preloaded file from the dropdown, then select at least \
                two columns and two rows.',
                style={
                    'padding': '30px',
                    'font-size': '20pt'
                }
            )
        if (dataset_name is not None): 
            dataset = datasets[dataset_name]
   
            data, _, _, _ = \
                geneExpressionReader.parse_tsv(
                    filepath=dataset['file'],
                    rowLabelsSource=dataset['rowLabelsSource'],
                    headerRows=dataset['headerRows'],
                    headerCols=dataset['headerCols'],
                    rows=selRows,
                    columns=selCols
                )

        elif(contents is not None and dataset_name is None):
            content_type, content_string = contents.split(',')
            decoded = base64.b64decode(content_string).decode('UTF-8')
            
            if rowLabelsSource is None:
                rowLabelsSource = 'Gene Name'
                
            data, _, _, _ = \
                geneExpressionReader.parse_tsv(
                    contents=decoded,
                    rowLabelsSource=rowLabelsSource,
                    rows=selRows,
                    columns=selCols
                )
                    
        if group_markers is not None:                
            fig_options['rowGroupMarker'] = group_markers['rowGroupMarker']
            fig_options['colGroupMarker'] = group_markers['colGroupMarker']
        try:
            fig, _ = dash_bio.Clustergram(
                computed_traces=None,
                data=data,
                **fig_options
            )
            
            return dcc.Graph(
                id='clustergram',
                figure=fig
            )
        
        except Exception as e:
            return "There was an error: {}.".format(e) 

    # update row and column options
        
    @app.callback(
        Output('selected-rows', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_row_options(_, data):
        if data is not None: 
            return [{'label': r, 'value': r} for r in data['rowOptions']]
        return []
    
    @app.callback(
        Output('selected-columns', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_col_options(_, data):
        if data is not None: 
            return [{'label': c, 'value': c} for c in data['colOptions']]
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
        else:
            row_options = [r['value'] for r in row_options]
            return row_options[:datasets[dataset_name]['defaultRows']]
        
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
        else:
            col_options = [c['value'] for c in col_options]
            return col_options[:datasets[dataset_name]['defaultCols']]

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
            return ['Successfully uploaded file: ',
                    html.Br(),
                    filename]
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
