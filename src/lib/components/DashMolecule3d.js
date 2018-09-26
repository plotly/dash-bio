import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Molecule3d from 'molecule-3d-for-react';

export default class DashMolecule3d extends Component {

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
        }=this.props;

        return (
            <div id={id}>
                <Molecule3d {...this.props}/>
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
};