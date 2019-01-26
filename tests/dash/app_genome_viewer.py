from dash.dependencies import Input, Output, State
import dash_core_components as dcc
import dash_html_components as html
import dash_bio


def header_colors():
      return {
          'bg_color': '#4d0000',
          'font_color': 'white'
      }
  
  
def description():
      return 'A genome viewer bla bla'


def layout():
    return html.Div(id='genome-body', children=[
            html.H3('Hello'),
            dash_bio.GenomeViewer(
            id='genome-viewer',
	    genomedata="http://www.biodalliance.org/datasets/hg19.2bit",
            trackdata='tests/dash/sample_data/synth3.normal.17.7500000-7515000.bam',
            trackindex='tests/dash/sample_data/synth3.normal.17.7500000-7515000.bam.bai',
            variantdata='tests/dash/sample_data/snv.chr17.vcf',
            genedata="http://www.biodalliance.org/datasets/ensGene.bb",
            contig="chr17",
            start=7512284,
            stop=7512644,
                )

    ])


def callbacks(app):
    print("ok")
