import os
from selenium.webdriver.common.keys import Keys

from pytest_dash.utils import (
    wait_for_text_to_equal,
    wait_for_element_by_css_selector,
)
import dash
from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
from .test_common_features import access_demo_app

APP_NAME = os.path.basename(__file__).replace('test_', '').replace('.py', '')


LAYOUT = html.Div(
    id='-test-graph-div',
    children=[
        dcc.Graph(
            id='test-graph',
        ),
        html.Button(id='test-btn', children='click me'),
        dcc.Input(id='test-param-name-input', value=''),
        dcc.Input(id='test-param-value-input', value=''),
        html.Div(id='test-assert-value-div', children='')
    ]
)
def test_click_app_link_from_gallery(dash_threaded, selenium):

    access_demo_app(dash_threaded, selenium, APP_NAME)

    assert selenium.current_url.replace('http://localhost:8050', '') == '/dash-bio/volcano-plot'


def test_initial_dataset(dash_threaded, selenium):
    """check the default dataset is Set2"""
    access_demo_app(dash_threaded, selenium, APP_NAME)
    wait_for_text_to_equal(
        selenium,
        '#vp-dataset-dropdown .Select-value-label',
        'Set2'
    )


def test_change_dataset(dash_threaded, selenium):
    """change dataset using the dropdown"""
    access_demo_app(dash_threaded, selenium, APP_NAME)
    dataset_dropdown = wait_for_element_by_css_selector(
        selenium,
        '#vp-dataset-dropdown .Select-input input'
    )

    dataset_dropdown.send_keys('Set1')
    dataset_dropdown.send_keys(Keys.RETURN)

    wait_for_text_to_equal(
        selenium,
        '#vp-dataset-dropdown .Select-value-label',
        'Set1'
    )


def test_lower_genomic_line(dash_threaded, selenium):
    """lower the threshold genomic line and verify the change in the highlight points number"""
    access_demo_app(dash_threaded, selenium, APP_NAME)

    # initial check
    wait_for_text_to_equal(selenium, '#vp-dataset-dropdown .Select-value-label', 'Set2')
    wait_for_text_to_equal(selenium, '#vp-upper-left', '14')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '92')

    threshold = wait_for_element_by_css_selector(selenium, '#vp-genomic-line')
    lower_bound = wait_for_element_by_css_selector(selenium, '#vp-lower-bound')
    upper_bound = wait_for_element_by_css_selector(selenium, '#vp-upper-bound')

    assert int(threshold.get_attribute('value')) == 4
    assert int(lower_bound.get_attribute('value')) == -1
    assert int(upper_bound.get_attribute('value')) == 1

    # lower the threshold
    threshold.send_keys(Keys.ARROW_DOWN)

    # number of points in the upper left and upper right quadrants
    wait_for_text_to_equal(selenium, '#vp-upper-left', '154')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '271')


def test_effect_size_min_and_max(dash_threaded, selenium):
    """move the lower and upper effect size lines to their max and min, respectively"""

    access_demo_app(dash_threaded, selenium, APP_NAME)

    lower_bound = wait_for_element_by_css_selector(selenium, '#vp-lower-bound')
    upper_bound = wait_for_element_by_css_selector(selenium, '#vp-upper-bound')

    lower_bound.send_keys(Keys.ARROW_UP)
    assert int(lower_bound.get_attribute('value')) == 0

    # maximum should be set to 0
    lower_bound.send_keys(Keys.ARROW_UP)
    assert int(lower_bound.get_attribute('value')) == 0

    # number of points in the upper left and upper right quadrants
    wait_for_text_to_equal(selenium, '#vp-upper-left', '24')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '92')

    upper_bound.send_keys(Keys.ARROW_DOWN)
    assert int(upper_bound.get_attribute('value')) == 0

    # minimum should be set to 0
    upper_bound.send_keys(Keys.ARROW_DOWN)
    assert int(upper_bound.get_attribute('value')) == 0

    # number of points in the upper left and upper right quadrants
    wait_for_text_to_equal(selenium, '#vp-upper-left', '24')
    wait_for_text_to_equal(selenium, '#vp-upper-right', '99')
