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


def test_change_dataset(dash_threaded, selenium):

    access_the_app(dash_threaded, selenium)

    dataset_dropdown = wait_for_element_by_id(selenium, 'vp-dataset-dropdown')
    dataset_dropdown.get_property('value')

    assert dataset_dropdown.get_property('value') == 'Set2'
