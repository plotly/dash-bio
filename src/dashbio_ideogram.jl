# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_ideogram

"""
    dashbio_ideogram(;kwargs...)

An Ideogram component.
The Ideogram component is used to draw and animate genome-wide
datasets for organisms such as human, mouse, and any other
eukaryote. The Ideogram component can be used to compare
homologous features between chromosomes, and depict
haploid, diploid, aneuploid genomes. It can also display
annotations on genomic data using histograms and overlays.

Reference: https://eweitz.github.io/ideogram/
Component's props: https://github.com/eweitz/ideogram/blob/master/api.md
Keyword arguments:
- `id` (String; required): The ID used to identify this component in Dash callbacks and used to identify Ideogram
instances.
- `ancestors` (Dict; optional): A map associating ancestor labels to colors. Used to color
chromosomes from different ancestors in polyploid genomes.
- `annotationHeight` (Real; optional): Not used if annotationsLayout is set to "overlay".
The height of histogram bars or the size of annotations tracks symbols
- `annotationTracks` (Array of Dicts; optional): A list of objects with metadata for each track, e.g., id, display name, color, shape.
- `annotations` (optional): A list of annotation objects. Annotation objects can also have a name, color, shape, and
track index. At the moment there is more keys specified and the docs need updating.. annotations has the following type: Array of lists containing elements 'name', 'chr', 'start', 'stop'.
Those elements have the following types:
  - `name` (String; optional)
  - `chr` (String; optional)
  - `start` (Real; optional)
  - `stop` (Real; optional)s
- `annotationsColor` (String; optional): Color of annotations.
- `annotationsData` (String; optional): Use this prop in a dash callback to return annotationData when hovered.
It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
dash.dependencies.Input
- `annotationsLayout` (a value equal to: 'tracks', 'histogram', 'overlay'; optional): Layout of ideogram annotations.
One of "tracks", "histogram", or "overlay".

"tracks": display annotations in tracks beside each chromosome.

"histogram": display annotations in a histogram. Clusters annotations by location. Each
cluster/bin is shown as a bar, the height of which represents the number of annotations on
genomic range.

"overlay": display annotations directly over chromosomes.
- `annotationsPath` (String; optional): An absolute or relative URL directing to a JSON file containing annotation objects (JSON).
- `assembly` (String; optional): Default: latest RefSeq assembly for specified organism.
The genome assembly to display.
Takes assembly name (e.g., "GRCh37"),
RefSeq accession (e.g., "GCF_000306695.2"),
or GenBank accession (e.g., "GCA_000005005.5")
- `barWidth` (Real; optional): Pixel width of histogram bars.
Only used if annotationsLayout is set to "histogram".
- `brush` (String; optional): Genomic coordinate range (e.g., "chr1:104325484-119977655") for a brush on a
chromosome. Useful when ideogram consists of one chromosome and you want to be
able to focus on a region within that chromosome,
and create an interactive sliding window to other regions
- `brushData` (optional): A dash callback that is activated when the 'brush' prop is used.
It will return an dictionary like so:
{'start': <value>, 'end': <value>, 'extent': <value>}
where start is the left most edge, end is right most edge, and extent is the total width of
the brush.
It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
dash.dependencies.Input. brushData has the following type: lists containing elements 'start', 'end', 'extent'.
Those elements have the following types:
  - `start` (String; optional)
  - `end` (String; optional)
  - `extent` (String; optional)
- `chrHeight` (Real; optional): The pixel height of the tallest chromosome in the ideogram
- `chrMargin` (Real; optional): The pixel space of margin between each chromosome.
- `chrWidth` (Real; optional): The pixel width of each chromosome.
- `chromosomes` (Array of Strings | Dict; optional): A list of the names of chromosomes to display. Useful for depicting a subset of the
chromosomes in the genome, e.g., a single chromosome.

If Homology (between two different species):
Ex: chromosomes={
      'human': ['1'],
      'mouse': ['4']
}

General case to specify specific chromosomes:
Ex: chromosomes=['1', '2']
- `className` (String; optional): The CSS class of the component wrapper
- `container` (String; optional): CSS styling and the id of the container holding the Ideogram in
react-ideogram.js, this is where all the d3 magic happens.
- `dataDir` (String; optional): Absolute or relative URL of the directory containing data needed to draw banded chromosomes.
You will need to set up your own database to grab data from a custom database.
- `filterable` (Bool; optional): Whether annotations should be filterable or not.
- `fullChromosomeLabels` (Bool; optional): Whether to include abbreviation species name in chromosome label. Used for homology.
- `histogramScaling` (a value equal to: 'absolute', 'relative'; optional): Scaling of histogram bars height
Only used if annotationsLayout is set to "histogram".
One of "absolute" or "relative".

"absolute": sets bar height relative to tallest bar in all chromosomes.
"relative": sets bar height relative to tallest bar in each chromosome.
- `homology` (optional): Used to compare two chromosomes.
The keys "chrOne" and "chrTwo" represent one chromosome each. Organism is the taxID or name.
Start is an array, containing start one and start two, in this order. Stop is an array,
containing stop one, and stop two, in this order.
Ex: homology={
    "chrOne": {
        organism": "9606",
        "start": [50000, 155701383],
        "stop": [900000, 156030895]
    },
    "chrTwo": {
        organism": "10090",
        "start": [10001, 50000000],
        "stop": [2781479, 57217415]
    }
}. homology has the following type: lists containing elements 'chrOne', 'chrTwo'.
Those elements have the following types:
  - `chrOne` (optional): . chrOne has the following type: lists containing elements 'organism', 'start', 'stop'.
Those elements have the following types:
  - `organism` (String; required)
  - `start` (Array of Reals; optional)
  - `stop` (Array of Reals; optional)
  - `chrTwo` (optional): . chrTwo has the following type: lists containing elements 'organism', 'start', 'stop'.
Those elements have the following types:
  - `organism` (String; required)
  - `start` (Array of Reals; optional)
  - `stop` (Array of Reals; optional)
- `localOrganism` (Dict; optional): Provide local JSON organism into this prop from a local user JSON file.
DataDir must not be initialized.
- `organism` (String | Real; optional): Organism(s) to show chromosomes for. Supply organism's name as a string (e.g., "human") or
organism's NCBI Taxonomy ID (taxid, e.g., 9606) to display chromosomes from a single
organism, or an array of organisms' names or taxids to display chromosomes from multiple
species.
- `orientation` (a value equal to: 'vertical', 'horizontal'; optional): The orientation of chromosomes on the page.
- `perspective` (a value equal to: 'comparative'; optional): Use perspective: 'comparative' to enable annotations between two chromosomes,
either within the same organism or different organisms. Used for homology.
- `ploidy` (Real; optional): The ploidy - number of chromosomes to depict for each chromosome set.
- `ploidyDesc` (Array of Dicts; optional): Description of ploidy in each chromosome set in terms of ancestry composition.
- `rangeSet` (Array of Dicts; optional): List of objects describing segments of recombination among chromosomes in a chromosome set.
- `resolution` (Real; optional): The resolution of cytogenetic bands to show for each chromosome.
The quantity refers to an approximate value in bands per haploid set (bphs).
One of 450, 550, or 850.
- `rotatable` (Bool; optional): Whether chromosomes are rotatable on click.
- `rotated` (Bool; optional): Dash callback that returns true if rotated, and false if not.
- `sex` (a value equal to: 'male', 'female'; optional): Useful for omitting chromosome Y in female animals.
Currently only supported for organisms that use XY sex-determination.
- `showAnnotTooltip` (Bool; optional): Whether to show a tooltip upon mousing over an annotation.
- `showBandLabels` (Bool; optional): Whether to show cytogenetic band labels, e.g., 1q21.
- `showChromosomeLabels` (Bool; optional): Whether to show chromosome labels, e.g., 1, 2, 3, X, Y.
- `showFullyBanded` (Bool; optional): Whether to show fully banded chromosomes for genomes that have sufficient data. Useful for
showing simpler chromosomes of cytogenetically well-characterized organisms, e.g., human,
beside chromosomes of less studied organisms, e.g., chimpanzee.
- `showNonNuclearChromosomes` (Bool; optional): Whether to show non-nuclear chromosomes,
e.g., for mitochondrial (MT) and chloroplast (CP) DNA.
- `style` (Dict; optional): The component's inline styles
"""
function dashbio_ideogram(; kwargs...)
        available_props = Symbol[:id, :ancestors, :annotationHeight, :annotationTracks, :annotations, :annotationsColor, :annotationsData, :annotationsLayout, :annotationsPath, :assembly, :barWidth, :brush, :brushData, :chrHeight, :chrMargin, :chrWidth, :chromosomes, :className, :container, :dataDir, :filterable, :fullChromosomeLabels, :histogramScaling, :homology, :localOrganism, :organism, :orientation, :perspective, :ploidy, :ploidyDesc, :rangeSet, :resolution, :rotatable, :rotated, :sex, :showAnnotTooltip, :showBandLabels, :showChromosomeLabels, :showFullyBanded, :showNonNuclearChromosomes, :style]
        wild_props = Symbol[]
        return Component("dashbio_ideogram", "Ideogram", "dash_bio", available_props, wild_props; kwargs...)
end

