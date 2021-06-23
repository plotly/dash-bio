# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_molecule2dviewer

"""
    dashbio_molecule2dviewer(;kwargs...)

A Molecule2dViewer component.
The Molecule2dViewer component is used to render structural
formulae of molecules.
Read more about the component here:
https://github.com/Autodesk/molecule-2d-for-react
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in callbacks.
- `height` (Real; optional): The height of the SVG element.
- `modelData` (optional): Description of the molecule to display.. modelData has the following type: lists containing elements 'nodes', 'links'.
Those elements have the following types:
  - `nodes` (optional): . nodes has the following type: Array of lists containing elements 'id', 'atom'.
Those elements have the following types:
  - `id` (Real; optional)
  - `atom` (String; optional)s
  - `links` (optional): . links has the following type: Array of lists containing elements 'id', 'source', 'target', 'bond', 'strength', 'distance'.
Those elements have the following types:
  - `id` (Real; optional)
  - `source` (optional)
  - `target` (optional)
  - `bond` (Real; optional)
  - `strength` (Real; optional)
  - `distance` (Real; optional)s
- `selectedAtomIds` (Array of Reals; optional): The selected atom IDs.
- `width` (Real; optional): The width of the SVG element.
"""
function dashbio_molecule2dviewer(; kwargs...)
        available_props = Symbol[:id, :height, :modelData, :selectedAtomIds, :width]
        wild_props = Symbol[]
        return Component("dashbio_molecule2dviewer", "Molecule2dViewer", "dash_bio", available_props, wild_props; kwargs...)
end

