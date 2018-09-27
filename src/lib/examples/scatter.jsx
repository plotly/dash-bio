import React from 'react';
import Circos from '../lib/components/Circos';
import { SCATTER } from '../lib/tracks';
import GRCh37 from './fixtures/GRCh37.json';
import snp250 from './fixtures/snp250.json';

const size = 800;

const ScatterTest = () => (
  <Circos
    layout={GRCh37.filter(d => d.id === 'chr1' || d.id === 'chr2' || d.id === 'chr3')}
    config={{
      innerRadius: size / 2 - 150,
      outerRadius: size / 2 - 130,
      ticks: {
        display: false,
        spacing: 1000000,
        labelSuffix: '',
      },
      labels: {
        display: false,
      },
    }}
    tracks={[
      {
        type: SCATTER,
        data: snp250.filter(d => d.value > 0.007),
        config: {
          innerRadius: 0.65,
          outerRadius: 0.95,
          color: (d) => {
            if (d.value > 0.006) { return '#4caf50'; }
            if (d.value < 0.002) { return '#f44336'; }
            return '#d3d3d3';
          },
          strokeColor: 'grey',
          strokeWidth: 1,
          shape: 'circle',
          size: 14,
          min: 0,
          max: 0.013,
          axes: [
            {
              spacing: 0.001,
              start: 0.006,
              thickness: 1,
              color: '#4caf50',
              opacity: 0.3,
            },
            {
              spacing: 0.002,
              start: 0.006,
              thickness: 1,
              color: '#4caf50',
              opacity: 0.5,
            },
            {
              spacing: 0.002,
              start: 0.002,
              end: 0.006,
              thickness: 1,
              color: '#666',
              opacity: 0.5,
            },
            {
              spacing: 0.001,
              end: 0.002,
              thickness: 1,
              color: '#f44336',
              opacity: 0.5,
            },
          ],
          backgrounds: [
            {
              start: 0.006,
              color: '#4caf50',
              opacity: 0.1,
            },
            {
              start: 0.002,
              end: 0.006,
              color: '#d3d3d3',
              opacity: 0.1,
            },
            {
              end: 0.002,
              color: '#f44336',
              opacity: 0.1,
            },
          ],
          tooltipContent: null,
        },
      },
      {
        type: SCATTER,
        data: snp250,
        config: {
          color: '#4caf50',
          strokeColor: 'green',
          strokeWidth: 1,
          shape: 'rectangle',
          size: 10,
          min: 0.007,
          max: 0.013,
          innerRadius: 1.075,
          outerRadius: 1.175,
          axes: [
            {
              spacing: 0.001,
              thickness: 1,
              color: '#4caf50',
              opacity: 0.3,
            },
            {
              spacing: 0.002,
              thickness: 1,
              color: '#4caf50',
              opacity: 0.5,
            },
          ],
          backgrounds: [
            {
              start: 0.007,
              color: '#4caf50',
              opacity: 0.1,
            },
            {
              start: 0.009,
              color: '#4caf50',
              opacity: 0.1,
            },
            {
              start: 0.011,
              color: '#4caf50',
              opacity: 0.1,
            },
            {
              start: 0.013,
              color: '#4caf50',
              opacity: 0.1,
            },
          ],
          tooltipContent: null,
        },
      },
      {
        type: SCATTER,
        data: snp250.filter(d => d.value < 0.002),
        config: {
          color: '#f44336',
          strokeColor: 'red',
          strokeWidth: 1,
          shape: 'triangle',
          size: 10,
          min: 0,
          max: 0.002,
          innerRadius: 0.35,
          outerRadius: 0.60,
          axes: [
            {
              spacing: 0.0001,
              thickness: 1,
              color: '#f44336',
              opacity: 0.3,
            },
            {
              spacing: 0.0005,
              thickness: 1,
              color: '#f44336',
              opacity: 0.5,
            },
          ],
          backgrounds: [
            {
              end: 0.0004,
              color: '#f44336',
              opacity: 0.1,
            },
            {
              end: 0.0008,
              color: '#f44336',
              opacity: 0.1,
            },
            {
              end: 0.0012,
              color: '#f44336',
              opacity: 0.1,
            },
            {
              end: 0.0016,
              color: '#f44336',
              opacity: 0.1,
            },
            {
              end: 0.002,
              color: '#f44336',
              opacity: 0.1,
            },
          ],
          tooltipContent: null,
        },
      },
    ]}
    size={800}
  />
);

module.exports = ScatterTest;
