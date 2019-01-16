from selenium.webdriver.common.keys import Keys

from pytest_dash.utils import (
    import_app,
    wait_for_text_to_equal,
    wait_for_element_by_css_selector,
    wait_for_element_by_xpath,
    wait_for_element_by_id,
    wait_for_property_to_equal
)

from .test_common_features import access_demo_app

APP_NAME = "volcano_plot"


def test_click_app_link_from_gallery(dash_threaded, selenium):

    access_demo_app(dash_threaded, selenium, APP_NAME)

    assert selenium.current_url.replace('http://localhost:8050', '') == '/dash-bio/volcano-plot'


def test_initial_dataset(dash_threaded, selenium):
    """check the default dataset is Set2"""
    access_demo_app(dash_threaded, selenium, APP_NAME)
    wait_for_text_to_equal(selenium, '#vp-dataset-dropdown .Select-value-label', 'Set2')


def test_change_dataset(dash_threaded, selenium):
    """change dataset using the dropdown"""
    access_demo_app(dash_threaded, selenium, APP_NAME)
    dataset_dropdown = wait_for_element_by_css_selector(selenium, '#vp-dataset-dropdown .Select-input input')

    dataset_dropdown.send_keys('Set1')
    dataset_dropdown.send_keys(Keys.RETURN)

    wait_for_text_to_equal(selenium, '#vp-dataset-dropdown .Select-value-label', 'Set1')

