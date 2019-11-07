(window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || []).push([[6],{

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "OncoPrint", {
  enumerable: true,
  get: function get() {
    return _OncoPrint.default;
  }
});

var _OncoPrint = _interopRequireDefault(__webpack_require__(143));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(1));

var _propTypes = _interopRequireDefault(__webpack_require__(0));

var _lodash = _interopRequireDefault(__webpack_require__(44));

var _reactPlotly = _interopRequireDefault(__webpack_require__(47));

var _utils = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

/**
 * The OncoPrint component is used to view multiple genetic alteration events
 * through an interactive and zoomable heatmap. It is a React/Dash port of the
 * popular oncoPrint() function from the BioConductor R package.
 * Under the hood, the rendering is done using Plotly.js built upon D3.
 * Plotly's interactivity allows the user to bind clicks and hovers to genetic
 * events, allowing the user to create complex bioinformatic apps or workflows
 * that rely on crossfiltering.
 * Read more about the component here:
 * https://github.com/plotly/react-oncoprint
 */
var OncoPrint =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(OncoPrint, _PureComponent);

  // Constructor
  function OncoPrint(props) {
    var _this;

    _classCallCheck(this, OncoPrint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OncoPrint).call(this, props));
    _this.state = {
      xStart: null,
      xEnd: null
    };
    _this.resetWindowing = _this.resetWindowing.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _lodash.default.debounce(_this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this))), 250);
    return _this;
  } // Reset windowing to user preset on init or data change


  _createClass(OncoPrint, [{
    key: "resetWindowing",
    value: function resetWindowing(props) {
      var range = props.range;
      var xStart, xEnd;

      if (range.length === 2) {
        xStart = range[0];
        xEnd = range[1];
      } else {
        xStart = null;
        xEnd = null;
      }

      return {
        xStart: xStart,
        xEnd: xEnd
      };
    } // Handle plot events

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      if (!this.props.onChange) {
        return;
      } // CLick (mousedown) or hover (mousemove)


      if (event.points) {
        var eventType;

        if (event.event.type === "mousedown") {
          eventType = 'Click';
        } else if (event.event.type === "mousemove") {
          eventType = 'Hover';
        } else {
          eventType = 'Other';
        }

        this.props.onChange({
          eventType: eventType,
          name: event.points[0].data.name,
          text: event.points[0].text,
          curveNumber: event.points[0].curveNumber,
          x: event.points[0].x,
          y: event.points[0].y
        });
      } // Zoom
      else if (event['xaxis.range[0]'] || event['xaxis.range']) {
          this.setState({
            xStart: event['xaxis.range[0]'] || event['xaxis.range'][0],
            xEnd: event['xaxis.range[1]'] || event['xaxis.range'][1]
          });
          this.props.onChange({
            eventType: 'Zoom',
            xStart: event['xaxis.range[0]'] || event['xaxis.range'][0],
            xEnd: event['xaxis.range[1]'] || event['xaxis.range'][1]
          });
        } // Autozoom
        else if (event['xaxis.autorange'] === true) {
            this.setState({
              xStart: null,
              xEnd: null
            });
            this.props.onChange({
              eventType: 'Autoscale'
            });
          } // Guard
          else {
              this.props.onChange(event);
            }
    }
  }, {
    key: "getData",
    // Fetch data
    value: function getData() {
      var _this$props = this.props,
          inputData = _this$props.data,
          padding = _this$props.padding,
          colorscale = _this$props.colorscale,
          backgroundcolor = _this$props.backgroundcolor; // OncoPrint equivalent of x, y

      var events = (0, _utils.aggregate)(inputData);
      var genes = (0, _utils.getSortedGenes)(inputData);
      var samples = (0, _utils.getSortedSamples)(inputData);
      var ratios = (0, _utils.getEventRatiosPerGene)(inputData, samples.length);

      var formatGenes = function formatGenes(list) {
        return list.map(function (gene) {
          return "".concat(gene, " (").concat(ratios[gene], "%)");
        });
      };

      var base = 0;
      var bBackground = [];
      var tBackground = [];
      var xBackground = [];
      var yBackground = []; // Background is used to draw the matrix (genes * samples)

      samples.forEach(function (s) {
        bBackground.push.apply(bBackground, _toConsumableArray(Array(genes.length).fill(base)));
        tBackground.push.apply(tBackground, _toConsumableArray(Array(genes.length).fill(s)));
        xBackground.push.apply(xBackground, _toConsumableArray(Array(genes.length).fill(1)));
        yBackground.push.apply(yBackground, _toConsumableArray(formatGenes(genes)));
        base += 1;
      });
      var background = {
        base: bBackground.map(function (i) {
          return i + padding;
        }),
        hoverinfo: 'text',
        marker: {
          color: backgroundcolor
        },
        name: 'No alteration',
        text: tBackground,
        orientation: 'h',
        type: 'bar',
        x: xBackground.map(function (i) {
          return i - padding * 2;
        }),
        y: yBackground
      };
      var data = [background];
      Object.keys(events).forEach(function (key) {
        var aggr = events[key]; // Resize width depending on the mutation type

        var width = 0.4;

        if (aggr.type === 'CNA') {
          width = 0.8;
        } else if (aggr.type === 'EXP') {
          width = 0.6;
        } // Mutations should have the original text on it, not the type of mutation


        var text_arr = aggr.events.map(function (event) {
          return "".concat(event.sample, "<br>").concat((0, _utils.getDisplayName)(event));
        }); // where to draw a bar for this entry

        var indexes = aggr.events.map(function (e) {
          return e.sample;
        }).map(function (s) {
          return samples.findIndex(function (sample) {
            return sample === s;
          });
        });
        data.push({
          base: indexes.map(function (i) {
            return i + padding;
          }),
          hoverinfo: 'text',
          marker: {
            color: (0, _utils.getColor)(aggr.events[0], colorscale)
          },
          name: (0, _utils.getDisplayName)(aggr.events[0]),
          text: text_arr,
          orientation: 'h',
          type: 'bar',
          width: width,
          x: Array(aggr.events.length).fill(1).map(function (i) {
            return i - padding * 2;
          }),
          y: formatGenes((0, _utils.getGeneNames)(aggr.events))
        });
      });
      return data;
    } // Fetch layout

  }, {
    key: "getLayout",
    value: function getLayout() {
      var _this$props2 = this.props,
          showlegend = _this$props2.showlegend,
          showoverview = _this$props2.showoverview,
          width = _this$props2.width,
          height = _this$props2.height;
      var _this$state = this.state,
          xStart = _this$state.xStart,
          xEnd = _this$state.xEnd; // Get initial range

      var initialRange = [xStart, xEnd];
      var layout = {
        barmode: 'stack',
        hovermode: 'closest',
        showlegend: showlegend,
        xaxis: {
          showgrid: false,
          showticklabels: false,
          zeroline: false,
          range: initialRange,
          automargin: true
        },
        yaxis: {
          showgrid: false,
          zeroline: false,
          fixedrange: true,
          automargin: true
        },
        margin: {
          t: 20,
          r: 20,
          b: 20
        }
      };

      if (showoverview) {
        layout.xaxis.rangeslider = {
          autorange: true
        };
      }

      return {
        layout: layout,
        width: width,
        height: height
      };
    } // Set xStart and xEnd on load

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$resetWindowing = this.resetWindowing(this.props),
          xStart = _this$resetWindowing.xStart,
          xEnd = _this$resetWindowing.xEnd;

      this.setState({
        xStart: xStart,
        xEnd: xEnd
      });
    } // Reset xStart and xEnd on data change

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.data !== prevProps.data) {
        var _this$resetWindowing2 = this.resetWindowing(this.props),
            xStart = _this$resetWindowing2.xStart,
            xEnd = _this$resetWindowing2.xEnd;

        this.setState({
          xStart: xStart,
          xEnd: xEnd
        });
      }
    } // Main

  }, {
    key: "render",
    value: function render() {
      var data = this.getData();

      var _this$getLayout = this.getLayout(),
          layout = _this$getLayout.layout,
          width = _this$getLayout.width,
          height = _this$getLayout.height;

      var other = {
        style: {
          width: width,
          height: height
        },
        useResizeHandler: true
      };
      return _react.default.createElement("div", null, _react.default.createElement(_reactPlotly.default, _extends({
        data: data,
        layout: layout,
        onClick: this.handleChange,
        onHover: this.handleChange,
        onRelayout: this.handleChange
      }, other)));
    }
  }]);

  return OncoPrint;
}(_react.PureComponent);

