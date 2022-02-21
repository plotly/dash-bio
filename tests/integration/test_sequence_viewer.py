import json
import re

import dash
import dash_bio
import dash_html_components as html

from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.common.exceptions import NoSuchElementException
from selenium.webdriver.common.by import By

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
        validation_fn=lambda x: x == new_coverage,
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

    coverage_1 = dash_duo.find_element(
        '.sequenceBody .fastaSeq span:nth-child(1)'
    )

    coverage_1.click()
    dash_duo.wait_for_text_to_equal('#interaction-results', '0')

    coverage_2 = dash_duo.find_element(
        '.sequenceBody .fastaSeq span:nth-child(3)'
    )
    coverage_2.click()
    dash_duo.wait_for_text_to_equal('#interaction-results', '1')


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
        -(sequence.size['width']/2)+int(
            sequence.value_of_css_property("padding-left").replace('px', '')),
        -(sequence.size['height']/2)+int(
            sequence.value_of_css_property("padding-top").replace('px', ''))
    )
    ac.click_and_hold()
    ac.move_by_offset(80, 0)
    ac.release()
    ac.perform()

    expected_info = {
        'selection': 'MALWMRLLPL',
        'start': 1,
        'end': 10
    }

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _:
        output_div.get_attribute('innerHTML') == json.dumps(expected_info)
    )

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

    WebDriverWait(dash_duo.driver, 5).until(
        lambda _:
        output_div.get_attribute('innerHTML') == json.dumps(expected_info)
    )

    assert output_div.get_attribute('innerHTML') == json.dumps(expected_info)
    ac.send_keys(Keys.ESCAPE)


def test_dbsv006_show_line_numbers(dash_duo):

    """Test that line numbers are not displayed"""

    show_line_numbers = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='showLineNumbers',
        test_prop_value=show_line_numbers,
        prop_value_type='bool',
        validation_fn=lambda x: x == show_line_numbers,
        take_snapshot=True
    )

    chr_num = dash_duo.find_element('.charNumbers').text
    
    assert dash_duo.get_logs() == []
    assert chr_num == ''


def test_dbsv007_wrap_amino_acids(dash_duo):

    """Test that wrapAminoAcids is set correctly"""

    wrap_amino_acids = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='wrapAminoAcids',
        test_prop_value=wrap_amino_acids,
        prop_value_type='bool',
        validation_fn=lambda x: x == wrap_amino_acids,
        take_snapshot=True
    )
    
    assert dash_duo.get_logs() == []


def test_dbsv008_chars_per_line(dash_duo):

    """Test that number of amino acids is the same as we set"""

    chars_per_line = 50

    first_line = _data[0:chars_per_line] + '\n'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='charsPerLine',
        test_prop_value=chars_per_line,
        prop_value_type='int',
        validation_fn=lambda x: x == chars_per_line,
        take_snapshot=True
    )
    
    assert dash_duo.get_logs() == []
    assert first_line in dash_duo.find_element('.fastaSeq').text.replace(' ', '')


def test_dbsv009_toolbar(dash_duo):

    """Test that toolbar is displayed when toolbar prop is True"""

    toolbar = True

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='toolbar',
        test_prop_value=toolbar,
        prop_value_type='bool',
        validation_fn=lambda x: x == toolbar,
        take_snapshot=True
    )

    try:
        # Id of a toolbar
        dash_duo.find_element('#test-sequence-viewer-cpl')
        exist = True
    except NoSuchElementException:
        exist = False
    
    assert dash_duo.get_logs() == []
    assert exist == True


def test_dbsv010_search(dash_duo):

    """Test that search bar is not included"""

    search = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='search',
        test_prop_value=search,
        prop_value_type='bool',
        validation_fn=lambda x: x == search,
        take_snapshot=True
    )

    try:
        # Class of a search panel
        dash_duo.find_element('.inputSearchSeq')
        exist = True
    except NoSuchElementException:
        exist = False
    
    assert dash_duo.get_logs() == []
    assert exist == False


def test_dbsv011_title(dash_duo):

    """Test that title is set correctly"""

    title = 'Test-title'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='title',
        test_prop_value=title,
        prop_value_type='string',
        validation_fn=lambda x: x == title,
        take_snapshot=True
    )
    
    assert dash_duo.get_logs() == []
    assert title == dash_duo.driver.find_element(By.XPATH, '//*[@id="test-sequence-viewer"]/div[1]/h4').text


def test_dbsv012_sequence_max_height(dash_duo):

    """Test that sequenceMaxHeight is set correctly"""

    sequence_max_height = '500px'

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='sequenceMaxHeight',
        test_prop_value=sequence_max_height,
        prop_value_type='string',
        validation_fn=lambda x: x == sequence_max_height,
        take_snapshot=True
    )
    
    dash_duo.wait_for_style_to_equal('.scroller', 'max-height', sequence_max_height, timeout=5)

    assert dash_duo.get_logs() == []


def test_dbsv013_badge(dash_duo):

    """Test that sequenceMaxHeight is set correctly"""

    badge = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='badge',
        test_prop_value=badge,
        prop_value_type='bool',
        validation_fn=lambda x: x == badge,
        take_snapshot=True
    )
    
    try:
        # Class of a search panel
        dash_duo.find_element('.badge')
        exist = True
    except NoSuchElementException:
        exist = False

    assert dash_duo.get_logs() == []
    assert exist == False


def test_dbsv014_badge(dash_duo):

    """Test that sequenceMaxHeight is set correctly"""

    badge = False

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='badge',
        test_prop_value=badge,
        prop_value_type='bool',
        validation_fn=lambda x: x == badge,
        take_snapshot=True
    )
    
    try:
        # Class of a search panel
        dash_duo.find_element('.badge')
        exist = True
    except NoSuchElementException:
        exist = False

    assert dash_duo.get_logs() == []
    assert exist == False


def test_dbsv015_legend(dash_duo):

    """Test that legend is set correctly"""

    legend = [{'color': 'red'}, {'name': 'Test name'}, {'underscore': True}]

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='legend',
        test_prop_value=json.dumps(legend),
        prop_value_type='list',
        validation_fn=lambda x: x == legend,
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []
    assert legend[1]['name'] == dash_duo.driver.find_element(By.XPATH, '//*[@id="test-sequence-viewer"]/div[2]/div[2]/p[2]').text


def test_dbsv016_(dash_duo):

    """Test that legend is set correctly"""

    legend = [{'color': 'red'}, {'name': 'Test name'}, {'underscore': True}]

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.SequenceViewer(
            id=_COMPONENT_ID,
            sequence=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='legend',
        test_prop_value=json.dumps(legend),
        prop_value_type='list',
        validation_fn=lambda x: x == legend,
        take_snapshot=True
    )

    assert dash_duo.get_logs() == []
    assert legend[1]['name'] == dash_duo.driver.find_element(By.XPATH, '//*[@id="test-sequence-viewer"]/div[2]/div[2]/p[2]').text
