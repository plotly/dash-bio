# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Circos(Component):
    """A Circos component.
Dash Circos is a library used to analyze and interpret
data using a circular layout, based on the popular
'Circos' graph. This Dash Bio component is a useful tool
for showcasing relationships between data/datasets in an
attractive, circular layout to highlight feature
interactions and relationships.

Keyword arguments:

- id (string; optional):
    The ID of the component to be used in Dash callbacks.

- config (dict; optional):
    Configuration options for the graph layout.

    `config` is a dict with keys:

    - cornerRadius (number; optional)

    - gap (number; optional)

    - innerRadius (number; optional)

    - labels (dict; optional)

        `labels` is a dict with keys:

        - color (string; optional)

        - display (boolean; optional)

        - radialOffset (number; optional)

        - size (number; optional)

    - outerRadius (number; optional)

    - ticks (dict; optional)

        `ticks` is a dict with keys:

        - color (string; optional)

        - display (boolean; optional)

        - labelColor (string; optional)

        - labelDenominator (number; optional)

        - labelDisplay0 (boolean; optional)

        - labelFont (string; optional)

        - labelSize (number; optional)

        - labelSpacing (number; optional)

        - labelSuffix (string; optional)

        - labels (boolean; optional)

        - majorSpacing (number; optional)

        - size (dict; optional)

            `size` is a dict with keys:

            - major (number; optional)

            - minor (number; optional)

        - spacing (number; optional)

- enableDownloadSVG (boolean; optional):
    Allow for an SVG snapshot of the Circos graph to be downloaded.

- enableZoomPan (boolean; optional):
    Allow for zooming and panning the Circos graph.

- eventDatum (dict; optional):
    A Dash prop that returns data on clicking or hovering of the
    tracks, depending on what is specified for prop \"selectEvent\".

- layout (list of dicts; required):
    Data used to draw Circos layout blocks.

    `layout` is a list of dicts with keys:

    - color (string; required):
        The color of the block.

    - id (string; required):
        The id of the block.

    - label (string; required):
        The labels of the block.

    - len (number; required):
        The length of the block.

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- selectEvent (dict; optional):
    A dictionary used to choose whether tracks should return data on
    click, hover, or both, with the dash prop \"eventDatum\". The keys
    of the dictionary represent the index of the list specified for
    \"tracks\". Ex: selectEvent={         \"0\": \"hover\",
    \"1\": \"click\",         \"2\": \"both\"     },.

- size (number; default 800):
    The overall size of the SVG container holding the graph. Set on
    initilization and unchangeable thereafter.

- style (dict; optional):
    The CSS styling of the div wrapping the component.

- tracks (list of dicts; optional):
    A list of tracks displayed on top of the base Circos layout.

    `tracks` is a list of dicts with keys:

    - config (dict; optional):
        The track configuration. Depending on the track type it will
        be a dict with different keys. See the docs section about a
        given track type to learn more about available configuration
        options.

    - data (list of dicts; optional):
        The data that makes up the track, passed as a list of dicts
        with different keys depending on the track type. See the docs
        section about a given track type to learn more about the
        required data format.

    - id (string; optional):
        The id of the track.

    - type (a value equal to: 'CHORDS', 'HEATMAP', 'HIGHLIGHT', 'HISTOGRAM', 'LINE', 'SCATTER', 'STACK', 'TEXT'; optional):
        The type of the track."""
    @_explicitize_args
    def __init__(self, enableDownloadSVG=Component.UNDEFINED, enableZoomPan=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, eventDatum=Component.UNDEFINED, selectEvent=Component.UNDEFINED, layout=Component.REQUIRED, config=Component.UNDEFINED, size=Component.UNDEFINED, tracks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'config', 'enableDownloadSVG', 'enableZoomPan', 'eventDatum', 'layout', 'loading_state', 'selectEvent', 'size', 'style', 'tracks']
        self._type = 'Circos'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'config', 'enableDownloadSVG', 'enableZoomPan', 'eventDatum', 'layout', 'loading_state', 'selectEvent', 'size', 'style', 'tracks']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in ['layout']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Circos, self).__init__(**args)
