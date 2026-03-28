import { computed as c, toValue as b, inject as G, defineComponent as p, mergeModels as I, useModel as k, provide as U, createElementBlock as m, openBlock as r, normalizeClass as R, renderSlot as d, unref as a, withDirectives as H, createElementVNode as B, vShow as re, markRaw as ao, Fragment as Z, Comment as io, mergeProps as N, cloneVNode as ro, h as ie, createBlock as $, withCtx as g, ref as D, watch as q, onBeforeUnmount as Xe, onMounted as ue, onScopeDispose as Fe, isRef as Ae, nextTick as uo, useId as je, onUnmounted as Ee, withModifiers as pt, useSlots as J, useTemplateRef as se, createCommentVNode as F, normalizeProps as A, guardReactiveProps as E, createTextVNode as j, renderList as Ue, toDisplayString as X, toHandlers as te, vModelDynamic as co, vModelText as vt, vModelCheckbox as ht, vModelRadio as mo, createVNode as T, withKeys as tt, useAttrs as fo, Teleport as bt, Transition as De, createPropsRestProxy as ke, shallowRef as ot, createSlots as gt, reactive as po, render as _e } from "vue";
import { z as nt } from "zod";
function vo(e) {
  const t = c(() => b(e.props));
  function o(n) {
    const s = b(e.modelValue);
    if (t.value.multiple && Array.isArray(s)) {
      if (!n)
        return;
      const l = new Set(s);
      l.has(n) ? l.delete(n) : l.add(n), e?.onChangeModel?.([...l]);
    } else
      e?.onChangeModel?.(n);
    e?.onChange?.(n);
  }
  return {
    setModelValue: o
  };
}
function ho(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.accordionRootContext?.modelValue)), n = c(() => !!b(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: c(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function bo(e) {
  const t = c(() => b(e.accordionItemContext?.props)), o = c(() => !!t.value?.disabled);
  function n() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: o,
    handleToggle: n
  };
}
const yt = /* @__PURE__ */ Symbol("AccordionRootContextKey"), _t = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function Vt() {
  return G(yt, null);
}
function xt() {
  return G(_t, null);
}
function go() {
  const e = Vt(), t = xt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const yo = /* @__PURE__ */ p({
  __name: "AccordionRoot",
  props: /* @__PURE__ */ I({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue"), { setModelValue: l } = vo({
      props: () => o,
      modelValue: () => s.value,
      onChange: (i) => n("change", i),
      onChangeModel: (i) => {
        s.value = i;
      }
    });
    return U(yt, {
      props: () => o,
      modelValue: () => s.value,
      setModelValue: l
    }), (i, u) => (r(), m("div", {
      class: R(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(i.$slots, "default")
    ], 2));
  }
}), _o = /* @__PURE__ */ p({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Vt(), { isActive: n } = ho({
      accordionRootContext: o,
      props: () => t
    });
    return U(_t, {
      props: () => t,
      isActive: () => n.value
    }), (s, l) => (r(), m("div", {
      class: R(["accordion-item", {
        "accordion-item--open": a(n),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      d(s.$slots, "default", { isActive: a(n) })
    ], 2));
  }
}), O = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, Vo = {}, xo = { class: "accordion-header" };
function $o(e, t) {
  return r(), m("div", xo, [
    d(e.$slots, "default")
  ]);
}
const Co = /* @__PURE__ */ O(Vo, [["render", $o]]), Ro = {
  class: "accordion-body",
  role: "region"
}, Io = { class: "accordion-body__content" }, Bo = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = xt(), o = c(() => !!b(t?.isActive));
    return (n, s) => H((r(), m("div", Ro, [
      B("div", Io, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [re, o.value]
    ]);
  }
}), To = {}, wo = { class: "accordion-title" };
function So(e, t) {
  return r(), m("div", wo, [
    d(e.$slots, "default")
  ]);
}
const Mo = /* @__PURE__ */ O(To, [["render", So]]), Ao = ["disabled"], Eo = /* @__PURE__ */ p({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = go(), { isDisabled: n, handleToggle: s } = bo({
      accordionRootContext: t,
      accordionItemContext: o
    });
    return (l, i) => (r(), m("button", {
      type: "button",
      disabled: a(n),
      class: "v-accordion-trigger",
      onClick: i[0] || (i[0] = //@ts-ignore
      (...u) => a(s) && a(s)(...u))
    }, [
      d(l.$slots, "default")
    ], 8, Ao));
  }
}), me = {
  Root: yo,
  Item: _o,
  Header: Co,
  Body: Bo,
  Title: Mo,
  Trigger: Eo
};
function Do(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const $t = /* @__PURE__ */ Symbol("FormRootContextKey"), Ct = /* @__PURE__ */ Symbol("FormItemContextKey");
function Rt() {
  return G($t, null);
}
function It() {
  return G(Ct, null);
}
function Q() {
  const e = Rt(), t = It(), o = c(() => !!t?.validationStatus.value.isSuccess), n = c(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: o,
    isInvalid: n
  };
}
function ko(e) {
  return typeof e == "boolean";
}
function pe(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function ze(e) {
  return e === null;
}
function Ge(e) {
  return !ze(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function le(e) {
  return typeof e > "u";
}
function fu(e) {
  return ze(e) || le(e) ? !0 : pe(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ge(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function zo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function K(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function Po(e) {
  return !ze(e) && !le(e) && Ge(e) && !Array.isArray(e);
}
function st(e, t) {
  if (!e || !t.trim())
    return null;
  const o = t.split(".");
  let n = e;
  for (const s of o) {
    if (!Po(n))
      return null;
    n = n[s];
  }
  return n ?? null;
}
function he(e, t = /* @__PURE__ */ new WeakMap()) {
  if (e === null || typeof e != "object")
    return e;
  if (t.has(e))
    return t.get(e);
  if (e instanceof Date) {
    const o = /* @__PURE__ */ new Date();
    return o.setTime(e.getTime()), o;
  }
  if (e instanceof RegExp) {
    const o = new RegExp(e.source, e.flags);
    return t.set(e, o), o;
  }
  if (e instanceof Map) {
    const o = /* @__PURE__ */ new Map();
    return t.set(e, o), e.forEach((n, s) => {
      o.set(he(s, t), he(n, t));
    }), o;
  }
  if (e instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    return t.set(e, o), e.forEach((n) => {
      o.add(he(n, t));
    }), o;
  }
  if (e instanceof ArrayBuffer) {
    const o = e.slice(0);
    return t.set(e, o), o;
  }
  if (zo(e))
    return e;
  if (Array.isArray(e)) {
    const o = [];
    t.set(e, o);
    for (let n = 0; n < e.length; n++)
      o[n] = he(e[n], t);
    return o;
  }
  if (Ge(e)) {
    const o = Object.create(Object.getPrototypeOf(e));
    t.set(e, o);
    const n = [
      ...Object.getOwnPropertyNames(e),
      ...Object.getOwnPropertySymbols(e)
    ];
    for (const s of n) {
      const l = Object.getOwnPropertyDescriptor(e, s);
      l && ("value" in l ? Object.defineProperty(o, s, {
        ...l,
        value: he(l.value, t)
      }) : Object.defineProperty(o, s, l));
    }
    return o;
  }
  return e;
}
function pu(e) {
  return new Promise((t) => setTimeout(t, e));
}
function vu(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function hu(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function bu(e) {
  return e ? "true" : "false";
}
function He(e, t, o = {}) {
  const {
    noTrailing: n = !1,
    noLeading: s = !1,
    debounceMode: l = void 0
  } = o;
  let i = null, u = !1, f = 0, v = null;
  function h() {
    i && (clearTimeout(i), i = null);
  }
  function y(_ = {}) {
    const { upcomingOnly: C = !1 } = _;
    h(), u = !C;
  }
  function V() {
    if (f = Date.now(), v) {
      const _ = v;
      e.apply(this, _), v = null;
    }
  }
  function x(..._) {
    if (u)
      return;
    const C = Date.now() - f;
    v = _;
    function w() {
      i = null;
    }
    h(), !s && l && !i && V.call(this), le(l) && C > t ? s ? (f = Date.now(), n || (i = setTimeout(l ? w : V.bind(this), t))) : V.call(this) : n || (i = setTimeout(
      l ? w : V.bind(this),
      le(l) ? t - C : t
    ));
  }
  return x.cancel = y, x;
}
function Ye(e, t, o = {}) {
  const { atBegin: n = !1 } = o;
  return He(e, t, {
    debounceMode: n
  });
}
function gu(e) {
  return ao(e);
}
function Bt(e) {
  return e ? e.flatMap((t) => t.type === Z ? Bt(t.children) : [t]) : [];
}
const Oo = p({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      if (!o.default)
        return null;
      const n = Bt(o.default()), s = n.findIndex((f) => f.type !== io);
      if (s === -1)
        return n;
      const l = n[s];
      delete l.props?.ref;
      const i = l.props ? N(t, l.props) : t, u = ro({
        ...l,
        props: {}
      }, i);
      return n.length === 1 ? u : (n[s] = u, n);
    };
  }
}), Lo = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "link",
  "meta",
  "source",
  "track",
  "wbr"
], No = p({
  name: "PrimitiveRoot",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: o }) {
    const n = e.asChild ? "template" : e.as;
    return pe(n) && Lo.includes(n) ? () => ie(n, t) : n !== "template" ? () => ie(e.as, t, {
      default: o.default
    }) : () => ie(Oo, t, {
      default: o.default
    });
  }
}), qe = {
  Root: No
}, Xo = /* @__PURE__ */ p({
  __name: "ButtonRoot",
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
    const t = e, { formRootContext: o, formItemContext: n } = Q(), { isDisabled: s } = Do({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return (l, i) => (r(), $(a(qe).Root, {
      as: e.as,
      "as-child": e.asChild,
      class: R(["button", [
        {
          "button--disabled": a(s),
          "button--loading": e.loading,
          "button--plain": e.plain,
          "button--wide": e.wide,
          [`button--theme-${e.theme}`]: e.theme,
          [`button--size-${e.size}`]: e.size
        }
      ]]),
      disabled: a(s),
      type: e.type
    }, {
      default: g(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class", "disabled", "type"]));
  }
}), Fo = /* @__PURE__ */ p({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Tt = {
  Root: Xo,
  Group: Fo
};
function jo() {
  const e = D([]);
  function t(n) {
    const s = e.value.findIndex((l) => l.id === n.id);
    s === -1 ? e.value.push(n) : e.value[s] = n;
  }
  function o(n) {
    e.value = e.value.filter((s) => s.id !== n);
  }
  return {
    formItems: e,
    registerFormItem: t,
    unregisterFormItem: o
  };
}
function Uo(e) {
  const t = c(() => b(e.formItems)), o = c(() => t.value.filter((l) => l.isValidatable));
  async function n(l = !1) {
    const u = (await Promise.all(o.value.map((f) => f.validate(l)))).every(Boolean);
    return u ? e.onValid?.() : e.onInvalid?.(), u;
  }
  function s() {
    t.value.forEach((l) => l.clearValidateErrors());
  }
  return {
    validatableFormItems: o,
    validate: n,
    clearValidate: s
  };
}
function W(e = !1) {
  const t = D(e);
  function o(s) {
    t.value = s;
  }
  function n() {
    o(!t.value);
  }
  return [
    t,
    o,
    n
  ];
}
function yu(e) {
  const t = new Intl.PluralRules("ru-RU"), o = /* @__PURE__ */ new Map([
    ["one", e[0]],
    ["few", e[1]],
    ["many", e[2]]
  ]);
  function n(s) {
    if (Number.isNaN(s) || s < 0)
      return;
    const l = t.select(s);
    return o.get(l);
  }
  return {
    plural: n
  };
}
function Go(e, t, o) {
  let n;
  const s = q(e, (u) => {
    i(), u && (n = new IntersectionObserver(t, o), n.observe(u));
  }, {
    immediate: !0,
    flush: "post"
  });
  function l() {
    i(), s();
  }
  function i() {
    n && (n.disconnect(), n = void 0);
  }
  return Xe(() => {
    l();
  }), {
    stop: l
  };
}
const wt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), Ho = Object.freeze({
  NUMERIC: "numeric",
  TEL: "tel",
  TEXT: "text",
  DECIMAL: "decimal",
  SEARCH: "search",
  EMAIL: "email",
  NONE: "none",
  URL: "url"
}), be = Object.freeze({
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  PASSWORD: "password"
}), _u = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Vu = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), xu = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), $u = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Cu = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Ru = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), lt = Object.freeze({
  LAZY_IMAGE: {
    threshold: 0,
    rootMargin: "50px 0px 50px 0px"
  },
  /** Для бесконечного скролла */
  INFINITE_SCROLL: {
    threshold: 0,
    rootMargin: "100px 0px 100px 0px"
  },
  /** Для отслеживания видимости 50% элемента */
  HALF_VISIBLE: {
    threshold: 0.5
  },
  /** Для точного определения полной видимости */
  FULL_VISIBLE: {
    threshold: 1
  },
  /** Для пошагового отслеживания видимости */
  STEPPED: {
    threshold: [0, 0.25, 0.5, 0.75, 1]
  }
});
function Iu(e, t, o = {}) {
  const {
    rootMargin: n = lt.LAZY_IMAGE.rootMargin,
    threshold: s = lt.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: u } = Go(e, S, {
    rootMargin: n,
    threshold: s
  }), [f, v] = W(), [h, y] = W(), V = D(""), x = D(""), _ = D(""), C = pe(t) ? { src: t } : t;
  function w() {
    if (f.value || h.value)
      return;
    const z = new Image();
    z.src = C.src, C.srcset && (z.srcset = C.srcset), C.sizes && (z.sizes = C.sizes), z.onload = () => {
      V.value = C.src, x.value = C.srcset || "", _.value = C.sizes || "", v(!0), y(!1);
    }, z.onerror = () => {
      v(!1), y(!0);
    };
  }
  function S(z) {
    z.forEach((P) => {
      P.isIntersecting && !f.value && !h.value && w();
    });
  }
  return ue(() => {
    if (i || l && "loading" in HTMLImageElement.prototype) {
      w();
      return;
    }
  }), {
    isLoaded: f,
    hasError: h,
    imageSrc: V,
    imageSrcset: x,
    imageSizes: _,
    loadImage: w,
    stop: u
  };
}
function Bu() {
  return {};
}
function Tu() {
  if (!window)
    return {
      number: D(0),
      animate: () => {
      }
    };
  const e = D(0);
  function t(o, n, s) {
    let l;
    function i(u) {
      l || (l = u);
      const f = Math.min((u - l) / s, 1);
      e.value = Math.floor(f * (n - o) + o), f < 1 && window.requestAnimationFrame(i);
    }
    window.requestAnimationFrame(i);
  }
  return {
    number: e,
    animate: t
  };
}
function wu() {
  if (!window)
    return {
      x: D(0),
      y: D(0)
    };
  const e = D(window.scrollX), t = D(window.scrollY);
  function o() {
    window && (e.value = window.scrollX, t.value = window.scrollY);
  }
  function n(s) {
    window.scrollTo(s);
  }
  return ue(() => {
    o(), window.addEventListener("scroll", o);
  }), Fe(() => {
    window.removeEventListener("scroll", o);
  }), {
    x: e,
    y: t,
    setScroll: n
  };
}
function Su(e, t) {
  (pe(e) ? document.querySelector(e) : Ae(e) ? a(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function Mu(e, t) {
  return {
    listeners: t.reduce((n, s) => {
      const l = s, i = String(l);
      return n[l] = ((...u) => e(i, ...u)), n;
    }, {})
  };
}
function Yo(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = jo(), { validate: s, clearValidate: l, validatableFormItems: i } = Uo({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [u, f] = W(!1), v = D(!1), h = D("");
  function y() {
    t.value.forEach((_) => _.reset()), l();
  }
  q(i, async (_) => {
    const C = _.map((S) => S.id).sort().join(",");
    if (C === h.value)
      return;
    if (h.value = C, _.length === 0) {
      v.value && f(!0);
      return;
    }
    v.value = !0;
    const w = await s(!0);
    f(w);
  }, {
    immediate: !0
  });
  const V = Ye(async () => {
    const _ = await s(!0);
    f(_);
  }, 400);
  async function x(_ = !1) {
    const C = await s(_);
    return f(C), C;
  }
  return q(() => b(e.modelValue), () => {
    V();
  }, {
    deep: !0
  }), ue(async () => {
    await uo(), await x(!0);
  }), Fe(() => {
    V.cancel();
  }), {
    isValid: u,
    validate: x,
    clearValidate: l,
    registerFormItem: o,
    unregisterFormItem: n,
    reset: y
  };
}
function qo() {
  const e = D();
  function t(n) {
    e.value = n;
  }
  function o() {
    e.value = void 0;
  }
  return {
    field: e,
    registerField: t,
    unregisterField: o
  };
}
function Ko(e) {
  const t = c(() => b(e.data)), o = c(() => b(e.schema)), n = D({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), s = D([]);
  function l(f) {
    n.value = { ...n.value, ...f };
  }
  function i() {
    s.value = [];
  }
  async function u(f = !1) {
    if (!t.value || !o.value)
      return !1;
    l({ isValidating: !0 });
    const v = await o.value.safeParseAsync(t.value);
    return l({ isValidating: !1 }), v.success ? (l({ isError: !1, isSuccess: !0 }), e.onValid?.(), !0) : (f || (l({ isError: !0, isSuccess: !1 }), v.error && (s.value = v.error.issues)), e.onInvalid?.(), !1);
  }
  return {
    validationStatus: n,
    validationErrors: s,
    clearValidateErrors: i,
    validate: u
  };
}
function Wo(e) {
  const t = je(), { field: o, registerField: n, unregisterField: s } = qo(), l = c(() => b(e.props)), i = c(() => l.value.name), u = c(() => e.formRootContext?.modelValue.value), f = c(() => e.formRootContext?.props?.rules), v = c(() => i.value && u.value && st(u.value, i.value)), h = c(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), y = c(() => {
    if (!i.value || !f.value)
      return null;
    const L = st(f.value, i.value);
    return L instanceof nt.ZodType ? L : null;
  }), V = c(() => !!y.value), x = c(() => y.value ? !y.value.safeParse(void 0).success : !1), {
    validationStatus: _,
    validationErrors: C,
    clearValidateErrors: w,
    validate: S
  } = Ko({
    data: () => i.value ? {
      [i.value]: v.value
    } : null,
    schema: () => !i.value || !y.value ? null : nt.object({
      [i.value]: y.value
    }),
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), z = c(() => ({
    id: t,
    props: l.value,
    validationStatus: _.value,
    isValidatable: V.value,
    isRequired: x.value,
    registerField: n,
    unregisterField: s,
    reset: P,
    validate: S,
    clearValidateErrors: w
  }));
  function P() {
    !v.value || !l.value.name || (o.value?.reset(), w());
  }
  const M = Ye(() => S(), 300);
  return Ee(() => {
    M.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), q(z, (L) => {
    e.formRootContext?.registerFormItem(L);
  }, {
    deep: !0,
    immediate: !0
  }), q(v, () => M()), q(() => _.value.isSuccess, (L) => {
    L && w();
  }), {
    id: t,
    validationErrors: C,
    validationStatus: _,
    isDisabled: h,
    isRequired: x,
    reset: P,
    validate: S,
    clearValidateErrors: w,
    registerField: n,
    unregisterField: s
  };
}
const Zo = /* @__PURE__ */ p({
  __name: "FormRoot",
  props: /* @__PURE__ */ I({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = k(e, "modelValue"), {
      isValid: i,
      registerFormItem: u,
      unregisterFormItem: f,
      validate: v,
      clearValidate: h,
      reset: y
    } = Yo({
      modelValue: () => l.value,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    });
    async function V() {
      const x = await v();
      s("submit", {
        isValid: x,
        reset: y
      });
    }
    return U($t, {
      props: n,
      modelValue: l,
      registerFormItem: u,
      unregisterFormItem: f
    }), t({
      validate: v,
      clearValidate: h,
      reset: y
    }), (x, _) => (r(), m("form", {
      class: R(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: pt(V, ["prevent"])
    }, [
      d(x.$slots, "default", { isValid: a(i) })
    ], 34));
  }
}), Jo = {
  key: 0,
  class: "form-item__header"
}, Qo = { class: "form-item__body" }, en = {
  key: 1,
  class: "form-item__footer"
}, tn = /* @__PURE__ */ p({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = J(), i = Rt(), {
      validationErrors: u,
      validationStatus: f,
      isDisabled: v,
      isRequired: h,
      registerField: y,
      unregisterField: V,
      reset: x,
      validate: _,
      clearValidateErrors: C
    } = Wo({
      formRootContext: i,
      props: () => n,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    }), w = se("root"), S = c(() => ({
      validationStatus: f.value,
      isRequired: h.value,
      errors: u.value
    }));
    return U(Ct, {
      props: n,
      validationStatus: f,
      validationErrors: u,
      isRequired: h,
      isDisabled: v,
      registerField: y,
      unregisterField: V,
      reset: x,
      validate: _,
      clearValidateErrors: C
    }), t({
      reset: x,
      validate: _,
      clearValidateErrors: C
    }), (z, P) => (r(), m("div", {
      ref_key: "root",
      ref: w,
      class: R(["form-item", [
        {
          "form-item--disabled": a(v),
          "form-item--required": a(h),
          "form-item--invalid": a(f).isError,
          "form-item--validating": a(f).isValidating,
          "form-item--valid": a(f).isSuccess
        }
      ]])
    }, [
      l?.header ? (r(), m("div", Jo, [
        d(z.$slots, "header", A(E(S.value)))
      ])) : F("", !0),
      B("div", Qo, [
        d(z.$slots, "default", A(E(S.value)))
      ]),
      l.footer ? (r(), m("div", en, [
        d(z.$slots, "footer", A(E(S.value)))
      ])) : F("", !0)
    ], 2));
  }
}), on = {}, nn = { class: "form-item-title" };
function sn(e, t) {
  return r(), m("div", nn, [
    d(e.$slots, "default")
  ]);
}
const ln = /* @__PURE__ */ O(on, [["render", sn]]), an = {}, rn = { class: "form-item-required" };
function un(e, t) {
  return r(), m("span", rn, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" * ", -1))
    ])
  ]);
}
const cn = /* @__PURE__ */ O(an, [["render", un]]), dn = { class: "form-item-errors" }, mn = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = It(), o = c(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), m("div", dn, [
      (r(!0), m(Z, null, Ue(o.value, (l, i) => (r(), m("div", {
        key: `error-${i}`,
        class: "form-item-errors__item"
      }, X(l.message), 1))), 128))
    ]));
  }
}), ge = {
  Root: Zo,
  Item: tn,
  ItemTitle: ln,
  ItemRequired: cn,
  ItemErrors: mn
};
function fn() {
  const e = D([]);
  function t(n) {
    const s = e.value.findIndex((l) => l.id === n.id);
    s === -1 ? e.value.push(n) : e.value[s] = n;
  }
  function o(n) {
    e.value = e.value.filter((s) => s.id !== n);
  }
  return {
    options: e,
    registerOption: t,
    unregisterOption: o
  };
}
function fe(e, t = !1) {
  return t && Array.isArray(e);
}
function pn(e) {
  const t = c(() => b(e.multiple)), o = c(() => b(e.modelValue)), n = c(() => b(e.options)), s = c(() => n.value.find((i) => i.props.value === o.value)), l = c(() => {
    if (!fe(o.value, t.value))
      return [];
    const i = new Set(o.value);
    return n.value.filter((u) => i.has(u.props.value));
  });
  return {
    activeOption: s,
    activeOptions: l
  };
}
function vn(e) {
  const t = c(() => b(e.modelValue)), o = c(() => b(e.props)), { options: n, registerOption: s, unregisterOption: l } = fn(), { activeOption: i, activeOptions: u } = pn({
    multiple: () => !!o.value.multiple,
    options: () => n.value,
    modelValue: () => t.value
  }), [f, v] = W(), h = c(() => fe(t.value, o.value.multiple) ? t.value.length > 0 : !!t.value), y = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.disabled));
  function V(S) {
    if (!y.value) {
      if (fe(t.value, o.value.multiple)) {
        const z = /* @__PURE__ */ new Set([...t.value]);
        z.has(S) ? z.delete(S) : z.add(S), e.onChangeModel?.([...z]);
      } else
        e.onChangeModel?.(S);
      e.onChange?.(S);
    }
  }
  function x() {
    if (fe(t.value, o.value.multiple)) {
      e.onChangeModel?.([]);
      return;
    }
    e.onChangeModel?.(""), e.onClear?.();
  }
  function _() {
    y.value || v(!0);
  }
  function C() {
    y.value || v(!1);
  }
  function w() {
    f.value ? C() : _();
  }
  return ue(() => {
    e.formItemContext?.registerField({
      reset: x
    });
  }), Ee(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: i,
    activeOptions: u,
    hasValue: h,
    isOpen: f,
    isDisabled: y,
    open: _,
    close: C,
    toggle: w,
    registerOption: s,
    unregisterOption: l,
    setModelValue: V,
    reset: x
  };
}
function hn(e) {
  const t = je(), o = c(() => b(e.selectRootContext?.modelValue)), n = c(() => b(e.props)), s = c(() => !!b(e.selectRootContext?.props)?.multiple), l = c(() => le(o.value) ? !1 : fe(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), i = c(() => !!(b(e.selectRootContext?.isDisabled) || n.value?.disabled)), u = c(() => ({
    id: t,
    props: n.value
  }));
  function f(v) {
    e.selectRootContext?.setModelValue(v), e.selectRootContext?.close();
  }
  return q(u, (v) => {
    e.selectRootContext?.registerOption(v);
  }, {
    deep: !0,
    immediate: !0
  }), Ee(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: l,
    isDisabled: i,
    handleChange: f
  };
}
function bn(e) {
  const t = c(() => b(e.selectRootContext?.props)), o = c(() => b(e.selectRootContext?.activeOption)), n = c(() => o.value?.props?.title ?? o.value?.props.value), s = c(() => b(e.selectRootContext?.activeOptions) ?? []), l = c(() => !!b(e.selectRootContext?.hasValue)), i = c(() => le(e.selectRootContext?.modelValue) ? !1 : fe(b(e.selectRootContext.modelValue), !!t.value?.multiple)), u = c(() => t.value?.placeholder);
  function f() {
    e.selectRootContext?.toggle();
  }
  return {
    activeOptionValue: n,
    activeOptions: s,
    hasValue: l,
    isMultiple: i,
    placeholder: u,
    toggle: f
  };
}
function gn(e) {
  function t() {
    e.selectRootContext?.open();
  }
  function o() {
    e.selectRootContext?.close();
  }
  function n() {
    e.selectRootContext?.toggle();
  }
  return {
    open: t,
    close: o,
    toggle: n
  };
}
const St = /* @__PURE__ */ Symbol("SelectRootContextKey");
function Pe() {
  return G(St, null);
}
const yn = {
  mounted() {
  },
  unmounted() {
  }
}, Au = {
  install(e) {
    e.directive("visible", yn);
  }
}, _n = {
  mounted() {
  },
  unmounted() {
  }
}, Eu = {
  install(e) {
    e.directive("loading", _n);
  }
}, Mt = {
  mounted(e, t) {
    e.clickOutside = (o) => {
      o.target instanceof Element && (e === o.target || e.contains(o.target) || t.value(o, e));
    }, window.addEventListener("click", e.clickOutside);
  },
  unmounted(e) {
    window.removeEventListener("click", e.clickOutside);
  }
}, Du = {
  install(e) {
    e.directive("click-outside", Mt);
  }
}, Vn = {
  mounted() {
  },
  unmounted() {
  }
}, ku = {
  install(e) {
    e.directive("tooltip", Vn);
  }
}, xn = ["aria-disabled"], $n = /* @__PURE__ */ p({
  __name: "SelectRoot",
  props: /* @__PURE__ */ I({
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
  emits: /* @__PURE__ */ I(["change", "opened", "closed", "open", "close", "clear"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), {
      activeOption: v,
      activeOptions: h,
      hasValue: y,
      isOpen: V,
      isDisabled: x,
      open: _,
      close: C,
      toggle: w,
      registerOption: S,
      unregisterOption: z,
      setModelValue: P
    } = vn({
      formRootContext: l,
      formItemContext: i,
      modelValue: () => s.value,
      props: () => o,
      onChangeModel: (M) => {
        s.value = M;
      },
      onChange: (M) => {
        n("change", M);
      },
      onClear: () => {
        n("clear");
      }
    });
    return U(St, {
      activeOption: () => v.value,
      activeOptions: () => h.value,
      modelValue: () => s.value,
      props: () => o,
      hasValue: () => y.value,
      isOpen: () => V.value,
      isDisabled: () => x.value,
      open: _,
      close: C,
      toggle: w,
      registerOption: S,
      unregisterOption: z,
      setModelValue: P
    }), (M, L) => H((r(), m("div", {
      class: R(["select", {
        "select--disabled": a(x),
        "select--open": a(V),
        "select--filled": a(y),
        "select--invalid": a(f),
        "select--valid": a(u)
      }]),
      "aria-disabled": a(x)
    }, [
      d(M.$slots, "default")
    ], 10, xn)), [
      [a(Mt), a(C)]
    ]);
  }
}), Cn = /* @__PURE__ */ p({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Pe(), { isActive: n, isDisabled: s, handleChange: l } = hn({
      selectRootContext: o,
      props: () => t
    });
    return (i, u) => (r(), m("div", {
      class: R(["select-option", {
        "select-option--active": a(n),
        "select-option--disabled": a(s)
      }]),
      onClick: u[0] || (u[0] = (f) => a(l)(e.value))
    }, [
      d(i.$slots, "default", {
        isActive: a(n),
        isDisabled: a(s)
      }, () => [
        j(X(e.title), 1)
      ])
    ], 2));
  }
}), Rn = /* @__PURE__ */ p({
  __name: "SelectTrigger",
  setup(e) {
    const t = Pe(), { open: o, close: n, toggle: s } = gn({
      selectRootContext: t
    });
    return (l, i) => d(l.$slots, "default", {
      open: a(o),
      close: a(n),
      toggle: a(s)
    });
  }
}), In = { class: "select-dropdown" }, Bn = /* @__PURE__ */ p({
  __name: "SelectDropdown",
  setup(e) {
    const t = Pe(), o = c(() => !!b(t?.isOpen));
    return (n, s) => H((r(), m("div", In, [
      d(n.$slots, "default")
    ], 512)), [
      [re, o.value]
    ]);
  }
}), Tn = /* @__PURE__ */ p({
  __name: "SelectValue",
  setup(e) {
    const t = Pe(), { activeOptionValue: o, activeOptions: n, hasValue: s, isMultiple: l, placeholder: i, toggle: u } = bn({
      selectRootContext: t
    });
    return (f, v) => (r(), m("div", {
      class: "select-value",
      onClick: v[0] || (v[0] = //@ts-ignore
      (...h) => a(u) && a(u)(...h))
    }, [
      d(f.$slots, "default", {}, () => [
        a(s) ? (r(), m(Z, { key: 0 }, [
          a(l) ? (r(!0), m(Z, { key: 0 }, Ue(a(n), (h) => (r(), m(Z, null, [
            j(X(h.props.value), 1)
          ], 64))), 256)) : (r(), m(Z, { key: 1 }, [
            j(X(a(o)), 1)
          ], 64))
        ], 64)) : (r(), m(Z, { key: 1 }, [
          j(X(a(i)), 1)
        ], 64))
      ])
    ]));
  }
}), At = 300, Et = 1, Dt = 10;
function at(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function it(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function rt(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function ut(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function wn(e) {
  const t = c(() => b(e.props)), o = c(() => t.value?.infiniteScrollOffset ?? Dt), n = c(() => t.value?.draggableMultiplier ?? Et), s = c(() => K(t.value?.debounceDelay) ? t.value.debounceDelay : At), [l, i] = W(), [u, f] = W(), v = D(0), h = D(0), y = D(0), V = D(0);
  function x() {
    f(!1), i(!1);
  }
  const _ = Ye((P) => {
    e.onScroll?.(P), t.value?.draggable || (y.value = at(e.scrollbar.value, !!t.value?.vertical), V.value = it(e.scrollbar.value, !!t.value?.horizontal));
    const M = e.scrollbar.value, L = e.content.value, oe = M ? M.clientHeight : 0, ae = M ? M.clientWidth : 0, Ve = L ? L.scrollWidth : 0, ce = L ? L.scrollHeight : 0, de = y.value + oe, Oe = V.value + ae, xe = !!(t.value?.vertical && ce - de <= o.value), ee = !!(t.value?.horizontal && Ve - Oe <= o.value);
    xe && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), C = He((P) => {
    if (e.onMousemove?.(P), !t.value?.draggable || !u.value)
      return;
    P.preventDefault(), P.stopPropagation();
    const M = e.scrollbar.value;
    if (!M)
      return;
    const L = !!t.value?.vertical, oe = !!t.value?.horizontal, ae = P.pageY - rt(M, L), ce = (P.pageX - ut(M, oe) - v.value) * n.value, de = (ae - h.value) * n.value;
    oe && (M.scrollLeft = V.value - ce), L && (M.scrollTop = y.value - de);
  }, s.value);
  function w(P) {
    if (e.onMousedown?.(P), !t.value?.draggable)
      return;
    f(!0), i(!0);
    const M = e.scrollbar.value;
    if (M) {
      const L = !!t.value?.vertical, oe = !!t.value?.horizontal;
      h.value = P.pageY - rt(M, L), v.value = P.pageX - ut(M, oe);
    }
    y.value = at(e.scrollbar.value, !!t.value?.vertical), V.value = it(e.scrollbar.value, !!t.value?.horizontal);
  }
  function S(P) {
    e.onMouseleave?.(P), t.value?.draggable && x();
  }
  function z(P) {
    e.onMouseup?.(P), t.value?.draggable && x();
  }
  return Fe(() => {
    _.cancel?.(), C.cancel?.();
  }), {
    isGrabbing: l,
    handleScroll: _,
    handleMousedown: w,
    handleMouseleave: S,
    handleMouseup: z,
    handleMousemove: C
  };
}
const Sn = /* @__PURE__ */ p({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: Et },
    infiniteScrollOffset: { default: Dt },
    debounceDelay: { default: At },
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const o = e, n = t, s = se("scrollbar"), l = se("content"), {
      isGrabbing: i,
      handleScroll: u,
      handleMousedown: f,
      handleMouseleave: v,
      handleMouseup: h,
      handleMousemove: y
    } = wn({
      props: () => o,
      scrollbar: s,
      content: l,
      onScroll: (V) => n("scroll", V),
      onMousedown: (V) => n("mousedown", V),
      onMouseleave: (V) => n("mouseleave", V),
      onMouseup: (V) => n("mouseup", V),
      onMousemove: (V) => n("mousemove", V),
      onScrollEndY: () => n("scrollEndY"),
      onScrollEndX: () => n("scrollEndX")
    });
    return (V, x) => (r(), m("div", {
      ref_key: "scrollbar",
      ref: s,
      class: R(["scrollbar", {
        "scrollbar--hidden": e.hidden,
        "scrollbar--draggable": e.draggable,
        "scrollbar--vertical": e.vertical,
        "scrollbar--horizontal": e.horizontal,
        "scrollbar--grabbing": a(i),
        [`scrollbar--size-${e.size}`]: e.size,
        [`scrollbar--theme-${e.theme}`]: e.theme
      }]),
      onScroll: x[0] || (x[0] = //@ts-ignore
      (..._) => a(u) && a(u)(..._)),
      onMousedown: x[1] || (x[1] = //@ts-ignore
      (..._) => a(f) && a(f)(..._)),
      onMouseleave: x[2] || (x[2] = //@ts-ignore
      (..._) => a(v) && a(v)(..._)),
      onMouseup: x[3] || (x[3] = //@ts-ignore
      (..._) => a(h) && a(h)(..._)),
      onMousemove: x[4] || (x[4] = //@ts-ignore
      (..._) => a(y) && a(y)(..._))
    }, [
      B("div", {
        ref_key: "content",
        ref: l,
        class: "scrollbar__content"
      }, [
        d(V.$slots, "default")
      ], 512)
    ], 34));
  }
}), kt = {
  Root: Sn
}, Mn = /* @__PURE__ */ p({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, o) => (r(), $(a(kt).Root, { class: "select-scrollbar" }, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ye = {
  Root: $n,
  Option: Cn,
  Trigger: Rn,
  Dropdown: Bn,
  Value: Tn,
  Scrollbar: Mn
};
function An(e) {
  const t = c(() => b(e.inputRootContext?.props));
  return {
    props: c(() => ({
      disabled: !!b(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function En(e) {
  const t = c(() => b(e.inputRootContext?.props));
  return {
    props: c(() => ({
      disabled: !!b(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function Dn(e) {
  const [t, o] = W(), n = c(() => b(e.props)), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.loading || n.value?.disabled)), l = c(() => n.value.type === wt.TEXTAREA), i = c(() => !!b(e.modelValue)?.trim());
  function u(v) {
    e.onUpdateModelValue?.(v);
  }
  function f() {
    u("");
  }
  return {
    isFocus: t,
    isDisabled: s,
    isTextarea: l,
    hasValue: i,
    setFocus: o,
    setModelValue: u,
    reset: f
  };
}
function zt(e) {
  return {
    modelValue: c({
      get: () => b(e.inputRootContext?.modelValue),
      set(n) {
        e.inputRootContext && e.inputRootContext.setModelValue(n);
      }
    }),
    listeners: {
      click(n) {
        e.inputRootContext?.emit("click", n);
      },
      dblclick(n) {
        e.inputRootContext?.emit("dblclick", n);
      },
      mousedown(n) {
        e.inputRootContext?.emit("mousedown", n);
      },
      mouseup(n) {
        e.inputRootContext?.emit("mouseup", n);
      },
      mouseenter(n) {
        e.inputRootContext?.emit("mouseenter", n);
      },
      mouseleave(n) {
        e.inputRootContext?.emit("mouseleave", n);
      },
      mousemove(n) {
        e.inputRootContext?.emit("mousemove", n);
      },
      mouseover(n) {
        e.inputRootContext?.emit("mouseover", n);
      },
      mouseout(n) {
        e.inputRootContext?.emit("mouseout", n);
      },
      contextmenu(n) {
        e.inputRootContext?.emit("contextmenu", n);
      },
      focusin(n) {
        e.inputRootContext?.setFocus(!0), e.inputRootContext?.emit("focusin", n);
      },
      focusout(n) {
        e.inputRootContext?.setFocus(!1), e.inputRootContext?.emit("focusout", n);
      },
      change(n) {
        e.inputRootContext?.emit("change", n);
      },
      blur(n) {
        e.inputRootContext?.emit("blur", n);
      },
      focus(n) {
        e.inputRootContext?.emit("focus", n);
      },
      keyup(n) {
        e.inputRootContext?.emit("keyup", n);
      },
      keydown(n) {
        e.inputRootContext?.emit("keydown", n);
      },
      keypress(n) {
        e.inputRootContext?.emit("keypress", n);
      },
      paste(n) {
        e.inputRootContext?.emit("paste", n);
      },
      copy(n) {
        e.inputRootContext?.emit("copy", n);
      },
      cut(n) {
        e.inputRootContext?.emit("cut", n);
      }
    }
  };
}
function kn(e) {
  const t = c(() => b(e.inputRootContext?.props)), o = c(() => !!t.value?.clearable);
  function n() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: o,
    handleClear: n
  };
}
const Pt = /* @__PURE__ */ Symbol("InputRootContextKey");
function Ke() {
  return G(Pt, null);
}
const zn = /* @__PURE__ */ p({
  __name: "InputRoot",
  props: /* @__PURE__ */ I({
    type: { default: wt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: be.TEXT },
    inputMode: { default: Ho.TEXT },
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
  emits: /* @__PURE__ */ I(["click", "dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "contextmenu", "focusin", "focusout", "change", "blur", "focus", "keyup", "keydown", "keypress", "paste", "copy", "cut"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = k(e, "modelValue"), { formRootContext: i, formItemContext: u, isValid: f, isInvalid: v } = Q(), { isDisabled: h, isTextarea: y, hasValue: V, isFocus: x, setFocus: _, setModelValue: C, reset: w } = Dn({
      formRootContext: i,
      formItemContext: u,
      modelValue: () => l.value,
      props: () => n,
      onUpdateModelValue: (S) => {
        l.value = S;
      }
    });
    return U(Pt, {
      isDisabled: () => h.value,
      props: () => n,
      modelValue: () => l.value,
      setFocus: _,
      setModelValue: C,
      reset: w,
      emit: s
    }), t({
      setFocus: _
    }), (S, z) => (r(), m("div", {
      class: R(["input", {
        "input--focus": a(x),
        "input--textarea": a(y),
        "input--filled": a(V),
        "input--disabled": a(h),
        "input--loading": e.loading,
        "input--invalid": a(v),
        "input--valid": a(f)
      }])
    }, [
      d(S.$slots, "default", {
        isTextarea: a(y),
        isFocus: a(x),
        hasValue: a(V),
        loading: !!e.loading,
        isInvalid: a(v),
        isValid: a(f)
      })
    ], 2));
  }
}), Pn = {}, On = { class: "input-before" };
function Ln(e, t) {
  return r(), m("div", On, [
    d(e.$slots, "default")
  ]);
}
const Nn = /* @__PURE__ */ O(Pn, [["render", Ln]]), Xn = { class: "input-after" }, Fn = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = Ke(), { isClearable: o, handleClear: n } = kn({
      inputRootContext: t
    });
    return (s, l) => (r(), m("div", Xn, [
      d(s.$slots, "default"),
      a(o) ? (r(), m("button", {
        key: 0,
        type: "button",
        onClick: l[0] || (l[0] = //@ts-ignore
        (...i) => a(n) && a(n)(...i))
      }, " × ")) : F("", !0)
    ]));
  }
}), jn = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Un = /* @__PURE__ */ p({
  __name: "InputNative",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = zt({
      inputRootContext: t
    }), { props: s } = En({
      inputRootContext: t
    });
    return (l, i) => H((r(), m("input", N({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ae(o) ? o.value = u : null),
      type: a(s).nativeType,
      inputmode: a(s).inputMode,
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      placeholder: a(s).placeholder,
      class: "input-native"
    }, te(a(n), !0)), null, 16, jn)), [
      [co, a(o)]
    ]);
  }
}), Gn = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Hn = /* @__PURE__ */ p({
  __name: "InputTextarea",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = zt({
      inputRootContext: t
    }), { props: s } = An({
      inputRootContext: t
    });
    return (l, i) => H((r(), m("textarea", N({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ae(o) ? o.value = u : null),
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      rows: a(s).rows,
      cols: a(s).cols,
      placeholder: a(s).placeholder,
      class: "input-textarea"
    }, te(a(n), !0)), null, 16, Gn)), [
      [vt, a(o)]
    ]);
  }
}), Yn = {}, qn = { class: "input-control" };
function Kn(e, t) {
  return r(), m("div", qn, [
    d(e.$slots, "default")
  ]);
}
const Wn = /* @__PURE__ */ O(Yn, [["render", Kn]]), Zn = {}, Jn = { class: "input-group" };
function Qn(e, t) {
  return r(), m("div", Jn, [
    d(e.$slots, "default")
  ]);
}
const es = /* @__PURE__ */ O(Zn, [["render", Qn]]), ts = {}, os = { class: "input-group-addon" };
function ns(e, t) {
  return r(), m("div", os, [
    d(e.$slots, "default")
  ]);
}
const ss = /* @__PURE__ */ O(ts, [["render", ns]]), Y = {
  Root: zn,
  Before: Nn,
  After: Fn,
  Native: Un,
  Textarea: Hn,
  Control: Wn,
  Group: es,
  GroupAddon: ss
}, Ot = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function ls() {
  return G(Ot, null);
}
function as(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = c(() => ko(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), l = c(() => !!(s.value || t.value?.checked)), i = c(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: l,
    isIndeterminate: i
  };
}
function is(e) {
  const t = c(() => !!b(e.checkboxRootContext?.isDisabled)), o = c(() => !!b(e.checkboxRootContext?.isActive)), n = c(() => !!b(e.checkboxRootContext?.isIndeterminate)), s = c(() => !!b(e.checkboxRootContext?.isValid)), l = c(() => !!b(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: l
  };
}
const rs = ["value", "disabled", "checked"], us = /* @__PURE__ */ p({
  __name: "CheckboxRoot",
  props: /* @__PURE__ */ I({
    disabled: { type: Boolean },
    indeterminate: { type: Boolean },
    value: {},
    checked: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: [Boolean, Array] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), { isChecked: v, isDisabled: h, isIndeterminate: y } = as({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    }), V = se("inputRef");
    return q([V, y], ([x, _]) => {
      x && (x.indeterminate = !!_);
    }, {
      immediate: !0
    }), U(Ot, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isIndeterminate: () => y.value,
      isValid: () => u.value,
      isInvalid: () => f.value
    }), (x, _) => (r(), m("label", {
      class: R(["checkbox", {
        "checkbox--disabled": a(h),
        "checkbox--active": a(v),
        "checkbox--indeterminate": a(y),
        "checkbox--invalid": a(f),
        "checkbox--valid": a(u)
      }])
    }, [
      H(B("input", N({
        ref_key: "inputRef",
        ref: V,
        "onUpdate:modelValue": _[0] || (_[0] = (C) => s.value = C),
        value: e.value,
        type: "checkbox",
        disabled: a(h),
        checked: a(v),
        class: "checkbox__input"
      }, te(n, !0)), null, 16, rs), [
        [ht, s.value]
      ]),
      d(x.$slots, "default")
    ], 2));
  }
}), cs = /* @__PURE__ */ p({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = ls(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: l, isInvalid: i } = is({
      checkboxRootContext: t
    });
    return (u, f) => (r(), m("span", {
      class: R(["checkbox-indicator", {
        "checkbox-indicator--disabled": a(o),
        "checkbox-indicator--active": a(n),
        "checkbox-indicator--indeterminate": a(s),
        "checkbox-indicator--valid": a(l),
        "checkbox-indicator--invalid": a(i)
      }])
    }, [
      d(u.$slots, "default", {
        isDisabled: a(o),
        isActive: a(n),
        isIndeterminate: a(s),
        isValid: a(l),
        isInvalid: a(i)
      }, () => [
        j(X(a(n) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), ds = {}, ms = { class: "checkbox-title" };
function fs(e, t) {
  return r(), m("span", ms, [
    d(e.$slots, "default")
  ]);
}
const ps = /* @__PURE__ */ O(ds, [["render", fs]]), vs = /* @__PURE__ */ p({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Re = {
  Root: us,
  Indicator: cs,
  Title: ps,
  Group: vs
};
function hs(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: c(() => o.value === t.value.value),
    isDisabled: n
  };
}
function bs(e) {
  const t = c(() => !!b(e.radioRootContext?.isDisabled)), o = c(() => !!b(e.radioRootContext?.isActive)), n = c(() => !!b(e.radioRootContext?.isValid)), s = c(() => !!b(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Lt = /* @__PURE__ */ Symbol("RadioRootContextKey");
function gs() {
  return G(Lt, null);
}
const ys = ["value", "disabled"], _s = /* @__PURE__ */ p({
  __name: "RadioRoot",
  props: /* @__PURE__ */ I({
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
  emits: /* @__PURE__ */ I(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), { isActive: v, isDisabled: h } = hs({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    });
    return U(Lt, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isValid: () => u.value,
      isInvalid: () => f.value
    }), (y, V) => (r(), m("label", {
      class: R(["radio", {
        "radio--disabled": a(h),
        "radio--active": a(v),
        "radio--invalid": a(f),
        "radio--valid": a(u)
      }])
    }, [
      H(B("input", N({
        "onUpdate:modelValue": V[0] || (V[0] = (x) => s.value = x),
        value: e.value,
        type: "radio",
        disabled: a(h),
        class: "radio__input"
      }, te(n, !0)), null, 16, ys), [
        [mo, s.value]
      ]),
      d(y.$slots, "default")
    ], 2));
  }
}), Vs = /* @__PURE__ */ p({
  __name: "RadioIndicator",
  setup(e) {
    const t = gs(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = bs({
      radioRootContext: t
    });
    return (i, u) => (r(), m("span", {
      class: R(["radio-indicator", {
        "radio-indicator--disabled": a(o),
        "radio-indicator--active": a(n),
        "radio-indicator--valid": a(s),
        "radio-indicator--invalid": a(l)
      }])
    }, [
      d(i.$slots, "default", {
        isDisabled: a(o),
        isActive: a(n),
        isValid: a(s),
        isInvalid: a(l)
      }, () => [
        j(X(a(n) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), xs = {}, $s = { class: "radio-title" };
function Cs(e, t) {
  return r(), m("span", $s, [
    d(e.$slots, "default")
  ]);
}
const Rs = /* @__PURE__ */ O(xs, [["render", Cs]]), Is = /* @__PURE__ */ p({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ie = {
  Root: _s,
  Indicator: Vs,
  Title: Rs,
  Group: Is
};
function Bs(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function Ts(e) {
  const t = c(() => !!b(e.switchRootContext?.isDisabled)), o = c(() => !!b(e.switchRootContext?.isActive)), n = c(() => !!b(e.switchRootContext?.isValid)), s = c(() => !!b(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Nt = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function ws() {
  return G(Nt, null);
}
const Ss = { class: "switch" }, Ms = ["disabled"], As = /* @__PURE__ */ p({
  __name: "SwitchRoot",
  props: /* @__PURE__ */ I({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = k(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: u, isActive: f } = Bs({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value
    });
    return U(Nt, {
      props: () => t,
      isActive: () => f.value,
      isDisabled: () => u.value,
      isValid: () => l.value,
      isInvalid: () => i.value
    }), (v, h) => (r(), m("label", Ss, [
      H(B("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (y) => o.value = y),
        type: "checkbox",
        disabled: a(u),
        class: "switch__input"
      }, null, 8, Ms), [
        [ht, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), Es = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = ws(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = Ts({
      switchRootContext: t
    });
    return (i, u) => (r(), m("span", {
      class: R(["switch-indicator", {
        "switch-indicator--disabled": a(o),
        "switch-indicator--active": a(n),
        "switch-indicator--valid": a(s),
        "switch-indicator--invalid": a(l)
      }])
    }, null, 2));
  }
}), Ds = {}, ks = { class: "switch-title" };
function zs(e, t) {
  return r(), m("span", ks, [
    d(e.$slots, "default")
  ]);
}
const Ps = /* @__PURE__ */ O(Ds, [["render", zs]]), Ne = {
  Root: As,
  Indicator: Es,
  Title: Ps
}, Xt = 1, Os = -1 / 0, Ls = 1 / 0, Ns = 100, We = 0, Se = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Xs(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => t.value.step || Xt), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), l = c(() => s.value || K(t.value.min) && o.value === t.value.min), i = c(() => s.value || K(t.value.max) && !(o.value < t.value.max));
  function u() {
    if (t.value.readonly)
      return;
    const h = o.value - n.value;
    (!K(t.value.min) || h >= t.value.min) && e.onDecrement?.(h);
  }
  function f() {
    if (t.value.readonly)
      return;
    const h = o.value + n.value;
    (!K(t.value.max) || h <= t.value.max) && e.onIncrement?.(h);
  }
  function v(h) {
    e.onUpdateModelValue?.(h);
  }
  return {
    step: n,
    isDisabled: s,
    isDecrementDisabled: l,
    isIncrementDisabled: i,
    handleDecrement: u,
    handleIncrement: f,
    setModelValue: v
  };
}
function Fs(e) {
  const t = c(() => b(e.mousewheel)), o = c(() => K(t.value) && t.value > 0 ? t.value : Ns);
  return {
    handleWheel: He((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function js(e) {
  const t = c(() => b(e.inputNumberRootContext?.props)), o = c({
    get: () => b(e.inputNumberRootContext?.modelValue) ?? We,
    set(s) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(s);
    }
  });
  return {
    props: c(() => ({
      step: b(e.inputNumberRootContext?.step),
      disabled: b(e.inputNumberRootContext?.isDisabled),
      min: t.value?.min,
      max: t.value?.max,
      readonly: t.value?.readonly,
      placeholder: t.value?.placeholder,
      autocomplete: t.value?.autocomplete
    })),
    modelValue: o
  };
}
function Us(e) {
  const t = c(() => b(e.props)), o = c(() => t.value.action === Se.DECREMENT), n = c(() => t.value.action === Se.INCREMENT), s = c(() => o.value ? !!b(e.inputNumberRootContext?.isDecrementDisabled) : !!b(e.inputNumberRootContext?.isIncrementDisabled));
  function l() {
    o.value ? e.inputNumberRootContext?.handleDecrement() : n.value && e.inputNumberRootContext?.handleIncrement();
  }
  return {
    handleAction: l,
    isDisabled: s,
    isDecrement: o,
    isIncrement: n
  };
}
const Ft = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function jt() {
  return G(Ft, null);
}
const Gs = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ I({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Os },
    max: { default: Ls },
    step: { default: Xt },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    direction: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      default: We
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = k(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), {
      step: u,
      isDisabled: f,
      isDecrementDisabled: v,
      isIncrementDisabled: h,
      handleDecrement: y,
      handleIncrement: V,
      setModelValue: x
    } = Xs({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value,
      onUpdateModelValue: (_) => {
        o.value = _;
      },
      onDecrement: (_) => {
        o.value = _;
      },
      onIncrement: (_) => {
        o.value = _;
      }
    });
    return U(Ft, {
      props: () => t,
      isDisabled: () => f.value,
      modelValue: () => o.value,
      step: () => u.value,
      isDecrementDisabled: () => v.value,
      isIncrementDisabled: () => h.value,
      handleDecrement: y,
      handleIncrement: V,
      setModelValue: x
    }), (_, C) => (r(), m("div", {
      class: R(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": a(i),
        "input-number--valid": a(l)
      }])
    }, [
      d(_.$slots, "default")
    ], 2));
  }
}), Hs = { class: "input-number-input" }, Ys = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = jt(), { props: o, modelValue: n } = js({
      inputNumberRootContext: t
    }), { handleWheel: s } = Fs({
      mousewheel: () => b(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), m("div", Hs, [
      H(B("input", N({
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Ae(n) ? n.value = u : null),
        type: "number",
        class: "input-number-input__native"
      }, a(o), {
        onWheel: i[1] || (i[1] = //@ts-ignore
        (...u) => a(s) && a(s)(...u))
      }), null, 16), [
        [
          vt,
          a(n),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), qs = ["disabled"], Ks = /* @__PURE__ */ p({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = jt(), { handleAction: n, isDisabled: s, isDecrement: l, isIncrement: i } = Us({
      inputNumberRootContext: o,
      props: () => t
    });
    return (u, f) => (r(), m("button", {
      class: R(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: a(s),
      type: "button",
      onClick: f[0] || (f[0] = //@ts-ignore
      (...v) => a(n) && a(n)(...v))
    }, [
      d(u.$slots, "default", {}, () => [
        a(l) ? (r(), m(Z, { key: 0 }, [
          j(" - ")
        ], 64)) : a(i) ? (r(), m(Z, { key: 1 }, [
          j(" + ")
        ], 64)) : F("", !0)
      ])
    ], 10, qs));
  }
}), Ce = {
  Root: Gs,
  Input: Ys,
  Button: Ks
};
function Ws() {
  const e = D(be.PASSWORD);
  function t() {
    e.value === be.PASSWORD ? e.value = be.TEXT : e.value = be.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Zs = /* @__PURE__ */ p({
  __name: "InputPasswordRoot",
  props: /* @__PURE__ */ I({
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
    const t = e, o = J(), n = k(e, "modelValue"), { currentType: s, handleToggleType: l } = Ws();
    return (i, u) => (r(), $(a(Y).Root, N(t, {
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (f) => n.value = f),
      "native-type": a(s)
    }), {
      default: g((f) => [
        o?.before ? (r(), $(a(Y).Before, { key: 0 }, {
          default: g(() => [
            d(i.$slots, "before", A(E(f)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        T(a(Y).Control, null, {
          default: g(() => [
            T(a(Y).Native)
          ]),
          _: 1
        }),
        T(a(Y).After, null, {
          default: g(() => [
            d(i.$slots, "after", A(E(f)), () => [
              B("button", {
                type: "button",
                onClick: u[0] || (u[0] = //@ts-ignore
                (...v) => a(l) && a(l)(...v))
              }, " 👁 ")
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["modelValue", "native-type"]));
  }
}), Js = {
  Root: Zs
};
function Qs(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function el(e) {
  return {
    isDisabled: c(() => !!b(e.inputCodeRootContext?.isDisabled))
  };
}
const Ut = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function tl() {
  return G(Ut, null);
}
const ol = /* @__PURE__ */ p({
  __name: "InputCodeRoot",
  props: /* @__PURE__ */ I({
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
    const t = e;
    k(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = Qs({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return U(Ut, {
      props: () => t,
      isDisabled: () => i.value
    }), (u, f) => (r(), m("div", {
      class: R(["input-code", {
        "input-code--disabled": a(i),
        "input-code--invalid": a(l),
        "input-code--valid": a(s)
      }])
    }, [
      d(u.$slots, "default")
    ], 2));
  }
}), nl = ["disabled", "aria-disabled"], sl = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = tl(), { isDisabled: o } = el({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), m("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, nl));
  }
}), ct = {
  Root: ol,
  Pin: sl
}, Gt = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function Ht() {
  return G(Gt, null);
}
function ll(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function al(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const il = /* @__PURE__ */ p({
  __name: "InputTagsRoot",
  props: /* @__PURE__ */ I({
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
  emits: /* @__PURE__ */ I(["addTag", "removeTag"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = k(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: u } = Q(), { isDisabled: f } = ll({
      formRootContext: s,
      formItemContext: l,
      props: () => o
    });
    return U(Gt, {
      props: () => o,
      modelValue: () => n.value,
      isDisabled: () => f.value
    }), (v, h) => (r(), m("div", {
      class: R(["input-tags", {
        "input-tags--disabled": a(f),
        "input-tags--invalid": a(u),
        "input-tags--valid": a(i)
      }])
    }, [
      d(v.$slots, "default")
    ], 2));
  }
}), rl = { class: "input-tags-input" }, ul = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    Ht();
    const { handleEnter: t, handleTab: o } = al();
    return (n, s) => (r(), m("div", rl, [
      B("input", {
        type: "text",
        onKeydown: [
          s[0] || (s[0] = tt(
            //@ts-ignore
            (...l) => a(t) && a(t)(...l),
            ["enter"]
          )),
          s[1] || (s[1] = tt(
            //@ts-ignore
            (...l) => a(o) && a(o)(...l),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), cl = { class: "input-tags-tags" }, dl = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return Ht(), (t, o) => (r(), m("div", cl));
  }
}), zu = {
  Root: il,
  Input: ul,
  Tags: dl
};
function ml(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function fl(e) {
  return {
    isDisabled: c(() => !!b(e.inputRangeRootContext?.isDisabled))
  };
}
const Yt = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function pl() {
  return G(Yt, null);
}
const vl = /* @__PURE__ */ p({
  __name: "InputRangeRoot",
  props: /* @__PURE__ */ I({
    min: {},
    max: {},
    step: {},
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
    const t = e;
    k(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = ml({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return U(Yt, {
      props: () => t,
      isDisabled: () => i.value
    }), (u, f) => (r(), m("div", {
      class: R(["input-range", {
        "input-range--disabled": a(i),
        "input-range--invalid": a(l),
        "input-range--valid": a(s)
      }])
    }, [
      d(u.$slots, "default")
    ], 2));
  }
}), hl = ["aria-disabled"], bl = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = pl(), { isDisabled: o } = fl({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), m("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, hl));
  }
}), Pu = {
  Root: vl,
  Slider: bl
}, qt = /* @__PURE__ */ Symbol("ModalRootContextKey");
function gl() {
  return G(qt, null);
}
function yl(e) {
  const t = c(() => b(e.configProviderRootContext?.props)), o = c(() => b(e.modelValue)), n = c(() => t.value?.teleportTarget);
  function s() {
    e.onClose?.();
  }
  return q(o, (l) => {
    l && e.onOpen?.();
  }), {
    close: s,
    teleportTarget: n
  };
}
function _l(e) {
  function t() {
    e.modalRootContext?.close();
  }
  return {
    close: t
  };
}
const Kt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey"), Wt = "body";
function Vl() {
  return G(Kt, {
    props: () => ({
      teleportTarget: Wt
    }),
    t: () => ""
  });
}
function xl(e) {
  const t = c(() => b(e.props));
  function o(n) {
    if (!t.value?.locale)
      return "";
    const s = n.split(".");
    let l = t.value.locale;
    for (const i of s) {
      if (le(l) || ze(l) || pe(l))
        return n;
      l = l[i];
    }
    return pe(l) ? l : n;
  }
  return {
    t: o
  };
}
const $l = /* @__PURE__ */ p({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: { default: () => Wt },
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = xl({
      props: () => t
    });
    return U(Kt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), Cl = {
  Root: $l
}, Rl = /* @__PURE__ */ p({
  inheritAttrs: !1,
  __name: "ModalRoot",
  props: /* @__PURE__ */ I({
    position: { default: "center" },
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue"), l = fo(), i = Vl(), { close: u, teleportTarget: f } = yl({
      configProviderRootContext: i,
      modelValue: s,
      props: o,
      onClose: () => {
        s.value = !1, n("close");
      },
      onOpen: () => {
        n("open");
      }
    });
    return U(qt, {
      props: o,
      close: u
    }), (v, h) => (r(), $(bt, {
      to: a(f),
      disabled: !e.appendToBody
    }, [
      T(De, {
        name: "fade-in-down",
        onAfterEnter: h[1] || (h[1] = (y) => n("opened", y)),
        onAfterLeave: h[2] || (h[2] = (y) => n("closed", y))
      }, {
        default: g(() => [
          H(B("div", N({ class: "modal" }, a(l), {
            class: {
              "modal--open": s.value,
              [`modal--position-${e.position}`]: e.position,
              [`modal--size-${e.size}`]: e.size
            },
            onClick: h[0] || (h[0] = //@ts-ignore
            (...y) => a(u) && a(u)(...y))
          }), [
            d(v.$slots, "default")
          ], 16), [
            [re, s.value]
          ])
        ]),
        _: 3
      })
    ], 8, ["to", "disabled"]));
  }
}), Il = {}, Bl = { class: "modal-body" };
function Tl(e, t) {
  return r(), m("div", Bl, [
    d(e.$slots, "default")
  ]);
}
const wl = /* @__PURE__ */ O(Il, [["render", Tl]]), Sl = /* @__PURE__ */ p({
  __name: "ModalClose",
  setup(e) {
    const t = gl(), { close: o } = _l({
      modalRootContext: t
    });
    return (n, s) => (r(), m("button", {
      type: "button",
      class: "modal-close",
      onClick: s[0] || (s[0] = //@ts-ignore
      (...l) => a(o) && a(o)(...l))
    }, [
      d(n.$slots, "default")
    ]));
  }
}), Ml = {}, Al = { class: "modal-header" };
function El(e, t) {
  return r(), m("div", Al, [
    d(e.$slots, "default")
  ]);
}
const Dl = /* @__PURE__ */ O(Ml, [["render", El]]), kl = {}, zl = { class: "modal-footer" };
function Pl(e, t) {
  return r(), m("div", zl, [
    d(e.$slots, "default")
  ]);
}
const Ol = /* @__PURE__ */ O(kl, [["render", Pl]]), Ll = {}, Nl = { class: "modal-title" };
function Xl(e, t) {
  return r(), m("div", Nl, [
    d(e.$slots, "default")
  ]);
}
const Fl = /* @__PURE__ */ O(Ll, [["render", Xl]]), jl = {}, Ul = { class: "modal-content" };
function Gl(e, t) {
  return r(), m("div", Ul, [
    d(e.$slots, "default")
  ]);
}
const Hl = /* @__PURE__ */ O(jl, [["render", Gl]]), Yl = {};
function ql(e, t) {
  return r(), m("div", {
    class: "modal-dialog",
    role: "dialog",
    onClick: t[0] || (t[0] = pt(() => {
    }, ["stop"]))
  }, [
    d(e.$slots, "default")
  ]);
}
const Kl = /* @__PURE__ */ O(Yl, [["render", ql]]), ne = {
  Root: Rl,
  Body: wl,
  Close: Sl,
  Header: Dl,
  Footer: Ol,
  Title: Fl,
  Content: Hl,
  Dialog: Kl
};
function Wl(e) {
  const t = c(() => b(e.props));
  function o() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: o
  };
}
const Zl = /* @__PURE__ */ p({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, n = t, { handleDelete: s } = Wl({
      props: () => o,
      onDelete(l) {
        n("delete", l);
      }
    });
    return (l, i) => (r(), m("div", {
      class: R(["tag", {
        [`tag--size-${e.size}`]: e.size,
        [`tag--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      e.canDelete ? (r(), m("button", {
        key: 0,
        type: "button",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...u) => a(s) && a(s)(...u))
      }, " X ")) : F("", !0)
    ], 2));
  }
}), Jl = /* @__PURE__ */ p({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Zt = {
  Root: Zl,
  Group: Jl
}, Ql = { class: "layout" }, ea = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), m("div", Ql, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), ta = {}, oa = { class: "layout-body" };
function na(e, t) {
  return r(), m("main", oa, [
    d(e.$slots, "default")
  ]);
}
const sa = /* @__PURE__ */ O(ta, [["render", na]]), dt = {
  Root: ea,
  Body: sa
}, la = /* @__PURE__ */ p({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), aa = /* @__PURE__ */ p({
  __name: "Col",
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
    return (t, o) => (r(), m("div", {
      class: R(["col", {
        [`col--size-${e.size}`]: e.size,
        [`col--size-xs-${e.sizeXs}`]: e.sizeXs,
        [`col--size-sm-${e.sizeSm}`]: e.sizeSm,
        [`col--size-md-${e.sizeMd}`]: e.sizeMd,
        [`col--size-lg-${e.sizeLg}`]: e.sizeLg,
        [`col--size-xl-${e.sizeXl}`]: e.sizeXl,
        [`col--size-xxl-${e.sizeXxl}`]: e.sizeXxl,
        [`col--offset-${e.offset}`]: e.offset,
        [`col--offset-xs-${e.offsetXs}`]: e.offsetXs,
        [`col--offset-sm-${e.offsetSm}`]: e.offsetSm,
        [`col--offset-md-${e.offsetMd}`]: e.offsetMd,
        [`col--offset-lg-${e.offsetLg}`]: e.offsetLg,
        [`col--offset-xl-${e.offsetXl}`]: e.offsetXl,
        [`col--offset-xxl-${e.offsetXxl}`]: e.offsetXxl,
        [`col--order-${e.order}`]: e.order,
        [`col--order-xs-${e.orderXs}`]: e.orderXs,
        [`col--order-sm-${e.orderSm}`]: e.orderSm,
        [`col--order-md-${e.orderMd}`]: e.orderMd,
        [`col--order-lg-${e.orderLg}`]: e.orderLg,
        [`col--order-xl-${e.orderXl}`]: e.orderXl,
        [`col--order-xxl-${e.orderXxl}`]: e.orderXxl
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), ia = /* @__PURE__ */ p({
  __name: "FlexRoot",
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
    return (t, o) => (r(), m("div", {
      class: R(["flex", {
        "flex--wrap": e.wrap,
        "flex--no-wrap": !e.wrap,
        [`flex--direction-${e.direction}`]: e.direction,
        [`flex--justify-${e.justify}`]: e.justify,
        [`flex--justify-xs-${e.justifyXs}`]: e.justifyXs,
        [`flex--justify-sm-${e.justifySm}`]: e.justifySm,
        [`flex--justify-md-${e.justifyMd}`]: e.justifyMd,
        [`flex--justify-lg-${e.justifyLg}`]: e.justifyLg,
        [`flex--justify-xl-${e.justifyXl}`]: e.justifyXl,
        [`flex--justify-xxl-${e.justifyXxl}`]: e.justifyXxl,
        [`flex--align-${e.align}`]: e.align,
        [`flex--align-xs-${e.alignXs}`]: e.alignXs,
        [`flex--align-sm-${e.alignSm}`]: e.alignSm,
        [`flex--align-md-${e.alignMd}`]: e.alignMd,
        [`flex--align-lg-${e.alignLg}`]: e.alignLg,
        [`flex--align-xl-${e.alignXl}`]: e.alignXl,
        [`flex--align-xxl-${e.alignXxl}`]: e.alignXxl
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), ra = /* @__PURE__ */ p({
  __name: "FlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["flex-item", {
        [`flex-item--flex-${e.flex}`]: e.flex
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ze = {
  Root: ia,
  Item: ra
}, ua = /* @__PURE__ */ p({
  __name: "Row",
  props: {
    guttersX: { type: Boolean, default: !0 },
    guttersY: { type: Boolean, default: !1 },
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
    const t = ke(e, ["guttersY", "guttersX", "wrap"]);
    return (o, n) => (r(), $(a(Ze).Root, N(t, {
      wrap: e.wrap,
      class: ["row", {
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }]
    }), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["wrap", "class"]));
  }
}), Je = {
  Container: la,
  Row: ua,
  Col: aa
}, ca = { class: "section" }, da = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), m("section", ca, [
      d(t.$slots, "default")
    ]));
  }
}), ma = {}, fa = { class: "section-header" };
function pa(e, t) {
  return r(), m("header", fa, [
    d(e.$slots, "default")
  ]);
}
const va = /* @__PURE__ */ O(ma, [["render", pa]]), ha = {}, ba = { class: "section-title" };
function ga(e, t) {
  return r(), m("h1", ba, [
    d(e.$slots, "default")
  ]);
}
const ya = /* @__PURE__ */ O(ha, [["render", ga]]), _a = {}, Va = { class: "section-footer" };
function xa(e, t) {
  return r(), m("footer", Va, [
    d(e.$slots, "default")
  ]);
}
const $a = /* @__PURE__ */ O(_a, [["render", xa]]), Ca = {}, Ra = { class: "section-body" };
function Ia(e, t) {
  return r(), m("div", Ra, [
    d(e.$slots, "default")
  ]);
}
const Ba = /* @__PURE__ */ O(Ca, [["render", Ia]]), Ou = {
  Root: da,
  Header: va,
  Title: ya,
  Footer: $a,
  Body: Ba
}, Ta = /* @__PURE__ */ p({
  __name: "TextRoot",
  props: {
    tag: {},
    uppercase: { type: Boolean },
    underline: { type: Boolean },
    weight: {},
    theme: {},
    size: {},
    asChild: { type: Boolean },
    as: { default: "div" }
  },
  setup(e) {
    return (t, o) => (r(), $(a(qe).Root, {
      as: e.as,
      "as-child": e.asChild,
      class: R(["text", {
        "text--uppercase": e.uppercase,
        "text--underline": e.underline,
        [`text--size-${e.size}`]: e.size,
        [`text--theme-${e.theme}`]: e.theme,
        [`text--weight-${e.weight}`]: e.weight
      }])
    }, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), wa = {
  Root: Ta
}, Sa = /* @__PURE__ */ p({
  __name: "DividerRoot",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["divider", {
        [`divider--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ma = {}, Aa = { class: "divider-content" };
function Ea(e, t) {
  return r(), m("div", Aa, [
    d(e.$slots, "default")
  ]);
}
const Da = /* @__PURE__ */ O(Ma, [["render", Ea]]), mt = {
  Root: Sa,
  Content: Da
}, ka = /* @__PURE__ */ p({
  __name: "MenuRoot",
  props: {
    direction: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), m("nav", {
      class: R(["menu", {
        [`menu--direction-${e.direction}`]: e.direction,
        [`menu--theme-${e.theme}`]: e.theme,
        [`menu--size-${e.size}`]: e.size
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), za = /* @__PURE__ */ p({
  __name: "MenuLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(e) {
    return (t, o) => (r(), $(a(qe).Root, {
      class: "menu-link",
      as: e.as,
      "as-child": e.asChild
    }, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Lu = {
  Root: ka,
  Link: za
}, Nu = {}, Pa = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(Tt).Root, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Oa = /* @__PURE__ */ p({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Tt).Group, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), La = {
  install(e) {
    e.component("VButton", Pa);
  }
}, Xu = {
  install(e) {
    e.component("VButtonGroup", Oa);
  }
}, Na = /* @__PURE__ */ p({
  __name: "VAccordion",
  props: /* @__PURE__ */ I({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue");
    return (l, i) => (r(), $(a(me).Root, N(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
    }, te(n)), {
      default: g(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Xa = /* @__PURE__ */ p({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = ke(e, ["title"]);
    return (o, n) => (r(), $(a(me).Item, A(E(t)), {
      default: g(({ isActive: s }) => [
        T(a(me).Header, null, {
          default: g(() => [
            T(a(me).Trigger, null, {
              default: g(() => [
                T(a(me).Title, null, {
                  default: g(() => [
                    d(o.$slots, "title", {}, () => [
                      j(X(e.title), 1)
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
        T(a(me).Body, null, {
          default: g(() => [
            d(o.$slots, "default", { isActive: s })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), Fa = {
  install(e) {
    e.component("VAccordion", Na), e.component("VAccordionItem", Xa);
  }
}, ja = {
  key: 0,
  class: "v-avatar__label"
}, Ua = /* @__PURE__ */ p({
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
    return (t, o) => (r(), m("div", {
      class: R(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (r(), m("div", ja, X(e.label), 1)) : F("", !0)
    ], 2));
  }
}), Ga = {}, Ha = { class: "v-avatar-group" };
function Ya(e, t) {
  return r(), m("div", Ha, [
    d(e.$slots, "default")
  ]);
}
const qa = /* @__PURE__ */ O(Ga, [["render", Ya]]), Ka = {
  install(e) {
    e.component("VAvatar", Ua);
  }
}, Wa = {
  install(e) {
    e.component("VAvatarGroup", qa);
  }
}, Za = { class: "v-alert__content" }, Ja = {
  key: 0,
  class: "v-alert__title"
}, Qa = {
  key: 1,
  class: "v-alert__description"
}, ei = /* @__PURE__ */ p({
  __name: "VAlert",
  props: {
    title: {},
    description: {},
    showIcon: { type: Boolean },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = J(), n = c(() => !!t.title || !!o?.title), s = c(() => !!t.description || !!o?.description);
    return (l, i) => (r(), m("div", {
      class: R(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      B("div", Za, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), m(Z, { key: 1 }, [
          n.value ? (r(), m("div", Ja, [
            d(l.$slots, "title", {}, () => [
              j(X(e.title), 1)
            ])
          ])) : F("", !0),
          s.value ? (r(), m("div", Qa, [
            d(l.$slots, "description", {}, () => [
              j(X(e.description), 1)
            ])
          ])) : F("", !0)
        ], 64))
      ])
    ], 2));
  }
}), ti = {
  install(e) {
    e.component("VAlert", ei);
  }
}, Jt = 0, Qt = 0, oi = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class Me {
  #e;
  #o;
  #n;
  #l;
  #s;
  #a;
  #m;
  #i;
  #r;
  #t;
  #u;
  #c;
  constructor(t, o) {
    this.#e = this.#g(o), this.#o = t, this.#n = o.innerWrapper, this.#l = o.container, this.#s = 0, this.#a = 1, this.#m = !1, this.#i = !1, this.#r = !1, this.#u = void 0, this.#c = void 0, this.#t = {
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
    }, this.#y();
  }
  #g(t) {
    return {
      ...oi,
      ...t
    };
  }
  #y() {
    this.#n = this.#e.innerWrapper, this.#l = this.#e.container, this.#h(), this.#p(), this.#_(), this.#m = !0;
  }
  #_() {
    window.addEventListener("resize", (t) => this.#d(t), { passive: !0, capture: !1 }), window.addEventListener("scroll", (t) => this.#d(t), { passive: !0, capture: !1 }), this.#u = this.#v(this.#l, () => {
      this.updateSticky();
    }), this.#c = this.#v(this.#n, () => {
      this.updateSticky();
    });
  }
  #v(t, o) {
    const n = new ResizeObserver((s) => {
      s.length && s.forEach(() => {
        o(s, n);
      });
    });
    return n.observe(t), n;
  }
  #d(t) {
    this.updateSticky(t);
  }
  #h() {
    const t = this.#t;
    t.containerTop = this.#l.offsetTop, t.containerHeight = this.#l.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.#n.offsetHeight, t.sidebarWidth = this.#o.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this.#f();
  }
  #f() {
    const t = this.#t;
    t.sidebarLeft = this.#o.offsetLeft, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.offsetTop = this.#e.offsetTop || 0, t.offsetBottom = this.#e.offsetBottom || 0, this.#s === 1 ? t.offsetTop < t.lastOffsetTop && (t.translateY += t.lastOffsetTop - t.offsetTop, this.#i = !0) : this.#s === 2 && t.offsetBottom < t.lastOffsetBottom && (t.translateY += t.lastOffsetBottom - t.offsetBottom, this.#i = !0), t.lastOffsetTop = t.offsetTop, t.lastOffsetBottom = t.offsetBottom;
  }
  #b() {
    const o = this.#t.lastOffsetTop;
    return this.#t.sidebarHeight + o < this.#t.viewportHeight;
  }
  #V() {
    const { lastViewportTop: t, viewportTop: o } = this.#t;
    if (t === o)
      return;
    const n = this.#a === 1 ? Math.min : Math.max;
    o === n(o, t) && (this.#a = this.#a === 1 ? 0 : 1);
  }
  #x() {
    this.#f();
    const t = this.#t, o = t.viewportTop + t.offsetTop;
    let n;
    o <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, n = 0) : n = this.#a === 0 ? this.#C() : this.#$();
    const s = Math.max(0, t.translateY), l = Math.min(t.containerHeight, s);
    return t.translateY = Math.round(l), t.lastViewportTop = t.viewportTop, n;
  }
  #$() {
    const t = this.#t, o = t.sidebarHeight + t.containerTop, n = t.viewportTop + t.offsetTop, s = t.viewportBottom - t.offsetBottom;
    let l = this.#s;
    return this.#b() ? t.sidebarHeight + n >= t.containerBottom ? (t.translateY = t.containerBottom - o, l = 3) : n >= t.containerTop && (t.translateY = n - t.containerTop, l = 1) : t.containerBottom <= s ? (t.translateY = t.containerBottom - o, l = 3) : o + t.translateY <= s ? (t.translateY = s - o, l = 2) : t.containerTop + t.translateY <= n && t.translateY !== 0 && t.maxTranslateY !== t.translateY && (l = 4), l;
  }
  #C() {
    const t = this.#t, o = t.sidebarHeight + t.containerTop, n = t.viewportTop + t.offsetTop, s = t.viewportBottom - t.offsetBottom;
    let l = this.#s;
    return n <= t.translateY + t.containerTop ? (t.translateY = n - t.containerTop, l = 1) : t.containerBottom <= s ? (t.translateY = t.containerBottom - o, l = 3) : this.#b() || t.containerTop <= n && t.translateY !== 0 && t.maxTranslateY !== t.translateY && (l = 4), l;
  }
  #R(t) {
    const o = {
      inner: {},
      outer: {}
    }, n = this.#t;
    switch (t) {
      case 1:
        o.inner = {
          position: "fixed",
          top: n.offsetTop,
          left: n.sidebarLeft - n.viewportLeft,
          width: n.sidebarWidth
        };
        break;
      case 2:
        o.inner = {
          position: "fixed",
          top: "auto",
          left: n.sidebarLeft,
          bottom: n.offsetBottom,
          width: n.sidebarWidth
        };
        break;
      case 3:
      case 4: {
        const s = this.#I(0, n.translateY + "px");
        if (s)
          o.inner = {
            transform: s
          };
        else {
          o.inner = {
            position: "absolute",
            top: n.translateY,
            width: n.sidebarWidth
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
          height: n.sidebarHeight,
          position: "relative"
        };
        break;
    }
    return o.outer = Me.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = Me.extend({
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
    const o = this.#x(), n = this.#R(o);
    function s(l) {
      const i = K(l) ? "px" : "";
      return `${l}${i}`;
    }
    if (this.#s !== o || t) {
      o === 0 ? this.#o.classList.remove(this.#e.affixClass) : this.#o.classList.add(this.#e.affixClass);
      for (const l in n.outer)
        Object.hasOwn(n.outer, l) && (this.#o.style[l] = s(n.outer[l]));
      for (const l in n.inner)
        Object.hasOwn(n.inner, l) && (this.#n.style[l] = s(n.inner[l]));
    } else
      this.#m && (this.#n.style.left = s(n.inner.left));
    this.#s = o;
  }
  #I(t = 0, o = 0, n = 0) {
    return `translate3d(${t}, ${o}, ${n})`;
  }
  updateSticky(t) {
    this.#r || (this.#r = !0, ((o) => {
      requestAnimationFrame(() => {
        o === "scroll" ? (this.#f(), this.#V(), this.#p()) : (this.#h(), this.#p(!0)), this.#r = !1;
      });
    })(t?.type));
  }
  destroy() {
    window.removeEventListener("resize", (t) => this.#d(t), { capture: !1 }), window.removeEventListener("scroll", (t) => this.#d(t), { capture: !1 }), this.#c?.disconnect(), this.#u?.disconnect(), this.#c = void 0, this.#u = void 0, this.#o.classList.remove(this.#e.affixClass), this.#o.removeAttribute("style"), this.#n.removeAttribute("style");
  }
  static extend(t, o) {
    const n = {};
    for (const s in t)
      le(o[s]) ? n[s] = t[s] : n[s] = o[s];
    return n;
  }
}
function ni(e) {
  const t = ot(), o = ot(), n = c(() => K(e.props?.offsetTop) ? e.props.offsetTop : Jt), s = c(() => K(e.props?.offsetBottom) ? e.props.offsetBottom : Qt);
  function l() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function i() {
    l(), e.root.value && t.value && e.content.value && (o.value = new Me(e.root.value, {
      offsetTop: n.value,
      offsetBottom: s.value,
      container: t.value,
      innerWrapper: e.content.value
    }));
  }
  function u() {
    o.value?.destroy(), o.value = void 0;
  }
  return ue(() => {
    e.props.disabled || i();
  }), Xe(() => {
    u();
  }), q(() => e.props.disabled, (f) => {
    f ? u() : i();
  }), {};
}
const si = /* @__PURE__ */ p({
  __name: "VAffix",
  props: {
    offsetTop: { default: Jt },
    offsetBottom: { default: Qt },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = se("root"), n = se("content");
    return ni({
      props: t,
      root: o,
      content: n
    }), (s, l) => (r(), m("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      B("div", {
        ref_key: "content",
        ref: n,
        class: "v-affix__content"
      }, [
        d(s.$slots, "default")
      ], 512)
    ], 512));
  }
}), li = {
  install(e) {
    e.component("VAffix", si);
  }
}, ai = { class: "v-breadcrumbs" }, ii = /* @__PURE__ */ p({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (r(), m("nav", ai));
  }
}), ri = {
  install(e) {
    e.component("VBreadcrumbs", ii);
  }
};
function ui(e) {
  return {
    content: c(() => e.props.dot ? "" : K(e.props.value) && K(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const ci = {
  key: 0,
  class: "v-badge__content"
}, di = /* @__PURE__ */ p({
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
    const t = e, o = J(), { content: n } = ui({
      props: t
    }), s = c(() => !t.hidden && !!(n.value || t.dot || o?.content));
    return (l, i) => (r(), m("div", {
      class: R(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      s.value ? (r(), m("sup", ci, [
        d(l.$slots, "content", { value: a(n) }, () => [
          j(X(a(n)), 1)
        ])
      ])) : F("", !0)
    ], 2));
  }
}), mi = {
  install(e) {
    e.component("VBadge", di);
  }
}, fi = { class: "v-collapse" }, pi = /* @__PURE__ */ p({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (r(), m("div", fi, [
      d(t.$slots, "default")
    ]));
  }
}), vi = {
  install(e) {
    e.component("VCollapse", pi);
  }
};
function hi(e) {
  const [t, o] = W();
  function n() {
    o(!0), e?.onOpen?.();
  }
  function s() {
    o(!1), e?.onClose?.();
  }
  return {
    isVisible: t,
    handleOpen: n,
    handleClose: s
  };
}
const bi = /* @__PURE__ */ p({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: n, handleOpen: s, handleClose: l } = hi({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (i, u) => a(n) ? d(i.$slots, "content", {
      key: 1,
      close: a(l)
    }) : d(i.$slots, "display", {
      key: 0,
      open: a(s)
    });
  }
}), gi = {
  install(e) {
    e.component("VInplace", bi);
  }
}, eo = /* @__PURE__ */ p({
  __name: "VModal",
  props: /* @__PURE__ */ I({
    title: {},
    position: { default: "center" },
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = ke(e, ["title", "appendToBody", "position"]), n = t, s = J(), l = k(e, "modelValue");
    return (i, u) => (r(), $(a(ne).Root, N({
      modelValue: l.value,
      "onUpdate:modelValue": u[0] || (u[0] = (f) => l.value = f)
    }, o, {
      "append-to-body": e.appendToBody,
      position: e.position,
      onClose: u[1] || (u[1] = (f) => n("close")),
      onOpen: u[2] || (u[2] = (f) => n("open")),
      onOpened: u[3] || (u[3] = (f) => n("opened", f)),
      onClosed: u[4] || (u[4] = (f) => n("closed", f))
    }), {
      default: g(() => [
        T(a(ne).Dialog, null, {
          default: g(() => [
            T(a(ne).Content, null, {
              default: g(() => [
                T(a(ne).Header, null, {
                  default: g(() => [
                    d(i.$slots, "header", {}, () => [
                      e.title ? (r(), $(a(ne).Title, { key: 0 }, {
                        default: g(() => [
                          j(X(e.title), 1)
                        ]),
                        _: 1
                      })) : F("", !0),
                      T(a(ne).Close, null, {
                        default: g(() => [...u[5] || (u[5] = [
                          j("X", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }),
                T(a(ne).Body, null, {
                  default: g(() => [
                    d(i.$slots, "default")
                  ]),
                  _: 3
                }),
                s?.footer ? (r(), $(a(ne).Footer, { key: 0 }, {
                  default: g(() => [
                    d(i.$slots, "footer")
                  ]),
                  _: 3
                })) : F("", !0)
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
}), yi = {
  install(e) {
    e.component("VModal", eo);
  }
}, _i = { class: "v-drawer__dialog" }, Vi = {
  key: 0,
  class: "v-drawer__header"
}, xi = { class: "v-drawer__body" }, $i = {
  key: 1,
  class: "v-drawer__footer"
}, to = /* @__PURE__ */ p({
  __name: "VDrawer",
  props: /* @__PURE__ */ I({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = J(), l = k(e, "modelValue"), i = c(() => !!o.title || !!s?.header), u = c(() => !!s?.footer);
    function f() {
      l.value = !1;
    }
    function v(y) {
      n("opened", y);
    }
    function h(y) {
      n("closed", y);
    }
    return q(l, (y) => {
      n(y ? "open" : "close");
    }), (y, V) => (r(), $(bt, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      T(De, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: g(() => [
          H(B("div", {
            class: R(["v-drawer", {
              "v-drawer--open": l.value
            }]),
            role: "dialog"
          }, [
            B("div", _i, [
              i.value ? (r(), m("div", Vi, [
                d(y.$slots, "header", { close: f }, () => [
                  j(X(e.title), 1)
                ]),
                B("button", {
                  class: "v-drawer__close-button",
                  type: "button",
                  onClick: f
                }, " x ")
              ])) : F("", !0),
              B("div", xi, [
                d(y.$slots, "default", { close: f })
              ]),
              u.value ? (r(), m("div", $i, [
                d(y.$slots, "footer", { close: f })
              ])) : F("", !0)
            ])
          ], 2), [
            [re, l.value]
          ])
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), Ci = {
  install(e) {
    e.component("VDrawer", to);
  }
};
function Fu() {
  return {};
}
const Ri = /* @__PURE__ */ Symbol("VDropdownContextKey"), Ii = { class: "v-dropdown__menu" }, Bi = /* @__PURE__ */ p({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, [l, i, u] = W();
    function f(h) {
      s("opened", h);
    }
    function v(h) {
      s("opened", h);
    }
    return q(l, (h) => {
      s(h ? "open" : "close");
    }), t({
      setVisible: i,
      isVisible: l
    }), U(Ri, {
      props: n
    }), (h, y) => (r(), m("div", {
      class: R(["v-dropdown", {
        "v-dropdown--open": a(l)
      }])
    }, [
      d(h.$slots, "trigger", {
        isVisible: a(l),
        toggle: a(u),
        setVisible: a(i)
      }),
      T(De, {
        onAfterEnter: f,
        onAfterLeave: v
      }, {
        default: g(() => [
          H(B("div", Ii, [
            d(h.$slots, "default")
          ], 512), [
            [re, a(l)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Ti = {
  install(e) {
    e.component("VDropdown", Bi);
  }
}, wi = /* @__PURE__ */ p({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = se("image"), o = se("root");
    return (n, s) => (r(), m("figure", {
      ref_key: "root",
      ref: o,
      class: R(["v-image", [
        {
          "v-image--loading": n.isLoading,
          "v-image--center": n.center,
          "v-image--loaded": !n.isError && n.isLoaded,
          "v-image--error": n.isError
        }
      ]])
    }, [
      B("picture", null, [
        B("img", {
          ref_key: "image",
          ref: t,
          class: "v-image__native",
          alt: ""
        }, null, 512)
      ])
    ], 2));
  }
}), Si = {
  install(e) {
    e.component("VImage", wi);
  }
}, Mi = /* @__PURE__ */ p({
  __name: "VLayout",
  setup(e) {
    const t = J();
    return (o, n) => (r(), $(a(dt).Root, null, gt({
      default: g(() => [
        T(a(dt).Body, null, {
          default: g(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      t?.header ? {
        name: "header",
        fn: g(() => [
          d(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t?.footer ? {
        name: "footer",
        fn: g(() => [
          d(o.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Ai = {
  install(e) {
    e.component("VLayout", Mi);
  }
}, Ei = /* @__PURE__ */ p({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Je).Container, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ju = {
  install(e) {
    e.component("VContainer", Ei);
  }
}, Di = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(Je).Row, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = {
  install(e) {
    e.component("VRow", Di);
  }
}, ki = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(Je).Col, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gu = {
  install(e) {
    e.component("VCol", ki);
  }
}, zi = { class: "v-pagination" }, Pi = /* @__PURE__ */ p({
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
    return (t, o) => (r(), m("div", zi));
  }
}), Oi = {
  install(e) {
    e.component("VPagination", Pi);
  }
}, Li = { class: "v-placeholder" }, Ni = /* @__PURE__ */ p({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (r(), m("div", Li, [
      d(t.$slots, "default")
    ]));
  }
}), Xi = {
  install(e) {
    e.component("VPlaceholder", Ni);
  }
}, Fi = /* @__PURE__ */ p({
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
    const o = e, n = t;
    return (s, l) => (r(), $(a(kt).Root, N(o, te(n)), {
      default: g(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ji = {
  install(e) {
    e.component("VScrollbar", Fi);
  }
}, Ui = /* @__PURE__ */ p({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), Gi = {
  install(e) {
    e.component("VSpinner", Ui);
  }
}, oo = /* @__PURE__ */ Symbol("VTabsContextKey"), Hi = () => G(oo, null);
function Yi() {
  const e = D([]);
  function t(n) {
    e.value.find((s) => s.id === n.id) || e.value.push(n);
  }
  function o(n) {
    e.value = e.value.filter((s) => s.id !== n.id);
  }
  return {
    tabs: e,
    registerTab: t,
    unregisterTab: o
  };
}
function qi(e) {
  const t = je(), o = c(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const Ki = { class: "v-tabs" }, Wi = { class: "v-tabs__content" }, Zi = /* @__PURE__ */ p({
  __name: "VTabs",
  props: /* @__PURE__ */ I({
    scrollable: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue"), {
      tabs: l,
      registerTab: i,
      unregisterTab: u
    } = Yi();
    function f(v) {
      s.value = v, n("change", v);
    }
    return U(oo, {
      props: o,
      modelValue: s,
      tabs: l,
      handleChange: f,
      registerTab: i,
      unregisterTab: u
    }), (v, h) => (r(), m("div", Ki, [
      B("div", Wi, [
        d(v.$slots, "default")
      ])
    ]));
  }
}), Ji = /* @__PURE__ */ p({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = J(), n = Hi(), { id: s, isActive: l } = qi({
      context: n,
      props: t
    }), i = po({
      id: s,
      props: t,
      slots: o
    });
    return n?.registerTab(i), Ee(() => {
      n?.unregisterTab(i);
    }), (u, f) => H((r(), m("div", {
      class: R(["v-tab", {
        "v-tab--active": a(l)
      }])
    }, [
      d(u.$slots, "default", { isActive: a(l) })
    ], 2)), [
      [re, a(l)]
    ]);
  }
}), Qi = {
  install(e) {
    e.component("VTabs", Zi), e.component("VTab", Ji);
  }
}, er = /* @__PURE__ */ p({
  __name: "VTag",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, n = t;
    return (s, l) => (r(), $(a(Zt).Root, N(o, te(n)), {
      default: g(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tr = /* @__PURE__ */ p({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Zt).Group, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), or = {
  install(e) {
    e.component("VTag", er);
  }
}, Hu = {
  install(e) {
    e.component("VTagGroup", tr);
  }
}, nr = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(wa).Root, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), sr = {
  install(e) {
    e.component("VText", nr);
  }
}, lr = /* @__PURE__ */ p({
  __name: "VForm",
  props: /* @__PURE__ */ I({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue");
    return (l, i) => (r(), $(a(ge).Root, N({
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
    }, o, te(n)), {
      default: g((u) => [
        d(l.$slots, "default", A(E(u)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ar = {
  install(e) {
    e.component("VForm", lr);
  }
}, ir = /* @__PURE__ */ p({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = ke(e, ["title"]), n = t, s = J();
    return (l, i) => (r(), $(a(ge).Item, N(o, te(n)), gt({
      default: g((u) => [
        d(l.$slots, "default", A(E(u)))
      ]),
      footer: g((u) => [
        d(l.$slots, "footer", A(E(u)), () => [
          T(a(ge).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: g((u) => [
          d(l.$slots, "header", A(E(u)), () => [
            T(a(ge).ItemTitle, null, {
              default: g(() => [
                j(X(e.title) + " ", 1),
                u.isRequired ? (r(), $(a(ge).ItemRequired, { key: 0 })) : F("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), rr = {
  install(e) {
    e.component("VFormItem", ir);
  }
}, ur = /* @__PURE__ */ p({
  __name: "VCheckbox",
  props: /* @__PURE__ */ I({
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
    const t = e, o = k(e, "modelValue");
    return (n, s) => (r(), $(a(Re).Root, N(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        T(a(Re).Indicator),
        T(a(Re).Title, null, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), cr = /* @__PURE__ */ p({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Re).Group, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), dr = {
  install(e) {
    e.component("VCheckbox", ur);
  }
}, mr = {
  install(e) {
    e.component("VCheckboxGroup", cr);
  }
}, fr = /* @__PURE__ */ p({
  __name: "VInput",
  props: /* @__PURE__ */ I({
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
    const t = e, o = J(), n = k(e, "modelValue");
    return (s, l) => (r(), $(a(Y).Root, N(t, {
      modelValue: n.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i)
    }), {
      default: g((i) => [
        o?.before ? (r(), $(a(Y).Before, { key: 0 }, {
          default: g(() => [
            d(s.$slots, "before", A(E(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        T(a(Y).Control, null, {
          default: g(() => [
            i.isTextarea ? (r(), $(a(Y).Textarea, { key: 0 })) : (r(), $(a(Y).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (r(), $(a(Y).After, { key: 1 }, {
          default: g(() => [
            d(s.$slots, "after", A(E(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), pr = {
  install(e) {
    e.component("VInput", fr);
  }
}, vr = /* @__PURE__ */ p({
  __name: "VInputCode",
  props: /* @__PURE__ */ I({
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
    const t = e, o = k(e, "modelValue");
    return (n, s) => (r(), $(a(ct).Root, N(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        (r(!0), m(Z, null, Ue(e.length, (l, i) => (r(), $(a(ct).Pin, {
          key: `pin-${i}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), hr = {
  install(e) {
    e.component("VInputCode", vr);
  }
}, br = /* @__PURE__ */ p({
  __name: "VInputNumber",
  props: /* @__PURE__ */ I({
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
      default: We
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = k(e, "modelValue");
    return (n, s) => (r(), $(a(Ce).Root, N(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        T(a(Ce).Button, {
          action: a(Se).DECREMENT
        }, null, 8, ["action"]),
        T(a(Ce).Input),
        T(a(Ce).Button, {
          action: a(Se).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), gr = {
  install(e) {
    e.component("VInputNumber", br);
  }
}, yr = /* @__PURE__ */ p({
  __name: "VInputPassword",
  props: /* @__PURE__ */ I({
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
    const t = e, o = k(e, "modelValue");
    return (n, s) => (r(), $(a(Js).Root, N({
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }, t), null, 16, ["modelValue"]));
  }
}), _r = {
  install(e) {
    e.component("VInputPassword", yr);
  }
}, Vr = /* @__PURE__ */ p({
  __name: "VRadio",
  props: /* @__PURE__ */ I({
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
    const t = e, o = k(e, "modelValue");
    return (n, s) => (r(), $(a(Ie).Root, N(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        T(a(Ie).Indicator),
        T(a(Ie).Title, null, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), xr = /* @__PURE__ */ p({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Ie).Group, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $r = {
  install(e) {
    e.component("VRadio", Vr);
  }
}, Cr = {
  install(e) {
    e.component("VRadioGroup", xr);
  }
}, Rr = /* @__PURE__ */ p({
  __name: "VSelect",
  props: /* @__PURE__ */ I({
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
  emits: /* @__PURE__ */ I(["change", "opened", "closed", "open", "close", "clear"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = k(e, "modelValue");
    return (l, i) => (r(), $(a(ye).Root, N(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u),
      onChange: i[1] || (i[1] = (u) => n("change", u)),
      onClose: i[2] || (i[2] = (u) => n("close")),
      onClear: i[3] || (i[3] = (u) => n("clear"))
    }), {
      default: g(() => [
        T(a(ye).Value, null, {
          default: g(() => [
            d(l.$slots, "value")
          ]),
          _: 3
        }),
        T(a(ye).Dropdown, null, {
          default: g(() => [
            T(a(ye).Scrollbar, null, {
              default: g(() => [
                d(l.$slots, "default")
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
}), Ir = /* @__PURE__ */ p({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(ye).Option, A(E(t)), {
      default: g((s) => [
        d(o.$slots, "default", A(E(s)))
      ]),
      _: 3
    }, 16));
  }
}), Br = {
  install(e) {
    e.component("VSelect", Rr), e.component("VOption", Ir);
  }
}, Tr = /* @__PURE__ */ p({
  __name: "VSwitch",
  props: /* @__PURE__ */ I({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = k(e, "modelValue");
    return (n, s) => (r(), $(a(Ne).Root, N(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        T(a(Ne).Indicator),
        T(a(Ne).Title, null, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), wr = {
  install(e) {
    e.component("VSwitch", Tr);
  }
}, Sr = /* @__PURE__ */ p({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Cl).Root, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mr = {
  install(e) {
    e.component("VConfigProvider", Sr);
  }
}, Ar = { class: "v-progress__value" }, Er = {
  key: 0,
  class: "v-progress__label"
}, Dr = /* @__PURE__ */ p({
  __name: "VProgress",
  props: {
    indeterminate: { type: Boolean },
    showValue: { type: Boolean, default: !0 },
    value: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: R(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      B("div", Ar, [
        e.showValue ? (r(), m("div", Er, [
          d(t.$slots, "default")
        ])) : F("", !0)
      ])
    ], 2));
  }
}), kr = {
  install(e) {
    e.component("VProgress", Dr);
  }
}, zr = /* @__PURE__ */ p({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = J();
    return (n, s) => (r(), $(a(mt).Root, A(E(t)), {
      default: g(() => [
        o?.default ? (r(), $(a(mt).Content, { key: 0 }, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })) : F("", !0)
      ]),
      _: 3
    }, 16));
  }
}), Pr = {
  install(e) {
    e.component("VDivider", zr);
  }
}, Or = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(Ze).Root, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lr = /* @__PURE__ */ p({
  __name: "VFlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Ze).Item, A(E(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nr = {
  install(e) {
    e.component("VFlex", Or);
  }
}, Yu = {
  install(e) {
    e.component("VFlexItem", Lr);
  }
}, Xr = /* @__PURE__ */ p({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (r(), $(a(Y).Group, null, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Fr = /* @__PURE__ */ p({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (r(), $(a(Y).GroupAddon, null, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), jr = {
  install(e) {
    e.component("VInputGroup", Xr), e.component("VInputGroupAddon", Fr);
  }
}, Be = 1e3, Te = 60 * Be, we = 60 * Te, ft = 24 * we, no = Date.now(), so = 1e3;
function Ur(e) {
  const [t, o] = W(), [n, s] = W(), l = D(0), i = D(0), u = D(0), f = c(() => e.props.now || no), v = c(() => e.props.interval || so), h = c(() => 0), y = c(() => 0), V = c(() => Math.floor(l.value / ft)), x = c(() => Math.floor(l.value % ft / we)), _ = c(() => Math.floor(l.value % we / Te)), C = c(() => Math.floor(l.value % Te / Be)), w = c(() => Math.floor(l.value % Be)), S = c(() => Math.floor(l.value / we)), z = c(() => Math.floor(l.value / Te)), P = c(() => Math.floor(l.value / Be));
  function M() {
    t.value || (o(!0), e.props?.autoStart || (l.value = e.props.start, i.value = f.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && ae());
  }
  function L() {
    cancelAnimationFrame(u.value), u.value = 0;
  }
  function oe() {
    t.value && (de(), l.value > 0 && e.onProgress?.({
      days: V.value,
      hours: x.value,
      minutes: _.value,
      seconds: C.value,
      milliseconds: w.value,
      totalDays: V.value,
      totalHours: S.value,
      totalMinutes: z.value,
      totalSeconds: P.value,
      totalMilliseconds: l.value
    }), ae());
  }
  function ae() {
    if (!t.value)
      return;
    const ee = Math.min(l.value, v.value);
    if (ee > 0) {
      let Qe = function(ve) {
        Le || (Le = ve), $e || ($e = ve);
        const et = ve - Le;
        et >= ee || et + (ve - $e) / 2 >= ee ? oe() : u.value = requestAnimationFrame(Qe), $e = ve;
      }, Le, $e;
      u.value = requestAnimationFrame(Qe);
    } else
      ce();
  }
  function Ve() {
    t.value && (L(), o(!1), e.onAbort?.());
  }
  function ce() {
    t.value && (L(), l.value = 0, o(!1), e.onEnd?.());
  }
  function de() {
    t.value && (l.value = Math.max(0, i.value - f.value));
  }
  function Oe() {
    L(), l.value = e.props.start, i.value = f.value + e.props.start, o(!1), M();
  }
  function xe() {
    switch (document.visibilityState) {
      case "visible":
        u.value === 0 && n.value && (de(), ae()), s(!1);
        break;
      case "hidden":
        u.value > 0 && (s(!0), L());
        break;
    }
  }
  return ue(() => {
    document.addEventListener("visibilitychange", xe);
  }), Xe(() => {
    document.removeEventListener("visibilitychange", xe), L();
  }), q(() => e.props, (ee) => {
    l.value = ee.start, i.value = f.value + ee.start, ee.autoStart && M();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: h,
    months: y,
    days: V,
    hours: x,
    minutes: _,
    seconds: C,
    milliseconds: w,
    start: M,
    abort: Ve,
    end: ce,
    restart: Oe
  };
}
const Gr = { class: "v-countdown" }, Hr = /* @__PURE__ */ p({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => so },
    start: {},
    now: { default: () => no }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, {
      years: l,
      months: i,
      days: u,
      hours: f,
      minutes: v,
      seconds: h,
      milliseconds: y,
      start: V,
      abort: x,
      end: _,
      restart: C
    } = Ur({
      props: n,
      onAbort: () => s("abort"),
      onEnd: () => s("end"),
      onProgress: (w) => s("progress", w),
      onStart: () => s("start")
    });
    return t({
      start: V,
      abort: x,
      end: _,
      restart: C
    }), (w, S) => (r(), m("div", Gr, [
      d(w.$slots, "default", {
        years: a(l),
        months: a(i),
        days: a(u),
        hours: a(f),
        minutes: a(v),
        seconds: a(h),
        milliseconds: a(y)
      })
    ]));
  }
}), Yr = {
  install(e) {
    e.component("VCountdown", Hr);
  }
}, qr = { class: "v-calendar" }, Kr = /* @__PURE__ */ p({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", qr));
  }
}), Wr = {
  install(e) {
    e.component("VCalendar", Kr);
  }
}, qu = {
  install(e) {
    e.use(Fa), e.use(li), e.use(Ka), e.use(Wa), e.use(mi), e.use(ri), e.use(La), e.use(vi), e.use(Mr), e.use(yi), e.use(gi), e.use(Ci), e.use(Ti), e.use(Si), e.use(Oi), e.use(Xi), e.use(ji), e.use(Gi), e.use(Qi), e.use(or), e.use(sr), e.use(Ai), e.use(ar), e.use(rr), e.use(pr), e.use(dr), e.use(mr), e.use(_r), e.use(gr), e.use(hr), e.use($r), e.use(Cr), e.use(wr), e.use(Br), e.use(ti), e.use(kr), e.use(Pr), e.use(Nr), e.use(jr), e.use(Yr), e.use(Wr);
  }
}, Zr = { class: "v-confirm__header" }, Jr = { class: "v-confirm__title" }, Qr = { class: "v-confirm__body" }, eu = {
  key: 0,
  class: "v-confirm__text"
}, tu = ["innerHTML"], ou = { class: "v-confirm__footer" }, nu = /* @__PURE__ */ p({
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
    return (n, s) => (r(), m("div", {
      class: R(["v-confirm", {
        [`v-confirm--size-${e.size}`]: e.size,
        [`v-confirm--theme-${e.theme}`]: e.theme
      }])
    }, [
      B("div", Zr, [
        B("div", Jr, X(e.title), 1),
        B("button", {
          type: "button",
          onClick: s[0] || (s[0] = (l) => o("close"))
        }, " X ")
      ]),
      B("div", Qr, [
        e.useHtml ? (r(), m("div", {
          key: 1,
          class: "v-confirm__text",
          innerHTML: e.message
        }, null, 8, tu)) : (r(), m("div", eu, X(e.message), 1))
      ]),
      B("div", ou, [
        B("button", {
          type: "button",
          onClick: s[1] || (s[1] = (l) => o("success"))
        }, X(e.confirmText), 1),
        B("button", {
          type: "button",
          onClick: s[2] || (s[2] = (l) => o("cancel"))
        }, X(e.cancelText), 1)
      ])
    ], 2));
  }
});
class Ku {
  static #e = null;
  static async open(t, o) {
    return new Promise((n) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const s = (i) => {
        try {
          this.close(), n(i);
        } catch (u) {
          console.error(u), n(!1);
        }
      }, l = ie(nu, {
        ...t,
        onSuccess: () => {
          s(!0), t.onSuccess?.();
        },
        onCancel: () => {
          s(!1), t.onCancel?.();
        },
        onClose: () => {
          this.close(), t.onClose?.();
        },
        appContext: o
      });
      _e(l, this.#e);
    });
  }
  static close() {
    this.#e && _e(null, this.#e);
  }
}
const Wu = {
  install() {
  }
}, lo = 1500;
function su(e) {
  const t = c(() => K(e.props.duration) ? e.props.duration : lo), [o, n] = W(!1);
  let s = null;
  function l() {
    s && clearTimeout(s);
  }
  function i() {
    l(), t.value !== 0 && (s = setTimeout(() => {
      n(!1);
    }, t.value));
  }
  return ue(() => {
    i(), n(!0);
  }), {
    isVisible: o,
    setVisible: n,
    clearTimer: l,
    startTimer: i
  };
}
const lu = { class: "v-toast__header" }, au = { class: "v-toast__title" }, iu = { class: "v-toast__body" }, ru = {
  key: 0,
  class: "v-toast__text"
}, uu = ["innerHTML"], cu = /* @__PURE__ */ p({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: lo },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: u } = su({
      props: o
    });
    return (f, v) => (r(), $(De, {
      name: "fade-in-up",
      onAfterLeave: v[3] || (v[3] = (h) => n("close"))
    }, {
      default: g(() => [
        H(B("div", {
          class: R(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: v[1] || (v[1] = //@ts-ignore
          (...h) => a(u) && a(u)(...h)),
          onMouseleave: v[2] || (v[2] = //@ts-ignore
          (...h) => a(i) && a(i)(...h))
        }, [
          B("div", lu, [
            B("div", au, X(e.title), 1),
            e.clearable ? (r(), m("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (h) => a(l)(!1))
            }, " X ")) : F("", !0)
          ]),
          B("div", iu, [
            e.useHtml ? (r(), m("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, uu)) : (r(), m("div", ru, X(e.message), 1))
          ])
        ], 34), [
          [re, a(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class Zu {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = ie(cu, {
      ...t,
      appContext: o
    });
    _e(n, this.#e);
  }
}
class Ju {
  static open(t, o) {
    const n = ie(eo, {
      ...t,
      appContext: o
    });
    _e(n, document.body);
  }
}
class Qu {
  static open(t, o) {
    const n = ie(to, {
      ...t,
      appContext: o
    });
    _e(n, document.body);
  }
}
const ec = {
  name: "ru",
  vau: {}
}, tc = {
  name: "en",
  vau: {}
};
export {
  me as Accordion,
  Fa as AccordionPlugin,
  li as AffixPlugin,
  ti as AlertPlugin,
  Wa as AvatarGroupPlugin,
  Ka as AvatarPlugin,
  mi as BadgePlugin,
  ri as BreadcrumbsPlugin,
  Tt as Button,
  Xu as ButtonGroupPlugin,
  La as ButtonPlugin,
  Wr as CalendarPlugin,
  Re as Checkbox,
  mr as CheckboxGroupPlugin,
  dr as CheckboxPlugin,
  Du as ClickOutsidePlugin,
  Gu as ColPlugin,
  vi as CollapsePlugin,
  Cl as ConfigProvider,
  Mr as ConfigProviderPlugin,
  Kt as ConfigProviderRootContextKey,
  Wu as ConfirmPlugin,
  Ku as ConfirmService,
  ju as ContainerPlugin,
  Yr as CountdownPlugin,
  xu as Direction,
  mt as Divider,
  Pr as DividerPlugin,
  Ci as DrawerPlugin,
  Qu as DrawerService,
  Ti as DropdownPlugin,
  Ze as Flex,
  Cu as FlexAlign,
  Yu as FlexItemPlugin,
  Ru as FlexJustify,
  Nr as FlexPlugin,
  ge as Form,
  rr as FormItemPlugin,
  ar as FormPlugin,
  Je as Grid,
  Se as INPUT_NUMBER_ACTIONS,
  Ls as INPUT_NUMBER_MAX,
  Os as INPUT_NUMBER_MIN,
  Xt as INPUT_NUMBER_STEP,
  We as INPUT_NUMBER_VALUE_DEFAULT,
  Ns as INPUT_NUMBER_WHEEL_DELAY,
  Si as ImagePlugin,
  gi as InplacePlugin,
  Y as Input,
  ct as InputCode,
  hr as InputCodePlugin,
  jr as InputGroupPlugin,
  Ho as InputModes,
  be as InputNativeTypes,
  Ce as InputNumber,
  gr as InputNumberPlugin,
  Js as InputPassword,
  _r as InputPasswordPlugin,
  pr as InputPlugin,
  Pu as InputRange,
  zu as InputTags,
  wt as InputTypes,
  lt as IntersectionPresets,
  dt as Layout,
  Ai as LayoutPlugin,
  Eu as LoadingPlugin,
  Lu as Menu,
  ne as Modal,
  yi as ModalPlugin,
  Ju as ModalService,
  Oi as PaginationPlugin,
  Xi as PlaceholderPlugin,
  $u as Position,
  qe as Primitive,
  kr as ProgressPlugin,
  Ie as Radio,
  Cr as RadioGroupPlugin,
  $r as RadioPlugin,
  Uu as RowPlugin,
  kt as Scrollbar,
  ji as ScrollbarPlugin,
  Ou as Section,
  ye as Select,
  Br as SelectPlugin,
  Vu as Sizes,
  Gi as SpinnerPlugin,
  Ne as Switch,
  wr as SwitchPlugin,
  Qi as TabsPlugin,
  Zt as Tag,
  Hu as TagGroupPlugin,
  or as TagPlugin,
  wa as Text,
  sr as TextPlugin,
  _u as Themes,
  Zu as ToastService,
  ku as TooltipPlugin,
  Na as VAccordion,
  Xa as VAccordionItem,
  si as VAffix,
  ei as VAlert,
  Ua as VAvatar,
  qa as VAvatarGroup,
  di as VBadge,
  ii as VBreadcrumbs,
  Pa as VButton,
  Oa as VButtonGroup,
  Kr as VCalendar,
  ur as VCheckbox,
  cr as VCheckboxGroup,
  ki as VCol,
  pi as VCollapse,
  Sr as VConfigProvider,
  Ei as VContainer,
  Hr as VCountdown,
  zr as VDivider,
  to as VDrawer,
  Bi as VDropdown,
  Or as VFlex,
  Lr as VFlexItem,
  lr as VForm,
  ir as VFormItem,
  wi as VImage,
  bi as VInplace,
  fr as VInput,
  vr as VInputCode,
  Xr as VInputGroup,
  Fr as VInputGroupAddon,
  br as VInputNumber,
  yr as VInputPassword,
  Mi as VLayout,
  eo as VModal,
  Ir as VOption,
  Pi as VPagination,
  Ni as VPlaceholder,
  Dr as VProgress,
  Vr as VRadio,
  xr as VRadioGroup,
  Di as VRow,
  Fi as VScrollbar,
  Rr as VSelect,
  Ui as VSpinner,
  Tr as VSwitch,
  Ji as VTab,
  Zi as VTabs,
  er as VTag,
  tr as VTagGroup,
  nr as VText,
  qu as VauUI,
  Au as VisiblePlugin,
  bu as booleanToBooleanish,
  he as clone,
  Ye as debounce,
  gu as defineFormRules,
  pu as delay,
  tc as en,
  st as getProp,
  ko as isBoolean,
  fu as isEmpty,
  zo as isFunction,
  ze as isNull,
  K as isNumber,
  Ge as isObject,
  pe as isString,
  le as isUndefined,
  hu as omit,
  vu as pick,
  Bt as renderSlotFragments,
  ec as ru,
  Nu as ruRU,
  He as throttle,
  ho as useAccordionItem,
  vo as useAccordionRoot,
  bo as useAccordionTrigger,
  Tu as useAnimatedNumber,
  Bu as useClipboard,
  Vl as useConfigProviderRootContext,
  Fu as useDrawer,
  Mu as useEmitProxy,
  Wo as useFormItem,
  Yo as useFormRoot,
  Go as useIntersectionObserver,
  Iu as useLoadImage,
  yu as usePlural,
  Su as useScrollTo,
  W as useToggle,
  wu as useWindowScroll,
  Mt as vClickOutside,
  _n as vLoading,
  Vn as vTooltip,
  yn as vVisible
};
