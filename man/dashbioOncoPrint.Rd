% Auto-generated: do not edit by hand
\name{dashbioOncoPrint}

\alias{dashbioOncoPrint}

\title{OncoPrint component}

\description{
The OncoPrint component is used to view multiple genetic alteration events through an interactive and zoomable heatmap. It is a React/Dash port of the popular oncoPrint() function from the BioConductor R package. Under the hood, the rendering is done using Plotly.js built upon D3. Plotly's interactivity allows the user to bind clicks and hovers to genetic events, allowing the user to create complex bioinformatic apps or workflows that rely on crossfiltering. Read more about the component here: https://github.com/plotly/react-oncoprint
}

\usage{
dashbioOncoPrint(id=NULL, eventDatum=NULL, data=NULL, padding=NULL, colorscale=NULL,
backgroundcolor=NULL, range=NULL, showlegend=NULL, showoverview=NULL,
width=NULL, height=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique to the component.}

\item{eventDatum}{Named list. A Dash prop that returns data on clicking, hovering or resizing the viewer.}

\item{data}{Unnamed list. Input data, in CBioPortal format where each list entry is a dict
consisting of 'sample', 'gene', 'alteration', and 'type'}

\item{padding}{Numeric. Adjusts the padding (as a proportion of whitespace) between two tracks.
Value is a ratio between 0 and 1.
Defaults to 0.05 (i.e., 5 percent). If set to 0, plot will look like a heatmap.}

\item{colorscale}{Logical | named list. If not null, will override the default OncoPrint colorscale.
Default OncoPrint colorscale same as CBioPortal implementation.
Make your own colrscale as a {'mutation': COLOR} dict.
Supported mutation keys are ['MISSENSE, 'INFRAME', 'FUSION',
'AMP', 'GAIN', 'HETLOSS', 'HMODEL', 'UP', 'DOWN']
Note that this is NOT a standard plotly colorscale.}

\item{backgroundcolor}{Character. Default color for the tracks, in common name, hex, rgb or rgba format.
If left blank, will default to a light grey rgb(190, 190, 190).}

\item{range}{Unnamed list. .Toogles whether or not to show a legend on the right side of the plot,
with mutation information.}

\item{showlegend}{Logical. .Toogles whether or not to show a legend on the right side of the plot,
with mutation information.}

\item{showoverview}{Logical. .Toogles whether or not to show a heatmap overview of the tracks.}

\item{width}{Numeric | character. Width of the OncoPrint.
Will disable auto-resizing of plots if set.}

\item{height}{Numeric | character. Height of the OncoPrint.
Will disable auto-resizing of plots if set.}
}
\examples{
\dontrun{
library(dash)
library(dashCoreComponents)
library(dashHtmlComponents)
library(dashBio)

app <- Dash$new()

pathToData <- system.file("extdata/cBioPortalData.json", package = "dashBio")

cBioPortalData <- jsonlite::fromJSON(pathToData, simplifyDataFrame=FALSE)

app$layout(htmlDiv(list(
    dashbioOncoPrint(
    id = 'my-dashbio-oncoprint',
    data = cBioPortalData
  )
)
)
)

app$run_server(showcase = TRUE)
}}
