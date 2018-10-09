import React, { Component } from 'react';
import PropTypes from 'prop-types';


const speckRenderer = require('../speck/src/renderer.js'); 
const speckSystem = require('../speck/src/system.js');
const speckView = require('../speck/src/view.js');

export default class SpeckComponent extends Component {

    loadStructure(data, renderer, view) {
	var system = speckSystem.new();
	for(var i = 0; i < data.length; i++) {
	    // get the coordinate data
	    var a = data[i];
	    var x = a['x'];
	    var y = a['y'];
	    var z = a['z'];

	    // add to the system
	    speckSystem.addAtom(system, a.symbol, x, y, z);
	}
	speckSystem.center(system);
	// bonds are calculated based on whether the distance between
	// two adjacent atoms is smaller than some function of the
	// maximum atomic radius
	speckSystem.calculateBonds(system);
	// the view refers to the parameters of, e.g., atom shade, etc.
	renderer.setSystem(system, view);
    }

    
    constructor(props) {
	super('props');
	var system = speckSystem.new();
	this.loadStructure = this.loadStructure.bind(this);
    }
    
    componentDidMount() {
	const {data,
	       view} = this.props;
	const canvas = this.refs.canvas;

	var renderer = new speckRenderer(this.refs.canvas, 200, 200);

	this.props.setProps({
	    view: speckView.new()
	})
	renderer.initialize();
	console.warn(view);
	this.loadStructure(data, renderer, view);
    }

    render() {
	const {
	    id,
	    label,
	    view
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
    data: PropTypes.arrayOf(PropTypes.shape({
	x: PropTypes.number,
	y: PropTypes.number,
	z: PropTypes.number,
	symbol: PropTypes.string
    })),
    view: PropTypes.shape({
	aspect: PropTypes.number,
	zoom: PropTypes.number,
	translation: PropTypes.shape({
	    x: PropTypes.number,
	    y: PropTypes.number,
	}),
	atomScale: PropTypes.number,
	relativeAtomScale: PropTypes.number,
	bondScale: PropTypes.number,
	rotation: PropTypes.func,
	ao: PropTypes.number,
	aoRes: PropTypes.number,
	brightness: PropTypes.number,
	outline: PropTypes.number,
	spf: PropTypes.number,
	bonds: PropTypes.bool,
	bondThreshold: PropTypes.number,
	bondShade: PropTypes.number,
	atomShade: PropTypes.number,
	resolution: PropTypes.number,
	dofStrength: PropTypes.number,
	dofPosition: PropTypes.number,
	fxaa: PropTypes.number
    }),
    setProps: PropTypes.func,
    

}
