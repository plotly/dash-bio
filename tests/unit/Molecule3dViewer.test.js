import Molecule3dViewer from '../../src/lib/fragments/Molecule3dViewer.js';
import React from 'react';
import { mount, render } from 'enzyme';
import modelData from './mol3d_model_data.json';
import stylesData from './mol3d_styles_data.json';


test('Mol3D renders', () => {
    const component = render(<Molecule3dViewer modelData={modelData} styles={stylesData} />);
    expect(component.html()).toBeDefined();
});
