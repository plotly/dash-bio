import dash
import os
from .app_wrapper import app_page_layout


def run_standalone_app(
        layout,
        callbacks,
        header_colors,
        filename
):
    """Run demo app (tests/dashbio_demos/app_*.py) as standalone app."""
    app = dash.Dash(__name__, assets_folder='assets/')
    app.scripts.config.serve_locally = True
    # Handle callback to component with id "fullband-switch"
    app.config['suppress_callback_exceptions'] = True

    # Get all information from filename
    app_name = os.path.basename(filename).replace(
        '.py', '').replace(
            'app_', '')

    app_title = "Dash {}".format(app_name.replace('_', ' ').title())

    # Assign layout
    app.layout = app_page_layout(
        page_layout=layout(),
        app_title=app_title,
        app_name=app_name,
        **header_colors()
    )

    # Register all callbacks
    callbacks(app)

    # return app object
    return app
