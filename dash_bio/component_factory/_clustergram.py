# -*- coding: utf-8 -*-

import numpy as np
import scipy as scp
import scipy.cluster.hierarchy as sch
import scipy.spatial as scs
from sklearn.impute import SimpleImputer
from random import shuffle

import plotly.graph_objs as go
from plotly import tools


# pylint: disable=assignment-from-no-return, no-self-use
def Clustergram(
        data=None,
        computed_traces=None,
        row_labels=None,
        column_labels=None,
        hide_labels=None,
        standardize='none',
        cluster='all',
        row_dist='euclidean',
        col_dist='euclidean',
        dist_fun=scs.distance.pdist,
        link_fun=lambda x, **kwargs: sch.linkage(x, 'complete', **kwargs),
        color_threshold=None,
        optimal_leaf_order=False,
        color_map=None,
        color_list=None,
        display_range=3,
        symmetric_value=True,
        log_transform=False,
        display_ratio=0.2,
        impute_function=None,
        row_group_marker=None,    # group number, annotation, color
        col_group_marker=None,    # same as above
        tick_font=None,
        annotation_font=None,
        line_width=0.5,
        paper_bg_color='rgba(0,0,0,0)',
        plot_bg_color='rgba(0,0,0,0)',
        height=500,
        width=500
):
    """
    Function that returns a Dash Bio clustergram component.

    :param (ndarray) data: Matrix of observations as array of arrays
    :param (object) computed_traces: the dendrogram traces from another
                                     Clustergram component
    :param (list) row_labels: List of row category labels (observation labels)
    :param (list) column_labels: List of column category labels (observation
                                labels)
    :param (list) hide_labels: List of labels not to display on the final plot.
    :param (str) standardize: The dimension for standardizing values, so that
                              the mean is 0 and the standard deviation is 1
                              along the specified dimension: 'row', 'column',
                              or 'none' (default)
    :param (str) cluster: The dimension along which the data will be clustered:
                          'row', 'column', or 'all' (default); 'all' means data
                          to be clustered along columns, then clustered along
                          rows of row-clustered data
    :param (function) row_dist: Function specifying the distance metric for rows
                               that will be passed to the function specified in
                               dist_fun
                               (see scipy.spatial.distance.pdist)
    :param (function) col_dist: Function specifying the distance metric for
                               columns that will be passed to the function
                               specified in dist_fun
                               (see scipy.spatial.distance.pdist)
    :param (function) dist_fun: Function to compute the pairwise distance from
                               the observations
                               (see scipy.spatial.distance.pdist)
    :param (function) link_fun: Function to compute the linkage matrix from the
                               pairwise distances
                               (see scipy.cluster.hierarchy.linkage)
    :param (dict) color_threshold: Maximum linkage value for which unique
                                  colors are assigned to clusters; 'row' for
                                  rows, and 'col' for columns (default 0)
    :param (bool) optimal_leaf_order: Enable or disable calculation to determine
                                    leaf order that maximizes the similarity
                                    between neighbouring leaves
    :param (list) color_map: Optional colorscale for dendrogram tree
    :param (dict) color_list: Optional list of colors to use for row and col
                             dendrograms
    :param (double) display_range: Standardized values from the dataset that
                                  are below the negative of this value will
                                  be colored with one shade, and the values
                                  that are above this value will be colored
                                  with another in the heatmap (3 by default)
    :param (bool) symmetric_value: Forces the colorscale of the heatmap to be
                                  centered around zero (True by default)
    :param (bool) log_transform: Transforms the data to a logarithmic axis
                                with a basis of two (False by default)
    :param (list/float) display_ratio: The dendrograms' heights with respect to
                                     the size of the heatmap; with one element,
                                     both the row and column dendrograms have
                                     the same ratio; with two, the row
                                     dendrogram ratio corresponds to the first
                                     element of the list (default: 0.2)
    :param (function) impute_function: The function used to impute missing data.
                                      It should take as input the dataset and
                                      output a dataset with imputed values.
    :param (list[dict]) row_group_marker: Specifies which rows to annotate; each
                                        dict requires the keys 'groupNumber'
                                        (which group to annotate), 'annotation'
                                        (the text annotation), and 'color'
                                        (color in rgb format used to label the
                                        group).
    :param (list[dict]) col_group_marker: Specifies which rows to annotate; each
                                        dict requires the keys 'groupNumber'
                                        (which group to annotate), 'annotation'
                                        (the text annotation), and 'color'
                                        (color in rgb format used to label the
                                        group).
    :param (dict) tick_font: The font options for ticks.
    :param (dict) annotation_font: The font options for annotations.
    :param (list/float) line_width: The line width for the dendrograms. If in
                                   list format, the first element corresponds
                                   to the width of the row traces, and the
                                   second corresponds to the width of the
                                   column traces.
    :param (string) paper_bg_color: The background color of the paper on the
                                  graph (default transparent).
    :param (string) plot_bg_color: The background color of the subplots on the
                                 graph (default transparent).
    :param (int) height: The height of the graph, in px (default 500).
    :param (int) width: The width of the graph, in px (default 500).
"""
    if hide_labels is None:
        hide_labels = []
    if color_threshold is None:
        color_threshold = dict(row=0, col=0)
    kwargs = locals()
    kwargs.pop('computed_traces')
    (fig, ct) = _Clustergram(
        **kwargs
    ).figure(
        computed_traces=computed_traces
    )
    return go.Figure(fig), ct


