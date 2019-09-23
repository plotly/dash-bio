# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class AlignmentChart(Component):
    """An AlignmentChart component.
The Alignment Viewer (MSA) component is used to align multiple genomic
or proteomic sequences from a FASTA or Clustal file. Among its
extensive set of features, the multiple sequence alignment viewer
can display multiple subplots showing gap and conservation info,
alongside industry standard colorscale support and consensus sequence.
No matter what size your alignment is, Aligment Viewer is able to display
your genes or proteins snappily thanks to the underlying WebGL architecture
powering the component. You can quickly scroll through your long sequence
with a slider or a heatmap overview.
Note that the AlignmentChart only returns a chart of the sequence, while
AlignmentViewer has integrated controls for colorscale, heatmaps, and subplots
allowing the user to interactively control their sequences.
Read more about the component here:
https://github.com/plotly/react-alignment-viewer

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components
in callbacks. The ID needs to be unique across all of the
components in an app.
- eventDatum (string; optional): A Dash prop that returns data on clicking, hovering or resizing the viewer.
- data (string; optional): Input data, either in FASTA or Clustal format.
- extension (string; default 'fasta'): Format type of the input data, either in FASTA or Clustal.
- colorscale (string | dict; default 'clustal2'): Colorscale in 'buried', 'cinema', 'clustal', 'clustal2', 'helix', 'hydrophobicity'
'lesk', 'mae', 'nucleotide', 'purine', 'strand', 'taylor', 'turn', 'zappo',
or your own colorscale as a {'nucleotide': COLOR} dict.
Note that this is NOT a standard plotly colorscale.
- opacity (number | string; optional): Opacity of the main plot as a value between 0 and 1.
- textcolor (string; optional): Color of the nucleotide labels, in common name, hex, rgb or rgba format.
If left blank, handled by the colorscale automatically.
- textsize (number | string; default 10): Size of the nucleotide labels, as a number.
- showlabel (boolean; default True): Toggles displaying sequence labels at left of alignment
- showid (boolean; default True): Toggles displaying sequence IDs at left of alignment.
- showconservation (boolean; default True): Enables the display of conservation secondary barplot where the most conserved
nucleotides or amino acids get greater bars.
- conservationcolor (string; optional): Color of the conservation secondary barplot, in common name, hex, rgb or rgba format.
- conservationcolorscale (string | list; default 'Viridis'): Colorscale of the conservation barplot, in Plotly colorscales (e.g. 'Viridis')
or as custom Plotly colorscale under a list format.
Note that this conservationcolorscale argument
does NOT follow the same format as the colorscale argument.
- conservationopacity (number | string; optional): Opacity of the conservation secondary barplot as a value between 0 and 1.
- conservationmethod (a value equal to: 'conservation', 'entropy'; default 'entropy'): Whether to use most conserved ratio (MLE) 'conservation'
or normalized entropy 'entropy' to determine conservation,
which is a value between 0 and 1 where 1 is most conserved.
- correctgap (boolean; default True): Whether to normalize the conservation barchart
By multiplying it elementwise with the gap barchart, as to
lower the conservation values across sequences regions with many gaps.
- showgap (boolean; default True): Enables the display of gap secondary barplot where the sequence regions
with the fewest gaps get the greatest bars.
- gapcolor (string; default 'grey'): Color of the gap secondary barplot, in common name, hex, rgb or rgba format.
- gapcolorscale (string | list; optional): Colorscale of the gap barplot, in Plotly colorscales (e.g. 'Viridis')
or as custom Plotly colorscale under a list format.
Note that this conservationcolorscale argument
does NOT follow the same format as the colorscale argument.
- gapopacity (number | string; optional): Opacity of the gap secondary barplot as a value between 0 and 1.
- groupbars (boolean; default False): If both conservation and gap are enabled,
toggles whether to group bars or to stack them as separate subplots.
No effect if not both gap and conservation are shown.
- showconsensus (boolean; default True): Displays toggling the consensus sequence, where each nucleotide in the
consensus sequence is the argmax of its distribution at a set nucleotide.
- tilewidth (number; default 16): Sets how many pixels each nucleotide/amino acid on the Alignment Viewer
takes up horizontally. The total number of tiles (numtiles) seen
horizontally is automatically determined by rounding
the Viewer width divided by the tile width.
the Viewwer width divided by the tile witdth.
- tileheight (number; default 16): Sets how many pixels each nucleotide/amino acid on the Alignment Viewer
takes up vertically.
If enabled, set height dynamically.
- overview (a value equal to: 'heatmap', 'slider', 'none'; default 'heatmap'): Toggles whether the overview should be a heatmap, a slider, or none.
- numtiles (number; optional): Sets how many tiles to display across horitontally. If enabled,
overrides tilewidth and sets the amount of tiles directly based off
that value.
- scrollskip (number; default 10): If overview is set to 'scroll', determines how many tiles to skip
with each slider movement.
Has no effect if scroll is not enabled (such as with overview or none).
- tickstart (number | string; optional): Determines where to start annotating the first tile.
If let blank will be automatically determined by Plotly.
Equivalent to Plotly's tick0 property.
Does not function if overview mode 'slider' is applied. (Current bug)
- ticksteps (number | string; optional): Determines at what interval to keep annotating the tiles.
If left blank will be automatially determined by Plotly.
Equivalent to Plotly's dtick property.
Does not function if overview mode 'slider' is applied. (Current bug)
- width (number | string; optional): Width of the Viewer.
Property takes precedence over tileswidth and numtiles
if either of them is set.
- height (number | string; default 900): Width of the Viewer.
Property takes precedence over tilesheight if both
are set."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, eventDatum=Component.UNDEFINED, data=Component.UNDEFINED, extension=Component.UNDEFINED, colorscale=Component.UNDEFINED, opacity=Component.UNDEFINED, textcolor=Component.UNDEFINED, textsize=Component.UNDEFINED, showlabel=Component.UNDEFINED, showid=Component.UNDEFINED, showconservation=Component.UNDEFINED, conservationcolor=Component.UNDEFINED, conservationcolorscale=Component.UNDEFINED, conservationopacity=Component.UNDEFINED, conservationmethod=Component.UNDEFINED, correctgap=Component.UNDEFINED, showgap=Component.UNDEFINED, gapcolor=Component.UNDEFINED, gapcolorscale=Component.UNDEFINED, gapopacity=Component.UNDEFINED, groupbars=Component.UNDEFINED, showconsensus=Component.UNDEFINED, tilewidth=Component.UNDEFINED, tileheight=Component.UNDEFINED, overview=Component.UNDEFINED, numtiles=Component.UNDEFINED, scrollskip=Component.UNDEFINED, tickstart=Component.UNDEFINED, ticksteps=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'eventDatum', 'data', 'extension', 'colorscale', 'opacity', 'textcolor', 'textsize', 'showlabel', 'showid', 'showconservation', 'conservationcolor', 'conservationcolorscale', 'conservationopacity', 'conservationmethod', 'correctgap', 'showgap', 'gapcolor', 'gapcolorscale', 'gapopacity', 'groupbars', 'showconsensus', 'tilewidth', 'tileheight', 'overview', 'numtiles', 'scrollskip', 'tickstart', 'ticksteps', 'width', 'height']
        self._type = 'AlignmentChart'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'eventDatum', 'data', 'extension', 'colorscale', 'opacity', 'textcolor', 'textsize', 'showlabel', 'showid', 'showconservation', 'conservationcolor', 'conservationcolorscale', 'conservationopacity', 'conservationmethod', 'correctgap', 'showgap', 'gapcolor', 'gapcolorscale', 'gapopacity', 'groupbars', 'showconsensus', 'tilewidth', 'tileheight', 'overview', 'numtiles', 'scrollskip', 'tickstart', 'ticksteps', 'width', 'height']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(AlignmentChart, self).__init__(**args)
