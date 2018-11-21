import dash_bio
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import json
import base64

with open("tests/dash/sample_data/human_ideogram_data.json", "r") as human_data:
    human_data = json.load(human_data)

def description():
    return 'Compare, and analyze chromosome bands with the Dash Ideogram.'

def layout():
    return html.Div(
    [
        html.Div(
            id="header-container",
            style={"background-color": "#119DFF"},
            children=[
                html.H2(
                    "Dash Bio: Ideogram Selector",
                    id="title",
                    style={"color": "#FFF"}
                ),
                html.A(
                    html.Img(
                    src='data:image/png;base64,{}'.format(
                        base64.b64encode(
                            open(
                                './assets/dashbio_logo_words.png',
                                'rb'
                            ).read()
                        ).decode()
                    )
                    ),
                    href="http://www.dash.bio",
                ),
            ],
            className="banner-ideogram",
        ),
        dcc.Tabs(
            id="tabs",
            children=[
                dcc.Tab(
                    label="Custom",
                    children=[
                        html.Div(
                            [
                                html.Div(
                                    [
                                        html.Div(
                                            [
                                                html.H5("Options"),
                                                html.Div(
                                                    [
                                                        html.P("Organism"),
                                                        dcc.Dropdown(
                                                            id="organism-change",
                                                            options=[
                                                                {
                                                                    "label": "Human",
                                                                    "value": "human",
                                                                },
                                                                {
                                                                    "label": "Drosophila-Melanogaster",
                                                                    "value": "drosophila-melanogaster",
                                                                },
                                                                {
                                                                    "label": "Homo-sapiens-400",
                                                                    "value": "homo-sapiens-400",
                                                                },
                                                                {
                                                                    "label": "Homo-sapiens-550",
                                                                    "value": "homo-sapiens-550",
                                                                },
                                                                {
                                                                    "label": "GCF_000001405-1200",
                                                                    "value": "homo-sapiens-GCF_000001405.12-1200",
                                                                },
                                                                {
                                                                    "label": "Zea-mays",
                                                                    "value": "zea-mays",
                                                                },
                                                            ],
                                                            value="human",
                                                        ),
                                                        html.Div(
                                                            [
                                                                html.P(
                                                                    "Orientation"),
                                                                dcc.Dropdown(
                                                                    id="orientation-switch",
                                                                    options=[
                                                                        {
                                                                            "label": "Vertical",
                                                                            "value": "vertical",
                                                                        },
                                                                        {
                                                                            "label": "Horizontal",
                                                                            "value": "horizontal",
                                                                        },
                                                                    ],
                                                                    value="horizontal",
                                                                ),
                                                                html.P(
                                                                    "Bandlabel"
                                                                ),
                                                                dcc.Dropdown(
                                                                    id="bandlabel-switch",
                                                                    options=[
                                                                        {
                                                                            "label": "Label On",
                                                                            "value": True,
                                                                        },
                                                                        {
                                                                            "label": "Label Off",
                                                                            "value": False,
                                                                        },
                                                                    ],
                                                                    value=True,
                                                                ),
                                                                html.P(
                                                                    "Chromosome label"
                                                                ),
                                                                dcc.Dropdown(
                                                                    id="chromlabel-switch",
                                                                    options=[
                                                                        {
                                                                            "label": "Label On",
                                                                            "value": True,
                                                                        },
                                                                        {
                                                                            "label": "Label Off",
                                                                            "value": False,
                                                                        },
                                                                    ],
                                                                    value=True,
                                                                ),
                                                                html.P(
                                                                    "Fully banded"),
                                                                dcc.Dropdown(
                                                                    id="fullband-switch",
                                                                    options=[
                                                                        {
                                                                            "label": "Bands On",
                                                                            "value": True,
                                                                        },
                                                                        {
                                                                            "label": "Bands Off",
                                                                            "value": False,
                                                                        },
                                                                    ],
                                                                    value=True,
                                                                ),
                                                                html.P(
                                                                    "Non-nuclear Chromosomes"
                                                                ),
                                                                dcc.Dropdown(
                                                                    id="nuclear-switch",
                                                                    options=[
                                                                        {
                                                                            "label": "On",
                                                                            "value": True,
                                                                        },
                                                                        {
                                                                            "label": "Off",
                                                                            "value": False,
                                                                        },
                                                                    ],
                                                                    value=False,
                                                                ),
                                                                html.P(
                                                                    "Rotatable"),
                                                                dcc.Dropdown(
                                                                    id="rotatable-switch",
                                                                    options=[
                                                                        {
                                                                            "label": "Rotate Enable",
                                                                            "value": True,
                                                                        },
                                                                        {
                                                                            "label": "Rotate Disable",
                                                                            "value": False,
                                                                        },
                                                                    ],
                                                                    value=True,
                                                                ),
                                                                html.P("Sex"),
                                                                dcc.Dropdown(
                                                                    id="sex-switch",
                                                                    options=[
                                                                        {
                                                                            "label": "Male",
                                                                            "value": "male",
                                                                        },
                                                                        {
                                                                            "label": "Female",
                                                                            "value": "female",
                                                                        },
                                                                    ],
                                                                    value="male",
                                                                ),
                                                            ]
                                                        ),
                                                        html.P("Chr Margin"),
                                                        dcc.Input(
                                                            id="chr-margin-input",
                                                            placeholder="Enter a value...",
                                                            type="number",
                                                            value=10,
                                                            style={
                                                                "width": "100%"}
                                                        ),
                                                        html.P("Chr Height"),
                                                        dcc.Input(
                                                            id="chr-height-input",
                                                            placeholder="Enter a value...",
                                                            type="number",
                                                            value=300,
                                                            style={
                                                                "width": "100%"}
                                                        ),
                                                        html.P("Chr Width"),
                                                        dcc.Input(
                                                            id="chr-width-input",
                                                            placeholder="Enter a value...",
                                                            type="number",
                                                            value=8,
                                                            style={
                                                                "width": "100%"}
                                                        ),
                                                        html.P("Resolution"),
                                                        dcc.Dropdown(
                                                            id="resolution-select",
                                                            options=[
                                                                {
                                                                    "label": "550 bphs",
                                                                    "value": 550,
                                                                },
                                                                {
                                                                    "label": "650 bphs",
                                                                    "value": 850,
                                                                },
                                                                {
                                                                    "label": "Off",
                                                                    "value": 1,
                                                                },
                                                            ],
                                                            value=1,
                                                        ),
                                                    ],
                                                ),
                                            ],
                                            className="three columns",
                                            style={
                                                "max-height": "74vh",
                                                "overflow-y": "auto"
                                            }
                                        ),
                                        html.Div(
                                            [
                                                dash_bio.DashIdeogram(
                                                    id="ideo-custom",
                                                    dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                                                    orientation="horizontal",
                                                    organism='human',
                                                    showBandLabels=True,
                                                    chrHeight=300,
                                                    chrMargin=10,
                                                    chrWidth=8,
                                                    rotatable=True,
                                                    style={
                                                        "max-height": "74vh",
                                                        "overflow-y": "auto"
                                                    }
                                                ),
                                            ],
                                            className="nine columns",
                                        ),
                                    ],
                                    className="row",
                                )
                            ]
                        )
                    ],
                ),
                dcc.Tab(
                    label="Homology",
                    children=[
                        html.Div(
                            [
                                html.Div(
                                    [
                                        html.H5("Options"),
                                        html.P("Select Chromosome"),
                                        dcc.Input(
                                            id="chr-select",
                                            placeholder="Enter chromsomes ex: 1,2",
                                            type="text",
                                            value="",
                                        ),
                                        html.P("Chr1: Start-one"),
                                        dcc.Input(
                                            id="chrone-startone",
                                            placeholder="ChrOne StartOne",
                                            type="number",
                                            value=50000,
                                        ),
                                        html.P("Chr1 : Stop-one"),
                                        dcc.Input(
                                            id="chrone-stopone",
                                            placeholder="Enter chromsomes",
                                            type="number",
                                            value=900000,
                                        ),
                                        html.P("Chr1: Start-two"),
                                        dcc.Input(
                                            id="chrone-starttwo",
                                            placeholder="ChrOne Starttwo",
                                            type="number",
                                            value=155701383,
                                        ),
                                        html.P("Chr1 : Stop-two"),
                                        dcc.Input(
                                            id="chrone-stoptwo",
                                            placeholder="Enter chromsomes",
                                            type="number",
                                            value=156030895,
                                        ),
                                        html.P("Chr2: Start-one"),
                                        dcc.Input(
                                            id="chrtwo-startone",
                                            placeholder="Chrtwo StartOne",
                                            type="number",
                                            value=10001,
                                        ),
                                        html.P("Chr2 : Stop-one"),
                                        dcc.Input(
                                            id="chrtwo-stopone",
                                            placeholder="Enter chromsomes",
                                            type="number",
                                            value=2781479,
                                        ),
                                        html.P("Chr2: Start-two"),
                                        dcc.Input(
                                            id="chrtwo-starttwo",
                                            placeholder="Chrtwo Starttwo",
                                            type="number",
                                            value=56887903,
                                        ),
                                        html.P("Chr2 : Stop-two"),
                                        dcc.Input(
                                            id="chrtwo-stoptwo",
                                            placeholder="Enter chromsomes",
                                            type="number",
                                            value=57217415,
                                        ),
                                    ],
                                    className="three columns",
                                    style={"max-height": "74vh",
                                           "overflow-y": "auto"}
                                ),
                                html.Div(
                                    [
                                        dash_bio.DashIdeogram(
                                            id="ideo-homology",
                                            localOrganism=human_data,
                                            organism="human",
                                            orientation="vertical",
                                            showBandLabels=True,
                                            showChromosomeLabels=True,
                                            showFullyBanded=True,
                                            fullChromosomeLabels=True,
                                            chrHeight=400,
                                            chrMargin=200,
                                            rotatable=False,
                                            perspective="comparative",
                                            chromosomes=['1', '2'],
                                            homology={
                                                        "chrOne": {
                                                            "organism": "9606",
                                                            "start": [10001, 155101383],
                                                            "stop": [2781479, 156030895],
                                                        },
                                                "chrTwo": {
                                                            "organism": "9606",
                                                            "start": [50000, 155101383],
                                                            "stop": [900000, 156130895],
                                                        },
                                            },
                                        ),
                                    ], className="nine columns"
                                ),
                            ],
                            className="row",
                        )
                    ],
                ),
                dcc.Tab(
                    label="Brush",
                    children=[
                        html.Div(
                            [
                                html.Div(
                                    [
                                        html.H5("Options"),
                                        html.P("Chromosomes"),
                                        dcc.Input(
                                            id="chr-brush",
                                            placeholder="Enter chromosome value (1-22 , X, Y)",
                                            type="text",
                                            value="",
                                            style={"width": "100%"}
                                        ),
                                        dcc.Textarea(
                                            id="brush-print",
                                            placeholder='',
                                            value='This is a TextArea component',
                                            style={'width': '100%'}
                                        ),
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
                    ],
                ),
                dcc.Tab(
                    label="Annotations",
                    children=[
                        html.Div(
                            [
                                html.Div(
                                    [
                                        html.H6("Annotations"),
                                        html.Div(
                                            [
                                                dcc.Dropdown(
                                                    id="annotation-select",
                                                    options=[
                                                        {
                                                            "label": "Histogram",
                                                            "value": "histogram",
                                                        },
                                                        {
                                                            "label": "Overlay-1",
                                                            "value": "overlay-1",
                                                        },
                                                        {
                                                            "label": "Overlay-2",
                                                            "value": "overlay-2",
                                                        },
                                                    ],
                                                    value="histogram",
                                                ),
                                                html.P(
                                                    "Annotation Color"),
                                                dcc.Input(
                                                    id="color-input",
                                                    placeholder="Annotation Color",
                                                    type="text",
                                                    value="#FF0000",
                                                    style={"width": "100%"}
                                                ),
                                                html.P(
                                                    "Annotation Height"),
                                                dcc.Input(
                                                    id="height-input",
                                                    placeholder="Annotation Height",
                                                    type="text",
                                                    value="3",
                                                    style={"width": "100%"}
                                                ),
                                                html.P("Bar Width"),
                                                dcc.Input(
                                                    id="bar-input",
                                                    placeholder="Annotation Height",
                                                    type="number",
                                                    value=3,
                                                    min=1,
                                                    style={"width": "100%"}
                                                ),
                                                html.P(
                                                    "Orientation"),
                                                dcc.Dropdown(
                                                    id="orientation-anote",
                                                    options=[
                                                        {
                                                            "label": "Vertical",
                                                            "value": "vertical",
                                                        },
                                                        {
                                                            "label": "Horizontal",
                                                            "value": "horizontal",
                                                        },
                                                    ],
                                                    value="horizontal",
                                                ),
                                                html.P(
                                                    "Annotation Hover Data (Overlay-1/2)"),
                                                dcc.Textarea(
                                                    id="annote-data",
                                                    placeholder='',
                                                    value='',
                                                    style={'width': '100%'}
                                                ) 
                                            ],
                                            style={
                                                "overflow-y": "auto",
                                                "max-height": "75vh",
                                            },
                                        )

                                    ],
                                    className="three columns",
                                ),
                                html.Div(
                                    [
                                        dash_bio.DashIdeogram(
                                            id="ideo-annotations",
                                            dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                                            organism="human",
                                            assembly="GRCh37",
                                            orientation="horizontal",
                                            showBandLabels=True,
                                            chrHeight=275,
                                            chrMargin=28,
                                            rotatable=True,
                                            filterable=True,
                                            style={
                                                    "max-height": "73vh",
                                                    "overflow-y": "auto"
                                            }
                                        ),
                                    ],
                                    className="nine columns",
                                ),
                            ]
                        )
                    ],
                ),
            ],
        ),
    ]
)


def callbacks(app):
    # Brush
    @app.callback(Output("brush-print", "value"), [Input("brush-ideo", "brushData")])
    def brush_data(brush_data):
        if brush_data != None:
            start = "Start: " + brush_data["start"] + " "
            to = "End: " + brush_data["end"] + " "
            extent = "Extent: " + brush_data["extent"]
            return start + to + extent
        return


    # Organism
    @app.callback(
        Output("ideo-custom", "organism"),
        [Input("organism-change", "value")]
    )
    def organism_change_dropdown(dropdown):
        return dropdown

    # ShowBandLabels


    @app.callback(
        Output("ideo-custom", "showBandLabels"),
        [Input("bandlabel-switch", "value")]
    )
    def bandlabel_change(bandlabel):
        return bandlabel


    # ShowChromLabels
    @app.callback(
        Output("ideo-custom", "showChromosomeLabels"),
        [Input("chromlabel-switch", "value")]
    )
    def showChromosomeLabels(value):
        return value


    # Show banded
    @app.callback(
        Output("ideo-custom", "showFullyBanded"),
        [Input("fullband-switch", "value")]
    )
    def showFullyBanded(value):
        return value


    # Show nonnuclear
    @app.callback(
        Output("ideo-custom", "showNonNuclearChromosomes"),
        [Input("nuclear-switch", "value")]
    )
    def showNonNuclearChromosomes(value):
        return value


    # Orientation
    @app.callback(
        Output("ideo-custom", "orientation"),
        [Input("orientation-switch", "value")]
    )
    def orientation_change(orientation):
        return orientation


    # Chr Width
    @app.callback(
        Output("ideo-custom", "chrWidth"),
        [Input("chr-width-input", "value")]
    )
    def chr_width(value):
        return value


    # Chr Height
    @app.callback(
        Output("ideo-custom", "chrHeight"),
        [Input("chr-height-input", "value")]
    )
    def chr_height(value):
        return value


    # Chr Margin
    @app.callback(
        Output("ideo-custom", "chrMargin"),
        [Input("chr-margin-input", "value")]
    )
    def chr_width(value):
        return value


    # Rotatable
    @app.callback(
        Output("ideo-custom", "rotatable"),
        [Input("rotatable-switch", "value")]
    )
    def rotatable(value):
        return value


    # Resolution
    @app.callback(
        Output("ideo-custom", "resolution"),
        [Input("resolution-select", "value")]
    )
    def resolution(value):
        if value != 1:
            return value

    # Sex


    @app.callback(
        Output("ideo-custom", "sex"),
        [Input("sex-switch", "value")]
    )
    def sex(value):
        return value

    ### Annotation Callbacks

    # Select Annotations Layout
    @app.callback(
        Output("ideo-annotations", "annotationsLayout"),
        [Input("annotation-select", "value")]
    )
    def annot_select(value):
        if value == "tracks" or value == "overlay-2":
            return ""
        elif value == "overlay-1":
            return "overlay"
        return value


    # Bar width
    @app.callback(
        Output("ideo-annotations", "barWidth"),
        [Input("annotation-select", "value"),
        Input("bar-input", "value")],
    )
    def barWidth(select, value):
        return value


    # Dataset
    @app.callback(
        Output("ideo-annotations", "annotationsPath"),
        [Input("annotation-select", "value")]
    )
    def annot_path(value):
        if value == "tracks":
            return None
        elif value == "histogram":
            return "https://eweitz.github.io/ideogram/data/annotations/SRR562646.json"
        elif value == "overlay-1":
            return "https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json"
        elif value == "overlay-2":
            return (
                "https://eweitz.github.io/ideogram/data/annotations/1000_virtual_snvs.json"
            )


    # Assembly
    @app.callback(
        Output("ideo-annotations", "assembly"),
        [Input("annotation-select", "value")]
    )
    def annot_assembly(value):
        if value == "histogram":
            return "GRCh37"
        return None


    @app.callback(
        Output("ideo-annotations", "annotationTracks"),
        [Input("annotation-select", "value")],
    )
    def annot_tracks(value):
        if value == "overlay-2":
            value = [
                {
                    "id": "pathogenicTrack",
                    "displayName": "Pathogenic",
                    "color": "#F00",
                    "shape": "triangle",
                },
                {
                    "id": "uncertainSignificanceTrack",
                    "displayName": "Uncertain significance",
                    "color": "#CCC",
                    "shape": "triangle",
                },
                {
                    "id": "benignTrack",
                    "displayName": "Benign",
                    "color": "#8D4",
                    "shape": "triangle",
                },
            ]
            return value
        return None

    # Annot Height
    @app.callback(
        Output("ideo-annotations", "annotationHeight"),
        [Input("height-input", "value")]
    )
    def annot_height(value):
        if value != "":
            return value
        return None


    # Annot Color
    @app.callback(
        Output("ideo-annotations", "annotationsColor"),
        [Input("color-input", "value")]
    )
    def annot_color(value):
        if value != "":
            return "{}".format(value)
        return None

    # Orientation
    @app.callback(
        Output("ideo-annotations", "orientation"),
        [Input("orientation-anote", "value")]
    )
    def orientation_change_annote(orientation):
        return orientation

    ### Homology Callbacks

    @app.callback(
        Output("ideo-homology", "chromosomes"),
        [Input("chr-select", "value")],
        [State("ideo-homology", "chromosomes")],
    )
    def ideo_select(value, chromosomes):
        if "," in value:
            value = value.split(",")
            return value
        return ['X', 'Y']


    @app.callback(
        Output("ideo-homology", "homology"),
        [
            Input("chrone-startone", "value"),
            Input("chrone-stopone", "value"),
            Input("chrone-starttwo", "value"),
            Input("chrone-stoptwo", "value"),
            Input("chrtwo-startone", "value"),
            Input("chrtwo-stopone", "value"),
            Input("chrtwo-starttwo", "value"),
            Input("chrtwo-stoptwo", "value"),
        ],
    )
    def ideo_homology(
        startOne, stopOne, startTwo, stopTwo, startOneA, stopOneA, startTwoA, stopTwoA
    ):
        return {
            "chrOne": {
                "organism": "9606",
                "start": [startOne, startTwo],
                "stop": [stopOne, stopTwo],
            },
            "chrTwo": {
                "organism": "9606",
                "start": [startOneA, startTwoA],
                "stop": [stopOneA, stopTwoA],
            },
        }


    @app.callback(
        Output("brush-ideo", "chromosomes"),
        [Input("chr-brush", "value")]
    )
    def ideo_select(value):
        if value is not "":
            value = str(value)
            return [value]
        return ["1"]


    @app.callback(
        Output("brush-ideo", "brush"),
        [Input("chr-brush", "value")]
    )
    def ideo_select_brush(value):
        if value != "":
            value = "chr{}:1-10000000".format(value)
            return value
        else:
            return "chr1:1-10000000"

    # Title Color Change onRotate
    @app.callback(
        Output("title", "style"),
        [Input("ideo-custom", "rotated")],
        [State("title", "style")]
    )
    def ideo_rotated(value, style):
        if value:
            style["color"] = "#EF553B"
            return style
        style["color"] = "#FFF"
        return style


    # Event Call Annotation


    @app.callback(
        Output("annote-data", "value"),
        [Input("ideo-annotations", "annotationsData")]
    )
    def annoteData(data):
        if data == None:
            return "None"
        return data
