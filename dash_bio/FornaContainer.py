# AUTO GENERATED FILE - DO NOT EDIT

from dash.development.base_component import Component, _explicitize_args


class FornaContainer(Component):
    """A FornaContainer component.
FornaContainer is a force-directed graph that is used to visualize
the secondary structure of biomolecules. It is based on the fornac
library (https://github.com/ViennaRNA/fornac).

Keyword arguments:

- id (string; optional):
    The ID of this component, used to identify dash components in
    callbacks. The ID needs to be unique across all of the components
    in an app.

- allowPanningAndZooming (boolean; default True):
    Allow users to zoom in and pan the display. If this is enabled,
    then pressing the 'c' key on the keyboard will center the view.

- colorScheme (a value equal to: 'sequence', 'structure', 'positions', 'custom'; default 'sequence'):
    The color scheme that is used to color the nodes.

- customColors (dict; optional):
    The custom colors used to color the nodes if the 'custom' option
    is chosen for the `colorScheme` prop. For example, if the domain
    is `[0, 20]`, the range is `['yellow', 'red']`, and the dictionary
    specified in 'colorValues' that corresponds to a molecule is
    `{'6': 10}`, the sixth nucleotide in that molecule will have a
    color that is perfectly in between yellow and red (i.e., orange),
    since 10 is perfectly in between 0 and 20.

    `customColors` is a dict with keys:

    - colorValues (dict with strings as keys and values of type dict with strings as keys and values of type string | number; optional):
        A dictionary which contains keys, each of which are either an
        empty string (`''`) or the name of a molecule that has been
        defined in the `name` prop in the `options` for a sequence in
        the `sequences` property. The value corresponding to the key
        that is an empty string (if that key exists) is a \"default\"
        color scheme that will be applied first, and can be overridden
        by the color schemes defined for molecule-specific keys. The
        aforementioned color schemes each take the form of a
        dictionary in which the keys are the nucleotide positions and
        the values are either a) numbers to be normalized with respect
        to the scale defined in `domain` (so that their color will be
        calculated), or b) direct string representations of colors.

    - domain (list of numbers; optional):
        The limits for the color scale. This is used with the range
        specified in `range` to calculate the color of a given
        nucleotide, based on the number that it is assigned.

    - range (list of strings; optional):
        The range of colors that will be used in conjunction with the
        `domain` prop.

- height (number; default 500):
    The height (in px) of the container in which the molecules will be
    displayed.

- hoverPattern (string; optional):
    Allow users to specify which information will be displayed after
    hover on the elements. To render node property place it into ${}
    construction. For example: 'Structure name is ${structName} -
    ${num}'. Acceptable node properties are \"num\", \"radius\",
    \"rna\", \"nodeType\", \"structName\", \"size\", \"uid\",
    \"name\".

- loading_state (dict; optional):
    Object that holds the loading state object coming from
    dash-renderer.

    `loading_state` is a dict with keys:

    - component_name (string; optional):
        Holds the name of the component that is loading.

    - is_loading (boolean; optional):
        Determines if the component is loading or not.

    - prop_name (string; optional):
        Holds which property is loading.

- nodeFillColor (string; optional):
    The fill color for all of the nodes. This will override any color
    scheme defined in colorScheme.

- sequences (list of dicts; optional):
    The molecules that will be displayed.

    `sequences` is a list of dicts with keys:

    - options (dict; optional):
        Additional options to be applied to the rendering of the RNA
        molecule.

        `options` is a dict with keys:

        - applyForce (boolean; optional):
            Indicate whether the force-directed layout will be applied
            to the displayed molecule. Enabling this option allows
            users to change the layout of the molecule by selecting
            and dragging the individual nucleotide nodes. True by
            default.

        - avoidOthers (boolean; optional):
            Whether or not this molecule should \"avoid\" other
            molecules in the map.

        - circularizeExternal (boolean; optional):
            This only makes sense in connection with the applyForce
            argument. If it's True, the external loops will be
            arranged in a nice circle. If False, they will be allowed
            to flop around as the force layout dictates. True by
            default.

        - labelInterval (number; optional):
            Change how often nucleotide numbers are labelled with
            their number. 10 by default.

        - name (string; optional):
            The molecule name; this is used in custom color scales.

    - sequence (string; required):
        A string representing the RNA nucleotide sequence of the RNA
        molecule.

    - structure (string; required):
        A dot-bracket string
        (https://software.broadinstitute.org/software/igv/RNAsecStructure)
        that specifies the secondary structure of the RNA molecule.

- width (number; default 300):
    The width (in px) of the container in which the molecules will be
    displayed."""
    @_explicitize_args
    def __init__(self, id=Component.UNDEFINED, height=Component.UNDEFINED, width=Component.UNDEFINED, sequences=Component.UNDEFINED, nodeFillColor=Component.UNDEFINED, colorScheme=Component.UNDEFINED, customColors=Component.UNDEFINED, allowPanningAndZooming=Component.UNDEFINED, hoverPattern=Component.UNDEFINED, loading_state=Component.UNDEFINED, **kwargs):
        self._prop_names = ['id', 'allowPanningAndZooming', 'colorScheme', 'customColors', 'height', 'hoverPattern', 'loading_state', 'nodeFillColor', 'sequences', 'width']
        self._type = 'FornaContainer'
        self._namespace = 'dash_bio'
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'allowPanningAndZooming', 'colorScheme', 'customColors', 'height', 'hoverPattern', 'loading_state', 'nodeFillColor', 'sequences', 'width']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs
        args = {k: _locals[k] for k in _explicit_args if k != 'children'}
        for k in []:
            if k not in args:
                raise TypeError(
                    'Required argument `' + k + '` was not specified.')
        super(FornaContainer, self).__init__(**args)
