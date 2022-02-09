import json
import re
import urllib.request as urlreq

import dash
import dash_bio
import dash_html_components as html
from dash.dependencies import Input, Output

from common_features import simple_app_layout, simple_app_callback

_data = None

with open(
        'tests/dashbio_demos/dash-alignment-chart/data/p53.fasta', 'r'
) as f:
    _data = f.read()

_COMPONENT_ID = 'test-alignment-chart'


def test_dbav001_hide_conservation(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showconservation',
        test_prop_value=str(False),
        prop_value_type='bool',
        validation_fn=lambda x: x is False
    )

    assert len(dash_duo.find_elements('g.cartesianlayer.xy3')) == 0


def test_dbav002_change_colorscale(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='colorscale',
        test_prop_value='hydro',
        prop_value_type='string',
        take_snapshot=True
    )

    # the heatmap background is an image, so we can't programmatically
    # assert that the colors are correct; this test requires a look at
    # the Percy snapshot that is taken


def test_dbav003_change_conservation_colorscale(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='conservationcolorscale',
        test_prop_value='Blackbody',
        prop_value_type='string'
    )

    bars = dash_duo.find_elements('g.cartesianlayer g.subplot.xy2 g.plot path')

    # first bar should be black
    match = re.search(
        r'.*fill: ([\w\s,\(\)]+);.*',
        bars[0].get_attribute('style')
    )
    assert match.group(1) == 'rgb(0, 0, 0)'

    # second bar should be orange
    match = re.search(
        r'.*fill: ([\w\s,\(\)]+);.*',
        bars[1].get_attribute('style')
    )
    assert match.group(1) == 'rgb(230, 103, 0)'


def test_dbnp004_height(dash_duo):
    """ Test that check if width property is setting correctly """
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    new_height = 350

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='height',
        test_prop_value=new_height,
        validation_fn=lambda x: x == new_height,
        prop_value_type='int',
        take_snapshot=True
    )

    main = dash_duo.find_element(f'#{_COMPONENT_ID}')

    assert int(main.size['height']) == new_height


def test_dbav005_change_sequence_ids(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    sequence_ids = [1, 2]

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='sequenceIds',
        test_prop_value=json.dumps(sequence_ids),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps(sequence_ids)
    )

    ids_elements = dash_duo.find_elements('.subplot.xy g.yaxislayer-above > .ytick')

    # One more item for consensus
    assert len(ids_elements) == len(sequence_ids) + 1


def test_dbav006_event_datum(dash_duo):
    app = dash.Dash(__name__)

    data = urlreq.urlopen(
        'https://git.io/alignment_viewer_p53.fasta'
    ).read().decode('utf-8')

    app.layout = html.Div([
        dash_bio.AlignmentChart(
            id=f'{_COMPONENT_ID}',
            data=data,
            height=900,
            tilewidth=30,
        ),
        html.Div(id='default-alignment-viewer-output')
    ])

    @app.callback(
        Output('default-alignment-viewer-output', 'children'),
        Input(f'{_COMPONENT_ID}', 'eventDatum')
    )
    def update_output(value):
        if value is None:
            return 'No data.'
        return str(value)

    dash_duo.start_server(app)
    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')

    assert dash_duo.get_logs() == []


