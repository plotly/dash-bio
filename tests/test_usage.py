from pytest_dash.application_runners import import_app


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
