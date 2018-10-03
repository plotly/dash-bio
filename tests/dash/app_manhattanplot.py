# In[]:
# Import required libraries
import pandas as pd
import dash
import dash_html_components as html
import dash_core_components as dcc

from ._manhattan import create_manhattan

df = pd.read_csv("tests/dash/HapMap.csv")  # Load the data

fig = create_manhattan(df)  # Feed the data to a function which creates a Manhattan Plot figure


def layout():
    return html.Div(
        id='main_page',
        children=[
            dcc.Location(id='url', refresh=False),
            html.Div(
                id='header',
                className='banner',
                children=[
                    html.H2('Dash bio: Manhattan plot'),
                    html.Img(
                        src='https://s3-us-west-1.amazonaws.com/plotly'
                            '-tutorials/excel/dash-daq/dash-daq-logo'
                            '-by-plotly-stripe.png',
                        style={
                            'height': '100',
                            'float': 'right',
                        }
                    )
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
                                "Dash Manhattan",
                                style={
                                    'color': "#506784",
                                    'font-family': 'Dosis'
                                }
                            ),
                            html.Div(
                                "Visualize genome wide association studies  ("
                                "GWAS) with efficient manhattan plots. Using "
                                "WebGL  under the hood, interactively explore  "
                                "hundred of thousands of points at once or  "
                                "individually hover over them.",
                                style={
                                    'width': '400px',
                                    'color': "#506784",
                                    'font-family': 'Ubuntu'
                                }
                            )
                        ]
                    ),
                    html.Div(
                        children=[
                            dcc.Graph(
                                figure=fig,
                                id='graph'
                            ),
                        ],
                        style={
                            'width': '100%',
                        }
                    )
                ],
                style={
                    'width': '100%',
                    'display': 'flex',
                    'flexDirection': 'column',
                    'alignItems': 'center',
                }
            )
        ]
    )
