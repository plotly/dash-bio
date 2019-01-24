import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_bio
from dash_bio.utils import ideogramParser as ideoParser

rat_data = ideoParser.ncbi_gdp_to_list(
    "./tests/dash/sample_data/ideogram_10116_GCF_000000225.4_NA_V1")


def description():
    return "Compare, and analyze chromosome bands with the Dash Ideogram."


def header_colors():
    return {"bg_color": "#A2B1C6", "font_color": "#FFF", "light_logo": True}


# Used to simplify chromosome inputs for Homology
def chromosome_div(
        id_tag="chr",
        name_tag="Chr",
        startone=0,
        stopone=1,
        starttwo=0,
        stoptwo=1
):
    return html.Div(
        [
            html.P("%s Start-one" % name_tag),
            dcc.Input(
                id="%s-startone" % id_tag,
                placeholder="%s StartOne",
                type="number",
                value=startone,
                className="ideogram-homology-inputs",
            ),
            html.P("%s Stop-one" % name_tag),
            dcc.Input(
                id="%s-stopone" % id_tag,
                placeholder="Enter chromoomes",
                type="number",
                value=stopone,
                className="ideogram-homology-inputs",
            ),
            html.P("%s Start-two" % name_tag),
            dcc.Input(
                id="%s-starttwo" % id_tag,
                placeholder="%s Starttwo" % name_tag,
                type="number",
                value=starttwo,
                className="ideogram-homology-inputs",
            ),
            html.P("%s Stop-two" % name_tag),
            dcc.Input(
                id="%s-stoptwo" % id_tag,
                placeholder="Enter chromsomes",
                type="number",
                value=stoptwo,
                className="ideogram-homology-inputs",
            ),
        ]
    )


