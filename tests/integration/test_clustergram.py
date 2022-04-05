import json

import dash
from dash import html
import numpy as np
import pandas as pd

import dash_bio
from common_features import nested_component_layout, nested_component_app_callback

from scipy.spatial.distance import pdist
from scipy.cluster.hierarchy import linkage

_data = None

_mtcars_data = pd.read_csv(
    "tests/dashbio_demos/dash-clustergram/data/mtcars.tsv", delimiter="\t", skiprows=4
).set_index("model")

_data = _mtcars_data.values


def test_dbcl001_colorscale(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(dash_bio.Clustergram(data=_data)))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        test_prop_name="color_map",
        test_prop_value=json.dumps([[0, "blue"], [0.5, "yellow"], [1, "pink"]]),
        prop_value_type="list",
        path_to_test_prop='["data"][41]["colorscale"]',
        take_snapshot=True,
    )


def test_dbcl002_cluster_by_row(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(dash_bio.Clustergram(data=_data)))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        test_prop_name="cluster",
        test_prop_value="row",
        prop_value_type="string",
    )

    assert len(dash_duo.find_elements("g.subplot.x3y3")) == 0
    assert len(dash_duo.find_elements("g.subplot.x9y9")) == 1


def test_dbcl003_cluster_by_col(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(dash_bio.Clustergram(data=_data)))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        test_prop_name="cluster",
        test_prop_value="col",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.find_elements("g.subplot.x9y9")) == 0
    assert len(dash_duo.find_elements("g.subplot.x3y3")) == 1


def test_dbcl004_row_col_thresholds(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(dash_bio.Clustergram(data=_data)))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        test_prop_name="color_threshold",
        test_prop_value=json.dumps({"row": 250, "col": 700}),
        prop_value_type="dict",
        take_snapshot=True,
    )

    # there should be 9 traces for the column dendrogram
    # plus one trace for the background
    assert len(dash_duo.find_elements("g.subplot.x3y3 > g.plot g.trace.scatter")) == 10

    # 30 traces for the row dendrogram, plus one for the background
    assert len(dash_duo.find_elements("g.subplot.x9y9 > g.plot g.trace.scatter")) == 31


def test_dbcl005_col_annotations(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(dash_bio.Clustergram(data=_data)))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        test_prop_name="col_group_marker",
        test_prop_value=json.dumps(
            [{"group": 1, "annotation": "cluster one", "color": "rgb(62, 248, 199)"}]
        ),
        extra_props={"color_threshold": {"row": 250, "col": 700}},
        prop_value_type="list",
        take_snapshot=True,
    )

    # the annotation has shown up
    assert len(dash_duo.find_elements("g.subplot.x15y15")) == 1

    # the annotation is the correct color
    dash_duo.wait_for_style_to_equal(
        "g.subplot.x15y15 g.plot g.lines > path",
        "stroke",
        "rgb(62, 248, 199)",
        1000000000,
    )


def test_dbcl006_row_annotations(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(dash_bio.Clustergram(data=_data)))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        test_prop_name="row_group_marker",
        test_prop_value=json.dumps(
            [{"group": 2, "annotation": "cluster two", "color": "rgb(248, 62, 199)"}]
        ),
        extra_props={"color_threshold": {"row": 250, "col": 700}},
        prop_value_type="list",
        take_snapshot=True,
    )

    # the annotation has shown up
    assert len(dash_duo.find_elements("g.subplot.x12y12")) == 1

    # the annotation is the correct color
    dash_duo.wait_for_style_to_equal(
        "g.subplot.x12y12 g.plot g.lines > path", "stroke", "rgb(248, 62, 199)"
    )


