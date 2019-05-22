# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class OncoPrint(Component):
    """A OncoPrint component.
The OncoPrint component is used to view multiple genetic alteration events
through an interactive and zoomable heatmap. It is a React/Dash port of the
popular oncoPrint() function from the BioConductor R package.
Under the hood, the rendering is done using Plotly.js built upon D3.
Plotly's interactivity allows the user to bind clicks and hovers to genetic
events, allowing the user to create complex bioinformatic apps or workflows
that rely on crossfiltering.
Read more about the component here:
https://github.com/plotly/react-oncoprint

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique to the component.
- eventDatum (dict; optional): A Dash prop that returns data on clicking, hovering or resizing the viewer.
- data (list; optional): Input data, in CBioPortal format where each list entry is a dict
consisting of 'sample', 'gene', 'alteration', and 'type'
- padding (number; optional): Adjusts the padding (as a proportion of whitespace) between two tracks.
Value is a ratio between 0 and 1.
Defaults to 0.05 (i.e., 5 percent). If set to 0, plot will look like a heatmap.
- colorscale (boolean | dict; optional): If not null, will override the default OncoPrint colorscale.
Default OncoPrint colorscale same as CBioPortal implementation.
Make your own colrscale as a {'mutation': COLOR} dict.
Supported mutation keys are ['MISSENSE, 'INFRAME', 'FUSION',
'AMP', 'GAIN', 'HETLOSS', 'HMODEL', 'UP', 'DOWN']
Note that this is NOT a standard plotly colorscale.
- backgroundcolor (string; optional): Default color for the tracks, in common name, hex, rgb or rgba format.
If left blank, will default to a light grey rgb(190, 190, 190).
- range (list; optional): .Toogles whether or not to show a legend on the right side of the plot,
with mutation information.
- showlegend (boolean; optional): .Toogles whether or not to show a legend on the right side of the plot,
with mutation information.
- showoverview (boolean; optional): .Toogles whether or not to show a heatmap overview of the tracks.
- width (number | string; optional): Width of the OncoPrint.
Will disable auto-resizing of plots if set.
- height (number | string; optional): Height of the OncoPrint.
Will disable auto-resizing of plots if set."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, eventDatum=Component.UNDEFINED, data=Component.UNDEFINED, padding=Component.UNDEFINED, colorscale=Component.UNDEFINED, backgroundcolor=Component.UNDEFINED, range=Component.UNDEFINED, showlegend=Component.UNDEFINED, showoverview=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'eventDatum', 'data', 'padding', 'colorscale', 'backgroundcolor', 'range', 'showlegend', 'showoverview', 'width', 'height']
        self._type = 'OncoPrint'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'eventDatum', 'data', 'padding', 'colorscale', 'backgroundcolor', 'range', 'showlegend', 'showoverview', 'width', 'height']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(OncoPrint, self).__init__(**args)
