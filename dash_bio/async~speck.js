(window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || []).push([[8],{

/***/ 156:
/***/ (function(module, exports) {

//
// Main
//

function memoize (fn, options) {
  var cache = options && options.cache
    ? options.cache
    : cacheDefault

  var serializer = options && options.serializer
    ? options.serializer
    : serializerDefault

  var strategy = options && options.strategy
    ? options.strategy
    : strategyDefault

  return strategy(fn, {
    cache: cache,
    serializer: serializer
  })
}

//
// Strategy
//

function isPrimitive (value) {
  return value == null || typeof value === 'number' || typeof value === 'boolean' // || typeof value === "string" 'unsafe' primitive for our needs
}

function monadic (fn, cache, serializer, arg) {
  var cacheKey = isPrimitive(arg) ? arg : serializer(arg)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.call(this, arg)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function variadic (fn, cache, serializer) {
  var args = Array.prototype.slice.call(arguments, 3)
  var cacheKey = serializer(args)

  var computedValue = cache.get(cacheKey)
  if (typeof computedValue === 'undefined') {
    computedValue = fn.apply(this, args)
    cache.set(cacheKey, computedValue)
  }

  return computedValue
}

function assemble (fn, context, strategy, cache, serialize) {
  return strategy.bind(
    context,
    fn,
    cache,
    serialize
  )
}

function strategyDefault (fn, options) {
  var strategy = fn.length === 1 ? monadic : variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyVariadic (fn, options) {
  var strategy = variadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

function strategyMonadic (fn, options) {
  var strategy = monadic

  return assemble(
    fn,
    this,
    strategy,
    options.cache.create(),
    options.serializer
  )
}

//
// Serializer
//

function serializerDefault () {
  return JSON.stringify(arguments)
}

//
// Cache
//

function ObjectWithoutPrototypeCache () {
  this.cache = Object.create(null)
}

ObjectWithoutPrototypeCache.prototype.has = function (key) {
  return (key in this.cache)
}

ObjectWithoutPrototypeCache.prototype.get = function (key) {
  return this.cache[key]
}

ObjectWithoutPrototypeCache.prototype.set = function (key, value) {
  this.cache[key] = value
}

var cacheDefault = {
  create: function create () {
    return new ObjectWithoutPrototypeCache()
  }
}

//
// API
//

module.exports = memoize
module.exports.strategies = {
  variadic: strategyVariadic,
  monadic: strategyMonadic
}


/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_has.js
var _has = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_objectAssign.js


// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (Object(_has["a" /* default */])(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
}

/* harmony default export */ var internal_objectAssign = (typeof Object.assign === 'function' ? Object.assign : _objectAssign);
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/ramda/es/mergeAll.js



/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
var mergeAll_mergeAll = /*#__PURE__*/Object(_curry1["a" /* default */])(function mergeAll(list) {
  return internal_objectAssign.apply(null, [{}].concat(list));
});
/* harmony default export */ var es_mergeAll = (mergeAll_mergeAll);
// EXTERNAL MODULE: ./node_modules/ramda/es/equals.js + 8 modules
var equals = __webpack_require__(43);

// EXTERNAL MODULE: ./node_modules/fast-memoize/src/index.js
var src = __webpack_require__(156);
var src_default = /*#__PURE__*/__webpack_require__.n(src);

// EXTERNAL MODULE: ./node_modules/speck/build/index.js
var build = __webpack_require__(19);

// EXTERNAL MODULE: ./src/lib/components/Speck.react.js
var Speck_react = __webpack_require__(17);

// CONCATENATED MODULE: ./src/lib/fragments/Speck.react.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Speck_react_Speck; });
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
 * Define private functions and variables used in the Speck component.
 **/
// Time (in milliseconds) idle before props reconciliation with external
// view is done

var PROPS_RECONCILE_DEBOUNCE_TIME = 500;
var generateSystem = src_default()(function (data) {
  var system = build["speckSystem"].new();

  for (var i = 0; i < data.length; i++) {
    // get the coordinate data
    var a = data[i]; // add to the system

    build["speckSystem"].addAtom(system, a.symbol, a.x, a.y, a.z);
  }

  build["speckSystem"].center(system);
  build["speckSystem"].calculateBonds(system);
  return system;
});

var Speck_react_viewClone = function viewClone(view) {
  return es_mergeAll([view, {
    rotation: new Float32Array(view.rotation),
    translation: es_mergeAll([view.translation])
  }]);
};

var viewAssign = function viewAssign() {
  var view1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var view2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return Object.assign(view1, view2);
};

var viewHasEqual = function viewHasEqual(view1) {
  var view1Str = JSON.stringify(view1);

  for (var i = 1; i < arguments.length; i++) {
    if (view1Str === JSON.stringify(arguments[i])) {
      return true;
    }
  }

  return false;
};

var Speck_react_Speck =
/*#__PURE__*/
function (_Component) {
  _inherits(Speck, _Component);

  function Speck(props) {
    var _this;

    _classCallCheck(this, Speck);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Speck).call(this, props));
    _this.state = {
      renderer: null
    };

    _this.eventListenDestructor = function () {
      /* no-op */
    };

    _this.refreshView = false;
    _this.propsReconcileTimeout = null;
    _this.view = viewAssign(build["speckView"].new(), props.view);

    _this.props.setProps({
      view: Speck_react_viewClone(_this.view)
    }); // setting refs in this way to allow for easier updating to
    // react 16


    _this.setCanvasRef = function (e) {
      _this.canvas = e;
    };

    _this.setContainerRef = function (e) {
      _this.container = e;
    };

    _this.loop = _this.loop.bind(_assertThisInitialized(_this));
    _this.loadStructure = _this.loadStructure.bind(_assertThisInitialized(_this));
    _this.propsReconcile = _this.propsReconcile.bind(_assertThisInitialized(_this));
    _this.propsReconcileSchedule = _this.propsReconcileSchedule.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Speck, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var scrollZoom = this.props.scrollZoom;
      var canvas = this.canvas,
          container = this.container;
      var resolution = 200;
      var aoResolution = 300;
      var renderer = new build["speckRenderer"](canvas, resolution, aoResolution);
      this.setState({
        renderer: renderer
      }, this.loadStructure); // add event listeners

      this.eventListenDestructor = Object(build["speckInteractions"])({
        scrollZoom: scrollZoom,
        container: container,
        getRotation: function getRotation() {
          return _this2.view.rotation;
        },
        setRotation: function setRotation(rotationObj) {
          _this2.view = viewAssign(_this2.view, {
            rotation: rotationObj
          });

          _this2.propsReconcileSchedule();
        },
        getTranslation: function getTranslation() {
          return _this2.view.translation;
        },
        setTranslation: function setTranslation(translationObj) {
          _this2.view = viewAssign(_this2.view, {
            translation: translationObj
          });

          _this2.propsReconcileSchedule();
        },
        getZoom: function getZoom() {
          return _this2.view.zoom;
        },
        setZoom: function setZoom(zoomVal) {
          _this2.view = viewAssign(_this2.view, {
            zoom: zoomVal
          });

          _this2.propsReconcileSchedule();
        },
        refreshView: function refreshView() {
          return _this2.refreshView = true;
        }
      });
      this.loop();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props = this.props,
          data = _this$props.data,
          view = _this$props.view,
          presetView = _this$props.presetView;
      var renderer = this.state.renderer;
      var viewInternal = this.view;
      var needsUpdate = false; // apply applicable preset parameters if preset has changed

      if (prevProps.presetView !== presetView) {
        viewInternal = viewAssign(viewInternal, build["speckPresetViews"][presetView]);
        this.propsReconcileSchedule();
        needsUpdate = true;
      } // apply the user-supplied view parameters


      if (!viewHasEqual(view, prevProps.view, viewInternal)) {
        viewInternal = viewAssign(viewInternal, view);
        needsUpdate = true;
      } // check for changes to data


      if (!Object(equals["a" /* default */])(data, prevProps.data)) {
        needsUpdate = true;
      } // perform update


      if (needsUpdate) {
        this.view = viewInternal;

        if (renderer) {
          this.loadStructure();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // set this.state.renderer = null to ensure all refs to renderer are
      // destroyed so garbage collector will clean up webgl contexts
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.renderer = null;
      this.eventListenDestructor();
      this.props.setProps({
        view: this.view
      });
    }
  }, {
    key: "propsReconcile",
    value: function propsReconcile() {
      if (!Object(equals["a" /* default */])(this.view, this.props.view)) {
        this.props.setProps({
          view: Speck_react_viewClone(this.view)
        });
      }
    } // Schedule the function "propsReconcile" to run after the amount of time
    // specified in PROPS_RECONCILE_DEBOUNCE_TIME. If a run has been scheduled
    // previously, cancel it.

  }, {
    key: "propsReconcileSchedule",
    value: function propsReconcileSchedule() {
      clearTimeout(this.propsReconcileTimeout);
      this.propsReconcileTimeout = setTimeout(this.propsReconcile, PROPS_RECONCILE_DEBOUNCE_TIME);
    }
  }, {
    key: "loadStructure",
    value: function loadStructure() {
      var data = this.props.data; // avoid trying to load an empty system

      if (data.length === 0) {
        return;
      }

      var renderer = this.state.renderer;
      var view = this.view;
      var system = generateSystem(data);
      renderer.setSystem(system, view); // update the resolution

      renderer.setResolution(view.resolution, view.aoRes);
      this.refreshView = true;
    }
  }, {
    key: "loop",
    value: function loop() {
      if (this.state.renderer && this.view) {
        if (this.refreshView) {
          this.state.renderer.reset();
          this.refreshView = false;
        }

        this.state.renderer.render(this.view);
      }

      requestAnimationFrame(this.loop);
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;
      var view = this.view;
      var divStyle = {
        height: view.resolution,
        width: view.resolution
      };
      return external_React_default.a.createElement("div", {
        id: id,
        ref: this.setContainerRef,
        style: divStyle
      }, external_React_default.a.createElement("canvas", {
        ref: this.setCanvasRef,
        width: view.resolution,
        height: view.resolution
      }));
    }
  }]);

  return Speck;
}(external_React_["Component"]);


Speck_react_Speck.defaultProps = Speck_react["b" /* defaultProps */];
Speck_react_Speck.propTypes = Speck_react["c" /* propTypes */];

/***/ })

}]);