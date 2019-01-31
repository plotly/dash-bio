import functools
from pytest_dash.utils import (
    import_app,
    wait_for_element_by_id,
    wait_for_text_to_equal,
    wait_for_element_by_css_selector,
)
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc

COMPONENT_PYTHON_BASE = 'python'
COMPONENT_REACT_BASE = 'react'


def access_demo_app(dash_threaded, selenium, app_name):
    """Mimic a user click on the app link from the gallery."""
    dash_bio_index = import_app('index')
    dash_threaded(dash_bio_index)
    link = wait_for_element_by_id(selenium, 'app-link-id-{}'.format(app_name))
    link.click()


def init_demo_app(app_name):
    # allow the decorator to take the app_name as an argument
    def decorator_init_demo_app(func):
        # preserves the __name__ and __doc__ values of the decorated func
        @functools.wraps(func)
        def wrapper_init_demo_app(dash_threaded, selenium):
            # start the index.py app in a thread and move to the component URL
            access_demo_app(dash_threaded, selenium, app_name)
            # execute the test function from there
            func(dash_threaded, selenium)
        return wrapper_init_demo_app
    return decorator_init_demo_app


def create_test_layout(app_name, component_base):
    component_id = 'test-{}-component'.format(app_name)
    if component_base == COMPONENT_PYTHON_BASE:
        component = dcc.Graph(id=component_id)
    elif component_base == COMPONENT_REACT_BASE:
        # TODO : find a way to load dashbio.VolcanoPlot if we have 'volcano-plot' for app_name
        # this placeholder code would then read
        # component = dashbio.ComponentName(id=component_id)
        # or similar
        component = dcc.Graph(id=component_id)
    else:
        raise ValueError("component_base argument must be one of {}".format([
            COMPONENT_PYTHON_BASE,
            COMPONENT_REACT_BASE
        ]))

    return html.Div(
        id='test-{}-component-div'.format(app_name),
        children=[
            component,
            html.Button(id='test-{}-btn'.format(app_name), children='click me'),
            dcc.Input(id='test-{}-prop-name-input'.format(app_name), value=''),
            dcc.Input(id='test-{}-prop-value-input'.format(app_name), value=''),
            html.Div(id='test-{}-assert-value-div'.format(app_name), children='')
        ]
    )


def template_test_component_single_prop(
        dash_threaded,
        selenium,
        app_name,
        assert_callback,
        update_component_callback,
        prop_name,
        prop_value,
        prop_type=None,
        component_base=COMPONENT_PYTHON_BASE,
):
    """Share reusable test code for testing single props assignation to a component."""
    dummy_app = dash.Dash(__name__)
    dummy_app.layout = create_test_layout(app_name, component_base)

    # the following callbacks depends whether the component is python or react based
    if component_base == COMPONENT_REACT_BASE:
        component_prop = prop_name
    else:
        component_prop = 'figure'

    @dummy_app.callback(
        Output('test-{}-component'.format(app_name), component_prop),
        [Input('test-{}-btn'.format(app_name), 'n_clicks')],
        [
            State('test-{}-prop-name-input'.format(app_name), 'value'),
            State('test-{}-prop-value-input'.format(app_name), 'value')
        ]
    )
    def update_component(nclicks, p_name, p_value):
        """Update the prop of the component when the button is clicked."""
        return update_component_callback(nclicks, p_name, p_value, prop_type)

    @dummy_app.callback(
        Output('test-{}-assert-value-div'.format(app_name), 'children'),
        [Input('test-{}-component'.format(app_name), component_prop)],
        [
            State('test-{}-btn'.format(app_name), 'n_clicks'),
            State('test-{}-prop-value-input'.format(app_name), 'value')
        ]
    )
    def assert_value(fig, nclicks, input_value):
        """Callback provided by the test user is called here.
        This callback should return the string 'PASSED' if the test defined in it is successful.
        """
        return assert_callback(fig, nclicks, input_value)

    dash_threaded(dummy_app)

    prop_name_input = wait_for_element_by_css_selector(
        selenium,
        '#test-{}-prop-name-input'.format(app_name)
    )
    prop_value_input = wait_for_element_by_css_selector(
        selenium,
        '#test-{}-prop-value-input'.format(app_name)
    )

    prop_name_input.send_keys(prop_name)
    prop_value_input.send_keys(prop_value)

    btn = wait_for_element_by_css_selector(selenium, '#test-{}-btn'.format(app_name))
    btn.click()
    wait_for_text_to_equal(selenium, '#test-{}-assert-value-div'.format(app_name), 'PASSED')
