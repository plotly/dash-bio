import React, {Component} from 'react';
import {default as IdeogramJS} from 'ideogram';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

// list of properties which ideogram accepts
// must be kept up to date with https://github.com/eweitz/ideogram/blob/master/api.md
const IDEOGRAM_PROPS = [
    'accessToken',
    'ancestors',
    'annotations',
    'annotationHeight',
    'annotationsColor',
    'annotationsLayout',
    'annotationsPath',
    'annotationTracks',
    'assembly',
    'barWidth',
    'brush',
    'chrHeight',
    'chrMargin',
    'chrWidth',
    'chromosomes',
    'container',
    'dataDir',
    'demarcateCollinearChromosomes',
    'geometry',
    'histogramScaling',
    'heatmaps',
    'filterable',
    'fullChromosomeLabels',
    'legend',
    'onBrushMove',
    'onDidRotate',
    'onDrawAnnots',
    'onLoadAnnots',
    'onLoad',
    'onWillShowAnnotTooltip',
    'organism',
    'orientation',
    'perspective',
    'ploidy',
    'ploidyDesc',
    'rangeSet',
    'resolution',
    'rotatable',
    'rows',
    'sex',
    'showBandLabels',
    'showChromosomeLabels',
    'showAnnotTooltip',
    'showFullyBanded',
    'showNonNuclearChromosomes',
];

/**
 * The Ideogram component is used to draw and animate genome-wide
 * datasets for organisms such as human, mouse, and any other
 * eukaryote. The Ideogram component can be used to compare
 * homologous features between chromosomes, and depict
 * haploid, diploid, aneuploid genomes. It can also display
 * annotations on genomic data using histograms and overlays.
 *
 * Reference: https://eweitz.github.io/ideogram/
 * Component's props: https://github.com/eweitz/ideogram/blob/master/api.md
 */

export default class Ideogram extends Component {
    constructor() {
        super();
        this.ideogram = null;
        this.isRotated = false;
        this.tooltipData = null;
        this.tooltipDataTwo = null;

        this.onBrushHandler = this.onBrushHandler.bind(this);
        this.onLoadHandler = this.onLoadHandler.bind(this);
        this.onRotateHandler = this.onRotateHandler.bind(this);
        this.onHomologyHandler = this.onHomologyHandler.bind(this);
        this.onToolTipHandler = this.onToolTipHandler.bind(this);
        this.onMouseOverHandler = this.onMouseOverHandler.bind(this);
        this.setConfig = this.setConfig.bind(this);
        this.initIdeogram = this.initIdeogram.bind(this);
    }

    componentDidMount() {
        this.initIdeogram();
    }

    componentDidUpdate(prevProps) {
        const shouldUpdate = IDEOGRAM_PROPS.some(
            currentKey => this.props[currentKey] !== prevProps[currentKey]
        );

        if (shouldUpdate) {
            // Have to remove old data, because it breaks new instances
            this.initIdeogram();
        }
    }

    initIdeogram() {
        this.ideogram = new IdeogramJS(this.setConfig());
    }

    setConfig() {
        // Pass in all props into config except setProps
        const config = omit(['setProps'], this.props);
        // Event handlers
        config.onDidRotate = this.onRotateHandler;
        config.onBrushMove = this.props.brush ? this.onBrushHandler : null;
        config.onLoad = this.onLoadHandler;
        config.container = '#ideogram-container-' + this.props.id;

        return config;
    }

    onLoadHandler() {
        /**
         *  An event handler that will load a function depending on
         * whether the brush prop is activated, or the homology prop
         * is activated. This prop is activated on the loading of the
         * Ideogram.
         */

        if (typeof this.props.brush !== 'undefined') {
            this.onBrushHandler();
        } else if (typeof this.props.homology !== 'undefined') {
            this.onHomologyHandler();
        }
        return null;
    }

    onBrushHandler() {
        /**
         * An event handler that is called when an Ideogram
         * is using the brush prop. This event handler
         * returns brush data in to the Dash application
         * with the prop 'brushData'.
         */

        const r = this.ideogram.selectedRegion,
            start = r.from.toLocaleString(),
            end = r.to.toLocaleString(),
            extent = r.extent.toLocaleString();

        if (
            typeof this.props.brush !== 'undefined' &&
            typeof this.props.setProps !== 'undefined'
        ) {
            this.props.setProps({
                brushData: {
                    start: start,
                    end: end,
                    extent: extent,
                },
            });
        }
    }

