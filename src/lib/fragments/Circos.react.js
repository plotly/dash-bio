import React, {Component} from 'react';
import CircosJS from 'circos';
import {propTypes, defaultProps} from '../components/Circos.react';

/**
 * Dash Circos is a library used to analyze and interpret
 * data using a circular layout, based on the popular
 * 'Circos' graph. This Dash Bio component is a useful tool
 * for showcasing relationships bewtween data/datasets in a
 * beautiful way. Please checkout the Dash Bio repository
 * on github to learn more about this API.
 */
export default class Circos extends Component {
    constructor(props) {
        super(props);
        this.circos = null;
        this.configCircos = this.configCircos.bind(this);
        this.setEvent = this.setEvent.bind(this);
        this.setColor = this.setColor.bind(this);
        this.setToolTip = this.setToolTip.bind(this);

        this.stopScroll = this.stopScroll.bind(this);
        this.setStopScroll = this.setStopScroll.bind(this);

        this.formatChordToolTip = this.formatChordToolTip.bind(this);
        this.generateHoverDataBlock = this.generateHoverDataBlock.bind(this);
    }

    stopScroll(e) {
        e.preventDefault();
    }

    setStopScroll(stop) {
        if (stop) {
            this.ref.addEventListener('wheel', this.stopScroll);
        } else {
            this.ref.removeEventListener('wheel', this.stopScroll);
        }
    }

    setEvent(setProps, index) {
        /**
         * Used to set a click or hover event on tracks/layout that will show annotations for the circos grpah.
         **/

        if (typeof this.props.selectEvent !== 'undefined') {
            if (this.props.selectEvent[index] === 'both') {
                return {
                    'click.alert': datum => {
                        setProps({
                            eventDatum: datum,
                        });
                    },
                    'mouseover.alert': datum => {
                        setProps({
                            eventDatum: datum,
                        });
                    },
                };
            } else if (this.props.selectEvent[index] === 'hover') {
                return {
                    'mouseover.alert': datum => {
                        setProps({
                            eventDatum: datum,
                        });
                    },
                };
            } else if (this.props.selectEvent[index] === 'click') {
                return {
                    'click.alert': datum => {
                        setProps({
                            eventDatum: datum,
                        });
                    },
                };
            }
        }
        return {};
    }

    setColor(configApply) {
        /**
         * Allows user to specify a color prop, that will iterate through the colors
         * in the dataset provided, and apply them directly to the tracks/layout specified
         * by ID.
         */
        if (typeof configApply.color !== 'undefined') {
            if (typeof configApply.color.name !== 'undefined') {
                var colorName = configApply.color.name;
                configApply.color = d => d[colorName];
            } else if (typeof configApply.color.conditional !== 'undefined') {
                var condColor = configApply.color.conditional;
                configApply.color = d => {
                    let returnedColor;
                    for (var i = 0; i < condColor.value.length; i++) {
                        if (
                            d[condColor.end] - d[condColor.start] >
                            condColor.value[i]
                        ) {
                            returnedColor = condColor.color[i];
                            break;
                        }
                    }
                    return returnedColor;
                };
            }
        }
    }

    generateHoverDataBlock(source, target, label, displayValue) {
        const final_val = displayValue ? source.value : source.end;

        return (
            '<h3>' +
            source[label] +
            ' ➤ ' +
            target[label] +
            ': ' +
            final_val +
            '</h3>'
        );
    }

    formatChordToolTip(bidirectional, label, displayValue) {
        return d => {
            // when bidirectional is false
            let partialToolTip = this.generateHoverDataBlock(
                d.source,
                d.target,
                label,
                displayValue
            );
            if (bidirectional) {
                partialToolTip += this.generateHoverDataBlock(
                    d.target,
                    d.source,
                    label,
                    displayValue
                );
            }
            return partialToolTip;
        };
    }

