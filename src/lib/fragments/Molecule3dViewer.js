import React, {Component} from 'react';
import Molecule3d from 'molecule-3d-for-react';
import {propTypes, defaultProps} from '../components/Molecule3dViewer';

export default class Molecule3dViewer extends Component {
    constructor(props) {
        super(props);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.onRenderNewData = this.onRenderNewData.bind(this);
    }

    onChangeSelection(selectedAtomIds) {
        this.props.setProps({selectedAtomIds: selectedAtomIds});
    }

    onRenderNewData(glviewer) {
        glviewer.center();
        const zoomRatio = 0.8;
        glviewer.zoom(zoomRatio);
    }

    shouldComponentUpdate(nextProps) {
        if (
            this.props.modelData !== nextProps.modelData ||
            this.props.backgroundColor !== nextProps.backgroundColor ||
            this.props.backgroundOpacity !== nextProps.backgroundOpacity ||
            this.props.styles !== nextProps.styles ||
            this.props.selectionType !== nextProps.selectionType ||
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

    render() {
        const {id, selectionType} = this.props;

        // molecule-3d-for-react requires the selection type to be
        // capitalized, but Dash typically uses all-lowercase prop values

        const capitalizedSelectionType =
            selectionType === null
                ? null
                : selectionType.charAt(0).toUpperCase() +
                  selectionType.slice(1);

        return (
            <div id={id}>
                <Molecule3d
                    {...this.props}
                    selectionType={capitalizedSelectionType}
                    onChangeSelection={this.onChangeSelection}
                    onRenderNewData={this.onRenderNewData}
                />
            </div>
        );
    }
}

Molecule3dViewer.defaultProps = defaultProps;
Molecule3dViewer.propTypes = propTypes;
