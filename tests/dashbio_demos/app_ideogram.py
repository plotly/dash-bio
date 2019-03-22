import os
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_bio
import dash_daq as daq

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


def description():
    return "Compare, and analyze chromosome bands with the Dash Ideogram."


def header_colors():
    return {"bg_color": "#230047", "font_color": "#FFF", "light_logo": True}


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


options = {
    'custom': [
        html.P('Organism'),
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

        html.P("Resolution (Human only)"),
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

        html.P("Full band switch"),
        daq.BooleanSwitch(
            id='fullband-switch',
            on=True
        )
    ],

    'homology': [
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

    'brush': [
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
        )
    ],

    'annotations': [
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
        )
    ]

}

ideograms_initial = {
    'custom': dict(
        id="ideo-custom",
        dataDir="https://unpkg.com/ideogram@1.3.0/"
        "dist/data/bands/native/",
        orientation="horizontal",
        organism="human",
        chrHeight=300,
        chrMargin=10,
        chrWidth=8,
        rotatable=True,
    ),

    'homology': dict(
        id="ideo-homology",
        showBandLabels=True,
        showChromosomeLabels=True,
        showFullyBanded=True,
        fullChromosomeLabels=True,
        chrHeight=400,
        chrMargin=200,
        rotatable=False,
        perspective="comparative",
    ),
    'brush': dict(
        id="brush-ideo",
        dataDir="https://unpkg.com/ideogram@1.3.0/"
        "dist/data/bands/native/",
        organism="human",
        chromosomes=["1"],
        brush="chr1:1-10000000",
        chrHeight=900,
        resolution=550,
        orientation="horizontal",
    ),
    'annotations': dict(
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
}


def layout():
    return html.Div(id='ideogram-body', children=[
        html.Div(id='ideogram-container'),
        html.Div(id='ideogram-control-tabs', children=[
            dcc.Tabs(id='ideogram-tabs', children=[
                dcc.Tab(
                    label='About',
                    value='what-is',
                    children=html.Div(className='ideogram-tab', children=[
                        html.H4('What is Ideogram?'),
                        html.P('Compare and analyze chromosome bands with the '
                               'Dash Ideogram.')
                    ])
                ),
                dcc.Tab(
                    label='View',
                    value='view',
                    children=html.Div(className='ideogram-tab', children=[
                        html.Div(
                            className='ideogram-controls-name',
                            children='View feature:'
                        ),
                        dcc.Dropdown(
                            id='ideogram-feature-dropdown',
                            options=[
                                {'label': 'Custom', 'value': 'custom'},
                                {'label': 'Homology', 'value': 'homology'},
                                {'label': 'Brush', 'value': 'brush'},
                                {'label': 'Annotations', 'value': 'annotations'}
                            ],
                            clearable=False,
                            value='custom'
                        ),
                        html.Hr(),
                        html.Div(
                            id='ideogram-feature-view-options'
                        )
                    ])
                )
            ])
        ]),
        dcc.Store(id='ideo-custom'),
        dcc.Store(id='ideo-homology'),
        dcc.Store(id='brush-ideo'),
        dcc.Store(id='ideo-annotations'),
        html.Div(id='wow', style={'display': 'none'})
    ])


def callbacks(app):  # pylint: disable=redefined-outer-name

    @app.callback(
        Output('ideogram-feature-view-options', 'children'),
        [Input('ideogram-feature-dropdown', 'value')]
    )
    def show_options(feature):
        return options[feature]

    @app.callback(
            Output('ideogram-container', 'children'),
            [Input('ideo-custom', 'data'),
             Input('ideo-homology', 'data'),
             Input('brush-ideo', 'data'),
             Input('ideo-annotations', 'data')],
            state=[State('ideo-custom', 'data'),
                   State('ideo-homology', 'data'),
                   State('brush-ideo', 'data'),
                   State('ideo-annotations', 'data'),
                   State('ideogram-feature-dropdown', 'value')]
    )
    def update_ideogram(
            ic, ih, ib, ia,
            ideo_custom,
            ideo_homology,
            brush_ideo,
            ideo_annotations,
            selected_ideo
    ):
        ideograms = {
            'custom': ideo_custom,
            'homology': ideo_homology,
            'brush': brush_ideo,
            'annotations': ideo_annotations
        }
        return dash_bio.Ideogram(**ideograms[selected_ideo])

    # Custom callbacks
    @app.callback(
        Output('ideo-custom', 'data'),
        [Input("organism-change", "value"),
         Input('bandlabel-switch', 'value'),
         Input('chromlabel-switch', 'value'),
         Input('orientation-switch', 'value'),
         Input('chr-width-input', 'value'),
         Input('chr-height-input', 'value'),
         Input('chr-margin-input', 'value'),
         Input('rotatable-switch', 'value'),
         Input('resolution-select', 'value'),
         Input('sex-switch', 'value'),
         Input('fullband-switch', 'on')],
        state=[State('ideo-custom', 'data')]
    )
    def change_custom_ideogram(
            organism_sel,
            show_band_labels,
            show_chromosome_labels,
            orientation_value,
            chr_width,
            chr_height,
            chr_margin,
            rotatable_value,
            resolution_value,
            sex_value,
            show_banded,
            current):
        if current is None:
            current = ideograms_initial['custom']
        current.update(
            id='ok',
            organism=organism_sel,
            showBandLabels=show_band_labels,
            showChromosomeLabels=show_chromosome_labels,
            orientation=orientation_value,
            chrWidth=chr_width,
            chrHeight=chr_height,
            chrMargin=chr_margin,
            rotatable=rotatable_value,
            resolution=resolution_value if resolution_value != 1 else None,
            sex=sex_value,
            showFullyBanded=show_banded
        )
        return current

    @app.callback(
        Output('ideo-homology', 'data'),
        [Input('chr-select', 'value'),
         Input('chrone-startone', 'value'),
         Input('chrone-stopone', 'value'),
         Input('chrone-starttwo', 'value'),
         Input('chrone-stoptwo', 'value'),
         Input('chrtwo-startone', 'value'),
         Input('chrtwo-stopone', 'value'),
         Input('chrtwo-starttwo', 'value'),
         Input('chrtwo-stoptwo', 'value')],
        state=[State('ideo-homology', 'data')]
    )
    def change_homology_ideogram(
            chr_selected,
            start_one,
            stop_one,
            start_two,
            stop_two,
            start_one_a,
            stop_one_a,
            start_two_a,
            stop_two_a,
            current
    ):
        if current is None:
            current = ideograms_initial['homology']
        current.update(
            chromosomes=chr_selected.split(',') if ',' in chr_selected else ['X', 'Y'],
            homology={
                'chrOne': {
                    'organism': '9606',
                    'start': [start_one, start_two],
                    'stop': [stop_one, stop_two]
                },
                'chrTwo': {
                    'organism': '9606',
                    'start': [start_one_a, start_two_a],
                    'stop': [stop_one_a, stop_two_a]
                }
            }
        )

        return current

    @app.callback(
        Output('brush-ideo', 'data'),
        [Input('chr-brush', 'value')],
        state=[State('brush-ideo', 'data')]
    )
    def change_brush_ideogram(brush_value, current):
        if current is None:
            current = ideograms_initial['brush']
        if brush_value is None:
            brush_value = '1'
        current.update(
            chromosomes=[str(brush_value)],
            brush='chr{}:1-10000000'.format(brush_value)
        )
        return current

    @app.callback(
        Output('ideo-annotations', 'data'),
        [Input('annotation-select', 'value'),
         Input('bar-input', 'value'),
         Input('orientation-anote', 'value'),
         Input('color-input', 'value'),
         Input('height-input', 'value')],
        state=[State('ideo-annotations', 'data')]
    )
    def change_annotation_ideogram(
            annotation_select,
            bar_input,
            orientation_input,
            color_input,
            height_input,
            current
    ):
        if current is None:
            current = ideograms_initial['annotations']

        annotations_layout = ''
        annotations_path = None
        annotations_assembly = None
        annotation_tracks = None
        annotation_height = height_input if height_input != '' else None

        if annotation_select == 'overlay-1':
            annotations_layout = 'overlay'
            annotations_path = "https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json"

        elif annotation_select == "histogram":
            annotations_path = "https://eweitz.github.io/ideogram/data/annotations/SRR562646.json"
            annotations_assembly = 'GRCh37'

        elif annotation_select == "overlay-2":
            annotations_path = "https://eweitz.github.io/ideogram/data/annotations/1000_virtual_snvs.json"
            annotation_tracks = [
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

        current.update(
            annotationsLayout=annotations_layout,
            barWidth=bar_input,
            annotationsPath=annotations_path,
            assembly=annotations_assembly,
            annotationTracks=annotation_tracks,
            annotationHeight=annotation_height,
            annotationsColor=color_input,
            orientation=orientation_input
        )

        return current

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


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