def layout():
    return html.Div(
        [
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
                                            html.H5(
                                                "Options",
                                                id="ideogram-options"
                                            ),
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
                                                                "label": "Zea-mays",
                                                                "value": "zea-mays",
                                                            },
                                                            {
                                                                "label": "Pan-troglodytes",
                                                                "value": "pan-troglodytes",
                                                            },
                                                            {
                                                                "label": "Macaca-fascicularis",
                                                                "value": "macaca-fascicularis",
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
                                                                "Chromosome label"),
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
                                                    html.P(
                                                        "Resolution (Human only)"),
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
                                                    html.P("Chr Margin"),
                                                    dcc.Input(
                                                        id="chr-margin-input",
                                                        placeholder="Enter a value...",
                                                        type="number",
                                                        value=10,
                                                        className="ideogram-column-content",
                                                    ),
                                                    html.P("Chr Height"),
                                                    dcc.Input(
                                                        id="chr-height-input",
                                                        placeholder="Enter a value...",
                                                        type="number",
                                                        value=300,
                                                        className="ideogram-column-content",
                                                    ),
                                                    html.P("Chr Width"),
                                                    dcc.Input(
                                                        id="chr-width-input",
                                                        placeholder="Enter a value...",
                                                        type="number",
                                                        value=8,
                                                        className="ideogram-column-content",
                                                    ),
                                                ]
                                            ),
                                        ],
                                        className="two columns ideogram-column",
                                    ),
                                    html.Div(
                                        [
                                            dash_bio.Ideogram(
                                                id="ideo-custom",
                                                dataDir="https://unpkg.com/ideogram@1.3.0/"
                                                        "dist/data/bands/native/",
                                                orientation="horizontal",
                                                organism="human",
                                                chrHeight=300,
                                                chrMargin=10,
                                                chrWidth=8,
                                                rotatable=True,
                                            )
                                        ],
                                        className="ten columns ideogram-custom",
                                    ),
                                ],
                                className="row",
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
                                            html.P("Select Two Chromosomes"),
                                            dcc.Input(
                                                id="chr-select",
                                                placeholder="Ex: 1,2",
                                                type="text",
                                                value="",
                                                className="ideogram-homology-inputs",
                                            ),
                                            chromosome_div(
                                                id_tag="chrone",
                                                name_tag="Chr 1",
                                                startone=50000,
                                                stopone=900000,
                                                starttwo=155701383,
                                                stoptwo=156030895,
                                            ),
                                            chromosome_div(
                                                id_tag="chrtwo",
                                                name_tag="Chr 2",
                                                startone=10001,
                                                stopone=2781479,
                                                starttwo=56887903,
                                                stoptwo=57217415,
                                            ),
                                        ],
                                        className="two columns ideogram-column",
                                    ),
                                    html.Div(
                                        [
                                            dash_bio.Ideogram(
                                                id="ideo-homology",
                                                localOrganism=rat_data,
                                                orientation="vertical",
                                                showBandLabels=True,
                                                showChromosomeLabels=True,
                                                showFullyBanded=True,
                                                fullChromosomeLabels=True,
                                                chrHeight=400,
                                                chrMargin=200,
                                                rotatable=False,
                                                perspective="comparative",
                                                chromosomes=["1", "2"],
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
                                            )
                                        ],
                                        className="ten columns",
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
                                    html.H5("Options"),
                                    html.P("Enter Chromosome Value"),
                                    dcc.Input(
                                        id="chr-brush",
                                        placeholder="Ex: (1 - 22 , X, Y)",
                                        type="text",
                                        value="",
                                        className="ideogram-column-content",
                                    ),
                                    html.Div(
                                        children=[
                                            "Start: ",
                                            html.Span(
                                                "",
                                                id="brush-print-start",
                                                style={"color": "#0D76BF"},
                                            ),
                                            html.Br(),
                                            "Extent: ",
                                            html.Span(
                                                "",
                                                id="brush-print-extent",
                                                style={"color": "#0D76BF"},
                                            ),
                                            html.Br(),
                                            "End: ",
                                            html.Span(
                                                "",
                                                id="brush-print-end",
                                                style={"color": "#0D76BF"},
                                            ),
                                        ],
                                        className="ideogram-databox-parameters",
                                    ),
                                ],
                                className="two columns ideogram-column",
                            ),
                            html.Div(
                                [
                                    dash_bio.Ideogram(
                                        id="brush-ideo",
                                        dataDir="https://unpkg.com/ideogram@1.3.0/"
                                                "dist/data/bands/native/",
                                        organism="human",
                                        chromosomes=["1"],
                                        brush="chr1:1-10000000",
                                        chrHeight=900,
                                        resolution=550,
                                        orientation="horizontal",
                                    )
                                ],
                                className="ten columns",
                            ),
                        ],
                    ),
                    dcc.Tab(
                        label="Annotations",
                        children=[
                            html.Div(
                                [
                                    html.H6("Annotations"),
                                    html.Div(
                                        [
                                            html.P("Select Annotation"),
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
                                                "Annotation Color (Histogram)"),
                                            dcc.Input(
                                                id="color-input",
                                                placeholder="Annotation Color",
                                                type="text",
                                                value="#FF0000",
                                                className="ideogram-column-content",
                                            ),
                                            html.P("Bar Width (Histogram)"),
                                            dcc.Input(
                                                id="bar-input",
                                                placeholder="Annotation Height",
                                                type="number",
                                                value=3,
                                                min=1,
                                                className="ideogram-column-content",
                                            ),
                                            html.P("Annotation Height"),
                                            dcc.Input(
                                                id="height-input",
                                                placeholder="Annotation Height",
                                                type="text",
                                                value="3",
                                                className="ideogram-column-content",
                                            ),
                                            html.P("Orientation"),
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
                                            html.P("Hover Data (Overlay-1/2)"),
                                            html.Div(
                                                children=[
                                                    html.Span(
                                                        "None",
                                                        id="annote-data",
                                                        style={
                                                            "color": "#0D76BF"},
                                                    )
                                                ],
                                                className="ideogram-databox-parameters",
                                            ),
                                        ]
                                    ),
                                ],
                                className="two columns ideogram-column",
                            ),
                            html.Div(
                                [
                                    dash_bio.Ideogram(
                                        id="ideo-annotations",
                                        dataDir="https://unpkg.com/ideogram@1.3.0/"
                                                "dist/data/bands/native/",
                                        organism="human",
                                        assembly="GRCh37",
                                        orientation="horizontal",
                                        showBandLabels=True,
                                        chrHeight=275,
                                        chrMargin=28,
                                        rotatable=True,
                                        filterable=True,
                                        className="ideogram-custom",
                                    )
                                ],
                                className="ten columns",
                            ),
                        ],
                    ),
                ],
            )
        ]
    )


