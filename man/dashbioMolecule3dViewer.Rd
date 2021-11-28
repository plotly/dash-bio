% Auto-generated: do not edit by hand
\name{dashbioMolecule3dViewer}

\alias{dashbioMolecule3dViewer}

\title{Molecule3dViewer component}

\description{
The Molecule3dViewer component is used to render schematic diagrams of biomolecules. It can display ribbon-structure diagrams, or render atoms in the molecule as sticks or spheres. Read more about the component here: https://github.com/Autodesk/molecule-3d-for-react
}

\usage{
dashbioMolecule3dViewer(id=NULL, atomLabelsShown=NULL, backgroundColor=NULL,
backgroundOpacity=NULL, labels=NULL, loading_state=NULL,
modelData=NULL, onChangeSelection=NULL,
onRenderNewData=NULL, orbital=NULL, selectedAtomIds=NULL,
selectionType=NULL, shapes=NULL, styles=NULL, zoom=NULL,
zoomTo=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in callbacks}

\item{atomLabelsShown}{Logical. Property to either show or hide labels}

\item{backgroundColor}{Character. Property to change the background color of the molecule viewer}

\item{backgroundOpacity}{Numeric. Property to change the background opacity - ranges from 0 to 1}

\item{labels}{List of named lists. Labels corresponding to the atoms of the molecule.
Each label has a `text` field, a string containing the label content,
and can have many other styling fields as described in
https://3dmol.csb.pitt.edu/doc/types.html#LabelSpec}

\item{loading_state}{Lists containing elements 'is_loading', 'prop_name', 'component_name'.
those elements have the following types:
  - is_loading (logical; optional): determines if the component is loading or not
  - prop_name (character; optional): holds which property is loading
  - component_name (character; optional): holds the name of the component that is loading. Object that holds the loading state object coming from dash-renderer}

\item{modelData}{Lists containing elements 'atoms', 'bonds'.
those elements have the following types:
  - atoms (unnamed list; optional)
  - bonds (unnamed list; optional). The data that will be used to display the molecule in 3D
The data will be in JSON format
and should have two main dictionaries - atoms, bonds}

\item{onChangeSelection}{Callback to change append selectedAtomIds
when a selection is made}

\item{onRenderNewData}{Callback to re-render molecule viewer
when modelData is changed}

\item{orbital}{Lists containing elements 'cube_file', 'iso_val', 'opacity', 'positivevolumetriccolor', 'negativevolumetriccolor'.
those elements have the following types:
  - cube_file (character; optional): the filepath containing raw volumetric data for vertex coloring
  - iso_val (numeric; optional): the isovalue to draw the surface at
  - opacity (numeric; optional): transparency of the surface, between 0 and 1
  - positivevolumetriccolor (character; optional): color for the positive value of the isosurface orbital
  - negativevolumetriccolor (character; optional): color for the negative value of the isosurface orbital. Add an isosurface from volumetric data provided in the `cube_file`}

\item{selectedAtomIds}{Unnamed list. Property that stores a list of all selected atoms}

\item{selectionType}{A value equal to: 'atom', 'residue', 'chain'. The selection type - may be atom, residue or chain}

\item{shapes}{List of named lists. Add a predefined renderable shape objects to the molecule.
Valid shape types are Arrow, Sphere, and Cylinder.}

\item{styles}{List of lists containing elements 'color', 'visualization_type'.
those elements have the following types:
  - color (character; optional)
  - visualization_type (a value equal to: 'cartoon', 'sphere', 'stick'; optional)s. Property that can be used to change the representation of
the molecule. Options include sticks, cartoon and sphere}

\item{zoom}{Lists containing elements 'factor', 'animationduration', 'fixedpath'.
those elements have the following types:
  - factor (numeric; optional): magnification factor. values greater than 1 will zoom,
in, less than one will zoom out. default 2.
  - animationduration (numeric; optional): an optional parameter that denotes the duration of a
zoom animation, in milliseconds.
  - fixedpath (logical; optional): if true, animation is constrained to requested motion,
overriding updates that happen during the animation.. Zoom the current view by a constant factor, with optional parameters
to modify the duration and motion of the zoom animation.}

\item{zoomTo}{Lists containing elements 'sel', 'animationduration', 'fixedpath'.
those elements have the following types:
  - sel (optional): selection specification specifying model and atom properties
to select. default: all atoms in viewer.. sel has the following type: lists containing elements 'chain', 'resi'.
those elements have the following types:
  - chain (character; optional): chain that the residue is located on.
  - resi (numeric; optional): the index value used to identify the residue;
residues are numbered sequentially starting from 1.
  - animationduration (numeric; optional): an optional parameter that denotes the duration of a zoom animation
, in milliseconds.
  - fixedpath (logical; optional): if true, animation is constrained to requested motion,
overriding updates that happen during the animation.. Zoom to center of atom selection.}
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
