import os
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_bio
import pandas as pd
import dash_table
from dash_table.Format import Format

try:
    from layout_helper import run_standalone_app
except ModuleNotFoundError:
    from .layout_helper import run_standalone_app

text_style = {
    'color': "#506784",
    'font-family': 'Open Sans'
}

_COMPONENT_ID = 'pileup-browser'

def description():
    return 'An interactive in-browser track viewer.'


def header_colors():
    return {
        'bg_color': '#0F5BA7',
        'font_color': 'white',
    }


HG19_REFERENCE =  {"label": 'hg19', "url": 'http://www.biodalliance.org/datasets/hg19.2bit'};

DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'assets/data')

bam_tumor = {
    'url': os.path.join("/assets/data/tumor", "synth4.tumor.1.4930000-4950000.bam"),
    'indexUrl': os.path.join("/assets/data/tumor", "synth4.tumor.1.4930000-4950000.bam.bai")
}

bam_normal = {
    'url': os.path.join("/assets/data/tumor", "synth3.normal.17.7500000-7515000.bam"),
    'indexUrl': os.path.join("/assets/data/tumor", "synth3.normal.17.7500000-7515000.bam.bai")
}

# TODO: need to set viewaspairs=True I think
structural_variants = {
        'range': {'contig': 'chr17', 'start': 4930382, 'stop': 4946898},
        'tracks': [
              {
                'viz': 'scale',
                'label': 'Scale'
              },
              {
                'viz': 'location',
                'label': 'Location'
              },
              {
                'viz':'coverage',
                'source': 'bam',
                'sourceOptions': bam_tumor,
                'label': 'synth4'
              },
              {'viz': 'pileup',
                'label': 'synth4',
                'source': 'bam',
                'sourceOptions': bam_normal
             }
        ]
}



tumor_normal = {
        'range': {'contig': 'chr17', 'start': 7512284, 'stop': 7512700},
        'tracks': [
            {
              'viz': 'scale',
              'label': 'Scale'
            },
            {
              'viz': 'location',
              'label': 'Location'
            },
            {
                'viz': 'variants',
                'label': 'variants',
                'source': 'vcf',
                'sourceOptions': {'url': os.path.join("/assets/data/tumor", "snv.chr17.vcf") }
            },
            {
                'viz': 'genes',
                'label': 'genes',
                'source': 'bigBed',
                'sourceOptions': {'url': 'http://www.biodalliance.org/datasets/ensGene.bb'}
            },
            {
                'viz':'coverage',
                'label': 'normal',
                'source': 'bam',
                'sourceOptions': bam_normal,
            },
            {
                'viz': 'pileup',
                'label': 'normal',
                'source': 'bam',
                'sourceOptions': bam_normal,
            },
            {
                'viz':'coverage',
                'label': 'tumor',
                'source': 'bam',
                'sourceOptions': bam_tumor,
            },
            {
                'viz': 'pileup',
                'label': 'tumor',
                'source': 'bam',
                'sourceOptions': bam_tumor,
            }
        ]
}

DE_dataframe = pd.read_csv(os.path.join(DATAPATH, "rna", "DE_genes.csv"))
rows = []
for i in range(len(DE_dataframe)):
    row = []
    for col in DE_dataframe.columns:
        value = DE_dataframe.iloc[i][col]
        # style = cell_style(value, 0, 100)
        row.append(html.Td(value))# TODO style https://www.programcreek.com/python/example/100617/dash_html_components.Table, style=style))
    rows.append(html.Tr(row))


rna_normal = {
    'url': os.path.join("/assets/data/rna/ENCSR095PIC", "ENCFF185ITT.bam"),
    'indexUrl': os.path.join("/assets/data/rna/ENCSR095PIC", "ENCFF185ITT.bam.bai")
}

rna_KO = {
    'url': os.path.join("/assets/data/rna/ENCSR096VPS", "ENCFF304IDS.bam"),
    'indexUrl': os.path.join("/assets/data/rna/ENCSR096VPS", "ENCFF304IDS.bam.bai")
}
rna_differential = {
        'range': {'contig': 'chr17', 'start': 7512284, 'stop': 7512644},
        'tracks': [
            {
              'viz': 'scale',
              'label': 'Scale'
            },
            {
              'viz': 'location',
              'label': 'Location'
            },
            {
                'viz': 'genes',
                'label': 'genes',
                'source': 'bigBed',
                'sourceOptions': {'url': 'http://www.biodalliance.org/datasets/ensGene.bb'}
            },
            {
                'viz':'coverage',
                'label': 'NFYA wildtype',
                'source': 'bam',
                'sourceOptions': rna_normal,
            },
            {
                'viz':'coverage',
                'label': 'NFYA KO',
                'source': 'bam',
                'sourceOptions': rna_KO,
            },
        ]
}

