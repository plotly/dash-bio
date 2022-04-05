import json
import dash
from dash import html

from selenium.webdriver.common.action_chains import ActionChains
from selenium.common.exceptions import StaleElementReferenceException
from selenium.webdriver.support.ui import WebDriverWait
from common_features import (
    simple_app_layout,
    simple_app_callback,
    wait_for_element_attribute_equal,
    wait_for_element_attribute_has_no_value,
    wait_for_element_attribute_has_value,
)

from dash.dependencies import Input, Output

import dash_bio


_COMPONENT_ID = "test-ideogram"

annotations = {
    "keys": ["chr", "start", "length", "color"],
    "annots": [
        {
            "chr": "1",
            "annots": [
                ["virtual1", 30, 6, "rgba(255, 0, 0, 0.65)"],
                ["virtual2", 40000000, 5000000, "rgba(0, 255, 0, 0.65)"],
            ],
        },
        {
            "chr": "2",
            "annots": [
                ["nsv531656", 40738282, 17125539, "rgba(255, 0, 0, 0.65)"],
                ["2", 30000000, 9000000, "rgba(255, 0, 0, 0.65)"],
            ],
        },
        {
            "chr": "20",
            "annots": [["observation 1", 30954171, 5816, "rgba(255, 0, 0, 0.65)"]],
        },
        {
            "chr": "3",
            "annots": [
                [" ", 30000000, 9000000, "rgba(0, 255, 0, 0.65)"],
                ["virtual3", 33000000, 3000000, "rgba(255, 0, 0, 0.65)"],
            ],
        },
        {
            "chr": "9",
            "annots": [
                ["a duplicate name", 120000000, 9000000, "rgba(0, 255, 0, 0.65)"],
                ["a duplicate name", 12000000, 12000000, "rgba(255, 0, 0, 0.65)"],
            ],
        },
        {"chr": "foo", "annots": []},
        {
            "chr": "X",
            "annots": [["observation 2", 47422351, 6720, "rgba(0, 0, 255, 0.65)"]],
        },
    ],
}


def test_dbid001_displayed_chromosomes(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    chromosome_set_new = [str(i + 1) for i in range(5)]

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="chromosomes",
        test_prop_value=json.dumps(chromosome_set_new),
        prop_value_type="dict",
        validation_fn=lambda x: json.dumps(x) == json.dumps(chromosome_set_new),
    )

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: len(dash_duo.find_elements("g.chromosome-set")) == 5
    )


def test_dbid002_click_rotation(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="rotatable",
        test_prop_value=str(True),
        prop_value_type="bool",
        validation_fn=lambda x: x is True,
    )

    # ensure that it loads un-rotated
    wait_for_element_attribute_has_value(
        dash_duo, "#chr1-9606-chromosome-set", "transform", "rotate(90)"
    )

    # click to rotate and ensure that the correct chromosome is rotated
    dash_duo.wait_for_element("#chr1-9606-chromosome-set").click()

    # rotation shouldn't take more than 1-2 seconds
    wait_for_element_attribute_has_no_value(
        dash_duo, "#chr1-9606-chromosome-set", "transform", "rotate(90)"
    )


def test_dbid003_click_rotation_disabled(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="rotatable",
        test_prop_value=str(False),
        prop_value_type="bool",
        validation_fn=lambda x: x is False,
    )

    dash_duo.wait_for_element("#chr1-9606-chromosome-set", 5)
    wait_for_element_attribute_has_value(
        dash_duo, "#chr1-9606-chromosome-set", "transform", "rotate(90)"
    )

    # click to rotate and ensure that the correct chromosome is rotated
    dash_duo.find_element("#chr1-9606-chromosome-set").click()

    WebDriverWait(dash_duo.driver, 5)

    assert "rotate(90)" in dash_duo.find_element(
        "#chr1-9606-chromosome-set"
    ).get_attribute("transform")


def test_dbid004_remote_annotations_path(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="annotationsPath",
        test_prop_value="https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json",
        prop_value_type="string",
        validation_fn=lambda x: x
        == "https://eweitz.github.io/ideogram/data/annotations/10_virtual_cnvs.json",
        take_snapshot=True,
    )

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: len(dash_duo.find_elements("g.annot")) == 10
    )


