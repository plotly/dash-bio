(window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || []).push([[5],{

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "React"
var external_React_ = __webpack_require__(1);
var external_React_default = /*#__PURE__*/__webpack_require__.n(external_React_);

// EXTERNAL MODULE: ./node_modules/react-plotly.js/react-plotly.js
var react_plotly = __webpack_require__(47);
var react_plotly_default = /*#__PURE__*/__webpack_require__.n(react_plotly);

// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry2.js
var _curry2 = __webpack_require__(9);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isNumber.js
function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
}
// CONCATENATED MODULE: ./node_modules/ramda/es/range.js



/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in the set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
var range_range = /*#__PURE__*/Object(_curry2["a" /* default */])(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});
/* harmony default export */ var es_range = (range_range);
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_curry1.js
var _curry1 = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/ramda/es/always.js


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      const t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
var always = /*#__PURE__*/Object(_curry1["a" /* default */])(function always(val) {
  return function () {
    return val;
  };
});
/* harmony default export */ var es_always = (always);
// CONCATENATED MODULE: ./node_modules/ramda/es/times.js


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @see R.repeat
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
var times = /*#__PURE__*/Object(_curry2["a" /* default */])(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});
/* harmony default export */ var es_times = (times);
// CONCATENATED MODULE: ./node_modules/ramda/es/repeat.js




/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @see R.times
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      const obj = {};
 *      const repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
var repeat_repeat = /*#__PURE__*/Object(_curry2["a" /* default */])(function repeat(value, n) {
  return es_times(es_always(value), n);
});
/* harmony default export */ var es_repeat = (repeat_repeat);
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_isPlaceholder.js
var _isPlaceholder = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_curry3.js




