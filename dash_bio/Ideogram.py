# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class Ideogram(Component):
    """An Ideogram component.
The Ideogram component is used to draw and animate genome-wide
datasets for organisms such as human, mouse, and any other
eukaryote. The Ideogram component can be used to compare
homologous features between chromosomes, and depict
haploid, diploid, aneuploid genomes. It can also display
annotations on genomic data using histograms and overlays.

Reference: https://eweitz.github.io/ideogram/
Component's props: https://github.com/eweitz/ideogram/blob/master/api.md

Keyword arguments:
- id (string; required): The ID used to identify this component in Dash callbacks and used to identify Ideogram
instances.
- style (dict; optional): The component's inline styles
- className (string; optional): The CSS class of the component wrapper
- accessToken (string; optional): OAuth 2.0 access token. Enables authentication and
authorization. This can be useful for controlling access to
private annotation data.
- ancestors (dict; optional): A map associating ancestor labels to colors. Used to color
chromosomes from different ancestors in polyploid genomes.
- annotations (dict; optional): A list of annotation objects. Annotation objects can also have a name, color, shape, and
track index. At the moment there is more keys specified and the docs need updating. annotations has the following type: list of dicts containing keys 'name', 'chr', 'start', 'stop', 'color', 'shape', 'index'.
Those keys have the following types:
  - name (string; optional)
  - chr (string; optional)
  - start (number; optional)
  - stop (number; optional)
  - color (string; optional)
  - shape (string; optional)
  - index (number; optional)
- annotationHeight (number; optional): Not used if annotationsLayout is set to "overlay".
The height of histogram bars or the size of annotations tracks symbols
- annotationsColor (string; default '#F00'): The color of each annotation.
- annotationsLayout (a value equal to: 'tracks', 'histogram', 'overlay'; default 'tracks'): Layout of ideogram annotations.
One of "tracks", "histogram", or "overlay".
"tracks": display annotations in tracks beside each chromosome.
"histogram": display annotations in a histogram. Clusters
annotations by location. Each cluster/bin is shown as a bar,
the height of which represents the number of annotations on
genomic range.

"overlay": display annotations directly over chromosomes.
- annotationsPath (string; optional): An absolute or relative URL directing to a JSON file containing
annotation objects (JSON).
- annotationsData (string; optional): Use this prop in a dash callback to return annotationData when
hovered.  It is read-only, i.e., it cannot be used with
dash.dependencies.Output but only with dash.dependencies.Input
- annotationTracks (list of dicts; optional): A list of objects with metadata for each track, e.g., id,
display name, color, shape.
- assembly (string; optional): Default: latest RefSeq assembly for specified organism.
The genome assembly to display.
Takes assembly name (e.g., "GRCh37"),
RefSeq accession (e.g., "GCF_000306695.2"),
or GenBank accession (e.g., "GCA_000005005.5")
- barWidth (number; default 3): Pixel width of histogram bars.
Only used if annotationsLayout is set to "histogram".
- brush (string; optional): Genomic coordinate range (e.g., "chr1:104325484-119977655") for a brush on a
chromosome. Useful when ideogram consists of one chromosome and you want to be
able to focus on a region within that chromosome,
and create an interactive sliding window to other regions
- brushData (dict; optional): A dash callback that is activated when the 'brush' prop is
used.  It will return an dictionary like so: {'start': <value>,
'end': <value>, 'extent': <value>} where start is the left most
edge, end is right most edge, and extent is the total width of
the brush.  It is read-only, i.e., it cannot be used with
dash.dependencies.Output but only with dash.dependencies.Input. brushData has the following type: dict containing keys 'start', 'end', 'extent'.
Those keys have the following types:
  - start (string; optional)
  - end (string; optional)
  - extent (string; optional)
- chrHeight (number; default 400): The pixel height of the tallest chromosome in the ideogram
- chrMargin (number; default 10): The pixel space of margin between each chromosome.
- chrWidth (number; default 10): The pixel width of each chromosome.
- chromosomes (list of strings | dict; optional): A list of the names of chromosomes to display. Useful for
depicting a subset of the chromosomes in the genome, e.g., a
single chromosome.
If Homology (between two different species):
Ex: chromosomes={
      'human': ['1'],
      'mouse': ['4']
}
General case to specify specific chromosomes:
Ex: chromosomes=['1', '2']
- chromosomeScale (a value equal to: 'absolute', 'relative'; optional): Used when comparing multiple genomes.
"absolute": chromosomes will be scaled by base pairs in each
genome.
"relative": first chromosome in each genome is of equal length;
subsequent chromosomes will be scaled relative to the first
chromosome.
- container (string; optional): CSS styling and the id of the container holding the Ideogram in
react-ideogram.js, this is where all the d3 magic happens.
- dataDir (string; default 'https://unpkg.com/ideogram/dist/data/bands/native/'): Absolute or relative URL of the directory containing data
needed to draw banded chromosomes.  You will need to set up
your own database to grab data from a custom database.
- demarcateCollinearChromosomes (boolean; optional): Whether to demarcate colllinear chromosomes. Puts a dark border
around the perimeter of each track-chromosomes block in track
sets for chromosomes arranged in collinear geometry.
- geometry (a value equal to: 'collinear', 'parallel'; optional): The arrangement of chromosomes.
"collinear": arrange all chromosomes in one line.
"parallel": arrange chromosomes to be parallel to one another.
- heatmaps (dict; optional): Array of heatmap objects. Each heatmap object has a key string
and a thresholds array. The key property specifies the
annotations key value to depict in the heatmap. The thresholds
property specifies a list of two-element "threshold" lists,
where the first element is the threshold value and the second
is the threshold color. The threshold values are a list of
ranges to use in coloring the heatmap. Threshold values are
specified in ascending order. heatmaps has the following type: list of dicts containing keys 'key', 'thresholds'.
Those keys have the following types:
  - key (string; optional)
  - thresholds (list of lists; optional)
- histogramScaling (a value equal to: 'absolute', 'relative'; optional): Scaling of histogram bars height
Only used if annotationsLayout is set to "histogram".
One of "absolute" or "relative".
"absolute": sets bar height relative to tallest bar in all chromosomes.
"relative": sets bar height relative to tallest bar in each chromosome.
- homology (dict; optional): Used to compare two chromosomes.  The keys "chrOne" and
"chrTwo" represent one chromosome each. Organism is the taxID
or name.  Start is an array, containing start one and start
two, in this order. Stop is an array, containing stop one, and
stop two, in this order.  Ex: homology={ "chrOne": { organism":
"9606", "start": [50000, 155701383], "stop": [900000,
156030895] }, "chrTwo": { organism": "10090", "start": [10001,
50000000], "stop": [2781479, 57217415] } }. homology has the following type: dict containing keys 'chrOne', 'chrTwo'.
Those keys have the following types:
  - chrOne (dict; optional): chrOne has the following type: dict containing keys 'organism', 'start', 'stop'.
Those keys have the following types:
  - organism (string; required)
  - start (list of numbers; optional)
  - stop (list of numbers; optional)
  - chrTwo (dict; optional): chrTwo has the following type: dict containing keys 'organism', 'start', 'stop'.
Those keys have the following types:
  - organism (string; required)
  - start (list of numbers; optional)
  - stop (list of numbers; optional)
- filterable (boolean; optional): Whether annotations should be filterable or not.
- fullChromosomeLabels (boolean; optional): Whether to include abbreviation species name in chromosome
label. Used for homology.
- legend (dict; optional): legend has the following type: list of dicts containing keys 'name', 'rows'.
Those keys have the following types:
  - name (string; optional)
  - rows (dict; optional): rows has the following type: list of dicts containing keys 'name', 'color', 'shape'.
Those keys have the following types:
  - name (string; optional)
  - color (string; optional)
  - shape (a value equal to: 'circle', 'triangle', 'rectangle'; optional)
- organism (string | number; default 'human'): Organism(s) to show chromosomes for. Supply organism's name as
a string (e.g., "human") or organism's NCBI Taxonomy ID (taxid,
e.g., 9606) to display chromosomes from a single organism, or
an array of organisms' names or taxids to display chromosomes
from multiple species.
- orientation (a value equal to: 'vertical', 'horizontal'; optional): The orientation of chromosomes on the page.
- perspective (a value equal to: 'comparative'; optional): Use perspective: 'comparative' to enable annotations between
two chromosomes, either within the same organism or different
organisms. Used for homology.
- ploidy (number; default 1): The ploidy - number of chromosomes to depict for each
chromosome set.
- ploidyDesc (list of dicts; optional): Description of ploidy in each chromosome set in terms of
ancestry composition.
- rangeSet (list of dicts; optional): List of objects describing segments of recombination among
chromosomes in a chromosome set.
- resolution (number; optional): The resolution of cytogenetic bands to show for each
chromosome.  The quantity refers to an approximate value in
bands per haploid set (bphs).  One of 450, 550, or 850.
- rotatable (boolean; default True): Whether chromosomes are rotatable on click.
- rotated (boolean; optional): Dash callback that returns true if rotated, and false if not.
- rows (number; default 1): Number of rows to arrange chromosomes into. Useful for putting
ideogram into a small container, or when dealing with genomes
that have many chromosomes.
- sex (a value equal to: 'male', 'female'; optional): The biological sex of the organism. Useful for omitting
chromosome Y in female animals.  Currently only supported for
organisms that use XY sex-determination.
- showAnnotTooltip (boolean; default True): Whether to show a tooltip upon mousing over an annotation.
- showBandLabels (boolean; default False): Whether to show cytogenetic band labels, e.g., 1q21.
- showChromosomeLabels (boolean; default True): Whether to show chromosome labels, e.g., 1, 2, 3, X, Y.
- showFullyBanded (boolean; default True): Whether to show fully banded chromosomes for genomes that have
sufficient data. Useful for showing simpler chromosomes of
cytogenetically well-characterized organisms, e.g., human,
beside chromosomes of less studied organisms, e.g., chimpanzee.
- showNonNuclearChromosomes (boolean; default False): Whether to show non-nuclear chromosomes,
e.g., for mitochondrial (MT) and chloroplast (CP) DNA."""
    @_explicitize_args
    def __init__(self, id=Component.REQUIRED, style=Component.UNDEFINED, className=Component.UNDEFINED, accessToken=Component.UNDEFINED, ancestors=Component.UNDEFINED, annotations=Component.UNDEFINED, annotationHeight=Component.UNDEFINED, annotationsColor=Component.UNDEFINED, annotationsLayout=Component.UNDEFINED, annotationsPath=Component.UNDEFINED, annotationsData=Component.UNDEFINED, annotationTracks=Component.UNDEFINED, assembly=Component.UNDEFINED, barWidth=Component.UNDEFINED, brush=Component.UNDEFINED, brushData=Component.UNDEFINED, chrHeight=Component.UNDEFINED, chrMargin=Component.UNDEFINED, chrWidth=Component.UNDEFINED, chromosomes=Component.UNDEFINED, chromosomeScale=Component.UNDEFINED, container=Component.UNDEFINED, dataDir=Component.UNDEFINED, demarcateCollinearChromosomes=Component.UNDEFINED, geometry=Component.UNDEFINED, heatmaps=Component.UNDEFINED, histogramScaling=Component.UNDEFINED, homology=Component.UNDEFINED, filterable=Component.UNDEFINED, fullChromosomeLabels=Component.UNDEFINED, legend=Component.UNDEFINED, organism=Component.UNDEFINED, orientation=Component.UNDEFINED, perspective=Component.UNDEFINED, ploidy=Component.UNDEFINED, ploidyDesc=Component.UNDEFINED, rangeSet=Component.UNDEFINED, resolution=Component.UNDEFINED, rotatable=Component.UNDEFINED, rotated=Component.UNDEFINED, rows=Component.UNDEFINED, sex=Component.UNDEFINED, showAnnotTooltip=Component.UNDEFINED, showBandLabels=Component.UNDEFINED, showChromosomeLabels=Component.UNDEFINED, showFullyBanded=Component.UNDEFINED, showNonNuclearChromosomes=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'style', 'className', 'accessToken', 'ancestors', 'annotations', 'annotationHeight', 'annotationsColor', 'annotationsLayout', 'annotationsPath', 'annotationsData', 'annotationTracks', 'assembly', 'barWidth', 'brush', 'brushData', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'chromosomeScale', 'container', 'dataDir', 'demarcateCollinearChromosomes', 'geometry', 'heatmaps', 'histogramScaling', 'homology', 'filterable', 'fullChromosomeLabels', 'legend', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'resolution', 'rotatable', 'rotated', 'rows', 'sex', 'showAnnotTooltip', 'showBandLabels', 'showChromosomeLabels', 'showFullyBanded', 'showNonNuclearChromosomes']
        self._type = 'Ideogram'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'style', 'className', 'accessToken', 'ancestors', 'annotations', 'annotationHeight', 'annotationsColor', 'annotationsLayout', 'annotationsPath', 'annotationsData', 'annotationTracks', 'assembly', 'barWidth', 'brush', 'brushData', 'chrHeight', 'chrMargin', 'chrWidth', 'chromosomes', 'chromosomeScale', 'container', 'dataDir', 'demarcateCollinearChromosomes', 'geometry', 'heatmaps', 'histogramScaling', 'homology', 'filterable', 'fullChromosomeLabels', 'legend', 'organism', 'orientation', 'perspective', 'ploidy', 'ploidyDesc', 'rangeSet', 'resolution', 'rotatable', 'rotated', 'rows', 'sex', 'showAnnotTooltip', 'showBandLabels', 'showChromosomeLabels', 'showFullyBanded', 'showNonNuclearChromosomes']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in ['id']:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(Ideogram, self).__init__(**args)
