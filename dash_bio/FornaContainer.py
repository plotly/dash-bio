# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FornaContainer(Component):
    """A FornaContainer component.
This is a FornaContainer component.

Keyword arguments:
- id (string; required): The ID of this component, used to identify dash components in
callbacks. The ID needs to be unique across all of the
components in an app.
- height (number; default 500): The height (in px) of the container in which the molecules will
be displayed.
- width (number; default 300): The width (in px) of the container in which the molecules will
be displayed.
- sequences (list; optional): The molecules that will be displayed.
- nodeFillColor (string; optional): The fill color for all of the nodes. This will override any
color scheme defined in colorScheme.
- colorScheme (a value equal to: 'sequence', 'structure', 'positions', 'custom'; default 'sequence'): The color scheme that is used to color the nodes.
- customColors (optional): The custom colors used to color the nodes if the 'custom'
option is chosen for the `colorScheme` prop.
For example, if the domain is `[0, 20]`, the range is
`['yellow', 'red']`, and the dictionary specified in
'colorValues' that corresponds to a molecule is `{'6': 10}`,
the sixth nucleotide in that molecule will have a color that is
perfectly in between yellow and red (i.e., orange), since 10 is
perfectly in between 0 and 20.
- allowPanningAndZooming (boolean; optional): Allow users to zoom in and pan the display. If this is enabled,
then pressing the 'c' key on the keyboard will center the view."""
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, height=Component.UNDEFINED, width=Component.UNDEFINED, sequences=Component.UNDEFINED, nodeFillColor=Component.UNDEFINED, colorScheme=Component.UNDEFINED, customColors=Component.UNDEFINED, allowPanningAndZooming=Component.UNDEFINED, allowPanningandZooming=Component.UNDEFINED, labelInterval=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'height', 'width', 'sequences', 'nodeFillColor', 'colorScheme', 'customColors', 'allowPanningAndZooming']
        self._type = 'FornaContainer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'height', 'width', 'sequences', 'nodeFillColor', 'colorScheme', 'customColors', 'allowPanningAndZooming']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FornaContainer, self).__init__(**args)
