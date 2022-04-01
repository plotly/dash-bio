import json

import pandas

from common_features import nested_component_layout, \
    nested_component_app_callback

import dash
from dash import html
import dash_bio


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
        test_prop_value=4,
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


def test_dbvp006_test_layout_props(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
            width=600,
            legend={
                'x': 0.85,
                'orientation': 'h',
                'yanchor': 'bottom',
                'y': 1.02,
                'bgcolor': '#f2f5fa'
            },
            xaxis={"color": "red"},
            yaxis={"color": "blue"},
            template="simple_white",
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='plot_bgcolor',
        test_prop_value='pink',
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )

# My tests


def test_dbvp007_p(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
            logp=False
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='p',
        test_prop_value='P',
        prop_value_type='string',
        data_prop_name='dataframe',
    )

    assert dash_duo.get_logs() == []


def test_dbvp008_snp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='snp',
        test_prop_value='SNP',
        prop_value_type='string',
        data_prop_name='dataframe',
    )

    assert dash_duo.get_logs() == []


def test_dbvp009_gene(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='gene',
        test_prop_value='GENE',
        prop_value_type='string',
        data_prop_name='dataframe',
    )

    assert dash_duo.get_logs() == []


def test_dbvp0010_annotation(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
            logp=False
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='annotation',
        test_prop_value='DISTANCE',
        prop_value_type='string',
        data_prop_name='dataframe',
    )

    assert dash_duo.get_logs() == []


def test_dbvp0011_logp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='logp',
        test_prop_value=False,
        prop_value_type='bool',
        data_prop_name='dataframe',
    )

    assert dash_duo.get_logs() == []


def test_dbvp0012_xlabel(dash_duo):

    x_label = 'Test X Label Name'

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='xlabel',
        test_prop_value=x_label,
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp0013_ylabel(dash_duo):

    y_label = 'Test Y Label Name'

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='ylabel',
        test_prop_value=y_label,
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp0014_col(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='col',
        test_prop_value="rgb(113, 22, 234)",
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp0015_effect_size_line_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='effect_size_line_color',
        test_prop_value="rgb(10, 20, 30)",
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp0016_effect_size_line_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='effect_size_line_width',
        test_prop_value=5,
        prop_value_type='int',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp0017_genomewideline_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='genomewideline_color',
        test_prop_value='blue',
        prop_value_type='string',
        data_prop_name='dataframe',
        take_snapshot=True
    )


def test_dbvp0018_genomewideline_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='genomewideline_width',
        test_prop_value=5,
        prop_value_type='int',
        data_prop_name='dataframe',
    )

    assert dash_duo.get_logs() == []


def test_dbvp0019_highlight(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.VolcanoPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.VolcanoPlot,
        component_data=_data,
        test_prop_name='highlight',
        test_prop_value=False,
        prop_value_type='bool',
        data_prop_name='dataframe',
    )

    assert dash_duo.get_logs() == []
