import Speck from '../../src/lib/components/Speck.react.js';
import React from 'react';
import {mount, render} from 'enzyme';
import data from './speck_data.json';


test('Speck renders', () => {
    const component = render(<Speck data={data} setProps={() => {}} />);
    expect(component.html()).toBeDefined();
});
