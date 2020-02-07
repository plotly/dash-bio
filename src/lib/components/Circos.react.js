import PropTypes from 'prop-types';
import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';
import {TRACK_TYPES} from '../constants/tracks';

const RealCircos = lazy(LazyLoader.circos);

/**
 * Dash Circos is a library used to analyze and interpret
 * data using a circular layout, based on the popular
 * 'Circos' graph. This Dash Bio component is a useful tool
 * for showcasing relationships bewtween data/datasets in a
 * beautiful way. Please checkout the Dash Bio repository
 * on github to learn more about this API.
 */
export default class Circos extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealCircos {...this.props} />
            </Suspense>
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
             * The entry for the "name" key, is any of the keys used in the data loaded into tracks.
             * Ex: "tooltipContent": {"name": "block_id"},
             * To display all data in the dataset use "all" as the entry for the key "name".
             * Ex: "tooltipContent": {"name": "all"}
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
            tooltipContent: PropTypes.oneOfType([
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
                PropTypes.shape({
                    chord: PropTypes.bool.isRequired,
                    bidirectional: PropTypes.bool.isRequired,
                    label: PropTypes.string.isRequired,
                    displayValue: PropTypes.bool.isRequired,
                }),
            ]),
            /**
             * Specify which dictonary key to grab color values from, in the passed in dataset.
             * This can be a string or an object.
             * If using a string, you can specify hex,
             * RGB, and colors from d3 scale chromatic (Ex: RdYlBu).
             * The key "name" is required for this dictionary,
             * where the input for "name" points to some list of
             * dictionaries color values.
             * Ex: "color": {"name": "some key that refers to color in a data set"}
             *
             **/
            color: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                }),
            ]),
        })
    ),
};

export const propTypes = Circos.propTypes;
export const defaultProps = Circos.defaultProps;
