# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Pileup(Component):
    """A Pileup component.
The Pileup component is an genome visualization component
developed by the the Hammerlab. It uses an
example integration of pileup.js and React (https://www.npmjs.com/package/pileup).

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components in callbacks.
The ID needs to be unique across all of the components in an app.
- style (dict; optional): Generic style overrides on the plot div
- className (string; optional): className of the component div.
- range (dict; optional): Object defining genomic location.
    Of the format: {contig: 'chr17', start: 7512384, stop: 7512544}
- tracks (list; optional): Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/hammerlab/pileup.js#usage"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, range=Component.UNDEFINED, tracks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'style', 'className', 'range', 'tracks']
        self._type = 'Pileup'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'style', 'className', 'range', 'tracks']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Pileup, self).__init__(**args)
