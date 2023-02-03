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

    WebDriverWait(dash_duo.driver, 15).until(
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
    WebDriverWait(dash_duo.driver, 15).until(
        lambda _: 'rotate(90)' in dash_duo.find_element(
            '#chr1-9606-chromosome-set').get_attribute('transform'))

    # click to rotate and ensure that the correct chromosome is rotated
    dash_duo.find_element('#chr1-9606-chromosome-set').click()

    # rotation shouldn't take more than 1-2 seconds
    WebDriverWait(dash_duo.driver, 15).until(
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

    dash_duo.wait_for_element('#chr1-9606-chromosome-set', 15)
    WebDriverWait(dash_duo.driver, 5).until(
        lambda _: 'rotate(90)' in dash_duo.find_element(
            '#chr1-9606-chromosome-set').get_attribute('transform'))

    # click to rotate and ensure that the correct chromosome is rotated
    dash_duo.find_element('#chr1-9606-chromosome-set').click()

    WebDriverWait(dash_duo.driver, 15)

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

    WebDriverWait(dash_duo.driver, 15).until(
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

    WebDriverWait(dash_duo.driver, 15).until(
        lambda _:
        len(dash_duo.find_elements('g.annot')) == 10
    )
