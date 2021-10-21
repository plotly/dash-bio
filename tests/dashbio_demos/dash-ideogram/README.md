## Run the app

```bash
python tests\dashbio_demos\dash-ideogram\app.py
```
Then navigate to `localhost:8050` in your web browser.

You can check the description of the ideogram in the 'About' tab.



## Usage

There are 2 tabs in this app: about and view.

In the view tab you can choose view feature of the ideogram app. Also, you can 
specify different organism parameters such as species, sex, resolution. In labels 
you can turn the band off or on and same with the id of each chromosome. And 
another different style options such as orientation, rotatable, margin, height, width,
fully banded which you can specify.

## Documentation about this app

You could check some examples of using this app with different properties due to
this link 'https://dash.plotly.com/dash-bio/ideogram'.


## List of the properties

- id

- ancestors  

- annotationHeight  

- annotationTracks  

- annotations  

- annotations
  1. chr 
  2. name 
  3. start 
  4. stop 

- annotationsColor  

- annotationsData  

- annotationsLayout  

- annotationsPath  

- assembly  

- barWidth  

- brush  

- brushData  

- brushData 
  1. end 
  2. extent 
  3. start 

- chrHeight  

- chrMargin  

- chrWidth  

- container   

- dataDir   

- filterable  

- fullChromosomeLabels  

- histogramScaling  

- homology  

- homology 
    1. chrOne 
        1. organism
        2. start 
        3. stop 
    2. chrTwo 
        1. organism 
        2. start 
        3. stop 

- localOrganism  

- organism  

- orientation  

- perspective  

- ploidy 

- ploidyDesc 
- rangeSet 
- resolution 
- rotatable 
- rotated 
- sex 
- showAnnotTooltip 
- showBandLabels 
- showChromosomeLabels 
- showFullyBanded 
- showNonNuclearChromosomes 
- style 