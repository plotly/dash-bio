import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CircosJS from 'circos';
import {TRACK_TYPES} from '../constants/tracks';

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
                var tooltipData = configApply.tooltipContent;

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

                if (typeof config !== 'undefined') {
                    configApply = config;

                    // Set Event Handling
                    if (setProps) {
                        configApply.events = this.setEvent(setProps, index);
                    }

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

Circos.defaultProps = {
    config: {},
    size: 800,
    tracks: [],
};

Circos.propTypes = {
    /**
     * Allow for an SVG snapshot of the Circos graph to be downloaded.
     **/
    enableDownloadSVG: PropTypes.bool,

    /**
     * Allow for zooming and panning the Circos graph.
     **/
    enableZoomPan: PropTypes.bool,

    /**
     * The ID of the component to be used in Dash callbacks
     */
    id: PropTypes.string,

    /**
     * The CSS styling of the div wrapping the component
     */
    style: PropTypes.object,

    /**
     * A Dash prop that returns data on clicking or hovering of the tracks.
     * Depending on what is specified for prop "selectEvent".
     */
    eventDatum: PropTypes.object,

    /**
   * A dictionary used to choose whether tracks should return
   * data on click, hover, or both, with the dash prop "eventDatum".
   * The keys of the dictionary represent the index of the list
   * specified for "tracks".
   *
   * Ex:
   * selectEvent={
        "0": "hover",
        "1": "click",
        "2": "both"
    },
   */
    selectEvent: PropTypes.object,

    /**
     * Dash provided setProps.
     */
    setProps: PropTypes.func,

    /**
     * The overall layout of the Circos graph, provided
     * as a list of dictionaries.
     */
    layout: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The length of the block.
             */
            len: PropTypes.number.isRequired,

            /**
             * The color of the block.
             */
            color: PropTypes.string.isRequired,

            /**
             * The labels of the block.
             */
            label: PropTypes.string.isRequired,

            /**
             * The id of the block, where it will recieve
             * data from the specified "track" id.
             */
            id: PropTypes.string.isRequired,
        })
    ).isRequired,

    /**
     * Configuration of overall layout of the graph.
     */
    config: PropTypes.object,

    /**
     * The overall size of the SVG container holding the
     * graph. Set on initilization and unchangeable thereafter.
     */
    size: PropTypes.number,

    /**
     * Tracks that specify specific layouts.
     * For a complete list of tracks and usage,
     * please check the docs.
     */
    tracks: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The id of a specific piece of track data.
             */
            id: PropTypes.string,

            /**
             * The data that makes up the track. It can
             * be a Json object.
             */
            data: PropTypes.array.isRequired,

            /**
             * The layout of the tracks, where the user
             * can configure innerRadius, outterRadius, ticks,
             * labels, and more.
             */
            config: PropTypes.object,

            /**
             * Specify the type of track this is.
             * Please check the docs for a list of tracks you can use,
             * and ensure the name is typed in all capitals.
             **/
            type: PropTypes.oneOf(TRACK_TYPES),

            /**
             * Specify what data for tooltipContent is
             * displayed.
             *
             * The entry for the "name" key, is any of the keys used in the data loaded into tracks.
             * Ex: "tooltipContent": {"name": "block_id"},
             *
             * To display all data in the dataset use "all" as the entry for the key "name".
             * Ex: "tooltipContent": {"name": "all"}
             *
             * Ex: This will return (source) + ' > ' + (target) + ': ' + (targetEnd)'.
             * "tooltipContent": {
                "source": "block_id",
                "target": "position",
                "targetEnd": "value"
                        },
             * Ex: This will return (source)(sourceID) + ' > ' + (target)(targetID) + ': ' (target)(targetEnd)'.
             * "tooltipContent": {
                "source": "source",
                "sourceID": "id",
                "target": "target",
                "targetID": "id",
                "targetEnd": "end"
            }
             **/
            tooltipContent: PropTypes.oneOf([
                PropTypes.string,
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                }),
                PropTypes.shape({
                    source: PropTypes.string.isRequired,
                    sourceID: PropTypes.string,
                    target: PropTypes.string.isRequired,
                    targetEnd: PropTypes.string.isRequired,
                    targetID: PropTypes.string,
                }),
            ]),
            /**
             * Specify which dictonary key to grab color values from, in the passed in dataset.
             * This can be a string or an object.
             *
             * If using a string, you can specify hex,
             * RGB, and colors from d3 scale chromatic (Ex: RdYlBu).
             *
             * The key "name" is required for this dictionary,
             * where the input for "name" points to some list of
             * dictionaries color values.
             *
             * Ex: "color": {"name": "some key that refers to color in a data set"}
             **/
            color: PropTypes.oneOf([
                PropTypes.string,
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                }),
            ]),
        })
    ),
};
