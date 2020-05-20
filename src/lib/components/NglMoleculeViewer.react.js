import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Stage, Selection, download} from 'ngl';
import {equals} from 'ramda';

/**
 * The NglMoleculeViewer is used to render schematic diagrams
 * of biomolecules in ribbon-structure representations.
 * Read more about the component here:
 * https://github.com/IvoLeist/dash_ngl
 * Read more about the used WebGL protein viewer here:
 * https://github.com/arose/ngl
 */
export default class NglMoleculeViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: null,
            orientationMatrix: null,
            structuresList: [],
        };
    }

    componentDidMount() {
        const {id, stageParameters, viewportStyle} = this.props;
        const params = {...stageParameters};
        const stage = new Stage(id, params);
        const orientationMatrix = stage.viewerControls.getOrientation();

        stage.setSize(viewportStyle.width, viewportStyle.height);
        this.setState({stage, orientationMatrix});
    }

    shouldComponentUpdate(prevProps, nextProps) {
        const {stageParameters, data, downloadImage, molStyles} = this.props;

        // check if data has changed
        if (data !== null && prevProps.data !== null) {
            // wait for the first pdb selection after startup
            if (nextProps.data !== undefined) {
                return true;
            }

            // check if pdb selection has changed
            const oldSelection = prevProps.data[0].selectedValue;
            const newSelection = data[0].selectedValue;
            if (oldSelection !== newSelection) {
                return true;
            }

            // check if view should be resettet
            const resetView = data[0].resetView;
            if (oldSelection === newSelection && resetView === true) {
                return true;
            }

            // check if structure has been uploaded
            if (data[0].uploaded === true) {
                return true;
            }
        }

        // check if molStyles has been changed
        if (!equals(prevProps.molStyles, molStyles)) {
            return true;
        }

        // check if stage params changed
        if (!equals(prevProps.stageParameters, stageParameters)) {
            return true;
        }

        // check if download image has been selected
        if (prevProps.downloadImage !== downloadImage) {
            return true;
        }

        // no update since neither the data nor the stage paramas have changed
        return false;
    }

    componentDidUpdate() {
        const {data, stageParameters, downloadImage} = this.props;
        const {stage, structuresList} = this.state;

        // update the stage with the new stage params
        stage.setParameters(stageParameters);

        if (
            downloadImage === undefined ||
            (downloadImage === false && data[0].selectedValue !== 'placeholder')
        ) {
            stage.eachComponent(function(e) {
                e.removeAllRepresentations();
            });
            this.processDataFromBackend(data, structuresList);
        }

        if (downloadImage === true) {
            this.generateImage();
        }
        // set downloadImage to false to prevent retriggering of the download handler
        this.props.setProps({downloadImage: false});
    }

    highlightAtoms(args, sele, struc, chosenAtoms, chosenResidues) {
        const repr = 'ball+stick';
        // adds a colored ball for the chosen atoms
        if (chosenAtoms !== '') {
            args.sele = sele + ' and @' + chosenAtoms;
            struc.addRepresentation(repr, args);
        }
        // adds a colored ball for the c alpha of the chosen residues
        if (chosenResidues !== '') {
            args.sele =
                sele + '.CA and (' + chosenResidues.replace(/,/g, ' or ') + ')';
            struc.addRepresentation(repr, args);
        }
    }

    // adds one or multiple molecular representaions
    addMolStyle(struc, sele, chosen, color) {
        const {molStyles} = this.props;
        const temp = molStyles.representations;
        const reprs = [...temp];
        const chosenAtoms = chosen.atoms;
        const chosenResidues = chosen.residues;

        const args = {
            sele: sele,
            showBox: reprs.includes('axes+box'),
        };

        if (sele !== ':') {
            args.color = color;
        }

        reprs.forEach(e => {
            let repr = e;
            if (repr === 'axes+box') {
                // This is not a ngl provided moleculuar representation
                // but a combination of repr: 'axes' and showBox = true
                repr = 'axes';
            }
            struc.addRepresentation(repr, args);
        });

        // check if atoms should be selected
        if (chosenAtoms !== '' || chosenResidues !== '') {
            args.radius = molStyles.chosenAtomsRadius;
            args.color = molStyles.chosenAtomsColor;
            this.highlightAtoms(args, sele, struc, chosenAtoms, chosenResidues);
        }
    }

    // helper functions which styles the output of loadStructure/loadData
    showStructure(stageObj, chain, aaRange, chosen, color, xOffset) {
        const {stage, orientationMatrix} = this.state;
        let sele = ':';

        // reset the stage to the default orientationMatrix
        stage.viewerControls.orient(orientationMatrix);

        if (chain === 'ALL') {
            this.addMolStyle(stageObj, sele, chosen, color);
        } else {
            sele += chain;
            if (aaRange !== 'ALL') {
                sele += '/0 and ' + aaRange;
            }

            const selection = new Selection(sele);
            const structure = stageObj.structure.getView(selection);
            const pa = structure.getPrincipalAxes();
            const struc = stage.addComponentFromObject(structure);
            const strucCenter = struc.getCenter();

            struc.setRotation(pa.getRotationQuaternion());
            struc.setPosition([
                0 - strucCenter.x - xOffset,
                0 - strucCenter.y,
                0 - strucCenter.z,
            ]);
            this.addMolStyle(struc, sele, chosen, color);
        }
        stage.autoView();
    }

    // If not load the structure from the backend
    processDataFromBackend(data, structuresList) {
        const {molStyles} = this.props;
        const {stage} = this.state;

        for (var i = 0; i < data.length; i++) {
            const filename = data[i].filename;
            const xOffset = i * molStyles.molSpacingXaxis;
            if (structuresList.includes(filename)) {
                // If user has selected structure already just add the new representation
                this.showStructure(
                    stage.getComponentsByName(filename).list[0],
                    data[i].chain,
                    data[i].aaRange,
                    data[i].chosen,
                    data[i].color,
                    xOffset
                );
            } else {
                this.loadData(data[i], xOffset);
            }
        }
    }

    // load data from the backend into the browser
    loadData(data, xOffset) {
        const {stage} = this.state;
        const stringBlob = new Blob([data.config.input], {
            type: data.config.type,
        });

        stage
            .loadFile(stringBlob, {ext: data.ext, defaultRepresentation: false})
            .then(stageObj => {
                stageObj.name = data.filename;
                this.showStructure(
                    stageObj,
                    data.chain,
                    data.aaRange,
                    data.chosen,
                    data.color,
                    xOffset
                );

                this.setState(state => ({
                    structuresList: state.structuresList.concat([
                        data.filename,
                    ]),
                }));
            });
    }

    // generates a image and serves it to the client
    generateImage() {
        const {imageParameters} = this.props;
        const {stage} = this.state;

        stage
            .makeImage({
                factor: 1,
                antialias: imageParameters.antialias,
                trim: imageParameters.trim,
                transparent: imageParameters.transparent,
            })
            .then(function(blob) {
                download(blob, imageParameters.defaultFilename + '.png');
            });
    }

    render() {
        const {id} = this.props;
        return <div id={id} />;
    }
}

const defaultViewportStyle = {
    width: '500px',
    height: '500px',
};

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
    viewportStyle: defaultViewportStyle,
    stageParameters: defaultStageParameters,
    imageParameters: defaultImageParameters,
    downloadImage: false,
    molStyles: {
        representations: ['cartoon', 'axes+box'],
        chosenAtomsColor: '#ffffff',
        chosenAtomsRadius: 1,
        molSpacingXaxis: 100,
    },
};

NglMoleculeViewer.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks.
     * The ID needs to be unique across all of the components in an app.
     */
    id: PropTypes.string,

    /**
     * The height and the width (in px) of the container
     * in which the molecules will be displayed.
     * It should be in JSON format.
     */
    viewportStyle: PropTypes.exact({
        width: PropTypes.string,
        height: PropTypes.string,
    }),

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
     * aaRange: ALL if the whole molecule shoud be displayed, e.g. 1:50 for showing only 50 atoms
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
    }),
};

export const defaultProps = NglMoleculeViewer.defaultProps;
export const propTypes = NglMoleculeViewer.propTypes;
