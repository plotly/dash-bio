import React from 'react';
import Circos from '../lib/components/Circos';
import { TEXT, HIGHLIGHT } from '../lib/tracks';
import GRCh37 from './fixtures/GRCh37.json';
import cytobands from './fixtures/cytobands.json';

const size = 800;

const TextTest = () => (
  <Circos
    layout={[GRCh37[0]]}
    config={{
      innerRadius: size / 2 - 100,
      outerRadius: size / 2 - 80,
      labels: {
        display: false,
      },
      ticks: {
        display: false,
      },
    }}
    tracks={[
      {
        type: HIGHLIGHT,
        data: cytobands.filter(c => c.block_id === GRCh37[0].id),
        config: {
          innerRadius: size / 2 - 100,
          outerRadius: size / 2 - 80,
          opacity: 0.7,
          color: d => d.color,
        },
      },
      {
        type: TEXT,
        data: cytobands
          .filter(c => c.block_id === GRCh37[0].id)
          .map(c => ({
            position: (c.start + c.end) / 2,
            value: c.name,
            block_id: c.block_id,
          })),
        config: {
          innerRadius: 1.02,
          outerRadius: 1.3,
          style: {
            'font-size': 12,
          },
        },
      },
    ]}
    size={800}
  />
);

module.exports = TextTest;
