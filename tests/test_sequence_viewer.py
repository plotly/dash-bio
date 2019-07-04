import os
from selenium.webdriver.common.keys import Keys
from pytest_dash.utils import (
    wait_for_text_to_equal,
    wait_for_element_by_css_selector
)
from .test_common_features import (
    init_demo_app,
    template_test_component_single_prop,
    PROP_TYPES,
    COMPONENT_REACT_BASE
)

APP_NAME = os.path.basename(__file__).replace(
    'test_', '').replace(
        '.py', '').replace(
            '_', '-')

# the CSS selector for the current sequence selected in the dropdown
PRELOADED = '#preloaded-sequences .Select-value-label'

PASS = 'PASSED'
FAIL = 'FAILED'

# Demo app tests

@init_demo_app(APP_NAME)
def test_click_app_link_from_gallery(dash_threaded, selenium):
    """Test that clicking on the appropriate app goes to the correct URL."""
    assert selenium.current_url.replace('http://localhost:8050', '').strip('/') == \
        'dash-bio/{}'.format(APP_NAME)


@init_demo_app(APP_NAME)
def test_initial_sequence(dash_threaded, selenium):
    """Check that insulin is the sequence that is loaded first."""
    wait_for_text_to_equal(
        selenium,
        PRELOADED,
        'insulin'
    )

    
@init_demo_app(APP_NAME)
def test_change_sequence(dash_threaded, selenium):
    """Change the sequence using the dropdown."""
    sequence_select = wait_for_element_by_css_selector(
        selenium,
        PRELOADED
    )

    sequence_select.send_keys('keratin')
    sequence_select.send_keys(Keys.RETURN)

    wait_for_text_to_equal(
        selenium,
        PRELOADED,
        'keratin'
    )


# Component tests

def sequence_viewer_test_props_callback(
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
    

    # the Input of this callback is the button used to send a test prop
    # the Output of the callback is the value that will be sent to the
    # component
    # the States that are read in this callback are the name of the
    # prop that is to be updated, and the value that is to be sent to
    # the component
    
    # note that both are strings, so will need to be cast appropriately
    
    output_value = None
    
    # avoid triggering this callback when the button is first created 
    if nclicks is not None:
        # cast the prop_value into the appropriate type

        if prop_type in PROP_TYPES:
            # e.g., if prop_type is 'int', then the following line
            # essentially means int(prop_value)
            # i.e., casting a string to an int
            return PROP_TYPES[prop_type](prop_value)

        elif prop_type == 'list':
            # convert a string representation to a list
            return eval(prop_value)

        
@init_demo_app(APP_NAME)
def test_sequence(dash_threaded, selenium):
    """Change the sequence."""

    def assert_callback(
            component_sequence,
            nclicks,
            input_sequence
    ):
        if nclicks is not None:
            if component_sequence == input_sequence:
                return PASS
        return FAIL

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        sequence_viewer_test_props_callback,
        'sequence',
        'GATTACA',
        prop_type='string',
        component_base=COMPONENT_REACT_BASE
    )

    
def test_selection_change(dash_threaded, selenium):
    """Change the selection."""

    def assert_callback(
            component_selection,
            nclicks,
            input_selection
    ):
        if nclicks is not None:
            if component_selection[0] == input_selection[0] and \
               component_selection[1] == input_selection[1] and \
               component_selection[2] == input_selection[2]:
                return PASS
        return FAIL

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        sequence_viewer_test_props_callback,
        'selection',
        '[0, 10, "red"]',
        prop_type='list',
        component_base=COMPONENT_REACT_BASE,
        sequence='GATTACAGATTACA'
    )
    
    
