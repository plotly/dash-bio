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

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- data (list of dicts; default [    {        filename: 'placeholder',        ext: '',        selectedValue: 'placeholder',        chain: 'ALL',        aaRange: 'ALL',        chosen: {            chosenAtoms: '',            chosenResidues: '',        },        color: 'red',        config: {            input: '',            type: 'text/plain',        },        uploaded: False,        resetView: False,    },]):
    The data (in JSON format) that will be used to display the
    molecule filename: name of the used pdb/cif file ext: file
    extensions (pdb or cif) selectedValue: pdbString chain: ALL if the
    whole molecule shoud be displayed, e.g. A for showing only chain A
    aaRange: ALL if the whole molecule should be displayed, e.g. 1:50
    for showing only 50 atoms color: chain color chosen.atoms: string
    of the chosen Atoms, e.g. 50,100,150               --> chosen
    eatoms changed to colored 'ball' chosen.residues: string of the
    chosen residues, e.g. 50,100,150                  --> C alpha of
    chosen residue changed to colored 'ball' config.input: content of
    the pdb file config.type: format of config.input uploaded: bool if
    file from local storage (False) or uploaded by user (True)
    resetView: bool if the selection did not change but the view
    should be resettet (True).

    `data` is a list of dicts with keys:

    - aaRange (string; required)

    - chain (string; required)

    - chosen (dict; optional)

        `chosen` is a dict with keys:

        - atoms (string; required)

        - residues (string; required)

    - color (string; required)

    - config (dict; optional)

        `config` is a dict with keys:

        - input (string; required)

        - type (string; required)

    - ext (string; optional)

    - filename (string; required)

    - resetView (boolean; required)

    - selectedValue (string; required)

    - uploaded (boolean; required)

- downloadImage (boolean; default False):
    flag if download image was selected.

- height (string | number; default '600px'):
    The height (in px or as a number) of the container in which the
    molecules will be displayed.

- imageParameters (dict; default {    antialias: True,    transparent: True,    trim: True,    defaultFilename: 'dash-bio_ngl_output',}):
    Parameters (in JSON format) for exporting the image.

    `imageParameters` is a dict with keys:

    - antialias (boolean; optional)

    - defaultFilename (string; optional)

    - transparent (boolean; optional)

    - trim (boolean; optional)

- molStyles (dict; default {    representations: ['cartoon', 'axes+box'],    chosenAtomsColor: '#ffffff',    chosenAtomsRadius: 1,    molSpacingXaxis: 100,    sideByside: False,}):
    The data (in JSON format) that will be used to style the displayed
    molecule representations: one or multiple selected molecule
    representation  - Possible molecule styles:
    'backbone,'ball+stick','cartoon', 'hyperball','licorice','line',
    'ribbon',''rope','spacefill','surface','trace','tube'  - Possible
    additional representations:
    'axes','axes+box','helixorient','unitcell' chosenAtomsColor: color
    of the 'ball+stick' representation of the chosen atoms
    chosenAtomsRadius: radius of the 'ball+stick' representation of
    the chosen atoms molSpacingXaxis: distance on the xAxis between
    each molecule.

    `molStyles` is a dict with keys:

    - chosenAtomsColor (string; required)

    - chosenAtomsRadius (number; required)

    - molSpacingXaxis (number; required)

    - representations (list of strings; optional)

    - sideByside (boolean; required)

- pdbString (string; optional):
    Variable which defines how many molecules should be shown and/or
    which chain The following format needs to be used:
    pdbID1.chain:start-end@atom1,atom2_pdbID2.chain:start-end .
    indicates that only one chain should be shown : indicates that a
    specific amino acids range should be shown (e.g. 1-50) @ indicates
    that chosen atoms should be highlighted (e.g. @50,100,150)  _
    indicates that more than one protein should be shown.

- stageParameters (dict; default {    quality: 'medium',    backgroundColor: 'white',    cameraType: 'perspective',}):
    Parameters (in JSON format) for the stage object of ngl. Currently
    implemented are render quality, background color and camera type
    quality: auto, low, medium, high (default: auto) backgroundColor:
    white / black (default: white) cameraType: perspective /
    orthographic (default: perspective).

    `stageParameters` is a dict with keys:

    - backgroundColor (string; optional)

    - cameraType (string; optional)

    - quality (string; optional)

- width (string | number; default '600px'):
    The width (in px or as a number) of the container in which the
    molecules will be displayed."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, width=Component.UNDEFINED, height=Component.UNDEFINED, stageParameters=Component.UNDEFINED, imageParameters=Component.UNDEFINED, downloadImage=Component.UNDEFINED, pdbString=Component.UNDEFINED, data=Component.UNDEFINED, molStyles=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'data', 'downloadImage', 'height', 'imageParameters', 'molStyles', 'pdbString', 'stageParameters', 'width']
        self._type = 'NglMoleculeViewer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'data', 'downloadImage', 'height', 'imageParameters', 'molStyles', 'pdbString', 'stageParameters', 'width']
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
