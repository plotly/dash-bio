import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactSequenceViewer from 'react-sequence-viewer';

// required according to react-sequence-viewer readme
import jquery from 'jquery';
window.jQuery = jquery;

/**
 *
 */
export default class SequenceViewerComponent extends Component {

    constructor(props) {
	super(props);
	this.state = {}
    }

    render() {
	const {id, sequence,
	       showLineNumbers,
	       wrapAminoAcids,
	       charsPerLine,
	       toolbar,
	       search,
	       title,
	       sequenceMaxHeight,
	       badge,
	       selection,
	       coverage,
	       setProps} = this.props;

	const options = {
	    showLineNumbers: this.props.showLineNumbers,
	    wrapAminoAcids: this.props.wrapAminoAcids,
	    charsPerLine: this.props.charsPerLine,
	    toolbar: this.props.toolbar,
	    search: this.props.search,
	    title: this.props.title,
	    sequenceMaxHeight: this.props.sequenceMaxHeight,
	    badge: this.props.badge,
	    selection: this.props.selection,
	};	
	
	const seq = this.props.sequence;
	
	return (
		<div id={id}>
		<ReactSequenceViewer sequence={seq} {...options} />
		</div>
	);
    }

    componentWillReceiveProps(nextProps){
	console.warn(this.props.selection);
	console.warn(nextProps.selection);
	if(nextProps.selection!==this.props.selection){
	    console.log("different");
	}
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
    selection: PropTypes.arrayOf(PropTypes.shape({
	low: PropTypes.number,
	high: PropTypes.number,
	color: PropTypes.string
    })),
    coverage: PropTypes.func,
    setProps: PropTypes.func
}