HOSTED_CASE_DICT = {
    'structural-variants': structural_variants,
    'tumor-normal': tumor_normal,
    'rna-differential': rna_differential,
}

HOSTED_USE_CASES = [
    {'value': 'structural-variants', 'label': 'Structural variants'},
    {'value': 'tumor-normal', 'label': 'Tumor/Normal'},
    {'value': 'rna-differential', 'label': 'Differential RNA-seq'},
]

def layout():
    return html.Div(id='pileup-body', className='app-body', children=[
        html.Div(id='pileup-control-tabs', className='control-tabs', children=[
            dcc.Tabs(
                id='pileup-tabs',
                value='what-is',
                children=[
                    dcc.Tab(
                        label='About',
                        value='what-is',
                        children=html.Div(className='control-tab', children=[
                            html.H4(className='what-is', children='What is pileup.js?'),
                            dcc.Markdown(
                                """
                                The Dash pileup.js component is a high-performance genomics
                                data visualization component developed originally by the Hammer Lab
                                (https://github.com/hammerlab/pileup.js). pileup.js
                                supports visualization of genomic file formats, such as vcfs,
                                bam, and bigbed files. pileup.js additionally allows flexible interaction
                                with non-standard data formats. Users can visualize GA4GH JSON formatted
                                alignments, features and variants. Users can also connect with and visualize
                                data stored in GA4GH formatted data stores.
                                """
                            )
                        ])
                    ),
                    dcc.Tab(
                        label='Data',
                        value='data',
                        children=html.Div(className='control-tab', children=[
                            dash_table.DataTable(
                                id='datatable-interactivity',
                                columns=[
                                    dict(id='a', name='4 decimals', type='numeric', format=Format(precision=4, scheme=Scheme.fixed)), # skip-id-check
                                    dict(id='a', name='4 decimals / trimmed', type='numeric', format=Format(precision=4, scheme=Scheme.fixed, trim=Trim.yes)), # skip-id-check
                                    dict(id='a', name='Custom 4 decimals / trimmed', type='numeric', format=dict(specifier='.4~f')), # skip-id-check

                                    {"name": i, "id": i, "deletable": False, "selectable": True,
                                        "format": dict(specifier='.2~f')} for i in DE_dataframe.columns
                                ],
                                data=DE_dataframe.to_dict('records'),
                                editable=False,
                                filter_action="native",
                                sort_action="native",
                                sort_mode="multi",
                                column_selectable="single",
                                row_selectable="single",
                                row_deletable=False,
                                selected_columns=[],
                                selected_rows=[0],
                                page_action="native",
                                page_current= 0,
                                page_size= 15,
                            ),html.Div(id='datatable-interactivity-container')
                        ])
                    )
                ]
            )
        ]),
        dcc.Loading(className='dashbio-loading', id='pileup-output', children =
        html.Div([
            dash_bio.Pileup(
                id=_COMPONENT_ID,
                range=HOSTED_CASE_DICT['rna-differential']['range'],
                reference = HG19_REFERENCE,
                tracks= HOSTED_CASE_DICT['rna-differential']['tracks'],
            )
        ])),
    ])



def callbacks(_app):
    # # Return the Pileup component with the selected genome and base length
    # @_app.callback(
    #     Output('pileup-output', 'children'),
    #     [Input('case-dropdown', 'value')]
    # )
    # def return_pileup(case):
    #     case = 'rna-differential' # TODO
    #     data = HOSTED_CASE_DICT[case]
    #     return (
    #         html.Div([
    #             dash_bio.Pileup(
    #                 id=_COMPONENT_ID,
    #                 range=data['range'],
    #                 reference = HG19_REFERENCE,
    #                 tracks=data['tracks'],
    #             )
    #         ])
    #     )
    @_app.callback(
    Output(_COMPONENT_ID, 'range'),
    Input('datatable-interactivity', "derived_virtual_data"),
    Input('datatable-interactivity', "derived_virtual_selected_rows"))
    def update_range(rows, derived_virtual_selected_rows):

        data = HOSTED_CASE_DICT['rna-differential'] # TODO rm other options

        if derived_virtual_selected_rows is None or rows is None:
            range = data['range']
        else:
            # if derived_virtual_selected_rows is not None:
            row = rows[derived_virtual_selected_rows[0]]
            range = {'contig': row['chr'],
                    'start': row['start'],
                    'stop': row['end']}

        return range


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
