import PropTypes from 'prop-types';
import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';

const RealMolecule2dViewer = lazy(LazyLoader.molecule2dViewer);

/**
 * The Molecule2dViewer component is used to render structural
 * formulae of molecules.
 * Read more about the component here:
 * https://github.com/Autodesk/molecule-2d-for-react
 */
export default class Molecule2dViewer extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealMolecule2dViewer {...this.props} />
            </Suspense>
        );
    }
}

Molecule2dViewer.defaultProps = {
    width: 500,
    height: 500,
    modelData: {
        nodes: [],
        links: [],
    },
};

Molecule2dViewer.propTypes = {
    /**
     * The ID used to identify this component in callbacks.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever properties change.
     */
    setProps: PropTypes.func,

    /**
     * The selected atom IDs.
     */
    selectedAtomIds: PropTypes.arrayOf(PropTypes.number),

    /**
     * The width of the SVG element.
     */
    width: PropTypes.number,

    /**
     * The height of the SVG element.
     */
    height: PropTypes.number,

    /**
     * Description of the molecule to display.
     */
    modelData: PropTypes.shape({
        nodes: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                atom: PropTypes.string,
            })
        ),
        links: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                source: PropTypes.number | PropTypes.shape,
                target: PropTypes.number | PropTypes.shape,
                bond: PropTypes.number,
                strength: PropTypes.number,
                distance: PropTypes.number,
            })
        ),
    }),
};

export const defaultProps = Molecule2dViewer.defaultProps;
export const propTypes = Molecule2dViewer.propTypes;
