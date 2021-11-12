## Run the app

```bash
python tests/dashbio_demos/dash-circos/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 4 tabs in this app: About, Data, Graph and Table.

The About tab contains a general overview of the Circos component.

In the Data tab choose from a selection of pre-loaded datasets or upload your own dataset.

In the Table tab you can view datasets.

Use the Graph tab to choose the graph type, graph size and, also see the information
about the hover data.

## Documentation

Learn more about using Circos with interactive examples in the
[Dash Bio docs](https://dash.plotly.com/dash-bio/circos).

## Circos Properties Reference

- **id** (string; optional): The ID of the component to be used in Dash callbacks.

- **config** (dict; optional): Configuration of overall layout of the graph.  

- **enableDownloadSVG** (boolean; optional): Allow for an SVG snapshot of the Circos graph to be downloaded.

- **enableZoomPan** (boolean; optional): Allow for zooming and panning the Circos graph.  

- **eventDatum**  (dict; optional): A Dash prop that returns data on clicking or hovering of the tracks. Depending on
what is specified for prop "selectEvent".  

- **layout**  (list of dicts; required): The overall layout of the Circos graph, provided as a list of dictionaries.

- **layout** is a list of dicts with keys:

    1. **color** (string; required): The color of the block.
    
    2. **id** (string; required): The id of the block, where it will recieve data from the specified "track" id.

    3. **label** (string; required): The labels of the block.

    4. **len** (number; required): The length of the block.

- **selectEvent** (dict; optional): A dictionary used to choose whether tracks should return data on click, hover, 
or both, with the dash prop "eventDatum". The keys of the dictionary represent the index of the list specified for
"tracks". Ex: selectEvent={ "0": "hover", "1": "click", "2": "both" },.  

- **size** (number; default 800): The overall size of the SVG container holding the graph. Set on initilization and 
unchangeable thereafter.

- **style** (dict; optional): The CSS styling of the div wrapping the component. 

- **tracks**  (list of dicts; optional): Tracks that specify specific layouts. For a complete list of tracks and usage,
please check the docs.
    
- **tracks** is a list of dicts with keys:

    1. **color** (dict; optional): Specify which dictonary key to grab color values from, in the passed in dataset.
    This can be a string or an object. If using a string, you can specify hex, RGB, and colors from d3 scale chromatic
    (Ex: RdYlBu). The key "name" is required for this dictionary, where the input for "name" points to some list of
    dictionaries color values. Ex: "color": {"name": "some key that refers to color in a data set"}.

    **color** is a string or dict with keys:

    1. **name**  (string; required)

- **config** (dict; optional): The layout of the tracks, where the user can configure innerRadius, outterRadius, ticks,
labels, and more.

- **data** (list; required): The data that makes up the track. It can be a Json object.

- **id** (string; optional): The id of a specific piece of track data.

- **tooltipContent** (dict; optional): Specify what data for tooltipContent is displayed. The entry for the "name" key,
is any of the keys used in the data loaded into tracks. Ex: "tooltipContent": {"name": "block_id"}, To display all data
in the dataset use "all" as the entry for the key "name". Ex: "tooltipContent": {"name": "all"} Ex: This will return
(source) + ' > ' + (target) + ': ' + (targetEnd)'. "tooltipContent": { "source": "block_id", "target": "position", 
"targetEnd": "value" }, Ex: This will return (source)(sourceID) + ' > ' + (target)(targetID) + ': ' (target)(targetEnd)'
. "tooltipContent": { "source": "source", "sourceID": "id", "target": "target", "targetID": "id", "targetEnd": "end" }.

- **tooltipContent** is a string | dict with keys:

    1. **name** (string; required) | dict with keys:

    2. **source** (string; required)

    3. **sourceID** (string; optional)

    4. **target** (string; required)

    5. **targetEnd** (string; required)

    6. **targetID** (string; optional)

- **type** (a value equal to: 'CHORDS', 'HEATMAP', 'HIGHLIGHT', 'HISTOGRAM', 'LINE', 'SCATTER', 'STACK' or 'TEXT';
optional): Specify the type of track this is. Please check the docs for a list of tracks you can use, and ensure the
name is typed in all capitals.