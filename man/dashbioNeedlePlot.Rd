% Auto-generated: do not edit by hand
\name{dashbioNeedlePlot}

\alias{dashbioNeedlePlot}

\title{NeedlePlot component}

\description{
The Needle Plot component is used to visualize large datasets containing categorical or numerical data. The lines and markers in the plot correspond to bars in a histogram.
}

\usage{
dashbioNeedlePlot(id=NULL, mutationData=NULL, xlabel=NULL, ylabel=NULL, rangeSlider=NULL,
needleStyle=NULL, domainStyle=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{mutationData}{Lists containing elements 'x', 'y', 'mutationgroups', 'domains'.
those elements have the following types:
  - x (character | unnamed list; optional)
  - y (character | unnamed list; optional)
  - mutationgroups (list of characters; optional)
  - domains (unnamed list; optional). The data that are displayed on the plot}

\item{xlabel}{Character. Title of the x-axis.}

\item{ylabel}{Character. Title of the y-axis.}

\item{rangeSlider}{Logical. If true, enables a rangeslider for the x-axis.}

\item{needleStyle}{Lists containing elements 'stemcolor', 'stemthickness', 'stemconstheight', 'headsize', 'headcolor', 'headsymbol'.
those elements have the following types:
  - stemcolor (character; optional)
  - stemthickness (numeric; optional)
  - stemconstheight (logical; optional)
  - headsize (numeric; optional)
  - headcolor (unnamed list | character; optional)
  - headsymbol (unnamed list | character; optional). Options for the needle marking single site mutations}

\item{domainStyle}{Lists containing elements 'domaincolor', 'displayminordomains'.
those elements have the following types:
  - domaincolor (unnamed list; optional)
  - displayminordomains (logical; optional). Options for the protein domain coloring}
}
\examples{
\dontrun{
library(dash)
library(dashHtmlComponents)
library(dashCoreComponents)
library(dashBio)

pathToData <- system.file("extdata/needle_PIK3CA.json", package="dashBio")

mdata <- jsonlite::read_json(pathToData)

app <- Dash$new()

app$layout(
    htmlDiv(
      list(
        dashbioNeedlePlot(
          id = 'my-dashbio-needleplot',
          mutationData = mdata
        )
      )
    )
)  

app$run_server()
}}
