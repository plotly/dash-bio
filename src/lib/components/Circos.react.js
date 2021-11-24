import PropTypes from 'prop-types';
import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';

const RealCircos = lazy(LazyLoader.circos);

/**
 * Dash Circos is a library used to analyze and interpret
 * data using a circular layout, based on the popular
 * 'Circos' graph. This Dash Bio component is a useful tool
 * for showcasing relationships between data/datasets in an
 * attractive, circular layout to highlight feature
 * interactions and relationships.
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
     * The ID of the component to be used in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The CSS styling of the div wrapping the component.
     */
    style: PropTypes.object,

    /**
     * A Dash prop that returns data on clicking or hovering of the tracks,
     * depending on what is specified for prop "selectEvent".
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
     * Data used to draw Circos layout blocks.
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
             * The id of the block.
             */
            id: PropTypes.string.isRequired,
        })
    ).isRequired,

    /**
     * Configuration options for the graph layout.
     */
    config: PropTypes.shape({
        innerRadius: PropTypes.number,
        outerRadius: PropTypes.number,
        cornerRadius: PropTypes.number,
        gap: PropTypes.number,
        labels: PropTypes.shape({
            display: PropTypes.bool,
            size: PropTypes.number,
            color: PropTypes.string,
            radialOffset: PropTypes.number,
        }),
        ticks: PropTypes.shape({
            display: PropTypes.bool,
            color: PropTypes.string,
            spacing: PropTypes.number,
            labels: PropTypes.bool,
            labelSpacing: PropTypes.number,
            labelSuffix: PropTypes.string,
            labelDenominator: PropTypes.number,
            labelDisplay0: PropTypes.bool,
            labelSize: PropTypes.number,
            labelColor: PropTypes.string,
            labelFont: PropTypes.string,
            majorSpacing: PropTypes.number,
            size: PropTypes.shape({
                minor: PropTypes.number,
                major: PropTypes.number,
            }),
        }),
    }),

    /**
     * The overall size of the SVG container holding the
     * graph. Set on initilization and unchangeable thereafter.
     */
    size: PropTypes.number,

    /**
     * A list of tracks displayed on top of the base Circos layout.
     */
    tracks: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * The id of the track.
             */
            id: PropTypes.string,

            /**
             * The data that makes up the track, passed as a list of dicts with different keys depending on the track type.
             * See the docs section about a given track type to learn more about the required data format.
             */
            data: PropTypes.arrayOf(PropTypes.object),

            /**
             * The track configuration. Depending on the track type it will be a dict with different keys.
             * See the docs section about a given track type to learn more about available configuration options.
             */
            config: PropTypes.object,

            /**
             * The type of the track.
             **/
            type: PropTypes.oneOf([
                'CHORDS',
                'HEATMAP',
                'HIGHLIGHT',
                'HISTOGRAM',
                'LINE',
                'SCATTER',
                'STACK',
                'TEXT',
            ]),
        })
    ),
};

export const propTypes = Circos.propTypes;
export const defaultProps = Circos.defaultProps;