class _Clustergram():
    """
    Function that returns a Dash Bio clustergram.

    :param (ndarray) data: Matrix of observations as array of arrays
    :param (list) row_labels: List of row category labels (observation labels)
    :param (list) column_labels: List of column category labels (observation
                                labels)
    :param (list) hide_labels: List of labels not to display on the final plot.
    :param (str) standardize: The dimension for standardizing values, so that
                              the mean is 0 and the standard deviation is 1
                              along the specified dimension: 'row', 'column',
                              or 'none' (default)
    :param (str) cluster: The dimension along which the data will be clustered:
                          'row', 'column', or 'all' (default); 'all' means data
                          to be clustered along columns, then clustered along
                          rows of row-clustered data
    :param (function) row_dist: Function specifying the distance metric for rows
                               that will be passed to the function specified in
                               dist_fun
                               (see scipy.spatial.distance.pdist)
    :param (function) col_dist: Function specifying the distance metric for
                               columns that will be passed to the function
                               specified in dist_fun
                               (see scipy.spatial.distance.pdist)
    :param (function) dist_fun: Function to compute the pairwise distance from
                               the observations
                               (see scipy.spatial.distance.pdist)
    :param (function) link_fun: Function to compute the linkage matrix from the
                               pairwise distances
                               (see scipy.cluster.hierarchy.linkage)
    :param (dict) color_threshold: Maximum linkage value for which unique
                                  colors are assigned to clusters; 'row' for
                                  rows, and 'col' for columns (default 0)
    :param (bool) optimal_leaf_order: Enable or disable calculation to determine
                                    leaf order that maximizes the similarity
                                    between neighbouring leaves
    :param (list) color_map: Optional colorscale for dendrogram tree
    :param (dict) color_list: Optional list of colors to use for row and col
                             dendrograms
    :param (double) display_range: Standardized values from the dataset that
                                  are below the negative of this value will
                                  be colored with one shade, and the values
                                  that are above this value will be colored
                                  with another in the heatmap (3 by default)
    :param (bool) symmetric_value: Forces the colorscale of the heatmap to be
                                  centered around zero (True by default)
    :param (bool) log_transform: Transforms the data to a logarithmic axis
                                with a basis of two (False by default)
    :param (list/float) display_ratio: The dendrograms' heights with respect to
                                     the size of the heatmap; with one element,
                                     both the row and column dendrograms have
                                     the same ratio; with two, the row
                                     dendrogram ratio corresponds to the first
                                     element of the list (default: 0.2)
    :param (function) impute_function: The function used to impute missing data.
                                      It should take as input the dataset and
                                      output a dataset with imputed values.
    :param (list[dict]) row_group_marker: Specifies which rows to annotate; each
                                        dict requires the keys 'groupNumber'
                                        (which group to annotate), 'annotation'
                                        (the text annotation), and 'color'
                                        (color in rgb format used to label the
                                        group).
    :param (list[dict]) col_group_marker: Specifies which rows to annotate; each
                                        dict requires the keys 'groupNumber'
                                        (which group to annotate), 'annotation'
                                        (the text annotation), and 'color'
                                        (color in rgb format used to label the
                                        group).
    :param (dict) tick_font: The font options for ticks.
    :param (dict) annotation_font: The font options for annotations.
    :param (list/float) line_width: The line width for the dendrograms. If in
                                   list format, the first element corresponds
                                   to the width of the row traces, and the
                                   second corresponds to the width of the
                                   column traces.
    :param (string) paper_bg_color: The background color of the paper on the
                                  graph (default transparent).
    :param (string) plot_bg_color: The background color of the subplots on the
                                 graph (default transparent).
    :param (int) height: The height of the graph, in px (default 500).
    :param (int) width: The width of the graph, in px (default 500).
"""

    def __init__(
            self,
            data=None,
            row_labels=None,
            column_labels=None,
            hide_labels=None,
            standardize='none',
            cluster='all',
            row_dist='euclidean',
            col_dist='euclidean',
            dist_fun=scs.distance.pdist,
            link_fun=lambda x, **kwargs: sch.linkage(x, 'complete', **kwargs),
            color_threshold=None,
            optimal_leaf_order=False,
            color_map=None,
            color_list=None,
            display_range=3,
            symmetric_value=True,
            log_transform=False,
            display_ratio=0.2,
            impute_function=None,
            row_group_marker=None,    # group number, annotation, color
            col_group_marker=None,    # same as above
            tick_font=None,
            annotation_font=None,
            line_width=0.5,
            paper_bg_color='rgba(0,0,0,0)',
            plot_bg_color='rgba(0,0,0,0)',
            height=500,
            width=500
    ):
        if hide_labels is None:
            hide_labels = []
        if color_threshold is None:
            color_threshold = dict(row=0, col=0)
        self._data = data
        self._row_labels = row_labels
        self._column_labels = column_labels
        self._cluster = cluster
        self._row_dist = row_dist
        self._col_dist = col_dist
        self._dist_fun = dist_fun
        self._link_fun = link_fun
        self._color_threshold = color_threshold
        self._optimal_leaf_order = optimal_leaf_order
        if color_map is None:
            self._color_map = [[0.0, 'rgb(255,0,0)'],
                              [0.5, 'rgb(0,0,0)'],
                              [1.0, 'rgb(0,255,0)']]
        else:
            self._color_map = color_map
        self._color_list = color_list
        self._display_range = display_range
        self._symmetric_value = symmetric_value
        self._display_ratio = display_ratio
        self._impute_function = impute_function
        if row_group_marker is None:
            self._row_group_marker = []
        else:
            self._row_group_marker = row_group_marker
        if col_group_marker is None:
            self._col_group_marker = []
        else:
            self._col_group_marker = col_group_marker
        if tick_font is None:
            self._tick_font = dict()
        else:
            self._tick_font = tick_font
        if annotation_font is None:
            self._annotation_font = dict()
        else:
            self._annotation_font = annotation_font
        self._paper_bg_color = paper_bg_color
        self._plot_bg_color = plot_bg_color
        self._height = height
        self._width = width

        # convert line width to list if necessary
        self._line_width = [0, 0]
        if isinstance(line_width, list):
            self._line_width = line_width
        else:
            self._line_width = [line_width, line_width]

        # convert display ratio to list if necessary
        if not isinstance(display_ratio, list):
            self._display_ratio = [display_ratio, display_ratio]
        if self._cluster == 'row':
            self._display_ratio = [display_ratio[0], 0]
        elif self._cluster == 'col':
            self._display_ratio = [0, display_ratio[1]]

        self._hide_labels = []

        if 'row' in hide_labels:
            self._hide_labels.append('yaxis5')
        if 'col' in hide_labels:
            self._hide_labels.append('xaxis5')

        # preprocessing data
        if self._impute_function is not None:

            # numpy NaN values are not serializable and turn into
            # 'None' by the time they get here; passing a string
            # means that it can be converted in the clustergram
            # component itself
            if self._impute_function['missing_values'].lower() == 'nan':
                self._impute_function.update(
                    missing_values=np.nan
                )

            imp = SimpleImputer(
                missing_values=self._impute_function['missing_values'],
                strategy=self._impute_function['strategy']
            )

            if self._impute_function['axis'] == 0:
                self._data = imp.fit_transform(self._data.T).T
            else:
                self._data = imp.fit_transform(self._data)

        if log_transform:
            self._data = np.log2(self._data)
        if standardize in ['row', 'column']:
            self._data = self._scale(self._data, standardize)

    def figure(
            self,
            computed_traces=None
    ):
        t = None
        if computed_traces is None:
            t = self._dendrogramTraces()
        else:
            t = computed_traces

        # initialize plot; GM is for group markers
        # [empty]      [col. dendro] [col. dendro] [empty]
        # [row dendro] [heatmap]     [heatmap]     [row GM]
        # [row dendro] [heatmap]     [heatmap]     [row GM]
        # [empty]      [col. GM]     [col. GM]     [empty]
        fig = tools.make_subplots(
            rows=4, cols=4,
            specs=[
                [{}, {'colspan': 2}, None, {}],
                [{'rowspan': 2}, {'colspan': 2, 'rowspan': 2},
                 None, {'rowspan': 2}],
                [None, None, None, None],
                [{}, {'colspan': 2}, None, {}]
            ],
            vertical_spacing=0,
            horizontal_spacing=0,
            print_grid=False
        )

        fig['layout'].update(
            hovermode='closest'
        )

        # get the tick values; these will be at the leaves of the
        # dendrogram

        tickvals_col = []
        tickvals_row = []

        # for column dendrogram, leaves are at bottom (y=0)
        for i in range(len(t['col'])):
            xs = t['col'][i]['x']
            ys = t['col'][i]['y']

            # during serialization (e.g., in a dcc.Store, the NaN
            # values become None and the arrays get turned into lists;
            # they must be converted back
            if isinstance(xs, list):
                xs = np.array(xs, dtype=np.float)
                t['col'][i].update(
                    x=xs
                )
            if isinstance(ys, list):
                ys = np.array(ys, dtype=np.float)
                t['col'][i].update(
                    y=ys
                )
            tickvals_col += [
                xs.flatten()[j]
                for j in range(len(xs.flatten()))
                if ys.flatten()[j] == 0.0 and
                xs.flatten()[j] % 10 == 5
            ]
        tickvals_col = list(set(tickvals_col))

        # for row dendrogram, leaves are at right(x=0, since we
        # horizontally flipped it)
        for i in range(len(t['row'])):
            xs = t['row'][i]['x']
            ys = t['row'][i]['y']

            if isinstance(xs, list):
                xs = np.array(xs, dtype=np.float)
                t['row'][i].update(
                    x=xs
                )
            if isinstance(ys, list):
                ys = np.array(ys, dtype=np.float)
                t['row'][i].update(
                    y=ys
                )

            tickvals_row += [
                ys.flatten()[j]
                for j in range(len(ys.flatten()))
                if xs.flatten()[j] == 0.0 and
                ys.flatten()[j] % 10 == 5
            ]

        tickvals_row = list(set(tickvals_row))

        # sort so they are in the right order (lowest to highest)
        tickvals_col.sort()
        tickvals_row.sort()

        # update axis settings for dendrograms and heatmap
        axes = ['xaxis1', 'xaxis2', 'xaxis4', 'xaxis5',
                'yaxis1', 'yaxis2', 'yaxis4', 'yaxis5']

        for a in axes:
            fig['layout'][a].update(
                type='linear',
                showline=False,
                showgrid=False,
                zeroline=False,
                mirror=False,
                fixedrange=False,
                showticklabels=False
            )

        (row_dendro_traces, col_dendro_traces) = self._sortTraces(
            t['row'], t['col'])

        for i in range(len(col_dendro_traces)):
            cdt = col_dendro_traces[i]
            cdt['name'] = ("Col Cluster %d" % i)
            cdt['line'] = dict(
                width=self._line_width[1]
            )
            cdt['hoverinfo'] = 'y+name'
            fig.append_trace(cdt, 1, 2)

        # row dendrogram (displays on left side)
        for i in range(len(row_dendro_traces)):
            rdt = row_dendro_traces[i]
            rdt['name'] = ("Row Cluster %d" % i)
            rdt['line'] = dict(
                width=self._line_width[0]
            )
            rdt['hoverinfo'] = 'x+name'
            fig.append_trace(rdt, 2, 1)

        # display row dendrogram sideways
        xaxis4 = fig['layout']['xaxis4']  # pylint: disable=invalid-sequence-index
        xaxis4.update(
            autorange='reversed'
        )

        # ensure that everything is aligned properly
        # with the heatmap
        yaxis4 = fig['layout']['yaxis4']  # pylint: disable=invalid-sequence-index
        yaxis4.update(
            scaleanchor='y5'
        )
        xaxis2 = fig['layout']['xaxis2']  # pylint: disable=invalid-sequence-index
        xaxis2.update(
            scaleanchor='x5'
        )

        if len(tickvals_col) > 0:
            # add in all of the labels
            fig['layout']['xaxis5'].update(  # pylint: disable=invalid-sequence-index
                tickmode='array',
                tickvals=tickvals_col,
                ticktext=self._column_labels,
                tickfont=self._tick_font,
                showticklabels=True,
                side='bottom',
                showline=False,
                range=[min(tickvals_col)-5, max(tickvals_col)+5]
                # workaround for autoscale issues above; otherwise
                # the graph cuts off and must be scaled manually
            )

        if len(tickvals_row) > 0:
            fig['layout']['yaxis5'].update(  # pylint: disable=invalid-sequence-index
                tickmode='array',
                tickvals=tickvals_row,
                ticktext=self._row_labels,
                tickfont=self._tick_font,
                showticklabels=True,
                side='right',
                showline=False,
                range=[min(tickvals_row), max(tickvals_row)]
            )

        # hide labels, if necessary
        for l in self._hide_labels:
            fig['layout'][l].update(
                ticks='',
                showticklabels=False
            )

        # heatmap
        heat_data = self._data

        # symmetrize the heatmap about zero, if necessary
        if self._symmetric_value:
            heat_data = np.subtract(heat_data, np.mean(heat_data))

        # row heatmap
        heatmap = go.Heatmap(
            x=tickvals_col,
            y=tickvals_row,
            z=heat_data,
            colorscale=self._color_map,
            colorbar={
                'xpad': 50  # move the colorbar legend away
            }
        )
        fig.append_trace(heatmap, 2, 2)

        # hide all legends
        fig['layout'].update(
            showlegend=False,
        )

        # apply the display ratio
        rowRatio = 0
        colRatio = 0

        # the argument can be either in list form or float form
        # first is ratio for row; second is ratio for column
        if self._display_ratio[0] != 0:
            rowRatio = \
                0.95/float(1 + int(1/self._display_ratio[0]))
        if self._display_ratio[1] != 0:
            colRatio = \
                0.95/float(1 + int(1/self._display_ratio[1]))

        # the row/column labels take up 0.05 of the graph, and the rest
        # is taken up by the heatmap and dendrogram for each dimension

        # row: dendrogram, heatmap, row labels (left-to-right)
        # column: dendrogram, column labels, heatmap (top-to-bottom)

        # width adjustment for row dendrogram
        fig['layout']['xaxis1'].update(  # pylint: disable=invalid-sequence-index
            domain=[0, 0.95]
        )
        fig['layout']['xaxis2'].update(  # pylint: disable=invalid-sequence-index
            domain=[rowRatio, 0.95],
            anchor='y4'
        )
        fig['layout']['xaxis4'].update(  # pylint: disable=invalid-sequence-index
            domain=[0, rowRatio]
        )
        fig['layout']['xaxis5'].update(  # pylint: disable=invalid-sequence-index
            domain=[rowRatio, 0.95]
        )

        # height adjustment for column dendrogram
        fig['layout']['yaxis1'].update(  # pylint: disable=invalid-sequence-index
            domain=[1-colRatio, 1]
        )
        fig['layout']['yaxis2'].update(  # pylint: disable=invalid-sequence-index
            domain=[1-colRatio, 1]
        )
        fig['layout']['yaxis4'].update(  # pylint: disable=invalid-sequence-index
            domain=[0, 0.95-colRatio]
        )
        fig['layout']['yaxis5'].update(  # pylint: disable=invalid-sequence-index
            domain=[0, 0.95-colRatio]
        )

        fig['layout']['legend'] = dict(  # pylint: disable=unsupported-assignment-operation
            x=0.7,
            y=0.7
        )

        # annotations

        # axis settings for subplots that will display group labels
        axes = ['xaxis6', 'yaxis6',
                'xaxis8', 'yaxis8']

        for a in axes:
            fig['layout'][a].update(
                type='linear',
                showline=False,
                showgrid=False,
                zeroline=False,
                mirror=False,
                fixedrange=False,
                showticklabels=False,
            )

        # group labels for row dendrogram
        fig['layout']['yaxis6'].update(  # pylint: disable=invalid-sequence-index
            domain=[0, 0.95-colRatio],
            scaleanchor='y5',
            scaleratio=1
        )
        if len(tickvals_row) > 0:
            fig['layout']['yaxis6'].update(  # pylint: disable=invalid-sequence-index
                range=[min(tickvals_row), max(tickvals_row)]
            )
        # padding between group label line and dendrogram
        fig['layout']['xaxis6'].update(  # pylint: disable=invalid-sequence-index
            domain=[0.95, 1],
            range=[-5, 1]
        )

        # group labels for column dendrogram
        fig['layout']['xaxis8'].update(  # pylint: disable=invalid-sequence-index
            domain=[rowRatio, 0.95],
            scaleanchor='x5',
            scaleratio=1
        )
        if len(tickvals_col) > 0:
            fig['layout']['xaxis8'].update(  # pylint: disable=invalid-sequence-index
                range=[min(tickvals_col), max(tickvals_col)]
            )
        fig['layout']['yaxis8'].update(  # pylint: disable=invalid-sequence-index
            domain=[0.95-colRatio, 1-colRatio],
            range=[-0.5, 0.5]
        )

        # get group label annotations and label traces
        rowGroup_labels, colGroup_labels, rowAnnotations, colAnnotations = \
            self._groupLabelTraces(
                row_dendro_traces,
                col_dendro_traces
            )
        # add annotations to graph
        fig['layout'].update(
            annotations=rowAnnotations + colAnnotations
        )
        # add label traces to graph
        for rgl in rowGroup_labels:
            fig.append_trace(rgl, 2, 4)
        for cgl in colGroup_labels:
            fig.append_trace(cgl, 4, 2)

        # set background colors
        fig['layout'].update(
            paper_bgcolor=self._paper_bg_color,
            plot_bgcolor=self._plot_bg_color
        )

        # finally add height and width
        fig['layout'].update(
            height=self._height,
            width=self._width
        )

        return (fig, t)

    def _scale(
            self,
            dim
    ):
        """
        Returns standardized data based on user parameters.

        :param (str) dim: The dimension, row or column, to standardize across.

        :rtype (ndarray): An array containing the standardized data.
        """

        std = np.zeros(self._data.shape)

        if dim == 'row':
            std = scp.stats.zscore(self._data, axis=1)
        elif dim == 'column':
            std = scp.stats.zscore(self._data, axis=0)

        return std

    def _getClusters(
            self
    ):
        """
        Clusters the data according to the specified dimensions.

        :rtype (tuple): The linkage matrices for the columns and/or rows.
        """

        Zcol = None
        Zrow = None

        # cluster along columns
        if self._cluster in ['col', 'all']:
            tmp = np.transpose(self._data)
            dcol = self._dist_fun(tmp, metric=self._col_dist)
            Zcol = self._link_fun(dcol, optimal_ordering=self._optimal_leaf_order)
        # cluster along rows only if 'all' is selected
        if self._cluster in ['row', 'all']:
            drow = self._dist_fun(self._data, metric=self._row_dist)
            Zrow = self._link_fun(drow, optimal_ordering=self._optimal_leaf_order)

        return (Zcol, Zrow)

    def _dendrogramTraces(
            self
    ):
        """
        Gets the traces that need to be plotted for the row and column
        dendrograms.

        :rtype (dict): A dictionary containing entries for the row and column
                       dendrogram traces.
        """
        # initialize return dict
        trace_list = {
            'col': [],
            'row': []
        }

        # first, compute the clusters
        (Zcol, Zrow) = self._getClusters()

        # calculate dendrogram from clusters; sch.dendrogram returns sets
        # of four coordinates that make up the 'u' shapes in the dendrogram
        if Zcol is not None:
            Pcol = sch.dendrogram(Zcol, orientation='top',
                                  color_threshold=self._color_threshold['col'],
                                  labels=self._column_labels, no_plot=True)
            self._column_labels = scp.array(Pcol['ivl'])
            trace_list['col'] = self._colorDendroClusters(Pcol, 'col')

        if Zrow is not None:
            Prow = sch.dendrogram(Zrow, orientation='left',
                                  color_threshold=self._color_threshold['row'],
                                  labels=self._row_labels, no_plot=True)
            # need to flip the coordinates for the row dendrogram
            Prow_tmp = {
                'icoord': Prow['dcoord'],
                'dcoord': Prow['icoord'],
                'color_list': Prow['color_list']
            }
            self._row_labels = scp.array(Prow['ivl'])
            trace_list['row'] = self._colorDendroClusters(Prow_tmp, 'row')

        return trace_list

    def _colorDendroClusters(
            self,
            P,
            dim
    ):
        """
        Colors each cluster below the color threshold separately.

        :param (dict) P: The x and y values of the dendrogram traces,
                         along with the list of trace colors returned
                         by sch.dendrogram
        :param (string) dim: The dimension of the clusters.

        :rtype (list): The list of colored traces for the dendrogram.
        """

        traces = []

        icoord = scp.array(P['icoord'])
        dcoord = scp.array(P['dcoord'])

        color_list = self._clusterColors(P['color_list'], dim)

        # dict w/ keys being the color code and values being another dict
        # specifying icoords and dcoords for that cluster
        clusters = {}

        for i in range(len(color_list)):
            # the current trace
            c = color_list[i]
            clusters[str(c['cluster'])] = {
                'color': c['color'],
                'icoords': [icoord[j] for j in range(len(icoord))
                            if color_list[j]['cluster'] == c['cluster']],
                'dcoords': [dcoord[j] for j in range(len(dcoord))
                            if color_list[j]['cluster'] == c['cluster']]
            }

        for c in clusters:

            # all of the coordinates
            icoords = clusters[c]['icoords']
            dcoords = clusters[c]['dcoords']

            # initialize all x and y values for this cluster trace
            x = np.array([])
            y = np.array([])

            for j in range(len(icoords)):
                x = np.append(x, icoords[j])
                y = np.append(y, dcoords[j])

                # append nan to prevent links
                x = np.append(x, np.nan)
                y = np.append(y, np.nan)

            traces.append(dict(
                x=x,
                y=y,
                type='scatter',
                mode='lines',
                marker=dict(color=clusters[c]['color'])
            ))

        return traces

    def _clusterColors(
            self,
            clist,
            dim
    ):
        '''
        Returns a set of n unique colours for each cluster in the dendrogram.

        :param (list) clist: The color list returned by dendrogram.
        :param (string) dim: The dimension of the clusters to color.

        :rtype (list): A list of RGB strings.
        '''

        # the colors repeat; get how many repetitions there are

        # the colors go through cycles of g, r, c, m, y, k
        cycles = []
        # store a string representing the current cycle
        currCycle = ''

        # iterate through the list of colors
        i = 0
        while i < len(clist):
            # add the color to the current cycle
            currCycle += clist[i]
            # treat the end of the list as the end of a cycle
            if i == len(clist)-1:
                cycles.append(currCycle)
                break
            # otherwise, the end of a cycle is signified by
            # a sequence k, g - however, we also have b for
            # the links above the color threshold; so we
            # include this as well
            if clist[i] in ['k', 'b'] and clist[i+1] == 'g':
                cycles.append(currCycle)
                currCycle = ''
            # finally, increment the counter
            i += 1

        color_list = []
        bgColor = 'rgb(0,0,0)'

        # each element in 'cycles' contains a full cycle of 6 colors
        # (at most)
        # so, we need 6 times the number of cycles
        n = 6*len(cycles)

        # fill in the user-provided color list if possible
        if self._color_list is not None and dim in self._color_list:
            color_list = self._color_list[dim]
            # if there aren't enough colors, repeat the list
            if len(color_list) < n and len(color_list) > 0:
                color_list = color_list * (int(n/len(color_list)) + 1)

        else:
            # first, get the number of divisions
            # take cube root of n, since we will need to make
            # at least n^3 unique colors (filling 3 spots)
            base = int(np.cbrt(n)) + 1
            # rgb values to use
            vals = np.linspace(0, 255, base).astype(int)

            # pure rgb, including black
            pure = []
            # mixes of 2 pure rgb values
            mixed = []
            # other colors
            other = []

            for i in range(np.power(base, 3) - 1):

                # the color represented in n-ary
                c = str(np.base_repr(i, base=base, padding=3))[-3:]

                r = int(vals[int(c[0])])
                g = int(vals[int(c[1])])
                b = int(vals[int(c[2])])

                # color, represented as a string
                color = "rgb(%d,%d,%d)" % (r, g, b)

                # priority is all of the pure colors
                if (r == 255 or g == 255 or b == 255) and r + g + b == 255:
                    pure.append(color)
                    # then, all of the mixtures of pure colors
                elif (r == 0 or g == 0 or b == 0) and r + g + b == 510:
                    mixed.append(color)
                    # all of the intermediate colors that are created
                else:
                    other.append(color)

            # avoid similarity of colors
            shuffle(other)

            color_list = pure + mixed + other

        # this will be returned
        colors = []

        # get the color for the background trace, if one is supplied
        if self._color_list is not None and 'bg' in self._color_list:
            bgColor = self._color_list['bg']

        # the sequence
        seq = ['g', 'r', 'c', 'm', 'y', 'k']

        for i in range(len(cycles)):
            tmp = []
            for s in seq:
                for j in range(cycles[i].count(s)):
                    tmp.append({'color': color_list[i*6 + seq.index(s)],
                                'cluster': i*6 + seq.index(s)})
            # get all indices of 'b', the links above threshold
            bs = [j for j in range(len(cycles[i])) if cycles[i][j] == 'b']
            for index in bs:
                # may need to change this color
                # depending on which are generated
                tmp.insert(index,
                           {'color': bgColor,
                            'cluster': -1})

            colors = colors + tmp

        return colors

    def _sortTraces(
            self,
            rdt,
            cdt
    ):
        """
        Sorts row dendrogram clusters and column dendrogram clusters
        so that the background trace (above threshold) is trace 0
        and all other traces are ordered top-to-bottom (row dendrogram)
        or left-to-right (column dendrogram).

        :param (list[dict]) rdt: The row dendrogram cluster traces.
        :param (list[dict]) cdt: The column dendrogram cluster traces.

        :rtype (tuple): The sorted row dendrogram clusters and
                        column dendrogram clusters.
        """

        tmp_rdt = []
        tmp_cdt = []

        if len(rdt) > 0:
            # first, find background trace: (max 'x')
            rdt.sort(key=lambda t: -1*max(list(t['x'])))
            tmp_rdt.append(rdt[0])
            # then, sort top-to-bottom
            r = rdt[1:]
            r.sort(key=lambda t: -1*min(list(t['y'])))
            tmp_rdt += r
        if len(cdt) > 0:
            # background trace has max 'y'
            cdt.sort(key=lambda t: -1*max(list(t['y'])))
            tmp_cdt.append(cdt[0])
            # sort left to right
            c = cdt[1:]
            c.sort(key=lambda t: min(list(t['x'])))
            tmp_cdt += c

        return(tmp_rdt, tmp_cdt)

    def _groupLabelTraces(
            self,
            rowClusters,
            colClusters
    ):
        """
        Calculates the traces and annotations that correspond to group
        labels.

        :param (list[dict]) rowClusters: List of all row traces (each trace
                                         corresponds to a cluster)
        :param (list[dict]) colClusters: List of all column traces (each trace
                                         corresponds to a cluster)

        :rtype (tuple): The row label traces, column label traces,
                        row group annotations, and column group annotations.
        """

        rowGroup_labels = []
        colGroup_labels = []

        rowAnnotations = []
        colAnnotations = []

        for rgm in self._row_group_marker:
            if len(rowClusters) == 0:
                break
            if rgm['group'] >= len(rowClusters):
                continue
            # get upper and lower bounds of group
            ymin = min(rowClusters[rgm['group']]['y'])
            ymax = max(rowClusters[rgm['group']]['y'])
            trace = go.Scatter(
                x=[0, 0],
                y=[ymin, ymax],
                mode='lines',
                line=dict(
                    width=6,
                    color=rgm['color']
                ),
                marker=dict(
                    size=0
                ),
                hoverinfo='none'
            )
            rowGroup_labels.append(trace)
            rowAnnotations.append(dict(
                x=0.5, y=1/2*(ymin + ymax),
                xref='x6', yref='y6',
                text=rgm['annotation'],
                font=self._annotation_font,
                showarrow=False,
                xanchor='left'
            ))

        for cgm in self._col_group_marker:
            if len(colClusters) == 0:
                break
            if cgm['group'] >= len(colClusters):
                continue
            # get leftmost and rightmost bounds of group
            xmin = min(colClusters[cgm['group']]['x'])
            xmax = max(colClusters[cgm['group']]['x'])
            trace = go.Scatter(
                x=[xmin, xmax],
                y=[0, 0],
                mode='lines',
                line=dict(
                    width=6,
                    color=cgm['color']
                ),
                marker=dict(
                    size=0
                ),
                hoverinfo='none'
            )
            colGroup_labels.append(trace)
            colAnnotations.append(dict(
                x=1/2*(xmin + xmax), y=-0.5,
                xref='x8', yref='y8',
                text=cgm['annotation'],
                font=self._annotation_font,
                showarrow=False
            ))

        return (rowGroup_labels, colGroup_labels, rowAnnotations, colAnnotations)
