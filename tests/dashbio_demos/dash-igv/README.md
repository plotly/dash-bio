## Run the app

```bash
python tests/dashbio_demos/dash-igv/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 2 tabs in this app: About and Data.

The About tab contains a general overview of the Igv component.

In Data tab you can choose preloaded genomes and set up minimum window size.

## Documentation

Learn more about using the Igv with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/igv).

## Igv Properties Reference

- **id** (string; optional): The ID of this component, used to identify dash components in callbacks. The ID needs to be unique across all of the components in an app.

- **className** (string; optional): className of the component div.  

- **genome**  (string; optional): String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome for details and list of supported identifiers. Note: One (but only one) of either genome or reference properties must be set. If both are set, the genome property will be ignored.  

- **locus** (string; optional): Initial genomic location(s). Either a string or an array of strings. If an array a viewport is created for each location.  

- **minimumBases** (number; optional): Minimum window size in base pairs when zooming in.  

- **reference** (dict; optional): Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome Note: One (but only one) of either genome or reference properties must be set. If both are set, the genome property will be ignored.

- **style** (dict; optional): Generic style overrides on the plot div.  

- **tracks** (list; optional): Array of configuration objects defining tracks initially displayed when app launches. see https://github.com/igvteam/igv.js/wiki/Tracks-2.0.  
