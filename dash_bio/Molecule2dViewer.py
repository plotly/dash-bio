# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Molecule2dViewer(Component):
    """A Molecule2dViewer component.
The Molecule2dViewer component is used to render structural
formulae of molecules.
Read more about the component here:
https://github.com/Autodesk/molecule-2d-for-react

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in callbacks.

- height (number; default 500):
    The height of the SVG element.

- modelData (dict; default {    nodes: [],    links: [],}):
    Description of the molecule to display.

    `modelData` is a dict with keys:

    - links (list of dicts; optional)

        `links` is a list of dicts with keys:

        - bond (number; optional)

        - distance (number; optional)

        - id (number; optional)

        - source (optional)

        - strength (number; optional)

        - target (optional)

    - nodes (list of dicts; optional)

        `nodes` is a list of dicts with keys:

        - atom (string; optional)

        - id (number; optional)

- selectedAtomIds (list of numbers; optional):
    The selected atom IDs.

- width (number; default 500):
    The width of the SVG element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectedAtomIds=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, modelData=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'height', 'modelData', 'selectedAtomIds', 'width']
        self._type = 'Molecule2dViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'height', 'modelData', 'selectedAtomIds', 'width']
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
