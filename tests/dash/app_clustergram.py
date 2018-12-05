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
    optimalLeafOrder=False,
    displayRatio=[0.3, 0.1],
    columnLabels=None, rowLabels=None,
    hideLabels=['row'],
    colorThreshold=dict(row=9, col=35),
    height=650, width=800,
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
        size=10,
        color='rgb(200,200,200)'
    ),
    symmetricValue=True,
    logTransform=True,
    imputeFunction={
        'strategy': 'median',
        'missingValues': 'NaN',
        'axis': 1
    }
)

computedTraces=None

# initialize app with some data
initialFile = './tests/dash/sample_data/E-GEOD-38612-query-results.tpms.tsv'

_, _, initialRows, initialCols = geneExpressionReader.parse_tsv(
    filepath=initialFile,
    rowLabelsSource='Gene Name'
)
# limit the number of initial selected rows for faster loading
initialRows = initialRows[:10]


datasets = {
    'initial': {
        'file': './tests/dash/sample_data/E-GEOD-38612-query-results.tpms.tsv',
        'rowLabelsSource': 'Gene Name',
        'headerRows': 5,
        'headerCols': 2},
    'iris': {
        'file': './tests/dash/sample_data/iris.tsv',
        'rowLabelsSource': 'Class',
        'headerRows': 1,
        'headerCols': 1},
    'khan': {
        'file': './tests/dash/sample_data/khan.tsv',
        'rowLabelsSource': 'Gene Description',
        'headerRows': 1,
        'headerCols': 1}
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
            id='clustergram-wrapper',
        ),

        
        html.Div(
            id='clustergram-options', children=[

                dcc.Dropdown(
                    id='clustergram-datasets',
                    options=[
                        {'label': 'Initial',
                         'value': 'initial'},
                        {'label': 'Anderson\s Iris Data',
                         'value': 'iris'},
                        {'label': 'Khan',
                         'value': 'khan'} 
                    ],
                    value='initial'
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
                html.Hr(),

                "Header of row labels column",
                html.Br(),
                dcc.Input(
                    id='row-labels-source',
                    type='text',
                    value='Gene Name'
                ),
                html.Hr(),
                
                "Rows to display",
                html.Br(),
                dcc.Dropdown(
                    id='selected-rows',
                    multi=True,
                    value=[]
                ),
                "Columns to display",
                html.Br(),
                dcc.Dropdown(
                    id='selected-columns',
                    multi=True,
                    value=[]
                ),
                html.Hr(),

                "Cluster by:",
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

                html.Hr(),

                "Change color threshold",
                html.Br(),
                html.Div(
                    id='threshold-wrapper',
                    children=[
                        dcc.Slider(
                            id='column-threshold',
                            min=0,
                            max=20,
                            step=0.5,
                            value=10
                        ),
                        html.Br(),
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

                "Add or remove all group markers:",
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
                )

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
         Input('clustergram-datasets', 'value')]
    )
    def store_file_meta_data(
            contents, filename, dataset_name
    ):
        print('getting data')
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
            _, desc, rowOptions, colOptions = \
                geneExpressionReader.parse_tsv(
                    contents=decoded,
                    rowLabelsSource='Gene Name'
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
        Output('fig-options-storage', 'data'),
        [Input('row-labels-source', 'value'),
         Input('cluster-checklist', 'value'),
         Input('row-threshold', 'value'),
         Input('column-threshold', 'value'),
         Input('selected-rows', 'value'),
         Input('selected-columns', 'value')]
    )
    def store_fig_options(
            rowLabelsSource, clusterBy,
            rowThresh, colThresh,
            selRows, selCols
    ):
        return {
            'cluster': 'all' if len(clusterBy) > 1 else clusterBy[0],
            'colorThreshold': {'row': rowThresh,
                               'col': colThresh},
            'rowLabels': selRows,
            'columnLabels': selCols,
            'optimalLeafOrder': False,
            'displayRatio': [0.3, 0.1],
            'height': 650, 'width': 800,
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
            'symmetricValue': True,
            'logTransform': True,
            'imputeFunction': {
                'strategy': 'median',
                'missingValues': 'NaN',
                'axis': 1
            }
        }
 
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

    @app.callback(
        Output('clustergram-info', 'children'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_description_info(_, data):
        print('gettin info')
        infoContent = [html.H3('Information')]
        try: 
            for key in data['desc']:
                infoContent.append(html.P("{}: {}".format(
                    key, data['desc'][key]
                )))
        except Exception:
            infoContent.append(html.P("Awaiting information..."))
        
        return infoContent

    @app.callback(
        Output('clustergram-wrapper', 'children'),
        [Input('fig-options-storage', 'modified_timestamp'),
         Input('file-upload', 'contents'),
         Input('file-upload', 'filename'),
         Input('clustergram-datasets', 'value'),
         Input('group-markers', 'data'),
         Input('selected-rows', 'value'),
         Input('selected-columns', 'value')],
        state=[State('fig-options-storage', 'data')]
    )
    def display_clustergram(
            _, contents, filename,
            dataset_name,
            group_markers,
            selRows, selCols,
            fig_options
    ):
        print('displaying clustergram')
        if(len(selRows) < 2 or len(selCols) < 2 or fig_options is None): 
            return html.Div(
                'No data have been selected to display. Please upload a file, \
                then select at least two columns and two rows.',
                style={
                    'padding': '30px',
                    'font-size': '20pt'
                }
            )

        if (dataset_name is not None):
            print(selRows)
            print(selCols)
            dataset = datasets[dataset_name]
            data, _, _, _ = \
                geneExpressionReader.parse_tsv(
                    filepath=dataset['file'],
                    rowLabelsSource=dataset['headerRows'],
                    rows=selRows,
                    columns=selCols
                )
        elif(contents is not None):
            content_type, content_string = contents.split(',')
            decoded = base64.b64decode(content_string).decode('UTF-8')
    
            data, _, _, _ = \
                geneExpressionReader.parse_tsv(
                    contents=decoded,
                    rowLabelsSource='Gene Name',
                    rows=selRows,
                    columns=selCols
                )
        print(data)
            
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
            
    @app.callback(
        Output('selected-rows', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_row_options(_, data):
        return [{'label': r, 'value': r} for r in data['rowOptions']]
    
    @app.callback(
        Output('selected-columns', 'options'),
        [Input('data-meta-storage', 'modified_timestamp')],
        state=[State('data-meta-storage', 'data')]
    )
    def update_col_options(_, data):
        return [{'label': r, 'value': r} for r in data['colOptions']]
    
    @app.callback(
        Output('selected-rows', 'value'),
        [Input('file-upload', 'contents')]
    )
    def clear_rows(_):
        return []

    @app.callback(
        Output('selected-columns', 'value'),
        [Input('file-upload', 'contents')]
    )
    def clear_cols(_):
        return []
