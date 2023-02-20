import React, {Component} from 'react';
import {FornaContainer as PreFornaContainer} from 'fornac';
import * as R from 'ramda';
import {propTypes, defaultProps} from '../components/FornaContainer.react';

export default class FornaContainer extends Component {
    constructor(props) {
        super(props);
        this.renderNewSequences = this.renderNewSequences.bind(this);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        const {
            height,
            width,
            nodeFillColor,
            colorScheme,
            customColors,
            allowPanningAndZooming,
            hoverPattern,
        } = this.props;

        this._fornaContainer = new PreFornaContainer(
            this.containerRef.current,
            {
                initialSize: [width, height],
                allowPanningAndZooming: allowPanningAndZooming,
                hoverPattern: hoverPattern,
            }
        );
        // initialize the correct colors
        this._fornaContainer.addCustomColors(customColors);
        this._fornaContainer.changeColorScheme(colorScheme);

        this.renderNewSequences();

        if (nodeFillColor !== undefined) {
            this._fornaContainer.setOutlineColor(nodeFillColor);
        }
    }

    componentDidUpdate() {
        this.renderNewSequences();
    }

    renderNewSequences() {
        const {sequences} = this.props;

        if (this._fornaContainer) {
            this._fornaContainer.clearNodes();

            sequences.forEach((seq) => {
                const unpackedOptions = Object.assign({}, seq.options, {
                    sequence: seq.sequence,
                    structure: seq.structure,
                });
                this._fornaContainer.addRNA(seq.structure, unpackedOptions);
            });
        }
    }

    shouldComponentUpdate(nextProps) {
        const {sequences, colorScheme, hoverPattern, loading_state} =
            this.props;

        if (!R.equals(sequences, nextProps.sequences)) {
            return true;
        }

        if (nextProps.hoverPattern !== hoverPattern) {
            this._fornaContainer.setHoverPattern(nextProps.hoverPattern);
            return true;
        }

        this._fornaContainer.addCustomColors(nextProps.customColors);
        this._fornaContainer.changeColorScheme(colorScheme);

        if (nextProps.nodeFillColor !== undefined) {
            this._fornaContainer.setOutlineColor(nextProps.nodeFillColor);
        }

        if (
            JSON.stringify(loading_state) !==
            JSON.stringify(nextProps.loading_state)
        ) {
            return true;
        }

        return false;
    }

    render() {
        return (
            <div
                id={this.props.id}
                ref={this.containerRef}
                style={{outline: 'none'}}
                data-dash-is-loading={
                    (this.props.loading_state &&
                        this.props.loading_state.is_loading) ||
                    undefined
                }
            />
        );
    }
}

FornaContainer.defaultProps = defaultProps;
FornaContainer.propTypes = propTypes;
