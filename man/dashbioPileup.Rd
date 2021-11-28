% Auto-generated: do not edit by hand
\name{dashbioPileup}

\alias{dashbioPileup}

\title{Pileup component}

\description{
The Pileup component is a genome visualization component developed by the the Hammerlab. It uses an example integration of pileup.js and React (https://www.npmjs.com/package/pileup).
}

\usage{
dashbioPileup(id=NULL, className=NULL, loading_state=NULL, range=NULL,
reference=NULL, style=NULL, tracks=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks.
The ID needs to be unique across all of the components in an app.}

\item{className}{Character. className of the component div.}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{range}{Lists containing elements 'contig', 'start', 'stop'.
those elements have the following types:
  - contig (character; optional): name of contig to display. (ie. chr17)
  - start (numeric; optional): start location to display
  - stop (numeric; optional): stop location to display. Object defining genomic location.
    Of the format: {contig: 'chr17', start: 7512384, stop: 7512544}}

\item{reference}{Lists containing elements 'label', 'url'.
those elements have the following types:
  - label (character; optional): label to display by reference
  - url (character; optional): url of 2bit file.
         https://genome.ucsc.edu/goldenpath/help/twobit.html. Object defining genomic reference.}

\item{style}{Named list. Generic style overrides on the plot div}

\item{tracks}{List of lists containing elements 'viz', 'vizoptions', 'label', 'source', 'sourceoptions'.
those elements have the following types:
  - viz (a value equal to: 'coverage', 'genome', 'genes', 'features', 'idiogram', 'location', 'scale', 'variants', 'genotypes', 'pileup'; optional): name of visualization. must be one of
            (coverage, genome, genes, features, idiogram, location, scale,
            variants, genotypes, or pileup). for more info on visualization
            types supported by pileup.js see https://github.com/akmorrow13/pileup.js/blob/master/src/main/pileup.js.
  - vizoptions (optional): options that define viz details.
            options depend on the viz type selected.
  - label (character; optional): label to display by track
  - source (a value equal to: 'bam', 'alignmentjson', 'variantjson', 'featurejson', 'idiogramjson', 'cytoband', 'vcf', 'twobit', 'bigbed', 'gareadalignment', 'gavariant', 'gafeature', 'gagene'; optional): data source to visualize. must be one of
            (bam, vcf, alignmentjson, variantjson, featurejson, idiogramjson, cytoband,
            vcf, twobit, bigbed, gareadalignment, gavariant, gafeature, gagene). for more info on
            data source types supported by pileup.js see https://github.com/hammerlab/pileup.js/blob/master/src/main/pileup.js
  - sourceoptions (optional): options that define data source.
            options depend on the source selected.s. Array of configuration objects defining tracks initially displayed when app launches.
    See https://github.com/hammerlab/pileup.js#usage}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

