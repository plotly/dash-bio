import dash_bio
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html


def description():
    return 'Compare, and analyze chromosome bands with the Dash Ideogram.'


def layout():
    return html.Div(
        [
            html.Div(
                id="header-div",
                style={"background-color": "#119DFF"},
                children=[
                    html.H2(
                        "Dash Bio: Ideogram Selector",
                        id="title",
                        style={"color": "green"}
                    ),
                    html.A(
                        html.Img(
                            src='./assets/dashbio_logo.svg'
                        ),
                        href="http://www.dashdaq.io",
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
                                                            html.P(
                                                                "Annotation Event"),
                                                            html.P(
                                                                id="annoteData"),
                                                            html.P("Organism"),
                                                            dcc.Dropdown(
                                                                id="organism-change",
                                                                options=[
                                                                    {
                                                                        "label": "Human",
                                                                        "value": "human",
                                                                    },
                                                                    {
                                                                        "label": "Mouse",
                                                                        "value": "mouse",
                                                                    },
                                                                    {
                                                                        "label": "Rattus-norvegicus",
                                                                        "value": "Rattus-norvegicus",
                                                                    },
                                                                    {
                                                                        "label": "Homo-sapiens-400",
                                                                        "value": "homo-sapiens-400",
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
                                                                        "label": "GCF_000001405-400",
                                                                        "value": "homo-sapiens-GCF_000001405.12-400",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405-550",
                                                                        "value": "homo-sapiens-GCF_000001405.12-550",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405-850",
                                                                        "value": "homo-sapiens-GCF_000001405.12-850",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.12",
                                                                        "value": "homo-sapiens-GCF_000001405.12",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.13-550",
                                                                        "value": "homo-sapiens-GCF_000001405.13-550",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.13-850",
                                                                        "value": "homo-sapiens-GCF_000001405.13-850",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.13",
                                                                        "value": "homo-sapiens-GCF_000001405.13",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.26-400",
                                                                        "value": "homo-sapiens-GCF_000001405.26-400",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.26-550",
                                                                        "value": "homo-sapiens-GCF_000001405.26-550",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.26",
                                                                        "value": "homo-sapiens-GCF_000001405.26",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001405.37",
                                                                        "value": "homo-sapiens-GCF_000001405.37",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000306695.2",
                                                                        "value": "homo-sapiens-GCF_000306695.2",
                                                                    },
                                                                    {
                                                                        "label": "Homo-sapiens-no-bands",
                                                                        "value": "homo-sapiens-no-bands",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000000045.2_NA_V2",
                                                                        "value": "ideogram_10090_GCF_000000045.2_NA_V2",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000000055.13_NA_V2",
                                                                        "value": "ideogram_10090_GCF_000000055.13_NA_V2",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000000055.14_NA_V2",
                                                                        "value": "ideogram_10090_GCF_000000055.14_NA_V2",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000000055.15_NA_V2",
                                                                        "value": "ideogram_10090_GCF_000000055.15_NA_V2",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000000055.16_NA_V2",
                                                                        "value": "ideogram_10090_GCF_000000055.16_NA_V2",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000000055.18_NA_V2",
                                                                        "value": "ideogram_10090_GCF_000000055.18_NA_V2",
                                                                    },
                                                                    {
                                                                        "label": "GCF_000001635.20",
                                                                        "value": "mus-musculus-GCF_000001635.20",
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
                                                                        "Bandlabel"),
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
                                                                    html.P(
                                                                        "Sex"),
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
                                                            html.P(
                                                                "Chr Margin"),
                                                            dcc.Input(
                                                                id="chr-margin-input",
                                                                placeholder="Enter a value...",
                                                                type="number",
                                                                value=10,
                                                            ),
                                                            html.P(
                                                                "Chr Height"),
                                                            dcc.Input(
                                                                id="chr-height-input",
                                                                placeholder="Enter a value...",
                                                                type="number",
                                                                value=300,
                                                            ),
                                                            html.P(
                                                                "Chr Width"),
                                                            dcc.Input(
                                                                id="chr-width-input",
                                                                placeholder="Enter a value...",
                                                                type="number",
                                                                value=8,
                                                            ),
                                                            html.P("Rows"),
                                                            dcc.Input(
                                                                id="row-input",
                                                                placeholder="Enter a value...",
                                                                type="number",
                                                                value=0,
                                                            ),
                                                            html.P(
                                                                "Resolution"),
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
                                                            html.P("Ploidy"),
                                                            dcc.Input(
                                                                id="ploidy-input",
                                                                placeholder="Enter a value...",
                                                                type="number",
                                                                value=1,
                                                                max=2,
                                                            ),
                                                        ],
                                                        style={
                                                            "overflow-y": "auto",
                                                            "max-height": "40vh",
                                                        },
                                                    ),
                                                    html.H6("Annotations"),
                                                    html.Div(
                                                        [
                                                            dcc.Dropdown(
                                                                id="annotation-select",
                                                                options=[
                                                                    {
                                                                        "label": "Heatmap",
                                                                        "value": "heatmap",
                                                                    },
                                                                    {
                                                                        "label": "Tracks",
                                                                        "value": "tracks",
                                                                    },
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
                                                                value="tracks",
                                                            ),
                                                            html.P(
                                                                "Annotation Path"),
                                                            dcc.Input(
                                                                id="path-input",
                                                                placeholder="Enter Annotation URL",
                                                                type="text",
                                                                value="",
                                                                disabled=True,
                                                            ),
                                                            html.P(
                                                                "Annotation Color"),
                                                            dcc.Input(
                                                                id="color-input",
                                                                placeholder="Annotation Color",
                                                                type="text",
                                                                value="",
                                                            ),
                                                            html.P(
                                                                "Annotation Height"),
                                                            dcc.Input(
                                                                id="height-input",
                                                                placeholder="Annotation Height",
                                                                type="text",
                                                                value="",
                                                            ),
                                                            html.P("Assembly"),
                                                            dcc.Input(
                                                                id="assembly-input",
                                                                placeholder="Assembly",
                                                                type="text",
                                                                value="",
                                                                disabled=True,
                                                            ),
                                                            html.P(
                                                                "Bar Width"),
                                                            dcc.Input(
                                                                id="bar-input",
                                                                placeholder="Annotation Height",
                                                                type="number",
                                                                value=3,
                                                                min=1,
                                                            ),
                                                            html.P("Shape"),
                                                            dcc.Dropdown(
                                                                id="shape-select",
                                                                options=[
                                                                    {
                                                                        "label": "Triangle",
                                                                        "value": "triangle",
                                                                    },
                                                                    {
                                                                        "label": "Circle",
                                                                        "value": "circle",
                                                                    },
                                                                ],
                                                                value="triangle",
                                                            ),
                                                            html.P(
                                                                "Filterable"),
                                                            dcc.Dropdown(
                                                                id="filter-select",
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
                                                        ],
                                                        style={
                                                            "overflow-y": "auto",
                                                            "max-height": "40vh",
                                                        },
                                                    ),
                                                ],
                                                className="three columns",
                                            ),
                                            html.Div(
                                                [
                                                    dash_bio.DashIdeogram(
                                                        id="ideo",
                                                        dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                                                        orientation="vertical",
                                                        showBandLabels=True,
                                                        chrHeight=400,
                                                        chrMargin=200,
                                                        rotatable=True,
                                                        style={
                                                            "max-height": "95vh",
                                                            "overflow": "auto",
                                                            "position": "absolute"
                                                        },
                                                    )
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
                                            html.P("Chromosomes"),
                                            dcc.Input(
                                                id="chr-select",
                                                placeholder="Enter chromsomes",
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
                                    ),
                                    html.Div(
                                        [
                                            dash_bio.DashIdeogram(
                                                id="ideo-homology",
                                                dataDir="https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/",
                                                organism=["human", "mouse"],
                                                orientation="vertical",
                                                showBandLabels=True,
                                                showChromosomeLabels=True,
                                                showFullyBanded=True,
                                                fullChromosomeLabels=True,
                                                chrHeight=400,
                                                chrMargin=200,
                                                rotatable=False,
                                                perspective="comparative",
                                                chromosomes={
                                                    "human": ["1"],
                                                    "mouse": ["4"],
                                                },
                                                homology={
                                                    "chrOne": {
                                                        "organism": "9606",
                                                        "start": [50000, 155701383],
                                                        "stop": [900000, 156030895],
                                                    },
                                                    "chrTwo": {
                                                        "organism": "10090",
                                                        "start": [10001, 50000000],
                                                        "stop": [2781479, 57217415],
                                                    },
                                                },
                                            )
                                        ],
                                        className="nine columns",
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
                                                placeholder="Enter chromsomes",
                                                type="text",
                                                value="",
                                            ),
                                            html.P(id="brushPrint"),
                                            dcc.Dropdown(
                                                id="brush-organism",
                                                options=[
                                                    {"label": "Human",
                                                     "value": "data_one"},
                                                    {"label": "Mouse",
                                                     "value": "data_two"},
                                                ],
                                                value="data_one",
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
                                            )
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
    @app.callback(Output("brushPrint", "children"), [Input("brush-ideo", "brushData")])
    def brush_data(brush_data):
        if brush_data != None:
            start = "Start: " + brush_data["start"] + " "
            to = "End: " + brush_data["end"] + " "
            extent = "Extent: " + brush_data["extent"]
            return start + to + extent
        return

    # Organism
    @app.callback(
        Output("ideo", "organism"),
        [Input("organism-change", "value")]
    )
    def organism_change_dropdown(dropdown):
        return dropdown

    # ShowBandLabels
    @app.callback(
        Output("ideo", "showBandLabels"),
        [Input("bandlabel-switch", "value")]
    )
    def bandlabel_change(bandlabel):
        return bandlabel

    # ShowChromLabels
    @app.callback(
        Output("ideo", "showChromosomeLabels"),
        [Input("chromlabel-switch", "value")]
    )
    def showChromosomeLabels(value):
        return value

    # Show banded
    @app.callback(
        Output("ideo", "showFullyBanded"),
        [Input("fullband-switch", "value")]
    )
    def showFullyBanded(value):
        return value

    # Show nonnuclear
    @app.callback(
        Output("ideo", "showNonNuclearChromosomes"),
        [Input("nuclear-switch", "value")]
    )
    def showNonNuclearChromosomes(value):
        return value

    # Orientation
    @app.callback(
        Output("ideo", "orientation"),
        [Input("orientation-switch", "value")]
    )
    def orientation_change(orientation):
        return orientation

    # Chr Width
    @app.callback(
        Output("ideo", "chrWidth"),
        [Input("chr-width-input", "value")]
    )
    def chr_width(value):
        return value

    # Chr Height
    @app.callback(
        Output("ideo", "chrHeight"),
        [Input("chr-height-input", "value")]
    )
    def chr_height(value):
        return value

    # Chr Margin
    @app.callback(
        Output("ideo", "chrMargin"),
        [Input("chr-margin-input", "value")]
    )
    def chr_width(value):
        return value

    # Rotatable
    @app.callback(
        Output("ideo", "rotatable"),
        [Input("rotatable-switch", "value")]
    )
    def rotatable(value):
        return value

    # Resolution
    @app.callback(
        Output("ideo", "resolution"),
        [Input("resolution-select", "value")]
    )
    def resolution(value):
        if value != 1:
            return value

    # Rows
    @app.callback(
        Output("ideo", "rows"),
        [Input("row-input", "value")]
    )
    def rows(value):
        if value != 0:
            return value
        return None

    # Sex
    @app.callback(
        Output("ideo", "sex"),
        [Input("sex-switch", "value")]
    )
    def sex(value):
        return value

    # Ploidy
    @app.callback(
        Output("ideo", "ploidy"),
        [Input("ploidy-input", "value")]
    )
    def ploidy(value):
        return value

    ### Annotation Callbacks

    # Select Annotations Layout
    @app.callback(
        Output("ideo", "annotationsLayout"),
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
        Output("ideo", "barWidth"),
        [Input("annotation-select", "value"),
         Input("bar-input", "value")],
    )
    def barWidth(select, value):
        return value

    # Set link to dataset
    @app.callback(
        Output("path-input", "value"),
        [Input("annotation-select", "value")]
    )
    def annot_layout(value):
        if value == "tracks":
            return ""
        elif value == "histogram" or value == "heatmap":
            return "https://eweitz.github.io/ideogram/data/annotations/SRR562646.json"
        elif value == "overlay-1":
            return "https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json"
        elif value == "overlay-2":
            return (
                "https://eweitz.github.io/ideogram/data/annotations/1000_virtual_snvs.json"
            )

    # Plug in link to Dataset
    @app.callback(
        Output("ideo", "annotationsPath"),
        [Input("annotation-select", "value")]
    )
    def annot_path(value):
        if value == "tracks":
            return ""
        elif value == "histogram" or value == "heatmap":
            return "https://eweitz.github.io/ideogram/data/annotations/SRR562646.json"
        elif value == "overlay-1":
            return "https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json"
        elif value == "overlay-2":
            return (
                "https://eweitz.github.io/ideogram/data/annotations/1000_virtual_snvs.json"
            )

    # Plug in Assembly
    @app.callback(
        Output("ideo", "assembly"),
        [Input("annotation-select", "value")]
    )
    def annot_assembly(value):
        if value == "histogram" or value == "heatmap":
            return "GRCh37"
        return None

    # Plug in assembly to input
    @app.callback(
        Output("assembly-input", "value"),
        [Input("ideo", "assembly")]
    )
    def assembly(value):
        if value != "":
            return value
        return None

    @app.callback(
        Output("ideo", "annotationTracks"),
        [Input("annotation-select", "value"),
         Input("shape-select", "value")],
    )
    def annot_tracks(value, Shape):
        if value == "heatmap":
            value = [
                {"id": "expressionLevelTrack", "displayName": "Expression level"},
                {"id": "geneTypeTrack", "displayName": "Gene type"},
            ]
            return value
        elif value == "overlay-2":
            value = [
                {
                    "id": "pathogenicTrack",
                    "displayName": "Pathogenic",
                    "color": "#F00",
                    "shape": Shape,
                },
                {
                    "id": "uncertainSignificanceTrack",
                    "displayName": "Uncertain significance",
                    "color": "#CCC",
                    "shape": Shape,
                },
                {
                    "id": "benignTrack",
                    "displayName": "Benign",
                    "color": "#8D4",
                    "shape": Shape,
                },
            ]
            return value
        return None

    @app.callback(
        Output("ideo", "heatmaps"),
        [Input("annotation-select", "value")]
    )
    def annot_path(value):
        if value == "heatmap":
            value = [
                {
                    "key": "expression-level",
                    "thresholds": [["2", "#88F"], ["4", "#CCC"], ["+", "#F33"]],
                },
                {
                    "key": "gene-type",
                    "thresholds": [
                        ["0", "#00F"],
                        ["1", "#0AF"],
                        ["2", "#AAA"],
                        ["3", "#FA0"],
                        ["4", "#F00"],
                    ],
                },
            ]
            return value
        return None

    # Filterable
    @app.callback(
        Output("ideo", "filterable"),
        [Input("ideo", "annotationsLayout")]
    )
    def filter_annot(value):
        if value == "histogram":
            return True
        return False

    # Filterable
    @app.callback(
        Output("filter-select", "value"),
        [Input("ideo", "filterable")]
    )
    def filter(filterable):
        return filterable

    # Annot Height
    @app.callback(
        Output("ideo", "annotationHeight"),
        [Input("height-input", "value")]
    )
    def annot_height(value):
        if value != "":
            return value
        return None

    # Annot Color
    @app.callback(
        Output("ideo", "annotationsColor"),
        [Input("color-input", "value")]
    )
    def annot_color(value):
        if value != "":
            return "#{}".format(value)
        return None

    @app.callback(
        Output("ideo-homology", "chromosomes"),
        [Input("chr-select", "value")],
        [State("ideo-homology", "chromosomes")],
    )
    def ideo_select(value, chromosomes):
        if "," in value:
            value = value.split(",")

            return {"human": [str(value[0])], "mouse": [str(value[1])]}
        else:
            return {"human": ["1"], "mouse": ["4"]}

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
                "organism": "10090",
                "start": [startOneA, startTwoA],
                "stop": [stopOneA, stopTwoA],
            },
        }

    @app.callback(
        Output("brush-ideo", "chromosomes"),
        [Input("chr-brush", "value")],
        [State("ideo", "chromosomes")],
    )
    def ideo_select(value, chromosomes):
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

    # Organism
    @app.callback(
        Output("brush-ideo", "organism"),
        [Input("brush-organism", "value")]
    )
    def organism_change_brush(dropdown):
        if dropdown == "data_one":
            return 'human'
        elif dropdown == "data_two":
            return 'mouse'

    @app.callback(
        Output("title", "style"),
        [Input("ideo", "rotated")],
        [State("title", "style")]
    )
    def ideo_rotated(value, style):
        if value:
            style["color"] = "#EF553B"
            return style
        style["color"] = "#00cc96"
        return style

    # Event Call Annotation

    @app.callback(
        Output("annoteData", "children"),
        [Input("ideo", "annotationsData")]
    )
    def annoteData(data):
        if data == None:
            return "None"
        return data
