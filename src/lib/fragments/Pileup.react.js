import React, {Component} from 'react';
import {propTypes, defaultProps} from '../components/Pileup.react';
import pileup from 'pileup';

/**
 * The Pileup component is an genome visualization component
 * developed by the the Hammerlab. It uses an
 * example integration of pileup.js and React (https://www.npmjs.com/package/pileup).
 */
export default class Pileup extends Component {
    constructor(props) {
        super(props);
        this.ref = React.createRef();
    }

    parseTracks(reference, tracks) {
        // TODO maybe move to pileup.js
        console.log(tracks);
        console.log(reference);

        var referenceTrack = {
            viz: pileup.viz.genome(),
            isReference: true,
            data: pileup.formats.twoBit({
                url: reference.url,
            }),
            name: reference.label,
        };

        // make list of pileup sources
        var sources = [referenceTrack];

        // add in optional tracks
        for (var i = 0; i < tracks.length; i++) {
            var track = tracks[i];

            var newTrack = {
                viz: pileup.viz[track.viz](),
                isReference: false,
                data: null,
                name: track.label,
            };

            // Make sure source exists and it is a valid pileup format
            // Source may not exist for scale or location tracks
            if (('source' in track) & (pileup.formats[track.source] !== null)) {
                newTrack.data = pileup.formats[track.source](
                    track.sourceOptions
                );
            }
            sources.push(newTrack);
        }
        return sources;
    }

    createPileupBrowser() {
        var pileupContainer = this.ref.current;
        var pileupOptions = {
            range: this.props.range,
            tracks: this.parseTracks(this.props.reference, this.props.tracks),
        };
        return pileup.create(pileupContainer, pileupOptions);
    }

    componentDidMount() {
        this.createPileupBrowser();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.range !== prevProps.range ||
            this.props.tracks !== prevProps.tracks
        ) {
            // TODO: may need to delete browser
            // pileup.removeBrowser(pileup.browser);
            this.createPileupBrowser();
        }
    }

    render() {
        const {id, style} = this.props;

        return <div id={id} style={style} ref={this.ref} />;
    }
}

Pileup.defaultProps = defaultProps;
Pileup.propTypes = propTypes;
