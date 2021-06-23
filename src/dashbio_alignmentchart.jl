# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_alignmentchart

"""
    dashbio_alignmentchart(;kwargs...)

An AlignmentChart component.
The Alignment Chart (MSA) component is used to align multiple genomic
or proteomic sequences from a FASTA or Clustal file. Among its
extensive set of features, the multiple sequence alignment chart
can display multiple subplots showing gap and conservation info,
alongside industry standard colorscale support and consensus sequence.
No matter what size your alignment is, Alignment Chart is able to display
your genes or proteins snappily thanks to the underlying WebGL architecture
powering the component. You can quickly scroll through your long sequence
with a slider or a heatmap overview.
Read more about the component here:
https://github.com/plotly/react-alignment-viewer
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- `colorscale` (String | Dict; optional): Colorscale in 'buried', 'cinema', 'clustal', 'clustal2', 'helix', 'hydrophobicity'
'lesk', 'mae', 'nucleotide', 'purine', 'strand', 'taylor', 'turn', 'zappo',
or your own colorscale as a {'nucleotide': COLOR} dict.
Note that this is NOT a standard plotly colorscale.
- `conservationcolor` (String; optional): Color of the conservation secondary barplot, in common name, hex, rgb or rgba format.
- `conservationcolorscale` (String | Array; optional): Colorscale of the conservation barplot, in Plotly colorscales (e.g. 'Viridis')
or as custom Plotly colorscale under a list format.
Note that this conservationcolorscale argument
does NOT follow the same format as the colorscale argument.
- `conservationmethod` (a value equal to: 'conservation', 'entropy'; optional): Whether to use most conserved ratio (MLE) 'conservation'
or normalized entropy 'entropy' to determine conservation,
which is a value between 0 and 1 where 1 is most conserved.
- `conservationopacity` (Real | String; optional): Opacity of the conservation secondary barplot as a value between 0 and 1.
- `correctgap` (Bool; optional): Whether to normalize the conservation barchart
By multiplying it elementwise with the gap barchart, as to
lower the conservation values across sequences regions with many gaps.
- `data` (String; optional): Input data, either in FASTA or Clustal format.
- `eventDatum` (String; optional): A Dash prop that returns data on clicking, hovering or resizing the viewer.
- `extension` (String; optional): Format type of the input data, either in FASTA or Clustal.
- `gapcolor` (String; optional): Color of the gap secondary barplot, in common name, hex, rgb or rgba format.
- `gapcolorscale` (String | Array; optional): Colorscale of the gap barplot, in Plotly colorscales (e.g. 'Viridis')
or as custom Plotly colorscale under a list format.
Note that this conservationcolorscale argument
does NOT follow the same format as the colorscale argument.
- `gapopacity` (Real | String; optional): Opacity of the gap secondary barplot as a value between 0 and 1.
- `groupbars` (Bool; optional): If both conservation and gap are enabled,
toggles whether to group bars or to stack them as separate subplots.
No effect if not both gap and conservation are shown.
- `height` (Real | String; optional): Width of the Viewer.
Property takes precedence over tilesheight if both
are set.
- `numtiles` (Real; optional): Sets how many tiles to display across horitontally. If enabled,
overrides tilewidth and sets the amount of tiles directly based off
that value.
- `opacity` (Real | String; optional): Opacity of the main plot as a value between 0 and 1.
- `overview` (a value equal to: 'heatmap', 'slider', 'none'; optional): Toggles whether the overview should be a heatmap, a slider, or none.
- `scrollskip` (Real; optional): If overview is set to 'scroll', determines how many tiles to skip
with each slider movement.
Has no effect if scroll is not enabled (such as with overview or none).
- `showconsensus` (Bool; optional): Displays toggling the consensus sequence, where each nucleotide in the
consensus sequence is the argmax of its distribution at a set nucleotide.
- `showconservation` (Bool; optional): Enables the display of conservation secondary barplot where the most conserved
nucleotides or amino acids get greater bars.
- `showgap` (Bool; optional): Enables the display of gap secondary barplot where the sequence regions
with the fewest gaps get the greatest bars.
- `showid` (Bool; optional): Toggles displaying sequence IDs at left of alignment.
- `showlabel` (Bool; optional): Toggles displaying sequence labels at left of alignment
- `textcolor` (String; optional): Color of the nucleotide labels, in common name, hex, rgb or rgba format.
If left blank, handled by the colorscale automatically.
- `textsize` (Real | String; optional): Size of the nucleotide labels, as a number.
- `tickstart` (Real | String; optional): Determines where to start annotating the first tile.
If let blank will be automatically determined by Plotly.
Equivalent to Plotly's tick0 property.
Does not function if overview mode 'slider' is applied. (Current bug)
- `ticksteps` (Real | String; optional): Determines at what interval to keep annotating the tiles.
If left blank will be automatially determined by Plotly.
Equivalent to Plotly's dtick property.
Does not function if overview mode 'slider' is applied. (Current bug)
- `tileheight` (Real; optional): Sets how many pixels each nucleotide/amino acid on the Alignment Chart
takes up vertically.
If enabled, set height dynamically.
- `tilewidth` (Real; optional): Sets how many pixels each nucleotide/amino acid on the Alignment Chart
takes up horizontally. The total number of tiles (numtiles) seen
horizontally is automatically determined by rounding
the Viewer width divided by the tile width.
the Viewwer width divided by the tile witdth.
- `width` (Real | String; optional): Width of the Viewer.
Property takes precedence over tileswidth and numtiles
if either of them is set.
"""
function dashbio_alignmentchart(; kwargs...)
        available_props = Symbol[:id, :colorscale, :conservationcolor, :conservationcolorscale, :conservationmethod, :conservationopacity, :correctgap, :data, :eventDatum, :extension, :gapcolor, :gapcolorscale, :gapopacity, :groupbars, :height, :numtiles, :opacity, :overview, :scrollskip, :showconsensus, :showconservation, :showgap, :showid, :showlabel, :textcolor, :textsize, :tickstart, :ticksteps, :tileheight, :tilewidth, :width]
        wild_props = Symbol[]
        return Component("dashbio_alignmentchart", "AlignmentChart", "dash_bio", available_props, wild_props; kwargs...)
end

