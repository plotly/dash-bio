% Auto-generated: do not edit by hand
\name{dashbioSequenceViewer}

\alias{dashbioSequenceViewer}

\title{SequenceViewer component}

\description{
The sequence viewer component is used to display sequences that represent proteins, strands of genomic information, and more. It can apply a coverage to the sequence supplied (with clickable coverage sections that can display specific information, and an optional legend to describe the color codes used), search through the sequence for specific regex, capture mouse selection events of subparts of the sequence, display a count of the number of nucleotides or amino acids in the sequence, Read more about the component here: https://github.com/FlyBase/react-sequence-viewer
}

\usage{
dashbioSequenceViewer(id=NULL, sequence=NULL, showLineNumbers=NULL,
wrapAminoAcids=NULL, charsPerLine=NULL, toolbar=NULL, search=NULL, title=NULL,
sequenceMaxHeight=NULL, badge=NULL, selection=NULL, coverage=NULL, legend=NULL,
coverageClicked=NULL, mouseSelection=NULL, subpartSelected=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{sequence}{Character. The amino acid sequence that will be displayed.}

\item{showLineNumbers}{Logical. The option of whether or not to display line numbers.}

\item{wrapAminoAcids}{Logical. The option of whether or not to display the list of amino acids
as broken up into separate lines of a fixed length set by
charsPerLine.}

\item{charsPerLine}{Numeric. The number of amino acids that will display per line.}

\item{toolbar}{Logical. The option of whether or not to display a toolbar at the top
that allows the user to choose the number of letters per line.}

\item{search}{Logical. The option of whether or not to include a search bar in
the header. This supports regex.}

\item{title}{Character. A string that displays at the top of the component.}

\item{sequenceMaxHeight}{Character. The maximum height of the sequence.}

\item{badge}{Logical. The option of whether or not to display a badge showing the
amino acid count at the top of the component beside the title.}

\item{selection}{List. A highlighted section of the sequence; the color of the highlight
can also be defined. Takes a list of format [min, max, color] where
min is a number that represents the starting index of the selection,
max is a number that represents the stopping index of the selection,
and color is a string that defines the highlight color.
Cannot be used at the same time as coverage.}

\item{coverage}{List. A coverage of the entire sequence; each section of the sequence
can have its own text color, background color, tooltip (on hover),
and an optional underscore. The props start and end represent the
beginning and terminating indices of the section in question.
Cannot be used at the same time as selection.}

\item{legend}{List. A legend corresponding to the color codes above (optionally displayed).}

\item{coverageClicked}{Numeric. Contains the index of the section that was clicked last in
the coverage list supplied.}

\item{mouseSelection}{Contains information about the subsequence selected
by the mouse. Start and end refer to the initial and
final indices, respectively, of the subsequence, and
"selection" contains the string that is selected.}

\item{subpartSelected}{List. A list of the subparts selected using the
"search" function or the "selection" property.}
}

