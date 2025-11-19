(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    61: (e, i, t) => {
      Promise.resolve().then(t.bind(t, 6199));
    },
    6199: (e, i, t) => {
      "use strict";
      t.r(i), t.d(i, { default: () => eS });
      var r = t(5155),
        a = t(2115),
        n = t(7700),
        l = t(5206),
        o = t(9108),
        s = t(7404),
        c = t(5687);
      let d = l.P.create(n.a);
      function h() {
        let [e, i] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          let e = () => {
            i(window.scrollY > 10);
          };
          return (
            window.addEventListener("scroll", e),
            () => window.removeEventListener("scroll", e)
          );
        }, []);
        let t = (e, i) => {
          if (i) {
            window.location.href = e;
            return;
          }
          let t = document.querySelector(e);
          t && t.scrollIntoView({ behavior: "smooth" });
        };
        return (0, r.jsx)(n.a, {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          display: "flex",
          justifyContent: "center",
          pt: 4,
          children: (0, r.jsx)(d, {
            as: "nav",
            initial: { opacity: 0, y: -20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            bg: e ? "rgba(0, 0, 0, 0.1)" : "transparent",
            backdropFilter: e ? "blur(12px)" : "none",
            border: e ? "1px solid" : "none",
            borderColor: e ? "rgba(255, 255, 255, 0.1)" : "transparent",
            borderRadius: "full",
            px: 8,
            py: 3,
            style: { transition: "all 0.3s ease" },
            children: (0, r.jsx)(o.s, {
              gap: 8,
              children: c.TD.map((e) =>
                (0, r.jsx)(
                  s.$,
                  {
                    variant: "ghost",
                    onClick: () => t(e.href, e.external),
                    color: "white",
                    _hover: { color: "white" },
                    transition: "colors 0.2s",
                    fontWeight: "medium",
                    fontSize: "sm",
                    children: e.name,
                  },
                  e.name
                )
              ),
            }),
          }),
        });
      }
      var x = t(1649),
        p = t(8670),
        u = t(2900),
        m = t(5569),
        g = t(802);
      let y = (e) => {
          let {
              text: i,
              as: t = "div",
              typingSpeed: n = 50,
              initialDelay: l = 0,
              pauseDuration: o = 2e3,
              deletingSpeed: s = 30,
              loop: c = !0,
              className: d = "",
              showCursor: h = !0,
              hideCursorWhileTyping: x = !1,
              cursorCharacter: p = "|",
              cursorClassName: u = "",
              cursorBlinkDuration: m = 0.5,
              textColors: y = [],
              variableSpeed: f,
              onSentenceComplete: j,
              startOnVisible: b = !1,
              reverseMode: w = !1,
              ...v
            } = e,
            [A, S] = (0, a.useState)(""),
            [E, k] = (0, a.useState)(0),
            [z, C] = (0, a.useState)(!1),
            [_, T] = (0, a.useState)(0),
            [W, I] = (0, a.useState)(!b),
            P = (0, a.useRef)(null),
            D = (0, a.useRef)(null),
            F = (0, a.useMemo)(() => (Array.isArray(i) ? i : [i]), [i]),
            M = (0, a.useCallback)(() => {
              if (!f) return n;
              let { min: e, max: i } = f;
              return Math.random() * (i - e) + e;
            }, [f, n]);
          (0, a.useEffect)(() => {
            if (!b || !D.current) return;
            let e = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting && I(!0);
                });
              },
              { threshold: 0.1 }
            );
            return e.observe(D.current), () => e.disconnect();
          }, [b]),
            (0, a.useEffect)(() => {
              h &&
                P.current &&
                (g.os.set(P.current, { opacity: 1 }),
                g.os.to(P.current, {
                  opacity: 0,
                  duration: m,
                  repeat: -1,
                  yoyo: !0,
                  ease: "power2.inOut",
                }));
            }, [h, m]),
            (0, a.useEffect)(() => {
              let e;
              if (!W) return;
              let i = F[_],
                t = w ? i.split("").reverse().join("") : i,
                r = () => {
                  z
                    ? "" === A
                      ? (C(!1),
                        (_ !== F.length - 1 || !!c) &&
                          (j && j(F[_], _),
                          T((e) => (e + 1) % F.length),
                          k(0),
                          (e = setTimeout(() => {}, o))))
                      : (e = setTimeout(() => {
                          S((e) => e.slice(0, -1));
                        }, s))
                    : E < t.length
                    ? (e = setTimeout(
                        () => {
                          S((e) => e + t[E]), k((e) => e + 1);
                        },
                        f ? M() : n
                      ))
                    : F.length > 1 &&
                      (e = setTimeout(() => {
                        C(!0);
                      }, o));
                };
              return (
                0 !== E || z || "" !== A ? r() : (e = setTimeout(r, l)),
                () => clearTimeout(e)
              );
            }, [E, A, z, n, s, o, F, _, c, l, W, w, f, j]);
          let R = x && (E < F[_].length || z);
          return (0, a.createElement)(
            t,
            { ref: D, className: "text-type ".concat(d), ...v },
            (0, r.jsx)("span", {
              className: "text-type__content",
              style: { color: 0 === y.length ? "#ffffff" : y[_ % y.length] },
              children: A,
            }),
            h &&
              (0, r.jsx)("span", {
                ref: P,
                className: "text-type__cursor "
                  .concat(u, " ")
                  .concat(R ? "text-type__cursor--hidden" : ""),
                children: p,
              })
          );
        },
        f = l.P.create(x.D);
      function j() {
        return (0, r.jsx)(n.a, {
          as: "section",
          id: "home",
          minH: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { base: 4, sm: 6, lg: 8 },
          pt: 16,
          children: (0, r.jsx)(u.m, {
            maxW: "7xl",
            textAlign: "center",
            children: (0, r.jsxs)(m.T, {
              spacing: 6,
              align: "center",
              children: [
                (0, r.jsx)(f, {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  fontSize: { base: "6xl", sm: "7xl", lg: "8xl" },
                  fontWeight: "bold",
                  color: "white",
                  children: "Hi, I'm Hugo",
                }),
                (0, r.jsx)(f, {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
                  fontSize: { base: "lg", sm: "xl", lg: "2xl" },
                  fontWeight: "light",
                  bgGradient: "linear(to-r, white, gray.300)",
                  bgClip: "text",
                  color: "transparent",
                  minH: { base: "1.5rem", sm: "2rem", lg: "2.5rem" },
                  children: (0, r.jsx)(y, {
                    text: [
                      "Embedded Software Developer. Hardware Designer. Audio Tech Enthusiast.",
                      "Embedded Software Developer. Hardware Designer. Audio Tech Enthusiast.",
                      "Embedded Software Developer. Hardware Designer. Audio Tech Enthusiast.",
                    ],
                    typingSpeed: 100,
                    pauseDuration: 2e3,
                    showCursor: !0,
                    cursorCharacter: "█",
                    loop: !0,
                  }),
                }),
              ],
            }),
          }),
        });
      }
      l.P.create(p.E);
      var b = t(6604),
        w = t(3340),
        v = t(4558),
        A = t(4559),
        S = t(8727),
        E = t(4430),
        k = t(280),
        z = t(4020),
        C = t(7557);
      let _ = l.P.create(n.a),
        T = l.P.create(x.D);
      function W() {
        let e = (0, a.useRef)(null),
          i = (0, b.W)(e, { once: !1, margin: "-100px" });
        return (0, r.jsx)(n.a, {
          as: "section",
          id: "work",
          ref: e,
          py: 20,
          px: { base: 4, sm: 6, lg: 8 },
          children: (0, r.jsxs)(u.m, {
            maxW: "8xl",
            children: [
              (0, r.jsx)(T, {
                initial: { opacity: 0, y: 30 },
                animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                transition: { duration: 0.6 },
                fontSize: { base: "3xl", sm: "4xl", lg: "5xl" },
                fontWeight: "medium",
                textAlign: "left",
                mb: 8,
                color: "white",
                children: "Experience",
              }),
              (0, r.jsx)(_, {
                initial: { opacity: 0, y: 20 },
                animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                transition: { duration: 0.5 },
                children: (0, r.jsx)(w.n, {
                  allowToggle: !0,
                  defaultIndex: [0],
                  children: c.Qi.map((e, i) =>
                    (0, r.jsxs)(
                      v.A,
                      {
                        border: "1px solid",
                        borderColor: "whiteAlpha.200",
                        borderRadius: "md",
                        mb: 4,
                        bg: "whiteAlpha.100",
                        backdropFilter: "blur(6px)",
                        children: [
                          (0, r.jsx)("h2", {
                            children: (0, r.jsx)(A.J, {
                              px: 5,
                              py: 4,
                              _expanded: { bg: "whiteAlpha.200" },
                              children: (0, r.jsxs)(o.s, {
                                align: "center",
                                justify: "space-between",
                                w: "full",
                                gap: 4,
                                children: [
                                  (0, r.jsxs)(m.T, {
                                    align: "start",
                                    spacing: 0,
                                    children: [
                                      (0, r.jsx)(p.E, {
                                        color: "white",
                                        fontWeight: "medium",
                                        children: e.title,
                                      }),
                                      (0, r.jsxs)(S.z, {
                                        spacing: 2,
                                        children: [
                                          e.link
                                            ? (0, r.jsx)(E.N, {
                                                href: e.link,
                                                isExternal: !0,
                                                children: (0, r.jsx)(p.E, {
                                                  color: "gray.400",
                                                  fontSize: "sm",
                                                  _hover: { color: "gray.300" },
                                                  children: e.company,
                                                }),
                                              })
                                            : (0, r.jsx)(p.E, {
                                                color: "gray.400",
                                                fontSize: "sm",
                                                children: e.company,
                                              }),
                                          (0, r.jsx)(p.E, {
                                            color: "gray.400",
                                            fontSize: "sm",
                                            children: "|",
                                          }),
                                          (0, r.jsx)(p.E, {
                                            color: "gray.400",
                                            fontSize: "sm",
                                            children: e.location,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, r.jsxs)(S.z, {
                                    spacing: 4,
                                    color: "gray.400",
                                    fontSize: "sm",
                                    children: [
                                      (0, r.jsx)(p.E, { children: e.period }),
                                      (0, r.jsx)(k.Q, {}),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, r.jsx)(z.v, {
                            px: 5,
                            py: 5,
                            children: (0, r.jsxs)(m.T, {
                              align: "start",
                              spacing: 4,
                              children: [
                                (0, r.jsx)(m.T, {
                                  align: "start",
                                  spacing: 2,
                                  children: Array.isArray(e.description)
                                    ? e.description.map((e, i) =>
                                        (0, r.jsxs)(
                                          p.E,
                                          {
                                            color: "gray.300",
                                            lineHeight: "relaxed",
                                            children: ["• ", e],
                                          },
                                          i
                                        )
                                      )
                                    : "object" == typeof e.description &&
                                      null !== e.description
                                    ? Object.entries(e.description).map((e) => {
                                        let [i, t] = e;
                                        return (0, r.jsxs)(
                                          m.T,
                                          {
                                            align: "start",
                                            spacing: 1,
                                            children: [
                                              (0, r.jsx)(p.E, {
                                                color: "gray.200",
                                                fontWeight: "semibold",
                                                children: i,
                                              }),
                                              Array.isArray(t) &&
                                                t.map((e, i) =>
                                                  (0, r.jsxs)(
                                                    p.E,
                                                    {
                                                      color: "gray.300",
                                                      lineHeight: "relaxed",
                                                      children: ["• ", e],
                                                    },
                                                    i
                                                  )
                                                ),
                                            ],
                                          },
                                          i
                                        );
                                      })
                                    : (0, r.jsx)(p.E, {
                                        color: "gray.300",
                                        lineHeight: "relaxed",
                                        children: e.description,
                                      }),
                                }),
                                e.stack &&
                                  (0, r.jsxs)(m.T, {
                                    align: "start",
                                    spacing: 2,
                                    children: [
                                      (0, r.jsx)(p.E, {
                                        color: "gray.400",
                                        fontWeight: "medium",
                                        fontSize: "sm",
                                        children: "Tech Stack:",
                                      }),
                                      (0, r.jsx)(S.z, {
                                        spacing: 2,
                                        children: e.stack.map((e) =>
                                          (0, r.jsx)(
                                            n.a,
                                            {
                                              boxSize: "20px",
                                              children: (0, r.jsx)(C.A, {
                                                name: e,
                                                variant: "dark",
                                              }),
                                            },
                                            e
                                          )
                                        ),
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          }),
                        ],
                      },
                      "".concat(e.title, "-").concat(i)
                    )
                  ),
                }),
              }),
            ],
          }),
        });
      }
      var I = t(2391),
        P = t(3740),
        D = t(2518),
        F = t(3786);
      let M = l.P.create(n.a),
        R = l.P.create(x.D);
      function H() {
        let e = (0, a.useRef)(null),
          i = (0, b.W)(e, { once: !1, margin: "-100px" }),
          [t, l] = (0, a.useState)("All"),
          [d, h] = (0, a.useState)(3),
          m = (0, a.useMemo)(
            () =>
              "Games" === t ? c.jA.filter((e) => "Games" === e.tag) : c.jA,
            [t]
          );
        return (0, r.jsx)(n.a, {
          as: "section",
          id: "projects",
          ref: e,
          py: 20,
          px: { base: 4, sm: 6, lg: 8 },
          children: (0, r.jsxs)(u.m, {
            maxW: "8xl",
            children: [
              (0, r.jsx)(R, {
                initial: { opacity: 0, y: 30 },
                animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                transition: { duration: 0.6 },
                fontSize: { base: "3xl", sm: "4xl", lg: "5xl" },
                fontWeight: "medium",
                textAlign: "left",
                mb: 16,
                color: "white",
                children: "Personal Projects",
              }),
              (0, r.jsx)(S.z, {
                spacing: 3,
                mb: 8,
                //children: ["All", "Games"].map((e) =>
                children: [].map((e) =>
                  (0, r.jsx)(
                    s.$,
                    {
                      size: "sm",
                      variant: t === e ? "solid" : "outline",
                      bg: t === e ? "whiteAlpha.300" : "transparent",
                      borderColor: "whiteAlpha.300",
                      color: "gray.200",
                      _hover: {
                        bg: t === e ? "whiteAlpha.400" : "whiteAlpha.200",
                      },
                      onClick: () => {
                        l(e), h(3);
                      },
                      children: e,
                    },
                    e
                  )
                ),
              }),
              (0, r.jsx)(I.r, {
                columns: { base: 1, md: 2, lg: 3 },
                spacing: 8,
                children: m
                  .slice(0, d)
                  .map((e, i) =>
                    (0, r.jsx)(
                      M,
                      {
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        viewport: { amount: 0.3, once: !1 },
                        transition: { duration: 0.4, delay: 0.05 * i },
                        bg: "whiteAlpha.100",
                        border: "1px solid",
                        borderColor: "whiteAlpha.200",
                        borderRadius: "xl",
                        p: { base: 6, md: 8 },
                        backdropFilter: "blur(6px)",
                        h: "full",
                        children: (0, r.jsxs)(n.a, {
                          display: "flex",
                          flexDirection: "column",
                          h: "full",
                          children: [
                            (0, r.jsx)(x.D, {
                              size: "md",
                              color: "white",
                              mb: 2,
                              children: e.title,
                            }),
                            e.visibility &&
                              (0, r.jsx)(n.a, {
                                as: "span",
                                display: "inline-block",
                                px: 3,
                                py: 1,
                                mb: 4,
                                bg: "whiteAlpha.200",
                                border: "1px solid",
                                borderColor: "whiteAlpha.300",
                                borderRadius: "full",
                                color: "gray.200",
                                fontSize: "xx-small",
                                fontWeight: "medium",
                                w: "fit-content",
                                alignSelf: "flex-start",
                                children: e.visibility,
                              }),
                            (0, r.jsx)(p.E, {
                              color: "gray.300",
                              mb: 6,
                              children: e.description,
                            }),
                            (0, r.jsxs)(n.a, {
                              mt: "auto",
                              children: [
                                (0, r.jsxs)(S.z, {
                                  spacing: 3,
                                  mb: 4,
                                  children: [
                                    e.github &&
                                      (0, r.jsx)(s.$, {
                                        as: E.N,
                                        href: e.github,
                                        isExternal: !0,
                                        leftIcon: (0, r.jsx)(P.I, { as: F.A }),
                                        bg: "black",
                                        _hover: { bg: "blackAlpha.800" },
                                        color: "white",
                                        fontWeight: "medium",
                                        size: "sm",
                                        children: "GitHub",
                                      }),
                                    e.demo &&
                                      (0, r.jsx)(s.$, {
                                        as: E.N,
                                        href: e.demo,
                                        isExternal: !0,
                                        leftIcon: (0, r.jsx)(P.I, { as: F.A }),
                                        variant: "outline",
                                        borderColor: "whiteAlpha.300",
                                        color: "gray.200",
                                        _hover: { bg: "whiteAlpha.200" },
                                        fontWeight: "medium",
                                        size: "sm",
                                        children: "Demo",
                                      }),
                                  ],
                                }),
                                e.stack &&
                                  e.stack.length > 0 &&
                                  (0, r.jsx)(D.B, {
                                    spacing: 2,
                                    children: e.stack.map((e) =>
                                      (0, r.jsx)(
                                        D.Q,
                                        {
                                          children: (0, r.jsx)(n.a, {
                                            px: 2.5,
                                            py: 1,
                                            bg: "whiteAlpha.100",
                                            border: "1px solid",
                                            borderColor: "whiteAlpha.200",
                                            borderRadius: "full",
                                            color: "gray.300",
                                            fontSize: "xx-small",
                                            children: e,
                                          }),
                                        },
                                        e
                                      )
                                    ),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      },
                      e.title
                    )
                  ),
              }),
              (0, r.jsx)(o.s, {
                justify: "center",
                mt: 10,
                children:
                  d < m.length
                    ? (0, r.jsx)(s.$, {
                        onClick: () => h((e) => e + 3),
                        variant: "outline",
                        borderColor: "whiteAlpha.300",
                        color: "gray.200",
                        _hover: { bg: "whiteAlpha.200" },
                        size: "sm",
                        children: "Show more",
                      })
                    : m.length > 3
                    ? (0, r.jsx)(s.$, {
                        onClick: () => h(3),
                        variant: "outline",
                        borderColor: "whiteAlpha.300",
                        color: "gray.200",
                        _hover: { bg: "whiteAlpha.200" },
                        size: "sm",
                        children: "Show less",
                      })
                    : null,
              }),
            ],
          }),
        });
      }
      var L = t(5518),
        N = t(1118),
        O = t(5812),
        Q = t(5936),
        q = t(6418),
        G = t(3636),
        V = t(8254),
        $ = t(9788),
        B = t(1688),
        J = t(8625),
        Y = t(3677),
        X = t(4516);
      let K = l.P.create(n.a),
        U = l.P.create(x.D),
        Z = l.P.create(s.$);
      function ee() {
        let e = (0, a.useRef)(null),
          i = (0, b.W)(e, { once: !1, margin: "-100px" }),
          [t, l] = (0, a.useState)({ name: "", email: "", message: "" }),
          [o, s] = (0, a.useState)(!1),
          [c, d] = (0, a.useState)("idle"),
          [h, x] = (0, a.useState)(""),
          // g = async (e) => {
          //   e.preventDefault(), s(!0), d("idle"), x("");
          //   try {
          //     let e = {
          //       from_name: t.name,
          //       from_email: t.email,
          //       message: t.message,
          //       to_email: "work@hugobesnard.com",
          //     };
          //     await L.Ay.send(
          //       "service_8m2cwji",
          //       "template_kdrdog4",
          //       e,
          //       "nynJX5Zb4Klk734j5"
          //     ),
          //       d("success"),
          //       l({ name: "", email: "", message: "" });
          //   } catch (e) {
          //     console.error("Failed to send email:", e),
          //       d("error"),
          //       x("Failed to send message. Please try again.");
          //   } finally {
          //     s(!1);
          //   }
          // },
          g = async (e) => {
            e.preventDefault();
            s(!0);
            d("idle");
            x("");

            try {
              const response = await fetch("https://formspree.io/f/mjkvnwqz", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  name: t.name,
                  email: t.email,
                  message: t.message
                }),
              });

              if (!response.ok) throw new Error("Form submission failed");

              d("success");
              l({ name: "", email: "", message: "" });

            } catch (err) {
              console.error("Failed to send message:", err);
              d("error");
              x("Failed to send message. Please try again.");
            } finally {
              s(!1);
            }
          },
          y = (e) => {
            l((i) => ({ ...i, [e.target.name]: e.target.value }));
          };
        return (0, r.jsx)(n.a, {
          as: "section",
          id: "contact",
          ref: e,
          py: 20,
          px: { base: 4, sm: 6, lg: 8 },
          children: (0, r.jsx)(u.m, {
            maxW: "8xl",
            children: (0, r.jsxs)(N.x, {
              templateColumns: { base: "1fr", lg: "1fr 1fr" },
              gap: { base: 10, lg: 16 },
              alignItems: "start",
              children: [
                (0, r.jsx)(O.E, {
                  children: (0, r.jsxs)(m.T, {
                    align: "flex-start",
                    spacing: 6,
                    children: [
                      (0, r.jsx)(p.E, {
                        fontSize: "xs",
                        color: "gray.400",
                        textTransform: "uppercase",
                        letterSpacing: "wider",
                        fontWeight: "medium",
                        children: "Contact",
                      }),
                      (0, r.jsx)(U, {
                        initial: { opacity: 0, y: 30 },
                        animate: i
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 30 },
                        transition: { duration: 0.6 },
                        fontSize: { base: "3xl", md: "5xl", lg: "6xl" },
                        fontWeight: "bold",
                        color: "white",
                        children: "Get In Touch",
                      }),
                      (0, r.jsx)(p.E, {
                        color: "gray.300",
                        maxW: "2xl",
                        children:
                          "I'm always looking to learn and collaborate on new ideas. Let's connect!",
                      }),
                      // (0, r.jsx)(m.T, {
                      //   spacing: 6,
                      //   align: "flex-start",
                      //   children: (0, r.jsxs)(S.z, {
                      //     spacing: 4,
                      //     children: [
                      //       (0, r.jsx)(Q.j, {
                      //         size: "40px",
                      //         bg: "whiteAlpha.100",
                      //         border: "1px solid",
                      //         borderColor: "whiteAlpha.200",
                      //         children: (0, r.jsx)(P.I, {
                      //           as: X.A,
                      //           color: "gray.200",
                      //         }),
                      //       }),
                      //       (0, r.jsxs)(m.T, {
                      //         spacing: 0,
                      //         align: "flex-start",
                      //         children: [
                      //           (0, r.jsx)(p.E, {
                      //             color: "gray.400",
                      //             fontWeight: "medium",
                      //             children: "Location",
                      //           }),
                      //           (0, r.jsx)(p.E, {
                      //             color: "gray.300",
                      //             children: "London, UK",
                      //           }),
                      //         ],
                      //       }),
                      //     ],
                      //   }),
                      // }),
                    ],
                  }),
                }),
                (0, r.jsx)(O.E, {
                  children: (0, r.jsx)(K, {
                    initial: { opacity: 0, y: 30 },
                    animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                    transition: { duration: 0.6, delay: 0.15 },
                    children: (0, r.jsx)(n.a, {
                      bg: "whiteAlpha.100",
                      borderWidth: "1px",
                      borderColor: "whiteAlpha.200",
                      borderRadius: "xl",
                      p: { base: 6, md: 8 },
                      boxShadow: "xl",
                      backdropFilter: "blur(6px)",
                      children: (0, r.jsx)("form", {
                        onSubmit: g,
                        acceptCharset: "UTF-8",
                        children: (0, r.jsxs)(m.T, {
                          spacing: 6,
                          children: [
                            (0, r.jsx)(q.MJ, {
                              children: (0, r.jsx)(G.p, {
                                type: "text",
                                name: "name",
                                placeholder: "Name",
                                value: t.name,
                                onChange: y,
                                required: !0,
                                bg: "blackAlpha.400",
                                borderColor: "whiteAlpha.300",
                                color: "white",
                                _placeholder: { color: "gray.400" },
                                _focus: { borderColor: "brand.500" },
                              }),
                            }),
                            (0, r.jsx)(q.MJ, {
                              children: (0, r.jsx)(G.p, {
                                type: "email",
                                name: "email",
                                placeholder: "Email",
                                value: t.email,
                                onChange: y,
                                required: !0,
                                bg: "blackAlpha.400",
                                borderColor: "whiteAlpha.300",
                                color: "white",
                                _placeholder: { color: "gray.400" },
                                _focus: { borderColor: "brand.500" },
                              }),
                            }),
                            (0, r.jsx)(q.MJ, {
                              children: (0, r.jsx)(V.T, {
                                name: "message",
                                placeholder: "Your message...",
                                value: t.message,
                                onChange: y,
                                required: !0,
                                rows: 6,
                                bg: "blackAlpha.400",
                                borderColor: "whiteAlpha.300",
                                color: "white",
                                _placeholder: { color: "gray.400" },
                                _focus: { borderColor: "brand.500" },
                                resize: "none",
                              }),
                            }),
                            "success" === c &&
                              (0, r.jsxs)($.F, {
                                status: "success",
                                borderRadius: "md",
                                children: [
                                  (0, r.jsx)(B._, {}),
                                  (0, r.jsxs)(n.a, {
                                    children: [
                                      (0, r.jsx)(J.X, { children: "Success!" }),
                                      (0, r.jsx)(Y.T, {
                                        children:
                                          "Your message has been sent successfully. I'll get back to you soon!",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            "error" === c &&
                              (0, r.jsxs)($.F, {
                                status: "error",
                                borderRadius: "md",
                                children: [
                                  (0, r.jsx)(B._, {}),
                                  (0, r.jsxs)(n.a, {
                                    children: [
                                      (0, r.jsx)(J.X, { children: "Error!" }),
                                      (0, r.jsx)(Y.T, { children: h }),
                                    ],
                                  }),
                                ],
                              }),
                            (0, r.jsx)(Z, {
                              type: "submit",
                              whileHover: { scale: 1.02 },
                              whileTap: { scale: 0.98 },
                              w: "full",
                              bg: "black",
                              _hover: { bg: "blackAlpha.800" },
                              color: "white",
                              fontWeight: "medium",
                              py: 3,
                              isLoading: o,
                              loadingText: "Sending...",
                              isDisabled: o,
                              children: "Send message",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            }),
          }),
        });
      }
      var ei = t(9376),
        et = t(224),
        er = t(3904);
      let ea = l.P.create(n.a),
        en = l.P.create(p.E);
      function el() {
        // let [e, i] = (0, a.useState)(c.cl[0]),
        //   [t, l] = (0, a.useState)(0);
        // return (
        //   (0, a.useEffect)(() => {
        //     i(
        //       (() => {
        //         let e = new Date(),
        //           i =
        //             Math.floor(
        //               (e.getTime() -
        //                 new Date(e.getFullYear(), 0, 0).getTime()) /
        //                 864e5
        //             ) % c.cl.length;
        //         return l(i), c.cl[i];
        //       })()
        //     );
        //   }, []),
        //   (0, r.jsx)(n.a, {
        //     as: "section",
        //     py: 16,
        //     px: { base: 4, sm: 6, lg: 8 },
        //     children: (0, r.jsx)(u.m, {
        //       maxW: "4xl",
        //       textAlign: "center",
        //       children: (0, r.jsx)(ea, {
        //         initial: { opacity: 0, y: 30 },
        //         whileInView: { opacity: 1, y: 0 },
        //         transition: { duration: 0.8 },
        //         viewport: { once: !0 },
        //         children: (0, r.jsxs)(m.T, {
        //           spacing: 6,
        //           children: [
        //             (0, r.jsx)(n.a, {
        //               color: "gray.400",
        //               children: (0, r.jsx)(et.A, { size: 32 }),
        //             }),
        //             (0, r.jsxs)(en, {
        //               fontSize: { base: "lg", md: "xl" },
        //               fontStyle: "italic",
        //               color: "gray.200",
        //               lineHeight: "relaxed",
        //               maxW: "3xl",
        //               initial: { opacity: 0 },
        //               whileInView: { opacity: 1 },
        //               transition: { duration: 0.8, delay: 0.2 },
        //               viewport: { once: !0 },
        //               children: ['"', e.text, '"'],
        //             }),
        //             (0, r.jsx)(en, {
        //               fontSize: "md",
        //               color: "gray.400",
        //               fontWeight: "medium",
        //               initial: { opacity: 0 },
        //               whileInView: { opacity: 1 },
        //               transition: { duration: 0.8, delay: 0.4 },
        //               viewport: { once: !0 },
        //               children: e.author,
        //             }),
        //             (0, r.jsxs)(n.a, {
        //               textAlign: "center",
        //               role: "group",
        //               children: [
        //                 (0, r.jsx)(p.E, {
        //                   fontSize: "xs",
        //                   color: "gray.500",
        //                   textTransform: "uppercase",
        //                   letterSpacing: "wider",
        //                   fontWeight: "medium",
        //                   mb: 2,
        //                   children: "Quote of the Day",
        //                 }),
        //                 (0, r.jsx)(ei.K, {
        //                   "aria-label": "Refresh quote",
        //                   icon: (0, r.jsx)(er.A, { size: 12 }),
        //                   size: "xs",
        //                   variant: "ghost",
        //                   color: "gray.500",
        //                   _hover: { color: "gray.300" },
        //                   onClick: () => {
        //                     let e = (t + 1) % c.cl.length;
        //                     l(e), i(c.cl[e]);
        //                   },
        //                   transition: "colors 0.2s",
        //                 }),
        //                 (0, r.jsx)(p.E, {
        //                   mt: 2,
        //                   fontSize: "xx-small",
        //                   color: "transparent",
        //                   _groupHover: { color: "gray.500" },
        //                   transition: "color 0.2s ease",
        //                   children: "Have you found the easter egg?",
        //                 }),
        //               ],
        //             }),
        //           ],
        //         }),
        //       }),
        //     }),
        //   })
        // );
      }
      function eo(e) {
        let { onToggleBackground: i } = e,
          t = new Date().getFullYear();
        return (0, r.jsx)(n.a, {
          as: "footer",
          py: 8,
          px: { base: 4, sm: 6, lg: 8 },
          children: (0, r.jsx)(u.m, {
            maxW: "6xl",
            children: (0, r.jsxs)(p.E, {
              textAlign: "center",
              color: "gray.400",
              fontFamily: "mono",
              fontSize: "sm",
              children: [
                (0, r.jsx)(p.E, {
                  as: "span",
                  cursor: i ? "pointer" : "default",
                  _hover: i
                    ? {
                        color: "gray.300",
                        textShadow: "0 0 8px rgba(255, 255, 255, 0.3)",
                      }
                    : {},
                  _active: i ? { transform: "scale(0.95)" } : {},
                  onClick: i,
                  transition: "all 0.2s ease",
                  userSelect: "none",
                  children: "\xa9",
                }),
                " ",
                t,
                " Cian Goon",
              ],
            }),
          }),
        });
      }
      var es = t(2947),
        ec = t(9099),
        ed = t(2894),
        eh = t(7434);
      let ex = l.P.create(x.D),
        ep = l.P.create(p.E);
      function eu() {
        return (0, r.jsx)(n.a, {
          as: "section",
          id: "about",
          py: 16,
          px: { base: 4, sm: 6, lg: 8 },
          children: (0, r.jsx)(u.m, {
            maxW: "8xl",
            children: (0, r.jsxs)(m.T, {
              spacing: 8,
              align: "flex-start",
              children: [
                (0, r.jsx)(ex, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, ease: "easeOut" },
                  viewport: { once: !1 },
                  fontSize: { base: "3xl", sm: "4xl", lg: "5xl" },
                  fontWeight: "medium",
                  color: "white",
                  children: "About Me",
                }),
                (0, r.jsx)(ep, {
                  initial: { opacity: 0, y: 30 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
                  viewport: { once: !1 },
                  fontSize: { base: "md", sm: "lg", lg: "xl" },
                  color: "gray.300",
                  maxW: "7xl",
                  lineHeight: "relaxed",
                  children:
                    'Hi, I’m Hugo. I’m an Electronics Engineer with 3+ years of experience developing audio systems for commercial use and personal innovation. My expertise includes embedded systems, hardware design, digital signal processing and acoustic analysis. I’m always seeking to expand my knowledge and explore new professional opportunities. Let’s connect!',
                }),
                (0, r.jsxs)(o.s, {
                  gap: 6,
                  children: [
                    (0, r.jsx)(P.I, {
                      as: ec.A,
                      boxSize: 6,
                      color: "gray.400",
                      _hover: { color: "white" },
                      transition: "colors 0.2s",
                      cursor: "pointer",
                      onClick: () =>
                        window.open("https://github.com/nablum", "_blank"),
                      "aria-label": "GitHub profile",
                    }),
                    (0, r.jsx)(P.I, {
                      as: ed.A,
                      boxSize: 6,
                      color: "gray.400",
                      _hover: { color: "white" },
                      transition: "colors 0.2s",
                      cursor: "pointer",
                      onClick: () =>
                        window.open(
                          "https://www.linkedin.com/in/hugo-besnard/",
                          "_blank"
                        ),
                      "aria-label": "LinkedIn profile",
                    }),
                    // (0, r.jsx)(P.I, {
                    //   as: eh.A,
                    //   boxSize: 6,
                    //   color: "gray.400",
                    //   _hover: { color: "white" },
                    //   transition: "colors 0.2s",
                    //   cursor: "pointer",
                    //   onClick: () => window.open("/resume.pdf", "_blank"),
                    //   "aria-label": "Resume",
                    // }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      let em = l.P.create(n.a),
        eg = l.P.create(x.D);
      function ey(e) {
        let { title: i, items: t } = e;
        return (0, r.jsxs)(N.x, {
          templateColumns: { base: "1fr", md: "220px 1fr" },
          gap: 6,
          w: "full",
          children: [
            (0, r.jsx)(O.E, {
              children: (0, r.jsx)(p.E, {
                fontSize: { base: "xl", md: "2xl" },
                color: "gray.300",
                fontWeight: "medium",
                children: i,
              }),
            }),
            (0, r.jsx)(O.E, {
              children: (0, r.jsx)(D.B, {
                spacing: 4,
                children: t.map((e) =>
                  (0, r.jsx)(
                    D.Q,
                    {
                      children: (0, r.jsx)(em, {
                        whileHover: { scale: 1.04, y: -1 },
                        whileTap: { scale: 0.98 },
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        },
                        px: 3.5,
                        py: 2,
                        bg: "whiteAlpha.100",
                        border: "1px solid",
                        borderColor: "whiteAlpha.200",
                        borderRadius: "full",
                        backdropFilter: "blur(6px)",
                        _hover: {
                          bg: "whiteAlpha.200",
                          borderColor: "whiteAlpha.300",
                        },
                        children: (0, r.jsxs)(S.z, {
                          spacing: 2,
                          align: "center",
                          children: [
                            (0, r.jsx)(n.a, {
                              boxSize: "18px",
                              children: (0, r.jsx)(C.A, {
                                name: e.name,
                                variant: "dark",
                              }),
                            }),
                            (0, r.jsx)(p.E, {
                              color: "gray.200",
                              fontSize: "sm",
                              children: e.label,
                            }),
                          ],
                        }),
                      }),
                    },
                    e.name
                  )
                ),
              }),
            }),
          ],
        });
      }
      function ef() {
        let e = (0, a.useRef)(null),
          i = (0, b.W)(e, { once: !1, margin: "-100px" });
        return (0, r.jsx)(n.a, {
          as: "section",
          id: "stack",
          ref: e,
          py: 20,
          px: { base: 4, sm: 6, lg: 8 },
          children: (0, r.jsx)(u.m, {
            maxW: "8xl",
            children: (0, r.jsxs)(em, {
              initial: { opacity: 0, y: 60 },
              animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 },
              transition: { duration: 0.8, ease: "easeOut" },
              children: [
                (0, r.jsx)(eg, {
                  initial: { opacity: 0, y: 30 },
                  animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 },
                  transition: { duration: 0.6 },
                  fontSize: { base: "3xl", sm: "4xl", lg: "5xl" },
                  fontWeight: "medium",
                  textAlign: "left",
                  mb: 16,
                  color: "white",
                  children: "My Stack",
                }),
                (0, r.jsxs)(m.T, {
                  spacing: 12,
                  align: "stretch",
                  children: [
                    // (0, r.jsx)(em, {
                    //   initial: { opacity: 0, y: 20 },
                    //   animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    //   transition: { duration: 0.5 },
                    //   children: (0, r.jsx)(ey, {
                    //     title: "Frontend",
                    //     items: c.BQ,
                    //   }),
                    // }),
                    (0, r.jsx)(em, {
                      initial: { opacity: 0, y: 20 },
                      animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                      transition: { duration: 0.5, delay: 0.1 },
                      children: (0, r.jsx)(ey, {
                        title: "Backend",
                        items: c.th,
                      }),
                    }),
                    // (0, r.jsx)(em, {
                    //   initial: { opacity: 0, y: 20 },
                    //   animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                    //   transition: { duration: 0.5, delay: 0.2 },
                    //   children: (0, r.jsx)(ey, {
                    //     title: "Database",
                    //     items: c.cX,
                    //   }),
                    // }),
                    (0, r.jsx)(em, {
                      initial: { opacity: 0, y: 20 },
                      animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                      transition: { duration: 0.5, delay: 0.3 },
                      children: (0, r.jsx)(ey, { title: "Tools", items: c.It }),
                    }),
                    (0, r.jsx)(em, {
                       initial: { opacity: 0, y: 20 },
                       animate: i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 },
                       transition: { duration: 0.5, delay: 0.2 },
                       children: (0, r.jsx)(ey, {
                         title: "Plaform",
                         items: c.cX,
                       }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      }
      var ej = t(760);
      let eb = l.P.create(n.a),
        ew = l.P.create(p.E);
      function ev(e) {
        let { onComplete: i, durationMs: t = 2200, finalTweenMs: n = 400 } = e,
          [l, o] = (0, a.useState)(0),
          [s, d] = (0, a.useState)(""),
          h = (0, a.useRef)(null),
          x = (0, a.useRef)(null),
          u = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(() => {
            d(c.pf[Math.floor(Math.random() * c.pf.length)] || "Loading…");
          }, []),
          (0, a.useEffect)(() => {
            let e = performance.now(),
              r = !1,
              a = () => {
                null != h.current && cancelAnimationFrame(h.current),
                  (h.current = null);
              },
              l = () => {
                null != x.current && cancelAnimationFrame(x.current),
                  (x.current = null);
              },
              s = () => {
                (r = !0), a();
                let e = performance.now(),
                  t = (r) => {
                    let a = Math.min(1, (r - e) / n);
                    o(Math.min(100, 98 + Math.round(2 * a))),
                      a < 1
                        ? (x.current = requestAnimationFrame(t))
                        : (u.current = setTimeout(() => i(), 200));
                  };
                x.current = requestAnimationFrame(t);
              },
              c = (i) => {
                let a = Math.min(1, (i - e) / t),
                  n = Math.round(
                    100 * (1 === a ? 1 : 1 - Math.pow(2, -10 * a))
                  );
                if (!r && n >= 98) {
                  o(98), s();
                  return;
                }
                r ||
                  (o(Math.min(97, n)), (h.current = requestAnimationFrame(c)));
              };
            return (
              (h.current = requestAnimationFrame(c)),
              () => {
                a(), l(), u.current && clearTimeout(u.current);
              }
            );
          }, [t, n, i]),
          (0, r.jsx)(ej.N, {
            children: (0, r.jsx)(
              eb,
              {
                initial: { opacity: 1 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                transition: { duration: 0.4, ease: "easeOut" },
                position: "fixed",
                inset: 0,
                bg: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 1e3,
                children: (0, r.jsxs)(m.T, {
                  spacing: 2,
                  children: [
                    (0, r.jsxs)(ew, {
                      fontSize: { base: "6xl", sm: "7xl" },
                      fontWeight: "bold",
                      color: "white",
                      initial: { scale: 0.98 },
                      animate: { scale: 1 },
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      },
                      children: [l, "%"],
                    }),
                    (0, r.jsx)(p.E, {
                      color: "gray.400",
                      fontSize: "sm",
                      //children: s,
                      children: [],
                    }),
                  ],
                }),
              },
              "preloader"
            ),
          })
        );
      }
      let eA = l.P.create(n.a);
      function eS() {
        let [e, i] = (0, a.useState)("waves"),
          [t, l] = (0, a.useState)(!1);
        return (0, r.jsxs)(n.a, {
          minH: "100vh",
          bg: "black",
          color: "white",
          position: "relative",
          children: [
            !t &&
              (0, r.jsx)(ev, {
                onComplete: () => l(!0),
                durationMs: 3e3,
                finalTweenMs: 600,
              }),
            (0, r.jsx)(ej.N, {
              children:
                t &&
                (0, r.jsxs)(
                  eA,
                  {
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.4 },
                    children: [
                      (0, r.jsx)(es.Q, { effect: e }),
                      (0, r.jsxs)(n.a, {
                        position: "relative",
                        zIndex: 10,
                        children: [
                          (0, r.jsx)(h, {}),
                          (0, r.jsx)(j, {}),
                          (0, r.jsx)(eu, {}),
                          (0, r.jsx)(W, {}),
                          (0, r.jsx)(H, {}),
                          (0, r.jsx)(ef, {}),
                          (0, r.jsx)(ee, {}),
                          (0, r.jsx)(el, {}),
                          (0, r.jsx)(eo, {
                            onToggleBackground: () => {
                              i((e) => ("waves" === e ? "birds" : "waves"));
                            },
                          }),
                        ],
                      }),
                    ],
                  },
                  "page"
                ),
            }),
          ],
        });
      }
    },
  },
  (e) => {
    var i = (i) => e((e.s = i));
    e.O(0, [521, 592, 414, 214, 164, 77, 441, 684, 358], () => i(61)),
      (_N_E = e.O());
  },
]);
