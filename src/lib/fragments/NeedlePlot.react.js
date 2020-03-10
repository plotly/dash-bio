import React, {Component} from 'react';
import Plot from 'react-plotly.js';
import {reduce, max, range, repeat, mergeDeepRight, omit} from 'ramda';
import {propTypes, defaultProps} from '../components/NeedlePlot.react';

/**
 * Checks if a variable is representation of a number or not
 * https://stackoverflow.com/questions/9716468/pure-javascript-a-function-like-jquerys-isnumeric
 * @param  {String/FLoat} n  A variable to test.
 * @return {Bool}            True if n is a number, false otherwise.
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Converts an array elements to numbers and ignore the elements which are not
 * a representation of  numbers
 * @param  {Array} test_array An array
 * @return {Array}       An array with only numbers.
 */
function filterNanArray(test_array) {
    return test_array.filter(el => Number(isNumeric(el)));
}

/**
 * Search the protein position array for small protein domains (typically 1->5 sites)
 * and bogus entries (i.e. "?-123" or "320-?"), the protein domains are indicated
 * by the presence of a '-' character in the element of the array.
 * @param  {Array} protein_pos_array        An array containing protein domains
 * @return {Array} positions_array          An array with only single site
					    protein mutations.
 * @return {Array} domains_array            An array with only small domains
					    protein mutations.
 * @return {Array} idx_old_positions_array  An array with the indexes of the
					    single site protein mutations
					    relative to protein_pos_array
 * @return {Array} idx_bogus_entry          An array with the indexes of the
					    bogus entries (containing '?')
					    relative to protein_pos_array
*/
function extractSmallDomains(protein_pos_array) {
    const positions_array = [];
    const domains_array = [];
    const idx_old_positions_array = [];
    const idx_bogus_entry = [];
    protein_pos_array.forEach((dx, i) => {
        if (dx.indexOf('-') > -1) {
            const domains_limits = dx.split('-');
            if (isNumeric(domains_limits[0]) || isNumeric(domains_limits[1])) {
                idx_bogus_entry.push(i);
            } else {
                domains_array.push(dx);
            }
        } else {
            idx_old_positions_array.push(i);
            positions_array.push(dx);
        }
    });
    return [
        positions_array,
        domains_array,
        idx_old_positions_array,
        idx_bogus_entry,
    ];
}

/**
 * Creates two arrays to plot horizontal lines with many markers
 *
 * @param  {number} xi  start x coordinate of the line
 * @param  {number} xf  stop x coordinate of the line
 * @param  {number} y   y coordinate of the line
 * @param  {int} n      number of markers
 * @return {array} x    x coordinates of the horizontal ine
 * @return {array} y    y coordinates of the horizontal ine
 */
function createHorizontalLine(xi, xf, y, n) {
    const dx = (xf - xi) / n;
    const N = Math.max(2, n);
    const x = range(0, N).map(i => xi + i * dx);
    return [x, repeat(y, N)];
}

/**
 * Finds the max of an array while ignoring the NaN values
 *
 * @param  {array} test_array  an array with numbers as entries
 * @return {number}            max value of the array
 */
function nanMax(test_array) {
    return reduce(max, -Infinity, filterNanArray(test_array));
}

/**
 * The Needle Plot component is used to visualize large datasets
 * containing categorical or numerical data. The lines and markers in
 * the plot correspond to bars in a histogram.
 **/
