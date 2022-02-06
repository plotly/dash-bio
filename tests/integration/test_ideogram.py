import json

import dash
import dash_bio
import dash_html_components as html

from common_features import simple_app_layout, simple_app_callback
from selenium.webdriver.support.ui import WebDriverWait

_COMPONENT_ID = 'test-ideogram'


def test_dbid001_displayed_chromosomes(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    chromosome_set_new = [str(i+1) for i in range(5)]

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='chromosomes',
        test_prop_value=json.dumps(chromosome_set_new),
        prop_value_type='dict',
        validation_fn=lambda x: json.dumps(x) == json.dumps(chromosome_set_new)
    )

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _:
        len(dash_duo.find_elements('g.chromosome-set')) == 5
    )


def test_dbid002_click_rotation(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='rotatable',
        test_prop_value=str(True),
        prop_value_type='bool',
        validation_fn=lambda x: x is True
    )

    # ensure that it loads un-rotated
    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: 'rotate(90)' in dash_duo.find_element(
            '#chr1-9606-chromosome-set').get_attribute('transform'))

    # click to rotate and ensure that the correct chromosome is rotated
    dash_duo.find_element('#chr1-9606-chromosome-set').click()

    # rotation shouldn't take more than 1-2 seconds
    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: 'rotate(0)' in dash_duo.find_element(
            '#chr1-9606-chromosome-set').get_attribute('transform'))


def test_dbid003_click_rotation_disabled(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='rotatable',
        test_prop_value=str(False),
        prop_value_type='bool',
        validation_fn=lambda x: x is False
    )

    dash_duo.wait_for_element('#chr1-9606-chromosome-set', 5)
    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: 'rotate(90)' in dash_duo.find_element(
            '#chr1-9606-chromosome-set').get_attribute('transform'))

    # click to rotate and ensure that the correct chromosome is rotated
    dash_duo.find_element('#chr1-9606-chromosome-set').click()

    WebDriverWait(dash_duo.driver, 5)

    assert 'rotate(90)' in dash_duo.find_element(
        '#chr1-9606-chromosome-set').get_attribute('transform')


def test_dbid004_remote_annotations_path(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='annotationsPath',
        test_prop_value='https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json',
        prop_value_type='string',
        validation_fn=lambda x:
        x == 'https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json',
        take_snapshot=True,
    )

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _:
        len(dash_duo.find_elements('g.annot')) == 10
    )


