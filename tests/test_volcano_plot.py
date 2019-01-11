from pytest_dash.utils import (
    import_app,
    wait_for_text_to_equal,
    wait_for_element_by_css_selector,
    wait_for_element_by_xpath,
    wait_for_element_by_id,
    wait_for_property_to_equal
)


def access_the_app(dash_threaded, selenium):
    """mimic a user click on the app link from the gallery"""
    dash_bio_index = import_app('index')
    dash_threaded(dash_bio_index)
    link = wait_for_element_by_id(selenium, 'app-link-id-volcano_plot')
    link.click()


def test_click_app_link_from_gallery(dash_threaded, selenium):

    access_the_app(dash_threaded, selenium)

    assert selenium.current_url.replace('http://localhost:8050', '') == '/dash-bio/volcano-plot'

