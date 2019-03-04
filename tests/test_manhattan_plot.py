import os
import dash_html_components as html
import dash_core_components as dcc
from dash_bio import ManhattanPlot
from dash_bio.component_factory._manhattan import SUGGESTIVE_LINE_LABEL, GENOMEWIDE_LINE_LABEL
from tests.dashbio_demos.app_manhattan_plot import DATASET
from .test_common_features import (
    init_demo_app,
    template_test_python_component_prop,
    PROP_TYPES
)

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '').replace('_', '-')


LAYOUT = html.Div(
    id='test-mh-graph-div',
    children=[
        dcc.Graph(
            id='test-mhp-graph',
        ),
        html.Button(id='test-mhp-btn', children='click me'),
        dcc.Input(id='test-mhp-param-name-input', value=''),
        dcc.Input(id='test-mhp-param-value-input', value=''),
        html.Div(id='test-mhp-assert-value-div', children='')
    ]
)


# Demo app tests
@init_demo_app(APP_NAME)
def test_click_app_link_from_gallery(dash_threaded):

    assert dash_threaded.driver.current_url.replace('http://localhost:8050', '') == \
        '/dash-bio/{}'.format(APP_NAME)


# Manhattan Plot component tests
def manhattan_plot_test_param_callback(
        nclicks,
        p_name,
        p_value,
        prop_type=None,
        dataset=DATASET
):
    """Create a manhattan plot with a single user chosen prop.
        :param nclicks: (string) html.Button 'n_clicks' Input
        :param p_name: (string) dcc.Input 'value' State
        :param p_value: (string) dcc.Input 'value' State
        :param prop_type: (string) one of PROP_TYPES keys
            default: None
        :param dataset: (panda DataFrame): a DataFrame with manhattan plot data
        :return: a dash_bio.ManhattanPlot instance (which is a plotly.graph_objs.Figure instance)
    """
    answer = {'data': [], 'layout': {}}
    # avoid triggering at the creation of the button in the layout
    if nclicks is not None:
        # convert the parameter value to the right type
        if prop_type in PROP_TYPES:
            p_value = PROP_TYPES[prop_type](p_value)
        arg_to_pass = {p_name: p_value}
        answer = ManhattanPlot(
            dataset,
            **arg_to_pass
        )
    return answer


def test_xlabel(dash_threaded):
    """Change xlabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value['layout']['xaxis']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'xlabel',
        'x-label-test'
    )


def test_ylabel(dash_threaded):
    """Change ylabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value['layout']['yaxis']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'ylabel',
        'y-label-test'
    )


def test_title(dash_threaded):
    """Change title."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value['layout']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'title',
        'title-test'
    )


def test_suggestive_line_input_value(dash_threaded):
    """Modifies the suggestive line value."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == SUGGESTIVE_LINE_LABEL:
                    if shape['y0'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'suggestiveline_value',
        '5.5',
        'float'
    )


def test_genomewide_line_input_value(dash_threaded):
    """Modifies the genomic line value."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['y0'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'genomewideline_value',
        '4.5',
        'float'
    )


def test_suggestive_line_input_color(dash_threaded):
    """Modifies the suggestive line color."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == SUGGESTIVE_LINE_LABEL:
                    if shape['line']['color'] == input_value:
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'suggestiveline_color',
        'red'
    )


def test_genomewide_line_input_color(dash_threaded):
    """Modifies the genomic line color."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['line']['color'] == input_value:
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'genomewideline_color',
        'green'
    )


def test_suggestive_line_input_width(dash_threaded):
    """Modifies the suggestive line width."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == SUGGESTIVE_LINE_LABEL:
                    if shape['line']['width'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'suggestiveline_width',
        '3',
        'float'
    )


def test_genomewide_line_input_width(dash_threaded):
    """Modifies the genomic line width."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['line']['width'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        manhattan_plot_test_param_callback,
        'genomewideline_width',
        '3',
        'float'
    )
