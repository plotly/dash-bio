## Run the app

```bash
python tests\dashbio_demos\dash-forna-container\app.py
```
Then navigate to `localhost:8050` in your web browser.

You can check the description of forna-container in the 'About' tab.

## Usage

There are 5 tabs in this app: about, add new, sequences, colors, title pattern.

In add new tab you can specify the nucleotide sequence, specify the RNA secondary
structure. Also, you have a lot of another options here: apply force, circularize
external, avoid others, label interval, id. You can change all of them and will see
changes in the app in your browser.

In sequences tab choose id of the sequences you would like to display and get
information about sequences by id.

In the color tab you can choose color of the scheme.

In the title pattern tab you can specify the information which will be rendered.

## Documentation about this app

You could check some examples of using this app with different properties due to
this link 'https://dash.plotly.com/dash-bio/fornacontainer'.

## List of the properties

- id  

- allowPanningAndZooming   

- colorScheme   

- customColors 
- customColors is a dict with keys:
    1. colorValues
    2. domain 
    3. range 

- height   

- nodeFillColor   

- sequences   

- sequences 
    1. options Additional options to be applied to the rendering of the RNA molecule.
        1. applyForce 
        2. avoidOthers 
        3. circularizeExternal 
        4. labelInterval 
        5. name 

- sequence   

- structure   

- width