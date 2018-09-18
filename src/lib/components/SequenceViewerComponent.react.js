import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSequenceViewer from 'react-sequence-viewer';

/**
 *
 */
export default class SequenceViewerComponent extends Component {
    render() {
	const {id, sequence,
	       showLineNumbers,
	       wrapAminoAcids,
	       charsPerLine,
	       toolbar,
	       search,
	       title,
	       sequenceMaxHeight,
	       badge} = this.props;

	const options = {
	    showLineNumbers: showLineNumbers,
	    wrapAminoAcids: wrapAminoAcids,
	    charsPerLine: charsPerLine,
	    toolbar: toolbar,
	    search: search,
	    title: title,
	    sequenceMaxHeight: sequenceMaxHeight,
	    badge: badge
	};

	const seq = this.props.sequence;
	    
	
	return (
		<div id={id}>
		<ReactSequenceViewer sequence={seq} {...options} />
		</div>
	);
    }
}

SequenceViewerComponent.propTypes = {
    id: PropTypes.string,
    sequence: PropTypes.string,
    showLineNumbers: PropTypes.bool,
    wrapAminoAcids: PropTypes.bool,
    charsPerLine: PropTypes.number,
    toolbar: PropTypes.bool,
    search: PropTypes.bool,
    title: PropTypes.string,
    sequenceMaxHeight: PropTypes.string,
    badge: PropTypes.bool,
    setProps: PropTypes.func
}
