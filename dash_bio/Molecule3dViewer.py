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
- id (string; optional): The ID used to identify this component in callbacks
- selectionType (a value equal to: 'atom', 'residue', 'chain'; default 'atom'): The selection type - may be atom, residue or chain
- backgroundColor (string; default '#FFFFFF'): Property to change the background color of the molecule viewer
- backgroundOpacity (number; default 0): Property to change the background opacity - ranges from 0 to 1
- styles (dict; optional): Property that can be used to change the representation of
the molecule. Options include sticks, cartoon and sphere. styles has the following type: list of dicts containing keys 'color', 'visualization_type'.
Those keys have the following types:
  - color (string; optional)
  - visualization_type (a value equal to: 'cartoon', 'sphere', 'stick'; optional)
- modelData (dict; optional): The data that will be used to display the molecule in 3D
The data will be in JSON format
and should have two main dictionaries - atoms, bonds. modelData has the following type: dict containing keys 'atoms', 'bonds'.
Those keys have the following types:
  - atoms (list; optional)
  - bonds (list; optional)
- atomLabelsShown (boolean; optional): Property to either show or hide labels
- selectedAtomIds (list; optional): Property that stores a list of all selected atoms
- labels (list; optional): Labels corresponding to the atoms of the molecule.
The text key sets the label content, and additional
styling options can be set with the parameters key.
- orbital (dict; optional): Add an isosurface from volumetric data provided in the `cube_file`. orbital has the following type: dict containing keys 'cube_file', 'iso_val', 'opacity', 'positiveVolumetricColor', 'negativeVolumetricColor'.
Those keys have the following types:
  - cube_file (string; optional)
  - iso_val (number; optional)
  - opacity (number; optional)
  - positiveVolumetricColor (string; optional)
  - negativeVolumetricColor (string; optional)
- shapes (list of dicts; optional): Add a predefined renderable shape objects to the molecule.
Valid shape types are Arrow, Sphere, and Cylinder."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectionType=Component.UNDEFINED, backgroundColor=Component.UNDEFINED, backgroundOpacity=Component.UNDEFINED, styles=Component.UNDEFINED, modelData=Component.UNDEFINED, atomLabelsShown=Component.UNDEFINED, selectedAtomIds=Component.UNDEFINED, labels=Component.UNDEFINED, orbital=Component.UNDEFINED, shapes=Component.UNDEFINED, onRenderNewData=Component.UNDEFINED, onChangeSelection=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selectionType', 'backgroundColor', 'backgroundOpacity', 'styles', 'modelData', 'atomLabelsShown', 'selectedAtomIds', 'labels', 'orbital', 'shapes']
        self._type = 'Molecule3dViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selectionType', 'backgroundColor', 'backgroundOpacity', 'styles', 'modelData', 'atomLabelsShown', 'selectedAtomIds', 'labels', 'orbital', 'shapes']
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
