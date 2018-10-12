import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_bio
from dash_bio.helpers import geneExpressionReader

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

colorPalette = [
    'rgb(75,250,100)',
    'rgb(75,150,255)',
    'rgb(150,150,250)'
]

fig_options = dict(
    data=None, id='sample', cluster='all',
    optimalLeafOrder=False,
    displayRatio=[0.3, 0.2],
    columnLabels=None, rowLabels=None,
    hideLabels=['row'],
    colorThreshold=dict(row=9, col=35),
    height=1000, width=900,
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

app.layout = html.Div([
    html.Div(
        id='header',
        children=[
            'Dash Clustergram'
        ]
    ),

    html.Div(
        id='clustergram-wrapper',
        children=[
        ]
    ),

    html.Div(
        id='options', children=[
            html.Div(
                id='file-upload-container',
                children=[
                    dcc.Upload(
                        id='file-upload',
                        children=html.Div([
                            "Drag and drop .tsv files or select files."
                        ])
                    )
                ],
                style={
                    'border': 'dotted 2px white',
                    'height': '50px',
                    'width': '230px',
                    'border-radius': '5px',
                    'padding': '10px'
                }
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
                        max=60,
                        step=0.5,
                        value=35
                    ),
                    html.Br(),
                    dcc.Slider(
                        id='row-threshold',
                        min=0,
                        max=40,
                        step=0.5,
                        value=9
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
                        id='annotation',
                        placeholder='annotation',
                        type='text',
                        value=''
                    ),
                    dcc.Input(
                        id='color',
                        placeholder='color',
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
        id='info',
        children=["hi"]
    )
])


@app.callback(
    Output('info', 'children'),
    [Input('file-upload', 'contents'),
     Input('file-upload', 'filename')]
)
def display_info(contents, filename):
    if (filename is None or filename == ''):
        return []
    
    (_, desc, _, _) = \
        geneExpressionReader.parse_tsv(contents, filename)

    infoContent = []
    infoContent.append(html.H3('Information'))
    for key in desc:
        infoContent.append(html.P("{}: {}".format(
            key, desc[key]
        )))
                        
    return infoContent


@app.callback(
    Output('clustergram-wrapper', 'children'),
    inputs=[Input('cluster-checklist', 'value'),
            Input('submit-group-marker', 'n_clicks'),
            Input('remove-all-group-markers', 'n_clicks'),
            Input('column-threshold', 'value'),
            Input('row-threshold', 'value'),
            Input('file-upload', 'contents'),
            Input('file-upload', 'filename')],
    state=[State('row-or-col-group', 'value'),
           State('group-number', 'value'),
           State('annotation', 'value'),
           State('color', 'value'),
           State('submit-group-marker', 'n_clicks_timestamp'),
           State('remove-all-group-markers', 'n_clicks_timestamp')]
)
def cluster_row(v, nclicks, removeAll, colThresh, rowThresh,
                contents, filename, rowOrCol, groupNum,
                annotation, color, submitTime, removeTime):

    if (filename is None or filename == ''):
        return None
    
    (data, _, rowLabels, colLabels) = \
        geneExpressionReader.parse_tsv(contents, filename)
    
    fig_options.update(
        data=data,
        columnLabels=colLabels,
        rowLabels=[r[0] for r in rowLabels],
        colorThreshold=dict(row=rowThresh, col=colThresh)
    )
    if(len(v) > 1):
        fig_options.update(
            cluster='all'
        )
    elif(len(v) == 1):
        fig_options.update(
            cluster=v[0]
        )
    if(removeTime > submitTime):
        fig_options['rowGroupMarker'] = []
        fig_options['colGroupMarker'] = []
        return dash_bio.ClustergramComponent(**fig_options)
    try:
        marker = dict(
            group=int(groupNum),
            annotation=annotation,
            color=color
        )
    except ValueError:
        pass
    if(rowOrCol == 'row'):
        try:
            fig_options['rowGroupMarker'].append(marker)
        except KeyError:
            fig_options['rowGroupMarker'] = [marker]
    elif(rowOrCol == 'col'):
        try:
            fig_options['colGroupMarker'].append(marker)
        except KeyError:
            fig_options['colGroupMarker'] = [marker]
    return dcc.Graph(
        id='clustergram',
        figure=dash_bio.ClustergramComponent(**fig_options)
    )


if __name__ == '__main__':
    app.run_server(debug=True)
