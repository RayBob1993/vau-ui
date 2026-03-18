import { defineComponent as d, createBlock as f, openBlock as i, unref as l, normalizeProps as $, guardReactiveProps as T, withCtx as c, createVNode as b, renderSlot as r, mergeModels as B, useModel as x, mergeProps as k, toHandlers as q, createPropsRestProxy as Me, createTextVNode as I, toDisplayString as w, createElementBlock as p, normalizeClass as P, createCommentVNode as C, useSlots as M, computed as V, createElementVNode as g, Fragment as G, shallowRef as Ce, onMounted as _e, onBeforeUnmount as ze, watch as W, useTemplateRef as le, Teleport as Ae, Transition as re, withDirectives as H, vShow as j, provide as ge, createSlots as Le, inject as Je, ref as R, useId as Qe, reactive as Ze, onUnmounted as et, renderList as ee, defineAsyncComponent as ue, h as ce, render as U } from "vue";
import { Button as he, Accordion as E, isUndefined as tt, isNumber as D, useToggle as X, Grid as Ve, Layout as Pe, Scrollbar as ot, Tag as Oe, Text as st, Form as Y, Checkbox as te, Input as A, InputCode as xe, InputNumber as Z, INPUT_NUMBER_ACTIONS as ke, INPUT_NUMBER_VALUE_DEFAULT as nt, InputPassword as at, Radio as oe, Switch as ve, ConfigProvider as lt, Divider as Se, Flex as it } from "@vau/core";
const rt = /* @__PURE__ */ d({
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
    return (o, s) => (i(), f(l(he).Root, $(T(t)), {
      default: c(() => [
        b(l(he).Content, null, {
          default: c(() => [
            r(o.$slots, "default")
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
    return (o, s) => (i(), f(l(he).Group, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ct = {
  install(e) {
    e.component("VButton", rt);
  }
}, rn = {
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
    const o = e, s = t, n = x(e, "modelValue");
    return (a, u) => (i(), f(l(E).Root, k(o, {
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (m) => n.value = m)
    }, q(s)), {
      default: c(() => [
        r(a.$slots, "default")
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
    const t = Me(e, ["title"]);
    return (o, s) => (i(), f(l(E).Item, $(T(t)), {
      default: c(({ isActive: n }) => [
        b(l(E).Header, null, {
          default: c(() => [
            b(l(E).Trigger, null, {
              default: c(() => [
                b(l(E).Title, null, {
                  default: c(() => [
                    r(o.$slots, "title", {}, () => [
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
        b(l(E).Body, null, {
          default: c(() => [
            r(o.$slots, "default", { isActive: n })
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
      class: P(["v-avatar", {
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
}, _t = {}, gt = { class: "v-avatar-group" };
function Vt(e, t) {
  return i(), p("div", gt, [
    r(e.$slots, "default")
  ]);
}
const bt = /* @__PURE__ */ ht(_t, [["render", Vt]]), yt = {
  install(e) {
    e.component("VAvatar", vt);
  }
}, $t = {
  install(e) {
    e.component("VAvatarGroup", bt);
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
    const t = e, o = M(), s = V(() => !!t.title || !!o?.title), n = V(() => !!t.description || !!o?.description);
    return (a, u) => (i(), p("div", {
      class: P(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      g("div", Tt, [
        o?.default ? r(a.$slots, "default", { key: 0 }) : (i(), p(G, { key: 1 }, [
          s.value ? (i(), p("div", Bt, [
            r(a.$slots, "title", {}, () => [
              I(w(e.title), 1)
            ])
          ])) : C("", !0),
          n.value ? (i(), p("div", wt, [
            r(a.$slots, "description", {}, () => [
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
}, Ee = 0, Re = 0, xt = {
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
    this.#e = this.#g(o), this.#o = t, this.#s = o.innerWrapper, this.#a = o.container, this.#n = 0, this.#l = 1, this.#m = !1, this.#i = !1, this.#r = !1, this.#u = void 0, this.#c = void 0, this.#t = {
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
    }, this.#V();
  }
  #g(t) {
    return {
      ...xt,
      ...t
    };
  }
  #V() {
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
      tt(o[n]) ? s[n] = t[n] : s[n] = o[n];
    return s;
  }
}
function kt(e) {
  const t = Ce(), o = Ce(), s = V(() => D(e.props?.offsetTop) ? e.props.offsetTop : Ee), n = V(() => D(e.props?.offsetBottom) ? e.props.offsetBottom : Re);
  function a() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function u() {
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
  return _e(() => {
    e.props.disabled || u();
  }), ze(() => {
    m();
  }), W(() => e.props.disabled, (_) => {
    _ ? m() : u();
  }), {};
}
const St = /* @__PURE__ */ d({
  __name: "VAffix",
  props: {
    offsetTop: { default: Ee },
    offsetBottom: { default: Re },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = le("root"), s = le("content");
    return kt({
      props: t,
      root: o,
      content: s
    }), (n, a) => (i(), p("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      g("div", {
        ref_key: "content",
        ref: s,
        class: "v-affix__content"
      }, [
        r(n.$slots, "default")
      ], 512)
    ], 512));
  }
}), It = {
  install(e) {
    e.component("VAffix", St);
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
    content: V(() => e.props.dot ? "" : D(e.props.value) && D(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
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
    }), n = V(() => !t.hidden && !!(s.value || t.dot || o?.content));
    return (a, u) => (i(), p("div", {
      class: P(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      r(a.$slots, "default"),
      n.value ? (i(), p("sup", Ot, [
        r(a.$slots, "content", { value: l(s) }, () => [
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
      r(t.$slots, "default")
    ]));
  }
}), Nt = {
  install(e) {
    e.component("VCollapse", Dt);
  }
};
function Ft(e) {
  const [t, o] = X();
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
    return (u, m) => l(s) ? r(u.$slots, "content", {
      key: 1,
      close: l(a)
    }) : r(u.$slots, "display", {
      key: 0,
      open: l(n)
    });
  }
}), Gt = {
  install(e) {
    e.component("VInplace", Yt);
  }
}, de = /* @__PURE__ */ d({
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
      r(t.$slots, "default")
    ], 2));
  }
}), Ut = {
  install(e) {
    e.component("VOverlay", de);
  }
}, Xt = {
  key: 0,
  class: "v-modal__header"
}, qt = { class: "v-modal__body" }, Wt = {
  key: 1,
  class: "v-modal__footer"
}, He = /* @__PURE__ */ d({
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
    const o = e, s = t, n = M(), a = x(e, "modelValue"), u = V(() => !!o.title || !!n?.header), m = V(() => !!n?.footer);
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
    }), (v, S) => (i(), f(Ae, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      b(re, {
        onAfterEnter: h,
        onAfterLeave: y
      }, {
        default: c(() => [
          b(l(de), null, {
            default: c(() => [
              H(g("div", {
                class: P(["v-modal", {
                  "v-modal--open": a.value
                }]),
                role: "dialog"
              }, [
                u.value ? (i(), p("div", Xt, [
                  r(v.$slots, "header", { close: _ }, () => [
                    I(w(e.title), 1)
                  ]),
                  g("button", {
                    class: "v-modal__close-button",
                    type: "button",
                    onClick: _
                  }, " x ")
                ])) : C("", !0),
                g("div", qt, [
                  r(v.$slots, "default", { close: _ })
                ]),
                m.value ? (i(), p("div", Wt, [
                  r(v.$slots, "footer", { close: _ })
                ])) : C("", !0)
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
}), jt = {
  install(e) {
    e.component("VModal", He);
  }
}, Kt = { class: "v-drawer__dialog" }, Jt = {
  key: 0,
  class: "v-drawer__header"
}, Qt = { class: "v-drawer__body" }, Zt = {
  key: 1,
  class: "v-drawer__footer"
}, De = /* @__PURE__ */ d({
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
    const o = e, s = t, n = M(), a = x(e, "modelValue"), u = V(() => !!o.title || !!n?.header), m = V(() => !!n?.footer);
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
    }), (v, S) => (i(), f(Ae, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      b(re, {
        onAfterEnter: h,
        onAfterLeave: y
      }, {
        default: c(() => [
          b(l(de), null, {
            default: c(() => [
              H(g("div", {
                class: P(["v-drawer", {
                  "v-drawer--open": a.value
                }]),
                role: "dialog"
              }, [
                g("div", Kt, [
                  u.value ? (i(), p("div", Jt, [
                    r(v.$slots, "header", { close: _ }, () => [
                      I(w(e.title), 1)
                    ]),
                    g("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: _
                    }, " x ")
                  ])) : C("", !0),
                  g("div", Qt, [
                    r(v.$slots, "default", { close: _ })
                  ]),
                  m.value ? (i(), p("div", Zt, [
                    r(v.$slots, "footer", { close: _ })
                  ])) : C("", !0)
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
}), eo = {
  install(e) {
    e.component("VDrawer", De);
  }
};
function un() {
  return {};
}
const to = /* @__PURE__ */ Symbol("VDropdownContextKey"), oo = {
  mounted() {
  },
  unmounted() {
  }
}, so = {
  install(e) {
    e.directive("visible", oo);
  }
}, no = {
  mounted() {
  },
  unmounted() {
  }
}, ao = {
  install(e) {
    e.directive("loading", no);
  }
}, Ne = {
  mounted() {
  },
  unmounted() {
  }
}, lo = {
  install(e) {
    e.directive("click-outside", Ne);
  }
}, io = {
  mounted() {
  },
  unmounted() {
  }
}, ro = {
  install(e) {
    e.directive("tooltip", io);
  }
}, uo = { class: "v-dropdown__menu" }, co = /* @__PURE__ */ d({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, [a, u, m] = X(), _ = () => u(!1);
    function h(v) {
      n("opened", v);
    }
    function y(v) {
      n("opened", v);
    }
    return W(a, (v) => {
      n(v ? "open" : "close");
    }), t({
      setVisible: u,
      isVisible: a
    }), ge(to, {
      props: s
    }), (v, S) => H((i(), p("div", {
      class: P(["v-dropdown", {
        "v-dropdown--open": l(a)
      }])
    }, [
      r(v.$slots, "trigger", {
        isVisible: l(a),
        toggle: l(m),
        setVisible: l(u)
      }),
      b(re, {
        onAfterEnter: h,
        onAfterLeave: y
      }, {
        default: c(() => [
          H(g("div", uo, [
            r(v.$slots, "default")
          ], 512), [
            [j, l(a)]
          ])
        ]),
        _: 3
      })
    ], 2)), [
      [l(Ne), _]
    ]);
  }
}), mo = {
  install(e) {
    e.component("VDropdown", co);
  }
}, fo = /* @__PURE__ */ d({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = le("image"), o = le("root");
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
      g("picture", null, [
        g("img", {
          ref_key: "image",
          ref: t,
          class: "v-image__native",
          alt: ""
        }, null, 512)
      ])
    ], 2));
  }
}), po = {
  install(e) {
    e.component("VImage", fo);
  }
}, vo = /* @__PURE__ */ d({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Ve).Container, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ho = {
  install(e) {
    e.component("VContainer", vo);
  }
}, _o = /* @__PURE__ */ d({
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
    return (o, s) => (i(), f(l(Ve).Col, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), go = {
  install(e) {
    e.component("VCol", _o);
  }
}, Vo = /* @__PURE__ */ d({
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
    return (o, s) => (i(), f(l(Ve).Row, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bo = {
  install(e) {
    e.component("VRow", Vo);
  }
}, yo = /* @__PURE__ */ d({
  __name: "VLayout",
  setup(e) {
    const t = M();
    return (o, s) => (i(), f(l(Pe).Root, null, Le({
      default: c(() => [
        b(l(Pe).Body, null, {
          default: c(() => [
            r(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      t?.header ? {
        name: "header",
        fn: c(() => [
          r(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t?.footer ? {
        name: "footer",
        fn: c(() => [
          r(o.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), $o = {
  install(e) {
    e.component("VLayout", yo);
  }
}, To = { class: "v-pagination" }, Bo = /* @__PURE__ */ d({
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
    return (t, o) => (i(), p("div", To));
  }
}), wo = {
  install(e) {
    e.component("VPagination", Bo);
  }
}, Co = { class: "v-placeholder" }, Po = /* @__PURE__ */ d({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (i(), p("div", Co, [
      r(t.$slots, "default")
    ]));
  }
}), xo = {
  install(e) {
    e.component("VPlaceholder", Po);
  }
}, ko = /* @__PURE__ */ d({
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
    return (n, a) => (i(), f(l(ot).Root, k(o, q(s)), {
      default: c(() => [
        r(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), So = {
  install(e) {
    e.component("VScrollbar", ko);
  }
}, Io = /* @__PURE__ */ d({
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
}), Mo = {
  install(e) {
    e.component("VSpinner", Io);
  }
}, Fe = /* @__PURE__ */ Symbol("VTabsContextKey"), zo = () => Je(Fe, null);
function Ao() {
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
function Lo(e) {
  const t = Qe(), o = V(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const Oo = { class: "v-tabs" }, Eo = { class: "v-tabs__content" }, Ro = /* @__PURE__ */ d({
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
    const o = e, s = t, n = x(e, "modelValue"), {
      tabs: a,
      registerTab: u,
      unregisterTab: m
    } = Ao();
    function _(h) {
      n.value = h, s("change", h);
    }
    return ge(Fe, {
      props: o,
      modelValue: n,
      tabs: a,
      handleChange: _,
      registerTab: u,
      unregisterTab: m
    }), (h, y) => (i(), p("div", Oo, [
      g("div", Eo, [
        r(h.$slots, "default")
      ])
    ]));
  }
}), Ho = /* @__PURE__ */ d({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = M(), s = zo(), { id: n, isActive: a } = Lo({
      context: s,
      props: t
    }), u = Ze({
      id: n,
      props: t,
      slots: o
    });
    return s?.registerTab(u), et(() => {
      s?.unregisterTab(u);
    }), (m, _) => H((i(), p("div", {
      class: P(["v-tab", {
        "v-tab--active": l(a)
      }])
    }, [
      r(m.$slots, "default", { isActive: l(a) })
    ], 2)), [
      [j, l(a)]
    ]);
  }
}), Do = {
  install(e) {
    e.component("VTabs", Ro), e.component("VTab", Ho);
  }
}, No = /* @__PURE__ */ d({
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
    return (n, a) => (i(), f(l(Oe).Root, k(o, q(s)), {
      default: c(() => [
        r(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fo = /* @__PURE__ */ d({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(Oe).Group, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Yo = {
  install(e) {
    e.component("VTag", No);
  }
}, cn = {
  install(e) {
    e.component("VTagGroup", Fo);
  }
}, Go = /* @__PURE__ */ d({
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
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uo = {
  install(e) {
    e.component("VText", Go);
  }
}, Xo = /* @__PURE__ */ d({
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
    const o = e, s = t, n = x(e, "modelValue");
    return (a, u) => (i(), f(l(Y).Root, k({
      modelValue: n.value,
      "onUpdate:modelValue": u[0] || (u[0] = (m) => n.value = m)
    }, o, q(s)), {
      default: c((m) => [
        r(a.$slots, "default", $(T(m)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), qo = {
  install(e) {
    e.component("VForm", Xo);
  }
}, Wo = /* @__PURE__ */ d({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = Me(e, ["title"]), s = t, n = M();
    return (a, u) => (i(), f(l(Y).Item, k(o, q(s)), Le({
      default: c((m) => [
        r(a.$slots, "default", $(T(m)))
      ]),
      footer: c((m) => [
        r(a.$slots, "footer", $(T(m)), () => [
          b(l(Y).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      n.header ? {
        name: "header",
        fn: c((m) => [
          r(a.$slots, "header", $(T(m)), () => [
            b(l(Y).ItemTitle, null, {
              default: c(() => [
                I(w(e.title) + " ", 1),
                m.isRequired ? (i(), f(l(Y).ItemRequired, { key: 0 })) : C("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), jo = {
  install(e) {
    e.component("VFormItem", Wo);
  }
}, Ko = /* @__PURE__ */ d({
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
    const t = e, o = x(e, "modelValue");
    return (s, n) => (i(), f(l(te).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: c(() => [
        b(l(te).Indicator),
        b(l(te).Title, null, {
          default: c(() => [
            r(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Jo = /* @__PURE__ */ d({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(te).Group, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qo = {
  install(e) {
    e.component("VCheckbox", Ko);
  }
}, Zo = {
  install(e) {
    e.component("VCheckboxGroup", Jo);
  }
}, es = /* @__PURE__ */ d({
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
    const t = e, o = M(), s = x(e, "modelValue");
    return (n, a) => (i(), f(l(A).Root, k(t, {
      modelValue: s.value,
      "onUpdate:modelValue": a[0] || (a[0] = (u) => s.value = u)
    }), {
      default: c((u) => [
        o?.before ? (i(), f(l(A).Before, { key: 0 }, {
          default: c(() => [
            r(n.$slots, "before", $(T(u)))
          ]),
          _: 2
        }, 1024)) : C("", !0),
        b(l(A).Control, null, {
          default: c(() => [
            u.isTextarea ? (i(), f(l(A).Textarea, { key: 0 })) : (i(), f(l(A).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (i(), f(l(A).After, { key: 1 }, {
          default: c(() => [
            r(n.$slots, "after", $(T(u)))
          ]),
          _: 2
        }, 1024)) : C("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ts = {
  install(e) {
    e.component("VInput", es);
  }
}, os = /* @__PURE__ */ d({
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
    const t = e, o = x(e, "modelValue");
    return (s, n) => (i(), f(l(xe).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: c(() => [
        (i(!0), p(G, null, ee(e.length, (a, u) => (i(), f(l(xe).Pin, {
          key: `pin-${u}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), ss = {
  install(e) {
    e.component("VInputCode", os);
  }
}, ns = /* @__PURE__ */ d({
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
    const t = e, o = x(e, "modelValue");
    return (s, n) => (i(), f(l(Z).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: c(() => [
        b(l(Z).Button, {
          action: l(ke).DECREMENT
        }, null, 8, ["action"]),
        b(l(Z).Input),
        b(l(Z).Button, {
          action: l(ke).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), as = {
  install(e) {
    e.component("VInputNumber", ns);
  }
}, ls = /* @__PURE__ */ d({
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
    const t = e, o = x(e, "modelValue");
    return (s, n) => (i(), f(l(at).Root, k({
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }, t), null, 16, ["modelValue"]));
  }
}), is = {
  install(e) {
    e.component("VInputPassword", ls);
  }
}, rs = /* @__PURE__ */ d({
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
    const t = e, o = x(e, "modelValue");
    return (s, n) => (i(), f(l(oe).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: c(() => [
        b(l(oe).Indicator),
        b(l(oe).Title, null, {
          default: c(() => [
            r(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), us = /* @__PURE__ */ d({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(oe).Group, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), cs = {
  install(e) {
    e.component("VRadio", rs);
  }
}, ds = {
  install(e) {
    e.component("VRadioGroup", us);
  }
}, ms = /* @__PURE__ */ d({
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
    const t = e, o = x(e, "modelValue");
    return (s, n) => (i(), f(l(ve).Root, k(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: c(() => [
        b(l(ve).Indicator),
        b(l(ve).Title, null, {
          default: c(() => [
            r(s.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), fs = {
  install(e) {
    e.component("VSwitch", ms);
  }
}, ps = /* @__PURE__ */ d({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(lt).Root, $(T(t)), {
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), vs = {
  install(e) {
    e.component("VConfigProvider", ps);
  }
}, hs = { class: "v-progress__value" }, _s = {
  key: 0,
  class: "v-progress__label"
}, gs = /* @__PURE__ */ d({
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
      g("div", hs, [
        e.showValue ? (i(), p("div", _s, [
          r(t.$slots, "default")
        ])) : C("", !0)
      ])
    ], 2));
  }
}), Vs = {
  install(e) {
    e.component("VProgress", gs);
  }
}, bs = /* @__PURE__ */ d({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = M();
    return (s, n) => (i(), f(l(Se).Root, $(T(t)), {
      default: c(() => [
        o?.default ? (i(), f(l(Se).Content, { key: 0 }, {
          default: c(() => [
            r(s.$slots, "default")
          ]),
          _: 3
        })) : C("", !0)
      ]),
      _: 3
    }, 16));
  }
}), ys = {
  install(e) {
    e.component("VDivider", bs);
  }
}, $s = /* @__PURE__ */ d({
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
      default: c(() => [
        r(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ts = {
  install(e) {
    e.component("VFlex", $s);
  }
};
function Bs(e) {
  const t = R([]), o = R({
    prop: null,
    order: null
  }), s = V(() => e.columns.some((h) => !!h.title));
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
    clearSort: u,
    sort: m,
    toggleAllSelection: _
  };
}
const ws = ue(() => import("./TableRow-CGxD121l.js")), Cs = ue(() => import("./TableEmpty-BbxJxPl7.js")), Ps = ue(() => import("./TableBodyCell-BrsrhPFn.js")), xs = ue(() => import("./TableHeaderCell-BkFT9rgB.js")), ks = /* @__PURE__ */ Symbol("VTableContextKey"), Ss = { class: "v-table" }, Is = {
  key: 0,
  class: "v-table__native"
}, Ms = { key: 0 }, zs = /* @__PURE__ */ d({
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
      sort: m,
      toggleAllSelection: _
    } = Bs(o);
    return ge(ks, {
      props: o
    }), t({
      clearSelection: n,
      getSelectionRows: a,
      clearSort: u,
      sort: m,
      toggleAllSelection: _
    }), (h, y) => (i(), p("div", Ss, [
      e.data.length ? (i(), p("table", Is, [
        l(s) ? (i(), p("thead", Ms, [
          g("tr", null, [
            (i(!0), p(G, null, ee(e.columns, (v) => (i(), f(l(xs), {
              key: v.prop
            }, {
              default: c(() => [
                I(w(v.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : C("", !0),
        g("tbody", null, [
          (i(!0), p(G, null, ee(e.data, (v, S) => (i(), f(l(ws), {
            key: `row-${S}`
          }, {
            default: c(() => [
              (i(!0), p(G, null, ee(e.columns, (z) => (i(), f(l(Ps), {
                key: `row-${S}-${String(z.prop)}`
              }, {
                default: c(() => [
                  r(h.$slots, String(z.prop), { row: v }, () => [
                    I(w(v[z.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (i(), f(l(Cs), { key: 1 }, {
        default: c(() => [
          r(h.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), As = {
  install(e) {
    e.component("VTable", zs);
  }
}, Ls = /* @__PURE__ */ d({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (i(), f(l(A).Group, null, {
      default: c(() => [
        r(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Os = /* @__PURE__ */ d({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (i(), f(l(A).GroupAddon, null, {
      default: c(() => [
        r(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Es = {
  install(e) {
    e.component("VInputGroup", Ls), e.component("VInputGroupAddon", Os);
  }
}, se = 1e3, ne = 60 * se, ae = 60 * ne, Ie = 24 * ae, Ye = Date.now(), Ge = 1e3;
function Rs(e) {
  const [t, o] = X(), [s, n] = X(), a = R(0), u = R(0), m = R(0), _ = V(() => e.props.now || Ye), h = V(() => e.props.interval || Ge), y = V(() => 0), v = V(() => 0), S = V(() => Math.floor(a.value / Ie)), z = V(() => Math.floor(a.value % Ie / ae)), K = V(() => Math.floor(a.value % ae / ne)), J = V(() => Math.floor(a.value % ne / se)), O = V(() => Math.floor(a.value % se)), be = V(() => Math.floor(a.value / ae)), Xe = V(() => Math.floor(a.value / ne)), qe = V(() => Math.floor(a.value / se));
  function me() {
    t.value || (o(!0), e.props?.autoStart || (a.value = e.props.start, u.value = _.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && fe());
  }
  function N() {
    cancelAnimationFrame(m.value), m.value = 0;
  }
  function We() {
    t.value && ($e(), a.value > 0 && e.onProgress?.({
      days: S.value,
      hours: z.value,
      minutes: K.value,
      seconds: J.value,
      milliseconds: O.value,
      totalDays: S.value,
      totalHours: be.value,
      totalMinutes: Xe.value,
      totalSeconds: qe.value,
      totalMilliseconds: a.value
    }), fe());
  }
  function fe() {
    if (!t.value)
      return;
    const L = Math.min(a.value, h.value);
    if (L > 0) {
      let Be = function(F) {
        pe || (pe = F), Q || (Q = F);
        const we = F - pe;
        we >= L || we + (F - Q) / 2 >= L ? We() : m.value = requestAnimationFrame(Be), Q = F;
      }, pe, Q;
      m.value = requestAnimationFrame(Be);
    } else
      ye();
  }
  function je() {
    t.value && (N(), o(!1), e.onAbort?.());
  }
  function ye() {
    t.value && (N(), a.value = 0, o(!1), e.onEnd?.());
  }
  function $e() {
    t.value && (a.value = Math.max(0, u.value - _.value));
  }
  function Ke() {
    N(), a.value = e.props.start, u.value = _.value + e.props.start, o(!1), me();
  }
  function Te() {
    switch (document.visibilityState) {
      case "visible":
        m.value === 0 && s.value && ($e(), fe()), n(!1);
        break;
      case "hidden":
        m.value > 0 && (n(!0), N());
        break;
    }
  }
  return _e(() => {
    document.addEventListener("visibilitychange", Te);
  }), ze(() => {
    document.removeEventListener("visibilitychange", Te), N();
  }), W(() => e.props, (L) => {
    a.value = L.start, u.value = _.value + L.start, L.autoStart && me();
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
    abort: je,
    end: ye,
    restart: Ke
  };
}
const Hs = { class: "v-countdown" }, Ds = /* @__PURE__ */ d({
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
      months: u,
      days: m,
      hours: _,
      minutes: h,
      seconds: y,
      milliseconds: v,
      start: S,
      abort: z,
      end: K,
      restart: J
    } = Rs({
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
    }), (O, be) => (i(), p("div", Hs, [
      r(O.$slots, "default", {
        years: l(a),
        months: l(u),
        days: l(m),
        hours: l(_),
        minutes: l(h),
        seconds: l(y),
        milliseconds: l(v)
      })
    ]));
  }
}), Ns = {
  install(e) {
    e.component("VCountdown", Ds);
  }
}, Fs = { class: "v-calendar" }, Ys = /* @__PURE__ */ d({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", Fs));
  }
}), Gs = {
  install(e) {
    e.component("VCalendar", Ys);
  }
}, dn = {
  install(e) {
    e.use(ft), e.use(It), e.use(yt), e.use($t), e.use(Rt), e.use(At), e.use(ct), e.use(Nt), e.use(vs), e.use(jt), e.use(Gt), e.use(eo), e.use(mo), e.use(po), e.use(wo), e.use(xo), e.use(So), e.use(Mo), e.use(Do), e.use(Yo), e.use(Uo), e.use(ho), e.use(go), e.use(bo), e.use($o), e.use(qo), e.use(jo), e.use(ts), e.use(Qo), e.use(Zo), e.use(is), e.use(as), e.use(ss), e.use(cs), e.use(ds), e.use(fs), e.use(Ut), e.use(Pt), e.use(Vs), e.use(ys), e.use(Ts), e.use(As), e.use(Es), e.use(Ns), e.use(Gs), e.use(so), e.use(lo), e.use(ao), e.use(ro);
  }
}, Us = { class: "v-confirm__header" }, Xs = { class: "v-confirm__title" }, qs = { class: "v-confirm__body" }, Ws = {
  key: 0,
  class: "v-confirm__text"
}, js = ["innerHTML"], Ks = { class: "v-confirm__footer" }, Js = /* @__PURE__ */ d({
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
    return (s, n) => (i(), f(l(de), null, {
      default: c(() => [
        g("div", {
          class: P(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          g("div", Us, [
            g("div", Xs, w(e.title), 1),
            g("button", {
              type: "button",
              onClick: n[0] || (n[0] = (a) => o("close"))
            }, " X ")
          ]),
          g("div", qs, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, js)) : (i(), p("div", Ws, w(e.message), 1))
          ]),
          g("div", Ks, [
            g("button", {
              type: "button",
              onClick: n[1] || (n[1] = (a) => o("success"))
            }, w(e.confirmText), 1),
            g("button", {
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
class mn {
  static #e = null;
  static async open(t, o) {
    return new Promise((s) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const n = (u) => {
        try {
          this.close(), s(u);
        } catch (m) {
          console.error(m), s(!1);
        }
      }, a = ce(Js, {
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
const fn = {
  install() {
  }
}, Ue = 1500;
function Qs(e) {
  const t = V(() => D(e.props.duration) ? e.props.duration : Ue), [o, s] = X(!1);
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
const Zs = { class: "v-toast__header" }, en = { class: "v-toast__title" }, tn = { class: "v-toast__body" }, on = {
  key: 0,
  class: "v-toast__text"
}, sn = ["innerHTML"], nn = /* @__PURE__ */ d({
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
    const o = e, s = t, { isVisible: n, setVisible: a, startTimer: u, clearTimer: m } = Qs({
      props: o
    });
    return (_, h) => (i(), f(re, {
      name: "fade-in-up",
      onAfterLeave: h[3] || (h[3] = (y) => s("close"))
    }, {
      default: c(() => [
        H(g("div", {
          class: P(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: h[1] || (h[1] = //@ts-ignore
          (...y) => l(m) && l(m)(...y)),
          onMouseleave: h[2] || (h[2] = //@ts-ignore
          (...y) => l(u) && l(u)(...y))
        }, [
          g("div", Zs, [
            g("div", en, w(e.title), 1),
            e.clearable ? (i(), p("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: h[0] || (h[0] = (y) => l(a)(!1))
            }, " X ")) : C("", !0)
          ]),
          g("div", tn, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, sn)) : (i(), p("div", on, w(e.message), 1))
          ])
        ], 34), [
          [j, l(n)]
        ])
      ]),
      _: 1
    }));
  }
});
class pn {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const s = ce(nn, {
      ...t,
      appContext: o
    });
    U(s, this.#e);
  }
}
class vn {
  static open(t, o) {
    const s = ce(He, {
      ...t,
      appContext: o
    });
    U(s, document.body);
  }
}
class hn {
  static open(t, o) {
    const s = ce(De, {
      ...t,
      appContext: o
    });
    U(s, document.body);
  }
}
const _n = {
  name: "ru",
  vau: {}
}, gn = {
  name: "en",
  vau: {}
};
export {
  Fo as $,
  ft as A,
  ct as B,
  Nt as C,
  eo as D,
  ho as E,
  _o as F,
  go as G,
  Vo as H,
  Gt as I,
  yo as J,
  Bo as K,
  $o as L,
  jt as M,
  Po as N,
  xo as O,
  wo as P,
  ko as Q,
  bo as R,
  So as S,
  Io as T,
  Mo as U,
  bt as V,
  Ro as W,
  Ho as X,
  Do as Y,
  No as Z,
  ht as _,
  rt as a,
  Yo as a0,
  cn as a1,
  Go as a2,
  Uo as a3,
  Xo as a4,
  qo as a5,
  Wo as a6,
  jo as a7,
  Ko as a8,
  Jo as a9,
  zs as aA,
  As as aB,
  Ls as aC,
  Os as aD,
  Es as aE,
  Ds as aF,
  Ns as aG,
  Ys as aH,
  Gs as aI,
  oo as aJ,
  so as aK,
  no as aL,
  ao as aM,
  Ne as aN,
  lo as aO,
  io as aP,
  ro as aQ,
  dn as aR,
  mn as aS,
  fn as aT,
  pn as aU,
  vn as aV,
  hn as aW,
  _n as aX,
  gn as aY,
  Qo as aa,
  Zo as ab,
  es as ac,
  ts as ad,
  os as ae,
  ss as af,
  ns as ag,
  as as ah,
  ls as ai,
  is as aj,
  rs as ak,
  us as al,
  cs as am,
  ds as an,
  ms as ao,
  fs as ap,
  ps as aq,
  vs as ar,
  de as as,
  Ut as at,
  gs as au,
  Vs as av,
  bs as aw,
  ys as ax,
  $s as ay,
  Ts as az,
  ut as b,
  rn as c,
  dt as d,
  mt as e,
  vt as f,
  yt as g,
  $t as h,
  Ct as i,
  Pt as j,
  St as k,
  It as l,
  zt as m,
  At as n,
  Et as o,
  Rt as p,
  Dt as q,
  Yt as r,
  He as s,
  De as t,
  un as u,
  co as v,
  mo as w,
  fo as x,
  po as y,
  vo as z
};
