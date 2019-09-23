import Circos from '../../src/lib/components/Circos.react.js';
import React from 'react';
import {mount, render} from 'enzyme';
import data from '../dashbio_demos/sample_data/circos_graph_data.json';


test('Circos renders', () => {
    const component = render(<Circos data={data} layout={[]} />);
    expect(component.html()).toBeDefined();
});
