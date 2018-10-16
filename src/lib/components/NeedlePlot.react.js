import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Plot from 'react-plotly.js';

/*
convert the array to a number and ignore the NaN values
*/
function filter_Nan_array(test_array) {
    let return_array = [];
    test_array.forEach(dx => {
        if (!isNaN(Number(dx))) {
            return_array.push(Number(dx));
        }
    });
    return return_array;
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
	console.warn(protein_pos_array)
	console.warn(protein_pos_array.constructor === Array);
	console.warn(protein_pos_array.constructor);
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
take the min of an array ignoring the NaN values
*/
function nanmin(test_array) {
    return Math.min.apply(null, filter_Nan_array(test_array));
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

    // Handle plot events
    handleChange(event) {
        // Guard
        if (!this.props.onChange) {
            return;
        }
        // CLick (mousedown) or hover (mousemove)
        if (event.points) {
            let eventType;
            if (event.event.type === 'mousedown') {
                eventType = 'Click';
            } else if (event.event.type === 'mousemove') {
                eventType = 'Hover';
                return;
            } else {
                eventType = 'Other';
            }

            this.props.onChange({
                eventType: eventType,
                name: event.points[0].data.name,
                text: event.points[0].text,
                // curveNumber: event.points[0].curveNumber
                x: event.points[0].x,
                y: event.points[0].y,
            });
        }
        // Zoom
        else if (event['xaxis.range[0]'] || event['xaxis.range']) {
            this.setState({
                xStart: event['xaxis.range[0]'] || event['xaxis.range'][0],
                xEnd: event['xaxis.range[1]'] || event['xaxis.range'][1],
            });
            this.props.onChange({
                eventType: 'Zoom',
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
            this.props.onChange({
                eventType: 'Autoscale',
            });
        }
        // Guard
        else {
            this.props.onChange(event);
        }
    }

    // Main
    render() {
        const {id} = this.props;
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
            shapes,
            globalAnnotation,
            domainAnnotations,
        });

        return (
            <div id={id}>
                <Plot
                    data={data}
                    layout={layout}
                    onClick={this.handleChange}
                    onHover={this.handleChange}
                    onRelayout={this.handleChange}
                    {...otherProps}
                />
            </div>
        );
    }

    // Fetch data
    prepareTraces() {
        let {x, y, domains} = this.props;
        const {
            data: inputData,
            groups,
            stemColor,
            stemThickness,
            stemConstHeight,
            needleColors,
            domainColors,
        } = this.props;
		console.warn(x)
		console.warn(x.constructor === Array);
		console.warn(x.constructor)
		
        console.warn('x',x)
        console.warn('y',y)

        // Check for strings
        if (inputData && typeof x === 'string' && typeof y === 'string') {
            x = inputData.map(i => i[x]);
            y = inputData.map(i => i[y]);
        }

        // Apply filtering on protein positions
        const [
            x_single_site,
            small_domains,
            idx_old_positions_array,
            idx_bogus_entry,
        ] = extract_small_domains(x);

        const fixed_needle_colors = needleColors;
        const fixed_domain_colors = domainColors;

        const X_DATA_MIN = Math.min.apply(null, x_single_site);
        const X_DATA_MAX = Math.max.apply(null, x_single_site);
        const Y_DATA_MAX = stemConstHeight === true ? 1 : nanmax(y);
        const X_RANGE_MIN = this.state.xStart || X_DATA_MIN;
        const X_RANGE_MAX = this.state.xEnd || X_DATA_MAX;

        const XSPAN = X_RANGE_MAX - X_RANGE_MIN;
        const Y_BUFFER = stemConstHeight === true ? 0.5 : Y_DATA_MAX / 10;
        const Y_TOP = stemConstHeight === true ? 2 : Y_DATA_MAX + Y_BUFFER;

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
                name: dom.name,
                fill: 'tozeroy',
                mode: 'lines',
                opacity: 0.5,
                visible: 'legendonly',
                legendgroup: dom.name,
                marker: {color: fixed_domain_colors[i]},
            });
            // Range of the protein domain on the xaxis
            shapes.push({
                type: 'rect',
                x0: x0,
                x1: x1,
                y0: -0.1,
                y1: Y_BUFFER * -1,
                fillcolor: fixed_domain_colors[i],
                line: {width: 0},
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

        //build the different protein small domains
        small_domains.forEach((dom, i) => {
            const x0 = Number(dom.split('-')[0]);
            const x1 = Number(dom.split('-')[1]);
            const domainLength = x1 - x0;
            const gname = groups[x.indexOf(dom)];
            // Range of the protein domain on the xaxis
            shapes.push({
                type: 'rect',
                name: gname,
                x0: x0,
                x1: x1,
                y0: -0.1,
                y1: Y_BUFFER * -1,
                fillcolor:
                    fixed_needle_colors[[...new Set(groups)].indexOf(gname)], //'#ccccb3',
                line: {width: 0},
            });
        });

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
                        groups: groups,
                        nameformat: `%{group}`,
                        styles: [...new Set(groups)].map((target, i) => {
                            return {
                                target: target,
                                value: {
                                    marker: {color: fixed_needle_colors[i]},
                                },
                            };
                        }),
                    },
                ],
            },
        ].concat(sequenceDomains);

        return {data, shapes, globalAnnotation, domainAnnotations};
    }

    // Fetch layout
    prepareLayout(vars) {
        const {shapes, globalAnnotation, domainAnnotations} = vars;
        const {xlabel, ylabel} = this.props;
        const {xStart, xEnd} = this.state;

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
                rangeslider: {},
                showgrid: false,
                zeroline: false,
                autorange: Boolean(!xStart),
                range: [xStart, xEnd],
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

    // TODO annotate the rest
    data: PropTypes.array,

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
    groups: PropTypes.arrayOf(PropTypes.string),

    /*
    protein domains coordinates on the protein sequence
    */
    domains: PropTypes.array,

    // Title of the x-axis
    xlabel: PropTypes.string,

    // Title of the y-axis
    ylabel: PropTypes.string,

    // Color of the stem of the needle plot
    stemColor: PropTypes.string,

    // Thickness of the stem of the needle plot
    stemThickness: PropTypes.number,

    // decides whether all stems have same height or not
    stemConstHeight: PropTypes.bool,

    // Color of the needle of the needle plot
    needleColors: PropTypes.array,

    // Colors of the shaded domains on the needle plot
    domainColors: PropTypes.array,

     /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change
     */
    setProps: PropTypes.func

};

NeedlePlot.defaultProps = {
    stemColor: '#444',
    stemThickness: 0.5,
    stemConstHeight: false,
    domainColors: [
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
    needleColors: [
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
};
