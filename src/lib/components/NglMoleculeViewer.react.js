import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Stage, Selection} from 'ngl';

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
        this.state = {stage: null, structuresList: []};
    }

    componentDidMount() {
        const {id, stageParameters, viewportStyle} = this.props;
        const params = {...stageParameters};
        const stage = new Stage(id, params);
        stage.setSize(viewportStyle.width, viewportStyle.height);
        this.setState({stage});
    }

    shouldComponentUpdate(prevProps, nextProps) {
        const {stageParameters, data} = this.props;

        // check if data has changed
        if ((data !== null) & (prevProps.data !== null)) {
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
            // check if structure has been uploaded
            if (data[0].uploaded === true) {
                return true;
            }
        }

        // check for stage params changed
        const oldStage = prevProps.stageParameters;
        const newStage = stageParameters;

        // save it as a helper function in an extra script?
        const isEqual = (obj1, obj2) => {
            const obj1Keys = Object.keys(obj1);
            const obj2Keys = Object.keys(obj2);

            if (obj1Keys.length !== obj2Keys.length) {
                return false;
            }

            for (const objKey of obj1Keys) {
                if (obj1[objKey] !== obj2[objKey]) {
                    return false;
                }
            }
            return true;
        };

        if (isEqual(oldStage, newStage) === false) {
            return true;
        }

        // no update since neither the data nor the stage paramas have changed
        return false;
    }

    componentDidUpdate() {
        const {data, stageParameters} = this.props;
        const {stage, structuresList} = this.state;

        stage.setParameters(stageParameters);

        const newSelection = data[0].selectedValue;

        if (newSelection !== 'placeholder') {
            stage.eachComponent(function(comp) {
                comp.removeAllRepresentations();
            });

            this.processDataFromBackend(data, stage, structuresList);
        }
    }

    // styles the output of loadStructure/loadData
    showStructure(stageObj, chain, color, xOffset, stage) {
        if (chain !== 'ALL') {
            const selection = new Selection(':' + chain);
            const pa = stageObj.structure.getPrincipalAxes(selection);

            stageObj.addRepresentation('cartoon', {
                sele: ':' + chain,
                color: color,
            });
            stageObj.setRotation(pa.getRotationQuaternion());

            // translate by x angstrom along chosen axis
            stageObj.setPosition([xOffset, 0, 0]);
        } else {
            stageObj.addRepresentation('cartoon');
        }
        stage.animationControls.moveComponent(stageObj, stageObj.getCenter());
    }

    // If user has selected structure already used before load it from the browser
    loadStructure(stage, filename, chain, color, xOffset) {
        const stageObj = stage.getComponentsByName(filename).list[0];
        this.showStructure(stageObj, chain, color, xOffset, stage);
    }

    // If not load the structure from the backend
    processDataFromBackend(data, stage, structuresList) {
        const xval1 = 0;
        const xval2 = 100;
        const xval3 = 200;
        const xval4 = 300;

        const xOffsetArr = [xval1, xval2, xval3, xval4];
        for (var i = 0; i < data.length; i++) {
            const filename = data[i].filename;
            if (structuresList.includes(filename)) {
                this.loadStructure(
                    stage,
                    filename,
                    data[i].chain,
                    data[i].color,
                    xOffsetArr[i]
                );
            } else {
                this.loadData(data[i], stage, xOffsetArr[i]);
            }
        }
        const center = stage.getCenter();
        const newZoom = -500;
        const duration = 1000;
        stage.animationControls.zoomMove(center, newZoom, duration);
    }

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

    render() {
        const {id} = this.props;
        return (
            <div>
                <div id={id} />
            </div>
        );
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

const defaultData = [
    {
        uploaded: false,
        selectedValue: 'placeholder',
        chain: 'ALL',
        color: 'red',
        filename: 'placeholder',
        ext: '',
        config: {
            input: '',
            type: 'text/plain',
        },
    },
];

NglMoleculeViewer.defaultProps = {
    data: defaultData,
    viewportStyle: defaultViewportStyle,
    stageParameters: defaultStageParameters,
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
     * Variable which defines how many molecules should be shown and/or which chain
     * The following format needs to be used:
     * pdbID1.chain_pdbID2.chain
     * . indicates that only one chain should be shown
     *  _ indicates that more than one protein should be shown
     */
    pdbString: PropTypes.string,

    /**
     * The data (in JSON format) that will be used to display the molecule
     * uploaded: indicator if file from local storage (false) or uploaded by user (true)
     * selectedValue: pdbString
     * color: color in hex format
     * filename: name of the used pdb/cif file
     * ext: file extensions (pdb or cif)
     * config.input: content of the pdb file
     * config.type: format of config.input
     */
    data: PropTypes.arrayOf(
        PropTypes.exact({
            uploaded: PropTypes.bool.isRequired,
            selectedValue: PropTypes.string.isRequired,
            chain: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
            filename: PropTypes.string.isRequired,
            ext: PropTypes.string,
            config: PropTypes.exact({
                input: PropTypes.string.isRequired,
                type: PropTypes.string.isRequired,
            }),
        })
    ),
};

export const defaultProps = NglMoleculeViewer.defaultProps;
export const propTypes = NglMoleculeViewer.propTypes;
