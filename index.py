import base64
import importlib
import logging
import os

import dash
import dash_core_components as dcc
import dash_html_components as html

from dash.dependencies import Input, Output

from config import DASH_APP_NAME
from utils.app_wrapper import app_page_layout


os.environ['DEMO_STANDALONE'] = 'false'

logging.getLogger("werkzeug").setLevel(logging.ERROR)

app = dash.Dash(__name__)
app.config["suppress_callback_exceptions"] = True

server = app.server

# sort apps alphabetically
appList = os.listdir(os.path.join("tests", "dashbio_demos"))
appList.sort()

apps = {}
for filename in appList:
    if not filename.startswith("dash-"):
        continue

    path = ".".join(["tests", "dashbio_demos", filename, "app"])
    apps[filename] = importlib.import_module(path)


for key in apps:
    apps[key].callbacks(app)

app.layout = html.Div(
    id="index-waitfor",
    children=[
        dcc.Location(id="location"),
        html.Div(id='gallery-header', children=[
            html.Div(id='gallery-title', children=[
                'Dash Bio'
            ]),
            html.Div(id='gallery-subtitle', children=[
                'A suite of bioinformatics components \
                compatible with Plotly\'s Dash.'
            ]),
        ]),
        html.Div(id="container")
    ]
)


def get_demo_app_img(name):
    """Get path to image corresponding to given app."""
    pic_fname = './tests/dashbio_demos/{}/assets/demo-image.png'.format(
        name
    )
    return pic_fname


def demo_app_name(name):
    """ Returns a capitalized title for the app """
    return name.replace('dash-', '').replace('-', ' ').title()


def demo_app_desc(name):
    """ Returns the content of the description specified in the app. """
    desc = ''
    try:
        desc = apps[name].description()
    except AttributeError:
        pass
    return desc


def demo_app_header_colors(name):
    """ Returns the colors of the header specified in the app, if any. """
    try:
        return apps[name].header_colors()
    except AttributeError:
        return {}


def demo_app_link_id(name):
    """Returns the value of the id of the dcc.Link related to the demo app. """
    return 'app-link-id-{}'.format(name.replace("_", "-"))


@app.callback(Output("container", "children"), [Input("location", "pathname")])
def display_app(pathname):
    if pathname == '/{}'.format(DASH_APP_NAME) \
       or pathname == '/{}/'.format(DASH_APP_NAME) \
       or pathname == '/' or pathname is None:
        return html.Div(
            id='gallery-apps',
            children=[
                html.Div(className='gallery-app', children=[
                    dcc.Link(
                        children=[
                            html.Img(className='gallery-app-img',
                                     src='data:image/png;base64,{}'.format(
                                         base64.b64encode(open(get_demo_app_img(name),
                                                               'rb').read()).decode()
                                     )),  # base-64 encoded image
                            html.Div(className='gallery-app-info', children=[
                                html.Div(className='gallery-app-name', children=[
                                    demo_app_name(name)
                                ]),
                                html.Div(className='gallery-app-desc', children=[
                                    demo_app_desc(name)
                                ])
                            ])
                        ],
                        id=demo_app_link_id(name),
                        href="/{}/{}".format(
                            DASH_APP_NAME,
                            name.replace("dash-", "").replace("_", "-")
                        )
                    )
                ]) for name in apps
            ])

    app_name = \
        pathname.replace(
            '/{}/'.format(DASH_APP_NAME), '/').replace(
                "/", "")
    app_name = 'dash-{}'.format(app_name)

    if app_name in apps:
        return html.Div(id="waitfor",
                        children=app_page_layout(
                            apps[app_name].layout(),
                            app_title=demo_app_name(app_name),
                            app_name=app_name,
                            **demo_app_header_colors(app_name)
                        ))
    else:
        return """
            App not found.
            You supplied "{}" and these are the apps that exist:
            {}
        """.format(
            app_name, list(apps.keys())
        )


@app.callback(
    Output('gallery-header', 'children'),
    [Input('location', 'pathname')]
)
def hide_header(pathname):
    if pathname != '/{}'.format(DASH_APP_NAME) \
       and pathname != '/{}/'.format(DASH_APP_NAME) \
       and pathname != '/' and pathname is not None:
        return []
    return [
        html.Div(id='gallery-title', children=[
            'Dash Bio'
        ]),
        html.Div(id='gallery-subtitle', children=[
            'A suite of bioinformatics components \
            compatible with Plotly\'s Dash.'
        ]),
    ]


app.css.config.serve_locally = True
app.scripts.config.serve_locally = True

if __name__ == "__main__":
    app.run_server(debug=False)
