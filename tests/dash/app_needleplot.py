# In[]:
# Import required libraries
import numpy as np
import dash_html_components as html
import dash_core_components as dcc

import dash_bio

vertical_style = {
    'display': 'flex',
    'flexDirection': 'column',
    'alignItems': 'center',
    'justifyContent': 'space-between',
}

text_style = {
    'color': "#506784",
    'font-family': 'Ubuntu'
}

x = np.array(["1", "236", "6", "323", "9", "20"])
y = np.array(["3", "1", "6", "3", "1", "4"])
g = np.array(['a', 'b', 'a', 'b', 'a', 'a'])
domain=np.array([
    {
        "name": "P53_TAD",
        "coord": "6-29"
    },
    {
        "name": "P53",
        "coord": "95-288"
    },
    {
        "name": "P53_tetramer",
        "coord": "318-358"
    }
])


def layout():
    return html.Div(
        id='main_page',
        children=[
            dcc.Location(id='url', refresh=False),
            html.Div(
                id='header',
                className='banner',
                children=[
                    html.H2('Dash bio: Needle plot'),
                    html.Img(
                        src='assets/dashbio_logo.svg',
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
                    'color': '#506784'
                }
            ),
            html.Div(
                id='page-content',
                children=[
                    html.Div(
                        id='text',
                        children=[
                            html.H2(
                                "Dash Needle Plot",
                                style={
                                    'color': "#506784",
                                    'font-family': 'Dosis'
                                }
                            ),
                            html.Div(
                                "A Dash component for mutation needle plots "
                                "(AKA stem plots or lollipop charts ).",
                                style=text_style
                            ),
                        ],
                        style={
                            'width': '90%',
                            'margin': "15px"
                        }
                    ),
                    html.Div(
                        children=dash_bio.NeedlePlot(
                            id='needle-plot',
                            x=x,
                            y=y,
                            groups=g,
                            domains=domain
                        )
                    )
                ],
                style={
                    'width': '100%',
                    'display': 'flex',
                    'flexDirection': 'row',
                    'alignItems': 'center',
                    'justifyContent': 'space-between',
                }
            )
        ]
    )

def callbacks(app):
    return None