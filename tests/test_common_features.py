import functools
from pytest_dash.utils import (
    import_app,
    wait_for_element_by_id,
)


def access_demo_app(dash_threaded, selenium, app_name):
    """Mimic a user click on the app link from the gallery."""
    dash_bio_index = import_app('index')
    dash_threaded(dash_bio_index)
    link = wait_for_element_by_id(selenium, 'app-link-id-{}'.format(app_name))
    link.click()


def init_demo_app(app_name):
    # allow the decorator to take the app_name as an argument
    def decorator_init_demo_app(func):
        # preserves the __name__ and __doc__ values of the decorated func
        @functools.wraps(func)
        def wrapper_init_demo_app(dash_threaded, selenium):
            # start the index.py app in a thread and move to the component URL
            access_demo_app(dash_threaded, selenium, app_name)
            # execute the test function from there
            func(dash_threaded, selenium)
        return wrapper_init_demo_app
    return decorator_init_demo_app
