import pandas

import dash
import dash_bio
import dash_html_components as html
import dash_core_components as dcc

from common_features import nested_component_layout, \
    nested_component_app_callback

_data = pandas.read_csv('data/manhattan_plot_test.csv')


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


def test_dmp006_chrm(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='chrm',
        test_prop_value='CHR',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp007_bp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='bp',
        test_prop_value='BP',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp008_p(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='p',
        test_prop_value='P',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp009_snp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='snp',
        test_prop_value='SNP',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp009_gene(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='gene',
        test_prop_value='GENE',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp009_annotation(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='annotation',
        test_prop_value='ZSCORE',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp010_logp(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='logp',
        test_prop_value='False',
        prop_value_type='bool',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp011_title(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='title',
        test_prop_value='Test Manhattan Plot',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp012_showgrid(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='showgrid',
        test_prop_value='False',
        prop_value_type='bool',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp013_xlabel(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='xlabel',
        test_prop_value='Test x label',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp014_ylabel(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='ylabel',
        test_prop_value='Test y label',
        prop_value_type='string',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp015_point_size(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='point_size ',
        test_prop_value=10,
        prop_value_type='number',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp016_showlegend(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(nested_component_layout(
        dash_bio.ManhattanPlot(
            dataframe=_data,
        )
    ))

    nested_component_app_callback(
        app,
        dash_duo,
        component=dash_bio.ManhattanPlot,
        component_data=_data,
        data_prop_name='dataframe',
        test_prop_name='showlegend',
        test_prop_value=False,
        prop_value_type='bool',
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []


def test_dmp017_col(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div([html.Div(
        dcc.Graph(
            id='test-manhattan-plot',
            figure=dash_bio.ManhattanPlot(
                dataframe=_data,
                col='rgb(66, 245, 87)'
            )
        )
    )])

    dash_duo.start_server(app)

    dash_duo.wait_for_element('#test-manhattan-plot')

    assert dash_duo.get_logs() == []


def test_dmp018_suggestiveline_width(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div([html.Div(
        dcc.Graph(
            id='test-manhattan-plot',
            figure=dash_bio.ManhattanPlot(
                dataframe=_data,
                suggestiveline_width=5
            )
        )
    )])

    dash_duo.start_server(app)

    dash_duo.wait_for_element('#test-manhattan-plot')

    assert dash_duo.get_logs() == []
