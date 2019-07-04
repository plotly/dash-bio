\name{dashbioManhattan}

\alias{dashbioManhattan}

\title{Manhattan component}

\description{
Creates an interactive Manhattan plot with multiple annotation options. This 
plot can be used to display the results of genomic studies sorted out by 
chromosome. dashbioManhattan is a simple wrapper for the manhattanly and 
manhattanr functions in the manhattanly package.
}

\usage{
dashbioManhattan(dataframe, chrm = "CHR", bp = "BP", p = "P",
snp = "SNP", logp = TRUE, title = "Manhattan Plot", showgrid = FALSE, 
xlabel = NULL, ylabel = "-log10(p)", point_size = 5, showlegend = FALSE,  
col = c("#969696", "#252525"), suggestiveline_value = -log10(1e-05), 
suggestiveline_color = "blue", suggestiveline_width = 1, 
genomewideline_value = -log10(5e-08), genomewideline_color = "red",
genomewideline_width = 1, highlight = NULL, highlight_color = "#00FF00", ...)
}

\arguments{
\item{dataframe}{Can be an object of class \code{manhattanr} produced by the
\code{\link{manhattanr}} function or a \code{data.frame} which must contain
at least the following three columns: \itemize{ \item{the chromosome
number} \item{genomic base-pair position} \item{a numeric quantity to plot
such as a p-value or zscore} }}

\item{chrm}{Character. A string denoting the column name for the chromosome. Default is
\code{chrm = "CHR"}. This column must be \code{numeric} or \code{integer}.
Minimum number of chromosomes required is 1. If you have X, Y, or MT
chromosomes, be sure to renumber these 23, 24, 25, etc.}

\item{bp}{Character. A string denoting the column name for the chromosomal position.
Default is \code{bp = "BP"}. This column must be \code{numeric} or
\code{integer}.}

\item{p}{Character. A string denoting the column name for the numeric quantity to be
plotted on the y-axis. Default is \code{p = "P"}. This column must be
\code{numeric} or \code{integer}. This does not have to be a p-value. It
can be any numeric quantity such as peak heights, bayes factors, test
statistics. If it is not a p-value, make sure to set \code{logp = FALSE}.}

\item{snp}{Character. A string denoting the column name for the SNP names (e.g. rs
number). More generally, this column could be anything that identifies each
point being plotted. For example, in an Epigenomewide association study
(EWAS) this could be the probe name or cg number. This column should be a
\code{character}. This argument is optional, however it is necessary to
specify if you want to highlight points on the plot using the
\code{highlight} argument in the \code{\link{manhattanly}} function}

\item{logp}{Logical. If TRUE, the -log10 of the p-value is plotted. It isn't very
useful to plot raw p-values, but plotting the raw value could be useful for
other genome-wide plots, for example, peak heights, bayes factors, test
statistics, other "scores" etc.}

\item{title}{Character. Title of the plot. Default is \code{"Manhattan Plot"}}

\item{showgrid}{Logical. Should gridlines be shown. Default is \code{FALSE}.}

\item{xlabel}{Character. X-axis label. Default is \code{NULL} which means that the label
is automatically determined by the \code{\link{manhattanr}} function.
Specify here to overwrite the default.}

\item{ylabel}{Character. Y-axis label. Default is \code{"-log10(p)"}.}

\item{point_size}{Numeric. A \code{numeric} indicating the size of the points on the
plot. Default is 5}

\item{showlegend}{Logical. Should a legend be shown. Default is \code{FALSE}.}

\item{col}{Vector of type character. A character vector indicating the colors of each chromosome. If
the number of colors specified is less than the number of unique
chromosomes, then the elements will be recycled. Can be
\href{http://www.rapidtables.com/web/color/RGB_Color.htm}{Hex Codes} as
well.}

\item{suggestiveline_value}{Numeric | logical. Where to draw a "suggestive" line. Default is
\code{-log10(1e-5)}. Set to \code{FALSE} to disable.}

\item{suggestiveline_color}{Character. Color of "suggestive" line. Only used if
\code{suggestiveline} is not set to \code{FALSE}. Default is \code{"blue"}.}

\item{suggestiveline_width}{Numeric. Width of \code{suggestiveline}. Default is 1.}

\item{genomewideline_value}{Numeric | logical. Where to draw a "genome-wide sigificant" line. Default
\code{-log10(5e-8)}. Set to \code{FALSE} to disable.}

\item{genomewideline_color}{Character. Color of "genome-wide sigificant" line. Only used
if \code{genomewideline} is not set to \code{FALSE}. Default is
\code{"red"}.}

\item{genomewideline_width}{Numeric. Width of \code{genomewideline}. Default is 1.}

\item{highlight}{Vector of type character. A character vector of SNPs in your dataset to highlight.
These SNPs should all be in your dataset. Default is \code{NULL} which
means that nothing is highlighted.}

\item{highlight_color}{Character. Color used to highlight points. Only used if
\code{highlight} argument has been specified}

\item{...}{other parameters passed to \code{\link{manhattanr}}}
}

\examples{
\dontrun{
library(dash)
library(dashHtmlComponents)
library(dashCoreComponents)
library(dashBio)

app <- Dash$new()
  
app$layout(
    htmlDiv(
      list(
        dccGraph(id = 'manhattan-plot', 
                 figure = dashbioManhattan(HapMap,
                 snp = "SNP",
                 highlight = significantSNP)
        )
      )
    )
)

app$run_server()
}
}