def test_dbav007_extension(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    extension = 'clustal'

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='extension',
        test_prop_value=extension,
        prop_value_type='string',
        validation_fn=lambda x: x == extension
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav008_extension(dash_duo):

    extension = 'clustal'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='extension',
        test_prop_value=extension,
        prop_value_type='string',
        validation_fn=lambda x: x == extension
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav009_opacity(dash_duo):

    opacity = '0.5'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='opacity',
        test_prop_value=opacity,
        prop_value_type='string',
        validation_fn=lambda x: x == opacity
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0010_textcolor(dash_duo):

    textcolor = 'red'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='textcolor',
        test_prop_value=textcolor,
        prop_value_type='string',
        validation_fn=lambda x: x == textcolor
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0011_textsize(dash_duo):

    textsize = '20'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='textsize',
        test_prop_value=textsize,
        prop_value_type='string',
        validation_fn=lambda x: x == textsize
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0012_show_label(dash_duo):

    show_label = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showlabel',
        test_prop_value=show_label,
        prop_value_type='bool',
        validation_fn=lambda x: x == show_label
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0013_show_id(dash_duo):

    show_id = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showid',
        test_prop_value=show_id,
        prop_value_type='bool',
        validation_fn=lambda x: x == show_id
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0014_showconservation(dash_duo):

    showconservation = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showconservation',
        test_prop_value=showconservation,
        prop_value_type='bool',
        validation_fn=lambda x: x == showconservation
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0015_conservationcolorscale(dash_duo):

    conservationcolorscale = 'Inferno'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='conservationcolorscale',
        test_prop_value=conservationcolorscale,
        prop_value_type='string',
        validation_fn=lambda x: x == conservationcolorscale
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0016_conservationopacity(dash_duo):

    conservationopacity = '0.5'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='conservationopacity',
        test_prop_value=conservationopacity,
        prop_value_type='string',
        validation_fn=lambda x: x == conservationopacity
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0017_conservationmethod(dash_duo):

    conservationmethod = 'conservation'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='conservationmethod',
        test_prop_value=conservationmethod,
        prop_value_type='string',
        validation_fn=lambda x: x == conservationmethod
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0018_correctgap(dash_duo):

    correctgap = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='correctgap',
        test_prop_value=correctgap,
        prop_value_type='bool',
        validation_fn=lambda x: x == correctgap
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0019_correctgap(dash_duo):

    showgap = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showgap',
        test_prop_value=showgap,
        prop_value_type='bool',
        validation_fn=lambda x: x == showgap
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0020_gapcolor(dash_duo):

    gapcolor = 'brown'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='gapcolor',
        test_prop_value=gapcolor,
        prop_value_type='string',
        validation_fn=lambda x: x == gapcolor
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0021_gapcolorscale(dash_duo):

    gapcolorscale = 'Magma'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='gapcolorscale',
        test_prop_value=gapcolorscale,
        prop_value_type='string',
        validation_fn=lambda x: x == gapcolorscale
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0022_gapopacity(dash_duo):

    gapopacity = '0.5'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='gapopacity',
        test_prop_value=gapopacity,
        prop_value_type='string',
        validation_fn=lambda x: x == gapopacity
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0023_gapopacity(dash_duo):

    gapopacity = '0.5'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='gapopacity',
        test_prop_value=gapopacity,
        prop_value_type='string',
        validation_fn=lambda x: x == gapopacity
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0024_groupbars(dash_duo):

    groupbars = True

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='groupbars',
        test_prop_value=groupbars,
        prop_value_type='bool',
        validation_fn=lambda x: x == groupbars
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0025_showconsensus(dash_duo):

    showconsensus = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showconsensus',
        test_prop_value=showconsensus,
        prop_value_type='bool',
        validation_fn=lambda x: x == showconsensus
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0026_tilewidth(dash_duo):

    tilewidth = 32

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='tilewidth',
        test_prop_value=tilewidth,
        prop_value_type='int',
        validation_fn=lambda x: x == tilewidth
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0027_tileheight(dash_duo):

    tileheight = 32

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='tileheight',
        test_prop_value=tileheight,
        prop_value_type='int',
        validation_fn=lambda x: x == tileheight
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []


def test_dbav0028_overview(dash_duo):

    overview = 'slider'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.AlignmentChart(id=_COMPONENT_ID, data=_data)
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='overview',
        test_prop_value=overview,
        prop_value_type='string',
        validation_fn=lambda x: x == overview
    )

    dash_duo.wait_for_element(f'#{_COMPONENT_ID}')
    assert dash_duo.get_logs() == []
