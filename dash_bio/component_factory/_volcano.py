from __future__ import absolute_import

import numpy as np
import pandas as pd
from pandas.api.types import is_numeric_dtype

import plotly.graph_objects as go

from .utils import _get_hover_text

GENOMEWIDE_LINE_LABEL = 'genomewide_line'
EFFECT_SIZE_LINE_MIN_LABEL = 'effect size min line'
EFFECT_SIZE_LINE_MAX_LABEL = 'effect size max line'


def VolcanoPlot(
        dataframe,
        effect_size='EFFECTSIZE',
        p='P',
        snp='SNP',
        gene='GENE',
        annotation=None,
        logp=True,
        title='Volcano Plot',
        xlabel=None,
        ylabel='-log10(p)',
        point_size=5,
        col=None,
        effect_size_line=None,
        effect_size_line_color='grey',
        effect_size_line_width=0.5,
        genomewideline_value=-np.log10(5e-8),
        genomewideline_color='grey',
        genomewideline_width=1,
        highlight=True,
        highlight_color="red"
):
    """Return a Dash Bio VolcanoPlot figure.

Keyword arguments:
- dataframe (dataframe; required): A pandas dataframe which must contain at
    least the following two columns:
            - a numeric quantity to plot such as a p-value or zscore
            - a numeric quantity measuring the strength of association,
              typically an odds ratio, regression coefficient, or log fold
              change. Here, it is referred to as `effect_size`.
- effect_size (string; default 'EFFECTSIZE'): A string denoting the
    column name for the effect size. This column must be numeric and must
    not contain missing nor NaN values.
- p (string; default 'P'): A string denoting the column name for the
    float quantity to be plotted on the y-axis. This column must be
    numeric. It does not have to be a p-value. It can be any
    numeric quantity such as peak heights, Bayes factors, test
    statistics. If it is not a p-value, make sure to set logp = False.
- snp (string; default 'SNP'): A string denoting the column name for
    the SNP names (e.g., rs number). More generally, this column could
    be anything that identifies each point being plotted. For example,
    in an Epigenomewide association study (EWAS), this could be the
    probe name or cg number. This column should be a character. This
    argument is optional, however it is necessary to specify it if you
    want to highlight points on the plot using the highlight argument
    in the figure method.
- gene (string; default 'GENE'): A string denoting the column name for
    the GENE names. More generally, this could be any annotation
    information that should be included in the plot.
- annotation (string; optional): A string denoting the column to use
    as annotations. This could be any annotation information that you
    want to include in the plot (e.g., zscore, effect size, minor
    allele frequency).
- logp (bool; default True): If True, the -log10 of the p-value is
    plotted. It isn't very useful to plot raw p-values; however,
    plotting the raw value could be useful for other genome-wide plots
    (e.g., peak heights, Bayes factors, test statistics, and other
    "scores").
- title (string; default 'Volcano Plot'): Title of the graph.
- xlabel (string; optional): Label of the x axis.
- ylabel (string; default '-log10(p)'): Label of the y axis.
- point_size (number; default 5): Size of the points of the Scatter
    plot.
- col (string; optional): Color of the points of the Scatter plot. Can
    be in any color format accepted by plotly.graph_objects.
- effect_size_line (bool | list; default [-1, 1]): A boolean which
    must be either False to deactivate the option, or a list/array containing
    the upper and lower bounds of the effect size values. Significant
    data points will have lower values than the lower bound, or higher
    values than the higher bound.  Keeping the default value will
    result in assigning the list [-1, 1] to the argument.
- effect_size_line_color (string; default 'grey'): Color of the effect
    size lines.
- effect_size_line_width (number; default 2): Width of the effect size
    lines.
- genomewideline_value (bool | number; default -log10(5e-8)): A
    boolean which must be either False to deactivate the option, or a
    numerical value corresponding to the p-value above which the data
    points are considered significant.
- genomewideline_color (string; default 'red'): Color of the
    genome-wide line. Can be in any color format accepted by
    plotly.graph_objects.
- genomewideline_width (number; default 1): Width of the genome-wide
    line.
- highlight (bool; default True): Whether the data points considered
    significant should be highlighted or not.
- highlight_color (string; default 'red'): Color of the data points
    highlighted because considered significant. Can be in any color
    format accepted by plotly.graph_objects.

    # ...
    Example 1: Random Volcano Plot
    '''
    dataframe = pd.DataFrame(
        np.random.randint(0,100,size=(100, 2)),
        columns=['P', 'EFFECTSIZE'])
    fig = create_volcano(dataframe, title='XYZ Volcano plot')

    plotly.offline.plot(fig, image='png')
    '''

    """

    vp = _VolcanoPlot(
        dataframe,
        effect_size=effect_size,
        p=p,
        snp=snp,
        gene=gene,
        annotation=annotation,
        logp=logp
    )

    return vp.figure(
        title=title,
        xlabel=xlabel,
        ylabel=ylabel,
        point_size=point_size,
        col=col,
        effect_size_line=effect_size_line,
        effect_size_line_color=effect_size_line_color,
        effect_size_line_width=effect_size_line_width,
        genomewideline_value=genomewideline_value,
        genomewideline_color=genomewideline_color,
        genomewideline_width=genomewideline_width,
        highlight=highlight,
        highlight_color=highlight_color
    )


