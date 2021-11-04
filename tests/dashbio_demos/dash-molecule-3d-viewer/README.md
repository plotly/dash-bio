## Run the app

```bash
python tests/dashbio_demos/dash-molecule-3d-viewer/app.py
```
Then navigate to `localhost:8050` in your web browser.

## Usage

There are 3 tabs in this app: About, Data and View.

The About tab contains a general overview of the Molecule-3d component.

In Data tab choose from a selection of pre-loaded datasets or upload your own dataset.

In View tab you can see data of the selected atom, choose style and color of viewer.

## Documentation

Learn more about using the Molecule-3d with interactive examples in the [Dash Bio docs](https://dash.plotly.com/dash-bio/molecule3dviewer).

## Molecule-3d Properties Reference

- **id** (string; optional): The ID used to identify this component in callbacks. 

- **atomLabelsShown** (boolean; optional): Property to either show or hide labels.     

- **backgroundColor** (string; default '#FFFFFF'): Property to change the background color of the molecule viewer.     

- **backgroundOpacity** (number; default 0): Property to change the background opacity - ranges from 0 to 1. 

- **labels** (list of dicts; optional): Labels corresponding to the atoms of the molecule. Each label has a text field, a string containing the label content, and can have many other styling fields as described in https://3dmol.csb.pitt.edu/doc/types.html#LabelSpec.

- **modelData** (dict; optional): The data that will be used to display the molecule in 3D The data will be in JSON format and should have two main dictionaries - atoms, bonds.     

- **modelData** is a dict with keys:
    1. **atoms** (list; optional)
    2. **bonds** (list; optional)
- **orbital** (dict; optional): Add an isosurface from volumetric data provided in the cube_file.
- **orbital** is a dict with keys:
    1. **cube_file** (string; optional): The filepath containing raw volumetric data for vertex coloring.
    2. **iso_val** (number; optional): The isovalue to draw the surface at.
    3. **negativeVolumetricColor** (string; optional): Color for the negative value of the isosurface orbital.
    4. **opacity** (number; optional): Transparency of the surface, between 0 and 1.
    5. **positiveVolumetricColor** (string; optional): Color for the positive value of the isosurface orbital.

- **selectedAtomIds** (list; optional): Property that stores a list of all selected atoms.

- **selectionType** (a value equal to: 'atom', 'residue' or 'chain'; default 'atom'): The selection type - may be atom, residue or chain.

- **shapes**  (list of dicts; optional): Add a predefined renderable shape objects to the molecule. Valid shape types are Arrow, Sphere, and Cylinder.

- **styles** (list of dicts; optional): Property that can be used to change the representation of the molecule. Options include sticks, cartoon and sphere.

- **styles** is a list of dicts with keys:
    1. **color** (string; optional)
    2. **visualization_type** (a value equal to: 'cartoon', 'sphere' or 'stick'; optional)

- **zoom** (dict; default { factor: 0.8, animationDuration: 0, fixedPath: False,}): Zoom the current view by a constant factor, with optional parameters to modify the duration and motion of the zoom animation.

- **zoom** is a dict with keys:
    1. **animationDuration** animationDuration (number; optional): An optional parameter that denotes the duration of a zoom animation, in milliseconds.
    2. **factor** factor (number; optional): Magnification factor. Values greater than 1 will zoom, in, less than one will zoom out. Default 2.
    3. **fixedPath** fixedPath (boolean; optional): If True, animation is constrained to requested motion, overriding updates that happen during the animation.

- **zoomTo** (dict; default { sel: {}, animationDuration: 0, fixedPath: False,}): Zoom to center of atom selection.

- **zoomTo** is a dict with keys:
    1. **animationDuration** (number; optional): An optional parameter that denotes the duration of a zoom animation , in milliseconds.
    2. **fixedPath** (boolean; optional): If True, animation is constrained to requested motion, overriding updates that happen during the animation.
    3. **sel** (dict; optional): Selection specification specifying model and atom properties to select. Default: all atoms in viewer.
    - sel is a dict with keys:
      1. **chain** (string; optional): Chain that the residue is located on.
      2. **resi** (number; optional): The index value used to identify the residue; residues are numbered sequentially starting from 1.
