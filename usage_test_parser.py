import dash_bio
import dash
import dash_core_components as dcc
from dash.dependencies import Input, Output, State
import dash_html_components as html
from dash_bio.utils import circos_parser as cp
import json


layout = cp.txt_to_layout(
    file_one_name="./dash_bio/utils/sample_data/GRCh37.txt",
    file_two_name="./dash_bio/utils/sample_data/GRCh38.txt",
    append_one="-7",
    append_two="-8",
    relPath=True,
    create_local=False,
)

track_one = cp.txt_to_track(
    file_name="./dash_bio/utils/sample_data/GRCh37.txt",
    append_block_id="-7",
    relPath=True,
    create_local=False,
)
track_two = cp.txt_to_track(
    file_name="./dash_bio/utils/sample_data/GRCh38.txt",
    append_block_id="-8",
    relPath=True,
    create_local=False,
)

app = dash.Dash("")

app.scripts.config.serve_locally = True

app.layout = html.Div(
    [
        html.Div(
            [
                dash_bio.DashCircos(
                    id="main-circos",
                    selectEvent={"0": "hover", "1": "click"},
                    layout=layout,
                    config={
                        "innerRadius": 800 / 2 - 80,
                        "outerRadius": 800 / 2 - 40,
                        "ticks": {"display": True, "labelDenominator": 1000000},
                        "labels": {
                            "position": "center",
                            "display": True,
                            "size": 12,
                            "color": "#000",
                            "radialOffset": 70,
                        },
                    },
                    tracks=[
                        {
                            "type": "HIGHLIGHT",
                            "data": track_one,
                            "config": {
                                "innerRadius": 800 / 2 - 80,
                                "outerRadius": 800 / 2 - 40,
                                "opacity": 0.3,
                                "tooltipContent": {"name": "block_id"},
                                "color": {"name": "color"},
                            },
                        },
                        {
                            "type": "HIGHLIGHT",
                            "data": track_two,
                            "config": {
                                "innerRadius": 800 / 2 - 80,
                                "outerRadius": 800 / 2 - 40,
                                "opacity": 0.3,
                                "tooltipContent": {"name": "block_id"},
                                "color": {"name": "color"},
                            },
                        },
                    ],
                    size=800,
                )
            ]
        ),
        html.Div(id="empty-div"),
        html.Div(id="empty-div-two"),
    ]
)


if __name__ == "__main__":

    app.run_server(debug=True)