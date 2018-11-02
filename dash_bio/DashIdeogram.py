# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class DashIdeogram(Component):
    """A DashIdeogram component.
The Dash Ideogram is used to draw and animate genome-wide
datasets for organisms such as an human, mouse, and any
other eukaryotes. The Ideogram can be used to compare
homologous features bewtween chromosomes, and depict,
haploid, diploid, aneuploidy genomes. It can also display
annotations using histograms, overlays, and simple side
by side tracks to show important genomic data.

Go here to see it in action: https://eweitz.github.io/ideogram/

Keyword arguments:
- localOrganism (dict; optional)
- annotationsData (string; optional)
- id (string; optional): The ID used to identify this component in Dash callbacks
- style (dict; optional): The component's inline styles
- className (string; optional): The CSS class of the component wrapper
- label (string; optional): Delete
- ancestors (dict; optional): Unspecified
- annotations (list; optional): A list of annotation objects. Each annotation object 
 has at least a chromosome name (chr), start coordinate (start), 
 and stop coordinate (stop). Annotation objects can also have a 
 name, color, shape, and track index.
- annotationHeight (number; optional): The height of each annotation.
- annotationsLayout (number; optional): Default: "tracks". The layout of this ideogram's annotations. 
It can be one of "tracks", "histogram", or "overlay".

Tracks: Lay out annotations in tracks beside each chromosome.

Histogram: Layout annotations in a histogram. Clusters annotations
by location. Each cluster/bin is shown as a height of a bar to represent
number of annotations on genomic range.

Overlay: Lay out annotations directly over chromsomes.
- annotationsColor (string; optional): Default: "#F00" (i.e., red). The color of each annotation.
- annotationsPath (string; optional): An absolute or relative URL directing to a JSON file containing
annotation objects (JSON).
- annotationTracks (list; optional): Unspecified
- assembly (string; optional): Default: latest RefSeq assembly for specified organism. The genome assembly to display. 
Takes assembly name (e.g. "GRCh37"), 
RefSeq accession (e.g. "GCF_000306695.2"), 
or GenBank accession (e.g. "GCA_000005005.5")
- barWidth (number; optional): Default: 3. The pixel width of bars drawn when annotationsLayout: 'histogram'.
- brush (string; optional): Default: null
Genomic coordinate range (e.g. "chr1:104325484-119977655") for a brush on a 
chromosome. Useful when ideogram consists of one chromosome and you want to be 
able to focus on a region within that chromosome, 
and create an interactive sliding window to other regions
- brushData (string; optional): A dash callback that is activated when the 'brush' prop is used in component.
It will return an dictionary like so:

{'start': <value>, 'end': <value>, 'extent': <value>}

where start is the left most edge, end is right most edge, and extent is 
the total width of the brush.
- container (string; optional): CSS styling and the id of the container holding the Ideogram in 
react-ideogram.js, this is where all the d3 magic happens.
- homology (dict; optional): Default: "ideogram-container"
Used to compare two chromosomes with each other.
The keys "chrOne" and "chrTwo" represent one chromosome each. Organism is the 
specified in taxID or name. Start is an array
indicating start one and start two in this order, for specified
organism.
Stop is array indicating, stop one, and stop two, in this order
for specified organism.
Ex: homology={
                    "chrOne": {
                        "organism": "9606",
                        "start": [50000, 155701383],
                        "stop": [900000, 156030895]
                    },
                    "chrTwo": {
                        "organism": "10090",
                        "start": [10001, 50000000],
                        "stop": [2781479, 57217415]
                    }
                }
- chrHeight (number; optional): Default:400. The pixel height of the tallest chromosome in the ideogram
- chrMargin (number; optional): Default: 10. The pixel space of margin bewteen each chromosome.
- chrWidth (number; optional): Default 10. The pixel width of each chromosome.
- chromosomes (list | dict; optional): Default: all chromosomes in assembly. A list of the names of chromosomes to 
display. Useful for depicting a subset of the chromosomes in the genome, 
e.g. a single chromosome.

If Homology (between two different species):
Ex: chromosomes={
            'human': ['1'],
            'mouse': ['4']
        }

        General case to specify specific chromosomes:
        Ex: chromosomes=['1', '2']
- dataDir (string; optional): Default: https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/
Absolute or relative URL of the directory 
containing data needed to draw banded chromosomes.
You will need to set up you're own database to grab data from
for custom data.
- fullChromosomeLabels (boolean; optional): Unspecified
- histogramScaling (string; optional): Default: "absolute". One of "absolute" or "relative". The technique to use in scaling the height of histogram bars. The "absolute" value sets bar height relative to tallest bar in all chromosomes, 
while "relative" sets bar height relative to tallest bar in each chromosome.
- heatmaps (list; optional): This is a work in progess and will hopefully be fixed in future releases.
- isAnnotationHovered (boolean; optional)
- filterable (number; optional): Unspecified
- organism (string | list; optional): Organism(s) to show chromosomes for. Supply organism's name as a string (e.g. "human") or organism's NCBI Taxonomy ID (taxid, e.g. 9606) 
 to display chromosomes from a single organism, or an array of organisms' 
 names or taxids to display chromosomes from multiple species.
- orientation (string; optional): Default: horizontal. The orientation of chromosomes on the page.
- perspective (string; optional): Unspecified
- ploidy (number; optional): Default 1: The ploidy - number of chromosomes to depict for each chromosome
set.
- ploidyDesc (list; optional): Undefined
- rangeSet (list; optional): Undefined
- rotatable (boolean; optional): Default: True. Whether chromosomes are rotatable on click.
- rotated (boolean; optional): Dash callback that returns True if rotated, and false if not.
- resolution (number; optional): Default: highest resolution available for specified genome assembly. 
The resolution of cytogenetic bands to show for each chromosome. 
The quantity refers to approximate value in bands per haploid set (bphs). 
One of 450, 550, or 850.
- rows (number; optional): Default 1: Number of rows to arrange chromosomes into. 
Useful for putting ideogram into a small container, 
or when dealing with genomes that have many chromosomes. 
Note: Not fully working needs to be fixed by developer.
- sex (string; optional): Default: Male. The biological sex of the organism. 
Useful for omitting chromosome Y in female mammals. 
Currently only supported for organisms that use XY sex-determination.
- showChromosomeLabels (boolean; optional): Default: true. Whether to show chromosome labels, e.g. 1, 2, 3, X, Y.
- showBandLabels (boolean; optional): Default: false. Whether to show cytogenetic band labels, e.g. 1q21
- showAnnotTooltip (boolean; optional): Default: true. Whether to show a tooltip upon mousing over an annotation.
- showFullyBanded (boolean; optional): Default: true. Whether to show fully banded chromosomes for genomes 
that have sufficient data. Useful for showing simpler chromosomes of 
cytogenetically well-characterized organisms, e.g. human, beside chromosomes of 
less studied organisms, e.g. chimpanzee.
- showNonNuclearChromosomes (boolean; optional): Default: false. Whether to show non-nuclear chromosomes, 
e.g. for mitochondrial (MT) and chloroplast (CP) DNA.

Available events: """
    @_explicitize_args
    def __init__(self, localOrganism=Component.UNDEFINED, annotationsData=Component.UNDEFINED, onMouseOver=Component.UNDEFINED, id=Component.UNDEFINED, style=Component.UNDEFINED, className=Component.UNDEFINED, label=Component.UNDEFINED, ancestors=Component.UNDEFINED, annotations=Component.UNDEFINED, annotationHeight=Component.UNDEFINED, annotationsLayout=Component.UNDEFINED, annotationsColor=Component.UNDEFINED, annotationsPath=Component.UNDEFINED, annotationTracks=Component.UNDEFINED, assembly=Component.UNDEFINED, barWidth=Component.UNDEFINED, brush=Component.UNDEFINED, brushData=Component.UNDEFINED, container=Component.UNDEFINED, homology=Component.UNDEFINED, chrHeight=Component.UNDEFINED, chrMargin=Component.UNDEFINED, chrWidth=Component.UNDEFINED, chromosomes=Component.UNDEFINED, dataDir=Component.UNDEFINED, fullChromosomeLabels=Component.UNDEFINED, histogramScaling=Component.UNDEFINED, heatmaps=Component.UNDEFINED, isAnnotationHovered=Component.UNDEFINED, filterable=Component.UNDEFINED, organism=Component.UNDEFINED, orientation=Component.UNDEFINED, onBrushMove=Component.UNDEFINED, onBrushMoveCallback=Component.UNDEFINED, onDidRotate=Component.UNDEFINED, onDrawAnnots=Component.UNDEFINED, onLoad=Component.UNDEFINED, onWillShowAnnotTooltip=Component.UNDEFINED, perspective=Component.UNDEFINED, ploidy=Component.UNDEFINED, ploidyDesc=Component.UNDEFINED, rangeSet=Component.UNDEFINED, rotatable=Component.UNDEFINED, rotated=Component.UNDEFINED, resolution=Component.UNDEFINED, rows=Component.UNDEFINED, sex=Component.UNDEFINED, showChromosomeLabels=Component.UNDEFINED, showBandLabels=Component.UNDEFINED, showAnnotTooltip=Component.UNDEFINED, showFullyBanded=Component.UNDEFINED, showNonNuclearChromosomes=Component.UNDEFINED, **kwargs):
        self._prop_names = ['localOrganism', 'annotationsData', 'id', 'style', 'className', 'label', 'ancestors', 'annotations', 'annotationHeight', 'annotationsLayout', 'annotationsColor', 'annotationsPath', 'annotationTracks', 'assembly', 'barWidth', 'brush', 'brushData', 'container', 'homology', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'dataDir', 'fullChromosomeLabels', 'histogramScaling', 'heatmaps', 'isAnnotationHovered', 'filterable', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'rotatable', 'rotated', 'resolution', 'rows', 'sex', 'showChromosomeLabels', 'showBandLabels', 'showAnnotTooltip', 'showFullyBanded', 'showNonNuclearChromosomes']
        self._type = 'DashIdeogram'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_events = []
        self.available_properties = ['localOrganism', 'annotationsData', 'id', 'style', 'className', 'label', 'ancestors', 'annotations', 'annotationHeight', 'annotationsLayout', 'annotationsColor', 'annotationsPath', 'annotationTracks', 'assembly', 'barWidth', 'brush', 'brushData', 'container', 'homology', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'dataDir', 'fullChromosomeLabels', 'histogramScaling', 'heatmaps', 'isAnnotationHovered', 'filterable', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'rotatable', 'rotated', 'resolution', 'rows', 'sex', 'showChromosomeLabels', 'showBandLabels', 'showAnnotTooltip', 'showFullyBanded', 'showNonNuclearChromosomes']
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
