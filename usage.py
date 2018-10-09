import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import numpy as np
import dash_bio


app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

data = np.genfromtxt('expressionData/E-GEOD-46817-query-results.tpms.tsv',
                     delimiter='\t')

data = data[10:1000]
data = np.delete(data, [0, 1], 1)

cL = [chr(i+65) for i in range(len(data[0]))]
rL = [chr(i+65) for i in range(len(data))]


fig_options = dict(
    data=data, id='sample', cluster='all',
    optimalLeafOrder=False,
    displayRatio=[0.3, 0.2],
    columnLabels=cL, rowLabels=None,
    colorThreshold=dict(row=9, col=35),
    height=800, width=800,
    colorMap=[[0.0, 'rgb(150,150,250)'],
              [0.5, 'rgb(50,250,100)'],
              [1.0, 'rgb(50,150,255)']],
    colorList={
        'row': ['rgb(50,250,100)', 'rgb(50,150,255)', 'rgb(150,150,250)'],
        'col': ['rgb(50,150,255)', 'rgb(150,150,250)', 'rgb(50,250,100)'],
        'bg': 'rgb(255,255,255)'
    },
    annotationFont=dict(
        color='white',
        size=10
    ),
    symmetricValue=False,
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
            dcc.Graph(
                id='clustergram',
                figure=dash_bio.ClustergramComponent(
                    **fig_options
                )
            )
        ]
    ),

    html.Div(
        id='options',
        children=[
            dcc.Checklist(
                id='cluster-checklist',
                labelStyle={
                    'padding-right': '30px'
                },
                options=[
                    {'label': 'Row clustering', 'value': 'row'},
                    {'label': 'Column clustering', 'value': 'col'}
                ],
                values=['row', 'col']
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
                    "Remove all group markers"
                ],
                n_clicks=0,
                n_clicks_timestamp=0
            )
            
        ]
    )
])


@app.callback(
    Output('clustergram', 'figure'),
    inputs=[Input('cluster-checklist', 'values'),
            Input('submit-group-marker', 'n_clicks'),
            Input('remove-all-group-markers', 'n_clicks')],
    state=[State('row-or-col-group', 'value'),
           State('group-number', 'value'),
           State('annotation', 'value'),
           State('color', 'value'),
           State('submit-group-marker', 'n_clicks_timestamp'),
           State('remove-all-group-markers', 'n_clicks_timestamp')]
)
def cluster_row(v, nclicks, removeAll, rowOrCol, groupNum, annotation, color,
                submitTime, removeTime):
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
    return dash_bio.ClustergramComponent(**fig_options)


if __name__ == '__main__':
    app.run_server(debug=True)
