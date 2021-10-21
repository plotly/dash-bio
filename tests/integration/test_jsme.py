import time

import dash
import dash_html_components as html

import dash_bio
from common_features import simple_app_layout

_COMPONENT_ID = 'test-jsme'

_TEST_SMILES = 'O=C(Nc1cccc(Cl)c1)c3cncc4nnc(c2ccc(OC(F)F)cc2)n34'

# Selectors
_DRAW_BOARD_SELECTOR = 'g > rect'
_HORIZONTAL_INSTRUMENT_PANEL_SELECTOR = 'div > div > div:nth-child(3) > svg > g > rect:nth-child(1)'
_POPUP_AREA_SELECTOR = '.gwt-TextArea'
_POPUP_INPUT_SELECTOR = '.gwt-TextBox'
_POPUP_CLOSE_BUTTON_SELECTOR = 'tbody button:last-of-type'
_POPUP_LABEL_SELECTOR = '.gwt-Label'
_POPUP_MENU_SELECTOR = '.gwt-MenuItem'
_POPUP_PANEL_SELECTOR = '.gwt-DecoratedPopupPanel'
_POPUP_SECOND_BUTTON_SELECTOR = 'tbody button + button'
_VERTICAL_INSTRUMENT_PANEL_SELECTOR = 'div > div > div:nth-child(4) > svg > g > rect:nth-child(1)'

# We can't works with JS selector because all buttons are SVG
# First instrument line
_SMILE = (0.00, 0.25)
_CLEAR_AREA = (0.07, 0.25)
_NEW_COMPONENT = (0.14, 0.25)
_DELETE_MODE = (0.21, 0.25)
_DELETE_GROUP_MODE = (0.33, 0.25)
_CHARGED_STATES_MODE = (0.47, 0.25)
_UNDO_COORD = (0.54, 0.25)
_REDO_COORD = (0.61, 0.25)
_SPIRO_RING_COORD = (0.68, 0.25)
_INFO_FORM_COORD = (0.83, 0.25)

# Second instrument line
_STEREO_BOND_COORD = (0.00, 0.75)
_SINGLE_BOND_COORD = (0.07, 0.75)
_DOUBLE_BOND_COORD = (0.14, 0.75)
_TRIPLE_BOND_COORD = (0.21, 0.75)
_CHAIN_BOND_COORD = (0.28, 0.75)
_TRIANGLE_COORD = (0.33, 0.75)
_SQUARE_COORD = (0.4, 0.75)
_PENTAGON_COORD = (0.47, 0.75)
_HEXAGON_COORD = (0.54, 0.75)
_DOUBLE_HEXAGON_COORD = (0.5, 0.75)
_HEPTAGON_COORD = (0.61, 0.75)
_OCTAGON_COORD = (0.68, 0.75)
_FUNCTIONAL_GROUP_COORD = (0.75, 0.75)
_MENU_FORM_COORD = (0.83, 0.75)

# Vertical instrument line
_C_ATOM = (0.5, 0.03)
_N_ATOM = (0.5, 0.09)
_O_ATOM = (0.5, 0.15)
_S_ATOM = (0.5, 0.22)
_F_ATOM = (0.5, 0.28)
_Cl_ATOM = (0.5, 0.34)
_Br_ATOM = (0.5, 0.42)
_I_ATOM = (0.5, 0.49)
_P_ATOM = (0.5, 0.56)
_X_ATOM = (0.5, 0.63)


def test_dbj001_smiles_props(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles=_TEST_SMILES
    ))

    _check_smile(dash_duo, _TEST_SMILES)


def test_dbj002_clear_editing_area(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='C1CC1'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _CLEAR_AREA)
    _check_smile(dash_duo, '')


def test_dbj003_check_structures(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID
    ))

    structures = [
        (_SINGLE_BOND_COORD, 'CC'),
        (_DOUBLE_BOND_COORD, 'C=C'),
        (_TRIPLE_BOND_COORD, 'C#C'),
        (_TRIANGLE_COORD, 'C1CC1'),
        (_SQUARE_COORD, 'C1CCC1'),
        (_PENTAGON_COORD, 'C1CCCC1'),
        (_DOUBLE_HEXAGON_COORD, 'c1ccccc1'),
        (_HEXAGON_COORD, 'C1CCCCC1'),
        (_HEPTAGON_COORD, 'C1CCCCCC1'),
        (_OCTAGON_COORD, 'C1CCCCCCC1'),
    ]

    for structure in structures:
        _check_structure(dash_duo, structure[0], structure[1])


def test_dbj004_new_molecule_component(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CC'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _NEW_COMPONENT)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _TRIANGLE_COORD)
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.3, 0.5))
    _check_smile(dash_duo, 'CC.C1CC1')


