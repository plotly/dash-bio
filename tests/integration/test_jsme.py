import time

import dash
import dash_html_components as html
from dash.testing.errors import TestingTimeoutError

import dash_bio
from common_features import simple_app_layout

_COMPONENT_ID = 'test-jsme'

_TEST_SMILES = 'O=C(Nc1cccc(Cl)c1)c3cncc4nnc(c2ccc(OC(F)F)cc2)n34'

# Selectors
_DRAW_BOARD_SELECTOR = 'div > div > div:nth-child(2) > svg > g > rect'
_DRAG_AND_DROP_SELECTOR = 'g > polygon'
_FIRST_LINE_SELECTOR = 'div > div > div:nth-child(2) > svg > g > line'
_HORIZONTAL_INSTRUMENT_SELECTOR = 'div > div > div:nth-child(3) > svg > g > rect:nth-of-type(1)'
_POPUP_AREA_SELECTOR = '.gwt-TextArea'
_POPUP_INPUT_SELECTOR = '.gwt-TextBox'
_POPUP_CLOSE_BUTTON_SELECTOR = 'tbody button:last-of-type'
_POPUP_LABEL_SELECTOR = '.gwt-Label'
_POPUP_MENU_SELECTOR = '.gwt-MenuItem'
_POPUP_PANEL_SELECTOR = '.gwt-DecoratedPopupPanel'
_POPUP_SECOND_BUTTON_SELECTOR = 'tbody button + button'
_VERTICAL_INSTRUMENT_SELECTOR = 'div > div > div:nth-child(4) > svg > g > rect:nth-of-type(1)'

# We can't works with JS selector because all buttons are SVG
# First instrument line
_SMILE_BUTTON_COORD = (0.00, 0.25)
_CLEAR_AREA_COORD = (0.07, 0.25)
_NEW_COMPONENT_COORD = (0.14, 0.25)
_DELETE_COORD = (0.21, 0.25)
_STAR_COORD = (0.28, 0.25)
_NUMBER_COORD = (0.28, 0.25)
_DELETE_GROUP_COORD = (0.33, 0.25)
_QUERY_COORD = (0.4, 0.25)
_CHARGED_STATES_COORD = (0.47, 0.25)
_REACTION_COORD = (0.5, 0.25)
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
_C_ATOM_COORD = (0.5, 0.03)
_N_ATOM_COORD = (0.5, 0.09)
_O_ATOM_COORD = (0.5, 0.15)
_S_ATOM_COORD = (0.5, 0.22)
_F_ATOM_COORD = (0.5, 0.28)
_Cl_ATOM_COORD = (0.5, 0.34)
_Br_ATOM_COORD = (0.5, 0.42)
_I_ATOM_COORD = (0.5, 0.49)
_P_ATOM_COORD = (0.5, 0.56)
_X_ATOM_COORD = (0.5, 0.63)
_R_ATOM_COORD = (0.5, 0.7)

"""
    This options need mouse move method or mouse wheel method:
        - atomMoveButton/NOatomMoveButton
        - zoom/NOzoom
    This buttons need mouse move method:
        - Chain bond instrument

    Also can't check options keepHs/removeHs/removeHsC, jsme always remove hydrogens
"""


def test_dbj001_smiles_props(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles=_TEST_SMILES,
        options='NOdepict'
    ))

    _check_smile(dash_duo, _TEST_SMILES)


def test_dbj002_clear_editing_area(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='C1CC1'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _CLEAR_AREA_COORD)
    _check_smile(dash_duo, '')


def test_dbj003_check_structures(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
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
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CC',
        options='multiPart'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _TRIANGLE_COORD)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _NEW_COMPONENT_COORD)
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.3, 0.5))
    _check_smile(dash_duo, 'CC.C1CC1')


def test_dbj005_input_stereo_bond(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CCC',
        options='stereo'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _STEREO_BOND_COORD)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'C[C@H](C)C')


