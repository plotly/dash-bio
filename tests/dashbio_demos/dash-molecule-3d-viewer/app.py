import os
import base64
import json
import tempfile

from shutil import copy2
from textwrap import dedent as s

from dash.dependencies import Input, Output, State
import dash_html_components as html
import dash_core_components as dcc
import dash_daq as daq
from dash_bio_utils import pdb_parser as parser, styles_parser as sparser
import dash_bio

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app


DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')


data_info = {
    os.path.join(DATAPATH, '4uft.pdb'): {
        'name': 'Measles Nucleocapsid',
        'description': dcc.Markdown(s(r'''
        The measles nucleoprotein forms a large helical complex with
        RNA... It is thought to chaperone the process of replication and
        transcription by providing a site ready for binding of the
        polymerase/phosphoprotein complex while a new RNA chain is being
        built.

        The structure includes the stable core domain of the
        nucleoprotein and a strand of RNA, but the flexible tail of
        nucleoprotein was removed in this study.
        ''')),
        'link': 'http://pdb101.rcsb.org/motm/231'
    },

    os.path.join(DATAPATH, '1yi5.pdb'): {
        'name': 'a-cobratoxin-AChBP complex',
        'description': dcc.Markdown(s(r'''

        The crystal structure of the snake long alpha-neurotoxin,
        alpha-cobratoxin, bound to the pentameric
        acetylcholine-binding protein (AChBP) from Lymnaea
        stagnalis...

        The structure unambiguously reveals the positions and
        orientations of all five three-fingered toxin molecules
        inserted at the AChBP subunit interfaces and the
        conformational changes associated with toxin binding.
        ''')),
        'link': 'https://www.rcsb.org/structure/1yi5'
    },

    os.path.join(DATAPATH, '1su4.pdb'): {
        'name': 'Calcium ATPase',
        'description': dcc.Markdown(s(r'''
        The calcium pump allows muscles to relax after... \[muscle\]
        contraction. The pump is found in the membrane of the
        sarcoplasmic reticulum. In some cases, it is so plentiful that
        it may make up 90% of the protein there. Powered by ATP, it
        pumps calcium ions back into the sarcoplasmic reticulum,
        reducing the calcium level around the actin and myosin
        filaments and allowing the muscle to relax.

        \[The structure\] has a big domain poking out on the outside
        of the sarcoplasmic reticulum, and a region that is embedded
        in the membrane, forming a tunnel to the other side.
        ''')),
        'link': 'http://pdb101.rcsb.org/motm/51'
    },

    os.path.join(DATAPATH, '1bna.pdb'): {
        'name': 'DNA',
        'description': dcc.Markdown(s(r'''
        DNA is read-only memory, archived safely inside cells. Genetic
        information is stored in an orderly manner in strands of
        DNA. DNA is composed of a long linear strand of millions of
        nucleotides, and is most often found paired with a partner
        strand. These strands wrap around each other in the familiar
        double helix...
        ''')),
        'link': 'http://pdb101.rcsb.org/motm/23'
    },

    os.path.join(DATAPATH, '1msw.pdb'): {
        'name': 'T7 RNA Polymerase',
        'description': dcc.Markdown(s(r'''
        RNA polymerase is a huge factory with many moving parts. \[The
        constituent proteins\] form a machine that surrounds DNA
        strands, unwinds them, and builds an RNA strand based on the
        information held inside the DNA. Once the enzyme gets started,
        RNA polymerase marches confidently along the DNA copying RNA
        strands thousands of nucleotides long.

        ...

        This structure includes a very small RNA polymerase that is
        made by the bacteriophage T7... \[a\] small transcription
        bubble, composed of two DNA strands and an RNA strand, is
        bound in the active site.
        ''')),
        'link': 'http://pdb101.rcsb.org/motm/40'}

}


def header_colors():
    return {
        'bg_color': '#e7625f',
        'font_color': 'white'
    }


def description():
    return 'Molecule visualization in 3D - perfect for viewing ' \
           'biomolecules such as proteins, DNA and RNA. Includes ' \
           'stick, cartoon, and sphere representations.'


