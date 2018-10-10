import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Molecule3d from 'molecule-3d-for-react';

export default class DashMolecule3d extends Component {
    constructor(props) {
        super(props);
        this.onChangeSelection=this.onChangeSelection.bind(this);
        // this.onChangeLabels=this.onChangeLabels.bind(this);
        }

    // onChangeLabels(labels) {
    //     console.warn(labels);
    //     this.props.setProps({labels:labels})
    // }
    
    onChangeSelection(selectedAtomIds) {
        console.warn(selectedAtomIds)
        this.props.setProps({selectedAtomIds: selectedAtomIds})
    }

    // shouldComponentUpdate(nextProps) {
    //     const {
    //         modelData,
    //         selectedAtomIds,
    //     }=this.props
    //     if(modelData !== nextProps.modelData ||
    //         selectedAtomIds !== nextProps.selectedAtomIds
    //         ) {
    //             return true;
    //         }
    //     return false
    // }

    componentDidUpdate(prevProps, prevState) {
        const {modelData, selectedAtomIds}=this.props
            if(modelData !== prevProps.modelData) {
                selectedAtomIds:[]
            }
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
            onClickAtom,
        }=this.props;

        // console.log(setProps)

        // console.warn(this.props)
        // const config = {...this.props}
        // config.onChangeSelection = this.onChangeSelection

        return (
            <div id={id}>
                <Molecule3d {...this.props}
                onChangeSelection={this.onChangeSelection}
                // onChangeLabels={this.onChangeLabels}
                />

                {/* <Molecule3d {...config} /> */}

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
};