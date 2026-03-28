import { defineComponent as m, createBlock as f, openBlock as i, unref as l, normalizeProps as g, guardReactiveProps as y, withCtx as u, renderSlot as c, mergeModels as T, useModel as P, mergeProps as x, toHandlers as U, createPropsRestProxy as fe, createVNode as h, createTextVNode as z, toDisplayString as w, createElementBlock as p, normalizeClass as I, createCommentVNode as C, useSlots as S, computed as _, createElementVNode as V, Fragment as Ie, shallowRef as Te, onMounted as pe, onBeforeUnmount as Se, watch as ae, useTemplateRef as se, Teleport as We, Transition as ve, withDirectives as le, vShow as ie, provide as Me, createSlots as ke, inject as Ke, ref as J, useId as Je, reactive as Qe, onUnmounted as Ze, renderList as et, h as re, render as G } from "vue";
import { Button as ze, Accordion as R, isUndefined as tt, isNumber as E, useToggle as Y, Modal as M, Layout as Be, Grid as he, Scrollbar as ot, Tag as Ae, Text as st, Form as N, Checkbox as Q, Input as k, InputCode as we, InputNumber as K, INPUT_NUMBER_ACTIONS as Ce, INPUT_NUMBER_VALUE_DEFAULT as nt, InputPassword as at, Radio as Z, Select as F, Switch as me, ConfigProvider as lt, Divider as xe, Flex as Le } from "@vau/core";
const it = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(ze).Root, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rt = /* @__PURE__ */ m({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(ze).Group, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ut = {
  install(e) {
    e.component("VButton", it);
  }
}, Ds = {
  install(e) {
    e.component("VButtonGroup", rt);
  }
}, ct = /* @__PURE__ */ m({
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
    return (a, r) => (i(), f(l(R).Root, x(o, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (d) => n.value = d)
    }, U(s)), {
      default: u(() => [
        c(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), dt = /* @__PURE__ */ m({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = fe(e, ["title"]);
    return (o, s) => (i(), f(l(R).Item, g(y(t)), {
      default: u(({ isActive: n }) => [
        h(l(R).Header, null, {
          default: u(() => [
            h(l(R).Trigger, null, {
              default: u(() => [
                h(l(R).Title, null, {
                  default: u(() => [
                    c(o.$slots, "title", {}, () => [
                      z(w(e.title), 1)
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
          default: u(() => [
            c(o.$slots, "default", { isActive: n })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), mt = {
  install(e) {
    e.component("VAccordion", ct), e.component("VAccordionItem", dt);
  }
}, ft = {
  key: 0,
  class: "v-avatar__label"
}, pt = /* @__PURE__ */ m({
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
      e.label ? (i(), p("div", ft, w(e.label), 1)) : C("", !0)
    ], 2));
  }
}), vt = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [s, n] of t)
    o[s] = n;
  return o;
}, ht = {}, _t = { class: "v-avatar-group" };
function Vt(e, t) {
  return i(), p("div", _t, [
    c(e.$slots, "default")
  ]);
}
const gt = /* @__PURE__ */ vt(ht, [["render", Vt]]), yt = {
  install(e) {
    e.component("VAvatar", pt);
  }
}, bt = {
  install(e) {
    e.component("VAvatarGroup", gt);
  }
}, $t = { class: "v-alert__content" }, Tt = {
  key: 0,
  class: "v-alert__title"
}, Bt = {
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
    const t = e, o = S(), s = _(() => !!t.title || !!o?.title), n = _(() => !!t.description || !!o?.description);
    return (a, r) => (i(), p("div", {
      class: I(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      V("div", $t, [
        o?.default ? c(a.$slots, "default", { key: 0 }) : (i(), p(Ie, { key: 1 }, [
          s.value ? (i(), p("div", Tt, [
            c(a.$slots, "title", {}, () => [
              z(w(e.title), 1)
            ])
          ])) : C("", !0),
          n.value ? (i(), p("div", Bt, [
            c(a.$slots, "description", {}, () => [
              z(w(e.description), 1)
            ])
          ])) : C("", !0)
        ], 64))
      ])
    ], 2));
  }
}), Ct = {
  install(e) {
    e.component("VAlert", wt);
  }
}, Oe = 0, Re = 0, xt = {
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
      ...xt,
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
    const o = this.#$(), s = this.#w(o);
    function n(a) {
      const r = E(a) ? "px" : "";
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
function Pt(e) {
  const t = Te(), o = Te(), s = _(() => E(e.props?.offsetTop) ? e.props.offsetTop : Oe), n = _(() => E(e.props?.offsetBottom) ? e.props.offsetBottom : Re);
  function a() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function r() {
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
    e.props.disabled || r();
  }), Se(() => {
    d();
  }), ae(() => e.props.disabled, (v) => {
    v ? d() : r();
  }), {};
}
const It = /* @__PURE__ */ m({
  __name: "VAffix",
  props: {
    offsetTop: { default: Oe },
    offsetBottom: { default: Re },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = se("root"), s = se("content");
    return Pt({
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
}), St = {
  install(e) {
    e.component("VAffix", It);
  }
}, Mt = { class: "v-breadcrumbs" }, kt = /* @__PURE__ */ m({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (i(), p("nav", Mt));
  }
}), zt = {
  install(e) {
    e.component("VBreadcrumbs", kt);
  }
};
function At(e) {
  return {
    content: _(() => e.props.dot ? "" : E(e.props.value) && E(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const Lt = {
  key: 0,
  class: "v-badge__content"
}, Ot = /* @__PURE__ */ m({
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
    const t = e, o = S(), { content: s } = At({
      props: t
    }), n = _(() => !t.hidden && !!(s.value || t.dot || o?.content));
    return (a, r) => (i(), p("div", {
      class: I(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      c(a.$slots, "default"),
      n.value ? (i(), p("sup", Lt, [
        c(a.$slots, "content", { value: l(s) }, () => [
          z(w(l(s)), 1)
        ])
      ])) : C("", !0)
    ], 2));
  }
}), Rt = {
  install(e) {
    e.component("VBadge", Ot);
  }
}, Et = { class: "v-collapse" }, Dt = /* @__PURE__ */ m({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (i(), p("div", Et, [
      c(t.$slots, "default")
    ]));
  }
}), Ht = {
  install(e) {
    e.component("VCollapse", Dt);
  }
};
function Nt(e) {
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
const Ft = /* @__PURE__ */ m({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: s, handleOpen: n, handleClose: a } = Nt({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (r, d) => l(s) ? c(r.$slots, "content", {
      key: 1,
      close: l(a)
    }) : c(r.$slots, "display", {
      key: 0,
      open: l(n)
    });
  }
}), Gt = {
  install(e) {
    e.component("VInplace", Ft);
  }
}, Ee = /* @__PURE__ */ m({
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
    return (r, d) => (i(), f(l(M).Root, x({
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
      default: u(() => [
        h(l(M).Dialog, null, {
          default: u(() => [
            h(l(M).Content, null, {
              default: u(() => [
                h(l(M).Header, null, {
                  default: u(() => [
                    c(r.$slots, "header", {}, () => [
                      e.title ? (i(), f(l(M).Title, { key: 0 }, {
                        default: u(() => [
                          z(w(e.title), 1)
                        ]),
                        _: 1
                      })) : C("", !0),
                      h(l(M).Close, null, {
                        default: u(() => [...d[5] || (d[5] = [
                          z("X", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }),
                h(l(M).Body, null, {
                  default: u(() => [
                    c(r.$slots, "default")
                  ]),
                  _: 3
                }),
                n?.footer ? (i(), f(l(M).Footer, { key: 0 }, {
                  default: u(() => [
                    c(r.$slots, "footer")
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
}), Yt = {
  install(e) {
    e.component("VModal", Ee);
  }
}, Ut = { class: "v-drawer__dialog" }, Xt = {
  key: 0,
  class: "v-drawer__header"
}, qt = { class: "v-drawer__body" }, jt = {
  key: 1,
  class: "v-drawer__footer"
}, De = /* @__PURE__ */ m({
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
    const o = e, s = t, n = S(), a = P(e, "modelValue"), r = _(() => !!o.title || !!n?.header), d = _(() => !!n?.footer);
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
    }), (B, L) => (i(), f(We, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      h(ve, {
        onAfterEnter: b,
        onAfterLeave: $
      }, {
        default: u(() => [
          le(V("div", {
            class: I(["v-drawer", {
              "v-drawer--open": a.value
            }]),
            role: "dialog"
          }, [
            V("div", Ut, [
              r.value ? (i(), p("div", Xt, [
                c(B.$slots, "header", { close: v }, () => [
                  z(w(e.title), 1)
                ]),
                V("button", {
                  class: "v-drawer__close-button",
                  type: "button",
                  onClick: v
                }, " x ")
              ])) : C("", !0),
              V("div", qt, [
                c(B.$slots, "default", { close: v })
              ]),
              d.value ? (i(), p("div", jt, [
                c(B.$slots, "footer", { close: v })
              ])) : C("", !0)
            ])
          ], 2), [
            [ie, a.value]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), Wt = {
  install(e) {
    e.component("VDrawer", De);
  }
};
function Hs() {
  return {};
}
const Kt = /* @__PURE__ */ Symbol("VDropdownContextKey"), Jt = { class: "v-dropdown__menu" }, Qt = /* @__PURE__ */ m({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, [a, r, d] = Y();
    function v($) {
      n("opened", $);
    }
    function b($) {
      n("opened", $);
    }
    return ae(a, ($) => {
      n($ ? "open" : "close");
    }), t({
      setVisible: r,
      isVisible: a
    }), Me(Kt, {
      props: s
    }), ($, B) => (i(), p("div", {
      class: I(["v-dropdown", {
        "v-dropdown--open": l(a)
      }])
    }, [
      c($.$slots, "trigger", {
        isVisible: l(a),
        toggle: l(d),
        setVisible: l(r)
      }),
      h(ve, {
        onAfterEnter: v,
        onAfterLeave: b
      }, {
        default: u(() => [
          le(V("div", Jt, [
            c($.$slots, "default")
          ], 512), [
            [ie, l(a)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Zt = {
  install(e) {
    e.component("VDropdown", Qt);
  }
}, eo = /* @__PURE__ */ m({
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
}), to = {
  install(e) {
    e.component("VImage", eo);
  }
}, oo = /* @__PURE__ */ m({
  __name: "VLayout",
  setup(e) {
    const t = S();
    return (o, s) => (i(), f(l(Be).Root, null, ke({
      default: u(() => [
        h(l(Be).Body, null, {
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
}), so = {
  install(e) {
    e.component("VLayout", oo);
  }
}, no = /* @__PURE__ */ m({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(he).Container, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ns = {
  install(e) {
    e.component("VContainer", no);
  }
}, ao = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(he).Row, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fs = {
  install(e) {
    e.component("VRow", ao);
  }
}, lo = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(he).Col, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gs = {
  install(e) {
    e.component("VCol", lo);
  }
}, io = { class: "v-pagination" }, ro = /* @__PURE__ */ m({
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
      c(t.$slots, "default")
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
    return (n, a) => (i(), f(l(ot).Root, x(o, U(s)), {
      default: u(() => [
        c(n.$slots, "default")
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
      class: I(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), _o = {
  install(e) {
    e.component("VSpinner", ho);
  }
}, He = /* @__PURE__ */ Symbol("VTabsContextKey"), Vo = () => Ke(He, null);
function go() {
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
function yo(e) {
  const t = Je(), o = _(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const bo = { class: "v-tabs" }, $o = { class: "v-tabs__content" }, To = /* @__PURE__ */ m({
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
      registerTab: r,
      unregisterTab: d
    } = go();
    function v(b) {
      n.value = b, s("change", b);
    }
    return Me(He, {
      props: o,
      modelValue: n,
      tabs: a,
      handleChange: v,
      registerTab: r,
      unregisterTab: d
    }), (b, $) => (i(), p("div", bo, [
      V("div", $o, [
        c(b.$slots, "default")
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
    const t = e, o = S(), s = Vo(), { id: n, isActive: a } = yo({
      context: s,
      props: t
    }), r = Qe({
      id: n,
      props: t,
      slots: o
    });
    return s?.registerTab(r), Ze(() => {
      s?.unregisterTab(r);
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
    return (n, a) => (i(), f(l(Ae).Root, x(o, U(s)), {
      default: u(() => [
        c(n.$slots, "default")
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
    return (o, s) => (i(), f(l(Ae).Group, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Po = {
  install(e) {
    e.component("VTag", Co);
  }
}, Ys = {
  install(e) {
    e.component("VTagGroup", xo);
  }
}, Io = /* @__PURE__ */ m({
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
    return (o, s) => (i(), f(l(st).Root, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), So = {
  install(e) {
    e.component("VText", Io);
  }
}, Mo = /* @__PURE__ */ m({
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
    return (a, r) => (i(), f(l(N).Root, x({
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (d) => n.value = d)
    }, o, U(s)), {
      default: u((d) => [
        c(a.$slots, "default", g(y(d)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ko = {
  install(e) {
    e.component("VForm", Mo);
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
    const o = fe(e, ["title"]), s = t, n = S();
    return (a, r) => (i(), f(l(N).Item, x(o, U(s)), ke({
      default: u((d) => [
        c(a.$slots, "default", g(y(d)))
      ]),
      footer: u((d) => [
        c(a.$slots, "footer", g(y(d)), () => [
          h(l(N).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      n.header ? {
        name: "header",
        fn: u((d) => [
          c(a.$slots, "header", g(y(d)), () => [
            h(l(N).ItemTitle, null, {
              default: u(() => [
                z(w(e.title) + " ", 1),
                d.isRequired ? (i(), f(l(N).ItemRequired, { key: 0 })) : C("", !0)
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
      default: u(() => [
        h(l(Q).Indicator),
        h(l(Q).Title, null, {
          default: u(() => [
            c(s.$slots, "default")
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
    return (o, s) => (i(), f(l(Q).Group, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ro = {
  install(e) {
    e.component("VCheckbox", Lo);
  }
}, Eo = {
  install(e) {
    e.component("VCheckboxGroup", Oo);
  }
}, Do = /* @__PURE__ */ m({
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
      "onUpdate:modelValue": a[0] || (a[0] = (r) => s.value = r)
    }), {
      default: u((r) => [
        o?.before ? (i(), f(l(k).Before, { key: 0 }, {
          default: u(() => [
            c(n.$slots, "before", g(y(r)))
          ]),
          _: 2
        }, 1024)) : C("", !0),
        h(l(k).Control, null, {
          default: u(() => [
            r.isTextarea ? (i(), f(l(k).Textarea, { key: 0 })) : (i(), f(l(k).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (i(), f(l(k).After, { key: 1 }, {
          default: u(() => [
            c(n.$slots, "after", g(y(r)))
          ]),
          _: 2
        }, 1024)) : C("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Ho = {
  install(e) {
    e.component("VInput", Do);
  }
}, No = /* @__PURE__ */ m({
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
    return (s, n) => (i(), f(l(we).Root, x(t, {
      modelValue: o.value,
      "onUpdate:modelValue": n[0] || (n[0] = (a) => o.value = a)
    }), {
      default: u(() => [
        (i(!0), p(Ie, null, et(e.length, (a, r) => (i(), f(l(we).Pin, {
          key: `pin-${r}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Fo = {
  install(e) {
    e.component("VInputCode", No);
  }
}, Go = /* @__PURE__ */ m({
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
      default: nt
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
      default: u(() => [
        h(l(K).Button, {
          action: l(Ce).DECREMENT
        }, null, 8, ["action"]),
        h(l(K).Input),
        h(l(K).Button, {
          action: l(Ce).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Yo = {
  install(e) {
    e.component("VInputNumber", Go);
  }
}, Uo = /* @__PURE__ */ m({
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
    return (s, n) => (i(), f(l(at).Root, x({
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
      default: u(() => [
        h(l(Z).Indicator),
        h(l(Z).Title, null, {
          default: u(() => [
            c(s.$slots, "default")
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
    return (o, s) => (i(), f(l(Z).Group, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
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
    return (a, r) => (i(), f(l(F).Root, x(o, {
      modelValue: n.value,
      "onUpdate:modelValue": r[0] || (r[0] = (d) => n.value = d),
      onChange: r[1] || (r[1] = (d) => s("change", d)),
      onClose: r[2] || (r[2] = (d) => s("close")),
      onClear: r[3] || (r[3] = (d) => s("clear"))
    }), {
      default: u(() => [
        h(l(F).Value, null, {
          default: u(() => [
            c(a.$slots, "value")
          ]),
          _: 3
        }),
        h(l(F).Dropdown, null, {
          default: u(() => [
            h(l(F).Scrollbar, null, {
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
}), Qo = /* @__PURE__ */ m({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, s) => (i(), f(l(F).Option, g(y(t)), {
      default: u((n) => [
        c(o.$slots, "default", g(y(n)))
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
      default: u(() => [
        h(l(me).Indicator),
        h(l(me).Title, null, {
          default: u(() => [
            c(s.$slots, "default")
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
    return (o, s) => (i(), f(l(lt).Root, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
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
      class: I(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      V("div", ns, [
        e.showValue ? (i(), p("div", as, [
          c(t.$slots, "default")
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
    const t = e, o = S();
    return (s, n) => (i(), f(l(xe).Root, g(y(t)), {
      default: u(() => [
        o?.default ? (i(), f(l(xe).Content, { key: 0 }, {
          default: u(() => [
            c(s.$slots, "default")
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
    return (o, s) => (i(), f(l(Le).Root, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
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
    return (o, s) => (i(), f(l(Le).Item, g(y(t)), {
      default: u(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ms = {
  install(e) {
    e.component("VFlex", cs);
  }
}, Us = {
  install(e) {
    e.component("VFlexItem", ds);
  }
}, fs = /* @__PURE__ */ m({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (i(), f(l(k).Group, null, {
      default: u(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ps = /* @__PURE__ */ m({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (i(), f(l(k).GroupAddon, null, {
      default: u(() => [
        c(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), vs = {
  install(e) {
    e.component("VInputGroup", fs), e.component("VInputGroupAddon", ps);
  }
}, ee = 1e3, te = 60 * ee, oe = 60 * te, Pe = 24 * oe, Ne = Date.now(), Fe = 1e3;
function hs(e) {
  const [t, o] = Y(), [s, n] = Y(), a = J(0), r = J(0), d = J(0), v = _(() => e.props.now || Ne), b = _(() => e.props.interval || Fe), $ = _(() => 0), B = _(() => 0), L = _(() => Math.floor(a.value / Pe)), X = _(() => Math.floor(a.value % Pe / oe)), q = _(() => Math.floor(a.value % oe / te)), j = _(() => Math.floor(a.value % te / ee)), O = _(() => Math.floor(a.value % ee)), _e = _(() => Math.floor(a.value / oe)), Ye = _(() => Math.floor(a.value / te)), Ue = _(() => Math.floor(a.value / ee));
  function ue() {
    t.value || (o(!0), e.props?.autoStart || (a.value = e.props.start, r.value = v.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && ce());
  }
  function D() {
    cancelAnimationFrame(d.value), d.value = 0;
  }
  function Xe() {
    t.value && (ge(), a.value > 0 && e.onProgress?.({
      days: L.value,
      hours: X.value,
      minutes: q.value,
      seconds: j.value,
      milliseconds: O.value,
      totalDays: L.value,
      totalHours: _e.value,
      totalMinutes: Ye.value,
      totalSeconds: Ue.value,
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
        $e >= A || $e + (H - W) / 2 >= A ? Xe() : d.value = requestAnimationFrame(be), W = H;
      }, de, W;
      d.value = requestAnimationFrame(be);
    } else
      Ve();
  }
  function qe() {
    t.value && (D(), o(!1), e.onAbort?.());
  }
  function Ve() {
    t.value && (D(), a.value = 0, o(!1), e.onEnd?.());
  }
  function ge() {
    t.value && (a.value = Math.max(0, r.value - v.value));
  }
  function je() {
    D(), a.value = e.props.start, r.value = v.value + e.props.start, o(!1), ue();
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
    a.value = A.start, r.value = v.value + A.start, A.autoStart && ue();
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
    abort: qe,
    end: Ve,
    restart: je
  };
}
const _s = { class: "v-countdown" }, Vs = /* @__PURE__ */ m({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => Fe },
    start: {},
    now: { default: () => Ne }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const s = e, n = o, {
      years: a,
      months: r,
      days: d,
      hours: v,
      minutes: b,
      seconds: $,
      milliseconds: B,
      start: L,
      abort: X,
      end: q,
      restart: j
    } = hs({
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
    }), (O, _e) => (i(), p("div", _s, [
      c(O.$slots, "default", {
        years: l(a),
        months: l(r),
        days: l(d),
        hours: l(v),
        minutes: l(b),
        seconds: l($),
        milliseconds: l(B)
      })
    ]));
  }
}), gs = {
  install(e) {
    e.component("VCountdown", Vs);
  }
}, ys = { class: "v-calendar" }, bs = /* @__PURE__ */ m({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (i(), p("div", ys));
  }
}), $s = {
  install(e) {
    e.component("VCalendar", bs);
  }
}, Xs = {
  install(e) {
    e.use(mt), e.use(St), e.use(yt), e.use(bt), e.use(Rt), e.use(zt), e.use(ut), e.use(Ht), e.use(ss), e.use(Yt), e.use(Gt), e.use(Wt), e.use(Zt), e.use(to), e.use(uo), e.use(fo), e.use(vo), e.use(_o), e.use(wo), e.use(Po), e.use(So), e.use(so), e.use(ko), e.use(Ao), e.use(Ho), e.use(Ro), e.use(Eo), e.use(Xo), e.use(Yo), e.use(Fo), e.use(Wo), e.use(Ko), e.use(ts), e.use(Zo), e.use(Ct), e.use(is), e.use(us), e.use(ms), e.use(vs), e.use(gs), e.use($s);
  }
}, Ts = { class: "v-confirm__header" }, Bs = { class: "v-confirm__title" }, ws = { class: "v-confirm__body" }, Cs = {
  key: 0,
  class: "v-confirm__text"
}, xs = ["innerHTML"], Ps = { class: "v-confirm__footer" }, Is = /* @__PURE__ */ m({
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
      V("div", Ts, [
        V("div", Bs, w(e.title), 1),
        V("button", {
          type: "button",
          onClick: n[0] || (n[0] = (a) => o("close"))
        }, " X ")
      ]),
      V("div", ws, [
        e.useHtml ? (i(), p("div", {
          key: 1,
          class: "v-confirm__text",
          innerHTML: e.message
        }, null, 8, xs)) : (i(), p("div", Cs, w(e.message), 1))
      ]),
      V("div", Ps, [
        V("button", {
          type: "button",
          onClick: n[1] || (n[1] = (a) => o("success"))
        }, w(e.confirmText), 1),
        V("button", {
          type: "button",
          onClick: n[2] || (n[2] = (a) => o("cancel"))
        }, w(e.cancelText), 1)
      ])
    ], 2));
  }
});
class qs {
  static #e = null;
  static async open(t, o) {
    return new Promise((s) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const n = (r) => {
        try {
          this.close(), s(r);
        } catch (d) {
          console.error(d), s(!1);
        }
      }, a = re(Is, {
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
const js = {
  install() {
  }
}, Ge = 1500;
function Ss(e) {
  const t = _(() => E(e.props.duration) ? e.props.duration : Ge), [o, s] = Y(!1);
  let n = null;
  function a() {
    n && clearTimeout(n);
  }
  function r() {
    a(), t.value !== 0 && (n = setTimeout(() => {
      s(!1);
    }, t.value));
  }
  return pe(() => {
    r(), s(!0);
  }), {
    isVisible: o,
    setVisible: s,
    clearTimer: a,
    startTimer: r
  };
}
const Ms = { class: "v-toast__header" }, ks = { class: "v-toast__title" }, zs = { class: "v-toast__body" }, As = {
  key: 0,
  class: "v-toast__text"
}, Ls = ["innerHTML"], Os = /* @__PURE__ */ m({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: Ge },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, s = t, { isVisible: n, setVisible: a, startTimer: r, clearTimer: d } = Ss({
      props: o
    });
    return (v, b) => (i(), f(ve, {
      name: "fade-in-up",
      onAfterLeave: b[3] || (b[3] = ($) => s("close"))
    }, {
      default: u(() => [
        le(V("div", {
          class: I(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: b[1] || (b[1] = //@ts-ignore
          (...$) => l(d) && l(d)(...$)),
          onMouseleave: b[2] || (b[2] = //@ts-ignore
          (...$) => l(r) && l(r)(...$))
        }, [
          V("div", Ms, [
            V("div", ks, w(e.title), 1),
            e.clearable ? (i(), p("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: b[0] || (b[0] = ($) => l(a)(!1))
            }, " X ")) : C("", !0)
          ]),
          V("div", zs, [
            e.useHtml ? (i(), p("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, Ls)) : (i(), p("div", As, w(e.message), 1))
          ])
        ], 34), [
          [ie, l(n)]
        ])
      ]),
      _: 1
    }));
  }
});
class Ws {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const s = re(Os, {
      ...t,
      appContext: o
    });
    G(s, this.#e);
  }
}
class Ks {
  static open(t, o) {
    const s = re(Ee, {
      ...t,
      appContext: o
    });
    G(s, document.body);
  }
}
class Js {
  static open(t, o) {
    const s = re(De, {
      ...t,
      appContext: o
    });
    G(s, document.body);
  }
}
const Qs = {
  name: "ru",
  vau: {}
}, Zs = {
  name: "en",
  vau: {}
};
export {
  mt as AccordionPlugin,
  St as AffixPlugin,
  Ct as AlertPlugin,
  bt as AvatarGroupPlugin,
  yt as AvatarPlugin,
  Rt as BadgePlugin,
  zt as BreadcrumbsPlugin,
  Ds as ButtonGroupPlugin,
  ut as ButtonPlugin,
  $s as CalendarPlugin,
  Eo as CheckboxGroupPlugin,
  Ro as CheckboxPlugin,
  Gs as ColPlugin,
  Ht as CollapsePlugin,
  ss as ConfigProviderPlugin,
  js as ConfirmPlugin,
  qs as ConfirmService,
  Ns as ContainerPlugin,
  gs as CountdownPlugin,
  us as DividerPlugin,
  Wt as DrawerPlugin,
  Js as DrawerService,
  Zt as DropdownPlugin,
  Us as FlexItemPlugin,
  ms as FlexPlugin,
  Ao as FormItemPlugin,
  ko as FormPlugin,
  to as ImagePlugin,
  Gt as InplacePlugin,
  Fo as InputCodePlugin,
  vs as InputGroupPlugin,
  Yo as InputNumberPlugin,
  Xo as InputPasswordPlugin,
  Ho as InputPlugin,
  so as LayoutPlugin,
  Yt as ModalPlugin,
  Ks as ModalService,
  uo as PaginationPlugin,
  fo as PlaceholderPlugin,
  is as ProgressPlugin,
  Ko as RadioGroupPlugin,
  Wo as RadioPlugin,
  Fs as RowPlugin,
  vo as ScrollbarPlugin,
  Zo as SelectPlugin,
  _o as SpinnerPlugin,
  ts as SwitchPlugin,
  wo as TabsPlugin,
  Ys as TagGroupPlugin,
  Po as TagPlugin,
  So as TextPlugin,
  Ws as ToastService,
  ct as VAccordion,
  dt as VAccordionItem,
  It as VAffix,
  wt as VAlert,
  pt as VAvatar,
  gt as VAvatarGroup,
  Ot as VBadge,
  kt as VBreadcrumbs,
  it as VButton,
  rt as VButtonGroup,
  bs as VCalendar,
  Lo as VCheckbox,
  Oo as VCheckboxGroup,
  lo as VCol,
  Dt as VCollapse,
  os as VConfigProvider,
  no as VContainer,
  Vs as VCountdown,
  rs as VDivider,
  De as VDrawer,
  Qt as VDropdown,
  cs as VFlex,
  ds as VFlexItem,
  Mo as VForm,
  zo as VFormItem,
  eo as VImage,
  Ft as VInplace,
  Do as VInput,
  No as VInputCode,
  fs as VInputGroup,
  ps as VInputGroupAddon,
  Go as VInputNumber,
  Uo as VInputPassword,
  oo as VLayout,
  Ee as VModal,
  Qo as VOption,
  ro as VPagination,
  mo as VPlaceholder,
  ls as VProgress,
  qo as VRadio,
  jo as VRadioGroup,
  ao as VRow,
  po as VScrollbar,
  Jo as VSelect,
  ho as VSpinner,
  es as VSwitch,
  Bo as VTab,
  To as VTabs,
  Co as VTag,
  xo as VTagGroup,
  Io as VText,
  Xs as VauUI,
  Zs as en,
  Qs as ru,
  Hs as useDrawer
};
