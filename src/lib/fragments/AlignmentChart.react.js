import React, {Component} from 'react';
import {omit} from 'ramda';

import {propTypes, defaultProps} from '../components/AlignmentChart.react';
import {AlignmentChart as PreAlignementChart} from 'react-alignment-viewer';

export default class AlignmentChart extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    // Bind to Dash event handler that puts event back into props
    handleChange(event) {
        const eventObj = JSON.stringify(event);
        this.props.setProps({eventDatum: eventObj});
    }

    render() {
        const {id, eventDatum} = this.props;

        return (
            <div id={id} eventDatum={eventDatum}>
                <PreAlignementChart
                    onChange={this.handleChange}
                    {...omit(
                        ['fireEvent', 'dashEvent', 'setProps', 'colorscale'],
                        this.props
                    )}
                    colorscale={
                        this.props.colorscale
                            ? this.props.colorscale
                            : 'clustal2'
                    }
                />
            </div>
        );
    }
}

AlignmentChart.propTypes = propTypes;
AlignmentChart.defaultProps = defaultProps;
