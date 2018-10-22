import React, { Component } from 'react';
import Ideogram from 'ideogram';
import PropTypes from 'prop-types';



/**
 * The Dash Ideogram is used to draw and animate genome-wide
 * datasets for organisms such as an human, mouse, and any
 * other eukaryotes. The Ideogram can used to compare
 * homologous features bewtween chromosomes, and depict,
 * haploid, diploid, aneuploidy genomes. It can also display
 * annotations using histograms, overlays, and simple side
 * by side tracks to show important genomic data.
 */
class DashIdeogram extends Component {
    constructor(props) {

        super(props);
        this.ideogram = null;
        this.isRotated = false;
        this.tooltipData = null;
        this.tooltipDataTwo = null;
        this.config = {}
        this.clearDiv = this.clearDiv.bind(this);
        this.onBrushHandler = this.onBrushHandler.bind(this)
        this.onLoadHandler = this.onLoadHandler.bind(this);
        this.onRotateHandler = this.onRotateHandler.bind(this);
        this.onHomologyHandler = this.onHomologyHandler.bind(this);
        this.onToolTipHandler = this.onToolTipHandler.bind(this)
        this.setConfig = this.setConfig.bind(this)
    }

    clearDiv() {
        const container = document.getElementById('ideogram-container');
        console.warn('[clearDiv] Before', container.hasChildNodes())
        while (container.hasChildNodes()) {
            container.removeChild(container.firstChild)
        }

        console.warn('[clearDiv] After', container.hasChildNodes())
    }


    onHomologyHandler() {
        var chrs = this.ideogram.chromosomes
        var chrOne = null
        var chrTwo = null
        var organism = this.props.organism
        var chromosomes = this.props.chromosomes
        var homology = this.props.homology

        if (typeof (this.props.organism) !== "string") {
            chrOne = chrs[homology.chrOne.organism][chromosomes[organism[0]]]
            chrTwo = chrs[homology.chrTwo.organism][chromosomes[organism[1]]]
        }
        else {
            chrOne = chrs[homology.chrOne.organism][chromosomes[0]]
            chrTwo = chrs[homology.chrTwo.organism][chromosomes[1]]
        }

        var par1X = { chr: chrOne, start: homology.chrOne.start[0], stop: homology.chrOne.stop[0] };
        var par1Y = { chr: chrTwo, start: homology.chrTwo.start[0], stop: homology.chrTwo.stop[0] };

        var par2X = { chr: chrOne, start: homology.chrOne.start[1], stop: homology.chrOne.stop[1] };
        var par2Y = { chr: chrTwo, start: homology.chrTwo.start[1], stop: homology.chrTwo.stop[1] };

        var regions = [
            { 'r1': par1X, 'r2': par1Y },
            { 'r1': par2X, 'r2': par2Y }
        ];

        this.ideogram.drawSynteny(regions);
    }

    onToolTipHandler() {
        console.warn("onToolTipHandler")
        this.tooltipDataTwo = this.tooltipData
        if (this.props.setProps){
        this.props.setProps(
            {
                annotationsData: this.tooltipData
            }
        )
    }
}

    onBrushHandler() {
        var r = this.ideogram.selectedRegion,
            start = r.from.toLocaleString(),
            end = r.to.toLocaleString(),
            extent = r.extent.toLocaleString();

        if (this.props.brush) {
            if (this.props.setProps) {
                this.props.setProps(
                    {
                        brushData: {
                            start: start,
                            end: end,
                            extent: extent
                        }
                    }
                )
            }
        }
    }

    onLoadHandler() {
        if (this.props.brush) {
            console.warn("oLH Brush")
            this.onBrushHandler();
        }
        else if (this.props.homology) {
            console.warn("oLH Homology")
            this.onHomologyHandler();
        }
        return null
    }

    onRotateHandler() {

        (this.isRotated) ? (this.isRotated = false) : (this.isRotated = true)

        if (this.props.setProps) {

            this.props.setProps(
                {
                    rotated: this.isRotated
                }
            )
        }
        console.warn("onDidRotate", this.isRotated)
        return
    }

