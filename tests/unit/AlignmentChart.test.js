import AlignmentChart from '../../src/lib/components/AlignmentChart.react.js';
import React from 'react';
import {mount, render} from 'enzyme';
import dataset from '../dashbio_demos/sample_data/alignment_viewer_sample.fasta';


test('AlignmentChart renders', () => {
    const component = render(<AlignmentChart data={dataset} />);
    expect(component.html()).toBeDefined();
});
