% Auto-generated: do not edit by hand
\name{dashbioMolecule2dViewer}

\alias{dashbioMolecule2dViewer}

\title{Molecule2dViewer component}

\description{
The Molecule2dViewer component is used to render structural formulae of molecules. Read more about the component here: https://github.com/Autodesk/molecule-2d-for-react
}

\usage{
dashbioMolecule2dViewer(id=NULL, selectedAtomIds=NULL, width=NULL, height=NULL, modelData=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in callbacks.}

\item{selectedAtomIds}{List of numerics. The selected atom IDs.}

\item{width}{Numeric. The width of the SVG element.}

\item{height}{Numeric. The height of the SVG element.}

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
}
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
