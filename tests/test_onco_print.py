import os

from pytest_dash.wait_for import (
    wait_for_element_by_css_selector,
    wait_for_elements_by_css_selector
)

from .test_common_features import (
    init_demo_app,
    template_test_component,
    PROP_TYPES,
    COMPONENT_REACT_BASE
)
from tests.dashbio_demos.app_onco_print import DATASETS

# define app name once
APP_NAME = os.path.basename(__file__).replace(
    'test_', '').replace(
        '.py', '').replace(
            '_', '-')

# pass/fail strings
PASS = 'PASSED'
FAIL = 'FAILED'

TEST_DATA = DATASETS['dataset2']


# Demo app tests

@init_demo_app(APP_NAME)
def test_click_app_name_from_gallery(dash_threaded):
    """Test that clicking on the given app goes to the expected URL."""
    assert dash_threaded.driver.current_url.replace('http://localhost:8050', '').strip('/') == \
        'dash-bio/{}'.format(APP_NAME)


# Component tests

# for React components, we need to define a way to interact with the
# props directly (instead of through a graph component); to that end,
# we define a callback method that defines how exactly a prop is
# updated
# this callback will be used in the simple test app, which consists of
# the component, a single button, and two inputs


# below are tests for changing the props of the React component
def oncoprint_props_callback(
        nclicks,
        prop_name,
        prop_value,
        prop_type=None
):
    """This function is the code of a callback which is triggered by
    the button on the simple app used in the test.
    :param nclicks (int): The n_clicks value of the button in the
                          simple app
    :param prop_name (string): The name of the property that is to be
                               modified
    :param prop_value (string): The value that is to be assigned to the
                                prop defined by prop_name.
    :prop_type (string): One of the predefined types in PROP_TYPES.
    :return: The value that is to be assigned to the prop defined by
             prop_name, after casting it to the correct type.
    """

    typed_prop_value = None
    if prop_type == 'dict':
        typed_prop_value = {}

    # avoid triggering this callback when the button is first created
    if nclicks is not None:
        # cast the string representation of the desired prop value
        # into the appropriate type

        if prop_type in PROP_TYPES:
            typed_prop_value = PROP_TYPES[prop_type](prop_value)

    return typed_prop_value


# Tests for layout props (under "Customize" tab)
def test_showoverview(dash_threaded):
    """Test the overview display."""
    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if PROP_TYPES['bool'](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        APP_NAME,
        assert_callback,
        oncoprint_props_callback,
        'showoverview',
        'False',
        prop_type='bool',
        component_base=COMPONENT_REACT_BASE,
        data=TEST_DATA
    )


def test_showlegend(dash_threaded):
    """Test the legend display."""
    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if PROP_TYPES['bool'](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        APP_NAME,
        assert_callback,
        oncoprint_props_callback,
        'showlegend',
        'False',
        prop_type='bool',
        component_base=COMPONENT_REACT_BASE,
        data=TEST_DATA
    )

    driver = dash_threaded.driver
    # assert there is a legend (bar)
    legend = wait_for_elements_by_css_selector(driver, '.legendbar')
    assert len(legend) != 0

    # trigger change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert there is no more legend (bar)
    legend = driver.find_elements_by_class_name('legendbar')
    assert len(legend) == 0


def test_padding(dash_threaded):
    """Test the updating of the padding value."""
    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if PROP_TYPES['float'](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        APP_NAME,
        assert_callback,
        oncoprint_props_callback,
        'padding',
        '0.08',
        prop_type='float',
        component_base=COMPONENT_REACT_BASE,
        data=TEST_DATA
    )