def test_dbid005_local_annotations(dash_duo):
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="annotations",
        test_prop_value=json.dumps(annotations),
        prop_value_type="dict",
        validation_fn=lambda x: x == annotations,
        take_snapshot=True,
    )

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: len(dash_duo.find_elements("g.annot")) == 10
    )


def test_dbid006_class_name(dash_duo):
    """Test that className property is set correctly"""

    class_name = "my-ideogram"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="className",
        test_prop_value=class_name,
        prop_value_type="string",
        validation_fn=lambda x: x == class_name,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(".my-ideogram", 5)


def test_dbid007_annotation_height(dash_duo):
    """Test that annotationHeight property is set correctly"""

    annotation_height = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="annotationHeight",
        test_prop_value=annotation_height,
        prop_value_type="int",
        validation_fn=lambda x: x == annotation_height,
        take_snapshot=True,
    )

    annotationheight = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("annotationheight")

    assert annotationheight == str(annotation_height)


def test_dbid008_annotations_color(dash_duo):
    """Test that annotationsColor property is set correctly"""

    annotations_color = "#695756"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="annotationsColor",
        test_prop_value=annotations_color,
        prop_value_type="string",
        validation_fn=lambda x: x == annotations_color,
        take_snapshot=True,
    )

    annotationscolor = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("annotationscolor")

    assert annotationscolor == annotations_color


def test_dbid0010_annotations_layout(dash_duo):
    """Test that annotationsLayout property is set correctly"""

    annotations_layout = "histogram"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="annotationsLayout",
        test_prop_value=annotations_layout,
        prop_value_type="string",
        validation_fn=lambda x: x == annotations_layout,
    )

    annotationslayout = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("annotationslayout")

    assert annotationslayout == annotations_layout


def test_dbid0011_assembly(dash_duo):
    """Test that assembly property is set correctly"""

    assembly = "GCF_000306695.2"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="assembly",
        test_prop_value=assembly,
        prop_value_type="string",
        validation_fn=lambda x: x == assembly,
        take_snapshot=True,
    )

    container_assembly = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("assembly")

    assert container_assembly == assembly


def test_dbid0012_bar_width(dash_duo):
    """Test that barWidth property is set correctly"""

    bar_width = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="barWidth",
        test_prop_value=bar_width,
        prop_value_type="int",
        validation_fn=lambda x: x == bar_width,
        take_snapshot=True,
    )

    barwidth = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("barwidth")

    assert barwidth == str(bar_width)


def test_dbid0013_brush(dash_duo):
    """Test that brush property is set correctly"""

    brush = "chrX:1-10000000"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="brush",
        test_prop_value=brush,
        prop_value_type="string",
        validation_fn=lambda x: x == brush,
        take_snapshot=True,
    )

    brush_ideogram = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("brush")

    assert brush_ideogram == brush


def test_dbid0014_chr_height(dash_duo):
    """Test that chrHeight property is set correctly"""

    chr_height = 500

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="chrHeight",
        test_prop_value=chr_height,
        prop_value_type="int",
        validation_fn=lambda x: x == chr_height,
        take_snapshot=True,
    )

    chrheight = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("chrheight")

    assert chrheight == str(chr_height)


def test_dbid0015_chr_margin(dash_duo):
    """Test that chrMargin property is set correctly"""

    chr_margin = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="chrMargin",
        test_prop_value=chr_margin,
        prop_value_type="int",
        validation_fn=lambda x: x == chr_margin,
        take_snapshot=True,
    )

    chrmargin = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("chrmargin")

    assert chrmargin == str(chr_margin)


def test_dbid0016_chr_width(dash_duo):
    """Test that chrWidth property is set correctly"""

    chr_width = 5

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="chrWidth",
        test_prop_value=chr_width,
        prop_value_type="int",
        validation_fn=lambda x: x == chr_width,
        take_snapshot=True,
    )

    chrwidth = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("chrwidth")

    assert chrwidth == str(chr_width)