def test_dbid005_local_annotations(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    annotations = {
        "keys": ["chr", "start", "length", "color"],
        "annots": [
            {"chr": "1", "annots": [["virtual1", 30000000, 6000000, "rgba(255, 0, 0, 0.65)"],
                                    ["virtual2", 40000000, 5000000, "rgba(0, 255, 0, 0.65)"]]},
            {"chr": "2", "annots": [["nsv531656", 40738282, 17125539, "rgba(255, 0, 0, 0.65)"],
                                    ["2", 30000000, 9000000, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "20", "annots": [["observation 1", 30954171, 5816, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "3", "annots": [[" ", 30000000, 9000000, "rgba(0, 255, 0, 0.65)"],
                                    ["virtual3", 33000000, 3000000, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "9", "annots":
                [["a duplicate name", 120000000, 9000000, "rgba(0, 255, 0, 0.65)"],
                 ["a duplicate name", 12000000, 12000000, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "foo", "annots": []},
            {"chr": "X", "annots": [["observation 2", 47422351, 6720, "rgba(0, 0, 255, 0.65)"]]}
        ]
    }

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='annotations',
        test_prop_value=json.dumps(annotations),
        prop_value_type='dict',
        validation_fn=lambda x: x == annotations,
        take_snapshot=True,
    )

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _:
        len(dash_duo.find_elements('g.annot')) == 10
    )


def test_dbid006_class_name(dash_duo):
    """Test that className property is set correctly"""

    class_name = 'my-ideogram'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='className',
        test_prop_value=class_name,
        prop_value_type='string',
        validation_fn=lambda x: x == class_name,
        take_snapshot=True,
    )

    dash_duo.wait_for_element('.my-ideogram', 5)


def test_dbid007_annotation_height(dash_duo):
    """Test that annotationHeight property is set correctly"""

    annotation_height = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='annotationHeight',
        test_prop_value=annotation_height,
        prop_value_type='int',
        validation_fn=lambda x: x == annotation_height,
        take_snapshot=True,
    )

    annotationheight = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('annotationheight')

    assert annotationheight == str(annotation_height)


def test_dbid008_annotations_color(dash_duo):
    """Test that annotationsColor property is set correctly"""

    annotations_color = '#695756'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='annotationsColor',
        test_prop_value=annotations_color,
        prop_value_type='string',
        validation_fn=lambda x: x == annotations_color,
        take_snapshot=True,
    )

    annotationscolor = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('annotationscolor')

    assert annotationscolor == annotations_color


def test_dbid009_annotations_layout(dash_duo):
    """Test that annotationsColor property is set correctly"""

    annotations_layout = 'histogram'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='annotationsLayout',
        test_prop_value=annotations_layout,
        prop_value_type='string',
        validation_fn=lambda x: x == annotations_layout,
        take_snapshot=True,
    )

    annotationslayout = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('annotationslayout')

    assert annotationslayout == annotations_layout


def test_dbid0010_annotations_layout(dash_duo):
    """Test that annotationsLayout property is set correctly"""

    annotations_layout = 'histogram'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='annotationsLayout',
        test_prop_value=annotations_layout,
        prop_value_type='string',
        validation_fn=lambda x: x == annotations_layout,
        take_snapshot=True,
    )

    annotationslayout = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('annotationslayout')

    assert annotationslayout == annotations_layout


def test_dbid0011_assembly(dash_duo):
    """Test that assembly property is set correctly"""

    assembly = 'GCF_000306695.2'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='assembly',
        test_prop_value=assembly,
        prop_value_type='string',
        validation_fn=lambda x: x == assembly,
        take_snapshot=True,
    )

    container_assembly = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('assembly')

    assert container_assembly == assembly


def test_dbid0012_bar_width(dash_duo):
    """Test that barWidth property is set correctly"""

    bar_width = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='barWidth',
        test_prop_value=bar_width,
        prop_value_type='int',
        validation_fn=lambda x: x == bar_width,
        take_snapshot=True,
    )

    barwidth = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('barwidth')

    assert barwidth == str(bar_width)


def test_dbid0013_brush(dash_duo):
    """Test that brush property is set correctly"""

    brush = 'chrX:1-10000000'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='brush',
        test_prop_value=brush,
        prop_value_type='string',
        validation_fn=lambda x: x == brush,
        take_snapshot=True,
    )

    brush_ideogram = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('brush')

    assert brush_ideogram == brush


def test_dbid0014_chr_height(dash_duo):
    """Test that chrHeight property is set correctly"""

    chr_height = 500

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='chrHeight',
        test_prop_value=chr_height,
        prop_value_type='int',
        validation_fn=lambda x: x == chr_height,
        take_snapshot=True,
    )

    chrheight = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('chrheight')

    assert chrheight == str(chr_height)


def test_dbid0014_chr_margin(dash_duo):
    """Test that chrMargin property is set correctly"""

    chr_margin = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='chrMargin',
        test_prop_value=chr_margin,
        prop_value_type='int',
        validation_fn=lambda x: x == chr_margin,
        take_snapshot=True,
    )

    chrmargin = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('chrmargin')

    assert chrmargin == str(chr_margin)


def test_dbid0016_chr_width(dash_duo):
    """Test that chrWidth property is set correctly"""

    chr_width = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='chrWidth',
        test_prop_value=chr_width,
        prop_value_type='int',
        validation_fn=lambda x: x == chr_width,
        take_snapshot=True,
    )

    chrwidth = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('chrwidth')

    assert chrwidth == str(chr_width)


