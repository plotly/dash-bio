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
    Of the format: {contig: 'chr17', start: 7512384, stop: 7512544}. range has the following type: dict containing keys 'contig', 'start', 'stop'.
Those keys have the following types:
  - contig (string; optional): Name of contig to display. (ie. chr17)
  - start (number; optional): Start location to display
  - stop (number; optional): Stop location to display
- reference (dict; optional): Object defining genomic reference. reference has the following type: dict containing keys 'label', 'url', 'stop'.
Those keys have the following types:
  - label (string; optional): Label to display by reference
  - url (string; optional): Url of 2bit file.
         https://genome.ucsc.edu/goldenPath/help/twoBit.html
  - stop (number; optional): Stop location to display
- tracks (dict; optional): Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/hammerlab/pileup.js#usage. tracks has the following type: list of dicts containing keys 'viz', 'label', 'source', 'sourceOptions'.
Those keys have the following types:
  - viz (optional): Name of visualization.
            (ie coverage, genome, genes, etc.)
  - label (string; optional): Label to display by track
  - source (optional): Data source to visualize.
            (ie bam, vcf, alignmentJson, GAVariant, etc.)
  - sourceOptions (optional): Options that define data source.
            Options depend on the source selected."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, range=Component.UNDEFINED, reference=Component.UNDEFINED, tracks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'style', 'className', 'range', 'reference', 'tracks']
        self._type = 'Pileup'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'style', 'className', 'range', 'reference', 'tracks']
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
