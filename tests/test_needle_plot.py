import os
from tests.dashbio_demos.app_needle_plot import load_mutation_data, DATAPATH, DEMO_DATA
from .test_common_features import init_demo_app, template_test_component_single_prop, \
    PROP_TYPES, COMPONENT_REACT_BASE

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '').replace('_', '-')


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
    print('In update value callback')
    print(p_name)
    print(p_value)
    print(prop_type)
    answer = None
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
        print(p_value)
        print(nclicks)
        print(input_value)
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
        mutationData=load_mutation_data('{}{}'.format(DATAPATH, DEMO_DATA[0]['mutData']))
    )


def test_xlabel(dash_threaded, selenium):
    """Change xlabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        print('In assert callback')
        print(p_value)
        print(nclicks)
        print(input_value)
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
        mutationData=load_mutation_data('{}{}'.format(DATAPATH, DEMO_DATA[0]['mutData']))
    )


def test_ylabel(dash_threaded, selenium):
    """Change ylabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        print('In assert callback')
        print(p_value)
        print(nclicks)
        print(input_value)
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
        mutationData=load_mutation_data('{}{}'.format(DATAPATH, DEMO_DATA[0]['mutData']))
    )
