# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NeedlePlot(Component):
    """A NeedlePlot component.


Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- data (list; optional)
- x (string | list; optional)
- y (string | list; optional)
- groups (list; optional)
- domains (list; optional)
- xlabel (string; optional)
- ylabel (string; optional)
- stemColor (string; optional)
- stemThickness (number; optional)
- stemConstHeight (boolean; optional)
- needleColors (list; optional)
- domainColors (list; optional)

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, data=Component.UNDEFINED, x=Component.UNDEFINED, y=Component.UNDEFINED, groups=Component.UNDEFINED, domains=Component.UNDEFINED, xlabel=Component.UNDEFINED, ylabel=Component.UNDEFINED, stemColor=Component.UNDEFINED, stemThickness=Component.UNDEFINED, stemConstHeight=Component.UNDEFINED, needleColors=Component.UNDEFINED, domainColors=Component.UNDEFINED, onChange=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'x', 'y', 'groups', 'domains', 'xlabel', 'ylabel', 'stemColor', 'stemThickness', 'stemConstHeight', 'needleColors', 'domainColors']
        self._type = 'NeedlePlot'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'data', 'x', 'y', 'groups', 'domains', 'xlabel', 'ylabel', 'stemColor', 'stemThickness', 'stemConstHeight', 'needleColors', 'domainColors']
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
