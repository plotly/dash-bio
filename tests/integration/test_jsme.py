import dash
from dash import dcc
from dash import html
import dash_bio
from common_features import simple_app_layout, simple_app_callback, generate_identifier

_COMPONENT_ID = 'test-jsme'


def test_dbj001_smiles_props(dash_duo):
    smiles = 'O=C(Nc1cccc(Cl)c1)c3cncc4nnc(c2ccc(OC(F)F)cc2)n34'

    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles=smiles
    ))

    _check_smile(dash_duo, smiles)


def test_dbj002_check_structures(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID
    ))

    # We can't works with JS selector because all buttons are SVG
    triangle_selector = 0.33
    square_selector = 0.4
    pentagon_selector = 0.47
    hexagon_selector = 0.54
    double_hexagon_selector = 0.5
    heptagon_selector = 0.61
    octagon_selector = 0.68
    structures = [
        (triangle_selector, 'C1CC1'),
        (square_selector, 'C1CCC1'),
        (pentagon_selector, 'C1CCCC1'),
        (hexagon_selector, 'C1CCCCC1'),
        (double_hexagon_selector, 'c1ccccc1'),
        (heptagon_selector, 'C1CCCCCC1'),
        (octagon_selector, 'C1CCCCCCC1'),
    ]

    for structure in structures:
        _check_structure(dash_duo, structure[0], structure[1])


def _test_dbj003_new_look(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID
    ))

    a = 'div > div > div:nth-child(3) > svg > g > rect:nth-child(1)'

    dash_duo.click_at_coord_fractions(a, 0.4, 0.75)

    dash_duo.wait_for_element('#1' + _COMPONENT_ID, 10000000)


def _check_structure(dash_duo, coord, smiles):
    try:
        a = 'div > div > div:nth-child(3) > svg > g > rect:nth-child(1)'
        dash_duo.click_at_coord_fractions(a, coord, 0.75)

        _click_at_draw_board(dash_duo)
        _check_smile(dash_duo, smiles)

        # Clear draw board after test
        _clear_dashboard(dash_duo)

    except Exception as e:
        print(e)
        raise e
        dash_duo.wait_for_element('#1' + _COMPONENT_ID, 10000000)



def _prepare_app(dash_duo, jsme):
    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(jsme))

    dash_duo.start_server(app, dev_tools_props_check=True)

    dash_duo.wait_for_element('#' + _COMPONENT_ID)

    return app


def _check_smile(dash_duo, smiles):
    smiles_button_selector = 'div > div > div:nth-child(3) > svg > g > ellipse:nth-child(10)'
    smiles_input_selector = '.gwt-TextBox'
    close_button_selector = 'tbody button'

    _click(dash_duo, smiles_button_selector)
    existed_smiles = dash_duo.find_element(smiles_input_selector).get_attribute('value')
    assert existed_smiles == smiles

    # Close SMILES modal
    _click(dash_duo, close_button_selector)


def _click(dash_duo, selector):
    dash_duo.multiple_click(selector, 1)


def _click_at_draw_board(dash_duo):
    draw_board_selector = 'g > rect'
    dash_duo.click_at_coord_fractions(draw_board_selector, 0.5, 0.5)


def _clear_dashboard(dash_duo):
    dash_duo.click_at_coord_fractions('div > div > div:nth-child(3) > svg > g > rect:nth-child(1)', 0.07, 0.25)
