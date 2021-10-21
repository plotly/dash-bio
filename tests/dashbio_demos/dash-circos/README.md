## Run the app

```bash
python tests\dashbio_demos\dash-circos\app.py
```
Then navigate to `localhost:8050` in your web browser.

You can check the description of the Circos in the 'About' tab.

## Usage

There are 4 tabs in this app: about, data, graph and table.

In the data tab you can choose preloaded datasets or uploaded you own dataset.

In the table tab you can view datasets.

In the graph tab you can choose the graph type, graph size and, also see the information
about the hover data.

## Documentation about this app

You could check some examples of using this app with different properties due to
this link 'https://dash.plotly.com/dash-bio/circos'.

## List of the properties

- id

- config  

- enableDownloadSVG  

- enableZoomPan  

- eventDatum  

- layout

- Layout is a list of dicts with keys:

    1. color 
    
    2. id

    3. label

    4. len

- selectEvent  

- size  

- style  

- tracks
    
    Tracks is a list of dicts with keys:

    color

    Color is a string or dict with keys:

    name

- config  

- data  

- id  

- tooltipContent  

- tooltipContent is a string | dict with keys:

    1. name 

    2. source 

    3. sourceID 

    4. target 

    5. targetEnd 

    6. targetID 

- type