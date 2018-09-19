import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactIdeogram from './ReactIdeogram.js';
import './App.css'
/**
 * DashIdeogram displays the genome of organisms,
 * and allows the user to manipulate and view it easily.
 */
export default class DashIdeogram extends Component {
    constructor(props) {
        super(props)
        this.clearDiv = this.clearDiv.bind(this);
    }
    
    clearDiv() {

        const container = document.getElementById('ideogram-container');
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild)  
        }
        console.warn('[clearDiv] After', container.hasChildNodes()) 
    }

    shouldComponentUpdate(nextProps) {
        const isOrganismSame = (this.props.organism !== nextProps.organism);
        const isBandLabelSame = (this.props.showBandLabels !== nextProps.showBandLabels);
        const isOrientationSame = (this.props.orientation !== nextProps.orientation);
        const isDataDirSame = (this.props.dataDir !== nextProps.dataDir);
        
        console.warn('SCU', (isOrganismSame || isBandLabelSame || isOrientationSame))
        return (isOrganismSame || isBandLabelSame || isOrientationSame || isDataDirSame)
    }
    

    render() {

        const {
            id,
            organism,
            showBandLabels,
            orientation,
            dataDir,
            container,
            setProps,
            style,
            className,
            label
        } = this.props;

        console.warn("[DashIdeogram] render", this.props)
        return (
            <div className={className} id={id} style={style}>
                <ReactIdeogram
                    organism={organism}
                    dataDir={dataDir}
                    showBandLabels={showBandLabels}
                    orientation={orientation}
                />
            </div>
        );
    }
}

DashIdeogram.defaultProps = {
    organism: "human",
    className: "App",
    dataDir: 'https://unpkg.com/ideogram@0.13.0/dist/data/bands/native/'
}

DashIdeogram.propTypes = {
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
     * The orientation of the chromesomes either being vertical or horizontal
     */
    orientation: PropTypes.string,

    /**
     * The directory where data is taken from to create the genome graphs.
     */
    dataDir: PropTypes.string,

    /**
     * CSS styling and the id of the container holding the Ideogram in react-ideogram.js
     */
    container: PropTypes.string,

    /**
     * The input's inline styles
     */
    style: PropTypes.object,

    /**
     * The class of the input element
     */
    className: PropTypes.string,

    /**
     * The label
     */
    label: PropTypes.string
};