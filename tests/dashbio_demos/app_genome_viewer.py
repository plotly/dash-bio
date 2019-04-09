import os

import dash_bio
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


DATAPATH = os.path.join('.', 'tests', 'dashbio_demos', 'sample_data', 'genome_viewer_')
DATASETS = {
    'genedata': 'https://www.biodalliance.org/datasets/ensGene.bb',
    'trackdata': DATAPATH + 'synth3.normal.17.7500000-7515000.bam',
    'trackindex': DATAPATH + 'synth3.normal.17.7500000-7515000.bam.bai',
    'variantdata': DATAPATH + 'snv.chr17.vcf'
}


def description():
    return 'An interactive genome viewer with multiple tracks, aimed at investigating genomic ' \
        'variants.'


def header_colors():
    return {'bg_color': '#4d0000',
            'font_color': 'white'}


def layout():
    return html.Div(id='genome-body', children=[

        dash_bio.GenomeViewer(
            id='genome-viewer',
            genomedata='https://www.biodalliance.org/datasets/hg19.2bit',
            trackdata=DATASETS['trackdata'],
            trackindex=DATASETS['trackindex'],
            variantdata=DATASETS['variantdata'],
            genedata=DATASETS['genedata'],
            contig='chr17',
            start=7512284,
            stop=7512644
        ),

        html.Div(id='genome-control-tabs', children=[
            dcc.Tabs(
                id='genome-tabs',
                children=[
                    dcc.Tab(
                        label='About',
                        value='what-is',
                        children=html.Div(className='genome-tab', children=[
                            html.H4(
                                "What is GenomeViewer?"
                            ),
                            html.P(description()
                            )
                        ])
                    )
                ]
            )
        ])
    ])



def callbacks(app):  # pylint: disable=redefined-outer-name

    # Render main chart
    @app.callback(
        Output('genome-viewer', 'trackdata'),
        [Input('track-content', 'value')],
    )
    def update_chart(variantdata):
        # TODO replace select with a dcc.Dropdown so
        # we can give it an id and pass it to Input()
        return DATASETS['variantdata']


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
