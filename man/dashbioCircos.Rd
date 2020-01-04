% Auto-generated: do not edit by hand
\name{dashbioCircos}

\alias{dashbioCircos}

\title{Circos component}

\description{
Dash Circos is a library used to analyze and interpret data using a circular layout, based on the popular 'Circos' graph. This Dash Bio component is a useful tool for showcasing relationships bewtween data/datasets in a beautiful way. Please checkout the Dash Bio repository on github to learn more about this API.
}

\usage{
dashbioCircos(enableDownloadSVG=NULL, enableZoomPan=NULL, id=NULL, style=NULL,
eventDatum=NULL, selectEvent=NULL, layout=NULL, config=NULL, size=NULL,
tracks=NULL)
}

\arguments{
\item{enableDownloadSVG}{Logical. Allow for an SVG snapshot of the Circos graph to be downloaded.}

\item{enableZoomPan}{Logical. Allow for zooming and panning the Circos graph.}

\item{id}{Character. The ID of the component to be used in Dash callbacks}

\item{style}{Named list. The CSS styling of the div wrapping the component}

\item{eventDatum}{Named list. A Dash prop that returns data on clicking or hovering of the tracks.
Depending on what is specified for prop "selectEvent".}

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

\item{layout}{List of lists containing elements 'len', 'color', 'label', 'id'.
those elements have the following types:
  - len (numeric; required): the length of the block.
  - color (character; required): the color of the block.
  - label (character; required): the labels of the block.
  - id (character; required): the id of the block, where it will recieve
data from the specified "track" id.s. The overall layout of the Circos graph, provided
as a list of dictionaries.}

\item{config}{Named list. Configuration of overall layout of the graph.}

\item{size}{Numeric. The overall size of the SVG container holding the
graph. Set on initilization and unchangeable thereafter.}

\item{tracks}{List of lists containing elements 'id', 'data', 'config', 'type', 'tooltipcontent', 'color'.
those elements have the following types:
  - id (character; optional): the id of a specific piece of track data.
  - data (unnamed list; required): the data that makes up the track. it can
be a json object.
  - config (named list; optional): the layout of the tracks, where the user
can configure innerradius, outterradius, ticks,
labels, and more.
  - type (optional): specify the type of track this is.
please check the docs for a list of tracks you can use,
and ensure the name is typed in all capitals.
  - tooltipcontent (optional): specify what data for tooltipcontent is
displayed.
the entry for the "name" key, is any of the keys used in the data loaded into tracks.
ex: "tooltipcontent": {"name": "block_id"},
to display all data in the dataset use "all" as the entry for the key "name".
ex: "tooltipcontent": {"name": "all"}
ex: this will return (source) + ' > ' + (target) + ': ' + (targetend)'.
"tooltipcontent": {
                "source": "block_id",
                "target": "position",
                "targetend": "value"
                        },
ex: this will return (source)(sourceid) + ' > ' + (target)(targetid) + ': ' (target)(targetend)'.
"tooltipcontent": {
                "source": "source",
                "sourceid": "id",
                "target": "target",
                "targetid": "id",
                "targetend": "end"
            }. tooltipcontent has the following type: character | lists containing elements 'name'.
those elements have the following types:
  - name (character; required) | lists containing elements 'source', 'sourceid', 'target', 'targetend', 'targetid'.
those elements have the following types:
  - source (character; required)
  - sourceid (character; optional)
  - target (character; required)
  - targetend (character; required)
  - targetid (character; optional)
  - color (optional): specify which dictonary key to grab color values from, in the passed in dataset.
this can be a string or an object.
if using a string, you can specify hex,
rgb, and colors from d3 scale chromatic (ex: rdylbu).
the key "name" is required for this dictionary,
where the input for "name" points to some list of
dictionaries color values.
ex: "color": {"name": "some key that refers to color in a data set"}. color has the following type: character | lists containing elements 'name'.
those elements have the following types:
  - name (character; required)s. Tracks that specify specific layouts.
For a complete list of tracks and usage,
please check the docs.}
}
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
