import dash
from .app_wrapper import app_page_layout


def run_standalone_app(layout, callbacks, port=8050, debug=True):
    """Run demo app (tests/dashbio_demos/app_*.py) as standalone app."""
    app = dash.Dash(__name__, assets_folder='assets/')
    app.scripts.config.serve_locally = True
    # Handle callback to component with id "fullband-switch"
    app.config['suppress_callback_exceptions'] = True
    # Assign layout
    app.layout = app_page_layout(layout())
    # Register all callbacks
    callbacks(app)
    app.run_server(debug=debug, port=port)
