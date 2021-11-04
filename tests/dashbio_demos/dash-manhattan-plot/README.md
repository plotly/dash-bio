## Run the app

```bash
python tests/dashbio_demos/dash-manhattan-plot/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 2 tabs in this app: About and Graph.

The About tab contains a general overview of the Manhattan Plot component.

In Graph tab you can specify threshold value and suggestive line.

## Documentation

Learn more about using Manhattan Plot with interactive examples in the
[Dash Bio docs](https://dash.plotly.com/dash-bio/manhattanplot).

## Manhattan Plot Properties Reference

- **dataframe** (dataframe; required): A pandas dataframe which must contain at least the following three columns: - the chromosome number - genomic base-pair position - a numeric quantity to plot such as a p-value or zscore

- **chrm** (string; default 'CHR'): A string denoting the column name for the chromosome. This column must be float or integer. Minimum number of chromosomes required is 1. If you have X, Y, or MT chromosomes, be sure to renumber these 23, 24, 25, etc.   

- **bp** (string; default 'BP'): A string denoting the column name for the chromosomal position.   

- **p** (string; default 'P'): A string denoting the column name for the float quantity to be plotted on the y-axis. This column must be numeric. It does not have to be a p-value. It can be any numeric quantity such as peak heights, Bayes factors, test statistics. If it is not a p-value, make sure to set logp = False.   

- **snp** (string; default 'SNP'): A string denoting the column name for the SNP names (e.g., rs number). More generally, this column could be anything that identifies each point being plotted. For example, in an Epigenomewide association study (EWAS), this could be the probe name or cg number. This column should be a character. This argument is optional, however it is necessary to specify it if you want to highlight points on the plot, using the highlight argument in the figure method.   

- **gene** (string; default 'GENE'): A string denoting the column name for the GENE names. This column could be a string or a float. More generally, it could be any annotation information that you want to include in the plot.

- **annotation** (string; optional): A string denoting the column to use as annotations. This column could be a string or a float. It could be any annotation information that you want to include in the plot (e.g., zscore, effect size, minor allele frequency).   

- **logp** (bool; optional): If True, the -log10 of the p-value is plotted. It isn't very useful to plot raw p-values; however, plotting the raw value could be useful for other genome-wide plots (e.g., peak heights, Bayes factors, test statistics, other "scores", etc.)

- **title** (string; default 'Manhattan Plot'): The title of the graph.

- **showgrid** (bool; default true): Boolean indicating whether gridlines should be shown.

- **xlabel** (string; optional): Label of the x axis.

- **ylabel** (string; default '-log10(p)'): Label of the y axis.

- **point_size** (number; default 5): Size of the points of the Scatter plot.

- **showlegend** (bool; default true): Boolean indicating whether legends should be shown.

- **col** (string; optional): A string representing the color of the points of the scatter plot. Can be in any color format accepted by plotly.graph_objects.

- **suggestiveline_value** (bool | float; default 8): A value which must be either False to deactivate the option, or a numerical value corresponding to the p-value at which the line should be drawn. The line has no influence on the data points.

- **suggestiveline_color** (string; default 'grey'): Color of the suggestive line.

- **suggestiveline_width** (number; default 2): Width of the suggestive line.

- **genomewideline_value** (bool | float; default -log10(5e-8)): A boolean which must be either False to deactivate the option, or a numerical value corresponding to the p-value above which the data points are considered significant.

- **genomewideline_color** (string; default 'red'): Color of the genome-wide line. Can be in any color format accepted by plotly.graph_objects.

- **genomewideline_width** (number; default 1): Width of the genome-wide line.

- **highlight** (bool; default True): turning on/off the highlighting of data points considered significant.

- **highlight_color** (string; default 'red'): Color of the data points highlighted because they are significant. Can be in any color format accepted by plotly.graph_objects.