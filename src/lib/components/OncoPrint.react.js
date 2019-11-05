import PropTypes from 'prop-types';
import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';

const RealOncoPrint = lazy(LazyLoader.oncoPrint);

/**
 * The OncoPrint component is used to view multiple genetic alteration events
 * through an interactive and zoomable heatmap. It is a React/Dash port of the
 * popular oncoPrint() function from the BioConductor R package.
 * Under the hood, the rendering is done using Plotly.js built upon D3.
 * Plotly's interactivity allows the user to bind clicks and hovers to genetic
 * events, allowing the user to create complex bioinformatic apps or workflows
 * that rely on crossfiltering.
 * Read more about the component here:
 * https://github.com/plotly/react-oncoprint
 */
export default class OncoPrint extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealOncoPrint {...this.props} />
            </Suspense>
        );
    }
}

OncoPrint.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique to the component.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change.
     */
    setProps: PropTypes.func,

    /**
     * A Dash prop that returns data on clicking, hovering or resizing the viewer.
     */
    eventDatum: PropTypes.object,

    /**
     * Input data, in CBioPortal format where each list entry is a dict
     * consisting of 'sample', 'gene', 'alteration', and 'type'
     */
    data: PropTypes.array,

    // TODO: Add remove empty columns prop

    /**
     * Adjusts the padding (as a proportion of whitespace) between two tracks.
     * Value is a ratio between 0 and 1.
     * Defaults to 0.05 (i.e., 5 percent). If set to 0, plot will look like a heatmap.
     */
    padding: PropTypes.number,

    /**
     * If not null, will override the default OncoPrint colorscale.
     * Default OncoPrint colorscale same as CBioPortal implementation.
     * Make your own colrscale as a {'mutation': COLOR} dict.
     * Supported mutation keys are ['MISSENSE, 'INFRAME', 'FUSION',
     * 'AMP', 'GAIN', 'HETLOSS', 'HMODEL', 'UP', 'DOWN']
     * Note that this is NOT a standard plotly colorscale.
     */
    colorscale: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),

    /**
     * Default color for the tracks, in common name, hex, rgb or rgba format.
     * If left blank, will default to a light grey rgb(190, 190, 190).
     */
    backgroundcolor: PropTypes.string,

    /**
     *.Toogles whether or not to show a legend on the right side of the plot,
     * with mutation information.
     */
    range: PropTypes.array,

    /**
     *.Toogles whether or not to show a legend on the right side of the plot,
     * with mutation information.
     */
    showlegend: PropTypes.bool,

    /**
     *.Toogles whether or not to show a heatmap overview of the tracks.
     */
    showoverview: PropTypes.bool,

    /**
     * Width of the OncoPrint.
     * Will disable auto-resizing of plots if set.
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Height of the OncoPrint.
     * Will disable auto-resizing of plots if set.
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

OncoPrint.defaultProps = {
    // Layout
    padding: 0.05,
    colorscale: null,
    backgroundcolor: 'rgb(190, 190, 190)',
    range: [null, null],
    showlegend: true,
    showoverview: true,
    width: null,
    height: 500,
};

export const defaultProps = OncoPrint.defaultProps;
export const propTypes = OncoPrint.propTypes;
