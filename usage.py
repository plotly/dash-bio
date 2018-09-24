import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

sequence = 'MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCNMALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKTRREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN'

highlightColor = 'blue'

coverage = [
    dict(
        start=0,
        end=10,
        color="#000000",
        bgcolor="#00ff00",
        tooltip="hi",
        underscore=False
    ),
    dict(
        start=11,
        end=len(sequence) - 1,
        color="#ff0000",
        bgcolor="#0000ff",
        underscore=True
    )
]

selection = [10, 20, 'blue']

app.layout = html.Div([
    dash_bio.SequenceViewerComponent(
        id='sequence-viewer',
        title="This is a protein",
        wrapAminoAcids=True,
        search=True,
        sequence=sequence,
    ),

    dcc.RangeSlider(
        id='slider',
        min=0,
        max=len(sequence),
        step=1,
        value=[10, 20]
    ),

    dash_bio.ExampleComponent(
        id='test-input',
        label='sequence title',
        value='title'
    ),

    html.Div(
        id='test-div'
    )
])
    
 
@app.callback(
    Output('sequence-viewer', 'title'),
    [Input('test-input', 'value')]
)
def update_selection_low_high(v):
    return v

@app.callback(
    Output('sequence-viewer', 'selection'),
    [Input('slider', 'value')]
)
def update_sel(v):
    return [v[0], v[1], highlightColor]

@app.callback(
    Output('test-div', 'children'),
    [Input('slider', 'value')]
)
def update_selection(v):
    return sequence[v[0]:v[1]]

if __name__ == '__main__':
    app.run_server(debug=True)

