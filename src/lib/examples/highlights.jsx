import React from 'react';
import Circos from '../lib/components/Circos';
import { HIGHLIGHT } from '../lib/tracks';
import GRCh37 from '../lib/examples/fixtures/GRCh37.json';
import cytobands from '../lib/examples/fixtures/cytobands.json';

const size = 800;

const HightLightTest = () => (
  <Circos
    layout={GRCh37}
    config={{
      innerRadius: size / 2 - 100,
      outerRadius: size / 2 - 50,
      labels: {
        display: false,
      },
      ticks: {
        display: false,
      },
    }}
    tracks={[{
      type: HIGHLIGHT,
      data: cytobands,
      config: {
        innerRadius: size / 2 - 100,
        outerRadius: size / 2 - 50,
        opacity: 0.5,
        color: d => d.color,
      },
    }]}
    size={800}
  />
);

module.exports = HightLightTest;
