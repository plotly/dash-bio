(window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || []).push([[7],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(0);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uuid = __webpack_require__(147);

var _sequenceViewer = __webpack_require__(150);

var _sequenceViewer2 = _interopRequireDefault(_sequenceViewer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSequenceViewer = function (_Component) {
  _inherits(ReactSequenceViewer, _Component);

  function ReactSequenceViewer(props) {
    _classCallCheck(this, ReactSequenceViewer);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleRef = _this.handleRef.bind(_this);

    if (props.selection && props.selection.length > 0 && props.coverage && props.coverage.length > 0) {
      console.warn("The selection and coverage options are not compatible with each other.");
    }
    // Initialize the sequence-viewer object.
    _this._seqObj = new _sequenceViewer2.default(_this.props.sequence);
    _this._div = null;
    return _this;
  }

  // Function to call the render function of sequence-viewer.
  // You can override existing props by passing an object with key value
  // pairs to override existing props.
  // e.g.
  // callRender({toolbar: false})
  // would override the existing toolbar setting.


  ReactSequenceViewer.prototype.callRender = function callRender() {
    var newProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var _props = this.props,
        selection = _props.selection,
        props = _objectWithoutProperties(_props, ['selection']);

    // Read in div from private variable.


    var div = this._div;

    //Render div if it is not null.
    if (div !== null && this.props.sequence !== null) {
      var _seqObj;

      this._seqObj.render('#' + div.id, _extends({}, props, newProps));
      if (this.props.coverage.length > 0) this._seqObj.coverage(this.props.coverage);
      if (this.props.legend.length > 0) this._seqObj.addLegend(this.props.legend);
      if (selection.length > 0) (_seqObj = this._seqObj).selection.apply(_seqObj, selection);
    }
  };

  // When the component mounts, add a change listener to the document
  // and call render.  We attach the change listener here because
  // jQuery events don't bubble up through React due to its synthetic event
  // handling.  Thus, when a user toggles the charsPerLine drop down menu.
  // the event is handled by jQuery, but not seen by React when the
  // listener is attached at the component div level.
  // Attaching it to the document seems to work.


  ReactSequenceViewer.prototype.componentDidMount = function componentDidMount() {
    document.addEventListener('change', this.handleChange);
    this.callRender();
    this._seqObj.onSubpartSelected(this.props.onSubpartSelected);
    this._seqObj.onMouseSelection(this.props.onMouseSelection);
  };

  // Update the sequence-viewer object if we get a new DNA sequence.


  ReactSequenceViewer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.sequence !== nextProps.sequence) {
      this._seqObj = new _sequenceViewer2.default(nextProps.sequence);
    }
  };

  // Re-render if the component has updated.


  ReactSequenceViewer.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      this.callRender();
    }
  };

  // Remove the event listener when the component is unmounted.


  ReactSequenceViewer.prototype.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('change', this.handleChange);
  };

  // Function called when the user changes the charsPerLine setting via the toolbar.


  ReactSequenceViewer.prototype.handleChange = function handleChange(e) {
    var elem = e.target;
    // Check that the event was triggered by the right <select> button.
    if ((" " + elem.className + " ").indexOf(" " + this.props.seqLenClass + " ") > -1) {
      // Call render and override the charsPerLine setting with whatever the user specified.
      this.callRender({ charsPerLine: elem.value });
    }
  };

  ReactSequenceViewer.prototype.handleRef = function handleRef(div) {
    this._div = div;
  };

  // Render a div with the sequence-viwer widget in it.


  ReactSequenceViewer.prototype.render = function render() {
    var _props2 = this.props,
        id = _props2.id,
        sequence = _props2.sequence,
        className = _props2.className;
    // Create the container div and store a reference to it once it is mounted
    // in the DOM.  The componentDidMount function above will then get called
    // and render the widget.

    return _react2.default.createElement('div', { className: className, id: this.props.id, ref: this.handleRef });
  };

  return ReactSequenceViewer;
}(_react.Component);

exports.default = ReactSequenceViewer;


ReactSequenceViewer.propTypes =  false ? undefined : {};

ReactSequenceViewer.defaultProps = {
  id: (0, _uuid.v4)(),
  coverage: [],
  legend: [],
  selection: [],
  seqLenClass: "CPLChoice",
  onMouseSelection: function onMouseSelection(elem) {},
  onSubpartSelected: function onSubpartSelected(elem) {},
  className: ''
};
module.exports = exports['default'];

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(148);
var v4 = __webpack_require__(149);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(65);
var bytesToUuid = __webpack_require__(66);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(65);
var bytesToUuid = __webpack_require__(66);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

/*
 * sequence-viewer
 * https://github.com/calipho-sib/sequence-viewer
 *
 * Copyright (c) 2015 Calipho - SIB
 * Licensed under the MIT license.
 */

/**
 @class sequenceviewer
 */


//var  sequenceviewer;
//module.exports = sequenceviewer = function(opts){
//    this.el = opts.el;
//    this.el.textContent = sequenceviewer.hello(opts.text);
//};
var jQuery = $ = __webpack_require__(64);

var Sequence = __webpack_require__(151);

__webpack_require__(153).mixin(Sequence.prototype);
module.exports = Sequence;