    onHomologyHandler() {
        /**
         * An event handler used to compare two chromosomes,
         * where the user can specify the connection
         * between two points of two chromosomes. The user
         * can supply the homology locations using the
         * 'homology' prop.
         */

        const chrs = this.ideogram.chromosomes;
        let chrOne = null;
        let chrTwo = null;
        const organism = this.props.organism;
        const chromosomes = this.props.chromosomes;
        const homology = this.props.homology;

        if (typeof this.props.organism !== 'string') {
            chrOne = chrs[homology.chrOne.organism][chromosomes[organism[0]]];
            chrTwo = chrs[homology.chrTwo.organism][chromosomes[organism[1]]];
        } else {
            chrOne = chrs[homology.chrOne.organism][chromosomes[0]];
            chrTwo = chrs[homology.chrTwo.organism][chromosomes[1]];
        }

        const par1X = {
            chr: chrOne,
            start: homology.chrOne.start[0],
            stop: homology.chrOne.stop[0],
        };
        const par1Y = {
            chr: chrTwo,
            start: homology.chrTwo.start[0],
            stop: homology.chrTwo.stop[0],
        };

        const par2X = {
            chr: chrOne,
            start: homology.chrOne.start[1],
            stop: homology.chrOne.stop[1],
        };
        const par2Y = {
            chr: chrTwo,
            start: homology.chrTwo.start[1],
            stop: homology.chrTwo.stop[1],
        };

        const regions = [{r1: par1X, r2: par1Y}, {r1: par2X, r2: par2Y}];

        this.ideogram.drawSynteny(regions);
    }

    onToolTipHandler() {
        /**
         * An event handler that is called by onMouseHover handler, which
         * returns the annotation the mouse hovered over with the prop
         * 'annotationsData'.
         */

        this.tooltipDataTwo = this.tooltipData;
        if (this.props.setProps) {
            this.props.setProps({
                annotationsData: this.tooltipData,
            });
        }
    }

    onRotateHandler() {
        /**
         * An event handler that returns 'true' or 'false' if the
         * ideogram is rotated. The user can use the prop 'rotated'
         * in their Dash application to see this effect.
         */

        this.isRotated = this.isRotated ? false : true;

        if (this.props.setProps) {
            this.props.setProps({
                rotated: this.isRotated,
            });
        }
    }

    onMouseOverHandler() {
        /**
         * Event handler that activates when you hover the mouse over an annotation.
         * This event handler allows the user to add a prop `onMouseOver` into their
         * Dash application, that will return the annotation that the mouse hovers over.
         */

        if (this.props.setProps) {
            this.tooltipData = document.getElementById(
                '_ideogramTooltip'
            ).innerHTML;
            this.tooltipDataTwo =
                this.tooltipData !== this.tooltipDataTwo
                    ? this.onToolTipHandler()
                    : document.getElementById('_ideogramTooltip').innerHTML;
        }
    }

    render() {
        return (
            <div
                id={this.props.id}
                className={this.props.className}
                style={this.props.style}
            >
                <div
                    id={'ideogram-container-' + this.props.id}
                    onMouseOver={this.onMouseOverHandler}
                />
            </div>
        );
    }
}

Ideogram.defaultProps = {
    organism: 'human',
    dataDir: 'https://unpkg.com/ideogram@1.10.0/dist/data/bands/native/',
    annotationsColor: '#F00',
    annotationsLayout: 'tracks',
    barWidth: 3,
    chrHeight: 400,
    chrMargin: 10,
    chrWidth: 10,
    ploidy: 1,
    rotatable: true,
    showBandLabels: false,
    showChromosomeLabels: true,
    showAnnotTooltip: true,
    showFullyBanded: true,
    showNonNuclearChromosomes: false,
};

