from __future__ import absolute_import

import pandas as pd
from pandas.api.types import is_numeric_dtype
import numpy as np

import plotly.offline as offline
import plotly.graph_objs as go

def create_volcano(
        dataframe,
        chrm="CHR",
        bp="BP",
        p="P",
        snp="SNP",
        gene="GENE",
        annotation=None,
        logp=True,
        title="Manhattan Plot",
        showgrid=True,
        ylabel='-log10(p)',
        point_size=5,
        showlegend=True,
        col=None,
        suggestiveline_value=-np.log10(1e-8),
        suggestiveline_color='blue',
        suggestiveline_width=1,
        genomewideline_value=-np.log10(5e-8),
        genomewideline_color='red',
        genomewideline_width=1,
        highlight=True,
        highlight_color="red",
):
    """
    Returns figure for a foo plot.
    :param dataframe: A pandas dataframe which must contain at least the
        following  three columns:
            - the chromosome number
            - genomic base-pair position
            - a numeric quantity to plot such as a p-value or zscore
    :param chrm: A string denoting the column name for the chromosome.
    Default is chr = "CHR". This column must be float or integer.
    Minimum number of chromosomes required is 1. If you have X, Y,
    or MT  chromosomes, be sure to renumber these 23, 24, 25, etc.
    :param bp: A string denoting the column name for the chromosomal
    position.
    Default is bp = "BP". This column must be float or integer.
    :param p: A string denoting the column name for the float quantity
    to be plotted on the y-axis. This column must be numeric.
    This does not have to be a p-value. It can be any numeric quantity
    such  as peak heights, bayes factors, test statistics. If it is not a
    p-value, make sure to set logp = FALSE.
        Default p = "P"
    :param effect_size: A string denoting the column name for the effect
    size. This column must be numeric or integer. Should not have
    missing, or NaN values.
        Default effect_size = "EFFECTSIZE"
    :param snp: A string denoting the column name for the SNP names
    (e.g. rs number). More generally, this column could be anything that
    identifies each point being plotted. For example, in an
    Epigenomewide association study (EWAS) this could be the probe name
    or cg number. This column should be a character. This argument is
    optional, however it is necessary to specify if you want to
    highlight points on the plot using the highlight argument in the
    figure method.
        Default = "SNP"
    :param gene: A string denoting the column name for the GENE names.
    This column could be a string or a float.
    More generally this could be any annotation information that you
    want to include in the plot.
        Default = "GENE"
    :param annotation: A string denoting the column name for an annotation.
    This column could be a string or a float.
    This could be any annotation information that you want to include
    in the plot (e.g. zscore, effect size, minor allele frequency).
        Default = None
    :param logp: If True the -log10 of the p-value is plotted.
    It isn't very useful to plot raw p-values, however plotting the raw
    value could be useful for other genome-wide plots, for example,
    peak heights, bayes factors, test statistics, other "scores" etc.
        Default = True
    :param title: Title of the graph.
        Default = "Manhattan Plot"
    :param ylabel: Label of the y axis.
        Default = "-log10(p)"
    :param point_size: Size of the points of the Scatter plot.
        Default = 5
    :param col: Color of the point of the Scatter plot. Can be in any color
    format accepted by plotly_js graph_objs.
        Default = None
    :param effect_size_line: A boolean which must be False to deactivate the
    option, or a list/array containing the upper and lower bounds of the
    effect size values. (Significant data point will have lower value than
    the lower bound or higher value than the higher bound). Keeping the
    default value will result in assigning the list [-1, 1] to the argument.
        Default = None
    :param effect_size_line_color: Color of the effect size lines.
        Default = "grey"
    :param effect_size_line_width: Width of the effect size lines.
        Default = 2
    :param genomewideline_value: A boolean which must be False to deactivate
    the option, or a numerical value corresponding to the p-value above which
    the  data points are considered significant.
        Default = -np.log10(5e-8)
    :param genomewideline_color: Color of the genome wide line. Can be in any
    color format accepted by plotly_js graph_objs
        Default = "red"
    :param genomewideline_width: Width of the genome wide line.
        Default = 1
    :param highlight: Boolean turning on/off the highlighting of data points
    considered significant.
        Default = True
    :param highlight_color: Color of the data points highlighted because
    considered as significant Can be in any color format accepted by
    plotly_js graph_objs.
        Default = "red"
    # ...
    Example 1:
    '''
    dataframe = pd.DataFrame(
        np.random.randint(0,100,size=(100, 3)),
        columns=['P', 'CHR', 'BP'])
    fig = create_manhattan(dataframe, title='XYZ Manhattan plot')

    plotly.offline.plot(fig, image='png')
    '''
    """

    vp = _VolcanoPlot(
        dataframe,
        chrm=chrm,
        bp=bp,
        p=p,
        snp=snp,
        gene=gene,
        annotation=annotation,
        logp=logp
    )

    return vp.figure(
        title=title,
        showgrid=showgrid,
        ylabel=ylabel,
        point_size=point_size,
        showlegend=showlegend,
        col=col,
        suggestiveline_value=suggestiveline_value,
        suggestiveline_color=suggestiveline_color,
        suggestiveline_width=suggestiveline_width,
        genomewideline_value=genomewideline_value,
        genomewideline_color=genomewideline_color,
        genomewideline_width=genomewideline_width,
        highlight=highlight,
        highlight_color=highlight_color
    )


