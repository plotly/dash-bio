# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NeedlePlot(Component):
    """A NeedlePlot component.
The Needle Plot component is used to visualize large datasets
containing categorical or numerical data. The lines and markers in
the plot correspond to bars in a histogram.

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- mutationData (optional): The data that are displayed on the plot. mutationData has the following type: dict containing keys 'x', 'y', 'mutationGroups', 'domains'.
Those keys have the following types:
  - x (string | list; optional)
  - y (string | list; optional)
  - mutationGroups (list; optional)
  - domains (list; optional)
- xlabel (string; optional): Title of the x-axis.
- ylabel (string; optional): Title of the y-axis.
- rangeSlider (boolean; optional): If true, enables a rangeslider for the x-axis.
- needleStyle (optional): Options for the needle marking single site mutations. needleStyle has the following type: dict containing keys 'stemColor', 'stemThickness', 'stemConstHeight', 'headSize', 'headColor', 'headSymbol'.
Those keys have the following types:
  - stemColor (string; optional)
  - stemThickness (number; optional)
  - stemConstHeight (boolean; optional)
  - headSize (number; optional)
  - headColor (list | string; optional)
  - headSymbol (list | string; optional)
- domainStyle (optional): Options for the protein domain coloring. domainStyle has the following type: dict containing keys 'domainColor', 'displayMinorDomains'.
Those keys have the following types:
  - domainColor (list; optional)
  - displayMinorDomains (boolean; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, mutationData=Component.UNDEFINED, xlabel=Component.UNDEFINED, ylabel=Component.UNDEFINED, rangeSlider=Component.UNDEFINED, needleStyle=Component.UNDEFINED, domainStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'mutationData', 'xlabel', 'ylabel', 'rangeSlider', 'needleStyle', 'domainStyle']
        self._type = 'NeedlePlot'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'mutationData', 'xlabel', 'ylabel', 'rangeSlider', 'needleStyle', 'domainStyle']
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
