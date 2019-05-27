import React, {Component} from 'react';
import PropTypes from 'prop-types';
import memoize from 'fast-memoize';

import {
    speckRenderer as SpeckRenderer,
    speckSystem,
    speckView,
    speckInteractions,
    speckPresetViews,
} from 'speck';



/**
 * Define private functions used in the Speck component.
 **/

const generateSystem = memoize(data => {
    const system = speckSystem.new();

    for (let i = 0; i < data.length; i++) {
        // get the coordinate data
        const a = data[i];
        // add to the system
        speckSystem.addAtom(system, a.symbol, a.x, a.y, a.z);
    }

    speckSystem.center(system);
    speckSystem.calculateBonds(system);
    return system;
});

const viewClone = view => ({
    aspect: view.aspect,
    zoom: view.zoom,
    translation: {
        x: view.translation.x,
        y: view.translation.y,
    },
    atomScale: view.atomScale,
    relativeAtomScale: view.relativeAtomScale,
    bondScale: view.bondScale,
    rotation: new Float32Array(view.rotation),
    ao: view.ao,
    aoRes: view.aoRes,
    brightness: view.brightness,
    outline: view.outline,
    spf: view.spf,
    bonds: view.bonds,
    bondThreshold: view.bondThreshold,
    bondShade: view.bondShade,
    atomShade: view.atomShade,
    resolution: view.resolution,
    dofStrength: view.dofStrength,
    dofPosition: view.dofPosition,
    fxaa: view.fxaa,
});

const scAssign = (prop1, prop2) =>
    prop2 === undefined ? prop1 : prop2;

const viewAssign = (view1 = {}, view2 = {}) => ({
    aspect: scAssign(view1.aspect, view2.aspect),
    zoom: scAssign(view1.zoom, view2.zoom),
    translation: view2.translation || view1.translation,
    atomScale: scAssign(view1.atomScale, view2.atomScale),
    relativeAtomScale: scAssign(view1.relativeAtomScale, view2.relativeAtomScale),
    bondScale: scAssign(view1.bondScale, view2.bondScale),
    rotation: view2.rotation || view1.rotation,
    ao: scAssign(view1.ao, view2.ao),
    aoRes: scAssign(view1.aoRes, view2.aoRes),
    brightness: scAssign(view1.brightness, view2.brightness),
    outline: scAssign(view1.outline, view2.outline),
    spf: scAssign(view1.spf, view2.spf),
    bonds: scAssign(view1.bonds, view2.bonds),
    bondThreshold: scAssign(view1.bondThreshold, view2.bondThreshold),
    bondShade: scAssign(view1.bondShade, view2.bondShade),
    atomShade: scAssign(view1.atomShade, view2.atomShade),
    resolution: scAssign(view1.resolution, view2.resolution),
    dofStrength: scAssign(view1.dofStrength, view2.dofStrength),
    dofPosition: scAssign(view1.dofPosition, view2.dofPosition),
    fxaa: scAssign(view1.fxaa, view2.fxaa),
});

const viewEqual = function(view1, view2) {
    const view1Str = JSON.stringify(view1);
    const argLength = arguments.length;
    if(argLength === 2) {
        return view1Str === JSON.stringify(view2);
    }
    else {
        for(let i = 1; i < argLength; i++) {
            if(view1Str === JSON.stringify(arguments[i])) {
                return true;
            }
        }
        return false;
    }
}

// Assume that view2 will never have a property that view1 does not have
// const viewDiff = (view1, view2) => {
//     const view1Keys = Object.keys(view1);
//     const outputObj = {};
//     for(let i = 0; i < view1Keys.length; i++) {
//         const key = view1Keys[i];
//         if((typeof view1[key] !== 'object') && (view1[key] !== view2[key])) {
//             outputObj[key] = view2[key];
//         }
//     }

//     return outputObj;
// }

// const clone = obj => JSON.parse(JSON.stringify(obj));



/**
 * The Speck component is a WebGL-based 3D molecule renderer.
 * Read more about the component here:
 * https://github.com/wwwtyro/speck
 **/
