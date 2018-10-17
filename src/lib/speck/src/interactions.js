"use strict";
var speckView = require('./view.js');

module.exports = function(component, renderer, container) {

    component.props.setProps({
	interactions: {
	    buttonDown: false,
	    lastX: 0.0,
	    lastY: 0.0
	}
    });
    
    container.addEventListener("mousedown", (e) => {
	if(e.button == 0) {
	    if(component.props.interactions){
		var tmp_interactions = component.props.interactions;
		tmp_interactions.buttonDown = true;
		// TODO determine behavior when setProps is not defined
		// (create a function in SpeckComponent that will take
		// a dictionary like below)
		component.props.setProps({
		    interactions: tmp_interactions
		});
	    }
	}
    });

    container.addEventListener("mouseup", (e) => {
	if(e.button == 0) {
	    if(component.props.interactions){
		var tmp_interactions = component.props.interactions;
		tmp_interactions.buttonDown = false;
		component.props.setProps({
		    interactions: tmp_interactions
		});
	    }
	}
    });

    container.addEventListener("mousemove", (e) => {

	if(component.props.interactions){
	    var tmp_interactions = component.props.interactions;
	    if(!tmp_interactions.buttonDown){
		return;
	    }
	    var dx = e.clientX - tmp_interactions.lastX;
	    var dy = e.clientY - tmp_interactions.lastY;
	    if(dx == 0 && dy == 0) {
		return;
	    }

	    tmp_interactions.lastX = e.clientX;
	    tmp_interactions.lastY = e.clientY;

	    component.props.setProps({
		interactions: tmp_interactions
	    });

	    speckView.rotate(component.props.view, dx, dy);
	}
    }); 
}
