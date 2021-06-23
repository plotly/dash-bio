# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_oncoprint

"""
    dashbio_oncoprint(;kwargs...)

An OncoPrint component.
The OncoPrint component is used to view multiple genetic alteration events
through an interactive and zoomable heatmap. It is a React/Dash port of the
popular oncoPrint() function from the BioConductor R package.
Under the hood, the rendering is done using Plotly.js built upon D3.
Plotly's interactivity allows the user to bind clicks and hovers to genetic
events, allowing the user to create complex bioinformatic apps or workflows
that rely on crossfiltering.
Read more about the component here:
https://github.com/plotly/react-oncoprint
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique to the component.
- `backgroundcolor` (String; optional): Default color for the tracks, in common name, hex, rgb or rgba format.
If left blank, will default to a light grey rgb(190, 190, 190).
- `colorscale` (Bool | Dict; optional): If not null, will override the default OncoPrint colorscale.
Default OncoPrint colorscale same as CBioPortal implementation.
Make your own colrscale as a {'mutation': COLOR} dict.
Supported mutation keys are ['MISSENSE, 'INFRAME', 'FUSION',
'AMP', 'GAIN', 'HETLOSS', 'HMODEL', 'UP', 'DOWN']
Note that this is NOT a standard plotly colorscale.
- `data` (Array; optional): Input data, in CBioPortal format where each list entry is a dict
consisting of 'sample', 'gene', 'alteration', and 'type'
- `eventDatum` (Dict; optional): A Dash prop that returns data on clicking, hovering or resizing the viewer.
- `height` (Real | String; optional): Height of the OncoPrint.
Will disable auto-resizing of plots if set.
- `padding` (Real; optional): Adjusts the padding (as a proportion of whitespace) between two tracks.
Value is a ratio between 0 and 1.
Defaults to 0.05 (i.e., 5 percent). If set to 0, plot will look like a heatmap.
- `range` (Array; optional): .Toogles whether or not to show a legend on the right side of the plot,
with mutation information.
- `showlegend` (Bool; optional): .Toogles whether or not to show a legend on the right side of the plot,
with mutation information.
- `showoverview` (Bool; optional): .Toogles whether or not to show a heatmap overview of the tracks.
- `width` (Real | String; optional): Width of the OncoPrint.
Will disable auto-resizing of plots if set.
"""
function dashbio_oncoprint(; kwargs...)
        available_props = Symbol[:id, :backgroundcolor, :colorscale, :data, :eventDatum, :height, :padding, :range, :showlegend, :showoverview, :width]
        wild_props = Symbol[]
        return Component("dashbio_oncoprint", "OncoPrint", "dash_bio", available_props, wild_props; kwargs...)
end

