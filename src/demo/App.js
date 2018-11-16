import React, {Component} from 'react';
import {NeedlePlot} from '../lib';

import mutData1 from '../../tests/dash/sample_data/TP53_MUTATIONS.json';
import regions1 from '../../tests/dash/sample_data/TP53_REGIONS.json';
import mutData2 from '../../tests/dash/sample_data/ENST00000557334.json';
import regions2 from '../../tests/dash/sample_data/KRAS_protein.json';
import mutData3 from '../../tests/dash/sample_data/muts.json';
import regions3 from '../../tests/dash/sample_data/regions.json';

const DATA = [
    {mutData: mutData1, regions: regions1},
    {mutData: mutData2, regions: regions2},
    {mutData: mutData3, regions: regions3},
];

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: mutData1,
            regions: regions1,
            events: [],
        };
        this.setProps = this.setProps.bind(this);
        this.handleDataChange = this.handleDataChange.bind(this);
        this.handlePlotChange = this.handlePlotChange.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    handleDataChange(event) {
        const i = Number(event.target.value);
        this.setState({
            data: DATA[i].mutData,
            regions: DATA[i].regions,
        });
    }

    handlePlotChange(event) {
        const events = this.state.events;
        events.unshift(JSON.stringify(event));
        this.setState({events: events});
    }

    render() {
        const {data, regions, events} = this.state;

        return (
            <div
                style={{
                    fontFamily: ['helvetica', 'sans-serif'],
                    padding: 16,
                    background: '#F5F5F5',
                }}
            >
                <h1>dash-needle-plot Demo</h1>
                <div
                    style={{
                        padding: 16,
                        marginBottom: 32,
                        background: '#FFFFFF',
                    }}
                >
                    <p>Selected dataset:</p>
                    <select onChange={this.handleDataChange}>
                        <option value="0">TP53</option>
                        <option value="1">ENST00000557334</option>
                        <option value="2">Generic</option>
                    </select>
                </div>
                <div style={{height: 500}}>
                    <NeedlePlot
                        x={data.map(mut => mut.coord)}
                        y={data.map(mut => mut.value)}
                        mutationGroups={data.map(mut => mut.category)}
                        domains={regions}
                        onChange={this.handlePlotChange}
                        // xlabel = 'Position'
                        // ylabel = 'Number of mutations'
                        // stemColor = 'black'
                    />
                </div>
                <div
                    style={{
                        padding: 16,
                        marginTop: 32,
                        background: '#FFFFFF',
                    }}
                >
                    <p>Events:</p>
                    <textarea
                        style={{
                            width: '100%',
                            height: 200,
                            fontSize: '14px',
                        }}
                        value={events.join('\n')}
                    />
                </div>
            </div>
        );
    }
}
