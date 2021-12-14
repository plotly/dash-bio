# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Molecule3dViewer(Component):
    """A Molecule3dViewer component.
The Molecule3dViewer component is used to render schematic diagrams
of biomolecules. It can display ribbon-structure diagrams, or
render atoms in the molecule as sticks or spheres.
Read more about the component here:
https://github.com/Autodesk/molecule-3d-for-react

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in callbacks.

- atomLabelsShown (boolean; optional):
    Property to either show or hide labels.

- backgroundColor (string; default '#FFFFFF'):
    Property to change the background color of the molecule viewer.

- backgroundOpacity (number; default 0):
    Property to change the background opacity - ranges from 0 to 1.

- height (number; optional):
    The height (in px) of the container.

- labels (list of dicts; optional):
    Labels corresponding to the atoms of the molecule. Each label has
    a `text` field, a string containing the label content, and can
    have many other styling fields as described in
    https://3dmol.csb.pitt.edu/doc/types.html#LabelSpec.

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

- modelData (dict; optional):
    The data that will be used to display the molecule in 3D The data
    will be in JSON format and should have two main dictionaries -
    atoms, bonds.

    `modelData` is a dict with keys:

    - atoms (list; optional)

    - bonds (list; optional)

- orbital (dict; optional):
    Add an isosurface from volumetric data provided in the
    `cube_file`.

    `orbital` is a dict with keys:

    - cube_file (string; optional):
        The filepath containing raw volumetric data for vertex
        coloring.

    - iso_val (number; optional):
        The isovalue to draw the surface at.

    - negativeVolumetricColor (string; optional):
        Color for the negative value of the isosurface orbital.

    - opacity (number; optional):
        Transparency of the surface, between 0 and 1.

    - positiveVolumetricColor (string; optional):
        Color for the positive value of the isosurface orbital.

- selectedAtomIds (list; optional):
    Property that stores a list of all selected atoms.

- selectionType (a value equal to: 'atom', 'residue', 'chain'; default 'atom'):
    The selection type - may be atom, residue or chain.

- shapes (list of dicts; optional):
    Add a predefined renderable shape objects to the molecule. Valid
    shape types are Arrow, Sphere, and Cylinder.

- style (dict; default {    height: 500,    width: 500,}):
    Generic style overrides on the plot div.

- styles (list of dicts; optional):
    Property that can be used to change the representation of the
    molecule. Options include sticks, cartoon and sphere.

    `styles` is a list of dicts with keys:

    - color (string; optional)

    - visualization_type (a value equal to: 'cartoon', 'sphere', 'stick'; optional)

- width (number; optional):
    The width (in px) of the container.

- zoom (dict; default {    factor: 0.8,    animationDuration: 0,    fixedPath: False,}):
    Zoom the current view by a constant factor, with optional
    parameters to modify the duration and motion of the zoom
    animation.

    `zoom` is a dict with keys:

    - animationDuration (number; optional):
        An optional parameter that denotes the duration of a zoom
        animation, in milliseconds.

    - factor (number; optional):
        Magnification factor. Values greater than 1 will zoom, in,
        less than one will zoom out. Default 2.

    - fixedPath (boolean; optional):
        If True, animation is constrained to requested motion,
        overriding updates that happen during the animation.

- zoomTo (dict; default {    sel: {},    animationDuration: 0,    fixedPath: False,}):
    Zoom to center of atom selection.

    `zoomTo` is a dict with keys:

    - animationDuration (number; optional):
        An optional parameter that denotes the duration of a zoom
        animation , in milliseconds.

    - fixedPath (boolean; optional):
        If True, animation is constrained to requested motion,
        overriding updates that happen during the animation.

    - sel (dict; optional):
        Selection specification specifying model and atom properties
        to select. Default: all atoms in viewer.

        `sel` is a dict with keys:

        - chain (string; optional):
            Chain that the residue is located on.

        - resi (number; optional):
            The index value used to identify the residue; residues are
            numbered sequentially starting from 1."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectionType=Component.UNDEFINED, backgroundColor=Component.UNDEFINED, backgroundOpacity=Component.UNDEFINED, styles=Component.UNDEFINED, modelData=Component.UNDEFINED, atomLabelsShown=Component.UNDEFINED, selectedAtomIds=Component.UNDEFINED, labels=Component.UNDEFINED, orbital=Component.UNDEFINED, zoom=Component.UNDEFINED, zoomTo=Component.UNDEFINED, shapes=Component.UNDEFINED, height=Component.UNDEFINED, width=Component.UNDEFINED, style=Component.UNDEFINED, onRenderNewData=Component.UNDEFINED, onChangeSelection=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'atomLabelsShown', 'backgroundColor', 'backgroundOpacity', 'height', 'labels', 'loading_state', 'modelData', 'orbital', 'selectedAtomIds', 'selectionType', 'shapes', 'style', 'styles', 'width', 'zoom', 'zoomTo']
        self._type = 'Molecule3dViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'atomLabelsShown', 'backgroundColor', 'backgroundOpacity', 'height', 'labels', 'loading_state', 'modelData', 'orbital', 'selectedAtomIds', 'selectionType', 'shapes', 'style', 'styles', 'width', 'zoom', 'zoomTo']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Molecule3dViewer, self).__init__(**args)
