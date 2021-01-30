import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';
import PropTypes from 'prop-types';

const RealPileup = lazy(LazyLoader.pileup);
/**
 * The Pileup component is an genome visualization component
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
    range: PropTypes.object,

    /**
    Array of configuration objects defining tracks initially displayed when app launches.
    see https://github.com/hammerlab/pileup.js#usage
    */
    tracks: PropTypes.array,
};

export const defaultProps = Pileup.defaultProps;
export const propTypes = Pileup.propTypes;
