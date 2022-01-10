import PropTypes from 'prop-types';
import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';

const RealMolecule3dViewer = lazy(LazyLoader.molecule3dViewer);

/**
 * The Molecule3dViewer component is used to render schematic diagrams
 * of biomolecules. It can display ribbon-structure diagrams, or
 * render atoms in the molecule as sticks or spheres.
 * Read more about the component here:
 * https://github.com/Autodesk/molecule-3d-for-react
 */
export default class Molecule3dViewer extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealMolecule3dViewer {...this.props} />
            </Suspense>
        );
    }
}

Molecule3dViewer.defaultProps = {
    selectionType: 'atom',
    backgroundColor: '#FFFFFF',
    backgroundOpacity: 0,
    zoom: {
        factor: 0.8,
        animationDuration: 0,
        fixedPath: false,
    },
    zoomTo: {
        sel: {},
        animationDuration: 0,
        fixedPath: false,
    },
    style: {
        height: 500,
        width: 500,
    },
};

Molecule3dViewer.propTypes = {
    /**
     * The ID used to identify this component in callbacks
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever properties change
     */
    setProps: PropTypes.func,

    /**
     * The selection type - may be atom, residue or chain
     */
    selectionType: PropTypes.oneOf(['atom', 'residue', 'chain']),

    /**
     * Property to change the background color of the molecule viewer
     */
    backgroundColor: PropTypes.string,

    /**
     * Property to change the background opacity - ranges from 0 to 1
     */
    backgroundOpacity: PropTypes.number,

    /**
     * Property that can be used to change the representation of
     * the molecule. Options include sticks, cartoon and sphere
     */
    styles: PropTypes.arrayOf(
        PropTypes.shape({
            color: PropTypes.string,
            visualization_type: PropTypes.oneOf(['cartoon', 'sphere', 'stick']),
        })
    ),

    /**
     * The data that will be used to display the molecule in 3D
     * The data will be in JSON format
     * and should have two main dictionaries - atoms, bonds
     */
    modelData: PropTypes.shape({
        atoms: PropTypes.array,
        bonds: PropTypes.array,
    }),

    /**
     * Property to either show or hide labels
     */
    atomLabelsShown: PropTypes.bool,

    /**
     * Property that stores a list of all selected atoms
     */
    selectedAtomIds: PropTypes.array,

    /**
     * Labels corresponding to the atoms of the molecule.
     * Each label has a `text` field, a string containing the label content,
     * and can have many other styling fields as described in
     * https://3dmol.csb.pitt.edu/doc/types.html#LabelSpec
     */
    labels: PropTypes.arrayOf(PropTypes.object),

    /**
     * Add an isosurface from volumetric data provided in the `cube_file`
     */
    orbital: PropTypes.exact({
        /**
         * The filepath containing raw volumetric data for vertex coloring
         */
        cube_file: PropTypes.string,
        /**
         * The isovalue to draw the surface at
         */
        iso_val: PropTypes.number,
        /**
         * Transparency of the surface, between 0 and 1
         */
        opacity: PropTypes.number,
        /**
         * Color for the positive value of the isosurface orbital
         */
        positiveVolumetricColor: PropTypes.string,
        /**
         * Color for the negative value of the isosurface orbital
         */
        negativeVolumetricColor: PropTypes.string,
    }),

    /**
     * Zoom the current view by a constant factor, with optional parameters
     * to modify the duration and motion of the zoom animation.
     */
    zoom: PropTypes.exact({
        /**
         * Magnification factor. Values greater than 1 will zoom,
         * in, less than one will zoom out. Default 2.
         */
        factor: PropTypes.number,
        /**
         * An optional parameter that denotes the duration of a
         * zoom animation, in milliseconds.
         */
        animationDuration: PropTypes.number,
        /**
         * If true, animation is constrained to requested motion,
         * overriding updates that happen during the animation.
         */
        fixedPath: PropTypes.bool,
    }),

    /**
     * Zoom to center of atom selection.
     */
    zoomTo: PropTypes.exact({
        /**
         * Selection specification specifying model and atom properties
         * to select. Default: all atoms in viewer.
         */
        sel: PropTypes.exact({
            /**
             * Chain that the residue is located on.
             */
            chain: PropTypes.string,
            /**
             * The index value used to identify the residue;
             * residues are numbered sequentially starting from 1.
             */
            resi: PropTypes.number,
        }),
        /**
         * An optional parameter that denotes the duration of a zoom animation
         * , in milliseconds.
         */
        animationDuration: PropTypes.number,
        /**
         * If true, animation is constrained to requested motion,
         * overriding updates that happen during the animation.
         */
        fixedPath: PropTypes.bool,
    }),

    /**
     * Add a predefined renderable shape objects to the molecule.
     * Valid shape types are Arrow, Sphere, and Cylinder.
     */
    shapes: PropTypes.arrayOf(PropTypes.object),

    /**
     * The height (in px) of the container
     */
    height: PropTypes.number,

    /**
     * The width (in px) of the container
     */
    width: PropTypes.number,

    /**
     * Generic style overrides on the plot div
     */
    style: PropTypes.object,

    /**
     * Callback to re-render molecule viewer
     * when modelData is changed
     */
    onRenderNewData: PropTypes.func,

    /**
     * Callback to change append selectedAtomIds
     * when a selection is made
     */
    onChangeSelection: PropTypes.func,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),
};

export const defaultProps = Molecule3dViewer.defaultProps;
export const propTypes = Molecule3dViewer.propTypes;
