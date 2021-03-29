import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';
import PropTypes from 'prop-types';
import {PILEUP_VIZ_TYPES, PILEUP_SOURCE_TYPES} from '../constants/tracks';

const RealPileup = lazy(LazyLoader.pileup);
/**
 * The Pileup component is a genome visualization component
 * developed by the the Hammerlab. It uses an
 * example integration of pileup.js and React (https://www.npmjs.com/package/pileup).
 */
export default class Pileup extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealPileup {...this.props} />
            </Suspense>
        );
    }
}

Pileup.defaultProps = {};

Pileup.propTypes = {
    /**
     * The ID of this component, used to identify dash components in callbacks.
     * The ID needs to be unique across all of the components in an app.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func,

    /**
     * Generic style overrides on the plot div
     */
    style: PropTypes.object,

    /**
     * className of the component div.
     */
    className: PropTypes.string,

    /**
    Object defining genomic location.
    Of the format: {contig: 'chr17', start: 7512384, stop: 7512544}
    */
    range: PropTypes.exact({
        /**
         * Name of contig to display. (ie. chr17)
         */
        contig: PropTypes.string,

        /**
         * Start location to display
         */
        start: PropTypes.number,

        /**
         * Stop location to display
         */
        stop: PropTypes.number,
    }),

    /**
    Object defining genomic reference.
    */
    reference: PropTypes.exact({
        /**
         * Label to display by reference
         */
        label: PropTypes.string,

        /**
         * Url of 2bit file.
         https://genome.ucsc.edu/goldenPath/help/twoBit.html
         */
        url: PropTypes.string,
    }),

    /**
    Array of configuration objects defining tracks initially displayed when app launches.
    See https://github.com/hammerlab/pileup.js#usage
    */
    tracks: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * Name of visualization. Must be one of
            (coverage, genome, genes, features, idiogram, location, scale,
            variants, genotypes, or pileup)
            See https://github.com/hammerlab/pileup.js/blob/master/src/main/pileup.js
             */
            viz: PropTypes.oneOf(PILEUP_VIZ_TYPES),

            /**
             * Options that define viz details.
            Options depend on the viz type selected.
             */
            vizOptions: PropTypes.Object,

            /**
             * Label to display by track
             */
            label: PropTypes.string,

            /**
             * Data source to visualize. Must be one of
            (bam, vcf, alignmentJson, variantJson, featureJson, idiogramJson, cytoBand,
            vcf, twoBit, bigBed, GAReadAlignment, GAVariant, GAFeature, GAGene)
            See https://github.com/hammerlab/pileup.js/blob/master/src/main/pileup.js
             */
            source: PropTypes.oneOf(PILEUP_SOURCE_TYPES),

            /**
             * Options that define data source.
            Options depend on the source selected.
             */
            sourceOptions: PropTypes.Object,
        })
    ),
};

export const defaultProps = Pileup.defaultProps;
export const propTypes = Pileup.propTypes;
