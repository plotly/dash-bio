# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class GenomeViewer(Component):
    """A GenomeViewer component.
Dash GenomeViewer is a library used to analyze and interpret
Please checkout the Dash Bio repository
on github to learn more about this API.

Keyword arguments:
- id (string; required): The ID used to identify this component in Dash callbacks
and used to identify Ideogram instances.
- genomedata (string; required): URL or data string of genome data, in .2bit format
- trackdata (string; required): Track data, in .bam format
- trackindex (string; required): Track index for track data, in .bam.bai style
- contig (string; required): Name of contig
- start (number; required): First basis pair
- stop (number; required): Last basis pair
- showscale (boolean; optional): If True, display a scale with the number of represented
basis pairs.
- showlocation (boolean; optional): If True, display the number of the central basis pair.
- showvariants (boolean; optional): If True, show possible variants.
- variantdata (string; optional): Variant data
- showgenes (boolean; optional): If True, the location of genes is displayed.
- genedata (string; required): Gene data.
- showcoverage (boolean; optional): If True, coverage is shown.
- compare (boolean; optional): If True, (???)

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, genomedata=Component.REQUIRED, trackdata=Component.REQUIRED, trackindex=Component.REQUIRED, contig=Component.REQUIRED, start=Component.REQUIRED, stop=Component.REQUIRED, showscale=Component.UNDEFINED, showlocation=Component.UNDEFINED, showvariants=Component.UNDEFINED, variantdata=Component.UNDEFINED, showgenes=Component.UNDEFINED, genedata=Component.REQUIRED, showcoverage=Component.UNDEFINED, compare=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'genomedata', 'trackdata', 'trackindex', 'contig', 'start', 'stop', 'showscale', 'showlocation', 'showvariants', 'variantdata', 'showgenes', 'genedata', 'showcoverage', 'compare']
        self._type = 'GenomeViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'genomedata', 'trackdata', 'trackindex', 'contig', 'start', 'stop', 'showscale', 'showlocation', 'showvariants', 'variantdata', 'showgenes', 'genedata', 'showcoverage', 'compare']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in [u'id', u'genomedata', u'trackdata', u'trackindex', u'contig', u'start', u'stop', u'genedata']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(GenomeViewer, self).__init__(**args)

    def __repr__(self):
        if(any(getattr(self, c, None) is not None
               for c in self._prop_names
               if c is not self._prop_names[0])
           or any(getattr(self, c, None) is not None
                  for c in self.__dict__.keys()
                  if any(c.startswith(wc_attr)
                  for wc_attr in self._valid_wildcard_attributes))):
            props_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self._prop_names
                                      if getattr(self, c, None) is not None])
            wilds_string = ', '.join([c+'='+repr(getattr(self, c, None))
                                      for c in self.__dict__.keys()
                                      if any([c.startswith(wc_attr)
                                      for wc_attr in
                                      self._valid_wildcard_attributes])])
            return ('GenomeViewer(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'GenomeViewer(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
