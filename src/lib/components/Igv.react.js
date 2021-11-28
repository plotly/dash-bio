import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';
import PropTypes from 'prop-types';

const RealIgv = lazy(LazyLoader.igv);
/**
 * The Igv component is an interactive genome visualization component
 * developed by the Integrative Genomics Viewer (IGV) team. It uses an
 * example integration of igv.js and React (https://www.npmjs.com/package/igv).
 */
export default class Igv extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealIgv {...this.props} />
            </Suspense>
        );
    }
}

Igv.defaultProps = {};

Igv.propTypes = {
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
    String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome
    for details and list of supported identifiers. Note: One (but only one) of
    either genome or reference properties must be set. If both are set,
    the genome property will be ignored.
    */

    genome: PropTypes.string,

    /**
    Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome
    Note: One (but only one) of either genome or reference properties must be set. If both are set,
    the genome property will be ignored.
    */
    reference: PropTypes.object,

    /**
    Initial genomic location(s). Either a string or an array of strings.
    If an array a viewport is created for each location.
    */
    locus: PropTypes.string,

    /**
     * Minimum window size in base pairs when zooming in
     */
    minimumBases: PropTypes.number,

    /**
    Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/igvteam/igv.js/wiki/Tracks-2.0
    */
    tracks: PropTypes.array,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),
};

export const defaultProps = Igv.defaultProps;
export const propTypes = Igv.propTypes;
