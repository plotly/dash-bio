import os
import dash_html_components as html
import dash_core_components as dcc
from dash.dependencies import Input, Output
import dash_bio

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

DATAPATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')

bam_tumor = {
    'url': os.path.join(DATAPATH, "tumor", "synth4.tumor.1.4930000-4950000.bam"),
    'indexUrl': os.path.join(DATAPATH, "tumor", "synth4.tumor.1.4930000-4950000.bam.bai")
}

bam_normal = {
    'url': os.path.join(DATAPATH,  "tumor", "synth3.normal.17.7500000-7515000.bam"),
    'indexUrl': os.path.join(DATAPATH, "tumor", "synth3.normal.17.7500000-7515000.bam.bai")
}

# TODO: need to set viewaspairs=True I think
structural_variants = {
        'range': {'contig': 'chr1', 'start': 4930382, 'stop': 4946898},
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
                'viz': 'variants',
                'label': 'variants',
                'source': 'vcf',
                'sourceOptions': {'url': os.path.join(DATAPATH, "tumor", "snv.chr17.vcf") }
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

# TODO
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
            }
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
                            html.Div(className='app-controls-block', children=[
                                html.Div(
                                    className='fullwidth-app-controls-name',
                                    children="Select a use case"
                                ),
                                dcc.Dropdown(
                                    id='case-dropdown',
                                    options=HOSTED_USE_CASES,
                                    value='structural-variants',
                                ),
                                html.Div(
                                    className='app-controls-desc',
                                    children='Select a use case to display the remotely '
                                             'hosted '
                                             'examples.'
                                ),
                            ]),
                            html.Hr(
                                className='pileup-separator'
                            ),
                        ])
                    )
                ]
            )
        ]),
        dcc.Loading(className='dashbio-loading', id='pileup-output'),
    ])


def callbacks(_app):
    # Return the Pileup component with the selected genome and base length
    @_app.callback(
        Output('pileup-output', 'children'),
        [Input('case-dropdown', 'value')]
    )
    def return_pileup(case):
        data = HOSTED_CASE_DICT[case]
        return (
            html.Div([
                dash_bio.Pileup(
                    id=_COMPONENT_ID,
                    range=data['range'],
                    reference = HG19_REFERENCE,
                    tracks=data['tracks'],
                )
            ])
        )


# only declare app/server if the file is being run directly
if 'DEMO_STANDALONE' not in os.environ:
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
