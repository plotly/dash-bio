import React, { Component } from 'react';
import Ideogram from 'ideogram';
import PropTypes from 'prop-types';

class ReactIdeogram extends Component {
    constructor(props) {

        super(props);
        this.clearDiv = this.clearDiv.bind(this);
        this.ideoObject = null;

    }
    
    clearDiv() {

        const container = document.getElementById('ideogram-container');
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild)  
        }
        console.warn('[clearDiv] After', container.hasChildNodes()) 
    }


    componentDidMount() {
        // Now that the container Div has drawn,                                                                          
        // draw the Ideogram SVG inside the container                                                                     
        
        console.warn('>>> CDMount', this.props);
        
        const config = {
            organism: this.props.organism,
            dataDir: this.props.dataDir,
            showBandLabels: this.props.showBandLabels,
            orientation: this.props.orientation,
            container: '#ideogram-container'
        }


      
        this.ideoObject = new Ideogram(config);
       
        
        this.firstRun = true;
        // this.ideoObject = new Ideogram(
        //     {
        //         organism: this.props.organism,
        //         dataDir: this.props.dataDir,
        //         showBandLabels: this.props.showBandLabels,
        //         orientation: this.props.orientation,
        //         container: '#ideogram-container'
        //     }
        // );


    }

    componentDidUpdate(prevProps) {
        console.warn('CDUpdate Current Props', this.props);
        console.warn('CDUpdate PreProps', prevProps);
        // let config = this.props.config;
        this.clearDiv();
        delete window.chrBands;
        
        const config = {
            organism: this.props.organism,
            dataDir: this.props.dataDir,
            showBandLabels: this.props.showBandLabels,
            orientation: this.props.orientation,
            container: '#ideogram-container'
        }



            new Ideogram(config);

    }


    componentWillReceiveProps(nextProps) {
        // Empty the container before redraw                                                                                
        console.warn('CWRProps Initial Props', this.props);
        console.warn('CWRProps Next Props', nextProps);
        // this.clearDiv()
        
    }


    render() {
        return (
            <div id='ideogram-container'></div>
        );
    }
}


ReactIdeogram.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Dash specific prop type
     */
    setProps: PropTypes.func,

    /**
     * The organism, whos genome is to be viewed and manipulated
     */
    organism: PropTypes.string,

    /**
     * Enable or disable the band labels
     */
    showBandLabels: PropTypes.bool,

    /**
     * The orientation of the bands which can be either 'vertical' or 'horizontal
     */
    orientation: PropTypes.string,

    /**
     * The directory where data is taken from to create the genome graphs.
     */
    dataDir: PropTypes.string.isRequired,
};

module.exports = ReactIdeogram;