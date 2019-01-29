import dash


def run_standalone_app(layout, callbacks, port=8050, debug=True):
    """Run demo app (tests/dashbio_demos/app_*.py) as standalone app."""
    app = dash.Dash()
    app.scripts.config.serve_locally = True
    app.config['suppress_callback_exceptions'] = True

    server = app.server

    app.layout = layout()  # assign layout
    callbacks(app)  # register all callbacks
    app.run_server(debug=debug, port=port)
