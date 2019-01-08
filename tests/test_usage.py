import shutil
import sys


from pytest_dash.utils import (
    import_app,
    wait_for_text_to_equal,
    wait_for_element_by_css_selector
)


def test_install(cookies, dash_threaded, selenium):
    """Launch the app.

    `dash_threaded` is a fixture by `pytest-dash`.
    It will load a .py file containing a Dash instance
    and start it in a thread.
    """
    results = cookies.bake(extra_context={
        'project_name': 'Dash Bio',
        'author_name': 'test',
        'author_email': 'test',
    })

    # Add the generated project to the path
    # It lies somewhere in a temp directory created by pytest-cookies
    sys.path.insert(0, str(results.project))

    # Test that `index.py` (the main gallery) works
    dash_threaded(import_app('index'))