def callbacks(app):
    # Brush callbacks
    @app.callback(
        Output("brush-print-start", "children"),
        [Input("brush-ideo", "brushData")]
    )
    def brush_data_start(brush_data):
        answer = None
        if brush_data is not None:
            answer = brush_data["start"]
        return answer

    @app.callback(
        Output("brush-print-end", "children"),
        [Input("brush-ideo", "brushData")]
    )
    def brush_data_end(brush_data):
        answer = None
        if brush_data is not None:
            answer = brush_data["end"]
        return answer

    @app.callback(
        Output("brush-print-extent", "children"),
        [Input("brush-ideo", "brushData")]
    )
    def brush_data_extent(brush_data):
        answer = None
        if brush_data is not None:
            answer = brush_data["extent"]
        return answer

    # Custom callbacks
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
        [Input("chromlabel-switch", "value")],
    )
    def show_chromosome_labels(value):
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
    def chr_margin(value):
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
        answer = None
        if value != 1:
            answer = value
        return answer
    # Sex

    @app.callback(
        Output("ideo-custom", "sex"),
        [Input("sex-switch", "value")]
    )
    def sex(value):
        return value

    # Show banded

    @app.callback(
        Output("ideo-custom", "showFullyBanded"),
        [Input("fullband-switch", "value")]
    )
    def show_fully_banded(value):
        return value

    # Annotation Callbacks

    # Select Annotations Layout

    @app.callback(
        Output("ideo-annotations", "annotationsLayout"),
        [Input("annotation-select", "value")],
    )
    def annot_select(value):
        answer = ""
        if value in ("tracks", "overlay-2"):
            pass
        elif value == "overlay-1":
            answer = "overlay"
        return answer

    # Bar width

    @app.callback(
        Output("ideo-annotations", "barWidth"),
        [Input("annotation-select", "value"),
         Input("bar-input", "value")],
    )
    def bar_width(_, value):
        return value

    # Dataset

    @app.callback(
        Output("ideo-annotations", "annotationsPath"),
        [Input("annotation-select", "value")],
    )
    def annot_path(value):
        answer = None
        if value == "tracks":
            pass
        elif value == "histogram":
            answer = "https://eweitz.github.io/ideogram/data/annotations/SRR562646.json"
        elif value == "overlay-1":
            answer = "https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json"
        elif value == "overlay-2":
            answer = "https://eweitz.github.io/ideogram/data/annotations/1000_virtual_snvs.json"
        return answer

    # Assembly

    @app.callback(
        Output("ideo-annotations",
               "assembly"), [Input("annotation-select", "value")]
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
            data = [
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
            return data
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

    # Homology Callbacks

    @app.callback(
        Output("ideo-homology", "chromosomes"),
        [Input("chr-select", "value")],
        [State("ideo-homology", "chromosomes")],
    )
    def ideo_select(value, _):
        if "," in value:
            value = value.split(",")
            return value
        return ["X", "Y"]

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
            start_one,
            stop_one,
            start_two,
            stop_two,
            start_one_a,
            stop_one_a,
            start_two_a,
            stop_two_a
    ):
        return {
            "chr_one": {
                "organism": "9606",
                "start": [start_one, start_two],
                "stop": [stop_one, stop_two],
            },
            "chr_two": {
                "organism": "9606",
                "start": [start_one_a, start_two_a],
                "stop": [stop_one_a, stop_two_a],
            },
        }

    # Brush Callbacks
    @app.callback(
        Output("brush-ideo", "chromosomes"),
        [Input("chr-brush", "value")]
    )
    def ideo_select_chr(value):
        answer = ["1"]
        if value:
            value = str(value)
            answer = [value]
        return answer

    @app.callback(
        Output("brush-ideo", "brush"),
        [Input("chr-brush", "value")]
    )
    def ideo_select_brush(value):
        answer = "chr1:1-10000000"
        if value:
            value = "chr{}:1-10000000".format(value)
            answer = value
        return answer

    # Event callbacks
    # Color Change onRotate
    @app.callback(
        Output("ideogram-options", "style"),
        [Input("ideo-custom", "rotated")],
        [State("ideogram-options", "style")],
    )
    def ideo_rotated(value, _):
        if value:
            style = {"color": "#EF553B"}
        else:
            style = {"color": "#000"}
        return style

    # Event Call Annotation
    @app.callback(
        Output("annote-data", "children"),
        [Input("ideo-annotations", "annotationsData")],
    )
    def annote_data(data):
        if data is None:
            data = "None"
        elif "<br>" in data:
            data = data.split("<br>")
            data = data[0] + " " + data[1]
        return data
