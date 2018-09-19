import React, { Component } from 'react';
import './App.css';
import ReactIdeogram from '../lib/components/react-ideogram'

class App extends Component {

  constructor(props) {
      super(props);

      this.state = {
              organism: 'mouse',
              showBandLabels: false,
              orientation: 'vertical',
              container: '#ideogram-container',                                                               
              dataDir: 'https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/'
      };
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


            <ReactIdeogram config={this.state} />
      </div>
    );
  }
}

export default App;