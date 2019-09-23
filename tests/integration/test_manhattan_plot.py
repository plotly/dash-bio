import pandas

import dash
import dash_bio
import dash_html_components as html

from common_features import nested_component_layout, \
    nested_component_app_callback

_data = pandas.read_csv(
    'https://raw.githubusercontent.com/plotly/dash-bio-docs-files/master/' +
    'manhattan_data.csv'
)


def test_dbmp001_genomewideline_value(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='genomewideline_value',
        test_prop_value=3,
        prop_value_type='int',
        take_snapshot=True
    )

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='genomewideline_value',
        test_prop_value=6,
        prop_value_type='int',
        take_snapshot=True
    )


def test_dbmp002_suggestiveline_value(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='suggestiveline_value',
        test_prop_value=5,
        prop_value_type='int',
        take_snapshot=True
    )

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='suggestiveline_value',
        test_prop_value=9,
        prop_value_type='int',
        take_snapshot=True
    )


def test_dbmp003_genomewide_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='genomewideline_color',
        test_prop_value='rgb(209, 171, 251)',
        prop_value_type='string'
    )

    dash_duo.wait_for_style_to_equal(
        '#test-graph svg:nth-child(3) g.layer-above g.shapelayer > path:nth-child(2)',
        'stroke',
        'rgb(209, 171, 251)'
    )


def test_dbmp004_suggestive_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='suggestiveline_color',
        test_prop_value='rgb(251, 171, 209)',
        prop_value_type='string'
    )

    dash_duo.wait_for_style_to_equal(
        '#test-graph svg:nth-child(3) g.layer-above g.shapelayer > path:nth-child(1)',
        'stroke',
        'rgb(251, 171, 209)'
    )


def test_dbmp005_highlight_color(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='highlight_color',
        test_prop_value='rgb(76, 184, 254)',
        prop_value_type='string',
        take_snapshot=True
    )
