import React, { Component } from 'react';
import PropTypes from 'prop-types';


const speckRenderer = require('../speck/src/renderer.js'); 
const speckSystem = require('../speck/src/system.js');
const speckView = require('../speck/src/view.js');
const speckInteractions = require('../speck/src/interactions.js');

export default class SpeckComponent extends Component {

    loadStructure(data) {
	var system = speckSystem.new();
	for(var i = 0; i < data.length; i++) {
	    // get the coordinate data
	    var a = data[i];

	    // add to the system
	    speckSystem.addAtom(system, a.symbol, a.x, a.y, a.z);
	}
	speckSystem.center(system);
	// bonds are calculated based on whether the distance between
	// two adjacent atoms is smaller than some function of the
	// maximum atomic radius
	speckSystem.calculateBonds(system);
	// the view refers to the parameters of, e.g., atom shade, etc.

	const renderer = this.state.renderer;
	const view = this.props.view;  

	const presets = {
	    'default': {
		'atomScale': 0.6,
		'relativeAtomScale': 1.0,
		'atomShade': 0.5,
		'bonds': true,
		'bondScale': 0.5,
		'bondThreshold': 1.2,
		'bondShade': 0.5,
		'ao': 0.75,
		'brightness': 0.5,
		'aoRes': 256,
		'spf': 32,
		'dofStrength': 0.0, 
		'dofPosition': 0.5
	    },
	    'ball-and-stick': {
		'atomScale': 0.24,
		'relativeAtomScale': 0.64,
		'atomShade': 0.5,
		'bonds': true,
		'bondScale': 0.5,
		'bondThreshold': 1.2,
		'bondShade': 0.5,
		'ao': 0.75,
		'brightness': 0.5,
		'aoRes': 256,
		'spf': 32,
		'dofStrength': 0.0,
		'dofPosition': 0.5
	    },
	    'toon': {
		'atomScale': 0.24,
		'relativeAtomScale': 0.64,
		'atomShade': 0.5,
		'bonds': true,
		'bondScale': 0.5,
		'bondThreshold': 1.2,
		'bondShade': 0.5,
		'ao': 0.0,
		'brightness': 0.5,
		'aoRes': 256,
		'spf': 0,
		'dofStrength': 0.0,
		'dofPositon': 0.5
	    },
	    'licorice': {
		'atomScale': 0.10,
		'relativeAtomScale': 0.0,
		'atomShade': 0.5,
		'bonds': true,
		'bondScale': 1.0,
		'bondThreshold': 1.2,
		'bondShade': 0.5,
		'ao': 0.75,
		'brightness': 0.5,
		'aoRes': 256,
		'spf': 32,
		'dofStrength': 0.0,
		'dofPosition': 0.5
	    }
	}
	
	renderer.setSystem(system, view);
	// update the resolution
	renderer.setResolution(view.resolution, view.aoRes);

	this.setState({
	    refreshView: true
	}); 
    }

    loop() {
	if(this.state.refreshView) {
	    this.state.renderer.reset();
	    this.setState({
		refreshView: false
	    });
	}
	if(this.state.renderer){
	    this.state.renderer.render(this.props.view);
	}
	requestAnimationFrame(this.loop); 
    }
    
    constructor(props) {
	super(props);
	console.log(this.props);

	// setting refs in this way to allow for easier updating to
	// react 16
	this.setCanvasRef = (e) => {
	    this.canvas = e;
	}
	this.setContainerRef = (e) => {
	    this.container = e;
	}
	this.loop = this.loop.bind(this);
	this.loadStructure = this.loadStructure.bind(this);

	this.state = {
	    refreshView: false,
	    renderer: null
	}
    }
    
    componentDidMount() {
	const {
	    view,
	    data,
	    setProps
	} = this.props; 

	// add canvas, container, and renderer
	const canvas = this.canvas;
	const container = this.container;
	const renderer = new speckRenderer(canvas, 200, 300);

	this.setState({
	    renderer: renderer,
	    refreshView: true
	});

	// add initial view
	let v = speckView.new(); 
	setProps({
	    view: v,
	});
	
	// add event listeners
	var interactionHandler = new speckInteractions(this, renderer, container);

	this.loop();
	
    }

    componentWillReceiveProps() {
	const {
	    data,
	    view
	} = this.props;
	if(view){
	    this.loadStructure(data);
	}
    }
    
    render() {
	const {
	    id
	} = this.props;


	return (
		<div id={id} ref={this.setContainerRef}>
		<canvas ref={this.setCanvasRef} width={500} height={500} />
	    </div>
	);

    }

}

SpeckComponent.propTypes = {

    id: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
	x: PropTypes.number,
	y: PropTypes.number,
	z: PropTypes.number,
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
	rotation: PropTypes.arrayOf(PropTypes.number),
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
    ok: PropTypes.string,
    interactions: PropTypes.shape({
	buttonDown: PropTypes.bool,
	lastX: PropTypes.number,
	lastY: PropTypes.number
    }),
    setProps: PropTypes.func,
    

}
B
