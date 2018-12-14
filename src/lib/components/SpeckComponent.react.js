import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { speckRenderer,
	 speckSystem,
	 speckView,
	 speckInteractions
       } from 'speck'; 

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


    shouldComponentUpdate(nextProps, nextState){
	const {view, data} = this.props;

	let needsUpdate = false;
	
	if(data.length != nextProps.data.length
	   || Object.keys(data).some(
	       propertyName =>
		   data[propertyName] !== nextProps.data[propertyName]
	   )){

	    this.props.setProps({
		data: nextProps.data
	    }); 

	    needsUpdate = true; 
	}
	
	if(view.length != nextProps.view.length
	   || Object.keys(view).some(
	       propertyName =>
		   view[propertyName] !== nextProps.view[propertyName]
	   )){
	    const v = Object.assign(view, nextProps.view); 
	    this.props.setProps({
		view: v
	    }); 

	    needsUpdate = true; 
	    
	}
	
	return needsUpdate; 
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
	
	// add event listeners
	const interactionHandler = new speckInteractions(this, renderer, container); 
	
	this.loop();
	
    }

    componentDidUpdate(prevProps) {
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

	let divStyle = {
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


SpeckComponent.defaultProps = {
    view: speckView.new(),
    data: []
}


SpeckComponent.propTypes = {

    id: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
	symbol: PropTypes.string,
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
    setProps: PropTypes.func
    
}
