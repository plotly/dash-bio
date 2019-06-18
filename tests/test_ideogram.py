import json
import os

from pytest_dash.wait_for import (
    wait_for_element_by_css_selector,
    wait_for_element_by_id,
    wait_for_elements_by_css_selector,
)
from .test_common_features import (
    init_demo_app,
    clear_field,
    template_test_component,
    template_test_python_component_prop,
    PROP_TYPES,
    COMPONENT_REACT_BASE
)

# NOTE These tests were written to work with dependency `ideogram` v1.4.1:
# git+https://github.com/eweitz/ideogram.git#7d9b2ab91b91ef35db93bdeb529d4760de63292f
# This version is locked in `package-lock.json`. If that changed and some of the tests failed,
# it might be due to changes in https://github.com/eweitz/ideogram. For example, test_orientation
# fails with version v1.5.1 because "chromosome-set-container" was renamed to "chromosome-set"
# (which results in the wait_for function timing out without finding the element).

# define app name once
APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '').replace('_', '-')

# pass/fail strings
PASS = 'PASSED'
FAIL = 'FAILED'


# Demo app tests
@init_demo_app(APP_NAME)
def test_click_app_name_from_gallery(dash_threaded):
    """Test that clicking on the given app goes to the expected URL."""
    assert dash_threaded.driver.current_url.replace('http://localhost:8050', '').strip('/') == \
        'dash-bio/{}'.format(APP_NAME)


# Component props tests
def ideogram_test_props_callback(
        nclicks,
        prop_name,
        prop_value,
        prop_type=None
):
    """This function is the code of a callback which is triggered by
    the button on the simple app used in the test.
        :param nclicks: (int) The n_clicks value of the button in the simple app
        :param prop_name: (string) The name of the property that is to be modified
        :param prop_value: (string) The value that is to be assigned to the prop defined by
        prop_name.
        :param prop_type: (string) One of the predefined types in PROP_TYPES.
        :return: The value that is to be assigned to the prop defined by prop_name,
        after casting it to the correct type.
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


HUMAN_TXID = 9606  # NCBI:Txid for human
BASIC_PROPS = {
    'organism': 'human',
    'dataDir': 'https://unpkg.com/ideogram@1.9.0/dist/data/bands/native/'
}


def test_chr_height(dash_threaded):
    """Test change of chromosome maximal height."""

    prop_type = 'float'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'chrHeight',
        '40',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )


def test_chr_margin(dash_threaded):
    """Test change of margin between chromosomes."""

    prop_type = 'float'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'chrMargin',
        '5',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )


def test_chr_width(dash_threaded):
    """Test change of chromosome width."""

    prop_type = 'float'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_python_component_prop(
        dash_threaded,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'chrWidth',
        '1',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )


def test_orientation(dash_threaded):
    """Test orientation prop."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'orientation',
        'horizontal',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert presence of chromosomes' rotation
    chromosoms = wait_for_elements_by_css_selector(driver, '.chromosome-set-container')
    for chromosom in chromosoms:
        assert 'rotate(90)' in str(chromosom.get_attribute('transform'))

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert absence of chromosomes' rotation
    chromosoms = wait_for_elements_by_css_selector(driver, '.chromosome-set-container')
    for chromosom in chromosoms:
        assert 'rotate(90)' not in str(chromosom.get_attribute('transform'))


def test_ploidy(dash_threaded):
    """Test duplication of each chromosome."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'ploidy',
        '2',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert 22 chromosomes + X and Y chromosomes
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome')
    assert len(chromosomes) == 24

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert doubling of the 22 chromosomes + X and Y chromosomes
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome', timeout=20)
    assert len(chromosomes) == 46


def test_chromosomes(dash_threaded):
    """Test display of a subset of chromosomes."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'chromosomes',
        '1,3,17',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert 22 chromosomes + X and Y chromosomes
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome')
    assert len(chromosomes) == 24

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert the set of chromosomes contains 3 chromosomes
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome', timeout=20)
    assert len(chromosomes) == 3


def test_chromosomes_wrong_input(dash_threaded):
    """Test input of a wrong chromosome name."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'chromosomes',
        '1,D,3',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert 22 chromosomes + X and Y chromosomes
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome')
    assert len(chromosomes) == 24

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert the set of chromosomes contains 2 chromosomes
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome', timeout=20)
    assert len(chromosomes) == 2


def test_brush(dash_threaded):
    """Test enabling the brush prop."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'brush',
        'chr3:3500000-40000000',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        chromosomes=['3'],
        orientation="horizontal",
        brush="chr3:200000-2000000",
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # verify the existence of the brush
    brush = driver.find_elements_by_class_name('brush')
    assert len(brush) == 1
    # selection = driver.find_elements_by_class_name('selection')[0]
    # selection_width_before = selection.get_attribute('width')

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    brush = driver.find_elements_by_class_name('brush')
    assert len(brush) == 1
    # verify that the selection of the brush was updated
    # selection = driver.find_elements_by_class_name('selection')[0]
    # selection_width_after = selection.get_attribute('width')
    # assert selection_width_before != selection_width_after


