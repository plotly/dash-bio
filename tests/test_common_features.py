import functools
from pytest_dash.utils import (
    import_app,
    wait_for_element_by_id,
)


def access_demo_app(dash_threaded, selenium, app_name):
    """mimic a user click on the app link from the gallery"""
    dash_bio_index = import_app('index')
    dash_threaded(dash_bio_index)
    link = wait_for_element_by_id(selenium, 'app-link-id-{}'.format(app_name))
    link.click()


def init_demo_app(app_name):
    def access_demo_app_wrapper(func):
        @functools.wraps(func)
        def wrapper(dash_threaded, selenium):
            access_demo_app(dash_threaded, selenium, app_name)
            func(dash_threaded, selenium)
        return wrapper
    return access_demo_app_wrapper
