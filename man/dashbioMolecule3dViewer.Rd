% Auto-generated: do not edit by hand
\name{dashbioMolecule3dViewer}

\alias{dashbioMolecule3dViewer}

\title{Molecule3dViewer component}

\description{
The Molecule3dViewer component is used to render schematic diagrams of biomolecules. It can display ribbon-structure diagrams, or render atoms in the molecule as sticks or spheres. Read more about the component here: https://github.com/Autodesk/molecule-3d-for-react
}

\usage{
dashbioMolecule3dViewer(id=NULL, selectionType=NULL, backgroundColor=NULL, backgroundOpacity=NULL,
styles=NULL, modelData=NULL, atomLabelsShown=NULL, selectedAtomIds=NULL,
labels=NULL, onRenderNewData=NULL, onChangeSelection=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in callbacks}

\item{selectionType}{A value equal to: 'atom', 'residue', 'chain'. The selection type - may be atom, residue or chain}

\item{backgroundColor}{Character. Property to change the background color of the molecule viewer}

\item{backgroundOpacity}{Numeric. Property to change the background opacity - ranges from 0 to 1}

\item{styles}{List of lists containing elements 'color', 'visualization_type'.
those elements have the following types:
  - color (character; optional)
  - visualization_type (a value equal to: 'cartoon', 'sphere', 'stick'; optional)s. Property that can be used to change the representation of
the molecule. Options include sticks, cartoon and sphere}

\item{modelData}{Lists containing elements 'atoms', 'bonds'.
those elements have the following types:
  - atoms (unnamed list; optional)
  - bonds (unnamed list; optional). The data that will be used to display the molecule in 3D
The data will be in JSON format
and should have two main dictionaries - atoms, bonds}

\item{atomLabelsShown}{Logical. Property to either show or hide labels}

\item{selectedAtomIds}{Unnamed list. Property that stores a list of all selected atoms}

\item{labels}{Unnamed list. labels corresponding to the atoms of the molecule}

\item{onRenderNewData}{Callback to re-render molecule viewer
when modelData is changed}

\item{onChangeSelection}{Callback to change append selectedAtomIds
when a selection is made}
}
\examples{
\dontrun{
library(dash)
library(dashHtmlComponents)
library(dashCoreComponents)
library(dashBio)
library(jsonlite)

# data available within the package:
pathToModelData <- system.file("extdata/model_data.json", package = "dashBio")
pathToStylesData <- system.file("extdata/styles_data.json", package = "dashBio")

modelData <- jsonlite::read_json(pathToModelData)
stylesData <- jsonlite::read_json(pathToStylesData)

app <- Dash$new()

app$layout(
  htmlDiv(
    list(
      htmlLabel("Click and drag to rotate the molecule in 3D space:"),
      dashbioMolecule3dViewer(
        id = 'my-dashbio-molecule3d',
        styles = stylesData,
        modelData = modelData,
        selectionType = 'Chain',
        backgroundColor='#FF0000',
        backgroundOpacity=0.2
      )
    ),
    style = list("text-align" = "center",
                 "border-style" = "solid")
  )
)

app$run_server()
}}
