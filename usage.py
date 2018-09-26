import dash
from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import numpy as np
import dash_bio


app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

data = np.loadtxt('data.txt')

rgm = [
    {'group': 1,
     'annotation': 'A',
     'color': 'blue'},
    {'group': 3,
     'annotation': 'B',
     'color': 'red'}
]

cgm = [
    {'group': 1,
     'annotation': 'X',
     'color': 'pink'},
    {'group': 3,
     'annotation': 'Y',
     'color': 'green'}
]


fig_options = dict(
    data=data, id='sample', cluster='all',
    optimalLeafOrder=False,
    displayRatio=[0.5, 0.5],
    columnLabels=None, rowLabels=None,
    colorThreshold=dict(row=9, col=55),
    rowGroupMarker=rgm, colGroupMarker=cgm
)

app.layout = html.Div([
    html.Div(
        id='clustergram-wrapper',
        children=[
            dash_bio.ClustergramComponent(
                **fig_options
            )
        ]
    ),

    dcc.Checklist(
        id='cluster-checklist',
        options=[
            {'label': 'row clustering', 'value': 'row'},
            {'label': 'column clustering', 'value': 'col'}
        ],
        values=['row', 'col']
    ),

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
                type='text',
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
                children='submit'
            )
        ]
    )
])


@app.callback(
    Output('clustergram-wrapper', 'children'),
    inputs=[Input('cluster-checklist', 'values'),
            Input('submit-group-marker', 'n_clicks')],
    state=[State('row-or-col-group', 'value'),
           State('group-number', 'value'),
           State('annotation', 'value'),
           State('color', 'value')]
)
def cluster_row(v, nclicks, rowOrCol, groupNum, annotation, color):
    if(len(v) > 1):
        fig_options.update(
            cluster='all'
        )
    elif(len(v) == 1):
        fig_options.update(
            cluster=v[0]
        )
    marker = dict(
        group=int(groupNum),
        annotation=annotation,
        color=color
    )
    if(rowOrCol == 'row'):
        fig_options['rowGroupMarker'].append(marker)
    elif(rowOrCol == 'col'):
        fig_options['colGroupMarker'].append(marker)

    return dash_bio.ClustergramComponent(**fig_options)


if __name__ == '__main__':
    app.run_server(debug=True)
