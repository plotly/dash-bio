% Auto-generated: do not edit by hand
\name{dashbioNeedlePlot}

\alias{dashbioNeedlePlot}

\title{NeedlePlot component}

\description{
The Needle Plot component is used to visualize large datasets containing categorical or numerical data. The lines and markers in the plot correspond to bars in a histogram.
}

\usage{
dashbioNeedlePlot(id=NULL, clickData=NULL, domainStyle=NULL, margin=NULL,
mutationData=NULL, needleStyle=NULL, rangeSlider=NULL,
xlabel=NULL, ylabel=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{clickData}{Unnamed list. An array of the points on the graph that have been clicked with Plotly.js clickEvents.}

\item{domainStyle}{Lists containing elements 'domaincolor', 'displayminordomains', 'textangle'.
those elements have the following types:
  - domaincolor (unnamed list; optional)
  - displayminordomains (logical; optional): the prop x sometimes contains smaller domains (e.g. multi-site
        mutations), if true, these are displayed
  - textangle (numeric; optional): sets the angle at which the domain annotation
text is drawn with respect to the horizontal.. Options for the protein domain coloring}

\item{margin}{Named list. Margins of the plot}

\item{mutationData}{Lists containing elements 'x', 'y', 'mutationgroups', 'domains'.
those elements have the following types:
  - x (character | unnamed list; optional)
  - y (character | unnamed list; optional)
  - mutationgroups (list of characters; optional)
  - domains (unnamed list; optional). The data that are displayed on the plot}

\item{needleStyle}{Lists containing elements 'stemcolor', 'stemthickness', 'stemconstheight', 'headsize', 'headcolor', 'headsymbol'.
those elements have the following types:
  - stemcolor (character; optional)
  - stemthickness (numeric; optional)
  - stemconstheight (logical; optional)
  - headsize (numeric; optional)
  - headcolor (unnamed list | character; optional)
  - headsymbol (unnamed list | character; optional). Options for the needle marking single site mutations}

\item{rangeSlider}{Logical. If true, enables a rangeslider for the x-axis.}

\item{xlabel}{Character. Title of the x-axis.}

\item{ylabel}{Character. Title of the y-axis.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

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
