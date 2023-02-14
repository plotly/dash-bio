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
        this.glviewer = glviewer;

        glviewer.zoomTo(
            this.props.zoomTo.sel,
            this.props.zoomTo.animationDuration,
            this.props.zoomTo.fixedPath
        );

        glviewer.zoom(
            this.props.zoom.factor,
            this.props.zoom.animationDuration,
            this.props.zoom.fixedPath
        );

        glviewer.setHeight(this.props.height);
        glviewer.setWidth(this.props.width);
    }

    shouldComponentUpdate(nextProps) {
        if (
            this.props.modelData !== nextProps.modelData ||
            this.props.backgroundColor !== nextProps.backgroundColor ||
            this.props.backgroundOpacity !== nextProps.backgroundOpacity ||
            this.props.styles !== nextProps.styles ||
            this.props.selectionType !== nextProps.selectionType ||
            this.props.orbital !== nextProps.orbital ||
            this.props.shapes !== nextProps.shapes ||
            this.props.labels !== nextProps.labels ||
            this.props.zoom !== nextProps.zoom ||
            this.props.zoomTo !== nextProps.zoomTo ||
            this.props.height !== nextProps.height ||
            this.props.width !== nextProps.width ||
            this.props.style !== nextProps.style ||
            JSON.stringify(this.props.loading_state) !==
                JSON.stringify(nextProps.loading_state) ||
            (!this.props.selectedAtomIds && nextProps.selectedAtomIds) ||
            (this.props.selectedAtomIds && !nextProps.selectedAtomIds) ||
            (this.props.selectedAtomIds &&
                nextProps.selectedAtomIds &&
                this.props.selectedAtomIds.length !==
                    nextProps.selectedAtomIds.length) ||
            (this.props.selectedAtomIds &&
                nextProps.selectedAtomIds &&
                (this.props.selectedAtomIds.some(
                    (atomId) => !(atomId in nextProps.selectedAtomIds)
                ) ||
                    nextProps.selectedAtomIds.some(
                        (atomId) => !(atomId in this.props.selectedAtomIds)
                    )))
        ) {
            return true;
        }
        return false;
    }

    componentDidUpdate(prevProps) {
        if (
            (this.props.zoom !== prevProps.zoom ||
                this.props.zoomTo !== prevProps.zoomTo) &&
            this.glviewer
        ) {
            this.glviewer.zoomTo(
                this.props.zoomTo.sel,
                this.props.zoomTo.animationDuration,
                this.props.zoomTo.fixedPath
            );

            this.glviewer.zoom(
                this.props.zoom.factor,
                this.props.zoom.animationDuration,
                this.props.zoom.fixedPath
            );
        }
    }

    render() {
        const {id, selectionType, loading_state, style} = this.props;

        // molecule-3d-for-react requires the selection type to be
        // capitalized, but Dash typically uses all-lowercase prop values

        const capitalizedSelectionType =
            selectionType === null
                ? null
                : selectionType.charAt(0).toUpperCase() +
                  selectionType.slice(1);

        return (
            <div
                id={id}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
                style={style}
            >
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