    setToolTip(configApply) {
        /**
         * Set the tool tip event handler. It allows the user to specify what data they want
         * to show on annotation click or hover
         */
        if (typeof configApply.tooltipContent !== 'undefined') {
            if (typeof configApply.tooltipContent.name !== 'undefined') {
                if (configApply.tooltipContent.name === 'all') {
                    configApply.tooltipContent = d => {
                        var contents = '';
                        for (var key in d) {
                            var keyUpper =
                                key.charAt(0).toUpperCase() + key.slice(1);
                            contents =
                                '<p>' +
                                keyUpper +
                                ' : ' +
                                d[key] +
                                '</p>' +
                                contents;
                        }
                        return '<p>' + contents + '</p>';
                    };
                } else {
                    var toolName = configApply.tooltipContent.name;
                    configApply.tooltipContent = d => d[toolName];
                }
            } else if (
                typeof configApply.tooltipContent.source !== 'undefined'
            ) {
                const tooltipData = configApply.tooltipContent;

                if (
                    typeof tooltipData.sourceID !== 'undefined' &&
                    typeof tooltipData.targetID !== 'undefined'
                ) {
                    configApply.tooltipContent = function(d) {
                        return (
                            '<h3>' +
                            d[tooltipData.source][tooltipData.sourceID] +
                            ' ➤ ' +
                            d[tooltipData.target][tooltipData.targetID] +
                            ': ' +
                            d[tooltipData.target][tooltipData.targetEnd] +
                            '</h3>'
                        );
                    };
                } else {
                    configApply.tooltipContent = function(d) {
                        return (
                            '<h3>' +
                            d[tooltipData.source] +
                            ' ➤ ' +
                            d[tooltipData.target] +
                            ': ' +
                            d[tooltipData.targetEnd] +
                            '</h3>'
                        );
                    };
                }
            } else if (configApply.tooltipContent.chord === true) {
                const tooltipData = configApply.tooltipContent;

                configApply.tooltipContent = this.formatChordToolTip(
                    tooltipData.bidirectional,
                    tooltipData.label,
                    tooltipData.displayValue
                );
            }
        } else {
            configApply.tooltipContent = null;
        }
    }

    configCircos(layout, config, tracks, setProps) {
        this.circos.layout(layout, config);
        if (tracks) {
            tracks.forEach((track, index) => {
                const {id, data, config, type} = track;

                // Since config is const, can't manipulate and throws error
                let configApply;

                if (config !== undefined) {
                    configApply = config;

                    // Set Event Handling
                    configApply.events = this.setEvent(setProps, index);

                    // Set Color
                    this.setColor(configApply);

                    // Set Tooltip
                    this.setToolTip(configApply);
                }
                this.circos[type.toLowerCase()](
                    id || `track-${index}`,
                    data,
                    configApply
                );
            });
        }
        this.circos.render();
    }

    componentDidMount() {
        const {
            enableDownloadSVG,
            enableZoomPan,
            size,
            layout,
            config,
            tracks,
            setProps,
        } = this.props;

        this.circos = new CircosJS({
            container: this.ref,
            width: size,
            height: size,
            enableZoomPan: enableZoomPan,
            enableDownloadSVG: enableDownloadSVG,
        });
        this.configCircos(layout, config, tracks, setProps);

        this.setStopScroll(enableZoomPan);
    }

    shouldComponentUpdate(nextProps) {
        return (
            this.props.config !== nextProps.config ||
            this.props.layout !== nextProps.layout ||
            this.props.tracks !== nextProps.tracks ||
            this.props.size !== nextProps.size ||
            this.props.selectEvent !== nextProps.selectEvent
        );
    }

    componentDidUpdate() {
        const {size, layout, config, tracks, setProps} = this.props;
        this.circos.removeTracks();
        this.container = this.ref;
        this.circos.width = size;
        this.circos.height = size;
        this.configCircos(layout, config, tracks, setProps);
    }

    componentWillUnmount() {
        this.setStopScroll(false);
    }

    render() {
        const {
            id,
            style,
            config,
            layout,
            tracks,
            size,
            eventDatum,
        } = this.props;

        return (
            <div id={id} style={style} eventDatum={eventDatum}>
                <div
                    id="Circos-container"
                    ref={ref => {
                        this.ref = ref;
                    }}
                    config={config}
                    layout={layout}
                    tracks={tracks}
                    size={size}
                />
            </div>
        );
    }
}

Circos.defaultProps = defaultProps;
Circos.propTypes = propTypes;
