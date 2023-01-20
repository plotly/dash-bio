import React, {Component} from 'react';
import {propTypes, defaultProps} from '../components/Igv.react';
import igv from 'igv';

/**
 * The Igv component is an interactive genome visualization component
 * developed by the Integrative Genomics Viewer (IGV) team. It uses an
 * example integration of igv.js and React (https://www.npmjs.com/package/igv).
 */
export default class Igv extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    createIgvBrowser() {
        var igvContainer = this.ref.current;
        var igvOptions = {
            genome: this.props.genome,
            locus: this.props.locus,
            reference: this.props.reference,
            minimumBases: this.props.minimumBases,
            tracks: this.props.tracks && [...this.props.tracks],
        };
        return igv
            .createBrowser(igvContainer, igvOptions)
            .then(function (browser) {
                igv.browser = browser;
            });
    }

    componentDidMount() {
        this.createIgvBrowser();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.genome !== prevProps.genome ||
            this.props.minimumBases !== prevProps.minimumBases ||
            this.props.locus !== prevProps.locus ||
            this.props.reference !== prevProps.reference ||
            this.props.tracks !== prevProps.tracks ||
            this.props.loading_state !== prevProps.loading_state
        ) {
            igv.removeBrowser(igv.browser);
            this.createIgvBrowser();
        }
    }

    render() {
        const {id, style, loading_state} = this.props;

        return (
            <div
                id={id}
                style={style}
                ref={this.ref}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            />
        );
    }
}

Igv.defaultProps = defaultProps;
Igv.propTypes = propTypes;
