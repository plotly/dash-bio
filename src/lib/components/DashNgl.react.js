import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Stage, Selection} from 'ngl';

/**
 * The Molecule3dViewer component is used to render schematic diagrams
 * of biomolecules. It displays them in ribbon-structure diagrams
 * Read more about the component here:
 * https://github.com/IvoLeist/dash_ngl
 * Read more about the used WebGL protein viewer here:
 * https://github.com/arose/ngl
 */
export default class DashNgl extends Component {
    constructor(props) {
        super(props);
        this.state = {stage: null, structuresList: []};
    }

    componentDidMount() {
        const {id, stageParameters} = this.props;
        const params = {...stageParameters};

        const stage = new Stage(id, params);

        this.setState({stage});
    }

    shouldComponentUpdate(nextProps) {
        const {stageParameters} = this.props;

        // when the app is starting data is not correctly interpreted as an array
        // but after a few seconds it is therefore this if-else statement
        if (Array.isArray(this.props.data) === false) {
            return false;
        }
        const oldSelection = this.props.data[0].selectedValue;
        const newSelection = nextProps.data[0].selectedValue;

        if (stageParameters !== nextProps.stageParameters) {
            return true;
        }

        if (oldSelection !== newSelection) {
            return true;
        }
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

    // If user has selected structure load it from the browser
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
        return (
            <div>
                <div id="viewport" style={{width: '100%', height: '500px'}} />
            </div>
        );
    }
}

const defaultViewportStyle = {
    width: '100%',
    height: '500px',
};

const defaultStageParameters = {
    quality: 'medium',
    backgroundColor: 'white',
};

const dataPropShape = {
    selectedValue: PropTypes.string.isRequired,
    chain: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    ext: PropTypes.string,
    config: PropTypes.shape({
        type: PropTypes.string.isRequired,
        input: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.object,
            PropTypes.string,
        ]),
    }),
};

DashNgl.defaultProps = {
    id: 'viewport',
    viewportStyle: defaultViewportStyle,
    stageParameters: defaultStageParameters,
};

DashNgl.propTypes = {
    /**
     * The ID of this component, used to identify dash components in
     * callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The height (in px) and the width (in %) of the container
     * in which the molecules will be displayed.
     * It should be in JSON format
     */
    viewportStyle: PropTypes.object,

    /**
     * Parameters for the stage object of ngl.
     * Currently implemented are the quality of the visualisation
     * and the background color.For a full list see:
     * http://nglviewer.org/ngl/api/file/src/stage/stage.js.html
     */
    stageParameters: PropTypes.object,

    /**
     * The data that will be used to display the molecule in 3D
     * The data will be in JSON format
     */
    data: PropTypes.exact([
        PropTypes.arrayOf(PropTypes.shape(dataPropShape)),
        PropTypes.shape(dataPropShape),
    ]),
};

export const defaultProps = DashNgl.defaultProps;
export const propTypes = DashNgl.propTypes;
