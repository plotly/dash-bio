# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_needleplot

"""
    dashbio_needleplot(;kwargs...)

A NeedlePlot component.
The Needle Plot component is used to visualize large datasets
containing categorical or numerical data. The lines and markers in
the plot correspond to bars in a histogram.
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `domainStyle` (optional): Options for the protein domain coloring. domainStyle has the following type: lists containing elements 'domainColor', 'displayMinorDomains'.
Those elements have the following types:
  - `domainColor` (Array; optional)
  - `displayMinorDomains` (Bool; optional)
- `mutationData` (optional): The data that are displayed on the plot. mutationData has the following type: lists containing elements 'x', 'y', 'mutationGroups', 'domains'.
Those elements have the following types:
  - `x` (String | Array; optional)
  - `y` (String | Array; optional)
  - `mutationGroups` (Array of Strings; optional)
  - `domains` (Array; optional)
- `needleStyle` (optional): Options for the needle marking single site mutations. needleStyle has the following type: lists containing elements 'stemColor', 'stemThickness', 'stemConstHeight', 'headSize', 'headColor', 'headSymbol'.
Those elements have the following types:
  - `stemColor` (String; optional)
  - `stemThickness` (Real; optional)
  - `stemConstHeight` (Bool; optional)
  - `headSize` (Real; optional)
  - `headColor` (Array | String; optional)
  - `headSymbol` (Array | String; optional)
- `rangeSlider` (Bool; optional): If true, enables a rangeslider for the x-axis.
- `xlabel` (String; optional): Title of the x-axis.
- `ylabel` (String; optional): Title of the y-axis.
"""
function dashbio_needleplot(; kwargs...)
        available_props = Symbol[:id, :domainStyle, :mutationData, :needleStyle, :rangeSlider, :xlabel, :ylabel]
        wild_props = Symbol[]
        return Component("dashbio_needleplot", "NeedlePlot", "dash_bio", available_props, wild_props; kwargs...)
end

