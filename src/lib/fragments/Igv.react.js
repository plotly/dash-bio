import React, {Component} from 'react';
import {propTypes, defaultProps} from '../components/Igv.react';
import igv from 'igv';

/**
 * The Igv component is an interactive genome visualization component
 * developed by the Integrative Genomics Viewer (IGV) team. It uses an
 * example integration of igv.js and React (https://www.npmjs.com/package/igv).
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
        return igv
            .createBrowser(igvContainer, igvOptions)
            .then(function(browser) {
                igv.browser = browser;
            });
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.genome !== prevProps.genome ||
            this.props.minimumBases !== prevProps.minimumBases ||
            this.props.locus !== prevProps.locus ||
            this.props.reference !== prevProps.reference ||
            this.props.tracks !== prevProps.tracks
        ) {
            igv.removeAllBrowsers();

            this.igvContainer = document.getElementById(this.props.id);
            this.igvOptions = {
                genome: this.props.genome,
                locus: this.props.locus,
                reference: this.props.reference,
                minimumBases: this.props.minimumBases,
                tracks: this.props.tracks,
            };
            igv.createBrowser(this.igvContainer, this.igvOptions).then(function(
                browser
            ) {
                igv.browser = browser;
            });
        }
    }

    render() {
        const {id, style} = this.props;

        return <div id={id} style={style} />;
    }
}

Igv.defaultProps = defaultProps;
Igv.propTypes = propTypes;
