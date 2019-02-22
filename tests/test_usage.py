import os

from pytest_dash.application_runners import import_app

from index import apps, get_demo_app_img


def test_start(dash_threaded):
    """Launch the app.

    `dash_threaded` is a fixture by `pytest-dash`.
    It will load a .py file containing a Dash instance
    and start it in a thread.
    """

    app = import_app('index')
    assert 'gallery', 'bioinformatics' in str(app.layout)

    # Test that `index.py` (the main gallery) works
    dash_threaded(app)


def test_get_app_img():
    """Ensure that each demo app has a corresponding image."""

    pic_names = [get_demo_app_img(key) for key in apps]
    for fn in pic_names:
        assert os.path.isfile(fn)