def test_dbj006_delete_mode(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CCC'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _DELETE_COORD)
    _click_selector(dash_duo, _FIRST_LINE_SELECTOR)
    _check_smile(dash_duo, 'CC')


def test_dbj007_functional_group_mode(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='NOpolarNitro canonize'
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
        _click_selector_at_coordinates(dash_duo,
                                       _HORIZONTAL_INSTRUMENT_SELECTOR,
                                       _FUNCTIONAL_GROUP_COORD)

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
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID
    ))

    # TODO: Chain bond instrument continuously draw bonds, so we need mouse press,
    # mouse move and mouse release methods, but we have only 'click'
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _CHAIN_BOND_COORD)
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, 'CC')


def test_dbj009_delete_group_mode(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CC(C)C'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _DELETE_GROUP_COORD)
    _click_selector(dash_duo, _FIRST_LINE_SELECTOR)
    _check_smile(dash_duo, 'CCC')


def test_dbj010_charged_states_mode(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CCC'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _CHARGED_STATES_COORD)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'C[CH-]C')


def test_dbj011_undo_redo(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='CC'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _SINGLE_BOND_COORD)
    _click_bond_end(dash_duo)

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _UNDO_COORD)
    _check_smile(dash_duo, 'CC')

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _REDO_COORD)
    _check_smile(dash_duo, 'CCC')


def test_dbj012_spiro_ring(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles='C1CC1'
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _TRIANGLE_COORD)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _SPIRO_RING_COORD)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'C1CC12CC2')


def test_dbj013_about_form(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _INFO_FORM_COORD)
    _popup_decorator(dash_duo, _POPUP_LABEL_SELECTOR)(_check_about)("JSME")


def test_dbj014_check_atoms(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='rButton',
    ))

    structures = [
        (_C_ATOM_COORD, 'C'),
        (_N_ATOM_COORD, 'N'),
        (_O_ATOM_COORD, 'O'),
        (_S_ATOM_COORD, 'S'),
        (_F_ATOM_COORD, 'F'),
        (_Cl_ATOM_COORD, 'Cl'),
        (_Br_ATOM_COORD, 'Br'),
        (_I_ATOM_COORD, 'I'),
        (_P_ATOM_COORD, 'P'),
        (_R_ATOM_COORD, '[R]'),
    ]

    for structure in structures:
        _check_atom(dash_duo, structure[0], structure[1])


def test_dbj015_inorganic_atom(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='xButton',
    ))

    _click_selector_at_coordinates(dash_duo, _VERTICAL_INSTRUMENT_SELECTOR, _X_ATOM_COORD)
    _popup_decorator(dash_duo, _POPUP_INPUT_SELECTOR)(_set_popup_value)('[C]')
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, '[C]')


def test_dbj016_check_menu_copy(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        smiles=_TEST_SMILES,
        options="useOCLidCode exportInChIauxInfo exportInChIkey \
exportInChI exportSVG searchInChIkey useOpenChemLib paste"
    ))

    menu = {
        'Copy as SMILES': _TEST_SMILES,
        'Copy as MOL': _TEST_SMILES,
        'Copy as MOL V3000': _TEST_SMILES,
        'Copy as InChI': "InChI=1S/C19H12ClF2N5O2/c20-12-2-1-3-13(8-12)24-18(28)15-9-23-10-16-\
25-26-17(27(15)16)11-4-6-14(7-5-11)29-19(21)22/h1-10,19H,(H,24,28)",
        'Copy as InChI key': 'AJGOFYWOTIIYLR-UHFFFAOYSA-N',
        'Copy as InChI auxinfo': 'AuxInfo=1/1/N:6,7,5,20,28,21,27,10,12,14,19,8,4,22,11,15,18,2,\
24,9,25,26,13',
        'Copy as Scalar Vector Graphics': _TEST_SMILES,
        'Copy as OCL ID code': 'ek`ZDL@FMO@diI`HcZPNdLbbRfttTRbaaRrThx|rBRzF`BIijY`@ja`@@',
        'Search chemical structure (through InChIKey)': None,
        'Paste MOL or SDF or SMILES or OCL ID code': None,
    }

    menu_keys = tuple(menu.keys())
    for key in menu_keys:
        _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _MENU_FORM_COORD)
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
            _popup_decorator(dash_duo,
                             _POPUP_AREA_SELECTOR)(_check_in_popup_value)(menu[menu_value])
            menu[menu_value] = None
            break

        if menu_opened:
            # Need this line to hide opened menu
            _click_selector_at_coordinates(dash_duo,
                                           _HORIZONTAL_INSTRUMENT_SELECTOR, _MENU_FORM_COORD)


