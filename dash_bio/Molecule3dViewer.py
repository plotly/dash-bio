# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Molecule3dViewer(Component):
    """A Molecule3dViewer component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in callbacks
- selectionType (a value equal to: 'atom', 'residue', 'chain'; optional): The selection type - may be atom, residue or chain
- backgroundColor (string; optional): Property to change the background color of the molecule viewer
- backgroundOpacity (number; optional): Property to change the backgroun opacity - ranges from 0 to 1
- styles (list; optional): Property that can be used to change the representation of
the molecule. Options include sticks, cartoon and sphere
- modelData (optional): The data that will be used to display the molecule in 3D
The data will be in JSON format
and should have two main dictionaries - atoms, bonds. modelData has the following type: dict containing keys 'atoms', 'bonds'.
Those keys have the following types:
  - atoms (list; optional)
  - bonds (list; optional)
- atomLabelsShown (boolean; optional): Property to either show or hide labels
- selectedAtomIds (list; optional): Property that stores a list of all selected atoms
- labels (list; optional): labels corresponding to the atoms of the molecule"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectionType=Component.UNDEFINED, backgroundColor=Component.UNDEFINED, backgroundOpacity=Component.UNDEFINED, styles=Component.UNDEFINED, modelData=Component.UNDEFINED, atomLabelsShown=Component.UNDEFINED, selectedAtomIds=Component.UNDEFINED, labels=Component.UNDEFINED, onRenderNewData=Component.UNDEFINED, onChangeSelection=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selectionType', 'backgroundColor', 'backgroundOpacity', 'styles', 'modelData', 'atomLabelsShown', 'selectedAtomIds', 'labels']
        self._type = 'Molecule3dViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'selectionType', 'backgroundColor', 'backgroundOpacity', 'styles', 'modelData', 'atomLabelsShown', 'selectedAtomIds', 'labels']
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
