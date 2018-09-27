import React from 'react';
import Circos from '../lib/components/Circos';
import { STACK } from '../lib/tracks';
import stack from './fixtures/stack.json';

const size = 800;

const StackTest = () => (
  <Circos
    layout={[
      {
        id: 'chr9',
        len: 8000000,
        label: 'chr9',
        color: '#FFCC00',
      },
    ]}
    config={{
      innerRadius: size / 2 - 50,
      outerRadius: size / 2 - 30,
      labels: {
        display: false,
      },
      ticks: {
        display: true,
        labels: false,
        spacing: 10000,
      },
    }}
    tracks={[{
      type: STACK,
      data: stack,
      config: {
        innerRadius: 0.7,
        outerRadius: 1,
        thickness: 4,
        margin: 0.01 * 8000000,
        direction: 'out',
        strokeWidth: 0,
        color: (d) => {
          if (d.end - d.start > 150000) {
            return 'red';
          }
          if (d.end - d.start > 120000) {
            return '#333';
          }
          if (d.end - d.start > 90000) {
            return '#666';
          }
          if (d.end - d.start > 60000) {
            return '#999';
          }
          if (d.end - d.start > 30000) {
            return '#BBB';
          }
          return null;
        },
        tooltipContent: null,
      },
    }]}
    size={800}
  />
);

module.exports = StackTest;
