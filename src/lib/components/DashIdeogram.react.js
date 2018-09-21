import React, { Component } from 'react';
import Ideogram from 'ideogram';
import PropTypes from 'prop-types';
import './App.css'

class DashIdeogram extends Component {
    constructor(props) {

        super(props);
        this.clearDiv = this.clearDiv.bind(this);
        this.ideogram = null;
        this.writeSelectedRange = this.writeSelectedRange.bind(this)
        // this.onIdeogramLoad = this.onIdeogramLoad.bind(this);
    }
    
    clearDiv() {
        const container = document.getElementById('ideogram-container');
        console.warn('[clearDiv] Before', container.hasChildNodes()) 
            while (container.hasChildNodes()) {
                container.removeChild(container.firstChild)  
        }
        
        console.warn('[clearDiv] After', container.hasChildNodes()) 
    }


    shouldComponentUpdate(nextProps) {
                    
        const container = document.getElementById('ideogram-container');
        console.warn(">>>>>> SCU Dash Ideogram", container.hasChildNodes())

        const isOrganismSame = (this.props.organism !== nextProps.organism);
        const isBandLabelSame = (this.props.showBandLabels !== nextProps.showBandLabels);
        const isOrientationSame = (this.props.orientation !== nextProps.orientation);
        const isDataDirSame = (this.props.dataDir !== nextProps.dataDir);
        const isChrWidthSame = (this.props.chrWidth !== nextProps.chrWidth);
        const isChrHeightSame = (this.props.chrHeight !== nextProps.chrHeight);
        const isChrMarginSame = (this.props.chrMargin !== nextProps.chrMargin);
        const isResolutionSame = (this.props.resolution !== nextProps.resolution);
        const isRowsSame = (this.props.rows !== nextProps.rows);
        const isPloidySame = (this.props.ploidy !== nextProps.ploidy);
        const isSexSame = (this.props.sex !== nextProps.sex);
        const isAnnotationLayoutSame = (this.props.annotationsLayout !== nextProps.annotationsLayout)
        const isAnnotationPathSame = (this.props.annotationsPath !== nextProps.annotationsPath)
        const isAnnotationColorSame = (this.props.annotationsColor !== nextProps.annotationsColor)
        const isAnnotationHeightSame = (this.props.annotationHeight !== nextProps.annotationHeight)
        // console.warn('SCU', (isOrganismSame || isBandLabelSame || isOrientationSame))
        return (
            isOrganismSame 
            || isBandLabelSame 
            || isOrientationSame
            || isDataDirSame
            || isChrHeightSame
            || isChrWidthSame
            || isChrMarginSame
            || isResolutionSame
            || isRowsSame
            || isPloidySame
            || isSexSame
            || isAnnotationColorSame
            || isAnnotationHeightSame
            || isAnnotationLayoutSame
            || isAnnotationPathSame
            ) && (container.hasChildNodes())
    }

    componentDidMount() {
        // Now that the container Div has drawn,                                                                          
        // draw the Ideogram SVG inside the container                                                                     
        
        console.warn('>>> CDMount');
        
        const config = {
            ancestors: this.props.ancestors,
            assembly:this.props.assembly,
            annotations:this.props.annotations,
            annotationsPath:this.props.annotationsPath,
            annotationsLayout:this.props.annotationsLayout,
            annotationHeight:this.props.annotationHeight,
            annotationsColor:this.props.annotationsColor,
            annotationTracks: this.props.annotationTracks,
            barWidth:this.props.barWidth,
            brush:this.props.brush,
            container: '#ideogram-container',
            chromosomes:this.props.chromosomes,
            chrHeight:this.props.chrHeight,
            chrMargin:this.props.chrMargin,
            chrWidth:this.props.chrWidth,
            organism:this.props.organism,
            dataDir:this.props.dataDir,
            heatmaps:this.props.heatmaps,
            histogramScaling:this.props.histogramScaling,
            ploidy:this.props.ploidy,
            ploidyDesc:this.props.ploidyDesc,
            showBandLabels:this.props.showBandLabels,
            perspective:this.props.perspective,
            orientation:this.props.orientation,
            onDidRotate:this.props.onDidRotate,
            // onBrushMove: this.writeSelectedRange,
            // onLoad:this.writeSelectedRange,
            onWillShowAnnotTooltip:this.props.onWillShowAnnotTooltip,
            onDrawAnnots:this.props.onDrawAnnots,
            rangeSet:this.props.rangeSet,
            rotatable:this.props.rotatable,
            rows:this.props.rows,
            resolution:this.props.resolution,
            sex:this.props.sex,
            showChromosomeLables:this.props.showChromosomeLabels,
            showFullyBanded:this.props.showFullyBanded,
            showNonNuclearChromosomes:this.props.showNonNuclearChromosomes
        }
        
        this.ideogram = new Ideogram(config);
        this.ideogram.ideoWidth = 1000
    }

