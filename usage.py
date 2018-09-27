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
        "color": "#ffff00",
        "bgcolor": "#0f0f0f",
        "underscore": True,
        "tooltip": "Turn"
    }
}

legend = [
    {
        'name': 'Beta strand',
        'color': '#ff0000',
        'underscore': False
    },
    {
        'name': 'Alpha helix',
        'color': '#00ff00',
        'underscore': True
    },
    {
        'name': 'Turn',
        'color': '#ffff00',
        'underscore': True
    }
]

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

codes = {'CYS': 'C', 'ASP': 'D', 'SER': 'S', 'GLN': 'Q', 'LYS': 'K',
         'ILE': 'I', 'PRO': 'P', 'THR': 'T', 'PHE': 'F', 'ASN': 'N',
         'GLY': 'G', 'HIS': 'H', 'LEU': 'L', 'ARG': 'R', 'TRP': 'W',
         'ALA': 'A', 'VAL': 'V', 'GLU': 'E', 'TYR': 'Y', 'MET': 'M'}
codes = dict((codes[k], k) for k in codes)

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

    html.Div(
        id='header',
        children=["Dash sequence viewer"]
    ),

    html.Div(
        id='sequence-viewer-container',
        children=[
            dash_bio.SequenceViewerComponent(
                id='sequence-viewer',
                title="Insulin ",
                wrapAminoAcids=True,
                search=True,
                sequence=sequence,
                coverage=coverage,
                legend=legend,
                selection=[]
            ),
        ]
    ),

    html.Div(
        id='controls-container',
        children=[

            dcc.RadioItems(
                id='selection-or-coverage',
                options=[
                    {'label': 'Enable selection', 'value': 'sel'},
                    {'label': 'Enable coverage', 'value': 'cov'}
                ],
                value='cov'
            ),

            html.Div(
                id='sel-slider-container',
                children=[
                    "Selection slider",
                    dcc.RangeSlider(
                        id='sel-slider',
                        min=0,
                        max=len(sequence),
                        step=1,
                        value=[10, 20]
                    ),
                ]
            )
        ]
    ),
    
    html.Div(
        id='info-container',
        children=[
            html.Span(
                "Selection information: ",
                style={
                    'font-weight': 'bold'
                }
            ),
            html.Div(
                id='test-selection'
            ),
            html.Br(),
            
            html.Span(
                "Coverage info: ",
                style={
                    'font-weight': 'bold'
                }
            ),
            html.Div(
                id='test-coverage'
            ),
            html.Br(),

            html.Span(
                "Mouse sel: ",
                style={
                    'font-weight': 'bold'
                }
            ),
            html.Div(
                id='test-mouse-selection'
            ),
            html.Br(),

            html.Span(
                "Subpart sel: ",
                style={
                    'font-weight': 'bold'
                }
            ),
            html.Div(
                id='test-subpart-selection'
            )
        ]
    )
])


@app.callback(
    Output('sel-slider', 'disabled'),
    [Input('selection-or-coverage', 'value')]
)
def enable_disable_slider(v):
    if(v == 'sel'):
        return False
    return True


@app.callback(
    Output('sequence-viewer', 'selection'),
    [Input('sel-slider', 'value'),
     Input('selection-or-coverage', 'value')]
)
def update_sel(v, v2):
    if(v2 != 'sel'):
        return []
    return [v[0], v[1], highlightColor]


@app.callback(
    Output('test-selection', 'children'),
    [Input('sequence-viewer', 'selection')]
)
def get_aa_comp(v):
    if(len(v) < 2):
        return ''
    subsequence = sequence[v[0]:v[1]]
    amino_acids = list(set(list(subsequence)))
    summary = []
    for aa in amino_acids:
        summary.append(
            html.Tr([html.Td(codes[aa]), html.Td(str(subsequence.count(aa)))])
        )
    return html.Table(summary)


@app.callback(
    Output('test-coverage', 'children'),
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
                return "No additional information."
    return sequence[cov['start']:cov['end']]


@app.callback(
    Output('test-mouse-selection', 'children'),
    [Input('sequence-viewer', 'mouseSelection')]
)
def update_mouse_sel(v):
    return v


@app.callback(
    Output('test-subpart-selection', 'children'),
    [Input('sequence-viewer', 'subpartSelected')]
)
def update_subpart_sel(v):
    if(v is None):
        return ''
    test = []
    for sel in v:
        test.append("Start: %d " % sel['start'])
        test.append("End: %d " % sel['end'])
        test.append("Sequence: %s" % sel['sequence'])
        test.append(html.Br())
    return test


if __name__ == '__main__':
    app.run_server(debug=True)