def test_dbj017_check_menu_add(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='multiPart addNewPart',
        smiles='CC(C)C',
    ))

    _paste_new_smiles(dash_duo, _TEST_SMILES)
    _check_smile(dash_duo, ''.join(('CC(C)C.', _TEST_SMILES)))


def test_dbj018_check_depict_options(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='depict border toggle depictAction NOshowDragAndDropSymbolInDepictMode',
        smiles='CCC'
    ))

    _timeout_decorator(dash_duo.wait_for_element,
                       "Option border")(_DRAW_BOARD_SELECTOR + ':nth-child(2)')

    _timeout_decorator(dash_duo.wait_for_no_elements,
                       "Option NOshowDragAndDropSymbolInDepictMode")(_DRAG_AND_DROP_SELECTOR)

    _timeout_decorator(dash_duo.wait_for_no_elements,
                       "Option depict")(_HORIZONTAL_INSTRUMENT_SELECTOR)

    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.7, 0.7))
    _timeout_decorator(dash_duo.wait_for_element,
                       "Option toggle")(_HORIZONTAL_INSTRUMENT_SELECTOR)

    _click_selector_at_coordinates(dash_duo,
                                   _HORIZONTAL_INSTRUMENT_SELECTOR, _SINGLE_BOND_COORD)
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.3, 0.3))
    _click_bond_end(dash_duo)
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.3, 0.3))
    # Test depictAction option
    _check_smile(dash_duo, "CC(C)C")


def test_dbj019_check_notoggle_options(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='depict NOborder NOtoggle NOdepictAction showDragAndDropSymbolInDepictMode',
        smiles='CC'
    ))

    _timeout_decorator(dash_duo.wait_for_no_elements,
                       "Option NOborder")(_DRAW_BOARD_SELECTOR + ':nth-child(2)')

    _timeout_decorator(dash_duo.wait_for_element,
                       "Option showDragAndDropSymbolInDepictMode")(_DRAG_AND_DROP_SELECTOR)

    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.3, 0.3))
    _timeout_decorator(dash_duo.wait_for_no_elements,
                       "Option NOtoggle")(_HORIZONTAL_INSTRUMENT_SELECTOR)

    _click_bond_end(dash_duo)
    assert len(dash_duo.find_elements(_FIRST_LINE_SELECTOR)) == 1, \
        "Option NOdepictAction not working"


def test_dbj020_check_nopaste_option(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='NOpaste',
    ))

    try:
        _paste_new_smiles(dash_duo, "CCC")
    except NameError:
        # All right
        pass
    except Exception as e:
        assert False, f"Error: {e}"
    else:
        assert False, "Option NOpaste not working"


def test_dbj021_check_reaction_option(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='reaction',
    ))

    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.3, 0.3))
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _REACTION_COORD)
    _check_smile(dash_duo, 'CC>>CC')


def test_dbj022_check_nobutton_options(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='reaction rButton NOreaction NOxButton NOrButton NOstereo NOmultiPart \
star noStar query NOquery',
    ))

    # NOreaction check
    _click_selector(dash_duo, _DRAW_BOARD_SELECTOR)
    _click_bond_end(dash_duo)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _CHAIN_BOND_COORD)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _REACTION_COORD)
    _check_smile(dash_duo, 'CCC')

    # NOmultipart check
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _TRIANGLE_COORD)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _NEW_COMPONENT_COORD)
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.3, 0.5))
    _check_smile(dash_duo, 'CCC')

    # NOstereo check
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _SINGLE_BOND_COORD)
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _STEREO_BOND_COORD)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'CC(C)C')

    # NO xButton check
    _click_selector_at_coordinates(dash_duo, _VERTICAL_INSTRUMENT_SELECTOR, _X_ATOM_COORD)
    _timeout_decorator(dash_duo.wait_for_no_elements, "Option NOxButton")(_POPUP_INPUT_SELECTOR)

    # NO rButton check
    _click_selector_at_coordinates(dash_duo, _VERTICAL_INSTRUMENT_SELECTOR, _R_ATOM_COORD)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'CC(C)(C)C')

    # noStar check
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _STAR_COORD)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'C[C+](C)(C)(C)C')

    # NOquery
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _QUERY_COORD)
    try:
        dash_duo.wait_for_no_elements(_POPUP_PANEL_SELECTOR)
    except TestingTimeoutError:
        assert False, "Query button working"