    setConfig() {
        console.warn("dataDir", this.props.dataDir)
        this.config = {
            ancestors: this.props.ancestors,
            assembly: this.props.assembly, //
            annotations: this.props.annotations,  //
            annotationsPath: this.props.annotationsPath,  //
            annotationsLayout: this.props.annotationsLayout,  //
            annotationHeight: this.props.annotationHeight,  //
            annotationsColor: this.props.annotationsColor,  //
            annotationTracks: this.props.annotationTracks,  //
            barWidth: this.props.barWidth,
            brush: this.props.brush,  //
            container: '#ideogram-container',
            chromosomes: this.props.chromosomes,
            chrHeight: this.props.chrHeight, //
            chrMargin: this.props.chrMargin, //
            chrWidth: this.props.chrWidth, //
            organism: this.props.organism, //
            dataDir: this.props.dataDir,  //
            filterable: this.props.filterable,
            fullChromosomeLabels: this.props.fullChromosomeLabels,
            heatmaps: this.props.heatmaps,
            isAnnotationHovered: this.props.isAnnotationHovered,
            histogramScaling: this.props.histogramScaling,
            ploidy: this.props.ploidy,  //
            ploidyDesc: this.props.ploidyDesc,
            showBandLabels: this.props.showBandLabels, // 
            perspective: this.props.perspective,  //
            orientation: this.props.orientation,  //
            onDidRotate: this.onRotateHandler,  //
            onBrushMove: (this.props.brush) ? this.onBrushHandler : null,  //
            onLoad: this.onLoadHandler,  //
            onDrawAnnots: this.props.onDrawAnnots,
            rangeSet: this.props.rangeSet,
            rotatable: this.props.rotatable,  //
            rotated: this.props.rotated,
            rows: this.props.rows,  // 
            resolution: this.props.resolution,  //
            sex: this.props.sex,  //
            showChromosomeLabels: this.props.showChromosomeLabels,  //
            showFullyBanded: this.props.showFullyBanded,  //
            showNonNuclearChromosomes: this.props.showNonNuclearChromosomes  //
        }
    }

    shouldComponentUpdate(nextProps) {
        const container = document.getElementById('ideogram-container');

        if ((this.props.annotationsLayout !== nextProps.annotationsLayout)
            || (this.props.annotationsPath !== nextProps.annotationsPath)) {
            return true
        }
        return ((
            (this.props.localOrganism !== nextProps.localOrganism) 
            || (this.props.organism !== nextProps.organism)
            || (this.props.showBandLabels !== nextProps.showBandLabels)
            || (this.props.orientation !== nextProps.orientation)
            || (this.props.dataDir !== nextProps.dataDir)
            || (this.props.chrHeight !== nextProps.chrHeight)
            || (this.props.chrWidth !== nextProps.chrWidth)
            || (this.props.chrMargin !== nextProps.chrMargin)
            || (this.props.resolution !== nextProps.resolution)
            || (this.props.rows !== nextProps.rows)
            || (this.props.ploidy !== nextProps.ploidy)
            || (this.props.sex !== nextProps.sex)
            || (this.props.annotationsColor !== nextProps.annotationsColor)
            || (this.props.annotationHeight !== nextProps.annotationHeight)
            || (this.props.annotationsLayout !== nextProps.annotationsLayout)
            || (this.props.annotationsPath !== nextProps.annotationsPath)
            || (this.props.style !== nextProps.style)
            || (this.props.chromosomes !== nextProps.chromosomes)
            || (this.props.rotatable !== nextProps.rotatable)
            || (this.props.showChromosomeLabels !== nextProps.showChromosomeLabels)
            || (this.props.showFullyBanded !== nextProps.showFullyBanded)
            || (this.props.showNonNuclearChromosomes !== nextProps.showNonNuclearChromosomes)
            || (this.props.annotationTracks !== nextProps.annotationTracks)
            || (this.props.annotations !== nextProps.annotations)
            || (this.props.assembly !== nextProps.assembly)
            || (this.props.barWidth !== nextProps.barWidth)
            || (this.props.filterable !== nextProps.filterable)
            || (this.props.homology !== nextProps.homology))
            && container.hasChildNodes())
    }

    componentDidMount() {
        console.warn("CDM")
        const container = document.getElementById('ideogram-container');
        if (container.hasChildNodes()) {
            delete window.chrBands;
            this.clearDiv();
        }
        if (this.props.localOrganism) {
            window.chrBands = this.props.localOrganism
            }
        this.setConfig();
        // this.config = this.props.config
        this.ideogram = new Ideogram(this.config);
    }

