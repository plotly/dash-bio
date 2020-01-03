import json
import dash
import dash_bio
import dash_html_components as html

from common_features import simple_app_layout, simple_app_callback

_data = None

_COMPONENT_ID = 'test-mol2d'

with open(
        'tests/dashbio_demos/dash-molecule-2d-viewer/data/acetylene.json', 'r'
) as f:
    _data = json.loads(f.read())


def test_dbm2001_load_mol_data(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule2dViewer(
            id=_COMPONENT_ID
        )
    ))

    def compare_nodes_links(computed_props):
        given_nodes = _data['nodes']
        given_links = _data['links']
        computed_nodes = computed_props['nodes']
        computed_links = computed_props['links']

        defined_node_props = ['id', 'atom']
        for i in range(len(given_nodes)):
            for key in defined_node_props:
                if given_nodes[i][key] != computed_nodes[i][key]:
                    return False

        defined_link_props = ['bond', 'strength', 'distance']
        for i in range(len(given_links)):
            for key in defined_link_props:
                if given_links[i][key] != computed_links[i][key]:
                    return False
                if given_links[i]['source'] != \
                   computed_links[i]['source']['id']:
                    return False
                if given_links[i]['target'] != \
                   computed_links[i]['target']['id']:
                    return False
        return True

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='modelData',
        test_prop_value=json.dumps(_data),
        prop_value_type='dict',
        validation_fn=lambda x: compare_nodes_links(x)
    )


def test_dbm2002_preselected_atoms(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule2dViewer(
            id=_COMPONENT_ID,
            modelData=_data,
            selectedAtomIds=[1, 3]
        )
    ))

    dash_duo.start_server(app)
    dash_duo.wait_for_element('#test-mol2d')

    assert len(dash_duo.find_elements(
        'g.nodes-container > g.node.selected[index="1"]')) == 1
    assert len(dash_duo.find_elements(
        'g.nodes-container > g.node.selected[index="3"]')) == 1


def test_dbm2003_select_atoms_via_callback(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div(simple_app_layout(
        dash_bio.Molecule2dViewer(
            id=_COMPONENT_ID,
            modelData=_data
        )
    ))

    simple_app_callback(
        app,
        dash_duo,
        component_id=_COMPONENT_ID,
        test_prop_name='selectedAtomIds',
        test_prop_value=json.dumps([1, 4]),
        prop_value_type='list',
        validation_fn=lambda x: json.dumps(x) == json.dumps([1, 4])
    )

    assert len(dash_duo.find_elements(
        'g.nodes-container > g.node.selected[index="1"]')) == 1
    assert len(dash_duo.find_elements(
        'g.nodes-container > g.node.selected[index="2"]')) == 0
    assert len(dash_duo.find_elements(
        'g.nodes-container > g.node.selected[index="3"]')) == 0
    assert len(dash_duo.find_elements(
        'g.nodes-container > g.node.selected[index="4"]')) == 1


def test_dbm2004_select_deselect_atoms_via_click(dash_duo):

    app = dash.Dash(__name__)

    app.layout = html.Div([
        dash_bio.Molecule2dViewer(
            id=_COMPONENT_ID,
            modelData=_data
        ),
        html.Div(id='clicked-atoms')
    ])

    @app.callback(
        dash.dependencies.Output('clicked-atoms', 'children'),
        [dash.dependencies.Input(_COMPONENT_ID, 'selectedAtomIds')]
    )
    def show_clicked_ids(ids):
        return json.dumps(ids)

    dash_duo.start_server(app)

    atom_2 = dash_duo.find_element(
        'g.nodes-container > g.node[index="2"]')
    atom_2.click()
    assert dash_duo.find_element('#clicked-atoms').text == json.dumps([2])

    atom_3 = dash_duo.find_element(
        'g.nodes-container > g.node[index="3"]')
    atom_3.click()
    assert dash_duo.find_element('#clicked-atoms').text == json.dumps([2, 3])

    atom_2 = dash_duo.find_element(
        'g.nodes-container > g.node.selected[index="2"]')
    atom_2.click()
    assert dash_duo.find_element('#clicked-atoms').text == json.dumps([3])
