import React from 'react';
import Circos from '../lib/components/Circos';
import { HISTOGRAM } from '../lib/tracks';
import layoutData from './fixtures/GRCh37.json';
import histogram from './fixtures/histogram.json';

const size = 800;

const HistogramTest = () => (
  <Circos
    layout={layoutData}
    config={{
      innerRadius: size / 2 - 150,
      outerRadius: size / 2 - 120,
      labels: {
        display: false,
      },
      ticks: {
        display: false,
        labelDenominator: 1000000,
      },
    }}
    tracks={[{
      type: HISTOGRAM,
      data: histogram,
      config: {
        innerRadius: 1.01,
        outerRadius: 1.4,
        color: 'OrRd',
      },
    }]}
    size={800}
  />
);

module.exports = HistogramTest;
