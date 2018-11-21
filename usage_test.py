import dash_bio
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import json

with open("dataset_one.json", "r") as data_one:
    data_one = json.load(data_one)

app = dash.Dash("")

app.scripts.config.serve_locally = True
app.css.config.serve_locally = True

app.layout = html.Div(
    [
        html.Div(
            id="container",
            style={"background-color": "#119DFF"},
            children=[
                html.H2(
                    "Dash Bio: Ideogram Selector",
                    id="title",
                    style={"color": "green"}
                ),
                html.A(
                    html.Img(
                        src='assets/dashbio_logo.svg'
                    ),
                    href="http://www.dashdaq.io",
                ),
            ],
            className="banner-ideogram",
        ),
        # html.Div(
        #     [
        #                 # dash_bio.DashIdeogram(
        #                 #     id="ideo-abc",
        #                 #     dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
        #                 #     showBandLabels=True,
        #                 #     organism='human',
        #                 #     chrHeight=300,
        #                 #     chrMargin=2,
        #                 #     rotatable=True,
        #                 #     annotationsPath='https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json',
        #                 #     annotationsLayout='overlay',
        #                 #     orientation='vertical',
        #                 #     showFullyBanded=False,
        #                 #     style={
        #                 #         "float": "left"
        #                 #         # "max-height": "95vh",
        #                 #         # "overflow": "auto",
        #                 #         # "position": "absolute"
        #                 #     },
        #                 # ),
        #                 # dash_bio.DashIdeogram(
        #                 #     id="ideo-histogram",
        #                 #     # dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
        #                 #     # dataDir="./assets/data/bands/native/homo-sapiens.js",
        #                 #     orientation= 'vertical',
        #                 #     localOrganism=data_one,
        #                 #     organism= 'human',
        #                 #     assembly= 'GRCh37',
        #                 #     chrHeight= 275,
        #                 #     annotationsPath= 'https://eweitz.github.io/ideogram/data/annotations/SRR562646.json',
        #                 #     annotationsLayout= 'histogram',
        #                 #     barWidth= 3,
        #                 #     filterable= True,
        #                 # ),
        #                 dash_bio.DashIdeogram(
        #                     id="ideo-histogram",
        #                     dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
        #                     # dataDir="./assets/data/bands/native/homo-sapiens.js",
        #                     orientation= 'vertical',
        #                     # localOrganism=data_one,
        #                     organism= 'human',
        #                     assembly= 'GRCh37',
        #                     chrHeight= 275,
        #                     annotationsPath= 'assets/SRR562646.json',
        #                     annotationsLayout= 'histogram',
        #                     barWidth=3,
        #                     filterable= True,
        #                 ),
        #             ]
        #         ),
                # dash_bio.DashIdeogram(
                #     id="ideo-homology",
                #     dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                #     organism=["human", "mouse"],
                #     orientation="vertical",
                #     showBandLabels=True,
                #     showChromosomeLabels=True,
                #     showFullyBanded=True,
                #     fullChromosomeLabels=True,
                #     chrHeight=400,
                #     chrMargin=200,
                #     rotatable=False,
                #     perspective="comparative",
                #     chromosomes={
                #         "human": ["1"],
                #         "mouse": ["4"],
                #     },
                #     homology={
                #         "chrOne": {
                #             "organism": "9606",
                #             "start": [50000, 155701383],
                #             "stop": [900000, 156030895],
                #         },
                #         "chrTwo": {
                #             "organism": "10090",
                #             "start": [10001, 50000000],
                #             "stop": [2781479, 57217415],
                #         },
                #     },
                    # style={
                    #     "float": "left"
                    #     # "max-height": "95vh",
                    #     # "overflow": "auto",
                    #     # "position": "absolute"
                    # },
                # ),
                # dash_bio.DashIdeogram(
                #     id="ideo-three",
                #     dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                #     organism='human',
                #     assembly='GRCh37',
                #     chrHeight=275,
                #     annotationsPath='https://eweitz.github.io/ideogram/data/annotations/SRR562646.json',
                #     annotationsLayout='heatmap',
                #     annotationTracks=[
                #         {"id": 'expressionLevelTrack',
                #             "displayName": 'Expression level'},
                #         {"id": 'geneTypeTrack', "displayName": 'Gene type'},
                #     ],
                #     heatmaps=[
                #         {
                #             "key": 'expression-level',
                #             "thresholds": [['2', '#88F'], [
                #                 '4', '#CCC'], ['+', '#F33']]
                #         },
                #         {
                #             "key": 'gene-type',
                #             "thresholds": [['0', '#00F'], ['1', '#0AF'], [
                #                 '2', '#AAA'], ['3', '#FA0'], ['4', '#F00']]
                #         }
                #     ],
                # ),
                html.Div(
                            [
                                html.Div(
                                    [
                                        html.H5("Options"),
                                        html.P("Chromosomes"),
                                        dcc.Input(
                                            id="chr-brush",
                                            placeholder="Enter chromosome number",
                                            type="text",
                                            value="",
                                            style={"width": "100%"}
                                        ),
                                        html.P(id="brush-print"),
                                    ],
                                    className="three columns",
                                ),
                                html.Div(
                                    [
                                        dash_bio.DashIdeogram(
                                            id="brush-ideo",
                                            dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                                            organism="human",
                                            chromosomes=["1"],
                                            brush="chr1:1-10000000",
                                            chrHeight=900,
                                            resolution=550,
                                            orientation="horizontal",
                                        ),
                                    ],
                                    className="nine columns",
                                ),
                            ]
                        )
                # dash_bio.DashIdeogram(
                #     id="ideo-two",
                #     organism='human',
                #     dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                #     showBandLabels=True,
                #     chrHeight=300,
                #     chrMargin=2,
                #     rotatable=True,
                #     annotationsPath= 'https://eweitz.github.io/ideogram/data/annotations/SRR562646.json',
                #     annotationsLayout= 'histogram',
                #     orientation='vertical',
                #     barWidth= 3,
                #     filterable= True,
                #     assembly= 'GRCh37',
                #     style={
                #         "float": "left"
                #         # "max-height": "95vh",
                #         # "overflow": "auto",
                #         # "position": "sticky"
                #     },
                # )
    ],
)

@app.callback(Output("brush-print", "children"), [Input("brush-ideo", "brushData")])
def brush_data(brush_data):
    if brush_data != None:
        start = "Start: " + brush_data["start"] + " "
        to = "End: " + brush_data["end"] + " "
        extent = "Extent: " + brush_data["extent"]
        return start + to + extent
    return

if __name__ == "__main__":
    app.run_server(debug=True)
