import dash_core_components as dcc
import dash_html_components as html
import base64

def app_page_layout(page_layout, app_title="Dash Bio App"):
    return html.Div(
        id='main_page',
        children=[
            dcc.Location(id='url', refresh=False),
            html.Div(
                id='header',
                className='banner',
                children=[
                    html.H2(app_title),
                    html.Img(
                        src='data:image/png;base64,{}'.format(
                            base64.b64encode(
                                open(
                                    './assets/dashbio_logo.png',
                                    'rb').read()
                            ).decode()
                        ),
                        style={
                            'height': '100',
                            'float': 'right',
                        }
                    ),
                ],
                style={
                    'width': '100%',
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                    'background': '#A2B1C6',
                    'color': '#506784',
                    'margin': '0 !important'
                }
            ),
            html.Div(
                id='page-content',
                children=page_layout,
                style={'margin': '10px'}
            )
        ],
    )
