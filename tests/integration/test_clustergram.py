import json
import pandas as pd

import dash
import dash_html_components as html
import dash_bio

from common_features import nested_component_layout, nested_component_app_callback

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


def test_dbcl002_cluster_by_row_or_col(dash_duo):

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

    # create a new instance of the app to test column clustering

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

def test_dbcl003_row_col_thresholds(dash_duo):

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


def test_dbcl004_col_annotations(dash_duo):

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
        "g.subplot.x15y15 g.plot g.lines > path", "stroke", "rgb(62, 248, 199)", 1000000000
    )


def test_dbcl005_row_annotations(dash_duo):

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


def test_dbcl006_df_input_row_cluster(dash_duo):

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


def test_dbcl007_hidden_labels(dash_duo):

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
    assert len(dash_duo.find_elements("g.xaxislayer-above g.x11tick")) == len(col_labels)

    # create a new instance of the app to test hiding of column labels

    app = dash.Dash(__name__)

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
    assert len(dash_duo.find_elements("g.yaxislayer-above g.y11tick")) == len(row_labels)


def test_dbcl008_row_colors(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data,
                                 row_colors=['green'] * 35)
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    dash_duo.wait_for_element('g.subplot.x10y10')


def test_dbcl009_column_colors(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.Clustergram(data=_data,
                                 column_colors=['green'] * 35)
        )
    )

    dash_duo.start_server(app, dev_tools_props_check=True)

    dash_duo.wait_for_element('g.subplot.x7y7')