    writeSelectedRange() {

        var r = this.ideogram.selectedRegion,
                from = r.from.toLocaleString(), // Adds thousands-separator
                to = r.to.toLocaleString(),
                extent = r.extent.toLocaleString();

                console.warn(from)
                console.warn(to)
                console.warn(extent)
        // document.getElementById('from').innerHTML = from;
        // document.getElementById('to').innerHTML = to;
        // document.getElementById('extent').innerHTML = extent;
        // return
        
    }

    componentWillUpdate() {
        this.clearDiv();
        delete window.chrBands;
    }
    componentDidUpdate(prevProps) {
        console.warn('CDUpdate Current Props', this.props);
        console.warn('CDUpdate PreProps', prevProps)

        const config = {
            ancestors: this.props.ancestors,
            assembly:this.props.assembly,
            annotations:this.props.annotations,
            annotationsPath:this.props.annotationsPath,
            annotationsLayout:this.props.annotationsLayout,
            annotationHeight:this.props.annotationHeight,
            annotationsColor:this.props.annotationsColor,
            annotationTracks: this.props.annotationTracks,
            barWidth:this.props.barWidth,
            brush:this.props.brush,
            container: '#ideogram-container',
            chromosomes:this.props.chromosomes,
            chrHeight:this.props.chrHeight,
            chrMargin:this.props.chrMargin,
            chrWidth:this.props.chrWidth,
            organism:this.props.organism,
            dataDir:this.props.dataDir,
            heatmaps:this.props.heatmaps,
            histogramScaling:this.props.histogramScaling,
            ploidy:this.props.ploidy,
            ploidyDesc:this.props.ploidyDesc,
            showBandLabels:this.props.showBandLabels,
            perspective:this.props.perspective,
            orientation:this.props.orientation,
            onDidRotate:this.props.onDidRotate,
            // onBrushMove: this.writeSelectedRange,
            // onLoad: this.writeSelectedRange,
            onWillShowAnnotTooltip:this.props.onWillShowAnnotTooltip,
            onDrawAnnots:this.props.onDrawAnnots,
            rangeSet:this.props.rangeSet,
            rotatable:this.props.rotatable,
            rows:this.props.rows,
            resolution:this.props.resolution,
            sex:this.props.sex,
            showChromosomeLables:this.props.showChromosomeLabels,
            showFullyBanded:this.props.showFullyBanded,
            showNonNuclearChromosomes:this.props.showNonNuclearChromosomes
        }


        
        this.ideogram = new Ideogram(config);
    }


    render() {
        const {
            id,
            style,
            ancestors,
            assembly,
            annotations,
            annotationTracks,
            annotationsPath,
            annotationHeight,
            annotationsColor,
            annotationsLayout,
            barWidth,
            brush,
            chromosomes,
            chrHeight,
            chrMargin,
            chrWidth,
            className,
            dataDir,
            heatmaps,
            histogramScaling,
            organism,
            showBandLabels,
            orientation,
            perspective,
            onLoad,
            onBrushMove,
            onDidRotate,
            onDrawAnnots,
            onWillShowAnnotTooltip,
            rangeSet,
            resolution,
            rotatable,
            rows,
            sex,
            showChromosomeLabels,
            showFullyBanded,
            showNonNuclearChromosomes,
            ploidy,
            ploidyDesc
        } = this.props;

        return (
            <div id={id} className={className} style={style}>
            <div 
            id='ideogram-container'
            ancestors={ancestors}
            assembly={assembly}
            annotations={annotations}
            annotationsPath={annotationsPath}
            annotationsLayout={annotationsLayout}
            annotationHeight={annotationHeight}
            annotationsColor={annotationsColor}
            annotationTracks={annotationTracks}
            barWidth={barWidth}
            brush={brush}
            config={this.props.config}
            chromosomes={chromosomes}
            chrHeight={chrHeight} // x
            chrMargin={chrMargin} // x
            chrWidth={chrWidth} // x
            organism={organism}
            dataDir={dataDir} // x
            heatmaps={heatmaps}
            histogramScaling={histogramScaling}
            ploidy={ploidy}
            ploidyDesc={ploidyDesc}
            showBandLabels={showBandLabels}
            perspective={perspective}
            orientation={orientation} // x
            onDidRotate={onDidRotate}
            onBrushMove={onBrushMove}
            onLoad={onLoad}
            onWillShowAnnotTooltip={onWillShowAnnotTooltip}
            onDrawAnnots={onDrawAnnots}
            rangeSet={rangeSet}
            rotatable={rotatable} // x
            rows={rows} // x
            resolution={resolution} // x
            sex={sex}
            showChromosomeLabels={showChromosomeLabels}
            showFullyBanded={showFullyBanded} //X kind of pointless
            showNonNuclearChromosomes={showNonNuclearChromosomes} //X kind of pointless
            ></div>
            </div>
        );
    }
}

