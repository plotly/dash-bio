import json
import re

import dash
import dash_bio
import dash_html_components as html

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait

from common_features import simple_app_layout, simple_app_callback, \
    user_interactions_layout, user_interactions_callback


_COMPONENT_ID = 'test-sequence-viewer'

_data = 'MALWMRLLPLLALLALWGPDPAAAFVNQHLCGSHLVEALYLVCGERGFFYTPKT' \
    'RREAEDLQVGQVELGGGPGAGSLQPLALEGSLQKRGIVEQCCTSICSLYQLENYCN'


def test_dbsv001_coverage(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    new_coverage = [
        {'start': 0, 'end': 10, 'color': 'rgb(255, 0, 0)',
         'bgcolor': 'rgb(0, 0, 255)', 'underscore': True,
         'tooltip': 'Coverage one'},

        {'start': 45, 'end': 80, 'color': 'rgb(200, 150, 150)',
         'bgcolor': 'rgb(0, 0, 0)', 'underscore': False}
    ]

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='coverage',
        test_prop_value=json.dumps(new_coverage),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps(new_coverage),
        take_snapshot=True
    )

    coverage_1 = dash_duo.find_element(
        '.sequenceBody .fastaSeq span:nth-child(1)')

    match = re.search(
        r'.*color:\s*([\w\s,\(\)]+);.*',
        coverage_1.get_attribute('style')
    )
    assert match.group(1) == new_coverage[0]['color']

    match = re.search(
        r'.*background:\s*([\w\s,\(\)]+);.*',
        coverage_1.get_attribute('style')
    )
    assert match.group(1) == new_coverage[0]['bgcolor']

    assert coverage_1.get_attribute('title') == new_coverage[0]['tooltip']
    assert coverage_1.get_attribute('innerHTML').replace(
        ' ', '').replace('<br>', '') == \
        _data[new_coverage[0]['start']:new_coverage[0]['end']]

    coverage_2 = dash_duo.find_element(
        '.sequenceBody .fastaSeq span:nth-child(3)')

    match = re.search(
        r'.*color:\s*([\w\s,\(\)]+);.*',
        coverage_2.get_attribute('style')
    )
    assert match.group(1) == new_coverage[1]['color']

    match = re.search(
        r'.*background:\s*([\w\s,\(\)]+);.*',
        coverage_2.get_attribute('style')
    )
    assert match.group(1) == new_coverage[1]['bgcolor']

    assert coverage_2.get_attribute('title') == ''
    assert coverage_2.get_attribute('innerHTML').replace(
        ' ', '').replace('<br>', '') == \
        _data[new_coverage[1]['start']:new_coverage[1]['end']]


def test_dbsv002_selection(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    new_selection = [50, 75, 'rgb(120, 0, 200)']

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='selection',
        test_prop_value=json.dumps(new_selection),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps(new_selection),
        take_snapshot=True
    )

    selection = dash_duo.find_element('.fastaSeq span.stringSelected')

    match = re.search(
        r'.*background:\s*([\w\s,\(\)]+);.*',
        selection.get_attribute('style')
    )
    assert match.group(1) == new_selection[2]

    assert selection.get_attribute('innerHTML').replace(
        ' ', ''.replace('<br>', '')) == \
        _data[new_selection[0]:new_selection[1]]


def test_dbsv003_search(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(user_interactions_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    user_interactions_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        prop_name='subpartSelected'
    )

    output_div = dash_duo.find_element('#interaction-results')

    search_input = dash_duo.find_element('input.inputSearchSeq')
    search_input.click()
    search_input.send_keys('lal')

    dash_duo.wait_for_element('span.stringsSelected')

    assert output_div.get_attribute('innerHTML') == json.dumps([
        {'start': 80, 'end': 82, 'sequence': 'LAL'},
        {'start': 14, 'end': 16, 'sequence': 'LAL'},
        {'start': 11, 'end': 13, 'sequence': 'LAL'}
    ])

    # search for something else

    search_input.click()
    for i in range(len('lal')):
        search_input.send_keys(Keys.BACKSPACE)
    search_input.send_keys('SL')

    WebDriverWait(dash_duo.driver, 1).until(
        lambda _:
        output_div.get_attribute('innerHTML') == json.dumps([
            {"start": 101, "end": 102, "sequence": "SL"},
            {"start": 85, "end": 86, "sequence": "SL"},
            {"start": 76, "end": 77, "sequence": "SL"}
        ])
    )

    highlighted_sections = dash_duo.find_elements('span.stringsSelected')
    assert len(highlighted_sections) == 3
    for section in highlighted_sections:
        assert section.get_attribute('innerHTML') == 'SL'


def test_dbsv004_coverage_clicked(dash_duo):

    app = dash.Dash(__name__)

    # note: the coverage has to be in order (each entry must come
    # after its predecessor)
    # this will lead to issues in getting the coverageClicked property
    # if, e.g., the order of the list below is reversed
    # this is because of the sequence-viewer library (not
    # react-sequence-viewer, nor this component)

    coverage = [
        {'start': 0, 'end': 10, 'color': 'rgb(255, 0, 0)',
         'bgcolor': 'rgb(0, 0, 255)', 'underscore': True,
         'tooltip': 'Coverage two'},

        {'start': 45, 'end': 80, 'color': 'rgb(200, 150, 150)',
         'bgcolor': 'rgb(0, 0, 0)', 'underscore': False}
    ]

    app.layout = html.Div(user_interactions_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data,
            coverage=coverage
        )
    ))

    user_interactions_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        prop_name='coverageClicked'
    )

    output_div = dash_duo.find_element('#interaction-results')

    coverage_1 = dash_duo.find_element(
        '.sequenceBody .fastaSeq span:nth-child(1)'
    )
    coverage_1.click()
    assert output_div.get_attribute('innerHTML') == str(0)

    coverage_2 = dash_duo.find_element(
        '.sequenceBody .fastaSeq span:nth-child(3)'
    )
    coverage_2.click()
    assert output_div.get_attribute('innerHTML') == str(1)


def test_dbsv005_mouse_selection(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(user_interactions_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    user_interactions_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        prop_name='mouseSelection'
    )

    output_div = dash_duo.find_element('#interaction-results')

    sequence = dash_duo.find_element('.fastaSeq')

    ac = ActionChains(dash_duo.driver)
    ac.move_to_element(sequence)
    ac.move_by_offset(
        -(sequence.size['width']/2), -(sequence.size['height']/2)
    )
    ac.click_and_hold()
    ac.move_by_offset(85, 0)
    ac.release()
    ac.perform()

    expected_info = {
        'selection': 'MALWMRLLPL',
        'start': 1,
        'end': 10
    }

    assert output_div.get_attribute('innerHTML') == json.dumps(expected_info)

    # select something else

    ac = ActionChains(dash_duo.driver)
    ac.move_to_element(sequence)
    ac.move_by_offset(
        -(sequence.size['width']/2 - 100), -(sequence.size['height']/2 - 20)
    )
    ac.click_and_hold()
    ac.move_by_offset(55, 0)
    ac.release()
    ac.perform()

    expected_info = {
        'selection': 'PKTRREA',
        'start': 52,
        'end': 58
    }

    assert output_div.get_attribute('innerHTML') == json.dumps(expected_info)

    ac.send_keys(Keys.ESCAPE)
