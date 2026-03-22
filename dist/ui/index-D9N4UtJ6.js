import { defineComponent as d, createBlock as f, openBlock as i, unref as l, normalizeProps as $, guardReactiveProps as T, withCtx as u, createVNode as y, renderSlot as c, mergeModels as B, useModel as P, mergeProps as S, toHandlers as X, createPropsRestProxy as ze, createTextVNode as I, toDisplayString as w, createElementBlock as p, normalizeClass as x, createCommentVNode as C, useSlots as M, computed as b, createElementVNode as V, Fragment as G, shallowRef as Pe, onMounted as Ve, onBeforeUnmount as Ae, watch as j, useTemplateRef as ie, Teleport as Le, Transition as ue, withDirectives as W, vShow as K, provide as ge, createSlots as Oe, inject as Je, ref as R, useId as Qe, reactive as Ze, onUnmounted as et, renderList as te, defineAsyncComponent as ce, h as de, render as U } from "vue";
import { Button as _e, Accordion as E, isUndefined as tt, isNumber as H, useToggle as q, Layout as Se, Grid as ye, Scrollbar as ot, Tag as Ee, Text as st, Form as F, Checkbox as oe, Input as A, InputCode as xe, InputNumber as ee, INPUT_NUMBER_ACTIONS as ke, INPUT_NUMBER_VALUE_DEFAULT as nt, InputPassword as at, Radio as se, Select as Y, Switch as he, ConfigProvider as lt, Divider as Ie, Flex as it } from "@vau/core";
const rt = /* @__PURE__ */ d({
  __name: "VButton",
  props: {
    asChild: { type: Boolean },
    as: {},
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
    return (o, s) => (i(), f(l(_e).Root, $(T(t)), {
      default: u(() => [
        y(l(_e).Content, null, {
          default: u(() => [
            c(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), ut = /* @__PURE__ */ d({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(_e).Group, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ct = {
  install(e) {
    e.component("VButton", rt);
  }
}, sn = {
  install(e) {
    e.component("VButtonGroup", ut);
  }
}, dt = /* @__PURE__ */ d({
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
    const o = e, s = t, n = P(e, "modelValue");
    return (a, r) => (i(), f(l(E).Root, S(o, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (m) => n.value = m)
    }, X(s)), {
      default: u(() => [
        c(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), mt = /* @__PURE__ */ d({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = ze(e, ["title"]);
    return (o, s) => (i(), f(l(E).Item, $(T(t)), {
      default: u(({ isActive: n }) => [
        y(l(E).Header, null, {
          default: u(() => [
            y(l(E).Trigger, null, {
              default: u(() => [
                y(l(E).Title, null, {
                  default: u(() => [
                    c(o.$slots, "title", {}, () => [
                      I(w(e.title), 1)
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
        y(l(E).Body, null, {
          default: u(() => [
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
}, vt = /* @__PURE__ */ d({
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
      class: x(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (i(), p("div", pt, w(e.label), 1)) : C("", !0)
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
}, wt = {
  key: 1,
  class: "v-alert__description"
}, Ct = /* @__PURE__ */ d({
  __name: "VAlert",
  props: {
    title: {},
    description: {},
    showIcon: { type: Boolean },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = M(), s = b(() => !!t.title || !!o?.title), n = b(() => !!t.description || !!o?.description);
    return (a, r) => (i(), p("div", {
      class: x(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      V("div", Tt, [
        o?.default ? c(a.$slots, "default", { key: 0 }) : (i(), p(G, { key: 1 }, [
          s.value ? (i(), p("div", Bt, [
            c(a.$slots, "title", {}, () => [
              I(w(e.title), 1)
            ])
          ])) : C("", !0),
          n.value ? (i(), p("div", wt, [
            c(a.$slots, "description", {}, () => [
              I(w(e.description), 1)
            ])
          ])) : C("", !0)
        ], 64))
      ])
    ], 2));
  }
}), Pt = {
  install(e) {
    e.component("VAlert", Ct);
  }
}, Re = 0, He = 0, St = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class re {
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
      ...St,
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
    return o.outer = re.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = re.extend({
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
      const r = H(a) ? "px" : "";
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
      tt(o[n]) ? s[n] = t[n] : s[n] = o[n];
    return s;
  }
}
function xt(e) {
  const t = Pe(), o = Pe(), s = b(() => H(e.props?.offsetTop) ? e.props.offsetTop : Re), n = b(() => H(e.props?.offsetBottom) ? e.props.offsetBottom : He);
  function a() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function r() {
    a(), e.root.value && t.value && e.content.value && (o.value = new re(e.root.value, {
      offsetTop: s.value,
      offsetBottom: n.value,
      container: t.value,
      innerWrapper: e.content.value
    }));
  }
  function m() {
    o.value?.destroy(), o.value = void 0;
  }
  return Ve(() => {
    e.props.disabled || r();
  }), Ae(() => {
    m();
  }), j(() => e.props.disabled, (_) => {
    _ ? m() : r();
  }), {};
}
const kt = /* @__PURE__ */ d({
  __name: "VAffix",
  props: {
    offsetTop: { default: Re },
    offsetBottom: { default: He },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = ie("root"), s = ie("content");
    return xt({
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
        c(n.$slots, "default")
      ], 512)
    ], 512));
  }
}), It = {
  install(e) {
    e.component("VAffix", kt);
  }
}, Mt = { class: "v-breadcrumbs" }, zt = /* @__PURE__ */ d({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (i(), p("nav", Mt));
  }
}), At = {
  install(e) {
    e.component("VBreadcrumbs", zt);
  }
};
function Lt(e) {
  return {
    content: b(() => e.props.dot ? "" : H(e.props.value) && H(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const Ot = {
  key: 0,
  class: "v-badge__content"
}, Et = /* @__PURE__ */ d({
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
    const t = e, o = M(), { content: s } = Lt({
      props: t
    }), n = b(() => !t.hidden && !!(s.value || t.dot || o?.content));
    return (a, r) => (i(), p("div", {
      class: x(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      c(a.$slots, "default"),
      n.value ? (i(), p("sup", Ot, [
        c(a.$slots, "content", { value: l(s) }, () => [
          I(w(l(s)), 1)
        ])
      ])) : C("", !0)
    ], 2));
  }
}), Rt = {
  install(e) {
    e.component("VBadge", Et);
  }
}, Ht = { class: "v-collapse" }, Dt = /* @__PURE__ */ d({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (i(), p("div", Ht, [
      c(t.$slots, "default")
    ]));
  }
}), Nt = {
  install(e) {
    e.component("VCollapse", Dt);
  }
};
function Ft(e) {
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
const Yt = /* @__PURE__ */ d({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: s, handleOpen: n, handleClose: a } = Ft({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (r, m) => l(s) ? c(r.$slots, "content", {
      key: 1,
      close: l(a)
    }) : c(r.$slots, "display", {
      key: 0,
      open: l(n)
    });
  }
}), Gt = {
  install(e) {
    e.component("VInplace", Yt);
  }
}, me = /* @__PURE__ */ d({
  __name: "VOverlay",
  props: {
    mask: { type: Boolean, default: !0 },
    blur: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: x(["v-overlay", {
        "v-overlay--mask": e.mask,
        "v-overlay--blur": e.mask && e.blur
      }])
    }, [
      c(t.$slots, "default")
    ], 2));
  }
}), Ut = {
  install(e) {
    e.component("VOverlay", me);
  }
}, qt = {
  key: 0,
  class: "v-modal__header"
}, Xt = { class: "v-modal__body" }, jt = {
  key: 1,
  class: "v-modal__footer"
}, De = /* @__PURE__ */ d({
  __name: "VModal",
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
    const o = e, s = t, n = M(), a = P(e, "modelValue"), r = b(() => !!o.title || !!n?.header), m = b(() => !!n?.footer);
    function _() {
      a.value = !1;
    }
    function v(h) {
      s("opened", h);
    }
    function g(h) {
      s("closed", h);
    }
    return j(a, (h) => {
      s(h ? "open" : "close");
    }), (h, k) => (i(), f(Le, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      y(ue, {
        onAfterEnter: v,
        onAfterLeave: g
      }, {
        default: u(() => [
          y(l(me), null, {
            default: u(() => [
              W(V("div", {
                class: x(["v-modal", {
                  "v-modal--open": a.value
                }]),
                role: "dialog"
              }, [
                r.value ? (i(), p("div", qt, [
                  c(h.$slots, "header", { close: _ }, () => [
                    I(w(e.title), 1)
                  ]),
                  V("button", {
                    class: "v-modal__close-button",
                    type: "button",
                    onClick: _
                  }, " x ")
                ])) : C("", !0),
                V("div", Xt, [
                  c(h.$slots, "default", { close: _ })
                ]),
                m.value ? (i(), p("div", jt, [
                  c(h.$slots, "footer", { close: _ })
                ])) : C("", !0)
              ], 2), [
                [K, a.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), Wt = {
  install(e) {
    e.component("VModal", De);
  }
}, Kt = { class: "v-drawer__dialog" }, Jt = {
  key: 0,
  class: "v-drawer__header"
}, Qt = { class: "v-drawer__body" }, Zt = {
  key: 1,
  class: "v-drawer__footer"
}, Ne = /* @__PURE__ */ d({
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
    const o = e, s = t, n = M(), a = P(e, "modelValue"), r = b(() => !!o.title || !!n?.header), m = b(() => !!n?.footer);
    function _() {
      a.value = !1;
    }
    function v(h) {
      s("opened", h);
    }
    function g(h) {
      s("closed", h);
    }
    return j(a, (h) => {
      s(h ? "open" : "close");
    }), (h, k) => (i(), f(Le, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      y(ue, {
        onAfterEnter: v,
        onAfterLeave: g
      }, {
        default: u(() => [
          y(l(me), null, {
            default: u(() => [
              W(V("div", {
                class: x(["v-drawer", {
                  "v-drawer--open": a.value
                }]),
                role: "dialog"
              }, [
                V("div", Kt, [
                  r.value ? (i(), p("div", Jt, [
                    c(h.$slots, "header", { close: _ }, () => [
                      I(w(e.title), 1)
                    ]),
                    V("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: _
                    }, " x ")
                  ])) : C("", !0),
                  V("div", Qt, [
                    c(h.$slots, "default", { close: _ })
                  ]),
                  m.value ? (i(), p("div", Zt, [
                    c(h.$slots, "footer", { close: _ })
                  ])) : C("", !0)
                ])
              ], 2), [
                [K, a.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), eo = {
  install(e) {
    e.component("VDrawer", Ne);
  }
};
function nn() {
  return {};
}
const to = /* @__PURE__ */ Symbol("VDropdownContextKey"), oo = { class: "v-dropdown__menu" }, so = /* @__PURE__ */ d({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, [a, r, m] = q();
    function _(g) {
      n("opened", g);
    }
    function v(g) {
      n("opened", g);
    }
    return j(a, (g) => {
      n(g ? "open" : "close");
    }), t({
      setVisible: r,
      isVisible: a
    }), ge(to, {
      props: s
    }), (g, h) => (i(), p("div", {
      class: x(["v-dropdown", {
        "v-dropdown--open": l(a)
      }])
    }, [
      c(g.$slots, "trigger", {
        isVisible: l(a),
        toggle: l(m),
        setVisible: l(r)
      }),
      y(ue, {
        onAfterEnter: _,
        onAfterLeave: v
      }, {
        default: u(() => [
          W(V("div", oo, [
            c(g.$slots, "default")
          ], 512), [
            [K, l(a)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), no = {
  install(e) {
    e.component("VDropdown", so);
  }
}, ao = /* @__PURE__ */ d({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = ie("image"), o = ie("root");
    return (s, n) => (i(), p("figure", {
      ref_key: "root",
      ref: o,
      class: x(["v-image", [
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
}), lo = {
  install(e) {
    e.component("VImage", ao);
  }
}, io = /* @__PURE__ */ d({
  __name: "VLayout",
  setup(e) {
    const t = M();
    return (o, s) => (i(), f(l(Se).Root, null, Oe({
      default: u(() => [
        y(l(Se).Body, null, {
          default: u(() => [
            c(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      t?.header ? {
        name: "header",
        fn: u(() => [
          c(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t?.footer ? {
        name: "footer",
        fn: u(() => [
          c(o.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), ro = {
  install(e) {
    e.component("VLayout", io);
  }
}, uo = /* @__PURE__ */ d({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(ye).Container, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), co = {
  install(e) {
    e.component("VContainer", uo);
  }
}, mo = /* @__PURE__ */ d({
  __name: "VRow",
  props: {
    guttersX: { type: Boolean },
    guttersY: { type: Boolean },
    justify: {},
    justifyXs: {},
    justifySm: {},
    justifyMd: {},
    justifyLg: {},
    justifyXl: {},
    justifyXxl: {},
    align: {},
    alignXs: {},
    alignSm: {},
    alignMd: {},
    alignLg: {},
    alignXl: {},
    alignXxl: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(ye).Row, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fo = {
  install(e) {
    e.component("VRow", mo);
  }
}, po = /* @__PURE__ */ d({
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
    return (o, s) => (i(), f(l(ye).Col, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vo = {
  install(e) {
    e.component("VCol", po);
  }
}, ho = { class: "v-pagination" }, _o = /* @__PURE__ */ d({
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
    return (t, o) => (i(), p("div", ho));
  }
}), Vo = {
  install(e) {
    e.component("VPagination", _o);
  }
}, go = { class: "v-placeholder" }, yo = /* @__PURE__ */ d({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (i(), p("div", go, [
      c(t.$slots, "default")
    ]));
  }
}), bo = {
  install(e) {
    e.component("VPlaceholder", yo);
  }
}, $o = /* @__PURE__ */ d({
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
    return (n, a) => (i(), f(l(ot).Root, S(o, X(s)), {
      default: u(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), To = {
  install(e) {
    e.component("VScrollbar", $o);
  }
}, Bo = /* @__PURE__ */ d({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", {
      class: x(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), wo = {
  install(e) {
    e.component("VSpinner", Bo);
  }
}, Fe = /* @__PURE__ */ Symbol("VTabsContextKey"), Co = () => Je(Fe, null);
function Po() {
  const e = R([]);
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
  const t = Qe(), o = b(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const xo = { class: "v-tabs" }, ko = { class: "v-tabs__content" }, Io = /* @__PURE__ */ d({
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
    const o = e, s = t, n = P(e, "modelValue"), {
      tabs: a,
      registerTab: r,
      unregisterTab: m
    } = Po();
    function _(v) {
      n.value = v, s("change", v);
    }
    return ge(Fe, {
      props: o,
      modelValue: n,
      tabs: a,
      handleChange: _,
      registerTab: r,
      unregisterTab: m
    }), (v, g) => (i(), p("div", xo, [
      V("div", ko, [
        c(v.$slots, "default")
      ])
    ]));
  }
}), Mo = /* @__PURE__ */ d({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = M(), s = Co(), { id: n, isActive: a } = So({
      context: s,
      props: t
    }), r = Ze({
      id: n,
      props: t,
      slots: o
    });
    return s?.registerTab(r), et(() => {
      s?.unregisterTab(r);
    }), (m, _) => W((i(), p("div", {
      class: x(["v-tab", {
        "v-tab--active": l(a)
      }])
    }, [
      c(m.$slots, "default", { isActive: l(a) })
    ], 2)), [
      [K, l(a)]
    ]);
  }
}), zo = {
  install(e) {
    e.component("VTabs", Io), e.component("VTab", Mo);
  }
}, Ao = /* @__PURE__ */ d({
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
    return (n, a) => (i(), f(l(Ee).Root, S(o, X(s)), {
      default: u(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lo = /* @__PURE__ */ d({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Ee).Group, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oo = {
  install(e) {
    e.component("VTag", Ao);
  }
}, an = {
  install(e) {
    e.component("VTagGroup", Lo);
  }
}, Eo = /* @__PURE__ */ d({
  __name: "VText",
  props: {
    tag: {},
    uppercase: { type: Boolean },
    underline: { type: Boolean },
    weight: {},
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(st).Root, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ro = {
  install(e) {
    e.component("VText", Eo);
  }
}, Ho = /* @__PURE__ */ d({
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
    const o = e, s = t, n = P(e, "modelValue");
    return (a, r) => (i(), f(l(F).Root, S({
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (m) => n.value = m)
    }, o, X(s)), {
      default: u((m) => [
        c(a.$slots, "default", $(T(m)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Do = {
  install(e) {
    e.component("VForm", Ho);
  }
}, No = /* @__PURE__ */ d({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = ze(e, ["title"]), s = t, n = M();
    return (a, r) => (i(), f(l(F).Item, S(o, X(s)), Oe({
      default: u((m) => [
        c(a.$slots, "default", $(T(m)))
      ]),
      footer: u((m) => [
        c(a.$slots, "footer", $(T(m)), () => [
          y(l(F).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      n.header ? {
        name: "header",
        fn: u((m) => [
          c(a.$slots, "header", $(T(m)), () => [
            y(l(F).ItemTitle, null, {
              default: u(() => [
                I(w(e.title) + " ", 1),
                m.isRequired ? (i(), f(l(F).ItemRequired, { key: 0 })) : C("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), Fo = {
  install(e) {
    e.component("VFormItem", No);
  }
}, Yo = /* @__PURE__ */ d({
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
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(oe).Root, S(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: u(() => [
        y(l(oe).Indicator),
        y(l(oe).Title, null, {
          default: u(() => [
            c(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Go = /* @__PURE__ */ d({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(oe).Group, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uo = {
  install(e) {
    e.component("VCheckbox", Yo);
  }
}, qo = {
  install(e) {
    e.component("VCheckboxGroup", Go);
  }
}, Xo = /* @__PURE__ */ d({
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
    const t = e, o = M(), s = P(e, "modelValue");
    return (n, a) => (i(), f(l(A).Root, S(t, {
      modelValue: s.value,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => s.value = r)
    }), {
      default: u((r) => [
        o?.before ? (i(), f(l(A).Before, { key: 0 }, {
          default: u(() => [
            c(n.$slots, "before", $(T(r)))
          ]),
          _: 2
        }, 1024)) : C("", !0),
        y(l(A).Control, null, {
          default: u(() => [
            r.isTextarea ? (i(), f(l(A).Textarea, { key: 0 })) : (i(), f(l(A).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (i(), f(l(A).After, { key: 1 }, {
          default: u(() => [
            c(n.$slots, "after", $(T(r)))
          ]),
          _: 2
        }, 1024)) : C("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), jo = {
  install(e) {
    e.component("VInput", Xo);
  }
}, Wo = /* @__PURE__ */ d({
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
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(xe).Root, S(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: u(() => [
        (i(!0), p(G, null, te(e.length, (a, r) => (i(), f(l(xe).Pin, {
          key: `pin-${r}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Ko = {
  install(e) {
    e.component("VInputCode", Wo);
  }
}, Jo = /* @__PURE__ */ d({
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
      default: nt
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(ee).Root, S(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: u(() => [
        y(l(ee).Button, {
          action: l(ke).DECREMENT
        }, null, 8, ["action"]),
        y(l(ee).Input),
        y(l(ee).Button, {
          action: l(ke).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Qo = {
  install(e) {
    e.component("VInputNumber", Jo);
  }
}, Zo = /* @__PURE__ */ d({
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
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(at).Root, S({
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }, t), null, 16, ["modelValue"]));
  }
}), es = {
  install(e) {
    e.component("VInputPassword", Zo);
  }
}, ts = /* @__PURE__ */ d({
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
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(se).Root, S(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: u(() => [
        y(l(se).Indicator),
        y(l(se).Title, null, {
          default: u(() => [
            c(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), os = /* @__PURE__ */ d({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(se).Group, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ss = {
  install(e) {
    e.component("VRadio", ts);
  }
}, ns = {
  install(e) {
    e.component("VRadioGroup", os);
  }
}, as = /* @__PURE__ */ d({
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
    const o = e, s = t, n = P(e, "modelValue");
    return (a, r) => (i(), f(l(Y).Root, S(o, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (m) => n.value = m),
      onChange: r[1] || (r[1] = (m) => s("change", m)),
      onClose: r[2] || (r[2] = (m) => s("close")),
      onClear: r[3] || (r[3] = (m) => s("clear"))
    }), {
      default: u(() => [
        y(l(Y).Value, null, {
          default: u(() => [
            c(a.$slots, "value")
          ]),
          _: 3
        }),
        y(l(Y).Dropdown, null, {
          default: u(() => [
            y(l(Y).Scrollbar, null, {
              default: u(() => [
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
}), ls = /* @__PURE__ */ d({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Y).Option, $(T(t)), {
      default: u((n) => [
        c(o.$slots, "default", $(T(n)))
      ]),
      _: 3
    }, 16));
  }
}), is = {
  install(e) {
    e.component("VSelect", as), e.component("VOption", ls);
  }
}, rs = /* @__PURE__ */ d({
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
    const t = e, o = P(e, "modelValue");
    return (s, n) => (i(), f(l(he).Root, S(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: u(() => [
        y(l(he).Indicator),
        y(l(he).Title, null, {
          default: u(() => [
            c(s.$slots, "default")
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
}, cs = /* @__PURE__ */ d({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(lt).Root, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
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
}, ps = /* @__PURE__ */ d({
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
      class: x(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      V("div", ms, [
        e.showValue ? (i(), p("div", fs, [
          c(t.$slots, "default")
        ])) : C("", !0)
      ])
    ], 2));
  }
}), vs = {
  install(e) {
    e.component("VProgress", ps);
  }
}, hs = /* @__PURE__ */ d({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = M();
    return (s, n) => (i(), f(l(Ie).Root, $(T(t)), {
      default: u(() => [
        o?.default ? (i(), f(l(Ie).Content, { key: 0 }, {
          default: u(() => [
            c(s.$slots, "default")
          ]),
          _: 3
        })) : C("", !0)
      ]),
      _: 3
    }, 16));
  }
}), _s = {
  install(e) {
    e.component("VDivider", hs);
  }
}, Vs = /* @__PURE__ */ d({
  __name: "VFlex",
  props: {
    wrap: { type: Boolean },
    align: {},
    justify: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(it).Root, $(T(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gs = {
  install(e) {
    e.component("VFlex", Vs);
  }
};
function ys(e) {
  const t = R([]), o = R({
    prop: null,
    order: null
  }), s = b(() => e.columns.some((v) => !!v.title));
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
  function m(v, g) {
    o.value = {
      prop: v,
      order: g
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
const bs = ce(() => import("./TableRow-B8JSQdZj.js")), $s = ce(() => import("./TableEmpty-DtSzoLXD.js")), Ts = ce(() => import("./TableBodyCell-M4h-KIof.js")), Bs = ce(() => import("./TableHeaderCell-Doshm126.js")), ws = /* @__PURE__ */ Symbol("VTableContextKey"), Cs = { class: "v-table" }, Ps = {
  key: 0,
  class: "v-table__native"
}, Ss = { key: 0 }, xs = /* @__PURE__ */ d({
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
    return ge(ws, {
      props: o
    }), t({
      clearSelection: n,
      getSelectionRows: a,
      clearSort: r,
      sort: m,
      toggleAllSelection: _
    }), (v, g) => (i(), p("div", Cs, [
      e.data.length ? (i(), p("table", Ps, [
        l(s) ? (i(), p("thead", Ss, [
          V("tr", null, [
            (i(!0), p(G, null, te(e.columns, (h) => (i(), f(l(Bs), {
              key: h.prop
            }, {
              default: u(() => [
                I(w(h.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : C("", !0),
        V("tbody", null, [
          (i(!0), p(G, null, te(e.data, (h, k) => (i(), f(l(bs), {
            key: `row-${k}`
          }, {
            default: u(() => [
              (i(!0), p(G, null, te(e.columns, (z) => (i(), f(l(Ts), {
                key: `row-${k}-${String(z.prop)}`
              }, {
                default: u(() => [
                  c(v.$slots, String(z.prop), { row: h }, () => [
                    I(w(h[z.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (i(), f(l($s), { key: 1 }, {
        default: u(() => [
          c(v.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), ks = {
  install(e) {
    e.component("VTable", xs);
  }
}, Is = /* @__PURE__ */ d({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (i(), f(l(A).Group, null, {
      default: u(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ms = /* @__PURE__ */ d({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (i(), f(l(A).GroupAddon, null, {
      default: u(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), zs = {
  install(e) {
    e.component("VInputGroup", Is), e.component("VInputGroupAddon", Ms);
  }
}, ne = 1e3, ae = 60 * ne, le = 60 * ae, Me = 24 * le, Ye = Date.now(), Ge = 1e3;
function As(e) {
  const [t, o] = q(), [s, n] = q(), a = R(0), r = R(0), m = R(0), _ = b(() => e.props.now || Ye), v = b(() => e.props.interval || Ge), g = b(() => 0), h = b(() => 0), k = b(() => Math.floor(a.value / Me)), z = b(() => Math.floor(a.value % Me / le)), J = b(() => Math.floor(a.value % le / ae)), Q = b(() => Math.floor(a.value % ae / ne)), O = b(() => Math.floor(a.value % ne)), be = b(() => Math.floor(a.value / le)), qe = b(() => Math.floor(a.value / ae)), Xe = b(() => Math.floor(a.value / ne));
  function fe() {
    t.value || (o(!0), e.props?.autoStart || (a.value = e.props.start, r.value = _.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && pe());
  }
  function D() {
    cancelAnimationFrame(m.value), m.value = 0;
  }
  function je() {
    t.value && (Te(), a.value > 0 && e.onProgress?.({
      days: k.value,
      hours: z.value,
      minutes: J.value,
      seconds: Q.value,
      milliseconds: O.value,
      totalDays: k.value,
      totalHours: be.value,
      totalMinutes: qe.value,
      totalSeconds: Xe.value,
      totalMilliseconds: a.value
    }), pe());
  }
  function pe() {
    if (!t.value)
      return;
    const L = Math.min(a.value, v.value);
    if (L > 0) {
      let we = function(N) {
        ve || (ve = N), Z || (Z = N);
        const Ce = N - ve;
        Ce >= L || Ce + (N - Z) / 2 >= L ? je() : m.value = requestAnimationFrame(we), Z = N;
      }, ve, Z;
      m.value = requestAnimationFrame(we);
    } else
      $e();
  }
  function We() {
    t.value && (D(), o(!1), e.onAbort?.());
  }
  function $e() {
    t.value && (D(), a.value = 0, o(!1), e.onEnd?.());
  }
  function Te() {
    t.value && (a.value = Math.max(0, r.value - _.value));
  }
  function Ke() {
    D(), a.value = e.props.start, r.value = _.value + e.props.start, o(!1), fe();
  }
  function Be() {
    switch (document.visibilityState) {
      case "visible":
        m.value === 0 && s.value && (Te(), pe()), n(!1);
        break;
      case "hidden":
        m.value > 0 && (n(!0), D());
        break;
    }
  }
  return Ve(() => {
    document.addEventListener("visibilitychange", Be);
  }), Ae(() => {
    document.removeEventListener("visibilitychange", Be), D();
  }), j(() => e.props, (L) => {
    a.value = L.start, r.value = _.value + L.start, L.autoStart && fe();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: g,
    months: h,
    days: k,
    hours: z,
    minutes: J,
    seconds: Q,
    milliseconds: O,
    start: fe,
    abort: We,
    end: $e,
    restart: Ke
  };
}
const Ls = { class: "v-countdown" }, Os = /* @__PURE__ */ d({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => Ge },
    start: {},
    now: { default: () => Ye }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, {
      years: a,
      months: r,
      days: m,
      hours: _,
      minutes: v,
      seconds: g,
      milliseconds: h,
      start: k,
      abort: z,
      end: J,
      restart: Q
    } = As({
      props: s,
      onAbort: () => n("abort"),
      onEnd: () => n("end"),
      onProgress: (O) => n("progress", O),
      onStart: () => n("start")
    });
    return t({
      start: k,
      abort: z,
      end: J,
      restart: Q
    }), (O, be) => (i(), p("div", Ls, [
      c(O.$slots, "default", {
        years: l(a),
        months: l(r),
        days: l(m),
        hours: l(_),
        minutes: l(v),
        seconds: l(g),
        milliseconds: l(h)
      })
    ]));
  }
}), Es = {
  install(e) {
    e.component("VCountdown", Os);
  }
}, Rs = { class: "v-calendar" }, Hs = /* @__PURE__ */ d({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", Rs));
  }
}), Ds = {
  install(e) {
    e.component("VCalendar", Hs);
  }
}, ln = {
  install(e) {
    e.use(ft), e.use(It), e.use(bt), e.use($t), e.use(Rt), e.use(At), e.use(ct), e.use(Nt), e.use(ds), e.use(Wt), e.use(Gt), e.use(eo), e.use(no), e.use(lo), e.use(Vo), e.use(bo), e.use(To), e.use(wo), e.use(zo), e.use(Oo), e.use(Ro), e.use(co), e.use(vo), e.use(fo), e.use(ro), e.use(Do), e.use(Fo), e.use(jo), e.use(Uo), e.use(qo), e.use(es), e.use(Qo), e.use(Ko), e.use(ss), e.use(ns), e.use(us), e.use(is), e.use(Ut), e.use(Pt), e.use(vs), e.use(_s), e.use(gs), e.use(ks), e.use(zs), e.use(Es), e.use(Ds);
  }
}, Ns = { class: "v-confirm__header" }, Fs = { class: "v-confirm__title" }, Ys = { class: "v-confirm__body" }, Gs = {
  key: 0,
  class: "v-confirm__text"
}, Us = ["innerHTML"], qs = { class: "v-confirm__footer" }, Xs = /* @__PURE__ */ d({
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
    return (s, n) => (i(), f(l(me), null, {
      default: u(() => [
        V("div", {
          class: x(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          V("div", Ns, [
            V("div", Fs, w(e.title), 1),
            V("button", {
              type: "button",
              onClick: n[0] || (n[0] = (a) => o("close"))
            }, " X ")
          ]),
          V("div", Ys, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, Us)) : (i(), p("div", Gs, w(e.message), 1))
          ]),
          V("div", qs, [
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
class rn {
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
      }, a = de(Xs, {
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
const un = {
  install() {
  }
}, Ue = 1500;
function js(e) {
  const t = b(() => H(e.props.duration) ? e.props.duration : Ue), [o, s] = q(!1);
  let n = null;
  function a() {
    n && clearTimeout(n);
  }
  function r() {
    a(), t.value !== 0 && (n = setTimeout(() => {
      s(!1);
    }, t.value));
  }
  return Ve(() => {
    r(), s(!0);
  }), {
    isVisible: o,
    setVisible: s,
    clearTimer: a,
    startTimer: r
  };
}
const Ws = { class: "v-toast__header" }, Ks = { class: "v-toast__title" }, Js = { class: "v-toast__body" }, Qs = {
  key: 0,
  class: "v-toast__text"
}, Zs = ["innerHTML"], en = /* @__PURE__ */ d({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: Ue },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, s = t, { isVisible: n, setVisible: a, startTimer: r, clearTimer: m } = js({
      props: o
    });
    return (_, v) => (i(), f(ue, {
      name: "fade-in-up",
      onAfterLeave: v[3] || (v[3] = (g) => s("close"))
    }, {
      default: u(() => [
        W(V("div", {
          class: x(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: v[1] || (v[1] = //@ts-ignore
          (...g) => l(m) && l(m)(...g)),
          onMouseleave: v[2] || (v[2] = //@ts-ignore
          (...g) => l(r) && l(r)(...g))
        }, [
          V("div", Ws, [
            V("div", Ks, w(e.title), 1),
            e.clearable ? (i(), p("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (g) => l(a)(!1))
            }, " X ")) : C("", !0)
          ]),
          V("div", Js, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, Zs)) : (i(), p("div", Qs, w(e.message), 1))
          ])
        ], 34), [
          [K, l(n)]
        ])
      ]),
      _: 1
    }));
  }
});
class cn {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const s = de(en, {
      ...t,
      appContext: o
    });
    U(s, this.#e);
  }
}
class dn {
  static open(t, o) {
    const s = de(De, {
      ...t,
      appContext: o
    });
    U(s, document.body);
  }
}
class mn {
  static open(t, o) {
    const s = de(Ne, {
      ...t,
      appContext: o
    });
    U(s, document.body);
  }
}
const fn = {
  name: "ru",
  vau: {}
}, pn = {
  name: "en",
  vau: {}
};
export {
  Lo as $,
  ft as A,
  ct as B,
  Nt as C,
  eo as D,
  uo as E,
  co as F,
  mo as G,
  po as H,
  Gt as I,
  vo as J,
  _o as K,
  ro as L,
  Wt as M,
  yo as N,
  bo as O,
  Vo as P,
  $o as Q,
  fo as R,
  To as S,
  Bo as T,
  wo as U,
  yt as V,
  Io as W,
  Mo as X,
  zo as Y,
  Ao as Z,
  ht as _,
  rt as a,
  Oo as a0,
  an as a1,
  Eo as a2,
  Ro as a3,
  Ho as a4,
  Do as a5,
  No as a6,
  Fo as a7,
  Yo as a8,
  Go as a9,
  _s as aA,
  Vs as aB,
  gs as aC,
  xs as aD,
  ks as aE,
  Is as aF,
  Ms as aG,
  zs as aH,
  Os as aI,
  Es as aJ,
  Hs as aK,
  Ds as aL,
  ln as aM,
  rn as aN,
  un as aO,
  cn as aP,
  dn as aQ,
  mn as aR,
  fn as aS,
  pn as aT,
  Uo as aa,
  qo as ab,
  Xo as ac,
  jo as ad,
  Wo as ae,
  Ko as af,
  Jo as ag,
  Qo as ah,
  Zo as ai,
  es as aj,
  ts as ak,
  os as al,
  ss as am,
  ns as an,
  as as ao,
  ls as ap,
  is as aq,
  rs as ar,
  us as as,
  cs as at,
  ds as au,
  me as av,
  Ut as aw,
  ps as ax,
  vs as ay,
  hs as az,
  ut as b,
  sn as c,
  dt as d,
  mt as e,
  vt as f,
  bt as g,
  $t as h,
  Ct as i,
  Pt as j,
  kt as k,
  It as l,
  zt as m,
  At as n,
  Et as o,
  Rt as p,
  Dt as q,
  Yt as r,
  De as s,
  Ne as t,
  nn as u,
  so as v,
  no as w,
  ao as x,
  lo as y,
  io as z
};
