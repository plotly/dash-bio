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
#        selection=selection,
        coverage=coverage,
#        coverage_n_clicks=[0]*len(coverage),
#        coverage_n_clicks_timestamp=[0]*len(coverage)
    ),

    "For selection",
    dcc.RangeSlider(
        id='seq-selection',
        count=1,
        min=0,
        max=len(sequence),
        step=1,
        value=[10, 20]
    ),

    "For coverage",
    dcc.Slider(
        id='coverage',
        min=0,
        max=len(sequence)
    ),
    
    "For wrap amino acids",
    dcc.Checklist(
        id='wrap-amino-acids',
        options=[
            {'label': 'Wrap amino acids', 'value': 'wrap'}
        ],
        values=['wrap']
    ),

    html.Div(
        id='test-div',
        children=''
    ),
])


@app.callback(
    Output('sequence-viewer', 'selection'),
    [Input('seq-selection', 'value')]
)
def update_selection_low_high(selection):
    return [selection[0], selection[1], highlightColor]


@app.callback(
        Output('sequence-viewer', 'coverage'),
        [Input('coverage', 'value')],
)
def update_coverage_division(a):
    coverage[0].update(
        end=a
    )
    coverage[1].update(
        start=a
    )
    return coverage


@app.callback(
    Output('sequence-viewer', 'wrapAminoAcids'),
    [Input('wrap-amino-acids', 'values')]
)
def update_wrap_amino_acids(wrap):
    if(len(wrap) > 0):
        return True
    return False

"""
@app.callback(
    Output('test-div', 'children'),
    [Input('sequence-viewer', 'coverage_n_clicks')]
)
def show_onclick_info(cov):
    return cov
"""

if __name__ == '__main__':
    app.run_server(debug=True)
