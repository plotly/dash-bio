import pandas as pd

import dash
import dash_bio as dashbio
import dash_html_components as html
import dash_core_components as dcc


external_stylesheets = ['https://codepen.io/chriddyp/pen/bWLwgP.css']

app = dash.Dash(__name__, external_stylesheets=external_stylesheets)

df = pd.read_csv(
    'https://raw.githubusercontent.com/plotly/dash-bio-docs-files/master/' +
    'clustergram_mtcars.tsv',
    sep='	', skiprows=4
).set_index('model')

columns = list(df.columns.values)
rows = list(df.index)


clustergram = dashbio.Clustergram(
    data=df.loc[rows].values,
    row_labels=rows,
    column_labels=columns,
    color_threshold={
        'row': 250,
        'col': 700
    },
    height=800,
    width=700,
    color_list={
        'row': ['#636EFA', '#00CC96', '#19D3F3'],
        'col': ['#AB63FA', '#EF553B'],
        'bg': '#506784'
    },
    line_width=2
)
clustergram.write_json('/tmp/clustergram.json')

app.layout = html.Div([
    "Rows to display",
    dcc.Dropdown(
        id='clustergram-input',
        options=[
            {'label': row, 'value': row} for row in list(df.index)
        ],
        value=rows[:10],
        multi=True
    ),

    html.Div(
        id='my-clustergram',
	children=dcc.Graph(figure=clustergram)
    )
])


if __name__ == '__main__':
    app.run_server(debug=True)
