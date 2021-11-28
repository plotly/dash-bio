import React, {Component} from 'react';
import {omit} from 'ramda';

import {OncoPrint as PreOncoPrint} from 'react-oncoprint';
import {propTypes, defaultProps} from '../components/OncoPrint.react';

export default class OncoPrint extends Component {
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
        const {id, eventDatum, loading_state} = this.props;

        return (
            <div
                id={id}
                eventDatum={eventDatum}
                data-dash-is-loading={
                    (loading_state && loading_state.is_loading) || undefined
                }
            >
                <PreOncoPrint
                    onChange={this.handleChange}
                    {...omit(['setProps', 'loading_state'], this.props)}
                />
            </div>
        );
    }
}

OncoPrint.defaultProps = defaultProps;
OncoPrint.propTypes = propTypes;
