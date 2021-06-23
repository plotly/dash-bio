# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_molecule3dviewer

"""
    dashbio_molecule3dviewer(;kwargs...)

A Molecule3dViewer component.
The Molecule3dViewer component is used to render schematic diagrams
of biomolecules. It can display ribbon-structure diagrams, or
render atoms in the molecule as sticks or spheres.
Read more about the component here:
https://github.com/Autodesk/molecule-3d-for-react
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in callbacks
- `atomLabelsShown` (Bool; optional): Property to either show or hide labels
- `backgroundColor` (String; optional): Property to change the background color of the molecule viewer
- `backgroundOpacity` (Real; optional): Property to change the background opacity - ranges from 0 to 1
- `labels` (Array of Dicts; optional): Labels corresponding to the atoms of the molecule.
Each label has a `text` field, a string containing the label content,
and can have many other styling fields as described in
https://3dmol.csb.pitt.edu/doc/types.html#LabelSpec
- `modelData` (optional): The data that will be used to display the molecule in 3D
The data will be in JSON format
and should have two main dictionaries - atoms, bonds. modelData has the following type: lists containing elements 'atoms', 'bonds'.
Those elements have the following types:
  - `atoms` (Array; optional)
  - `bonds` (Array; optional)
- `orbital` (optional): Add an isosurface from volumetric data provided in the `cube_file`. orbital has the following type: lists containing elements 'cube_file', 'iso_val', 'opacity', 'positiveVolumetricColor', 'negativeVolumetricColor'.
Those elements have the following types:
  - `cube_file` (String; optional): The filepath containing raw volumetric data for vertex coloring
  - `iso_val` (Real; optional): The isovalue to draw the surface at
  - `opacity` (Real; optional): Transparency of the surface, between 0 and 1
  - `positiveVolumetricColor` (String; optional): Color for the positive value of the isosurface orbital
  - `negativeVolumetricColor` (String; optional): Color for the negative value of the isosurface orbital
- `selectedAtomIds` (Array; optional): Property that stores a list of all selected atoms
- `selectionType` (a value equal to: 'atom', 'residue', 'chain'; optional): The selection type - may be atom, residue or chain
- `shapes` (Array of Dicts; optional): Add a predefined renderable shape objects to the molecule.
Valid shape types are Arrow, Sphere, and Cylinder.
- `styles` (optional): Property that can be used to change the representation of
the molecule. Options include sticks, cartoon and sphere. styles has the following type: Array of lists containing elements 'color', 'visualization_type'.
Those elements have the following types:
  - `color` (String; optional)
  - `visualization_type` (a value equal to: 'cartoon', 'sphere', 'stick'; optional)s
- `zoom` (optional): Zoom the current view by a constant factor, with optional parameters
to modify the duration and motion of the zoom animation.. zoom has the following type: lists containing elements 'factor', 'animationDuration', 'fixedPath'.
Those elements have the following types:
  - `factor` (Real; optional): Magnification factor. Values greater than 1 will zoom,
in, less than one will zoom out. Default 2.
  - `animationDuration` (Real; optional): An optional parameter that denotes the duration of a
zoom animation, in milliseconds.
  - `fixedPath` (Bool; optional): If true, animation is constrained to requested motion,
overriding updates that happen during the animation.
- `zoomTo` (optional): Zoom to center of atom selection.. zoomTo has the following type: lists containing elements 'sel', 'animationDuration', 'fixedPath'.
Those elements have the following types:
  - `sel` (optional): Selection specification specifying model and atom properties
to select. Default: all atoms in viewer.. sel has the following type: lists containing elements 'chain', 'res'.
Those elements have the following types:
  - `chain` (String; optional): Chain that the residue is located on.
  - `res` (Real; optional): The index value used to identify the residue;
residues are numbered sequentially starting from 1.
  - `animationDuration` (Real; optional): An optional parameter that denotes the duration of a zoom animation
, in milliseconds.
  - `fixedPath` (Bool; optional): If true, animation is constrained to requested motion,
overriding updates that happen during the animation.
"""
function dashbio_molecule3dviewer(; kwargs...)
        available_props = Symbol[:id, :atomLabelsShown, :backgroundColor, :backgroundOpacity, :labels, :modelData, :orbital, :selectedAtomIds, :selectionType, :shapes, :styles, :zoom, :zoomTo]
        wild_props = Symbol[]
        return Component("dashbio_molecule3dviewer", "Molecule3dViewer", "dash_bio", available_props, wild_props; kwargs...)
end

