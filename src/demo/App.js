import React, { Component } from 'react';
import './App.css';
import DashIdeogram from '../lib/components/DashIdeogram.React'


class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
        container: '#ideogram-container',
        organism: 'human',
        // dataDir: "./data/bands/native/",
        chrHeight:400,
        chrMargin:200,
      };

      this.clearDiv = this.clearDiv.bind(this)

  }

  clearDiv () {
    const container = document.getElementById('ideogram-container');

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    console.log('cleared container', container, container.hasChildNodes());
  }




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

            <DashIdeogram config={this.state} />
      </div>
    );
  }
}

export default App;