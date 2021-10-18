import dash_bio
from dash import dcc
from dash import html
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

                                In the "Update config" tab, you can change height,
                                width and specify options for JSME. Available options can
                                be found by 
                                [this link](https://wiki.jmol.org/index.php/Jmol_JavaScript_Object/JME/Options).

                                See [this page](https://jsme-editor.github.io/help.html) to get more information about
                                JSME and how it use.
                                ''')
                            ])
                        ),

                        dcc.Tab(
                            label='Update config',
                            value='update-config',
                            children=html.Div(className='control-tab', children=[
                                html.Div(
                                    className='app-controls-block',
                                    children=[
                                        html.Div(className='fullwidth-app-controls-name',
                                                 children='Options'),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify Jsme options as a string.'
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
                                        dcc.Input(
                                            id='jsme-height',
                                            placeholder='400px'
                                        ),
                                        html.Div(
                                            className='app-controls-desc',
                                            children='Specify the container width.'
                                        ),
                                        dcc.Input(
                                            id='jsme-width',
                                            placeholder='500px'
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
                    height='500px',
                    width='500px',
                    smiles='O=C(Nc1cccc(Cl)c1)c3cncc4nnc(c2ccc(OC(F)F)cc2)n34'
                ),
                html.P(id='jsme-smile'),
            ]),
        ]
    )


def callbacks(_app):
    @_app.callback(
        [Output('jsme-error-message', 'children')],
        [Input('jsme-submit-changes', 'n_clicks')],
        [State('jsme-height', 'value'),
         State('jsme-width', 'value')]
    )
    def show_error(nclicks, height, width):
        if nclicks is None or nclicks == 0:
            raise PreventUpdate

        empty_fields = []

        if height is None or len(height) == 0:
            empty_fields.append('height')
        if width is None or len(width) == 0:
            empty_fields.append('width')

        if len(empty_fields) == 0:
            return ['']
        else:
            return [f"{' and '.join(empty_fields).capitalize()}  are required"]

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
        if nclicks is None or nclicks == 0 or height is None or len(height) == 0 or width is None or len(width) == 0:
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
