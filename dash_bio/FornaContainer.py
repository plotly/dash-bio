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
- sequences (dict; optional): The molecules that will be displayed. sequences has the following type: list of dicts containing keys 'sequence', 'structure', 'options'.
Those keys have the following types:
  - sequence (string; required): A string representing the RNA nucleotide sequence of
the RNA molecule.
  - structure (string; required): A dot-bracket string
(https://software.broadinstitute.org/software/igv/RNAsecStructure)
that specifies the secondary structure of the RNA
molecule.
  - options (dict; optional): Additional options to be applied to the rendering of
the RNA molecule. options has the following type: dict containing keys 'applyForce', 'circularizeExternal', 'labelInterval', 'name', 'avoidOthers'.
Those keys have the following types:
  - applyForce (boolean; optional): Indicate whether the force-directed layout will be
applied to the displayed molecule. Enabling this
option allows users to change the layout of the
molecule by selecting and dragging the individual
nucleotide nodes. True by default.
  - circularizeExternal (boolean; optional): This only makes sense in connection with the
applyForce argument. If it's true, the external
loops will be arranged in a nice circle. If false,
they will be allowed to flop around as the force
layout dictates. True by default.
  - labelInterval (number; optional): Change how often nucleotide numbers are labelled
with their number. 10 by default.
  - name (string; optional): The molecule name; this is used in custom color
scales.
  - avoidOthers (boolean; optional): Whether or not this molecule should "avoid" other
molecules in the map.
- nodeFillColor (string; optional): The fill color for all of the nodes. This will override any
color scheme defined in colorScheme.
- colorScheme (a value equal to: 'sequence', 'structure', 'positions'; default 'sequence'): The color scheme that is used to color the nodes.
- allowPanningAndZooming (boolean; optional): Allow users to zoom in and pan the display. If this is enabled,
then pressing the 'c' key on the keyboard will center the view."""
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, height=Component.UNDEFINED, width=Component.UNDEFINED, sequences=Component.UNDEFINED, nodeFillColor=Component.UNDEFINED, colorScheme=Component.UNDEFINED, allowPanningAndZooming=Component.UNDEFINED, allowPanningandZooming=Component.UNDEFINED, labelInterval=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'height', 'width', 'sequences', 'nodeFillColor', 'colorScheme', 'allowPanningAndZooming']
        self._type = 'FornaContainer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'height', 'width', 'sequences', 'nodeFillColor', 'colorScheme', 'allowPanningAndZooming']
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
