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
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{data}{List of lists containing elements 'symbol', 'x', 'y', 'z'.
those elements have the following types:
  - symbol (character; optional)
  - x (numeric; optional)
  - y (numeric; optional)
  - z (numeric; optional)s. The xyz file data; a list of atoms such that each atom
has a dictionary defining the x, y, and z coordinates
along with the atom's symbol.}

\item{scrollZoom}{Logical. The option of whether or not to allow scrolling to control
the zoom.}

\item{view}{Lists containing elements 'aspect', 'zoom', 'translation', 'atomscale', 'relativeatomscale', 'bondscale', 'rotation', 'ao', 'aores', 'brightness', 'outline', 'spf', 'bonds', 'bondthreshold', 'bondshade', 'atomshade', 'resolution', 'dofstrength', 'dofposition', 'fxaa'.
those elements have the following types:
  - aspect (numeric; optional)
  - zoom (numeric; optional)
  - translation (optional): . translation has the following type: lists containing elements 'x', 'y'.
those elements have the following types:
  - x (numeric; optional)
  - y (numeric; optional)
  - atomscale (numeric; optional)
  - relativeatomscale (numeric; optional)
  - bondscale (numeric; optional)
  - rotation (optional): . rotation has the following type: lists containing elements .
those elements have the following types:

  - ao (numeric; optional)
  - aores (numeric; optional)
  - brightness (numeric; optional)
  - outline (numeric; optional)
  - spf (numeric; optional)
  - bonds (logical; optional)
  - bondthreshold (numeric; optional)
  - bondshade (numeric; optional)
  - atomshade (numeric; optional)
  - resolution (numeric; optional)
  - dofstrength (numeric; optional)
  - dofposition (numeric; optional)
  - fxaa (numeric; optional). An object that determines and controls various parameters
related to how the molecule is displayed.}

\item{presetView}{A value equal to: 'default', 'stickball', 'toon', 'licorice'. One of several pre-loaded views: default, stick-ball, toon,
and licorice}
}
\examples{
\dontrun{
library(dash)
library(dashHtmlComponents)
library(dashCoreComponents)
library(dashBio)

app <- Dash$new()

# a helper function to simplify data import
importSpeck <- function(filepath, 
                        header = FALSE, 
                        skip = 2) {
  textdata <- read.table(
    text = paste0(
      readLines(filepath), collapse="\n"
    ),
  header = header,
  skip = skip,
  col.names = c("symbol", "x", "y", "z"),
  stringsAsFactors = FALSE)
  return(dashTable::df_to_list(textdata))
}

# data available within the package:
caffeine <- importSpeck(system.file("extdata/caffeine.xyz", 
                                    package = "dashBio"))

methane <- importSpeck(system.file("extdata/methane.xyz", 
                                   package = "dashBio"))

testosterone <- importSpeck(system.file("extdata/testosterone.xyz", 
                                        package = "dashBio"))

app$layout(htmlDiv(list(
  htmlDiv(list(
    htmlDiv(
      id = 'speck-container',
      children = list(
        dashbioSpeck(
          id = 'speck',
          view = list('resolution' = 600, 'zoom'= 0.1),
          scrollZoom = TRUE
          )
        ),
      style = list('display' = 'inline-block')
      ),
    htmlDiv(list(
      htmlLabel("Select a molecule to render:"),
      dccDropdown(id = 'molecule-dropdown',
                  value = 'caffeine', 
                  disabled = FALSE, 
                  multi = FALSE,
                  options = list(list(value = "caffeine", label = "Caffeine"),
                                 list(value = "methane", label = "Methane"),
                                 list(value = "testosterone", label = "Testosterone")))
      ),
      style = list('display' = 'inline-block',
                   'position' = 'absolute',
                   'top' = '25px',
                   'right' = '50px',
                   'width' = '300px',
                   'padding' = '10px'),
      id = 'selector'
      )
    ),
    style = list('width' = '80\%', 
                 'display' = 'inline-block')
    )
  )
  )
)

app$callback(output=list(id='speck', property='data'),
             params=list(
               input(id='molecule-dropdown', property='value')),
             function(molecule)
             {
               if (molecule == "caffeine") caffeine
               else if (molecule == "methane") methane
               else if (molecule == "testosterone") testosterone
             }
)

app$run_server()
}}
