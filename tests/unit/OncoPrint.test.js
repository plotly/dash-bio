import OncoPrint from '../../src/lib/fragments/OncoPrint.react.js';
import React from 'react';
import { mount, render } from 'enzyme';
import data from '../dashbio_demos/sample_data/oncoprint_dataset3.json';


test('OncoPrint renders', () => {
    const component = render(<OncoPrint data={data} />);
    expect(component.html()).toBeDefined();
});
