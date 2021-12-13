% Auto-generated: do not edit by hand
\name{dashbioMolecule2dViewer}

\alias{dashbioMolecule2dViewer}

\title{Molecule2dViewer component}

\description{
The Molecule2dViewer component is used to render structural formulae of molecules. Read more about the component here: https://github.com/Autodesk/molecule-2d-for-react
}

\usage{
dashbioMolecule2dViewer(id=NULL, height=NULL, loading_state=NULL, modelData=NULL,
scrollZoom=NULL, selectedAtomIds=NULL, width=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in callbacks.}

\item{height}{Numeric. The height of the SVG element.}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{modelData}{Lists containing elements 'nodes', 'links'.
those elements have the following types:
  - nodes (optional): . nodes has the following type: list of lists containing elements 'id', 'atom'.
those elements have the following types:
  - id (numeric; optional)
  - atom (character; optional)s
  - links (optional): . links has the following type: list of lists containing elements 'id', 'source', 'target', 'bond', 'strength', 'distance'.
those elements have the following types:
  - id (numeric; optional)
  - source (optional)
  - target (optional)
  - bond (numeric; optional)
  - strength (numeric; optional)
  - distance (numeric; optional)s. Description of the molecule to display.}

\item{scrollZoom}{Logical. The option of whether or not to allow scrolling to control
the zoom.}

\item{selectedAtomIds}{List of numerics. The selected atom IDs.}

\item{width}{Numeric. The width of the SVG element.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

\examples{
\dontrun{
library(dash)
library(dashHtmlComponents)
library(dashCoreComponents)
library(dashBio)
library(jsonlite)

# data available within the package:
pathToModelData <- system.file("extdata/mol2d_buckminsterfullerene.json", package = "dashBio")

modelData <- jsonlite::read_json(pathToModelData)

app <- Dash$new()
  
app$layout(
    htmlDiv(
      list(
        htmlLabel("Click and drag an element to rotate the molecule in 2D space:"),
        dashbioMolecule2dViewer(
          id = 'my-dashbio-molecule2d',
          modelData = modelData
        )
      ),
      style = list("text-align" = "center",
                   "border-style" = "solid")
    )
)
  
app$run_server()
}}
