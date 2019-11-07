(window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || []).push([[2],{

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else { var i, a; }
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 240);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(specifier) {
  var n = specifier.length / 6 | 0, colors = new Array(n), i = 0;
  while (i < n) colors[i] = "#" + specifier.slice(i * 6, ++i * 6);
  return colors;
});


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(8);


/* harmony default export */ __webpack_exports__["a"] = (function(scheme) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["e" /* interpolateRgbBasis */])(scheme[scheme.length - 1]);
});


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_create__ = __webpack_require__(314);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return __WEBPACK_IMPORTED_MODULE_0__src_create__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_creator__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "creator", function() { return __WEBPACK_IMPORTED_MODULE_1__src_creator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_local__ = __webpack_require__(343);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "local", function() { return __WEBPACK_IMPORTED_MODULE_2__src_local__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_matcher__ = __webpack_require__(161);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "matcher", function() { return __WEBPACK_IMPORTED_MODULE_3__src_matcher__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_mouse__ = __webpack_require__(344);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mouse", function() { return __WEBPACK_IMPORTED_MODULE_4__src_mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespace__ = __webpack_require__(93);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return __WEBPACK_IMPORTED_MODULE_5__src_namespace__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_namespaces__ = __webpack_require__(94);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return __WEBPACK_IMPORTED_MODULE_6__src_namespaces__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_point__ = __webpack_require__(67);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "clientPoint", function() { return __WEBPACK_IMPORTED_MODULE_7__src_point__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_select__ = __webpack_require__(159);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return __WEBPACK_IMPORTED_MODULE_8__src_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selectAll__ = __webpack_require__(345);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return __WEBPACK_IMPORTED_MODULE_9__src_selectAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selection_index__ = __webpack_require__(11);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selection", function() { return __WEBPACK_IMPORTED_MODULE_10__src_selection_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selector__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selector", function() { return __WEBPACK_IMPORTED_MODULE_11__src_selector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_selectorAll__ = __webpack_require__(160);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "selectorAll", function() { return __WEBPACK_IMPORTED_MODULE_12__src_selectorAll__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_selection_style__ = __webpack_require__(164);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "style", function() { return __WEBPACK_IMPORTED_MODULE_13__src_selection_style__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_touch__ = __webpack_require__(346);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touch", function() { return __WEBPACK_IMPORTED_MODULE_14__src_touch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_touches__ = __webpack_require__(347);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "touches", function() { return __WEBPACK_IMPORTED_MODULE_15__src_touches__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_window__ = __webpack_require__(96);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return __WEBPACK_IMPORTED_MODULE_16__src_window__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_selection_on__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "event", function() { return __WEBPACK_IMPORTED_MODULE_17__src_selection_on__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "customEvent", function() { return __WEBPACK_IMPORTED_MODULE_17__src_selection_on__["a"]; });




















/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = newInterval;
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = new Date(+date)), date;
  }

  interval.floor = interval;

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(128);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

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
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

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
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(171);
/* unused harmony reexport interpolateArray */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(102);
/* unused harmony reexport interpolateBasis */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(169);
/* unused harmony reexport interpolateBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(172);
/* unused harmony reexport interpolateDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(69);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(173);
/* unused harmony reexport interpolateObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(357);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(174);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_8__src_string__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(358);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(361);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_10__src_zoom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(168);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["b"]; });
/* unused harmony reexport interpolateRgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(362);
/* unused harmony reexport interpolateHsl */
/* unused harmony reexport interpolateHslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(363);
/* unused harmony reexport interpolateLab */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(364);
/* unused harmony reexport interpolateHcl */
/* unused harmony reexport interpolateHclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(365);
/* unused harmony reexport interpolateCubehelix */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(366);
/* unused harmony reexport quantize */



















/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(355);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(356);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"]; });





/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bisect__ = __webpack_require__(197);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return __WEBPACK_IMPORTED_MODULE_0__src_bisect__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ascending__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_bisector__ = __webpack_require__(198);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return __WEBPACK_IMPORTED_MODULE_2__src_bisector__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_cross__ = __webpack_require__(452);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return __WEBPACK_IMPORTED_MODULE_3__src_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_descending__ = __webpack_require__(453);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return __WEBPACK_IMPORTED_MODULE_4__src_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_deviation__ = __webpack_require__(200);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return __WEBPACK_IMPORTED_MODULE_5__src_deviation__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_extent__ = __webpack_require__(202);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return __WEBPACK_IMPORTED_MODULE_6__src_extent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_histogram__ = __webpack_require__(454);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return __WEBPACK_IMPORTED_MODULE_7__src_histogram__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__ = __webpack_require__(457);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold_freedmanDiaconis__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__ = __webpack_require__(458);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return __WEBPACK_IMPORTED_MODULE_9__src_threshold_scott__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__ = __webpack_require__(206);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return __WEBPACK_IMPORTED_MODULE_10__src_threshold_sturges__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_max__ = __webpack_require__(459);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "max", function() { return __WEBPACK_IMPORTED_MODULE_11__src_max__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_mean__ = __webpack_require__(460);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return __WEBPACK_IMPORTED_MODULE_12__src_mean__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_median__ = __webpack_require__(461);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "median", function() { return __WEBPACK_IMPORTED_MODULE_13__src_median__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_merge__ = __webpack_require__(462);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return __WEBPACK_IMPORTED_MODULE_14__src_merge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_min__ = __webpack_require__(207);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "min", function() { return __WEBPACK_IMPORTED_MODULE_15__src_min__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_pairs__ = __webpack_require__(199);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return __WEBPACK_IMPORTED_MODULE_16__src_pairs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_permute__ = __webpack_require__(463);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return __WEBPACK_IMPORTED_MODULE_17__src_permute__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_quantile__ = __webpack_require__(112);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return __WEBPACK_IMPORTED_MODULE_18__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_range__ = __webpack_require__(204);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return __WEBPACK_IMPORTED_MODULE_19__src_range__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_scan__ = __webpack_require__(464);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return __WEBPACK_IMPORTED_MODULE_20__src_scan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_shuffle__ = __webpack_require__(465);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return __WEBPACK_IMPORTED_MODULE_21__src_shuffle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_sum__ = __webpack_require__(466);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return __WEBPACK_IMPORTED_MODULE_22__src_sum__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_ticks__ = __webpack_require__(205);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return __WEBPACK_IMPORTED_MODULE_23__src_ticks__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_transpose__ = __webpack_require__(208);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return __WEBPACK_IMPORTED_MODULE_24__src_transpose__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_variance__ = __webpack_require__(201);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return __WEBPACK_IMPORTED_MODULE_25__src_variance__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_zip__ = __webpack_require__(467);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return __WEBPACK_IMPORTED_MODULE_26__src_zip__["a"]; });





























/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__clone__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__datum__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__on__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dispatch__ = __webpack_require__(342);































var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["b" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  clone: __WEBPACK_IMPORTED_MODULE_26__clone__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_27__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_28__on__["b" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_29__dispatch__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["b"] = (selection);


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export CREATED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SCHEDULED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return STARTING; });
/* unused harmony export STARTED */
/* unused harmony export RUNNING */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENDING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENDED; });
/* harmony export (immutable) */ __webpack_exports__["g"] = init;
/* harmony export (immutable) */ __webpack_exports__["h"] = set;
/* harmony export (immutable) */ __webpack_exports__["f"] = get;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_timer__ = __webpack_require__(177);



var emptyOn = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])("start", "end", "interrupt");
var emptyTween = [];

var CREATED = 0;
var SCHEDULED = 1;
var STARTING = 2;
var STARTED = 3;
var RUNNING = 4;
var ENDING = 5;
var ENDED = 6;

/* harmony default export */ __webpack_exports__["e"] = (function(node, name, id, index, group, timing) {
  var schedules = node.__transition;
  if (!schedules) node.__transition = {};
  else if (id in schedules) return;
  create(node, id, {
    name: name,
    index: index, // For context during callback.
    group: group, // For context during callback.
    on: emptyOn,
    tween: emptyTween,
    time: timing.time,
    delay: timing.delay,
    duration: timing.duration,
    ease: timing.ease,
    timer: null,
    state: CREATED
  });
});

function init(node, id) {
  var schedule = get(node, id);
  if (schedule.state > CREATED) throw new Error("too late; already scheduled");
  return schedule;
}

function set(node, id) {
  var schedule = get(node, id);
  if (schedule.state > STARTING) throw new Error("too late; already started");
  return schedule;
}

function get(node, id) {
  var schedule = node.__transition;
  if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
  return schedule;
}

function create(node, id, self) {
  var schedules = node.__transition,
      tween;

  // Initialize the self timer when the transition is created.
  // Note the actual delay is not known until the first callback!
  schedules[id] = self;
  self.timer = Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["c" /* timer */])(schedule, 0, self.time);

  function schedule(elapsed) {
    self.state = SCHEDULED;
    self.timer.restart(start, self.delay, self.time);

    // If the elapsed delay is less than our first sleep, start immediately.
    if (self.delay <= elapsed) start(elapsed - self.delay);
  }

  function start(elapsed) {
    var i, j, n, o;

    // If the state is not SCHEDULED, then we previously errored on start.
    if (self.state !== SCHEDULED) return stop();

    for (i in schedules) {
      o = schedules[i];
      if (o.name !== self.name) continue;

      // While this element already has a starting transition during this frame,
      // defer starting an interrupting transition until that transition has a
      // chance to tick (and possibly end); see d3/d3-transition#54!
      if (o.state === STARTED) return Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(start);

      // Interrupt the active transition, if any.
      // Dispatch the interrupt event.
      if (o.state === RUNNING) {
        o.state = ENDED;
        o.timer.stop();
        o.on.call("interrupt", node, node.__data__, o.index, o.group);
        delete schedules[i];
      }

      // Cancel any pre-empted transitions. No interrupt event is dispatched
      // because the cancelled transitions never started. Note that this also
      // removes this transition from the pending list!
      else if (+i < id) {
        o.state = ENDED;
        o.timer.stop();
        delete schedules[i];
      }
    }

    // Defer the first tick to end of the current frame; see d3/d3#1576.
    // Note the transition may be canceled after start and before the first tick!
    // Note this must be scheduled before the start event; see d3/d3-transition#16!
    // Assuming this is successful, subsequent callbacks go straight to tick.
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_timer__["b" /* timeout */])(function() {
      if (self.state === STARTED) {
        self.state = RUNNING;
        self.timer.restart(tick, self.delay, self.time);
        tick(elapsed);
      }
    });

    // Dispatch the start event.
    // Note this must be done before the tween are initialized.
    self.state = STARTING;
    self.on.call("start", node, node.__data__, self.index, self.group);
    if (self.state !== STARTING) return; // interrupted
    self.state = STARTED;

    // Initialize the tween, deleting null tween.
    tween = new Array(n = self.tween.length);
    for (i = 0, j = -1; i < n; ++i) {
      if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
        tween[++j] = o;
      }
    }
    tween.length = j + 1;
  }

  function tick(elapsed) {
    var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
        i = -1,
        n = tween.length;

    while (++i < n) {
      tween[i].call(null, t);
    }

    // Dispatch the end event.
    if (self.state === ENDING) {
      self.on.call("end", node, node.__data__, self.index, self.group);
      stop();
    }
  }

  function stop() {
    self.state = ENDED;
    self.timer.stop();
    delete schedules[id];
    for (var i in schedules) return; // eslint-disable-line no-unused-vars
    delete node.__transition;
  }
}


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_arc__ = __webpack_require__(427);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "arc", function() { return __WEBPACK_IMPORTED_MODULE_0__src_arc__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_area__ = __webpack_require__(183);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "area", function() { return __WEBPACK_IMPORTED_MODULE_1__src_area__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_line__ = __webpack_require__(108);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "line", function() { return __WEBPACK_IMPORTED_MODULE_2__src_line__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_pie__ = __webpack_require__(429);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pie", function() { return __WEBPACK_IMPORTED_MODULE_3__src_pie__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__ = __webpack_require__(432);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "areaRadial", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialArea", function() { return __WEBPACK_IMPORTED_MODULE_4__src_areaRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__ = __webpack_require__(185);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "lineRadial", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "radialLine", function() { return __WEBPACK_IMPORTED_MODULE_5__src_lineRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__ = __webpack_require__(186);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "pointRadial", function() { return __WEBPACK_IMPORTED_MODULE_6__src_pointRadial__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_link_index__ = __webpack_require__(433);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkHorizontal", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkVertical", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "linkRadial", function() { return __WEBPACK_IMPORTED_MODULE_7__src_link_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_symbol__ = __webpack_require__(434);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbol", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbols", function() { return __WEBPACK_IMPORTED_MODULE_8__src_symbol__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__ = __webpack_require__(188);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCircle", function() { return __WEBPACK_IMPORTED_MODULE_9__src_symbol_circle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__ = __webpack_require__(189);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolCross", function() { return __WEBPACK_IMPORTED_MODULE_10__src_symbol_cross__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__ = __webpack_require__(190);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolDiamond", function() { return __WEBPACK_IMPORTED_MODULE_11__src_symbol_diamond__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__ = __webpack_require__(192);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolSquare", function() { return __WEBPACK_IMPORTED_MODULE_12__src_symbol_square__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolStar", function() { return __WEBPACK_IMPORTED_MODULE_13__src_symbol_star__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__ = __webpack_require__(193);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolTriangle", function() { return __WEBPACK_IMPORTED_MODULE_14__src_symbol_triangle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__ = __webpack_require__(194);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "symbolWye", function() { return __WEBPACK_IMPORTED_MODULE_15__src_symbol_wye__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__ = __webpack_require__(435);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisClosed", function() { return __WEBPACK_IMPORTED_MODULE_16__src_curve_basisClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__ = __webpack_require__(436);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasisOpen", function() { return __WEBPACK_IMPORTED_MODULE_17__src_curve_basisOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__ = __webpack_require__(73);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBasis", function() { return __WEBPACK_IMPORTED_MODULE_18__src_curve_basis__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__ = __webpack_require__(437);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveBundle", function() { return __WEBPACK_IMPORTED_MODULE_19__src_curve_bundle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__ = __webpack_require__(195);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalClosed", function() { return __WEBPACK_IMPORTED_MODULE_20__src_curve_cardinalClosed__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__ = __webpack_require__(196);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinalOpen", function() { return __WEBPACK_IMPORTED_MODULE_21__src_curve_cardinalOpen__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__ = __webpack_require__(74);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCardinal", function() { return __WEBPACK_IMPORTED_MODULE_22__src_curve_cardinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__ = __webpack_require__(438);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomClosed", function() { return __WEBPACK_IMPORTED_MODULE_23__src_curve_catmullRomClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__ = __webpack_require__(439);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRomOpen", function() { return __WEBPACK_IMPORTED_MODULE_24__src_curve_catmullRomOpen__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__ = __webpack_require__(110);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveCatmullRom", function() { return __WEBPACK_IMPORTED_MODULE_25__src_curve_catmullRom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__ = __webpack_require__(440);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinearClosed", function() { return __WEBPACK_IMPORTED_MODULE_26__src_curve_linearClosed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__ = __webpack_require__(71);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveLinear", function() { return __WEBPACK_IMPORTED_MODULE_27__src_curve_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__ = __webpack_require__(441);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneX", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveMonotoneY", function() { return __WEBPACK_IMPORTED_MODULE_28__src_curve_monotone__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__ = __webpack_require__(442);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveNatural", function() { return __WEBPACK_IMPORTED_MODULE_29__src_curve_natural__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__src_curve_step__ = __webpack_require__(443);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStep", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepAfter", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "curveStepBefore", function() { return __WEBPACK_IMPORTED_MODULE_30__src_curve_step__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__src_stack__ = __webpack_require__(444);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stack", function() { return __WEBPACK_IMPORTED_MODULE_31__src_stack__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__ = __webpack_require__(445);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetExpand", function() { return __WEBPACK_IMPORTED_MODULE_32__src_offset_expand__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__ = __webpack_require__(446);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetDiverging", function() { return __WEBPACK_IMPORTED_MODULE_33__src_offset_diverging__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__src_offset_none__ = __webpack_require__(45);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetNone", function() { return __WEBPACK_IMPORTED_MODULE_34__src_offset_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__ = __webpack_require__(447);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetSilhouette", function() { return __WEBPACK_IMPORTED_MODULE_35__src_offset_silhouette__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__ = __webpack_require__(448);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOffsetWiggle", function() { return __WEBPACK_IMPORTED_MODULE_36__src_offset_wiggle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__ = __webpack_require__(111);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderAscending", function() { return __WEBPACK_IMPORTED_MODULE_37__src_order_ascending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__src_order_descending__ = __webpack_require__(449);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderDescending", function() { return __WEBPACK_IMPORTED_MODULE_38__src_order_descending__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__ = __webpack_require__(450);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderInsideOut", function() { return __WEBPACK_IMPORTED_MODULE_39__src_order_insideOut__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__src_order_none__ = __webpack_require__(46);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderNone", function() { return __WEBPACK_IMPORTED_MODULE_40__src_order_none__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__ = __webpack_require__(451);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "stackOrderReverse", function() { return __WEBPACK_IMPORTED_MODULE_41__src_order_reverse__["a"]; });




 // Note: radialArea is deprecated!
 // Note: radialLine is deprecated!









































/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(90),
    copyObject = __webpack_require__(31),
    createAssigner = __webpack_require__(142),
    isArrayLike = __webpack_require__(17),
    isPrototype = __webpack_require__(57),
    keys = __webpack_require__(18);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns own enumerable string keyed properties of source objects to the
 * destination object. Source objects are applied from left to right.
 * Subsequent sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object` and is loosely based on
 * [`Object.assign`](https://mdn.io/Object/assign).
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assignIn
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assign({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'c': 3 }
 */
var assign = createAssigner(function(object, source) {
  if (isPrototype(source) || isArrayLike(source)) {
    copyObject(source, keys(source), object);
    return;
  }
  for (var key in source) {
    if (hasOwnProperty.call(source, key)) {
      assignValue(object, key, source[key]);
    }
  }
});

module.exports = assign;


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    getRawTag = __webpack_require__(244),
    objectToString = __webpack_require__(245);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isLength = __webpack_require__(87);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(141),
    baseKeys = __webpack_require__(143),
    isArrayLike = __webpack_require__(17);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transition;
/* harmony export (immutable) */ __webpack_exports__["b"] = transition;
/* harmony export (immutable) */ __webpack_exports__["c"] = newId;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__attr__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__attrTween__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__delay__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__duration__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ease__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filter__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__merge__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__on__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__remove__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__select__ = __webpack_require__(381);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__selectAll__ = __webpack_require__(382);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__selection__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__style__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__styleTween__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__text__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transition__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tween__ = __webpack_require__(70);



















var id = 0;

function Transition(groups, parents, name, id) {
  this._groups = groups;
  this._parents = parents;
  this._name = name;
  this._id = id;
}

function transition(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"])().transition(name);
}

function newId() {
  return ++id;
}

var selection_prototype = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype;

Transition.prototype = transition.prototype = {
  constructor: Transition,
  select: __WEBPACK_IMPORTED_MODULE_10__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_11__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_6__filter__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_7__merge__["a" /* default */],
  selection: __WEBPACK_IMPORTED_MODULE_12__selection__["a" /* default */],
  transition: __WEBPACK_IMPORTED_MODULE_16__transition__["a" /* default */],
  call: selection_prototype.call,
  nodes: selection_prototype.nodes,
  node: selection_prototype.node,
  size: selection_prototype.size,
  empty: selection_prototype.empty,
  each: selection_prototype.each,
  on: __WEBPACK_IMPORTED_MODULE_8__on__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_1__attr__["a" /* default */],
  attrTween: __WEBPACK_IMPORTED_MODULE_2__attrTween__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_13__style__["a" /* default */],
  styleTween: __WEBPACK_IMPORTED_MODULE_14__styleTween__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_15__text__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_9__remove__["a" /* default */],
  tween: __WEBPACK_IMPORTED_MODULE_17__tween__["a" /* default */],
  delay: __WEBPACK_IMPORTED_MODULE_3__delay__["a" /* default */],
  duration: __WEBPACK_IMPORTED_MODULE_4__duration__["a" /* default */],
  ease: __WEBPACK_IMPORTED_MODULE_5__ease__["a" /* default */]
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tooltip = __webpack_require__(209);

var _d3Dispatch = __webpack_require__(68);

var _d3Shape = __webpack_require__(13);

var _d3Selection = __webpack_require__(3);

var _configUtils = __webpack_require__(474);

var _utils = __webpack_require__(210);

var _colors = __webpack_require__(566);

var _axes = __webpack_require__(608);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Abstract class used by all tracks
**/
var Track = function () {
  function Track(instance, conf, defaultConf, data, dataParser) {
    _classCallCheck(this, Track);

    this.dispatch = (0, _d3Dispatch.dispatch)('mouseover', 'mouseout');
    this.parseData = dataParser;
    this.loadData(data, instance);
    this.conf = (0, _configUtils.getConf)(conf, defaultConf, this.meta, instance);
    this.conf.colorValue = (0, _colors.buildColorValue)(this.conf.color, this.conf.cmin, this.conf.cmax, this.conf.logScale, this.conf.logScaleBase);
    this.scale = (0, _utils.buildScale)(this.conf.cmin, this.conf.cmax, this.conf.outerRadius - this.conf.innerRadius, this.conf.logScale, this.conf.logScaleBase);
  }

  _createClass(Track, [{
    key: 'loadData',
    value: function loadData(data, instance) {
      var result = this.parseData(data, instance._layout.summary());
      this.data = result.data;
      this.meta = result.meta;
    }
  }, {
    key: 'render',
    value: function render(instance, parentElement, name) {
      var _this = this;

      parentElement.select('.' + name).remove();
      var track = parentElement.append('g').attr('class', name).attr('z-index', this.conf.zIndex);
      var datumContainer = this.renderBlock(track, this.data, instance._layout, this.conf);
      if (this.conf.axes && this.conf.axes.length > 0) {
        (0, _axes.renderAxes)(datumContainer, this.conf, instance, this.scale);
      }
      var selection = this.renderDatum(datumContainer, this.conf, instance._layout);
      if (this.conf.tooltipContent) {
        (0, _tooltip.registerTooltip)(this, instance, selection, this.conf);
      }
      selection.on('mouseover', function (d, i) {
        _this.dispatch.call('mouseover', _this, d);
        if (_this.conf.tooltipContent) {
          instance.clipboard.attr('value', _this.conf.tooltipContent(d));
        }
      });
      selection.on('mouseout', function (d, i) {
        _this.dispatch.call('mouseout', _this, d);
      });

      Object.keys(this.conf.events).forEach(function (eventName) {
        var conf = _this.conf;
        selection.on(eventName, function (d, i, nodes) {
          conf.events[eventName](d, i, nodes, _d3Selection.event);
        });
      });

      return this;
    }
  }, {
    key: 'renderBlock',
    value: function renderBlock(parentElement, data, layout, conf) {
      var _this2 = this;

      var block = parentElement.selectAll('.block').data(data).enter().append('g').attr('class', 'block').attr('transform', function (d) {
        return 'rotate(' + layout.blocks[d.key].start * 360 / (2 * Math.PI) + ')';
      });

      if (conf.backgrounds) {
        block.selectAll('.background').data(function (d) {
          return conf.backgrounds.map(function (background) {
            return {
              start: background.start || conf.cmin,
              end: background.end || conf.cmax,
              angle: layout.blocks[d.key].end - layout.blocks[d.key].start,
              color: background.color,
              opacity: background.opacity
            };
          });
        }).enter().append('path').attr('class', 'background').attr('fill', function (background) {
          return background.color;
        }).attr('opacity', function (background) {
          return background.opacity || 1;
        }).attr('d', (0, _d3Shape.arc)().innerRadius(function (background) {
          return conf.direction === 'in' ? conf.outerRadius - _this2.scale(background.start) : conf.innerRadius + _this2.scale(background.start);
        }).outerRadius(function (background) {
          return conf.direction === 'in' ? conf.outerRadius - _this2.scale(background.end) : conf.innerRadius + _this2.scale(background.end);
        }).startAngle(0).endAngle(function (d) {
          return d.angle;
        }));
      }

      return block;
    }
  }, {
    key: 'theta',
    value: function theta(position, block) {
      return position / block.len * (block.end - block.start);
    }
  }, {
    key: 'x',
    value: function x(d, layout, conf) {
      var height = this.scale(d.value);
      var r = conf.direction === 'in' ? conf.outerRadius - height : conf.innerRadius + height;

      var angle = this.theta(d.position, layout.blocks[d.block_id]) - Math.PI / 2;
      return r * Math.cos(angle);
    }
  }, {
    key: 'y',
    value: function y(d, layout, conf) {
      var height = this.scale(d.value);
      var r = conf.direction === 'in' ? conf.outerRadius - height : conf.innerRadius + height;

      var angle = this.theta(d.position, layout.blocks[d.block_id]) - Math.PI / 2;
      return r * Math.sin(angle);
    }
  }]);

  return Track;
}();

exports.default = Track;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseSpanValueData = parseSpanValueData;
exports.parseSpanStringData = parseSpanStringData;
exports.parsePositionValueData = parsePositionValueData;
exports.parsePositionTextData = parsePositionTextData;
exports.parseChordData = parseChordData;

var _keys = __webpack_require__(18);

var _keys2 = _interopRequireDefault(_keys);

var _includes = __webpack_require__(613);

var _includes2 = _interopRequireDefault(_includes);

var _every = __webpack_require__(617);

var _every2 = _interopRequireDefault(_every);

var _map = __webpack_require__(144);

var _map2 = _interopRequireDefault(_map);

var _d3Collection = __webpack_require__(227);

var _d3Array = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = console;

function checkParent(key, index, layoutSummary, header) {
  if (!(0, _includes2.default)((0, _keys2.default)(layoutSummary), key)) {
    logger.log(1, 'datum', 'unknown parent id', { line: index + 1, value: key, header: header, layoutSummary: layoutSummary });
    return false;
  }
  return true;
}

function checkNumber(keys, index) {
  return (0, _every2.default)(keys, function (value, header) {
    if (isNaN(value)) {
      logger.log(1, 'datum', 'not a number', { line: index + 1, value: value, header: header });
      return false;
    }
    return true;
  });
}

function normalize(data, idKeys) {
  var sampleKeys = (0, _keys2.default)(data[0]);
  var isObject = (0, _every2.default)((0, _map2.default)(idKeys, function (key) {
    return (0, _includes2.default)(sampleKeys, key);
  }));
  if (isObject) {
    return (0, _map2.default)(data, function (datum) {
      return (0, _map2.default)(idKeys, function (key) {
        return datum[key];
      });
    });
  }

  return data;
}

function buildOutput(data) {
  return {
    data: (0, _d3Collection.nest)().key(function (datum) {
      return datum.block_id;
    }).entries(data),
    meta: {
      min: (0, _d3Array.min)(data, function (d) {
        return d.value;
      }),
      max: (0, _d3Array.max)(data, function (d) {
        return d.value;
      })
    }
  };
}

function parseSpanValueData(data, layoutSummary) {
  // ['parent_id', 'start', 'end', 'value']
  if (data.length === 0) {
    return { data: [], meta: { min: null, max: null } };
  }

  var filteredData = data.filter(function (datum, index) {
    return checkParent(datum.block_id, index, layoutSummary, 'parent');
  });

  return buildOutput(filteredData);
}

function parseSpanStringData(data, layoutSummary) {
  // ['parent_id', 'start', 'end', 'value']

  if (data.length === 0) {
    return { data: [], meta: { min: null, max: null } };
  }

  var filteredData = data.filter(function (datum, index) {
    return checkParent(datum.block_id, index, layoutSummary, 'parent');
  }).filter(function (datum, index) {
    return checkNumber({ start: datum.start, end: datum.end }, index);
  }).filter(function (datum) {
    if (datum.start < 0 || datum.end > layoutSummary[datum.block_id]) {
      logger.log(2, 'position', 'position inconsistency', { datum: datum, layoutSummary: layoutSummary });
      return false;
    }
    return true;
  });

  return buildOutput(filteredData);
}

function parsePositionValueData(data, layoutSummary) {
  // ['parent_id', 'position', 'value']
  if (data.length === 0) {
    return { data: [], meta: { min: null, max: null } };
  }

  var filteredData = data.filter(function (datum, index) {
    return checkParent(datum.block_id, index, layoutSummary, 'parent');
  }).filter(function (datum, index) {
    return checkNumber({ position: datum.position, value: datum.value }, index);
  });

  return buildOutput(filteredData);
}

function parsePositionTextData(data, layoutSummary) {
  // ['parent_id', 'position', 'value']
  if (data.length === 0) {
    return { data: [], meta: { min: null, max: null } };
  }

  var filteredData = data.filter(function (datum, index) {
    return checkParent(datum.block_id, index, layoutSummary, 'parent');
  }).filter(function (datum, index) {
    return checkNumber({ position: datum.position }, index);
  });

  return buildOutput(filteredData);
}

function parseChordData(data, layoutSummary) {
  if (data.length === 0) {
    return { data: [], meta: { min: null, max: null } };
  }

  var formatedData = data.filter(function (datum, index) {
    if (datum.source) {
      return checkParent(datum.source.id, index, layoutSummary, 'sourceId');
    }
    logger.warn('No source for data at index ' + index);
    return false;
  }).filter(function (datum, index) {
    if (datum.target) {
      return checkParent(datum.target.id, index, layoutSummary, 'targetId');
    }
    logger.warn('No target for data at index ' + index);
    return false;
  }).filter(function (datum, index) {
    return checkNumber({
      sourceStart: datum.source.start,
      sourceEnd: datum.source.end,
      targetStart: datum.target.start,
      targetEnd: datum.target.end,
      value: datum.value || 1
    }, index);
  });

  return {
    data: formatedData,
    meta: {
      min: (0, _d3Array.min)(formatedData, function (d) {
        return d.value;
      }),
      max: (0, _d3Array.max)(formatedData, function (d) {
        return d.value;
      })
    }
  };
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var axes = {
  axes: {
    value: [],
    iteratee: false
  },
  showAxesTooltip: {
    value: true,
    iteratee: false
  }
};

var palette = {
  colorPaletteSize: {
    value: 9,
    iteratee: false
  },
  colorPalette: {
    value: 'YlGnBu',
    iteratee: false
  },
  usePalette: {
    value: true,
    iteratee: false
  },
  colorPaletteReverse: {
    value: true,
    iteratee: false
  }
};

var radial = {
  innerRadius: {
    value: 0,
    iteratee: false
  },
  outerRadius: {
    value: 0,
    iteratee: false
  }
};

var values = {
  min: {
    value: null,
    iteratee: false
  },
  max: {
    value: null,
    iteratee: false
  },
  logScale: {
    value: false,
    iteratee: false
  },
  logScaleBase: {
    value: Math.E,
    iteratee: false
  }
};

var common = {
  zIndex: {
    value: false,
    iteratee: false
  },
  opacity: {
    value: 1,
    iteratee: true
  },
  tooltipContent: {
    value: null,
    iteratee: false
  },
  events: {
    value: {},
    iteratee: false
  }
};

exports.axes = axes;
exports.palette = palette;
exports.radial = radial;
exports.values = values;
exports.common = common;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(243),
    getValue = __webpack_require__(248);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObject = __webpack_require__(7);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function constant() {
    return x;
  };
});


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/**
 * The default argument placeholder value for methods.
 *
 * @type {Object}
 */
module.exports = {};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
var array = Array.prototype;

var map = array.map;
var slice = array.slice;


/***/ }),
/* 28 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(90),
    baseAssignValue = __webpack_require__(83);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(64),
    baseEach = __webpack_require__(39),
    castFunction = __webpack_require__(286),
    isArray = __webpack_require__(2);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(287),
    baseMatchesProperty = __webpack_require__(303),
    identity = __webpack_require__(28),
    isArray = __webpack_require__(2),
    property = __webpack_require__(311);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

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
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_path__ = __webpack_require__(428);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_path__["a"]; });



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var baseConvert = __webpack_require__(476),
    util = __webpack_require__(478);

/**
 * Converts `func` of `name` to an immutable auto-curried iteratee-first data-last
 * version with conversion `options` applied. If `name` is an object its methods
 * will be converted.
 *
 * @param {string} name The name of the function to wrap.
 * @param {Function} [func] The function to wrap.
 * @param {Object} [options] The options object. See `baseConvert` for more details.
 * @returns {Function|Object} Returns the converted function or object.
 */
function convert(name, func, options) {
  return baseConvert(util, name, func, options);
}

module.exports = convert;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(283),
    createBaseEach = __webpack_require__(285);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 40 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(299),
    Map = __webpack_require__(81),
    Promise = __webpack_require__(300),
    Set = __webpack_require__(301),
    WeakMap = __webpack_require__(151),
    baseGetTag = __webpack_require__(16),
    toSource = __webpack_require__(129);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = hue;
/* harmony export (immutable) */ __webpack_exports__["b"] = gamma;
/* harmony export (immutable) */ __webpack_exports__["a"] = nogamma;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(170);


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
}


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return abs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return atan2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return sin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return sqrt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return epsilon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return tau; });
/* harmony export (immutable) */ __webpack_exports__["b"] = acos;
/* harmony export (immutable) */ __webpack_exports__["c"] = asin;
var abs = Math.abs;
var atan2 = Math.atan2;
var cos = Math.cos;
var max = Math.max;
var min = Math.min;
var sin = Math.sin;
var sqrt = Math.sqrt;

var epsilon = 1e-12;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = 2 * pi;

function acos(x) {
  return x > 1 ? 0 : x < -1 ? pi : Math.acos(x);
}

function asin(x) {
  return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
}


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
});


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0) o[n] = n;
  return o;
});


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x === null ? NaN : +x;
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = linearish;
/* harmony export (immutable) */ __webpack_exports__["a"] = linear;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tickFormat__ = __webpack_require__(527);





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    return Object(__WEBPACK_IMPORTED_MODULE_3__tickFormat__["a" /* default */])(domain(), count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_2__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]);

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, linear());
  };

  return linearish(scale);
}


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(s) {
  return s.match(/.{6}/g).map(function(x) {
    return "#" + x;
  });
});


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(52),
    stackClear = __webpack_require__(255),
    stackDelete = __webpack_require__(256),
    stackGet = __webpack_require__(257),
    stackHas = __webpack_require__(258),
    stackSet = __webpack_require__(259);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(250),
    listCacheDelete = __webpack_require__(251),
    listCacheGet = __webpack_require__(252),
    listCacheHas = __webpack_require__(253),
    listCacheSet = __webpack_require__(254);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(268);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),
/* 57 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(274),
    isObjectLike = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5),
    stubFalse = __webpack_require__(276);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84)(module)))

/***/ }),
/* 60 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(141),
    baseKeysIn = __webpack_require__(280),
    isArrayLike = __webpack_require__(17);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(38),
    isArrayLike = __webpack_require__(17),
    isIndex = __webpack_require__(62),
    isObject = __webpack_require__(7);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(94);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_dispatch__ = __webpack_require__(350);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return __WEBPACK_IMPORTED_MODULE_0__src_dispatch__["a"]; });



/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return a + b * t;
  };
});


/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tweenValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(12);


function tweenRemove(id, name) {
  var tween0, tween1;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = tween0 = tween;
      for (var i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1 = tween1.slice();
          tween1.splice(i, 1);
          break;
        }
      }
    }

    schedule.tween = tween1;
  };
}

function tweenFunction(id, name, value) {
  var tween0, tween1;
  if (typeof value !== "function") throw new Error;
  return function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id),
        tween = schedule.tween;

    // If this node shared tween with the previous node,
    // just assign the updated shared tween and we’re done!
    // Otherwise, copy-on-write.
    if (tween !== tween0) {
      tween1 = (tween0 = tween).slice();
      for (var t = {name: name, value: value}, i = 0, n = tween1.length; i < n; ++i) {
        if (tween1[i].name === name) {
          tween1[i] = t;
          break;
        }
      }
      if (i === n) tween1.push(t);
    }

    schedule.tween = tween1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var id = this._id;

  name += "";

  if (arguments.length < 2) {
    var tween = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).tween;
    for (var i = 0, n = tween.length, t; i < n; ++i) {
      if ((t = tween[i]).name === name) {
        return t.value;
      }
    }
    return null;
  }

  return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
});

function tweenValue(transition, name, value) {
  var id = transition._id;

  transition.each(function() {
    var schedule = Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id);
    (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
  });

  return function(node) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(node, id).value[name];
  };
}


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Linear(context) {
  this._context = context;
}

Linear.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: this._context.lineTo(x, y); break;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Linear(context);
});


/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {});


/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Basis;
function point(that, x, y) {
  that._context.bezierCurveTo(
    (2 * that._x0 + that._x1) / 3,
    (2 * that._y0 + that._y1) / 3,
    (that._x0 + 2 * that._x1) / 3,
    (that._y0 + 2 * that._y1) / 3,
    (that._x0 + 4 * that._x1 + x) / 6,
    (that._y0 + 4 * that._y1 + y) / 6
  );
}

function Basis(context) {
  this._context = context;
}

Basis.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3: point(this, this._x1, this._y1); // proceed
      case 2: this._context.lineTo(this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = (function(context) {
  return new Basis(context);
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = point;
/* harmony export (immutable) */ __webpack_exports__["a"] = Cardinal;
function point(that, x, y) {
  that._context.bezierCurveTo(
    that._x1 + that._k * (that._x2 - that._x0),
    that._y1 + that._k * (that._y2 - that._y0),
    that._x2 + that._k * (that._x1 - x),
    that._y2 + that._k * (that._y1 - y),
    that._x2,
    that._y2
  );
}

function Cardinal(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

Cardinal.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: point(this, this._x1, this._y1); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new Cardinal(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(56),
    isObject = __webpack_require__(7);

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = deinterpolateLinear;
/* harmony export (immutable) */ __webpack_exports__["a"] = copy;
/* harmony export (immutable) */ __webpack_exports__["b"] = continuous;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constant__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(228);






var unit = [0, 1];

function deinterpolateLinear(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_3__constant__["a" /* default */])(b);
}

function deinterpolateClamp(deinterpolate) {
  return function(a, b) {
    var d = deinterpolate(a = +a, b = +b);
    return function(x) { return x <= a ? 0 : x >= b ? 1 : d(x); };
  };
}

function reinterpolateClamp(reinterpolate) {
  return function(a, b) {
    var r = reinterpolate(a = +a, b = +b);
    return function(t) { return t <= 0 ? a : t >= 1 ? b : r(t); };
  };
}

function bimap(domain, range, deinterpolate, reinterpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = deinterpolate(d1, d0), r0 = reinterpolate(r1, r0);
  else d0 = deinterpolate(d0, d1), r0 = reinterpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, deinterpolate, reinterpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = deinterpolate(domain[i], domain[i + 1]);
    r[i] = reinterpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp());
}

// deinterpolate(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// reinterpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding domain value x in [a,b].
function continuous(deinterpolate, reinterpolate) {
  var domain = unit,
      range = unit,
      interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["a" /* interpolate */],
      clamp = false,
      piecewise,
      output,
      input;

  function rescale() {
    piecewise = Math.min(domain.length, range.length) > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return (output || (output = piecewise(domain, range, clamp ? deinterpolateClamp(deinterpolate) : deinterpolate, interpolate)))(+x);
  }

  scale.invert = function(y) {
    return (input || (input = piecewise(range, domain, deinterpolateLinear, clamp ? reinterpolateClamp(reinterpolate) : reinterpolate)))(+y);
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_2__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = __WEBPACK_IMPORTED_MODULE_2__array__["b" /* slice */].call(_), interpolate = __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["f" /* interpolateRound */], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, rescale()) : clamp;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  return rescale();
}


/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(122);


/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(28),
    overRest = __webpack_require__(126),
    setToString = __webpack_require__(79);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(241),
    shortOut = __webpack_require__(130);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(260),
    mapCacheDelete = __webpack_require__(267),
    mapCacheGet = __webpack_require__(269),
    mapCacheHas = __webpack_require__(270),
    mapCacheSet = __webpack_require__(271);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(127);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(136);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(138);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(277),
    baseUnary = __webpack_require__(60),
    nodeUtil = __webpack_require__(89);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(128);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84)(module)))

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(83),
    eq = __webpack_require__(38);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(149),
    stubArray = __webpack_require__(150);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(34);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(94);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return event; });
/* harmony export (immutable) */ __webpack_exports__["a"] = customEvent;
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["b"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(97);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["c" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(170);









/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b)
      : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */]
      : t === "string" ? ((c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */])
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]
      : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */]
      : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */]
      : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
});


/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Color;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return brighter; });
/* harmony export (immutable) */ __webpack_exports__["e"] = color;
/* harmony export (immutable) */ __webpack_exports__["h"] = rgbConvert;
/* harmony export (immutable) */ __webpack_exports__["g"] = rgb;
/* harmony export (immutable) */ __webpack_exports__["b"] = Rgb;
/* unused harmony export hslConvert */
/* harmony export (immutable) */ __webpack_exports__["f"] = hsl;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(101);


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex3 = /^#([0-9a-f]{3})$/,
    reHex6 = /^#([0-9a-f]{6})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
  displayable: function() {
    return this.rgb().displayable();
  },
  toString: function() {
    return this.rgb() + "";
  }
});

function color(format) {
  var m;
  format = (format + "").trim().toLowerCase();
  return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb((m >> 8 & 0xf) | (m >> 4 & 0x0f0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1)) // #f00
      : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format])
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (0 <= this.r && this.r <= 255)
        && (0 <= this.g && this.g <= 255)
        && (0 <= this.b && this.b <= 255)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  toString: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(")
        + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
        + Math.max(0, Math.min(255, Math.round(this.b) || 0))
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = extend;
/* harmony default export */ __webpack_exports__["a"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = basis;
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["b"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = now;
/* harmony export (immutable) */ __webpack_exports__["a"] = Timer;
/* harmony export (immutable) */ __webpack_exports__["c"] = timer;
/* unused harmony export timerFlush */
var frame = 0, // is an animation frame pending?
    timeout = 0, // is a timeout pending?
    interval = 0, // are any timers active?
    pokeDelay = 1000, // how frequently we check for clock skew
    taskHead,
    taskTail,
    clockLast = 0,
    clockNow = 0,
    clockSkew = 0,
    clock = typeof performance === "object" && performance.now ? performance : Date,
    setFrame = typeof window === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) { setTimeout(f, 17); };

function now() {
  return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
}

function clearNow() {
  clockNow = 0;
}

function Timer() {
  this._call =
  this._time =
  this._next = null;
}

Timer.prototype = timer.prototype = {
  constructor: Timer,
  restart: function(callback, delay, time) {
    if (typeof callback !== "function") throw new TypeError("callback is not a function");
    time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
    if (!this._next && taskTail !== this) {
      if (taskTail) taskTail._next = this;
      else taskHead = this;
      taskTail = this;
    }
    this._call = callback;
    this._time = time;
    sleep();
  },
  stop: function() {
    if (this._call) {
      this._call = null;
      this._time = Infinity;
      sleep();
    }
  }
};

function timer(callback, delay, time) {
  var t = new Timer;
  t.restart(callback, delay, time);
  return t;
}

function timerFlush() {
  now(); // Get the current time, if not already set.
  ++frame; // Pretend we’ve set an alarm, if we haven’t already.
  var t = taskHead, e;
  while (t) {
    if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
    t = t._next;
  }
  --frame;
}

function wake() {
  clockNow = (clockLast = clock.now()) + clockSkew;
  frame = timeout = 0;
  try {
    timerFlush();
  } finally {
    frame = 0;
    nap();
    clockNow = 0;
  }
}

function poke() {
  var now = clock.now(), delay = now - clockLast;
  if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
}

function nap() {
  var t0, t1 = taskHead, t2, time = Infinity;
  while (t1) {
    if (t1._call) {
      if (time > t1._time) time = t1._time;
      t0 = t1, t1 = t1._next;
    } else {
      t2 = t1._next, t1._next = null;
      t1 = t0 ? t0._next = t2 : taskHead = t2;
    }
  }
  taskTail = t0;
  sleep(time);
}

function sleep(time) {
  if (frame) return; // Soonest alarm already set, or will be.
  if (timeout) timeout = clearTimeout(timeout);
  var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
  if (delay > 24) {
    if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
    if (interval) interval = clearInterval(interval);
  } else {
    if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
    frame = 1, setFrame(wake);
  }
}


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(51),
    arrayEach = __webpack_require__(64),
    assignValue = __webpack_require__(90),
    baseAssign = __webpack_require__(181),
    baseAssignIn = __webpack_require__(404),
    cloneBuffer = __webpack_require__(134),
    copyArray = __webpack_require__(30),
    copySymbols = __webpack_require__(405),
    copySymbolsIn = __webpack_require__(406),
    getAllKeys = __webpack_require__(147),
    getAllKeysIn = __webpack_require__(407),
    getTag = __webpack_require__(41),
    initCloneArray = __webpack_require__(408),
    initCloneByTag = __webpack_require__(409),
    initCloneObject = __webpack_require__(137),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(59),
    isMap = __webpack_require__(413),
    isObject = __webpack_require__(7),
    isSet = __webpack_require__(415),
    keys = __webpack_require__(18);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(417),
    baseEach = __webpack_require__(39),
    baseIteratee = __webpack_require__(33),
    baseReduce = __webpack_require__(418),
    isArray = __webpack_require__(2);

/**
 * Reduces `collection` to a value which is the accumulated result of running
 * each element in `collection` thru `iteratee`, where each successive
 * invocation is supplied the return value of the previous. If `accumulator`
 * is not given, the first element of `collection` is used as the initial
 * value. The iteratee is invoked with four arguments:
 * (accumulator, value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.reduce`, `_.reduceRight`, and `_.transform`.
 *
 * The guarded methods are:
 * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
 * and `sortBy`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @returns {*} Returns the accumulated value.
 * @see _.reduceRight
 * @example
 *
 * _.reduce([1, 2], function(sum, n) {
 *   return sum + n;
 * }, 0);
 * // => 3
 *
 * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 *   return result;
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
 */
function reduce(collection, iteratee, accumulator) {
  var func = isArray(collection) ? arrayReduce : baseReduce,
      initAccum = arguments.length < 3;

  return func(collection, baseIteratee(iteratee, 4), accumulator, initAccum, baseEach);
}

module.exports = reduce;


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(107),
    baseOrderBy = __webpack_require__(422),
    baseRest = __webpack_require__(78),
    isIterateeCall = __webpack_require__(63);

/**
 * Creates an array of elements, sorted in ascending order by the results of
 * running each element in a collection thru each iteratee. This method
 * performs a stable sort, that is, it preserves the original sort order of
 * equal elements. The iteratees are invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {...(Function|Function[])} [iteratees=[_.identity]]
 *  The iteratees to sort by.
 * @returns {Array} Returns the new sorted array.
 * @example
 *
 * var users = [
 *   { 'user': 'fred',   'age': 48 },
 *   { 'user': 'barney', 'age': 36 },
 *   { 'user': 'fred',   'age': 40 },
 *   { 'user': 'barney', 'age': 34 }
 * ];
 *
 * _.sortBy(users, [function(o) { return o.user; }]);
 * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 *
 * _.sortBy(users, ['user', 'age']);
 * // => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
 */
var sortBy = baseRest(function(collection, iteratees) {
  if (collection == null) {
    return [];
  }
  var length = iteratees.length;
  if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
    iteratees = [];
  } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
    iteratees = [iteratees[0]];
  }
  return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
});

module.exports = sortBy;


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(65),
    isFlattenable = __webpack_require__(421);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(109);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function line(data) {
    var i,
        n = data.length,
        d,
        defined0 = false,
        buffer;

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) output.lineStart();
        else output.lineEnd();
      }
      if (defined0) output.point(+x(d, i, data), +y(d, i, data));
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  line.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : x;
  };

  line.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), line) : y;
  };

  line.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), line) : defined;
  };

  line.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), line) : curve;
  };

  line.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
  };

  return line;
});


/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = x;
/* harmony export (immutable) */ __webpack_exports__["b"] = y;
function x(p) {
  return p[0];
}

function y(p) {
  return p[1];
}


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(74);



function point(that, x, y) {
  var x1 = that._x1,
      y1 = that._y1,
      x2 = that._x2,
      y2 = that._y2;

  if (that._l01_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
        n = 3 * that._l01_a * (that._l01_a + that._l12_a);
    x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
    y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
  }

  if (that._l23_a > __WEBPACK_IMPORTED_MODULE_0__math__["f" /* epsilon */]) {
    var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
        m = 3 * that._l23_a * (that._l23_a + that._l12_a);
    x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
    y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
  }

  that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
}

function CatmullRom(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRom.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x2, this._y2); break;
      case 3: this.point(this._x2, this._y2); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; // proceed
      default: point(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRom(context, alpha) : new __WEBPACK_IMPORTED_MODULE_1__cardinal__["a" /* Cardinal */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = sum;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(46);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var sums = series.map(sum);
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[a] - sums[b]; });
});

function sum(series) {
  var s = 0, i = -1, n = series.length, v;
  while (++i < n) if (v = +series[i][1]) s += v;
  return s;
}


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(47);


/* harmony default export */ __webpack_exports__["a"] = (function(values, p, valueof) {
  if (valueof == null) valueof = __WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */];
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(211),
    createBind = __webpack_require__(480),
    createCurry = __webpack_require__(481),
    createHybrid = __webpack_require__(213),
    createPartial = __webpack_require__(495),
    getData = __webpack_require__(116),
    mergeData = __webpack_require__(496),
    setData = __webpack_require__(219),
    setWrapToString = __webpack_require__(220),
    toInteger = __webpack_require__(119);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
  var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
  if (!isBindKey && typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var length = partials ? partials.length : 0;
  if (!length) {
    bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
    partials = holders = undefined;
  }
  ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
  arity = arity === undefined ? arity : toInteger(arity);
  length -= holders ? holders.length : 0;

  if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
    var partialsRight = partials,
        holdersRight = holders;

    partials = holders = undefined;
  }
  var data = isBindKey ? undefined : getData(func);

  var newData = [
    func, bitmask, thisArg, partials, holders, partialsRight, holdersRight,
    argPos, ary, arity
  ];

  if (data) {
    mergeData(newData, data);
  }
  func = newData[0];
  bitmask = newData[1];
  thisArg = newData[2];
  partials = newData[3];
  holders = newData[4];
  arity = newData[9] = newData[9] === undefined
    ? (isBindKey ? 0 : func.length)
    : nativeMax(newData[9] - length, 0);

  if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
    bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
  }
  if (!bitmask || bitmask == WRAP_BIND_FLAG) {
    var result = createBind(func, bitmask, thisArg);
  } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
    result = createCurry(func, bitmask, arity);
  } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
    result = createPartial(func, bitmask, thisArg, partials);
  } else {
    result = createHybrid.apply(undefined, newData);
  }
  var setter = data ? baseSetData : setData;
  return setWrapToString(setter(result, newData), func, bitmask);
}

module.exports = createWrap;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(56),
    baseLodash = __webpack_require__(115);

/** Used as references for the maximum length and index of an array. */
var MAX_ARRAY_LENGTH = 4294967295;

/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */
function LazyWrapper(value) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__dir__ = 1;
  this.__filtered__ = false;
  this.__iteratees__ = [];
  this.__takeCount__ = MAX_ARRAY_LENGTH;
  this.__views__ = [];
}

// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;

module.exports = LazyWrapper;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */
function baseLodash() {
  // No operation performed.
}

module.exports = baseLodash;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var metaMap = __webpack_require__(212),
    noop = __webpack_require__(483);

/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */
var getData = !metaMap ? noop : function(func) {
  return metaMap.get(func);
};

module.exports = getData;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(56),
    baseLodash = __webpack_require__(115);

/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */
function LodashWrapper(value, chainAll) {
  this.__wrapped__ = value;
  this.__actions__ = [];
  this.__chain__ = !!chainAll;
  this.__index__ = 0;
  this.__values__ = undefined;
}

LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;

module.exports = LodashWrapper;


/***/ }),
/* 118 */
/***/ (function(module, exports) {

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */
function replaceHolders(array, placeholder) {
  var index = -1,
      length = array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (value === placeholder || value === PLACEHOLDER) {
      array[index] = PLACEHOLDER;
      result[resIndex++] = index;
    }
  }
  return result;
}

module.exports = replaceHolders;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(223);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefix; });
var prefix = "$";

function Map() {}

Map.prototype = map.prototype = {
  constructor: Map,
  has: function(key) {
    return (prefix + key) in this;
  },
  get: function(key) {
    return this[prefix + key];
  },
  set: function(key, value) {
    this[prefix + key] = value;
    return this;
  },
  remove: function(key) {
    var property = prefix + key;
    return property in this && delete this[property];
  },
  clear: function() {
    for (var property in this) if (property[0] === prefix) delete this[property];
  },
  keys: function() {
    var keys = [];
    for (var property in this) if (property[0] === prefix) keys.push(property.slice(1));
    return keys;
  },
  values: function() {
    var values = [];
    for (var property in this) if (property[0] === prefix) values.push(this[property]);
    return values;
  },
  entries: function() {
    var entries = [];
    for (var property in this) if (property[0] === prefix) entries.push({key: property.slice(1), value: this[property]});
    return entries;
  },
  size: function() {
    var size = 0;
    for (var property in this) if (property[0] === prefix) ++size;
    return size;
  },
  empty: function() {
    for (var property in this) if (property[0] === prefix) return false;
    return true;
  },
  each: function(f) {
    for (var property in this) if (property[0] === prefix) f(this[property], property.slice(1), this);
  }
};

function map(object, f) {
  var map = new Map;

  // Copy constructor.
  if (object instanceof Map) object.each(function(value, key) { map.set(key, value); });

  // Index array by numeric index or specified key function.
  else if (Array.isArray(object)) {
    var i = -1,
        n = object.length,
        o;

    if (f == null) while (++i < n) map.set(i, object[i]);
    else while (++i < n) map.set(f(o = object[i], i, object), o);
  }

  // Convert object to map.
  else if (object) for (var key in object) map.set(key, object[key]);

  return map;
}

/* harmony default export */ __webpack_exports__["a"] = (map);


/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_interval__ = __webpack_require__(4);
/* unused harmony reexport timeInterval */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_millisecond__ = __webpack_require__(542);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport timeMilliseconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_1__src_millisecond__["a"]; });
/* unused harmony reexport utcMilliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_second__ = __webpack_require__(543);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport timeSeconds */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_2__src_second__["a"]; });
/* unused harmony reexport utcSeconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_minute__ = __webpack_require__(544);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_minute__["a"]; });
/* unused harmony reexport timeMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_hour__ = __webpack_require__(545);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_hour__["a"]; });
/* unused harmony reexport timeHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_day__ = __webpack_require__(546);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_day__["a"]; });
/* unused harmony reexport timeDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_week__ = __webpack_require__(547);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["b"]; });
/* unused harmony reexport timeSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["a"]; });
/* unused harmony reexport timeMondays */
/* unused harmony reexport timeTuesday */
/* unused harmony reexport timeTuesdays */
/* unused harmony reexport timeWednesday */
/* unused harmony reexport timeWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__src_week__["c"]; });
/* unused harmony reexport timeThursdays */
/* unused harmony reexport timeFriday */
/* unused harmony reexport timeFridays */
/* unused harmony reexport timeSaturday */
/* unused harmony reexport timeSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_month__ = __webpack_require__(548);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_7__src_month__["a"]; });
/* unused harmony reexport timeMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_year__ = __webpack_require__(549);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return __WEBPACK_IMPORTED_MODULE_8__src_year__["a"]; });
/* unused harmony reexport timeYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__ = __webpack_require__(550);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return __WEBPACK_IMPORTED_MODULE_9__src_utcMinute__["a"]; });
/* unused harmony reexport utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcHour__ = __webpack_require__(551);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcHour__["a"]; });
/* unused harmony reexport utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_utcDay__ = __webpack_require__(552);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_11__src_utcDay__["a"]; });
/* unused harmony reexport utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__ = __webpack_require__(553);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcWeeks */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["b"]; });
/* unused harmony reexport utcSundays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["a"]; });
/* unused harmony reexport utcMondays */
/* unused harmony reexport utcTuesday */
/* unused harmony reexport utcTuesdays */
/* unused harmony reexport utcWednesday */
/* unused harmony reexport utcWednesdays */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return __WEBPACK_IMPORTED_MODULE_12__src_utcWeek__["c"]; });
/* unused harmony reexport utcThursdays */
/* unused harmony reexport utcFriday */
/* unused harmony reexport utcFridays */
/* unused harmony reexport utcSaturday */
/* unused harmony reexport utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__ = __webpack_require__(554);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return __WEBPACK_IMPORTED_MODULE_13__src_utcMonth__["a"]; });
/* unused harmony reexport utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_utcYear__ = __webpack_require__(555);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_14__src_utcYear__["a"]; });
/* unused harmony reexport utcYears */































/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeFormat; });
/* unused harmony export timeParse */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcParse; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(237);


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(50),
    baseRest = __webpack_require__(78),
    customDefaultsMerge = __webpack_require__(249),
    mergeWith = __webpack_require__(282);

/**
 * This method is like `_.defaults` except that it recursively assigns
 * default properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaults
 * @example
 *
 * _.defaultsDeep({ 'a': { 'b': 2 } }, { 'a': { 'b': 1, 'c': 3 } });
 * // => { 'a': { 'b': 2, 'c': 3 } }
 */
var defaultsDeep = baseRest(function(args) {
  args.push(undefined, customDefaultsMerge);
  return apply(mergeWith, undefined, args);
});

module.exports = defaultsDeep;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(50);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)))

/***/ }),
/* 129 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(51),
    assignMergeValue = __webpack_require__(132),
    baseFor = __webpack_require__(133),
    baseMergeDeep = __webpack_require__(273),
    isObject = __webpack_require__(7),
    keysIn = __webpack_require__(61),
    safeGet = __webpack_require__(140);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    if (isObject(srcValue)) {
      stack || (stack = new Stack);
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(83),
    eq = __webpack_require__(38);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(272);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(5);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(84)(module)))

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(85);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(56),
    getPrototype = __webpack_require__(86),
    isPrototype = __webpack_require__(57);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),
/* 138 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    getPrototype = __webpack_require__(86),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key`, unless `key` is "__proto__".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(279),
    isArguments = __webpack_require__(58),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(59),
    isIndex = __webpack_require__(62),
    isTypedArray = __webpack_require__(88);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(78),
    isIterateeCall = __webpack_require__(63);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(57),
    nativeKeys = __webpack_require__(284);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(40),
    baseIteratee = __webpack_require__(33),
    baseMap = __webpack_require__(158),
    isArray = __webpack_require__(2);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(289),
    isObjectLike = __webpack_require__(6);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(290),
    arraySome = __webpack_require__(293),
    cacheHas = __webpack_require__(294);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(148),
    getSymbols = __webpack_require__(91),
    keys = __webpack_require__(18);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(65),
    isArray = __webpack_require__(2);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 150 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 153 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(155),
    toKey = __webpack_require__(42);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isKey = __webpack_require__(92),
    stringToPath = __webpack_require__(156),
    toString = __webpack_require__(157);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(305);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(307);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(39),
    isArrayLike = __webpack_require__(17);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 161 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["b"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = styleValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(96);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = yesdrag;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noevent__ = __webpack_require__(166);



/* harmony default export */ __webpack_exports__["a"] = (function(view) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["select"])(view).on("dragstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
  } else {
    root.__noselect = root.style.MozUserSelect;
    root.style.MozUserSelect = "none";
  }
});

function yesdrag(view, noclick) {
  var root = view.document.documentElement,
      selection = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["select"])(view).on("dragstart.drag", null);
  if (noclick) {
    selection.on("click.drag", __WEBPACK_IMPORTED_MODULE_1__noevent__["a" /* default */], true);
    setTimeout(function() { selection.on("click.drag", null); }, 0);
  }
  if ("onselectstart" in root) {
    selection.on("selectstart.drag", null);
  } else {
    root.style.MozUserSelect = root.__noselect;
    delete root.__noselect;
  }
}


/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return rgbBasis; });
/* unused harmony export rgbBasisClosed */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(43);





/* harmony default export */ __webpack_exports__["a"] = ((function rgbGamma(y) {
  var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

  function rgb(start, end) {
    var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);


/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(102);


/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 171 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(99);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
});


/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var d = new Date;
  return a = +a, b -= a, function(t) {
    return d.setTime(a + b * t), d;
  };
});


/***/ }),
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(99);


/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(69);


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_selection_index__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_transition_index__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_1__src_transition_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_active__ = __webpack_require__(399);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "active", function() { return __WEBPACK_IMPORTED_MODULE_2__src_active__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_interrupt__ = __webpack_require__(176);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interrupt", function() { return __WEBPACK_IMPORTED_MODULE_3__src_interrupt__["a"]; });






/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_schedule__ = __webpack_require__(12);


/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      active,
      empty = true,
      i;

  if (!schedules) return;

  name = name == null ? null : name + "";

  for (i in schedules) {
    if ((schedule = schedules[i]).name !== name) { empty = false; continue; }
    active = schedule.state > __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["d" /* STARTING */] && schedule.state < __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["b" /* ENDING */];
    schedule.state = __WEBPACK_IMPORTED_MODULE_0__transition_schedule__["a" /* ENDED */];
    schedule.timer.stop();
    if (active) schedule.on.call("interrupt", node, node.__data__, schedule.index, schedule.group);
    delete schedules[i];
  }

  if (empty) delete node.__transition;
});


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__src_timer__["c"]; });
/* unused harmony reexport timerFlush */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(369);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_timeout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(370);
/* unused harmony reexport interval */







/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  var c;
  return (typeof b === "number" ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]
      : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateRgb */]
      : (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["d" /* interpolateRgb */])
      : __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["g" /* interpolateString */])(a, b);
});


/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Transform;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return identity; });
/* harmony export (immutable) */ __webpack_exports__["b"] = transform;
function Transform(k, x, y) {
  this.k = k;
  this.x = x;
  this.y = y;
}

Transform.prototype = {
  constructor: Transform,
  scale: function(k) {
    return k === 1 ? this : new Transform(this.k * k, this.x, this.y);
  },
  translate: function(x, y) {
    return x === 0 & y === 0 ? this : new Transform(this.k, this.x + this.k * x, this.y + this.k * y);
  },
  apply: function(point) {
    return [point[0] * this.k + this.x, point[1] * this.k + this.y];
  },
  applyX: function(x) {
    return x * this.k + this.x;
  },
  applyY: function(y) {
    return y * this.k + this.y;
  },
  invert: function(location) {
    return [(location[0] - this.x) / this.k, (location[1] - this.y) / this.k];
  },
  invertX: function(x) {
    return (x - this.x) / this.k;
  },
  invertY: function(y) {
    return (y - this.y) / this.k;
  },
  rescaleX: function(x) {
    return x.copy().domain(x.range().map(this.invertX, this).map(x.invert, x));
  },
  rescaleY: function(y) {
    return y.copy().domain(y.range().map(this.invertY, this).map(y.invert, y));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};

var identity = new Transform(1, 0, 0);

transform.prototype = Transform.prototype;

function transform(node) {
  return node.__zoom || identity;
}


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(104);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    keys = __webpack_require__(18);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(65),
    getPrototype = __webpack_require__(86),
    getSymbols = __webpack_require__(91),
    stubArray = __webpack_require__(150);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__curve_linear__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__line__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__point__ = __webpack_require__(109);






/* harmony default export */ __webpack_exports__["a"] = (function() {
  var x0 = __WEBPACK_IMPORTED_MODULE_4__point__["a" /* x */],
      x1 = null,
      y0 = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      y1 = __WEBPACK_IMPORTED_MODULE_4__point__["b" /* y */],
      defined = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(true),
      context = null,
      curve = __WEBPACK_IMPORTED_MODULE_2__curve_linear__["a" /* default */],
      output = null;

  function area(data) {
    var i,
        j,
        k,
        n = data.length,
        d,
        defined0 = false,
        buffer,
        x0z = new Array(n),
        y0z = new Array(n);

    if (context == null) output = curve(buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])());

    for (i = 0; i <= n; ++i) {
      if (!(i < n && defined(d = data[i], i, data)) === defined0) {
        if (defined0 = !defined0) {
          j = i;
          output.areaStart();
          output.lineStart();
        } else {
          output.lineEnd();
          output.lineStart();
          for (k = i - 1; k >= j; --k) {
            output.point(x0z[k], y0z[k]);
          }
          output.lineEnd();
          output.areaEnd();
        }
      }
      if (defined0) {
        x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
        output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
      }
    }

    if (buffer) return output = null, buffer + "" || null;
  }

  function arealine() {
    return Object(__WEBPACK_IMPORTED_MODULE_3__line__["a" /* default */])().defined(defined).curve(curve).context(context);
  }

  area.x = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), x1 = null, area) : x0;
  };

  area.x0 = function(_) {
    return arguments.length ? (x0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x0;
  };

  area.x1 = function(_) {
    return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : x1;
  };

  area.y = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), y1 = null, area) : y0;
  };

  area.y0 = function(_) {
    return arguments.length ? (y0 = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y0;
  };

  area.y1 = function(_) {
    return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), area) : y1;
  };

  area.lineX0 =
  area.lineY0 = function() {
    return arealine().x(x0).y(y0);
  };

  area.lineY1 = function() {
    return arealine().x(x0).y(y1);
  };

  area.lineX1 = function() {
    return arealine().x(x1).y(y0);
  };

  area.defined = function(_) {
    return arguments.length ? (defined = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(!!_), area) : defined;
  };

  area.curve = function(_) {
    return arguments.length ? (curve = _, context != null && (output = curve(context)), area) : curve;
  };

  area.context = function(_) {
    return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
  };

  return area;
});


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return curveRadialLinear; });
/* harmony export (immutable) */ __webpack_exports__["b"] = curveRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(71);


var curveRadialLinear = curveRadial(__WEBPACK_IMPORTED_MODULE_0__linear__["a" /* default */]);

function Radial(curve) {
  this._curve = curve;
}

Radial.prototype = {
  areaStart: function() {
    this._curve.areaStart();
  },
  areaEnd: function() {
    this._curve.areaEnd();
  },
  lineStart: function() {
    this._curve.lineStart();
  },
  lineEnd: function() {
    this._curve.lineEnd();
  },
  point: function(a, r) {
    this._curve.point(r * Math.sin(a), r * -Math.cos(a));
  }
};

function curveRadial(curve) {

  function radial(context) {
    return new Radial(curve(context));
  }

  radial._curve = curve;

  return radial;
}


/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = lineRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line__ = __webpack_require__(108);



function lineRadial(l) {
  var c = l.curve;

  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;

  l.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return l;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return lineRadial(Object(__WEBPACK_IMPORTED_MODULE_1__line__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]));
});


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, y) {
  return [(y = +y) * Math.cos(x -= Math.PI / 2), y * Math.sin(x)];
});


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(44);


/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */]);
    context.moveTo(r, 0);
    context.arc(0, 0, r, 0, __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */]);
  }
});


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / 5) / 2;
    context.moveTo(-3 * r, -r);
    context.lineTo(-r, -r);
    context.lineTo(-r, -3 * r);
    context.lineTo(r, -3 * r);
    context.lineTo(r, -r);
    context.lineTo(3 * r, -r);
    context.lineTo(3 * r, r);
    context.lineTo(r, r);
    context.lineTo(r, 3 * r);
    context.lineTo(-r, 3 * r);
    context.lineTo(-r, r);
    context.lineTo(-3 * r, r);
    context.closePath();
  }
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var tan30 = Math.sqrt(1 / 3),
    tan30_2 = tan30 * 2;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = Math.sqrt(size / tan30_2),
        x = y * tan30;
    context.moveTo(0, -y);
    context.lineTo(x, 0);
    context.lineTo(0, y);
    context.lineTo(-x, 0);
    context.closePath();
  }
});


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math__ = __webpack_require__(44);


var ka = 0.89081309152928522810,
    kr = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10) / Math.sin(7 * __WEBPACK_IMPORTED_MODULE_0__math__["j" /* pi */] / 10),
    kx = Math.sin(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr,
    ky = -Math.cos(__WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] / 10) * kr;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size * ka),
        x = kx * r,
        y = ky * r;
    context.moveTo(0, -r);
    context.lineTo(x, y);
    for (var i = 1; i < 5; ++i) {
      var a = __WEBPACK_IMPORTED_MODULE_0__math__["m" /* tau */] * i / 5,
          c = Math.cos(a),
          s = Math.sin(a);
      context.lineTo(s * r, -c * r);
      context.lineTo(c * x - s * y, s * x + c * y);
    }
    context.closePath();
  }
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var w = Math.sqrt(size),
        x = -w / 2;
    context.rect(x, x, w, w);
  }
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var sqrt3 = Math.sqrt(3);

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var y = -Math.sqrt(size / (sqrt3 * 3));
    context.moveTo(0, y * 2);
    context.lineTo(-sqrt3 * y, -y);
    context.lineTo(sqrt3 * y, -y);
    context.closePath();
  }
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var c = -0.5,
    s = Math.sqrt(3) / 2,
    k = 1 / Math.sqrt(12),
    a = (k / 2 + 1) * 3;

/* harmony default export */ __webpack_exports__["a"] = ({
  draw: function(context, size) {
    var r = Math.sqrt(size / a),
        x0 = r / 2,
        y0 = r * k,
        x1 = x0,
        y1 = r * k + r,
        x2 = -x1,
        y2 = y1;
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineTo(x2, y2);
    context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
    context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
    context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
    context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
    context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
    context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
    context.closePath();
  }
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalClosed;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cardinal__ = __webpack_require__(74);



function CardinalClosed(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalClosed(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = CardinalOpen;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinal__ = __webpack_require__(74);


function CardinalOpen(context, tension) {
  this._context = context;
  this._k = (1 - tension) / 6;
}

CardinalOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__cardinal__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["b"] = ((function custom(tension) {

  function cardinal(context) {
    return new CardinalOpen(context, tension);
  }

  cardinal.tension = function(tension) {
    return custom(+tension);
  };

  return cardinal;
})(0));


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bisectLeft; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisector__ = __webpack_require__(198);



var ascendingBisect = Object(__WEBPACK_IMPORTED_MODULE_1__bisector__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["c"] = (bisectRight);


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(f(d), x);
  };
}


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = pair;
/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__variance__ = __webpack_require__(201);


/* harmony default export */ __webpack_exports__["a"] = (function(array, f) {
  var v = Object(__WEBPACK_IMPORTED_MODULE_0__variance__["a" /* default */])(array, f);
  return v ? Math.sqrt(v) : v;
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(47);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = tickIncrement;
/* harmony export (immutable) */ __webpack_exports__["c"] = tickStep;
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["a"] = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__min__ = __webpack_require__(207);


/* harmony default export */ __webpack_exports__["a"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(__WEBPACK_IMPORTED_MODULE_0__min__["a" /* default */])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerTooltip = registerTooltip;

var _d3Selection = __webpack_require__(3);

__webpack_require__(175);

__webpack_require__(469);

function registerTooltip(track, instance, element, trackParams) {
  track.dispatch.on('mouseover', function (d) {
    instance.tip.html(trackParams.tooltipContent(d)).transition().style('opacity', 0.9).style('left', _d3Selection.event.pageX + 'px').style('top', _d3Selection.event.pageY - 28 + 'px');
  });

  track.dispatch.on('mouseout', function (d) {
    instance.tip.transition().duration(500).style('opacity', 0);
  });
}

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smartBorders = smartBorders;
exports.computeMinMax = computeMinMax;
exports.buildScale = buildScale;

var _sortBy = __webpack_require__(475);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _flow = __webpack_require__(506);

var _flow2 = _interopRequireDefault(_flow);

var _concat = __webpack_require__(509);

var _concat2 = _interopRequireDefault(_concat);

var _filter = __webpack_require__(511);

var _filter2 = _interopRequireDefault(_filter);

var _first = __webpack_require__(514);

var _first2 = _interopRequireDefault(_first);

var _reverse = __webpack_require__(518);

var _reverse2 = _interopRequireDefault(_reverse);

var _d3Scale = __webpack_require__(225);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function smartBorders(conf, layout, tracks) {
  var width = conf.defaultTrackWidth || 30;

  var externalTrack = (0, _flow2.default)((0, _filter2.default)('conf.outerRadius'), (0, _sortBy2.default)('conf.outerRadius'), _reverse2.default, _first2.default)((0, _concat2.default)(tracks, layout));

  return {
    in: externalTrack.conf.outerRadius,
    out: externalTrack.conf.outerRadius + width
  };
}

function computeMinMax(conf, meta) {
  conf.cmin = conf.min === null ? meta.min : conf.min;
  conf.cmax = conf.max === null ? meta.max : conf.max;
  return conf;
}

function buildScale(min, max, height) {
  var logScale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var logScaleBase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Math.E;

  if (logScale && min * max <= 0) {
    console.warn('As log(0) = -\u221E, a log scale domain must be\n      strictly-positive or strictly-negative. logscale ignored');
  }
  var scale = logScale && min * max > 0 ? (0, _d3Scale.scaleLog)().base(logScaleBase) : (0, _d3Scale.scaleLinear)();

  return scale.domain([min, max]).range([0, height]).clamp(true);
}

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(28),
    metaMap = __webpack_require__(212);

/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var baseSetData = !metaMap ? identity : function(func, data) {
  metaMap.set(func, data);
  return func;
};

module.exports = baseSetData;


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

var WeakMap = __webpack_require__(151);

/** Used to store function metadata. */
var metaMap = WeakMap && new WeakMap;

module.exports = metaMap;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(214),
    composeArgsRight = __webpack_require__(215),
    countHolders = __webpack_require__(482),
    createCtor = __webpack_require__(75),
    createRecurry = __webpack_require__(216),
    getHolder = __webpack_require__(222),
    reorder = __webpack_require__(494),
    replaceHolders = __webpack_require__(118),
    root = __webpack_require__(5);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_ARY_FLAG = 128,
    WRAP_FLIP_FLAG = 512;

/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
  var isAry = bitmask & WRAP_ARY_FLAG,
      isBind = bitmask & WRAP_BIND_FLAG,
      isBindKey = bitmask & WRAP_BIND_KEY_FLAG,
      isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG),
      isFlip = bitmask & WRAP_FLIP_FLAG,
      Ctor = isBindKey ? undefined : createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length;

    while (index--) {
      args[index] = arguments[index];
    }
    if (isCurried) {
      var placeholder = getHolder(wrapper),
          holdersCount = countHolders(args, placeholder);
    }
    if (partials) {
      args = composeArgs(args, partials, holders, isCurried);
    }
    if (partialsRight) {
      args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
    }
    length -= holdersCount;
    if (isCurried && length < arity) {
      var newHolders = replaceHolders(args, placeholder);
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, thisArg,
        args, newHolders, argPos, ary, arity - length
      );
    }
    var thisBinding = isBind ? thisArg : this,
        fn = isBindKey ? thisBinding[func] : func;

    length = args.length;
    if (argPos) {
      args = reorder(args, argPos);
    } else if (isFlip && length > 1) {
      args.reverse();
    }
    if (isAry && ary < length) {
      args.length = ary;
    }
    if (this && this !== root && this instanceof wrapper) {
      fn = Ctor || createCtor(fn);
    }
    return fn.apply(thisBinding, args);
  }
  return wrapper;
}

module.exports = createHybrid;


/***/ }),
/* 214 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgs(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersLength = holders.length,
      leftIndex = -1,
      leftLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(leftLength + rangeLength),
      isUncurried = !isCurried;

  while (++leftIndex < leftLength) {
    result[leftIndex] = partials[leftIndex];
  }
  while (++argsIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[holders[argsIndex]] = args[argsIndex];
    }
  }
  while (rangeLength--) {
    result[leftIndex++] = args[argsIndex++];
  }
  return result;
}

module.exports = composeArgs;


/***/ }),
/* 215 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */
function composeArgsRight(args, partials, holders, isCurried) {
  var argsIndex = -1,
      argsLength = args.length,
      holdersIndex = -1,
      holdersLength = holders.length,
      rightIndex = -1,
      rightLength = partials.length,
      rangeLength = nativeMax(argsLength - holdersLength, 0),
      result = Array(rangeLength + rightLength),
      isUncurried = !isCurried;

  while (++argsIndex < rangeLength) {
    result[argsIndex] = args[argsIndex];
  }
  var offset = argsIndex;
  while (++rightIndex < rightLength) {
    result[offset + rightIndex] = partials[rightIndex];
  }
  while (++holdersIndex < holdersLength) {
    if (isUncurried || argsIndex < argsLength) {
      result[offset + holders[holdersIndex]] = args[argsIndex++];
    }
  }
  return result;
}

module.exports = composeArgsRight;


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

var isLaziable = __webpack_require__(217),
    setData = __webpack_require__(219),
    setWrapToString = __webpack_require__(220);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64;

/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
  var isCurry = bitmask & WRAP_CURRY_FLAG,
      newHolders = isCurry ? holders : undefined,
      newHoldersRight = isCurry ? undefined : holders,
      newPartials = isCurry ? partials : undefined,
      newPartialsRight = isCurry ? undefined : partials;

  bitmask |= (isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG);
  bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);

  if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
    bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
  }
  var newData = [
    func, bitmask, thisArg, newPartials, newHolders, newPartialsRight,
    newHoldersRight, argPos, ary, arity
  ];

  var result = wrapFunc.apply(undefined, newData);
  if (isLaziable(func)) {
    setData(result, newData);
  }
  result.placeholder = placeholder;
  return setWrapToString(result, func, bitmask);
}

module.exports = createRecurry;


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(114),
    getData = __webpack_require__(116),
    getFuncName = __webpack_require__(218),
    lodash = __webpack_require__(485);

/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */
function isLaziable(func) {
  var funcName = getFuncName(func),
      other = lodash[funcName];

  if (typeof other != 'function' || !(funcName in LazyWrapper.prototype)) {
    return false;
  }
  if (func === other) {
    return true;
  }
  var data = getData(other);
  return !!data && func === data[0];
}

module.exports = isLaziable;


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

var realNames = __webpack_require__(484);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */
function getFuncName(func) {
  var result = (func.name + ''),
      array = realNames[result],
      length = hasOwnProperty.call(realNames, result) ? array.length : 0;

  while (length--) {
    var data = array[length],
        otherFunc = data.func;
    if (otherFunc == null || otherFunc == func) {
      return data.name;
    }
  }
  return result;
}

module.exports = getFuncName;


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var baseSetData = __webpack_require__(211),
    shortOut = __webpack_require__(130);

/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */
var setData = shortOut(baseSetData);

module.exports = setData;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

var getWrapDetails = __webpack_require__(487),
    insertWrapDetails = __webpack_require__(488),
    setToString = __webpack_require__(79),
    updateWrapDetails = __webpack_require__(489);

/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */
function setWrapToString(wrapper, reference, bitmask) {
  var source = (reference + '');
  return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}

module.exports = setWrapToString;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(491),
    baseIsNaN = __webpack_require__(492),
    strictIndexOf = __webpack_require__(493);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),
/* 222 */
/***/ (function(module, exports) {

/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */
function getHolder(func) {
  var object = func;
  return object.placeholder;
}

module.exports = getHolder;


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(497);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(504),
    overRest = __webpack_require__(126),
    setToString = __webpack_require__(79);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_band__ = __webpack_require__(520);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return __WEBPACK_IMPORTED_MODULE_0__src_band__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_identity__ = __webpack_require__(526);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__src_identity__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_linear__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return __WEBPACK_IMPORTED_MODULE_2__src_linear__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_log__ = __webpack_require__(537);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return __WEBPACK_IMPORTED_MODULE_3__src_log__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ordinal__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ordinal__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_pow__ = __webpack_require__(538);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return __WEBPACK_IMPORTED_MODULE_5__src_pow__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_quantile__ = __webpack_require__(539);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return __WEBPACK_IMPORTED_MODULE_6__src_quantile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_quantize__ = __webpack_require__(540);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return __WEBPACK_IMPORTED_MODULE_7__src_quantize__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_threshold__ = __webpack_require__(541);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return __WEBPACK_IMPORTED_MODULE_8__src_threshold__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_time__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return __WEBPACK_IMPORTED_MODULE_9__src_time__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_utcTime__ = __webpack_require__(557);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return __WEBPACK_IMPORTED_MODULE_10__src_utcTime__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_category10__ = __webpack_require__(558);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_11__src_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_category20b__ = __webpack_require__(559);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20b", function() { return __WEBPACK_IMPORTED_MODULE_12__src_category20b__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_category20c__ = __webpack_require__(560);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20c", function() { return __WEBPACK_IMPORTED_MODULE_13__src_category20c__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_category20__ = __webpack_require__(561);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory20", function() { return __WEBPACK_IMPORTED_MODULE_14__src_category20__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(562);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__src_rainbow__ = __webpack_require__(563);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_16__src_rainbow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__src_viridis__ = __webpack_require__(564);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_17__src_viridis__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__src_sequential__ = __webpack_require__(565);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return __WEBPACK_IMPORTED_MODULE_18__src_sequential__["a"]; });







































/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return implicit; });
/* harmony export (immutable) */ __webpack_exports__["a"] = ordinal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_collection__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(27);



var implicit = {name: "implicit"};

function ordinal(range) {
  var index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])(),
      domain = [],
      unknown = implicit;

  range = range == null ? [] : __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(range);

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = Object(__WEBPACK_IMPORTED_MODULE_0_d3_collection__["map"])();
    var i = -1, n = _.length, d, key;
    while (++i < n) if (!index.has(key = (d = _[i]) + "")) index.set(key, domain.push(d));
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return scale;
}


/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_nest__ = __webpack_require__(521);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "nest", function() { return __WEBPACK_IMPORTED_MODULE_0__src_nest__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_set__ = __webpack_require__(522);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "set", function() { return __WEBPACK_IMPORTED_MODULE_1__src_set__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_map__ = __webpack_require__(120);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return __WEBPACK_IMPORTED_MODULE_2__src_map__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_keys__ = __webpack_require__(523);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_3__src_keys__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_values__ = __webpack_require__(524);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "values", function() { return __WEBPACK_IMPORTED_MODULE_4__src_values__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_entries__ = __webpack_require__(525);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "entries", function() { return __WEBPACK_IMPORTED_MODULE_5__src_entries__["a"]; });








/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return +x;
});


/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(528);
/* unused harmony reexport formatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(230);
/* unused harmony reexport formatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__src_formatSpecifier__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__ = __webpack_require__(534);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__src_precisionFixed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__ = __webpack_require__(535);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__src_precisionPrefix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__ = __webpack_require__(536);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_5__src_precisionRound__["a"]; });








/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatGroup__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatNumerals__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__formatSpecifier__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__formatTypes__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__identity__ = __webpack_require__(533);








var prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["a"] = (function(locale) {
  var group = locale.grouping && locale.thousands ? Object(__WEBPACK_IMPORTED_MODULE_1__formatGroup__["a" /* default */])(locale.grouping, locale.thousands) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      currency = locale.currency,
      decimal = locale.decimal,
      numerals = locale.numerals ? Object(__WEBPACK_IMPORTED_MODULE_2__formatNumerals__["a" /* default */])(locale.numerals) : __WEBPACK_IMPORTED_MODULE_6__identity__["a" /* default */],
      percent = locale.percent || "%";

  function newFormat(specifier) {
    specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        type = specifier.type;

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currency[0] : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currency[1] : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = __WEBPACK_IMPORTED_MODULE_4__formatTypes__["a" /* default */][type],
        maybeSuffix = !type || /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision == null ? (type ? 6 : 12)
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Perform the initial formatting.
        var valueNegative = value < 0;
        value = formatType(Math.abs(value), precision);

        // If a negative value rounds to zero during formatting, treat as positive.
        if (valueNegative && +value === 0) valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : "-") : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + __WEBPACK_IMPORTED_MODULE_5__formatPrefixAuto__["b" /* prefixExponent */] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(__WEBPACK_IMPORTED_MODULE_3__formatSpecifier__["a" /* default */])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatSpecifier;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatTypes__ = __webpack_require__(232);


// [[fill]align][sign][symbol][0][width][,][.precision][type]
var re = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  return new FormatSpecifier(specifier);
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);

  var match,
      fill = match[1] || " ",
      align = match[2] || ">",
      sign = match[3] || "-",
      symbol = match[4] || "",
      zero = !!match[5],
      width = match[6] && +match[6],
      comma = !!match[7],
      precision = match[8] && +match[8].slice(1),
      type = match[9] || "";

  // The "n" type is an alias for ",g".
  if (type === "n") comma = true, type = "g";

  // Map invalid types to the default format.
  else if (!__WEBPACK_IMPORTED_MODULE_0__formatTypes__["a" /* default */][type]) type = "";

  // If zero fill is specified, padding goes after sign and before digits.
  if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

  this.fill = fill;
  this.align = align;
  this.sign = sign;
  this.symbol = symbol;
  this.zero = zero;
  this.width = width;
  this.comma = comma;
  this.precision = precision;
  this.type = type;
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width == null ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision == null ? "" : "." + Math.max(0, this.precision | 0))
      + this.type;
};


/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDefault__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__formatRounded__ = __webpack_require__(532);




/* harmony default export */ __webpack_exports__["a"] = ({
  "": __WEBPACK_IMPORTED_MODULE_0__formatDefault__["a" /* default */],
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(__WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */])(x * 100, p); },
  "r": __WEBPACK_IMPORTED_MODULE_2__formatRounded__["a" /* default */],
  "s": __WEBPACK_IMPORTED_MODULE_1__formatPrefixAuto__["a" /* default */],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return prefixExponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(122);


var prefixExponent;

/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = calendar;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_time_format__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__array__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__continuous__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nice__ = __webpack_require__(234);








var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["b" /* default */])(__WEBPACK_IMPORTED_MODULE_5__continuous__["c" /* deinterpolateLinear */], __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["c" /* interpolateNumber */]),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop, step) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target);
      if (i === tickIntervals.length) {
        step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
    }

    return step == null ? interval : interval.every(step);
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(__WEBPACK_IMPORTED_MODULE_4__array__["a" /* map */].call(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval, step) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1, step);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval, step) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1], step))
        ? domain(Object(__WEBPACK_IMPORTED_MODULE_6__nice__["a" /* default */])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_5__continuous__["a" /* copy */])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["b"] = (function() {
  return calendar(__WEBPACK_IMPORTED_MODULE_2_d3_time__["k" /* timeYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["f" /* timeMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["j" /* timeWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["a" /* timeDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["b" /* timeHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["d" /* timeMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["g" /* timeSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["c" /* timeMillisecond */], __WEBPACK_IMPORTED_MODULE_3_d3_time_format__["a" /* timeFormat */]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]);
});


/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__ = __webpack_require__(124);
/* unused harmony reexport timeFormatDefaultLocale */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["a"]; });
/* unused harmony reexport timeParse */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__src_defaultLocale__["b"]; });
/* unused harmony reexport utcParse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_locale__ = __webpack_require__(237);
/* unused harmony reexport timeFormatLocale */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_isoFormat__ = __webpack_require__(238);
/* unused harmony reexport isoFormat */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_isoParse__ = __webpack_require__(556);
/* unused harmony reexport isoParse */






/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = formatLocale;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_time__ = __webpack_require__(123);


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newYear(y) {
  return {y: y, m: 0, d: 1, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, newDate) {
    return function(string) {
      var d = newYear(1900),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newYear(d.y)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = newDate(newYear(d.y)), day = week.getDay();
          week = day > 4 || day === 0 ? __WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].ceil(week) : Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */])(week);
          week = __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newYear(d.y)).getUTCDay() : newDate(newYear(d.y)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return newDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", localDate);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier, utcDate);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = (+n[0]) * 1000, i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["a" /* timeDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["h" /* timeSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["i" /* timeThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["e" /* timeMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["k" /* timeYear */])(d), d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + __WEBPACK_IMPORTED_MODULE_0_d3_time__["l" /* utcDay */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["s" /* utcSunday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */])(d) : __WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].ceil(d);
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["t" /* utcThursday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d) + (Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(__WEBPACK_IMPORTED_MODULE_0_d3_time__["p" /* utcMonday */].count(Object(__WEBPACK_IMPORTED_MODULE_0_d3_time__["v" /* utcYear */])(d), d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isoSpecifier; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__defaultLocale__ = __webpack_require__(124);


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_0__defaultLocale__["b" /* utcFormat */])(isoSpecifier);

/* unused harmony default export */ var _unused_webpack_default_export = (formatIso);


/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return sin; });
/* unused harmony export pi */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return halfPi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return tau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return max; });
var cos = Math.cos;
var sin = Math.sin;
var pi = Math.PI;
var halfPi = pi / 2;
var tau = pi * 2;
var max = Math.max;


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaultsDeep = __webpack_require__(125);

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _forEach = __webpack_require__(32);

var _forEach2 = _interopRequireDefault(_forEach);

var _isArray = __webpack_require__(2);

var _isArray2 = _interopRequireDefault(_isArray);

var _map = __webpack_require__(144);

var _map2 = _interopRequireDefault(_map);

var _d3Selection = __webpack_require__(3);

var _d3Zoom = __webpack_require__(348);

var _index = __webpack_require__(403);

var _index2 = _interopRequireDefault(_index);

var _render2 = __webpack_require__(420);

var _render3 = _interopRequireDefault(_render2);

var _Text = __webpack_require__(468);

var _Text2 = _interopRequireDefault(_Text);

var _Highlight = __webpack_require__(620);

var _Highlight2 = _interopRequireDefault(_Highlight);

var _Histogram = __webpack_require__(621);

var _Histogram2 = _interopRequireDefault(_Histogram);

var _Chords = __webpack_require__(622);

var _Chords2 = _interopRequireDefault(_Chords);

var _Heatmap = __webpack_require__(628);

var _Heatmap2 = _interopRequireDefault(_Heatmap);

var _Line = __webpack_require__(629);

var _Line2 = _interopRequireDefault(_Line);

var _Scatter = __webpack_require__(630);

var _Scatter2 = _interopRequireDefault(_Scatter);

var _Stack = __webpack_require__(631);

var _Stack2 = _interopRequireDefault(_Stack);

var _clipboard = __webpack_require__(632);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultConf = {
  width: 700,
  height: 700,
  container: 'circos',
  defaultTrackWidth: 10
};

var zoom_handler = (0, _d3Zoom.zoom)().scaleExtent([1, 2]).on("zoom", function () {
  (0, _d3Selection.select)('.all').attr("transform", _d3Selection.event.transform);
});

function download_svg() {
  if (document.getElementById('svg-child').hasChildNodes() === true) {
    var circos_svg = document.getElementById('svg-child');
    var svg_as_xml = new XMLSerializer().serializeToString(circos_svg);
    var svg_data = 'data:image/svg+xml,' + encodeURIComponent(svg_as_xml);
    var link = document.getElementById('download-link');
    link.setAttribute("href", svg_data);
    link.setAttribute("download", "circos.svg");
    link.click();
  }
}

var Core = function () {
  function Core(conf) {
    _classCallCheck(this, Core);

    this.tracks = {};
    this._layout = null;
    this.conf = (0, _defaultsDeep2.default)(conf, defaultConf);

    // Apply style for positioning button
    var container = (0, _d3Selection.select)(this.conf.container).style('position', 'relative');
    this.svg = container.append('svg');
    if (conf.enableZoomPan === true) {
      // Apply zoom & pan handler
      this.svg.attr('id', 'svg-child').call(zoom_handler);
      this.svg.call(zoom_handler.transform, _d3Zoom.zoomIdentity.translate(conf.width / 2, conf.height / 2));

      // Reset to center on dbl click
      this.svg.on('dblclick.zoom', function () {
        (0, _d3Selection.select)('#svg-child').call(zoom_handler.transform, _d3Zoom.zoomIdentity.translate(conf.width / 2, conf.height / 2));
      });
    }

    if (conf.enableDownloadSVG === true) {
      // Add svg download button
      var button_svg = (0, _d3Selection.select)('#' + this.conf.container.id).append("button").style('position', 'absolute').style('top', '5%').style('right', '5%').text("Download SVG").attr("id", "button").classed("Button", true).on("click.button", function () {
        download_svg();
      }).append('a').attr('id', 'download-link');
    }

    if ((0, _d3Selection.select)('body').select('.circos-tooltip').empty()) {
      this.tip = (0, _d3Selection.select)('body').append('div').attr('class', 'circos-tooltip').style('position', 'fixed').style('opacity', 0);
    } else {
      this.tip = (0, _d3Selection.select)('body').select('.circos-tooltip');
    }

    this.clipboard = (0, _clipboard.initClipboard)(this.conf.container);
  }

  _createClass(Core, [{
    key: 'removeToolTip',
    value: function removeToolTip() {
      this.tip.remove();
    }
  }, {
    key: 'removeTracks',
    value: function removeTracks(trackIds) {
      var _this = this;

      if (typeof trackIds === 'undefined') {
        (0, _map2.default)(this.tracks, function (track, id) {
          _this.svg.select('.' + id).remove();
        });
        this.tracks = {};
      } else if (typeof trackIds === 'string') {
        this.svg.select('.' + trackIds).remove();
        delete this.tracks[trackIds];
      } else if ((0, _isArray2.default)(trackIds)) {
        (0, _forEach2.default)(trackIds, function (trackId) {
          this.svg.select('.' + trackId).remove();
          delete this.tracks[trackId];
        });
      } else {
        console.warn('removeTracks received an unhandled attribute type');
      }

      return this;
    }
  }, {
    key: 'layout',
    value: function layout(data, conf) {
      this._layout = new _index2.default(conf, data);
      return this;
    }
  }, {
    key: 'chords',
    value: function chords(id, data, conf) {
      this.tracks[id] = new _Chords2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'heatmap',
    value: function heatmap(id, data, conf) {
      this.tracks[id] = new _Heatmap2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'highlight',
    value: function highlight(id, data, conf) {
      this.tracks[id] = new _Highlight2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'histogram',
    value: function histogram(id, data, conf) {
      this.tracks[id] = new _Histogram2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'line',
    value: function line(id, data, conf) {
      this.tracks[id] = new _Line2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'scatter',
    value: function scatter(id, data, conf) {
      this.tracks[id] = new _Scatter2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'stack',
    value: function stack(id, data, conf) {
      this.tracks[id] = new _Stack2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'text',
    value: function text(id, data, conf) {
      this.tracks[id] = new _Text2.default(this, conf, data);
      return this;
    }
  }, {
    key: 'render',
    value: function render(ids, removeTracks) {
      (0, _render3.default)(ids, removeTracks, this);
    }
  }]);

  return Core;
}();

var Circos = function Circos(conf) {
  var instance = new Core(conf);
  return instance;
};

module.exports = Circos;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

var constant = __webpack_require__(242),
    defineProperty = __webpack_require__(127),
    identity = __webpack_require__(28);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),
/* 242 */
/***/ (function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(24),
    isMasked = __webpack_require__(246),
    isObject = __webpack_require__(7),
    toSource = __webpack_require__(129);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(247);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(5);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 248 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(131),
    isObject = __webpack_require__(7);

/**
 * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
 * objects into destination objects that are passed thru.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to merge.
 * @param {Object} object The parent object of `objValue`.
 * @param {Object} source The parent object of `srcValue`.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 * @returns {*} Returns the value to assign.
 */
function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
  if (isObject(objValue) && isObject(srcValue)) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, objValue);
    baseMerge(objValue, srcValue, undefined, customDefaultsMerge, stack);
    stack['delete'](srcValue);
  }
  return objValue;
}

module.exports = customDefaultsMerge;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(53);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(53);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(53);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(53);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(52);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 256 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 257 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 258 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(52),
    Map = __webpack_require__(81),
    MapCache = __webpack_require__(82);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(261),
    ListCache = __webpack_require__(52),
    Map = __webpack_require__(81);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(262),
    hashDelete = __webpack_require__(263),
    hashGet = __webpack_require__(264),
    hashHas = __webpack_require__(265),
    hashSet = __webpack_require__(266);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(54);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 263 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(54);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(54);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(54);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(55);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 268 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(55);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(55);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(55);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 272 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

var assignMergeValue = __webpack_require__(132),
    cloneBuffer = __webpack_require__(134),
    cloneTypedArray = __webpack_require__(135),
    copyArray = __webpack_require__(30),
    initCloneObject = __webpack_require__(137),
    isArguments = __webpack_require__(58),
    isArray = __webpack_require__(2),
    isArrayLikeObject = __webpack_require__(275),
    isBuffer = __webpack_require__(59),
    isFunction = __webpack_require__(24),
    isObject = __webpack_require__(7),
    isPlainObject = __webpack_require__(139),
    isTypedArray = __webpack_require__(88),
    safeGet = __webpack_require__(140),
    toPlainObject = __webpack_require__(278);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(17),
    isObjectLike = __webpack_require__(6);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),
/* 276 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isLength = __webpack_require__(87),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    keysIn = __webpack_require__(61);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),
/* 279 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isPrototype = __webpack_require__(57),
    nativeKeysIn = __webpack_require__(281);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),
/* 281 */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

var baseMerge = __webpack_require__(131),
    createAssigner = __webpack_require__(142);

/**
 * This method is like `_.merge` except that it accepts `customizer` which
 * is invoked to produce the merged values of the destination and source
 * properties. If `customizer` returns `undefined`, merging is handled by the
 * method instead. The `customizer` is invoked with six arguments:
 * (objValue, srcValue, key, object, source, stack).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} customizer The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   if (_.isArray(objValue)) {
 *     return objValue.concat(srcValue);
 *   }
 * }
 *
 * var object = { 'a': [1], 'b': [2] };
 * var other = { 'a': [3], 'b': [4] };
 *
 * _.mergeWith(object, other, customizer);
 * // => { 'a': [1, 3], 'b': [2, 4] }
 */
var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
  baseMerge(object, source, srcIndex, customizer);
});

module.exports = mergeWith;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(133),
    keys = __webpack_require__(18);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(138);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(17);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(28);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(288),
    getMatchData = __webpack_require__(302),
    matchesStrictComparable = __webpack_require__(153);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(51),
    baseIsEqual = __webpack_require__(145);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(51),
    equalArrays = __webpack_require__(146),
    equalByTag = __webpack_require__(295),
    equalObjects = __webpack_require__(298),
    getTag = __webpack_require__(41),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(59),
    isTypedArray = __webpack_require__(88);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(82),
    setCacheAdd = __webpack_require__(291),
    setCacheHas = __webpack_require__(292);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 291 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 292 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 293 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 294 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    Uint8Array = __webpack_require__(136),
    eq = __webpack_require__(38),
    equalArrays = __webpack_require__(146),
    mapToArray = __webpack_require__(296),
    setToArray = __webpack_require__(297);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 296 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 297 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(147);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(23),
    root = __webpack_require__(5);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(152),
    keys = __webpack_require__(18);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(145),
    get = __webpack_require__(304),
    hasIn = __webpack_require__(308),
    isKey = __webpack_require__(92),
    isStrictComparable = __webpack_require__(152),
    matchesStrictComparable = __webpack_require__(153),
    toKey = __webpack_require__(42);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(154);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(306);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(82);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    arrayMap = __webpack_require__(40),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(309),
    hasPath = __webpack_require__(310);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 309 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(155),
    isArguments = __webpack_require__(58),
    isArray = __webpack_require__(2),
    isIndex = __webpack_require__(62),
    isLength = __webpack_require__(87),
    toKey = __webpack_require__(42);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(312),
    basePropertyDeep = __webpack_require__(313),
    isKey = __webpack_require__(92),
    toKey = __webpack_require__(42);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 312 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(154);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 314 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__select__ = __webpack_require__(159);



/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return Object(__WEBPACK_IMPORTED_MODULE_1__select__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name).call(document.documentElement));
});


/***/ }),
/* 315 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(95);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 316 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(160);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, parents);
});


/***/ }),
/* 317 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(161);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 318 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(319);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 319 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 320 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(11);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](merges, this._parents);
});


/***/ }),
/* 322 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 323 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 324 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 325 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 326 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 327 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 328 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 329 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 330 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(93);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 331 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 332 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 333 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 334 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 335 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 336 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 337 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(66);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 338 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(95);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 339 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 340 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function selection_cloneShallow() {
  return this.parentNode.insertBefore(this.cloneNode(false), this.nextSibling);
}

function selection_cloneDeep() {
  return this.parentNode.insertBefore(this.cloneNode(true), this.nextSibling);
}

/* harmony default export */ __webpack_exports__["a"] = (function(deep) {
  return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
});


/***/ }),
/* 341 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 342 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(96);


function dispatchEvent(node, type, params) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 343 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = local;
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 344 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(67);



/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  var event = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 345 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(11);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["c" /* root */]);
});


/***/ }),
/* 346 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(67);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 347 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(67);



/* harmony default export */ __webpack_exports__["a"] = (function(node, touches) {
  if (touches == null) touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 348 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__zoom__ = __webpack_require__(349);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zoom", function() { return __WEBPACK_IMPORTED_MODULE_0__zoom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transform__ = __webpack_require__(179);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zoomTransform", function() { return __WEBPACK_IMPORTED_MODULE_1__transform__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "zoomIdentity", function() { return __WEBPACK_IMPORTED_MODULE_1__transform__["c"]; });




/***/ }),
/* 349 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_drag__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_d3_transition__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constant__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__event__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__transform__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__noevent__ = __webpack_require__(402);










// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].button;
}

function defaultExtent() {
  var e = this, w, h;
  if (e instanceof SVGElement) {
    e = e.ownerSVGElement || e;
    w = e.width.baseVal.value;
    h = e.height.baseVal.value;
  } else {
    w = e.clientWidth;
    h = e.clientHeight;
  }
  return [[0, 0], [w, h]];
}

function defaultTransform() {
  return this.__zoom || __WEBPACK_IMPORTED_MODULE_7__transform__["c" /* identity */];
}

function defaultWheelDelta() {
  return -__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].deltaY * (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].deltaMode ? 120 : 1) / 500;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

function defaultConstrain(transform, extent, translateExtent) {
  var dx0 = transform.invertX(extent[0][0]) - translateExtent[0][0],
      dx1 = transform.invertX(extent[1][0]) - translateExtent[1][0],
      dy0 = transform.invertY(extent[0][1]) - translateExtent[0][1],
      dy1 = transform.invertY(extent[1][1]) - translateExtent[1][1];
  return transform.translate(
    dx1 > dx0 ? (dx0 + dx1) / 2 : Math.min(0, dx0) || Math.max(0, dx1),
    dy1 > dy0 ? (dy0 + dy1) / 2 : Math.min(0, dy0) || Math.max(0, dy1)
  );
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var filter = defaultFilter,
      extent = defaultExtent,
      constrain = defaultConstrain,
      wheelDelta = defaultWheelDelta,
      touchable = defaultTouchable,
      scaleExtent = [0, Infinity],
      translateExtent = [[-Infinity, -Infinity], [Infinity, Infinity]],
      duration = 250,
      interpolate = __WEBPACK_IMPORTED_MODULE_2_d3_interpolate__["j" /* interpolateZoom */],
      gestures = [],
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])("start", "zoom", "end"),
      touchstarting,
      touchending,
      touchDelay = 500,
      wheelDelay = 150,
      clickDistance2 = 0;

  function zoom(selection) {
    selection
        .property("__zoom", defaultTransform)
        .on("wheel.zoom", wheeled)
        .on("mousedown.zoom", mousedowned)
        .on("dblclick.zoom", dblclicked)
      .filter(touchable)
        .on("touchstart.zoom", touchstarted)
        .on("touchmove.zoom", touchmoved)
        .on("touchend.zoom touchcancel.zoom", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  zoom.transform = function(collection, transform) {
    var selection = collection.selection ? collection.selection() : collection;
    selection.property("__zoom", defaultTransform);
    if (collection !== selection) {
      schedule(collection, transform);
    } else {
      selection.interrupt().each(function() {
        gesture(this, arguments)
            .start()
            .zoom(null, typeof transform === "function" ? transform.apply(this, arguments) : transform)
            .end();
      });
    }
  };

  zoom.scaleBy = function(selection, k) {
    zoom.scaleTo(selection, function() {
      var k0 = this.__zoom.k,
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return k0 * k1;
    });
  };

  zoom.scaleTo = function(selection, k) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t0 = this.__zoom,
          p0 = centroid(e),
          p1 = t0.invert(p0),
          k1 = typeof k === "function" ? k.apply(this, arguments) : k;
      return constrain(translate(scale(t0, k1), p0, p1), e, translateExtent);
    });
  };

  zoom.translateBy = function(selection, x, y) {
    zoom.transform(selection, function() {
      return constrain(this.__zoom.translate(
        typeof x === "function" ? x.apply(this, arguments) : x,
        typeof y === "function" ? y.apply(this, arguments) : y
      ), extent.apply(this, arguments), translateExtent);
    });
  };

  zoom.translateTo = function(selection, x, y) {
    zoom.transform(selection, function() {
      var e = extent.apply(this, arguments),
          t = this.__zoom,
          p = centroid(e);
      return constrain(__WEBPACK_IMPORTED_MODULE_7__transform__["c" /* identity */].translate(p[0], p[1]).scale(t.k).translate(
        typeof x === "function" ? -x.apply(this, arguments) : -x,
        typeof y === "function" ? -y.apply(this, arguments) : -y
      ), e, translateExtent);
    });
  };

  function scale(transform, k) {
    k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], k));
    return k === transform.k ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform__["a" /* Transform */](k, transform.x, transform.y);
  }

  function translate(transform, p0, p1) {
    var x = p0[0] - p1[0] * transform.k, y = p0[1] - p1[1] * transform.k;
    return x === transform.x && y === transform.y ? transform : new __WEBPACK_IMPORTED_MODULE_7__transform__["a" /* Transform */](transform.k, x, y);
  }

  function centroid(extent) {
    return [(+extent[0][0] + +extent[1][0]) / 2, (+extent[0][1] + +extent[1][1]) / 2];
  }

  function schedule(transition, transform, center) {
    transition
        .on("start.zoom", function() { gesture(this, arguments).start(); })
        .on("interrupt.zoom end.zoom", function() { gesture(this, arguments).end(); })
        .tween("zoom", function() {
          var that = this,
              args = arguments,
              g = gesture(that, args),
              e = extent.apply(that, args),
              p = center || centroid(e),
              w = Math.max(e[1][0] - e[0][0], e[1][1] - e[0][1]),
              a = that.__zoom,
              b = typeof transform === "function" ? transform.apply(that, args) : transform,
              i = interpolate(a.invert(p).concat(w / a.k), b.invert(p).concat(w / b.k));
          return function(t) {
            if (t === 1) t = b; // Avoid rounding error on end.
            else { var l = i(t), k = w / l[2]; t = new __WEBPACK_IMPORTED_MODULE_7__transform__["a" /* Transform */](k, p[0] - l[0] * k, p[1] - l[1] * k); }
            g.zoom(null, t);
          };
        });
  }

  function gesture(that, args) {
    for (var i = 0, n = gestures.length, g; i < n; ++i) {
      if ((g = gestures[i]).that === that) {
        return g;
      }
    }
    return new Gesture(that, args);
  }

  function Gesture(that, args) {
    this.that = that;
    this.args = args;
    this.index = -1;
    this.active = 0;
    this.extent = extent.apply(that, args);
  }

  Gesture.prototype = {
    start: function() {
      if (++this.active === 1) {
        this.index = gestures.push(this) - 1;
        this.emit("start");
      }
      return this;
    },
    zoom: function(key, transform) {
      if (this.mouse && key !== "mouse") this.mouse[1] = transform.invert(this.mouse[0]);
      if (this.touch0 && key !== "touch") this.touch0[1] = transform.invert(this.touch0[0]);
      if (this.touch1 && key !== "touch") this.touch1[1] = transform.invert(this.touch1[0]);
      this.that.__zoom = transform;
      this.emit("zoom");
      return this;
    },
    end: function() {
      if (--this.active === 0) {
        gestures.splice(this.index, 1);
        this.index = -1;
        this.emit("end");
      }
      return this;
    },
    emit: function(type) {
      Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_6__event__["a" /* default */](zoom, type, this.that.__zoom), listeners.apply, listeners, [type, this.that, this.args]);
    }
  };

  function wheeled() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        t = this.__zoom,
        k = Math.max(scaleExtent[0], Math.min(scaleExtent[1], t.k * Math.pow(2, wheelDelta.apply(this, arguments)))),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this);

    // If the mouse is in the same location as before, reuse it.
    // If there were recent wheel events, reset the wheel idle timeout.
    if (g.wheel) {
      if (g.mouse[0][0] !== p[0] || g.mouse[0][1] !== p[1]) {
        g.mouse[1] = t.invert(g.mouse[0] = p);
      }
      clearTimeout(g.wheel);
    }

    // If this wheel event won’t trigger a transform change, ignore it.
    else if (t.k === k) return;

    // Otherwise, capture the mouse point and location at the start.
    else {
      g.mouse = [p, t.invert(p)];
      Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(this);
      g.start();
    }

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
    g.wheel = setTimeout(wheelidled, wheelDelay);
    g.zoom("mouse", constrain(translate(scale(t, k), g.mouse[0], g.mouse[1]), g.extent, translateExtent));

    function wheelidled() {
      g.wheel = null;
      g.end();
    }
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        v = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view).on("mousemove.zoom", mousemoved, true).on("mouseup.zoom", mouseupped, true),
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this),
        x0 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientX,
        y0 = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientY;

    Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["a" /* dragDisable */])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view);
    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["b" /* nopropagation */])();
    g.mouse = [p, this.__zoom.invert(p)];
    Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(this);
    g.start();

    function mousemoved() {
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
      if (!g.moved) {
        var dx = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientX - x0, dy = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].clientY - y0;
        g.moved = dx * dx + dy * dy > clickDistance2;
      }
      g.zoom("mouse", constrain(translate(g.that.__zoom, g.mouse[0] = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(g.that), g.mouse[1]), g.extent, translateExtent));
    }

    function mouseupped() {
      v.on("mousemove.zoom mouseup.zoom", null);
      Object(__WEBPACK_IMPORTED_MODULE_1_d3_drag__["b" /* dragEnable */])(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].view, g.moved);
      Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
      g.end();
    }
  }

  function dblclicked() {
    if (!filter.apply(this, arguments)) return;
    var t0 = this.__zoom,
        p0 = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["mouse"])(this),
        p1 = t0.invert(p0),
        k1 = t0.k * (__WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].shiftKey ? 0.5 : 2),
        t1 = constrain(translate(scale(t0, k1), p0, p1), extent.apply(this, arguments), translateExtent);

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
    if (duration > 0) Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).transition().duration(duration).call(schedule, t1, p0);
    else Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).call(zoom.transform, t1);
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        started,
        n = touches.length, i, t, p;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["b" /* nopropagation */])();
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["touch"])(this, touches, t.identifier);
      p = [p, this.__zoom.invert(p), t.identifier];
      if (!g.touch0) g.touch0 = p, started = true;
      else if (!g.touch1) g.touch1 = p;
    }

    // If this is a dbltap, reroute to the (optional) dblclick.zoom handler.
    if (touchstarting) {
      touchstarting = clearTimeout(touchstarting);
      if (!g.touch1) {
        g.end();
        p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["select"])(this).on("dblclick.zoom");
        if (p) p.apply(this, arguments);
        return;
      }
    }

    if (started) {
      touchstarting = setTimeout(function() { touchstarting = null; }, touchDelay);
      Object(__WEBPACK_IMPORTED_MODULE_4_d3_transition__["interrupt"])(this);
      g.start();
    }
  }

  function touchmoved() {
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        n = touches.length, i, t, p, l;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["a" /* default */])();
    if (touchstarting) touchstarting = clearTimeout(touchstarting);
    for (i = 0; i < n; ++i) {
      t = touches[i], p = Object(__WEBPACK_IMPORTED_MODULE_3_d3_selection__["touch"])(this, touches, t.identifier);
      if (g.touch0 && g.touch0[2] === t.identifier) g.touch0[0] = p;
      else if (g.touch1 && g.touch1[2] === t.identifier) g.touch1[0] = p;
    }
    t = g.that.__zoom;
    if (g.touch1) {
      var p0 = g.touch0[0], l0 = g.touch0[1],
          p1 = g.touch1[0], l1 = g.touch1[1],
          dp = (dp = p1[0] - p0[0]) * dp + (dp = p1[1] - p0[1]) * dp,
          dl = (dl = l1[0] - l0[0]) * dl + (dl = l1[1] - l0[1]) * dl;
      t = scale(t, Math.sqrt(dp / dl));
      p = [(p0[0] + p1[0]) / 2, (p0[1] + p1[1]) / 2];
      l = [(l0[0] + l1[0]) / 2, (l0[1] + l1[1]) / 2];
    }
    else if (g.touch0) p = g.touch0[0], l = g.touch0[1];
    else return;
    g.zoom("touch", constrain(translate(t, p, l), g.extent, translateExtent));
  }

  function touchended() {
    var g = gesture(this, arguments),
        touches = __WEBPACK_IMPORTED_MODULE_3_d3_selection__["event"].changedTouches,
        n = touches.length, i, t;

    Object(__WEBPACK_IMPORTED_MODULE_8__noevent__["b" /* nopropagation */])();
    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, touchDelay);
    for (i = 0; i < n; ++i) {
      t = touches[i];
      if (g.touch0 && g.touch0[2] === t.identifier) delete g.touch0;
      else if (g.touch1 && g.touch1[2] === t.identifier) delete g.touch1;
    }
    if (g.touch1 && !g.touch0) g.touch0 = g.touch1, delete g.touch1;
    if (g.touch0) g.touch0[1] = this.__zoom.invert(g.touch0[0]);
    else g.end();
  }

  zoom.wheelDelta = function(_) {
    return arguments.length ? (wheelDelta = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])(+_), zoom) : wheelDelta;
  };

  zoom.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])(!!_), zoom) : filter;
  };

  zoom.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])(!!_), zoom) : touchable;
  };

  zoom.extent = function(_) {
    return arguments.length ? (extent = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_5__constant__["a" /* default */])([[+_[0][0], +_[0][1]], [+_[1][0], +_[1][1]]]), zoom) : extent;
  };

  zoom.scaleExtent = function(_) {
    return arguments.length ? (scaleExtent[0] = +_[0], scaleExtent[1] = +_[1], zoom) : [scaleExtent[0], scaleExtent[1]];
  };

  zoom.translateExtent = function(_) {
    return arguments.length ? (translateExtent[0][0] = +_[0][0], translateExtent[1][0] = +_[1][0], translateExtent[0][1] = +_[0][1], translateExtent[1][1] = +_[1][1], zoom) : [[translateExtent[0][0], translateExtent[0][1]], [translateExtent[1][0], translateExtent[1][1]]];
  };

  zoom.constrain = function(_) {
    return arguments.length ? (constrain = _, zoom) : constrain;
  };

  zoom.duration = function(_) {
    return arguments.length ? (duration = +_, zoom) : duration;
  };

  zoom.interpolate = function(_) {
    return arguments.length ? (interpolate = _, zoom) : interpolate;
  };

  zoom.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? zoom : value;
  };

  zoom.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, zoom) : Math.sqrt(clickDistance2);
  };

  return zoom;
});


/***/ }),
/* 350 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var noop = {value: function() {}};

function dispatch() {
  for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
    if (!(t = arguments[i] + "") || (t in _)) throw new Error("illegal type: " + t);
    _[t] = [];
  }
  return new Dispatch(_);
}

function Dispatch(_) {
  this._ = _;
}

function parseTypenames(typenames, types) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
    return {type: t, name: name};
  });
}

Dispatch.prototype = dispatch.prototype = {
  constructor: Dispatch,
  on: function(typename, callback) {
    var _ = this._,
        T = parseTypenames(typename + "", _),
        t,
        i = -1,
        n = T.length;

    // If no callback was specified, return the callback of the given type and name.
    if (arguments.length < 2) {
      while (++i < n) if ((t = (typename = T[i]).type) && (t = get(_[t], typename.name))) return t;
      return;
    }

    // If a type was specified, set the callback for the given type and name.
    // Otherwise, if a null callback was specified, remove callbacks of the given name.
    if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
    while (++i < n) {
      if (t = (typename = T[i]).type) _[t] = set(_[t], typename.name, callback);
      else if (callback == null) for (t in _) _[t] = set(_[t], typename.name, null);
    }

    return this;
  },
  copy: function() {
    var copy = {}, _ = this._;
    for (var t in _) copy[t] = _[t].slice();
    return new Dispatch(copy);
  },
  call: function(type, that) {
    if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) args[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  },
  apply: function(type, that, args) {
    if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
    for (var t = this._[type], i = 0, n = t.length; i < n; ++i) t[i].value.apply(that, args);
  }
};

function get(type, name) {
  for (var i = 0, n = type.length, c; i < n; ++i) {
    if ((c = type[i]).name === name) {
      return c.value;
    }
  }
}

function set(type, name, callback) {
  for (var i = 0, n = type.length; i < n; ++i) {
    if (type[i].name === name) {
      type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
      break;
    }
  }
  if (callback != null) type.push({name: name, value: callback});
  return type;
}

/* harmony default export */ __webpack_exports__["a"] = (dispatch);


/***/ }),
/* 351 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_drag__ = __webpack_require__(352);
/* unused harmony reexport drag */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_nodrag__ = __webpack_require__(165);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__src_nodrag__["b"]; });




/***/ }),
/* 352 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_dispatch__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__nodrag__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__noevent__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__constant__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__event__ = __webpack_require__(354);







// Ignore right-click, since that should open the context menu.
function defaultFilter() {
  return !__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].button;
}

function defaultContainer() {
  return this.parentNode;
}

function defaultSubject(d) {
  return d == null ? {x: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].x, y: __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].y} : d;
}

function defaultTouchable() {
  return "ontouchstart" in this;
}

/* unused harmony default export */ var _unused_webpack_default_export = (function() {
  var filter = defaultFilter,
      container = defaultContainer,
      subject = defaultSubject,
      touchable = defaultTouchable,
      gestures = {},
      listeners = Object(__WEBPACK_IMPORTED_MODULE_0_d3_dispatch__["dispatch"])("start", "drag", "end"),
      active = 0,
      mousedownx,
      mousedowny,
      mousemoving,
      touchending,
      clickDistance2 = 0;

  function drag(selection) {
    selection
        .on("mousedown.drag", mousedowned)
      .filter(touchable)
        .on("touchstart.drag", touchstarted)
        .on("touchmove.drag", touchmoved)
        .on("touchend.drag touchcancel.drag", touchended)
        .style("touch-action", "none")
        .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }

  function mousedowned() {
    if (touchending || !filter.apply(this, arguments)) return;
    var gesture = beforestart("mouse", container.apply(this, arguments), __WEBPACK_IMPORTED_MODULE_1_d3_selection__["mouse"], this, arguments);
    if (!gesture) return;
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view).on("mousemove.drag", mousemoved, true).on("mouseup.drag", mouseupped, true);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
    mousemoving = false;
    mousedownx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientX;
    mousedowny = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientY;
    gesture("start");
  }

  function mousemoved() {
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
    if (!mousemoving) {
      var dx = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientX - mousedownx, dy = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].clientY - mousedowny;
      mousemoving = dx * dx + dy * dy > clickDistance2;
    }
    gestures.mouse("drag");
  }

  function mouseupped() {
    Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["select"])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view).on("mousemove.drag mouseup.drag", null);
    Object(__WEBPACK_IMPORTED_MODULE_2__nodrag__["b" /* yesdrag */])(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].view, mousemoving);
    Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
    gestures.mouse("end");
  }

  function touchstarted() {
    if (!filter.apply(this, arguments)) return;
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        c = container.apply(this, arguments),
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = beforestart(touches[i].identifier, c, __WEBPACK_IMPORTED_MODULE_1_d3_selection__["touch"], this, arguments)) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
        gesture("start");
      }
    }
  }

  function touchmoved() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        n = touches.length, i, gesture;

    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["a" /* default */])();
        gesture("drag");
      }
    }
  }

  function touchended() {
    var touches = __WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].changedTouches,
        n = touches.length, i, gesture;

    if (touchending) clearTimeout(touchending);
    touchending = setTimeout(function() { touchending = null; }, 500); // Ghost clicks are delayed!
    for (i = 0; i < n; ++i) {
      if (gesture = gestures[touches[i].identifier]) {
        Object(__WEBPACK_IMPORTED_MODULE_3__noevent__["b" /* nopropagation */])();
        gesture("end");
      }
    }
  }

  function beforestart(id, container, point, that, args) {
    var p = point(container, id), s, dx, dy,
        sublisteners = listeners.copy();

    if (!Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_5__event__["a" /* default */](drag, "beforestart", s, id, active, p[0], p[1], 0, 0, sublisteners), function() {
      if ((__WEBPACK_IMPORTED_MODULE_1_d3_selection__["event"].subject = s = subject.apply(that, args)) == null) return false;
      dx = s.x - p[0] || 0;
      dy = s.y - p[1] || 0;
      return true;
    })) return;

    return function gesture(type) {
      var p0 = p, n;
      switch (type) {
        case "start": gestures[id] = gesture, n = active++; break;
        case "end": delete gestures[id], --active; // nobreak
        case "drag": p = point(container, id), n = active; break;
      }
      Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["customEvent"])(new __WEBPACK_IMPORTED_MODULE_5__event__["a" /* default */](drag, type, s, id, n, p[0] + dx, p[1] + dy, p[0] - p0[0], p[1] - p0[1], sublisteners), sublisteners.apply, sublisteners, [type, that, args]);
    };
  }

  drag.filter = function(_) {
    return arguments.length ? (filter = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(!!_), drag) : filter;
  };

  drag.container = function(_) {
    return arguments.length ? (container = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(_), drag) : container;
  };

  drag.subject = function(_) {
    return arguments.length ? (subject = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(_), drag) : subject;
  };

  drag.touchable = function(_) {
    return arguments.length ? (touchable = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_4__constant__["a" /* default */])(!!_), drag) : touchable;
  };

  drag.on = function() {
    var value = listeners.on.apply(listeners, arguments);
    return value === listeners ? drag : value;
  };

  drag.clickDistance = function(_) {
    return arguments.length ? (clickDistance2 = (_ = +_) * _, drag) : Math.sqrt(clickDistance2);
  };

  return drag;
});


/***/ }),
/* 353 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 354 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = DragEvent;
function DragEvent(target, type, subject, id, active, x, y, dx, dy, dispatch) {
  this.target = target;
  this.type = type;
  this.subject = subject;
  this.identifier = id;
  this.active = active;
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this._ = dispatch;
}

DragEvent.prototype.on = function() {
  var value = this._.on.apply(this._, arguments);
  return value === this._ ? this : value;
};


/***/ }),
/* 355 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = lab;
/* unused harmony export Lab */
/* harmony export (immutable) */ __webpack_exports__["b"] = hcl;
/* unused harmony export Hcl */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(167);




var Kn = 18,
    Xn = 0.950470, // D65 standard referent
    Yn = 1,
    Zn = 1.088830,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) {
    var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
    return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
  }
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var b = rgb2xyz(o.r),
      a = rgb2xyz(o.g),
      l = rgb2xyz(o.b),
      x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
      y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
      z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    y = Yn * lab2xyz(y);
    x = Xn * lab2xyz(x);
    z = Zn * lab2xyz(z);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      xyz2rgb( 3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
      xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z),
      xyz2rgb( 0.0556434 * x - 0.2040259 * y + 1.0572252 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function xyz2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2xyz(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return labConvert(this).rgb();
  }
}));


/***/ }),
/* 356 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cubehelix;
/* unused harmony export Cubehelix */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(167);




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
  brighter: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),
/* 357 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return a = +a, b -= a, function(t) {
    return Math.round(a + b * t);
  };
});


/***/ }),
/* 358 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return interpolateTransformSvg; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(359);



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb)}, {i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");


/***/ }),
/* 359 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = parseCss;
/* harmony export (immutable) */ __webpack_exports__["b"] = parseSvg;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(360);


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
  value = value.matrix;
  return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),
/* 360 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["a"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),
/* 361 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["a"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),
/* 362 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hslLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
        s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 363 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function lab(start, end) {
  var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
      a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
      b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
      opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),
/* 364 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hclLong */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
        c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
        l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
        opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* unused harmony default export */ var _unused_webpack_default_export = (hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 365 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cubehelixLong; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(43);



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
          s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
          l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
          opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* unused harmony default export */ var _unused_webpack_default_export = (cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]));
var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);


/***/ }),
/* 366 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),
/* 367 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interrupt__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transition__ = __webpack_require__(371);




__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.interrupt = __WEBPACK_IMPORTED_MODULE_1__interrupt__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.transition = __WEBPACK_IMPORTED_MODULE_2__transition__["a" /* default */];


/***/ }),
/* 368 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interrupt__ = __webpack_require__(176);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  return this.each(function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__interrupt__["a" /* default */])(this, name);
  });
});


/***/ }),
/* 369 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(103);


/* harmony default export */ __webpack_exports__["a"] = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */];
  delay = delay == null ? 0 : +delay;
  t.restart(function(elapsed) {
    t.stop();
    callback(elapsed + delay);
  }, delay, time);
  return t;
});


/***/ }),
/* 370 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(103);


/* unused harmony default export */ var _unused_webpack_default_export = (function(callback, delay, time) {
  var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */], total = delay;
  if (delay == null) return t.restart(callback, delay, time), t;
  delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer__["b" /* now */])() : +time;
  t.restart(function tick(elapsed) {
    elapsed += total;
    t.restart(tick, total += delay, time);
    callback(elapsed);
  }, delay, time);
  return t;
});


/***/ }),
/* 371 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_ease__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_timer__ = __webpack_require__(177);





var defaultTiming = {
  time: null, // Set on use.
  delay: 0,
  duration: 250,
  ease: __WEBPACK_IMPORTED_MODULE_2_d3_ease__["a" /* easeCubicInOut */]
};

function inherit(node, id) {
  var timing;
  while (!(timing = node.__transition) || !(timing = timing[id])) {
    if (!(node = node.parentNode)) {
      return defaultTiming.time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["a" /* now */])(), defaultTiming;
    }
  }
  return timing;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var id,
      timing;

  if (name instanceof __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]) {
    id = name._id, name = name._name;
  } else {
    id = Object(__WEBPACK_IMPORTED_MODULE_0__transition_index__["c" /* newId */])(), (timing = defaultTiming).time = Object(__WEBPACK_IMPORTED_MODULE_3_d3_timer__["a" /* now */])(), name = name == null ? null : name + "";
  }

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        Object(__WEBPACK_IMPORTED_MODULE_1__transition_schedule__["e" /* default */])(node, name, id, i, group, timing || inherit(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */](groups, this._parents, name, id);
});


/***/ }),
/* 372 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(178);





function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrConstantNS(fullname, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function attrFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttribute(name);
    value0 = this.getAttribute(name);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function attrFunctionNS(fullname, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0, value1 = value(this);
    if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
    value0 = this.getAttributeNS(fullname.space, fullname.local);
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["namespace"])(name), i = fullname === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["i" /* interpolateTransformSvg */] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return this.attrTween(name, typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "attr." + name, value))
      : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname)
      : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value + ""));
});


/***/ }),
/* 373 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function attrTweenNS(fullname, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttributeNS(fullname.space, fullname.local, i(t));
    };
  }
  tween._value = value;
  return tween;
}

function attrTween(name, value) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.setAttribute(name, i(t));
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var key = "attr." + name;
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["namespace"])(name);
  return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
});


/***/ }),
/* 374 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(12);


function delayFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = +value.apply(this, arguments);
  };
}

function delayConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */])(this, id).delay = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? delayFunction
          : delayConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).delay;
});


/***/ }),
/* 375 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(12);


function durationFunction(id, value) {
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = +value.apply(this, arguments);
  };
}

function durationConstant(id, value) {
  return value = +value, function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).duration = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each((typeof value === "function"
          ? durationFunction
          : durationConstant)(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).duration;
});


/***/ }),
/* 376 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(12);


function easeConstant(id, value) {
  if (typeof value !== "function") throw new Error;
  return function() {
    Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */])(this, id).ease = value;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  var id = this._id;

  return arguments.length
      ? this.each(easeConstant(id, value))
      : Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).ease;
});


/***/ }),
/* 377 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(19);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["matcher"])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, this._name, this._id);
});


/***/ }),
/* 378 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(19);


/* harmony default export */ __webpack_exports__["a"] = (function(transition) {
  if (transition._id !== this._id) throw new Error;

  for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](merges, this._parents, this._name, this._id);
});


/***/ }),
/* 379 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__schedule__ = __webpack_require__(12);


function start(name) {
  return (name + "").trim().split(/^|\s+/).every(function(t) {
    var i = t.indexOf(".");
    if (i >= 0) t = t.slice(0, i);
    return !t || t === "start";
  });
}

function onFunction(id, name, listener) {
  var on0, on1, sit = start(name) ? __WEBPACK_IMPORTED_MODULE_0__schedule__["g" /* init */] : __WEBPACK_IMPORTED_MODULE_0__schedule__["h" /* set */];
  return function() {
    var schedule = sit(this, id),
        on = schedule.on;

    // If this node shared a dispatch with the previous node,
    // just assign the updated shared dispatch and we’re done!
    // Otherwise, copy-on-write.
    if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);

    schedule.on = on1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, listener) {
  var id = this._id;

  return arguments.length < 2
      ? Object(__WEBPACK_IMPORTED_MODULE_0__schedule__["f" /* get */])(this.node(), id).on.on(name)
      : this.each(onFunction(id, name, listener));
});


/***/ }),
/* 380 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function removeFunction(id) {
  return function() {
    var parent = this.parentNode;
    for (var i in this.__transition) if (+i !== id) return;
    if (parent) parent.removeChild(this);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.on("end.remove", removeFunction(this._id));
});


/***/ }),
/* 381 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selector"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
        Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(subgroup[i], name, id, i, subgroup, Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id));
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, this._parents, name, id);
});


/***/ }),
/* 382 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule__ = __webpack_require__(12);




/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  var name = this._name,
      id = this._id;

  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_0_d3_selection__["selectorAll"])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        for (var children = select.call(node, node.__data__, i, group), child, inherit = Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["f" /* get */])(node, id), k = 0, l = children.length; k < l; ++k) {
          if (child = children[k]) {
            Object(__WEBPACK_IMPORTED_MODULE_2__schedule__["e" /* default */])(child, name, id, k, children, inherit);
          }
        }
        subgroups.push(children);
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Transition */](subgroups, parents, name, id);
});


/***/ }),
/* 383 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


var Selection = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["selection"].prototype.constructor;

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new Selection(this._groups, this._parents);
});


/***/ }),
/* 384 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_selection__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tween__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__interpolate__ = __webpack_require__(178);





function styleRemove(name, interpolate) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

function styleRemoveEnd(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, interpolate, value1) {
  var value00,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name);
    return value0 === value1 ? null
        : value0 === value00 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value1);
  };
}

function styleFunction(name, interpolate, value) {
  var value00,
      value10,
      interpolate0;
  return function() {
    var value0 = Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name),
        value1 = value(this);
    if (value1 == null) value1 = (this.style.removeProperty(name), Object(__WEBPACK_IMPORTED_MODULE_1_d3_selection__["style"])(this, name));
    return value0 === value1 ? null
        : value0 === value00 && value1 === value10 ? interpolate0
        : interpolate0 = interpolate(value00 = value0, value10 = value1);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var i = (name += "") === "transform" ? __WEBPACK_IMPORTED_MODULE_0_d3_interpolate__["h" /* interpolateTransformCss */] : __WEBPACK_IMPORTED_MODULE_3__interpolate__["a" /* default */];
  return value == null ? this
          .styleTween(name, styleRemove(name, i))
          .on("end.style." + name, styleRemoveEnd(name))
      : this.styleTween(name, typeof value === "function"
          ? styleFunction(name, i, Object(__WEBPACK_IMPORTED_MODULE_2__tween__["b" /* tweenValue */])(this, "style." + name, value))
          : styleConstant(name, i, value + ""), priority);
});


/***/ }),
/* 385 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function styleTween(name, value, priority) {
  function tween() {
    var node = this, i = value.apply(node, arguments);
    return i && function(t) {
      node.style.setProperty(name, i(t), priority);
    };
  }
  tween._value = value;
  return tween;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  var key = "style." + (name += "");
  if (arguments.length < 2) return (key = this.tween(key)) && key._value;
  if (value == null) return this.tween(key, null);
  if (typeof value !== "function") throw new Error;
  return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
});


/***/ }),
/* 386 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tween__ = __webpack_require__(70);


function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var value1 = value(this);
    this.textContent = value1 == null ? "" : value1;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return this.tween("text", typeof value === "function"
      ? textFunction(Object(__WEBPACK_IMPORTED_MODULE_0__tween__["b" /* tweenValue */])(this, "text", value))
      : textConstant(value == null ? "" : value + ""));
});


/***/ }),
/* 387 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schedule__ = __webpack_require__(12);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  var name = this._name,
      id0 = this._id,
      id1 = Object(__WEBPACK_IMPORTED_MODULE_0__index__["c" /* newId */])();

  for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        var inherit = Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["f" /* get */])(node, id0);
        Object(__WEBPACK_IMPORTED_MODULE_1__schedule__["e" /* default */])(node, name, id1, i, group, {
          time: inherit.time + inherit.delay + inherit.duration,
          delay: 0,
          duration: inherit.duration,
          ease: inherit.ease
        });
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Transition */](groups, this._parents, name, id1);
});


/***/ }),
/* 388 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(389);
/* unused harmony reexport easeLinear */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(390);
/* unused harmony reexport easeQuad */
/* unused harmony reexport easeQuadIn */
/* unused harmony reexport easeQuadOut */
/* unused harmony reexport easeQuadInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(391);
/* unused harmony reexport easeCubic */
/* unused harmony reexport easeCubicIn */
/* unused harmony reexport easeCubicOut */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(392);
/* unused harmony reexport easePoly */
/* unused harmony reexport easePolyIn */
/* unused harmony reexport easePolyOut */
/* unused harmony reexport easePolyInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(393);
/* unused harmony reexport easeSin */
/* unused harmony reexport easeSinIn */
/* unused harmony reexport easeSinOut */
/* unused harmony reexport easeSinInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(394);
/* unused harmony reexport easeExp */
/* unused harmony reexport easeExpIn */
/* unused harmony reexport easeExpOut */
/* unused harmony reexport easeExpInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(395);
/* unused harmony reexport easeCircle */
/* unused harmony reexport easeCircleIn */
/* unused harmony reexport easeCircleOut */
/* unused harmony reexport easeCircleInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(396);
/* unused harmony reexport easeBounce */
/* unused harmony reexport easeBounceIn */
/* unused harmony reexport easeBounceOut */
/* unused harmony reexport easeBounceInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(397);
/* unused harmony reexport easeBack */
/* unused harmony reexport easeBackIn */
/* unused harmony reexport easeBackOut */
/* unused harmony reexport easeBackInOut */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(398);
/* unused harmony reexport easeElastic */
/* unused harmony reexport easeElasticIn */
/* unused harmony reexport easeElasticOut */
/* unused harmony reexport easeElasticInOut */





















/***/ }),
/* 389 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export linear */
function linear(t) {
  return +t;
}


/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export quadIn */
/* unused harmony export quadOut */
/* unused harmony export quadInOut */
function quadIn(t) {
  return t * t;
}

function quadOut(t) {
  return t * (2 - t);
}

function quadInOut(t) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}


/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export cubicIn */
/* unused harmony export cubicOut */
/* harmony export (immutable) */ __webpack_exports__["a"] = cubicInOut;
function cubicIn(t) {
  return t * t * t;
}

function cubicOut(t) {
  return --t * t * t + 1;
}

function cubicInOut(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}


/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export polyIn */
/* unused harmony export polyOut */
/* unused harmony export polyInOut */
var exponent = 3;

var polyIn = (function custom(e) {
  e = +e;

  function polyIn(t) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

var polyOut = (function custom(e) {
  e = +e;

  function polyOut(t) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

var polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);


/***/ }),
/* 393 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export sinIn */
/* unused harmony export sinOut */
/* unused harmony export sinInOut */
var pi = Math.PI,
    halfPi = pi / 2;

function sinIn(t) {
  return 1 - Math.cos(t * halfPi);
}

function sinOut(t) {
  return Math.sin(t * halfPi);
}

function sinInOut(t) {
  return (1 - Math.cos(pi * t)) / 2;
}


/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export expIn */
/* unused harmony export expOut */
/* unused harmony export expInOut */
function expIn(t) {
  return Math.pow(2, 10 * t - 10);
}

function expOut(t) {
  return 1 - Math.pow(2, -10 * t);
}

function expInOut(t) {
  return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
}


/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export circleIn */
/* unused harmony export circleOut */
/* unused harmony export circleInOut */
function circleIn(t) {
  return 1 - Math.sqrt(1 - t * t);
}

function circleOut(t) {
  return Math.sqrt(1 - --t * t);
}

function circleInOut(t) {
  return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
}


/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export bounceIn */
/* unused harmony export bounceOut */
/* unused harmony export bounceInOut */
var b1 = 4 / 11,
    b2 = 6 / 11,
    b3 = 8 / 11,
    b4 = 3 / 4,
    b5 = 9 / 11,
    b6 = 10 / 11,
    b7 = 15 / 16,
    b8 = 21 / 22,
    b9 = 63 / 64,
    b0 = 1 / b1 / b1;

function bounceIn(t) {
  return 1 - bounceOut(1 - t);
}

function bounceOut(t) {
  return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
}

function bounceInOut(t) {
  return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
}


/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export backIn */
/* unused harmony export backOut */
/* unused harmony export backInOut */
var overshoot = 1.70158;

var backIn = (function custom(s) {
  s = +s;

  function backIn(t) {
    return t * t * ((s + 1) * t - s);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

var backOut = (function custom(s) {
  s = +s;

  function backOut(t) {
    return --t * t * ((s + 1) * t + s) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

var backInOut = (function custom(s) {
  s = +s;

  function backInOut(t) {
    return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);


/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export elasticIn */
/* unused harmony export elasticOut */
/* unused harmony export elasticInOut */
var tau = 2 * Math.PI,
    amplitude = 1,
    period = 0.3;

var elasticIn = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t) {
    return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function(a) { return custom(a, p * tau); };
  elasticIn.period = function(p) { return custom(a, p); };

  return elasticIn;
})(amplitude, period);

var elasticOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t) {
    return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticOut.period = function(p) { return custom(a, p); };

  return elasticOut;
})(amplitude, period);

var elasticInOut = (function custom(a, p) {
  var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t) {
    return ((t = t * 2 - 1) < 0
        ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p)
        : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
  }

  elasticInOut.amplitude = function(a) { return custom(a, p * tau); };
  elasticInOut.period = function(p) { return custom(a, p); };

  return elasticInOut;
})(amplitude, period);


/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transition_index__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__transition_schedule__ = __webpack_require__(12);



var root = [null];

/* harmony default export */ __webpack_exports__["a"] = (function(node, name) {
  var schedules = node.__transition,
      schedule,
      i;

  if (schedules) {
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).state > __WEBPACK_IMPORTED_MODULE_1__transition_schedule__["c" /* SCHEDULED */] && schedule.name === name) {
        return new __WEBPACK_IMPORTED_MODULE_0__transition_index__["a" /* Transition */]([[node]], root, name, +i);
      }
    }
  }

  return null;
});


/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ZoomEvent;
function ZoomEvent(target, type, transform) {
  this.target = target;
  this.type = type;
  this.transform = transform;
}


/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = nopropagation;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(3);


function nopropagation() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].preventDefault();
  __WEBPACK_IMPORTED_MODULE_0_d3_selection__["event"].stopImmediatePropagation();
});


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cloneDeep = __webpack_require__(180);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _defaultsDeep = __webpack_require__(125);

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

var _reduce = __webpack_require__(105);

var _reduce2 = _interopRequireDefault(_reduce);

var _forEach = __webpack_require__(32);

var _forEach2 = _interopRequireDefault(_forEach);

var _conf = __webpack_require__(419);

var _conf2 = _interopRequireDefault(_conf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = console;

var Layout = function () {
  function Layout(conf, data) {
    var _this = this;

    _classCallCheck(this, Layout);

    if (!data) {
      logger.log(2, 'no layout data', '');
    }

    this.conf = (0, _defaultsDeep2.default)(conf, (0, _cloneDeep2.default)(_conf2.default));
    this.data = data;
    var agg = (0, _reduce2.default)(data, function (aggregator, block) {
      block.offset = aggregator.offset;
      aggregator.blocks[block.id] = {
        label: block.label,
        len: block.len,
        color: block.color,
        offset: aggregator.offset
      };
      aggregator.offset += block.len;
      return aggregator;
    }, { blocks: {}, offset: 0 });
    this.blocks = agg.blocks;
    this.size = agg.offset;

    // thanks to sum of blocks' length, compute start and end angles in radian
    (0, _forEach2.default)(this.data, function (block, index) {
      _this.blocks[block.id].start = block.offset / _this.size * (2 * Math.PI - _this.data.length * _this.conf.gap) + index * _this.conf.gap;

      _this.blocks[block.id].end = (block.offset + block.len) / _this.size * (2 * Math.PI - _this.data.length * _this.conf.gap) + index * _this.conf.gap;

      block.start = block.offset / _this.size * (2 * Math.PI - _this.data.length * _this.conf.gap) + index * _this.conf.gap;

      block.end = (block.offset + block.len) / _this.size * (2 * Math.PI - _this.data.length * _this.conf.gap) + index * _this.conf.gap;
    });
  }

  _createClass(Layout, [{
    key: 'getAngle',
    value: function getAngle(blockId, unit) {
      var position = this.blocks[blockId].start / this.size;
      if (unit === 'deg') {
        return angle * 360;
      }

      if (unit === 'rad') {
        return position * 2 * Math.PI;
      }

      return null;
    }
  }, {
    key: 'summary',
    value: function summary() {
      return (0, _reduce2.default)(this.data, function (summary, block) {
        summary[block.id] = block.len;
        return summary;
      }, {});
    }
  }]);

  return Layout;
}();

exports.default = Layout;

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    keysIn = __webpack_require__(61);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    getSymbols = __webpack_require__(91);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(31),
    getSymbolsIn = __webpack_require__(182);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(148),
    getSymbolsIn = __webpack_require__(182),
    keysIn = __webpack_require__(61);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),
/* 408 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(85),
    cloneDataView = __webpack_require__(410),
    cloneRegExp = __webpack_require__(411),
    cloneSymbol = __webpack_require__(412),
    cloneTypedArray = __webpack_require__(135);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(85);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),
/* 411 */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(414),
    baseUnary = __webpack_require__(60),
    nodeUtil = __webpack_require__(89);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(41),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(416),
    baseUnary = __webpack_require__(60),
    nodeUtil = __webpack_require__(89);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(41),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),
/* 417 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 418 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.reduce` and `_.reduceRight`, without support
 * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} accumulator The initial value.
 * @param {boolean} initAccum Specify using the first or last element of
 *  `collection` as the initial value.
 * @param {Function} eachFunc The function to iterate over `collection`.
 * @returns {*} Returns the accumulated value.
 */
function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
  eachFunc(collection, function(value, index, collection) {
    accumulator = initAccum
      ? (initAccum = false, value)
      : iteratee(accumulator, value, index, collection);
  });
  return accumulator;
}

module.exports = baseReduce;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  innerRadius: 250,
  outerRadius: 300,
  cornerRadius: 0,
  gap: 0.04, // in radian
  opacity: 1,
  labels: {
    position: 'center',
    display: true,
    size: 14,
    color: '#000',
    radialOffset: 20
  },
  ticks: {
    display: true,
    color: 'grey',
    spacing: 10000000,
    labels: true,
    labelSpacing: 10,
    labelSuffix: '',
    labelDenominator: 1,
    labelDisplay0: true,
    labelSize: 10,
    labelColor: '#000',
    labelFont: 'default',
    majorSpacing: 5,
    size: {
      minor: 2,
      major: 5
    }
  },
  onClick: null,
  onMouseOver: null,
  events: {},
  zIndex: 100
};

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _forEach = __webpack_require__(32);

var _forEach2 = _interopRequireDefault(_forEach);

var _sortBy = __webpack_require__(106);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _render = __webpack_require__(426);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render() {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var removeTracks = arguments[1];
  var circos = arguments[2];

  var renderAll = ids.length === 0;

  var svg = circos.svg.attr('width', circos.conf.width).attr('height', circos.conf.height);

  if (removeTracks) {
    (0, _forEach2.default)(circos.tracks, function (track, trackId) {
      svg.select('.' + trackId).remove();
    });
  }

  var translated = svg.select('.all');
  if (translated.empty()) {
    translated = svg.append('g').attr('class', 'all').attr('transform', 'translate(\n          ' + parseInt(circos.conf.width / 2) + ',\n          ' + parseInt(circos.conf.height / 2) + '\n        )');
  }

  (0, _forEach2.default)(circos.tracks, function (track, trackId) {
    if (renderAll || trackId in ids) {
      track.render(circos, translated, trackId);
    }
  });
  if (renderAll || 'layout' in ids) {
    (0, _render2.default)(translated, circos);
  }

  // re-order tracks and layout according to z-index
  var trackContainers = svg.selectAll('.all > g').remove();
  var sortedTrackContainers = (0, _sortBy2.default)(trackContainers._groups[0], function (elt) {
    return elt.getAttribute('z-index');
  });

  svg.select('.all').selectAll('g').data(sortedTrackContainers).enter().append(function (d) {
    return d;
  });

  return circos;
}

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(29),
    isArguments = __webpack_require__(58),
    isArray = __webpack_require__(2);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(40),
    baseIteratee = __webpack_require__(33),
    baseMap = __webpack_require__(158),
    baseSortBy = __webpack_require__(423),
    baseUnary = __webpack_require__(60),
    compareMultiple = __webpack_require__(424),
    identity = __webpack_require__(28);

/**
 * The base implementation of `_.orderBy` without param guards.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
 * @param {string[]} orders The sort orders of `iteratees`.
 * @returns {Array} Returns the new sorted array.
 */
function baseOrderBy(collection, iteratees, orders) {
  var index = -1;
  iteratees = arrayMap(iteratees.length ? iteratees : [identity], baseUnary(baseIteratee));

  var result = baseMap(collection, function(value, key, collection) {
    var criteria = arrayMap(iteratees, function(iteratee) {
      return iteratee(value);
    });
    return { 'criteria': criteria, 'index': ++index, 'value': value };
  });

  return baseSortBy(result, function(object, other) {
    return compareMultiple(object, other, orders);
  });
}

module.exports = baseOrderBy;


/***/ }),
/* 423 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.sortBy` which uses `comparer` to define the
 * sort order of `array` and replaces criteria objects with their corresponding
 * values.
 *
 * @private
 * @param {Array} array The array to sort.
 * @param {Function} comparer The function to define sort order.
 * @returns {Array} Returns `array`.
 */
function baseSortBy(array, comparer) {
  var length = array.length;

  array.sort(comparer);
  while (length--) {
    array[length] = array[length].value;
  }
  return array;
}

module.exports = baseSortBy;


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var compareAscending = __webpack_require__(425);

/**
 * Used by `_.orderBy` to compare multiple properties of a value to another
 * and stable sort them.
 *
 * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
 * specify an order of "desc" for descending or "asc" for ascending sort order
 * of corresponding values.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {boolean[]|string[]} orders The order to sort by for each property.
 * @returns {number} Returns the sort order indicator for `object`.
 */
function compareMultiple(object, other, orders) {
  var index = -1,
      objCriteria = object.criteria,
      othCriteria = other.criteria,
      length = objCriteria.length,
      ordersLength = orders.length;

  while (++index < length) {
    var result = compareAscending(objCriteria[index], othCriteria[index]);
    if (result) {
      if (index >= ordersLength) {
        return result;
      }
      var order = orders[index];
      return result * (order == 'desc' ? -1 : 1);
    }
  }
  // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
  // that causes it, under certain circumstances, to provide the same value for
  // `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
  // for more details.
  //
  // This also ensures a stable sort in V8 and other engines.
  // See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
  return object.index - other.index;
}

module.exports = compareMultiple;


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(34);

/**
 * Compares values to sort them in ascending order.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {number} Returns the sort order indicator for `value`.
 */
function compareAscending(value, other) {
  if (value !== other) {
    var valIsDefined = value !== undefined,
        valIsNull = value === null,
        valIsReflexive = value === value,
        valIsSymbol = isSymbol(value);

    var othIsDefined = other !== undefined,
        othIsNull = other === null,
        othIsReflexive = other === other,
        othIsSymbol = isSymbol(other);

    if ((!othIsNull && !othIsSymbol && !valIsSymbol && value > other) ||
        (valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol) ||
        (valIsNull && othIsDefined && othIsReflexive) ||
        (!valIsDefined && othIsReflexive) ||
        !valIsReflexive) {
      return 1;
    }
    if ((!valIsNull && !valIsSymbol && !othIsSymbol && value < other) ||
        (othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol) ||
        (othIsNull && valIsDefined && valIsReflexive) ||
        (!othIsDefined && valIsReflexive) ||
        !othIsReflexive) {
      return -1;
    }
  }
  return 0;
}

module.exports = compareAscending;


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = renderLayout;

var _d3Shape = __webpack_require__(13);

var _d3Array = __webpack_require__(10);

var _d3Selection = __webpack_require__(3);

function renderLayoutLabels(conf, block) {
  var radius = conf.innerRadius + conf.labels.radialOffset;

  var labelArc = (0, _d3Shape.arc)().innerRadius(radius).outerRadius(radius).startAngle(function (d, i) {
    return d.start;
  }).endAngle(function (d, i) {
    return d.end;
  });

  block.append('path').attr('fill', 'none').attr('stroke', 'none').attr('d', labelArc).attr('id', function (d) {
    return 'arc-label' + d.id;
  });

  var label = block.append('text').style('font-size', '' + conf.labels.size + 'px').attr('text-anchor', 'middle');

  // http://stackoverflow.com/questions/20447106/how-to-center-horizontal-and-vertical-text-along-an-textpath-inside-an-arc-usi
  label.append('textPath').attr('startOffset', '25%').attr('xlink:href', function (d) {
    return '#arc-label' + d.id;
  }).style('fill', conf.labels.color).text(function (d) {
    return d.label;
  });
}

function renderLayoutTicks(conf, layout, instance) {
  // Returns an array of tick angles and labels, given a block.
  function blockTicks(d) {
    var k = (d.end - d.start) / d.len;
    return (0, _d3Array.range)(0, d.len, conf.ticks.spacing).map(function (v, i) {
      return {
        angle: v * k + d.start,
        label: displayLabel(v, i)
      };
    });
  }

  function displayLabel(v, i) {
    if (conf.ticks.labels === false) {
      return null;
    } else if (conf.ticks.labelDisplay0 === false && i === 0) {
      return null;
    } else if (i % conf.ticks.labelSpacing) {
      return null;
    } else {
      return v / conf.ticks.labelDenominator + conf.ticks.labelSuffix;
    }
  }

  var ticks = layout.append('g').selectAll('g').data(instance._layout.data).enter().append('g').selectAll('g').data(blockTicks).enter().append('g').attr('transform', function (d) {
    return 'rotate(' + (d.angle * 180 / Math.PI - 90) + ')' + 'translate(' + conf.outerRadius + ',0)';
  });

  ticks.append('line').attr('x1', 0).attr('y1', 1).attr('x2', function (d, i) {
    if (i % conf.ticks.majorSpacing) {
      return conf.ticks.size.minor;
    } else {
      return conf.ticks.size.major;
    }
  }).attr('y2', 1).style('stroke', conf.ticks.color);

  ticks.append('text').attr('x', 8).attr('dy', '.35em').attr('transform', function (d) {
    return d.angle > Math.PI ? 'rotate(180)translate(-16)' : null;
  }).style('text-anchor', function (d) {
    return d.angle > Math.PI ? 'end' : null;
  }).style('font-size', '' + conf.ticks.labelSize + 'px').style('fill', conf.ticks.labelColor).text(function (d) {
    return d.label;
  });
}

function renderLayout(parentElement, instance) {
  var conf = instance._layout.conf;
  parentElement.select('.cs-layout').remove();

  var layout = parentElement.append('g').attr('class', 'cs-layout').attr('z-index', conf.zIndex).on('click', conf.onClick);

  var block = layout.selectAll('g').data(instance._layout.data).enter().append('g').attr('class', function (d) {
    return d.id;
  }).attr('opacity', conf.opacity);

  Object.keys(conf.events).forEach(function (eventName) {
    block.on(eventName, function (d, i, nodes) {
      conf.events[eventName](d, i, nodes, _d3Selection.event);
    });
  });

  var entry = (0, _d3Shape.arc)().innerRadius(conf.innerRadius).outerRadius(conf.outerRadius).cornerRadius(conf.cornerRadius).startAngle(function (d) {
    return d.start;
  }).endAngle(function (d) {
    return d.end;
  });

  block.append('path').attr('d', entry).attr('fill', function (d) {
    return d.color;
  }).attr('id', function (d) {
    return d.id;
  });

  if (conf.labels.display) {
    renderLayoutLabels(conf, block);
  }

  if (conf.ticks.display) {
    renderLayoutTicks(conf, layout, instance);
  }
}

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(44);




function arcInnerRadius(d) {
  return d.innerRadius;
}

function arcOuterRadius(d) {
  return d.outerRadius;
}

function arcStartAngle(d) {
  return d.startAngle;
}

function arcEndAngle(d) {
  return d.endAngle;
}

function arcPadAngle(d) {
  return d && d.padAngle; // Note: optional!
}

function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
  var x10 = x1 - x0, y10 = y1 - y0,
      x32 = x3 - x2, y32 = y3 - y2,
      t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
  return [x0 + t * x10, y0 + t * y10];
}

// Compute perpendicular offset line of length rc.
// http://mathworld.wolfram.com/Circle-LineIntersection.html
function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
  var x01 = x0 - x1,
      y01 = y0 - y1,
      lo = (cw ? rc : -rc) / Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(x01 * x01 + y01 * y01),
      ox = lo * y01,
      oy = -lo * x01,
      x11 = x0 + ox,
      y11 = y0 + oy,
      x10 = x1 + ox,
      y10 = y1 + oy,
      x00 = (x11 + x10) / 2,
      y00 = (y11 + y10) / 2,
      dx = x10 - x11,
      dy = y10 - y11,
      d2 = dx * dx + dy * dy,
      r = r1 - rc,
      D = x11 * y10 - x10 * y11,
      d = (dy < 0 ? -1 : 1) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["h" /* max */])(0, r * r * d2 - D * D)),
      cx0 = (D * dy - dx * d) / d2,
      cy0 = (-D * dx - dy * d) / d2,
      cx1 = (D * dy + dx * d) / d2,
      cy1 = (-D * dx + dy * d) / d2,
      dx0 = cx0 - x00,
      dy0 = cy0 - y00,
      dx1 = cx1 - x00,
      dy1 = cy1 - y00;

  // Pick the closer of the two intersection points.
  // TODO Is there a faster way to determine which intersection to use?
  if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

  return {
    cx: cx0,
    cy: cy0,
    x01: -ox,
    y01: -oy,
    x11: cx0 * (r1 / r - 1),
    y11: cy0 * (r1 / r - 1)
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var innerRadius = arcInnerRadius,
      outerRadius = arcOuterRadius,
      cornerRadius = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(0),
      padRadius = null,
      startAngle = arcStartAngle,
      endAngle = arcEndAngle,
      padAngle = arcPadAngle,
      context = null;

  function arc() {
    var buffer,
        r,
        r0 = +innerRadius.apply(this, arguments),
        r1 = +outerRadius.apply(this, arguments),
        a0 = startAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        a1 = endAngle.apply(this, arguments) - __WEBPACK_IMPORTED_MODULE_2__math__["g" /* halfPi */],
        da = Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(a1 - a0),
        cw = a1 > a0;

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();

    // Ensure that the outer radius is always larger than the inner radius.
    if (r1 < r0) r = r1, r1 = r0, r0 = r;

    // Is it a point?
    if (!(r1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(0, 0);

    // Or is it a circle or annulus?
    else if (da > __WEBPACK_IMPORTED_MODULE_2__math__["m" /* tau */] - __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
      context.moveTo(r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a0), r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a0));
      context.arc(0, 0, r1, a0, a1, !cw);
      if (r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        context.moveTo(r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a1), r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a1));
        context.arc(0, 0, r0, a1, a0, cw);
      }
    }

    // Or is it a circular or annular sector?
    else {
      var a01 = a0,
          a11 = a1,
          a00 = a0,
          a10 = a1,
          da0 = da,
          da1 = da,
          ap = padAngle.apply(this, arguments) / 2,
          rp = (ap > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) && (padRadius ? +padRadius.apply(this, arguments) : Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(r0 * r0 + r1 * r1)),
          rc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* abs */])(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
          rc0 = rc,
          rc1 = rc,
          t0,
          t1;

      // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
      if (rp > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var p0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap)),
            p1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["c" /* asin */])(rp / r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(ap));
        if ((da0 -= p0 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
        else da0 = 0, a00 = a10 = (a0 + a1) / 2;
        if ((da1 -= p1 * 2) > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
        else da1 = 0, a01 = a11 = (a0 + a1) / 2;
      }

      var x01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a01),
          y01 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a01),
          x10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a10),
          y10 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a10);

      // Apply rounded corners?
      if (rc > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        var x11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a11),
            y11 = r1 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a11),
            x00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a00),
            y00 = r0 * Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a00);

        // Restrict the corner radius according to the sector angle.
        if (da < __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */]) {
          var oc = da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */] ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
              ax = x01 - oc[0],
              ay = y01 - oc[1],
              bx = x11 - oc[0],
              by = y11 - oc[1],
              kc = 1 / Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(Object(__WEBPACK_IMPORTED_MODULE_2__math__["b" /* acos */])((ax * bx + ay * by) / (Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(ax * ax + ay * ay) * Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(bx * bx + by * by))) / 2),
              lc = Object(__WEBPACK_IMPORTED_MODULE_2__math__["l" /* sqrt */])(oc[0] * oc[0] + oc[1] * oc[1]);
          rc0 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r0 - lc) / (kc - 1));
          rc1 = Object(__WEBPACK_IMPORTED_MODULE_2__math__["i" /* min */])(rc, (r1 - lc) / (kc + 1));
        }
      }

      // Is the sector collapsed to a line?
      if (!(da1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.moveTo(x01, y01);

      // Does the sector’s outer ring have rounded corners?
      else if (rc1 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
        t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

        context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
          context.arc(t1.cx, t1.cy, rc1, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the outer ring just a circular arc?
      else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

      // Is there no inner ring, and it’s a circular sector?
      // Or perhaps it’s an annular sector collapsed due to padding?
      if (!(r0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) || !(da0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */])) context.lineTo(x10, y10);

      // Does the sector’s inner ring (or point) have rounded corners?
      else if (rc0 > __WEBPACK_IMPORTED_MODULE_2__math__["f" /* epsilon */]) {
        t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
        t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

        context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

        // Have the corners merged?
        if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);

        // Otherwise, draw the two corners and the ring.
        else {
          context.arc(t0.cx, t0.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y01, t0.x01), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.y11, t0.x11), !cw);
          context.arc(0, 0, r0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t0.cy + t0.y11, t0.cx + t0.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.cy + t1.y11, t1.cx + t1.x11), cw);
          context.arc(t1.cx, t1.cy, rc0, Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y11, t1.x11), Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* atan2 */])(t1.y01, t1.x01), !cw);
        }
      }

      // Or is the inner ring just a circular arc?
      else context.arc(0, 0, r0, a10, a00, cw);
    }

    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  arc.centroid = function() {
    var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
        a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - __WEBPACK_IMPORTED_MODULE_2__math__["j" /* pi */] / 2;
    return [Object(__WEBPACK_IMPORTED_MODULE_2__math__["e" /* cos */])(a) * r, Object(__WEBPACK_IMPORTED_MODULE_2__math__["k" /* sin */])(a) * r];
  };

  arc.innerRadius = function(_) {
    return arguments.length ? (innerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : innerRadius;
  };

  arc.outerRadius = function(_) {
    return arguments.length ? (outerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : outerRadius;
  };

  arc.cornerRadius = function(_) {
    return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : cornerRadius;
  };

  arc.padRadius = function(_) {
    return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padRadius;
  };

  arc.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : startAngle;
  };

  arc.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : endAngle;
  };

  arc.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), arc) : padAngle;
  };

  arc.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), arc) : context;
  };

  return arc;
});


/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var pi = Math.PI,
    tau = 2 * pi,
    epsilon = 1e-6,
    tauEpsilon = tau - epsilon;

function Path() {
  this._x0 = this._y0 = // start of current subpath
  this._x1 = this._y1 = null; // end of current subpath
  this._ = "";
}

function path() {
  return new Path;
}

Path.prototype = path.prototype = {
  constructor: Path,
  moveTo: function(x, y) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y);
  },
  closePath: function() {
    if (this._x1 !== null) {
      this._x1 = this._x0, this._y1 = this._y0;
      this._ += "Z";
    }
  },
  lineTo: function(x, y) {
    this._ += "L" + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  quadraticCurveTo: function(x1, y1, x, y) {
    this._ += "Q" + (+x1) + "," + (+y1) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) {
    this._ += "C" + (+x1) + "," + (+y1) + "," + (+x2) + "," + (+y2) + "," + (this._x1 = +x) + "," + (this._y1 = +y);
  },
  arcTo: function(x1, y1, x2, y2, r) {
    x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
    var x0 = this._x1,
        y0 = this._y1,
        x21 = x2 - x1,
        y21 = y2 - y1,
        x01 = x0 - x1,
        y01 = y0 - y1,
        l01_2 = x01 * x01 + y01 * y01;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x1,y1).
    if (this._x1 === null) {
      this._ += "M" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
    else if (!(l01_2 > epsilon)) {}

    // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
    // Equivalently, is (x1,y1) coincident with (x2,y2)?
    // Or, is the radius zero? Line to (x1,y1).
    else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
      this._ += "L" + (this._x1 = x1) + "," + (this._y1 = y1);
    }

    // Otherwise, draw an arc!
    else {
      var x20 = x2 - x0,
          y20 = y2 - y0,
          l21_2 = x21 * x21 + y21 * y21,
          l20_2 = x20 * x20 + y20 * y20,
          l21 = Math.sqrt(l21_2),
          l01 = Math.sqrt(l01_2),
          l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
          t01 = l / l01,
          t21 = l / l21;

      // If the start tangent is not coincident with (x0,y0), line to.
      if (Math.abs(t01 - 1) > epsilon) {
        this._ += "L" + (x1 + t01 * x01) + "," + (y1 + t01 * y01);
      }

      this._ += "A" + r + "," + r + ",0,0," + (+(y01 * x20 > x01 * y20)) + "," + (this._x1 = x1 + t21 * x21) + "," + (this._y1 = y1 + t21 * y21);
    }
  },
  arc: function(x, y, r, a0, a1, ccw) {
    x = +x, y = +y, r = +r;
    var dx = r * Math.cos(a0),
        dy = r * Math.sin(a0),
        x0 = x + dx,
        y0 = y + dy,
        cw = 1 ^ ccw,
        da = ccw ? a0 - a1 : a1 - a0;

    // Is the radius negative? Error.
    if (r < 0) throw new Error("negative radius: " + r);

    // Is this path empty? Move to (x0,y0).
    if (this._x1 === null) {
      this._ += "M" + x0 + "," + y0;
    }

    // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
    else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
      this._ += "L" + x0 + "," + y0;
    }

    // Is this arc empty? We’re done.
    if (!r) return;

    // Does the angle go the wrong way? Flip the direction.
    if (da < 0) da = da % tau + tau;

    // Is this a complete circle? Draw two arcs to complete the circle.
    if (da > tauEpsilon) {
      this._ += "A" + r + "," + r + ",0,1," + cw + "," + (x - dx) + "," + (y - dy) + "A" + r + "," + r + ",0,1," + cw + "," + (this._x1 = x0) + "," + (this._y1 = y0);
    }

    // Is this arc non-empty? Draw an arc!
    else if (da > epsilon) {
      this._ += "A" + r + "," + r + ",0," + (+(da >= pi)) + "," + cw + "," + (this._x1 = x + r * Math.cos(a1)) + "," + (this._y1 = y + r * Math.sin(a1));
    }
  },
  rect: function(x, y, w, h) {
    this._ += "M" + (this._x0 = this._x1 = +x) + "," + (this._y0 = this._y1 = +y) + "h" + (+w) + "v" + (+h) + "h" + (-w) + "Z";
  },
  toString: function() {
    return this._;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (path);


/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__descending__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__identity__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__math__ = __webpack_require__(44);





/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_2__identity__["a" /* default */],
      sortValues = __WEBPACK_IMPORTED_MODULE_1__descending__["a" /* default */],
      sort = null,
      startAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0),
      endAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */]),
      padAngle = Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(0);

  function pie(data) {
    var i,
        n = data.length,
        j,
        k,
        sum = 0,
        index = new Array(n),
        arcs = new Array(n),
        a0 = +startAngle.apply(this, arguments),
        da = Math.min(__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], Math.max(-__WEBPACK_IMPORTED_MODULE_3__math__["m" /* tau */], endAngle.apply(this, arguments) - a0)),
        a1,
        p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
        pa = p * (da < 0 ? -1 : 1),
        v;

    for (i = 0; i < n; ++i) {
      if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
        sum += v;
      }
    }

    // Optionally sort the arcs by previously-computed values or by data.
    if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
    else if (sort != null) index.sort(function(i, j) { return sort(data[i], data[j]); });

    // Compute the arcs! They are stored in the original data's order.
    for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
      j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
        data: data[j],
        index: i,
        value: v,
        startAngle: a0,
        endAngle: a1,
        padAngle: p
      };
    }

    return arcs;
  }

  pie.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : value;
  };

  pie.sortValues = function(_) {
    return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
  };

  pie.sort = function(_) {
    return arguments.length ? (sort = _, sortValues = null, pie) : sort;
  };

  pie.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : startAngle;
  };

  pie.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : endAngle;
  };

  pie.padAngle = function(_) {
    return arguments.length ? (padAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(+_), pie) : padAngle;
  };

  return pie;
});


/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 431 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(d) {
  return d;
});


/***/ }),
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__curve_radial__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__area__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lineRadial__ = __webpack_require__(185);




/* harmony default export */ __webpack_exports__["a"] = (function() {
  var a = Object(__WEBPACK_IMPORTED_MODULE_1__area__["a" /* default */])().curve(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["a" /* curveRadialLinear */]),
      c = a.curve,
      x0 = a.lineX0,
      x1 = a.lineX1,
      y0 = a.lineY0,
      y1 = a.lineY1;

  a.angle = a.x, delete a.x;
  a.startAngle = a.x0, delete a.x0;
  a.endAngle = a.x1, delete a.x1;
  a.radius = a.y, delete a.y;
  a.innerRadius = a.y0, delete a.y0;
  a.outerRadius = a.y1, delete a.y1;
  a.lineStartAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x0()); }, delete a.lineX0;
  a.lineEndAngle = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(x1()); }, delete a.lineX1;
  a.lineInnerRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y0()); }, delete a.lineY0;
  a.lineOuterRadius = function() { return Object(__WEBPACK_IMPORTED_MODULE_2__lineRadial__["b" /* lineRadial */])(y1()); }, delete a.lineY1;

  a.curve = function(_) {
    return arguments.length ? c(Object(__WEBPACK_IMPORTED_MODULE_0__curve_radial__["b" /* default */])(_)) : c()._curve;
  };

  return a;
});


/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linkHorizontal;
/* harmony export (immutable) */ __webpack_exports__["c"] = linkVertical;
/* harmony export (immutable) */ __webpack_exports__["b"] = linkRadial;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__point__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pointRadial__ = __webpack_require__(186);






function linkSource(d) {
  return d.source;
}

function linkTarget(d) {
  return d.target;
}

function link(curve) {
  var source = linkSource,
      target = linkTarget,
      x = __WEBPACK_IMPORTED_MODULE_3__point__["a" /* x */],
      y = __WEBPACK_IMPORTED_MODULE_3__point__["b" /* y */],
      context = null;

  function link() {
    var buffer, argv = __WEBPACK_IMPORTED_MODULE_1__array__["a" /* slice */].call(arguments), s = source.apply(this, argv), t = target.apply(this, argv);
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    curve(context, +x.apply(this, (argv[0] = s, argv)), +y.apply(this, argv), +x.apply(this, (argv[0] = t, argv)), +y.apply(this, argv));
    if (buffer) return context = null, buffer + "" || null;
  }

  link.source = function(_) {
    return arguments.length ? (source = _, link) : source;
  };

  link.target = function(_) {
    return arguments.length ? (target = _, link) : target;
  };

  link.x = function(_) {
    return arguments.length ? (x = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : x;
  };

  link.y = function(_) {
    return arguments.length ? (y = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(+_), link) : y;
  };

  link.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), link) : context;
  };

  return link;
}

function curveHorizontal(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0 = (x0 + x1) / 2, y0, x0, y1, x1, y1);
}

function curveVertical(context, x0, y0, x1, y1) {
  context.moveTo(x0, y0);
  context.bezierCurveTo(x0, y0 = (y0 + y1) / 2, x1, y0, x1, y1);
}

function curveRadial(context, x0, y0, x1, y1) {
  var p0 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0),
      p1 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x0, y0 = (y0 + y1) / 2),
      p2 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y0),
      p3 = Object(__WEBPACK_IMPORTED_MODULE_4__pointRadial__["a" /* default */])(x1, y1);
  context.moveTo(p0[0], p0[1]);
  context.bezierCurveTo(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1]);
}

function linkHorizontal() {
  return link(curveHorizontal);
}

function linkVertical() {
  return link(curveVertical);
}

function linkRadial() {
  var l = link(curveRadial);
  l.angle = l.x, delete l.x;
  l.radius = l.y, delete l.y;
  return l;
}


/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return symbols; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_path__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__symbol_circle__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__symbol_cross__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__symbol_star__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__symbol_square__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__symbol_wye__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constant__ = __webpack_require__(25);










var symbols = [
  __WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_2__symbol_cross__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_3__symbol_diamond__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_5__symbol_square__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_4__symbol_star__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_6__symbol_triangle__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_7__symbol_wye__["a" /* default */]
];

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var type = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__symbol_circle__["a" /* default */]),
      size = Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(64),
      context = null;

  function symbol() {
    var buffer;
    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_0_d3_path__["a" /* path */])();
    type.apply(this, arguments).draw(context, +size.apply(this, arguments));
    if (buffer) return context = null, buffer + "" || null;
  }

  symbol.type = function(_) {
    return arguments.length ? (type = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(_), symbol) : type;
  };

  symbol.size = function(_) {
    return arguments.length ? (size = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_8__constant__["a" /* default */])(+_), symbol) : size;
  };

  symbol.context = function(_) {
    return arguments.length ? (context = _ == null ? null : _, symbol) : context;
  };

  return symbol;
});


/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(73);



function BasisClosed(context) {
  this._context = context;
}

BasisClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
        this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2);
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
      case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
      case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
      default: Object(__WEBPACK_IMPORTED_MODULE_1__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisClosed(context);
});


/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(73);


function BasisOpen(context) {
  this._context = context;
}

BasisOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_0__basis__["c" /* point */])(this, x, y); break;
    }
    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new BasisOpen(context);
});


/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(73);


function Bundle(context, beta) {
  this._basis = new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context);
  this._beta = beta;
}

Bundle.prototype = {
  lineStart: function() {
    this._x = [];
    this._y = [];
    this._basis.lineStart();
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        j = x.length - 1;

    if (j > 0) {
      var x0 = x[0],
          y0 = y[0],
          dx = x[j] - x0,
          dy = y[j] - y0,
          i = -1,
          t;

      while (++i <= j) {
        t = i / j;
        this._basis.point(
          this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
          this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
        );
      }
    }

    this._x = this._y = null;
    this._basis.lineEnd();
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(beta) {

  function bundle(context) {
    return beta === 1 ? new __WEBPACK_IMPORTED_MODULE_0__basis__["a" /* Basis */](context) : new Bundle(context, beta);
  }

  bundle.beta = function(beta) {
    return custom(+beta);
  };

  return bundle;
})(0.85));


/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__noop__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__catmullRom__ = __webpack_require__(110);




function CatmullRomClosed(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_1__noop__["a" /* default */],
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
    this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3);
        this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3);
        this.point(this._x4, this._y4);
        this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
      case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
      case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
      default: Object(__WEBPACK_IMPORTED_MODULE_2__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomClosed(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalClosed__["a" /* CardinalClosed */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__catmullRom__ = __webpack_require__(110);



function CatmullRomOpen(context, alpha) {
  this._context = context;
  this._alpha = alpha;
}

CatmullRomOpen.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 =
    this._y0 = this._y1 = this._y2 = NaN;
    this._l01_a = this._l12_a = this._l23_a =
    this._l01_2a = this._l12_2a = this._l23_2a =
    this._point = 0;
  },
  lineEnd: function() {
    if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;

    if (this._point) {
      var x23 = this._x2 - x,
          y23 = this._y2 - y;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
    }

    switch (this._point) {
      case 0: this._point = 1; break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
      case 3: this._point = 4; // proceed
      default: Object(__WEBPACK_IMPORTED_MODULE_1__catmullRom__["b" /* point */])(this, x, y); break;
    }

    this._l01_a = this._l12_a, this._l12_a = this._l23_a;
    this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
    this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((function custom(alpha) {

  function catmullRom(context) {
    return alpha ? new CatmullRomOpen(context, alpha) : new __WEBPACK_IMPORTED_MODULE_0__cardinalOpen__["a" /* CardinalOpen */](context, 0);
  }

  catmullRom.alpha = function(alpha) {
    return custom(+alpha);
  };

  return catmullRom;
})(0.5));


/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__noop__ = __webpack_require__(72);


function LinearClosed(context) {
  this._context = context;
}

LinearClosed.prototype = {
  areaStart: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  areaEnd: __WEBPACK_IMPORTED_MODULE_0__noop__["a" /* default */],
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    if (this._point) this._context.closePath();
  },
  point: function(x, y) {
    x = +x, y = +y;
    if (this._point) this._context.lineTo(x, y);
    else this._point = 1, this._context.moveTo(x, y);
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new LinearClosed(context);
});


/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = monotoneX;
/* harmony export (immutable) */ __webpack_exports__["b"] = monotoneY;
function sign(x) {
  return x < 0 ? -1 : 1;
}

// Calculate the slopes of the tangents (Hermite-type interpolation) based on
// the following paper: Steffen, M. 1990. A Simple Method for Monotonic
// Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
// NOV(II), P. 443, 1990.
function slope3(that, x2, y2) {
  var h0 = that._x1 - that._x0,
      h1 = x2 - that._x1,
      s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
      s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
      p = (s0 * h1 + s1 * h0) / (h0 + h1);
  return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
}

// Calculate a one-sided slope.
function slope2(that, t) {
  var h = that._x1 - that._x0;
  return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
}

// According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
// "you can express cubic Hermite interpolation in terms of cubic Bézier curves
// with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
function point(that, t0, t1) {
  var x0 = that._x0,
      y0 = that._y0,
      x1 = that._x1,
      y1 = that._y1,
      dx = (x1 - x0) / 3;
  that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
}

function MonotoneX(context) {
  this._context = context;
}

MonotoneX.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 =
    this._y0 = this._y1 =
    this._t0 = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2: this._context.lineTo(this._x1, this._y1); break;
      case 3: point(this, this._t0, slope2(this, this._t0)); break;
    }
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    this._line = 1 - this._line;
  },
  point: function(x, y) {
    var t1 = NaN;

    x = +x, y = +y;
    if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; break;
      case 2: this._point = 3; point(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
      default: point(this, this._t0, t1 = slope3(this, x, y)); break;
    }

    this._x0 = this._x1, this._x1 = x;
    this._y0 = this._y1, this._y1 = y;
    this._t0 = t1;
  }
}

function MonotoneY(context) {
  this._context = new ReflectContext(context);
}

(MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
  MonotoneX.prototype.point.call(this, y, x);
};

function ReflectContext(context) {
  this._context = context;
}

ReflectContext.prototype = {
  moveTo: function(x, y) { this._context.moveTo(y, x); },
  closePath: function() { this._context.closePath(); },
  lineTo: function(x, y) { this._context.lineTo(y, x); },
  bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
};

function monotoneX(context) {
  return new MonotoneX(context);
}

function monotoneY(context) {
  return new MonotoneY(context);
}


/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function Natural(context) {
  this._context = context;
}

Natural.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [];
    this._y = [];
  },
  lineEnd: function() {
    var x = this._x,
        y = this._y,
        n = x.length;

    if (n) {
      this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
      if (n === 2) {
        this._context.lineTo(x[1], y[1]);
      } else {
        var px = controlPoints(x),
            py = controlPoints(y);
        for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
          this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
        }
      }
    }

    if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
    this._line = 1 - this._line;
    this._x = this._y = null;
  },
  point: function(x, y) {
    this._x.push(+x);
    this._y.push(+y);
  }
};

// See https://www.particleincell.com/2012/bezier-splines/ for derivation.
function controlPoints(x) {
  var i,
      n = x.length - 1,
      m,
      a = new Array(n),
      b = new Array(n),
      r = new Array(n);
  a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
  for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
  a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
  for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
  a[n - 1] = r[n - 1] / b[n - 1];
  for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
  b[n - 1] = (x[n] + a[n - 1]) / 2;
  for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
  return [a, b];
}

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Natural(context);
});


/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = stepBefore;
/* harmony export (immutable) */ __webpack_exports__["b"] = stepAfter;
function Step(context, t) {
  this._context = context;
  this._t = t;
}

Step.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN;
    this._point = 0;
  },
  lineEnd: function() {
    if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
    if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
    if (this._line >= 0) this._t = 1 - this._t, this._line = 1 - this._line;
  },
  point: function(x, y) {
    x = +x, y = +y;
    switch (this._point) {
      case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
      case 1: this._point = 2; // proceed
      default: {
        if (this._t <= 0) {
          this._context.lineTo(this._x, y);
          this._context.lineTo(x, y);
        } else {
          var x1 = this._x * (1 - this._t) + x * this._t;
          this._context.lineTo(x1, this._y);
          this._context.lineTo(x1, y);
        }
        break;
      }
    }
    this._x = x, this._y = y;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (function(context) {
  return new Step(context, 0.5);
});

function stepBefore(context) {
  return new Step(context, 0);
}

function stepAfter(context) {
  return new Step(context, 1);
}


/***/ }),
/* 444 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offset_none__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_none__ = __webpack_require__(46);





function stackValue(d, key) {
  return d[key];
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var keys = Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])([]),
      order = __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */],
      offset = __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */],
      value = stackValue;

  function stack(data) {
    var kz = keys.apply(this, arguments),
        i,
        m = data.length,
        n = kz.length,
        sz = new Array(n),
        oz;

    for (i = 0; i < n; ++i) {
      for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
        si[j] = sij = [0, +value(data[j], ki, j, data)];
        sij.data = data[j];
      }
      si.key = ki;
    }

    for (i = 0, oz = order(sz); i < n; ++i) {
      sz[oz[i]].index = i;
    }

    offset(sz, oz);
    return sz;
  }

  stack.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : keys;
  };

  stack.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), stack) : value;
  };

  stack.order = function(_) {
    return arguments.length ? (order = _ == null ? __WEBPACK_IMPORTED_MODULE_3__order_none__["a" /* default */] : typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(_)), stack) : order;
  };

  stack.offset = function(_) {
    return arguments.length ? (offset = _ == null ? __WEBPACK_IMPORTED_MODULE_2__offset_none__["a" /* default */] : _, stack) : offset;
  };

  return stack;
});


/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
    for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
    if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 1)) return;
  for (var i, j = 0, d, dy, yp, yn, n, m = series[order[0]].length; j < m; ++j) {
    for (yp = yn = 0, i = 0; i < n; ++i) {
      if ((dy = (d = series[order[i]][j])[1] - d[0]) >= 0) {
        d[0] = yp, d[1] = yp += dy;
      } else if (dy < 0) {
        d[1] = yn, d[0] = yn += dy;
      } else {
        d[0] = yp;
      }
    }
  }
});


/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0)) return;
  for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
    for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
    s0[j][1] += s0[j][0] = -y / 2;
  }
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(45);


/* harmony default export */ __webpack_exports__["a"] = (function(series, order) {
  if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
  for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
    for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
      var si = series[order[i]],
          sij0 = si[j][1] || 0,
          sij1 = si[j - 1][1] || 0,
          s3 = (sij0 - sij1) / 2;
      for (var k = 0; k < i; ++k) {
        var sk = series[order[k]],
            skj0 = sk[j][1] || 0,
            skj1 = sk[j - 1][1] || 0;
        s3 += skj0 - skj1;
      }
      s1 += sij0, s2 += s3 * sij0;
    }
    s0[j - 1][1] += s0[j - 1][0] = y;
    if (s1) y -= s2 / s1;
  }
  s0[j - 1][1] += s0[j - 1][0] = y;
  Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series, order);
});


/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(111);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */])(series).reverse();
});


/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(111);



/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  var n = series.length,
      i,
      j,
      sums = series.map(__WEBPACK_IMPORTED_MODULE_1__ascending__["b" /* sum */]),
      order = Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).sort(function(a, b) { return sums[b] - sums[a]; }),
      top = 0,
      bottom = 0,
      tops = [],
      bottoms = [];

  for (i = 0; i < n; ++i) {
    j = order[i];
    if (top < bottom) {
      top += sums[j];
      tops.push(j);
    } else {
      bottom += sums[j];
      bottoms.push(j);
    }
  }

  return bottoms.reverse().concat(tops);
});


/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__none__ = __webpack_require__(46);


/* harmony default export */ __webpack_exports__["a"] = (function(series) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__none__["a" /* default */])(series).reverse();
});


/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pairs__ = __webpack_require__(199);


/* harmony default export */ __webpack_exports__["a"] = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = __WEBPACK_IMPORTED_MODULE_0__pairs__["b" /* pair */];

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});


/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bisect__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__extent__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__identity__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__range__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ticks__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__ = __webpack_require__(206);









/* harmony default export */ __webpack_exports__["a"] = (function() {
  var value = __WEBPACK_IMPORTED_MODULE_4__identity__["a" /* default */],
      domain = __WEBPACK_IMPORTED_MODULE_3__extent__["a" /* default */],
      threshold = __WEBPACK_IMPORTED_MODULE_7__threshold_sturges__["a" /* default */];

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = Object(__WEBPACK_IMPORTED_MODULE_6__ticks__["c" /* tickStep */])(x0, x1, tz);
      tz = Object(__WEBPACK_IMPORTED_MODULE_5__range__["a" /* default */])(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[Object(__WEBPACK_IMPORTED_MODULE_1__bisect__["c" /* default */])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__array__["b" /* slice */].call(_)) : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ascending__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quantile__ = __webpack_require__(112);





/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  values = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(values, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]).sort(__WEBPACK_IMPORTED_MODULE_1__ascending__["a" /* default */]);
  return Math.ceil((max - min) / (2 * (Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.75) - Object(__WEBPACK_IMPORTED_MODULE_3__quantile__["a" /* default */])(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__deviation__ = __webpack_require__(200);


/* harmony default export */ __webpack_exports__["a"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(__WEBPACK_IMPORTED_MODULE_0__deviation__["a" /* default */])(values) * Math.pow(values.length, -1 / 3)));
});


/***/ }),
/* 459 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});


/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(47);


/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});


/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__number__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quantile__ = __webpack_require__(112);




/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = Object(__WEBPACK_IMPORTED_MODULE_1__number__["a" /* default */])(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return Object(__WEBPACK_IMPORTED_MODULE_2__quantile__["a" /* default */])(numbers.sort(__WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */]), 0.5);
});


/***/ }),
/* 462 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});


/***/ }),
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});


/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ascending__ = __webpack_require__(36);


/* harmony default export */ __webpack_exports__["a"] = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = __WEBPACK_IMPORTED_MODULE_0__ascending__["a" /* default */];

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});


/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});


/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});


/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__transpose__ = __webpack_require__(208);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__transpose__["a" /* default */])(arguments);
});


/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _forEach = __webpack_require__(32);

var _forEach2 = _interopRequireDefault(_forEach);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _configs = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  style: {
    value: {},
    iteratee: true
  },
  color: {
    value: 'black',
    iteratee: true
  },
  backgrounds: {
    value: [],
    iteratee: false
  }
}, _configs.common, _configs.radial);

var Text = function (_Track) {
  _inherits(Text, _Track);

  function Text(instance, conf, data) {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, (Text.__proto__ || Object.getPrototypeOf(Text)).call(this, instance, conf, defaultConf, data, _dataParser.parsePositionTextData));
  }

  _createClass(Text, [{
    key: 'renderDatum',
    value: function renderDatum(parentElement, conf, layout) {
      var _this2 = this;

      var text = parentElement.selectAll('g').data(function (d) {
        return d.values.map(function (item) {
          item._angle = _this2.theta(item.position, layout.blocks[item.block_id]) * 360 / (2 * Math.PI) - 90;
          item._anchor = item._angle > 90 ? 'end' : 'start';
          item._rotate = item._angle > 90 ? 180 : 0;
          return item;
        });
      }).enter().append('g').append('text').text(function (d) {
        return d.value;
      }).attr('transform', function (d) {
        return '\n          rotate(' + d._angle + ')\n          translate(' + conf.innerRadius + ', 0)\n          rotate(' + d._rotate + ')\n        ';
      }).attr('text-anchor', function (d) {
        return d._anchor;
      });
      (0, _forEach2.default)(conf.style, function (value, key) {
        text.style(key, value);
      });
      return text;
    }
  }]);

  return Text;
}(_Track3.default);

exports.default = Text;

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(470);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(472)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(471)(false);
// imports


// module
exports.push([module.i, "div.circos-tooltip {\r\n  position: absolute;\r\n  text-align: center;\r\n  padding: 5px 10px;\r\n  background: #111111;\r\n  color: white;\r\n  border: 0px;\r\n  pointer-events: none;\r\n  z-index: 1000;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 471 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(473);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 473 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getConf = undefined;

var _cloneDeep = __webpack_require__(180);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _forEach = __webpack_require__(32);

var _forEach2 = _interopRequireDefault(_forEach);

var _isFunction = __webpack_require__(24);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _utils = __webpack_require__(210);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var buildConf = function buildConf() {
  var userConf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var defaultConf = arguments[1];

  var conf = {};
  (0, _forEach2.default)(defaultConf, function (item, key) {
    // if it's a leaf
    if (item.iteratee !== undefined) {
      if (!item.iteratee) {
        conf[key] = Object.keys(userConf).indexOf(key) > -1 ? userConf[key] : item.value;
      } else if (Object.keys(userConf).indexOf(key) > -1) {
        if ((0, _isFunction2.default)(userConf[key])) {
          conf[key] = userConf[key];
        } else {
          conf[key] = userConf[key];
        }
      } else {
        conf[key] = function () {
          return item.value;
        };
      }
      // else we go deeper
    } else {
      conf[key] = buildConf(userConf[key], item);
    }
  });

  return conf;
};

var computeMinMax = function computeMinMax(conf, meta) {
  return {
    cmin: conf.min === null ? meta.min : conf.min,
    cmax: conf.max === null ? meta.max : conf.max
  };
};

var computeRadius = function computeRadius(conf, instance) {
  if (conf.innerRadius === 0 && conf.outerRadius === 0) {
    var borders = (0, _utils.smartBorders)(conf, instance._layout, instance.tracks);
    return {
      innerRadius: borders.in,
      outerRadius: borders.out
    };
  }
  if (conf.innerRadius <= 1 && conf.outerRadius <= 1) {
    return {
      innerRadius: conf.innerRadius * instance._layout.conf.innerRadius,
      outerRadius: conf.outerRadius * instance._layout.conf.innerRadius
    };
  }
  if (conf.innerRadius <= 10 && conf.outerRadius <= 10) {
    return {
      innerRadius: conf.innerRadius * instance._layout.conf.outerRadius,
      outerRadius: conf.outerRadius * instance._layout.conf.outerRadius
    };
  }
};

var getConf = function getConf(userConf, defaultConf, meta, instance) {
  var conf = buildConf(userConf, (0, _cloneDeep2.default)(defaultConf));
  (0, _assign2.default)(conf, computeMinMax(conf, meta), computeRadius(conf, instance));
  return conf;
};

exports.getConf = getConf;

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(37),
    func = convert('sortBy', __webpack_require__(106));

func.placeholder = __webpack_require__(26);
module.exports = func;


/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

var mapping = __webpack_require__(477),
    fallbackHolder = __webpack_require__(26);

/** Built-in value reference. */
var push = Array.prototype.push;

/**
 * Creates a function, with an arity of `n`, that invokes `func` with the
 * arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} n The arity of the new function.
 * @returns {Function} Returns the new function.
 */
function baseArity(func, n) {
  return n == 2
    ? function(a, b) { return func.apply(undefined, arguments); }
    : function(a) { return func.apply(undefined, arguments); };
}

/**
 * Creates a function that invokes `func`, with up to `n` arguments, ignoring
 * any additional arguments.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @param {number} n The arity cap.
 * @returns {Function} Returns the new function.
 */
function baseAry(func, n) {
  return n == 2
    ? function(a, b) { return func(a, b); }
    : function(a) { return func(a); };
}

/**
 * Creates a clone of `array`.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the cloned array.
 */
function cloneArray(array) {
  var length = array ? array.length : 0,
      result = Array(length);

  while (length--) {
    result[length] = array[length];
  }
  return result;
}

/**
 * Creates a function that clones a given object using the assignment `func`.
 *
 * @private
 * @param {Function} func The assignment function.
 * @returns {Function} Returns the new cloner function.
 */
function createCloner(func) {
  return function(object) {
    return func({}, object);
  };
}

/**
 * A specialized version of `_.spread` which flattens the spread array into
 * the arguments of the invoked `func`.
 *
 * @private
 * @param {Function} func The function to spread arguments over.
 * @param {number} start The start position of the spread.
 * @returns {Function} Returns the new function.
 */
function flatSpread(func, start) {
  return function() {
    var length = arguments.length,
        lastIndex = length - 1,
        args = Array(length);

    while (length--) {
      args[length] = arguments[length];
    }
    var array = args[start],
        otherArgs = args.slice(0, start);

    if (array) {
      push.apply(otherArgs, array);
    }
    if (start != lastIndex) {
      push.apply(otherArgs, args.slice(start + 1));
    }
    return func.apply(this, otherArgs);
  };
}

/**
 * Creates a function that wraps `func` and uses `cloner` to clone the first
 * argument it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} cloner The function to clone arguments.
 * @returns {Function} Returns the new immutable function.
 */
function wrapImmutable(func, cloner) {
  return function() {
    var length = arguments.length;
    if (!length) {
      return;
    }
    var args = Array(length);
    while (length--) {
      args[length] = arguments[length];
    }
    var result = args[0] = cloner.apply(undefined, args);
    func.apply(undefined, args);
    return result;
  };
}

/**
 * The base implementation of `convert` which accepts a `util` object of methods
 * required to perform conversions.
 *
 * @param {Object} util The util object.
 * @param {string} name The name of the function to convert.
 * @param {Function} func The function to convert.
 * @param {Object} [options] The options object.
 * @param {boolean} [options.cap=true] Specify capping iteratee arguments.
 * @param {boolean} [options.curry=true] Specify currying.
 * @param {boolean} [options.fixed=true] Specify fixed arity.
 * @param {boolean} [options.immutable=true] Specify immutable operations.
 * @param {boolean} [options.rearg=true] Specify rearranging arguments.
 * @returns {Function|Object} Returns the converted function or object.
 */
function baseConvert(util, name, func, options) {
  var isLib = typeof name == 'function',
      isObj = name === Object(name);

  if (isObj) {
    options = func;
    func = name;
    name = undefined;
  }
  if (func == null) {
    throw new TypeError;
  }
  options || (options = {});

  var config = {
    'cap': 'cap' in options ? options.cap : true,
    'curry': 'curry' in options ? options.curry : true,
    'fixed': 'fixed' in options ? options.fixed : true,
    'immutable': 'immutable' in options ? options.immutable : true,
    'rearg': 'rearg' in options ? options.rearg : true
  };

  var defaultHolder = isLib ? func : fallbackHolder,
      forceCurry = ('curry' in options) && options.curry,
      forceFixed = ('fixed' in options) && options.fixed,
      forceRearg = ('rearg' in options) && options.rearg,
      pristine = isLib ? func.runInContext() : undefined;

  var helpers = isLib ? func : {
    'ary': util.ary,
    'assign': util.assign,
    'clone': util.clone,
    'curry': util.curry,
    'forEach': util.forEach,
    'isArray': util.isArray,
    'isError': util.isError,
    'isFunction': util.isFunction,
    'isWeakMap': util.isWeakMap,
    'iteratee': util.iteratee,
    'keys': util.keys,
    'rearg': util.rearg,
    'toInteger': util.toInteger,
    'toPath': util.toPath
  };

  var ary = helpers.ary,
      assign = helpers.assign,
      clone = helpers.clone,
      curry = helpers.curry,
      each = helpers.forEach,
      isArray = helpers.isArray,
      isError = helpers.isError,
      isFunction = helpers.isFunction,
      isWeakMap = helpers.isWeakMap,
      keys = helpers.keys,
      rearg = helpers.rearg,
      toInteger = helpers.toInteger,
      toPath = helpers.toPath;

  var aryMethodKeys = keys(mapping.aryMethod);

  var wrappers = {
    'castArray': function(castArray) {
      return function() {
        var value = arguments[0];
        return isArray(value)
          ? castArray(cloneArray(value))
          : castArray.apply(undefined, arguments);
      };
    },
    'iteratee': function(iteratee) {
      return function() {
        var func = arguments[0],
            arity = arguments[1],
            result = iteratee(func, arity),
            length = result.length;

        if (config.cap && typeof arity == 'number') {
          arity = arity > 2 ? (arity - 2) : 1;
          return (length && length <= arity) ? result : baseAry(result, arity);
        }
        return result;
      };
    },
    'mixin': function(mixin) {
      return function(source) {
        var func = this;
        if (!isFunction(func)) {
          return mixin(func, Object(source));
        }
        var pairs = [];
        each(keys(source), function(key) {
          if (isFunction(source[key])) {
            pairs.push([key, func.prototype[key]]);
          }
        });

        mixin(func, Object(source));

        each(pairs, function(pair) {
          var value = pair[1];
          if (isFunction(value)) {
            func.prototype[pair[0]] = value;
          } else {
            delete func.prototype[pair[0]];
          }
        });
        return func;
      };
    },
    'nthArg': function(nthArg) {
      return function(n) {
        var arity = n < 0 ? 1 : (toInteger(n) + 1);
        return curry(nthArg(n), arity);
      };
    },
    'rearg': function(rearg) {
      return function(func, indexes) {
        var arity = indexes ? indexes.length : 0;
        return curry(rearg(func, indexes), arity);
      };
    },
    'runInContext': function(runInContext) {
      return function(context) {
        return baseConvert(util, runInContext(context), options);
      };
    }
  };

  /*--------------------------------------------------------------------------*/

  /**
   * Casts `func` to a function with an arity capped iteratee if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @returns {Function} Returns the cast function.
   */
  function castCap(name, func) {
    if (config.cap) {
      var indexes = mapping.iterateeRearg[name];
      if (indexes) {
        return iterateeRearg(func, indexes);
      }
      var n = !isLib && mapping.iterateeAry[name];
      if (n) {
        return iterateeAry(func, n);
      }
    }
    return func;
  }

  /**
   * Casts `func` to a curried function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castCurry(name, func, n) {
    return (forceCurry || (config.curry && n > 1))
      ? curry(func, n)
      : func;
  }

  /**
   * Casts `func` to a fixed arity function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the cast function.
   */
  function castFixed(name, func, n) {
    if (config.fixed && (forceFixed || !mapping.skipFixed[name])) {
      var data = mapping.methodSpread[name],
          start = data && data.start;

      return start  === undefined ? ary(func, n) : flatSpread(func, start);
    }
    return func;
  }

  /**
   * Casts `func` to an rearged function if needed.
   *
   * @private
   * @param {string} name The name of the function to inspect.
   * @param {Function} func The function to inspect.
   * @param {number} n The arity of `func`.
   * @returns {Function} Returns the cast function.
   */
  function castRearg(name, func, n) {
    return (config.rearg && n > 1 && (forceRearg || !mapping.skipRearg[name]))
      ? rearg(func, mapping.methodRearg[name] || mapping.aryRearg[n])
      : func;
  }

  /**
   * Creates a clone of `object` by `path`.
   *
   * @private
   * @param {Object} object The object to clone.
   * @param {Array|string} path The path to clone by.
   * @returns {Object} Returns the cloned object.
   */
  function cloneByPath(object, path) {
    path = toPath(path);

    var index = -1,
        length = path.length,
        lastIndex = length - 1,
        result = clone(Object(object)),
        nested = result;

    while (nested != null && ++index < length) {
      var key = path[index],
          value = nested[key];

      if (value != null &&
          !(isFunction(value) || isError(value) || isWeakMap(value))) {
        nested[key] = clone(index == lastIndex ? value : Object(value));
      }
      nested = nested[key];
    }
    return result;
  }

  /**
   * Converts `lodash` to an immutable auto-curried iteratee-first data-last
   * version with conversion `options` applied.
   *
   * @param {Object} [options] The options object. See `baseConvert` for more details.
   * @returns {Function} Returns the converted `lodash`.
   */
  function convertLib(options) {
    return _.runInContext.convert(options)(undefined);
  }

  /**
   * Create a converter function for `func` of `name`.
   *
   * @param {string} name The name of the function to convert.
   * @param {Function} func The function to convert.
   * @returns {Function} Returns the new converter function.
   */
  function createConverter(name, func) {
    var realName = mapping.aliasToReal[name] || name,
        methodName = mapping.remap[realName] || realName,
        oldOptions = options;

    return function(options) {
      var newUtil = isLib ? pristine : helpers,
          newFunc = isLib ? pristine[methodName] : func,
          newOptions = assign(assign({}, oldOptions), options);

      return baseConvert(newUtil, realName, newFunc, newOptions);
    };
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee, with up to `n`
   * arguments, ignoring any additional arguments.
   *
   * @private
   * @param {Function} func The function to cap iteratee arguments for.
   * @param {number} n The arity cap.
   * @returns {Function} Returns the new function.
   */
  function iterateeAry(func, n) {
    return overArg(func, function(func) {
      return typeof func == 'function' ? baseAry(func, n) : func;
    });
  }

  /**
   * Creates a function that wraps `func` to invoke its iteratee with arguments
   * arranged according to the specified `indexes` where the argument value at
   * the first index is provided as the first argument, the argument value at
   * the second index is provided as the second argument, and so on.
   *
   * @private
   * @param {Function} func The function to rearrange iteratee arguments for.
   * @param {number[]} indexes The arranged argument indexes.
   * @returns {Function} Returns the new function.
   */
  function iterateeRearg(func, indexes) {
    return overArg(func, function(func) {
      var n = indexes.length;
      return baseArity(rearg(baseAry(func, n), indexes), n);
    });
  }

  /**
   * Creates a function that invokes `func` with its first argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
  function overArg(func, transform) {
    return function() {
      var length = arguments.length;
      if (!length) {
        return func();
      }
      var args = Array(length);
      while (length--) {
        args[length] = arguments[length];
      }
      var index = config.rearg ? 0 : (length - 1);
      args[index] = transform(args[index]);
      return func.apply(undefined, args);
    };
  }

  /**
   * Creates a function that wraps `func` and applys the conversions
   * rules by `name`.
   *
   * @private
   * @param {string} name The name of the function to wrap.
   * @param {Function} func The function to wrap.
   * @returns {Function} Returns the converted function.
   */
  function wrap(name, func, placeholder) {
    var result,
        realName = mapping.aliasToReal[name] || name,
        wrapped = func,
        wrapper = wrappers[realName];

    if (wrapper) {
      wrapped = wrapper(func);
    }
    else if (config.immutable) {
      if (mapping.mutate.array[realName]) {
        wrapped = wrapImmutable(func, cloneArray);
      }
      else if (mapping.mutate.object[realName]) {
        wrapped = wrapImmutable(func, createCloner(func));
      }
      else if (mapping.mutate.set[realName]) {
        wrapped = wrapImmutable(func, cloneByPath);
      }
    }
    each(aryMethodKeys, function(aryKey) {
      each(mapping.aryMethod[aryKey], function(otherName) {
        if (realName == otherName) {
          var data = mapping.methodSpread[realName],
              afterRearg = data && data.afterRearg;

          result = afterRearg
            ? castFixed(realName, castRearg(realName, wrapped, aryKey), aryKey)
            : castRearg(realName, castFixed(realName, wrapped, aryKey), aryKey);

          result = castCap(realName, result);
          result = castCurry(realName, result, aryKey);
          return false;
        }
      });
      return !result;
    });

    result || (result = wrapped);
    if (result == func) {
      result = forceCurry ? curry(result, 1) : function() {
        return func.apply(this, arguments);
      };
    }
    result.convert = createConverter(realName, func);
    result.placeholder = func.placeholder = placeholder;

    return result;
  }

  /*--------------------------------------------------------------------------*/

  if (!isObj) {
    return wrap(name, func, defaultHolder);
  }
  var _ = func;

  // Convert methods by ary cap.
  var pairs = [];
  each(aryMethodKeys, function(aryKey) {
    each(mapping.aryMethod[aryKey], function(key) {
      var func = _[mapping.remap[key] || key];
      if (func) {
        pairs.push([key, wrap(key, func, _)]);
      }
    });
  });

  // Convert remaining methods.
  each(keys(_), function(key) {
    var func = _[key];
    if (typeof func == 'function') {
      var length = pairs.length;
      while (length--) {
        if (pairs[length][0] == key) {
          return;
        }
      }
      func.convert = createConverter(key, func);
      pairs.push([key, func]);
    }
  });

  // Assign to `_` leaving `_.prototype` unchanged to allow chaining.
  each(pairs, function(pair) {
    _[pair[0]] = pair[1];
  });

  _.convert = convertLib;
  _.placeholder = _;

  // Assign aliases.
  each(keys(_), function(key) {
    each(mapping.realToAlias[key] || [], function(alias) {
      _[alias] = _[key];
    });
  });

  return _;
}

module.exports = baseConvert;


/***/ }),
/* 477 */
/***/ (function(module, exports) {

/** Used to map aliases to their real names. */
exports.aliasToReal = {

  // Lodash aliases.
  'each': 'forEach',
  'eachRight': 'forEachRight',
  'entries': 'toPairs',
  'entriesIn': 'toPairsIn',
  'extend': 'assignIn',
  'extendAll': 'assignInAll',
  'extendAllWith': 'assignInAllWith',
  'extendWith': 'assignInWith',
  'first': 'head',

  // Methods that are curried variants of others.
  'conforms': 'conformsTo',
  'matches': 'isMatch',
  'property': 'get',

  // Ramda aliases.
  '__': 'placeholder',
  'F': 'stubFalse',
  'T': 'stubTrue',
  'all': 'every',
  'allPass': 'overEvery',
  'always': 'constant',
  'any': 'some',
  'anyPass': 'overSome',
  'apply': 'spread',
  'assoc': 'set',
  'assocPath': 'set',
  'complement': 'negate',
  'compose': 'flowRight',
  'contains': 'includes',
  'dissoc': 'unset',
  'dissocPath': 'unset',
  'dropLast': 'dropRight',
  'dropLastWhile': 'dropRightWhile',
  'equals': 'isEqual',
  'identical': 'eq',
  'indexBy': 'keyBy',
  'init': 'initial',
  'invertObj': 'invert',
  'juxt': 'over',
  'omitAll': 'omit',
  'nAry': 'ary',
  'path': 'get',
  'pathEq': 'matchesProperty',
  'pathOr': 'getOr',
  'paths': 'at',
  'pickAll': 'pick',
  'pipe': 'flow',
  'pluck': 'map',
  'prop': 'get',
  'propEq': 'matchesProperty',
  'propOr': 'getOr',
  'props': 'at',
  'symmetricDifference': 'xor',
  'symmetricDifferenceBy': 'xorBy',
  'symmetricDifferenceWith': 'xorWith',
  'takeLast': 'takeRight',
  'takeLastWhile': 'takeRightWhile',
  'unapply': 'rest',
  'unnest': 'flatten',
  'useWith': 'overArgs',
  'where': 'conformsTo',
  'whereEq': 'isMatch',
  'zipObj': 'zipObject'
};

/** Used to map ary to method names. */
exports.aryMethod = {
  '1': [
    'assignAll', 'assignInAll', 'attempt', 'castArray', 'ceil', 'create',
    'curry', 'curryRight', 'defaultsAll', 'defaultsDeepAll', 'floor', 'flow',
    'flowRight', 'fromPairs', 'invert', 'iteratee', 'memoize', 'method', 'mergeAll',
    'methodOf', 'mixin', 'nthArg', 'over', 'overEvery', 'overSome','rest', 'reverse',
    'round', 'runInContext', 'spread', 'template', 'trim', 'trimEnd', 'trimStart',
    'uniqueId', 'words', 'zipAll'
  ],
  '2': [
    'add', 'after', 'ary', 'assign', 'assignAllWith', 'assignIn', 'assignInAllWith',
    'at', 'before', 'bind', 'bindAll', 'bindKey', 'chunk', 'cloneDeepWith',
    'cloneWith', 'concat', 'conformsTo', 'countBy', 'curryN', 'curryRightN',
    'debounce', 'defaults', 'defaultsDeep', 'defaultTo', 'delay', 'difference',
    'divide', 'drop', 'dropRight', 'dropRightWhile', 'dropWhile', 'endsWith', 'eq',
    'every', 'filter', 'find', 'findIndex', 'findKey', 'findLast', 'findLastIndex',
    'findLastKey', 'flatMap', 'flatMapDeep', 'flattenDepth', 'forEach',
    'forEachRight', 'forIn', 'forInRight', 'forOwn', 'forOwnRight', 'get',
    'groupBy', 'gt', 'gte', 'has', 'hasIn', 'includes', 'indexOf', 'intersection',
    'invertBy', 'invoke', 'invokeMap', 'isEqual', 'isMatch', 'join', 'keyBy',
    'lastIndexOf', 'lt', 'lte', 'map', 'mapKeys', 'mapValues', 'matchesProperty',
    'maxBy', 'meanBy', 'merge', 'mergeAllWith', 'minBy', 'multiply', 'nth', 'omit',
    'omitBy', 'overArgs', 'pad', 'padEnd', 'padStart', 'parseInt', 'partial',
    'partialRight', 'partition', 'pick', 'pickBy', 'propertyOf', 'pull', 'pullAll',
    'pullAt', 'random', 'range', 'rangeRight', 'rearg', 'reject', 'remove',
    'repeat', 'restFrom', 'result', 'sampleSize', 'some', 'sortBy', 'sortedIndex',
    'sortedIndexOf', 'sortedLastIndex', 'sortedLastIndexOf', 'sortedUniqBy',
    'split', 'spreadFrom', 'startsWith', 'subtract', 'sumBy', 'take', 'takeRight',
    'takeRightWhile', 'takeWhile', 'tap', 'throttle', 'thru', 'times', 'trimChars',
    'trimCharsEnd', 'trimCharsStart', 'truncate', 'union', 'uniqBy', 'uniqWith',
    'unset', 'unzipWith', 'without', 'wrap', 'xor', 'zip', 'zipObject',
    'zipObjectDeep'
  ],
  '3': [
    'assignInWith', 'assignWith', 'clamp', 'differenceBy', 'differenceWith',
    'findFrom', 'findIndexFrom', 'findLastFrom', 'findLastIndexFrom', 'getOr',
    'includesFrom', 'indexOfFrom', 'inRange', 'intersectionBy', 'intersectionWith',
    'invokeArgs', 'invokeArgsMap', 'isEqualWith', 'isMatchWith', 'flatMapDepth',
    'lastIndexOfFrom', 'mergeWith', 'orderBy', 'padChars', 'padCharsEnd',
    'padCharsStart', 'pullAllBy', 'pullAllWith', 'rangeStep', 'rangeStepRight',
    'reduce', 'reduceRight', 'replace', 'set', 'slice', 'sortedIndexBy',
    'sortedLastIndexBy', 'transform', 'unionBy', 'unionWith', 'update', 'xorBy',
    'xorWith', 'zipWith'
  ],
  '4': [
    'fill', 'setWith', 'updateWith'
  ]
};

/** Used to map ary to rearg configs. */
exports.aryRearg = {
  '2': [1, 0],
  '3': [2, 0, 1],
  '4': [3, 2, 0, 1]
};

/** Used to map method names to their iteratee ary. */
exports.iterateeAry = {
  'dropRightWhile': 1,
  'dropWhile': 1,
  'every': 1,
  'filter': 1,
  'find': 1,
  'findFrom': 1,
  'findIndex': 1,
  'findIndexFrom': 1,
  'findKey': 1,
  'findLast': 1,
  'findLastFrom': 1,
  'findLastIndex': 1,
  'findLastIndexFrom': 1,
  'findLastKey': 1,
  'flatMap': 1,
  'flatMapDeep': 1,
  'flatMapDepth': 1,
  'forEach': 1,
  'forEachRight': 1,
  'forIn': 1,
  'forInRight': 1,
  'forOwn': 1,
  'forOwnRight': 1,
  'map': 1,
  'mapKeys': 1,
  'mapValues': 1,
  'partition': 1,
  'reduce': 2,
  'reduceRight': 2,
  'reject': 1,
  'remove': 1,
  'some': 1,
  'takeRightWhile': 1,
  'takeWhile': 1,
  'times': 1,
  'transform': 2
};

/** Used to map method names to iteratee rearg configs. */
exports.iterateeRearg = {
  'mapKeys': [1],
  'reduceRight': [1, 0]
};

/** Used to map method names to rearg configs. */
exports.methodRearg = {
  'assignInAllWith': [1, 0],
  'assignInWith': [1, 2, 0],
  'assignAllWith': [1, 0],
  'assignWith': [1, 2, 0],
  'differenceBy': [1, 2, 0],
  'differenceWith': [1, 2, 0],
  'getOr': [2, 1, 0],
  'intersectionBy': [1, 2, 0],
  'intersectionWith': [1, 2, 0],
  'isEqualWith': [1, 2, 0],
  'isMatchWith': [2, 1, 0],
  'mergeAllWith': [1, 0],
  'mergeWith': [1, 2, 0],
  'padChars': [2, 1, 0],
  'padCharsEnd': [2, 1, 0],
  'padCharsStart': [2, 1, 0],
  'pullAllBy': [2, 1, 0],
  'pullAllWith': [2, 1, 0],
  'rangeStep': [1, 2, 0],
  'rangeStepRight': [1, 2, 0],
  'setWith': [3, 1, 2, 0],
  'sortedIndexBy': [2, 1, 0],
  'sortedLastIndexBy': [2, 1, 0],
  'unionBy': [1, 2, 0],
  'unionWith': [1, 2, 0],
  'updateWith': [3, 1, 2, 0],
  'xorBy': [1, 2, 0],
  'xorWith': [1, 2, 0],
  'zipWith': [1, 2, 0]
};

/** Used to map method names to spread configs. */
exports.methodSpread = {
  'assignAll': { 'start': 0 },
  'assignAllWith': { 'start': 0 },
  'assignInAll': { 'start': 0 },
  'assignInAllWith': { 'start': 0 },
  'defaultsAll': { 'start': 0 },
  'defaultsDeepAll': { 'start': 0 },
  'invokeArgs': { 'start': 2 },
  'invokeArgsMap': { 'start': 2 },
  'mergeAll': { 'start': 0 },
  'mergeAllWith': { 'start': 0 },
  'partial': { 'start': 1 },
  'partialRight': { 'start': 1 },
  'without': { 'start': 1 },
  'zipAll': { 'start': 0 }
};

/** Used to identify methods which mutate arrays or objects. */
exports.mutate = {
  'array': {
    'fill': true,
    'pull': true,
    'pullAll': true,
    'pullAllBy': true,
    'pullAllWith': true,
    'pullAt': true,
    'remove': true,
    'reverse': true
  },
  'object': {
    'assign': true,
    'assignAll': true,
    'assignAllWith': true,
    'assignIn': true,
    'assignInAll': true,
    'assignInAllWith': true,
    'assignInWith': true,
    'assignWith': true,
    'defaults': true,
    'defaultsAll': true,
    'defaultsDeep': true,
    'defaultsDeepAll': true,
    'merge': true,
    'mergeAll': true,
    'mergeAllWith': true,
    'mergeWith': true,
  },
  'set': {
    'set': true,
    'setWith': true,
    'unset': true,
    'update': true,
    'updateWith': true
  }
};

/** Used to map real names to their aliases. */
exports.realToAlias = (function() {
  var hasOwnProperty = Object.prototype.hasOwnProperty,
      object = exports.aliasToReal,
      result = {};

  for (var key in object) {
    var value = object[key];
    if (hasOwnProperty.call(result, value)) {
      result[value].push(key);
    } else {
      result[value] = [key];
    }
  }
  return result;
}());

/** Used to map method names to other names. */
exports.remap = {
  'assignAll': 'assign',
  'assignAllWith': 'assignWith',
  'assignInAll': 'assignIn',
  'assignInAllWith': 'assignInWith',
  'curryN': 'curry',
  'curryRightN': 'curryRight',
  'defaultsAll': 'defaults',
  'defaultsDeepAll': 'defaultsDeep',
  'findFrom': 'find',
  'findIndexFrom': 'findIndex',
  'findLastFrom': 'findLast',
  'findLastIndexFrom': 'findLastIndex',
  'getOr': 'get',
  'includesFrom': 'includes',
  'indexOfFrom': 'indexOf',
  'invokeArgs': 'invoke',
  'invokeArgsMap': 'invokeMap',
  'lastIndexOfFrom': 'lastIndexOf',
  'mergeAll': 'merge',
  'mergeAllWith': 'mergeWith',
  'padChars': 'pad',
  'padCharsEnd': 'padEnd',
  'padCharsStart': 'padStart',
  'propertyOf': 'get',
  'rangeStep': 'range',
  'rangeStepRight': 'rangeRight',
  'restFrom': 'rest',
  'spreadFrom': 'spread',
  'trimChars': 'trim',
  'trimCharsEnd': 'trimEnd',
  'trimCharsStart': 'trimStart',
  'zipAll': 'zip'
};

/** Used to track methods that skip fixing their arity. */
exports.skipFixed = {
  'castArray': true,
  'flow': true,
  'flowRight': true,
  'iteratee': true,
  'mixin': true,
  'rearg': true,
  'runInContext': true
};

/** Used to track methods that skip rearranging arguments. */
exports.skipRearg = {
  'add': true,
  'assign': true,
  'assignIn': true,
  'bind': true,
  'bindKey': true,
  'concat': true,
  'difference': true,
  'divide': true,
  'eq': true,
  'gt': true,
  'gte': true,
  'isEqual': true,
  'lt': true,
  'lte': true,
  'matchesProperty': true,
  'merge': true,
  'multiply': true,
  'overArgs': true,
  'partial': true,
  'partialRight': true,
  'propertyOf': true,
  'random': true,
  'range': true,
  'rangeRight': true,
  'subtract': true,
  'zip': true,
  'zipObject': true,
  'zipObjectDeep': true
};


/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  'ary': __webpack_require__(479),
  'assign': __webpack_require__(181),
  'clone': __webpack_require__(498),
  'curry': __webpack_require__(499),
  'forEach': __webpack_require__(64),
  'isArray': __webpack_require__(2),
  'isError': __webpack_require__(500),
  'isFunction': __webpack_require__(24),
  'isWeakMap': __webpack_require__(501),
  'iteratee': __webpack_require__(502),
  'keys': __webpack_require__(143),
  'rearg': __webpack_require__(503),
  'toInteger': __webpack_require__(119),
  'toPath': __webpack_require__(505)
};


/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(113);

/** Used to compose bitmasks for function metadata. */
var WRAP_ARY_FLAG = 128;

/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */
function ary(func, n, guard) {
  n = guard ? undefined : n;
  n = (func && n == null) ? func.length : n;
  return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
}

module.exports = ary;


/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

var createCtor = __webpack_require__(75),
    root = __webpack_require__(5);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createBind(func, bitmask, thisArg) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return fn.apply(isBind ? thisArg : this, arguments);
  }
  return wrapper;
}

module.exports = createBind;


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(50),
    createCtor = __webpack_require__(75),
    createHybrid = __webpack_require__(213),
    createRecurry = __webpack_require__(216),
    getHolder = __webpack_require__(222),
    replaceHolders = __webpack_require__(118),
    root = __webpack_require__(5);

/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */
function createCurry(func, bitmask, arity) {
  var Ctor = createCtor(func);

  function wrapper() {
    var length = arguments.length,
        args = Array(length),
        index = length,
        placeholder = getHolder(wrapper);

    while (index--) {
      args[index] = arguments[index];
    }
    var holders = (length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder)
      ? []
      : replaceHolders(args, placeholder);

    length -= holders.length;
    if (length < arity) {
      return createRecurry(
        func, bitmask, createHybrid, wrapper.placeholder, undefined,
        args, holders, undefined, undefined, arity - length);
    }
    var fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;
    return apply(fn, this, args);
  }
  return wrapper;
}

module.exports = createCurry;


/***/ }),
/* 482 */
/***/ (function(module, exports) {

/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */
function countHolders(array, placeholder) {
  var length = array.length,
      result = 0;

  while (length--) {
    if (array[length] === placeholder) {
      ++result;
    }
  }
  return result;
}

module.exports = countHolders;


/***/ }),
/* 483 */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),
/* 484 */
/***/ (function(module, exports) {

/** Used to lookup unminified function names. */
var realNames = {};

module.exports = realNames;


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(114),
    LodashWrapper = __webpack_require__(117),
    baseLodash = __webpack_require__(115),
    isArray = __webpack_require__(2),
    isObjectLike = __webpack_require__(6),
    wrapperClone = __webpack_require__(486);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */
function lodash(value) {
  if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
    if (value instanceof LodashWrapper) {
      return value;
    }
    if (hasOwnProperty.call(value, '__wrapped__')) {
      return wrapperClone(value);
    }
  }
  return new LodashWrapper(value);
}

// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;

module.exports = lodash;


/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

var LazyWrapper = __webpack_require__(114),
    LodashWrapper = __webpack_require__(117),
    copyArray = __webpack_require__(30);

/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */
function wrapperClone(wrapper) {
  if (wrapper instanceof LazyWrapper) {
    return wrapper.clone();
  }
  var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
  result.__actions__ = copyArray(wrapper.__actions__);
  result.__index__  = wrapper.__index__;
  result.__values__ = wrapper.__values__;
  return result;
}

module.exports = wrapperClone;


/***/ }),
/* 487 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/,
    reSplitDetails = /,? & /;

/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */
function getWrapDetails(source) {
  var match = source.match(reWrapDetails);
  return match ? match[1].split(reSplitDetails) : [];
}

module.exports = getWrapDetails;


/***/ }),
/* 488 */
/***/ (function(module, exports) {

/** Used to match wrap detail comments. */
var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;

/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */
function insertWrapDetails(source, details) {
  var length = details.length;
  if (!length) {
    return source;
  }
  var lastIndex = length - 1;
  details[lastIndex] = (length > 1 ? '& ' : '') + details[lastIndex];
  details = details.join(length > 2 ? ', ' : ' ');
  return source.replace(reWrapComment, '{\n/* [wrapped with ' + details + '] */\n');
}

module.exports = insertWrapDetails;


/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(64),
    arrayIncludes = __webpack_require__(490);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_FLAG = 8,
    WRAP_CURRY_RIGHT_FLAG = 16,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_PARTIAL_RIGHT_FLAG = 64,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256,
    WRAP_FLIP_FLAG = 512;

/** Used to associate wrap methods with their bit flags. */
var wrapFlags = [
  ['ary', WRAP_ARY_FLAG],
  ['bind', WRAP_BIND_FLAG],
  ['bindKey', WRAP_BIND_KEY_FLAG],
  ['curry', WRAP_CURRY_FLAG],
  ['curryRight', WRAP_CURRY_RIGHT_FLAG],
  ['flip', WRAP_FLIP_FLAG],
  ['partial', WRAP_PARTIAL_FLAG],
  ['partialRight', WRAP_PARTIAL_RIGHT_FLAG],
  ['rearg', WRAP_REARG_FLAG]
];

/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */
function updateWrapDetails(details, bitmask) {
  arrayEach(wrapFlags, function(pair) {
    var value = '_.' + pair[0];
    if ((bitmask & pair[1]) && !arrayIncludes(details, value)) {
      details.push(value);
    }
  });
  return details.sort();
}

module.exports = updateWrapDetails;


/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(221);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),
/* 491 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),
/* 492 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),
/* 493 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

var copyArray = __webpack_require__(30),
    isIndex = __webpack_require__(62);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */
function reorder(array, indexes) {
  var arrLength = array.length,
      length = nativeMin(indexes.length, arrLength),
      oldArray = copyArray(array);

  while (length--) {
    var index = indexes[length];
    array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
  }
  return array;
}

module.exports = reorder;


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(50),
    createCtor = __webpack_require__(75),
    root = __webpack_require__(5);

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

var composeArgs = __webpack_require__(214),
    composeArgsRight = __webpack_require__(215),
    replaceHolders = __webpack_require__(118);

/** Used as the internal argument placeholder. */
var PLACEHOLDER = '__lodash_placeholder__';

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_BIND_KEY_FLAG = 2,
    WRAP_CURRY_BOUND_FLAG = 4,
    WRAP_CURRY_FLAG = 8,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */
function mergeData(data, source) {
  var bitmask = data[1],
      srcBitmask = source[1],
      newBitmask = bitmask | srcBitmask,
      isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);

  var isCombo =
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_CURRY_FLAG)) ||
    ((srcBitmask == WRAP_ARY_FLAG) && (bitmask == WRAP_REARG_FLAG) && (data[7].length <= source[8])) ||
    ((srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG)) && (source[7].length <= source[8]) && (bitmask == WRAP_CURRY_FLAG));

  // Exit early if metadata can't be merged.
  if (!(isCommon || isCombo)) {
    return data;
  }
  // Use source `thisArg` if available.
  if (srcBitmask & WRAP_BIND_FLAG) {
    data[2] = source[2];
    // Set when currying a bound function.
    newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
  }
  // Compose partial arguments.
  var value = source[3];
  if (value) {
    var partials = data[3];
    data[3] = partials ? composeArgs(partials, value, source[4]) : value;
    data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
  }
  // Compose partial right arguments.
  value = source[5];
  if (value) {
    partials = data[5];
    data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
    data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
  }
  // Use source `argPos` if available.
  value = source[7];
  if (value) {
    data[7] = value;
  }
  // Use source `ary` if it's smaller.
  if (srcBitmask & WRAP_ARY_FLAG) {
    data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
  }
  // Use source `arity` if one is not provided.
  if (data[9] == null) {
    data[9] = source[9];
  }
  // Use source `func` and merge bitmasks.
  data[0] = source[0];
  data[1] = newBitmask;

  return data;
}

module.exports = mergeData;


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7),
    isSymbol = __webpack_require__(34);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

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

module.exports = toNumber;


/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(104);

/** Used to compose bitmasks for cloning. */
var CLONE_SYMBOLS_FLAG = 4;

/**
 * Creates a shallow clone of `value`.
 *
 * **Note:** This method is loosely based on the
 * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
 * and supports cloning arrays, array buffers, booleans, date objects, maps,
 * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
 * arrays. The own enumerable properties of `arguments` objects are cloned
 * as plain objects. An empty object is returned for uncloneable values such
 * as error objects, functions, DOM nodes, and WeakMaps.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to clone.
 * @returns {*} Returns the cloned value.
 * @see _.cloneDeep
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var shallow = _.clone(objects);
 * console.log(shallow[0] === objects[0]);
 * // => true
 */
function clone(value) {
  return baseClone(value, CLONE_SYMBOLS_FLAG);
}

module.exports = clone;


/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(113);

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8;

/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */
function curry(func, arity, guard) {
  arity = guard ? undefined : arity;
  var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
  result.placeholder = curry.placeholder;
  return result;
}

// Assign default placeholders.
curry.placeholder = {};

module.exports = curry;


/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isObjectLike = __webpack_require__(6),
    isPlainObject = __webpack_require__(139);

/** `Object#toString` result references. */
var domExcTag = '[object DOMException]',
    errorTag = '[object Error]';

/**
 * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
 * `SyntaxError`, `TypeError`, or `URIError` object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
 * @example
 *
 * _.isError(new Error);
 * // => true
 *
 * _.isError(Error);
 * // => false
 */
function isError(value) {
  if (!isObjectLike(value)) {
    return false;
  }
  var tag = baseGetTag(value);
  return tag == errorTag || tag == domExcTag ||
    (typeof value.message == 'string' && typeof value.name == 'string' && !isPlainObject(value));
}

module.exports = isError;


/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(41),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var weakMapTag = '[object WeakMap]';

/**
 * Checks if `value` is classified as a `WeakMap` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
 * @example
 *
 * _.isWeakMap(new WeakMap);
 * // => true
 *
 * _.isWeakMap(new Map);
 * // => false
 */
function isWeakMap(value) {
  return isObjectLike(value) && getTag(value) == weakMapTag;
}

module.exports = isWeakMap;


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(104),
    baseIteratee = __webpack_require__(33);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1;

/**
 * Creates a function that invokes `func` with the arguments of the created
 * function. If `func` is a property name, the created function returns the
 * property value for a given element. If `func` is an array or object, the
 * created function returns `true` for elements that contain the equivalent
 * source properties, otherwise it returns `false`.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Util
 * @param {*} [func=_.identity] The value to convert to a callback.
 * @returns {Function} Returns the callback.
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
 * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, _.iteratee(['user', 'fred']));
 * // => [{ 'user': 'fred', 'age': 40 }]
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, _.iteratee('user'));
 * // => ['barney', 'fred']
 *
 * // Create custom iteratee shorthands.
 * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
 *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
 *     return func.test(string);
 *   };
 * });
 *
 * _.filter(['abc', 'def'], /ef/);
 * // => ['def']
 */
function iteratee(func) {
  return baseIteratee(typeof func == 'function' ? func : baseClone(func, CLONE_DEEP_FLAG));
}

module.exports = iteratee;


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

var createWrap = __webpack_require__(113),
    flatRest = __webpack_require__(224);

/** Used to compose bitmasks for function metadata. */
var WRAP_REARG_FLAG = 256;

/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */
var rearg = flatRest(function(func, indexes) {
  return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});

module.exports = rearg;


/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(107);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(40),
    copyArray = __webpack_require__(30),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(34),
    stringToPath = __webpack_require__(156),
    toKey = __webpack_require__(42),
    toString = __webpack_require__(157);

/**
 * Converts `value` to a property path array.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Util
 * @param {*} value The value to convert.
 * @returns {Array} Returns the new property path array.
 * @example
 *
 * _.toPath('a.b.c');
 * // => ['a', 'b', 'c']
 *
 * _.toPath('a[0].b.c');
 * // => ['a', '0', 'b', 'c']
 */
function toPath(value) {
  if (isArray(value)) {
    return arrayMap(value, toKey);
  }
  return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
}

module.exports = toPath;


/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(37),
    func = convert('flow', __webpack_require__(507));

func.placeholder = __webpack_require__(26);
module.exports = func;


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

var createFlow = __webpack_require__(508);

/**
 * Creates a function that returns the result of invoking the given functions
 * with the `this` binding of the created function, where each successive
 * invocation is supplied the return value of the previous.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Util
 * @param {...(Function|Function[])} [funcs] The functions to invoke.
 * @returns {Function} Returns the new composite function.
 * @see _.flowRight
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var addSquare = _.flow([_.add, square]);
 * addSquare(1, 2);
 * // => 9
 */
var flow = createFlow();

module.exports = flow;


/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

var LodashWrapper = __webpack_require__(117),
    flatRest = __webpack_require__(224),
    getData = __webpack_require__(116),
    getFuncName = __webpack_require__(218),
    isArray = __webpack_require__(2),
    isLaziable = __webpack_require__(217);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used to compose bitmasks for function metadata. */
var WRAP_CURRY_FLAG = 8,
    WRAP_PARTIAL_FLAG = 32,
    WRAP_ARY_FLAG = 128,
    WRAP_REARG_FLAG = 256;

/**
 * Creates a `_.flow` or `_.flowRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new flow function.
 */
function createFlow(fromRight) {
  return flatRest(function(funcs) {
    var length = funcs.length,
        index = length,
        prereq = LodashWrapper.prototype.thru;

    if (fromRight) {
      funcs.reverse();
    }
    while (index--) {
      var func = funcs[index];
      if (typeof func != 'function') {
        throw new TypeError(FUNC_ERROR_TEXT);
      }
      if (prereq && !wrapper && getFuncName(func) == 'wrapper') {
        var wrapper = new LodashWrapper([], true);
      }
    }
    index = wrapper ? index : length;
    while (++index < length) {
      func = funcs[index];

      var funcName = getFuncName(func),
          data = funcName == 'wrapper' ? getData(func) : undefined;

      if (data && isLaziable(data[0]) &&
            data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) &&
            !data[4].length && data[9] == 1
          ) {
        wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
      } else {
        wrapper = (func.length == 1 && isLaziable(func))
          ? wrapper[funcName]()
          : wrapper.thru(func);
      }
    }
    return function() {
      var args = arguments,
          value = args[0];

      if (wrapper && args.length == 1 && isArray(value)) {
        return wrapper.plant(value).value();
      }
      var index = 0,
          result = length ? funcs[index].apply(this, args) : value;

      while (++index < length) {
        result = funcs[index].call(this, result);
      }
      return result;
    };
  });
}

module.exports = createFlow;


/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(37),
    func = convert('concat', __webpack_require__(510));

func.placeholder = __webpack_require__(26);
module.exports = func;


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(65),
    baseFlatten = __webpack_require__(107),
    copyArray = __webpack_require__(30),
    isArray = __webpack_require__(2);

/**
 * Creates a new array concatenating `array` with any additional arrays
 * and/or values.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to concatenate.
 * @param {...*} [values] The values to concatenate.
 * @returns {Array} Returns the new concatenated array.
 * @example
 *
 * var array = [1];
 * var other = _.concat(array, 2, [3], [[4]]);
 *
 * console.log(other);
 * // => [1, 2, 3, [4]]
 *
 * console.log(array);
 * // => [1]
 */
function concat() {
  var length = arguments.length;
  if (!length) {
    return [];
  }
  var args = Array(length - 1),
      array = arguments[0],
      index = length;

  while (index--) {
    args[index - 1] = arguments[index];
  }
  return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
}

module.exports = concat;


/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(37),
    func = convert('filter', __webpack_require__(512));

func.placeholder = __webpack_require__(26);
module.exports = func;


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(149),
    baseFilter = __webpack_require__(513),
    baseIteratee = __webpack_require__(33),
    isArray = __webpack_require__(2);

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;


/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(39);

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function(value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;


/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(515);


/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(37),
    func = convert('head', __webpack_require__(516), __webpack_require__(517));

func.placeholder = __webpack_require__(26);
module.exports = func;


/***/ }),
/* 516 */
/***/ (function(module, exports) {

/**
 * Gets the first element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias first
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the first element of `array`.
 * @example
 *
 * _.head([1, 2, 3]);
 * // => 1
 *
 * _.head([]);
 * // => undefined
 */
function head(array) {
  return (array && array.length) ? array[0] : undefined;
}

module.exports = head;


/***/ }),
/* 517 */
/***/ (function(module, exports) {

module.exports = {
  'cap': false,
  'curry': false,
  'fixed': false,
  'immutable': false,
  'rearg': false
};


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

var convert = __webpack_require__(37),
    func = convert('reverse', __webpack_require__(519));

func.placeholder = __webpack_require__(26);
module.exports = func;


/***/ }),
/* 519 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeReverse = arrayProto.reverse;

/**
 * Reverses `array` so that the first element becomes the last, the second
 * element becomes the second to last, and so on.
 *
 * **Note:** This method mutates `array` and is based on
 * [`Array#reverse`](https://mdn.io/Array/reverse).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Array
 * @param {Array} array The array to modify.
 * @returns {Array} Returns `array`.
 * @example
 *
 * var array = [1, 2, 3];
 *
 * _.reverse(array);
 * // => [3, 2, 1]
 *
 * console.log(array);
 * // => [3, 2, 1]
 */
function reverse(array) {
  return array == null ? array : nativeReverse.call(array);
}

module.exports = reverse;


/***/ }),
/* 520 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = band;
/* harmony export (immutable) */ __webpack_exports__["b"] = point;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ordinal__ = __webpack_require__(226);



function band() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_1__ordinal__["a" /* default */])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      range = [0, 1],
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = range[1] < range[0],
        start = range[reverse - 0],
        stop = range[1 - reverse];
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? (range = [+_[0], +_[1]], rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = [+_[0], +_[1]], round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.max(0, Math.min(1, _)), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = Math.max(0, Math.min(1, _)), rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band()
        .domain(domain())
        .range(range)
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return rescale();
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band().paddingInner(1));
}


/***/ }),
/* 521 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(120);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var keys = [],
      sortKeys = [],
      sortValues,
      rollup,
      nest;

  function apply(array, depth, createResult, setResult) {
    if (depth >= keys.length) {
      if (sortValues != null) array.sort(sortValues);
      return rollup != null ? rollup(array) : array;
    }

    var i = -1,
        n = array.length,
        key = keys[depth++],
        keyValue,
        value,
        valuesByKey = Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])(),
        values,
        result = createResult();

    while (++i < n) {
      if (values = valuesByKey.get(keyValue = key(value = array[i]) + "")) {
        values.push(value);
      } else {
        valuesByKey.set(keyValue, [value]);
      }
    }

    valuesByKey.each(function(values, key) {
      setResult(result, key, apply(values, depth, createResult, setResult));
    });

    return result;
  }

  function entries(map, depth) {
    if (++depth > keys.length) return map;
    var array, sortKey = sortKeys[depth - 1];
    if (rollup != null && depth >= keys.length) array = map.entries();
    else array = [], map.each(function(v, k) { array.push({key: k, values: entries(v, depth)}); });
    return sortKey != null ? array.sort(function(a, b) { return sortKey(a.key, b.key); }) : array;
  }

  return nest = {
    object: function(array) { return apply(array, 0, createObject, setObject); },
    map: function(array) { return apply(array, 0, createMap, setMap); },
    entries: function(array) { return entries(apply(array, 0, createMap, setMap), 0); },
    key: function(d) { keys.push(d); return nest; },
    sortKeys: function(order) { sortKeys[keys.length - 1] = order; return nest; },
    sortValues: function(order) { sortValues = order; return nest; },
    rollup: function(f) { rollup = f; return nest; }
  };
});

function createObject() {
  return {};
}

function setObject(object, key, value) {
  object[key] = value;
}

function createMap() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */])();
}

function setMap(map, key, value) {
  map.set(key, value);
}


/***/ }),
/* 522 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map__ = __webpack_require__(120);


function Set() {}

var proto = __WEBPACK_IMPORTED_MODULE_0__map__["a" /* default */].prototype;

Set.prototype = set.prototype = {
  constructor: Set,
  has: proto.has,
  add: function(value) {
    value += "";
    this[__WEBPACK_IMPORTED_MODULE_0__map__["b" /* prefix */] + value] = value;
    return this;
  },
  remove: proto.remove,
  clear: proto.clear,
  values: proto.keys,
  size: proto.size,
  empty: proto.empty,
  each: proto.each
};

function set(object, f) {
  var set = new Set;

  // Copy constructor.
  if (object instanceof Set) object.each(function(value) { set.add(value); });

  // Otherwise, assume it’s an array.
  else if (object) {
    var i = -1, n = object.length;
    if (f == null) while (++i < n) set.add(object[i]);
    else while (++i < n) set.add(f(object[i], i, object));
  }

  return set;
}

/* harmony default export */ __webpack_exports__["a"] = (set);


/***/ }),
/* 523 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var keys = [];
  for (var key in map) keys.push(key);
  return keys;
});


/***/ }),
/* 524 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var values = [];
  for (var key in map) values.push(map[key]);
  return values;
});


/***/ }),
/* 525 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(map) {
  var entries = [];
  for (var key in map) entries.push({key: key, value: map[key]});
  return entries;
});


/***/ }),
/* 526 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = identity;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__number__ = __webpack_require__(228);




function identity() {
  var domain = [0, 1];

  function scale(x) {
    return +x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* map */].call(_, __WEBPACK_IMPORTED_MODULE_2__number__["a" /* default */]), scale) : domain.slice();
  };

  scale.copy = function() {
    return identity().domain(domain);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 527 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(229);



/* harmony default export */ __webpack_exports__["a"] = (function(domain, count, specifier) {
  var start = domain[0],
      stop = domain[domain.length - 1],
      step = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["tickStep"])(start, stop, count == null ? 10 : count),
      precision;
  specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["c" /* formatSpecifier */])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["e" /* precisionPrefix */])(step, value))) specifier.precision = precision;
      return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["b" /* formatPrefix */])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["f" /* precisionRound */])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["d" /* precisionFixed */])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
});


/***/ }),
/* 528 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return formatPrefix; });
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__locale__ = __webpack_require__(230);


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});

function defaultLocale(definition) {
  locale = Object(__WEBPACK_IMPORTED_MODULE_0__locale__["a" /* default */])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),
/* 529 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),
/* 530 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),
/* 531 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  x = x.toPrecision(p);

  out: for (var n = x.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (x[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      case "e": break out;
      default: if (i0 > 0) i0 = 0; break;
    }
  }

  return i0 > 0 ? x.slice(0, i0) + x.slice(i1 + 1) : x;
});


/***/ }),
/* 532 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__formatDecimal__ = __webpack_require__(122);


/* harmony default export */ __webpack_exports__["a"] = (function(x, p) {
  var d = Object(__WEBPACK_IMPORTED_MODULE_0__formatDecimal__["a" /* default */])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),
/* 533 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return x;
});


/***/ }),
/* 534 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(77);


/* harmony default export */ __webpack_exports__["a"] = (function(step) {
  return Math.max(0, -Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 535 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(77);


/* harmony default export */ __webpack_exports__["a"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(value) / 3))) * 3 - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(Math.abs(step)));
});


/***/ }),
/* 536 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__exponent__ = __webpack_require__(77);


/* harmony default export */ __webpack_exports__["a"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(max) - Object(__WEBPACK_IMPORTED_MODULE_0__exponent__["a" /* default */])(step)) + 1;
});


/***/ }),
/* 537 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_format__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nice__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__continuous__ = __webpack_require__(76);






function deinterpolate(a, b) {
  return (b = Math.log(b / a))
      ? function(x) { return Math.log(x / a) / b; }
      : Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(b);
}

function reinterpolate(a, b) {
  return a < 0
      ? function(t) { return -Math.pow(-b, t) * Math.pow(-a, 1 - t); }
      : function(t) { return Math.pow(b, t) * Math.pow(a, 1 - t); };
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function log() {
  var scale = Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["b" /* default */])(deinterpolate, reinterpolate).domain([1, 10]),
      domain = scale.domain,
      base = 10,
      logs = logp(10),
      pows = powp(10);

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) logs = reflect(logs), pows = reflect(pows);
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.round(i) - 1, j = Math.round(j) + 1;
      if (u > 0) for (; i < j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i < j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
    } else {
      z = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(__WEBPACK_IMPORTED_MODULE_1_d3_format__["a" /* format */])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(__WEBPACK_IMPORTED_MODULE_3__nice__["a" /* default */])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_4__continuous__["a" /* copy */])(scale, log().base(base));
  };

  return scale;
}


/***/ }),
/* 538 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pow;
/* harmony export (immutable) */ __webpack_exports__["b"] = sqrt;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__linear__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__continuous__ = __webpack_require__(76);




function raise(x, exponent) {
  return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
}

function pow() {
  var exponent = 1,
      scale = Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["b" /* default */])(deinterpolate, reinterpolate),
      domain = scale.domain;

  function deinterpolate(a, b) {
    return (b = raise(b, exponent) - (a = raise(a, exponent)))
        ? function(x) { return (raise(x, exponent) - a) / b; }
        : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(b);
  }

  function reinterpolate(a, b) {
    b = raise(b, exponent) - (a = raise(a, exponent));
    return function(t) { return raise(a + b * t, 1 / exponent); };
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, domain(domain())) : exponent;
  };

  scale.copy = function() {
    return Object(__WEBPACK_IMPORTED_MODULE_2__continuous__["a" /* copy */])(scale, pow().exponent(exponent));
  };

  return Object(__WEBPACK_IMPORTED_MODULE_1__linear__["b" /* linearish */])(scale);
}

function sqrt() {
  return pow().exponent(0.5);
}


/***/ }),
/* 539 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantile;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(27);



function quantile() {
  var domain = [],
      range = [],
      thresholds = [];

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    if (!isNaN(x = +x)) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (var i = 0, n = _.length, d; i < n; ++i) if (d = _[i], d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(__WEBPACK_IMPORTED_MODULE_0_d3_array__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), rescale()) : range.slice();
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 540 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = quantize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__linear__ = __webpack_require__(48);




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1];

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_2__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 541 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = threshold;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__array__ = __webpack_require__(27);



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      n = 1;

  function scale(x) {
    if (x <= x) return range[Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["bisect"])(domain, x, 0, n)];
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = __WEBPACK_IMPORTED_MODULE_1__array__["b" /* slice */].call(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range);
  };

  return scale;
}


/***/ }),
/* 542 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export milliseconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var millisecond = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["a"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),
/* 543 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export seconds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



var second = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["d" /* durationSecond */];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["a"] = (second);
var seconds = second.range;


/***/ }),
/* 544 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export minutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



var minute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setTime(Math.floor(date / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (minute);
var minutes = minute.range;


/***/ }),
/* 545 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export hours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



var hour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  var offset = date.getTimezoneOffset() * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */] % __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  if (offset < 0) offset += __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
  date.setTime(Math.floor((+date - offset) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]) * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */] + offset);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["a"] = (hour);
var hours = hour.range;


/***/ }),
/* 546 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export days */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



var day = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (day);
var days = day.range;


/***/ }),
/* 547 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return monday; });
/* unused harmony export tuesday */
/* unused harmony export wednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return thursday; });
/* unused harmony export friday */
/* unused harmony export saturday */
/* unused harmony export sundays */
/* unused harmony export mondays */
/* unused harmony export tuesdays */
/* unused harmony export wednesdays */
/* unused harmony export thursdays */
/* unused harmony export fridays */
/* unused harmony export saturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



function weekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),
/* 548 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export months */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var month = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (month);
var months = month.range;


/***/ }),
/* 549 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export years */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var year = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (year);
var years = year.range;


/***/ }),
/* 550 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMinutes */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



var utcMinute = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["c" /* durationMinute */];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),
/* 551 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcHours */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



var utcHour = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */]);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["b" /* durationHour */];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["a"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),
/* 552 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcDays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



var utcDay = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["a" /* durationDay */];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["a"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),
/* 553 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return utcMonday; });
/* unused harmony export utcTuesday */
/* unused harmony export utcWednesday */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return utcThursday; });
/* unused harmony export utcFriday */
/* unused harmony export utcSaturday */
/* unused harmony export utcSundays */
/* unused harmony export utcMondays */
/* unused harmony export utcTuesdays */
/* unused harmony export utcWednesdays */
/* unused harmony export utcThursdays */
/* unused harmony export utcFridays */
/* unused harmony export utcSaturdays */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__duration__ = __webpack_require__(15);



function utcWeekday(i) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / __WEBPACK_IMPORTED_MODULE_1__duration__["e" /* durationWeek */];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),
/* 554 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcMonths */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var utcMonth = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["a"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),
/* 555 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export utcYears */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interval__ = __webpack_require__(4);


var utcYear = Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(__WEBPACK_IMPORTED_MODULE_0__interval__["a" /* default */])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),
/* 556 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isoFormat__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__defaultLocale__ = __webpack_require__(124);



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(__WEBPACK_IMPORTED_MODULE_1__defaultLocale__["c" /* utcParse */])(__WEBPACK_IMPORTED_MODULE_0__isoFormat__["a" /* isoSpecifier */]);

/* unused harmony default export */ var _unused_webpack_default_export = (parseIso);


/***/ }),
/* 557 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_time_format__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_d3_time__ = __webpack_require__(123);




/* harmony default export */ __webpack_exports__["a"] = (function() {
  return Object(__WEBPACK_IMPORTED_MODULE_0__time__["a" /* calendar */])(__WEBPACK_IMPORTED_MODULE_2_d3_time__["v" /* utcYear */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["q" /* utcMonth */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["u" /* utcWeek */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["l" /* utcDay */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["m" /* utcHour */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["o" /* utcMinute */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["r" /* utcSecond */], __WEBPACK_IMPORTED_MODULE_2_d3_time__["n" /* utcMillisecond */], __WEBPACK_IMPORTED_MODULE_1_d3_time_format__["b" /* utcFormat */]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]);
});


/***/ }),
/* 558 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 559 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"));


/***/ }),
/* 560 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"));


/***/ }),
/* 561 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(49);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"));


/***/ }),
/* 562 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 563 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var rainbow = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* harmony default export */ __webpack_exports__["b"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  rainbow.h = 360 * t - 100;
  rainbow.s = 1.5 - 1.5 * ts;
  rainbow.l = 0.8 - 0.9 * ts;
  return rainbow + "";
});


/***/ }),
/* 564 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(49);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 565 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sequential;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__linear__ = __webpack_require__(48);


function sequential(interpolator) {
  var x0 = 0,
      x1 = 1,
      clamp = false;

  function scale(x) {
    var t = (x - x0) / (x1 - x0);
    return interpolator(clamp ? Math.max(0, Math.min(1, t)) : t);
  }

  scale.domain = function(_) {
    return arguments.length ? (x0 = +_[0], x1 = +_[1], scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.copy = function() {
    return sequential(interpolator).domain([x0, x1]).clamp(clamp);
  };

  return Object(__WEBPACK_IMPORTED_MODULE_0__linear__["b" /* linearish */])(scale);
}


/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildColorValue = buildColorValue;

var _isFunction = __webpack_require__(24);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _d3Scale = __webpack_require__(225);

var _d3ScaleChromatic = __webpack_require__(567);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var palettes = {
  BrBG: _d3ScaleChromatic.interpolateBrBG,
  PRGn: _d3ScaleChromatic.interpolatePRGn,
  PiYG: _d3ScaleChromatic.interpolatePiYG,
  PuOr: _d3ScaleChromatic.interpolatePuOr,
  RdBu: _d3ScaleChromatic.interpolateRdBu,
  RdGy: _d3ScaleChromatic.interpolateRdGy,
  RdYlBu: _d3ScaleChromatic.interpolateRdYlBu,
  RdYlGn: _d3ScaleChromatic.interpolateRdYlGn,
  Spectral: _d3ScaleChromatic.interpolateSpectral,
  Blues: _d3ScaleChromatic.interpolateBlues,
  Greens: _d3ScaleChromatic.interpolateGreens,
  Greys: _d3ScaleChromatic.interpolateGreys,
  Oranges: _d3ScaleChromatic.interpolateOranges,
  Purples: _d3ScaleChromatic.interpolatePurples,
  Reds: _d3ScaleChromatic.interpolateReds,
  BuGn: _d3ScaleChromatic.interpolateBuGn,
  BuPu: _d3ScaleChromatic.interpolateBuPu,
  GnBu: _d3ScaleChromatic.interpolateGnBu,
  OrRd: _d3ScaleChromatic.interpolateOrRd,
  PuBuGn: _d3ScaleChromatic.interpolatePuBuGn,
  PuBu: _d3ScaleChromatic.interpolatePuBu,
  PuRd: _d3ScaleChromatic.interpolatePuRd,
  RdPu: _d3ScaleChromatic.interpolateRdPu,
  YlGnBu: _d3ScaleChromatic.interpolateYlGnBu,
  YlGn: _d3ScaleChromatic.interpolateYlGn,
  YlOrBr: _d3ScaleChromatic.interpolateYlOrBr,
  YlOrRd: _d3ScaleChromatic.interpolateYlOrRd
};

function buildColorValue(color) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var logScale = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var logScaleBase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : Math.E;

  if ((0, _isFunction2.default)(color)) {
    return color;
  }
  var reverse = color[0] === '-';
  var paletteName = color[0] === '-' ? color.slice(1) : color;
  if (palettes[paletteName]) {
    var scale = buildColorScale(palettes[paletteName], min, max, reverse, logScale, logScaleBase);
    return function (d) {
      return scale(d.value);
    };
  }
  return color;
}

var buildColorScale = function buildColorScale(interpolator, min, max) {
  var reverse = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var logScale = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var logScaleBase = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : Math.E;

  if (logScale && min * max <= 0) {
    console.warn('As log(0) = -\u221E, a log scale domain must be\n      strictly-positive or strictly-negative. logscale ignored');
  }

  if (logScale && min * max > 0) {
    var scale = (0, _d3Scale.scaleLog)().base(logScaleBase).domain(reverse ? [max, min] : [min, max]).range([0, 1]);
    return (0, _d3Scale.scaleSequential)(function (t) {
      return interpolator(scale(t));
    }).domain([0, 1]);
  }
  return (0, _d3Scale.scaleSequential)(interpolator).domain(reverse ? [max, min] : [min, max]);
};

/***/ }),
/* 567 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categorical_category10__ = __webpack_require__(568);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeCategory10", function() { return __WEBPACK_IMPORTED_MODULE_0__categorical_category10__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__categorical_Accent__ = __webpack_require__(569);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeAccent", function() { return __WEBPACK_IMPORTED_MODULE_1__categorical_Accent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categorical_Dark2__ = __webpack_require__(570);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeDark2", function() { return __WEBPACK_IMPORTED_MODULE_2__categorical_Dark2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categorical_Paired__ = __webpack_require__(571);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePaired", function() { return __WEBPACK_IMPORTED_MODULE_3__categorical_Paired__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categorical_Pastel1__ = __webpack_require__(572);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel1", function() { return __WEBPACK_IMPORTED_MODULE_4__categorical_Pastel1__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorical_Pastel2__ = __webpack_require__(573);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePastel2", function() { return __WEBPACK_IMPORTED_MODULE_5__categorical_Pastel2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__categorical_Set1__ = __webpack_require__(574);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet1", function() { return __WEBPACK_IMPORTED_MODULE_6__categorical_Set1__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__categorical_Set2__ = __webpack_require__(575);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet2", function() { return __WEBPACK_IMPORTED_MODULE_7__categorical_Set2__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categorical_Set3__ = __webpack_require__(576);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSet3", function() { return __WEBPACK_IMPORTED_MODULE_8__categorical_Set3__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__diverging_BrBG__ = __webpack_require__(577);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__diverging_BrBG__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBrBG", function() { return __WEBPACK_IMPORTED_MODULE_9__diverging_BrBG__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__diverging_PRGn__ = __webpack_require__(578);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__diverging_PRGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePRGn", function() { return __WEBPACK_IMPORTED_MODULE_10__diverging_PRGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__diverging_PiYG__ = __webpack_require__(579);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__diverging_PiYG__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePiYG", function() { return __WEBPACK_IMPORTED_MODULE_11__diverging_PiYG__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__diverging_PuOr__ = __webpack_require__(580);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__diverging_PuOr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuOr", function() { return __WEBPACK_IMPORTED_MODULE_12__diverging_PuOr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__diverging_RdBu__ = __webpack_require__(581);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__diverging_RdBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdBu", function() { return __WEBPACK_IMPORTED_MODULE_13__diverging_RdBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__diverging_RdGy__ = __webpack_require__(582);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__diverging_RdGy__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdGy", function() { return __WEBPACK_IMPORTED_MODULE_14__diverging_RdGy__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__diverging_RdYlBu__ = __webpack_require__(583);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__diverging_RdYlBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlBu", function() { return __WEBPACK_IMPORTED_MODULE_15__diverging_RdYlBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__diverging_RdYlGn__ = __webpack_require__(584);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__diverging_RdYlGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdYlGn", function() { return __WEBPACK_IMPORTED_MODULE_16__diverging_RdYlGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__diverging_Spectral__ = __webpack_require__(585);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__diverging_Spectral__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeSpectral", function() { return __WEBPACK_IMPORTED_MODULE_17__diverging_Spectral__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__sequential_multi_BuGn__ = __webpack_require__(586);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__sequential_multi_BuGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuGn", function() { return __WEBPACK_IMPORTED_MODULE_18__sequential_multi_BuGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__sequential_multi_BuPu__ = __webpack_require__(587);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__sequential_multi_BuPu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBuPu", function() { return __WEBPACK_IMPORTED_MODULE_19__sequential_multi_BuPu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__sequential_multi_GnBu__ = __webpack_require__(588);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__sequential_multi_GnBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGnBu", function() { return __WEBPACK_IMPORTED_MODULE_20__sequential_multi_GnBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__sequential_multi_OrRd__ = __webpack_require__(589);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__sequential_multi_OrRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOrRd", function() { return __WEBPACK_IMPORTED_MODULE_21__sequential_multi_OrRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sequential_multi_PuBuGn__ = __webpack_require__(590);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__sequential_multi_PuBuGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBuGn", function() { return __WEBPACK_IMPORTED_MODULE_22__sequential_multi_PuBuGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__sequential_multi_PuBu__ = __webpack_require__(591);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__sequential_multi_PuBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuBu", function() { return __WEBPACK_IMPORTED_MODULE_23__sequential_multi_PuBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__sequential_multi_PuRd__ = __webpack_require__(592);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__sequential_multi_PuRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePuRd", function() { return __WEBPACK_IMPORTED_MODULE_24__sequential_multi_PuRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sequential_multi_RdPu__ = __webpack_require__(593);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__sequential_multi_RdPu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeRdPu", function() { return __WEBPACK_IMPORTED_MODULE_25__sequential_multi_RdPu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__sequential_multi_YlGnBu__ = __webpack_require__(594);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__sequential_multi_YlGnBu__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGnBu", function() { return __WEBPACK_IMPORTED_MODULE_26__sequential_multi_YlGnBu__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__sequential_multi_YlGn__ = __webpack_require__(595);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__sequential_multi_YlGn__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlGn", function() { return __WEBPACK_IMPORTED_MODULE_27__sequential_multi_YlGn__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__sequential_multi_YlOrBr__ = __webpack_require__(596);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__sequential_multi_YlOrBr__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrBr", function() { return __WEBPACK_IMPORTED_MODULE_28__sequential_multi_YlOrBr__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__sequential_multi_YlOrRd__ = __webpack_require__(597);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__sequential_multi_YlOrRd__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeYlOrRd", function() { return __WEBPACK_IMPORTED_MODULE_29__sequential_multi_YlOrRd__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__sequential_single_Blues__ = __webpack_require__(598);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__sequential_single_Blues__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeBlues", function() { return __WEBPACK_IMPORTED_MODULE_30__sequential_single_Blues__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__sequential_single_Greens__ = __webpack_require__(599);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__sequential_single_Greens__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreens", function() { return __WEBPACK_IMPORTED_MODULE_31__sequential_single_Greens__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__sequential_single_Greys__ = __webpack_require__(600);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__sequential_single_Greys__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeGreys", function() { return __WEBPACK_IMPORTED_MODULE_32__sequential_single_Greys__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__sequential_single_Purples__ = __webpack_require__(601);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__sequential_single_Purples__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemePurples", function() { return __WEBPACK_IMPORTED_MODULE_33__sequential_single_Purples__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__sequential_single_Reds__ = __webpack_require__(602);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateReds", function() { return __WEBPACK_IMPORTED_MODULE_34__sequential_single_Reds__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeReds", function() { return __WEBPACK_IMPORTED_MODULE_34__sequential_single_Reds__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__sequential_single_Oranges__ = __webpack_require__(603);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__sequential_single_Oranges__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "schemeOranges", function() { return __WEBPACK_IMPORTED_MODULE_35__sequential_single_Oranges__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__sequential_multi_cubehelix__ = __webpack_require__(604);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixDefault", function() { return __WEBPACK_IMPORTED_MODULE_36__sequential_multi_cubehelix__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__sequential_multi_rainbow__ = __webpack_require__(605);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateRainbow", function() { return __WEBPACK_IMPORTED_MODULE_37__sequential_multi_rainbow__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateWarm", function() { return __WEBPACK_IMPORTED_MODULE_37__sequential_multi_rainbow__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateCool", function() { return __WEBPACK_IMPORTED_MODULE_37__sequential_multi_rainbow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__sequential_multi_sinebow__ = __webpack_require__(606);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateSinebow", function() { return __WEBPACK_IMPORTED_MODULE_38__sequential_multi_sinebow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__sequential_multi_viridis__ = __webpack_require__(607);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateViridis", function() { return __WEBPACK_IMPORTED_MODULE_39__sequential_multi_viridis__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateMagma", function() { return __WEBPACK_IMPORTED_MODULE_39__sequential_multi_viridis__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateInferno", function() { return __WEBPACK_IMPORTED_MODULE_39__sequential_multi_viridis__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "interpolatePlasma", function() { return __WEBPACK_IMPORTED_MODULE_39__sequential_multi_viridis__["d"]; });










































/***/ }),
/* 568 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"));


/***/ }),
/* 569 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("7fc97fbeaed4fdc086ffff99386cb0f0027fbf5b17666666"));


/***/ }),
/* 570 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("1b9e77d95f027570b3e7298a66a61ee6ab02a6761d666666"));


/***/ }),
/* 571 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928"));


/***/ }),
/* 572 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("fbb4aeb3cde3ccebc5decbe4fed9a6ffffcce5d8bdfddaecf2f2f2"));


/***/ }),
/* 573 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("b3e2cdfdcdaccbd5e8f4cae4e6f5c9fff2aef1e2cccccccc"));


/***/ }),
/* 574 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("e41a1c377eb84daf4a984ea3ff7f00ffff33a65628f781bf999999"));


/***/ }),
/* 575 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("66c2a5fc8d628da0cbe78ac3a6d854ffd92fe5c494b3b3b3"));


/***/ }),
/* 576 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("8dd3c7ffffb3bebadafb807280b1d3fdb462b3de69fccde5d9d9d9bc80bdccebc5ffed6f"));


/***/ }),
/* 577 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "d8b365f5f5f55ab4ac",
  "a6611adfc27d80cdc1018571",
  "a6611adfc27df5f5f580cdc1018571",
  "8c510ad8b365f6e8c3c7eae55ab4ac01665e",
  "8c510ad8b365f6e8c3f5f5f5c7eae55ab4ac01665e",
  "8c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e",
  "8c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e",
  "5430058c510abf812ddfc27df6e8c3c7eae580cdc135978f01665e003c30",
  "5430058c510abf812ddfc27df6e8c3f5f5f5c7eae580cdc135978f01665e003c30"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 578 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "af8dc3f7f7f77fbf7b",
  "7b3294c2a5cfa6dba0008837",
  "7b3294c2a5cff7f7f7a6dba0008837",
  "762a83af8dc3e7d4e8d9f0d37fbf7b1b7837",
  "762a83af8dc3e7d4e8f7f7f7d9f0d37fbf7b1b7837",
  "762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b7837",
  "762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b7837",
  "40004b762a839970abc2a5cfe7d4e8d9f0d3a6dba05aae611b783700441b",
  "40004b762a839970abc2a5cfe7d4e8f7f7f7d9f0d3a6dba05aae611b783700441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 579 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e9a3c9f7f7f7a1d76a",
  "d01c8bf1b6dab8e1864dac26",
  "d01c8bf1b6daf7f7f7b8e1864dac26",
  "c51b7de9a3c9fde0efe6f5d0a1d76a4d9221",
  "c51b7de9a3c9fde0eff7f7f7e6f5d0a1d76a4d9221",
  "c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221",
  "c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221",
  "8e0152c51b7dde77aef1b6dafde0efe6f5d0b8e1867fbc414d9221276419",
  "8e0152c51b7dde77aef1b6dafde0eff7f7f7e6f5d0b8e1867fbc414d9221276419"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 580 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "998ec3f7f7f7f1a340",
  "5e3c99b2abd2fdb863e66101",
  "5e3c99b2abd2f7f7f7fdb863e66101",
  "542788998ec3d8daebfee0b6f1a340b35806",
  "542788998ec3d8daebf7f7f7fee0b6f1a340b35806",
  "5427888073acb2abd2d8daebfee0b6fdb863e08214b35806",
  "5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b35806",
  "2d004b5427888073acb2abd2d8daebfee0b6fdb863e08214b358067f3b08",
  "2d004b5427888073acb2abd2d8daebf7f7f7fee0b6fdb863e08214b358067f3b08"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 581 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ef8a62f7f7f767a9cf",
  "ca0020f4a58292c5de0571b0",
  "ca0020f4a582f7f7f792c5de0571b0",
  "b2182bef8a62fddbc7d1e5f067a9cf2166ac",
  "b2182bef8a62fddbc7f7f7f7d1e5f067a9cf2166ac",
  "b2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac",
  "b2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac",
  "67001fb2182bd6604df4a582fddbc7d1e5f092c5de4393c32166ac053061",
  "67001fb2182bd6604df4a582fddbc7f7f7f7d1e5f092c5de4393c32166ac053061"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 582 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ef8a62ffffff999999",
  "ca0020f4a582bababa404040",
  "ca0020f4a582ffffffbababa404040",
  "b2182bef8a62fddbc7e0e0e09999994d4d4d",
  "b2182bef8a62fddbc7ffffffe0e0e09999994d4d4d",
  "b2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d",
  "b2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d",
  "67001fb2182bd6604df4a582fddbc7e0e0e0bababa8787874d4d4d1a1a1a",
  "67001fb2182bd6604df4a582fddbc7ffffffe0e0e0bababa8787874d4d4d1a1a1a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 583 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91bfdb",
  "d7191cfdae61abd9e92c7bb6",
  "d7191cfdae61ffffbfabd9e92c7bb6",
  "d73027fc8d59fee090e0f3f891bfdb4575b4",
  "d73027fc8d59fee090ffffbfe0f3f891bfdb4575b4",
  "d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4",
  "d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4",
  "a50026d73027f46d43fdae61fee090e0f3f8abd9e974add14575b4313695",
  "a50026d73027f46d43fdae61fee090ffffbfe0f3f8abd9e974add14575b4313695"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 584 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fc8d59ffffbf91cf60",
  "d7191cfdae61a6d96a1a9641",
  "d7191cfdae61ffffbfa6d96a1a9641",
  "d73027fc8d59fee08bd9ef8b91cf601a9850",
  "d73027fc8d59fee08bffffbfd9ef8b91cf601a9850",
  "d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850",
  "d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850",
  "a50026d73027f46d43fdae61fee08bd9ef8ba6d96a66bd631a9850006837",
  "a50026d73027f46d43fdae61fee08bffffbfd9ef8ba6d96a66bd631a9850006837"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 585 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 586 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e5f5f999d8c92ca25f",
  "edf8fbb2e2e266c2a4238b45",
  "edf8fbb2e2e266c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a42ca25f006d2c",
  "edf8fbccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45005824",
  "f7fcfde5f5f9ccece699d8c966c2a441ae76238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 587 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e0ecf49ebcda8856a7",
  "edf8fbb3cde38c96c688419d",
  "edf8fbb3cde38c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68856a7810f7c",
  "edf8fbbfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d6e016b",
  "f7fcfde0ecf4bfd3e69ebcda8c96c68c6bb188419d810f7c4d004b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 588 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e0f3dba8ddb543a2ca",
  "f0f9e8bae4bc7bccc42b8cbe",
  "f0f9e8bae4bc7bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc443a2ca0868ac",
  "f0f9e8ccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe08589e",
  "f7fcf0e0f3dbccebc5a8ddb57bccc44eb3d32b8cbe0868ac084081"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 589 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fee8c8fdbb84e34a33",
  "fef0d9fdcc8afc8d59d7301f",
  "fef0d9fdcc8afc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59e34a33b30000",
  "fef0d9fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301f990000",
  "fff7ecfee8c8fdd49efdbb84fc8d59ef6548d7301fb300007f0000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 590 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ece2f0a6bddb1c9099",
  "f6eff7bdc9e167a9cf02818a",
  "f6eff7bdc9e167a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf1c9099016c59",
  "f6eff7d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016450",
  "fff7fbece2f0d0d1e6a6bddb67a9cf3690c002818a016c59014636"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 591 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ece7f2a6bddb2b8cbe",
  "f1eef6bdc9e174a9cf0570b0",
  "f1eef6bdc9e174a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf2b8cbe045a8d",
  "f1eef6d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0034e7b",
  "fff7fbece7f2d0d1e6a6bddb74a9cf3690c00570b0045a8d023858"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 592 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e7e1efc994c7dd1c77",
  "f1eef6d7b5d8df65b0ce1256",
  "f1eef6d7b5d8df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0dd1c77980043",
  "f1eef6d4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125691003f",
  "f7f4f9e7e1efd4b9dac994c7df65b0e7298ace125698004367001f"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 593 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fde0ddfa9fb5c51b8a",
  "feebe2fbb4b9f768a1ae017e",
  "feebe2fbb4b9f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1c51b8a7a0177",
  "feebe2fcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a0177",
  "fff7f3fde0ddfcc5c0fa9fb5f768a1dd3497ae017e7a017749006a"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 594 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "edf8b17fcdbb2c7fb8",
  "ffffcca1dab441b6c4225ea8",
  "ffffcca1dab441b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c42c7fb8253494",
  "ffffccc7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea80c2c84",
  "ffffd9edf8b1c7e9b47fcdbb41b6c41d91c0225ea8253494081d58"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 595 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "f7fcb9addd8e31a354",
  "ffffccc2e69978c679238443",
  "ffffccc2e69978c67931a354006837",
  "ffffccd9f0a3addd8e78c67931a354006837",
  "ffffccd9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443005a32",
  "ffffe5f7fcb9d9f0a3addd8e78c67941ab5d238443006837004529"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 596 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fff7bcfec44fd95f0e",
  "ffffd4fed98efe9929cc4c02",
  "ffffd4fed98efe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929d95f0e993404",
  "ffffd4fee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c028c2d04",
  "ffffe5fff7bcfee391fec44ffe9929ec7014cc4c02993404662506"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 597 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "ffeda0feb24cf03b20",
  "ffffb2fecc5cfd8d3ce31a1c",
  "ffffb2fecc5cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cf03b20bd0026",
  "ffffb2fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cb10026",
  "ffffccffeda0fed976feb24cfd8d3cfc4e2ae31a1cbd0026800026"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 598 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "deebf79ecae13182bd",
  "eff3ffbdd7e76baed62171b5",
  "eff3ffbdd7e76baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed63182bd08519c",
  "eff3ffc6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594",
  "f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 599 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "e5f5e0a1d99b31a354",
  "edf8e9bae4b374c476238b45",
  "edf8e9bae4b374c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47631a354006d2c",
  "edf8e9c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45005a32",
  "f7fcf5e5f5e0c7e9c0a1d99b74c47641ab5d238b45006d2c00441b"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 600 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "f0f0f0bdbdbd636363",
  "f7f7f7cccccc969696525252",
  "f7f7f7cccccc969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696636363252525",
  "f7f7f7d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525",
  "fffffff0f0f0d9d9d9bdbdbd969696737373525252252525000000"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 601 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "efedf5bcbddc756bb1",
  "f2f0f7cbc9e29e9ac86a51a3",
  "f2f0f7cbc9e29e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8756bb154278f",
  "f2f0f7dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a34a1486",
  "fcfbfdefedf5dadaebbcbddc9e9ac8807dba6a51a354278f3f007d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 602 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fee0d2fc9272de2d26",
  "fee5d9fcae91fb6a4acb181d",
  "fee5d9fcae91fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4ade2d26a50f15",
  "fee5d9fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181d99000d",
  "fff5f0fee0d2fcbba1fc9272fb6a4aef3b2ccb181da50f1567000d"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 603 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return scheme; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ramp__ = __webpack_require__(1);



var scheme = new Array(3).concat(
  "fee6cefdae6be6550d",
  "feeddefdbe85fd8d3cd94701",
  "feeddefdbe85fd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3ce6550da63603",
  "feeddefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d948018c2d04",
  "fff5ebfee6cefdd0a2fdae6bfd8d3cf16913d94801a636037f2704"
).map(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1__ramp__["a" /* default */])(scheme));


/***/ }),
/* 604 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(300, 0.5, 0.0), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-240, 0.5, 1.0)));


/***/ }),
/* 605 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return warm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return cool; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_interpolate__ = __webpack_require__(8);



var warm = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(-100, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var cool = Object(__WEBPACK_IMPORTED_MODULE_1_d3_interpolate__["b" /* interpolateCubehelixLong */])(Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(260, 0.75, 0.35), Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(80, 1.50, 0.8));

var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])();

/* harmony default export */ __webpack_exports__["b"] = (function(t) {
  if (t < 0 || t > 1) t -= Math.floor(t);
  var ts = Math.abs(t - 0.5);
  c.h = 360 * t - 100;
  c.s = 1.5 - 1.5 * ts;
  c.l = 0.8 - 0.9 * ts;
  return c + "";
});


/***/ }),
/* 606 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(9);


var c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(),
    pi_1_3 = Math.PI / 3,
    pi_2_3 = Math.PI * 2 / 3;

/* harmony default export */ __webpack_exports__["a"] = (function(t) {
  var x;
  t = (0.5 - t) * Math.PI;
  c.r = 255 * (x = Math.sin(t)) * x;
  c.g = 255 * (x = Math.sin(t + pi_1_3)) * x;
  c.b = 255 * (x = Math.sin(t + pi_2_3)) * x;
  return c + "";
});


/***/ }),
/* 607 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return magma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return inferno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return plasma; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__colors__ = __webpack_require__(0);


function ramp(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
}

/* harmony default export */ __webpack_exports__["a"] = (ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")));

var magma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));

var inferno = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));

var plasma = ramp(Object(__WEBPACK_IMPORTED_MODULE_0__colors__["a" /* default */])("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));


/***/ }),
/* 608 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderAxes = exports._buildAxesData = undefined;

var _range = __webpack_require__(609);

var _range2 = _interopRequireDefault(_range);

var _reduce = __webpack_require__(105);

var _reduce2 = _interopRequireDefault(_reduce);

var _d3Shape = __webpack_require__(13);

var _logger = __webpack_require__(612);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _buildAxisData = function _buildAxisData(value, axesGroup, conf) {
  return {
    value: value,
    thickness: axesGroup.thickness || 1,
    color: axesGroup.color || '#d3d3d3',
    opacity: axesGroup.opacity || conf.opacity
  };
};

var _buildAxesData = exports._buildAxesData = function _buildAxesData(conf) {
  return (0, _reduce2.default)(conf.axes, function (aggregator, axesGroup) {
    if (!axesGroup.position && !axesGroup.spacing) {
      _logger2.default.warn('Skipping axe group with no position and spacing defined');
      return aggregator;
    }
    if (axesGroup.position) {
      aggregator.push(_buildAxisData(axesGroup.position, axesGroup, conf));
    }
    if (axesGroup.spacing) {
      var builtAxes = (0, _range2.default)(axesGroup.start || conf.cmin, axesGroup.end || conf.cmax, axesGroup.spacing).map(function (value) {
        return _buildAxisData(value, axesGroup, conf);
      });
      return aggregator.concat(builtAxes);
    }
    return aggregator;
  }, []);
};

var renderAxes = exports.renderAxes = function renderAxes(parentElement, conf, instance, scale) {
  var axes = _buildAxesData(conf);

  var axis = (0, _d3Shape.arc)().innerRadius(function (d) {
    return conf.direction === 'in' ? conf.outerRadius - scale(d.value) : conf.innerRadius + scale(d.value);
  }).outerRadius(function (d) {
    return conf.direction === 'in' ? conf.outerRadius - scale(d.value) : conf.innerRadius + scale(d.value);
  }).startAngle(0).endAngle(function (d) {
    return d.length;
  });

  var selection = parentElement.selectAll('.axis').data(function (blockData) {
    var block = instance._layout.blocks[blockData.key];
    return axes.map(function (d) {
      return {
        value: d.value,
        thickness: d.thickness,
        color: d.color,
        opacity: d.opacity,
        block_id: blockData.key,
        length: block.end - block.start
      };
    });
  }).enter().append('path').attr('opacity', function (d) {
    return d.opacity;
  }).attr('class', 'axis').attr('d', axis).attr('stroke-width', function (d) {
    return d.thickness;
  }).attr('stroke', function (d) {
    return d.color;
  });

  if (conf.showAxesTooltip) {
    selection.on('mouseover', function (d, i) {
      instance.tip.html(d.value).transition().style('opacity', 0.9).style('left', event.pageX + 'px').style('top', event.pageY - 28 + 'px');
    });
    selection.on('mouseout', function (d, i) {
      instance.tip.transition().duration(500).style('opacity', 0);
    });
  }

  return selection;
};

/***/ }),
/* 609 */
/***/ (function(module, exports, __webpack_require__) {

var createRange = __webpack_require__(610);

/**
 * Creates an array of numbers (positive and/or negative) progressing from
 * `start` up to, but not including, `end`. A step of `-1` is used if a negative
 * `start` is specified without an `end` or `step`. If `end` is not specified,
 * it's set to `start` with `start` then set to `0`.
 *
 * **Note:** JavaScript follows the IEEE-754 standard for resolving
 * floating-point values which can produce unexpected results.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {number} [start=0] The start of the range.
 * @param {number} end The end of the range.
 * @param {number} [step=1] The value to increment or decrement by.
 * @returns {Array} Returns the range of numbers.
 * @see _.inRange, _.rangeRight
 * @example
 *
 * _.range(4);
 * // => [0, 1, 2, 3]
 *
 * _.range(-4);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 5);
 * // => [1, 2, 3, 4]
 *
 * _.range(0, 20, 5);
 * // => [0, 5, 10, 15]
 *
 * _.range(0, -4, -1);
 * // => [0, -1, -2, -3]
 *
 * _.range(1, 4, 0);
 * // => [1, 1, 1]
 *
 * _.range(0);
 * // => []
 */
var range = createRange();

module.exports = range;


/***/ }),
/* 610 */
/***/ (function(module, exports, __webpack_require__) {

var baseRange = __webpack_require__(611),
    isIterateeCall = __webpack_require__(63),
    toFinite = __webpack_require__(223);

/**
 * Creates a `_.range` or `_.rangeRight` function.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new range function.
 */
function createRange(fromRight) {
  return function(start, end, step) {
    if (step && typeof step != 'number' && isIterateeCall(start, end, step)) {
      end = step = undefined;
    }
    // Ensure the sign of `-0` is preserved.
    start = toFinite(start);
    if (end === undefined) {
      end = start;
      start = 0;
    } else {
      end = toFinite(end);
    }
    step = step === undefined ? (start < end ? 1 : -1) : toFinite(step);
    return baseRange(start, end, step, fromRight);
  };
}

module.exports = createRange;


/***/ }),
/* 611 */
/***/ (function(module, exports) {

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeCeil = Math.ceil,
    nativeMax = Math.max;

/**
 * The base implementation of `_.range` and `_.rangeRight` which doesn't
 * coerce arguments.
 *
 * @private
 * @param {number} start The start of the range.
 * @param {number} end The end of the range.
 * @param {number} step The value to increment or decrement by.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Array} Returns the range of numbers.
 */
function baseRange(start, end, step, fromRight) {
  var index = -1,
      length = nativeMax(nativeCeil((end - start) / (step || 1)), 0),
      result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
}

module.exports = baseRange;


/***/ }),
/* 612 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = console;

/***/ }),
/* 613 */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(221),
    isArrayLike = __webpack_require__(17),
    isString = __webpack_require__(614),
    toInteger = __webpack_require__(119),
    values = __webpack_require__(615);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Checks if `value` is in `collection`. If `collection` is a string, it's
 * checked for a substring of `value`, otherwise
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * is used for equality comparisons. If `fromIndex` is negative, it's used as
 * the offset from the end of `collection`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object|string} collection The collection to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
 * @returns {boolean} Returns `true` if `value` is found, else `false`.
 * @example
 *
 * _.includes([1, 2, 3], 1);
 * // => true
 *
 * _.includes([1, 2, 3], 1, 2);
 * // => false
 *
 * _.includes({ 'a': 1, 'b': 2 }, 1);
 * // => true
 *
 * _.includes('abcd', 'bc');
 * // => true
 */
function includes(collection, value, fromIndex, guard) {
  collection = isArrayLike(collection) ? collection : values(collection);
  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;

  var length = collection.length;
  if (fromIndex < 0) {
    fromIndex = nativeMax(length + fromIndex, 0);
  }
  return isString(collection)
    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)
    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);
}

module.exports = includes;


/***/ }),
/* 614 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(16),
    isArray = __webpack_require__(2),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

var baseValues = __webpack_require__(616),
    keys = __webpack_require__(18);

/**
 * Creates an array of the own enumerable string keyed property values of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property values.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.values(new Foo);
 * // => [1, 2] (iteration order is not guaranteed)
 *
 * _.values('hi');
 * // => ['h', 'i']
 */
function values(object) {
  return object == null ? [] : baseValues(object, keys(object));
}

module.exports = values;


/***/ }),
/* 616 */
/***/ (function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(40);

/**
 * The base implementation of `_.values` and `_.valuesIn` which creates an
 * array of `object` property values corresponding to the property names
 * of `props`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} props The property names to get values for.
 * @returns {Object} Returns the array of property values.
 */
function baseValues(object, props) {
  return arrayMap(props, function(key) {
    return object[key];
  });
}

module.exports = baseValues;


/***/ }),
/* 617 */
/***/ (function(module, exports, __webpack_require__) {

var arrayEvery = __webpack_require__(618),
    baseEvery = __webpack_require__(619),
    baseIteratee = __webpack_require__(33),
    isArray = __webpack_require__(2),
    isIterateeCall = __webpack_require__(63);

/**
 * Checks if `predicate` returns truthy for **all** elements of `collection`.
 * Iteration is stopped once `predicate` returns falsey. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * **Note:** This method returns `true` for
 * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
 * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
 * elements of empty collections.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 * @example
 *
 * _.every([true, 1, null, 'yes'], Boolean);
 * // => false
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': false },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.every(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.every(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.every(users, 'active');
 * // => false
 */
function every(collection, predicate, guard) {
  var func = isArray(collection) ? arrayEvery : baseEvery;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = every;


/***/ }),
/* 618 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.every` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`.
 */
function arrayEvery(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (!predicate(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

module.exports = arrayEvery;


/***/ }),
/* 619 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(39);

/**
 * The base implementation of `_.every` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if all elements pass the predicate check,
 *  else `false`
 */
function baseEvery(collection, predicate) {
  var result = true;
  baseEach(collection, function(value, index, collection) {
    result = !!predicate(value, index, collection);
    return result;
  });
  return result;
}

module.exports = baseEvery;


/***/ }),
/* 620 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _configs = __webpack_require__(22);

var _d3Shape = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  color: {
    value: '#fd6a62',
    iteratee: true
  },
  strokeColor: {
    value: '#d3d3d3',
    iteratee: true
  },
  strokeWidth: {
    value: 0,
    iteratee: true
  }
}, _configs.radial, _configs.common);

var Highlight = function (_Track) {
  _inherits(Highlight, _Track);

  function Highlight(instance, conf, data) {
    _classCallCheck(this, Highlight);

    return _possibleConstructorReturn(this, (Highlight.__proto__ || Object.getPrototypeOf(Highlight)).call(this, instance, conf, defaultConf, data, _dataParser.parseSpanStringData));
  }

  _createClass(Highlight, [{
    key: 'renderDatum',
    value: function renderDatum(parentElement, conf, layout) {
      var _this2 = this;

      return parentElement.selectAll('tile').data(function (d) {
        return d.values;
      }).enter().append('path').attr('class', 'tile').attr('d', (0, _d3Shape.arc)().innerRadius(conf.innerRadius).outerRadius(conf.outerRadius).startAngle(function (d, i) {
        return _this2.theta(d.start, layout.blocks[d.block_id]);
      }).endAngle(function (d, i) {
        return _this2.theta(d.end, layout.blocks[d.block_id]);
      })).attr('fill', conf.colorValue).attr('opacity', conf.opacity).attr('stroke-width', conf.strokeWidth).attr('stroke', conf.strokeColor);
    }
  }]);

  return Highlight;
}(_Track3.default);

exports.default = Highlight;

/***/ }),
/* 621 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _d3Shape = __webpack_require__(13);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _configs = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  direction: {
    value: 'out',
    iteratee: false
  },
  color: {
    value: '#fd6a62',
    iteratee: true
  },
  backgrounds: {
    value: [],
    iteratee: false
  }
}, _configs.axes, _configs.radial, _configs.common, _configs.values);

var Histogram = function (_Track) {
  _inherits(Histogram, _Track);

  function Histogram(instance, conf, data) {
    _classCallCheck(this, Histogram);

    return _possibleConstructorReturn(this, (Histogram.__proto__ || Object.getPrototypeOf(Histogram)).call(this, instance, conf, defaultConf, data, _dataParser.parseSpanValueData));
  }

  _createClass(Histogram, [{
    key: 'renderDatum',
    value: function renderDatum(parentElement, conf, layout) {
      var _this2 = this;

      var bin = parentElement.selectAll('.bin').data(function (d) {
        return d.values;
      }).enter().append('path').attr('class', 'bin').attr('opacity', function (d) {
        return conf.opacity;
      }).attr('d', (0, _d3Shape.arc)().innerRadius(function (d) {
        if (conf.direction == 'in') {
          return conf.outerRadius - _this2.scale(d.value);
        }
        return conf.innerRadius;
      }).outerRadius(function (d) {
        if (conf.direction == 'out') {
          return conf.innerRadius + _this2.scale(d.value);
        }
        return conf.outerRadius;
      }).startAngle(function (d) {
        return _this2.theta(d.start, layout.blocks[d.block_id]);
      }).endAngle(function (d) {
        return _this2.theta(d.end, layout.blocks[d.block_id]);
      }));
      bin.attr('fill', conf.colorValue);
      return bin;
    }
  }]);

  return Histogram;
}(_Track3.default);

exports.default = Histogram;

/***/ }),
/* 622 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _tooltip = __webpack_require__(209);

var _d3Chord = __webpack_require__(623);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _isFunction = __webpack_require__(24);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _d3Selection = __webpack_require__(3);

var _configs = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  color: {
    value: '#fd6a62',
    iteratee: true
  },
  radius: {
    value: null,
    iteratee: false
  }
}, _configs.common, _configs.values);

var normalizeRadius = function normalizeRadius(radius, layoutRadius) {
  if (radius >= 1) return radius;
  return radius * layoutRadius;
};

var Chords = function (_Track) {
  _inherits(Chords, _Track);

  function Chords(instance, conf, data) {
    _classCallCheck(this, Chords);

    return _possibleConstructorReturn(this, (Chords.__proto__ || Object.getPrototypeOf(Chords)).call(this, instance, conf, defaultConf, data, _dataParser.parseChordData));
  }

  _createClass(Chords, [{
    key: 'getCoordinates',
    value: function getCoordinates(d, layout, conf, datum) {
      var block = layout.blocks[d.id];
      var startAngle = block.start + d.start / block.len * (block.end - block.start);
      var endAngle = block.start + d.end / block.len * (block.end - block.start);

      var radius = void 0;
      if ((0, _isFunction2.default)(conf.radius)) {
        radius = normalizeRadius(conf.radius(datum), layout.conf.innerRadius);
      } else if (conf.radius) {
        radius = normalizeRadius(conf.radius, layout.conf.innerRadius);
      }

      if (!radius) {
        radius = layout.conf.innerRadius;
      }

      return {
        radius: radius,
        startAngle: startAngle,
        endAngle: endAngle
      };
    }
  }, {
    key: 'renderChords',
    value: function renderChords(parentElement, name, conf, data, instance, getCoordinates) {
      var _this2 = this;

      var track = parentElement.append('g');

      var link = track.selectAll('.chord').data(data).enter().append('path').attr('class', 'chord').attr('d', (0, _d3Chord.ribbon)().source(function (d) {
        return getCoordinates(d.source, instance._layout, _this2.conf, d);
      }).target(function (d) {
        return getCoordinates(d.target, instance._layout, _this2.conf, d);
      })).attr('opacity', conf.opacity).on('mouseover', function (d) {
        _this2.dispatch.call('mouseover', _this2, d);
        instance.clipboard.attr('value', conf.tooltipContent(d));
      }).on('mouseout', function (d) {
        return _this2.dispatch.call('mouseout', _this2, d);
      });

      Object.keys(conf.events).forEach(function (eventName) {
        link.on(eventName, function (d, i, nodes) {
          conf.events[eventName](d, i, nodes, _d3Selection.event);
        });
      });

      link.attr('fill', conf.colorValue);

      return link;
    }
  }, {
    key: 'render',
    value: function render(instance, parentElement, name) {
      parentElement.select('.' + name).remove();

      var track = parentElement.append('g').attr('class', name).attr('z-index', this.conf.zIndex);

      var selection = this.renderChords(track, name, this.conf, this.data, instance, this.getCoordinates);
      if (this.conf.tooltipContent) {
        (0, _tooltip.registerTooltip)(this, instance, selection, this.conf);
      }
      return this;
    }
  }]);

  return Chords;
}(_Track3.default);

exports.default = Chords;

/***/ }),
/* 623 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_chord__ = __webpack_require__(624);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "chord", function() { return __WEBPACK_IMPORTED_MODULE_0__src_chord__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_ribbon__ = __webpack_require__(625);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ribbon", function() { return __WEBPACK_IMPORTED_MODULE_1__src_ribbon__["a"]; });




/***/ }),
/* 624 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_array__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__math__ = __webpack_require__(239);



function compareValue(compare) {
  return function(a, b) {
    return compare(
      a.source.value + a.target.value,
      b.source.value + b.target.value
    );
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var padAngle = 0,
      sortGroups = null,
      sortSubgroups = null,
      sortChords = null;

  function chord(matrix) {
    var n = matrix.length,
        groupSums = [],
        groupIndex = Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n),
        subgroupIndex = [],
        chords = [],
        groups = chords.groups = new Array(n),
        subgroups = new Array(n * n),
        k,
        x,
        x0,
        dx,
        i,
        j;

    // Compute the sum.
    k = 0, i = -1; while (++i < n) {
      x = 0, j = -1; while (++j < n) {
        x += matrix[i][j];
      }
      groupSums.push(x);
      subgroupIndex.push(Object(__WEBPACK_IMPORTED_MODULE_0_d3_array__["range"])(n));
      k += x;
    }

    // Sort groups…
    if (sortGroups) groupIndex.sort(function(a, b) {
      return sortGroups(groupSums[a], groupSums[b]);
    });

    // Sort subgroups…
    if (sortSubgroups) subgroupIndex.forEach(function(d, i) {
      d.sort(function(a, b) {
        return sortSubgroups(matrix[i][a], matrix[i][b]);
      });
    });

    // Convert the sum to scaling factor for [0, 2pi].
    // TODO Allow start and end angle to be specified?
    // TODO Allow padding to be specified as percentage?
    k = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* max */])(0, __WEBPACK_IMPORTED_MODULE_1__math__["e" /* tau */] - padAngle * n) / k;
    dx = k ? padAngle : __WEBPACK_IMPORTED_MODULE_1__math__["e" /* tau */] / n;

    // Compute the start and end angle for each group and subgroup.
    // Note: Opera has a bug reordering object literal properties!
    x = 0, i = -1; while (++i < n) {
      x0 = x, j = -1; while (++j < n) {
        var di = groupIndex[i],
            dj = subgroupIndex[di][j],
            v = matrix[di][dj],
            a0 = x,
            a1 = x += v * k;
        subgroups[dj * n + di] = {
          index: di,
          subindex: dj,
          startAngle: a0,
          endAngle: a1,
          value: v
        };
      }
      groups[di] = {
        index: di,
        startAngle: x0,
        endAngle: x,
        value: groupSums[di]
      };
      x += dx;
    }

    // Generate chords for each (non-empty) subgroup-subgroup link.
    i = -1; while (++i < n) {
      j = i - 1; while (++j < n) {
        var source = subgroups[j * n + i],
            target = subgroups[i * n + j];
        if (source.value || target.value) {
          chords.push(source.value < target.value
              ? {source: target, target: source}
              : {source: source, target: target});
        }
      }
    }

    return sortChords ? chords.sort(sortChords) : chords;
  }

  chord.padAngle = function(_) {
    return arguments.length ? (padAngle = Object(__WEBPACK_IMPORTED_MODULE_1__math__["c" /* max */])(0, _), chord) : padAngle;
  };

  chord.sortGroups = function(_) {
    return arguments.length ? (sortGroups = _, chord) : sortGroups;
  };

  chord.sortSubgroups = function(_) {
    return arguments.length ? (sortSubgroups = _, chord) : sortSubgroups;
  };

  chord.sortChords = function(_) {
    return arguments.length ? (_ == null ? sortChords = null : (sortChords = compareValue(_))._ = _, chord) : sortChords && sortChords._;
  };

  return chord;
});


/***/ }),
/* 625 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__array__ = __webpack_require__(626);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__constant__ = __webpack_require__(627);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_d3_path__ = __webpack_require__(35);





function defaultSource(d) {
  return d.source;
}

function defaultTarget(d) {
  return d.target;
}

function defaultRadius(d) {
  return d.radius;
}

function defaultStartAngle(d) {
  return d.startAngle;
}

function defaultEndAngle(d) {
  return d.endAngle;
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  var source = defaultSource,
      target = defaultTarget,
      radius = defaultRadius,
      startAngle = defaultStartAngle,
      endAngle = defaultEndAngle,
      context = null;

  function ribbon() {
    var buffer,
        argv = __WEBPACK_IMPORTED_MODULE_0__array__["a" /* slice */].call(arguments),
        s = source.apply(this, argv),
        t = target.apply(this, argv),
        sr = +radius.apply(this, (argv[0] = s, argv)),
        sa0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        sa1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        sx0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* cos */])(sa0),
        sy0 = sr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(sa0),
        tr = +radius.apply(this, (argv[0] = t, argv)),
        ta0 = startAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */],
        ta1 = endAngle.apply(this, argv) - __WEBPACK_IMPORTED_MODULE_2__math__["b" /* halfPi */];

    if (!context) context = buffer = Object(__WEBPACK_IMPORTED_MODULE_3_d3_path__["a" /* path */])();

    context.moveTo(sx0, sy0);
    context.arc(0, 0, sr, sa0, sa1);
    if (sa0 !== ta0 || sa1 !== ta1) { // TODO sr !== tr?
      context.quadraticCurveTo(0, 0, tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["a" /* cos */])(ta0), tr * Object(__WEBPACK_IMPORTED_MODULE_2__math__["d" /* sin */])(ta0));
      context.arc(0, 0, tr, ta0, ta1);
    }
    context.quadraticCurveTo(0, 0, sx0, sy0);
    context.closePath();

    if (buffer) return context = null, buffer + "" || null;
  }

  ribbon.radius = function(_) {
    return arguments.length ? (radius = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : radius;
  };

  ribbon.startAngle = function(_) {
    return arguments.length ? (startAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : startAngle;
  };

  ribbon.endAngle = function(_) {
    return arguments.length ? (endAngle = typeof _ === "function" ? _ : Object(__WEBPACK_IMPORTED_MODULE_1__constant__["a" /* default */])(+_), ribbon) : endAngle;
  };

  ribbon.source = function(_) {
    return arguments.length ? (source = _, ribbon) : source;
  };

  ribbon.target = function(_) {
    return arguments.length ? (target = _, ribbon) : target;
  };

  ribbon.context = function(_) {
    return arguments.length ? ((context = _ == null ? null : _), ribbon) : context;
  };

  return ribbon;
});


/***/ }),
/* 626 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slice; });
var slice = Array.prototype.slice;


/***/ }),
/* 627 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 628 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _d3Shape = __webpack_require__(13);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _configs = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  color: {
    value: 'Spectral',
    iteratee: false
  },
  backgrounds: {
    value: [],
    iteratee: false
  }
}, _configs.radial, _configs.values, _configs.common);

var Heatmap = function (_Track) {
  _inherits(Heatmap, _Track);

  function Heatmap(instance, conf, data) {
    _classCallCheck(this, Heatmap);

    return _possibleConstructorReturn(this, (Heatmap.__proto__ || Object.getPrototypeOf(Heatmap)).call(this, instance, conf, defaultConf, data, _dataParser.parseSpanValueData));
  }

  _createClass(Heatmap, [{
    key: 'renderDatum',
    value: function renderDatum(parentElement, conf, layout) {
      var _this2 = this;

      return parentElement.selectAll('tile').data(function (d) {
        return d.values;
      }).enter().append('path').attr('class', 'tile').attr('opacity', conf.opacity).attr('d', (0, _d3Shape.arc)().innerRadius(conf.innerRadius).outerRadius(conf.outerRadius).startAngle(function (d, i) {
        return _this2.theta(d.start, layout.blocks[d.block_id]);
      }).endAngle(function (d, i) {
        return _this2.theta(d.end, layout.blocks[d.block_id]);
      })).attr('fill', conf.colorValue);
    }
  }]);

  return Heatmap;
}(_Track3.default);

exports.default = Heatmap;

/***/ }),
/* 629 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _reduce = __webpack_require__(105);

var _reduce2 = _interopRequireDefault(_reduce);

var _sortBy = __webpack_require__(106);

var _sortBy2 = _interopRequireDefault(_sortBy);

var _configs = __webpack_require__(22);

var _d3Shape = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  direction: {
    value: 'out',
    iteratee: false
  },
  color: {
    value: '#fd6a62',
    iteratee: true
  },
  fill: {
    value: false,
    iteratee: false
  },
  fillColor: {
    value: '#d3d3d3',
    iteratee: true
  },
  thickness: {
    value: 1,
    iteratee: true
  },
  maxGap: {
    value: null,
    iteratee: false
  },
  backgrounds: {
    value: [],
    iteratee: false
  }
}, _configs.axes, _configs.radial, _configs.common, _configs.values);

var splitByGap = function splitByGap(points, maxGap) {
  return (0, _reduce2.default)((0, _sortBy2.default)(points, 'position'), function (aggregator, datum) {
    if (aggregator.position === null) {
      return { position: datum.position, groups: [[datum]] };
    }
    if (datum.position > aggregator.position + maxGap) {
      aggregator.groups.push([datum]);
    } else {
      aggregator.groups[aggregator.groups.length - 1].push(datum);
    }
    aggregator.position = datum.position;
    return aggregator;
  }, { position: null, groups: [] }).groups;
};

var Line = function (_Track) {
  _inherits(Line, _Track);

  function Line(instance, conf, data) {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this, instance, conf, defaultConf, data, _dataParser.parsePositionValueData));
  }

  _createClass(Line, [{
    key: 'renderDatum',
    value: function renderDatum(parentElement, conf, layout) {
      var _this2 = this;

      var line = (0, _d3Shape.radialLine)().angle(function (d) {
        return d.angle;
      }).radius(function (d) {
        return d.radius;
      }).curve(_d3Shape.curveLinear);

      var area = (0, _d3Shape.radialArea)().angle(function (d) {
        return d.angle;
      }).innerRadius(function (d) {
        return d.innerRadius;
      }).outerRadius(function (d) {
        return d.outerRadius;
      }).curve(_d3Shape.curveLinear);

      var generator = conf.fill ? area : line;

      var buildRadius = function buildRadius(height) {
        if (conf.fill) {
          return {
            innerRadius: conf.direction === 'out' ? conf.innerRadius : conf.outerRadius - height,
            outerRadius: conf.direction === 'out' ? conf.innerRadius + height : conf.outerRadius
          };
        } else {
          return {
            radius: conf.direction === 'out' ? conf.innerRadius + height : conf.outerRadius - height
          };
        }
      };

      var selection = parentElement.selectAll('.line').data(function (d) {
        return conf.maxGap ? splitByGap(d.values, conf.maxGap) : [d.values];
      }).enter().append('g').attr('class', 'line').append('path').datum(function (d) {
        return d.map(function (datum) {
          var height = _this2.scale(datum.value);
          return (0, _assign2.default)(datum, {
            angle: _this2.theta(datum.position, layout.blocks[datum.block_id])
          }, buildRadius(height));
        });
      }).attr('d', generator).attr('opacity', conf.opacity).attr('stroke-width', conf.thickness).attr('stroke', conf.colorValue).attr('fill', 'none');

      if (conf.fill) {
        selection.attr('fill', conf.fillColor);
      }

      return selection;
    }
  }]);

  return Line;
}(_Track3.default);

exports.default = Line;

/***/ }),
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _configs = __webpack_require__(22);

var _d3Shape = __webpack_require__(13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  direction: {
    value: 'out',
    iteratee: false
  },
  color: {
    value: '#fd6a62',
    iteratee: true
  },
  fill: {
    value: true,
    iteratee: false
  },
  size: {
    value: 15,
    iteratee: true
  },
  shape: {
    value: 'circle',
    iteratee: false
  },
  strokeColor: {
    value: '#d3d3d3',
    iteratee: true
  },
  strokeWidth: {
    value: 2,
    iteratee: true
  },
  backgrounds: {
    value: [],
    iteratee: false
  }
}, _configs.axes, _configs.radial, _configs.common, _configs.values);

var getSymbol = function getSymbol(key) {
  switch (key) {
    case 'circle':
      return _d3Shape.symbolCircle;
    case 'cross':
      return _d3Shape.symbolCross;
    case 'diamond':
      return _d3Shape.symbolDiamond;
    case 'square':
      return _d3Shape.symbolSquare;
    case 'triangle':
      return _d3Shape.symbolTriangle;
    case 'star':
      return _d3Shape.symbolStar;
    case 'wye':
      return _d3Shape.symbolWye;
    default:
      return _d3Shape.symbolCross;
  }
};

var Scatter = function (_Track) {
  _inherits(Scatter, _Track);

  function Scatter(instance, conf, data) {
    _classCallCheck(this, Scatter);

    return _possibleConstructorReturn(this, (Scatter.__proto__ || Object.getPrototypeOf(Scatter)).call(this, instance, conf, defaultConf, data, _dataParser.parsePositionValueData));
  }

  _createClass(Scatter, [{
    key: 'renderDatum',
    value: function renderDatum(parentElement, conf, layout) {
      var _this2 = this;

      var point = parentElement.selectAll('.point').data(function (d) {
        d.values.forEach(function (item, i) {
          item.symbol = (0, _d3Shape.symbol)().type(getSymbol(conf.shape)).size(conf.size);
        });
        return d.values;
      }).enter().append('path').attr('class', 'point').attr('opacity', conf.opacity).attr('d', function (d, i, j) {
        return d.symbol(d, i, j);
      }).attr('transform', function (d) {
        return '\n          translate(\n            ' + _this2.x(d, layout, conf) + ',\n            ' + _this2.y(d, layout, conf) + '\n          ) rotate(\n            ' + _this2.theta(d.position, layout.blocks[d.block_id]) * 360 / (2 * Math.PI) + '\n          )';
      }).attr('stroke', conf.strokeColor).attr('stroke-width', conf.strokeWidth).attr('fill', 'none');

      if (conf.fill) {
        point.attr('fill', conf.colorValue);
      }

      return point;
    }
  }]);

  return Scatter;
}(_Track3.default);

exports.default = Scatter;

/***/ }),
/* 631 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Track2 = __webpack_require__(20);

var _Track3 = _interopRequireDefault(_Track2);

var _dataParser = __webpack_require__(21);

var _d3Shape = __webpack_require__(13);

var _assign = __webpack_require__(14);

var _assign2 = _interopRequireDefault(_assign);

var _forEach = __webpack_require__(32);

var _forEach2 = _interopRequireDefault(_forEach);

var _configs = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultConf = (0, _assign2.default)({
  color: {
    value: '#fd6a62',
    iteratee: true
  },
  direction: {
    value: 'out',
    iteratee: false
  },
  thickness: {
    value: 10,
    iteratee: false
  },
  radialMargin: {
    value: 2,
    iteratee: false
  },
  margin: {
    value: 2,
    iteratee: false
  },
  strokeWidth: {
    value: 1,
    iteratee: true
  },
  strokeColor: {
    value: '#000000',
    iteratee: true
  },
  backgrounds: {
    value: [],
    iteratee: false
  }
}, _configs.axes, _configs.radial, _configs.values, _configs.common);

var Stack = function (_Track) {
  _inherits(Stack, _Track);

  function Stack(instance, conf, data) {
    _classCallCheck(this, Stack);

    var _this = _possibleConstructorReturn(this, (Stack.__proto__ || Object.getPrototypeOf(Stack)).call(this, instance, conf, defaultConf, data, _dataParser.parseSpanValueData));

    _this.buildLayers(_this.data, _this.conf.margin);
    return _this;
  }

  _createClass(Stack, [{
    key: 'buildLayers',
    value: function buildLayers(data, margin) {
      (0, _forEach2.default)(data, function (block, idx) {
        block.values = block.values.sort(function (a, b) {
          if (a.start < b.start) {
            return -1;
          }
          if (a.start == b.start && a.end > b.end) {
            return -1;
          }
          if (a.start == b.start && a.end == b.end) {
            return 0;
          }
          return 1;
        });
        var layers = [];
        (0, _forEach2.default)(block.values, function (datum) {
          var placed = false;
          (0, _forEach2.default)(layers, function (layer, i) {
            // try to place datum
            var lastDatumInLayer = layer.slice(0).pop();
            if (lastDatumInLayer.end + margin < datum.start) {
              layer.push(datum);
              datum.layer = i;
              placed = true;
              return false;
            }
          });
          if (!placed) {
            datum.layer = layers.length;
            layers.push([datum]);
          }
        });
      });
    }
  }, {
    key: 'datumRadialPosition',
    value: function datumRadialPosition(d) {
      var radialStart = (this.conf.thickness + this.conf.radialMargin) * d.layer;
      var radialEnd = radialStart + this.conf.thickness;
      if (this.conf.direction === 'out') {
        return [Math.min(this.conf.innerRadius + radialStart, this.conf.outerRadius), Math.min(this.conf.innerRadius + radialEnd, this.conf.outerRadius)];
      }

      if (this.conf.direction === 'in') {
        return [Math.max(this.conf.outerRadius - radialEnd, this.conf.innerRadius), this.conf.outerRadius - radialStart];
      }

      if (this.conf.direction === 'center') {
        var origin = Math.floor((this.conf.outerRadius + this.conf.innerRadius) / 2);
        var _radialStart = (this.conf.thickness + this.conf.radialMargin) * Math.floor(d.layer / 2);
        var _radialEnd = _radialStart + this.conf.thickness;

        if (d.layer % 2 === 0) {
          return [origin + _radialStart, origin + _radialEnd];
        } else {
          return [origin - _radialStart - this.conf.radialMargin, origin - _radialEnd - this.conf.radialMargin];
        }
      }
    }
  }, {
    key: 'renderDatum',
    value: function renderDatum(parentElement, conf, layout) {
      var _this2 = this;

      var that = this;

      return parentElement.selectAll('.tile').data(function (d) {
        return d.values.map(function (datum) {
          var radius = that.datumRadialPosition(datum);
          return (0, _assign2.default)(datum, {
            innerRadius: radius[0],
            outerRadius: radius[1],
            startAngle: _this2.theta(datum.start, layout.blocks[datum.block_id]),
            endAngle: _this2.theta(datum.end, layout.blocks[datum.block_id])
          });
        });
      }).enter().append('path').attr('class', 'tile').attr('d', (0, _d3Shape.arc)()).attr('opacity', conf.opacity).attr('stroke-width', conf.strokeWidth).attr('stroke', conf.strokeColor).attr('fill', conf.colorValue);
    }
  }]);

  return Stack;
}(_Track3.default);

exports.default = Stack;

/***/ }),
/* 632 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initClipboard = undefined;

var _clipboardJs = __webpack_require__(633);

var _clipboardJs2 = _interopRequireDefault(_clipboardJs);

var _d3Selection = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initClipboard = exports.initClipboard = function initClipboard(container) {
  var input = (0, _d3Selection.select)(container).append('input').attr('class', 'circos-clipboard').attr('type', 'hidden');

  (0, _d3Selection.select)('body').on('keydown', function () {
    if (event.ctrlKey && event.code === 'KeyC') {
      _clipboardJs2.default.copy(input.attr('value'));
    }
  });
  return input;
};

/***/ }),
/* 633 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {//  Import support https://stackoverflow.com/questions/13673346/supporting-both-commonjs-and-amd
(function(name, definition) {
    if (true) { module.exports = definition(); }
    else {}
}("clipboard", function() {
  if (typeof document === 'undefined' || !document.addEventListener) {
    return null;
  }

  var clipboard = {};

  clipboard.copy = (function() {
    var _intercept = false;
    var _data = null; // Map from data type (e.g. "text/html") to value.
    var _bogusSelection = false;

    function cleanup() {
      _intercept = false;
      _data = null;
      if (_bogusSelection) {
        window.getSelection().removeAllRanges();
      }
      _bogusSelection = false;
    }

    document.addEventListener("copy", function(e) {
      if (_intercept) {
        for (var key in _data) {
          e.clipboardData.setData(key, _data[key]);
        }
        e.preventDefault();
      }
    });

    // Workaround for Safari: https://bugs.webkit.org/show_bug.cgi?id=156529
    function bogusSelect() {
      var sel = document.getSelection();
      // If "nothing" is selected...
      if (!document.queryCommandEnabled("copy") && sel.isCollapsed) {
        // ... temporarily select the entire body.
        //
        // We select the entire body because:
        // - it's guaranteed to exist,
        // - it works (unlike, say, document.head, or phantom element that is
        //   not inserted into the DOM),
        // - it doesn't seem to flicker (due to the synchronous copy event), and
        // - it avoids modifying the DOM (can trigger mutation observers).
        //
        // Because we can't do proper feature detection (we already checked
        // document.queryCommandEnabled("copy") , which actually gives a false
        // negative for Blink when nothing is selected) and UA sniffing is not
        // reliable (a lot of UA strings contain "Safari"), this will also
        // happen for some browsers other than Safari. :-()
        var range = document.createRange();
        range.selectNodeContents(document.body);
        sel.removeAllRanges();
        sel.addRange(range);
        _bogusSelection = true;
      }
    };

    return function(data) {
      return new Promise(function(resolve, reject) {
        _intercept = true;
        if (typeof data === "string") {
          _data = {"text/plain": data};
        } else if (data instanceof Node) {
          _data = {"text/html": new XMLSerializer().serializeToString(data)};
        } else if (data instanceof Object){
          _data = data;
        } else {
          reject("Invalid data type. Must be string, DOM node, or an object mapping MIME types to strings.")
        }

        function triggerCopy(tryBogusSelect) {
          try {
            if (document.execCommand("copy")) {
              // document.execCommand is synchronous: http://www.w3.org/TR/2015/WD-clipboard-apis-20150421/#integration-with-rich-text-editing-apis
              // So we can call resolve() back here.
              cleanup();
              resolve();
            }
            else {
              if (!tryBogusSelect) {
                bogusSelect();
                triggerCopy(true);
              } else {
                cleanup();
                throw new Error("Unable to copy. Perhaps it's not available in your browser?");
              }
            }
          } catch (e) {
            cleanup();
            reject(e);
          }
        }
        triggerCopy(false);

      });
    };
  })();

  clipboard.paste = (function() {
    var _intercept = false;
    var _resolve;
    var _dataType;

    document.addEventListener("paste", function(e) {
      if (_intercept) {
        _intercept = false;
        e.preventDefault();
        var resolve = _resolve;
        _resolve = null;
        resolve(e.clipboardData.getData(_dataType));
      }
    });

    return function(dataType) {
      return new Promise(function(resolve, reject) {
        _intercept = true;
        _resolve = resolve;
        _dataType = dataType || "text/plain";
        try {
          if (!document.execCommand("paste")) {
            _intercept = false;
            reject(new Error("Unable to paste. Pasting only works in Internet Explorer at the moment."));
          }
        } catch (e) {
          _intercept = false;
          reject(new Error(e));
        }
      });
    };
  })();

  // Handle IE behaviour.
  if (typeof ClipboardEvent === "undefined" &&
      typeof window.clipboardData !== "undefined" &&
      typeof window.clipboardData.setData !== "undefined") {

    /*! promise-polyfill 2.0.1 */
    (function(a){function b(a,b){return function(){a.apply(b,arguments)}}function c(a){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof a)throw new TypeError("not a function");this._state=null,this._value=null,this._deferreds=[],i(a,b(e,this),b(f,this))}function d(a){var b=this;return null===this._state?void this._deferreds.push(a):void j(function(){var c=b._state?a.onFulfilled:a.onRejected;if(null===c)return void(b._state?a.resolve:a.reject)(b._value);var d;try{d=c(b._value)}catch(e){return void a.reject(e)}a.resolve(d)})}function e(a){try{if(a===this)throw new TypeError("A promise cannot be resolved with itself.");if(a&&("object"==typeof a||"function"==typeof a)){var c=a.then;if("function"==typeof c)return void i(b(c,a),b(e,this),b(f,this))}this._state=!0,this._value=a,g.call(this)}catch(d){f.call(this,d)}}function f(a){this._state=!1,this._value=a,g.call(this)}function g(){for(var a=0,b=this._deferreds.length;b>a;a++)d.call(this,this._deferreds[a]);this._deferreds=null}function h(a,b,c,d){this.onFulfilled="function"==typeof a?a:null,this.onRejected="function"==typeof b?b:null,this.resolve=c,this.reject=d}function i(a,b,c){var d=!1;try{a(function(a){d||(d=!0,b(a))},function(a){d||(d=!0,c(a))})}catch(e){if(d)return;d=!0,c(e)}}var j=c.immediateFn||"function"==typeof setImmediate&&setImmediate||function(a){setTimeout(a,1)},k=Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)};c.prototype["catch"]=function(a){return this.then(null,a)},c.prototype.then=function(a,b){var e=this;return new c(function(c,f){d.call(e,new h(a,b,c,f))})},c.all=function(){var a=Array.prototype.slice.call(1===arguments.length&&k(arguments[0])?arguments[0]:arguments);return new c(function(b,c){function d(f,g){try{if(g&&("object"==typeof g||"function"==typeof g)){var h=g.then;if("function"==typeof h)return void h.call(g,function(a){d(f,a)},c)}a[f]=g,0===--e&&b(a)}catch(i){c(i)}}if(0===a.length)return b([]);for(var e=a.length,f=0;f<a.length;f++)d(f,a[f])})},c.resolve=function(a){return a&&"object"==typeof a&&a.constructor===c?a:new c(function(b){b(a)})},c.reject=function(a){return new c(function(b,c){c(a)})},c.race=function(a){return new c(function(b,c){for(var d=0,e=a.length;e>d;d++)a[d].then(b,c)})},"undefined"!=typeof module&&module.exports?module.exports=c:a.Promise||(a.Promise=c)})(this);

    clipboard.copy = function(data) {
      return new Promise(function(resolve, reject) {
        // IE supports string and URL types: https://msdn.microsoft.com/en-us/library/ms536744(v=vs.85).aspx
        // We only support the string type for now.
        if (typeof data !== "string" && !("text/plain" in data)) {
          throw new Error("You must provide a text/plain type.");
        }

        var strData = (typeof data === "string" ? data : data["text/plain"]);
        var copySucceeded = window.clipboardData.setData("Text", strData);
        if (copySucceeded) {
          resolve();
        } else {
          reject(new Error("Copying was rejected."));
        }
      });
    };

    clipboard.paste = function() {
      return new Promise(function(resolve, reject) {
        var strData = window.clipboardData.getData("Text");
        if (strData) {
          resolve(strData);
        } else {
          // The user rejected the paste request.
          reject(new Error("Pasting was rejected."));
        }
      });
    };
  }

  return clipboard;
}));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(634).setImmediate))

/***/ }),
/* 634 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(635);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80)))

/***/ }),
/* 635 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(80), __webpack_require__(636)))

/***/ }),
/* 636 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);
});

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Circos; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var circos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony import */ var circos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(circos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Circos_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Dash Circos is a library used to analyze and interpret
 * data using a circular layout, based on the popular
 * 'Circos' graph. This Dash Bio component is a useful tool
 * for showcasing relationships bewtween data/datasets in a
 * beautiful way. Please checkout the Dash Bio repository
 * on github to learn more about this API.
 */

var Circos =
/*#__PURE__*/
function (_Component) {
  _inherits(Circos, _Component);

  function Circos(props) {
    var _this;

    _classCallCheck(this, Circos);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Circos).call(this, props));
    _this.circos = null;
    _this.configCircos = _this.configCircos.bind(_assertThisInitialized(_this));
    _this.setEvent = _this.setEvent.bind(_assertThisInitialized(_this));
    _this.setColor = _this.setColor.bind(_assertThisInitialized(_this));
    _this.setToolTip = _this.setToolTip.bind(_assertThisInitialized(_this));
    _this.stopScroll = _this.stopScroll.bind(_assertThisInitialized(_this));
    _this.setStopScroll = _this.setStopScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Circos, [{
    key: "stopScroll",
    value: function stopScroll(e) {
      e.preventDefault();
    }
  }, {
    key: "setStopScroll",
    value: function setStopScroll(stop) {
      if (stop) {
        this.ref.addEventListener('wheel', this.stopScroll);
      } else {
        this.ref.removeEventListener('wheel', this.stopScroll);
      }
    }
  }, {
    key: "setEvent",
    value: function setEvent(setProps, index) {
      /**
       * Used to set a click or hover event on tracks/layout that will show annotations for the circos grpah.
       **/
      if (typeof this.props.selectEvent !== 'undefined') {
        if (this.props.selectEvent[index] === 'both') {
          return {
            'click.alert': function clickAlert(datum) {
              setProps({
                eventDatum: datum
              });
            },
            'mouseover.alert': function mouseoverAlert(datum) {
              setProps({
                eventDatum: datum
              });
            }
          };
        } else if (this.props.selectEvent[index] === 'hover') {
          return {
            'mouseover.alert': function mouseoverAlert(datum) {
              setProps({
                eventDatum: datum
              });
            }
          };
        } else if (this.props.selectEvent[index] === 'click') {
          return {
            'click.alert': function clickAlert(datum) {
              setProps({
                eventDatum: datum
              });
            }
          };
        }
      }

      return {};
    }
  }, {
    key: "setColor",
    value: function setColor(configApply) {
      /**
       * Allows user to specify a color prop, that will iterate through the colors
       * in the dataset provided, and apply them directly to the tracks/layout specified
       * by ID.
       */
      if (typeof configApply.color !== 'undefined') {
        if (typeof configApply.color.name !== 'undefined') {
          var colorName = configApply.color.name;

          configApply.color = function (d) {
            return d[colorName];
          };
        } else if (typeof configApply.color.conditional !== 'undefined') {
          var condColor = configApply.color.conditional;

          configApply.color = function (d) {
            var returnedColor;

            for (var i = 0; i < condColor.value.length; i++) {
              if (d[condColor.end] - d[condColor.start] > condColor.value[i]) {
                returnedColor = condColor.color[i];
                break;
              }
            }

            return returnedColor;
          };
        }
      }
    }
  }, {
    key: "setToolTip",
    value: function setToolTip(configApply) {
      /**
       * Set the tool tip event handler. It allows the user to specify what data they want
       * to show on annotation click or hover
       */
      if (typeof configApply.tooltipContent !== 'undefined') {
        if (typeof configApply.tooltipContent.name !== 'undefined') {
          if (configApply.tooltipContent.name === 'all') {
            configApply.tooltipContent = function (d) {
              var contents = '';

              for (var key in d) {
                var keyUpper = key.charAt(0).toUpperCase() + key.slice(1);
                contents = '<p>' + keyUpper + ' : ' + d[key] + '</p>' + contents;
              }

              return '<p>' + contents + '</p>';
            };
          } else {
            var toolName = configApply.tooltipContent.name;

            configApply.tooltipContent = function (d) {
              return d[toolName];
            };
          }
        } else if (typeof configApply.tooltipContent.source !== 'undefined') {
          var tooltipData = configApply.tooltipContent;

          if (typeof tooltipData.sourceID !== 'undefined' && typeof tooltipData.targetID !== 'undefined') {
            configApply.tooltipContent = function (d) {
              return '<h3>' + d[tooltipData.source][tooltipData.sourceID] + ' ➤ ' + d[tooltipData.target][tooltipData.targetID] + ': ' + d[tooltipData.target][tooltipData.targetEnd] + '</h3>';
            };
          } else {
            configApply.tooltipContent = function (d) {
              return '<h3>' + d[tooltipData.source] + ' ➤ ' + d[tooltipData.target] + ': ' + d[tooltipData.targetEnd] + '</h3>';
            };
          }
        }
      } else {
        configApply.tooltipContent = null;
      }
    }
  }, {
    key: "configCircos",
    value: function configCircos(layout, config, tracks, setProps) {
      var _this2 = this;

      this.circos.layout(layout, config);

      if (tracks) {
        tracks.forEach(function (track, index) {
          var id = track.id,
              data = track.data,
              config = track.config,
              type = track.type; // Since config is const, can't manipulate and throws error

          var configApply;

          if (config !== undefined) {
            configApply = config; // Set Event Handling

            configApply.events = _this2.setEvent(setProps, index); // Set Color

            _this2.setColor(configApply); // Set Tooltip


            _this2.setToolTip(configApply);
          }

          _this2.circos[type.toLowerCase()](id || "track-".concat(index), data, configApply);
        });
      }

      this.circos.render();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          enableDownloadSVG = _this$props.enableDownloadSVG,
          enableZoomPan = _this$props.enableZoomPan,
          size = _this$props.size,
          layout = _this$props.layout,
          config = _this$props.config,
          tracks = _this$props.tracks,
          setProps = _this$props.setProps;
      this.circos = new circos__WEBPACK_IMPORTED_MODULE_1___default.a({
        container: this.ref,
        width: size,
        height: size,
        enableZoomPan: enableZoomPan,
        enableDownloadSVG: enableDownloadSVG
      });
      this.configCircos(layout, config, tracks, setProps);
      this.setStopScroll(enableZoomPan);
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return this.props.config !== nextProps.config || this.props.layout !== nextProps.layout || this.props.tracks !== nextProps.tracks || this.props.size !== nextProps.size || this.props.selectEvent !== nextProps.selectEvent;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props2 = this.props,
          size = _this$props2.size,
          layout = _this$props2.layout,
          config = _this$props2.config,
          tracks = _this$props2.tracks,
          setProps = _this$props2.setProps;
      this.circos.removeTracks();
      this.container = this.ref;
      this.circos.width = size;
      this.circos.height = size;
      this.configCircos(layout, config, tracks, setProps);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.setStopScroll(false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          id = _this$props3.id,
          style = _this$props3.style,
          config = _this$props3.config,
          layout = _this$props3.layout,
          tracks = _this$props3.tracks,
          size = _this$props3.size,
          eventDatum = _this$props3.eventDatum;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id,
        style: style,
        eventDatum: eventDatum
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "Circos-container",
        ref: function ref(_ref) {
          _this3.ref = _ref;
        },
        config: config,
        layout: layout,
        tracks: tracks,
        size: size
      }));
    }
  }]);

  return Circos;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Circos.defaultProps = _components_Circos_react__WEBPACK_IMPORTED_MODULE_2__[/* defaultProps */ "b"];
Circos.propTypes = _components_Circos_react__WEBPACK_IMPORTED_MODULE_2__[/* propTypes */ "c"];

/***/ })

}]);