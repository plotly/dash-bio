import os
from pytest_dash.utils import (
    wait_for_text_to_equal,
    wait_for_element_by_css_selector,
)
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
from dash_bio import ManhattanPlot
from dash_bio.component_factory._manhattan import SUGGESTIVE_LINE_LABEL, GENOMEWIDE_LINE_LABEL
from tests.dashbio_demos.app_manhattan_plot import DATASET
from .test_common_features import init_demo_app

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

PARAM_TYPES = {
    'int': int,
    'float': float,
    'bool': bool,
    'str': str
}


def manhattan_plot_test_param_callback(
        nclicks,
        param_name,
        param_value,
        param_type=None,
        dataset=DATASET
):
    """Create a manhattan plot with a single user chosen prop.
        :param nclicks: (string) html.Button 'n_clicks' Input
        :param param_name: (string) dcc.Input 'value' State
        :param param_value: (string) dcc.Input 'value' State
        :param param_type: (string) one of PARAM_TYPES keys
            default: None
        :param dataset: (panda DataFrame): a DataFrame with manhattan plot data
        :return: a dash_bio.ManhattanPlot instance (which is a plotly.graph_objs.Figure instance)
    """
    answer = {'data': [], 'layout': {}}
    # avoid triggering at the creation of the button in the layout
    if nclicks is not None:
        # convert the parameter value to the right type
        if param_type in PARAM_TYPES:
            param_value = PARAM_TYPES[param_type](param_value)
        arg_to_pass = {param_name: param_value}
        answer = ManhattanPlot(
            dataset,
            **arg_to_pass
        )
    return answer


# Demo app tests
@init_demo_app(APP_NAME)
def test_click_app_link_from_gallery(dash_threaded, selenium):

    assert selenium.current_url.replace('http://localhost:8050', '') == '/dash-bio/{}'.format(
        APP_NAME
    )


# Manhattan Plot component tests
def template_test_parameters_manhattanplot(
        dash_threaded,
        selenium,
        assert_callback,
        param_name,
        param_value,
        par_type=None
):
    """Share reusable test code for testing Manhattan Plot single parameter assignation."""
    dummy_app = dash.Dash(__name__)
    dummy_app.layout = LAYOUT

    @dummy_app.callback(
        Output('test-mhp-graph', 'figure'),
        [Input('test-mhp-btn', 'n_clicks')],
        [
            State('test-mhp-param-name-input', 'value'),
            State('test-mhp-param-value-input', 'value')
        ]
    )
    def update_graph(nclicks, par_name, par_value):
        """Update the figure of the dcc.Graph component when a button is clicked."""
        return manhattan_plot_test_param_callback(nclicks, par_name, par_value, par_type)

    @dummy_app.callback(
        Output('test-mhp-assert-value-div', 'children'),
        [Input('test-mhp-graph', 'figure')],
        [
            State('test-mhp-btn', 'n_clicks'),
            State('test-mhp-param-value-input', 'value')
        ]
    )
    def assert_value(fig, nclicks, input_value):
        """Callback provided by the test user is called here.
        This callback should return the string 'PASSED' if the test defined in it is successful.
        """
        return assert_callback(fig, nclicks, input_value)

    dash_threaded(dummy_app)

    param_name_input = wait_for_element_by_css_selector(selenium, '#test-mhp-param-name-input')
    param_value_input = wait_for_element_by_css_selector(selenium, '#test-mhp-param-value-input')

    param_name_input.send_keys(param_name)
    param_value_input.send_keys(param_value)

    btn = wait_for_element_by_css_selector(selenium, '#test-mhp-btn')
    btn.click()
    wait_for_text_to_equal(selenium, '#test-mhp-assert-value-div', 'PASSED')


# def test_xlabel(dash_threaded, selenium):
#     """Change xlabel."""
#
#     def assert_callback(fig, nclicks, input_value):
#         answer = ''
#         if nclicks is not None:
#             if input_value == fig['layout']['xaxis']['title']['text']:
#                 answer = 'PASSED'
#         return answer
#
#     template_test_parameters_manhattanplot(
#         dash_threaded,
#         selenium,
#         assert_callback,
#         'xlabel',
#         'x-label-test'
#     )
#
#
# def test_ylabel(dash_threaded, selenium):
#     """Change ylabel."""
#
#     def assert_callback(fig, nclicks, input_value):
#         answer = ''
#         if nclicks is not None:
#             if input_value == fig['layout']['yaxis']['title']['text']:
#                 answer = 'PASSED'
#         return answer
#
#     template_test_parameters_manhattanplot(
#         dash_threaded,
#         selenium,
#         assert_callback,
#         'ylabel',
#         'y-label-test'
#     )
#
#
# def test_title(dash_threaded, selenium):
#     """Change title."""
#
#     def assert_callback(fig, nclicks, input_value):
#         answer = ''
#         if nclicks is not None:
#             if input_value == fig['layout']['title']['text']:
#                 answer = 'PASSED'
#         return answer
#
#     template_test_parameters_manhattanplot(
#         dash_threaded,
#         selenium,
#         assert_callback,
#         'title',
#         'title-test'
#     )


def test_suggestive_line_input_value(dash_threaded, selenium):
    """Modifies the suggestive line value."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == SUGGESTIVE_LINE_LABEL:
                    if shape['y0'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_parameters_manhattanplot(
        dash_threaded,
        selenium,
        assert_callback,
        'suggestiveline_value',
        '5.5',
        'float'
    )


def test_genomewide_line_input_value(dash_threaded, selenium):
    """Modifies the genomic line value."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['y0'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_parameters_manhattanplot(
        dash_threaded,
        selenium,
        assert_callback,
        'genomewideline_value',
        '4.5',
        'float'
    )


def test_suggestive_line_input_color(dash_threaded, selenium):
    """Modifies the suggestive line color."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == SUGGESTIVE_LINE_LABEL:
                    if shape['line']['color'] == input_value:
                        answer = 'PASSED'
        return answer

    template_test_parameters_manhattanplot(
        dash_threaded,
        selenium,
        assert_callback,
        'suggestiveline_color',
        'red'
    )


def test_genomewide_line_input_color(dash_threaded, selenium):
    """Modifies the genomic line color."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['line']['color'] == input_value:
                        answer = 'PASSED'
        return answer

    template_test_parameters_manhattanplot(
        dash_threaded,
        selenium,
        assert_callback,
        'genomewideline_color',
        'green'
    )


def test_suggestive_line_input_width(dash_threaded, selenium):
    """Modifies the suggestive line width."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == SUGGESTIVE_LINE_LABEL:
                    if shape['line']['width'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_parameters_manhattanplot(
        dash_threaded,
        selenium,
        assert_callback,
        'suggestiveline_width',
        '3',
        'float'
    )


def test_genomewide_line_input_width(dash_threaded, selenium):
    """Modifies the genomic line width."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['line']['width'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_parameters_manhattanplot(
        dash_threaded,
        selenium,
        assert_callback,
        'genomewideline_width',
        '3',
        'float'
    )
