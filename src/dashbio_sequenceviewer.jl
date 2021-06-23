# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_sequenceviewer

"""
    dashbio_sequenceviewer(;kwargs...)

A SequenceViewer component.
The sequence viewer component is used to display sequences
that represent proteins, strands of genomic information, and
more. It can apply a coverage to the sequence supplied (with
clickable coverage sections that can display specific information,
and an optional legend to describe the color codes used),
search through the sequence for specific regex, capture
mouse selection events of subparts of the sequence, display a
count of the number of nucleotides or amino acids in the
sequence,
Read more about the component here:
https://github.com/FlyBase/react-sequence-viewer
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `badge` (Bool; optional): The option of whether or not to display a badge showing the
amino acid count at the top of the component beside the title.
- `charsPerLine` (Real; optional): The number of amino acids that will display per line.
- `coverage` (optional): A coverage of the entire sequence; each section of the sequence
can have its own text color, background color, tooltip (on hover),
and an optional underscore. The props start and end represent the
beginning and terminating indices of the section in question.
Cannot be used at the same time as selection.. coverage has the following type: Array of lists containing elements 'start', 'end', 'color', 'bgcolor', 'tooltip', 'underscore', 'onclick'.
Those elements have the following types:
  - `start` (Real; optional)
  - `end` (Real; optional)
  - `color` (String; optional)
  - `bgcolor` (String; optional)
  - `tooltip` (String; optional)
  - `underscore` (Bool; optional)
  - `onclick` (optional)s
- `coverageClicked` (Real; optional): Contains the index of the section that was clicked last in
the coverage list supplied.
- `legend` (optional): A legend corresponding to the color codes above (optionally displayed).. legend has the following type: Array of lists containing elements 'name', 'color', 'underscore'.
Those elements have the following types:
  - `name` (String; optional)
  - `color` (String; optional)
  - `underscore` (Bool; optional)s
- `mouseSelection` (optional): Contains information about the subsequence selected
by the mouse. Start and end refer to the initial and
final indices, respectively, of the subsequence, and
"selection" contains the string that is selected.. mouseSelection has the following type: lists containing elements 'start', 'end', 'selection'.
Those elements have the following types:
  - `start` (Real; optional)
  - `end` (Real; optional)
  - `selection` (String; optional)
- `search` (Bool; optional): The option of whether or not to include a search bar in
the header. This supports regex.
- `selection` (optional): A highlighted section of the sequence; the color of the highlight
can also be defined. Takes a list of format [min, max, color] where
min is a number that represents the starting index of the selection,
max is a number that represents the stopping index of the selection,
and color is a string that defines the highlight color.
Cannot be used at the same time as coverage.
- `sequence` (String; optional): The amino acid sequence that will be displayed.
- `sequenceMaxHeight` (String; optional): The maximum height of the sequence.
- `showLineNumbers` (Bool; optional): The option of whether or not to display line numbers.
- `subpartSelected` (optional): A list of the subparts selected using the
"search" function or the "selection" property.. subpartSelected has the following type: Array of lists containing elements 'start', 'end', 'sequence'.
Those elements have the following types:
  - `start` (Real; optional)
  - `end` (Real; optional)
  - `sequence` (String; optional)s
- `title` (String; optional): A string that displays at the top of the component.
- `toolbar` (Bool; optional): The option of whether or not to display a toolbar at the top
that allows the user to choose the number of letters per line.
- `wrapAminoAcids` (Bool; optional): The option of whether or not to display the list of amino acids
as broken up into separate lines of a fixed length set by
charsPerLine.
"""
function dashbio_sequenceviewer(; kwargs...)
        available_props = Symbol[:id, :badge, :charsPerLine, :coverage, :coverageClicked, :legend, :mouseSelection, :search, :selection, :sequence, :sequenceMaxHeight, :showLineNumbers, :subpartSelected, :title, :toolbar, :wrapAminoAcids]
        wild_props = Symbol[]
        return Component("dashbio_sequenceviewer", "SequenceViewer", "dash_bio", available_props, wild_props; kwargs...)
end

