import React, {Component} from 'react';
import ReactSequenceViewer from 'react-sequence-viewer';
import {propTypes, defaultProps} from '../components/SequenceViewer.react';

export default class SequenceViewer extends Component {
    constructor(props) {
        super(props);
        this.onMouseSelection = this.onMouseSelection.bind(this);
        this.onSubpartSelected = this.onSubpartSelected.bind(this);
        this.getOnClick = this.getOnClick.bind(this);
    }

    onMouseSelection(e) {
        if (e.detail) {
            this.props.setProps({mouseSelection: e.detail});
        }
    }
    onSubpartSelected(e) {
        if (e.detail) {
            this.props.setProps({subpartSelected: e.detail});
        }
    }

    shouldComponentUpdate(nextProps, _) {
        const {
            showLineNumbers,
            wrapAminoAcids,
            charsPerLine,
            toolbar,
            search,
            sequence,
            title,
            sequenceMaxHeight,
            badge,
            coverage,
            coverageClicked,
            selection,
            legend,
        } = this.props;

        if (
            showLineNumbers !== nextProps.showLineNumbers ||
            wrapAminoAcids !== nextProps.wrapAminoAcids ||
            charsPerLine !== nextProps.charsPerLine ||
            toolbar !== nextProps.toolbar ||
            search !== nextProps.search ||
            title !== nextProps.title ||
            sequenceMaxHeight !== nextProps.sequenceMaxHeight ||
            badge !== nextProps.badge ||
            coverageClicked !== nextProps.coverageClicked ||
            legend !== nextProps.legend ||
            sequence !== nextProps.sequence
        ) {
            return true;
        }

        // go through selection
        // save some time by comparing lengths first
        if (selection.length !== nextProps.selection.length) {
            return true;
        }
        if (
            Object.keys(selection).some(
                propertyName =>
                    selection[propertyName] !==
                    nextProps.selection[propertyName]
            )
        ) {
            return true;
        }

        // otherwise, go through all of the coverage and compare
        if (
            coverage.length !== nextProps.coverage.length ||
            coverage.some((cov, i) =>
                Object.keys(cov).some(
                    propertyName =>
                        coverage[i][propertyName] !==
                        nextProps.coverage[i][propertyName]
                )
            )
        ) {
            return true;
        }

        // if everything is the same, do not update
        return false;
    }

    getOnClick(i) {
        return _ => {
            this.props.setProps({
                coverageClicked: i,
            });
        };
    }

    render() {
        const options = {
            id: this.props.id,
            selection: this.props.selection,
            setProps: this.props.setProps,
            showLineNumbers: this.props.showLineNumbers,
            wrapAminoAcids: this.props.wrapAminoAcids,
            charsPerLine: this.props.charsPerLine,
            toolbar: this.props.toolbar,
            search: this.props.search,
            title: this.props.title,
            sequenceMaxHeight: this.props.sequenceMaxHeight,
            badge: this.props.badge,
            onMouseSelection: this.onMouseSelection,
            onSubpartSelected: this.onSubpartSelected,
            legend: this.props.legend,
        };

        const coverageWithClicks = this.props.coverage.map((entry, i) => {
            return Object.assign({}, entry, {
                onclick: this.getOnClick(i),
            });
        });

        return (
            <ReactSequenceViewer
                sequence={this.props.sequence}
                coverage={coverageWithClicks}
                {...options}
            />
        );
    }
}

SequenceViewer.defaultProps = defaultProps;
SequenceViewer.propTypes = propTypes;
