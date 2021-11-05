## Run the app

```bash
python tests/dashbio_demos/dash-onco-print/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 3 tabs in this app: about, data and view.

The About tab contains a general overview of the Onco Print component.

In Data tab you can select preloaded dataset and data about genetic you selected.

In the View tab you can specify different layout styles.

## Documentation

Learn more about using the Onco Print with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/oncoprint).

## Onco Print Properties Reference

- **id** (string; optional): The ID of this component, used to identify dash components in callbacks. The ID needs to be unique to the component. 

- **backgroundcolor** (string; default 'rgb(190, 190, 190)'): Default color for the tracks, in common name, hex, rgb or rgba format. If left blank, will default to a light grey rgb(190, 190, 190).        

- **colorscale** (boolean | dict; optional): If not None, will override the default OncoPrint colorscale. Default OncoPrint colorscale same as CBioPortal implementation. Make your own colrscale as a {'mutation': COLOR} dict. Supported mutation keys are ['MISSENSE, 'INFRAME', 'FUSION', 'AMP', 'GAIN', 'HETLOSS', 'HMODEL', 'UP', 'DOWN'] Note that this is NOT a standard plotly colorscale.        

- **data** (list; optional): Input data, in CBioPortal format where each list entry is a dict consisting of 'sample', 'gene', 'alteration', and 'type'.   

- **eventDatum** (dict; optional): A Dash prop that returns data on clicking, hovering or resizing the viewer.        

- **height**  (number | string; default 500): Height of the OncoPrint. Will disable auto-resizing of plots if set.   

- **padding** (number; default 0.05): Adjusts the padding (as a proportion of whitespace) between two tracks. Value is a ratio between 0 and 1. Defaults to 0.05 (i.e., 5 percent). If set to 0, plot will look like a heatmap. 

- **range**  (list; default [None, None]): Toogles whether or not to show a legend on the right side of the plot, with mutation information.  

- **showlegend** (boolean; default True): Toogles whether or not to show a legend on the right side of the plot, with mutation information.   

- **showoverview** (boolean; default True): Toogles whether or not to show a heatmap overview of the tracks.

- **width** (number | string; optional): Width of the OncoPrint. Will disable auto-resizing of plots if set.
