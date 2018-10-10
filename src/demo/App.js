import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Molecule3d from 'molecule-3d-for-react';
import DashMolecule3d from '../lib/components/DashMolecule3d';

// Import data for demo
import dnaModelData from '../lib/example/js/dna_model_data';
import aidModelData from '../lib/example/js/3aid_model_data';
import aidStyles from '../lib/example/js/3aid_styles';
import bipyridineModelData from '../lib/example/js/bipyridine_model_data';
import bipyridineStyles from '../lib/example/js/bipyridine_styles';


class App extends Component {

    constructor() {
        super();
        this.state = {
            // value: '',
            color: '',
            modelData: dnaModelData,
            backgroundColor: '',
            selectionType:'Atom',
            labels:[],
            selectedAtomIds:[],
            // styles,
        };
        // this.setProps = this.setProps.bind(this);
        this.onChangeBackgroundColor=this.onChangeBackgroundColor.bind(this);
        this.onChangeVisualization=this.onChangeVisualization.bind(this);
        this.onChangeLabels=this.onChangeLabels.bind(this);
        this.onClickDnaModelData=this.onClickDnaModelData.bind(this);
        this.onClickProtModelData=this.onClickProtModelData.bind(this);
        this.onClickSmallMoleculeData=this.onClickSmallMoleculeData.bind(this);
        // this.onChangeSelection=this.onChangeSelection.bind(this);
        // this.onBlurSelection=this.onBlurSelection.bind(this);
    }

    // setProps(newProps) {
    //     this.setState(newProps);
    // }

    // onChangeBackgroundColor(event) {
    //     this.props.setProps({
    //         backgroundColor: event.target.value
    //     });
    // }

    onClickDnaModelData() {
        this.setState({modelData: dnaModelData});
    }

    onClickProtModelData() {
        this.setState({modelData: aidModelData, styles: aidStyles});
    }

    onClickSmallMoleculeData() {
        this.setState({modelData: bipyridineModelData, styles: bipyridineStyles});
    }

    onChangeBackgroundColor(e) {
        this.setState({backgroundColor: e.target.value});
        console.log(e.target.value);
    }

    onChangeVisualization(e) {
        this.setState({selectionType: e.target.value});
        console.log(e.target.value);
    }

    // onChangeSelection(e) {
    //     this.setState({selectedAtomIds: e.target.value})
    //     console.log(e.target.value)
    // }

    // onBlurSelection(e) {
    //     this.props.onChangeSelection(JSON.parse(e.target.value))
    // }

    onChangeLabels(e) {
        this.setState({labels: e.target.value});
        console.log(e.target.value);
    }

    render() {
        return (
            <div>
                <h1>Biomolecule visualization</h1>
                <DashMolecule3d {...this.state}
                />

                <h3>Background color</h3>
                <input type='color' onChange={this.onChangeBackgroundColor} />

                <h3>Selection type</h3>
                <select onChange={this.onChangeVisualization}>
                    <option value="Atom">Atom</option>
                    <option value="Residue">Residue</option>
                    <option value="Chain">Chain</option>
                </select>
                <button onClick={this.onClickDnaModelData}>DNA molecule</button>
                <button onClick={this.onClickProtModelData}>Protein molecule</button>

                <h3>Selection</h3>
                {/* <input 
                    value={this.state.selectedAtomIds}
                    onChange={this.onChangeSelection}
                /> */}
                {/* <button onClick={this.onClickSmallMoleculeData}>Small molecule</button> */}


                {/* <Molecule3d {...this.state} /> */}

            </div>
        )
    }
}

export default App;