/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return Object(_isPlaceholder["a" /* default */])(a) ? f3 : Object(_curry2["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        });
      case 2:
        return Object(_isPlaceholder["a" /* default */])(a) && Object(_isPlaceholder["a" /* default */])(b) ? f3 : Object(_isPlaceholder["a" /* default */])(a) ? Object(_curry2["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder["a" /* default */])(b) ? Object(_curry2["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_curry1["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        });
      default:
        return Object(_isPlaceholder["a" /* default */])(a) && Object(_isPlaceholder["a" /* default */])(b) && Object(_isPlaceholder["a" /* default */])(c) ? f3 : Object(_isPlaceholder["a" /* default */])(a) && Object(_isPlaceholder["a" /* default */])(b) ? Object(_curry2["a" /* default */])(function (_a, _b) {
          return fn(_a, _b, c);
        }) : Object(_isPlaceholder["a" /* default */])(a) && Object(_isPlaceholder["a" /* default */])(c) ? Object(_curry2["a" /* default */])(function (_a, _c) {
          return fn(_a, b, _c);
        }) : Object(_isPlaceholder["a" /* default */])(b) && Object(_isPlaceholder["a" /* default */])(c) ? Object(_curry2["a" /* default */])(function (_b, _c) {
          return fn(a, _b, _c);
        }) : Object(_isPlaceholder["a" /* default */])(a) ? Object(_curry1["a" /* default */])(function (_a) {
          return fn(_a, b, c);
        }) : Object(_isPlaceholder["a" /* default */])(b) ? Object(_curry1["a" /* default */])(function (_b) {
          return fn(a, _b, c);
        }) : Object(_isPlaceholder["a" /* default */])(c) ? Object(_curry1["a" /* default */])(function (_c) {
          return fn(a, b, _c);
        }) : fn(a, b, c);
    }
  };
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArray.js
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
/* harmony default export */ var _isArray = (Array.isArray || function _isArray(val) {
  return val != null && val.length >= 0 && Object.prototype.toString.call(val) === '[object Array]';
});
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isString.js
function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isArrayLike.js




/**
 * Tests whether or not an object is similar to an array.
 *
 * @private
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @example
 *
 *      _isArrayLike([]); //=> true
 *      _isArrayLike(true); //=> false
 *      _isArrayLike({}); //=> false
 *      _isArrayLike({length: 10}); //=> false
 *      _isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
var _isArrayLike = /*#__PURE__*/Object(_curry1["a" /* default */])(function isArrayLike(x) {
  if (_isArray(x)) {
    return true;
  }
  if (!x) {
    return false;
  }
  if (typeof x !== 'object') {
    return false;
  }
  if (_isString(x)) {
    return false;
  }
  if (x.nodeType === 1) {
    return !!x.length;
  }
  if (x.length === 0) {
    return true;
  }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});
/* harmony default export */ var internal_isArrayLike = (_isArrayLike);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_xwrap.js
var XWrap = /*#__PURE__*/function () {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function () {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function (acc) {
    return acc;
  };
  XWrap.prototype['@@transducer/step'] = function (acc, x) {
    return this.f(acc, x);
  };

  return XWrap;
}();

function _xwrap(fn) {
  return new XWrap(fn);
}
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_arity.js
function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0:
      return function () {
        return fn.apply(this, arguments);
      };
    case 1:
      return function (a0) {
        return fn.apply(this, arguments);
      };
    case 2:
      return function (a0, a1) {
        return fn.apply(this, arguments);
      };
    case 3:
      return function (a0, a1, a2) {
        return fn.apply(this, arguments);
      };
    case 4:
      return function (a0, a1, a2, a3) {
        return fn.apply(this, arguments);
      };
    case 5:
      return function (a0, a1, a2, a3, a4) {
        return fn.apply(this, arguments);
      };
    case 6:
      return function (a0, a1, a2, a3, a4, a5) {
        return fn.apply(this, arguments);
      };
    case 7:
      return function (a0, a1, a2, a3, a4, a5, a6) {
        return fn.apply(this, arguments);
      };
    case 8:
      return function (a0, a1, a2, a3, a4, a5, a6, a7) {
        return fn.apply(this, arguments);
      };
    case 9:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8) {
        return fn.apply(this, arguments);
      };
    case 10:
      return function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {
        return fn.apply(this, arguments);
      };
    default:
      throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
}
// CONCATENATED MODULE: ./node_modules/ramda/es/bind.js



/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      const log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
var bind_bind = /*#__PURE__*/Object(_curry2["a" /* default */])(function bind(fn, thisObj) {
  return _arity(fn.length, function () {
    return fn.apply(thisObj, arguments);
  });
});
/* harmony default export */ var es_bind = (bind_bind);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_reduce.js




function _arrayReduce(xf, acc, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    acc = xf['@@transducer/step'](acc, list[idx]);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    idx += 1;
  }
  return xf['@@transducer/result'](acc);
}

function _iterableReduce(xf, acc, iter) {
  var step = iter.next();
  while (!step.done) {
    acc = xf['@@transducer/step'](acc, step.value);
    if (acc && acc['@@transducer/reduced']) {
      acc = acc['@@transducer/value'];
      break;
    }
    step = iter.next();
  }
  return xf['@@transducer/result'](acc);
}

function _methodReduce(xf, acc, obj, methodName) {
  return xf['@@transducer/result'](obj[methodName](es_bind(xf['@@transducer/step'], xf), acc));
}

var symIterator = typeof Symbol !== 'undefined' ? Symbol.iterator : '@@iterator';

function _reduce(fn, acc, list) {
  if (typeof fn === 'function') {
    fn = _xwrap(fn);
  }
  if (internal_isArrayLike(list)) {
    return _arrayReduce(fn, acc, list);
  }
  if (typeof list['fantasy-land/reduce'] === 'function') {
    return _methodReduce(fn, acc, list, 'fantasy-land/reduce');
  }
  if (list[symIterator] != null) {
    return _iterableReduce(fn, acc, list[symIterator]());
  }
  if (typeof list.next === 'function') {
    return _iterableReduce(fn, acc, list);
  }
  if (typeof list.reduce === 'function') {
    return _methodReduce(fn, acc, list, 'reduce');
  }

  throw new TypeError('reduce: list must be array or iterable');
}
// CONCATENATED MODULE: ./node_modules/ramda/es/reduce.js



/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * [`R.reduced`](#reduced) to shortcut the iteration.
 *
 * The arguments' order of [`reduceRight`](#reduceRight)'s iterator function
 * is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present. When
 * doing so, it is up to the user to handle the [`R.reduced`](#reduced)
 * shortcuting, as this is not implemented by `reduce`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *      //          -               -10
 *      //         / \              / \
 *      //        -   4           -6   4
 *      //       / \              / \
 *      //      -   3   ==>     -3   3
 *      //     / \              / \
 *      //    -   2           -1   2
 *      //   / \              / \
 *      //  0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
var reduce = /*#__PURE__*/_curry3(_reduce);
/* harmony default export */ var es_reduce = (reduce);
// CONCATENATED MODULE: ./node_modules/ramda/es/max.js


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
var max = /*#__PURE__*/Object(_curry2["a" /* default */])(function max(a, b) {
  return b > a ? b : a;
});
/* harmony default export */ var es_max = (max);
// CONCATENATED MODULE: ./node_modules/ramda/es/internal/_isObject.js
function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
}
// EXTERNAL MODULE: ./node_modules/ramda/es/internal/_has.js
var _has = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/ramda/es/mergeWithKey.js



/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeDeepWithKey, R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
var mergeWithKey_mergeWithKey = /*#__PURE__*/_curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (Object(_has["a" /* default */])(k, l)) {
      result[k] = Object(_has["a" /* default */])(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (Object(_has["a" /* default */])(k, r) && !Object(_has["a" /* default */])(k, result)) {
      result[k] = r[k];
    }
  }

  return result;
});
/* harmony default export */ var es_mergeWithKey = (mergeWithKey_mergeWithKey);
// CONCATENATED MODULE: ./node_modules/ramda/es/mergeDeepWithKey.js




/**
 * Creates a new object with the own properties of the two provided objects.
 * If a key exists in both objects:
 * - and both associated values are also objects then the values will be
 *   recursively merged.
 * - otherwise the provided function is applied to the key and associated values
 *   using the resulting value as the new value associated with the key.
 * If a key only exists in one object, the value will be associated with the key
 * of the resulting object.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig ((String, a, a) -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.mergeWithKey, R.mergeDeepWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeDeepWithKey(concatValues,
 *                         { a: true, c: { thing: 'foo', values: [10, 20] }},
 *                         { b: true, c: { thing: 'bar', values: [15, 35] }});
 *      //=> { a: true, b: true, c: { thing: 'bar', values: [10, 20, 15, 35] }}
 */
var mergeDeepWithKey_mergeDeepWithKey = /*#__PURE__*/_curry3(function mergeDeepWithKey(fn, lObj, rObj) {
  return es_mergeWithKey(function (k, lVal, rVal) {
    if (_isObject(lVal) && _isObject(rVal)) {
      return mergeDeepWithKey(fn, lVal, rVal);
    } else {
      return fn(k, lVal, rVal);
    }
  }, lObj, rObj);
});
/* harmony default export */ var es_mergeDeepWithKey = (mergeDeepWithKey_mergeDeepWithKey);
// CONCATENATED MODULE: ./node_modules/ramda/es/mergeDeepRight.js



/**
 * Creates a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects:
 * - and both values are objects, the two values will be recursively merged
 * - otherwise the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.24.0
 * @category Object
 * @sig {a} -> {a} -> {a}
 * @param {Object} lObj
 * @param {Object} rObj
 * @return {Object}
 * @see R.merge, R.mergeDeepLeft, R.mergeDeepWith, R.mergeDeepWithKey
 * @example
 *
 *      R.mergeDeepRight({ name: 'fred', age: 10, contact: { email: 'moo@example.com' }},
 *                       { age: 40, contact: { email: 'baa@example.com' }});
 *      //=> { name: 'fred', age: 40, contact: { email: 'baa@example.com' }}
 */
var mergeDeepRight_mergeDeepRight = /*#__PURE__*/Object(_curry2["a" /* default */])(function mergeDeepRight(lObj, rObj) {
  return es_mergeDeepWithKey(function (k, lVal, rVal) {
    return rVal;
  }, lObj, rObj);
});
/* harmony default export */ var es_mergeDeepRight = (mergeDeepRight_mergeDeepRight);
// EXTERNAL MODULE: ./node_modules/ramda/es/omit.js
var omit = __webpack_require__(160);

// EXTERNAL MODULE: ./src/lib/components/NeedlePlot.react.js
var NeedlePlot_react = __webpack_require__(14);

// CONCATENATED MODULE: ./src/lib/fragments/NeedlePlot.react.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NeedlePlot_react_NeedlePlot; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * Checks if a variable is representation of a number or not
 * https://stackoverflow.com/questions/9716468/pure-javascript-a-function-like-jquerys-isnumeric
 * @param  {String/FLoat} n  A variable to test.
 * @return {Bool}            True if n is a number, false otherwise.
 */

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Converts an array elements to numbers and ignore the elements which are not
 * a representation of  numbers
 * @param  {Array} test_array An array
 * @return {Array}       An array with only numbers.
 */


function filterNanArray(test_array) {
  return test_array.filter(function (el) {
    return Number(isNumeric(el));
  });
}
/**
 * Search the protein position array for small protein domains (typically 1->5 sites)
 * and bogus entries (i.e. "?-123" or "320-?"), the protein domains are indicated
 * by the presence of a '-' character in the element of the array.
 * @param  {Array} protein_pos_array        An array containing protein domains
 * @return {Array} positions_array          An array with only single site
					    protein mutations.
 * @return {Array} domains_array            An array with only small domains
					    protein mutations.
 * @return {Array} idx_old_positions_array  An array with the indexes of the
					    single site protein mutations
					    relative to protein_pos_array
 * @return {Array} idx_bogus_entry          An array with the indexes of the
					    bogus entries (containing '?')
					    relative to protein_pos_array
*/


function extractSmallDomains(protein_pos_array) {
  var positions_array = [];
  var domains_array = [];
  var idx_old_positions_array = [];
  var idx_bogus_entry = [];
  protein_pos_array.forEach(function (dx, i) {
    if (dx.indexOf('-') > -1) {
      var domains_limits = dx.split('-');

      if (isNumeric(domains_limits[0]) || isNumeric(domains_limits[1])) {
        idx_bogus_entry.push(i);
      } else {
        domains_array.push(dx);
      }
    } else {
      idx_old_positions_array.push(i);
      positions_array.push(dx);
    }
  });
  return [positions_array, domains_array, idx_old_positions_array, idx_bogus_entry];
}
/**
 * Creates two arrays to plot horizontal lines with many markers
 *
 * @param  {number} xi  start x coordinate of the line
 * @param  {number} xf  stop x coordinate of the line
 * @param  {number} y   y coordinate of the line
 * @param  {int} n      number of markers
 * @return {array} x    x coordinates of the horizontal ine
 * @return {array} y    y coordinates of the horizontal ine
 */


function createHorizontalLine(xi, xf, y, n) {
  var dx = (xf - xi) / n;
  var N = Math.max(2, n);
  var x = es_range(0, N).map(function (i) {
    return xi + i * dx;
  });
  return [x, es_repeat(y, N)];
}
/**
 * Finds the max of an array while ignoring the NaN values
 *
 * @param  {array} test_array  an array with numbers as entries
 * @return {number}            max value of the array
 */


function nanMax(test_array) {
  return es_reduce(es_max, -Infinity, filterNanArray(test_array));
}
/**
 * The Needle Plot component is used to visualize large datasets
 * containing categorical or numerical data. The lines and markers in
 * the plot correspond to bars in a histogram.
 **/


var NeedlePlot_react_NeedlePlot =
/*#__PURE__*/
function (_Component) {
  _inherits(NeedlePlot, _Component);

  function NeedlePlot() {
    var _this;

    _classCallCheck(this, NeedlePlot);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NeedlePlot).call(this));
    _this.state = {
      xStart: null,
      xEnd: null
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NeedlePlot, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // For default argument of taken from defaultProps deeply nested
      this.props = es_mergeDeepRight(NeedlePlot.defaultProps, this.props);
    } // Handle plot events

  }, {
    key: "handleChange",
    value: function handleChange(event) {
      // Zoom
      if (event['xaxis.range[0]'] || event['xaxis.range']) {
        this.setState({
          xStart: event['xaxis.range[0]'] || event['xaxis.range'][0],
          xEnd: event['xaxis.range[1]'] || event['xaxis.range'][1]
        });
      } // Autozoom
      else if (event['xaxis.autorange'] === true) {
          this.setState({
            xStart: null,
            xEnd: null
          });
        }
    }
  }, {
    key: "render",
    value: function render() {
      var id = this.props.id;

      var _this$prepareTraces = this.prepareTraces(),
          data = _this$prepareTraces.data,
          globalAnnotation = _this$prepareTraces.globalAnnotation,
          domainAnnotations = _this$prepareTraces.domainAnnotations;

      var layout = this.prepareLayout({
        data: data,
        globalAnnotation: globalAnnotation,
        domainAnnotations: domainAnnotations
      });
      return external_React_default.a.createElement("div", {
        id: id
      }, external_React_default.a.createElement(react_plotly_default.a, _extends({
        data: data,
        layout: layout,
        onRelayout: this.handleChange
      }, Object(omit["a" /* default */])(['setProps'], this.props))));
    } // Fetch data

  }, {
    key: "prepareTraces",
    value: function prepareTraces() {
      var _mergeDeepRight = es_mergeDeepRight(NeedlePlot.defaultProps, this.props),
          _mergeDeepRight$mutat = _mergeDeepRight.mutationData,
          x = _mergeDeepRight$mutat.x,
          y = _mergeDeepRight$mutat.y,
          mutationGroups = _mergeDeepRight$mutat.mutationGroups,
          domains = _mergeDeepRight$mutat.domains,
          _mergeDeepRight$domai = _mergeDeepRight.domainStyle,
          domainColor = _mergeDeepRight$domai.domainColor,
          displayMinorDomains = _mergeDeepRight$domai.displayMinorDomains,
          _mergeDeepRight$needl = _mergeDeepRight.needleStyle,
          stemColor = _mergeDeepRight$needl.stemColor,
          stemThickness = _mergeDeepRight$needl.stemThickness,
          stemConstHeight = _mergeDeepRight$needl.stemConstHeight,
          headSize = _mergeDeepRight$needl.headSize,
          headColor = _mergeDeepRight$needl.headColor,
          headSymbol = _mergeDeepRight$needl.headSymbol; // Apply filtering on protein positions


      var _extractSmallDomains = extractSmallDomains(x),
          _extractSmallDomains2 = _slicedToArray(_extractSmallDomains, 3),
          x_single_site = _extractSmallDomains2[0],
          small_domains = _extractSmallDomains2[1],
          idx_old_positions_array = _extractSmallDomains2[2]; // manage whether headColor is an array or a string


      var fixed_mutation_colors = Array.isArray(headColor) ? headColor : mutationGroups.map(function () {
        return headColor;
      });
      var fixed_mutation_symbols = Array.isArray(headSymbol) ? headSymbol : mutationGroups.map(function () {
        return headSymbol;
      });
      var fixed_domain_colors = domainColor;
      var X_DATA_MIN = Math.min.apply(null, x_single_site);
      var X_DATA_MAX = Math.max.apply(null, x_single_site);
      var Y_DATA_MAX = stemConstHeight === true ? 1 : nanMax(y);
      var X_RANGE_MIN = this.state.xStart || X_DATA_MIN;
      var X_RANGE_MAX = this.state.xEnd || X_DATA_MAX;
      var XSPAN = X_RANGE_MAX - X_RANGE_MIN; // this is used to trigger a change of display inside annotations

      var XSPAN_RATIO = 0.2;
      var Y_BUFFER = stemConstHeight === true ? 0.5 : Y_DATA_MAX / 10; // this is used to scale the position for the annotations

      var Y_BUFFER_DIVIDER = 2;
      var Y_TOP = stemConstHeight === true ? 2 : Y_DATA_MAX + Y_BUFFER;
      var DOMAIN_WIDTH = 33;
      var sequenceDomains = [];
      var domainAnnotations = [];
      var hoverlabels = []; // contains the height of each stem

      var stemsY = [];
      idx_old_positions_array.forEach(function (idx) {
        if (stemConstHeight) {
          stemsY = stemsY.concat([1]);
        } else {
          hoverlabels = hoverlabels.concat(['(' + x[idx] + ',' + y[idx] + ')']);
          stemsY = stemsY.concat([y[idx]]);
        }
      });
      var hoverinfo = stemConstHeight === true ? 'x+name+text' : 'name+text'; // build the different protein large domains

      domains.forEach(function (dom, i) {
        var domainLimits = dom.coord.split('-');
        var x0 = Number(domainLimits[0]);
        var x1 = Number(domainLimits[1]);
        var domainLength = x1 - x0; // Highlight of the protein domain

        sequenceDomains.push({
          x: [x1, x0],
          y: [Y_TOP, Y_TOP],
          xaxis: 'x1',
          name: dom.name,
          fill: 'tozeroy',
          mode: 'lines',
          opacity: 0.5,
          visible: 'legendonly',
          legendgroup: dom.name,
          marker: {
            color: fixed_domain_colors[i]
          }
        });

        var _createHorizontalLine = createHorizontalLine(x0, x1, -Y_BUFFER, x1 - x0),
            _createHorizontalLine2 = _slicedToArray(_createHorizontalLine, 2),
            line_x = _createHorizontalLine2[0],
            line_y = _createHorizontalLine2[1];

        sequenceDomains.push({
          type: 'scatter',
          mode: 'lines',
          fill: 'tozeroy',
          fillcolor: fixed_domain_colors[i],
          hoveron: 'points+fills',
          x: line_x,
          y: line_y,
          xaxis: 'x2',
          showlegend: false,
          hoverinfo: 'name',
          name: "[".concat(x0, "->").concat(x1, "] ").concat(dom.name),
          marker: {
            color: fixed_domain_colors[i]
          },
          line: {
            width: 2
          }
        }); // Name of the protein domain

        domainAnnotations.push({
          x: (x0 + x1) / Y_BUFFER_DIVIDER,
          y: -Y_BUFFER / Y_BUFFER_DIVIDER,
          showarrow: false,
          text: dom.name,
          width: domainLength,
          align: domainLength < XSPAN_RATIO * XSPAN ? 'right' : 'center'
        });
      });

      if (displayMinorDomains === true) {
        // build the different protein small domains
        small_domains.forEach(function (dom) {
          var x0 = Number(dom.split('-')[0]);
          var x1 = Number(dom.split('-')[1]);
          var gname = mutationGroups[x.indexOf(dom)];

          var _createHorizontalLine3 = createHorizontalLine(x0, x1, -Y_BUFFER / Y_BUFFER_DIVIDER, x1 - x0),
              _createHorizontalLine4 = _slicedToArray(_createHorizontalLine3, 2),
              line_x = _createHorizontalLine4[0],
              line_y = _createHorizontalLine4[1]; // Range of the protein domain on the xaxis


          sequenceDomains.push({
            type: 'scatter',
            mode: 'lines',
            x: line_x,
            y: line_y,
            fill: 'tozeroy',
            fillcolor: fixed_mutation_colors[_toConsumableArray(new Set(mutationGroups)).indexOf(gname)],
            hoveron: 'points+fills',
            xaxis: 'x2',
            hoverinfo: 'name+text',
            name: gname,
            text: "[".concat(x0, "->").concat(x1, "] "),
            showlegend: false,
            marker: {
              color: fixed_mutation_colors[_toConsumableArray(new Set(mutationGroups)).indexOf(gname)]
            },
            line: {
              width: DOMAIN_WIDTH
            }
          });
        });
      }

      var globalAnnotation = [{
        text: "<b>".concat(x_single_site.length + small_domains.length, " Mutations</b>"),
        x: 0.01,
        xref: 'paper',
        y: 1.1,
        yref: 'paper',
        showarrow: false,
        align: 'left'
      }];
      var data = [{
        type: 'scatter',
        mode: 'markers',
        x: x_single_site,
        y: stemsY,
        xaxis: 'x1',
        hoverinfo: hoverinfo,
        text: hoverlabels,
        error_y: {
          type: 'data',
          symmetric: false,
          array: 0,
          arrayminus: stemsY,
          thickness: stemThickness,
          width: 0,
          color: stemColor
        },
        transforms: [{
          type: 'groupby',
          groups: mutationGroups,
          nameformat: "%{group}",
          styles: _toConsumableArray(new Set(mutationGroups)).map(function (target, i) {
            return {
              target: target,
              value: {
                marker: {
                  size: headSize,
                  symbol: fixed_mutation_symbols[i],
                  color: fixed_mutation_colors[i]
                }
              }
            };
          })
        }]
      }].concat(sequenceDomains);
      return {
        data: data,
        globalAnnotation: globalAnnotation,
        domainAnnotations: domainAnnotations
      };
    } // Fetch layout

  }, {
    key: "prepareLayout",
    value: function prepareLayout(vars) {
      var data = vars.data,
          globalAnnotation = vars.globalAnnotation,
          domainAnnotations = vars.domainAnnotations;

      var _mergeDeepRight2 = es_mergeDeepRight(NeedlePlot.defaultProps, this.props),
          xlabel = _mergeDeepRight2.xlabel,
          ylabel = _mergeDeepRight2.ylabel,
          rangeSlider = _mergeDeepRight2.rangeSlider;

      var _this$state = this.state,
          xStart = _this$state.xStart,
          xEnd = _this$state.xEnd;
      var first_init = false; // initialize the range based on input data

      if (Boolean(!xStart) || Boolean(!xEnd)) {
        first_init = true;
        data.forEach(function (trace) {
          var X_DATA_MIN = Math.min.apply(null, trace.x);
          var X_DATA_MAX = Math.max.apply(null, trace.x);

          if (xStart > X_DATA_MIN || Boolean(!xStart)) {
            xStart = X_DATA_MIN;
          }

          if (xEnd < X_DATA_MAX || Boolean(!xEnd)) {
            xEnd = X_DATA_MAX;
          }
        });
      } // this is used to zoom in the axis range initially


      var XSTART_RATIO = 0.98;
      var XEND_RATIO = 1.02;
      var layout = {
        legend: {
          orientation: 'v',
          x: 1,
          y: 1.05,
          bgcolor: 'rgba(255, 255, 255, 0)'
        },
        hovermode: 'closest',
        xaxis: {
          title: xlabel,
          showgrid: false,
          zeroline: false,
          autorange: Boolean(!xStart),
          range: [xStart, xEnd],
          anchor: 'y'
        },
        xaxis2: {
          scaleanchor: 'x',
          autorange: Boolean(!xStart),
          range: [xStart, xEnd],
          anchor: 'y',
          overlaying: 'x'
        },
        yaxis: {
          title: ylabel,
          showgrid: false,
          ticks: 'inside'
        },
        margin: {
          t: 100,
          l: 40,
          r: 0,
          b: 40
        },
        annotations: domainAnnotations.concat(globalAnnotation)
      };

      if (rangeSlider === true) {
        layout.xaxis.rangeslider = first_init === true ? {
          range: [xStart * XSTART_RATIO, xEnd * XEND_RATIO]
        } : {};
      }

      return layout;
    }
  }]);

  return NeedlePlot;
}(external_React_["Component"]);


NeedlePlot_react_NeedlePlot.propTypes = NeedlePlot_react["c" /* propTypes */];
NeedlePlot_react_NeedlePlot.defaultProps = NeedlePlot_react["b" /* defaultProps */];

/***/ })

}]);