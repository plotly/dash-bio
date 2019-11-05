import React, {Component} from 'react';
import Molecule2d from 'molecule-2d-for-react';
import {omit} from 'ramda';
import {propTypes, defaultProps} from '../components/Molecule2dViewer.react';

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

Molecule2dViewer.defaultProps = defaultProps;
Molecule2dViewer.propTypes = propTypes;
