(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [177],
  {
    2063: (e, s, r) => {
      "use strict";
      r.d(s, { ChakraWrapper: () => i });
      var t = r(5155),
        n = r(3112);
      let a = (0, r(3362).oY)({
        config: { initialColorMode: "dark", useSystemColorMode: !1 },
        styles: {
          global: {
            body: {
              bg: "black",
              color: "white",
              fontFamily: "'Inter', system-ui, sans-serif",
            },
            html: { fontFamily: "'Inter', system-ui, sans-serif" },
          },
        },
        colors: {
          brand: {
            400: "#38bdf8",
            500: "#0ea5e9",
            600: "#0284c7",
            700: "#0369a1",
          },
          gray: {
            300: "#d1d5db",
            400: "#9ca3af",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
        },
        fonts: {
          heading: "'Inter', system-ui, sans-serif",
          body: "'Inter', system-ui, sans-serif",
        },
      });
      function i(e) {
        let { children: s } = e;
        return (0, t.jsx)(n.s, { theme: a, children: s });
      }
    },
    6117: (e, s, r) => {
      Promise.resolve().then(r.t.bind(r, 9324, 23)),
        Promise.resolve().then(r.bind(r, 2063));
    },
    9324: () => {},
  },
  (e) => {
    var s = (s) => e((e.s = s));
    e.O(0, [533, 414, 214, 271, 441, 684, 358], () => s(6117)), (_N_E = e.O());
  },
]);
