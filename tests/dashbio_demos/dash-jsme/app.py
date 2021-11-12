import dash_bio
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output, State
from dash.exceptions import PreventUpdate

from layout_helper import run_standalone_app


def header_colors():
    return {
        'bg_color': '#85002D',
        'font_color': 'white'
    }


def description():
    return 'Molecule editor.'


def layout():
    return html.Div(
        id='jsme-body',
        className='app-body',
        children=[
            html.Div(
                id='jsme-control-tabs',
                className='control-tabs',
                children=[
                    dcc.Tabs(id='jsme-tabs', value='what-is', children=[
                        dcc.Tab(
                            label='About',
                            value='what-is',
                            children=html.Div(className='control-tab', children=[
                                html.H4(className='what-is', children='What is JSME?'),
                                dcc.Markdown('''
                            JSME is a molecule editor that supports drawing and
                            editing of molecules and reactions

                            In the "Options" tab, you can change height,
                            width and specify options for JSME. Available options can
                            be found by
                            [this link](https://wiki.jmol.org/Jmol_JavaScript_Object/JME/Options).

                            See [this page](https://jsme-editor.github.io/help.html)
                            to get more information about JSME and how it use.
                            ''')
                            ])
                        ),

                        dcc.Tab(
                            label='Options',
                            value='update-config',
                            children=html.Div(className='control-tab', children=[
                                html.Div(
                                    className='app-controls-block',
                                    children=[
                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='Options'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify JSME options as a string.'
                                        ),
                                        dcc.Input(
                                            id='jsme-options',
                                            placeholder='newLook, toggle'
                                        ),

                                        html.Br(),
                                        html.Br(),

                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='Size'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify the container height.'
                                        ),
                                        dcc.Slider(
                                            id='jsme-height',
                                            min=200,
                                            max=900,
                                            step=100,
                                            value=600,
                                            marks={i: str(i) for i in range(200, 1000, 100)}
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify the container width.'
                                        ),
                                        dcc.Slider(
                                            id='jsme-width',
                                            min=200,
                                            max=900,
                                            step=100,
                                            value=900,
                                            marks={i: str(i) for i in range(200, 1000, 100)}
                                        ),

                                    ]
                                ),

                                html.Hr(),

                                html.Div(id='jsme-error-message'),
                                html.Button(id='jsme-submit-changes', children='Submit'),
                            ])
                        )
                    ])
                ]),
            html.Div(id='jsme-container', children=[
                dash_bio.Jsme(
                    id='jsme',
                    height='600px',
                    width='900px',
                    options='newLook',
                    smiles='O=C(Nc1cccc(Cl)c1)c3cncc4nnc(c2ccc(OC(F)F)cc2)n34'
                ),
                html.P(id='jsme-smile'),
            ]),
        ]
    )


def callbacks(_app):
    @_app.callback(
        [Output('jsme', 'options'),
         Output('jsme', 'height'),
         Output('jsme', 'width')],
        [Input('jsme-submit-changes', 'n_clicks')],
        [State('jsme-options', 'value'),
         State('jsme-height', 'value'),
         State('jsme-width', 'value')]
    )
    def update_configs(nclicks, options, height, width):
        if nclicks is None or \
                nclicks == 0 or \
                height is None or \
                width is None:
            raise PreventUpdate
        return options, height, width

    @_app.callback(
        [Output('jsme-smile', 'children')],
        [Input('jsme', 'eventSmiles')]
    )
    def update_smiles(smiles):
        return [smiles]


app = run_standalone_app(layout, callbacks, header_colors, __file__)
server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8051)
