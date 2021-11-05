## Run the app

```bash
python tests/dashbio_demos/dash-pileup/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 2 tabs in this app: About and Data.

The About tab contains a general overview of the Pileup component.

In Data tab you can see the differentially expressed genes.


## Documentation

Learn more about using the Pileup with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/pileup).

## Volcano Plot Properties Reference

- **id** (string; optional): The ID of this component, used to identify dash components in callbacks. The ID needs to be unique across all of the components in an app.  

- **className** (string; optional): className of the component div.       

- **range** (dict; optional): Object defining genomic location. Of the format: {contig: 'chr17', start: 7512384, stop: 7512544}.       

- **range** is a dict with keys:
  1. **config** (string; optional): Name of contig to display. (ie. chr17).
  2. **start** (number; optional): Start location to display.
  3. **stop** (number; optional): Stop location to display.

- **reference** (dict; optional): Object defining genomic reference.
- **reference**  is a dict with keys:
  1. **label** (string; optional): Label to display by reference.
  2. **url** (string; optional): Url of 2bit file. https://genome.ucsc.edu/goldenPath/help/twoBit.html.

- **style** (dict; optional): Generic style overrides on the plot div.      

- **tracks** (list of dicts; optional): Array of configuration objects defining tracks initially displayed when app launches. See https://github.com/hammerlab/pileup.js#usage. 

- **tracks** is a list of dicts with keys:
  1. **label** (string; optional): Label to display by track.
  2. **source** (a value equal to: 'bam', 'alignmentJson', 'variantJson', 'featureJson', 'idiogramJson', 'cytoBand', 'vcf', 'twoBit', 'bigBed', 'GAReadAlignment', 'GAVariant', 'GAFeature' or 'GAGene'; optional): Data source to visualize. Must be one of (bam, vcf, alignmentJson, variantJson, featureJson, idiogramJson, cytoBand, vcf, twoBit, bigBed, GAReadAlignment, GAVariant, GAFeature, GAGene). For more info on data source types supported by pileup.js see https://github.com/hammerlab/pileup.js/blob/master/src/main/pileup.js.
  3. **sourceOptions** (optional): Options that define data source. Options depend on the source selected.
  4. **viz** (a value equal to: 'coverage', 'genome', 'genes', 'features', 'idiogram', 'location', 'scale', 'variants', 'genotypes' or 'pileup'; optional): Name of visualization. Must be one of (coverage, genome, genes, features, idiogram, location, scale, variants, genotypes, or pileup). For more info on visualization types supported by pileup.js see https://github.com/akmorrow13/pileup.js/blob/master/src/main/pileup.js.
  5. **vizOptions** (optional): Options that define viz details. Options depend on the viz type selected.



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

