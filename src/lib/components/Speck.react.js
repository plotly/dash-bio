import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { speckRenderer as SpeckRenderer,
	 speckSystem,
	 speckView,
	 speckInteractions as SpeckInteractions,
	 speckPresetViews
       } from 'speck'; 

export default class Speck extends Component {

    loadStructure(data) {

	const system = speckSystem.new();

	for(let i = 0; i < data.length; i++) {
	    // get the coordinate data
	    const a = data[i];
	    // add to the system
	    speckSystem.addAtom(system, a.symbol, a.x, a.y, a.z);
	}
	speckSystem.center(system);
	speckSystem.calculateBonds(system);

	
	const renderer = this.state.renderer;
	const view = this.props.view;  

	
	renderer.setSystem(system, view);

	// update the resolution
	renderer.setResolution(view.resolution, view.aoRes);

	this.setState({
	    refreshView: true
	}); 
    }

    loop() {
	
	if(this.state.renderer && this.props.view) {
	    if(this.state.refreshView) {
		this.state.renderer.reset();
		this.setState({
		    refreshView: false
		});
	    }
	    this.state.renderer.render(this.props.view);
	    
	}
	requestAnimationFrame(this.loop); 
    }
    
    constructor(props) {
	super(props);

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

	// initialize view if anything is supplied
	if(props.view) {
	    this.props.view = Object.assign(speckView.new(), props.view); 
	}
	
	this.state = {
	    refreshView: false,
	    renderer: null,
	    interactions: {
		buttonDown: false,
		lastX: 0.0,
		lastY: 0.0
	    }
	}

    }


    shouldComponentUpdate(nextProps, _) {
	const {view, data, presetView} = this.props;

	let needsUpdate = false;

	// update if data have changed
	if(data.length !== nextProps.data.length
	   || Object.keys(data).some(
	       propertyName =>
		   data[propertyName] !== nextProps.data[propertyName]
	   )) {

	    this.props.setProps({
		data: nextProps.data
	    }); 

	    needsUpdate = true; 
	}

	// add the appropriate preset view, if that has recently changed
	if(presetView !== nextProps.presetView) {
	    const v = Object.assign(view, speckPresetViews[nextProps.presetView]);
	    this.props.setProps({
		view: v
	    });

	    needsUpdate = true;
	} 

	// finally apply the user-supplied view parameters
	if(Object.keys(view).length !== Object.keys(nextProps.view).length
	   || Object.keys(view).some(
	       propertyName =>
		   view[propertyName] !== nextProps.view[propertyName]
	   )) {
	    const v = Object.assign(view, nextProps.view); 
	    this.props.setProps({
		view: v
	    }); 

	    needsUpdate = true; 
	}
	
	return needsUpdate; 
    }
    
    componentDidMount() {

	// add canvas, container, and renderer
	const canvas = this.canvas;
	const container = this.container;
	const resolution = 200;
	const aoResolution = 300;
	const renderer = new SpeckRenderer(canvas, resolution, aoResolution);

	this.setState({
	    renderer: renderer,
	    refreshView: true
	});
	

	// add event listeners
	// TODO: 'interactionHandler' is assigned a value but never used. (no-unused-vars)
	const interactionHandler = new SpeckInteractions(this, renderer, container);
	this.loop();
	
    }

    componentDidUpdate(_) {
	const {
	    data,
	    view
	} = this.props;

	if(view && this.state.renderer && data.length > 0) {
	    this.loadStructure(data);
	}
    }
    
    render() {
	const {
	    id,
	    view
	} = this.props;

	const divStyle = {
	    height: view.resolution,
	    width: view.resolution
	}
	
	return (
		<div id={id} ref={this.setContainerRef} style={divStyle}>
		<canvas ref={this.setCanvasRef} width={view.resolution} height={view.resolution} />
	    </div>
	);

    }

}


Speck.defaultProps = {
    view: speckView.new(),
    data: []
}


Speck.propTypes = {

    /**
     * The ID used to identify this component in Dash callbacks. 
     */ 
    id: PropTypes.string,

    /** 
     * The xyz file data; a list of atoms such that each atom
     * has a dictionary defining the x, y, and z coordinates 
     * along with the atom's symbol.
     */ 
    data: PropTypes.arrayOf(PropTypes.shape({
	symbol: PropTypes.string,
	x: PropTypes.number,
	y: PropTypes.number,
	z: PropTypes.number,
    })),

    /**
     * The option of whether or not to allow scrolling to control
     * the zoom.
     */ 
    scrollZoom: PropTypes.bool,

    /**
     * An object that determines and controls various parameters
     * related to how the molecule is displayed. 
     */
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

    /**
     * One of several pre-loaded views: default, stick-ball, toon, 
     * and licorice
     */
    presetView: PropTypes.oneOf(['default', 'stickball', 'toon', 'licorice']),
    
    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change.
     */ 
    setProps: PropTypes.func
    
}
