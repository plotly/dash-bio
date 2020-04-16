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
        const {stageParameters, data, downloadImage} = this.props;
        const oldStage = prevProps.stageParameters;
        const newStage = stageParameters;

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

        // check if stage params changed
        if (!equals(oldStage, newStage)) {
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
        const newSelection = data[0].selectedValue;

        // update the stage with the new stage params
        stage.setParameters(stageParameters);

        if (
            downloadImage === undefined ||
            (downloadImage === false && newSelection !== 'placeholder')
        ) {
            stage.eachComponent(function(comp) {
                comp.removeAllRepresentations();
            });
            this.processDataFromBackend(data, stage, structuresList);
        }

        if (downloadImage === true) {
            this.generateImage(stage);
        }
    }

    // styles the output of loadStructure/loadData
    showStructure(stageObj, chain, range, color, xOffset, stage) {
        const {orientationMatrix} = this.state;

        // reset stage
        stage.viewerControls.orient(orientationMatrix);

        if (chain !== 'ALL') {
            let sele = ':' + chain;
            if (range !== 'ALL') {
                sele = sele + ' and ' + range;
            }

            const selection = new Selection(sele);
            const pa = stageObj.structure.getPrincipalAxes(selection);
            const struc = stage.addComponentFromObject(
                stageObj.structure.getView(selection)
            );
            const struc_centre = struc.getCenter();
            struc.setPosition([
                0 - struc_centre.x - xOffset,
                0 - struc_centre.y,
                0 - struc_centre.z,
            ]);

            struc.setRotation(pa.getRotationQuaternion());

            struc.addRepresentation('cartoon', {
                sele: sele,
                color: color,
            });
        } else {
            stageObj.addRepresentation('cartoon');
        }
        const newZoom = -500;
        const duration = 1000;
        stage.animationControls.zoom(newZoom, duration);
    }

    // If user has selected structure already used before load it from the browser
    loadStructure(stage, filename, chain, range, color, xOffset) {
        const stageObj = stage.getComponentsByName(filename).list[0];
        this.showStructure(stageObj, chain, range, color, xOffset, stage);
    }

    // If not load the structure from the backend
    processDataFromBackend(data, stage, structuresList) {
        for (var i = 0; i < data.length; i++) {
            const filename = data[i].filename;
            const xOffset = i * 100;
            if (structuresList.includes(filename)) {
                this.loadStructure(
                    stage,
                    filename,
                    data[i].chain,
                    data[i].range,
                    data[i].color,
                    xOffset
                );
            } else {
                this.loadData(data[i], stage, xOffset);
            }
        }
    }

    // load data from the backend into the browser
    loadData(data, stage, xOffset) {
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
                    data.range,
                    data.color,
                    xOffset,
                    stage
                );

                this.setState(state => ({
                    structuresList: state.structuresList.concat([
                        data.filename,
                    ]),
                }));
            });
    }

    // helper function
    generateImage(stage) {
        const {imageParameters} = this.props;

        stage
            .makeImage({
                factor: 1,
                antialias: imageParameters.antialias,
                trim: imageParameters.trim,
                transparent: imageParameters.transparent,
            })
            .then(function(blob) {
                download(blob, 'nglMoleculeViewer_output.png');
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
};

const defaultData = [
    {
        filename: 'placeholder',
        ext: '',
        selectedValue: 'placeholder',
        chain: 'ALL',
        range: 'ALL',
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
    }),

    /**
     * flag if download image was selected
     */
    downloadImage: PropTypes.bool,

    /**
     * Variable which defines how many molecules should be shown and/or which chain
     * The following format needs to be used:
     * pdbID1.chain:start-end_pdbID2.chain:start-end
     * . indicates that only one chain should be shown
     * : indicates that a specific range should be shown (e.g. 1-50)
     *  _ indicates that more than one protein should be shown
     */
    pdbString: PropTypes.string,

    /**
     * The data (in JSON format) that will be used to display the molecule
     * filename: name of the used pdb/cif file
     * ext: file extensions (pdb or cif)
     * selectedValue: pdbString
     * chain: ALL if the whole molecule shoud be displayed, e.g. A for showing only chain A
     * range: ALL if the whole molecule shoud be displayed, e.g. 1:50 for showing only a part
     * color: color in hex format
     * config.input: content of the pdb file
     * config.type: format of config.input
     * uploaded: flag if file from local storage (false) or uploaded by user (true)
     * resetView: flag if the selection did not change but the view should be resettet (true)
     */
    data: PropTypes.arrayOf(
        PropTypes.exact({
            filename: PropTypes.string.isRequired,
            ext: PropTypes.string,
            selectedValue: PropTypes.string.isRequired,
            chain: PropTypes.string.isRequired,
            range: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            config: PropTypes.exact({
                input: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            }),
            uploaded: PropTypes.bool.isRequired,
            resetView: PropTypes.bool.isRequired,
        })
    ),
};

export const defaultProps = NglMoleculeViewer.defaultProps;
export const propTypes = NglMoleculeViewer.propTypes;
