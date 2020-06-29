import React, {Component} from 'react';
import PropTypes from 'prop-types';

import igv from 'tmp_es6_igv';

/**
 * The Igv component is an interactive genome visualization component
 * developed by the Integrative Genomics Viewer (IGV) team. It uses an
 * example integration of igv.js and React (https://github.com/eweitz/igv.js-react).
 */
export default class Igv extends Component {
    componentDidMount() {
        var igvContainer = document.getElementById(this.props.id);
        var igvOptions = {
            genome: this.props.genome,
            locus: this.props.locus,
            reference: this.props.reference,
            minimumBases: this.props.minimumBases,
            tracks: this.props.tracks,
        };
        return igv.createBrowser(igvContainer, igvOptions);
    }

    render() {
        const {id, style} = this.props;

        return <div id={id} style={style} />;
    }
}

Igv.defaultProps = {};

Igv.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
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
     * className of the parent div
     */
    className: PropTypes.string,

    /**
    String identifier defining genome (e.g. "hg19"). See https://github.com/igvteam/igv.js/wiki/Reference-Genome
    for details and list of supported identifiers. Note: One (but only one) of
    either genome or reference properties must be set.
    */

    genome: PropTypes.string,

    /**
    Object defining reference genome. see https://github.com/igvteam/igv.js/wiki/Reference-Genome
    Note: One (but only one) of either genome or reference properties must be set.
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
};

export const defaultProps = Igv.defaultProps;
export const propTypes = Igv.propTypes;
