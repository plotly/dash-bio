import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {GenomeViewer as ReactGenomeViewer} from 'react-genome-viewer';

/**
 *
 */
export default class GenomeViewer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {trackdata, trackindex, genomedata} = this.props;
        return (
            <ReactGenomeViewer
                trackdata={trackdata}
                trackindex={trackindex}
                genomedata={genomedata}
            />
        );
    }
}

GenomeViewer.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of
     * the properties change.
     */
    setProps: PropTypes.func,
    genomedata: PropTypes.string,
    trackdata: PropTypes.string,
    trackindex: PropTypes.string,
    range: PropTypes.string,
};
