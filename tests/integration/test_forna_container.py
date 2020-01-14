import json

import dash
import dash_html_components as html
import dash_bio

from common_features import simple_app_layout, simple_app_callback

_COMPONENT_ID = 'test-forna'


def test_dbfc001_display_sequences(dash_duo):

    app = dash.Dash(__name__)

    sequences = [
        {
            'sequence': 'AUGGGCCCGGGCCCAAUGGGCCCGGGCCCA',
            'structure': '.((((((())))))).((((((()))))))'
        }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.FornaContainer(
            id=_COMPONENT_ID
        )
    ))
    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='sequences',
        test_prop_value=json.dumps(sequences),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps(sequences)
    )


def test_dbfc002_display_multiple_sequences(dash_duo):

    app = dash.Dash(__name__)

    sequences = [
        {
            'sequence': 'AUGGGCCCGGGCCCAAUGGGCCCGGGCCCA',
            'structure': '.((((((())))))).((((((()))))))',
            'options': {'name': 'seq1'}
        },
        {
            'sequence': 'CUUUCUACACAGGUUGGGAUCGGUUGCAAUG'
                        'CUGUGUUUCUGUAUGGUAUUGCACUUGUCCCGGCCUGUUGAGU'
                        'UUGG',
            'structure': '..(((...((((((((((((.(((.((((('
                         '((((((......)))))))))))))).)))))))))))).)))'
                         '.....',
            'options': {'name': 'seq2'},
        },
        {
            'sequence': 'UUGGAGUACACAACCUGUACACUCUUUC',
            'structure': '..(((((..(((...)))..)))))...',
            'options': {'name': 'seq3'}
        }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.FornaContainer(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='sequences',
        test_prop_value=json.dumps(sequences),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps(sequences),
        take_snapshot=True
    )

    # check that all nucleotide sequence lengths are correct
    for seq in sequences:
        assert len(dash_duo.find_elements(
            'g.gnode[struct_name={}] > circle.node[node_type=nucleotide]'.format(
                seq['options']['name']
            )
        )) == len(seq['sequence'])


def check_color(dash_duo, number, color):
    node = dash_duo.find_element(
        'g.gnode > circle.node[node_num="{}"]'.format(str(number))
    )
    assert color in node.get_attribute('style')


def test_dbfc003_color_scheme_preset_structure(dash_duo):

    app = dash.Dash(__name__)

    sequences = [
        {
            'sequence': 'UUGGAGUACACAACCUGUACACUCUUUC',
            'structure': '..(((((..(((...)))..)))))...'
        }
    ]

    app.layout = html.Div(simple_app_layout(
        dash_bio.FornaContainer(
            id=_COMPONENT_ID,
            sequences=sequences
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='colorScheme',
        test_prop_value='structure',
        prop_value_type='string',
        take_snapshot=True
    )

    for i in list(range(1, 3)) + list(range(26, 29)):
        check_color(dash_duo, i, 'lightsalmon')

    for i in list(range(3, 8)) + list(range(10, 13)) + list(range(16, 19)) + list(range(21, 26)):
        check_color(dash_duo, i, 'lightgreen')

    for i in list(range(8, 10)) + list(range(19, 21)):
        check_color(dash_duo, i, 'rgb(219, 219, 141)')

    for i in list(range(13, 16)):
        check_color(dash_duo, i, 'lightblue')


def test_dbfc004_color_scheme_preset_position(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.FornaContainer(
            id=_COMPONENT_ID,
            sequences=[{'sequence': 'AUGAU', 'structure': '.....'}]
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='colorScheme',
        test_prop_value='positions',
        prop_value_type='string',
        take_snapshot=True
    )

    check_color(dash_duo, 1, 'rgb(152, 223, 138)')
    check_color(dash_duo, 2, 'rgb(187, 221, 139)')
    check_color(dash_duo, 3, 'rgb(219, 219, 141)')
    check_color(dash_duo, 4, 'rgb(239, 187, 146)')
    check_color(dash_duo, 5, 'rgb(255, 152, 150)')


def test_dbfc005_label_interval(dash_duo):

    sequences = [
        {'sequence': 'AUGGGCCCGGGCCCAAUGGGCCCGGGCCCA',
         'structure': '.((((((())))))).((((((()))))))',
         'options': {'labelInterval': 2}}
    ]

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.FornaContainer(
            id=_COMPONENT_ID
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='sequences',
        test_prop_value=json.dumps(sequences),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps(sequences),
        take_snapshot=True
    )

    assert len(dash_duo.find_elements(
        'g.gnode > circle.node.label'
    )) == int(len(sequences[0]['sequence'])/sequences[0]['options']['labelInterval'])


def test_dbfc006_custom_colors(dash_duo):

    sequences = [
        {
            'sequence': 'AUGGGCCCGGGCCCAAUGGGCCCGGGCCCA',
            'structure': '.((((((())))))).((((((()))))))',
            'options': {'name': 'seq1'}
        },
        {
            'sequence': 'CUUUCUACACAGGUUGGGAUCGGUUGCAAUG'
                        'CUGUGUUUCUGUAUGGUAUUGCACUUGUCCCGGCCUGUUGAGU'
                        'UUGG',
            'structure': '..(((...((((((((((((.(((.((((('
                         '((((((......)))))))))))))).)))))))))))).)))'
                         '.....',
            'options': {'name': 'seq2'},
        },
        {
            'sequence': 'UUGGAGUACACAACCUGUACACUCUUUC',
            'structure': '..(((((..(((...)))..)))))...',
            'options': {'name': 'seq3'}
        }
    ]

    custom_colors = {
        'domain': [1, 10],
        'range': ['#636EFA', '#EF553B'],
        'colorValues': {
            '': {'1': 'red', '10': 4, '14': 7.5},
            'seq1': {'1': 'blue', '2': 8},
            'seq2': {'2': 'rgb(200, 100, 240)', '14': '#EF553B'},
            'seq3': {'6': 'green', '10': 1, '13': 5}
        }
    }

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.FornaContainer(
            id=_COMPONENT_ID,
            colorScheme='custom',
            sequences=sequences
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='customColors',
        test_prop_value=json.dumps(custom_colors),
        prop_value_type='dict',
        validation_fn=lambda x: json.dumps(x) == json.dumps(custom_colors),
        take_snapshot=True
    )

    rgb_values = {
        1: 'rgb(99, 110, 250)',
        4: 'rgb(177, 101, 186)',
        5: 'rgb(192, 98, 165)',
        7.5: 'rgb(220, 91, 113)',
        8: 'rgb(224, 90, 102)',
        '#EF553B': 'rgb(239, 85, 59)',
    }

    color_values = custom_colors['colorValues']
    for seq in ['seq1', 'seq2', 'seq3']:
        tmp = color_values[''].copy()
        # override colors with sequence-specific colors
        tmp.update(color_values[seq])
        for key in tmp.keys():
            assert '{}'.format(
                rgb_values.get(tmp[key], tmp[key])
            ) in dash_duo.find_element(
                'g.gnode[struct_name={}] > circle.node[node_type=nucleotide][node_num="{}"]'
                .format(
                    seq, key
                )
            ).get_attribute('style')


def test_dbfc007_color_scheme_initial_load(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(
        dash_bio.FornaContainer(
            id=_COMPONENT_ID,
            sequences=[{'sequence': 'AUGAU', 'structure': '.....'}],
            colorScheme='positions'
        )
    )

    dash_duo.start_server(app)
    dash_duo.wait_for_element('#' + _COMPONENT_ID)

    check_color(dash_duo, 1, 'rgb(152, 223, 138)')
    check_color(dash_duo, 2, 'rgb(187, 221, 139)')
    check_color(dash_duo, 3, 'rgb(219, 219, 141)')
    check_color(dash_duo, 4, 'rgb(239, 187, 146)')
    check_color(dash_duo, 5, 'rgb(255, 152, 150)')
