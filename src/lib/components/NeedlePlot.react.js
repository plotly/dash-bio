import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';
import {mergeDeepRight, contains, filter, has, isNil, type, omit} from 'ramda';
/* global Plotly:true */

/*
convert the array to a number and ignore the NaN values
*/
function filter_Nan_array(test_array) {
    return test_array.filter(el => Number(!isNaN(Number(el))));
}

/*
search the protein position array for small protein domains (1-5 sites)
and bogus entries (i.e. "?-123" or "320-?")
*/
function extract_small_domains(protein_pos_array) {
    let positions_array = [];
    let domains_array = [];
    let idx_old_positions_array = [];
    let idx_bogus_entry = [];
    protein_pos_array.forEach((dx, i) => {
        if (dx.indexOf('-') > -1) {
            if (
                isNaN(Number(dx.split('-')[0])) ||
                isNaN(Number(dx.split('-')[1]))
            ) {
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

/*
create two arrays of value for plotting horizontal lines with many markers
*/
function create_horizontal_line(xi, xf, y, n) {
    let line_x = [];
    let line_y = [];
    if (n === 1) {
        line_x = [xi, xf];
        line_y = [y, y];
    } else {
        const dx = (xf - xi) / n;
        for (let i = 0; i < n; i++) {
            line_x.push(xi + i * dx);
            line_y.push(y);
        }
    }
    return [line_x, line_y];
}

/*
take the min of an array ignoring the NaN values
*/
function nanmax(test_array) {
    return Math.max.apply(null, filter_Nan_array(test_array));
}

export default class NeedlePlot extends Component {
    // Constructor
    constructor(props) {
        super(props);
        this.state = {
            xStart: null,
            xEnd: null,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount() {
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
        const {id, setProps} = this.props;
        const otherProps = {
            style: {
                width: '100%',
                height: '100%',
            },
            useResizeHandler: true,
        };

        const {
            data,
            shapes,
            globalAnnotation,
            domainAnnotations,
        } = this.prepareTraces();

        const layout = this.prepareLayout({
            data,
            shapes,
            globalAnnotation,
            domainAnnotations,
        });

        return (
            <div id={id}>
                <Plot
                    data={data}
                    layout={layout}
                    onRelayout={this.handleChange}
                    {...omit(
                        ['fireEvent', 'dashEvent', 'setProps'],
                        this.props
                    )}
                />
            </div>
        );
    }

    // Fetch data
    prepareTraces() {
        let {x, y, domains} = this.props;
        const {
            mutationGroups,
            needleStyle,
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
            idx_bogus_entry,
        ] = extract_small_domains(x);

        //manage whether headColor is an array or a string
        const fixed_mutation_colors =
            Array.isArray(headColor)
                ? headColor
                : mutationGroups.map(i => headColor);

        const fixed_mutation_symbols =
            Array.isArray(headSymbol)
                ? headSymbol
                : mutationGroups.map(i => headSymbol);

        const fixed_domain_colors = domainColor;

        const X_DATA_MIN = Math.min.apply(null, x_single_site);
        const X_DATA_MAX = Math.max.apply(null, x_single_site);
        const Y_DATA_MAX = stemConstHeight === true ? 1 : nanmax(y);
        const X_RANGE_MIN = this.state.xStart || X_DATA_MIN;
        const X_RANGE_MAX = this.state.xEnd || X_DATA_MAX;

        const XSPAN = X_RANGE_MAX - X_RANGE_MIN;
        const Y_BUFFER = stemConstHeight === true ? 0.5 : Y_DATA_MAX / 10;
        const Y_TOP = stemConstHeight === true ? 2 : Y_DATA_MAX + Y_BUFFER;
        const DOMAIN_WIDTH = 33;

        const sequenceDomains = [];
        const shapes = [];
        const domainAnnotations = [];

        let hoverlabels = [];
        let stemsY = []; // contains the height of each stem
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

        //build the different protein large domains
        domains.forEach((dom, i) => {
            const x0 = Number(dom.coord.split('-')[0]);
            const x1 = Number(dom.coord.split('-')[1]);
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
            const [line_x, line_y] = create_horizontal_line(
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
                x: (x0 + x1) / 2,
                y: Y_BUFFER / -2,
                showarrow: false,
                text: dom.name,
                width: domainLength,
                align: domainLength < 0.2 * XSPAN ? 'right' : 'center',
            });
        });

        if (displayMinorDomains === true) {
            //build the different protein small domains
            small_domains.forEach((dom, i) => {
                const x0 = Number(dom.split('-')[0]);
                const x1 = Number(dom.split('-')[1]);
                const domainLength = x1 - x0;
                const gname = mutationGroups[x.indexOf(dom)];
                const [line_x, line_y] = create_horizontal_line(
                    x0,
                    x1,
                    Y_BUFFER / -2,
                    x1 - x0
                );
                // Range of the protein domain on the xaxis
                sequenceDomains.push({
                    type: 'scatter',
                    mode: 'lines',
                    x: line_x,
                    y: line_y,
                    fill: 'tozeroy',
                    fillcolor: fixed_mutation_colors[
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
        return {data, shapes, globalAnnotation, domainAnnotations};
    }

    // Fetch layout
    prepareLayout(vars) {
        const {data, shapes, globalAnnotation, domainAnnotations} = vars;
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
                const X_DATA_MIN = Math.min.apply(null, trace['x']);
                const X_DATA_MAX = Math.max.apply(null, trace['x']);
                if (xStart > X_DATA_MIN || Boolean(!xStart)) {
                    xStart = X_DATA_MIN;
                }
                if (xEnd < X_DATA_MAX || Boolean(!xEnd)) {
                    xEnd = X_DATA_MAX;
                }
            });
        }
        let layout = {
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
            shapes: shapes,
            annotations: domainAnnotations.concat(globalAnnotation),
        };
        if (rangeSlider === true) {
            layout['xaxis']['rangeslider'] =
                first_init === true
                    ? {range: [xStart * 0.98, xEnd * 1.02]}
                    : {};
        }

        return layout;
    }
}

NeedlePlot.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

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

    // Title of the x-axis
    xlabel: PropTypes.string,

    // Title of the y-axis
    ylabel: PropTypes.string,

    // if true enables a rangeslider for xaxis
    rangeSlider: PropTypes.bool,

    /*
    options for the needle marking single site mutations
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
            /*different color for different mutations, must be larger or
            equal to the size of the mutationGroup prop
            */
            PropTypes.array,
            //same color for all needles
            PropTypes.string,
        ]),
        // Style of the heads of the needlehead
        headSymbol: PropTypes.oneOfType([
            /*different marker for different mutations, must be larger or
            equal to the size of the mutationGroup prop
            */
            PropTypes.array,
            //same marker for all needles
            PropTypes.string,
        ]),
    }),

    /*
    options for the protein domain coloring
    */
    domainStyle: PropTypes.shape({
        // Color of the stems of the needles
        domainColor: PropTypes.array,
        /*
        the prop x sometimes contains smaller domains (e.g. multi-site
        mutations), if true, they are displayed
        */
        displayMinorDomains: PropTypes.bool,
    }),

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func,

    /**
     *
     */
    dashEvents: PropTypes.oneOf(['click', 'hover', 'unhover', 'selected']),
    /**
     * Function that fires events
     */
    fireEvent: PropTypes.func,
};

NeedlePlot.defaultProps = {
    x: [],
    y: [],
    domains: [],
    mutationGroups: [],
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
    },
};
