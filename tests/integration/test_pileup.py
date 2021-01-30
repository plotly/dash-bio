import requests
import dash
import dash_bio
import dash_html_components as html
# import bdgenomics.mango.pileup as pileup

import time
from common_features import simple_app_layout

_COMPONENT_ID = 'mypileup'

def test_dbpileup001_reference(dash_duo):
    app = dash.Dash(__name__)

    # try:
    #     requests.get('https://www.google.com/').status_code
    #     data_path = 'https://s3.amazonaws.com/igv.org.genomes/'
    # except requests.exceptions.ConnectionError:
    #     print("Running test with local datasets")
    #     data_path = app.get_asset_url('')

    # TODO: how would track conversion work?
    tracks=[{
    'viz': 'pileup.viz.genome()',
    'isReference': 'true',
    'data': 'http://www.biodalliance.org/datasets/hg19.2bit',
    'name': 'Reference'
      }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.Pileup(
            id=_COMPONENT_ID,
            range={"contig": 'chr17', "start": 7512284, "stop": 7512644},
            tracks=tracks
        ),
    ))

    dash_duo.start_server(app)

    # Check that the genome loaded
    # dash_duo.wait_for_text_to_equal('.pileup-current-genome', 'ASM985889v3')

    # Check that track(s) loaded

    tracks = dash_duo.find_elements('.pileup-root')
    time.sleep(5000000)

    print(tracks)
    assert len(tracks) == 1
    assert tracks[0].text == 'Annotations'


# def test_dbigv002_ASM985889v3_tracks(dash_duo):
#     app = dash.Dash(__name__)
#
#     try:
#         requests.get('https://www.google.com/').status_code
#         data_path = 'https://s3.amazonaws.com/igv.org.genomes/'
#     except requests.exceptions.ConnectionError:
#         print("Running test with local datasets")
#         data_path = app.get_asset_url('')
#
#     app.layout = html.Div(simple_app_layout(
#         dash_bio.Igv(
#             id=_COMPONENT_ID,
#             reference={
#                 "id": "ASM985889v3",
#                 "name": "Sars-CoV-2 (ASM985889v3)",
#                 "fastaURL": data_path + "covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna",
#                 "indexURL": data_path +
#                         "covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna.fai",
#                 "order": 1000000,
#                 "tracks": [
#                     {
#                         "name": "Annotations",
#                         "url": data_path +
#                         "covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.gff.gz",
#                         "displayMode": "EXPANDED",
#                         "nameField": "gene",
#                         "height": 150
#                     }
#                 ]
#
#             },
#             tracks=[
#                 {  # normally, tracks listed here would not duplicate those already present above
#
#                     "name": "Genes",
#                     "type": "annotation",
#                     "url": data_path +
#                     "covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.gff.gz",
#                     "displayMode": "EXPANDED"
#
#                 }],
#             minimumBases=100,
#             style=igvStyle
#         ),
#     ))
#
#     dash_duo.start_server(app)
#
#     # Check that the genome loaded
#     dash_duo.wait_for_text_to_equal('.igv-current-genome', 'ASM985889v3')
#
#     # Check that track(s) loaded
#     tracks = dash_duo.find_elements('.igv-track-label')
#     assert tracks[0].text == 'Annotations'
#     assert tracks[1].text == 'Genes'
#
#
# def test_dbigv003_sacCer3(dash_duo):
#     app = dash.Dash(__name__)
#
#     try:
#         requests.get('https://www.google.com/').status_code
#         data_path = 'https://s3.dualstack.us-east-1.amazonaws.com/igv.org.genomes/'
#     except requests.exceptions.ConnectionError:
#         print("Running test with local datasets")
#         data_path = app.get_asset_url('')
#
#     app.layout = html.Div(simple_app_layout(
#         dash_bio.Igv(
#             id=_COMPONENT_ID,
#             reference={
#                 "id": "sacCer3",
#                 "name": "S. cerevisiae (sacCer3)",
#                 "fastaURL": data_path + "sacCer3/sacCer3.fa",
#                 "indexURL": data_path + "sacCer3/sacCer3.fa.fai",
#                 "tracks": [
#                     {
#                         "name": "Ensembl Genes",
#                         "type": "annotation",
#                         "format": "ensgene",
#                         "displayMode": "EXPANDED",
#                         "url": data_path + "sacCer3/ensGene.txt.gz",
#                         "indexed": False,
#                         "supportsWholeGenome": False
#                     }
#                 ]
#             },
#             minimumBases=100,
#             style=igvStyle
#         ),
#     ))
#
#     dash_duo.start_server(app)
#
#     # Check that the genome loaded
#     dash_duo.wait_for_text_to_equal('.igv-current-genome', 'sacCer3')
#
#     # Check that track(s) loaded
#     tracks = dash_duo.find_elements('.igv-track-label')
#     assert len(tracks) == 1
#     assert tracks[0].text == 'Ensembl Genes'
