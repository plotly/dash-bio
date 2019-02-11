import os
import json
from tests.dashbio_demos.app_needle_plot import load_mutation_data, DATAPATH, DEMO_DATA
from .test_common_features import init_demo_app, template_test_component_single_prop, \
    PROP_TYPES, COMPONENT_REACT_BASE

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '').replace('_', '-')

TEST_DATA = load_mutation_data('{}{}'.format(DATAPATH, DEMO_DATA[0]['mutData']))


# Demo app tests
@init_demo_app(APP_NAME)
def test_click_app_link_from_gallery(dash_threaded, selenium):

    assert selenium.current_url.replace('http://localhost:8050', '').strip('/') == \
           'dash-bio/{}'.format(APP_NAME)


# Needle Plot component tests
def needle_plot_test_props_callback(
        nclicks,
        p_name,
        p_value,
        prop_type=None,
):
    """Callback on a single user chosen prop on NeedlePlot component.
        :param nclicks: (string) html.Button 'n_clicks' Input
        :param p_name: (string) dcc.Input 'value' State (not used here)
        :param p_value: (string) dcc.Input 'value' State
        :param prop_type: (string) one of PARAM_TYPES keys
            default: None
        :return: the value of the prop to the dash.dependencies.Ouput()
    """
    answer = None
    if prop_type == 'dict':
        answer = {}
    # avoid triggering at the creation of the button in the layout
    if nclicks is not None:
        # convert the parameter value to the right type
        if prop_type in PROP_TYPES:
            p_value = PROP_TYPES[prop_type](p_value)
        answer = p_value
    return answer


def test_rangeslider(dash_threaded, selenium):
    """Toggle the rangeSlider display."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if bool(input_value) == p_value:
                answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        "rangeSlider",
        "False",
        prop_type='bool',
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


def test_xlabel(dash_threaded, selenium):
    """Change xlabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value:
                answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        "xlabel",
        "test-x-label",
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


def test_ylabel(dash_threaded, selenium):
    """Change ylabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value:
                answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        "ylabel",
        "test-y-label",
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


def test_set_empty_needle_style(dash_threaded, selenium):
    """Assign an empty dict to needle style."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            input_value = PROP_TYPES['dict'](input_value)
            if input_value == p_value:
                answer = 'PASSED'
        return answer

    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        "needleStyle",
        "{}",
        prop_type='dict',
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


def generate_assert_callback_subprop(subprop, subprop_type):
    """Test props which are within a dict."""
    def assert_callback_subprop(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            input_value = json.loads(input_value)
            if PROP_TYPES[subprop_type](input_value[subprop]) \
                    == PROP_TYPES[subprop_type](p_value[subprop]):
                answer = 'PASSED'
        return answer
    return assert_callback_subprop


def generate_subprop_test(
        dash_threaded,
        selenium,
        prop,
        subprop,
        subprop_type,
        subprop_val,
):
    """Create a test for a prop within a dict."""
    template_test_component_single_prop(
        dash_threaded,
        selenium,
        APP_NAME,
        generate_assert_callback_subprop(subprop, subprop_type),
        needle_plot_test_props_callback,
        prop,
        '{"%s": %s}' % (subprop, subprop_val),
        prop_type='dict',
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA,
    )


def test_needlestyle_stemcolor(dash_threaded, selenium):
    sp = 'stemColor'
    sp_type = 'str'
    sp_val = '"blue"'
    generate_subprop_test(dash_threaded, selenium, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_stemthickness(dash_threaded, selenium):
    sp = 'stemThickness'
    sp_type = 'int'
    sp_val = 5
    generate_subprop_test(dash_threaded, selenium, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_stemconstheight(dash_threaded, selenium):
    sp = 'stemConstHeight'
    sp_type = 'bool'
    sp_val = '"true"'
    generate_subprop_test(dash_threaded, selenium, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_headsize(dash_threaded, selenium):
    sp = 'headSize'
    sp_type = 'int'
    sp_val = 10
    generate_subprop_test(dash_threaded, selenium, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_headcolor(dash_threaded, selenium):
    sp = 'headColor'
    sp_type = 'str'
    sp_val = '"grey"'
    generate_subprop_test(dash_threaded, selenium, "needleStyle", sp, sp_type, sp_val)


def test_domainstyle_headsymbol(dash_threaded, selenium):
    sp = 'headSymbol'
    sp_type = 'str'
    sp_val = '"triangle-left"'
    generate_subprop_test(dash_threaded, selenium, "needleStyle", sp, sp_type, sp_val)


def test_domainstyle_domaincolor_single(dash_threaded, selenium):
    sp = 'domainColor'
    sp_type = 'str'
    sp_val = '"blue"'
    generate_subprop_test(dash_threaded, selenium, "domainStyle", sp, sp_type, sp_val)


def test_domainstyle_domaincolor_list(dash_threaded, selenium):
    sp = 'domainColor'
    sp_type = 'list'
    sp_val = '"blue, red, purple"'
    generate_subprop_test(dash_threaded, selenium, "domainStyle", sp, sp_type, sp_val)


def test_needlestyle_display_minor_domains(dash_threaded, selenium):
    sp = 'displayMinorDomains'
    sp_type = 'bool'
    sp_val = '"True"'
    generate_subprop_test(dash_threaded, selenium, "domainStyle", sp, sp_type, sp_val)
