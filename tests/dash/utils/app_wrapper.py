import dash_core_components as dcc
import dash_html_components as html
import base64


def app_page_layout(page_layout,
                    app_title="Dash Bio App",
                    bg_color="#2a3f5f",
                    font_color="#F3F6FA"):
    return html.Div(
        id='main_page',
        children=[
            dcc.Location(id='url', refresh=False),
            html.Div(
                id='header',
                className='banner',
                children=[
                    dcc.Link(
                        children=[
                            html.Img(
                                src='data:image/png;base64,{}'.format(
                                    base64.b64encode(
                                        open(
                                            './assets/dashbio_logo_transparent.png',
                                            'rb').read()
                                    ).decode()
                                ),
                                style={
                                    'height': '70',
                                    'float': 'left',
                                    'padding': '10px',
                                    'padding-bottom': '0px'
                                }
                            )
                        ],
                        href="/dash-bio"
                    ),
                    html.H2(
                        app_title,
                        style={
                            'font-size': '34pt',
                        }
                    )
                ],
                style={
                    'width': '100%',
                    'height': '75px !important',
                    'background': bg_color,
                    'color': font_color,
                    'font-family': 'Dosis',
                    'position': 'absolute',
                    'top': '0px'
                }
            ),
            html.Div(
                id='page-content',
                children=page_layout,
                style={
                    'margin': '10px',
                    'margin-top': '100px',
                }
            )
        ],
    )
