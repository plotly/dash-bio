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

\item{layout}{List. The overall layout of the Circos graph, provided
as a list of dictionaries.}

\item{config}{Named list. Configuration of overall layout of the graph.}

\item{size}{Numeric. The overall size of the SVG container holding the
graph. Set on initilization and unchangeable thereafter.}

\item{tracks}{List. Tracks that specify specific layouts.
For a complete list of tracks and usage,
please check the docs.}
}

