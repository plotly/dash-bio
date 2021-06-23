# AUTO GENERATED FILE - DO NOT EDIT

export dashbio_nglmoleculeviewer

"""
    dashbio_nglmoleculeviewer(;kwargs...)

A NglMoleculeViewer component.
The NglMoleculeViewer is used to render schematic diagrams
of biomolecules in ribbon-structure representations.
Read more about the component here:
https://github.com/IvoLeist/dash_ngl
Read more about the used WebGL protein viewer here:
https://github.com/arose/ngl
Keyword arguments:
- `id` (String; optional): The ID of this component, used to identify dash components in callbacks.
The ID needs to be unique across all of the components in an app.
- `data` (optional): The data (in JSON format) that will be used to display the molecule
filename: name of the used pdb/cif file
ext: file extensions (pdb or cif)
selectedValue: pdbString
chain: ALL if the whole molecule shoud be displayed, e.g. A for showing only chain A
aaRange: ALL if the whole molecule should be displayed, e.g. 1:50 for showing only 50 atoms
color: chain color
chosen.atoms: string of the chosen Atoms, e.g. 50,100,150
              --> chosen eatoms changed to colored 'ball'
chosen.residues: string of the chosen residues, e.g. 50,100,150
                 --> C alpha of chosen residue changed to colored 'ball'
config.input: content of the pdb file
config.type: format of config.input
uploaded: bool if file from local storage (false) or uploaded by user (true)
resetView: bool if the selection did not change but the view should be resettet (true). data has the following type: Array of lists containing elements 'filename', 'ext', 'selectedValue', 'chain', 'aaRange', 'color', 'chosen', 'config', 'uploaded', 'resetView'.
Those elements have the following types:
  - `filename` (String; required)
  - `ext` (String; optional)
  - `selectedValue` (String; required)
  - `chain` (String; required)
  - `aaRange` (String; required)
  - `color` (String; required)
  - `chosen` (optional): . chosen has the following type: lists containing elements 'residues', 'atoms'.
Those elements have the following types:
  - `residues` (String; required)
  - `atoms` (String; required)
  - `config` (optional): . config has the following type: lists containing elements 'input', 'type'.
Those elements have the following types:
  - `input` (String; required)
  - `type` (String; required)
  - `uploaded` (Bool; required)
  - `resetView` (Bool; required)s
- `downloadImage` (Bool; optional): flag if download image was selected
- `height` (String | Real; optional): The height (in px or as a number) of the container
in which the molecules will be displayed.
- `imageParameters` (optional): Parameters (in JSON format) for exporting the image. imageParameters has the following type: lists containing elements 'antialias', 'transparent', 'trim', 'defaultFilename'.
Those elements have the following types:
  - `antialias` (Bool; optional)
  - `transparent` (Bool; optional)
  - `trim` (Bool; optional)
  - `defaultFilename` (String; optional)
- `molStyles` (optional): The data (in JSON format) that will be used to style the displayed molecule
representations: one or multiple selected molecule representation
 - Possible molecule styles:
   'backbone,'ball+stick','cartoon', 'hyperball','licorice','line',
   'ribbon',''rope','spacefill','surface','trace','tube'
 - Possible additional representations:
   'axes','axes+box','helixorient','unitcell'
chosenAtomsColor: color of the 'ball+stick' representation of the chosen atoms
chosenAtomsRadius: radius of the 'ball+stick' representation of the chosen atoms
molSpacingXaxis: distance on the xAxis between each molecule. molStyles has the following type: lists containing elements 'representations', 'chosenAtomsColor', 'chosenAtomsRadius', 'molSpacingXaxis', 'sideByside'.
Those elements have the following types:
  - `representations` (Array of Strings; optional)
  - `chosenAtomsColor` (String; required)
  - `chosenAtomsRadius` (Real; required)
  - `molSpacingXaxis` (Real; required)
  - `sideByside` (Bool; required)
- `pdbString` (String; optional): Variable which defines how many molecules should be shown and/or which chain
The following format needs to be used:
pdbID1.chain:start-end@atom1,atom2_pdbID2.chain:start-end
. indicates that only one chain should be shown
: indicates that a specific amino acids range should be shown (e.g. 1-50)
@ indicates that chosen atoms should be highlighted (e.g. @50,100,150)
 _ indicates that more than one protein should be shown
- `stageParameters` (optional): Parameters (in JSON format) for the stage object of ngl.
Currently implemented are render quality, background color and camera type
quality: auto, low, medium, high (default: auto)
backgroundColor: white / black (default: white)
cameraType: perspective / orthographic (default: perspective). stageParameters has the following type: lists containing elements 'quality', 'backgroundColor', 'cameraType'.
Those elements have the following types:
  - `quality` (String; optional)
  - `backgroundColor` (String; optional)
  - `cameraType` (String; optional)
- `width` (String | Real; optional): The width (in px or as a number) of the container
in which the molecules will be displayed.
"""
function dashbio_nglmoleculeviewer(; kwargs...)
        available_props = Symbol[:id, :data, :downloadImage, :height, :imageParameters, :molStyles, :pdbString, :stageParameters, :width]
        wild_props = Symbol[]
        return Component("dashbio_nglmoleculeviewer", "NglMoleculeViewer", "dash_bio", available_props, wild_props; kwargs...)
end