def test_dbid0017_container(dash_duo):
    """Test that container property is set correctly"""

    container = "ideogram-container"

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="container",
        test_prop_value=container,
        prop_value_type="string",
        validation_fn=lambda x: x == container,
        take_snapshot=True,
    )

    container_div = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("container")

    assert container_div == container


def test_dbid0018_style(dash_duo):
    """Test that style property is set without errors"""

    style = {"background-color": "red"}

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="style",
        test_prop_value=json.dumps(style),
        prop_value_type="dict",
        validation_fn=lambda x: x == style,
        take_snapshot=True,
    )

    ideogram = dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    assert ideogram.get_attribute("style") == "background-color: red;"
    assert len(dash_duo.get_logs()) == 0


def test_dbid019_annotation_tracks(dash_duo):
    """Test that annotationTracks property is set without errors"""

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID)))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="annotationTracks",
        test_prop_value=json.dumps(annotations),
        prop_value_type="list",
        validation_fn=lambda x: x == annotations,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    assert len(dash_duo.get_logs()) == 0


def test_dbid0020_histogram_scaling(dash_duo):
    """Test that histogramScaling property is set without errors"""

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(id=_COMPONENT_ID, annotationsLayout="histogram")
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="histogramScaling",
        test_prop_value="absolute",
        prop_value_type="string",
        validation_fn=lambda x: x == "absolute",
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    assert len(dash_duo.get_logs()) == 0


def test_dbid0021_homology(dash_duo):
    """Test that homology property is set correctly"""

    homology = {
        "chrOne": {
            "organism": "9606",
            "start": [50000, 155701383],
            "stop": [900000, 156030895],
        },
        "chrTwo": {
            "organism": "10090",
            "start": [10001, 50000000],
            "stop": [2781479, 57217415],
        },
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="homology",
        test_prop_value=json.dumps(homology),
        prop_value_type="dict",
        validation_fn=lambda x: x == homology,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    homo_atr = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("homology")
    assert homo_atr is not None


def test_dbid0022_filterable(dash_duo):
    """Test that filterable property is set correctly"""

    filterable = True

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="filterable",
        test_prop_value=filterable,
        prop_value_type="bool",
        validation_fn=lambda x: x == filterable,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    assert len(dash_duo.get_logs()) == 0


def test_dbid0023_full_chromosome_labels(dash_duo):
    """Test that fullChromosomeLabels property is set correctly"""

    full_chromosome_labels = True

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="fullChromosomeLabels",
        test_prop_value=full_chromosome_labels,
        prop_value_type="bool",
        validation_fn=lambda x: x == full_chromosome_labels,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    dash_duo.wait_for_element(".chrLabel tspan:nth-child(2)")

    assert (
        dash_duo.find_elements(".chrLabel tspan:nth-child(1)")[0].get_attribute(
            "innerHTML"
        )
        == "chr1"
    )
    assert len(dash_duo.get_logs()) == 0


def test_dbid0024_organism(dash_duo):
    """Test that organism property is set correctly"""

    organism = "zea-mays"

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(id=_COMPONENT_ID, fullChromosomeLabels=True)
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="organism",
        test_prop_value=organism,
        prop_value_type="string",
        validation_fn=lambda x: x == organism,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    wait_for_element_attribute_equal(
        dash_duo, ".chrLabel tspan:nth-child(2)", "innerHTML", "Zea mays"
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbid0025_orientation(dash_duo):
    """Test that orientation property is set correctly"""

    orientation = "horizontal"

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="orientation",
        test_prop_value=orientation,
        prop_value_type="string",
        validation_fn=lambda x: x == orientation,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    wait_for_element_attribute_has_no_value(
        dash_duo, "#chr1-9606-chromosome-set", "transform", "rotate(90)"
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbid0026_perspective(dash_duo):
    """Test that perspective property is set correctly"""

    perspective = "comparative"

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID, organism="human", chromosomes=["X", "Y"]
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="perspective",
        test_prop_value=perspective,
        prop_value_type="string",
        validation_fn=lambda x: x == perspective,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    wait_for_element_attribute_has_value(
        dash_duo, "#chrX-9606-chromosome-set", "transform", "translate(30, -200)"
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbid0027_ploidy(dash_duo):
    """Test that ploidy property is set correctly"""

    ploidy = 2

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="ploidy",
        test_prop_value=ploidy,
        prop_value_type="int",
        validation_fn=lambda x: x == ploidy,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    plot_ploidy_value = dash_duo.driver.find_element_by_id(
        "ideogram-container-test-ideogram"
    ).get_attribute("ploidy")

    assert len(dash_duo.get_logs()) == 0
    assert int(plot_ploidy_value) == ploidy


def test_dbid0028_rotated(dash_duo):
    """Test that rotated property is set without errors"""

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID, rotatable=True))
    )

    @app.callback(Output("prop-value", "value"), Input(_COMPONENT_ID, "rotated"))
    def simple_callback(prop_value):
        return prop_value

    dash_duo.start_server(app)

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    dash_duo.find_element("#chr1-9606-chromosome-set").click()
    dash_duo.wait_for_text_to_equal("#prop-value", "true")

    assert len(dash_duo.get_logs()) == 0


def test_dbid0030_sex(dash_duo):
    """Test that sex property is set without errors"""

    sex = "female"

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="sex",
        test_prop_value=sex,
        prop_value_type="string",
        validation_fn=lambda x: x == sex,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: len(dash_duo.find_elements(".chromosome-set")) == 23
    )

    assert dash_duo.get_logs() == []


