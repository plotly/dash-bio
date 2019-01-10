import shutil
import sys


from pytest_dash.utils import (
    import_app,
    wait_for_text_to_equal,
    wait_for_element_by_css_selector
)


def test_start(dash_threaded, selenium):
    """Launch the app.

    `dash_threaded` is a fixture by `pytest-dash`.
    It will load a .py file containing a Dash instance
    and start it in a thread.
    """

    app = import_app('index')
    assert 'gallery', 'bioinformatics' in str(app.layout)

    # Test that `index.py` (the main gallery) works
    dash_threaded(app)
