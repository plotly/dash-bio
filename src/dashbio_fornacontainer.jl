# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_fornacontainer

"""
    dashbio_fornacontainer(;kwargs...)

A FornaContainer component.
FornaContainer is a force-directed graph that is used to visualize
the secondary structure of biomolecules. It is based on the fornac
library (https://github.com/ViennaRNA/fornac).
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in
callbacks. The ID needs to be unique across all of the
components in an app.
- `allowPanningAndZooming` (Bool; optional): Allow users to zoom in and pan the display. If this is enabled,
then pressing the 'c' key on the keyboard will center the view.
- `colorScheme` (a value equal to: 'sequence', 'structure', 'positions', 'custom'; optional): The color scheme that is used to color the nodes.
- `customColors` (optional): The custom colors used to color the nodes if the 'custom'
option is chosen for the `colorScheme` prop.
For example, if the domain is `[0, 20]`, the range is
`['yellow', 'red']`, and the dictionary specified in
'colorValues' that corresponds to a molecule is `{'6': 10}`,
the sixth nucleotide in that molecule will have a color that is
perfectly in between yellow and red (i.e., orange), since 10 is
perfectly in between 0 and 20.. customColors has the following type: lists containing elements 'domain', 'range', 'colorValues'.
Those elements have the following types:
  - `domain` (Array of Reals; optional): The limits for the color scale. This is used with the range
specified in `range` to calculate the color of a given
nucleotide, based on the number that it is assigned.
  - `range` (Array of Strings; optional): The range of colors that will be used in conjunction with
the `domain` prop.
  - `colorValues` (Dict with Strings as keys and values of type Dict with Strings as keys and values of type String | Real; optional): A dictionary which contains keys, each of which are either
an empty string (`''`) or the name of a molecule that has
been defined in the `name` prop in the `options` for a
sequence in the `sequences` property.
The value corresponding to the key that is an empty string
(if that key exists) is a "default" color scheme that will
be applied first, and can be overridden by the color
schemes defined for molecule-specific keys. The
aforementioned color schemes each take the form of a
dictionary in which the keys are the nucleotide positions
and the values are either a) numbers to be normalized with
respect to the scale defined in `domain` (so that their
color will be calculated), or b) direct string
representations of colors.
- `height` (Real; optional): The height (in px) of the container in which the molecules will
be displayed.
- `nodeFillColor` (String; optional): The fill color for all of the nodes. This will override any
color scheme defined in colorScheme.
- `sequences` (optional): The molecules that will be displayed.. sequences has the following type: Array of lists containing elements 'sequence', 'structure', 'options'.
Those elements have the following types:
  - `sequence` (String; required): A string representing the RNA nucleotide sequence of
the RNA molecule.
  - `structure` (String; required): A dot-bracket string
(https://software.broadinstitute.org/software/igv/RNAsecStructure)
that specifies the secondary structure of the RNA
molecule.
  - `options` (optional): Additional options to be applied to the rendering of
the RNA molecule.. options has the following type: lists containing elements 'applyForce', 'circularizeExternal', 'labelInterval', 'name', 'avoidOthers'.
Those elements have the following types:
  - `applyForce` (Bool; optional): Indicate whether the force-directed layout will be
applied to the displayed molecule. Enabling this
option allows users to change the layout of the
molecule by selecting and dragging the individual
nucleotide nodes. True by default.
  - `circularizeExternal` (Bool; optional): This only makes sense in connection with the
applyForce argument. If it's true, the external
loops will be arranged in a nice circle. If false,
they will be allowed to flop around as the force
layout dictates. True by default.
  - `labelInterval` (Real; optional): Change how often nucleotide numbers are labelled
with their number. 10 by default.
  - `name` (String; optional): The molecule name; this is used in custom color
scales.
  - `avoidOthers` (Bool; optional): Whether or not this molecule should "avoid" other
molecules in the map.s
- `width` (Real; optional): The width (in px) of the container in which the molecules will
be displayed.
"""
function dashbio_fornacontainer(; kwargs...)
        available_props = Symbol[:id, :allowPanningAndZooming, :colorScheme, :customColors, :height, :nodeFillColor, :sequences, :width]
        wild_props = Symbol[]
        return Component("dashbio_fornacontainer", "FornaContainer", "dash_bio", available_props, wild_props; kwargs...)
end