def test_dbid0031_show_annot_tooltip(dash_duo):
    """Test that showAnnotTooltip property is set without errors"""

    show_annot_tooltip = False

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID, annotations=annotations))
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="showAnnotTooltip",
        test_prop_value=show_annot_tooltip,
        prop_value_type="bool",
        validation_fn=lambda x: x == show_annot_tooltip,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    ac = ActionChains(dash_duo.driver)

    for _ in range(3):
        try:
            ac.reset_actions()
            ac.move_to_element(dash_duo.find_element(".annot"))
            ac.perform()
            break
        except StaleElementReferenceException:
            pass

    wait_for_element_attribute_has_value(
        dash_duo, "#_ideogramTooltip", "style", "opacity: 0"
    )

    assert dash_duo.get_logs() == []


def test_dbid0032_show_band_labels(dash_duo):
    """Test that showBandLabels property is set without errors"""

    show_band_labels = True

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="showBandLabels",
        test_prop_value=show_band_labels,
        prop_value_type="bool",
        validation_fn=lambda x: x == show_band_labels,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    dash_duo.wait_for_element(".bsbsl-0")

    assert dash_duo.get_logs() == []


def test_dbid0033_show_chromosome_labels(dash_duo):
    """Test that showChromosomeLabels property is set without errors"""

    show_chr_labels = False

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="showChromosomeLabels",
        test_prop_value=show_chr_labels,
        prop_value_type="bool",
        validation_fn=lambda x: x == show_chr_labels,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    dash_duo.wait_for_no_elements(".chrLabel")

    assert dash_duo.get_logs() == []


def test_dbid0034_show_fully_banded(dash_duo):
    """Test that showFullyBanded property is set without errors"""

    show_fully_banded = False

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="showFullyBanded",
        test_prop_value=show_fully_banded,
        prop_value_type="bool",
        validation_fn=lambda x: x == show_fully_banded,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    dash_duo.wait_for_element(".chromosome-border path")
    wait_for_element_attribute_equal(dash_duo, ".chromosome-border path", "fill", "")

    assert dash_duo.get_logs() == []


def test_dbid0035_show_non_nuclear_chromosomes(dash_duo):
    """Test that showNonNuclearChromosomes property is set without errors"""

    show_non_nuclear_chr = True

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="showNonNuclearChromosomes",
        test_prop_value=show_non_nuclear_chr,
        prop_value_type="bool",
        validation_fn=lambda x: x == show_non_nuclear_chr,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: len(dash_duo.find_elements(".chromosome-set")) == 25
    )

    assert dash_duo.get_logs() == []


