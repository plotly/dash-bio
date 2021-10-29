import dash
import dash_bio
import dash_html_components as html
import os
import re

from common_features import simple_app_layout

_COMPONENT_ID = 'mypileup'

_GENOME = "hg19"
_GEAR_ICON = '⚙'


def test_dbpu001_reference(dash_duo):
    app = dash.Dash(__name__)

    TWOBIT_URL = os.path.join(app.get_asset_url(''), "pileup", "chr17_little.2bit")

    pileup_label = 'bam file'
    feature_label = 'features'
    tracks = [
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
                'viz': 'variants',
                'label': 'variants',
                'source': 'vcf',
                'sourceOptions': {'url': os.path.join(app.get_asset_url(''), "pileup",
                                                      "snv.chr17.vcf")}
            },
            {
                'viz': 'pileup',
                'label': pileup_label,
                'source': 'bam',
                'sourceOptions': {
                    'url': os.path.join(app.get_asset_url(''), "pileup",
                                        "synth3.normal.17.7500000-7515000.bam"),
                    'indexUrl': os.path.join(app.get_asset_url(''), "pileup",
                                             "synth3.normal.17.7500000-7515000.bam.bai")
                    }
            },
            {
                'viz': 'features',
                'label': feature_label,
                'source': 'bigBed',
                'sourceOptions': {
                    'url': os.path.join(app.get_asset_url(''), "pileup", "chr17.22.10000-21000.bb")
                }
            }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.Pileup(
            id=_COMPONENT_ID,
            range={"contig": 'chr17', "start": 7512284, "stop": 7512644},
            reference={"label": _GENOME, "url": TWOBIT_URL},
            tracks=tracks
        ),
    ))

    dash_duo.start_server(app)

    # Check that the genome loaded
    dash_duo.wait_for_text_to_equal('.reference>.track-label', _GENOME)
    # Check that reference track loaded
    tracks = dash_duo.find_elements('.reference')
    assert len(tracks) == 1  # track-label and track-content
    assert tracks[0].text == _GENOME

    # check dropdown menu
    tracks = dash_duo.find_elements('.controls')
    assert "chr17" in tracks[0].text

    # Check that pileup track loaded
    tracks = dash_duo.find_elements('.pileup')
    assert len(tracks) == 1  # track-label and track-content
    # gear and track name should be printed
    assert pileup_label in tracks[0].text
    assert _GEAR_ICON in tracks[0].text

    # Take a Percy snapshot to check that tracks are rendered correctly
    dash_duo.percy_snapshot('test-pileup_reference', convert_canvases=True)

    # Check that feature track loaded
    tracks = dash_duo.find_elements('.features')
    assert len(tracks) == 1  # track-label and track-content
    # gear and track name should be printed
    assert feature_label in tracks[0].text
    assert _GEAR_ICON in tracks[0].text


def test_dbpu002_json(dash_duo):
    app = dash.Dash(__name__)

    TWOBIT_URL = os.path.join(app.get_asset_url(''), "pileup", "chr17_little.2bit")

    # read in JSON as string: local file
    dir_path = os.path.dirname(os.path.realpath(__file__))
    file = os.path.join(dir_path, "assets", "pileup", "alignments.ga4gh.chr17.1-250.json")

    with open(file, "r") as f:
        json = re.sub(r'\s+', '', f.read())

    pileup_label = 'bam file in GA4GH json'
    tracks = [
        {
            'viz': 'pileup',
            'label': pileup_label,
            'source': 'alignmentJson',
            'sourceOptions': json
        }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.Pileup(
            id=_COMPONENT_ID,
            range={"contig": 'chr17', "start": 7512284, "stop": 7512644},
            reference={"label": _GENOME, "url": TWOBIT_URL},
            tracks=tracks
        ),
    ))

    dash_duo.start_server(app)

    # Check that the genome loaded
    dash_duo.wait_for_text_to_equal('.reference>.track-label', _GENOME)

    # Check that reference track loaded
    tracks = dash_duo.find_elements('.reference')
    assert len(tracks) == 1  # track-label and track-content
    assert tracks[0].text == _GENOME

    # Check that pileup track loaded
    tracks = dash_duo.find_elements('.pileup')
    assert len(tracks) == 1  # track-label and track-content
    # gear and track name should be printed
    assert pileup_label in tracks[0].text
    assert _GEAR_ICON in tracks[0].text


def test_dbpu003_viz_options(dash_duo):
    app = dash.Dash(__name__)

    TWOBIT_URL = os.path.join(app.get_asset_url(''), "pileup", "chr17_little.2bit")

    # read in JSON as string: local file
    dir_path = os.path.dirname(os.path.realpath(__file__))
    file = os.path.join(dir_path, "assets", "pileup", "alignments.ga4gh.chr17.1-250.json")

    with open(file, "r") as f:
        json = re.sub(r'\s+', '', f.read())

    pileup_label = 'bam file in GA4GH json'
    tracks = [
        {
            'viz': 'pileup',
            'vizOptions': {'viewAsPairs': True},
            'label': pileup_label,
            'source': 'alignmentJson',
            'sourceOptions': json
        }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.Pileup(
            id=_COMPONENT_ID,
            range={"contig": 'chr17', "start": 7512284, "stop": 7512644},
            reference={"label": _GENOME, "url": TWOBIT_URL},
            tracks=tracks
        ),
    ))

    dash_duo.start_server(app)

    # Check that the genome loaded
    dash_duo.wait_for_text_to_equal('.reference>.track-label', _GENOME)

    # Check that reference track loaded
    tracks = dash_duo.find_elements('.reference')
    assert len(tracks) == 1  # track-label and track-content
    assert tracks[0].text == _GENOME

    # Check that pileup track loaded
    tracks = dash_duo.find_elements('.pileup')
    assert len(tracks) == 1  # track-label and track-content
    # gear and track name should be printed
    assert pileup_label in tracks[0].text
    assert _GEAR_ICON in tracks[0].text

    # show option menu
    gear = dash_duo.find_elements('.gear')[0]
    gear.click()

    # make sure option menu has viewAsPairs checked
    checks = dash_duo.find_elements('.checked')
    # View as pairs and Color by insert should be checked
    assert len(checks) == 2


def test_dbpu004_no_tracks(dash_duo):
    app = dash.Dash(__name__)

    TWOBIT_URL = os.path.join(app.get_asset_url(''), "pileup", "chr17_little.2bit")

    app.layout = html.Div(simple_app_layout(
        dash_bio.Pileup(
            id=_COMPONENT_ID,
            range={"contig": 'chr17', "start": 7512284, "stop": 7512644},
            reference={"label": _GENOME, "url": TWOBIT_URL}
        ),
    ))

    dash_duo.start_server(app)

    # Check that the genome loaded
    dash_duo.wait_for_text_to_equal('.reference>.track-label', _GENOME)

    # Check that reference track loaded
    tracks = dash_duo.find_elements('.reference')
    assert len(tracks) == 1  # track-label and track-content
    assert tracks[0].text == _GENOME
