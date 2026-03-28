import { defineComponent as m, createBlock as f, openBlock as i, unref as l, normalizeProps as b, guardReactiveProps as $, withCtx as r, renderSlot as d, mergeModels as B, useModel as S, mergeProps as x, toHandlers as j, createPropsRestProxy as he, createVNode as _, createTextVNode as k, toDisplayString as w, createElementBlock as p, normalizeClass as P, createCommentVNode as C, useSlots as M, computed as y, createElementVNode as V, Fragment as U, shallowRef as Se, onMounted as _e, onBeforeUnmount as Ae, watch as ie, useTemplateRef as ae, Teleport as Qe, Transition as Ve, withDirectives as re, vShow as ue, provide as ge, createSlots as Le, inject as Ze, ref as H, useId as et, reactive as tt, onUnmounted as ot, renderList as Z, defineAsyncComponent as ce, h as de, render as X } from "vue";
import { Button as Oe, Accordion as R, isUndefined as st, isNumber as D, useToggle as q, Modal as A, Layout as Pe, Grid as ye, Scrollbar as nt, Tag as Ee, Text as at, Form as Y, Checkbox as ee, Input as L, InputCode as ke, InputNumber as Q, INPUT_NUMBER_ACTIONS as Ie, INPUT_NUMBER_VALUE_DEFAULT as lt, InputPassword as it, Radio as te, Select as G, Switch as ve, ConfigProvider as rt, Divider as Me, Flex as Re } from "@vau/core";
const ut = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(Oe).Root, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ct = /* @__PURE__ */ m({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Oe).Group, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dt = {
  install(e) {
    e.component("VButton", ut);
  }
}, Ks = {
  install(e) {
    e.component("VButtonGroup", ct);
  }
}, mt = /* @__PURE__ */ m({
  __name: "VAccordion",
  props: /* @__PURE__ */ B({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ B(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = S(e, "modelValue");
    return (a, u) => (i(), f(l(R).Root, x(o, {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c)
    }, j(s)), {
      default: r(() => [
        d(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ft = /* @__PURE__ */ m({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = he(e, ["title"]);
    return (o, s) => (i(), f(l(R).Item, b($(t)), {
      default: r(({ isActive: n }) => [
        _(l(R).Header, null, {
          default: r(() => [
            _(l(R).Trigger, null, {
              default: r(() => [
                _(l(R).Title, null, {
                  default: r(() => [
                    d(o.$slots, "title", {}, () => [
                      k(w(e.title), 1)
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
        _(l(R).Body, null, {
          default: r(() => [
            d(o.$slots, "default", { isActive: n })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), pt = {
  install(e) {
    e.component("VAccordion", mt), e.component("VAccordionItem", ft);
  }
}, vt = {
  key: 0,
  class: "v-avatar__label"
}, ht = /* @__PURE__ */ m({
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
      class: P(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (i(), p("div", vt, w(e.label), 1)) : C("", !0)
    ], 2));
  }
}), _t = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, Vt = {}, gt = { class: "v-avatar-group" };
function yt(e, t) {
  return i(), p("div", gt, [
    d(e.$slots, "default")
  ]);
}
const bt = /* @__PURE__ */ _t(Vt, [["render", yt]]), $t = {
  install(e) {
    e.component("VAvatar", ht);
  }
}, Tt = {
  install(e) {
    e.component("VAvatarGroup", bt);
  }
}, Bt = { class: "v-alert__content" }, wt = {
  key: 0,
  class: "v-alert__title"
}, Ct = {
  key: 1,
  class: "v-alert__description"
}, xt = /* @__PURE__ */ m({
  __name: "VAlert",
  props: {
    title: {},
    description: {},
    showIcon: { type: Boolean },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = M(), s = y(() => !!t.title || !!o?.title), n = y(() => !!t.description || !!o?.description);
    return (a, u) => (i(), p("div", {
      class: P(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      V("div", Bt, [
        o?.default ? d(a.$slots, "default", { key: 0 }) : (i(), p(U, { key: 1 }, [
          s.value ? (i(), p("div", wt, [
            d(a.$slots, "title", {}, () => [
              k(w(e.title), 1)
            ])
          ])) : C("", !0),
          n.value ? (i(), p("div", Ct, [
            d(a.$slots, "description", {}, () => [
              k(w(e.description), 1)
            ])
          ])) : C("", !0)
        ], 64))
      ])
    ], 2));
  }
}), St = {
  install(e) {
    e.component("VAlert", xt);
  }
}, He = 0, De = 0, Pt = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class le {
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
  #w(t) {
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
        const n = this.#C(0, s.translateY + "px");
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
    return o.outer = le.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = le.extend({
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
    const o = this.#$(), s = this.#w(o);
    function n(a) {
      const u = D(a) ? "px" : "";
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
  #C(t = 0, o = 0, s = 0) {
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
      st(o[n]) ? s[n] = t[n] : s[n] = o[n];
    return s;
  }
}
function kt(e) {
  const t = Se(), o = Se(), s = y(() => D(e.props?.offsetTop) ? e.props.offsetTop : He), n = y(() => D(e.props?.offsetBottom) ? e.props.offsetBottom : De);
  function a() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function u() {
    a(), e.root.value && t.value && e.content.value && (o.value = new le(e.root.value, {
      offsetTop: s.value,
      offsetBottom: n.value,
      container: t.value,
      innerWrapper: e.content.value
    }));
  }
  function c() {
    o.value?.destroy(), o.value = void 0;
  }
  return _e(() => {
    e.props.disabled || u();
  }), Ae(() => {
    c();
  }), ie(() => e.props.disabled, (v) => {
    v ? c() : u();
  }), {};
}
const It = /* @__PURE__ */ m({
  __name: "VAffix",
  props: {
    offsetTop: { default: He },
    offsetBottom: { default: De },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = ae("root"), s = ae("content");
    return kt({
      props: t,
      root: o,
      content: s
    }), (n, a) => (i(), p("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      V("div", {
        ref_key: "content",
        ref: s,
        class: "v-affix__content"
      }, [
        d(n.$slots, "default")
      ], 512)
    ], 512));
  }
}), Mt = {
  install(e) {
    e.component("VAffix", It);
  }
}, zt = { class: "v-breadcrumbs" }, At = /* @__PURE__ */ m({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (i(), p("nav", zt));
  }
}), Lt = {
  install(e) {
    e.component("VBreadcrumbs", At);
  }
};
function Ot(e) {
  return {
    content: y(() => e.props.dot ? "" : D(e.props.value) && D(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const Et = {
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
    const t = e, o = M(), { content: s } = Ot({
      props: t
    }), n = y(() => !t.hidden && !!(s.value || t.dot || o?.content));
    return (a, u) => (i(), p("div", {
      class: P(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(a.$slots, "default"),
      n.value ? (i(), p("sup", Et, [
        d(a.$slots, "content", { value: l(s) }, () => [
          k(w(l(s)), 1)
        ])
      ])) : C("", !0)
    ], 2));
  }
}), Ht = {
  install(e) {
    e.component("VBadge", Rt);
  }
}, Dt = { class: "v-collapse" }, Nt = /* @__PURE__ */ m({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (i(), p("div", Dt, [
      d(t.$slots, "default")
    ]));
  }
}), Ft = {
  install(e) {
    e.component("VCollapse", Nt);
  }
};
function Yt(e) {
  const [t, o] = q();
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
    const o = t, { isVisible: s, handleOpen: n, handleClose: a } = Yt({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (u, c) => l(s) ? d(u.$slots, "content", {
      key: 1,
      close: l(a)
    }) : d(u.$slots, "display", {
      key: 0,
      open: l(n)
    });
  }
}), Ut = {
  install(e) {
    e.component("VInplace", Gt);
  }
}, Ne = /* @__PURE__ */ m({
  __name: "VModal",
  props: /* @__PURE__ */ B({
    title: {},
    position: { default: "center" },
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ B(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = he(e, ["title", "appendToBody", "position"]), s = t, n = M(), a = S(e, "modelValue");
    return (u, c) => (i(), f(l(A).Root, x({
      modelValue: a.value,
      "onUpdate:modelValue": c[0] || (c[0] = (v) => a.value = v)
    }, o, {
      "append-to-body": e.appendToBody,
      position: e.position,
      onClose: c[1] || (c[1] = (v) => s("close")),
      onOpen: c[2] || (c[2] = (v) => s("open")),
      onOpened: c[3] || (c[3] = (v) => s("opened", v)),
      onClosed: c[4] || (c[4] = (v) => s("closed", v))
    }), {
      default: r(() => [
        _(l(A).Dialog, null, {
          default: r(() => [
            _(l(A).Content, null, {
              default: r(() => [
                _(l(A).Header, null, {
                  default: r(() => [
                    d(u.$slots, "header", {}, () => [
                      e.title ? (i(), f(l(A).Title, { key: 0 }, {
                        default: r(() => [
                          k(w(e.title), 1)
                        ]),
                        _: 1
                      })) : C("", !0),
                      _(l(A).Close, null, {
                        default: r(() => [...c[5] || (c[5] = [
                          k("X", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }),
                _(l(A).Body, null, {
                  default: r(() => [
                    d(u.$slots, "default")
                  ]),
                  _: 3
                }),
                n?.footer ? (i(), f(l(A).Footer, { key: 0 }, {
                  default: r(() => [
                    d(u.$slots, "footer")
                  ]),
                  _: 3
                })) : C("", !0)
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
}), Xt = {
  install(e) {
    e.component("VModal", Ne);
  }
}, be = /* @__PURE__ */ m({
  __name: "VOverlay",
  props: {
    mask: { type: Boolean, default: !0 },
    blur: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: P(["v-overlay", {
        "v-overlay--mask": e.mask,
        "v-overlay--blur": e.mask && e.blur
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), qt = {
  install(e) {
    e.component("VOverlay", be);
  }
}, jt = { class: "v-drawer__dialog" }, Wt = {
  key: 0,
  class: "v-drawer__header"
}, Kt = { class: "v-drawer__body" }, Jt = {
  key: 1,
  class: "v-drawer__footer"
}, Fe = /* @__PURE__ */ m({
  __name: "VDrawer",
  props: /* @__PURE__ */ B({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ B(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = M(), a = S(e, "modelValue"), u = y(() => !!o.title || !!n?.header), c = y(() => !!n?.footer);
    function v() {
      a.value = !1;
    }
    function h(T) {
      s("opened", T);
    }
    function g(T) {
      s("closed", T);
    }
    return ie(a, (T) => {
      s(T ? "open" : "close");
    }), (T, I) => (i(), f(Qe, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      _(Ve, {
        onAfterEnter: h,
        onAfterLeave: g
      }, {
        default: r(() => [
          _(l(be), null, {
            default: r(() => [
              re(V("div", {
                class: P(["v-drawer", {
                  "v-drawer--open": a.value
                }]),
                role: "dialog"
              }, [
                V("div", jt, [
                  u.value ? (i(), p("div", Wt, [
                    d(T.$slots, "header", { close: v }, () => [
                      k(w(e.title), 1)
                    ]),
                    V("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: v
                    }, " x ")
                  ])) : C("", !0),
                  V("div", Kt, [
                    d(T.$slots, "default", { close: v })
                  ]),
                  c.value ? (i(), p("div", Jt, [
                    d(T.$slots, "footer", { close: v })
                  ])) : C("", !0)
                ])
              ], 2), [
                [ue, a.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), Qt = {
  install(e) {
    e.component("VDrawer", Fe);
  }
};
function Js() {
  return {};
}
const Zt = /* @__PURE__ */ Symbol("VDropdownContextKey"), eo = { class: "v-dropdown__menu" }, to = /* @__PURE__ */ m({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, [a, u, c] = q();
    function v(g) {
      n("opened", g);
    }
    function h(g) {
      n("opened", g);
    }
    return ie(a, (g) => {
      n(g ? "open" : "close");
    }), t({
      setVisible: u,
      isVisible: a
    }), ge(Zt, {
      props: s
    }), (g, T) => (i(), p("div", {
      class: P(["v-dropdown", {
        "v-dropdown--open": l(a)
      }])
    }, [
      d(g.$slots, "trigger", {
        isVisible: l(a),
        toggle: l(c),
        setVisible: l(u)
      }),
      _(Ve, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: r(() => [
          re(V("div", eo, [
            d(g.$slots, "default")
          ], 512), [
            [ue, l(a)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), oo = {
  install(e) {
    e.component("VDropdown", to);
  }
}, so = /* @__PURE__ */ m({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = ae("image"), o = ae("root");
    return (s, n) => (i(), p("figure", {
      ref_key: "root",
      ref: o,
      class: P(["v-image", [
        {
          "v-image--loading": s.isLoading,
          "v-image--center": s.center,
          "v-image--loaded": !s.isError && s.isLoaded,
          "v-image--error": s.isError
        }
      ]])
    }, [
      V("picture", null, [
        V("img", {
          ref_key: "image",
          ref: t,
          class: "v-image__native",
          alt: ""
        }, null, 512)
      ])
    ], 2));
  }
}), no = {
  install(e) {
    e.component("VImage", so);
  }
}, ao = /* @__PURE__ */ m({
  __name: "VLayout",
  setup(e) {
    const t = M();
    return (o, s) => (i(), f(l(Pe).Root, null, Le({
      default: r(() => [
        _(l(Pe).Body, null, {
          default: r(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      t?.header ? {
        name: "header",
        fn: r(() => [
          d(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t?.footer ? {
        name: "footer",
        fn: r(() => [
          d(o.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), lo = {
  install(e) {
    e.component("VLayout", ao);
  }
}, Qs = /* @__PURE__ */ m({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(ye).Container, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Zs = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(ye).Row, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), en = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(ye).Col, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), io = { class: "v-pagination" }, ro = /* @__PURE__ */ m({
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
    return (t, o) => (i(), p("div", io));
  }
}), uo = {
  install(e) {
    e.component("VPagination", ro);
  }
}, co = { class: "v-placeholder" }, mo = /* @__PURE__ */ m({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (i(), p("div", co, [
      d(t.$slots, "default")
    ]));
  }
}), fo = {
  install(e) {
    e.component("VPlaceholder", mo);
  }
}, po = /* @__PURE__ */ m({
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
    return (n, a) => (i(), f(l(nt).Root, x(o, j(s)), {
      default: r(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vo = {
  install(e) {
    e.component("VScrollbar", po);
  }
}, ho = /* @__PURE__ */ m({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: P(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), _o = {
  install(e) {
    e.component("VSpinner", ho);
  }
}, Ye = /* @__PURE__ */ Symbol("VTabsContextKey"), Vo = () => Ze(Ye, null);
function go() {
  const e = H([]);
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
function yo(e) {
  const t = et(), o = y(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const bo = { class: "v-tabs" }, $o = { class: "v-tabs__content" }, To = /* @__PURE__ */ m({
  __name: "VTabs",
  props: /* @__PURE__ */ B({
    scrollable: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ B(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = S(e, "modelValue"), {
      tabs: a,
      registerTab: u,
      unregisterTab: c
    } = go();
    function v(h) {
      n.value = h, s("change", h);
    }
    return ge(Ye, {
      props: o,
      modelValue: n,
      tabs: a,
      handleChange: v,
      registerTab: u,
      unregisterTab: c
    }), (h, g) => (i(), p("div", bo, [
      V("div", $o, [
        d(h.$slots, "default")
      ])
    ]));
  }
}), Bo = /* @__PURE__ */ m({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = M(), s = Vo(), { id: n, isActive: a } = yo({
      context: s,
      props: t
    }), u = tt({
      id: n,
      props: t,
      slots: o
    });
    return s?.registerTab(u), ot(() => {
      s?.unregisterTab(u);
    }), (c, v) => re((i(), p("div", {
      class: P(["v-tab", {
        "v-tab--active": l(a)
      }])
    }, [
      d(c.$slots, "default", { isActive: l(a) })
    ], 2)), [
      [ue, l(a)]
    ]);
  }
}), wo = {
  install(e) {
    e.component("VTabs", To), e.component("VTab", Bo);
  }
}, Co = /* @__PURE__ */ m({
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
    return (n, a) => (i(), f(l(Ee).Root, x(o, j(s)), {
      default: r(() => [
        d(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xo = /* @__PURE__ */ m({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Ee).Group, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), So = {
  install(e) {
    e.component("VTag", Co);
  }
}, tn = {
  install(e) {
    e.component("VTagGroup", xo);
  }
}, Po = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(at).Root, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ko = {
  install(e) {
    e.component("VText", Po);
  }
}, Io = /* @__PURE__ */ m({
  __name: "VForm",
  props: /* @__PURE__ */ B({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ B(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = S(e, "modelValue");
    return (a, u) => (i(), f(l(Y).Root, x({
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c)
    }, o, j(s)), {
      default: r((c) => [
        d(a.$slots, "default", b($(c)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Mo = {
  install(e) {
    e.component("VForm", Io);
  }
}, zo = /* @__PURE__ */ m({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = he(e, ["title"]), s = t, n = M();
    return (a, u) => (i(), f(l(Y).Item, x(o, j(s)), Le({
      default: r((c) => [
        d(a.$slots, "default", b($(c)))
      ]),
      footer: r((c) => [
        d(a.$slots, "footer", b($(c)), () => [
          _(l(Y).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      n.header ? {
        name: "header",
        fn: r((c) => [
          d(a.$slots, "header", b($(c)), () => [
            _(l(Y).ItemTitle, null, {
              default: r(() => [
                k(w(e.title) + " ", 1),
                c.isRequired ? (i(), f(l(Y).ItemRequired, { key: 0 })) : C("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), Ao = {
  install(e) {
    e.component("VFormItem", zo);
  }
}, Lo = /* @__PURE__ */ m({
  __name: "VCheckbox",
  props: /* @__PURE__ */ B({
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
    const t = e, o = S(e, "modelValue");
    return (s, n) => (i(), f(l(ee).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        _(l(ee).Indicator),
        _(l(ee).Title, null, {
          default: r(() => [
            d(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Oo = /* @__PURE__ */ m({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(ee).Group, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eo = {
  install(e) {
    e.component("VCheckbox", Lo);
  }
}, Ro = {
  install(e) {
    e.component("VCheckboxGroup", Oo);
  }
}, Ho = /* @__PURE__ */ m({
  __name: "VInput",
  props: /* @__PURE__ */ B({
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
    const t = e, o = M(), s = S(e, "modelValue");
    return (n, a) => (i(), f(l(L).Root, x(t, {
      modelValue: s.value,
      "onUpdate:modelValue": a[0] || (a[0] = (u) => s.value = u)
    }), {
      default: r((u) => [
        o?.before ? (i(), f(l(L).Before, { key: 0 }, {
          default: r(() => [
            d(n.$slots, "before", b($(u)))
          ]),
          _: 2
        }, 1024)) : C("", !0),
        _(l(L).Control, null, {
          default: r(() => [
            u.isTextarea ? (i(), f(l(L).Textarea, { key: 0 })) : (i(), f(l(L).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (i(), f(l(L).After, { key: 1 }, {
          default: r(() => [
            d(n.$slots, "after", b($(u)))
          ]),
          _: 2
        }, 1024)) : C("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Do = {
  install(e) {
    e.component("VInput", Ho);
  }
}, No = /* @__PURE__ */ m({
  __name: "VInputCode",
  props: /* @__PURE__ */ B({
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
    const t = e, o = S(e, "modelValue");
    return (s, n) => (i(), f(l(ke).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        (i(!0), p(U, null, Z(e.length, (a, u) => (i(), f(l(ke).Pin, {
          key: `pin-${u}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Fo = {
  install(e) {
    e.component("VInputCode", No);
  }
}, Yo = /* @__PURE__ */ m({
  __name: "VInputNumber",
  props: /* @__PURE__ */ B({
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
      default: lt
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = S(e, "modelValue");
    return (s, n) => (i(), f(l(Q).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        _(l(Q).Button, {
          action: l(Ie).DECREMENT
        }, null, 8, ["action"]),
        _(l(Q).Input),
        _(l(Q).Button, {
          action: l(Ie).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Go = {
  install(e) {
    e.component("VInputNumber", Yo);
  }
}, Uo = /* @__PURE__ */ m({
  __name: "VInputPassword",
  props: /* @__PURE__ */ B({
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
    const t = e, o = S(e, "modelValue");
    return (s, n) => (i(), f(l(it).Root, x({
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }, t), null, 16, ["modelValue"]));
  }
}), Xo = {
  install(e) {
    e.component("VInputPassword", Uo);
  }
}, qo = /* @__PURE__ */ m({
  __name: "VRadio",
  props: /* @__PURE__ */ B({
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
    const t = e, o = S(e, "modelValue");
    return (s, n) => (i(), f(l(te).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        _(l(te).Indicator),
        _(l(te).Title, null, {
          default: r(() => [
            d(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), jo = /* @__PURE__ */ m({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(te).Group, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wo = {
  install(e) {
    e.component("VRadio", qo);
  }
}, Ko = {
  install(e) {
    e.component("VRadioGroup", jo);
  }
}, Jo = /* @__PURE__ */ m({
  __name: "VSelect",
  props: /* @__PURE__ */ B({
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
  emits: /* @__PURE__ */ B(["change", "opened", "closed", "open", "close", "clear"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = S(e, "modelValue");
    return (a, u) => (i(), f(l(G).Root, x(o, {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (c) => n.value = c),
      onChange: u[1] || (u[1] = (c) => s("change", c)),
      onClose: u[2] || (u[2] = (c) => s("close")),
      onClear: u[3] || (u[3] = (c) => s("clear"))
    }), {
      default: r(() => [
        _(l(G).Value, null, {
          default: r(() => [
            d(a.$slots, "value")
          ]),
          _: 3
        }),
        _(l(G).Dropdown, null, {
          default: r(() => [
            _(l(G).Scrollbar, null, {
              default: r(() => [
                d(a.$slots, "default")
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
}), Qo = /* @__PURE__ */ m({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(G).Option, b($(t)), {
      default: r((n) => [
        d(o.$slots, "default", b($(n)))
      ]),
      _: 3
    }, 16));
  }
}), Zo = {
  install(e) {
    e.component("VSelect", Jo), e.component("VOption", Qo);
  }
}, es = /* @__PURE__ */ m({
  __name: "VSwitch",
  props: /* @__PURE__ */ B({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = S(e, "modelValue");
    return (s, n) => (i(), f(l(ve).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: r(() => [
        _(l(ve).Indicator),
        _(l(ve).Title, null, {
          default: r(() => [
            d(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ts = {
  install(e) {
    e.component("VSwitch", es);
  }
}, os = /* @__PURE__ */ m({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(rt).Root, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ss = {
  install(e) {
    e.component("VConfigProvider", os);
  }
}, ns = { class: "v-progress__value" }, as = {
  key: 0,
  class: "v-progress__label"
}, ls = /* @__PURE__ */ m({
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
      class: P(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      V("div", ns, [
        e.showValue ? (i(), p("div", as, [
          d(t.$slots, "default")
        ])) : C("", !0)
      ])
    ], 2));
  }
}), is = {
  install(e) {
    e.component("VProgress", ls);
  }
}, rs = /* @__PURE__ */ m({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = M();
    return (s, n) => (i(), f(l(Me).Root, b($(t)), {
      default: r(() => [
        o?.default ? (i(), f(l(Me).Content, { key: 0 }, {
          default: r(() => [
            d(s.$slots, "default")
          ]),
          _: 3
        })) : C("", !0)
      ]),
      _: 3
    }, 16));
  }
}), us = {
  install(e) {
    e.component("VDivider", rs);
  }
}, cs = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(Re).Root, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ds = /* @__PURE__ */ m({
  __name: "VFlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Re).Item, b($(t)), {
      default: r(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ms = {
  install(e) {
    e.component("VFlex", cs);
  }
}, on = {
  install(e) {
    e.component("VFlexItem", ds);
  }
};
function fs(e) {
  const t = H([]), o = H({
    prop: null,
    order: null
  }), s = y(() => e.columns.some((h) => !!h.title));
  function n() {
    t.value = [];
  }
  function a() {
    return t.value;
  }
  function u() {
    o.value = {
      prop: null,
      order: null
    };
  }
  function c(h, g) {
    o.value = {
      prop: h,
      order: g
    };
  }
  function v() {
    t.value.length === e.data.length ? n() : t.value = [...e.data];
  }
  return {
    isHeaderVisible: s,
    clearSelection: n,
    getSelectionRows: a,
    clearSort: u,
    sort: c,
    toggleAllSelection: v
  };
}
const ps = ce(() => import("./TableRow-C3Xaqap4.js")), vs = ce(() => import("./TableEmpty-dS3NkGvA.js")), hs = ce(() => import("./TableBodyCell-CIgMwdLj.js")), _s = ce(() => import("./TableHeaderCell-B_QoAtiH.js")), Vs = /* @__PURE__ */ Symbol("VTableContextKey"), gs = { class: "v-table" }, ys = {
  key: 0,
  class: "v-table__native"
}, bs = { key: 0 }, $s = /* @__PURE__ */ m({
  __name: "VTable",
  props: {
    columns: {},
    data: {},
    tableLayout: {},
    scrollable: { type: Boolean },
    stripe: { type: Boolean }
  },
  emits: ["select", "select:all", "sort"],
  setup(e, { expose: t }) {
    const o = e, {
      isHeaderVisible: s,
      clearSelection: n,
      getSelectionRows: a,
      clearSort: u,
      sort: c,
      toggleAllSelection: v
    } = fs(o);
    return ge(Vs, {
      props: o
    }), t({
      clearSelection: n,
      getSelectionRows: a,
      clearSort: u,
      sort: c,
      toggleAllSelection: v
    }), (h, g) => (i(), p("div", gs, [
      e.data.length ? (i(), p("table", ys, [
        l(s) ? (i(), p("thead", bs, [
          V("tr", null, [
            (i(!0), p(U, null, Z(e.columns, (T) => (i(), f(l(_s), {
              key: T.prop
            }, {
              default: r(() => [
                k(w(T.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : C("", !0),
        V("tbody", null, [
          (i(!0), p(U, null, Z(e.data, (T, I) => (i(), f(l(ps), {
            key: `row-${I}`
          }, {
            default: r(() => [
              (i(!0), p(U, null, Z(e.columns, (z) => (i(), f(l(hs), {
                key: `row-${I}-${String(z.prop)}`
              }, {
                default: r(() => [
                  d(h.$slots, String(z.prop), { row: T }, () => [
                    k(w(T[z.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (i(), f(l(vs), { key: 1 }, {
        default: r(() => [
          d(h.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), Ts = {
  install(e) {
    e.component("VTable", $s);
  }
}, Bs = /* @__PURE__ */ m({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (i(), f(l(L).Group, null, {
      default: r(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ws = /* @__PURE__ */ m({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (i(), f(l(L).GroupAddon, null, {
      default: r(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Cs = {
  install(e) {
    e.component("VInputGroup", Bs), e.component("VInputGroupAddon", ws);
  }
}, oe = 1e3, se = 60 * oe, ne = 60 * se, ze = 24 * ne, Ge = Date.now(), Ue = 1e3;
function xs(e) {
  const [t, o] = q(), [s, n] = q(), a = H(0), u = H(0), c = H(0), v = y(() => e.props.now || Ge), h = y(() => e.props.interval || Ue), g = y(() => 0), T = y(() => 0), I = y(() => Math.floor(a.value / ze)), z = y(() => Math.floor(a.value % ze / ne)), W = y(() => Math.floor(a.value % ne / se)), K = y(() => Math.floor(a.value % se / oe)), E = y(() => Math.floor(a.value % oe)), $e = y(() => Math.floor(a.value / ne)), qe = y(() => Math.floor(a.value / se)), je = y(() => Math.floor(a.value / oe));
  function me() {
    t.value || (o(!0), e.props?.autoStart || (a.value = e.props.start, u.value = v.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && fe());
  }
  function N() {
    cancelAnimationFrame(c.value), c.value = 0;
  }
  function We() {
    t.value && (Be(), a.value > 0 && e.onProgress?.({
      days: I.value,
      hours: z.value,
      minutes: W.value,
      seconds: K.value,
      milliseconds: E.value,
      totalDays: I.value,
      totalHours: $e.value,
      totalMinutes: qe.value,
      totalSeconds: je.value,
      totalMilliseconds: a.value
    }), fe());
  }
  function fe() {
    if (!t.value)
      return;
    const O = Math.min(a.value, h.value);
    if (O > 0) {
      let Ce = function(F) {
        pe || (pe = F), J || (J = F);
        const xe = F - pe;
        xe >= O || xe + (F - J) / 2 >= O ? We() : c.value = requestAnimationFrame(Ce), J = F;
      }, pe, J;
      c.value = requestAnimationFrame(Ce);
    } else
      Te();
  }
  function Ke() {
    t.value && (N(), o(!1), e.onAbort?.());
  }
  function Te() {
    t.value && (N(), a.value = 0, o(!1), e.onEnd?.());
  }
  function Be() {
    t.value && (a.value = Math.max(0, u.value - v.value));
  }
  function Je() {
    N(), a.value = e.props.start, u.value = v.value + e.props.start, o(!1), me();
  }
  function we() {
    switch (document.visibilityState) {
      case "visible":
        c.value === 0 && s.value && (Be(), fe()), n(!1);
        break;
      case "hidden":
        c.value > 0 && (n(!0), N());
        break;
    }
  }
  return _e(() => {
    document.addEventListener("visibilitychange", we);
  }), Ae(() => {
    document.removeEventListener("visibilitychange", we), N();
  }), ie(() => e.props, (O) => {
    a.value = O.start, u.value = v.value + O.start, O.autoStart && me();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: g,
    months: T,
    days: I,
    hours: z,
    minutes: W,
    seconds: K,
    milliseconds: E,
    start: me,
    abort: Ke,
    end: Te,
    restart: Je
  };
}
const Ss = { class: "v-countdown" }, Ps = /* @__PURE__ */ m({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => Ue },
    start: {},
    now: { default: () => Ge }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, {
      years: a,
      months: u,
      days: c,
      hours: v,
      minutes: h,
      seconds: g,
      milliseconds: T,
      start: I,
      abort: z,
      end: W,
      restart: K
    } = xs({
      props: s,
      onAbort: () => n("abort"),
      onEnd: () => n("end"),
      onProgress: (E) => n("progress", E),
      onStart: () => n("start")
    });
    return t({
      start: I,
      abort: z,
      end: W,
      restart: K
    }), (E, $e) => (i(), p("div", Ss, [
      d(E.$slots, "default", {
        years: l(a),
        months: l(u),
        days: l(c),
        hours: l(v),
        minutes: l(h),
        seconds: l(g),
        milliseconds: l(T)
      })
    ]));
  }
}), ks = {
  install(e) {
    e.component("VCountdown", Ps);
  }
}, Is = { class: "v-calendar" }, Ms = /* @__PURE__ */ m({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", Is));
  }
}), zs = {
  install(e) {
    e.component("VCalendar", Ms);
  }
}, sn = {
  install(e) {
    e.use(pt), e.use(Mt), e.use($t), e.use(Tt), e.use(Ht), e.use(Lt), e.use(dt), e.use(Ft), e.use(ss), e.use(Xt), e.use(Ut), e.use(Qt), e.use(oo), e.use(no), e.use(uo), e.use(fo), e.use(vo), e.use(_o), e.use(wo), e.use(So), e.use(ko), e.use(lo), e.use(Mo), e.use(Ao), e.use(Do), e.use(Eo), e.use(Ro), e.use(Xo), e.use(Go), e.use(Fo), e.use(Wo), e.use(Ko), e.use(ts), e.use(Zo), e.use(qt), e.use(St), e.use(is), e.use(us), e.use(ms), e.use(Ts), e.use(Cs), e.use(ks), e.use(zs);
  }
}, As = { class: "v-confirm__header" }, Ls = { class: "v-confirm__title" }, Os = { class: "v-confirm__body" }, Es = {
  key: 0,
  class: "v-confirm__text"
}, Rs = ["innerHTML"], Hs = { class: "v-confirm__footer" }, Ds = /* @__PURE__ */ m({
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
    return (s, n) => (i(), f(l(be), null, {
      default: r(() => [
        V("div", {
          class: P(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          V("div", As, [
            V("div", Ls, w(e.title), 1),
            V("button", {
              type: "button",
              onClick: n[0] || (n[0] = (a) => o("close"))
            }, " X ")
          ]),
          V("div", Os, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, Rs)) : (i(), p("div", Es, w(e.message), 1))
          ]),
          V("div", Hs, [
            V("button", {
              type: "button",
              onClick: n[1] || (n[1] = (a) => o("success"))
            }, w(e.confirmText), 1),
            V("button", {
              type: "button",
              onClick: n[2] || (n[2] = (a) => o("cancel"))
            }, w(e.cancelText), 1)
          ])
        ], 2)
      ]),
      _: 1
    }));
  }
});
class nn {
  static #e = null;
  static async open(t, o) {
    return new Promise((s) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const n = (u) => {
        try {
          this.close(), s(u);
        } catch (c) {
          console.error(c), s(!1);
        }
      }, a = de(Ds, {
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
      X(a, this.#e);
    });
  }
  static close() {
    this.#e && X(null, this.#e);
  }
}
const an = {
  install() {
  }
}, Xe = 1500;
function Ns(e) {
  const t = y(() => D(e.props.duration) ? e.props.duration : Xe), [o, s] = q(!1);
  let n = null;
  function a() {
    n && clearTimeout(n);
  }
  function u() {
    a(), t.value !== 0 && (n = setTimeout(() => {
      s(!1);
    }, t.value));
  }
  return _e(() => {
    u(), s(!0);
  }), {
    isVisible: o,
    setVisible: s,
    clearTimer: a,
    startTimer: u
  };
}
const Fs = { class: "v-toast__header" }, Ys = { class: "v-toast__title" }, Gs = { class: "v-toast__body" }, Us = {
  key: 0,
  class: "v-toast__text"
}, Xs = ["innerHTML"], qs = /* @__PURE__ */ m({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: Xe },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, s = t, { isVisible: n, setVisible: a, startTimer: u, clearTimer: c } = Ns({
      props: o
    });
    return (v, h) => (i(), f(Ve, {
      name: "fade-in-up",
      onAfterLeave: h[3] || (h[3] = (g) => s("close"))
    }, {
      default: r(() => [
        re(V("div", {
          class: P(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: h[1] || (h[1] = //@ts-ignore
          (...g) => l(c) && l(c)(...g)),
          onMouseleave: h[2] || (h[2] = //@ts-ignore
          (...g) => l(u) && l(u)(...g))
        }, [
          V("div", Fs, [
            V("div", Ys, w(e.title), 1),
            e.clearable ? (i(), p("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: h[0] || (h[0] = (g) => l(a)(!1))
            }, " X ")) : C("", !0)
          ]),
          V("div", Gs, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, Xs)) : (i(), p("div", Us, w(e.message), 1))
          ])
        ], 34), [
          [ue, l(n)]
        ])
      ]),
      _: 1
    }));
  }
});
class ln {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const s = de(qs, {
      ...t,
      appContext: o
    });
    X(s, this.#e);
  }
}
class rn {
  static open(t, o) {
    const s = de(Ne, {
      ...t,
      appContext: o
    });
    X(s, document.body);
  }
}
class un {
  static open(t, o) {
    const s = de(Fe, {
      ...t,
      appContext: o
    });
    X(s, document.body);
  }
}
const cn = {
  name: "ru",
  vau: {}
}, dn = {
  name: "en",
  vau: {}
};
export {
  Po as $,
  pt as A,
  dt as B,
  Ft as C,
  Qt as D,
  so as E,
  no as F,
  ao as G,
  ro as H,
  Ut as I,
  mo as J,
  fo as K,
  lo as L,
  Xt as M,
  po as N,
  ho as O,
  uo as P,
  _o as Q,
  To as R,
  vo as S,
  Bo as T,
  wo as U,
  bt as V,
  Co as W,
  xo as X,
  So as Y,
  tn as Z,
  _t as _,
  Qs as a,
  ko as a0,
  Io as a1,
  Mo as a2,
  zo as a3,
  Ao as a4,
  Lo as a5,
  Oo as a6,
  Eo as a7,
  Ro as a8,
  Ho as a9,
  ms as aA,
  on as aB,
  $s as aC,
  Ts as aD,
  Bs as aE,
  ws as aF,
  Cs as aG,
  Ps as aH,
  ks as aI,
  Ms as aJ,
  zs as aK,
  sn as aL,
  nn as aM,
  an as aN,
  ln as aO,
  rn as aP,
  un as aQ,
  cn as aR,
  dn as aS,
  Do as aa,
  No as ab,
  Fo as ac,
  Yo as ad,
  Go as ae,
  Uo as af,
  Xo as ag,
  qo as ah,
  jo as ai,
  Wo as aj,
  Ko as ak,
  Jo as al,
  Qo as am,
  Zo as an,
  es as ao,
  ts as ap,
  os as aq,
  ss as ar,
  be as as,
  qt as at,
  ls as au,
  is as av,
  rs as aw,
  us as ax,
  cs as ay,
  ds as az,
  Zs as b,
  en as c,
  ut as d,
  ct as e,
  Ks as f,
  mt as g,
  ft as h,
  ht as i,
  $t as j,
  Tt as k,
  xt as l,
  St as m,
  It as n,
  Mt as o,
  At as p,
  Lt as q,
  Rt as r,
  Ht as s,
  Nt as t,
  Gt as u,
  Ne as v,
  Fe as w,
  Js as x,
  to as y,
  oo as z
};