class _VolcanoPlot():

    def __init__(
            self,
            x,
            effect_size='EFFECTSIZE',
            p='P',
            snp='SNP',
            gene='GENE',
            annotation=None,
            logp=True
    ):
        """Return a Dash Bio VolcanoPlot object.

    Keyword arguments:
    - x (dataframe; required): A pandas dataframe which must contain at
        least the following two columns:
                - a numeric quantity to plot such as a p-value or zscore
                - a numeric quantity measuring the strength of association,
                  typically an odds ratio, regression coefficient, or log fold
                  change. Here, it is referred to as `effect_size`.
    - p (string; optional): A string denoting the column name for the
        float quantity to be plotted on the y-axis. This column must be
        numeric. It does not have to be a p-value. It can be any
        numeric quantity such as peak heights, Bayes factors, test
        statistics. If it is not a p-value, make sure to set logp =
        False.
    - effect_size (string; optional): A string denoting the column name
        for the effect size. This column must be numeric and must not
        contain missing nor NaN values.
    - snp (string; optional): A string denoting the column name for the
        SNP names (e.g. rs number). More generally, this column could be
        anything that identifies each point being plotted. For example, in
        an Epigenomewide association study (EWAS) this could be the probe
        name or cg number. This column should be a character. This
        argument is optional, however it is necessary to specify if you
        want to highlight points on the plot using the highlight argument
        in the figure method.
    - gene (string; optional): A string denoting the column name for the
        GENE names. More generally, this could be any annotation
        information that should be included in the plot.
    - annotation (string; optional): A string denoting the column name for
        an annotation. This could be any annotation information that you
        want to include in the plot (e.g. zscore, effect size, minor
        allele frequency).
    - logp (bool; optional): If True, the -log10 of the p-value is
        plotted.  It isn't very useful to plot raw p-values; however,
        plotting the raw value could be useful for other genome-wide plots
        (e.g., peak heights, bayes factors, test statistics, and other
        "scores").
    """

        # checking the validity of the arguments

        # Make sure you have effect_size and p columns and that they are of
        # numeric type
        if effect_size not in x.columns.values:
            raise KeyError("Column %s not found in 'x' data.frame"
                           % effect_size)
        else:
            if not is_numeric_dtype(x[effect_size].dtype):
                raise TypeError("%s column should be numeric. Do you have "
                                "'X', 'Y', 'MT', etc? If so change to "
                                "numbers and try again." % effect_size)

        if p not in x.columns.values:
            raise KeyError("Column %s not found in 'x' data.frame" % p)
        else:
            if not is_numeric_dtype(x[p].dtype):
                raise TypeError("%s column should be numeric type" % p)
            else:
                if (x[p] < 0).any():
                    raise ValueError("Negative p-values found."
                                     " These must be removed.")
                if (x[p] > 1).any():
                    raise ValueError("P-values greater than 1 found. "
                                     "These must be removed.")
                if np.isnan(x[p]).any():
                    raise ValueError("NaN p-values found. These must be "
                                     "removed")

        # Create a new DataFrame with columns named after effect_size and p.
        self.data = pd.DataFrame(data=x[[effect_size, p]])

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

        self.xlabel = "Effect Size"
        self.ticks = []
        self.ticksLabels = []
        self.effectSize = effect_size
        self.pName = p
        self.snpName = snp
        self.geneName = gene
        self.annotationName = annotation
        self.logp = logp

    def figure(
            self,
            title='Volcano Plot',
            xlabel=None,
            ylabel='-log10(p)',
            point_size=5,
            col=None,
            effect_size_line=None,
            effect_size_line_color='grey',
            effect_size_line_width=0.5,
            genomewideline_value=-np.log10(5e-8),
            genomewideline_color='grey',
            genomewideline_width=1,
            highlight=True,
            highlight_color='red',
    ):
        """Return a figure object compatible with plotly.graph_objects.

        Keyword arguments:
    - title (string; default 'Volcano Plot'): Title of the
        graph.
    - xlabel (string; optional): Label of the x axis.
    - ylabel (string; default '-log10(p)'): Label of the y axis.
    - point_size (number; default 5): Size of the points of the scatter
      plot.
    - col (string; optional): Color of the points of the Scatter plot. Can
        be in any color format accepted by plotly.graph_objects.
    - effect_size_line (bool | list; default [-1, 1]): A boolean which must be
        either False to deactivate the option, or a list/array containing the
        upper and lower bounds of the effect size values. Significant data
        points will have lower values than the lower bound, or higher
        values than the higher bound.  Keeping the default value will
        result in assigning the list [-1, 1] to the argument.
    - effect_size_line_color (string; default 'grey'): Color of the
        effect size lines.
    - effect_size_line_width (number; default 2): Width of the effect
      size lines.
    - genomewideline_value (bool | number; default -log10(5e-8)): A
        boolean which must be either False to deactivate the option, or a
        numerical value corresponding to the p-value above which the
        data points are considered significant.
    - genomewideline_color (string; default 'red'): Color of the genome-wide
        line. Can be in any color format accepted by plotly.graph_objects.
    - genomewideline_width (number; default 1): Width of the genome-wide
        line.
    - highlight (bool; default True): Whether the data points considered
      significant should be highlighted or not.
    - highlight_color (string; default 'red'): Color of the data points
        highlighted because considered significant. Can be in any color
        format accepted by plotly.graph_objects.
        """

        if xlabel is None:
            xlabel = self.xlabel

        if effect_size_line is None:
            effect_size_line = [-1, 1]

        if not effect_size_line and not isinstance(effect_size_line, bool):
            raise ValueError("If effect_size_line is a logical, it must be "
                             "set to False")

        if np.size(effect_size_line) > 2:
            raise ValueError("The argument effect_size_line should be a "
                             "vector or a list of maximum two components")

        # Initialize plot
        xmin = min(self.data[self.effectSize].values)
        xmax = max(self.data[self.effectSize].values)
        # Taking 105% of the max value of data for x axis range
        xlim = 1.05 * np.max(np.abs([xmin, xmax]))

        if self.logp:
            ymin = min(-np.log10(self.data[self.pName].values))
            ymax = max(-np.log10(self.data[self.pName].values))
        else:
            ymin = min(self.data[self.pName].values)
            ymax = max(self.data[self.pName].values)

        if col is None:
            col = 'black'

        layout = go.Layout(
            title=title,
            hovermode='closest',
            legend={
                'x': 0.85,
                'y': 0.1,
                'bgcolor': '#f2f5fa'
            },
            xaxis={
                'title': xlabel,
                'zeroline': False,
                'range': [-xlim, xlim]
            },
            yaxis={
                'title': ylabel,
                'zeroline': False
            }
        )

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

                # Sort the effect size in large positive and large negative
                if effect_size_line:
                    lp = tmp.loc[tmp[self.effectSize] > max(effect_size_line)]
                    ln = tmp.loc[tmp[self.effectSize] < min(effect_size_line)]
                    tmp = pd.concat([lp, ln])

                highlight_hover_text = _get_hover_text(
                    tmp,
                    snpname=self.snpName,
                    genename=self.geneName,
                    annotationname=self.annotationName
                )

                if not tmp.empty:
                    data_to_plot.append(
                        go.Scattergl(
                            x=tmp[self.effectSize],
                            y=-np.log10(tmp[self.pName].values) if self.logp
                            else tmp[self.pName].values,
                            mode='markers',
                            text=highlight_hover_text,
                            marker=dict(
                                color=highlight_color,
                                size=point_size),
                            name='Point(s) of interest'
                        )
                    )

        # Remove the highlighted data from the DataFrame if not empty
        if tmp.empty:
            data = self.data
        else:
            data = self.data.drop(self.data.index[tmp.index])

        hover_text = _get_hover_text(
            data,
            snpname=self.snpName,
            genename=self.geneName,
            annotationname=self.annotationName
        )

        data_to_plot.append(
            go.Scattergl(
                x=data[self.effectSize].values,
                y=-np.log10(data[self.pName].values) if self.logp
                else data[self.pName].values,
                mode='markers',
                marker={
                    'color': col,
                    'size': point_size,
                    # 'name': "chr%i" % self.data[self.chrName].unique()
                },
                text=hover_text,
                name='Dataset'
            )
        )

        # Draw the effect size lines
        if effect_size_line:
            lines = [
                go.layout.Shape(
                    name=EFFECT_SIZE_LINE_MIN_LABEL,
                    type='line',
                    line=dict(
                        color=effect_size_line_color,
                        width=effect_size_line_width,
                        dash='dash'
                    ),
                    x0=effect_size_line[0], x1=effect_size_line[0], xref='x',
                    y0=ymin, y1=ymax, yref='y'
                ),
                go.layout.Shape(
                    name=EFFECT_SIZE_LINE_MAX_LABEL,
                    type='line',
                    line=dict(
                        color=effect_size_line_color,
                        width=effect_size_line_width,
                        dash='dash'
                    ),
                    x0=effect_size_line[1], x1=effect_size_line[1], xref='x',
                    y0=ymin, y1=ymax, yref='y'
                ),
            ]
        else:
            lines = []

        if genomewideline_value:
            genomewideline = go.layout.Shape(
                name=GENOMEWIDE_LINE_LABEL,
                type='line',
                line=dict(
                    color=genomewideline_color,
                    width=genomewideline_width,
                    dash='dash'
                ),
                x0=-xlim, x1=xlim, xref='x',
                y0=genomewideline_value, y1=genomewideline_value, yref='y'
            )
            lines.append(genomewideline)

        layout.shapes = lines

        return go.Figure(data=data_to_plot, layout=layout)
