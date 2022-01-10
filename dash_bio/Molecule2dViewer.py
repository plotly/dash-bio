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

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

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

- scrollZoom (boolean; optional):
    The option of whether or not to allow scrolling to control the
    zoom.

- selectedAtomIds (list of numbers; optional):
    The selected atom IDs.

- width (number; default 500):
    The width of the SVG element."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectedAtomIds=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, modelData=Component.UNDEFINED, loading_state=Component.UNDEFINED, scrollZoom=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'height', 'loading_state', 'modelData', 'scrollZoom', 'selectedAtomIds', 'width']
        self._type = 'Molecule2dViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'height', 'loading_state', 'modelData', 'scrollZoom', 'selectedAtomIds', 'width']
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
