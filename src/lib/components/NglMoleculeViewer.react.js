import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';
import PropTypes from 'prop-types';

const RealNglMoleculeViewer = lazy(LazyLoader.nglmoleculeViewer);
/**
 * The NglMoleculeViewer is used to render schematic diagrams
 * of biomolecules in ribbon-structure representations.
 * Read more about the component here:
 * https://github.com/IvoLeist/dash_ngl
 * Read more about the used WebGL protein viewer here:
 * https://github.com/arose/ngl
 */
export default class NglMoleculeViewer extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealNglMoleculeViewer {...this.props} />
            </Suspense>
        );
    }
}

const defaultHeight = '600px';

const defaultWidth = '600px';

const defaultStageParameters = {
    quality: 'medium',
    backgroundColor: 'white',
    cameraType: 'perspective',
};

const defaultImageParameters = {
    antialias: true,
    transparent: true,
    trim: true,
    defaultFilename: 'dash-bio_ngl_output',
};

const defaultData = [
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
];

NglMoleculeViewer.defaultProps = {
    data: defaultData,
    width: defaultWidth,
    height: defaultHeight,
    stageParameters: defaultStageParameters,
    imageParameters: defaultImageParameters,
    downloadImage: false,
    molStyles: {
        representations: ['cartoon', 'axes+box'],
        chosenAtomsColor: '#ffffff',
        chosenAtomsRadius: 1,
        molSpacingXaxis: 100,
        sideByside: false,
    },
};

NglMoleculeViewer.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks.
     * The ID needs to be unique across all of the components in an app.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever properties change.
     */
    setProps: PropTypes.func,

    /**
     * The width (in px or as a number) of the container
     * in which the molecules will be displayed.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * The height (in px or as a number) of the container
     * in which the molecules will be displayed.
     */
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Parameters (in JSON format) for the stage object of ngl.
     * Currently implemented are render quality, background color and camera type
     * quality: auto, low, medium, high (default: auto)
     * backgroundColor: white / black (default: white)
     * cameraType: perspective / orthographic (default: perspective)
     */
    stageParameters: PropTypes.exact({
        quality: PropTypes.string,
        backgroundColor: PropTypes.string,
        cameraType: PropTypes.string,
    }),

    /**
     * Parameters (in JSON format) for exporting the image
     */
    imageParameters: PropTypes.exact({
        antialias: PropTypes.bool,
        transparent: PropTypes.bool,
        trim: PropTypes.bool,
        defaultFilename: PropTypes.string,
    }),

    /**
     * flag if download image was selected
     */
    downloadImage: PropTypes.bool,

    /**
     * Variable which defines how many molecules should be shown and/or which chain
     * The following format needs to be used:
     * pdbID1.chain:start-end@atom1,atom2_pdbID2.chain:start-end
     * . indicates that only one chain should be shown
     * : indicates that a specific amino acids range should be shown (e.g. 1-50)
     * @ indicates that chosen atoms should be highlighted (e.g. @50,100,150)
     *  _ indicates that more than one protein should be shown
     */
    pdbString: PropTypes.string,

    /**
     * The data (in JSON format) that will be used to display the molecule
     * filename: name of the used pdb/cif file
     * ext: file extensions (pdb or cif)
     * selectedValue: pdbString
     * chain: ALL if the whole molecule shoud be displayed, e.g. A for showing only chain A
     * aaRange: ALL if the whole molecule should be displayed, e.g. 1:50 for showing only 50 atoms
     * color: chain color
     * chosen.atoms: string of the chosen Atoms, e.g. 50,100,150
     *               --> chosen eatoms changed to colored 'ball'
     * chosen.residues: string of the chosen residues, e.g. 50,100,150
     *                  --> C alpha of chosen residue changed to colored 'ball'
     * config.input: content of the pdb file
     * config.type: format of config.input
     * uploaded: bool if file from local storage (false) or uploaded by user (true)
     * resetView: bool if the selection did not change but the view should be resettet (true)
     */
    data: PropTypes.arrayOf(
        PropTypes.exact({
            filename: PropTypes.string.isRequired,
            ext: PropTypes.string,
            selectedValue: PropTypes.string.isRequired,
            chain: PropTypes.string.isRequired,
            aaRange: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            chosen: PropTypes.exact({
                residues: PropTypes.string.isRequired,
                atoms: PropTypes.string.isRequired,
            }),
            config: PropTypes.exact({
                input: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            }),
            uploaded: PropTypes.bool.isRequired,
            resetView: PropTypes.bool.isRequired,
        })
    ),
    /**
     * The data (in JSON format) that will be used to style the displayed molecule
     * representations: one or multiple selected molecule representation
     *  - Possible molecule styles:
     *    'backbone,'ball+stick','cartoon', 'hyperball','licorice','line',
     *    'ribbon',''rope','spacefill','surface','trace','tube'
     *  - Possible additional representations:
     *    'axes','axes+box','helixorient','unitcell'
     * chosenAtomsColor: color of the 'ball+stick' representation of the chosen atoms
     * chosenAtomsRadius: radius of the 'ball+stick' representation of the chosen atoms
     * molSpacingXaxis: distance on the xAxis between each molecule
     */
    molStyles: PropTypes.exact({
        representations: PropTypes.arrayOf(PropTypes.string),
        chosenAtomsColor: PropTypes.string.isRequired,
        chosenAtomsRadius: PropTypes.number.isRequired,
        molSpacingXaxis: PropTypes.number.isRequired,
        sideByside: PropTypes.bool.isRequired,
    }),
};

export const defaultProps = NglMoleculeViewer.defaultProps;
export const propTypes = NglMoleculeViewer.propTypes;
