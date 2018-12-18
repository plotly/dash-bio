# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashMolecule3d(Component):
    """A DashMolecule3d component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in callbacks
- selectionType (string; optional): The selection type - may be atom, residue or chain
- backgroundColor (string; optional): Property to change the background color of the molecule viewer
- backgroundOpacity (number; optional): Property to change the backgroun opacity - ranges from 0 to 1
- styles (dict with strings as keys and values of type dict; optional): Property that can be used to change the representation of
the molecule. Options include sticks, cartoon and sphere
- modelData (optional): The data that will be used to display the molecule in 3D
The data will be in JSON format 
and should have two main dictionaries - atoms, bonds. modelData has the following type: dict containing keys 'atoms', 'bonds'.
Those keys have the following types: 
  - atoms (list; optional)
  - bonds (list; optional)
- atomLabelsShown (boolean; optional): Property to either show or hide labels
- selectedAtomIds (list; optional): Property that stores a list of all selected atoms
- labels (list; optional): labels corresponding to the atoms of the molecule

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, selectionType=Component.UNDEFINED, backgroundColor=Component.UNDEFINED, backgroundOpacity=Component.UNDEFINED, styles=Component.UNDEFINED, modelData=Component.UNDEFINED, atomLabelsShown=Component.UNDEFINED, selectedAtomIds=Component.UNDEFINED, labels=Component.UNDEFINED, onRenderNewData=Component.UNDEFINED, onChangeSelection=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'selectionType', 'backgroundColor', 'backgroundOpacity', 'styles', 'modelData', 'atomLabelsShown', 'selectedAtomIds', 'labels']
        self._type = 'DashMolecule3d'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_events = []
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
        super(DashMolecule3d, self).__init__(**args)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('DashMolecule3d(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'DashMolecule3d(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
