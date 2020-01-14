import PropTypes from 'prop-types';
import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';

import {speckView} from 'speck';

const RealSpeck = lazy(LazyLoader.speck);

/**
 * The Speck component is a WebGL-based 3D molecule renderer.
 * Read more about the component here:
 * https://github.com/wwwtyro/speck
 **/
export default class Speck extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealSpeck {...this.props} />
            </Suspense>
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

export const defaultProps = Speck.defaultProps;
export const propTypes = Speck.propTypes;