def test_dbj005_input_stereo_bond(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CCC'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _STEREO_BOND_COORD)
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, 'C[C@H](C)C')


def test_dbj006_delete_mode(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CC'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _DELETE_MODE)
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, '')


def test_dbj007_functional_group_mode(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
    ))

    functional_groups = {
        '-C(=O)OH': 'CC(=O)O',
        '-C(=O)OMe': 'COC(C)=O',
        '-OC(=O)Me': 'COC(C)=O',
        '-C(=O)N': 'CC(N)=O',
        '-NC=O': 'CNC=O',
        '-CMe3': 'CC(C)(C)C',
        '-CF3': 'CC(F)(F)F',
        '-CCl3': 'CC(Cl)(Cl)Cl',
        '-NO2': 'CN(=O)=O',
        '-SO2-NH2': 'CS(N)(=O)=O',
        '-NH-SO2-Me': 'CNS(C)(=O)=O',
        '-NMe2': 'CN(C)C',
        '-C#N': 'CC#N',
        '-C#CH': 'C#CC',
        '-C#C-Me': 'CC#CC',
    }

    functional_groups_keys = tuple(functional_groups.keys())

    for _ in functional_groups_keys:
        _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _FUNCTIONAL_GROUP_COORD)

        group_button = dash_duo.find_elements('.gwt-MenuItem')
        assert len(group_button) > 0, "Functional groups menu not found"

        for element in group_button:
            group_value = element.get_attribute('innerHTML')
            assert group_value in functional_groups_keys, "Functional group key not in list"

            test_condition = functional_groups.get(group_value, None)
            if not test_condition:
                continue

            _click_selector(dash_duo, element)
            _click_at_draw_board(dash_duo)
            _check_smile(dash_duo, test_condition)
            _clear_dashboard(dash_duo)
            functional_groups.pop(group_value)
            break


def test_dbj008_chain_bond(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID
    ))

    # TODO: Chain bond instrument continuously draw bonds, so we need mouse press, mouse move and mouse release methods
    # but we have only 'click'
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _CHAIN_BOND_COORD)
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, 'CC')


def test_dbj009_delete_group_mode(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CC(C)C'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _DELETE_GROUP_MODE)
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.5, 0.48))
    _check_smile(dash_duo, 'CCC')


def test_dbj010_charged_states_mode(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CCC'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _CHARGED_STATES_MODE)
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, 'C[CH-]C')


def test_dbj011_undo_redo(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _SINGLE_BOND_COORD)
    _click_at_draw_board(dash_duo)
    _click_at_draw_board(dash_duo)
    _click_at_draw_board(dash_duo)

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _UNDO_COORD)
    _check_smile(dash_duo, 'CCC')

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _REDO_COORD)
    _check_smile(dash_duo, 'CC(C)C')


def test_dbj012_spiro_ring(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _TRIANGLE_COORD)
    _click_at_draw_board(dash_duo)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _SPIRO_RING_COORD)
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.5, 0.47))
    _check_smile(dash_duo, 'C1CC12CC2')


def test_dbj013_about_form(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _INFO_FORM_COORD)
    _popup_decorator(dash_duo, _POPUP_LABEL_SELECTOR)(_check_about)("JSME")


def test_dbj014_check_atoms(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID
    ))

    structures = [
        (_C_ATOM, 'C'),
        (_N_ATOM, 'N'),
        (_O_ATOM, 'O'),
        (_S_ATOM, 'S'),
        (_F_ATOM, 'F'),
        (_Cl_ATOM, 'Cl'),
        (_Br_ATOM, 'Br'),
        (_I_ATOM, 'I'),
        (_P_ATOM, 'P'),
    ]

    for structure in structures:
        _check_atom(dash_duo, structure[0], structure[1])


def test_dbj015_inorganic_atom(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID
    ))

    _click_selector_at_coordinates(dash_duo, _VERTICAL_INSTRUMENT_PANEL_SELECTOR, _X_ATOM)
    _popup_decorator(dash_duo, _POPUP_INPUT_SELECTOR)(_set_popup_value)('[C]')
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, '[C]')


