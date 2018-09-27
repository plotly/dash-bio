import React from 'react';
import Circos from '../lib/components/Circos';
import layout from './fixtures/months.json';

const size = 800;

const LayoutTest = () => (
  <Circos layout={layout} size={size} />
);

module.exports = LayoutTest;
