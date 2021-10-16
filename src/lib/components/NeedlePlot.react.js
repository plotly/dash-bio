import PropTypes from 'prop-types';
import React, {Component, lazy, Suspense} from 'react';
import LazyLoader from '../LazyLoader';

const RealNeedlePlot = lazy(LazyLoader.needlePlot);

/**
 * The Needle Plot component is used to visualize large datasets
 * containing categorical or numerical data. The lines and markers in
 * the plot correspond to bars in a histogram.
 **/
export default class NeedlePlot extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealNeedlePlot {...this.props} />
            </Suspense>
        );
    }
}

NeedlePlot.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * The data that are displayed on the plot
     */
    mutationData: PropTypes.shape({
        /*
      coordinate of mutations on the protein sequence
      */
        x: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        /* value (could be the sample count), this property is not necessarily
      relevant, should match x in size
      */
        y: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
        /*
      type of mutations, should match x in size
      */
        mutationGroups: PropTypes.arrayOf(PropTypes.string),
        /*
      protein domains coordinates on the protein sequence
      */
        domains: PropTypes.array,
    }),

    /**
     * Margins of the plot
     */
    margin: PropTypes.object,

    /**
     * Title of the x-axis.
     **/
    xlabel: PropTypes.string,

    /**
     * Title of the y-axis.
     **/
    ylabel: PropTypes.string,

    /**
     * If true, enables a rangeslider for the x-axis.
     **/
    rangeSlider: PropTypes.bool,

    /**
     * Options for the needle marking single site mutations
     */
    needleStyle: PropTypes.shape({
        // Color of the stems of the needles
        stemColor: PropTypes.string,
        // Thickness of the stems of the needles
        stemThickness: PropTypes.number,
        // Decides whether all stems have same height or not
        stemConstHeight: PropTypes.bool,
        // Size of the heads of the needlehead
        headSize: PropTypes.number,
        // Color of the heads of the needlehead
        headColor: PropTypes.oneOfType([
            /* different color for different mutations, must be larger or
	    equal to the size of the mutationGroup prop
	    */
            PropTypes.array,
            // same color for all needles
            PropTypes.string,
        ]),
        // Style of the heads of the needlehead
        headSymbol: PropTypes.oneOfType([
            /* different marker for different mutations, must be larger or
	    equal to the size of the mutationGroup prop
	    */
            PropTypes.array,
            // same marker for all needles
            PropTypes.string,
        ]),
    }),

    /**
     * Options for the protein domain coloring
     */
    domainStyle: PropTypes.shape({
        // Color of the protein domains
        domainColor: PropTypes.array,
        /**
         * The prop x sometimes contains smaller domains (e.g. multi-site
        mutations), if true, these are displayed
         */
        displayMinorDomains: PropTypes.bool,

        /**
         * Sets the angle at which the domain annotation
         * text is drawn with respect to the horizontal.
         */
        textangle: PropTypes.number,
    }),

    /**
     * An array of the points on the graph that have been clicked with Plotly.js clickEvents.
     */
    clickData: PropTypes.array,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     * Width of the Plot
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Height of the Plot.
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

NeedlePlot.defaultProps = {
    mutationData: {
        x: [],
        y: [],
        domains: [],
        mutationGroups: [],
    },
    rangeSlider: false,
    needleStyle: {
        stemColor: '#444',
        stemThickness: 0.5,
        stemConstHeight: false,
        headSize: 5,
        headColor: [
            '#e41a1c',
            '#377eb8',
            '#4daf4a',
            '#984ea3',
            '#ff7f00',
            '#ffff33',
            '#a65628',
            '#f781bf',
            '#999999',
            '#e41a1c',
            '#377eb8',
            '#4daf4a',
            '#984ea3',
            '#ff7f00',
            '#ffff33',
            '#a65628',
            '#f781bf',
            '#999999',
            '#e41a1c',
        ],
        headSymbol: 'circle',
    },
    domainStyle: {
        displayMinorDomains: false,
        domainColor: [
            '#8dd3c7',
            '#ffffb3',
            '#bebada',
            '#fb8072',
            '#80b1d3',
            '#fdb462',
            '#b3de69',
            '#fccde5',
            '#d9d9d9',
            '#bc80bd',
            '#ccebc5',
            '#ffed6f',
            '#8dd3c7',
            '#ffffb3',
            '#bebada',
            '#fb8072',
            '#80b1d3',
            '#fdb462',
            '#b3de69',
        ],
        textangle: 0,
    },
    margin: {t: 100, l: 40, r: 0, b: 40},

    width: 700,

    height: 800,
};

export const defaultProps = NeedlePlot.defaultProps;
export const propTypes = NeedlePlot.propTypes;
