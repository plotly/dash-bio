import Circos from '../../src/lib/fragments/Circos.react.js';
import React from 'react';
import { mount, render } from 'enzyme';
import data from '../dashbio_demos/dash-circos/data/graph_data.json';


test('Circos renders', () => {
    const component = render(<Circos data={data} layout={[]} />);
    expect(component.html()).toBeDefined();
});
