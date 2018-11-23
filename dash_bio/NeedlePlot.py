# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NeedlePlot(Component):
    """A NeedlePlot component.


Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- x (string | list; optional)
- y (string | list; optional)
- mutationGroups (list; optional)
- domains (list; optional)
- xlabel (string; optional)
- ylabel (string; optional)
- rangeSlider (boolean; optional)
- needleStyle (optional): . needleStyle has the following type: dict containing keys 'stemColor', 'stemThickness', 'stemConstHeight', 'headSize', 'headColor', 'headSymbol'.
Those keys have the following types: 
  - stemColor (string; optional)
  - stemThickness (number; optional)
  - stemConstHeight (boolean; optional)
  - headSize (number; optional)
  - headColor (list | string; optional)
  - headSymbol (list | string; optional)
- domainStyle (optional): . domainStyle has the following type: dict containing keys 'domainColor', 'displayMinorDomains'.
Those keys have the following types: 
  - domainColor (list; optional)
  - displayMinorDomains (boolean; optional)

Available events: 'click', 'hover', 'unhover', 'selected'"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, x=Component.UNDEFINED, y=Component.UNDEFINED, mutationGroups=Component.UNDEFINED, domains=Component.UNDEFINED, xlabel=Component.UNDEFINED, ylabel=Component.UNDEFINED, rangeSlider=Component.UNDEFINED, needleStyle=Component.UNDEFINED, domainStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'x', 'y', 'mutationGroups', 'domains', 'xlabel', 'ylabel', 'rangeSlider', 'needleStyle', 'domainStyle']
        self._type = 'NeedlePlot'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_events = ['click', 'hover', 'unhover', 'selected']
        self.available_properties = ['id', 'x', 'y', 'mutationGroups', 'domains', 'xlabel', 'ylabel', 'rangeSlider', 'needleStyle', 'domainStyle']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NeedlePlot, self).__init__(**args)

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
            return ('NeedlePlot(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'NeedlePlot(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
