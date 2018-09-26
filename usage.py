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

fig_options = dict(
    data=data, id='sample', cluster='all',
    optimalLeafOrder=False,
    displayRatio=0.15,
    columnLabels=None, rowLabels=None,
    colorThreshold=dict(row=9, col=55),
    height=800, width=800,
    annotationFont=dict(
        color='grey',
        size=12
    ),
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
            dash_bio.ClustergramComponent(
                **fig_options
            )
        ]
    ),

    html.Div(
        id='options',
        children=[
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
                        children='submit'
                    )
                ]
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
