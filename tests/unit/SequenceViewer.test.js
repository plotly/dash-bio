import SequenceViewer from '../../src/lib/fragments/SequenceViewer.react.js';
import React from 'react';
import { mount, render } from 'enzyme';
import seq from './sequence_viewer_data.json';


test('SequenceViewer renders', () => {
    const component = render(<SequenceViewer sequence={seq.sequence} />);
    expect(component.html()).toBeDefined();
});
