import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import {formats, viz, create} from 'pileup';

/**
 * Dash GenomeViewer is a library used to analyze and interpret
 * Please checkout the Dash Bio repository
 * on github to learn more about this API.
 */
export default class GenomeViewer extends Component {
    constructor(props) {
        super(props);

        const {
            // Required
            genomedata,
            trackdata,
            trackindex,
            contig,
            start,
            stop,
            // Optional
            showscale,
            showlocation,
            showvariants,
            variantdata,
            showgenes,
            genedata,
            showcoverage,
            compare,
        } = props;

        const track = formats.bam({
            url: trackdata,
            indexUrl: trackindex,
        });

        this.tracks = [];

        // Reference data
        this.tracks.push({
            viz: viz.genome(),
            isReference: true,
            data: formats.twoBit({
                url: genomedata,
            }),
            name: 'Reference',
        });

        // Showscale and location for above
        if (showscale) {
            console.log('showscale');
            this.tracks.push({
                viz: viz.scale(),
                name: 'Scale',
            });
        }

        if (showlocation) {
            console.log('showlocation');
            this.tracks.push({
                viz: viz.location(),
                name: 'Location',
            });
        }

        // Show variant track if supplied
        if (showvariants && variantdata) {
            console.log('showvariants');
            this.tracks.push({
                viz: viz.variants(),
                data: formats.vcf({
                    url: variantdata,
                }),
                options: {
                    variantHeightByFrequency: true,
                    onVariantClicked: function(data) {
                        var content = 'Variants:\n';
                        for (var i = 0; i < data.length; i++) {
                            content +=
                                data[i].id + ' - ' + data[i].vcfLine + '\n';
                        }
                    },
                },
                name: 'Variants',
            });
        }

        // Show gene track if supplied
        if (showgenes && genedata) {
            console.log('showgenes');
            this.tracks.push({
                viz: viz.genes(),
                data: formats.bigBed({
                    url: genedata,
                }),
                name: 'Genes',
            });
        }

        // Show coverage
        if (showcoverage) {
            console.log('showcoverage');
            this.tracks.push({
                viz: viz.coverage(),
                data: track,
                cssClass: 'normal',
                name: 'Coverage',
            });
            console.log('endcoverage');
        }

        // Show track
        console.log('showalignments');
        this.tracks.push({
            viz: viz.pileup(),
            data: track,
            cssClass: 'normal',
            name: 'Alignments',
        });

        // Secondary track as pairs if viewed
        if (compare) {
            console.log('compare');
            this.tracks.push({
                viz: viz.coverage(),
                data: track,
                cssClass: 'tumor',
                name: 'Coverage',
            });
            this.tracks.push({
                viz: viz.pileup({
                    viewAsPairs: true,
                }),
                data: track,
                cssClass: 'tumor',
                name: 'Alignments',
            });
        }

        this.contig = contig;
        this.start = start;
        this.stop = stop;
    }

    componentDidMount() {
        const {
            trackdata,
            trackindex,
            genomedata,
            contig,
            start,
            stop,
        } = this.props;

        // Only load if all data is supplied
        if (trackdata && trackindex && genomedata && contig && start && stop) {
            console.log('all tracks created');
            this.pileup = create(this.pileup, {
                range: {
                    contig: this.contig,
                    start: this.start,
                    stop: this.stop,
                },
                tracks: this.tracks,
            });
        } else {
            console.log('bla');
            ReactDOM.render(this.pileup);
        }
    }

    render() {
        return <div ref={(ref) => this.pileup = ref} />;
    }
}

GenomeViewer.defaultProps = {
    showscale: true,
    showlocation: true,
    showvariants: true,
    showgenes: true,
    showcoverage: true,
    compare: false,
};

GenomeViewer.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string.isRequired,

    /**
     * URL or data string of genome data, in .2bit format
     */
    genomedata: PropTypes.string.isRequired,

    /**
     * Track data, in .bam format
     */
    trackdata: PropTypes.string.isRequired,

    /**
     * Track index for track data, in .bam.bai style
     */
    trackindex: PropTypes.string.isRequired,

    /**
     * Name of contig
     */
    contig: PropTypes.string.isRequired,

    /**
     * First basis pair
     */
    start: PropTypes.number.isRequired,

    /**
     * Last basis pair
     */
    stop: PropTypes.number.isRequired,

    /**
     * If True, display a scale with the number of represented
     * basis pairs.
     */
    showscale: PropTypes.bool,

    /**
     * If True, display the number of the central basis pair.
     */
    showlocation: PropTypes.bool,

    /**
     * If True, display variant track for marking regions on the genome
     * containing a called variant.
     */
    showvariants: PropTypes.bool,

    /**
     * URL of variant data
     */
    variantdata: PropTypes.string,

    /**
     * If True, display track for annotating genomic regions with gene
     * names (introns, exons, coding regions).
     */
    showgenes: PropTypes.bool,

    /**
     * URL of gene data.
     */
    genedata: PropTypes.string.isRequired,

    /**
     * If True, coverage is shown.
     */
    showcoverage: PropTypes.bool,

    /**
     * If True, (???)
     */
    compare: PropTypes.bool,
};
