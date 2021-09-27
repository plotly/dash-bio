import React, {Component} from 'react';
import {Jsme as JsmeReact} from 'jsme-react';
import {defaultProps, propTypes} from '../components/Jsme.react';

export default class Jsme extends Component {
    constructor(props) {
        super(props);
    }

    setSmiles(smiles) {
        const {setProps} = this.props;

        setProps({eventSmiles: smiles});
    }

    render() {
        const {
            id,
            style,
            options,
            height,
            width,
            smiles,
        } = this.props;

        return (
            <div id={id} style={style}>
                <JsmeReact options={options}
                           height={height}
                           width={width}
                           smiles={smiles}
                           onChange={this.setSmiles.bind(this)}
                           ref={this.ref}/>
            </div>
        );
    }
}

Jsme.defaultProps = defaultProps;
Jsme.propTypes = propTypes;
