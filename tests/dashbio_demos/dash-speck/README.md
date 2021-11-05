## Run the app

```bash
python tests/dashbio_demos/dash-speck/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 3 tabs in this app: about, data and view.

The About tab contains a general overview of the Speck component.

In Data tab you can select preloaded dataset or upload your own.

In View tab you can specify options such as atom radius, brightness and so on.

## Documentation

Learn more about using the Speck with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/speck).

## Speck Properties Reference

- **id** (string; optional): The ID used to identify this component in Dash callbacks. 

- **data** (list of dicts; optional): The xyz file data; a list of atoms such that each atom has a dictionary defining the x, y, and z coordinates along with the atom's symbol.           

- **data** is a list of dicts with keys:
  1. **symbol** (string; optional)
  2. **x** (number; optional)
  3. **y** (number; optional)
  4. **z** (number; optional)

- **presetView** (a value equal to: 'default', 'stickball', 'toon' or 'licorice'; optional): One of several pre-loaded views: default, stick-ball, toon, and licorice.      

- **scrollZoom** (boolean; optional): The option of whether or not to allow scrolling to control the zoom.

- **view** (dict; default speckView.new()): An object that determines and controls various parameters related to how the molecule is displayed.

- **view** is a dict with keys:
    1. **ao** (number; optional) 
    2. **aoRes** (number; optional) 
    3. **aspect** (number; optional) 
    4. **atomScale** (number; optional) 
    5. **atomShade** (number; optional) 
    6. **bondScale** (number; optional) 
    7. **bondShade** (number; optional)
    8. **bondThreshold** (number; optional)
    9. **bonds** (boolean; optional)
    10. **brightness** (number; optional)
    11. **dofPosition** (number; optional)
    12. **dofStrength** (number; optional)
    13. **fxaa** (number; optional)
    14. **outline** (number; optional)
    15. **relativeAtomScale** (number; optional)
    16. **resolution** (number; optional)
    17. **rotation** (dict; optional)
- **rotation** is a dict with keys:
  1. **spf** (number; optional)
  2. **translation** (dict; optional)
- **translation** is a dict with keys:
  1. **x** (number; optional)
  2. **y** y (number; optional)

- **zoom** (number; optional)       
