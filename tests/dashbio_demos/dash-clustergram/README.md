## Run the app

```bash
python tests/dashbio_demos/dash-clustegram/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 3 tabs in this app: About, Data and Graph.

The About tab contains a general overview of the Clustergram component.

In Data tab you can choose preloaded datasets or uploaded you own dataset. Also, you
can read about dataset information.

In Graph tab you can specify what your app will be clustered by and what columns
and rows will be displayed. Also, you can choose hide labels, color for the 
annotation, annotation text, as well.

## Documentation

Learn more about using the Clustergram with interactive examples in the
[Dash Bio docs](https://dash.plotly.com/dash-bio/clustergram).

## Clustergram Properties Reference

- **data** (2D array-like; required): Matrix or table of observations (dropping columns of non-numeric dtype).

- **generate_curves_dict** (bool; default False): Whether or not to return a dictionary containing information about the
cluster number associated with each curve number in the graph. (May be useful for capturing the cluster number that is
clicked.)

- **return_computed_traces** (bool; default False): Whether or not to return the precomputed dendrogram traces. (May be useful if one wishes to add, e.g., group markers to the figure without recalculating the clustering in the entire figure.)

- **computed_traces** (dict; optional): The dendrogram traces from another (precomputed) Clustergram component. 

- **row_labels** (list; optional): List of row category labels (observation labels).

- **column_labels** (list; optional): List of column category labels (observation labels). 

- **hidden_labels**  (list; optional): List containing strings 'row' and/or 'col' if row and/or column labels should be hidden on the final plot.

- **standardize** (string; default 'none'): The dimension for standardizing values, so that the mean is 0 and the standard deviation is 1, along the specified dimension: 'row', 'column', or 'none'. 

- **cluster** (string; default 'all'): The dimension along which the data will be clustered: 'row', 'column', or 'all'; 'all' means data will be clustered along columns, then clustered along rows of column-clustered data.

- **row_dist** (string; default 'euclidean'): Distance metric for rows. Passed as argument metric to the function specified in dist_fun when called for clustering along rows.

- **col_dist** (string; default 'euclidean'): Distance metric for columns. Passed as argument metric to the function specified in dist_fun when called for clustering along columns.

- **dist_fun** (function; default scipy.spatial.distance.pdist): Function to compute the pairwise distance from the observations (see docs for scipy.spatial.distance.pdist).

- **link_fun**  (function; default scipy.cluster.hierarchy.linkage): Function to compute the linkage matrix from the pairwise distances (see docs for scipy.cluster.hierarchy.linkage). 

- **color_threshold** (dict; default {'row': 0, 'col': 0}): Maximum linkage value for which unique colors are assigned to clusters; 'row' for rows, and 'col' for columns.

- **optimal_leaf_order** (bool; default False): Whether to enable (True) or disable (False) the option to determine leaf order that maximizes similarity between neighboring leaves.

- **color_map** (list; default [[0.0, 'rgb(255,0,0)'], 0.5, 'rgb(0,0,0)', 1.0, 'rgb(0,255,0)']): Colorscale for the heatmap. Top-level elements contain two elements, the first of which refers to the percentile rank, and the second to the applied color. For instance, [0.0, 'white', 0.5, 'gray', 1.0, 'black'] means that cells in the 49th percentile would be white; cells at the 50th or higher percentiles, excluding the 100th percentile, would be gray; and the cell(s) at the 100th percentile would be black. 

- **color_list** (dict; optional): The list of colors to use for different clusters in the dendrogram that have a root under the threshold for each dimension. If there are fewer colors than there are clusters along a specific dimension, the colors of the clusters will cycle through the colors specified in the list. The keys are: 'row' (for row clusters), 'col' (for column clusters), and 'bg' (for all traces above the clustering threshold for both row and column). 

- **display_range** (double; default 3.0): In the heatmap, standardized values from the dataset that are below the negative of this value will be colored with one shade, and the values that are above this value will be colored with another.

- **center_values** (bool; default True): Whether or not to center the values of the heatmap about zero.

- **log_transform** (bool; default False): Whether or not to transform the data by taking the base-two logarithm of all values in the dataset.

- **display_ratio** (list | number; default 0.2): The dendrograms' heights with respect to the size of the heatmap; with one element, both the row and column dendrograms have the same ratio; with two, the row dendrogram ratio corresponds to the first element of the list and the column dendrogram ratio corresponds to the second element of the list.

- **imputer_parameters** (dict; optional): Specifies the parameters 'missing_values' and 'strategy' of the SimpleImputer class from scikit-learn 0.20.1 (both of these parameters must be keys in the dictionary). An additional parameter, 'axis', is used to specify the direction along which to impute (a parameter of Imputer, which was deprecated in scikit-learn 0.20.0): 'axis=0' indicates that imputing should happen along columns, while 'axis=1' indicates that it should happen along rows (see: https://scikit -learn.org/stable/modules/generated/sklearn.preprocessing.Imputer.html).

- **row_group_marker** (list; optional): A list containing the annotations for row clusters in the dendrogram. Each annotation is a dictionary with the keys 'group_number' (the cluster number to highlight), 'annotation' (a string containing the text of the annotation), and 'color' (a string representation of the color of the annotation). 

- **col_group_marker** (list; optional): A list containing the annotations for column clusters in the dendrogram. Each annotation is a dictionary with the keys 'group_number' (the cluster number to highlight), 'annotation' (a string containing the text of the annotation), and 'color' (a string representation of the color of the annotation). 

- **tick_font** (dict; optional): The font options for ticks, as specified in the Plotly graph_objects documentation (see: https://plotly.com/python/reference/#bar-marker-colorbar-tickfont). 

- **annotation_font**  (dict; optional): The font options for annotations, as specified in the Plotly graph_objects documentation (see: https://plotly.cp,/python/reference/#layout-scene-annotations-items-annotation-font). 

- **line_width** (list | number; default 0.5): The line width for the dendrograms. If in list format, the first element corresponds to the width of the row dendrogram traces, and the second corresponds to the width of the column dendrogram traces. 

- **paper_bg_color** (string; default 'rgba(0,0,0,0)'): The background color of the paper on the graph. 

- **plot_bg_color** (string; default 'rgba(0,0,0,0)'): The background color of the subplots on the graph. 

- **height** (number; default 500): The height of the graph, in px. 

- **width** (number; default 500): The width of the graph, in px. 