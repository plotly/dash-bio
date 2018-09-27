import React from 'react';
import Circos from '../lib/components/Circos';
import { CHORDS } from '../lib/tracks';
import layout from './fixtures/GRCh37.json';
import chords from './fixtures/chords.json';

const size = 800;

const ChordsTest = () => (
  <Circos
    layout={layout}
    config={{
      innerRadius: size / 2 - 80,
      outerRadius: size / 2 - 30,
      ticks: {
        display: false,
      },
      labels: {
        position: 'center',
        display: true,
        size: 14,
        color: '#000',
        radialOffset: 15,
      },
    }}
    tracks={[{
      type: CHORDS,
      data: chords,
      config: {
        radius: (d) => {
          if (d.source.id === 'chr1') {
            return 0.5;
          }
          return null;
        },
        logScale: false,
        opacity: 0.7,
        color: '#ff5722',
      },
    }]}
    size={800}
  />
);

module.exports = ChordsTest;
