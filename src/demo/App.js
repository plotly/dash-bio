import React, { Component } from 'react';
import './App.css';
import DashIdeogram from '../lib/components/DashIdeogram.React'


class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        container: '#ideogram-container',
        organism: 'human',
        chromosome: ['1'],
        brush: 'chr1:104325484-119977655', // https://www.ncbi.nlm.nih.gov/dbvar/variants/nsv916356
        chrHeight: 900,
        resolution: 550,
        orientation: 'horizontal',
        onBrushMove: this.writeSelectedRange,
        onLoad: this.writeSelectedRange
      };

      this.clearDiv = this.clearDiv.bind(this)
      // this.drawIdeo = this.drawIdeo.bind(this)
      this.writeSelectedRange = this.writeSelectedRange.bind(this)
  }

  clearDiv () {
    const container = document.getElementById('ideogram-container');

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    console.log('cleared container', container, container.hasChildNodes());
  }

  writeSelectedRange() {
    var r = this.ideogram.selectedRegion,
        from = r.from.toLocaleString(), // Adds thousands-separator
        to = r.to.toLocaleString(),
        extent = r.extent.toLocaleString();

    document.getElementById('from').innerHTML = from;
    document.getElementById('to').innerHTML = to;
    document.getElementById('extent').innerHTML = extent;
  }


  // drawIdeo (organismType) {
  //   // this.clearDiv();

  //   var config = {
  //     organism: 'human',
  //     chromosomes:['1'],
  //     showBandLabels: false,
  //     brush:'chr1:104325484-119977655',
  //     chrHeight:900,
  //     resolution:550,
  //     rotatable:false,
  //     orientation: 'horizontal',
  //     container: '#ideogram-container',                                                               
  //     dataDir: 'https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/'
  //   };


  //   setTimeout(function() {
  //       new Ideogram(config);
  //   }, 100);
  // }

  render() {
    return (
      <div className="App">
            <h4>state: {JSON.stringify(this.state)}</h4>

            <p>Change component state (React way)</p>
            <button onClick={e => this.setState({organism: 'mouse'})}>Mouse</button>
            <button onClick={e => this.setState({organism: 'human'})}>Human</button>
            <button onClick={e => this.setState({orientation: 'vertical'})}>Vert</button>
            <button onClick={e => this.setState({orientation: 'horizontal'})}>Horiz</button>
            <button onClick={e => this.setState({showBandLabels: true})}>Bands</button>
            <button onClick={e => this.setState({showBandLabels: false})}>No Bands</button>

            {/* <p>Redraw without state change (vanilla JS way)</p>
            <button onClick={e => this.clearDiv()}>Clear</button>
            <button onClick={e => this.drawIdeo('mouse')}>Draw Mouse</button>
            <button onClick={e => this.drawIdeo('human')}>Draw Human</button> */}
            <DashIdeogram config={this.state} />
      </div>
    );
  }
}

export default App;