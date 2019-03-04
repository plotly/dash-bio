import os
from tests.dashbio_demos.app_needle_plot import load_mutation_data, DATAPATH, DEMO_DATA
from .test_common_features import init_demo_app, template_test_python_component_prop, \
    PROP_TYPES, COMPONENT_REACT_BASE, generate_subprop_test

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '').replace('_', '-')

TEST_DATA = load_mutation_data('{}{}'.format(DATAPATH, DEMO_DATA[0]['mutData']))

# TODO by merging https://github.com/plotly/dash-bio/pull/201


# Demo app tests
@init_demo_app(APP_NAME)
def test_click_app_link_from_gallery(dash_threaded):
    """Test that clicking on the given app goes to the expected URL."""

    assert dash_threaded.driver.current_url.replace('http://localhost:8050', '').strip('/') == \
        'dash-bio/{}'.format(APP_NAME)


# Component tests
def needle_plot_test_props_callback(
        nclicks,
        p_name,
        p_value,
        prop_type=None,
):
    """Callback on a single user chosen prop on NeedlePlot component.
        :param nclicks: (int) html.Button 'n_clicks' Input
        :param p_name: (string) stands for prop name, dcc.Input 'value' State (not used here)
        :param p_value: (string) stands for prop value, dcc.Input 'value' State
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


def generate_subprop_test_needle(
        dash_threaded,
        prop,
        subprop,
        subprop_type,
        subprop_val
):
    """Call generic function to set up a test on a subprop with arguments specific to this
    component. This is done to avoid repetition of arguments which will be the same for a
    series of tests.
    """
    generate_subprop_test(
        dash_threaded,
        APP_NAME,
        needle_plot_test_props_callback,
        prop,
        subprop,
        subprop_type,
        subprop_val,
        mutationData=TEST_DATA
    )


def test_rangeslider(dash_threaded):
    """Test the rangeSlider display."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if PROP_TYPES['bool'](input_value) == p_value:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        'rangeSlider',
        'True',
        prop_type='bool',
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


def test_xlabel(dash_threaded):
    """Test that xlabel displays as set via UI."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        'xlabel',
        'test-x-label',
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


def test_ylabel(dash_threaded):
    """Test that ylabel displays as set via UI."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        'ylabel',
        'test-y-label',
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


def test_set_empty_needle_style(dash_threaded):
    """Test assignment of an empty dict to needleStyle prop."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            input_value = PROP_TYPES['dict'](input_value)
            if input_value == p_value:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        needle_plot_test_props_callback,
        'needleStyle',
        '{}',
        prop_type='dict',
        component_base=COMPONENT_REACT_BASE,
        mutationData=TEST_DATA
    )


# Test subprop assignment of needleStyle props
def test_needlestyle_stemcolor(dash_threaded):
    sp = 'stemColor'
    sp_type = 'str'
    sp_val = '"blue"'
    generate_subprop_test_needle(dash_threaded, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_stemthickness(dash_threaded):
    sp = 'stemThickness'
    sp_type = 'int'
    sp_val = 5
    generate_subprop_test_needle(dash_threaded, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_stemconstheight(dash_threaded):
    sp = 'stemConstHeight'
    sp_type = 'bool'
    sp_val = '"true"'
    generate_subprop_test_needle(dash_threaded, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_headsize(dash_threaded):
    sp = 'headSize'
    sp_type = 'int'
    sp_val = 10
    generate_subprop_test_needle(dash_threaded, "needleStyle", sp, sp_type, sp_val)


def test_needlestyle_headcolor(dash_threaded):
    sp = 'headColor'
    sp_type = 'str'
    sp_val = '"grey"'
    generate_subprop_test_needle(dash_threaded, "needleStyle", sp, sp_type, sp_val)


# Test subprop assignment of domainStyle props
def test_domainstyle_headsymbol(dash_threaded):
    sp = 'headSymbol'
    sp_type = 'str'
    sp_val = '"triangle-left"'
    generate_subprop_test_needle(dash_threaded, "needleStyle", sp, sp_type, sp_val)


def test_domainstyle_domaincolor_single(dash_threaded):
    sp = 'domainColor'
    sp_type = 'str'
    sp_val = '"blue"'
    generate_subprop_test_needle(dash_threaded, "domainStyle", sp, sp_type, sp_val)


def test_domainstyle_domaincolor_list(dash_threaded):
    sp = 'domainColor'
    sp_type = 'list'
    sp_val = '"blue, red, purple"'
    generate_subprop_test_needle(dash_threaded, "domainStyle", sp, sp_type, sp_val)


def test_needlestyle_display_minor_domains(dash_threaded):
    sp = 'displayMinorDomains'
    sp_type = 'bool'
    sp_val = '"True"'
    generate_subprop_test_needle(dash_threaded, "domainStyle", sp, sp_type, sp_val)
