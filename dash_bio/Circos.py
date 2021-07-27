# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Circos(Component):
    """A Circos component.
Dash Circos is a library used to analyze and interpret
data using a circular layout, based on the popular
'Circos' graph. This Dash Bio component is a useful tool
for showcasing relationships bewtween data/datasets in a
beautiful way. Please checkout the Dash Bio repository
on github to learn more about this API.

Keyword arguments:

- id (string; optional):
    The ID of the component to be used in Dash callbacks.

- config (dict; optional):
    Configuration of overall layout of the graph.

- enableDownloadSVG (boolean; optional):
    Allow for an SVG snapshot of the Circos graph to be downloaded.

- enableZoomPan (boolean; optional):
    Allow for zooming and panning the Circos graph.

- eventDatum (dict; optional):
    A Dash prop that returns data on clicking or hovering of the
    tracks. Depending on what is specified for prop \"selectEvent\".

- layout (list of dicts; required):
    The overall layout of the Circos graph, provided as a list of
    dictionaries.

    `layout` is a list of dicts with keys:

    - color (string; required):
        The color of the block.

    - id (string; required):
        The id of the block, where it will recieve data from the
        specified \"track\" id.

    - label (string; required):
        The labels of the block.

    - len (number; required):
        The length of the block.

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
    Tracks that specify specific layouts. For a complete list of
    tracks and usage, please check the docs.

    `tracks` is a list of dicts with keys:

    - color (dict; optional):
        Specify which dictonary key to grab color values from, in the
        passed in dataset. This can be a string or an object. If using
        a string, you can specify hex, RGB, and colors from d3 scale
        chromatic (Ex: RdYlBu). The key \"name\" is required for this
        dictionary, where the input for \"name\" points to some list
        of dictionaries color values. Ex: \"color\": {\"name\": \"some
        key that refers to color in a data set\"}.

        `color` is a string

      Or dict with keys:

        - name (string; required)

    - config (dict; optional):
        The layout of the tracks, where the user can configure
        innerRadius, outterRadius, ticks, labels, and more.

    - data (list; required):
        The data that makes up the track. It can be a Json object.

    - id (string; optional):
        The id of a specific piece of track data.

    - tooltipContent (dict; optional):
        Specify what data for tooltipContent is displayed. The entry
        for the \"name\" key, is any of the keys used in the data
        loaded into tracks. Ex: \"tooltipContent\": {\"name\":
        \"block_id\"}, To display all data in the dataset use \"all\"
        as the entry for the key \"name\". Ex: \"tooltipContent\":
        {\"name\": \"all\"} Ex: This will return (source) + ' > ' +
        (target) + ': ' + (targetEnd)'. \"tooltipContent\": {
        \"source\": \"block_id\",                 \"target\":
        \"position\",                 \"targetEnd\": \"value\"
        }, Ex: This will return (source)(sourceID) + ' > ' +
        (target)(targetID) + ': ' (target)(targetEnd)'.
        \"tooltipContent\": {                 \"source\": \"source\",
        \"sourceID\": \"id\",                 \"target\": \"target\",
        \"targetID\": \"id\",                 \"targetEnd\": \"end\"
        }.

        `tooltipContent` is a string | dict with keys:

        - name (string; required)

              Or dict with keys:

        - source (string; required)

        - sourceID (string; optional)

        - target (string; required)

        - targetEnd (string; required)

        - targetID (string; optional)

    - type (a value equal to: 'CHORDS', 'HEATMAP', 'HIGHLIGHT', 'HISTOGRAM', 'LINE', 'SCATTER', 'STACK', 'TEXT'; optional):
        Specify the type of track this is. Please check the docs for a
        list of tracks you can use, and ensure the name is typed in
        all capitals."""
    @_explicitize_args
    def __init__(self, enableDownloadSVG=Component.UNDEFINED, enableZoomPan=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, eventDatum=Component.UNDEFINED, selectEvent=Component.UNDEFINED, layout=Component.REQUIRED, config=Component.UNDEFINED, size=Component.UNDEFINED, tracks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'config', 'enableDownloadSVG', 'enableZoomPan', 'eventDatum', 'layout', 'selectEvent', 'size', 'style', 'tracks']
        self._type = 'Circos'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'config', 'enableDownloadSVG', 'enableZoomPan', 'eventDatum', 'layout', 'selectEvent', 'size', 'style', 'tracks']
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
