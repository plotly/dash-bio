# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NeedlePlot(Component):
    """A NeedlePlot component.
The Needle Plot component is used to visualize large datasets
containing categorical or numerical data. The lines and markers in
the plot correspond to bars in a histogram.

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- domainStyle (dict; default {    displayMinorDomains: False,    domainColor: [        '#8dd3c7',        '#ffffb3',        '#bebada',        '#fb8072',        '#80b1d3',        '#fdb462',        '#b3de69',        '#fccde5',        '#d9d9d9',        '#bc80bd',        '#ccebc5',        '#ffed6f',        '#8dd3c7',        '#ffffb3',        '#bebada',        '#fb8072',        '#80b1d3',        '#fdb462',        '#b3de69',    ],}):
    Options for the protein domain coloring.

    `domainStyle` is a dict with keys:

    - displayMinorDomains (boolean; optional)

    - domainColor (list; optional)

- mutationData (dict; default {    x: [],    y: [],    domains: [],    mutationGroups: [],}):
    The data that are displayed on the plot.

    `mutationData` is a dict with keys:

    - domains (list; optional)

    - mutationGroups (list of strings; optional)

    - x (string | list; optional)

    - y (string | list; optional)

- needleStyle (dict; default {    stemColor: '#444',    stemThickness: 0.5,    stemConstHeight: False,    headSize: 5,    headColor: [        '#e41a1c',        '#377eb8',        '#4daf4a',        '#984ea3',        '#ff7f00',        '#ffff33',        '#a65628',        '#f781bf',        '#999999',        '#e41a1c',        '#377eb8',        '#4daf4a',        '#984ea3',        '#ff7f00',        '#ffff33',        '#a65628',        '#f781bf',        '#999999',        '#e41a1c',    ],    headSymbol: 'circle',}):
    Options for the needle marking single site mutations.

    `needleStyle` is a dict with keys:

    - headColor (list | string; optional)

    - headSize (number; optional)

    - headSymbol (list | string; optional)

    - stemColor (string; optional)

    - stemConstHeight (boolean; optional)

    - stemThickness (number; optional)

- rangeSlider (boolean; default False):
    If True, enables a rangeslider for the x-axis.

- xlabel (string; optional):
    Title of the x-axis.

- ylabel (string; optional):
    Title of the y-axis."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, mutationData=Component.UNDEFINED, xlabel=Component.UNDEFINED, ylabel=Component.UNDEFINED, rangeSlider=Component.UNDEFINED, needleStyle=Component.UNDEFINED, domainStyle=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'domainStyle', 'mutationData', 'needleStyle', 'rangeSlider', 'xlabel', 'ylabel']
        self._type = 'NeedlePlot'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'domainStyle', 'mutationData', 'needleStyle', 'rangeSlider', 'xlabel', 'ylabel']
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