exports.default = OncoPrint;
OncoPrint.propTypes = {
  /**
   * Input data, in CBioPortal format where each list entry is a dict
   * consisting of 'sample', 'gene', 'alteration', and 'type'
   */
  data: _propTypes.default.array,
  // TODO: Add remove empty columns prop

  /**
   * Adjusts the padding (as a proportion of whitespace) between two tracks.
   * Value is a ratio between 0 and 1.
   * Defaults to 0.05 (e.g. 5%). If set to 0, plot will look like a heatmap.
   */
  padding: _propTypes.default.number,

  /**
   * If not null, will override the default OncoPrint colorscale.
   * Default OncoPrint colorscale same as CBioPortal implementation.
   * Make your own colrscale as a {'mutation': COLOR} dict.
   * Supported mutation keys are ['MISSENSE, 'INFRAME', 'FUSION',
   * 'AMP', 'GAIN', 'HETLOSS', 'HMODEL', 'UP', 'DOWN']
   * Note that this is NOT a standard plotly colorscale.
   */
  colorscale: _propTypes.default.oneOfType([_propTypes.default.bool, _propTypes.default.object]),

  /**
   * Default color for the tracks, in common name, hex, rgb or rgba format.
   * If left blank, will default to a light grey rgb(190, 190, 190).
   */
  backgroundcolor: _propTypes.default.string,

  /**
   *.Toogles whether or not to show a legend on the right side of the plot,
   * with mutation information.
   */
  range: _propTypes.default.array,

  /**
   *.Toogles whether or not to show a legend on the right side of the plot,
   * with mutation information.
   */
  showlegend: _propTypes.default.bool,

  /**
   *.Toogles whether or not to show a heatmap overview of the tracks.
   */
  showoverview: _propTypes.default.bool,

  /**
   * Width of the OncoPrint.
   * Will disable auto-resizing of plots if set.
   */
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Height of the OncoPrint.
   * Will disable auto-resizing of plots if set.
   */
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
OncoPrint.defaultProps = {
  // Data
  padding: 0.05,
  colorscale: null,
  backgroundcolor: 'rgb(190, 190, 190)',
  // Layout
  range: [null, null],
  showlegend: true,
  showoverview: true,
  // Other
  width: null,
  height: 500
};

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getColor = exports.getDisplayName = exports.aggregate = exports.getSortedSamples = exports.createSortEventsForGeneComparator = exports.createSamplesMap = exports.isMutation = exports.getEventRatiosPerGene = exports.getSortedGenes = exports.getGeneNames = exports.SupportedEvents = void 0;

var _lodash = _interopRequireDefault(__webpack_require__(44));

var _PrecomputedComparator = _interopRequireDefault(__webpack_require__(145));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var MutationEventTypes = ['INFRAME', 'TRUNC', 'MISSENSE'];
var SupportedEvents = {
  // Mutations
  MISSENSE: {
    colorHTML: '#008000',
    displayName: 'Missense mutation'
  },
  INFRAME: {
    colorHTML: '#993404',
    displayName: 'Inframe mutation'
  },
  TRUNC: {
    colorHTML: '#000000',
    displayName: 'Truncation mutation'
  },
  // Fusion
  FUSION: {
    colorHTML: '#8b00c9',
    displayName: 'Fusion'
  },
  // Copy number alterations
  AMP: {
    colorHTML: '#ff0000',
    displayName: 'Amplification'
  },
  GAIN: {
    colorHTML: '#ffb6c1',
    displayName: 'Gain'
  },
  HETLOSS: {
    colorHTML: '#8fd8d8',
    displayName: 'Shallow deletion'
  },
  HOMDEL: {
    colorHTML: '#0000ff',
    displayName: 'Deep deletion'
  },
  // mRNA expressions
  UP: {
    colorHTML: '#ff9999',
    displayName: 'mRNA Upregulation'
  },
  DOWN: {
    colorHTML: '#6699cc',
    displayName: 'mRNA Downregulation'
  }
}; // Describes the order of importance for CNA events.

exports.SupportedEvents = SupportedEvents;
var AlterationsOrder = {
  AMP: 0,
  GAIN: 2,
  HETLOSS: 3,
  HOMDEL: 1,
  undefined: 4
}; // Describes the order of importance for mutation events.

var MutationsOrder = {
  INFRAME: 1,
  MISSENSE: 3,
  TRUNC: 0,
  undefined: 4
}; // Describes the order of importance for mRNA expression events.

var ExpressionsOrder = {
  UP: 0,
  DOWN: 1,
  undefined: 2
}; // Retrieves the gene names in a set of events.

var getGeneNames = function getGeneNames(events) {
  return events.map(function (e) {
    return e.gene;
  }).filter(function (gene) {
    return gene !== null;
  });
}; // Returns the set of genes (unique) reversed to display on the Y axis.


exports.getGeneNames = getGeneNames;

var getSortedGenes = function getSortedGenes(events) {
  return _toConsumableArray(new Set(getGeneNames(events))).reverse();
}; // Returns a hash map with the percentage of events (value) per gene (key).


exports.getSortedGenes = getSortedGenes;

var getEventRatiosPerGene = function getEventRatiosPerGene(events, nbSamples) {
  var map = events.reduce(function (acc, event) {
    if (event.type) {
      if (acc[event.gene]) {
        acc[event.gene] += 1;
      } else {
        acc[event.gene] = 1;
      }
    }

    return acc;
  }, {});
  Object.keys(map).forEach(function (gene) {
    map[gene] = Math.floor(map[gene] / nbSamples * 100);
  });
  return map;
}; // Returns true if an event is a mutation, false otherwise.


exports.getEventRatiosPerGene = getEventRatiosPerGene;

var isMutation = function isMutation(event) {
  return MutationEventTypes.includes(event.type);
}; // Returns a comparator result value given an integer that may not be -1, 0 or
// 1 (which are the only allowed sorting return values).


exports.isMutation = isMutation;

var sign = function sign(x) {
  if (x > 0) {
    return 1;
  } else if (x < 0) {
    return -1;
  }

  return 0;
}; // Returns a comparator for the samples (matrix column), combining all the
// precomputed comparators created for each gene (i.e. matrix row).


var samplesComparator = function samplesComparator(genes, samplesToIndex, perGeneComparators) {
  return function (s1, s2) {
    var result = 0;
    var absoluteResult = 0;

    for (var i = 0; i < genes.length; i += 1) {
      var nextResult = perGeneComparators[i].compare(s1, s2);
      var nextAbsoluteResult = Math.abs(nextResult);

      if (nextAbsoluteResult > absoluteResult) {
        result = nextResult;
        absoluteResult = nextAbsoluteResult;
      }

      if (absoluteResult === 1) {
        break;
      }
    }

    if (result === 0) {
      result = samplesToIndex[s1] < samplesToIndex[s2] ? -1 : 1;
    }

    return result > 0 ? 1 : -1;
  };
}; // Returns a comparator to sort the samples given a gene .


var sortEventsForGene = function sortEventsForGene(s1, s2, gene, samplesMap) {
  var d1 = samplesMap[s1][gene] || {};
  var d2 = samplesMap[s2][gene] || {};

  if (d1.FUSION && !d2.FUSION) {
    return -1;
  } else if (!d1.FUSION && d2.FUSION) {
    return 1;
  }

  var cna = sign(AlterationsOrder[d1.CNA] - AlterationsOrder[d2.CNA]);

  if (cna !== 0) {
    return cna;
  }

  var mut = sign(MutationsOrder[d1.MUT] - MutationsOrder[d2.MUT]);

  if (mut !== 0) {
    return mut;
  }

  var exp = sign(ExpressionsOrder[d1.EXP] - ExpressionsOrder[d2.EXP]);

  if (exp !== 0) {
    return exp;
  }

  return 0;
}; // Returns a map to gather information on each sample, per gene, per event.


var createSamplesMap = function createSamplesMap(events) {
  var samplesMap = {};
  events.forEach(function (e) {
    var s = samplesMap[e.sample] || {};
    var v = s[e.gene] || {};

    if (isMutation(e)) {
      v.MUT = e.type;
    } else {
      v[e.type] = e.alteration;
    }

    samplesMap[e.sample] = Object.assign({}, samplesMap[e.sample], _defineProperty({}, e.gene, v));
  });
  return samplesMap;
}; // Helper function to create a comparator for each gene.


exports.createSamplesMap = createSamplesMap;

var createSortEventsForGeneComparator = function createSortEventsForGeneComparator(gene, map) {
  return function (s1, s2) {
    return sortEventsForGene(s1, s2, gene, map);
  };
}; // Returns the list of samples sorted with mutual exclusion. The sorting
// algorithm is similar to the one used on cBioPortal and takes both the rows
// (genes) and columns (samples) into account. We returns the sorted set of
// samples to display on X axix.


exports.createSortEventsForGeneComparator = createSortEventsForGeneComparator;

var getSortedSamples = function getSortedSamples(events) {
  // Get a map with samples sorted by gene and events.
  var samplesMap = createSamplesMap(events); // Get a unique list of genes, sorted by the natural order in the events.

  var genes = _toConsumableArray(new Set(getGeneNames(events))); // Sort the samples alphabetically.


  var samples = _toConsumableArray(new Set(events.map(function (e) {
    return e.sample;
  }))).sort(); // Build one comparator per gene.


  var perGeneComparators = [];
  genes.forEach(function (gene) {
    perGeneComparators.push( // This actually sorts the samples, but for each gene only.
    new _PrecomputedComparator.default(_toConsumableArray(samples), createSortEventsForGeneComparator(gene, samplesMap)));
  }); // Create a map with the current order of the samples.

  var samplesToIndex = {};
  samples.forEach(function (s, i) {
    samplesToIndex[s] = i;
  }); // Finally, sort the samples taking into account both the columns and rows.

  var sortedSamples = _toConsumableArray(samples);

  sortedSamples.sort(samplesComparator(genes, samplesToIndex, perGeneComparators));
  return sortedSamples;
}; // Returns the events aggregated by type (if mutation) or alteration.


exports.getSortedSamples = getSortedSamples;

var aggregate = function aggregate(events) {
  var out = {};
  events.forEach(function (e) {
    if (!e.type || e.type === 'NONE') {
      return;
    }

    var k = isMutation(e) ? e.type : e.alteration;
    var v = out[k] || {
      type: e.type,
      alteration: e.alteration,
      events: []
    };
    v.events.push(e);
    out[k] = v;
  });
  return out;
}; // Returns the display name of an event.


exports.aggregate = aggregate;

var getDisplayName = function getDisplayName(event) {
  var eventName = isMutation(event) ? event.type : event.alteration;
  return SupportedEvents[eventName].displayName;
}; // Returns the color of an event.


exports.getDisplayName = getDisplayName;

var getColor = function getColor(event, colorscale) {
  var eventName = isMutation(event) ? event.type : event.alteration;
  var color;

  if (colorscale && _lodash.default.isObject(colorscale)) {
    color = colorscale[eventName]; // Revert back to default scale if not found

    if (!color) {
      color = SupportedEvents[eventName].colorHTML;
    }
  } else {
    color = SupportedEvents[eventName].colorHTML;
  }

  return color;
};

exports.getColor = getColor;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.hasElementsInInterval = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var hasElementsInInterval = function hasElementsInInterval(arr, func, lowerBound, upperBound) {
  // in: arr, an array sorted in increasing order of func
  //     func, a function that takes an element of sorted_list and returns a number
  //     lowerBound and upperBound: define a half-open interval [lowerBound, upperBound)
  // out: boolean, true iff there are any elements whose image under func is in [lowerBound, upperBound)
  var lowerCounter = 0;
  var upperCounter = arr.length;
  var middle, middle_val;

  while (true) {
    if (lowerCounter >= upperCounter) {
      return false;
    }

    middle = Math.floor((lowerCounter + upperCounter) / 2);
    middle_val = func(arr[middle]);

    if (middle_val >= upperBound) {
      upperCounter = middle;
    } else if (middle_val < lowerBound) {
      lowerCounter = middle + 1;
    } else {
      // otherwise, the middle value is inside the interval,
      // so there's at least one value inside the interval
      return true;
    }
  }
}; // PrecomputedComparator is similar to the OncoPrintJs implementation with
// three notable changes: rewritten with Flow/ES next and as a class, the input
// data structure is different, and no direction.


exports.hasElementsInInterval = hasElementsInInterval;

var PrecomputedComparator =
/*#__PURE__*/
function () {
  function PrecomputedComparator(data, comparator) {
    _classCallCheck(this, PrecomputedComparator);

    this.comparator = comparator;
    this.data = data;
    this.sort();
  }

  _createClass(PrecomputedComparator, [{
    key: "sort",
    value: function sort() {
      this.sortedData = this.data.sort(this.comparator);
      this.changePoints = [];

      for (var i = 0; i < this.sortedData.length; i += 1) {
        if (i === this.sortedData.length - 1) {
          break;
        }

        if (this.comparator(this.sortedData[i], this.sortedData[i + 1]) !== 0) {
          this.changePoints.push(i);
        }
      }

      this.samplesToIndex = {};

      for (var _i = 0; _i < this.sortedData.length; _i += 1) {
        this.samplesToIndex[this.sortedData[_i]] = _i;
      }
    }
  }, {
    key: "compare",
    value: function compare(s1, s2) {
      var i1 = this.samplesToIndex[s1];
      var i2 = this.samplesToIndex[s2];

      if (typeof i1 === 'undefined' && typeof i2 === 'undefined') {
        return 0;
      } else if (typeof i1 === 'undefined') {
        return 1;
      } else if (typeof i2 === 'undefined') {
        return -1;
      }

      var shouldNegateResult = false;

      if (i1 === i2) {
        return 0;
      } else if (i1 > i2) {
        var tmp = i1;
        i1 = i2;
        i2 = tmp;
        shouldNegateResult = true;
      }

      var res = 0;

      if (hasElementsInInterval(this.changePoints, function (x) {
        return x;
      }, i1, i2)) {
        res = -1;
      }

      if (shouldNegateResult) {
        res *= -1;
      }

      return res;
    }
  }]);

  return PrecomputedComparator;
}();

exports.default = PrecomputedComparator;

/***/ }),

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OncoPrint; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony import */ var react_oncoprint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(142);
/* harmony import */ var react_oncoprint__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_oncoprint__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_OncoPrint_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var OncoPrint =
/*#__PURE__*/
function (_Component) {
  _inherits(OncoPrint, _Component);

  function OncoPrint(props) {
    var _this;

    _classCallCheck(this, OncoPrint);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OncoPrint).call(this, props));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  } // Bind to Dash event handler that puts event back into props


  _createClass(OncoPrint, [{
    key: "handleChange",
    value: function handleChange(event) {
      var eventObj = JSON.stringify(event);
      this.props.setProps({
        eventDatum: eventObj
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          eventDatum = _this$props.eventDatum;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        eventDatum: eventDatum
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_oncoprint__WEBPACK_IMPORTED_MODULE_2__["OncoPrint"], _extends({
        onChange: this.handleChange
      }, Object(ramda__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(['setProps'], this.props))));
    }
  }]);

  return OncoPrint;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


OncoPrint.defaultProps = _components_OncoPrint_react__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"];
OncoPrint.propTypes = _components_OncoPrint_react__WEBPACK_IMPORTED_MODULE_3__[/* propTypes */ "c"];

/***/ })

}]);