def test_dbcl007_df_input_row_cluster(dash_duo):
    app = dash.Dash(__name__)

    # run the same test as dbcl002 (row clustering) where table of
    # observations (data argument) is left as a DataFrame
    assert isinstance(_mtcars_data, pd.DataFrame)
    app.layout = html.Div(
        nested_component_layout(dash_bio.Clustergram(data=_mtcars_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        test_prop_name="cluster",
        test_prop_value="row",
        prop_value_type="string",
    )

    assert len(dash_duo.find_elements("g.subplot.x3y3")) == 0
    assert len(dash_duo.find_elements("g.subplot.x9y9")) == 1


def test_dbcl008_hidden_row_labels(dash_duo):
    app = dash.Dash(__name__)

    data = _mtcars_data
    row_labels = list(_mtcars_data.index)
    col_labels = list(_mtcars_data.columns)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=data, row_labels=row_labels, column_labels=col_labels
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=data,
        test_prop_name="hidden_labels",
        test_prop_value="row",
        prop_value_type="string",
    )

    # ensure that row labels are hidden
    assert len(dash_duo.find_elements("g.yaxislayer-above g.y11tick")) == 0
    # ensure that column labels are displayed
    assert len(dash_duo.find_elements("g.xaxislayer-above g.x11tick")) == len(
        col_labels
    )


def test_dbcl009_hidden_col_labels(dash_duo):

    app = dash.Dash(__name__)

    data = _mtcars_data
    row_labels = list(_mtcars_data.index)
    col_labels = list(_mtcars_data.columns)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=data, row_labels=row_labels, column_labels=col_labels
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=data,
        test_prop_name="hidden_labels",
        test_prop_value="col",
        prop_value_type="string",
    )

    # ensure that column labels are hidden
    assert len(dash_duo.find_elements("g.xaxislayer-above g.x11tick")) == 0
    # ensure that row labels are displayed
    assert len(dash_duo.find_elements("g.yaxislayer-above g.y11tick")) == len(
        row_labels
    )


def test_dbcl010_row_colors(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, row_colors=["green"] * 35)
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    dash_duo.wait_for_element("g.subplot.x10y10")
    dash_duo.percy_snapshot("test-clust_row_colors", convert_canvases=True)


def test_dbcl011_column_colors(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                column_colors=["green"] * 35,
                column_colors_label="Green Boxes",
            )
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)
    dash_duo.wait_for_element("g.subplot.x7y7")
    dash_duo.percy_snapshot("test-clust_col_colors", convert_canvases=True)


def test_dbcl012_hide_dendogram_axis_when_cluster_is_none(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.Clustergram(data=_data, cluster=None))
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.find_elements("g.subplot.x3y3")) == 0
    assert len(dash_duo.find_elements("g.subplot.x9y9")) == 0


def test_dbcl013_generate_curves_dict(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="generate_curves_dict",
        test_prop_value="True",
        prop_value_type="bool",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl014_return_computed_traces(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="return_computed_traces",
        test_prop_value=True,
        prop_value_type="bool",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl015_computed_traces(dash_duo):

    app = dash.Dash(__name__)
    traces = dash_bio.Clustergram(data=_data, return_computed_traces=True)
    assert len(traces) > 0

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=np.array([[0]]), computed_traces=traces[1])
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)
    row_labels = list(_mtcars_data.index)
    col_labels = list(_mtcars_data.columns)
    assert len(dash_duo.find_elements("g.xaxislayer-above g.x11tick")) == len(
        col_labels
    )
    assert len(dash_duo.find_elements("g.yaxislayer-above g.y11tick")) == len(
        row_labels
    )


