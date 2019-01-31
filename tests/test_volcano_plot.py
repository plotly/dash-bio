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
from dash_bio.component_factory._volcano import GENOMEWIDE_LINE_LABEL, \
    EFFECT_SIZE_LINE_MIN_LABEL, EFFECT_SIZE_LINE_MAX_LABEL
from tests.dashbio_demos.app_volcano_plot import DATASETS
from .test_common_features import init_demo_app, template_test_component_single_prop, PROP_TYPES

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '').replace('_', '-')


LAYOUT = html.Div(
    id='test-vp-graph-div',
    children=[
        dcc.Graph(
            id='test-vp-graph',
        ),
        html.Button(id='test-vp-btn', children='click me'),
        dcc.Input(id='test-vp-param-name-input', value=''),
        dcc.Input(id='test-vp-param-value-input', value=''),
        html.Div(id='test-vp-assert-value-div', children='')
    ]
)



def volcano_plot_test_param_callback(
        nclicks,
        p_name,
        p_value,
        prop_type=None,
):
    """Create a volcano plot with a single user chosen prop.
        :param nclicks: (string) html.Button 'n_clicks' Input
        :param p_name: (string) dcc.Input 'value' State
        :param p_value: (string) dcc.Input 'value' State
        :param prop_type: (string) one of PARAM_TYPES keys
            default: None
        :return: a dash_bio.VolcanoPlot instance (which is a plotly.graph_objs.Figure instance)
    """
    answer = {'data': [], 'layout': {}}
    # avoid triggering at the creation of the button in the layout
    if nclicks is not None:
        # convert the parameter value to the right type
        if prop_type in PROP_TYPES:
            p_value = PROP_TYPES[prop_type](p_value)
        arg_to_pass = {p_name: p_value}
        answer = VolcanoPlot(
            DATASETS['SET1']['dataframe'],
            **arg_to_pass
        )
    return answer


# Demo app tests
@init_demo_app(APP_NAME)
def test_click_app_link_from_gallery(dash_threaded, selenium):

    assert selenium.current_url.replace('http://localhost:8050', '').strip('/') == \
           'dash-bio/{}'.format(APP_NAME)


@init_demo_app(APP_NAME)
def test_initial_dataset(dash_threaded, selenium):
    """Check the default dataset is Set2."""
    wait_for_text_to_equal(
        selenium,
        '#vp-dataset-dropdown .Select-value-label',
        'Set2'
    )


@init_demo_app(APP_NAME)
def test_change_dataset(dash_threaded, selenium):
    """Change dataset using the dropdown."""
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


@init_demo_app(APP_NAME)
def test_lower_genomic_line(dash_threaded, selenium):
    """Lower the threshold genomic line and verify the change in the highlight points number."""

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

    threshold.send_keys(Keys.ARROW_DOWN)
    threshold.send_keys(Keys.ARROW_DOWN)
    threshold.send_keys(Keys.ARROW_DOWN)
    threshold.send_keys(Keys.ARROW_DOWN)

    assert int(threshold.get_attribute('value')) == 0


@init_demo_app(APP_NAME)
def test_effect_size_min_and_max(dash_threaded, selenium):
    """Move the lower and upper effect size lines to their max and min, respectively."""

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


# Volcano Plot component tests

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
        Output('test-vp-graph', 'figure'),
        [Input('test-vp-btn', 'n_clicks')],
        [
            State('test-vp-param-name-input', 'value'),
            State('test-vp-param-value-input', 'value')
        ]
    )
    def update_graph(nclicks, par_name, par_value):
        """Update the figure of the dcc.Graph component when a button is clicked."""
        return volcano_plot_test_param_callback(nclicks, par_name, par_value, par_type)

    @dummy_app.callback(
        Output('test-vp-assert-value-div', 'children'),
        [Input('test-vp-graph', 'figure')],
        [
            State('test-vp-btn', 'n_clicks'),
            State('test-vp-param-value-input', 'value')
        ]
    )
    def assert_value(fig, nclicks, input_value):
        """Callback provided by the test user is called here.
        This callback should return the string 'PASSED' if the test defined in it is successful.
        """
        return assert_callback(fig, nclicks, input_value)

    dash_threaded(dummy_app)

    param_name_input = wait_for_element_by_css_selector(selenium, '#test-vp-param-name-input')
    param_value_input = wait_for_element_by_css_selector(selenium, '#test-vp-param-value-input')

    param_name_input.send_keys(param_name)
    param_value_input.send_keys(param_value)

    btn = wait_for_element_by_css_selector(selenium, '#test-vp-btn')
    btn.click()
    wait_for_text_to_equal(selenium, '#test-vp-assert-value-div', 'PASSED')


def test_xlabel(dash_threaded, selenium):
    """Change xlabel."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == fig['layout']['xaxis']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'xlabel',
        'x-label-test'
    )


def test_ylabel(dash_threaded, selenium):
    """Change ylabel."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == fig['layout']['yaxis']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'ylabel',
        'y-label-test'
    )


def test_title(dash_threaded, selenium):
    """Change title."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == fig['layout']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'title',
        'title-test'
    )


def test_effect_size_line_input_value(dash_threaded, selenium):
    """Modifies the effect_size line value."""

    def assert_callback(fig, nclicks, input_value):
        min_val, max_val = PROP_TYPES['array'](input_value)
        print(min_val, max_val)
        answer = ''
        min_ok = False
        max_ok = False
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == EFFECT_SIZE_LINE_MIN_LABEL:
                    min_ok = shape['x0'] == min_val
                if shape['name'] == EFFECT_SIZE_LINE_MAX_LABEL:
                    max_ok = shape['x0'] == max_val
        if min_ok and max_ok:
            answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'effect_size_line',
        '-1.5, 2.2',
        'array'
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

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'genomewideline_value',
        '4.5',
        'float'
    )


def test_effect_size_line_input_color(dash_threaded, selenium):
    """Modifies the effect_size line color."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        min_ok = False
        max_ok = False
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == EFFECT_SIZE_LINE_MIN_LABEL:
                    min_ok = shape['line']['color'] == input_value
                if shape['name'] == EFFECT_SIZE_LINE_MAX_LABEL:
                    max_ok = shape['line']['color'] == input_value
        if min_ok and max_ok:
            answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'effect_size_line_color',
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

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'genomewideline_color',
        'green'
    )


def test_effect_size_line_input_width(dash_threaded, selenium):
    """Modifies the effect_size line width."""

    def assert_callback(fig, nclicks, input_value):
        answer = ''
        min_ok = False
        max_ok = False
        if nclicks is not None:
            for shape in fig['layout']['shapes']:
                if shape['name'] == EFFECT_SIZE_LINE_MIN_LABEL:
                    min_ok = shape['line']['width'] == float(input_value)
                if shape['name'] == EFFECT_SIZE_LINE_MAX_LABEL:
                    max_ok = shape['line']['width'] == float(input_value)
        if min_ok and max_ok:
            answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'effect_size_line_width',
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

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'genomewideline_width',
        '3',
        'float'
    )
