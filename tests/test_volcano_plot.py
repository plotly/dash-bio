import os
from selenium.webdriver.common.keys import Keys

from pytest_dash.utils import (
    wait_for_text_to_equal,
    wait_for_element_by_css_selector,
)
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
from dash_bio import VolcanoPlot
from tests.dash.app_volcano_plot import DATASETS
from .test_common_features import access_demo_app

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '')


LAYOUT = html.Div(
    id='-test-graph-div',
    children=[
        dcc.Graph(
            id='test-graph',
        ),
        html.Button(id='test-btn', children='click me'),
        dcc.Input(id='test-param-name-input', value=''),
        dcc.Input(id='test-param-value-input', value=''),
        html.Div(id='test-assert-value-div', children='')
    ]
)

PARAM_TYPES = {
    'int': int,
    'float': float,
    'bool': bool,
    'str': str
}


def volcano_plot_test_param_callback(
        nclicks,
        param_name,
        param_value,
        param_type=None,
        dataset=DATASETS['SET1']['dataframe']
):
    """Create a volcano plot with a single user chosen prop.
        :param nclicks: (string) html.Button 'n_clicks' Input
        :param param_name: (string) dcc.Input 'value' State
        :param param_value: (string) dcc.Input 'value' State
        :param param_type: (string) one of PARAM_TYPES keys
            default: None
        :param dataset: (panda DataFrame): a DataFrame with volcano plot data
        :return: a dash_bio.VolcanoPlot instance (which is a plotly.graph_objs.Figure instance)
    """
    answer = {'data': [], 'layout': {}}
    # avoid triggering the
    if nclicks is not None:
        # convert the parameter value to the right type
        if param_type in PARAM_TYPES:
            param_value = PARAM_TYPES[param_type](param_value)
        arg_to_pass = {param_name: param_value}
        answer = VolcanoPlot(
            dataset,
            **arg_to_pass
        )
    return answer


def test_click_app_link_from_gallery(dash_threaded, selenium):

    access_demo_app(dash_threaded, selenium, APP_NAME)

    assert selenium.current_url.replace('http://localhost:8050', '') == '/dash-bio/volcano-plot'


def test_initial_dataset(dash_threaded, selenium):
    """check the default dataset is Set2"""
    access_demo_app(dash_threaded, selenium, APP_NAME)
    wait_for_text_to_equal(
        selenium,
        '#vp-dataset-dropdown .Select-value-label',
        'Set2'
    )


def test_change_dataset(dash_threaded, selenium):
    """change dataset using the dropdown"""
    access_demo_app(dash_threaded, selenium, APP_NAME)
    dataset_dropdown = wait_for_element_by_css_selector(
        selenium,
        '#vp-dataset-dropdown .Select-input input'
    )

    dataset_dropdown.send_keys('Set1')
    dataset_dropdown.send_keys(Keys.RETURN)

    wait_for_text_to_equal(
        selenium,
        '#vp-dataset-dropdown .Select-value-label',
        'Set1'
    )


def test_lower_genomic_line(dash_threaded, selenium):
    """lower the threshold genomic line and verify the change in the highlight points number"""
    access_demo_app(dash_threaded, selenium, APP_NAME)

    # initial check
    wait_for_text_to_equal(selenium, '#vp-dataset-dropdown .Select-value-label', 'Set2')
    wait_for_text_to_equal(selenium, '#vp-upper-left', '14')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '92')

    threshold = wait_for_element_by_css_selector(selenium, '#vp-genomic-line')
    lower_bound = wait_for_element_by_css_selector(selenium, '#vp-lower-bound')
    upper_bound = wait_for_element_by_css_selector(selenium, '#vp-upper-bound')

    assert int(threshold.get_attribute('value')) == 4
    assert int(lower_bound.get_attribute('value')) == -1
    assert int(upper_bound.get_attribute('value')) == 1

    # lower the threshold
    threshold.send_keys(Keys.ARROW_DOWN)

    # number of points in the upper left and upper right quadrants
    wait_for_text_to_equal(selenium, '#vp-upper-left', '154')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '271')


def test_effect_size_min_and_max(dash_threaded, selenium):
    """move the lower and upper effect size lines to their max and min, respectively"""

    access_demo_app(dash_threaded, selenium, APP_NAME)

    lower_bound = wait_for_element_by_css_selector(selenium, '#vp-lower-bound')
    upper_bound = wait_for_element_by_css_selector(selenium, '#vp-upper-bound')

    lower_bound.send_keys(Keys.ARROW_UP)
    assert int(lower_bound.get_attribute('value')) == 0

    # maximum should be set to 0
    lower_bound.send_keys(Keys.ARROW_UP)
    assert int(lower_bound.get_attribute('value')) == 0

    # number of points in the upper left and upper right quadrants
    wait_for_text_to_equal(selenium, '#vp-upper-left', '24')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '92')

    upper_bound.send_keys(Keys.ARROW_DOWN)
    assert int(upper_bound.get_attribute('value')) == 0

    # minimum should be set to 0
    upper_bound.send_keys(Keys.ARROW_DOWN)
    assert int(upper_bound.get_attribute('value')) == 0

    # number of points in the upper left and upper right quadrants
    wait_for_text_to_equal(selenium, '#vp-upper-left', '24')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '99')


def template_test_parameters_volcanoplot(
        dash_threaded,
        selenium,
        assert_callback,
        param_name,
        param_value,
        par_type=None
):
    """Share reusable test code for testing Volcano Plot single parameter assignation."""
    dummy_app = dash.Dash(__name__)
    dummy_app.layout = LAYOUT

    @dummy_app.callback(
        Output('test-graph', 'figure'),
        [Input('test-btn', 'n_clicks')],
        [
            State('test-param-name-input', 'value'),
            State('test-param-value-input', 'value')
        ]
    )
    def update_graph(nclicks, par_name, par_value):
        """Update the figure of the dcc.Graph component when a button is clicked."""
        return volcano_plot_test_param_callback(nclicks, par_name, par_value, par_type)

    @dummy_app.callback(
        Output('test-assert-value-div', 'children'),
        [Input('test-graph', 'figure')],
        [
            State('test-btn', 'n_clicks'),
            State('test-param-value-input', 'value')
        ]
    )
    def assert_value(fig, nclicks, input_value):
        return assert_callback(fig, nclicks, input_value)

    dash_threaded(dummy_app)

    param_name_input = wait_for_element_by_css_selector(selenium, '#test-param-name-input')
    param_value_input = wait_for_element_by_css_selector(selenium, '#test-param-value-input')

    param_name_input.send_keys(param_name)
    param_value_input.send_keys(param_value)

    btn = wait_for_element_by_css_selector(selenium, '#test-btn')
    btn.click()
    wait_for_text_to_equal(selenium, '#test-assert-value-div', 'PASSED')