def layout():

    return html.Div(
        id='mol3d-body',
        className='app-body',
        children=[
            html.Div(
                id='mol3d-control-tabs',
                className='control-tabs',
                children=[
                    dcc.Tabs(id='mol3d-tabs', value='what-is', children=[
                        dcc.Tab(
                            label='About',
                            value='what-is',
                            children=html.Div(className='control-tab', children=[
                                html.H4(className='what-is', children='What is Molecule3D?'),
                                html.P('Molecule3D is a visualizer that allows you '
                                       'to view biomolecules in multiple representations: '
                                       'sticks, spheres, and cartoons.'),
                                html.P('You can select a preloaded structure, or upload your own, '
                                       'in the "Data" tab. A sample structure is also '
                                       'available to download.'),
                                html.P('In the "View" tab, you can change the style and '
                                       'coloring of the various components of your molecule.')
                            ])
                        ),

                        dcc.Tab(
                            label='Data',
                            value='upload-download',
                            children=html.Div(className='control-tab', children=[
                                html.Div(
                                    title='download a sample data file to view',
                                    children=[
                                    ]
                                ),
                                html.Div(
                                    title='Select molecule to view',
                                    className="app-controls-block",
                                    children=[
                                        html.Div(className='app-controls-name',
                                                 children='Select structure'),

                                        dcc.Dropdown(
                                            id='dropdown-demostr',
                                            options=[
                                                {
                                                    'label': 'Measles nucleocapsid',
                                                    'value': os.path.join(DATAPATH, '4uft.pdb')
                                                },
                                                {
                                                    'label':  'a-cobratoxin-AChBP complex',
                                                    'value': os.path.join(DATAPATH, '1yi5.pdb')
                                                },
                                                {
                                                    'label': 'Calcium ATPase',
                                                    'value': os.path.join(DATAPATH, '1su4.pdb')
                                                },
                                                {
                                                    'label': 'DNA',
                                                    'value': os.path.join(DATAPATH, '1bna.pdb')
                                                },
                                                {
                                                    'label': 'T7 RNA polymerase',
                                                    'value': os.path.join(DATAPATH, '1msw.pdb')
                                                },
                                            ],
                                            value=os.path.join(DATAPATH, '1bna.pdb')
                                        ),
                                    ],
                                ),
                                html.Div(
                                    title='Upload biomolecule to view here',
                                    className='app-controls-block',
                                    id='mol3d-upload-container', children=[
                                        dcc.Upload(
                                            id='mol3d-upload-data',
                                            className='control-upload',
                                            children=html.Div([
                                                'Drag and drop or click to upload a file.',
                                            ]),
                                            # Allow multiple files to be uploaded
                                            multiple=True
                                        ),
                                        html.A(
                                            html.Button(
                                                "Download sample structure",
                                                id="mol3d-download-sample-data",
                                                className='control-download'
                                            ),
                                            href=os.path.join('assets', 'sample_data', '2mru.pdb'),
                                            download='2mru.pdb'
                                        )
                                    ]
                                ),

                                html.Div(id='mol3d-data-info')
                            ])
                        ),

                        dcc.Tab(
                            label='View',
                            value='view-options',
                            children=html.Div(className='control-tab', children=[
                                # Textarea container to display the selected atoms
                                html.Div(
                                    title='view information about selected atoms '
                                    'of biomolecule',
                                    className="app-controls-block",
                                    id="mol3d-selection-display",
                                    children=[
                                        html.P(
                                            "Selection",
                                            style={
                                                'font-weight': 'bold',
                                                'margin-bottom': '10px'
                                            }
                                        ),
                                        html.Div(id='mol3d-selection-output'),
                                    ]
                                ),
                                # Dropdown to select chain representation
                                # (sticks, cartoon, sphere)
                                html.Div(
                                    title='select style for molecule representation',
                                    className="app-controls-block",
                                    id='mol3d-style',
                                    children=[
                                        html.P(
                                            'Style',
                                            style={
                                                'font-weight': 'bold',
                                                'margin-bottom': '10px'
                                            }
                                        ),
                                        dcc.Dropdown(
                                            id='dropdown-styles',
                                            options=[
                                                {'label': 'Sticks', 'value': 'stick'},
                                                {'label': 'Cartoon', 'value': 'cartoon'},
                                                {'label': 'Spheres', 'value': 'sphere'},
                                            ],
                                            value='cartoon'
                                        ),
                                    ],
                                ),

                                # Dropdown to select color of representation
                                html.Div(
                                    title='select color scheme for viewing biomolecule',
                                    className="app-controls-block",
                                    id='mol3d-style-color',
                                    children=[
                                        html.P(
                                            'Color',
                                            style={
                                                'font-weight': 'bold',
                                                'margin-bottom': '10px'
                                            }
                                        ),
                                        dcc.Dropdown(
                                            id='dropdown-style-color',
                                            options=[
                                                {'label': 'Atom',
                                                 'value': 'atom'},
                                                {'label': 'Residue identity',
                                                 'value': 'residue'},
                                                {'label': 'Residue type',
                                                 'value': 'residue_type'},
                                                {'label': 'Chain',
                                                 'value': 'chain'},
                                            ],
                                            value='residue'
                                        ),
                                        dcc.Dropdown(
                                            id='mol3d-coloring-key',
                                            options=[]
                                        ),

                                    ],
                                ),
                                html.Div(
                                    title='Customize molecule coloring.',
                                    className="app-controls-block",
                                    children=[
                                        html.P(
                                            id='mol3d-customize-coloring',
                                            style={
                                                'font-weight': 'bold',
                                                'margin-bottom': '10px'
                                            }
                                        ),
                                        daq.ColorPicker(
                                            id='mol3d-coloring-value',
                                            size=315
                                        ),
                                    ]
                                ),
                            ]),
                        ),

                    ]),
                ]),

            dcc.Loading(html.Div(
                id='mol3d-biomolecule-viewer',
                children=[]
            )),

            dcc.Store(
                id='mol3d-color-storage',
                data={}
            )
        ])


