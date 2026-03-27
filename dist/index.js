import { computed as c, toValue as b, inject as U, defineComponent as p, mergeModels as I, useModel as O, provide as H, createElementBlock as f, openBlock as r, normalizeClass as R, renderSlot as d, unref as a, withDirectives as Y, createElementVNode as T, vShow as re, markRaw as uo, Fragment as G, Comment as co, mergeProps as X, cloneVNode as fo, h as ie, createBlock as x, withCtx as g, ref as M, watch as K, onBeforeUnmount as je, onMounted as ue, onScopeDispose as He, isRef as Ee, nextTick as mo, useId as Ue, onUnmounted as ke, withModifiers as vt, useSlots as J, useTemplateRef as se, createCommentVNode as F, normalizeProps as E, guardReactiveProps as k, createTextVNode as j, renderList as me, toDisplayString as N, toHandlers as te, vModelDynamic as po, vModelText as ht, vModelCheckbox as bt, vModelRadio as vo, createVNode as B, withKeys as ot, useAttrs as ho, Teleport as gt, Transition as De, createPropsRestProxy as Oe, shallowRef as nt, createSlots as _t, reactive as bo, defineAsyncComponent as ze, render as Ve } from "vue";
import { z as st } from "zod";
function go(e) {
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
function _o(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.accordionRootContext?.modelValue)), n = c(() => !!b(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: c(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function yo(e) {
  const t = c(() => b(e.accordionItemContext?.props)), o = c(() => !!t.value?.disabled);
  function n() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: o,
    handleToggle: n
  };
}
const yt = /* @__PURE__ */ Symbol("AccordionRootContextKey"), Vt = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function $t() {
  return U(yt, null);
}
function xt() {
  return U(Vt, null);
}
function Vo() {
  const e = $t(), t = xt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const $o = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { setModelValue: l } = go({
      props: () => o,
      modelValue: () => s.value,
      onChange: (i) => n("change", i),
      onChangeModel: (i) => {
        s.value = i;
      }
    });
    return H(yt, {
      props: () => o,
      modelValue: () => s.value,
      setModelValue: l
    }), (i, u) => (r(), f("div", {
      class: R(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(i.$slots, "default")
    ], 2));
  }
}), xo = /* @__PURE__ */ p({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = $t(), { isActive: n } = _o({
      accordionRootContext: o,
      props: () => t
    });
    return H(Vt, {
      props: () => t,
      isActive: () => n.value
    }), (s, l) => (r(), f("div", {
      class: R(["accordion-item", {
        "accordion-item--open": a(n),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      d(s.$slots, "default", { isActive: a(n) })
    ], 2));
  }
}), D = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, Co = {}, Ro = { class: "accordion-header" };
function Io(e, t) {
  return r(), f("div", Ro, [
    d(e.$slots, "default")
  ]);
}
const To = /* @__PURE__ */ D(Co, [["render", Io]]), Bo = {
  class: "accordion-body",
  role: "region"
}, So = { class: "accordion-body__content" }, wo = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = xt(), o = c(() => !!b(t?.isActive));
    return (n, s) => Y((r(), f("div", Bo, [
      T("div", So, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [re, o.value]
    ]);
  }
}), Mo = {}, Ao = { class: "accordion-title" };
function Eo(e, t) {
  return r(), f("div", Ao, [
    d(e.$slots, "default")
  ]);
}
const ko = /* @__PURE__ */ D(Mo, [["render", Eo]]), Do = ["disabled"], Oo = /* @__PURE__ */ p({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = Vo(), { isDisabled: n, handleToggle: s } = yo({
      accordionRootContext: t,
      accordionItemContext: o
    });
    return (l, i) => (r(), f("button", {
      type: "button",
      disabled: a(n),
      class: "v-accordion-trigger",
      onClick: i[0] || (i[0] = //@ts-ignore
      (...u) => a(s) && a(s)(...u))
    }, [
      d(l.$slots, "default")
    ], 8, Do));
  }
}), fe = {
  Root: $o,
  Item: xo,
  Header: To,
  Body: wo,
  Title: ko,
  Trigger: Oo
};
function zo(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const Ct = /* @__PURE__ */ Symbol("FormRootContextKey"), Rt = /* @__PURE__ */ Symbol("FormItemContextKey");
function It() {
  return U(Ct, null);
}
function Tt() {
  return U(Rt, null);
}
function Q() {
  const e = It(), t = Tt(), o = c(() => !!t?.validationStatus.value.isSuccess), n = c(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: o,
    isInvalid: n
  };
}
function Po(e) {
  return typeof e == "boolean";
}
function ve(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Pe(e) {
  return e === null;
}
function Ge(e) {
  return !Pe(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function le(e) {
  return typeof e > "u";
}
function Fu(e) {
  return Pe(e) || le(e) ? !0 : ve(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ge(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Lo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function W(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function No(e) {
  return !Pe(e) && !le(e) && Ge(e) && !Array.isArray(e);
}
function lt(e, t) {
  if (!e || !t.trim())
    return null;
  const o = t.split(".");
  let n = e;
  for (const s of o) {
    if (!No(n))
      return null;
    n = n[s];
  }
  return n ?? null;
}
function be(e, t = /* @__PURE__ */ new WeakMap()) {
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
      o.set(be(s, t), be(n, t));
    }), o;
  }
  if (e instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    return t.set(e, o), e.forEach((n) => {
      o.add(be(n, t));
    }), o;
  }
  if (e instanceof ArrayBuffer) {
    const o = e.slice(0);
    return t.set(e, o), o;
  }
  if (Lo(e))
    return e;
  if (Array.isArray(e)) {
    const o = [];
    t.set(e, o);
    for (let n = 0; n < e.length; n++)
      o[n] = be(e[n], t);
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
        value: be(l.value, t)
      }) : Object.defineProperty(o, s, l));
    }
    return o;
  }
  return e;
}
function ju(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Hu(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function Uu(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function Gu(e) {
  return e ? "true" : "false";
}
function Ye(e, t, o = {}) {
  const {
    noTrailing: n = !1,
    noLeading: s = !1,
    debounceMode: l = void 0
  } = o;
  let i = null, u = !1, m = 0, v = null;
  function h() {
    i && (clearTimeout(i), i = null);
  }
  function _(y = {}) {
    const { upcomingOnly: C = !1 } = y;
    h(), u = !C;
  }
  function $() {
    if (m = Date.now(), v) {
      const y = v;
      e.apply(this, y), v = null;
    }
  }
  function V(...y) {
    if (u)
      return;
    const C = Date.now() - m;
    v = y;
    function S() {
      i = null;
    }
    h(), !s && l && !i && $.call(this), le(l) && C > t ? s ? (m = Date.now(), n || (i = setTimeout(l ? S : $.bind(this), t))) : $.call(this) : n || (i = setTimeout(
      l ? S : $.bind(this),
      le(l) ? t - C : t
    ));
  }
  return V.cancel = _, V;
}
function qe(e, t, o = {}) {
  const { atBegin: n = !1 } = o;
  return Ye(e, t, {
    debounceMode: n
  });
}
function Yu(e) {
  return uo(e);
}
function Bt(e) {
  return e ? e.flatMap((t) => t.type === G ? Bt(t.children) : [t]) : [];
}
const Xo = p({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      if (!o.default)
        return null;
      const n = Bt(o.default()), s = n.findIndex((m) => m.type !== co);
      if (s === -1)
        return n;
      const l = n[s];
      delete l.props?.ref;
      const i = l.props ? X(t, l.props) : t, u = fo({
        ...l,
        props: {}
      }, i);
      return n.length === 1 ? u : (n[s] = u, n);
    };
  }
}), Fo = [
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
], jo = p({
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
    return ve(n) && Fo.includes(n) ? () => ie(n, t) : n !== "template" ? () => ie(e.as, t, {
      default: o.default
    }) : () => ie(Xo, t, {
      default: o.default
    });
  }
}), St = {
  Root: jo
}, Ho = /* @__PURE__ */ p({
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
    const t = e, { formRootContext: o, formItemContext: n } = Q(), { isDisabled: s } = zo({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return (l, i) => (r(), x(a(St).Root, {
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
}), Uo = /* @__PURE__ */ p({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), wt = {
  Root: Ho,
  Group: Uo
};
function Go() {
  const e = M([]);
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
function Yo(e) {
  const t = c(() => b(e.formItems)), o = c(() => t.value.filter((l) => l.isValidatable));
  async function n(l = !1) {
    const u = (await Promise.all(o.value.map((m) => m.validate(l)))).every(Boolean);
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
function Z(e = !1) {
  const t = M(e);
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
function qu(e) {
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
function qo(e, t, o) {
  let n;
  const s = K(e, (u) => {
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
  return je(() => {
    l();
  }), {
    stop: l
  };
}
const Mt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), Ko = Object.freeze({
  NUMERIC: "numeric",
  TEL: "tel",
  TEXT: "text",
  DECIMAL: "decimal",
  SEARCH: "search",
  EMAIL: "email",
  NONE: "none",
  URL: "url"
}), ge = Object.freeze({
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  PASSWORD: "password"
}), Ku = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Wu = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Zu = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Ju = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Qu = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), ec = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), at = Object.freeze({
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
function tc(e, t, o = {}) {
  const {
    rootMargin: n = at.LAZY_IMAGE.rootMargin,
    threshold: s = at.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: u } = qo(e, w, {
    rootMargin: n,
    threshold: s
  }), [m, v] = Z(), [h, _] = Z(), $ = M(""), V = M(""), y = M(""), C = ve(t) ? { src: t } : t;
  function S() {
    if (m.value || h.value)
      return;
    const z = new Image();
    z.src = C.src, C.srcset && (z.srcset = C.srcset), C.sizes && (z.sizes = C.sizes), z.onload = () => {
      $.value = C.src, V.value = C.srcset || "", y.value = C.sizes || "", v(!0), _(!1);
    }, z.onerror = () => {
      v(!1), _(!0);
    };
  }
  function w(z) {
    z.forEach((P) => {
      P.isIntersecting && !m.value && !h.value && S();
    });
  }
  return ue(() => {
    if (i || l && "loading" in HTMLImageElement.prototype) {
      S();
      return;
    }
  }), {
    isLoaded: m,
    hasError: h,
    imageSrc: $,
    imageSrcset: V,
    imageSizes: y,
    loadImage: S,
    stop: u
  };
}
function oc() {
  return {};
}
function nc() {
  if (!window)
    return {
      number: M(0),
      animate: () => {
      }
    };
  const e = M(0);
  function t(o, n, s) {
    let l;
    function i(u) {
      l || (l = u);
      const m = Math.min((u - l) / s, 1);
      e.value = Math.floor(m * (n - o) + o), m < 1 && window.requestAnimationFrame(i);
    }
    window.requestAnimationFrame(i);
  }
  return {
    number: e,
    animate: t
  };
}
function sc() {
  if (!window)
    return {
      x: M(0),
      y: M(0)
    };
  const e = M(window.scrollX), t = M(window.scrollY);
  function o() {
    window && (e.value = window.scrollX, t.value = window.scrollY);
  }
  function n(s) {
    window.scrollTo(s);
  }
  return ue(() => {
    o(), window.addEventListener("scroll", o);
  }), He(() => {
    window.removeEventListener("scroll", o);
  }), {
    x: e,
    y: t,
    setScroll: n
  };
}
function lc(e, t) {
  (ve(e) ? document.querySelector(e) : Ee(e) ? a(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function ac(e, t) {
  return {
    listeners: t.reduce((n, s) => {
      const l = s, i = String(l);
      return n[l] = ((...u) => e(i, ...u)), n;
    }, {})
  };
}
function Wo(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = Go(), { validate: s, clearValidate: l, validatableFormItems: i } = Yo({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [u, m] = Z(!1), v = M(!1), h = M("");
  function _() {
    t.value.forEach((y) => y.reset()), l();
  }
  K(i, async (y) => {
    const C = y.map((w) => w.id).sort().join(",");
    if (C === h.value)
      return;
    if (h.value = C, y.length === 0) {
      v.value && m(!0);
      return;
    }
    v.value = !0;
    const S = await s(!0);
    m(S);
  }, {
    immediate: !0
  });
  const $ = qe(async () => {
    const y = await s(!0);
    m(y);
  }, 400);
  async function V(y = !1) {
    const C = await s(y);
    return m(C), C;
  }
  return K(() => b(e.modelValue), () => {
    $();
  }, {
    deep: !0
  }), ue(async () => {
    await mo(), await V(!0);
  }), He(() => {
    $.cancel();
  }), {
    isValid: u,
    validate: V,
    clearValidate: l,
    registerFormItem: o,
    unregisterFormItem: n,
    reset: _
  };
}
function Zo() {
  const e = M();
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
function Jo(e) {
  const t = c(() => b(e.data)), o = c(() => b(e.schema)), n = M({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), s = M([]);
  function l(m) {
    n.value = { ...n.value, ...m };
  }
  function i() {
    s.value = [];
  }
  async function u(m = !1) {
    if (!t.value || !o.value)
      return !1;
    l({ isValidating: !0 });
    const v = await o.value.safeParseAsync(t.value);
    return l({ isValidating: !1 }), v.success ? (l({ isError: !1, isSuccess: !0 }), e.onValid?.(), !0) : (m || (l({ isError: !0, isSuccess: !1 }), v.error && (s.value = v.error.issues)), e.onInvalid?.(), !1);
  }
  return {
    validationStatus: n,
    validationErrors: s,
    clearValidateErrors: i,
    validate: u
  };
}
function Qo(e) {
  const t = Ue(), { field: o, registerField: n, unregisterField: s } = Zo(), l = c(() => b(e.props)), i = c(() => l.value.name), u = c(() => e.formRootContext?.modelValue.value), m = c(() => e.formRootContext?.props?.rules), v = c(() => i.value && u.value && lt(u.value, i.value)), h = c(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), _ = c(() => {
    if (!i.value || !m.value)
      return null;
    const L = lt(m.value, i.value);
    return L instanceof st.ZodType ? L : null;
  }), $ = c(() => !!_.value), V = c(() => _.value ? !_.value.safeParse(void 0).success : !1), {
    validationStatus: y,
    validationErrors: C,
    clearValidateErrors: S,
    validate: w
  } = Jo({
    data: () => i.value ? {
      [i.value]: v.value
    } : null,
    schema: () => !i.value || !_.value ? null : st.object({
      [i.value]: _.value
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
    validationStatus: y.value,
    isValidatable: $.value,
    isRequired: V.value,
    registerField: n,
    unregisterField: s,
    reset: P,
    validate: w,
    clearValidateErrors: S
  }));
  function P() {
    !v.value || !l.value.name || (o.value?.reset(), S());
  }
  const A = qe(() => w(), 300);
  return ke(() => {
    A.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), K(z, (L) => {
    e.formRootContext?.registerFormItem(L);
  }, {
    deep: !0,
    immediate: !0
  }), K(v, () => A()), K(() => y.value.isSuccess, (L) => {
    L && S();
  }), {
    id: t,
    validationErrors: C,
    validationStatus: y,
    isDisabled: h,
    isRequired: V,
    reset: P,
    validate: w,
    clearValidateErrors: S,
    registerField: n,
    unregisterField: s
  };
}
const en = /* @__PURE__ */ p({
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
    const n = e, s = o, l = O(e, "modelValue"), {
      isValid: i,
      registerFormItem: u,
      unregisterFormItem: m,
      validate: v,
      clearValidate: h,
      reset: _
    } = Wo({
      modelValue: () => l.value,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    });
    async function $() {
      const V = await v();
      s("submit", {
        isValid: V,
        reset: _
      });
    }
    return H(Ct, {
      props: n,
      modelValue: l,
      registerFormItem: u,
      unregisterFormItem: m
    }), t({
      validate: v,
      clearValidate: h,
      reset: _
    }), (V, y) => (r(), f("form", {
      class: R(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: vt($, ["prevent"])
    }, [
      d(V.$slots, "default", { isValid: a(i) })
    ], 34));
  }
}), tn = {
  key: 0,
  class: "form-item__header"
}, on = { class: "form-item__body" }, nn = {
  key: 1,
  class: "form-item__footer"
}, sn = /* @__PURE__ */ p({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = J(), i = It(), {
      validationErrors: u,
      validationStatus: m,
      isDisabled: v,
      isRequired: h,
      registerField: _,
      unregisterField: $,
      reset: V,
      validate: y,
      clearValidateErrors: C
    } = Qo({
      formRootContext: i,
      props: () => n,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    }), S = se("root"), w = c(() => ({
      validationStatus: m.value,
      isRequired: h.value,
      errors: u.value
    }));
    return H(Rt, {
      props: n,
      validationStatus: m,
      validationErrors: u,
      isRequired: h,
      isDisabled: v,
      registerField: _,
      unregisterField: $,
      reset: V,
      validate: y,
      clearValidateErrors: C
    }), t({
      reset: V,
      validate: y,
      clearValidateErrors: C
    }), (z, P) => (r(), f("div", {
      ref_key: "root",
      ref: S,
      class: R(["form-item", [
        {
          "form-item--disabled": a(v),
          "form-item--required": a(h),
          "form-item--invalid": a(m).isError,
          "form-item--validating": a(m).isValidating,
          "form-item--valid": a(m).isSuccess
        }
      ]])
    }, [
      l?.header ? (r(), f("div", tn, [
        d(z.$slots, "header", E(k(w.value)))
      ])) : F("", !0),
      T("div", on, [
        d(z.$slots, "default", E(k(w.value)))
      ]),
      l.footer ? (r(), f("div", nn, [
        d(z.$slots, "footer", E(k(w.value)))
      ])) : F("", !0)
    ], 2));
  }
}), ln = {}, an = { class: "form-item-title" };
function rn(e, t) {
  return r(), f("div", an, [
    d(e.$slots, "default")
  ]);
}
const un = /* @__PURE__ */ D(ln, [["render", rn]]), cn = {}, dn = { class: "form-item-required" };
function fn(e, t) {
  return r(), f("span", dn, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" * ", -1))
    ])
  ]);
}
const mn = /* @__PURE__ */ D(cn, [["render", fn]]), pn = { class: "form-item-errors" }, vn = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = Tt(), o = c(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), f("div", pn, [
      (r(!0), f(G, null, me(o.value, (l, i) => (r(), f("div", {
        key: `error-${i}`,
        class: "form-item-errors__item"
      }, N(l.message), 1))), 128))
    ]));
  }
}), _e = {
  Root: en,
  Item: sn,
  ItemTitle: un,
  ItemRequired: mn,
  ItemErrors: vn
};
function hn() {
  const e = M([]);
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
function pe(e, t = !1) {
  return t && Array.isArray(e);
}
function bn(e) {
  const t = c(() => b(e.multiple)), o = c(() => b(e.modelValue)), n = c(() => b(e.options)), s = c(() => n.value.find((i) => i.props.value === o.value)), l = c(() => {
    if (!pe(o.value, t.value))
      return [];
    const i = new Set(o.value);
    return n.value.filter((u) => i.has(u.props.value));
  });
  return {
    activeOption: s,
    activeOptions: l
  };
}
function gn(e) {
  const t = c(() => b(e.modelValue)), o = c(() => b(e.props)), { options: n, registerOption: s, unregisterOption: l } = hn(), { activeOption: i, activeOptions: u } = bn({
    multiple: () => !!o.value.multiple,
    options: () => n.value,
    modelValue: () => t.value
  }), [m, v] = Z(), h = c(() => pe(t.value, o.value.multiple) ? t.value.length > 0 : !!t.value), _ = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.disabled));
  function $(w) {
    if (!_.value) {
      if (pe(t.value, o.value.multiple)) {
        const z = /* @__PURE__ */ new Set([...t.value]);
        z.has(w) ? z.delete(w) : z.add(w), e.onChangeModel?.([...z]);
      } else
        e.onChangeModel?.(w);
      e.onChange?.(w);
    }
  }
  function V() {
    if (pe(t.value, o.value.multiple)) {
      e.onChangeModel?.([]);
      return;
    }
    e.onChangeModel?.(""), e.onClear?.();
  }
  function y() {
    _.value || v(!0);
  }
  function C() {
    _.value || v(!1);
  }
  function S() {
    m.value ? C() : y();
  }
  return ue(() => {
    e.formItemContext?.registerField({
      reset: V
    });
  }), ke(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: i,
    activeOptions: u,
    hasValue: h,
    isOpen: m,
    isDisabled: _,
    open: y,
    close: C,
    toggle: S,
    registerOption: s,
    unregisterOption: l,
    setModelValue: $,
    reset: V
  };
}
function _n(e) {
  const t = Ue(), o = c(() => b(e.selectRootContext?.modelValue)), n = c(() => b(e.props)), s = c(() => !!b(e.selectRootContext?.props)?.multiple), l = c(() => le(o.value) ? !1 : pe(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), i = c(() => !!(b(e.selectRootContext?.isDisabled) || n.value?.disabled)), u = c(() => ({
    id: t,
    props: n.value
  }));
  function m(v) {
    e.selectRootContext?.setModelValue(v), e.selectRootContext?.close();
  }
  return K(u, (v) => {
    e.selectRootContext?.registerOption(v);
  }, {
    deep: !0,
    immediate: !0
  }), ke(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: l,
    isDisabled: i,
    handleChange: m
  };
}
function yn(e) {
  const t = c(() => b(e.selectRootContext?.props)), o = c(() => b(e.selectRootContext?.activeOption)), n = c(() => o.value?.props?.title ?? o.value?.props.value), s = c(() => b(e.selectRootContext?.activeOptions) ?? []), l = c(() => !!b(e.selectRootContext?.hasValue)), i = c(() => le(e.selectRootContext?.modelValue) ? !1 : pe(b(e.selectRootContext.modelValue), !!t.value?.multiple)), u = c(() => t.value?.placeholder);
  function m() {
    e.selectRootContext?.toggle();
  }
  return {
    activeOptionValue: n,
    activeOptions: s,
    hasValue: l,
    isMultiple: i,
    placeholder: u,
    toggle: m
  };
}
function Vn(e) {
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
const At = /* @__PURE__ */ Symbol("SelectRootContextKey");
function Le() {
  return U(At, null);
}
const $n = {
  mounted() {
  },
  unmounted() {
  }
}, ic = {
  install(e) {
    e.directive("visible", $n);
  }
}, xn = {
  mounted() {
  },
  unmounted() {
  }
}, rc = {
  install(e) {
    e.directive("loading", xn);
  }
}, Et = {
  mounted(e, t) {
    e.clickOutside = (o) => {
      o.target instanceof Element && (e === o.target || e.contains(o.target) || t.value(o, e));
    }, window.addEventListener("click", e.clickOutside);
  },
  unmounted(e) {
    window.removeEventListener("click", e.clickOutside);
  }
}, uc = {
  install(e) {
    e.directive("click-outside", Et);
  }
}, Cn = {
  mounted() {
  },
  unmounted() {
  }
}, cc = {
  install(e) {
    e.directive("tooltip", Cn);
  }
}, Rn = ["aria-disabled"], In = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), {
      activeOption: v,
      activeOptions: h,
      hasValue: _,
      isOpen: $,
      isDisabled: V,
      open: y,
      close: C,
      toggle: S,
      registerOption: w,
      unregisterOption: z,
      setModelValue: P
    } = gn({
      formRootContext: l,
      formItemContext: i,
      modelValue: () => s.value,
      props: () => o,
      onChangeModel: (A) => {
        s.value = A;
      },
      onChange: (A) => {
        n("change", A);
      },
      onClear: () => {
        n("clear");
      }
    });
    return H(At, {
      activeOption: () => v.value,
      activeOptions: () => h.value,
      modelValue: () => s.value,
      props: () => o,
      hasValue: () => _.value,
      isOpen: () => $.value,
      isDisabled: () => V.value,
      open: y,
      close: C,
      toggle: S,
      registerOption: w,
      unregisterOption: z,
      setModelValue: P
    }), (A, L) => Y((r(), f("div", {
      class: R(["select", {
        "select--disabled": a(V),
        "select--open": a($),
        "select--filled": a(_),
        "select--invalid": a(m),
        "select--valid": a(u)
      }]),
      "aria-disabled": a(V)
    }, [
      d(A.$slots, "default")
    ], 10, Rn)), [
      [a(Et), a(C)]
    ]);
  }
}), Tn = /* @__PURE__ */ p({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Le(), { isActive: n, isDisabled: s, handleChange: l } = _n({
      selectRootContext: o,
      props: () => t
    });
    return (i, u) => (r(), f("div", {
      class: R(["select-option", {
        "select-option--active": a(n),
        "select-option--disabled": a(s)
      }]),
      onClick: u[0] || (u[0] = (m) => a(l)(e.value))
    }, [
      d(i.$slots, "default", {
        isActive: a(n),
        isDisabled: a(s)
      }, () => [
        j(N(e.title), 1)
      ])
    ], 2));
  }
}), Bn = /* @__PURE__ */ p({
  __name: "SelectTrigger",
  setup(e) {
    const t = Le(), { open: o, close: n, toggle: s } = Vn({
      selectRootContext: t
    });
    return (l, i) => d(l.$slots, "default", {
      open: a(o),
      close: a(n),
      toggle: a(s)
    });
  }
}), Sn = { class: "select-dropdown" }, wn = /* @__PURE__ */ p({
  __name: "SelectDropdown",
  setup(e) {
    const t = Le(), o = c(() => !!b(t?.isOpen));
    return (n, s) => Y((r(), f("div", Sn, [
      d(n.$slots, "default")
    ], 512)), [
      [re, o.value]
    ]);
  }
}), Mn = /* @__PURE__ */ p({
  __name: "SelectValue",
  setup(e) {
    const t = Le(), { activeOptionValue: o, activeOptions: n, hasValue: s, isMultiple: l, placeholder: i, toggle: u } = yn({
      selectRootContext: t
    });
    return (m, v) => (r(), f("div", {
      class: "select-value",
      onClick: v[0] || (v[0] = //@ts-ignore
      (...h) => a(u) && a(u)(...h))
    }, [
      d(m.$slots, "default", {}, () => [
        a(s) ? (r(), f(G, { key: 0 }, [
          a(l) ? (r(!0), f(G, { key: 0 }, me(a(n), (h) => (r(), f(G, null, [
            j(N(h.props.value), 1)
          ], 64))), 256)) : (r(), f(G, { key: 1 }, [
            j(N(a(o)), 1)
          ], 64))
        ], 64)) : (r(), f(G, { key: 1 }, [
          j(N(a(i)), 1)
        ], 64))
      ])
    ]));
  }
}), kt = 300, Dt = 1, Ot = 10;
function it(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function rt(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function ut(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function ct(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function An(e) {
  const t = c(() => b(e.props)), o = c(() => t.value?.infiniteScrollOffset ?? Ot), n = c(() => t.value?.draggableMultiplier ?? Dt), s = c(() => W(t.value?.debounceDelay) ? t.value.debounceDelay : kt), [l, i] = Z(), [u, m] = Z(), v = M(0), h = M(0), _ = M(0), $ = M(0);
  function V() {
    m(!1), i(!1);
  }
  const y = qe((P) => {
    e.onScroll?.(P), t.value?.draggable || (_.value = it(e.scrollbar.value, !!t.value?.vertical), $.value = rt(e.scrollbar.value, !!t.value?.horizontal));
    const A = e.scrollbar.value, L = e.content.value, oe = A ? A.clientHeight : 0, ae = A ? A.clientWidth : 0, $e = L ? L.scrollWidth : 0, ce = L ? L.scrollHeight : 0, de = _.value + oe, Ne = $.value + ae, xe = !!(t.value?.vertical && ce - de <= o.value), ee = !!(t.value?.horizontal && $e - Ne <= o.value);
    xe && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), C = Ye((P) => {
    if (e.onMousemove?.(P), !t.value?.draggable || !u.value)
      return;
    P.preventDefault(), P.stopPropagation();
    const A = e.scrollbar.value;
    if (!A)
      return;
    const L = !!t.value?.vertical, oe = !!t.value?.horizontal, ae = P.pageY - ut(A, L), ce = (P.pageX - ct(A, oe) - v.value) * n.value, de = (ae - h.value) * n.value;
    oe && (A.scrollLeft = $.value - ce), L && (A.scrollTop = _.value - de);
  }, s.value);
  function S(P) {
    if (e.onMousedown?.(P), !t.value?.draggable)
      return;
    m(!0), i(!0);
    const A = e.scrollbar.value;
    if (A) {
      const L = !!t.value?.vertical, oe = !!t.value?.horizontal;
      h.value = P.pageY - ut(A, L), v.value = P.pageX - ct(A, oe);
    }
    _.value = it(e.scrollbar.value, !!t.value?.vertical), $.value = rt(e.scrollbar.value, !!t.value?.horizontal);
  }
  function w(P) {
    e.onMouseleave?.(P), t.value?.draggable && V();
  }
  function z(P) {
    e.onMouseup?.(P), t.value?.draggable && V();
  }
  return He(() => {
    y.cancel?.(), C.cancel?.();
  }), {
    isGrabbing: l,
    handleScroll: y,
    handleMousedown: S,
    handleMouseleave: w,
    handleMouseup: z,
    handleMousemove: C
  };
}
const En = /* @__PURE__ */ p({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: Dt },
    infiniteScrollOffset: { default: Ot },
    debounceDelay: { default: kt },
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
      handleMousedown: m,
      handleMouseleave: v,
      handleMouseup: h,
      handleMousemove: _
    } = An({
      props: () => o,
      scrollbar: s,
      content: l,
      onScroll: ($) => n("scroll", $),
      onMousedown: ($) => n("mousedown", $),
      onMouseleave: ($) => n("mouseleave", $),
      onMouseup: ($) => n("mouseup", $),
      onMousemove: ($) => n("mousemove", $),
      onScrollEndY: () => n("scrollEndY"),
      onScrollEndX: () => n("scrollEndX")
    });
    return ($, V) => (r(), f("div", {
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
      onScroll: V[0] || (V[0] = //@ts-ignore
      (...y) => a(u) && a(u)(...y)),
      onMousedown: V[1] || (V[1] = //@ts-ignore
      (...y) => a(m) && a(m)(...y)),
      onMouseleave: V[2] || (V[2] = //@ts-ignore
      (...y) => a(v) && a(v)(...y)),
      onMouseup: V[3] || (V[3] = //@ts-ignore
      (...y) => a(h) && a(h)(...y)),
      onMousemove: V[4] || (V[4] = //@ts-ignore
      (...y) => a(_) && a(_)(...y))
    }, [
      T("div", {
        ref_key: "content",
        ref: l,
        class: "scrollbar__content"
      }, [
        d($.$slots, "default")
      ], 512)
    ], 34));
  }
}), zt = {
  Root: En
}, kn = /* @__PURE__ */ p({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, o) => (r(), x(a(zt).Root, { class: "select-scrollbar" }, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ye = {
  Root: In,
  Option: Tn,
  Trigger: Bn,
  Dropdown: wn,
  Value: Mn,
  Scrollbar: kn
};
function Dn(e) {
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
function On(e) {
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
function zn(e) {
  const [t, o] = Z(), n = c(() => b(e.props)), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.loading || n.value?.disabled)), l = c(() => n.value.type === Mt.TEXTAREA), i = c(() => !!b(e.modelValue)?.trim());
  function u(v) {
    e.onUpdateModelValue?.(v);
  }
  function m() {
    u("");
  }
  return {
    isFocus: t,
    isDisabled: s,
    isTextarea: l,
    hasValue: i,
    setFocus: o,
    setModelValue: u,
    reset: m
  };
}
function Pt(e) {
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
function Pn(e) {
  const t = c(() => b(e.inputRootContext?.props)), o = c(() => !!t.value?.clearable);
  function n() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: o,
    handleClear: n
  };
}
const Lt = /* @__PURE__ */ Symbol("InputRootContextKey");
function Ke() {
  return U(Lt, null);
}
const Ln = /* @__PURE__ */ p({
  __name: "InputRoot",
  props: /* @__PURE__ */ I({
    type: { default: Mt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: ge.TEXT },
    inputMode: { default: Ko.TEXT },
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
    const n = e, s = o, l = O(e, "modelValue"), { formRootContext: i, formItemContext: u, isValid: m, isInvalid: v } = Q(), { isDisabled: h, isTextarea: _, hasValue: $, isFocus: V, setFocus: y, setModelValue: C, reset: S } = zn({
      formRootContext: i,
      formItemContext: u,
      modelValue: () => l.value,
      props: () => n,
      onUpdateModelValue: (w) => {
        l.value = w;
      }
    });
    return H(Lt, {
      isDisabled: () => h.value,
      props: () => n,
      modelValue: () => l.value,
      setFocus: y,
      setModelValue: C,
      reset: S,
      emit: s
    }), t({
      setFocus: y
    }), (w, z) => (r(), f("div", {
      class: R(["input", {
        "input--focus": a(V),
        "input--textarea": a(_),
        "input--filled": a($),
        "input--disabled": a(h),
        "input--loading": e.loading,
        "input--invalid": a(v),
        "input--valid": a(m)
      }])
    }, [
      d(w.$slots, "default", {
        isTextarea: a(_),
        isFocus: a(V),
        hasValue: a($),
        loading: !!e.loading,
        isInvalid: a(v),
        isValid: a(m)
      })
    ], 2));
  }
}), Nn = {}, Xn = { class: "input-before" };
function Fn(e, t) {
  return r(), f("div", Xn, [
    d(e.$slots, "default")
  ]);
}
const jn = /* @__PURE__ */ D(Nn, [["render", Fn]]), Hn = { class: "input-after" }, Un = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = Ke(), { isClearable: o, handleClear: n } = Pn({
      inputRootContext: t
    });
    return (s, l) => (r(), f("div", Hn, [
      d(s.$slots, "default"),
      a(o) ? (r(), f("button", {
        key: 0,
        type: "button",
        onClick: l[0] || (l[0] = //@ts-ignore
        (...i) => a(n) && a(n)(...i))
      }, " × ")) : F("", !0)
    ]));
  }
}), Gn = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Yn = /* @__PURE__ */ p({
  __name: "InputNative",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = Pt({
      inputRootContext: t
    }), { props: s } = On({
      inputRootContext: t
    });
    return (l, i) => Y((r(), f("input", X({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ee(o) ? o.value = u : null),
      type: a(s).nativeType,
      inputmode: a(s).inputMode,
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      placeholder: a(s).placeholder,
      class: "input-native"
    }, te(a(n), !0)), null, 16, Gn)), [
      [po, a(o)]
    ]);
  }
}), qn = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Kn = /* @__PURE__ */ p({
  __name: "InputTextarea",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = Pt({
      inputRootContext: t
    }), { props: s } = Dn({
      inputRootContext: t
    });
    return (l, i) => Y((r(), f("textarea", X({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ee(o) ? o.value = u : null),
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      rows: a(s).rows,
      cols: a(s).cols,
      placeholder: a(s).placeholder,
      class: "input-textarea"
    }, te(a(n), !0)), null, 16, qn)), [
      [ht, a(o)]
    ]);
  }
}), Wn = {}, Zn = { class: "input-control" };
function Jn(e, t) {
  return r(), f("div", Zn, [
    d(e.$slots, "default")
  ]);
}
const Qn = /* @__PURE__ */ D(Wn, [["render", Jn]]), es = {}, ts = { class: "input-group" };
function os(e, t) {
  return r(), f("div", ts, [
    d(e.$slots, "default")
  ]);
}
const ns = /* @__PURE__ */ D(es, [["render", os]]), ss = {}, ls = { class: "input-group-addon" };
function as(e, t) {
  return r(), f("div", ls, [
    d(e.$slots, "default")
  ]);
}
const is = /* @__PURE__ */ D(ss, [["render", as]]), q = {
  Root: Ln,
  Before: jn,
  After: Un,
  Native: Yn,
  Textarea: Kn,
  Control: Qn,
  Group: ns,
  GroupAddon: is
}, Nt = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function rs() {
  return U(Nt, null);
}
function us(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = c(() => Po(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), l = c(() => !!(s.value || t.value?.checked)), i = c(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: l,
    isIndeterminate: i
  };
}
function cs(e) {
  const t = c(() => !!b(e.checkboxRootContext?.isDisabled)), o = c(() => !!b(e.checkboxRootContext?.isActive)), n = c(() => !!b(e.checkboxRootContext?.isIndeterminate)), s = c(() => !!b(e.checkboxRootContext?.isValid)), l = c(() => !!b(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: l
  };
}
const ds = ["value", "disabled", "checked"], fs = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isChecked: v, isDisabled: h, isIndeterminate: _ } = us({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    }), $ = se("inputRef");
    return K([$, _], ([V, y]) => {
      V && (V.indeterminate = !!y);
    }, {
      immediate: !0
    }), H(Nt, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isIndeterminate: () => _.value,
      isValid: () => u.value,
      isInvalid: () => m.value
    }), (V, y) => (r(), f("label", {
      class: R(["checkbox", {
        "checkbox--disabled": a(h),
        "checkbox--active": a(v),
        "checkbox--indeterminate": a(_),
        "checkbox--invalid": a(m),
        "checkbox--valid": a(u)
      }])
    }, [
      Y(T("input", X({
        ref_key: "inputRef",
        ref: $,
        "onUpdate:modelValue": y[0] || (y[0] = (C) => s.value = C),
        value: e.value,
        type: "checkbox",
        disabled: a(h),
        checked: a(v),
        class: "checkbox__input"
      }, te(n, !0)), null, 16, ds), [
        [bt, s.value]
      ]),
      d(V.$slots, "default")
    ], 2));
  }
}), ms = /* @__PURE__ */ p({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = rs(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: l, isInvalid: i } = cs({
      checkboxRootContext: t
    });
    return (u, m) => (r(), f("span", {
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
        j(N(a(n) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), ps = {}, vs = { class: "checkbox-title" };
function hs(e, t) {
  return r(), f("span", vs, [
    d(e.$slots, "default")
  ]);
}
const bs = /* @__PURE__ */ D(ps, [["render", hs]]), gs = /* @__PURE__ */ p({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ie = {
  Root: fs,
  Indicator: ms,
  Title: bs,
  Group: gs
};
function _s(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: c(() => o.value === t.value.value),
    isDisabled: n
  };
}
function ys(e) {
  const t = c(() => !!b(e.radioRootContext?.isDisabled)), o = c(() => !!b(e.radioRootContext?.isActive)), n = c(() => !!b(e.radioRootContext?.isValid)), s = c(() => !!b(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Xt = /* @__PURE__ */ Symbol("RadioRootContextKey");
function Vs() {
  return U(Xt, null);
}
const $s = ["value", "disabled"], xs = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isActive: v, isDisabled: h } = _s({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    });
    return H(Xt, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isValid: () => u.value,
      isInvalid: () => m.value
    }), (_, $) => (r(), f("label", {
      class: R(["radio", {
        "radio--disabled": a(h),
        "radio--active": a(v),
        "radio--invalid": a(m),
        "radio--valid": a(u)
      }])
    }, [
      Y(T("input", X({
        "onUpdate:modelValue": $[0] || ($[0] = (V) => s.value = V),
        value: e.value,
        type: "radio",
        disabled: a(h),
        class: "radio__input"
      }, te(n, !0)), null, 16, $s), [
        [vo, s.value]
      ]),
      d(_.$slots, "default")
    ], 2));
  }
}), Cs = /* @__PURE__ */ p({
  __name: "RadioIndicator",
  setup(e) {
    const t = Vs(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = ys({
      radioRootContext: t
    });
    return (i, u) => (r(), f("span", {
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
        j(N(a(n) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), Rs = {}, Is = { class: "radio-title" };
function Ts(e, t) {
  return r(), f("span", Is, [
    d(e.$slots, "default")
  ]);
}
const Bs = /* @__PURE__ */ D(Rs, [["render", Ts]]), Ss = /* @__PURE__ */ p({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Te = {
  Root: xs,
  Indicator: Cs,
  Title: Bs,
  Group: Ss
};
function ws(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function Ms(e) {
  const t = c(() => !!b(e.switchRootContext?.isDisabled)), o = c(() => !!b(e.switchRootContext?.isActive)), n = c(() => !!b(e.switchRootContext?.isValid)), s = c(() => !!b(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Ft = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function As() {
  return U(Ft, null);
}
const Es = { class: "switch" }, ks = ["disabled"], Ds = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: u, isActive: m } = ws({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value
    });
    return H(Ft, {
      props: () => t,
      isActive: () => m.value,
      isDisabled: () => u.value,
      isValid: () => l.value,
      isInvalid: () => i.value
    }), (v, h) => (r(), f("label", Es, [
      Y(T("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (_) => o.value = _),
        type: "checkbox",
        disabled: a(u),
        class: "switch__input"
      }, null, 8, ks), [
        [bt, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), Os = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = As(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = Ms({
      switchRootContext: t
    });
    return (i, u) => (r(), f("span", {
      class: R(["switch-indicator", {
        "switch-indicator--disabled": a(o),
        "switch-indicator--active": a(n),
        "switch-indicator--valid": a(s),
        "switch-indicator--invalid": a(l)
      }])
    }, null, 2));
  }
}), zs = {}, Ps = { class: "switch-title" };
function Ls(e, t) {
  return r(), f("span", Ps, [
    d(e.$slots, "default")
  ]);
}
const Ns = /* @__PURE__ */ D(zs, [["render", Ls]]), Fe = {
  Root: Ds,
  Indicator: Os,
  Title: Ns
}, jt = 1, Xs = -1 / 0, Fs = 1 / 0, js = 100, We = 0, Me = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Hs(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => t.value.step || jt), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), l = c(() => s.value || W(t.value.min) && o.value === t.value.min), i = c(() => s.value || W(t.value.max) && !(o.value < t.value.max));
  function u() {
    if (t.value.readonly)
      return;
    const h = o.value - n.value;
    (!W(t.value.min) || h >= t.value.min) && e.onDecrement?.(h);
  }
  function m() {
    if (t.value.readonly)
      return;
    const h = o.value + n.value;
    (!W(t.value.max) || h <= t.value.max) && e.onIncrement?.(h);
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
    handleIncrement: m,
    setModelValue: v
  };
}
function Us(e) {
  const t = c(() => b(e.mousewheel)), o = c(() => W(t.value) && t.value > 0 ? t.value : js);
  return {
    handleWheel: Ye((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function Gs(e) {
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
function Ys(e) {
  const t = c(() => b(e.props)), o = c(() => t.value.action === Me.DECREMENT), n = c(() => t.value.action === Me.INCREMENT), s = c(() => o.value ? !!b(e.inputNumberRootContext?.isDecrementDisabled) : !!b(e.inputNumberRootContext?.isIncrementDisabled));
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
const Ht = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function Ut() {
  return U(Ht, null);
}
const qs = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ I({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Xs },
    max: { default: Fs },
    step: { default: jt },
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
    const t = e, o = O(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), {
      step: u,
      isDisabled: m,
      isDecrementDisabled: v,
      isIncrementDisabled: h,
      handleDecrement: _,
      handleIncrement: $,
      setModelValue: V
    } = Hs({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value,
      onUpdateModelValue: (y) => {
        o.value = y;
      },
      onDecrement: (y) => {
        o.value = y;
      },
      onIncrement: (y) => {
        o.value = y;
      }
    });
    return H(Ht, {
      props: () => t,
      isDisabled: () => m.value,
      modelValue: () => o.value,
      step: () => u.value,
      isDecrementDisabled: () => v.value,
      isIncrementDisabled: () => h.value,
      handleDecrement: _,
      handleIncrement: $,
      setModelValue: V
    }), (y, C) => (r(), f("div", {
      class: R(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": a(i),
        "input-number--valid": a(l)
      }])
    }, [
      d(y.$slots, "default")
    ], 2));
  }
}), Ks = { class: "input-number-input" }, Ws = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = Ut(), { props: o, modelValue: n } = Gs({
      inputNumberRootContext: t
    }), { handleWheel: s } = Us({
      mousewheel: () => b(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), f("div", Ks, [
      Y(T("input", X({
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Ee(n) ? n.value = u : null),
        type: "number",
        class: "input-number-input__native"
      }, a(o), {
        onWheel: i[1] || (i[1] = //@ts-ignore
        (...u) => a(s) && a(s)(...u))
      }), null, 16), [
        [
          ht,
          a(n),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), Zs = ["disabled"], Js = /* @__PURE__ */ p({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = Ut(), { handleAction: n, isDisabled: s, isDecrement: l, isIncrement: i } = Ys({
      inputNumberRootContext: o,
      props: () => t
    });
    return (u, m) => (r(), f("button", {
      class: R(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: a(s),
      type: "button",
      onClick: m[0] || (m[0] = //@ts-ignore
      (...v) => a(n) && a(n)(...v))
    }, [
      d(u.$slots, "default", {}, () => [
        a(l) ? (r(), f(G, { key: 0 }, [
          j(" - ")
        ], 64)) : a(i) ? (r(), f(G, { key: 1 }, [
          j(" + ")
        ], 64)) : F("", !0)
      ])
    ], 10, Zs));
  }
}), Re = {
  Root: qs,
  Input: Ws,
  Button: Js
};
function Qs() {
  const e = M(ge.PASSWORD);
  function t() {
    e.value === ge.PASSWORD ? e.value = ge.TEXT : e.value = ge.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const el = /* @__PURE__ */ p({
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
    const t = e, o = J(), n = O(e, "modelValue"), { currentType: s, handleToggleType: l } = Qs();
    return (i, u) => (r(), x(a(q).Root, X(t, {
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (m) => n.value = m),
      "native-type": a(s)
    }), {
      default: g((m) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: g(() => [
            d(i.$slots, "before", E(k(m)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        B(a(q).Control, null, {
          default: g(() => [
            B(a(q).Native)
          ]),
          _: 1
        }),
        B(a(q).After, null, {
          default: g(() => [
            d(i.$slots, "after", E(k(m)), () => [
              T("button", {
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
}), tl = {
  Root: el
};
function ol(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function nl(e) {
  return {
    isDisabled: c(() => {
      const o = e.inputCodeRootContext;
      return o ? !!b(o.isDisabled) : !1;
    })
  };
}
const Gt = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function sl() {
  return U(Gt, null);
}
const ll = /* @__PURE__ */ p({
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
    O(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = ol({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return H(Gt, {
      props: () => t,
      isDisabled: () => i.value
    }), (u, m) => (r(), f("div", {
      class: R(["input-code", {
        "input-code--disabled": a(i),
        "input-code--invalid": a(l),
        "input-code--valid": a(s)
      }])
    }, [
      d(u.$slots, "default")
    ], 2));
  }
}), al = ["disabled", "aria-disabled"], il = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = sl(), { isDisabled: o } = nl({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), f("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, al));
  }
}), dt = {
  Root: ll,
  Pin: il
}, Yt = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function qt() {
  return U(Yt, null);
}
function rl(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function ul(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const cl = /* @__PURE__ */ p({
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
    const o = e, n = O(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: u } = Q(), { isDisabled: m } = rl({
      formRootContext: s,
      formItemContext: l,
      props: () => o
    });
    return H(Yt, {
      props: () => o,
      modelValue: () => n.value,
      isDisabled: () => m.value
    }), (v, h) => (r(), f("div", {
      class: R(["input-tags", {
        "input-tags--disabled": a(m),
        "input-tags--invalid": a(u),
        "input-tags--valid": a(i)
      }])
    }, [
      d(v.$slots, "default")
    ], 2));
  }
}), dl = { class: "input-tags-input" }, fl = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    qt();
    const { handleEnter: t, handleTab: o } = ul();
    return (n, s) => (r(), f("div", dl, [
      T("input", {
        type: "text",
        onKeydown: [
          s[0] || (s[0] = ot(
            //@ts-ignore
            (...l) => a(t) && a(t)(...l),
            ["enter"]
          )),
          s[1] || (s[1] = ot(
            //@ts-ignore
            (...l) => a(o) && a(o)(...l),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), ml = { class: "input-tags-tags" }, pl = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return qt(), (t, o) => (r(), f("div", ml));
  }
}), dc = {
  Root: cl,
  Input: fl,
  Tags: pl
};
function vl(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function hl(e) {
  return {
    isDisabled: c(() => !!b(e.inputRangeRootContext?.isDisabled))
  };
}
const Kt = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function bl() {
  return U(Kt, null);
}
const gl = /* @__PURE__ */ p({
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
    O(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = vl({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return H(Kt, {
      props: () => t,
      isDisabled: () => i.value
    }), (u, m) => (r(), f("div", {
      class: R(["input-range", {
        "input-range--disabled": a(i),
        "input-range--invalid": a(l),
        "input-range--valid": a(s)
      }])
    }, [
      d(u.$slots, "default")
    ], 2));
  }
}), _l = ["aria-disabled"], yl = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = bl(), { isDisabled: o } = hl({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), f("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, _l));
  }
}), fc = {
  Root: gl,
  Slider: yl
}, Wt = /* @__PURE__ */ Symbol("ModalRootContextKey");
function Zt() {
  return U(Wt, null);
}
function Vl(e) {
  const t = c(() => b(e.configProviderRootContext?.props)), o = c(() => b(e.modelValue)), n = c(() => t.value?.teleportTarget);
  function s() {
    e.onClose?.();
  }
  return K(o, (l) => {
    l && e.onOpen?.();
  }), {
    close: s,
    teleportTarget: n
  };
}
function $l(e) {
  function t() {
    e.modalRootContext?.close();
  }
  return {
    close: t
  };
}
function xl(e) {
  const t = c(() => b(e.modalRootContext?.props));
  return {
    position: c(() => t.value?.position)
  };
}
const Jt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey"), Qt = "body";
function Cl() {
  return U(Jt, {
    props: () => ({
      teleportTarget: Qt
    }),
    t: () => ""
  });
}
function Rl(e) {
  const t = c(() => b(e.props));
  function o(n) {
    if (!t.value?.locale)
      return "";
    const s = n.split(".");
    let l = t.value.locale;
    for (const i of s) {
      if (le(l) || Pe(l) || ve(l))
        return n;
      l = l[i];
    }
    return ve(l) ? l : n;
  }
  return {
    t: o
  };
}
const Il = /* @__PURE__ */ p({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: { default: () => Qt },
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = Rl({
      props: () => t
    });
    return H(Jt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), Tl = {
  Root: Il
}, Bl = /* @__PURE__ */ p({
  inheritAttrs: !1,
  __name: "ModalRoot",
  props: /* @__PURE__ */ I({
    position: {},
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = O(e, "modelValue"), l = ho(), i = Cl(), { close: u, teleportTarget: m } = Vl({
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
    return H(Wt, {
      props: o,
      close: u
    }), (v, h) => (r(), x(gt, {
      to: a(m),
      disabled: !e.appendToBody
    }, [
      B(De, {
        name: "fade-in-down",
        onAfterEnter: h[1] || (h[1] = (_) => n("opened", _)),
        onAfterLeave: h[2] || (h[2] = (_) => n("closed", _))
      }, {
        default: g(() => [
          Y(T("div", X({ class: "modal" }, a(l), {
            class: {
              "modal--open": s.value,
              [`modal--size-${e.size}`]: e.size
            },
            onClick: h[0] || (h[0] = //@ts-ignore
            (..._) => a(u) && a(u)(..._))
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
}), Sl = {}, wl = { class: "modal-body" };
function Ml(e, t) {
  return r(), f("div", wl, [
    d(e.$slots, "default")
  ]);
}
const Al = /* @__PURE__ */ D(Sl, [["render", Ml]]), El = /* @__PURE__ */ p({
  __name: "ModalClose",
  setup(e) {
    const t = Zt(), { close: o } = $l({
      modalRootContext: t
    });
    return (n, s) => (r(), f("button", {
      type: "button",
      class: "modal-close",
      onClick: s[0] || (s[0] = //@ts-ignore
      (...l) => a(o) && a(o)(...l))
    }, [
      d(n.$slots, "default")
    ]));
  }
}), kl = {}, Dl = { class: "modal-header" };
function Ol(e, t) {
  return r(), f("div", Dl, [
    d(e.$slots, "default")
  ]);
}
const zl = /* @__PURE__ */ D(kl, [["render", Ol]]), Pl = {}, Ll = { class: "modal-footer" };
function Nl(e, t) {
  return r(), f("div", Ll, [
    d(e.$slots, "default")
  ]);
}
const Xl = /* @__PURE__ */ D(Pl, [["render", Nl]]), Fl = {}, jl = { class: "modal-title" };
function Hl(e, t) {
  return r(), f("div", jl, [
    d(e.$slots, "default")
  ]);
}
const Ul = /* @__PURE__ */ D(Fl, [["render", Hl]]), Gl = {}, Yl = { class: "modal-content" };
function ql(e, t) {
  return r(), f("div", Yl, [
    d(e.$slots, "default")
  ]);
}
const Kl = /* @__PURE__ */ D(Gl, [["render", ql]]), Wl = /* @__PURE__ */ p({
  __name: "ModalDialog",
  setup(e) {
    const t = Zt(), { position: o } = xl({
      modalRootContext: t
    });
    return (n, s) => (r(), f("div", {
      class: R(["modal-dialog", {
        [`modal-dialog--position-${a(o)}`]: a(o)
      }]),
      role: "dialog",
      onClick: s[0] || (s[0] = vt(() => {
      }, ["stop"]))
    }, [
      d(n.$slots, "default")
    ], 2));
  }
}), ne = {
  Root: Bl,
  Body: Al,
  Close: El,
  Header: zl,
  Footer: Xl,
  Title: Ul,
  Content: Kl,
  Dialog: Wl
};
function Zl(e) {
  const t = c(() => b(e.props));
  function o() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: o
  };
}
const Jl = /* @__PURE__ */ p({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, n = t, { handleDelete: s } = Zl({
      props: () => o,
      onDelete(l) {
        n("delete", l);
      }
    });
    return (l, i) => (r(), f("div", {
      class: R(["tag", {
        [`tag--size-${e.size}`]: e.size,
        [`tag--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      e.canDelete ? (r(), f("button", {
        key: 0,
        type: "button",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...u) => a(s) && a(s)(...u))
      }, " X ")) : F("", !0)
    ], 2));
  }
}), Ql = /* @__PURE__ */ p({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), eo = {
  Root: Jl,
  Group: Ql
}, ea = { class: "layout" }, ta = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), f("div", ea, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), oa = {}, na = { class: "layout-body" };
function sa(e, t) {
  return r(), f("main", na, [
    d(e.$slots, "default")
  ]);
}
const la = /* @__PURE__ */ D(oa, [["render", sa]]), ft = {
  Root: ta,
  Body: la
}, aa = /* @__PURE__ */ p({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), ia = /* @__PURE__ */ p({
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
    return (t, o) => (r(), f("div", {
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
}), ra = /* @__PURE__ */ p({
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
    return (t, o) => (r(), f("div", {
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
}), ua = /* @__PURE__ */ p({
  __name: "FlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["flex-item", {
        [`flex-item--flex-${e.flex}`]: e.flex
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ze = {
  Root: ra,
  Item: ua
}, ca = /* @__PURE__ */ p({
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
    const t = Oe(e, ["guttersY", "guttersX", "wrap"]);
    return (o, n) => (r(), x(a(Ze).Root, X(t, {
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
  Container: aa,
  Row: ca,
  Col: ia
}, da = { class: "section" }, fa = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), f("section", da, [
      d(t.$slots, "default")
    ]));
  }
}), ma = {}, pa = { class: "section-header" };
function va(e, t) {
  return r(), f("header", pa, [
    d(e.$slots, "default")
  ]);
}
const ha = /* @__PURE__ */ D(ma, [["render", va]]), ba = {}, ga = { class: "section-title" };
function _a(e, t) {
  return r(), f("h1", ga, [
    d(e.$slots, "default")
  ]);
}
const ya = /* @__PURE__ */ D(ba, [["render", _a]]), Va = {}, $a = { class: "section-footer" };
function xa(e, t) {
  return r(), f("footer", $a, [
    d(e.$slots, "default")
  ]);
}
const Ca = /* @__PURE__ */ D(Va, [["render", xa]]), Ra = {}, Ia = { class: "section-body" };
function Ta(e, t) {
  return r(), f("div", Ia, [
    d(e.$slots, "default")
  ]);
}
const Ba = /* @__PURE__ */ D(Ra, [["render", Ta]]), mc = {
  Root: fa,
  Header: ha,
  Title: ya,
  Footer: Ca,
  Body: Ba
}, Sa = /* @__PURE__ */ p({
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
    return (t, o) => (r(), x(a(St).Root, {
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
  Root: Sa
}, Ma = /* @__PURE__ */ p({
  __name: "DividerRoot",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["divider", {
        [`divider--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Aa = {}, Ea = { class: "divider-content" };
function ka(e, t) {
  return r(), f("div", Ea, [
    d(e.$slots, "default")
  ]);
}
const Da = /* @__PURE__ */ D(Aa, [["render", ka]]), mt = {
  Root: Ma,
  Content: Da
}, pc = {}, Oa = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(wt).Root, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), za = /* @__PURE__ */ p({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(wt).Group, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pa = {
  install(e) {
    e.component("VButton", Oa);
  }
}, vc = {
  install(e) {
    e.component("VButtonGroup", za);
  }
}, La = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue");
    return (l, i) => (r(), x(a(fe).Root, X(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
    }, te(n)), {
      default: g(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Na = /* @__PURE__ */ p({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = Oe(e, ["title"]);
    return (o, n) => (r(), x(a(fe).Item, E(k(t)), {
      default: g(({ isActive: s }) => [
        B(a(fe).Header, null, {
          default: g(() => [
            B(a(fe).Trigger, null, {
              default: g(() => [
                B(a(fe).Title, null, {
                  default: g(() => [
                    d(o.$slots, "title", {}, () => [
                      j(N(e.title), 1)
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
        B(a(fe).Body, null, {
          default: g(() => [
            d(o.$slots, "default", { isActive: s })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), Xa = {
  install(e) {
    e.component("VAccordion", La), e.component("VAccordionItem", Na);
  }
}, Fa = {
  key: 0,
  class: "v-avatar__label"
}, ja = /* @__PURE__ */ p({
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
    return (t, o) => (r(), f("div", {
      class: R(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (r(), f("div", Fa, N(e.label), 1)) : F("", !0)
    ], 2));
  }
}), Ha = {}, Ua = { class: "v-avatar-group" };
function Ga(e, t) {
  return r(), f("div", Ua, [
    d(e.$slots, "default")
  ]);
}
const Ya = /* @__PURE__ */ D(Ha, [["render", Ga]]), qa = {
  install(e) {
    e.component("VAvatar", ja);
  }
}, Ka = {
  install(e) {
    e.component("VAvatarGroup", Ya);
  }
}, Wa = { class: "v-alert__content" }, Za = {
  key: 0,
  class: "v-alert__title"
}, Ja = {
  key: 1,
  class: "v-alert__description"
}, Qa = /* @__PURE__ */ p({
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
    return (l, i) => (r(), f("div", {
      class: R(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      T("div", Wa, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), f(G, { key: 1 }, [
          n.value ? (r(), f("div", Za, [
            d(l.$slots, "title", {}, () => [
              j(N(e.title), 1)
            ])
          ])) : F("", !0),
          s.value ? (r(), f("div", Ja, [
            d(l.$slots, "description", {}, () => [
              j(N(e.description), 1)
            ])
          ])) : F("", !0)
        ], 64))
      ])
    ], 2));
  }
}), ei = {
  install(e) {
    e.component("VAlert", Qa);
  }
}, to = 0, oo = 0, ti = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class Ae {
  #e;
  #o;
  #n;
  #l;
  #s;
  #a;
  #f;
  #i;
  #r;
  #t;
  #u;
  #c;
  constructor(t, o) {
    this.#e = this.#g(o), this.#o = t, this.#n = o.innerWrapper, this.#l = o.container, this.#s = 0, this.#a = 1, this.#f = !1, this.#i = !1, this.#r = !1, this.#u = void 0, this.#c = void 0, this.#t = {
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
    }, this.#_();
  }
  #g(t) {
    return {
      ...ti,
      ...t
    };
  }
  #_() {
    this.#n = this.#e.innerWrapper, this.#l = this.#e.container, this.#h(), this.#p(), this.#y(), this.#f = !0;
  }
  #y() {
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
    t.containerTop = this.#l.offsetTop, t.containerHeight = this.#l.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.#n.offsetHeight, t.sidebarWidth = this.#o.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this.#m();
  }
  #m() {
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
  #$() {
    this.#m();
    const t = this.#t, o = t.viewportTop + t.offsetTop;
    let n;
    o <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, n = 0) : n = this.#a === 0 ? this.#C() : this.#x();
    const s = Math.max(0, t.translateY), l = Math.min(t.containerHeight, s);
    return t.translateY = Math.round(l), t.lastViewportTop = t.viewportTop, n;
  }
  #x() {
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
    return o.outer = Ae.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = Ae.extend({
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
    const o = this.#$(), n = this.#R(o);
    function s(l) {
      const i = W(l) ? "px" : "";
      return `${l}${i}`;
    }
    if (this.#s !== o || t) {
      o === 0 ? this.#o.classList.remove(this.#e.affixClass) : this.#o.classList.add(this.#e.affixClass);
      for (const l in n.outer)
        Object.hasOwn(n.outer, l) && (this.#o.style[l] = s(n.outer[l]));
      for (const l in n.inner)
        Object.hasOwn(n.inner, l) && (this.#n.style[l] = s(n.inner[l]));
    } else
      this.#f && (this.#n.style.left = s(n.inner.left));
    this.#s = o;
  }
  #I(t = 0, o = 0, n = 0) {
    return `translate3d(${t}, ${o}, ${n})`;
  }
  updateSticky(t) {
    this.#r || (this.#r = !0, ((o) => {
      requestAnimationFrame(() => {
        o === "scroll" ? (this.#m(), this.#V(), this.#p()) : (this.#h(), this.#p(!0)), this.#r = !1;
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
function oi(e) {
  const t = nt(), o = nt(), n = c(() => W(e.props?.offsetTop) ? e.props.offsetTop : to), s = c(() => W(e.props?.offsetBottom) ? e.props.offsetBottom : oo);
  function l() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function i() {
    l(), e.root.value && t.value && e.content.value && (o.value = new Ae(e.root.value, {
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
  }), je(() => {
    u();
  }), K(() => e.props.disabled, (m) => {
    m ? u() : i();
  }), {};
}
const ni = /* @__PURE__ */ p({
  __name: "VAffix",
  props: {
    offsetTop: { default: to },
    offsetBottom: { default: oo },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = se("root"), n = se("content");
    return oi({
      props: t,
      root: o,
      content: n
    }), (s, l) => (r(), f("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      T("div", {
        ref_key: "content",
        ref: n,
        class: "v-affix__content"
      }, [
        d(s.$slots, "default")
      ], 512)
    ], 512));
  }
}), si = {
  install(e) {
    e.component("VAffix", ni);
  }
}, li = { class: "v-breadcrumbs" }, ai = /* @__PURE__ */ p({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (r(), f("nav", li));
  }
}), ii = {
  install(e) {
    e.component("VBreadcrumbs", ai);
  }
};
function ri(e) {
  return {
    content: c(() => e.props.dot ? "" : W(e.props.value) && W(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const ui = {
  key: 0,
  class: "v-badge__content"
}, ci = /* @__PURE__ */ p({
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
    const t = e, o = J(), { content: n } = ri({
      props: t
    }), s = c(() => !t.hidden && !!(n.value || t.dot || o?.content));
    return (l, i) => (r(), f("div", {
      class: R(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      s.value ? (r(), f("sup", ui, [
        d(l.$slots, "content", { value: a(n) }, () => [
          j(N(a(n)), 1)
        ])
      ])) : F("", !0)
    ], 2));
  }
}), di = {
  install(e) {
    e.component("VBadge", ci);
  }
}, fi = { class: "v-collapse" }, mi = /* @__PURE__ */ p({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (r(), f("div", fi, [
      d(t.$slots, "default")
    ]));
  }
}), pi = {
  install(e) {
    e.component("VCollapse", mi);
  }
};
function vi(e) {
  const [t, o] = Z();
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
const hi = /* @__PURE__ */ p({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: n, handleOpen: s, handleClose: l } = vi({
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
}), bi = {
  install(e) {
    e.component("VInplace", hi);
  }
}, no = /* @__PURE__ */ p({
  __name: "VModal",
  props: /* @__PURE__ */ I({
    title: {},
    position: {},
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = Oe(e, ["title", "appendToBody"]), n = t, s = J(), l = O(e, "modelValue");
    return (i, u) => (r(), x(a(ne).Root, X({
      modelValue: l.value,
      "onUpdate:modelValue": u[0] || (u[0] = (m) => l.value = m)
    }, o, {
      "append-to-body": e.appendToBody,
      onClose: u[1] || (u[1] = (m) => n("close")),
      onOpen: u[2] || (u[2] = (m) => n("open")),
      onOpened: u[3] || (u[3] = (m) => n("opened", m)),
      onClosed: u[4] || (u[4] = (m) => n("closed", m))
    }), {
      default: g(() => [
        B(a(ne).Dialog, null, {
          default: g(() => [
            B(a(ne).Content, null, {
              default: g(() => [
                B(a(ne).Header, null, {
                  default: g(() => [
                    d(i.$slots, "header", {}, () => [
                      e.title ? (r(), x(a(ne).Title, { key: 0 }, {
                        default: g(() => [
                          j(N(e.title), 1)
                        ]),
                        _: 1
                      })) : F("", !0),
                      B(a(ne).Close, null, {
                        default: g(() => [...u[5] || (u[5] = [
                          j("X", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }),
                B(a(ne).Body, null, {
                  default: g(() => [
                    d(i.$slots, "default")
                  ]),
                  _: 3
                }),
                s?.footer ? (r(), x(a(ne).Footer, { key: 0 }, {
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
    }, 16, ["modelValue", "append-to-body"]));
  }
}), gi = {
  install(e) {
    e.component("VModal", no);
  }
}, Qe = /* @__PURE__ */ p({
  __name: "VOverlay",
  props: {
    mask: { type: Boolean, default: !0 },
    blur: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["v-overlay", {
        "v-overlay--mask": e.mask,
        "v-overlay--blur": e.mask && e.blur
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), _i = {
  install(e) {
    e.component("VOverlay", Qe);
  }
}, yi = { class: "v-drawer__dialog" }, Vi = {
  key: 0,
  class: "v-drawer__header"
}, $i = { class: "v-drawer__body" }, xi = {
  key: 1,
  class: "v-drawer__footer"
}, so = /* @__PURE__ */ p({
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
    const o = e, n = t, s = J(), l = O(e, "modelValue"), i = c(() => !!o.title || !!s?.header), u = c(() => !!s?.footer);
    function m() {
      l.value = !1;
    }
    function v(_) {
      n("opened", _);
    }
    function h(_) {
      n("closed", _);
    }
    return K(l, (_) => {
      n(_ ? "open" : "close");
    }), (_, $) => (r(), x(gt, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      B(De, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: g(() => [
          B(a(Qe), null, {
            default: g(() => [
              Y(T("div", {
                class: R(["v-drawer", {
                  "v-drawer--open": l.value
                }]),
                role: "dialog"
              }, [
                T("div", yi, [
                  i.value ? (r(), f("div", Vi, [
                    d(_.$slots, "header", { close: m }, () => [
                      j(N(e.title), 1)
                    ]),
                    T("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: m
                    }, " x ")
                  ])) : F("", !0),
                  T("div", $i, [
                    d(_.$slots, "default", { close: m })
                  ]),
                  u.value ? (r(), f("div", xi, [
                    d(_.$slots, "footer", { close: m })
                  ])) : F("", !0)
                ])
              ], 2), [
                [re, l.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), Ci = {
  install(e) {
    e.component("VDrawer", so);
  }
};
function hc() {
  return {};
}
const Ri = /* @__PURE__ */ Symbol("VDropdownContextKey"), Ii = { class: "v-dropdown__menu" }, Ti = /* @__PURE__ */ p({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, [l, i, u] = Z();
    function m(h) {
      s("opened", h);
    }
    function v(h) {
      s("opened", h);
    }
    return K(l, (h) => {
      s(h ? "open" : "close");
    }), t({
      setVisible: i,
      isVisible: l
    }), H(Ri, {
      props: n
    }), (h, _) => (r(), f("div", {
      class: R(["v-dropdown", {
        "v-dropdown--open": a(l)
      }])
    }, [
      d(h.$slots, "trigger", {
        isVisible: a(l),
        toggle: a(u),
        setVisible: a(i)
      }),
      B(De, {
        onAfterEnter: m,
        onAfterLeave: v
      }, {
        default: g(() => [
          Y(T("div", Ii, [
            d(h.$slots, "default")
          ], 512), [
            [re, a(l)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Bi = {
  install(e) {
    e.component("VDropdown", Ti);
  }
}, Si = /* @__PURE__ */ p({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = se("image"), o = se("root");
    return (n, s) => (r(), f("figure", {
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
      T("picture", null, [
        T("img", {
          ref_key: "image",
          ref: t,
          class: "v-image__native",
          alt: ""
        }, null, 512)
      ])
    ], 2));
  }
}), wi = {
  install(e) {
    e.component("VImage", Si);
  }
}, Mi = /* @__PURE__ */ p({
  __name: "VLayout",
  setup(e) {
    const t = J();
    return (o, n) => (r(), x(a(ft).Root, null, _t({
      default: g(() => [
        B(a(ft).Body, null, {
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
}, bc = /* @__PURE__ */ p({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Je).Container, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), gc = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Je).Row, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _c = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Je).Col, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ei = { class: "v-pagination" }, ki = /* @__PURE__ */ p({
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
    return (t, o) => (r(), f("div", Ei));
  }
}), Di = {
  install(e) {
    e.component("VPagination", ki);
  }
}, Oi = { class: "v-placeholder" }, zi = /* @__PURE__ */ p({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (r(), f("div", Oi, [
      d(t.$slots, "default")
    ]));
  }
}), Pi = {
  install(e) {
    e.component("VPlaceholder", zi);
  }
}, Li = /* @__PURE__ */ p({
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
    return (s, l) => (r(), x(a(zt).Root, X(o, te(n)), {
      default: g(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ni = {
  install(e) {
    e.component("VScrollbar", Li);
  }
}, Xi = /* @__PURE__ */ p({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), Fi = {
  install(e) {
    e.component("VSpinner", Xi);
  }
}, lo = /* @__PURE__ */ Symbol("VTabsContextKey"), ji = () => U(lo, null);
function Hi() {
  const e = M([]);
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
function Ui(e) {
  const t = Ue(), o = c(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const Gi = { class: "v-tabs" }, Yi = { class: "v-tabs__content" }, qi = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), {
      tabs: l,
      registerTab: i,
      unregisterTab: u
    } = Hi();
    function m(v) {
      s.value = v, n("change", v);
    }
    return H(lo, {
      props: o,
      modelValue: s,
      tabs: l,
      handleChange: m,
      registerTab: i,
      unregisterTab: u
    }), (v, h) => (r(), f("div", Gi, [
      T("div", Yi, [
        d(v.$slots, "default")
      ])
    ]));
  }
}), Ki = /* @__PURE__ */ p({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = J(), n = ji(), { id: s, isActive: l } = Ui({
      context: n,
      props: t
    }), i = bo({
      id: s,
      props: t,
      slots: o
    });
    return n?.registerTab(i), ke(() => {
      n?.unregisterTab(i);
    }), (u, m) => Y((r(), f("div", {
      class: R(["v-tab", {
        "v-tab--active": a(l)
      }])
    }, [
      d(u.$slots, "default", { isActive: a(l) })
    ], 2)), [
      [re, a(l)]
    ]);
  }
}), Wi = {
  install(e) {
    e.component("VTabs", qi), e.component("VTab", Ki);
  }
}, Zi = /* @__PURE__ */ p({
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
    return (s, l) => (r(), x(a(eo).Root, X(o, te(n)), {
      default: g(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ji = /* @__PURE__ */ p({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(eo).Group, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qi = {
  install(e) {
    e.component("VTag", Zi);
  }
}, yc = {
  install(e) {
    e.component("VTagGroup", Ji);
  }
}, er = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(wa).Root, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), tr = {
  install(e) {
    e.component("VText", er);
  }
}, or = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue");
    return (l, i) => (r(), x(a(_e).Root, X({
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
    }, o, te(n)), {
      default: g((u) => [
        d(l.$slots, "default", E(k(u)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), nr = {
  install(e) {
    e.component("VForm", or);
  }
}, sr = /* @__PURE__ */ p({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = Oe(e, ["title"]), n = t, s = J();
    return (l, i) => (r(), x(a(_e).Item, X(o, te(n)), _t({
      default: g((u) => [
        d(l.$slots, "default", E(k(u)))
      ]),
      footer: g((u) => [
        d(l.$slots, "footer", E(k(u)), () => [
          B(a(_e).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: g((u) => [
          d(l.$slots, "header", E(k(u)), () => [
            B(a(_e).ItemTitle, null, {
              default: g(() => [
                j(N(e.title) + " ", 1),
                u.isRequired ? (r(), x(a(_e).ItemRequired, { key: 0 })) : F("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), lr = {
  install(e) {
    e.component("VFormItem", sr);
  }
}, ar = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue");
    return (n, s) => (r(), x(a(Ie).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        B(a(Ie).Indicator),
        B(a(Ie).Title, null, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ir = /* @__PURE__ */ p({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Ie).Group, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), rr = {
  install(e) {
    e.component("VCheckbox", ar);
  }
}, ur = {
  install(e) {
    e.component("VCheckboxGroup", ir);
  }
}, cr = /* @__PURE__ */ p({
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
    const t = e, o = J(), n = O(e, "modelValue");
    return (s, l) => (r(), x(a(q).Root, X(t, {
      modelValue: n.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i)
    }), {
      default: g((i) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: g(() => [
            d(s.$slots, "before", E(k(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        B(a(q).Control, null, {
          default: g(() => [
            i.isTextarea ? (r(), x(a(q).Textarea, { key: 0 })) : (r(), x(a(q).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (r(), x(a(q).After, { key: 1 }, {
          default: g(() => [
            d(s.$slots, "after", E(k(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), dr = {
  install(e) {
    e.component("VInput", cr);
  }
}, fr = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue");
    return (n, s) => (r(), x(a(dt).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        (r(!0), f(G, null, me(e.length, (l, i) => (r(), x(a(dt).Pin, {
          key: `pin-${i}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), mr = {
  install(e) {
    e.component("VInputCode", fr);
  }
}, pr = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue");
    return (n, s) => (r(), x(a(Re).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        B(a(Re).Button, {
          action: a(Me).DECREMENT
        }, null, 8, ["action"]),
        B(a(Re).Input),
        B(a(Re).Button, {
          action: a(Me).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), vr = {
  install(e) {
    e.component("VInputNumber", pr);
  }
}, hr = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue");
    return (n, s) => (r(), x(a(tl).Root, X({
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }, t), null, 16, ["modelValue"]));
  }
}), br = {
  install(e) {
    e.component("VInputPassword", hr);
  }
}, gr = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue");
    return (n, s) => (r(), x(a(Te).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        B(a(Te).Indicator),
        B(a(Te).Title, null, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), _r = /* @__PURE__ */ p({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Te).Group, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yr = {
  install(e) {
    e.component("VRadio", gr);
  }
}, Vr = {
  install(e) {
    e.component("VRadioGroup", _r);
  }
}, $r = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue");
    return (l, i) => (r(), x(a(ye).Root, X(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u),
      onChange: i[1] || (i[1] = (u) => n("change", u)),
      onClose: i[2] || (i[2] = (u) => n("close")),
      onClear: i[3] || (i[3] = (u) => n("clear"))
    }), {
      default: g(() => [
        B(a(ye).Value, null, {
          default: g(() => [
            d(l.$slots, "value")
          ]),
          _: 3
        }),
        B(a(ye).Dropdown, null, {
          default: g(() => [
            B(a(ye).Scrollbar, null, {
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
}), xr = /* @__PURE__ */ p({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(ye).Option, E(k(t)), {
      default: g((s) => [
        d(o.$slots, "default", E(k(s)))
      ]),
      _: 3
    }, 16));
  }
}), Cr = {
  install(e) {
    e.component("VSelect", $r), e.component("VOption", xr);
  }
}, Rr = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue");
    return (n, s) => (r(), x(a(Fe).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        B(a(Fe).Indicator),
        B(a(Fe).Title, null, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Ir = {
  install(e) {
    e.component("VSwitch", Rr);
  }
}, Tr = /* @__PURE__ */ p({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Tl).Root, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Br = {
  install(e) {
    e.component("VConfigProvider", Tr);
  }
}, Sr = { class: "v-progress__value" }, wr = {
  key: 0,
  class: "v-progress__label"
}, Mr = /* @__PURE__ */ p({
  __name: "VProgress",
  props: {
    indeterminate: { type: Boolean },
    showValue: { type: Boolean, default: !0 },
    value: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", {
      class: R(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      T("div", Sr, [
        e.showValue ? (r(), f("div", wr, [
          d(t.$slots, "default")
        ])) : F("", !0)
      ])
    ], 2));
  }
}), Ar = {
  install(e) {
    e.component("VProgress", Mr);
  }
}, Er = /* @__PURE__ */ p({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = J();
    return (n, s) => (r(), x(a(mt).Root, E(k(t)), {
      default: g(() => [
        o?.default ? (r(), x(a(mt).Content, { key: 0 }, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })) : F("", !0)
      ]),
      _: 3
    }, 16));
  }
}), kr = {
  install(e) {
    e.component("VDivider", Er);
  }
}, Dr = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Ze).Root, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Or = /* @__PURE__ */ p({
  __name: "VFlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Ze).Item, E(k(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zr = {
  install(e) {
    e.component("VFlex", Dr);
  }
}, Vc = {
  install(e) {
    e.component("VFlexItem", Or);
  }
};
function Pr(e) {
  const t = M([]), o = M({
    prop: null,
    order: null
  }), n = c(() => e.columns.some((v) => !!v.title));
  function s() {
    t.value = [];
  }
  function l() {
    return t.value;
  }
  function i() {
    o.value = {
      prop: null,
      order: null
    };
  }
  function u(v, h) {
    o.value = {
      prop: v,
      order: h
    };
  }
  function m() {
    t.value.length === e.data.length ? s() : t.value = [...e.data];
  }
  return {
    isHeaderVisible: n,
    clearSelection: s,
    getSelectionRows: l,
    clearSort: i,
    sort: u,
    toggleAllSelection: m
  };
}
const Lr = ze(() => Promise.resolve().then(() => xu)), Nr = ze(() => Promise.resolve().then(() => Bu)), Xr = ze(() => Promise.resolve().then(() => ku)), Fr = ze(() => Promise.resolve().then(() => Lu)), jr = /* @__PURE__ */ Symbol("VTableContextKey"), Hr = { class: "v-table" }, Ur = {
  key: 0,
  class: "v-table__native"
}, Gr = { key: 0 }, Yr = /* @__PURE__ */ p({
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
      isHeaderVisible: n,
      clearSelection: s,
      getSelectionRows: l,
      clearSort: i,
      sort: u,
      toggleAllSelection: m
    } = Pr(o);
    return H(jr, {
      props: o
    }), t({
      clearSelection: s,
      getSelectionRows: l,
      clearSort: i,
      sort: u,
      toggleAllSelection: m
    }), (v, h) => (r(), f("div", Hr, [
      e.data.length ? (r(), f("table", Ur, [
        a(n) ? (r(), f("thead", Gr, [
          T("tr", null, [
            (r(!0), f(G, null, me(e.columns, (_) => (r(), x(a(Fr), {
              key: _.prop
            }, {
              default: g(() => [
                j(N(_.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : F("", !0),
        T("tbody", null, [
          (r(!0), f(G, null, me(e.data, (_, $) => (r(), x(a(Lr), {
            key: `row-${$}`
          }, {
            default: g(() => [
              (r(!0), f(G, null, me(e.columns, (V) => (r(), x(a(Xr), {
                key: `row-${$}-${String(V.prop)}`
              }, {
                default: g(() => [
                  d(v.$slots, String(V.prop), { row: _ }, () => [
                    j(N(_[V.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (r(), x(a(Nr), { key: 1 }, {
        default: g(() => [
          d(v.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), qr = {
  install(e) {
    e.component("VTable", Yr);
  }
}, Kr = /* @__PURE__ */ p({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (r(), x(a(q).Group, null, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Wr = /* @__PURE__ */ p({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (r(), x(a(q).GroupAddon, null, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Zr = {
  install(e) {
    e.component("VInputGroup", Kr), e.component("VInputGroupAddon", Wr);
  }
}, Be = 1e3, Se = 60 * Be, we = 60 * Se, pt = 24 * we, ao = Date.now(), io = 1e3;
function Jr(e) {
  const [t, o] = Z(), [n, s] = Z(), l = M(0), i = M(0), u = M(0), m = c(() => e.props.now || ao), v = c(() => e.props.interval || io), h = c(() => 0), _ = c(() => 0), $ = c(() => Math.floor(l.value / pt)), V = c(() => Math.floor(l.value % pt / we)), y = c(() => Math.floor(l.value % we / Se)), C = c(() => Math.floor(l.value % Se / Be)), S = c(() => Math.floor(l.value % Be)), w = c(() => Math.floor(l.value / we)), z = c(() => Math.floor(l.value / Se)), P = c(() => Math.floor(l.value / Be));
  function A() {
    t.value || (o(!0), e.props?.autoStart || (l.value = e.props.start, i.value = m.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && ae());
  }
  function L() {
    cancelAnimationFrame(u.value), u.value = 0;
  }
  function oe() {
    t.value && (de(), l.value > 0 && e.onProgress?.({
      days: $.value,
      hours: V.value,
      minutes: y.value,
      seconds: C.value,
      milliseconds: S.value,
      totalDays: $.value,
      totalHours: w.value,
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
      let et = function(he) {
        Xe || (Xe = he), Ce || (Ce = he);
        const tt = he - Xe;
        tt >= ee || tt + (he - Ce) / 2 >= ee ? oe() : u.value = requestAnimationFrame(et), Ce = he;
      }, Xe, Ce;
      u.value = requestAnimationFrame(et);
    } else
      ce();
  }
  function $e() {
    t.value && (L(), o(!1), e.onAbort?.());
  }
  function ce() {
    t.value && (L(), l.value = 0, o(!1), e.onEnd?.());
  }
  function de() {
    t.value && (l.value = Math.max(0, i.value - m.value));
  }
  function Ne() {
    L(), l.value = e.props.start, i.value = m.value + e.props.start, o(!1), A();
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
  }), je(() => {
    document.removeEventListener("visibilitychange", xe), L();
  }), K(() => e.props, (ee) => {
    l.value = ee.start, i.value = m.value + ee.start, ee.autoStart && A();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: h,
    months: _,
    days: $,
    hours: V,
    minutes: y,
    seconds: C,
    milliseconds: S,
    start: A,
    abort: $e,
    end: ce,
    restart: Ne
  };
}
const Qr = { class: "v-countdown" }, eu = /* @__PURE__ */ p({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => io },
    start: {},
    now: { default: () => ao }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, {
      years: l,
      months: i,
      days: u,
      hours: m,
      minutes: v,
      seconds: h,
      milliseconds: _,
      start: $,
      abort: V,
      end: y,
      restart: C
    } = Jr({
      props: n,
      onAbort: () => s("abort"),
      onEnd: () => s("end"),
      onProgress: (S) => s("progress", S),
      onStart: () => s("start")
    });
    return t({
      start: $,
      abort: V,
      end: y,
      restart: C
    }), (S, w) => (r(), f("div", Qr, [
      d(S.$slots, "default", {
        years: a(l),
        months: a(i),
        days: a(u),
        hours: a(m),
        minutes: a(v),
        seconds: a(h),
        milliseconds: a(_)
      })
    ]));
  }
}), tu = {
  install(e) {
    e.component("VCountdown", eu);
  }
}, ou = { class: "v-calendar" }, nu = /* @__PURE__ */ p({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", ou));
  }
}), su = {
  install(e) {
    e.component("VCalendar", nu);
  }
}, $c = {
  install(e) {
    e.use(Xa), e.use(si), e.use(qa), e.use(Ka), e.use(di), e.use(ii), e.use(Pa), e.use(pi), e.use(Br), e.use(gi), e.use(bi), e.use(Ci), e.use(Bi), e.use(wi), e.use(Di), e.use(Pi), e.use(Ni), e.use(Fi), e.use(Wi), e.use(Qi), e.use(tr), e.use(Ai), e.use(nr), e.use(lr), e.use(dr), e.use(rr), e.use(ur), e.use(br), e.use(vr), e.use(mr), e.use(yr), e.use(Vr), e.use(Ir), e.use(Cr), e.use(_i), e.use(ei), e.use(Ar), e.use(kr), e.use(zr), e.use(qr), e.use(Zr), e.use(tu), e.use(su);
  }
}, lu = { class: "v-confirm__header" }, au = { class: "v-confirm__title" }, iu = { class: "v-confirm__body" }, ru = {
  key: 0,
  class: "v-confirm__text"
}, uu = ["innerHTML"], cu = { class: "v-confirm__footer" }, du = /* @__PURE__ */ p({
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
    return (n, s) => (r(), x(a(Qe), null, {
      default: g(() => [
        T("div", {
          class: R(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          T("div", lu, [
            T("div", au, N(e.title), 1),
            T("button", {
              type: "button",
              onClick: s[0] || (s[0] = (l) => o("close"))
            }, " X ")
          ]),
          T("div", iu, [
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, uu)) : (r(), f("div", ru, N(e.message), 1))
          ]),
          T("div", cu, [
            T("button", {
              type: "button",
              onClick: s[1] || (s[1] = (l) => o("success"))
            }, N(e.confirmText), 1),
            T("button", {
              type: "button",
              onClick: s[2] || (s[2] = (l) => o("cancel"))
            }, N(e.cancelText), 1)
          ])
        ], 2)
      ]),
      _: 1
    }));
  }
});
class xc {
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
      }, l = ie(du, {
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
      Ve(l, this.#e);
    });
  }
  static close() {
    this.#e && Ve(null, this.#e);
  }
}
const Cc = {
  install() {
  }
}, ro = 1500;
function fu(e) {
  const t = c(() => W(e.props.duration) ? e.props.duration : ro), [o, n] = Z(!1);
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
const mu = { class: "v-toast__header" }, pu = { class: "v-toast__title" }, vu = { class: "v-toast__body" }, hu = {
  key: 0,
  class: "v-toast__text"
}, bu = ["innerHTML"], gu = /* @__PURE__ */ p({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: ro },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: u } = fu({
      props: o
    });
    return (m, v) => (r(), x(De, {
      name: "fade-in-up",
      onAfterLeave: v[3] || (v[3] = (h) => n("close"))
    }, {
      default: g(() => [
        Y(T("div", {
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
          T("div", mu, [
            T("div", pu, N(e.title), 1),
            e.clearable ? (r(), f("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (h) => a(l)(!1))
            }, " X ")) : F("", !0)
          ]),
          T("div", vu, [
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, bu)) : (r(), f("div", hu, N(e.message), 1))
          ])
        ], 34), [
          [re, a(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class Rc {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = ie(gu, {
      ...t,
      appContext: o
    });
    Ve(n, this.#e);
  }
}
class Ic {
  static open(t, o) {
    const n = ie(no, {
      ...t,
      appContext: o
    });
    Ve(n, document.body);
  }
}
class Tc {
  static open(t, o) {
    const n = ie(so, {
      ...t,
      appContext: o
    });
    Ve(n, document.body);
  }
}
const Bc = {
  name: "ru",
  vau: {}
}, Sc = {
  name: "en",
  vau: {}
}, _u = {}, yu = { class: "v-table-row" };
function Vu(e, t) {
  return r(), f("tr", yu, [
    d(e.$slots, "default")
  ]);
}
const $u = /* @__PURE__ */ D(_u, [["render", Vu]]), xu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $u
}, Symbol.toStringTag, { value: "Module" })), Cu = {}, Ru = { class: "v-table-empty" };
function Iu(e, t) {
  return r(), f("div", Ru, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" Данных нет ", -1))
    ])
  ]);
}
const Tu = /* @__PURE__ */ D(Cu, [["render", Iu]]), Bu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tu
}, Symbol.toStringTag, { value: "Module" })), Su = {}, wu = { class: "v-table-body-cell" }, Mu = { class: "v-table-body-cell__content" };
function Au(e, t) {
  return r(), f("td", wu, [
    T("div", Mu, [
      d(e.$slots, "default")
    ])
  ]);
}
const Eu = /* @__PURE__ */ D(Su, [["render", Au]]), ku = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eu
}, Symbol.toStringTag, { value: "Module" })), Du = {}, Ou = { class: "v-table-header-cell" };
function zu(e, t) {
  return r(), f("th", Ou, [
    d(e.$slots, "default")
  ]);
}
const Pu = /* @__PURE__ */ D(Du, [["render", zu]]), Lu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pu
}, Symbol.toStringTag, { value: "Module" }));
export {
  fe as Accordion,
  Xa as AccordionPlugin,
  si as AffixPlugin,
  ei as AlertPlugin,
  Ka as AvatarGroupPlugin,
  qa as AvatarPlugin,
  di as BadgePlugin,
  ii as BreadcrumbsPlugin,
  wt as Button,
  vc as ButtonGroupPlugin,
  Pa as ButtonPlugin,
  su as CalendarPlugin,
  Ie as Checkbox,
  ur as CheckboxGroupPlugin,
  rr as CheckboxPlugin,
  uc as ClickOutsidePlugin,
  pi as CollapsePlugin,
  Tl as ConfigProvider,
  Br as ConfigProviderPlugin,
  Jt as ConfigProviderRootContextKey,
  Cc as ConfirmPlugin,
  xc as ConfirmService,
  tu as CountdownPlugin,
  Zu as Direction,
  mt as Divider,
  kr as DividerPlugin,
  Ci as DrawerPlugin,
  Tc as DrawerService,
  Bi as DropdownPlugin,
  Ze as Flex,
  Qu as FlexAlign,
  Vc as FlexItemPlugin,
  ec as FlexJustify,
  zr as FlexPlugin,
  _e as Form,
  lr as FormItemPlugin,
  nr as FormPlugin,
  Je as Grid,
  Me as INPUT_NUMBER_ACTIONS,
  Fs as INPUT_NUMBER_MAX,
  Xs as INPUT_NUMBER_MIN,
  jt as INPUT_NUMBER_STEP,
  We as INPUT_NUMBER_VALUE_DEFAULT,
  js as INPUT_NUMBER_WHEEL_DELAY,
  wi as ImagePlugin,
  bi as InplacePlugin,
  q as Input,
  dt as InputCode,
  mr as InputCodePlugin,
  Zr as InputGroupPlugin,
  Ko as InputModes,
  ge as InputNativeTypes,
  Re as InputNumber,
  vr as InputNumberPlugin,
  tl as InputPassword,
  br as InputPasswordPlugin,
  dr as InputPlugin,
  fc as InputRange,
  dc as InputTags,
  Mt as InputTypes,
  at as IntersectionPresets,
  ft as Layout,
  Ai as LayoutPlugin,
  rc as LoadingPlugin,
  ne as Modal,
  gi as ModalPlugin,
  Ic as ModalService,
  _i as OverlayPlugin,
  Di as PaginationPlugin,
  Pi as PlaceholderPlugin,
  Ju as Position,
  St as Primitive,
  Ar as ProgressPlugin,
  Te as Radio,
  Vr as RadioGroupPlugin,
  yr as RadioPlugin,
  zt as Scrollbar,
  Ni as ScrollbarPlugin,
  mc as Section,
  ye as Select,
  Cr as SelectPlugin,
  Wu as Sizes,
  Fi as SpinnerPlugin,
  Fe as Switch,
  Ir as SwitchPlugin,
  qr as TablePlugin,
  Wi as TabsPlugin,
  eo as Tag,
  yc as TagGroupPlugin,
  Qi as TagPlugin,
  wa as Text,
  tr as TextPlugin,
  Ku as Themes,
  Rc as ToastService,
  cc as TooltipPlugin,
  La as VAccordion,
  Na as VAccordionItem,
  ni as VAffix,
  Qa as VAlert,
  ja as VAvatar,
  Ya as VAvatarGroup,
  ci as VBadge,
  ai as VBreadcrumbs,
  Oa as VButton,
  za as VButtonGroup,
  nu as VCalendar,
  ar as VCheckbox,
  ir as VCheckboxGroup,
  _c as VCol,
  mi as VCollapse,
  Tr as VConfigProvider,
  bc as VContainer,
  eu as VCountdown,
  Er as VDivider,
  so as VDrawer,
  Ti as VDropdown,
  Dr as VFlex,
  Or as VFlexItem,
  or as VForm,
  sr as VFormItem,
  Si as VImage,
  hi as VInplace,
  cr as VInput,
  fr as VInputCode,
  Kr as VInputGroup,
  Wr as VInputGroupAddon,
  pr as VInputNumber,
  hr as VInputPassword,
  Mi as VLayout,
  no as VModal,
  xr as VOption,
  Qe as VOverlay,
  ki as VPagination,
  zi as VPlaceholder,
  Mr as VProgress,
  gr as VRadio,
  _r as VRadioGroup,
  gc as VRow,
  Li as VScrollbar,
  $r as VSelect,
  Xi as VSpinner,
  Rr as VSwitch,
  Ki as VTab,
  Yr as VTable,
  qi as VTabs,
  Zi as VTag,
  Ji as VTagGroup,
  er as VText,
  $c as VauUI,
  ic as VisiblePlugin,
  Gu as booleanToBooleanish,
  be as clone,
  qe as debounce,
  Yu as defineFormRules,
  ju as delay,
  Sc as en,
  lt as getProp,
  Po as isBoolean,
  Fu as isEmpty,
  Lo as isFunction,
  Pe as isNull,
  W as isNumber,
  Ge as isObject,
  ve as isString,
  le as isUndefined,
  Uu as omit,
  Hu as pick,
  Bt as renderSlotFragments,
  Bc as ru,
  pc as ruRU,
  Ye as throttle,
  _o as useAccordionItem,
  go as useAccordionRoot,
  yo as useAccordionTrigger,
  nc as useAnimatedNumber,
  oc as useClipboard,
  Cl as useConfigProviderRootContext,
  hc as useDrawer,
  ac as useEmitProxy,
  Qo as useFormItem,
  Wo as useFormRoot,
  qo as useIntersectionObserver,
  tc as useLoadImage,
  qu as usePlural,
  lc as useScrollTo,
  Z as useToggle,
  sc as useWindowScroll,
  Et as vClickOutside,
  xn as vLoading,
  Cn as vTooltip,
  $n as vVisible
};
