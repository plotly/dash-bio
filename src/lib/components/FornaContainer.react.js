import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FornaContainer as PreFornaContainer} from 'fornac';
import * as R from 'ramda';

/**
 * FornaContainer is a force-directed graph that is used to visualize
 * the secondary structure of biomolecules. It is based on the fornac
 * library (https://github.com/ViennaRNA/fornac).
 */
export default class FornaContainer extends Component {
    constructor(props) {
        super(props);
        this.renderNewSequences = this.renderNewSequences.bind(this);
        this.containerRef = React.createRef();
    }

    componentDidMount() {
        const {
            height,
            width,
            nodeFillColor,
            colorScheme,
            customColors,
            allowPanningAndZooming,
        } = this.props;

        this._fornaContainer = new PreFornaContainer(
            this.containerRef.current,
            {
                initialSize: [width, height],
                allowPanningAndZooming: allowPanningAndZooming,
            }
        );
        // initialize the correct colors
        this._fornaContainer.addCustomColors(customColors);
        this._fornaContainer.changeColorScheme(colorScheme);

        this.renderNewSequences();

        if (nodeFillColor !== undefined) {
            this._fornaContainer.setOutlineColor(nodeFillColor);
        }
    }

    componentDidUpdate() {
        this.renderNewSequences();
    }

    renderNewSequences() {
        const {sequences} = this.props;

        if (this._fornaContainer) {
            this._fornaContainer.clearNodes();

            sequences.forEach(seq => {
                const unpackedOptions = Object.assign({}, seq.options, {
                    sequence: seq.sequence,
                    structure: seq.structure,
                });
                this._fornaContainer.addRNA(seq.structure, unpackedOptions);
            });
        }
    }

    shouldComponentUpdate(nextProps) {
        const {sequences, colorScheme} = this.props;

        if (!R.equals(sequences, nextProps.sequences)) {
            return true;
        }
        this._fornaContainer.addCustomColors(nextProps.customColors);
        this._fornaContainer.changeColorScheme(colorScheme);

        if (nextProps.nodeFillColor !== undefined) {
            this._fornaContainer.setOutlineColor(nextProps.nodeFillColor);
        }

        return false;
    }

    render() {
        return (
            <div
                id={this.props.id}
                ref={this.containerRef}
                style={{outline: 'none'}}
            />
        );
    }
}

FornaContainer.propTypes = {
    /**
     * The ID of this component, used to identify dash components in
     * callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

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
    colorScheme: PropTypes.oneOf([
        'sequence',
        'structure',
        'positions',
        'custom',
    ]),

    /**
     * The custom colors used to color the nodes if the 'custom'
     * option is chosen for the `colorScheme` prop.
     * For example, if the domain is `[0, 20]`, the range is
     * `['yellow', 'red']`, and the dictionary specified in
     * 'colorValues' that corresponds to a molecule is `{'6': 10}`,
     * the sixth nucleotide in that molecule will have a color that is
     * perfectly in between yellow and red (i.e., orange), since 10 is
     * perfectly in between 0 and 20.
     */
    customColors: PropTypes.exact({
        /**
         * The limits for the color scale. This is used with the range
         * specified in `range` to calculate the color of a given
         * nucleotide, based on the number that it is assigned.
         */
        domain: PropTypes.arrayOf(PropTypes.number),

        /**
         * The range of colors that will be used in conjunction with
         * the `domain` prop.
         */
        range: PropTypes.arrayOf(PropTypes.string),

        /**
         * A dictionary which contains keys, each of which are either
         * an empty string (`''`) or the name of a molecule that has
         * been defined in the `name` prop in the `options` for a
         * sequence in the `sequences` property.
         * The value corresponding to the key that is an empty string
         * (if that key exists) is a "default" color scheme that will
         * be applied first, and can be overridden by the color
         * schemes defined for molecule-specific keys. The
         * aforementioned color schemes each take the form of a
         * dictionary in which the keys are the nucleotide positions
         * and the values are either a) numbers to be normalized with
         * respect to the scale defined in `domain` (so that their
         * color will be calculated), or b) direct string
         * representations of colors.
         */
        colorValues: PropTypes.objectOf(
            PropTypes.objectOf(
                PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            )
        ),
    }),

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
    allowPanningAndZooming: true,
    colorScheme: 'sequence',
};
