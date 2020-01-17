import AlignmentChart from '../../src/lib/fragments/AlignmentChart.react.js';
import React from 'react';
import { mount, render } from 'enzyme';
import dataset from '../dashbio_demos/dash-alignment-chart/data/sample.fasta';


test('AlignmentChart renders', () => {
    const component = render(<AlignmentChart data={dataset} />);
    expect(component.html()).toBeDefined();
});
