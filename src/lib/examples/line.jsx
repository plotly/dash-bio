import React from 'react';
import Circos from '../lib/components/Circos';
import { LINE } from '../lib/tracks';
import GRCh37 from './fixtures/GRCh37.json';
import snp from './fixtures/snp.json';
import snp250 from './fixtures/snp250.json';
import snp1m from './fixtures/snp1m.json';

const size = 800;

const LineTest = () => (
  <Circos
    layout={GRCh37.filter(d => d.id === 'chr1' || d.id === 'chr2' || d.id === 'chr3')}
    config={{
      innerRadius: size / 2 - 150,
      outerRadius: size / 2 - 120,
      labels: {
        display: false,
      },
      ticks: {
        display: false,
      },
    }}
    tracks={[
      {
        type: LINE,
        data: snp250,
        config: {
          innerRadius: 0.5,
          outerRadius: 0.8,
          maxGap: 1000000,
          min: 0,
          max: 0.015,
          color: '#222222',
          axes: [
            {
              spacing: 0.001,
              thickness: 1,
              color: '#666666',
            },
          ],
          backgrounds: [
            {
              start: 0,
              end: 0.002,
              color: '#f44336',
              opacity: 0.5,
            },
            {
              start: 0.006,
              end: 0.015,
              color: '#4caf50',
              opacity: 0.5,
            },
          ],
          tooltipContent: null,
        },
      },
      {
        type: LINE,
        data: snp,
        config: {
          innerRadius: 1.01,
          outerRadius: 1.15,
          maxGap: 1000000,
          min: 0,
          max: 0.015,
          color: '#222222',
          axes: [
            { position: 0.002, color: '#f44336' },
            { position: 0.006, color: '#4caf50' },
          ],
          tooltipContent: null,
        },
      },
      {
        type: LINE,
        data: snp1m,
        config: {
          innerRadius: 1.01,
          outerRadius: 1.15,
          maxGap: 1000000,
          min: 0,
          max: 0.015,
          color: '#f44336',
          tooltipContent: null,
        },
      },
      {
        type: LINE,
        data: snp,
        config: {
          innerRadius: 0.85,
          outerRadius: 0.95,
          maxGap: 1000000,
          direction: 'in',
          min: 0,
          max: 0.015,
          color: '#222222',
          axes: [
            { position: 0.01, color: '#4caf50' },
            { position: 0.008, color: '#4caf50' },
            { position: 0.006, color: '#4caf50' },
            { position: 0.002, color: '#f44336' },
          ],
          tooltipContent: null,
        },
      },
      {
        type: LINE,
        data: snp1m,
        config: {
          innerRadius: 0.85,
          outerRadius: 0.95,
          maxGap: 1000000,
          direction: 'in',
          min: 0,
          max: 0.015,
          color: '#f44336',
          tooltipContent: null,
        },
      },
    ]}
    size={800}
  />
);

module.exports = LineTest;
