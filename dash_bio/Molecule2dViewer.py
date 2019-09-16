# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Molecule2dViewer(Component):
    """A Molecule2dViewer component.
The Molecule2dViewer component is used to render structural
formulae of molecules.
Read more about the component here:
https://github.com/Autodesk/molecule-2d-for-react

Keyword arguments:
- id (string; optional): The ID used to identify this component in callbacks.
- selectedAtomIds (list of numbers; optional): The selected atom IDs.
- width (number; default 500): The width of the SVG element.
- height (number; default 500): The height of the SVG element.
- modelData (dict; default {
    nodes: [],
    links: [],
}): Description of the molecule to display. modelData has the following type: dict containing keys 'nodes', 'links'.
Those keys have the following types:
  - nodes (dict; optional): nodes has the following type: list of dicts containing keys 'id', 'atom'.
Those keys have the following types:
  - id (number; optional)
  - atom (string; optional)
  - links (dict; optional): links has the following type: list of dicts containing keys 'id', 'source', 'target', 'bond', 'strength', 'distance'.
Those keys have the following types:
  - id (number; optional)
  - source (optional)
  - target (optional)
  - bond (number; optional)
  - strength (number; optional)
  - distance (number; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectedAtomIds=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, modelData=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selectedAtomIds', 'width', 'height', 'modelData']
        self._type = 'Molecule2dViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selectedAtomIds', 'width', 'height', 'modelData']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Molecule2dViewer, self).__init__(**args)