def test_dbcl016_row_labels(dash_duo):

    labels_list = [
        "Mazda RX4",
        "Mazda RX4 Wag",
        "Datsun 710",
        "Hornet 4 Drive",
        "Hornet Sportabout",
        "Valiant",
        "Duster 360",
        "Merc 240D",
        "Merc 230",
        "Merc 280",
        "Merc 280C",
        "Merc 450SE",
        "Merc 450SL",
        "Merc 450SLC",
        "Cadillac Fleetwood",
        "Lincoln Continental",
        "Chrysler Imperial",
        "Fiat 128",
        "Honda Civic",
        "Toyota Corolla",
        "Toyota Corona",
        "Dodge Challenger",
        "AMC Javelin",
        "Camaro Z28",
        "Pontiac Firebird",
        "Fiat X1-9",
        "Porsche 914-2",
        "Lotus Europa",
        "Ford Pantera L",
        "Ferrari Dino",
        "Maserati Bora",
        "Volvo 142E",
    ]

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, row_labels=labels_list),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl017_column_labels(dash_duo):

    labels_list = [
        "mpg",
        "cyl",
        "disp",
        "hp",
        "drat",
        "wt",
        "qsec",
        "vs",
        "am",
        "gear",
        "carb",
    ]

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                column_labels=labels_list,
            ),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl018_optimal_leaf_order(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, optimal_leaf_order=True),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl019_standardize_row(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="standardize",
        test_prop_value="row",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl020_standardize_col(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="standardize",
        test_prop_value="column",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl021_cluster_row(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="cluster",
        test_prop_value="row",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl022_cluster_col(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="cluster",
        test_prop_value="column",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl023_row_dist(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="row_dist",
        test_prop_value="minkowski",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl024_col_dist(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="col_dist",
        test_prop_value="cityblock",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl025_optimal_leaf_order(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="optimal_leaf_order",
        test_prop_value=True,
        prop_value_type="bool",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl026_color_map(dash_duo):

    color_map_values = [[0.0, "blue"], [0.5, "red"], [1.0, "green"]]

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
                cluster=None,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="color_map",
        test_prop_value=json.dumps(color_map_values),
        prop_value_type="list",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl027_color_list(dash_duo):

    color_list = (
        {
            "row": ["#873F30", "#28735C", "#732851"],
            "col": ["#284B73", "#287356"],
            "bg": "#6A7328",
        },
    )

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="color_list",
        test_prop_value=json.dumps(color_list),
        prop_value_type="dict",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl028_display_range(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, display_range=2.22),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl029_center_values(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="center_values",
        test_prop_value=False,
        prop_value_type="bool",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl030_display_ratio(dash_duo):

    display_ratio = [0.2, 0.5]

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="display_ratio",
        test_prop_value=json.dumps(display_ratio),
        prop_value_type="list",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl031_paper_bg_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="paper_bg_color",
        test_prop_value="rgba(245,40,145,0.8)",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl032_plot_bg_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="plot_bg_color",
        test_prop_value="rgba(102,117,50,0.3)",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl033_height(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="height",
        test_prop_value=900,
        prop_value_type="int",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl034_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="width",
        test_prop_value=800,
        prop_value_type="int",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl035_line_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, line_width=0.7),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl036_row_colors_label(dash_duo):

    label = "test-label"

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, row_colors_label=label),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl037_log_transform(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, log_transform=False),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl038_imputer_parameters(dash_duo):

    imputer_parameters = {"missing_values": "nan", "strategy": "mean", "axis": 1}

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, imputer_parameters=imputer_parameters),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl039_tick_font(dash_duo):

    tick_font = {"color": "green", "family": "Open Sans", "size": 15}

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data, tick_font=tick_font),
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl040_annotation_font(dash_duo):

    annotation_font = {"color": "yellow", "family": "Courier New", "size": 20}

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="annotation_font",
        test_prop_value=json.dumps(annotation_font),
        prop_value_type="dict",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbcl041_dist_fun(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.Clustergram(data=_data, dist_fun=pdist))
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl042_link_fun(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.Clustergram(data=_data, link_fun=linkage))
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    assert len(dash_duo.get_logs()) == 0


def test_dbcl043_link_method(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(
                data=_data,
            ),
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.Clustergram,
        component_data=_data,
        data_prop_name="data",
        test_prop_name="link_method",
        test_prop_value="average",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert len(dash_duo.get_logs()) == 0
