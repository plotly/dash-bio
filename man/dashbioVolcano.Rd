\name{dashbioVolcano}

\alias{dashbioVolcano}

\title{Volcano component}

\description{
Creates an interactive Volcano plot with multiple annotation options. This plot 
can be used to identify clinically meaningful markers in genomic experiments. 
dashbioVolcano is a simple wrapper for the volcanoly and volcanor functions 
in the manhattanly package.
}

\usage{
dashbioVolcano(dataframe,  p = "P", effect_size = "EFFECTSIZE", snp = "SNP", 
gene = "GENE", title = "Volcano Plot", xlabel = NULL, 
ylabel = "-log10(p)", point_size = 5, col = c("#252525"), effect_size_line = c(-1, 1), 
effect_size_line_color = "blue", effect_size_line_width = 1, 
genomewideline_value = -log10(1e-05), genomewideline_color = "grey", 
genomewideline_width = 0.5, highlight = NULL, highlight_color = "red", ...) 
}

\arguments{
\item{dataframe}{Can be an object of class \code{volcanor} produced by the 
\code{\link{volcanor}} function or a \code{data.frame} which must contain 
at least the following two columns: \itemize{ \item{a p-value, must be 
numeric} \item{a measure of the strength of association, typically an odds 
ratio, regression coefficient or log fold change. Must be numeric} }}

\item{p}{Character. A chracter string denoting the column name for the p-values. Default
is \code{p = "P"}. This column must be \code{numeric} or \code{integer}. 
Should not have missing, NA, NaN, or NULL values and should be between 0 
and 1.}

\item{effect_size}{Numeric | logical. Where to draw a "suggestive" line on the x-axis. 
Default is \code{-1 and +1}. Must be a vector of length 2. If a longer 
vector is supplied, only the first two elements will be used. First element
must be smaller than second element. Set to \code{FALSE} to disable.}

\item{snp}{Character. A string denoting the column name for the SNP names (e.g. rs 
number). This argument is optional but required if you want to highlight 
any points. More generally, this column could be anything that identifies 
each point being plotted. For example, in an Epigenomewide association 
study (EWAS) this could be the probe name or cg number. This column should 
contain \code{characters}. This argument is necessary. 
\code{\link{volcanoly}} function}

\item{gene}{Character | numeric. A string denoting the column name for the GENE names. This column
could be a \code{character} or \code{numeric}. More generally this could be
any annotation information that you want to include in the plot. This
argument is optional.}

\item{annotation}{Character. A string denoting the column name for an annotation. This
column could be a \code{character} or \code{numeric}. This could be any
annotation information that you want to include in the plot (e.g. zscore,
effect size, minor allele frequency). This argument is optional.}

\item{title}{Character. Title of the plot. Default is \code{"Volcano Plot"}}

\item{xlabel}{Character. X-axis label. Default is \code{NULL} which means that the label 
is automatically determined by the \code{\link{volcanor}} function. Specify
here to overwrite the default.}

\item{ylabel}{Character. Y-axis label. Default is \code{"-log10(p)"}.}

\item{point_size}{Numeric. A \code{numeric} indicating the size of the points on the 
plot. Default is 5}

\item{col}{Character. A character of length 1 indicating the color of the points. Only 
the first argument will be used if more than one color is supplied. Can be 
\href{http://www.rapidtables.com/web/color/RGB_Color.htm}{Hex Codes} as 
well.}

\item{effect_size_line}{Numeric | logical. Where to draw a "suggestive" line on the x-axis. 
Default is \code{-1 and +1}. Must be a vector of length 2. If a longer 
vector is supplied, only the first two elements will be used. First element
must be smaller than second element. Set to \code{FALSE} to disable.}

\item{effect_size_line_color}{Character. Color of "suggestive" line. Only used if 
\code{effect_size_line} is not set to \code{FALSE}. Default is 
\code{"blue"}.}

\item{effect_size_line_width}{Numeric. Width of \code{effect_size_line}. Default is 1.}

\item{genomewideline_value}{Numeric | logical. Where to draw a "genome-wide sigificant" line. Default 
\code{-log10(1e-5)}. Set to \code{FALSE} to disable. If more than one 
element is provided, only the first will be used}

\item{genomewideline_color}{Character. Color of "genome-wide sigificant" line. Only used
if \code{genomewideline} is not set to \code{FALSE}. Default is 
\code{"red"}.}

\item{genomewideline_width}{Numeric. Width of \code{genomewideline}. Default is 1.}

\item{highlight}{Vector of type character | logical. A character vector of SNPs in your dataset to highlight. 
These SNPs should all be in your dataset. Default is \code{NULL} which 
means that all points that are both beyond \code{genomewideline_value} and 
\code{effect_size_line} are highlighted. Set to \code{FALSE} if you don't 
want any points highlighted.}

\item{highlight_color}{Character. Color used to highlight points. Only used if 
\code{highlight} argument has been specified}

\item{...}{other parameters passed to \code{\link{volcanor}}}
}

\examples{
\dontrun{
library(dash)
library(dashBio)
library(dashHtmlComponents)
library(dashCoreComponents)

app <- Dash$new()

data(voldata)

app$layout(
  htmlDiv(
    list(
      'Effect sizes',
      dccRangeSlider(
        id = 'volcanoplot-input',
        min = -3,
        max = 3,
        step = 0.05,
        marks = setNames(
          lapply(-3:3, 
                 function(i){
                   list(label = as.character(i))
                 }), 
          -3:3
        ),
        value = c(-0.5, 1)
      ),
      htmlBr(),
      htmlDiv(
        dccGraph(
          id = 'my-dashbio-volcanoplot',
          figure = dashbioVolcano(
            dataframe = voldata
          )
        )
      )
    )
  )
)

app$callback(
  output = list(id = 'my-dashbio-volcanoplot', property = 'figure'),
  params = list(input(id = 'volcanoplot-input', property = 'value')),
  function(effects) {

    dashbioVolcano(
      dataframe = voldata,
      genomewideline_value = 2.5,
      effect_size_line = unlist(effects),
      
    )
  }
)

app$run_server()
}
}
