import React, {Component} from 'react';
import {propTypes, defaultProps} from '../components/NglMoleculeViewer.react';
import {Stage, Selection, download} from 'ngl';
import {equals} from 'ramda';
import isNumeric from 'fast-isnumeric';

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
        this.ref = React.createRef();
    }

    componentDidMount() {
        const {stageParameters, width, height} = this.props;
        const params = {...stageParameters};
        const stage = new Stage(this.ref.current, params);
        const orientationMatrix = stage.viewerControls.getOrientation();

        const widthStr = isNumeric(width) ? width + 'px' : width;
        const heightStr = isNumeric(height) ? height + 'px' : height;

        stage.setSize(widthStr, heightStr);
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

            // check if view should be reset
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
        const {data, stageParameters, downloadImage, sideByside} = this.props;
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
            this.processDataFromBackend(data, structuresList, sideByside);
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
    showStructure(
        stageObj,
        chain,
        aaRange,
        chosen,
        color,
        xOffset,
        sideByside
    ) {
        const {stage, orientationMatrix} = this.state;
        let struc = stageObj;
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

            if (sideByside === true) {
                const selection = new Selection(sele);
                const structure = stageObj.structure.getView(selection);
                struc = stage.addComponentFromObject(structure);

                const strucCenter = struc.getCenter();
                const pa = structure.getPrincipalAxes();

                struc.setRotation(pa.getRotationQuaternion());
                struc.setPosition([
                    0 - strucCenter.x - xOffset,
                    0 - strucCenter.y,
                    0 - strucCenter.z,
                ]);
            }

            // const struc=stageObj
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
            const sideByside = molStyles.sideByside;

            // check if already loaded
            if (structuresList.includes(filename)) {
                // If user has selected structure already just add the new representation
                this.showStructure(
                    stage.getComponentsByName(filename).list[0],
                    data[i].chain,
                    data[i].aaRange,
                    data[i].chosen,
                    data[i].color,
                    xOffset,
                    sideByside
                );
            } else {
                this.loadData(data[i], xOffset, sideByside);
            }
        }
    }

    // load data from the backend into the browser
    loadData(data, xOffset, sideByside) {
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
                    xOffset,
                    sideByside
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
        return <div id={id} ref={this.ref} />;
    }
}

NglMoleculeViewer.defaultProps = defaultProps;
NglMoleculeViewer.propTypes = propTypes;
