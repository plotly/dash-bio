## Run the app

```bash
python tests/dashbio_demos/dash-needle-plot/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 3 tabs in this app: About, Data and Graph.

The About tab contains a general overview of the Needle Plot component.

In the Data tab choose from a selection of pre-loaded datasets or upload your own dataset.

In Graph tab you can set up different styles of the needle plot

## Documentation

Learn more about using the Needle Plot with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/needleplot).

## Needle Plot Properties Reference

- **id** (string; optional): The ID of this component, used to identify dash components in callbacks. The ID needs to be unique across all of the components in an app. 

- **clickData** (list; optional): An array of the points on the graph that have been clicked with Plotly.js clickEvents.      

- **domainStyle** (dict; default { displayMinorDomains: False, domainColor: [ '#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f', '#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', ], textangle: 0,}): Options for the protein domain coloring.      

- **domainStyle** is a dict with keys:
  1. **displayMinorDomains** (boolean; optional): The prop x sometimes contains smaller domains (e.g. multi-site mutations), if True, these are displayed.
  2. **domainColor** (list; optional)
  3. **textangle** (number; optional): Sets the angle at which the domain annotation text is drawn with respect to the horizontal.

- **margin** (dict; default {t: 100, l: 40, r: 0, b: 40}): Margins of the plot. 

- **mutationData** (dict; default { x: [], y: [], domains: [], mutationGroups: [],}): The data that are displayed on the plot.      

- **mutationData** is a dict with keys: 
    1. **domains** (list; optional) 
    2. **mutationGroups** (list of strings; optional)
    3. **x** (string | list; optional)
    4. **y** (string | list; optional)

- **needleStyle** (dict; default { stemColor: '#444', stemThickness: 0.5, stemConstHeight: False, headSize: 5, headColor: [ '#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999', '#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999', '#e41a1c', ], headSymbol: 'circle',}): Options for the needle marking single site mutations.

- **needleStyle** is a dict with keys:
    1. **headColor** (list | string; optional) 
    2. **headSize** (number; optional) 
    3. **headSymbol** (list | string; optional) 
    4. **stemColor** (string; optional) 
    5. **stemConstHeight** (boolean; optional)
    6. **stemThickness** (number; optional)

- **rangeSlider** (boolean; default False): If True, enables a rangeslider for the x-axis. 

- **xlabel** (string; optional): Title of the x-axis. 

- **ylabel** (string; optional): Title of the y-axis. 
