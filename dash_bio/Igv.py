# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Igv(Component):
    """An Igv component.
The Igv component is an interactive genome visualization component
developed by the Integrative Genomics Viewer (IGV) team. It uses an
example integration of igv.js and React (https://www.npmjs.com/package/igv).

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    className of the component div.

- genome (string; optional):
    String identifier defining genome (e.g. \"hg19\"). See
    https://github.com/igvteam/igv.js/wiki/Reference-Genome     for
    details and list of supported identifiers. Note: One (but only
    one) of     either genome or reference properties must be set. If
    both are set,     the genome property will be ignored.

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

- locus (string; optional):
    Initial genomic location(s). Either a string or an array of
    strings.     If an array a viewport is created for each location.

- minimumBases (number; optional):
    Minimum window size in base pairs when zooming in.

- reference (dict; optional):
    Object defining reference genome. see
    https://github.com/igvteam/igv.js/wiki/Reference-Genome     Note:
    One (but only one) of either genome or reference properties must
    be set. If both are set,     the genome property will be ignored.

- style (dict; optional):
    Generic style overrides on the plot div.

- tracks (list; optional):
    Array of configuration objects defining tracks initially displayed
    when app launches.     see
    https://github.com/igvteam/igv.js/wiki/Tracks-2.0."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_bio'
    _type = 'Igv'
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, genome=Component.UNDEFINED, reference=Component.UNDEFINED, locus=Component.UNDEFINED, minimumBases=Component.UNDEFINED, tracks=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'genome', 'loading_state', 'locus', 'minimumBases', 'reference', 'style', 'tracks']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'genome', 'loading_state', 'locus', 'minimumBases', 'reference', 'style', 'tracks']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Igv, self).__init__(**args)
