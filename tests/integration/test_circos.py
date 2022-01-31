import json

import dash
import dash_bio
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output, State

from common_features import simple_app_layout, simple_app_callback

_data = None

_COMPONENT_ID = 'test-circos'

with open(
        'tests/dashbio_demos/dash-circos/data/graph_data.json', 'r'
) as f:
    _data = json.loads(f.read())


def test_dbci001_graph_type(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37'],
        )
    ))

    histogram_layout = [
        {'type': 'HISTOGRAM', 'data': _data['histogram'][:5]}
    ]

    def validation_fn(x):
        print(json.dumps(x))
        print(json.dumps(histogram_layout))
        return json.dumps(x) == json.dumps(histogram_layout)

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='tracks',
        test_prop_value=json.dumps(histogram_layout),
        prop_value_type='dict',
        validation_fn=lambda x: x == histogram_layout
    )

    # there should be five bins in the histogram
    assert len(dash_duo.find_elements('path.bin')) == 5


def test_dbci002_inner_outer_radii(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37']
        )
    ))

    change_radii_config = {'innerRadius': 20, 'outerRadius': 100}

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='config',
        test_prop_value=json.dumps(change_radii_config),
        prop_value_type='dict',
        validation_fn=lambda x:
        x['innerRadius'] == change_radii_config['innerRadius']
        and x['outerRadius'] == change_radii_config['outerRadius']
    )

    chr_one_div = dash_duo.find_element('path#chr1')

    assert int(chr_one_div.size['width']) == 41
    assert int(chr_one_div.size['height']) == 81


def test_dbci003_tracks_config(dash_duo):

    app = dash.Dash(__name__)

    histogram_layout = [
        {'type': 'HISTOGRAM', 'data': _data['histogram'][:5],
         'config': {
                    'innerRadius': 330,
                    'outerRadius': 350,
                    'opacity': 0.6,
                    'color': {'name': 'color'},
                    'tooltipContent': None,
                },
         }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37'],
            tracks=histogram_layout
        )
    ))

    dash_duo.start_server(app)

    dash_duo.wait_for_element('#react-entry-point')

    # The component should be rendered instead of displaying console errors
    assert len(dash_duo.find_elements(f'#{_COMPONENT_ID}')) == 1


def test_dbci004_enable_download_svg(dash_duo):
    """ Test a download SVG button """

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37'],
            enableDownloadSVG=True
        )
    ))

    dash_duo.start_server(app)

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    # Should be download button
    dash_duo.wait_for_element('.Button')

    assert len(dash_duo.get_logs()) == 0


def test_dbci005_style(dash_duo):
    """ Test a style property is setting correctly """

    div_style = {
        'background-color': 'rgba(255, 255, 128, .5)',
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37'],
            style=div_style
        )
    ))

    dash_duo.start_server(app)

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert len(dash_duo.get_logs()) == 0


def test_dbci006_size(dash_duo):
    """ Test a size of the SVG container has correct values """

    svg_size = 1000

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37'],
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='size',
        test_prop_value=svg_size,
        prop_value_type='int',
        validation_fn=lambda x: x == svg_size
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbci007_enable_zoom_pan(dash_duo):
    """ Test that enableZoomPan is set correctly """

    enable_zoom = True

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Circos(
            id=_COMPONENT_ID,
            layout=_data['GRCh37'],
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='enableZoomPan',
        test_prop_value=enable_zoom,
        prop_value_type='bool',
        validation_fn=lambda x: x == enable_zoom
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbci008_event_datum(dash_duo):
    """ Test a size of the SVG container has correct values """

    text_no_event = "There are no event data. Hover over a data point to get more information."

    app = dash.Dash(__name__)

    app.layout = html.Div(
        [
            dash_bio.Circos(
                id="my-dashbio-default-circos",
                layout=_data["GRCh37"],
                selectEvent={"0": "hover"},
                tracks=[
                    {
                        "type": "CHORDS",
                        "data": _data["chords"],
                        "config": {
                            "tooltipContent": {
                                "source": "source",
                                "sourceID": "id",
                                "target": "target",
                                "targetID": "id",
                                "targetEnd": "end",
                            }
                        },
                    }
                ],
            ),
            "Graph type:",
            dcc.Dropdown(
                id="histogram-chords-default-circos",
                options=[{"label": x, "value": x} for x in ["histogram", "chords"]],
                value="chords",
            ),
            "Event data:",
            html.Div(id="default-circos-output"),
        ]
    )

    @app.callback(
        Output("default-circos-output", "children"),
        Input("my-dashbio-default-circos", "eventDatum"),
    )
    def update_output(value):
        if value is not None:
            return [html.Div("{}: {}".format(v.title(), value[v])) for v in value.keys()]
        return text_no_event

    @app.callback(
        Output("my-dashbio-default-circos", "tracks"),
        Input("histogram-chords-default-circos", "value"),
        State("my-dashbio-default-circos", "tracks"),
    )
    def change_graph_type(value, current):
        if value == "histogram":
            current[0].update(data=_data["histogram"], type="HISTOGRAM")

        elif value == "chords":
            current[0].update(
                data=_data["chords"],
                type="CHORDS",
                config={
                    "tooltipContent": {
                        "source": "source",
                        "sourceID": "id",
                        "target": "target",
                        "targetID": "id",
                        "targetEnd": "end",
                    }
                },
            )
        return current

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal('#default-circos-output', text_no_event)

    assert len(dash_duo.get_logs()) == 0
