(window["webpackJsonpdash_bio"] = window["webpackJsonpdash_bio"] || []).push([[3],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*! Ideogram.js, version 1.4.1.  Developed by Eric Weitz.  https://github.com/eweitz/ideogram.  Public domain (CC0 1.0). */
!function (t, n) {
  if ("object" == ( false ? undefined : _typeof(exports)) && "object" == ( false ? undefined : _typeof(module))) module.exports = n();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else { var r, e; }
}(window, function () {
  return function (t) {
    var n = {};

    function e(r) {
      if (n[r]) return n[r].exports;
      var o = n[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports;
    }

    return e.m = t, e.c = n, e.d = function (t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, {
        enumerable: !0,
        get: r
      });
    }, e.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, e.t = function (t, n) {
      if (1 & n && (t = e(t)), 8 & n) return t;
      if (4 & n && "object" == _typeof(t) && t && t.__esModule) return t;
      var r = Object.create(null);
      if (e.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: t
      }), 2 & n && "string" != typeof t) for (var o in t) {
        e.d(r, o, function (n) {
          return t[n];
        }.bind(null, o));
      }
      return r;
    }, e.n = function (t) {
      var n = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return e.d(n, "a", n), n;
    }, e.o = function (t, n) {
      return Object.prototype.hasOwnProperty.call(t, n);
    }, e.p = "/dist/js", e(e.s = 8);
  }([function (t, n, e) {
    "use strict";

    e.r(n);

    var r = "http://www.w3.org/1999/xhtml",
        o = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: r,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/"
    },
        i = function i(t) {
      var n = t += "",
          e = n.indexOf(":");
      return e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)), o.hasOwnProperty(n) ? {
        space: o[n],
        local: t
      } : t;
    };

    var a = function a(t) {
      var n = i(t);
      return (n.local ? function (t) {
        return function () {
          return this.ownerDocument.createElementNS(t.space, t.local);
        };
      } : function (t) {
        return function () {
          var n = this.ownerDocument,
              e = this.namespaceURI;
          return e === r && n.documentElement.namespaceURI === r ? n.createElement(t) : n.createElementNS(e, t);
        };
      })(n);
    };

    function s() {}

    var c = function c(t) {
      return null == t ? s : function () {
        return this.querySelector(t);
      };
    };

    function u() {
      return [];
    }

    var l = function l(t) {
      return null == t ? u : function () {
        return this.querySelectorAll(t);
      };
    },
        f = function f(t) {
      return function () {
        return this.matches(t);
      };
    };

    if ("undefined" != typeof document) {
      var h = document.documentElement;

      if (!h.matches) {
        var d = h.webkitMatchesSelector || h.msMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector;

        f = function f(t) {
          return function () {
            return d.call(this, t);
          };
        };
      }
    }

    var g = f,
        p = function p(t) {
      return new Array(t.length);
    };

    function m(t, n) {
      this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = n;
    }

    m.prototype = {
      constructor: m,
      appendChild: function appendChild(t) {
        return this._parent.insertBefore(t, this._next);
      },
      insertBefore: function insertBefore(t, n) {
        return this._parent.insertBefore(t, n);
      },
      querySelector: function querySelector(t) {
        return this._parent.querySelector(t);
      },
      querySelectorAll: function querySelectorAll(t) {
        return this._parent.querySelectorAll(t);
      }
    };
    var b = "$";

    function v(t, n, e, r, o, i) {
      for (var a, s = 0, c = n.length, u = i.length; s < u; ++s) {
        (a = n[s]) ? (a.__data__ = i[s], r[s] = a) : e[s] = new m(t, i[s]);
      }

      for (; s < c; ++s) {
        (a = n[s]) && (o[s] = a);
      }
    }

    function y(t, n, e, r, o, i, a) {
      var s,
          c,
          u,
          l = {},
          f = n.length,
          h = i.length,
          d = new Array(f);

      for (s = 0; s < f; ++s) {
        (c = n[s]) && (d[s] = u = b + a.call(c, c.__data__, s, n), u in l ? o[s] = c : l[u] = c);
      }

      for (s = 0; s < h; ++s) {
        (c = l[u = b + a.call(t, i[s], s, i)]) ? (r[s] = c, c.__data__ = i[s], l[u] = null) : e[s] = new m(t, i[s]);
      }

      for (s = 0; s < f; ++s) {
        (c = n[s]) && l[d[s]] === c && (o[s] = c);
      }
    }

    function _(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    }

    var w = function w(t) {
      return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
    };

    function x(t, n) {
      return t.style.getPropertyValue(n) || w(t).getComputedStyle(t, null).getPropertyValue(n);
    }

    function A(t) {
      return t.trim().split(/^|\s+/);
    }

    function C(t) {
      return t.classList || new T(t);
    }

    function T(t) {
      this._node = t, this._names = A(t.getAttribute("class") || "");
    }

    function M(t, n) {
      for (var e = C(t), r = -1, o = n.length; ++r < o;) {
        e.add(n[r]);
      }
    }

    function k(t, n) {
      for (var e = C(t), r = -1, o = n.length; ++r < o;) {
        e.remove(n[r]);
      }
    }

    T.prototype = {
      add: function add(t) {
        this._names.indexOf(t) < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function remove(t) {
        var n = this._names.indexOf(t);

        n >= 0 && (this._names.splice(n, 1), this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function contains(t) {
        return this._names.indexOf(t) >= 0;
      }
    };

    function S() {
      this.textContent = "";
    }

    function L() {
      this.innerHTML = "";
    }

    function D() {
      this.nextSibling && this.parentNode.appendChild(this);
    }

    function B() {
      this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }

    function F() {
      return null;
    }

    function N() {
      var t = this.parentNode;
      t && t.removeChild(this);
    }

    function O() {
      return this.parentNode.insertBefore(this.cloneNode(!1), this.nextSibling);
    }

    function P() {
      return this.parentNode.insertBefore(this.cloneNode(!0), this.nextSibling);
    }

    var E = {},
        I = null;
    "undefined" != typeof document && ("onmouseenter" in document.documentElement || (E = {
      mouseenter: "mouseover",
      mouseleave: "mouseout"
    }));

    function j(t, n, e) {
      return t = H(t, n, e), function (n) {
        var e = n.relatedTarget;
        e && (e === this || 8 & e.compareDocumentPosition(this)) || t.call(this, n);
      };
    }

    function H(t, n, e) {
      return function (r) {
        var o = I;
        I = r;

        try {
          t.call(this, this.__data__, n, e);
        } finally {
          I = o;
        }
      };
    }

    function U(t) {
      return function () {
        var n = this.__on;

        if (n) {
          for (var e, r = 0, o = -1, i = n.length; r < i; ++r) {
            e = n[r], t.type && e.type !== t.type || e.name !== t.name ? n[++o] = e : this.removeEventListener(e.type, e.listener, e.capture);
          }

          ++o ? n.length = o : delete this.__on;
        }
      };
    }

    function W(t, n, e) {
      var r = E.hasOwnProperty(t.type) ? j : H;
      return function (o, i, a) {
        var s,
            c = this.__on,
            u = r(n, i, a);
        if (c) for (var l = 0, f = c.length; l < f; ++l) {
          if ((s = c[l]).type === t.type && s.name === t.name) return this.removeEventListener(s.type, s.listener, s.capture), this.addEventListener(s.type, s.listener = u, s.capture = e), void (s.value = n);
        }
        this.addEventListener(t.type, u, e), s = {
          type: t.type,
          name: t.name,
          value: n,
          listener: u,
          capture: e
        }, c ? c.push(s) : this.__on = [s];
      };
    }

    function Y(t, n, e, r) {
      var o = I;
      t.sourceEvent = I, I = t;

      try {
        return n.apply(e, r);
      } finally {
        I = o;
      }
    }

    function R(t, n, e) {
      var r = w(t),
          o = r.CustomEvent;
      "function" == typeof o ? o = new o(n, e) : (o = r.document.createEvent("Event"), e ? (o.initEvent(n, e.bubbles, e.cancelable), o.detail = e.detail) : o.initEvent(n, !1, !1)), t.dispatchEvent(o);
    }

    var z = [null];

    function q(t, n) {
      this._groups = t, this._parents = n;
    }

    function X() {
      return new q([[document.documentElement]], z);
    }

    q.prototype = X.prototype = {
      constructor: q,
      select: function select(t) {
        "function" != typeof t && (t = c(t));

        for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o) {
          for (var i, a, s = n[o], u = s.length, l = r[o] = new Array(u), f = 0; f < u; ++f) {
            (i = s[f]) && (a = t.call(i, i.__data__, f, s)) && ("__data__" in i && (a.__data__ = i.__data__), l[f] = a);
          }
        }

        return new q(r, this._parents);
      },
      selectAll: function selectAll(t) {
        "function" != typeof t && (t = l(t));

        for (var n = this._groups, e = n.length, r = [], o = [], i = 0; i < e; ++i) {
          for (var a, s = n[i], c = s.length, u = 0; u < c; ++u) {
            (a = s[u]) && (r.push(t.call(a, a.__data__, u, s)), o.push(a));
          }
        }

        return new q(r, o);
      },
      filter: function filter(t) {
        "function" != typeof t && (t = g(t));

        for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o) {
          for (var i, a = n[o], s = a.length, c = r[o] = [], u = 0; u < s; ++u) {
            (i = a[u]) && t.call(i, i.__data__, u, a) && c.push(i);
          }
        }

        return new q(r, this._parents);
      },
      data: function data(t, n) {
        if (!t) return d = new Array(this.size()), u = -1, this.each(function (t) {
          d[++u] = t;
        }), d;
        var e = n ? y : v,
            r = this._parents,
            o = this._groups;
        "function" != typeof t && (t = function (t) {
          return function () {
            return t;
          };
        }(t));

        for (var i = o.length, a = new Array(i), s = new Array(i), c = new Array(i), u = 0; u < i; ++u) {
          var l = r[u],
              f = o[u],
              h = f.length,
              d = t.call(l, l && l.__data__, u, r),
              g = d.length,
              p = s[u] = new Array(g),
              m = a[u] = new Array(g);
          e(l, f, p, m, c[u] = new Array(h), d, n);

          for (var b, _, w = 0, x = 0; w < g; ++w) {
            if (b = p[w]) {
              for (w >= x && (x = w + 1); !(_ = m[x]) && ++x < g;) {
                ;
              }

              b._next = _ || null;
            }
          }
        }

        return (a = new q(a, r))._enter = s, a._exit = c, a;
      },
      enter: function enter() {
        return new q(this._enter || this._groups.map(p), this._parents);
      },
      exit: function exit() {
        return new q(this._exit || this._groups.map(p), this._parents);
      },
      merge: function merge(t) {
        for (var n = this._groups, e = t._groups, r = n.length, o = e.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s) {
          for (var c, u = n[s], l = e[s], f = u.length, h = a[s] = new Array(f), d = 0; d < f; ++d) {
            (c = u[d] || l[d]) && (h[d] = c);
          }
        }

        for (; s < r; ++s) {
          a[s] = n[s];
        }

        return new q(a, this._parents);
      },
      order: function order() {
        for (var t = this._groups, n = -1, e = t.length; ++n < e;) {
          for (var r, o = t[n], i = o.length - 1, a = o[i]; --i >= 0;) {
            (r = o[i]) && (a && a !== r.nextSibling && a.parentNode.insertBefore(r, a), a = r);
          }
        }

        return this;
      },
      sort: function sort(t) {
        function n(n, e) {
          return n && e ? t(n.__data__, e.__data__) : !n - !e;
        }

        t || (t = _);

        for (var e = this._groups, r = e.length, o = new Array(r), i = 0; i < r; ++i) {
          for (var a, s = e[i], c = s.length, u = o[i] = new Array(c), l = 0; l < c; ++l) {
            (a = s[l]) && (u[l] = a);
          }

          u.sort(n);
        }

        return new q(o, this._parents).order();
      },
      call: function call() {
        var t = arguments[0];
        return arguments[0] = this, t.apply(null, arguments), this;
      },
      nodes: function nodes() {
        var t = new Array(this.size()),
            n = -1;
        return this.each(function () {
          t[++n] = this;
        }), t;
      },
      node: function node() {
        for (var t = this._groups, n = 0, e = t.length; n < e; ++n) {
          for (var r = t[n], o = 0, i = r.length; o < i; ++o) {
            var a = r[o];
            if (a) return a;
          }
        }

        return null;
      },
      size: function size() {
        var t = 0;
        return this.each(function () {
          ++t;
        }), t;
      },
      empty: function empty() {
        return !this.node();
      },
      each: function each(t) {
        for (var n = this._groups, e = 0, r = n.length; e < r; ++e) {
          for (var o, i = n[e], a = 0, s = i.length; a < s; ++a) {
            (o = i[a]) && t.call(o, o.__data__, a, i);
          }
        }

        return this;
      },
      attr: function attr(t, n) {
        var e = i(t);

        if (arguments.length < 2) {
          var r = this.node();
          return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
        }

        return this.each((null == n ? e.local ? function (t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        } : function (t) {
          return function () {
            this.removeAttribute(t);
          };
        } : "function" == typeof n ? e.local ? function (t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e);
          };
        } : function (t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
          };
        } : e.local ? function (t, n) {
          return function () {
            this.setAttributeNS(t.space, t.local, n);
          };
        } : function (t, n) {
          return function () {
            this.setAttribute(t, n);
          };
        })(e, n));
      },
      style: function style(t, n, e) {
        return arguments.length > 1 ? this.each((null == n ? function (t) {
          return function () {
            this.style.removeProperty(t);
          };
        } : "function" == typeof n ? function (t, n, e) {
          return function () {
            var r = n.apply(this, arguments);
            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e);
          };
        } : function (t, n, e) {
          return function () {
            this.style.setProperty(t, n, e);
          };
        })(t, n, null == e ? "" : e)) : x(this.node(), t);
      },
      property: function property(t, n) {
        return arguments.length > 1 ? this.each((null == n ? function (t) {
          return function () {
            delete this[t];
          };
        } : "function" == typeof n ? function (t, n) {
          return function () {
            var e = n.apply(this, arguments);
            null == e ? delete this[t] : this[t] = e;
          };
        } : function (t, n) {
          return function () {
            this[t] = n;
          };
        })(t, n)) : this.node()[t];
      },
      classed: function classed(t, n) {
        var e = A(t + "");

        if (arguments.length < 2) {
          for (var r = C(this.node()), o = -1, i = e.length; ++o < i;) {
            if (!r.contains(e[o])) return !1;
          }

          return !0;
        }

        return this.each(("function" == typeof n ? function (t, n) {
          return function () {
            (n.apply(this, arguments) ? M : k)(this, t);
          };
        } : n ? function (t) {
          return function () {
            M(this, t);
          };
        } : function (t) {
          return function () {
            k(this, t);
          };
        })(e, n));
      },
      text: function text(t) {
        return arguments.length ? this.each(null == t ? S : ("function" == typeof t ? function (t) {
          return function () {
            var n = t.apply(this, arguments);
            this.textContent = null == n ? "" : n;
          };
        } : function (t) {
          return function () {
            this.textContent = t;
          };
        })(t)) : this.node().textContent;
      },
      html: function html(t) {
        return arguments.length ? this.each(null == t ? L : ("function" == typeof t ? function (t) {
          return function () {
            var n = t.apply(this, arguments);
            this.innerHTML = null == n ? "" : n;
          };
        } : function (t) {
          return function () {
            this.innerHTML = t;
          };
        })(t)) : this.node().innerHTML;
      },
      raise: function raise() {
        return this.each(D);
      },
      lower: function lower() {
        return this.each(B);
      },
      append: function append(t) {
        var n = "function" == typeof t ? t : a(t);
        return this.select(function () {
          return this.appendChild(n.apply(this, arguments));
        });
      },
      insert: function insert(t, n) {
        var e = "function" == typeof t ? t : a(t),
            r = null == n ? F : "function" == typeof n ? n : c(n);
        return this.select(function () {
          return this.insertBefore(e.apply(this, arguments), r.apply(this, arguments) || null);
        });
      },
      remove: function remove() {
        return this.each(N);
      },
      clone: function clone(t) {
        return this.select(t ? P : O);
      },
      datum: function datum(t) {
        return arguments.length ? this.property("__data__", t) : this.node().__data__;
      },
      on: function on(t, n, e) {
        var r,
            o,
            i = function (t) {
          return t.trim().split(/^|\s+/).map(function (t) {
            var n = "",
                e = t.indexOf(".");
            return e >= 0 && (n = t.slice(e + 1), t = t.slice(0, e)), {
              type: t,
              name: n
            };
          });
        }(t + ""),
            a = i.length;

        if (!(arguments.length < 2)) {
          for (s = n ? W : U, null == e && (e = !1), r = 0; r < a; ++r) {
            this.each(s(i[r], n, e));
          }

          return this;
        }

        var s = this.node().__on;

        if (s) for (var c, u = 0, l = s.length; u < l; ++u) {
          for (r = 0, c = s[u]; r < a; ++r) {
            if ((o = i[r]).type === c.type && o.name === c.name) return c.value;
          }
        }
      },
      dispatch: function dispatch(t, n) {
        return this.each(("function" == typeof n ? function (t, n) {
          return function () {
            return R(this, t, n.apply(this, arguments));
          };
        } : function (t, n) {
          return function () {
            return R(this, t, n);
          };
        })(t, n));
      }
    };

    var $ = X,
        V = function V(t) {
      return "string" == typeof t ? new q([[document.querySelector(t)]], [document.documentElement]) : new q([[t]], z);
    },
        G = function G(t) {
      return V(a(t).call(document.documentElement));
    },
        Q = 0;

    function Z() {
      return new J();
    }

    function J() {
      this._ = "@" + (++Q).toString(36);
    }

    J.prototype = Z.prototype = {
      constructor: J,
      get: function get(t) {
        for (var n = this._; !(n in t);) {
          if (!(t = t.parentNode)) return;
        }

        return t[n];
      },
      set: function set(t, n) {
        return t[this._] = n;
      },
      remove: function remove(t) {
        return this._ in t && delete t[this._];
      },
      toString: function toString() {
        return this._;
      }
    };

    var K = function K() {
      for (var t, n = I; t = n.sourceEvent;) {
        n = t;
      }

      return n;
    },
        tt = function tt(t, n) {
      var e = t.ownerSVGElement || t;

      if (e.createSVGPoint) {
        var r = e.createSVGPoint();
        return r.x = n.clientX, r.y = n.clientY, [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y];
      }

      var o = t.getBoundingClientRect();
      return [n.clientX - o.left - t.clientLeft, n.clientY - o.top - t.clientTop];
    },
        nt = function nt(t) {
      var n = K();
      return n.changedTouches && (n = n.changedTouches[0]), tt(t, n);
    },
        et = function et(t) {
      return "string" == typeof t ? new q([document.querySelectorAll(t)], [document.documentElement]) : new q([null == t ? [] : t], z);
    },
        rt = function rt(t, n, e) {
      arguments.length < 3 && (e = n, n = K().changedTouches);

      for (var r, o = 0, i = n ? n.length : 0; o < i; ++o) {
        if ((r = n[o]).identifier === e) return tt(t, r);
      }

      return null;
    },
        ot = function ot(t, n) {
      null == n && (n = K().touches);

      for (var e = 0, r = n ? n.length : 0, o = new Array(r); e < r; ++e) {
        o[e] = tt(t, n[e]);
      }

      return o;
    };

    e.d(n, "create", function () {
      return G;
    }), e.d(n, "creator", function () {
      return a;
    }), e.d(n, "local", function () {
      return Z;
    }), e.d(n, "matcher", function () {
      return g;
    }), e.d(n, "mouse", function () {
      return nt;
    }), e.d(n, "namespace", function () {
      return i;
    }), e.d(n, "namespaces", function () {
      return o;
    }), e.d(n, "clientPoint", function () {
      return tt;
    }), e.d(n, "select", function () {
      return V;
    }), e.d(n, "selectAll", function () {
      return et;
    }), e.d(n, "selection", function () {
      return $;
    }), e.d(n, "selector", function () {
      return c;
    }), e.d(n, "selectorAll", function () {
      return l;
    }), e.d(n, "style", function () {
      return x;
    }), e.d(n, "touch", function () {
      return rt;
    }), e.d(n, "touches", function () {
      return ot;
    }), e.d(n, "window", function () {
      return w;
    }), e.d(n, "event", function () {
      return I;
    }), e.d(n, "customEvent", function () {
      return Y;
    });
  }, function (t, n, e) {
    "use strict";

    e.d(n, "b", function () {
      return i;
    }), e.d(n, "f", function () {
      return a;
    }), e.d(n, "e", function () {
      return s;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "h", function () {
      return u;
    }), e.d(n, "g", function () {
      return l;
    }), e.d(n, "d", function () {
      return f;
    }), e.d(n, "a", function () {
      return Object;
    });
    var r = e(0),
        o = Object.assign({}, r);

    function i() {
      return "assembly" in this.config && /(GCF_|GCA_)/.test(this.config.assembly);
    }

    function a(t) {
      return "assembly" in t.config && !1 === /(GCA_)/.test(t.config.assembly);
    }

    function s(t) {
      return "assembly" in t.config && /(GCA_)/.test(t.config.assembly);
    }

    function c() {
      var t,
          n,
          e,
          r = document.scripts,
          o = location.host.split(":")[0],
          i = Ideogram.version;
      if ("localhost" !== o && "127.0.0.1" !== o) return "https://unpkg.com/ideogram@" + i + "/dist/data/bands/native/";

      for (var a = 0; a < r.length; a++) {
        if (t = r[a], e = /ideogram/.test(t.src.split("/").slice(-1)), "src" in t && e) return (n = t.src.split("//"))[0] + "//" + (n = "/" + n[1].split("/").slice(0, -2).join("/")) + "/data/bands/native/";
      }

      return "../data/bands/native/";
    }

    function u(t) {
      return Math.round(100 * t) / 100;
    }

    function l(t) {
      call(this.onDidRotateCallback, t);
    }

    function f() {
      return o.select(this.selector).node();
    }
  }, function (t, n, e) {
    "use strict";

    function r(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.blob();
    }

    e.r(n);

    var o = function o(t, n) {
      return fetch(t, n).then(r);
    };

    function i(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.arrayBuffer();
    }

    var a = function a(t, n) {
      return fetch(t, n).then(i);
    },
        s = {},
        c = {},
        u = 34,
        l = 10,
        f = 13;

    function h(t) {
      return new Function("d", "return {" + t.map(function (t, n) {
        return JSON.stringify(t) + ": d[" + n + "]";
      }).join(",") + "}");
    }

    var d = function d(t) {
      var n = new RegExp('["' + t + "\n\r]"),
          e = t.charCodeAt(0);

      function r(t, n) {
        var r,
            o = [],
            i = t.length,
            a = 0,
            h = 0,
            d = i <= 0,
            g = !1;

        function p() {
          if (d) return c;
          if (g) return g = !1, s;
          var n,
              r,
              o = a;

          if (t.charCodeAt(o) === u) {
            for (; a++ < i && t.charCodeAt(a) !== u || t.charCodeAt(++a) === u;) {
              ;
            }

            return (n = a) >= i ? d = !0 : (r = t.charCodeAt(a++)) === l ? g = !0 : r === f && (g = !0, t.charCodeAt(a) === l && ++a), t.slice(o + 1, n - 1).replace(/""/g, '"');
          }

          for (; a < i;) {
            if ((r = t.charCodeAt(n = a++)) === l) g = !0;else if (r === f) g = !0, t.charCodeAt(a) === l && ++a;else if (r !== e) continue;
            return t.slice(o, n);
          }

          return d = !0, t.slice(o, i);
        }

        for (t.charCodeAt(i - 1) === l && --i, t.charCodeAt(i - 1) === f && --i; (r = p()) !== c;) {
          for (var m = []; r !== s && r !== c;) {
            m.push(r), r = p();
          }

          n && null == (m = n(m, h++)) || o.push(m);
        }

        return o;
      }

      function o(n) {
        return n.map(i).join(t);
      }

      function i(t) {
        return null == t ? "" : n.test(t += "") ? '"' + t.replace(/"/g, '""') + '"' : t;
      }

      return {
        parse: function parse(t, n) {
          var e,
              o,
              i = r(t, function (t, r) {
            if (e) return e(t, r - 1);
            o = t, e = n ? function (t, n) {
              var e = h(t);
              return function (r, o) {
                return n(e(r), o, t);
              };
            }(t, n) : h(t);
          });
          return i.columns = o || [], i;
        },
        parseRows: r,
        format: function format(n, e) {
          return null == e && (e = function (t) {
            var n = Object.create(null),
                e = [];
            return t.forEach(function (t) {
              for (var r in t) {
                r in n || e.push(n[r] = r);
              }
            }), e;
          }(n)), [e.map(i).join(t)].concat(n.map(function (n) {
            return e.map(function (t) {
              return i(n[t]);
            }).join(t);
          })).join("\n");
        },
        formatRows: function formatRows(t) {
          return t.map(o).join("\n");
        }
      };
    },
        g = d(","),
        p = g.parse,
        m = (g.parseRows, g.format, g.formatRows, d("\t")),
        b = m.parse;

    m.parseRows, m.format, m.formatRows;

    function v(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.text();
    }

    var y = function y(t, n) {
      return fetch(t, n).then(v);
    };

    function _(t) {
      return function (n, e, r) {
        return 2 === arguments.length && "function" == typeof e && (r = e, e = void 0), y(n, e).then(function (n) {
          return t(n, r);
        });
      };
    }

    function w(t, n, e, r) {
      3 === arguments.length && "function" == typeof e && (r = e, e = void 0);
      var o = d(t);
      return y(n, e).then(function (t) {
        return o.parse(t, r);
      });
    }

    var x = _(p),
        A = _(b),
        C = function C(t, n) {
      return new Promise(function (e, r) {
        var o = new Image();

        for (var i in n) {
          o[i] = n[i];
        }

        o.onerror = r, o.onload = function () {
          e(o);
        }, o.src = t;
      });
    };

    function T(t) {
      if (!t.ok) throw new Error(t.status + " " + t.statusText);
      return t.json();
    }

    var M = function M(t, n) {
      return fetch(t, n).then(T);
    };

    function k(t) {
      return function (n, e) {
        return y(n, e).then(function (n) {
          return new DOMParser().parseFromString(n, t);
        });
      };
    }

    var S = k("application/xml"),
        L = k("text/html"),
        D = k("image/svg+xml");
    e.d(n, "blob", function () {
      return o;
    }), e.d(n, "buffer", function () {
      return a;
    }), e.d(n, "dsv", function () {
      return w;
    }), e.d(n, "csv", function () {
      return x;
    }), e.d(n, "tsv", function () {
      return A;
    }), e.d(n, "image", function () {
      return C;
    }), e.d(n, "json", function () {
      return M;
    }), e.d(n, "text", function () {
      return y;
    }), e.d(n, "xml", function () {
      return S;
    }), e.d(n, "html", function () {
      return L;
    }), e.d(n, "svg", function () {
      return D;
    });
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.d(__webpack_exports__, "b", function () {
      return getTaxidFromEutils;
    }), __webpack_require__.d(__webpack_exports__, "d", function () {
      return setTaxidAndAssemblyAndChromosomes;
    }), __webpack_require__.d(__webpack_exports__, "c", function () {
      return getTaxids;
    }), __webpack_require__.d(__webpack_exports__, "e", function () {
      return setTaxidData;
    }), __webpack_require__.d(__webpack_exports__, "a", function () {
      return getOrganismFromEutils;
    });

    var d3_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2),
        d3 = Object.assign({}, d3_fetch__WEBPACK_IMPORTED_MODULE_0__);

    function getTaxidFromEutils(t) {
      var n,
          e,
          r,
          o = this;
      n = o.config.organism, e = o.esearch + "&db=taxonomy&term=" + n, d3.json(e).then(function (n) {
        return r = n.esearchresult.idlist[0], void 0 === o.config.taxids ? o.config.taxids = [r] : o.config.taxids.push(r), t(r);
      });
    }

    function setTaxidData(taxid) {
      var organism,
          dataDir,
          urlOrg,
          taxids,
          ideo = this;
      organism = ideo.config.organism, dataDir = ideo.config.dataDir, urlOrg = organism.replace(" ", "-"), taxids = [taxid], ideo.organisms[taxid] = {
        commonName: "",
        scientificName: organism,
        scientificNameAbbr: ""
      };
      var fullyBandedTaxids = ["9606", "10090", "10116"];
      fullyBandedTaxids.includes(taxid) && !ideo.config.showFullyBanded && (urlOrg += "-no-bands");
      var chromosomesUrl = dataDir + urlOrg + ".js",
          promise2 = new Promise(function (t, n) {
        fetch(chromosomesUrl).then(function (e) {
          if (!1 !== e.ok) return e.text().then(function (n) {
            t(n);
          });
          n(Error("Fetch failed for " + chromosomesUrl));
        });
      });
      return promise2.then(function (data) {
        var asmAndChrTaxidsArray = [""],
            chromosomes = [],
            seenChrs = {},
            chr;
        eval(data);

        for (var i = 0; i < chrBands.length; i++) {
          chr = chrBands[i].split(" ")[0], chr in seenChrs || (chromosomes.push({
            name: chr,
            type: "nuclear"
          }), seenChrs[chr] = 1);
        }

        return chromosomes = chromosomes.sort(Ideogram.sortChromosomes), asmAndChrTaxidsArray.push(chromosomes), asmAndChrTaxidsArray.push(taxids), ideo.coordinateSystem = "iscn", asmAndChrTaxidsArray;
      }, function () {
        return new Promise(function (t) {
          ideo.coordinateSystem = "bp", ideo.getAssemblyAndChromosomesFromEutils(t);
        });
      });
    }

    function setTaxidAndAssemblyAndChromosomes(t) {
      var n,
          e,
          r,
          o,
          i = this;
      new Promise(function (t) {
        i.getTaxidFromEutils(t);
      }).then(function (t) {
        return r = t, i.setTaxidData(r);
      }).then(function (a) {
        n = a[0], e = a[1], o = i.config.taxids, i.config.chromosomes = e, i.organisms[r].assemblies = {
          default: n
        }, t(o);
      });
    }

    function prepareTmpChrsAndTaxids(t) {
      var n,
          e,
          r,
          o,
          i,
          a,
          s = t.config;

      for (e = [], r = {}, n = s.multiorganism ? s.organism : [s.organism], o = 0; o < n.length; o++) {
        for (a in i = n[o], t.organisms) {
          t.organisms[a].commonName.toLowerCase() === i && (e.push(a), s.multiorganism && (r[a] = s.chromosomes[i]));
        }
      }

      return [r, e];
    }

    function getTaxidsForOrganismInConfig(t, n, e) {
      var _prepareTmpChrsAndTax, _prepareTmpChrsAndTax2;

      var r;
      (_prepareTmpChrsAndTax = prepareTmpChrsAndTaxids(e), _prepareTmpChrsAndTax2 = _slicedToArray(_prepareTmpChrsAndTax, 2), r = _prepareTmpChrsAndTax2[0], t = _prepareTmpChrsAndTax2[1], _prepareTmpChrsAndTax), 0 === t.length || e.assemblyIsAccession() && /GCA_/.test(e.config.assembly) ? e.setTaxidAndAssemblyAndChromosomes(n) : (e.config.taxids = t, e.config.multiorganism && (e.config.chromosomes = r), n(t));
    }

    function getIsMultiorganism(t, n) {
      return "organism" in n.config && n.config.organism instanceof Array || t && n.config.taxid instanceof Array;
    }

    function getTaxidsForOrganismNotInConfig(t, n, e, r) {
      r.config.multiorganism ? (r.coordinateSystem = "bp", n && (t = r.config.taxid)) : (n && (t = [r.config.taxid]), r.config.taxids = t), e(t);
    }

    function getTaxids(t) {
      var n;
      n = "taxid" in this.config, this.config.multiorganism = getIsMultiorganism(n, this), "organism" in this.config ? getTaxidsForOrganismInConfig(void 0, t, this) : getTaxidsForOrganismNotInConfig(void 0, n, t, this);
    }

    function getOrganismFromEutils(t) {
      var n,
          e,
          r,
          o = this;
      r = o.config.organism, e = o.esummary + "&db=taxonomy&id=" + r, d3.json(e).then(function (e) {
        return n = e.result[String(r)].commonname, o.config.organism = n, t(n);
      });
    }
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.d(__webpack_exports__, "a", function () {
      return parseBands;
    });

    var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

    function getDelimiterTsvLinesAndInit(source, content) {
      var delimiter, tsvLines, init;
      return "undefined" == typeof chrBands && "native" !== source ? (delimiter = /\t/, tsvLines = content.split(/\r\n|\n/), init = 1) : (delimiter = / /, tsvLines = "native" === source ? eval(content) : content, init = 0), [delimiter, tsvLines, init];
    }

    function updateChromosomes(t) {
      var n, e;

      if (t instanceof Array && "object" == _typeof(t[0])) {
        for (n = [], e = 0; e < t.length; e++) {
          n.push(t[e].name);
        }

        t = n;
      }

      return t;
    }

    function getLineObject(t, n, e, r) {
      return {
        chr: t,
        bp: {
          start: parseInt(n[5], 10),
          stop: parseInt(n[6], 10)
        },
        iscn: {
          start: parseInt(n[3], 10),
          stop: parseInt(n[4], 10)
        },
        px: {
          start: -1,
          stop: -1,
          width: -1
        },
        name: n[1] + n[2],
        stain: e,
        taxid: r
      };
    }

    function getStain(t) {
      var n = t[7];
      return t[8] && (n += t[8]), n;
    }

    function updateLines(t, n, e) {
      var r, o;
      return (r = n[0]) in t == !1 && (t[r] = []), o = getLineObject(r, n, getStain(n), e), t[r].push(o), t;
    }

    function parseBands(t, n, e) {
      var r,
          o,
          i,
          a,
          s,
          c,
          u,
          l = {};

      for ("window.chrBands" === t.slice(0, 15) && (u = "native"), e = updateChromosomes(e), (_getDelimiterTsvLines = getDelimiterTsvLinesAndInit(u, t), _getDelimiterTsvLines2 = _slicedToArray(_getDelimiterTsvLines, 3), r = _getDelimiterTsvLines2[0], o = _getDelimiterTsvLines2[1], c = _getDelimiterTsvLines2[2], _getDelimiterTsvLines), s = c; s < o.length; s++) {
        var _getDelimiterTsvLines, _getDelimiterTsvLines2;

        a = (i = o[s].split(r))[0], void 0 !== e && -1 === e.indexOf(a) || (l = updateLines(l, i, n));
      }

      return l;
    }
  }, function (module, __webpack_exports__, __webpack_require__) {
    "use strict";

    function setBandData(t, n, e, r) {
      var o, i, a;

      for (o in n) {
        a = n[o], t.includes(a) && "" !== a && (i = o);
      }

      r.bandData[i] = e;
    }

    function fetchBands(bandDataFileNames, taxid, t0, ideo) {
      var bandDataUrl = ideo.config.dataDir + bandDataFileNames[taxid];
      ideo.numBandDataResponses || (ideo.numBandDataResponses = 0), fetch(bandDataUrl).then(function (response) {
        return response.text().then(function (rawBands) {
          if (delete window.chrBands, eval(rawBands), setBandData(response.url, bandDataFileNames, chrBands, ideo), ideo.numBandDataResponses += 1, ideo.numBandDataResponses === ideo.config.taxids.length) {
            var bandsArray = ideo.processBandData();
            ideo.writeContainer(bandsArray, taxid, t0), delete ideo.numBandDataResponses;
          }
        });
      });
    }

    __webpack_require__.d(__webpack_exports__, "a", function () {
      return fetchBands;
    });
  }, function (t, n, e) {
    t.exports = e(7).crossfilter;
  }, function (t, n) {
    !function (t) {
      function n(t) {
        return t;
      }

      function e(t, n) {
        for (var e = 0, r = n.length, o = new Array(r); e < r; ++e) {
          o[e] = t[n[e]];
        }

        return o;
      }

      A.version = "1.3.12", A.permute = e;
      var r = A.bisect = o(n);

      function o(t) {
        function n(n, e, r, o) {
          for (; r < o;) {
            var i = r + o >>> 1;
            e < t(n[i]) ? o = i : r = i + 1;
          }

          return r;
        }

        return n.right = n, n.left = function (n, e, r, o) {
          for (; r < o;) {
            var i = r + o >>> 1;
            t(n[i]) < e ? r = i + 1 : o = i;
          }

          return r;
        }, n;
      }

      function i(t) {
        function n(t, n, r) {
          for (var o = r - n, i = 1 + (o >>> 1); --i > 0;) {
            e(t, i, o, n);
          }

          return t;
        }

        function e(n, e, r, o) {
          for (var i, a = n[--o + e], s = t(a); (i = e << 1) <= r && (i < r && t(n[o + i]) > t(n[o + i + 1]) && i++, !(s <= t(n[o + i])));) {
            n[o + e] = n[o + i], e = i;
          }

          n[o + e] = a;
        }

        return n.sort = function (t, n, r) {
          for (var o, i = r - n; --i > 0;) {
            o = t[n], t[n] = t[n + i], t[n + i] = o, e(t, 1, i, n);
          }

          return t;
        }, n;
      }

      function a(t) {
        var n = i(t);
        return function (e, r, o, i) {
          var a,
              s,
              c,
              u = new Array(i = Math.min(o - r, i));

          for (s = 0; s < i; ++s) {
            u[s] = e[r++];
          }

          if (n(u, 0, i), r < o) {
            a = t(u[0]);

            do {
              t(c = e[r]) > a && (u[0] = c, a = t(n(u, 0, i)[0]));
            } while (++r < o);
          }

          return u;
        };
      }

      function s(t) {
        return function (n, e, r) {
          for (var o = e + 1; o < r; ++o) {
            for (var i = o, a = n[o], s = t(a); i > e && t(n[i - 1]) > s; --i) {
              n[i] = n[i - 1];
            }

            n[i] = a;
          }

          return n;
        };
      }

      function c(t) {
        var n = s(t);

        function e(r, o, i) {
          return (i - o < u ? n : function (n, r, o) {
            var i,
                a = (o - r) / 6 | 0,
                s = r + a,
                c = o - 1 - a,
                u = r + o - 1 >> 1,
                l = u - a,
                f = u + a,
                h = n[s],
                d = t(h),
                g = n[l],
                p = t(g),
                m = n[u],
                b = t(m),
                v = n[f],
                y = t(v),
                _ = n[c],
                w = t(_);
            d > p && (i = h, h = g, g = i, i = d, d = p, p = i);
            y > w && (i = v, v = _, _ = i, i = y, y = w, w = i);
            d > b && (i = h, h = m, m = i, i = d, d = b, b = i);
            p > b && (i = g, g = m, m = i, i = p, p = b, b = i);
            d > y && (i = h, h = v, v = i, i = d, d = y, y = i);
            b > y && (i = m, m = v, v = i, i = b, b = y, y = i);
            p > w && (i = g, g = _, _ = i, i = p, p = w, w = i);
            p > b && (i = g, g = m, m = i, i = p, p = b, b = i);
            y > w && (i = v, v = _, _ = i, i = y, y = w, w = i);
            var x = g,
                A = p,
                C = v,
                T = y;
            n[s] = h, n[l] = n[r], n[u] = m, n[f] = n[o - 1], n[c] = _;
            var M = r + 1,
                k = o - 2,
                S = A <= T && A >= T;
            if (S) for (var L = M; L <= k; ++L) {
              var D = n[L],
                  B = t(D);
              if (B < A) L !== M && (n[L] = n[M], n[M] = D), ++M;else if (B > A) for (;;) {
                var F = t(n[k]);

                if (!(F > A)) {
                  if (F < A) {
                    n[L] = n[M], n[M++] = n[k], n[k--] = D;
                    break;
                  }

                  n[L] = n[k], n[k--] = D;
                  break;
                }

                k--;
              }
            } else for (var L = M; L <= k; L++) {
              var D = n[L],
                  B = t(D);
              if (B < A) L !== M && (n[L] = n[M], n[M] = D), ++M;else if (B > T) for (;;) {
                var F = t(n[k]);

                if (!(F > T)) {
                  F < A ? (n[L] = n[M], n[M++] = n[k], n[k--] = D) : (n[L] = n[k], n[k--] = D);
                  break;
                }

                if (--k < L) break;
              }
            }
            if (n[r] = n[M - 1], n[M - 1] = x, n[o - 1] = n[k + 1], n[k + 1] = C, e(n, r, M - 1), e(n, k + 2, o), S) return n;

            if (M < s && k > c) {
              for (var N; (N = t(n[M])) <= A && N >= A;) {
                ++M;
              }

              for (; (F = t(n[k])) <= T && F >= T;) {
                --k;
              }

              for (var L = M; L <= k; L++) {
                var D = n[L],
                    B = t(D);
                if (B <= A && B >= A) L !== M && (n[L] = n[M], n[M] = D), M++;else if (B <= T && B >= T) for (;;) {
                  var F = t(n[k]);

                  if (!(F <= T && F >= T)) {
                    F < A ? (n[L] = n[M], n[M++] = n[k], n[k--] = D) : (n[L] = n[k], n[k--] = D);
                    break;
                  }

                  if (--k < L) break;
                }
              }
            }

            return e(n, M, k + 1);
          })(r, o, i);
        }

        return e;
      }

      r.by = o, (A.heap = i(n)).by = i, (A.heapselect = a(n)).by = a, (A.insertionsort = s(n)).by = s, (A.quicksort = c(n)).by = c;

      var u = 32,
          l = p,
          f = p,
          h = p,
          d = function d(t, n) {
        var e = t.length;

        for (; e < n;) {
          t[e++] = 0;
        }

        return t;
      },
          g = function g(t, n) {
        if (n > 32) throw new Error("invalid array width!");
        return t;
      };

      function p(t) {
        for (var n = new Array(t), e = -1; ++e < t;) {
          n[e] = 0;
        }

        return n;
      }

      function m(t) {
        return [0, t.length];
      }

      function b() {
        return null;
      }

      function v() {
        return 0;
      }

      function y(t) {
        return t + 1;
      }

      function _(t) {
        return t - 1;
      }

      function w(t) {
        return function (n, e) {
          return n + +t(e);
        };
      }

      function x(t) {
        return function (n, e) {
          return n - t(e);
        };
      }

      function A() {
        var t = {
          add: k,
          remove: function remove() {
            for (var t = C(s, s), n = [], e = 0, r = 0; e < s; ++e) {
              h[e] ? t[e] = r++ : n.push(e);
            }

            p.forEach(function (t) {
              t(0, [], n);
            }), M.forEach(function (n) {
              n(t);
            });

            for (var i, e = 0, r = 0; e < s; ++e) {
              (i = h[e]) && (e !== r && (h[r] = i, o[r] = o[e]), ++r);
            }

            o.length = r;

            for (; s > r;) {
              h[--s] = 0;
            }
          },
          dimension: function dimension(t) {
            var l,
                k,
                S,
                L,
                D,
                B = {
              filter: function filter(t) {
                return null == t ? X() : Array.isArray(t) ? q(t) : "function" == typeof t ? $(t) : z(t);
              },
              filterExact: z,
              filterRange: q,
              filterFunction: $,
              filterAll: X,
              top: function top(t) {
                var n,
                    e = [],
                    r = H;

                for (; --r >= j && t > 0;) {
                  h[n = k[r]] || (e.push(o[n]), --t);
                }

                return e;
              },
              bottom: function bottom(t) {
                var n,
                    e = [],
                    r = j;

                for (; r < H && t > 0;) {
                  h[n = k[r]] || (e.push(o[n]), --t), r++;
                }

                return e;
              },
              group: G,
              groupAll: function groupAll() {
                var t = G(b),
                    n = t.all;
                return delete t.all, delete t.top, delete t.order, delete t.orderNatural, delete t.size, t.value = function () {
                  return n()[0].value;
                }, t;
              },
              dispose: Q,
              remove: Q
            },
                F = ~u & -~u,
                N = ~F,
                O = c(function (t) {
              return S[t];
            }),
                P = m,
                E = [],
                I = [],
                j = 0,
                H = 0;
            A.unshift(U), A.push(W), M.push(Y), u |= F, (f >= 32 ? !F : u & -(1 << f)) && (h = g(h, f <<= 1));

            function U(n, r, o) {
              S = n.map(t), L = O(function (t) {
                for (var n = C(t, t), e = -1; ++e < t;) {
                  n[e] = e;
                }

                return n;
              }(o), 0, o), S = e(S, L);
              var i,
                  a = P(S),
                  c = a[0],
                  u = a[1];
              if (D) for (i = 0; i < o; ++i) {
                D(S[i], i) || (h[L[i] + r] |= F);
              } else {
                for (i = 0; i < c; ++i) {
                  h[L[i] + r] |= F;
                }

                for (i = u; i < o; ++i) {
                  h[L[i] + r] |= F;
                }
              }
              if (!r) return l = S, k = L, j = c, void (H = u);
              var f = l,
                  d = k,
                  g = 0,
                  p = 0;

              for (l = new Array(s), k = C(s, s), i = 0; g < r && p < o; ++i) {
                f[g] < S[p] ? (l[i] = f[g], k[i] = d[g++]) : (l[i] = S[p], k[i] = L[p++] + r);
              }

              for (; g < r; ++g, ++i) {
                l[i] = f[g], k[i] = d[g];
              }

              for (; p < o; ++p, ++i) {
                l[i] = S[p], k[i] = L[p] + r;
              }

              a = P(l), j = a[0], H = a[1];
            }

            function W(t, n, e) {
              E.forEach(function (t) {
                t(S, L, n, e);
              }), S = L = null;
            }

            function Y(t) {
              for (var n, e = 0, r = 0; e < s; ++e) {
                h[n = k[e]] && (e !== r && (l[r] = l[e]), k[r] = t[n], ++r);
              }

              for (l.length = r; r < s;) {
                k[r++] = 0;
              }

              var o = P(l);
              j = o[0], H = o[1];
            }

            function R(t) {
              var n = t[0],
                  e = t[1];
              if (D) return D = null, V(function (t, r) {
                return n <= r && r < e;
              }), j = n, H = e, B;
              var r,
                  o,
                  i,
                  a = [],
                  s = [];
              if (n < j) for (r = n, o = Math.min(j, e); r < o; ++r) {
                h[i = k[r]] ^= F, a.push(i);
              } else if (n > j) for (r = j, o = Math.min(n, H); r < o; ++r) {
                h[i = k[r]] ^= F, s.push(i);
              }
              if (e > H) for (r = Math.max(n, H), o = e; r < o; ++r) {
                h[i = k[r]] ^= F, a.push(i);
              } else if (e < H) for (r = Math.max(j, e), o = H; r < o; ++r) {
                h[i = k[r]] ^= F, s.push(i);
              }
              return j = n, H = e, p.forEach(function (t) {
                t(F, a, s);
              }), B;
            }

            function z(t) {
              return R((P = function (t, n) {
                return function (e) {
                  var r = e.length;
                  return [t.left(e, n, 0, r), t.right(e, n, 0, r)];
                };
              }(r, t))(l));
            }

            function q(t) {
              return R((P = function (t, n) {
                var e = n[0],
                    r = n[1];
                return function (n) {
                  var o = n.length;
                  return [t.left(n, e, 0, o), t.left(n, r, 0, o)];
                };
              }(r, t))(l));
            }

            function X() {
              return R((P = m)(l));
            }

            function $(t) {
              return P = m, V(D = t), j = 0, H = s, B;
            }

            function V(t) {
              var n,
                  e,
                  r,
                  o = [],
                  i = [];

              for (n = 0; n < s; ++n) {
                !(h[e = k[n]] & F) ^ !!(r = t(l[n], n)) && (r ? (h[e] &= N, o.push(e)) : (h[e] |= F, i.push(e)));
              }

              p.forEach(function (t) {
                t(F, o, i);
              });
            }

            function G(t) {
              var e = {
                top: function top(t) {
                  var n = u(X(), 0, r.length, t);
                  return f.sort(n, 0, n.length);
                },
                all: X,
                reduce: $,
                reduceCount: V,
                reduceSum: function reduceSum(t) {
                  return $(w(t), x(t), v);
                },
                order: G,
                orderNatural: function orderNatural() {
                  return G(n);
                },
                size: function size() {
                  return B;
                },
                dispose: Q,
                remove: Q
              };
              I.push(e);
              var r,
                  c,
                  u,
                  f,
                  m,
                  A,
                  S,
                  L = 8,
                  D = T(L),
                  B = 0,
                  O = b,
                  P = b,
                  j = !0,
                  H = t === b;

              function U(n, e, i, a) {
                var u,
                    l,
                    f,
                    v,
                    y,
                    _,
                    w = r,
                    x = C(B, D),
                    A = m,
                    M = S,
                    k = B,
                    F = 0,
                    E = 0;

                for (j && (A = M = b), r = new Array(B), B = 0, c = k > 1 ? d(c, s) : C(s, D), k && (f = (l = w[0]).key); E < a && !((v = t(n[E])) >= v);) {
                  ++E;
                }

                for (; E < a;) {
                  for (l && f <= v ? (y = l, _ = f, x[F] = B, (l = w[++F]) && (f = l.key)) : (y = {
                    key: v,
                    value: M()
                  }, _ = v), r[B] = y; !(v > _ || (c[u = e[E] + i] = B, h[u] & N || (y.value = A(y.value, o[u])), ++E >= a));) {
                    v = t(n[E]);
                  }

                  I();
                }

                for (; F < k;) {
                  r[x[F] = B] = w[F++], I();
                }

                if (B > F) for (F = 0; F < i; ++F) {
                  c[F] = x[c[F]];
                }

                function I() {
                  ++B === D && (x = g(x, L <<= 1), c = g(c, L), D = T(L));
                }

                u = p.indexOf(O), B > 1 ? (O = Y, P = z) : (!B && H && (B = 1, r = [{
                  key: null,
                  value: M()
                }]), 1 === B ? (O = R, P = q) : (O = b, P = b), c = null), p[u] = O;
              }

              function W() {
                if (B > 1) {
                  for (var t = B, n = r, e = C(t, t), o = 0, i = 0; o < s; ++o) {
                    h[o] && (e[c[i] = c[o]] = 1, ++i);
                  }

                  for (r = [], B = 0, o = 0; o < t; ++o) {
                    e[o] && (e[o] = B++, r.push(n[o]));
                  }

                  if (B > 1) for (var o = 0; o < i; ++o) {
                    c[o] = e[c[o]];
                  } else c = null;
                  p[p.indexOf(O)] = B > 1 ? (P = z, O = Y) : 1 === B ? (P = q, O = R) : P = O = b;
                } else if (1 === B) {
                  if (H) return;

                  for (var o = 0; o < s; ++o) {
                    if (h[o]) return;
                  }

                  r = [], B = 0, p[p.indexOf(O)] = O = P = b;
                }
              }

              function Y(t, n, e) {
                if (t !== F && !j) {
                  var i, a, s, u;

                  for (i = 0, s = n.length; i < s; ++i) {
                    h[a = n[i]] & N || ((u = r[c[a]]).value = m(u.value, o[a]));
                  }

                  for (i = 0, s = e.length; i < s; ++i) {
                    (h[a = e[i]] & N) === t && ((u = r[c[a]]).value = A(u.value, o[a]));
                  }
                }
              }

              function R(t, n, e) {
                if (t !== F && !j) {
                  var i,
                      a,
                      s,
                      c = r[0];

                  for (i = 0, s = n.length; i < s; ++i) {
                    h[a = n[i]] & N || (c.value = m(c.value, o[a]));
                  }

                  for (i = 0, s = e.length; i < s; ++i) {
                    (h[a = e[i]] & N) === t && (c.value = A(c.value, o[a]));
                  }
                }
              }

              function z() {
                var t, n;

                for (t = 0; t < B; ++t) {
                  r[t].value = S();
                }

                for (t = 0; t < s; ++t) {
                  h[t] & N || ((n = r[c[t]]).value = m(n.value, o[t]));
                }
              }

              function q() {
                var t,
                    n = r[0];

                for (n.value = S(), t = 0; t < s; ++t) {
                  h[t] & N || (n.value = m(n.value, o[t]));
                }
              }

              function X() {
                return j && (P(), j = !1), r;
              }

              function $(t, n, r) {
                return m = t, A = n, S = r, j = !0, e;
              }

              function V() {
                return $(y, _, v);
              }

              function G(t) {
                function n(n) {
                  return t(n.value);
                }

                return u = a(n), f = i(n), e;
              }

              function Q() {
                var t = p.indexOf(O);
                return t >= 0 && p.splice(t, 1), (t = E.indexOf(U)) >= 0 && E.splice(t, 1), (t = M.indexOf(W)) >= 0 && M.splice(t, 1), e;
              }

              return arguments.length < 1 && (t = n), p.push(O), E.push(U), M.push(W), U(l, k, 0, s), V().orderNatural();
            }

            function Q() {
              I.forEach(function (t) {
                t.dispose();
              });
              var t = A.indexOf(U);
              return t >= 0 && A.splice(t, 1), (t = A.indexOf(W)) >= 0 && A.splice(t, 1), (t = M.indexOf(Y)) >= 0 && M.splice(t, 1), u &= N, X();
            }

            return U(o, 0, s), W(o, 0, s), B;
          },
          groupAll: function groupAll() {
            var t,
                n,
                e,
                r,
                i = {
              reduce: l,
              reduceCount: f,
              reduceSum: function reduceSum(t) {
                return l(w(t), x(t), v);
              },
              value: function value() {
                a && (function () {
                  var e;

                  for (t = r(), e = 0; e < s; ++e) {
                    h[e] || (t = n(t, o[e]));
                  }
                }(), a = !1);
                return t;
              },
              dispose: d,
              remove: d
            },
                a = !0;

            function c(e, r) {
              var i;
              if (!a) for (i = r; i < s; ++i) {
                h[i] || (t = n(t, o[i]));
              }
            }

            function u(r, i, s) {
              var c, u, l;

              if (!a) {
                for (c = 0, l = i.length; c < l; ++c) {
                  h[u = i[c]] || (t = n(t, o[u]));
                }

                for (c = 0, l = s.length; c < l; ++c) {
                  h[u = s[c]] === r && (t = e(t, o[u]));
                }
              }
            }

            function l(t, o, s) {
              return n = t, e = o, r = s, a = !0, i;
            }

            function f() {
              return l(y, _, v);
            }

            function d() {
              var t = p.indexOf(u);
              return t >= 0 && p.splice(t), (t = A.indexOf(c)) >= 0 && A.splice(t), i;
            }

            return p.push(u), A.push(c), c(o, 0), f();
          },
          size: function size() {
            return s;
          }
        },
            o = [],
            s = 0,
            u = 0,
            f = 8,
            h = l(0),
            p = [],
            A = [],
            M = [];

        function k(n) {
          var e = s,
              r = n.length;
          return r && (o = o.concat(n), h = d(h, s += r), A.forEach(function (t) {
            t(n, e, r);
          })), t;
        }

        return arguments.length ? k(arguments[0]) : t;
      }

      function C(t, n) {
        return (n < 257 ? l : n < 65537 ? f : h)(t);
      }

      function T(t) {
        return 8 === t ? 256 : 16 === t ? 65536 : 4294967296;
      }

      "undefined" != typeof Uint8Array && (l = function l(t) {
        return new Uint8Array(t);
      }, f = function f(t) {
        return new Uint16Array(t);
      }, h = function h(t) {
        return new Uint32Array(t);
      }, d = function d(t, n) {
        if (t.length >= n) return t;
        var e = new t.constructor(n);
        return e.set(t), e;
      }, g = function g(t, n) {
        var e;

        switch (n) {
          case 16:
            e = f(t.length);
            break;

          case 32:
            e = h(t.length);
            break;

          default:
            throw new Error("invalid array width!");
        }

        return e.set(t), e;
      }), t.crossfilter = A;
    }(void 0 !== n && n || this);
  }, function (t, n, e) {
    "use strict";

    e.r(n);
    var r = {};
    e.r(r), e.d(r, "dispatch", function () {
      return h;
    });
    var o = {};
    e.r(o), e.d(o, "brush", function () {
      return ae;
    }), e.d(o, "brushX", function () {
      return oe;
    }), e.d(o, "brushY", function () {
      return ie;
    }), e.d(o, "brushSelection", function () {
      return re;
    });
    var i = e(0),
        a = e(2),
        s = {
      value: function value() {}
    };

    function c() {
      for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
        if (!(t = arguments[n] + "") || t in r) throw new Error("illegal type: " + t);
        r[t] = [];
      }

      return new u(r);
    }

    function u(t) {
      this._ = t;
    }

    function l(t, n) {
      for (var e, r = 0, o = t.length; r < o; ++r) {
        if ((e = t[r]).name === n) return e.value;
      }
    }

    function f(t, n, e) {
      for (var r = 0, o = t.length; r < o; ++r) {
        if (t[r].name === n) {
          t[r] = s, t = t.slice(0, r).concat(t.slice(r + 1));
          break;
        }
      }

      return null != e && t.push({
        name: n,
        value: e
      }), t;
    }

    u.prototype = c.prototype = {
      constructor: u,
      on: function on(t, n) {
        var e,
            r = this._,
            o = function (t, n) {
          return t.trim().split(/^|\s+/).map(function (t) {
            var e = "",
                r = t.indexOf(".");
            if (r >= 0 && (e = t.slice(r + 1), t = t.slice(0, r)), t && !n.hasOwnProperty(t)) throw new Error("unknown type: " + t);
            return {
              type: t,
              name: e
            };
          });
        }(t + "", r),
            i = -1,
            a = o.length;

        if (!(arguments.length < 2)) {
          if (null != n && "function" != typeof n) throw new Error("invalid callback: " + n);

          for (; ++i < a;) {
            if (e = (t = o[i]).type) r[e] = f(r[e], t.name, n);else if (null == n) for (e in r) {
              r[e] = f(r[e], t.name, null);
            }
          }

          return this;
        }

        for (; ++i < a;) {
          if ((e = (t = o[i]).type) && (e = l(r[e], t.name))) return e;
        }
      },
      copy: function copy() {
        var t = {},
            n = this._;

        for (var e in n) {
          t[e] = n[e].slice();
        }

        return new u(t);
      },
      call: function call(t, n) {
        if ((e = arguments.length - 2) > 0) for (var e, r, o = new Array(e), i = 0; i < e; ++i) {
          o[i] = arguments[i + 2];
        }
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

        for (i = 0, e = (r = this._[t]).length; i < e; ++i) {
          r[i].value.apply(n, o);
        }
      },
      apply: function apply(t, n, e) {
        if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);

        for (var r = this._[t], o = 0, i = r.length; o < i; ++o) {
          r[o].value.apply(n, e);
        }
      }
    };
    var h = c;

    var d = function d() {
      i.event.preventDefault(), i.event.stopImmediatePropagation();
    },
        g = function g(t) {
      var n = t.document.documentElement,
          e = Object(i.select)(t).on("dragstart.drag", d, !0);
      "onselectstart" in n ? e.on("selectstart.drag", d, !0) : (n.__noselect = n.style.MozUserSelect, n.style.MozUserSelect = "none");
    };

    function p(t, n) {
      var e = t.document.documentElement,
          r = Object(i.select)(t).on("dragstart.drag", null);
      n && (r.on("click.drag", d, !0), setTimeout(function () {
        r.on("click.drag", null);
      }, 0)), "onselectstart" in e ? r.on("selectstart.drag", null) : (e.style.MozUserSelect = e.__noselect, delete e.__noselect);
    }

    function m(t, n, e, r, o, i, a, s, c, u) {
      this.target = t, this.type = n, this.subject = e, this.identifier = r, this.active = o, this.x = i, this.y = a, this.dx = s, this.dy = c, this._ = u;
    }

    m.prototype.on = function () {
      var t = this._.on.apply(this._, arguments);

      return t === this._ ? this : t;
    };

    var b = function b(t, n, e) {
      t.prototype = n.prototype = e, e.constructor = t;
    };

    function v(t, n) {
      var e = Object.create(t.prototype);

      for (var r in n) {
        e[r] = n[r];
      }

      return e;
    }

    function y() {}

    var _ = "\\s*([+-]?\\d+)\\s*",
        w = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
        x = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
        A = /^#([0-9a-f]{3})$/,
        C = /^#([0-9a-f]{6})$/,
        T = new RegExp("^rgb\\(" + [_, _, _] + "\\)$"),
        M = new RegExp("^rgb\\(" + [x, x, x] + "\\)$"),
        k = new RegExp("^rgba\\(" + [_, _, _, w] + "\\)$"),
        S = new RegExp("^rgba\\(" + [x, x, x, w] + "\\)$"),
        L = new RegExp("^hsl\\(" + [w, x, x] + "\\)$"),
        D = new RegExp("^hsla\\(" + [w, x, x, w] + "\\)$"),
        B = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074
    };

    function F(t) {
      var n;
      return t = (t + "").trim().toLowerCase(), (n = A.exec(t)) ? new I((n = parseInt(n[1], 16)) >> 8 & 15 | n >> 4 & 240, n >> 4 & 15 | 240 & n, (15 & n) << 4 | 15 & n, 1) : (n = C.exec(t)) ? N(parseInt(n[1], 16)) : (n = T.exec(t)) ? new I(n[1], n[2], n[3], 1) : (n = M.exec(t)) ? new I(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, 1) : (n = k.exec(t)) ? O(n[1], n[2], n[3], n[4]) : (n = S.exec(t)) ? O(255 * n[1] / 100, 255 * n[2] / 100, 255 * n[3] / 100, n[4]) : (n = L.exec(t)) ? H(n[1], n[2] / 100, n[3] / 100, 1) : (n = D.exec(t)) ? H(n[1], n[2] / 100, n[3] / 100, n[4]) : B.hasOwnProperty(t) ? N(B[t]) : "transparent" === t ? new I(NaN, NaN, NaN, 0) : null;
    }

    function N(t) {
      return new I(t >> 16 & 255, t >> 8 & 255, 255 & t, 1);
    }

    function O(t, n, e, r) {
      return r <= 0 && (t = n = e = NaN), new I(t, n, e, r);
    }

    function P(t) {
      return t instanceof y || (t = F(t)), t ? new I((t = t.rgb()).r, t.g, t.b, t.opacity) : new I();
    }

    function E(t, n, e, r) {
      return 1 === arguments.length ? P(t) : new I(t, n, e, null == r ? 1 : r);
    }

    function I(t, n, e, r) {
      this.r = +t, this.g = +n, this.b = +e, this.opacity = +r;
    }

    function j(t) {
      return ((t = Math.max(0, Math.min(255, Math.round(t) || 0))) < 16 ? "0" : "") + t.toString(16);
    }

    function H(t, n, e, r) {
      return r <= 0 ? t = n = e = NaN : e <= 0 || e >= 1 ? t = n = NaN : n <= 0 && (t = NaN), new W(t, n, e, r);
    }

    function U(t, n, e, r) {
      return 1 === arguments.length ? function (t) {
        if (t instanceof W) return new W(t.h, t.s, t.l, t.opacity);
        if (t instanceof y || (t = F(t)), !t) return new W();
        if (t instanceof W) return t;
        var n = (t = t.rgb()).r / 255,
            e = t.g / 255,
            r = t.b / 255,
            o = Math.min(n, e, r),
            i = Math.max(n, e, r),
            a = NaN,
            s = i - o,
            c = (i + o) / 2;
        return s ? (a = n === i ? (e - r) / s + 6 * (e < r) : e === i ? (r - n) / s + 2 : (n - e) / s + 4, s /= c < .5 ? i + o : 2 - i - o, a *= 60) : s = c > 0 && c < 1 ? 0 : a, new W(a, s, c, t.opacity);
      }(t) : new W(t, n, e, null == r ? 1 : r);
    }

    function W(t, n, e, r) {
      this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
    }

    function Y(t, n, e) {
      return 255 * (t < 60 ? n + (e - n) * t / 60 : t < 180 ? e : t < 240 ? n + (e - n) * (240 - t) / 60 : n);
    }

    b(y, F, {
      displayable: function displayable() {
        return this.rgb().displayable();
      },
      hex: function hex() {
        return this.rgb().hex();
      },
      toString: function toString() {
        return this.rgb() + "";
      }
    }), b(I, E, v(y, {
      brighter: function brighter(t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
      },
      darker: function darker(t) {
        return t = null == t ? .7 : Math.pow(.7, t), new I(this.r * t, this.g * t, this.b * t, this.opacity);
      },
      rgb: function rgb() {
        return this;
      },
      displayable: function displayable() {
        return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
      },
      hex: function hex() {
        return "#" + j(this.r) + j(this.g) + j(this.b);
      },
      toString: function toString() {
        var t = this.opacity;
        return (1 === (t = isNaN(t) ? 1 : Math.max(0, Math.min(1, t))) ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === t ? ")" : ", " + t + ")");
      }
    })), b(W, U, v(y, {
      brighter: function brighter(t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new W(this.h, this.s, this.l * t, this.opacity);
      },
      darker: function darker(t) {
        return t = null == t ? .7 : Math.pow(.7, t), new W(this.h, this.s, this.l * t, this.opacity);
      },
      rgb: function rgb() {
        var t = this.h % 360 + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < .5 ? e : 1 - e) * n,
            o = 2 * e - r;
        return new I(Y(t >= 240 ? t - 240 : t + 120, o, r), Y(t, o, r), Y(t < 120 ? t + 240 : t - 120, o, r), this.opacity);
      },
      displayable: function displayable() {
        return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
      }
    }));
    var R = Math.PI / 180,
        z = 180 / Math.PI,
        q = .96422,
        X = 1,
        $ = .82521,
        V = 4 / 29,
        G = 6 / 29,
        Q = 3 * G * G,
        Z = G * G * G;

    function J(t) {
      if (t instanceof tt) return new tt(t.l, t.a, t.b, t.opacity);

      if (t instanceof st) {
        if (isNaN(t.h)) return new tt(t.l, 0, 0, t.opacity);
        var n = t.h * R;
        return new tt(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
      }

      t instanceof I || (t = P(t));
      var e,
          r,
          o = ot(t.r),
          i = ot(t.g),
          a = ot(t.b),
          s = nt((.2225045 * o + .7168786 * i + .0606169 * a) / X);
      return o === i && i === a ? e = r = s : (e = nt((.4360747 * o + .3850649 * i + .1430804 * a) / q), r = nt((.0139322 * o + .0971045 * i + .7141733 * a) / $)), new tt(116 * s - 16, 500 * (e - s), 200 * (s - r), t.opacity);
    }

    function K(t, n, e, r) {
      return 1 === arguments.length ? J(t) : new tt(t, n, e, null == r ? 1 : r);
    }

    function tt(t, n, e, r) {
      this.l = +t, this.a = +n, this.b = +e, this.opacity = +r;
    }

    function nt(t) {
      return t > Z ? Math.pow(t, 1 / 3) : t / Q + V;
    }

    function et(t) {
      return t > G ? t * t * t : Q * (t - V);
    }

    function rt(t) {
      return 255 * (t <= .0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055);
    }

    function ot(t) {
      return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4);
    }

    function it(t) {
      if (t instanceof st) return new st(t.h, t.c, t.l, t.opacity);
      if (t instanceof tt || (t = J(t)), 0 === t.a && 0 === t.b) return new st(NaN, 0, t.l, t.opacity);
      var n = Math.atan2(t.b, t.a) * z;
      return new st(n < 0 ? n + 360 : n, Math.sqrt(t.a * t.a + t.b * t.b), t.l, t.opacity);
    }

    function at(t, n, e, r) {
      return 1 === arguments.length ? it(t) : new st(t, n, e, null == r ? 1 : r);
    }

    function st(t, n, e, r) {
      this.h = +t, this.c = +n, this.l = +e, this.opacity = +r;
    }

    b(tt, K, v(y, {
      brighter: function brighter(t) {
        return new tt(this.l + 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      darker: function darker(t) {
        return new tt(this.l - 18 * (null == t ? 1 : t), this.a, this.b, this.opacity);
      },
      rgb: function rgb() {
        var t = (this.l + 16) / 116,
            n = isNaN(this.a) ? t : t + this.a / 500,
            e = isNaN(this.b) ? t : t - this.b / 200;
        return new I(rt(3.1338561 * (n = q * et(n)) - 1.6168667 * (t = X * et(t)) - .4906146 * (e = $ * et(e))), rt(-.9787684 * n + 1.9161415 * t + .033454 * e), rt(.0719453 * n - .2289914 * t + 1.4052427 * e), this.opacity);
      }
    })), b(st, at, v(y, {
      brighter: function brighter(t) {
        return new st(this.h, this.c, this.l + 18 * (null == t ? 1 : t), this.opacity);
      },
      darker: function darker(t) {
        return new st(this.h, this.c, this.l - 18 * (null == t ? 1 : t), this.opacity);
      },
      rgb: function rgb() {
        return J(this).rgb();
      }
    }));
    var ct = -.14861,
        ut = 1.78277,
        lt = -.29227,
        ft = -.90649,
        ht = 1.97294,
        dt = ht * ft,
        gt = ht * ut,
        pt = ut * lt - ft * ct;

    function mt(t, n, e, r) {
      return 1 === arguments.length ? function (t) {
        if (t instanceof bt) return new bt(t.h, t.s, t.l, t.opacity);
        t instanceof I || (t = P(t));
        var n = t.r / 255,
            e = t.g / 255,
            r = t.b / 255,
            o = (pt * r + dt * n - gt * e) / (pt + dt - gt),
            i = r - o,
            a = (ht * (e - o) - lt * i) / ft,
            s = Math.sqrt(a * a + i * i) / (ht * o * (1 - o)),
            c = s ? Math.atan2(a, i) * z - 120 : NaN;
        return new bt(c < 0 ? c + 360 : c, s, o, t.opacity);
      }(t) : new bt(t, n, e, null == r ? 1 : r);
    }

    function bt(t, n, e, r) {
      this.h = +t, this.s = +n, this.l = +e, this.opacity = +r;
    }

    function vt(t, n, e, r, o) {
      var i = t * t,
          a = i * t;
      return ((1 - 3 * t + 3 * i - a) * n + (4 - 6 * i + 3 * a) * e + (1 + 3 * t + 3 * i - 3 * a) * r + a * o) / 6;
    }

    b(bt, mt, v(y, {
      brighter: function brighter(t) {
        return t = null == t ? 1 / .7 : Math.pow(1 / .7, t), new bt(this.h, this.s, this.l * t, this.opacity);
      },
      darker: function darker(t) {
        return t = null == t ? .7 : Math.pow(.7, t), new bt(this.h, this.s, this.l * t, this.opacity);
      },
      rgb: function rgb() {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * R,
            n = +this.l,
            e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
            r = Math.cos(t),
            o = Math.sin(t);
        return new I(255 * (n + e * (ct * r + ut * o)), 255 * (n + e * (lt * r + ft * o)), 255 * (n + e * (ht * r)), this.opacity);
      }
    }));

    var yt = function yt(t) {
      return function () {
        return t;
      };
    };

    function _t(t, n) {
      return function (e) {
        return t + e * n;
      };
    }

    function wt(t, n) {
      var e = n - t;
      return e ? _t(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e) : yt(isNaN(t) ? n : t);
    }

    function xt(t) {
      return 1 == (t = +t) ? At : function (n, e) {
        return e - n ? function (t, n, e) {
          return t = Math.pow(t, e), n = Math.pow(n, e) - t, e = 1 / e, function (r) {
            return Math.pow(t + r * n, e);
          };
        }(n, e, t) : yt(isNaN(n) ? e : n);
      };
    }

    function At(t, n) {
      var e = n - t;
      return e ? _t(t, e) : yt(isNaN(t) ? n : t);
    }

    var Ct = function t(n) {
      var e = xt(n);

      function r(t, n) {
        var r = e((t = E(t)).r, (n = E(n)).r),
            o = e(t.g, n.g),
            i = e(t.b, n.b),
            a = At(t.opacity, n.opacity);
        return function (n) {
          return t.r = r(n), t.g = o(n), t.b = i(n), t.opacity = a(n), t + "";
        };
      }

      return r.gamma = t, r;
    }(1);

    function Tt(t) {
      return function (n) {
        var e,
            r,
            o = n.length,
            i = new Array(o),
            a = new Array(o),
            s = new Array(o);

        for (e = 0; e < o; ++e) {
          r = E(n[e]), i[e] = r.r || 0, a[e] = r.g || 0, s[e] = r.b || 0;
        }

        return i = t(i), a = t(a), s = t(s), r.opacity = 1, function (t) {
          return r.r = i(t), r.g = a(t), r.b = s(t), r + "";
        };
      };
    }

    Tt(function (t) {
      var n = t.length - 1;
      return function (e) {
        var r = e <= 0 ? e = 0 : e >= 1 ? (e = 1, n - 1) : Math.floor(e * n),
            o = t[r],
            i = t[r + 1],
            a = r > 0 ? t[r - 1] : 2 * o - i,
            s = r < n - 1 ? t[r + 2] : 2 * i - o;
        return vt((e - r / n) * n, a, o, i, s);
      };
    }), Tt(function (t) {
      var n = t.length;
      return function (e) {
        var r = Math.floor(((e %= 1) < 0 ? ++e : e) * n),
            o = t[(r + n - 1) % n],
            i = t[r % n],
            a = t[(r + 1) % n],
            s = t[(r + 2) % n];
        return vt((e - r / n) * n, o, i, a, s);
      };
    });

    var Mt = function Mt(t, n) {
      return n -= t = +t, function (e) {
        return t + n * e;
      };
    },
        kt = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
        St = new RegExp(kt.source, "g");

    var Lt,
        Dt,
        Bt,
        Ft,
        Nt = function Nt(t, n) {
      var e,
          r,
          o,
          i = kt.lastIndex = St.lastIndex = 0,
          a = -1,
          s = [],
          c = [];

      for (t += "", n += ""; (e = kt.exec(t)) && (r = St.exec(n));) {
        (o = r.index) > i && (o = n.slice(i, o), s[a] ? s[a] += o : s[++a] = o), (e = e[0]) === (r = r[0]) ? s[a] ? s[a] += r : s[++a] = r : (s[++a] = null, c.push({
          i: a,
          x: Mt(e, r)
        })), i = St.lastIndex;
      }

      return i < n.length && (o = n.slice(i), s[a] ? s[a] += o : s[++a] = o), s.length < 2 ? c[0] ? function (t) {
        return function (n) {
          return t(n) + "";
        };
      }(c[0].x) : function (t) {
        return function () {
          return t;
        };
      }(n) : (n = c.length, function (t) {
        for (var e, r = 0; r < n; ++r) {
          s[(e = c[r]).i] = e.x(t);
        }

        return s.join("");
      });
    },
        Ot = function Ot(t, n) {
      var e,
          r = _typeof(n);

      return null == n || "boolean" === r ? yt(n) : ("number" === r ? Mt : "string" === r ? (e = F(n)) ? (n = e, Ct) : Nt : n instanceof F ? Ct : n instanceof Date ? function (t, n) {
        var e = new Date();
        return n -= t = +t, function (r) {
          return e.setTime(t + n * r), e;
        };
      } : Array.isArray(n) ? function (t, n) {
        var e,
            r = n ? n.length : 0,
            o = t ? Math.min(r, t.length) : 0,
            i = new Array(o),
            a = new Array(r);

        for (e = 0; e < o; ++e) {
          i[e] = Ot(t[e], n[e]);
        }

        for (; e < r; ++e) {
          a[e] = n[e];
        }

        return function (t) {
          for (e = 0; e < o; ++e) {
            a[e] = i[e](t);
          }

          return a;
        };
      } : "function" != typeof n.valueOf && "function" != typeof n.toString || isNaN(n) ? function (t, n) {
        var e,
            r = {},
            o = {};

        for (e in null !== t && "object" == _typeof(t) || (t = {}), null !== n && "object" == _typeof(n) || (n = {}), n) {
          e in t ? r[e] = Ot(t[e], n[e]) : o[e] = n[e];
        }

        return function (t) {
          for (e in r) {
            o[e] = r[e](t);
          }

          return o;
        };
      } : Mt)(t, n);
    },
        Pt = function Pt(t, n) {
      return n -= t = +t, function (e) {
        return Math.round(t + n * e);
      };
    },
        Et = 180 / Math.PI,
        It = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1
    },
        jt = function jt(t, n, e, r, o, i) {
      var a, s, c;
      return (a = Math.sqrt(t * t + n * n)) && (t /= a, n /= a), (c = t * e + n * r) && (e -= t * c, r -= n * c), (s = Math.sqrt(e * e + r * r)) && (e /= s, r /= s, c /= s), t * r < n * e && (t = -t, n = -n, c = -c, a = -a), {
        translateX: o,
        translateY: i,
        rotate: Math.atan2(n, t) * Et,
        skewX: Math.atan(c) * Et,
        scaleX: a,
        scaleY: s
      };
    };

    function Ht(t, n, e, r) {
      function o(t) {
        return t.length ? t.pop() + " " : "";
      }

      return function (i, a) {
        var s = [],
            c = [];
        return i = t(i), a = t(a), function (t, r, o, i, a, s) {
          if (t !== o || r !== i) {
            var c = a.push("translate(", null, n, null, e);
            s.push({
              i: c - 4,
              x: Mt(t, o)
            }, {
              i: c - 2,
              x: Mt(r, i)
            });
          } else (o || i) && a.push("translate(" + o + n + i + e);
        }(i.translateX, i.translateY, a.translateX, a.translateY, s, c), function (t, n, e, i) {
          t !== n ? (t - n > 180 ? n += 360 : n - t > 180 && (t += 360), i.push({
            i: e.push(o(e) + "rotate(", null, r) - 2,
            x: Mt(t, n)
          })) : n && e.push(o(e) + "rotate(" + n + r);
        }(i.rotate, a.rotate, s, c), function (t, n, e, i) {
          t !== n ? i.push({
            i: e.push(o(e) + "skewX(", null, r) - 2,
            x: Mt(t, n)
          }) : n && e.push(o(e) + "skewX(" + n + r);
        }(i.skewX, a.skewX, s, c), function (t, n, e, r, i, a) {
          if (t !== e || n !== r) {
            var s = i.push(o(i) + "scale(", null, ",", null, ")");
            a.push({
              i: s - 4,
              x: Mt(t, e)
            }, {
              i: s - 2,
              x: Mt(n, r)
            });
          } else 1 === e && 1 === r || i.push(o(i) + "scale(" + e + "," + r + ")");
        }(i.scaleX, i.scaleY, a.scaleX, a.scaleY, s, c), i = a = null, function (t) {
          for (var n, e = -1, r = c.length; ++e < r;) {
            s[(n = c[e]).i] = n.x(t);
          }

          return s.join("");
        };
      };
    }

    var Ut = Ht(function (t) {
      return "none" === t ? It : (Lt || (Lt = document.createElement("DIV"), Dt = document.documentElement, Bt = document.defaultView), Lt.style.transform = t, t = Bt.getComputedStyle(Dt.appendChild(Lt), null).getPropertyValue("transform"), Dt.removeChild(Lt), t = t.slice(7, -1).split(","), jt(+t[0], +t[1], +t[2], +t[3], +t[4], +t[5]));
    }, "px, ", "px)", "deg)"),
        Wt = Ht(function (t) {
      return null == t ? It : (Ft || (Ft = document.createElementNS("http://www.w3.org/2000/svg", "g")), Ft.setAttribute("transform", t), (t = Ft.transform.baseVal.consolidate()) ? (t = t.matrix, jt(t.a, t.b, t.c, t.d, t.e, t.f)) : It);
    }, ", ", ")", ")");
    Math.SQRT2;

    function Yt(t) {
      return function (n, e) {
        var r = t((n = U(n)).h, (e = U(e)).h),
            o = At(n.s, e.s),
            i = At(n.l, e.l),
            a = At(n.opacity, e.opacity);
        return function (t) {
          return n.h = r(t), n.s = o(t), n.l = i(t), n.opacity = a(t), n + "";
        };
      };
    }

    Yt(wt), Yt(At);

    function Rt(t) {
      return function (n, e) {
        var r = t((n = at(n)).h, (e = at(e)).h),
            o = At(n.c, e.c),
            i = At(n.l, e.l),
            a = At(n.opacity, e.opacity);
        return function (t) {
          return n.h = r(t), n.c = o(t), n.l = i(t), n.opacity = a(t), n + "";
        };
      };
    }

    Rt(wt), Rt(At);

    function zt(t) {
      return function n(e) {
        function r(n, r) {
          var o = t((n = mt(n)).h, (r = mt(r)).h),
              i = At(n.s, r.s),
              a = At(n.l, r.l),
              s = At(n.opacity, r.opacity);
          return function (t) {
            return n.h = o(t), n.s = i(t), n.l = a(Math.pow(t, e)), n.opacity = s(t), n + "";
          };
        }

        return e = +e, r.gamma = n, r;
      }(1);
    }

    zt(wt);
    var qt = zt(At);
    var Xt,
        $t,
        Vt = 0,
        Gt = 0,
        Qt = 0,
        Zt = 1e3,
        Jt = 0,
        Kt = 0,
        tn = 0,
        nn = "object" == (typeof performance === "undefined" ? "undefined" : _typeof(performance)) && performance.now ? performance : Date,
        en = "object" == (typeof window === "undefined" ? "undefined" : _typeof(window)) && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (t) {
      setTimeout(t, 17);
    };

    function rn() {
      return Kt || (en(on), Kt = nn.now() + tn);
    }

    function on() {
      Kt = 0;
    }

    function an() {
      this._call = this._time = this._next = null;
    }

    function sn(t, n, e) {
      var r = new an();
      return r.restart(t, n, e), r;
    }

    function cn() {
      Kt = (Jt = nn.now()) + tn, Vt = Gt = 0;

      try {
        !function () {
          rn(), ++Vt;

          for (var t, n = Xt; n;) {
            (t = Kt - n._time) >= 0 && n._call.call(null, t), n = n._next;
          }

          --Vt;
        }();
      } finally {
        Vt = 0, function () {
          var t,
              n,
              e = Xt,
              r = 1 / 0;

          for (; e;) {
            e._call ? (r > e._time && (r = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Xt = n);
          }

          $t = t, ln(r);
        }(), Kt = 0;
      }
    }

    function un() {
      var t = nn.now(),
          n = t - Jt;
      n > Zt && (tn -= n, Jt = t);
    }

    function ln(t) {
      Vt || (Gt && (Gt = clearTimeout(Gt)), t - Kt > 24 ? (t < 1 / 0 && (Gt = setTimeout(cn, t - nn.now() - tn)), Qt && (Qt = clearInterval(Qt))) : (Qt || (Jt = nn.now(), Qt = setInterval(un, Zt)), Vt = 1, en(cn)));
    }

    an.prototype = sn.prototype = {
      constructor: an,
      restart: function restart(t, n, e) {
        if ("function" != typeof t) throw new TypeError("callback is not a function");
        e = (null == e ? rn() : +e) + (null == n ? 0 : +n), this._next || $t === this || ($t ? $t._next = this : Xt = this, $t = this), this._call = t, this._time = e, ln();
      },
      stop: function stop() {
        this._call && (this._call = null, this._time = 1 / 0, ln());
      }
    };

    var fn = function fn(t, n, e) {
      var r = new an();
      return n = null == n ? 0 : +n, r.restart(function (e) {
        r.stop(), t(e + n);
      }, n, e), r;
    },
        hn = h("start", "end", "interrupt"),
        dn = [],
        gn = 0,
        pn = 1,
        mn = 2,
        bn = 3,
        vn = 4,
        yn = 5,
        _n = 6,
        wn = function wn(t, n, e, r, o, i) {
      var a = t.__transition;

      if (a) {
        if (e in a) return;
      } else t.__transition = {};

      !function (t, n, e) {
        var r,
            o = t.__transition;

        function i(c) {
          var u, l, f, h;
          if (e.state !== pn) return s();

          for (u in o) {
            if ((h = o[u]).name === e.name) {
              if (h.state === bn) return fn(i);
              h.state === vn ? (h.state = _n, h.timer.stop(), h.on.call("interrupt", t, t.__data__, h.index, h.group), delete o[u]) : +u < n && (h.state = _n, h.timer.stop(), delete o[u]);
            }
          }

          if (fn(function () {
            e.state === bn && (e.state = vn, e.timer.restart(a, e.delay, e.time), a(c));
          }), e.state = mn, e.on.call("start", t, t.__data__, e.index, e.group), e.state === mn) {
            for (e.state = bn, r = new Array(f = e.tween.length), u = 0, l = -1; u < f; ++u) {
              (h = e.tween[u].value.call(t, t.__data__, e.index, e.group)) && (r[++l] = h);
            }

            r.length = l + 1;
          }
        }

        function a(n) {
          for (var o = n < e.duration ? e.ease.call(null, n / e.duration) : (e.timer.restart(s), e.state = yn, 1), i = -1, a = r.length; ++i < a;) {
            r[i].call(null, o);
          }

          e.state === yn && (e.on.call("end", t, t.__data__, e.index, e.group), s());
        }

        function s() {
          for (var r in e.state = _n, e.timer.stop(), delete o[n], o) {
            return;
          }

          delete t.__transition;
        }

        o[n] = e, e.timer = sn(function (t) {
          e.state = pn, e.timer.restart(i, e.delay, e.time), e.delay <= t && i(t - e.delay);
        }, 0, e.time);
      }(t, e, {
        name: n,
        index: r,
        group: o,
        on: hn,
        tween: dn,
        time: i.time,
        delay: i.delay,
        duration: i.duration,
        ease: i.ease,
        timer: null,
        state: gn
      });
    };

    function xn(t, n) {
      var e = Cn(t, n);
      if (e.state > gn) throw new Error("too late; already scheduled");
      return e;
    }

    function An(t, n) {
      var e = Cn(t, n);
      if (e.state > mn) throw new Error("too late; already started");
      return e;
    }

    function Cn(t, n) {
      var e = t.__transition;
      if (!e || !(e = e[n])) throw new Error("transition not found");
      return e;
    }

    var Tn = function Tn(t, n) {
      var e,
          r,
          o,
          i = t.__transition,
          a = !0;

      if (i) {
        for (o in n = null == n ? null : n + "", i) {
          (e = i[o]).name === n ? (r = e.state > mn && e.state < yn, e.state = _n, e.timer.stop(), r && e.on.call("interrupt", t, t.__data__, e.index, e.group), delete i[o]) : a = !1;
        }

        a && delete t.__transition;
      }
    };

    function Mn(t, n, e) {
      var r = t._id;
      return t.each(function () {
        var t = An(this, r);
        (t.value || (t.value = {}))[n] = e.apply(this, arguments);
      }), function (t) {
        return Cn(t, r).value[n];
      };
    }

    var kn = function kn(t, n) {
      var e;
      return ("number" == typeof n ? Mt : n instanceof F ? Ct : (e = F(n)) ? (n = e, Ct) : Nt)(t, n);
    };

    var Sn = i.selection.prototype.constructor;
    var Ln = 0;

    function Dn(t, n, e, r) {
      this._groups = t, this._parents = n, this._name = e, this._id = r;
    }

    function Bn() {
      return ++Ln;
    }

    var Fn = i.selection.prototype;

    Dn.prototype = function (t) {
      return Object(i.selection)().transition(t);
    }.prototype = {
      constructor: Dn,
      select: function select(t) {
        var n = this._name,
            e = this._id;
        "function" != typeof t && (t = Object(i.selector)(t));

        for (var r = this._groups, o = r.length, a = new Array(o), s = 0; s < o; ++s) {
          for (var c, u, l = r[s], f = l.length, h = a[s] = new Array(f), d = 0; d < f; ++d) {
            (c = l[d]) && (u = t.call(c, c.__data__, d, l)) && ("__data__" in c && (u.__data__ = c.__data__), h[d] = u, wn(h[d], n, e, d, h, Cn(c, e)));
          }
        }

        return new Dn(a, this._parents, n, e);
      },
      selectAll: function selectAll(t) {
        var n = this._name,
            e = this._id;
        "function" != typeof t && (t = Object(i.selectorAll)(t));

        for (var r = this._groups, o = r.length, a = [], s = [], c = 0; c < o; ++c) {
          for (var u, l = r[c], f = l.length, h = 0; h < f; ++h) {
            if (u = l[h]) {
              for (var d, g = t.call(u, u.__data__, h, l), p = Cn(u, e), m = 0, b = g.length; m < b; ++m) {
                (d = g[m]) && wn(d, n, e, m, g, p);
              }

              a.push(g), s.push(u);
            }
          }
        }

        return new Dn(a, s, n, e);
      },
      filter: function filter(t) {
        "function" != typeof t && (t = Object(i.matcher)(t));

        for (var n = this._groups, e = n.length, r = new Array(e), o = 0; o < e; ++o) {
          for (var a, s = n[o], c = s.length, u = r[o] = [], l = 0; l < c; ++l) {
            (a = s[l]) && t.call(a, a.__data__, l, s) && u.push(a);
          }
        }

        return new Dn(r, this._parents, this._name, this._id);
      },
      merge: function merge(t) {
        if (t._id !== this._id) throw new Error();

        for (var n = this._groups, e = t._groups, r = n.length, o = e.length, i = Math.min(r, o), a = new Array(r), s = 0; s < i; ++s) {
          for (var c, u = n[s], l = e[s], f = u.length, h = a[s] = new Array(f), d = 0; d < f; ++d) {
            (c = u[d] || l[d]) && (h[d] = c);
          }
        }

        for (; s < r; ++s) {
          a[s] = n[s];
        }

        return new Dn(a, this._parents, this._name, this._id);
      },
      selection: function selection() {
        return new Sn(this._groups, this._parents);
      },
      transition: function transition() {
        for (var t = this._name, n = this._id, e = Bn(), r = this._groups, o = r.length, i = 0; i < o; ++i) {
          for (var a, s = r[i], c = s.length, u = 0; u < c; ++u) {
            if (a = s[u]) {
              var l = Cn(a, n);
              wn(a, t, e, u, s, {
                time: l.time + l.delay + l.duration,
                delay: 0,
                duration: l.duration,
                ease: l.ease
              });
            }
          }
        }

        return new Dn(r, this._parents, t, e);
      },
      call: Fn.call,
      nodes: Fn.nodes,
      node: Fn.node,
      size: Fn.size,
      empty: Fn.empty,
      each: Fn.each,
      on: function on(t, n) {
        var e = this._id;
        return arguments.length < 2 ? Cn(this.node(), e).on.on(t) : this.each(function (t, n, e) {
          var r,
              o,
              i = function (t) {
            return (t + "").trim().split(/^|\s+/).every(function (t) {
              var n = t.indexOf(".");
              return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
            });
          }(n) ? xn : An;
          return function () {
            var a = i(this, t),
                s = a.on;
            s !== r && (o = (r = s).copy()).on(n, e), a.on = o;
          };
        }(e, t, n));
      },
      attr: function attr(t, n) {
        var e = Object(i.namespace)(t),
            r = "transform" === e ? Wt : kn;
        return this.attrTween(t, "function" == typeof n ? (e.local ? function (t, n, e) {
          var r, o, i;
          return function () {
            var a,
                s = e(this);
            if (null != s) return (a = this.getAttributeNS(t.space, t.local)) === s ? null : a === r && s === o ? i : i = n(r = a, o = s);
            this.removeAttributeNS(t.space, t.local);
          };
        } : function (t, n, e) {
          var r, o, i;
          return function () {
            var a,
                s = e(this);
            if (null != s) return (a = this.getAttribute(t)) === s ? null : a === r && s === o ? i : i = n(r = a, o = s);
            this.removeAttribute(t);
          };
        })(e, r, Mn(this, "attr." + t, n)) : null == n ? (e.local ? function (t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        } : function (t) {
          return function () {
            this.removeAttribute(t);
          };
        })(e) : (e.local ? function (t, n, e) {
          var r, o;
          return function () {
            var i = this.getAttributeNS(t.space, t.local);
            return i === e ? null : i === r ? o : o = n(r = i, e);
          };
        } : function (t, n, e) {
          var r, o;
          return function () {
            var i = this.getAttribute(t);
            return i === e ? null : i === r ? o : o = n(r = i, e);
          };
        })(e, r, n + ""));
      },
      attrTween: function attrTween(t, n) {
        var e = "attr." + t;
        if (arguments.length < 2) return (e = this.tween(e)) && e._value;
        if (null == n) return this.tween(e, null);
        if ("function" != typeof n) throw new Error();
        var r = Object(i.namespace)(t);
        return this.tween(e, (r.local ? function (t, n) {
          function e() {
            var e = this,
                r = n.apply(e, arguments);
            return r && function (n) {
              e.setAttributeNS(t.space, t.local, r(n));
            };
          }

          return e._value = n, e;
        } : function (t, n) {
          function e() {
            var e = this,
                r = n.apply(e, arguments);
            return r && function (n) {
              e.setAttribute(t, r(n));
            };
          }

          return e._value = n, e;
        })(r, n));
      },
      style: function style(t, n, e) {
        var r = "transform" == (t += "") ? Ut : kn;
        return null == n ? this.styleTween(t, function (t, n) {
          var e, r, o;
          return function () {
            var a = Object(i.style)(this, t),
                s = (this.style.removeProperty(t), Object(i.style)(this, t));
            return a === s ? null : a === e && s === r ? o : o = n(e = a, r = s);
          };
        }(t, r)).on("end.style." + t, function (t) {
          return function () {
            this.style.removeProperty(t);
          };
        }(t)) : this.styleTween(t, "function" == typeof n ? function (t, n, e) {
          var r, o, a;
          return function () {
            var s = Object(i.style)(this, t),
                c = e(this);
            return null == c && (this.style.removeProperty(t), c = Object(i.style)(this, t)), s === c ? null : s === r && c === o ? a : a = n(r = s, o = c);
          };
        }(t, r, Mn(this, "style." + t, n)) : function (t, n, e) {
          var r, o;
          return function () {
            var a = Object(i.style)(this, t);
            return a === e ? null : a === r ? o : o = n(r = a, e);
          };
        }(t, r, n + ""), e);
      },
      styleTween: function styleTween(t, n, e) {
        var r = "style." + (t += "");
        if (arguments.length < 2) return (r = this.tween(r)) && r._value;
        if (null == n) return this.tween(r, null);
        if ("function" != typeof n) throw new Error();
        return this.tween(r, function (t, n, e) {
          function r() {
            var r = this,
                o = n.apply(r, arguments);
            return o && function (n) {
              r.style.setProperty(t, o(n), e);
            };
          }

          return r._value = n, r;
        }(t, n, null == e ? "" : e));
      },
      text: function text(t) {
        return this.tween("text", "function" == typeof t ? function (t) {
          return function () {
            var n = t(this);
            this.textContent = null == n ? "" : n;
          };
        }(Mn(this, "text", t)) : function (t) {
          return function () {
            this.textContent = t;
          };
        }(null == t ? "" : t + ""));
      },
      remove: function remove() {
        return this.on("end.remove", function (t) {
          return function () {
            var n = this.parentNode;

            for (var e in this.__transition) {
              if (+e !== t) return;
            }

            n && n.removeChild(this);
          };
        }(this._id));
      },
      tween: function tween(t, n) {
        var e = this._id;

        if (t += "", arguments.length < 2) {
          for (var r, o = Cn(this.node(), e).tween, i = 0, a = o.length; i < a; ++i) {
            if ((r = o[i]).name === t) return r.value;
          }

          return null;
        }

        return this.each((null == n ? function (t, n) {
          var e, r;
          return function () {
            var o = An(this, t),
                i = o.tween;
            if (i !== e) for (var a = 0, s = (r = e = i).length; a < s; ++a) {
              if (r[a].name === n) {
                (r = r.slice()).splice(a, 1);
                break;
              }
            }
            o.tween = r;
          };
        } : function (t, n, e) {
          var r, o;
          if ("function" != typeof e) throw new Error();
          return function () {
            var i = An(this, t),
                a = i.tween;

            if (a !== r) {
              o = (r = a).slice();

              for (var s = {
                name: n,
                value: e
              }, c = 0, u = o.length; c < u; ++c) {
                if (o[c].name === n) {
                  o[c] = s;
                  break;
                }
              }

              c === u && o.push(s);
            }

            i.tween = o;
          };
        })(e, t, n));
      },
      delay: function delay(t) {
        var n = this._id;
        return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
          return function () {
            xn(this, t).delay = +n.apply(this, arguments);
          };
        } : function (t, n) {
          return n = +n, function () {
            xn(this, t).delay = n;
          };
        })(n, t)) : Cn(this.node(), n).delay;
      },
      duration: function duration(t) {
        var n = this._id;
        return arguments.length ? this.each(("function" == typeof t ? function (t, n) {
          return function () {
            An(this, t).duration = +n.apply(this, arguments);
          };
        } : function (t, n) {
          return n = +n, function () {
            An(this, t).duration = n;
          };
        })(n, t)) : Cn(this.node(), n).duration;
      },
      ease: function ease(t) {
        var n = this._id;
        return arguments.length ? this.each(function (t, n) {
          if ("function" != typeof n) throw new Error();
          return function () {
            An(this, t).ease = n;
          };
        }(n, t)) : Cn(this.node(), n).ease;
      }
    };

    (function t(n) {
      function e(t) {
        return Math.pow(t, n);
      }

      return n = +n, e.exponent = t, e;
    })(3), function t(n) {
      function e(t) {
        return 1 - Math.pow(1 - t, n);
      }

      return n = +n, e.exponent = t, e;
    }(3), function t(n) {
      function e(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
      }

      return n = +n, e.exponent = t, e;
    }(3), Math.PI;
    (function t(n) {
      function e(t) {
        return t * t * ((n + 1) * t - n);
      }

      return n = +n, e.overshoot = t, e;
    })(1.70158), function t(n) {
      function e(t) {
        return --t * t * ((n + 1) * t + n) + 1;
      }

      return n = +n, e.overshoot = t, e;
    }(1.70158), function t(n) {
      function e(t) {
        return ((t *= 2) < 1 ? t * t * ((n + 1) * t - n) : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2;
      }

      return n = +n, e.overshoot = t, e;
    }(1.70158);
    var Nn = 2 * Math.PI,
        On = (function t(n, e) {
      var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Nn);

      function o(t) {
        return n * Math.pow(2, 10 * --t) * Math.sin((r - t) / e);
      }

      return o.amplitude = function (n) {
        return t(n, e * Nn);
      }, o.period = function (e) {
        return t(n, e);
      }, o;
    }(1, .3), function t(n, e) {
      var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Nn);

      function o(t) {
        return 1 - n * Math.pow(2, -10 * (t = +t)) * Math.sin((t + r) / e);
      }

      return o.amplitude = function (n) {
        return t(n, e * Nn);
      }, o.period = function (e) {
        return t(n, e);
      }, o;
    }(1, .3), function t(n, e) {
      var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= Nn);

      function o(t) {
        return ((t = 2 * t - 1) < 0 ? n * Math.pow(2, 10 * t) * Math.sin((r - t) / e) : 2 - n * Math.pow(2, -10 * t) * Math.sin((r + t) / e)) / 2;
      }

      return o.amplitude = function (n) {
        return t(n, e * Nn);
      }, o.period = function (e) {
        return t(n, e);
      }, o;
    }(1, .3), {
      time: null,
      delay: 0,
      duration: 250,
      ease: function ease(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }
    });

    function Pn(t, n) {
      for (var e; !(e = t.__transition) || !(e = e[n]);) {
        if (!(t = t.parentNode)) return On.time = rn(), On;
      }

      return e;
    }

    i.selection.prototype.interrupt = function (t) {
      return this.each(function () {
        Tn(this, t);
      });
    }, i.selection.prototype.transition = function (t) {
      var n, e;
      t instanceof Dn ? (n = t._id, t = t._name) : (n = Bn(), (e = On).time = rn(), t = null == t ? null : t + "");

      for (var r = this._groups, o = r.length, i = 0; i < o; ++i) {
        for (var a, s = r[i], c = s.length, u = 0; u < c; ++u) {
          (a = s[u]) && wn(a, t, n, u, s, e || Pn(a, n));
        }
      }

      return new Dn(r, this._parents, t, n);
    };

    var En = function En(t) {
      return function () {
        return t;
      };
    },
        In = function In(t, n, e) {
      this.target = t, this.type = n, this.selection = e;
    };

    function jn() {
      i.event.stopImmediatePropagation();
    }

    var Hn = function Hn() {
      i.event.preventDefault(), i.event.stopImmediatePropagation();
    },
        Un = {
      name: "drag"
    },
        Wn = {
      name: "space"
    },
        Yn = {
      name: "handle"
    },
        Rn = {
      name: "center"
    },
        zn = {
      name: "x",
      handles: ["e", "w"].map(Jn),
      input: function input(t, n) {
        return t && [[t[0], n[0][1]], [t[1], n[1][1]]];
      },
      output: function output(t) {
        return t && [t[0][0], t[1][0]];
      }
    },
        qn = {
      name: "y",
      handles: ["n", "s"].map(Jn),
      input: function input(t, n) {
        return t && [[n[0][0], t[0]], [n[1][0], t[1]]];
      },
      output: function output(t) {
        return t && [t[0][1], t[1][1]];
      }
    },
        Xn = {
      name: "xy",
      handles: ["n", "e", "s", "w", "nw", "ne", "se", "sw"].map(Jn),
      input: function input(t) {
        return t;
      },
      output: function output(t) {
        return t;
      }
    },
        $n = {
      overlay: "crosshair",
      selection: "move",
      n: "ns-resize",
      e: "ew-resize",
      s: "ns-resize",
      w: "ew-resize",
      nw: "nwse-resize",
      ne: "nesw-resize",
      se: "nwse-resize",
      sw: "nesw-resize"
    },
        Vn = {
      e: "w",
      w: "e",
      nw: "ne",
      ne: "nw",
      se: "sw",
      sw: "se"
    },
        Gn = {
      n: "s",
      s: "n",
      nw: "sw",
      ne: "se",
      se: "ne",
      sw: "nw"
    },
        Qn = {
      overlay: 1,
      selection: 1,
      n: null,
      e: 1,
      s: null,
      w: -1,
      nw: -1,
      ne: 1,
      se: 1,
      sw: -1
    },
        Zn = {
      overlay: 1,
      selection: 1,
      n: -1,
      e: null,
      s: 1,
      w: null,
      nw: -1,
      ne: -1,
      se: 1,
      sw: 1
    };

    function Jn(t) {
      return {
        type: t
      };
    }

    function Kn() {
      return !i.event.button;
    }

    function te() {
      var t = this.ownerSVGElement || this;
      return [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]];
    }

    function ne(t) {
      for (; !t.__brush;) {
        if (!(t = t.parentNode)) return;
      }

      return t.__brush;
    }

    function ee(t) {
      return t[0][0] === t[1][0] || t[0][1] === t[1][1];
    }

    function re(t) {
      var n = t.__brush;
      return n ? n.dim.output(n.selection) : null;
    }

    function oe() {
      return se(zn);
    }

    function ie() {
      return se(qn);
    }

    var ae = function ae() {
      return se(Xn);
    };

    function se(t) {
      var n,
          e = te,
          r = Kn,
          o = h(s, "start", "brush", "end"),
          a = 6;

      function s(n) {
        var e = n.property("__brush", d).selectAll(".overlay").data([Jn("overlay")]);
        e.enter().append("rect").attr("class", "overlay").attr("pointer-events", "all").attr("cursor", $n.overlay).merge(e).each(function () {
          var t = ne(this).extent;
          Object(i.select)(this).attr("x", t[0][0]).attr("y", t[0][1]).attr("width", t[1][0] - t[0][0]).attr("height", t[1][1] - t[0][1]);
        }), n.selectAll(".selection").data([Jn("selection")]).enter().append("rect").attr("class", "selection").attr("cursor", $n.selection).attr("fill", "#777").attr("fill-opacity", .3).attr("stroke", "#fff").attr("shape-rendering", "crispEdges");
        var r = n.selectAll(".handle").data(t.handles, function (t) {
          return t.type;
        });
        r.exit().remove(), r.enter().append("rect").attr("class", function (t) {
          return "handle handle--" + t.type;
        }).attr("cursor", function (t) {
          return $n[t.type];
        }), n.each(c).attr("fill", "none").attr("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush touchstart.brush", f);
      }

      function c() {
        var t = Object(i.select)(this),
            n = ne(this).selection;
        n ? (t.selectAll(".selection").style("display", null).attr("x", n[0][0]).attr("y", n[0][1]).attr("width", n[1][0] - n[0][0]).attr("height", n[1][1] - n[0][1]), t.selectAll(".handle").style("display", null).attr("x", function (t) {
          return "e" === t.type[t.type.length - 1] ? n[1][0] - a / 2 : n[0][0] - a / 2;
        }).attr("y", function (t) {
          return "s" === t.type[0] ? n[1][1] - a / 2 : n[0][1] - a / 2;
        }).attr("width", function (t) {
          return "n" === t.type || "s" === t.type ? n[1][0] - n[0][0] + a : a;
        }).attr("height", function (t) {
          return "e" === t.type || "w" === t.type ? n[1][1] - n[0][1] + a : a;
        })) : t.selectAll(".selection,.handle").style("display", "none").attr("x", null).attr("y", null).attr("width", null).attr("height", null);
      }

      function u(t, n) {
        return t.__brush.emitter || new l(t, n);
      }

      function l(t, n) {
        this.that = t, this.args = n, this.state = t.__brush, this.active = 0;
      }

      function f() {
        if (i.event.touches) {
          if (i.event.changedTouches.length < i.event.touches.length) return Hn();
        } else if (n) return;

        if (r.apply(this, arguments)) {
          var e,
              o,
              a,
              s,
              l,
              f,
              h,
              d,
              m,
              b,
              v,
              y,
              _,
              w = this,
              x = i.event.target.__data__.type,
              A = "selection" === (i.event.metaKey ? x = "overlay" : x) ? Un : i.event.altKey ? Rn : Yn,
              C = t === qn ? null : Qn[x],
              T = t === zn ? null : Zn[x],
              M = ne(w),
              k = M.extent,
              S = M.selection,
              L = k[0][0],
              D = k[0][1],
              B = k[1][0],
              F = k[1][1],
              N = C && T && i.event.shiftKey,
              O = Object(i.mouse)(w),
              P = O,
              E = u(w, arguments).beforestart();

          "overlay" === x ? M.selection = S = [[e = t === qn ? L : O[0], a = t === zn ? D : O[1]], [l = t === qn ? B : e, h = t === zn ? F : a]] : (e = S[0][0], a = S[0][1], l = S[1][0], h = S[1][1]), o = e, s = a, f = l, d = h;
          var I = Object(i.select)(w).attr("pointer-events", "none"),
              j = I.selectAll(".overlay").attr("cursor", $n[x]);
          if (i.event.touches) I.on("touchmove.brush", U, !0).on("touchend.brush touchcancel.brush", Y, !0);else {
            var H = Object(i.select)(i.event.view).on("keydown.brush", function () {
              switch (i.event.keyCode) {
                case 16:
                  N = C && T;
                  break;

                case 18:
                  A === Yn && (C && (l = f - m * C, e = o + m * C), T && (h = d - b * T, a = s + b * T), A = Rn, W());
                  break;

                case 32:
                  A !== Yn && A !== Rn || (C < 0 ? l = f - m : C > 0 && (e = o - m), T < 0 ? h = d - b : T > 0 && (a = s - b), A = Wn, j.attr("cursor", $n.selection), W());
                  break;

                default:
                  return;
              }

              Hn();
            }, !0).on("keyup.brush", function () {
              switch (i.event.keyCode) {
                case 16:
                  N && (y = _ = N = !1, W());
                  break;

                case 18:
                  A === Rn && (C < 0 ? l = f : C > 0 && (e = o), T < 0 ? h = d : T > 0 && (a = s), A = Yn, W());
                  break;

                case 32:
                  A === Wn && (i.event.altKey ? (C && (l = f - m * C, e = o + m * C), T && (h = d - b * T, a = s + b * T), A = Rn) : (C < 0 ? l = f : C > 0 && (e = o), T < 0 ? h = d : T > 0 && (a = s), A = Yn), j.attr("cursor", $n[x]), W());
                  break;

                default:
                  return;
              }

              Hn();
            }, !0).on("mousemove.brush", U, !0).on("mouseup.brush", Y, !0);
            g(i.event.view);
          }
          jn(), Tn(w), c.call(w), E.start();
        }

        function U() {
          var t = Object(i.mouse)(w);
          !N || y || _ || (Math.abs(t[0] - P[0]) > Math.abs(t[1] - P[1]) ? _ = !0 : y = !0), P = t, v = !0, Hn(), W();
        }

        function W() {
          var t;

          switch (m = P[0] - O[0], b = P[1] - O[1], A) {
            case Wn:
            case Un:
              C && (m = Math.max(L - e, Math.min(B - l, m)), o = e + m, f = l + m), T && (b = Math.max(D - a, Math.min(F - h, b)), s = a + b, d = h + b);
              break;

            case Yn:
              C < 0 ? (m = Math.max(L - e, Math.min(B - e, m)), o = e + m, f = l) : C > 0 && (m = Math.max(L - l, Math.min(B - l, m)), o = e, f = l + m), T < 0 ? (b = Math.max(D - a, Math.min(F - a, b)), s = a + b, d = h) : T > 0 && (b = Math.max(D - h, Math.min(F - h, b)), s = a, d = h + b);
              break;

            case Rn:
              C && (o = Math.max(L, Math.min(B, e - m * C)), f = Math.max(L, Math.min(B, l + m * C))), T && (s = Math.max(D, Math.min(F, a - b * T)), d = Math.max(D, Math.min(F, h + b * T)));
          }

          f < o && (C *= -1, t = e, e = l, l = t, t = o, o = f, f = t, x in Vn && j.attr("cursor", $n[x = Vn[x]])), d < s && (T *= -1, t = a, a = h, h = t, t = s, s = d, d = t, x in Gn && j.attr("cursor", $n[x = Gn[x]])), M.selection && (S = M.selection), y && (o = S[0][0], f = S[1][0]), _ && (s = S[0][1], d = S[1][1]), S[0][0] === o && S[0][1] === s && S[1][0] === f && S[1][1] === d || (M.selection = [[o, s], [f, d]], c.call(w), E.brush());
        }

        function Y() {
          if (jn(), i.event.touches) {
            if (i.event.touches.length) return;
            n && clearTimeout(n), n = setTimeout(function () {
              n = null;
            }, 500), I.on("touchmove.brush touchend.brush touchcancel.brush", null);
          } else p(i.event.view, v), H.on("keydown.brush keyup.brush mousemove.brush mouseup.brush", null);

          I.attr("pointer-events", "all"), j.attr("cursor", $n.overlay), M.selection && (S = M.selection), ee(S) && (M.selection = null, c.call(w)), E.end();
        }
      }

      function d() {
        var n = this.__brush || {
          selection: null
        };
        return n.extent = e.apply(this, arguments), n.dim = t, n;
      }

      return s.move = function (n, e) {
        n.selection ? n.on("start.brush", function () {
          u(this, arguments).beforestart().start();
        }).on("interrupt.brush end.brush", function () {
          u(this, arguments).end();
        }).tween("brush", function () {
          var n = this,
              r = n.__brush,
              o = u(n, arguments),
              i = r.selection,
              a = t.input("function" == typeof e ? e.apply(this, arguments) : e, r.extent),
              s = Ot(i, a);

          function l(t) {
            r.selection = 1 === t && ee(a) ? null : s(t), c.call(n), o.brush();
          }

          return i && a ? l : l(1);
        }) : n.each(function () {
          var n = arguments,
              r = this.__brush,
              o = t.input("function" == typeof e ? e.apply(this, n) : e, r.extent),
              i = u(this, n).beforestart();
          Tn(this), r.selection = null == o || ee(o) ? null : o, c.call(this), i.start().brush().end();
        });
      }, l.prototype = {
        beforestart: function beforestart() {
          return 1 == ++this.active && (this.state.emitter = this, this.starting = !0), this;
        },
        start: function start() {
          return this.starting && (this.starting = !1, this.emit("start")), this;
        },
        brush: function brush() {
          return this.emit("brush"), this;
        },
        end: function end() {
          return 0 == --this.active && (delete this.state.emitter, this.emit("end")), this;
        },
        emit: function emit(n) {
          Object(i.customEvent)(new In(s, n, t.output(this.state.selection)), o.apply, o, [n, this.that, this.args]);
        }
      }, s.extent = function (t) {
        return arguments.length ? (e = "function" == typeof t ? t : En([[+t[0][0], +t[0][1]], [+t[1][0], +t[1][1]]]), s) : e;
      }, s.filter = function (t) {
        return arguments.length ? (r = "function" == typeof t ? t : En(!!t), s) : r;
      }, s.handleSize = function (t) {
        return arguments.length ? (a = +t, s) : a;
      }, s.on = function () {
        var t = o.on.apply(o, arguments);
        return t === o ? s : t;
      }, s;
    }

    var ce = function ce(t, n) {
      return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
    },
        ue = function ue(t) {
      return 1 === t.length && (t = function (t) {
        return function (n, e) {
          return ce(t(n), e);
        };
      }(t)), {
        left: function left(n, e, r, o) {
          for (null == r && (r = 0), null == o && (o = n.length); r < o;) {
            var i = r + o >>> 1;
            t(n[i], e) < 0 ? r = i + 1 : o = i;
          }

          return r;
        },
        right: function right(n, e, r, o) {
          for (null == r && (r = 0), null == o && (o = n.length); r < o;) {
            var i = r + o >>> 1;
            t(n[i], e) > 0 ? o = i : r = i + 1;
          }

          return r;
        }
      };
    };

    var le = ue(ce),
        fe = le.right,
        he = (le.left, fe);

    var de = Array.prototype,
        ge = (de.slice, de.map, Math.sqrt(50)),
        pe = Math.sqrt(10),
        me = Math.sqrt(2),
        be = function be(t, n, e) {
      var r,
          o,
          i,
          a,
          s = -1;
      if (e = +e, (t = +t) === (n = +n) && e > 0) return [t];
      if ((r = n < t) && (o = t, t = n, n = o), 0 === (a = ve(t, n, e)) || !isFinite(a)) return [];
      if (a > 0) for (t = Math.ceil(t / a), n = Math.floor(n / a), i = new Array(o = Math.ceil(n - t + 1)); ++s < o;) {
        i[s] = (t + s) * a;
      } else for (t = Math.floor(t * a), n = Math.ceil(n * a), i = new Array(o = Math.ceil(t - n + 1)); ++s < o;) {
        i[s] = (t - s) / a;
      }
      return r && i.reverse(), i;
    };

    function ve(t, n, e) {
      var r = (n - t) / Math.max(0, e),
          o = Math.floor(Math.log(r) / Math.LN10),
          i = r / Math.pow(10, o);
      return o >= 0 ? (i >= ge ? 10 : i >= pe ? 5 : i >= me ? 2 : 1) * Math.pow(10, o) : -Math.pow(10, -o) / (i >= ge ? 10 : i >= pe ? 5 : i >= me ? 2 : 1);
    }

    function ye(t, n, e) {
      var r = Math.abs(n - t) / Math.max(0, e),
          o = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          i = r / o;
      return i >= ge ? o *= 10 : i >= pe ? o *= 5 : i >= me && (o *= 2), n < t ? -o : o;
    }

    var _e = function _e(t, n) {
      var e,
          r,
          o = t.length,
          i = -1;

      if (null == n) {
        for (; ++i < o;) {
          if (null != (e = t[i]) && e >= e) for (r = e; ++i < o;) {
            null != (e = t[i]) && e > r && (r = e);
          }
        }
      } else for (; ++i < o;) {
        if (null != (e = n(t[i], i, t)) && e >= e) for (r = e; ++i < o;) {
          null != (e = n(t[i], i, t)) && e > r && (r = e);
        }
      }

      return r;
    };

    function we() {}

    function xe(t, n) {
      var e = new we();
      if (t instanceof we) t.each(function (t, n) {
        e.set(n, t);
      });else if (Array.isArray(t)) {
        var r,
            o = -1,
            i = t.length;
        if (null == n) for (; ++o < i;) {
          e.set(o, t[o]);
        } else for (; ++o < i;) {
          e.set(n(r = t[o], o, t), r);
        }
      } else if (t) for (var a in t) {
        e.set(a, t[a]);
      }
      return e;
    }

    we.prototype = xe.prototype = {
      constructor: we,
      has: function has(t) {
        return "$" + t in this;
      },
      get: function get(t) {
        return this["$" + t];
      },
      set: function set(t, n) {
        return this["$" + t] = n, this;
      },
      remove: function remove(t) {
        var n = "$" + t;
        return n in this && delete this[n];
      },
      clear: function clear() {
        for (var t in this) {
          "$" === t[0] && delete this[t];
        }
      },
      keys: function keys() {
        var t = [];

        for (var n in this) {
          "$" === n[0] && t.push(n.slice(1));
        }

        return t;
      },
      values: function values() {
        var t = [];

        for (var n in this) {
          "$" === n[0] && t.push(this[n]);
        }

        return t;
      },
      entries: function entries() {
        var t = [];

        for (var n in this) {
          "$" === n[0] && t.push({
            key: n.slice(1),
            value: this[n]
          });
        }

        return t;
      },
      size: function size() {
        var t = 0;

        for (var n in this) {
          "$" === n[0] && ++t;
        }

        return t;
      },
      empty: function empty() {
        for (var t in this) {
          if ("$" === t[0]) return !1;
        }

        return !0;
      },
      each: function each(t) {
        for (var n in this) {
          "$" === n[0] && t(this[n], n.slice(1), this);
        }
      }
    };
    var Ae = xe;

    function Ce() {}

    var Te = Ae.prototype;

    function Me(t, n) {
      var e = new Ce();
      if (t instanceof Ce) t.each(function (t) {
        e.add(t);
      });else if (t) {
        var r = -1,
            o = t.length;
        if (null == n) for (; ++r < o;) {
          e.add(t[r]);
        } else for (; ++r < o;) {
          e.add(n(t[r], r, t));
        }
      }
      return e;
    }

    Ce.prototype = Me.prototype = {
      constructor: Ce,
      has: Te.has,
      add: function add(t) {
        return this["$" + (t += "")] = t, this;
      },
      remove: Te.remove,
      clear: Te.clear,
      values: Te.keys,
      size: Te.size,
      empty: Te.empty,
      each: Te.each
    };
    var ke = Array.prototype,
        Se = ke.map,
        Le = ke.slice;

    var De = function De(t) {
      return function () {
        return t;
      };
    },
        Be = function Be(t) {
      return +t;
    },
        Fe = [0, 1];

    function Ne(t, n) {
      return (n -= t = +t) ? function (e) {
        return (e - t) / n;
      } : De(n);
    }

    function Oe(t, n, e, r) {
      var o = t[0],
          i = t[1],
          a = n[0],
          s = n[1];
      return i < o ? (o = e(i, o), a = r(s, a)) : (o = e(o, i), a = r(a, s)), function (t) {
        return a(o(t));
      };
    }

    function Pe(t, n, e, r) {
      var o = Math.min(t.length, n.length) - 1,
          i = new Array(o),
          a = new Array(o),
          s = -1;

      for (t[o] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++s < o;) {
        i[s] = e(t[s], t[s + 1]), a[s] = r(n[s], n[s + 1]);
      }

      return function (n) {
        var e = he(t, n, 1, o) - 1;
        return a[e](i[e](n));
      };
    }

    function Ee(t, n) {
      return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp());
    }

    function Ie(t, n) {
      var e,
          r,
          o,
          i = Fe,
          a = Fe,
          s = Ot,
          c = !1;

      function u() {
        return e = Math.min(i.length, a.length) > 2 ? Pe : Oe, r = o = null, l;
      }

      function l(n) {
        return (r || (r = e(i, a, c ? function (t) {
          return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
              return t <= n ? 0 : t >= e ? 1 : r(t);
            };
          };
        }(t) : t, s)))(+n);
      }

      return l.invert = function (t) {
        return (o || (o = e(a, i, Ne, c ? function (t) {
          return function (n, e) {
            var r = t(n = +n, e = +e);
            return function (t) {
              return t <= 0 ? n : t >= 1 ? e : r(t);
            };
          };
        }(n) : n)))(+t);
      }, l.domain = function (t) {
        return arguments.length ? (i = Se.call(t, Be), u()) : i.slice();
      }, l.range = function (t) {
        return arguments.length ? (a = Le.call(t), u()) : a.slice();
      }, l.rangeRound = function (t) {
        return a = Le.call(t), s = Pt, u();
      }, l.clamp = function (t) {
        return arguments.length ? (c = !!t, u()) : c;
      }, l.interpolate = function (t) {
        return arguments.length ? (s = t, u()) : s;
      }, u();
    }

    var je = function je(t, n) {
      if ((e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) < 0) return null;
      var e,
          r = t.slice(0, e);
      return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
    },
        He = function He(t) {
      return (t = je(Math.abs(t))) ? t[1] : NaN;
    },
        Ue = /^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

    function We(t) {
      return new Ye(t);
    }

    function Ye(t) {
      if (!(n = Ue.exec(t))) throw new Error("invalid format: " + t);
      var n;
      this.fill = n[1] || " ", this.align = n[2] || ">", this.sign = n[3] || "-", this.symbol = n[4] || "", this.zero = !!n[5], this.width = n[6] && +n[6], this.comma = !!n[7], this.precision = n[8] && +n[8].slice(1), this.trim = !!n[9], this.type = n[10] || "";
    }

    We.prototype = Ye.prototype, Ye.prototype.toString = function () {
      return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (null == this.width ? "" : Math.max(1, 0 | this.width)) + (this.comma ? "," : "") + (null == this.precision ? "" : "." + Math.max(0, 0 | this.precision)) + (this.trim ? "~" : "") + this.type;
    };

    var Re,
        ze,
        qe,
        Xe,
        $e = function $e(t) {
      t: for (var n, e = t.length, r = 1, o = -1; r < e; ++r) {
        switch (t[r]) {
          case ".":
            o = n = r;
            break;

          case "0":
            0 === o && (o = r), n = r;
            break;

          default:
            if (o > 0) {
              if (!+t[r]) break t;
              o = 0;
            }

        }
      }

      return o > 0 ? t.slice(0, o) + t.slice(n + 1) : t;
    },
        Ve = function Ve(t, n) {
      var e = je(t, n);
      if (!e) return t + "";
      var r = e[0],
          o = e[1];
      return o < 0 ? "0." + new Array(-o).join("0") + r : r.length > o + 1 ? r.slice(0, o + 1) + "." + r.slice(o + 1) : r + new Array(o - r.length + 2).join("0");
    },
        Ge = {
      "%": function _(t, n) {
        return (100 * t).toFixed(n);
      },
      b: function b(t) {
        return Math.round(t).toString(2);
      },
      c: function c(t) {
        return t + "";
      },
      d: function d(t) {
        return Math.round(t).toString(10);
      },
      e: function e(t, n) {
        return t.toExponential(n);
      },
      f: function f(t, n) {
        return t.toFixed(n);
      },
      g: function g(t, n) {
        return t.toPrecision(n);
      },
      o: function o(t) {
        return Math.round(t).toString(8);
      },
      p: function p(t, n) {
        return Ve(100 * t, n);
      },
      r: Ve,
      s: function s(t, n) {
        var e = je(t, n);
        if (!e) return t + "";
        var r = e[0],
            o = e[1],
            i = o - (Re = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
            a = r.length;
        return i === a ? r : i > a ? r + new Array(i - a + 1).join("0") : i > 0 ? r.slice(0, i) + "." + r.slice(i) : "0." + new Array(1 - i).join("0") + je(t, Math.max(0, n + i - 1))[0];
      },
      X: function X(t) {
        return Math.round(t).toString(16).toUpperCase();
      },
      x: function x(t) {
        return Math.round(t).toString(16);
      }
    },
        Qe = function Qe(t) {
      return t;
    },
        Ze = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"],
        Je = function Je(t) {
      var n = t.grouping && t.thousands ? function (t, n) {
        return function (e, r) {
          for (var o = e.length, i = [], a = 0, s = t[0], c = 0; o > 0 && s > 0 && (c + s + 1 > r && (s = Math.max(1, r - c)), i.push(e.substring(o -= s, o + s)), !((c += s + 1) > r));) {
            s = t[a = (a + 1) % t.length];
          }

          return i.reverse().join(n);
        };
      }(t.grouping, t.thousands) : Qe,
          e = t.currency,
          r = t.decimal,
          o = t.numerals ? function (t) {
        return function (n) {
          return n.replace(/[0-9]/g, function (n) {
            return t[+n];
          });
        };
      }(t.numerals) : Qe,
          i = t.percent || "%";

      function a(t) {
        var a = (t = We(t)).fill,
            s = t.align,
            c = t.sign,
            u = t.symbol,
            l = t.zero,
            f = t.width,
            h = t.comma,
            d = t.precision,
            g = t.trim,
            p = t.type;
        "n" === p ? (h = !0, p = "g") : Ge[p] || (null == d && (d = 12), g = !0, p = "g"), (l || "0" === a && "=" === s) && (l = !0, a = "0", s = "=");
        var m = "$" === u ? e[0] : "#" === u && /[boxX]/.test(p) ? "0" + p.toLowerCase() : "",
            b = "$" === u ? e[1] : /[%p]/.test(p) ? i : "",
            v = Ge[p],
            y = /[defgprs%]/.test(p);

        function _(t) {
          var e,
              i,
              u,
              _ = m,
              w = b;
          if ("c" === p) w = v(t) + w, t = "";else {
            var x = (t = +t) < 0;
            if (t = v(Math.abs(t), d), g && (t = $e(t)), x && 0 == +t && (x = !1), _ = (x ? "(" === c ? c : "-" : "-" === c || "(" === c ? "" : c) + _, w = ("s" === p ? Ze[8 + Re / 3] : "") + w + (x && "(" === c ? ")" : ""), y) for (e = -1, i = t.length; ++e < i;) {
              if (48 > (u = t.charCodeAt(e)) || u > 57) {
                w = (46 === u ? r + t.slice(e + 1) : t.slice(e)) + w, t = t.slice(0, e);
                break;
              }
            }
          }
          h && !l && (t = n(t, 1 / 0));
          var A = _.length + t.length + w.length,
              C = A < f ? new Array(f - A + 1).join(a) : "";

          switch (h && l && (t = n(C + t, C.length ? f - w.length : 1 / 0), C = ""), s) {
            case "<":
              t = _ + t + w + C;
              break;

            case "=":
              t = _ + C + t + w;
              break;

            case "^":
              t = C.slice(0, A = C.length >> 1) + _ + t + w + C.slice(A);
              break;

            default:
              t = C + _ + t + w;
          }

          return o(t);
        }

        return d = null == d ? 6 : /[gprs]/.test(p) ? Math.max(1, Math.min(21, d)) : Math.max(0, Math.min(20, d)), _.toString = function () {
          return t + "";
        }, _;
      }

      return {
        format: a,
        formatPrefix: function formatPrefix(t, n) {
          var e = a(((t = We(t)).type = "f", t)),
              r = 3 * Math.max(-8, Math.min(8, Math.floor(He(n) / 3))),
              o = Math.pow(10, -r),
              i = Ze[8 + r / 3];
          return function (t) {
            return e(o * t) + i;
          };
        }
      };
    };

    !function (t) {
      ze = Je(t), qe = ze.format, Xe = ze.formatPrefix;
    }({
      decimal: ".",
      thousands: ",",
      grouping: [3],
      currency: ["$", ""]
    });

    var Ke = function Ke(t, n, e) {
      var r,
          o = t[0],
          i = t[t.length - 1],
          a = ye(o, i, null == n ? 10 : n);

      switch ((e = We(null == e ? ",f" : e)).type) {
        case "s":
          var s = Math.max(Math.abs(o), Math.abs(i));
          return null != e.precision || isNaN(r = function (t, n) {
            return Math.max(0, 3 * Math.max(-8, Math.min(8, Math.floor(He(n) / 3))) - He(Math.abs(t)));
          }(a, s)) || (e.precision = r), Xe(e, s);

        case "":
        case "e":
        case "g":
        case "p":
        case "r":
          null != e.precision || isNaN(r = function (t, n) {
            return t = Math.abs(t), n = Math.abs(n) - t, Math.max(0, He(n) - He(t)) + 1;
          }(a, Math.max(Math.abs(o), Math.abs(i)))) || (e.precision = r - ("e" === e.type));
          break;

        case "f":
        case "%":
          null != e.precision || isNaN(r = function (t) {
            return Math.max(0, -He(Math.abs(t)));
          }(a)) || (e.precision = r - 2 * ("%" === e.type));
      }

      return qe(e);
    };

    function tr(t) {
      var n = t.domain;
      return t.ticks = function (t) {
        var e = n();
        return be(e[0], e[e.length - 1], null == t ? 10 : t);
      }, t.tickFormat = function (t, e) {
        return Ke(n(), t, e);
      }, t.nice = function (e) {
        null == e && (e = 10);
        var r,
            o = n(),
            i = 0,
            a = o.length - 1,
            s = o[i],
            c = o[a];
        return c < s && (r = s, s = c, c = r, r = i, i = a, a = r), (r = ve(s, c, e)) > 0 ? r = ve(s = Math.floor(s / r) * r, c = Math.ceil(c / r) * r, e) : r < 0 && (r = ve(s = Math.ceil(s * r) / r, c = Math.floor(c * r) / r, e)), r > 0 ? (o[i] = Math.floor(s / r) * r, o[a] = Math.ceil(c / r) * r, n(o)) : r < 0 && (o[i] = Math.ceil(s * r) / r, o[a] = Math.floor(c * r) / r, n(o)), t;
      }, t;
    }

    function nr() {
      var t = Ie(Ne, Mt);
      return t.copy = function () {
        return Ee(t, nr());
      }, tr(t);
    }

    var er = new Date(),
        rr = new Date();

    function or(t, n, e, r) {
      function o(n) {
        return t(n = new Date(+n)), n;
      }

      return o.floor = o, o.ceil = function (e) {
        return t(e = new Date(e - 1)), n(e, 1), t(e), e;
      }, o.round = function (t) {
        var n = o(t),
            e = o.ceil(t);
        return t - n < e - t ? n : e;
      }, o.offset = function (t, e) {
        return n(t = new Date(+t), null == e ? 1 : Math.floor(e)), t;
      }, o.range = function (e, r, i) {
        var a,
            s = [];
        if (e = o.ceil(e), i = null == i ? 1 : Math.floor(i), !(e < r && i > 0)) return s;

        do {
          s.push(a = new Date(+e)), n(e, i), t(e);
        } while (a < e && e < r);

        return s;
      }, o.filter = function (e) {
        return or(function (n) {
          if (n >= n) for (; t(n), !e(n);) {
            n.setTime(n - 1);
          }
        }, function (t, r) {
          if (t >= t) if (r < 0) for (; ++r <= 0;) {
            for (; n(t, -1), !e(t);) {
              ;
            }
          } else for (; --r >= 0;) {
            for (; n(t, 1), !e(t);) {
              ;
            }
          }
        });
      }, e && (o.count = function (n, r) {
        return er.setTime(+n), rr.setTime(+r), t(er), t(rr), Math.floor(e(er, rr));
      }, o.every = function (t) {
        return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? o.filter(r ? function (n) {
          return r(n) % t == 0;
        } : function (n) {
          return o.count(0, n) % t == 0;
        }) : o : null;
      }), o;
    }

    var ir = or(function () {}, function (t, n) {
      t.setTime(+t + n);
    }, function (t, n) {
      return n - t;
    });

    ir.every = function (t) {
      return t = Math.floor(t), isFinite(t) && t > 0 ? t > 1 ? or(function (n) {
        n.setTime(Math.floor(n / t) * t);
      }, function (n, e) {
        n.setTime(+n + e * t);
      }, function (n, e) {
        return (e - n) / t;
      }) : ir : null;
    };

    ir.range;
    var ar = 6e4,
        sr = 6048e5,
        cr = or(function (t) {
      t.setTime(1e3 * Math.floor(t / 1e3));
    }, function (t, n) {
      t.setTime(+t + 1e3 * n);
    }, function (t, n) {
      return (n - t) / 1e3;
    }, function (t) {
      return t.getUTCSeconds();
    }),
        ur = (cr.range, or(function (t) {
      t.setTime(Math.floor(t / ar) * ar);
    }, function (t, n) {
      t.setTime(+t + n * ar);
    }, function (t, n) {
      return (n - t) / ar;
    }, function (t) {
      return t.getMinutes();
    })),
        lr = (ur.range, or(function (t) {
      var n = t.getTimezoneOffset() * ar % 36e5;
      n < 0 && (n += 36e5), t.setTime(36e5 * Math.floor((+t - n) / 36e5) + n);
    }, function (t, n) {
      t.setTime(+t + 36e5 * n);
    }, function (t, n) {
      return (n - t) / 36e5;
    }, function (t) {
      return t.getHours();
    })),
        fr = (lr.range, or(function (t) {
      t.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setDate(t.getDate() + n);
    }, function (t, n) {
      return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ar) / 864e5;
    }, function (t) {
      return t.getDate() - 1;
    })),
        hr = fr;
    fr.range;

    function dr(t) {
      return or(function (n) {
        n.setDate(n.getDate() - (n.getDay() + 7 - t) % 7), n.setHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setDate(t.getDate() + 7 * n);
      }, function (t, n) {
        return (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * ar) / sr;
      });
    }

    var gr = dr(0),
        pr = dr(1),
        mr = dr(2),
        br = dr(3),
        vr = dr(4),
        yr = dr(5),
        _r = dr(6),
        wr = (gr.range, pr.range, mr.range, br.range, vr.range, yr.range, _r.range, or(function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setMonth(t.getMonth() + n);
    }, function (t, n) {
      return n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear());
    }, function (t) {
      return t.getMonth();
    })),
        xr = (wr.range, or(function (t) {
      t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setFullYear(t.getFullYear() + n);
    }, function (t, n) {
      return n.getFullYear() - t.getFullYear();
    }, function (t) {
      return t.getFullYear();
    }));

    xr.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? or(function (n) {
        n.setFullYear(Math.floor(n.getFullYear() / t) * t), n.setMonth(0, 1), n.setHours(0, 0, 0, 0);
      }, function (n, e) {
        n.setFullYear(n.getFullYear() + e * t);
      }) : null;
    };

    var Ar = xr,
        Cr = (xr.range, or(function (t) {
      t.setUTCSeconds(0, 0);
    }, function (t, n) {
      t.setTime(+t + n * ar);
    }, function (t, n) {
      return (n - t) / ar;
    }, function (t) {
      return t.getUTCMinutes();
    })),
        Tr = (Cr.range, or(function (t) {
      t.setUTCMinutes(0, 0, 0);
    }, function (t, n) {
      t.setTime(+t + 36e5 * n);
    }, function (t, n) {
      return (n - t) / 36e5;
    }, function (t) {
      return t.getUTCHours();
    })),
        Mr = (Tr.range, or(function (t) {
      t.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCDate(t.getUTCDate() + n);
    }, function (t, n) {
      return (n - t) / 864e5;
    }, function (t) {
      return t.getUTCDate() - 1;
    })),
        kr = Mr;
    Mr.range;

    function Sr(t) {
      return or(function (n) {
        n.setUTCDate(n.getUTCDate() - (n.getUTCDay() + 7 - t) % 7), n.setUTCHours(0, 0, 0, 0);
      }, function (t, n) {
        t.setUTCDate(t.getUTCDate() + 7 * n);
      }, function (t, n) {
        return (n - t) / sr;
      });
    }

    var Lr = Sr(0),
        Dr = Sr(1),
        Br = Sr(2),
        Fr = Sr(3),
        Nr = Sr(4),
        Or = Sr(5),
        Pr = Sr(6),
        Er = (Lr.range, Dr.range, Br.range, Fr.range, Nr.range, Or.range, Pr.range, or(function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCMonth(t.getUTCMonth() + n);
    }, function (t, n) {
      return n.getUTCMonth() - t.getUTCMonth() + 12 * (n.getUTCFullYear() - t.getUTCFullYear());
    }, function (t) {
      return t.getUTCMonth();
    })),
        Ir = (Er.range, or(function (t) {
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    }, function (t, n) {
      t.setUTCFullYear(t.getUTCFullYear() + n);
    }, function (t, n) {
      return n.getUTCFullYear() - t.getUTCFullYear();
    }, function (t) {
      return t.getUTCFullYear();
    }));

    Ir.every = function (t) {
      return isFinite(t = Math.floor(t)) && t > 0 ? or(function (n) {
        n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t), n.setUTCMonth(0, 1), n.setUTCHours(0, 0, 0, 0);
      }, function (n, e) {
        n.setUTCFullYear(n.getUTCFullYear() + e * t);
      }) : null;
    };

    var jr = Ir;
    Ir.range;

    function Hr(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
        return n.setFullYear(t.y), n;
      }

      return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
    }

    function Ur(t) {
      if (0 <= t.y && t.y < 100) {
        var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
        return n.setUTCFullYear(t.y), n;
      }

      return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
    }

    function Wr(t) {
      return {
        y: t,
        m: 0,
        d: 1,
        H: 0,
        M: 0,
        S: 0,
        L: 0
      };
    }

    var Yr,
        Rr,
        zr,
        qr = {
      "-": "",
      _: " ",
      0: "0"
    },
        Xr = /^\s*\d+/,
        $r = /^%/,
        Vr = /[\\^$*+?|[\]().{}]/g;

    function Gr(t, n, e) {
      var r = t < 0 ? "-" : "",
          o = (r ? -t : t) + "",
          i = o.length;
      return r + (i < e ? new Array(e - i + 1).join(n) + o : o);
    }

    function Qr(t) {
      return t.replace(Vr, "\\$&");
    }

    function Zr(t) {
      return new RegExp("^(?:" + t.map(Qr).join("|") + ")", "i");
    }

    function Jr(t) {
      for (var n = {}, e = -1, r = t.length; ++e < r;) {
        n[t[e].toLowerCase()] = e;
      }

      return n;
    }

    function Kr(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 1));
      return r ? (t.w = +r[0], e + r[0].length) : -1;
    }

    function to(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 1));
      return r ? (t.u = +r[0], e + r[0].length) : -1;
    }

    function no(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.U = +r[0], e + r[0].length) : -1;
    }

    function eo(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.V = +r[0], e + r[0].length) : -1;
    }

    function ro(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.W = +r[0], e + r[0].length) : -1;
    }

    function oo(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 4));
      return r ? (t.y = +r[0], e + r[0].length) : -1;
    }

    function io(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), e + r[0].length) : -1;
    }

    function ao(t, n, e) {
      var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
      return r ? (t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), e + r[0].length) : -1;
    }

    function so(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.m = r[0] - 1, e + r[0].length) : -1;
    }

    function co(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.d = +r[0], e + r[0].length) : -1;
    }

    function uo(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 3));
      return r ? (t.m = 0, t.d = +r[0], e + r[0].length) : -1;
    }

    function lo(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.H = +r[0], e + r[0].length) : -1;
    }

    function fo(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.M = +r[0], e + r[0].length) : -1;
    }

    function ho(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 2));
      return r ? (t.S = +r[0], e + r[0].length) : -1;
    }

    function go(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 3));
      return r ? (t.L = +r[0], e + r[0].length) : -1;
    }

    function po(t, n, e) {
      var r = Xr.exec(n.slice(e, e + 6));
      return r ? (t.L = Math.floor(r[0] / 1e3), e + r[0].length) : -1;
    }

    function mo(t, n, e) {
      var r = $r.exec(n.slice(e, e + 1));
      return r ? e + r[0].length : -1;
    }

    function bo(t, n, e) {
      var r = Xr.exec(n.slice(e));
      return r ? (t.Q = +r[0], e + r[0].length) : -1;
    }

    function vo(t, n, e) {
      var r = Xr.exec(n.slice(e));
      return r ? (t.Q = 1e3 * +r[0], e + r[0].length) : -1;
    }

    function yo(t, n) {
      return Gr(t.getDate(), n, 2);
    }

    function _o(t, n) {
      return Gr(t.getHours(), n, 2);
    }

    function wo(t, n) {
      return Gr(t.getHours() % 12 || 12, n, 2);
    }

    function xo(t, n) {
      return Gr(1 + hr.count(Ar(t), t), n, 3);
    }

    function Ao(t, n) {
      return Gr(t.getMilliseconds(), n, 3);
    }

    function Co(t, n) {
      return Ao(t, n) + "000";
    }

    function To(t, n) {
      return Gr(t.getMonth() + 1, n, 2);
    }

    function Mo(t, n) {
      return Gr(t.getMinutes(), n, 2);
    }

    function ko(t, n) {
      return Gr(t.getSeconds(), n, 2);
    }

    function So(t) {
      var n = t.getDay();
      return 0 === n ? 7 : n;
    }

    function Lo(t, n) {
      return Gr(gr.count(Ar(t), t), n, 2);
    }

    function Do(t, n) {
      var e = t.getDay();
      return t = e >= 4 || 0 === e ? vr(t) : vr.ceil(t), Gr(vr.count(Ar(t), t) + (4 === Ar(t).getDay()), n, 2);
    }

    function Bo(t) {
      return t.getDay();
    }

    function Fo(t, n) {
      return Gr(pr.count(Ar(t), t), n, 2);
    }

    function No(t, n) {
      return Gr(t.getFullYear() % 100, n, 2);
    }

    function Oo(t, n) {
      return Gr(t.getFullYear() % 1e4, n, 4);
    }

    function Po(t) {
      var n = t.getTimezoneOffset();
      return (n > 0 ? "-" : (n *= -1, "+")) + Gr(n / 60 | 0, "0", 2) + Gr(n % 60, "0", 2);
    }

    function Eo(t, n) {
      return Gr(t.getUTCDate(), n, 2);
    }

    function Io(t, n) {
      return Gr(t.getUTCHours(), n, 2);
    }

    function jo(t, n) {
      return Gr(t.getUTCHours() % 12 || 12, n, 2);
    }

    function Ho(t, n) {
      return Gr(1 + kr.count(jr(t), t), n, 3);
    }

    function Uo(t, n) {
      return Gr(t.getUTCMilliseconds(), n, 3);
    }

    function Wo(t, n) {
      return Uo(t, n) + "000";
    }

    function Yo(t, n) {
      return Gr(t.getUTCMonth() + 1, n, 2);
    }

    function Ro(t, n) {
      return Gr(t.getUTCMinutes(), n, 2);
    }

    function zo(t, n) {
      return Gr(t.getUTCSeconds(), n, 2);
    }

    function qo(t) {
      var n = t.getUTCDay();
      return 0 === n ? 7 : n;
    }

    function Xo(t, n) {
      return Gr(Lr.count(jr(t), t), n, 2);
    }

    function $o(t, n) {
      var e = t.getUTCDay();
      return t = e >= 4 || 0 === e ? Nr(t) : Nr.ceil(t), Gr(Nr.count(jr(t), t) + (4 === jr(t).getUTCDay()), n, 2);
    }

    function Vo(t) {
      return t.getUTCDay();
    }

    function Go(t, n) {
      return Gr(Dr.count(jr(t), t), n, 2);
    }

    function Qo(t, n) {
      return Gr(t.getUTCFullYear() % 100, n, 2);
    }

    function Zo(t, n) {
      return Gr(t.getUTCFullYear() % 1e4, n, 4);
    }

    function Jo() {
      return "+0000";
    }

    function Ko() {
      return "%";
    }

    function ti(t) {
      return +t;
    }

    function ni(t) {
      return Math.floor(+t / 1e3);
    }

    !function (t) {
      Yr = function (t) {
        var n = t.dateTime,
            e = t.date,
            r = t.time,
            o = t.periods,
            i = t.days,
            _a2 = t.shortDays,
            s = t.months,
            c = t.shortMonths,
            u = Zr(o),
            l = Jr(o),
            f = Zr(i),
            h = Jr(i),
            d = Zr(_a2),
            g = Jr(_a2),
            p = Zr(s),
            m = Jr(s),
            _b = Zr(c),
            v = Jr(c),
            y = {
          a: function a(t) {
            return _a2[t.getDay()];
          },
          A: function A(t) {
            return i[t.getDay()];
          },
          b: function b(t) {
            return c[t.getMonth()];
          },
          B: function B(t) {
            return s[t.getMonth()];
          },
          c: null,
          d: yo,
          e: yo,
          f: Co,
          H: _o,
          I: wo,
          j: xo,
          L: Ao,
          m: To,
          M: Mo,
          p: function p(t) {
            return o[+(t.getHours() >= 12)];
          },
          Q: ti,
          s: ni,
          S: ko,
          u: So,
          U: Lo,
          V: Do,
          w: Bo,
          W: Fo,
          x: null,
          X: null,
          y: No,
          Y: Oo,
          Z: Po,
          "%": Ko
        },
            _ = {
          a: function a(t) {
            return _a2[t.getUTCDay()];
          },
          A: function A(t) {
            return i[t.getUTCDay()];
          },
          b: function b(t) {
            return c[t.getUTCMonth()];
          },
          B: function B(t) {
            return s[t.getUTCMonth()];
          },
          c: null,
          d: Eo,
          e: Eo,
          f: Wo,
          H: Io,
          I: jo,
          j: Ho,
          L: Uo,
          m: Yo,
          M: Ro,
          p: function p(t) {
            return o[+(t.getUTCHours() >= 12)];
          },
          Q: ti,
          s: ni,
          S: zo,
          u: qo,
          U: Xo,
          V: $o,
          w: Vo,
          W: Go,
          x: null,
          X: null,
          y: Qo,
          Y: Zo,
          Z: Jo,
          "%": Ko
        },
            w = {
          a: function a(t, n, e) {
            var r = d.exec(n.slice(e));
            return r ? (t.w = g[r[0].toLowerCase()], e + r[0].length) : -1;
          },
          A: function A(t, n, e) {
            var r = f.exec(n.slice(e));
            return r ? (t.w = h[r[0].toLowerCase()], e + r[0].length) : -1;
          },
          b: function b(t, n, e) {
            var r = _b.exec(n.slice(e));

            return r ? (t.m = v[r[0].toLowerCase()], e + r[0].length) : -1;
          },
          B: function B(t, n, e) {
            var r = p.exec(n.slice(e));
            return r ? (t.m = m[r[0].toLowerCase()], e + r[0].length) : -1;
          },
          c: function c(t, e, r) {
            return C(t, n, e, r);
          },
          d: co,
          e: co,
          f: po,
          H: lo,
          I: lo,
          j: uo,
          L: go,
          m: so,
          M: fo,
          p: function p(t, n, e) {
            var r = u.exec(n.slice(e));
            return r ? (t.p = l[r[0].toLowerCase()], e + r[0].length) : -1;
          },
          Q: bo,
          s: vo,
          S: ho,
          u: to,
          U: no,
          V: eo,
          w: Kr,
          W: ro,
          x: function x(t, n, r) {
            return C(t, e, n, r);
          },
          X: function X(t, n, e) {
            return C(t, r, n, e);
          },
          y: io,
          Y: oo,
          Z: ao,
          "%": mo
        };

        function x(t, n) {
          return function (e) {
            var r,
                o,
                i,
                a = [],
                s = -1,
                c = 0,
                u = t.length;

            for (e instanceof Date || (e = new Date(+e)); ++s < u;) {
              37 === t.charCodeAt(s) && (a.push(t.slice(c, s)), null != (o = qr[r = t.charAt(++s)]) ? r = t.charAt(++s) : o = "e" === r ? " " : "0", (i = n[r]) && (r = i(e, o)), a.push(r), c = s + 1);
            }

            return a.push(t.slice(c, s)), a.join("");
          };
        }

        function A(t, n) {
          return function (e) {
            var r,
                o,
                i = Wr(1900);
            if (C(i, t, e += "", 0) != e.length) return null;
            if ("Q" in i) return new Date(i.Q);

            if ("p" in i && (i.H = i.H % 12 + 12 * i.p), "V" in i) {
              if (i.V < 1 || i.V > 53) return null;
              "w" in i || (i.w = 1), "Z" in i ? (r = (o = (r = Ur(Wr(i.y))).getUTCDay()) > 4 || 0 === o ? Dr.ceil(r) : Dr(r), r = kr.offset(r, 7 * (i.V - 1)), i.y = r.getUTCFullYear(), i.m = r.getUTCMonth(), i.d = r.getUTCDate() + (i.w + 6) % 7) : (r = (o = (r = n(Wr(i.y))).getDay()) > 4 || 0 === o ? pr.ceil(r) : pr(r), r = hr.offset(r, 7 * (i.V - 1)), i.y = r.getFullYear(), i.m = r.getMonth(), i.d = r.getDate() + (i.w + 6) % 7);
            } else ("W" in i || "U" in i) && ("w" in i || (i.w = "u" in i ? i.u % 7 : "W" in i ? 1 : 0), o = "Z" in i ? Ur(Wr(i.y)).getUTCDay() : n(Wr(i.y)).getDay(), i.m = 0, i.d = "W" in i ? (i.w + 6) % 7 + 7 * i.W - (o + 5) % 7 : i.w + 7 * i.U - (o + 6) % 7);

            return "Z" in i ? (i.H += i.Z / 100 | 0, i.M += i.Z % 100, Ur(i)) : n(i);
          };
        }

        function C(t, n, e, r) {
          for (var o, i, a = 0, s = n.length, c = e.length; a < s;) {
            if (r >= c) return -1;

            if (37 === (o = n.charCodeAt(a++))) {
              if (o = n.charAt(a++), !(i = w[o in qr ? n.charAt(a++) : o]) || (r = i(t, e, r)) < 0) return -1;
            } else if (o != e.charCodeAt(r++)) return -1;
          }

          return r;
        }

        return y.x = x(e, y), y.X = x(r, y), y.c = x(n, y), _.x = x(e, _), _.X = x(r, _), _.c = x(n, _), {
          format: function format(t) {
            var n = x(t += "", y);
            return n.toString = function () {
              return t;
            }, n;
          },
          parse: function parse(t) {
            var n = A(t += "", Hr);
            return n.toString = function () {
              return t;
            }, n;
          },
          utcFormat: function utcFormat(t) {
            var n = x(t += "", _);
            return n.toString = function () {
              return t;
            }, n;
          },
          utcParse: function utcParse(t) {
            var n = A(t, Ur);
            return n.toString = function () {
              return t;
            }, n;
          }
        };
      }(t), Yr.format, Yr.parse, Rr = Yr.utcFormat, zr = Yr.utcParse;
    }({
      dateTime: "%x, %X",
      date: "%-m/%-d/%Y",
      time: "%-I:%M:%S %p",
      periods: ["AM", "PM"],
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    });
    Date.prototype.toISOString || Rr("%Y-%m-%dT%H:%M:%S.%LZ");
    +new Date("2000-01-01T00:00:00.000Z") || zr("%Y-%m-%dT%H:%M:%S.%LZ");

    var ei = function ei(t) {
      return t.match(/.{6}/g).map(function (t) {
        return "#" + t;
      });
    };

    ei("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ei("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"), ei("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"), ei("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"), qt(mt(300, .5, 0), mt(-240, .5, 1)), qt(mt(-100, .75, .35), mt(80, 1.5, .8)), qt(mt(260, .75, .35), mt(80, 1.5, .8)), mt();

    function ri(t) {
      var n = t.length;
      return function (e) {
        return t[Math.max(0, Math.min(n - 1, Math.floor(e * n)))];
      };
    }

    ri(ei("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")), ri(ei("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")), ri(ei("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")), ri(ei("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));

    function oi(t, n) {
      var e,
          r,
          o = /(^([+\-]?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?(?=\D|\s|$))|^0x[\da-fA-F]+$|\d+)/g,
          i = /^\s+|\s+$/g,
          a = /\s+/g,
          s = /^0x[0-9a-f]+$/i,
          c = /^0/,
          u = function u(t) {
        return (oi.insensitive && ("" + t).toLowerCase() || "" + t).replace(i, "");
      },
          l = u(t),
          f = u(n),
          h = l.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
          d = f.replace(o, "\0$1\0").replace(/\0$/, "").replace(/^\0/, "").split("\0"),
          g = parseInt(l.match(s), 16) || 1 !== h.length && Date.parse(l),
          p = parseInt(f.match(s), 16) || g && f.match(/(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/) && Date.parse(f) || null,
          m = function m(t, n) {
        return (!t.match(c) || 1 == n) && parseFloat(t) || t.replace(a, " ").replace(i, "") || 0;
      };

      if (p) {
        if (g < p) return -1;
        if (g > p) return 1;
      }

      for (var b = 0, v = h.length, y = d.length, _ = Math.max(v, y); b < _; b++) {
        if (e = m(h[b] || "", v), r = m(d[b] || "", y), isNaN(e) !== isNaN(r)) return isNaN(e) ? 1 : -1;

        if (/[^\x00-\x80]/.test(e + r) && e.localeCompare) {
          var w = e.localeCompare(r);
          return w / Math.abs(w);
        }

        if (e < r) return -1;
        if (e > r) return 1;
      }
    }

    var ii = "1.4.1",
        ai = e(1);

    function si(t) {
      this.config = JSON.parse(JSON.stringify(t)), function (t) {
        t.chromosomesArray = [], t.coordinateSystem = "iscn", t.maxLength = {
          bp: 0,
          iscn: 0
        }, t.chromosomes = {}, t.numChromosomes = 0, t.config.debug || (t.config.debug = !1), t.config.dataDir || (t.config.dataDir = t.getDataDir()), t.config.container || (t.config.container = "body"), t.selector = t.config.container + " #_ideogram", t.config.resolution || (t.config.resolution = ""), t.config.orientation || (t.config.orientation = "vertical"), t.config.brush || (t.config.brush = null), t.config.rows || (t.config.rows = 1), "showChromosomeLabels" in t.config == 0 && (t.config.showChromosomeLabels = !0), t.config.showNonNuclearChromosomes || (t.config.showNonNuclearChromosomes = !1);
      }(this), function (t) {
        t.config.ploidy || (t.config.ploidy = 1), t.config.ploidy > 1 && (t.sexChromosomes = {}, t.config.sex || (t.config.sex = "male"), 2 !== t.config.ploidy || t.config.ancestors || (t.config.ancestors = {
          M: "#ffb6c1",
          P: "#add8e6"
        }, t.config.ploidyDesc = "MP"));
      }(this), function (t) {
        t.config.showBandLabels || (t.config.showBandLabels = !1), "showFullyBanded" in t.config ? t.config.showFullyBanded = t.config.showFullyBanded : t.config.showFullyBanded = !0, t.bandsToShow = [], t.bandData = {};
      }(this), function (t) {
        var n, e, r;
        t.config.chrHeight || (n = t.config.container, e = document.querySelector(n).getBoundingClientRect(), r = "vertical" === t.config.orientation ? e.height : e.width, "body" !== n && 0 !== r || (r = 400), t.config.chrHeight = r);
      }(this), function (t) {
        var n, e;
        t.config.chrWidth || (n = 10, (e = t.config.chrHeight) < 900 && e > 500 ? n = Math.round(e / 40) : e >= 900 && (n = Math.round(e / 45)), t.config.chrWidth = n);
      }(this), function (t) {
        t.config.chrMargin || (1 === t.config.ploidy ? t.config.chrMargin = 10 : t.config.chrMargin = Math.round(t.config.chrWidth / 4)), t.config.showBandLabels && (t.config.chrMargin += 20);
      }(this), function (t, n) {
        t.onLoad && (n.onLoadCallback = t.onLoad), t.onLoadAnnots && (n.onLoadAnnotsCallback = t.onLoadAnnots), t.onDrawAnnots && (n.onDrawAnnotsCallback = t.onDrawAnnots), t.onBrushMove && (n.onBrushMoveCallback = t.onBrushMove), t.onDidRotate && (n.onDidRotateCallback = t.onDidRotate), t.onWillShowAnnotTooltip && (n.onWillShowAnnotTooltipCallback = t.onWillShowAnnotTooltip);
      }(t, this), function (t) {
        t.organisms = {
          9606: {
            commonName: "Human",
            scientificName: "Homo sapiens",
            scientificNameAbbr: "H. sapiens",
            assemblies: {
              default: "GCF_000001405.26",
              GRCh38: "GCF_000001405.26",
              GRCh37: "GCF_000001405.13"
            }
          },
          10090: {
            commonName: "Mouse",
            scientificName: "Mus musculus",
            scientificNameAbbr: "M. musculus",
            assemblies: {
              default: "GCF_000001635.20"
            }
          },
          4641: {
            commonName: "banana",
            scientificName: "Musa acuminata",
            scientificNameAbbr: "M. acuminata",
            assemblies: {
              default: "mock"
            }
          }
        };
      }(this), function (t) {
        t.bump = Math.round(t.config.chrHeight / 125), t.adjustedBump = !1, t.config.chrHeight < 200 && (t.adjustedBump = !0, t.bump = 4);
      }(this), function (t, n) {
        t.chromosome && (n.config.chromosomes = [t.chromosome], "showBandLabels" in t == 0 && (n.config.showBandLabels = !0), "rotatable" in t == 0 && (n.config.rotatable = !1));
      }(t, this), this.initAnnotSettings(), this.config.chrMargin += this.config.chrWidth, "heatmap" === this.config.annotationsLayout ? this.config.chrMargin += this.config.annotTracksHeight : this.config.chrMargin += 2 * this.config.annotTracksHeight, this.init();
    }

    var ci = ai.a.assign({}, i);

    function ui(t) {
      void 0 !== t.timeout && window.clearTimeout(t.timeout), t.rawAnnots = t.setOriginalTrackIndexes(t.rawAnnots), t.config.annotationsDisplayedTracks ? t.annots = t.updateDisplayedTracks(t.config.annotationsDisplayedTracks) : (t.annots = t.processAnnotData(t.rawAnnots), t.config.filterable && t.initCrossFilter(), t.drawProcessedAnnots(t.annots));
    }

    function li(t, n) {
      var e = new Date().getTime(),
          r = this.config;
      this.initDrawChromosomes(t), r.annotationsPath && function (t) {
        t.rawAnnots ? ui(t) : function n() {
          t.timeout = setTimeout(function () {
            t.rawAnnots ? ui(t) : n();
          }, 50);
        }();
      }(this), function (t, n) {
        var e, r, o, i;
        if (!0 === t.showBandLabels && (o = new Date().getTime(), n.hideUnshownBandLabels(), i = new Date().getTime(), t.debug && console.log("Time in showing bands: " + (i - o) + " ms"), "vertical" === t.orientation)) for (e = 0; e < n.chromosomesArray.length; e++) {
          r = "#" + n.chromosomesArray[e].id, n.rotateChromosomeLabels(ci.select(r), e);
        }
        !0 === t.showChromosomeLabels && n.drawChromosomeLabels(n.chromosomes);
      }(r, this), r.brush && this.createBrush(r.brush), r.annotations && this.drawAnnots(r.annotations), function (t, n, e) {
        var r = new Date().getTime();
        t.debug && console.log("Time in drawChromosome: " + (r - e) + " ms");
        var o = new Date().getTime();
        t.debug && console.log("Time constructing ideogram: " + (o - n) + " ms");
      }(r, n, e), this.setOverflowScroll(), this.onLoadCallback && this.onLoadCallback();
    }

    var fi =
    /*#__PURE__*/
    function () {
      function fi(t) {
        _classCallCheck(this, fi);

        this._config = t, this._description = this._normalize(this._config.ploidyDesc);
      }

      _createClass(fi, [{
        key: "getChromosomesNumber",
        value: function getChromosomesNumber(t) {
          if (this._config.ploidyDesc) {
            var n = this._config.ploidyDesc[t];
            return n instanceof Object ? Object.keys(n)[0].length : n.length;
          }

          return this._config.ploidy || 1;
        }
      }, {
        key: "_normalize",
        value: function _normalize(t) {
          var n,
              e,
              r = [];
          if (!t) return t;

          for (n in t) {
            "string" == typeof (e = t[n]) ? ("vertical" === this._config.orientation && (e = e.split("").reverse()), r.push({
              ancestors: e,
              existence: this._getexistenceArray(e.length)
            })) : r.push({
              ancestors: Object.keys(e)[0],
              existence: e[Object.keys(e)[0]]
            });
          }

          return r;
        }
      }, {
        key: "_getexistenceArray",
        value: function _getexistenceArray(t) {
          for (var n = [], e = 0; e < t; e++) {
            n.push("11");
          }

          return n;
        }
      }, {
        key: "getSetSize",
        value: function getSetSize(t) {
          return this._description ? this._description[t].ancestors.length : 1;
        }
      }, {
        key: "getAncestor",
        value: function getAncestor(t, n) {
          return this._description ? this._description[t].ancestors[n] : "";
        }
      }, {
        key: "exists",
        value: function exists(t, n, e) {
          if (this._description) {
            var r = this._description[t].existence[n][e];
            return Number(r) > 0;
          }

          return !0;
        }
      }]);

      return fi;
    }();

    var hi = ai.a.assign({}, i);

    var di =
    /*#__PURE__*/
    function () {
      function di(t) {
        _classCallCheck(this, di);

        this._node = t;
      }

      _createClass(di, [{
        key: "getLabel",
        value: function getLabel() {
          return hi.select(this._node.parentNode).select("text.chrLabel").text();
        }
      }, {
        key: "getSetLabel",
        value: function getSetLabel() {
          return hi.select(this._node.parentNode).select("text.chrSetLabel").text();
        }
      }]);

      return di;
    }();

    var gi = ai.a.assign({}, i);

    var pi =
    /*#__PURE__*/
    function () {
      function pi(t, n) {
        _classCallCheck(this, pi);

        if (this._config = t, this._ideo = n, this._ploidy = this._ideo._ploidy, this._translate = void 0, "chrSetMargin" in t) this.chrSetMargin = t.chrSetMargin;else {
          var e = this._config.chrMargin;
          this.chrSetMargin = this._config.ploidy > 1 ? e : 0;
        }
        this._tickSize = 8, this._isRotated = !1;
      }

      _createClass(pi, [{
        key: "_getLeftMargin",
        value: function _getLeftMargin() {
          return this.margin.left;
        }
      }, {
        key: "_getYScale",
        value: function _getYScale() {
          return 20 / this._config.chrWidth;
        }
      }, {
        key: "getChromosomeLabels",
        value: function getChromosomeLabels(t) {
          var n = new di(t),
              e = [];
          return this._ideo.config.ploidy > 1 && e.push(n.getSetLabel()), e.push(n.getLabel()), e.filter(function (t) {
            return t.length > 0;
          });
        }
      }, {
        key: "getChromosomeBandLabelTranslate",
        value: function getChromosomeBandLabelTranslate(t) {
          var n,
              e,
              r,
              o = this._ideo,
              i = this._tickSize,
              a = o.config.orientation;
          return "vertical" === a ? r = "rotate(-90)translate(" + (n = i) + "," + (e = o.round(2 + t.px.start + t.px.width / 2)) + ")" : "horizontal" === a && (r = "translate(" + (n = o.round(-i + t.px.start + t.px.width / 2)) + "," + (e = -10) + ")"), {
            x: n,
            y: e,
            translate: r
          };
        }
      }, {
        key: "didRotate",
        value: function didRotate(t, n) {
          var e, r, o, i, a, s, c, u, l;
          r = (e = this._ideo).config.taxid, o = n.id.split("-")[0].replace("chr", ""), i = (a = e.chromosomes[r][o]).bands, u = (c = gi.select(n.parentNode)).attr("transform"), l = /scale\(.*\)/.exec(u), u = u.replace(l, ""), c.attr("transform", u), s = a.width, (a = e.getChromosomeModel(i, o, r, t)).oldWidth = s, e.chromosomes[r][o] = a, e.drawChromosome(a), e.handleRotateOnClick(), e.rawAnnots && (e.displayedTrackIndexes ? e.updateDisplayedTracks(e.displayedTrackIndexes) : (e.annots = e.processAnnotData(e.rawAnnots), e.drawProcessedAnnots(e.annots), e.config.filterable && e.initCrossFilter())), !0 === e.config.showBandLabels && (e.drawBandLabels(e.chromosomes), e.hideUnshownBandLabels()), e.onDidRotateCallback && e.onDidRotateCallback(a);
        }
      }, {
        key: "rotate",
        value: function rotate(t, n, e) {
          var r, o, i, a;
          r = this._ideo, a = r.selector + " .chrSetLabel, " + r.selector + " .chrLabel", i = document.querySelector(r.selector).getBoundingClientRect(), o = gi.selectAll(r.selector + " g.chromosome").filter(function () {
            return this !== e;
          }), this._isRotated ? (this._isRotated = !1, r.config.chrHeight = r.config.chrHeightOriginal, r.config.chrWidth = r.config.chrWidthOriginal, r.config.annotationHeight = r.config.annotationHeightOriginal, this.rotateBack(t, n, e, function () {
            o.style("display", null), gi.selectAll(a).style("display", null), r._layout.didRotate(n, e);
          })) : (this._isRotated = !0, o.style("display", "none"), gi.selectAll(a).style("display", "none"), this.rotateForward(t, n, e, function () {
            var t, o, a;
            r.config.chrHeightOriginal = r.config.chrHeight, r.config.chrWidthOriginal = r.config.chrWidth, r.config.annotationHeightOriginal = r.config.annotationHeight, "VerticalLayout" === r._layout._class ? (o = i.width, a = window.innerWidth) : (o = i.height - 10, a = window.innerHeight - 10), t = a < o ? a : o, t -= 2 * r.config.chrMargin, r.config.chrHeight = t, r.config.chrWidth *= 2.3, r.config.annotationHeight *= 1.7, r._layout.didRotate(n, e);
          }));
        }
      }, {
        key: "getChromosomeLabelClass",
        value: function getChromosomeLabelClass() {
          return 1 === this._config.ploidy ? "chrLabel" : "chrSetLabel";
        }
      }, {
        key: "_getAdditionalOffset",
        value: function _getAdditionalOffset() {
          return (this._config.annotationHeight || 0) * (this._config.annotationsNumTracks || 1);
        }
      }, {
        key: "_getChromosomeSetSize",
        value: function _getChromosomeSetSize(t) {
          return this._ploidy.getSetSize(t) * this._config.chrWidth * 2 + this.chrSetMargin;
        }
      }, {
        key: "getChromosomeSetLabelAnchor",
        value: function getChromosomeSetLabelAnchor() {
          return "middle";
        }
      }, {
        key: "getChromosomeLabelYPosition",
        value: function getChromosomeLabelYPosition() {
          return -5.5;
        }
      }, {
        key: "getChromosomeSetLabelYPosition",
        value: function getChromosomeSetLabelYPosition(t) {
          return 1 === this._config.ploidy ? this.getChromosomeLabelYPosition(t) : -2 * this._config.chrWidth;
        }
      }]);

      return pi;
    }(),
        mi = ai.a.assign({}, i);

    var bi =
    /*#__PURE__*/
    function (_pi) {
      _inherits(bi, _pi);

      function bi(t, n) {
        var _this;

        _classCallCheck(this, bi);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(bi).call(this, t, n)), _this._class = "VerticalLayout", _this.margin = {
          top: 30,
          left: 15
        };
        return _this;
      }

      _createClass(bi, [{
        key: "rotateForward",
        value: function rotateForward(t, n, e, r) {
          var o = "translate(20, 25) " + this.getChromosomeScale(e);
          mi.select(e.parentNode).transition().attr("transform", o).on("end", r);
          var i = this.getChromosomeLabels(e),
              a = 1.3 * (20 + this._config.chrWidth);
          mi.select(this._ideo.getSvg()).append("g").attr("class", "tmp").selectAll("text").data(i).enter().append("text").attr("class", function (t, n) {
            return 0 === n && 2 === i.length ? "chrSetLabel" : null;
          }).attr("x", 0).attr("y", a).style("opacity", 0).text(String).transition().style("opacity", 1), this._ideo.config.orientation = "horizontal";
        }
      }, {
        key: "rotateBack",
        value: function rotateBack(t, n, e, r) {
          var o = this.getChromosomeScaleBack(e),
              i = this.getChromosomeSetTranslate(t);
          mi.select(e.parentNode).transition().attr("transform", i + " " + o).on("end", r), mi.selectAll(this._ideo.selector + " g.tmp").style("opacity", 0).remove(), this._ideo.config.orientation = "vertical";
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return this._config.chrHeight + 1.5 * this.margin.top;
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          return "97%";
        }
      }, {
        key: "getChromosomeBandTickY1",
        value: function getChromosomeBandTickY1() {
          return 2;
        }
      }, {
        key: "getChromosomeBandTickY2",
        value: function getChromosomeBandTickY2() {
          return 10;
        }
      }, {
        key: "getChromosomeSetLabelTranslate",
        value: function getChromosomeSetLabelTranslate() {
          return "rotate(-90)";
        }
      }, {
        key: "getChromosomeBandLabelAnchor",
        value: function getChromosomeBandLabelAnchor() {
          return null;
        }
      }, {
        key: "getChromosomeScale",
        value: function getChromosomeScale(t) {
          var n, e;
          return n = mi.select(this._ideo.selector).node().getBoundingClientRect(), e = t.getBoundingClientRect(), "scale(" + n.width / e.height * .97 + ", " + this._getYScale() + ")";
        }
      }, {
        key: "getChromosomeScaleBack",
        value: function getChromosomeScaleBack(t) {
          var n, e, r;
          return e = (r = this._ideo.config).taxid, n = t.id.split("-")[0].replace("chr", ""), "scale(" + this._ideo.chromosomes[e][n].oldWidth / (3 * r.chrHeight) * .97 + ", " + 1 / this._getYScale() + ")";
        }
      }, {
        key: "getChromosomeSetTranslate",
        value: function getChromosomeSetTranslate(t) {
          return "rotate(90) translate(" + this.margin.top + ", -" + this.getChromosomeSetYTranslate(t) + ")";
        }
      }, {
        key: "getChromosomeSetYTranslate",
        value: function getChromosomeSetYTranslate(t) {
          var n,
              e = this._getAdditionalOffset(),
              r = this._config.chrMargin,
              o = this._config.chrWidth;

          if (!this._config.ploidyDesc) return "histogram" === this._config.annotationsLayout ? r / 2 + t * (r + o + 2) + 2 * e + 1 : (n = o + t * (r + o) + 2 * e, e > 0 ? n : n + 4 + 2 * t);

          if (!this._translate) {
            var i;
            this._translate = [this._ploidy.getSetSize(0) * o * 2];

            for (var a = 1; a < this._config.ploidyDesc.length; a++) {
              i = this._translate[a - 1], this._translate[a] = i + this._getChromosomeSetSize(a - 1);
            }
          }

          return this._translate[t];
        }
      }, {
        key: "getChromosomeSetLabelXPosition",
        value: function getChromosomeSetLabelXPosition() {
          return this._config.chrWidth * this._config.ploidy / -2;
        }
      }, {
        key: "getChromosomeLabelXPosition",
        value: function getChromosomeLabelXPosition() {
          return this._config.chrWidth / -2;
        }
      }]);

      return bi;
    }(pi),
        vi = ai.a.assign({}, i);

    var yi =
    /*#__PURE__*/
    function (_pi2) {
      _inherits(yi, _pi2);

      function yi(t, n) {
        var _this2;

        _classCallCheck(this, yi);

        _this2 = _possibleConstructorReturn(this, _getPrototypeOf(yi).call(this, t, n)), _this2._class = "HorizontalLayout", _this2.margin = {
          left: 20,
          top: 30
        };
        return _this2;
      }

      _createClass(yi, [{
        key: "_getLeftMargin",
        value: function _getLeftMargin() {
          var t = pi.prototype._getLeftMargin.call(this);

          return this._config.ploidy > 1 && (t *= 1.8), t;
        }
      }, {
        key: "rotateForward",
        value: function rotateForward(t, n, e, r) {
          var o, i;
          o = "rotate(90) translate(30, -37.5) ", vi.select(e.parentNode).transition().attr("transform", o).on("end", r), i = this.getChromosomeLabels(e), vi.select(this._ideo.getSvg()).append("g").attr("class", "tmp").selectAll("text").data(i).enter().append("text").attr("class", function (t, n) {
            return 0 === n && 2 === i.length ? "chrSetLabel" : null;
          }).attr("x", 26).attr("y", function (t, n) {
            return 12 * (n + 1 + i.length % 2);
          }).style("text-anchor", "middle").style("opacity", 0).text(String).transition().style("opacity", 1), this._ideo.config.orientation = "vertical";
        }
      }, {
        key: "rotateBack",
        value: function rotateBack(t, n, e, r) {
          var o = this.getChromosomeSetTranslate(t);
          vi.select(e.parentNode).transition().attr("transform", o).on("end", r), vi.selectAll(this._ideo.selector + " g.tmp").style("opacity", 0).remove(), this._ideo.config.orientation = "horizontal";
        }
      }, {
        key: "getHeight",
        value: function getHeight(t) {
          var n = this._config.chromosomes[t].length,
              e = this.getChromosomeSetYTranslate(n - 1);
          return (e += this._getChromosomeSetSize(n - 1)) + 2 * this._getAdditionalOffset();
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          return this._config.chrHeight + 1.5 * this.margin.top;
        }
      }, {
        key: "getChromosomeSetLabelAnchor",
        value: function getChromosomeSetLabelAnchor() {
          return "end";
        }
      }, {
        key: "getChromosomeBandLabelAnchor",
        value: function getChromosomeBandLabelAnchor() {
          return null;
        }
      }, {
        key: "getChromosomeBandTickY1",
        value: function getChromosomeBandTickY1() {
          return 2;
        }
      }, {
        key: "getChromosomeBandTickY2",
        value: function getChromosomeBandTickY2() {
          return 10;
        }
      }, {
        key: "getChromosomeSetLabelTranslate",
        value: function getChromosomeSetLabelTranslate() {
          return null;
        }
      }, {
        key: "getChromosomeSetTranslate",
        value: function getChromosomeSetTranslate(t) {
          return "translate(" + this._getLeftMargin() + ", " + this.getChromosomeSetYTranslate(t) + ")";
        }
      }, {
        key: "getChromosomeSetYTranslate",
        value: function getChromosomeSetYTranslate(t) {
          if (!this._config.ploidyDesc) return this._config.chrMargin * (t + 1);

          if (!this._translate) {
            this._translate = [1];

            for (var n = 1; n < this._config.ploidyDesc.length; n++) {
              this._translate[n] = this._translate[n - 1] + this._getChromosomeSetSize(n - 1);
            }
          }

          return this._translate[t];
        }
      }, {
        key: "getChromosomeSetLabelXPosition",
        value: function getChromosomeSetLabelXPosition(t) {
          return 1 === this._config.ploidy ? this.getChromosomeLabelXPosition(t) : -20;
        }
      }, {
        key: "getChromosomeSetLabelYPosition",
        value: function getChromosomeSetLabelYPosition(t) {
          var n = this._ploidy.getSetSize(t),
              e = this._config,
              r = e.chrMargin,
              o = e.chrWidth;

          return 1 === e.ploidy ? o / 2 + 3 : n * r / 2;
        }
      }, {
        key: "getChromosomeLabelXPosition",
        value: function getChromosomeLabelXPosition() {
          return -8;
        }
      }, {
        key: "getChromosomeLabelYPosition",
        value: function getChromosomeLabelYPosition() {
          return this._config.chrWidth;
        }
      }]);

      return yi;
    }(pi);

    ai.a.assign({}, i);

    var _i =
    /*#__PURE__*/
    function (_pi3) {
      _inherits(_i, _pi3);

      function _i(t, n) {
        var _this3;

        _classCallCheck(this, _i);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(_i).call(this, t, n)), _this3._class = "PairedLayout", _this3.margin = {
          left: 30
        };
        return _this3;
      }

      _createClass(_i, [{
        key: "rotateForward",
        value: function rotateForward(t, n, e, r) {
          console.warn("rotateForward not implemented for PairedLayout");
        }
      }, {
        key: "rotateBack",
        value: function rotateBack(t, n, e, r) {
          console.warn("rotateBack not implemented for PairedLayout");
        }
      }, {
        key: "getHeight",
        value: function getHeight() {
          return this._config.chrHeight + 1.5 * this.margin.left;
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          return "97%";
        }
      }, {
        key: "getChromosomeBandTickY1",
        value: function getChromosomeBandTickY1(t) {
          return t % 2 ? this._config.chrWidth : 2 * this._config.chrWidth;
        }
      }, {
        key: "getChromosomeBandTickY2",
        value: function getChromosomeBandTickY2(t) {
          var n = this._config.chrWidth;
          return t % 2 ? n - this._tickSize : 2 * n + this._tickSize;
        }
      }, {
        key: "getChromosomeBandLabelAnchor",
        value: function getChromosomeBandLabelAnchor(t) {
          return t % 2 ? null : "end";
        }
      }, {
        key: "getChromosomeBandLabelTranslate",
        value: function getChromosomeBandLabelTranslate(t, n) {
          var e = n % 2 ? 10 : -this._config.chrWidth - 10,
              r = this._ideo.round(t.px.start + t.px.width / 2) + 3;
          return {
            x: r,
            y: r,
            translate: "rotate(-90) translate(" + e + ", " + r + ")"
          };
        }
      }, {
        key: "getChromosomeLabelXPosition",
        value: function getChromosomeLabelXPosition() {
          return -this._tickSize;
        }
      }, {
        key: "getChromosomeSetLabelXPosition",
        value: function getChromosomeSetLabelXPosition() {
          return this._config.chrWidth / -2;
        }
      }, {
        key: "getChromosomeSetLabelTranslate",
        value: function getChromosomeSetLabelTranslate() {
          return "rotate(-90)";
        }
      }, {
        key: "getChromosomeSetTranslate",
        value: function getChromosomeSetTranslate(t) {
          var n = this.getChromosomeSetYTranslate(t);
          return "rotate(90) translate(" + this.margin.left + ", -" + n + ")";
        }
      }, {
        key: "getChromosomeSetYTranslate",
        value: function getChromosomeSetYTranslate(t) {
          return 200 * (t + 1);
        }
      }]);

      return _i;
    }(pi);

    ai.a.assign({}, i);

    var wi =
    /*#__PURE__*/
    function (_pi4) {
      _inherits(wi, _pi4);

      function wi(t, n) {
        var _this4;

        _classCallCheck(this, wi);

        _this4 = _possibleConstructorReturn(this, _getPrototypeOf(wi).call(this, t, n)), _this4._class = "SmallLayout", _this4.margin = {
          left: 36.5,
          top: 10
        };
        return _this4;
      }

      _createClass(wi, [{
        key: "getHeight",
        value: function getHeight() {
          var t = this._config.chrHeight;
          return this._config.rows * (t + 1.5 * this.margin.top);
        }
      }, {
        key: "getWidth",
        value: function getWidth() {
          return "97%";
        }
      }, {
        key: "getChromosomeBandLabelTranslate",
        value: function getChromosomeBandLabelTranslate() {}
      }, {
        key: "getChromosomeSetLabelTranslate",
        value: function getChromosomeSetLabelTranslate() {
          return "rotate(-90)";
        }
      }, {
        key: "getChromosomeSetTranslate",
        value: function getChromosomeSetTranslate(t) {
          var n = [];

          this._ideo.getTaxids(function (t) {
            n = t;
          });

          var e,
              r,
              o = this._ideo.config.chromosomes[n[0]].length / this._config.rows;
          return t > o - 1 ? (e = this.margin.left + 1.4 * this._config.chrHeight, r = this.getChromosomeSetYTranslate(t - o)) : (e = this.margin.left, r = this.getChromosomeSetYTranslate(t)), "rotate(90) translate(" + e + ", -" + r + ")";
        }
      }, {
        key: "getChromosomeSetYTranslate",
        value: function getChromosomeSetYTranslate(t) {
          var n = this._getAdditionalOffset();

          return this.margin.left * t + this._config.chrWidth + 2 * n + n * t;
        }
      }, {
        key: "getChromosomeSetLabelXPosition",
        value: function getChromosomeSetLabelXPosition(t) {
          return (this._ploidy.getSetSize(t) * this._config.chrWidth + 20) / -2 + (this._config.ploidy > 1 ? 0 : this._config.chrWidth);
        }
      }, {
        key: "getChromosomeLabelXPosition",
        value: function getChromosomeLabelXPosition() {
          return this._config.chrWidth / -2;
        }
      }]);

      return wi;
    }(pi);

    var xi = ai.a.assign({}, i);

    function Ai(t, n, e) {
      this.config.annotationsPath && this.fetchAnnots(this.config.annotationsPath), function (t) {
        if ("ploidyDesc" in t.config && "string" == typeof t.config.ploidyDesc) {
          for (var n = [], e = 0; e < t.numChromosomes; e++) {
            n.push(t.config.ploidyDesc);
          }

          t.config.ploidyDesc = n;
        }

        t._ploidy = new fi(t.config);
      }(this), this._layout = function (t) {
        var n = t.config;
        return "perspective" in n && "comparative" === n.perspective ? new _i(n, t) : "rows" in n && n.rows > 1 ? new wi(n, t) : "vertical" === n.orientation ? new bi(n, t) : "horizontal" === n.orientation ? new yi(n, t) : new bi(n, t);
      }(this), function (t, n) {
        xi.selectAll(n.config.container + " #_ideogramOuterWrap").remove(), xi.select(n.config.container).append("div").attr("id", "_ideogramOuterWrap").append("div").attr("id", "_ideogramTrackLabelContainer").style("position", "absolute"), xi.select(n.config.container + " #_ideogramOuterWrap").append("div").attr("id", "_ideogramMiddleWrap").style("position", "relative").style("overflow-x", "auto").append("div").attr("id", "_ideogramInnerWrap").append("svg").attr("id", "_ideogram").attr("class", function (t) {
          var n = "";
          return t.config.showChromosomeLabels && ("horizontal" === t.config.orientation ? n += "labeledLeft " : n += "labeled "), t.config.annotationsLayout && "overlay" === t.config.annotationsLayout && (n += "faint"), n;
        }(n)).attr("width", n._layout.getWidth(t)).attr("height", n._layout.getHeight(t)).html(n.getBandColorGradients());
      }(n, this), this.isOnlyIdeogram = 1 === document.querySelectorAll("#_ideogram").length, function (t) {
        xi.select(t.config.container + " #_ideogramOuterWrap").append("div").attr("class", "_ideogramTooltip").attr("id", "_ideogramTooltip").style("opacity", 0).style("position", "fixed").style("text-align", "center").style("padding", "4px").style("font", "12px sans-serif").style("background", "white").style("border", "1px solid black").style("border-radius", "5px").style("z-index", "100");
      }(this), this.finishInit(t, e);
    }

    var Ci = e(5),
        Ti = ai.a.assign({}, a, i);

    function Mi(t, n, e) {
      var r = e.config.ploidy;
      return "sex" in e.config && (2 === r && e.sexChromosomes.index + 2 === n || "female" === e.config.sex && "Y" === t.name);
    }

    function ki(t, n, e, r, o) {
      var i, a, s, c;

      for (i = 0; i < n.length; i++) {
        s = n[i], "bandsArray" in o && (a = t[r]), c = o.getChromosomeModel(a, s, e, r), r += 1, "string" != typeof s && (s = s.name), o.chromosomes[e][s] = c, o.chromosomesArray.push(c), Mi(c, r, o) || o.drawChromosome(c);
      }

      return r;
    }

    function Si(t, n) {
      "undefined" != typeof chrBands && t.length >= chrBands.length / 2 && (n.coordinateSystem = "bp");
    }

    function Li(t) {
      var n,
          e,
          r,
          o = this.config.taxids,
          i = 0;

      for (t.length > 0 && (this.bandsArray = {}), e = 0; e < o.length; e++) {
        n = o[e], Si(r = this.config.chromosomes[n], this), this.chromosomes[n] = {}, this.setSexChromosomes(r), "bandsArray" in this && (this.bandsArray[n] = t), i = ki(t, r, n, i, this), this.config.showBandLabels && this.drawBandLabels(this.chromosomes), this.handleRotateOnClick(), this._gotChrModels = !0;
      }
    }

    function Di() {
      var t = this;
      "rotatable" in t.config && !1 === t.config.rotatable ? Ti.selectAll(t.selector + " .chromosome").style("cursor", "default") : Ti.selectAll(t.selector + " .chromosome").on("click", function () {
        t.rotateAndToggleDisplay(this);
      });
    }

    function Bi() {
      call(this.onLoadCallback);
    }

    function Fi(t, n, e) {
      var r = e.organisms[t],
          o = [Ideogram.slugify(r.scientificName)],
          i = r.assemblies,
          a = e.config.resolution;
      return n !== i.default && o.push(n), "9606" === t && (n in i === "false" && ai.a.values(i).includes(config.assembly) || "" !== a && 850 !== a) && o.push(a), o = o.join("-") + ".js";
    }

    function Ni(t, n, e) {
      var r,
          o,
          i,
          a = e.config;
      return r = e.organisms[t], a.assembly || (e.config.assembly = "default"), o = r.assemblies, i = Fi(t, e.assemblyIsAccession() ? a.assembly : o[a.assembly], e), "9606" !== t && "10090" !== t || (n[t] = i), n;
    }

    function Oi(t, n, e, r) {
      var o;
      Object(ai.f)(r) && "undefined" == typeof chrBands && t in n ? Object(Ci.a)(n, t, e, r) : ("undefined" != typeof chrBands && (r.bandData[t] = chrBands), o = r.processBandData(), r.writeContainer(o, t, e));
    }

    function Pi() {
      var t = new Date().getTime(),
          n = this;
      (function (t) {
        return new Promise(function (n) {
          "number" == typeof t.config.organism ? t.getOrganismFromEutils(function () {
            t.getTaxids(n);
          }) : t.getTaxids(n);
        });
      })(n).then(function (e) {
        !function (t, n, e) {
          var r, o, i;

          for (i = t[0], e.config.taxid = i, e.config.taxids = t, r = {
            9606: "",
            10090: ""
          }, o = 0; o < t.length; o++) {
            Oi(i = String(t[o]), r = Ni(i, r, e), n, e);
          }
        }(e, t, n);
      });
    }

    var Ei =
    /*#__PURE__*/
    function () {
      function Ei(t, n) {
        _classCallCheck(this, Ei);

        this.rawAnnots = this.parseBed(t, n);
      }

      _createClass(Ei, [{
        key: "parseGenomicCoordinates",
        value: function parseGenomicCoordinates(t, n) {
          var e, r, o, i;
          return e = t[0], r = parseInt(t[1], 10), i = (o = parseInt(t[2], 10)) - r, n && (e = e.slice(3)), [e, r, o, i];
        }
      }, {
        key: "parseAnnotFromTsvLine",
        value: function parseAnnotFromTsvLine(t, n, e) {
          var _this$parseGenomicCoo, _this$parseGenomicCoo2;

          var r,
              o,
              i,
              a,
              s,
              c,
              u,
              l,
              f = t.split(/\s/g);
          return (_this$parseGenomicCoo = this.parseGenomicCoordinates(f, e), _this$parseGenomicCoo2 = _slicedToArray(_this$parseGenomicCoo, 4), i = _this$parseGenomicCoo2[0], a = _this$parseGenomicCoo2[1], s = _this$parseGenomicCoo2[2], length = _this$parseGenomicCoo2[3], _this$parseGenomicCoo), -1 === (o = n.indexOf(i)) ? [null, null] : (r = ["", a, length, 0], f.length >= 4 && (l = f[3], r[0] = l), f.length >= 8 && (c = f[8].split(","), u = Ei.rgbToHex(c[0], c[1], c[2]), r.push(u)), [o, r]);
        }
      }, {
        key: "parseRawAnnots",
        value: function parseRawAnnots(t, n, e, r) {
          var o, i, a, s, c, u;

          for (u = !0, !1 === isNaN(parseInt(e[n], 10)) && (u = !1), o = n; o < e.length; o++) {
            var _this$parseAnnotFromT, _this$parseAnnotFromT2;

            i = e[o], (_this$parseAnnotFromT = this.parseAnnotFromTsvLine(i, r, u), _this$parseAnnotFromT2 = _slicedToArray(_this$parseAnnotFromT, 2), a = _this$parseAnnotFromT2[0], s = _this$parseAnnotFromT2[1], _this$parseAnnotFromT), null !== a && t[a].annots.push(s);
          }

          return c = ["name", "start", "length", "trackIndex"], e[n].length >= 8 && c.push("color"), {
            keys: c,
            annots: t
          };
        }
      }, {
        key: "parseBed",
        value: function parseBed(t, n) {
          var e,
              r,
              o,
              i,
              a = [],
              s = t.split(/\r\n|\n/);

          for (r = Object.keys(n.chromosomes[n.config.taxid]), e = 0; e < r.length; e++) {
            o = r[e], a.push({
              chr: o,
              annots: []
            });
          }

          return i = 0, ("chr" === s[0].slice(0, 3) || isNaN(parseInt(s[0], 10))) && (i = 1), this.parseRawAnnots(a, i, s, r);
        }
      }], [{
        key: "componentToHex",
        value: function componentToHex(t) {
          var n = parseInt(t, 10).toString(16);
          return 1 === n.length ? "0" + n : n;
        }
      }, {
        key: "rgbToHex",
        value: function rgbToHex(t, n, e) {
          return "#" + Ei.componentToHex(t) + Ei.componentToHex(n) + Ei.componentToHex(e);
        }
      }]);

      return Ei;
    }();

    var Ii = Object.assign({}, i),
        ji = ["name", "start", "length", "trackIndex", "trackIndexOriginal", "color"];

    function Hi(t) {
      !1 !== t.config.showTrackLabel && (t.hideTrackLabelTimeout = window.setTimeout(function () {
        Ii.select(t.config.container + " #_ideogramTrackLabel").transition().duration(500).style("opacity", 0);
      }, 250));
    }

    function Ui(t, n) {
      var _ref, _ref2;

      var e, r, o;
      clearTimeout(n.hideTrackLabelTimeout), e = function (t) {
        var n, e, r;
        if (t.rawAnnots.metadata) n = t.rawAnnots.metadata.trackLabels;else if (t.config.heatmaps) for (n = [], e = t.config.heatmaps, r = 0; r < e.length; r++) {
          n.push(e[r].key);
        } else n = t.rawAnnots.keys.slice(0).filter(function (t) {
          return !ji.includes(t);
        });
        return t.displayedTrackIndexes && (n = n.filter(function (n, e) {
          return t.displayedTrackIndexes.includes(e + 1);
        })), n = n.join("<br>");
      }(n), Ii.select(n.config.container + " #_ideogramTrackLabel").interrupt().style("top", "").style("left", "").style("transform", null).style("transform", "rotate(-90deg)").html(e), (_ref = function (t, n, e) {
        var r, o, i, a, s;
        return r = n.id.split("-").slice(0, -1).join("-") + "-0", o = Ii.select(e.config.container + " #" + r).nodes()[0].getBoundingClientRect(), i = Ii.select(e.config.container + " #_ideogramTrackLabel").nodes()[0].getBoundingClientRect(), a = Ii.select(e.config.container).nodes()[0].getBoundingClientRect(), s = Math.round(o.left + i.width) - o.width - 1, [s -= a.left - 7, -(t.split("<br>").length - 2) * o.width + 2];
      }(e, t, n), _ref2 = _slicedToArray(_ref, 2), r = _ref2[0], o = _ref2[1], _ref), function (t, n, e) {
        Ii.select(e.config.container + " #_ideogramTrackLabel").style("opacity", 1).style("left", n + "px").style("top", t + "px").style("width", "max-content").style("transform-origin", "bottom left").style("text-align", "left").on("mouseover", function () {
          clearTimeout(e.hideTrackLabelTimeout);
        }).on("mouseout", function () {
          Hi(e);
        });
      }(o, r, n);
    }

    var Wi = Object.assign({}, i);

    function Yi(t, n, e, r) {
      var o,
          i,
          a,
          s,
          c,
          u = [],
          l = r.config.numAnnotTracks;

      for (o = 0; o < l; o++) {
        a = r.config.annotationHeight, c = t.id + "-canvas-" + o, i = n - a * (l - o) - 7, s = Wi.select(r.config.container + " #_ideogramInnerWrap").append("canvas").attr("id", c).attr("width", a).attr("height", e).style("position", "absolute").style("left", i + "px").nodes()[0].getContext("2d"), u.push(s);
      }

      return u;
    }

    function Ri(t, n, e, r) {
      var o, i, a, s;

      for (o = 0; o < t.length; o++) {
        (a = n[(i = t[o]).trackIndex]).fillStyle = i.color, s = i.trackIndex - 1, a.fillRect(s, i.startPx + r, e, .5);
      }
    }

    function zi(t) {
      var n,
          e,
          r,
          o,
          i = this,
          a = i._layout.margin.top,
          s = i.config.chrHeight + a;

      for (Wi.selectAll(i.config.container + " canvas").remove(), function (t) {
        Ii.select(t.config.container + " #_ideogramTrackLabelContainer").append("div").attr("id", "_ideogramTrackLabel").style("opacity", 0).style("position", "absolute").style("text-align", "center").style("padding", "1px").style("font", "11px sans-serif").style("background", "white").style("line-height", "10px").style("z-index", "9000");
      }(i), r = 0; r < t.length; r++) {
        n = t[r].annots, o = i.chromosomesArray[r], e = i.config.chrWidth, Ri(n, Yi(o, i._layout.getChromosomeSetYTranslate(r), s, i), e, a);
      }

      Wi.selectAll(i.config.container + " canvas").on("mouseover", function () {
        Ui(this, i);
      }).on("mouseout", function () {
        Hi(i);
      }), i.onDrawAnnotsCallback && i.onDrawAnnotsCallback();
    }

    function qi(t, n, e, r, o) {
      return t === n && "+" === o && e > r || e === o || 0 !== t && t !== n && e <= o && e > r || 0 === t && e <= o;
    }

    function Xi(t, n) {
      var e, r, o, i, a, s, c, u;

      for (e = 0; e < t.length; e++) {
        r = t.length - 1, i = (o = t[e])[0], a = parseFloat(i), !1 === isNaN(a) && (i = a), 0 !== e && (c = parseFloat(t[e - 1][0])), s = o[1], qi(e, r, n, c, i) && (u = s);
      }

      return u;
    }

    function $i(t, n, e) {
      var r,
          o,
          i,
          a,
          s,
          c,
          u,
          l = [];

      for (r = 0; r < n.length; r++) {
        for (i = n[r], o = 0; o < t.length; o++) {
          a = i.slice(0, 3), s = i[t[o]], c = Xi(e.config.heatmaps[o].thresholds, s), u = o, a.push(u, c, s), l.push(a);
        }
      }

      return l;
    }

    function Vi(t) {
      var n,
          e,
          r,
          o,
          i = new Date().getTime(),
          a = t.keys,
          s = t.annots;

      for (r = [], o = 0; o < this.config.heatmaps.length; o++) {
        e = this.config.heatmaps[o].key, r.push(a.indexOf(e));
      }

      n = function (t, n, e) {
        var r,
            o,
            i,
            a,
            s = [];

        for (a = 0; a < n.length; a++) {
          o = (r = n[a]).chr, i = $i(t, r.annots, e), s.push({
            chr: o,
            annots: i
          });
        }

        return s;
      }(r, s, this), a.splice(3, 0, "trackIndex"), a.splice(4, 0, "color"), this.rawAnnots.keys = a, this.rawAnnots.annots = n, function (t, n) {
        var e = new Date().getTime();
        n.config.debug && console.log("Time in deserializeAnnotsForHeatmap: " + (e - t) + " ms");
      }(i, this);
    }

    var Gi = Object.assign({}, i);

    function Qi() {
      call(this.onLoadAnnotsCallback);
    }

    function Zi() {
      call(this.onDrawAnnotsCallback);
    }

    function Ji() {
      !1 !== this.config.showAnnotTooltip && (this.hideAnnotTooltipTimeout = window.setTimeout(function () {
        Gi.select("._ideogramTooltip").transition().duration(500).style("opacity", 0).style("pointer-events", "none");
      }, 250));
    }

    function Ki(t) {
      call(this.onWillShowAnnotTooltipCallback, t);
    }

    function ta(t, n) {
      var _ref3, _ref4;

      var e, r, o, i;
      !1 !== this.config.showAnnotTooltip && (clearTimeout(this.hideAnnotTooltipTimeout), this.onWillShowAnnotTooltipCallback && (t = this.onWillShowAnnotTooltipCallback(t)), (i = Gi.select("._ideogramTooltip")).interrupt(), e = n.getScreenCTM().translate(+n.getAttribute("cx"), +n.getAttribute("cy")), (_ref3 = function (t) {
        var n, e, r;
        return r = "chr" + t.chr + ":" + t.start.toLocaleString(), t.length > 0 && (r += "-" + t.stop.toLocaleString()), n = r, e = 24, t.name && (n = (t.displayName ? t.displayName : t.name) + "<br/>" + n, e += 8), [n, e];
      }(t), _ref4 = _slicedToArray(_ref3, 2), r = _ref4[0], o = _ref4[1], _ref3), function (t, n, e, r, o) {
        t.html(n).style("opacity", 1).style("left", e.e + "px").style("top", e.f - r + "px").style("pointer-events", null).on("mouseover", function () {
          clearTimeout(o.hideAnnotTooltipTimeout);
        }).on("mouseout", function () {
          o.startHideAnnotTooltipTimeout();
        });
      }(i, r, e, o, this));
    }

    function na(t) {
      var n,
          e,
          r = !1,
          o = new Date().getTime();
      return n = this.chromosomes[this.config.taxid], function (t) {
        "histogramScaling" in t.config == 0 && (t.config.histogramScaling = "absolute");
      }(this), void 0 === this.maxAnnotsPerBar && (this.maxAnnotsPerBar = {}, r = !0), function (t, n, e) {
        var r, o, i, a, s, c, u;

        if (n || "relative" === e.config.histogramScaling) {
          for (r = 0, o = 0; o < t.length; o++) {
            for (i = 0, a = t[o].annots, s = t[o].chr, c = 0; c < a.length; c++) {
              (u = a[c].count) > i && (i = u), u > r && (r = u);
            }

            e.maxAnnotsPerBar[s] = i;
          }

          e.maxAnnotsPerBarAllChrs = r;
        }
      }(e = function (t, n, e, r) {
        var o,
            i,
            a,
            s,
            c,
            u,
            l,
            f,
            h,
            d,
            g = r.config.barWidth;

        for (o in t) {
          for (i = t[o].annots, s = n[(a = e[t[o].chr]).chrIndex].annots, c = 0; c < i.length; c++) {
            for (l = (u = i[c]).px - r.bump, f = 0; f < s.length; f++) {
              if (d = (h = s[f].px) + g, f === s.length - 1 && (d += g), l >= h && l < d) {
                n[a.chrIndex].annots[f].count += 1, n[a.chrIndex].annots[f].annots.push(u);
                break;
              }
            }
          }
        }

        return n;
      }(t, e = function (t, n) {
        var e,
            r,
            o,
            i,
            a,
            s,
            c,
            u = n.config.barWidth,
            l = [];

        for (e in t) {
          for (o = (r = t[e]).bands[r.bands.length - 1], i = Math.round(o.px.stop / u), a = {
            chr: e,
            annots: []
          }, s = 0; s < i; s++) {
            c = s * u - n.bump, a.annots.push({
              bp: n.convertPxToBp(r, c + n.bump),
              px: c,
              count: 0,
              chrIndex: r.chrIndex,
              chrName: e,
              color: n.config.annotationsColor,
              annots: []
            });
          }

          l.push(a);
        }

        return l;
      }(n, this), n, this), r, this), e = function (t, n, e) {
        var r,
            o,
            i,
            a,
            s,
            c,
            u = e._layout._isRotated;

        for (r = 0; r < n.length; r++) {
          for (t = n[r].annots, o = n[r].chr, i = 0; i < t.length; i++) {
            a = t[i].count, s = "relative" === e.config.histogramScaling ? a / e.maxAnnotsPerBar[o] : a / e.maxAnnotsPerBarAllChrs, c = !1 === u ? s * e.config.chrMargin : s * e.config.chrHeightOriginal * 3, n[r].annots[i].height = c;
          }
        }

        return n;
      }(t, e, this), function (t, n) {
        var e = new Date().getTime();
        n.config.debug && console.log("Time spent in getHistogramBars: " + (e - t) + " ms");
      }(o, this), this.bars = e, e;
    }

    var ea = Object.assign({}, i),
        ra = 19,
        oa = "#_ideogramLegend {font: 12px Arial; line-height: 19px;} #_ideogramLegend svg {float: left;} #_ideogramLegend ul {position: relative; left: -14px; list-style: none; float: left; padding-left: 10px; margin-top: 0px;} #_ideogramLegend ul span {position: relative; left: -15px;} ";

    function ia(t) {
      var n,
          e,
          r,
          o = 'fill="' + t.color + '" style="stroke: #AAA;"',
          i = t.shape;
      return 'd="m7,3 l -5 9 l 9 0 z"', e = 'd="m2,9a 4.5,4.5 0 1,0 9,0a 4.5,4.5 0 1,0 -9,0"', r = 'height="10" width="10"  y="3"', "shape" in t && ["circle", "triangle"].includes(i) ? "circle" === i ? n = "<path " + e + " " + o + "></path>" : "triangle" === i && (n = '<path d="m7,3 l -5 9 l 9 0 z" ' + o + "></path>") : n = "<rect " + r + " " + o + "/>", n;
    }

    function aa(t, n, e) {
      var r, o, i;

      for (r = 0; r < e.rows.length; r++) {
        t += "<li>" + (i = e.rows[r]).name + "</li>", o = ra * r, "name" in e && (o += ra), n += '<g transform="translate(0, ' + o + ')">' + ia(i) + "</g>";
      }

      return [t, n];
    }

    var sa = Object.assign({}, i);

    function ca(t) {
      var n,
          e,
          r = [],
          o = this.chromosomes[this.config.taxid];
      if ("annots" in t[0]) return this.drawProcessedAnnots(t);

      for (e in o) {
        r.push({
          chr: e,
          annots: []
        });
      }

      r = function (t, n) {
        var e, r, o, i;

        for (e = 0; e < t.length; e++) {
          for (o = t[e], r = 0; r < n.length; r++) {
            if (o.chr === n[r].chr) {
              i = [o.name, o.start, o.stop - o.start], "color" in o && i.push(o.color), "shape" in o && i.push(o.shape), n[r].annots.push(i);
              break;
            }
          }
        }

        return n;
      }(t, r), n = function (t) {
        var n = ["name", "start", "length"];
        return "color" in t[0] && n.push("color"), "shape" in t[0] && n.push("shape"), n;
      }(t), this.rawAnnots = {
        keys: n,
        annots: r
      }, this.annots = this.processAnnotData(this.rawAnnots), this.drawProcessedAnnots(this.annots);
    }

    function ua(t, n, e) {
      var r;
      !function (t, n) {
        var e, r;

        if ("heatmap" !== t && "histogram" !== t) {
          for (r = 0, e = 0; e < n.length; e++) {
            r += n[e].annots.length;
          }

          r > 2e3 && console.warn('Rendering more than 2000 annotations in Ideogram?\nTry setting "annotationsLayout" to "heatmap" or "histogram" in your Ideogram configuration object for better layout and performance.');
        }
      }(t, n), "histogram" === t && (n = e.getHistogramBars(n)), r = function (t, n) {
        return sa.selectAll(n.selector + " .chromosome").data(t).selectAll("path.annot").data(function (t) {
          return t.annots;
        }).enter();
      }(e.fillAnnots(n), e), "tracks" === t ? function (t, n) {
        var e,
            r = n.config.annotationHeight;
        e = function (t) {
          var n;
          return {
            triangle: "m0,0 l -" + t + " " + 2 * t + " l " + 2 * t + " 0 z",
            circle: "m -" + (n = t) + ", " + n + "a " + n + "," + n + " 0 1,0 " + 2 * n + ",0a " + n + "," + n + " 0 1,0 -" + 2 * n + ",0",
            rectangle: "m0,0 l 0 " + 2 * t + "l " + t + " 0l 0 -" + 2 * t + "z"
          };
        }(r), t.append("g").attr("id", function (t) {
          return t.id;
        }).attr("class", "annot").attr("transform", function (t) {
          var e = n.config.chrWidth + t.trackIndex * r * 2;
          return "translate(" + t.px + "," + e + ")";
        }).append("path").attr("d", function (t) {
          return function (t, n) {
            return t.shape && "triangle" !== t.shape ? "circle" === t.shape ? n.circle : "rectangle" === t.shape ? n.rectangle : t.shape : n.triangle;
          }(t, e);
        }).attr("fill", function (t) {
          return t.color;
        }).on("mouseover", function (t) {
          n.showAnnotTooltip(t, this);
        }).on("mouseout", function () {
          n.startHideAnnotTooltipTimeout();
        });
      }(r, e) : "overlay" === t ? function (t, n) {
        t.append("polygon").attr("id", function (t) {
          return t.id;
        }).attr("class", "annot").attr("points", function (t) {
          var e,
              r,
              o = n.config.chrWidth;
          return t.stopPx - t.startPx > 1 ? (e = t.startPx, r = t.stopPx) : (e = t.px - .5, r = t.px + .5), e + "," + o + " " + r + "," + o + " " + r + ",0 " + e + ",0";
        }).attr("fill", function (t) {
          return t.color;
        }).on("mouseover", function (t) {
          n.showAnnotTooltip(t, this);
        }).on("mouseout", function () {
          n.startHideAnnotTooltipTimeout();
        });
      }(r, e) : "histogram" === t && function (t, n) {
        var e,
            r,
            o = {},
            i = n.config.chrWidth;

        for (r in e = n.chromosomes[n.config.taxid]) {
          o[r] = e[r];
        }

        t.append("polygon").attr("class", "annot").attr("points", function (t) {
          return function (t, n, e, r) {
            var o, i, a, s;
            o = t.px + r.bump, i = t.px + r.config.barWidth + r.bump, a = n, s = n + t.height;
            var c = e[t.chr];
            return i > c && (i = c), o + "," + a + " " + i + "," + a + " " + i + "," + s + " " + o + "," + s;
          }(t, i, o, n);
        }).attr("fill", function (t) {
          return t.color;
        });
      }(r, e);
    }

    function la(t) {
      var n;
      sa.selectAll(this.selector + " .annot").remove(), n = "tracks", this.config.annotationsLayout && (n = this.config.annotationsLayout), "legend" in this.config && function (t) {
        var n, e, r, o, i, a;

        for (ea.select(t.config.container + " #_ideogramLegend").remove(), e = t.config.legend, a = "", n = 0; n < e.length; n++) {
          var _aa, _aa2;

          "name" in (i = e[n]) && (o = "<span>" + i.name + "</span>"), r = '<svg width="' + ra + '">', (_aa = aa(o, r, i), _aa2 = _slicedToArray(_aa, 2), o = _aa2[0], r = _aa2[1], _aa), a += (r += "</svg>") + "<ul>" + o + "</ul>";
        }

        var s = ea.select(t.config.container + " #_ideogramOuterWrap");
        s.append("style").html(oa), s.append("div").attr("id", "_ideogramLegend").html(a);
      }(this), "heatmap" !== n ? (ua(n, t, this), this.onDrawAnnotsCallback && this.onDrawAnnotsCallback()) : this.drawHeatmaps(t);
    }

    var fa = Object.assign({}, i);

    function ha(t, n, e) {
      return t.append("g").attr("class", "syntenicRegion").attr("id", n).on("click", function () {
        var t = this,
            n = fa.selectAll(e.selector + " .syntenicRegion").filter(function () {
          return this !== t;
        });
        n.classed("hidden", !n.classed("hidden"));
      }).on("mouseover", function () {
        var t = this;
        fa.selectAll(e.selector + " .syntenicRegion").filter(function () {
          return this !== t;
        }).classed("ghost", !0);
      }).on("mouseout", function () {
        fa.selectAll(e.selector + " .syntenicRegion").classed("ghost", !1);
      });
    }

    function da(t, n, e) {
      var r, o;
      return r = t.r1, o = t.r2, r.startPx = e.convertBpToPx(r.chr, r.start) + n, r.stopPx = e.convertBpToPx(r.chr, r.stop) + n, o.startPx = e.convertBpToPx(o.chr, o.start) + n, o.stopPx = e.convertBpToPx(o.chr, o.stop) + n, [r, o];
    }

    function ga(t, n, e, r, o, i) {
      var a, s;
      a = "color" in i ? i.color : "#CFC", s = "opacity" in i ? i.opacity : 1, t.append("polygon").attr("points", n + ", " + r.startPx + " " + n + ", " + r.stopPx + " " + e + ", " + o.stopPx + " " + e + ", " + o.startPx).attr("style", "fill: " + a + "; fill-opacity: " + s);
    }

    function pa(t, n, e, r, o) {
      t.append("line").attr("class", "syntenyBorder").attr("x1", n).attr("x2", e).attr("y1", r.startPx).attr("y2", o.startPx), t.append("line").attr("class", "syntenyBorder").attr("x1", n).attr("x2", e).attr("y1", r.stopPx).attr("y2", o.stopPx);
    }

    function ma(t) {
      var n = new Date().getTime();
      (function (t, n, e, r) {
        var o, i, a, s, c, u, l, f;

        for (o = 0; o < t.length; o++) {
          var _da, _da2;

          i = t[o], (_da = da(i, e, r), _da2 = _slicedToArray(_da, 2), a = _da2[0], s = _da2[1], _da), c = ha(n, a.chr.id + "_" + a.start + "_" + a.stop + "___" + s.chr.id + "_" + s.start + "_" + s.stop, r), u = r.config.chrWidth, ga(c, l = r._layout.getChromosomeSetYTranslate(0), f = r._layout.getChromosomeSetYTranslate(1) - u, a, s, i), pa(c, l, f, a, s);
        }
      })(t, fa.select(this.selector).insert("g", ":first-child").attr("class", "synteny"), this._layout.margin.left, this), function (t, n) {
        var e = new Date().getTime();
        n.config.debug && console.log("Time in drawSyntenicRegions: " + (e - t) + " ms");
      }(n, this);
    }

    var ba = ai.a.assign({}, i);

    function va() {
      this.config.numAnnotTracks = this.config.annotationsNumTracks, ba.selectAll(this.selector + " .annot").remove(), this.drawAnnots(this.processAnnotData(this.rawAnnots));
    }

    function ya(t) {
      var n,
          e,
          r,
          o = this.rawAnnots.annots;
      return this.config.numAnnotTracks = t.length, n = function (t, n) {
        var e, r, o, i, a, s, c;

        for (r = [], i = 0; i < t.length; i++) {
          for (o = t[i], a = [], s = 0; s < o.annots.length; s++) {
            c = (e = o.annots[s].slice())[3] + 1, n.includes(c) && (e[3] = n.indexOf(c), a.push(e));
          }

          r.push({
            chr: o.chr,
            annots: a
          });
        }

        return r;
      }(o, t), r = {
        keys: this.rawAnnots.keys,
        annots: n
      }, e = this.processAnnotData(r), ba.selectAll(this.selector + " .annot").remove(), ideogram.displayedTrackIndexes = t, this.drawAnnots(e), e;
    }

    function _a(t) {
      var n, e;
      return (n = t.keys).length < 4 || "trackIndex" !== n[3] || "trackIndexOriginal" === n[4] ? t : (e = function (t, n) {
        var e,
            r,
            o,
            i,
            a,
            s,
            c,
            u = [];

        for (c = 1, e = 0; e < t.length; e++) {
          for (o = t[e], a = [], r = 0; r < o.annots.length; r++) {
            (s = (i = o.annots[r].slice())[3]) + 1 > c && (c = s + 1), i.splice(4, 0, s), a.push(i);
          }

          u.push({
            chr: o.chr,
            annots: a
          });
        }

        return n.numAvailTracks = c, u;
      }(t.annots, this), n.splice(4, 0, "trackIndexOriginal"), t = {
        keys: n,
        annots: e
      }, this.rawAnnots.metadata && (t.metadata = this.rawAnnots.metadata), t);
    }

    var wa = [["F00"], ["F00", "88F"], ["F00", "CCC", "88F"], ["F00", "FA0", "0AF", "88F"], ["F00", "FA0", "CCC", "0AF", "88F"], ["F00", "FA0", "875", "578", "0AF", "88F"], ["F00", "FA0", "875", "CCC", "578", "0AF", "88F"], ["F00", "FA0", "7A0", "875", "0A7", "578", "0AF", "88F"], ["F00", "FA0", "7A0", "875", "CCC", "0A7", "578", "0AF", "88F"], ["F00", "FA0", "7A0", "875", "552", "255", "0A7", "578", "0AF", "88F"]];

    function xa(t, n, e, r, o, i, a) {
      var _ref5, _ref6;

      return a.config.annotationTracks ? o = function (t, n, e, r, o) {
        var i;
        return n.trackIndex = e[3], (i = o.config.annotationTracks[n.trackIndex]).color && (n.color = i.color), i.shape && (n.shape = i.shape), t[r].annots.push(n), t;
      }(o, t, e, i, a) : "trackIndex" === n[3] && 1 !== a.numAvailTracks ? (_ref5 = function (t, n, e, r, o, i) {
        var a = wa[i.numAvailTracks - 1];
        return t.trackIndex = n[3], t.trackIndexOriginal = n[4], t.color = "#" + a[t.trackIndexOriginal], t.trackIndex > i.config.numTracks - 1 ? (t.trackIndex in e ? e[t.trackIndex].push(t) : e[t.trackIndex] = [t], [r, e]) : (r[o].annots.push(t), [r, e]);
      }(t, e, r, o, i, a), _ref6 = _slicedToArray(_ref5, 2), o = _ref6[0], r = _ref6[1], _ref5) : o = function (t, n, e, r) {
        return n.trackIndex = 0, n.color || (n.color = r.config.annotationsColor), n.shape || (n.shape = "triangle"), t[e].annots.push(n), t;
      }(o, t, i, a), [o, r];
    }

    function Aa(t, n, e, r, o, i, a) {
      var s, c, u, l;

      for (s = 0; s < e.annots.length; s++) {
        var _xa, _xa2;

        for (l = e.annots[s], u = {}, c = 0; c < i.length; c++) {
          u[i[c]] = l[c];
        }

        u.stop = u.start + u.length, u.chr = e.chr, u.chrIndex = o, u.startPx = a.convertBpToPx(r, u.start), u.stopPx = a.convertBpToPx(r, u.stop), u.px = Math.round((u.startPx + u.stopPx) / 2), (_xa = xa(u, i, l, n, t, o, a), _xa2 = _slicedToArray(_xa, 2), t = _xa2[0], n = _xa2[1], _xa);
      }

      return [t, n];
    }

    function Ca(t) {
      console.warn('Chromosome "' + t.chr + '" undefined in ideogram; ' + t.annots.length + " annotations not shown");
    }

    function Ta(t) {
      var _ref7, _ref8;

      var n, e, r;
      return n = t.keys, t = t.annots, (_ref7 = function (t, n, e) {
        var r,
            o,
            i,
            a,
            s = [],
            c = {};

        for (r = -1, o = 0; o < t.length; o++) {
          var _Aa, _Aa2;

          i = t[o], void 0 !== (a = e.chromosomes[e.config.taxid][i.chr]) ? (r++, s.push({
            chr: i.chr,
            annots: []
          }), (_Aa = Aa(s, c, i, a, r, n, e), _Aa2 = _slicedToArray(_Aa, 2), s = _Aa2[0], c = _Aa2[1], _Aa)) : Ca(i);
        }

        return [s, c];
      }(t, n, this), _ref8 = _slicedToArray(_ref7, 2), e = _ref8[0], r = _ref8[1], _ref7), e = function (t, n) {
        var e, r, o, i, a, s;

        for (e = t, t = [], s = n.chromosomesArray, r = 0; r < s.length; r++) {
          for (a = s[r].name, o = 0; o < e.length; o++) {
            (i = e[o]).chr === a && t.push(i);
          }
        }

        return t;
      }(e, this), function (t, n) {
        var e,
            r = n.config.numAnnotTracks;
        r > 10 && console.error("Ideogram only displays up to 10 tracks at a time.  You specified " + r + " tracks.  Perhaps consider a different way to visualize your data."), (e = Object.keys(t).length) && console.warn("Ideogram configuration specified " + r + " tracks, but loaded annotations contain " + e + " extra tracks.");
      }(r, this), e;
    }

    var Ma = ai.a.assign({}, i, a);

    function ka() {
      var t = this.config;
      t.annotationsPath || t.localAnnotationsPath || this.annots || t.annotations ? function (t, n) {
        var e;
        n.annotationHeight || (e = "heatmap" === n.annotationsLayout ? n.chrWidth - 1 : Math.round(n.chrHeight / 100), t.config.annotationHeight = e), n.annotationTracks ? t.config.numAnnotTracks = n.annotationTracks.length : n.annotationsNumTracks ? t.config.numAnnotTracks = n.annotationsNumTracks : t.config.numAnnotTracks = 1, t.config.annotTracksHeight = n.annotationHeight * n.numAnnotTracks, void 0 === n.barWidth && (t.config.barWidth = 3);
      }(this, t) : this.config.annotTracksHeight = 0, void 0 === t.annotationsColor && (this.config.annotationsColor = "#F00"), function (t, n) {
        !1 !== n.showAnnotTooltip && (t.config.showAnnotTooltip = !0), n.onWillShowAnnotTooltip && (t.onWillShowAnnotTooltipCallback = n.onWillShowAnnotTooltip);
      }(this, t);
    }

    function Sa(t) {
      t.rawAnnots.annots = t.rawAnnots.annots.sort(function (t, n) {
        return oi(t.chr, n.chr);
      }), t.onLoadAnnotsCallback && t.onLoadAnnotsCallback(), t.config.heatmaps && t.deserializeAnnotsForHeatmap(t.rawAnnots);
    }

    function La(t) {
      var n,
          e = this;
      "http" === t.slice(0, 4) ? (n = function (t) {
        var n, e;
        return "bed" !== (e = (n = t.split("?")[0].split("."))[n.length - 1]) && "json" !== e ? (e = e.toUpperCase(), void alert("Ideogram.js only supports BED and Ideogram JSON at the moment.  Sorry, check back soon for " + e + " support!")) : e;
      }(t), Ma.text(t).then(function (t) {
        e.rawAnnots = "bed" === n ? new Ei(t, e).rawAnnots : JSON.parse(t), Sa(e);
      })) : Ma.json(e.config.annotationsPath).then(function (t) {
        e.rawAnnots = t, Sa(e);
      });
    }

    function Da(t) {
      var n, e, r, o, i, a, s;

      for (n = [], e = [], r = this.chromosomesArray, o = 0; o < r.length; o++) {
        i = r[o].name, e.push(i), n.push({
          chr: i,
          annots: []
        });
      }

      for (o = 0; o < t.length; o++) {
        a = t[o], -1 !== (s = e.indexOf(a.chr)) && (n[s] = a);
      }

      return n;
    }

    var Ba = "&api_key=7e33ac6a08a6955ec3b83d214d22b21a2808",
        Fa = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/",
        Na = Fa + "esearch.fcgi?retmode=json" + Ba,
        Oa = Fa + "esummary.fcgi?retmode=json" + Ba,
        Pa = Fa + "elink.fcgi?retmode=json" + Ba;
    var Ea = e(3),
        Ia = ai.a.assign({}, a, r);

    function ja(t, n, e, r) {
      var o, i, a, s;
      return s = t.result.uids[0], a = (o = t.result[s]).gbuid, n.push(o.assemblyaccession), i = function (t, n, e, r) {
        return Object(ai.e)(r) || void 0 !== e ? "&db=nuccore&linkname=gencoll_nuccore_chr&from_uid=" + t : "&db=nuccore&linkname=assembly_nuccore_refseq&from_uid=" + n;
      }(a, s, e, r), [n, r.elink + i];
    }

    function Ha(t, n, e) {
      var r, o;
      return function (t, n, e) {
        var r = n[0],
            o = e.ideo;

        if (t.linksets[0].linksetdbs[0].links.length > 100) {
          if (void 0 === e.recovering) return o.getAssemblyAndChromosomesFromEutils(e.callback, !0), Promise.reject("Unexpectedly found genomic scaffolds instead of chromosomes while querying RefSeq.  Recovering.");
          throw Error("Failed to find chromosomes for genome " + r);
        }
      }(t, n, e), r = t.linksets[0].linksetdbs[0].links.join(","), o = e.ideo.esummary + "&db=nucleotide&id=" + r, Ia.json(o);
    }

    function Ua(t, n) {
      var e,
          r,
          _ref9 = function (t, n) {
        var e = t.genome;
        return "mitochondrion" === e ? function (t, n) {
          var e, r;
          return n.config.showNonNuclearChromosomes ? (e = t.genome, [-1 === (r = t.subtype.split("|").indexOf("plasmid")) ? "MT" : t.subname.split("|")[r], e]) : [null, null];
        }(t, n) : "chloroplast" === e || "plastid" === e ? function (t) {
          return t.config.showNonNuclearChromosomes ? ["CP", "chloroplast"] : [null, null];
        }(n) : "apicoplast" === e ? function (t) {
          return t.config.showNonNuclearChromosomes ? ["AP", "apicoplast"] : [null, null];
        }(n) : function (t) {
          var n, e;
          return n = t.subtype.split("|").indexOf("chromosome"), void 0 !== (e = t.subname.split("|")[n]) && "chr" === e.substr(0, 3) && (e = e.substr(3)), [e, "nuclear"];
        }(t);
      }(t, n),
          _ref10 = _slicedToArray(_ref9, 2),
          e = _ref10[0],
          r = _ref10[1];

      return {
        name: e,
        length: t.slen,
        type: r
      };
    }

    function Wa(t, n) {
      var e,
          r,
          o = [],
          i = this,
          a = {
        callback: t,
        recovering: n,
        ideo: i
      };
      e = function (t) {
        var n, e;
        return n = t.config.organism, e = t.assemblyIsAccession() ? t.config.assembly + "%22[Assembly%20Accession]" : n + "%22[organism]AND%20(%22latest%20refseq%22[filter])%20", t.esearch + "&db=assembly&term=%22" + e + "AND%20(%22chromosome%20level%22[filter]%20OR%20%22complete%20genome%22[filter])";
      }(i), Ia.json(e).then(function (t) {
        return function (t, n) {
          var e, r;
          return e = t.esearchresult.idlist[0], r = n.esummary + "&db=assembly&id=" + e, Ia.json(r);
        }(t, i);
      }).then(function (t) {
        var _ja, _ja2;

        return (_ja = ja(t, o, n, i), _ja2 = _slicedToArray(_ja, 2), o = _ja2[0], r = _ja2[1], _ja), Ia.json(r);
      }).then(function (t) {
        return Ha(t, o, a);
      }).then(function (n) {
        return o = function (t, n, e) {
          var r,
              o,
              i = [];

          for (r in t) {
            "uids" !== r && (o = Ua(t[r], e), i.push(o));
          }

          return i = i.sort(Ideogram.sortChromosomes), e.coordinateSystem = "bp", n.push(i), n;
        }(n.result, o, i), t(o);
      }, function (t) {
        console.warn(t);
      });
    }

    var Ya,
        Ra,
        za,
        qa = ai.a.assign({}, i);

    function Xa() {
      var t = this.bandsToShow.join(",");
      qa.selectAll(this.selector + " .bandLabel, .bandLabelStalk").style("display", "none"), qa.selectAll(t).style("display", "");
    }

    function $a(t, n, e, r, o) {
      return n !== e && (t = r[o.id][e] + 36), t;
    }

    function Va(t, n, e, r, o, i, a) {
      var s, c;
      return e < r + (a ? n : o) ? (n = o, s = i, c = !!a) : t.push(i), [t, n, s, c];
    }

    function Ga(t, n) {
      var e,
          r,
          o,
          i,
          a,
          s = [],
          c = t[n.id].length,
          u = 0;

      for (e = 0; e < c; e++) {
        var _Va, _Va2, _Va3, _Va4;

        o = t[n.id][e], (_Va = Va(s, u, o, 5, i, e, !0), _Va2 = _slicedToArray(_Va, 4), s = _Va2[0], u = _Va2[1], r = _Va2[2], a = _Va2[3], _Va), a || (i = $a(i, r, e, t, n), (_Va3 = Va(s, u, o, 5, i, e, !1), _Va4 = _slicedToArray(_Va3, 4), s = _Va4[0], u = _Va4[1], r = _Va4[2], a = _Va4[3], _Va3));
      }

      return s;
    }

    function Qa(t, n) {
      var e, r, o, i, a, s, c;

      for (this.bandsToShow = [], r = 0; r < t.length; r++) {
        for (a = [], s = (o = Ga(n, i = t[r])).length, c = 0; c < s; c++) {
          e = o[c], a.push("#" + i.id + " .bsbsl-" + e);
        }

        this.bandsToShow = this.bandsToShow.concat(a);
      }
    }

    Ya = [["gneg", "#FFF", "#FFF", "#DDD"], ["gpos25", "#C8C8C8", "#DDD", "#BBB"], ["gpos33", "#BBB", "#BBB", "#AAA"], ["gpos50", "#999", "#AAA", "#888"], ["gpos66", "#888", "#888", "#666"], ["gpos75", "#777", "#777", "#444"], ["gpos100", "#444", "#666", "#000"], ["acen", "#FEE", "#FEE", "#FDD"], ["noBands", "#BBB", "#BBB", "#AAA"]], Ra = '<style>#_ideogram {padding-left: 5px;} #_ideogram .labeled {padding-left: 15px;} #_ideogram.labeledLeft {padding-left: 15px; padding-top: 15px;} #_ideogram text {font: 9px Tahoma; fill: #000;} #_ideogram .italic {font-style: italic;} #_ideogram .chromosome {cursor: pointer; fill: #AAA;}#_ideogram .chrSetLabel {font-weight: bolder;}#_ideogram .ghost {opacity: 0.2;}#_ideogram .hidden {display: none;}#_ideogram .bandLabelStalk line {stroke: #AAA; stroke-width: 1;}#_ideogram .syntenyBorder {stroke:#AAA;stroke-width:1;}#_ideogram .brush .selection {  fill: #F00;  stroke: #F00;  fill-opacity: .3;  shape-rendering: crispEdges;}#_ideogram .noBands {fill: #AAA;}#_ideogram .gneg {fill: #FFF}#_ideogram .gpos25 {fill: #BBB}#_ideogram .gpos33 {fill: #AAA}#_ideogram .gpos50 {fill: #888}#_ideogram .gpos66 {fill: #666}#_ideogram .gpos75 {fill: #444}#_ideogram .gpos100 {fill: #000}#_ideogram .gpos {fill: #000}#_ideogram .acen {fill: #FDD}#_ideogram .stalk {fill: #CCE;}#_ideogram .gvar {fill: #DDF}#_ideogram.faint .gneg {fill: #FFF}#_ideogram.faint .gpos25 {fill: #EEE}#_ideogram.faint .gpos33 {fill: #EEE}#_ideogram.faint .gpos50 {fill: #EEE}#_ideogram.faint .gpos66 {fill: #EEE}#_ideogram.faint .gpos75 {fill: #EEE}#_ideogram.faint .gpos100 {fill: #DDD}#_ideogram.faint .gpos {fill: #DDD}#_ideogram.faint .acen {fill: #FEE}#_ideogram.faint .stalk {fill: #EEF;}#_ideogram.faint .gvar {fill: #EEF}#_ideogram .gneg {fill: url("#gneg")} #_ideogram .gpos25 {fill: url("#gpos25")} #_ideogram .gpos33 {fill: url("#gpos33")} #_ideogram .gpos50 {fill: url("#gpos50")} #_ideogram .gpos66 {fill: url("#gpos66")} #_ideogram .gpos75 {fill: url("#gpos75")} #_ideogram .gpos100 {fill: url("#gpos100")} #_ideogram .gpos {fill: url("#gpos100")} #_ideogram .acen {fill: url("#acen")} #_ideogram .stalk {fill: url("#stalk")} #_ideogram .gvar {fill: url("#gvar")} #_ideogram .noBands {fill: url("#noBands")} #_ideogram .chromosome {fill: url("#noBands")} </style>', za = '<pattern id="stalk" width="2" height="1" patternUnits="userSpaceOnUse" patternTransform="rotate(30 0 0)"><rect x="0" y="0" width="10" height="2" fill="#CCE" /> <line x1="0" y1="0" x2="0" y2="100%" style="stroke:#88B; stroke-width:0.7;" /></pattern><pattern id="gvar" width="2" height="1" patternUnits="userSpaceOnUse" patternTransform="rotate(-30 0 0)"><rect x="0" y="0" width="10" height="2" fill="#DDF" /> <line x1="0" y1="0" x2="0" y2="100%" style="stroke:#99C; stroke-width:0.7;" /></pattern>';
    var Za = ai.a.assign({}, i);

    function Ja(t, n, e, r) {
      var o = this,
          i = o._layout,
          a = e.chrIndex;
      return t.selectAll("text").data(n).enter().append("g").attr("class", function (t, n) {
        return "bandLabel bsbsl-" + n;
      }).attr("transform", function (t) {
        var n = i.getChromosomeBandLabelTranslate(t, a);
        return "horizontal" === o.config.orientation ? r[e.id].push(n.x + 13) : r[e.id].push(n.y + 6), n.translate;
      }).append("text").attr("text-anchor", i.getChromosomeBandLabelAnchor(a)).text(function (t) {
        return t.name;
      }), r;
    }

    function Ka(t, n, e, r) {
      var o = this;
      t.selectAll("line.bandLabelStalk").data(n).enter().append("g").attr("class", function (t, n) {
        return "bandLabelStalk bsbsl-" + n;
      }).attr("transform", function (t) {
        var n;
        return n = o.round(t.px.start + t.px.width / 2), -10, r[e.id].push(n + 13), "translate(" + n + "," + -10 + ")";
      }).append("line").attr("x1", 0).attr("y1", o._layout.getChromosomeBandTickY1(e.chrIndex)).attr("x2", 0).attr("y2", o._layout.getChromosomeBandTickY2(e.chrIndex));
    }

    function ts(t) {
      var n,
          e,
          r,
          o,
          i,
          a = {};

      for (o = function (t) {
        var n,
            e,
            r = [];

        for (n in t) {
          for (e in t[n]) {
            r.push(t[n][e]);
          }
        }

        return r;
      }(t), n = 0; n < o.length; n++) {
        r = o[n], e = Za.select(this.selector + " #" + r.id), a[r.id] = [], i = r.bands.filter(function (t) {
          return "pter" !== t.name;
        }), a = this.drawBandLabelText(e, i, r, a), this.drawBandLabelStalk(e, i, r, a);
      }

      this.setBandsToShow(o, a);
    }

    function ns(t, n) {
      return [n[t][0], n[t][1], n[t][2], n[t][3]];
    }

    function es() {
      var t = "";
      return t = function (t) {
        var n,
            e,
            r,
            o,
            i,
            a = "";

        for (n = 0; n < t.length; n++) {
          var _ns, _ns2;

          (_ns = ns(n, t), _ns2 = _slicedToArray(_ns, 4), e = _ns2[0], r = _ns2[1], o = _ns2[2], i = _ns2[3], _ns), a += '<linearGradient id="' + e + '" x1="0%" y1="0%" x2="0%" y2="100%">', a += "gneg" === e ? '<stop offset="70%" stop-color="' + o + '" /><stop offset="95%" stop-color="' + i + '" /><stop offset="100%" stop-color="' + r + '" />' : '<stop offset="5%" stop-color="' + r + '" /><stop offset="15%" stop-color="' + o + '" /><stop offset="60%" stop-color="' + i + '" />', a += "</linearGradient>";
        }

        return a;
      }(Ya), t = Ra + (t = "<defs>" + (t += za) + "</defs>");
    }

    var rs = e(4);

    function os(t, n, e, r) {
      var o, i;
      return o = n[t], e.push(o), (i = {
        iscn: o[o.length - 1].iscn.stop,
        bp: o[o.length - 1].bp.stop
      }).iscn > r.maxLength.iscn && (r.maxLength.iscn = i.iscn), i.bp > r.maxLength.bp && (r.maxLength.bp = i.bp), e;
    }

    function is(t, n, e, r) {
      var o, i;
      if ("iscn" === r.coordinateSystem || r.config.multiorganism) e = function (t, n, e, r) {
        var o, i, a;

        for (o = r.bandData[t], i = r.parseBands(o, t, n), n = Object.keys(i).sort(function (t, n) {
          return oi(t, n);
        }), r.config.chromosomes[t] = n.slice(), r.numChromosomes += r.config.chromosomes[t].length, a = 0; a < n.length; a++) {
          e = os(n[a], i, e, r);
        }

        return e;
      }(t, n, e, r);else if ("bp" === r.coordinateSystem) for (r.config.chromosomes[t] = n.slice(), r.numChromosomes += r.config.chromosomes[t].length, i = 0; i < n.length; i++) {
        (o = n[i]).length > r.maxLength.bp && (r.maxLength.bp = o.length);
      }
      return e;
    }

    function as() {
      var _ref11, _ref12;

      var t,
          n,
          e,
          r,
          o,
          i,
          a = new Date().getTime();
      t = [], (_ref11 = function (t) {
        var n, e, r;
        if (!0 === t.config.multiorganism) for (t.coordinateSystem = "bp", r = t.config.taxids, n = 0; n < r.length; n++) {
          e = r[n];
        } else void 0 === t.config.taxid && (t.config.taxid = t.config.taxids[0]), r = [e = t.config.taxid], t.config.taxids = r;
        return [e, r];
      }(this), _ref12 = _slicedToArray(_ref11, 2), e = _ref12[0], r = _ref12[1], _ref11), "chromosomes" in this.config && (o = this.config.chromosomes), this.config.multiorganism && (i = o), this.config.chromosomes = {};

      for (n = 0; n < r.length; n++) {
        e = r[n], this.config.multiorganism && (o = i[e]), t = is(e, o, t, this);
      }

      return function (t, n) {
        var e = new Date().getTime();
        n.config.debug && console.log("Time in processBandData: " + (e - t) + " ms");
      }(a, this), t;
    }

    var ss = ai.a.assign({}, o, i);

    function cs() {
      call(this.onBrushMoveCallback);
    }

    function us(t, n, e) {
      var _ref13, _ref14, _ref15, _ref16;

      var r,
          o,
          a,
          s,
          c = this.config.chrWidth + 6.5,
          u = this._layout.margin.left;
      (_ref13 = function (t, n, e) {
        var r, o;
        return r = t.split(":"), o = t.split("-"), r.length > 1 && o.length > 1 && (t = r[0].replace("chr", ""), o = r[1].split("-"), n = parseInt(o[0]), e = parseInt(o[1] - 1)), [t, n, e];
      }(t, n, e), _ref14 = _slicedToArray(_ref13, 3), t = _ref14[0], n = _ref14[1], e = _ref14[2], _ref13), r = function (t, n) {
        var e, r;

        for (e = 0; e < n.chromosomesArray.length; e++) {
          if ((r = n.chromosomesArray[e]).name === t) return r;
        }
      }(t, this), (_ref15 = function (t, n) {
        var e,
            r,
            o = [1],
            i = [1],
            a = t.bands.slice(-1)[0];

        for (r = 0; r < t.bands.length; r++) {
          e = t.bands[r], o.push(e.bp.start), i.push(e.px.start + n);
        }

        return o.push(a.bp.stop - 1), i.push(a.px.stop + n), [o, i];
      }(r, u), _ref16 = _slicedToArray(_ref15, 2), a = _ref16[0], s = _ref16[1], _ref15), o = r.bands.slice(-1)[0].bp.stop, void 0 === n && (n = Math.floor(o / 10)), void 0 === e && (e = Math.ceil(2 * n)), function (t, n, e, r, o) {
        var a,
            s = o.config.chrHeight;
        a = ss.scaleLinear().domain(t).range(n), o.brush = ss.brushX().extent([[e, 0], [s + e, r]]).on("brush", function () {
          var t = i.event.selection.map(a.invert),
              n = Math.floor(t[0]),
              e = Math.ceil(t[1]);
          o.selectedRegion = {
            from: n,
            to: e,
            extent: e - n
          }, o.onBrushMove && o.onBrushMoveCallback();
        });
      }(a, s, u, c, this), function (t, n, e) {
        var r = n - t + 1;
        e.selectedRegion = {
          from: t,
          to: n,
          extent: r
        };
      }(n, e, this), function (t, n, e, r, o, i) {
        var a, s, c;
        a = i.convertBpToPx(t, n) + r, s = i.convertBpToPx(t, e) + r, c = i._layout.getChromosomeSetYTranslate(0) + (i.config.chrWidth - o) / 2, ss.select(i.selector).append("g").attr("class", "brush").attr("transform", "translate(0, " + c + ")").call(i.brush).call(i.brush.move, [a, s]);
      }(r, n, e, u, c, this);
    }

    function ls(t, n) {
      var e, r, o, i, a, s, c, u, l, f;

      for (e = this.bandsArray, r = this.config.taxid, o = this.config.chromosomes[r], a = (i = "male" === this.config.sex ? [1, 0] : [0, 0]).length, f = 0; f < a; f++) {
        s = o[l = i[f] + n], c = e[r][l], u = this.getChromosomeModel(c, s, r, l), this.appendHomolog(u, n, f, t);
      }
    }

    function fs(t) {
      var n,
          e,
          r = {
        X: 1,
        Y: 1
      };
      if (2 === this.config.ploidy && this.config.sex) for (this.sexChromosomes.list = [], e = 0; e < t.length; e++) {
        n = t[e], "male" === this.config.sex && n in r ? (this.sexChromosomes.list.push(n), this.sexChromosomes.index || (this.sexChromosomes.index = e)) : "X" === n && (this.sexChromosomes.list.push(n, n), this.sexChromosomes.index = e);
      }
    }

    function hs(t, n) {
      var e, r;

      if (t.bands.length > 1) {
        var _ref17, _ref18;

        if ((_ref17 = function (t, n) {
          var e, r, o, i, a, s, c, u, l;

          for (e = 0; e < t.bands.length; e++) {
            if (a = (r = t.bands[e]).bp.start, c = (s = r.bp.stop) - a, o = r.iscn.start, i = r.iscn.stop - o, u = r.px.start, l = r.px.width, n >= a && n <= s) return [u + l * (o + i / c * (n - a) - o) / i, r];
          }

          return [null, r];
        }(t, n), _ref18 = _slicedToArray(_ref17, 2), r = _ref18[0], e = _ref18[1], _ref17), null !== r) return r;
      } else if (n >= 1 && n <= t.length) return r = t.scale.bp * n;

      !function (t, n, e) {
        throw new Error("Base pair out of range.  bp: " + t + "; length of chr" + n.name + ": " + e.bp.stop);
      }(n, t, e);
    }

    function ds(t, n, e, r, o, i, a) {
      var s, c, u, l;
      return a = t - n, s = r - o, c = i.bp.stop - i.bp.start, u = n + (e - o) * (a / s), l = i.bp.start + c * (u - n) / a, Math.round(l);
    }

    function gs(t, n) {
      var e, r, o, i, a, s;

      for (0 === n && (n = t.bands[0].px.start), e = 0; e < t.bands.length; e++) {
        if (o = (r = t.bands[e]).px.start, i = r.px.stop, a = r.iscn.start, s = r.iscn.stop, n >= o && n <= i) return ds(s, a, n, i, o, r, void 0);
      }

      !function (t, n, e) {
        throw new Error("Pixel out of range.  px: " + t + "; length of chr" + n.name + ": " + e);
      }(n, t, i);
    }

    ss.scaleLinear = nr, ss.max = _e;
    var ps = e(6),
        ms = Object.assign({}, i);

    function bs() {
      var t,
          n,
          e = [],
          r = this.annots;

      for (n = 0; n < r.length; n++) {
        t = r[n].annots, e = e.concat(t);
      }

      return e;
    }

    function vs(t) {
      var n,
          e,
          r,
          o = [],
          i = this.annots;

      for (n in i) {
        o.push({
          chr: i[n].chr,
          annots: []
        });
      }

      for (r = 0; r < t.length; r++) {
        o[(e = t[r]).chrIndex].annots.push(e);
      }

      return o;
    }

    function ys() {
      var t,
          n,
          e = this.rawAnnots.keys;

      for (this.unpackedAnnots = this.unpackAnnots(), this.crossfilter = ps(this.unpackedAnnots), this.annotsByFacet = {}, this.facets = e.slice(3, e.length), t = 0; t < this.facets.length; t++) {
        n = this.facets[t], this.annotsByFacet[n] = this.crossfilter.dimension(function (t) {
          return t[n];
        });
      }

      "filterSelections" in this && this.filterAnnots(this.filterSelections);
    }

    function _s(t) {
      var n,
          e,
          r,
          o = Date.now();

      for (this.filterSelections = t, (_ref19 = function (t, n) {
        var e,
            r,
            o,
            i,
            a = {};
        if (0 === Object.keys(t).length) i = n.unpackedAnnots;else {
          for (r = 0; r < n.facets.length; r++) {
            e = ((o = n.facets[r]) in t) ? function (n) {
              return (n in t[o]);
            } : null, n.annotsByFacet[o].filter(e), a[o] = n.annotsByFacet[o].group().top(1 / 0);
          }

          i = n.annotsByFacet[o].top(1 / 0);
        }
        return [i, a];
      }(t, this), _ref20 = _slicedToArray(_ref19, 2), e = _ref20[0], r = _ref20[1], _ref19); n < this.facets.length; n++) {
        var _ref19, _ref20;

        this.annotsByFacet[void 0].filterAll();
      }

      return e = this.packAnnots(e), delete this.maxAnnotsPerBar, delete this.maxAnnotsPerBarAllChrs, ms.selectAll(this.selector + " polygon.annot").remove(), this.drawAnnots(e), console.log("Time in filterAnnots: " + (Date.now() - o) + " ms"), r;
    }

    function ws(t) {
      var _ref21, _ref22;

      var n, e, r, o;
      return n = t.bands, e = this.config.chrHeight, r = 0, (o = void 0 !== n) ? (_ref21 = function (t, n, e, r) {
        for (var o, i, a, s = 0, c = r.coordinateSystem, u = r.config.chrHeight, l = 0; l < t.length; l++) {
          i = (o = t[l])[c].stop - o[c].start, a = r._layout._isRotated ? u * i / n.length : u * n.length / r.maxLength[c] * i / n.length, t[l].px = {
            start: s,
            stop: s + a,
            width: a
          }, s = t[l].px.stop, e && "acen" === o.stain && "p" === o.name[0] && (n.pcenIndex = l);
        }

        return [t, n, s];
      }(n, t, o, this), _ref22 = _slicedToArray(_ref21, 3), n = _ref22[0], t = _ref22[1], r = _ref22[2], _ref21) : r = e * t.length / this.maxLength[this.coordinateSystem], t.width = r, t.scale = function (t, n, e) {
        var r = e.config.chrHeight,
            o = t.length,
            i = e.maxLength,
            a = {};
        return !0 === e.config.multiorganism ? (a.bp = 1, a.iscn = r * o / i.bp) : (a.bp = r / i.bp, n && (a.iscn = r / i.iscn)), a;
      }(t, o, this), t.bands = n, t;
    }

    function xs(t, n, e, r) {
      var o,
          i = {};

      if (o = void 0 !== t, (i = function (t, n, e, r) {
        return void 0 !== n ? (t.name = e, t.length = n[n.length - 1][r.coordinateSystem].stop, t.type = "nuclear") : t = e, t;
      }(i, t, n, this)).chrIndex = r, i.id = "chr" + i.name + "-" + e, !0 === this.config.fullChromosomeLabels) {
        var a = this.organisms[e].scientificNameAbbr;
        i.name = a + " chr" + i.name;
      }

      return i.bands = t, (i = this.getChromosomePixels(i)).centromerePosition = function (t, n) {
        return t && "p" === n[0].name[0] && "q" === n[1].name[0] && n[0].bp.stop - n[0].bp.start < 2e6 ? "telocentric" : "";
      }(o, t), i = function (t, n) {
        return n && 1 === t.bands.length && delete t.bands, t;
      }(i, o);
    }

    var As =
    /*#__PURE__*/
    function () {
      function As(t) {
        _classCallCheck(this, As);

        this._model = t, this._class = "ModelAdapter";
      }

      _createClass(As, [{
        key: "getModel",
        value: function getModel() {
          return this._model;
        }
      }, {
        key: "getCssClass",
        value: function getCssClass() {
          return "";
        }
      }], [{
        key: "getInstance",
        value: function getInstance(t) {
          return t.bands ? new As(t) : new Cs(t);
        }
      }]);

      return As;
    }();

    var Cs =
    /*#__PURE__*/
    function (_As) {
      _inherits(Cs, _As);

      function Cs(t) {
        var _this5;

        _classCallCheck(this, Cs);

        _this5 = _possibleConstructorReturn(this, _getPrototypeOf(Cs).call(this, t)), _this5._class = "ModelNoBandsAdapter";
        return _this5;
      }

      _createClass(Cs, [{
        key: "getModel",
        value: function getModel() {
          return this._model.bands = [], this._model.width > 1 && this._model.bands.push({
            name: "q",
            px: {
              start: 0,
              stop: this._model.width,
              width: this._model.width
            },
            bp: {
              start: 1,
              stop: this._model.length
            }
          }), this._model;
        }
      }, {
        key: "getCssClass",
        value: function getCssClass() {
          return "noBands";
        }
      }]);

      return Cs;
    }(As);

    var Ts =
    /*#__PURE__*/
    function () {
      function Ts(t) {
        _classCallCheck(this, Ts);

        this._config = t, this._ploidy = new fi(this._config);
      }

      _createClass(Ts, [{
        key: "getArmColor",
        value: function getArmColor(t, n, e) {
          return this._config.armColors ? this._config.armColors[e] : this._config.ancestors ? this._getPolyploidArmColor(t, n, e) : null;
        }
      }, {
        key: "getBorderColor",
        value: function getBorderColor(t, n, e) {
          return n < this._config.ploidy ? "#000" : this._ploidy.exists(t, n, e) ? "#000" : "#fff";
        }
      }, {
        key: "_getPolyploidArmColor",
        value: function _getPolyploidArmColor(t, n, e) {
          if (this._ploidy.exists(t, n, e)) {
            var r = this._ploidy.getAncestor(t, n, e);

            return this._config.ancestors[r];
          }

          return "transparent";
        }
      }]);

      return Ts;
    }();

    var Ms =
    /*#__PURE__*/
    function () {
      function Ms(t) {
        _classCallCheck(this, Ms);

        this._data = t, this.start = t.start, this.stop = t.stop, this.length = this.stop - this.start;
      }

      _createClass(Ms, [{
        key: "getColor",
        value: function getColor(t) {
          return "ploidy" in this._data ? "ploidy" in this._data && this._data.ploidy[t] ? this._getColor(t) : "transparent" : this._getColor(t);
        }
      }, {
        key: "_getColor",
        value: function _getColor(t) {
          return Array.isArray(this._data.color) ? this._data.color[t] : this._data.color;
        }
      }]);

      return Ms;
    }();

    var ks =
    /*#__PURE__*/
    function () {
      function ks(t, n, e) {
        _classCallCheck(this, ks);

        this._adapter = t, this._model = this._adapter.getModel(), this._config = n, this._ideo = e, this._color = new Ts(this._config), this._bumpCoefficient = 5;
      }

      _createClass(ks, [{
        key: "_addPArmShape",
        value: function _addPArmShape(t, n) {
          return n ? t.concat(this._getPArmShape()) : t;
        }
      }, {
        key: "_addQArmShape",
        value: function _addQArmShape(t, n) {
          return n ? t.concat(this._getQArmShape()) : t;
        }
      }, {
        key: "render",
        value: function render(t, n, e) {
          var r, o, i, a, s, c, u;
          return r = this, t = t.append("g").attr("class", "bands").attr("clip-path", "url(#" + this._model.id + "-chromosome-set-clippath)"), o = this._renderArm(t, n, e, "p"), i = this._renderArm(t, n, e, "q"), this._renderRangeSet(t, n, e), a = [], a = this._addPArmShape(a, o), a = this._addQArmShape(a, i), s = "0", c = "", u = this.isFullyBanded(), "ancestors" in this._ideo.config && !("rangeSet" in this._ideo.config) ? (c = r._color.getArmColor(n, e, 0), u && (s = "0.5")) : u ? (s = null, c = "transparent") : "ancestors" in this._ideo.config || (s = "1"), t.append("g").attr("class", "chromosome-border").selectAll("path").data(a).enter().append("path").attr("fill", c).style("fill-opacity", s).attr("stroke", function (t, o) {
            return r._color.getBorderColor(n, e, o);
          }).attr("stroke-width", function (t) {
            return "strokeWidth" in t ? t.strokeWidth : 1;
          }).attr("d", function (t) {
            return t.path;
          }).attr("class", function (t) {
            return t.class;
          }), a;
        }
      }, {
        key: "_renderRangeSet",
        value: function _renderRangeSet(t, n, e) {
          var r, o, i, a;
          "rangeSet" in this._config && (o = this._config.rangeSet.filter(function (t) {
            return t.chr - 1 === n;
          }).map(function (t) {
            return new Ms(t);
          }), i = t.append("g").attr("class", "range-set"), a = (r = this)._ideo, i.selectAll("rect.range").data(o).enter().append("rect").attr("class", "range").attr("x", function (t) {
            return a.convertBpToPx(r._model, t.start);
          }).attr("y", 0).attr("width", function (t) {
            return a.convertBpToPx(r._model, t.length);
          }).attr("height", this._config.chrWidth).style("fill", function (t) {
            return t.getColor(e);
          }));
        }
      }, {
        key: "_getShapeData",
        value: function _getShapeData() {
          var t, n, e, r;

          for (n = 0; n < this._model.bands.length; n++) {
            if ("q" === this._model.bands[n].name[0]) {
              t = this._model.bands[n];
              break;
            }
          }

          return e = this._model.bands.length - 1, r = this._model.bands[e].px.stop, {
            x1: 0,
            x2: t ? t.px.start : r,
            x3: r,
            w: this._config.chrWidth,
            b: this._config.chrWidth / this._bumpCoefficient
          };
        }
      }, {
        key: "_getPArmShape",
        value: function _getPArmShape() {
          var t = this._getShapeData(),
              n = t.x2 - t.b;

          return this.isFullyBanded() || "ancestors" in this._ideo.config ? {
            class: "",
            path: "M" + t.b + ",0 L" + n + ",0 Q" + (t.x2 + t.b) + "," + t.w / 2 + "," + n + "," + t.w + " L" + t.b + "," + t.w + " Q-" + t.b + "," + t.w / 2 + "," + t.b + ",0"
          } : [{
            class: "",
            path: "M" + t.b + ",0 L" + (n - 2) + ",0 L" + (n - 2) + "," + t.w + " L" + t.b + "," + t.w + " Q-" + t.b + "," + t.w / 2 + "," + t.b + ",0"
          }, {
            class: "acen",
            path: "M" + n + ",0 Q" + (t.x2 + t.b) + "," + t.w / 2 + "," + n + "," + t.w + " L" + n + "," + t.w + " L" + (n - 2) + "," + t.w + " L" + (n - 2) + ",0"
          }];
        }
      }, {
        key: "_getQArmShape",
        value: function _getQArmShape() {
          var t = this._getShapeData(),
              n = t.x3 - t.b,
              e = t.x2 + t.b;

          return this.isFullyBanded() || "ancestors" in this._ideo.config ? {
            class: "",
            path: "M" + e + ",0 L" + n + ",0 Q" + (t.x3 + t.b) + "," + t.w / 2 + "," + n + "," + t.w + " L" + e + "," + t.w + " Q" + (t.x2 - t.b) + "," + t.w / 2 + "," + e + ",0"
          } : [{
            path: "M" + e + ",0 L" + n + ",0 Q" + (t.x3 + t.b) + "," + t.w / 2 + "," + n + "," + t.w + " L" + e + "," + t.w + " L" + e + ",0"
          }, {
            class: "acen",
            path: "M" + e + ",0Q" + (t.x2 - t.b) + "," + t.w / 2 + "," + e + "," + t.w + " L" + e + "," + t.w + "L" + (e + 2) + "," + t.w + "L" + (e + 2) + ",0"
          }];
        }
      }, {
        key: "isFullyBanded",
        value: function isFullyBanded() {
          return this._model.bands && (2 !== this._model.bands.length || "q" === this._model.bands[0].name[0]);
        }
      }, {
        key: "_renderBands",
        value: function _renderBands(t, n, e, r, o) {
          var i, a, s;
          i = this, a = "p" === o ? 0 : 1, s = "", "ancestors" in i._ideo.config && !i.isFullyBanded() && (s = i._color.getArmColor(n, e, a)), t.selectAll("path.band." + o).data(r).enter().append("path").attr("id", function (t) {
            return i._model.id + "-" + t.name.replace(".", "-");
          }).attr("class", function (t) {
            return "band " + o + "-band " + t.stain;
          }).attr("d", function (t) {
            var n;
            return "M " + i._ideo.round(t.px.start) + ", 0l " + (n = i._ideo.round(t.px.width)) + " 0 l 0 " + i._config.chrWidth + " l -" + n + " 0 z";
          }).style("fill", s);
        }
      }, {
        key: "_renderArm",
        value: function _renderArm(t, n, e, r) {
          var o = this._model.bands.filter(function (t) {
            return t.name[0] === r;
          });

          return this._renderBands(t, n, e, o, r), Boolean(o.length);
        }
      }], [{
        key: "getInstance",
        value: function getInstance(t, n, e) {
          return "telocentric" === t.getModel().centromerePosition ? new Ls(t, n, e) : new Ss(t, n, e);
        }
      }]);

      return ks;
    }();

    var Ss =
    /*#__PURE__*/
    function (_ks) {
      _inherits(Ss, _ks);

      function Ss(t, n, e) {
        var _this6;

        _classCallCheck(this, Ss);

        _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Ss).call(this, t, n, e)), _this6._class = "MetacentricChromosome";
        return _this6;
      }

      return Ss;
    }(ks);

    var Ls =
    /*#__PURE__*/
    function (_ks2) {
      _inherits(Ls, _ks2);

      function Ls(t, n, e) {
        var _this7;

        _classCallCheck(this, Ls);

        _this7 = _possibleConstructorReturn(this, _getPrototypeOf(Ls).call(this, t, n, e)), _this7._class = "TelocentricChromosome", _this7._pArmOffset = 3;
        return _this7;
      }

      _createClass(Ls, [{
        key: "_addPArmShape",
        value: function _addPArmShape(t) {
          return t.concat(this._getPArmShape());
        }
      }, {
        key: "_getPArmShape",
        value: function _getPArmShape() {
          var t = this._getShapeData();

          return t.o = this._pArmOffset, [{
            class: "acen",
            path: "M" + (t.x2 + 2) + ",1L" + (t.x2 + t.o + 3.25) + ",1 L" + (t.x2 + t.o + 3.25) + "," + (t.w - 1) + " L" + (t.x2 + 2) + "," + (t.w - 1)
          }, {
            class: "gpos66",
            path: "M" + (t.x2 - t.o + 5) + ",0L" + (t.x2 - t.o + 3) + ",0 L" + (t.x2 - t.o + 3) + "," + t.w + " L" + (t.x2 - t.o + 5) + "," + t.w,
            strokeWidth: .5
          }];
        }
      }, {
        key: "_getQArmShape",
        value: function _getQArmShape() {
          var t = this._getShapeData(),
              n = t.x3 - t.b,
              e = this._pArmOffset + 3;

          return {
            class: "",
            path: "M" + (t.x2 + e) + ",0 L" + n + ",0 Q" + (t.x3 + t.b) + "," + t.w / 2 + "," + n + "," + t.w + " L" + (t.x2 + e) + "," + t.w
          };
        }
      }]);

      return Ls;
    }(ks);

    var Ds = Object.assign({}, i);

    function Bs(t, n, e, r) {
      var o, i, a, s, c;
      s = Ds.select(this.selector + " defs"), c = As.getInstance(t), o = e * this.config.chrMargin, i = r.append("g").attr("id", t.id).attr("class", "chromosome " + c.getCssClass()).attr("transform", "translate(0, " + o + ")"), a = ks.getInstance(c, this.config, this).render(i, n, e), Ds.select("#" + t.id + "-chromosome-set-clippath").remove(), s.append("clipPath").attr("id", t.id + "-chromosome-set-clippath").selectAll("path").data(a).enter().append("path").attr("d", function (t) {
        return t.path;
      }).attr("class", function (t) {
        return t.class;
      });
    }

    function Fs(t) {
      var n, e, r, o, i, a;
      if (n = t.chrIndex, o = this._layout.getChromosomeSetTranslate(n), a = this.selector + " #" + t.id + "-chromosome-set", Ds.selectAll(a + " g").remove(), 0 === (e = Ds.select(a)).nodes().length && (e = Ds.select(this.selector).append("g").attr("class", "chromosome-set-container").attr("data-set-number", n).attr("transform", o).attr("id", t.id + "-chromosome-set")), "sex" in this.config && 2 === this.config.ploidy && this.sexChromosomes.index === n) this.drawSexChromosomes(e, n);else for (r = 1, this.config.ploidy > 1 && (r = this._ploidy.getChromosomesNumber(n)), i = 0; i < r; i++) {
        this.appendHomolog(t, n, i, e);
      }
    }

    function Ns(t) {
      var n, e, r;
      this.config.taxid && (n = t.id.split("-")[0].replace("chr", ""), e = this.chromosomes[this.config.taxid][n].chrIndex, r = Number(Ds.select(t.parentNode).attr("data-set-number")), this._layout.rotate(r, e, t));
    }

    function Os() {
      var t, n, e, r, o, i, a;
      t = this.config, o = Ds.select(t.container + " svg#_ideogram"), e = Ds.select(t.container + " #_ideogramInnerWrap"), r = Ds.select(t.container + " #_ideogramMiddleWrap"), a = (i = t.ploidy) - 1, "vertical" === t.orientation && "comparative" !== t.perspective && (n = (this.numChromosomes + 2) * (t.chrWidth + t.chrMargin + a), n = Math.round(n * i / t.rows), "SmallLayout" === this._layout._class && (n += 40), r.style("height", this._layout.getHeight() + "px"), e.style("max-width", n + "px").style("overflow-x", "scroll").style("position", "absolute"), o.style("min-width", n - 5 + "px"));
    }

    var Ps = Object.assign({}, i);

    function Es(t) {
      var n = t._layout;
      Ps.selectAll(t.selector + " .chromosome-set-container").insert("text", ":first-child").data(t.chromosomesArray).attr("class", n.getChromosomeLabelClass()).attr("transform", n.getChromosomeSetLabelTranslate()).attr("x", n.getChromosomeSetLabelXPosition()).attr("y", function (t, e) {
        return n.getChromosomeSetLabelYPosition(e);
      }).attr("text-anchor", n.getChromosomeSetLabelAnchor()).each(function (n, e) {
        !function (t, n, e, r) {
          var o = function (t, n, e) {
            var r;
            return r = -1 === t.name.indexOf(" ") ? [t.name] : t.name.match(/^(.*)\s+([^\s]+)$/).slice(1).reverse(), "sex" in e.config && 2 === e.config.ploidy && n === e.sexChromosomes.index && (r = "male" === e.config.sex ? ["XY"] : ["XX"]), r;
          }(t, n, r);

          Ps.select(e).selectAll("tspan").data(o).enter().append("tspan").attr("dy", function (t, n) {
            return -1.2 * n + "em";
          }).attr("x", r._layout.getChromosomeSetLabelXPosition()).attr("class", function (t, n) {
            var e = r.config.fullChromosomeLabels;
            return 1 === n && e ? "italic" : null;
          }).text(String);
        }(n, e, this, t);
      });
    }

    function Is() {
      Es(this), function (t) {
        var n = t._layout;
        Ps.selectAll(t.selector + " .chromosome-set-container").each(function (e, r) {
          Ps.select(this).selectAll(".chromosome").append("text").attr("class", "chrLabel").attr("transform", n.getChromosomeSetLabelTranslate()).attr("x", function (t, e) {
            return n.getChromosomeLabelXPosition(e);
          }).attr("y", function (t, e) {
            return n.getChromosomeLabelYPosition(e);
          }).text(function (n, e) {
            return t._ploidy.getAncestor(r, e);
          }).attr("text-anchor", "middle");
        });
      }(this);
    }

    function js(t, n, e, r) {
      var o;
      n -= 1, o = function (t) {
        var n, e, r;
        return void 0 === t || !t.hasOwnProperty("x") || 1 === t.x && 1 === t.y ? (n = -8, e = -16, t = {
          x: 1,
          y: 1
        }, r = "") : (r = "scale(" + t.x + "," + t.y + ")", n = -6, e = "" === t ? -16 : -14), {
          x: n,
          y: e,
          scaleSvg: r,
          scale: t
        };
      }(r), "vertical" === e || "" === e ? function (t, n, e, r) {
        var o,
            i,
            a,
            s = r.config;
        n = function (t, n) {
          return (n.numAnnotTracks > 1 || "" === n.orientation) && (t -= 1), t;
        }(n, s), o = -4, !0 === s.showBandLabels && (o = s.chrMargin + s.chrWidth + 26), i = s.chrMargin * n, s.numAnnotTracks > 1 == 0 && (i += 1), a = i + o, t.selectAll("text.chrLabel").attr("transform", e.scaleSvg).selectAll("tspan").attr("x", e.x).attr("y", a);
      }(t, n, o, this) : function (t, n, e, r) {
        var o,
            i,
            a,
            s = r.config;
        o = -s.chrWidth - 2, !0 === s.showBandLabels && (o = s.chrMargin + 8), i = s.annotTracksHeight, "overlay" !== s.annotationsLayout && (i *= 2), a = 3 - (s.chrMargin * n + o) + i, a /= e.scale.x, t.selectAll("text.chrLabel").attr("transform", "rotate(-90)" + e.scaleSvg).selectAll("tspan").attr("x", a).attr("y", e.y);
      }(t, n, o, this);
    }

    var Hs = ai.a.assign({}, i, a, o, r);
    Hs.scaleLinear = nr, Hs.max = _e;

    var Us =
    /*#__PURE__*/
    function () {
      function Us(t) {
        _classCallCheck(this, Us);

        this.configure = si, this.initDrawChromosomes = Li, this.onLoad = Bi, this.handleRotateOnClick = Di, this.init = Pi, this.finishInit = li, this.writeContainer = Ai, this.onLoadAnnots = Qi, this.onDrawAnnots = Zi, this.processAnnotData = Ta, this.restoreDefaultTracks = va, this.updateDisplayedTracks = ya, this.initAnnotSettings = ka, this.fetchAnnots = La, this.drawAnnots = ca, this.getHistogramBars = na, this.drawHeatmaps = zi, this.deserializeAnnotsForHeatmap = Vi, this.fillAnnots = Da, this.drawProcessedAnnots = la, this.drawSynteny = ma, this.startHideAnnotTooltipTimeout = Ji, this.showAnnotTooltip = ta, this.onWillShowAnnotTooltip = Ki, this.setOriginalTrackIndexes = _a, this.esearch = Na, this.esummary = Oa, this.elink = Pa, this.getTaxidFromEutils = Ea.b, this.setTaxidData = Ea.e, this.setTaxidAndAssemblyAndChromosomes = Ea.d, this.getOrganismFromEutils = Ea.a, this.getTaxids = Ea.c, this.getAssemblyAndChromosomesFromEutils = Wa, this.parseBands = rs.a, this.drawBandLabels = ts, this.getBandColorGradients = es, this.processBandData = as, this.setBandsToShow = Qa, this.hideUnshownBandLabels = Xa, this.drawBandLabelText = Ja, this.drawBandLabelStalk = Ka, this.onBrushMove = cs, this.createBrush = us, this.drawSexChromosomes = ls, this.setSexChromosomes = fs, this.convertBpToPx = hs, this.convertPxToBp = gs, this.unpackAnnots = bs, this.packAnnots = vs, this.initCrossFilter = ys, this.filterAnnots = _s, this.assemblyIsAccession = ai.b, this.getDataDir = ai.c, this.round = ai.h, this.onDidRotate = ai.g, this.getSvg = ai.d, this.getChromosomeModel = xs, this.getChromosomePixels = ws, this.drawChromosomeLabels = Is, this.rotateChromosomeLabels = js, this.appendHomolog = Bs, this.drawChromosome = Fs, this.rotateAndToggleDisplay = Ns, this.setOverflowScroll = Os, this.configure(t);
      }

      _createClass(Us, null, [{
        key: "slugify",
        value: function slugify(t) {
          return t.toLowerCase().replace(" ", "-");
        }
      }, {
        key: "sortChromosomes",
        value: function sortChromosomes(t, n) {
          var e = "nuclear" === t.type,
              r = "nuclear" === n.type,
              o = "chloroplast" === t.type,
              i = "chloroplast" === n.type,
              a = "mitochondrion" === t.type,
              s = "mitochondrion" === n.type,
              c = "apicoplast" === t.type,
              u = "apicoplast" === n.type;
          return e && r ? oi(t.name, n.name) : !e && r ? 1 : a && i ? 1 : o && s ? -1 : c || a || o || !(s || i || u) ? void 0 : -1;
        }
      }, {
        key: "version",
        get: function get() {
          return ii;
        }
      }, {
        key: "d3",
        get: function get() {
          return Hs;
        }
      }]);

      return Us;
    }();

    window.Ideogram = Us;
    n.default = Us;
  }]);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(52)(module)))

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ideogram; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ideogram__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony import */ var ideogram__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ideogram__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(160);
/* harmony import */ var _components_Ideogram_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
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






