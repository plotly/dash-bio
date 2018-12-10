import React, { Component } from 'react';
import { AlignmentChart, AlignmentViewer } from 'react-alignment-viewer';

import dataset1 from '../../data/sample.fasta';
import dataset2 from '../../data/p53.fasta';
import dataset3 from '../../data/p53_clustalo.fasta';
// import dataset4 from '../../data/p53_clustalo.clustal';
import dataset4 from '../../data/1534023160.fasta';


const DATA = {
    dataset1,
    dataset2,
    dataset3,
    dataset4
};


export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'dataset1',
            events: []
        };
        this.setProps = this.setProps.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handlePlotChange = this.handlePlotChange.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    handleDataChange(event) {
        this.setState({value: event.target.value});
    }

    handlePlotChange(event) {
        let events = this.state.events;
        events.unshift(JSON.stringify(event));
        this.setState({events: events});
    }

    render() {
        const { value, events } = this.state;

        return (
            <div
                style={{
                    fontFamily: ["helvetica", "sans-serif"],
                    padding: 16,
                    background: "#F5F5F5"
                }}
            >
                <h1>dash-alignment-viewer Demo</h1>
                <div
                    style={{
                        padding: 16,
                        marginBottom: 32,
                        background: "#FFFFFF"
                    }}
                >
                    <p>
                        Selected dataset:
                    </p>
                    <select value={value} onChange={this.handleDataChange}>
                        <option value="dataset1">Sample</option>
                        <option value="dataset2">p53</option>
                        <option value="dataset3">p53 ClustalW</option>
                        <option value="dataset4">1534023160</option>
                    </select>
                </div>
                <div>
                    <AlignmentViewer
                        data={DATA[value]}
                        extension='fasta'
                        // onChange={this.handlePlotChange}
                    />
                </div>
                <div
                    style={{
                        padding: 16,
                        marginTop: 32,
                        background: "#FFFFFF"
                    }}
                >
                    <p>
                        Events:
                    </p>
                    <textarea
                        style={{
                            width: '100%',
                            height: 200,
                            fontSize: '14px'
                        }}
                        value={events.join('\n')}
                    >
                    </textarea>
                </div>
            </div>
        );
    }
}
