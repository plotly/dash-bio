import React, {Component} from 'react';
import {propTypes, defaultProps} from '../components/SequenceViewer.react';

// Residues per space-separated group inside a line
const GROUP_SIZE = 10;
const SEARCH_COLOR = '#C50063';
// Wait for the user to stop typing before the search runs
const SEARCH_DELAY_MS = 300;
// eslint-disable-next-line no-magic-numbers
const CHARS_PER_LINE_CHOICES = [50, 60, 70, 80, 90, 100];

const MONOSPACE_STYLE = {
    fontFamily: 'monospace',
    fontSize: '13px',
    display: 'inline-block',
};

/**
 * Find all matches of a case-insensitive regular expression in a sequence.
 *
 * @param sequence - Sequence to search
 * @param query - Regular expression source from the search box
 * @returns Matches in sequence order, with 1-based inclusive `start` and
 * `end`, or an empty array if `query` is empty or not a valid expression
 */
function findMatches(sequence, query) {
    if (!query) {
        return [];
    }
    let regex;
    try {
        regex = new RegExp(query, 'gi');
    } catch (e) {
        return [];
    }
    const matches = [];
    let match;
    while ((match = regex.exec(sequence)) !== null) {
        if (match[0].length === 0) {
            // A zero-length match does not advance lastIndex by itself
            regex.lastIndex += 1;
            continue;
        }
        matches.push({
            start: match.index + 1,
            end: match.index + match[0].length,
            sequence: match[0],
        });
    }
    return matches;
}

/**
 * Split a sequence into styled segments.
 *
 * @param length - Length of the sequence
 * @param baseRanges - Coverage or selection ranges, with 0-based `start` and
 * exclusive `end`. A later range wins where two ranges overlap.
 * @param overlayRanges - Search match ranges in the same form, drawn on top
 * of `baseRanges`
 * @returns Segments that cover [0, length) in order. Each segment holds the
 * base range and the overlay range that cover it, or null for each.
 */
function splitSegments(length, baseRanges, overlayRanges) {
    const clamp = (value) => Math.min(Math.max(value, 0), length);
    const cuts = new Set([0, length]);
    [...baseRanges, ...overlayRanges].forEach((range) => {
        cuts.add(clamp(range.start));
        cuts.add(clamp(range.end));
    });
    const points = Array.from(cuts).sort((a, b) => a - b);
    const segmentIndex = new Map(points.map((point, i) => [point, i]));

    const ownersOf = (ranges) => {
        const owners = new Array(points.length - 1).fill(null);
        ranges.forEach((range) => {
            const end = clamp(range.end);
            for (
                let i = segmentIndex.get(clamp(range.start));
                i < owners.length && points[i + 1] <= end;
                i++
            ) {
                owners[i] = range;
            }
        });
        return owners;
    };
    const base = ownersOf(baseRanges);
    const overlay = ownersOf(overlayRanges);

    return base.map((range, i) => ({
        start: points[i],
        end: points[i + 1],
        base: range,
        overlay: overlay[i],
    }));
}

