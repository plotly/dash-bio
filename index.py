import dash
import dash_bio
from dash.dependencies import Input, Output
import dash_core_components as dcc
import dash_html_components as html
import logging
import os
from config import DASH_APP_NAME

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

'''
Ensure there is one html.Div holding an empty instance of a dash_bio.component
like the example below. Remove this comment when we've added one dash_bio component!

Ex:
app.layout = html.Div(
    id="index-waitfor",
    children=[
        dcc.Location(id="location"),
        html.Div(id="container"),
        html.Div(style={"display": "none"}, children=dcc.Graph(id="graph")),
        html.Div(style={"display": "none"}, children=dash_bio.Component()),
    ]
)
'''
app.layout = html.Div(
    id="index-waitfor",
    children=[
        dcc.Location(id="location"),
        html.Div(id="container"),
        html.Div(style={"display": "none"}, children=dash_bio.EmptyComponent())
    ]
)


def demoAppImgSrc(name):
    pic_fname = './tests/dash/pic_{}.png'.format(
        name.replace('app_', '').replace('_', '')
    )
    return 'data:image/png;base64,{}'.format(
        base64.b64encode(
            open(pic_fname, 'rb').read()).decode())


def demoAppName(name):
    return 'Dash ' + name.replace('app_', '').replace('_', ' ').title()


@app.callback(Output("container", "children"), [Input("location", "pathname")])
def display_app(pathname):
    if pathname == DASH_APP_NAME or pathname == '/{}/'.format(DASH_APP_NAME) \
       or pathname == '/' or pathname is None:
        return html.Div(id='gallery-apps',
            children=[
                html.Div(
                    className='gallery-app',
                    children=[
                        html.Div(className='gallery-app-left', children=[
                            html.Img(className='gallery-app-img',
                                     src=demoAppImgSrc(name)),
                            dcc.Link(
                                'view app → ',
                                className='gallery-app-link',
                                href="/dash-bio/{}".format(
                                    name.replace("app_", "").replace("_", "-")
                                )
                            )
                        ]),
                        html.Div(className='gallery-app-name', children=[
                            demoAppName(name)
                        ]),
                    ]
                )
                for name in apps
            ]
        )

    app_name = pathname.replace('/{}/'.format(DASH_APP_NAME), '/').replace("/", "").replace("-", "_")
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
