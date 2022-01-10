% Auto-generated: do not edit by hand
\name{dashbioIgv}

\alias{dashbioIgv}

\title{Igv component}

\description{
The Igv component is an interactive genome visualization component developed by the Integrative Genomics Viewer (IGV) team. It uses an example integration of igv.js and React (https://www.npmjs.com/package/igv).
}

\usage{
dashbioIgv(id=NULL, className=NULL, genome=NULL, loading_state=NULL,
locus=NULL, minimumBases=NULL, reference=NULL, style=NULL,
tracks=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in callbacks.
The ID needs to be unique across all of the components in an app.}

\item{className}{Character. className of the component div.}

\item{genome}{Character. String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome
    for details and list of supported identifiers. Note: One (but only one) of
    either genome or reference properties must be set. If both are set,
    the genome property will be ignored.}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{locus}{Character. Initial genomic location(s). Either a string or an array of strings.
    If an array a viewport is created for each location.}

\item{minimumBases}{Numeric. Minimum window size in base pairs when zooming in}

\item{reference}{Named list. Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome
    Note: One (but only one) of either genome or reference properties must be set. If both are set,
    the genome property will be ignored.}

\item{style}{Named list. Generic style overrides on the plot div}

\item{tracks}{Unnamed list. Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/igvteam/igv.js/wiki/Tracks-2.0}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

