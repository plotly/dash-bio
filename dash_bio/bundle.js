window["dash_bio"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		9: 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"async~alignment","1":"async~moleculeviewer3","2":"async~circos","3":"async~ideogram","4":"async~moleculeviewer2","5":"async~needle","6":"async~onco","7":"async~sequence","8":"async~speck"}[chunkId]||chunkId) + ".js"
/******/ 	}
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var head = document.getElementsByTagName('head')[0];
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							var error = new Error('Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')');
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ 	var getCurrentScript = function() {
/******/ 	    var script = document.currentScript;
/******/ 	    if (!script) {
/******/ 	        /* Shim for IE11 and below */
/******/ 	        /* Do not take into account async scripts and inline scripts */
/******/ 	        var scripts = Array.from(document.getElementsByTagName('script')).filter(function(s) { return !s.async && !s.text && !s.textContent; });
/******/ 	        script = scripts.slice(-1)[0];
/******/ 	    }
/******/
/******/ 	    return script;
/******/ 	};
/******/
/******/ 	var isLocalScript = function(script) {
/******/ 	    return /\/_dash-component-suites\//.test(script.src);
/******/ 	};
/******/
/******/ 	Object.defineProperty(__webpack_require__, 'p', {
/******/ 	    get: (function () {
/******/ 	        var script = getCurrentScript();
/******/
/******/ 	        var url = script.src.split('/').slice(0, -1).join('/') + '/';
/******/
/******/ 	        return function() {
/******/ 	            return url;
/******/ 	        };
/******/ 	    })()
/******/ 	});
/******/
/******/ 	var __jsonpScriptSrc__ = jsonpScriptSrc;
/******/ 	jsonpScriptSrc = function(chunkId) {
/******/ 	    var script = getCurrentScript();
/******/ 	    var isLocal = isLocalScript(script);
/******/
/******/ 	    var src = __jsonpScriptSrc__(chunkId);
/******/
/******/ 	    if(!isLocal) {
/******/ 	        return src;
/******/ 	    }
/******/
/******/ 	    var srcFragments = src.split('/');
/******/ 	    var fileFragments = srcFragments.slice(-1)[0].split('.');
/******/
/******/ 	    fileFragments.splice(1, 0, "v0_4_1m1573165964");
/******/ 	    srcFragments.splice(-1, 1, fileFragments.join('.'))
/******/
/******/ 	    return srcFragments.join('/');
/******/ 	};
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(23)();
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* eslint-disable no-inline-comments */
/* harmony default export */ __webpack_exports__["a"] = ({
  alignmentChart: function alignmentChart() {
    return __webpack_require__.e(/* import() | alignment */ 0).then(__webpack_require__.bind(null, 34));
  },
  circos: function circos() {
    return __webpack_require__.e(/* import() | circos */ 2).then(__webpack_require__.bind(null, 35));
  },
  ideogram: function ideogram() {
    return Promise.all(/* import() | ideogram */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, 36));
  },
  molecule2dViewer: function molecule2dViewer() {
    return Promise.all(/* import() | moleculeviewer2 */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, 37));
  },
  molecule3dViewer: function molecule3dViewer() {
    return Promise.all(/* import() | moleculeviewer3 */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, 38));
  },
  needlePlot: function needlePlot() {
    return Promise.all(/* import() | needle */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, 41));
  },
  oncoPrint: function oncoPrint() {
    return Promise.all(/* import() | onco */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, 39));
  },
  sequenceViewer: function sequenceViewer() {
    return Promise.all(/* import() | sequence */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, 40));
  },
  speck: function speck() {
    return __webpack_require__.e(/* import() | speck */ 8).then(__webpack_require__.bind(null, 42));
  }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry1; });
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _isPlaceholder; });
function _isPlaceholder(a) {
       return a != null && typeof a === 'object' && a['@@functional/placeholder'] === true;
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _has; });
function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {};
module.exports[0] = module.exports['Xx'] = {
  'symbol': 'Xx',
  'name': 'unknown',
  'mass': 1.00000000,
  'radius': 1.0000,
  'color': [1.000, 0.078, 0.576],
  'number': 0
};
module.exports[1] = module.exports['H'] = {
  'symbol': 'H',
  'name': 'hydrogen',
  'mass': 1.00794000,
  'radius': 0.3100,
  'color': [1.000, 1.000, 1.000],
  'number': 1
};
module.exports[2] = module.exports['He'] = {
  'symbol': 'He',
  'name': 'helium',
  'mass': 4.00260200,
  'radius': 0.2800,
  'color': [0.851, 1.000, 1.000],
  'number': 2
};
module.exports[3] = module.exports['Li'] = {
  'symbol': 'Li',
  'name': 'lithium',
  'mass': 6.94100000,
  'radius': 1.2800,
  'color': [0.800, 0.502, 1.000],
  'number': 3
};
module.exports[4] = module.exports['Be'] = {
  'symbol': 'Be',
  'name': 'beryllium',
  'mass': 9.01218200,
  'radius': 0.9600,
  'color': [0.761, 1.000, 0.000],
  'number': 4
};
module.exports[5] = module.exports['B'] = {
  'symbol': 'B',
  'name': 'boron',
  'mass': 10.81100000,
  'radius': 0.8400,
  'color': [1.000, 0.710, 0.710],
  'number': 5
};
module.exports[6] = module.exports['C'] = {
  'symbol': 'C',
  'name': 'carbon',
  'mass': 12.01070000,
  'radius': 0.7300,
  'color': [0.565, 0.565, 0.565],
  'number': 6
};
module.exports[7] = module.exports['N'] = {
  'symbol': 'N',
  'name': 'nitrogen',
  'mass': 14.00670000,
  'radius': 0.7100,
  'color': [0.188, 0.314, 0.973],
  'number': 7
};
module.exports[8] = module.exports['O'] = {
  'symbol': 'O',
  'name': 'oxygen',
  'mass': 15.99940000,
  'radius': 0.6600,
  'color': [1.000, 0.051, 0.051],
  'number': 8
};
module.exports[9] = module.exports['F'] = {
  'symbol': 'F',
  'name': 'fluorine',
  'mass': 18.99840320,
  'radius': 0.5700,
  'color': [0.565, 0.878, 0.314],
  'number': 9
};
module.exports[10] = module.exports['Ne'] = {
  'symbol': 'Ne',
  'name': 'neon',
  'mass': 20.17970000,
  'radius': 0.5800,
  'color': [0.702, 0.890, 0.961],
  'number': 10
};
module.exports[11] = module.exports['Na'] = {
  'symbol': 'Na',
  'name': 'sodium',
  'mass': 22.98976928,
  'radius': 1.6600,
  'color': [0.671, 0.361, 0.949],
  'number': 11
};
module.exports[12] = module.exports['Mg'] = {
  'symbol': 'Mg',
  'name': 'magnesium',
  'mass': 24.30500000,
  'radius': 1.4100,
  'color': [0.541, 1.000, 0.000],
  'number': 12
};
module.exports[13] = module.exports['Al'] = {
  'symbol': 'Al',
  'name': 'aluminum',
  'mass': 26.98153860,
  'radius': 1.2100,
  'color': [0.749, 0.651, 0.651],
  'number': 13
};
module.exports[14] = module.exports['Si'] = {
  'symbol': 'Si',
  'name': 'silicon',
  'mass': 28.08550000,
  'radius': 1.1100,
  'color': [0.941, 0.784, 0.627],
  'number': 14
};
module.exports[15] = module.exports['P'] = {
  'symbol': 'P',
  'name': 'phosphorus',
  'mass': 30.97376200,
  'radius': 1.0700,
  'color': [1.000, 0.502, 0.000],
  'number': 15
};
module.exports[16] = module.exports['S'] = {
  'symbol': 'S',
  'name': 'sulfur',
  'mass': 32.06500000,
  'radius': 1.0500,
  'color': [1.000, 1.000, 0.188],
  'number': 16
};
module.exports[17] = module.exports['Cl'] = {
  'symbol': 'Cl',
  'name': 'chlorine',
  'mass': 35.45300000,
  'radius': 1.0200,
  'color': [0.122, 0.941, 0.122],
  'number': 17
};
module.exports[18] = module.exports['Ar'] = {
  'symbol': 'Ar',
  'name': 'argon',
  'mass': 39.94800000,
  'radius': 1.0600,
  'color': [0.502, 0.820, 0.890],
  'number': 18
};
module.exports[19] = module.exports['K'] = {
  'symbol': 'K',
  'name': 'potassium',
  'mass': 39.09830000,
  'radius': 2.0300,
  'color': [0.561, 0.251, 0.831],
  'number': 19
};
module.exports[20] = module.exports['Ca'] = {
  'symbol': 'Ca',
  'name': 'calcium',
  'mass': 40.07800000,
  'radius': 1.7600,
  'color': [0.239, 1.000, 0.000],
  'number': 20
};
module.exports[21] = module.exports['Sc'] = {
  'symbol': 'Sc',
  'name': 'scandium',
  'mass': 44.95591200,
  'radius': 1.7000,
  'color': [0.902, 0.902, 0.902],
  'number': 21
};
module.exports[22] = module.exports['Ti'] = {
  'symbol': 'Ti',
  'name': 'titanium',
  'mass': 47.86700000,
  'radius': 1.6000,
  'color': [0.749, 0.761, 0.780],
  'number': 22
};
module.exports[23] = module.exports['V'] = {
  'symbol': 'V',
  'name': 'vanadium',
  'mass': 50.94150000,
  'radius': 1.5300,
  'color': [0.651, 0.651, 0.671],
  'number': 23
};
module.exports[24] = module.exports['Cr'] = {
  'symbol': 'Cr',
  'name': 'chromium',
  'mass': 51.99610000,
  'radius': 1.3900,
  'color': [0.541, 0.600, 0.780],
  'number': 24
};
module.exports[25] = module.exports['Mn'] = {
  'symbol': 'Mn',
  'name': 'manganese',
  'mass': 54.93804500,
  'radius': 1.3900,
  'color': [0.611, 0.478, 0.780],
  'number': 25
};
module.exports[26] = module.exports['Fe'] = {
  'symbol': 'Fe',
  'name': 'iron',
  'mass': 55.84500000,
  'radius': 1.3200,
  'color': [0.878, 0.400, 0.200],
  'number': 26
};
module.exports[27] = module.exports['Co'] = {
  'symbol': 'Co',
  'name': 'cobalt',
  'mass': 58.69340000,
  'radius': 1.2600,
  'color': [0.941, 0.565, 0.627],
  'number': 27
};
module.exports[28] = module.exports['Ni'] = {
  'symbol': 'Ni',
  'name': 'nickel',
  'mass': 58.93319500,
  'radius': 1.2400,
  'color': [0.314, 0.816, 0.314],
  'number': 28
};
module.exports[29] = module.exports['Cu'] = {
  'symbol': 'Cu',
  'name': 'copper',
  'mass': 63.54600000,
  'radius': 1.3200,
  'color': [0.784, 0.502, 0.200],
  'number': 29
};
module.exports[30] = module.exports['Zn'] = {
  'symbol': 'Zn',
  'name': 'zinc',
  'mass': 65.38000000,
  'radius': 1.2200,
  'color': [0.490, 0.502, 0.690],
  'number': 30
};
module.exports[31] = module.exports['Ga'] = {
  'symbol': 'Ga',
  'name': 'gallium',
  'mass': 69.72300000,
  'radius': 1.2200,
  'color': [0.761, 0.561, 0.561],
  'number': 31
};
module.exports[32] = module.exports['Ge'] = {
  'symbol': 'Ge',
  'name': 'germanium',
  'mass': 72.64000000,
  'radius': 1.2000,
  'color': [0.400, 0.561, 0.561],
  'number': 32
};
module.exports[33] = module.exports['As'] = {
  'symbol': 'As',
  'name': 'arsenic',
  'mass': 74.92160000,
  'radius': 1.1900,
  'color': [0.741, 0.502, 0.890],
  'number': 33
};
module.exports[34] = module.exports['Se'] = {
  'symbol': 'Se',
  'name': 'selenium',
  'mass': 78.96000000,
  'radius': 1.2000,
  'color': [1.000, 0.631, 0.000],
  'number': 34
};
module.exports[35] = module.exports['Br'] = {
  'symbol': 'Br',
  'name': 'bromine',
  'mass': 79.90400000,
  'radius': 1.2000,
  'color': [0.651, 0.161, 0.161],
  'number': 35
};
module.exports[36] = module.exports['Kr'] = {
  'symbol': 'Kr',
  'name': 'krypton',
  'mass': 83.79800000,
  'radius': 1.1600,
  'color': [0.361, 0.722, 0.820],
  'number': 36
};
module.exports[37] = module.exports['Rb'] = {
  'symbol': 'Rb',
  'name': 'rubidium',
  'mass': 85.46780000,
  'radius': 2.2000,
  'color': [0.439, 0.180, 0.690],
  'number': 37
};
module.exports[38] = module.exports['Sr'] = {
  'symbol': 'Sr',
  'name': 'strontium',
  'mass': 87.62000000,
  'radius': 1.9500,
  'color': [0.000, 1.000, 0.000],
  'number': 38
};
module.exports[39] = module.exports['Y'] = {
  'symbol': 'Y',
  'name': 'yttrium',
  'mass': 88.90585000,
  'radius': 1.9000,
  'color': [0.580, 1.000, 1.000],
  'number': 39
};
module.exports[40] = module.exports['Zr'] = {
  'symbol': 'Zr',
  'name': 'zirconium',
  'mass': 91.22400000,
  'radius': 1.7500,
  'color': [0.580, 0.878, 0.878],
  'number': 40
};
module.exports[41] = module.exports['Nb'] = {
  'symbol': 'Nb',
  'name': 'niobium',
  'mass': 92.90638000,
  'radius': 1.6400,
  'color': [0.451, 0.761, 0.788],
  'number': 41
};
module.exports[42] = module.exports['Mo'] = {
  'symbol': 'Mo',
  'name': 'molybdenum',
  'mass': 95.96000000,
  'radius': 1.5400,
  'color': [0.329, 0.710, 0.710],
  'number': 42
};
module.exports[43] = module.exports['Tc'] = {
  'symbol': 'Tc',
  'name': 'technetium',
  'mass': 98.00000000,
  'radius': 1.4700,
  'color': [0.231, 0.620, 0.620],
  'number': 43
};
module.exports[44] = module.exports['Ru'] = {
  'symbol': 'Ru',
  'name': 'ruthenium',
  'mass': 101.07000000,
  'radius': 1.4600,
  'color': [0.141, 0.561, 0.561],
  'number': 44
};
module.exports[45] = module.exports['Rh'] = {
  'symbol': 'Rh',
  'name': 'rhodium',
  'mass': 102.90550000,
  'radius': 1.4200,
  'color': [0.039, 0.490, 0.549],
  'number': 45
};
module.exports[46] = module.exports['Pd'] = {
  'symbol': 'Pd',
  'name': 'palladium',
  'mass': 106.42000000,
  'radius': 1.3900,
  'color': [0.000, 0.412, 0.522],
  'number': 46
};
module.exports[47] = module.exports['Ag'] = {
  'symbol': 'Ag',
  'name': 'silver',
  'mass': 107.86820000,
  'radius': 1.4500,
  'color': [0.753, 0.753, 0.753],
  'number': 47
};
module.exports[48] = module.exports['Cd'] = {
  'symbol': 'Cd',
  'name': 'cadmium',
  'mass': 112.41100000,
  'radius': 1.4400,
  'color': [1.000, 0.851, 0.561],
  'number': 48
};
module.exports[49] = module.exports['In'] = {
  'symbol': 'In',
  'name': 'indium',
  'mass': 114.81800000,
  'radius': 1.4200,
  'color': [0.651, 0.459, 0.451],
  'number': 49
};
module.exports[50] = module.exports['Sn'] = {
  'symbol': 'Sn',
  'name': 'tin',
  'mass': 118.71000000,
  'radius': 1.3900,
  'color': [0.400, 0.502, 0.502],
  'number': 50
};
module.exports[51] = module.exports['Sb'] = {
  'symbol': 'Sb',
  'name': 'antimony',
  'mass': 121.76000000,
  'radius': 1.3900,
  'color': [0.620, 0.388, 0.710],
  'number': 51
};
module.exports[52] = module.exports['Te'] = {
  'symbol': 'Te',
  'name': 'tellurium',
  'mass': 127.60000000,
  'radius': 1.3800,
  'color': [0.831, 0.478, 0.000],
  'number': 52
};
module.exports[53] = module.exports['I'] = {
  'symbol': 'I',
  'name': 'iodine',
  'mass': 126.90470000,
  'radius': 1.3900,
  'color': [0.580, 0.000, 0.580],
  'number': 53
};
module.exports[54] = module.exports['Xe'] = {
  'symbol': 'Xe',
  'name': 'xenon',
  'mass': 131.29300000,
  'radius': 1.4000,
  'color': [0.259, 0.620, 0.690],
  'number': 54
};
module.exports[55] = module.exports['Cs'] = {
  'symbol': 'Cs',
  'name': 'cesium',
  'mass': 132.90545190,
  'radius': 2.4400,
  'color': [0.341, 0.090, 0.561],
  'number': 55
};
module.exports[56] = module.exports['Ba'] = {
  'symbol': 'Ba',
  'name': 'barium',
  'mass': 137.32700000,
  'radius': 2.1500,
  'color': [0.000, 0.788, 0.000],
  'number': 56
};
module.exports[57] = module.exports['La'] = {
  'symbol': 'La',
  'name': 'lanthanum',
  'mass': 138.90547000,
  'radius': 2.0700,
  'color': [0.439, 0.831, 1.000],
  'number': 57
};
module.exports[58] = module.exports['Ce'] = {
  'symbol': 'Ce',
  'name': 'cerium',
  'mass': 140.11600000,
  'radius': 2.0400,
  'color': [1.000, 1.000, 0.780],
  'number': 58
};
module.exports[59] = module.exports['Pr'] = {
  'symbol': 'Pr',
  'name': 'praseodymium',
  'mass': 140.90765000,
  'radius': 2.0300,
  'color': [0.851, 1.000, 0.780],
  'number': 59
};
module.exports[60] = module.exports['Nd'] = {
  'symbol': 'Nd',
  'name': 'neodymium',
  'mass': 144.24200000,
  'radius': 2.0100,
  'color': [0.780, 1.000, 0.780],
  'number': 60
};
module.exports[61] = module.exports['Pm'] = {
  'symbol': 'Pm',
  'name': 'promethium',
  'mass': 145.00000000,
  'radius': 1.9900,
  'color': [0.639, 1.000, 0.780],
  'number': 61
};
module.exports[62] = module.exports['Sm'] = {
  'symbol': 'Sm',
  'name': 'samarium',
  'mass': 150.36000000,
  'radius': 1.9800,
  'color': [0.561, 1.000, 0.780],
  'number': 62
};
module.exports[63] = module.exports['Eu'] = {
  'symbol': 'Eu',
  'name': 'europium',
  'mass': 151.96400000,
  'radius': 1.9800,
  'color': [0.380, 1.000, 0.780],
  'number': 63
};
module.exports[64] = module.exports['Gd'] = {
  'symbol': 'Gd',
  'name': 'gadolinium',
  'mass': 157.25000000,
  'radius': 1.9600,
  'color': [0.271, 1.000, 0.780],
  'number': 64
};
module.exports[65] = module.exports['Tb'] = {
  'symbol': 'Tb',
  'name': 'terbium',
  'mass': 158.92535000,
  'radius': 1.9400,
  'color': [0.189, 1.000, 0.780],
  'number': 65
};
module.exports[66] = module.exports['Dy'] = {
  'symbol': 'Dy',
  'name': 'dysprosium',
  'mass': 162.50000000,
  'radius': 1.9200,
  'color': [0.122, 1.000, 0.780],
  'number': 66
};
module.exports[67] = module.exports['Ho'] = {
  'symbol': 'Ho',
  'name': 'holmium',
  'mass': 164.93032000,
  'radius': 1.9200,
  'color': [0.000, 1.000, 0.612],
  'number': 67
};
module.exports[68] = module.exports['Er'] = {
  'symbol': 'Er',
  'name': 'erbium',
  'mass': 167.25900000,
  'radius': 1.8900,
  'color': [0.000, 0.902, 0.459],
  'number': 68
};
module.exports[69] = module.exports['Tm'] = {
  'symbol': 'Tm',
  'name': 'thulium',
  'mass': 168.93421000,
  'radius': 1.9000,
  'color': [0.000, 0.831, 0.322],
  'number': 69
};
module.exports[70] = module.exports['Yb'] = {
  'symbol': 'Yb',
  'name': 'ytterbium',
  'mass': 173.05400000,
  'radius': 1.8700,
  'color': [0.000, 0.749, 0.220],
  'number': 70
};
module.exports[71] = module.exports['Lu'] = {
  'symbol': 'Lu',
  'name': 'lutetium',
  'mass': 174.96680000,
  'radius': 1.8700,
  'color': [0.000, 0.671, 0.141],
  'number': 71
};
module.exports[72] = module.exports['Hf'] = {
  'symbol': 'Hf',
  'name': 'hafnium',
  'mass': 178.49000000,
  'radius': 1.7500,
  'color': [0.302, 0.761, 1.000],
  'number': 72
};
module.exports[73] = module.exports['Ta'] = {
  'symbol': 'Ta',
  'name': 'tantalum',
  'mass': 180.94788000,
  'radius': 1.7000,
  'color': [0.302, 0.651, 1.000],
  'number': 73
};
module.exports[74] = module.exports['W'] = {
  'symbol': 'W',
  'name': 'tungsten',
  'mass': 183.84000000,
  'radius': 1.6200,
  'color': [0.129, 0.580, 0.839],
  'number': 74
};
module.exports[75] = module.exports['Re'] = {
  'symbol': 'Re',
  'name': 'rhenium',
  'mass': 186.20700000,
  'radius': 1.5100,
  'color': [0.149, 0.490, 0.671],
  'number': 75
};
module.exports[76] = module.exports['Os'] = {
  'symbol': 'Os',
  'name': 'osmium',
  'mass': 190.23000000,
  'radius': 1.4400,
  'color': [0.149, 0.400, 0.588],
  'number': 76
};
module.exports[77] = module.exports['Ir'] = {
  'symbol': 'Ir',
  'name': 'iridium',
  'mass': 192.21700000,
  'radius': 1.4100,
  'color': [0.090, 0.329, 0.529],
  'number': 77
};
module.exports[78] = module.exports['Pt'] = {
  'symbol': 'Pt',
  'name': 'platinum',
  'mass': 195.08400000,
  'radius': 1.3600,
  'color': [0.816, 0.816, 0.878],
  'number': 78
};
module.exports[79] = module.exports['Au'] = {
  'symbol': 'Au',
  'name': 'gold',
  'mass': 196.96656900,
  'radius': 1.3600,
  'color': [1.000, 0.820, 0.137],
  'number': 79
};
module.exports[80] = module.exports['Hg'] = {
  'symbol': 'Hg',
  'name': 'mercury',
  'mass': 200.59000000,
  'radius': 1.3200,
  'color': [0.722, 0.722, 0.816],
  'number': 80
};
module.exports[81] = module.exports['Tl'] = {
  'symbol': 'Tl',
  'name': 'thallium',
  'mass': 204.38330000,
  'radius': 1.4500,
  'color': [0.651, 0.329, 0.302],
  'number': 81
};
module.exports[82] = module.exports['Pb'] = {
  'symbol': 'Pb',
  'name': 'lead',
  'mass': 207.20000000,
  'radius': 1.4600,
  'color': [0.341, 0.349, 0.380],
  'number': 82
};
module.exports[83] = module.exports['Bi'] = {
  'symbol': 'Bi',
  'name': 'bismuth',
  'mass': 208.98040000,
  'radius': 1.4800,
  'color': [0.620, 0.310, 0.710],
  'number': 83
};
module.exports[84] = module.exports['Po'] = {
  'symbol': 'Po',
  'name': 'polonium',
  'mass': 210.00000000,
  'radius': 1.4000,
  'color': [0.671, 0.361, 0.000],
  'number': 84
};
module.exports[85] = module.exports['At'] = {
  'symbol': 'At',
  'name': 'astatine',
  'mass': 210.00000000,
  'radius': 1.5000,
  'color': [0.459, 0.310, 0.271],
  'number': 85
};
module.exports[86] = module.exports['Rn'] = {
  'symbol': 'Rn',
  'name': 'radon',
  'mass': 220.00000000,
  'radius': 1.5000,
  'color': [0.259, 0.510, 0.588],
  'number': 86
};
module.exports[87] = module.exports['Fr'] = {
  'symbol': 'Fr',
  'name': 'francium',
  'mass': 223.00000000,
  'radius': 2.6000,
  'color': [0.259, 0.000, 0.400],
  'number': 87
};
module.exports[88] = module.exports['Ra'] = {
  'symbol': 'Ra',
  'name': 'radium',
  'mass': 226.00000000,
  'radius': 2.2100,
  'color': [0.000, 0.490, 0.000],
  'number': 88
};
module.exports[89] = module.exports['Ac'] = {
  'symbol': 'Ac',
  'name': 'actinium',
  'mass': 227.00000000,
  'radius': 2.1500,
  'color': [0.439, 0.671, 0.980],
  'number': 89
};
module.exports[90] = module.exports['Th'] = {
  'symbol': 'Th',
  'name': 'thorium',
  'mass': 231.03588000,
  'radius': 2.0600,
  'color': [0.000, 0.729, 1.000],
  'number': 90
};
module.exports[91] = module.exports['Pa'] = {
  'symbol': 'Pa',
  'name': 'protactinium',
  'mass': 232.03806000,
  'radius': 2.0000,
  'color': [0.000, 0.631, 1.000],
  'number': 91
};
module.exports[92] = module.exports['U'] = {
  'symbol': 'U',
  'name': 'uranium',
  'mass': 237.00000000,
  'radius': 1.9600,
  'color': [0.000, 0.561, 1.000],
  'number': 92
};
module.exports[93] = module.exports['Np'] = {
  'symbol': 'Np',
  'name': 'neptunium',
  'mass': 238.02891000,
  'radius': 1.9000,
  'color': [0.000, 0.502, 1.000],
  'number': 93
};
module.exports[94] = module.exports['Pu'] = {
  'symbol': 'Pu',
  'name': 'plutonium',
  'mass': 243.00000000,
  'radius': 1.8700,
  'color': [0.000, 0.420, 1.000],
  'number': 94
};
module.exports[95] = module.exports['Am'] = {
  'symbol': 'Am',
  'name': 'americium',
  'mass': 244.00000000,
  'radius': 1.8000,
  'color': [0.329, 0.361, 0.949],
  'number': 95
};
module.exports[96] = module.exports['Cm'] = {
  'symbol': 'Cm',
  'name': 'curium',
  'mass': 247.00000000,
  'radius': 1.6900,
  'color': [0.471, 0.361, 0.890],
  'number': 96
};
module.exports[97] = module.exports['Bk'] = {
  'symbol': 'Bk',
  'name': 'berkelium',
  'mass': 247.00000000,
  'radius': 1.6600,
  'color': [0.541, 0.310, 0.890],
  'number': 97
};
module.exports[98] = module.exports['Cf'] = {
  'symbol': 'Cf',
  'name': 'californium',
  'mass': 251.00000000,
  'radius': 1.6800,
  'color': [0.631, 0.212, 0.831],
  'number': 98
};
module.exports[99] = module.exports['Es'] = {
  'symbol': 'Es',
  'name': 'einsteinium',
  'mass': 252.00000000,
  'radius': 1.6500,
  'color': [0.702, 0.122, 0.831],
  'number': 99
};
module.exports[100] = module.exports['Fm'] = {
  'symbol': 'Fm',
  'name': 'fermium',
  'mass': 257.00000000,
  'radius': 1.6700,
  'color': [0.702, 0.122, 0.729],
  'number': 100
};
module.exports[101] = module.exports['Md'] = {
  'symbol': 'Md',
  'name': 'mendelevium',
  'mass': 258.00000000,
  'radius': 1.7300,
  'color': [0.702, 0.051, 0.651],
  'number': 101
};
module.exports[102] = module.exports['No'] = {
  'symbol': 'No',
  'name': 'nobelium',
  'mass': 259.00000000,
  'radius': 1.7600,
  'color': [0.741, 0.051, 0.529],
  'number': 102
};
module.exports[103] = module.exports['Lr'] = {
  'symbol': 'Lr',
  'name': 'lawrencium',
  'mass': 262.00000000,
  'radius': 1.6100,
  'color': [0.780, 0.000, 0.400],
  'number': 103
};
module.exports[104] = module.exports['Rf'] = {
  'symbol': 'Rf',
  'name': 'rutherfordium',
  'mass': 261.00000000,
  'radius': 1.5700,
  'color': [0.800, 0.000, 0.349],
  'number': 104
};
module.exports[105] = module.exports['Db'] = {
  'symbol': 'Db',
  'name': 'dubnium',
  'mass': 262.00000000,
  'radius': 1.4900,
  'color': [0.820, 0.000, 0.310],
  'number': 105
};
module.exports[106] = module.exports['Sg'] = {
  'symbol': 'Sg',
  'name': 'seaborgium',
  'mass': 266.00000000,
  'radius': 1.4300,
  'color': [0.851, 0.000, 0.271],
  'number': 106
};
module.exports[107] = module.exports['Bh'] = {
  'symbol': 'Bh',
  'name': 'bohrium',
  'mass': 264.00000000,
  'radius': 1.4100,
  'color': [0.878, 0.000, 0.220],
  'number': 107
};
module.exports[108] = module.exports['Hs'] = {
  'symbol': 'Hs',
  'name': 'hassium',
  'mass': 277.00000000,
  'radius': 1.3400,
  'color': [0.902, 0.000, 0.180],
  'number': 108
};
module.exports[109] = module.exports['Mt'] = {
  'symbol': 'Mt',
  'name': 'meitnerium',
  'mass': 268.00000000,
  'radius': 1.2900,
  'color': [0.922, 0.000, 0.149],
  'number': 109
};
module.exports[110] = module.exports['Ds'] = {
  'symbol': 'Ds',
  'name': 'Ds',
  'mass': 271.00000000,
  'radius': 1.2800,
  'color': [0.922, 0.000, 0.149],
  'number': 110
};
module.exports[111] = module.exports['Uuu'] = {
  'symbol': 'Uuu',
  'name': 'Uuu',
  'mass': 272.00000000,
  'radius': 1.2100,
  'color': [0.922, 0.000, 0.149],
  'number': 111
};
module.exports[112] = module.exports['Uub'] = {
  'symbol': 'Uub',
  'name': 'Uub',
  'mass': 285.00000000,
  'radius': 1.2200,
  'color': [0.922, 0.000, 0.149],
  'number': 112
};
module.exports[113] = module.exports['Uut'] = {
  'symbol': 'Uut',
  'name': 'Uut',
  'mass': 284.00000000,
  'radius': 1.3600,
  'color': [0.922, 0.000, 0.149],
  'number': 113
};
module.exports[114] = module.exports['Uuq'] = {
  'symbol': 'Uuq',
  'name': 'Uuq',
  'mass': 289.00000000,
  'radius': 1.4300,
  'color': [0.922, 0.000, 0.149],
  'number': 114
};
module.exports[115] = module.exports['Uup'] = {
  'symbol': 'Uup',
  'name': 'Uup',
  'mass': 288.00000000,
  'radius': 1.6200,
  'color': [0.922, 0.000, 0.149],
  'number': 115
};
module.exports[116] = module.exports['Uuh'] = {
  'symbol': 'Uuh',
  'name': 'Uuh',
  'mass': 292.00000000,
  'radius': 1.7500,
  'color': [0.922, 0.000, 0.149],
  'number': 116
};
module.exports[117] = module.exports['Uus'] = {
  'symbol': 'Uus',
  'name': 'Uus',
  'mass': 294.00000000,
  'radius': 1.6500,
  'color': [0.922, 0.000, 0.149],
  'number': 117
};
module.exports[118] = module.exports['Uuo'] = {
  'symbol': 'Uuo',
  'name': 'Uuo',
  'mass': 296.00000000,
  'radius': 1.5700,
  'color': [0.922, 0.000, 0.149],
  'number': 118
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.2.2
 */

/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

  * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
  * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation
    and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */
(function (_global) {
  "use strict";

  var shim = {};

  if (false) {} else {
    // gl-matrix lives in commonjs, define its namespaces in exports
    shim.exports = exports;
  }

  (function (exports) {
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright notice, this
    list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright notice,
    this list of conditions and the following disclaimer in the documentation 
    and/or other materials provided with the distribution.
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */
    if (!GLMAT_EPSILON) {
      var GLMAT_EPSILON = 0.000001;
    }

    if (!GLMAT_ARRAY_TYPE) {
      var GLMAT_ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
    }

    if (!GLMAT_RANDOM) {
      var GLMAT_RANDOM = Math.random;
    }
    /**
     * @class Common utilities
     * @name glMatrix
     */


    var glMatrix = {};
    /**
     * Sets the type of array used when creating new vectors and matrices
     *
     * @param {Type} type Array type, such as Float32Array or Array
     */

    glMatrix.setMatrixArrayType = function (type) {
      GLMAT_ARRAY_TYPE = type;
    };

    if (typeof exports !== 'undefined') {
      exports.glMatrix = glMatrix;
    }

    var degree = Math.PI / 180;
    /**
    * Convert Degree To Radian
    *
    * @param {Number} Angle in Degrees
    */

    glMatrix.toRadian = function (a) {
      return a * degree;
    };
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class 2 Dimensional Vector
     * @name vec2
     */


    var vec2 = {};
    /**
     * Creates a new, empty vec2
     *
     * @returns {vec2} a new 2D vector
     */

    vec2.create = function () {
      var out = new GLMAT_ARRAY_TYPE(2);
      out[0] = 0;
      out[1] = 0;
      return out;
    };
    /**
     * Creates a new vec2 initialized with values from an existing vector
     *
     * @param {vec2} a vector to clone
     * @returns {vec2} a new 2D vector
     */


    vec2.clone = function (a) {
      var out = new GLMAT_ARRAY_TYPE(2);
      out[0] = a[0];
      out[1] = a[1];
      return out;
    };
    /**
     * Creates a new vec2 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} a new 2D vector
     */


    vec2.fromValues = function (x, y) {
      var out = new GLMAT_ARRAY_TYPE(2);
      out[0] = x;
      out[1] = y;
      return out;
    };
    /**
     * Copy the values from one vec2 to another
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the source vector
     * @returns {vec2} out
     */


    vec2.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      return out;
    };
    /**
     * Set the components of a vec2 to the given values
     *
     * @param {vec2} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @returns {vec2} out
     */


    vec2.set = function (out, x, y) {
      out[0] = x;
      out[1] = y;
      return out;
    };
    /**
     * Adds two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */


    vec2.add = function (out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      return out;
    };
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */


    vec2.subtract = function (out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      return out;
    };
    /**
     * Alias for {@link vec2.subtract}
     * @function
     */


    vec2.sub = vec2.subtract;
    /**
     * Multiplies two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */

    vec2.multiply = function (out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      return out;
    };
    /**
     * Alias for {@link vec2.multiply}
     * @function
     */


    vec2.mul = vec2.multiply;
    /**
     * Divides two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */

    vec2.divide = function (out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      return out;
    };
    /**
     * Alias for {@link vec2.divide}
     * @function
     */


    vec2.div = vec2.divide;
    /**
     * Returns the minimum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */

    vec2.min = function (out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      return out;
    };
    /**
     * Returns the maximum of two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec2} out
     */


    vec2.max = function (out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      return out;
    };
    /**
     * Scales a vec2 by a scalar number
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec2} out
     */


    vec2.scale = function (out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      return out;
    };
    /**
     * Adds two vec2's after scaling the second operand by a scalar value
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec2} out
     */


    vec2.scaleAndAdd = function (out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      return out;
    };
    /**
     * Calculates the euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} distance between a and b
     */


    vec2.distance = function (a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1];
      return Math.sqrt(x * x + y * y);
    };
    /**
     * Alias for {@link vec2.distance}
     * @function
     */


    vec2.dist = vec2.distance;
    /**
     * Calculates the squared euclidian distance between two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} squared distance between a and b
     */

    vec2.squaredDistance = function (a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1];
      return x * x + y * y;
    };
    /**
     * Alias for {@link vec2.squaredDistance}
     * @function
     */


    vec2.sqrDist = vec2.squaredDistance;
    /**
     * Calculates the length of a vec2
     *
     * @param {vec2} a vector to calculate length of
     * @returns {Number} length of a
     */

    vec2.length = function (a) {
      var x = a[0],
          y = a[1];
      return Math.sqrt(x * x + y * y);
    };
    /**
     * Alias for {@link vec2.length}
     * @function
     */


    vec2.len = vec2.length;
    /**
     * Calculates the squared length of a vec2
     *
     * @param {vec2} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    vec2.squaredLength = function (a) {
      var x = a[0],
          y = a[1];
      return x * x + y * y;
    };
    /**
     * Alias for {@link vec2.squaredLength}
     * @function
     */


    vec2.sqrLen = vec2.squaredLength;
    /**
     * Negates the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to negate
     * @returns {vec2} out
     */

    vec2.negate = function (out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      return out;
    };
    /**
     * Returns the inverse of the components of a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to invert
     * @returns {vec2} out
     */


    vec2.inverse = function (out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      return out;
    };
    /**
     * Normalize a vec2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a vector to normalize
     * @returns {vec2} out
     */


    vec2.normalize = function (out, a) {
      var x = a[0],
          y = a[1];
      var len = x * x + y * y;

      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
      }

      return out;
    };
    /**
     * Calculates the dot product of two vec2's
     *
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {Number} dot product of a and b
     */


    vec2.dot = function (a, b) {
      return a[0] * b[0] + a[1] * b[1];
    };
    /**
     * Computes the cross product of two vec2's
     * Note that the cross product must by definition produce a 3D vector
     *
     * @param {vec3} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @returns {vec3} out
     */


    vec2.cross = function (out, a, b) {
      var z = a[0] * b[1] - a[1] * b[0];
      out[0] = out[1] = 0;
      out[2] = z;
      return out;
    };
    /**
     * Performs a linear interpolation between two vec2's
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the first operand
     * @param {vec2} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec2} out
     */


    vec2.lerp = function (out, a, b, t) {
      var ax = a[0],
          ay = a[1];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      return out;
    };
    /**
     * Generates a random vector with the given scale
     *
     * @param {vec2} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec2} out
     */


    vec2.random = function (out, scale) {
      scale = scale || 1.0;
      var r = GLMAT_RANDOM() * 2.0 * Math.PI;
      out[0] = Math.cos(r) * scale;
      out[1] = Math.sin(r) * scale;
      return out;
    };
    /**
     * Transforms the vec2 with a mat2
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2} m matrix to transform with
     * @returns {vec2} out
     */


    vec2.transformMat2 = function (out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[2] * y;
      out[1] = m[1] * x + m[3] * y;
      return out;
    };
    /**
     * Transforms the vec2 with a mat2d
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat2d} m matrix to transform with
     * @returns {vec2} out
     */


    vec2.transformMat2d = function (out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[2] * y + m[4];
      out[1] = m[1] * x + m[3] * y + m[5];
      return out;
    };
    /**
     * Transforms the vec2 with a mat3
     * 3rd vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat3} m matrix to transform with
     * @returns {vec2} out
     */


    vec2.transformMat3 = function (out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[3] * y + m[6];
      out[1] = m[1] * x + m[4] * y + m[7];
      return out;
    };
    /**
     * Transforms the vec2 with a mat4
     * 3rd vector component is implicitly '0'
     * 4th vector component is implicitly '1'
     *
     * @param {vec2} out the receiving vector
     * @param {vec2} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec2} out
     */


    vec2.transformMat4 = function (out, a, m) {
      var x = a[0],
          y = a[1];
      out[0] = m[0] * x + m[4] * y + m[12];
      out[1] = m[1] * x + m[5] * y + m[13];
      return out;
    };
    /**
     * Perform some operation over an array of vec2s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */


    vec2.forEach = function () {
      var vec = vec2.create();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 2;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
        }

        return a;
      };
    }();
    /**
     * Returns a string representation of a vector
     *
     * @param {vec2} vec vector to represent as a string
     * @returns {String} string representation of the vector
     */


    vec2.str = function (a) {
      return 'vec2(' + a[0] + ', ' + a[1] + ')';
    };

    if (typeof exports !== 'undefined') {
      exports.vec2 = vec2;
    }

    ;
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class 3 Dimensional Vector
     * @name vec3
     */

    var vec3 = {};
    /**
     * Creates a new, empty vec3
     *
     * @returns {vec3} a new 3D vector
     */

    vec3.create = function () {
      var out = new GLMAT_ARRAY_TYPE(3);
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      return out;
    };
    /**
     * Creates a new vec3 initialized with values from an existing vector
     *
     * @param {vec3} a vector to clone
     * @returns {vec3} a new 3D vector
     */


    vec3.clone = function (a) {
      var out = new GLMAT_ARRAY_TYPE(3);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    };
    /**
     * Creates a new vec3 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} a new 3D vector
     */


    vec3.fromValues = function (x, y, z) {
      var out = new GLMAT_ARRAY_TYPE(3);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    };
    /**
     * Copy the values from one vec3 to another
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the source vector
     * @returns {vec3} out
     */


    vec3.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      return out;
    };
    /**
     * Set the components of a vec3 to the given values
     *
     * @param {vec3} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @returns {vec3} out
     */


    vec3.set = function (out, x, y, z) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      return out;
    };
    /**
     * Adds two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */


    vec3.add = function (out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      return out;
    };
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */


    vec3.subtract = function (out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      return out;
    };
    /**
     * Alias for {@link vec3.subtract}
     * @function
     */


    vec3.sub = vec3.subtract;
    /**
     * Multiplies two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    vec3.multiply = function (out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      return out;
    };
    /**
     * Alias for {@link vec3.multiply}
     * @function
     */


    vec3.mul = vec3.multiply;
    /**
     * Divides two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    vec3.divide = function (out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      return out;
    };
    /**
     * Alias for {@link vec3.divide}
     * @function
     */


    vec3.div = vec3.divide;
    /**
     * Returns the minimum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */

    vec3.min = function (out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      return out;
    };
    /**
     * Returns the maximum of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */


    vec3.max = function (out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      return out;
    };
    /**
     * Scales a vec3 by a scalar number
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec3} out
     */


    vec3.scale = function (out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      return out;
    };
    /**
     * Adds two vec3's after scaling the second operand by a scalar value
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec3} out
     */


    vec3.scaleAndAdd = function (out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      return out;
    };
    /**
     * Calculates the euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} distance between a and b
     */


    vec3.distance = function (a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1],
          z = b[2] - a[2];
      return Math.sqrt(x * x + y * y + z * z);
    };
    /**
     * Alias for {@link vec3.distance}
     * @function
     */


    vec3.dist = vec3.distance;
    /**
     * Calculates the squared euclidian distance between two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} squared distance between a and b
     */

    vec3.squaredDistance = function (a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1],
          z = b[2] - a[2];
      return x * x + y * y + z * z;
    };
    /**
     * Alias for {@link vec3.squaredDistance}
     * @function
     */


    vec3.sqrDist = vec3.squaredDistance;
    /**
     * Calculates the length of a vec3
     *
     * @param {vec3} a vector to calculate length of
     * @returns {Number} length of a
     */

    vec3.length = function (a) {
      var x = a[0],
          y = a[1],
          z = a[2];
      return Math.sqrt(x * x + y * y + z * z);
    };
    /**
     * Alias for {@link vec3.length}
     * @function
     */


    vec3.len = vec3.length;
    /**
     * Calculates the squared length of a vec3
     *
     * @param {vec3} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    vec3.squaredLength = function (a) {
      var x = a[0],
          y = a[1],
          z = a[2];
      return x * x + y * y + z * z;
    };
    /**
     * Alias for {@link vec3.squaredLength}
     * @function
     */


    vec3.sqrLen = vec3.squaredLength;
    /**
     * Negates the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to negate
     * @returns {vec3} out
     */

    vec3.negate = function (out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      return out;
    };
    /**
     * Returns the inverse of the components of a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to invert
     * @returns {vec3} out
     */


    vec3.inverse = function (out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      return out;
    };
    /**
     * Normalize a vec3
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a vector to normalize
     * @returns {vec3} out
     */


    vec3.normalize = function (out, a) {
      var x = a[0],
          y = a[1],
          z = a[2];
      var len = x * x + y * y + z * z;

      if (len > 0) {
        //TODO: evaluate use of glm_invsqrt here?
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
      }

      return out;
    };
    /**
     * Calculates the dot product of two vec3's
     *
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {Number} dot product of a and b
     */


    vec3.dot = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
    };
    /**
     * Computes the cross product of two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @returns {vec3} out
     */


    vec3.cross = function (out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          bx = b[0],
          by = b[1],
          bz = b[2];
      out[0] = ay * bz - az * by;
      out[1] = az * bx - ax * bz;
      out[2] = ax * by - ay * bx;
      return out;
    };
    /**
     * Performs a linear interpolation between two vec3's
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the first operand
     * @param {vec3} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec3} out
     */


    vec3.lerp = function (out, a, b, t) {
      var ax = a[0],
          ay = a[1],
          az = a[2];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      return out;
    };
    /**
     * Generates a random vector with the given scale
     *
     * @param {vec3} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec3} out
     */


    vec3.random = function (out, scale) {
      scale = scale || 1.0;
      var r = GLMAT_RANDOM() * 2.0 * Math.PI;
      var z = GLMAT_RANDOM() * 2.0 - 1.0;
      var zScale = Math.sqrt(1.0 - z * z) * scale;
      out[0] = Math.cos(r) * zScale;
      out[1] = Math.sin(r) * zScale;
      out[2] = z * scale;
      return out;
    };
    /**
     * Transforms the vec3 with a mat4.
     * 4th vector component is implicitly '1'
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec3} out
     */


    vec3.transformMat4 = function (out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = m[3] * x + m[7] * y + m[11] * z + m[15];
      w = w || 1.0;
      out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
      out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
      out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
      return out;
    };
    /**
     * Transforms the vec3 with a mat3.
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {mat4} m the 3x3 matrix to transform with
     * @returns {vec3} out
     */


    vec3.transformMat3 = function (out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2];
      out[0] = x * m[0] + y * m[3] + z * m[6];
      out[1] = x * m[1] + y * m[4] + z * m[7];
      out[2] = x * m[2] + y * m[5] + z * m[8];
      return out;
    };
    /**
     * Transforms the vec3 with a quat
     *
     * @param {vec3} out the receiving vector
     * @param {vec3} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec3} out
     */


    vec3.transformQuat = function (out, a, q) {
      // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
      var x = a[0],
          y = a[1],
          z = a[2],
          qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3],
          // calculate quat * vec
      ix = qw * x + qy * z - qz * y,
          iy = qw * y + qz * x - qx * z,
          iz = qw * z + qx * y - qy * x,
          iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

      out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      return out;
    };
    /**
     * Rotate a 3D vector around the x-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */


    vec3.rotateX = function (out, a, b, c) {
      var p = [],
          r = []; //Translate point to the origin

      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2]; //perform rotation

      r[0] = p[0];
      r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
      r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position

      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    };
    /**
     * Rotate a 3D vector around the y-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */


    vec3.rotateY = function (out, a, b, c) {
      var p = [],
          r = []; //Translate point to the origin

      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2]; //perform rotation

      r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
      r[1] = p[1];
      r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position

      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    };
    /**
     * Rotate a 3D vector around the z-axis
     * @param {vec3} out The receiving vec3
     * @param {vec3} a The vec3 point to rotate
     * @param {vec3} b The origin of the rotation
     * @param {Number} c The angle of rotation
     * @returns {vec3} out
     */


    vec3.rotateZ = function (out, a, b, c) {
      var p = [],
          r = []; //Translate point to the origin

      p[0] = a[0] - b[0];
      p[1] = a[1] - b[1];
      p[2] = a[2] - b[2]; //perform rotation

      r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
      r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
      r[2] = p[2]; //translate to correct position

      out[0] = r[0] + b[0];
      out[1] = r[1] + b[1];
      out[2] = r[2] + b[2];
      return out;
    };
    /**
     * Perform some operation over an array of vec3s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */


    vec3.forEach = function () {
      var vec = vec3.create();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 3;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
        }

        return a;
      };
    }();
    /**
     * Get the angle between two 3D vectors
     * @param {vec3} a The first operand
     * @param {vec3} b The second operand
     * @returns {Number} The angle in radians
     */


    vec3.angle = function (a, b) {
      var tempA = vec3.fromValues(a[0], a[1], a[2]);
      var tempB = vec3.fromValues(b[0], b[1], b[2]);
      vec3.normalize(tempA, tempA);
      vec3.normalize(tempB, tempB);
      var cosine = vec3.dot(tempA, tempB);

      if (cosine > 1.0) {
        return 0;
      } else {
        return Math.acos(cosine);
      }
    };
    /**
     * Returns a string representation of a vector
     *
     * @param {vec3} vec vector to represent as a string
     * @returns {String} string representation of the vector
     */


    vec3.str = function (a) {
      return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
    };

    if (typeof exports !== 'undefined') {
      exports.vec3 = vec3;
    }

    ;
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class 4 Dimensional Vector
     * @name vec4
     */

    var vec4 = {};
    /**
     * Creates a new, empty vec4
     *
     * @returns {vec4} a new 4D vector
     */

    vec4.create = function () {
      var out = new GLMAT_ARRAY_TYPE(4);
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      return out;
    };
    /**
     * Creates a new vec4 initialized with values from an existing vector
     *
     * @param {vec4} a vector to clone
     * @returns {vec4} a new 4D vector
     */


    vec4.clone = function (a) {
      var out = new GLMAT_ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    };
    /**
     * Creates a new vec4 initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} a new 4D vector
     */


    vec4.fromValues = function (x, y, z, w) {
      var out = new GLMAT_ARRAY_TYPE(4);
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    };
    /**
     * Copy the values from one vec4 to another
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the source vector
     * @returns {vec4} out
     */


    vec4.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    };
    /**
     * Set the components of a vec4 to the given values
     *
     * @param {vec4} out the receiving vector
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {vec4} out
     */


    vec4.set = function (out, x, y, z, w) {
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = w;
      return out;
    };
    /**
     * Adds two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */


    vec4.add = function (out, a, b) {
      out[0] = a[0] + b[0];
      out[1] = a[1] + b[1];
      out[2] = a[2] + b[2];
      out[3] = a[3] + b[3];
      return out;
    };
    /**
     * Subtracts vector b from vector a
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */


    vec4.subtract = function (out, a, b) {
      out[0] = a[0] - b[0];
      out[1] = a[1] - b[1];
      out[2] = a[2] - b[2];
      out[3] = a[3] - b[3];
      return out;
    };
    /**
     * Alias for {@link vec4.subtract}
     * @function
     */


    vec4.sub = vec4.subtract;
    /**
     * Multiplies two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */

    vec4.multiply = function (out, a, b) {
      out[0] = a[0] * b[0];
      out[1] = a[1] * b[1];
      out[2] = a[2] * b[2];
      out[3] = a[3] * b[3];
      return out;
    };
    /**
     * Alias for {@link vec4.multiply}
     * @function
     */


    vec4.mul = vec4.multiply;
    /**
     * Divides two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */

    vec4.divide = function (out, a, b) {
      out[0] = a[0] / b[0];
      out[1] = a[1] / b[1];
      out[2] = a[2] / b[2];
      out[3] = a[3] / b[3];
      return out;
    };
    /**
     * Alias for {@link vec4.divide}
     * @function
     */


    vec4.div = vec4.divide;
    /**
     * Returns the minimum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */

    vec4.min = function (out, a, b) {
      out[0] = Math.min(a[0], b[0]);
      out[1] = Math.min(a[1], b[1]);
      out[2] = Math.min(a[2], b[2]);
      out[3] = Math.min(a[3], b[3]);
      return out;
    };
    /**
     * Returns the maximum of two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {vec4} out
     */


    vec4.max = function (out, a, b) {
      out[0] = Math.max(a[0], b[0]);
      out[1] = Math.max(a[1], b[1]);
      out[2] = Math.max(a[2], b[2]);
      out[3] = Math.max(a[3], b[3]);
      return out;
    };
    /**
     * Scales a vec4 by a scalar number
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {vec4} out
     */


    vec4.scale = function (out, a, b) {
      out[0] = a[0] * b;
      out[1] = a[1] * b;
      out[2] = a[2] * b;
      out[3] = a[3] * b;
      return out;
    };
    /**
     * Adds two vec4's after scaling the second operand by a scalar value
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} scale the amount to scale b by before adding
     * @returns {vec4} out
     */


    vec4.scaleAndAdd = function (out, a, b, scale) {
      out[0] = a[0] + b[0] * scale;
      out[1] = a[1] + b[1] * scale;
      out[2] = a[2] + b[2] * scale;
      out[3] = a[3] + b[3] * scale;
      return out;
    };
    /**
     * Calculates the euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} distance between a and b
     */


    vec4.distance = function (a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1],
          z = b[2] - a[2],
          w = b[3] - a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    };
    /**
     * Alias for {@link vec4.distance}
     * @function
     */


    vec4.dist = vec4.distance;
    /**
     * Calculates the squared euclidian distance between two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} squared distance between a and b
     */

    vec4.squaredDistance = function (a, b) {
      var x = b[0] - a[0],
          y = b[1] - a[1],
          z = b[2] - a[2],
          w = b[3] - a[3];
      return x * x + y * y + z * z + w * w;
    };
    /**
     * Alias for {@link vec4.squaredDistance}
     * @function
     */


    vec4.sqrDist = vec4.squaredDistance;
    /**
     * Calculates the length of a vec4
     *
     * @param {vec4} a vector to calculate length of
     * @returns {Number} length of a
     */

    vec4.length = function (a) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      return Math.sqrt(x * x + y * y + z * z + w * w);
    };
    /**
     * Alias for {@link vec4.length}
     * @function
     */


    vec4.len = vec4.length;
    /**
     * Calculates the squared length of a vec4
     *
     * @param {vec4} a vector to calculate squared length of
     * @returns {Number} squared length of a
     */

    vec4.squaredLength = function (a) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      return x * x + y * y + z * z + w * w;
    };
    /**
     * Alias for {@link vec4.squaredLength}
     * @function
     */


    vec4.sqrLen = vec4.squaredLength;
    /**
     * Negates the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to negate
     * @returns {vec4} out
     */

    vec4.negate = function (out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = -a[3];
      return out;
    };
    /**
     * Returns the inverse of the components of a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to invert
     * @returns {vec4} out
     */


    vec4.inverse = function (out, a) {
      out[0] = 1.0 / a[0];
      out[1] = 1.0 / a[1];
      out[2] = 1.0 / a[2];
      out[3] = 1.0 / a[3];
      return out;
    };
    /**
     * Normalize a vec4
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a vector to normalize
     * @returns {vec4} out
     */


    vec4.normalize = function (out, a) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      var len = x * x + y * y + z * z + w * w;

      if (len > 0) {
        len = 1 / Math.sqrt(len);
        out[0] = a[0] * len;
        out[1] = a[1] * len;
        out[2] = a[2] * len;
        out[3] = a[3] * len;
      }

      return out;
    };
    /**
     * Calculates the dot product of two vec4's
     *
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @returns {Number} dot product of a and b
     */


    vec4.dot = function (a, b) {
      return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];
    };
    /**
     * Performs a linear interpolation between two vec4's
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the first operand
     * @param {vec4} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {vec4} out
     */


    vec4.lerp = function (out, a, b, t) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3];
      out[0] = ax + t * (b[0] - ax);
      out[1] = ay + t * (b[1] - ay);
      out[2] = az + t * (b[2] - az);
      out[3] = aw + t * (b[3] - aw);
      return out;
    };
    /**
     * Generates a random vector with the given scale
     *
     * @param {vec4} out the receiving vector
     * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
     * @returns {vec4} out
     */


    vec4.random = function (out, scale) {
      scale = scale || 1.0; //TODO: This is a pretty awful way of doing this. Find something better.

      out[0] = GLMAT_RANDOM();
      out[1] = GLMAT_RANDOM();
      out[2] = GLMAT_RANDOM();
      out[3] = GLMAT_RANDOM();
      vec4.normalize(out, out);
      vec4.scale(out, out, scale);
      return out;
    };
    /**
     * Transforms the vec4 with a mat4.
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {mat4} m matrix to transform with
     * @returns {vec4} out
     */


    vec4.transformMat4 = function (out, a, m) {
      var x = a[0],
          y = a[1],
          z = a[2],
          w = a[3];
      out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;
      out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;
      out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;
      out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;
      return out;
    };
    /**
     * Transforms the vec4 with a quat
     *
     * @param {vec4} out the receiving vector
     * @param {vec4} a the vector to transform
     * @param {quat} q quaternion to transform with
     * @returns {vec4} out
     */


    vec4.transformQuat = function (out, a, q) {
      var x = a[0],
          y = a[1],
          z = a[2],
          qx = q[0],
          qy = q[1],
          qz = q[2],
          qw = q[3],
          // calculate quat * vec
      ix = qw * x + qy * z - qz * y,
          iy = qw * y + qz * x - qx * z,
          iz = qw * z + qx * y - qy * x,
          iw = -qx * x - qy * y - qz * z; // calculate result * inverse quat

      out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;
      out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;
      out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;
      return out;
    };
    /**
     * Perform some operation over an array of vec4s.
     *
     * @param {Array} a the array of vectors to iterate over
     * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
     * @param {Number} offset Number of elements to skip at the beginning of the array
     * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
     * @param {Function} fn Function to call for each vector in the array
     * @param {Object} [arg] additional argument to pass to fn
     * @returns {Array} a
     * @function
     */


    vec4.forEach = function () {
      var vec = vec4.create();
      return function (a, stride, offset, count, fn, arg) {
        var i, l;

        if (!stride) {
          stride = 4;
        }

        if (!offset) {
          offset = 0;
        }

        if (count) {
          l = Math.min(count * stride + offset, a.length);
        } else {
          l = a.length;
        }

        for (i = offset; i < l; i += stride) {
          vec[0] = a[i];
          vec[1] = a[i + 1];
          vec[2] = a[i + 2];
          vec[3] = a[i + 3];
          fn(vec, vec, arg);
          a[i] = vec[0];
          a[i + 1] = vec[1];
          a[i + 2] = vec[2];
          a[i + 3] = vec[3];
        }

        return a;
      };
    }();
    /**
     * Returns a string representation of a vector
     *
     * @param {vec4} vec vector to represent as a string
     * @returns {String} string representation of the vector
     */


    vec4.str = function (a) {
      return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    };

    if (typeof exports !== 'undefined') {
      exports.vec4 = vec4;
    }

    ;
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class 2x2 Matrix
     * @name mat2
     */

    var mat2 = {};
    /**
     * Creates a new identity mat2
     *
     * @returns {mat2} a new 2x2 matrix
     */

    mat2.create = function () {
      var out = new GLMAT_ARRAY_TYPE(4);
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    };
    /**
     * Creates a new mat2 initialized with values from an existing matrix
     *
     * @param {mat2} a matrix to clone
     * @returns {mat2} a new 2x2 matrix
     */


    mat2.clone = function (a) {
      var out = new GLMAT_ARRAY_TYPE(4);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    };
    /**
     * Copy the values from one mat2 to another
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */


    mat2.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      return out;
    };
    /**
     * Set a mat2 to the identity matrix
     *
     * @param {mat2} out the receiving matrix
     * @returns {mat2} out
     */


    mat2.identity = function (out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    };
    /**
     * Transpose the values of a mat2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */


    mat2.transpose = function (out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a1 = a[1];
        out[1] = a[2];
        out[2] = a1;
      } else {
        out[0] = a[0];
        out[1] = a[2];
        out[2] = a[1];
        out[3] = a[3];
      }

      return out;
    };
    /**
     * Inverts a mat2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */


    mat2.invert = function (out, a) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          // Calculate the determinant
      det = a0 * a3 - a2 * a1;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = a3 * det;
      out[1] = -a1 * det;
      out[2] = -a2 * det;
      out[3] = a0 * det;
      return out;
    };
    /**
     * Calculates the adjugate of a mat2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the source matrix
     * @returns {mat2} out
     */


    mat2.adjoint = function (out, a) {
      // Caching this value is nessecary if out == a
      var a0 = a[0];
      out[0] = a[3];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a0;
      return out;
    };
    /**
     * Calculates the determinant of a mat2
     *
     * @param {mat2} a the source matrix
     * @returns {Number} determinant of a
     */


    mat2.determinant = function (a) {
      return a[0] * a[3] - a[2] * a[1];
    };
    /**
     * Multiplies two mat2's
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the first operand
     * @param {mat2} b the second operand
     * @returns {mat2} out
     */


    mat2.multiply = function (out, a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3];
      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      out[0] = a0 * b0 + a2 * b1;
      out[1] = a1 * b0 + a3 * b1;
      out[2] = a0 * b2 + a2 * b3;
      out[3] = a1 * b2 + a3 * b3;
      return out;
    };
    /**
     * Alias for {@link mat2.multiply}
     * @function
     */


    mat2.mul = mat2.multiply;
    /**
     * Rotates a mat2 by the given angle
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat2} out
     */

    mat2.rotate = function (out, a, rad) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          s = Math.sin(rad),
          c = Math.cos(rad);
      out[0] = a0 * c + a2 * s;
      out[1] = a1 * c + a3 * s;
      out[2] = a0 * -s + a2 * c;
      out[3] = a1 * -s + a3 * c;
      return out;
    };
    /**
     * Scales the mat2 by the dimensions in the given vec2
     *
     * @param {mat2} out the receiving matrix
     * @param {mat2} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat2} out
     **/


    mat2.scale = function (out, a, v) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          v0 = v[0],
          v1 = v[1];
      out[0] = a0 * v0;
      out[1] = a1 * v0;
      out[2] = a2 * v1;
      out[3] = a3 * v1;
      return out;
    };
    /**
     * Returns a string representation of a mat2
     *
     * @param {mat2} mat matrix to represent as a string
     * @returns {String} string representation of the matrix
     */


    mat2.str = function (a) {
      return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    };
    /**
     * Returns Frobenius norm of a mat2
     *
     * @param {mat2} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */


    mat2.frob = function (a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2));
    };
    /**
     * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
     * @param {mat2} L the lower triangular matrix 
     * @param {mat2} D the diagonal matrix 
     * @param {mat2} U the upper triangular matrix 
     * @param {mat2} a the input matrix to factorize
     */


    mat2.LDU = function (L, D, U, a) {
      L[2] = a[2] / a[0];
      U[0] = a[0];
      U[1] = a[1];
      U[3] = a[3] - L[2] * U[1];
      return [L, D, U];
    };

    if (typeof exports !== 'undefined') {
      exports.mat2 = mat2;
    }

    ;
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class 2x3 Matrix
     * @name mat2d
     * 
     * @description 
     * A mat2d contains six elements defined as:
     * <pre>
     * [a, c, tx,
     *  b, d, ty]
     * </pre>
     * This is a short form for the 3x3 matrix:
     * <pre>
     * [a, c, tx,
     *  b, d, ty,
     *  0, 0, 1]
     * </pre>
     * The last row is ignored so the array is shorter and operations are faster.
     */

    var mat2d = {};
    /**
     * Creates a new identity mat2d
     *
     * @returns {mat2d} a new 2x3 matrix
     */

    mat2d.create = function () {
      var out = new GLMAT_ARRAY_TYPE(6);
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      out[4] = 0;
      out[5] = 0;
      return out;
    };
    /**
     * Creates a new mat2d initialized with values from an existing matrix
     *
     * @param {mat2d} a matrix to clone
     * @returns {mat2d} a new 2x3 matrix
     */


    mat2d.clone = function (a) {
      var out = new GLMAT_ARRAY_TYPE(6);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      return out;
    };
    /**
     * Copy the values from one mat2d to another
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the source matrix
     * @returns {mat2d} out
     */


    mat2d.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      return out;
    };
    /**
     * Set a mat2d to the identity matrix
     *
     * @param {mat2d} out the receiving matrix
     * @returns {mat2d} out
     */


    mat2d.identity = function (out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      out[4] = 0;
      out[5] = 0;
      return out;
    };
    /**
     * Inverts a mat2d
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the source matrix
     * @returns {mat2d} out
     */


    mat2d.invert = function (out, a) {
      var aa = a[0],
          ab = a[1],
          ac = a[2],
          ad = a[3],
          atx = a[4],
          aty = a[5];
      var det = aa * ad - ab * ac;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = ad * det;
      out[1] = -ab * det;
      out[2] = -ac * det;
      out[3] = aa * det;
      out[4] = (ac * aty - ad * atx) * det;
      out[5] = (ab * atx - aa * aty) * det;
      return out;
    };
    /**
     * Calculates the determinant of a mat2d
     *
     * @param {mat2d} a the source matrix
     * @returns {Number} determinant of a
     */


    mat2d.determinant = function (a) {
      return a[0] * a[3] - a[1] * a[2];
    };
    /**
     * Multiplies two mat2d's
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the first operand
     * @param {mat2d} b the second operand
     * @returns {mat2d} out
     */


    mat2d.multiply = function (out, a, b) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5],
          b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3],
          b4 = b[4],
          b5 = b[5];
      out[0] = a0 * b0 + a2 * b1;
      out[1] = a1 * b0 + a3 * b1;
      out[2] = a0 * b2 + a2 * b3;
      out[3] = a1 * b2 + a3 * b3;
      out[4] = a0 * b4 + a2 * b5 + a4;
      out[5] = a1 * b4 + a3 * b5 + a5;
      return out;
    };
    /**
     * Alias for {@link mat2d.multiply}
     * @function
     */


    mat2d.mul = mat2d.multiply;
    /**
     * Rotates a mat2d by the given angle
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat2d} out
     */

    mat2d.rotate = function (out, a, rad) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5],
          s = Math.sin(rad),
          c = Math.cos(rad);
      out[0] = a0 * c + a2 * s;
      out[1] = a1 * c + a3 * s;
      out[2] = a0 * -s + a2 * c;
      out[3] = a1 * -s + a3 * c;
      out[4] = a4;
      out[5] = a5;
      return out;
    };
    /**
     * Scales the mat2d by the dimensions in the given vec2
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to translate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat2d} out
     **/


    mat2d.scale = function (out, a, v) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5],
          v0 = v[0],
          v1 = v[1];
      out[0] = a0 * v0;
      out[1] = a1 * v0;
      out[2] = a2 * v1;
      out[3] = a3 * v1;
      out[4] = a4;
      out[5] = a5;
      return out;
    };
    /**
     * Translates the mat2d by the dimensions in the given vec2
     *
     * @param {mat2d} out the receiving matrix
     * @param {mat2d} a the matrix to translate
     * @param {vec2} v the vec2 to translate the matrix by
     * @returns {mat2d} out
     **/


    mat2d.translate = function (out, a, v) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          a4 = a[4],
          a5 = a[5],
          v0 = v[0],
          v1 = v[1];
      out[0] = a0;
      out[1] = a1;
      out[2] = a2;
      out[3] = a3;
      out[4] = a0 * v0 + a2 * v1 + a4;
      out[5] = a1 * v0 + a3 * v1 + a5;
      return out;
    };
    /**
     * Returns a string representation of a mat2d
     *
     * @param {mat2d} a matrix to represent as a string
     * @returns {String} string representation of the matrix
     */


    mat2d.str = function (a) {
      return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';
    };
    /**
     * Returns Frobenius norm of a mat2d
     *
     * @param {mat2d} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */


    mat2d.frob = function (a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + 1);
    };

    if (typeof exports !== 'undefined') {
      exports.mat2d = mat2d;
    }

    ;
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class 3x3 Matrix
     * @name mat3
     */

    var mat3 = {};
    /**
     * Creates a new identity mat3
     *
     * @returns {mat3} a new 3x3 matrix
     */

    mat3.create = function () {
      var out = new GLMAT_ARRAY_TYPE(9);
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 1;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    };
    /**
     * Copies the upper-left 3x3 values into the given mat3.
     *
     * @param {mat3} out the receiving 3x3 matrix
     * @param {mat4} a   the source 4x4 matrix
     * @returns {mat3} out
     */


    mat3.fromMat4 = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[4];
      out[4] = a[5];
      out[5] = a[6];
      out[6] = a[8];
      out[7] = a[9];
      out[8] = a[10];
      return out;
    };
    /**
     * Creates a new mat3 initialized with values from an existing matrix
     *
     * @param {mat3} a matrix to clone
     * @returns {mat3} a new 3x3 matrix
     */


    mat3.clone = function (a) {
      var out = new GLMAT_ARRAY_TYPE(9);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    };
    /**
     * Copy the values from one mat3 to another
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */


    mat3.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    };
    /**
     * Set a mat3 to the identity matrix
     *
     * @param {mat3} out the receiving matrix
     * @returns {mat3} out
     */


    mat3.identity = function (out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 1;
      out[5] = 0;
      out[6] = 0;
      out[7] = 0;
      out[8] = 1;
      return out;
    };
    /**
     * Transpose the values of a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */


    mat3.transpose = function (out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a12 = a[5];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a01;
        out[5] = a[7];
        out[6] = a02;
        out[7] = a12;
      } else {
        out[0] = a[0];
        out[1] = a[3];
        out[2] = a[6];
        out[3] = a[1];
        out[4] = a[4];
        out[5] = a[7];
        out[6] = a[2];
        out[7] = a[5];
        out[8] = a[8];
      }

      return out;
    };
    /**
     * Inverts a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */


    mat3.invert = function (out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          b01 = a22 * a11 - a12 * a21,
          b11 = -a22 * a10 + a12 * a20,
          b21 = a21 * a10 - a11 * a20,
          // Calculate the determinant
      det = a00 * b01 + a01 * b11 + a02 * b21;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = b01 * det;
      out[1] = (-a22 * a01 + a02 * a21) * det;
      out[2] = (a12 * a01 - a02 * a11) * det;
      out[3] = b11 * det;
      out[4] = (a22 * a00 - a02 * a20) * det;
      out[5] = (-a12 * a00 + a02 * a10) * det;
      out[6] = b21 * det;
      out[7] = (-a21 * a00 + a01 * a20) * det;
      out[8] = (a11 * a00 - a01 * a10) * det;
      return out;
    };
    /**
     * Calculates the adjugate of a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the source matrix
     * @returns {mat3} out
     */


    mat3.adjoint = function (out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8];
      out[0] = a11 * a22 - a12 * a21;
      out[1] = a02 * a21 - a01 * a22;
      out[2] = a01 * a12 - a02 * a11;
      out[3] = a12 * a20 - a10 * a22;
      out[4] = a00 * a22 - a02 * a20;
      out[5] = a02 * a10 - a00 * a12;
      out[6] = a10 * a21 - a11 * a20;
      out[7] = a01 * a20 - a00 * a21;
      out[8] = a00 * a11 - a01 * a10;
      return out;
    };
    /**
     * Calculates the determinant of a mat3
     *
     * @param {mat3} a the source matrix
     * @returns {Number} determinant of a
     */


    mat3.determinant = function (a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8];
      return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
    };
    /**
     * Multiplies two mat3's
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the first operand
     * @param {mat3} b the second operand
     * @returns {mat3} out
     */


    mat3.multiply = function (out, a, b) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          b00 = b[0],
          b01 = b[1],
          b02 = b[2],
          b10 = b[3],
          b11 = b[4],
          b12 = b[5],
          b20 = b[6],
          b21 = b[7],
          b22 = b[8];
      out[0] = b00 * a00 + b01 * a10 + b02 * a20;
      out[1] = b00 * a01 + b01 * a11 + b02 * a21;
      out[2] = b00 * a02 + b01 * a12 + b02 * a22;
      out[3] = b10 * a00 + b11 * a10 + b12 * a20;
      out[4] = b10 * a01 + b11 * a11 + b12 * a21;
      out[5] = b10 * a02 + b11 * a12 + b12 * a22;
      out[6] = b20 * a00 + b21 * a10 + b22 * a20;
      out[7] = b20 * a01 + b21 * a11 + b22 * a21;
      out[8] = b20 * a02 + b21 * a12 + b22 * a22;
      return out;
    };
    /**
     * Alias for {@link mat3.multiply}
     * @function
     */


    mat3.mul = mat3.multiply;
    /**
     * Translate a mat3 by the given vector
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to translate
     * @param {vec2} v vector to translate by
     * @returns {mat3} out
     */

    mat3.translate = function (out, a, v) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          x = v[0],
          y = v[1];
      out[0] = a00;
      out[1] = a01;
      out[2] = a02;
      out[3] = a10;
      out[4] = a11;
      out[5] = a12;
      out[6] = x * a00 + y * a10 + a20;
      out[7] = x * a01 + y * a11 + a21;
      out[8] = x * a02 + y * a12 + a22;
      return out;
    };
    /**
     * Rotates a mat3 by the given angle
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat3} out
     */


    mat3.rotate = function (out, a, rad) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a10 = a[3],
          a11 = a[4],
          a12 = a[5],
          a20 = a[6],
          a21 = a[7],
          a22 = a[8],
          s = Math.sin(rad),
          c = Math.cos(rad);
      out[0] = c * a00 + s * a10;
      out[1] = c * a01 + s * a11;
      out[2] = c * a02 + s * a12;
      out[3] = c * a10 - s * a00;
      out[4] = c * a11 - s * a01;
      out[5] = c * a12 - s * a02;
      out[6] = a20;
      out[7] = a21;
      out[8] = a22;
      return out;
    };
    /**
     * Scales the mat3 by the dimensions in the given vec2
     *
     * @param {mat3} out the receiving matrix
     * @param {mat3} a the matrix to rotate
     * @param {vec2} v the vec2 to scale the matrix by
     * @returns {mat3} out
     **/


    mat3.scale = function (out, a, v) {
      var x = v[0],
          y = v[1];
      out[0] = x * a[0];
      out[1] = x * a[1];
      out[2] = x * a[2];
      out[3] = y * a[3];
      out[4] = y * a[4];
      out[5] = y * a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      return out;
    };
    /**
     * Copies the values from a mat2d into a mat3
     *
     * @param {mat3} out the receiving matrix
     * @param {mat2d} a the matrix to copy
     * @returns {mat3} out
     **/


    mat3.fromMat2d = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = 0;
      out[3] = a[2];
      out[4] = a[3];
      out[5] = 0;
      out[6] = a[4];
      out[7] = a[5];
      out[8] = 1;
      return out;
    };
    /**
    * Calculates a 3x3 matrix from the given quaternion
    *
    * @param {mat3} out mat3 receiving operation result
    * @param {quat} q Quaternion to create matrix from
    *
    * @returns {mat3} out
    */


    mat3.fromQuat = function (out, q) {
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3],
          x2 = x + x,
          y2 = y + y,
          z2 = z + z,
          xx = x * x2,
          yx = y * x2,
          yy = y * y2,
          zx = z * x2,
          zy = z * y2,
          zz = z * z2,
          wx = w * x2,
          wy = w * y2,
          wz = w * z2;
      out[0] = 1 - yy - zz;
      out[3] = yx - wz;
      out[6] = zx + wy;
      out[1] = yx + wz;
      out[4] = 1 - xx - zz;
      out[7] = zy - wx;
      out[2] = zx - wy;
      out[5] = zy + wx;
      out[8] = 1 - xx - yy;
      return out;
    };
    /**
    * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
    *
    * @param {mat3} out mat3 receiving operation result
    * @param {mat4} a Mat4 to derive the normal matrix from
    *
    * @returns {mat3} out
    */


    mat3.normalFromMat4 = function (out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7],
          a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11],
          a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15],
          b00 = a00 * a11 - a01 * a10,
          b01 = a00 * a12 - a02 * a10,
          b02 = a00 * a13 - a03 * a10,
          b03 = a01 * a12 - a02 * a11,
          b04 = a01 * a13 - a03 * a11,
          b05 = a02 * a13 - a03 * a12,
          b06 = a20 * a31 - a21 * a30,
          b07 = a20 * a32 - a22 * a30,
          b08 = a20 * a33 - a23 * a30,
          b09 = a21 * a32 - a22 * a31,
          b10 = a21 * a33 - a23 * a31,
          b11 = a22 * a33 - a23 * a32,
          // Calculate the determinant
      det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      return out;
    };
    /**
     * Returns a string representation of a mat3
     *
     * @param {mat3} mat matrix to represent as a string
     * @returns {String} string representation of the matrix
     */


    mat3.str = function (a) {
      return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
    };
    /**
     * Returns Frobenius norm of a mat3
     *
     * @param {mat3} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */


    mat3.frob = function (a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
    };

    if (typeof exports !== 'undefined') {
      exports.mat3 = mat3;
    }

    ;
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class 4x4 Matrix
     * @name mat4
     */

    var mat4 = {};
    /**
     * Creates a new identity mat4
     *
     * @returns {mat4} a new 4x4 matrix
     */

    mat4.create = function () {
      var out = new GLMAT_ARRAY_TYPE(16);
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    /**
     * Creates a new mat4 initialized with values from an existing matrix
     *
     * @param {mat4} a matrix to clone
     * @returns {mat4} a new 4x4 matrix
     */


    mat4.clone = function (a) {
      var out = new GLMAT_ARRAY_TYPE(16);
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    };
    /**
     * Copy the values from one mat4 to another
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */


    mat4.copy = function (out, a) {
      out[0] = a[0];
      out[1] = a[1];
      out[2] = a[2];
      out[3] = a[3];
      out[4] = a[4];
      out[5] = a[5];
      out[6] = a[6];
      out[7] = a[7];
      out[8] = a[8];
      out[9] = a[9];
      out[10] = a[10];
      out[11] = a[11];
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    };
    /**
     * Set a mat4 to the identity matrix
     *
     * @param {mat4} out the receiving matrix
     * @returns {mat4} out
     */


    mat4.identity = function (out) {
      out[0] = 1;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = 1;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 1;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    /**
     * Transpose the values of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */


    mat4.transpose = function (out, a) {
      // If we are transposing ourselves we can skip a few steps but have to cache some values
      if (out === a) {
        var a01 = a[1],
            a02 = a[2],
            a03 = a[3],
            a12 = a[6],
            a13 = a[7],
            a23 = a[11];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a01;
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a02;
        out[9] = a12;
        out[11] = a[14];
        out[12] = a03;
        out[13] = a13;
        out[14] = a23;
      } else {
        out[0] = a[0];
        out[1] = a[4];
        out[2] = a[8];
        out[3] = a[12];
        out[4] = a[1];
        out[5] = a[5];
        out[6] = a[9];
        out[7] = a[13];
        out[8] = a[2];
        out[9] = a[6];
        out[10] = a[10];
        out[11] = a[14];
        out[12] = a[3];
        out[13] = a[7];
        out[14] = a[11];
        out[15] = a[15];
      }

      return out;
    };
    /**
     * Inverts a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */


    mat4.invert = function (out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7],
          a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11],
          a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15],
          b00 = a00 * a11 - a01 * a10,
          b01 = a00 * a12 - a02 * a10,
          b02 = a00 * a13 - a03 * a10,
          b03 = a01 * a12 - a02 * a11,
          b04 = a01 * a13 - a03 * a11,
          b05 = a02 * a13 - a03 * a12,
          b06 = a20 * a31 - a21 * a30,
          b07 = a20 * a32 - a22 * a30,
          b08 = a20 * a33 - a23 * a30,
          b09 = a21 * a32 - a22 * a31,
          b10 = a21 * a33 - a23 * a31,
          b11 = a22 * a33 - a23 * a32,
          // Calculate the determinant
      det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

      if (!det) {
        return null;
      }

      det = 1.0 / det;
      out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
      out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
      out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
      out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;
      out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
      out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
      out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
      out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;
      out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;
      out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;
      out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;
      out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;
      out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;
      out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;
      out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;
      out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;
      return out;
    };
    /**
     * Calculates the adjugate of a mat4
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the source matrix
     * @returns {mat4} out
     */


    mat4.adjoint = function (out, a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7],
          a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11],
          a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15];
      out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);
      out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));
      out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);
      out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));
      out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));
      out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);
      out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));
      out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);
      out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);
      out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));
      out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);
      out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));
      out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));
      out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);
      out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));
      out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);
      return out;
    };
    /**
     * Calculates the determinant of a mat4
     *
     * @param {mat4} a the source matrix
     * @returns {Number} determinant of a
     */


    mat4.determinant = function (a) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7],
          a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11],
          a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15],
          b00 = a00 * a11 - a01 * a10,
          b01 = a00 * a12 - a02 * a10,
          b02 = a00 * a13 - a03 * a10,
          b03 = a01 * a12 - a02 * a11,
          b04 = a01 * a13 - a03 * a11,
          b05 = a02 * a13 - a03 * a12,
          b06 = a20 * a31 - a21 * a30,
          b07 = a20 * a32 - a22 * a30,
          b08 = a20 * a33 - a23 * a30,
          b09 = a21 * a32 - a22 * a31,
          b10 = a21 * a33 - a23 * a31,
          b11 = a22 * a33 - a23 * a32; // Calculate the determinant

      return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    };
    /**
     * Multiplies two mat4's
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the first operand
     * @param {mat4} b the second operand
     * @returns {mat4} out
     */


    mat4.multiply = function (out, a, b) {
      var a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7],
          a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11],
          a30 = a[12],
          a31 = a[13],
          a32 = a[14],
          a33 = a[15]; // Cache only the current line of the second matrix

      var b0 = b[0],
          b1 = b[1],
          b2 = b[2],
          b3 = b[3];
      out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[4];
      b1 = b[5];
      b2 = b[6];
      b3 = b[7];
      out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[8];
      b1 = b[9];
      b2 = b[10];
      b3 = b[11];
      out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      b0 = b[12];
      b1 = b[13];
      b2 = b[14];
      b3 = b[15];
      out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
      out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
      out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
      out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
      return out;
    };
    /**
     * Alias for {@link mat4.multiply}
     * @function
     */


    mat4.mul = mat4.multiply;
    /**
     * Translate a mat4 by the given vector
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to translate
     * @param {vec3} v vector to translate by
     * @returns {mat4} out
     */

    mat4.translate = function (out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2],
          a00,
          a01,
          a02,
          a03,
          a10,
          a11,
          a12,
          a13,
          a20,
          a21,
          a22,
          a23;

      if (a === out) {
        out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];
        out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];
        out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];
        out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];
      } else {
        a00 = a[0];
        a01 = a[1];
        a02 = a[2];
        a03 = a[3];
        a10 = a[4];
        a11 = a[5];
        a12 = a[6];
        a13 = a[7];
        a20 = a[8];
        a21 = a[9];
        a22 = a[10];
        a23 = a[11];
        out[0] = a00;
        out[1] = a01;
        out[2] = a02;
        out[3] = a03;
        out[4] = a10;
        out[5] = a11;
        out[6] = a12;
        out[7] = a13;
        out[8] = a20;
        out[9] = a21;
        out[10] = a22;
        out[11] = a23;
        out[12] = a00 * x + a10 * y + a20 * z + a[12];
        out[13] = a01 * x + a11 * y + a21 * z + a[13];
        out[14] = a02 * x + a12 * y + a22 * z + a[14];
        out[15] = a03 * x + a13 * y + a23 * z + a[15];
      }

      return out;
    };
    /**
     * Scales the mat4 by the dimensions in the given vec3
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to scale
     * @param {vec3} v the vec3 to scale the matrix by
     * @returns {mat4} out
     **/


    mat4.scale = function (out, a, v) {
      var x = v[0],
          y = v[1],
          z = v[2];
      out[0] = a[0] * x;
      out[1] = a[1] * x;
      out[2] = a[2] * x;
      out[3] = a[3] * x;
      out[4] = a[4] * y;
      out[5] = a[5] * y;
      out[6] = a[6] * y;
      out[7] = a[7] * y;
      out[8] = a[8] * z;
      out[9] = a[9] * z;
      out[10] = a[10] * z;
      out[11] = a[11] * z;
      out[12] = a[12];
      out[13] = a[13];
      out[14] = a[14];
      out[15] = a[15];
      return out;
    };
    /**
     * Rotates a mat4 by the given angle
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @param {vec3} axis the axis to rotate around
     * @returns {mat4} out
     */


    mat4.rotate = function (out, a, rad, axis) {
      var x = axis[0],
          y = axis[1],
          z = axis[2],
          len = Math.sqrt(x * x + y * y + z * z),
          s,
          c,
          t,
          a00,
          a01,
          a02,
          a03,
          a10,
          a11,
          a12,
          a13,
          a20,
          a21,
          a22,
          a23,
          b00,
          b01,
          b02,
          b10,
          b11,
          b12,
          b20,
          b21,
          b22;

      if (Math.abs(len) < GLMAT_EPSILON) {
        return null;
      }

      len = 1 / len;
      x *= len;
      y *= len;
      z *= len;
      s = Math.sin(rad);
      c = Math.cos(rad);
      t = 1 - c;
      a00 = a[0];
      a01 = a[1];
      a02 = a[2];
      a03 = a[3];
      a10 = a[4];
      a11 = a[5];
      a12 = a[6];
      a13 = a[7];
      a20 = a[8];
      a21 = a[9];
      a22 = a[10];
      a23 = a[11]; // Construct the elements of the rotation matrix

      b00 = x * x * t + c;
      b01 = y * x * t + z * s;
      b02 = z * x * t - y * s;
      b10 = x * y * t - z * s;
      b11 = y * y * t + c;
      b12 = z * y * t + x * s;
      b20 = x * z * t + y * s;
      b21 = y * z * t - x * s;
      b22 = z * z * t + c; // Perform rotation-specific matrix multiplication

      out[0] = a00 * b00 + a10 * b01 + a20 * b02;
      out[1] = a01 * b00 + a11 * b01 + a21 * b02;
      out[2] = a02 * b00 + a12 * b01 + a22 * b02;
      out[3] = a03 * b00 + a13 * b01 + a23 * b02;
      out[4] = a00 * b10 + a10 * b11 + a20 * b12;
      out[5] = a01 * b10 + a11 * b11 + a21 * b12;
      out[6] = a02 * b10 + a12 * b11 + a22 * b12;
      out[7] = a03 * b10 + a13 * b11 + a23 * b12;
      out[8] = a00 * b20 + a10 * b21 + a20 * b22;
      out[9] = a01 * b20 + a11 * b21 + a21 * b22;
      out[10] = a02 * b20 + a12 * b21 + a22 * b22;
      out[11] = a03 * b20 + a13 * b21 + a23 * b22;

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      }

      return out;
    };
    /**
     * Rotates a matrix by the given angle around the X axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */


    mat4.rotateX = function (out, a, rad) {
      var s = Math.sin(rad),
          c = Math.cos(rad),
          a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7],
          a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[4] = a10 * c + a20 * s;
      out[5] = a11 * c + a21 * s;
      out[6] = a12 * c + a22 * s;
      out[7] = a13 * c + a23 * s;
      out[8] = a20 * c - a10 * s;
      out[9] = a21 * c - a11 * s;
      out[10] = a22 * c - a12 * s;
      out[11] = a23 * c - a13 * s;
      return out;
    };
    /**
     * Rotates a matrix by the given angle around the Y axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */


    mat4.rotateY = function (out, a, rad) {
      var s = Math.sin(rad),
          c = Math.cos(rad),
          a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a20 = a[8],
          a21 = a[9],
          a22 = a[10],
          a23 = a[11];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged rows
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[0] = a00 * c - a20 * s;
      out[1] = a01 * c - a21 * s;
      out[2] = a02 * c - a22 * s;
      out[3] = a03 * c - a23 * s;
      out[8] = a00 * s + a20 * c;
      out[9] = a01 * s + a21 * c;
      out[10] = a02 * s + a22 * c;
      out[11] = a03 * s + a23 * c;
      return out;
    };
    /**
     * Rotates a matrix by the given angle around the Z axis
     *
     * @param {mat4} out the receiving matrix
     * @param {mat4} a the matrix to rotate
     * @param {Number} rad the angle to rotate the matrix by
     * @returns {mat4} out
     */


    mat4.rotateZ = function (out, a, rad) {
      var s = Math.sin(rad),
          c = Math.cos(rad),
          a00 = a[0],
          a01 = a[1],
          a02 = a[2],
          a03 = a[3],
          a10 = a[4],
          a11 = a[5],
          a12 = a[6],
          a13 = a[7];

      if (a !== out) {
        // If the source and destination differ, copy the unchanged last row
        out[8] = a[8];
        out[9] = a[9];
        out[10] = a[10];
        out[11] = a[11];
        out[12] = a[12];
        out[13] = a[13];
        out[14] = a[14];
        out[15] = a[15];
      } // Perform axis-specific matrix multiplication


      out[0] = a00 * c + a10 * s;
      out[1] = a01 * c + a11 * s;
      out[2] = a02 * c + a12 * s;
      out[3] = a03 * c + a13 * s;
      out[4] = a10 * c - a00 * s;
      out[5] = a11 * c - a01 * s;
      out[6] = a12 * c - a02 * s;
      out[7] = a13 * c - a03 * s;
      return out;
    };
    /**
     * Creates a matrix from a quaternion rotation and vector translation
     * This is equivalent to (but much faster than):
     *
     *     mat4.identity(dest);
     *     mat4.translate(dest, vec);
     *     var quatMat = mat4.create();
     *     quat4.toMat4(quat, quatMat);
     *     mat4.multiply(dest, quatMat);
     *
     * @param {mat4} out mat4 receiving operation result
     * @param {quat4} q Rotation quaternion
     * @param {vec3} v Translation vector
     * @returns {mat4} out
     */


    mat4.fromRotationTranslation = function (out, q, v) {
      // Quaternion math
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3],
          x2 = x + x,
          y2 = y + y,
          z2 = z + z,
          xx = x * x2,
          xy = x * y2,
          xz = x * z2,
          yy = y * y2,
          yz = y * z2,
          zz = z * z2,
          wx = w * x2,
          wy = w * y2,
          wz = w * z2;
      out[0] = 1 - (yy + zz);
      out[1] = xy + wz;
      out[2] = xz - wy;
      out[3] = 0;
      out[4] = xy - wz;
      out[5] = 1 - (xx + zz);
      out[6] = yz + wx;
      out[7] = 0;
      out[8] = xz + wy;
      out[9] = yz - wx;
      out[10] = 1 - (xx + yy);
      out[11] = 0;
      out[12] = v[0];
      out[13] = v[1];
      out[14] = v[2];
      out[15] = 1;
      return out;
    };

    mat4.fromQuat = function (out, q) {
      var x = q[0],
          y = q[1],
          z = q[2],
          w = q[3],
          x2 = x + x,
          y2 = y + y,
          z2 = z + z,
          xx = x * x2,
          yx = y * x2,
          yy = y * y2,
          zx = z * x2,
          zy = z * y2,
          zz = z * z2,
          wx = w * x2,
          wy = w * y2,
          wz = w * z2;
      out[0] = 1 - yy - zz;
      out[1] = yx + wz;
      out[2] = zx - wy;
      out[3] = 0;
      out[4] = yx - wz;
      out[5] = 1 - xx - zz;
      out[6] = zy + wx;
      out[7] = 0;
      out[8] = zx + wy;
      out[9] = zy - wx;
      out[10] = 1 - xx - yy;
      out[11] = 0;
      out[12] = 0;
      out[13] = 0;
      out[14] = 0;
      out[15] = 1;
      return out;
    };
    /**
     * Generates a frustum matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {Number} left Left bound of the frustum
     * @param {Number} right Right bound of the frustum
     * @param {Number} bottom Bottom bound of the frustum
     * @param {Number} top Top bound of the frustum
     * @param {Number} near Near bound of the frustum
     * @param {Number} far Far bound of the frustum
     * @returns {mat4} out
     */


    mat4.frustum = function (out, left, right, bottom, top, near, far) {
      var rl = 1 / (right - left),
          tb = 1 / (top - bottom),
          nf = 1 / (near - far);
      out[0] = near * 2 * rl;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = near * 2 * tb;
      out[6] = 0;
      out[7] = 0;
      out[8] = (right + left) * rl;
      out[9] = (top + bottom) * tb;
      out[10] = (far + near) * nf;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[14] = far * near * 2 * nf;
      out[15] = 0;
      return out;
    };
    /**
     * Generates a perspective projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} fovy Vertical field of view in radians
     * @param {number} aspect Aspect ratio. typically viewport width/height
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */


    mat4.perspective = function (out, fovy, aspect, near, far) {
      var f = 1.0 / Math.tan(fovy / 2),
          nf = 1 / (near - far);
      out[0] = f / aspect;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = f;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = (far + near) * nf;
      out[11] = -1;
      out[12] = 0;
      out[13] = 0;
      out[14] = 2 * far * near * nf;
      out[15] = 0;
      return out;
    };
    /**
     * Generates a orthogonal projection matrix with the given bounds
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {number} left Left bound of the frustum
     * @param {number} right Right bound of the frustum
     * @param {number} bottom Bottom bound of the frustum
     * @param {number} top Top bound of the frustum
     * @param {number} near Near bound of the frustum
     * @param {number} far Far bound of the frustum
     * @returns {mat4} out
     */


    mat4.ortho = function (out, left, right, bottom, top, near, far) {
      var lr = 1 / (left - right),
          bt = 1 / (bottom - top),
          nf = 1 / (near - far);
      out[0] = -2 * lr;
      out[1] = 0;
      out[2] = 0;
      out[3] = 0;
      out[4] = 0;
      out[5] = -2 * bt;
      out[6] = 0;
      out[7] = 0;
      out[8] = 0;
      out[9] = 0;
      out[10] = 2 * nf;
      out[11] = 0;
      out[12] = (left + right) * lr;
      out[13] = (top + bottom) * bt;
      out[14] = (far + near) * nf;
      out[15] = 1;
      return out;
    };
    /**
     * Generates a look-at matrix with the given eye position, focal point, and up axis
     *
     * @param {mat4} out mat4 frustum matrix will be written into
     * @param {vec3} eye Position of the viewer
     * @param {vec3} center Point the viewer is looking at
     * @param {vec3} up vec3 pointing up
     * @returns {mat4} out
     */


    mat4.lookAt = function (out, eye, center, up) {
      var x0,
          x1,
          x2,
          y0,
          y1,
          y2,
          z0,
          z1,
          z2,
          len,
          eyex = eye[0],
          eyey = eye[1],
          eyez = eye[2],
          upx = up[0],
          upy = up[1],
          upz = up[2],
          centerx = center[0],
          centery = center[1],
          centerz = center[2];

      if (Math.abs(eyex - centerx) < GLMAT_EPSILON && Math.abs(eyey - centery) < GLMAT_EPSILON && Math.abs(eyez - centerz) < GLMAT_EPSILON) {
        return mat4.identity(out);
      }

      z0 = eyex - centerx;
      z1 = eyey - centery;
      z2 = eyez - centerz;
      len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);
      z0 *= len;
      z1 *= len;
      z2 *= len;
      x0 = upy * z2 - upz * z1;
      x1 = upz * z0 - upx * z2;
      x2 = upx * z1 - upy * z0;
      len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);

      if (!len) {
        x0 = 0;
        x1 = 0;
        x2 = 0;
      } else {
        len = 1 / len;
        x0 *= len;
        x1 *= len;
        x2 *= len;
      }

      y0 = z1 * x2 - z2 * x1;
      y1 = z2 * x0 - z0 * x2;
      y2 = z0 * x1 - z1 * x0;
      len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);

      if (!len) {
        y0 = 0;
        y1 = 0;
        y2 = 0;
      } else {
        len = 1 / len;
        y0 *= len;
        y1 *= len;
        y2 *= len;
      }

      out[0] = x0;
      out[1] = y0;
      out[2] = z0;
      out[3] = 0;
      out[4] = x1;
      out[5] = y1;
      out[6] = z1;
      out[7] = 0;
      out[8] = x2;
      out[9] = y2;
      out[10] = z2;
      out[11] = 0;
      out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);
      out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);
      out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);
      out[15] = 1;
      return out;
    };
    /**
     * Returns a string representation of a mat4
     *
     * @param {mat4} mat matrix to represent as a string
     * @returns {String} string representation of the matrix
     */


    mat4.str = function (a) {
      return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';
    };
    /**
     * Returns Frobenius norm of a mat4
     *
     * @param {mat4} a the matrix to calculate Frobenius norm of
     * @returns {Number} Frobenius norm
     */


    mat4.frob = function (a) {
      return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2) + Math.pow(a[9], 2) + Math.pow(a[10], 2) + Math.pow(a[11], 2) + Math.pow(a[12], 2) + Math.pow(a[13], 2) + Math.pow(a[14], 2) + Math.pow(a[15], 2));
    };

    if (typeof exports !== 'undefined') {
      exports.mat4 = mat4;
    }

    ;
    /* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.
    
    Redistribution and use in source and binary forms, with or without modification,
    are permitted provided that the following conditions are met:
    
      * Redistributions of source code must retain the above copyright notice, this
        list of conditions and the following disclaimer.
      * Redistributions in binary form must reproduce the above copyright notice,
        this list of conditions and the following disclaimer in the documentation 
        and/or other materials provided with the distribution.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
    ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
    ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */

    /**
     * @class Quaternion
     * @name quat
     */

    var quat = {};
    /**
     * Creates a new identity quat
     *
     * @returns {quat} a new quaternion
     */

    quat.create = function () {
      var out = new GLMAT_ARRAY_TYPE(4);
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    };
    /**
     * Sets a quaternion to represent the shortest rotation from one
     * vector to another.
     *
     * Both vectors are assumed to be unit length.
     *
     * @param {quat} out the receiving quaternion.
     * @param {vec3} a the initial vector
     * @param {vec3} b the destination vector
     * @returns {quat} out
     */


    quat.rotationTo = function () {
      var tmpvec3 = vec3.create();
      var xUnitVec3 = vec3.fromValues(1, 0, 0);
      var yUnitVec3 = vec3.fromValues(0, 1, 0);
      return function (out, a, b) {
        var dot = vec3.dot(a, b);

        if (dot < -0.999999) {
          vec3.cross(tmpvec3, xUnitVec3, a);
          if (vec3.length(tmpvec3) < 0.000001) vec3.cross(tmpvec3, yUnitVec3, a);
          vec3.normalize(tmpvec3, tmpvec3);
          quat.setAxisAngle(out, tmpvec3, Math.PI);
          return out;
        } else if (dot > 0.999999) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
          out[3] = 1;
          return out;
        } else {
          vec3.cross(tmpvec3, a, b);
          out[0] = tmpvec3[0];
          out[1] = tmpvec3[1];
          out[2] = tmpvec3[2];
          out[3] = 1 + dot;
          return quat.normalize(out, out);
        }
      };
    }();
    /**
     * Sets the specified quaternion with values corresponding to the given
     * axes. Each axis is a vec3 and is expected to be unit length and
     * perpendicular to all other specified axes.
     *
     * @param {vec3} view  the vector representing the viewing direction
     * @param {vec3} right the vector representing the local "right" direction
     * @param {vec3} up    the vector representing the local "up" direction
     * @returns {quat} out
     */


    quat.setAxes = function () {
      var matr = mat3.create();
      return function (out, view, right, up) {
        matr[0] = right[0];
        matr[3] = right[1];
        matr[6] = right[2];
        matr[1] = up[0];
        matr[4] = up[1];
        matr[7] = up[2];
        matr[2] = -view[0];
        matr[5] = -view[1];
        matr[8] = -view[2];
        return quat.normalize(out, quat.fromMat3(out, matr));
      };
    }();
    /**
     * Creates a new quat initialized with values from an existing quaternion
     *
     * @param {quat} a quaternion to clone
     * @returns {quat} a new quaternion
     * @function
     */


    quat.clone = vec4.clone;
    /**
     * Creates a new quat initialized with the given values
     *
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} a new quaternion
     * @function
     */

    quat.fromValues = vec4.fromValues;
    /**
     * Copy the values from one quat to another
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the source quaternion
     * @returns {quat} out
     * @function
     */

    quat.copy = vec4.copy;
    /**
     * Set the components of a quat to the given values
     *
     * @param {quat} out the receiving quaternion
     * @param {Number} x X component
     * @param {Number} y Y component
     * @param {Number} z Z component
     * @param {Number} w W component
     * @returns {quat} out
     * @function
     */

    quat.set = vec4.set;
    /**
     * Set a quat to the identity quaternion
     *
     * @param {quat} out the receiving quaternion
     * @returns {quat} out
     */

    quat.identity = function (out) {
      out[0] = 0;
      out[1] = 0;
      out[2] = 0;
      out[3] = 1;
      return out;
    };
    /**
     * Sets a quat from the given angle and rotation axis,
     * then returns it.
     *
     * @param {quat} out the receiving quaternion
     * @param {vec3} axis the axis around which to rotate
     * @param {Number} rad the angle in radians
     * @returns {quat} out
     **/


    quat.setAxisAngle = function (out, axis, rad) {
      rad = rad * 0.5;
      var s = Math.sin(rad);
      out[0] = s * axis[0];
      out[1] = s * axis[1];
      out[2] = s * axis[2];
      out[3] = Math.cos(rad);
      return out;
    };
    /**
     * Adds two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     * @function
     */


    quat.add = vec4.add;
    /**
     * Multiplies two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {quat} out
     */

    quat.multiply = function (out, a, b) {
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3],
          bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      out[0] = ax * bw + aw * bx + ay * bz - az * by;
      out[1] = ay * bw + aw * by + az * bx - ax * bz;
      out[2] = az * bw + aw * bz + ax * by - ay * bx;
      out[3] = aw * bw - ax * bx - ay * by - az * bz;
      return out;
    };
    /**
     * Alias for {@link quat.multiply}
     * @function
     */


    quat.mul = quat.multiply;
    /**
     * Scales a quat by a scalar number
     *
     * @param {quat} out the receiving vector
     * @param {quat} a the vector to scale
     * @param {Number} b amount to scale the vector by
     * @returns {quat} out
     * @function
     */

    quat.scale = vec4.scale;
    /**
     * Rotates a quaternion by the given angle about the X axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */

    quat.rotateX = function (out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3],
          bx = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + aw * bx;
      out[1] = ay * bw + az * bx;
      out[2] = az * bw - ay * bx;
      out[3] = aw * bw - ax * bx;
      return out;
    };
    /**
     * Rotates a quaternion by the given angle about the Y axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */


    quat.rotateY = function (out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3],
          by = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw - az * by;
      out[1] = ay * bw + aw * by;
      out[2] = az * bw + ax * by;
      out[3] = aw * bw - ay * by;
      return out;
    };
    /**
     * Rotates a quaternion by the given angle about the Z axis
     *
     * @param {quat} out quat receiving operation result
     * @param {quat} a quat to rotate
     * @param {number} rad angle (in radians) to rotate
     * @returns {quat} out
     */


    quat.rotateZ = function (out, a, rad) {
      rad *= 0.5;
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3],
          bz = Math.sin(rad),
          bw = Math.cos(rad);
      out[0] = ax * bw + ay * bz;
      out[1] = ay * bw - ax * bz;
      out[2] = az * bw + aw * bz;
      out[3] = aw * bw - az * bz;
      return out;
    };
    /**
     * Calculates the W component of a quat from the X, Y, and Z components.
     * Assumes that quaternion is 1 unit in length.
     * Any existing W component will be ignored.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate W component of
     * @returns {quat} out
     */


    quat.calculateW = function (out, a) {
      var x = a[0],
          y = a[1],
          z = a[2];
      out[0] = x;
      out[1] = y;
      out[2] = z;
      out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));
      return out;
    };
    /**
     * Calculates the dot product of two quat's
     *
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @returns {Number} dot product of a and b
     * @function
     */


    quat.dot = vec4.dot;
    /**
     * Performs a linear interpolation between two quat's
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {quat} out
     * @function
     */

    quat.lerp = vec4.lerp;
    /**
     * Performs a spherical linear interpolation between two quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a the first operand
     * @param {quat} b the second operand
     * @param {Number} t interpolation amount between the two inputs
     * @returns {quat} out
     */

    quat.slerp = function (out, a, b, t) {
      // benchmarks:
      //    http://jsperf.com/quaternion-slerp-implementations
      var ax = a[0],
          ay = a[1],
          az = a[2],
          aw = a[3],
          bx = b[0],
          by = b[1],
          bz = b[2],
          bw = b[3];
      var omega, cosom, sinom, scale0, scale1; // calc cosine

      cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)

      if (cosom < 0.0) {
        cosom = -cosom;
        bx = -bx;
        by = -by;
        bz = -bz;
        bw = -bw;
      } // calculate coefficients


      if (1.0 - cosom > 0.000001) {
        // standard case (slerp)
        omega = Math.acos(cosom);
        sinom = Math.sin(omega);
        scale0 = Math.sin((1.0 - t) * omega) / sinom;
        scale1 = Math.sin(t * omega) / sinom;
      } else {
        // "from" and "to" quaternions are very close 
        //  ... so we can do a linear interpolation
        scale0 = 1.0 - t;
        scale1 = t;
      } // calculate final values


      out[0] = scale0 * ax + scale1 * bx;
      out[1] = scale0 * ay + scale1 * by;
      out[2] = scale0 * az + scale1 * bz;
      out[3] = scale0 * aw + scale1 * bw;
      return out;
    };
    /**
     * Calculates the inverse of a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate inverse of
     * @returns {quat} out
     */


    quat.invert = function (out, a) {
      var a0 = a[0],
          a1 = a[1],
          a2 = a[2],
          a3 = a[3],
          dot = a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,
          invDot = dot ? 1.0 / dot : 0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0

      out[0] = -a0 * invDot;
      out[1] = -a1 * invDot;
      out[2] = -a2 * invDot;
      out[3] = a3 * invDot;
      return out;
    };
    /**
     * Calculates the conjugate of a quat
     * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quat to calculate conjugate of
     * @returns {quat} out
     */


    quat.conjugate = function (out, a) {
      out[0] = -a[0];
      out[1] = -a[1];
      out[2] = -a[2];
      out[3] = a[3];
      return out;
    };
    /**
     * Calculates the length of a quat
     *
     * @param {quat} a vector to calculate length of
     * @returns {Number} length of a
     * @function
     */


    quat.length = vec4.length;
    /**
     * Alias for {@link quat.length}
     * @function
     */

    quat.len = quat.length;
    /**
     * Calculates the squared length of a quat
     *
     * @param {quat} a vector to calculate squared length of
     * @returns {Number} squared length of a
     * @function
     */

    quat.squaredLength = vec4.squaredLength;
    /**
     * Alias for {@link quat.squaredLength}
     * @function
     */

    quat.sqrLen = quat.squaredLength;
    /**
     * Normalize a quat
     *
     * @param {quat} out the receiving quaternion
     * @param {quat} a quaternion to normalize
     * @returns {quat} out
     * @function
     */

    quat.normalize = vec4.normalize;
    /**
     * Creates a quaternion from the given 3x3 rotation matrix.
     *
     * NOTE: The resultant quaternion is not normalized, so you should be sure
     * to renormalize the quaternion yourself where necessary.
     *
     * @param {quat} out the receiving quaternion
     * @param {mat3} m rotation matrix
     * @returns {quat} out
     * @function
     */

    quat.fromMat3 = function (out, m) {
      // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
      // article "Quaternion Calculus and Fast Animation".
      var fTrace = m[0] + m[4] + m[8];
      var fRoot;

      if (fTrace > 0.0) {
        // |w| > 1/2, may as well choose w > 1/2
        fRoot = Math.sqrt(fTrace + 1.0); // 2w

        out[3] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot; // 1/(4w)

        out[0] = (m[5] - m[7]) * fRoot;
        out[1] = (m[6] - m[2]) * fRoot;
        out[2] = (m[1] - m[3]) * fRoot;
      } else {
        // |w| <= 1/2
        var i = 0;
        if (m[4] > m[0]) i = 1;
        if (m[8] > m[i * 3 + i]) i = 2;
        var j = (i + 1) % 3;
        var k = (i + 2) % 3;
        fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);
        out[i] = 0.5 * fRoot;
        fRoot = 0.5 / fRoot;
        out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;
        out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;
        out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;
      }

      return out;
    };
    /**
     * Returns a string representation of a quatenion
     *
     * @param {quat} vec vector to represent as a string
     * @returns {String} string representation of the vector
     */


    quat.str = function (a) {
      return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';
    };

    if (typeof exports !== 'undefined') {
      exports.quat = quat;
    }

    ;
  })(shim.exports);
})(this);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var glm = __webpack_require__(7);

var elements = __webpack_require__(6);

var consts = __webpack_require__(20);

function clamp(min, max, value) {
  return Math.min(max, Math.max(min, value));
}

var newView = module.exports.new = function () {
  return {
    aspect: 1.0,
    zoom: 0.125,
    translation: {
      x: 0.0,
      y: 0.0
    },
    atomScale: 0.6,
    relativeAtomScale: 1.0,
    bondScale: 0.5,
    rotation: glm.mat4.create(),
    ao: 0.75,
    aoRes: 256,
    brightness: 0.5,
    outline: 0.0,
    spf: 32,
    bonds: false,
    bondThreshold: 1.2,
    bondShade: 0.5,
    atomShade: 0.5,
    resolution: 768,
    dofStrength: 0.0,
    dofPosition: 0.5,
    fxaa: 1
  };
};

var center = module.exports.center = function (v, system) {
  var maxX = -Infinity;
  var minX = Infinity;
  var maxY = -Infinity;
  var minY = Infinity;

  for (var i = 0; i < system.atoms.length; i++) {
    var a = system.atoms[i];
    var r = elements[a.symbol].radius;
    r = 2.5 * v.atomScale * (1 + (r - 1) * v.relativeAtomScale);
    var p = glm.vec4.fromValues(a.x, a.y, a.z, 0);
    glm.vec4.transformMat4(p, p, v.rotation);
    maxX = Math.max(maxX, p[0] + r);
    minX = Math.min(minX, p[0] - r);
    maxY = Math.max(maxY, p[1] + r);
    minY = Math.min(minY, p[1] - r);
  }

  var cx = minX + (maxX - minX) / 2.0;
  var cy = minY + (maxY - minY) / 2.0;
  v.translation.x = cx;
  v.translation.y = cy;
  var scale = Math.max(maxX - minX, maxY - minY);
  v.zoom = 1 / (scale * 1.01);
};

var override = module.exports.override = function (v, data) {
  for (var key in data) {
    v[key] = data[key];
  }

  resolve(v);
};

var clone = module.exports.clone = function (v) {
  return deserialize(serialize(v));
};

var serialize = module.exports.serialize = function (v) {
  return JSON.stringify(v);
};

var deserialize = module.exports.deserialize = function (v) {
  v = JSON.parse(v);
  v.rotation = glm.mat4.clone(v.rotation);
  return v;
};

var resolve = module.exports.resolve = function (v) {
  v.dofStrength = clamp(0, 1, v.dofStrength);
  v.dofPosition = clamp(0, 1, v.dofPosition);
  v.zoom = clamp(0.001, 2.0, v.zoom);
  v.atomScale = clamp(0, 1, v.atomScale);
  v.relativeAtomScale = clamp(0, 1, v.relativeAtomScale);
  v.bondScale = clamp(0, 1, v.bondScale);
  v.bondShade = clamp(0, 1, v.bondShade);
  v.atomShade = clamp(0, 1, v.atomShade);
  v.ao = clamp(0, 1, v.ao);
  v.brightness = clamp(0, 1, v.brightness);
  v.outline = clamp(0, 1, v.outline);
};

var translate = module.exports.translate = function (v, dx, dy) {
  v.translation.x -= dx / (v.resolution * v.zoom);
  v.translation.y += dy / (v.resolution * v.zoom);
  resolve(v);
};

var rotate = module.exports.rotate = function (v, dx, dy) {
  var m = glm.mat4.create();
  glm.mat4.rotateY(m, m, dx * 0.005);
  glm.mat4.rotateX(m, m, dy * 0.005);
  glm.mat4.multiply(v.rotation, m, v.rotation);
  var ao = v.ao;
  v.ao = 0;
  resolve(v);
  v.ao = ao;
};

var getRect = module.exports.getRect = function (v) {
  var width = 1.0 / v.zoom;
  var height = width / v.aspect;
  var bottom = -height / 2 + v.translation.y;
  var top = height / 2 + v.translation.y;
  var left = -width / 2 + v.translation.x;
  var right = width / 2 + v.translation.x;
  return {
    bottom: bottom,
    top: top,
    left: left,
    right: right
  };
};

var getBondRadius = module.exports.getBondRadius = function (v) {
  return v.bondScale * v.atomScale * (1 + (consts.MIN_ATOM_RADIUS - 1) * v.relativeAtomScale);
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _curry2; });
/* harmony import */ var _curry1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);



/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) ? f2 : Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b);
        });
      default:
        return Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) && Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b) ? f2 : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(a) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_a) {
          return fn(_a, b);
        }) : Object(_isPlaceholder_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(b) ? Object(_curry1_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(function (_b) {
          return fn(a, _b);
        }) : fn(a, b);
    }
  };
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlignmentChart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealAlignmentChart = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].alignmentChart);
/**
 * The Alignment Chart (MSA) component is used to align multiple genomic
 * or proteomic sequences from a FASTA or Clustal file. Among its
 * extensive set of features, the multiple sequence alignment chart
 * can display multiple subplots showing gap and conservation info,
 * alongside industry standard colorscale support and consensus sequence.
 * No matter what size your alignment is, Alignment Chart is able to display
 * your genes or proteins snappily thanks to the underlying WebGL architecture
 * powering the component. You can quickly scroll through your long sequence
 * with a slider or a heatmap overview.
 * Read more about the component here:
 * https://github.com/plotly/react-alignment-viewer
 */

var AlignmentChart =
/*#__PURE__*/
function (_Component) {
  _inherits(AlignmentChart, _Component);

  function AlignmentChart() {
    _classCallCheck(this, AlignmentChart);

    return _possibleConstructorReturn(this, _getPrototypeOf(AlignmentChart).apply(this, arguments));
  }

  _createClass(AlignmentChart, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealAlignmentChart, this.props));
    }
  }]);

  return AlignmentChart;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


AlignmentChart.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * A Dash prop that returns data on clicking, hovering or resizing the viewer.
   */
  eventDatum: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Input data, either in FASTA or Clustal format.
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   *Format type of the input data, either in FASTA or Clustal.
   */
  extension: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Colorscale in 'buried', 'cinema', 'clustal', 'clustal2', 'helix', 'hydrophobicity'
   * 'lesk', 'mae', 'nucleotide', 'purine', 'strand', 'taylor', 'turn', 'zappo',
   * or your own colorscale as a {'nucleotide': COLOR} dict.
   * Note that this is NOT a standard plotly colorscale.
   */
  colorscale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),

  /**
   * Opacity of the main plot as a value between 0 and 1.
   */
  opacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * Color of the nucleotide labels, in common name, hex, rgb or rgba format.
   * If left blank, handled by the colorscale automatically.
   */
  textcolor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Size of the nucleotide labels, as a number.
   */
  textsize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * Toggles displaying sequence labels at left of alignment
   */
  showlabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Toggles displaying sequence IDs at left of alignment.
   */
  showid: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Enables the display of conservation secondary barplot where the most conserved
   * nucleotides or amino acids get greater bars.
   */
  showconservation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Color of the conservation secondary barplot, in common name, hex, rgb or rgba format.
   */
  conservationcolor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Colorscale of the conservation barplot, in Plotly colorscales (e.g. 'Viridis')
   * or as custom Plotly colorscale under a list format.
   * Note that this conservationcolorscale argument
   * does NOT follow the same format as the colorscale argument.
   */
  conservationcolorscale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]),

  /**
   * Opacity of the conservation secondary barplot as a value between 0 and 1.
   */
  conservationopacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * Whether to use most conserved ratio (MLE) 'conservation'
   * or normalized entropy 'entropy' to determine conservation,
   * which is a value between 0 and 1 where 1 is most conserved.
   */
  conservationmethod: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['conservation', 'entropy']),

  /**
   * Whether to normalize the conservation barchart
   * By multiplying it elementwise with the gap barchart, as to
   * lower the conservation values across sequences regions with many gaps.
   */
  correctgap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Enables the display of gap secondary barplot where the sequence regions
   * with the fewest gaps get the greatest bars.
   */
  showgap: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Color of the gap secondary barplot, in common name, hex, rgb or rgba format.
   */
  gapcolor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Colorscale of the gap barplot, in Plotly colorscales (e.g. 'Viridis')
   * or as custom Plotly colorscale under a list format.
   * Note that this conservationcolorscale argument
   * does NOT follow the same format as the colorscale argument.
   */
  gapcolorscale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]),

  /**
   * Opacity of the gap secondary barplot as a value between 0 and 1.
   */
  gapopacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * If both conservation and gap are enabled,
   * toggles whether to group bars or to stack them as separate subplots.
   * No effect if not both gap and conservation are shown.
   */
  groupbars: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Displays toggling the consensus sequence, where each nucleotide in the
   * consensus sequence is the argmax of its distribution at a set nucleotide.
   */
  showconsensus: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Sets how many pixels each nucleotide/amino acid on the Alignment Chart
   * takes up horizontally. The total number of tiles (numtiles) seen
   * horizontally is automatically determined by rounding
   * the Viewer width divided by the tile width.
   * the Viewwer width divided by the tile witdth.
   */
  tilewidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Sets how many pixels each nucleotide/amino acid on the Alignment Chart
   * takes up vertically.
   * If enabled, set height dynamically.
   */
  tileheight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Toggles whether the overview should be a heatmap, a slider, or none.
   */
  overview: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['heatmap', 'slider', 'none']),

  /**
   * Sets how many tiles to display across horitontally. If enabled,
   * overrides tilewidth and sets the amount of tiles directly based off
   * that value.
   */
  numtiles: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * If overview is set to 'scroll', determines how many tiles to skip
   * with each slider movement.
   * Has no effect if scroll is not enabled (such as with overview or none).
   */
  scrollskip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Determines where to start annotating the first tile.
   * If let blank will be automatically determined by Plotly.
   * Equivalent to Plotly's tick0 property.
   * Does not function if overview mode 'slider' is applied. (Current bug)
   */
  tickstart: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * Determines at what interval to keep annotating the tiles.
   * If left blank will be automatially determined by Plotly.
   * Equivalent to Plotly's dtick property.
   * Does not function if overview mode 'slider' is applied. (Current bug)
   */
  ticksteps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * Width of the Viewer.
   * Property takes precedence over tileswidth and numtiles
   * if either of them is set.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * Width of the Viewer.
   * Property takes precedence over tilesheight if both
   * are set.
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
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
  height: 900
};
var propTypes = AlignmentChart.propTypes;
var defaultProps = AlignmentChart.defaultProps;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ideogram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealIdeogram = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].ideogram);
/**
 * The Ideogram component is used to draw and animate genome-wide
 * datasets for organisms such as human, mouse, and any other
 * eukaryote. The Ideogram component can be used to compare
 * homologous features between chromosomes, and depict
 * haploid, diploid, aneuploid genomes. It can also display
 * annotations on genomic data using histograms and overlays.
 *
 * Reference: https://eweitz.github.io/ideogram/
 * Component's props: https://github.com/eweitz/ideogram/blob/master/api.md
 */

var Ideogram =
/*#__PURE__*/
function (_Component) {
  _inherits(Ideogram, _Component);

  function Ideogram() {
    _classCallCheck(this, Ideogram);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ideogram).apply(this, arguments));
  }

  _createClass(Ideogram, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealIdeogram, this.props));
    }
  }]);

  return Ideogram;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Ideogram.defaultProps = {
  organism: 'human',
  dataDir: 'https://unpkg.com/ideogram@1.5.0/dist/data/bands/native/',
  annotationsColor: '#F00',
  annotationsLayout: 'tracks',
  barWidth: 3,
  chrHeight: 400,
  chrMargin: 10,
  chrWidth: 10,
  ploidy: 1,
  rotatable: true,
  showBandLabels: false,
  showChromosomeLabels: true,
  showAnnotTooltip: true,
  showFullyBanded: true,
  showNonNuclearChromosomes: false
};
Ideogram.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks and used to identify Ideogram
   * instances.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,

  /**
   * The component's inline styles
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Dash specific prop type connecting event handlers to front end.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * The CSS class of the component wrapper
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Layout of ideogram annotations.
   * One of "tracks", "histogram", or "overlay".
   *
   * "tracks": display annotations in tracks beside each chromosome.
   *
   * "histogram": display annotations in a histogram. Clusters annotations by location. Each
   * cluster/bin is shown as a bar, the height of which represents the number of annotations on
   * genomic range.
   *
   * "overlay": display annotations directly over chromosomes.
   */
  annotationsLayout: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['tracks', 'histogram', 'overlay']),

  /**
   * A list of annotation objects. Annotation objects can also have a name, color, shape, and
   * track index. At the moment there is more keys specified and the docs need updating.
   */
  annotations: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    chr: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    stop: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })),

  /**
   * An absolute or relative URL directing to a JSON file containing annotation objects (JSON).
   */
  annotationsPath: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Use this prop in a dash callback to return annotationData when hovered.
   * It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
   * dash.dependencies.Input
   */
  annotationsData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * A list of objects with metadata for each track, e.g., id, display name, color, shape.
   */
  annotationTracks: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),

  /**
   * Not used if annotationsLayout is set to "overlay".
   * The height of histogram bars or the size of annotations tracks symbols
   */
  annotationHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Color of annotations.
   */
  annotationsColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Scaling of histogram bars height
   * Only used if annotationsLayout is set to "histogram".
   * One of "absolute" or "relative".
   *
   * "absolute": sets bar height relative to tallest bar in all chromosomes.
   * "relative": sets bar height relative to tallest bar in each chromosome.
   */
  histogramScaling: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['absolute', 'relative']),

  /**
   * Pixel width of histogram bars.
   * Only used if annotationsLayout is set to "histogram".
   **/
  barWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Whether to show a tooltip upon mousing over an annotation.
   */
  showAnnotTooltip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Default: latest RefSeq assembly for specified organism.
   * The genome assembly to display.
   * Takes assembly name (e.g., "GRCh37"),
   * RefSeq accession (e.g., "GCF_000306695.2"),
   * or GenBank accession (e.g., "GCA_000005005.5")
   */
  assembly: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Genomic coordinate range (e.g., "chr1:104325484-119977655") for a brush on a
   * chromosome. Useful when ideogram consists of one chromosome and you want to be
   * able to focus on a region within that chromosome,
   * and create an interactive sliding window to other regions
   */
  brush: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * A dash callback that is activated when the 'brush' prop is used.
   * It will return an dictionary like so:
   * {'start': <value>, 'end': <value>, 'extent': <value>}
   * where start is the left most edge, end is right most edge, and extent is the total width of
   * the brush.
   * It is read-only, i.e., it cannot be used with dash.dependencies.Output but only with
   * dash.dependencies.Input
   */
  brushData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    end: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    extent: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }),

  /**
   * CSS styling and the id of the container holding the Ideogram in
   * react-ideogram.js, this is where all the d3 magic happens.
   */
  container: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * The pixel height of the tallest chromosome in the ideogram
   */
  chrHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * The pixel space of margin between each chromosome.
   */
  chrMargin: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * The pixel width of each chromosome.
   */
  chrWidth: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * A list of the names of chromosomes to display. Useful for depicting a subset of the
   * chromosomes in the genome, e.g., a single chromosome.
   *
   * If Homology (between two different species):
   * Ex: chromosomes={
   *       'human': ['1'],
   *       'mouse': ['4']
   * }
   *
   * General case to specify specific chromosomes:
   * Ex: chromosomes=['1', '2']
   */
  chromosomes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),

  /**
   * Absolute or relative URL of the directory containing data needed to draw banded chromosomes.
   * You will need to set up your own database to grab data from a custom database.
   */
  dataDir: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Organism(s) to show chromosomes for. Supply organism's name as a string (e.g., "human") or
   * organism's NCBI Taxonomy ID (taxid, e.g., 9606) to display chromosomes from a single
   * organism, or an array of organisms' names or taxids to display chromosomes from multiple
   * species.
   */
  organism: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]),

  /**
   * Provide local JSON organism into this prop from a local user JSON file.
   * DataDir must not be initialized.
   */
  localOrganism: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Used to compare two chromosomes.
   * The keys "chrOne" and "chrTwo" represent one chromosome each. Organism is the taxID or name.
   * Start is an array, containing start one and start two, in this order. Stop is an array,
   * containing stop one, and stop two, in this order.
   * Ex: homology={
   *     "chrOne": {
   *         organism": "9606",
   *         "start": [50000, 155701383],
   *         "stop": [900000, 156030895]
   *     },
   *     "chrTwo": {
   *         organism": "10090",
   *         "start": [10001, 50000000],
   *         "stop": [2781479, 57217415]
   *     }
   * }
   */
  homology: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    chrOne: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      organism: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired),
      stop: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired)
    }),
    chrTwo: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      organism: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
      start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired),
      stop: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number.isRequired)
    })
  }),

  /**
   * Use perspective: 'comparative' to enable annotations between two chromosomes,
   * either within the same organism or different organisms. Used for homology.
   */
  perspective: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['comparative']),

  /**
   * Whether to include abbreviation species name in chromosome label. Used for homology.
   */
  fullChromosomeLabels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * The resolution of cytogenetic bands to show for each chromosome.
   * The quantity refers to an approximate value in bands per haploid set (bphs).
   * One of 450, 550, or 850.
   */
  resolution: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Whether annotations should be filterable or not.
   */
  filterable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * The orientation of chromosomes on the page.
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['vertical', 'horizontal']),

  /**
   * The ploidy - number of chromosomes to depict for each chromosome set.
   */
  ploidy: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Description of ploidy in each chromosome set in terms of ancestry composition.
   */
  ploidyDesc: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),

  /**
   * A map associating ancestor labels to colors. Used to color
   * chromosomes from different ancestors in polyploid genomes.
   */
  ancestors: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * List of objects describing segments of recombination among chromosomes in a chromosome set.
   */
  rangeSet: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object),

  /**
   * Whether chromosomes are rotatable on click.
   */
  rotatable: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Dash callback that returns true if rotated, and false if not.
   *
   */
  rotated: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Useful for omitting chromosome Y in female animals.
   * Currently only supported for organisms that use XY sex-determination.
   */
  sex: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['male', 'female']),

  /**
   * Whether to show chromosome labels, e.g., 1, 2, 3, X, Y.
   */
  showChromosomeLabels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Whether to show cytogenetic band labels, e.g., 1q21.
   **/
  showBandLabels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Whether to show fully banded chromosomes for genomes that have sufficient data. Useful for
   * showing simpler chromosomes of cytogenetically well-characterized organisms, e.g., human,
   * beside chromosomes of less studied organisms, e.g., chimpanzee.
   */
  showFullyBanded: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Whether to show non-nuclear chromosomes,
   * e.g., for mitochondrial (MT) and chloroplast (CP) DNA.
   */
  showNonNuclearChromosomes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
  /**
   * Callback function to invoke after chromosome has rotated. (React)
   * onDidRotate: PropTypes.func,
   */

  /**
   * Dash event callback for hovering over data.
   * onMouseOver: PropTypes.func,
   */

  /**
   * Callback function to invoke when brush moves.
   * onBrushMove: PropTypes.func,
   */

  /**
   * Callback function to invoke when annotations are drawn. (React)
   * onDrawAnnots: PropTypes.func,
   */

  /**
   * Callback function to invoke when chromosomes are loaded,
   * i.e., rendered on the page. (React)
   * onLoad: PropTypes.func,
   */

  /**
   * Useful for putting ideogram into a small container,
   * or when dealing with genomes that have many chromosomes.
   * Note: Not fully working, needs to be fixed by developer.
   * rows: PropTypes.number,
   */

  /**
   * This is a work in progess and will hopefully be fixed in future releases.
   * https://eweitz.github.io/ideogram/annotations-heatmap
   * heatmaps: PropTypes.arrayOf(PropTypes.object),
   */

};
var defaultProps = Ideogram.defaultProps;
var propTypes = Ideogram.propTypes;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Molecule2dViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealMolecule2dViewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].molecule2dViewer);
/**
 * The Molecule2dViewer component is used to render structural
 * formulae of molecules.
 * Read more about the component here:
 * https://github.com/Autodesk/molecule-2d-for-react
 */

var Molecule2dViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(Molecule2dViewer, _Component);

  function Molecule2dViewer() {
    _classCallCheck(this, Molecule2dViewer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Molecule2dViewer).apply(this, arguments));
  }

  _createClass(Molecule2dViewer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealMolecule2dViewer, this.props));
    }
  }]);

  return Molecule2dViewer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Molecule2dViewer.defaultProps = {
  width: 500,
  height: 500,
  modelData: {
    nodes: [],
    links: []
  }
};
Molecule2dViewer.propTypes = {
  /**
   * The ID used to identify this component in callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Dash-assigned callback that should be called whenever properties change.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * The selected atom IDs.
   */
  selectedAtomIds: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number),

  /**
   * The width of the SVG element.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * The height of the SVG element.
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Description of the molecule to display.
   */
  modelData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    nodes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      atom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
    })),
    links: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      source: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number | prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape,
      target: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number | prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape,
      bond: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      strength: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      distance: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
    }))
  })
};
var defaultProps = Molecule2dViewer.defaultProps;
var propTypes = Molecule2dViewer.propTypes;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Molecule3dViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealMolecule3dViewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].molecule3dViewer);
/**
 * The Molecule3dViewer component is used to render schematic diagrams
 * of biomolecules. It can display ribbon-structure diagrams, or
 * render atoms in the molecule as sticks or spheres.
 * Read more about the component here:
 * https://github.com/Autodesk/molecule-3d-for-react
 */

var Molecule3dViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(Molecule3dViewer, _Component);

  function Molecule3dViewer() {
    _classCallCheck(this, Molecule3dViewer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Molecule3dViewer).apply(this, arguments));
  }

  _createClass(Molecule3dViewer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealMolecule3dViewer, this.props));
    }
  }]);

  return Molecule3dViewer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Molecule3dViewer.defaultProps = {
  selectionType: 'atom',
  backgroundColor: '#FFFFFF',
  backgroundOpacity: 0
};
Molecule3dViewer.propTypes = {
  /**
   * The ID used to identify this component in callbacks
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Dash-assigned callback that should be called whenever properties change
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * The selection type - may be atom, residue or chain
   */
  selectionType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['atom', 'residue', 'chain']),

  /**
   * Property to change the background color of the molecule viewer
   */
  backgroundColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Property to change the background opacity - ranges from 0 to 1
   */
  backgroundOpacity: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Property that can be used to change the representation of
   * the molecule. Options include sticks, cartoon and sphere
   */
  styles: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    visualization_type: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['cartoon', 'sphere', 'stick'])
  })),

  /**
   * The data that will be used to display the molecule in 3D
   * The data will be in JSON format
   * and should have two main dictionaries - atoms, bonds
   */
  modelData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    atoms: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
    bonds: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
  }),

  /**
   * Property to either show or hide labels
   */
  atomLabelsShown: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Property that stores a list of all selected atoms
   */
  selectedAtomIds: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
   * labels corresponding to the atoms of the molecule
   */
  labels: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
   * Callback to re-render molecule viewer
   * when modelData is changed
   */
  onRenderNewData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * Callback to change append selectedAtomIds
   * when a selection is made
   */
  onChangeSelection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = Molecule3dViewer.defaultProps;
var propTypes = Molecule3dViewer.propTypes;

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NeedlePlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealNeedlePlot = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].needlePlot);
/**
 * The Needle Plot component is used to visualize large datasets
 * containing categorical or numerical data. The lines and markers in
 * the plot correspond to bars in a histogram.
 **/

var NeedlePlot =
/*#__PURE__*/
function (_Component) {
  _inherits(NeedlePlot, _Component);

  function NeedlePlot() {
    _classCallCheck(this, NeedlePlot);

    return _possibleConstructorReturn(this, _getPrototypeOf(NeedlePlot).apply(this, arguments));
  }

  _createClass(NeedlePlot, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealNeedlePlot, this.props));
    }
  }]);

  return NeedlePlot;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


NeedlePlot.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * The data that are displayed on the plot
   */
  mutationData: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    /*
    coordinate of mutations on the protein sequence
    */
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]),

    /* value (could be the sample count), this property is not necessarily
    relevant, should match x in size
    */
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array]),

    /*
    type of mutations, should match x in size
    */
    mutationGroups: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string),

    /*
    protein domains coordinates on the protein sequence
    */
    domains: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array
  }),

  /**
   * Title of the x-axis.
   **/
  xlabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Title of the y-axis.
   **/
  ylabel: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * If true, enables a rangeslider for the x-axis.
   **/
  rangeSlider: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Options for the needle marking single site mutations
   */
  needleStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    // Color of the stems of the needles
    stemColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    // Thickness of the stems of the needles
    stemThickness: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    // Decides whether all stems have same height or not
    stemConstHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    // Size of the heads of the needlehead
    headSize: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    // Color of the heads of the needlehead
    headColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([
    /* different color for different mutations, must be larger or
    equal to the size of the mutationGroup prop
    */
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, // same color for all needles
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),
    // Style of the heads of the needlehead
    headSymbol: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([
    /* different marker for different mutations, must be larger or
    equal to the size of the mutationGroup prop
    */
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array, // same marker for all needles
    prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
  }),

  /**
   * Options for the protein domain coloring
   */
  domainStyle: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    // Color of the protein domains
    domainColor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

    /*
    the prop x sometimes contains smaller domains (e.g. multi-site
    mutations), if true, they are displayed
    */
    displayMinorDomains: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
  }),

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
NeedlePlot.defaultProps = {
  mutationData: {
    x: [],
    y: [],
    domains: [],
    mutationGroups: []
  },
  rangeSlider: false,
  needleStyle: {
    stemColor: '#444',
    stemThickness: 0.5,
    stemConstHeight: false,
    headSize: 5,
    headColor: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999', '#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999', '#e41a1c'],
    headSymbol: 'circle'
  },
  domainStyle: {
    displayMinorDomains: false,
    domainColor: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f', '#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69']
  }
};
var defaultProps = NeedlePlot.defaultProps;
var propTypes = NeedlePlot.propTypes;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OncoPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealOncoPrint = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].oncoPrint);
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
function (_Component) {
  _inherits(OncoPrint, _Component);

  function OncoPrint() {
    _classCallCheck(this, OncoPrint);

    return _possibleConstructorReturn(this, _getPrototypeOf(OncoPrint).apply(this, arguments));
  }

  _createClass(OncoPrint, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealOncoPrint, this.props));
    }
  }]);

  return OncoPrint;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


OncoPrint.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique to the component.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func,

  /**
   * A Dash prop that returns data on clicking, hovering or resizing the viewer.
   */
  eventDatum: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,

  /**
   * Input data, in CBioPortal format where each list entry is a dict
   * consisting of 'sample', 'gene', 'alteration', and 'type'
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,
  // TODO: Add remove empty columns prop

  /**
   * Adjusts the padding (as a proportion of whitespace) between two tracks.
   * Value is a ratio between 0 and 1.
   * Defaults to 0.05 (i.e., 5 percent). If set to 0, plot will look like a heatmap.
   */
  padding: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * If not null, will override the default OncoPrint colorscale.
   * Default OncoPrint colorscale same as CBioPortal implementation.
   * Make your own colrscale as a {'mutation': COLOR} dict.
   * Supported mutation keys are ['MISSENSE, 'INFRAME', 'FUSION',
   * 'AMP', 'GAIN', 'HETLOSS', 'HMODEL', 'UP', 'DOWN']
   * Note that this is NOT a standard plotly colorscale.
   */
  colorscale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object]),

  /**
   * Default color for the tracks, in common name, hex, rgb or rgba format.
   * If left blank, will default to a light grey rgb(190, 190, 190).
   */
  backgroundcolor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   *.Toogles whether or not to show a legend on the right side of the plot,
   * with mutation information.
   */
  range: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.array,

  /**
   *.Toogles whether or not to show a legend on the right side of the plot,
   * with mutation information.
   */
  showlegend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   *.Toogles whether or not to show a heatmap overview of the tracks.
   */
  showoverview: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * Width of the OncoPrint.
   * Will disable auto-resizing of plots if set.
   */
  width: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string]),

  /**
   * Height of the OncoPrint.
   * Will disable auto-resizing of plots if set.
   */
  height: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string])
};
OncoPrint.defaultProps = {
  // Layout
  padding: 0.05,
  colorscale: null,
  backgroundcolor: 'rgb(190, 190, 190)',
  range: [null, null],
  showlegend: true,
  showoverview: true,
  width: null,
  height: 500
};
var defaultProps = OncoPrint.defaultProps;
var propTypes = OncoPrint.propTypes;

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequenceViewer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var RealSequenceViewer = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].sequenceViewer);
/**
 * The sequence viewer component is used to display sequences
 * that represent proteins, strands of genomic information, and
 * more. It can apply a coverage to the sequence supplied (with
 * clickable coverage sections that can display specific information,
 * and an optional legend to describe the color codes used),
 * search through the sequence for specific regex, capture
 * mouse selection events of subparts of the sequence, display a
 * count of the number of nucleotides or amino acids in the
 * sequence,
 * Read more about the component here:
 * https://github.com/FlyBase/react-sequence-viewer
 */

var SequenceViewer =
/*#__PURE__*/
function (_Component) {
  _inherits(SequenceViewer, _Component);

  function SequenceViewer() {
    _classCallCheck(this, SequenceViewer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SequenceViewer).apply(this, arguments));
  }

  _createClass(SequenceViewer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealSequenceViewer, this.props));
    }
  }]);

  return SequenceViewer;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


SequenceViewer.defaultProps = {
  sequence: '-',
  showLineNumbers: true,
  wrapAminoAcids: true,
  charsPerLine: 40,
  toolbar: false,
  search: true,
  title: '',
  sequenceMaxHeight: '400px',
  badge: true,
  selection: [],
  coverage: []
};
/* eslint-disable consistent-return, no-unused-vars */

SequenceViewer.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * The amino acid sequence that will be displayed.
   */
  sequence: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * The option of whether or not to display line numbers.
   */
  showLineNumbers: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * The option of whether or not to display the list of amino acids
   * as broken up into separate lines of a fixed length set by
   * charsPerLine.
   */
  wrapAminoAcids: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * The number of amino acids that will display per line.
   */
  charsPerLine: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * The option of whether or not to display a toolbar at the top
   * that allows the user to choose the number of letters per line.
   */
  toolbar: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * The option of whether or not to include a search bar in
   * the header. This supports regex.
   */
  search: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * A string that displays at the top of the component.
   */
  title: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * The maximum height of the sequence.
   */
  sequenceMaxHeight: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * The option of whether or not to display a badge showing the
   * amino acid count at the top of the component beside the title.
   */
  badge: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * A highlighted section of the sequence; the color of the highlight
   * can also be defined. Takes a list of format [min, max, color] where
   * min is a number that represents the starting index of the selection,
   * max is a number that represents the stopping index of the selection,
   * and color is a string that defines the highlight color.
   * Cannot be used at the same time as coverage.
   */
  selection: function selection(props, propName, componentName) {
    if (props[propName] !== undefined && (typeof props[propName][0] !== 'undefined' && typeof props[propName][0] !== 'number' || typeof props[propName][1] !== 'undefined' && typeof props[propName][1] !== 'number' || typeof props[propName][2] !== 'undefined' && typeof props[propName][2] !== 'string')) {
      return new Error('Invalid prop value. Selection should be an array with type [number, number, string].');
    }
  },

  /**
   * A coverage of the entire sequence; each section of the sequence
   * can have its own text color, background color, tooltip (on hover),
   * and an optional underscore. The props start and end represent the
   * beginning and terminating indices of the section in question.
   * Cannot be used at the same time as selection.
   */
  coverage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    end: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    bgcolor: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    tooltip: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    underscore: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    onclick: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
  })),

  /**
   * A legend corresponding to the color codes above (optionally displayed).
   */
  legend: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    name: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    color: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    underscore: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool
  })),

  /**
   * Contains the index of the section that was clicked last in
   * the coverage list supplied.
   */
  coverageClicked: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,

  /**
   * Contains information about the subsequence selected
   * by the mouse. Start and end refer to the initial and
   * final indices, respectively, of the subsequence, and
   * "selection" contains the string that is selected.
   */
  mouseSelection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    end: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    selection: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  }),

  /**
   * A list of the subparts selected using the
   * "search" function or the "selection" property.
   */
  subpartSelected: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    start: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    end: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    sequence: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
  })),

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = SequenceViewer.defaultProps;
var propTypes = SequenceViewer.propTypes;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Speck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _LazyLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var speck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(19);
/* harmony import */ var speck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(speck__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RealSpeck = Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_LazyLoader__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].speck);
/**
 * The Speck component is a WebGL-based 3D molecule renderer.
 * Read more about the component here:
 * https://github.com/wwwtyro/speck
 **/

var Speck =
/*#__PURE__*/
function (_Component) {
  _inherits(Speck, _Component);

  function Speck() {
    _classCallCheck(this, Speck);

    return _possibleConstructorReturn(this, _getPrototypeOf(Speck).apply(this, arguments));
  }

  _createClass(Speck, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Suspense"], {
        fallback: null
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RealSpeck, this.props));
    }
  }]);

  return Speck;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);


Speck.defaultProps = {
  view: speck__WEBPACK_IMPORTED_MODULE_3__["speckView"].new(),
  data: []
};
Speck.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,

  /**
   * The xyz file data; a list of atoms such that each atom
   * has a dictionary defining the x, y, and z coordinates
   * along with the atom's symbol.
   */
  data: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    symbol: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
    x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    z: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  })),

  /**
   * The option of whether or not to allow scrolling to control
   * the zoom.
   */
  scrollZoom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,

  /**
   * An object that determines and controls various parameters
   * related to how the molecule is displayed.
   */
  view: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
    aspect: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    zoom: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    translation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
      x: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
      y: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
    }),
    atomScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    relativeAtomScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    bondScale: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    rotation: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({}),
    ao: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    aoRes: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    brightness: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    outline: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    spf: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    bonds: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.bool,
    bondThreshold: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    bondShade: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    atomShade: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    resolution: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    dofStrength: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    dofPosition: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
    fxaa: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
  }),

  /**
   * One of several pre-loaded views: default, stick-ball, toon,
   * and licorice
   */
  presetView: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOf(['default', 'stickball', 'toon', 'licorice']),

  /**
   * Dash-assigned callback that should be called whenever any of the
   * properties change.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func
};
var defaultProps = Speck.defaultProps;
var propTypes = Speck.propTypes;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./src/lib/LazyLoader.js
var LazyLoader = __webpack_require__(2);

// CONCATENATED MODULE: ./src/lib/constants/tracks.js
var CHORDS = 'CHORDS';
var HEATMAP = 'HEATMAP';
var HIGHLIGHT = 'HIGHLIGHT';
var HISTOGRAM = 'HISTOGRAM';
var LINE = 'LINE';
var SCATTER = 'SCATTER';
var STACK = 'STACK';
var TEXT = 'TEXT';
var TRACK_TYPES = [CHORDS, HEATMAP, HIGHLIGHT, HISTOGRAM, LINE, SCATTER, STACK, TEXT];
// CONCATENATED MODULE: ./src/lib/components/Circos.react.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Circos_react_Circos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return propTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return defaultProps; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var RealCircos = Object(external_React_["lazy"])(LazyLoader["a" /* default */].circos);
/**
 * Dash Circos is a library used to analyze and interpret
 * data using a circular layout, based on the popular
 * 'Circos' graph. This Dash Bio component is a useful tool
 * for showcasing relationships bewtween data/datasets in a
 * beautiful way. Please checkout the Dash Bio repository
 * on github to learn more about this API.
 */

var Circos_react_Circos =
/*#__PURE__*/
function (_Component) {
  _inherits(Circos, _Component);

  function Circos() {
    _classCallCheck(this, Circos);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circos).apply(this, arguments));
  }

  _createClass(Circos, [{
    key: "render",
    value: function render() {
      return external_React_default.a.createElement(external_React_["Suspense"], {
        fallback: null
      }, external_React_default.a.createElement(RealCircos, this.props));
    }
  }]);

  return Circos;
}(external_React_["Component"]);


Circos_react_Circos.defaultProps = {
  config: {},
  size: 800,
  tracks: []
};
Circos_react_Circos.propTypes = {
  /**
   * Allow for an SVG snapshot of the Circos graph to be downloaded.
   **/
  enableDownloadSVG: prop_types_default.a.bool,

  /**
   * Allow for zooming and panning the Circos graph.
   **/
  enableZoomPan: prop_types_default.a.bool,

  /**
   * The ID of the component to be used in Dash callbacks
   */
  id: prop_types_default.a.string,

  /**
   * The CSS styling of the div wrapping the component
   */
  style: prop_types_default.a.object,

  /**
   * A Dash prop that returns data on clicking or hovering of the tracks.
   * Depending on what is specified for prop "selectEvent".
   */
  eventDatum: prop_types_default.a.object,

  /**
  * A dictionary used to choose whether tracks should return
  * data on click, hover, or both, with the dash prop "eventDatum".
  * The keys of the dictionary represent the index of the list
  * specified for "tracks".
  * Ex:
  * selectEvent={
      "0": "hover",
      "1": "click",
      "2": "both"
  },
  */
  selectEvent: prop_types_default.a.object,

  /**
   * Dash provided setProps.
   */
  setProps: prop_types_default.a.func,

  /**
   * The overall layout of the Circos graph, provided
   * as a list of dictionaries.
   */
  layout: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    /**
     * The length of the block.
     */
    len: prop_types_default.a.number.isRequired,

    /**
     * The color of the block.
     */
    color: prop_types_default.a.string.isRequired,

    /**
     * The labels of the block.
     */
    label: prop_types_default.a.string.isRequired,

    /**
     * The id of the block, where it will recieve
     * data from the specified "track" id.
     */
    id: prop_types_default.a.string.isRequired
  })).isRequired,

  /**
   * Configuration of overall layout of the graph.
   */
  config: prop_types_default.a.object,

  /**
   * The overall size of the SVG container holding the
   * graph. Set on initilization and unchangeable thereafter.
   */
  size: prop_types_default.a.number,

  /**
   * Tracks that specify specific layouts.
   * For a complete list of tracks and usage,
   * please check the docs.
   */
  tracks: prop_types_default.a.arrayOf(prop_types_default.a.shape({
    /**
     * The id of a specific piece of track data.
     */
    id: prop_types_default.a.string,

    /**
     * The data that makes up the track. It can
     * be a Json object.
     */
    data: prop_types_default.a.array.isRequired,

    /**
     * The layout of the tracks, where the user
     * can configure innerRadius, outterRadius, ticks,
     * labels, and more.
     */
    config: prop_types_default.a.object,

    /**
     * Specify the type of track this is.
     * Please check the docs for a list of tracks you can use,
     * and ensure the name is typed in all capitals.
     **/
    type: prop_types_default.a.oneOf(TRACK_TYPES),

    /**
     * Specify what data for tooltipContent is
     * displayed.
     * The entry for the "name" key, is any of the keys used in the data loaded into tracks.
     * Ex: "tooltipContent": {"name": "block_id"},
     * To display all data in the dataset use "all" as the entry for the key "name".
     * Ex: "tooltipContent": {"name": "all"}
     * Ex: This will return (source) + ' > ' + (target) + ': ' + (targetEnd)'.
     * "tooltipContent": {
        "source": "block_id",
        "target": "position",
        "targetEnd": "value"
                },
     * Ex: This will return (source)(sourceID) + ' > ' + (target)(targetID) + ': ' (target)(targetEnd)'.
     * "tooltipContent": {
        "source": "source",
        "sourceID": "id",
        "target": "target",
        "targetID": "id",
        "targetEnd": "end"
    }
     **/
    tooltipContent: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.shape({
      name: prop_types_default.a.string.isRequired
    }), prop_types_default.a.shape({
      source: prop_types_default.a.string.isRequired,
      sourceID: prop_types_default.a.string,
      target: prop_types_default.a.string.isRequired,
      targetEnd: prop_types_default.a.string.isRequired,
      targetID: prop_types_default.a.string
    })]),

    /**
     * Specify which dictonary key to grab color values from, in the passed in dataset.
     * This can be a string or an object.
     * If using a string, you can specify hex,
     * RGB, and colors from d3 scale chromatic (Ex: RdYlBu).
     * The key "name" is required for this dictionary,
     * where the input for "name" points to some list of
     * dictionaries color values.
     * Ex: "color": {"name": "some key that refers to color in a data set"}
     *
     **/
    color: prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.shape({
      name: prop_types_default.a.string.isRequired
    })])
  }))
};
var propTypes = Circos_react_Circos.propTypes;
var defaultProps = Circos_react_Circos.defaultProps;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var speckRenderer = __webpack_require__(25);

var speckSystem = __webpack_require__(21);

var speckView = __webpack_require__(8);

var speckInteractions = __webpack_require__(29);

var speckPresetViews = __webpack_require__(30);

module.exports = {
  speckRenderer: speckRenderer,
  speckSystem: speckSystem,
  speckView: speckView,
  speckInteractions: speckInteractions,
  speckPresetViews: speckPresetViews
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var elements = __webpack_require__(6);

var MIN_ATOM_RADIUS = Infinity;
var MAX_ATOM_RADIUS = -Infinity;

for (var i = 0; i <= 118; i++) {
  MIN_ATOM_RADIUS = Math.min(MIN_ATOM_RADIUS, elements[i].radius);
  MAX_ATOM_RADIUS = Math.max(MAX_ATOM_RADIUS, elements[i].radius);
}

module.exports.MIN_ATOM_RADIUS = MIN_ATOM_RADIUS;
module.exports.MAX_ATOM_RADIUS = MAX_ATOM_RADIUS;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var glm = __webpack_require__(7);

var elements = __webpack_require__(6);

var consts = __webpack_require__(20);

var newSystem = module.exports.new = function () {
  return {
    atoms: [],
    farAtom: undefined,
    bonds: []
  };
};

var calculateBonds = module.exports.calculateBonds = function (s) {
  var bonds = [];
  var sorted = s.atoms.slice();
  sorted.sort(function (a, b) {
    return a.z - b.z;
  });

  for (var i = 0; i < sorted.length; i++) {
    var a = sorted[i];
    var j = i + 1;

    while (j < sorted.length && sorted[j].z < sorted[i].z + 2.5 * 2 * consts.MAX_ATOM_RADIUS) {
      var b = sorted[j];
      var l = glm.vec3.fromValues(a.x, a.y, a.z);
      var m = glm.vec3.fromValues(b.x, b.y, b.z);
      var d = glm.vec3.distance(l, m);
      var ea = elements[a.symbol];
      var eb = elements[b.symbol];

      if (d < 2.5 * (ea.radius + eb.radius)) {
        bonds.push({
          posA: {
            x: a.x,
            y: a.y,
            z: a.z
          },
          posB: {
            x: b.x,
            y: b.y,
            z: b.z
          },
          radA: ea.radius,
          radB: eb.radius,
          colA: {
            r: ea.color[0],
            g: ea.color[1],
            b: ea.color[2]
          },
          colB: {
            r: eb.color[0],
            g: eb.color[1],
            b: eb.color[2]
          },
          cutoff: d / (ea.radius + eb.radius)
        });
      }

      j++;
    }
  }

  bonds.sort(function (a, b) {
    return a.cutoff - b.cutoff;
  });
  s.bonds = bonds;
};

var addAtom = module.exports.addAtom = function (s, symbol, x, y, z) {
  s.atoms.push({
    symbol: symbol,
    x: x,
    y: y,
    z: z
  });
};

var getCentroid = module.exports.getCentroid = function (s) {
  var xsum = 0;
  var ysum = 0;
  var zsum = 0;

  for (var i = 0; i < s.atoms.length; i++) {
    xsum += s.atoms[i].x;
    ysum += s.atoms[i].y;
    zsum += s.atoms[i].z;
  }

  return {
    x: xsum / s.atoms.length,
    y: ysum / s.atoms.length,
    z: zsum / s.atoms.length
  };
};

var center = module.exports.center = function (s) {
  var shift = getCentroid(s);

  for (var i = 0; i < s.atoms.length; i++) {
    var atom = s.atoms[i];
    atom.x -= shift.x;
    atom.y -= shift.y;
    atom.z -= shift.z;
  }
};

var getFarAtom = module.exports.getFarAtom = function (s) {
  if (s.farAtom !== undefined) {
    return s.farAtom;
  }

  s.farAtom = s.atoms[0];
  var maxd = 0.0;

  for (var i = 0; i < s.atoms.length; i++) {
    var atom = s.atoms[i];
    var r = elements[atom.symbol].radius;
    var rd = Math.sqrt(r * r + r * r + r * r) * 2.5;
    var d = Math.sqrt(atom.x * atom.x + atom.y * atom.y + atom.z * atom.z) + rd;

    if (d > maxd) {
      maxd = d;
      s.farAtom = atom;
    }
  }

  return s.farAtom;
};

var getRadius = module.exports.getRadius = function (s) {
  var atom = getFarAtom(s);
  var r = consts.MAX_ATOM_RADIUS;
  var rd = Math.sqrt(r * r + r * r + r * r) * 2.5;
  return Math.sqrt(atom.x * atom.x + atom.y * atom.y + atom.z * atom.z) + rd;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,t){ true?module.exports=t():undefined}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return n[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function o(n,t){function e(n){return Math.sqrt(n[0]*n[0]+n[1]*n[1])}function a(n){var t=n,r=n.prevNode,i=6;if(null!==r&&n.linked){var a=[-(t.x-r.x),-(t.y-r.y)];a=[a[0]/e(a),a[1]/e(a)];var o=[-a[1],a[0]],u=[n.radius*a[0],n.radius*a[1]],l="M"+(u[0]+i*(a[0]+o[0])/2)+","+(u[1]+i*(a[1]+o[1])/2)+"L"+u[0]+","+u[1]+"L"+(u[0]+i*(a[0]-o[0])/2)+","+(u[1]+i*(a[1]-o[1])/2);s["default"].select(this).attr("d",l)}}function o(n){return"basepair"==n.linkType||"backbone"==n.linkType||"pseudoknot"==n.linkType||"label_link"==n.linkType||"external"==n.linkType||"chain_chain"==n.linkType}function u(n,t,e){if(n.hasOwnProperty(t.num)){var r=parseFloat(n[t.num]);return isNaN(r)?n[t.num]:e(r)}return"white"}function h(){}function p(){L&&(mpos=s["default"].mouse(O.node()),F.attr("x1",L.x).attr("y1",L.y).attr("x2",mpos[0]).attr("y2",mpos[1]))}function g(){L&&F.attr("class","drag_line_hidden"),m()}function d(){var n=D.selectAll("g.gnode").selectAll(".outline_node");n.each(function(n){n.selected=!1,n.previouslySelected=!1}),n.classed("selected",!1)}function v(){O.attr("transform","translate("+s["default"].event.translate+") scale("+s["default"].event.scale+")")}function m(){L=null,E=null,A=null}function y(n){var t=D.selectAll("g.gnode");return I?t.filter(function(n){return n.selected}):t.filter(function(n){return n.selected})}function x(n){if(s["default"].event.sourceEvent.stopPropagation(),!n.selected&&!I){var t=D.selectAll("g.gnode").selectAll(".outline_node");t.classed("selected",function(n){return n.selected=N.options.applyForce&&(n.previouslySelected=!1)})}s["default"].select(this).select(".outline_node").classed("selected",function(t){return n.previouslySelected=n.selected,n.selected=N.options.applyForce&&!0});var e=y(n);e.each(function(n){n.fixed|=2})}function k(n){var t=y(n);t.each(function(n){n.x+=s["default"].event.dx,n.y+=s["default"].event.dy,n.px+=s["default"].event.dx,n.py+=s["default"].event.dy}),N.resumeForce(),s["default"].event.sourceEvent.preventDefault()}function M(n){var t=y(n);t.each(function(n){n.fixed&=-7})}function b(n){var t=n.radius+16,e=n.x-t,r=n.x+t,i=n.y-t,a=n.y+t;return function(t,o,u,s,l){if(t.point&&t.point!==n){var c=n.x-t.point.x,f=n.y-t.point.y,h=Math.sqrt(c*c+f*f),p=n.radius+t.point.radius;p>h&&(h=(h-p)/h*.1,n.x-=c*=h,n.y-=f*=h,t.point.x+=c,t.point.y+=f)}return o>r||e>s||u>a||i>l}}function w(){if(!N.deaf&&!j){switch(s["default"].event.keyCode){case 16:j=!0;break;case 17:I=!0;break;case 67:N.centerView()}(j||I)&&(q.call(N.zoomer).on("mousedown.zoom",null).on("touchstart.zoom",null).on("touchmove.zoom",null).on("touchend.zoom",null),O.selectAll("g.gnode").on("mousedown.drag",null)),I&&(R.select(".background").style("cursor","crosshair"),R.call(N.brusher))}}function _(){j=!1,I=!1,R.call(N.brusher).on("mousedown.brush",null).on("touchstart.brush",null).on("touchmove.brush",null).on("touchend.brush",null),R.select(".background").style("cursor","auto"),q.call(N.zoomer),O.selectAll("g.gnode").call(B)}var N=this;if(N.options={displayAllLinks:!1,labelInterval:10,applyForce:!0,initialSize:null,allowPanningAndZooming:!0,transitionDuration:500,resizeSvgOnResize:!0},arguments.length>1)for(var S in t)N.options.hasOwnProperty(S)&&(N.options[S]=t[S]);null!==N.options.initialSize?(N.options.svgW=N.options.initialSize[0],N.options.svgH=N.options.initialSize[1]):(N.options.svgW=800,N.options.svgH=800);var A=(s["default"].scale.category20(),null),L=null,E=null,T=s["default"].scale.linear().domain([0,N.options.svgW]).range([0,N.options.svgW]),C=s["default"].scale.linear().domain([0,N.options.svgH]).range([0,N.options.svgH]),z=N.graph={nodes:[],links:[]};N.linkStrengths={pseudoknot:0,proteinChain:0,chainChain:0,intermolecule:10,external:0,other:10},N.displayParameters={displayBackground:"true",displayNumbering:"true",displayNodeOutline:"true",displayNodeLabel:"true",displayLinks:"true",displayPseudoknotLinks:"true",displayProteinLinks:"true"},N.colorScheme="structure",N.customColors={},N.animation=N.options.applyForce,N.deaf=!1,N.rnas={},N.extraLinks=[],Array.prototype.equals=function(n){if(!n)return!1;if(this.length!=n.length)return!1;for(var t=0,e=this.length;e>t;t++)if(this[t]instanceof Array&&n[t]instanceof Array){if(!this[t].equals(n[t]))return!1}else if(this[t]!=n[t])return!1;return!0},N.createInitialLayout=function(n,t){var e={sequence:"",name:"empty",positions:[],labelInterval:N.options.labelInterval,avoidOthers:!0,uids:[],circularizeExternal:!0};if(2==arguments.length)for(var r in t)e.hasOwnProperty(r)&&(e[r]=t[r]);var i=new l.RNAGraph(e.sequence,n,e.name);i.circularizeExternal=e.circularizeExternal;var a=i.recalculateElements();return 0===e.positions.length&&(e.positions=(0,c.simpleXyCoordinates)(a.pairtable)),a=a.elementsToJson().addUids(e.uids).addPositions("nucleotide",e.positions).addLabels(1,e.labelInterval).reinforceStems().reinforceLoops().connectFakeNodes().reassignLinkUids().breakNodesToFakeNodes()},N.addRNA=function(n,t){var e=N.createInitialLayout(n,t);if(1===arguments.length&&(t={}),"extraLinks"in t){var r=N.addExternalLinks(e,t.extraLinks);N.extraLinks=N.extraLinks.concat(r)}return"avoidOthers"in t?N.addRNAJSON(e,t.avoidOthers):N.addRNAJSON(e,!0),e},N.addExternalLinks=function(n,t){for(var e=[],r=0;r<t.length;r++){var i={linkType:"external",value:1,uid:generateUUID(),source:null,target:null};if("[object Array]"===Object.prototype.toString.call(t[r][0])){for(var a=0;a<n.nodes.length;a++)if("nucs"in n.nodes[a]&&n.nodes[a].nucs.equals(t[r][0])){i.source=n.nodes[a];break}}else for(var a=0;a<n.nodes.length;a++)n.nodes[a].num==t[r][0]&&(i.source=n.nodes[a]);if("[object Array]"===Object.prototype.toString.call(t[r][1]))for(var a=0;a<n.nodes.length;a++)"nucs"in n.nodes[a]&&n.nodes[a].nucs.equals(t[r][1])&&(i.target=n.nodes[a]);else for(var a=0;a<n.nodes.length;a++)n.nodes[a].num==t[r][1]&&(i.target=n.nodes[a]);null!=i.source&&null!=i.target?e.push(i):console.log("ERROR: source or target of new link not found:",i,t[r])}return e},N.addRNAJSON=function(n,t){var e,r;return t&&(e=N.graph.nodes.length>0?s["default"].max(N.graph.nodes.map(function(n){return n.x})):0,r=s["default"].min(n.nodes.map(function(n){return n.x})),n.nodes.forEach(function(n){n.x+=e-r+20,n.px+=e-r})),n.nodes.forEach(function(t){t.rna=n}),N.rnas[n.uid]=n,N.recalculateGraph(),N.update(),N.centerView(),n},N.transitionRNA=function(n,t){function e(n,t){0===n.size()&&setTimeout(t,i);var e=0;n.each(function(){++e}).each("end",function(){--e||t.apply(this,arguments)})}function r(){N.createNewLinks(f.enter());N.graph.links=f.data(),N.updateStyle(),"undefined"!=typeof t&&t()}var i=N.options.transitionDuration,u=N.graph.nodes.filter(function(n){return"nucleotide"==n.nodeType}).map(function(n){return n.uid}),s={uids:u},l=N.createInitialLayout(n,s),c=D.selectAll("g.gnode").data(l.nodes,V),i=N.options.transitionDuration;0===i?c.attr("transform",function(n){return"translate("+[n.x,n.y]+")"}):c.transition().attr("transform",function(n){return"translate("+[n.x,n.y]+")"}).duration(i);var f=U.selectAll("line.link").data(l.links.filter(o),H),h=N.createNewNodes(c.enter()).attr("transform",function(n){return"undefined"!=typeof n.x&&"undefined"!=typeof n.y?"translate("+[0,0]+")":""});if(0===i?c.exit().remove():c.exit().transition().attr("transform",function(n){return"undefined"!=typeof n.x&&"undefined"!=typeof n.y?"translate("+[0,0]+")":""}),c.select("path").each(a),N.graph.nodes=c.data(),N.updateStyle(),N.centerView(i),f.exit().remove(),0===i){f.attr("x1",function(n){return n.source.x}).attr("y1",function(n){return n.source.y}).attr("x2",function(n){return n.target.x}).attr("y2",function(n){return n.target.y});N.createNewLinks(f.enter());N.graph.links=f.data(),N.updateStyle()}else f.transition().attr("x1",function(n){return n.source.x}).attr("y1",function(n){return n.source.y}).attr("x2",function(n){return n.target.x}).attr("y2",function(n){return n.target.y}).duration(i).call(e,r);0===i?h.attr("transform",function(n){return"undefined"!=typeof n.x&&"undefined"!=typeof n.y?"translate("+[n.x,n.y]+")":""}):h.transition().attr("transform",function(n){return"undefined"!=typeof n.x&&"undefined"!=typeof n.y?"translate("+[n.x,n.y]+")":""})},N.recalculateGraph=function(){N.graph.nodes=[],N.graph.links=[];for(var n in N.rnas)N.graph.nodes=N.graph.nodes.concat(N.rnas[n].nodes),N.graph.links=N.graph.links.concat(N.rnas[n].links);for(var t={},e=0;e<N.graph.nodes.length;e++)t[N.graph.nodes[e].uid]=N.graph.nodes[e];for(N.graph.links.forEach(function(n){n.source=t[n.source.uid],n.target=t[n.target.uid]}),e=0;e<N.extraLinks.length;e++){if(N.extraLinks[e].target.uid in t||console.log("not there:",N.extraLinks[e]),N.extraLinks[e].source=t[N.extraLinks[e].source.uid],N.extraLinks[e].target=t[N.extraLinks[e].target.uid],"intermolecule"==N.extraLinks[e].linkType){fakeLinks=N.graph.links.filter(function(n){return(n.source==N.extraLinks[e].source||n.source==N.extraLinks[e].target||n.target==N.extraLinks[e].source||n.target==N.extraLinks[e].source)&&"fake"==n.linkType});for(var r=0;r<fakeLinks.length;r++){var i=N.graph.links.indexOf(fakeLinks[r]);N.graph.links.splice(i,1)}}z.links.push(N.extraLinks[e])}},N.addNodes=function(n){n.links.forEach(function(t){"number"==typeof t.source&&(t.source=n.nodes[t.source]),"number"==typeof t.target&&(t.target=n.nodes[t.target])}),N.graph.nodes.length>0?(maxX=s["default"].max(N.graph.nodes.map(function(n){return n.x})),maxY=s["default"].max(N.graph.nodes.map(function(n){return n.y}))):(maxX=0,maxY=0),n.nodes.forEach(function(n){n.rna.uid in N.rnas||(N.rnas[n.rna.uid]=n.rna),n.x+=maxX,n.px+=maxX}),r=new l.RNAGraph("",""),r.nodes=n.nodes,r.links=n.links,N.recalculateGraph(),N.update(),N.centerView()},N.addCustomColors=function(n){N.customColors=n},N.addCustomColorsText=function(n){var t=new f.ColorScheme(n);N.customColors=t.colorsJson,N.changeColorScheme("custom")},N.clearNodes=function(){N.graph.nodes=[],N.graph.links=[],N.rnas={},N.extraLinks=[],N.update()},N.toJSON=function(){var n={rnas:N.rnas,extraLinks:N.extraLinks},t=JSON.stringify(n,function(n,t){return"rna"==n?void 0:t},"	");return t},N.fromJSON=function(n){var t,e;try{var i=JSON.parse(n);t=i.rnas,e=i.extraLinks}catch(a){throw a}for(var o in t)"rna"==t[o].type?(r=new l.RNAGraph,r.seq=t[o].seq,r.dotbracket=t[o].dotbracket,r.circular=t[o].circular,r.pairtable=t[o].pairtable,r.uid=t[o].uid,r.structName=t[o].structName,r.nodes=t[o].nodes,r.links=t[o].links,r.rnaLength=t[o].rnaLength,r.elements=t[o].elements,r.nucsToNodes=t[o].nucsToNodes,r.pseudoknotPairs=t[o].pseudoknotPairs):(r=new ProteinGraph,r.size=t[o].size,r.nodes=t[o].nodes,r.uid=t[o].uid),N.addRNAJSON(r,!1);e.forEach(function(n){N.extraLinks.push(n)}),N.recalculateGraph(),N.update()},N.setSize=function(){if(null==N.options.initialSize){var t=s["default"].select(n).node().offsetHeight,e=s["default"].select(n).node().offsetWidth;N.options.svgW=e,N.options.svgH=t,T.range([0,e]).domain([0,e]),C.range([0,t]).domain([0,t]),N.zoomer.x(T).y(C),N.brusher.x(T).y(C),N.centerView(),N.options.resizeSvgOnResize&&P.attr("width",e).attr("height",t)}},N.setOutlineColor=function(n){var t=D.selectAll("g.gnode").select("[node_type=nucleotide]");t.style("fill",n)},N.changeColorScheme=function(n){var t=D.selectAll("[node_type=protein]");t.classed("protein",!0).attr("r",function(n){return n.radius});var e=(D.selectAll("g.gnode"),D.selectAll("g.gnode").selectAll("circle"),D.selectAll("g.gnode").select("[node_type=nucleotide]"));if(N.colorScheme=n,"sequence"==n){var r=s["default"].scale.ordinal().range(["#dbdb8d","#98df8a","#ff9896","#aec7e8","#aec7e8"]).domain(["A","C","G","U","T"]);e.style("fill",function(n){return r(n.name)})}else if("structure"==n){var r=s["default"].scale.category10().domain(["s","m","i","e","t","h","x"]).range(["lightgreen","#ff9896","#dbdb8d","lightsalmon","lightcyan","lightblue","transparent"]);e.style("fill",function(n){return r(n.elemType)})}else if("positions"==n)e.style("fill",function(n){var t=s["default"].scale.linear().range(["#98df8a","#dbdb8d","#ff9896"]).interpolate(s["default"].interpolateLab).domain([1,1+(n.rna.rnaLength-1)/2,n.rna.rnaLength]);return t(n.num)});else if("custom"==n){if("undefined"!=typeof N.customColors&&"domain"in N.customColors&&"range"in N.customColors)var r=s["default"].scale.linear().interpolate(s["default"].interpolateLab).domain(N.customColors.domain).range(N.customColors.range);e.style("fill",function(n){if("undefined"==typeof N.customColors||!N.customColors.hasOwnProperty("colorValues"))return"white";if(N.customColors.colorValues.hasOwnProperty(n.structName)&&N.customColors.colorValues[n.structName].hasOwnProperty(n.num)){var t=N.customColors.colorValues[n.structName];return u(t,n,r)}if(N.customColors.colorValues.hasOwnProperty("")){var t=N.customColors.colorValues[""];return u(t,n,r)}return"white"})}},window.addEventListener("resize",N.setSize,!1),N.zoomer=s["default"].behavior.zoom().scaleExtent([.1,10]).x(T).y(C).on("zoomstart",d).on("zoom",v),s["default"].select(n).select("svg").remove();var P=s["default"].select(n).attr("tabindex",1).on("keydown.brush",w).on("keyup.brush",_).each(function(){this.focus()}).append("svg:svg").attr("width",N.options.svgW).attr("height",N.options.svgH).attr("id","plotting-area");N.options.svg=P;var q=P.append("svg:g").on("mousemove",p).on("mousedown",h).on("mouseup",g);N.options.allowPanningAndZooming&&q.call(N.zoomer);var R=q.append("g").datum(function(){return{selected:!1,previouslySelected:!1}}).attr("class","brush"),O=q.append("svg:g"),U=O.append("svg:g"),D=O.append("svg:g");N.brusher=s["default"].svg.brush().x(T).y(C).on("brushstart",function(n){var t=D.selectAll("g.gnode").selectAll(".outline_node");t.each(function(n){n.previouslySelected=I&&n.selected})}).on("brush",function(){var n=D.selectAll("g.gnode").selectAll(".outline_node"),t=s["default"].event.target.extent();n.classed("selected",function(n){return n.selected=N.options.applyForce&&n.previouslySelected^(t[0][0]<=n.x&&n.x<t[1][0]&&t[0][1]<=n.y&&n.y<t[1][1])})}).on("brushend",function(){s["default"].event.target.clear(),s["default"].select(this).call(s["default"].event.target)}),R.call(N.brusher).on("mousedown.brush",null).on("touchstart.brush",null).on("touchmove.brush",null).on("touchend.brush",null),R.select(".background").style("cursor","auto"),N.getBoundingBoxTransform=function(){if(0===N.graph.nodes.length)return{translate:[0,0],scale:1};var n=s["default"].min(N.graph.nodes.map(function(n){return n.x})),t=s["default"].min(N.graph.nodes.map(function(n){return n.y})),e=s["default"].max(N.graph.nodes.map(function(n){return n.x})),r=s["default"].max(N.graph.nodes.map(function(n){return n.y})),i=e-n,a=r-t,o=N.options.svgW/(i+1),u=N.options.svgH/(a+1),l=.8*Math.min(o,u),c=i*l,f=a*l,h=-n*l+(N.options.svgW-c)/2,p=-t*l+(N.options.svgH-f)/2;return{translate:[h,p],scale:l}},N.centerView=function(n){0===arguments.length&&(n=0);var t=N.getBoundingBoxTransform();null!==t&&(O.transition().attr("transform","translate("+t.translate+") scale("+t.scale+")").duration(n),N.zoomer.translate(t.translate),N.zoomer.scale(t.scale))},N.force=s["default"].layout.force().charge(function(n){return"middle"==n.nodeType,-30}).chargeDistance(300).friction(.35).linkDistance(function(n){return 15*n.value}).linkStrength(function(n){return n.linkType in N.linkStrengths?N.linkStrengths[n.linkType]:N.linkStrengths.other}).gravity(0).nodes(N.graph.nodes).links(N.graph.links).chargeDistance(110).size([N.options.svgW,N.options.svgH]);var F=O.append("line").attr("class","drag_line").attr("x1",0).attr("y1",0).attr("x2",0).attr("y2",0),j=!1,I=!1;N.resumeForce=function(){N.animation&&N.force.resume()};var B=s["default"].behavior.drag().on("dragstart",x).on("drag",k).on("dragend",M);s["default"].select(n).on("keydown",w).on("keyup",_).on("contextmenu",function(){s["default"].event.preventDefault()});var H=function(n){return n.uid},V=function(n){var t=n.uid;return t},Y=function(n){var t=n.getPositions("nucleotide"),e=n.getPositions("label"),r=n.getUids();n.recalculateElements().elementsToJson().addPseudoknots().addPositions("nucleotide",t).addUids(r).addLabels(1,N.options.labelInterval).addPositions("label",e).reinforceStems().reinforceLoops().updateLinkUids()},J=function(n){if(index=N.graph.links.indexOf(n),index>-1){if(n.source.rna==n.target.rna){var t=n.source.rna;t.addPseudoknots(),t.pairtable[n.source.num]=0,t.pairtable[n.target.num]=0,Y(t)}else extraLinkIndex=N.extraLinks.indexOf(n),N.extraLinks.splice(extraLinkIndex,1);N.recalculateGraph()}N.update()},G=function(n){if(j){var t={backbone:!0,fake:!0,fake_fake:!0,label_link:!0};n.linkType in t||J(n)}};N.addLink=function(n){n.source.rna==n.target.rna?(r=n.source.rna,r.pairtable[n.source.num]=n.target.num,r.pairtable[n.target.num]=n.source.num,Y(r)):(n.linkType="intermolecule",N.extraLinks.push(n)),N.recalculateGraph(),N.update()};var Z=function(n){if(!s["default"].event.defaultPrevented){if(!I){var t=D.selectAll("g.gnode").selectAll(".outline_node");t.classed("selected",function(n){return n.selected=N.options.applyForce&&(n.previouslySelected=!1)})}s["default"].select(this).select("circle").classed("selected",n.selected=N.options.applyForce&&!n.previouslySelected)}},X=function(n){if(L){if(E=n,E==L)return void m();var t={source:L,target:E,linkType:"basepair",value:1,uid:generateUUID()};for(i=0;i<N.graph.links.length;i++){if(!(N.graph.links[i].source!=L&&N.graph.links[i].target!=L&&N.graph.links[i].source!=E&&N.graph.links[i].target!=E||"basepair"!=N.graph.links[i].linkType&&"pseudoknot"!=N.graph.links[i].linkType))return;if((N.graph.links[i].source==E&&N.graph.links[i].target==L||N.graph.links[i].source==L&&N.graph.links[i].target==E)&&"backbone"==N.graph.links[i].linkType)return}if("middle"==E.nodeType||"middle"==L.nodeType||"label"==E.nodeType||"label"==L.nodeType)return;N.addLink(t)}},W=function(n){if(!n.selected&&!I){var t=D.selectAll("g.gnode").selectAll(".outline_node");t.classed("selected",function(n){return n.selected=n.previouslySelected=!1})}s["default"].select(this).classed("selected",function(t){return n.previouslySelected=n.selected,n.selected=N.options.applyForce&&!0}),j&&(L=n,F.attr("class","drag_line").attr("x1",L.x).attr("y1",L.y).attr("x2",L.x).attr("y2",L.y))};N.startAnimation=function(){N.animation=!0,O.selectAll("g.gnode").call(B),N.force.start()},N.stopAnimation=function(){N.animation=!1,O.selectAll("g.gnode").on("mousedown.drag",null),N.force.stop()},N.setFriction=function(n){N.force.friction(n),N.resumeForce()},N.setCharge=function(n){N.force.charge(n),N.resumeForce()},N.setGravity=function(n){N.force.gravity(n),N.resumeForce()},N.setPseudoknotStrength=function(n){N.linkStrengths.pseudoknot=n,N.update()},N.displayBackground=function(n){N.displayParameters.displayBackground=n,N.updateStyle()},N.displayNumbering=function(n){N.displayParameters.displayNumbering=n,N.updateStyle()},N.displayNodeOutline=function(n){N.displayParameters.displayNodeOutline=n,N.updateStyle()},N.displayNodeLabel=function(n){N.displayParameters.displayNodeLabel=n,N.updateStyle()},N.displayLinks=function(n){N.displayParameters.displayLinks=n,N.updateStyle()},N.displayPseudoknotLinks=function(n){N.displayParameters.displayPseudoknotLinks=n,N.updateStyle()},N.displayProteinLinks=function(n){N.displayParameters.displayProteinLinks=n,N.updateStyle()},N.updateStyle=function(){D.selectAll("[node_type=label]").classed("transparent",!N.displayParameters.displayNumbering),D.selectAll("[label_type=label]").classed("transparent",!N.displayParameters.displayNumbering),U.selectAll("[linkType=label_link]").classed("transparent",!N.displayParameters.displayNumbering),P.selectAll("circle").classed("hidden_outline",!N.displayParameters.displayNodeOutline),D.selectAll("[label_type=nucleotide]").classed("transparent",!N.displayParameters.displayNodeLabel),P.selectAll("[link_type=real],[link_type=basepair],[link_type=backbone],[link_type=pseudoknot],[link_type=protein_chain],[link_type=chain_chain],[link_type=external]").classed("transparent",!N.displayParameters.displayLinks),P.selectAll("[link_type=pseudoknot]").classed("transparent",!N.displayParameters.displayPseudoknotLinks),P.selectAll("[link_type=protein_chain]").classed("transparent",!N.displayParameters.displayProteinLinks),U.selectAll("[link_type=fake]").classed("transparent",!N.options.displayAllLinks),U.selectAll("[link_type=fake_fake]").classed("transparent",!N.options.displayAllLinks)},N.createNewLinks=function(n){var t=n.append("svg:line");return t.append("svg:title").text(H),t.classed("link",!0).attr("x1",function(n){return n.source.x}).attr("y1",function(n){return n.source.y}).attr("x2",function(n){return n.target.x}).attr("y2",function(n){return n.target.y}).attr("link_type",function(n){return n.linkType}).attr("class",function(n){return s["default"].select(this).attr("class")+" "+n.linkType}).attr("pointer-events",function(n){return"fake"==n.linkType?"none":"all"}),t},N.createNewNodes=function(n){n=n.append("g").classed("noselect",!0).classed("gnode",!0).attr("struct_name",function(n){return n.structName}).attr("transform",function(n){return"undefined"!=typeof n.x&&"undefined"!=typeof n.y?"translate("+[n.x,n.y]+")":""}).each(function(n){n.selected=n.previouslySelected=!1}),n.call(B).on("mousedown",W).on("mousedrag",function(n){}).on("mouseup",X).attr("num",function(n){return"n"+n.num}).attr("rnum",function(n){return"n"+(n.rna.rnaLength-n.num+1)}).on("click",Z).transition().duration(750).ease("elastic");var t=n.filter(function(n){return"label"==n.nodeType||"protein"==n.nodeType}),e=n.filter(function(n){return"nucleotide"==n.nodeType});t.append("svg:circle").attr("class","outline_node").attr("r",function(n){return n.radius+1}),e.append("svg:circle").attr("class","outline_node").attr("r",function(n){return n.radius+1}),t.append("svg:circle").attr("class","node").classed("label",function(n){return"label"==n.nodeType}).attr("r",function(n){return"middle"==n.nodeType?0:n.radius}).attr("node_type",function(n){return n.nodeType}).attr("node_num",function(n){return n.num}),e.append("svg:circle").attr("class","node").attr("node_type",function(n){return n.nodeType}).attr("node_num",function(n){return n.num}).attr("r",function(n){return n.radius}).append("svg:title").text(function(n){return"nucleotide"==n.nodeType?n.structName+":"+n.num:""}),e.append("svg:path").attr("class","node").attr("node_type",function(n){return n.nodeType}).attr("node_num",function(n){return n.num}).append("svg:title").text(function(n){return"nucleotide"==n.nodeType?n.structName+":"+n.num:""});var r=n.append("text").text(function(n){return n.name}).attr("text-anchor","middle").attr("font-size",8).attr("font-weight","bold").attr("y",2.5).attr("class","node-label").attr("label_type",function(n){return n.nodeType});return r.append("svg:title").text(function(n){return"nucleotide"==n.nodeType?n.structName+":"+n.num:""}),n};N.update=function(){N.force.nodes(N.graph.nodes).links(N.graph.links),N.animation&&N.force.start();var n=U.selectAll("line.link").data(N.graph.links.filter(o),H);n.attr("class","").classed("link",!0).attr("link_type",function(n){return n.linkType}).attr("class",function(n){return s["default"].select(this).attr("class")+" "+n.linkType});var t=n.enter();N.createNewLinks(t),n.exit().remove();var e=[0,1,2,3,4,5,6,7,8,9],r=(s["default"].scale.category10().domain(e),D.selectAll("g.gnode").data(N.graph.nodes,V)),i=r.enter();N.createNewNodes(i),r.exit().remove();var u,l=N.graph.nodes.filter(function(n){return"nucleotide"==n.nodeType||"label"==n.nodeType});u=N.displayFakeLinks?n:U.selectAll("[link_type=real],[link_type=pseudoknot],[link_type=protein_chain],[link_type=chain_chain],[link_type=label_link],[link_type=backbone],[link_type=basepair],[link_type=intermolecule],[link_type=external]");r.selectAll("path").each(a),u.on("click",G),N.force.on("tick",function(){for(var n=s["default"].geom.quadtree(l),t=0,e=l.length;++t<e;)n.visit(b(l[t]));u.attr("x1",function(n){return n.source.x}).attr("y1",function(n){return n.source.y}).attr("x2",function(n){return n.target.x}).attr("y2",function(n){return n.target.y}),r.attr("transform",function(n){return"translate("+[n.x,n.y]+")"}),r.select("path").each(a)}),N.changeColorScheme(N.colorScheme),N.animation&&N.force.start(),N.updateStyle()},N.setSize()}Object.defineProperty(t,"__esModule",{value:!0}),t.FornaContainer=o;var u=e(1),s=a(u);e(2);var l=e(6),c=e(8),f=e(7)},function(n,t,e){var r,i;!function(){function a(n){return n&&(n.ownerDocument||n.document||n).documentElement}function o(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function u(n,t){return t>n?-1:n>t?1:n>=t?0:NaN}function s(n){return null===n?NaN:+n}function l(n){return!isNaN(n)}function c(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var a=r+i>>>1;n(t[a],e)<0?r=a+1:i=a}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length);i>r;){var a=r+i>>>1;n(t[a],e)>0?i=a:r=a+1}return r}}}function f(n){return n.length}function h(n){for(var t=1;n*t%1;)t*=10;return t}function p(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function g(){this._=Object.create(null)}function d(n){return(n+="")===So||n[0]===Ao?Ao+n:n}function v(n){return(n+="")[0]===Ao?n.slice(1):n}function m(n){return d(n)in this._}function y(n){return(n=d(n))in this._&&delete this._[n]}function x(){var n=[];for(var t in this._)n.push(v(t));return n}function k(){var n=0;for(var t in this._)++n;return n}function M(){for(var n in this._)return!1;return!0}function b(){this._=Object.create(null)}function w(n){return n}function _(n,t,e){return function(){var r=e.apply(t,arguments);return r===t?n:r}}function N(n,t){if(t in n)return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e=0,r=Lo.length;r>e;++e){var i=Lo[e]+t;if(i in n)return i}}function S(){}function A(){}function L(n){function t(){for(var t,r=e,i=-1,a=r.length;++i<a;)(t=r[i].on)&&t.apply(this,arguments);return n}var e=[],r=new g;return t.on=function(t,i){var a,o=r.get(t);return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,a=e.indexOf(o)).concat(e.slice(a+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function E(){ho.event.preventDefault()}function T(){for(var n,t=ho.event;n=t.sourceEvent;)t=n;return t}function C(n){for(var t=new A,e=0,r=arguments.length;++e<r;)t[arguments[e]]=L(t);return t.of=function(e,r){return function(i){try{var a=i.sourceEvent=ho.event;i.target=n,ho.event=i,t[i.type].apply(e,r)}finally{ho.event=a}}},t}function z(n){return To(n,qo),n}function P(n){return"function"==typeof n?n:function(){return Co(n,this)}}function q(n){return"function"==typeof n?n:function(){return zo(n,this)}}function R(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function a(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments);null==e?this.removeAttribute(n):this.setAttribute(n,e)}function u(){var e=t.apply(this,arguments);null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ho.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?u:o:n.local?a:i}function O(n){return n.trim().replace(/\s+/g," ")}function U(n){return new RegExp("(?:^|\\s+)"+ho.requote(n)+"(?:\\s+|$)","g")}function D(n){return(n+"").trim().split(/^|\s+/)}function F(n,t){function e(){for(var e=-1;++e<i;)n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments);++e<i;)n[e](this,r)}n=D(n).map(j);var i=n.length;return"function"==typeof t?r:e}function j(n){var t=U(n);return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n);var i=e.getAttribute("class")||"";r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",O(i+" "+n))):e.setAttribute("class",O(i.replace(t," ")))}}function I(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function a(){var r=t.apply(this,arguments);null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?a:i}function B(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments);null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function H(n){function t(){var t=this.ownerDocument,e=this.namespaceURI;return e?t.createElementNS(e,n):t.createElement(n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ho.ns.qualify(n)).local?e:t}function V(){var n=this.parentNode;n&&n.removeChild(this)}function Y(n){return{__data__:n}}function J(n){return function(){return Po(this,n)}}function G(n){return arguments.length||(n=u),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Z(n,t){for(var e=0,r=n.length;r>e;e++)for(var i,a=n[e],o=0,u=a.length;u>o;o++)(i=a[o])&&t(i,o,e);return n}function X(n){return To(n,Oo),n}function W(n){var t,e;return function(r,i,a){var o,u=n[a].update,s=u.length;for(a!=e&&(e=a,t=0),i>=t&&(t=i+1);!(o=u[t])&&++t<s;);return o}}function $(n,t,e){function r(){var t=this[o];t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=s(t,go(arguments));r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function a(){var t,e=new RegExp("^__on([^.]+)"+ho.requote(n)+"$");for(var r in this)if(t=r.match(e)){var i=this[r];this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,u=n.indexOf("."),s=K;u>0&&(n=n.slice(0,u));var l=Uo.get(n);return l&&(n=l,s=Q),u?t?i:r:t?S:a}function K(n,t){return function(e){var r=ho.event;ho.event=e,t[0]=this.__data__;try{n.apply(this,t)}finally{ho.event=r}}}function Q(n,t){var e=K(n,t);return function(n){var t=this,r=n.relatedTarget;r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function nn(n){var t=".dragsuppress-"+ ++Fo,e="click"+t,r=ho.select(o(n)).on("touchmove"+t,E).on("dragstart"+t,E).on("selectstart"+t,E);if(null==Do&&(Do="onselectstart"in n?!1:N(n.style,"userSelect")),Do){var i=a(n).style,u=i[Do];i[Do]="none"}return function(n){if(r.on(t,null),Do&&(i[Do]=u),n){var a=function(){r.on(e,null)};r.on(e,function(){E(),a()},!0),setTimeout(a,0)}}}function tn(n,t){t.changedTouches&&(t=t.changedTouches[0]);var e=n.ownerSVGElement||n;if(e.createSVGPoint){var r=e.createSVGPoint();if(0>jo){var i=o(n);if(i.scrollX||i.scrollY){e=ho.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important");var a=e[0][0].getScreenCTM();jo=!(a.f||a.e),e.remove()}}return jo?(r.x=t.pageX,r.y=t.pageY):(r.x=t.clientX,r.y=t.clientY),r=r.matrixTransform(n.getScreenCTM().inverse()),[r.x,r.y]}var u=n.getBoundingClientRect();return[t.clientX-u.left-n.clientLeft,t.clientY-u.top-n.clientTop]}function en(){return ho.event.changedTouches[0].identifier}function rn(n){return n>0?1:0>n?-1:0}function an(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function on(n){return n>1?0:-1>n?Ho:Math.acos(n)}function un(n){return n>1?Jo:-1>n?-Jo:Math.asin(n)}function sn(n){return((n=Math.exp(n))-1/n)/2}function ln(n){return((n=Math.exp(n))+1/n)/2}function cn(n){return((n=Math.exp(2*n))-1)/(n+1)}function fn(n){return(n=Math.sin(n/2))*n}function hn(){}function pn(n,t,e){return this instanceof pn?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof pn?new pn(n.h,n.s,n.l):An(""+n,Ln,pn):new pn(n,t,e)}function gn(n,t,e){function r(n){return n>360?n-=360:0>n&&(n+=360),60>n?a+(o-a)*n/60:180>n?o:240>n?a+(o-a)*(240-n)/60:a}function i(n){return Math.round(255*r(n))}var a,o;return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:0>t?0:t>1?1:t,
e=0>e?0:e>1?1:e,o=.5>=e?e*(1+t):e+t-e*t,a=2*e-o,new wn(i(n+120),i(n),i(n-120))}function dn(n,t,e){return this instanceof dn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof dn?new dn(n.h,n.c,n.l):n instanceof mn?xn(n.l,n.a,n.b):xn((n=En((n=ho.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new dn(n,t,e)}function vn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new mn(e,Math.cos(n*=Go)*t,Math.sin(n)*t)}function mn(n,t,e){return this instanceof mn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof mn?new mn(n.l,n.a,n.b):n instanceof dn?vn(n.h,n.c,n.l):En((n=wn(n)).r,n.g,n.b):new mn(n,t,e)}function yn(n,t,e){var r=(n+16)/116,i=r+t/500,a=r-e/200;return i=kn(i)*iu,r=kn(r)*au,a=kn(a)*ou,new wn(bn(3.2404542*i-1.5371385*r-.4985314*a),bn(-.969266*i+1.8760108*r+.041556*a),bn(.0556434*i-.2040259*r+1.0572252*a))}function xn(n,t,e){return n>0?new dn(Math.atan2(e,t)*Zo,Math.sqrt(t*t+e*e),n):new dn(NaN,NaN,n)}function kn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function Mn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function bn(n){return Math.round(255*(.00304>=n?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function wn(n,t,e){return this instanceof wn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof wn?new wn(n.r,n.g,n.b):An(""+n,wn,gn):new wn(n,t,e)}function _n(n){return new wn(n>>16,n>>8&255,255&n)}function Nn(n){return _n(n)+""}function Sn(n){return 16>n?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function An(n,t,e){var r,i,a,o=0,u=0,s=0;if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100);case"rgb":return t(Cn(i[0]),Cn(i[1]),Cn(i[2]))}return(a=lu.get(n))?t(a.r,a.g,a.b):(null==n||"#"!==n.charAt(0)||isNaN(a=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&a)>>4,o=o>>4|o,u=240&a,u=u>>4|u,s=15&a,s=s<<4|s):7===n.length&&(o=(16711680&a)>>16,u=(65280&a)>>8,s=255&a)),t(o,u,s))}function Ln(n,t,e){var r,i,a=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),u=o-a,s=(o+a)/2;return u?(i=.5>s?u/(o+a):u/(2-o-a),r=n==o?(t-e)/u+(e>t?6:0):t==o?(e-n)/u+2:(n-t)/u+4,r*=60):(r=NaN,i=s>0&&1>s?0:r),new pn(r,i,s)}function En(n,t,e){n=Tn(n),t=Tn(t),e=Tn(e);var r=Mn((.4124564*n+.3575761*t+.1804375*e)/iu),i=Mn((.2126729*n+.7151522*t+.072175*e)/au),a=Mn((.0193339*n+.119192*t+.9503041*e)/ou);return mn(116*i-16,500*(r-i),200*(i-a))}function Tn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Cn(n){var t=parseFloat(n);return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function zn(n){return"function"==typeof n?n:function(){return n}}function Pn(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),qn(t,e,n,r)}}function qn(n,t,e,r){function i(){var n,t=s.status;if(!t&&On(s)||t>=200&&300>t||304===t){try{n=e.call(a,s)}catch(r){return void o.error.call(a,r)}o.load.call(a,n)}else o.error.call(a,s)}var a={},o=ho.dispatch("beforesend","progress","load","error"),u={},s=new XMLHttpRequest,l=null;return!this.XDomainRequest||"withCredentials"in s||!/^(http(s)?:)?\/\//.test(n)||(s=new XDomainRequest),"onload"in s?s.onload=s.onerror=i:s.onreadystatechange=function(){s.readyState>3&&i()},s.onprogress=function(n){var t=ho.event;ho.event=n;try{o.progress.call(a,s)}finally{ho.event=t}},a.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?u[n]:(null==t?delete u[n]:u[n]=t+"",a)},a.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",a):t},a.responseType=function(n){return arguments.length?(l=n,a):l},a.response=function(n){return e=n,a},["get","post"].forEach(function(n){a[n]=function(){return a.send.apply(a,[n].concat(go(arguments)))}}),a.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),s.open(e,n,!0),null==t||"accept"in u||(u.accept=t+",*/*"),s.setRequestHeader)for(var c in u)s.setRequestHeader(c,u[c]);return null!=t&&s.overrideMimeType&&s.overrideMimeType(t),null!=l&&(s.responseType=l),null!=i&&a.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(a,s),s.send(null==r?null:r),a},a.abort=function(){return s.abort(),a},ho.rebind(a,o,"on"),null==r?a:a.get(Rn(r))}function Rn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function On(n){var t=n.responseType;return t&&"text"!==t?n.response:n.responseText}function Un(n,t,e){var r=arguments.length;2>r&&(t=0),3>r&&(e=Date.now());var i=e+t,a={c:n,t:i,n:null};return fu?fu.n=a:cu=a,fu=a,hu||(pu=clearTimeout(pu),hu=1,gu(Dn)),a}function Dn(){var n=Fn(),t=jn()-n;t>24?(isFinite(t)&&(clearTimeout(pu),pu=setTimeout(Dn,t)),hu=0):(hu=1,gu(Dn))}function Fn(){for(var n=Date.now(),t=cu;t;)n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n;return n}function jn(){for(var n,t=cu,e=1/0;t;)t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:cu=t.n;return fu=n,e}function In(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Bn(n,t){var e=Math.pow(10,3*No(8-t));return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function Hn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,a=r&&e?function(n,t){for(var i=n.length,a=[],o=0,u=r[0],s=0;i>0&&u>0&&(s+u+1>t&&(u=Math.max(1,t-s)),a.push(n.substring(i-=u,i+u)),!((s+=u+1)>t));)u=r[o=(o+1)%r.length];return a.reverse().join(e)}:w;return function(n){var e=vu.exec(n),r=e[1]||" ",o=e[2]||">",u=e[3]||"-",s=e[4]||"",l=e[5],c=+e[6],f=e[7],h=e[8],p=e[9],g=1,d="",v="",m=!1,y=!0;switch(h&&(h=+h.substring(1)),(l||"0"===r&&"="===o)&&(l=r="0",o="="),p){case"n":f=!0,p="g";break;case"%":g=100,v="%",p="f";break;case"p":g=100,v="%",p="r";break;case"b":case"o":case"x":case"X":"#"===s&&(d="0"+p.toLowerCase());case"c":y=!1;case"d":m=!0,h=0;break;case"s":g=-1,p="r"}"$"===s&&(d=i[0],v=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):("e"==p||"f"==p)&&(h=Math.max(0,Math.min(20,h)))),p=mu.get(p)||Vn;var x=l&&f;return function(n){var e=v;if(m&&n%1)return"";var i=0>n||0===n&&0>1/n?(n=-n,"-"):"-"===u?"":u;if(0>g){var s=ho.formatPrefix(n,h);n=s.scale(n),e=s.symbol+v}else n*=g;n=p(n,h);var k,M,b=n.lastIndexOf(".");if(0>b){var w=y?n.lastIndexOf("e"):-1;0>w?(k=n,M=""):(k=n.substring(0,w),M=n.substring(w))}else k=n.substring(0,b),M=t+n.substring(b+1);!l&&f&&(k=a(k,1/0));var _=d.length+k.length+M.length+(x?0:i.length),N=c>_?new Array(_=c-_+1).join(r):"";return x&&(k=a(N+k,N.length?c-M.length:1/0)),i+=d,n=k+M,("<"===o?i+n+N:">"===o?N+i+n:"^"===o?N.substring(0,_>>=1)+i+n+N.substring(_):i+(x?n:N+n))+e}}}function Vn(n){return n+""}function Yn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function Jn(n,t,e){function r(t){var e=n(t),r=a(e,1);return r-t>t-e?e:r}function i(e){return t(e=n(new xu(e-1)),1),e}function a(n,e){return t(n=new xu(+n),e),n}function o(n,r,a){var o=i(n),u=[];if(a>1)for(;r>o;)e(o)%a||u.push(new Date(+o)),t(o,1);else for(;r>o;)u.push(new Date(+o)),t(o,1);return u}function u(n,t,e){try{xu=Yn;var r=new Yn;return r._=n,o(r,t,e)}finally{xu=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=a,n.range=o;var s=n.utc=Gn(n);return s.floor=s,s.round=Gn(r),s.ceil=Gn(i),s.offset=Gn(a),s.range=u,n}function Gn(n){return function(t,e){try{xu=Yn;var r=new Yn;return r._=t,n(r,e)._}finally{xu=Date}}}function Zn(n){function t(n){function t(t){for(var e,i,a,o=[],u=-1,s=0;++u<r;)37===n.charCodeAt(u)&&(o.push(n.slice(s,u)),null!=(i=Mu[e=n.charAt(++u)])&&(e=n.charAt(++u)),(a=L[e])&&(e=a(t,null==i?"e"===e?" ":"0":i)),o.push(e),s=u+1);return o.push(n.slice(s,u)),o.join("")}var r=n.length;return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0);if(i!=t.length)return null;"p"in r&&(r.H=r.H%12+12*r.p);var a=null!=r.Z&&xu!==Yn,o=new(a?Yn:xu);return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),a?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,a,o,u=0,s=t.length,l=e.length;s>u;){if(r>=l)return-1;if(i=t.charCodeAt(u++),37===i){if(o=t.charAt(u++),a=E[o in Mu?t.charAt(u++):o],!a||(r=a(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){b.lastIndex=0;var r=b.exec(t.slice(e));return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){k.lastIndex=0;var r=k.exec(t.slice(e));return r?(n.w=M.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,e){S.lastIndex=0;var r=S.exec(t.slice(e));return r?(n.m=A.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){_.lastIndex=0;var r=_.exec(t.slice(e));return r?(n.m=N.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,r){return e(n,L.c.toString(),t,r)}function s(n,t,r){return e(n,L.x.toString(),t,r)}function l(n,t,r){return e(n,L.X.toString(),t,r)}function c(n,t,e){var r=x.get(t.slice(e,e+=2).toLowerCase());return null==r?-1:(n.p=r,e)}var f=n.dateTime,h=n.date,p=n.time,g=n.periods,d=n.days,v=n.shortDays,m=n.months,y=n.shortMonths;t.utc=function(n){function e(n){try{xu=Yn;var t=new xu;return t._=n,r(t)}finally{xu=Date}}var r=t(n);return e.parse=function(n){try{xu=Yn;var t=r.parse(n);return t&&t._}finally{xu=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=gt;var x=ho.map(),k=Wn(d),M=$n(d),b=Wn(v),w=$n(v),_=Wn(m),N=$n(m),S=Wn(y),A=$n(y);g.forEach(function(n,t){x.set(n.toLowerCase(),t)});var L={a:function(n){return v[n.getDay()]},A:function(n){return d[n.getDay()]},b:function(n){return y[n.getMonth()]},B:function(n){return m[n.getMonth()]},c:t(f),d:function(n,t){return Xn(n.getDate(),t,2)},e:function(n,t){return Xn(n.getDate(),t,2)},H:function(n,t){return Xn(n.getHours(),t,2)},I:function(n,t){return Xn(n.getHours()%12||12,t,2)},j:function(n,t){return Xn(1+yu.dayOfYear(n),t,3)},L:function(n,t){return Xn(n.getMilliseconds(),t,3)},m:function(n,t){return Xn(n.getMonth()+1,t,2)},M:function(n,t){return Xn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Xn(n.getSeconds(),t,2)},U:function(n,t){return Xn(yu.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Xn(yu.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Xn(n.getFullYear()%100,t,2)},Y:function(n,t){return Xn(n.getFullYear()%1e4,t,4)},Z:ht,"%":function(){return"%"}},E={a:r,A:i,b:a,B:o,c:u,d:ot,e:ot,H:st,I:st,j:ut,L:ft,m:at,M:lt,p:c,S:ct,U:Qn,w:Kn,W:nt,x:s,X:l,y:et,Y:tt,Z:rt,"%":pt};return t}function Xn(n,t,e){var r=0>n?"-":"",i=(r?-n:n)+"",a=i.length;return r+(e>a?new Array(e-a+1).join(t)+i:i)}function Wn(n){return new RegExp("^(?:"+n.map(ho.requote).join("|")+")","i")}function $n(n){for(var t=new g,e=-1,r=n.length;++e<r;)t.set(n[e].toLowerCase(),e);return t}function Kn(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+1));return r?(n.w=+r[0],e+r[0].length):-1}function Qn(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e));return r?(n.U=+r[0],e+r[0].length):-1}function nt(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e));return r?(n.W=+r[0],e+r[0].length):-1}function tt(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+4));return r?(n.y=+r[0],e+r[0].length):-1}function et(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+2));return r?(n.y=it(+r[0]),e+r[0].length):-1}function rt(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function it(n){return n+(n>68?1900:2e3)}function at(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+2));return r?(n.m=r[0]-1,e+r[0].length):-1}function ot(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+2));return r?(n.d=+r[0],e+r[0].length):-1}function ut(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+3));return r?(n.j=+r[0],e+r[0].length):-1}function st(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+2));return r?(n.H=+r[0],e+r[0].length):-1}function lt(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+2));return r?(n.M=+r[0],e+r[0].length):-1}function ct(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+2));return r?(n.S=+r[0],e+r[0].length):-1}function ft(n,t,e){bu.lastIndex=0;var r=bu.exec(t.slice(e,e+3));return r?(n.L=+r[0],e+r[0].length):-1}function ht(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=No(t)/60|0,i=No(t)%60;return e+Xn(r,"0",2)+Xn(i,"0",2)}function pt(n,t,e){wu.lastIndex=0;var r=wu.exec(t.slice(e,e+1));return r?e+r[0].length:-1}function gt(n){for(var t=n.length,e=-1;++e<t;)n[e][0]=this(n[e][0]);return function(t){for(var e=0,r=n[e];!r[1](t);)r=n[++e];return r[0](t)}}function dt(){}function vt(n,t,e){var r=e.s=n+t,i=r-n,a=r-i;e.t=n-a+(t-i)}function mt(n,t){n&&Au.hasOwnProperty(n.type)&&Au[n.type](n,t)}function yt(n,t,e){var r,i=-1,a=n.length-e;for(t.lineStart();++i<a;)r=n[i],t.point(r[0],r[1],r[2]);t.lineEnd()}function xt(n,t){var e=-1,r=n.length;for(t.polygonStart();++e<r;)yt(n[e],t,1);t.polygonEnd()}function kt(){function n(n,t){n*=Go,t=t*Go/2+Ho/4;var e=n-r,o=e>=0?1:-1,u=o*e,s=Math.cos(t),l=Math.sin(t),c=a*l,f=i*s+c*Math.cos(u),h=c*o*Math.sin(u);Eu.add(Math.atan2(h,f)),r=n,i=s,a=l}var t,e,r,i,a;Tu.point=function(o,u){Tu.point=n,r=(t=o)*Go,i=Math.cos(u=(e=u)*Go/2+Ho/4),a=Math.sin(u)},Tu.lineEnd=function(){n(t,e)}}function Mt(n){var t=n[0],e=n[1],r=Math.cos(e);return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function bt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function wt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function _t(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function Nt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function St(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]);n[0]/=t,n[1]/=t,n[2]/=t}function At(n){return[Math.atan2(n[1],n[0]),un(n[2])]}function Lt(n,t){return No(n[0]-t[0])<Io&&No(n[1]-t[1])<Io}function Et(n,t){n*=Go;var e=Math.cos(t*=Go);Tt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function Tt(n,t,e){++Cu,Pu+=(n-Pu)/Cu,qu+=(t-qu)/Cu,Ru+=(e-Ru)/Cu}function Ct(){function n(n,i){n*=Go;var a=Math.cos(i*=Go),o=a*Math.cos(n),u=a*Math.sin(n),s=Math.sin(i),l=Math.atan2(Math.sqrt((l=e*s-r*u)*l+(l=r*o-t*s)*l+(l=t*u-e*o)*l),t*o+e*u+r*s);zu+=l,Ou+=l*(t+(t=o)),Uu+=l*(e+(e=u)),Du+=l*(r+(r=s)),Tt(t,e,r)}var t,e,r;Bu.point=function(i,a){i*=Go;var o=Math.cos(a*=Go);t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(a),Bu.point=n,Tt(t,e,r)}}function zt(){Bu.point=Et}function Pt(){function n(n,t){n*=Go;var e=Math.cos(t*=Go),o=e*Math.cos(n),u=e*Math.sin(n),s=Math.sin(t),l=i*s-a*u,c=a*o-r*s,f=r*u-i*o,h=Math.sqrt(l*l+c*c+f*f),p=r*o+i*u+a*s,g=h&&-on(p)/h,d=Math.atan2(h,p);Fu+=g*l,ju+=g*c,Iu+=g*f,zu+=d,Ou+=d*(r+(r=o)),Uu+=d*(i+(i=u)),Du+=d*(a+(a=s)),Tt(r,i,a)}var t,e,r,i,a;Bu.point=function(o,u){t=o,e=u,Bu.point=n,o*=Go;var s=Math.cos(u*=Go);r=s*Math.cos(o),i=s*Math.sin(o),a=Math.sin(u),Tt(r,i,a)},Bu.lineEnd=function(){n(t,e),Bu.lineEnd=zt,Bu.point=Et}}function qt(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function Rt(){return!0}function Ot(n,t,e,r,i){var a=[],o=[];if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t];if(Lt(e,r)){i.lineStart();for(var u=0;t>u;++u)i.point((e=n[u])[0],e[1]);return void i.lineEnd()}var s=new Dt(e,n,null,!0),l=new Dt(e,null,s,!1);s.o=l,a.push(s),o.push(l),s=new Dt(r,n,null,!1),l=new Dt(r,null,s,!0),s.o=l,a.push(s),o.push(l)}}),o.sort(t),Ut(a),Ut(o),a.length){for(var u=0,s=e,l=o.length;l>u;++u)o[u].e=s=!s;for(var c,f,h=a[0];;){for(var p=h,g=!0;p.v;)if((p=p.n)===h)return;c=p.z,i.lineStart();do{if(p.v=p.o.v=!0,p.e){if(g)for(var u=0,l=c.length;l>u;++u)i.point((f=c[u])[0],f[1]);else r(p.x,p.n.x,1,i);p=p.n}else{if(g){c=p.p.z;for(var u=c.length-1;u>=0;--u)i.point((f=c[u])[0],f[1])}else r(p.x,p.p.x,-1,i);p=p.p}p=p.o,c=p.z,g=!g}while(!p.v);i.lineEnd()}}}function Ut(n){if(t=n.length){for(var t,e,r=0,i=n[0];++r<t;)i.n=e=n[r],e.p=i,i=e;i.n=e=n[0],e.p=i}}function Dt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Ft(n,t,e,r){return function(i,a){function o(t,e){var r=i(t,e);n(t=r[0],e=r[1])&&a.point(t,e)}function u(n,t){var e=i(n,t);v.point(e[0],e[1])}function s(){y.point=u,v.lineStart()}function l(){y.point=o,v.lineEnd()}function c(n,t){d.push([n,t]);var e=i(n,t);k.point(e[0],e[1])}function f(){k.lineStart(),d=[]}function h(){c(d[0][0],d[0][1]),k.lineEnd();var n,t=k.clean(),e=x.buffer(),r=e.length;if(d.pop(),g.push(d),d=null,r)if(1&t){n=e[0];var i,r=n.length-1,o=-1;if(r>0){for(M||(a.polygonStart(),M=!0),a.lineStart();++o<r;)a.point((i=n[o])[0],i[1]);a.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(jt))}var p,g,d,v=t(a),m=i.invert(r[0],r[1]),y={point:o,lineStart:s,lineEnd:l,polygonStart:function(){y.point=c,y.lineStart=f,y.lineEnd=h,p=[],g=[]},polygonEnd:function(){y.point=o,y.lineStart=s,y.lineEnd=l,p=ho.merge(p);var n=Jt(m,g);p.length?(M||(a.polygonStart(),M=!0),Ot(p,Bt,n,e,a)):n&&(M||(a.polygonStart(),M=!0),a.lineStart(),e(null,null,1,a),a.lineEnd()),M&&(a.polygonEnd(),M=!1),p=g=null},sphere:function(){a.polygonStart(),a.lineStart(),e(null,null,1,a),a.lineEnd(),a.polygonEnd()}},x=It(),k=t(x),M=!1;return y}}function jt(n){return n.length>1}function It(){var n,t=[];return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:S,buffer:function(){var e=t;return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Bt(n,t){return((n=n.x)[0]<0?n[1]-Jo-Io:Jo-n[1])-((t=t.x)[0]<0?t[1]-Jo-Io:Jo-t[1])}function Ht(n){var t,e=NaN,r=NaN,i=NaN;return{lineStart:function(){n.lineStart(),t=1},point:function(a,o){var u=a>0?Ho:-Ho,s=No(a-e);No(s-Ho)<Io?(n.point(e,r=(r+o)/2>0?Jo:-Jo),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(u,r),n.point(a,r),t=0):i!==u&&s>=Ho&&(No(e-i)<Io&&(e-=i*Io),No(a-u)<Io&&(a-=u*Io),r=Vt(e,r,a,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(u,r),t=0),n.point(e=a,r=o),i=u},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Vt(n,t,e,r){var i,a,o=Math.sin(n-e);return No(o)>Io?Math.atan((Math.sin(t)*(a=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*a*o)):(t+r)/2}function Yt(n,t,e,r){var i;if(null==n)i=e*Jo,r.point(-Ho,i),r.point(0,i),r.point(Ho,i),r.point(Ho,0),r.point(Ho,-i),r.point(0,-i),r.point(-Ho,-i),r.point(-Ho,0),r.point(-Ho,i);else if(No(n[0]-t[0])>Io){var a=n[0]<t[0]?Ho:-Ho;i=e*a/2,r.point(-a,i),r.point(0,i),r.point(a,i)}else r.point(t[0],t[1])}function Jt(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],a=0,o=0;Eu.reset();for(var u=0,s=t.length;s>u;++u){var l=t[u],c=l.length;if(c)for(var f=l[0],h=f[0],p=f[1]/2+Ho/4,g=Math.sin(p),d=Math.cos(p),v=1;;){v===c&&(v=0),n=l[v];var m=n[0],y=n[1]/2+Ho/4,x=Math.sin(y),k=Math.cos(y),M=m-h,b=M>=0?1:-1,w=b*M,_=w>Ho,N=g*x;if(Eu.add(Math.atan2(N*b*Math.sin(w),d*k+N*Math.cos(w))),a+=_?M+b*Vo:M,_^h>=e^m>=e){var S=wt(Mt(f),Mt(n));St(S);var A=wt(i,S);St(A);var L=(_^M>=0?-1:1)*un(A[2]);(r>L||r===L&&(S[0]||S[1]))&&(o+=_^M>=0?1:-1)}if(!v++)break;h=m,g=x,d=k,f=n}}return(-Io>a||Io>a&&0>Eu)^1&o}function Gt(n){function t(n,t){return Math.cos(n)*Math.cos(t)>a}function e(n){var e,a,s,l,c;return{lineStart:function(){l=s=!1,c=1},point:function(f,h){var p,g=[f,h],d=t(f,h),v=o?d?0:i(f,h):d?i(f+(0>f?Ho:-Ho),h):0;if(!e&&(l=s=d)&&n.lineStart(),d!==s&&(p=r(e,g),(Lt(e,p)||Lt(g,p))&&(g[0]+=Io,g[1]+=Io,d=t(g[0],g[1]))),d!==s)c=0,d?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p;else if(u&&e&&o^d){var m;v&a||!(m=r(g,e,!0))||(c=0,o?(n.lineStart(),n.point(m[0][0],m[0][1]),n.point(m[1][0],m[1][1]),n.lineEnd()):(n.point(m[1][0],m[1][1]),n.lineEnd(),n.lineStart(),n.point(m[0][0],m[0][1])))}!d||e&&Lt(e,g)||n.point(g[0],g[1]),e=g,s=d,a=v},lineEnd:function(){s&&n.lineEnd(),e=null},clean:function(){return c|(l&&s)<<1}}}function r(n,t,e){var r=Mt(n),i=Mt(t),o=[1,0,0],u=wt(r,i),s=bt(u,u),l=u[0],c=s-l*l;if(!c)return!e&&n;var f=a*s/c,h=-a*l/c,p=wt(o,u),g=Nt(o,f),d=Nt(u,h);_t(g,d);var v=p,m=bt(g,v),y=bt(v,v),x=m*m-y*(bt(g,g)-1);if(!(0>x)){var k=Math.sqrt(x),M=Nt(v,(-m-k)/y);if(_t(M,g),M=At(M),!e)return M;var b,w=n[0],_=t[0],N=n[1],S=t[1];w>_&&(b=w,w=_,_=b);var A=_-w,L=No(A-Ho)<Io,E=L||Io>A;if(!L&&N>S&&(b=N,N=S,S=b),E?L?N+S>0^M[1]<(No(M[0]-w)<Io?N:S):N<=M[1]&&M[1]<=S:A>Ho^(w<=M[0]&&M[0]<=_)){var T=Nt(v,(-m+k)/y);return _t(T,g),[M,At(T)]}}}function i(t,e){var r=o?n:Ho-n,i=0;return-r>t?i|=1:t>r&&(i|=2),-r>e?i|=4:e>r&&(i|=8),i}var a=Math.cos(n),o=a>0,u=No(a)>Io,s=ke(n,6*Go);return Ft(t,e,s,o?[0,-n]:[-Ho,n-Ho])}function Zt(n,t,e,r){return function(i){var a,o=i.a,u=i.b,s=o.x,l=o.y,c=u.x,f=u.y,h=0,p=1,g=c-s,d=f-l;if(a=n-s,g||!(a>0)){if(a/=g,0>g){if(h>a)return;p>a&&(p=a)}else if(g>0){if(a>p)return;a>h&&(h=a)}if(a=e-s,g||!(0>a)){if(a/=g,0>g){if(a>p)return;a>h&&(h=a)}else if(g>0){if(h>a)return;p>a&&(p=a)}if(a=t-l,d||!(a>0)){if(a/=d,0>d){if(h>a)return;p>a&&(p=a)}else if(d>0){if(a>p)return;a>h&&(h=a)}if(a=r-l,d||!(0>a)){if(a/=d,0>d){if(a>p)return;a>h&&(h=a)}else if(d>0){if(h>a)return;p>a&&(p=a)}return h>0&&(i.a={x:s+h*g,y:l+h*d}),1>p&&(i.b={x:s+p*g,y:l+p*d}),i}}}}}}function Xt(n,t,e,r){function i(r,i){return No(r[0]-n)<Io?i>0?0:3:No(r[0]-e)<Io?i>0?2:1:No(r[1]-t)<Io?i>0?1:0:i>0?3:2}function a(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1);return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(u){function s(n){for(var t=0,e=v.length,r=n[1],i=0;e>i;++i)for(var a,o=1,u=v[i],s=u.length,l=u[0];s>o;++o)a=u[o],l[1]<=r?a[1]>r&&an(l,a,n)>0&&++t:a[1]<=r&&an(l,a,n)<0&&--t,l=a;return 0!==t}function l(a,u,s,l){var c=0,f=0;if(null==a||(c=i(a,s))!==(f=i(u,s))||o(a,u)<0^s>0){do l.point(0===c||3===c?n:e,c>1?r:t);while((c=(c+s+4)%4)!==f)}else l.point(u[0],u[1])}function c(i,a){return i>=n&&e>=i&&a>=t&&r>=a}function f(n,t){c(n,t)&&u.point(n,t)}function h(){E.point=g,v&&v.push(m=[]),_=!0,w=!1,M=b=NaN}function p(){d&&(g(y,x),k&&w&&A.rejoin(),d.push(A.buffer())),E.point=f,w&&u.lineEnd()}function g(n,t){n=Math.max(-Vu,Math.min(Vu,n)),t=Math.max(-Vu,Math.min(Vu,t));var e=c(n,t);if(v&&m.push([n,t]),_)y=n,x=t,k=e,_=!1,e&&(u.lineStart(),u.point(n,t));else if(e&&w)u.point(n,t);else{var r={a:{x:M,y:b},b:{x:n,y:t}};L(r)?(w||(u.lineStart(),u.point(r.a.x,r.a.y)),u.point(r.b.x,r.b.y),e||u.lineEnd(),N=!1):e&&(u.lineStart(),u.point(n,t),N=!1)}M=n,b=t,w=e}var d,v,m,y,x,k,M,b,w,_,N,S=u,A=It(),L=Zt(n,t,e,r),E={point:f,lineStart:h,lineEnd:p,polygonStart:function(){u=A,d=[],v=[],N=!0},polygonEnd:function(){u=S,d=ho.merge(d);var t=s([n,r]),e=N&&t,i=d.length;(e||i)&&(u.polygonStart(),e&&(u.lineStart(),l(null,null,1,u),u.lineEnd()),i&&Ot(d,a,t,l,u),u.polygonEnd()),d=v=m=null}};return E}}function Wt(n){var t=0,e=Ho/3,r=he(n),i=r(t,e);return i.parallels=function(n){return arguments.length?r(t=n[0]*Ho/180,e=n[1]*Ho/180):[t/Ho*180,e/Ho*180]},i}function $t(n,t){function e(n,t){var e=Math.sqrt(a-2*i*Math.sin(t))/i;return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,a=1+r*(2*i-r),o=Math.sqrt(a)/i;return e.invert=function(n,t){var e=o-t;return[Math.atan2(n,e)/i,un((a-(n*n+e*e)*i*i)/(2*i))]},e}function Kt(){function n(n,t){Ju+=i*n-r*t,r=n,i=t}var t,e,r,i;$u.point=function(a,o){$u.point=n,t=r=a,e=i=o},$u.lineEnd=function(){n(t,e)}}function Qt(n,t){Gu>n&&(Gu=n),n>Xu&&(Xu=n),Zu>t&&(Zu=t),t>Wu&&(Wu=t)}function ne(){function n(n,t){o.push("M",n,",",t,a)}function t(n,t){o.push("M",n,",",t),u.point=e}function e(n,t){o.push("L",n,",",t)}function r(){u.point=n}function i(){o.push("Z")}var a=te(4.5),o=[],u={point:n,lineStart:function(){u.point=t},lineEnd:r,polygonStart:function(){u.lineEnd=i},polygonEnd:function(){u.lineEnd=r,u.point=n},pointRadius:function(n){return a=te(n),u},result:function(){if(o.length){var n=o.join("");return o=[],n}}};return u}function te(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function ee(n,t){Pu+=n,qu+=t,++Ru}function re(){function n(n,r){var i=n-t,a=r-e,o=Math.sqrt(i*i+a*a);Ou+=o*(t+n)/2,Uu+=o*(e+r)/2,Du+=o,ee(t=n,e=r)}var t,e;Qu.point=function(r,i){Qu.point=n,ee(t=r,e=i)}}function ie(){Qu.point=ee}function ae(){function n(n,t){var e=n-r,a=t-i,o=Math.sqrt(e*e+a*a);Ou+=o*(r+n)/2,Uu+=o*(i+t)/2,Du+=o,o=i*n-r*t,Fu+=o*(r+n),ju+=o*(i+t),Iu+=3*o,ee(r=n,i=t)}var t,e,r,i;Qu.point=function(a,o){Qu.point=n,ee(t=r=a,e=i=o)},Qu.lineEnd=function(){n(t,e)}}function oe(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,Vo)}function e(t,e){n.moveTo(t,e),u.point=r}function r(t,e){n.lineTo(t,e)}function i(){u.point=t}function a(){n.closePath()}var o=4.5,u={point:t,lineStart:function(){u.point=e},lineEnd:i,polygonStart:function(){u.lineEnd=a},polygonEnd:function(){u.lineEnd=i,u.point=t},pointRadius:function(n){return o=n,u},result:S};return u}function ue(n){function t(n){return(u?r:e)(n)}function e(t){return ce(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){x=NaN,_.point=a,t.lineStart()}function a(e,r){var a=Mt([e,r]),o=n(e,r);i(x,k,y,M,b,w,x=o[0],k=o[1],y=e,M=a[0],b=a[1],w=a[2],u,t),t.point(x,k)}function o(){_.point=e,t.lineEnd()}function s(){r(),_.point=l,_.lineEnd=c}function l(n,t){a(f=n,h=t),p=x,g=k,d=M,v=b,m=w,_.point=a}function c(){i(x,k,y,M,b,w,p,g,f,d,v,m,u,t),_.lineEnd=o,o()}var f,h,p,g,d,v,m,y,x,k,M,b,w,_={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),_.lineStart=s},polygonEnd:function(){t.polygonEnd(),_.lineStart=r}};return _}function i(t,e,r,u,s,l,c,f,h,p,g,d,v,m){var y=c-t,x=f-e,k=y*y+x*x;if(k>4*a&&v--){var M=u+p,b=s+g,w=l+d,_=Math.sqrt(M*M+b*b+w*w),N=Math.asin(w/=_),S=No(No(w)-1)<Io||No(r-h)<Io?(r+h)/2:Math.atan2(b,M),A=n(S,N),L=A[0],E=A[1],T=L-t,C=E-e,z=x*T-y*C;(z*z/k>a||No((y*T+x*C)/k-.5)>.3||o>u*p+s*g+l*d)&&(i(t,e,r,u,s,l,L,E,S,M/=_,b/=_,w,v,m),m.point(L,E),i(L,E,S,M,b,w,c,f,h,p,g,d,v,m))}}var a=.5,o=Math.cos(30*Go),u=16;return t.precision=function(n){return arguments.length?(u=(a=n*n)>0&&16,t):Math.sqrt(a)},t}function se(n){var t=ue(function(t,e){return n([t*Zo,e*Zo])});return function(n){return pe(t(n))}}function le(n){this.stream=n}function ce(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function fe(n){return he(function(){return n})()}function he(n){function t(n){return n=u(n[0]*Go,n[1]*Go),[n[0]*h+s,l-n[1]*h]}function e(n){return n=u.invert((n[0]-s)/h,(l-n[1])/h),n&&[n[0]*Zo,n[1]*Zo]}function r(){u=qt(o=ve(m,y,x),a);var n=a(d,v);return s=p-n[0]*h,l=g+n[1]*h,i()}function i(){return c&&(c.valid=!1,c=null),t}var a,o,u,s,l,c,f=ue(function(n,t){return n=a(n,t),[n[0]*h+s,l-n[1]*h]}),h=150,p=480,g=250,d=0,v=0,m=0,y=0,x=0,k=Hu,M=w,b=null,_=null;return t.stream=function(n){return c&&(c.valid=!1),c=pe(k(o,f(M(n)))),c.valid=!0,c},t.clipAngle=function(n){return arguments.length?(k=null==n?(b=n,Hu):Gt((b=+n)*Go),i()):b},t.clipExtent=function(n){return arguments.length?(_=n,M=n?Xt(n[0][0],n[0][1],n[1][0],n[1][1]):w,i()):_},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(d=n[0]%360*Go,v=n[1]%360*Go,r()):[d*Zo,v*Zo]},t.rotate=function(n){return arguments.length?(m=n[0]%360*Go,y=n[1]%360*Go,x=n.length>2?n[2]%360*Go:0,r()):[m*Zo,y*Zo,x*Zo]},ho.rebind(t,f,"precision"),function(){return a=n.apply(this,arguments),t.invert=a.invert&&e,r()}}function pe(n){return ce(n,function(t,e){n.point(t*Go,e*Go)})}function ge(n,t){return[n,t]}function de(n,t){return[n>Ho?n-Vo:-Ho>n?n+Vo:n,t]}function ve(n,t,e){return n?t||e?qt(ye(n),xe(t,e)):ye(n):t||e?xe(t,e):de}function me(n){return function(t,e){return t+=n,[t>Ho?t-Vo:-Ho>t?t+Vo:t,e]}}function ye(n){var t=me(n);return t.invert=me(-n),t}function xe(n,t){function e(n,t){var e=Math.cos(t),u=Math.cos(n)*e,s=Math.sin(n)*e,l=Math.sin(t),c=l*r+u*i;return[Math.atan2(s*a-c*o,u*r-l*i),un(c*a+s*o)]}var r=Math.cos(n),i=Math.sin(n),a=Math.cos(t),o=Math.sin(t);return e.invert=function(n,t){var e=Math.cos(t),u=Math.cos(n)*e,s=Math.sin(n)*e,l=Math.sin(t),c=l*a-s*o;return[Math.atan2(s*a+l*o,u*r+c*i),un(c*r-u*i)]},e}function ke(n,t){var e=Math.cos(n),r=Math.sin(n);return function(i,a,o,u){var s=o*t;null!=i?(i=Me(e,i),a=Me(e,a),(o>0?a>i:i>a)&&(i+=o*Vo)):(i=n+o*Vo,a=n-.5*s);for(var l,c=i;o>0?c>a:a>c;c-=s)u.point((l=At([e,-r*Math.cos(c),-r*Math.sin(c)]))[0],l[1])}}function Me(n,t){var e=Mt(t);e[0]-=n,St(e);var r=on(-e[1]);return((-e[2]<0?-r:r)+2*Math.PI-Io)%(2*Math.PI)}function be(n,t,e){var r=ho.range(n,t-Io,e).concat(t);return function(n){return r.map(function(t){return[n,t]})}}function we(n,t,e){var r=ho.range(n,t-Io,e).concat(t);return function(n){return r.map(function(t){return[t,n]})}}function _e(n){return n.source}function Ne(n){return n.target}function Se(n,t,e,r){var i=Math.cos(t),a=Math.sin(t),o=Math.cos(r),u=Math.sin(r),s=i*Math.cos(n),l=i*Math.sin(n),c=o*Math.cos(e),f=o*Math.sin(e),h=2*Math.asin(Math.sqrt(fn(r-t)+i*o*fn(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*s+t*c,i=e*l+t*f,o=e*a+t*u;return[Math.atan2(i,r)*Zo,Math.atan2(o,Math.sqrt(r*r+i*i))*Zo]}:function(){return[n*Zo,t*Zo]};return g.distance=h,g}function Ae(){function n(n,i){var a=Math.sin(i*=Go),o=Math.cos(i),u=No((n*=Go)-t),s=Math.cos(u);ns+=Math.atan2(Math.sqrt((u=o*Math.sin(u))*u+(u=r*a-e*o*s)*u),e*a+r*o*s),t=n,e=a,r=o}var t,e,r;ts.point=function(i,a){t=i*Go,e=Math.sin(a*=Go),r=Math.cos(a),ts.point=n},ts.lineEnd=function(){ts.point=ts.lineEnd=S}}function Le(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),a=n(r*i);return[a*i*Math.sin(t),a*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),a=Math.sin(i),o=Math.cos(i);return[Math.atan2(n*a,r*o),Math.asin(r&&e*a/r)]},e}function Ee(n,t){function e(n,t){o>0?-Jo+Io>t&&(t=-Jo+Io):t>Jo-Io&&(t=Jo-Io);var e=o/Math.pow(i(t),a);return[e*Math.sin(a*n),o-e*Math.cos(a*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Ho/4+n/2)},a=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),a)/a;return a?(e.invert=function(n,t){var e=o-t,r=rn(a)*Math.sqrt(n*n+e*e);return[Math.atan2(n,e)/a,2*Math.atan(Math.pow(o/r,1/a))-Jo]},e):Ce}function Te(n,t){function e(n,t){var e=a-t;return[e*Math.sin(i*n),a-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),a=r/i+n;return No(i)<Io?ge:(e.invert=function(n,t){var e=a-t;return[Math.atan2(n,e)/i,a-rn(i)*Math.sqrt(n*n+e*e)]},e)}function Ce(n,t){return[n,Math.log(Math.tan(Ho/4+t/2))]}function ze(n){var t,e=fe(n),r=e.scale,i=e.translate,a=e.clipExtent;return e.scale=function(){var n=r.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments);return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=a.apply(e,arguments);if(o===e){if(t=null==n){var u=Ho*r(),s=i();a([[s[0]-u,s[1]-u],[s[0]+u,s[1]+u]])}}else t&&(o=null);return o},e.clipExtent(null)}function Pe(n,t){return[Math.log(Math.tan(Ho/4+t/2)),-n]}function qe(n){return n[0]}function Re(n){return n[1]}function Oe(n){for(var t=n.length,e=[0,1],r=2,i=2;t>i;i++){for(;r>1&&an(n[e[r-2]],n[e[r-1]],n[i])<=0;)--r;e[r++]=i}return e.slice(0,r)}function Ue(n,t){return n[0]-t[0]||n[1]-t[1]}function De(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Fe(n,t,e,r){var i=n[0],a=e[0],o=t[0]-i,u=r[0]-a,s=n[1],l=e[1],c=t[1]-s,f=r[1]-l,h=(u*(s-l)-f*(i-a))/(f*o-u*c);return[i+h*o,s+h*c]}function je(n){var t=n[0],e=n[n.length-1];return!(t[0]-e[0]||t[1]-e[1])}function Ie(){sr(this),this.edge=this.site=this.circle=null}function Be(n){var t=ps.pop()||new Ie;return t.site=n,t}function He(n){Qe(n),cs.remove(n),ps.push(n),sr(n)}function Ve(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},a=n.P,o=n.N,u=[n];He(n);for(var s=a;s.circle&&No(e-s.circle.x)<Io&&No(r-s.circle.cy)<Io;)a=s.P,u.unshift(s),He(s),s=a;u.unshift(s),Qe(s);for(var l=o;l.circle&&No(e-l.circle.x)<Io&&No(r-l.circle.cy)<Io;)o=l.N,u.push(l),He(l),l=o;u.push(l),Qe(l);var c,f=u.length;for(c=1;f>c;++c)l=u[c],s=u[c-1],ar(l.edge,s.site,l.site,i);s=u[0],l=u[f-1],l.edge=rr(s.site,l.site,null,i),Ke(s),Ke(l)}function Ye(n){for(var t,e,r,i,a=n.x,o=n.y,u=cs._;u;)if(r=Je(u,o)-a,r>Io)u=u.L;else{if(i=a-Ge(u,o),!(i>Io)){r>-Io?(t=u.P,e=u):i>-Io?(t=u,e=u.N):t=e=u;break}if(!u.R){t=u;break}u=u.R}var s=Be(n);if(cs.insert(t,s),
t||e){if(t===e)return Qe(t),e=Be(t.site),cs.insert(s,e),s.edge=e.edge=rr(t.site,s.site),Ke(t),void Ke(e);if(!e)return void(s.edge=rr(t.site,s.site));Qe(t),Qe(e);var l=t.site,c=l.x,f=l.y,h=n.x-c,p=n.y-f,g=e.site,d=g.x-c,v=g.y-f,m=2*(h*v-p*d),y=h*h+p*p,x=d*d+v*v,k={x:(v*y-p*x)/m+c,y:(h*x-d*y)/m+f};ar(e.edge,l,g,k),s.edge=rr(l,n,null,k),e.edge=rr(n,g,null,k),Ke(t),Ke(e)}}function Je(n,t){var e=n.site,r=e.x,i=e.y,a=i-t;if(!a)return r;var o=n.P;if(!o)return-(1/0);e=o.site;var u=e.x,s=e.y,l=s-t;if(!l)return u;var c=u-r,f=1/a-1/l,h=c/l;return f?(-h+Math.sqrt(h*h-2*f*(c*c/(-2*l)-s+l/2+i-a/2)))/f+r:(r+u)/2}function Ge(n,t){var e=n.N;if(e)return Je(e,t);var r=n.site;return r.y===t?r.x:1/0}function Ze(n){this.site=n,this.edges=[]}function Xe(n){for(var t,e,r,i,a,o,u,s,l,c,f=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],d=ls,v=d.length;v--;)if(a=d[v],a&&a.prepare())for(u=a.edges,s=u.length,o=0;s>o;)c=u[o].end(),r=c.x,i=c.y,l=u[++o%s].start(),t=l.x,e=l.y,(No(r-t)>Io||No(i-e)>Io)&&(u.splice(o,0,new or(ir(a.site,c,No(r-f)<Io&&g-i>Io?{x:f,y:No(t-f)<Io?e:g}:No(i-g)<Io&&h-r>Io?{x:No(e-g)<Io?t:h,y:g}:No(r-h)<Io&&i-p>Io?{x:h,y:No(t-h)<Io?e:p}:No(i-p)<Io&&r-f>Io?{x:No(e-p)<Io?t:f,y:p}:null),a.site,null)),++s)}function We(n,t){return t.angle-n.angle}function $e(){sr(this),this.x=this.y=this.arc=this.site=this.cy=null}function Ke(n){var t=n.P,e=n.N;if(t&&e){var r=t.site,i=n.site,a=e.site;if(r!==a){var o=i.x,u=i.y,s=r.x-o,l=r.y-u,c=a.x-o,f=a.y-u,h=2*(s*f-l*c);if(!(h>=-Bo)){var p=s*s+l*l,g=c*c+f*f,d=(f*p-l*g)/h,v=(s*g-c*p)/h,f=v+u,m=gs.pop()||new $e;m.arc=n,m.site=i,m.x=d+o,m.y=f+Math.sqrt(d*d+v*v),m.cy=f,n.circle=m;for(var y=null,x=hs._;x;)if(m.y<x.y||m.y===x.y&&m.x<=x.x){if(!x.L){y=x.P;break}x=x.L}else{if(!x.R){y=x;break}x=x.R}hs.insert(y,m),y||(fs=m)}}}}function Qe(n){var t=n.circle;t&&(t.P||(fs=t.N),hs.remove(t),gs.push(t),sr(t),n.circle=null)}function nr(n){for(var t,e=ss,r=Zt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length;i--;)t=e[i],(!tr(t,n)||!r(t)||No(t.a.x-t.b.x)<Io&&No(t.a.y-t.b.y)<Io)&&(t.a=t.b=null,e.splice(i,1))}function tr(n,t){var e=n.b;if(e)return!0;var r,i,a=n.a,o=t[0][0],u=t[1][0],s=t[0][1],l=t[1][1],c=n.l,f=n.r,h=c.x,p=c.y,g=f.x,d=f.y,v=(h+g)/2,m=(p+d)/2;if(d===p){if(o>v||v>=u)return;if(h>g){if(a){if(a.y>=l)return}else a={x:v,y:s};e={x:v,y:l}}else{if(a){if(a.y<s)return}else a={x:v,y:l};e={x:v,y:s}}}else if(r=(h-g)/(d-p),i=m-r*v,-1>r||r>1)if(h>g){if(a){if(a.y>=l)return}else a={x:(s-i)/r,y:s};e={x:(l-i)/r,y:l}}else{if(a){if(a.y<s)return}else a={x:(l-i)/r,y:l};e={x:(s-i)/r,y:s}}else if(d>p){if(a){if(a.x>=u)return}else a={x:o,y:r*o+i};e={x:u,y:r*u+i}}else{if(a){if(a.x<o)return}else a={x:u,y:r*u+i};e={x:o,y:r*o+i}}return n.a=a,n.b=e,!0}function er(n,t){this.l=n,this.r=t,this.a=this.b=null}function rr(n,t,e,r){var i=new er(n,t);return ss.push(i),e&&ar(i,n,t,e),r&&ar(i,t,n,r),ls[n.i].edges.push(new or(i,n,t)),ls[t.i].edges.push(new or(i,t,n)),i}function ir(n,t,e){var r=new er(n,null);return r.a=t,r.b=e,ss.push(r),r}function ar(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function or(n,t,e){var r=n.a,i=n.b;this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function ur(){this._=null}function sr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function lr(n,t){var e=t,r=t.R,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function cr(n,t){var e=t,r=t.L,i=e.U;i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function fr(n){for(;n.L;)n=n.L;return n}function hr(n,t){var e,r,i,a=n.sort(pr).pop();for(ss=[],ls=new Array(n.length),cs=new ur,hs=new ur;;)if(i=fs,a&&(!i||a.y<i.y||a.y===i.y&&a.x<i.x))(a.x!==e||a.y!==r)&&(ls[a.i]=new Ze(a),Ye(a),e=a.x,r=a.y),a=n.pop();else{if(!i)break;Ve(i.arc)}t&&(nr(t),Xe(t));var o={cells:ls,edges:ss};return cs=hs=ss=ls=null,o}function pr(n,t){return t.y-n.y||t.x-n.x}function gr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function dr(n){return n.x}function vr(n){return n.y}function mr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function yr(n,t,e,r,i,a){if(!n(t,e,r,i,a)){var o=.5*(e+i),u=.5*(r+a),s=t.nodes;s[0]&&yr(n,s[0],e,r,o,u),s[1]&&yr(n,s[1],o,r,i,u),s[2]&&yr(n,s[2],e,u,o,a),s[3]&&yr(n,s[3],o,u,i,a)}}function xr(n,t,e,r,i,a,o){var u,s=1/0;return function l(n,c,f,h,p){if(!(c>a||f>o||r>h||i>p)){if(g=n.point){var g,d=t-n.x,v=e-n.y,m=d*d+v*v;if(s>m){var y=Math.sqrt(s=m);r=t-y,i=e-y,a=t+y,o=e+y,u=g}}for(var x=n.nodes,k=.5*(c+h),M=.5*(f+p),b=t>=k,w=e>=M,_=w<<1|b,N=_+4;N>_;++_)if(n=x[3&_])switch(3&_){case 0:l(n,c,f,k,M);break;case 1:l(n,k,f,h,M);break;case 2:l(n,c,M,k,p);break;case 3:l(n,k,M,h,p)}}}(n,r,i,a,o),u}function kr(n,t){n=ho.rgb(n),t=ho.rgb(t);var e=n.r,r=n.g,i=n.b,a=t.r-e,o=t.g-r,u=t.b-i;return function(n){return"#"+Sn(Math.round(e+a*n))+Sn(Math.round(r+o*n))+Sn(Math.round(i+u*n))}}function Mr(n,t){var e,r={},i={};for(e in n)e in t?r[e]=_r(n[e],t[e]):i[e]=n[e];for(e in t)e in n||(i[e]=t[e]);return function(n){for(e in r)i[e]=r[e](n);return i}}function br(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function wr(n,t){var e,r,i,a=vs.lastIndex=ms.lastIndex=0,o=-1,u=[],s=[];for(n+="",t+="";(e=vs.exec(n))&&(r=ms.exec(t));)(i=r.index)>a&&(i=t.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(e=e[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,s.push({i:o,x:br(e,r)})),a=ms.lastIndex;return a<t.length&&(i=t.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?s[0]?(t=s[0].x,function(n){return t(n)+""}):function(){return t}:(t=s.length,function(n){for(var e,r=0;t>r;++r)u[(e=s[r]).i]=e.x(n);return u.join("")})}function _r(n,t){for(var e,r=ho.interpolators.length;--r>=0&&!(e=ho.interpolators[r](n,t)););return e}function Nr(n,t){var e,r=[],i=[],a=n.length,o=t.length,u=Math.min(n.length,t.length);for(e=0;u>e;++e)r.push(_r(n[e],t[e]));for(;a>e;++e)i[e]=n[e];for(;o>e;++e)i[e]=t[e];return function(n){for(e=0;u>e;++e)i[e]=r[e](n);return i}}function Sr(n){return function(t){return 0>=t?0:t>=1?1:n(t)}}function Ar(n){return function(t){return 1-n(1-t)}}function Lr(n){return function(t){return.5*(.5>t?n(2*t):2-n(2-2*t))}}function Er(n){return n*n}function Tr(n){return n*n*n}function Cr(n){if(0>=n)return 0;if(n>=1)return 1;var t=n*n,e=t*n;return 4*(.5>n?e:3*(n-t)+e-.75)}function zr(n){return function(t){return Math.pow(t,n)}}function Pr(n){return 1-Math.cos(n*Jo)}function qr(n){return Math.pow(2,10*(n-1))}function Rr(n){return 1-Math.sqrt(1-n*n)}function Or(n,t){var e;return arguments.length<2&&(t=.45),arguments.length?e=t/Vo*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*Vo/t)}}function Ur(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Dr(n){return 1/2.75>n?7.5625*n*n:2/2.75>n?7.5625*(n-=1.5/2.75)*n+.75:2.5/2.75>n?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Fr(n,t){n=ho.hcl(n),t=ho.hcl(t);var e=n.h,r=n.c,i=n.l,a=t.h-e,o=t.c-r,u=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(a)?(a=0,e=isNaN(e)?t.h:e):a>180?a-=360:-180>a&&(a+=360),function(n){return vn(e+a*n,r+o*n,i+u*n)+""}}function jr(n,t){n=ho.hsl(n),t=ho.hsl(t);var e=n.h,r=n.s,i=n.l,a=t.h-e,o=t.s-r,u=t.l-i;return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(a)?(a=0,e=isNaN(e)?t.h:e):a>180?a-=360:-180>a&&(a+=360),function(n){return gn(e+a*n,r+o*n,i+u*n)+""}}function Ir(n,t){n=ho.lab(n),t=ho.lab(t);var e=n.l,r=n.a,i=n.b,a=t.l-e,o=t.a-r,u=t.b-i;return function(n){return yn(e+a*n,r+o*n,i+u*n)+""}}function Br(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function Hr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Yr(t),i=Vr(t,e),a=Yr(Jr(e,t,-i))||0;t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Zo,this.translate=[n.e,n.f],this.scale=[r,a],this.skew=a?Math.atan2(i,a)*Zo:0}function Vr(n,t){return n[0]*t[0]+n[1]*t[1]}function Yr(n){var t=Math.sqrt(Vr(n,n));return t&&(n[0]/=t,n[1]/=t),t}function Jr(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Gr(n){return n.length?n.pop()+",":""}function Zr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")");r.push({i:i-4,x:br(n[0],t[0])},{i:i-2,x:br(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Xr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Gr(e)+"rotate(",null,")")-2,x:br(n,t)})):t&&e.push(Gr(e)+"rotate("+t+")")}function Wr(n,t,e,r){n!==t?r.push({i:e.push(Gr(e)+"skewX(",null,")")-2,x:br(n,t)}):t&&e.push(Gr(e)+"skewX("+t+")")}function $r(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Gr(e)+"scale(",null,",",null,")");r.push({i:i-4,x:br(n[0],t[0])},{i:i-2,x:br(n[1],t[1])})}else(1!==t[0]||1!==t[1])&&e.push(Gr(e)+"scale("+t+")")}function Kr(n,t){var e=[],r=[];return n=ho.transform(n),t=ho.transform(t),Zr(n.translate,t.translate,e,r),Xr(n.rotate,t.rotate,e,r),Wr(n.skew,t.skew,e,r),$r(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,a=r.length;++i<a;)e[(t=r[i]).i]=t.x(n);return e.join("")}}function Qr(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function ni(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function ti(n){for(var t=n.source,e=n.target,r=ri(t,e),i=[t];t!==r;)t=t.parent,i.push(t);for(var a=i.length;e!==r;)i.splice(a,0,e),e=e.parent;return i}function ei(n){for(var t=[],e=n.parent;null!=e;)t.push(n),n=e,e=e.parent;return t.push(n),t}function ri(n,t){if(n===t)return n;for(var e=ei(n),r=ei(t),i=e.pop(),a=r.pop(),o=null;i===a;)o=i,i=e.pop(),a=r.pop();return o}function ii(n){n.fixed|=2}function ai(n){n.fixed&=-7}function oi(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ui(n){n.fixed&=-5}function si(n,t,e){var r=0,i=0;if(n.charge=0,!n.leaf)for(var a,o=n.nodes,u=o.length,s=-1;++s<u;)a=o[s],null!=a&&(si(a,t,e),n.charge+=a.charge,r+=a.charge*a.cx,i+=a.charge*a.cy);if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5);var l=t*e[n.point.index];n.charge+=n.pointCharge=l,r+=l*n.point.x,i+=l*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function li(n,t){return ho.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=di,n}function ci(n,t){for(var e=[n];null!=(n=e.pop());)if(t(n),(i=n.children)&&(r=i.length))for(var r,i;--r>=0;)e.push(i[r])}function fi(n,t){for(var e=[n],r=[];null!=(n=e.pop());)if(r.push(n),(a=n.children)&&(i=a.length))for(var i,a,o=-1;++o<i;)e.push(a[o]);for(;null!=(n=r.pop());)t(n)}function hi(n){return n.children}function pi(n){return n.value}function gi(n,t){return t.value-n.value}function di(n){return ho.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function vi(n){return n.x}function mi(n){return n.y}function yi(n,t,e){n.y0=t,n.y=e}function xi(n){return ho.range(n.length)}function ki(n){for(var t=-1,e=n[0].length,r=[];++t<e;)r[t]=0;return r}function Mi(n){for(var t,e=1,r=0,i=n[0][1],a=n.length;a>e;++e)(t=n[e][1])>i&&(r=e,i=t);return r}function bi(n){return n.reduce(wi,0)}function wi(n,t){return n+t[1]}function _i(n,t){return Ni(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function Ni(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,a=[];++e<=t;)a[e]=i*e+r;return a}function Si(n){return[ho.min(n),ho.max(n)]}function Ai(n,t){return n.value-t.value}function Li(n,t){var e=n._pack_next;n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Ei(n,t){n._pack_next=t,t._pack_prev=n}function Ti(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r;return.999*i*i>e*e+r*r}function Ci(n){function t(n){c=Math.min(n.x-n.r,c),f=Math.max(n.x+n.r,f),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(l=e.length)){var e,r,i,a,o,u,s,l,c=1/0,f=-(1/0),h=1/0,p=-(1/0);if(e.forEach(zi),r=e[0],r.x=-r.r,r.y=0,t(r),l>1&&(i=e[1],i.x=i.r,i.y=0,t(i),l>2))for(a=e[2],Ri(r,i,a),t(a),Li(r,a),r._pack_prev=a,Li(a,i),i=r._pack_next,o=3;l>o;o++){Ri(r,i,a=e[o]);var g=0,d=1,v=1;for(u=i._pack_next;u!==i;u=u._pack_next,d++)if(Ti(u,a)){g=1;break}if(1==g)for(s=r._pack_prev;s!==u._pack_prev&&!Ti(s,a);s=s._pack_prev,v++);g?(v>d||d==v&&i.r<r.r?Ei(r,i=u):Ei(r=s,i),o--):(Li(r,a),i=a,t(a))}var m=(c+f)/2,y=(h+p)/2,x=0;for(o=0;l>o;o++)a=e[o],a.x-=m,a.y-=y,x=Math.max(x,a.r+Math.sqrt(a.x*a.x+a.y*a.y));n.r=x,e.forEach(Pi)}}function zi(n){n._pack_next=n._pack_prev=n}function Pi(n){delete n._pack_next,delete n._pack_prev}function qi(n,t,e,r){var i=n.children;if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var a=-1,o=i.length;++a<o;)qi(i[a],t,e,r)}function Ri(n,t,e){var r=n.r+e.r,i=t.x-n.x,a=t.y-n.y;if(r&&(i||a)){var o=t.r+e.r,u=i*i+a*a;o*=o,r*=r;var s=.5+(r-o)/(2*u),l=Math.sqrt(Math.max(0,2*o*(r+u)-(r-=u)*r-o*o))/(2*u);e.x=n.x+s*i+l*a,e.y=n.y+s*a-l*i}else e.x=n.x+r,e.y=n.y}function Oi(n,t){return n.parent==t.parent?1:2}function Ui(n){var t=n.children;return t.length?t[0]:n.t}function Di(n){var t,e=n.children;return(t=e.length)?e[t-1]:n.t}function Fi(n,t,e){var r=e/(t.i-n.i);t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function ji(n){for(var t,e=0,r=0,i=n.children,a=i.length;--a>=0;)t=i[a],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Ii(n,t,e){return n.a.parent===t.parent?n.a:e}function Bi(n){return 1+ho.max(n,function(n){return n.y})}function Hi(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Vi(n){var t=n.children;return t&&t.length?Vi(t[0]):n}function Yi(n){var t,e=n.children;return e&&(t=e.length)?Yi(e[t-1]):n}function Ji(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Gi(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],a=n.dy-t[0]-t[2];return 0>i&&(e+=i/2,i=0),0>a&&(r+=a/2,a=0),{x:e,y:r,dx:i,dy:a}}function Zi(n){var t=n[0],e=n[n.length-1];return e>t?[t,e]:[e,t]}function Xi(n){return n.rangeExtent?n.rangeExtent():Zi(n.range())}function Wi(n,t,e,r){var i=e(n[0],n[1]),a=r(t[0],t[1]);return function(n){return a(i(n))}}function $i(n,t){var e,r=0,i=n.length-1,a=n[r],o=n[i];return a>o&&(e=r,r=i,i=e,e=a,a=o,o=e),n[r]=t.floor(a),n[i]=t.ceil(o),n}function Ki(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:Ls}function Qi(n,t,e,r){var i=[],a=[],o=0,u=Math.min(n.length,t.length)-1;for(n[u]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++o<=u;)i.push(e(n[o-1],n[o])),a.push(r(t[o-1],t[o]));return function(t){var e=ho.bisect(n,t,1,u)-1;return a[e](i[e](t))}}function na(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Qi:Wi,s=r?ni:Qr;return o=i(n,t,s,e),u=i(t,n,s,_r),a}function a(n){return o(n)}var o,u;return a.invert=function(n){return u(n)},a.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},a.range=function(n){return arguments.length?(t=n,i()):t},a.rangeRound=function(n){return a.range(n).interpolate(Br)},a.clamp=function(n){return arguments.length?(r=n,i()):r},a.interpolate=function(n){return arguments.length?(e=n,i()):e},a.ticks=function(t){return ia(n,t)},a.tickFormat=function(t,e){return aa(n,t,e)},a.nice=function(t){return ea(n,t),i()},a.copy=function(){return na(n,t,e,r)},i()}function ta(n,t){return ho.rebind(n,t,"range","rangeRound","interpolate","clamp")}function ea(n,t){return $i(n,Ki(ra(n,t)[2])),$i(n,Ki(ra(n,t)[2])),n}function ra(n,t){null==t&&(t=10);var e=Zi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),a=t/r*i;return.15>=a?i*=10:.35>=a?i*=5:.75>=a&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function ia(n,t){return ho.range.apply(ho,ra(n,t))}function aa(n,t,e){var r=ra(n,t);if(e){var i=vu.exec(e);if(i.shift(),"s"===i[8]){var a=ho.formatPrefix(Math.max(No(r[0]),No(r[1])));return i[7]||(i[7]="."+oa(a.scale(r[2]))),i[8]="f",e=ho.format(i.join("")),function(n){return e(a.scale(n))+a.symbol}}i[7]||(i[7]="."+ua(i[8],r)),e=i.join("")}else e=",."+oa(r[2])+"f";return ho.format(e)}function oa(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function ua(n,t){var e=oa(t[2]);return n in Es?Math.abs(e-oa(Math.max(No(t[0]),No(t[1]))))+ +("e"!==n):e-2*("%"===n)}function sa(n,t,e,r){function i(n){return(e?Math.log(0>n?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function a(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return a(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=$i(r.map(i),e?Math:Cs);return n.domain(t),r=t.map(a),o},o.ticks=function(){var n=Zi(r),o=[],u=n[0],s=n[1],l=Math.floor(i(u)),c=Math.ceil(i(s)),f=t%1?2:t;if(isFinite(c-l)){if(e){for(;c>l;l++)for(var h=1;f>h;h++)o.push(a(l)*h);o.push(a(l))}else for(o.push(a(l));l++<c;)for(var h=f-1;h>0;h--)o.push(a(l)*h);for(l=0;o[l]<u;l++);for(c=o.length;o[c-1]>s;c--);o=o.slice(l,c)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Ts;arguments.length<2?e=Ts:"function"!=typeof e&&(e=ho.format(e));var r=Math.max(1,t*n/o.ticks().length);return function(n){var o=n/a(Math.round(i(n)));return t-.5>o*t&&(o*=t),r>=o?e(n):""}},o.copy=function(){return sa(n.copy(),t,e,r)},ta(o,n)}function la(n,t,e){function r(t){return n(i(t))}var i=ca(t),a=ca(1/t);return r.invert=function(t){return a(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return ia(e,n)},r.tickFormat=function(n,t){return aa(e,n,t)},r.nice=function(n){return r.domain(ea(e,n))},r.exponent=function(o){return arguments.length?(i=ca(t=o),a=ca(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return la(n.copy(),t,e)},ta(r,n)}function ca(n){return function(t){return 0>t?-Math.pow(-t,n):Math.pow(t,n)}}function fa(n,t){function e(e){return a[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%a.length]}function r(t,e){return ho.range(n.length).map(function(n){return t+e*n})}var i,a,o;return e.domain=function(r){if(!arguments.length)return n;n=[],i=new g;for(var a,o=-1,u=r.length;++o<u;)i.has(a=r[o])||i.set(a,n.push(a));return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(a=n,o=0,t={t:"range",a:arguments},e):a},e.rangePoints=function(i,u){arguments.length<2&&(u=0);var s=i[0],l=i[1],c=n.length<2?(s=(s+l)/2,0):(l-s)/(n.length-1+u);return a=r(s+c*u/2,c),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,u){arguments.length<2&&(u=0);var s=i[0],l=i[1],c=n.length<2?(s=l=Math.round((s+l)/2),0):(l-s)/(n.length-1+u)|0;return a=r(s+Math.round(c*u/2+(l-s-(n.length-1+u)*c)/2),c),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,u,s){arguments.length<2&&(u=0),arguments.length<3&&(s=u);var l=i[1]<i[0],c=i[l-0],f=i[1-l],h=(f-c)/(n.length-u+2*s);return a=r(c+h*s,h),l&&a.reverse(),o=h*(1-u),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,u,s){arguments.length<2&&(u=0),arguments.length<3&&(s=u);var l=i[1]<i[0],c=i[l-0],f=i[1-l],h=Math.floor((f-c)/(n.length-u+2*s));return a=r(c+Math.round((f-c-(n.length-u)*h)/2),h),l&&a.reverse(),o=Math.round(h*(1-u)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Zi(t.a[0])},e.copy=function(){return fa(n,t)},e.domain(n)}function ha(n,t){function e(){var e=0,a=t.length;for(i=[];++e<a;)i[e-1]=ho.quantile(n,e/a);return r}function r(n){return isNaN(n=+n)?void 0:t[ho.bisect(i,n)]}var i;return r.domain=function(t){return arguments.length?(n=t.map(s).filter(l).sort(u),e()):n},r.range=function(n){return arguments.length?(t=n,e()):t},r.quantiles=function(){return i},r.invertExtent=function(e){return e=t.indexOf(e),0>e?[NaN,NaN]:[e>0?i[e-1]:n[0],e<i.length?i[e]:n[n.length-1]]},r.copy=function(){return ha(n,t)},e()}function pa(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(a*(t-n))))]}function i(){return a=e.length/(t-n),o=e.length-1,r}var a,o;return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=0>t?NaN:t/a+n,[t,t+1/a]},r.copy=function(){return pa(n,t,e)},i()}function ga(n,t){function e(e){return e>=e?t[ho.bisect(n,e)]:void 0}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return ga(n,t)},e}function da(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return ia(n,t)},t.tickFormat=function(t,e){return aa(n,t,e)},t.copy=function(){return da(n)},t}function va(){return 0}function ma(n){return n.innerRadius}function ya(n){return n.outerRadius}function xa(n){return n.startAngle}function ka(n){return n.endAngle}function Ma(n){return n&&n.padAngle}function ba(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function wa(n,t,e,r,i){var a=n[0]-t[0],o=n[1]-t[1],u=(i?r:-r)/Math.sqrt(a*a+o*o),s=u*o,l=-u*a,c=n[0]+s,f=n[1]+l,h=t[0]+s,p=t[1]+l,g=(c+h)/2,d=(f+p)/2,v=h-c,m=p-f,y=v*v+m*m,x=e-r,k=c*p-h*f,M=(0>m?-1:1)*Math.sqrt(Math.max(0,x*x*y-k*k)),b=(k*m-v*M)/y,w=(-k*v-m*M)/y,_=(k*m+v*M)/y,N=(-k*v+m*M)/y,S=b-g,A=w-d,L=_-g,E=N-d;return S*S+A*A>L*L+E*E&&(b=_,w=N),[[b-s,w-l],[b*e/x,w*e/x]]}function _a(n){function t(t){function o(){l.push("M",a(n(c),u))}for(var s,l=[],c=[],f=-1,h=t.length,p=zn(e),g=zn(r);++f<h;)i.call(this,s=t[f],f)?c.push([+p.call(this,s,f),+g.call(this,s,f)]):c.length&&(o(),c=[]);return c.length&&o(),l.length?l.join(""):null}var e=qe,r=Re,i=Rt,a=Na,o=a.key,u=.7;return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?a=n:(a=Us.get(n)||Na).key,t):o},t.tension=function(n){return arguments.length?(u=n,t):u},t}function Na(n){return n.length>1?n.join("L"):n+"Z"}function Sa(n){return n.join("L")+"Z"}function Aa(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1]);return e>1&&i.push("H",r[0]),i.join("")}function La(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("V",(r=n[t])[1],"H",r[0]);return i.join("")}function Ea(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]];++t<e;)i.push("H",(r=n[t])[0],"V",r[1]);return i.join("")}function Ta(n,t){return n.length<4?Na(n):n[1]+Pa(n.slice(1,-1),qa(n,t))}function Ca(n,t){return n.length<3?Sa(n):n[0]+Pa((n.push(n[0]),n),qa([n[n.length-2]].concat(n,[n[1]]),t))}function za(n,t){return n.length<3?Na(n):n[0]+Pa(n,qa(n,t))}function Pa(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return Na(n);var e=n.length!=t.length,r="",i=n[0],a=n[1],o=t[0],u=o,s=1;if(e&&(r+="Q"+(a[0]-2*o[0]/3)+","+(a[1]-2*o[1]/3)+","+a[0]+","+a[1],i=n[1],s=2),t.length>1){u=t[1],a=n[s],s++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(a[0]-u[0])+","+(a[1]-u[1])+","+a[0]+","+a[1];for(var l=2;l<t.length;l++,s++)a=n[s],u=t[l],r+="S"+(a[0]-u[0])+","+(a[1]-u[1])+","+a[0]+","+a[1]}if(e){var c=n[s];r+="Q"+(a[0]+2*u[0]/3)+","+(a[1]+2*u[1]/3)+","+c[0]+","+c[1]}return r}function qa(n,t){for(var e,r=[],i=(1-t)/2,a=n[0],o=n[1],u=1,s=n.length;++u<s;)e=a,a=o,o=n[u],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])]);return r}function Ra(n){if(n.length<3)return Na(n);var t=1,e=n.length,r=n[0],i=r[0],a=r[1],o=[i,i,i,(r=n[1])[0]],u=[a,a,a,r[1]],s=[i,",",a,"L",Fa(js,o),",",Fa(js,u)];for(n.push(n[e-1]);++t<=e;)r=n[t],o.shift(),o.push(r[0]),u.shift(),u.push(r[1]),ja(s,o,u);return n.pop(),s.push("L",r),s.join("")}function Oa(n){if(n.length<4)return Na(n);for(var t,e=[],r=-1,i=n.length,a=[0],o=[0];++r<3;)t=n[r],a.push(t[0]),o.push(t[1]);for(e.push(Fa(js,a)+","+Fa(js,o)),--r;++r<i;)t=n[r],a.shift(),a.push(t[0]),o.shift(),o.push(t[1]),ja(e,a,o);return e.join("")}function Ua(n){for(var t,e,r=-1,i=n.length,a=i+4,o=[],u=[];++r<4;)e=n[r%i],o.push(e[0]),u.push(e[1]);for(t=[Fa(js,o),",",Fa(js,u)],--r;++r<a;)e=n[r%i],o.shift(),o.push(e[0]),u.shift(),u.push(e[1]),ja(t,o,u);return t.join("")}function Da(n,t){var e=n.length-1;if(e)for(var r,i,a=n[0][0],o=n[0][1],u=n[e][0]-a,s=n[e][1]-o,l=-1;++l<=e;)r=n[l],i=l/e,r[0]=t*r[0]+(1-t)*(a+i*u),r[1]=t*r[1]+(1-t)*(o+i*s);return Ra(n)}function Fa(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function ja(n,t,e){n.push("C",Fa(Ds,t),",",Fa(Ds,e),",",Fa(Fs,t),",",Fa(Fs,e),",",Fa(js,t),",",Fa(js,e))}function Ia(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Ba(n){for(var t=0,e=n.length-1,r=[],i=n[0],a=n[1],o=r[0]=Ia(i,a);++t<e;)r[t]=(o+(o=Ia(i=a,a=n[t+1])))/2;return r[t]=o,r}function Ha(n){for(var t,e,r,i,a=[],o=Ba(n),u=-1,s=n.length-1;++u<s;)t=Ia(n[u],n[u+1]),No(t)<Io?o[u]=o[u+1]=0:(e=o[u]/t,r=o[u+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[u]=i*e,o[u+1]=i*r));for(u=-1;++u<=s;)i=(n[Math.min(s,u+1)][0]-n[Math.max(0,u-1)][0])/(6*(1+o[u]*o[u])),a.push([i||0,o[u]*i||0]);return a}function Va(n){return n.length<3?Na(n):n[0]+Pa(n,Ha(n))}function Ya(n){for(var t,e,r,i=-1,a=n.length;++i<a;)t=n[i],e=t[0],r=t[1]-Jo,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r);return n}function Ja(n){function t(t){function s(){d.push("M",u(n(m),f),c,l(n(v.reverse()),f),"Z")}for(var h,p,g,d=[],v=[],m=[],y=-1,x=t.length,k=zn(e),M=zn(i),b=e===r?function(){return p}:zn(r),w=i===a?function(){return g}:zn(a);++y<x;)o.call(this,h=t[y],y)?(v.push([p=+k.call(this,h,y),g=+M.call(this,h,y)]),m.push([+b.call(this,h,y),+w.call(this,h,y)])):v.length&&(s(),v=[],m=[]);return v.length&&s(),d.length?d.join(""):null}var e=qe,r=qe,i=0,a=Re,o=Rt,u=Na,s=u.key,l=u,c="L",f=.7;return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=a=n,t):a},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(a=n,t):a},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(s="function"==typeof n?u=n:(u=Us.get(n)||Na).key,l=u.reverse||u,c=u.closed?"M":"L",t):s},t.tension=function(n){return arguments.length?(f=n,t):f},t}function Ga(n){return n.radius}function Za(n){return[n.x,n.y]}function Xa(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Jo;return[e*Math.cos(r),e*Math.sin(r)]}}function Wa(){return 64}function $a(){return"circle"}function Ka(n){var t=Math.sqrt(n/Ho);return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Qa(n){return function(){var t,e,r;(t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function no(n,t,e){return To(n,Gs),n.namespace=t,n.id=e,n}function to(n,t,e,r){var i=n.id,a=n.namespace;return Z(n,"function"==typeof e?function(n,o,u){n[a][i].tween.set(t,r(e.call(n,n.__data__,o,u)))}:(e=r(e),function(n){n[a][i].tween.set(t,e)}))}function eo(n){return null==n&&(n=""),function(){this.textContent=n}}function ro(n){return null==n?"__transition__":"__transition_"+n+"__"}function io(n,t,e,r,i){function a(n){var t=d.delay;return l.t=t+s,n>=t?o(n-t):void(l.c=o)}function o(e){var i=p.active,a=p[i];a&&(a.timer.c=null,a.timer.t=NaN,--p.count,delete p[i],a.event&&a.event.interrupt.call(n,n.__data__,a.index));for(var o in p)if(r>+o){var g=p[o];g.timer.c=null,g.timer.t=NaN,--p.count,delete p[o]}l.c=u,Un(function(){return l.c&&u(e||1)&&(l.c=null,l.t=NaN),1},0,s),p.active=r,d.event&&d.event.start.call(n,n.__data__,t),h=[],d.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&h.push(r)}),f=d.ease,c=d.duration}function u(i){for(var a=i/c,o=f(a),u=h.length;u>0;)h[--u].call(n,o);return a>=1?(d.event&&d.event.end.call(n,n.__data__,t),--p.count?delete p[r]:delete n[e],1):void 0}var s,l,c,f,h,p=n[e]||(n[e]={active:0,count:0}),d=p[r];d||(s=i.time,l=Un(a,0,s),d=p[r]={tween:new g,time:s,timer:l,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++p.count)}function ao(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate("+(isFinite(r)?r:e(n))+",0)"})}function oo(n,t,e){n.attr("transform",function(n){var r=t(n);return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function uo(n){return n.toISOString()}function so(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,a=ho.bisect(el,i);return a==el.length?[t.year,ra(n.map(function(n){return n/31536e6}),e)[2]]:a?t[i/el[a-1]<el[a]/i?a-1:a]:[al,ra(n,e)[2]]}return r.invert=function(t){return lo(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(lo)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,lo(+e+1),t).length}var a=r.domain(),o=Zi(a),u=null==n?i(o,10):"number"==typeof n&&i(o,n);return u&&(n=u[0],t=u[1]),r.domain($i(a,t>1?{floor:function(t){for(;e(t=n.floor(t));)t=lo(t-1);return t},ceil:function(t){for(;e(t=n.ceil(t));)t=lo(+t+1);return t}}:n))},r.ticks=function(n,t){var e=Zi(r.domain()),a=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t];return a&&(n=a[0],t=a[1]),n.range(e[0],lo(+e[1]+1),1>t?1:t)},r.tickFormat=function(){return e},r.copy=function(){return so(n.copy(),t,e)},ta(r,n)}function lo(n){return new Date(n)}function co(n){return JSON.parse(n.responseText)}function fo(n){var t=vo.createRange();return t.selectNode(vo.body),t.createContextualFragment(n.responseText)}var ho={version:"3.5.13"},po=[].slice,go=function(n){return po.call(n)},vo=this.document;if(vo)try{go(vo.documentElement.childNodes)[0].nodeType}catch(mo){go=function(n){for(var t=n.length,e=new Array(t);t--;)e[t]=n[t];return e}}if(Date.now||(Date.now=function(){return+new Date}),vo)try{vo.createElement("DIV").style.setProperty("opacity",0,"")}catch(yo){var xo=this.Element.prototype,ko=xo.setAttribute,Mo=xo.setAttributeNS,bo=this.CSSStyleDeclaration.prototype,wo=bo.setProperty;xo.setAttribute=function(n,t){ko.call(this,n,t+"")},xo.setAttributeNS=function(n,t,e){Mo.call(this,n,t,e+"")},bo.setProperty=function(n,t,e){wo.call(this,n,t+"",e)}}ho.ascending=u,ho.descending=function(n,t){return n>t?-1:t>n?1:t>=n?0:NaN},ho.min=function(n,t){var e,r,i=-1,a=n.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<a;)null!=(r=n[i])&&e>r&&(e=r)}else{for(;++i<a;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<a;)null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ho.max=function(n,t){var e,r,i=-1,a=n.length;if(1===arguments.length){for(;++i<a;)if(null!=(r=n[i])&&r>=r){e=r;break}for(;++i<a;)null!=(r=n[i])&&r>e&&(e=r)}else{for(;++i<a;)if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r;break}for(;++i<a;)null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ho.extent=function(n,t){var e,r,i,a=-1,o=n.length;if(1===arguments.length){for(;++a<o;)if(null!=(r=n[a])&&r>=r){e=i=r;break}for(;++a<o;)null!=(r=n[a])&&(e>r&&(e=r),r>i&&(i=r))}else{for(;++a<o;)if(null!=(r=t.call(n,n[a],a))&&r>=r){e=i=r;break}for(;++a<o;)null!=(r=t.call(n,n[a],a))&&(e>r&&(e=r),r>i&&(i=r))}return[e,i]},ho.sum=function(n,t){var e,r=0,i=n.length,a=-1;if(1===arguments.length)for(;++a<i;)l(e=+n[a])&&(r+=e);else for(;++a<i;)l(e=+t.call(n,n[a],a))&&(r+=e);return r},ho.mean=function(n,t){var e,r=0,i=n.length,a=-1,o=i;if(1===arguments.length)for(;++a<i;)l(e=s(n[a]))?r+=e:--o;else for(;++a<i;)l(e=s(t.call(n,n[a],a)))?r+=e:--o;return o?r/o:void 0},ho.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],a=e-r;return a?i+a*(n[r]-i):i},ho.median=function(n,t){var e,r=[],i=n.length,a=-1;if(1===arguments.length)for(;++a<i;)l(e=s(n[a]))&&r.push(e);else for(;++a<i;)l(e=s(t.call(n,n[a],a)))&&r.push(e);return r.length?ho.quantile(r.sort(u),.5):void 0},ho.variance=function(n,t){var e,r,i=n.length,a=0,o=0,u=-1,c=0;if(1===arguments.length)for(;++u<i;)l(e=s(n[u]))&&(r=e-a,a+=r/++c,o+=r*(e-a));else for(;++u<i;)l(e=s(t.call(n,n[u],u)))&&(r=e-a,a+=r/++c,o+=r*(e-a));return c>1?o/(c-1):void 0},ho.deviation=function(){var n=ho.variance.apply(this,arguments);return n?Math.sqrt(n):n};var _o=c(u);ho.bisectLeft=_o.left,ho.bisect=ho.bisectRight=_o.right,ho.bisector=function(n){return c(1===n.length?function(t,e){return u(n(t),e)}:n)},ho.shuffle=function(n,t,e){(a=arguments.length)<3&&(e=n.length,2>a&&(t=0));for(var r,i,a=e-t;a;)i=Math.random()*a--|0,r=n[a+t],n[a+t]=n[i+t],n[i+t]=r;return n},ho.permute=function(n,t){for(var e=t.length,r=new Array(e);e--;)r[e]=n[t[e]];return r},ho.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],a=new Array(0>r?0:r);r>e;)a[e]=[t=i,i=n[++e]];
return a},ho.zip=function(){if(!(r=arguments.length))return[];for(var n=-1,t=ho.min(arguments,f),e=new Array(t);++n<t;)for(var r,i=-1,a=e[n]=new Array(r);++i<r;)a[i]=arguments[i][n];return e},ho.transpose=function(n){return ho.zip.apply(ho,n)},ho.keys=function(n){var t=[];for(var e in n)t.push(e);return t},ho.values=function(n){var t=[];for(var e in n)t.push(n[e]);return t},ho.entries=function(n){var t=[];for(var e in n)t.push({key:e,value:n[e]});return t},ho.merge=function(n){for(var t,e,r,i=n.length,a=-1,o=0;++a<i;)o+=n[a].length;for(e=new Array(o);--i>=0;)for(r=n[i],t=r.length;--t>=0;)e[--o]=r[t];return e};var No=Math.abs;ho.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range");var r,i=[],a=h(No(e)),o=-1;if(n*=a,t*=a,e*=a,0>e)for(;(r=n+e*++o)>t;)i.push(r/a);else for(;(r=n+e*++o)<t;)i.push(r/a);return i},ho.map=function(n,t){var e=new g;if(n instanceof g)n.forEach(function(n,t){e.set(n,t)});else if(Array.isArray(n)){var r,i=-1,a=n.length;if(1===arguments.length)for(;++i<a;)e.set(i,n[i]);else for(;++i<a;)e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o]);return e};var So="__proto__",Ao="\x00";p(g,{has:m,get:function(n){return this._[d(n)]},set:function(n,t){return this._[d(n)]=t},remove:y,keys:x,values:function(){var n=[];for(var t in this._)n.push(this._[t]);return n},entries:function(){var n=[];for(var t in this._)n.push({key:v(t),value:this._[t]});return n},size:k,empty:M,forEach:function(n){for(var t in this._)n.call(this,v(t),this._[t])}}),ho.nest=function(){function n(t,o,u){if(u>=a.length)return r?r.call(i,o):e?o.sort(e):o;for(var s,l,c,f,h=-1,p=o.length,d=a[u++],v=new g;++h<p;)(f=v.get(s=d(l=o[h])))?f.push(l):v.set(s,[l]);return t?(l=t(),c=function(e,r){l.set(e,n(t,r,u))}):(l={},c=function(e,r){l[e]=n(t,r,u)}),v.forEach(c),l}function t(n,e){if(e>=a.length)return n;var r=[],i=o[e++];return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},a=[],o=[];return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ho.map,e,0),0)},i.key=function(n){return a.push(n),i},i.sortKeys=function(n){return o[a.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ho.set=function(n){var t=new b;if(n)for(var e=0,r=n.length;r>e;++e)t.add(n[e]);return t},p(b,{has:m,add:function(n){return this._[d(n+="")]=!0,n},remove:y,values:x,size:k,empty:M,forEach:function(n){for(var t in this._)n.call(this,v(t))}}),ho.behavior={},ho.rebind=function(n,t){for(var e,r=1,i=arguments.length;++r<i;)n[e=arguments[r]]=_(n,t,t[e]);return n};var Lo=["webkit","ms","moz","Moz","o","O"];ho.dispatch=function(){for(var n=new A,t=-1,e=arguments.length;++t<e;)n[arguments[t]]=L(n);return n},A.prototype.on=function(n,t){var e=n.indexOf("."),r="";if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t);if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null);return this}},ho.event=null,ho.requote=function(n){return n.replace(Eo,"\\$&")};var Eo=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,To={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},Co=function(n,t){return t.querySelector(n)},zo=function(n,t){return t.querySelectorAll(n)},Po=function(n,t){var e=n.matches||n[N(n,"matchesSelector")];return(Po=function(n,t){return e.call(n,t)})(n,t)};"function"==typeof Sizzle&&(Co=function(n,t){return Sizzle(n,t)[0]||null},zo=Sizzle,Po=Sizzle.matchesSelector),ho.selection=function(){return ho.select(vo.documentElement)};var qo=ho.selection.prototype=[];qo.select=function(n){var t,e,r,i,a=[];n=P(n);for(var o=-1,u=this.length;++o<u;){a.push(t=[]),t.parentNode=(r=this[o]).parentNode;for(var s=-1,l=r.length;++s<l;)(i=r[s])?(t.push(e=n.call(i,i.__data__,s,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return z(a)},qo.selectAll=function(n){var t,e,r=[];n=q(n);for(var i=-1,a=this.length;++i<a;)for(var o=this[i],u=-1,s=o.length;++u<s;)(e=o[u])&&(r.push(t=go(n.call(e,e.__data__,u,i))),t.parentNode=e);return z(r)};var Ro={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};ho.ns={prefix:Ro,qualify:function(n){var t=n.indexOf(":"),e=n;return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Ro.hasOwnProperty(e)?{space:Ro[e],local:n}:n}},qo.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node();return n=ho.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(R(t,n[t]));return this}return this.each(R(n,t))},qo.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=D(n)).length,i=-1;if(t=e.classList){for(;++i<r;)if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class");++i<r;)if(!U(n[i]).test(t))return!1;return!0}for(t in n)this.each(F(t,n[t]));return this}return this.each(F(n,t))},qo.style=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t="");for(e in n)this.each(I(e,n[e],t));return this}if(2>r){var i=this.node();return o(i).getComputedStyle(i,null).getPropertyValue(n)}e=""}return this.each(I(n,t,e))},qo.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n];for(t in n)this.each(B(t,n[t]));return this}return this.each(B(n,t))},qo.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},qo.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments);this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},qo.append=function(n){return n=H(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},qo.insert=function(n,t){return n=H(n),t=P(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},qo.remove=function(){return this.each(V)},qo.data=function(n,t){function e(n,e){var r,i,a,o=n.length,c=e.length,f=Math.min(o,c),h=new Array(c),p=new Array(c),d=new Array(o);if(t){var v,m=new g,y=new Array(o);for(r=-1;++r<o;)(i=n[r])&&(m.has(v=t.call(i,i.__data__,r))?d[r]=i:m.set(v,i),y[r]=v);for(r=-1;++r<c;)(i=m.get(v=t.call(e,a=e[r],r)))?i!==!0&&(h[r]=i,i.__data__=a):p[r]=Y(a),m.set(v,!0);for(r=-1;++r<o;)r in y&&m.get(y[r])!==!0&&(d[r]=n[r])}else{for(r=-1;++r<f;)i=n[r],a=e[r],i?(i.__data__=a,h[r]=i):p[r]=Y(a);for(;c>r;++r)p[r]=Y(e[r]);for(;o>r;++r)d[r]=n[r]}p.update=h,p.parentNode=h.parentNode=d.parentNode=n.parentNode,u.push(p),s.push(h),l.push(d)}var r,i,a=-1,o=this.length;if(!arguments.length){for(n=new Array(o=(r=this[0]).length);++a<o;)(i=r[a])&&(n[a]=i.__data__);return n}var u=X([]),s=z([]),l=z([]);if("function"==typeof n)for(;++a<o;)e(r=this[a],n.call(r,r.parentNode.__data__,a));else for(;++a<o;)e(r=this[a],n);return s.enter=function(){return u},s.exit=function(){return l},s},qo.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},qo.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=J(n));for(var a=0,o=this.length;o>a;a++){i.push(t=[]),t.parentNode=(e=this[a]).parentNode;for(var u=0,s=e.length;s>u;u++)(r=e[u])&&n.call(r,r.__data__,u,a)&&t.push(r)}return z(i)},qo.order=function(){for(var n=-1,t=this.length;++n<t;)for(var e,r=this[n],i=r.length-1,a=r[i];--i>=0;)(e=r[i])&&(a&&a!==e.nextSibling&&a.parentNode.insertBefore(e,a),a=e);return this},qo.sort=function(n){n=G.apply(this,arguments);for(var t=-1,e=this.length;++t<e;)this[t].sort(n);return this.order()},qo.each=function(n){return Z(this,function(t,e,r){n.call(t,t.__data__,e,r)})},qo.call=function(n){var t=go(arguments);return n.apply(t[0]=this,t),this},qo.empty=function(){return!this.node()},qo.node=function(){for(var n=0,t=this.length;t>n;n++)for(var e=this[n],r=0,i=e.length;i>r;r++){var a=e[r];if(a)return a}return null},qo.size=function(){var n=0;return Z(this,function(){++n}),n};var Oo=[];ho.selection.enter=X,ho.selection.enter.prototype=Oo,Oo.append=qo.append,Oo.empty=qo.empty,Oo.node=qo.node,Oo.call=qo.call,Oo.size=qo.size,Oo.select=function(n){for(var t,e,r,i,a,o=[],u=-1,s=this.length;++u<s;){r=(i=this[u]).update,o.push(t=[]),t.parentNode=i.parentNode;for(var l=-1,c=i.length;++l<c;)(a=i[l])?(t.push(r[l]=e=n.call(i.parentNode,a.__data__,l,u)),e.__data__=a.__data__):t.push(null)}return z(o)},Oo.insert=function(n,t){return arguments.length<2&&(t=W(this)),qo.insert.call(this,n,t)},ho.select=function(n){var t;return"string"==typeof n?(t=[Co(n,vo)],t.parentNode=vo.documentElement):(t=[n],t.parentNode=a(n)),z([t])},ho.selectAll=function(n){var t;return"string"==typeof n?(t=go(zo(n,vo)),t.parentNode=vo.documentElement):(t=go(n),t.parentNode=null),z([t])},qo.on=function(n,t,e){var r=arguments.length;if(3>r){if("string"!=typeof n){2>r&&(t=!1);for(e in n)this.each($(e,n[e],t));return this}if(2>r)return(r=this.node()["__on"+n])&&r._;e=!1}return this.each($(n,t,e))};var Uo=ho.map({mouseenter:"mouseover",mouseleave:"mouseout"});vo&&Uo.forEach(function(n){"on"+n in vo&&Uo.remove(n)});var Do,Fo=0;ho.mouse=function(n){return tn(n,T())};var jo=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0;ho.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=T().changedTouches),t)for(var r,i=0,a=t.length;a>i;++i)if((r=t[i]).identifier===e)return tn(n,r)},ho.behavior.drag=function(){function n(){this.on("mousedown.drag",i).on("touchstart.drag",a)}function t(n,t,i,a,o){return function(){function u(){var n,e,r=t(h,d);r&&(n=r[0]-x[0],e=r[1]-x[1],g|=n|e,x=r,p({type:"drag",x:r[0]+l[0],y:r[1]+l[1],dx:n,dy:e}))}function s(){t(h,d)&&(m.on(a+v,null).on(o+v,null),y(g),p({type:"dragend"}))}var l,c=this,f=ho.event.target,h=c.parentNode,p=e.of(c,arguments),g=0,d=n(),v=".drag"+(null==d?"":"-"+d),m=ho.select(i(f)).on(a+v,u).on(o+v,s),y=nn(f),x=t(h,d);r?(l=r.apply(c,arguments),l=[l.x-x[0],l.y-x[1]]):l=[0,0],p({type:"dragstart"})}}var e=C(n,"drag","dragstart","dragend"),r=null,i=t(S,ho.mouse,o,"mousemove","mouseup"),a=t(en,ho.touch,w,"touchmove","touchend");return n.origin=function(t){return arguments.length?(r=t,n):r},ho.rebind(n,e,"on")},ho.touches=function(n,t){return arguments.length<2&&(t=T().touches),t?go(t).map(function(t){var e=tn(n,t);return e.identifier=t.identifier,e}):[]};var Io=1e-6,Bo=Io*Io,Ho=Math.PI,Vo=2*Ho,Yo=Vo-Io,Jo=Ho/2,Go=Ho/180,Zo=180/Ho,Xo=Math.SQRT2,Wo=2,$o=4;ho.interpolateZoom=function(n,t){var e,r,i=n[0],a=n[1],o=n[2],u=t[0],s=t[1],l=t[2],c=u-i,f=s-a,h=c*c+f*f;if(Bo>h)r=Math.log(l/o)/Xo,e=function(n){return[i+n*c,a+n*f,o*Math.exp(Xo*n*r)]};else{var p=Math.sqrt(h),g=(l*l-o*o+$o*h)/(2*o*Wo*p),d=(l*l-o*o-$o*h)/(2*l*Wo*p),v=Math.log(Math.sqrt(g*g+1)-g),m=Math.log(Math.sqrt(d*d+1)-d);r=(m-v)/Xo,e=function(n){var t=n*r,e=ln(v),u=o/(Wo*p)*(e*cn(Xo*t+v)-sn(v));return[i+u*c,a+u*f,o*e/ln(Xo*t+v)]}}return e.duration=1e3*r,e},ho.behavior.zoom=function(){function n(n){n.on(T,f).on(Qo+".zoom",p).on("dblclick.zoom",g).on(q,h)}function t(n){return[(n[0]-_.x)/_.k,(n[1]-_.y)/_.k]}function e(n){return[n[0]*_.k+_.x,n[1]*_.k+_.y]}function r(n){_.k=Math.max(S[0],Math.min(S[1],n))}function i(n,t){t=e(t),_.x+=n[0]-t[0],_.y+=n[1]-t[1]}function a(t,e,a,o){t.__chart__={x:_.x,y:_.y,k:_.k},r(Math.pow(2,o)),i(v=e,a),t=ho.select(t),A>0&&(t=t.transition().duration(A)),t.call(n.event)}function u(){M&&M.domain(k.range().map(function(n){return(n-_.x)/_.k}).map(k.invert)),w&&w.domain(b.range().map(function(n){return(n-_.y)/_.k}).map(b.invert))}function s(n){L++||n({type:"zoomstart"})}function l(n){u(),n({type:"zoom",scale:_.k,translate:[_.x,_.y]})}function c(n){--L||(n({type:"zoomend"}),v=null)}function f(){function n(){u=1,i(ho.mouse(r),h),l(a)}function e(){f.on(z,null).on(P,null),p(u),c(a)}var r=this,a=R.of(r,arguments),u=0,f=ho.select(o(r)).on(z,n).on(P,e),h=t(ho.mouse(r)),p=nn(r);Js.call(r),s(a)}function h(){function n(){var n=ho.touches(g);return p=_.k,n.forEach(function(n){n.identifier in v&&(v[n.identifier]=t(n))}),n}function e(){var t=ho.event.target;ho.select(t).on(k,o).on(M,u),b.push(t);for(var e=ho.event.changedTouches,r=0,i=e.length;i>r;++r)v[e[r].identifier]=null;var s=n(),l=Date.now();if(1===s.length){if(500>l-x){var c=s[0];a(g,c,v[c.identifier],Math.floor(Math.log(_.k)/Math.LN2)+1),E()}x=l}else if(s.length>1){var c=s[0],f=s[1],h=c[0]-f[0],p=c[1]-f[1];m=h*h+p*p}}function o(){var n,t,e,a,o=ho.touches(g);Js.call(g);for(var u=0,s=o.length;s>u;++u,a=null)if(e=o[u],a=v[e.identifier]){if(t)break;n=e,t=a}if(a){var c=(c=e[0]-n[0])*c+(c=e[1]-n[1])*c,f=m&&Math.sqrt(c/m);n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+a[0])/2,(t[1]+a[1])/2],r(f*p)}x=null,i(n,t),l(d)}function u(){if(ho.event.touches.length){for(var t=ho.event.changedTouches,e=0,r=t.length;r>e;++e)delete v[t[e].identifier];for(var i in v)return void n()}ho.selectAll(b).on(y,null),w.on(T,f).on(q,h),N(),c(d)}var p,g=this,d=R.of(g,arguments),v={},m=0,y=".zoom-"+ho.event.changedTouches[0].identifier,k="touchmove"+y,M="touchend"+y,b=[],w=ho.select(g),N=nn(g);e(),s(d),w.on(T,null).on(q,e)}function p(){var n=R.of(this,arguments);y?clearTimeout(y):(Js.call(this),d=t(v=m||ho.mouse(this)),s(n)),y=setTimeout(function(){y=null,c(n)},50),E(),r(Math.pow(2,.002*Ko())*_.k),i(v,d),l(n)}function g(){var n=ho.mouse(this),e=Math.log(_.k)/Math.LN2;a(this,n,t(n),ho.event.shiftKey?Math.ceil(e)-1:Math.floor(e)+1)}var d,v,m,y,x,k,M,b,w,_={x:0,y:0,k:1},N=[960,500],S=nu,A=250,L=0,T="mousedown.zoom",z="mousemove.zoom",P="mouseup.zoom",q="touchstart.zoom",R=C(n,"zoomstart","zoom","zoomend");return Qo||(Qo="onwheel"in vo?(Ko=function(){return-ho.event.deltaY*(ho.event.deltaMode?120:1)},"wheel"):"onmousewheel"in vo?(Ko=function(){return ho.event.wheelDelta},"mousewheel"):(Ko=function(){return-ho.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=R.of(this,arguments),t=_;Vs?ho.select(this).transition().each("start.zoom",function(){_=this.__chart__||{x:0,y:0,k:1},s(n)}).tween("zoom:zoom",function(){var e=N[0],r=N[1],i=v?v[0]:e/2,a=v?v[1]:r/2,o=ho.interpolateZoom([(i-_.x)/_.k,(a-_.y)/_.k,e/_.k],[(i-t.x)/t.k,(a-t.y)/t.k,e/t.k]);return function(t){var r=o(t),u=e/r[2];this.__chart__=_={x:i-r[0]*u,y:a-r[1]*u,k:u},l(n)}}).each("interrupt.zoom",function(){c(n)}).each("end.zoom",function(){c(n)}):(this.__chart__=_,s(n),l(n),c(n))})},n.translate=function(t){return arguments.length?(_={x:+t[0],y:+t[1],k:_.k},u(),n):[_.x,_.y]},n.scale=function(t){return arguments.length?(_={x:_.x,y:_.y,k:null},r(+t),u(),n):_.k},n.scaleExtent=function(t){return arguments.length?(S=null==t?nu:[+t[0],+t[1]],n):S},n.center=function(t){return arguments.length?(m=t&&[+t[0],+t[1]],n):m},n.size=function(t){return arguments.length?(N=t&&[+t[0],+t[1]],n):N},n.duration=function(t){return arguments.length?(A=+t,n):A},n.x=function(t){return arguments.length?(M=t,k=t.copy(),_={x:0,y:0,k:1},n):M},n.y=function(t){return arguments.length?(w=t,b=t.copy(),_={x:0,y:0,k:1},n):w},ho.rebind(n,R,"on")};var Ko,Qo,nu=[0,1/0];ho.color=hn,hn.prototype.toString=function(){return this.rgb()+""},ho.hsl=pn;var tu=pn.prototype=new hn;tu.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new pn(this.h,this.s,this.l/n)},tu.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new pn(this.h,this.s,n*this.l)},tu.rgb=function(){return gn(this.h,this.s,this.l)},ho.hcl=dn;var eu=dn.prototype=new hn;eu.brighter=function(n){return new dn(this.h,this.c,Math.min(100,this.l+ru*(arguments.length?n:1)))},eu.darker=function(n){return new dn(this.h,this.c,Math.max(0,this.l-ru*(arguments.length?n:1)))},eu.rgb=function(){return vn(this.h,this.c,this.l).rgb()},ho.lab=mn;var ru=18,iu=.95047,au=1,ou=1.08883,uu=mn.prototype=new hn;uu.brighter=function(n){return new mn(Math.min(100,this.l+ru*(arguments.length?n:1)),this.a,this.b)},uu.darker=function(n){return new mn(Math.max(0,this.l-ru*(arguments.length?n:1)),this.a,this.b)},uu.rgb=function(){return yn(this.l,this.a,this.b)},ho.rgb=wn;var su=wn.prototype=new hn;su.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);var t=this.r,e=this.g,r=this.b,i=30;return t||e||r?(t&&i>t&&(t=i),e&&i>e&&(e=i),r&&i>r&&(r=i),new wn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new wn(i,i,i)},su.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new wn(n*this.r,n*this.g,n*this.b)},su.hsl=function(){return Ln(this.r,this.g,this.b)},su.toString=function(){return"#"+Sn(this.r)+Sn(this.g)+Sn(this.b)};var lu=ho.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074});lu.forEach(function(n,t){lu.set(n,_n(t))}),ho.functor=zn,ho.xhr=Pn(w),ho.dsv=function(n,t){function e(n,e,a){arguments.length<3&&(a=e,e=null);var o=qn(n,t,null==e?r:i(e),a);return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function a(t){return t.map(o).join(n)}function o(n){return u.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var u=new RegExp('["'+n+"\n]"),s=n.charCodeAt(0);return e.parse=function(n,t){var r;return e.parseRows(n,function(n,e){if(r)return r(n,e-1);var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}");r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(c>=l)return o;if(i)return i=!1,a;var t=c;if(34===n.charCodeAt(t)){for(var e=t;e++<l;)if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break;++e}c=e+2;var r=n.charCodeAt(e+1);return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++c):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(;l>c;){var r=n.charCodeAt(c++),u=1;if(10===r)i=!0;else if(13===r)i=!0,10===n.charCodeAt(c)&&(++c,++u);else if(r!==s)continue;return n.slice(t,c-u)}return n.slice(t)}for(var r,i,a={},o={},u=[],l=n.length,c=0,f=0;(r=e())!==o;){for(var h=[];r!==a&&r!==o;)h.push(r),r=e();t&&null==(h=t(h,f++))||u.push(h)}return u},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t);var r=new b,i=[];return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(a).join("\n")},e},ho.csv=ho.dsv(",","text/csv"),ho.tsv=ho.dsv("	","text/tab-separated-values");var cu,fu,hu,pu,gu=this[N(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)};ho.timer=function(){Un.apply(this,arguments)},ho.timer.flush=function(){Fn(),jn()},ho.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)};var du=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(Bn);ho.formatPrefix=function(n,t){var e=0;return(n=+n)&&(0>n&&(n*=-1),t&&(n=ho.round(n,In(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),du[8+e/3]};var vu=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,mu=ho.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ho.round(n,In(n,t))).toFixed(Math.max(0,Math.min(20,In(n*(1+1e-15),t))))}}),yu=ho.time={},xu=Date;Yn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ku.setUTCDate.apply(this._,arguments)},setDay:function(){ku.setUTCDay.apply(this._,arguments)},setFullYear:function(){ku.setUTCFullYear.apply(this._,arguments)},setHours:function(){ku.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ku.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ku.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ku.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ku.setUTCSeconds.apply(this._,arguments)},setTime:function(){ku.setTime.apply(this._,arguments)}};var ku=Date.prototype;yu.year=Jn(function(n){return n=yu.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),yu.years=yu.year.range,yu.years.utc=yu.year.utc.range,yu.day=Jn(function(n){var t=new xu(2e3,0);return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),yu.days=yu.day.range,yu.days.utc=yu.day.utc.range,yu.dayOfYear=function(n){var t=yu.year(n);return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t;var e=yu[n]=Jn(function(n){return(n=yu.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=yu.year(n).getDay();return Math.floor((yu.dayOfYear(n)+(e+t)%7)/7)-(e!==t)});yu[n+"s"]=e.range,yu[n+"s"].utc=e.utc.range,yu[n+"OfYear"]=function(n){var e=yu.year(n).getDay();return Math.floor((yu.dayOfYear(n)+(e+t)%7)/7)}}),yu.week=yu.sunday,yu.weeks=yu.sunday.range,yu.weeks.utc=yu.sunday.utc.range,yu.weekOfYear=yu.sundayOfYear;var Mu={"-":"",_:" ",0:"0"},bu=/^\s*\d+/,wu=/^%/;ho.locale=function(n){return{numberFormat:Hn(n),timeFormat:Zn(n)}};var _u=ho.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});ho.format=_u.numberFormat,ho.geo={},dt.prototype={s:0,t:0,add:function(n){vt(n,this.t,Nu),vt(Nu.s,this.s,this),this.s?this.t+=Nu.t:this.s=Nu.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}};var Nu=new dt;ho.geo.stream=function(n,t){n&&Su.hasOwnProperty(n.type)?Su[n.type](n,t):mt(n,t)};var Su={Feature:function(n,t){mt(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length;++r<i;)mt(e[r].geometry,t)}},Au={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){yt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)yt(e[r],t,0)},Polygon:function(n,t){xt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length;++r<i;)xt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length;++r<i;)mt(e[r],t)}};ho.geo.area=function(n){return Lu=0,ho.geo.stream(n,Tu),Lu};var Lu,Eu=new dt,Tu={sphere:function(){Lu+=4*Ho},point:S,lineStart:S,lineEnd:S,polygonStart:function(){Eu.reset(),Tu.lineStart=kt},polygonEnd:function(){var n=2*Eu;Lu+=0>n?4*Ho+n:n,Tu.lineStart=Tu.lineEnd=Tu.point=S}};ho.geo.bounds=function(){function n(n,t){x.push(k=[c=n,h=n]),f>t&&(f=t),t>p&&(p=t)}function t(t,e){var r=Mt([t*Go,e*Go]);if(m){var i=wt(m,r),a=[i[1],-i[0],0],o=wt(a,i);St(o),o=At(o);var s=t-g,l=s>0?1:-1,d=o[0]*Zo*l,v=No(s)>180;if(v^(d>l*g&&l*t>d)){var y=o[1]*Zo;y>p&&(p=y)}else if(d=(d+360)%360-180,v^(d>l*g&&l*t>d)){var y=-o[1]*Zo;f>y&&(f=y)}else f>e&&(f=e),e>p&&(p=e);v?g>t?u(c,t)>u(c,h)&&(h=t):u(t,h)>u(c,h)&&(c=t):h>=c?(c>t&&(c=t),t>h&&(h=t)):t>g?u(c,t)>u(c,h)&&(h=t):u(t,h)>u(c,h)&&(c=t)}else n(t,e);m=r,g=t}function e(){M.point=t}function r(){k[0]=c,k[1]=h,M.point=n,m=null}function i(n,e){if(m){var r=n-g;y+=No(r)>180?r+(r>0?360:-360):r}else d=n,v=e;Tu.point(n,e),t(n,e)}function a(){Tu.lineStart()}function o(){i(d,v),Tu.lineEnd(),No(y)>Io&&(c=-(h=180)),k[0]=c,k[1]=h,m=null}function u(n,t){return(t-=n)<0?t+360:t}function s(n,t){return n[0]-t[0]}function l(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var c,f,h,p,g,d,v,m,y,x,k,M={point:n,lineStart:e,lineEnd:r,polygonStart:function(){M.point=i,M.lineStart=a,M.lineEnd=o,y=0,Tu.polygonStart()},polygonEnd:function(){Tu.polygonEnd(),M.point=n,M.lineStart=e,M.lineEnd=r,0>Eu?(c=-(h=180),f=-(p=90)):y>Io?p=90:-Io>y&&(f=-90),k[0]=c,k[1]=h}};return function(n){p=h=-(c=f=1/0),x=[],ho.geo.stream(n,M);var t=x.length;if(t){x.sort(s);for(var e,r=1,i=x[0],a=[i];t>r;++r)e=x[r],l(e[0],i)||l(e[1],i)?(u(i[0],e[1])>u(i[0],i[1])&&(i[1]=e[1]),u(e[0],i[1])>u(i[0],i[1])&&(i[0]=e[0])):a.push(i=e);for(var o,e,g=-(1/0),t=a.length-1,r=0,i=a[t];t>=r;i=e,++r)e=a[r],(o=u(i[1],e[0]))>g&&(g=o,c=e[0],h=i[1])}return x=k=null,c===1/0||f===1/0?[[NaN,NaN],[NaN,NaN]]:[[c,f],[h,p]]}}(),ho.geo.centroid=function(n){Cu=zu=Pu=qu=Ru=Ou=Uu=Du=Fu=ju=Iu=0,ho.geo.stream(n,Bu);var t=Fu,e=ju,r=Iu,i=t*t+e*e+r*r;return Bo>i&&(t=Ou,e=Uu,r=Du,Io>zu&&(t=Pu,e=qu,r=Ru),i=t*t+e*e+r*r,Bo>i)?[NaN,NaN]:[Math.atan2(e,t)*Zo,un(r/Math.sqrt(i))*Zo]};var Cu,zu,Pu,qu,Ru,Ou,Uu,Du,Fu,ju,Iu,Bu={sphere:S,point:Et,lineStart:Ct,lineEnd:zt,polygonStart:function(){Bu.lineStart=Pt},polygonEnd:function(){Bu.lineStart=Ct}},Hu=Ft(Rt,Ht,Yt,[-Ho,-Ho/2]),Vu=1e9;ho.geo.clipExtent=function(){var n,t,e,r,i,a,o={stream:function(n){return i&&(i.valid=!1),i=a(n),i.valid=!0,i},extent:function(u){return arguments.length?(a=Xt(n=+u[0][0],t=+u[0][1],e=+u[1][0],r=+u[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}};return o.extent([[0,0],[960,500]])},(ho.geo.conicEqualArea=function(){return Wt($t)}).raw=$t,ho.geo.albers=function(){return ho.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ho.geo.albersUsa=function(){function n(n){var a=n[0],o=n[1];return t=null,e(a,o),t||(r(a,o),t)||i(a,o),t}var t,e,r,i,a=ho.geo.albers(),o=ho.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),u=ho.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),s={point:function(n,e){t=[n,e]}};return n.invert=function(n){var t=a.scale(),e=a.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t;return(i>=.12&&.234>i&&r>=-.425&&-.214>r?o:i>=.166&&.234>i&&r>=-.214&&-.115>r?u:a).invert(n)},n.stream=function(n){var t=a.stream(n),e=o.stream(n),r=u.stream(n);return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(a.precision(t),o.precision(t),u.precision(t),n):a.precision()},n.scale=function(t){return arguments.length?(a.scale(t),o.scale(.35*t),u.scale(t),n.translate(a.translate())):a.scale()},n.translate=function(t){if(!arguments.length)return a.translate();var l=a.scale(),c=+t[0],f=+t[1];return e=a.translate(t).clipExtent([[c-.455*l,f-.238*l],[c+.455*l,f+.238*l]]).stream(s).point,r=o.translate([c-.307*l,f+.201*l]).clipExtent([[c-.425*l+Io,f+.12*l+Io],[c-.214*l-Io,f+.234*l-Io]]).stream(s).point,i=u.translate([c-.205*l,f+.212*l]).clipExtent([[c-.214*l+Io,f+.166*l+Io],[c-.115*l-Io,f+.234*l-Io]]).stream(s).point,n},n.scale(1070)};var Yu,Ju,Gu,Zu,Xu,Wu,$u={point:S,lineStart:S,lineEnd:S,polygonStart:function(){Ju=0,$u.lineStart=Kt},polygonEnd:function(){$u.lineStart=$u.lineEnd=$u.point=S,Yu+=No(Ju/2)}},Ku={point:Qt,lineStart:S,lineEnd:S,polygonStart:S,polygonEnd:S},Qu={point:ee,lineStart:re,lineEnd:ie,polygonStart:function(){Qu.lineStart=ae},polygonEnd:function(){Qu.point=ee,Qu.lineStart=re,Qu.lineEnd=ie}};ho.geo.path=function(){function n(n){return n&&("function"==typeof u&&a.pointRadius(+u.apply(this,arguments)),o&&o.valid||(o=i(a)),ho.geo.stream(n,o)),a.result()}function t(){return o=null,n}var e,r,i,a,o,u=4.5;return n.area=function(n){return Yu=0,ho.geo.stream(n,i($u)),Yu},n.centroid=function(n){return Pu=qu=Ru=Ou=Uu=Du=Fu=ju=Iu=0,ho.geo.stream(n,i(Qu)),Iu?[Fu/Iu,ju/Iu]:Du?[Ou/Du,Uu/Du]:Ru?[Pu/Ru,qu/Ru]:[NaN,NaN]},n.bounds=function(n){return Xu=Wu=-(Gu=Zu=1/0),ho.geo.stream(n,i(Ku)),[[Gu,Zu],[Xu,Wu]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||se(n):w,t()):e},n.context=function(n){return arguments.length?(a=null==(r=n)?new ne:new oe(n),"function"!=typeof u&&a.pointRadius(u),t()):r},n.pointRadius=function(t){return arguments.length?(u="function"==typeof t?t:(a.pointRadius(+t),+t),n):u},n.projection(ho.geo.albersUsa()).context(null)},ho.geo.transform=function(n){return{stream:function(t){var e=new le(t);for(var r in n)e[r]=n[r];return e}}},le.prototype={point:function(n,t){this.stream.point(n,t);
},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ho.geo.projection=fe,ho.geo.projectionMutator=he,(ho.geo.equirectangular=function(){return fe(ge)}).raw=ge.invert=ge,ho.geo.rotation=function(n){function t(t){return t=n(t[0]*Go,t[1]*Go),t[0]*=Zo,t[1]*=Zo,t}return n=ve(n[0]%360*Go,n[1]*Go,n.length>2?n[2]*Go:0),t.invert=function(t){return t=n.invert(t[0]*Go,t[1]*Go),t[0]*=Zo,t[1]*=Zo,t},t},de.invert=ge,ho.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=ve(-n[0]*Go,-n[1]*Go,0).invert,i=[];return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Zo,n[1]*=Zo}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6;return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ke((t=+r)*Go,i*Go),n):t},n.precision=function(r){return arguments.length?(e=ke(t*Go,(i=+r)*Go),n):i},n.angle(90)},ho.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Go,i=n[1]*Go,a=t[1]*Go,o=Math.sin(r),u=Math.cos(r),s=Math.sin(i),l=Math.cos(i),c=Math.sin(a),f=Math.cos(a);return Math.atan2(Math.sqrt((e=f*o)*e+(e=l*c-s*f*u)*e),s*c+l*f*u)},ho.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ho.range(Math.ceil(a/v)*v,i,v).map(h).concat(ho.range(Math.ceil(l/m)*m,s,m).map(p)).concat(ho.range(Math.ceil(r/g)*g,e,g).filter(function(n){return No(n%v)>Io}).map(c)).concat(ho.range(Math.ceil(u/d)*d,o,d).filter(function(n){return No(n%m)>Io}).map(f))}var e,r,i,a,o,u,s,l,c,f,h,p,g=10,d=g,v=90,m=360,y=2.5;return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(a).concat(p(s).slice(1),h(i).reverse().slice(1),p(l).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(a=+t[0][0],i=+t[1][0],l=+t[0][1],s=+t[1][1],a>i&&(t=a,a=i,i=t),l>s&&(t=l,l=s,s=t),n.precision(y)):[[a,l],[i,s]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],u=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),u>o&&(t=u,u=o,o=t),n.precision(y)):[[r,u],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(v=+t[0],m=+t[1],n):[v,m]},n.minorStep=function(t){return arguments.length?(g=+t[0],d=+t[1],n):[g,d]},n.precision=function(t){return arguments.length?(y=+t,c=be(u,o,90),f=we(r,e,y),h=be(l,s,90),p=we(a,i,y),n):y},n.majorExtent([[-180,-90+Io],[180,90-Io]]).minorExtent([[-180,-80-Io],[180,80+Io]])},ho.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=_e,i=Ne;return n.distance=function(){return ho.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ho.geo.interpolate=function(n,t){return Se(n[0]*Go,n[1]*Go,t[0]*Go,t[1]*Go)},ho.geo.length=function(n){return ns=0,ho.geo.stream(n,ts),ns};var ns,ts={sphere:S,point:S,lineStart:Ae,lineEnd:S,polygonStart:S,polygonEnd:S},es=Le(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)});(ho.geo.azimuthalEqualArea=function(){return fe(es)}).raw=es;var rs=Le(function(n){var t=Math.acos(n);return t&&t/Math.sin(t)},w);(ho.geo.azimuthalEquidistant=function(){return fe(rs)}).raw=rs,(ho.geo.conicConformal=function(){return Wt(Ee)}).raw=Ee,(ho.geo.conicEquidistant=function(){return Wt(Te)}).raw=Te;var is=Le(function(n){return 1/n},Math.atan);(ho.geo.gnomonic=function(){return fe(is)}).raw=is,Ce.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Jo]},(ho.geo.mercator=function(){return ze(Ce)}).raw=Ce;var as=Le(function(){return 1},Math.asin);(ho.geo.orthographic=function(){return fe(as)}).raw=as;var os=Le(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)});(ho.geo.stereographic=function(){return fe(os)}).raw=os,Pe.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Jo]},(ho.geo.transverseMercator=function(){var n=ze(Pe),t=n.center,e=n.rotate;return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Pe,ho.geom={},ho.geom.hull=function(n){function t(n){if(n.length<3)return[];var t,i=zn(e),a=zn(r),o=n.length,u=[],s=[];for(t=0;o>t;t++)u.push([+i.call(this,n[t],t),+a.call(this,n[t],t),t]);for(u.sort(Ue),t=0;o>t;t++)s.push([u[t][0],-u[t][1]]);var l=Oe(u),c=Oe(s),f=c[0]===l[0],h=c[c.length-1]===l[l.length-1],p=[];for(t=l.length-1;t>=0;--t)p.push(n[u[l[t]][2]]);for(t=+f;t<c.length-h;++t)p.push(n[u[c[t]][2]]);return p}var e=qe,r=Re;return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ho.geom.polygon=function(n){return To(n,us),n};var us=ho.geom.polygon.prototype=[];us.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0;++t<e;)n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1];return.5*i},us.centroid=function(n){var t,e,r=-1,i=this.length,a=0,o=0,u=this[i-1];for(arguments.length||(n=-1/(6*this.area()));++r<i;)t=u,u=this[r],e=t[0]*u[1]-u[0]*t[1],a+=(t[0]+u[0])*e,o+=(t[1]+u[1])*e;return[a*n,o*n]},us.clip=function(n){for(var t,e,r,i,a,o,u=je(n),s=-1,l=this.length-je(this),c=this[l-1];++s<l;){for(t=n.slice(),n.length=0,i=this[s],a=t[(r=t.length-u)-1],e=-1;++e<r;)o=t[e],De(o,c,i)?(De(a,c,i)||n.push(Fe(a,o,c,i)),n.push(o)):De(a,c,i)&&n.push(Fe(a,o,c,i)),a=o;u&&n.push(n[0]),c=i}return n};var ss,ls,cs,fs,hs,ps=[],gs=[];Ze.prototype.prepare=function(){for(var n,t=this.edges,e=t.length;e--;)n=t[e].edge,n.b&&n.a||t.splice(e,1);return t.sort(We),t.length},or.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},ur.prototype={insert:function(n,t){var e,r,i;if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R;n.L;)n=n.L;n.L=t}else n.R=t;e=n}else this._?(n=fr(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null);for(t.L=t.R=null,t.U=e,t.C=!0,n=t;e&&e.C;)r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(lr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,cr(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(cr(this,e),n=e,e=n.U),e.C=!1,r.C=!0,lr(this,r))),e=n.U;this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null;var t,e,r,i=n.U,a=n.L,o=n.R;if(e=a?o?fr(o):a:o,i?i.L===n?i.L=e:i.R=e:this._=e,a&&o?(r=e.C,e.C=n.C,e.L=a,a.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1);do{if(n===this._)break;if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,lr(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,cr(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,lr(this,i),n=this._;break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,cr(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,lr(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,cr(this,i),n=this._;break}t.C=!0,n=i,i=i.U}while(!n.C);n&&(n.C=!1)}}},ho.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=u[0][0],i=u[0][1],a=u[1][0],o=u[1][1];return hr(e(n),u).cells.forEach(function(e,u){var s=e.edges,l=e.site,c=t[u]=s.length?s.map(function(n){var t=n.start();return[t.x,t.y]}):l.x>=r&&l.x<=a&&l.y>=i&&l.y<=o?[[r,o],[a,o],[a,i],[r,i]]:[];c.point=n[u]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(a(n,t)/Io)*Io,y:Math.round(o(n,t)/Io)*Io,i:t}})}var r=qe,i=Re,a=r,o=i,u=ds;return n?t(n):(t.links=function(n){return hr(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[];return hr(e(n)).cells.forEach(function(e,r){for(var i,a,o=e.site,u=e.edges.sort(We),s=-1,l=u.length,c=u[l-1].edge,f=c.l===o?c.r:c.l;++s<l;)i=c,a=f,c=u[s].edge,f=c.l===o?c.r:c.l,r<a.i&&r<f.i&&gr(o,a,f)<0&&t.push([n[r],n[a.i],n[f.i]])}),t},t.x=function(n){return arguments.length?(a=zn(r=n),t):r},t.y=function(n){return arguments.length?(o=zn(i=n),t):i},t.clipExtent=function(n){return arguments.length?(u=null==n?ds:n,t):u===ds?null:u},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):u===ds?null:u&&u[1]},t)};var ds=[[-1e6,-1e6],[1e6,1e6]];ho.geom.delaunay=function(n){return ho.geom.voronoi().triangles(n)},ho.geom.quadtree=function(n,t,e,r,i){function a(n){function a(n,t,e,r,i,a,o,u){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var s=n.x,c=n.y;if(null!=s)if(No(s-e)+No(c-r)<.01)l(n,t,e,r,i,a,o,u);else{var f=n.point;n.x=n.y=n.point=null,l(n,f,s,c,i,a,o,u),l(n,t,e,r,i,a,o,u)}else n.x=e,n.y=r,n.point=t}else l(n,t,e,r,i,a,o,u)}function l(n,t,e,r,i,o,u,s){var l=.5*(i+u),c=.5*(o+s),f=e>=l,h=r>=c,p=h<<1|f;n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=mr()),f?i=l:u=l,h?o=c:s=c,a(n,t,e,r,i,o,u,s)}var c,f,h,p,g,d,v,m,y,x=zn(u),k=zn(s);if(null!=t)d=t,v=e,m=r,y=i;else if(m=y=-(d=v=1/0),f=[],h=[],g=n.length,o)for(p=0;g>p;++p)c=n[p],c.x<d&&(d=c.x),c.y<v&&(v=c.y),c.x>m&&(m=c.x),c.y>y&&(y=c.y),f.push(c.x),h.push(c.y);else for(p=0;g>p;++p){var M=+x(c=n[p],p),b=+k(c,p);d>M&&(d=M),v>b&&(v=b),M>m&&(m=M),b>y&&(y=b),f.push(M),h.push(b)}var w=m-d,_=y-v;w>_?y=v+w:m=d+_;var N=mr();if(N.add=function(n){a(N,n,+x(n,++p),+k(n,p),d,v,m,y)},N.visit=function(n){yr(n,N,d,v,m,y)},N.find=function(n){return xr(N,n[0],n[1],d,v,m,y)},p=-1,null==t){for(;++p<g;)a(N,n[p],f[p],h[p],d,v,m,y);--p}else n.forEach(N.add);return f=h=n=c=null,N}var o,u=qe,s=Re;return(o=arguments.length)?(u=dr,s=vr,3===o&&(i=e,r=t,e=t=0),a(n)):(a.x=function(n){return arguments.length?(u=n,a):u},a.y=function(n){return arguments.length?(s=n,a):s},a.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),a):null==t?null:[[t,e],[r,i]]},a.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),a):null==t?null:[r-t,i-e]},a)},ho.interpolateRgb=kr,ho.interpolateObject=Mr,ho.interpolateNumber=br,ho.interpolateString=wr;var vs=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,ms=new RegExp(vs.source,"g");ho.interpolate=_r,ho.interpolators=[function(n,t){var e=typeof t;return("string"===e?lu.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?kr:wr:t instanceof hn?kr:Array.isArray(t)?Nr:"object"===e&&isNaN(t)?Mr:br)(n,t)}],ho.interpolateArray=Nr;var ys=function(){return w},xs=ho.map({linear:ys,poly:zr,quad:function(){return Er},cubic:function(){return Tr},sin:function(){return Pr},exp:function(){return qr},circle:function(){return Rr},elastic:Or,back:Ur,bounce:function(){return Dr}}),ks=ho.map({"in":w,out:Ar,"in-out":Lr,"out-in":function(n){return Lr(Ar(n))}});ho.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in";return e=xs.get(e)||ys,r=ks.get(r)||w,Sr(r(e.apply(null,po.call(arguments,1))))},ho.interpolateHcl=Fr,ho.interpolateHsl=jr,ho.interpolateLab=Ir,ho.interpolateRound=Br,ho.transform=function(n){var t=vo.createElementNS(ho.ns.prefix.svg,"g");return(ho.transform=function(n){if(null!=n){t.setAttribute("transform",n);var e=t.transform.baseVal.consolidate()}return new Hr(e?e.matrix:Ms)})(n)},Hr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"};var Ms={a:1,b:0,c:0,d:1,e:0,f:0};ho.interpolateTransform=Kr,ho.layout={},ho.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length;++e<r;)t.push(ti(n[e]));return t}},ho.layout.chord=function(){function n(){var n,l,f,h,p,g={},d=[],v=ho.range(a),m=[];for(e=[],r=[],n=0,h=-1;++h<a;){for(l=0,p=-1;++p<a;)l+=i[h][p];d.push(l),m.push(ho.range(a)),n+=l}for(o&&v.sort(function(n,t){return o(d[n],d[t])}),u&&m.forEach(function(n,t){n.sort(function(n,e){return u(i[t][n],i[t][e])})}),n=(Vo-c*a)/n,l=0,h=-1;++h<a;){for(f=l,p=-1;++p<a;){var y=v[h],x=m[y][p],k=i[y][x],M=l,b=l+=k*n;g[y+"-"+x]={index:y,subindex:x,startAngle:M,endAngle:b,value:k}}r[y]={index:y,startAngle:f,endAngle:l,value:d[y]},l+=c}for(h=-1;++h<a;)for(p=h-1;++p<a;){var w=g[h+"-"+p],_=g[p+"-"+h];(w.value||_.value)&&e.push(w.value<_.value?{source:_,target:w}:{source:w,target:_})}s&&t()}function t(){e.sort(function(n,t){return s((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,a,o,u,s,l={},c=0;return l.matrix=function(n){return arguments.length?(a=(i=n)&&i.length,e=r=null,l):i},l.padding=function(n){return arguments.length?(c=n,e=r=null,l):c},l.sortGroups=function(n){return arguments.length?(o=n,e=r=null,l):o},l.sortSubgroups=function(n){return arguments.length?(u=n,e=null,l):u},l.sortChords=function(n){return arguments.length?(s=n,e&&t(),l):s},l.chords=function(){return e||n(),e},l.groups=function(){return r||n(),r},l},ho.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var a=t.cx-n.x,o=t.cy-n.y,u=i-e,s=a*a+o*o;if(s>u*u/m){if(d>s){var l=t.charge/s;n.px-=a*l,n.py-=o*l}return!0}if(t.point&&s&&d>s){var l=t.pointCharge/s;n.px-=a*l,n.py-=o*l}}return!t.charge}}function t(n){n.px=ho.event.x,n.py=ho.event.y,s.resume()}var e,r,i,a,o,u,s={},l=ho.dispatch("start","tick","end"),c=[1,1],f=.9,h=bs,p=ws,g=-30,d=_s,v=.1,m=.64,y=[],x=[];return s.tick=function(){if((i*=.99)<.005)return e=null,l.end({type:"end",alpha:i=0}),!0;var t,r,s,h,p,d,m,k,M,b=y.length,w=x.length;for(r=0;w>r;++r)s=x[r],h=s.source,p=s.target,k=p.x-h.x,M=p.y-h.y,(d=k*k+M*M)&&(d=i*o[r]*((d=Math.sqrt(d))-a[r])/d,k*=d,M*=d,p.x-=k*(m=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=M*m,h.x+=k*(m=1-m),h.y+=M*m);if((m=i*v)&&(k=c[0]/2,M=c[1]/2,r=-1,m))for(;++r<b;)s=y[r],s.x+=(k-s.x)*m,s.y+=(M-s.y)*m;if(g)for(si(t=ho.geom.quadtree(y),i,u),r=-1;++r<b;)(s=y[r]).fixed||t.visit(n(s));for(r=-1;++r<b;)s=y[r],s.fixed?(s.x=s.px,s.y=s.py):(s.x-=(s.px-(s.px=s.x))*f,s.y-=(s.py-(s.py=s.y))*f);l.tick({type:"tick",alpha:i})},s.nodes=function(n){return arguments.length?(y=n,s):y},s.links=function(n){return arguments.length?(x=n,s):x},s.size=function(n){return arguments.length?(c=n,s):c},s.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,s):h},s.distance=s.linkDistance,s.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,s):p},s.friction=function(n){return arguments.length?(f=+n,s):f},s.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,s):g},s.chargeDistance=function(n){return arguments.length?(d=n*n,s):Math.sqrt(d)},s.gravity=function(n){return arguments.length?(v=+n,s):v},s.theta=function(n){return arguments.length?(m=n*n,s):Math.sqrt(m)},s.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,l.end({type:"end",alpha:i=0})):n>0&&(l.start({type:"start",alpha:i=n}),e=Un(s.tick)),s):i},s.start=function(){function n(n,r){if(!e){for(e=new Array(i),s=0;i>s;++s)e[s]=[];for(s=0;l>s;++s){var a=x[s];e[a.source.index].push(a.target),e[a.target.index].push(a.source)}}for(var o,u=e[t],s=-1,c=u.length;++s<c;)if(!isNaN(o=u[s][n]))return o;return Math.random()*r}var t,e,r,i=y.length,l=x.length,f=c[0],d=c[1];for(t=0;i>t;++t)(r=y[t]).index=t,r.weight=0;for(t=0;l>t;++t)r=x[t],"number"==typeof r.source&&(r.source=y[r.source]),"number"==typeof r.target&&(r.target=y[r.target]),++r.source.weight,++r.target.weight;for(t=0;i>t;++t)r=y[t],isNaN(r.x)&&(r.x=n("x",f)),isNaN(r.y)&&(r.y=n("y",d)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y);if(a=[],"function"==typeof h)for(t=0;l>t;++t)a[t]=+h.call(this,x[t],t);else for(t=0;l>t;++t)a[t]=h;if(o=[],"function"==typeof p)for(t=0;l>t;++t)o[t]=+p.call(this,x[t],t);else for(t=0;l>t;++t)o[t]=p;if(u=[],"function"==typeof g)for(t=0;i>t;++t)u[t]=+g.call(this,y[t],t);else for(t=0;i>t;++t)u[t]=g;return s.resume()},s.resume=function(){return s.alpha(.1)},s.stop=function(){return s.alpha(0)},s.drag=function(){return r||(r=ho.behavior.drag().origin(w).on("dragstart.force",ii).on("drag.force",t).on("dragend.force",ai)),arguments.length?void this.on("mouseover.force",oi).on("mouseout.force",ui).call(r):r},ho.rebind(s,l,"on")};var bs=20,ws=1,_s=1/0;ho.layout.hierarchy=function(){function n(i){var a,o=[i],u=[];for(i.depth=0;null!=(a=o.pop());)if(u.push(a),(l=e.call(n,a,a.depth))&&(s=l.length)){for(var s,l,c;--s>=0;)o.push(c=l[s]),c.parent=a,c.depth=a.depth+1;r&&(a.value=0),a.children=l}else r&&(a.value=+r.call(n,a,a.depth)||0),delete a.children;return fi(i,function(n){var e,i;t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),u}var t=gi,e=hi,r=pi;return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ci(t,function(n){n.children&&(n.value=0)}),fi(t,function(t){var e;t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ho.layout.partition=function(){function n(t,e,r,i){var a=t.children;if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,a&&(o=a.length)){var o,u,s,l=-1;for(r=t.value?r/t.value:0;++l<o;)n(u=a[l],e,s=u.value*r,i),e+=s}}function t(n){var e=n.children,r=0;if(e&&(i=e.length))for(var i,a=-1;++a<i;)r=Math.max(r,t(e[a]));return 1+r}function e(e,a){var o=r.call(this,e,a);return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ho.layout.hierarchy(),i=[1,1];return e.size=function(n){return arguments.length?(i=n,e):i},li(e,r)},ho.layout.pie=function(){function n(o){var u,s=o.length,l=o.map(function(e,r){return+t.call(n,e,r)}),c=+("function"==typeof r?r.apply(this,arguments):r),f=("function"==typeof i?i.apply(this,arguments):i)-c,h=Math.min(Math.abs(f)/s,+("function"==typeof a?a.apply(this,arguments):a)),p=h*(0>f?-1:1),g=ho.sum(l),d=g?(f-s*p)/g:0,v=ho.range(s),m=[];return null!=e&&v.sort(e===Ns?function(n,t){return l[t]-l[n]}:function(n,t){return e(o[n],o[t])}),v.forEach(function(n){m[n]={data:o[n],value:u=l[n],startAngle:c,endAngle:c+=u*d+p,padAngle:h}}),m}var t=Number,e=Ns,r=0,i=Vo,a=0;return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(a=t,n):a},n};var Ns={};ho.layout.stack=function(){function n(u,s){if(!(h=u.length))return u;var l=u.map(function(e,r){return t.call(n,e,r)}),c=l.map(function(t){return t.map(function(t,e){return[a.call(n,t,e),o.call(n,t,e)]})}),f=e.call(n,c,s);l=ho.permute(l,f),c=ho.permute(c,f);var h,p,g,d,v=r.call(n,c,s),m=l[0].length;for(g=0;m>g;++g)for(i.call(n,l[0][g],d=v[g],c[0][g][1]),p=1;h>p;++p)i.call(n,l[p][g],d+=c[p-1][g][1],c[p][g][1]);return u}var t=w,e=xi,r=ki,i=yi,a=vi,o=mi;return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:Ss.get(t)||xi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:As.get(t)||ki,n):r},n.x=function(t){return arguments.length?(a=t,n):a},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n};var Ss=ho.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(Mi),a=n.map(bi),o=ho.range(r).sort(function(n,t){return i[n]-i[t]}),u=0,s=0,l=[],c=[];for(t=0;r>t;++t)e=o[t],s>u?(u+=a[e],l.push(e)):(s+=a[e],c.push(e));return c.reverse().concat(l)},reverse:function(n){return ho.range(n.length).reverse()},"default":xi}),As=ho.map({silhouette:function(n){var t,e,r,i=n.length,a=n[0].length,o=[],u=0,s=[];for(e=0;a>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];r>u&&(u=r),o.push(r)}for(e=0;a>e;++e)s[e]=(u-o[e])/2;return s},wiggle:function(n){var t,e,r,i,a,o,u,s,l,c=n.length,f=n[0],h=f.length,p=[];for(p[0]=s=l=0,e=1;h>e;++e){for(t=0,i=0;c>t;++t)i+=n[t][e][1];for(t=0,a=0,u=f[e][0]-f[e-1][0];c>t;++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*u);t>r;++r)o+=(n[r][e][1]-n[r][e-1][1])/u;a+=o*n[t][e][1]}p[e]=s-=i?a/i*u:0,l>s&&(l=s)}for(e=0;h>e;++e)p[e]-=l;return p},expand:function(n){var t,e,r,i=n.length,a=n[0].length,o=1/i,u=[];for(e=0;a>e;++e){for(t=0,r=0;i>t;t++)r+=n[t][e][1];if(r)for(t=0;i>t;t++)n[t][e][1]/=r;else for(t=0;i>t;t++)n[t][e][1]=o}for(e=0;a>e;++e)u[e]=0;return u},zero:ki});ho.layout.histogram=function(){function n(n,a){for(var o,u,s=[],l=n.map(e,this),c=r.call(this,l,a),f=i.call(this,c,l,a),a=-1,h=l.length,p=f.length-1,g=t?1:1/h;++a<p;)o=s[a]=[],o.dx=f[a+1]-(o.x=f[a]),o.y=0;if(p>0)for(a=-1;++a<h;)u=l[a],u>=c[0]&&u<=c[1]&&(o=s[ho.bisect(f,u,1,p)-1],o.y+=g,o.push(n[a]));return s}var t=!0,e=Number,r=Si,i=_i;return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=zn(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return Ni(n,t)}:zn(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ho.layout.pack=function(){function n(n,a){var o=e.call(this,n,a),u=o[0],s=i[0],l=i[1],c=null==t?Math.sqrt:"function"==typeof t?t:function(){return t};if(u.x=u.y=0,fi(u,function(n){n.r=+c(n.value)}),fi(u,Ci),r){var f=r*(t?1:Math.max(2*u.r/s,2*u.r/l))/2;fi(u,function(n){n.r+=f}),fi(u,Ci),fi(u,function(n){n.r-=f})}return qi(u,s/2,l/2,t?1:1/Math.max(2*u.r/s,2*u.r/l)),o}var t,e=ho.layout.hierarchy().sort(Ai),r=0,i=[1,1];return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},li(n,e)},ho.layout.tree=function(){function n(n,i){var c=o.call(this,n,i),f=c[0],h=t(f);if(fi(h,e),h.parent.m=-h.z,ci(h,r),l)ci(f,a);else{var p=f,g=f,d=f;ci(f,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>d.depth&&(d=n)});var v=u(p,g)/2-p.x,m=s[0]/(g.x+u(g,p)/2+v),y=s[1]/(d.depth||1);ci(f,function(n){n.x=(n.x+v)*m,n.y=n.depth*y})}return c}function t(n){for(var t,e={A:null,children:[n]},r=[e];null!=(t=r.pop());)for(var i,a=t.children,o=0,u=a.length;u>o;++o)r.push((a[o]=i={_:a[o],parent:t,children:(i=a[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i);return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null;if(t.length){ji(n);var a=(t[0].z+t[t.length-1].z)/2;r?(n.z=r.z+u(n._,r._),n.m=n.z-a):n.z=a}else r&&(n.z=r.z+u(n._,r._));n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,a=n,o=t,s=i.parent.children[0],l=i.m,c=a.m,f=o.m,h=s.m;o=Di(o),i=Ui(i),o&&i;)s=Ui(s),a=Di(a),a.a=n,r=o.z+f-i.z-l+u(o._,i._),r>0&&(Fi(Ii(o,n,e),n,r),l+=r,c+=r),f+=o.m,l+=i.m,h+=s.m,c+=a.m;o&&!Di(a)&&(a.t=o,a.m+=f-c),i&&!Ui(s)&&(s.t=i,s.m+=l-h,e=n)}return e}function a(n){n.x*=s[0],n.y=n.depth*s[1]}var o=ho.layout.hierarchy().sort(null).value(null),u=Oi,s=[1,1],l=null;return n.separation=function(t){return arguments.length?(u=t,n):u},n.size=function(t){return arguments.length?(l=null==(s=t)?a:null,n):l?null:s},n.nodeSize=function(t){return arguments.length?(l=null==(s=t)?null:a,n):l?s:null},li(n,o)},ho.layout.cluster=function(){function n(n,a){var o,u=t.call(this,n,a),s=u[0],l=0;fi(s,function(n){var t=n.children;t&&t.length?(n.x=Hi(t),n.y=Bi(t)):(n.x=o?l+=e(n,o):0,n.y=0,o=n)});var c=Vi(s),f=Yi(s),h=c.x-e(c,f)/2,p=f.x+e(f,c)/2;return fi(s,i?function(n){n.x=(n.x-s.x)*r[0],n.y=(s.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(s.y?n.y/s.y:1))*r[1]}),u}var t=ho.layout.hierarchy().sort(null).value(null),e=Oi,r=[1,1],i=!1;return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},li(n,t)},ho.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,a=n.length;++i<a;)r=(e=n[i]).value*(0>t?0:t),e.area=isNaN(r)||0>=r?0:r}function t(e){var a=e.children;if(a&&a.length){var o,u,s,l=f(e),c=[],h=a.slice(),g=1/0,d="slice"===p?l.dx:"dice"===p?l.dy:"slice-dice"===p?1&e.depth?l.dy:l.dx:Math.min(l.dx,l.dy);for(n(h,l.dx*l.dy/e.value),c.area=0;(s=h.length)>0;)c.push(o=h[s-1]),c.area+=o.area,"squarify"!==p||(u=r(c,d))<=g?(h.pop(),g=u):(c.area-=c.pop().area,i(c,d,l,!1),d=Math.min(l.dx,l.dy),c.length=c.area=0,g=1/0);c.length&&(i(c,d,l,!0),c.length=c.area=0),a.forEach(t)}}function e(t){var r=t.children;if(r&&r.length){var a,o=f(t),u=r.slice(),s=[];for(n(u,o.dx*o.dy/t.value),s.area=0;a=u.pop();)s.push(a),s.area+=a.area,null!=a.z&&(i(s,a.z?o.dx:o.dy,o,!u.length),s.length=s.area=0);r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,a=1/0,o=-1,u=n.length;++o<u;)(e=n[o].area)&&(a>e&&(a=e),e>i&&(i=e));return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*a*g)):1/0}function i(n,t,e,r){var i,a=-1,o=n.length,u=e.x,l=e.y,c=t?s(n.area/t):0;if(t==e.dx){for((r||c>e.dy)&&(c=e.dy);++a<o;)i=n[a],i.x=u,i.y=l,i.dy=c,u+=i.dx=Math.min(e.x+e.dx-u,c?s(i.area/c):0);i.z=!0,i.dx+=e.x+e.dx-u,e.y+=c,e.dy-=c}else{for((r||c>e.dx)&&(c=e.dx);++a<o;)i=n[a],i.x=u,i.y=l,i.dx=c,l+=i.dy=Math.min(e.y+e.dy-l,c?s(i.area/c):0);i.z=!1,i.dy+=e.y+e.dy-l,e.x+=c,e.dx-=c}}function a(r){var i=o||u(r),a=i[0];return a.x=a.y=0,a.value?(a.dx=l[0],a.dy=l[1]):a.dx=a.dy=0,o&&u.revalue(a),n([a],a.dx*a.dy/a.value),(o?e:t)(a),h&&(o=i),i}var o,u=ho.layout.hierarchy(),s=Math.round,l=[1,1],c=null,f=Ji,h=!1,p="squarify",g=.5*(1+Math.sqrt(5));return a.size=function(n){return arguments.length?(l=n,a):l},a.padding=function(n){function t(t){var e=n.call(a,t,t.depth);return null==e?Ji(t):Gi(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Gi(t,n)}if(!arguments.length)return c;var r;return f=null==(c=n)?Ji:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,a},a.round=function(n){return arguments.length?(s=n?Math.round:Number,a):s!=Number},a.sticky=function(n){return arguments.length?(h=n,o=null,a):h},a.ratio=function(n){return arguments.length?(g=n,a):g},a.mode=function(n){return arguments.length?(p=n+"",a):p},li(a,u)},ho.random={normal:function(n,t){var e=arguments.length;return 2>e&&(t=1),1>e&&(n=0),function(){var e,r,i;do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r;while(!i||i>1);return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ho.random.normal.apply(ho,arguments);return function(){return Math.exp(n())}},bates:function(n){var t=ho.random.irwinHall(n);return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0;n>e;e++)t+=Math.random();return t}}},ho.scale={};var Ls={floor:w,ceil:w};ho.scale.linear=function(){return na([0,1],[0,1],_r,!1)};var Es={s:1,g:1,p:1,r:1,e:1};ho.scale.log=function(){return sa(ho.scale.linear().domain([0,1]),10,!0,[1,10])};var Ts=ho.format(".0e"),Cs={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}};ho.scale.pow=function(){return la(ho.scale.linear(),1,[0,1])},ho.scale.sqrt=function(){return ho.scale.pow().exponent(.5)},ho.scale.ordinal=function(){return fa([],{t:"range",a:[[]]})},ho.scale.category10=function(){return ho.scale.ordinal().range(zs)},ho.scale.category20=function(){return ho.scale.ordinal().range(Ps)},ho.scale.category20b=function(){return ho.scale.ordinal().range(qs)},ho.scale.category20c=function(){return ho.scale.ordinal().range(Rs)};var zs=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(Nn),Ps=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(Nn),qs=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(Nn),Rs=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(Nn);ho.scale.quantile=function(){return ha([],[])},ho.scale.quantize=function(){return pa(0,1,[0,1])},ho.scale.threshold=function(){return ga([.5],[0,1])},ho.scale.identity=function(){return da([0,1])},ho.svg={},ho.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),l=Math.max(0,+r.apply(this,arguments)),c=o.apply(this,arguments)-Jo,f=u.apply(this,arguments)-Jo,h=Math.abs(f-c),p=c>f?0:1;if(n>l&&(g=l,l=n,n=g),h>=Yo)return t(l,p)+(n?t(n,1-p):"")+"Z";var g,d,v,m,y,x,k,M,b,w,_,N,S=0,A=0,L=[];if((m=(+s.apply(this,arguments)||0)/2)&&(v=a===Os?Math.sqrt(n*n+l*l):+a.apply(this,arguments),p||(A*=-1),l&&(A=un(v/l*Math.sin(m))),n&&(S=un(v/n*Math.sin(m)))),l){y=l*Math.cos(c+A),x=l*Math.sin(c+A),k=l*Math.cos(f-A),M=l*Math.sin(f-A);var E=Math.abs(f-c-2*A)<=Ho?0:1;if(A&&ba(y,x,k,M)===p^E){var T=(c+f)/2;y=l*Math.cos(T),x=l*Math.sin(T),k=M=null}}else y=x=0;if(n){b=n*Math.cos(f-S),w=n*Math.sin(f-S),_=n*Math.cos(c+S),N=n*Math.sin(c+S);var C=Math.abs(c-f+2*S)<=Ho?0:1;if(S&&ba(b,w,_,N)===1-p^C){var z=(c+f)/2;b=n*Math.cos(z),w=n*Math.sin(z),_=N=null}}else b=w=0;if(h>Io&&(g=Math.min(Math.abs(l-n)/2,+i.apply(this,arguments)))>.001){d=l>n^p?0:1;var P=g,q=g;if(Ho>h){var R=null==_?[b,w]:null==k?[y,x]:Fe([y,x],[_,N],[k,M],[b,w]),O=y-R[0],U=x-R[1],D=k-R[0],F=M-R[1],j=1/Math.sin(Math.acos((O*D+U*F)/(Math.sqrt(O*O+U*U)*Math.sqrt(D*D+F*F)))/2),I=Math.sqrt(R[0]*R[0]+R[1]*R[1]);q=Math.min(g,(n-I)/(j-1)),P=Math.min(g,(l-I)/(j+1))}if(null!=k){var B=wa(null==_?[b,w]:[_,N],[y,x],l,P,p),H=wa([k,M],[b,w],l,P,p);g===P?L.push("M",B[0],"A",P,",",P," 0 0,",d," ",B[1],"A",l,",",l," 0 ",1-p^ba(B[1][0],B[1][1],H[1][0],H[1][1]),",",p," ",H[1],"A",P,",",P," 0 0,",d," ",H[0]):L.push("M",B[0],"A",P,",",P," 0 1,",d," ",H[0])}else L.push("M",y,",",x);if(null!=_){var V=wa([y,x],[_,N],n,-q,p),Y=wa([b,w],null==k?[y,x]:[k,M],n,-q,p);g===q?L.push("L",Y[0],"A",q,",",q," 0 0,",d," ",Y[1],"A",n,",",n," 0 ",p^ba(Y[1][0],Y[1][1],V[1][0],V[1][1]),",",1-p," ",V[1],"A",q,",",q," 0 0,",d," ",V[0]):L.push("L",Y[0],"A",q,",",q," 0 0,",d," ",V[0])}else L.push("L",b,",",w)}else L.push("M",y,",",x),null!=k&&L.push("A",l,",",l," 0 ",E,",",p," ",k,",",M),L.push("L",b,",",w),null!=_&&L.push("A",n,",",n," 0 ",C,",",1-p," ",_,",",N);return L.push("Z"),L.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=ma,r=ya,i=va,a=Os,o=xa,u=ka,s=Ma;return n.innerRadius=function(t){return arguments.length?(e=zn(t),n):e},n.outerRadius=function(t){return arguments.length?(r=zn(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=zn(t),n):i},n.padRadius=function(t){return arguments.length?(a=t==Os?Os:zn(t),n):a},n.startAngle=function(t){return arguments.length?(o=zn(t),n):o},n.endAngle=function(t){return arguments.length?(u=zn(t),n):u},n.padAngle=function(t){return arguments.length?(s=zn(t),n):s},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +u.apply(this,arguments))/2-Jo;return[Math.cos(t)*n,Math.sin(t)*n]},n};var Os="auto";ho.svg.line=function(){return _a(w)};var Us=ho.map({linear:Na,"linear-closed":Sa,step:Aa,"step-before":La,"step-after":Ea,basis:Ra,"basis-open":Oa,"basis-closed":Ua,bundle:Da,cardinal:za,"cardinal-open":Ta,"cardinal-closed":Ca,monotone:Va});Us.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)});var Ds=[0,2/3,1/3,0],Fs=[0,1/3,2/3,0],js=[0,1/6,2/3,1/6];ho.svg.line.radial=function(){var n=_a(Ya);return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},La.reverse=Ea,Ea.reverse=La,ho.svg.area=function(){return Ja(w)},ho.svg.area.radial=function(){var n=Ja(Ya);return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ho.svg.chord=function(){function n(n,u){var s=t(this,a,n,u),l=t(this,o,n,u);return"M"+s.p0+r(s.r,s.p1,s.a1-s.a0)+(e(s,l)?i(s.r,s.p1,s.r,s.p0):i(s.r,s.p1,l.r,l.p0)+r(l.r,l.p1,l.a1-l.a0)+i(l.r,l.p1,s.r,s.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),a=u.call(n,i,r),o=s.call(n,i,r)-Jo,c=l.call(n,i,r)-Jo;
return{r:a,a0:o,a1:c,p0:[a*Math.cos(o),a*Math.sin(o)],p1:[a*Math.cos(c),a*Math.sin(c)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Ho)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var a=_e,o=Ne,u=Ga,s=xa,l=ka;return n.radius=function(t){return arguments.length?(u=zn(t),n):u},n.source=function(t){return arguments.length?(a=zn(t),n):a},n.target=function(t){return arguments.length?(o=zn(t),n):o},n.startAngle=function(t){return arguments.length?(s=zn(t),n):s},n.endAngle=function(t){return arguments.length?(l=zn(t),n):l},n},ho.svg.diagonal=function(){function n(n,i){var a=t.call(this,n,i),o=e.call(this,n,i),u=(a.y+o.y)/2,s=[a,{x:a.x,y:u},{x:o.x,y:u},o];return s=s.map(r),"M"+s[0]+"C"+s[1]+" "+s[2]+" "+s[3]}var t=_e,e=Ne,r=Za;return n.source=function(e){return arguments.length?(t=zn(e),n):t},n.target=function(t){return arguments.length?(e=zn(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ho.svg.diagonal.radial=function(){var n=ho.svg.diagonal(),t=Za,e=n.projection;return n.projection=function(n){return arguments.length?e(Xa(t=n)):t},n},ho.svg.symbol=function(){function n(n,r){return(Is.get(t.call(this,n,r))||Ka)(e.call(this,n,r))}var t=$a,e=Wa;return n.type=function(e){return arguments.length?(t=zn(e),n):t},n.size=function(t){return arguments.length?(e=zn(t),n):e},n};var Is=ho.map({circle:Ka,cross:function(n){var t=Math.sqrt(n/5)/2;return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Hs)),e=t*Hs;return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2;return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Bs),e=t*Bs/2;return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Bs),e=t*Bs/2;return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}});ho.svg.symbolTypes=Is.keys();var Bs=Math.sqrt(3),Hs=Math.tan(30*Go);qo.transition=function(n){for(var t,e,r=Vs||++Zs,i=ro(n),a=[],o=Ys||{time:Date.now(),ease:Cr,delay:0,duration:250},u=-1,s=this.length;++u<s;){a.push(t=[]);for(var l=this[u],c=-1,f=l.length;++c<f;)(e=l[c])&&io(e,c,i,r,o),t.push(e)}return no(a,i,r)},qo.interrupt=function(n){return this.each(null==n?Js:Qa(ro(n)))};var Vs,Ys,Js=Qa(ro()),Gs=[],Zs=0;Gs.call=qo.call,Gs.empty=qo.empty,Gs.node=qo.node,Gs.size=qo.size,ho.transition=function(n,t){return n&&n.transition?Vs?n.transition(t):n:ho.selection().transition(n)},ho.transition.prototype=Gs,Gs.select=function(n){var t,e,r,i=this.id,a=this.namespace,o=[];n=P(n);for(var u=-1,s=this.length;++u<s;){o.push(t=[]);for(var l=this[u],c=-1,f=l.length;++c<f;)(r=l[c])&&(e=n.call(r,r.__data__,c,u))?("__data__"in r&&(e.__data__=r.__data__),io(e,c,a,i,r[a][i]),t.push(e)):t.push(null)}return no(o,a,i)},Gs.selectAll=function(n){var t,e,r,i,a,o=this.id,u=this.namespace,s=[];n=q(n);for(var l=-1,c=this.length;++l<c;)for(var f=this[l],h=-1,p=f.length;++h<p;)if(r=f[h]){a=r[u][o],e=n.call(r,r.__data__,h,l),s.push(t=[]);for(var g=-1,d=e.length;++g<d;)(i=e[g])&&io(i,g,u,o,a),t.push(i)}return no(s,u,o)},Gs.filter=function(n){var t,e,r,i=[];"function"!=typeof n&&(n=J(n));for(var a=0,o=this.length;o>a;a++){i.push(t=[]);for(var e=this[a],u=0,s=e.length;s>u;u++)(r=e[u])&&n.call(r,r.__data__,u,a)&&t.push(r)}return no(i,this.namespace,this.id)},Gs.tween=function(n,t){var e=this.id,r=this.namespace;return arguments.length<2?this.node()[r][e].tween.get(n):Z(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Gs.attr=function(n,t){function e(){this.removeAttribute(u)}function r(){this.removeAttributeNS(u.space,u.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(u);return e!==n&&(t=o(e,n),function(n){this.setAttribute(u,t(n))})})}function a(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(u.space,u.local);return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(u.space,u.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t]);return this}var o="transform"==n?Kr:_r,u=ho.ns.qualify(n);return to(this,"attr."+n,t,u.local?a:i)},Gs.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i));return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local));return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ho.ns.qualify(n);return this.tween("attr."+n,i.local?r:e)},Gs.style=function(n,t,e){function r(){this.style.removeProperty(n)}function i(t){return null==t?r:(t+="",function(){var r,i=o(this).getComputedStyle(this,null).getPropertyValue(n);return i!==t&&(r=_r(i,t),function(t){this.style.setProperty(n,r(t),e)})})}var a=arguments.length;if(3>a){if("string"!=typeof n){2>a&&(t="");for(e in n)this.style(e,n[e],t);return this}e=""}return to(this,"style."+n,t,i)},Gs.styleTween=function(n,t,e){function r(r,i){var a=t.call(this,r,i,o(this).getComputedStyle(this,null).getPropertyValue(n));return a&&function(t){this.style.setProperty(n,a(t),e)}}return arguments.length<3&&(e=""),this.tween("style."+n,r)},Gs.text=function(n){return to(this,"text",n,eo)},Gs.remove=function(){var n=this.namespace;return this.each("end.transition",function(){var t;this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Gs.ease=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ho.ease.apply(ho,arguments)),Z(this,function(r){r[e][t].ease=n}))},Gs.delay=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].delay:Z(this,"function"==typeof n?function(r,i,a){r[e][t].delay=+n.call(r,r.__data__,i,a)}:(n=+n,function(r){r[e][t].delay=n}))},Gs.duration=function(n){var t=this.id,e=this.namespace;return arguments.length<1?this.node()[e][t].duration:Z(this,"function"==typeof n?function(r,i,a){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,a))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Gs.each=function(n,t){var e=this.id,r=this.namespace;if(arguments.length<2){var i=Ys,a=Vs;try{Vs=e,Z(this,function(t,i,a){Ys=t[r][e],n.call(t,t.__data__,i,a)})}finally{Ys=i,Vs=a}}else Z(this,function(i){var a=i[r][e];(a.event||(a.event=ho.dispatch("start","end","interrupt"))).on(n,t)});return this},Gs.transition=function(){for(var n,t,e,r,i=this.id,a=++Zs,o=this.namespace,u=[],s=0,l=this.length;l>s;s++){u.push(n=[]);for(var t=this[s],c=0,f=t.length;f>c;c++)(e=t[c])&&(r=e[o][i],io(e,c,o,a,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return no(u,o,a)},ho.svg.axis=function(){function n(n){n.each(function(){var n,l=ho.select(this),c=this.__chart__||e,f=this.__chart__=e.copy(),h=null==s?f.ticks?f.ticks.apply(f,u):f.domain():s,p=null==t?f.tickFormat?f.tickFormat.apply(f,u):w:t,g=l.selectAll(".tick").data(h,f),d=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Io),v=ho.transition(g.exit()).style("opacity",Io).remove(),m=ho.transition(g.order()).style("opacity",1),y=Math.max(i,0)+o,x=Xi(f),k=l.selectAll(".domain").data([0]),M=(k.enter().append("path").attr("class","domain"),ho.transition(k));d.append("line"),d.append("text");var b,_,N,S,A=d.select("line"),L=m.select("line"),E=g.select("text").text(p),T=d.select("text"),C=m.select("text"),z="top"===r||"left"===r?-1:1;if("bottom"===r||"top"===r?(n=ao,b="x",N="y",_="x2",S="y2",E.attr("dy",0>z?"0em":".71em").style("text-anchor","middle"),M.attr("d","M"+x[0]+","+z*a+"V0H"+x[1]+"V"+z*a)):(n=oo,b="y",N="x",_="y2",S="x2",E.attr("dy",".32em").style("text-anchor",0>z?"end":"start"),M.attr("d","M"+z*a+","+x[0]+"H0V"+x[1]+"H"+z*a)),A.attr(S,z*i),T.attr(N,z*y),L.attr(_,0).attr(S,z*i),C.attr(b,0).attr(N,z*y),f.rangeBand){var P=f,q=P.rangeBand()/2;c=f=function(n){return P(n)+q}}else c.rangeBand?c=f:v.call(n,f,c);d.call(n,c,f),m.call(n,f,f)})}var t,e=ho.scale.linear(),r=Xs,i=6,a=6,o=3,u=[10],s=null;return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Ws?t+"":Xs,n):r},n.ticks=function(){return arguments.length?(u=go(arguments),n):u},n.tickValues=function(t){return arguments.length?(s=t,n):s},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length;return e?(i=+t,a=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(a=+t,n):a},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n};var Xs="bottom",Ws={top:1,right:1,bottom:1,left:1};ho.svg.brush=function(){function n(a){a.each(function(){var a=ho.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",i).on("touchstart.brush",i),o=a.selectAll(".background").data([0]);o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),a.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move");var u=a.selectAll(".resize").data(d,w);u.exit().remove(),u.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return $s[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),u.style("display",n.empty()?"none":null);var s,f=ho.transition(a),h=ho.transition(o);l&&(s=Xi(l),h.attr("x",s[0]).attr("width",s[1]-s[0]),e(f)),c&&(s=Xi(c),h.attr("y",s[0]).attr("height",s[1]-s[0]),r(f)),t(f)})}function t(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+f[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function e(n){n.select(".extent").attr("x",f[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",f[1]-f[0])}function r(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function i(){function i(){32==ho.event.keyCode&&(L||(x=null,C[0]-=f[1],C[1]-=h[1],L=2),E())}function d(){32==ho.event.keyCode&&2==L&&(C[0]+=f[1],C[1]+=h[1],L=0,E())}function v(){var n=ho.mouse(M),i=!1;k&&(n[0]+=k[0],n[1]+=k[1]),L||(ho.event.altKey?(x||(x=[(f[0]+f[1])/2,(h[0]+h[1])/2]),C[0]=f[+(n[0]<x[0])],C[1]=h[+(n[1]<x[1])]):x=null),S&&m(n,l,0)&&(e(_),i=!0),A&&m(n,c,1)&&(r(_),i=!0),i&&(t(_),w({type:"brush",mode:L?"move":"resize"}))}function m(n,t,e){var r,i,o=Xi(t),s=o[0],l=o[1],c=C[e],d=e?h:f,v=d[1]-d[0];return L&&(s-=c,l-=v+c),r=(e?g:p)?Math.max(s,Math.min(l,n[e])):n[e],L?i=(r+=c)+v:(x&&(c=Math.max(s,Math.min(l,2*x[e]-r))),r>c?(i=r,r=c):i=c),d[0]!=r||d[1]!=i?(e?u=null:a=null,d[0]=r,d[1]=i,!0):void 0}function y(){v(),_.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ho.select("body").style("cursor",null),z.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),T(),w({type:"brushend"})}var x,k,M=this,b=ho.select(ho.event.target),w=s.of(M,arguments),_=ho.select(M),N=b.datum(),S=!/^(n|s)$/.test(N)&&l,A=!/^(e|w)$/.test(N)&&c,L=b.classed("extent"),T=nn(M),C=ho.mouse(M),z=ho.select(o(M)).on("keydown.brush",i).on("keyup.brush",d);if(ho.event.changedTouches?z.on("touchmove.brush",v).on("touchend.brush",y):z.on("mousemove.brush",v).on("mouseup.brush",y),_.interrupt().selectAll("*").interrupt(),L)C[0]=f[0]-C[0],C[1]=h[0]-C[1];else if(N){var P=+/w$/.test(N),q=+/^n/.test(N);k=[f[1-P]-C[0],h[1-q]-C[1]],C[0]=f[P],C[1]=h[q]}else ho.event.altKey&&(x=C.slice());_.style("pointer-events","none").selectAll(".resize").style("display",null),ho.select("body").style("cursor",b.style("cursor")),w({type:"brushstart"}),v()}var a,u,s=C(n,"brushstart","brush","brushend"),l=null,c=null,f=[0,0],h=[0,0],p=!0,g=!0,d=Ks[0];return n.event=function(n){n.each(function(){var n=s.of(this,arguments),t={x:f,y:h,i:a,j:u},e=this.__chart__||t;this.__chart__=t,Vs?ho.select(this).transition().each("start.brush",function(){a=e.i,u=e.j,f=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=Nr(f,t.x),r=Nr(h,t.y);return a=u=null,function(i){f=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){a=t.i,u=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(l=t,d=Ks[!l<<1|!c],n):l},n.y=function(t){return arguments.length?(c=t,d=Ks[!l<<1|!c],n):c},n.clamp=function(t){return arguments.length?(l&&c?(p=!!t[0],g=!!t[1]):l?p=!!t:c&&(g=!!t),n):l&&c?[p,g]:l?p:c?g:null},n.extent=function(t){var e,r,i,o,s;return arguments.length?(l&&(e=t[0],r=t[1],c&&(e=e[0],r=r[0]),a=[e,r],l.invert&&(e=l(e),r=l(r)),e>r&&(s=e,e=r,r=s),(e!=f[0]||r!=f[1])&&(f=[e,r])),c&&(i=t[0],o=t[1],l&&(i=i[1],o=o[1]),u=[i,o],c.invert&&(i=c(i),o=c(o)),i>o&&(s=i,i=o,o=s),(i!=h[0]||o!=h[1])&&(h=[i,o])),n):(l&&(a?(e=a[0],r=a[1]):(e=f[0],r=f[1],l.invert&&(e=l.invert(e),r=l.invert(r)),e>r&&(s=e,e=r,r=s))),c&&(u?(i=u[0],o=u[1]):(i=h[0],o=h[1],c.invert&&(i=c.invert(i),o=c.invert(o)),i>o&&(s=i,i=o,o=s))),l&&c?[[e,i],[r,o]]:l?[e,r]:c&&[i,o])},n.clear=function(){return n.empty()||(f=[0,0],h=[0,0],a=u=null),n},n.empty=function(){return!!l&&f[0]==f[1]||!!c&&h[0]==h[1]},ho.rebind(n,s,"on")};var $s={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Ks=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],Qs=yu.format=_u.timeFormat,nl=Qs.utc,tl=nl("%Y-%m-%dT%H:%M:%S.%LZ");Qs.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?uo:tl,uo.parse=function(n){var t=new Date(n);return isNaN(t)?null:t},uo.toString=tl.toString,yu.second=Jn(function(n){return new xu(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),yu.seconds=yu.second.range,yu.seconds.utc=yu.second.utc.range,yu.minute=Jn(function(n){return new xu(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),yu.minutes=yu.minute.range,yu.minutes.utc=yu.minute.utc.range,yu.hour=Jn(function(n){var t=n.getTimezoneOffset()/60;return new xu(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),yu.hours=yu.hour.range,yu.hours.utc=yu.hour.utc.range,yu.month=Jn(function(n){return n=yu.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),yu.months=yu.month.range,yu.months.utc=yu.month.utc.range;var el=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],rl=[[yu.second,1],[yu.second,5],[yu.second,15],[yu.second,30],[yu.minute,1],[yu.minute,5],[yu.minute,15],[yu.minute,30],[yu.hour,1],[yu.hour,3],[yu.hour,6],[yu.hour,12],[yu.day,1],[yu.day,2],[yu.week,1],[yu.month,1],[yu.month,3],[yu.year,1]],il=Qs.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",Rt]]),al={range:function(n,t,e){return ho.range(Math.ceil(n/e)*e,+t,e).map(lo)},floor:w,ceil:w};rl.year=yu.year,yu.scale=function(){return so(ho.scale.linear(),rl,il)};var ol=rl.map(function(n){return[n[0].utc,n[1]]}),ul=nl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",Rt]]);ol.year=yu.year.utc,yu.scale.utc=function(){return so(ho.scale.linear(),ol,ul)},ho.text=Pn(function(n){return n.responseText}),ho.json=function(n,t){return qn(n,"application/json",co,t)},ho.html=function(n,t){return qn(n,"text/html",fo,t)},ho.xml=Pn(function(n){return n.responseXML}),this.d3=ho,r=ho,i="function"==typeof r?r.call(t,e,t,n):r,!(void 0!==i&&(n.exports=i))}()},function(n,t,e){var r=e(3);"string"==typeof r&&(r=[[n.id,r,""]]);e(5)(r,{});r.locals&&(n.exports=r.locals)},function(n,t,e){t=n.exports=e(4)(),t.push([n.id,"svg {\n  display: block;\n  min-width: 100%;\n  width: 100%;\n  min-height: 100%;\n}\n\ncircle.node {\n  stroke: #ccc;\n  stroke-width: 1px;\n  opacity: 1;\n  fill: white;\n}\n\npolygon.node {\n  stroke: #ccc;\n  stroke-width: 1px;\n  opacity: 1;\n  fill: white;\n}\n\ncircle.node.label {\n    stroke: transparent;\n    stroke-width: 0;\n    fill: white;\n    display: inline;\n}\n\ncircle.outline_node {\n    stroke-width: 1px;\n    fill: red;\n}\n\ncircle.protein {\n    fill: gray;\n    fill-opacity: 0.5;\n    stroke-width: 4;\n}\n\ncircle.hidden_outline {\n    stroke-width: 0px;\n}\n\n\nline.link {\n  stroke: #999;\n  stroke-opacity: 0.8;\n  stroke-width: 2;\n}\n\nline.pseudoknot {\n    stroke: red;\n}\n\nline.basepair {\n  stroke: red;\n}\n\nline.intermolecule {\n  stroke: blue;\n}\n\nline.chain_chain {\n  stroke-dasharray: 3,3;\n}\n\nline.fake {\n  stroke: green;\n}\n\n.transparent {\n    fill: transparent;\n    stroke-width: 0;\n    stroke-opacity: 0;\n    opacity: 0;\n    visibility: hidden;\n}\n\n.drag_line {\n  stroke: #999;\n  stroke-width: 2;\n  pointer-events: none;\n}\n\n.drag_line_hidden {\n  stroke: #999;\n  stroke-width: 0;\n  pointer-events: none;\n}\n\n.d3-tip {\n    line-height: 1;\n    font-weight: bold;\n    padding: 6px;\n    background: rgba(0, 0, 0, 0.6);\n    color: #fff;\n    border-radius: 4px;\n    pointer-events: none;\n          }\n\ntext.node-label {\n    font-weight: bold;\n    font-family: Tahoma, Geneva, sans-serif;\n    color: rgb(100,100,100);\n    pointer-events: none;\n}\n\ntext {\n    pointer-events: none;\n}\n\ng.gnode {\n\n}\n\ncircle.outline_node.selected {\n    visibility: visible;\n}\n\ncircle.outline_node {\n    visibility: hidden;\n}\n\n.brush .extent {\n  fill-opacity: .1;\n  stroke: #fff;\n  shape-rendering: crispEdges;\n}\n\n.noselect {\n    -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n",""])},function(n,t){n.exports=function(){var n=[];return n.toString=function(){for(var n=[],t=0;t<this.length;t++){var e=this[t];e[2]?n.push("@media "+e[2]+"{"+e[1]+"}"):n.push(e[1])}return n.join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(r[a]=!0)}for(i=0;i<t.length;i++){var o=t[i];"number"==typeof o[0]&&r[o[0]]||(e&&!o[2]?o[2]=e:e&&(o[2]="("+o[2]+") and ("+e+")"),n.push(o))}},n}},function(n,t,e){function r(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=p[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(l(r.parts[a],t))}else{for(var o=[],a=0;a<r.parts.length;a++)o.push(l(r.parts[a],t));p[r.id]={id:r.id,refs:1,parts:o}}}}function i(n){for(var t=[],e={},r=0;r<n.length;r++){var i=n[r],a=i[0],o=i[1],u=i[2],s=i[3],l={css:o,media:u,sourceMap:s};e[a]?e[a].parts.push(l):t.push(e[a]={id:a,parts:[l]})}return t}function a(n,t){var e=v(),r=x[x.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),x.push(t);else{if("bottom"!==n.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");e.appendChild(t)}}function o(n){n.parentNode.removeChild(n);var t=x.indexOf(n);t>=0&&x.splice(t,1)}function u(n){var t=document.createElement("style");return t.type="text/css",a(n,t),t}function s(n){var t=document.createElement("link");return t.rel="stylesheet",a(n,t),t}function l(n,t){var e,r,i;if(t.singleton){var a=y++;e=m||(m=u(t)),r=c.bind(null,e,a,!1),i=c.bind(null,e,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=s(t),r=h.bind(null,e),i=function(){o(e),e.href&&URL.revokeObjectURL(e.href)}):(e=u(t),r=f.bind(null,e),i=function(){o(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}function c(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=k(t,i);else{var a=document.createTextNode(i),o=n.childNodes;o[t]&&n.removeChild(o[t]),o.length?n.insertBefore(a,o[t]):n.appendChild(a)}}function f(n,t){var e=t.css,r=t.media;t.sourceMap;if(r&&n.setAttribute("media",r),n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}function h(n,t){var e=t.css,r=(t.media,t.sourceMap);r&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([e],{type:"text/css"}),a=n.href;n.href=URL.createObjectURL(i),a&&URL.revokeObjectURL(a)}var p={},g=function(n){var t;return function(){return"undefined"==typeof t&&(t=n.apply(this,arguments)),t}},d=g(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),v=g(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,y=0,x=[];n.exports=function(n,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var e=i(n);return r(e,t),function(n){for(var a=[],o=0;o<e.length;o++){var u=e[o],s=p[u.id];s.refs--,a.push(s)}if(n){var l=i(n);r(l,t)}for(var o=0;o<a.length;o++){var s=a[o];if(0===s.refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete p[s.id]}}}};var k=function(){var n=[];return function(t,e){return n[t]=e,n.filter(Boolean).join("\n")}}()},function(n,t,e){"use strict";function r(){var n=(new Date).getTime(),t="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=(n+16*Math.random())%16|0;return n=Math.floor(n/16),("x"==t?e:3&e|8).toString(16)});return t}function i(n,t,e){var i=this;i.type="protein",i.size=t,i.nodes=[{name:"P",num:1,radius:3*Math.sqrt(t),rna:i,nodeType:"protein",structName:n,elemType:"p",size:t,uid:r()}],i.links=[],i.uid=r(),i.addUids=function(n){for(var t=0;t<n.length;t++)i.nodes[t].uid=n[t];return i},i.getUids=function(){uids=[];for(var n=0;n<i.dotbracket.length;n++)uids.push(i.nodes[n].uid);return uids}}function a(n,t,e,i){var a=this;a.type="rna",a.circularizeExternal=!1,0===arguments.length?(a.seq="",a.dotbracket="",a.structName=""):(a.seq=n,a.dotbracket=t,a.structName=e),arguments.length<4&&(i=1),a.circular=!1,a.dotbracket.length>0&&"*"==a.dotbracket[a.dotbracket.length-1]&&(a.dotbracket=a.dotbracket.slice(0,a.dotbracket.length-1),a.circular=!0),a.uid=r(),a.elements=[],a.pseudoknotPairs=[],a.nucsToNodes={},a.addUids=function(n){for(var t=a.nodes.filter(function(n){return"nucleotide"==n.nodeType}),e=0;e<n.length&&e<t.length;e++)t[e].uid=n[e];return a},a.computePairtable=function(){a.pairtable=u.rnaUtilities.dotbracketToPairtable(a.dotbracket)},a.removeBreaks=function(n){for(var t=[],e=-1;(e=n.indexOf("&"))>=0;)t.push(e),n=n.substring(0,e)+"oo"+n.substring(e+1,n.length);return{targetString:n,breaks:t}};var o=a.removeBreaks(a.dotbracket);a.dotbracket=o.targetString,a.dotBracketBreaks=o.breaks,o=a.removeBreaks(a.seq),a.seq=o.targetString,a.seqBreaks=o.breaks,a.calculateStartNumberArray=function(){a.startNumberArray=[];for(var n=0;n<a.dotbracket.length;n++)a.startNumberArray.push(i),"o"==a.dotbracket[n]&&(i=-n)},a.calculateStartNumberArray(),a.rnaLength=a.dotbracket.length,(0,u.arraysEqual)(a.dotBracketBreaks,a.seqBreaks)||(console.log("WARNING: Sequence and structure breaks not equal"),console.log("WARNING: Using the breaks in the structure")),a.computePairtable(),a.addPositions=function(n,t){for(var e=a.nodes.filter(function(t){return t.nodeType==n}),r=0;r<e.length;r++)e[r].x=t[r][0],e[r].px=t[r][0],e[r].y=t[r][1],e[r].py=t[r][1];return a},a.breakNodesToFakeNodes=function(){for(var n=a.nodes.filter(function(n){return"nucleotide"==n.nodeType}),t=0;t<n.length;t++)"o"==a.dotbracket[t]&&(n[t].nodeType="middle");for(var t=0;t<a.elements.length;t++){for(var e=!1,r=0;r<a.elements[t][2].length;r++)a.dotBracketBreaks.indexOf(a.elements[t][2][r])>=0&&(e=!0);e?a.elements[t][2].map(function(n){0!=n&&(a.nodes[n-1].elemType="e")}):a.elements[t][2].map(function(n){0!=n&&(a.nodes[n-1].elemType=a.elements[t][0])})}return a},a.getPositions=function(n){for(var t=[],e=a.nodes.filter(function(t){return t.nodeType==n}),r=0;r<e.length;r++)t.push([e[r].x,e[r].y]);return t},a.getUids=function(){for(var n=[],t=0;t<a.dotbracket.length;t++)n.push(a.nodes[t].uid);return n},a.reinforceStems=function(){for(var n=a.pairtable,t=a.elements.filter(function(n){return"s"==n[0]&&n[2].length>=4}),e=0;e<t.length;e++)for(var r=t[e][2],i=r.slice(0,r.length/2),o=0;o<i.length-1;o++)a.addFakeNode([i[o],i[o+1],n[i[o+1]],n[i[o]]]);return a},a.reinforceLoops=function(){for(var n=function(n){return 0!==n&&n<=a.dotbracket.length},t=0;t<a.elements.length;t++)if("s"!=a.elements[t][0]&&(a.circularizeExternal||"e"!=a.elements[t][0])){var e=a.elements[t][2].filter(n);if("e"==a.elements[t][0]){var i={name:"",num:-3,radius:0,rna:a,nodeType:"middle",elemType:"f",nucs:[],x:a.nodes[a.rnaLength-1].x,y:a.nodes[a.rnaLength-1].y,px:a.nodes[a.rnaLength-1].px,py:a.nodes[a.rnaLength-1].py,uid:r()},o={name:"",num:-2,radius:0,rna:a,nodeType:"middle",elemType:"f",nucs:[],x:a.nodes[0].x,y:a.nodes[0].y,px:a.nodes[0].px,py:a.nodes[0].py,uid:r()};e.push(a.nodes.length+1),e.push(a.nodes.length+2),a.nodes.push(i),a.nodes.push(o)}a.addFakeNode(e)}return a},a.updateLinkUids=function(){for(var n=0;n<a.links.length;n++)a.links[n].uid=a.links[n].source.uid+a.links[n].target.uid;return a},a.addFakeNode=function(n){for(var t=18,e=6.283/(2*n.length),i=t/(2*Math.tan(e)),o="",u=0;u<n.length;u++)o+=a.nodes[n[u]-1].uid;var s={name:"",num:-1,radius:i,rna:a,nodeType:"middle",elemType:"f",nucs:n,uid:o};a.nodes.push(s);var l=0,c=0,f=0;e=3.14159*(n.length-2)/(2*n.length),i=.5/Math.cos(e);for(var h=0;h<n.length;h++)if(!(0===n[h]||n[h]>a.dotbracket.length)){a.links.push({source:a.nodes[n[h]-1],target:a.nodes[a.nodes.length-1],linkType:"fake",value:i,uid:r()}),n.length>4&&a.links.push({source:a.nodes[n[h]-1],target:a.nodes[n[(h+Math.floor(n.length/2))%n.length]-1],linkType:"fake",value:2*i,uid:r()});var p=3.14159*(n.length-2)/n.length,g=2*Math.cos(1.570795-p/2);a.links.push({source:a.nodes[n[h]-1],target:a.nodes[n[(h+2)%n.length]-1],linkType:"fake",value:g});var d=a.nodes[n[h]-1];"x"in d&&(l+=d.x,c+=d.y,f+=1)}return f>0&&(s.x=l/f,s.y=c/f,s.px=s.x,s.py=s.y),a},a.connectFakeNodes=function(){for(var n=18,t=function(n){return"middle"==n.nodeType},e={},r=a.nodes.filter(t),i=new Set,o=1;o<=a.nodes.length;o++)e[o]=[];for(var o=0;o<r.length;o++)for(var u=r[o],s=0;s<u.nucs.length;s++){for(var l=u.nucs[s],c=0;c<e[l].length;c++)if(!i.has(JSON.stringify([e[l][c].uid,u.uid].sort()))){var f=e[l][c].radius+u.radius;a.links.push({source:e[l][c],target:u,value:f/n,linkType:"fake_fake"}),i.add(JSON.stringify([e[l][c].uid,u.uid].sort()))}e[l].push(u)}return a},a.addExtraLinks=function(n){if("undefined"==typeof n)return a;for(var t=0;t<n.length;t++){var e=a.getNodeFromNucleotides(n[t].from),i=a.getNodeFromNucleotides(n[t].to),o={source:e,target:i,linkType:"extra",extraLinkType:n[t].linkType,uid:r()};a.links.push(o)}return a},a.elementsToJson=function(){var n=a.pairtable;a.elements;a.nodes=[],a.links=[];var t={};a.elements.sort();for(var e=0;e<a.elements.length;e++)for(var i=a.elements[e][2],o=0;o<i.length;o++)t[i[o]]=a.elements[e][0];for(var e=1;e<=n[0];e++){var u=a.seq[e-1];(a.dotBracketBreaks.indexOf(e-1)>=0||a.dotBracketBreaks.indexOf(e-2)>=0)&&(u=""),a.nodes.push({name:u,num:e+a.startNumberArray[e-1]-1,radius:5,rna:a,nodeType:"nucleotide",structName:a.structName,elemType:t[e],uid:r(),linked:!1})}for(var e=0;e<a.nodes.length;e++)0===e?a.nodes[e].prevNode=null:a.nodes[e].prevNode=a.nodes[e-1],e==a.nodes.length-1?a.nodes[e].nextNode=null:a.nodes[e].nextNode=a.nodes[e+1];for(var e=1;e<=n[0];e++)0!==n[e]&&a.links.push({source:a.nodes[e-1],target:a.nodes[n[e]-1],linkType:"basepair",value:1,uid:r()}),e>1&&-1===a.dotBracketBreaks.indexOf(e-1)&&-1==a.dotBracketBreaks.indexOf(e-2)&&-1==a.dotBracketBreaks.indexOf(e-3)&&(a.links.push({source:a.nodes[e-2],target:a.nodes[e-1],linkType:"backbone",value:1,uid:r()}),a.nodes[e-1].linked=!0);for(var e=0;e<a.pseudoknotPairs.length;e++)a.links.push({source:a.nodes[a.pseudoknotPairs[e][0]-1],target:a.nodes[a.pseudoknotPairs[e][1]-1],linkType:"pseudoknot",value:1,uid:r()});return a.circular&&a.links.push({source:a.nodes[0],target:a.nodes[a.rnaLength-1],linkType:"backbone",value:1,uid:r()}),a},a.ptToElements=function(n,t,e,r){var i=[],o=[e-1],u=[r+1];if(e>r)return[];for(;0===n[e];e++)o.push(e);for(;0===n[r];r--)u.push(r);if(e>r){if(o.push(e),0===t)return[["e",t,o.sort(s)]];for(var l=!1,c=[],f=[],h=0;h<o.length;h++)l?f.push(o[h]):c.push(o[h]),a.dotBracketBreaks.indexOf(o[h])>=0&&(l=!0);return l?[["h",t,o.sort(s)]]:[["h",t,o.sort(s)]]}if(n[e]!=r){var p=o,h=e;for(p.push(h);r>=h;){for(i=i.concat(a.ptToElements(n,t,h,n[h])),p.push(n[h]),h=n[h]+1;0===n[h]&&r>=h;h++)p.push(h);p.push(h)}return p.pop(),p=p.concat(u),p.length>0&&(0===t?i.push(["e",t,p.sort(s)]):i.push(["m",t,p.sort(s)])),i}if(n[e]===r){o.push(e),u.push(r);var g=o.concat(u);g.length>4&&(0===t?i.push(["e",t,o.concat(u).sort(s)]):i.push(["i",t,o.concat(u).sort(s)]))}for(var d=[];n[e]===r&&r>e;)d.push(e),d.push(r),e+=1,r-=1,t+=1;return o=[e-1],u=[r+1],i.push(["s",t,d.sort(s)]),i.concat(a.ptToElements(n,t,e,r))},a.addLabels=function(n,t){if(0===arguments.length&&(n=1,t=10),1===arguments.length&&(t=10),0===t)return a;0>=t&&console.log("The label interval entered in invalid:",t);for(var e=1;e<=a.pairtable[0];e++)if(e%t===0){var i,o,u,s,l,c,f=a.nodes[e-1];1==a.rnaLength?(c=[f.x-15,f.y],l=[f.x-15,f.y]):(u=1==e?a.nodes[a.rnaLength-1]:a.nodes[e-2],s=e==a.rnaLength?a.nodes[0]:a.nodes[e],0!==a.pairtable[s.num]&&0!==a.pairtable[u.num]&&0!==a.pairtable[f.num]&&(u=s=a.nodes[a.pairtable[f.num]-1]),0===a.pairtable[f.num]||0!==a.pairtable[s.num]&&0!==a.pairtable[u.num]?(c=[s.x-f.x,s.y-f.y],l=[u.x-f.x,u.y-f.y]):(c=[f.x-s.x,f.y-s.y],l=[f.x-u.x,f.y-u.y]));var h=[c[0]+l[0],c[1]+l[1]],p=Math.sqrt(h[0]*h[0]+h[1]*h[1]),g=[h[0]/p,h[1]/p],d=[-15*g[0],-15*g[1]],i=a.nodes[e-1].x+d[0],o=a.nodes[e-1].y+d[1],v={name:e+a.startNumberArray[e-1]-1,num:-1,radius:6,rna:a,nodeType:"label",structName:a.structName,elemType:"l",x:i,y:o,px:i,py:o,uid:r()},m={source:a.nodes[e-1],target:v,value:1,linkType:"label_link",uid:r()};a.nodes.push(v),a.links.push(m)}return a},a.recalculateElements=function(){if(a.removePseudoknots(),a.elements=a.ptToElements(a.pairtable,0,1,a.dotbracket.length),a.circular&&(externalLoop=a.elements.filter(function(n){return"e"==n[0]?!0:void 0}),externalLoop.length>0)){eloop=externalLoop[0],nucs=eloop[2].sort(s),prev=nucs[0],hloop=!0,numGreater=0;for(var n=1;n<nucs.length;n++)nucs[n]-prev>1&&(numGreater+=1),prev=nucs[n];1==numGreater?eloop[0]="h":2==numGreater?eloop[0]="i":eloop[0]="m"}return a},a.reassignLinkUids=function(){for(var n,n=0;n<a.links.length;n++)a.links[n].uid=a.links[n].source.uid+a.links[n].target.uid;return a},a.removePseudoknots=function(){return a.pairtable.length>1&&(a.pseudoknotPairs=a.pseudoknotPairs.concat(u.rnaUtilities.removePseudoknotsFromPairtable(a.pairtable))),a},a.addPseudoknots=function(){for(var n=a.pairtable,t=a.pseudoknotPairs,e=0;e<t.length;e++)n[t[e][0]]=t[e][1],n[t[e][1]]=t[e][0];return a.pseudoknotPairs=[],a},a.addName=function(n){return"undefined"==typeof n?(a.name="",a):(a.name=n,a)},a.rnaLength>0&&a.recalculateElements()}function o(n){for(var t={},e=[],o=[],u=0;u<n.molecules.length;u++){var s,l=n.molecules[u];
"rna"==l.type?(s=new a(l.seq,l.ss,l.header),s.circularizeExternal=!0,s.elementsToJson().addPositions("nucleotide",l.positions).addLabels().reinforceStems().reinforceLoops()):"protein"==l.type&&(s=new i(l.header,l.size)),s.addUids(l.uids);for(var c=0;c<s.nodes.length;c++)t[s.nodes[c].uid]=s.nodes[c];e.push(s)}for(var u=0;u<n.extraLinks.length;u++)link=n.extraLinks[u],link.source=t[link.source],link.target=t[link.target],link.uid=r(),o.push(link);return{graphs:e,extraLinks:o}}Object.defineProperty(t,"__esModule",{value:!0}),t.ProteinGraph=i,t.RNAGraph=a,t.moleculesToJson=o;var u=e(7),s=function(n,t){return n-t};"undefined"==typeof String.prototype.trim&&(String.prototype.trim=function(){return String(this).replace(/^\s+|\s+$/g,"")})},function(n,t,e){!function(t,e){n.exports=e()}(this,function(){return function(n){function t(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return n[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}([function(n,t,e){n.exports=e(1)},function(n,t){"use strict";function e(n,t){if(n===t)return!0;if(null===n||null===t)return!1;if(n.length!=t.length)return!1;for(var e=0;e<n.length;++e)if(n[e]!==t[e])return!1;return!0}function r(){var n=this;n.bracketLeft="([{<ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n.bracketRight=")]}>abcdefghijklmnopqrstuvwxyz".split(""),n.inverseBrackets=function(n){for(var t={},e=0;e<n.length;e++)t[n[e]]=e;return t},n.maximumMatching=function(n){for(var t=n[0],e=0,r=new Array(t+1),i=0;t>=i;i++){r[i]=new Array(t+1);for(var a=i;t>=a;a++)r[i][a]=0}for(var o=0,i=t-e-1;i>0;i--)for(var a=i+e+1;t>=a;a++){o=r[i][a-1];for(var u=a-e-1;u>=i;u--)n[u]===a&&(o=Math.max(o,(u>i?r[i][u-1]:0)+1+(a-u-1>0?r[u+1][a-1]:0)));r[i][a]=o}return o=r[1][t],r},n.backtrackMaximumMatching=function(t,e){var r=Array.apply(null,Array(t.length)).map(function(){return 0});return n.mmBt(t,r,e,1,t.length-1),r},n.mmBt=function(t,e,r,i,a){var o=t[i][a],u=0;if(!(u>a-i-1)){if(t[i][a-1]==o)return void n.mmBt(t,e,r,i,a-1);for(var s=a-u-1;s>=i;s--)if(r[a]===s){var l=s>i?t[i][s-1]:0,c=a-s-1>0?t[s+1][a-1]:0;if(l+c+1==o)return e[s]=a,e[a]=s,s>i&&n.mmBt(t,e,r,i,s-1),void n.mmBt(t,e,r,s+1,a-1)}console.log("FAILED!!!"+i+","+a+": backtracking failed!")}},n.dotbracketToPairtable=function(t){var e=Array.apply(null,new Array(t.length+1)).map(Number.prototype.valueOf,0);e[0]=t.length;for(var r={},i=0;i<n.bracketLeft.length;i++)r[i]=[];for(var a=n.inverseBrackets(n.bracketLeft),o=n.inverseBrackets(n.bracketRight),i=0;i<t.length;i++){var u=t[i],s=i+1;if("."==u||"o"==u)e[s]=0;else if(u in a)r[a[u]].push(s);else{if(!(u in o))throw"Unknown symbol in dotbracket string";var l=r[o[u]].pop();e[s]=l,e[l]=s}}for(var c in r)if(r[c].length>0)throw"Unmatched base at position "+r[c][0];return e},n.insertIntoStack=function(n,t,e){for(var r=0;n[r].length>0&&n[r][n[r].length-1]<e;)r+=1;return n[r].push(e),r},n.deleteFromStack=function(n,t){for(var e=0;0===n[e].length||n[e][n[e].length-1]!=t;)e+=1;return n[e].pop(),e},n.pairtableToDotbracket=function(t){for(var e={},r=0;r<t[0];r++)e[r]=[];for(var r,i={},a="",r=1;r<t[0]+1;r++){if(0!==t[r]&&t[r]in i)throw"Invalid pairtable contains duplicate entries";i[t[r]]=!0,a+=0===t[r]?".":t[r]>r?n.bracketLeft[n.insertIntoStack(e,r,t[r])]:n.bracketRight[n.deleteFromStack(e,r)]}return a},n.findUnmatched=function(t,e,r){for(var i,a=[],o=[],u=e,s=r,i=e;r>=i;i++)0!==t[i]&&(t[i]<e||t[i]>r)&&o.push([i,t[i]]);for(var i=u;s>=i;i++){for(;0===t[i]&&s>=i;)i++;for(r=t[i];t[i]===r;)i++,r--;a=a.concat(n.findUnmatched(t,i,r))}return o.length>0&&a.push(o),a},n.removePseudoknotsFromPairtable=function(t){for(var e=n.maximumMatching(t),r=n.backtrackMaximumMatching(e,t),i=[],a=1;a<t.length;a++)t[a]<a||r[a]!=t[a]&&(i.push([a,t[a]]),t[t[a]]=0,t[a]=0);return i},n.ptToElements=function(t,e,r,i,o){var u=[],s=[r-1],l=[i+1];if(arguments.length<5&&(o=[]),r>i)return[];for(;0===t[r];r++)s.push(r);for(;0===t[i];i--)l.push(i);if(r>i){if(s.push(r),0===e)return[["e",e,s.sort(a)]];for(var c=!1,f=[],h=[],p=0;p<s.length;p++)c?h.push(s[p]):f.push(s[p]),o.indexOf(s[p])>=0&&(c=!0);return c?[["h",e,s.sort(a)]]:[["h",e,s.sort(a)]]}if(t[r]!=i){var g=s,p=r;for(g.push(p);i>=p;){for(u=u.concat(n.ptToElements(t,e,p,t[p],o)),g.push(t[p]),p=t[p]+1;0===t[p]&&i>=p;p++)g.push(p);g.push(p)}return g.pop(),g=g.concat(l),g.length>0&&(0===e?u.push(["e",e,g.sort(a)]):u.push(["m",e,g.sort(a)])),u}if(t[r]===i){s.push(r),l.push(i);var d=s.concat(l);d.length>4&&(0===e?u.push(["e",e,s.concat(l).sort(a)]):u.push(["i",e,s.concat(l).sort(a)]))}for(var v=[];t[r]===i&&i>r;)v.push(r),v.push(i),r+=1,i-=1,e+=1;return s=[r-1],l=[i+1],u.push(["s",e,v.sort(a)]),u.concat(n.ptToElements(t,e,r,i,o))}}function i(n){var t=this;return t.colorsText=n,t.parseRange=function(n){for(var t=n.split(","),e=[],r=0;r<t.length;r++){var i=t[r].split("-");if(1==i.length)e.push(parseInt(i[0]));else if(2==i.length)for(var a=parseInt(i[0]),o=parseInt(i[1]),u=a;o>=u;u++)e.push(u);else console.log("Malformed range (too many dashes):",n)}return e},t.parseColorText=function(n){for(var e=n.split("\n"),r="",i=1,a={colorValues:{"":{}},range:["white","steelblue"]},o=[],u=0;u<e.length;u++)if(">"!=e[u][0])for(var s=e[u].trim().split(/[\s]+/),l=0;l<s.length;l++)if(isNaN(s[l])){if(0===s[l].search("range")){var c=s[l].split("="),f=c[1].split(":");a.range=[f[0],f[1]];continue}if(0==s[l].search("domain")){var h=s[l].split("="),f=h[1].split(":");a.domain=[f[0],f[1]];continue}for(var p=s[l].split(":"),g=t.parseRange(p[0]),d=p[1],v=0;v<g.length;v++)isNaN(d)?a.colorValues[r][g[v]]=d:(a.colorValues[r][g[v]]=+d,o.push(Number(d)))}else a.colorValues[r][i]=Number(s[l]),i+=1,o.push(Number(s[l]));else r=e[u].trim().slice(1),i=1,a.colorValues[r]={};return"domain"in a||(a.domain=[Math.min.apply(null,o),Math.max.apply(null,o)]),t.colorsJson=a,t},t.normalizeColors=function(){var n;for(var e in t.colorsJson){var r=Number.MAX_VALUE,i=Number.MIN_VALUE;for(var a in t.colorsJson.colorValues[e])n=t.colorsJson.colorValues[e][a],"number"==typeof n&&(r>n&&(r=n),n>i&&(i=n));for(a in t.colorsJson.colorValues[e])n=t.colorsJson.colorValues[e][a],"number"==typeof n&&(t.colorsJson.colorValues[e][a]=(n-r)/(i-r))}return t},t.parseColorText(t.colorsText),t}Object.defineProperty(t,"__esModule",{value:!0}),t.arraysEqual=e,t.RNAUtilities=r,t.ColorScheme=i;var a=function(n,t){return n-t};t.rnaUtilities=new r}])})},function(n,t){"use strict";function e(n){var t,e,r,i=0,a=100,o=100,u=15,s=[],l=[];e=n[0];var c=Array.apply(null,new Array(e+5)).map(Number.prototype.valueOf,0),f=Array.apply(null,new Array(16+Math.floor(e/5))).map(Number.prototype.valueOf,0),h=Array.apply(null,new Array(16+Math.floor(e/5))).map(Number.prototype.valueOf,0),p=0,g=0,d=Math.PI/2,v=function y(n,t,e){var r,i,a,o,u,s,l,v,m,x,k,M,b=2,w=0,_=0,N=Array.apply(null,new Array(3+2*Math.floor((t-n)/5))).map(Number.prototype.valueOf,0);for(r=n-1,t++;n!=t;)if(i=e[n],i&&0!=n){b+=2,a=n,o=i,N[++w]=a,N[++w]=o,n=i+1,u=a,s=o,v=0;do a++,o--,v++;while(e[a]==o&&e[a]>a);if(l=v-2,v>=2&&(c[u+1+l]+=d,c[s-1-l]+=d,c[u]+=d,c[s]+=d,v>2))for(;l>=1;l--)c[u+l]=Math.PI,c[s-l]=Math.PI;h[++g]=v,o>=a&&y(a,o,e)}else n++,b++,_++;for(M=Math.PI*(b-2)/b,N[++w]=t,m=0>r?0:r,x=1;w>=x;x++){for(k=N[x]-m,l=0;k>=l;l++)c[m+l]+=M;if(x>w)break;m=N[++x]}f[++p]=_};v(0,e+1,n),f[p]-=2,r=i,s[0]=a,l[0]=o;var m=[];for(m.push([s[0],l[0]]),t=1;e>t;t++)s[t]=s[t-1]+u*Math.cos(r),l[t]=l[t-1]+u*Math.sin(r),m.push([s[t],l[t]]),r+=Math.PI-c[t+1];return m}Object.defineProperty(t,"__esModule",{value:!0}),t.simpleXyCoordinates=e}])});

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(24);

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var glm = __webpack_require__(7);

var webgl = __webpack_require__(26);

var cube = __webpack_require__(27);

var elements = __webpack_require__(6);

var View = __webpack_require__(8);

var System = __webpack_require__(21);

var shaders = __webpack_require__(28);

module.exports = function (canvas, resolution, aoResolution) {
  var self = this;
  var range, samples, system;
  var gl, canvas;
  var rAtoms = null,
      rBonds = null,
      rDispQuad = null,
      rAccumulator = null,
      rAO = null,
      rDOF = null,
      rFXAA = null;
  var tSceneColor, tSceneNormal, tSceneDepth, tRandRotDepth, tRandRotColor, tAccumulator, tAccumulatorOut, tFXAA, tFXAAOut, tDOF, tAO;
  var fbSceneColor, fbSceneNormal, fbRandRot, fbAccumulator, fbFXAA, fbDOF, fbAO;
  var progAtoms, progBonds, progAccumulator, progAO, progFXAA, progDOF, progDisplayQuad;
  var ext;
  var sampleCount = 0,
      colorRendered = false,
      normalRendered = false;

  self.getAOProgress = function () {
    return sampleCount / 1024;
  };

  self.initialize = function () {
    // Initialize canvas/gl.
    canvas.width = canvas.height = resolution;
    gl = canvas.getContext('webgl');
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE);
    gl.clearColor(0, 0, 0, 0);
    gl.clearDepth(1);
    gl.viewport(0, 0, resolution, resolution);
    window.gl = gl; //debug

    ext = webgl.getExtensions(gl, ["EXT_frag_depth", "WEBGL_depth_texture"]);
    self.createTextures(); // Initialize shaders.

    progAtoms = loadProgram(gl, shaders.shaders['atom']);
    progBonds = loadProgram(gl, shaders.shaders['bond']);
    progDisplayQuad = loadProgram(gl, shaders.shaders['textured-quad']);
    progAccumulator = loadProgram(gl, shaders.shaders['accumulator']);
    progAO = loadProgram(gl, shaders.shaders['ao']);
    progFXAA = loadProgram(gl, shaders.shaders['fxaa']);
    progDOF = loadProgram(gl, shaders.shaders['dof']);
    var position = [-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]; // Initialize geometry.

    var attribs = webgl.buildAttribs(gl, {
      aPosition: 3
    });
    attribs.aPosition.buffer.set(new Float32Array(position));
    var count = position.length / 9;
    rDispQuad = new webgl.Renderable(gl, progDisplayQuad, attribs, count);
    rAccumulator = new webgl.Renderable(gl, progAccumulator, attribs, count);
    rAO = new webgl.Renderable(gl, progAO, attribs, count);
    rFXAA = new webgl.Renderable(gl, progFXAA, attribs, count);
    rDOF = new webgl.Renderable(gl, progDOF, attribs, count);
    samples = 0;
  };

  self.createTextures = function () {
    // fbRandRot
    tRandRotColor = new webgl.Texture(gl, 0, null, aoResolution, aoResolution);
    tRandRotDepth = new webgl.Texture(gl, 1, null, aoResolution, aoResolution, {
      internalFormat: gl.DEPTH_COMPONENT,
      format: gl.DEPTH_COMPONENT,
      type: gl.UNSIGNED_SHORT
    });
    fbRandRot = new webgl.Framebuffer(gl, [tRandRotColor], tRandRotDepth); // fbScene

    tSceneColor = new webgl.Texture(gl, 2, null, resolution, resolution);
    tSceneNormal = new webgl.Texture(gl, 3, null, resolution, resolution);
    tSceneDepth = new webgl.Texture(gl, 4, null, resolution, resolution, {
      internalFormat: gl.DEPTH_COMPONENT,
      format: gl.DEPTH_COMPONENT,
      type: gl.UNSIGNED_SHORT
    });
    fbSceneColor = new webgl.Framebuffer(gl, [tSceneColor], tSceneDepth);
    fbSceneNormal = new webgl.Framebuffer(gl, [tSceneNormal], tSceneDepth); // fbAccumulator

    tAccumulator = new webgl.Texture(gl, 5, null, resolution, resolution);
    tAccumulatorOut = new webgl.Texture(gl, 6, null, resolution, resolution);
    fbAccumulator = new webgl.Framebuffer(gl, [tAccumulatorOut]); // fbAO

    tAO = new webgl.Texture(gl, 7, null, resolution, resolution);
    fbAO = new webgl.Framebuffer(gl, [tAO]); // fbFXAA

    tFXAA = new webgl.Texture(gl, 8, null, resolution, resolution);
    tFXAAOut = new webgl.Texture(gl, 9, null, resolution, resolution);
    fbFXAA = new webgl.Framebuffer(gl, [tFXAAOut]); // fbDOF

    tDOF = new webgl.Texture(gl, 10, null, resolution, resolution);
    fbDOF = new webgl.Framebuffer(gl, [tDOF]);
  };

  self.setResolution = function (res, aoRes) {
    aoResolution = aoRes;
    resolution = res;
    canvas.width = canvas.height = resolution;
    gl.viewport(0, 0, resolution, resolution);
    self.createTextures();
  };

  self.setSystem = function (newSystem, view) {
    system = newSystem;

    function make36(arr) {
      var out = [];

      for (var i = 0; i < 36; i++) {
        out.push.apply(out, arr);
      }

      return out;
    } // Atoms


    var attribs = webgl.buildAttribs(gl, {
      aImposter: 3,
      aPosition: 3,
      aRadius: 1,
      aColor: 3
    });
    var imposter = [];
    var position = [];
    var radius = [];
    var color = [];

    for (var i = 0; i < system.atoms.length; i++) {
      imposter.push.apply(imposter, cube.position);
      var a = system.atoms[i];
      position.push.apply(position, make36([a.x, a.y, a.z]));
      radius.push.apply(radius, make36([elements[a.symbol].radius]));
      var c = elements[a.symbol].color;
      color.push.apply(color, make36([c[0], c[1], c[2]]));
    }

    attribs.aImposter.buffer.set(new Float32Array(imposter));
    attribs.aPosition.buffer.set(new Float32Array(position));
    attribs.aRadius.buffer.set(new Float32Array(radius));
    attribs.aColor.buffer.set(new Float32Array(color));
    var count = imposter.length / 9;
    rAtoms = new webgl.Renderable(gl, progAtoms, attribs, count); // Bonds

    if (view.bonds) {
      rBonds = null;

      if (system.bonds.length > 0) {
        var attribs = webgl.buildAttribs(gl, {
          aImposter: 3,
          aPosA: 3,
          aPosB: 3,
          aRadA: 1,
          aRadB: 1,
          aColA: 3,
          aColB: 3
        });
        var imposter = [];
        var posa = [];
        var posb = [];
        var rada = [];
        var radb = [];
        var cola = [];
        var colb = [];

        for (var i = 0; i < system.bonds.length; i++) {
          var b = system.bonds[i];
          if (b.cutoff > view.bondThreshold) break;
          imposter.push.apply(imposter, cube.position);
          posa.push.apply(posa, make36([b.posA.x, b.posA.y, b.posA.z]));
          posb.push.apply(posb, make36([b.posB.x, b.posB.y, b.posB.z]));
          rada.push.apply(rada, make36([b.radA]));
          radb.push.apply(radb, make36([b.radB]));
          cola.push.apply(cola, make36([b.colA.r, b.colA.g, b.colA.b]));
          colb.push.apply(colb, make36([b.colB.r, b.colB.g, b.colB.b]));
        }

        attribs.aImposter.buffer.set(new Float32Array(imposter));
        attribs.aPosA.buffer.set(new Float32Array(posa));
        attribs.aPosB.buffer.set(new Float32Array(posb));
        attribs.aRadA.buffer.set(new Float32Array(rada));
        attribs.aRadB.buffer.set(new Float32Array(radb));
        attribs.aColA.buffer.set(new Float32Array(cola));
        attribs.aColB.buffer.set(new Float32Array(colb));
        var count = imposter.length / 9;
        rBonds = new webgl.Renderable(gl, progBonds, attribs, count);
      }
    }
  };

  self.reset = function () {
    sampleCount = 0;
    colorRendered = false;
    normalRendered = false;
    tAccumulator.reset();
    tAccumulatorOut.reset();
  };

  self.render = function (view) {
    if (system === undefined) {
      return;
    }

    if (rAtoms == null) {
      return;
    }

    range = System.getRadius(system) * 2.0;

    if (!colorRendered) {
      color(view);
    } else if (!normalRendered) {
      normal(view);
    } else {
      for (var i = 0; i < view.spf; i++) {
        if (sampleCount > 1024) {
          break;
        }

        sample(view);
        sampleCount++;
      }
    }

    display(view);
  };

  function color(view) {
    colorRendered = true;
    gl.viewport(0, 0, resolution, resolution);
    fbSceneColor.bind();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var rect = View.getRect(view);
    var projection = glm.mat4.create();
    glm.mat4.ortho(projection, rect.left, rect.right, rect.bottom, rect.top, 0, range);
    var viewMat = glm.mat4.create();
    glm.mat4.lookAt(viewMat, [0, 0, 0], [0, 0, -1], [0, 1, 0]);
    var model = glm.mat4.create();
    glm.mat4.translate(model, model, [0, 0, -range / 2]);
    glm.mat4.multiply(model, model, view.rotation);
    progAtoms.setUniform("uProjection", "Matrix4fv", false, projection);
    progAtoms.setUniform("uView", "Matrix4fv", false, viewMat);
    progAtoms.setUniform("uModel", "Matrix4fv", false, model);
    progAtoms.setUniform("uBottomLeft", "2fv", [rect.left, rect.bottom]);
    progAtoms.setUniform("uTopRight", "2fv", [rect.right, rect.top]);
    progAtoms.setUniform("uAtomScale", "1f", 2.5 * view.atomScale);
    progAtoms.setUniform("uRelativeAtomScale", "1f", view.relativeAtomScale);
    progAtoms.setUniform("uRes", "1f", resolution);
    progAtoms.setUniform("uDepth", "1f", range);
    progAtoms.setUniform("uMode", "1i", 0);
    progAtoms.setUniform("uAtomShade", "1f", view.atomShade);
    rAtoms.render();

    if (view.bonds && rBonds != null) {
      fbSceneColor.bind();
      progBonds.setUniform("uProjection", "Matrix4fv", false, projection);
      progBonds.setUniform("uView", "Matrix4fv", false, viewMat);
      progBonds.setUniform("uModel", "Matrix4fv", false, model);
      progBonds.setUniform("uRotation", "Matrix4fv", false, view.rotation);
      progBonds.setUniform("uDepth", "1f", range);
      progBonds.setUniform("uBottomLeft", "2fv", [rect.left, rect.bottom]);
      progBonds.setUniform("uTopRight", "2fv", [rect.right, rect.top]);
      progBonds.setUniform("uRes", "1f", resolution);
      progBonds.setUniform("uBondRadius", "1f", 2.5 * View.getBondRadius(view));
      progBonds.setUniform("uBondShade", "1f", view.bondShade);
      progBonds.setUniform("uAtomScale", "1f", 2.5 * view.atomScale);
      progBonds.setUniform("uRelativeAtomScale", "1f", view.relativeAtomScale);
      progBonds.setUniform("uMode", "1i", 0);
      rBonds.render();
    }
  }

  function normal(view) {
    normalRendered = true;
    gl.viewport(0, 0, resolution, resolution);
    fbSceneNormal.bind();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var rect = View.getRect(view);
    var projection = glm.mat4.create();
    glm.mat4.ortho(projection, rect.left, rect.right, rect.bottom, rect.top, 0, range);
    var viewMat = glm.mat4.create();
    glm.mat4.lookAt(viewMat, [0, 0, 0], [0, 0, -1], [0, 1, 0]);
    var model = glm.mat4.create();
    glm.mat4.translate(model, model, [0, 0, -range / 2]);
    glm.mat4.multiply(model, model, view.rotation);
    progAtoms.setUniform("uProjection", "Matrix4fv", false, projection);
    progAtoms.setUniform("uView", "Matrix4fv", false, viewMat);
    progAtoms.setUniform("uModel", "Matrix4fv", false, model);
    progAtoms.setUniform("uBottomLeft", "2fv", [rect.left, rect.bottom]);
    progAtoms.setUniform("uTopRight", "2fv", [rect.right, rect.top]);
    progAtoms.setUniform("uAtomScale", "1f", 2.5 * view.atomScale);
    progAtoms.setUniform("uRelativeAtomScale", "1f", view.relativeAtomScale);
    progAtoms.setUniform("uRes", "1f", resolution);
    progAtoms.setUniform("uDepth", "1f", range);
    progAtoms.setUniform("uMode", "1i", 1);
    progAtoms.setUniform("uAtomShade", "1f", view.atomShade);
    rAtoms.render();

    if (view.bonds && rBonds != null) {
      fbSceneNormal.bind();
      progBonds.setUniform("uProjection", "Matrix4fv", false, projection);
      progBonds.setUniform("uView", "Matrix4fv", false, viewMat);
      progBonds.setUniform("uModel", "Matrix4fv", false, model);
      progBonds.setUniform("uRotation", "Matrix4fv", false, view.rotation);
      progBonds.setUniform("uDepth", "1f", range);
      progBonds.setUniform("uBottomLeft", "2fv", [rect.left, rect.bottom]);
      progBonds.setUniform("uTopRight", "2fv", [rect.right, rect.top]);
      progBonds.setUniform("uRes", "1f", resolution);
      progBonds.setUniform("uBondRadius", "1f", 2.5 * View.getBondRadius(view));
      progBonds.setUniform("uBondShade", "1f", view.bondShade);
      progBonds.setUniform("uAtomScale", "1f", 2.5 * view.atomScale);
      progBonds.setUniform("uRelativeAtomScale", "1f", view.relativeAtomScale);
      progBonds.setUniform("uMode", "1i", 1);
      rBonds.render();
    }
  }

  function sample(view) {
    gl.viewport(0, 0, aoResolution, aoResolution);
    var v = View.clone(view);
    v.zoom = 1 / range;
    v.translation.x = 0;
    v.translation.y = 0;
    var rot = glm.mat4.create();

    for (var i = 0; i < 3; i++) {
      var axis = glm.vec3.random(glm.vec3.create(), 1.0);
      glm.mat4.rotate(rot, rot, Math.random() * 10, axis);
    }

    v.rotation = glm.mat4.multiply(glm.mat4.create(), rot, v.rotation);
    fbRandRot.bind();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    var rect = View.getRect(v);
    var projection = glm.mat4.create();
    glm.mat4.ortho(projection, rect.left, rect.right, rect.bottom, rect.top, 0, range);
    var viewMat = glm.mat4.create();
    glm.mat4.lookAt(viewMat, [0, 0, 0], [0, 0, -1], [0, 1, 0]);
    var model = glm.mat4.create();
    glm.mat4.translate(model, model, [0, 0, -range / 2]);
    glm.mat4.multiply(model, model, v.rotation);
    progAtoms.setUniform("uProjection", "Matrix4fv", false, projection);
    progAtoms.setUniform("uView", "Matrix4fv", false, viewMat);
    progAtoms.setUniform("uModel", "Matrix4fv", false, model);
    progAtoms.setUniform("uBottomLeft", "2fv", [rect.left, rect.bottom]);
    progAtoms.setUniform("uTopRight", "2fv", [rect.right, rect.top]);
    progAtoms.setUniform("uAtomScale", "1f", 2.5 * v.atomScale);
    progAtoms.setUniform("uRelativeAtomScale", "1f", view.relativeAtomScale);
    progAtoms.setUniform("uRes", "1f", aoResolution);
    progAtoms.setUniform("uDepth", "1f", range);
    progAtoms.setUniform("uMode", "1i", 0);
    progAtoms.setUniform("uAtomShade", "1f", view.atomShade);
    rAtoms.render();

    if (view.bonds && rBonds != null) {
      progBonds.setUniform("uProjection", "Matrix4fv", false, projection);
      progBonds.setUniform("uView", "Matrix4fv", false, viewMat);
      progBonds.setUniform("uModel", "Matrix4fv", false, model);
      progBonds.setUniform("uRotation", "Matrix4fv", false, v.rotation);
      progBonds.setUniform("uDepth", "1f", range);
      progBonds.setUniform("uBottomLeft", "2fv", [rect.left, rect.bottom]);
      progBonds.setUniform("uTopRight", "2fv", [rect.right, rect.top]);
      progBonds.setUniform("uRes", "1f", aoResolution);
      progBonds.setUniform("uBondRadius", "1f", 2.5 * View.getBondRadius(view));
      progBonds.setUniform("uBondShade", "1f", view.bondShade);
      progBonds.setUniform("uAtomScale", "1f", 2.5 * view.atomScale);
      progBonds.setUniform("uRelativeAtomScale", "1f", view.relativeAtomScale);
      progBonds.setUniform("uMode", "1i", 0);
      rBonds.render();
    }

    gl.viewport(0, 0, resolution, resolution);
    var sceneRect = View.getRect(view);
    var rotRect = View.getRect(v);
    var invRot = glm.mat4.invert(glm.mat4.create(), rot);
    fbAccumulator.bind();
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    progAccumulator.setUniform("uSceneDepth", "1i", tSceneDepth.index);
    progAccumulator.setUniform("uSceneNormal", "1i", tSceneNormal.index);
    progAccumulator.setUniform("uRandRotDepth", "1i", tRandRotDepth.index);
    progAccumulator.setUniform("uAccumulator", "1i", tAccumulator.index);
    progAccumulator.setUniform("uSceneBottomLeft", "2fv", [sceneRect.left, sceneRect.bottom]);
    progAccumulator.setUniform("uSceneTopRight", "2fv", [sceneRect.right, sceneRect.top]);
    progAccumulator.setUniform("uRotBottomLeft", "2fv", [rotRect.left, rotRect.bottom]);
    progAccumulator.setUniform("uRotTopRight", "2fv", [rotRect.right, rotRect.top]);
    progAccumulator.setUniform("uRes", "1f", resolution);
    progAccumulator.setUniform("uDepth", "1f", range);
    progAccumulator.setUniform("uRot", "Matrix4fv", false, rot);
    progAccumulator.setUniform("uInvRot", "Matrix4fv", false, invRot);
    progAccumulator.setUniform("uSampleCount", "1i", sampleCount);
    rAccumulator.render();
    tAccumulator.activate();
    tAccumulator.bind();
    gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, resolution, resolution, 0);
  }

  function display(view) {
    gl.viewport(0, 0, resolution, resolution);

    if (view.fxaa > 0 || view.dofStrength > 0) {
      fbAO.bind();
    } else {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }

    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    progAO.setUniform("uSceneColor", "1i", tSceneColor.index);
    progAO.setUniform("uSceneDepth", "1i", tSceneDepth.index);
    progAO.setUniform("uAccumulatorOut", "1i", tAccumulatorOut.index);
    progAO.setUniform("uRes", "1f", resolution);
    progAO.setUniform("uAO", "1f", 2.0 * view.ao);
    progAO.setUniform("uBrightness", "1f", 2.0 * view.brightness);
    progAO.setUniform("uOutlineStrength", "1f", view.outline);
    rAO.render();

    if (view.fxaa > 0) {
      if (view.dofStrength > 0) {
        fbFXAA.bind();
      } else {
        gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      }

      for (var i = 0; i < view.fxaa; i++) {
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

        if (i == 0) {
          progFXAA.setUniform("uTexture", "1i", tAO.index);
        } else {
          progFXAA.setUniform("uTexture", "1i", tFXAA.index);
        }

        progFXAA.setUniform("uRes", "1f", resolution);
        rFXAA.render();
        tFXAA.activate();
        tFXAA.bind();
        gl.copyTexImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 0, 0, resolution, resolution, 0);
      }
    }

    if (view.dofStrength > 0) {
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      if (view.fxaa > 0) {
        progDOF.setUniform("uColor", "1i", tFXAA.index);
      } else {
        progDOF.setUniform("uColor", "1i", tAO.index);
      }

      progDOF.setUniform("uDepth", "1i", tSceneDepth.index);
      progDOF.setUniform("uDOFPosition", "1f", view.dofPosition);
      progDOF.setUniform("uDOFStrength", "1f", view.dofStrength);
      progDOF.setUniform("uRes", "1f", resolution);
      rDOF.render();
    } // gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    // gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // progDisplayQuad.setUniform("uTexture", "1i", tSceneColor.index);
    // progDisplayQuad.setUniform("uRes", "1f", resolution);
    // rDispQuad.render();

  }

  self.initialize();
};

function loadProgram(gl, src) {
  src = src.split('// __split__');
  return new webgl.Program(gl, src[0], src[1]);
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

//|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
function buildAttribs(gl, layout) {
  var attribs = {};

  for (var key in layout) {
    attribs[key] = {
      buffer: new GLBuffer(gl),
      size: layout[key]
    };
  }

  return attribs;
}

module.exports.buildAttribs = buildAttribs; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function getExtensions(gl, extArray) {
  var ext = {};

  for (var i = 0; i < extArray.length; i++) {
    var e = gl.getExtension(extArray[i]);

    if (e === null) {
      throw "Extension " + extArray[i] + " not available.";
    }

    ext[extArray[i]] = e;
  }

  return ext;
}

;
module.exports.getExtensions = getExtensions; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Framebuffer(gl, color, depth, ext) {
  var self = this;

  self.initialize = function () {
    self.fb = gl.createFramebuffer();
    self.bind();

    if (color.length > 1) {
      var drawBuffers = [];

      for (var i = 0; i < color.length; i++) {
        drawBuffers.push(ext["COLOR_ATTACHMENT" + i + "_WEBGL"]);
      }

      ext.drawBuffersWEBGL(drawBuffers);

      for (var i = 0; i < color.length; i++) {
        gl.framebufferTexture2D(gl.FRAMEBUFFER, ext["COLOR_ATTACHMENT" + i + "_WEBGL"], gl.TEXTURE_2D, color[i].texture, 0);
      }
    } else {
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, color[0].texture, 0);
    }

    if (depth !== undefined) {
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.DEPTH_ATTACHMENT, gl.TEXTURE_2D, depth.texture, 0);
    }
  };

  self.bind = function () {
    gl.bindFramebuffer(gl.FRAMEBUFFER, self.fb);
  };

  self.initialize();
}

;
module.exports.Framebuffer = Framebuffer; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Texture(gl, index, data, width, height, options) {
  options = options || {};
  options.target = options.target || gl.TEXTURE_2D;
  options.mag = options.mag || gl.NEAREST;
  options.min = options.min || gl.NEAREST;
  options.wraps = options.wraps || gl.CLAMP_TO_EDGE;
  options.wrapt = options.wrapt || gl.CLAMP_TO_EDGE;
  options.internalFormat = options.internalFormat || gl.RGBA;
  options.format = options.format || gl.RGBA;
  options.type = options.type || gl.UNSIGNED_BYTE;
  var self = this;

  self.initialize = function () {
    self.index = index;
    self.activate();
    self.texture = gl.createTexture();
    self.bind();
    gl.texParameteri(options.target, gl.TEXTURE_MAG_FILTER, options.mag);
    gl.texParameteri(options.target, gl.TEXTURE_MIN_FILTER, options.min);
    gl.texParameteri(options.target, gl.TEXTURE_WRAP_S, options.wraps);
    gl.texParameteri(options.target, gl.TEXTURE_WRAP_T, options.wrapt);
    gl.texImage2D(options.target, 0, options.internalFormat, width, height, 0, options.format, options.type, data);
  };

  self.bind = function () {
    gl.bindTexture(options.target, self.texture);
  };

  self.activate = function () {
    gl.activeTexture(gl.TEXTURE0 + self.index);
  };

  self.reset = function () {
    self.activate();
    self.bind();
    gl.texImage2D(options.target, 0, options.internalFormat, width, height, 0, options.format, options.type, data);
  };

  self.initialize();
}

module.exports.Texture = Texture; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function GLBuffer(gl) {
  var self = this;

  self.initialize = function () {
    self.buffer = gl.createBuffer();
  };

  self.bind = function () {
    gl.bindBuffer(gl.ARRAY_BUFFER, self.buffer);
  };

  self.set = function (data) {
    self.bind();
    gl.bufferData(gl.ARRAY_BUFFER, data, gl.STATIC_DRAW);
  };

  self.initialize();
}

;
module.exports.GLBuffer = GLBuffer; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Renderable(gl, program, buffers, primitiveCount) {
  var self = this;
  self.primitiveCount = primitiveCount;

  self.initialize = function () {};

  self.render = function () {
    program.use();

    for (name in buffers) {
      var buffer = buffers[name].buffer;
      var size = buffers[name].size;

      try {
        var location = program.attribs[name].location;
      } catch (e) {
        console.log("Could not find location for", name);
        throw e;
      }

      buffer.bind();
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
    }

    gl.drawArrays(gl.TRIANGLES, 0, 3 * primitiveCount);

    for (name in self.buffers) {
      gl.disableVertexAttribArray(program.attributes[name].location);
    }
  };

  self.initialize();
}

;
module.exports.Renderable = Renderable; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function InstancedRenderable(gl, program, buffers, primitiveCount, instancedExt) {
  var self = this;

  self.initialize = function () {};

  self.render = function () {
    program.use();

    for (name in buffers) {
      var buffer = buffers[name].buffer;
      var size = buffers[name].size;

      try {
        var location = program.attribs[name].location;
      } catch (e) {
        console.log("Could not find location for", name);
        throw e;
      }

      buffer.bind();
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, size, gl.FLOAT, false, 0, 0);
      instancedExt.vertexAttribDivisorANGLE(location, buffers[name].divisor);
    }

    instancedExt.drawArraysInstancedANGLE(gl.TRIANGLES, 0, 6 * 2 * 3, primitiveCount);

    for (name in self.buffers) {
      gl.disableVertexAttribArray(program.attributes[name].location);
    }
  };

  self.initialize();
}

;
module.exports.InstancedRenderable = InstancedRenderable; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

function Program(gl, vertexSource, fragmentSource) {
  var self = this;

  self.initialize = function () {
    self.program = self.compileProgram(vertexSource, fragmentSource);
    self.attribs = self.gatherAttribs();
    self.uniforms = self.gatherUniforms();
  };

  self.use = function () {
    gl.useProgram(self.program);
  };

  self.compileProgram = function (vertexSource, fragmentSource) {
    var vertexShader = self.compileShader(vertexSource, gl.VERTEX_SHADER);
    var fragmentShader = self.compileShader(fragmentSource, gl.FRAGMENT_SHADER);
    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.log(gl.getProgramInfoLog(program));
      throw "Failed to compile program.";
    }

    return program;
  };

  self.compileShader = function (source, type) {
    var shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      var err = gl.getShaderInfoLog(shader);
      var lineno = parseInt(err.split(':')[2]);
      var split = source.split("\n");

      for (var i in split) {
        var q = parseInt(i);
        console.log(q + "  " + split[i]);

        if (i == lineno - 1) {
          console.warn(err);
        }
      }

      typeString = type == gl.VERTEX_SHADER ? "vertex" : "fragment";
      throw "Failed to compile " + typeString + " shader.";
    }

    return shader;
  };

  self.setUniform = function (name, type, value) {
    var args = Array.prototype.slice.call(arguments, 2);
    self.use(); // Make this idempotent. At the context level, perhaps?

    try {
      var location = self.uniforms[name].location;
    } catch (e) {
      console.log(name);
      throw e;
    }

    gl['uniform' + type].apply(gl, [location].concat(args));
  };

  self.gatherUniforms = function () {
    var uniforms = {};
    var nUniforms = gl.getProgramParameter(self.program, gl.ACTIVE_UNIFORMS);

    for (var i = 0; i < nUniforms; i++) {
      var uniform = gl.getActiveUniform(self.program, i);
      uniforms[uniform.name] = {
        name: uniform.name,
        location: gl.getUniformLocation(self.program, uniform.name),
        type: uniform.type,
        size: uniform.size
      };
    }

    return uniforms;
  };

  self.gatherAttribs = function () {
    var attribs = {};
    var nAttribs = gl.getProgramParameter(self.program, gl.ACTIVE_ATTRIBUTES);

    for (var i = 0; i < nAttribs; i++) {
      var attrib = gl.getActiveAttrib(self.program, i);
      attribs[attrib.name] = {
        name: attrib.name,
        location: gl.getAttribLocation(self.program, attrib.name),
        type: attrib.type,
        size: attrib.size
      };
    }

    return attribs;
  }; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||


  self.initialize();
}

; //|||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

module.exports.Program = Program;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

var n = -1;
var p = 1;
module.exports = {
  position: [// -X
  n, n, n, n, n, p, n, p, p, n, n, n, n, p, p, n, p, n, // +X
  p, n, p, p, n, n, p, p, n, p, n, p, p, p, n, p, p, p, // -Y
  n, n, n, p, n, n, p, n, p, n, n, n, p, n, p, n, n, p, // +Y
  n, p, p, p, p, p, p, p, n, n, p, p, p, p, n, n, p, n, // -Z
  p, n, n, n, n, n, n, p, n, p, n, n, n, p, n, p, p, n, // +Z
  n, n, p, p, n, p, p, p, p, n, n, p, p, p, p, n, p, p],
  normal: [// -X
  n, 0, 0, n, 0, 0, n, 0, 0, n, 0, 0, n, 0, 0, n, 0, 0, // +X
  p, 0, 0, p, 0, 0, p, 0, 0, p, 0, 0, p, 0, 0, p, 0, 0, // -Y
  0, n, 0, 0, n, 0, 0, n, 0, 0, n, 0, 0, n, 0, 0, n, 0, // +Y
  0, p, 0, 0, p, 0, 0, p, 0, 0, p, 0, 0, p, 0, 0, p, 0, // -Z
  0, 0, n, 0, 0, n, 0, 0, n, 0, 0, n, 0, 0, n, 0, 0, n, // +Z
  0, 0, p, 0, 0, p, 0, 0, p, 0, 0, p, 0, 0, p, 0, 0, p]
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shaders = {};
shaders["accumulator"] = "#version 100\nprecision highp float;\n\nattribute vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1);\n}\n\n\n// __split__\n\n\n#version 100\nprecision highp float;\n\nuniform sampler2D uSceneDepth;\nuniform sampler2D uSceneNormal;\nuniform sampler2D uRandRotDepth;\nuniform sampler2D uAccumulator;\nuniform mat4 uRot;\nuniform mat4 uInvRot;\nuniform vec2 uSceneBottomLeft;\nuniform vec2 uSceneTopRight;\nuniform vec2 uRotBottomLeft;\nuniform vec2 uRotTopRight;\nuniform float uDepth;\nuniform float uRes;\nuniform int uSampleCount;\n\nvoid main() {\n\n    float dScene = texture2D(uSceneDepth, gl_FragCoord.xy/uRes).r;\n\n    vec3 r = vec3(uSceneBottomLeft + (gl_FragCoord.xy/uRes) * (uSceneTopRight - uSceneBottomLeft), 0.0);\n\n    r.z = -(dScene - 0.5) * uDepth;\n    r = vec3(uRot * vec4(r, 1));\n    float depth = -r.z/uDepth + 0.5;\n\n    vec2 p = (r.xy - uRotBottomLeft)/(uRotTopRight - uRotBottomLeft);\n\n    float dRandRot = texture2D(uRandRotDepth, p).r;\n\n    float ao = step(dRandRot, depth * 0.99);\n\n    vec3 normal = texture2D(uSceneNormal, gl_FragCoord.xy/uRes).rgb * 2.0 - 1.0;\n    vec3 dir = vec3(uInvRot * vec4(0, 0, 1, 0));\n    float mag = dot(dir, normal);\n    float sampled = step(0.0, mag);\n\n    ao *= sampled;\n\n    vec4 acc = texture2D(uAccumulator, gl_FragCoord.xy/uRes);\n\n    if (uSampleCount < 256) {\n        acc.r += ao/255.0;\n    } else if (uSampleCount < 512) {\n        acc.g += ao/255.0;\n    } else if (uSampleCount < 768) {\n        acc.b += ao/255.0;\n    } else {\n        acc.a += ao/255.0;\n    }\n        \n    gl_FragColor = acc;\n\n}\n";
shaders["ao"] = "#version 100\nprecision highp float;\n\nattribute vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1);\n}\n\n\n// __split__\n\n\n#version 100\nprecision highp float;\n\nuniform sampler2D uSceneColor;\nuniform sampler2D uSceneDepth;\nuniform sampler2D uAccumulatorOut;\nuniform float uRes;\nuniform float uAO;\nuniform float uBrightness;\nuniform float uOutlineStrength;\n\nvoid main() {\n    vec2 p = gl_FragCoord.xy/uRes;\n    vec4 sceneColor = texture2D(uSceneColor, p);\n    if (uOutlineStrength > 0.0) {\n        float depth = texture2D(uSceneDepth, p).r;\n        float r = 1.0/511.0;\n        float d0 = abs(texture2D(uSceneDepth, p + vec2(-r,  0)).r - depth);\n        float d1 = abs(texture2D(uSceneDepth, p + vec2( r,  0)).r - depth);\n        float d2 = abs(texture2D(uSceneDepth, p + vec2( 0, -r)).r - depth);\n        float d3 = abs(texture2D(uSceneDepth, p + vec2( 0,  r)).r - depth);\n        float d = max(d0, d1);\n        d = max(d, d2);\n        d = max(d, d3);\n        sceneColor.rgb *= pow(1.0 - d, uOutlineStrength * 32.0);\n        sceneColor.a = max(step(0.003, d), sceneColor.a);\n    }\n    vec4 dAccum = texture2D(uAccumulatorOut, p);\n    float shade = max(0.0, 1.0 - (dAccum.r + dAccum.g + dAccum.b + dAccum.a) * 0.25 * uAO);\n    shade = pow(shade, 2.0);\n    gl_FragColor = vec4(uBrightness * sceneColor.rgb * shade, sceneColor.a);\n}\n";
shaders["atom"] = "#version 100\nprecision highp float;\n\nattribute vec3 aImposter;\nattribute vec3 aPosition;\nattribute float aRadius;\nattribute vec3 aColor;\n\nuniform mat4 uView;\nuniform mat4 uProjection;\nuniform mat4 uModel;\nuniform float uAtomScale;\nuniform float uRelativeAtomScale;\nuniform float uAtomShade;\n\nvarying vec3 vColor;\nvarying vec3 vPosition;\nvarying float vRadius;\n\nvoid main() {\n    vRadius = uAtomScale * (1.0 + (aRadius - 1.0) * uRelativeAtomScale);\n    gl_Position = uProjection * uView * uModel * vec4(vRadius * aImposter + aPosition, 1.0);\n    vColor = mix(aColor, vec3(1,1,1), uAtomShade);\n    vPosition = vec3(uModel * vec4(aPosition, 1));\n}\n\n\n// __split__\n\n\n#version 100\n#extension GL_EXT_frag_depth: enable\nprecision highp float;\n\nuniform vec2 uBottomLeft;\nuniform vec2 uTopRight;\nuniform float uRes;\nuniform float uDepth;\nuniform int uMode;\n\nvarying vec3 vPosition;\nvarying float vRadius;\nvarying vec3 vColor;\n\nvec2 res = vec2(uRes, uRes);\n\nfloat raySphereIntersect(vec3 r0, vec3 rd) {\n    float a = dot(rd, rd);\n    vec3 s0_r0 = r0 - vPosition;\n    float b = 2.0 * dot(rd, s0_r0);\n    float c = dot(s0_r0, s0_r0) - (vRadius * vRadius);\n    float disc = b*b - 4.0*a*c;\n    if (disc <= 0.0) {\n        return -1.0;\n    }\n    return (-b - sqrt(disc))/(2.0*a);\n}\n\nvoid main() {\n    vec3 r0 = vec3(uBottomLeft + (gl_FragCoord.xy/res) * (uTopRight - uBottomLeft), 0.0);\n    vec3 rd = vec3(0, 0, -1);\n    float t = raySphereIntersect(r0, rd);\n    if (t < 0.0) {\n        discard;\n    }\n    vec3 coord = r0 + rd * t;\n    vec3 normal = normalize(coord - vPosition);\n    if (uMode == 0) {\n        gl_FragColor = vec4(vColor, 1);\n    } else if (uMode == 1) {\n        gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);\n    }\n    gl_FragDepthEXT = -coord.z/uDepth;\n}\n";
shaders["blur"] = "#version 100\nprecision highp float;\n\nattribute vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1);\n}\n\n\n// __split__\n\n\n#version 100\nprecision highp float;\n\nuniform sampler2D uTexture;\nuniform float uRes;\nuniform int leftRight;\n\nvoid main() {\n    vec2 dir;\n    if (leftRight == 1) {\n        dir = vec2(1,0)/uRes;\n    } else {\n        dir = vec2(0,1)/uRes;\n    }\n    const int range = 16;\n    vec4 sample = vec4(0,0,0,0);\n    for (int i = -range; i <= range; i++) {\n        vec2 p = gl_FragCoord.xy/uRes + dir * float(i);\n        sample += texture2D(uTexture, p);\n    }\n    sample /= float(range) * 2.0 + 1.0;\n    gl_FragColor = sample;\n}\n";
shaders["bond"] = "#version 100\nprecision highp float;\n\nattribute vec3 aImposter;\nattribute vec3 aPosA;\nattribute vec3 aPosB;\nattribute float aRadA;\nattribute float aRadB;\nattribute vec3 aColA;\nattribute vec3 aColB;\n\nuniform mat4 uView;\nuniform mat4 uProjection;\nuniform mat4 uModel;\nuniform mat4 uRotation;\nuniform float uBondRadius;\nuniform float uAtomScale;\nuniform float uRelativeAtomScale;\n\nvarying vec3 vNormal;\nvarying vec3 vPosA, vPosB;\nvarying float vRadA, vRadB;\nvarying vec3 vColA, vColB;\nvarying float vRadius;\n\nmat3 alignVector(vec3 a, vec3 b) {\n    vec3 v = cross(a, b);\n    float s = length(v);\n    float c = dot(a, b);\n    mat3 I = mat3(\n        1, 0, 0,\n        0, 1, 0,\n        0, 0, 1\n    );\n    mat3 vx = mat3(\n        0, v.z, -v.y,\n        -v.z, 0, v.x,\n        v.y, -v.x, 0\n    );\n    return I + vx + vx * vx * ((1.0 - c) / (s * s));\n}\n\nvoid main() {\n    vRadius = uBondRadius;\n    vec3 pos = vec3(aImposter);\n    // Scale the box in x and z to be bond-radius.\n    pos = pos * vec3(vRadius, 1, vRadius);\n    // Shift the origin-centered cube so that the bottom is at the origin.\n    pos = pos + vec3(0, 1, 0);\n    // Stretch the box in y so that it is the length of the bond.\n    pos = pos * vec3(1, length(aPosA - aPosB) * 0.5, 1);\n    // Find the rotation that aligns vec3(0, 1, 0) with vec3(uPosB - uPosA) and apply it.\n    vec3 a = normalize(vec3(-0.000001, 1.000001, 0.000001));\n    vec3 b = normalize(aPosB - aPosA);\n    mat3 R = alignVector(a, b);\n    pos = R * pos;\n    // Shift the cube so that the bottom is centered at the middle of atom A.\n    pos = pos + aPosA;\n\n    vec4 position = uModel * vec4(pos, 1);\n    gl_Position = uProjection * uView * position;\n    vPosA = aPosA;\n    vPosB = aPosB;\n    vRadA = uAtomScale * (1.0 + (aRadA - 1.0) * uRelativeAtomScale);\n    vRadB = uAtomScale * (1.0 + (aRadB - 1.0) * uRelativeAtomScale);\n    vColA = aColA;\n    vColB = aColB;\n}\n\n\n// __split__\n\n\n#version 100\n#extension GL_EXT_frag_depth: enable\nprecision highp float;\n\nuniform mat4 uRotation;\nuniform vec2 uBottomLeft;\nuniform vec2 uTopRight;\nuniform float uDepth;\nuniform float uRes;\nuniform float uBondShade;\nuniform int uMode;\n\nvarying vec3 vPosA, vPosB;\nvarying float vRadA, vRadB;\nvarying vec3 vColA, vColB;\nvarying float vRadius;\n\nmat3 alignVector(vec3 a, vec3 b) {\n    vec3 v = cross(a, b);\n    float s = length(v);\n    float c = dot(a, b);\n    mat3 I = mat3(\n        1, 0, 0,\n        0, 1, 0,\n        0, 0, 1\n    );\n    mat3 vx = mat3(\n        0, v.z, -v.y,\n        -v.z, 0, v.x,\n        v.y, -v.x, 0\n    );\n    return I + vx + vx * vx * ((1.0 - c) / (s * s));\n}\n\nvoid main() {\n\n    vec2 res = vec2(uRes, uRes);\n    vec3 r0 = vec3(uBottomLeft + (gl_FragCoord.xy/res) * (uTopRight - uBottomLeft), uDepth/2.0);\n    vec3 rd = vec3(0, 0, -1);\n\n    vec3 i = normalize(vPosB - vPosA);\n         i = vec3(uRotation * vec4(i, 0));\n    vec3 j = normalize(vec3(-0.000001, 1.000001, 0.000001));\n    mat3 R = alignVector(i, j);\n\n    vec3 r0p = r0 - vec3(uRotation * vec4(vPosA, 0));\n    r0p = R * r0p;\n    vec3 rdp = R * rd;\n\n    float a = dot(rdp.xz, rdp.xz);\n    float b = 2.0 * dot(rdp.xz, r0p.xz);\n    float c = dot(r0p.xz, r0p.xz) - vRadius*vRadius;\n    float disc = b*b - 4.0*a*c;\n    if (disc <= 0.0) {\n        discard;\n    }\n    float t = (-b - sqrt(disc))/(2.0*a);\n    if (t < 0.0) {\n        discard;\n    }\n\n    vec3 coord = r0p + rdp * t;\n    if (coord.y < 0.0 || coord.y > length(vPosA - vPosB)) {\n        discard;\n    }\n\n    vec3 color;\n    if (coord.y < vRadA + 0.5 * (length(vPosA - vPosB) - (vRadA + vRadB))) {\n        color = vColA;\n    } else {\n        color = vColB;\n    }\n\n    color = mix(color, vec3(1,1,1), uBondShade);\n\n    R = alignVector(j, i);\n    vec3 normal = normalize(R * vec3(coord.x, 0, coord.z));\n\n    coord = r0 + rd * t;\n    if (uMode == 0) {\n        gl_FragColor = vec4(color, 1);\n    } else if (uMode == 1) {\n        gl_FragColor = vec4(normal * 0.5 + 0.5, 1.0);\n    }\n    gl_FragDepthEXT = -(coord.z - uDepth/2.0)/uDepth;\n}\n";
shaders["dof"] = "#version 100\nprecision highp float;\n\nattribute vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1);\n}\n\n\n// __split__\n\n\n#version 100\nprecision highp float;\n\nuniform sampler2D uColor;\nuniform sampler2D uDepth;\nuniform float uRes;\nuniform float uDOFPosition;\nuniform float uDOFStrength;\nuniform int leftRight;\n\nvoid main() {\n\n    vec2 samples[64];\n    samples[0] = vec2(0.857612, 0.019885);\n    samples[1] = vec2(0.563809, -0.028071);\n    samples[2] = vec2(0.825599, -0.346856);\n    samples[3] = vec2(0.126584, -0.380959);\n    samples[4] = vec2(0.782948, 0.594322);\n    samples[5] = vec2(0.292148, -0.543265);\n    samples[6] = vec2(0.130700, 0.330220);\n    samples[7] = vec2(0.236088, 0.159604);\n    samples[8] = vec2(-0.305259, 0.810505);\n    samples[9] = vec2(0.269616, 0.923026);\n    samples[10] = vec2(0.484486, 0.371845);\n    samples[11] = vec2(-0.638057, 0.080447);\n    samples[12] = vec2(0.199629, 0.667280);\n    samples[13] = vec2(-0.861043, -0.370583);\n    samples[14] = vec2(-0.040652, -0.996174);\n    samples[15] = vec2(0.330458, -0.282111);\n    samples[16] = vec2(0.647795, -0.214354);\n    samples[17] = vec2(0.030422, -0.189908);\n    samples[18] = vec2(0.177430, -0.721124);\n    samples[19] = vec2(-0.461163, -0.327434);\n    samples[20] = vec2(-0.410012, -0.734504);\n    samples[21] = vec2(-0.616334, -0.626069);\n    samples[22] = vec2(0.590759, -0.726479);\n    samples[23] = vec2(-0.590794, 0.805365);\n    samples[24] = vec2(-0.924561, -0.163739);\n    samples[25] = vec2(-0.323028, 0.526960);\n    samples[26] = vec2(0.642128, 0.752577);\n    samples[27] = vec2(0.173625, -0.952386);\n    samples[28] = vec2(0.759014, 0.330311);\n    samples[29] = vec2(-0.360526, -0.032013);\n    samples[30] = vec2(-0.035320, 0.968156);\n    samples[31] = vec2(0.585478, -0.431068);\n    samples[32] = vec2(-0.244766, -0.906947);\n    samples[33] = vec2(-0.853096, 0.184615);\n    samples[34] = vec2(-0.089061, 0.104648);\n    samples[35] = vec2(-0.437613, 0.285308);\n    samples[36] = vec2(-0.654098, 0.379841);\n    samples[37] = vec2(-0.128663, 0.456572);\n    samples[38] = vec2(0.015980, -0.568170);\n    samples[39] = vec2(-0.043966, -0.771940);\n    samples[40] = vec2(0.346512, -0.071238);\n    samples[41] = vec2(-0.207921, -0.209121);\n    samples[42] = vec2(-0.624075, -0.189224);\n    samples[43] = vec2(-0.120618, 0.689339);\n    samples[44] = vec2(-0.664679, -0.410200);\n    samples[45] = vec2(0.371945, -0.880573);\n    samples[46] = vec2(-0.743251, 0.629998);\n    samples[47] = vec2(-0.191926, -0.413946);\n    samples[48] = vec2(0.449574, 0.833373);\n    samples[49] = vec2(0.299587, 0.449113);\n    samples[50] = vec2(-0.900432, 0.399319);\n    samples[51] = vec2(0.762613, -0.544796);\n    samples[52] = vec2(0.606462, 0.174233);\n    samples[53] = vec2(0.962185, -0.167019);\n    samples[54] = vec2(0.960990, 0.249552);\n    samples[55] = vec2(0.570397, 0.559146);\n    samples[56] = vec2(-0.537514, 0.555019);\n    samples[57] = vec2(0.108491, -0.003232);\n    samples[58] = vec2(-0.237693, -0.615428);\n    samples[59] = vec2(-0.217313, 0.261084);\n    samples[60] = vec2(-0.998966, 0.025692);\n    samples[61] = vec2(-0.418554, -0.527508);\n    samples[62] = vec2(-0.822629, -0.567797);\n    samples[63] = vec2(0.061945, 0.522105);\n\n    float invRes = 1.0/uRes;\n    vec2 coord = gl_FragCoord.xy * invRes;\n\n    float strength = uDOFStrength * uRes/768.0;\n\n    float depth = texture2D(uDepth, coord).r;\n    float range = uDOFPosition - depth;\n    float scale = abs(range);\n\n    vec4 sample = texture2D(uColor, coord);\n    float count = 1.0;\n    for(int i = 0; i < 64; i++) {\n        vec2 p = samples[i];\n        p = coord + scale * 64.0 * strength * p * invRes;\n        float d = texture2D(uDepth, p).r;\n        float r = uDOFPosition - d;\n        float s = abs(r);\n        sample += texture2D(uColor, p) * s;\n        count += s;\n    }\n\n    gl_FragColor = sample/count;\n}";
shaders["fxaa"] = "#version 100\nprecision highp float;\n\nattribute vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1);\n}\n\n\n// __split__\n\n\n#version 100\nprecision highp float;\n\nuniform sampler2D uTexture;\nuniform float uRes;\n\nvoid main() {\n    float FXAA_SPAN_MAX = 8.0;\n    float FXAA_REDUCE_MUL = 1.0/8.0;\n    float FXAA_REDUCE_MIN = 1.0/128.0;\n\n    vec2 texCoords = gl_FragCoord.xy/uRes;\n\n    vec4 rgbNW = texture2D(uTexture, texCoords + (vec2(-1.0, -1.0) / uRes));\n    vec4 rgbNE = texture2D(uTexture, texCoords + (vec2(1.0, -1.0) / uRes));\n    vec4 rgbSW = texture2D(uTexture, texCoords + (vec2(-1.0, 1.0) / uRes));\n    vec4 rgbSE = texture2D(uTexture, texCoords + (vec2(1.0, 1.0) / uRes));\n    vec4 rgbM  = texture2D(uTexture, texCoords);\n\n    vec4 luma = vec4(0.299, 0.587, 0.114, 1.0);\n    float lumaNW = dot(rgbNW, luma);\n    float lumaNE = dot(rgbNE, luma);\n    float lumaSW = dot(rgbSW, luma);\n    float lumaSE = dot(rgbSE, luma);\n    float lumaM  = dot(rgbM,  luma);\n\n    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));\n    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));\n\n    vec2 dir;\n    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));\n    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));\n\n    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) * (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);\n\n    float rcpDirMin = 1.0/(min(abs(dir.x), abs(dir.y)) + dirReduce);\n\n    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX), max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX), dir * rcpDirMin)) / uRes;\n\n    vec4 rgbA = (1.0/2.0) * \n        (texture2D(uTexture, texCoords.xy + dir * (1.0/3.0 - 0.5)) + \n         texture2D(uTexture, texCoords.xy + dir * (2.0/3.0 - 0.5)));\n    vec4 rgbB = rgbA * (1.0/2.0) + (1.0/4.0) * \n        (texture2D(uTexture, texCoords.xy + dir * (0.0/3.0 - 0.5)) +\n         texture2D(uTexture, texCoords.xy + dir * (3.0/3.0 - 0.5)));\n    float lumaB = dot(rgbB, luma);\n\n    if((lumaB < lumaMin) || (lumaB > lumaMax)){\n        gl_FragColor = rgbA;\n    } else {\n        gl_FragColor = rgbB;\n    }\n\n}";
shaders["textured-quad"] = "#version 100\nprecision highp float;\n\nattribute vec3 aPosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 1);\n}\n\n\n// __split__\n\n\n#version 100\nprecision highp float;\n\nuniform sampler2D uTexture;\nuniform float uRes;\n\nvoid main() {\n    gl_FragColor = texture2D(uTexture, gl_FragCoord.xy/uRes);\n}\n";
module.exports = {
  shaders: shaders
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var speckView = __webpack_require__(8);

module.exports = function (args) {
  if (arguments.length > 1) {
    throw "Error: The Speck Interactions module has changed!";
  } else if (arguments.length === 0 || _typeof(args) !== "object") {
    throw "Error: Arguments not provided to interactions";
  }

  var scrollZoom = args.scrollZoom === undefined ? true : args.scrollZoom;
  var container = args.container;
  var getRotation = args.getRotation;
  var setRotation = args.setRotation;
  var getTranslation = args.getTranslation;
  var setTranslation = args.setTranslation;
  var getZoom = args.getZoom;
  var setZoom = args.setZoom;
  var refreshView = args.refreshView;
  var interactions = {
    buttonDown: false,
    shiftDown: false,
    lastX: 0.0,
    lastY: 0.0
  };

  function mousedownFn(e) {
    if (e.button === 0) {
      interactions = {
        buttonDown: true,
        shiftDown: interactions.shiftDown,
        lastX: e.clientX,
        lastY: e.clientY
      };
    }
  }

  container.addEventListener("mousedown", mousedownFn);

  function mouseupFn(e) {
    if (e.button === 0) {
      if (!interactions.buttonDown) {
        return;
      }

      interactions.buttonDown = false;
    }
  }

  window.addEventListener("mouseup", mouseupFn);

  function keychangeFn(e) {
    interactions.shiftDown = e.shiftKey;
  }

  window.addEventListener("keydown", keychangeFn);
  window.addEventListener("keyup", keychangeFn);

  function mousemoveFn(e) {
    if (!interactions.buttonDown || e.buttons === 0) {
      return;
    } // prevents interaction with other page elements while dragging


    e.preventDefault();
    var dx = e.clientX - interactions.lastX;
    var dy = e.clientY - interactions.lastY;

    if (dx === 0 && dy === 0) {
      return;
    }

    interactions.lastX = e.clientX;
    interactions.lastY = e.clientY;

    if (interactions.shiftDown) {
      var translation = getTranslation();
      var inverseZoom = 0.001 / getZoom();
      setTranslation({
        x: translation.x - dx * inverseZoom,
        y: translation.y + dy * inverseZoom
      });
    } else {
      var viewDummyObj = {
        rotation: new Float32Array(getRotation())
      };
      speckView.rotate(viewDummyObj, dx, dy);
      setRotation(viewDummyObj.rotation);
    }

    refreshView();
  }

  window.addEventListener("mousemove", mousemoveFn);

  function wheelFn(e) {
    // prevents the page from scrolling when using scroll wheel inside speck component
    e.preventDefault();
    setZoom(getZoom() * (e.deltaY < 0 ? 1 / 0.9 : 0.9));
    refreshView();
  }

  if (scrollZoom) {
    container.addEventListener("wheel", wheelFn);
  }

  function removeAllEventListeners() {
    container.removeEventListener("mousedown", mousedownFn);
    window.removeEventListener("mouseup", mouseupFn);
    window.removeEventListener("keydown", keychangeFn);
    window.removeEventListener("keyup", keychangeFn);
    window.removeEventListener("mousemove", mousemoveFn);
    container.removeEventListener("wheel", wheelFn);
  }

  return removeAllEventListeners;
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  default: {
    atomScale: 0.6,
    relativeAtomScale: 1.0,
    bondScale: 0.5,
    ao: 0.75,
    aoRes: 256,
    brightness: 0.5,
    outline: 0.0,
    spf: 32,
    bonds: false,
    bondThreshold: 1.2,
    bondShade: 0.5,
    atomShade: 0.5,
    dofStrength: 0.0,
    dofPosition: 0.5,
    fxaa: 1
  },
  stickball: {
    atomScale: 0.24,
    relativeAtomScale: 0.64,
    bondScale: 0.5,
    bonds: true,
    bondThreshold: 1.2
  },
  toon: {
    ao: 0,
    spf: 0,
    brightness: 0.5,
    outline: 1
  },
  licorice: {
    atomScale: 0.1,
    relativeAtomScale: 0,
    bondScale: 1,
    bonds: true,
    bondThreshold: 1.2
  }
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/lib/components/AlignmentChart.react.js
var AlignmentChart_react = __webpack_require__(10);

// EXTERNAL MODULE: ./src/lib/components/Circos.react.js + 1 modules
var Circos_react = __webpack_require__(18);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(0);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/fornac/dist/scripts/fornac.js
var fornac = __webpack_require__(22);

// EXTERNAL MODULE: ./node_modules/ramda/es/equals.js + 8 modules
var equals = __webpack_require__(43);

// CONCATENATED MODULE: ./src/lib/components/FornaContainer.react.js
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
 * FornaContainer is a force-directed graph that is used to visualize
 * the secondary structure of biomolecules. It is based on the fornac
 * library (https://github.com/ViennaRNA/fornac).
 */

var FornaContainer_react_FornaContainer =
/*#__PURE__*/
function (_Component) {
  _inherits(FornaContainer, _Component);

  function FornaContainer(props) {
    var _this;

    _classCallCheck(this, FornaContainer);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(FornaContainer).call(this, props));
    _this.renderNewSequences = _this.renderNewSequences.bind(_assertThisInitialized(_this));
    _this.containerRef = external_React_default.a.createRef();
    return _this;
  }

  _createClass(FornaContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          height = _this$props.height,
          width = _this$props.width,
          nodeFillColor = _this$props.nodeFillColor,
          colorScheme = _this$props.colorScheme,
          customColors = _this$props.customColors,
          allowPanningAndZooming = _this$props.allowPanningAndZooming;
      this._fornaContainer = new fornac["FornaContainer"](this.containerRef.current, {
        initialSize: [width, height],
        allowPanningAndZooming: allowPanningAndZooming
      }); // initialize the correct colors

      this._fornaContainer.addCustomColors(customColors);

      this._fornaContainer.changeColorScheme(colorScheme);

      this.renderNewSequences();

      if (nodeFillColor !== undefined) {
        this._fornaContainer.setOutlineColor(nodeFillColor);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.renderNewSequences();
    }
  }, {
    key: "renderNewSequences",
    value: function renderNewSequences() {
      var _this2 = this;

      var sequences = this.props.sequences;

      if (this._fornaContainer) {
        this._fornaContainer.clearNodes();

        sequences.forEach(function (seq) {
          var unpackedOptions = Object.assign({}, seq.options, {
            sequence: seq.sequence,
            structure: seq.structure
          });

          _this2._fornaContainer.addRNA(seq.structure, unpackedOptions);
        });
      }
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props2 = this.props,
          sequences = _this$props2.sequences,
          colorScheme = _this$props2.colorScheme;

      if (!equals["a" /* default */](sequences, nextProps.sequences)) {
        return true;
      }

      this._fornaContainer.addCustomColors(nextProps.customColors);

      this._fornaContainer.changeColorScheme(colorScheme);

      if (nextProps.nodeFillColor !== undefined) {
        this._fornaContainer.setOutlineColor(nextProps.nodeFillColor);
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return external_React_default.a.createElement("div", {
        id: this.props.id,
        ref: this.containerRef,
        style: {
          outline: 'none'
        }
      });
    }
  }]);

  return FornaContainer;
}(external_React_["Component"]);


FornaContainer_react_FornaContainer.propTypes = {
  /**
   * The ID of this component, used to identify dash components in
   * callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: prop_types_default.a.string,

  /**
   * The height (in px) of the container in which the molecules will
   * be displayed.
   */
  height: prop_types_default.a.number,

  /**
   * The width (in px) of the container in which the molecules will
   * be displayed.
   */
  width: prop_types_default.a.number,

  /**
   * The molecules that will be displayed.
   */
  sequences: prop_types_default.a.arrayOf(prop_types_default.a.exact({
    /**
     * A string representing the RNA nucleotide sequence of
     * the RNA molecule.
     */
    sequence: prop_types_default.a.string.isRequired,

    /**
     * A dot-bracket string
     * (https://software.broadinstitute.org/software/igv/RNAsecStructure)
     * that specifies the secondary structure of the RNA
     * molecule.
     */
    structure: prop_types_default.a.string.isRequired,

    /**
     * Additional options to be applied to the rendering of
     * the RNA molecule.
     */
    options: prop_types_default.a.exact({
      /**
       * Indicate whether the force-directed layout will be
       * applied to the displayed molecule. Enabling this
       * option allows users to change the layout of the
       * molecule by selecting and dragging the individual
       * nucleotide nodes. True by default.
       */
      applyForce: prop_types_default.a.bool,

      /**
       * This only makes sense in connection with the
       * applyForce argument. If it's true, the external
       * loops will be arranged in a nice circle. If false,
       * they will be allowed to flop around as the force
       * layout dictates. True by default.
       */
      circularizeExternal: prop_types_default.a.bool,

      /**
       * Change how often nucleotide numbers are labelled
       * with their number. 10 by default.
       */
      labelInterval: prop_types_default.a.number,

      /**
       * The molecule name; this is used in custom color
       * scales.
       */
      name: prop_types_default.a.string,

      /**
       * Whether or not this molecule should "avoid" other
       * molecules in the map.
       */
      avoidOthers: prop_types_default.a.bool
    })
  })),

  /**
   * The fill color for all of the nodes. This will override any
   * color scheme defined in colorScheme.
   */
  nodeFillColor: prop_types_default.a.string,

  /**
   * The color scheme that is used to color the nodes.
   */
  colorScheme: prop_types_default.a.oneOf(['sequence', 'structure', 'positions', 'custom']),

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
  customColors: prop_types_default.a.exact({
    /**
     * The limits for the color scale. This is used with the range
     * specified in `range` to calculate the color of a given
     * nucleotide, based on the number that it is assigned.
     */
    domain: prop_types_default.a.arrayOf(prop_types_default.a.number),

    /**
     * The range of colors that will be used in conjunction with
     * the `domain` prop.
     */
    range: prop_types_default.a.arrayOf(prop_types_default.a.string),

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
    colorValues: prop_types_default.a.objectOf(prop_types_default.a.objectOf(prop_types_default.a.oneOfType([prop_types_default.a.string, prop_types_default.a.number])))
  }),

  /**
   * Allow users to zoom in and pan the display. If this is enabled,
   * then pressing the 'c' key on the keyboard will center the view.
   */
  allowPanningAndZooming: prop_types_default.a.bool,

  /**
   * Dash-assigned callback that gets fired when the value changes.
   */
  setProps: prop_types_default.a.func
};
FornaContainer_react_FornaContainer.defaultProps = {
  height: 500,
  width: 300,
  sequences: [],
  allowPanningAndZooming: true,
  labelInterval: 10,
  colorScheme: 'sequence'
};
// EXTERNAL MODULE: ./src/lib/components/Ideogram.react.js
var Ideogram_react = __webpack_require__(11);

// EXTERNAL MODULE: ./src/lib/components/Molecule2dViewer.react.js
var Molecule2dViewer_react = __webpack_require__(12);

// EXTERNAL MODULE: ./src/lib/components/Molecule3dViewer.js
var Molecule3dViewer = __webpack_require__(13);

// EXTERNAL MODULE: ./src/lib/components/NeedlePlot.react.js
var NeedlePlot_react = __webpack_require__(14);

// EXTERNAL MODULE: ./src/lib/components/OncoPrint.react.js
var OncoPrint_react = __webpack_require__(15);

// EXTERNAL MODULE: ./src/lib/components/SequenceViewer.react.js
var SequenceViewer_react = __webpack_require__(16);

// EXTERNAL MODULE: ./src/lib/components/Speck.react.js
var Speck_react = __webpack_require__(17);

// CONCATENATED MODULE: ./src/lib/index.js
/* concated harmony reexport AlignmentChart */__webpack_require__.d(__webpack_exports__, "AlignmentChart", function() { return AlignmentChart_react["a" /* default */]; });
/* concated harmony reexport Circos */__webpack_require__.d(__webpack_exports__, "Circos", function() { return Circos_react["a" /* default */]; });
/* concated harmony reexport FornaContainer */__webpack_require__.d(__webpack_exports__, "FornaContainer", function() { return FornaContainer_react_FornaContainer; });
/* concated harmony reexport Ideogram */__webpack_require__.d(__webpack_exports__, "Ideogram", function() { return Ideogram_react["a" /* default */]; });
/* concated harmony reexport Molecule2dViewer */__webpack_require__.d(__webpack_exports__, "Molecule2dViewer", function() { return Molecule2dViewer_react["a" /* default */]; });
/* concated harmony reexport Molecule3dViewer */__webpack_require__.d(__webpack_exports__, "Molecule3dViewer", function() { return Molecule3dViewer["a" /* default */]; });
/* concated harmony reexport NeedlePlot */__webpack_require__.d(__webpack_exports__, "NeedlePlot", function() { return NeedlePlot_react["a" /* default */]; });
/* concated harmony reexport OncoPrint */__webpack_require__.d(__webpack_exports__, "OncoPrint", function() { return OncoPrint_react["a" /* default */]; });
/* concated harmony reexport SequenceViewer */__webpack_require__.d(__webpack_exports__, "SequenceViewer", function() { return SequenceViewer_react["a" /* default */]; });
/* concated harmony reexport Speck */__webpack_require__.d(__webpack_exports__, "Speck", function() { return Speck_react["a" /* default */]; });
/* eslint-disable import/prefer-default-export */












/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_arrayFromIterator.js
function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_includesWith.js
function _includesWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_functionName.js
function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
}
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_has.js
var _has = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_objectIs.js
// Based on https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function _objectIs(a, b) {
  // SameValue algorithm
  if (a === b) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
}

/* harmony default export */ var internal_objectIs = (typeof Object.is === 'function' ? Object.is : _objectIs);
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArguments.js


var _isArguments_toString = Object.prototype.toString;
var _isArguments_isArguments = /*#__PURE__*/function () {
  return _isArguments_toString.call(arguments) === '[object Arguments]' ? function _isArguments(x) {
    return _isArguments_toString.call(x) === '[object Arguments]';
  } : function _isArguments(x) {
    return Object(_has["a" /* default */])('callee', x);
  };
}();

/* harmony default export */ var internal_isArguments = (_isArguments_isArguments);
// CONCATENATED MODULE: ./node_modules/ramda/es/keys.js




// cover IE < 9 keys issues
var hasEnumBug = ! /*#__PURE__*/{ toString: null }.propertyIsEnumerable('toString');
var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
// Safari bug
var hasArgsEnumBug = /*#__PURE__*/function () {
  'use strict';

  return arguments.propertyIsEnumerable('length');
}();

var contains = function contains(list, item) {
  var idx = 0;
  while (idx < list.length) {
    if (list[idx] === item) {
      return true;
    }
    idx += 1;
  }
  return false;
};

/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @see R.keysIn, R.values
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
var keys_keys = typeof Object.keys === 'function' && !hasArgsEnumBug ? /*#__PURE__*/Object(_curry1["a" /* default */])(function keys(obj) {
  return Object(obj) !== obj ? [] : Object.keys(obj);
}) : /*#__PURE__*/Object(_curry1["a" /* default */])(function keys(obj) {
  if (Object(obj) !== obj) {
    return [];
  }
  var prop, nIdx;
  var ks = [];
  var checkArgsLength = hasArgsEnumBug && internal_isArguments(obj);
  for (prop in obj) {
    if (Object(_has["a" /* default */])(prop, obj) && (!checkArgsLength || prop !== 'length')) {
      ks[ks.length] = prop;
    }
  }
  if (hasEnumBug) {
    nIdx = nonEnumerableProps.length - 1;
    while (nIdx >= 0) {
      prop = nonEnumerableProps[nIdx];
      if (Object(_has["a" /* default */])(prop, obj) && !contains(ks, prop)) {
        ks[ks.length] = prop;
      }
      nIdx -= 1;
    }
  }
  return ks;
});
/* harmony default export */ var es_keys = (keys_keys);
// CONCATENATED MODULE: ./node_modules/ramda/es/type.js


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 *      R.type(() => {}); //=> "Function"
 *      R.type(undefined); //=> "Undefined"
 */
var type = /*#__PURE__*/Object(_curry1["a" /* default */])(function type(val) {
  return val === null ? 'Null' : val === undefined ? 'Undefined' : Object.prototype.toString.call(val).slice(8, -1);
});
/* harmony default export */ var es_type = (type);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_equals.js








/**
 * private _uniqContentEquals function.
 * That function is checking equality of 2 iterator contents with 2 assumptions
 * - iterators lengths are the same
 * - iterators values are unique
 *
 * false-positive result will be returned for comparision of, e.g.
 * - [1,2,3] and [1,2,3,4]
 * - [1,1,1] and [1,2,3]
 * */

function _uniqContentEquals(aIterator, bIterator, stackA, stackB) {
  var a = _arrayFromIterator(aIterator);
  var b = _arrayFromIterator(bIterator);

  function eq(_a, _b) {
    return _equals(_a, _b, stackA.slice(), stackB.slice());
  }

  // if *a* array contains any element that is not included in *b*
  return !_includesWith(function (b, aItem) {
    return !_includesWith(eq, aItem, b);
  }, b, a);
}

function _equals(a, b, stackA, stackB) {
  if (internal_objectIs(a, b)) {
    return true;
  }

  var typeA = es_type(a);

  if (typeA !== es_type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a['fantasy-land/equals'] === 'function' || typeof b['fantasy-land/equals'] === 'function') {
    return typeof a['fantasy-land/equals'] === 'function' && a['fantasy-land/equals'](b) && typeof b['fantasy-land/equals'] === 'function' && b['fantasy-land/equals'](a);
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) && typeof b.equals === 'function' && b.equals(a);
  }

  switch (typeA) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' && _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && internal_objectIs(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!internal_objectIs(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source && a.global === b.global && a.ignoreCase === b.ignoreCase && a.multiline === b.multiline && a.sticky === b.sticky && a.unicode === b.unicode)) {
        return false;
      }
      break;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  switch (typeA) {
    case 'Map':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.entries(), b.entries(), stackA.concat([a]), stackB.concat([b]));
    case 'Set':
      if (a.size !== b.size) {
        return false;
      }

      return _uniqContentEquals(a.values(), b.values(), stackA.concat([a]), stackB.concat([b]));
    case 'Arguments':
    case 'Array':
    case 'Object':
    case 'Boolean':
    case 'Number':
    case 'String':
    case 'Date':
    case 'Error':
    case 'RegExp':
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = es_keys(a);
  if (keysA.length !== es_keys(b).length) {
    return false;
  }

  var extendedStackA = stackA.concat([a]);
  var extendedStackB = stackB.concat([b]);

  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(Object(_has["a" /* default */])(key, b) && _equals(b[key], a[key], extendedStackA, extendedStackB))) {
      return false;
    }
    idx -= 1;
  }
  return true;
}
// CONCATENATED MODULE: ./node_modules/ramda/es/equals.js



/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      const a = {}; a.v = a;
 *      const b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
var equals_equals = /*#__PURE__*/Object(_curry2["a" /* default */])(function equals(a, b) {
  return _equals(a, b, [], []);
});
/* harmony default export */ var es_equals = __webpack_exports__["a"] = (equals_equals);

/***/ })
/******/ ]);