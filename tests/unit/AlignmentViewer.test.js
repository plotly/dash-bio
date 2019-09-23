import AlignmentViewer from '../../src/lib/components/AlignmentViewer.react.js';
import React from 'react';
import {mount, render} from 'enzyme';
import dataset from '../dashbio_demos/sample_data/alignment_viewer_sample.fasta';


test('AlignmentViewer renders', () => {
    const component = render(<AlignmentViewer data={dataset} />);
    expect(component.html()).toBeDefined();
});
