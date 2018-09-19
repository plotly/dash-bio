# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashIdeogram(Component):
    """A DashIdeogram component.
DashIdeogram displays the genome of organisms,
and allows the user to manipulate and view it easily.

Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- organism (string; optional): The organism, whos genome is to be viewed and manipulated
- showBandLabels (boolean; optional): Enable or disable the band labels
- orientation (string; optional): The orientation of the chromesomes either being vertical or horizontal
- dataDir (string; optional): The directory where data is taken from to create the genome graphs.
- container (string; optional): CSS styling and the id of the container holding the Ideogram in react-ideogram.js
- style (dict; optional): The input's inline styles
- className (string; optional): The class of the input element
- label (string; optional): The label

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, organism=Component.UNDEFINED, showBandLabels=Component.UNDEFINED, orientation=Component.UNDEFINED, dataDir=Component.UNDEFINED, container=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, label=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'organism', 'showBandLabels', 'orientation', 'dataDir', 'container', 'style', 'className', 'label']
        self._type = 'DashIdeogram'
        self._namespace = 'dash_ideogram'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'organism', 'showBandLabels', 'orientation', 'dataDir', 'container', 'style', 'className', 'label']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashIdeogram, self).__init__(**args)

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
            return ('DashIdeogram(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'DashIdeogram(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
