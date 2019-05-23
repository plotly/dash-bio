% Auto-generated: do not edit by hand
\name{dashbioMolecule3dViewer}

\alias{dashbioMolecule3dViewer}

\title{Molecule3dViewer component}

\description{
The Molecule3dViewer component is used to render schematic diagrams of biomolecules. It can display ribbon-structure diagrams, or render atoms in the molecule as sticks or spheres. Read more about the component here: https://github.com/Autodesk/molecule-3d-for-react
}

\usage{
dashbioMolecule3dViewer(id=NULL, selectionType=NULL, backgroundColor=NULL, backgroundOpacity=NULL, styles=NULL, modelData=NULL, atomLabelsShown=NULL, selectedAtomIds=NULL, labels=NULL, onRenderNewData=NULL, onChangeSelection=NULL)
}

\arguments{
\item{id}{The ID used to identify this component in callbacks}

\item{selectionType}{The selection type - may be atom, residue or chain}

\item{backgroundColor}{Property to change the background color of the molecule viewer}

\item{backgroundOpacity}{Property to change the backgroun opacity - ranges from 0 to 1}

\item{styles}{Property that can be used to change the representation of
the molecule. Options include sticks, cartoon and sphere}

\item{modelData}{The data that will be used to display the molecule in 3D
The data will be in JSON format
and should have two main dictionaries - atoms, bonds}

\item{atomLabelsShown}{Property to either show or hide labels}

\item{selectedAtomIds}{Property that stores a list of all selected atoms}

\item{labels}{labels corresponding to the atoms of the molecule}

\item{onRenderNewData}{Callback to re-render molecule viewer
when modelData is changed}

\item{onChangeSelection}{Callback to change append selectedAtomIds
when a selection is made}
}