def test_dbj023_check_menu_replace(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='multiPart addNewPart NOaddNewPart',
        smiles='CC(C)C',
    ))

    _paste_new_smiles(dash_duo, _TEST_SMILES)
    _check_smile(dash_duo, _TEST_SMILES)


def test_dbj024_check_noexport(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='NOuseOpenChemLib NOsearchInChIkey NOuseOCLidCode NOexportInChIauxInfo \
NOexportInChIkey NOexportInChI',
        smiles='CC(C)C',
    ))

    menu = [
        'Copy as Scalar Vector Graphics',
        'Paste MOL or SDF or SMILES',
        'Search chemical structure',
        'Copy as InChI',
        'Copy as InChI key',
        'Copy as InChI auxinfo',
        'Copy as OCL ID code',
    ]

    _check_no_menu_item(dash_duo, menu)


def test_dbj025_check_noexportsvg(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='useOpenChemLib NOexportSVG',
        smiles='CC(C)C',
    ))

    menu = [
        'Copy as Scalar Vector Graphics',
    ]

    _check_no_menu_item(dash_duo, menu)


def test_dbj026_check_star(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='star',
        smiles='CC(C)C',
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _STAR_COORD)
    _click_bond_end(dash_duo)
    _click_bond_end(dash_duo)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'C[CH:1](C)C')


def test_dbj027_check_number(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='number autonumber',
        smiles='CC(C)C',
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _NUMBER_COORD)
    _click_bond_end(dash_duo)
    _click_bond_end(dash_duo)
    _click_bond_end(dash_duo)
    _check_smile(dash_duo, 'C[CH:3](C)C')


def test_dbj028_check_query(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='query',
    ))

    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _QUERY_COORD)
    _check_query_popup(dash_duo)


def test_dbj029_check_newlook(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='newLook',
    ))

    panel = dash_duo.wait_for_element(
        'div > div > div:nth-child(3) > svg > g > rect:nth-of-type(2)'
    )
    assert panel.get_attribute('stroke') == 'rgb(64,64,64)'


def test_dbj030_check_oldlook(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='oldLook',
    ))

    panel = dash_duo.wait_for_element(
        'div > div > div:nth-child(3) > svg > g > rect:nth-of-type(2)'
    )
    assert panel.get_attribute('stroke') != 'rgb(64,64,64)'


def test_dbj031_check_hydrogens(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='hydrogens',
        smiles='CO',
    ))

    text = dash_duo.wait_for_element('div > div > div:nth-child(2) > svg > g > text')
    assert text.get_attribute('innerHTML') == 'HO'


def test_dbj032_check_nohydrogens(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='NOhydrogens',
        smiles='CO',
    ))

    text = dash_duo.wait_for_element('div > div > div:nth-child(2) > svg > g > text')
    assert text.get_attribute('innerHTML') == 'O'


def test_dbj033_check_polar(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='polarNitro',
        smiles='CN(=O)=O',
    ))

    _check_smile(dash_duo, 'C[N+](=O)[O-]')


def test_dbj034_check_noez(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='NOautoEZ',
        smiles='CC(Cl)=C(C)Cl',
    ))

    _check_smile(dash_duo, 'CC(Cl)=C(C)Cl')


def test_dbj035_check_ez(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='autoEZ',
        smiles='CC(Cl)=C(C)Cl',
    ))

    _check_smile(dash_duo, 'C/C(Cl)=C(C)\\Cl')


def test_dbj036_check_nocanonize(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        options='NOcanonize',
        smiles='C/1=C/C=C\\C=C1',
    ))

    _check_smile(dash_duo, 'C/1=C/C=C\\C=C1')


