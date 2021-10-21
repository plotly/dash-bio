## Run the app

```bash
python tests\dashbio_demos\dash-ngl-moleculeviewer\app.py
```
Then navigate to `localhost:8050` in your web browser.

You can check the description of the ngl-molecule-viewer in the 'About' tab.

## Usage

There are 4 tabs in this app: about, data, view and download.

In the data tab you can choose dataset that would be displayed. You can display
preloaded dataset or upload your own and specify them. Also, you can Show multiple
structures and (or) specify a chain/ residues range/ highlight chosen residues/ 
atoms.

In the view tab you can set different styles of the moleculeviewer.

In the download tab you can download image that displayed on your screen and specify
different parameters for image that you would like to download.

## Documentation about this app

You could check some examples of using this app with different properties due to
this link 'https://dash.plotly.com/dash-bio/nglmoleculeviewer'.

## List of the properties

- id  

- data        

- downloadImage        

- data  
  1. aaRange  
  2. chain  
  3. chosen 
      1. atoms 
      2. residues 
  4. color 
  5. config 
      1. input 
      2. type 
  6. ext 
  7. filename 
  8. resetView 
  9. selectedValue 
  10. uploaded

- height   

- imageParameters        

- imageParameters   
    1. antialias   
    2. defaultFilename  
    3. transparent  
    4. trim  

- molStyles 

- molStyles  
    1. chosenAtomsColor   
    2. chosenAtomsRadius   
    3. molSpacingXaxis   
    4. representations   
    5. sideByside  

- pdbString   

- stageParameters   

- stageParameters 
  1. backgroundColor 
  2. cameraType 
  3. quality 

- width 
