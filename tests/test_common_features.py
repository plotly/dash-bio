import functools
from importlib import import_module
import json
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

PROP_TYPES = {
    'int': int,
    'float': float,
    'bool': bool,
    'str': str,
    'list': lambda x: [el for el in x.split(',')],
    'array': lambda x: [float(el) for el in x.split(',')],
    'dict': json.loads
}


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


def import_component(component_name):
    """Imports a component from the dash_bio package given its name.
        :param component_name: (string) name of dash_bio component in snake case.
        :return: a dash_bio.ComponentName class, where ComponentName is the component nane in
        upper camel case.
    Example: 'needle_plot' will return dash_bio.NeedlePlot class.
    Example: 'needle-plot' will also return dash_bio.NeedlePlot class.
    """
    name_parts = component_name.replace('-', '_').split('_')
    # Make the component name upper camel case
    component_name = ''.join([name_part.title() for name_part in name_parts])
    component_module = import_module('.{}'.format(component_name), package='dash_bio')
    return getattr(component_module, component_name)


def create_test_layout(app_name, component_base, **kwargs):
    """Create a simple layout for an app to test component's props."""
    component_id = 'test-{}-component'.format(app_name)

    if component_base == COMPONENT_PYTHON_BASE:
        component = dcc.Graph(id=component_id)
    elif component_base == COMPONENT_REACT_BASE:
        # equivalent to `component = dashbio.ComponentName(id=component_id)`
        component_class = import_component(app_name)
        component = component_class(id=component_id, **kwargs)
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
        **kwargs
):
    """Share reusable test code for testing single props assignation to a component.

    :param dash_threaded: from pytest_dash
    :param selenium: used to mimic a user programmatically
    :param app_name: (string) name of the app
    :param assert_callback: (func) this function is where the test should be explicitly defined,
    this 'assert_callback' function should typically be defined within a test function which calls
    'template_test_component_single_prop'.
    :param update_component_callback: (func) this function will be assigned as a callback
    which output is the component prop and which is triggered programmatically by a click on a
    button which is inside the simple_app created to test the component
    :param prop_name: (string) name of the component prop to test
    :param prop_value: (string) value to pass to the component prop
    :param prop_type: (string) specify what type is the component prop is, see PROP_TYPES
        default: None
    :param component_base: (string) specify whether the component is based on react or python
        default: COMPONENT_PYTHON_BASE
    :return:
    """

    simple_app = dash.Dash(__name__)
    # generate a simple app to test the component's prop
    simple_app.layout = create_test_layout(app_name, component_base, **kwargs)

    # the following callbacks depends whether the component is python or react based
    if component_base == COMPONENT_REACT_BASE:
        component_prop = prop_name
    else:
        component_prop = 'figure'

    @simple_app.callback(
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

    @simple_app.callback(
        Output('test-{}-assert-value-div'.format(app_name), 'children'),
        [Input('test-{}-component'.format(app_name), component_prop)],
        [
            State('test-{}-btn'.format(app_name), 'n_clicks'),
            State('test-{}-prop-value-input'.format(app_name), 'value')
        ]
    )
    def assert_value(p_value, nclicks, input_value):
        """Callback provided by the test user is called here.
        This callback should return the string 'PASSED' if the test defined in it is successful.
        """
        return assert_callback(p_value, nclicks, input_value)

    dash_threaded(simple_app)

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
