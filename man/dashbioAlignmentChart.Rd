% Auto-generated: do not edit by hand
\name{dashbioAlignmentChart}

\alias{dashbioAlignmentChart}

\title{AlignmentChart component}

\description{
The Alignment Chart (MSA) component is used to align multiple genomic or proteomic sequences from a FASTA or Clustal file. Among its extensive set of features, the multiple sequence alignment chart can display multiple subplots showing gap and conservation info, alongside industry standard colorscale support and consensus sequence. No matter what size your alignment is, Alignment Chart is able to display your genes or proteins snappily thanks to the underlying WebGL architecture powering the component. You can quickly scroll through your long sequence with a slider or a heatmap overview. Read more about the component here: https://github.com/plotly/react-alignment-viewer
}

\usage{
dashbioAlignmentChart(id=NULL, eventDatum=NULL, data=NULL, extension=NULL, colorscale=NULL,
opacity=NULL, textcolor=NULL, textsize=NULL, showlabel=NULL, showid=NULL,
showconservation=NULL, conservationcolor=NULL, conservationcolorscale=NULL,
conservationopacity=NULL, conservationmethod=NULL, correctgap=NULL,
showgap=NULL, gapcolor=NULL, gapcolorscale=NULL, gapopacity=NULL,
groupbars=NULL, showconsensus=NULL, tilewidth=NULL, tileheight=NULL,
overview=NULL, numtiles=NULL, scrollskip=NULL, tickstart=NULL, ticksteps=NULL,
width=NULL, height=NULL)
}

\arguments{
\item{id}{Character. The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.}

\item{eventDatum}{Character. A Dash prop that returns data on clicking, hovering or resizing the viewer.}

\item{data}{Character. Input data, either in FASTA or Clustal format.}

\item{extension}{Character. Format type of the input data, either in FASTA or Clustal.}

\item{colorscale}{Character | named list. Colorscale in 'buried', 'cinema', 'clustal', 'clustal2', 'helix', 'hydrophobicity'
'lesk', 'mae', 'nucleotide', 'purine', 'strand', 'taylor', 'turn', 'zappo',
or your own colorscale as a {'nucleotide': COLOR} dict.
Note that this is NOT a standard plotly colorscale.}

\item{opacity}{Numeric | character. Opacity of the main plot as a value between 0 and 1.}

\item{textcolor}{Character. Color of the nucleotide labels, in common name, hex, rgb or rgba format.
If left blank, handled by the colorscale automatically.}

\item{textsize}{Numeric | character. Size of the nucleotide labels, as a number.}

\item{showlabel}{Logical. Toggles displaying sequence labels at left of alignment}

\item{showid}{Logical. Toggles displaying sequence IDs at left of alignment.}

\item{showconservation}{Logical. Enables the display of conservation secondary barplot where the most conserved
nucleotides or amino acids get greater bars.}

\item{conservationcolor}{Character. Color of the conservation secondary barplot, in common name, hex, rgb or rgba format.}

\item{conservationcolorscale}{Character | unnamed list. Colorscale of the conservation barplot, in Plotly colorscales (e.g. 'Viridis')
or as custom Plotly colorscale under a list format.
Note that this conservationcolorscale argument
does NOT follow the same format as the colorscale argument.}

\item{conservationopacity}{Numeric | character. Opacity of the conservation secondary barplot as a value between 0 and 1.}

\item{conservationmethod}{A value equal to: 'conservation', 'entropy'. Whether to use most conserved ratio (MLE) 'conservation'
or normalized entropy 'entropy' to determine conservation,
which is a value between 0 and 1 where 1 is most conserved.}

\item{correctgap}{Logical. Whether to normalize the conservation barchart
By multiplying it elementwise with the gap barchart, as to
lower the conservation values across sequences regions with many gaps.}

\item{showgap}{Logical. Enables the display of gap secondary barplot where the sequence regions
with the fewest gaps get the greatest bars.}

\item{gapcolor}{Character. Color of the gap secondary barplot, in common name, hex, rgb or rgba format.}

\item{gapcolorscale}{Character | unnamed list. Colorscale of the gap barplot, in Plotly colorscales (e.g. 'Viridis')
or as custom Plotly colorscale under a list format.
Note that this conservationcolorscale argument
does NOT follow the same format as the colorscale argument.}

\item{gapopacity}{Numeric | character. Opacity of the gap secondary barplot as a value between 0 and 1.}

\item{groupbars}{Logical. If both conservation and gap are enabled,
toggles whether to group bars or to stack them as separate subplots.
No effect if not both gap and conservation are shown.}

\item{showconsensus}{Logical. Displays toggling the consensus sequence, where each nucleotide in the
consensus sequence is the argmax of its distribution at a set nucleotide.}

\item{tilewidth}{Numeric. Sets how many pixels each nucleotide/amino acid on the Alignment Chart
takes up horizontally. The total number of tiles (numtiles) seen
horizontally is automatically determined by rounding
the Viewer width divided by the tile width.
the Viewwer width divided by the tile witdth.}

\item{tileheight}{Numeric. Sets how many pixels each nucleotide/amino acid on the Alignment Chart
takes up vertically.
If enabled, set height dynamically.}

\item{overview}{A value equal to: 'heatmap', 'slider', 'none'. Toggles whether the overview should be a heatmap, a slider, or none.}

\item{numtiles}{Numeric. Sets how many tiles to display across horitontally. If enabled,
overrides tilewidth and sets the amount of tiles directly based off
that value.}

\item{scrollskip}{Numeric. If overview is set to 'scroll', determines how many tiles to skip
with each slider movement.
Has no effect if scroll is not enabled (such as with overview or none).}

\item{tickstart}{Numeric | character. Determines where to start annotating the first tile.
If let blank will be automatically determined by Plotly.
Equivalent to Plotly's tick0 property.
Does not function if overview mode 'slider' is applied. (Current bug)}

\item{ticksteps}{Numeric | character. Determines at what interval to keep annotating the tiles.
If left blank will be automatially determined by Plotly.
Equivalent to Plotly's dtick property.
Does not function if overview mode 'slider' is applied. (Current bug)}

\item{width}{Numeric | character. Width of the Viewer.
Property takes precedence over tileswidth and numtiles
if either of them is set.}

\item{height}{Numeric | character. Width of the Viewer.
Property takes precedence over tilesheight if both
are set.}
}
\examples{
\dontrun{
library(dash)
library(dashCoreComponents)
library(dashHtmlComponents)
library(dashBio)

data(p53fasta)

app <- Dash$new()

app$layout(htmlDiv(list(
  dashbioAlignmentChart(
    id='my-dashbio-alignmentchart',
    data=p53fasta
  )
)
)
)

app$run_server(showcase = TRUE)
}}
