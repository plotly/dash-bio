import React, {Component} from 'react';
import {mergeAll, equals} from 'ramda';
import memoize from 'fast-memoize';

import {
    speckRenderer as SpeckRenderer,
    speckSystem,
    speckView,
    speckInteractions,
    speckPresetViews,
    speckElements,
} from 'speck';

import {propTypes, defaultProps} from '../components/Speck.react';

/**
 * Define private functions and variables used in the Speck component.
 **/

// Time (in milliseconds) idle before props reconciliation with external
// view is done
const PROPS_RECONCILE_DEBOUNCE_TIME = 500;

const MAX_COLOR_INDEX = 255;

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

const viewClone = view =>
    mergeAll([
        view,
        {
            rotation: new Float32Array(view.rotation),
            translation: mergeAll([view.translation]),
        },
    ]);

const viewAssign = (view1 = {}, view2 = {}) => Object.assign(view1, view2);

const viewHasEqual = function(view1) {
    const view1Str = JSON.stringify(view1);
    for (let i = 1; i < arguments.length; i++) {
        if (view1Str === JSON.stringify(arguments[i])) {
            return true;
        }
    }
    return false;
};

export default class Speck extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderer: null,
        };

        this.eventListenDestructor = () => {
            /* no-op */
        };
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
    }

    componentDidMount() {
        const {scrollZoom} = this.props;
        const {canvas, container} = this;
        const resolution = 200;
        const aoResolution = 300;
        const renderer = new SpeckRenderer(canvas, resolution, aoResolution);

        this.setState(
            {
                renderer,
            },
            this.loadStructure
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

            getTranslation: () => this.view.translation,
            setTranslation: translationObj => {
                this.view = viewAssign(this.view, {
                    translation: translationObj,
                });
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
        const {data, view, presetView} = this.props;
        const {renderer} = this.state;

        let viewInternal = this.view;
        let needsUpdate = false;

        // apply applicable preset parameters if preset has changed
        if (prevProps.presetView !== presetView) {
            viewInternal = viewAssign(
                viewInternal,
                speckPresetViews[presetView]
            );
            this.propsReconcileSchedule();
            needsUpdate = true;
        }

        // apply the user-supplied view parameters
        if (!viewHasEqual(view, prevProps.view, viewInternal)) {
            viewInternal = viewAssign(viewInternal, view);
            needsUpdate = true;
        }

        // check for changes to data
        if (!equals(data, prevProps.data)) {
            needsUpdate = true;
        }

        // perform update
        if (needsUpdate) {
            this.view = viewInternal;

            if (renderer) {
                this.loadStructure();
            }
        }
    }

    componentWillUnmount() {
        // set this.state.renderer = null to ensure all refs to renderer are
        // destroyed so garbage collector will clean up webgl contexts
        // eslint-disable-next-line react/no-direct-mutation-state
        this.state.renderer = null;
        this.eventListenDestructor();
        this.props.setProps({
            view: this.view,
        });
    }

    propsReconcile() {
        if (!equals(this.view, this.props.view)) {
            this.props.setProps({view: viewClone(this.view)});
        }
    }

    // Schedule the function "propsReconcile" to run after the amount of time
    // specified in PROPS_RECONCILE_DEBOUNCE_TIME. If a run has been scheduled
    // previously, cancel it.
    propsReconcileSchedule() {
        clearTimeout(this.propsReconcileTimeout);
        this.propsReconcileTimeout = setTimeout(
            this.propsReconcile,
            PROPS_RECONCILE_DEBOUNCE_TIME
        );
    }

    loadStructure() {
        const {data} = this.props;

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

    colorLegend() {
        const displayedSymbols = Array.from(
            new Set(this.props.data.map(({symbol}) => symbol))
        );
        const displayedElements = displayedSymbols.map(
            symbol => speckElements[symbol]
        );

        const containerStyle = {
            backgroundColor: 'white',
            width: '60px',
            height: 'fit-content',
            padding: '10px',
            position: 'absolute',
            right: '-80px',
            top: 0,
        };

        return (
            <div style={containerStyle} id="speck-color-legend">
                {displayedElements.map(element => {
                    const colorBlockStyle = {
                        backgroundColor: this.colorToRgb(element.color),
                        width: '16px',
                        height: '16px',
                        display: 'inline-block',
                        borderRadius: '50%',
                        marginRight: '20px',
                        border: '0.25px solid black',
                    };

                    const colorContainerStyle = {
                        display: 'flex',
                        alignItems: 'center',
                    };

                    return (
                        <p style={colorContainerStyle} key={element.symbol}>
                            <span style={colorBlockStyle} />
                            <span>{element.symbol}</span>
                        </p>
                    );
                })}
            </div>
        );
    }

    colorToRgb(colors) {
        const newColors = colors
            .map(color => color * MAX_COLOR_INDEX)
            .map(color => this.lightenColor(color))
            .join(', ');

        return `rgb(${newColors})`;
    }

    // In WebGL we mix original colors with white to get more lighter colors
    lightenColor(colorChannel) {
        return colorChannel * 0.5 + MAX_COLOR_INDEX * 0.5;
    }

    render() {
        const {id, loading_state, showLegend} = this.props;
        const {view} = this;

        const divStyle = {
            height: view.resolution,
            width: view.resolution,
            position: 'relative',
        };

        return (
            <div
                id={id}
                ref={this.setContainerRef}
                style={divStyle}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                <canvas
                    ref={this.setCanvasRef}
                    width={view.resolution}
                    height={view.resolution}
                />
                {showLegend && this.colorLegend()}
            </div>
        );
    }
}

Speck.defaultProps = defaultProps;
Speck.propTypes = propTypes;
