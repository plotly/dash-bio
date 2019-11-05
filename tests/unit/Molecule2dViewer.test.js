import Molecule2dViewer from '../../src/lib/fragments/Molecule2dViewer.react.js';
import React from 'react';
import { mount, render } from 'enzyme';
import data from '../dashbio_demos/sample_data/molecule2d_acetylene.json';


test('Mol2D renders', () => {
    const component = render(<Molecule2dViewer modelData={data} />);
    expect(component.html()).toBeDefined();
});
