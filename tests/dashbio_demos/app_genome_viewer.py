import dash_html_components as html
import dash_bio
import flask
import os

data_directory = 'tests/dashbio_demos/sample_data'
list_of_data = os.listdir(data_directory)
static_image_route = '/static/'


def header_colors():
    return {'bg_color': '#4d0000',
            'font_color': 'white'}


def description():
    return 'An interactive genome viewer with multiple tracks, aimed at investigating genomic ' \
        'variants.'


def layout():
    return html.Div(id='genome-body', children=[
        dash_bio.GenomeViewer(
            id='genome-viewer',
            genomedata='https://www.biodalliance.org/datasets/hg19.2bit',
            trackdata='/static/synth3.normal.17.7500000-7515000.bam',
            trackindex='/static/synth3.normal.17.7500000-7515000.bam.bai',
            variantdata='/static/snv.chr17.vcf',
            genedata="https://www.biodalliance.org/datasets/ensGene.bb",
            contig="chr17",
            start=7512284,
            stop=7512644
        )

    ])


def callbacks(app):
    print("ok")
    @app.server.route('{}<data_path>'.format(static_image_route))
    def serve_image(data_path):
        if data_path not in list_of_data:
            raise Exception('"{}" is excluded from the allowed static files'.format(data_path))
        return flask.send_from_directory(data_directory, data_path)
