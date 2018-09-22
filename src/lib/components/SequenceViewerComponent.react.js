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

	this.props.setProps({id: 'hey'});
	
	/*
	var onClickFunctions = []

	function update_clicks_timestamp(i, current_nclicks, current_timestamp){
	    current_nclicks[i] = current_nclicks[i] + 1;
	    current_timestamp[i] = Date.now();
	    function f() {
		return ({
		    coverage_n_clicks: current_nclicks,
		    coverage_n_clicks_timestamp: current_timestamp
		});
	    }
	    return f;

	}

	var i;
	for (i = 0; i < coverage.length; i++){
	    var current_nclicks = this.props.coverage_n_clicks;
	    var current_timestamp = this.props.coverage_n_clicks_timestamp;
	    onClickFunctions.push(update_clicks_timestamp(i, this.props.coverage_n_clicks, this.props.coverage_n_clicks_timestamp));
	}

	// update the onclick function
	var cov = coverage;
	var i;
	for(i = 0; i < coverage.length; i++){
	    cov[i] = coverage[i];
	    cov[i].onclick = onClickFunctions[i]
	}
	*/
	const options = {
	    showLineNumbers: showLineNumbers,
	    wrapAminoAcids: wrapAminoAcids,
	    charsPerLine: charsPerLine,
	    toolbar: toolbar,
	    search: search,
	    title: title,
	    sequenceMaxHeight: sequenceMaxHeight,
	    badge: badge,
	    coverage: coverage
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
    selection: PropTypes.arrayOf(PropTypes.shape({
	low: PropTypes.number,
	high: PropTypes.number,
	color: PropTypes.string
    })),
    coverage: PropTypes.arrayOf(PropTypes.shape({
	start: PropTypes.number,
	end: PropTypes.number,
	color: PropTypes.string,
	bgcolor: PropTypes.string,
	underscore: PropTypes.bool,
	tooltip: PropTypes.string,
    })),
//    coverage_n_clicks: PropTypes.arrayOf(PropTypes.number),
//    coverage_n_clicks_timestamp: PropTypes.arrayOf(PropTypes.number),
//    setProps: PropTypes.func
}
