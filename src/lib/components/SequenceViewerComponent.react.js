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

    componentDidMount() {
	const {coverage,
	       selection,
	       onMouseSelection,
	       onSubpartSelected,
	       subpartSelected,
	       mouseSelection,
	       setProps} = this.props;

	var cov = coverage;
	if(coverage) {
	    var i;
	    for(i = 0; i < cov.length; i++) {
		const v = i;
		cov[i].onclick = (e) => setProps({
		    coverageClicked: v
		});
	    }
	}

	const oms = (e) =>  {
	    console.warn("Mouse selection");
	    setProps({
		mouseSelection: e.detail
	    });
	    console.log(e.detail);
	}
	const oss = (e) => {
	    console.warn("Subpart selection");
	    setProps({
		subpartSelected: e.detail
	    });
	    console.log(e.detail);
	}

	setProps({
	    coverage: cov,
	    onMouseSelection: oms,
	    onSubpartSelected: oss
	});
    }

    render() {
	
	const id = this.props.id;
	
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
	    onMouseSelection: this.props.onMouseSelection,
	    onSubpartSelected: this.props.onSubpartSelected,
	    coverage: this.props.coverage,
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
	tooltip: PropTypes.string,
	underscore: PropTypes.bool,
	onclick: PropTypes.func
    })),
    coverageClicked: PropTypes.number,
    mouseSelection: PropTypes.string,
    subpartSelected: PropTypes.string,
    onMouseSelection: PropTypes.func,
    onSubpartSelected: PropTypes.func,
    setProps: PropTypes.func
}
