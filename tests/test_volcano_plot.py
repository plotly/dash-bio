import os

from dash_bio import VolcanoPlot
from dash_bio.component_factory._volcano import GENOMEWIDE_LINE_LABEL, \
    EFFECT_SIZE_LINE_MIN_LABEL, EFFECT_SIZE_LINE_MAX_LABEL
from tests.dashbio_demos.app_volcano_plot import DATASETS
from .test_common_features import (
    template_test_python_component_prop,
    PROP_TYPES,
    init_demo_app
)

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '').replace('_', '-')


# Demo app tests
@init_demo_app(APP_NAME)
def test_click_app_link_from_gallery(dash_threaded):
    """Test that clicking on the given app goes to the expected URL."""

    assert dash_threaded.driver.current_url.replace('http://localhost:8050', '').strip('/') == \
        'dash-bio/{}'.format(APP_NAME)


# Volcano Plot component tests
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


def test_xlabel(dash_threaded):
    """Change xlabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value['layout']['xaxis']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'xlabel',
        'x-label-test'
    )


def test_ylabel(dash_threaded):
    """Change ylabel."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value['layout']['yaxis']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'ylabel',
        'y-label-test'
    )


def test_title(dash_threaded):
    """Change title."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            if input_value == p_value['layout']['title']['text']:
                answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'title',
        'title-test'
    )


def test_effect_size_line_input_value(dash_threaded):
    """Modifies the effect_size line value."""

    def assert_callback(p_value, nclicks, input_value):

        answer = ''
        min_ok = False
        max_ok = False
        if nclicks is not None:
            min_val, max_val = PROP_TYPES['array'](input_value)
            for shape in p_value['layout']['shapes']:
                if shape['name'] == EFFECT_SIZE_LINE_MIN_LABEL:
                    min_ok = shape['x0'] == min_val
                if shape['name'] == EFFECT_SIZE_LINE_MAX_LABEL:
                    max_ok = shape['x0'] == max_val
        if min_ok and max_ok:
            answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'effect_size_line',
        '-1.5, 2.2',
        prop_type='array'
    )


def test_genomewide_line_input_value(dash_threaded):
    """Modifies the genomic line value."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in p_value['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['y0'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'genomewideline_value',
        '4.5',
        'float'
    )


def test_effect_size_line_input_color(dash_threaded):
    """Modifies the effect_size line color."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        min_ok = False
        max_ok = False
        print(p_value, input_value)
        if nclicks is not None:
            for shape in p_value['layout']['shapes']:
                if shape['name'] == EFFECT_SIZE_LINE_MIN_LABEL:
                    min_ok = shape['line']['color'] == input_value
                if shape['name'] == EFFECT_SIZE_LINE_MAX_LABEL:
                    max_ok = shape['line']['color'] == input_value
        if min_ok and max_ok:
            answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'effect_size_line_color',
        'red'
    )


def test_genomewide_line_input_color(dash_threaded):
    """Modifies the genomic line color."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in p_value['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['line']['color'] == input_value:
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'genomewideline_color',
        'green'
    )


def test_effect_size_line_input_width(dash_threaded):
    """Modifies the effect_size line width."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        min_ok = False
        max_ok = False
        if nclicks is not None:
            for shape in p_value['layout']['shapes']:
                if shape['name'] == EFFECT_SIZE_LINE_MIN_LABEL:
                    min_ok = shape['line']['width'] == float(input_value)
                if shape['name'] == EFFECT_SIZE_LINE_MAX_LABEL:
                    max_ok = shape['line']['width'] == float(input_value)
        if min_ok and max_ok:
            answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'effect_size_line_width',
        '3',
        'float'
    )


def test_genomewide_line_input_width(dash_threaded):
    """Modifies the genomic line width."""

    def assert_callback(p_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            for shape in p_value['layout']['shapes']:
                if shape['name'] == GENOMEWIDE_LINE_LABEL:
                    if shape['line']['width'] == float(input_value):
                        answer = 'PASSED'
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        volcano_plot_test_param_callback,
        'genomewideline_width',
        '3',
        'float'
    )