/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var Sequence = (function () {


    var debounce = __webpack_require__(152);

    function Sequence(sequence, isoformName) {
        var self = this;
        this.events = {
            MOUSE_SELECTION_EVENT: "sequence-viewer-mouse-selection",
            SEQUENCE_SELECTED_EVENT: "sequence-viewer-substring-selected"
        };
        var isoName;
        if (isoformName !== undefined) isoName = isoformName;
        else isoName = "";
        console.log(isoName);
        var sequence = sequence;
        var seqInit = "";
        var seqCustomized = "";
        var seqCoverage = {
            data : [],
            start : null,
            end : null,
            hlColor : null
        }
//        var lineJump = 0;
        var title;
        var divID;
        var sequenceOptions = {};
        var el;
        var seqHeight;
        var showBadge;

        this.render = function (divId, options) {
            //identifier should be a string in other cases we might get strange effects
            if (typeof divId !== 'string') {
               throw new Error("Div identifier must be a string");
            }
            divID = divId;
            el = document.getElementById(divId.substring(1));
            if (el === null) {
              throw new Error("Cannot find element with id: " + divId.substring(1));
            }
//            if (typeof options === 'undefined') {
//                var options = {
//                    'showLineNumbers': true,
//                    'wrapAminoAcids': true,
//                    'charsPerLine': 30,
//                    'search': false,
//                    'toolbar': false,
//                    'title': "Protein Sequence",
//                    'sequenceMaxHeight': "400px",
//                    'badge': true
//                     'header' : {
//                         display: true or false,
//                         searchInTitle : true or false
//                     }
//                }
//            }
//            
//            else sequenceOptions = options;
            if (!options) options = {};
            
            
            sequenceOptions.showLineNumbers = options.showLineNumbers === undefined ? true : options.showLineNumbers;
            sequenceOptions.wrapAminoAcids = options.wrapAminoAcids === undefined ? true : options.wrapAminoAcids;
            sequenceOptions.sequenceMaxHeight = options.sequenceMaxHeight === undefined ? "400px" : options.sequenceMaxHeight;
            sequenceOptions.title = options.title === undefined ? "Protein Sequence" : options.title;
            sequenceOptions.charsPerLine = options.charsPerLine === undefined ? 30 : options.charsPerLine;
            sequenceOptions.search = options.search === undefined ? false : options.search;
            sequenceOptions.toolbar = options.toolbar === undefined ? false : options.toolbar;
            sequenceOptions.badge = options.badge === undefined ? true : options.badge;
            sequenceOptions.fasta = options.fasta === undefined ? true : options.fasta;
            sequenceOptions.apiURL = options.apiURL === undefined ? true : options.apiURL;
            sequenceOptions.blast = options.blast === undefined ? true : options.blast;
            
            sequenceOptions.header = options.header ? {
                display : options.header.display === undefined ? true : options.header.display,
                searchInTitle : options.header.searchInTitle === undefined ? true : options.header.searchInTitle,
                unit : options.header.unit === undefined ? "Char" : options.header.unit,
                showCpl : options.header.showCpl === undefined ? true : options.header.showCpl,
                badgeWithUnit : options.header.badgeWithUnit === undefined ? false : options.header.badgeWithUnit
            } : {display : true, searchInTitle : true, unit : "Char", showCpl: true, badgeWithUnit: false};


            var badge = "<div style=\"display:inline-block;\">" +
                "<span class=\"badge\" style=\"border-radius:70%;border: 2px solid black;color:#C50063;padding:8px 5px;background-color:white;margin-right:10px;vertical-align:middle;min-width:32px;\">" + sequence.length + "</span>" +
                "</div>";
            
            var badgeWithUnit = "<div style=\"display:inline-block;\">" +
                "<span class=\"badge\" style=\"border-radius:70%;border: 2px solid black;color:#C50063;padding:5px 5px;background-color:white;margin-right:10px;vertical-align:middle;min-width:32px;font-size:11px;\">" + sequence.length + "<div style='margin-top:-2px;font-size:9px;color:black;text-transform:lowercase;'>" + sequenceOptions.header.unit + "</div></span>" +
                "</div>";

            var displayBadge = sequenceOptions.badge ? sequenceOptions.header.badgeWithUnit ? badgeWithUnit : badge : "";
            
            var header = sequenceOptions.header.display ? "<div class=\"sequenceHeader row\" style=\"border-bottom: 1px solid #E7EAEC;padding-bottom:5px;margin:0px 0px 10px\">" +
                displayBadge + "<h4 style=\"display:inline-block;vertical-align:middle;\">" + sequenceOptions.title + "</h4>" +
                "</div>" : "";

            var sources = header +
                "<div class=\"sequenceBody\" style=\"margin-top: 5px;\">" +
                "<div class=\"scroller\" style=\"max-height:" + sequenceOptions.sequenceMaxHeight + ";overflow:auto;white-space: nowrap;padding-right:20px;margin-right:10px;\">" +
                "<div class=\"charNumbers\" style=\"font-family: monospace;font-size: 13px;display:inline-block;text-align:right; padding-right:5px; border-right:1px solid LightGray;\"></div>" +
                "<div class=\"fastaSeq\" display-option=\"" + sequenceOptions.charsPerLine + "\" style=\"font-family: monospace;font-size: 13px;display:inline-block;padding:5px;\">" + sequence + "</div></div>" +
                "<div class=\"coverageLegend\" style=\"margin-top: 10px;margin-left:15px;\"></div>" +
                "</div>";

            $(divId).html(sources);
	
            if (sequenceOptions.wrapAminoAcids) {
                sequenceLayout(divId + " .fastaSeq");
            }
            else $(divId + " .scroller").css("overflow-x", "auto");
            
            if (sequenceOptions.showLineNumbers)
                lineNumbers(divId + " .fastaSeq", divId + " .charNumbers");

            if (sequenceOptions.toolbar) {
                if (sequenceOptions.header.showCpl){
                    addToolbar();
                }
                else {
                    var source = "<form class=\"form-inline\" style=\"margin-bottom:5px;\">" +
                    "<div class=\"form-group form-group-sm sequenceToolbar\" style=\"\"> "+
                        "</div></form>";
                    $(divID + " .sequenceBody").prepend(source);
                }
                if (isoName !== "") {
                    if (sequenceOptions.fasta){
                        var apiURL = "https://www.nextprot.org";
                        if(sequenceOptions.apiURL) {
                            apiURL = sequenceOptions.apiURL;
                        }
                        $(divID + " .sequenceToolbar").append(
                            // TODO: should point to prod instead of alpha once this service is available !
                            //"<a class=\"btn btn-default btn-sm fasta-link\" href=\"https://api.nextprot.org/isoform/" + isoName + ".fasta target='_blank'>View FASTA</a>" +
                            "<a class=\"btn btn-default btn-sm fasta-link\" href=\""+ apiURL +"/isoform/" + isoName + ".fasta\" target='_blank'>View FASTA</a>"
    //                        "<a class=\"btn btn-default btn-sm fasta-link\" href=\"http://www.nextprot.org/entry/" + isoName.split("-")[0] + "/fasta?isoform=" + isoName.slice(3) + "\" target='_blank'>View FASTA</a>"
    //                        "<a class=\"btn btn-default btn-sm disabled\" href=\"\" style=\"margin-left:5px;\">Blast sequence</a>" +
    //                        "<a class=\"btn btn-default btn-sm disabled\" href=\"\" style=\"margin-left:5px;\">Blast selection</a>"
    //                        '<div class="btn-group" role="group" aria-label="..." style="margin-left:5px;" data-toggle="tooltip" data-placement="top" title="Soon to be implemented">' +
    //                          '<a class=\"btn btn-default btn-sm disabled\" style="margin-left:-1px;" href=\"\">BLAST sequence</a>' +
    //                          '<a class=\"btn btn-default btn-sm disabled\" href=\"\">BLAST selection</a>' +
    //                        '</div>'
                        );
                    }
                    if (sequenceOptions.blast){
                        $(divID + " .sequenceToolbar").append("<a class=\"btn btn-default btn-sm\" href=\"/blast/"+isoName+"\" style=\"margin-left:5px;\">Blast sequence</a>" + 
                      "<a id=\"selectionBlast\" class=\"btn btn-default btn-sm\" href=\"/blast/"+isoName+"\" style=\"margin-left:5px;\"> Blast selection</a>");
                    }
                }
            }
            
            if (sequenceOptions.search) {
                var inHeader = sequenceOptions.header.searchInTitle;
                addSequenceSearch(inHeader);
            }

            seqInit = $(divId + " .fastaSeq").html();
            mouseSelectionListener();
        };

        this.selection = function (start, end, color, options) {
            var positions = [start, end];
            var hlSeq = seqInit;
            subpartSelection([{start:start,end:end}]);
            positions[0] = positions[0] + ~~(positions[0] / 10) + 4 * (~~(positions[0] / sequenceOptions.charsPerLine));
            positions[1] = positions[1] + ~~(positions[1] / 10) + 4 * (~~(positions[1] / sequenceOptions.charsPerLine));
            var highlightColor = color;
            hlSeq = hlSeq.substring(0, positions[0]) +
            "<span class='stringSelected' style=\"background:" + color + ";color:white;\">" +
            hlSeq.substring(positions[0], positions[1]) +
            "</span>" +
            hlSeq.substring(positions[1], hlSeq.length);
            $(divID + " .fastaSeq").html(hlSeq);
            if (sequenceOptions.blast) {
                $("#selectionBlast").attr("href", "/blast/"+isoName+"/"+(start+1)+"/"+end+"/");
            }
        };

        function multiHighlighting(ArrayHL, color, options) {
            var startTime2 = new Date().getTime();
            if (ArrayHL.length === 0) {
                $(divID + " .fastaSeq").html(seqInit);
            }
            var hlSeq = seqInit;
            var seqTemp = hlSeq.toString();
            var positionStart = 0;
            var positionEnd = 0;
            for (i in ArrayHL) {
                positionStart = jTranslation(ArrayHL[i].start);
                positionEnd = jTranslation(ArrayHL[i].end);
                seqTemp = seqTemp.substring(0, positionStart) +
                "<span class='stringsSelected' style=\"background:" + color + ";color:white;\">" +
                seqTemp.substring(positionStart, positionEnd) +
                "</span>" +
                seqTemp.substring(positionEnd, seqTemp.length);
            }
            $(divID + " .fastaSeq").html(seqTemp);
        }

        this.addLegend = function (hashLegend) {
            for (var i = 0; i < hashLegend.length; i++) {
                if (hashLegend[i].underscore === true) {
                    $(divID + " .coverageLegend").append("<div style=\"display:inline-block;background:" + hashLegend[i].color + ";width:20px;height:20px;vertical-align:middle;margin:0px 5px 0px 10px;border-radius:50%; border: 1px solid grey;text-align:center; line-height:0.8;\">_</div><p style=\"display:inline-block;font-weight:bold;font-size:11px;font-style:italic;margin:0;padding-top:3px;vertical-align:top;\">" + hashLegend[i].name + "</p></div>");
                }
                else {
                    $(divID + " .coverageLegend").append("<div style=\"display:inline-block;background:" + hashLegend[i].color + ";width:20px;height:20px;vertical-align:middle;margin:0px 5px 0px 10px;border-radius:50%;\"></div><p style=\"display:inline-block;font-weight:bold;font-size:11px;font-style:italic;margin:0;padding-top:3px;vertical-align:top;\">" + hashLegend[i].name + "</p>");
                }
            }
        };

        function jTranslation(i) {
            var j = i + ~~(i / 10) + 4 * (~~(i / sequenceOptions.charsPerLine));
            return j;
        }
        function fillGap(list) {
            var listCloned = list.slice();
            for (var i=0;i<=list.length-1;i++) {
                if (i===0){
                    if (list[0].start > 0) {
                        listCloned.unshift({start: 0, end: list[0].start, color: "black", underscore: false});
                    }
                    if (i === list.length-1) {
                        listCloned.push({start: list[i].end, end: sequence.length, color: "black", underscore: false});
                    }
                }
                else if (i === list.length-1){
                    if (list[i-1].end < list[i].start){
                        listCloned.push({start: list[i-1].end, end: list[i].start, color: "black", underscore: false});
                    }
                    if (list[i].end < sequence.length-1){
                        listCloned.push({start: list[i].end, end: sequence.length, color: "black", underscore: false});
                    }
                }
                else {
                    if (list[i-1].end < list[i].start){
                        listCloned.push({start: list[i-1].end, end: list[i].start, color: "black", underscore: false});
                    }
                }
                if (i !== 0 && list[i-1].end > list[i].start){
                    console.warn("WARNING (error): Some positions in the coverage list are overlapping");
                }
            }
            listCloned.sort(function (a, b) {
                return a.start - b.start;
            });
            return listCloned;
        }

	var deepExtend = function(out) {
	  out = out || {};

	  for (var i = 1; i < arguments.length; i++) {
	    var obj = arguments[i];

	    if (!obj)
	      continue;

	    for (var key in obj) {
	      if (obj.hasOwnProperty(key)) {
		if (typeof obj[key] === 'object')
		  out[key] = deepExtend(out[key], obj[key]);
		else
		  out[key] = obj[key];
	      }
	    }
	  }

	  return out;
	};

	
        this.coverage = function (HashAA, start, end, highlightColor) {
            seqCoverage.data = deepExtend([], HashAA);
            seqCoverage.start = start;
            seqCoverage.end = end;
            seqCoverage.hlColor = highlightColor;
            
            HashAA.sort(function (a, b) {
                return a.start - b.start;
            });
            HashAA=fillGap(HashAA);
            var timestart = new Date().getTime();
            if (!start) var start = 0;
            if (!end) var end = 0;
            if (!highlightColor) var highlightColor = "#FFE5A3";
            var source = "";
            var pre = "";
            for (var i = 0; i < HashAA.length; i++) {
                var tooltipStr = "";
                if (HashAA[i].tooltip !== undefined) {
                    tooltipStr = " title=\""+HashAA[i].tooltip+"\"";
                }
                var bgcolorStr = "";
                if (HashAA[i].bgcolor !== undefined) {
                    bgcolorStr = "background:"+HashAA[i].bgcolor+";";
                }
                //in html string there is no easy way to put function, therefore
                //assign to onclick event handler identifier of the region,
                //and after all DOM objects will be created we will replace this handlers
                //with proper functions
                var onclickStr = "";
                var cursorStr = "";
                if (HashAA[i].onclick !== undefined) {
                    onclickStr = " onclick=\" return "+i+";\" ";
                    cursorStr = "cursor: pointer;";
                }
                
                if (HashAA[i].underscore) {
                    pre = "<span style=\"text-decoration:underline;color:" + HashAA[i].color + ";" + bgcolorStr + cursorStr+ "\"" + tooltipStr + onclickStr + ">";
                    source += pre;
                }
                else {
                    pre = "<span style=\"color:" + HashAA[i].color + ";" + bgcolorStr + cursorStr + "\"" + tooltipStr + onclickStr + ">";
                    source += pre;
                }
                if (end) {
                    if (start >= HashAA[i].start && start < HashAA[i].end && end >= HashAA[i].start && end < HashAA[i].end) {

                        source += seqInit.substring(jTranslation(HashAA[i].start), jTranslation(start)) + "<span class=\"peptideHighlighted\" style=\"background:" + highlightColor + ";\">" + seqInit.substring(jTranslation(start), jTranslation(end + 1));

                        source += "</span>" + seqInit.substring(jTranslation(end + 1), jTranslation(HashAA[i].end)) + "</span>";
                    }
                    else if (start >= HashAA[i].start && start < HashAA[i].end) {
                        source += seqInit.substring(jTranslation(HashAA[i].start), jTranslation(start)) + "</span><span class=\"peptideHighlighted\" style=\"background:" + highlightColor + ";\">" + pre + seqInit.substring(jTranslation(start), jTranslation(HashAA[i].end)) + "</span>";
                    }
                    else if (end >= HashAA[i].start && end < HashAA[i].end) {
                        source += seqInit.substring(jTranslation(HashAA[i].start), jTranslation(end + 1)) + "</span></span>" + pre + seqInit.substring(jTranslation(end + 1), jTranslation(HashAA[i].end)) + "</span>";
                    }
                    else {
                        source += seqInit.substring(jTranslation(HashAA[i].start), jTranslation(HashAA[i].end)) + "</span>";
                    }
                }
                else {
                    source += seqInit.substring(jTranslation(HashAA[i].start), jTranslation(HashAA[i].end)) + "</span>";
                }
            }
            var fastaDiv = $(divID + " .fastaSeq");
            fastaDiv.html(source);
            seqCustomized = source;

            //and now (after we created dom objects) we can assign onclick events
            var onclickObjects = $("[onclick]",fastaDiv);
            for (var i=0;i<onclickObjects.length;i++) {
              //get the id that was assigned to onclick event in the simple html
              var onclickId = onclickObjects[i].onclick();
              //and replace it with proper function
              onclickObjects[i].onclick = HashAA[onclickId].onclick;
            }

        };

        function lineNumbers(textAreaID, lineNumberID) {
            var textContent = $(textAreaID).html().split("<br>");
            var NBC = parseInt($(textAreaID).attr("display-option"));
            var newTextContent = [];
            var charPerLine = 0;
            for (var i = 0; i < textContent.length; i++) {
                newTextContent.push((charPerLine + 1) + ("<br>"));
                charPerLine += NBC;
            }
            $(lineNumberID).html(newTextContent.join(""));

        };

        function sequenceLayout(textAreaID) {
            var newLines = parseInt($(textAreaID).attr("display-option"));
            newLines = (newLines + (newLines / 10)).toString();
            var seqFormat = $(textAreaID).html();
            seqFormat = seqFormat.toString().match(/.{1,10}/g).join(' ').match(new RegExp('.{1,' + newLines + '}', 'g')).join('<br>');
            
            seqCustomized = seqFormat;
            $(textAreaID).html(seqFormat);
        }

        function addSequenceSearch(inHeader) {
            if (inHeader){
                $(divID + " .sequenceHeader").append('<input class=\"inputSearchSeq form-control pull-right\" type=\"text\" style=\"width:40%;margin-top: 3px;\" placeholder=\"Search in sequence.. (Regex supported)\">');
            }
            else{
                $(divID + " .sequenceBody").prepend('<input class=\"inputSearchSeq form-control\" type=\"text\" style=\"width:100%;margin:3px auto 10px;\" placeholder=\"Search in sequence.. (Regex supported)\">');
            }
            sequenceSearch();

        }

        function sequenceSearch() {
            $(divID + " .inputSearchSeq").keyup(debounce(function () {
                var text = $(this).val();
                var containsLetter = (/\S/.test(text));
                if (containsLetter) {
//                if (text !== "") {
                    var text2 = new RegExp(text, "gi");
                    var match;
                    var matches = [];
                    while ((match = text2.exec(sequence)) != null) {
                        matches.push({start: match.index, end: match.index + match[0].length});
                    }
                    matches.sort(function (a, b) {
                        return b.start - a.start;
                    });
                    subpartSelection(matches);
                    multiHighlighting(matches, "#C50063");
                }
                else {
                    $(divID + " .fastaSeq").html(seqCustomized);
                    triggerSequenceSelectedEvent([]);
                }
            }, 250));
        }

        function subpartSelection(list) {
            var selectedParts = getSequenceOfSelection(list, sequence);
            if (selectedParts) triggerSequenceSelectedEvent(selectedParts);
        }

        function getSequenceOfSelection(selection, sequence) {
            var selectionList = [];
            if (selection.length)
            {
                selection.forEach(function (s) {
                    selectionList.push({
                        start: s.start + 1,
                        end: s.end,
                        sequence: sequence.substring(s.start, s.end)
                    });
                });
            }
            return selectionList;
        }

        function triggerSequenceSelectedEvent(selection) {
            if (CustomEvent) {
                var event = new CustomEvent(self.events.SEQUENCE_SELECTED_EVENT, {
                    detail: selection
                });
                el.dispatchEvent(event);

            } else {
                console.warn("CustomEvent is not defined....");
            }
            if (self.trigger) self.trigger(self.events.SEQUENCE_SELECTED_EVENT, selection);
        }

        function mouseSelectionListener() {
            $(divID + " .fastaSeq").mouseup(function () {
                var selectedSubpart = getSelectedText();
                if (selectedSubpart) {
                    triggerMouseSelectionEvent(selectedSubpart);
                    if (sequenceOptions.blast) {
                        $("#selectionBlast").attr("href", "/blast/"+isoName+"/"+selectedSubpart.start+"/"+selectedSubpart.end+"/");
                    }
                }
            });
        }

        this.onMouseSelection = function (listener) {
            el.addEventListener(self.events.MOUSE_SELECTION_EVENT, listener);
            //$(document).on(self.events.FEATURE_SELECTED_EVENT, listener);
        };
        this.onSubpartSelected = function (listener) {
            el.addEventListener(self.events.SEQUENCE_SELECTED_EVENT, listener);
            //$(document).on(self.events.FEATURE_SELECTED_EVENT, listener);
        };

        function getSelectedText() {
            var text = window.getSelection().toString().replace(/\s+/g, '');
            var selection = window.getSelection();
            var element = $(divID + " .fastaSeq")[0];
            var caretOffset = 0;
            var seqText = $(divID + " .fastaSeq").text();
            
            var range = selection.getRangeAt(0);
            var preCaretRange = range.cloneRange();
            preCaretRange.selectNodeContents(element);
            preCaretRange.setEnd(range.endContainer, range.endOffset);
            caretOffset = preCaretRange.toString().length;
            
            var pos_end_parsed = seqText.substring(0,caretOffset).replace(/\s+/g, '').length;
            
            var pos_start_parsed = pos_end_parsed - (text.length -1);
            
            var text_selected = {
                text: text,
                start: pos_start_parsed,
                end: pos_end_parsed
            }
            
            return text_selected;
        }

        function triggerMouseSelectionEvent(subseq) {
            if (CustomEvent) {
                var event = new CustomEvent(self.events.MOUSE_SELECTION_EVENT, {
                    detail: {
                        'selection': subseq.text,
                        'start':subseq.start,
                        'end':subseq.end
                    }
                });
                el.dispatchEvent(event);

            } else {
                console.warn("CustomEvent is not defined....");
            }
            if (self.trigger) self.trigger(self.events.MOUSE_SELECTION_EVENT, {'selection': subseq});
        }

        function changeCharsPerLine(selection) {
            sequenceOptions.charsPerLine = selection.value;
            self.render(divID, sequenceOptions);
            if (seqCoverage.data.length){
                self.coverage(seqCoverage.data, seqCoverage.start, seqCoverage.end, seqCoverage.hlColor);
            }
        }

        function addToolbar() {
            var listOfCharsPerLine = ["50", "60", "70", "80", "90", "100"];
//            var source = "<form class=\"form-inline\" role=\"form\">" +
//                "<div class=\"sequenceToolbar row\" style=\"margin-bottom:15px;\">" +
//                "<div class=\"input-group input-group-sm\" style=\"margin-left:20px;\"> <span class=\"input-group-addon charPerLine-label\">Char per line</i></span>" +
//
//                "<select class=\"CPLChoice form-control\" style=\"border-top-left-radius: 0px;border-bottom-left-radius: 0px;\">" +
//                "<option>Select</option>" +
//                "<option value=50>50</option>" +
//                "<option value=60>60</option>" +
//                "<option value=70>70</option>" +
//                "<option value=80>80</option>" +
//                "<option value=90>90</option>" +
//                "<option value=100>100</option>" +
//                "</select>" +
//                "</div>" +
//                "</div>" +
//                "</form>";         
            var hidexsCharPerLine = isoName ? "hidden-xs" : "";
            var source = "<form class=\"form-inline\" style=\"margin-bottom:5px;\">" +
//                "<div class=\"sequenceToolbar row\" style=\"margin-bottom:15px;\">" +
                "<div class=\"form-group form-group-sm sequenceToolbar\" style=\"\"> "+
                    "<label class=\"control-label charPerLine-label " + hidexsCharPerLine + "\" for='"+ divID.substring(1) +"-cpl' style='margin-right:5px;'>" + sequenceOptions.header.unit + " per line</label>" +
                    "<select class=\"CPLChoice form-control " + hidexsCharPerLine + "\" id='"+ divID.substring(1) +"-cpl' style='display:inline-block;width:auto;margin-right:10px;'>" +
                        "<option>Select</option>" +
                        "<option value=50>50</option>" +
                        "<option value=60>60</option>" +
                        "<option value=70>70</option>" +
                        "<option value=80>80</option>" +
                        "<option value=90>90</option>" +
                        "<option value=100>100</option>" +
                    "</select>" +
                "</div>" +
                "</form>";
            $(divID + " .sequenceBody").prepend(source);
            $(divID + " .CPLChoice").change(function () {
                changeCharsPerLine(this);
                $(divID + " .CPLChoice" + " option:selected").text($(this).val());
            });
        }
    }
    return Sequence;
})();
if (  true && typeof module.exports === "object" ) {
    module.exports = Sequence;
}


