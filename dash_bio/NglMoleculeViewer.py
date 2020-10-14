# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class NglMoleculeViewer(Component):
    """A NglMoleculeViewer component.
The NglMoleculeViewer is used to render schematic diagrams
of biomolecules in ribbon-structure representations.
Read more about the component here:
https://github.com/IvoLeist/dash_ngl
Read more about the used WebGL protein viewer here:
https://github.com/arose/ngl

Keyword arguments:
- id (string; optional): The ID of this component, used to identify dash components in callbacks.
The ID needs to be unique across all of the components in an app.
- width (string | number; default '500px'): The width (in px or as a number) of the container
in which the molecules will be displayed.
- height (string | number; default '500px'): The height (in px or as a number) of the container
in which the molecules will be displayed.
- stageParameters (dict; default {
    quality: 'medium',
    backgroundColor: 'white',
    cameraType: 'perspective',
}): Parameters (in JSON format) for the stage object of ngl.
Currently implemented are render quality, background color and camera type
quality: auto, low, medium, high (default: auto)
backgroundColor: white / black (default: white)
cameraType: perspective / orthographic (default: perspective). stageParameters has the following type: dict containing keys 'quality', 'backgroundColor', 'cameraType'.
Those keys have the following types:
  - quality (string; optional)
  - backgroundColor (string; optional)
  - cameraType (string; optional)
- imageParameters (dict; default {
    antialias: true,
    transparent: true,
    trim: true,
    defaultFilename: 'dash-bio_ngl_output',
}): Parameters (in JSON format) for exporting the image. imageParameters has the following type: dict containing keys 'antialias', 'transparent', 'trim', 'defaultFilename'.
Those keys have the following types:
  - antialias (boolean; optional)
  - transparent (boolean; optional)
  - trim (boolean; optional)
  - defaultFilename (string; optional)
- downloadImage (boolean; default False): flag if download image was selected
- pdbString (string; optional): Variable which defines how many molecules should be shown and/or which chain
The following format needs to be used:
pdbID1.chain:start-end@atom1,atom2_pdbID2.chain:start-end
. indicates that only one chain should be shown
: indicates that a specific amino acids range should be shown (e.g. 1-50)
@ indicates that chosen atoms should be highlighted (e.g. @50,100,150)
 _ indicates that more than one protein should be shown
- data (dict; default [
    {
        filename: 'placeholder',
        ext: '',
        selectedValue: 'placeholder',
        chain: 'ALL',
        aaRange: 'ALL',
        chosen: {
            chosenAtoms: '',
            chosenResidues: '',
        },
        color: 'red',
        config: {
            input: '',
            type: 'text/plain',
        },
        uploaded: false,
        resetView: false,
    },
]): The data (in JSON format) that will be used to display the molecule
filename: name of the used pdb/cif file
ext: file extensions (pdb or cif)
selectedValue: pdbString
chain: ALL if the whole molecule shoud be displayed, e.g. A for showing only chain A
aaRange: ALL if the whole molecule shoud be displayed, e.g. 1:50 for showing only 50 atoms
color: chain color
chosen.atoms: string of the chosen Atoms, e.g. 50,100,150
              --> chosen eatoms changed to colored 'ball'
chosen.residues: string of the chosen residues, e.g. 50,100,150
                 --> C alpha of chosen residue changed to colored 'ball'
config.input: content of the pdb file
config.type: format of config.input
uploaded: bool if file from local storage (false) or uploaded by user (true)
resetView: bool if the selection did not change but the view should be resettet (true). data has the following type: list of dicts containing keys 'filename', 'ext', 'selectedValue', 'chain', 'aaRange', 'color', 'chosen', 'config', 'uploaded', 'resetView'.
Those keys have the following types:
  - filename (string; required)
  - ext (string; optional)
  - selectedValue (string; required)
  - chain (string; required)
  - aaRange (string; required)
  - color (string; required)
  - chosen (dict; optional): chosen has the following type: dict containing keys 'residues', 'atoms'.
Those keys have the following types:
  - residues (string; required)
  - atoms (string; required)
  - config (dict; optional): config has the following type: dict containing keys 'input', 'type'.
Those keys have the following types:
  - input (string; required)
  - type (string; required)
  - uploaded (boolean; required)
  - resetView (boolean; required)
- molStyles (dict; default {
    representations: ['cartoon', 'axes+box'],
    chosenAtomsColor: '#ffffff',
    chosenAtomsRadius: 1,
    molSpacingXaxis: 100,
    sideByside: false,
}): The data (in JSON format) that will be used to style the displayed molecule
representations: one or multiple selected molecule representation
 - Possible molecule styles:
   'backbone,'ball+stick','cartoon', 'hyperball','licorice','line',
   'ribbon',''rope','spacefill','surface','trace','tube'
 - Possible additional representations:
   'axes','axes+box','helixorient','unitcell'
chosenAtomsColor: color of the 'ball+stick' representation of the chosen atoms
chosenAtomsRadius: radius of the 'ball+stick' representation of the chosen atoms
molSpacingXaxis: distance on the xAxis between each molecule. molStyles has the following type: dict containing keys 'representations', 'chosenAtomsColor', 'chosenAtomsRadius', 'molSpacingXaxis', 'sideByside'.
Those keys have the following types:
  - representations (list of strings; optional)
  - chosenAtomsColor (string; required)
  - chosenAtomsRadius (number; required)
  - molSpacingXaxis (number; required)
  - sideByside (boolean; required)"""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, stageParameters=Component.UNDEFINED, imageParameters=Component.UNDEFINED, downloadImage=Component.UNDEFINED, pdbString=Component.UNDEFINED, data=Component.UNDEFINED, molStyles=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'width', 'height', 'stageParameters', 'imageParameters', 'downloadImage', 'pdbString', 'data', 'molStyles']
        self._type = 'NglMoleculeViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'width', 'height', 'stageParameters', 'imageParameters', 'downloadImage', 'pdbString', 'data', 'molStyles']
        self.available_wildcard_properties =            []

        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}

        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(NglMoleculeViewer, self).__init__(**args)