def test_dbid0017_container(dash_duo):
    """Test that container property is set correctly"""

    container = 'ideogram-container'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='container',
        test_prop_value=container,
        prop_value_type='string',
        validation_fn=lambda x: x == container,
        take_snapshot=True,
    )

    container_div = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('container')

    assert container_div == container


def test_dbid0018_style(dash_duo):
    """ Test that style property is set without errors """

    style = {
        'background-color': 'red'
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='style',
        test_prop_value=json.dumps(style),
        prop_value_type='dict',
        validation_fn=lambda x: x == style,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert len(dash_duo.get_logs()) == 0


def test_dbid019_annotation_tracks(dash_duo):
    """ Test that annotationTracks property is set without errors """

    annotations = {
        "keys": ["chr", "start", "length", "color"],
        "annots": [
            {"chr": "1", "annots": [["virtual1", 30000000, 6000000, "rgba(255, 0, 0, 0.65)"],
                                    ["virtual2", 40000000, 5000000, "rgba(0, 255, 0, 0.65)"]]},
            {"chr": "2", "annots": [["nsv531656", 40738282, 17125539, "rgba(255, 0, 0, 0.65)"],
                                    ["2", 30000000, 9000000, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "20", "annots": [["observation 1", 30954171, 5816, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "3", "annots": [[" ", 30000000, 9000000, "rgba(0, 255, 0, 0.65)"],
                                    ["virtual3", 33000000, 3000000, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "9", "annots":
                [["a duplicate name", 120000000, 9000000, "rgba(0, 255, 0, 0.65)"],
                 ["a duplicate name", 12000000, 12000000, "rgba(255, 0, 0, 0.65)"]]},
            {"chr": "foo", "annots": []},
            {"chr": "X", "annots": [["observation 2", 47422351, 6720, "rgba(0, 0, 255, 0.65)"]]}
        ]
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='annotationTracks',
        test_prop_value=json.dumps(annotations),
        prop_value_type='list',
        validation_fn=lambda x: x == annotations,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert len(dash_duo.get_logs()) == 0


def test_dbid0020_histogram_scaling(dash_duo):
    """ Test that histogramScaling property is set without errors """

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID,
            annotationsLayout='histogram'
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='histogramScaling',
        test_prop_value='absolute',
        prop_value_type='string',
        validation_fn=lambda x: x == 'absolute',
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert len(dash_duo.get_logs()) == 0


def test_dbid0021_homology(dash_duo):
    """ Test that homology property is set correctly """

    homology = {"chrOne": {"organism": "9606",
                           "start": [50000, 155701383],
                           "stop": [900000, 156030895]},
                "chrTwo": {"organism": "10090",
                           "start": [10001, 50000000],
                           "stop": [2781479, 57217415]}
                }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID,
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='homology',
        test_prop_value=json.dumps(homology),
        prop_value_type='dict',
        validation_fn=lambda x: x == homology,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    homo_atr = dash_duo.driver\
        .find_element_by_id('ideogram-container-test-ideogram')\
        .get_attribute('homology')
    assert homo_atr is not None


def test_dbid0022_filterable(dash_duo):
    """ Test that filterable property is set correctly """

    filterable = True

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID,
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='filterable',
        test_prop_value=filterable,
        prop_value_type='bool',
        validation_fn=lambda x: x == filterable,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert len(dash_duo.get_logs()) == 0


def test_dbid0023_full_chromosome_labels(dash_duo):
    """ Test that fullChromosomeLabels property is set correctly """

    full_chromosome_labels = True

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID,
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='fullChromosomeLabels',
        test_prop_value=full_chromosome_labels,
        prop_value_type='bool',
        validation_fn=lambda x: x == full_chromosome_labels,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert len(dash_duo.get_logs()) == 0


def test_dbid0024_organism(dash_duo):
    """ Test that organism property is set correctly """

    organism = 'zea-mays'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Ideogram(
            id=_COMPONENT_ID,
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='organism',
        test_prop_value=organism,
        prop_value_type='string',
        validation_fn=lambda x: x == organism,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert len(dash_duo.get_logs()) == 0
