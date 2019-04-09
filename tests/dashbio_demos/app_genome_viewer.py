import glob
import os

import dash_bio
import dash_html_components as html
import flask

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app


DATAPATH = os.path.join('.', 'tests', 'dashbio_demos', 'sample_data', 'genome_viewer_')
data_filepaths = glob.glob(DATAPATH + '*')
list_of_data = [os.path.basename(fp) for fp in data_filepaths]
static_image_route = '/static/'


def description():
    return 'An interactive genome viewer with multiple tracks, aimed at investigating genomic ' \
        'variants.'


def header_colors():
    return {'bg_color': '#4d0000',
            'font_color': 'white'}


def layout():
    return html.Div(
        id='gv-page-content',
        children=[
            html.Div(
                id='gv-info-panel-div',
                children=[
                    html.Div(
                        description(),
                        className='gv-text gv-intro',
                    ),
                ]
            ),
            html.Div(
                id='genome-body',
                children=[dash_bio.GenomeViewer(
                    id='genome-viewer',
                    genomedata='https://www.biodalliance.org/datasets/hg19.2bit',
                    trackdata='/static/genome_viewer_synth3.normal.17.7500000-7515000.bam',
                    trackindex='/static/genome_viewer_synth3.normal.17.7500000-7515000.bam.bai',
                    variantdata='/static/genome_viewer_snv.chr17.vcf',
                    genedata="https://www.biodalliance.org/datasets/ensGene.bb",
                    contig="chr17",
                    start=7512284,
                    stop=7512644)
                ]
            )
        ]
    )


def callbacks(app):  # pylint: disable=redefined-outer-name

    @app.server.route('{}<data_path>'.format(static_image_route))
    def serve_image(data_path):
        if data_path not in list_of_data:
            raise Exception('"{}" is excluded from the allowed static files'.format(data_path))
        return flask.send_from_directory(os.path.dirname(DATAPATH), data_path)


# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
