import dash_ideogram
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_html_components as html

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
                    dcc.Dropdown(
                id="organism-change",
                options=[
                    {'label': 'Human', 'value': 'human'},
                    {'label': 'Mouse', 'value': 'mouse'},
                    {'label': 'Rat', 'value': 'rattus-norvegicus'}
                ],
                value='human'
                ),
                html.Div(
                    [
                        dcc.RadioItems(
                            id="orientation-switch",
                            options=[
                                {'label': 'Vertical', 'value': 'vertical'},
                                {'label': 'Horizontal', 'value': 'horizontal'}
                            ],
                            value='vertical',
                            className="five columns"
                        ),
                        dcc.RadioItems(
                            id="bandlabel-switch",
                            options=[
                                {'label': 'Label On', 'value': True},
                                {'label': 'Label Off', 'value': False}
                            ],
                            value=True,
                            className="five columns"
                        )
                    ], className="row", style={"position":"absolute"}
                )
                ], className="two columns"
            ),
            html.Div(
                        [
                            dash_ideogram.DashIdeogram(
                                id="ideo",
                                organism="human",
                                showBandLabels=True,
                                orientation="horizontal",
                                style={"position": "relative"}
                            )
                        ], className="ten columns"
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

if __name__ == '__main__':
    app.run_server(debug=True)
