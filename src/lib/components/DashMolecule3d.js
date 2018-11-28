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
        this.props.setProps({selectedAtomIds: selectedAtomIds})
    }

    onRenderNewData(glviewer) {
        glviewer.center();
        glviewer.zoom(0.8)
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
    
    /**
     * The ID used to identify this component in callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever properties change
     */
    setProps: PropTypes.func,

    /**
     * The selection type - may be atom, residue or chain
     */
    selectionType: PropTypes.string,

    /**
     * Property to change the background color of the molecule viewer
     */
    backgroundColor: PropTypes.string,

    /**
     * Property to change the backgroun opacity - ranges from 0 to 1
     */
    backgroundOpacity: PropTypes.number,

    /**
     * Property that can be used to change the representation of
     * the molecule. Options include sticks, cartoon and sphere
     */
    styles: PropTypes.objectOf(PropTypes.object),

    /**
     * The data that will be used to display the molecule in 3D
     * The data will be in JSON format 
     * and should have two main dictionaries - atoms, bonds
     */
    modelData: PropTypes.shape({
        atoms: PropTypes.array,
        bonds: PropTypes.array,
    }),

    /**
     * Property to either show or hide labels
     */
    atomLabelsShown: PropTypes.bool,

    /**
     * Property that stores a list of all selected atoms
     */
    selectedAtomIds: PropTypes.array,

    /**
     * labels corresponding to the atoms of the molecule
     */
    labels: PropTypes.array,

    /**
     * Callback to re-render molecule viewer
     * when modelData is changed
     */
    onRenderNewData: PropTypes.func,

    /**
     * Callback to change append selectedAtomIds 
     * when a selection is made
     */
    onChangeSelection: PropTypes.func,
    
};