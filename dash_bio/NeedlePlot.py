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

- clickData (list; optional):
    An array of the points on the graph that have been clicked with
    Plotly.js clickEvents.

- domainStyle (dict; default {    displayMinorDomains: False,    domainColor: [        '#8dd3c7',        '#ffffb3',        '#bebada',        '#fb8072',        '#80b1d3',        '#fdb462',        '#b3de69',        '#fccde5',        '#d9d9d9',        '#bc80bd',        '#ccebc5',        '#ffed6f',        '#8dd3c7',        '#ffffb3',        '#bebada',        '#fb8072',        '#80b1d3',        '#fdb462',        '#b3de69',    ],    textangle: 0,}):
    Options for the protein domain coloring.

    `domainStyle` is a dict with keys:

    - displayMinorDomains (boolean; optional):
        The prop x sometimes contains smaller domains (e.g. multi-site
        mutations), if True, these are displayed.

    - domainColor (list; optional)

    - textangle (number; optional):
        Sets the angle at which the domain annotation text is drawn
        with respect to the horizontal.

- height (number | string; default 800):
    Height of the Plot.

- margin (dict; default {t: 100, l: 40, r: 0, b: 40}):
    Margins of the plot.

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

- width (number | string; default 700):
    Width of the Plot.

- xlabel (string; optional):
    Title of the x-axis.

- ylabel (string; optional):
    Title of the y-axis."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, mutationData=Component.UNDEFINED, margin=Component.UNDEFINED, xlabel=Component.UNDEFINED, ylabel=Component.UNDEFINED, rangeSlider=Component.UNDEFINED, needleStyle=Component.UNDEFINED, domainStyle=Component.UNDEFINED, clickData=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'clickData', 'domainStyle', 'height', 'margin', 'mutationData', 'needleStyle', 'rangeSlider', 'width', 'xlabel', 'ylabel']
        self._type = 'NeedlePlot'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'clickData', 'domainStyle', 'height', 'margin', 'mutationData', 'needleStyle', 'rangeSlider', 'width', 'xlabel', 'ylabel']
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
