import dash_core_components as dcc
import dash_html_components as html
import base64


def app_page_layout(page_layout,
                    app_title="Dash Bio App",
                    bg_color="#506784",
                    font_color="#F3F6FA"):
    return html.Div(
        id='main_page',
        children=[
            dcc.Location(id='url', refresh=False),
            html.Div(
                id='app-page-header',
                children=[
                    dcc.Link(
                        html.Img(
                            src='data:image/png;base64,{}'.format(
                                base64.b64encode(open(
                                    './assets/dashbio_logo_transparent.png',
                                    'rb').read()
                                ).decode()
                            )
                        ),
                        href="/dash-bio"
                    ),
                    html.H2(
                        app_title
                    )
                ],
                style={
                    'background': bg_color,
                    'color': font_color,
                }
            ),
            html.Div(
                id='app-page-content',
                children=page_layout
            )
        ],
    )
