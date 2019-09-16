import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {omit} from 'ramda';

import {AlignmentChart as PreAlignementChart} from 'react-alignment-viewer';

/**
 * The Alignment Viewer (MSA) component is used to align multiple genomic
 * or proteomic sequences from a FASTA or Clustal file. Among its
 * extensive set of features, the multiple sequence alignment viewer
 * can display multiple subplots showing gap and conservation info,
 * alongside industry standard colorscale support and consensus sequence.
 * No matter what size your alignment is, Aligment Viewer is able to display
 * your genes or proteins snappily thanks to the underlying WebGL architecture
 * powering the component. You can quickly scroll through your long sequence
 * with a slider or a heatmap overview.
 * Note that the AlignmentChart only returns a chart of the sequence, while
 * AlignmentViewer has integrated controls for colorscale, heatmaps, and subplots
 * allowing the user to interactively control their sequences.
 * Read more about the component here:
 * https://github.com/plotly/react-alignment-viewer
 */
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

        // TODO handle this in react-alignment-viewer instead
        if (this.props.colorscale === null) {
            this.props.colorscale = 'clustal2';
        }

        return (
            <div id={id} eventDatum={eventDatum}>
                <PreAlignementChart
                    onChange={this.handleChange}
                    {...omit(
                        ['fireEvent', 'dashEvent', 'setProps'],
                        this.props
                    )}
                />
            </div>
        );
    }
}

