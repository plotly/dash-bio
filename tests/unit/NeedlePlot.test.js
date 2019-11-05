import NeedlePlot from '../../src/lib/fragments/NeedlePlot.react.js';
import React from 'react';
import { mount, render } from 'enzyme';
import data from '../dashbio_demos/sample_data/needle_PIK3CA.json';


test('NeedlePlot renders', () => {
    const component = render(<NeedlePlot data={data} />);
    expect(component.html()).toBeDefined();
});
