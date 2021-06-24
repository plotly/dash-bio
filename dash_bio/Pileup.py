# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Pileup(Component):
    """A Pileup component.
The Pileup component is a genome visualization component
developed by the the Hammerlab. It uses an
example integration of pileup.js and React (https://www.npmjs.com/package/pileup).

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- className (string; optional):
    className of the component div.

- range (dict; optional):
    Object defining genomic location.     Of the format: {contig:
    'chr17', start: 7512384, stop: 7512544}.

    `range` is a dict with keys:

    - contig (string; optional):
        Name of contig to display. (ie. chr17).

    - start (number; optional):
        Start location to display.

    - stop (number; optional):
        Stop location to display.

- reference (dict; optional):
    Object defining genomic reference.

    `reference` is a dict with keys:

    - label (string; optional):
        Label to display by reference.

    - url (string; optional):
        Url of 2bit file.
        https://genome.ucsc.edu/goldenPath/help/twoBit.html.

- style (dict; optional):
    Generic style overrides on the plot div.

- tracks (list of dicts; optional):
    Array of configuration objects defining tracks initially displayed
    when app launches.     See
    https://github.com/hammerlab/pileup.js#usage.

    `tracks` is a list of dicts with keys:

    - label (string; optional):
        Label to display by track.

    - source (a value equal to: 'bam', 'alignmentJson', 'variantJson', 'featureJson', 'idiogramJson', 'cytoBand', 'vcf', 'twoBit', 'bigBed', 'GAReadAlignment', 'GAVariant', 'GAFeature', 'GAGene'; optional):
        Data source to visualize. Must be one of             (bam,
        vcf, alignmentJson, variantJson, featureJson, idiogramJson,
        cytoBand,             vcf, twoBit, bigBed, GAReadAlignment,
        GAVariant, GAFeature, GAGene). For more info on
        data source types supported by pileup.js see
        https://github.com/hammerlab/pileup.js/blob/master/src/main/pileup.js.

    - sourceOptions (optional):
        Options that define data source.             Options depend on
        the source selected.

    - viz (a value equal to: 'coverage', 'genome', 'genes', 'features', 'idiogram', 'location', 'scale', 'variants', 'genotypes', 'pileup'; optional):
        Name of visualization. Must be one of             (coverage,
        genome, genes, features, idiogram, location, scale,
        variants, genotypes, or pileup). For more info on
        visualization             types supported by pileup.js see
        https://github.com/akmorrow13/pileup.js/blob/master/src/main/pileup.js.

    - vizOptions (optional):
        Options that define viz details.             Options depend on
        the viz type selected."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, range=Component.UNDEFINED, reference=Component.UNDEFINED, tracks=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'className', 'range', 'reference', 'style', 'tracks']
        self._type = 'Pileup'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'className', 'range', 'reference', 'style', 'tracks']
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
