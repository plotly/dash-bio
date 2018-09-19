import React, { Component } from 'react';
import Ideogram from 'ideogram';

class ReactIdeogram extends Component {
    constructor(props){
        super(props)
        this.clearDiv = this.clearDiv.bind(this);
    }

    clearDiv(){

        let container = document.getElementById('ideogram-container');

        if (container) {
            while (container.hasChildNodes()) {
                container.removeChild(container.lastChild);
            }
        }
    }

    componentDidMount() {
        // Now that the container Div has drawn,                                                                          
        // draw the Ideogram SVG inside the container                                                                     

        console.warn('>>> ', this.props.config);

        new Ideogram(this.props.config);
    }

    componentDidUpdate () {

        console.warn('CDU ', this.props);
        this.clearDiv();
        let config = this.props.config;
        delete window.chrBands;
        setTimeout(function() {
            new Ideogram(config);
        }, 100);
    }

    componentWillReceiveProps() {
        // Empty the container before redraw                                                                              

        console.warn('CWRP ', this.props);
        this.clearDiv();
    }

    render() {
        return (
            <div id='ideogram-container'></div>
        );
    }
}

export default ReactIdeogram;