export default class SequenceViewer extends Component {
    constructor(props) {
        super(props);
        this.state = {searchQuery: '', charsPerLineChoice: null};
        this.fastaRef = React.createRef();
        this.searchTimer = null;
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onCharsPerLineChange = this.onCharsPerLineChange.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    componentDidUpdate(prevProps) {
        // A new charsPerLine from Dash replaces the toolbar choice
        if (
            prevProps.charsPerLine !== this.props.charsPerLine &&
            this.state.charsPerLineChoice !== null
        ) {
            this.setState({charsPerLineChoice: null});
        }
    }

    componentWillUnmount() {
        clearTimeout(this.searchTimer);
    }

    getSequence() {
        return this.props.sequence || '';
    }

    getCharsPerLine() {
        const value =
            this.state.charsPerLineChoice !== null
                ? this.state.charsPerLineChoice
                : this.props.charsPerLine;
        return value > 0 ? Math.floor(value) : this.getSequence().length || 1;
    }

    onSearchChange(event) {
        const searchInput = event.target.value;
        clearTimeout(this.searchTimer);
        this.searchTimer = setTimeout(() => {
            this.setState({searchQuery: searchInput});
            if (this.props.setProps) {
                // Report the matches last to first, as earlier versions did
                this.props.setProps({
                    subpartSelected: findMatches(
                        this.getSequence(),
                        searchInput
                    ).reverse(),
                });
            }
        }, SEARCH_DELAY_MS);
    }

    onCharsPerLineChange(event) {
        const value = parseInt(event.target.value, 10);
        if (value > 0) {
            this.setState({charsPerLineChoice: value});
        }
    }

    onMouseUp() {
        const fasta = this.fastaRef.current;
        const selection = window.getSelection && window.getSelection();
        if (
            !fasta ||
            !selection ||
            selection.rangeCount === 0 ||
            selection.isCollapsed ||
            !this.props.setProps
        ) {
            return;
        }

        const range = selection.getRangeAt(0);
        const residuesBefore = (container, offset) => {
            const before = document.createRange();
            before.selectNodeContents(fasta);
            // Clamp a boundary outside the sequence to its nearest end
            if (!fasta.contains(container)) {
                const position = fasta.compareDocumentPosition(container);
                // eslint-disable-next-line no-bitwise
                return position & Node.DOCUMENT_POSITION_PRECEDING
                    ? 0
                    : this.getSequence().length;
            }
            before.setEnd(container, offset);
            return before.toString().replace(/\s/g, '').length;
        };

        const start = residuesBefore(range.startContainer, range.startOffset);
        const end = residuesBefore(range.endContainer, range.endOffset);
        if (end <= start) {
            return;
        }

        // Positions are 1-based and inclusive, as earlier versions reported
        this.props.setProps({
            mouseSelection: {
                selection: this.getSequence().slice(start, end),
                start: start + 1,
                end,
            },
        });
    }

    /**
     * Format residues in [start, end) of the sequence for display.
     *
     * @param start - First residue index, 0-based
     * @param end - Residue index after the last residue
     * @param keyPrefix - Prefix for the keys of the line breaks
     * @returns Text and `<br>` elements, with a space after each group of
     * residues and a line break after each line, except after the last residue
     */
    formatResidues(start, end, keyPrefix) {
        const sequence = this.getSequence();
        if (!this.props.wrapAminoAcids) {
            return [sequence.slice(start, end)];
        }

        const charsPerLine = this.getCharsPerLine();
        const parts = [];
        let text = '';
        let position = start;
        while (position < end) {
            const column = position % charsPerLine;
            const groupEnd = Math.min(
                position + GROUP_SIZE - (column % GROUP_SIZE),
                position + charsPerLine - column,
                end
            );
            text += sequence.slice(position, groupEnd);
            position = groupEnd;

            // A line end is also a group end
            const atGroupEnd = (position % charsPerLine) % GROUP_SIZE === 0;
            if (atGroupEnd && position < sequence.length) {
                text += ' ';
                if (position % charsPerLine === 0) {
                    parts.push(text);
                    parts.push(<br key={`${keyPrefix}-${position}`} />);
                    text = '';
                }
            }
        }
        if (text) {
            parts.push(text);
        }
        return parts;
    }

    renderLineNumbers() {
        if (!this.props.showLineNumbers) {
            return null;
        }
        const length = this.getSequence().length;
        const charsPerLine = this.props.wrapAminoAcids
            ? this.getCharsPerLine()
            : Math.max(length, 1);
        const numbers = [];
        for (
            let first = 0;
            first < Math.max(length, 1);
            first += charsPerLine
        ) {
            numbers.push(first + 1);
            numbers.push(<br key={first} />);
        }
        return numbers;
    }

    renderSequence() {
        const sequence = this.getSequence();
        const {coverage, selection, setProps} = this.props;

        const searchRanges = findMatches(
            sequence,
            this.props.search ? this.state.searchQuery : ''
        ).map((match) => ({
            start: match.start - 1,
            end: match.end,
            className: 'stringsSelected',
            style: {background: SEARCH_COLOR, color: 'white'},
        }));

        // The selection replaces the coverage, as the prop docs state
        const useCoverage = !(selection && selection.length > 0);
        const baseRanges = useCoverage
            ? (coverage || []).map((entry, index) => ({
                  start: entry.start,
                  end: entry.end,
                  title: entry.tooltip,
                  // React leaves out a style property that is undefined
                  style: {
                      textDecoration: entry.underscore
                          ? 'underline'
                          : undefined,
                      color: entry.color,
                      background: entry.bgcolor,
                      cursor: 'pointer',
                  },
                  onClick: setProps
                      ? () => setProps({coverageClicked: index})
                      : undefined,
              }))
            : [
                  {
                      start: selection[0],
                      end: selection[1],
                      className: 'stringSelected',
                      style: {background: selection[2], color: 'white'},
                  },
              ];

        const hasCoverage = baseRanges.length > 0 && useCoverage;
        const segments = splitSegments(
            sequence.length,
            baseRanges,
            searchRanges
        );

        return segments.map(({start, end, base, overlay}) => {
            const content = this.formatResidues(start, end, `br-${start}`);
            // Search highlights sit on top of the coverage section below them
            const owner = overlay || base;
            if (!owner) {
                // Gaps between coverage sections are spans, as before
                return hasCoverage ? (
                    <span key={start} style={{color: 'black'}}>
                        {content}
                    </span>
                ) : (
                    <React.Fragment key={start}>{content}</React.Fragment>
                );
            }
            return (
                <span
                    key={start}
                    className={owner.className}
                    style={owner.style}
                    title={base ? base.title : undefined}
                    onClick={base ? base.onClick : undefined}
                >
                    {content}
                </span>
            );
        });
    }

    renderLegend() {
        const {legend} = this.props;
        if (!legend) {
            return null;
        }
        return legend.map((item, index) => (
            <React.Fragment key={index}>
                <div
                    style={Object.assign(
                        {
                            display: 'inline-block',
                            background: item.color,
                            width: '20px',
                            height: '20px',
                            verticalAlign: 'middle',
                            margin: '0px 5px 0px 10px',
                            borderRadius: '50%',
                        },
                        item.underscore
                            ? {
                                  border: '1px solid grey',
                                  textAlign: 'center',
                                  lineHeight: 0.8,
                              }
                            : {}
                    )}
                >
                    {item.underscore ? '_' : null}
                </div>
                <p
                    style={{
                        display: 'inline-block',
                        fontWeight: 'bold',
                        fontSize: '11px',
                        fontStyle: 'italic',
                        margin: 0,
                        paddingTop: '3px',
                        verticalAlign: 'top',
                    }}
                >
                    {item.name}
                </p>
            </React.Fragment>
        ));
    }

    render() {
        const {id, title, badge, search, toolbar, sequenceMaxHeight} =
            this.props;
        const selectId = id ? `${id}-cpl` : undefined;

        return (
            <div
                id={id}
                data-dash-is-loading={
                    (this.props.loading_state &&
                        this.props.loading_state.is_loading) ||
                    undefined
                }
            >
                <div
                    className="sequenceHeader row"
                    style={{
                        borderBottom: '1px solid #E7EAEC',
                        paddingBottom: '5px',
                        margin: '0px 0px 10px',
                    }}
                >
                    {badge ? (
                        <div style={{display: 'inline-block'}}>
                            <span
                                className="badge"
                                style={{
                                    borderRadius: '70%',
                                    border: '2px solid black',
                                    color: '#C50063',
                                    padding: '8px 5px',
                                    backgroundColor: 'white',
                                    marginRight: '10px',
                                    verticalAlign: 'middle',
                                    minWidth: '32px',
                                }}
                            >
                                {this.getSequence().length}
                            </span>
                        </div>
                    ) : null}
                    <h4
                        style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                        }}
                    >
                        {title}
                    </h4>
                    {search ? (
                        <input
                            className="inputSearchSeq form-control pull-right"
                            type="text"
                            style={{width: '40%', marginTop: '3px'}}
                            placeholder="Search in sequence.. (Regex supported)"
                            onChange={this.onSearchChange}
                        />
                    ) : null}
                </div>
                <div className="sequenceBody" style={{marginTop: '5px'}}>
                    {toolbar ? (
                        <form
                            className="form-inline"
                            style={{marginBottom: '5px'}}
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <div className="form-group form-group-sm sequenceToolbar">
                                <label
                                    className="control-label charPerLine-label"
                                    htmlFor={selectId}
                                    style={{marginRight: '5px'}}
                                >
                                    Char per line
                                </label>
                                <select
                                    className="CPLChoice form-control"
                                    id={selectId}
                                    style={{
                                        display: 'inline-block',
                                        width: 'auto',
                                        marginRight: '10px',
                                    }}
                                    value={this.state.charsPerLineChoice || ''}
                                    onChange={this.onCharsPerLineChange}
                                >
                                    <option value="">Select</option>
                                    {CHARS_PER_LINE_CHOICES.map((choice) => (
                                        <option key={choice} value={choice}>
                                            {choice}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </form>
                    ) : null}
                    <div
                        className="scroller"
                        style={{
                            maxHeight: sequenceMaxHeight,
                            overflow: 'auto',
                            whiteSpace: 'nowrap',
                            paddingRight: '20px',
                            marginRight: '10px',
                        }}
                    >
                        <div
                            className="charNumbers"
                            style={Object.assign({}, MONOSPACE_STYLE, {
                                textAlign: 'right',
                                paddingRight: '5px',
                                borderRight: '1px solid LightGray',
                            })}
                        >
                            {this.renderLineNumbers()}
                        </div>
                        <div
                            className="fastaSeq"
                            ref={this.fastaRef}
                            style={Object.assign({}, MONOSPACE_STYLE, {
                                padding: '5px',
                            })}
                            onMouseUp={this.onMouseUp}
                        >
                            {this.renderSequence()}
                        </div>
                    </div>
                    <div
                        className="coverageLegend"
                        style={{marginTop: '10px', marginLeft: '15px'}}
                    >
                        {this.renderLegend()}
                    </div>
                </div>
            </div>
        );
    }
}

SequenceViewer.defaultProps = defaultProps;
SequenceViewer.propTypes = propTypes;