/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(45)))

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var events = __webpack_require__(154);

events.onAll = function(callback,context){
  this.on("all", callback,context);
  return this;
};

// Mixin utility
events.oldMixin = events.mixin;
events.mixin = function(proto) {
  events.oldMixin(proto);
  // add custom onAll
  var exports = ['onAll'];
  for(var i=0; i < exports.length;i++){
    var name = exports[i];
    proto[name] = this[name];
  }
  return proto;
};

module.exports = events;


/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

/**
 * Standalone extraction of Backbone.Events, no external dependency required.
 * Degrades nicely when Backone/underscore are already available in the current
 * global context.
 *
 * Note that docs suggest to use underscore's `_.extend()` method to add Events
 * support to some given object. A `mixin()` method has been added to the Events
 * prototype to avoid using underscore for that sole purpose:
 *
 *     var myEventEmitter = BackboneEvents.mixin({});
 *
 * Or for a function constructor:
 *
 *     function MyConstructor(){}
 *     MyConstructor.prototype.foo = function(){}
 *     BackboneEvents.mixin(MyConstructor.prototype);
 *
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc.
 * (c) 2013 Nicolas Perriault
 */
/* global exports:true, define, module */
(function() {
  var root = this,
      nativeForEach = Array.prototype.forEach,
      hasOwnProperty = Object.prototype.hasOwnProperty,
      slice = Array.prototype.slice,
      idCounter = 0;

  // Returns a partial implementation matching the minimal API subset required
  // by Backbone.Events
  function miniscore() {
    return {
      keys: Object.keys || function (obj) {
        if (typeof obj !== "object" && typeof obj !== "function" || obj === null) {
          throw new TypeError("keys() called on a non-object");
        }
        var key, keys = [];
        for (key in obj) {
          if (obj.hasOwnProperty(key)) {
            keys[keys.length] = key;
          }
        }
        return keys;
      },

      uniqueId: function(prefix) {
        var id = ++idCounter + '';
        return prefix ? prefix + id : id;
      },

      has: function(obj, key) {
        return hasOwnProperty.call(obj, key);
      },

      each: function(obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
          obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
          for (var i = 0, l = obj.length; i < l; i++) {
            iterator.call(context, obj[i], i, obj);
          }
        } else {
          for (var key in obj) {
            if (this.has(obj, key)) {
              iterator.call(context, obj[key], key, obj);
            }
          }
        }
      },

      once: function(func) {
        var ran = false, memo;
        return function() {
          if (ran) return memo;
          ran = true;
          memo = func.apply(this, arguments);
          func = null;
          return memo;
        };
      }
    };
  }

  var _ = miniscore(), Events;

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // custom events. You may bind with `on` or remove with `off` callback
  // functions to an event; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  Events = {

    // Bind an event to a `callback` function. Passing `"all"` will bind
    // the callback to all events fired.
    on: function(name, callback, context) {
      if (!eventsApi(this, 'on', name, [callback, context]) || !callback) return this;
      this._events || (this._events = {});
      var events = this._events[name] || (this._events[name] = []);
      events.push({callback: callback, context: context, ctx: context || this});
      return this;
    },

    // Bind an event to only be triggered a single time. After the first time
    // the callback is invoked, it will be removed.
    once: function(name, callback, context) {
      if (!eventsApi(this, 'once', name, [callback, context]) || !callback) return this;
      var self = this;
      var once = _.once(function() {
        self.off(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
      return this.on(name, once, context);
    },

    // Remove one or many callbacks. If `context` is null, removes all
    // callbacks with that function. If `callback` is null, removes all
    // callbacks for the event. If `name` is null, removes all bound
    // callbacks for all events.
    off: function(name, callback, context) {
      var retain, ev, events, names, i, l, j, k;
      if (!this._events || !eventsApi(this, 'off', name, [callback, context])) return this;
      if (!name && !callback && !context) {
        this._events = {};
        return this;
      }

      names = name ? [name] : _.keys(this._events);
      for (i = 0, l = names.length; i < l; i++) {
        name = names[i];
        if (events = this._events[name]) {
          this._events[name] = retain = [];
          if (callback || context) {
            for (j = 0, k = events.length; j < k; j++) {
              ev = events[j];
              if ((callback && callback !== ev.callback && callback !== ev.callback._callback) ||
                  (context && context !== ev.context)) {
                retain.push(ev);
              }
            }
          }
          if (!retain.length) delete this._events[name];
        }
      }

      return this;
    },

    // Trigger one or many events, firing all bound callbacks. Callbacks are
    // passed the same arguments as `trigger` is, apart from the event name
    // (unless you're listening on `"all"`, which will cause your callback to
    // receive the true name of the event as the first argument).
    trigger: function(name) {
      if (!this._events) return this;
      var args = slice.call(arguments, 1);
      if (!eventsApi(this, 'trigger', name, args)) return this;
      var events = this._events[name];
      var allEvents = this._events.all;
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, arguments);
      return this;
    },

    // Tell this object to stop listening to either specific events ... or
    // to every object it's currently listening to.
    stopListening: function(obj, name, callback) {
      var listeners = this._listeners;
      if (!listeners) return this;
      var deleteListener = !name && !callback;
      if (typeof name === 'object') callback = this;
      if (obj) (listeners = {})[obj._listenerId] = obj;
      for (var id in listeners) {
        listeners[id].off(name, callback, this);
        if (deleteListener) delete this._listeners[id];
      }
      return this;
    }

  };

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Implement fancy features of the Events API such as multiple event
  // names `"change blur"` and jQuery-style event maps `{change: action}`
  // in terms of the existing API.
  var eventsApi = function(obj, action, name, rest) {
    if (!name) return true;

    // Handle event maps.
    if (typeof name === 'object') {
      for (var key in name) {
        obj[action].apply(obj, [key, name[key]].concat(rest));
      }
      return false;
    }

    // Handle space separated event names.
    if (eventSplitter.test(name)) {
      var names = name.split(eventSplitter);
      for (var i = 0, l = names.length; i < l; i++) {
        obj[action].apply(obj, [names[i]].concat(rest));
      }
      return false;
    }

    return true;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args);
    }
  };

  var listenMethods = {listenTo: 'on', listenToOnce: 'once'};

  // Inversion-of-control versions of `on` and `once`. Tell *this* object to
  // listen to an event in another object ... keeping track of what it's
  // listening to.
  _.each(listenMethods, function(implementation, method) {
    Events[method] = function(obj, name, callback) {
      var listeners = this._listeners || (this._listeners = {});
      var id = obj._listenerId || (obj._listenerId = _.uniqueId('l'));
      listeners[id] = obj;
      if (typeof name === 'object') callback = this;
      obj[implementation](name, callback, this);
      return this;
    };
  });

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Mixin utility
  Events.mixin = function(proto) {
    var exports = ['on', 'once', 'off', 'trigger', 'stopListening', 'listenTo',
                   'listenToOnce', 'bind', 'unbind'];
    _.each(exports, function(name) {
      proto[name] = this[name];
    }, this);
    return proto;
  };

  // Export Events as BackboneEvents depending on current context
  if (true) {
    if ( true && module.exports) {
      exports = module.exports = Events;
    }
    exports.BackboneEvents = Events;
  }else {}
})(this);


