# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class SpeckComponent(Component):
    """A SpeckComponent component.


Keyword arguments:
- id (string; optional)
- data (list; optional)
- view (optional): . view has the following type: dict containing keys 'aspect', 'zoom', 'translation', 'atomScale', 'relativeAtomScale', 'bondScale', 'rotation', 'ao', 'aoRes', 'brightness', 'outline', 'spf', 'bonds', 'bondThreshold', 'bondShade', 'atomShade', 'resolution', 'dofStrength', 'dofPosition', 'fxaa'.
Those keys have the following types: 
  - aspect (number; optional)
  - zoom (number; optional)
  - translation (optional): . translation has the following type: dict containing keys 'x', 'y'.
Those keys have the following types: 
  - x (number; optional)
  - y (number; optional)
  - atomScale (number; optional)
  - relativeAtomScale (number; optional)
  - bondScale (number; optional)
  - rotation (list; optional)
  - ao (number; optional)
  - aoRes (number; optional)
  - brightness (number; optional)
  - outline (number; optional)
  - spf (number; optional)
  - bonds (boolean; optional)
  - bondThreshold (number; optional)
  - bondShade (number; optional)
  - atomShade (number; optional)
  - resolution (number; optional)
  - dofStrength (number; optional)
  - dofPosition (number; optional)
  - fxaa (number; optional)

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, view=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'view']
        self._type = 'SpeckComponent'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'data', 'view']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(SpeckComponent, self).__init__(**args)

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
            return ('SpeckComponent(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'SpeckComponent(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