var Ideogram =
/*#__PURE__*/
function (_Component) {
  _inherits(Ideogram, _Component);

  function Ideogram() {
    var _this;

    _classCallCheck(this, Ideogram);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ideogram).call(this));
    _this.ideogram = null;
    _this.isRotated = false;
    _this.tooltipData = null;
    _this.tooltipDataTwo = null;
    _this.propKeys = ['localOrganism', 'organism', 'showBandLabels', 'orientation', 'dataDir', 'chrHeight', 'chrWidth', 'chrMargin', 'resolution', 'ploidy', 'sex', 'annotationsColor', 'annotationHeight', 'annotationsLayout', 'annotationsPath', 'style', 'chromosomes', 'rotatable', 'showChromosomeLabels', 'showFullyBanded', 'showNonNuclearChromsomes', 'annotationTracks', 'annotations', 'assembly', 'barWidth', 'filterable', 'homology', 'perspective', 'fullChromosomeLabels'];
    _this.onBrushHandler = _this.onBrushHandler.bind(_assertThisInitialized(_this));
    _this.onLoadHandler = _this.onLoadHandler.bind(_assertThisInitialized(_this));
    _this.onRotateHandler = _this.onRotateHandler.bind(_assertThisInitialized(_this));
    _this.onHomologyHandler = _this.onHomologyHandler.bind(_assertThisInitialized(_this));
    _this.onToolTipHandler = _this.onToolTipHandler.bind(_assertThisInitialized(_this));
    _this.onMouseOverHandler = _this.onMouseOverHandler.bind(_assertThisInitialized(_this));
    _this.setConfig = _this.setConfig.bind(_assertThisInitialized(_this));
    _this.initIdeogram = _this.initIdeogram.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Ideogram, [{
    key: "onHomologyHandler",
    value: function onHomologyHandler() {
      /**
       * An event handler used to compare two chromosomes,
       * where the user can specify the connection
       * between two points of two chromosomes. The user
       * can supply the homology locations using the
       * 'homology' prop.
       */
      var chrs = this.ideogram.chromosomes;
      var chrOne = null;
      var chrTwo = null;
      var organism = this.props.organism;
      var chromosomes = this.props.chromosomes;
      var homology = this.props.homology;

      if (typeof this.props.organism !== 'string') {
        chrOne = chrs[homology.chrOne.organism][chromosomes[organism[0]]];
        chrTwo = chrs[homology.chrTwo.organism][chromosomes[organism[1]]];
      } else {
        chrOne = chrs[homology.chrOne.organism][chromosomes[0]];
        chrTwo = chrs[homology.chrTwo.organism][chromosomes[1]];
      }

      var par1X = {
        chr: chrOne,
        start: homology.chrOne.start[0],
        stop: homology.chrOne.stop[0]
      };
      var par1Y = {
        chr: chrTwo,
        start: homology.chrTwo.start[0],
        stop: homology.chrTwo.stop[0]
      };
      var par2X = {
        chr: chrOne,
        start: homology.chrOne.start[1],
        stop: homology.chrOne.stop[1]
      };
      var par2Y = {
        chr: chrTwo,
        start: homology.chrTwo.start[1],
        stop: homology.chrTwo.stop[1]
      };
      var regions = [{
        r1: par1X,
        r2: par1Y
      }, {
        r1: par2X,
        r2: par2Y
      }];
      this.ideogram.drawSynteny(regions);
    }
  }, {
    key: "onToolTipHandler",
    value: function onToolTipHandler() {
      /**
       * An event handler that is called by onMouseHover handler, which
       * returns the annotation the mouse hovered over with the prop
       * 'annotationsData'.
       */
      this.tooltipDataTwo = this.tooltipData;
      this.props.setProps({
        annotationsData: this.tooltipData
      });
    }
  }, {
    key: "onBrushHandler",
    value: function onBrushHandler() {
      /**
       * An event handler that is called when an Ideogram
       * is using the brush prop. This event handler
       * returns brush data in to the Dash application
       * with the prop 'brushData'.
       */
      var r = this.ideogram.selectedRegion,
          start = r.from.toLocaleString(),
          end = r.to.toLocaleString(),
          extent = r.extent.toLocaleString();

      if (typeof this.props.brush !== 'undefined') {
        this.props.setProps({
          brushData: {
            start: start,
            end: end,
            extent: extent
          }
        });
      }
    }
  }, {
    key: "onLoadHandler",
    value: function onLoadHandler() {
      /**
       *  An event handler that will load a function depending on
       * whether the brush prop is activated, or the homology prop
       * is activated. This prop is activated on the loading of the
       * Ideogram.
       */
      if (typeof this.props.brush !== 'undefined') {
        this.onBrushHandler();
      } else if (typeof this.props.homology !== 'undefined') {
        this.onHomologyHandler();
      }

      return null;
    }
  }, {
    key: "onRotateHandler",
    value: function onRotateHandler() {
      /**
       * An event handler that returns 'true' or 'false' if the
       * ideogram is rotated. The user can use the prop 'rotated'
       * in their Dash application to see this effect.
       */
      this.isRotated = this.isRotated ? false : true;
      this.props.setProps({
        rotated: this.isRotated
      });
    }
  }, {
    key: "onMouseOverHandler",
    value: function onMouseOverHandler() {
      /**
       * Event handler that activates when you hover the mouse over an annotation.
       * This event handler allows the user to add an prop `onMouseOver` into their
       * Dash application, that will return the annotation that the mouse hovers over.
       */
      this.tooltipData = document.getElementById('_ideogramTooltip').innerHTML;
      this.tooltipDataTwo = this.tooltipData !== this.tooltipDataTwo ? this.onToolTipHandler() : document.getElementById('_ideogramTooltip').innerHTML;
    }
  }, {
    key: "setConfig",
    value: function setConfig() {
      // Pass in all props into config except setProps
      var config = Object(ramda__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(['setProps'], this.props); // Event handlers

      config.onDidRotate = this.onRotateHandler;
      config.onBrushMove = this.props.brush ? this.onBrushHandler : null;
      config.onLoad = this.onLoadHandler;
      config.container = '#ideogram-container-' + this.props.id;
      return config;
    }
  }, {
    key: "initIdeogram",
    value: function initIdeogram() {
      // Used to pass in a local dataset
      if (this.props.localOrganism) {
        this.props.dataDir = null;
        window.chrBands = this.props.localOrganism;
      }

      this.ideogram = new ideogram__WEBPACK_IMPORTED_MODULE_1___default.a(this.setConfig());
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      return this.propKeys.some(function (currentKey) {
        return _this2.props[currentKey] !== nextProps[currentKey];
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initIdeogram();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      // Have to remove old data, because it breaks new instances
      delete window.chrBands;
      this.initIdeogram();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      delete window.chrBands;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: this.props.id,
        className: this.props.className,
        style: this.props.style
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, Object(ramda__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(['setProps'], this.props), {
        id: 'ideogram-container-' + this.props.id,
        onMouseOver: this.onMouseOverHandler
      })));
    }
  }]);

  return Ideogram;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


Ideogram.defaultProps = _components_Ideogram_react__WEBPACK_IMPORTED_MODULE_3__[/* defaultProps */ "b"];
Ideogram.propTypes = _components_Ideogram_react__WEBPACK_IMPORTED_MODULE_3__[/* propTypes */ "c"];

/***/ })

}]);