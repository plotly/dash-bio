## Run the app

```bash
python tests/dashbio_demos/dash-ngl-moleculeviewer/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 4 tabs in this app: About, Data, View and Download.

The About tab contains a general overview of the Molecule Viewer component.

In Data tab you can choose dataset that would be displayed. You can display
preloaded dataset or upload your own and specify them. Also, you can Show multiple
structures and (or) specify a chain/ residues range/ highlight chosen residues/ 
atoms.

In View tab you can set different styles of the Molecule Viewer component.

In Download tab you can download image that displayed on your screen and specify
different parameters for image that you would like to download.

## Documentation

Learn more about using the Molecule Viewer with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/nglmoleculeviewer).

## Molecule Viewer Properties Reference

- **id** (string; optional): The ID of this component, used to identify dash components in callbacks. The ID needs to be unique across all of the components in an app.  

- **data** (list of dicts; default [ { filename: 'placeholder', ext: '', selectedValue: 'placeholder', chain: 'ALL', aaRange: 'ALL', chosen: { chosenAtoms: '', chosenResidues: '', }, color: 'red', config: { input: '', type: 'text/plain', }, uploaded: False, resetView: False, },]): The data (in JSON format) that will be used to display the molecule filename: name of the used pdb/cif file ext: file extensions (pdb or cif) selectedValue: pdbString chain: ALL if the whole molecule shoud be displayed, e.g. A for showing only chain A aaRange: ALL if the whole molecule should be displayed, e.g. 1:50 for showing only 50 atoms color: chain color chosen.atoms: string of the chosen Atoms, e.g. 50,100,150 --> chosen eatoms changed to colored 'ball' chosen.residues: string of the chosen residues, e.g. 50,100,150 --> C alpha of chosen residue changed to colored 'ball' config.input: content of the pdb file config.type: format of config.input uploaded: bool if file from local storage (False) or uploaded by user (True) resetView: bool if the selection did not change but the view should be resettet (True).       

- **downloadImage** (boolean; default False): flag if download image was selected.       

- **data** is a list of dicts with keys: 
  1. **aaRange** (string; required) 
  2. **chain**  (string; required)
  3. **chosen** (dict; optional)
- **chosen** is a dict with keys:
  1. **atoms** (string; required)
  2. **residues** (string; required)


  4.**color** (string; required) 
  
  5.**config** (dict; optional)
- **config** is a dict with keys:
      1. **input** (string; required)
      2. **type** (string; required)
  6. **ext** (string; optional) 
  7. **filename** (string; required)
  8. **resetView** (boolean; required)
  9. **selectedValue** (string; required)
  10. **uploaded**(boolean; required)

- **height** (string | number; default '600px'): The height (in px or as a number) of the container in which the molecules will be displayed.  

- **imageParameters** (dict; default { antialias: True, transparent: True, trim: True, defaultFilename: 'dash-bio_ngl_output',}): Parameters (in JSON format) for exporting the image.       

- **imageParameters** is a dict with keys:  
    1. **antialias** (boolean; optional)  
    2. **defaultFilename** (string; optional) 
    3. **transparent** (boolean; optional) 
    4. **trim** (boolean; optional) 

- **molStyles** (dict; default { representations: ['cartoon', 'axes+box'], chosenAtomsColor: '#ffffff', chosenAtomsRadius: 1, molSpacingXaxis: 100, sideByside: False,}): The data (in JSON format) that will be used to style the displayed molecule representations: one or multiple selected molecule representation - Possible molecule styles: 'backbone,'ball+stick','cartoon', 'hyperball','licorice','line', 'ribbon',''rope','spacefill','surface','trace','tube' - Possible additional representations: 'axes','axes+box','helixorient','unitcell' chosenAtomsColor: color of the 'ball+stick' representation of the chosen atoms chosenAtomsRadius: radius of the 'ball+stick' representation of the chosen atoms molSpacingXaxis: distance on the xAxis between each molecule.

- **molStyles** is a dict with keys: 
    1. **chosenAtomsColor** (string; required)  
    2. **chosenAtomsRadius** (number; required)  
    3. **molSpacingXaxis** (number; required)  
    4. **representations** (list of strings; optional)   
    5. **sideByside** (boolean; required)
    
- **pdbString** (string; optional): Variable which defines how many molecules should be shown and/or which chain The following format needs to be used: pdbID1.chain:start-end@atom1,atom2pdbID2.chain:start-end . indicates that only one chain should be shown : indicates that a specific amino acids range should be shown (e.g. 1-50) @ indicates that chosen atoms should be highlighted (e.g. @50,100,150) indicates that more than one protein should be shown.   

- **stageParameters** (dict; default { quality: 'medium', backgroundColor: 'white', cameraType: 'perspective',}): Parameters (in JSON format) for the stage object of ngl. Currently implemented are render quality, background color and camera type quality: auto, low, medium, high (default: auto) backgroundColor: white / black (default: white) cameraType: perspective / orthographic (default: perspective).  

- **stageParameters** is a dict with keys:
  1. **backgroundColor** (string; optional)
  2. **cameraType** (string; optional)
  3. **quality** (string; optional)

- **width** (string | number; default '600px'): The width (in px or as a number) of the container in which the molecules will be displayed.