def test_show_band_labels(dash_threaded):
    """Test the display/hiding of cytogenetic band labels."""

    prop_type = 'bool'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'showBandLabels',
        'True',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert the absence of bands' labels
    labels = driver.find_elements_by_class_name('bandLabel')
    assert len(labels) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert the presence of bands' labels
    labels = driver.find_elements_by_class_name('bandLabel')
    assert len(labels) > 0


def test_show_chromosome_labels(dash_threaded):
    """Test the display/hiding of chromosomes labels."""

    prop_type = 'bool'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'showChromosomeLabels',
        'True',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert the absence of chromosomes' labels
    labels = driver.find_elements_by_class_name('chrLabel')
    assert len(labels) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert the presence of chromosomes' labels
    labels = wait_for_elements_by_css_selector(driver, '.chrLabel', timeout=20)
    assert len(labels) > 0


def test_sex(dash_threaded):
    """Test the hiding of chromosome Y if sex is set to female."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'sex',
        'female',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert the presence of the chromosome Y
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome')
    num_chromosoms = len(chromosomes)
    assert num_chromosoms == 24

    has_chr_y = False
    for chromosome in chromosomes:
        if 'chrY' in chromosome.get_attribute('id'):
            has_chr_y = True
    assert has_chr_y is True

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert the absence of the chromosome Y
    chromosomes = wait_for_elements_by_css_selector(driver, '.chromosome', timeout=20)
    num_chromosoms = len(chromosomes)
    assert num_chromosoms == 23

    has_chr_y = False
    for chromosome in chromosomes:
        if 'chrY' in chromosome.get_attribute('id'):
            has_chr_y = True
    assert has_chr_y is False


def test_resolution(dash_threaded):
    """Test setting the resolution."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'resolution',
        '10',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # handle of the dcc.Input to change the prop value
    prop_value_input = wait_for_element_by_css_selector(
        driver,
        '#test-{}-prop-value-input'.format(APP_NAME)
    )

    # loop through allowed values for resolution
    for res in ['450', '550', '850']:
        clear_field(prop_value_input)
        prop_value_input.send_keys(res)

        # trigger a change of the component prop
        btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
        btn.click()
        # assert the presence of an ideogram component
        wait_for_element_by_id(driver, '_ideogram')


def test_annotations_path(dash_threaded):
    """Test the loading of annotations form a provided URL."""

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
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'annotationsPath',
        'https://eweitz.github.io/ideogram/data/annotations/all_human_genes.json',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert the absence of annotations
    annots = driver.find_elements_by_class_name('annot')
    assert len(annots) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # raise an error if no element with 'annot' class is found
    wait_for_element_by_css_selector(driver, '.annot')


def test_homology(dash_threaded):
    """Test the display of a basic homology"""

    prop_type = 'dict'

    prop_val = {
        "chrOne": {
            "organism": "9606",
            "start": [10001, 105101383],
            "stop": [27814790, 156030895],
        },
        "chrTwo": {
            "organism": "9606",
            "start": [3000000, 125101383],
            "stop": [9000000, 196130895],
        },
    }

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'homology',
        json.dumps(prop_val),
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        perspective="comparative",
        chromosomes=["1", "2"],
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert the absence of homology region
    regions = driver.find_elements_by_class_name('syntenicRegion')
    assert len(regions) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert the presence of homology region
    regions = wait_for_elements_by_css_selector(driver, '.syntenicRegion', timeout=20)
    assert len(regions) > 0


def test_full_chromosome_labels(dash_threaded):
    """Test the full chromosome label display/hiding"""

    prop_type = 'bool'

    def assert_callback(prop_value, nclicks, input_value):
        answer = ''
        if nclicks is not None:
            answer = FAIL
            if PROP_TYPES[prop_type](input_value) == prop_value:
                answer = PASS
        return answer

    template_test_component(
        dash_threaded,
        APP_NAME,
        assert_callback,
        ideogram_test_props_callback,
        'fullChromosomeLabels',
        'True',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        chromosomes=['1'],
        fullChromosomeLabels=False,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert the absence of a full label
    regions = wait_for_elements_by_css_selector(driver, 'tspan')
    assert len(regions) == 1

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # assert the presence of a full label
    regions = wait_for_elements_by_css_selector(driver, 'tspan', timeout=20)
    assert len(regions) == 2
