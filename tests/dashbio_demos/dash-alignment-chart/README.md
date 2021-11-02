## Run the app

```bash
python tests/dashbio_demos/dash-alignment-chart/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 4 tabs in this app: About, Data, Interactions, Graph.

The About tab contains a general overview of the AlignmentChart component.

In the Data tab choose from a selection of pre-loaded datasets or upload your own dataset.

In the Interactions tab view information about graph click data and annotations.

Use the Graph tab to manipulate a number of Alignment Chart properties - the color of the
sequences in the viewer and overview, conservation options (including colorscale and conservation method), gap color, and tile size.

## Documentation

Learn more about using the Alignment Chart with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/alignmentchart).


## AlignmentChart Properties Reference


**id** (string; optional): The ID of this component, used to identify dash components in callbacks. The ID needs to be unique across all of the components in an app.

**colorscale** (string | dict; default 'clustal2'): Colorscale in 'buried', 'cinema', 'clustal', 'clustal2', 'helix', 'hydrophobicity' 'lesk', 'mae', 'nucleotide', 'purine', 'strand', 'taylor', 'turn', 'zappo', or your own colorscale as a {'nucleotide': COLOR} dict. Note that this is NOT a standard plotly colorscale.

**conservationcolor** (string; optional): Color of the conservation secondary barplot, in common name, hex, rgb or rgba format.

**conservationcolorscale** (string | list; default 'Viridis'): Colorscale of the conservation barplot, in Plotly colorscales (e.g. 'Viridis') or as custom Plotly colorscale under a list format. Note that this conservationcolorscale argument does NOT follow the same format as the colorscale argument.

**conservationmethod** (a value equal to: 'conservation' or 'entropy'; default 'entropy'): Whether to use most conserved ratio (MLE) 'conservation' or normalized entropy 'entropy' to determine conservation, which is a value between 0 and 1 where 1 is most conserved.

**conservationopacity** (number | string; optional): Opacity of the conservation secondary barplot as a value between 0 and 1.

**correctgap** (boolean; default True): Whether to normalize the conservation barchart By multiplying it elementwise with the gap barchart, as to lower the conservation values across sequences regions with many gaps.

**data** (string; optional): Input data, either in FASTA or Clustal format.

**eventDatum** (string; optional): A Dash prop that returns data on clicking, hovering or resizing the viewer.

**extension** (string; default 'fasta'): Format type of the input data, either in FASTA or Clustal.

**gapcolor** (string; default 'grey'): Color of the gap secondary barplot, in common name, hex, rgb or rgba format.

**gapcolorscale** (string | list; optional): Colorscale of the gap barplot, in Plotly colorscales (e.g. 'Viridis') or as custom Plotly colorscale under a list format. Note that this conservationcolorscale argument does NOT follow the same format as the colorscale argument.

**gapopacity** (number | string; optional): Opacity of the gap secondary barplot as a value between 0 and 1.

**groupbars** (boolean; default False): If both conservation and gap are enabled, toggles whether to group bars or to stack them as separate subplots. No effect if not both gap and conservation are shown.

**height** (number | string; default 900): Width of the Viewer. Property takes precedence over tilesheight if both are set.

**numtiles** (number; optional): Sets how many tiles to display across horitontally. If enabled, overrides tilewidth and sets the amount of tiles directly based off that value.

**opacity** (number | string; optional): Opacity of the main plot as a value between 0 and 1.

**overview** (a value equal to: 'heatmap', 'slider' or 'none'; default 'heatmap'): Toggles whether the overview should be a heatmap, a slider, or none.

**scrollskip** (number; default 10): If overview is set to 'scroll', determines how many tiles to skip with each slider movement. Has no effect if scroll is not enabled (such as with overview or none).

**showconsensus** (boolean; default True): Displays toggling the consensus sequence, where each nucleotide in the consensus sequence is the argmax of its distribution at a set nucleotide.

**showconservation** (boolean; default True): Enables the display of conservation secondary barplot where the most conserved nucleotides or amino acids get greater bars.

**showgap** (boolean; default True): Enables the display of gap secondary barplot where the sequence regions with the fewest gaps get the greatest bars.

**showid** (boolean; default True): Toggles displaying sequence IDs at left of alignment.

**showlabel** (boolean; default True): Toggles displaying sequence labels at left of alignment.

**textcolor** (string; optional): Color of the nucleotide labels, in common name, hex, rgb or rgba format. If left blank, handled by the colorscale automatically.

**textsize** (number | string; default 10): Size of the nucleotide labels, as a number.

**tickstart** (number | string; optional): Determines where to start annotating the first tile. If let blank will be automatically determined by Plotly. Equivalent to Plotly's tick0 property. Does not function if overview mode 'slider' is applied. (Current bug).

**ticksteps** (number | string; optional): Determines at what interval to keep annotating the tiles. If left blank will be automatially determined by Plotly. Equivalent to Plotly's dtick property. Does not function if overview mode 'slider' is applied. (Current bug).

**tileheight** (number; default 16): Sets how many pixels each nucleotide/amino acid on the Alignment Chart takes up vertically. If enabled, set height dynamically.

**tilewidth** (number; default 16): Sets how many pixels each nucleotide/amino acid on the Alignment Chart takes up horizontally. The total number of tiles (numtiles) seen horizontally is automatically determined by rounding the Viewer width divided by the tile width. the Viewwer width divided by the tile witdth.

**width** (number | string; optional): Width of the Viewer. Property takes precedence over tileswidth and numtiles if either of them is set.