DashIdeogram.defaultProps = {
    organism: "human",
    className: "App",
    dataDir: 'https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/'
}

DashIdeogram.propTypes = {
    /**
     * The ID used to identify this compnent in Dash callbacks
     */
    id: PropTypes.string,

    config: PropTypes.object,
    /**
     * The input's inline styles
     */
    style: PropTypes.object,

    /**
     * Dash specific prop type
     */
    setProps: PropTypes.func,

    /**
     * The class of the input element
     */
    className: PropTypes.string,

    /**
     * The label
     */
    label: PropTypes.string,

    ancestors: PropTypes.object,

    annotations: PropTypes.arrayOf(PropTypes.object),

    annotationHeight: PropTypes.number,

    annotationsLayout:PropTypes.number,

    annotationsColor:PropTypes.string,

    annotationsPath: PropTypes.string,

    annotationTracks: PropTypes.arrayOf(PropTypes.object),
    
    assembly: PropTypes.string,

    barWidth: PropTypes.number,

    brush: PropTypes.string,

    /**
     * CSS styling and the id of the container holding the Ideogram in react-ideogram.js
     */
    container: PropTypes.string,
    
    chrHeight: PropTypes.number,

    chrMargin: PropTypes.number,

    chrWidth: PropTypes.number,

    chromosomes:PropTypes.arrayOf(PropTypes.string),

    /**
     * The directory where data is taken from to create the genome graphs.
     */
    dataDir: PropTypes.string,

    histogramScaling: PropTypes.string,

    heatmaps: PropTypes.arrayOf(PropTypes.object),

    /**
     * The organism, whos genome is to be viewed and manipulated
     */
    organism: PropTypes.string,

    /**
     * The orientation of the chromesomes either being vertical or horizontal
     */
    orientation: PropTypes.string,

    onBrushMove: PropTypes.func,

    onBrushMoveCallback: PropTypes.func,


    onDidRotate: PropTypes.func,

    onDrawAnnots: PropTypes.func,

    onLoad: PropTypes.func,

    onWillShowAnnotTooltip: PropTypes.func,

    perspective: PropTypes.string,

    ploidy: PropTypes.number,

    ploidyDesc: PropTypes.arrayOf(PropTypes.object),
    
    rangeSet: PropTypes.arrayOf(PropTypes.object),

    rotatable: PropTypes.bool,

    resolution: PropTypes.number,

    rows: PropTypes.number,

    sex: PropTypes.string,

    showChromosomeLabels: PropTypes.bool,

     /**
     * Enable or disable the band labels
     */
    showBandLabels: PropTypes.bool,

    showAnnotTooltip: PropTypes.bool,

    showFullyBanded: PropTypes.bool,

    showNonNuclearChromosomes: PropTypes.bool
};

module.exports = DashIdeogram;


    // onIdeogramLoad() {

    //     var chrs = this.ideogram.chromosomes,
    //         chrX = chrs['9606']['X'],
    //         chrY = chrs['9606']['Y'];
    //     console.warn("onIdeoLoad", chrs)
    //     var par1X = {chr: chrX, start: 10001, stop: 2781479};
    //     var par1Y = {chr: chrY, start: 10001, stop: 2781479};
    
    //     var par2X = {chr: chrX, start: 155701383, stop: 156030895};
    //     var par2Y = {chr: chrY, start: 56887903, stop: 57217415};
    
    //     var pseudoautosomalRegions = [
    //         {'r1': par1X, 'r2': par1Y},
    //         {'r1': par2X, 'r2': par2Y}
    //     ];
    
    //     this.ideogram.drawSynteny(pseudoautosomalRegions);
    // }