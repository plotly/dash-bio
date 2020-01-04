% Auto-generated: do not edit by hand
\name{dashbioFornaContainer}

\alias{dashbioFornaContainer}

\title{FornaContainer component}

\description{
FornaContainer is a force-directed graph that is used to visualize the secondary structure of biomolecules. It is based on the fornac library (https://github.com/ViennaRNA/fornac).
}

\usage{
dashbioFornaContainer(id=NULL, height=NULL, width=NULL, sequences=NULL, nodeFillColor=NULL,
colorScheme=NULL, customColors=NULL, allowPanningAndZooming=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components in
callbacks. The ID needs to be unique across all of the
components in an app.}

\item{height}{Numeric. The height (in px) of the container in which the molecules will
be displayed.}

\item{width}{Numeric. The width (in px) of the container in which the molecules will
be displayed.}

\item{sequences}{List of lists containing elements 'sequence', 'structure', 'options'.
those elements have the following types:
  - sequence (character; required): a string representing the rna nucleotide sequence of
the rna molecule.
  - structure (character; required): a dot-bracket string
(https://software.broadinstitute.org/software/igv/rnasecstructure)
that specifies the secondary structure of the rna
molecule.
  - options (optional): additional options to be applied to the rendering of
the rna molecule.. options has the following type: lists containing elements 'applyforce', 'circularizeexternal', 'labelinterval', 'name', 'avoidothers'.
those elements have the following types:
  - applyforce (logical; optional): indicate whether the force-directed layout will be
applied to the displayed molecule. enabling this
option allows users to change the layout of the
molecule by selecting and dragging the individual
nucleotide nodes. true by default.
  - circularizeexternal (logical; optional): this only makes sense in connection with the
applyforce argument. if it's true, the external
loops will be arranged in a nice circle. if false,
they will be allowed to flop around as the force
layout dictates. true by default.
  - labelinterval (numeric; optional): change how often nucleotide numbers are labelled
with their number. 10 by default.
  - name (character; optional): the molecule name; this is used in custom color
scales.
  - avoidothers (logical; optional): whether or not this molecule should "avoid" other
molecules in the map.s. The molecules that will be displayed.}

\item{nodeFillColor}{Character. The fill color for all of the nodes. This will override any
color scheme defined in colorScheme.}

\item{colorScheme}{A value equal to: 'sequence', 'structure', 'positions', 'custom'. The color scheme that is used to color the nodes.}

\item{customColors}{Lists containing elements 'domain', 'range', 'colorvalues'.
those elements have the following types:
  - domain (list of numerics; optional): the limits for the color scale. this is used with the range
specified in `range` to calculate the color of a given
nucleotide, based on the number that it is assigned.
  - range (list of characters; optional): the range of colors that will be used in conjunction with
the `domain` prop.
  - colorvalues (list with named elements and values of type list with named elements and values of type character | numeric; optional): a dictionary which contains keys, each of which are either
an empty string (`''`) or the name of a molecule that has
been defined in the `name` prop in the `options` for a
sequence in the `sequences` property.
the value corresponding to the key that is an empty string
(if that key exists) is a "default" color scheme that will
be applied first, and can be overridden by the color
schemes defined for molecule-specific keys. the
aforementioned color schemes each take the form of a
dictionary in which the keys are the nucleotide positions
and the values are either a) numbers to be normalized with
respect to the scale defined in `domain` (so that their
color will be calculated), or b) direct string
representations of colors.. The custom colors used to color the nodes if the 'custom'
option is chosen for the `colorScheme` prop.
For example, if the domain is `[0, 20]`, the range is
`['yellow', 'red']`, and the dictionary specified in
'colorValues' that corresponds to a molecule is `{'6': 10}`,
the sixth nucleotide in that molecule will have a color that is
perfectly in between yellow and red (i.e., orange), since 10 is
perfectly in between 0 and 20.}

\item{allowPanningAndZooming}{Logical. Allow users to zoom in and pan the display. If this is enabled,
then pressing the 'c' key on the keyboard will center the view.}
}
