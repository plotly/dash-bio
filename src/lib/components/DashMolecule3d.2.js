import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Molecule3d from 'molecule-3d-for-react';

export default class DashMolecule3d extends Component {
    constructor(props) {
        super(props);
        this.onChangeSelection=this.onChangeSelection.bind(this);
    }

    onChangeSelection(e) {
        // this.props.setProps({selectedAtomIds:e.detail})
        console.log(e.detail)
    }

        // const onClickAtom = (e)=> {
        //     this.props.setProps({selectedAtomIds:e.target.value})
        //     console.log(e.target.value)
        // }
    // const onClickAtom = (e) => {
    //     const atoms = this.props.modelData.atoms;
    //     const atom = atoms[e.serial]
    //     const selectionType = this.props.selectionType;
    //     this.props.setProps({selectedAtomIds: e.target.value});
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     const {
    //         modelData,
    //         selectedAtomIds,
    //     }=this.props
    //     if(modelData !== nextProps.modelData ||
    //         selectedAtomIds !== nextProps.selectedAtomIds
    //         ) {
    //             return true;
    //         }
    // }

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

        console.warn(this.props)
        // const config = {...this.props}
        // config.onChangeSelection = this.onChangeSelection

        return (
            <div id={id}>
                <Molecule3d {...this.props}
                onChangeSelection={this.onChangeSelection}
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