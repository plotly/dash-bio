import dash
import dash_bio
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
import logging
import os
import dash_bio



logging.getLogger("werkzeug").setLevel(logging.ERROR)

app = dash.Dash(__name__)
app.config["suppress_callback_exceptions"] = True

server = app.server

apps = {
    filename.replace(".py", "").replace("app_", ""): getattr(
        getattr(
            __import__(".".join(["tests", "dash", filename.replace(".py", "")])), "dash"
        ),
        filename.replace(".py", ""),
    )
    for filename in os.listdir(os.path.join("tests", "dash"))
    if filename.startswith("app_") and filename.endswith(".py")
}

for key in apps:
    apps[key].callbacks(app)

app.layout = html.Div(
    id="index-waitfor",
    children=[
        dcc.Location(id="location"),
        html.Div(id="container"),
        html.Div(style={"display": "none"}, children=dash_bio.EmptyComponent())
    ]
)


@app.callback(Output("container", "children"), [Input("location", "pathname")])
def display_app(pathname):
    if pathname == "/dash-bio" or pathname == '/dash-bio/' \
       or pathname == '/' or pathname is None:
        return html.Div(
            className="container",
            children=[
                html.H1("Dash Bio Review App"),
                html.Ol(
                    [
                        html.Li(
                            dcc.Link(
                                name.replace("app_", "").replace("_", " "),
                                href="/dash-bio/{}".format(
                                    name.replace("app_", "").replace("_", "-")
                                ),
                                className="review-apps"
                            )
                        )
                        for name in apps
                    ]
                ),
            ],
        )

    app_name = pathname.replace('/dash-bio/', '/').replace("/", "").replace("-", "_")
    if app_name in apps:
        return html.Div(id="waitfor", children=apps[app_name].layout())
    else:
        return """
            App not found.
            You supplied "{}" and these are the apps that exist:
            {}
        """.format(
            app_name, list(apps.keys())
        )


app.css.config.serve_locally = True
app.scripts.config.serve_locally = True

if __name__ == "__main__":
    app.run_server(debug=True)