Ideogram.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks and used to identify Ideogram
     * instances.
     */
    id: PropTypes.string.isRequired,

    /**
     * The component's inline styles
     */
    style: PropTypes.object,

    /**
     * Dash specific prop type connecting event handlers to front end.
     */
    setProps: PropTypes.func,

    /**
     * The CSS class of the component wrapper
     */
    className: PropTypes.string,

    /**
     * Layout of ideogram annotations.
     * One of "tracks", "histogram", or "overlay".
     *
     * "tracks": display annotations in tracks beside each chromosome.
     *
     * "histogram": display annotations in a histogram. Clusters annotations by location. Each
     * cluster/bin is shown as a bar, the height of which represents the number of annotations on
     * genomic range.
     *
     * "overlay": display annotations directly over chromosomes.
     */
    annotationsLayout: PropTypes.oneOf(['tracks', 'histogram', 'overlay']),

    /**
     * A list of annotation objects. Annotation objects can also have a name, color, shape, and
     * track index. At the moment there is more keys specified and the docs need updating.
     */
    annotations: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            chr: PropTypes.string,
            start: PropTypes.number,
            stop: PropTypes.number,
        })
    ),

    /**
     * An absolute or relative URL directing to a JSON file containing annotation objects (JSON).
     */
    annotationsPath: PropTypes.string,

    /**
     * Use this prop in a dash callback to return annotationData when hovered.
     * It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
     * dash.dependencies.Input
     */
    annotationsData: PropTypes.string,

    /**
     * A list of objects with metadata for each track, e.g., id, display name, color, shape.
     */
    annotationTracks: PropTypes.arrayOf(PropTypes.object),

    /**
     * Not used if annotationsLayout is set to "overlay".
     * The height of histogram bars or the size of annotations tracks symbols
     */
    annotationHeight: PropTypes.number,

    /**
     * Color of annotations.
     */
    annotationsColor: PropTypes.string,

    /**
     * Scaling of histogram bars height
     * Only used if annotationsLayout is set to "histogram".
     * One of "absolute" or "relative".
     *
     * "absolute": sets bar height relative to tallest bar in all chromosomes.
     * "relative": sets bar height relative to tallest bar in each chromosome.
     */
    histogramScaling: PropTypes.oneOf(['absolute', 'relative']),

    /**
     * Pixel width of histogram bars.
     * Only used if annotationsLayout is set to "histogram".
     **/
    barWidth: PropTypes.number,

    /**
     * Whether to show a tooltip upon mousing over an annotation.
     */
    showAnnotTooltip: PropTypes.bool,

    /**
     * Default: latest RefSeq assembly for specified organism.
     * The genome assembly to display.
     * Takes assembly name (e.g., "GRCh37"),
     * RefSeq accession (e.g., "GCF_000306695.2"),
     * or GenBank accession (e.g., "GCA_000005005.5")
     */
    assembly: PropTypes.string,

    /**
     * Genomic coordinate range (e.g., "chr1:104325484-119977655") for a brush on a
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
     * where start is the left most edge, end is right most edge, and extent is the total width of
     * the brush.
     * It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
     * dash.dependencies.Input
     */
    brushData: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string,
        extent: PropTypes.string,
    }),

    /**
     * CSS styling and the id of the container holding the Ideogram in
     * react-ideogram.js, this is where all the d3 magic happens.
     */
    container: PropTypes.string,

    /**
     * The pixel height of the tallest chromosome in the ideogram
     */
    chrHeight: PropTypes.number,

    /**
     * The pixel space of margin between each chromosome.
     */
    chrMargin: PropTypes.number,

    /**
     * The pixel width of each chromosome.
     */
    chrWidth: PropTypes.number,

    /**
     * A list of the names of chromosomes to display. Useful for depicting a subset of the
     * chromosomes in the genome, e.g., a single chromosome.
     *
     * If Homology (between two different species):
     * Ex: chromosomes={
     *       'human': ['1'],
     *       'mouse': ['4']
     * }
     *
     * General case to specify specific chromosomes:
     * Ex: chromosomes=['1', '2']
     */
    chromosomes: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.object,
    ]),

    /**
     * Absolute or relative URL of the directory containing data needed to draw banded chromosomes.
     * You will need to set up your own database to grab data from a custom database.
     */
    dataDir: PropTypes.string,

    /**
     * Organism(s) to show chromosomes for. Supply organism's name as a string (e.g., "human") or
     * organism's NCBI Taxonomy ID (taxid, e.g., 9606) to display chromosomes from a single
     * organism, or an array of organisms' names or taxids to display chromosomes from multiple
     * species.
     */
    organism: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    /**
     * Provide local JSON organism into this prop from a local user JSON file.
     * DataDir must not be initialized.
     */
    localOrganism: PropTypes.object,

    /**
     * Used to compare two chromosomes with each other.
     * The keys "chrOne" and "chrTwo" represent one chromosome each. Organism is the taxID or name.
     * Start is an array, containing start one and start two, in this order. Stop is an array,
     * containing stop one, and stop two, in this order.
     * Ex: homology={
     *     "chrOne": {
     *         organism": "9606",
     *         "start": [50000, 155701383],
     *         "stop": [900000, 156030895]
     *     },
     *     "chrTwo": {
     *         organism": "10090",
     *         "start": [10001, 50000000],
     *         "stop": [2781479, 57217415]
     *     }
     * }
     */
    homology: PropTypes.shape({
        chrOne: PropTypes.shape({
            organism: PropTypes.string.isRequired,
            start: PropTypes.arrayOf(PropTypes.number.isRequired),
            stop: PropTypes.arrayOf(PropTypes.number.isRequired),
        }),
        chrTwo: PropTypes.shape({
            organism: PropTypes.string.isRequired,
            start: PropTypes.arrayOf(PropTypes.number.isRequired),
            stop: PropTypes.arrayOf(PropTypes.number.isRequired),
        }),
    }),

    /**
     * Use perspective: 'comparative' to enable annotations between two chromosomes,
     * either within the same organism or different organisms. Used for homology.
     */
    perspective: PropTypes.oneOf(['comparative']),

    /**
     * Whether to include abbreviation species name in chromosome label. Used for homology.
     */
    fullChromosomeLabels: PropTypes.bool,

    /**
     * The resolution of cytogenetic bands to show for each chromosome.
     * The quantity refers to an approximate value in bands per haploid set (bphs).
     * One of 450, 550, or 850.
     */
    resolution: PropTypes.number,

    /**
     * Whether annotations should be filterable or not.
     */
    filterable: PropTypes.bool,

    /**
     * The orientation of chromosomes on the page.
     */
    orientation: PropTypes.oneOf(['vertical', 'horizontal']),

    /**
     * The ploidy - number of chromosomes to depict for each chromosome set.
     */
    ploidy: PropTypes.number,

    /**
     * Description of ploidy in each chromosome set in terms of ancestry composition.
     */
    ploidyDesc: PropTypes.arrayOf(PropTypes.object),

    /**
     * A map associating ancestor labels to colors. Used to color
     * chromosomes from different ancestors in polyploid genomes.
     */
    ancestors: PropTypes.object,

    /**
     * List of objects describing segments of recombination among chromosomes in a chromosome set.
     */
    rangeSet: PropTypes.arrayOf(PropTypes.object),

    /**
     * Whether chromosomes are rotatable on click.
     */
    rotatable: PropTypes.bool,

    /**
     * Dash callback that returns true if rotated, and false if not.
     *
     */
    rotated: PropTypes.bool,

    /**
     * Useful for omitting chromosome Y in female animals.
     * Currently only supported for organisms that use XY sex-determination.
     */
    sex: PropTypes.oneOf(['male', 'female']),

    /**
     * Whether to show chromosome labels, e.g., 1, 2, 3, X, Y.
     */
    showChromosomeLabels: PropTypes.bool,

    /**
     * Whether to show cytogenetic band labels, e.g., 1q21
     **/
    showBandLabels: PropTypes.bool,

    /**
     * Whether to show fully banded chromosomes for genomes that have sufficient data. Useful for
     * showing simpler chromosomes of cytogenetically well-characterized organisms, e.g., human,
     * beside chromosomes of less studied organisms, e.g., chimpanzee.
     */
    showFullyBanded: PropTypes.bool,

    /**
     * Whether to show non-nuclear chromosomes,
     * e.g., for mitochondrial (MT) and chloroplast (CP) DNA.
     */
    showNonNuclearChromosomes: PropTypes.bool,

    /**
     * Callback function to invoke after chromosome has rotated. (React)
     * onDidRotate: PropTypes.func,
     */

    /**
     * Dash event callback for hovering over data.
     * onMouseOver: PropTypes.func,
     */

    /**
     * Callback function to invoke when brush moves.
     * onBrushMove: PropTypes.func,
     */

    /**
     * Callback function to invoke when annotations are drawn. (React)
     * onDrawAnnots: PropTypes.func,
     */

    /**
     * Callback function to invoke when chromosomes are loaded,
     * i.e., rendered on the page. (React)
     * onLoad: PropTypes.func,
     */

    /**
     * Useful for putting ideogram into a small container,
     * or when dealing with genomes that have many chromosomes.
     * Note: Not fully working, needs to be fixed by developer.
     * rows: PropTypes.number,
     */

    /**
     * This is a work in progess and will hopefully be fixed in future releases.
     * https://eweitz.github.io/ideogram/annotations-heatmap
     * heatmaps: PropTypes.arrayOf(PropTypes.object),
     */
};
