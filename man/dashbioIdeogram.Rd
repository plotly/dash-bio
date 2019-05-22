% Auto-generated: do not edit by hand
\name{dashbioIdeogram}

\alias{dashbioIdeogram}

\title{Ideogram component}

\description{
The Ideogram component is used to draw and animate genome-wide datasets for organisms such as human, mouse, and any other eukaryote. The Ideogram component can be used to compare homologous features between chromosomes, and depict haploid, diploid, aneuploid genomes. It can also display annotations on genomic data using histograms and overlays.  Reference: https://eweitz.github.io/ideogram/ Component's props: https://github.com/eweitz/ideogram/blob/master/api.md
}

\usage{
dashbioIdeogram(id=NULL, style=NULL, className=NULL, annotationsLayout=NULL, annotations=NULL, annotationsPath=NULL, annotationsData=NULL, annotationTracks=NULL, annotationHeight=NULL, annotationsColor=NULL, histogramScaling=NULL, barWidth=NULL, showAnnotTooltip=NULL, assembly=NULL, brush=NULL, brushData=NULL, container=NULL, chrHeight=NULL, chrMargin=NULL, chrWidth=NULL, chromosomes=NULL, dataDir=NULL, organism=NULL, localOrganism=NULL, homology=NULL, perspective=NULL, fullChromosomeLabels=NULL, resolution=NULL, filterable=NULL, orientation=NULL, ploidy=NULL, ploidyDesc=NULL, ancestors=NULL, rangeSet=NULL, rotatable=NULL, rotated=NULL, sex=NULL, showChromosomeLabels=NULL, showBandLabels=NULL, showFullyBanded=NULL, showNonNuclearChromosomes=NULL)
}

\arguments{
\item{id}{The ID used to identify this component in Dash callbacks and used to identify Ideogram
instances.}

\item{style}{The component's inline styles}

\item{className}{The CSS class of the component wrapper}

\item{annotationsLayout}{Layout of ideogram annotations.
One of "tracks", "histogram", or "overlay".

"tracks": display annotations in tracks beside each chromosome.

"histogram": display annotations in a histogram. Clusters annotations by location. Each
cluster/bin is shown as a bar, the height of which represents the number of annotations on
genomic range.

"overlay": display annotations directly over chromosomes.}

\item{annotations}{A list of annotation objects. Annotation objects can also have a name, color, shape, and
track index. At the moment there is more keys specified and the docs need updating.}

\item{annotationsPath}{An absolute or relative URL directing to a JSON file containing annotation objects (JSON).}

\item{annotationsData}{Use this prop in a dash callback to return annotationData when hovered.
It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
dash.dependencies.Input}

\item{annotationTracks}{A list of objects with metadata for each track, e.g., id, display name, color, shape.}

\item{annotationHeight}{Not used if annotationsLayout is set to "overlay".
The height of histogram bars or the size of annotations tracks symbols}

\item{annotationsColor}{Color of annotations.}

\item{histogramScaling}{Scaling of histogram bars height
Only used if annotationsLayout is set to "histogram".
One of "absolute" or "relative".

"absolute": sets bar height relative to tallest bar in all chromosomes.
"relative": sets bar height relative to tallest bar in each chromosome.}

\item{barWidth}{Pixel width of histogram bars.
Only used if annotationsLayout is set to "histogram".}

\item{showAnnotTooltip}{Whether to show a tooltip upon mousing over an annotation.}

\item{assembly}{Default: latest RefSeq assembly for specified organism.
The genome assembly to display.
Takes assembly name (e.g., "GRCh37"),
RefSeq accession (e.g., "GCF_000306695.2"),
or GenBank accession (e.g., "GCA_000005005.5")}

\item{brush}{Genomic coordinate range (e.g., "chr1:104325484-119977655") for a brush on a
chromosome. Useful when ideogram consists of one chromosome and you want to be
able to focus on a region within that chromosome,
and create an interactive sliding window to other regions}

\item{brushData}{A dash callback that is activated when the 'brush' prop is used in component.
It will return an dictionary like so:

{'start': <value>, 'end': <value>, 'extent': <value>}

where start is the left most edge, end is right most edge, and extent is the total width of
the brush.
It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
dash.dependencies.Input}

\item{container}{CSS styling and the id of the container holding the Ideogram in
react-ideogram.js, this is where all the d3 magic happens.}

\item{chrHeight}{The pixel height of the tallest chromosome in the ideogram}

\item{chrMargin}{The pixel space of margin between each chromosome.}

\item{chrWidth}{The pixel width of each chromosome.}

\item{chromosomes}{A list of the names of chromosomes to display. Useful for depicting a subset of the
chromosomes in the genome, e.g., a single chromosome.

If Homology (between two different species):
Ex: chromosomes={
      'human': ['1'],
      'mouse': ['4']
}

General case to specify specific chromosomes:
Ex: chromosomes=['1', '2']}

\item{dataDir}{Absolute or relative URL of the directory containing data needed to draw banded chromosomes.
You will need to set up your own database to grab data from a custom database.}

\item{organism}{Organism(s) to show chromosomes for. Supply organism's name as a string (e.g., "human") or
organism's NCBI Taxonomy ID (taxid, e.g., 9606) to display chromosomes from a single
organism, or an array of organisms' names or taxids to display chromosomes from multiple
species.}

\item{localOrganism}{Provide local JSON organism into this prop from a local user JSON file.
DataDir must not be initialized.}

\item{homology}{Used to compare two chromosomes with each other.
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
}}

\item{perspective}{Use perspective: 'comparative' to enable annotations between two chromosomes,
either within the same organism or different organisms. Used for homology.}

\item{fullChromosomeLabels}{Whether to include abbreviation species name in chromosome label. Used for homology.}

\item{resolution}{The resolution of cytogenetic bands to show for each chromosome.
The quantity refers to an approximate value in bands per haploid set (bphs).
One of 450, 550, or 850.}

\item{filterable}{Whether annotations should be filterable or not.}

\item{orientation}{The orientation of chromosomes on the page.}

\item{ploidy}{The ploidy - number of chromosomes to depict for each chromosome set.}

\item{ploidyDesc}{Description of ploidy in each chromosome set in terms of ancestry composition.}

\item{ancestors}{A map associating ancestor labels to colors. Used to color
chromosomes from different ancestors in polyploid genomes.}

\item{rangeSet}{List of objects describing segments of recombination among chromosomes in a chromosome set.}

\item{rotatable}{Whether chromosomes are rotatable on click.}

\item{rotated}{Dash callback that returns true if rotated, and false if not.}

\item{sex}{Useful for omitting chromosome Y in female animals.
Currently only supported for organisms that use XY sex-determination.}

\item{showChromosomeLabels}{Whether to show chromosome labels, e.g., 1, 2, 3, X, Y.}

\item{showBandLabels}{Whether to show cytogenetic band labels, e.g., 1q21}

\item{showFullyBanded}{Whether to show fully banded chromosomes for genomes that have sufficient data. Useful for
showing simpler chromosomes of cytogenetically well-characterized organisms, e.g., human,
beside chromosomes of less studied organisms, e.g., chimpanzee.}

\item{showNonNuclearChromosomes}{Whether to show non-nuclear chromosomes,
e.g., for mitochondrial (MT) and chloroplast (CP) DNA.}
}

