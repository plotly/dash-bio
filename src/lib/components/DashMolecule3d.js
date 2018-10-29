import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Molecule3d from 'molecule-3d-for-react';

export default class DashMolecule3d extends Component {
    constructor(props) {
        super(props);
        this.onChangeSelection=this.onChangeSelection.bind(this);
        this.onRenderNewData=this.onRenderNewData.bind(this);
        }
    
    onChangeSelection(selectedAtomIds) {
        console.warn(selectedAtomIds)
        // if(this.props.modelData)
        this.props.setProps({selectedAtomIds: selectedAtomIds})
    }

    onRenderNewData(selectedAtomIds) {
    // onRenderNewData(glviewer) {
    //     glviewer.resize()
        this.props.setProps({selectedAtomIds:[]})
    }

    shouldComponentUpdate(nextProps) {
        if(this.props.modelData !== nextProps.modelData ||
            this.props.backgroundColor !== nextProps.backgroundColor ||
            this.props.backgroundOpacity !== nextProps.backgroundOpacity ||
            this.props.styles !== nextProps.styles) {
                return true;
            }
        return false
    }

    render() {
        const {
            id,
            color,
            modelData,
            atoms,
            bonds,
            backgroundColor,
            backgroundOpacity,
            atomLabelsShown,
            selectionType,
            selectedAtomIds,
            labels,
            setProps,
            styles,
            onRenderNewData,
            onChangeSelection,
            defaultSelection
        }=this.props;

        return (
            <div id={id}>
                <Molecule3d {...this.props}
                onChangeSelection={this.onChangeSelection}
                onRenderNewData={this.onRenderNewData}
                />

            </div>
        )
    }
}

DashMolecule3d.propTypes = {
    
    id: PropTypes.string,
    setProps: PropTypes.func,
    selectionType: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundOpacity: PropTypes.number,
    styles: PropTypes.objectOf(PropTypes.object),
    modelData: PropTypes.shape({
        atoms: PropTypes.array,
        bonds: PropTypes.array,
    }),
    atomLabelsShown: PropTypes.bool,
    selectedAtomIds: PropTypes.array,
    labels: PropTypes.array,
    onRenderNewData: PropTypes.func,
    onChangeSelection: PropTypes.func,
    onClickAtom: PropTypes.func,
    defaultSelection:PropTypes.array
};