# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GenomeViewer(Component):
    """A GenomeViewer component.


Keyword arguments:
- id (string; optional): The ID used to identify this component in Dash callbacks.
- genomedata (string; optional)
- trackdata (string; optional)
- trackindex (string; optional)
- range (string; optional)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, genomedata=Component.UNDEFINED, trackdata=Component.UNDEFINED, trackindex=Component.UNDEFINED, range=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'genomedata', 'trackdata', 'trackindex', 'range']
        self._type = 'GenomeViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'genomedata', 'trackdata', 'trackindex', 'range']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GenomeViewer, self).__init__(**args)
