import React from 'react';
import Circos from '../lib/components/Circos';
import { HEATMAP } from '../lib/tracks';
import layout from './fixtures/months.json';
import heatmap from './fixtures/heatmap.json';

const size = 800;

const HeatmapTest = () => (
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
      type: HEATMAP,
      data: heatmap,
      config: {
        innerRadius: 0.8,
        outerRadius: 0.98,
        logScale: false,
        color: 'YlOrRd',
      },
    }]}
    size={800}
  />
);

module.exports = HeatmapTest;