export default class Speck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderer: null,
        };

        this.eventListenDestructor = () => {/* no-op */};
        this.refreshView = false;
        this.propsReconcileTimeout = null;

        this.view = viewAssign(speckView.new(), props.view);
        this.props.setProps({
            view: viewClone(this.view),
        });

        // setting refs in this way to allow for easier updating to
        // react 16
        this.setCanvasRef = e => {
            this.canvas = e;
        };
        this.setContainerRef = e => {
            this.container = e;
        };

        this.loop = this.loop.bind(this);
        this.loadStructure = this.loadStructure.bind(this);
        this.propsReconcile = this.propsReconcile.bind(this);
        this.propsReconcileSchedule = this.propsReconcileSchedule.bind(this);

        window.x = this;
    }

    componentDidMount() {
        const {data, scrollZoom} = this.props;
        const {canvas, container} = this;
        const resolution = 200;
        const aoResolution = 300;
        const renderer = new SpeckRenderer(canvas, resolution, aoResolution);

        this.refreshView = true;
        this.setState(
            {
                renderer,
            },
            () => this.loadStructure(this.props.data)
        );

        // add event listeners
        this.eventListenDestructor = speckInteractions({
            scrollZoom,
            container,

            getRotation: () => this.view.rotation,
            setRotation: rotationObj => {
                this.view = viewAssign(this.view, {rotation: rotationObj});
                this.propsReconcileSchedule();
            },

            getZoom: () => this.view.zoom,
            setZoom: zoomVal => {
                this.view = viewAssign(this.view, {zoom: zoomVal});
                this.propsReconcileSchedule();
            },

            refreshView: () => (this.refreshView = true),
        });

        this.loop();
    }

    componentDidUpdate(prevProps) {
        const {setProps, data, view, presetView} = this.props;
        const {renderer} = this.state;

        let viewInternal = this.view;
        let needsUpdate = false;

        // apply applicable preset parameters if preset has changed
        if (prevProps.presetView !== presetView) {
            viewInternal = viewAssign(viewInternal, speckPresetViews[presetView]);
            needsUpdate = true;
        }

        // apply the user-supplied view parameters
        if (!viewEqual(view, prevProps.view, viewInternal)) {
            viewInternal = viewAssign(viewInternal, view);
            needsUpdate = true;
        }

        // perform update
        if (needsUpdate) {
            this.view = viewInternal;
            if (renderer) {
                this.loadStructure(data);
            }
        }
    }

    componentWillUnmount() {
        // set this.state.renderer = null to ensure all refs to renderer are
        // destroyed so garbage collector will clean up webgl contexts
        this.state.renderer = null;
        this.eventListenDestructor();
        this.props.setProps({
            view: this.view,
        });
    }

    propsReconcile() {
        if(!viewEqual(this.view, this.props.view)) {
            this.props.setProps({view: viewClone(this.view)});
        }
    }

    propsReconcileSchedule() {
        clearTimeout(this.propsReconcileTimeout);
        this.propsReconcileTimeout = setTimeout(this.propsReconcile, 500);
    }

    loadStructure(data) {
        // avoid trying to load an empty system
        if (data.length === 0) {
            return;
        }

        const {renderer} = this.state;
        const {view} = this;
        const system = generateSystem(data);

        renderer.setSystem(system, view);

        // update the resolution
        renderer.setResolution(view.resolution, view.aoRes);

        this.refreshView = true;
    }

    loop() {
        if (this.state.renderer && this.view) {
            if (this.refreshView) {
                this.state.renderer.reset();
                this.refreshView = false;
            }
            this.state.renderer.render(this.view);
        }
        requestAnimationFrame(this.loop);
    }

    render() {
        const {id} = this.props;
        const {view} = this;

        const divStyle = {
            height: view.resolution,
            width: view.resolution,
        };

        return (
            <div id={id} ref={this.setContainerRef} style={divStyle}>
                <canvas
                    ref={this.setCanvasRef}
                    width={view.resolution}
                    height={view.resolution}
                />
            </div>
        );
    }
}

Speck.defaultProps = {
    view: speckView.new(),
    data: [],
};

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

    data: PropTypes.arrayOf(
        PropTypes.shape({
            symbol: PropTypes.string,
            x: PropTypes.number,
            y: PropTypes.number,
            z: PropTypes.number,
        })
    ),

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
        rotation: PropTypes.shape({}),
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
        fxaa: PropTypes.number,
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

    setProps: PropTypes.func,
};
