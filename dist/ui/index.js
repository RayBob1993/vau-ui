import { defineComponent as m, createBlock as f, openBlock as i, unref as l, normalizeProps as _, guardReactiveProps as V, withCtx as r, renderSlot as c, mergeModels as T, useModel as P, mergeProps as x, toHandlers as U, createPropsRestProxy as fe, createVNode as h, createTextVNode as z, toDisplayString as C, createElementBlock as p, normalizeClass as I, createCommentVNode as w, useSlots as S, computed as g, createElementVNode as y, Fragment as Ie, shallowRef as Te, onMounted as pe, onBeforeUnmount as Se, watch as ae, useTemplateRef as se, Teleport as Ke, Transition as ve, withDirectives as le, vShow as ie, provide as Me, createSlots as ke, inject as Je, ref as J, useId as Qe, reactive as Ze, onUnmounted as et, renderList as tt, h as re, render as G } from "vue";
import { Button as ze, Accordion as R, isUndefined as ot, isNumber as E, useToggle as Y, Modal as M, Layout as Be, Grid as he, Scrollbar as st, Tag as Ae, Text as nt, Form as N, Checkbox as Q, Input as k, InputCode as Ce, InputNumber as K, INPUT_NUMBER_ACTIONS as we, INPUT_NUMBER_VALUE_DEFAULT as at, InputPassword as lt, Radio as Z, Select as F, Switch as me, ConfigProvider as it, Divider as xe, Flex as Le, Menu as Oe } from "@vau/core";
const rt = /* @__PURE__ */ m({
  __name: "VButton",
  props: {
    loading: { type: Boolean },
    disabled: { type: Boolean },
    plain: { type: Boolean },
    wide: { type: Boolean },
    type: { default: "button" },
    theme: {},
    size: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(ze).Root, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ut = /* @__PURE__ */ m({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(ze).Group, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ct = {
  install(e) {
    e.component("VButton", rt);
  }
}, Hs = {
  install(e) {
    e.component("VButtonGroup", ut);
  }
}, dt = /* @__PURE__ */ m({
  __name: "VAccordion",
  props: /* @__PURE__ */ T({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = P(e, "modelValue");
    return (a, u) => (i(), f(l(R).Root, x(o, {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d)
    }, U(s)), {
      default: r(() => [
        c(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), mt = /* @__PURE__ */ m({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = fe(e, ["title"]);
    return (o, s) => (i(), f(l(R).Item, _(V(t)), {
      default: r(({ isActive: n }) => [
        h(l(R).Header, null, {
          default: r(() => [
            h(l(R).Trigger, null, {
              default: r(() => [
                h(l(R).Title, null, {
                  default: r(() => [
                    c(o.$slots, "title", {}, () => [
                      z(C(e.title), 1)
                    ])
                  ]),
                  _: 3
                })
              ]),
              _: 3
            })
          ]),
          _: 3
        }),
        h(l(R).Body, null, {
          default: r(() => [
            c(o.$slots, "default", { isActive: n })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), ft = {
  install(e) {
    e.component("VAccordion", dt), e.component("VAccordionItem", mt);
  }
}, pt = {
  key: 0,
  class: "v-avatar__label"
}, vt = /* @__PURE__ */ m({
  __name: "VAvatar",
  props: {
    src: {},
    fallback: {},
    circle: { type: Boolean },
    label: {},
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: I(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (i(), p("div", pt, C(e.label), 1)) : w("", !0)
    ], 2));
  }
}), ht = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, _t = {}, Vt = { class: "v-avatar-group" };
function gt(e, t) {
  return i(), p("div", Vt, [
    c(e.$slots, "default")
  ]);
}
const yt = /* @__PURE__ */ ht(_t, [["render", gt]]), bt = {
  install(e) {
    e.component("VAvatar", vt);
  }
}, $t = {
  install(e) {
    e.component("VAvatarGroup", yt);
  }
}, Tt = { class: "v-alert__content" }, Bt = {
  key: 0,
  class: "v-alert__title"
}, Ct = {
  key: 1,
  class: "v-alert__description"
}, wt = /* @__PURE__ */ m({
  __name: "VAlert",
  props: {
    title: {},
    description: {},
    showIcon: { type: Boolean },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = S(), s = g(() => !!t.title || !!o?.title), n = g(() => !!t.description || !!o?.description);
    return (a, u) => (i(), p("div", {
      class: I(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      y("div", Tt, [
        o?.default ? c(a.$slots, "default", { key: 0 }) : (i(), p(Ie, { key: 1 }, [
          s.value ? (i(), p("div", Bt, [
            c(a.$slots, "title", {}, () => [
              z(C(e.title), 1)
            ])
          ])) : w("", !0),
          n.value ? (i(), p("div", Ct, [
            c(a.$slots, "description", {}, () => [
              z(C(e.description), 1)
            ])
          ])) : w("", !0)
        ], 64))
      ])
    ], 2));
  }
}), xt = {
  install(e) {
    e.component("VAlert", wt);
  }
}, Re = 0, Ee = 0, Pt = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class ne {
  #e;
  #o;
  #s;
  #a;
  #n;
  #l;
  #m;
  #i;
  #r;
  #t;
  #u;
  #c;
  constructor(t, o) {
    this.#e = this.#V(o), this.#o = t, this.#s = o.innerWrapper, this.#a = o.container, this.#n = 0, this.#l = 1, this.#m = !1, this.#i = !1, this.#r = !1, this.#u = void 0, this.#c = void 0, this.#t = {
      translateY: 0,
      maxTranslateY: 0,
      offsetTop: 0,
      lastOffsetTop: 0,
      offsetBottom: 0,
      lastOffsetBottom: 0,
      sidebarHeight: 0,
      sidebarWidth: 0,
      containerTop: 0,
      containerHeight: 0,
      viewportHeight: 0,
      viewportTop: 0,
      lastViewportTop: 0,
      viewportBottom: 0,
      containerBottom: 0,
      sidebarLeft: 0,
      viewportLeft: 0
    }, this.#g();
  }
  #V(t) {
    return {
      ...Pt,
      ...t
    };
  }
  #g() {
    this.#s = this.#e.innerWrapper, this.#a = this.#e.container, this.#h(), this.#p(), this.#y(), this.#m = !0;
  }
  #y() {
    window.addEventListener("resize", (t) => this.#d(t), { passive: !0, capture: !1 }), window.addEventListener("scroll", (t) => this.#d(t), { passive: !0, capture: !1 }), this.#u = this.#v(this.#a, () => {
      this.updateSticky();
    }), this.#c = this.#v(this.#s, () => {
      this.updateSticky();
    });
  }
  #v(t, o) {
    const s = new ResizeObserver((n) => {
      n.length && n.forEach(() => {
        o(n, s);
      });
    });
    return s.observe(t), s;
  }
  #d(t) {
    this.updateSticky(t);
  }
  #h() {
    const t = this.#t;
    t.containerTop = this.#a.offsetTop, t.containerHeight = this.#a.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.#s.offsetHeight, t.sidebarWidth = this.#o.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this.#f();
  }
  #f() {
    const t = this.#t;
    t.sidebarLeft = this.#o.offsetLeft, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.offsetTop = this.#e.offsetTop || 0, t.offsetBottom = this.#e.offsetBottom || 0, this.#n === 1 ? t.offsetTop < t.lastOffsetTop && (t.translateY += t.lastOffsetTop - t.offsetTop, this.#i = !0) : this.#n === 2 && t.offsetBottom < t.lastOffsetBottom && (t.translateY += t.lastOffsetBottom - t.offsetBottom, this.#i = !0), t.lastOffsetTop = t.offsetTop, t.lastOffsetBottom = t.offsetBottom;
  }
  #_() {
    const o = this.#t.lastOffsetTop;
    return this.#t.sidebarHeight + o < this.#t.viewportHeight;
  }
  #b() {
    const { lastViewportTop: t, viewportTop: o } = this.#t;
    if (t === o)
      return;
    const s = this.#l === 1 ? Math.min : Math.max;
    o === s(o, t) && (this.#l = this.#l === 1 ? 0 : 1);
  }
  #$() {
    this.#f();
    const t = this.#t, o = t.viewportTop + t.offsetTop;
    let s;
    o <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, s = 0) : s = this.#l === 0 ? this.#B() : this.#T();
    const n = Math.max(0, t.translateY), a = Math.min(t.containerHeight, n);
    return t.translateY = Math.round(a), t.lastViewportTop = t.viewportTop, s;
  }
  #T() {
    const t = this.#t, o = t.sidebarHeight + t.containerTop, s = t.viewportTop + t.offsetTop, n = t.viewportBottom - t.offsetBottom;
    let a = this.#n;
    return this.#_() ? t.sidebarHeight + s >= t.containerBottom ? (t.translateY = t.containerBottom - o, a = 3) : s >= t.containerTop && (t.translateY = s - t.containerTop, a = 1) : t.containerBottom <= n ? (t.translateY = t.containerBottom - o, a = 3) : o + t.translateY <= n ? (t.translateY = n - o, a = 2) : t.containerTop + t.translateY <= s && t.translateY !== 0 && t.maxTranslateY !== t.translateY && (a = 4), a;
  }
  #B() {
    const t = this.#t, o = t.sidebarHeight + t.containerTop, s = t.viewportTop + t.offsetTop, n = t.viewportBottom - t.offsetBottom;
    let a = this.#n;
    return s <= t.translateY + t.containerTop ? (t.translateY = s - t.containerTop, a = 1) : t.containerBottom <= n ? (t.translateY = t.containerBottom - o, a = 3) : this.#_() || t.containerTop <= s && t.translateY !== 0 && t.maxTranslateY !== t.translateY && (a = 4), a;
  }
  #C(t) {
    const o = {
      inner: {},
      outer: {}
    }, s = this.#t;
    switch (t) {
      case 1:
        o.inner = {
          position: "fixed",
          top: s.offsetTop,
          left: s.sidebarLeft - s.viewportLeft,
          width: s.sidebarWidth
        };
        break;
      case 2:
        o.inner = {
          position: "fixed",
          top: "auto",
          left: s.sidebarLeft,
          bottom: s.offsetBottom,
          width: s.sidebarWidth
        };
        break;
      case 3:
      case 4: {
        const n = this.#w(0, s.translateY + "px");
        if (n)
          o.inner = {
            transform: n
          };
        else {
          o.inner = {
            position: "absolute",
            top: s.translateY,
            width: s.sidebarWidth
          };
          break;
        }
      }
    }
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 3:
        o.outer = {
          height: s.sidebarHeight,
          position: "relative"
        };
        break;
    }
    return o.outer = ne.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = ne.extend({
      position: "relative",
      top: "",
      left: "",
      bottom: "",
      width: "",
      transform: ""
    }, o.inner), o;
  }
  #p(t = !1) {
    t = this.#i || t;
    const o = this.#$(), s = this.#C(o);
    function n(a) {
      const u = E(a) ? "px" : "";
      return `${a}${u}`;
    }
    if (this.#n !== o || t) {
      o === 0 ? this.#o.classList.remove(this.#e.affixClass) : this.#o.classList.add(this.#e.affixClass);
      for (const a in s.outer)
        Object.hasOwn(s.outer, a) && (this.#o.style[a] = n(s.outer[a]));
      for (const a in s.inner)
        Object.hasOwn(s.inner, a) && (this.#s.style[a] = n(s.inner[a]));
    } else
      this.#m && (this.#s.style.left = n(s.inner.left));
    this.#n = o;
  }
  #w(t = 0, o = 0, s = 0) {
    return `translate3d(${t}, ${o}, ${s})`;
  }
  updateSticky(t) {
    this.#r || (this.#r = !0, ((o) => {
      requestAnimationFrame(() => {
        o === "scroll" ? (this.#f(), this.#b(), this.#p()) : (this.#h(), this.#p(!0)), this.#r = !1;
      });
    })(t?.type));
  }
  destroy() {
    window.removeEventListener("resize", (t) => this.#d(t), { capture: !1 }), window.removeEventListener("scroll", (t) => this.#d(t), { capture: !1 }), this.#c?.disconnect(), this.#u?.disconnect(), this.#c = void 0, this.#u = void 0, this.#o.classList.remove(this.#e.affixClass), this.#o.removeAttribute("style"), this.#s.removeAttribute("style");
  }
  static extend(t, o) {
    const s = {};
    for (const n in t)
      ot(o[n]) ? s[n] = t[n] : s[n] = o[n];
    return s;
  }
}
function It(e) {
  const t = Te(), o = Te(), s = g(() => E(e.props?.offsetTop) ? e.props.offsetTop : Re), n = g(() => E(e.props?.offsetBottom) ? e.props.offsetBottom : Ee);
  function a() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function u() {
    a(), e.root.value && t.value && e.content.value && (o.value = new ne(e.root.value, {
      offsetTop: s.value,
      offsetBottom: n.value,
      container: t.value,
      innerWrapper: e.content.value
    }));
  }
  function d() {
    o.value?.destroy(), o.value = void 0;
  }
  return pe(() => {
    e.props.disabled || u();
  }), Se(() => {
    d();
  }), ae(() => e.props.disabled, (v) => {
    v ? d() : u();
  }), {};
}
const St = /* @__PURE__ */ m({
  __name: "VAffix",
  props: {
    offsetTop: { default: Re },
    offsetBottom: { default: Ee },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = se("root"), s = se("content");
    return It({
      props: t,
      root: o,
      content: s
    }), (n, a) => (i(), p("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      y("div", {
        ref_key: "content",
        ref: s,
        class: "v-affix__content"
      }, [
        c(n.$slots, "default")
      ], 512)
    ], 512));
  }
}), Mt = {
  install(e) {
    e.component("VAffix", St);
  }
}, kt = { class: "v-breadcrumbs" }, zt = /* @__PURE__ */ m({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (i(), p("nav", kt));
  }
}), At = {
  install(e) {
    e.component("VBreadcrumbs", zt);
  }
};
function Lt(e) {
  return {
    content: g(() => e.props.dot ? "" : E(e.props.value) && E(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const Ot = {
  key: 0,
  class: "v-badge__content"
}, Rt = /* @__PURE__ */ m({
  __name: "VBadge",
  props: {
    dot: { type: Boolean },
    hidden: { type: Boolean },
    max: {},
    value: {},
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = S(), { content: s } = Lt({
      props: t
    }), n = g(() => !t.hidden && !!(s.value || t.dot || o?.content));
    return (a, u) => (i(), p("div", {
      class: I(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      c(a.$slots, "default"),
      n.value ? (i(), p("sup", Ot, [
        c(a.$slots, "content", { value: l(s) }, () => [
          z(C(l(s)), 1)
        ])
      ])) : w("", !0)
    ], 2));
  }
}), Et = {
  install(e) {
    e.component("VBadge", Rt);
  }
}, Dt = { class: "v-collapse" }, Ht = /* @__PURE__ */ m({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (i(), p("div", Dt, [
      c(t.$slots, "default")
    ]));
  }
}), Nt = {
  install(e) {
    e.component("VCollapse", Ht);
  }
};
function Ft(e) {
  const [t, o] = Y();
  function s() {
    o(!0), e?.onOpen?.();
  }
  function n() {
    o(!1), e?.onClose?.();
  }
  return {
    isVisible: t,
    handleOpen: s,
    handleClose: n
  };
}
const Gt = /* @__PURE__ */ m({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: s, handleOpen: n, handleClose: a } = Ft({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (u, d) => l(s) ? c(u.$slots, "content", {
      key: 1,
      close: l(a)
    }) : c(u.$slots, "display", {
      key: 0,
      open: l(n)
    });
  }
}), Yt = {
  install(e) {
    e.component("VInplace", Gt);
  }
}, De = /* @__PURE__ */ m({
  __name: "VModal",
  props: /* @__PURE__ */ T({
    title: {},
    position: { default: "center" },
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = fe(e, ["title", "appendToBody", "position"]), s = t, n = S(), a = P(e, "modelValue");
    return (u, d) => (i(), f(l(M).Root, x({
      modelValue: a.value,
      "onUpdate:modelValue": d[0] || (d[0] = (v) => a.value = v)
    }, o, {
      "append-to-body": e.appendToBody,
      position: e.position,
      onClose: d[1] || (d[1] = (v) => s("close")),
      onOpen: d[2] || (d[2] = (v) => s("open")),
      onOpened: d[3] || (d[3] = (v) => s("opened", v)),
      onClosed: d[4] || (d[4] = (v) => s("closed", v))
    }), {
      default: r(() => [
        h(l(M).Dialog, null, {
          default: r(() => [
            h(l(M).Content, null, {
              default: r(() => [
                h(l(M).Header, null, {
                  default: r(() => [
                    c(u.$slots, "header", {}, () => [
                      e.title ? (i(), f(l(M).Title, { key: 0 }, {
                        default: r(() => [
                          z(C(e.title), 1)
                        ]),
                        _: 1
                      })) : w("", !0),
                      h(l(M).Close, null, {
                        default: r(() => [...d[5] || (d[5] = [
                          z("X", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }),
                h(l(M).Body, null, {
                  default: r(() => [
                    c(u.$slots, "default")
                  ]),
                  _: 3
                }),
                n?.footer ? (i(), f(l(M).Footer, { key: 0 }, {
                  default: r(() => [
                    c(u.$slots, "footer")
                  ]),
                  _: 3
                })) : w("", !0)
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue", "append-to-body", "position"]));
  }
}), Ut = {
  install(e) {
    e.component("VModal", De);
  }
}, Xt = { class: "v-drawer__dialog" }, qt = {
  key: 0,
  class: "v-drawer__header"
}, jt = { class: "v-drawer__body" }, Wt = {
  key: 1,
  class: "v-drawer__footer"
}, He = /* @__PURE__ */ m({
  __name: "VDrawer",
  props: /* @__PURE__ */ T({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = S(), a = P(e, "modelValue"), u = g(() => !!o.title || !!n?.header), d = g(() => !!n?.footer);
    function v() {
      a.value = !1;
    }
    function b(B) {
      s("opened", B);
    }
    function $(B) {
      s("closed", B);
    }
    return ae(a, (B) => {
      s(B ? "open" : "close");
    }), (B, L) => (i(), f(Ke, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      h(ve, {
        onAfterEnter: b,
        onAfterLeave: $
      }, {
        default: r(() => [
          le(y("div", {
            class: I(["v-drawer", {
              "v-drawer--open": a.value
            }]),
            role: "dialog"
          }, [
            y("div", Xt, [
              u.value ? (i(), p("div", qt, [
                c(B.$slots, "header", { close: v }, () => [
                  z(C(e.title), 1)
                ]),
                y("button", {
                  class: "v-drawer__close-button",
                  type: "button",
                  onClick: v
                }, " x ")
              ])) : w("", !0),
              y("div", jt, [
                c(B.$slots, "default", { close: v })
              ]),
              d.value ? (i(), p("div", Wt, [
                c(B.$slots, "footer", { close: v })
              ])) : w("", !0)
            ])
          ], 2), [
            [ie, a.value]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), Kt = {
  install(e) {
    e.component("VDrawer", He);
  }
};
function Ns() {
  return {};
}
const Jt = /* @__PURE__ */ Symbol("VDropdownContextKey"), Qt = { class: "v-dropdown__menu" }, Zt = /* @__PURE__ */ m({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, [a, u, d] = Y();
    function v($) {
      n("opened", $);
    }
    function b($) {
      n("opened", $);
    }
    return ae(a, ($) => {
      n($ ? "open" : "close");
    }), t({
      setVisible: u,
      isVisible: a
    }), Me(Jt, {
      props: s
    }), ($, B) => (i(), p("div", {
      class: I(["v-dropdown", {
        "v-dropdown--open": l(a)
      }])
    }, [
      c($.$slots, "trigger", {
        isVisible: l(a),
        toggle: l(d),
        setVisible: l(u)
      }),
      h(ve, {
        onAfterEnter: v,
        onAfterLeave: b
      }, {
        default: r(() => [
          le(y("div", Qt, [
            c($.$slots, "default")
          ], 512), [
            [ie, l(a)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), eo = {
  install(e) {
    e.component("VDropdown", Zt);
  }
}, to = /* @__PURE__ */ m({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = se("image"), o = se("root");
    return (s, n) => (i(), p("figure", {
      ref_key: "root",
      ref: o,
      class: I(["v-image", [
        {
          "v-image--loading": s.isLoading,
          "v-image--center": s.center,
          "v-image--loaded": !s.isError && s.isLoaded,
          "v-image--error": s.isError
        }
      ]])
    }, [
      y("picture", null, [
        y("img", {
          ref_key: "image",
          ref: t,
          class: "v-image__native",
          alt: ""
        }, null, 512)
      ])
    ], 2));
  }
}), oo = {
  install(e) {
    e.component("VImage", to);
  }
}, so = /* @__PURE__ */ m({
  __name: "VLayout",
  setup(e) {
    const t = S();
    return (o, s) => (i(), f(l(Be).Root, null, ke({
      default: r(() => [
        h(l(Be).Body, null, {
          default: r(() => [
            c(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      t?.header ? {
        name: "header",
        fn: r(() => [
          c(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t?.footer ? {
        name: "footer",
        fn: r(() => [
          c(o.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), no = {
  install(e) {
    e.component("VLayout", so);
  }
}, ao = /* @__PURE__ */ m({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(he).Container, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fs = {
  install(e) {
    e.component("VContainer", ao);
  }
}, lo = /* @__PURE__ */ m({
  __name: "VRow",
  props: {
    guttersX: { type: Boolean, default: !0 },
    guttersY: { type: Boolean },
    wrap: { type: Boolean, default: !0 },
    align: {},
    alignXs: {},
    alignSm: {},
    alignMd: {},
    alignLg: {},
    alignXl: {},
    alignXxl: {},
    justify: {},
    justifyXs: {},
    justifySm: {},
    justifyMd: {},
    justifyLg: {},
    justifyXl: {},
    justifyXxl: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(he).Row, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gs = {
  install(e) {
    e.component("VRow", lo);
  }
}, io = /* @__PURE__ */ m({
  __name: "VCol",
  props: {
    size: {},
    sizeXs: {},
    sizeSm: {},
    sizeMd: {},
    sizeLg: {},
    sizeXl: {},
    sizeXxl: {},
    order: {},
    orderXs: {},
    orderSm: {},
    orderMd: {},
    orderLg: {},
    orderXl: {},
    orderXxl: {},
    offset: {},
    offsetXs: {},
    offsetSm: {},
    offsetMd: {},
    offsetLg: {},
    offsetXl: {},
    offsetXxl: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(he).Col, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ys = {
  install(e) {
    e.component("VCol", io);
  }
}, ro = { class: "v-pagination" }, uo = /* @__PURE__ */ m({
  __name: "VPagination",
  props: {
    total: {},
    current: {},
    perPage: {},
    range: {},
    visibleMenu: { type: Boolean },
    moreButton: { type: Boolean }
  },
  emits: ["change", "load"],
  setup(e) {
    return (t, o) => (i(), p("div", ro));
  }
}), co = {
  install(e) {
    e.component("VPagination", uo);
  }
}, mo = { class: "v-placeholder" }, fo = /* @__PURE__ */ m({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (i(), p("div", mo, [
      c(t.$slots, "default")
    ]));
  }
}), po = {
  install(e) {
    e.component("VPlaceholder", fo);
  }
}, vo = /* @__PURE__ */ m({
  __name: "VScrollbar",
  props: {
    vertical: { type: Boolean },
    horizontal: { type: Boolean },
    draggableMultiplier: {},
    infiniteScrollOffset: {},
    debounceDelay: {},
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const o = e, s = t;
    return (n, a) => (i(), f(l(st).Root, x(o, U(s)), {
      default: r(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ho = {
  install(e) {
    e.component("VScrollbar", vo);
  }
}, _o = /* @__PURE__ */ m({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: I(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), Vo = {
  install(e) {
    e.component("VSpinner", _o);
  }
}, Ne = /* @__PURE__ */ Symbol("VTabsContextKey"), go = () => Je(Ne, null);
function yo() {
  const e = J([]);
  function t(s) {
    e.value.find((n) => n.id === s.id) || e.value.push(s);
  }
  function o(s) {
    e.value = e.value.filter((n) => n.id !== s.id);
  }
  return {
    tabs: e,
    registerTab: t,
    unregisterTab: o
  };
}
function bo(e) {
  const t = Qe(), o = g(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const $o = { class: "v-tabs" }, To = { class: "v-tabs__content" }, Bo = /* @__PURE__ */ m({
  __name: "VTabs",
  props: /* @__PURE__ */ T({
    scrollable: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = P(e, "modelValue"), {
      tabs: a,
      registerTab: u,
      unregisterTab: d
    } = yo();
    function v(b) {
      n.value = b, s("change", b);
    }
    return Me(Ne, {
      props: o,
      modelValue: n,
      tabs: a,
      handleChange: v,
      registerTab: u,
      unregisterTab: d
    }), (b, $) => (i(), p("div", $o, [
      y("div", To, [
        c(b.$slots, "default")
      ])
    ]));
  }
}), Co = /* @__PURE__ */ m({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = S(), s = go(), { id: n, isActive: a } = bo({
      context: s,
      props: t
    }), u = Ze({
      id: n,
      props: t,
      slots: o
    });
    return s?.registerTab(u), et(() => {
      s?.unregisterTab(u);
    }), (d, v) => le((i(), p("div", {
      class: I(["v-tab", {
        "v-tab--active": l(a)
      }])
    }, [
      c(d.$slots, "default", { isActive: l(a) })
    ], 2)), [
      [ie, l(a)]
    ]);
  }
}), wo = {
  install(e) {
    e.component("VTabs", Bo), e.component("VTab", Co);
  }
}, xo = /* @__PURE__ */ m({
  __name: "VTag",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, s = t;
    return (n, a) => (i(), f(l(Ae).Root, x(o, U(s)), {
      default: r(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Po = /* @__PURE__ */ m({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Ae).Group, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Io = {
  install(e) {
    e.component("VTag", xo);
  }
}, Us = {
  install(e) {
    e.component("VTagGroup", Po);
  }
}, So = /* @__PURE__ */ m({
  __name: "VText",
  props: {
    tag: {},
    uppercase: { type: Boolean },
    underline: { type: Boolean },
    weight: {},
    theme: {},
    size: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(nt).Root, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mo = {
  install(e) {
    e.component("VText", So);
  }
}, ko = /* @__PURE__ */ m({
  __name: "VForm",
  props: /* @__PURE__ */ T({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = P(e, "modelValue");
    return (a, u) => (i(), f(l(N).Root, x({
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d)
    }, o, U(s)), {
      default: r((d) => [
        c(a.$slots, "default", _(V(d)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), zo = {
  install(e) {
    e.component("VForm", ko);
  }
}, Ao = /* @__PURE__ */ m({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = fe(e, ["title"]), s = t, n = S();
    return (a, u) => (i(), f(l(N).Item, x(o, U(s)), ke({
      default: r((d) => [
        c(a.$slots, "default", _(V(d)))
      ]),
      footer: r((d) => [
        c(a.$slots, "footer", _(V(d)), () => [
          h(l(N).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      n.header ? {
        name: "header",
        fn: r((d) => [
          c(a.$slots, "header", _(V(d)), () => [
            h(l(N).ItemTitle, null, {
              default: r(() => [
                z(C(e.title) + " ", 1),
                d.isRequired ? (i(), f(l(N).ItemRequired, { key: 0 })) : w("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), Lo = {
  install(e) {
    e.component("VFormItem", Ao);
  }
}, Oo = /* @__PURE__ */ m({
  __name: "VCheckbox",
  props: /* @__PURE__ */ T({
    disabled: { type: Boolean },
    indeterminate: { type: Boolean },
    value: {},
    checked: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: [Boolean, Array], required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(Q).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        h(l(Q).Indicator),
        h(l(Q).Title, null, {
          default: r(() => [
            c(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Ro = /* @__PURE__ */ m({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Q).Group, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eo = {
  install(e) {
    e.component("VCheckbox", Oo);
  }
}, Do = {
  install(e) {
    e.component("VCheckboxGroup", Ro);
  }
}, Ho = /* @__PURE__ */ m({
  __name: "VInput",
  props: /* @__PURE__ */ T({
    type: {},
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: {},
    inputMode: {},
    rows: {},
    cols: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = S(), s = P(e, "modelValue");
    return (n, a) => (i(), f(l(k).Root, x(t, {
      modelValue: s.value,
      "onUpdate:modelValue": a[0] || (a[0] = (u) => s.value = u)
    }), {
      default: r((u) => [
        o?.before ? (i(), f(l(k).Before, { key: 0 }, {
          default: r(() => [
            c(n.$slots, "before", _(V(u)))
          ]),
          _: 2
        }, 1024)) : w("", !0),
        h(l(k).Control, null, {
          default: r(() => [
            u.isTextarea ? (i(), f(l(k).Textarea, { key: 0 })) : (i(), f(l(k).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (i(), f(l(k).After, { key: 1 }, {
          default: r(() => [
            c(n.$slots, "after", _(V(u)))
          ]),
          _: 2
        }, 1024)) : w("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), No = {
  install(e) {
    e.component("VInput", Ho);
  }
}, Fo = /* @__PURE__ */ m({
  __name: "VInputCode",
  props: /* @__PURE__ */ T({
    length: {},
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(Ce).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        (i(!0), p(Ie, null, tt(e.length, (a, u) => (i(), f(l(Ce).Pin, {
          key: `pin-${u}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Go = {
  install(e) {
    e.component("VInputCode", Fo);
  }
}, Yo = /* @__PURE__ */ m({
  __name: "VInputNumber",
  props: /* @__PURE__ */ T({
    mousewheel: { type: [Boolean, Number] },
    min: {},
    max: {},
    step: {},
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    direction: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      default: at
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(K).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        h(l(K).Button, {
          action: l(we).DECREMENT
        }, null, 8, ["action"]),
        h(l(K).Input),
        h(l(K).Button, {
          action: l(we).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Uo = {
  install(e) {
    e.component("VInputNumber", Yo);
  }
}, Xo = /* @__PURE__ */ m({
  __name: "VInputPassword",
  props: /* @__PURE__ */ T({
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(lt).Root, x({
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }, t), null, 16, ["modelValue"]));
  }
}), qo = {
  install(e) {
    e.component("VInputPassword", Xo);
  }
}, jo = /* @__PURE__ */ m({
  __name: "VRadio",
  props: /* @__PURE__ */ T({
    disabled: { type: Boolean },
    value: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(Z).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        h(l(Z).Indicator),
        h(l(Z).Title, null, {
          default: r(() => [
            c(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Wo = /* @__PURE__ */ m({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Z).Group, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ko = {
  install(e) {
    e.component("VRadio", jo);
  }
}, Jo = {
  install(e) {
    e.component("VRadioGroup", Wo);
  }
}, Qo = /* @__PURE__ */ m({
  __name: "VSelect",
  props: /* @__PURE__ */ T({
    disabled: { type: Boolean },
    multiple: { type: Boolean },
    clearable: { type: Boolean },
    searchable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["change", "opened", "closed", "open", "close", "clear"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = P(e, "modelValue");
    return (a, u) => (i(), f(l(F).Root, x(o, {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (d) => n.value = d),
      onChange: u[1] || (u[1] = (d) => s("change", d)),
      onClose: u[2] || (u[2] = (d) => s("close")),
      onClear: u[3] || (u[3] = (d) => s("clear"))
    }), {
      default: r(() => [
        h(l(F).Value, null, {
          default: r(() => [
            c(a.$slots, "value")
          ]),
          _: 3
        }),
        h(l(F).Dropdown, null, {
          default: r(() => [
            h(l(F).Scrollbar, null, {
              default: r(() => [
                c(a.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Zo = /* @__PURE__ */ m({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(F).Option, _(V(t)), {
      default: r((n) => [
        c(o.$slots, "default", _(V(n)))
      ]),
      _: 3
    }, 16));
  }
}), es = {
  install(e) {
    e.component("VSelect", Qo), e.component("VOption", Zo);
  }
}, ts = /* @__PURE__ */ m({
  __name: "VSwitch",
  props: /* @__PURE__ */ T({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(me).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        h(l(me).Indicator),
        h(l(me).Title, null, {
          default: r(() => [
            c(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), os = {
  install(e) {
    e.component("VSwitch", ts);
  }
}, ss = /* @__PURE__ */ m({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(it).Root, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ns = {
  install(e) {
    e.component("VConfigProvider", ss);
  }
}, as = { class: "v-progress__value" }, ls = {
  key: 0,
  class: "v-progress__label"
}, is = /* @__PURE__ */ m({
  __name: "VProgress",
  props: {
    indeterminate: { type: Boolean },
    showValue: { type: Boolean, default: !0 },
    value: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: I(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      y("div", as, [
        e.showValue ? (i(), p("div", ls, [
          c(t.$slots, "default")
        ])) : w("", !0)
      ])
    ], 2));
  }
}), rs = {
  install(e) {
    e.component("VProgress", is);
  }
}, us = /* @__PURE__ */ m({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = S();
    return (s, n) => (i(), f(l(xe).Root, _(V(t)), {
      default: r(() => [
        o?.default ? (i(), f(l(xe).Content, { key: 0 }, {
          default: r(() => [
            c(s.$slots, "default")
          ]),
          _: 3
        })) : w("", !0)
      ]),
      _: 3
    }, 16));
  }
}), cs = {
  install(e) {
    e.component("VDivider", us);
  }
}, ds = /* @__PURE__ */ m({
  __name: "VFlex",
  props: {
    wrap: { type: Boolean, default: !0 },
    align: {},
    alignXs: {},
    alignSm: {},
    alignMd: {},
    alignLg: {},
    alignXl: {},
    alignXxl: {},
    justify: {},
    justifyXs: {},
    justifySm: {},
    justifyMd: {},
    justifyLg: {},
    justifyXl: {},
    justifyXxl: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Le).Root, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ms = /* @__PURE__ */ m({
  __name: "VFlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Le).Item, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fs = {
  install(e) {
    e.component("VFlex", ds);
  }
}, Xs = {
  install(e) {
    e.component("VFlexItem", ms);
  }
}, ps = /* @__PURE__ */ m({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (i(), f(l(k).Group, null, {
      default: r(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), vs = /* @__PURE__ */ m({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (i(), f(l(k).GroupAddon, null, {
      default: r(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), hs = {
  install(e) {
    e.component("VInputGroup", ps), e.component("VInputGroupAddon", vs);
  }
}, ee = 1e3, te = 60 * ee, oe = 60 * te, Pe = 24 * oe, Fe = Date.now(), Ge = 1e3;
function _s(e) {
  const [t, o] = Y(), [s, n] = Y(), a = J(0), u = J(0), d = J(0), v = g(() => e.props.now || Fe), b = g(() => e.props.interval || Ge), $ = g(() => 0), B = g(() => 0), L = g(() => Math.floor(a.value / Pe)), X = g(() => Math.floor(a.value % Pe / oe)), q = g(() => Math.floor(a.value % oe / te)), j = g(() => Math.floor(a.value % te / ee)), O = g(() => Math.floor(a.value % ee)), _e = g(() => Math.floor(a.value / oe)), Ue = g(() => Math.floor(a.value / te)), Xe = g(() => Math.floor(a.value / ee));
  function ue() {
    t.value || (o(!0), e.props?.autoStart || (a.value = e.props.start, u.value = v.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && ce());
  }
  function D() {
    cancelAnimationFrame(d.value), d.value = 0;
  }
  function qe() {
    t.value && (ge(), a.value > 0 && e.onProgress?.({
      days: L.value,
      hours: X.value,
      minutes: q.value,
      seconds: j.value,
      milliseconds: O.value,
      totalDays: L.value,
      totalHours: _e.value,
      totalMinutes: Ue.value,
      totalSeconds: Xe.value,
      totalMilliseconds: a.value
    }), ce());
  }
  function ce() {
    if (!t.value)
      return;
    const A = Math.min(a.value, b.value);
    if (A > 0) {
      let be = function(H) {
        de || (de = H), W || (W = H);
        const $e = H - de;
        $e >= A || $e + (H - W) / 2 >= A ? qe() : d.value = requestAnimationFrame(be), W = H;
      }, de, W;
      d.value = requestAnimationFrame(be);
    } else
      Ve();
  }
  function je() {
    t.value && (D(), o(!1), e.onAbort?.());
  }
  function Ve() {
    t.value && (D(), a.value = 0, o(!1), e.onEnd?.());
  }
  function ge() {
    t.value && (a.value = Math.max(0, u.value - v.value));
  }
  function We() {
    D(), a.value = e.props.start, u.value = v.value + e.props.start, o(!1), ue();
  }
  function ye() {
    switch (document.visibilityState) {
      case "visible":
        d.value === 0 && s.value && (ge(), ce()), n(!1);
        break;
      case "hidden":
        d.value > 0 && (n(!0), D());
        break;
    }
  }
  return pe(() => {
    document.addEventListener("visibilitychange", ye);
  }), Se(() => {
    document.removeEventListener("visibilitychange", ye), D();
  }), ae(() => e.props, (A) => {
    a.value = A.start, u.value = v.value + A.start, A.autoStart && ue();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: $,
    months: B,
    days: L,
    hours: X,
    minutes: q,
    seconds: j,
    milliseconds: O,
    start: ue,
    abort: je,
    end: Ve,
    restart: We
  };
}
const Vs = { class: "v-countdown" }, gs = /* @__PURE__ */ m({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => Ge },
    start: {},
    now: { default: () => Fe }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, {
      years: a,
      months: u,
      days: d,
      hours: v,
      minutes: b,
      seconds: $,
      milliseconds: B,
      start: L,
      abort: X,
      end: q,
      restart: j
    } = _s({
      props: s,
      onAbort: () => n("abort"),
      onEnd: () => n("end"),
      onProgress: (O) => n("progress", O),
      onStart: () => n("start")
    });
    return t({
      start: L,
      abort: X,
      end: q,
      restart: j
    }), (O, _e) => (i(), p("div", Vs, [
      c(O.$slots, "default", {
        years: l(a),
        months: l(u),
        days: l(d),
        hours: l(v),
        minutes: l(b),
        seconds: l($),
        milliseconds: l(B)
      })
    ]));
  }
}), ys = {
  install(e) {
    e.component("VCountdown", gs);
  }
}, bs = { class: "v-calendar" }, $s = /* @__PURE__ */ m({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", bs));
  }
}), Ts = {
  install(e) {
    e.component("VCalendar", $s);
  }
}, qs = /* @__PURE__ */ m({
  __name: "VMenuLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(e) {
    return (t, o) => (i(), f(l(Oe).Link, {
      as: e.as,
      "as-child": e.asChild
    }, {
      default: r(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), js = /* @__PURE__ */ m({
  __name: "VMenu",
  props: {
    direction: {},
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Oe).Root, _(V(t)), {
      default: r(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ws = {
  install(e) {
    e.use(ft), e.use(Mt), e.use(bt), e.use($t), e.use(Et), e.use(At), e.use(ct), e.use(Nt), e.use(ns), e.use(Ut), e.use(Yt), e.use(Kt), e.use(eo), e.use(oo), e.use(co), e.use(po), e.use(ho), e.use(Vo), e.use(wo), e.use(Io), e.use(Mo), e.use(no), e.use(zo), e.use(Lo), e.use(No), e.use(Eo), e.use(Do), e.use(qo), e.use(Uo), e.use(Go), e.use(Ko), e.use(Jo), e.use(os), e.use(es), e.use(xt), e.use(rs), e.use(cs), e.use(fs), e.use(hs), e.use(ys), e.use(Ts);
  }
}, Bs = { class: "v-confirm__header" }, Cs = { class: "v-confirm__title" }, ws = { class: "v-confirm__body" }, xs = {
  key: 0,
  class: "v-confirm__text"
}, Ps = ["innerHTML"], Is = { class: "v-confirm__footer" }, Ss = /* @__PURE__ */ m({
  __name: "VConfirm",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean },
    confirmText: { default: "Ок" },
    cancelText: { default: "Отмена" },
    theme: {},
    size: {}
  },
  emits: ["success", "cancel", "close"],
  setup(e, { emit: t }) {
    const o = t;
    return (s, n) => (i(), p("div", {
      class: I(["v-confirm", {
        [`v-confirm--size-${e.size}`]: e.size,
        [`v-confirm--theme-${e.theme}`]: e.theme
      }])
    }, [
      y("div", Bs, [
        y("div", Cs, C(e.title), 1),
        y("button", {
          type: "button",
          onClick: n[0] || (n[0] = (a) => o("close"))
        }, " X ")
      ]),
      y("div", ws, [
        e.useHtml ? (i(), p("div", {
          key: 1,
          class: "v-confirm__text",
          innerHTML: e.message
        }, null, 8, Ps)) : (i(), p("div", xs, C(e.message), 1))
      ]),
      y("div", Is, [
        y("button", {
          type: "button",
          onClick: n[1] || (n[1] = (a) => o("success"))
        }, C(e.confirmText), 1),
        y("button", {
          type: "button",
          onClick: n[2] || (n[2] = (a) => o("cancel"))
        }, C(e.cancelText), 1)
      ])
    ], 2));
  }
});
class Ks {
  static #e = null;
  static async open(t, o) {
    return new Promise((s) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const n = (u) => {
        try {
          this.close(), s(u);
        } catch (d) {
          console.error(d), s(!1);
        }
      }, a = re(Ss, {
        ...t,
        onSuccess: () => {
          n(!0), t.onSuccess?.();
        },
        onCancel: () => {
          n(!1), t.onCancel?.();
        },
        onClose: () => {
          this.close(), t.onClose?.();
        },
        appContext: o
      });
      G(a, this.#e);
    });
  }
  static close() {
    this.#e && G(null, this.#e);
  }
}
const Js = {
  install() {
  }
}, Ye = 1500;
function Ms(e) {
  const t = g(() => E(e.props.duration) ? e.props.duration : Ye), [o, s] = Y(!1);
  let n = null;
  function a() {
    n && clearTimeout(n);
  }
  function u() {
    a(), t.value !== 0 && (n = setTimeout(() => {
      s(!1);
    }, t.value));
  }
  return pe(() => {
    u(), s(!0);
  }), {
    isVisible: o,
    setVisible: s,
    clearTimer: a,
    startTimer: u
  };
}
const ks = { class: "v-toast__header" }, zs = { class: "v-toast__title" }, As = { class: "v-toast__body" }, Ls = {
  key: 0,
  class: "v-toast__text"
}, Os = ["innerHTML"], Rs = /* @__PURE__ */ m({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: Ye },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, s = t, { isVisible: n, setVisible: a, startTimer: u, clearTimer: d } = Ms({
      props: o
    });
    return (v, b) => (i(), f(ve, {
      name: "fade-in-up",
      onAfterLeave: b[3] || (b[3] = ($) => s("close"))
    }, {
      default: r(() => [
        le(y("div", {
          class: I(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: b[1] || (b[1] = //@ts-ignore
          (...$) => l(d) && l(d)(...$)),
          onMouseleave: b[2] || (b[2] = //@ts-ignore
          (...$) => l(u) && l(u)(...$))
        }, [
          y("div", ks, [
            y("div", zs, C(e.title), 1),
            e.clearable ? (i(), p("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: b[0] || (b[0] = ($) => l(a)(!1))
            }, " X ")) : w("", !0)
          ]),
          y("div", As, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, Os)) : (i(), p("div", Ls, C(e.message), 1))
          ])
        ], 34), [
          [ie, l(n)]
        ])
      ]),
      _: 1
    }));
  }
});
class Qs {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const s = re(Rs, {
      ...t,
      appContext: o
    });
    G(s, this.#e);
  }
}
class Zs {
  static open(t, o) {
    const s = re(De, {
      ...t,
      appContext: o
    });
    G(s, document.body);
  }
}
class en {
  static open(t, o) {
    const s = re(He, {
      ...t,
      appContext: o
    });
    G(s, document.body);
  }
}
const tn = {
  name: "ru",
  vau: {}
}, on = {
  name: "en",
  vau: {}
};
export {
  ft as AccordionPlugin,
  Mt as AffixPlugin,
  xt as AlertPlugin,
  $t as AvatarGroupPlugin,
  bt as AvatarPlugin,
  Et as BadgePlugin,
  At as BreadcrumbsPlugin,
  Hs as ButtonGroupPlugin,
  ct as ButtonPlugin,
  Ts as CalendarPlugin,
  Do as CheckboxGroupPlugin,
  Eo as CheckboxPlugin,
  Ys as ColPlugin,
  Nt as CollapsePlugin,
  ns as ConfigProviderPlugin,
  Js as ConfirmPlugin,
  Ks as ConfirmService,
  Fs as ContainerPlugin,
  ys as CountdownPlugin,
  cs as DividerPlugin,
  Kt as DrawerPlugin,
  en as DrawerService,
  eo as DropdownPlugin,
  Xs as FlexItemPlugin,
  fs as FlexPlugin,
  Lo as FormItemPlugin,
  zo as FormPlugin,
  oo as ImagePlugin,
  Yt as InplacePlugin,
  Go as InputCodePlugin,
  hs as InputGroupPlugin,
  Uo as InputNumberPlugin,
  qo as InputPasswordPlugin,
  No as InputPlugin,
  no as LayoutPlugin,
  Ut as ModalPlugin,
  Zs as ModalService,
  co as PaginationPlugin,
  po as PlaceholderPlugin,
  rs as ProgressPlugin,
  Jo as RadioGroupPlugin,
  Ko as RadioPlugin,
  Gs as RowPlugin,
  ho as ScrollbarPlugin,
  es as SelectPlugin,
  Vo as SpinnerPlugin,
  os as SwitchPlugin,
  wo as TabsPlugin,
  Us as TagGroupPlugin,
  Io as TagPlugin,
  Mo as TextPlugin,
  Qs as ToastService,
  dt as VAccordion,
  mt as VAccordionItem,
  St as VAffix,
  wt as VAlert,
  vt as VAvatar,
  yt as VAvatarGroup,
  Rt as VBadge,
  zt as VBreadcrumbs,
  rt as VButton,
  ut as VButtonGroup,
  $s as VCalendar,
  Oo as VCheckbox,
  Ro as VCheckboxGroup,
  io as VCol,
  Ht as VCollapse,
  ss as VConfigProvider,
  ao as VContainer,
  gs as VCountdown,
  us as VDivider,
  He as VDrawer,
  Zt as VDropdown,
  ds as VFlex,
  ms as VFlexItem,
  ko as VForm,
  Ao as VFormItem,
  to as VImage,
  Gt as VInplace,
  Ho as VInput,
  Fo as VInputCode,
  ps as VInputGroup,
  vs as VInputGroupAddon,
  Yo as VInputNumber,
  Xo as VInputPassword,
  so as VLayout,
  js as VMenu,
  qs as VMenuLink,
  De as VModal,
  Zo as VOption,
  uo as VPagination,
  fo as VPlaceholder,
  is as VProgress,
  jo as VRadio,
  Wo as VRadioGroup,
  lo as VRow,
  vo as VScrollbar,
  Qo as VSelect,
  _o as VSpinner,
  ts as VSwitch,
  Co as VTab,
  Bo as VTabs,
  xo as VTag,
  Po as VTagGroup,
  So as VText,
  Ws as VauUI,
  on as en,
  tn as ru,
  Ns as useDrawer
};