    componentWillUnmount() {
        delete window.chrBands;
        this.clearDiv();
    }
    componentDidUpdate(prevProps) {
        console.warn("CDU this", this.props)
        console.warn("CDU prev", prevProps)

        delete window.chrBands
        this.clearDiv();
        if (this.props.localOrganism) {
        window.chrBands = this.props.localOrganism
        }
        this.setConfig();
        // this.config = this.props.config

        this.ideogram = new Ideogram(this.config);
        console.warn("this.ideogram", this.ideogram.response)

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
            annotationsData,
            barWidth,
            brush,
            brushData,
            homology,
            chromosomes,
            chrHeight,
            chrMargin,
            chrWidth,
            className,
            dataDir,
            filterable,
            fullChromosomeLabels,
            heatmaps,
            isAnnotationHovered,
            histogramScaling,
            localOrganism,
            organism,
            showBandLabels,
            orientation,
            perspective,
            onDrawAnnots,
            onWillShowAnnotTooltip,
            rangeSet,
            resolution,
            rotatable,
            rotated,
            rows,
            sex,
            showChromosomeLabels,
            showFullyBanded,
            showNonNuclearChromosomes,
            ploidy,
            ploidyDesc
        } = this.props;

        return (
            <div id={id} className={className}>
                <div
                    style={style}
                    id='ideogram-container'
                    ancestors={ancestors}
                    assembly={assembly} //x
                    annotations={annotations}
                    annotationsData={annotationsData}
                    annotationsPath={annotationsPath} //x
                    annotationsLayout={annotationsLayout} //x
                    annotationHeight={annotationHeight} //x 
                    annotationsColor={annotationsColor} //x
                    annotationTracks={annotationTracks} //x
                    barWidth={barWidth} //x
                    brush={brush} //X
                    brushData={brushData}
                    localOrganism={localOrganism}
                    chromosomes={chromosomes}
                    chrHeight={chrHeight} // x
                    chrMargin={chrMargin} // x
                    chrWidth={chrWidth} // x
                    config={this.props.config}
                    homology={homology}
                    isAnnotationHovered={isAnnotationHovered}
                    organism={organism} //x
                    dataDir={dataDir} // x
                    filterable={filterable} //x
                    fullChromosomeLabels={fullChromosomeLabels}
                    heatmaps={heatmaps}
                    histogramScaling={histogramScaling}
                    ploidy={ploidy} //x
                    ploidyDesc={ploidyDesc}
                    showBandLabels={showBandLabels} //x
                    perspective={perspective}
                    orientation={orientation} // x
                    onWillShowAnnotTooltip={onWillShowAnnotTooltip}
                    onDrawAnnots={onDrawAnnots}
                    // onMouseOver={this.props.setProps ? this.onToolTipHandler : null}
                    // onMouseOver={(event) => (event.target.id === "tooltip" ? this.onToolTipHandler(): null)}
                    onMouseOver={() => {
                        if (this.props.setProps) {
                            this.tooltipData = document.getElementById('tooltip').innerHTML;
                            ((this.tooltipData !== this.tooltipDataTwo) ? this.onToolTipHandler() : this.tooltipDataTwo = document.getElementById('tooltip').innerHTML);
                        }
                    }
                    }
                    rangeSet={rangeSet}
                    rotatable={rotatable} // x
                    rotated={rotated}
                    rows={rows} // x
                    resolution={resolution} // x
                    sex={sex} //x
                    showChromosomeLabels={showChromosomeLabels}
                    showFullyBanded={showFullyBanded} //X kind of pointless
                    showNonNuclearChromosomes={showNonNuclearChromosomes} //X kind of pointless
                ></div>
            </div>
        );
    }
}

DashIdeogram.defaultProps = {
    organism:"human",
    // dataDir: 'https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/'
}

