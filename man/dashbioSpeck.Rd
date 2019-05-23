% Auto-generated: do not edit by hand
\name{dashbioSpeck}

\alias{dashbioSpeck}

\title{Speck component}

\description{
The Speck component is a WebGL-based 3D molecule renderer. Read more about the component here: https://github.com/wwwtyro/speck
}

\usage{
dashbioSpeck(id=NULL, data=NULL, scrollZoom=NULL, view=NULL, presetView=NULL)
}

\arguments{
\item{id}{The ID used to identify this component in Dash callbacks.}

\item{data}{The xyz file data; a list of atoms such that each atom
has a dictionary defining the x, y, and z coordinates
along with the atom's symbol.}

\item{scrollZoom}{The option of whether or not to allow scrolling to control
the zoom.}

\item{view}{An object that determines and controls various parameters
related to how the molecule is displayed.}

\item{presetView}{One of several pre-loaded views: default, stick-ball, toon,
and licorice}
}

