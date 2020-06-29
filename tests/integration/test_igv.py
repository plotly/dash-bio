import dash
import dash_bio
import dash_html_components as html

#from selenium.webdriver.common.action_chains import ActionChains
#from selenium.webdriver.common.keys import Keys
#from selenium.webdriver.support.ui import WebDriverWait

from common_features import simple_app_layout, simple_app_callback, \
    user_interactions_layout, user_interactions_callback

_COMPONENT_ID = 'myigv'

igvStyle = dict(
    paddingTop='10px',
    paddingBottom='10px',
    margin='8px',
    border='1px solid lightgray'
)


# Basic test for the component rendering.
def test_it(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Igv(
            id=_COMPONENT_ID,
            reference={
                "id": "ASM985889v3",
                "name": "Sars-CoV-2 (ASM985889v3)",
                "fastaURL": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna",
                "indexURL": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.fna.fai",
                "order": 1000000,
                "tracks": [
                    {
                        "name": "Annotations",
                        "url": "https://s3.amazonaws.com/igv.org.genomes/covid_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.gff.gz",
                        "displayMode": "EXPANDED",
                        "nameField": "gene",
                        "height": 150
                    }
                ]

            },
            tracks=[{  # normally, tracks listed here would not duplicate those already present above

                "name": "Genes",
                "type": "annotation",
                "url": "https://ftp.ncbi.nlm.nih.gov/genomes/all/GCF/009/858/895/GCF_009858895.2_ASM985889v3/GCF_009858895.2_ASM985889v3_genomic.gff.gz",
                "displayMode": "EXPANDED"

            }],
            minimumBases=100,
            style=igvStyle
        ),
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='minimumBases',
        test_prop_value=100,
        prop_value_type='int',
        validation_fn=None,
        take_snapshot=False
    )

    # Check that the genome loaded
    dash_duo.wait_for_text_to_equal('#igv-current_genome', 'ASM985889v3')

    # Check that both tracks leaded
    tracks = dash_duo.find_elements('.igv-track-label')

    assert tracks[0].text == 'Annotationss'
    assert tracks[1].text == 'Genes'

