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
     * labels corresponding to the atoms of the molecule
     */
    labels: PropTypes.array,

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
};

export const defaultProps = Molecule3dViewer.defaultProps;
export const propTypes = Molecule3dViewer.propTypes;
