import os
from pytest_dash.utils import (
    wait_for_element_by_css_selector
)
from .test_common_features import (
    init_demo_app,
    template_test_component,
    template_test_component_single_prop,
    PROP_TYPES,
    COMPONENT_REACT_BASE
)

# define app name once
APP_NAME = os.path.basename(__file__).replace(
    'test_', '').replace(
        '.py', '').replace(
            '_', '-')

# pass/fail strings
PASS = 'PASSED'
FAIL = 'FAILED'

# define any custom strings here (e.g., if you use
# a particular CSS selector a lot, assign it to a
# variable)


# Demo app tests

@init_demo_app(APP_NAME)
def test_click_app_name_from_gallery(dash_threaded, selenium):
    """Test that clicking on the given app goes to the expected URL."""
    assert selenium.current_url.replace('http://localhost:8050', '').strip('/') == \
        'dash-bio/{}'.format(APP_NAME)


# below, write tests for initial conditions; they will most likely
# make use of wait_for_text_to_equal and other similar functions

# Component tests

# for React components, we need to define a way to interact with the
# props directly (instead of through a graph component); to that end,
# we define a callback method that defines how exactly a prop is
# updated
# this callback will be used in the simple test app, which consists of
# the component, a single button, and two inputs


def ideogram_test_props_callback(
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
    answer = None

    if prop_type == 'dict':
        answer = {}

    # avoid triggering this callback when the button is first created
    if nclicks is not None:
        # cast the string representation of the desired prop value
        # into the appropriate type
        if prop_type in PROP_TYPES:
            prop_value = PROP_TYPES[prop_type](prop_value)
        answer = prop_value

    return answer


# below, write tests for changing the props of the React component
# (following this basic structure)

BASIC_PROPS = {
    'organism': 'human',
    'dataDir': 'https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/'
}


def test_chr_height(dash_threaded, selenium):
    """The pixel height of the tallest chromosome in the ideogram."""

    prop_type = 'float'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        "chrHeight",
        "40",
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )


def test_chr_margin(dash_threaded, selenium):
    """The pixel space of margin between each chromosome."""

    prop_type = 'float'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        "chrMargin",
        "5",
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )


def test_chr_width(dash_threaded, selenium):
    """The pixel width of each chromosome."""

    prop_type = 'float'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        "chrWidth",
        "1",
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )


def test_orientation(dash_threaded, selenium):
    """The orientation of chromosomes on the page."""

    prop_type = 'str'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        "orientation",
        "horizontal",
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    chromosoms = selenium.find_elements_by_class_name('chromosome-set-container')
    for chromosom in chromosoms:
        assert "rotate(90)" in str(chromosom.get_attribute("transform"))

    btn = wait_for_element_by_css_selector(selenium, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    chromosoms = selenium.find_elements_by_class_name('chromosome-set-container')
    for chromosom in chromosoms:
        assert "rotate(90)" not in str(chromosom.get_attribute("transform"))


def test_ploidy(dash_threaded, selenium):
    """The ploidy - number of chromosomes to depict for each chromosome set."""

    prop_type = 'int'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        "ploidy",
        "2",
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    num_chromosoms = len(selenium.find_elements_by_class_name('chromosome'))
    assert num_chromosoms == 24

    btn = wait_for_element_by_css_selector(selenium, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    num_chromosoms = len(selenium.find_elements_by_class_name('chromosome'))
    assert num_chromosoms == 46


def test_chromosomes(dash_threaded, selenium):
    """A list of the numbers of the chromosomes to display."""

    prop_type = 'list'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        "chromosomes",
        "1,3,17",
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    btn = wait_for_element_by_css_selector(selenium, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    num_chromosoms = len(selenium.find_elements_by_class_name('chromosome-set-container'))
    assert num_chromosoms == 3


def test_chromosomes_wrong_input(dash_threaded, selenium):
    """A list of the numbers of the chromosomes to display."""

    prop_type = 'list'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        "chromosomes",
        "1,D,3",
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    btn = wait_for_element_by_css_selector(selenium, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    num_chromosoms = len(selenium.find_elements_by_class_name('chromosome-set-container'))
    assert num_chromosoms == 2
