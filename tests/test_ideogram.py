import os
from selenium.webdriver.common.keys import Keys

from pytest_dash.utils import (
    wait_for_text_to_equal,
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
        assert("rotate(90)" in str(chromosom.get_attribute("transform")))

    btn = wait_for_element_by_css_selector(selenium, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    chromosoms = selenium.find_elements_by_class_name('chromosome-set-container')
    for chromosom in chromosoms:
        assert ("rotate(90)" not in str(chromosom.get_attribute("transform")))


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
    assert(num_chromosoms == 24)

    btn = wait_for_element_by_css_selector(selenium, '#test-{}-btn'.format(APP_NAME))
    btn.click()

    num_chromosoms = len(selenium.find_elements_by_class_name('chromosome'))
    assert(num_chromosoms == 46)


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
    assert(num_chromosoms == 3)


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
    assert (num_chromosoms == 2)


"""
Ideogram.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks
     * and used to identify Ideogram instances.
     */
    id: PropTypes.string.isRequired,

    /**
     * The component's inline styles
     */
    style: PropTypes.object,

    /**
     * Dash specific prop type connecting event handlers to front end.
     */
    setProps: PropTypes.func,

    /**
     * The CSS class of the component wrapper
     */
    className: PropTypes.string,

    /**
     * Use this prop in callback to return annotationData when hovered.
     */
    annotationsData: PropTypes.string,

    /**
     *  A map associating ancestor labels to colors. Used to color
     * chromosomes from different ancestors in polyploid genomes.
     */

    ancestors: PropTypes.object,

    /**
     *  A list of annotation objects. Annotation objects can also have a
     *  name, color, shape, and track index. At the moment there is more
     *  keys specified and the docs need updating.
     */

    annotations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            chr: PropTypes.string,
            start: PropTypes.number,
            stop: PropTypes.number,
        })
    ),

    /**
     *  The height of each annotation.
     */
    annotationHeight: PropTypes.number,

    /**
     * The layout of this ideogram's annotations.
     * It can be one of "tracks", "histogram", or "overlay".
     *
     * Tracks: Lay out annotations in tracks beside each chromosome.
     *
     * Histogram: Layout annotations in a histogram. Clusters annotations
     * by location. Each cluster/bin is shown as a height of a bar to represent
     * number of annotations on genomic range.
     *
     * Overlay: Lay out annotations directly over chromsomes.
     */
    annotationsLayout: PropTypes.string,

    /**
     * The color of each annotation.
     */
    annotationsColor: PropTypes.string,

    /**
     * An absolute or relative URL directing to a JSON file containing
     * annotation objects (JSON).
     */
    annotationsPath: PropTypes.string,

    /**
     * A list of objects with metadata for each track,
     * e.g. id, display name, color, shape.
     */
    annotationTracks: PropTypes.arrayOf(PropTypes.object),

    /**
     * Default: latest RefSeq assembly for specified organism.
     * The genome assembly to display.
     * Takes assembly name (e.g. "GRCh37"),
     * RefSeq accession (e.g. "GCF_000306695.2"),
     * or GenBank accession (e.g. "GCA_000005005.5")
     */
    assembly: PropTypes.string,

    /**
     * The pixel width of bars drawn when annotationsLayout: 'histogram'.
     **/
    barWidth: PropTypes.number,

    /**
     * Genomic coordinate range (e.g. "chr1:104325484-119977655") for a brush on a
     * chromosome. Useful when ideogram consists of one chromosome and you want to be
     * able to focus on a region within that chromosome,
     * and create an interactive sliding window to other regions
     */

    brush: PropTypes.string,

    /**
     * A dash callback that is activated when the 'brush' prop is used in component.
     * It will return an dictionary like so:
     *
     * {'start': <value>, 'end': <value>, 'extent': <value>}
     *
     * where start is the left most edge, end is right most edge, and extent is
     * the total width of the brush.
     *
     */
    brushData: PropTypes.string,

    /**
     * CSS styling and the id of the container holding the Ideogram in
     * react-ideogram.js, this is where all the d3 magic happens.
     */
    container: PropTypes.string,

    /**
     * A list of the names of chromosomes to 
     * display. Useful for depicting a subset of the chromosomes in the genome, 
     * e.g. a single chromosome.
     * 
     * If Homology (between two different species):
     * Ex: chromosomes={
            'human': ['1'],
            'mouse': ['4']
        }
     */
    chromosomes: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.object,
    ]),

    /**
     * Absolute or relative URL of the directory
     * containing data needed to draw banded chromosomes.
     * You will need to set up you're own database to grab data from
     * for custom data.
     */
    dataDir: PropTypes.string,


    /**
     * One of "absolute" or "relative". The technique to use in scaling the height of histogram 
     bars. The "absolute" value sets bar height relative to tallest bar in all chromosomes,
     * while "relative" sets bar height relative to tallest bar in each chromosome.
     */
    histogramScaling: PropTypes.string,

    /**
     * This is a work in progess and will hopefully be fixed in future releases.
     */
    heatmaps: PropTypes.arrayOf(PropTypes.object),

    /**
     * Used to compare two chromosomes with each other.
     * The keys "chrOne" and "chrTwo" represent one chromosome each. Organism is the 
     * taxID or name. Start is an array, containing start one and 
     * start two in this order. Stop is array, containing stop one, and stop two, 
     * in this order.
     * Ex: homology={
                    "chrOne": {
                        "organism": "9606",
                        "start": [50000, 155701383],
                        "stop": [900000, 156030895]
                    },
                    "chrTwo": {
                        "organism": "10090",
                        "start": [10001, 50000000],
                        "stop": [2781479, 57217415]
                    }
                }
     */
    homology: PropTypes.shape({
        chrOne: PropTypes.shape({
            organism: PropTypes.string.isRequired,
            start: PropTypes.arrayOf(PropTypes.number.isRequired),
            stop: PropTypes.arrayOf(PropTypes.number.isRequired),
        }),
        chrTwo: PropTypes.shape({
            organism: PropTypes.string.isRequired,
            start: PropTypes.arrayOf(PropTypes.number.isRequired),
            stop: PropTypes.arrayOf(PropTypes.number.isRequired),
        }),
    }),

    /**
     * Whether annotations should be filterable.
     */
    filterable: PropTypes.number,

    /**
     * Provide local JSON organism into this prop from a local user JSON file.
     * DataDir must not be initiliazed.
     */
    localOrganism: PropTypes.object,

    /**
     * Dash event callback for mousing over data.
     */
    onMouseOver: PropTypes.func,

    /**
     * Organism(s) to show chromosomes for. Supply organism's name as a string (e.g. "human") or
     * organism's NCBI Taxonomy ID (taxid, e.g. 9606) to display chromosomes from a single 
     organism,
     * or an array of organisms' names or taxids to display chromosomes from multiple species.
     */
    organism: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

    /**
     * Callback function to invoke when brush moves.
     */
    onBrushMove: PropTypes.func,

    /**
     * Callback function to invoke after chromosome has rotated. (React)
     */
    onDidRotate: PropTypes.func,

    /**
     * Callback function to invoke when annotations are drawn. (React)
     */
    onDrawAnnots: PropTypes.func,

    /**
     * Callback function to invoke when chromosomes are loaded,
     * i.e. rendered on the page. (React)
     */
    onLoad: PropTypes.func,

    /**
     * Use perspective: 'comparative' to enable annotations between two chromosomes,
     * either within the same organism or different organisms. Used for homology.
     */
    perspective: PropTypes.string,

    /**
     * Description of ploidy in each chromosome set in terms of
     * ancestry composition.
     */
    ploidyDesc: PropTypes.arrayOf(PropTypes.object),

    /**
     * List of objects describing segments of recombination
     * among chromosomes in a chromosome set.
     */
    rangeSet: PropTypes.arrayOf(PropTypes.object),

    /**
     * Whether chromosomes are rotatable on click.
     */

    rotatable: PropTypes.bool,

    /**
     * Dash callback that returns True if rotated, and false if not.
     */
    rotated: PropTypes.bool,

    /**
     * The resolution of cytogenetic bands to show for each chromosome.
     * The quantity refers to approximate value in bands per haploid set (bphs).
     * One of 450, 550, or 850.
     */
    resolution: PropTypes.number,

    /**
     * Useful for putting ideogram into a small container,
     * or when dealing with genomes that have many chromosomes.
     * Note: Not fully working needs to be fixed by developer.
     */
    rows: PropTypes.number,

    /**
     * Useful for omitting chromosome Y in female mammals.
     * Currently only supported for organisms that use XY sex-determination.
     */
    sex: PropTypes.string,

    /**
     * Whether to show chromosome labels, e.g. 1, 2, 3, X, Y.
     */
    showChromosomeLabels: PropTypes.bool,

    /**
     * Whether to show cytogenetic band labels, e.g. 1q21
     **/
    showBandLabels: PropTypes.bool,

    /**
     * Whether to show a tooltip upon mousing over an annotation.
     */
    showAnnotTooltip: PropTypes.bool,

    /**
     * Whether to show fully banded chromosomes for genomes
     * that have sufficient data. Useful for showing simpler chromosomes of
     * cytogenetically well-characterized organisms, e.g. human, beside chromosomes of
     * less studied organisms, e.g. chimpanzee.
     */
    showFullyBanded: PropTypes.bool,

    /**
     * Whether to show non-nuclear chromosomes,
     * e.g. for mitochondrial (MT) and chloroplast (CP) DNA.
     */
    showNonNuclearChromosomes: PropTypes.bool,
};
"""
