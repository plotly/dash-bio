import dash_ideogram
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_html_components as html
import virtual_cnvs as data
app = dash.Dash('')

app.scripts.config.serve_locally = True
# app.css.config.serve_locally = True

external_css = [
    "https://codepen.io/chriddyp/pen/bWLwgP.css",
    "https://cdn.rawgit.com/matthewchan15/dash-css-style-sheets/adf070fa/banner.css",
    "https://fonts.googleapis.com/css?family=Raleway:400,400i,700,700i",
    "https://fonts.googleapis.com/css?family=Product+Sans:400,400i,700,700i",
]


for css in external_css:
    app.css.append_css({"external_url": css})

app.layout = html.Div([
    html.Div(
        [
            html.Div(
                [
                    html.H6("Organism"),
                    dcc.Dropdown(
                id="organism-change",
                options=[
                    {'label': 'Human', 'value': 'human'},
                    {'label': 'Mouse', 'value': 'mouse'},
                    {'label': 'Rat', 'value': 'rattus-norvegicus'}
                ],
                value='human'
                ),
                html.H6("Options"),
                html.Div(
                    [
                        html.P("Orientation"),
                        dcc.Dropdown(
                            id="orientation-switch",
                            options=[
                                {'label': 'Vertical', 'value': 'vertical'},
                                {'label': 'Horizontal', 'value': 'horizontal'}
                            ],
                            value='horizontal',
                        ),
                        html.P("Bandlabel"),
                        dcc.Dropdown(
                            id="bandlabel-switch",
                            options=[
                                {'label': 'Label On', 'value': True},
                                {'label': 'Label Off', 'value': False}
                            ],
                            value=True,
                        ),
                        html.P("Rotatable"),
                        dcc.Dropdown(
                            id="rotatable-switch",
                            options=[
                                {'label': 'Rotate Enable', 'value': True},
                                {'label': 'Rotate Disable', 'value': False}
                            ],
                            value=True,
                        ),
                        html.P("Sex"),
                        dcc.Dropdown(
                            id="sex-switch",
                            options=[
                                {'label': 'Male', 'value': 'male'},
                                {'label': 'Female', 'value': 'female'}
                            ],
                            value='male',
                        ),
                    ], 
                ),
                    html.P(
                        "Chr Margin",
                    ),
                    dcc.Input(
                        id="chr-margin-input",
                        placeholder='Enter a value...',
                        type='number',
                        value=10
                    ),
                    html.P(
                        "Chr Height",
                    ),
                    dcc.Input(
                        id="chr-height-input",
                        placeholder='Enter a value...',
                        type='number',
                        value=300
                        ),
                    html.P(
                        "Chr Width",
                    ),
                    dcc.Input(
                        id="chr-width-input",
                        placeholder='Enter a value...',
                        type='number',
                        value=8
                        ),
                    html.P(
                        "Rows",
                    ),
                    dcc.Input(
                        id="row-input",
                        placeholder='Enter a value...',
                        type='number',
                        value=0
                        ),
                    html.P("Resolution"),
                    dcc.Dropdown(
                        id="resolution-select",
                        options=[
                            {'label': '550 bphs', 'value': 550},
                            {'label': '650 bphs', 'value': 850},
                            {'label': 'Off', 'value': 1}
                        ],
                        value=1
                ),
                html.H6("Ploidy"),
                dcc.Input(
                        id="ploidy-input",
                        placeholder='Enter a value...',
                        type='number',
                        value=1
                        ),
                html.H6("Annotations"),
                dcc.Dropdown(
                        id="annotation-select",
                        options=[
                            {'label': 'Heatmap', 'value': 'heatmap'},
                            {'label': 'Tracks', 'value': 'tracks'},
                            {'label': 'Histogram', 'value': 'histogram'},
                            {'label': 'Overlay', 'value': 'overlay'}
                        ],
                        value='tracks'
                ),
                html.P(
                        "Annotation Path",
                    ),
                    dcc.Input(
                        id="path-input",
                        placeholder='Enter Annotation URL',
                        type='text',
                        value=''
                        ),
                html.P(
                        "Annotation Color",
                    ),
                    dcc.Input(
                        id="color-input",
                        placeholder='Annotation Color',
                        type='text',
                        value=''
                        ),
                html.P(
                        "Annotation Height",
                    ),
                    dcc.Input(
                        id="height-input",
                        placeholder='Annotation Height',
                        type='text',
                        value=''
                        ),
                ], className="three columns", style={"overflow-y":"auto", "max-height":"100vh"}
            ),
            html.Div(
                        [
                            dcc.Input(
                        id="heighxt-input",
                        placeholder='Annotation Height',
                        type='text',
                        value=''
                        ),

                            dash_ideogram.DashIdeogram(
                                id="ideo",
                                organism="human",
                                orientation="horizontal",
                                showBandLabels=True,
                                showChromosomeLabels=True,
                                showFullyBanded=True
                            )
                        ], className="nine columns"
                        ),
        ], className="row"
    )
])


@app.callback(
    Output("ideo", "organism"),
    [Input("organism-change", "value")]
)
def organism_change(dropdown):
    return dropdown

@app.callback(
    Output("ideo", "showBandLabels"),
    [Input("bandlabel-switch", "value")]
)
def bandlabel_change(bandlabel):
    return bandlabel

@app.callback(
    Output("ideo", "orientation"),
    [Input("orientation-switch", "value")]
)
def orientation_change(orientation):
    return orientation

@app.callback(
    Output("ideo", "chrWidth"),
    [Input("chr-width-input", "value")]
)
def chr_width(value):
    return value

@app.callback(
    Output("ideo", "chrHeight"),
    [Input("chr-height-input", "value")]
)
def chr_height(value):
    return value

@app.callback(
    Output("ideo", "chrMargin"),
    [Input("chr-margin-input", "value")]
)
def chr_width(value):
    return value

@app.callback(
    Output("ideo", "rotatable"),
    [Input("rotatable-switch", "value")]
)
def rotatable(value):
    return value

@app.callback(
    Output("ideo", "resolution"),
    [Input("resolution-select", "value")]
)
def rotatable(value):
    if value != 1:
        return value

# @app.callback(
#     Output("ideo", "rows"),
#     [Input("row-input", "value")]
# )
# def rows(value):
#     if value != 0:
#         return value
#     return None

@app.callback(
    Output("ideo", "sex"),
    [Input("sex-switch", "value")]
)
def sex(value):
    return value

@app.callback(
    Output("ideo", "ploidy"),
    [Input("ploidy-input", "value")]
)
def ploidy(value):
    return value


@app.callback(
    Output("ideo", "annotationsLayout"),
    [Input("annotation-select", "value")]
)
def annot_select(value):
    return value

@app.callback(
    Output("ideo", "annotationsPath"),
    [Input("path-input", "value")]
)
def annot_path(value):
    if value != '':
        return value
    return None

@app.callback(
    Output("ideo", "annotationHeight"),
    [Input("height-input", "value")]
)
def annot_height(value):
    if value != '':
        return value
    return None

@app.callback(
    Output("ideo", "annotationsColor"),
    [Input("color-input", "value")]
)
def ploidy(value):
    if value != '':
        return "#{}".format(value)
    return None
if __name__ == '__main__':
    app.run_server(debug=True)
