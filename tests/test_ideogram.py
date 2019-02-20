import os
from pytest_dash.wait_for import (
    wait_for_element_by_css_selector,
)
from .test_common_features import (
    init_demo_app,
    template_test_component,
    template_test_component_single_prop,
    PROP_TYPES,
    COMPONENT_REACT_BASE
)

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

    print("Update")
    print(answer)
    return answer


HUMAN_TXID = 9606  # NCBI:Txid for human
BASIC_PROPS = {
    'organism': 'human',
    'dataDir': 'https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/'
}


def test_chr_height(dash_threaded):
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

    chromosoms = driver.find_elements_by_class_name('chromosome-set-container')
    for chromosom in chromosoms:
        assert 'rotate(90)' in str(chromosom.get_attribute('transform'))

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    chromosoms = driver.find_elements_by_class_name('chromosome-set-container')
    for chromosom in chromosoms:
        assert 'rotate(90)' not in str(chromosom.get_attribute('transform'))


def test_ploidy(dash_threaded):
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

    num_chromosoms = len(driver.find_elements_by_class_name('chromosome'))
    assert num_chromosoms == 24

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    num_chromosoms = len(driver.find_elements_by_class_name('chromosome'))
    assert num_chromosoms == 46


def test_chromosomes(dash_threaded):
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

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    num_chromosoms = len(driver.find_elements_by_class_name('chromosome-set-container'))
    assert num_chromosoms == 3


def test_chromosomes_wrong_input(dash_threaded):
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

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    num_chromosoms = len(driver.find_elements_by_class_name('chromosome-set-container'))
    assert num_chromosoms == 2


def test_brush(dash_threaded):
    """Genomic coordinate range (e.g. "chr1:104325484-119977655") for a brush on a chromosome."""

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

    labels = driver.find_elements_by_class_name('bandLabel')
    assert len(labels) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    labels = driver.find_elements_by_class_name('bandLabel')
    assert len(labels) != 0


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

    # no labels initially
    labels = driver.find_elements_by_class_name('chrLabel')
    assert len(labels) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # labels should be displayed
    labels = driver.find_elements_by_class_name('chrLabel')
    assert len(labels) != 0


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
    chromosomes = driver.find_elements_by_class_name('chromosome')
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
    chromosomes = driver.find_elements_by_class_name('chromosome')
    num_chromosoms = len(chromosomes)
    assert num_chromosoms == 23

    has_chr_y = False
    for chromosome in chromosomes:
        if 'chrY' in chromosome.get_attribute('id'):
            has_chr_y = True
    assert has_chr_y is False


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

    # assert there is no annotation initially
    annots = driver.find_elements_by_class_name('annot')
    assert len(annots) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # raise an error if no element with 'annot' class is found
    wait_for_element_by_css_selector(driver, '.annot')



def test_annotation_height_tracks(dash_threaded):
    """Test the loading of annotations form a provided URL."""

    prop_type = 'float'

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
        'annotationHeight',
        'https://eweitz.github.io/ideogram/data/annotations/all_human_genes.json',
        prop_type=prop_type,
        component_base=COMPONENT_REACT_BASE,
        **BASIC_PROPS
    )

    driver = dash_threaded.driver

    # assert there is no annotation initially
    annots = driver.find_elements_by_class_name('annot')
    assert len(annots) == 0

    # trigger a change of the component prop
    btn = wait_for_element_by_css_selector(driver, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    # raise an error if no element with 'annot' class is found
    wait_for_element_by_css_selector(driver, '.annot')
