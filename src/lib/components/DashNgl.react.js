import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Stage, Selection} from 'ngl';

/**
 * Dash ngl component
 */
export default class DashNgl extends Component {
    // constructor might not be needed anylonger:
    // https://hackernoon.com/the-constructor-is-dead-long-live-the-constructor-c10871bea599
    constructor(props) {
        super(props);
        this.state = {stage: null, structuresList: []};
        console.log(this.props);
        console.log(this.state);
    }

    // called after the component is rendered
    componentDidMount() {
        const {id, stageParameters} = this.props;
        const params = {...stageParameters};
        console.log(params);

        const stage = new Stage(id, params);

        this.setState({stage});
        console.log('component did mount');
    }

    // triggered by any update of the DOM (e.g. new dropdown selection)
    shouldComponentUpdate(nextProps) {
        const {stageParameters} = this.props;

        // when the app is starting data is not correctly interpreted as an array
        // but after a few seconds it is therefore this if-else statement
        if (Array.isArray(this.props.data) === false) {
            return false;
        }
        const oldSelection = this.props.data[0].selectedValue;
        const newSelection = nextProps.data[0].selectedValue;

        // check for stage params changed
        if (stageParameters !== nextProps.stageParameters) {
            // console.log("stage params changed")
            // this.stage.setParameters(stageParameters)
            return true;
        }

        // check if pdb selection has changed
        if (oldSelection !== newSelection) {
            return true;
        }
        return false;
    }

    // called only if shouldComponentUpdate evaluates to true
    componentDidUpdate() {
        console.log('updated');
        const {data, stageParameters} = this.props;
        const {stage, structuresList} = this.state;

        stage.setParameters(stageParameters);

        const newSelection = data[0].selectedValue;

        console.log(structuresList);

        if (newSelection !== 'placeholder') {
            // console.log(newSelection)
            stage.eachComponent(function(comp) {
                comp.removeAllRepresentations();
            });

            this.processDataFromBackend(data, stage, structuresList);
        }
    }

    // helper functions which styles the output of loadStructure/loadData
    showStructure(stageObj, chain, color, xOffset, stage) {
        // console.log(chain)

        if (chain !== 'ALL') {
            const selection = new Selection(':' + chain);
            const pa = stageObj.structure.getPrincipalAxes(selection);

            console.log(stageObj.getBox());
            console.log(stageObj.getBox(':' + chain));
            // delete the invisble elements ?

            console.log(selection);
            console.log(pa);
            console.log(pa.getRotationQuaternion());

            // stageObj.addRepresentation("cartoon",{color:'grey'})
            console.log(color);
            stageObj.addRepresentation('cartoon', {
                sele: ':' + chain,
                color: color,
            });
            stageObj.setRotation(pa.getRotationQuaternion());

            // translate by x angstrom along chosen axis
            stageObj.setPosition([xOffset, 0, 0]);
            // stage.animationControls.rotate(pa.getRotationQuaternion(),1500)
        } else {
            stageObj.addRepresentation('cartoon');
        }
        stage.animationControls.moveComponent(stageObj, stageObj.getCenter());
        // stage.autoView()
    }

    // If user has selected structure already just add the new Representation
    loadStructure(stage, filename, chain, color, xOffset) {
        console.log('load from browser');
        // console.log(filename)
        const stageObj = stage.getComponentsByName(filename).list[0];
        this.showStructure(stageObj, chain, color, xOffset, stage);
    }

    // If not load the structure from the backend
    processDataFromBackend(data, stage, structuresList) {
        // console.log('processDataFromBackend')

        const xval1 = 0;
        const xval2 = 100;
        const xval3 = 200;
        const xval4 = 300;

        const xOffsetArr = [xval1, xval2, xval3, xval4];
        // loop over list of structures:
        for (var i = 0; i < data.length; i++) {
            const filename = data[i].filename;
            // check if already loaded
            if (structuresList.includes(filename)) {
                this.loadStructure(
                    stage,
                    filename,
                    data[i].chain,
                    data[i].color,
                    xOffsetArr[i]
                );
            } else {
                // load from backend
                this.loadData(data[i], stage, structuresList, xOffsetArr[i]);
            }
        }
        const center = stage.getCenter();
        const zoom = stage.getZoom();
        // https://www.youtube.com/watch?v=L8CDt1J3DAw beyond console.log in 100sec
        console.log({center}, {zoom});

        // stage.autoView()
        // change zoom depending on sub units
        const newZoom = -500;
        const duration = 1000;
        stage.animationControls.zoomMove(center, newZoom, duration);
    }

    loadData(data, stage, structuresList, xOffset) {
        console.log('load from backend');
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
                console.log(this.state);
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
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * CSS styling for viewport container
     */
    viewportStyle: PropTypes.object,

    /**
     * Parameters for the stage
     */
    stageParameters: PropTypes.object,

    /**
     * Custom property
     */
    data: PropTypes.oneOfType([
        // enumerating the types of values the component can accept
        PropTypes.arrayOf(PropTypes.shape(dataPropShape)),
        PropTypes.shape(dataPropShape),
    ]),
};

export const defaultProps = DashNgl.defaultProps;
export const propTypes = DashNgl.propTypes;
