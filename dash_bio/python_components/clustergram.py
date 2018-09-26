# -*- coding: utf-8 -*-

import numpy as np
import scipy as scp
import scipy.cluster.hierarchy as sch
import scipy.spatial as scs
from random import shuffle

import plotly.graph_objs as go
from plotly import tools


class Clustergram(object):
    
    """
    Function that returns a Dash Bio clustergram.

    :param (ndarray) data: Matrix of observations as array of arrays
    :param (list) rowLabels: List of row category labels (observation labels)
    :param (list) columnLabels: List of column category labels (observation
                                labels)
    :param (str) standardize: The dimension for standardizing values, so that
                              the mean is 0 and the standard deviation is 1
                              along the specified dimension: 'row', 'column',
                              or 'none' (default)
    :param (str) cluster: The dimension along which the data will be clustered:
                          'row', 'column', or 'all' (default); 'all' means data
                          to be clustered along columns, then clustered along
                          rows of row-clustered data
    :param (function) rowDist: Function specifying the distance metric for rows
                               that will be passed to the function specified in
                               distFun
    :param (function) colDist: Function specifying the distance metric for
                               columns that will be passed to the function
                               specified in distFun
    :param (function) distFun: Function to compute the pairwise distance from
                               the observations (euclidean distance by default)
    :param (function) linkFun: Function to compute the linkage matrix from the
                               pairwise distances
    :param (dict) colorThreshold: Maximum linkage value for which unique
                                  colors are assigned to clusters; 'row' for
                                  rows, and 'col' for columns (default 0)
    :param (bool) optimalLeafOrder: Enable or disable calculation to determine
                                    leaf order that maximizes the similarity
                                    between neighbouring leaves
    :param (list) colorMap: Optional colorscale for dendrogram tree
    :param (double) displayRange: Standardized values from the dataset that
                                  are below the negative of this value will
                                  be colored with one shade, and the values
                                  that are above this value will be colored
                                  with another in the heatmap (3 by default)
    :param (bool) symmetricValue: Forces the colorscale of the heatmap to be
                                  centered around zero (True by default)
    :param (bool) logTransform: Transforms the data to a logarithmic axis
                                with a basis of two (False by default)
    :param (list) displayRatio: The height of the dendrograms with respect to
                                the size of the heatmap; with one element,
                                both the row and column dendrograms have the
                                same ratio; with two, the row dendrogram ratio
                                corresponds to the first element of the list
                                (default: 0.2)
    :param (function) imputeFunction: The function used to impute missing data
    :param (list[dict]) rowGroupMarker: Specifies which rows to annotate; each
                                        dict requires the keys 'groupNumber'
                                        (which group to annotate), 'annotation'
                                        (the text annotation), and 'color'
                                        (color in rgb format used to label the
                                        group).
    :param (list[dict]) colGroupMarker: Specifies which rows to annotate; each
                                        dict requires the keys 'groupNumber'
                                        (which group to annotate), 'annotation'
                                        (the text annotation), and 'color'
                                        (color in rgb format used to label the
                                        group).
    :param (dict) tickFont: The font options for ticks.
    :param (dict) annotationFont: The font options for annotations.
    :param (string) paperBgColor: The background color of the paper on the
                                  graph (default transparent).
    :param (string) plotBgColor: The background color of the subplots on the
                                 graph (default transparent).
    :param (int) height: The height of the graph, in px (default 500).
    :param (int) width: The width of the graph, in px (default 500).
"""

    def __init__(
            self,
            data=None,
            rowLabels=[],
            columnLabels=[],
            standardize='none',
            cluster='all',
            rowDist='euclidean',
            colDist='euclidean',
            distFun=scs.distance.pdist,
            linkFun=lambda x, **kwargs: sch.linkage(x, 'complete', **kwargs),
            colorThreshold=dict(row=0, col=0),
            optimalLeafOrder=False,
            colorMap=[[0.0, 'rgb(255,0,0)'],
                      [0.5, 'rgb(0,0,0)'],
                      [1.0, 'rgb(0,255,0)']],
            displayRange=3,
            symmetricValue=True,
            logTransform=False,
            displayRatio=0.2,
            imputeFunction=None,
            rowGroupMarker=[],    # group number, annotation, color
            colGroupMarker=[],    # same as above
            tickFont=dict(),
            annotationFont=dict(),
            paperBgColor='rgba(0,0,0,0)',
            plotBgColor='rgba(0,0,0,0)',
            height=500,
            width=500
    ):
        self._data = data
        self._rowLabels = rowLabels
        self._columnLabels = columnLabels
        self._cluster = cluster
        self._rowDist = rowDist
        self._colDist = colDist
        self._distFun = distFun
        self._linkFun = linkFun
        self._colorThreshold = colorThreshold
        self._optimalLeafOrder = optimalLeafOrder
        self._colorMap = colorMap
        self._displayRange = displayRange
        self._symmetricValue = symmetricValue
        self._displayRatio = displayRatio
        self._imputeFunction = imputeFunction
        self._rowGroupMarker = rowGroupMarker
        self._colGroupMarker = colGroupMarker
        self._tickFont = tickFont
        self._annotationFont = annotationFont
        self._paperBgColor = paperBgColor,
        self._plotBgColor = plotBgColor,
        self._height = height
        self._width = width

        if(self._cluster == 'row'):
            if(isinstance(displayRatio, list)):
                self._displayRatio = [displayRatio[0], 0]
            else:
                self._displayRatio = [displayRatio, 0]
        elif(self._cluster == 'col'):
            if(isinstance(displayRatio, list)):
                self._displayRatio = [0, displayRatio[1]]
            else:
                self._displayRatio = [0, displayRatio]

        self._hideLabels = []
        
        if(self._rowLabels is None):
            self._hideLabels.append('yaxis5')
        if(self._columnLabels is None):
            self._hideLabels.append('xaxis5')
        
        # preprocessing data
        if(logTransform):
            self._data = np.log2(self._data)
        if(standardize in ['row', 'column']):
            self._data = self._scale(self._data, standardize)
        
    def figure(
            self
    ):
        # get raw traces
        t = self._dendrogramTraces()
        row_dendro_traces = t['row']
        col_dendro_traces = t['col']
        
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
            horizontal_spacing=0
        )

        fig['layout']['hovermode'] = 'closest'

        # get the tick values; these will be at the leaves of the
        # dendrogram

        tickvals_col = []
        tickvals_row = []
        
        # for column dendrogram, leaves are at bottom (y=0)
        for i in range(len(t['col'])):
            tickvals_col += [
                t['col'][i]['x'].flatten()[j]
                for j in range(len(t['col'][i]['x'].flatten()))
                if t['col'][i]['y'].flatten()[j] == 0.0
            ]
        
        # for row dendrogram, leaves are at right(x=0, since we
        # horizontally flipped it)
        for i in range(len(t['row'])):
            tickvals_row += [
                t['row'][i]['y'].flatten()[j]
                for j in range(len(t['row'][i]['y'].flatten()))
                if t['row'][i]['x'].flatten()[j] == 0.0
            ]

        # sort so they are in the right order
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
            row_dendro_traces, col_dendro_traces)
        
        # column dendrogram (displays on top)
        for cdt in col_dendro_traces:
            cdt['name'] = ("Col Cluster %d" % col_dendro_traces.index(cdt))
            cdt['line'] = dict(
                width=1
            )
            cdt['hoverinfo'] = 'y'
            fig.append_trace(cdt, 1, 2)

        # row dendrogram (displays on left side)
        for rdt in row_dendro_traces:
            rdt['name'] = ("Row Cluster %d" % row_dendro_traces.index(rdt))
            rdt['line'] = dict(
                width=1
            )
            rdt['hoverinfo'] = 'x'
            fig.append_trace(rdt, 2, 1)

        # display row dendrogram sideways
        fig['layout']['xaxis4'].update(
            autorange='reversed'
        )

        # ensure that everything is aligned properly
        # with the heatmap
        fig['layout']['yaxis4'].update(
            scaleanchor='y5'
        )
        fig['layout']['xaxis2'].update(
            scaleanchor='x5'
        )

        if(len(tickvals_col) > 0):
            # add in all of the labels
            fig['layout']['xaxis5'].update(
                tickmode='array',
                tickvals=tickvals_col,
                ticktext=self._columnLabels,
                tickfont=self._tickFont,
                showticklabels=True,
                side='bottom',
                showline=False,
                range=[min(tickvals_col), max(tickvals_col)]
            )

        if(len(tickvals_row) > 0):
            fig['layout']['yaxis5'].update(
                tickmode='array',
                tickvals=tickvals_row,
                ticktext=self._rowLabels,
                tickfont=self._tickFont,
                showticklabels=True,
                side='left',
                showline=False,
                range=[min(tickvals_row), max(tickvals_row)]
            )

        # hide labels, if necessary
        for l in self._hideLabels:
            fig['layout'][l].update(
                ticks='',
                showticklabels=False
            )

        # hide all legends
        fig['layout'].update(
            showlegend=False
        )
            
        # heatmap
        heat_data = self._data

        # symmetrize the heatmap about zero, if necessary
        if(self._symmetricValue):
            heat_data = np.subtract(heat_data, np.mean(heat_data))

        # row heatmap
        heatmap = go.Heatmap(
            x=tickvals_col,
            y=tickvals_row,
            z=heat_data,
            colorscale=self._colorMap,
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
        if(isinstance(self._displayRatio, list)):
            # first is ratio for row; second is ratio for column
            if(self._displayRatio[0] != 0):
                rowRatio = \
                    0.95*float(1)/float(1 + int(1/self._displayRatio[0]))
            else:
                rowRatio = 0
            if(self._displayRatio[1] != 0):
                colRatio = \
                    0.95*float(1)/float(1 + int(1/self._displayRatio[1]))
            else:
                colRatio = 0
        else:
            rowRatio = 0.95*float(1)/float(1 + int(1/self._displayRatio))
            colRatio = rowRatio

        # width adjustment for row dendrogram
        fig['layout']['xaxis1'].update(domain=[0, 0.95])
        fig['layout']['xaxis2'].update(domain=[rowRatio, 0.95], anchor='y4')
        fig['layout']['xaxis4'].update(domain=[0, rowRatio])
        fig['layout']['xaxis5'].update(domain=[rowRatio, 0.95])
        
        # height adjustment for column dendrogram
        fig['layout']['yaxis1'].update(domain=[1-colRatio, 1])
        fig['layout']['yaxis2'].update(domain=[0.95-colRatio, 0.95])
        fig['layout']['yaxis4'].update(domain=[0, 0.95-colRatio])
        fig['layout']['yaxis5'].update(domain=[0, 0.95-colRatio])

        fig['layout']['legend'] = dict(
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
        fig['layout']['yaxis6'].update(
            domain=[0, 0.95-colRatio],
            scaleanchor='y5',
            scaleratio=1
        )
        if(len(tickvals_row) > 0):
            fig['layout']['yaxis6'].update(
                range=[min(tickvals_row), max(tickvals_row)]
            )
        # padding between group label line and dendrogram
        fig['layout']['xaxis6'].update(
            domain=[0.95, 1],
            range=[-0.5, 1]
        )

        # group labels for column dendrogram
        fig['layout']['xaxis8'].update(
            domain=[rowRatio, 0.95],
            scaleanchor='x5',
            scaleratio=1
        )
        if(len(tickvals_col) > 0):
            fig['layout']['xaxis8'].update(
                range=[min(tickvals_col), max(tickvals_col)]
            )
        fig['layout']['yaxis8'].update(
            domain=[0.95-colRatio, 1-colRatio],
            range=[-1, 0.5]
        )
        
        # get group label annotations and label traces
        rowGroupLabels, colGroupLabels, rowAnnotations, colAnnotations = \
            self._groupLabelTraces(
                row_dendro_traces,
                col_dendro_traces
            )
        # add annotations to graph
        fig['layout'].update(
            annotations=rowAnnotations + colAnnotations
        )
        # add label traces to graph
        for rgl in rowGroupLabels:
            fig.append_trace(rgl, 2, 4)
        for cgl in colGroupLabels:
            fig.append_trace(cgl, 4, 2)

        # set background colors
        fig['layout'].update(
            paper_bgcolor=self._paperBgColor,
            plot_bgcolor=self._plotBgColor
        )
            
        # finally add height and width
        fig['layout'].update(
            height=self._height,
            width=self._width
        )
            
        return fig
            
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
        
        if(dim == 'row'):
            for i in range(len(self._data)):
                std[i] = scp.stats.zscore(self._data[i])
        elif(dim == 'column'):
            tmp = np.transpose(self._data)
            std = np.transpose(std)
            for i in range(len(tmp)):
                std[i] = scp.stats.zscore(tmp[i])
            std = np.transpose(std)

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
            dcol = self._distFun(tmp, metric=self._colDist)
            Zcol = self._linkFun(dcol, optimal_ordering=self._optimalLeafOrder)
        # cluster along rows only if 'all' is selected
        if self._cluster in ['row', 'all']:
            drow = self._distFun(self._data, metric=self._rowDist)
            Zrow = self._linkFun(drow, optimal_ordering=self._optimalLeafOrder)

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
                                  color_threshold=self._colorThreshold['col'],
                                  labels=self._columnLabels, no_plot=True)
            self._columnLabels = scp.array(Pcol['ivl'])
            trace_list['col'] = self._colorDendroClusters(Pcol)
            
        if Zrow is not None:
            Prow = sch.dendrogram(Zrow, orientation='left',
                                  color_threshold=self._colorThreshold['row'],
                                  labels=self._rowLabels, no_plot=True)
            # need to flip the coordinates for the row dendrogram
            Prow_tmp = {
                'icoord': Prow['dcoord'],
                'dcoord': Prow['icoord'],
                'color_list': Prow['color_list']
            }
            self._rowLabels = scp.array(Prow['ivl'])
            trace_list['row'] = self._colorDendroClusters(Prow_tmp)

        return trace_list
    
    def _colorDendroClusters(
            self,
            P
    ):
        """
        Colors each cluster below the color threshold separately.

        :param (dict) P: The x and y values of the dendrogram traces,
                         along with the list of trace colors returned
                         by sch.dendrogram
        
        :rtype (list): The list of colored traces for the dendrogram.
        """
        
        traces = []
        
        icoord = scp.array(P['icoord'])
        dcoord = scp.array(P['dcoord'])

        colorList = self._clusterColors(P['color_list'])
            
        # make each cluster its own trace to preserve color threshold
        # feature; collect into sets
        clust_colors = list(set(colorList))
            
        # dict w/ keys being the color code and values being another dict
        # specifying icoords and dcoords for that cluster
        clusters = {}

        for i in range(len(clust_colors)):
            # the current color
            c = clust_colors[i]
                
            clusters[c] = {
                'icoords': [icoord[j] for j in range(len(icoord))
                            if colorList[j] == c],
                'dcoords': [dcoord[j] for j in range(len(dcoord))
                            if colorList[j] == c]
            }

        for i in range(len(clust_colors)):
            # the current color
            c = clust_colors[i]
            
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
                marker=dict(color=c)
            ))
                
        return traces

    def _clusterColors(
            self,
            clist
    ):
        '''
        Returns a set of n unique colours for each cluster in the dendrogram.
        
        :param (list) clist: The color list returned by dendrogram.
        
        :rtype (list): A list of RGB strings.
        '''

        # the colors repeat; get how many repetitions there are

        # the colors go through cycles of g, r, c, m, y, k
        cycles = []
        # store a string representing the current cycle
        currCycle = ''

        # iterate through the list of colors
        i = 0
        while(i < len(clist)):
            # add the color to the current cycle
            currCycle += clist[i]
            # treat the end of the list as the end of a cycle
            if(i == len(clist)-1):
                cycles.append(currCycle)
                break
            # otherwise, the end of a cycle is signified by
            # a sequence k, g - however, we also have b for
            # the links above the color threshold; so we
            # include this as well
            if(clist[i] in ['k', 'b'] and clist[i+1] == 'g'):
                cycles.append(currCycle)
                currCycle = ''
            # finally, increment the counter
            i += 1

        # each element in 'cycles' contains a full cycle of 6 colors (at most)
        # so, we need 6 times the number of cycles

        n = 6*len(cycles)
        
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
            if((r == 255 or g == 255 or b == 255) and r + g + b == 255):
                pure.append(color)
            # then, all of the mixtures of pure colors
            elif((r == 0 or g == 0 or b == 0) and r + g + b == 510):
                mixed.append(color)
            # all of the intermediate colors that are created
            else:
                other.append(color)

        # avoid similarity of colors
        shuffle(other)
        # we have all the unique colors to use
        colorList = pure+mixed+other
        # this will be returned
        colors = []
        
        # the sequence
        seq = ['g', 'r', 'c', 'm', 'y', 'k']
        
        for i in range(len(cycles)):
            tmp = []
            for s in seq:
                for j in range(cycles[i].count(s)):
                    tmp.append(colorList[i*6 + seq.index(s)])
            # get all indices of 'b', the links above threshold
            bs = [j for j in range(len(cycles[i])) if cycles[i][j] == 'b']
            for index in bs:
                # may need to change this color
                # depending on which are generated
                tmp.insert(index, 'rgb(150,150,150)')

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

        if(len(rdt) > 0):
            # first, find background trace: (max 'x')
            rdt.sort(key=lambda t: max(list(t['x'])))
            tmp_rdt.append(rdt.pop())
            # then, sort top-to-bottom
            rdt.sort(key=lambda t: -1*min(list(t['y'])))
            tmp_rdt += rdt
        if(len(cdt) > 0):
            # background trace has max 'y'
            cdt.sort(key=lambda t: max(list(t['y'])))
            tmp_cdt.append(cdt.pop())
            # sort left to right
            cdt.sort(key=lambda t: min(list(t['x'])))
            tmp_cdt += cdt

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
        
        rowGroupLabels = []
        colGroupLabels = []

        rowAnnotations = []
        colAnnotations = []
        
        for rgm in self._rowGroupMarker:
            if(len(rowClusters) == 0):
                break
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
            rowGroupLabels.append(trace)
            rowAnnotations.append(dict(
                x=0.5, y=1/2*(ymin + ymax),
                xref='x6', yref='y6',
                text=rgm['annotation'],
                font=self._annotationFont,
                showarrow=False,
                xanchor='left'
            ))
            
        for cgm in self._colGroupMarker:
            if(len(colClusters) == 0):
                break
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
            colGroupLabels.append(trace)
            colAnnotations.append(dict(
                x=1/2*(xmin + xmax), y=-0.5,
                xref='x8', yref='y8',
                text=cgm['annotation'],
                font=self._annotationFont,
                showarrow=False
            ))
            
        return (rowGroupLabels, colGroupLabels, rowAnnotations, colAnnotations)