AlignmentChart.propTypes = {
    /**
     * The ID of this component, used to identify dash components
     * in callbacks. The ID needs to be unique across all of the
     * components in an app.
     */
    id: PropTypes.string,

    /**
     * Dash-assigned callback that should be called whenever any of the
     * properties change.
     */
    setProps: PropTypes.func,

    /**
     * A Dash prop that returns data on clicking, hovering or resizing the viewer.
     */
    eventDatum: PropTypes.string,

    /**
     * Input data, either in FASTA or Clustal format.
     */
    data: PropTypes.string,

    /**
     *Format type of the input data, either in FASTA or Clustal.
     */
    extension: PropTypes.string,

    /**
     * Colorscale in 'buried', 'cinema', 'clustal', 'clustal2', 'helix', 'hydrophobicity'
     * 'lesk', 'mae', 'nucleotide', 'purine', 'strand', 'taylor', 'turn', 'zappo',
     * or your own colorscale as a {'nucleotide': COLOR} dict.
     * Note that this is NOT a standard plotly colorscale.
     */
    colorscale: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),

    /**
     * Opacity of the main plot as a value between 0 and 1.
     */
    opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Color of the nucleotide labels, in common name, hex, rgb or rgba format.
     * If left blank, handled by the colorscale automatically.
     */
    textcolor: PropTypes.string,

    /**
     * Size of the nucleotide labels, as a number.
     */
    textsize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Toggles displaying sequence labels at left of alignment
     */
    showlabel: PropTypes.bool,

    /**
     * Toggles displaying sequence IDs at left of alignment.
     */
    showid: PropTypes.bool,

    /**
     * Enables the display of conservation secondary barplot where the most conserved
     * nucleotides or amino acids get greater bars.
     */
    showconservation: PropTypes.bool,

    /**
     * Color of the conservation secondary barplot, in common name, hex, rgb or rgba format.
     */
    conservationcolor: PropTypes.string,

    /**
     * Colorscale of the conservation barplot, in Plotly colorscales (e.g. 'Viridis')
     * or as custom Plotly colorscale under a list format.
     * Note that this conservationcolorscale argument
     * does NOT follow the same format as the colorscale argument.
     */
    conservationcolorscale: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array,
    ]),

    /**
     * Opacity of the conservation secondary barplot as a value between 0 and 1.
     */
    conservationopacity: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),

    /**
     * Whether to use most conserved ratio (MLE) 'conservation'
     * or normalized entropy 'entropy' to determine conservation,
     * which is a value between 0 and 1 where 1 is most conserved.
     */
    conservationmethod: PropTypes.oneOf(['conservation', 'entropy']),

    /**
     * Whether to normalize the conservation barchart
     * By multiplying it elementwise with the gap barchart, as to
     * lower the conservation values across sequences regions with many gaps.
     */
    correctgap: PropTypes.bool,

    /**
     * Enables the display of gap secondary barplot where the sequence regions
     * with the fewest gaps get the greatest bars.
     */
    showgap: PropTypes.bool,

    /**
     * Color of the gap secondary barplot, in common name, hex, rgb or rgba format.
     */
    gapcolor: PropTypes.string,

    /**
     * Colorscale of the gap barplot, in Plotly colorscales (e.g. 'Viridis')
     * or as custom Plotly colorscale under a list format.
     * Note that this conservationcolorscale argument
     * does NOT follow the same format as the colorscale argument.
     */
    gapcolorscale: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

    /**
     * Opacity of the gap secondary barplot as a value between 0 and 1.
     */
    gapopacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * If both conservation and gap are enabled,
     * toggles whether to group bars or to stack them as separate subplots.
     * No effect if not both gap and conservation are shown.
     */
    groupbars: PropTypes.bool,

    /**
     * Displays toggling the consensus sequence, where each nucleotide in the
     * consensus sequence is the argmax of its distribution at a set nucleotide.
     */
    showconsensus: PropTypes.bool,

    /**
     * Sets how many pixels each nucleotide/amino acid on the Alignment Viewer
     * takes up horizontally. The total number of tiles (numtiles) seen
     * horizontally is automatically determined by rounding
     * the Viewer width divided by the tile width.
     * the Viewwer width divided by the tile witdth.
     */
    tilewidth: PropTypes.number,

    /**
     * Sets how many pixels each nucleotide/amino acid on the Alignment Viewer
     * takes up vertically.
     * If enabled, set height dynamically.
     */
    tileheight: PropTypes.number,

    /**
     * Toggles whether the overview should be a heatmap, a slider, or none.
     */
    overview: PropTypes.oneOf(['heatmap', 'slider', 'none']),

    /**
     * Sets how many tiles to display across horitontally. If enabled,
     * overrides tilewidth and sets the amount of tiles directly based off
     * that value.
     */
    numtiles: PropTypes.number,

    /**
     * If overview is set to 'scroll', determines how many tiles to skip
     * with each slider movement.
     * Has no effect if scroll is not enabled (such as with overview or none).
     */
    scrollskip: PropTypes.number,

    /**
     * Determines where to start annotating the first tile.
     * If let blank will be automatically determined by Plotly.
     * Equivalent to Plotly's tick0 property.
     * Does not function if overview mode 'slider' is applied. (Current bug)
     */
    tickstart: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Determines at what interval to keep annotating the tiles.
     * If left blank will be automatially determined by Plotly.
     * Equivalent to Plotly's dtick property.
     * Does not function if overview mode 'slider' is applied. (Current bug)
     */
    ticksteps: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Width of the Viewer.
     * Property takes precedence over tileswidth and numtiles
     * if either of them is set.
     */
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    /**
     * Width of the Viewer.
     * Property takes precedence over tilesheight if both
     * are set.
     */
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

AlignmentChart.defaultProps = {
    // Data
    extension: 'fasta',
    colorscale: 'clustal2',
    opacity: null,
    textcolor: null,
    textsize: 10,
    showlabel: true,
    showid: true,
    showconservation: true,
    conservationcolor: null,
    conservationcolorscale: 'Viridis',
    conservationopacity: null,
    conservationmethod: 'entropy',
    correctgap: true,
    showgap: true,
    gapcolor: 'grey',
    gapcolorscale: null,
    gapopacity: null,
    groupbars: false,
    showconsensus: true,
    // Layout
    tilewidth: 16,
    tileheight: 16,
    numtiles: null,
    overview: 'heatmap',
    scrollskip: 10,
    tickstart: null,
    ticksteps: null,
    // Other
    width: null,
    height: 900,
};