def test_dbj037_check_width_height(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        width="500px",
        height="1000px",
    ))

    main_div = dash_duo.wait_for_element('#' + _COMPONENT_ID + " > div > div:nth-of-type(1)")

    assert 'width: 500px' in main_div.get_attribute('style'), "Option width not working"
    assert 'height: 1000px' in main_div.get_attribute('style'), "Option height not working"


def test_dbj038_check_style(dash_duo):
    _prepare_app(dash_duo, dash_bio.Jsme(
        id=_COMPONENT_ID,
        style={'background-color': 'black'},
    ))

    react_div = dash_duo.wait_for_element('#' + _COMPONENT_ID)
    assert 'background-color: black;' in react_div.get_attribute('style'), \
        "Option style not working"


def _popup_decorator(dash_duo, selector):
    def inner(func):
        def wrapper(*args):
            try:
                field = dash_duo.wait_for_element(selector)
            except TestingTimeoutError:
                assert False, "POPUP form not found"

            func(*args, field=field)

            _click_selector(dash_duo, _POPUP_CLOSE_BUTTON_SELECTOR)
            try:
                dash_duo.wait_for_no_elements(_POPUP_PANEL_SELECTOR)
            except TestingTimeoutError:
                assert False, "Close button not working"

        return wrapper

    return inner


def _timeout_decorator(func, test_string):
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except TestingTimeoutError as e:
            assert False, f'{test_string} not working: {e}'

    return wrapper


def _check_in_popup_value(text, field):
    existed_smiles = field.get_attribute('value')
    assert text in existed_smiles, f"SMILEs does not contain: '{text}' in '{existed_smiles}'"


def _check_no_menu_item(dash_duo, menu_list):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _MENU_FORM_COORD)
    menu_form = dash_duo.find_elements(_POPUP_MENU_SELECTOR)
    assert menu_form != [], "MENU form not found"

    for element in menu_form:
        menu_value = element.get_attribute('innerHTML')
        for menu_name in menu_list:
            assert menu_name not in menu_value, f"Menu key in list, menu: {menu_value}"


def _check_popup_list(dash_duo, element, test_dict, text_box, reset_button):
    _click_selector(dash_duo, element)
    name = element.get_attribute("innerHTML")
    assert name in test_dict, f"Element not in list, option: {name}"
    assert text_box.get_attribute('value') == test_dict[name][0]
    test_dict[name].pop(0)
    _click_selector(dash_duo, reset_button)


def _check_query_popup(dash_duo):
    try:
        dash_duo.wait_for_element(_POPUP_PANEL_SELECTOR)
    except TestingTimeoutError:
        assert False, "POPUP form not found"

    all_buttons = dash_duo.find_elements('button')
    text_box = dash_duo.find_element(_POPUP_INPUT_SELECTOR)
    close_button = None
    reset_button = None
    for index, b in enumerate(all_buttons):
        name = b.get_attribute("innerHTML")
        if name == "Close":
            close_button = b
            all_buttons[index] = None
        elif name == "Reset":
            reset_button = b
            all_buttons[index] = None
        elif name == "Submit":
            all_buttons[index] = None

    assert close_button is not None and reset_button is not None, "Close or Reset button not found"

    test_button_dict = {
        'Any': ['*', '~', ],
        'Any except C': ['!#6', ],
        'Halogen': ['F,Cl,Br,I', ],
        'C': ['#6', ],
        'N': ['#7', ],
        'O': ['#8', ],
        'S': ['#16', ],
        'P': ['#15', ],
        'F': ['F', ],
        'Cl': ['Cl', ],
        'Br': ['Br', ],
        'I': ['I', ],
        'Aromatic': ['a', ':', ],
        'Nonaromatic': ['A', ],
        'Ring': ['R', '@', ],
        'Nonring': ['!R', '!@', ],
    }

    for b in all_buttons:
        if b:
            _check_popup_list(dash_duo, b, test_button_dict, text_box, reset_button)

    all_option = dash_duo.find_elements('option')

    test_option_dict = {
        'Any': ['*', '*', ],
        '0': ['*;H0', '*;D0', ],
        '1': ['*;H1', '*;D1', ],
        '2': ['*;H2', '*;D2', ],
        '3': ['*;H3', '*;D3', ],
        '4': ['*;D4', ],
        '5': ['*;D5', ],
        '6': ['*;D6', ],
    }

    for o in all_option:
        _check_popup_list(dash_duo, o, test_option_dict, text_box, reset_button)


