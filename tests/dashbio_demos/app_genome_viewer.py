import os

import dash_html_components as html
import dash_core_components as dcc
import dash_bio

# running directly with Python
if __name__ == '__main__':
    from utils.app_standalone import run_standalone_app

# running with gunicorn (on servers)
elif 'DASH_PATH_ROUTING' in os.environ:
    from tests.dashbio_demos.utils.app_standalone import run_standalone_app

def header_colors():
    return {}

def description():
    return ''

def layout():
    return html.Div(dash_bio.GenomeViewer(
        trackdata='http://ftp-trace.ncbi.nih.gov/1000genomes/ftp/phase1/data/HG00096/alignment/HG00096.chrom20.ILLUMINA.bwa.GBR.low_coverage.20101123.bam',
        trackindex='http://ftp-trace.ncbi.nih.gov/1000genomes/ftp/phase1/data/HG00096/alignment/HG00096.chrom20.ILLUMINA.bwa.GBR.low_coverage.20101123.bam.bai',
        genomedata='http://ftp-trace.ncbi.nih.gov/1000genomes/ftp/phase1/data/HG00096/alignment/HG00096.chrom20.ILLUMINA.bwa.GBR.low_coverage.20101123.bam.bas'
    ))
def callbacks(app):
    pass

DATAPATH = os.path.join(".", "tests", "dashbio_demos", "sample_data", "genome_viewer_")

# only declare app/server if the file is being run directly
if 'DASH_PATH_ROUTING' in os.environ or __name__ == '__main__':
    app = run_standalone_app(layout, callbacks, header_colors, __file__)
    server = app.server

if __name__ == '__main__':
    app.run_server(debug=True, port=8050)