export default class NeedlePlot extends Component {
    constructor() {
        super();
        this.state = {
            xStart: null,
            xEnd: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    UNSAFE_componentWillMount() {
        // For default argument of taken from defaultProps deeply nested
        this.props = mergeDeepRight(NeedlePlot.defaultProps, this.props);
    }

    // Handle plot events
    handleChange(event) {
        // Zoom
        if (event['xaxis.range[0]'] || event['xaxis.range']) {
            this.setState({
                xStart: event['xaxis.range[0]'] || event['xaxis.range'][0],
                xEnd: event['xaxis.range[1]'] || event['xaxis.range'][1],
            });
        }
        // Autozoom
        else if (event['xaxis.autorange'] === true) {
            this.setState({
                xStart: null,
                xEnd: null,
            });
        }
    }

    render() {
        const {id} = this.props;
        const {
            data,
            globalAnnotation,
            domainAnnotations,
        } = this.prepareTraces();

        const layout = this.prepareLayout({
            data,
            globalAnnotation,
            domainAnnotations,
        });

        return (
            <div id={id}>
                <Plot
                    data={data}
                    layout={layout}
                    onRelayout={this.handleChange}
                    {...omit(['setProps'], this.props)}
                />
            </div>
        );
    }

    // Fetch data
    prepareTraces() {
        const {
            mutationData: {x, y, mutationGroups, domains},
            domainStyle: {domainColor, displayMinorDomains},
            needleStyle: {
                stemColor,
                stemThickness,
                stemConstHeight,
                headSize,
                headColor,
                headSymbol,
            },
        } = mergeDeepRight(NeedlePlot.defaultProps, this.props);

        // Apply filtering on protein positions
        const [
            x_single_site,
            small_domains,
            idx_old_positions_array,
        ] = extractSmallDomains(x);

        // manage whether headColor is an array or a string
        const fixed_mutation_colors = Array.isArray(headColor)
            ? headColor
            : mutationGroups.map(() => headColor);

        const fixed_mutation_symbols = Array.isArray(headSymbol)
            ? headSymbol
            : mutationGroups.map(() => headSymbol);

        const fixed_domain_colors = domainColor;

        const X_DATA_MIN = Math.min.apply(null, x_single_site);
        const X_DATA_MAX = Math.max.apply(null, x_single_site);
        const Y_DATA_MAX = stemConstHeight === true ? 1 : nanMax(y);
        const X_RANGE_MIN = this.state.xStart || X_DATA_MIN;
        const X_RANGE_MAX = this.state.xEnd || X_DATA_MAX;
        const XSPAN = X_RANGE_MAX - X_RANGE_MIN;
        // this is used to trigger a change of display inside annotations
        const XSPAN_RATIO = 0.2;
        const Y_BUFFER = stemConstHeight === true ? 0.5 : Y_DATA_MAX / 10;
        // this is used to scale the position for the annotations
        const Y_BUFFER_DIVIDER = 2;
        const Y_TOP = stemConstHeight === true ? 2 : Y_DATA_MAX + Y_BUFFER;
        const DOMAIN_WIDTH = 33;

        const sequenceDomains = [];
        const domainAnnotations = [];

        let hoverlabels = [];
        // contains the height of each stem
        let stemsY = [];
        idx_old_positions_array.forEach(idx => {
            if (stemConstHeight) {
                stemsY = stemsY.concat([1]);
            } else {
                hoverlabels = hoverlabels.concat([
                    '(' + x[idx] + ',' + y[idx] + ')',
                ]);
                stemsY = stemsY.concat([y[idx]]);
            }
        });

        const hoverinfo =
            stemConstHeight === true ? 'x+name+text' : 'name+text';

        // build the different protein large domains
        domains.forEach((dom, i) => {
            const domainLimits = dom.coord.split('-');
            const x0 = Number(domainLimits[0]);
            const x1 = Number(domainLimits[1]);
            const domainLength = x1 - x0;

            // Highlight of the protein domain
            sequenceDomains.push({
                x: [x1, x0],
                y: [Y_TOP, Y_TOP],
                xaxis: 'x1',
                name: dom.name,
                fill: 'tozeroy',
                mode: 'lines',
                opacity: 0.5,
                visible: 'legendonly',
                legendgroup: dom.name,
                marker: {color: fixed_domain_colors[i]},
            });
            const [line_x, line_y] = createHorizontalLine(
                x0,
                x1,
                -Y_BUFFER,
                x1 - x0
            );

            sequenceDomains.push({
                type: 'scatter',
                mode: 'lines',
                fill: 'tozeroy',
                fillcolor: fixed_domain_colors[i],
                hoveron: 'points+fills',
                x: line_x,
                y: line_y,
                xaxis: 'x2',
                showlegend: false,
                hoverinfo: 'name',
                name: `[${x0}->${x1}] ${dom.name}`,
                marker: {color: fixed_domain_colors[i]},
                line: {width: 2},
            });

            // Name of the protein domain
            domainAnnotations.push({
                x: (x0 + x1) / Y_BUFFER_DIVIDER,
                y: -Y_BUFFER / Y_BUFFER_DIVIDER,
                showarrow: false,
                text: dom.name,
                width: domainLength,
                align: domainLength < XSPAN_RATIO * XSPAN ? 'right' : 'center',
            });
        });

        if (displayMinorDomains === true) {
            // build the different protein small domains
            small_domains.forEach(dom => {
                const x0 = Number(dom.split('-')[0]);
                const x1 = Number(dom.split('-')[1]);
                const gname = mutationGroups[x.indexOf(dom)];
                const [line_x, line_y] = createHorizontalLine(
                    x0,
                    x1,
                    -Y_BUFFER / Y_BUFFER_DIVIDER,
                    x1 - x0
                );
                // Range of the protein domain on the xaxis
                sequenceDomains.push({
                    type: 'scatter',
                    mode: 'lines',
                    x: line_x,
                    y: line_y,
                    fill: 'tozeroy',
                    fillcolor:
                        fixed_mutation_colors[
                            [...new Set(mutationGroups)].indexOf(gname)
                        ],
                    hoveron: 'points+fills',
                    xaxis: 'x2',
                    hoverinfo: 'name+text',
                    name: gname,
                    text: `[${x0}->${x1}] `,
                    showlegend: false,
                    marker: {
                        color:
                            fixed_mutation_colors[
                                [...new Set(mutationGroups)].indexOf(gname)
                            ],
                    },
                    line: {width: DOMAIN_WIDTH},
                });
            });
        }

        const globalAnnotation = [
            {
                text: `<b>${x_single_site.length +
                    small_domains.length} Mutations</b>`,
                x: 0.01,
                xref: 'paper',
                y: 1.1,
                yref: 'paper',
                showarrow: false,
                align: 'left',
            },
        ];

        const data = [
            {
                type: 'scatter',
                mode: 'markers',
                x: x_single_site,
                y: stemsY,
                xaxis: 'x1',
                hoverinfo: hoverinfo,
                text: hoverlabels,
                error_y: {
                    type: 'data',
                    symmetric: false,
                    array: 0,
                    arrayminus: stemsY,
                    thickness: stemThickness,
                    width: 0,
                    color: stemColor,
                },
                transforms: [
                    {
                        type: 'groupby',
                        groups: mutationGroups,
                        nameformat: `%{group}`,
                        styles: [...new Set(mutationGroups)].map(
                            (target, i) => {
                                return {
                                    target: target,
                                    value: {
                                        marker: {
                                            size: headSize,
                                            symbol: fixed_mutation_symbols[i],
                                            color: fixed_mutation_colors[i],
                                        },
                                    },
                                };
                            }
                        ),
                    },
                ],
            },
        ].concat(sequenceDomains);
        return {data, globalAnnotation, domainAnnotations};
    }

    // Fetch layout
    prepareLayout(vars) {
        const {data, globalAnnotation, domainAnnotations} = vars;
        const {xlabel, ylabel, rangeSlider} = mergeDeepRight(
            NeedlePlot.defaultProps,
            this.props
        );
        let {xStart, xEnd} = this.state;
        let first_init = false;
        // initialize the range based on input data
        if (Boolean(!xStart) || Boolean(!xEnd)) {
            first_init = true;
            data.forEach(trace => {
                const X_DATA_MIN = Math.min.apply(null, trace.x);
                const X_DATA_MAX = Math.max.apply(null, trace.x);
                if (xStart > X_DATA_MIN || Boolean(!xStart)) {
                    xStart = X_DATA_MIN;
                }
                if (xEnd < X_DATA_MAX || Boolean(!xEnd)) {
                    xEnd = X_DATA_MAX;
                }
            });
        }

        // this is used to zoom in the axis range initially
        const XSTART_RATIO = 0.98;
        const XEND_RATIO = 1.02;

        const layout = {
            legend: {
                orientation: 'v',
                x: 1,
                y: 1.05,
                bgcolor: 'rgba(255, 255, 255, 0)',
            },
            hovermode: 'closest',
            xaxis: {
                title: xlabel,
                showgrid: false,
                zeroline: false,
                autorange: Boolean(!xStart),
                range: [xStart, xEnd],
                anchor: 'y',
            },
            xaxis2: {
                scaleanchor: 'x',
                autorange: Boolean(!xStart),
                range: [xStart, xEnd],
                anchor: 'y',
                overlaying: 'x',
            },
            yaxis: {
                title: ylabel,
                showgrid: false,
                ticks: 'inside',
            },
            margin: {t: 100, l: 40, r: 0, b: 40},
            annotations: domainAnnotations.concat(globalAnnotation),
        };
        if (rangeSlider === true) {
            layout.xaxis.rangeslider =
                first_init === true
                    ? {range: [xStart * XSTART_RATIO, xEnd * XEND_RATIO]}
                    : {};
        }

        return layout;
    }
}

NeedlePlot.propTypes = propTypes;
NeedlePlot.defaultProps = defaultProps;
