% Auto-generated: do not edit by hand
\name{dashbioCircos}

\alias{dashbioCircos}

\title{Circos component}

\description{
Dash Circos is a library used to analyze and interpret data using a circular layout, based on the popular 'Circos' graph. This Dash Bio component is a useful tool for showcasing relationships between data/datasets in an attractive, circular layout to highlight feature interactions and relationships.
}

\usage{
dashbioCircos(id=NULL, config=NULL, enableDownloadSVG=NULL,
enableZoomPan=NULL, eventDatum=NULL, layout=NULL,
selectEvent=NULL, size=NULL, style=NULL, tracks=NULL)
}

\arguments{
\item{id}{Character. The ID of the component to be used in Dash callbacks.}

\item{config}{Lists containing elements 'innerradius', 'outerradius', 'cornerradius', 'gap', 'labels', 'ticks'.
those elements have the following types:
  - innerradius (numeric; optional)
  - outerradius (numeric; optional)
  - cornerradius (numeric; optional)
  - gap (numeric; optional)
  - labels (optional): . labels has the following type: lists containing elements 'display', 'size', 'color', 'radialoffset'.
those elements have the following types:
  - display (logical; optional)
  - size (numeric; optional)
  - color (character; optional)
  - radialoffset (numeric; optional)
  - ticks (optional): . ticks has the following type: lists containing elements 'display', 'color', 'spacing', 'labels', 'labelspacing', 'labelsuffix', 'labeldenominator', 'labeldisplay0', 'labelsize', 'labelcolor', 'labelfont', 'majorspacing', 'size'.
those elements have the following types:
  - display (logical; optional)
  - color (character; optional)
  - spacing (numeric; optional)
  - labels (logical; optional)
  - labelspacing (numeric; optional)
  - labelsuffix (character; optional)
  - labeldenominator (numeric; optional)
  - labeldisplay0 (logical; optional)
  - labelsize (numeric; optional)
  - labelcolor (character; optional)
  - labelfont (character; optional)
  - majorspacing (numeric; optional)
  - size (optional): . size has the following type: lists containing elements 'minor', 'major'.
those elements have the following types:
  - minor (numeric; optional)
  - major (numeric; optional). Configuration options for the graph layout.}

\item{enableDownloadSVG}{Logical. Allow for an SVG snapshot of the Circos graph to be downloaded.}

\item{enableZoomPan}{Logical. Allow for zooming and panning the Circos graph.}

\item{eventDatum}{Named list. A Dash prop that returns data on clicking or hovering of the tracks,
depending on what is specified for prop "selectEvent".}

\item{layout}{List of lists containing elements 'len', 'color', 'label', 'id'.
those elements have the following types:
  - len (numeric; required): the length of the block.
  - color (character; required): the color of the block.
  - label (character; required): the labels of the block.
  - id (character; required): the id of the block.s. Data used to draw Circos layout blocks.}

\item{selectEvent}{Named list. A dictionary used to choose whether tracks should return
data on click, hover, or both, with the dash prop "eventDatum".
The keys of the dictionary represent the index of the list
specified for "tracks".
Ex:
selectEvent={
        "0": "hover",
        "1": "click",
        "2": "both"
    },}

\item{size}{Numeric. The overall size of the SVG container holding the
graph. Set on initilization and unchangeable thereafter.}

\item{style}{Named list. The CSS styling of the div wrapping the component.}

\item{tracks}{List of lists containing elements 'id', 'data', 'config', 'type'.
those elements have the following types:
  - id (character; optional): the id of the track.
  - data (list of named lists; optional): the data that makes up the track, passed as a list of dicts with different keys depending on the track type.
see the docs section about a given track type to learn more about the required data format.
  - config (named list; optional): the track configuration. depending on the track type it will be a dict with different keys.
see the docs section about a given track type to learn more about available configuration options.
  - type (a value equal to: 'chords', 'heatmap', 'highlight', 'histogram', 'line', 'scatter', 'stack', 'text'; optional): the type of the track.s. A list of tracks displayed on top of the base Circos layout.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

\examples{
\dontrun{
library(dash)
library(dashCoreComponents)
library(dashHtmlComponents)
library(dashBio)

app <- Dash$new()

pathToData <- system.file("extdata/circos_graph_data.json", package = "dashBio")

circos_graph_data <- jsonlite::fromJSON(pathToData, simplifyDataFrame=FALSE)

app$layout(htmlDiv(list(
dashbioCircos(
  id = 'my-dashbio-circos',
  tracks = list(
  list('type' = 'CHORDS',
       'data' = circos_graph_data[['chords']],
       'opacity' = '0.7',
       'color' = list('name' = 'color'),
       'config' = list(
            'tooltipContent' = list(
                  'source' = 'source',
                  'sourceID' = 'id',
                  'target' = 'target',
                  'targetID' = 'id',
                  'targetEnd' = 'end'
                  )
              )
        )),
  layout = circos_graph_data[['GRCh37']]
)
)
)
)

app$run_server(showcase = TRUE)
}}