def _get_popup_value(text, field):
    existed_smiles = field.get_attribute('value')
    assert existed_smiles == text, f"SMILEs not same: '{text}' != '{existed_smiles}'"


def _set_popup_value(text, field):
    field.clear()
    field.send_keys(text)


def _check_about(text, field):
    assert text in field.get_attribute('innerHTML')


def _check_atom(dash_duo, coord, smiles):
    _click_selector_at_coordinates(dash_duo, _VERTICAL_INSTRUMENT_SELECTOR, coord)
    _click_at_draw_board(dash_duo)
    _check_smile(dash_duo, smiles)
    _clear_dashboard(dash_duo)


def _check_smile(dash_duo, smiles):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _SMILE_BUTTON_COORD)
    _popup_decorator(dash_duo, _POPUP_INPUT_SELECTOR)(_get_popup_value)(smiles)


def _check_structure(dash_duo, coord, smiles):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, coord)
    _click_at_draw_board(dash_duo)

    # TODO: Need to fix. Now we need this line to change focus, else click duplicate bonds.
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _STEREO_BOND_COORD)
    _check_smile(dash_duo, smiles)

    # Clear draw board after test
    _clear_dashboard(dash_duo)


def _clear_dashboard(dash_duo):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _CLEAR_AREA_COORD)


def _click_bond_end(dash_duo):
    board = dash_duo.wait_for_element(_DRAW_BOARD_SELECTOR)
    line = dash_duo.wait_for_element(_FIRST_LINE_SELECTOR)
    x = int(line.get_attribute('x1')) / int(board.get_attribute('width'))
    y = int(line.get_attribute('y1')) / int(board.get_attribute('height'))
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (x, y))


def _click_selector(dash_duo, selector):
    try:
        if isinstance(selector, str):
            dash_duo.wait_for_element(selector)
        dash_duo.multiple_click(selector, 1)
    except TestingTimeoutError:
        assert False, f"Element not ready: {selector}"
    except Exception as e:
        assert False, f"Unable to click element, selector={selector}, error={e}"


def _click_selector_at_coordinates(dash_duo, selector, coord):
    try:
        dash_duo.wait_for_element(selector)
        dash_duo.click_at_coord_fractions(selector, *coord)
    except TestingTimeoutError:
        assert False, f"Element not ready: {selector}"
    except Exception as e:
        assert False, f"Unable to click element at coordinate, selector={selector}, error={e}"


def _click_at_draw_board(dash_duo):
    _click_selector_at_coordinates(dash_duo, _DRAW_BOARD_SELECTOR, (0.5, 0.5))


def _paste_new_smiles(dash_duo, smiles):
    _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _MENU_FORM_COORD)

    menu_form = dash_duo.find_elements(_POPUP_MENU_SELECTOR)
    assert menu_form != [], "MENU form not found"
    paste_item = False
    for element in menu_form:
        menu_value = element.get_attribute('innerHTML')
        if menu_value not in 'Paste MOL or SDF or SMILES':
            continue
        paste_item = True
        _click_selector(dash_duo, element)
        break
    if paste_item is False:
        _click_selector_at_coordinates(dash_duo, _HORIZONTAL_INSTRUMENT_SELECTOR, _MENU_FORM_COORD)
        raise NameError("Paste button not found")
    _popup_decorator(dash_duo, _POPUP_AREA_SELECTOR)(_set_popup_value)(smiles)


def _prepare_app(dash_duo, jsme):
    app = dash.Dash(__name__)
    app.layout = html.Div(simple_app_layout(jsme))
    dash_duo.start_server(app, dev_tools_props_check=True)
    dash_duo.wait_for_element('#' + _COMPONENT_ID)

    # If smile wait to render
    if hasattr(jsme, 'smiles'):
        # No smile render without OpenChemLib
        if hasattr(jsme, 'options') and 'NOuseOpenChemLib' in jsme.options:
            return app
        dash_duo.wait_for_element(_FIRST_LINE_SELECTOR)

    return app
