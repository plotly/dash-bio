import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Molecule2d from 'molecule-2d-for-react';
import {omit} from 'ramda';

/**
 * The Molecule2dViewer component is used to render structural
 * formulae of molecules.
 * Read more about the component here:
 * https://github.com/Autodesk/molecule-2d-for-react
 */
export default class Molecule2dViewer extends Component {
    constructor(props) {
        super(props);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.key = 0;
    }

    onChangeSelection(selectedAtomIds) {
        this.props.setProps({selectedAtomIds: selectedAtomIds});
    }

    shouldComponentUpdate(nextProps) {
        if (
            this.props.modelData !== nextProps.modelData ||
            (!this.props.selectedAtomIds && nextProps.selectedAtomIds) ||
            (this.props.selectedAtomIds && !nextProps.selectedAtomIds) ||
            (this.props.selectedAtomIds &&
                nextProps.selectedAtomIds &&
                this.props.selectedAtomIds.length !==
                    nextProps.selectedAtomIds.length) ||
            (this.props.selectedAtomIds &&
                nextProps.selectedAtomIds &&
                (this.props.selectedAtomIds.some(
                    atomId => !(atomId in nextProps.selectedAtomIds)
                ) ||
                    nextProps.selectedAtomIds.some(
                        atomId => !(atomId in this.props.selectedAtomIds)
                    )))
        ) {
            return true;
        }
        return false;
    }

    componentDidUpdate(prevProps) {
        const {modelData} = this.props;

        if (
            modelData &&
            prevProps.modelData &&
            Object.keys(modelData).some(
                propertyName =>
                    modelData[propertyName].length !==
                    prevProps.modelData[propertyName].length
            )
        ) {
            this.forceUpdate();
        }
    }

    render() {
        this.key++;
        // increment key to force remount

        return (
            <div id={this.props.id}>
                <Molecule2d
                    key={this.key}
                    onChangeSelection={this.onChangeSelection}
                    {...omit(['id', 'setProps'], this.props)}
                />
            </div>
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
