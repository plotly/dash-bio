/* eslint no-magic-numbers: 0 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as R from 'ramda';
import { CHORDS } from '../lib/tracks';

import layout from '../lib/examples/fixtures/GRCh37.json';
import chords from '../lib/examples/fixtures/chords.json';
import Circos from '../lib/components/Circos.js';

import { HEATMAP } from '../lib/tracks';
import layoutHeat from '../lib/examples/fixtures/months.json';
import heatmap from '../lib/examples/fixtures/heatmap.json';

import { HIGHLIGHT } from '../lib/tracks';
import cytobands from '../lib/examples/fixtures/cytobands.json';

class App extends Component {

  constructor() {
    super();

    this.state = {
      layout: layout,
      config: {
        innerRadius: 800 / 2 - 80,
        outerRadius: 800 / 2 - 30,
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
      },
      tracks: [{
        type: CHORDS,
        data: chords,
        config: {
          radius: (chords) => {
            if (chords.source.id === 'chr1') {
              return 0.5;
            }
            return null;
          },
          logScale: false,
          opacity: 0.7,
          color: '#ff5722',
        },
      }],
      size: 800
    }
  }

  componentDidUpdate(nextProps) {
    console.warn(">>>> CWRP Next", this.state)
  }

  render() {
    const gieStainColor = {
      gpos100: 'rgb(0,0,0)',
      gpos: 'rgb(0,0,0)',
      gpos75: 'rgb(130,130,130)',
      gpos66: 'rgb(160,160,160)',
      gpos50: 'rgb(200,200,200)',
      gpos33: 'rgb(210,210,210)',
      gpos25: 'rgb(200,200,200)',
      gvar: 'rgb(220,220,220)',
      gneg: 'rgb(255,255,255)',
      acen: 'rgb(217,47,39)',
      stalk: 'rgb(100,127,164)',
      select: 'rgb(135,177,255)'
    }
    return (
      <div>
        <h4>this.state.size: {JSON.stringify(this.state.size)}</h4>
        <h4>this.state.tracks: {JSON.stringify(this.state.tracks[0].type)}</h4>
        <h4>this.state.colors: {JSON.stringify(this.state.tracks[0].config.color)}</h4>
        <p>Change Component state</p>
        <button onClick={e => this.setState({ size: 1000 })}>Size 1000</button>
        <button onClick={e => this.setState({ size: 800 })}>Size 800</button>
        <button onClick={e => this.setState(
          {
            layout: layoutHeat,
            config: {
              innerRadius: 800 / 2 - 80,
              outerRadius: 800 / 2 - 30,
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
            },
            tracks: [{
              type: HEATMAP,
              data: heatmap,
              config: {
                innerRadius: 0.8,
                outerRadius: 0.98,
                logScale: false,
                color: 'YlOrRd',
                tooltipContent: d => d.value
              },
            }]
          }
        )
        }>Heatmap</button>
        <button onClick={e => this.setState({
          layout: layout,
          config: {
            innerRadius: 800 / 2 - 80,
            outerRadius: 800 / 2 - 40,
            ticks: {
              display: true,
              labelDenominator: 1000000
            },
            labels: {
              position: 'center',
              display: true,
              size: 14,
              color: '#000',
              radialOffset: 70,
            },
          },
          tracks: [
            {
              type: HIGHLIGHT,
              data: cytobands,
              config: {
                innerRadius: 800 / 2 - 80,
                outerRadius: 800 / 2 - 40,
                opacity: 0.3,
                color: d => d.color,
                tooltipContent: d => d.name
              },
            },
            {
              type: CHORDS,
              data: chords,
              config: {
                radius: (chords) => {
                  if (chords.source.id === 'chr1') {
                    return 0.5;
                  }
                  return null;
                },
                logScale: false,
                opacity: 0.7,
                color: '#ff5722',
                events: {
                  'mouseover.demo': function (d, i, nodes, event) {
                    console.log(d, i, nodes, event.pageX)
                  }
                },
                tooltipContent: function (d) {
                  return '<h3>' + d.source.id + ' ➤ ' + d.target.id + ': ' + d.target.end + '</h3><i>(CTRL+C to copy to clipboard)</i>'
                },
              },
            },
          ],
          size: 800
        })}>Chords</button>
        <button onClick={e => this.setState({
          layout: layout,
          config: {
            innerRadius: 800 / 2 - 100,
            outerRadius: 800 / 2 - 50,
            labels: {
              display: false,
            },
            ticks: {
              display: false,
            },
          },
          tracks: [{
            type: HIGHLIGHT,
            data: cytobands,
            config: {
              innerRadius: 800 / 2 - 100,
              outerRadius: 800 / 2 - 50,
              opacity: 0.5,
              color: d => d.color,
              tooltipContent: d => d.name
            },
          }],
          size: 800
        })}>High Light</button>

        <Circos
          layout={this.state.layout}
          config={this.state.config}
          tracks={this.state.tracks}
          size={this.state.size}
        />
      </div >
    )
  }
}


export default App;

