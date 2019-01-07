import shutil
import sys


from pytest_dash.utils import (
    import_app,
    wait_for_text_to_equal,
    wait_for_element_by_css_selector
)


def test_install(cookies, dash_threaded, selenium):
    results = cookies.bake(extra_context={
        'project_name': 'Dash Bio',
        'author_name': 'test',
        'author_email': 'test',
    })

    # Add the generated project to the path so it can be loaded from usage.py
    # It lies somewhere in a temp directory created by pytest-cookies
    sys.path.insert(0, str(results.project))

    # Test that `usage.py` works after building the default component.
    dash_threaded(import_app('index'))

