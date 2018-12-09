import dash_core_components as dcc
import dash_html_components as html
import base64


def app_page_layout(page_layout,
                    app_title="Dash Bio App",
                    app_github_url="",
                    light_logo=True,
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
                    ),
                    html.A(
                        id='gh-link',
                        children=[
                            html.Img(
                                src='data:image/png;base64,{}'.format(
                                    base64.b64encode(open(
                                        './assets/GitHub-Mark-{}64px.png'.format(
                                            'Light-' if light_logo else ''),
                                        'rb').read()
                                    ).decode()
                                )
                            )
                        ], 
                        href="http://github.com/plotly/dash-bio/blob/master/tests/dash/app_{}.py".format(app_github_url)
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
