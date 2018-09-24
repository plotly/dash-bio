import dash_bio
import dash
from dash.dependencies import Input, Output
import dash_html_components as html
import dash_core_components as dcc

app = dash.Dash('')

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

sequence = 'MALWMRLLPL LALLALWGPD PAAAFVNQHL CGSHLVEALY LVCGERGFFY TPKTRREAED LQVGQVELGG GPGAGSLQPL ALEGSLQKRG IVEQCCTSIC SLYQLENYCN'.replace(' ', '')

highlightColor = 'blue'

cov_colors = {
    "beta strand": {
        "color": "#ff0000",
        "bgcolor": "#0000ff",
        "underscore": False,
        "tooltip": "Beta strand"
    },
    "helix": {
        "color": "#00ff00",
        "bgcolor": "#000000",
        "underscore": True,
        "tooltip": "Alpha helix"
    },
    "turn": {
        "color": "#0f0f0f",
        "bgcolor": "#ffff00",
        "underscore": True,
        "tooltip": "Turn"
    }
}

sec_structure = [
    [0, 26],
    [26, 29, "beta strand"],
    [29, 33],
    [33, 43, "helix"],
    [43, 44],
    [44, 46, "helix"],
    [46, 48],
    [48, 50, "beta strand"],
    [50, 56],
    [56, 58, "beta strand"],
    [58, 59],
    [59, 66, "turn"],
    [66, 74],
    [74, 76, "beta strand"],
    [76, 79],
    [79, 81, "helix"],
    [81, 84],
    [84, 86, "turn"],
    [86, 91],
    [91, 97, "helix"],
    [97, 98],
    [98, 101, "beta strand"],
    [101, 102],
    [102, 106, "helix"],
    [106, 107],
    [107, 109, "turn"]
]

coverage = []

for s in sec_structure:
    section_dict = dict(
        start=s[0],
        end=s[1],
        color="#000000",
        bgcolor="#ffffff",
        underscore=False
    )
    if(len(s) > 2):
        settings = cov_colors[s[2]]
        for key in settings:
            section_dict[key] = settings[key]
    coverage.append(section_dict)

selection = [10, 20, 'blue']

app.layout = html.Div([
    dash_bio.SequenceViewerComponent(
        id='sequence-viewer',
        title="Insulin ",
        wrapAminoAcids=True,
        search=True,
        sequence=sequence,
        coverage=coverage,
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
    Output('sequence-viewer', 'selection'),
    [Input('slider', 'value')]
)
def update_sel(v):
    return [v[0], v[1], highlightColor]


@app.callback(
    Output('test-div', 'children'),
    [Input('sequence-viewer', 'coverageClicked')]
)
def update_coverage(v):
    try:
        cov = coverage[v]
    except TypeError:
        return ""
    for s in sec_structure:
        if(s[0] == cov['start']):
            if(len(s) > 2):
                return cov['tooltip']
            else:
                return ""
    return sequence[cov['start']:cov['end']]


if __name__ == '__main__':
    app.run_server(debug=True)