def test_dbj016_check_menu_copy(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles=_TEST_SMILES
    ))

    menu = {
        'Copy as SMILES': _TEST_SMILES,
        'Copy as MOL': _TEST_SMILES,
        'Copy as MOL V3000': _TEST_SMILES,
        'Copy as InChI': "InChI=1S/C19H12ClF2N5O2/c20-12-2-1-3-13(8-12)24-18(28)15-9-23-10-16-25-26-17(27(15)16)11\
-4-6-14(7-5-11)29-19(21)22/h1-10,19H,(H,24,28)",
        'Copy as InChI key': 'AJGOFYWOTIIYLR-UHFFFAOYSA-N',
        'Copy as Scalar Vector Graphics': _TEST_SMILES,
        'Search chemical structure (through InChIKey)': None,
        'Paste MOL or SDF or SMILES': None,
    }

    menu_keys = tuple(menu.keys())
    for key in menu_keys:
        _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _MENU_FORM_COORD)
        menu_form = dash_duo.find_elements(_POPUP_MENU_SELECTOR)
        assert menu_form != [], "MENU form not found"
        menu_opened = True

        for element in menu_form:
            menu_value = element.get_attribute('innerHTML')
            assert menu_value in menu_keys, "Menu key not in list"

            if key != menu_value:
                continue

            test_condition = menu.get(menu_value, None)
            if not test_condition:
                continue

            _click_selector(dash_duo, element)
            menu_opened = False
            time.sleep(0.5)
            _popup_decorator(dash_duo, _POPUP_AREA_SELECTOR)(_check_in_popup_value)(menu[menu_value])
            menu[menu_value] = None
            break

        if menu_opened:
            # Need this line to hide opened menu
            _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _MENU_FORM_COORD)


def test_dbj017_check_menu_add(dash_duo):
    app = _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _MENU_FORM_COORD)
    menu_form = dash_duo.find_elements(_POPUP_MENU_SELECTOR)
    assert menu_form != [], "MENU form not found"

    for element in menu_form:
        menu_value = element.get_attribute('innerHTML')
        if menu_value not in 'Paste MOL or SDF or SMILES':
            continue
        _click_selector(dash_duo, element)
        break
    _popup_decorator(dash_duo, _POPUP_AREA_SELECTOR)(_set_popup_value)(_TEST_SMILES)
    _check_smile(dash_duo, _TEST_SMILES)


def _popup_decorator(dash_duo, selector):
    def inner(func):
        def wrapper(*args):
            try:
                field = dash_duo.wait_for_element(selector)
            except dash.testing.errors.TestingTimeoutError:
                assert False, "POPUP form not found"

            func(*args, field=field)

            _click_selector(dash_duo, _POPUP_CLOSE_BUTTON_SELECTOR)
            try:
                dash_duo.wait_for_no_elements(_POPUP_PANEL_SELECTOR)
            except dash.testing.errors.TestingTimeoutError:
                assert False, "Close button not working"

        return wrapper

    return inner


def _check_in_popup_value(text, field):
    existed_smiles = field.get_attribute('value')
    assert text in existed_smiles, f"SMILEs does not contain: '{text}' in '{existed_smiles}'"


def _get_popup_value(text, field):
    existed_smiles = field.get_attribute('value')
    assert existed_smiles == text, f"SMILEs not same: '{text}' != '{existed_smiles}'"


def _set_popup_value(text, field):
    field.clear()
    field.send_keys(text)


def _check_about(text, field):
    assert text in field.get_attribute('innerHTML')


def _check_atom(dash_duo, coord, smiles):
    _click_selector_at_coordinates(dash_duo, _VERTICAL_INSTRUMENT_PANEL_SELECTOR, coord)
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, smiles)
    _clear_dashboard(dash_duo)


def _check_smile(dash_duo, smiles):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _SMILE)
    _popup_decorator(dash_duo, _POPUP_INPUT_SELECTOR)(_get_popup_value)(smiles)


def _check_structure(dash_duo, coord, smiles):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, coord)
    _click_at_draw_board(dash_duo)

    # TODO: Need to fix. Now we need this line to change focus, else click duplicate bonds.
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _STEREO_BOND_COORD)
    _check_smile(dash_duo, smiles)

    # Clear draw board after test
    _clear_dashboard(dash_duo)


def _clear_dashboard(dash_duo):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_PANEL_SELECTOR, _CLEAR_AREA)


def _click_selector(dash_duo, selector):
    try:
        dash_duo.multiple_click(selector, 1)
    except Exception as e:
        assert False, f"Unable to click element, selector={selector}, error={e}"


def _click_selector_at_coordinates(dash_duo, selector, coord):
    try:
        dash_duo.wait_for_element(selector)
        dash_duo.click_at_coord_fractions(selector, *coord)
    except dash.testing.errors.TestingTimeoutError:
        assert False, f"Element not ready: {selector}"
    except Exception as e:
        assert False, f"Unable to click element at coordinate, selector={selector}, error={e}"


def _click_at_draw_board(dash_duo):
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.5, 0.5))


def _prepare_app(dash_duo, jsme):
    app = dash.Dash(__name__)
    app.layout = html.Div(simple_app_layout(jsme))
    dash_duo.start_server(app, dev_tools_props_check=True)
    dash_duo.wait_for_element('#' + _COMPONENT_ID)
    return app