def _get_hover_text(df, snpname=None, genename=None, annotationname=None):

    hover_text = ""
    if snpname is not None:
        hover_text = "SNP: " + df[snpname].astype(str)

    if genename is not None:
        hover_text = hover_text \
                     + "<br>GENE: " \
                     + df[genename].astype(str)

    if annotationname is not None:
        hover_text = hover_text \
                     + "<br>" \
                     + df[annotationname].astype(str)

    return hover_text


class _ManhattanPlot(object):

    def __init__(
            self,
            x,
            chrm="CHR",
            bp="BP",
            p="P",
            snp="SNP",
            gene="GENE",
            annotation=None,
            logp=True
    ):
        """
        :param x: A pandas dataframe which must contain at least the
        following  three columns:
            - the chromosome number
            - genomic base-pair position
            - a numeric quantity to plot such as a p-value or zscore
        :param chrm: A string denoting the column name for the chromosome.
        Default is chr = "CHR". This column must be float or integer.
        Minimum number of chromosomes required is 1. If you have X, Y,
        or MT  chromosomes, be sure to renumber these 23, 24, 25, etc.
        :param bp: A string denoting the column name for the chromosomal
        position.
        Default is bp = "BP". This column must be float or integer.
        :param p: A string denoting the column name for the float quantity
        to be plotted on the y-axis. Default is p = "P". This column must be
        float or integer.
        This does not have to be a p-value. It can be any numeric quantity
        such  as peak heights, bayes factors, test
        statistics. If it is not a p-value, make sure to set logp = FALSE.
        :param snp: A string denoting the column name for the SNP names
        (e.g. rs number). More generally, this column could be anything that
        identifies each point being plotted. For example, in an
        Epigenomewide association study (EWAS) this could be the probe name
        or cg number. This column should be a character. This argument is
        optional, however it is necessary to specify if you want to
        highlight points on the plot using
        the highlight argument in the manhattanly function
        :param gene: A string denoting the column name for the GENE names.
        This column could be a string or a float.
        More generally this could be any annotation information that you
        want to include in the plot.
        This argument is optional.
        :param annotation: A string denoting the column name for an annotation.
        This column could be a string or a float.
        This could be any annotation information that you want to include
        in the plot (e.g. zscore, effect size, minor allele frequency).
        This argument is optional.
        :param logp: If True the -log10 of the p-value is plotted.
        It isn't very useful to plot raw p-values, however plotting the raw
        value could be useful for other genome-wide plots, for example,
        peak heights, bayes factors, test statistics, other "scores" etc.
        :return: An object with a pandas dataframe
        """
        # checking the validity of the arguments

        # Make sure you have chrm, bp and p columns and that they are of
        # numeric type
        if chrm not in x.columns.values:
            raise KeyError("Column %s not found in 'x' data.frame" % chrm)
        else:
            if not is_numeric_dtype(x[chrm].dtype):
                raise TypeError("%s column should be numeric. Do you have "
                                "'X', 'Y', 'MT', etc? If so change to "
                                "numbers and try again." % chrm)

        if bp not in x.columns.values:
            raise KeyError("Column %s not found in 'x' data.frame" % bp)
        else:
            if not is_numeric_dtype(x[bp].dtype):
                raise TypeError("%s column should be numeric type" % bp)

        if p not in x.columns.values:
            raise KeyError("Column %s not found in 'x' data.frame" % p)
        else:
            if not is_numeric_dtype(x[p].dtype):
                raise TypeError("%s column should be numeric type" % p)

        # Create a new DataFrame with columns named after chrm, bp, and p.
        self.data = pd.DataFrame(data=x[[chrm, bp, p]])

        if snp is not None:
            if snp not in x.columns.values:
                # Warn if you don't have a snp column
                raise KeyError(
                    "snp argument specified as %s but column not found in "
                    "'x' data.frame" % snp)
            else:
                # If the input DataFrame has a snp column, add it to the new
                # DataFrame
                self.data[snp] = x[snp]

        if gene is not None:
            if gene not in x.columns.values:
                # Warn if you don't have a gene column
                raise KeyError(
                    "gene argument specified as %s but column not found in "
                    "'x' data.frame" % gene)
            else:
                # If the input DataFrame has a gene column, add it to the new
                # DataFrame
                self.data[gene] = x[gene]

        if annotation is not None:
            if annotation not in x.columns.values:
                # Warn if you don't have an annotation column
                raise KeyError(
                    "annotation argument specified as %s but column not "
                    "found in 'x' data.frame" % annotation
                )
            else:
                # If the input DataFrame has a gene column, add it to the new
                # DataFrame
                self.data[annotation] = x[annotation]

        self.xlabel = ""
        self.ticks = []
        self.ticksLabels = []
        self.nChr = len(x[chrm].unique())
        self.chrName = chrm
        self.pName = p
        self.snpName = snp
        self.geneName = gene
        self.annotationName = annotation
        self.logp = logp

        # Set positions, ticks, and labels for plotting

        self.index = 'INDEX'
        self.pos = 'POSITION'

        # Fixes the bug where one chromosome is missing by adding a sequential
        # index column.
        idx = 0
        for i in self.data[chrm].unique():
            idx = idx + 1
            self.data.loc[self.data[chrm] == i, self.index] = int(idx)
        # Set the type to be the same as provided for chrm column
        self.data[self.index] = \
            self.data[self.index].astype(self.data[chrm].dtype)

        # This section sets up positions and ticks. Ticks should be placed in
        # the middle of a chromosome. The new pos column is added that keeps
        # a running sum of the positions of each successive chromosome.
        # For example:
        # chrm bp pos
        # 1   1  1
        # 1   2  2
        # 2   1  3
        # 2   2  4
        # 3   1  5

        if self.nChr == 1:
            # For a single chromosome
            self.data[self.pos] = self.data[bp]
            self.ticks.append(int(len(self.data[self.pos]) / 2.) + 1)
            self.xlabel = "Chromosome %s position" % (self.data[chrm].unique())
            self.ticksLabels = self.ticks
        else:
            # For multiple chromosomes
            lastbase = 0
            for i in self.data[self.index].unique():
                if i == 1:
                    self.data.loc[self.data[self.index] == i, self.pos] = \
                        self.data.loc[self.data[self.index] == i, bp].values
                else:
                    prevbp = self.data.loc[self.data[self.index] == i - 1, bp]
                    # Shift the basepair position by the largest bp of the
                    # current chromosome
                    lastbase = lastbase + prevbp.iat[-1]

                    self.data.loc[self.data[self.index] == i, self.pos] = \
                        self.data.loc[self.data[self.index] == i, bp].values \
                        + lastbase

                tmin = min(self.data.loc[self.data[self.index] == i, self.pos])
                tmax = max(self.data.loc[self.data[self.index] == i, self.pos])
                self.ticks.append(int((tmin + tmax) / 2.) + 1)

            self.xlabel = 'Chromosome'
            self.data[self.pos] = self.data[self.pos].astype(
                self.data[bp].dtype)

            if self.nChr > 10:  # To avoid crowded labels
                self.ticksLabels = [
                    t if np.mod(int(t), 2)  # Only every two ticks
                    else ''
                    for t in self.data[chrm].unique()
                ]
            else:
                self.ticksLabels = self.data[chrm].unique()  # All the ticks

    def figure(
            self,
            title="Manhattan Plot",
            showgrid=True,
            ylabel='-log10(p)',
            point_size=5,
            showlegend=True,
            col=None,
            suggestiveline_value=-np.log10(1e-8),
            suggestiveline_color='blue',
            suggestiveline_width=1,
            genomewideline_value=-np.log10(5e-8),
            genomewideline_color='red',
            genomewideline_width=1,
            highlight=True,
            highlight_color="red",
    ):
        """
        :param title:
        :param showgrid:
        :param ylabel:
        :param point_size:
        :param showlegend:
        :param col:
        :param suggestiveline_value:
        :param suggestiveline_color:
        :param suggestiveline_width:
        :param genomewideline_value:
        :param genomewideline_color:
        :param genomewideline_width:
        :param highlight:
        :param highlight_color:
        :return:
        """
        # Initialize plot
        xmin = min(self.data[self.pos].values)
        xmax = max(self.data[self.pos].values)

        horizontallines = []

        if suggestiveline_value:
            suggestiveline = go.layout.Shape(
                type="line",
                fillcolor=suggestiveline_color,
                line=dict(
                    color=suggestiveline_color,
                    width=suggestiveline_width
                ),
                x0=xmin, x1=xmax, xref="x",
                y0=suggestiveline_value, y1=suggestiveline_value, yref="y"
            )
            horizontallines.append(suggestiveline)

        if genomewideline_value:
            genomewideline = go.layout.Shape(
                type="line",
                fillcolor=genomewideline_color,
                line=dict(
                    color=genomewideline_color,
                    width=genomewideline_width
                ),
                x0=xmin, x1=xmax, xref="x",
                y0=genomewideline_value, y1=genomewideline_value, yref="y"
            )
            horizontallines.append(genomewideline)

        data_to_plot = []  # To contain the data traces
        tmp = pd.DataFrame()  # Empty DataFrame to contain the highlighted data

        if highlight:
            if not isinstance(highlight, bool):
                if self.snpName not in self.data.columns.values:
                    raise KeyError(
                        "snp argument specified for highlight as %s but "
                        "column not found in the data.frame" % self.snpName
                    )
            else:
                if not genomewideline_value:
                    raise Warning(
                        "The genomewideline_value you entered is not a "
                        "positive value, or False, you cannot set highlight "
                        "to True in that case.")
                tmp = self.data

                # Sort the p-values (or -log10(p-values) above the line
                if genomewideline_value:
                    if self.logp:
                        tmp = tmp.loc[-np.log10(tmp[self.pName])
                                      > genomewideline_value]
                    else:
                        tmp = tmp.loc[tmp[self.pName] > genomewideline_value]

                highlight_hover_text = _get_hover_text(
                    tmp,
                    snpname=self.snpName,
                    genename=self.geneName,
                    annotationname=self.annotationName
                )

                if not tmp.empty:
                    data_to_plot.append(
                        go.Scattergl(
                            x=tmp[self.pos].values,
                            y=-np.log10(tmp[self.pName].values) if self.logp
                            else tmp[self.pName].values,
                            mode="markers",
                            text=highlight_hover_text,
                            marker=dict(
                                color=highlight_color,
                                size=point_size
                            ),
                            name="of interest"
                        )
                    )

        # Remove the highlighted data from the DataFrame if not empty
        if tmp.empty:
            data = self.data
        else:
            data = self.data.drop(self.data.index[tmp.index])

        if self.nChr == 1:

            if col is None:
                col = ['black']

            # If single chromosome, ticks and labels automatic.
            layout = go.Layout(
                title=title,
                xaxis={
                    'title': self.xlabel,
                    'showgrid': showgrid,
                    'range': [xmin, xmax],
                },
                yaxis={'title': ylabel}
            )

            hover_text = _get_hover_text(
                data,
                snpname=self.snpName,
                genename=self.geneName,
                annotationname=self.annotationName
            )

            data_to_plot.append(
                go.Scattergl(
                    x=data[self.pos].values,
                    y=-np.log10(data[self.pName].values) if self.logp
                    else data[self.pName].values,
                    mode="markers",
                    showlegend=showlegend,
                    marker={
                        'color': col[0],
                        'size': point_size,
                        'name': "chr%i" % data[self.chrName].unique()
                    },
                    text=hover_text
                )
            )
        else:
            # if multiple chrms, use the ticks and labels you created above.
            layout = go.Layout(
                title=title,
                xaxis={
                    'title': self.xlabel,
                    'showgrid': showgrid,
                    'range': [xmin, xmax],
                    'tickmode': "array",
                    'tickvals': self.ticks,
                    'ticktext': self.ticksLabels,
                    'ticks': "outside"
                },
                yaxis={'title': ylabel}
            )

            icol = 0
            if col is None:
                col = [
                    'black' if np.mod(i, 2)
                    else 'grey' for i in range(self.nChr)
                ]

            for i in data[self.index].unique():

                tmp = data[data[self.index] == i]

                chromo = tmp[self.chrName].unique()  # Get chromosome name for
                # labeling

                hover_text = _get_hover_text(
                    data,
                    snpname=self.snpName,
                    genename=self.geneName,
                    annotationname=self.annotationName
                )

                data_to_plot.append(
                    go.Scattergl(
                        x=tmp[self.pos].values,
                        y=-np.log10(tmp[self.pName].values) if self.logp
                        else tmp[self.pName].values,
                        mode="markers",
                        showlegend=showlegend,
                        name="chr%i" % chromo,
                        marker={
                            'color': col[icol],
                            'size': point_size
                        },
                        text=hover_text
                    )
                )

                icol = icol + 1

        layout.shapes = horizontallines

        return {
            "data": data_to_plot,
            "layout": layout,
        }
