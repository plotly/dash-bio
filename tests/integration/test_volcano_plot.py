import json
import pandas

import dash
import dash_html_components as html
import dash_bio

from common_features import nested_component_layout, \
    nested_component_app_callback

_data = None

_data = pandas.read_csv(
    'tests/dashbio_demos/dash-volcano-plot/data/data1.csv',
    comment='#'
)


def test_dbvp001_highlight_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='highlight_color',
        test_prop_value='rgb(90, 12, 254)',
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp002_points_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='col',
        test_prop_value='rgb(12, 254, 42)',
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp003_point_size(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='point_size',
        test_prop_value=10,
        prop_value_type='int',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp004_genomewideline_value(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='genomewideline_value',
        test_prop_value=3,
        prop_value_type='int',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp005_effect_size_line_value(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='effect_size_line',
        test_prop_value=json.dumps([-0.5, 1.5]),
        prop_value_type='list',
        data_prop_name='dataframe',
        take_snapshot=True
    )
