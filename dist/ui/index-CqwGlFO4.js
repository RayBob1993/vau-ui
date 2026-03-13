import { defineComponent as c, createBlock as p, openBlock as i, unref as l, normalizeProps as B, guardReactiveProps as w, withCtx as d, renderSlot as u, mergeModels as $, useModel as P, mergeProps as k, toHandlers as X, createPropsRestProxy as ke, createVNode as b, createTextVNode as I, toDisplayString as T, createElementBlock as f, normalizeClass as C, createCommentVNode as x, useSlots as L, computed as g, createElementVNode as V, Fragment as G, shallowRef as we, onMounted as he, onBeforeUnmount as Se, watch as W, useTemplateRef as le, Teleport as Ie, Transition as re, withDirectives as R, vShow as j, provide as _e, inject as We, ref as H, useId as je, reactive as Ke, onUnmounted as Je, resolveDynamicComponent as Qe, createSlots as Ze, renderList as ee, defineAsyncComponent as ue, h as ce, render as U } from "vue";
import { Button as ze, Accordion as E, isUndefined as et, isNumber as D, useToggle as q, Grid as Ve, Scrollbar as tt, Tag as Me, Form as Y, Checkbox as te, Input as M, InputCode as Ce, InputNumber as Z, INPUT_NUMBER_ACTIONS as xe, INPUT_NUMBER_VALUE_DEFAULT as ot, InputPassword as st, Radio as oe, Switch as ve, ConfigProvider as nt } from "@vau/core";
const at = /* @__PURE__ */ c({
  __name: "VButton",
  props: {
    loading: { type: Boolean },
    disabled: { type: Boolean },
    plain: { type: Boolean },
    wide: { type: Boolean },
    type: { default: "button" },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(ze).Root, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lt = /* @__PURE__ */ c({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(ze).Group, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), it = {
  install(e) {
    e.component("VButton", at);
  }
}, nn = {
  install(e) {
    e.component("VButtonGroup", lt);
  }
}, rt = /* @__PURE__ */ c({
  __name: "VAccordion",
  props: /* @__PURE__ */ $({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = P(e, "modelValue");
    return (a, r) => (i(), p(l(E).Root, k(o, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (m) => n.value = m)
    }, X(s)), {
      default: d(() => [
        u(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ut = /* @__PURE__ */ c({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = ke(e, ["title"]);
    return (o, s) => (i(), p(l(E).Item, B(w(t)), {
      default: d(({ isActive: n }) => [
        b(l(E).Header, null, {
          default: d(() => [
            b(l(E).Trigger, null, {
              default: d(() => [
                b(l(E).Title, null, {
                  default: d(() => [
                    u(o.$slots, "title", {}, () => [
                      I(T(e.title), 1)
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
        b(l(E).Body, null, {
          default: d(() => [
            u(o.$slots, "default", { isActive: n })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), ct = {
  install(e) {
    e.component("VAccordion", rt), e.component("VAccordionItem", ut);
  }
}, dt = {
  key: 0,
  class: "v-avatar__label"
}, mt = /* @__PURE__ */ c({
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
    return (t, o) => (i(), f("div", {
      class: C(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (i(), f("div", dt, T(e.label), 1)) : x("", !0)
    ], 2));
  }
}), ft = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, pt = {}, vt = { class: "v-avatar-group" };
function ht(e, t) {
  return i(), f("div", vt, [
    u(e.$slots, "default")
  ]);
}
const _t = /* @__PURE__ */ ft(pt, [["render", ht]]), Vt = {
  install(e) {
    e.component("VAvatar", mt);
  }
}, gt = {
  install(e) {
    e.component("VAvatarGroup", _t);
  }
}, bt = { class: "v-alert__content" }, yt = {
  key: 0,
  class: "v-alert__title"
}, $t = {
  key: 1,
  class: "v-alert__description"
}, Tt = /* @__PURE__ */ c({
  __name: "VAlert",
  props: {
    title: {},
    description: {},
    showIcon: { type: Boolean },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = L(), s = g(() => !!t.title || !!o?.title), n = g(() => !!t.description || !!o?.description);
    return (a, r) => (i(), f("div", {
      class: C(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      V("div", bt, [
        o?.default ? u(a.$slots, "default", { key: 0 }) : (i(), f(G, { key: 1 }, [
          s.value ? (i(), f("div", yt, [
            u(a.$slots, "title", {}, () => [
              I(T(e.title), 1)
            ])
          ])) : x("", !0),
          n.value ? (i(), f("div", $t, [
            u(a.$slots, "description", {}, () => [
              I(T(e.description), 1)
            ])
          ])) : x("", !0)
        ], 64))
      ])
    ], 2));
  }
}), Bt = {
  install(e) {
    e.component("VAlert", Tt);
  }
}, Ae = 0, Le = 0, wt = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class ie {
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
      ...wt,
      ...t
    };
  }
  #g() {
    this.#s = this.#e.innerWrapper, this.#a = this.#e.container, this.#h(), this.#p(), this.#b(), this.#m = !0;
  }
  #b() {
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
  #y() {
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
    return o.outer = ie.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = ie.extend({
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
      const r = D(a) ? "px" : "";
      return `${a}${r}`;
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
        o === "scroll" ? (this.#f(), this.#y(), this.#p()) : (this.#h(), this.#p(!0)), this.#r = !1;
      });
    })(t?.type));
  }
  destroy() {
    window.removeEventListener("resize", (t) => this.#d(t), { capture: !1 }), window.removeEventListener("scroll", (t) => this.#d(t), { capture: !1 }), this.#c?.disconnect(), this.#u?.disconnect(), this.#c = void 0, this.#u = void 0, this.#o.classList.remove(this.#e.affixClass), this.#o.removeAttribute("style"), this.#s.removeAttribute("style");
  }
  static extend(t, o) {
    const s = {};
    for (const n in t)
      et(o[n]) ? s[n] = t[n] : s[n] = o[n];
    return s;
  }
}
function Ct(e) {
  const t = we(), o = we(), s = g(() => D(e.props?.offsetTop) ? e.props.offsetTop : Ae), n = g(() => D(e.props?.offsetBottom) ? e.props.offsetBottom : Le);
  function a() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function r() {
    a(), e.root.value && t.value && e.content.value && (o.value = new ie(e.root.value, {
      offsetTop: s.value,
      offsetBottom: n.value,
      container: t.value,
      innerWrapper: e.content.value
    }));
  }
  function m() {
    o.value?.destroy(), o.value = void 0;
  }
  return he(() => {
    e.props.disabled || r();
  }), Se(() => {
    m();
  }), W(() => e.props.disabled, (_) => {
    _ ? m() : r();
  }), {};
}
const xt = /* @__PURE__ */ c({
  __name: "VAffix",
  props: {
    offsetTop: { default: Ae },
    offsetBottom: { default: Le },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = le("root"), s = le("content");
    return Ct({
      props: t,
      root: o,
      content: s
    }), (n, a) => (i(), f("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      V("div", {
        ref_key: "content",
        ref: s,
        class: "v-affix__content"
      }, [
        u(n.$slots, "default")
      ], 512)
    ], 512));
  }
}), Pt = {
  install(e) {
    e.component("VAffix", xt);
  }
}, kt = { class: "v-breadcrumbs" }, St = /* @__PURE__ */ c({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (i(), f("nav", kt));
  }
}), It = {
  install(e) {
    e.component("VBreadcrumbs", St);
  }
};
function zt(e) {
  return {
    content: g(() => e.props.dot ? "" : D(e.props.value) && D(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const Mt = {
  key: 0,
  class: "v-badge__content"
}, At = /* @__PURE__ */ c({
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
    const t = e, o = L(), { content: s } = zt({
      props: t
    }), n = g(() => !t.hidden && !!(s.value || t.dot || o?.content));
    return (a, r) => (i(), f("div", {
      class: C(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      u(a.$slots, "default"),
      n.value ? (i(), f("sup", Mt, [
        u(a.$slots, "content", { value: l(s) }, () => [
          I(T(l(s)), 1)
        ])
      ])) : x("", !0)
    ], 2));
  }
}), Lt = {
  install(e) {
    e.component("VBadge", At);
  }
}, Ot = { class: "v-collapse" }, Et = /* @__PURE__ */ c({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (i(), f("div", Ot, [
      u(t.$slots, "default")
    ]));
  }
}), Ht = {
  install(e) {
    e.component("VCollapse", Et);
  }
};
function Rt(e) {
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
const Dt = /* @__PURE__ */ c({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: s, handleOpen: n, handleClose: a } = Rt({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (r, m) => l(s) ? u(r.$slots, "content", {
      key: 1,
      close: l(a)
    }) : u(r.$slots, "display", {
      key: 0,
      open: l(n)
    });
  }
}), Nt = {
  install(e) {
    e.component("VInplace", Dt);
  }
}, de = /* @__PURE__ */ c({
  __name: "VOverlay",
  props: {
    mask: { type: Boolean, default: !0 },
    blur: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, o) => (i(), f("div", {
      class: C(["v-overlay", {
        "v-overlay--mask": e.mask,
        "v-overlay--blur": e.mask && e.blur
      }])
    }, [
      u(t.$slots, "default")
    ], 2));
  }
}), Ft = {
  install(e) {
    e.component("VOverlay", de);
  }
}, Yt = {
  key: 0,
  class: "v-modal__header"
}, Gt = { class: "v-modal__body" }, Ut = {
  key: 1,
  class: "v-modal__footer"
}, Oe = /* @__PURE__ */ c({
  __name: "VModal",
  props: /* @__PURE__ */ $({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = L(), a = P(e, "modelValue"), r = g(() => !!o.title || !!n?.header), m = g(() => !!n?.footer);
    function _() {
      a.value = !1;
    }
    function h(v) {
      s("opened", v);
    }
    function y(v) {
      s("closed", v);
    }
    return W(a, (v) => {
      s(v ? "open" : "close");
    }), (v, S) => (i(), p(Ie, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      b(re, {
        onAfterEnter: h,
        onAfterLeave: y
      }, {
        default: d(() => [
          b(l(de), null, {
            default: d(() => [
              R(V("div", {
                class: C(["v-modal", {
                  "v-modal--open": a.value
                }]),
                role: "dialog"
              }, [
                r.value ? (i(), f("div", Yt, [
                  u(v.$slots, "header", { close: _ }, () => [
                    I(T(e.title), 1)
                  ]),
                  V("button", {
                    class: "v-modal__close-button",
                    type: "button",
                    onClick: _
                  }, " x ")
                ])) : x("", !0),
                V("div", Gt, [
                  u(v.$slots, "default", { close: _ })
                ]),
                m.value ? (i(), f("div", Ut, [
                  u(v.$slots, "footer", { close: _ })
                ])) : x("", !0)
              ], 2), [
                [j, a.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), qt = {
  install(e) {
    e.component("VModal", Oe);
  }
}, Xt = { class: "v-drawer__dialog" }, Wt = {
  key: 0,
  class: "v-drawer__header"
}, jt = { class: "v-drawer__body" }, Kt = {
  key: 1,
  class: "v-drawer__footer"
}, Ee = /* @__PURE__ */ c({
  __name: "VDrawer",
  props: /* @__PURE__ */ $({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = L(), a = P(e, "modelValue"), r = g(() => !!o.title || !!n?.header), m = g(() => !!n?.footer);
    function _() {
      a.value = !1;
    }
    function h(v) {
      s("opened", v);
    }
    function y(v) {
      s("closed", v);
    }
    return W(a, (v) => {
      s(v ? "open" : "close");
    }), (v, S) => (i(), p(Ie, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      b(re, {
        onAfterEnter: h,
        onAfterLeave: y
      }, {
        default: d(() => [
          b(l(de), null, {
            default: d(() => [
              R(V("div", {
                class: C(["v-drawer", {
                  "v-drawer--open": a.value
                }]),
                role: "dialog"
              }, [
                V("div", Xt, [
                  r.value ? (i(), f("div", Wt, [
                    u(v.$slots, "header", { close: _ }, () => [
                      I(T(e.title), 1)
                    ]),
                    V("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: _
                    }, " x ")
                  ])) : x("", !0),
                  V("div", jt, [
                    u(v.$slots, "default", { close: _ })
                  ]),
                  m.value ? (i(), f("div", Kt, [
                    u(v.$slots, "footer", { close: _ })
                  ])) : x("", !0)
                ])
              ], 2), [
                [j, a.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), Jt = {
  install(e) {
    e.component("VDrawer", Ee);
  }
};
function an() {
  return {};
}
const Qt = /* @__PURE__ */ Symbol("VDropdownContextKey"), Zt = {
  mounted() {
  },
  unmounted() {
  }
}, eo = {
  install(e) {
    e.directive("visible", Zt);
  }
}, to = {
  mounted() {
  },
  unmounted() {
  }
}, oo = {
  install(e) {
    e.directive("loading", to);
  }
}, He = {
  mounted() {
  },
  unmounted() {
  }
}, so = {
  install(e) {
    e.directive("click-outside", He);
  }
}, no = {
  mounted() {
  },
  unmounted() {
  }
}, ao = {
  install(e) {
    e.directive("tooltip", no);
  }
}, lo = { class: "v-dropdown__menu" }, io = /* @__PURE__ */ c({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, [a, r, m] = q(), _ = () => r(!1);
    function h(v) {
      n("opened", v);
    }
    function y(v) {
      n("opened", v);
    }
    return W(a, (v) => {
      n(v ? "open" : "close");
    }), t({
      setVisible: r,
      isVisible: a
    }), _e(Qt, {
      props: s
    }), (v, S) => R((i(), f("div", {
      class: C(["v-dropdown", {
        "v-dropdown--open": l(a)
      }])
    }, [
      u(v.$slots, "trigger", {
        isVisible: l(a),
        toggle: l(m),
        setVisible: l(r)
      }),
      b(re, {
        onAfterEnter: h,
        onAfterLeave: y
      }, {
        default: d(() => [
          R(V("div", lo, [
            u(v.$slots, "default")
          ], 512), [
            [j, l(a)]
          ])
        ]),
        _: 3
      })
    ], 2)), [
      [l(He), _]
    ]);
  }
}), ro = {
  install(e) {
    e.component("VDropdown", io);
  }
}, uo = /* @__PURE__ */ c({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = le("image"), o = le("root");
    return (s, n) => (i(), f("figure", {
      ref_key: "root",
      ref: o,
      class: C(["v-image", [
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
}), co = {
  install(e) {
    e.component("VImage", uo);
  }
}, mo = /* @__PURE__ */ c({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(Ve).Container, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fo = {
  install(e) {
    e.component("VContainer", mo);
  }
}, po = /* @__PURE__ */ c({
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
    return (o, s) => (i(), p(l(Ve).Col, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vo = {
  install(e) {
    e.component("VCol", po);
  }
}, ho = /* @__PURE__ */ c({
  __name: "VRow",
  props: {
    guttersX: { type: Boolean },
    guttersY: { type: Boolean },
    align: {},
    justify: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(Ve).Row, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _o = {
  install(e) {
    e.component("VRow", ho);
  }
}, Vo = { class: "v-pagination" }, go = /* @__PURE__ */ c({
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
    return (t, o) => (i(), f("div", Vo));
  }
}), bo = {
  install(e) {
    e.component("VPagination", go);
  }
}, yo = { class: "v-placeholder" }, $o = /* @__PURE__ */ c({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (i(), f("div", yo, [
      u(t.$slots, "default")
    ]));
  }
}), To = {
  install(e) {
    e.component("VPlaceholder", $o);
  }
}, Bo = /* @__PURE__ */ c({
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
    return (n, a) => (i(), p(l(tt).Root, k(o, X(s)), {
      default: d(() => [
        u(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wo = {
  install(e) {
    e.component("VScrollbar", Bo);
  }
}, Co = /* @__PURE__ */ c({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (i(), f("div", {
      class: C(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), xo = {
  install(e) {
    e.component("VSpinner", Co);
  }
}, Re = /* @__PURE__ */ Symbol("VTabsContextKey"), Po = () => We(Re, null);
function ko() {
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
function So(e) {
  const t = je(), o = g(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const Io = { class: "v-tabs" }, zo = { class: "v-tabs__content" }, Mo = /* @__PURE__ */ c({
  __name: "VTabs",
  props: /* @__PURE__ */ $({
    scrollable: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = P(e, "modelValue"), {
      tabs: a,
      registerTab: r,
      unregisterTab: m
    } = ko();
    function _(h) {
      n.value = h, s("change", h);
    }
    return _e(Re, {
      props: o,
      modelValue: n,
      tabs: a,
      handleChange: _,
      registerTab: r,
      unregisterTab: m
    }), (h, y) => (i(), f("div", Io, [
      V("div", zo, [
        u(h.$slots, "default")
      ])
    ]));
  }
}), Ao = /* @__PURE__ */ c({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = L(), s = Po(), { id: n, isActive: a } = So({
      context: s,
      props: t
    }), r = Ke({
      id: n,
      props: t,
      slots: o
    });
    return s?.registerTab(r), Je(() => {
      s?.unregisterTab(r);
    }), (m, _) => R((i(), f("div", {
      class: C(["v-tab", {
        "v-tab--active": l(a)
      }])
    }, [
      u(m.$slots, "default", { isActive: l(a) })
    ], 2)), [
      [j, l(a)]
    ]);
  }
}), Lo = {
  install(e) {
    e.component("VTabs", Mo), e.component("VTab", Ao);
  }
}, Oo = /* @__PURE__ */ c({
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
    return (n, a) => (i(), p(l(Me).Root, k(o, X(s)), {
      default: d(() => [
        u(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Eo = /* @__PURE__ */ c({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(Me).Group, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ho = {
  install(e) {
    e.component("VTag", Oo);
  }
}, ln = {
  install(e) {
    e.component("VTagGroup", Eo);
  }
}, Ro = ["innerHTML"], Do = /* @__PURE__ */ c({
  __name: "VText",
  props: {
    tag: { default: "div" },
    uppercase: { type: Boolean },
    underline: { type: Boolean },
    content: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), p(Qe(e.tag), {
      class: C(["v-text", {
        "v-text--uppercase": e.uppercase,
        "v-text--underline": e.underline,
        [`v-text--size-${e.size}`]: e.size,
        [`v-text--theme-${e.theme}`]: e.theme
      }])
    }, {
      default: d(() => [
        e.content ? (i(), f("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, Ro)) : u(t.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), No = {
  install(e) {
    e.component("VText", Do);
  }
}, Fo = /* @__PURE__ */ c({
  __name: "VForm",
  props: /* @__PURE__ */ $({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ $(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, s = t, n = P(e, "modelValue");
    return (a, r) => (i(), p(l(Y).Root, k({
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (m) => n.value = m)
    }, o, X(s)), {
      default: d((m) => [
        u(a.$slots, "default", B(w(m)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Yo = {
  install(e) {
    e.component("VForm", Fo);
  }
}, Go = /* @__PURE__ */ c({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = ke(e, ["title"]), s = t, n = L();
    return (a, r) => (i(), p(l(Y).Item, k(o, X(s)), Ze({
      default: d((m) => [
        u(a.$slots, "default", B(w(m)))
      ]),
      footer: d((m) => [
        u(a.$slots, "footer", B(w(m)), () => [
          b(l(Y).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      n.header ? {
        name: "header",
        fn: d((m) => [
          u(a.$slots, "header", B(w(m)), () => [
            b(l(Y).ItemTitle, null, {
              default: d(() => [
                I(T(e.title) + " ", 1),
                m.isRequired ? (i(), p(l(Y).ItemRequired, { key: 0 })) : x("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), Uo = {
  install(e) {
    e.component("VFormItem", Go);
  }
}, qo = /* @__PURE__ */ c({
  __name: "VCheckbox",
  props: /* @__PURE__ */ $({
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
    return (s, n) => (i(), p(l(te).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: d(() => [
        b(l(te).Indicator),
        b(l(te).Title, null, {
          default: d(() => [
            u(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Xo = /* @__PURE__ */ c({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(te).Group, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wo = {
  install(e) {
    e.component("VCheckbox", qo);
  }
}, jo = {
  install(e) {
    e.component("VCheckboxGroup", Xo);
  }
}, Ko = /* @__PURE__ */ c({
  __name: "VInput",
  props: /* @__PURE__ */ $({
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
    const t = e, o = L(), s = P(e, "modelValue");
    return (n, a) => (i(), p(l(M).Root, k(t, {
      modelValue: s.value,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => s.value = r)
    }), {
      default: d((r) => [
        o?.before ? (i(), p(l(M).Before, { key: 0 }, {
          default: d(() => [
            u(n.$slots, "before", B(w(r)))
          ]),
          _: 2
        }, 1024)) : x("", !0),
        b(l(M).Control, null, {
          default: d(() => [
            r.isTextarea ? (i(), p(l(M).Textarea, { key: 0 })) : (i(), p(l(M).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (i(), p(l(M).After, { key: 1 }, {
          default: d(() => [
            u(n.$slots, "after", B(w(r)))
          ]),
          _: 2
        }, 1024)) : x("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Jo = {
  install(e) {
    e.component("VInput", Ko);
  }
}, Qo = /* @__PURE__ */ c({
  __name: "VInputCode",
  props: /* @__PURE__ */ $({
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
    return (s, n) => (i(), p(l(Ce).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: d(() => [
        (i(!0), f(G, null, ee(e.length, (a, r) => (i(), p(l(Ce).Pin, {
          key: `pin-${r}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Zo = {
  install(e) {
    e.component("VInputCode", Qo);
  }
}, es = /* @__PURE__ */ c({
  __name: "VInputNumber",
  props: /* @__PURE__ */ $({
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
      default: ot
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), p(l(Z).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: d(() => [
        b(l(Z).Button, {
          action: l(xe).DECREMENT
        }, null, 8, ["action"]),
        b(l(Z).Input),
        b(l(Z).Button, {
          action: l(xe).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), ts = {
  install(e) {
    e.component("VInputNumber", es);
  }
}, os = /* @__PURE__ */ c({
  __name: "VInputPassword",
  props: /* @__PURE__ */ $({
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
    return (s, n) => (i(), p(l(st).Root, k({
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }, t), null, 16, ["modelValue"]));
  }
}), ss = {
  install(e) {
    e.component("VInputPassword", os);
  }
}, ns = /* @__PURE__ */ c({
  __name: "VRadio",
  props: /* @__PURE__ */ $({
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
    return (s, n) => (i(), p(l(oe).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: d(() => [
        b(l(oe).Indicator),
        b(l(oe).Title, null, {
          default: d(() => [
            u(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), as = /* @__PURE__ */ c({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(oe).Group, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ls = {
  install(e) {
    e.component("VRadio", ns);
  }
}, is = {
  install(e) {
    e.component("VRadioGroup", as);
  }
}, rs = /* @__PURE__ */ c({
  __name: "VSwitch",
  props: /* @__PURE__ */ $({
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
    return (s, n) => (i(), p(l(ve).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: d(() => [
        b(l(ve).Indicator),
        b(l(ve).Title, null, {
          default: d(() => [
            u(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), us = {
  install(e) {
    e.component("VSwitch", rs);
  }
}, cs = /* @__PURE__ */ c({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), p(l(nt).Root, B(w(t)), {
      default: d(() => [
        u(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ds = {
  install(e) {
    e.component("VConfigProvider", cs);
  }
}, ms = { class: "v-progress__value" }, fs = {
  key: 0,
  class: "v-progress__label"
}, ps = /* @__PURE__ */ c({
  __name: "VProgress",
  props: {
    indeterminate: { type: Boolean },
    showValue: { type: Boolean, default: !0 },
    value: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), f("div", {
      class: C(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      V("div", ms, [
        e.showValue ? (i(), f("div", fs, [
          u(t.$slots, "default")
        ])) : x("", !0)
      ])
    ], 2));
  }
}), vs = {
  install(e) {
    e.component("VProgress", ps);
  }
}, hs = { class: "v-divider" }, _s = /* @__PURE__ */ c({
  __name: "VDivider",
  setup(e) {
    return (t, o) => (i(), f("div", hs, [
      u(t.$slots, "default")
    ]));
  }
}), Vs = {
  install(e) {
    e.component("VDivider", _s);
  }
}, gs = /* @__PURE__ */ c({
  __name: "VFlex",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: {},
    align: {},
    justify: {},
    direction: {}
  },
  setup(e) {
    return (t, o) => (i(), f("div", {
      class: C(["v-flex", {
        [`v-flex--justify-${e.justify}`]: e.justify,
        [`v-flex--align-${e.align}`]: e.align,
        [`v-flex--direction-${e.direction}`]: e.direction,
        "v-flex--no-wrap": !e.wrap
      }])
    }, [
      u(t.$slots, "default")
    ], 2));
  }
}), bs = {
  install(e) {
    e.component("VFlex", gs);
  }
};
function ys(e) {
  const t = H([]), o = H({
    prop: null,
    order: null
  }), s = g(() => e.columns.some((h) => !!h.title));
  function n() {
    t.value = [];
  }
  function a() {
    return t.value;
  }
  function r() {
    o.value = {
      prop: null,
      order: null
    };
  }
  function m(h, y) {
    o.value = {
      prop: h,
      order: y
    };
  }
  function _() {
    t.value.length === e.data.length ? n() : t.value = [...e.data];
  }
  return {
    isHeaderVisible: s,
    clearSelection: n,
    getSelectionRows: a,
    clearSort: r,
    sort: m,
    toggleAllSelection: _
  };
}
const $s = ue(() => import("./TableRow-C4GksJlG.js")), Ts = ue(() => import("./TableEmpty-ZovTF4uD.js")), Bs = ue(() => import("./TableBodyCell-ClUcxQ7u.js")), ws = ue(() => import("./TableHeaderCell-BC__GOke.js")), Cs = /* @__PURE__ */ Symbol("VTableContextKey"), xs = { class: "v-table" }, Ps = {
  key: 0,
  class: "v-table__native"
}, ks = { key: 0 }, Ss = /* @__PURE__ */ c({
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
      clearSort: r,
      sort: m,
      toggleAllSelection: _
    } = ys(o);
    return _e(Cs, {
      props: o
    }), t({
      clearSelection: n,
      getSelectionRows: a,
      clearSort: r,
      sort: m,
      toggleAllSelection: _
    }), (h, y) => (i(), f("div", xs, [
      e.data.length ? (i(), f("table", Ps, [
        l(s) ? (i(), f("thead", ks, [
          V("tr", null, [
            (i(!0), f(G, null, ee(e.columns, (v) => (i(), p(l(ws), {
              key: v.prop
            }, {
              default: d(() => [
                I(T(v.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : x("", !0),
        V("tbody", null, [
          (i(!0), f(G, null, ee(e.data, (v, S) => (i(), p(l($s), {
            key: `row-${S}`
          }, {
            default: d(() => [
              (i(!0), f(G, null, ee(e.columns, (z) => (i(), p(l(Bs), {
                key: `row-${S}-${String(z.prop)}`
              }, {
                default: d(() => [
                  u(h.$slots, String(z.prop), { row: v }, () => [
                    I(T(v[z.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (i(), p(l(Ts), { key: 1 }, {
        default: d(() => [
          u(h.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), Is = {
  install(e) {
    e.component("VTable", Ss);
  }
}, zs = /* @__PURE__ */ c({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (i(), p(l(M).Group, null, {
      default: d(() => [
        u(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ms = /* @__PURE__ */ c({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (i(), p(l(M).GroupAddon, null, {
      default: d(() => [
        u(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), As = {
  install(e) {
    e.component("VInputGroup", zs), e.component("VInputGroupAddon", Ms);
  }
}, se = 1e3, ne = 60 * se, ae = 60 * ne, Pe = 24 * ae, De = Date.now(), Ne = 1e3;
function Ls(e) {
  const [t, o] = q(), [s, n] = q(), a = H(0), r = H(0), m = H(0), _ = g(() => e.props.now || De), h = g(() => e.props.interval || Ne), y = g(() => 0), v = g(() => 0), S = g(() => Math.floor(a.value / Pe)), z = g(() => Math.floor(a.value % Pe / ae)), K = g(() => Math.floor(a.value % ae / ne)), J = g(() => Math.floor(a.value % ne / se)), O = g(() => Math.floor(a.value % se)), ge = g(() => Math.floor(a.value / ae)), Ye = g(() => Math.floor(a.value / ne)), Ge = g(() => Math.floor(a.value / se));
  function me() {
    t.value || (o(!0), e.props?.autoStart || (a.value = e.props.start, r.value = _.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && fe());
  }
  function N() {
    cancelAnimationFrame(m.value), m.value = 0;
  }
  function Ue() {
    t.value && (ye(), a.value > 0 && e.onProgress?.({
      days: S.value,
      hours: z.value,
      minutes: K.value,
      seconds: J.value,
      milliseconds: O.value,
      totalDays: S.value,
      totalHours: ge.value,
      totalMinutes: Ye.value,
      totalSeconds: Ge.value,
      totalMilliseconds: a.value
    }), fe());
  }
  function fe() {
    if (!t.value)
      return;
    const A = Math.min(a.value, h.value);
    if (A > 0) {
      let Te = function(F) {
        pe || (pe = F), Q || (Q = F);
        const Be = F - pe;
        Be >= A || Be + (F - Q) / 2 >= A ? Ue() : m.value = requestAnimationFrame(Te), Q = F;
      }, pe, Q;
      m.value = requestAnimationFrame(Te);
    } else
      be();
  }
  function qe() {
    t.value && (N(), o(!1), e.onAbort?.());
  }
  function be() {
    t.value && (N(), a.value = 0, o(!1), e.onEnd?.());
  }
  function ye() {
    t.value && (a.value = Math.max(0, r.value - _.value));
  }
  function Xe() {
    N(), a.value = e.props.start, r.value = _.value + e.props.start, o(!1), me();
  }
  function $e() {
    switch (document.visibilityState) {
      case "visible":
        m.value === 0 && s.value && (ye(), fe()), n(!1);
        break;
      case "hidden":
        m.value > 0 && (n(!0), N());
        break;
    }
  }
  return he(() => {
    document.addEventListener("visibilitychange", $e);
  }), Se(() => {
    document.removeEventListener("visibilitychange", $e), N();
  }), W(() => e.props, (A) => {
    a.value = A.start, r.value = _.value + A.start, A.autoStart && me();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: y,
    months: v,
    days: S,
    hours: z,
    minutes: K,
    seconds: J,
    milliseconds: O,
    start: me,
    abort: qe,
    end: be,
    restart: Xe
  };
}
const Os = { class: "v-countdown" }, Es = /* @__PURE__ */ c({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => Ne },
    start: {},
    now: { default: () => De }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, {
      years: a,
      months: r,
      days: m,
      hours: _,
      minutes: h,
      seconds: y,
      milliseconds: v,
      start: S,
      abort: z,
      end: K,
      restart: J
    } = Ls({
      props: s,
      onAbort: () => n("abort"),
      onEnd: () => n("end"),
      onProgress: (O) => n("progress", O),
      onStart: () => n("start")
    });
    return t({
      start: S,
      abort: z,
      end: K,
      restart: J
    }), (O, ge) => (i(), f("div", Os, [
      u(O.$slots, "default", {
        years: l(a),
        months: l(r),
        days: l(m),
        hours: l(_),
        minutes: l(h),
        seconds: l(y),
        milliseconds: l(v)
      })
    ]));
  }
}), Hs = {
  install(e) {
    e.component("VCountdown", Es);
  }
}, Rs = { class: "v-calendar" }, Ds = /* @__PURE__ */ c({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), f("div", Rs));
  }
}), Ns = {
  install(e) {
    e.component("VCalendar", Ds);
  }
}, rn = {
  install(e) {
    e.use(ct), e.use(Pt), e.use(Vt), e.use(gt), e.use(Lt), e.use(It), e.use(it), e.use(Ht), e.use(ds), e.use(qt), e.use(Nt), e.use(Jt), e.use(ro), e.use(co), e.use(bo), e.use(To), e.use(wo), e.use(xo), e.use(Lo), e.use(Ho), e.use(No), e.use(fo), e.use(vo), e.use(_o), e.use(Yo), e.use(Uo), e.use(Jo), e.use(Wo), e.use(jo), e.use(ss), e.use(ts), e.use(Zo), e.use(ls), e.use(is), e.use(us), e.use(Ft), e.use(Bt), e.use(vs), e.use(Vs), e.use(bs), e.use(Is), e.use(As), e.use(Hs), e.use(Ns), e.use(eo), e.use(so), e.use(oo), e.use(ao);
  }
}, Fs = { class: "v-confirm__header" }, Ys = { class: "v-confirm__title" }, Gs = { class: "v-confirm__body" }, Us = {
  key: 0,
  class: "v-confirm__text"
}, qs = ["innerHTML"], Xs = { class: "v-confirm__footer" }, Ws = /* @__PURE__ */ c({
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
    return (s, n) => (i(), p(l(de), null, {
      default: d(() => [
        V("div", {
          class: C(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          V("div", Fs, [
            V("div", Ys, T(e.title), 1),
            V("button", {
              type: "button",
              onClick: n[0] || (n[0] = (a) => o("close"))
            }, " X ")
          ]),
          V("div", Gs, [
            e.useHtml ? (i(), f("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, qs)) : (i(), f("div", Us, T(e.message), 1))
          ]),
          V("div", Xs, [
            V("button", {
              type: "button",
              onClick: n[1] || (n[1] = (a) => o("success"))
            }, T(e.confirmText), 1),
            V("button", {
              type: "button",
              onClick: n[2] || (n[2] = (a) => o("cancel"))
            }, T(e.cancelText), 1)
          ])
        ], 2)
      ]),
      _: 1
    }));
  }
});
class un {
  static #e = null;
  static async open(t, o) {
    return new Promise((s) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const n = (r) => {
        try {
          this.close(), s(r);
        } catch (m) {
          console.error(m), s(!1);
        }
      }, a = ce(Ws, {
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
      U(a, this.#e);
    });
  }
  static close() {
    this.#e && U(null, this.#e);
  }
}
const cn = {
  install() {
  }
}, Fe = 1500;
function js(e) {
  const t = g(() => D(e.props.duration) ? e.props.duration : Fe), [o, s] = q(!1);
  let n = null;
  function a() {
    n && clearTimeout(n);
  }
  function r() {
    a(), t.value !== 0 && (n = setTimeout(() => {
      s(!1);
    }, t.value));
  }
  return he(() => {
    r(), s(!0);
  }), {
    isVisible: o,
    setVisible: s,
    clearTimer: a,
    startTimer: r
  };
}
const Ks = { class: "v-toast__header" }, Js = { class: "v-toast__title" }, Qs = { class: "v-toast__body" }, Zs = {
  key: 0,
  class: "v-toast__text"
}, en = ["innerHTML"], tn = /* @__PURE__ */ c({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: Fe },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, s = t, { isVisible: n, setVisible: a, startTimer: r, clearTimer: m } = js({
      props: o
    });
    return (_, h) => (i(), p(re, {
      name: "fade-in-up",
      onAfterLeave: h[3] || (h[3] = (y) => s("close"))
    }, {
      default: d(() => [
        R(V("div", {
          class: C(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: h[1] || (h[1] = //@ts-ignore
          (...y) => l(m) && l(m)(...y)),
          onMouseleave: h[2] || (h[2] = //@ts-ignore
          (...y) => l(r) && l(r)(...y))
        }, [
          V("div", Ks, [
            V("div", Js, T(e.title), 1),
            e.clearable ? (i(), f("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: h[0] || (h[0] = (y) => l(a)(!1))
            }, " X ")) : x("", !0)
          ]),
          V("div", Qs, [
            e.useHtml ? (i(), f("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, en)) : (i(), f("div", Zs, T(e.message), 1))
          ])
        ], 34), [
          [j, l(n)]
        ])
      ]),
      _: 1
    }));
  }
});
class dn {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const s = ce(tn, {
      ...t,
      appContext: o
    });
    U(s, this.#e);
  }
}
class mn {
  static open(t, o) {
    const s = ce(Oe, {
      ...t,
      appContext: o
    });
    U(s, document.body);
  }
}
class fn {
  static open(t, o) {
    const s = ce(Ee, {
      ...t,
      appContext: o
    });
    U(s, document.body);
  }
}
const pn = {
  name: "ru",
  vau: {}
}, vn = {
  name: "en",
  vau: {}
};
export {
  ln as $,
  ct as A,
  it as B,
  Ht as C,
  Jt as D,
  fo as E,
  po as F,
  vo as G,
  ho as H,
  Nt as I,
  go as J,
  $o as K,
  To as L,
  qt as M,
  Bo as N,
  Co as O,
  bo as P,
  xo as Q,
  _o as R,
  wo as S,
  Mo as T,
  Ao as U,
  _t as V,
  Lo as W,
  Oo as X,
  Eo as Y,
  Ho as Z,
  ft as _,
  at as a,
  Do as a0,
  No as a1,
  Fo as a2,
  Yo as a3,
  Go as a4,
  Uo as a5,
  qo as a6,
  Xo as a7,
  Wo as a8,
  jo as a9,
  zs as aA,
  Ms as aB,
  As as aC,
  Es as aD,
  Hs as aE,
  Ds as aF,
  Ns as aG,
  Zt as aH,
  eo as aI,
  to as aJ,
  oo as aK,
  He as aL,
  so as aM,
  no as aN,
  ao as aO,
  rn as aP,
  un as aQ,
  cn as aR,
  dn as aS,
  mn as aT,
  fn as aU,
  pn as aV,
  vn as aW,
  Ko as aa,
  Jo as ab,
  Qo as ac,
  Zo as ad,
  es as ae,
  ts as af,
  os as ag,
  ss as ah,
  ns as ai,
  as as aj,
  ls as ak,
  is as al,
  rs as am,
  us as an,
  cs as ao,
  ds as ap,
  de as aq,
  Ft as ar,
  ps as as,
  vs as at,
  _s as au,
  Vs as av,
  gs as aw,
  bs as ax,
  Ss as ay,
  Is as az,
  lt as b,
  nn as c,
  rt as d,
  ut as e,
  mt as f,
  Vt as g,
  gt as h,
  Tt as i,
  Bt as j,
  xt as k,
  Pt as l,
  St as m,
  It as n,
  At as o,
  Lt as p,
  Et as q,
  Dt as r,
  Oe as s,
  Ee as t,
  an as u,
  io as v,
  ro as w,
  uo as x,
  co as y,
  mo as z
};
