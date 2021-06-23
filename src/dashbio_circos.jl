# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_circos

"""
    dashbio_circos(;kwargs...)

A Circos component.
Dash Circos is a library used to analyze and interpret
data using a circular layout, based on the popular
'Circos' graph. This Dash Bio component is a useful tool
for showcasing relationships bewtween data/datasets in a
beautiful way. Please checkout the Dash Bio repository
on github to learn more about this API.
Keyword arguments:
- `id` (String; optional): The ID of the component to be used in Dash callbacks
- `config` (Dict; optional): Configuration of overall layout of the graph.
- `enableDownloadSVG` (Bool; optional): Allow for an SVG snapshot of the Circos graph to be downloaded.
- `enableZoomPan` (Bool; optional): Allow for zooming and panning the Circos graph.
- `eventDatum` (Dict; optional): A Dash prop that returns data on clicking or hovering of the tracks.
Depending on what is specified for prop "selectEvent".
- `layout` (required): The overall layout of the Circos graph, provided
as a list of dictionaries.. layout has the following type: Array of lists containing elements 'len', 'color', 'label', 'id'.
Those elements have the following types:
  - `len` (Real; required): The length of the block.
  - `color` (String; required): The color of the block.
  - `label` (String; required): The labels of the block.
  - `id` (String; required): The id of the block, where it will recieve
data from the specified "track" id.s
- `selectEvent` (Dict; optional): A dictionary used to choose whether tracks should return
data on click, hover, or both, with the dash prop "eventDatum".
The keys of the dictionary represent the index of the list
specified for "tracks".
Ex:
selectEvent={
        "0": "hover",
        "1": "click",
        "2": "both"
    },
- `size` (Real; optional): The overall size of the SVG container holding the
graph. Set on initilization and unchangeable thereafter.
- `style` (Dict; optional): The CSS styling of the div wrapping the component
- `tracks` (optional): Tracks that specify specific layouts.
For a complete list of tracks and usage,
please check the docs.. tracks has the following type: Array of lists containing elements 'id', 'data', 'config', 'type', 'tooltipContent', 'color'.
Those elements have the following types:
  - `id` (String; optional): The id of a specific piece of track data.
  - `data` (Array; required): The data that makes up the track. It can
be a Json object.
  - `config` (Dict; optional): The layout of the tracks, where the user
can configure innerRadius, outterRadius, ticks,
labels, and more.
  - `type` (a value equal to: CHORDS, HEATMAP, HIGHLIGHT, HISTOGRAM, LINE, SCATTER, STACK, TEXT; optional): Specify the type of track this is.
Please check the docs for a list of tracks you can use,
and ensure the name is typed in all capitals.
  - `tooltipContent` (optional): Specify what data for tooltipContent is
displayed.
The entry for the "name" key, is any of the keys used in the data loaded into tracks.
Ex: "tooltipContent": {"name": "block_id"},
To display all data in the dataset use "all" as the entry for the key "name".
Ex: "tooltipContent": {"name": "all"}
Ex: This will return (source) + ' > ' + (target) + ': ' + (targetEnd)'.
"tooltipContent": {
                "source": "block_id",
                "target": "position",
                "targetEnd": "value"
                        },
Ex: This will return (source)(sourceID) + ' > ' + (target)(targetID) + ': ' (target)(targetEnd)'.
"tooltipContent": {
                "source": "source",
                "sourceID": "id",
                "target": "target",
                "targetID": "id",
                "targetEnd": "end"
            }. tooltipContent has the following type: String | lists containing elements 'name'.
Those elements have the following types:
  - `name` (String; required) | lists containing elements 'source', 'sourceID', 'target', 'targetEnd', 'targetID'.
Those elements have the following types:
  - `source` (String; required)
  - `sourceID` (String; optional)
  - `target` (String; required)
  - `targetEnd` (String; required)
  - `targetID` (String; optional)
  - `color` (optional): Specify which dictonary key to grab color values from, in the passed in dataset.
This can be a string or an object.
If using a string, you can specify hex,
RGB, and colors from d3 scale chromatic (Ex: RdYlBu).
The key "name" is required for this dictionary,
where the input for "name" points to some list of
dictionaries color values.
Ex: "color": {"name": "some key that refers to color in a data set"}. color has the following type: String | lists containing elements 'name'.
Those elements have the following types:
  - `name` (String; required)s
"""
function dashbio_circos(; kwargs...)
        available_props = Symbol[:id, :config, :enableDownloadSVG, :enableZoomPan, :eventDatum, :layout, :selectEvent, :size, :style, :tracks]
        wild_props = Symbol[]
        return Component("dashbio_circos", "Circos", "dash_bio", available_props, wild_props; kwargs...)
end

