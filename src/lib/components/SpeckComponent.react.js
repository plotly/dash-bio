import React, { Component } from 'react';
import PropTypes from 'prop-types';


const speckRenderer = require('../../../node_modules/speck/src/renderer.js'); 

export default class SpeckComponent extends Component {
    
    constructor(props) {
	super('props');
    }
    
    componentDidMount() {
	const canvas = this.refs.canvas;
	var r = new speckRenderer(this.refs.canvas, 200, 200); 
    }

    render() {
	const {
	    id,
	    label
	} = this.props;

	return (
		<div id={id}> Label: {label}
		<canvas ref="canvas" width={500} height={500} />
	    </div>
	);

    }

}

SpeckComponent.propTypes = {

    id: PropTypes.string,
    label: PropTypes.string,
    setProps: PropTypes.func

}
