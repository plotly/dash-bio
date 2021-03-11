% Auto-generated: do not edit by hand
\name{dashbioMolecule3dViewer}

\alias{dashbioMolecule3dViewer}

\title{Molecule3dViewer component}

\description{
The Molecule3dViewer component is used to render schematic diagrams of biomolecules. It can display ribbon-structure diagrams, or render atoms in the molecule as sticks or spheres. Read more about the component here: https://github.com/Autodesk/molecule-3d-for-react
}

\usage{
dashbioMolecule3dViewer(id=NULL, selectionType=NULL, backgroundColor=NULL,
backgroundOpacity=NULL, styles=NULL, modelData=NULL,
atomLabelsShown=NULL, selectedAtomIds=NULL, labels=NULL,
orbital=NULL, shapes=NULL, onRenderNewData=NULL,
onChangeSelection=NULL)
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

\item{labels}{List of lists containing elements 'text', 'parameters'.
those elements have the following types:
  - text (character; optional): the label content
  - parameters (named list; optional): additional styling options. see https://dash.plotly.com/dash-bio/molecule3dviewer for detailss. Labels corresponding to the atoms of the molecule}

\item{orbital}{Lists containing elements 'cube_file', 'iso_val', 'opacity', 'positivevolumetriccolor', 'negativevolumetriccolor'.
those elements have the following types:
  - cube_file (character; optional): the filepath containing raw volumetric data for vertex coloring
  - iso_val (numeric; optional): the isovalue to draw the surface at
  - opacity (numeric; optional): transparency of the surface, between 0 and 1
  - positivevolumetriccolor (character; optional): color for the positive value of the isosurface orbital
  - negativevolumetriccolor (character; optional): color for the negative value of the isosurface orbital. Add an isosurface from volumetric data provided in the `cube_file`}

\item{shapes}{List of named lists. Add a predefined renderable shape objects to the molecule.
Valid shape types are Arrow, Sphere, and Cylinder.}

\item{onRenderNewData}{Callback to re-render molecule viewer
when modelData is changed}

\item{onChangeSelection}{Callback to change append selectedAtomIds
when a selection is made}
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