/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SequenceViewer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_sequence_viewer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony import */ var react_sequence_viewer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_sequence_viewer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SequenceViewer_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16);
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





var SequenceViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(SequenceViewer, _Component);

  function SequenceViewer(props) {
    var _this;

    _classCallCheck(this, SequenceViewer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SequenceViewer).call(this, props));
    _this.onMouseSelection = _this.onMouseSelection.bind(_assertThisInitialized(_this));
    _this.onSubpartSelected = _this.onSubpartSelected.bind(_assertThisInitialized(_this));
    _this.getOnClick = _this.getOnClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SequenceViewer, [{
    key: "onMouseSelection",
    value: function onMouseSelection(e) {
      if (e.detail) {
        this.props.setProps({
          mouseSelection: e.detail
        });
      }
    }
  }, {
    key: "onSubpartSelected",
    value: function onSubpartSelected(e) {
      if (e.detail) {
        this.props.setProps({
          subpartSelected: e.detail
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, _) {
      var _this$props = this.props,
          showLineNumbers = _this$props.showLineNumbers,
          wrapAminoAcids = _this$props.wrapAminoAcids,
          charsPerLine = _this$props.charsPerLine,
          toolbar = _this$props.toolbar,
          search = _this$props.search,
          sequence = _this$props.sequence,
          title = _this$props.title,
          sequenceMaxHeight = _this$props.sequenceMaxHeight,
          badge = _this$props.badge,
          coverage = _this$props.coverage,
          coverageClicked = _this$props.coverageClicked,
          selection = _this$props.selection,
          legend = _this$props.legend;

      if (showLineNumbers !== nextProps.showLineNumbers || wrapAminoAcids !== nextProps.wrapAminoAcids || charsPerLine !== nextProps.charsPerLine || toolbar !== nextProps.toolbar || search !== nextProps.search || title !== nextProps.title || sequenceMaxHeight !== nextProps.sequenceMaxHeight || badge !== nextProps.badge || coverageClicked !== nextProps.coverageClicked || legend !== nextProps.legend || sequence !== nextProps.sequence) {
        return true;
      } // go through selection
      // save some time by comparing lengths first


      if (selection.length !== nextProps.selection.length) {
        return true;
      }

      if (Object.keys(selection).some(function (propertyName) {
        return selection[propertyName] !== nextProps.selection[propertyName];
      })) {
        return true;
      } // otherwise, go through all of the coverage and compare


      if (coverage.length !== nextProps.coverage.length || coverage.some(function (cov, i) {
        return Object.keys(cov).some(function (propertyName) {
          return coverage[i][propertyName] !== nextProps.coverage[i][propertyName];
        });
      })) {
        return true;
      } // if everything is the same, do not update


      return false;
    }
  }, {
    key: "getOnClick",
    value: function getOnClick(i) {
      var _this2 = this;

      return function (_) {
        _this2.props.setProps({
          coverageClicked: i
        });
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var options = {
        id: this.props.id,
        selection: this.props.selection,
        setProps: this.props.setProps,
        showLineNumbers: this.props.showLineNumbers,
        wrapAminoAcids: this.props.wrapAminoAcids,
        charsPerLine: this.props.charsPerLine,
        toolbar: this.props.toolbar,
        search: this.props.search,
        title: this.props.title,
        sequenceMaxHeight: this.props.sequenceMaxHeight,
        badge: this.props.badge,
        onMouseSelection: this.onMouseSelection,
        onSubpartSelected: this.onSubpartSelected,
        legend: this.props.legend
      };
      var coverageWithClicks = this.props.coverage.map(function (entry, i) {
        return Object.assign({}, entry, {
          onclick: _this3.getOnClick(i)
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_sequence_viewer__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({
        sequence: this.props.sequence,
        coverage: coverageWithClicks
      }, options));
    }
  }]);

  return SequenceViewer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


SequenceViewer.defaultProps = _components_SequenceViewer_react__WEBPACK_IMPORTED_MODULE_2__[/* defaultProps */ "b"];
SequenceViewer.propTypes = _components_SequenceViewer_react__WEBPACK_IMPORTED_MODULE_2__[/* propTypes */ "c"];

/***/ }),

/***/ 65:
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ 66:
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ })

}]);