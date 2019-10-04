import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FornaContainer as PreFornaContainer} from 'fornac';
import * as R from 'ramda';

/**
 * This is a FornaContainer component.
 */
export default class FornaContainer extends Component {
    constructor(props) {
        super(props);
        this.renderNewSequences = this.renderNewSequences.bind(this);
    }

    componentDidMount() {
        const {id, height, width} = this.props;

        this._fornaContainer = new PreFornaContainer('#' + id, {
            initialSize: [height, width],
        });

        this.renderNewSequences();
    }

    renderNewSequences() {
        const {sequences} = this.props;

        if (this._fornaContainer) {
            this._fornaContainer.clearNodes();

            sequences.forEach(seq => {
                const unpackedOptions = Object.assign(
                    seq.options ? seq.options : {},
                    {sequence: seq.sequence, structure: seq.structure}
                );
                this._fornaContainer.addRNA(seq.structure, unpackedOptions);
            });
        }
    }

    shouldComponentUpdate(nextProps) {
        const {sequences} = this.props;

        if (Boolean(sequences) !== Boolean(nextProps.sequences)) {
            return true;
        }

        if (sequences.length !== nextProps.sequences.length) {
            return true;
        }

        const sequence_compare = R.zip(sequences, nextProps.sequences);

        if (
            sequence_compare.some(
                seq =>
                    seq[0].sequence !== seq[1].sequence ||
                    seq[0].structure !== seq[1].structure
            )
        ) {
            return true;
        }

        if (
            sequence_compare.some(
                seq =>
                    Boolean(seq[0].options) !== Boolean(seq[1].options) ||
                    R.symmetricDifference(
                        Object.keys(seq[0].options),
                        Object.keys(seq[1].options)
                    ).length > 0
            )
        ) {
            return true;
        }

        if (
            sequence_compare.some(seq =>
                Object.keys(seq[0].options).some(
                    _option => seq[0].options._option !== seq[1].options._option
                )
            )
        ) {
            return true;
        }

        return false;
    }

    render() {
        this.renderNewSequences();
        return <div id={this.props.id} />;
    }
}

FornaContainer.propTypes = {
    /**
     * The ID of this component, used to identify dash components in
     * callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string.isRequired,

    /**
     * The height (in px) of the container in which the molecules will
     * be displayed.
     */
    height: PropTypes.number,

    /**
     * The width (in px) of the container in which the molecules will
     * be displayed.
     */
    width: PropTypes.number,

    /**
     * The molecules that will be displayed.
     */
    sequences: PropTypes.arrayOf(
        PropTypes.exact({
            /**
             * A string representing the RNA nucleotide sequence of
             * the RNA molecule.
             */
            sequence: PropTypes.string.isRequired,

            /**
             * A dot-bracket string
             * (https://software.broadinstitute.org/software/igv/RNAsecStructure)
             * that specifies the secondary structure of the RNA
             * molecule.
             */
            structure: PropTypes.string.isRequired,

            /**
             * Additional options to be applied to the rendering of
             * the RNA molecule.
             */
            options: PropTypes.exact({
                /**
                 * Indicate whether the force-directed layout will be
                 * applied to the displayed molecule. Enabling this
                 * option allows users to change the layout of the
                 * molecule by selecting and dragging the individual
                 * nucleotide nodes. True by default.
                 */
                applyForce: PropTypes.bool,

                /**
                 * This only makes sense in connection with the
                 * applyForce argument. If it's true, the external
                 * loops will be arranged in a nice circle. If false,
                 * they will be allowed to flop around as the force
                 * layout dictates. True by default.
                 */
                circularizeExternal: PropTypes.bool,

                /**
                 * Change how often nucleotide numbers are labelled
                 * with their number. 10 by default.
                 */
                labelInterval: PropTypes.number,

                /**
                 * The molecule name; this is used in custom color
                 * scales.
                 */
                name: PropTypes.string,

                /**
                 * Whether or not this molecule should "avoid" other
                 * molecules in the map.
                 */
                avoidOthers: PropTypes.bool,
            }),
        })
    ),

    /**
     * The fill color for all of the nodes. This will override any
     * color scheme defined in colorScheme.
     */
    nodeFillColor: PropTypes.string,

    /**
     * The color scheme that is used to color the nodes.
     */
    colorScheme: PropTypes.oneOf(['sequence', 'structure', 'positions']),

    /**
     * Allow users to zoom in and pan the display. If this is enabled,
     * then pressing the 'c' key on the keyboard will center the view.
     */
    allowPanningAndZooming: PropTypes.bool,

    /**
     * Dash-assigned callback that gets fired when the value changes.
     */
    setProps: PropTypes.func,
};

FornaContainer.defaultProps = {
    height: 500,
    width: 300,
    sequences: [],
    allowPanningandZooming: true,
    labelInterval: 10,
    colorScheme: 'sequence',
};