def test_dbid0036_data_dir(dash_duo):
    """Test that dataDir property is set without errors"""

    data_dir = "https://unpkg.com/ideogram/dist/data/bands/native/"
    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="dataDir",
        test_prop_value=data_dir,
        prop_value_type="string",
        validation_fn=lambda x: x == data_dir,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    assert dash_duo.get_logs() == []


def test_dbid0037_annotations_data(dash_duo):
    """Test that annotationsData property is set without errors"""

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(dash_bio.Ideogram(id=_COMPONENT_ID, annotations=annotations))
    )

    @app.callback(
        Output("prop-value", "value"), Input(_COMPONENT_ID, "annotationsData")
    )
    def simple_callback(prop_value):
        return prop_value

    dash_duo.start_server(app)

    ac = ActionChains(dash_duo.driver)
    try:
        ac.move_to_element(dash_duo.find_element(".annot"))
        ac.perform()
    except StaleElementReferenceException:
        ac.reset_actions()
        ac.move_to_element(dash_duo.wait_for_element(".annot"))
        ac.perform()

    dash_duo.wait_for_text_to_equal(
        "#prop-value", "chr1:30-36"
    )

    assert len(dash_duo.get_logs()) == 0


def test_dbid0038_access_token(dash_duo):
    """Test that accessToken property is set without errors"""

    access_token = "token"
    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="accessToken",
        test_prop_value=access_token,
        prop_value_type="string",
        validation_fn=lambda x: x == access_token,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    assert dash_duo.get_logs() == []


def test_dbid0039_range_set(dash_duo):
    """Test that rangeSet property is set without errors"""

    range_set = [
        {
            "chr": 1,
            "ploidy": [0, 1, 0],
            "start": 17120000,
            "stop": 25120000,
            "color": [
                0,
                "#7396be",
                0,
            ],
        }
    ]
    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
                ploidy=3,
                ancestors={"A": "#dea673", "B": "#7396be"},
                organism="banana",
                ploidyDesc=[
                    "AAB",
                    "AAB",
                    "BAB",
                    "AAB",
                    "AAB",
                    "BBB",
                    "AAB",
                    "AAB",
                    "AAB",
                    "AAB",
                    "AAB",
                ],
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="rangeSet",
        test_prop_value=json.dumps(range_set),
        prop_value_type="list",
        validation_fn=lambda x: x == range_set,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")

    assert dash_duo.get_logs() == []


def test_dbid0040_ploidy_desc(dash_duo):
    """Test that ploidyDesc property is set without errors"""

    ploidy_desc = [
        "AAB",
        "AAB",
        "BAB",
        "AAB",
        "AAB",
        "BBB",
        "AAB",
        "AAB",
        "AAB",
        "AAB",
        "AAB",
    ]
    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
                ploidy=3,
                organism="banana",
            )
        )
    )

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name="ploidyDesc",
        test_prop_value=json.dumps(ploidy_desc),
        prop_value_type="list",
        validation_fn=lambda x: x == ploidy_desc,
        take_snapshot=True,
    )

    dash_duo.wait_for_element(f"#{_COMPONENT_ID}")
    dash_duo.wait_for_text_to_equal(".chromosome .chrLabel", "B")

    assert dash_duo.get_logs() == []


def test_dbid0041_brush_data(dash_duo):
    """Test that brushData property is set without errors"""

    app = dash.Dash(__name__)

    app.layout = html.Div(
        simple_app_layout(
            dash_bio.Ideogram(
                id=_COMPONENT_ID,
                brush="chr1:104325484-119977655",
            )
        )
    )

    @app.callback(Output("prop-value", "value"), Input(_COMPONENT_ID, "brushData"))
    def simple_callback(prop_value):
        if (
            prop_value
            and "start" in prop_value
            and "end" in prop_value
            and "extent" in prop_value
        ):
            return "passed"
        return ""

    dash_duo.start_server(app)

    dash_duo.wait_for_text_to_equal("#prop-value", "passed")

    assert len(dash_duo.get_logs()) == 0