# Function to create the modelData and style files for molecule visualization
def files_data_style(content):
    fdat = tempfile.NamedTemporaryFile(suffix=".js", delete=False, mode='w+')
    fdat.write(content)
    dataFile = fdat.name
    fdat.close()
    return dataFile


def callbacks(_app):

    @_app.callback(
        Output('mol3d-data-info', 'children'),
        [Input('dropdown-demostr', 'value')]
    )
    def show_data(molecule_selected):
        if molecule_selected in data_info.keys():
            mol = data_info[molecule_selected]
            return [
                html.H4(mol['name']),
                mol['description'],
                html.A(
                    '(source)',
                    href=mol['link']
                )
            ]
        return ''

    @_app.callback(
        Output('dropdown-demostr', 'value'),
        [Input('mol3d-upload-data', 'contents')],
        [State('dropdown-demostr', 'value')]
    )
    def reset_dropdown(upload_content, dem):
        if upload_content is not None:
            return None
        return dem

    # Callback for updating dropdown options
    @_app.callback(
        Output('mol3d-coloring-key', 'options'),
        [Input('dropdown-style-color', 'value')]
    )
    def update_color_options(mol_style):
        color_dict_keys = {
            'atom': list(sparser.ATOM_COLOR_DICT.keys()),
            'residue': list(sparser.RESIDUE_COLOR_DICT.keys()),
            'residue_type': list(sparser.RESIDUE_TYPE_COLOR_DICT.keys()),
            'chain': list(sparser.CHAIN_COLOR_DICT.keys())
        }

        options = [{'label': k.upper(), 'value': k}
                   for k in color_dict_keys[mol_style]]

        return options

    @_app.callback(
        Output('mol3d-color-storage', 'data'),
        [Input('mol3d-coloring-value', 'value'),
         Input('dropdown-style-color', 'value')],
        state=[State('mol3d-coloring-key', 'value'),
               State('mol3d-color-storage', 'data')]
    )
    def update_color_dict(color_value, color_style, color_key, current):

        if color_style is None:
            return {}

        if color_key is None or color_value is None:
            return current

        # clear the dict if the color style has changed
        if '{}_colors'.format(color_style) not in current.keys():
            current = {'{}_colors'.format(color_style): {}}

        # finally update the dict

        current['{}_colors'.format(color_style)][color_key] = color_value['hex']

        return current

    # Callback for molecule visualization based on uploaded PDB file
    @_app.callback(
        Output('mol3d-biomolecule-viewer', 'children'),
        [Input('mol3d-upload-data', 'contents'),
         Input('dropdown-demostr', 'value'),
         Input('dropdown-styles', 'value'),
         Input('dropdown-style-color', 'value'),
         Input('mol3d-color-storage', 'modified_timestamp')],
        [State('mol3d-color-storage', 'data')],

    )
    def use_upload(
            contents,
            demostr,
            mol_style,
            color_style,
            mt,
            custom_colors
    ):

        if demostr is not None:
            copy2(demostr, './str.pdb')
            fname = './str.pdb'
        elif contents is not None and demostr is None:
            try:
                content_type, content_string = str(contents).split(',')
                decoded_contents = base64.b64decode(
                    content_string).decode("UTF-8")
                f = tempfile.NamedTemporaryFile(
                    suffix=".pdb", delete=False, mode='w+')
                f.write(decoded_contents)
                fname = f.name
                f.close()
            except AttributeError:
                pass
        else:
            return 'demostr and contents are none'

        # Create the model data from the decoded contents
        modata = parser.create_data(fname)

        fmodel = files_data_style(modata)
        with open(fmodel) as fm:
            mdata = json.load(fm)

        # Create the cartoon style from the decoded contents
        datstyle = sparser.create_style(fname, mol_style, color_style, **custom_colors)

        fstyle = files_data_style(datstyle)
        with open(fstyle) as sf:
            data_style = json.load(sf)

        # Delete all the temporary files that were created
        for x in [fname, fmodel, fstyle]:
            if os.path.isfile(x):
                os.unlink(x)
            else:
                pass

        # Return the new molecule visualization container
        return dash_bio.Molecule3dViewer(
            id='mol-3d',
            selectionType='atom',
            modelData=mdata,
            styles=data_style,
            selectedAtomIds=[],
            backgroundOpacity='0',
            atomLabelsShown=False,
        )
    # Callback to print details of each selected atom of the biomolecule

    @_app.callback(
        Output("mol3d-selection-output", "children"),
        [Input("mol-3d", "selectedAtomIds"),
         Input("mol-3d", "modelData")]
    )
    def selout(selected_atom_ids, model_data):
        residue_summary = []
        for atom_id in selected_atom_ids:
            res_info = model_data['atoms'][atom_id]
            residues = {
                "residue": res_info['residue_name'],
                "atom": res_info['name'],
                "chain": res_info['chain'],
                "xyz": res_info['positions']
            }
            residue_summary += [html.P('{}: {}'.format(
                key, str(residues[key]))) for key in residues]
            residue_summary.append(html.Br())
        if len(residue_summary) == 0:
            residue_summary.append("No atoms have been selected. Click \
            on an atom to select it.")

        return html.Div(residue_summary)


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
