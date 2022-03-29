import json
import pandas

import dash
import dash_bio
import dash_html_components as html

from common_features import nested_component_layout, nested_component_app_callback

_data = pandas.read_csv(
    "https://raw.githubusercontent.com/plotly/dash-bio-docs-files/master/"
    + "manhattan_data.csv"
)


def test_dbmp001_genomewideline_value(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.ManhattanPlot(dataframe=_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="genomewideline_value",
        test_prop_value=3,
        prop_value_type="int",
        take_snapshot=True,
    )

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.ManhattanPlot(dataframe=_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="genomewideline_value",
        test_prop_value=6,
        prop_value_type="int",
        take_snapshot=True,
    )


def test_dbmp002_suggestiveline_value(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.ManhattanPlot(dataframe=_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="suggestiveline_value",
        test_prop_value=5,
        prop_value_type="int",
        take_snapshot=True,
    )

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.ManhattanPlot(dataframe=_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="suggestiveline_value",
        test_prop_value=9,
        prop_value_type="int",
        take_snapshot=True,
    )


def test_dbmp003_genomewide_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.ManhattanPlot(dataframe=_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="genomewideline_color",
        test_prop_value="rgb(209, 171, 251)",
        prop_value_type="string",
    )

    dash_duo.wait_for_style_to_equal(
        "#test-graph svg:nth-child(3) g.layer-above g.shapelayer > path:nth-child(2)",
        "stroke",
        "rgb(209, 171, 251)",
    )


def test_dbmp004_suggestive_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.ManhattanPlot(dataframe=_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="suggestiveline_color",
        test_prop_value="rgb(251, 171, 209)",
        prop_value_type="string",
    )

    dash_duo.wait_for_style_to_equal(
        "#test-graph svg:nth-child(3) g.layer-above g.shapelayer > path:nth-child(1)",
        "stroke",
        "rgb(251, 171, 209)",
    )


def test_dbmp005_highlight_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(dash_bio.ManhattanPlot(dataframe=_data))
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="highlight_color",
        test_prop_value="rgb(76, 184, 254)",
        prop_value_type="string",
        take_snapshot=True,
    )

    dash_duo.wait_for_style_to_equal(
        ".legend .scrollbox g g:nth-child(1) g g:nth-child(3) g path",
        "fill",
        "rgb(76, 184, 254)",
    )


def test_dbmp006_chrm(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    df = _data.rename(columns={"CHR": "TEST"})
    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=df,
        data_prop_name="dataframe",
        test_prop_name="chrm",
        test_prop_value="TEST",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp007_bp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    df = _data.rename(columns={"BP": "TEST"})
    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=df,
        data_prop_name="dataframe",
        test_prop_name="bp",
        test_prop_value="TEST",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp008_p(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    df = _data.rename(columns={"P": "TEST"})
    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=df,
        data_prop_name="dataframe",
        test_prop_name="p",
        test_prop_value="TEST",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp009_snp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    df = _data.rename(columns={"SNP": "TEST"})
    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=df,
        data_prop_name="dataframe",
        test_prop_name="snp",
        test_prop_value="TEST",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp009_gene(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    df = _data.rename(columns={"GENE": "TEST"})
    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=df,
        data_prop_name="dataframe",
        test_prop_name="gene",
        test_prop_value="TEST",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp009_annotation(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    df = _data.rename(columns={"ZSCORE": "TEST"})
    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=df,
        data_prop_name="dataframe",
        test_prop_name="annotation",
        test_prop_value="TEST",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp010_logp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="logp",
        test_prop_value="False",
        prop_value_type="bool",
        take_snapshot=True,
    )

    dash_duo.wait_for_style_to_equal(
        ".legend .scrollbox g g:nth-child(1) g g:nth-child(3) g path",
        "fill",
        "rgb(128, 128, 128)",
    )
    assert dash_duo.get_logs() == []


def test_dbmp011_title(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="title",
        test_prop_value="Test Manhattan Plot",
        prop_value_type="string",
        take_snapshot=True,
    )

    dash_duo.wait_for_text_to_equal(".gtitle", "Test Manhattan Plot")
    assert dash_duo.get_logs() == []


def test_dbmp012_showgrid(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="showgrid",
        test_prop_value="False",
        prop_value_type="bool",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp013_xlabel(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="xlabel",
        test_prop_value="Test x label",
        prop_value_type="string",
        take_snapshot=True,
    )

    dash_duo.wait_for_text_to_equal(".xtitle", "Test x label")
    assert dash_duo.get_logs() == []


def test_dbmp014_ylabel(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="ylabel",
        test_prop_value="Test y label",
        prop_value_type="string",
        take_snapshot=True,
    )

    dash_duo.wait_for_text_to_equal(".ytitle", "Test y label")
    assert dash_duo.get_logs() == []


def test_dbmp015_point_size(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="point_size",
        test_prop_value=10,
        prop_value_type="int",
        take_snapshot=True,
    )

    assert (
        dash_duo.wait_for_element(
            ".legend .scrollbox g g:nth-child(1) g g:nth-child(3) g path"
        ).size["height"]
        == 10
    )

    assert dash_duo.get_logs() == []


def test_dbmp016_showlegend(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        extra_props={"logp": False},
        data_prop_name="dataframe",
        test_prop_name="showlegend",
        test_prop_value="False",
        prop_value_type="bool",
        take_snapshot=True,
    )

    dash_duo.wait_for_no_elements(
        ".legend .scrollbox g g:nth-child(1) g g:nth-child(3) g path"
    )

    assert dash_duo.get_logs() == []


def test_dbmp017_col(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    df = _data._slice(slice(0, 2))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=df,
        data_prop_name="dataframe",
        test_prop_name="col",
        test_prop_value=json.dumps(["cyan" for _ in range(len(df["CHR"]))]),
        prop_value_type="list",
        take_snapshot=True,
    )

    dash_duo.wait_for_style_to_equal(
        ".legend .scrollbox g g:nth-child(1) g g:nth-child(3) g path",
        "fill",
        "rgb(0, 255, 255)",
    )
    assert dash_duo.get_logs() == []


def test_dbmp018_suggestiveline_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="suggestiveline_width",
        test_prop_value=5,
        prop_value_type="int",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp019_genomewideline_value(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="genomewideline_value",
        test_prop_value="0.1",
        prop_value_type="float",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp020_genomewideline_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="genomewideline_color",
        test_prop_value="green",
        prop_value_type="string",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp021_genomewideline_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="genomewideline_width",
        test_prop_value="5",
        prop_value_type="int",
        take_snapshot=True,
    )

    assert dash_duo.get_logs() == []


def test_dbmp022_highlight(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="highlight",
        test_prop_value="False",
        prop_value_type="bool",
        take_snapshot=True,
    )

    dash_duo.wait_for_style_to_equal(
        ".legend .scrollbox g g:nth-child(1) g g:nth-child(3) g path",
        "fill",
        "rgb(128, 128, 128)",
    )

    assert dash_duo.get_logs() == []


def test_dbmp023_highlight_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        nested_component_layout(
            dash_bio.ManhattanPlot(
                dataframe=_data,
            )
        )
    )

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name="dataframe",
        test_prop_name="highlight_color",
        test_prop_value="blue",
        prop_value_type="string",
        take_snapshot=True,
    )

    dash_duo.wait_for_style_to_equal(
        ".legend .scrollbox g g:nth-child(1) g g:nth-child(3) g path",
        "fill",
        "rgb(0, 0, 255)",
    )

    assert dash_duo.get_logs() == []
