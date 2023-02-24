import React, {Component, lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import LazyLoader from '../LazyLoader';

const RealFornaContainer = lazy(LazyLoader.fornacontainer);

/**
 * FornaContainer is a force-directed graph that is used to visualize
 * the secondary structure of biomolecules. It is based on the fornac
 * library (https://github.com/ViennaRNA/fornac).
 */
export default class FornaContainer extends Component {
    render() {
        return (
            <Suspense fallback={null}>
                <RealFornaContainer {...this.props} />
            </Suspense>
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

    /**
     * Allow users to specify which information will be displayed after
     * hover on the elements. To render node property place it into ${}
     * construction. For example: 'Structure name is ${structName} - ${num}'.
     * Acceptable node properties are "num", "radius", "rna", "nodeType",
     * "structName", "size", "uid", "name".
     */
    hoverPattern: PropTypes.string,

    /**
     * Object that holds the loading state object coming from dash-renderer
     */
    loading_state: PropTypes.shape({
        /**
         * Determines if the component is loading or not
         */
        is_loading: PropTypes.bool,
        /**
         * Holds which property is loading
         */
        prop_name: PropTypes.string,
        /**
         * Holds the name of the component that is loading
         */
        component_name: PropTypes.string,
    }),
};

FornaContainer.defaultProps = {
    height: 500,
    width: 300,
    sequences: [],
    allowPanningAndZooming: true,
    colorScheme: 'sequence',
};

export const defaultProps = FornaContainer.defaultProps;
export const propTypes = FornaContainer.propTypes;
