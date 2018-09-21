# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashIdeogram(Component):
    """A DashIdeogram component.


Keyword arguments:
- id (string; optional): The ID used to identify this compnent in Dash callbacks
- config (dict; optional)
- style (dict; optional): The input's inline styles
- className (string; optional): The class of the input element
- label (string; optional): The label
- ancestors (dict; optional)
- annotations (list; optional)
- annotationHeight (number; optional)
- annotationsLayout (number; optional)
- annotationsColor (string; optional)
- annotationsPath (string; optional)
- annotationTracks (list; optional)
- assembly (string; optional)
- barWidth (number; optional)
- brush (string; optional)
- container (string; optional): CSS styling and the id of the container holding the Ideogram in react-ideogram.js
- chrHeight (number; optional)
- chrMargin (number; optional)
- chrWidth (number; optional)
- chromosomes (list; optional)
- dataDir (string; optional): The directory where data is taken from to create the genome graphs.
- histogramScaling (string; optional)
- heatmaps (list; optional)
- organism (string; optional): The organism, whos genome is to be viewed and manipulated
- orientation (string; optional): The orientation of the chromesomes either being vertical or horizontal
- perspective (string; optional)
- ploidy (number; optional)
- ploidyDesc (list; optional)
- rangeSet (list; optional)
- rotatable (boolean; optional)
- resolution (number; optional)
- rows (number; optional)
- sex (string; optional)
- showChromosomeLabels (boolean; optional)
- showBandLabels (boolean; optional): Enable or disable the band labels
- showAnnotTooltip (boolean; optional)
- showFullyBanded (boolean; optional)
- showNonNuclearChromosomes (boolean; optional)

Available events: """
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, config=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, label=Component.UNDEFINED, ancestors=Component.UNDEFINED, annotations=Component.UNDEFINED, annotationHeight=Component.UNDEFINED, annotationsLayout=Component.UNDEFINED, annotationsColor=Component.UNDEFINED, annotationsPath=Component.UNDEFINED, annotationTracks=Component.UNDEFINED, assembly=Component.UNDEFINED, barWidth=Component.UNDEFINED, brush=Component.UNDEFINED, container=Component.UNDEFINED, chrHeight=Component.UNDEFINED, chrMargin=Component.UNDEFINED, chrWidth=Component.UNDEFINED, chromosomes=Component.UNDEFINED, dataDir=Component.UNDEFINED, histogramScaling=Component.UNDEFINED, heatmaps=Component.UNDEFINED, organism=Component.UNDEFINED, orientation=Component.UNDEFINED, onBrushMove=Component.UNDEFINED, onBrushMoveCallback=Component.UNDEFINED, onDidRotate=Component.UNDEFINED, onDrawAnnots=Component.UNDEFINED, onLoad=Component.UNDEFINED, onWillShowAnnotTooltip=Component.UNDEFINED, perspective=Component.UNDEFINED, ploidy=Component.UNDEFINED, ploidyDesc=Component.UNDEFINED, rangeSet=Component.UNDEFINED, rotatable=Component.UNDEFINED, resolution=Component.UNDEFINED, rows=Component.UNDEFINED, sex=Component.UNDEFINED, showChromosomeLabels=Component.UNDEFINED, showBandLabels=Component.UNDEFINED, showAnnotTooltip=Component.UNDEFINED, showFullyBanded=Component.UNDEFINED, showNonNuclearChromosomes=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'config', 'style', 'className', 'label', 'ancestors', 'annotations', 'annotationHeight', 'annotationsLayout', 'annotationsColor', 'annotationsPath', 'annotationTracks', 'assembly', 'barWidth', 'brush', 'container', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'dataDir', 'histogramScaling', 'heatmaps', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'rotatable', 'resolution', 'rows', 'sex', 'showChromosomeLabels', 'showBandLabels', 'showAnnotTooltip', 'showFullyBanded', 'showNonNuclearChromosomes']
        self._type = 'DashIdeogram'
        self._namespace = 'dash_ideogram'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['id', 'config', 'style', 'className', 'label', 'ancestors', 'annotations', 'annotationHeight', 'annotationsLayout', 'annotationsColor', 'annotationsPath', 'annotationTracks', 'assembly', 'barWidth', 'brush', 'container', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'dataDir', 'histogramScaling', 'heatmaps', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'rotatable', 'resolution', 'rows', 'sex', 'showChromosomeLabels', 'showBandLabels', 'showAnnotTooltip', 'showFullyBanded', 'showNonNuclearChromosomes']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(DashIdeogram, self).__init__(**args)

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
            return ('DashIdeogram(' + props_string +
                   (', ' + wilds_string if wilds_string != '' else '') + ')')
        else:
            return (
                'DashIdeogram(' +
                repr(getattr(self, self._prop_names[0], None)) + ')')
