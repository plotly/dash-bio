## Run the app

```bash
python tests/dashbio_demos/dash-speck/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 3 tabs in this app: About, Data and View.

The About tab contains a general overview of the Volcano Plot component.

In Data tab you can select from 2 preloaded datasets.

In View tab you can specify style options.

## Documentation

Learn more about using the Volcano Plot with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/volcanoplot).

## Volcano Plot Properties Reference

- **dataframe** (dataframe; required): A pandas dataframe which must contain at least the following two columns: - a numeric quantity to plot such as a p-value or zscore - a numeric quantity measuring the strength of association, typically an odds ratio, regression coefficient, or log fold change. Here, it is referred to as effect_size.  

- **effect_size** (string; default 'EFFECTSIZE'): A string denoting the column name for the effect size. This column must be numeric and must not contain missing nor NaN values.       

- **p** (string; default 'P'): A string denoting the column name for the float quantity to be plotted on the y-axis. This column must be numeric. It does not have to be a p-value. It can be any numeric quantity such as peak heights, Bayes factors, test statistics. If it is not a p-value, make sure to set logp = False.       

- **snp** (string; default 'SNP'): A string denoting the column name for the SNP names (e.g., rs number). More generally, this column could be anything that identifies each point being plotted. For example, in an Epigenomewide association study (EWAS), this could be the probe name or cg number. This column should be a character. This argument is optional, however it is necessary to specify it if you want to highlight points on the plot using the highlight argument in the figure method.  

- **gene** (string; default 'GENE'): A string denoting the column name for the GENE names. More generally, this could be any annotation information that should be included in the plot. 

- **annotation** (string; optional): A string denoting the column to use as annotations. This could be any annotation information that you want to include in the plot (e.g., zscore, effect size, minor allele frequency).      

- **logp** (bool; default True): If True, the -log10 of the p-value is plotted. It isn't very useful to plot raw p-values; however, plotting the raw value could be useful for other genome-wide plots (e.g., peak heights, Bayes factors, test statistics, and other "scores"). 

- **xlabel** (string; optional): Label of the x axis. 

- **ylabel** (string; default '-log10(p)'): Label of the y axis. 

- **point_size** (number; default 5): Size of the points of the Scatter plot. 

- **col** (string; optional): Color of the points of the Scatter plot. Can be in any color format accepted by plotly.graph_objects. 

- **effect_size_line** (bool | list; default [-1, 1]): A boolean which must be either False to deactivate the option, or a list/array containing the upper and lower bounds of the effect size values. Significant data points will have lower values than the lower bound, or higher values than the higher bound. Keeping the default value will result in assigning the list -1, 1 to the argument. 

- **effect_size_line_color** (string; default 'grey'): Color of the effect size lines.

- **effect_size_line_width** (number; default 2): Width of the effect size lines. 

- **genomewideline_value** (bool | number; default -log10(5e-8)): A boolean which must be either False to deactivate the option, or a numerical value corresponding to the p-value above which the data points are considered significant. 

- **genomewideline_color** (string; default 'red'): Color of the genome-wide line. Can be in any color format accepted by plotly.graph_objects. 

- **genomewideline_width** (number; default 1): Width of the genome-wide line. 

- **highlight** (bool; default True): Whether the data points considered significant should be highlighted or not.

- **highlight_color** (string; default 'red'): Color of the data points highlighted because considered significant. Can be in any color format accepted by plotly.graph_objects.

