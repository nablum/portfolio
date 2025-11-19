(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [414],
  {
    44: (t, e, r) => {
      "use strict";
      r.d(e, { R: () => n });
      var i = r(2115);
      function n(t) {
        return (0, i.forwardRef)(t);
      }
    },
    845: (t, e, r) => {
      "use strict";
      r.d(e, { t: () => i });
      let i = (0, r(2115).createContext)(null);
    },
    869: (t, e, r) => {
      "use strict";
      r.d(e, { L: () => i });
      let i = (0, r(2115).createContext)({});
    },
    986: (t, e, r) => {
      "use strict";
      r.d(e, {
        E: () => x,
        T: () => p,
        _: () => d,
        a: () => m,
        c: () => y,
        h: () => g,
        w: () => h,
      });
      var i = r(2115),
        n = r(5041),
        a = r(9630),
        o = function (t) {
          var e = new WeakMap();
          return function (r) {
            if (e.has(r)) return e.get(r);
            var i = t(r);
            return e.set(r, i), i;
          };
        },
        s = r(8816),
        l = r(7726),
        u = r(8862),
        c = i.createContext(
          "undefined" != typeof HTMLElement ? (0, n.A)({ key: "css" }) : null
        );
      c.Provider;
      var d = function () {
          return (0, i.useContext)(c);
        },
        h = function (t) {
          return (0, i.forwardRef)(function (e, r) {
            return t(e, (0, i.useContext)(c), r);
          });
        },
        p = i.createContext({}),
        f = o(function (t) {
          return o(function (e) {
            return "function" == typeof e ? e(t) : (0, a.A)({}, t, e);
          });
        }),
        m = function (t) {
          var e = i.useContext(p);
          return (
            t.theme !== e && (e = f(e)(t.theme)),
            i.createElement(p.Provider, { value: e }, t.children)
          );
        },
        g = {}.hasOwnProperty,
        v = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        y = function (t, e) {
          var r = {};
          for (var i in e) g.call(e, i) && (r[i] = e[i]);
          return (r[v] = t), r;
        },
        b = function (t) {
          var e = t.cache,
            r = t.serialized,
            i = t.isStringTag;
          return (
            (0, s.SF)(e, r, i),
            (0, u.s)(function () {
              return (0, s.sk)(e, r, i);
            }),
            null
          );
        },
        x = h(function (t, e, r) {
          var n = t.css;
          "string" == typeof n &&
            void 0 !== e.registered[n] &&
            (n = e.registered[n]);
          var a = t[v],
            o = [n],
            u = "";
          "string" == typeof t.className
            ? (u = (0, s.Rk)(e.registered, o, t.className))
            : null != t.className && (u = t.className + " ");
          var c = (0, l.J)(o, void 0, i.useContext(p));
          u += e.key + "-" + c.name;
          var d = {};
          for (var h in t)
            g.call(t, h) && "css" !== h && h !== v && (d[h] = t[h]);
          return (
            (d.className = u),
            r && (d.ref = r),
            i.createElement(
              i.Fragment,
              null,
              i.createElement(b, {
                cache: e,
                serialized: c,
                isStringTag: "string" == typeof a,
              }),
              i.createElement(a, d)
            )
          );
        });
    },
    1508: (t, e, r) => {
      "use strict";
      r.d(e, { Q: () => i });
      let i = (0, r(2115).createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    1592: (t, e, r) => {
      "use strict";
      r.d(e, { T: () => s, s: () => l });
      let i = {
          open: (t, e) =>
            `${t}[data-open], ${t}[open], ${t}[data-state=open] ${e}`,
          closed: (t, e) => `${t}[data-closed], ${t}[data-state=closed] ${e}`,
          hover: (t, e) => `${t}:hover ${e}, ${t}[data-hover] ${e}`,
          focus: (t, e) => `${t}:focus ${e}, ${t}[data-focus] ${e}`,
          focusVisible: (t, e) => `${t}:focus-visible ${e}`,
          focusWithin: (t, e) => `${t}:focus-within ${e}`,
          active: (t, e) => `${t}:active ${e}, ${t}[data-active] ${e}`,
          disabled: (t, e) => `${t}:disabled ${e}, ${t}[data-disabled] ${e}`,
          invalid: (t, e) => `${t}:invalid ${e}, ${t}[data-invalid] ${e}`,
          checked: (t, e) => `${t}:checked ${e}, ${t}[data-checked] ${e}`,
          placeholderShown: (t, e) => `${t}:placeholder-shown ${e}`,
        },
        n = (t) =>
          o((e) => t(e, "&"), "[role=group]", "[data-group]", ".group"),
        a = (t) => o((e) => t(e, "~ &"), "[data-peer]", ".peer"),
        o = (t, ...e) => e.map(t).join(", "),
        s = {
          _hover: "&:hover, &[data-hover]",
          _active: "&:active, &[data-active]",
          _focus: "&:focus, &[data-focus]",
          _highlighted: "&[data-highlighted]",
          _focusWithin: "&:focus-within, &[data-focus-within]",
          _focusVisible: "&:focus-visible, &[data-focus-visible]",
          _disabled:
            "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
          _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
          _before: "&::before",
          _after: "&::after",
          _empty: "&:empty, &[data-empty]",
          _expanded:
            "&[aria-expanded=true], &[data-expanded], &[data-state=expanded]",
          _checked:
            "&[aria-checked=true], &[data-checked], &[data-state=checked]",
          _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
          _pressed: "&[aria-pressed=true], &[data-pressed]",
          _invalid: "&[aria-invalid=true], &[data-invalid]",
          _valid: "&[data-valid], &[data-state=valid]",
          _loading: "&[data-loading], &[aria-busy=true]",
          _selected: "&[aria-selected=true], &[data-selected]",
          _hidden: "&[hidden], &[data-hidden]",
          _autofill: "&:-webkit-autofill",
          _even: "&:nth-of-type(even)",
          _odd: "&:nth-of-type(odd)",
          _first: "&:first-of-type",
          _firstLetter: "&::first-letter",
          _last: "&:last-of-type",
          _notFirst: "&:not(:first-of-type)",
          _notLast: "&:not(:last-of-type)",
          _visited: "&:visited",
          _activeLink: "&[aria-current=page]",
          _activeStep: "&[aria-current=step]",
          _indeterminate:
            "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate], &[data-state=indeterminate]",
          _groupOpen: n(i.open),
          _groupClosed: n(i.closed),
          _groupHover: n(i.hover),
          _peerHover: a(i.hover),
          _groupFocus: n(i.focus),
          _peerFocus: a(i.focus),
          _groupFocusVisible: n(i.focusVisible),
          _peerFocusVisible: a(i.focusVisible),
          _groupActive: n(i.active),
          _peerActive: a(i.active),
          _groupDisabled: n(i.disabled),
          _peerDisabled: a(i.disabled),
          _groupInvalid: n(i.invalid),
          _peerInvalid: a(i.invalid),
          _groupChecked: n(i.checked),
          _peerChecked: a(i.checked),
          _groupFocusWithin: n(i.focusWithin),
          _peerFocusWithin: a(i.focusWithin),
          _peerPlaceholderShown: a(i.placeholderShown),
          _placeholder: "&::placeholder, &[data-placeholder]",
          _placeholderShown: "&:placeholder-shown, &[data-placeholder-shown]",
          _fullScreen: "&:fullscreen, &[data-fullscreen]",
          _selection: "&::selection",
          _rtl: "[dir=rtl] &, &[dir=rtl]",
          _ltr: "[dir=ltr] &, &[dir=ltr]",
          _mediaDark: "@media (prefers-color-scheme: dark)",
          _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
          _dark:
            ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
          _light:
            ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
          _horizontal: "&[data-orientation=horizontal]",
          _vertical: "&[data-orientation=vertical]",
          _open: "&[data-open], &[open], &[data-state=open]",
          _closed: "&[data-closed], &[data-state=closed]",
          _complete: "&[data-complete]",
          _incomplete: "&[data-incomplete]",
          _current: "&[data-current]",
        },
        l = Object.keys(s);
    },
    2082: (t, e, r) => {
      "use strict";
      r.d(e, { tF: () => o, xQ: () => a });
      var i = r(2115),
        n = r(845);
      function a(t = !0) {
        let e = (0, i.useContext)(n.t);
        if (null === e) return [!0, null];
        let { isPresent: r, onExitComplete: o, register: s } = e,
          l = (0, i.useId)();
        (0, i.useEffect)(() => {
          if (t) return s(l);
        }, [t]);
        let u = (0, i.useCallback)(() => t && o && o(l), [l, o, t]);
        return !r && o ? [!1, u] : [!0];
      }
      function o() {
        var t;
        return null === (t = (0, i.useContext)(n.t)) || t.isPresent;
      }
    },
    2198: (t, e, r) => {
      "use strict";
      function i(t, e, r) {
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
          let i = document;
          e && (i = e.current);
          let n = r?.[t] ?? i.querySelectorAll(t);
          return n ? Array.from(n) : [];
        }
        return Array.from(t);
      }
      r.d(e, { K: () => i });
    },
    2622: (t, e, r) => {
      "use strict";
      r.d(e, { cx: () => i });
      let i = (...t) => t.filter(Boolean).join(" ");
    },
    2885: (t, e, r) => {
      "use strict";
      r.d(e, { M: () => n });
      var i = r(2115);
      function n(t) {
        let e = (0, i.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    3304: (t, e, r) => {
      "use strict";
      function i(t, e = []) {
        let r = Object.assign({}, t);
        for (let t of e) t in r && delete r[t];
        return r;
      }
      r.d(e, { c: () => i });
    },
    3363: (t, e, r) => {
      t = r.nmd(t);
      var i,
        n,
        a,
        o = "__lodash_hash_undefined__",
        s = "[object Arguments]",
        l = "[object Function]",
        u = "[object Object]",
        c = /^\[object .+?Constructor\]$/,
        d = /^(?:0|[1-9]\d*)$/,
        h = {};
      (h["[object Float32Array]"] =
        h["[object Float64Array]"] =
        h["[object Int8Array]"] =
        h["[object Int16Array]"] =
        h["[object Int32Array]"] =
        h["[object Uint8Array]"] =
        h["[object Uint8ClampedArray]"] =
        h["[object Uint16Array]"] =
        h["[object Uint32Array]"] =
          !0),
        (h[s] =
          h["[object Array]"] =
          h["[object ArrayBuffer]"] =
          h["[object Boolean]"] =
          h["[object DataView]"] =
          h["[object Date]"] =
          h["[object Error]"] =
          h[l] =
          h["[object Map]"] =
          h["[object Number]"] =
          h[u] =
          h["[object RegExp]"] =
          h["[object Set]"] =
          h["[object String]"] =
          h["[object WeakMap]"] =
            !1);
      var p = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
        f = "object" == typeof self && self && self.Object === Object && self,
        m = p || f || Function("return this")(),
        g = e && !e.nodeType && e,
        v = g && t && !t.nodeType && t,
        y = v && v.exports === g,
        b = y && p.process,
        x = (function () {
          try {
            var t = v && v.require && v.require("util").types;
            if (t) return t;
            return b && b.binding && b.binding("util");
          } catch (t) {}
        })(),
        k = x && x.isTypedArray,
        w = Array.prototype,
        S = Function.prototype,
        T = Object.prototype,
        P = m["__core-js_shared__"],
        A = S.toString,
        R = T.hasOwnProperty,
        C = (function () {
          var t = /[^.]+$/.exec((P && P.keys && P.keys.IE_PROTO) || "");
          return t ? "Symbol(src)_1." + t : "";
        })(),
        E = T.toString,
        M = A.call(Object),
        _ = RegExp(
          "^" +
            A.call(R)
              .replace(/[\\^$.*+?()[\]{}|]/g, "\\$&")
              .replace(
                /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
                "$1.*?"
              ) +
            "$"
        ),
        j = y ? m.Buffer : void 0,
        B = m.Symbol,
        V = m.Uint8Array,
        D = j ? j.allocUnsafe : void 0,
        O =
          ((n = Object.getPrototypeOf),
          (a = Object),
          function (t) {
            return n(a(t));
          }),
        L = Object.create,
        I = T.propertyIsEnumerable,
        F = w.splice,
        $ = B ? B.toStringTag : void 0,
        W = (function () {
          try {
            var t = ta(Object, "defineProperty");
            return t({}, "", {}), t;
          } catch (t) {}
        })(),
        z = j ? j.isBuffer : void 0,
        U = Math.max,
        N = Date.now,
        H = ta(m, "Map"),
        Y = ta(Object, "create"),
        X = (function () {
          function t() {}
          return function (e) {
            if (!tv(e)) return {};
            if (L) return L(e);
            t.prototype = e;
            var r = new t();
            return (t.prototype = void 0), r;
          };
        })();
      function G(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function q(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function K(t) {
        var e = -1,
          r = null == t ? 0 : t.length;
        for (this.clear(); ++e < r; ) {
          var i = t[e];
          this.set(i[0], i[1]);
        }
      }
      function Z(t) {
        var e = (this.__data__ = new q(t));
        this.size = e.size;
      }
      function J(t, e, r) {
        ((void 0 === r || tc(t[e], r)) && (void 0 !== r || e in t)) ||
          tt(t, e, r);
      }
      function Q(t, e) {
        for (var r = t.length; r--; ) if (tc(t[r][0], e)) return r;
        return -1;
      }
      function tt(t, e, r) {
        "__proto__" == e && W
          ? W(t, e, {
              configurable: !0,
              enumerable: !0,
              value: r,
              writable: !0,
            })
          : (t[e] = r);
      }
      (G.prototype.clear = function () {
        (this.__data__ = Y ? Y(null) : {}), (this.size = 0);
      }),
        (G.prototype.delete = function (t) {
          var e = this.has(t) && delete this.__data__[t];
          return (this.size -= +!!e), e;
        }),
        (G.prototype.get = function (t) {
          var e = this.__data__;
          if (Y) {
            var r = e[t];
            return r === o ? void 0 : r;
          }
          return R.call(e, t) ? e[t] : void 0;
        }),
        (G.prototype.has = function (t) {
          var e = this.__data__;
          return Y ? void 0 !== e[t] : R.call(e, t);
        }),
        (G.prototype.set = function (t, e) {
          var r = this.__data__;
          return (
            (this.size += +!this.has(t)),
            (r[t] = Y && void 0 === e ? o : e),
            this
          );
        }),
        (q.prototype.clear = function () {
          (this.__data__ = []), (this.size = 0);
        }),
        (q.prototype.delete = function (t) {
          var e = this.__data__,
            r = Q(e, t);
          return (
            !(r < 0) &&
            (r == e.length - 1 ? e.pop() : F.call(e, r, 1), --this.size, !0)
          );
        }),
        (q.prototype.get = function (t) {
          var e = this.__data__,
            r = Q(e, t);
          return r < 0 ? void 0 : e[r][1];
        }),
        (q.prototype.has = function (t) {
          return Q(this.__data__, t) > -1;
        }),
        (q.prototype.set = function (t, e) {
          var r = this.__data__,
            i = Q(r, t);
          return i < 0 ? (++this.size, r.push([t, e])) : (r[i][1] = e), this;
        }),
        (K.prototype.clear = function () {
          (this.size = 0),
            (this.__data__ = {
              hash: new G(),
              map: new (H || q)(),
              string: new G(),
            });
        }),
        (K.prototype.delete = function (t) {
          var e = tn(this, t).delete(t);
          return (this.size -= +!!e), e;
        }),
        (K.prototype.get = function (t) {
          return tn(this, t).get(t);
        }),
        (K.prototype.has = function (t) {
          return tn(this, t).has(t);
        }),
        (K.prototype.set = function (t, e) {
          var r = tn(this, t),
            i = r.size;
          return r.set(t, e), (this.size += +(r.size != i)), this;
        }),
        (Z.prototype.clear = function () {
          (this.__data__ = new q()), (this.size = 0);
        }),
        (Z.prototype.delete = function (t) {
          var e = this.__data__,
            r = e.delete(t);
          return (this.size = e.size), r;
        }),
        (Z.prototype.get = function (t) {
          return this.__data__.get(t);
        }),
        (Z.prototype.has = function (t) {
          return this.__data__.has(t);
        }),
        (Z.prototype.set = function (t, e) {
          var r = this.__data__;
          if (r instanceof q) {
            var i = r.__data__;
            if (!H || i.length < 199)
              return i.push([t, e]), (this.size = ++r.size), this;
            r = this.__data__ = new K(i);
          }
          return r.set(t, e), (this.size = r.size), this;
        });
      var te = function (t, e, r) {
        for (var i = -1, n = Object(t), a = r(t), o = a.length; o--; ) {
          var s = a[++i];
          if (!1 === e(n[s], s, n)) break;
        }
        return t;
      };
      function tr(t) {
        var e;
        return null == t
          ? void 0 === t
            ? "[object Undefined]"
            : "[object Null]"
          : $ && $ in Object(t)
          ? (function (t) {
              var e = R.call(t, $),
                r = t[$];
              try {
                t[$] = void 0;
                var i = !0;
              } catch (t) {}
              var n = E.call(t);
              return i && (e ? (t[$] = r) : delete t[$]), n;
            })(t)
          : ((e = t), E.call(e));
      }
      function ti(t) {
        return ty(t) && tr(t) == s;
      }
      function tn(t, e) {
        var r,
          i,
          n = t.__data__;
        return (
          "string" == (i = typeof (r = e)) ||
          "number" == i ||
          "symbol" == i ||
          "boolean" == i
            ? "__proto__" !== r
            : null === r
        )
          ? n["string" == typeof e ? "string" : "hash"]
          : n.map;
      }
      function ta(t, e) {
        var r,
          i = null == t ? void 0 : t[e];
        return !(!tv(i) || ((r = i), C && C in r)) &&
          (tm(i) ? _ : c).test(
            (function (t) {
              if (null != t) {
                try {
                  return A.call(t);
                } catch (t) {}
                try {
                  return t + "";
                } catch (t) {}
              }
              return "";
            })(i)
          )
          ? i
          : void 0;
      }
      function to(t, e) {
        var r = typeof t;
        return (
          !!(e = null == e ? 0x1fffffffffffff : e) &&
          ("number" == r || ("symbol" != r && d.test(t))) &&
          t > -1 &&
          t % 1 == 0 &&
          t < e
        );
      }
      function ts(t) {
        var e = t && t.constructor;
        return t === (("function" == typeof e && e.prototype) || T);
      }
      function tl(t, e) {
        if (
          ("constructor" !== e || "function" != typeof t[e]) &&
          "__proto__" != e
        )
          return t[e];
      }
      var tu = (function (t) {
        var e = 0,
          r = 0;
        return function () {
          var i = N(),
            n = 16 - (i - r);
          if (((r = i), n > 0)) {
            if (++e >= 800) return arguments[0];
          } else e = 0;
          return t.apply(void 0, arguments);
        };
      })(
        W
          ? function (t, e) {
              var r;
              return W(t, "toString", {
                configurable: !0,
                enumerable: !1,
                value:
                  ((r = e),
                  function () {
                    return r;
                  }),
                writable: !0,
              });
            }
          : tw
      );
      function tc(t, e) {
        return t === e || (t != t && e != e);
      }
      var td = ti(
          (function () {
            return arguments;
          })()
        )
          ? ti
          : function (t) {
              return ty(t) && R.call(t, "callee") && !I.call(t, "callee");
            },
        th = Array.isArray;
      function tp(t) {
        return null != t && tg(t.length) && !tm(t);
      }
      var tf =
        z ||
        function () {
          return !1;
        };
      function tm(t) {
        if (!tv(t)) return !1;
        var e = tr(t);
        return (
          e == l ||
          "[object GeneratorFunction]" == e ||
          "[object AsyncFunction]" == e ||
          "[object Proxy]" == e
        );
      }
      function tg(t) {
        return (
          "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
        );
      }
      function tv(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e);
      }
      function ty(t) {
        return null != t && "object" == typeof t;
      }
      var tb = k
        ? function (t) {
            return k(t);
          }
        : function (t) {
            return ty(t) && tg(t.length) && !!h[tr(t)];
          };
      function tx(t) {
        return tp(t)
          ? (function (t, e) {
              var r = th(t),
                i = !r && td(t),
                n = !r && !i && tf(t),
                a = !r && !i && !n && tb(t),
                o = r || i || n || a,
                s = o
                  ? (function (t, e) {
                      for (var r = -1, i = Array(t); ++r < t; ) i[r] = e(r);
                      return i;
                    })(t.length, String)
                  : [],
                l = s.length;
              for (var u in t)
                (e || R.call(t, u)) &&
                  !(
                    o &&
                    ("length" == u ||
                      (n && ("offset" == u || "parent" == u)) ||
                      (a &&
                        ("buffer" == u ||
                          "byteLength" == u ||
                          "byteOffset" == u)) ||
                      to(u, l))
                  ) &&
                  s.push(u);
              return s;
            })(t, !0)
          : (function (t) {
              if (!tv(t))
                return (function (t) {
                  var e = [];
                  if (null != t) for (var r in Object(t)) e.push(r);
                  return e;
                })(t);
              var e = ts(t),
                r = [];
              for (var i in t)
                ("constructor" == i && (e || !R.call(t, i))) || r.push(i);
              return r;
            })(t);
      }
      var tk = (function (t) {
        var e, r, i, n;
        return tu(
          ((r = e =
            function (e, r) {
              var i = -1,
                n = r.length,
                a = n > 1 ? r[n - 1] : void 0,
                o = n > 2 ? r[2] : void 0;
              for (
                a = t.length > 3 && "function" == typeof a ? (n--, a) : void 0,
                  o &&
                    (function (t, e, r) {
                      if (!tv(r)) return !1;
                      var i = typeof e;
                      return (
                        ("number" == i
                          ? !!(tp(r) && to(e, r.length))
                          : "string" == i && (e in r)) && tc(r[e], t)
                      );
                    })(r[0], r[1], o) &&
                    ((a = n < 3 ? void 0 : a), (n = 1)),
                  e = Object(e);
                ++i < n;

              ) {
                var s = r[i];
                s && t(e, s, i, a);
              }
              return e;
            }),
          (i = void 0),
          (n = tw),
          (i = U(void 0 === i ? r.length - 1 : i, 0)),
          function () {
            for (
              var t = arguments, e = -1, a = U(t.length - i, 0), o = Array(a);
              ++e < a;

            )
              o[e] = t[i + e];
            e = -1;
            for (var s = Array(i + 1); ++e < i; ) s[e] = t[e];
            return (
              (s[i] = n(o)),
              (function (t, e, r) {
                switch (r.length) {
                  case 0:
                    return t.call(e);
                  case 1:
                    return t.call(e, r[0]);
                  case 2:
                    return t.call(e, r[0], r[1]);
                  case 3:
                    return t.call(e, r[0], r[1], r[2]);
                }
                return t.apply(e, r);
              })(r, this, s)
            );
          }),
          e + ""
        );
      })(function (t, e, r, i) {
        !(function t(e, r, i, n, a) {
          e !== r &&
            te(
              r,
              function (o, s) {
                if ((a || (a = new Z()), tv(o)))
                  !(function (t, e, r, i, n, a, o) {
                    var s = tl(t, r),
                      l = tl(e, r),
                      c = o.get(l);
                    if (c) {
                      J(t, r, c);
                      return;
                    }
                    var d = a ? a(s, l, r + "", t, e, o) : void 0,
                      h = void 0 === d;
                    if (h) {
                      var p,
                        f,
                        m,
                        g,
                        v,
                        y,
                        b,
                        x = th(l),
                        k = !x && tf(l),
                        w = !x && !k && tb(l);
                      (d = l),
                        x || k || w
                          ? th(s)
                            ? (d = s)
                            : ty((p = s)) && tp(p)
                            ? (d = (function (t, e) {
                                var r = -1,
                                  i = t.length;
                                for (e || (e = Array(i)); ++r < i; )
                                  e[r] = t[r];
                                return e;
                              })(s))
                            : k
                            ? ((h = !1),
                              (d = (function (t, e) {
                                if (e) return t.slice();
                                var r = t.length,
                                  i = D ? D(r) : new t.constructor(r);
                                return t.copy(i), i;
                              })(l, !0)))
                            : w
                            ? ((h = !1),
                              (f = l),
                              (v =
                                (new V(
                                  (g = new (m = f.buffer).constructor(
                                    m.byteLength
                                  ))
                                ).set(new V(m)),
                                g)),
                              (d = new f.constructor(
                                v,
                                f.byteOffset,
                                f.length
                              )))
                            : (d = [])
                          : (function (t) {
                              if (!ty(t) || tr(t) != u) return !1;
                              var e = O(t);
                              if (null === e) return !0;
                              var r = R.call(e, "constructor") && e.constructor;
                              return (
                                "function" == typeof r &&
                                r instanceof r &&
                                A.call(r) == M
                              );
                            })(l) || td(l)
                          ? ((d = s),
                            td(s)
                              ? (d = (function (t, e, r, i) {
                                  var n = !r;
                                  r || (r = {});
                                  for (var a = -1, o = e.length; ++a < o; ) {
                                    var s = e[a],
                                      l = void 0;
                                    void 0 === l && (l = t[s]),
                                      n
                                        ? tt(r, s, l)
                                        : (function (t, e, r) {
                                            var i = t[e];
                                            (R.call(t, e) &&
                                              tc(i, r) &&
                                              (void 0 !== r || e in t)) ||
                                              tt(t, e, r);
                                          })(r, s, l);
                                  }
                                  return r;
                                })((y = s), tx(y)))
                              : (!tv(s) || tm(s)) &&
                                (d =
                                  "function" != typeof (b = l).constructor ||
                                  ts(b)
                                    ? {}
                                    : X(O(b))))
                          : (h = !1);
                    }
                    h && (o.set(l, d), n(d, l, i, a, o), o.delete(l)),
                      J(t, r, d);
                  })(e, r, s, i, t, n, a);
                else {
                  var l = n ? n(tl(e, s), o, s + "", e, r, a) : void 0;
                  void 0 === l && (l = o), J(e, s, l);
                }
              },
              tx
            );
        })(t, e, r, i);
      });
      function tw(t) {
        return t;
      }
      t.exports = tk;
    },
    3425: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => n });
      let i = (t) => "function" == typeof t;
      function n(t, ...e) {
        return i(t) ? t(...e) : t;
      }
    },
    3740: (t, e, r) => {
      "use strict";
      r.d(e, { I: () => u });
      var i = r(5155),
        n = r(2622),
        a = r(44),
        o = r(7891),
        s = r(7415);
      let l = {
          path: (0, i.jsxs)("g", {
            stroke: "currentColor",
            strokeWidth: "1.5",
            children: [
              (0, i.jsx)("path", {
                strokeLinecap: "round",
                fill: "none",
                d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25",
              }),
              (0, i.jsx)("path", {
                fill: "currentColor",
                strokeLinecap: "round",
                d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0",
              }),
              (0, i.jsx)("circle", {
                fill: "none",
                strokeMiterlimit: "10",
                cx: "12",
                cy: "12",
                r: "11.25",
              }),
            ],
          }),
          viewBox: "0 0 24 24",
        },
        u = (0, a.R)((t, e) => {
          let {
              as: r,
              viewBox: a,
              color: u = "currentColor",
              focusable: c = !1,
              children: d,
              className: h,
              __css: p,
              ...f
            } = t,
            m = (0, n.cx)("chakra-icon", h),
            g = (0, o.V)("Icon", t),
            v = {
              ref: e,
              focusable: c,
              className: m,
              __css: {
                w: "1em",
                h: "1em",
                display: "inline-block",
                lineHeight: "1em",
                flexShrink: 0,
                color: u,
                ...p,
                ...g,
              },
            },
            y = null != a ? a : l.viewBox;
          if (r && "string" != typeof r)
            return (0, i.jsx)(s.B.svg, { as: r, ...v, ...f });
          let b = null != d ? d : l.path;
          return (0, i.jsx)(s.B.svg, {
            verticalAlign: "middle",
            viewBox: y,
            ...v,
            ...f,
            children: b,
          });
        });
      u.displayName = "Icon";
    },
    4088: (t, e, r) => {
      "use strict";
      function i(t) {
        var e = Object.create(null);
        return function (r) {
          return void 0 === e[r] && (e[r] = t(r)), e[r];
        };
      }
      r.d(e, { A: () => i });
    },
    5041: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => N });
      var i = (function () {
          function t(t) {
            var e = this;
            (this._insertTag = function (t) {
              var r;
              (r =
                0 === e.tags.length
                  ? e.insertionPoint
                    ? e.insertionPoint.nextSibling
                    : e.prepend
                    ? e.container.firstChild
                    : e.before
                  : e.tags[e.tags.length - 1].nextSibling),
                e.container.insertBefore(t, r),
                e.tags.push(t);
            }),
              (this.isSpeedy = void 0 === t.speedy || t.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = t.nonce),
              (this.key = t.key),
              (this.container = t.container),
              (this.prepend = t.prepend),
              (this.insertionPoint = t.insertionPoint),
              (this.before = null);
          }
          var e = t.prototype;
          return (
            (e.hydrate = function (t) {
              t.forEach(this._insertTag);
            }),
            (e.insert = function (t) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var e;
                this._insertTag(
                  ((e = document.createElement("style")).setAttribute(
                    "data-emotion",
                    this.key
                  ),
                  void 0 !== this.nonce && e.setAttribute("nonce", this.nonce),
                  e.appendChild(document.createTextNode("")),
                  e.setAttribute("data-s", ""),
                  e)
                );
              }
              var r = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var i = (function (t) {
                  if (t.sheet) return t.sheet;
                  for (var e = 0; e < document.styleSheets.length; e++)
                    if (document.styleSheets[e].ownerNode === t)
                      return document.styleSheets[e];
                })(r);
                try {
                  i.insertRule(t, i.cssRules.length);
                } catch (t) {}
              } else r.appendChild(document.createTextNode(t));
              this.ctr++;
            }),
            (e.flush = function () {
              this.tags.forEach(function (t) {
                var e;
                return null == (e = t.parentNode) ? void 0 : e.removeChild(t);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            t
          );
        })(),
        n = Math.abs,
        a = String.fromCharCode,
        o = Object.assign;
      function s(t, e, r) {
        return t.replace(e, r);
      }
      function l(t, e) {
        return t.indexOf(e);
      }
      function u(t, e) {
        return 0 | t.charCodeAt(e);
      }
      function c(t, e, r) {
        return t.slice(e, r);
      }
      function d(t) {
        return t.length;
      }
      function h(t, e) {
        return e.push(t), t;
      }
      var p = 1,
        f = 1,
        m = 0,
        g = 0,
        v = 0,
        y = "";
      function b(t, e, r, i, n, a, o) {
        return {
          value: t,
          root: e,
          parent: r,
          type: i,
          props: n,
          children: a,
          line: p,
          column: f,
          length: o,
          return: "",
        };
      }
      function x(t, e) {
        return o(
          b("", null, null, "", null, null, 0),
          t,
          { length: -t.length },
          e
        );
      }
      function k() {
        return (v = g < m ? u(y, g++) : 0), f++, 10 === v && ((f = 1), p++), v;
      }
      function w() {
        return u(y, g);
      }
      function S(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function T(t) {
        return (p = f = 1), (m = d((y = t))), (g = 0), [];
      }
      function P(t) {
        var e, r;
        return ((e = g - 1),
        (r = (function t(e) {
          for (; k(); )
            switch (v) {
              case e:
                return g;
              case 34:
              case 39:
                34 !== e && 39 !== e && t(v);
                break;
              case 40:
                41 === e && t(e);
                break;
              case 92:
                k();
            }
          return g;
        })(91 === t ? t + 2 : 40 === t ? t + 1 : t)),
        c(y, e, r)).trim();
      }
      var A = "-ms-",
        R = "-moz-",
        C = "-webkit-",
        E = "comm",
        M = "rule",
        _ = "decl",
        j = "@keyframes";
      function B(t, e) {
        for (var r = "", i = t.length, n = 0; n < i; n++)
          r += e(t[n], n, t, e) || "";
        return r;
      }
      function V(t, e, r, i) {
        switch (t.type) {
          case "@layer":
            if (t.children.length) break;
          case "@import":
          case _:
            return (t.return = t.return || t.value);
          case E:
            return "";
          case j:
            return (t.return = t.value + "{" + B(t.children, i) + "}");
          case M:
            t.value = t.props.join(",");
        }
        return d((r = B(t.children, i)))
          ? (t.return = t.value + "{" + r + "}")
          : "";
      }
      function D(t, e, r, i, a, o, l, u, d, h, p) {
        for (
          var f = a - 1,
            m = 0 === a ? o : [""],
            g = m.length,
            v = 0,
            y = 0,
            x = 0;
          v < i;
          ++v
        )
          for (
            var k = 0, w = c(t, f + 1, (f = n((y = l[v])))), S = t;
            k < g;
            ++k
          )
            (S = (y > 0 ? m[k] + " " + w : s(w, /&\f/g, m[k])).trim()) &&
              (d[x++] = S);
        return b(t, e, r, 0 === a ? M : u, d, h, p);
      }
      function O(t, e, r, i) {
        return b(t, e, r, _, c(t, 0, i), c(t, i + 1, -1), i);
      }
      var L = function (t, e, r) {
          for (
            var i = 0, n = 0;
            (i = n), (n = w()), 38 === i && 12 === n && (e[r] = 1), !S(n);

          )
            k();
          return c(y, t, g);
        },
        I = function (t, e) {
          var r = -1,
            i = 44;
          do
            switch (S(i)) {
              case 0:
                38 === i && 12 === w() && (e[r] = 1), (t[r] += L(g - 1, e, r));
                break;
              case 2:
                t[r] += P(i);
                break;
              case 4:
                if (44 === i) {
                  (t[++r] = 58 === w() ? "&\f" : ""), (e[r] = t[r].length);
                  break;
                }
              default:
                t[r] += a(i);
            }
          while ((i = k()));
          return t;
        },
        F = function (t, e) {
          var r;
          return (r = I(T(t), e)), (y = ""), r;
        },
        $ = new WeakMap(),
        W = function (t) {
          if ("rule" === t.type && t.parent && !(t.length < 1)) {
            for (
              var e = t.value,
                r = t.parent,
                i = t.column === r.column && t.line === r.line;
              "rule" !== r.type;

            )
              if (!(r = r.parent)) return;
            if (
              (1 !== t.props.length || 58 === e.charCodeAt(0) || $.get(r)) &&
              !i
            ) {
              $.set(t, !0);
              for (
                var n = [], a = F(e, n), o = r.props, s = 0, l = 0;
                s < a.length;
                s++
              )
                for (var u = 0; u < o.length; u++, l++)
                  t.props[l] = n[s]
                    ? a[s].replace(/&\f/g, o[u])
                    : o[u] + " " + a[s];
            }
          }
        },
        z = function (t) {
          if ("decl" === t.type) {
            var e = t.value;
            108 === e.charCodeAt(0) &&
              98 === e.charCodeAt(2) &&
              ((t.return = ""), (t.value = ""));
          }
        },
        U = [
          function (t, e, r, i) {
            if (t.length > -1 && !t.return)
              switch (t.type) {
                case _:
                  t.return = (function t(e, r) {
                    switch (
                      45 ^ u(e, 0)
                        ? (((((((r << 2) ^ u(e, 0)) << 2) ^ u(e, 1)) << 2) ^
                            u(e, 2)) <<
                            2) ^
                          u(e, 3)
                        : 0
                    ) {
                      case 5103:
                        return C + "print-" + e + e;
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return C + e + e;
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return C + e + R + e + A + e + e;
                      case 6828:
                      case 4268:
                        return C + e + A + e + e;
                      case 6165:
                        return C + e + A + "flex-" + e + e;
                      case 5187:
                        return (
                          C +
                          e +
                          s(
                            e,
                            /(\w+).+(:[^]+)/,
                            C + "box-$1$2" + A + "flex-$1$2"
                          ) +
                          e
                        );
                      case 5443:
                        return (
                          C + e + A + "flex-item-" + s(e, /flex-|-self/, "") + e
                        );
                      case 4675:
                        return (
                          C +
                          e +
                          A +
                          "flex-line-pack" +
                          s(e, /align-content|flex-|-self/, "") +
                          e
                        );
                      case 5548:
                        return C + e + A + s(e, "shrink", "negative") + e;
                      case 5292:
                        return C + e + A + s(e, "basis", "preferred-size") + e;
                      case 6060:
                        return (
                          C +
                          "box-" +
                          s(e, "-grow", "") +
                          C +
                          e +
                          A +
                          s(e, "grow", "positive") +
                          e
                        );
                      case 4554:
                        return (
                          C + s(e, /([^-])(transform)/g, "$1" + C + "$2") + e
                        );
                      case 6187:
                        return (
                          s(
                            s(
                              s(e, /(zoom-|grab)/, C + "$1"),
                              /(image-set)/,
                              C + "$1"
                            ),
                            e,
                            ""
                          ) + e
                        );
                      case 5495:
                      case 3959:
                        return s(e, /(image-set\([^]*)/, C + "$1$`$1");
                      case 4968:
                        return (
                          s(
                            s(
                              e,
                              /(.+:)(flex-)?(.*)/,
                              C + "box-pack:$3" + A + "flex-pack:$3"
                            ),
                            /s.+-b[^;]+/,
                            "justify"
                          ) +
                          C +
                          e +
                          e
                        );
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return s(e, /(.+)-inline(.+)/, C + "$1$2") + e;
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (d(e) - 1 - r > 6)
                          switch (u(e, r + 1)) {
                            case 109:
                              if (45 !== u(e, r + 4)) break;
                            case 102:
                              return (
                                s(
                                  e,
                                  /(.+:)(.+)-([^]+)/,
                                  "$1" +
                                    C +
                                    "$2-$3$1" +
                                    R +
                                    (108 == u(e, r + 3) ? "$3" : "$2-$3")
                                ) + e
                              );
                            case 115:
                              return ~l(e, "stretch")
                                ? t(s(e, "stretch", "fill-available"), r) + e
                                : e;
                          }
                        break;
                      case 4949:
                        if (115 !== u(e, r + 1)) break;
                      case 6444:
                        switch (u(e, d(e) - 3 - (~l(e, "!important") && 10))) {
                          case 107:
                            return s(e, ":", ":" + C) + e;
                          case 101:
                            return (
                              s(
                                e,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                "$1" +
                                  C +
                                  (45 === u(e, 14) ? "inline-" : "") +
                                  "box$3$1" +
                                  C +
                                  "$2$3$1" +
                                  A +
                                  "$2box$3"
                              ) + e
                            );
                        }
                        break;
                      case 5936:
                        switch (u(e, r + 11)) {
                          case 114:
                            return (
                              C + e + A + s(e, /[svh]\w+-[tblr]{2}/, "tb") + e
                            );
                          case 108:
                            return (
                              C +
                              e +
                              A +
                              s(e, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                              e
                            );
                          case 45:
                            return (
                              C + e + A + s(e, /[svh]\w+-[tblr]{2}/, "lr") + e
                            );
                        }
                        return C + e + A + e + e;
                    }
                    return e;
                  })(t.value, t.length);
                  break;
                case j:
                  return B([x(t, { value: s(t.value, "@", "@" + C) })], i);
                case M:
                  if (t.length)
                    return t.props
                      .map(function (e) {
                        var r;
                        switch (
                          ((r = e),
                          (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return B(
                              [
                                x(t, {
                                  props: [s(e, /:(read-\w+)/, ":" + R + "$1")],
                                }),
                              ],
                              i
                            );
                          case "::placeholder":
                            return B(
                              [
                                x(t, {
                                  props: [
                                    s(e, /:(plac\w+)/, ":" + C + "input-$1"),
                                  ],
                                }),
                                x(t, {
                                  props: [s(e, /:(plac\w+)/, ":" + R + "$1")],
                                }),
                                x(t, {
                                  props: [s(e, /:(plac\w+)/, A + "input-$1")],
                                }),
                              ],
                              i
                            );
                        }
                        return "";
                      })
                      .join("");
              }
          },
        ],
        N = function (t) {
          var e,
            r,
            n,
            o,
            m,
            x = t.key;
          if ("css" === x) {
            var A = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(A, function (t) {
              -1 !== t.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(t), t.setAttribute("data-s", ""));
            });
          }
          var R = t.stylisPlugins || U,
            C = {},
            M = [];
          (o = t.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + x + ' "]'),
              function (t) {
                for (
                  var e = t.getAttribute("data-emotion").split(" "), r = 1;
                  r < e.length;
                  r++
                )
                  C[e[r]] = !0;
                M.push(t);
              }
            );
          var _ =
              ((r = (e = [W, z].concat(R, [
                V,
                ((n = function (t) {
                  m.insert(t);
                }),
                function (t) {
                  !t.root && (t = t.return) && n(t);
                }),
              ])).length),
              function (t, i, n, a) {
                for (var o = "", s = 0; s < r; s++) o += e[s](t, i, n, a) || "";
                return o;
              }),
            j = function (t) {
              var e, r;
              return B(
                ((r = (function t(e, r, i, n, o, m, x, T, A) {
                  for (
                    var R,
                      C = 0,
                      M = 0,
                      _ = x,
                      j = 0,
                      B = 0,
                      V = 0,
                      L = 1,
                      I = 1,
                      F = 1,
                      $ = 0,
                      W = "",
                      z = o,
                      U = m,
                      N = n,
                      H = W;
                    I;

                  )
                    switch (((V = $), ($ = k()))) {
                      case 40:
                        if (108 != V && 58 == u(H, _ - 1)) {
                          -1 != l((H += s(P($), "&", "&\f")), "&\f") &&
                            (F = -1);
                          break;
                        }
                      case 34:
                      case 39:
                      case 91:
                        H += P($);
                        break;
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        H += (function (t) {
                          for (; (v = w()); )
                            if (v < 33) k();
                            else break;
                          return S(t) > 2 || S(v) > 3 ? "" : " ";
                        })(V);
                        break;
                      case 92:
                        H += (function (t, e) {
                          for (
                            var r;
                            --e &&
                            k() &&
                            !(v < 48) &&
                            !(v > 102) &&
                            (!(v > 57) || !(v < 65)) &&
                            (!(v > 70) || !(v < 97));

                          );
                          return (
                            (r = g + (e < 6 && 32 == w() && 32 == k())),
                            c(y, t, r)
                          );
                        })(g - 1, 7);
                        continue;
                      case 47:
                        switch (w()) {
                          case 42:
                          case 47:
                            h(
                              ((R = (function (t, e) {
                                for (; k(); )
                                  if (t + v === 57) break;
                                  else if (t + v === 84 && 47 === w()) break;
                                return (
                                  "/*" +
                                  c(y, e, g - 1) +
                                  "*" +
                                  a(47 === t ? t : k())
                                );
                              })(k(), g)),
                              b(R, r, i, E, a(v), c(R, 2, -2), 0)),
                              A
                            );
                            break;
                          default:
                            H += "/";
                        }
                        break;
                      case 123 * L:
                        T[C++] = d(H) * F;
                      case 125 * L:
                      case 59:
                      case 0:
                        switch ($) {
                          case 0:
                          case 125:
                            I = 0;
                          case 59 + M:
                            -1 == F && (H = s(H, /\f/g, "")),
                              B > 0 &&
                                d(H) - _ &&
                                h(
                                  B > 32
                                    ? O(H + ";", n, i, _ - 1)
                                    : O(s(H, " ", "") + ";", n, i, _ - 2),
                                  A
                                );
                            break;
                          case 59:
                            H += ";";
                          default:
                            if (
                              (h(
                                (N = D(
                                  H,
                                  r,
                                  i,
                                  C,
                                  M,
                                  o,
                                  T,
                                  W,
                                  (z = []),
                                  (U = []),
                                  _
                                )),
                                m
                              ),
                              123 === $)
                            ) {
                              if (0 === M) t(H, r, N, N, z, m, _, T, U);
                              else
                                switch (99 === j && 110 === u(H, 3) ? 100 : j) {
                                  case 100:
                                  case 108:
                                  case 109:
                                  case 115:
                                    t(
                                      e,
                                      N,
                                      N,
                                      n &&
                                        h(
                                          D(
                                            e,
                                            N,
                                            N,
                                            0,
                                            0,
                                            o,
                                            T,
                                            W,
                                            o,
                                            (z = []),
                                            _
                                          ),
                                          U
                                        ),
                                      o,
                                      U,
                                      _,
                                      T,
                                      n ? z : U
                                    );
                                    break;
                                  default:
                                    t(H, N, N, N, [""], U, 0, T, U);
                                }
                            }
                        }
                        (C = M = B = 0), (L = F = 1), (W = H = ""), (_ = x);
                        break;
                      case 58:
                        (_ = 1 + d(H)), (B = V);
                      default:
                        if (L < 1) {
                          if (123 == $) --L;
                          else if (
                            125 == $ &&
                            0 == L++ &&
                            125 ==
                              ((v = g > 0 ? u(y, --g) : 0),
                              f--,
                              10 === v && ((f = 1), p--),
                              v)
                          )
                            continue;
                        }
                        switch (((H += a($)), $ * L)) {
                          case 38:
                            F = M > 0 ? 1 : ((H += "\f"), -1);
                            break;
                          case 44:
                            (T[C++] = (d(H) - 1) * F), (F = 1);
                            break;
                          case 64:
                            45 === w() && (H += P(k())),
                              (j = w()),
                              (M = _ =
                                d(
                                  (W = H +=
                                    (function (t) {
                                      for (; !S(w()); ) k();
                                      return c(y, t, g);
                                    })(g))
                                )),
                              $++;
                            break;
                          case 45:
                            45 === V && 2 == d(H) && (L = 0);
                        }
                    }
                  return m;
                })("", null, null, null, [""], (e = T((e = t))), 0, [0], e)),
                (y = ""),
                r),
                _
              );
            },
            L = {
              key: x,
              sheet: new i({
                key: x,
                container: o,
                nonce: t.nonce,
                speedy: t.speedy,
                prepend: t.prepend,
                insertionPoint: t.insertionPoint,
              }),
              nonce: t.nonce,
              inserted: C,
              registered: {},
              insert: function (t, e, r, i) {
                (m = r),
                  j(t ? t + "{" + e.styles + "}" : e.styles),
                  i && (L.inserted[e.name] = !0);
              },
            };
          return L.sheet.hydrate(M), L;
        };
    },
    5186: (t, e, r) => {
      "use strict";
      r.d(e, { D: () => a });
      var i = r(986),
        n = r(2115);
      function a() {
        let t = (0, n.useContext)(i.T);
        if (!t)
          throw Error(
            "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
          );
        return t;
      }
    },
    5206: (t, e, r) => {
      "use strict";
      let i;
      r.d(e, { P: () => aC });
      var n = r(2115);
      let a = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        o = new Set(a),
        s = (t) => (180 * t) / Math.PI,
        l = (t) => c(s(Math.atan2(t[1], t[0]))),
        u = {
          x: 4,
          y: 5,
          translateX: 4,
          translateY: 5,
          scaleX: 0,
          scaleY: 3,
          scale: (t) => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
          rotate: l,
          rotateZ: l,
          skewX: (t) => s(Math.atan(t[1])),
          skewY: (t) => s(Math.atan(t[2])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[2])) / 2,
        },
        c = (t) => ((t %= 360) < 0 && (t += 360), t),
        d = (t) => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
        h = (t) => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
        p = {
          x: 12,
          y: 13,
          z: 14,
          translateX: 12,
          translateY: 13,
          translateZ: 14,
          scaleX: d,
          scaleY: h,
          scale: (t) => (d(t) + h(t)) / 2,
          rotateX: (t) => c(s(Math.atan2(t[6], t[5]))),
          rotateY: (t) => c(s(Math.atan2(-t[2], t[0]))),
          rotateZ: l,
          rotate: l,
          skewX: (t) => s(Math.atan(t[4])),
          skewY: (t) => s(Math.atan(t[1])),
          skew: (t) => (Math.abs(t[1]) + Math.abs(t[4])) / 2,
        };
      function f(t) {
        return +!!t.includes("scale");
      }
      function m(t, e) {
        let r, i;
        if (!t || "none" === t) return f(e);
        let n = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (n) (r = p), (i = n);
        else {
          let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
          (r = u), (i = e);
        }
        if (!i) return f(e);
        let a = r[e],
          o = i[1].split(",").map(v);
        return "function" == typeof a ? a(o) : o[a];
      }
      let g = (t, e) => {
        let { transform: r = "none" } = getComputedStyle(t);
        return m(r, e);
      };
      function v(t) {
        return parseFloat(t.trim());
      }
      let y = (t) => (e) => "string" == typeof e && e.startsWith(t),
        b = y("--"),
        x = y("var(--"),
        k = (t) => !!x(t) && w.test(t.split("/*")[0].trim()),
        w =
          /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
      function S({ top: t, left: e, right: r, bottom: i }) {
        return { x: { min: e, max: r }, y: { min: t, max: i } };
      }
      let T = (t, e, r) => t + (e - t) * r;
      function P(t) {
        return void 0 === t || 1 === t;
      }
      function A({ scale: t, scaleX: e, scaleY: r }) {
        return !P(t) || !P(e) || !P(r);
      }
      function R(t) {
        return (
          A(t) ||
          C(t) ||
          t.z ||
          t.rotate ||
          t.rotateX ||
          t.rotateY ||
          t.skewX ||
          t.skewY
        );
      }
      function C(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      function E(t, e, r, i, n) {
        return void 0 !== n && (t = i + n * (t - i)), i + r * (t - i) + e;
      }
      function M(t, e = 0, r = 1, i, n) {
        (t.min = E(t.min, e, r, i, n)), (t.max = E(t.max, e, r, i, n));
      }
      function _(t, { x: e, y: r }) {
        M(t.x, e.translate, e.scale, e.originPoint),
          M(t.y, r.translate, r.scale, r.originPoint);
      }
      function j(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function B(t, e, r, i, n = 0.5) {
        let a = T(t.min, t.max, n);
        M(t, e, r, a, i);
      }
      function V(t, e) {
        B(t.x, e.x, e.scaleX, e.scale, e.originX),
          B(t.y, e.y, e.scaleY, e.scale, e.originY);
      }
      function D(t, e) {
        return S(
          (function (t, e) {
            if (!e) return t;
            let r = e({ x: t.left, y: t.top }),
              i = e({ x: t.right, y: t.bottom });
            return { top: r.y, left: r.x, bottom: i.y, right: i.x };
          })(t.getBoundingClientRect(), e)
        );
      }
      let O = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          ...a,
        ]),
        L = (t, e, r) => (r > e ? e : r < t ? t : r),
        I = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        F = { ...I, transform: (t) => L(0, 1, t) },
        $ = { ...I, default: 1 },
        W = (t) => ({
          test: (e) =>
            "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        z = W("deg"),
        U = W("%"),
        N = W("px"),
        H = W("vh"),
        Y = W("vw"),
        X = {
          ...U,
          parse: (t) => U.parse(t) / 100,
          transform: (t) => U.transform(100 * t),
        },
        G = (t) => (e) => e.test(t),
        q = [I, N, U, z, Y, H, { test: (t) => "auto" === t, parse: (t) => t }],
        K = (t) => q.find(G(t)),
        Z = () => {},
        J = () => {},
        Q = (t) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),
        tt = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,
        te = (t) => t === I || t === N,
        tr = new Set(["x", "y", "z"]),
        ti = a.filter((t) => !tr.has(t)),
        tn = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: (t, { transform: e }) => m(e, "x"),
          y: (t, { transform: e }) => m(e, "y"),
        };
      (tn.translateX = tn.x), (tn.translateY = tn.y);
      let ta = (t) => t,
        to = {},
        ts = [
          "setup",
          "read",
          "resolveKeyframes",
          "preUpdate",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        tl = { value: null, addProjectionMetrics: null };
      function tu(t, e) {
        let r = !1,
          i = !0,
          n = { delta: 0, timestamp: 0, isProcessing: !1 },
          a = () => (r = !0),
          o = ts.reduce(
            (t, r) => (
              (t[r] = (function (t, e) {
                let r = new Set(),
                  i = new Set(),
                  n = !1,
                  a = !1,
                  o = new WeakSet(),
                  s = { delta: 0, timestamp: 0, isProcessing: !1 },
                  l = 0;
                function u(e) {
                  o.has(e) && (c.schedule(e), t()), l++, e(s);
                }
                let c = {
                  schedule: (t, e = !1, a = !1) => {
                    let s = a && n ? r : i;
                    return e && o.add(t), s.has(t) || s.add(t), t;
                  },
                  cancel: (t) => {
                    i.delete(t), o.delete(t);
                  },
                  process: (t) => {
                    if (((s = t), n)) {
                      a = !0;
                      return;
                    }
                    (n = !0),
                      ([r, i] = [i, r]),
                      r.forEach(u),
                      e && tl.value && tl.value.frameloop[e].push(l),
                      (l = 0),
                      r.clear(),
                      (n = !1),
                      a && ((a = !1), c.process(t));
                  },
                };
                return c;
              })(a, e ? r : void 0)),
              t
            ),
            {}
          ),
          {
            setup: s,
            read: l,
            resolveKeyframes: u,
            preUpdate: c,
            update: d,
            preRender: h,
            render: p,
            postRender: f,
          } = o,
          m = () => {
            let a = to.useManualTiming ? n.timestamp : performance.now();
            (r = !1),
              to.useManualTiming ||
                (n.delta = i
                  ? 1e3 / 60
                  : Math.max(Math.min(a - n.timestamp, 40), 1)),
              (n.timestamp = a),
              (n.isProcessing = !0),
              s.process(n),
              l.process(n),
              u.process(n),
              c.process(n),
              d.process(n),
              h.process(n),
              p.process(n),
              f.process(n),
              (n.isProcessing = !1),
              r && e && ((i = !1), t(m));
          },
          g = () => {
            (r = !0), (i = !0), n.isProcessing || t(m);
          };
        return {
          schedule: ts.reduce((t, e) => {
            let i = o[e];
            return (
              (t[e] = (t, e = !1, n = !1) => (r || g(), i.schedule(t, e, n))), t
            );
          }, {}),
          cancel: (t) => {
            for (let e = 0; e < ts.length; e++) o[ts[e]].cancel(t);
          },
          state: n,
          steps: o,
        };
      }
      let {
          schedule: tc,
          cancel: td,
          state: th,
          steps: tp,
        } = tu(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : ta,
          !0
        ),
        tf = new Set(),
        tm = !1,
        tg = !1,
        tv = !1;
      function ty() {
        if (tg) {
          let t = Array.from(tf).filter((t) => t.needsMeasurement),
            e = new Set(t.map((t) => t.element)),
            r = new Map();
          e.forEach((t) => {
            let e = (function (t) {
              let e = [];
              return (
                ti.forEach((r) => {
                  let i = t.getValue(r);
                  void 0 !== i &&
                    (e.push([r, i.get()]), i.set(+!!r.startsWith("scale")));
                }),
                e
              );
            })(t);
            e.length && (r.set(t, e), t.render());
          }),
            t.forEach((t) => t.measureInitialState()),
            e.forEach((t) => {
              t.render();
              let e = r.get(t);
              e &&
                e.forEach(([e, r]) => {
                  t.getValue(e)?.set(r);
                });
            }),
            t.forEach((t) => t.measureEndState()),
            t.forEach((t) => {
              void 0 !== t.suspendedScrollY &&
                window.scrollTo(0, t.suspendedScrollY);
            });
        }
        (tg = !1), (tm = !1), tf.forEach((t) => t.complete(tv)), tf.clear();
      }
      function tb() {
        tf.forEach((t) => {
          t.readKeyframes(), t.needsMeasurement && (tg = !0);
        });
      }
      class tx {
        constructor(t, e, r, i, n, a = !1) {
          (this.state = "pending"),
            (this.isAsync = !1),
            (this.needsMeasurement = !1),
            (this.unresolvedKeyframes = [...t]),
            (this.onComplete = e),
            (this.name = r),
            (this.motionValue = i),
            (this.element = n),
            (this.isAsync = a);
        }
        scheduleResolve() {
          (this.state = "scheduled"),
            this.isAsync
              ? (tf.add(this),
                tm || ((tm = !0), tc.read(tb), tc.resolveKeyframes(ty)))
              : (this.readKeyframes(), this.complete());
        }
        readKeyframes() {
          let {
            unresolvedKeyframes: t,
            name: e,
            element: r,
            motionValue: i,
          } = this;
          if (null === t[0]) {
            let n = i?.get(),
              a = t[t.length - 1];
            if (void 0 !== n) t[0] = n;
            else if (r && e) {
              let i = r.readValue(e, a);
              null != i && (t[0] = i);
            }
            void 0 === t[0] && (t[0] = a), i && void 0 === n && i.set(t[0]);
          }
          !(function (t) {
            for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1]);
          })(t);
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(t = !1) {
          (this.state = "complete"),
            this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t),
            tf.delete(this);
        }
        cancel() {
          "scheduled" === this.state &&
            (tf.delete(this), (this.state = "pending"));
        }
        resume() {
          "pending" === this.state && this.scheduleResolve();
        }
      }
      let tk = (t) => /^0[^.\s]+$/u.test(t),
        tw = (t) => Math.round(1e5 * t) / 1e5,
        tS = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
        tT =
          /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        tP = (t, e) => (r) =>
          !!(
            ("string" == typeof r && tT.test(r) && r.startsWith(t)) ||
            (e && null != r && Object.prototype.hasOwnProperty.call(r, e))
          ),
        tA = (t, e, r) => (i) => {
          if ("string" != typeof i) return i;
          let [n, a, o, s] = i.match(tS);
          return {
            [t]: parseFloat(n),
            [e]: parseFloat(a),
            [r]: parseFloat(o),
            alpha: void 0 !== s ? parseFloat(s) : 1,
          };
        },
        tR = (t) => L(0, 255, t),
        tC = { ...I, transform: (t) => Math.round(tR(t)) },
        tE = {
          test: tP("rgb", "red"),
          parse: tA("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: i = 1 }) =>
            "rgba(" +
            tC.transform(t) +
            ", " +
            tC.transform(e) +
            ", " +
            tC.transform(r) +
            ", " +
            tw(F.transform(i)) +
            ")",
        },
        tM = {
          test: tP("#"),
          parse: function (t) {
            let e = "",
              r = "",
              i = "",
              n = "";
            return (
              t.length > 5
                ? ((e = t.substring(1, 3)),
                  (r = t.substring(3, 5)),
                  (i = t.substring(5, 7)),
                  (n = t.substring(7, 9)))
                : ((e = t.substring(1, 2)),
                  (r = t.substring(2, 3)),
                  (i = t.substring(3, 4)),
                  (n = t.substring(4, 5)),
                  (e += e),
                  (r += r),
                  (i += i),
                  (n += n)),
              {
                red: parseInt(e, 16),
                green: parseInt(r, 16),
                blue: parseInt(i, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1,
              }
            );
          },
          transform: tE.transform,
        },
        t_ = {
          test: tP("hsl", "hue"),
          parse: tA("hue", "saturation", "lightness"),
          transform: ({ hue: t, saturation: e, lightness: r, alpha: i = 1 }) =>
            "hsla(" +
            Math.round(t) +
            ", " +
            U.transform(tw(e)) +
            ", " +
            U.transform(tw(r)) +
            ", " +
            tw(F.transform(i)) +
            ")",
        },
        tj = {
          test: (t) => tE.test(t) || tM.test(t) || t_.test(t),
          parse: (t) =>
            tE.test(t) ? tE.parse(t) : t_.test(t) ? t_.parse(t) : tM.parse(t),
          transform: (t) =>
            "string" == typeof t
              ? t
              : t.hasOwnProperty("red")
              ? tE.transform(t)
              : t_.transform(t),
          getAnimatableNone: (t) => {
            let e = tj.parse(t);
            return (e.alpha = 0), tj.transform(e);
          },
        },
        tB =
          /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        tV = "number",
        tD = "color",
        tO =
          /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
      function tL(t) {
        let e = t.toString(),
          r = [],
          i = { color: [], number: [], var: [] },
          n = [],
          a = 0,
          o = e
            .replace(
              tO,
              (t) => (
                tj.test(t)
                  ? (i.color.push(a), n.push(tD), r.push(tj.parse(t)))
                  : t.startsWith("var(")
                  ? (i.var.push(a), n.push("var"), r.push(t))
                  : (i.number.push(a), n.push(tV), r.push(parseFloat(t))),
                ++a,
                "${}"
              )
            )
            .split("${}");
        return { values: r, split: o, indexes: i, types: n };
      }
      function tI(t) {
        return tL(t).values;
      }
      function tF(t) {
        let { split: e, types: r } = tL(t),
          i = e.length;
        return (t) => {
          let n = "";
          for (let a = 0; a < i; a++)
            if (((n += e[a]), void 0 !== t[a])) {
              let e = r[a];
              e === tV
                ? (n += tw(t[a]))
                : e === tD
                ? (n += tj.transform(t[a]))
                : (n += t[a]);
            }
          return n;
        };
      }
      let t$ = (t) =>
          "number" == typeof t ? 0 : tj.test(t) ? tj.getAnimatableNone(t) : t,
        tW = {
          test: function (t) {
            return (
              isNaN(t) &&
              "string" == typeof t &&
              (t.match(tS)?.length || 0) + (t.match(tB)?.length || 0) > 0
            );
          },
          parse: tI,
          createTransformer: tF,
          getAnimatableNone: function (t) {
            let e = tI(t);
            return tF(t)(e.map(t$));
          },
        },
        tz = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function tU(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [i] = r.match(tS) || [];
        if (!i) return t;
        let n = r.replace(i, ""),
          a = +!!tz.has(e);
        return i !== r && (a *= 100), e + "(" + a + n + ")";
      }
      let tN = /\b([a-z-]*)\(.*?\)/gu,
        tH = {
          ...tW,
          getAnimatableNone: (t) => {
            let e = t.match(tN);
            return e ? e.map(tU).join(" ") : t;
          },
        },
        tY = { ...I, transform: Math.round },
        tX = {
          borderWidth: N,
          borderTopWidth: N,
          borderRightWidth: N,
          borderBottomWidth: N,
          borderLeftWidth: N,
          borderRadius: N,
          radius: N,
          borderTopLeftRadius: N,
          borderTopRightRadius: N,
          borderBottomRightRadius: N,
          borderBottomLeftRadius: N,
          width: N,
          maxWidth: N,
          height: N,
          maxHeight: N,
          top: N,
          right: N,
          bottom: N,
          left: N,
          padding: N,
          paddingTop: N,
          paddingRight: N,
          paddingBottom: N,
          paddingLeft: N,
          margin: N,
          marginTop: N,
          marginRight: N,
          marginBottom: N,
          marginLeft: N,
          backgroundPositionX: N,
          backgroundPositionY: N,
          rotate: z,
          rotateX: z,
          rotateY: z,
          rotateZ: z,
          scale: $,
          scaleX: $,
          scaleY: $,
          scaleZ: $,
          skew: z,
          skewX: z,
          skewY: z,
          distance: N,
          translateX: N,
          translateY: N,
          translateZ: N,
          x: N,
          y: N,
          z: N,
          perspective: N,
          transformPerspective: N,
          opacity: F,
          originX: X,
          originY: X,
          originZ: N,
          zIndex: tY,
          fillOpacity: F,
          strokeOpacity: F,
          numOctaves: tY,
        },
        tG = {
          ...tX,
          color: tj,
          backgroundColor: tj,
          outlineColor: tj,
          fill: tj,
          stroke: tj,
          borderColor: tj,
          borderTopColor: tj,
          borderRightColor: tj,
          borderBottomColor: tj,
          borderLeftColor: tj,
          filter: tH,
          WebkitFilter: tH,
        },
        tq = (t) => tG[t];
      function tK(t, e) {
        let r = tq(t);
        return (
          r !== tH && (r = tW),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
      let tZ = new Set(["auto", "none", "0"]);
      class tJ extends tx {
        constructor(t, e, r, i, n) {
          super(t, e, r, i, n, !0);
        }
        readKeyframes() {
          let { unresolvedKeyframes: t, element: e, name: r } = this;
          if (!e || !e.current) return;
          super.readKeyframes();
          for (let r = 0; r < t.length; r++) {
            let i = t[r];
            if ("string" == typeof i && k((i = i.trim()))) {
              let n = (function t(e, r, i = 1) {
                J(
                  i <= 4,
                  `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,
                  "max-css-var-depth"
                );
                let [n, a] = (function (t) {
                  let e = tt.exec(t);
                  if (!e) return [,];
                  let [, r, i, n] = e;
                  return [`--${r ?? i}`, n];
                })(e);
                if (!n) return;
                let o = window.getComputedStyle(r).getPropertyValue(n);
                if (o) {
                  let t = o.trim();
                  return Q(t) ? parseFloat(t) : t;
                }
                return k(a) ? t(a, r, i + 1) : a;
              })(i, e.current);
              void 0 !== n && (t[r] = n),
                r === t.length - 1 && (this.finalKeyframe = i);
            }
          }
          if ((this.resolveNoneKeyframes(), !O.has(r) || 2 !== t.length))
            return;
          let [i, n] = t,
            a = K(i),
            o = K(n);
          if (a !== o) {
            if (te(a) && te(o))
              for (let e = 0; e < t.length; e++) {
                let r = t[e];
                "string" == typeof r && (t[e] = parseFloat(r));
              }
            else tn[r] && (this.needsMeasurement = !0);
          }
        }
        resolveNoneKeyframes() {
          let { unresolvedKeyframes: t, name: e } = this,
            r = [];
          for (let e = 0; e < t.length; e++) {
            var i;
            (null === t[e] ||
              ("number" == typeof (i = t[e])
                ? 0 === i
                : null === i || "none" === i || "0" === i || tk(i))) &&
              r.push(e);
          }
          r.length &&
            (function (t, e, r) {
              let i,
                n = 0;
              for (; n < t.length && !i; ) {
                let e = t[n];
                "string" == typeof e &&
                  !tZ.has(e) &&
                  tL(e).values.length &&
                  (i = t[n]),
                  n++;
              }
              if (i && r) for (let n of e) t[n] = tK(r, i);
            })(t, r, e);
        }
        measureInitialState() {
          let { element: t, unresolvedKeyframes: e, name: r } = this;
          if (!t || !t.current) return;
          "height" === r && (this.suspendedScrollY = window.pageYOffset),
            (this.measuredOrigin = tn[r](
              t.measureViewportBox(),
              window.getComputedStyle(t.current)
            )),
            (e[0] = this.measuredOrigin);
          let i = e[e.length - 1];
          void 0 !== i && t.getValue(r, i).jump(i, !1);
        }
        measureEndState() {
          let { element: t, name: e, unresolvedKeyframes: r } = this;
          if (!t || !t.current) return;
          let i = t.getValue(e);
          i && i.jump(this.measuredOrigin, !1);
          let n = r.length - 1,
            a = r[n];
          (r[n] = tn[e](
            t.measureViewportBox(),
            window.getComputedStyle(t.current)
          )),
            null !== a &&
              void 0 === this.finalKeyframe &&
              (this.finalKeyframe = a),
            this.removedTransforms?.length &&
              this.removedTransforms.forEach(([e, r]) => {
                t.getValue(e).set(r);
              }),
            this.resolveNoneKeyframes();
        }
      }
      let tQ = (t) => !!(t && t.getVelocity);
      function t0() {
        i = void 0;
      }
      let t1 = {
        now: () => (
          void 0 === i &&
            t1.set(
              th.isProcessing || to.useManualTiming
                ? th.timestamp
                : performance.now()
            ),
          i
        ),
        set: (t) => {
          (i = t), queueMicrotask(t0);
        },
      };
      function t5(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function t2(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      class t3 {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return t5(this.subscriptions, t), () => t2(this.subscriptions, t);
        }
        notify(t, e, r) {
          let i = this.subscriptions.length;
          if (i) {
            if (1 === i) this.subscriptions[0](t, e, r);
            else
              for (let n = 0; n < i; n++) {
                let i = this.subscriptions[n];
                i && i(t, e, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
      let t4 = (t) => !isNaN(parseFloat(t)),
        t9 = { current: void 0 };
      class t6 {
        constructor(t, e = {}) {
          (this.canTrackVelocity = null),
            (this.events = {}),
            (this.updateAndNotify = (t) => {
              let e = t1.now();
              if (
                (this.updatedAt !== e && this.setPrevFrameValue(),
                (this.prev = this.current),
                this.setCurrent(t),
                this.current !== this.prev &&
                  (this.events.change?.notify(this.current), this.dependents))
              )
                for (let t of this.dependents) t.dirty();
            }),
            (this.hasAnimated = !1),
            this.setCurrent(t),
            (this.owner = e.owner);
        }
        setCurrent(t) {
          (this.current = t),
            (this.updatedAt = t1.now()),
            null === this.canTrackVelocity &&
              void 0 !== t &&
              (this.canTrackVelocity = t4(this.current));
        }
        setPrevFrameValue(t = this.current) {
          (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new t3());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  tc.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t) {
          this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t);
        }
        setWithVelocity(t, e, r) {
          this.set(e),
            (this.prev = void 0),
            (this.prevFrameValue = t),
            (this.prevUpdatedAt = this.updatedAt - r);
        }
        jump(t, e = !0) {
          this.updateAndNotify(t),
            (this.prev = t),
            (this.prevUpdatedAt = this.prevFrameValue = void 0),
            e && this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        dirty() {
          this.events.change?.notify(this.current);
        }
        addDependent(t) {
          this.dependents || (this.dependents = new Set()),
            this.dependents.add(t);
        }
        removeDependent(t) {
          this.dependents && this.dependents.delete(t);
        }
        get() {
          return t9.current && t9.current.push(this), this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          var t;
          let e = t1.now();
          if (
            !this.canTrackVelocity ||
            void 0 === this.prevFrameValue ||
            e - this.updatedAt > 30
          )
            return 0;
          let r = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
          return (
            (t = parseFloat(this.current) - parseFloat(this.prevFrameValue)),
            r ? (1e3 / r) * t : 0
          );
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.dependents?.clear(),
            this.events.destroy?.notify(),
            this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function t8(t, e) {
        return new t6(t, e);
      }
      let t7 = [...q, tj, tW],
        et = (t) => t7.find(G(t)),
        { schedule: ee } = tu(queueMicrotask, !1),
        er = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        ei = {};
      for (let t in er) ei[t] = { isEnabled: (e) => er[t].some((t) => !!e[t]) };
      let en = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        ea = () => ({ x: en(), y: en() }),
        eo = () => ({ min: 0, max: 0 }),
        es = () => ({ x: eo(), y: eo() });
      var el = r(8972);
      let eu = { current: null },
        ec = { current: !1 },
        ed = new WeakMap();
      function eh(t) {
        return (
          null !== t && "object" == typeof t && "function" == typeof t.start
        );
      }
      function ep(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      let ef = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        em = ["initial", ...ef];
      function eg(t) {
        return eh(t.animate) || em.some((e) => ep(t[e]));
      }
      function ev(t) {
        return !!(eg(t) || t.variants);
      }
      function ey(t) {
        let e = [{}, {}];
        return (
          t?.values.forEach((t, r) => {
            (e[0][r] = t.get()), (e[1][r] = t.getVelocity());
          }),
          e
        );
      }
      function eb(t, e, r, i) {
        if ("function" == typeof e) {
          let [n, a] = ey(i);
          e = e(void 0 !== r ? r : t.custom, n, a);
        }
        if (
          ("string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e)
        ) {
          let [n, a] = ey(i);
          e = e(void 0 !== r ? r : t.custom, n, a);
        }
        return e;
      }
      let ex = [
        "AnimationStart",
        "AnimationComplete",
        "Update",
        "BeforeLayoutMeasure",
        "LayoutMeasure",
        "LayoutAnimationStart",
        "LayoutAnimationComplete",
      ];
      class ek {
        scrapeMotionValuesFromProps(t, e, r) {
          return {};
        }
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: i,
            blockInitialAnimation: n,
            visualState: a,
          },
          o = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.KeyframeResolver = tx),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.renderScheduledAt = 0),
            (this.scheduleRender = () => {
              let t = t1.now();
              this.renderScheduledAt < t &&
                ((this.renderScheduledAt = t), tc.render(this.render, !1, !0));
            });
          let { latestValues: s, renderState: l } = a;
          (this.latestValues = s),
            (this.baseTarget = { ...s }),
            (this.initialValues = e.initial ? { ...s } : {}),
            (this.renderState = l),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = i),
            (this.options = o),
            (this.blockInitialAnimation = !!n),
            (this.isControllingVariants = eg(e)),
            (this.isVariantNode = ev(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: u, ...c } = this.scrapeMotionValuesFromProps(
            e,
            {},
            this
          );
          for (let t in c) {
            let e = c[t];
            void 0 !== s[t] && tQ(e) && e.set(s[t]);
          }
        }
        mount(t) {
          (this.current = t),
            ed.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            ec.current ||
              (function () {
                if (((ec.current = !0), el.B)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (eu.current = t.matches);
                    t.addEventListener("change", e), e();
                  } else eu.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || eu.current)),
            this.parent?.addChild(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in (this.projection && this.projection.unmount(),
          td(this.notifyUpdate),
          td(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.valueSubscriptions.clear(),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent?.removeChild(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) {
            let e = this.features[t];
            e && (e.unmount(), (e.isMounted = !1));
          }
          this.current = null;
        }
        addChild(t) {
          this.children.add(t),
            this.enteringChildren ?? (this.enteringChildren = new Set()),
            this.enteringChildren.add(t);
        }
        removeChild(t) {
          this.children.delete(t),
            this.enteringChildren && this.enteringChildren.delete(t);
        }
        bindToMotionValue(t, e) {
          let r;
          this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
          let i = o.has(t);
          i && this.onBindTransform && this.onBindTransform();
          let n = e.on("change", (e) => {
            (this.latestValues[t] = e),
              this.props.onUpdate && tc.preRender(this.notifyUpdate),
              i && this.projection && (this.projection.isTransformDirty = !0),
              this.scheduleRender();
          });
          window.MotionCheckAppearSync &&
            (r = window.MotionCheckAppearSync(this, t, e)),
            this.valueSubscriptions.set(t, () => {
              n(), r && r(), e.owner && e.stop();
            });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        updateFeatures() {
          let t = "animation";
          for (t in ei) {
            let e = ei[t];
            if (!e) continue;
            let { isEnabled: r, Feature: i } = e;
            if (
              (!this.features[t] &&
                i &&
                r(this.props) &&
                (this.features[t] = new i(this)),
              this.features[t])
            ) {
              let e = this.features[t];
              e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
            }
          }
        }
        triggerBuild() {
          this.build(this.renderState, this.latestValues, this.props);
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : es();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < ex.length; e++) {
            let r = ex[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let i = t["on" + r];
            i && (this.propEventSubscriptions[r] = this.on(r, i));
          }
          (this.prevMotionValues = (function (t, e, r) {
            for (let i in e) {
              let n = e[i],
                a = r[i];
              if (tQ(n)) t.addValue(i, n);
              else if (tQ(a)) t.addValue(i, t8(n, { owner: t }));
              else if (a !== n) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  !0 === e.liveStyle ? e.jump(n) : e.hasAnimated || e.set(n);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, t8(void 0 !== e ? e : n, { owner: t }));
                }
              }
            }
            for (let i in r) void 0 === e[i] && t.removeValue(i);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps, this),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          let r = this.values.get(t);
          e !== r &&
            (r && this.removeValue(t),
            this.bindToMotionValue(t, e),
            this.values.set(t, e),
            (this.latestValues[t] = e.get()));
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = t8(null === e ? void 0 : e, { owner: this })),
              this.addValue(t, r)),
            r
          );
        }
        readValue(t, e) {
          let r =
            void 0 === this.latestValues[t] && this.current
              ? this.getBaseTargetFromProps(this.props, t) ??
                this.readValueFromInstance(this.current, t, this.options)
              : this.latestValues[t];
          return (
            null != r &&
              ("string" == typeof r && (Q(r) || tk(r))
                ? (r = parseFloat(r))
                : !et(r) && tW.test(e) && (r = tK(t, e)),
              this.setBaseTarget(t, tQ(r) ? r.get() : r)),
            tQ(r) ? r.get() : r
          );
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          let e;
          let { initial: r } = this.props;
          if ("string" == typeof r || "object" == typeof r) {
            let i = eb(this.props, r, this.presenceContext?.custom);
            i && (e = i[t]);
          }
          if (r && void 0 !== e) return e;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || tQ(i)
            ? void 0 !== this.initialValues[t] && void 0 === e
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new t3()), this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
        scheduleRenderMicrotask() {
          ee.render(this.render);
        }
      }
      class ew extends ek {
        constructor() {
          super(...arguments), (this.KeyframeResolver = tJ);
        }
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          tQ(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
      }
      let eS = (t, e) => (e && "number" == typeof t ? e.transform(t) : t),
        eT = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        eP = a.length;
      function eA(t, e, r) {
        let { style: i, vars: n, transformOrigin: s } = t,
          l = !1,
          u = !1;
        for (let t in e) {
          let r = e[t];
          if (o.has(t)) {
            l = !0;
            continue;
          }
          if (b(t)) {
            n[t] = r;
            continue;
          }
          {
            let e = eS(r, tX[t]);
            t.startsWith("origin") ? ((u = !0), (s[t] = e)) : (i[t] = e);
          }
        }
        if (
          (!e.transform &&
            (l || r
              ? (i.transform = (function (t, e, r) {
                  let i = "",
                    n = !0;
                  for (let o = 0; o < eP; o++) {
                    let s = a[o],
                      l = t[s];
                    if (void 0 === l) continue;
                    let u = !0;
                    if (
                      !(u =
                        "number" == typeof l
                          ? l === +!!s.startsWith("scale")
                          : 0 === parseFloat(l)) ||
                      r
                    ) {
                      let t = eS(l, tX[s]);
                      if (!u) {
                        n = !1;
                        let e = eT[s] || s;
                        i += `${e}(${t}) `;
                      }
                      r && (e[s] = t);
                    }
                  }
                  return (
                    (i = i.trim()),
                    r ? (i = r(e, n ? "" : i)) : n && (i = "none"),
                    i
                  );
                })(e, t.transform, r))
              : i.transform && (i.transform = "none")),
          u)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = s;
          i.transformOrigin = `${t} ${e} ${r}`;
        }
      }
      function eR(t, { style: e, vars: r }, i, n) {
        let a;
        let o = t.style;
        for (a in e) o[a] = e[a];
        for (a in (n?.applyProjectionStyles(o, i), r)) o.setProperty(a, r[a]);
      }
      let eC = {};
      function eE(t, { layout: e, layoutId: r }) {
        return (
          o.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== r) && (!!eC[t] || "opacity" === t))
        );
      }
      function eM(t, e, r) {
        let { style: i } = t,
          n = {};
        for (let a in i)
          (tQ(i[a]) ||
            (e.style && tQ(e.style[a])) ||
            eE(a, t) ||
            r?.getValue(a)?.liveStyle !== void 0) &&
            (n[a] = i[a]);
        return n;
      }
      class e_ extends ew {
        constructor() {
          super(...arguments), (this.type = "html"), (this.renderInstance = eR);
        }
        readValueFromInstance(t, e) {
          if (o.has(e)) return this.projection?.isProjecting ? f(e) : g(t, e);
          {
            let r = window.getComputedStyle(t),
              i = (b(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof i ? i.trim() : i;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return D(t, e);
        }
        build(t, e, r) {
          eA(t, e, r.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return eM(t, e, r);
        }
      }
      let ej = (t) => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
        eB = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        eV = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function eD(
        t,
        {
          attrX: e,
          attrY: r,
          attrScale: i,
          pathLength: n,
          pathSpacing: a = 1,
          pathOffset: o = 0,
          ...s
        },
        l,
        u,
        c
      ) {
        if ((eA(t, s, u), l)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: d, style: h } = t;
        d.transform && ((h.transform = d.transform), delete d.transform),
          (h.transform || d.transformOrigin) &&
            ((h.transformOrigin = d.transformOrigin ?? "50% 50%"),
            delete d.transformOrigin),
          h.transform &&
            ((h.transformBox = c?.transformBox ?? "fill-box"),
            delete d.transformBox),
          void 0 !== e && (d.x = e),
          void 0 !== r && (d.y = r),
          void 0 !== i && (d.scale = i),
          void 0 !== n &&
            (function (t, e, r = 1, i = 0, n = !0) {
              t.pathLength = 1;
              let a = n ? eB : eV;
              t[a.offset] = N.transform(-i);
              let o = N.transform(e),
                s = N.transform(r);
              t[a.array] = `${o} ${s}`;
            })(d, n, a, o, !1);
      }
      let eO = new Set([
          "baseFrequency",
          "diffuseConstant",
          "kernelMatrix",
          "kernelUnitLength",
          "keySplines",
          "keyTimes",
          "limitingConeAngle",
          "markerHeight",
          "markerWidth",
          "numOctaves",
          "targetX",
          "targetY",
          "surfaceScale",
          "specularConstant",
          "specularExponent",
          "stdDeviation",
          "tableValues",
          "viewBox",
          "gradientTransform",
          "pathLength",
          "startOffset",
          "textLength",
          "lengthAdjust",
        ]),
        eL = (t) => "string" == typeof t && "svg" === t.toLowerCase();
      function eI(t, e, r) {
        let i = eM(t, e, r);
        for (let r in t)
          (tQ(t[r]) || tQ(e[r])) &&
            (i[
              -1 !== a.indexOf(r)
                ? "attr" + r.charAt(0).toUpperCase() + r.substring(1)
                : r
            ] = t[r]);
        return i;
      }
      class eF extends ew {
        constructor() {
          super(...arguments),
            (this.type = "svg"),
            (this.isSVGTag = !1),
            (this.measureInstanceViewportBox = es);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (o.has(e)) {
            let t = tq(e);
            return (t && t.default) || 0;
          }
          return (e = eO.has(e) ? e : ej(e)), t.getAttribute(e);
        }
        scrapeMotionValuesFromProps(t, e, r) {
          return eI(t, e, r);
        }
        build(t, e, r) {
          eD(t, e, this.isSVGTag, r.transformTemplate, r.style);
        }
        renderInstance(t, e, r, i) {
          !(function (t, e, r, i) {
            for (let r in (eR(t, e, void 0, i), e.attrs))
              t.setAttribute(eO.has(r) ? r : ej(r), e.attrs[r]);
          })(t, e, 0, i);
        }
        mount(t) {
          (this.isSVGTag = eL(t.tagName)), super.mount(t);
        }
      }
      let e$ = [
        "animate",
        "circle",
        "defs",
        "desc",
        "ellipse",
        "g",
        "image",
        "line",
        "filter",
        "marker",
        "mask",
        "metadata",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "rect",
        "stop",
        "switch",
        "symbol",
        "svg",
        "text",
        "tspan",
        "use",
        "view",
      ];
      function eW(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (e$.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
        return !1;
      }
      var ez = r(5155),
        eU = r(869);
      let eN = (0, n.createContext)({ strict: !1 });
      var eH = r(1508);
      let eY = (0, n.createContext)({});
      function eX(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      let eG = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function eq(t, e, r) {
        for (let i in e) tQ(e[i]) || eE(i, r) || (t[i] = e[i]);
      }
      let eK = () => ({ ...eG(), attrs: {} }),
        eZ = new Set([
          "animate",
          "exit",
          "variants",
          "initial",
          "style",
          "values",
          "variants",
          "transition",
          "transformTemplate",
          "custom",
          "inherit",
          "onBeforeLayoutMeasure",
          "onAnimationStart",
          "onAnimationComplete",
          "onUpdate",
          "onDragStart",
          "onDrag",
          "onDragEnd",
          "onMeasureDragConstraints",
          "onDirectionLock",
          "onDragTransitionEnd",
          "_dragX",
          "_dragY",
          "onHoverStart",
          "onHoverEnd",
          "onViewportEnter",
          "onViewportLeave",
          "globalTapTarget",
          "ignoreStrict",
          "viewport",
        ]);
      function eJ(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          t.startsWith("onLayout") ||
          eZ.has(t)
        );
      }
      let eQ = (t) => !eJ(t);
      try {
        !(function (t) {
          "function" == typeof t &&
            (eQ = (e) => (e.startsWith("on") ? !eJ(e) : t(e)));
        })(require("@emotion/is-prop-valid").default);
      } catch {}
      var e0 = r(845),
        e1 = r(2885);
      function e5(t) {
        return tQ(t) ? t.get() : t;
      }
      let e2 = (t) => (e, r) => {
          let i = (0, n.useContext)(eY),
            a = (0, n.useContext)(e0.t),
            o = () =>
              (function (
                { scrapeMotionValuesFromProps: t, createRenderState: e },
                r,
                i,
                n
              ) {
                return {
                  latestValues: (function (t, e, r, i) {
                    let n = {},
                      a = i(t, {});
                    for (let t in a) n[t] = e5(a[t]);
                    let { initial: o, animate: s } = t,
                      l = eg(t),
                      u = ev(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === s && (s = e.animate));
                    let c = !!r && !1 === r.initial,
                      d = (c = c || !1 === o) ? s : o;
                    if (d && "boolean" != typeof d && !eh(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      for (let r = 0; r < e.length; r++) {
                        let i = eb(t, e[r]);
                        if (i) {
                          let { transitionEnd: t, transition: e, ...r } = i;
                          for (let t in r) {
                            let e = r[t];
                            if (Array.isArray(e)) {
                              let t = c ? e.length - 1 : 0;
                              e = e[t];
                            }
                            null !== e && (n[t] = e);
                          }
                          for (let e in t) n[e] = t[e];
                        }
                      }
                    }
                    return n;
                  })(r, i, n, t),
                  renderState: e(),
                };
              })(t, e, i, a);
          return r ? o() : (0, e1.M)(o);
        },
        e3 = e2({ scrapeMotionValuesFromProps: eM, createRenderState: eG }),
        e4 = e2({ scrapeMotionValuesFromProps: eI, createRenderState: eK }),
        e9 = Symbol.for("motionComponentSymbol");
      function e6(t) {
        return (
          t &&
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      let e8 = "data-" + ej("framerAppearId"),
        e7 = (0, n.createContext)({});
      var rt = r(7494);
      function re(t) {
        var e, r;
        let { forwardMotionProps: i = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = arguments.length > 2 ? arguments[2] : void 0,
          o = arguments.length > 3 ? arguments[3] : void 0;
        a &&
          (function (t) {
            for (let e in t) ei[e] = { ...ei[e], ...t[e] };
          })(a);
        let s = eW(t) ? e4 : e3;
        function l(e, r) {
          var a, l, u;
          let c;
          let d = {
              ...(0, n.useContext)(eH.Q),
              ...e,
              layoutId: (function (t) {
                let { layoutId: e } = t,
                  r = (0, n.useContext)(eU.L).id;
                return r && void 0 !== e ? r + "-" + e : e;
              })(e),
            },
            { isStatic: h } = d,
            p = (function (t) {
              let { initial: e, animate: r } = (function (t, e) {
                if (eg(t)) {
                  let { initial: e, animate: r } = t;
                  return {
                    initial: !1 === e || ep(e) ? e : void 0,
                    animate: ep(r) ? r : void 0,
                  };
                }
                return !1 !== t.inherit ? e : {};
              })(t, (0, n.useContext)(eY));
              return (0, n.useMemo)(
                () => ({ initial: e, animate: r }),
                [eX(e), eX(r)]
              );
            })(e),
            f = s(e, h);
          if (!h && el.B) {
            (l = 0), (u = 0), (0, n.useContext)(eN).strict;
            let e = (function (t) {
              let { drag: e, layout: r } = ei;
              if (!e && !r) return {};
              let i = { ...e, ...r };
              return {
                MeasureLayout:
                  (null == e ? void 0 : e.isEnabled(t)) ||
                  (null == r ? void 0 : r.isEnabled(t))
                    ? i.MeasureLayout
                    : void 0,
                ProjectionNode: i.ProjectionNode,
              };
            })(d);
            (c = e.MeasureLayout),
              (p.visualElement = (function (t, e, r, i, a) {
                let { visualElement: o } = (0, n.useContext)(eY),
                  s = (0, n.useContext)(eN),
                  l = (0, n.useContext)(e0.t),
                  u = (0, n.useContext)(eH.Q).reducedMotion,
                  c = (0, n.useRef)(null);
                (i = i || s.renderer),
                  !c.current &&
                    i &&
                    (c.current = i(t, {
                      visualState: e,
                      parent: o,
                      props: r,
                      presenceContext: l,
                      blockInitialAnimation: !!l && !1 === l.initial,
                      reducedMotionConfig: u,
                    }));
                let d = c.current,
                  h = (0, n.useContext)(e7);
                d &&
                  !d.projection &&
                  a &&
                  ("html" === d.type || "svg" === d.type) &&
                  (function (t, e, r, i) {
                    let {
                      layoutId: n,
                      layout: a,
                      drag: o,
                      dragConstraints: s,
                      layoutScroll: l,
                      layoutRoot: u,
                      layoutCrossfade: c,
                    } = e;
                    (t.projection = new r(
                      t.latestValues,
                      e["data-framer-portal-id"]
                        ? void 0
                        : (function t(e) {
                            if (e)
                              return !1 !== e.options.allowProjection
                                ? e.projection
                                : t(e.parent);
                          })(t.parent)
                    )),
                      t.projection.setOptions({
                        layoutId: n,
                        layout: a,
                        alwaysMeasureLayout: !!o || (s && e6(s)),
                        visualElement: t,
                        animationType: "string" == typeof a ? a : "both",
                        initialPromotionConfig: i,
                        crossfade: c,
                        layoutScroll: l,
                        layoutRoot: u,
                      });
                  })(c.current, r, a, h);
                let p = (0, n.useRef)(!1);
                (0, n.useInsertionEffect)(() => {
                  d && p.current && d.update(r, l);
                });
                let f = r[e8],
                  m = (0, n.useRef)(
                    !!f &&
                      !window.MotionHandoffIsComplete?.(f) &&
                      window.MotionHasOptimisedAnimation?.(f)
                  );
                return (
                  (0, rt.E)(() => {
                    d &&
                      ((p.current = !0),
                      (window.MotionIsMounted = !0),
                      d.updateFeatures(),
                      d.scheduleRenderMicrotask(),
                      m.current &&
                        d.animationState &&
                        d.animationState.animateChanges());
                  }),
                  (0, n.useEffect)(() => {
                    d &&
                      (!m.current &&
                        d.animationState &&
                        d.animationState.animateChanges(),
                      m.current &&
                        (queueMicrotask(() => {
                          window.MotionHandoffMarkAsComplete?.(f);
                        }),
                        (m.current = !1)),
                      (d.enteringChildren = void 0));
                  }),
                  d
                );
              })(t, f, d, o, e.ProjectionNode));
          }
          return (0, ez.jsxs)(eY.Provider, {
            value: p,
            children: [
              c && p.visualElement
                ? (0, ez.jsx)(c, { visualElement: p.visualElement, ...d })
                : null,
              (function (t, e, r, { latestValues: i }, a, o = !1) {
                let s = (
                    eW(t)
                      ? function (t, e, r, i) {
                          let a = (0, n.useMemo)(() => {
                            let r = eK();
                            return (
                              eD(r, e, eL(i), t.transformTemplate, t.style),
                              { ...r.attrs, style: { ...r.style } }
                            );
                          }, [e]);
                          if (t.style) {
                            let e = {};
                            eq(e, t.style, t), (a.style = { ...e, ...a.style });
                          }
                          return a;
                        }
                      : function (t, e) {
                          let r = {},
                            i = (function (t, e) {
                              let r = t.style || {},
                                i = {};
                              return (
                                eq(i, r, t),
                                Object.assign(
                                  i,
                                  (function ({ transformTemplate: t }, e) {
                                    return (0, n.useMemo)(() => {
                                      let r = eG();
                                      return (
                                        eA(r, e, t),
                                        Object.assign({}, r.vars, r.style)
                                      );
                                    }, [e]);
                                  })(t, e)
                                ),
                                i
                              );
                            })(t, e);
                          return (
                            t.drag &&
                              !1 !== t.dragListener &&
                              ((r.draggable = !1),
                              (i.userSelect =
                                i.WebkitUserSelect =
                                i.WebkitTouchCallout =
                                  "none"),
                              (i.touchAction =
                                !0 === t.drag
                                  ? "none"
                                  : `pan-${"x" === t.drag ? "y" : "x"}`)),
                            void 0 === t.tabIndex &&
                              (t.onTap || t.onTapStart || t.whileTap) &&
                              (r.tabIndex = 0),
                            (r.style = i),
                            r
                          );
                        }
                  )(e, i, a, t),
                  l = (function (t, e, r) {
                    let i = {};
                    for (let n in t)
                      ("values" !== n || "object" != typeof t.values) &&
                        (eQ(n) ||
                          (!0 === r && eJ(n)) ||
                          (!e && !eJ(n)) ||
                          (t.draggable && n.startsWith("onDrag"))) &&
                        (i[n] = t[n]);
                    return i;
                  })(e, "string" == typeof t, o),
                  u = t !== n.Fragment ? { ...l, ...s, ref: r } : {},
                  { children: c } = e,
                  d = (0, n.useMemo)(() => (tQ(c) ? c.get() : c), [c]);
                return (0, n.createElement)(t, { ...u, children: d });
              })(
                t,
                e,
                ((a = p.visualElement),
                (0, n.useCallback)(
                  (t) => {
                    t && f.onMount && f.onMount(t),
                      a && (t ? a.mount(t) : a.unmount()),
                      r &&
                        ("function" == typeof r
                          ? r(t)
                          : e6(r) && (r.current = t));
                  },
                  [a]
                )),
                f,
                h,
                i
              ),
            ],
          });
        }
        l.displayName = "motion.".concat(
          "string" == typeof t
            ? t
            : "create(".concat(
                null !==
                  (r =
                    null !== (e = t.displayName) && void 0 !== e
                      ? e
                      : t.name) && void 0 !== r
                  ? r
                  : "",
                ")"
              )
        );
        let u = (0, n.forwardRef)(l);
        return (u[e9] = t), u;
      }
      function rr(t, e, r) {
        let i = t.getProps();
        return eb(i, e, void 0 !== r ? r : i.custom, t);
      }
      function ri(t, e) {
        return t?.[e] ?? t?.default ?? t;
      }
      let rn = (t) => Array.isArray(t);
      function ra(t, e) {
        let r = t.getValue("willChange");
        if (tQ(r) && r.add) return r.add(e);
        if (!r && to.WillChange) {
          let r = new to.WillChange("auto");
          t.addValue("willChange", r), r.add(e);
        }
      }
      function ro(t) {
        (t.duration = 0), t.type;
      }
      let rs = (t, e) => (r) => e(t(r)),
        rl = (...t) => t.reduce(rs),
        ru = (t) => 1e3 * t,
        rc = (t) => t / 1e3,
        rd = { layout: 0, mainThread: 0, waapi: 0 };
      function rh(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      function rp(t, e) {
        return (r) => (r > 0 ? e : t);
      }
      let rf = (t, e, r) => {
          let i = t * t,
            n = r * (e * e - i) + i;
          return n < 0 ? 0 : Math.sqrt(n);
        },
        rm = [tM, tE, t_],
        rg = (t) => rm.find((e) => e.test(t));
      function rv(t) {
        let e = rg(t);
        if (
          (Z(
            !!e,
            `'${t}' is not an animatable color. Use the equivalent color code instead.`,
            "color-not-animatable"
          ),
          !e)
        )
          return !1;
        let r = e.parse(t);
        return (
          e === t_ &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: i }) {
              (t /= 360), (r /= 100);
              let n = 0,
                a = 0,
                o = 0;
              if ((e /= 100)) {
                let i = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  s = 2 * r - i;
                (n = rh(s, i, t + 1 / 3)),
                  (a = rh(s, i, t)),
                  (o = rh(s, i, t - 1 / 3));
              } else n = a = o = r;
              return {
                red: Math.round(255 * n),
                green: Math.round(255 * a),
                blue: Math.round(255 * o),
                alpha: i,
              };
            })(r)),
          r
        );
      }
      let ry = (t, e) => {
          let r = rv(t),
            i = rv(e);
          if (!r || !i) return rp(t, e);
          let n = { ...r };
          return (t) => (
            (n.red = rf(r.red, i.red, t)),
            (n.green = rf(r.green, i.green, t)),
            (n.blue = rf(r.blue, i.blue, t)),
            (n.alpha = T(r.alpha, i.alpha, t)),
            tE.transform(n)
          );
        },
        rb = new Set(["none", "hidden"]);
      function rx(t, e) {
        return (r) => T(t, e, r);
      }
      function rk(t) {
        return "number" == typeof t
          ? rx
          : "string" == typeof t
          ? k(t)
            ? rp
            : tj.test(t)
            ? ry
            : rT
          : Array.isArray(t)
          ? rw
          : "object" == typeof t
          ? tj.test(t)
            ? ry
            : rS
          : rp;
      }
      function rw(t, e) {
        let r = [...t],
          i = r.length,
          n = t.map((t, r) => rk(t)(t, e[r]));
        return (t) => {
          for (let e = 0; e < i; e++) r[e] = n[e](t);
          return r;
        };
      }
      function rS(t, e) {
        let r = { ...t, ...e },
          i = {};
        for (let n in r)
          void 0 !== t[n] && void 0 !== e[n] && (i[n] = rk(t[n])(t[n], e[n]));
        return (t) => {
          for (let e in i) r[e] = i[e](t);
          return r;
        };
      }
      let rT = (t, e) => {
        let r = tW.createTransformer(e),
          i = tL(t),
          n = tL(e);
        return i.indexes.var.length === n.indexes.var.length &&
          i.indexes.color.length === n.indexes.color.length &&
          i.indexes.number.length >= n.indexes.number.length
          ? (rb.has(t) && !n.values.length) || (rb.has(e) && !i.values.length)
            ? (function (t, e) {
                return rb.has(t)
                  ? (r) => (r <= 0 ? t : e)
                  : (r) => (r >= 1 ? e : t);
              })(t, e)
            : rl(
                rw(
                  (function (t, e) {
                    let r = [],
                      i = { color: 0, var: 0, number: 0 };
                    for (let n = 0; n < e.values.length; n++) {
                      let a = e.types[n],
                        o = t.indexes[a][i[a]],
                        s = t.values[o] ?? 0;
                      (r[n] = s), i[a]++;
                    }
                    return r;
                  })(i, n),
                  n.values
                ),
                r
              )
          : (Z(
              !0,
              `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,
              "complex-values-different"
            ),
            rp(t, e));
      };
      function rP(t, e, r) {
        return "number" == typeof t &&
          "number" == typeof e &&
          "number" == typeof r
          ? T(t, e, r)
          : rk(t)(t, e);
      }
      let rA = (t) => {
          let e = ({ timestamp: e }) => t(e);
          return {
            start: (t = !0) => tc.update(e, t),
            stop: () => td(e),
            now: () => (th.isProcessing ? th.timestamp : t1.now()),
          };
        },
        rR = (t, e, r = 10) => {
          let i = "",
            n = Math.max(Math.round(e / r), 2);
          for (let e = 0; e < n; e++)
            i += Math.round(1e4 * t(e / (n - 1))) / 1e4 + ", ";
          return `linear(${i.substring(0, i.length - 2)})`;
        };
      function rC(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < 2e4; ) (e += 50), (r = t.next(e));
        return e >= 2e4 ? 1 / 0 : e;
      }
      function rE(t, e, r) {
        var i, n;
        let a = Math.max(e - 5, 0);
        return (i = r - t(a)), (n = e - a) ? (1e3 / n) * i : 0;
      }
      let rM = {
        stiffness: 100,
        damping: 10,
        mass: 1,
        velocity: 0,
        duration: 800,
        bounce: 0.3,
        visualDuration: 0.3,
        restSpeed: { granular: 0.01, default: 2 },
        restDelta: { granular: 0.005, default: 0.5 },
        minDuration: 0.01,
        maxDuration: 10,
        minDamping: 0.05,
        maxDamping: 1,
      };
      function r_(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let rj = ["duration", "bounce"],
        rB = ["stiffness", "damping", "mass"];
      function rV(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function rD(t = rM.visualDuration, e = rM.bounce) {
        let r;
        let i =
            "object" != typeof t
              ? { visualDuration: t, keyframes: [0, 1], bounce: e }
              : t,
          { restSpeed: n, restDelta: a } = i,
          o = i.keyframes[0],
          s = i.keyframes[i.keyframes.length - 1],
          l = { done: !1, value: o },
          {
            stiffness: u,
            damping: c,
            mass: d,
            duration: h,
            velocity: p,
            isResolvedFromDuration: f,
          } = (function (t) {
            let e = {
              velocity: rM.velocity,
              stiffness: rM.stiffness,
              damping: rM.damping,
              mass: rM.mass,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!rV(t, rB) && rV(t, rj)) {
              if (t.visualDuration) {
                let r = (2 * Math.PI) / (1.2 * t.visualDuration),
                  i = r * r,
                  n = 2 * L(0.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(i);
                e = { ...e, mass: rM.mass, stiffness: i, damping: n };
              } else {
                let r = (function ({
                  duration: t = rM.duration,
                  bounce: e = rM.bounce,
                  velocity: r = rM.velocity,
                  mass: i = rM.mass,
                }) {
                  let n, a;
                  Z(
                    t <= ru(rM.maxDuration),
                    "Spring duration must be 10 seconds or less",
                    "spring-duration-limit"
                  );
                  let o = 1 - e;
                  (o = L(rM.minDamping, rM.maxDamping, o)),
                    (t = L(rM.minDuration, rM.maxDuration, rc(t))),
                    o < 1
                      ? ((n = (e) => {
                          let i = e * o,
                            n = i * t;
                          return 0.001 - ((i - r) / r_(e, o)) * Math.exp(-n);
                        }),
                        (a = (e) => {
                          let i = e * o * t,
                            a = Math.pow(o, 2) * Math.pow(e, 2) * t,
                            s = Math.exp(-i),
                            l = r_(Math.pow(e, 2), o);
                          return (
                            ((i * r + r - a) *
                              s *
                              (-n(e) + 0.001 > 0 ? -1 : 1)) /
                            l
                          );
                        }))
                      : ((n = (e) =>
                          -0.001 + Math.exp(-e * t) * ((e - r) * t + 1)),
                        (a = (e) => t * t * (r - e) * Math.exp(-e * t)));
                  let s = (function (t, e, r) {
                    let i = r;
                    for (let r = 1; r < 12; r++) i -= t(i) / e(i);
                    return i;
                  })(n, a, 5 / t);
                  if (((t = ru(t)), isNaN(s)))
                    return {
                      stiffness: rM.stiffness,
                      damping: rM.damping,
                      duration: t,
                    };
                  {
                    let e = Math.pow(s, 2) * i;
                    return {
                      stiffness: e,
                      damping: 2 * o * Math.sqrt(i * e),
                      duration: t,
                    };
                  }
                })(t);
                (e = { ...e, ...r, mass: rM.mass }).isResolvedFromDuration = !0;
              }
            }
            return e;
          })({ ...i, velocity: -rc(i.velocity || 0) }),
          m = p || 0,
          g = c / (2 * Math.sqrt(u * d)),
          v = s - o,
          y = rc(Math.sqrt(u / d)),
          b = 5 > Math.abs(v);
        if (
          (n || (n = b ? rM.restSpeed.granular : rM.restSpeed.default),
          a || (a = b ? rM.restDelta.granular : rM.restDelta.default),
          g < 1)
        ) {
          let t = r_(y, g);
          r = (e) =>
            s -
            Math.exp(-g * y * e) *
              (((m + g * y * v) / t) * Math.sin(t * e) + v * Math.cos(t * e));
        } else if (1 === g)
          r = (t) => s - Math.exp(-y * t) * (v + (m + y * v) * t);
        else {
          let t = y * Math.sqrt(g * g - 1);
          r = (e) => {
            let r = Math.exp(-g * y * e),
              i = Math.min(t * e, 300);
            return (
              s -
              (r * ((m + g * y * v) * Math.sinh(i) + t * v * Math.cosh(i))) / t
            );
          };
        }
        let x = {
          calculatedDuration: (f && h) || null,
          next: (t) => {
            let e = r(t);
            if (f) l.done = t >= h;
            else {
              let i = 0 === t ? m : 0;
              g < 1 && (i = 0 === t ? ru(m) : rE(r, t, e));
              let o = Math.abs(s - e) <= a;
              l.done = Math.abs(i) <= n && o;
            }
            return (l.value = l.done ? s : e), l;
          },
          toString: () => {
            let t = Math.min(rC(x), 2e4),
              e = rR((e) => x.next(t * e).value, t, 30);
            return t + "ms " + e;
          },
          toTransition: () => {},
        };
        return x;
      }
      function rO({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: i = 325,
        bounceDamping: n = 10,
        bounceStiffness: a = 500,
        modifyTarget: o,
        min: s,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let d, h;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== s && t < s) || (void 0 !== l && t > l),
          g = (t) =>
            void 0 === s
              ? l
              : void 0 === l
              ? s
              : Math.abs(s - t) < Math.abs(l - t)
              ? s
              : l,
          v = r * e,
          y = p + v,
          b = void 0 === o ? y : o(y);
        b !== y && (v = b - p);
        let x = (t) => -v * Math.exp(-t / i),
          k = (t) => b + x(t),
          w = (t) => {
            let e = x(t),
              r = k(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? b : r);
          },
          S = (t) => {
            m(f.value) &&
              ((d = t),
              (h = rD({
                keyframes: [f.value, g(f.value)],
                velocity: rE(k, t, f.value),
                damping: n,
                stiffness: a,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          S(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (h || void 0 !== d || ((e = !0), w(t), S(t)),
              void 0 !== d && t >= d)
                ? h.next(t - d)
                : (e || w(t), f);
            },
          }
        );
      }
      rD.applyToOptions = (t) => {
        let e = (function (t, e = 100, r) {
          let i = r({ ...t, keyframes: [0, e] }),
            n = Math.min(rC(i), 2e4);
          return {
            type: "keyframes",
            ease: (t) => i.next(n * t).value / e,
            duration: rc(n),
          };
        })(t, 100, rD);
        return (
          (t.ease = e.ease),
          (t.duration = ru(e.duration)),
          (t.type = "keyframes"),
          t
        );
      };
      let rL = (t, e, r) =>
        (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function rI(t, e, r, i) {
        if (t === e && r === i) return ta;
        let n = (e) =>
          (function (t, e, r, i, n) {
            let a, o;
            let s = 0;
            do
              (a = rL((o = e + (r - e) / 2), i, n) - t) > 0 ? (r = o) : (e = o);
            while (Math.abs(a) > 1e-7 && ++s < 12);
            return o;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : rL(n(t), e, i));
      }
      let rF = rI(0.42, 0, 1, 1),
        r$ = rI(0, 0, 0.58, 1),
        rW = rI(0.42, 0, 0.58, 1),
        rz = (t) => Array.isArray(t) && "number" != typeof t[0],
        rU = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2,
        rN = (t) => (e) => 1 - t(1 - e),
        rH = rI(0.33, 1.53, 0.69, 0.99),
        rY = rN(rH),
        rX = rU(rY),
        rG = (t) =>
          (t *= 2) < 1 ? 0.5 * rY(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        rq = (t) => 1 - Math.sin(Math.acos(t)),
        rK = rN(rq),
        rZ = rU(rq),
        rJ = (t) => Array.isArray(t) && "number" == typeof t[0],
        rQ = {
          linear: ta,
          easeIn: rF,
          easeInOut: rW,
          easeOut: r$,
          circIn: rq,
          circInOut: rZ,
          circOut: rK,
          backIn: rY,
          backInOut: rX,
          backOut: rH,
          anticipate: rG,
        },
        r0 = (t) => "string" == typeof t,
        r1 = (t) => {
          if (rJ(t)) {
            J(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values.",
              "cubic-bezier-length"
            );
            let [e, r, i, n] = t;
            return rI(e, r, i, n);
          }
          return r0(t)
            ? (J(
                void 0 !== rQ[t],
                `Invalid easing type '${t}'`,
                "invalid-easing-type"
              ),
              rQ[t])
            : t;
        },
        r5 = (t, e, r) => {
          let i = e - t;
          return 0 === i ? 1 : (r - t) / i;
        };
      function r2({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: i = "easeInOut",
      }) {
        let n = rz(i) ? i.map(r1) : r1(i),
          a = { done: !1, value: e[0] },
          o = (function (t, e, { clamp: r = !0, ease: i, mixer: n } = {}) {
            let a = t.length;
            if (
              (J(
                a === e.length,
                "Both input and output ranges must be the same length",
                "range-length"
              ),
              1 === a)
            )
              return () => e[0];
            if (2 === a && e[0] === e[1]) return () => e[1];
            let o = t[0] === t[1];
            t[0] > t[a - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
            let s = (function (t, e, r) {
                let i = [],
                  n = r || to.mix || rP,
                  a = t.length - 1;
                for (let r = 0; r < a; r++) {
                  let a = n(t[r], t[r + 1]);
                  e && (a = rl(Array.isArray(e) ? e[r] || ta : e, a)),
                    i.push(a);
                }
                return i;
              })(e, i, n),
              l = s.length,
              u = (r) => {
                if (o && r < t[0]) return e[0];
                let i = 0;
                if (l > 1) for (; i < t.length - 2 && !(r < t[i + 1]); i++);
                let n = r5(t[i], t[i + 1], r);
                return s[i](n);
              };
            return r ? (e) => u(L(t[0], t[a - 1], e)) : u;
          })(
            (r && r.length === e.length
              ? r
              : (function (t) {
                  let e = [0];
                  return (
                    (function (t, e) {
                      let r = t[t.length - 1];
                      for (let i = 1; i <= e; i++) {
                        let n = r5(0, e, i);
                        t.push(T(r, 1, n));
                      }
                    })(e, t.length - 1),
                    e
                  );
                })(e)
            ).map((e) => e * t),
            e,
            {
              ease: Array.isArray(n)
                ? n
                : e.map(() => n || rW).splice(0, e.length - 1),
            }
          );
        return {
          calculatedDuration: t,
          next: (e) => ((a.value = o(e)), (a.done = e >= t), a),
        };
      }
      let r3 = (t) => null !== t;
      function r4(t, { repeat: e, repeatType: r = "loop" }, i, n = 1) {
        let a = t.filter(r3),
          o = n < 0 || (e && "loop" !== r && e % 2 == 1) ? 0 : a.length - 1;
        return o && void 0 !== i ? i : a[o];
      }
      let r9 = { decay: rO, inertia: rO, tween: r2, keyframes: r2, spring: rD };
      function r6(t) {
        "string" == typeof t.type && (t.type = r9[t.type]);
      }
      class r8 {
        constructor() {
          this.updateFinished();
        }
        get finished() {
          return this._finished;
        }
        updateFinished() {
          this._finished = new Promise((t) => {
            this.resolve = t;
          });
        }
        notifyFinished() {
          this.resolve();
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
      }
      let r7 = (t) => t / 100;
      class it extends r8 {
        constructor(t) {
          super(),
            (this.state = "idle"),
            (this.startTime = null),
            (this.isStopped = !1),
            (this.currentTime = 0),
            (this.holdTime = null),
            (this.playbackSpeed = 1),
            (this.stop = () => {
              let { motionValue: t } = this.options;
              t && t.updatedAt !== t1.now() && this.tick(t1.now()),
                (this.isStopped = !0),
                "idle" !== this.state &&
                  (this.teardown(), this.options.onStop?.());
            }),
            rd.mainThread++,
            (this.options = t),
            this.initAnimation(),
            this.play(),
            !1 === t.autoplay && this.pause();
        }
        initAnimation() {
          let { options: t } = this;
          r6(t);
          let {
              type: e = r2,
              repeat: r = 0,
              repeatDelay: i = 0,
              repeatType: n,
              velocity: a = 0,
            } = t,
            { keyframes: o } = t,
            s = e || r2;
          s !== r2 &&
            "number" != typeof o[0] &&
            ((this.mixKeyframes = rl(r7, rP(o[0], o[1]))), (o = [0, 100]));
          let l = s({ ...t, keyframes: o });
          "mirror" === n &&
            (this.mirroredGenerator = s({
              ...t,
              keyframes: [...o].reverse(),
              velocity: -a,
            })),
            null === l.calculatedDuration && (l.calculatedDuration = rC(l));
          let { calculatedDuration: u } = l;
          (this.calculatedDuration = u),
            (this.resolvedDuration = u + i),
            (this.totalDuration = this.resolvedDuration * (r + 1) - i),
            (this.generator = l);
        }
        updateTime(t) {
          let e = Math.round(t - this.startTime) * this.playbackSpeed;
          null !== this.holdTime
            ? (this.currentTime = this.holdTime)
            : (this.currentTime = e);
        }
        tick(t, e = !1) {
          let {
            generator: r,
            totalDuration: i,
            mixKeyframes: n,
            mirroredGenerator: a,
            resolvedDuration: o,
            calculatedDuration: s,
          } = this;
          if (null === this.startTime) return r.next(0);
          let {
            delay: l = 0,
            keyframes: u,
            repeat: c,
            repeatType: d,
            repeatDelay: h,
            type: p,
            onUpdate: f,
            finalKeyframe: m,
          } = this.options;
          this.speed > 0
            ? (this.startTime = Math.min(this.startTime, t))
            : this.speed < 0 &&
              (this.startTime = Math.min(t - i / this.speed, this.startTime)),
            e ? (this.currentTime = t) : this.updateTime(t);
          let g = this.currentTime - l * (this.playbackSpeed >= 0 ? 1 : -1),
            v = this.playbackSpeed >= 0 ? g < 0 : g > i;
          (this.currentTime = Math.max(g, 0)),
            "finished" === this.state &&
              null === this.holdTime &&
              (this.currentTime = i);
          let y = this.currentTime,
            b = r;
          if (c) {
            let t = Math.min(this.currentTime, i) / o,
              e = Math.floor(t),
              r = t % 1;
            !r && t >= 1 && (r = 1),
              1 === r && e--,
              (e = Math.min(e, c + 1)) % 2 &&
                ("reverse" === d
                  ? ((r = 1 - r), h && (r -= h / o))
                  : "mirror" === d && (b = a)),
              (y = L(0, 1, r) * o);
          }
          let x = v ? { done: !1, value: u[0] } : b.next(y);
          n && (x.value = n(x.value));
          let { done: k } = x;
          v ||
            null === s ||
            (k =
              this.playbackSpeed >= 0
                ? this.currentTime >= i
                : this.currentTime <= 0);
          let w =
            null === this.holdTime &&
            ("finished" === this.state || ("running" === this.state && k));
          return (
            w && p !== rO && (x.value = r4(u, this.options, m, this.speed)),
            f && f(x.value),
            w && this.finish(),
            x
          );
        }
        then(t, e) {
          return this.finished.then(t, e);
        }
        get duration() {
          return rc(this.calculatedDuration);
        }
        get time() {
          return rc(this.currentTime);
        }
        set time(t) {
          (t = ru(t)),
            (this.currentTime = t),
            null === this.startTime ||
            null !== this.holdTime ||
            0 === this.playbackSpeed
              ? (this.holdTime = t)
              : this.driver &&
                (this.startTime = this.driver.now() - t / this.playbackSpeed),
            this.driver?.start(!1);
        }
        get speed() {
          return this.playbackSpeed;
        }
        set speed(t) {
          this.updateTime(t1.now());
          let e = this.playbackSpeed !== t;
          (this.playbackSpeed = t), e && (this.time = rc(this.currentTime));
        }
        play() {
          if (this.isStopped) return;
          let { driver: t = rA, startTime: e } = this.options;
          this.driver || (this.driver = t((t) => this.tick(t))),
            this.options.onPlay?.();
          let r = this.driver.now();
          "finished" === this.state
            ? (this.updateFinished(), (this.startTime = r))
            : null !== this.holdTime
            ? (this.startTime = r - this.holdTime)
            : this.startTime || (this.startTime = e ?? r),
            "finished" === this.state &&
              this.speed < 0 &&
              (this.startTime += this.calculatedDuration),
            (this.holdTime = null),
            (this.state = "running"),
            this.driver.start();
        }
        pause() {
          (this.state = "paused"),
            this.updateTime(t1.now()),
            (this.holdTime = this.currentTime);
        }
        complete() {
          "running" !== this.state && this.play(),
            (this.state = "finished"),
            (this.holdTime = null);
        }
        finish() {
          this.notifyFinished(),
            this.teardown(),
            (this.state = "finished"),
            this.options.onComplete?.();
        }
        cancel() {
          (this.holdTime = null),
            (this.startTime = 0),
            this.tick(0),
            this.teardown(),
            this.options.onCancel?.();
        }
        teardown() {
          (this.state = "idle"),
            this.stopDriver(),
            (this.startTime = this.holdTime = null),
            rd.mainThread--;
        }
        stopDriver() {
          this.driver && (this.driver.stop(), (this.driver = void 0));
        }
        sample(t) {
          return (this.startTime = 0), this.tick(t, !0);
        }
        attachTimeline(t) {
          return (
            this.options.allowFlatten &&
              ((this.options.type = "keyframes"),
              (this.options.ease = "linear"),
              this.initAnimation()),
            this.driver?.stop(),
            t.observe(this)
          );
        }
      }
      let ie = (t) => t.startsWith("--");
      function ir(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      let ii = ir(() => void 0 !== window.ScrollTimeline),
        ia = {},
        io = (function (t, e) {
          let r = ir(t);
          return () => ia[e] ?? r();
        })(() => {
          try {
            document
              .createElement("div")
              .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
          } catch (t) {
            return !1;
          }
          return !0;
        }, "linearEasing"),
        is = ([t, e, r, i]) => `cubic-bezier(${t}, ${e}, ${r}, ${i})`,
        il = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: is([0, 0.65, 0.55, 1]),
          circOut: is([0.55, 0, 1, 0.45]),
          backIn: is([0.31, 0.01, 0.66, -0.59]),
          backOut: is([0.33, 1.53, 0.69, 0.99]),
        };
      function iu(t) {
        return "function" == typeof t && "applyToOptions" in t;
      }
      class ic extends r8 {
        constructor(t) {
          if ((super(), (this.finishedTime = null), (this.isStopped = !1), !t))
            return;
          let {
            element: e,
            name: r,
            keyframes: i,
            pseudoElement: n,
            allowFlatten: a = !1,
            finalKeyframe: o,
            onComplete: s,
          } = t;
          (this.isPseudoElement = !!n),
            (this.allowFlatten = a),
            (this.options = t),
            J(
              "string" != typeof t.type,
              'Mini animate() doesn\'t support "type" as a string.',
              "mini-spring"
            );
          let l = (function ({ type: t, ...e }) {
            return iu(t) && io()
              ? t.applyToOptions(e)
              : (e.duration ?? (e.duration = 300),
                e.ease ?? (e.ease = "easeOut"),
                e);
          })(t);
          (this.animation = (function (
            t,
            e,
            r,
            {
              delay: i = 0,
              duration: n = 300,
              repeat: a = 0,
              repeatType: o = "loop",
              ease: s = "easeOut",
              times: l,
            } = {},
            u
          ) {
            let c = { [e]: r };
            l && (c.offset = l);
            let d = (function t(e, r) {
              if (e)
                return "function" == typeof e
                  ? io()
                    ? rR(e, r)
                    : "ease-out"
                  : rJ(e)
                  ? is(e)
                  : Array.isArray(e)
                  ? e.map((e) => t(e, r) || il.easeOut)
                  : il[e];
            })(s, n);
            Array.isArray(d) && (c.easing = d), tl.value && rd.waapi++;
            let h = {
              delay: i,
              duration: n,
              easing: Array.isArray(d) ? "linear" : d,
              fill: "both",
              iterations: a + 1,
              direction: "reverse" === o ? "alternate" : "normal",
            };
            u && (h.pseudoElement = u);
            let p = t.animate(c, h);
            return (
              tl.value &&
                p.finished.finally(() => {
                  rd.waapi--;
                }),
              p
            );
          })(e, r, i, l, n)),
            !1 === l.autoplay && this.animation.pause(),
            (this.animation.onfinish = () => {
              if (((this.finishedTime = this.time), !n)) {
                let t = r4(i, this.options, o, this.speed);
                this.updateMotionValue
                  ? this.updateMotionValue(t)
                  : (function (t, e, r) {
                      ie(e) ? t.style.setProperty(e, r) : (t.style[e] = r);
                    })(e, r, t),
                  this.animation.cancel();
              }
              s?.(), this.notifyFinished();
            });
        }
        play() {
          this.isStopped ||
            (this.animation.play(),
            "finished" === this.state && this.updateFinished());
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.finish?.();
        }
        cancel() {
          try {
            this.animation.cancel();
          } catch (t) {}
        }
        stop() {
          if (this.isStopped) return;
          this.isStopped = !0;
          let { state: t } = this;
          "idle" !== t &&
            "finished" !== t &&
            (this.updateMotionValue
              ? this.updateMotionValue()
              : this.commitStyles(),
            this.isPseudoElement || this.cancel());
        }
        commitStyles() {
          this.isPseudoElement || this.animation.commitStyles?.();
        }
        get duration() {
          return rc(
            Number(this.animation.effect?.getComputedTiming?.().duration || 0)
          );
        }
        get time() {
          return rc(Number(this.animation.currentTime) || 0);
        }
        set time(t) {
          (this.finishedTime = null), (this.animation.currentTime = ru(t));
        }
        get speed() {
          return this.animation.playbackRate;
        }
        set speed(t) {
          t < 0 && (this.finishedTime = null),
            (this.animation.playbackRate = t);
        }
        get state() {
          return null !== this.finishedTime
            ? "finished"
            : this.animation.playState;
        }
        get startTime() {
          return Number(this.animation.startTime);
        }
        set startTime(t) {
          this.animation.startTime = t;
        }
        attachTimeline({ timeline: t, observe: e }) {
          return (this.allowFlatten &&
            this.animation.effect?.updateTiming({ easing: "linear" }),
          (this.animation.onfinish = null),
          t && ii())
            ? ((this.animation.timeline = t), ta)
            : e(this);
        }
      }
      let id = { anticipate: rG, backInOut: rX, circInOut: rZ };
      class ih extends ic {
        constructor(t) {
          !(function (t) {
            "string" == typeof t.ease && t.ease in id && (t.ease = id[t.ease]);
          })(t),
            r6(t),
            super(t),
            t.startTime && (this.startTime = t.startTime),
            (this.options = t);
        }
        updateMotionValue(t) {
          let {
            motionValue: e,
            onUpdate: r,
            onComplete: i,
            element: n,
            ...a
          } = this.options;
          if (!e) return;
          if (void 0 !== t) {
            e.set(t);
            return;
          }
          let o = new it({ ...a, autoplay: !1 }),
            s = ru(this.finishedTime ?? this.time);
          e.setWithVelocity(o.sample(s - 10).value, o.sample(s).value, 10),
            o.stop();
        }
      }
      let ip = (t, e) =>
          "zIndex" !== e &&
          !!(
            "number" == typeof t ||
            Array.isArray(t) ||
            ("string" == typeof t &&
              (tW.test(t) || "0" === t) &&
              !t.startsWith("url("))
          ),
        im = new Set(["opacity", "clipPath", "filter", "transform"]),
        ig = ir(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
      class iv extends r8 {
        constructor({
          autoplay: t = !0,
          delay: e = 0,
          type: r = "keyframes",
          repeat: i = 0,
          repeatDelay: n = 0,
          repeatType: a = "loop",
          keyframes: o,
          name: s,
          motionValue: l,
          element: u,
          ...c
        }) {
          super(),
            (this.stop = () => {
              this._animation &&
                (this._animation.stop(), this.stopTimeline?.()),
                this.keyframeResolver?.cancel();
            }),
            (this.createdAt = t1.now());
          let d = {
              autoplay: t,
              delay: e,
              type: r,
              repeat: i,
              repeatDelay: n,
              repeatType: a,
              name: s,
              motionValue: l,
              element: u,
              ...c,
            },
            h = u?.KeyframeResolver || tx;
          (this.keyframeResolver = new h(
            o,
            (t, e, r) => this.onKeyframesResolved(t, e, d, !r),
            s,
            l,
            u
          )),
            this.keyframeResolver?.scheduleResolve();
        }
        onKeyframesResolved(t, e, r, i) {
          this.keyframeResolver = void 0;
          let {
            name: n,
            type: a,
            velocity: o,
            delay: s,
            isHandoff: l,
            onUpdate: u,
          } = r;
          (this.resolvedAt = t1.now()),
            !(function (t, e, r, i) {
              let n = t[0];
              if (null === n) return !1;
              if ("display" === e || "visibility" === e) return !0;
              let a = t[t.length - 1],
                o = ip(n, e),
                s = ip(a, e);
              return (
                Z(
                  o === s,
                  `You are trying to animate ${e} from "${n}" to "${a}". "${
                    o ? a : n
                  }" is not an animatable value.`,
                  "value-not-animatable"
                ),
                !!o &&
                  !!s &&
                  ((function (t) {
                    let e = t[0];
                    if (1 === t.length) return !0;
                    for (let r = 0; r < t.length; r++)
                      if (t[r] !== e) return !0;
                  })(t) ||
                    (("spring" === r || iu(r)) && i))
              );
            })(t, n, a, o) &&
              ((to.instantAnimations || !s) && u?.(r4(t, r, e)),
              (t[0] = t[t.length - 1]),
              ro(r),
              (r.repeat = 0));
          let c = {
              startTime: i
                ? this.resolvedAt && this.resolvedAt - this.createdAt > 40
                  ? this.resolvedAt
                  : this.createdAt
                : void 0,
              finalKeyframe: e,
              ...r,
              keyframes: t,
            },
            d =
              !l &&
              (function (t) {
                let {
                  motionValue: e,
                  name: r,
                  repeatDelay: i,
                  repeatType: n,
                  damping: a,
                  type: o,
                } = t;
                if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                let { onUpdate: s, transformTemplate: l } = e.owner.getProps();
                return (
                  ig() &&
                  r &&
                  im.has(r) &&
                  ("transform" !== r || !l) &&
                  !s &&
                  !i &&
                  "mirror" !== n &&
                  0 !== a &&
                  "inertia" !== o
                );
              })(c)
                ? new ih({ ...c, element: c.motionValue.owner.current })
                : new it(c);
          d.finished.then(() => this.notifyFinished()).catch(ta),
            this.pendingTimeline &&
              ((this.stopTimeline = d.attachTimeline(this.pendingTimeline)),
              (this.pendingTimeline = void 0)),
            (this._animation = d);
        }
        get finished() {
          return this._animation ? this.animation.finished : this._finished;
        }
        then(t, e) {
          return this.finished.finally(t).then(() => {});
        }
        get animation() {
          return (
            this._animation ||
              (this.keyframeResolver?.resume(),
              (tv = !0),
              tb(),
              ty(),
              (tv = !1)),
            this._animation
          );
        }
        get duration() {
          return this.animation.duration;
        }
        get time() {
          return this.animation.time;
        }
        set time(t) {
          this.animation.time = t;
        }
        get speed() {
          return this.animation.speed;
        }
        get state() {
          return this.animation.state;
        }
        set speed(t) {
          this.animation.speed = t;
        }
        get startTime() {
          return this.animation.startTime;
        }
        attachTimeline(t) {
          return (
            this._animation
              ? (this.stopTimeline = this.animation.attachTimeline(t))
              : (this.pendingTimeline = t),
            () => this.stop()
          );
        }
        play() {
          this.animation.play();
        }
        pause() {
          this.animation.pause();
        }
        complete() {
          this.animation.complete();
        }
        cancel() {
          this._animation && this.animation.cancel(),
            this.keyframeResolver?.cancel();
        }
      }
      let iy = (t) => null !== t,
        ib = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        ix = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        ik = { type: "keyframes", duration: 0.8 },
        iw = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        iS = (t, { keyframes: e }) =>
          e.length > 2
            ? ik
            : o.has(t)
            ? t.startsWith("scale")
              ? ix(e[1])
              : ib
            : iw,
        iT =
          (t, e, r, i = {}, n, a) =>
          (o) => {
            let s = ri(i, t) || {},
              l = s.delay || i.delay || 0,
              { elapsed: u = 0 } = i;
            u -= ru(l);
            let c = {
              keyframes: Array.isArray(r) ? r : [null, r],
              ease: "easeOut",
              velocity: e.getVelocity(),
              ...s,
              delay: -u,
              onUpdate: (t) => {
                e.set(t), s.onUpdate && s.onUpdate(t);
              },
              onComplete: () => {
                o(), s.onComplete && s.onComplete();
              },
              name: t,
              motionValue: e,
              element: a ? void 0 : n,
            };
            !(function ({
              when: t,
              delay: e,
              delayChildren: r,
              staggerChildren: i,
              staggerDirection: n,
              repeat: a,
              repeatType: o,
              repeatDelay: s,
              from: l,
              elapsed: u,
              ...c
            }) {
              return !!Object.keys(c).length;
            })(s) && Object.assign(c, iS(t, c)),
              c.duration && (c.duration = ru(c.duration)),
              c.repeatDelay && (c.repeatDelay = ru(c.repeatDelay)),
              void 0 !== c.from && (c.keyframes[0] = c.from);
            let d = !1;
            if (
              ((!1 !== c.type && (0 !== c.duration || c.repeatDelay)) ||
                (ro(c), 0 !== c.delay || (d = !0)),
              (to.instantAnimations || to.skipAnimations) &&
                ((d = !0), ro(c), (c.delay = 0)),
              (c.allowFlatten = !s.type && !s.ease),
              d && !a && void 0 !== e.get())
            ) {
              let t = (function (t, { repeat: e, repeatType: r = "loop" }, i) {
                let n = t.filter(iy),
                  a = e && "loop" !== r && e % 2 == 1 ? 0 : n.length - 1;
                return n[a];
              })(c.keyframes, s);
              if (void 0 !== t) {
                tc.update(() => {
                  c.onUpdate(t), c.onComplete();
                });
                return;
              }
            }
            return s.isSync ? new it(c) : new iv(c);
          };
      function iP(t, e, { delay: r = 0, transitionOverride: i, type: n } = {}) {
        let {
          transition: a = t.getDefaultTransition(),
          transitionEnd: o,
          ...s
        } = e;
        i && (a = i);
        let l = [],
          u = n && t.animationState && t.animationState.getState()[n];
        for (let e in s) {
          let i = t.getValue(e, t.latestValues[e] ?? null),
            n = s[e];
          if (
            void 0 === n ||
            (u &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let i = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), i;
              })(u, e))
          )
            continue;
          let o = { delay: r, ...ri(a || {}, e) },
            c = i.get();
          if (
            void 0 !== c &&
            !i.isAnimating &&
            !Array.isArray(n) &&
            n === c &&
            !o.velocity
          )
            continue;
          let d = !1;
          if (window.MotionHandoffAnimation) {
            let r = t.props[e8];
            if (r) {
              let t = window.MotionHandoffAnimation(r, e, tc);
              null !== t && ((o.startTime = t), (d = !0));
            }
          }
          ra(t, e),
            i.start(
              iT(
                e,
                i,
                n,
                t.shouldReduceMotion && O.has(e) ? { type: !1 } : o,
                t,
                d
              )
            );
          let h = i.animation;
          h && l.push(h);
        }
        return (
          o &&
            Promise.all(l).then(() => {
              tc.update(() => {
                o &&
                  (function (t, e) {
                    let {
                      transitionEnd: r = {},
                      transition: i = {},
                      ...n
                    } = rr(t, e) || {};
                    for (let e in (n = { ...n, ...r })) {
                      var a;
                      let r = rn((a = n[e])) ? a[a.length - 1] || 0 : a;
                      t.hasValue(e)
                        ? t.getValue(e).set(r)
                        : t.addValue(e, t8(r));
                    }
                  })(t, o);
              });
            }),
          l
        );
      }
      function iA(t, e, r, i = 0, n = 1) {
        let a = Array.from(t)
            .sort((t, e) => t.sortNodePosition(e))
            .indexOf(e),
          o = t.size,
          s = (o - 1) * i;
        return "function" == typeof r ? r(a, o) : 1 === n ? a * i : s - a * i;
      }
      function iR(t, e, r = {}) {
        let i = rr(
            t,
            e,
            "exit" === r.type ? t.presenceContext?.custom : void 0
          ),
          { transition: n = t.getDefaultTransition() || {} } = i || {};
        r.transitionOverride && (n = r.transitionOverride);
        let a = i ? () => Promise.all(iP(t, i, r)) : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (i = 0) => {
                  let {
                    delayChildren: a = 0,
                    staggerChildren: o,
                    staggerDirection: s,
                  } = n;
                  return (function (t, e, r = 0, i = 0, n = 0, a = 1, o) {
                    let s = [];
                    for (let l of t.variantChildren)
                      l.notify("AnimationStart", e),
                        s.push(
                          iR(l, e, {
                            ...o,
                            delay:
                              r +
                              ("function" == typeof i ? 0 : i) +
                              iA(t.variantChildren, l, i, n, a),
                          }).then(() => l.notify("AnimationComplete", e))
                        );
                    return Promise.all(s);
                  })(t, e, i, a, o, s, r);
                }
              : () => Promise.resolve(),
          { when: s } = n;
        if (!s) return Promise.all([a(), o(r.delay)]);
        {
          let [t, e] = "beforeChildren" === s ? [a, o] : [o, a];
          return t().then(() => e());
        }
      }
      function iC(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let i = 0; i < r; i++) if (e[i] !== t[i]) return !1;
        return !0;
      }
      let iE = em.length,
        iM = [...ef].reverse(),
        i_ = ef.length;
      function ij(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      function iB() {
        return {
          animate: ij(!0),
          whileInView: ij(),
          whileHover: ij(),
          whileTap: ij(),
          whileDrag: ij(),
          whileFocus: ij(),
          exit: ij(),
        };
      }
      class iV {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      class iD extends iV {
        constructor(t) {
          super(t),
            t.animationState ||
              (t.animationState = (function (t) {
                let e = (e) =>
                    Promise.all(
                      e.map(({ animation: e, options: r }) =>
                        (function (t, e, r = {}) {
                          let i;
                          if ((t.notify("AnimationStart", e), Array.isArray(e)))
                            i = Promise.all(e.map((e) => iR(t, e, r)));
                          else if ("string" == typeof e) i = iR(t, e, r);
                          else {
                            let n =
                              "function" == typeof e ? rr(t, e, r.custom) : e;
                            i = Promise.all(iP(t, n, r));
                          }
                          return i.then(() => {
                            t.notify("AnimationComplete", e);
                          });
                        })(t, e, r)
                      )
                    ),
                  r = iB(),
                  i = !0,
                  n = (e) => (r, i) => {
                    let n = rr(
                      t,
                      i,
                      "exit" === e ? t.presenceContext?.custom : void 0
                    );
                    if (n) {
                      let { transition: t, transitionEnd: e, ...i } = n;
                      r = { ...r, ...i, ...e };
                    }
                    return r;
                  };
                function a(a) {
                  let { props: o } = t,
                    s =
                      (function t(e) {
                        if (!e) return;
                        if (!e.isControllingVariants) {
                          let r = (e.parent && t(e.parent)) || {};
                          return (
                            void 0 !== e.props.initial &&
                              (r.initial = e.props.initial),
                            r
                          );
                        }
                        let r = {};
                        for (let t = 0; t < iE; t++) {
                          let i = em[t],
                            n = e.props[i];
                          (ep(n) || !1 === n) && (r[i] = n);
                        }
                        return r;
                      })(t.parent) || {},
                    l = [],
                    u = new Set(),
                    c = {},
                    d = 1 / 0;
                  for (let e = 0; e < i_; e++) {
                    var h, p;
                    let f = iM[e],
                      m = r[f],
                      g = void 0 !== o[f] ? o[f] : s[f],
                      v = ep(g),
                      y = f === a ? m.isActive : null;
                    !1 === y && (d = e);
                    let b = g === s[f] && g !== o[f] && v;
                    if (
                      (b && i && t.manuallyAnimateOnMount && (b = !1),
                      (m.protectedKeys = { ...c }),
                      (!m.isActive && null === y) ||
                        (!g && !m.prevProp) ||
                        eh(g) ||
                        "boolean" == typeof g)
                    )
                      continue;
                    let x =
                        ((h = m.prevProp),
                        "string" == typeof (p = g)
                          ? p !== h
                          : !!Array.isArray(p) && !iC(p, h)),
                      k =
                        x || (f === a && m.isActive && !b && v) || (e > d && v),
                      w = !1,
                      S = Array.isArray(g) ? g : [g],
                      T = S.reduce(n(f), {});
                    !1 === y && (T = {});
                    let { prevResolvedValues: P = {} } = m,
                      A = { ...P, ...T },
                      R = (e) => {
                        (k = !0),
                          u.has(e) && ((w = !0), u.delete(e)),
                          (m.needsAnimating[e] = !0);
                        let r = t.getValue(e);
                        r && (r.liveStyle = !1);
                      };
                    for (let t in A) {
                      let e = T[t],
                        r = P[t];
                      if (c.hasOwnProperty(t)) continue;
                      let i = !1;
                      (rn(e) && rn(r) ? iC(e, r) : e === r)
                        ? void 0 !== e && u.has(t)
                          ? R(t)
                          : (m.protectedKeys[t] = !0)
                        : null != e
                        ? R(t)
                        : u.add(t);
                    }
                    (m.prevProp = g),
                      (m.prevResolvedValues = T),
                      m.isActive && (c = { ...c, ...T }),
                      i && t.blockInitialAnimation && (k = !1);
                    let C = b && x,
                      E = !C || w;
                    k &&
                      E &&
                      l.push(
                        ...S.map((e) => {
                          let r = { type: f };
                          if (
                            "string" == typeof e &&
                            i &&
                            !C &&
                            t.manuallyAnimateOnMount &&
                            t.parent
                          ) {
                            let { parent: i } = t,
                              n = rr(i, e);
                            if (i.enteringChildren && n) {
                              let { delayChildren: e } = n.transition || {};
                              r.delay = iA(i.enteringChildren, t, e);
                            }
                          }
                          return { animation: e, options: r };
                        })
                      );
                  }
                  if (u.size) {
                    let e = {};
                    if ("boolean" != typeof o.initial) {
                      let r = rr(
                        t,
                        Array.isArray(o.initial) ? o.initial[0] : o.initial
                      );
                      r && r.transition && (e.transition = r.transition);
                    }
                    u.forEach((r) => {
                      let i = t.getBaseTarget(r),
                        n = t.getValue(r);
                      n && (n.liveStyle = !0), (e[r] = i ?? null);
                    }),
                      l.push({ animation: e });
                  }
                  let f = !!l.length;
                  return (
                    i &&
                      (!1 === o.initial || o.initial === o.animate) &&
                      !t.manuallyAnimateOnMount &&
                      (f = !1),
                    (i = !1),
                    f ? e(l) : Promise.resolve()
                  );
                }
                return {
                  animateChanges: a,
                  setActive: function (e, i) {
                    if (r[e].isActive === i) return Promise.resolve();
                    t.variantChildren?.forEach((t) =>
                      t.animationState?.setActive(e, i)
                    ),
                      (r[e].isActive = i);
                    let n = a(e);
                    for (let t in r) r[t].protectedKeys = {};
                    return n;
                  },
                  setAnimateFunction: function (r) {
                    e = r(t);
                  },
                  getState: () => r,
                  reset: () => {
                    (r = iB()), (i = !0);
                  },
                };
              })(t));
        }
        updateAnimationControlsSubscription() {
          let { animate: t } = this.node.getProps();
          eh(t) && (this.unmountControls = t.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: t } = this.node.getProps(),
            { animate: e } = this.node.prevProps || {};
          t !== e && this.updateAnimationControlsSubscription();
        }
        unmount() {
          this.node.animationState.reset(), this.unmountControls?.();
        }
      }
      let iO = 0;
      class iL extends iV {
        constructor() {
          super(...arguments), (this.id = iO++);
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: t, onExitComplete: e } = this.node.presenceContext,
            { isPresent: r } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || t === r) return;
          let i = this.node.animationState.setActive("exit", !t);
          e &&
            !t &&
            i.then(() => {
              e(this.id);
            });
        }
        mount() {
          let { register: t, onExitComplete: e } =
            this.node.presenceContext || {};
          e && e(this.id), t && (this.unmount = t(this.id));
        }
        unmount() {}
      }
      let iI = { x: !1, y: !1 };
      function iF(t, e, r, i = { passive: !0 }) {
        return t.addEventListener(e, r, i), () => t.removeEventListener(e, r);
      }
      let i$ = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function iW(t) {
        return { point: { x: t.pageX, y: t.pageY } };
      }
      let iz = (t) => (e) => i$(e) && t(e, iW(e));
      function iU(t, e, r, i) {
        return iF(t, e, iz(r), i);
      }
      function iN(t) {
        return t.max - t.min;
      }
      function iH(t, e, r, i = 0.5) {
        (t.origin = i),
          (t.originPoint = T(e.min, e.max, t.origin)),
          (t.scale = iN(r) / iN(e)),
          (t.translate = T(r.min, r.max, t.origin) - t.originPoint),
          ((t.scale >= 0.9999 && t.scale <= 1.0001) || isNaN(t.scale)) &&
            (t.scale = 1),
          ((t.translate >= -0.01 && t.translate <= 0.01) ||
            isNaN(t.translate)) &&
            (t.translate = 0);
      }
      function iY(t, e, r, i) {
        iH(t.x, e.x, r.x, i ? i.originX : void 0),
          iH(t.y, e.y, r.y, i ? i.originY : void 0);
      }
      function iX(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + iN(e));
      }
      function iG(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + iN(e));
      }
      function iq(t, e, r) {
        iG(t.x, e.x, r.x), iG(t.y, e.y, r.y);
      }
      function iK(t) {
        return [t("x"), t("y")];
      }
      let iZ = ({ current: t }) => (t ? t.ownerDocument.defaultView : null),
        iJ = (t, e) => Math.abs(t - e);
      class iQ {
        constructor(
          t,
          e,
          {
            transformPagePoint: r,
            contextWindow: i = window,
            dragSnapToOrigin: n = !1,
            distanceThreshold: a = 3,
          } = {}
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = i5(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                r =
                  (function (t, e) {
                    return Math.sqrt(iJ(t.x, e.x) ** 2 + iJ(t.y, e.y) ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!e && !r) return;
              let { point: i } = t,
                { timestamp: n } = th;
              this.history.push({ ...i, timestamp: n });
              let { onStart: a, onMove: o } = this.handlers;
              e ||
                (a && a(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = i0(e, this.transformPagePoint)),
                tc.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              this.end();
              let {
                onEnd: r,
                onSessionEnd: i,
                resumeAnimation: n,
              } = this.handlers;
              if (
                (this.dragSnapToOrigin && n && n(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = i5(
                "pointercancel" === t.type
                  ? this.lastMoveEventInfo
                  : i0(e, this.transformPagePoint),
                this.history
              );
              this.startEvent && r && r(t, a), i && i(t, a);
            }),
            !i$(t))
          )
            return;
          (this.dragSnapToOrigin = n),
            (this.handlers = e),
            (this.transformPagePoint = r),
            (this.distanceThreshold = a),
            (this.contextWindow = i || window);
          let o = i0(iW(t), this.transformPagePoint),
            { point: s } = o,
            { timestamp: l } = th;
          this.history = [{ ...s, timestamp: l }];
          let { onSessionStart: u } = e;
          u && u(t, i5(o, this.history)),
            (this.removeListeners = rl(
              iU(this.contextWindow, "pointermove", this.handlePointerMove),
              iU(this.contextWindow, "pointerup", this.handlePointerUp),
              iU(this.contextWindow, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(), td(this.updatePoint);
        }
      }
      function i0(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function i1(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function i5({ point: t }, e) {
        return {
          point: t,
          delta: i1(t, i2(e)),
          offset: i1(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let r = t.length - 1,
              i = null,
              n = i2(t);
            for (
              ;
              r >= 0 && ((i = t[r]), !(n.timestamp - i.timestamp > ru(0.1)));

            )
              r--;
            if (!i) return { x: 0, y: 0 };
            let a = rc(n.timestamp - i.timestamp);
            if (0 === a) return { x: 0, y: 0 };
            let o = { x: (n.x - i.x) / a, y: (n.y - i.y) / a };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0.1),
        };
      }
      function i2(t) {
        return t[t.length - 1];
      }
      function i3(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function i4(t, e) {
        let r = e.min - t.min,
          i = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([r, i] = [i, r]), { min: r, max: i }
        );
      }
      function i9(t, e, r) {
        return { min: i6(t, e), max: i6(t, r) };
      }
      function i6(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      let i8 = new WeakMap();
      class i7 {
        constructor(t) {
          (this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = es()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1, distanceThreshold: r } = {}) {
          let { presenceContext: i } = this.visualElement;
          if (i && !1 === i.isPresent) return;
          let { dragSnapToOrigin: n } = this.getProps();
          this.panSession = new iQ(
            t,
            {
              onSessionStart: (t) => {
                let { dragSnapToOrigin: r } = this.getProps();
                r ? this.pauseAnimation() : this.stopAnimation(),
                  e && this.snapToCursor(iW(t).point);
              },
              onStart: (t, e) => {
                var r;
                let {
                  drag: i,
                  dragPropagation: n,
                  onDragStart: a,
                } = this.getProps();
                if (
                  i &&
                  !n &&
                  (this.openDragLock && this.openDragLock(),
                  (this.openDragLock =
                    "x" === (r = i) || "y" === r
                      ? iI[r]
                        ? null
                        : ((iI[r] = !0),
                          () => {
                            iI[r] = !1;
                          })
                      : iI.x || iI.y
                      ? null
                      : ((iI.x = iI.y = !0),
                        () => {
                          iI.x = iI.y = !1;
                        })),
                  !this.openDragLock)
                )
                  return;
                (this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  (this.isDragging = !0),
                  (this.currentDirection = null),
                  this.resolveConstraints(),
                  this.visualElement.projection &&
                    ((this.visualElement.projection.isAnimationBlocked = !0),
                    (this.visualElement.projection.target = void 0)),
                  iK((t) => {
                    let e = this.getAxisMotionValue(t).get() || 0;
                    if (U.test(e)) {
                      let { projection: r } = this.visualElement;
                      if (r && r.layout) {
                        let i = r.layout.layoutBox[t];
                        i && (e = iN(i) * (parseFloat(e) / 100));
                      }
                    }
                    this.originPoint[t] = e;
                  }),
                  a && tc.postRender(() => a(t, e)),
                  ra(this.visualElement, "transform");
                let { animationState: o } = this.visualElement;
                o && o.setActive("whileDrag", !0);
              },
              onMove: (t, e) => {
                (this.latestPointerEvent = t), (this.latestPanInfo = e);
                let {
                  dragPropagation: r,
                  dragDirectionLock: i,
                  onDirectionLock: n,
                  onDrag: a,
                } = this.getProps();
                if (!r && !this.openDragLock) return;
                let { offset: o } = e;
                if (i && null === this.currentDirection) {
                  (this.currentDirection = (function (t, e = 10) {
                    let r = null;
                    return (
                      Math.abs(t.y) > e
                        ? (r = "y")
                        : Math.abs(t.x) > e && (r = "x"),
                      r
                    );
                  })(o)),
                    null !== this.currentDirection &&
                      n &&
                      n(this.currentDirection);
                  return;
                }
                this.updateAxis("x", e.point, o),
                  this.updateAxis("y", e.point, o),
                  this.visualElement.render(),
                  a && a(t, e);
              },
              onSessionEnd: (t, e) => {
                (this.latestPointerEvent = t),
                  (this.latestPanInfo = e),
                  this.stop(t, e),
                  (this.latestPointerEvent = null),
                  (this.latestPanInfo = null);
              },
              resumeAnimation: () =>
                iK(
                  (t) =>
                    "paused" === this.getAnimationState(t) &&
                    this.getAxisMotionValue(t).animation?.play()
                ),
            },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: n,
              distanceThreshold: r,
              contextWindow: iZ(this.visualElement),
            }
          );
        }
        stop(t, e) {
          let r = t || this.latestPointerEvent,
            i = e || this.latestPanInfo,
            n = this.isDragging;
          if ((this.cancel(), !n || !i || !r)) return;
          let { velocity: a } = i;
          this.startAnimation(a);
          let { onDragEnd: o } = this.getProps();
          o && tc.postRender(() => o(r, i));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openDragLock &&
            (this.openDragLock(), (this.openDragLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, r) {
          let { drag: i } = this.getProps();
          if (!r || !nt(t, i, this.currentDirection)) return;
          let n = this.getAxisMotionValue(t),
            a = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (a = (function (t, { min: e, max: r }, i) {
              return (
                void 0 !== e && t < e
                  ? (t = i ? T(e, t, i.min) : Math.max(t, e))
                  : void 0 !== r &&
                    t > r &&
                    (t = i ? T(r, t, i.max) : Math.min(t, r)),
                t
              );
            })(a, this.constraints[t], this.elastic[t])),
            n.set(a);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            r =
              this.visualElement.projection &&
              !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            i = this.constraints;
          t && e6(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = (function (
                t,
                { top: e, left: r, bottom: i, right: n }
              ) {
                return { x: i3(t.x, r, n), y: i3(t.y, e, i) };
              })(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: i9(t, "left", "right"), y: i9(t, "top", "bottom") }
              );
            })(e)),
            i !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              iK((t) => {
                !1 !== this.constraints &&
                  this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let r = {};
                    return (
                      void 0 !== e.min && (r.min = e.min - t.min),
                      void 0 !== e.max && (r.max = e.max - t.min),
                      r
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: r } =
            this.getProps();
          if (!e || !e6(e)) return !1;
          let i = e.current;
          J(
            null !== i,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            "drag-constraints-ref"
          );
          let { projection: n } = this.visualElement;
          if (!n || !n.layout) return !1;
          let a = (function (t, e, r) {
              let i = D(t, r),
                { scroll: n } = e;
              return n && (j(i.x, n.offset.x), j(i.y, n.offset.y)), i;
            })(i, n.root, this.visualElement.getTransformPagePoint()),
            o = { x: i4((t = n.layout.layoutBox).x, a.x), y: i4(t.y, a.y) };
          if (r) {
            let t = r(
              (function ({ x: t, y: e }) {
                return { top: e.min, right: t.max, bottom: e.max, left: t.min };
              })(o)
            );
            (this.hasMutatedConstraints = !!t), t && (o = S(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: r,
              dragElastic: i,
              dragTransition: n,
              dragSnapToOrigin: a,
              onDragTransitionEnd: o,
            } = this.getProps(),
            s = this.constraints || {};
          return Promise.all(
            iK((o) => {
              if (!nt(o, e, this.currentDirection)) return;
              let l = (s && s[o]) || {};
              a && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? t[o] : 0,
                bounceStiffness: i ? 200 : 1e6,
                bounceDamping: i ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...n,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            })
          ).then(o);
        }
        startAxisValueAnimation(t, e) {
          let r = this.getAxisMotionValue(t);
          return (
            ra(this.visualElement, t),
            r.start(iT(t, r, 0, e, this.visualElement, !1))
          );
        }
        stopAnimation() {
          iK((t) => this.getAxisMotionValue(t).stop());
        }
        pauseAnimation() {
          iK((t) => this.getAxisMotionValue(t).animation?.pause());
        }
        getAnimationState(t) {
          return this.getAxisMotionValue(t).animation?.state;
        }
        getAxisMotionValue(t) {
          let e = `_drag${t.toUpperCase()}`,
            r = this.visualElement.getProps();
          return (
            r[e] ||
            this.visualElement.getValue(
              t,
              (r.initial ? r.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          iK((e) => {
            let { drag: r } = this.getProps();
            if (!nt(e, r, this.currentDirection)) return;
            let { projection: i } = this.visualElement,
              n = this.getAxisMotionValue(e);
            if (i && i.layout) {
              let { min: r, max: a } = i.layout.layoutBox[e];
              n.set(t[e] - T(r, a, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!e6(e) || !r || !this.constraints) return;
          this.stopAnimation();
          let i = { x: 0, y: 0 };
          iK((t) => {
            let e = this.getAxisMotionValue(t);
            if (e && !1 !== this.constraints) {
              let r = e.get();
              i[t] = (function (t, e) {
                let r = 0.5,
                  i = iN(t),
                  n = iN(e);
                return (
                  n > i
                    ? (r = r5(e.min, e.max - i, t.min))
                    : i > n && (r = r5(t.min, t.max - n, e.min)),
                  L(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[t]);
            }
          });
          let { transformTemplate: n } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = n ? n({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            iK((e) => {
              if (!nt(e, t, null)) return;
              let r = this.getAxisMotionValue(e),
                { min: n, max: a } = this.constraints[e];
              r.set(T(n, a, i[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          i8.set(this.visualElement, this);
          let t = iU(this.visualElement.current, "pointerdown", (t) => {
              let { drag: e, dragListener: r = !0 } = this.getProps();
              e && r && this.start(t);
            }),
            e = () => {
              let { dragConstraints: t } = this.getProps();
              e6(t) &&
                t.current &&
                (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener("measure", e);
          r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()),
            tc.read(e);
          let n = iF(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            a = r.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (iK((e) => {
                    let r = this.getAxisMotionValue(e);
                    r &&
                      ((this.originPoint[e] += t[e].translate),
                      r.set(r.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            n(), t(), i(), a && a();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: i = !1,
              dragConstraints: n = !1,
              dragElastic: a = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: n,
            dragElastic: a,
            dragMomentum: o,
          };
        }
      }
      function nt(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t);
      }
      class ne extends iV {
        constructor(t) {
          super(t),
            (this.removeGroupControls = ta),
            (this.removeListeners = ta),
            (this.controls = new i7(t));
        }
        mount() {
          let { dragControls: t } = this.node.getProps();
          t && (this.removeGroupControls = t.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || ta);
        }
        unmount() {
          this.removeGroupControls(), this.removeListeners();
        }
      }
      let nr = (t) => (e, r) => {
        t && tc.postRender(() => t(e, r));
      };
      class ni extends iV {
        constructor() {
          super(...arguments), (this.removePointerDownListener = ta);
        }
        onPointerDown(t) {
          this.session = new iQ(t, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: iZ(this.node),
          });
        }
        createPanHandlers() {
          let {
            onPanSessionStart: t,
            onPanStart: e,
            onPan: r,
            onPanEnd: i,
          } = this.node.getProps();
          return {
            onSessionStart: nr(t),
            onStart: nr(e),
            onMove: r,
            onEnd: (t, e) => {
              delete this.session, i && tc.postRender(() => i(t, e));
            },
          };
        }
        mount() {
          this.removePointerDownListener = iU(
            this.node.current,
            "pointerdown",
            (t) => this.onPointerDown(t)
          );
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          this.removePointerDownListener(), this.session && this.session.end();
        }
      }
      var nn = r(2082);
      let na = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function no(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let ns = {
          correct: (t, e) => {
            if (!e.target) return t;
            if ("string" == typeof t) {
              if (!N.test(t)) return t;
              t = parseFloat(t);
            }
            let r = no(t, e.target.x),
              i = no(t, e.target.y);
            return `${r}% ${i}%`;
          },
        },
        nl = !1;
      class nu extends n.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
              layoutId: i,
            } = this.props,
            { projection: n } = t;
          !(function (t) {
            for (let e in t) (eC[e] = t[e]), b(e) && (eC[e].isCSSVariable = !0);
          })(nd),
            n &&
              (e.group && e.group.add(n),
              r && r.register && i && r.register(n),
              nl && n.root.didUpdate(),
              n.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              n.setOptions({
                ...n.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (na.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: r,
              drag: i,
              isPresent: n,
            } = this.props,
            { projection: a } = r;
          return (
            a &&
              ((a.isPresent = n),
              (nl = !0),
              i || t.layoutDependency !== e || void 0 === e || t.isPresent !== n
                ? a.willUpdate()
                : this.safeToRemove(),
              t.isPresent === n ||
                (n
                  ? a.promote()
                  : a.relegate() ||
                    tc.postRender(() => {
                      let t = a.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            ee.postRender(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
            } = this.props,
            { projection: i } = t;
          (nl = !0),
            i &&
              (i.scheduleCheckAfterUnmount(),
              e && e.group && e.group.remove(i),
              r && r.deregister && r.deregister(i));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function nc(t) {
        let [e, r] = (0, nn.xQ)(),
          i = (0, n.useContext)(eU.L);
        return (0, ez.jsx)(nu, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, n.useContext)(e7),
          isPresent: e,
          safeToRemove: r,
        });
      }
      let nd = {
        borderRadius: {
          ...ns,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: ns,
        borderTopRightRadius: ns,
        borderBottomLeftRadius: ns,
        borderBottomRightRadius: ns,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: r }) => {
            let i = tW.parse(t);
            if (i.length > 5) return t;
            let n = tW.createTransformer(t),
              a = +("number" != typeof i[0]),
              o = r.x.scale * e.x,
              s = r.y.scale * e.y;
            (i[0 + a] /= o), (i[1 + a] /= s);
            let l = T(o, s, 0.5);
            return (
              "number" == typeof i[2 + a] && (i[2 + a] /= l),
              "number" == typeof i[3 + a] && (i[3 + a] /= l),
              n(i)
            );
          },
        },
      };
      var nh = r(6983);
      function np(t) {
        return (0, nh.G)(t) && "ownerSVGElement" in t;
      }
      let nf = (t, e) => t.depth - e.depth;
      class nm {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          t5(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          t2(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(nf),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      let ng = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        nv = ng.length,
        ny = (t) => ("string" == typeof t ? parseFloat(t) : t),
        nb = (t) => "number" == typeof t || N.test(t);
      function nx(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let nk = nS(0, 0.5, rK),
        nw = nS(0.5, 0.95, ta);
      function nS(t, e, r) {
        return (i) => (i < t ? 0 : i > e ? 1 : r(r5(t, e, i)));
      }
      function nT(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function nP(t, e) {
        nT(t.x, e.x), nT(t.y, e.y);
      }
      function nA(t, e) {
        (t.translate = e.translate),
          (t.scale = e.scale),
          (t.originPoint = e.originPoint),
          (t.origin = e.origin);
      }
      function nR(t, e, r, i, n) {
        return (
          (t -= e),
          (t = i + (1 / r) * (t - i)),
          void 0 !== n && (t = i + (1 / n) * (t - i)),
          t
        );
      }
      function nC(t, e, [r, i, n], a, o) {
        !(function (t, e = 0, r = 1, i = 0.5, n, a = t, o = t) {
          if (
            (U.test(e) &&
              ((e = parseFloat(e)), (e = T(o.min, o.max, e / 100) - o.min)),
            "number" != typeof e)
          )
            return;
          let s = T(a.min, a.max, i);
          t === a && (s -= e),
            (t.min = nR(t.min, e, r, s, n)),
            (t.max = nR(t.max, e, r, s, n));
        })(t, e[r], e[i], e[n], e.scale, a, o);
      }
      let nE = ["x", "scaleX", "originX"],
        nM = ["y", "scaleY", "originY"];
      function n_(t, e, r, i) {
        nC(t.x, e, nE, r ? r.x : void 0, i ? i.x : void 0),
          nC(t.y, e, nM, r ? r.y : void 0, i ? i.y : void 0);
      }
      function nj(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function nB(t) {
        return nj(t.x) && nj(t.y);
      }
      function nV(t, e) {
        return t.min === e.min && t.max === e.max;
      }
      function nD(t, e) {
        return (
          Math.round(t.min) === Math.round(e.min) &&
          Math.round(t.max) === Math.round(e.max)
        );
      }
      function nO(t, e) {
        return nD(t.x, e.x) && nD(t.y, e.y);
      }
      function nL(t) {
        return iN(t.x) / iN(t.y);
      }
      function nI(t, e) {
        return (
          t.translate === e.translate &&
          t.scale === e.scale &&
          t.originPoint === e.originPoint
        );
      }
      class nF {
        constructor() {
          this.members = [];
        }
        add(t) {
          t5(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            (t2(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let r = this.members.findIndex((e) => t === e);
          if (0 === r) return !1;
          for (let t = r; t >= 0; t--) {
            let r = this.members[t];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: i } = t.options;
            !1 === i && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: r } = t;
            e.onExitComplete && e.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      let n$ = {
          nodes: 0,
          calculatedTargetDeltas: 0,
          calculatedProjections: 0,
        },
        nW = ["", "X", "Y", "Z"],
        nz = 0;
      function nU(t, e, r, i) {
        let { latestValues: n } = e;
        n[t] && ((r[t] = n[t]), e.setStaticValue(t, 0), i && (i[t] = 0));
      }
      function nN({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: i,
        resetTransform: n,
      }) {
        return class {
          constructor(t = {}, r = e?.()) {
            (this.id = nz++),
              (this.animationId = 0),
              (this.animationCommitId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.hasCheckedOptimisedAppear = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.scheduleUpdate = () => this.update()),
              (this.projectionUpdateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (this.projectionUpdateScheduled = !1),
                  tl.value &&
                    (n$.nodes =
                      n$.calculatedTargetDeltas =
                      n$.calculatedProjections =
                        0),
                  this.nodes.forEach(nX),
                  this.nodes.forEach(n0),
                  this.nodes.forEach(n1),
                  this.nodes.forEach(nG),
                  tl.addProjectionMetrics && tl.addProjectionMetrics(n$);
              }),
              (this.resolvedRelativeTargetAt = 0),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new nm());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) || this.eventHandlers.set(t, new t3()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let r = this.eventHandlers.get(t);
            r && r.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e) {
            if (this.instance) return;
            (this.isSVG = np(e) && !(np(e) && "svg" === e.tagName)),
              (this.instance = e);
            let { layoutId: r, layout: i, visualElement: n } = this.options;
            if (
              (n && !n.current && n.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              this.root.hasTreeAnimated &&
                (i || r) &&
                (this.isLayoutDirty = !0),
              t)
            ) {
              let r;
              let i = 0,
                n = () => (this.root.updateBlockedByResize = !1);
              tc.read(() => {
                i = window.innerWidth;
              }),
                t(e, () => {
                  let t = window.innerWidth;
                  t !== i &&
                    ((i = t),
                    (this.root.updateBlockedByResize = !0),
                    r && r(),
                    (r = (function (t, e) {
                      let r = t1.now(),
                        i = ({ timestamp: n }) => {
                          let a = n - r;
                          a >= 250 && (td(i), t(a - e));
                        };
                      return tc.setup(i, !0), () => td(i);
                    })(n, 250)),
                    na.hasAnimatedSinceResize &&
                      ((na.hasAnimatedSinceResize = !1),
                      this.nodes.forEach(nQ)));
                });
            }
            r && this.root.registerSharedNode(r, this),
              !1 !== this.options.animate &&
                n &&
                (r || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeLayoutChanged: r,
                    layout: i,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let a =
                        this.options.transition ||
                        n.getDefaultTransition() ||
                        n6,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: s,
                      } = n.getProps(),
                      l = !this.targetLayout || !nO(this.targetLayout, i),
                      u = !e && r;
                    if (
                      this.options.layoutRoot ||
                      this.resumeFrom ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0));
                      let e = { ...ri(a, "layout"), onPlay: o, onComplete: s };
                      (n.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e),
                        this.setAnimationOrigin(t, u);
                    } else
                      e || nQ(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = i;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              this.eventHandlers.clear(),
              td(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(n5),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (window.MotionCancelOptimisedAnimation &&
                !this.hasCheckedOptimisedAppear &&
                (function t(e) {
                  if (((e.hasCheckedOptimisedAppear = !0), e.root === e))
                    return;
                  let { visualElement: r } = e.options;
                  if (!r) return;
                  let i = r.props[e8];
                  if (window.MotionHasOptimisedAnimation(i, "transform")) {
                    let { layout: t, layoutId: r } = e.options;
                    window.MotionCancelOptimisedAnimation(
                      i,
                      "transform",
                      tc,
                      !(t || r)
                    );
                  }
                  let { parent: n } = e;
                  n && !n.hasCheckedOptimisedAppear && t(n);
                })(this),
              this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: r } = this.options;
            if (void 0 === e && !r) return;
            let i = this.getTransformTemplate();
            (this.prevTransformTemplateValue = i
              ? i(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(nK);
              return;
            }
            if (this.animationId <= this.animationCommitId) {
              this.nodes.forEach(nZ);
              return;
            }
            (this.animationCommitId = this.animationId),
              this.isUpdating
                ? ((this.isUpdating = !1),
                  this.nodes.forEach(nJ),
                  this.nodes.forEach(nH),
                  this.nodes.forEach(nY))
                : this.nodes.forEach(nZ),
              this.clearAllSnapshots();
            let t = t1.now();
            (th.delta = L(0, 1e3 / 60, t - th.timestamp)),
              (th.timestamp = t),
              (th.isProcessing = !0),
              tp.update.process(th),
              tp.preRender.process(th),
              tp.render.process(th),
              (th.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0), ee.read(this.scheduleUpdate));
          }
          clearAllSnapshots() {
            this.nodes.forEach(nq), this.sharedNodes.forEach(n2);
          }
          scheduleUpdateProjection() {
            this.projectionUpdateScheduled ||
              ((this.projectionUpdateScheduled = !0),
              tc.preRender(this.updateProjection, !1, !0));
          }
          scheduleCheckAfterUnmount() {
            tc.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            this.snapshot ||
              !this.instance ||
              ((this.snapshot = this.measure()),
              !this.snapshot ||
                iN(this.snapshot.measuredBox.x) ||
                iN(this.snapshot.measuredBox.y) ||
                (this.snapshot = void 0));
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++)
                this.path[t].updateScroll();
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = es()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            if (
              (this.scroll &&
                this.scroll.animationId === this.root.animationId &&
                this.scroll.phase === t &&
                (e = !1),
              e && this.instance)
            ) {
              let e = i(this.instance);
              this.scroll = {
                animationId: this.root.animationId,
                phase: t,
                isRoot: e,
                offset: r(this.instance),
                wasRoot: this.scroll ? this.scroll.isRoot : e,
              };
            }
          }
          resetTransform() {
            if (!n) return;
            let t =
                this.isLayoutDirty ||
                this.shouldResetTransform ||
                this.options.alwaysMeasureLayout,
              e = this.projectionDelta && !nB(this.projectionDelta),
              r = this.getTransformTemplate(),
              i = r ? r(this.latestValues, "") : void 0,
              a = i !== this.prevTransformTemplateValue;
            t &&
              this.instance &&
              (e || R(this.latestValues) || a) &&
              (n(this.instance, i),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let r = this.measurePageBox(),
              i = this.removeElementScroll(r);
            return (
              t && (i = this.removeTransform(i)),
              at((e = i).x),
              at(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: i,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return es();
            let e = t.measureViewportBox();
            if (!(this.scroll?.wasRoot || this.path.some(ar))) {
              let { scroll: t } = this.root;
              t && (j(e.x, t.offset.x), j(e.y, t.offset.y));
            }
            return e;
          }
          removeElementScroll(t) {
            let e = es();
            if ((nP(e, t), this.scroll?.wasRoot)) return e;
            for (let r = 0; r < this.path.length; r++) {
              let i = this.path[r],
                { scroll: n, options: a } = i;
              i !== this.root &&
                n &&
                a.layoutScroll &&
                (n.wasRoot && nP(e, t), j(e.x, n.offset.x), j(e.y, n.offset.y));
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let r = es();
            nP(r, t);
            for (let t = 0; t < this.path.length; t++) {
              let i = this.path[t];
              !e &&
                i.options.layoutScroll &&
                i.scroll &&
                i !== i.root &&
                V(r, { x: -i.scroll.offset.x, y: -i.scroll.offset.y }),
                R(i.latestValues) && V(r, i.latestValues);
            }
            return R(this.latestValues) && V(r, this.latestValues), r;
          }
          removeTransform(t) {
            let e = es();
            nP(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !R(r.latestValues)) continue;
              A(r.latestValues) && r.updateSnapshot();
              let i = es();
              nP(i, r.measurePageBox()),
                n_(
                  e,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  i
                );
            }
            return R(this.latestValues) && n_(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !== th.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            let e = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = e.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = e.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = e.isSharedProjectionDirty);
            let r = !!this.resumingFrom || this !== e;
            if (
              !(
                t ||
                (r && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                this.parent?.isProjectionDirty ||
                this.attemptToResolveRelativeTarget ||
                this.root.updateBlockedByResize
              )
            )
              return;
            let { layout: i, layoutId: n } = this.options;
            if (this.layout && (i || n)) {
              if (
                ((this.resolvedRelativeTargetAt = th.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = es()),
                    (this.relativeTargetOrigin = es()),
                    iq(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    nP(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  (this.target ||
                    ((this.target = es()), (this.targetWithTransforms = es())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                ) {
                  var a, o, s;
                  this.forceRelativeParentToResolveTarget(),
                    (a = this.target),
                    (o = this.relativeTarget),
                    (s = this.relativeParent.target),
                    iX(a.x, o.x, s.x),
                    iX(a.y, o.y, s.y);
                } else
                  this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : nP(this.target, this.layout.layoutBox),
                      _(this.target, this.targetDelta))
                    : nP(this.target, this.layout.layoutBox);
                if (this.attemptToResolveRelativeTarget) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = es()),
                      (this.relativeTargetOrigin = es()),
                      iq(this.relativeTargetOrigin, this.target, t.target),
                      nP(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                tl.value && n$.calculatedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              A(this.parent.latestValues) ||
              C(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            let t = this.getLead(),
              e = !!this.resumingFrom || this !== t,
              r = !0;
            if (
              ((this.isProjectionDirty || this.parent?.isProjectionDirty) &&
                (r = !1),
              e &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (r = !1),
              this.resolvedRelativeTargetAt === th.timestamp && (r = !1),
              r)
            )
              return;
            let { layout: i, layoutId: n } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || n))
            )
              return;
            nP(this.layoutCorrected, this.layout.layoutBox);
            let a = this.treeScale.x,
              o = this.treeScale.y;
            !(function (t, e, r, i = !1) {
              let n, a;
              let o = r.length;
              if (o) {
                e.x = e.y = 1;
                for (let s = 0; s < o; s++) {
                  a = (n = r[s]).projectionDelta;
                  let { visualElement: o } = n.options;
                  (!o ||
                    !o.props.style ||
                    "contents" !== o.props.style.display) &&
                    (i &&
                      n.options.layoutScroll &&
                      n.scroll &&
                      n !== n.root &&
                      V(t, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                    a && ((e.x *= a.x.scale), (e.y *= a.y.scale), _(t, a)),
                    i && R(n.latestValues) && V(t, n.latestValues));
                }
                e.x < 1.0000000000001 && e.x > 0.999999999999 && (e.x = 1),
                  e.y < 1.0000000000001 && e.y > 0.999999999999 && (e.y = 1);
              }
            })(this.layoutCorrected, this.treeScale, this.path, e),
              t.layout &&
                !t.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                ((t.target = t.layout.layoutBox),
                (t.targetWithTransforms = es()));
            let { target: s } = t;
            if (!s) {
              this.prevProjectionDelta &&
                (this.createProjectionDeltas(), this.scheduleRender());
              return;
            }
            this.projectionDelta && this.prevProjectionDelta
              ? (nA(this.prevProjectionDelta.x, this.projectionDelta.x),
                nA(this.prevProjectionDelta.y, this.projectionDelta.y))
              : this.createProjectionDeltas(),
              iY(
                this.projectionDelta,
                this.layoutCorrected,
                s,
                this.latestValues
              ),
              (this.treeScale.x === a &&
                this.treeScale.y === o &&
                nI(this.projectionDelta.x, this.prevProjectionDelta.x) &&
                nI(this.projectionDelta.y, this.prevProjectionDelta.y)) ||
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", s)),
              tl.value && n$.calculatedProjections++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if ((this.options.visualElement?.scheduleRender(), t)) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          createProjectionDeltas() {
            (this.prevProjectionDelta = ea()),
              (this.projectionDelta = ea()),
              (this.projectionDeltaWithTransform = ea());
          }
          setAnimationOrigin(t, e = !1) {
            let r;
            let i = this.snapshot,
              n = i ? i.latestValues : {},
              a = { ...this.latestValues },
              o = ea();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let s = es(),
              l =
                (i ? i.source : void 0) !==
                (this.layout ? this.layout.source : void 0),
              u = this.getStack(),
              c = !u || u.members.length <= 1,
              d = !!(
                l &&
                !c &&
                !0 === this.options.crossfade &&
                !this.path.some(n9)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let i = e / 1e3;
                if (
                  (n3(o.x, t.x, i),
                  n3(o.y, t.y, i),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var u, h, p, f, m, g;
                  if (
                    (iq(
                      s,
                      this.layout.layoutBox,
                      this.relativeParent.layout.layoutBox
                    ),
                    (p = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    (m = s),
                    (g = i),
                    n4(p.x, f.x, m.x, g),
                    n4(p.y, f.y, m.y, g),
                    r &&
                      ((u = this.relativeTarget),
                      (h = r),
                      nV(u.x, h.x) && nV(u.y, h.y)))
                  )
                    this.isProjectionDirty = !1;
                  r || (r = es()), nP(r, this.relativeTarget);
                }
                l &&
                  ((this.animationValues = a),
                  (function (t, e, r, i, n, a) {
                    n
                      ? ((t.opacity = T(0, r.opacity ?? 1, nk(i))),
                        (t.opacityExit = T(e.opacity ?? 1, 0, nw(i))))
                      : a && (t.opacity = T(e.opacity ?? 1, r.opacity ?? 1, i));
                    for (let n = 0; n < nv; n++) {
                      let a = `border${ng[n]}Radius`,
                        o = nx(e, a),
                        s = nx(r, a);
                      (void 0 !== o || void 0 !== s) &&
                        (o || (o = 0),
                        s || (s = 0),
                        0 === o || 0 === s || nb(o) === nb(s)
                          ? ((t[a] = Math.max(T(ny(o), ny(s), i), 0)),
                            (U.test(s) || U.test(o)) && (t[a] += "%"))
                          : (t[a] = s));
                    }
                    (e.rotate || r.rotate) &&
                      (t.rotate = T(e.rotate || 0, r.rotate || 0, i));
                  })(a, n, this.latestValues, i, d, c)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = i);
              }),
              this.mixTargetDelta(1e3 * !!this.options.layoutRoot);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation?.stop(),
              this.resumingFrom?.currentAnimation?.stop(),
              this.pendingAnimation &&
                (td(this.pendingAnimation), (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tc.update(() => {
                (na.hasAnimatedSinceResize = !0),
                  rd.layout++,
                  this.motionValue || (this.motionValue = t8(0)),
                  (this.currentAnimation = (function (t, e, r) {
                    let i = tQ(t) ? t : t8(t);
                    return i.start(iT("", i, e, r)), i.animation;
                  })(this.motionValue, [0, 1e3], {
                    ...t,
                    velocity: 0,
                    isSync: !0,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onStop: () => {
                      rd.layout--;
                    },
                    onComplete: () => {
                      rd.layout--,
                        t.onComplete && t.onComplete(),
                        this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: r,
                layout: i,
                latestValues: n,
              } = t;
            if (e && r && i) {
              if (
                this !== t &&
                this.layout &&
                i &&
                ae(
                  this.options.animationType,
                  this.layout.layoutBox,
                  i.layoutBox
                )
              ) {
                r = this.target || es();
                let e = iN(this.layout.layoutBox.x);
                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                let i = iN(this.layout.layoutBox.y);
                (r.y.min = t.target.y.min), (r.y.max = r.y.min + i);
              }
              nP(e, r),
                V(e, n),
                iY(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  n
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new nF()),
              this.sharedNodes.get(t).add(e);
            let r = e.options.initialPromotionConfig;
            e.promote({
              transition: r ? r.transition : void 0,
              preserveFollowOpacity:
                r && r.shouldPreserveFollowOpacity
                  ? r.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            let { layoutId: t } = this.options;
            return (t && this.getStack()?.lead) || this;
          }
          getPrevLead() {
            let { layoutId: t } = this.options;
            return t ? this.getStack()?.prevLead : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r,
          } = {}) {
            let i = this.getStack();
            i && i.promote(this, r),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetSkewAndRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: r } = t;
            if (
              ((r.z ||
                r.rotate ||
                r.rotateX ||
                r.rotateY ||
                r.rotateZ ||
                r.skewX ||
                r.skewY) &&
                (e = !0),
              !e)
            )
              return;
            let i = {};
            r.z && nU("z", t, i, this.animationValues);
            for (let e = 0; e < nW.length; e++)
              nU(`rotate${nW[e]}`, t, i, this.animationValues),
                nU(`skew${nW[e]}`, t, i, this.animationValues);
            for (let e in (t.render(), i))
              t.setStaticValue(e, i[e]),
                this.animationValues && (this.animationValues[e] = i[e]);
            t.scheduleRender();
          }
          applyProjectionStyles(t, e) {
            if (!this.instance || this.isSVG) return;
            if (!this.isVisible) {
              t.visibility = "hidden";
              return;
            }
            let r = this.getTransformTemplate();
            if (this.needsReset) {
              (this.needsReset = !1),
                (t.visibility = ""),
                (t.opacity = ""),
                (t.pointerEvents = e5(e?.pointerEvents) || ""),
                (t.transform = r ? r(this.latestValues, "") : "none");
              return;
            }
            let i = this.getLead();
            if (!this.projectionDelta || !this.layout || !i.target) {
              this.options.layoutId &&
                ((t.opacity =
                  void 0 !== this.latestValues.opacity
                    ? this.latestValues.opacity
                    : 1),
                (t.pointerEvents = e5(e?.pointerEvents) || "")),
                this.hasProjected &&
                  !R(this.latestValues) &&
                  ((t.transform = r ? r({}, "") : "none"),
                  (this.hasProjected = !1));
              return;
            }
            t.visibility = "";
            let n = i.animationValues || i.latestValues;
            this.applyTransformsToTarget();
            let a = (function (t, e, r) {
              let i = "",
                n = t.x.translate / e.x,
                a = t.y.translate / e.y,
                o = r?.z || 0;
              if (
                ((n || a || o) && (i = `translate3d(${n}px, ${a}px, ${o}px) `),
                (1 !== e.x || 1 !== e.y) &&
                  (i += `scale(${1 / e.x}, ${1 / e.y}) `),
                r)
              ) {
                let {
                  transformPerspective: t,
                  rotate: e,
                  rotateX: n,
                  rotateY: a,
                  skewX: o,
                  skewY: s,
                } = r;
                t && (i = `perspective(${t}px) ${i}`),
                  e && (i += `rotate(${e}deg) `),
                  n && (i += `rotateX(${n}deg) `),
                  a && (i += `rotateY(${a}deg) `),
                  o && (i += `skewX(${o}deg) `),
                  s && (i += `skewY(${s}deg) `);
              }
              let s = t.x.scale * e.x,
                l = t.y.scale * e.y;
              return (
                (1 !== s || 1 !== l) && (i += `scale(${s}, ${l})`), i || "none"
              );
            })(this.projectionDeltaWithTransform, this.treeScale, n);
            r && (a = r(n, a)), (t.transform = a);
            let { x: o, y: s } = this.projectionDelta;
            for (let e in ((t.transformOrigin = `${100 * o.origin}% ${
              100 * s.origin
            }% 0`),
            i.animationValues
              ? (t.opacity =
                  i === this
                    ? n.opacity ?? this.latestValues.opacity ?? 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : n.opacityExit)
              : (t.opacity =
                  i === this
                    ? void 0 !== n.opacity
                      ? n.opacity
                      : ""
                    : void 0 !== n.opacityExit
                    ? n.opacityExit
                    : 0),
            eC)) {
              if (void 0 === n[e]) continue;
              let { correct: r, applyTo: o, isCSSVariable: s } = eC[e],
                l = "none" === a ? n[e] : r(n[e], i);
              if (o) {
                let e = o.length;
                for (let r = 0; r < e; r++) t[o[r]] = l;
              } else
                s
                  ? (this.options.visualElement.renderState.vars[e] = l)
                  : (t[e] = l);
            }
            this.options.layoutId &&
              (t.pointerEvents =
                i === this ? e5(e?.pointerEvents) || "" : "none");
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => t.currentAnimation?.stop()),
              this.root.nodes.forEach(nK),
              this.root.sharedNodes.clear();
          }
        };
      }
      function nH(t) {
        t.updateLayout();
      }
      function nY(t) {
        let e = t.resumeFrom?.snapshot || t.snapshot;
        if (t.isLead() && t.layout && e && t.hasListeners("didUpdate")) {
          let { layoutBox: r, measuredBox: i } = t.layout,
            { animationType: n } = t.options,
            a = e.source !== t.layout.source;
          "size" === n
            ? iK((t) => {
                let i = a ? e.measuredBox[t] : e.layoutBox[t],
                  n = iN(i);
                (i.min = r[t].min), (i.max = i.min + n);
              })
            : ae(n, e.layoutBox, r) &&
              iK((i) => {
                let n = a ? e.measuredBox[i] : e.layoutBox[i],
                  o = iN(r[i]);
                (n.max = n.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[i].max = t.relativeTarget[i].min + o));
              });
          let o = ea();
          iY(o, r, e.layoutBox);
          let s = ea();
          a
            ? iY(s, t.applyTransform(i, !0), e.measuredBox)
            : iY(s, r, e.layoutBox);
          let l = !nB(o),
            u = !1;
          if (!t.resumeFrom) {
            let i = t.getClosestProjectingParent();
            if (i && !i.resumeFrom) {
              let { snapshot: n, layout: a } = i;
              if (n && a) {
                let o = es();
                iq(o, e.layoutBox, n.layoutBox);
                let s = es();
                iq(s, r, a.layoutBox),
                  nO(o, s) || (u = !0),
                  i.options.layoutRoot &&
                    ((t.relativeTarget = s),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = i));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: r,
            snapshot: e,
            delta: s,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeLayoutChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function nX(t) {
        tl.value && n$.nodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function nG(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function nq(t) {
        t.clearSnapshot();
      }
      function nK(t) {
        t.clearMeasurements();
      }
      function nZ(t) {
        t.isLayoutDirty = !1;
      }
      function nJ(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function nQ(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function n0(t) {
        t.resolveTargetDelta();
      }
      function n1(t) {
        t.calcProjection();
      }
      function n5(t) {
        t.resetSkewAndRotation();
      }
      function n2(t) {
        t.removeLeadSnapshot();
      }
      function n3(t, e, r) {
        (t.translate = T(e.translate, 0, r)),
          (t.scale = T(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function n4(t, e, r, i) {
        (t.min = T(e.min, r.min, i)), (t.max = T(e.max, r.max, i));
      }
      function n9(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let n6 = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        n8 = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent &&
          navigator.userAgent.toLowerCase().includes(t),
        n7 = n8("applewebkit/") && !n8("chrome/") ? Math.round : ta;
      function at(t) {
        (t.min = n7(t.min)), (t.max = n7(t.max));
      }
      function ae(t, e, r) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !(0.2 >= Math.abs(nL(e) - nL(r))))
        );
      }
      function ar(t) {
        return t !== t.root && t.scroll?.wasRoot;
      }
      let ai = nN({
          attachResizeListener: (t, e) => iF(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        an = { current: void 0 },
        aa = nN({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!an.current) {
              let t = new ai({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (an.current = t);
            }
            return an.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var ao = r(2198);
      function as(t, e) {
        let r = (0, ao.K)(t),
          i = new AbortController();
        return [r, { passive: !0, ...e, signal: i.signal }, () => i.abort()];
      }
      function al(t) {
        return !("touch" === t.pointerType || iI.x || iI.y);
      }
      function au(t, e, r) {
        let { props: i } = t;
        t.animationState &&
          i.whileHover &&
          t.animationState.setActive("whileHover", "Start" === r);
        let n = i["onHover" + r];
        n && tc.postRender(() => n(e, iW(e)));
      }
      class ac extends iV {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, r = {}) {
              let [i, n, a] = as(t, r),
                o = (t) => {
                  if (!al(t)) return;
                  let { target: r } = t,
                    i = e(r, t);
                  if ("function" != typeof i || !r) return;
                  let a = (t) => {
                    al(t) && (i(t), r.removeEventListener("pointerleave", a));
                  };
                  r.addEventListener("pointerleave", a, n);
                };
              return (
                i.forEach((t) => {
                  t.addEventListener("pointerenter", o, n);
                }),
                a
              );
            })(
              t,
              (t, e) => (
                au(this.node, e, "Start"), (t) => au(this.node, t, "End")
              )
            ));
        }
        unmount() {}
      }
      class ad extends iV {
        constructor() {
          super(...arguments), (this.isActive = !1);
        }
        onFocus() {
          let t = !1;
          try {
            t = this.node.current.matches(":focus-visible");
          } catch (e) {
            t = !0;
          }
          t &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !0),
            (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive("whileFocus", !1),
            (this.isActive = !1));
        }
        mount() {
          this.unmount = rl(
            iF(this.node.current, "focus", () => this.onFocus()),
            iF(this.node.current, "blur", () => this.onBlur())
          );
        }
        unmount() {}
      }
      var ah = r(7351);
      let ap = (t, e) => !!e && (t === e || ap(t, e.parentElement)),
        af = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        am = new WeakSet();
      function ag(t) {
        return (e) => {
          "Enter" === e.key && t(e);
        };
      }
      function av(t, e) {
        t.dispatchEvent(
          new PointerEvent("pointer" + e, { isPrimary: !0, bubbles: !0 })
        );
      }
      let ay = (t, e) => {
        let r = t.currentTarget;
        if (!r) return;
        let i = ag(() => {
          if (am.has(r)) return;
          av(r, "down");
          let t = ag(() => {
            av(r, "up");
          });
          r.addEventListener("keyup", t, e),
            r.addEventListener("blur", () => av(r, "cancel"), e);
        });
        r.addEventListener("keydown", i, e),
          r.addEventListener(
            "blur",
            () => r.removeEventListener("keydown", i),
            e
          );
      };
      function ab(t) {
        return i$(t) && !(iI.x || iI.y);
      }
      function ax(t, e, r) {
        let { props: i } = t;
        if (t.current instanceof HTMLButtonElement && t.current.disabled)
          return;
        t.animationState &&
          i.whileTap &&
          t.animationState.setActive("whileTap", "Start" === r);
        let n = i["onTap" + ("End" === r ? "" : r)];
        n && tc.postRender(() => n(e, iW(e)));
      }
      class ak extends iV {
        mount() {
          let { current: t } = this.node;
          t &&
            (this.unmount = (function (t, e, r = {}) {
              let [i, n, a] = as(t, r),
                o = (t) => {
                  let i = t.currentTarget;
                  if (!ab(t)) return;
                  am.add(i);
                  let a = e(i, t),
                    o = (t, e) => {
                      window.removeEventListener("pointerup", s),
                        window.removeEventListener("pointercancel", l),
                        am.has(i) && am.delete(i),
                        ab(t) && "function" == typeof a && a(t, { success: e });
                    },
                    s = (t) => {
                      o(
                        t,
                        i === window ||
                          i === document ||
                          r.useGlobalTarget ||
                          ap(i, t.target)
                      );
                    },
                    l = (t) => {
                      o(t, !1);
                    };
                  window.addEventListener("pointerup", s, n),
                    window.addEventListener("pointercancel", l, n);
                };
              return (
                i.forEach((t) => {
                  if (
                    ((r.useGlobalTarget ? window : t).addEventListener(
                      "pointerdown",
                      o,
                      n
                    ),
                    (0, ah.s)(t))
                  )
                    t.addEventListener("focus", (t) => ay(t, n)),
                      !af.has(t.tagName) &&
                        -1 === t.tabIndex &&
                        !t.hasAttribute("tabindex") &&
                        (t.tabIndex = 0);
                }),
                a
              );
            })(
              t,
              (t, e) => (
                ax(this.node, e, "Start"),
                (t, { success: e }) => ax(this.node, t, e ? "End" : "Cancel")
              ),
              { useGlobalTarget: this.node.props.globalTapTarget }
            ));
        }
        unmount() {}
      }
      let aw = new WeakMap(),
        aS = new WeakMap(),
        aT = (t) => {
          let e = aw.get(t.target);
          e && e(t);
        },
        aP = (t) => {
          t.forEach(aT);
        },
        aA = { some: 0, all: 1 };
      class aR extends iV {
        constructor() {
          super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
        }
        startObserver() {
          this.unmount();
          let { viewport: t = {} } = this.node.getProps(),
            { root: e, margin: r, amount: i = "some", once: n } = t,
            a = {
              root: e ? e.current : void 0,
              rootMargin: r,
              threshold: "number" == typeof i ? i : aA[i],
            };
          return (function (t, e, r) {
            let i = (function ({ root: t, ...e }) {
              let r = t || document;
              aS.has(r) || aS.set(r, {});
              let i = aS.get(r),
                n = JSON.stringify(e);
              return (
                i[n] ||
                  (i[n] = new IntersectionObserver(aP, { root: t, ...e })),
                i[n]
              );
            })(e);
            return (
              aw.set(t, r),
              i.observe(t),
              () => {
                aw.delete(t), i.unobserve(t);
              }
            );
          })(this.node.current, a, (t) => {
            let { isIntersecting: e } = t;
            if (
              this.isInView === e ||
              ((this.isInView = e), n && !e && this.hasEnteredView)
            )
              return;
            e && (this.hasEnteredView = !0),
              this.node.animationState &&
                this.node.animationState.setActive("whileInView", e);
            let { onViewportEnter: r, onViewportLeave: i } =
                this.node.getProps(),
              a = e ? r : i;
            a && a(t);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if ("undefined" == typeof IntersectionObserver) return;
          let { props: t, prevProps: e } = this.node;
          ["amount", "margin", "root"].some(
            (function ({ viewport: t = {} }, { viewport: e = {} } = {}) {
              return (r) => t[r] !== e[r];
            })(t, e)
          ) && this.startObserver();
        }
        unmount() {}
      }
      let aC = (function (t, e) {
        if ("undefined" == typeof Proxy) return re;
        let r = new Map(),
          i = (r, i) => re(r, i, t, e);
        return new Proxy((t, e) => i(t, e), {
          get: (n, a) =>
            "create" === a
              ? i
              : (r.has(a) || r.set(a, re(a, void 0, t, e)), r.get(a)),
        });
      })(
        {
          animation: { Feature: iD },
          exit: { Feature: iL },
          inView: { Feature: aR },
          tap: { Feature: ak },
          focus: { Feature: ad },
          hover: { Feature: ac },
          pan: { Feature: ni },
          drag: { Feature: ne, ProjectionNode: aa, MeasureLayout: nc },
          layout: { ProjectionNode: aa, MeasureLayout: nc },
        },
        (t, e) =>
          eW(t) ? new eF(e) : new e_(e, { allowProjection: t !== n.Fragment })
      );
    },
    5522: (t) => {
      var e = "undefined" != typeof Element,
        r = "function" == typeof Map,
        i = "function" == typeof Set,
        n = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      t.exports = function (t, a) {
        try {
          return (function t(a, o) {
            if (a === o) return !0;
            if (a && o && "object" == typeof a && "object" == typeof o) {
              var s, l, u, c;
              if (a.constructor !== o.constructor) return !1;
              if (Array.isArray(a)) {
                if ((s = a.length) != o.length) return !1;
                for (l = s; 0 != l--; ) if (!t(a[l], o[l])) return !1;
                return !0;
              }
              if (r && a instanceof Map && o instanceof Map) {
                if (a.size !== o.size) return !1;
                for (c = a.entries(); !(l = c.next()).done; )
                  if (!o.has(l.value[0])) return !1;
                for (c = a.entries(); !(l = c.next()).done; )
                  if (!t(l.value[1], o.get(l.value[0]))) return !1;
                return !0;
              }
              if (i && a instanceof Set && o instanceof Set) {
                if (a.size !== o.size) return !1;
                for (c = a.entries(); !(l = c.next()).done; )
                  if (!o.has(l.value[0])) return !1;
                return !0;
              }
              if (n && ArrayBuffer.isView(a) && ArrayBuffer.isView(o)) {
                if ((s = a.length) != o.length) return !1;
                for (l = s; 0 != l--; ) if (a[l] !== o[l]) return !1;
                return !0;
              }
              if (a.constructor === RegExp)
                return a.source === o.source && a.flags === o.flags;
              if (
                a.valueOf !== Object.prototype.valueOf &&
                "function" == typeof a.valueOf &&
                "function" == typeof o.valueOf
              )
                return a.valueOf() === o.valueOf();
              if (
                a.toString !== Object.prototype.toString &&
                "function" == typeof a.toString &&
                "function" == typeof o.toString
              )
                return a.toString() === o.toString();
              if ((s = (u = Object.keys(a)).length) !== Object.keys(o).length)
                return !1;
              for (l = s; 0 != l--; )
                if (!Object.prototype.hasOwnProperty.call(o, u[l])) return !1;
              if (e && a instanceof Element) return !1;
              for (l = s; 0 != l--; )
                if (
                  (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l]) ||
                    !a.$$typeof) &&
                  !t(a[u[l]], o[u[l]])
                )
                  return !1;
              return !0;
            }
            return a != a && o != o;
          })(t, a);
        } catch (t) {
          if ((t.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw t;
        }
      };
    },
    5720: (t, e, r) => {
      "use strict";
      function i(t) {
        let e = Object.assign({}, t);
        for (let t in e) void 0 === e[t] && delete e[t];
        return e;
      }
      r.d(e, { o: () => i });
    },
    6335: (t, e, r) => {
      "use strict";
      function i(t) {
        return Array.isArray(t);
      }
      function n(t) {
        let e = typeof t;
        return null != t && ("object" === e || "function" === e) && !i(t);
      }
      r.d(e, { Gv: () => n, cy: () => i });
    },
    6378: (t, e, r) => {
      "use strict";
      r.d(e, { R: () => u, d: () => c });
      var i = r(6335);
      function n(t) {
        if (null == t) return t;
        let { unitless: e } = (function (t) {
          let e = parseFloat(t.toString()),
            r = t.toString().replace(String(e), "");
          return { unitless: !r, value: e, unit: r };
        })(t);
        return e || "number" == typeof t ? `${t}px` : t;
      }
      let a = (t, e) => (parseInt(t[1], 10) > parseInt(e[1], 10) ? 1 : -1),
        o = (t) => Object.fromEntries(Object.entries(t).sort(a));
      function s(t) {
        let e = o(t);
        return Object.assign(Object.values(e), e);
      }
      function l(t) {
        return t
          ? "number" == typeof (t = n(t) ?? t)
            ? `${t + -0.02}`
            : t.replace(/(\d+\.?\d*)/u, (t) => `${parseFloat(t) + -0.02}`)
          : t;
      }
      function u(t, e) {
        let r = ["@media screen"];
        return (
          t && r.push("and", `(min-width: ${n(t)})`),
          e && r.push("and", `(max-width: ${n(e)})`),
          r.join(" ")
        );
      }
      function c(t) {
        if (!t) return null;
        t.base = t.base ?? "0px";
        let e = s(t),
          r = Object.entries(t)
            .sort(a)
            .map(([t, e], r, i) => {
              let [, n] = i[r + 1] ?? [];
              return (
                (n = parseFloat(n) > 0 ? l(n) : void 0),
                {
                  _minW: l(e),
                  breakpoint: t,
                  minW: e,
                  maxW: n,
                  maxWQuery: u(null, n),
                  minWQuery: u(e),
                  minMaxQuery: u(e, n),
                }
              );
            }),
          n = new Set(Object.keys(o(t))),
          c = Array.from(n.values());
        return {
          keys: n,
          normalized: e,
          isResponsive(t) {
            let e = Object.keys(t);
            return e.length > 0 && e.every((t) => n.has(t));
          },
          asObject: o(t),
          asArray: s(t),
          details: r,
          get: (t) => r.find((e) => e.breakpoint === t),
          media: [null, ...e.map((t) => u(t)).slice(1)],
          toArrayValue(t) {
            if (!(0, i.Gv)(t))
              throw Error("toArrayValue: value must be an object");
            let e = c.map((e) => t[e] ?? null);
            for (
              ;
              null ===
              (function (t) {
                let e = null == t ? 0 : t.length;
                return e ? t[e - 1] : void 0;
              })(e);

            )
              e.pop();
            return e;
          },
          toObjectValue(t) {
            if (!Array.isArray(t))
              throw Error("toObjectValue: value must be an array");
            return t.reduce((t, e, r) => {
              let i = c[r];
              return null != i && null != e && (t[i] = e), t;
            }, {});
          },
        };
      }
    },
    6983: (t, e, r) => {
      "use strict";
      function i(t) {
        return "object" == typeof t && null !== t;
      }
      r.d(e, { G: () => i });
    },
    7019: (t, e, r) => {
      "use strict";
      r.d(e, { r: () => i });
      let i = ((t) => {
        let e = new WeakMap();
        return (r, i, n, a) => {
          if (void 0 === r) return t(r, i, n);
          e.has(r) || e.set(r, new Map());
          let o = e.get(r);
          if (o.has(i)) return o.get(i);
          let s = t(r, i, n, a);
          return o.set(i, s), s;
        };
      })(function (t, e, r, i) {
        let n = "string" == typeof e ? e.split(".") : [e];
        for (i = 0; i < n.length && t; i += 1) t = t[n[i]];
        return void 0 === t ? r : t;
      });
    },
    7098: (t, e, r) => {
      "use strict";
      r.d(e, { G6: () => a, Ig: () => n });
      var i = r(2115);
      let n = (0, i.createContext)({});
      function a() {
        let t = (0, i.useContext)(n);
        if (void 0 === t)
          throw Error("useColorMode must be used within a ColorModeProvider");
        return t;
      }
      n.displayName = "ColorModeContext";
    },
    7272: (t, e, r) => {
      "use strict";
      r.d(e, { A: () => d });
      var i = r(3425),
        n = r(6335),
        a = r(3363),
        o = r(1592),
        s = r(7711);
      let l = (t) => (e) => {
          if (!e.__breakpoints) return t;
          let { isResponsive: r, toArrayValue: a, media: o } = e.__breakpoints,
            s = {};
          for (let l in t) {
            let u = (0, i.J)(t[l], e);
            if (null == u) continue;
            if (!Array.isArray((u = (0, n.Gv)(u) && r(u) ? a(u) : u))) {
              s[l] = u;
              continue;
            }
            let c = u.slice(0, o.length).length;
            for (let t = 0; t < c; t += 1) {
              let e = o?.[t];
              if (!e) {
                s[l] = u[t];
                continue;
              }
              (s[e] = s[e] || {}), null != u[t] && (s[e][l] = u[t]);
            }
          }
          return s;
        },
        u = (t, e) =>
          t.startsWith("--") &&
          "string" == typeof e &&
          !/^var\(--.+\)$/.test(e),
        c = (t, e) => {
          if (null == e) return e;
          let r = (e) => t.__cssMap?.[e]?.varRef,
            i = (t) => r(t) ?? t,
            [n, a] = (function (t) {
              let e = [],
                r = "",
                i = !1;
              for (let n = 0; n < t.length; n++) {
                let a = t[n];
                "(" === a
                  ? ((i = !0), (r += a))
                  : ")" === a
                  ? ((i = !1), (r += a))
                  : "," !== a || i
                  ? (r += a)
                  : (e.push(r), (r = ""));
              }
              return (r = r.trim()) && e.push(r), e;
            })(e);
          return (e = r(n) ?? i(a) ?? i(e));
        },
        d = (t) => (e) =>
          (function (t) {
            let { configs: e = {}, pseudos: r = {}, theme: o } = t,
              s = (t, d = !1) => {
                let h = (0, i.J)(t, o),
                  p = l(h)(o),
                  f = {};
                for (let t in p) {
                  let l = p[t],
                    m = (0, i.J)(l, o);
                  t in r && (t = r[t]), u(t, m) && (m = c(o, m));
                  let g = e[t];
                  if ((!0 === g && (g = { property: t }), (0, n.Gv)(m))) {
                    (f[t] = f[t] ?? {}), (f[t] = a({}, f[t], s(m, !0)));
                    continue;
                  }
                  let v = g?.transform?.(m, o, h) ?? m;
                  v = g?.processResult ? s(v, !0) : v;
                  let y = (0, i.J)(g?.property, o);
                  if (
                    (!d && g?.static && (f = a({}, f, (0, i.J)(g.static, o))),
                    y && Array.isArray(y))
                  ) {
                    for (let t of y) f[t] = v;
                    continue;
                  }
                  if (y) {
                    "&" === y && (0, n.Gv)(v) ? (f = a({}, f, v)) : (f[y] = v);
                    continue;
                  }
                  if ((0, n.Gv)(v)) {
                    f = a({}, f, v);
                    continue;
                  }
                  f[t] = v;
                }
                return f;
              };
            return s;
          })({ theme: e, pseudos: o.T, configs: s.wq })(t);
    },
    7351: (t, e, r) => {
      "use strict";
      r.d(e, { s: () => n });
      var i = r(6983);
      function n(t) {
        return (0, i.G)(t) && "offsetHeight" in t;
      }
    },
    7415: (t, e, r) => {
      "use strict";
      r.d(e, { B: () => C });
      var i = r(7711),
        n = r(7272),
        a = r(3425),
        o = r(5720),
        s = r(9630),
        l = r(986),
        u = r(7726),
        c = r(8862),
        d = r(8816),
        h = r(2115),
        p = r(4088),
        f =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        m = (0, p.A)(function (t) {
          return (
            f.test(t) ||
            (111 === t.charCodeAt(0) &&
              110 === t.charCodeAt(1) &&
              91 > t.charCodeAt(2))
          );
        }),
        g = function (t) {
          return "theme" !== t;
        },
        v = function (t) {
          return "string" == typeof t && t.charCodeAt(0) > 96 ? m : g;
        },
        y = function (t, e, r) {
          var i;
          if (e) {
            var n = e.shouldForwardProp;
            i =
              t.__emotion_forwardProp && n
                ? function (e) {
                    return t.__emotion_forwardProp(e) && n(e);
                  }
                : n;
          }
          return (
            "function" != typeof i && r && (i = t.__emotion_forwardProp), i
          );
        },
        b = function (t) {
          var e = t.cache,
            r = t.serialized,
            i = t.isStringTag;
          return (
            (0, d.SF)(e, r, i),
            (0, c.s)(function () {
              return (0, d.sk)(e, r, i);
            }),
            null
          );
        },
        x = function t(e, r) {
          var i,
            n,
            a = e.__emotion_real === e,
            o = (a && e.__emotion_base) || e;
          void 0 !== r && ((i = r.label), (n = r.target));
          var c = y(e, r, a),
            p = c || v(o),
            f = !p("as");
          return function () {
            var m = arguments,
              g =
                a && void 0 !== e.__emotion_styles
                  ? e.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== i && g.push("label:" + i + ";"),
              null == m[0] || void 0 === m[0].raw)
            )
              g.push.apply(g, m);
            else {
              var x = m[0];
              g.push(x[0]);
              for (var k = m.length, w = 1; w < k; w++) g.push(m[w], x[w]);
            }
            var S = (0, l.w)(function (t, e, r) {
              var i = (f && t.as) || o,
                a = "",
                s = [],
                m = t;
              if (null == t.theme) {
                for (var y in ((m = {}), t)) m[y] = t[y];
                m.theme = h.useContext(l.T);
              }
              "string" == typeof t.className
                ? (a = (0, d.Rk)(e.registered, s, t.className))
                : null != t.className && (a = t.className + " ");
              var x = (0, u.J)(g.concat(s), e.registered, m);
              (a += e.key + "-" + x.name), void 0 !== n && (a += " " + n);
              var k = f && void 0 === c ? v(i) : p,
                w = {};
              for (var S in t) (!f || "as" !== S) && k(S) && (w[S] = t[S]);
              return (
                (w.className = a),
                r && (w.ref = r),
                h.createElement(
                  h.Fragment,
                  null,
                  h.createElement(b, {
                    cache: e,
                    serialized: x,
                    isStringTag: "string" == typeof i,
                  }),
                  h.createElement(i, w)
                )
              );
            });
            return (
              (S.displayName =
                void 0 !== i
                  ? i
                  : "Styled(" +
                    ("string" == typeof o
                      ? o
                      : o.displayName || o.name || "Component") +
                    ")"),
              (S.defaultProps = e.defaultProps),
              (S.__emotion_real = S),
              (S.__emotion_base = o),
              (S.__emotion_styles = g),
              (S.__emotion_forwardProp = c),
              Object.defineProperty(S, "toString", {
                value: function () {
                  return "." + n;
                },
              }),
              (S.withComponent = function (e, i) {
                return t(
                  e,
                  (0, s.A)({}, r, i, { shouldForwardProp: y(S, i, !0) })
                ).apply(void 0, g);
              }),
              S
            );
          };
        }.bind(null);
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (t) {
        x[t] = x(t);
      });
      let k = new Set([
          ...i.q8,
          "textStyle",
          "layerStyle",
          "apply",
          "noOfLines",
          "focusBorderColor",
          "errorBorderColor",
          "as",
          "__css",
          "css",
          "sx",
        ]),
        w = new Set(["htmlWidth", "htmlHeight", "htmlSize", "htmlTranslate"]);
      function S(t) {
        return (w.has(t) || !k.has(t)) && "_" !== t[0];
      }
      var T = r(7098);
      let P = ((t) => t.default || t)(x),
        A = (t) => {
          let { baseStyle: e } = t;
          return (t) => {
            let { theme: r, css: s, __css: l, sx: u, ...c } = t,
              [d] = (function (t, ...e) {
                let r = Object.getOwnPropertyDescriptors(t),
                  i = Object.keys(r),
                  n = (t) => {
                    let e = {};
                    for (let i = 0; i < t.length; i++) {
                      let n = t[i];
                      r[n] && (Object.defineProperty(e, n, r[n]), delete r[n]);
                    }
                    return e;
                  };
                return e
                  .map((t) => n(Array.isArray(t) ? t : i.filter(t)))
                  .concat(n(i));
              })(c, i.HU),
              h = (function (t, ...e) {
                if (null == t)
                  throw TypeError("Cannot convert undefined or null to object");
                let r = { ...t };
                for (let t of e)
                  if (null != t)
                    for (let e in t)
                      Object.prototype.hasOwnProperty.call(t, e) &&
                        (e in r && delete r[e], (r[e] = t[e]));
                return r;
              })({}, l, (0, a.J)(e, t), (0, o.o)(d), u),
              p = (0, n.A)(h)(t.theme);
            return s ? [p, s] : p;
          };
        };
      function R(t, e) {
        let { baseStyle: r, ...i } = null != e ? e : {};
        i.shouldForwardProp || (i.shouldForwardProp = S);
        let n = A({ baseStyle: r }),
          a = P(t, i)(n);
        return (0, h.forwardRef)(function (t, e) {
          let { children: r, ...i } = t,
            { colorMode: n, forced: o } = (0, T.G6)();
          return (0,
          h.createElement)(a, { ref: e, "data-theme": o ? n : void 0, ...i }, r);
        });
      }
      let C = (function () {
        let t = new Map();
        return new Proxy(R, {
          apply: (t, e, r) => R(...r),
          get: (e, r) => (t.has(r) || t.set(r, R(r)), t.get(r)),
        });
      })();
    },
    7494: (t, e, r) => {
      "use strict";
      r.d(e, { E: () => n });
      var i = r(2115);
      let n = r(8972).B ? i.useLayoutEffect : i.useEffect;
    },
    7711: (t, e, r) => {
      "use strict";
      r.d(e, { HU: () => K, q8: () => G, wq: () => X });
      var i = r(3363),
        n = r(1592),
        a = r(6335);
      let o = (t) => /!(important)?$/.test(t),
        s = (t) =>
          "string" == typeof t ? t.replace(/!(important)?$/, "").trim() : t,
        l = (t, e) => (r) => {
          let i = String(e),
            n = o(i),
            l = s(i),
            u = t ? `${t}.${l}` : l,
            c =
              (0, a.Gv)(r.__cssMap) && u in r.__cssMap
                ? r.__cssMap[u].varRef
                : e;
          return (c = s(c)), n ? `${c} !important` : c;
        };
      function u(t) {
        let { scale: e, transform: r, compose: i } = t;
        return (t, n) => {
          let a = l(e, t)(n),
            o = r?.(a, n) ?? a;
          return i && (o = i(o, n)), o;
        };
      }
      let c =
        (...t) =>
        (e) =>
          t.reduce((t, e) => e(t), e);
      function d(t, e) {
        return (r) => {
          let i = { property: r, scale: t };
          return (i.transform = u({ scale: t, transform: e })), i;
        };
      }
      let h =
          ({ rtl: t, ltr: e }) =>
          (r) =>
            "rtl" === r.direction ? t : e,
        p = [
          "rotate(var(--chakra-rotate, 0))",
          "scaleX(var(--chakra-scale-x, 1))",
          "scaleY(var(--chakra-scale-y, 1))",
          "skewX(var(--chakra-skew-x, 0))",
          "skewY(var(--chakra-skew-y, 0))",
        ],
        f = {
          "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
          filter:
            "var(--chakra-blur) var(--chakra-brightness) var(--chakra-contrast) var(--chakra-grayscale) var(--chakra-hue-rotate) var(--chakra-invert) var(--chakra-saturate) var(--chakra-sepia) var(--chakra-drop-shadow)",
        },
        m = {
          backdropFilter:
            "var(--chakra-backdrop-blur) var(--chakra-backdrop-brightness) var(--chakra-backdrop-contrast) var(--chakra-backdrop-grayscale) var(--chakra-backdrop-hue-rotate) var(--chakra-backdrop-invert) var(--chakra-backdrop-opacity) var(--chakra-backdrop-saturate) var(--chakra-backdrop-sepia)",
          "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
          "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
        },
        g = {
          "row-reverse": {
            space: "--chakra-space-x-reverse",
            divide: "--chakra-divide-x-reverse",
          },
          "column-reverse": {
            space: "--chakra-space-y-reverse",
            divide: "--chakra-divide-y-reverse",
          },
        },
        v = {
          "to-t": "to top",
          "to-tr": "to top right",
          "to-r": "to right",
          "to-br": "to bottom right",
          "to-b": "to bottom",
          "to-bl": "to bottom left",
          "to-l": "to left",
          "to-tl": "to top left",
        },
        y = new Set(Object.values(v)),
        b = new Set([
          "none",
          "-moz-initial",
          "inherit",
          "initial",
          "revert",
          "unset",
        ]),
        x = (t) => t.trim(),
        k = (t) => "string" == typeof t && t.includes("(") && t.includes(")"),
        w = (t) => {
          let e = parseFloat(t.toString()),
            r = t.toString().replace(String(e), "");
          return { unitless: !r, value: e, unit: r };
        },
        S = (t) => (e) => `${t}(${e})`,
        T = {
          filter: (t) => ("auto" !== t ? t : f),
          backdropFilter: (t) => ("auto" !== t ? t : m),
          ring: (t) => ({
            "--chakra-ring-offset-shadow":
              "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
            "--chakra-ring-shadow":
              "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
            "--chakra-ring-width": T.px(t),
            boxShadow:
              "var(--chakra-ring-offset-shadow), var(--chakra-ring-shadow), var(--chakra-shadow, 0 0 #0000)",
          }),
          bgClip: (t) =>
            "text" === t
              ? { color: "transparent", backgroundClip: "text" }
              : { backgroundClip: t },
          transform: (t) =>
            "auto" === t
              ? [
                  "translateX(var(--chakra-translate-x, 0))",
                  "translateY(var(--chakra-translate-y, 0))",
                  ...p,
                ].join(" ")
              : "auto-gpu" === t
              ? [
                  "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
                  ...p,
                ].join(" ")
              : t,
          vh: (t) => ("$100vh" === t ? "var(--chakra-vh)" : t),
          px(t) {
            if (null == t) return t;
            let { unitless: e } = w(t);
            return e || "number" == typeof t ? `${t}px` : t;
          },
          fraction: (t) => ("number" != typeof t || t > 1 ? t : `${100 * t}%`),
          float: (t, e) =>
            "rtl" === e.direction ? { left: "right", right: "left" }[t] : t,
          degree(t) {
            if (/^var\(--.+\)$/.test(t) || null == t) return t;
            let e = "string" == typeof t && !t.endsWith("deg");
            return "number" == typeof t || e ? `${t}deg` : t;
          },
          gradient: (t, e) =>
            (function (t, e) {
              if (null == t || b.has(t)) return t;
              if (!(k(t) || b.has(t))) return `url('${t}')`;
              let r = /(^[a-z-A-Z]+)\((.*)\)/g.exec(t),
                i = r?.[1],
                n = r?.[2];
              if (!i || !n) return t;
              let a = i.includes("-gradient") ? i : `${i}-gradient`,
                [o, ...s] = n.split(",").map(x).filter(Boolean);
              if (s?.length === 0) return t;
              let l = o in v ? v[o] : o;
              s.unshift(l);
              let u = s.map((t) => {
                if (y.has(t)) return t;
                let r = t.indexOf(" "),
                  [i, n] = -1 !== r ? [t.substr(0, r), t.substr(r + 1)] : [t],
                  a = k(n) ? n : n && n.split(" "),
                  o = `colors.${i}`,
                  s = o in e.__cssMap ? e.__cssMap[o].varRef : i;
                return a ? [s, ...(Array.isArray(a) ? a : [a])].join(" ") : s;
              });
              return `${a}(${u.join(", ")})`;
            })(t, e ?? {}),
          blur: S("blur"),
          opacity: S("opacity"),
          brightness: S("brightness"),
          contrast: S("contrast"),
          dropShadow: S("drop-shadow"),
          grayscale: S("grayscale"),
          hueRotate: (t) => S("hue-rotate")(T.degree(t)),
          invert: S("invert"),
          saturate: S("saturate"),
          sepia: S("sepia"),
          bgImage: (t) => (null == t ? t : k(t) || b.has(t) ? t : `url(${t})`),
          outline(t) {
            let e = "0" === String(t) || "none" === String(t);
            return null !== t && e
              ? { outline: "2px solid transparent", outlineOffset: "2px" }
              : { outline: t };
          },
          flexDirection(t) {
            let { space: e, divide: r } = g[t] ?? {},
              i = { flexDirection: t };
            return e && (i[e] = 1), r && (i[r] = 1), i;
          },
        },
        P = {
          borderWidths: d("borderWidths"),
          borderStyles: d("borderStyles"),
          colors: d("colors"),
          borders: d("borders"),
          gradients: d("gradients", T.gradient),
          radii: d("radii", T.px),
          space: d("space", c(T.vh, T.px)),
          spaceT: d("space", c(T.vh, T.px)),
          degreeT: (t) => ({ property: t, transform: T.degree }),
          prop: (t, e, r) => ({
            property: t,
            scale: e,
            ...(e && { transform: u({ scale: e, transform: r }) }),
          }),
          propT: (t, e) => ({ property: t, transform: e }),
          sizes: d("sizes", c(T.vh, T.px)),
          sizesT: d("sizes", c(T.vh, T.fraction)),
          shadows: d("shadows"),
          logical: function (t) {
            let { property: e, scale: r, transform: i } = t;
            return {
              scale: r,
              property: h(e),
              transform: r ? u({ scale: r, compose: i }) : i,
            };
          },
          blur: d("blur", T.blur),
        },
        A = {
          background: P.colors("background"),
          backgroundColor: P.colors("backgroundColor"),
          backgroundImage: P.gradients("backgroundImage"),
          backgroundSize: !0,
          backgroundPosition: !0,
          backgroundRepeat: !0,
          backgroundAttachment: !0,
          backgroundClip: { transform: T.bgClip },
          bgSize: P.prop("backgroundSize"),
          bgPosition: P.prop("backgroundPosition"),
          bg: P.colors("background"),
          bgColor: P.colors("backgroundColor"),
          bgPos: P.prop("backgroundPosition"),
          bgRepeat: P.prop("backgroundRepeat"),
          bgAttachment: P.prop("backgroundAttachment"),
          bgGradient: P.gradients("backgroundImage"),
          bgClip: { transform: T.bgClip },
        };
      Object.assign(A, {
        bgImage: A.backgroundImage,
        bgImg: A.backgroundImage,
      });
      let R = {
        border: P.borders("border"),
        borderWidth: P.borderWidths("borderWidth"),
        borderStyle: P.borderStyles("borderStyle"),
        borderColor: P.colors("borderColor"),
        borderRadius: P.radii("borderRadius"),
        borderTop: P.borders("borderTop"),
        borderBlockStart: P.borders("borderBlockStart"),
        borderTopLeftRadius: P.radii("borderTopLeftRadius"),
        borderStartStartRadius: P.logical({
          scale: "radii",
          property: { ltr: "borderTopLeftRadius", rtl: "borderTopRightRadius" },
        }),
        borderEndStartRadius: P.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomLeftRadius",
            rtl: "borderBottomRightRadius",
          },
        }),
        borderTopRightRadius: P.radii("borderTopRightRadius"),
        borderStartEndRadius: P.logical({
          scale: "radii",
          property: { ltr: "borderTopRightRadius", rtl: "borderTopLeftRadius" },
        }),
        borderEndEndRadius: P.logical({
          scale: "radii",
          property: {
            ltr: "borderBottomRightRadius",
            rtl: "borderBottomLeftRadius",
          },
        }),
        borderRight: P.borders("borderRight"),
        borderInlineEnd: P.borders("borderInlineEnd"),
        borderBottom: P.borders("borderBottom"),
        borderBlockEnd: P.borders("borderBlockEnd"),
        borderBottomLeftRadius: P.radii("borderBottomLeftRadius"),
        borderBottomRightRadius: P.radii("borderBottomRightRadius"),
        borderLeft: P.borders("borderLeft"),
        borderInlineStart: { property: "borderInlineStart", scale: "borders" },
        borderInlineStartRadius: P.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
            rtl: ["borderTopRightRadius", "borderBottomRightRadius"],
          },
        }),
        borderInlineEndRadius: P.logical({
          scale: "radii",
          property: {
            ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
            rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"],
          },
        }),
        borderX: P.borders(["borderLeft", "borderRight"]),
        borderInline: P.borders("borderInline"),
        borderY: P.borders(["borderTop", "borderBottom"]),
        borderBlock: P.borders("borderBlock"),
        borderTopWidth: P.borderWidths("borderTopWidth"),
        borderBlockStartWidth: P.borderWidths("borderBlockStartWidth"),
        borderTopColor: P.colors("borderTopColor"),
        borderBlockStartColor: P.colors("borderBlockStartColor"),
        borderTopStyle: P.borderStyles("borderTopStyle"),
        borderBlockStartStyle: P.borderStyles("borderBlockStartStyle"),
        borderBottomWidth: P.borderWidths("borderBottomWidth"),
        borderBlockEndWidth: P.borderWidths("borderBlockEndWidth"),
        borderBottomColor: P.colors("borderBottomColor"),
        borderBlockEndColor: P.colors("borderBlockEndColor"),
        borderBottomStyle: P.borderStyles("borderBottomStyle"),
        borderBlockEndStyle: P.borderStyles("borderBlockEndStyle"),
        borderLeftWidth: P.borderWidths("borderLeftWidth"),
        borderInlineStartWidth: P.borderWidths("borderInlineStartWidth"),
        borderLeftColor: P.colors("borderLeftColor"),
        borderInlineStartColor: P.colors("borderInlineStartColor"),
        borderLeftStyle: P.borderStyles("borderLeftStyle"),
        borderInlineStartStyle: P.borderStyles("borderInlineStartStyle"),
        borderRightWidth: P.borderWidths("borderRightWidth"),
        borderInlineEndWidth: P.borderWidths("borderInlineEndWidth"),
        borderRightColor: P.colors("borderRightColor"),
        borderInlineEndColor: P.colors("borderInlineEndColor"),
        borderRightStyle: P.borderStyles("borderRightStyle"),
        borderInlineEndStyle: P.borderStyles("borderInlineEndStyle"),
        borderTopRadius: P.radii([
          "borderTopLeftRadius",
          "borderTopRightRadius",
        ]),
        borderBottomRadius: P.radii([
          "borderBottomLeftRadius",
          "borderBottomRightRadius",
        ]),
        borderLeftRadius: P.radii([
          "borderTopLeftRadius",
          "borderBottomLeftRadius",
        ]),
        borderRightRadius: P.radii([
          "borderTopRightRadius",
          "borderBottomRightRadius",
        ]),
      };
      Object.assign(R, {
        rounded: R.borderRadius,
        roundedTop: R.borderTopRadius,
        roundedTopLeft: R.borderTopLeftRadius,
        roundedTopRight: R.borderTopRightRadius,
        roundedTopStart: R.borderStartStartRadius,
        roundedTopEnd: R.borderStartEndRadius,
        roundedBottom: R.borderBottomRadius,
        roundedBottomLeft: R.borderBottomLeftRadius,
        roundedBottomRight: R.borderBottomRightRadius,
        roundedBottomStart: R.borderEndStartRadius,
        roundedBottomEnd: R.borderEndEndRadius,
        roundedLeft: R.borderLeftRadius,
        roundedRight: R.borderRightRadius,
        roundedStart: R.borderInlineStartRadius,
        roundedEnd: R.borderInlineEndRadius,
        borderStart: R.borderInlineStart,
        borderEnd: R.borderInlineEnd,
        borderTopStartRadius: R.borderStartStartRadius,
        borderTopEndRadius: R.borderStartEndRadius,
        borderBottomStartRadius: R.borderEndStartRadius,
        borderBottomEndRadius: R.borderEndEndRadius,
        borderStartRadius: R.borderInlineStartRadius,
        borderEndRadius: R.borderInlineEndRadius,
        borderStartWidth: R.borderInlineStartWidth,
        borderEndWidth: R.borderInlineEndWidth,
        borderStartColor: R.borderInlineStartColor,
        borderEndColor: R.borderInlineEndColor,
        borderStartStyle: R.borderInlineStartStyle,
        borderEndStyle: R.borderInlineEndStyle,
      });
      let C = {
          color: P.colors("color"),
          textColor: P.colors("color"),
          fill: P.colors("fill"),
          stroke: P.colors("stroke"),
          accentColor: P.colors("accentColor"),
          textFillColor: P.colors("textFillColor"),
        },
        E = {
          alignItems: !0,
          alignContent: !0,
          justifyItems: !0,
          justifyContent: !0,
          flexWrap: !0,
          flexDirection: { transform: T.flexDirection },
          flex: !0,
          flexFlow: !0,
          flexGrow: !0,
          flexShrink: !0,
          flexBasis: P.sizes("flexBasis"),
          justifySelf: !0,
          alignSelf: !0,
          order: !0,
          placeItems: !0,
          placeContent: !0,
          placeSelf: !0,
          gap: P.space("gap"),
          rowGap: P.space("rowGap"),
          columnGap: P.space("columnGap"),
        };
      Object.assign(E, { flexDir: E.flexDirection });
      let M = {
        width: P.sizesT("width"),
        inlineSize: P.sizesT("inlineSize"),
        height: P.sizes("height"),
        blockSize: P.sizes("blockSize"),
        boxSize: P.sizes(["width", "height"]),
        minWidth: P.sizes("minWidth"),
        minInlineSize: P.sizes("minInlineSize"),
        minHeight: P.sizes("minHeight"),
        minBlockSize: P.sizes("minBlockSize"),
        maxWidth: P.sizes("maxWidth"),
        maxInlineSize: P.sizes("maxInlineSize"),
        maxHeight: P.sizes("maxHeight"),
        maxBlockSize: P.sizes("maxBlockSize"),
        overflow: !0,
        overflowX: !0,
        overflowY: !0,
        overscrollBehavior: !0,
        overscrollBehaviorX: !0,
        overscrollBehaviorY: !0,
        display: !0,
        aspectRatio: !0,
        hideFrom: {
          scale: "breakpoints",
          transform: (t, e) => {
            let r = e.__breakpoints?.get(t)?.minW ?? t;
            return {
              [`@media screen and (min-width: ${r})`]: { display: "none" },
            };
          },
        },
        hideBelow: {
          scale: "breakpoints",
          transform: (t, e) => {
            let r = e.__breakpoints?.get(t)?._minW ?? t;
            return {
              [`@media screen and (max-width: ${r})`]: { display: "none" },
            };
          },
        },
        verticalAlign: !0,
        boxSizing: !0,
        boxDecorationBreak: !0,
        float: P.propT("float", T.float),
        objectFit: !0,
        objectPosition: !0,
        visibility: !0,
        isolation: !0,
      };
      Object.assign(M, {
        w: M.width,
        h: M.height,
        minW: M.minWidth,
        maxW: M.maxWidth,
        minH: M.minHeight,
        maxH: M.maxHeight,
        overscroll: M.overscrollBehavior,
        overscrollX: M.overscrollBehaviorX,
        overscrollY: M.overscrollBehaviorY,
      });
      let _ = {
          filter: { transform: T.filter },
          blur: P.blur("--chakra-blur"),
          brightness: P.propT("--chakra-brightness", T.brightness),
          contrast: P.propT("--chakra-contrast", T.contrast),
          hueRotate: P.propT("--chakra-hue-rotate", T.hueRotate),
          invert: P.propT("--chakra-invert", T.invert),
          saturate: P.propT("--chakra-saturate", T.saturate),
          dropShadow: P.propT("--chakra-drop-shadow", T.dropShadow),
          backdropFilter: { transform: T.backdropFilter },
          backdropBlur: P.blur("--chakra-backdrop-blur"),
          backdropBrightness: P.propT(
            "--chakra-backdrop-brightness",
            T.brightness
          ),
          backdropContrast: P.propT("--chakra-backdrop-contrast", T.contrast),
          backdropHueRotate: P.propT(
            "--chakra-backdrop-hue-rotate",
            T.hueRotate
          ),
          backdropInvert: P.propT("--chakra-backdrop-invert", T.invert),
          backdropSaturate: P.propT("--chakra-backdrop-saturate", T.saturate),
        },
        j = {
          ring: { transform: T.ring },
          ringColor: P.colors("--chakra-ring-color"),
          ringOffset: P.prop("--chakra-ring-offset-width"),
          ringOffsetColor: P.colors("--chakra-ring-offset-color"),
          ringInset: P.prop("--chakra-ring-inset"),
        },
        B = {
          appearance: !0,
          cursor: !0,
          resize: !0,
          userSelect: !0,
          pointerEvents: !0,
          outline: { transform: T.outline },
          outlineOffset: !0,
          outlineColor: P.colors("outlineColor"),
        },
        V = {
          gridGap: P.space("gridGap"),
          gridColumnGap: P.space("gridColumnGap"),
          gridRowGap: P.space("gridRowGap"),
          gridColumn: !0,
          gridRow: !0,
          gridAutoFlow: !0,
          gridAutoColumns: !0,
          gridColumnStart: !0,
          gridColumnEnd: !0,
          gridRowStart: !0,
          gridRowEnd: !0,
          gridAutoRows: !0,
          gridTemplate: !0,
          gridTemplateColumns: !0,
          gridTemplateRows: !0,
          gridTemplateAreas: !0,
          gridArea: !0,
        },
        D = ((t) => {
          let e = new WeakMap();
          return (r, i, n, a) => {
            if (void 0 === r) return t(r, i, n);
            e.has(r) || e.set(r, new Map());
            let o = e.get(r);
            if (o.has(i)) return o.get(i);
            let s = t(r, i, n, a);
            return o.set(i, s), s;
          };
        })(function (t, e, r, i) {
          let n = "string" == typeof e ? e.split(".") : [e];
          for (i = 0; i < n.length && t; i += 1) t = t[n[i]];
          return void 0 === t ? r : t;
        }),
        O = {
          border: "0px",
          clip: "rect(0, 0, 0, 0)",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: "0px",
          overflow: "hidden",
          whiteSpace: "nowrap",
          position: "absolute",
        },
        L = {
          position: "static",
          width: "auto",
          height: "auto",
          clip: "auto",
          padding: "0",
          margin: "0",
          overflow: "visible",
          whiteSpace: "normal",
        },
        I = (t, e, r) => {
          let i = {},
            n = D(t, e, {});
          for (let t in n) (t in r && null != r[t]) || (i[t] = n[t]);
          return i;
        },
        F = {
          position: !0,
          pos: P.prop("position"),
          zIndex: P.prop("zIndex", "zIndices"),
          inset: P.spaceT("inset"),
          insetX: P.spaceT(["left", "right"]),
          insetInline: P.spaceT("insetInline"),
          insetY: P.spaceT(["top", "bottom"]),
          insetBlock: P.spaceT("insetBlock"),
          top: P.spaceT("top"),
          insetBlockStart: P.spaceT("insetBlockStart"),
          bottom: P.spaceT("bottom"),
          insetBlockEnd: P.spaceT("insetBlockEnd"),
          left: P.spaceT("left"),
          insetInlineStart: P.logical({
            scale: "space",
            property: { ltr: "left", rtl: "right" },
          }),
          right: P.spaceT("right"),
          insetInlineEnd: P.logical({
            scale: "space",
            property: { ltr: "right", rtl: "left" },
          }),
        };
      Object.assign(F, {
        insetStart: F.insetInlineStart,
        insetEnd: F.insetInlineEnd,
      });
      let $ = {
        boxShadow: P.shadows("boxShadow"),
        mixBlendMode: !0,
        blendMode: P.prop("mixBlendMode"),
        backgroundBlendMode: !0,
        bgBlendMode: P.prop("backgroundBlendMode"),
        opacity: !0,
      };
      Object.assign($, { shadow: $.boxShadow });
      let W = {
        margin: P.spaceT("margin"),
        marginTop: P.spaceT("marginTop"),
        marginBlockStart: P.spaceT("marginBlockStart"),
        marginRight: P.spaceT("marginRight"),
        marginInlineEnd: P.spaceT("marginInlineEnd"),
        marginBottom: P.spaceT("marginBottom"),
        marginBlockEnd: P.spaceT("marginBlockEnd"),
        marginLeft: P.spaceT("marginLeft"),
        marginInlineStart: P.spaceT("marginInlineStart"),
        marginX: P.spaceT(["marginInlineStart", "marginInlineEnd"]),
        marginInline: P.spaceT("marginInline"),
        marginY: P.spaceT(["marginTop", "marginBottom"]),
        marginBlock: P.spaceT("marginBlock"),
        padding: P.space("padding"),
        paddingTop: P.space("paddingTop"),
        paddingBlockStart: P.space("paddingBlockStart"),
        paddingRight: P.space("paddingRight"),
        paddingBottom: P.space("paddingBottom"),
        paddingBlockEnd: P.space("paddingBlockEnd"),
        paddingLeft: P.space("paddingLeft"),
        paddingInlineStart: P.space("paddingInlineStart"),
        paddingInlineEnd: P.space("paddingInlineEnd"),
        paddingX: P.space(["paddingInlineStart", "paddingInlineEnd"]),
        paddingInline: P.space("paddingInline"),
        paddingY: P.space(["paddingTop", "paddingBottom"]),
        paddingBlock: P.space("paddingBlock"),
      };
      Object.assign(W, {
        m: W.margin,
        mt: W.marginTop,
        mr: W.marginRight,
        me: W.marginInlineEnd,
        marginEnd: W.marginInlineEnd,
        mb: W.marginBottom,
        ml: W.marginLeft,
        ms: W.marginInlineStart,
        marginStart: W.marginInlineStart,
        mx: W.marginX,
        my: W.marginY,
        p: W.padding,
        pt: W.paddingTop,
        py: W.paddingY,
        px: W.paddingX,
        pb: W.paddingBottom,
        pl: W.paddingLeft,
        ps: W.paddingInlineStart,
        paddingStart: W.paddingInlineStart,
        pr: W.paddingRight,
        pe: W.paddingInlineEnd,
        paddingEnd: W.paddingInlineEnd,
      });
      let z = {
          scrollBehavior: !0,
          scrollSnapAlign: !0,
          scrollSnapStop: !0,
          scrollSnapType: !0,
          scrollMargin: P.spaceT("scrollMargin"),
          scrollMarginTop: P.spaceT("scrollMarginTop"),
          scrollMarginBottom: P.spaceT("scrollMarginBottom"),
          scrollMarginLeft: P.spaceT("scrollMarginLeft"),
          scrollMarginRight: P.spaceT("scrollMarginRight"),
          scrollMarginX: P.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
          scrollMarginY: P.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
          scrollPadding: P.spaceT("scrollPadding"),
          scrollPaddingTop: P.spaceT("scrollPaddingTop"),
          scrollPaddingBottom: P.spaceT("scrollPaddingBottom"),
          scrollPaddingLeft: P.spaceT("scrollPaddingLeft"),
          scrollPaddingRight: P.spaceT("scrollPaddingRight"),
          scrollPaddingX: P.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
          scrollPaddingY: P.spaceT(["scrollPaddingTop", "scrollPaddingBottom"]),
        },
        U = {
          fontFamily: P.prop("fontFamily", "fonts"),
          fontSize: P.prop("fontSize", "fontSizes", T.px),
          fontWeight: P.prop("fontWeight", "fontWeights"),
          lineHeight: P.prop("lineHeight", "lineHeights"),
          letterSpacing: P.prop("letterSpacing", "letterSpacings"),
          textAlign: !0,
          fontStyle: !0,
          textIndent: !0,
          wordBreak: !0,
          overflowWrap: !0,
          textOverflow: !0,
          textTransform: !0,
          whiteSpace: !0,
          isTruncated: {
            transform(t) {
              if (!0 === t)
                return {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                };
            },
          },
          noOfLines: {
            static: {
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: "var(--chakra-line-clamp)",
            },
            property: "--chakra-line-clamp",
          },
        },
        N = {
          textDecorationColor: P.colors("textDecorationColor"),
          textDecoration: !0,
          textDecor: { property: "textDecoration" },
          textDecorationLine: !0,
          textDecorationStyle: !0,
          textDecorationThickness: !0,
          textUnderlineOffset: !0,
          textShadow: P.shadows("textShadow"),
        },
        H = {
          clipPath: !0,
          transform: P.propT("transform", T.transform),
          transformOrigin: !0,
          translateX: P.spaceT("--chakra-translate-x"),
          translateY: P.spaceT("--chakra-translate-y"),
          skewX: P.degreeT("--chakra-skew-x"),
          skewY: P.degreeT("--chakra-skew-y"),
          scaleX: P.prop("--chakra-scale-x"),
          scaleY: P.prop("--chakra-scale-y"),
          scale: P.prop(["--chakra-scale-x", "--chakra-scale-y"]),
          rotate: P.degreeT("--chakra-rotate"),
        },
        Y = {
          listStyleType: !0,
          listStylePosition: !0,
          listStylePos: P.prop("listStylePosition"),
          listStyleImage: !0,
          listStyleImg: P.prop("listStyleImage"),
        },
        X = i(
          {},
          A,
          R,
          C,
          E,
          M,
          _,
          j,
          B,
          V,
          {
            srOnly: {
              transform: (t) => (!0 === t ? O : "focusable" === t ? L : {}),
            },
            layerStyle: {
              processResult: !0,
              transform: (t, e, r) => I(e, `layerStyles.${t}`, r),
            },
            textStyle: {
              processResult: !0,
              transform: (t, e, r) => I(e, `textStyles.${t}`, r),
            },
            apply: { processResult: !0, transform: (t, e, r) => I(e, t, r) },
          },
          F,
          $,
          W,
          z,
          U,
          N,
          H,
          Y,
          {
            transition: !0,
            transitionDelay: !0,
            animation: !0,
            willChange: !0,
            transitionDuration: P.prop(
              "transitionDuration",
              "transition.duration"
            ),
            transitionProperty: P.prop(
              "transitionProperty",
              "transition.property"
            ),
            transitionTimingFunction: P.prop(
              "transitionTimingFunction",
              "transition.easing"
            ),
          }
        );
      Object.keys(Object.assign({}, W, M, E, V, F));
      let G = [...Object.keys(X), ...n.s],
        q = { ...X, ...n.T },
        K = (t) => t in q;
    },
    7726: (t, e, r) => {
      "use strict";
      r.d(e, { J: () => f });
      var i,
        n = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          scale: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        a = r(4088),
        o = /[A-Z]|^ms/g,
        s = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        l = function (t) {
          return 45 === t.charCodeAt(1);
        },
        u = function (t) {
          return null != t && "boolean" != typeof t;
        },
        c = (0, a.A)(function (t) {
          return l(t) ? t : t.replace(o, "-$&").toLowerCase();
        }),
        d = function (t, e) {
          switch (t) {
            case "animation":
            case "animationName":
              if ("string" == typeof e)
                return e.replace(s, function (t, e, r) {
                  return (i = { name: e, styles: r, next: i }), e;
                });
          }
          return 1 === n[t] || l(t) || "number" != typeof e || 0 === e
            ? e
            : e + "px";
        };
      function h(t, e, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim)
              return (i = { name: r.name, styles: r.styles, next: i }), r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (i = { name: n.name, styles: n.styles, next: i }),
                    (n = n.next);
              return r.styles + ";";
            }
            return (function (t, e, r) {
              var i = "";
              if (Array.isArray(r))
                for (var n = 0; n < r.length; n++) i += h(t, e, r[n]) + ";";
              else
                for (var a in r) {
                  var o = r[a];
                  if ("object" != typeof o)
                    null != e && void 0 !== e[o]
                      ? (i += a + "{" + e[o] + "}")
                      : u(o) && (i += c(a) + ":" + d(a, o) + ";");
                  else if (
                    Array.isArray(o) &&
                    "string" == typeof o[0] &&
                    (null == e || void 0 === e[o[0]])
                  )
                    for (var s = 0; s < o.length; s++)
                      u(o[s]) && (i += c(a) + ":" + d(a, o[s]) + ";");
                  else {
                    var l = h(t, e, o);
                    switch (a) {
                      case "animation":
                      case "animationName":
                        i += c(a) + ":" + l + ";";
                        break;
                      default:
                        i += a + "{" + l + "}";
                    }
                  }
                }
              return i;
            })(t, e, r);
          case "function":
            if (void 0 !== t) {
              var a = i,
                o = r(t);
              return (i = a), h(t, e, o);
            }
        }
        if (null == e) return r;
        var s = e[r];
        return void 0 !== s ? s : r;
      }
      var p = /label:\s*([^\s;{]+)\s*(;|$)/g;
      function f(t, e, r) {
        if (
          1 === t.length &&
          "object" == typeof t[0] &&
          null !== t[0] &&
          void 0 !== t[0].styles
        )
          return t[0];
        var n,
          a = !0,
          o = "";
        i = void 0;
        var s = t[0];
        null == s || void 0 === s.raw
          ? ((a = !1), (o += h(r, e, s)))
          : (o += s[0]);
        for (var l = 1; l < t.length; l++)
          (o += h(r, e, t[l])), a && (o += s[l]);
        p.lastIndex = 0;
        for (var u = ""; null !== (n = p.exec(o)); ) u += "-" + n[1];
        return {
          name:
            (function (t) {
              for (var e, r = 0, i = 0, n = t.length; n >= 4; ++i, n -= 4)
                (e =
                  (65535 &
                    (e =
                      (255 & t.charCodeAt(i)) |
                      ((255 & t.charCodeAt(++i)) << 8) |
                      ((255 & t.charCodeAt(++i)) << 16) |
                      ((255 & t.charCodeAt(++i)) << 24))) *
                    0x5bd1e995 +
                  (((e >>> 16) * 59797) << 16)),
                  (e ^= e >>> 24),
                  (r =
                    ((65535 & e) * 0x5bd1e995 + (((e >>> 16) * 59797) << 16)) ^
                    ((65535 & r) * 0x5bd1e995 + (((r >>> 16) * 59797) << 16)));
              switch (n) {
                case 3:
                  r ^= (255 & t.charCodeAt(i + 2)) << 16;
                case 2:
                  r ^= (255 & t.charCodeAt(i + 1)) << 8;
                case 1:
                  (r ^= 255 & t.charCodeAt(i)),
                    (r =
                      (65535 & r) * 0x5bd1e995 + (((r >>> 16) * 59797) << 16));
              }
              return (
                (r ^= r >>> 13),
                (
                  ((r =
                    (65535 & r) * 0x5bd1e995 + (((r >>> 16) * 59797) << 16)) ^
                    (r >>> 15)) >>>
                  0
                ).toString(36)
              );
            })(o) + u,
          styles: o,
          next: i,
        };
      }
    },
    7891: (t, e, r) => {
      "use strict";
      r.d(e, { o: () => p, V: () => h });
      var i = r(6335),
        n = r(6378),
        a = r(3425),
        o = r(3363),
        s = r(7019),
        l = r(2115),
        u = r(5522),
        c = r(9839);
      function d(t) {
        var e;
        let r =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          { styleConfig: d, ...h } = r,
          { theme: p, colorMode: f } = (0, c.UQ)(),
          m = t ? (0, s.r)(p, "components.".concat(t)) : void 0,
          g = d || m,
          v = o(
            { theme: p, colorMode: f },
            null !== (e = null == g ? void 0 : g.defaultProps) && void 0 !== e
              ? e
              : {},
            Object.fromEntries(
              Object.entries(h).filter((t) => {
                let [e, r] = t;
                return (
                  void 0 !== r && "children" !== e && !(0, l.isValidElement)(r)
                );
              })
            ),
            (t, e) => (t ? void 0 : e)
          ),
          y = (0, l.useRef)({});
        if (g) {
          let t = ((t) => {
            let { variant: e, size: r, theme: s } = t,
              l = (function (t) {
                let e = t.__breakpoints;
                return function (t, r, s, l) {
                  var u;
                  if (!e) return;
                  let c = {},
                    d =
                      ((u = e.toArrayValue),
                      Array.isArray(s)
                        ? s
                        : (0, i.Gv)(s)
                        ? u(s)
                        : null != s
                        ? [s]
                        : void 0);
                  if (!d) return c;
                  let h = d.length,
                    p = 1 === h,
                    f = !!t.parts;
                  for (let i = 0; i < h; i++) {
                    let s = e.details[i],
                      u =
                        e.details[
                          (function (t, e) {
                            for (let r = e + 1; r < t.length; r++)
                              if (null != t[r]) return r;
                            return -1;
                          })(d, i)
                        ],
                      h = (0, n.R)(s.minW, u?._minW),
                      m = (0, a.J)(t[r]?.[d[i]], l);
                    if (m) {
                      if (f) {
                        t.parts?.forEach((t) => {
                          o(c, { [t]: p ? m[t] : { [h]: m[t] } });
                        });
                        continue;
                      }
                      if (!f) {
                        p ? o(c, m) : (c[h] = m);
                        continue;
                      }
                      c[h] = m;
                    }
                  }
                  return c;
                };
              })(s);
            return o(
              {},
              (0, a.J)(g.baseStyle ?? {}, t),
              l(g, "sizes", r, t),
              l(g, "variants", e, t)
            );
          })(v);
          u(y.current, t) || (y.current = t);
        }
        return y.current;
      }
      function h(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return d(t, e);
      }
      function p(t) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return d(t, e);
      }
    },
    8038: (t, e, r) => {
      "use strict";
      r.d(e, { M: () => n });
      var i = r(3304);
      function n(t) {
        return (0, i.c)(t, ["styleConfig", "size", "variant", "colorScheme"]);
      }
    },
    8816: (t, e, r) => {
      "use strict";
      function i(t, e, r) {
        var i = "";
        return (
          r.split(" ").forEach(function (r) {
            void 0 !== t[r] ? e.push(t[r] + ";") : r && (i += r + " ");
          }),
          i
        );
      }
      r.d(e, { Rk: () => i, SF: () => n, sk: () => a });
      var n = function (t, e, r) {
          var i = t.key + "-" + e.name;
          !1 === r &&
            void 0 === t.registered[i] &&
            (t.registered[i] = e.styles);
        },
        a = function (t, e, r) {
          n(t, e, r);
          var i = t.key + "-" + e.name;
          if (void 0 === t.inserted[e.name]) {
            var a = e;
            do t.insert(e === a ? "." + i : "", a, t.sheet, !0), (a = a.next);
            while (void 0 !== a);
          }
        };
    },
    8862: (t, e, r) => {
      "use strict";
      r.d(e, { i: () => s, s: () => o });
      var i,
        n = r(2115),
        a =
          !!(i || (i = r.t(n, 2))).useInsertionEffect &&
          (i || (i = r.t(n, 2))).useInsertionEffect,
        o =
          a ||
          function (t) {
            return t();
          },
        s = a || n.useLayoutEffect;
    },
    8972: (t, e, r) => {
      "use strict";
      r.d(e, { B: () => i });
      let i = "undefined" != typeof window;
    },
    9630: (t, e, r) => {
      "use strict";
      function i() {
        return (i = Object.assign
          ? Object.assign.bind()
          : function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = arguments[e];
                for (var i in r)
                  ({}).hasOwnProperty.call(r, i) && (t[i] = r[i]);
              }
              return t;
            }).apply(null, arguments);
      }
      r.d(e, { A: () => i });
    },
    9839: (t, e, r) => {
      "use strict";
      r.d(e, { UQ: () => a, gf: () => o });
      var i = r(5186),
        n = r(7098);
      function a() {
        let t = (0, n.G6)(),
          e = (0, i.D)();
        return { ...t, theme: e };
      }
      function o(t, e, r) {
        let i = Array.isArray(e) ? e : [e],
          n = Array.isArray(r) ? r : [r];
        return (r) => {
          let a = n.filter(Boolean),
            o = i.map((e, i) => {
              var n, o;
              return "breakpoints" === t
                ? (function (t, e, r) {
                    var i, n;
                    if (null == e) return e;
                    let a = (e) => {
                      var r, i;
                      return null === (i = t.__breakpoints) || void 0 === i
                        ? void 0
                        : null === (r = i.asArray) || void 0 === r
                        ? void 0
                        : r[e];
                    };
                    return null !==
                      (n = null !== (i = a(e)) && void 0 !== i ? i : a(r)) &&
                      void 0 !== n
                      ? n
                      : r;
                  })(r, e, null !== (n = a[i]) && void 0 !== n ? n : e)
                : (function (t, e, r) {
                    var i, n;
                    if (null == e) return e;
                    let a = (e) => {
                      var r, i;
                      return null === (i = t.__cssMap) || void 0 === i
                        ? void 0
                        : null === (r = i[e]) || void 0 === r
                        ? void 0
                        : r.value;
                    };
                    return null !==
                      (n = null !== (i = a(e)) && void 0 !== i ? i : a(r)) &&
                      void 0 !== n
                      ? n
                      : r;
                  })(
                    r,
                    "".concat(t, ".").concat(e),
                    null !== (o = a[i]) && void 0 !== o ? o : e
                  );
            });
          return Array.isArray(e) ? o : o[0];
        };
      }
    },
  },
]);