DashIdeogram.propTypes = {
    localOrganism: PropTypes.object,
    annotationsData: PropTypes.string,
    onMouseOver: PropTypes.func,
    /**
     * The ID used to identify this component in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * Delete?
     */
    config: PropTypes.object,

    /**
     * The component's inline styles
     */
    style: PropTypes.object,

    /**
     * Dash specific prop type connecting event handlers to front end
     */
    setProps: PropTypes.func,

    /**
     * The CSS class of the component wrapper
     */
    className: PropTypes.string,

    /**
     * Delete
     */
    label: PropTypes.string,

    /**
     *  Unspecified
     */

    ancestors: PropTypes.object,

    /**
     *  A list of annotation objects. Each annotation object 
     *  has at least a chromosome name (chr), start coordinate (start), 
     *  and stop coordinate (stop). Annotation objects can also have a 
     *  name, color, shape, and track index. 
     */

    annotations: PropTypes.arrayOf(PropTypes.object),

    /**
     *  The height of each annotation.
     */
    annotationHeight: PropTypes.number,

    /**
     * Default: "tracks". The layout of this ideogram's annotations. 
     * It can be one of "tracks", "histogram", or "overlay".
     * 
     * Tracks: Lay out annotations in tracks beside each chromosome.
     * 
     * Histogram: Layout annotations in a histogram. Clusters annotations
     * by location. Each cluster/bin is shown as a height of a bar to represent
     * number of annotations on genomic range.
     * 
     * Overlay: Lay out annotations directly over chromsomes.
     */
    annotationsLayout: PropTypes.number,

    /**
     * Default: "#F00" (i.e., red). The color of each annotation.
     */
    annotationsColor: PropTypes.string,

    /**
     * An absolute or relative URL directing to a JSON file containing
     * annotation objects (JSON).
     */
    annotationsPath: PropTypes.string,

    /**
     * Unspecified
     */
    annotationTracks: PropTypes.arrayOf(PropTypes.object),

    /**
     * Default: latest RefSeq assembly for specified organism. The genome assembly to display. 
     * Takes assembly name (e.g. "GRCh37"), 
     * RefSeq accession (e.g. "GCF_000306695.2"), 
     * or GenBank accession (e.g. "GCA_000005005.5")
     */
    assembly: PropTypes.string,

    /**
     * Default: 3. The pixel width of bars drawn when annotationsLayout: 'histogram'.
     **/
    barWidth: PropTypes.number,

    /**
     * Default: null
     * Genomic coordinate range (e.g. "chr1:104325484-119977655") for a brush on a 
     * chromosome. Useful when ideogram consists of one chromosome and you want to be 
     * able to focus on a region within that chromosome, 
     * and create an interactive sliding window to other regions
     */

    brush: PropTypes.string,

    /**
     * A dash callback that is activated when the 'brush' prop is used in component.
     * It will return an dictionary like so:
     * 
     * {'start': <value>, 'end': <value>, 'extent': <value>}
     * 
     * where start is the left most edge, end is right most edge, and extent is 
     * the total width of the brush.
     * 
     */
    brushData: PropTypes.string,

    /**
     * CSS styling and the id of the container holding the Ideogram in 
     * react-ideogram.js, this is where all the d3 magic happens.
     */
    container: PropTypes.string,

    /**
     * Default: "ideogram-container"
     * Used to compare two chromosomes with each other.
     * The keys "chrOne" and "chrTwo" represent one chromosome each. Organism is the 
     * specified in taxID or name. Start is an array
     * indicating start one and start two in this order, for specified
     * organism.
     * Stop is array indicating, stop one, and stop two, in this order
     * for specified organism.
     * Ex: homology={
                    "chrOne": {
                        "organism": "9606",
                        "start": [50000, 155701383],
                        "stop": [900000, 156030895]
                    },
                    "chrTwo": {
                        "organism": "10090",
                        "start": [10001, 50000000],
                        "stop": [2781479, 57217415]
                    }
                }
     */
    homology: PropTypes.object,

    /**
     * Default:400. The pixel height of the tallest chromosome in the ideogram
     */
    chrHeight: PropTypes.number,

    /**
     * Default: 10. The pixel space of margin bewteen each chromosome.
     */
    chrMargin: PropTypes.number,

    /**
     * Default 10. The pixel width of each chromosome.
     */
    chrWidth: PropTypes.number,

    /**
     * Default: all chromosomes in assembly. A list of the names of chromosomes to 
     * display. Useful for depicting a subset of the chromosomes in the genome, 
     * e.g. a single chromosome.
     * 
     * If Homology (between two different species):
     * Ex: chromosomes={
            'human': ['1'],
            'mouse': ['4']
        }

        General case to specify specific chromosomes:
        Ex: chromosomes=['1', '2']
     */
    chromosomes: PropTypes.oneOfType(
        [
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.object
        ]
    ),

    /**
     * Default: https://unpkg.com/ideogram@1.3.0/dist/data/bands/native/
     * Absolute or relative URL of the directory 
     * containing data needed to draw banded chromosomes.
     * You will need to set up you're own database to grab data from
     * for custom data.
     */
    dataDir: PropTypes.string,

    /**
     * Unspecified
     */
    fullChromosomeLabels: PropTypes.bool,
    /**
     * Default: "absolute". One of "absolute" or "relative". The technique to use in scaling the height of histogram bars. The "absolute" value sets bar height relative to tallest bar in all chromosomes, 
     * while "relative" sets bar height relative to tallest bar in each chromosome.
     */
    histogramScaling: PropTypes.string,

    /**
     * This is a work in progess and will hopefully be fixed in future releases.
     */
    heatmaps: PropTypes.arrayOf(PropTypes.object),


    isAnnotationHovered: PropTypes.bool,

    /**
     * Unspecified
     */
    filterable: PropTypes.number,

    /**
     *  Organism(s) to show chromosomes for. Supply organism's name as a string (e.g. "human") or organism's NCBI Taxonomy ID (taxid, e.g. 9606) 
     *  to display chromosomes from a single organism, or an array of organisms' 
     *  names or taxids to display chromosomes from multiple species.
     */
    organism: PropTypes.oneOfType(
        [
            PropTypes.string,
            PropTypes.array
        ]
    ),
    /**
     * Default: horizontal. The orientation of chromosomes on the page.
     */
    orientation: PropTypes.string,

    /**
     * Callback function to invoke when brush moves.
     */
    onBrushMove: PropTypes.func,

    /**
     * Delete
     */
    onBrushMoveCallback: PropTypes.func,

    /**
     * Callback function to invoke after chromosome has rotated. (React)
     */
    onDidRotate: PropTypes.func,

    /**
     * Callback function to invoke when annotations are drawn. (React)
     */
    onDrawAnnots: PropTypes.func,

    /**
      * Callback function to invoke when chromosomes are loaded, 
      * i.e. rendered on the page. (React)
      */
    onLoad: PropTypes.func,

    /**
     * Callback function to invoke immediately before annotation tooltip is shown. 
     * The tooltip shows the genomic range and, if available, name of the annotation. (React)
     */
    onWillShowAnnotTooltip: PropTypes.func,

    /**
     * Unspecified
     */
    perspective: PropTypes.string,

    /**
     * Default 1: The ploidy - number of chromosomes to depict for each chromosome
     * set.
     */
    ploidy: PropTypes.number,

    /**
     * Undefined
     */
    ploidyDesc: PropTypes.arrayOf(PropTypes.object),

    /**
     * Undefined
     */
    rangeSet: PropTypes.arrayOf(PropTypes.object),

    /**
     * Default: True. Whether chromosomes are rotatable on click.
     */

    rotatable: PropTypes.bool,

    /**
     * Dash callback that returns True if rotated, and false if not.
     */
    rotated: PropTypes.bool,

    /**
     * Default: highest resolution available for specified genome assembly. 
     * The resolution of cytogenetic bands to show for each chromosome. 
     * The quantity refers to approximate value in bands per haploid set (bphs). 
     * One of 450, 550, or 850.
     */
    resolution: PropTypes.number,

    /**
     * Default 1: Number of rows to arrange chromosomes into. 
     * Useful for putting ideogram into a small container, 
     * or when dealing with genomes that have many chromosomes. 
     * Note: Not fully working needs to be fixed by developer.
     */
    rows: PropTypes.number,

    /**
     * Default: Male. The biological sex of the organism. 
     * Useful for omitting chromosome Y in female mammals. 
     * Currently only supported for organisms that use XY sex-determination.
     */
    sex: PropTypes.string,

    /**
     * Default: true. Whether to show chromosome labels, e.g. 1, 2, 3, X, Y.
     */
    showChromosomeLabels: PropTypes.bool,

    /**
    * Default: false. Whether to show cytogenetic band labels, e.g. 1q21
    */
    showBandLabels: PropTypes.bool,

    /**
     * Default: true. Whether to show a tooltip upon mousing over an annotation.
     */
    showAnnotTooltip: PropTypes.bool,

    /**
     * Default: true. Whether to show fully banded chromosomes for genomes 
     * that have sufficient data. Useful for showing simpler chromosomes of 
     * cytogenetically well-characterized organisms, e.g. human, beside chromosomes of 
     * less studied organisms, e.g. chimpanzee.
     */
    showFullyBanded: PropTypes.bool,

    /**
     * Default: false. Whether to show non-nuclear chromosomes, 
     * e.g. for mitochondrial (MT) and chloroplast (CP) DNA. 
     */
    showNonNuclearChromosomes: PropTypes.bool
};

module.exports = DashIdeogram;

