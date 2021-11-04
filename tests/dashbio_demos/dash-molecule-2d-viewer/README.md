## Run the app

```bash
python tests/dashbio_demos/dash-molecule-2d-viewer/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 2 tabs in this app: About and View.

The About tab contains a general overview of the Molecule-2d component.

In Graph tab you can specify threshold value and suggestive line.

## Documentation

Learn more about using the Molecule-2d with interactive examples in the
[Dash Bio docs](https://dash.plotly.com/dash-bio/molecule2dviewer).

## Molecule-2d Properties Reference

- **id** (string; optional): The ID used to identify this component in callbacks. 

- **height** (number; default 500): The height of the SVG element.    

- **modelData** (dict; default { nodes: [], links: [],}): Description of the molecule to display.    

- **modelData** is a dict with keys:
    1. **links** (list of dicts; optional)
        1. **bond** (number; optional)
        2. **distance** (number; optional)
        3. **id** (number; optional)
        4. **source** (optional)
        5. **strength** (number; optional)
        6. **target** (optional)
    2. **nodes** (list of dicts; optional)
    - **nodes** is a list of dicts with keys:
        1. **atom** (string; optional)
        2. **id** (number; optional)

- **selectedAtomIds** (list of numbers; optional): The selected atom IDs.    

- **width** (number; default 500): The width of the SVG element. 
