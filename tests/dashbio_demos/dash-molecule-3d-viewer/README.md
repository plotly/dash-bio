## Run the app

```bash
python tests\dashbio_demos\dash-molecule-3d-viewer\app.py
```
Then navigate to `localhost:8050` in your web browser.

You can check the description of the molecule-3d-viewer in the 'About' tab.

## Usage

There are 3 tabs in this app: about, data and view.

In the data tab you can choose what to display from the preloaded structures or you 
can upload your own.

In the view tab you can see data of the selected atom, choose style and color of viewer.

## Documentation about this app

You could check some examples of using this app with different properties due to
this link 'https://dash.plotly.com/dash-bio/molecule3dviewer'.

## List of the properties

- id  

- atomLabelsShown      

- backgroundColor      

- backgroundOpacity  

- labels 

- modelData      

- modelData 
    1. atoms 
    2. bonds 
- orbital 
    1. cube_file 
    2. iso_val 
    3. negativeVolumetricColor 
    4. opacity 
    5. positiveVolumetricColor 

- selectedAtomIds 

- selectionType 

- shapes 

- styles 

- styles
    1. color 
    2. visualization_type 

- zoom 

- zoom 
    1. animationDuration 
    2. factor 
    3. fixedPath 

- zoomTo 

- zoomTo 
    1. animationDuration 
    2. fixedPath 
    3. sel 
        1. chain 
        2. resi 
