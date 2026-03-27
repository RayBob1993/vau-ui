import { computed as c, toValue as g, inject as U, defineComponent as p, mergeModels as I, useModel as O, provide as H, createElementBlock as f, openBlock as r, normalizeClass as R, renderSlot as d, unref as a, withDirectives as Y, createElementVNode as T, vShow as re, markRaw as uo, Fragment as G, Comment as co, mergeProps as X, cloneVNode as fo, h as ie, createBlock as x, withCtx as b, ref as M, watch as K, onBeforeUnmount as He, onMounted as ue, onScopeDispose as Ue, isRef as ke, nextTick as mo, useId as Ge, onUnmounted as Ee, withModifiers as ht, useSlots as J, useTemplateRef as se, createCommentVNode as F, normalizeProps as E, guardReactiveProps as D, createTextVNode as j, renderList as me, toDisplayString as N, toHandlers as te, vModelDynamic as po, vModelText as bt, vModelCheckbox as gt, vModelRadio as vo, createVNode as B, withKeys as nt, useAttrs as ho, Teleport as _t, Transition as De, createPropsRestProxy as Oe, shallowRef as st, createSlots as yt, reactive as bo, defineAsyncComponent as ze, render as Ve } from "vue";
import { z as lt } from "zod";
function go(e) {
  const t = c(() => g(e.props));
  function o(n) {
    const s = g(e.modelValue);
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
  const t = c(() => g(e.props)), o = c(() => g(e.accordionRootContext?.modelValue)), n = c(() => !!g(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: c(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function yo(e) {
  const t = c(() => g(e.accordionItemContext?.props)), o = c(() => !!t.value?.disabled);
  function n() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: o,
    handleToggle: n
  };
}
const Vt = /* @__PURE__ */ Symbol("AccordionRootContextKey"), $t = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function xt() {
  return U(Vt, null);
}
function Ct() {
  return U($t, null);
}
function Vo() {
  const e = xt(), t = Ct();
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
    return H(Vt, {
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
    const t = e, o = xt(), { isActive: n } = _o({
      accordionRootContext: o,
      props: () => t
    });
    return H($t, {
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
}), A = (e, t) => {
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
const To = /* @__PURE__ */ A(Co, [["render", Io]]), Bo = {
  class: "accordion-body",
  role: "region"
}, So = { class: "accordion-body__content" }, wo = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = Ct(), o = c(() => !!g(t?.isActive));
    return (n, s) => Y((r(), f("div", Bo, [
      T("div", So, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [re, o.value]
    ]);
  }
}), Mo = {}, Ao = { class: "accordion-title" };
function ko(e, t) {
  return r(), f("div", Ao, [
    d(e.$slots, "default")
  ]);
}
const Eo = /* @__PURE__ */ A(Mo, [["render", ko]]), Do = ["disabled"], Oo = /* @__PURE__ */ p({
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
  Title: Eo,
  Trigger: Oo
};
function zo(e) {
  const t = c(() => g(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const Rt = /* @__PURE__ */ Symbol("FormRootContextKey"), It = /* @__PURE__ */ Symbol("FormItemContextKey");
function Tt() {
  return U(Rt, null);
}
function Bt() {
  return U(It, null);
}
function Q() {
  const e = Tt(), t = Bt(), o = c(() => !!t?.validationStatus.value.isSuccess), n = c(() => !!t?.validationStatus.value.isError);
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
function Ye(e) {
  return !Pe(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function le(e) {
  return typeof e > "u";
}
function Gu(e) {
  return Pe(e) || le(e) ? !0 : ve(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ye(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Lo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function W(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function No(e) {
  return !Pe(e) && !le(e) && Ye(e) && !Array.isArray(e);
}
function at(e, t) {
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
  if (Ye(e)) {
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
function Yu(e) {
  return new Promise((t) => setTimeout(t, e));
}
function qu(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function Ku(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function Wu(e) {
  return e ? "true" : "false";
}
function qe(e, t, o = {}) {
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
function Ke(e, t, o = {}) {
  const { atBegin: n = !1 } = o;
  return qe(e, t, {
    debounceMode: n
  });
}
function Zu(e) {
  return uo(e);
}
function St(e) {
  return e ? e.flatMap((t) => t.type === G ? St(t.children) : [t]) : [];
}
const Xo = p({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      if (!o.default)
        return null;
      const n = St(o.default()), s = n.findIndex((m) => m.type !== co);
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
}), wt = {
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
    return (l, i) => (r(), x(a(wt).Root, {
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
      default: b(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class", "disabled", "type"]));
  }
}), Uo = {}, Go = { class: "button-content" };
function Yo(e, t) {
  return r(), f("span", Go, [
    d(e.$slots, "default")
  ]);
}
const qo = /* @__PURE__ */ A(Uo, [["render", Yo]]), Ko = /* @__PURE__ */ p({
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
}), je = {
  Root: Ho,
  Content: qo,
  Group: Ko
};
function Wo() {
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
function Zo(e) {
  const t = c(() => g(e.formItems)), o = c(() => t.value.filter((l) => l.isValidatable));
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
function Ju(e) {
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
function Jo(e, t, o) {
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
  return He(() => {
    l();
  }), {
    stop: l
  };
}
const Mt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), Qo = Object.freeze({
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
}), Qu = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), ec = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), tc = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), oc = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), nc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), sc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), it = Object.freeze({
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
function lc(e, t, o = {}) {
  const {
    rootMargin: n = it.LAZY_IMAGE.rootMargin,
    threshold: s = it.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: u } = Jo(e, w, {
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
function ac() {
  return {};
}
function ic() {
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
function rc() {
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
  }), Ue(() => {
    window.removeEventListener("scroll", o);
  }), {
    x: e,
    y: t,
    setScroll: n
  };
}
function uc(e, t) {
  (ve(e) ? document.querySelector(e) : ke(e) ? a(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function cc(e, t) {
  return {
    listeners: t.reduce((n, s) => {
      const l = s, i = String(l);
      return n[l] = ((...u) => e(i, ...u)), n;
    }, {})
  };
}
function en(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = Wo(), { validate: s, clearValidate: l, validatableFormItems: i } = Zo({
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
  const $ = Ke(async () => {
    const y = await s(!0);
    m(y);
  }, 400);
  async function V(y = !1) {
    const C = await s(y);
    return m(C), C;
  }
  return K(() => g(e.modelValue), () => {
    $();
  }, {
    deep: !0
  }), ue(async () => {
    await mo(), await V(!0);
  }), Ue(() => {
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
function tn() {
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
function on(e) {
  const t = c(() => g(e.data)), o = c(() => g(e.schema)), n = M({
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
function nn(e) {
  const t = Ge(), { field: o, registerField: n, unregisterField: s } = tn(), l = c(() => g(e.props)), i = c(() => l.value.name), u = c(() => e.formRootContext?.modelValue.value), m = c(() => e.formRootContext?.props?.rules), v = c(() => i.value && u.value && at(u.value, i.value)), h = c(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), _ = c(() => {
    if (!i.value || !m.value)
      return null;
    const L = at(m.value, i.value);
    return L instanceof lt.ZodType ? L : null;
  }), $ = c(() => !!_.value), V = c(() => _.value ? !_.value.safeParse(void 0).success : !1), {
    validationStatus: y,
    validationErrors: C,
    clearValidateErrors: S,
    validate: w
  } = on({
    data: () => i.value ? {
      [i.value]: v.value
    } : null,
    schema: () => !i.value || !_.value ? null : lt.object({
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
  const k = Ke(() => w(), 300);
  return Ee(() => {
    k.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), K(z, (L) => {
    e.formRootContext?.registerFormItem(L);
  }, {
    deep: !0,
    immediate: !0
  }), K(v, () => k()), K(() => y.value.isSuccess, (L) => {
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
const sn = /* @__PURE__ */ p({
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
    } = en({
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
    return H(Rt, {
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
      onSubmit: ht($, ["prevent"])
    }, [
      d(V.$slots, "default", { isValid: a(i) })
    ], 34));
  }
}), ln = {
  key: 0,
  class: "form-item__header"
}, an = { class: "form-item__body" }, rn = {
  key: 1,
  class: "form-item__footer"
}, un = /* @__PURE__ */ p({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = J(), i = Tt(), {
      validationErrors: u,
      validationStatus: m,
      isDisabled: v,
      isRequired: h,
      registerField: _,
      unregisterField: $,
      reset: V,
      validate: y,
      clearValidateErrors: C
    } = nn({
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
    return H(It, {
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
      l?.header ? (r(), f("div", ln, [
        d(z.$slots, "header", E(D(w.value)))
      ])) : F("", !0),
      T("div", an, [
        d(z.$slots, "default", E(D(w.value)))
      ]),
      l.footer ? (r(), f("div", rn, [
        d(z.$slots, "footer", E(D(w.value)))
      ])) : F("", !0)
    ], 2));
  }
}), cn = {}, dn = { class: "form-item-title" };
function fn(e, t) {
  return r(), f("div", dn, [
    d(e.$slots, "default")
  ]);
}
const mn = /* @__PURE__ */ A(cn, [["render", fn]]), pn = {}, vn = { class: "form-item-required" };
function hn(e, t) {
  return r(), f("span", vn, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" * ", -1))
    ])
  ]);
}
const bn = /* @__PURE__ */ A(pn, [["render", hn]]), gn = { class: "form-item-errors" }, _n = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = Bt(), o = c(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), f("div", gn, [
      (r(!0), f(G, null, me(o.value, (l, i) => (r(), f("div", {
        key: `error-${i}`,
        class: "form-item-errors__item"
      }, N(l.message), 1))), 128))
    ]));
  }
}), _e = {
  Root: sn,
  Item: un,
  ItemTitle: mn,
  ItemRequired: bn,
  ItemErrors: _n
};
function yn() {
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
function Vn(e) {
  const t = c(() => g(e.multiple)), o = c(() => g(e.modelValue)), n = c(() => g(e.options)), s = c(() => n.value.find((i) => i.props.value === o.value)), l = c(() => {
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
function $n(e) {
  const t = c(() => g(e.modelValue)), o = c(() => g(e.props)), { options: n, registerOption: s, unregisterOption: l } = yn(), { activeOption: i, activeOptions: u } = Vn({
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
  }), Ee(() => {
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
function xn(e) {
  const t = Ge(), o = c(() => g(e.selectRootContext?.modelValue)), n = c(() => g(e.props)), s = c(() => !!g(e.selectRootContext?.props)?.multiple), l = c(() => le(o.value) ? !1 : pe(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), i = c(() => !!(g(e.selectRootContext?.isDisabled) || n.value?.disabled)), u = c(() => ({
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
  }), Ee(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: l,
    isDisabled: i,
    handleChange: m
  };
}
function Cn(e) {
  const t = c(() => g(e.selectRootContext?.props)), o = c(() => g(e.selectRootContext?.activeOption)), n = c(() => o.value?.props?.title ?? o.value?.props.value), s = c(() => g(e.selectRootContext?.activeOptions) ?? []), l = c(() => !!g(e.selectRootContext?.hasValue)), i = c(() => le(e.selectRootContext?.modelValue) ? !1 : pe(g(e.selectRootContext.modelValue), !!t.value?.multiple)), u = c(() => t.value?.placeholder);
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
function Rn(e) {
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
const In = {
  mounted() {
  },
  unmounted() {
  }
}, dc = {
  install(e) {
    e.directive("visible", In);
  }
}, Tn = {
  mounted() {
  },
  unmounted() {
  }
}, fc = {
  install(e) {
    e.directive("loading", Tn);
  }
}, kt = {
  mounted(e, t) {
    e.clickOutside = (o) => {
      o.target instanceof Element && (e === o.target || e.contains(o.target) || t.value(o, e));
    }, window.addEventListener("click", e.clickOutside);
  },
  unmounted(e) {
    window.removeEventListener("click", e.clickOutside);
  }
}, mc = {
  install(e) {
    e.directive("click-outside", kt);
  }
}, Bn = {
  mounted() {
  },
  unmounted() {
  }
}, pc = {
  install(e) {
    e.directive("tooltip", Bn);
  }
}, Sn = ["aria-disabled"], wn = /* @__PURE__ */ p({
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
    } = $n({
      formRootContext: l,
      formItemContext: i,
      modelValue: () => s.value,
      props: () => o,
      onChangeModel: (k) => {
        s.value = k;
      },
      onChange: (k) => {
        n("change", k);
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
    }), (k, L) => Y((r(), f("div", {
      class: R(["select", {
        "select--disabled": a(V),
        "select--open": a($),
        "select--filled": a(_),
        "select--invalid": a(m),
        "select--valid": a(u)
      }]),
      "aria-disabled": a(V)
    }, [
      d(k.$slots, "default")
    ], 10, Sn)), [
      [a(kt), a(C)]
    ]);
  }
}), Mn = /* @__PURE__ */ p({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Le(), { isActive: n, isDisabled: s, handleChange: l } = xn({
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
}), An = /* @__PURE__ */ p({
  __name: "SelectTrigger",
  setup(e) {
    const t = Le(), { open: o, close: n, toggle: s } = Rn({
      selectRootContext: t
    });
    return (l, i) => d(l.$slots, "default", {
      open: a(o),
      close: a(n),
      toggle: a(s)
    });
  }
}), kn = { class: "select-dropdown" }, En = /* @__PURE__ */ p({
  __name: "SelectDropdown",
  setup(e) {
    const t = Le(), o = c(() => !!g(t?.isOpen));
    return (n, s) => Y((r(), f("div", kn, [
      d(n.$slots, "default")
    ], 512)), [
      [re, o.value]
    ]);
  }
}), Dn = /* @__PURE__ */ p({
  __name: "SelectValue",
  setup(e) {
    const t = Le(), { activeOptionValue: o, activeOptions: n, hasValue: s, isMultiple: l, placeholder: i, toggle: u } = Cn({
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
}), Et = 300, Dt = 1, Ot = 10;
function rt(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function ut(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function ct(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function dt(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function On(e) {
  const t = c(() => g(e.props)), o = c(() => t.value?.infiniteScrollOffset ?? Ot), n = c(() => t.value?.draggableMultiplier ?? Dt), s = c(() => W(t.value?.debounceDelay) ? t.value.debounceDelay : Et), [l, i] = Z(), [u, m] = Z(), v = M(0), h = M(0), _ = M(0), $ = M(0);
  function V() {
    m(!1), i(!1);
  }
  const y = Ke((P) => {
    e.onScroll?.(P), t.value?.draggable || (_.value = rt(e.scrollbar.value, !!t.value?.vertical), $.value = ut(e.scrollbar.value, !!t.value?.horizontal));
    const k = e.scrollbar.value, L = e.content.value, oe = k ? k.clientHeight : 0, ae = k ? k.clientWidth : 0, $e = L ? L.scrollWidth : 0, ce = L ? L.scrollHeight : 0, de = _.value + oe, Ne = $.value + ae, xe = !!(t.value?.vertical && ce - de <= o.value), ee = !!(t.value?.horizontal && $e - Ne <= o.value);
    xe && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), C = qe((P) => {
    if (e.onMousemove?.(P), !t.value?.draggable || !u.value)
      return;
    P.preventDefault(), P.stopPropagation();
    const k = e.scrollbar.value;
    if (!k)
      return;
    const L = !!t.value?.vertical, oe = !!t.value?.horizontal, ae = P.pageY - ct(k, L), ce = (P.pageX - dt(k, oe) - v.value) * n.value, de = (ae - h.value) * n.value;
    oe && (k.scrollLeft = $.value - ce), L && (k.scrollTop = _.value - de);
  }, s.value);
  function S(P) {
    if (e.onMousedown?.(P), !t.value?.draggable)
      return;
    m(!0), i(!0);
    const k = e.scrollbar.value;
    if (k) {
      const L = !!t.value?.vertical, oe = !!t.value?.horizontal;
      h.value = P.pageY - ct(k, L), v.value = P.pageX - dt(k, oe);
    }
    _.value = rt(e.scrollbar.value, !!t.value?.vertical), $.value = ut(e.scrollbar.value, !!t.value?.horizontal);
  }
  function w(P) {
    e.onMouseleave?.(P), t.value?.draggable && V();
  }
  function z(P) {
    e.onMouseup?.(P), t.value?.draggable && V();
  }
  return Ue(() => {
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
const zn = /* @__PURE__ */ p({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: Dt },
    infiniteScrollOffset: { default: Ot },
    debounceDelay: { default: Et },
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
    } = On({
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
  Root: zn
}, Pn = /* @__PURE__ */ p({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, o) => (r(), x(a(zt).Root, { class: "select-scrollbar" }, {
      default: b(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ye = {
  Root: wn,
  Option: Mn,
  Trigger: An,
  Dropdown: En,
  Value: Dn,
  Scrollbar: Pn
};
function Ln(e) {
  const t = c(() => g(e.inputRootContext?.props));
  return {
    props: c(() => ({
      disabled: !!g(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function Nn(e) {
  const t = c(() => g(e.inputRootContext?.props));
  return {
    props: c(() => ({
      disabled: !!g(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function Xn(e) {
  const [t, o] = Z(), n = c(() => g(e.props)), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.loading || n.value?.disabled)), l = c(() => n.value.type === Mt.TEXTAREA), i = c(() => !!g(e.modelValue)?.trim());
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
      get: () => g(e.inputRootContext?.modelValue),
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
function Fn(e) {
  const t = c(() => g(e.inputRootContext?.props)), o = c(() => !!t.value?.clearable);
  function n() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: o,
    handleClear: n
  };
}
const Lt = /* @__PURE__ */ Symbol("InputRootContextKey");
function We() {
  return U(Lt, null);
}
const jn = /* @__PURE__ */ p({
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
    inputMode: { default: Qo.TEXT },
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
    const n = e, s = o, l = O(e, "modelValue"), { formRootContext: i, formItemContext: u, isValid: m, isInvalid: v } = Q(), { isDisabled: h, isTextarea: _, hasValue: $, isFocus: V, setFocus: y, setModelValue: C, reset: S } = Xn({
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
}), Hn = {}, Un = { class: "input-before" };
function Gn(e, t) {
  return r(), f("div", Un, [
    d(e.$slots, "default")
  ]);
}
const Yn = /* @__PURE__ */ A(Hn, [["render", Gn]]), qn = { class: "input-after" }, Kn = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = We(), { isClearable: o, handleClear: n } = Fn({
      inputRootContext: t
    });
    return (s, l) => (r(), f("div", qn, [
      d(s.$slots, "default"),
      a(o) ? (r(), f("button", {
        key: 0,
        type: "button",
        onClick: l[0] || (l[0] = //@ts-ignore
        (...i) => a(n) && a(n)(...i))
      }, " × ")) : F("", !0)
    ]));
  }
}), Wn = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Zn = /* @__PURE__ */ p({
  __name: "InputNative",
  setup(e) {
    const t = We(), { modelValue: o, listeners: n } = Pt({
      inputRootContext: t
    }), { props: s } = Nn({
      inputRootContext: t
    });
    return (l, i) => Y((r(), f("input", X({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => ke(o) ? o.value = u : null),
      type: a(s).nativeType,
      inputmode: a(s).inputMode,
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      placeholder: a(s).placeholder,
      class: "input-native"
    }, te(a(n), !0)), null, 16, Wn)), [
      [po, a(o)]
    ]);
  }
}), Jn = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Qn = /* @__PURE__ */ p({
  __name: "InputTextarea",
  setup(e) {
    const t = We(), { modelValue: o, listeners: n } = Pt({
      inputRootContext: t
    }), { props: s } = Ln({
      inputRootContext: t
    });
    return (l, i) => Y((r(), f("textarea", X({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => ke(o) ? o.value = u : null),
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      rows: a(s).rows,
      cols: a(s).cols,
      placeholder: a(s).placeholder,
      class: "input-textarea"
    }, te(a(n), !0)), null, 16, Jn)), [
      [bt, a(o)]
    ]);
  }
}), es = {}, ts = { class: "input-control" };
function os(e, t) {
  return r(), f("div", ts, [
    d(e.$slots, "default")
  ]);
}
const ns = /* @__PURE__ */ A(es, [["render", os]]), ss = {}, ls = { class: "input-group" };
function as(e, t) {
  return r(), f("div", ls, [
    d(e.$slots, "default")
  ]);
}
const is = /* @__PURE__ */ A(ss, [["render", as]]), rs = {}, us = { class: "input-group-addon" };
function cs(e, t) {
  return r(), f("div", us, [
    d(e.$slots, "default")
  ]);
}
const ds = /* @__PURE__ */ A(rs, [["render", cs]]), q = {
  Root: jn,
  Before: Yn,
  After: Kn,
  Native: Zn,
  Textarea: Qn,
  Control: ns,
  Group: is,
  GroupAddon: ds
}, Nt = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function fs() {
  return U(Nt, null);
}
function ms(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = c(() => Po(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), l = c(() => !!(s.value || t.value?.checked)), i = c(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: l,
    isIndeterminate: i
  };
}
function ps(e) {
  const t = c(() => !!g(e.checkboxRootContext?.isDisabled)), o = c(() => !!g(e.checkboxRootContext?.isActive)), n = c(() => !!g(e.checkboxRootContext?.isIndeterminate)), s = c(() => !!g(e.checkboxRootContext?.isValid)), l = c(() => !!g(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: l
  };
}
const vs = ["value", "disabled", "checked"], hs = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isChecked: v, isDisabled: h, isIndeterminate: _ } = ms({
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
      }, te(n, !0)), null, 16, vs), [
        [gt, s.value]
      ]),
      d(V.$slots, "default")
    ], 2));
  }
}), bs = /* @__PURE__ */ p({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = fs(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: l, isInvalid: i } = ps({
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
}), gs = {}, _s = { class: "checkbox-title" };
function ys(e, t) {
  return r(), f("span", _s, [
    d(e.$slots, "default")
  ]);
}
const Vs = /* @__PURE__ */ A(gs, [["render", ys]]), $s = /* @__PURE__ */ p({
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
  Root: hs,
  Indicator: bs,
  Title: Vs,
  Group: $s
};
function xs(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: c(() => o.value === t.value.value),
    isDisabled: n
  };
}
function Cs(e) {
  const t = c(() => !!g(e.radioRootContext?.isDisabled)), o = c(() => !!g(e.radioRootContext?.isActive)), n = c(() => !!g(e.radioRootContext?.isValid)), s = c(() => !!g(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Xt = /* @__PURE__ */ Symbol("RadioRootContextKey");
function Rs() {
  return U(Xt, null);
}
const Is = ["value", "disabled"], Ts = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isActive: v, isDisabled: h } = xs({
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
      }, te(n, !0)), null, 16, Is), [
        [vo, s.value]
      ]),
      d(_.$slots, "default")
    ], 2));
  }
}), Bs = /* @__PURE__ */ p({
  __name: "RadioIndicator",
  setup(e) {
    const t = Rs(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = Cs({
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
}), Ss = {}, ws = { class: "radio-title" };
function Ms(e, t) {
  return r(), f("span", ws, [
    d(e.$slots, "default")
  ]);
}
const As = /* @__PURE__ */ A(Ss, [["render", Ms]]), ks = /* @__PURE__ */ p({
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
  Root: Ts,
  Indicator: Bs,
  Title: As,
  Group: ks
};
function Es(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function Ds(e) {
  const t = c(() => !!g(e.switchRootContext?.isDisabled)), o = c(() => !!g(e.switchRootContext?.isActive)), n = c(() => !!g(e.switchRootContext?.isValid)), s = c(() => !!g(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Ft = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function Os() {
  return U(Ft, null);
}
const zs = { class: "switch" }, Ps = ["disabled"], Ls = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: u, isActive: m } = Es({
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
    }), (v, h) => (r(), f("label", zs, [
      Y(T("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (_) => o.value = _),
        type: "checkbox",
        disabled: a(u),
        class: "switch__input"
      }, null, 8, Ps), [
        [gt, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), Ns = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = Os(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = Ds({
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
}), Xs = {}, Fs = { class: "switch-title" };
function js(e, t) {
  return r(), f("span", Fs, [
    d(e.$slots, "default")
  ]);
}
const Hs = /* @__PURE__ */ A(Xs, [["render", js]]), Fe = {
  Root: Ls,
  Indicator: Ns,
  Title: Hs
}, jt = 1, Us = -1 / 0, Gs = 1 / 0, Ys = 100, Ze = 0, Me = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function qs(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.modelValue)), n = c(() => t.value.step || jt), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), l = c(() => s.value || W(t.value.min) && o.value === t.value.min), i = c(() => s.value || W(t.value.max) && !(o.value < t.value.max));
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
function Ks(e) {
  const t = c(() => g(e.mousewheel)), o = c(() => W(t.value) && t.value > 0 ? t.value : Ys);
  return {
    handleWheel: qe((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function Ws(e) {
  const t = c(() => g(e.inputNumberRootContext?.props)), o = c({
    get: () => g(e.inputNumberRootContext?.modelValue) ?? Ze,
    set(s) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(s);
    }
  });
  return {
    props: c(() => ({
      step: g(e.inputNumberRootContext?.step),
      disabled: g(e.inputNumberRootContext?.isDisabled),
      min: t.value?.min,
      max: t.value?.max,
      readonly: t.value?.readonly,
      placeholder: t.value?.placeholder,
      autocomplete: t.value?.autocomplete
    })),
    modelValue: o
  };
}
function Zs(e) {
  const t = c(() => g(e.props)), o = c(() => t.value.action === Me.DECREMENT), n = c(() => t.value.action === Me.INCREMENT), s = c(() => o.value ? !!g(e.inputNumberRootContext?.isDecrementDisabled) : !!g(e.inputNumberRootContext?.isIncrementDisabled));
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
const Js = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ I({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Us },
    max: { default: Gs },
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
      default: Ze
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
    } = qs({
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
}), Qs = { class: "input-number-input" }, el = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = Ut(), { props: o, modelValue: n } = Ws({
      inputNumberRootContext: t
    }), { handleWheel: s } = Ks({
      mousewheel: () => g(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), f("div", Qs, [
      Y(T("input", X({
        "onUpdate:modelValue": i[0] || (i[0] = (u) => ke(n) ? n.value = u : null),
        type: "number",
        class: "input-number-input__native"
      }, a(o), {
        onWheel: i[1] || (i[1] = //@ts-ignore
        (...u) => a(s) && a(s)(...u))
      }), null, 16), [
        [
          bt,
          a(n),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), tl = ["disabled"], ol = /* @__PURE__ */ p({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = Ut(), { handleAction: n, isDisabled: s, isDecrement: l, isIncrement: i } = Zs({
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
    ], 10, tl));
  }
}), Re = {
  Root: Js,
  Input: el,
  Button: ol
};
function nl() {
  const e = M(ge.PASSWORD);
  function t() {
    e.value === ge.PASSWORD ? e.value = ge.TEXT : e.value = ge.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const sl = /* @__PURE__ */ p({
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
    const t = e, o = J(), n = O(e, "modelValue"), { currentType: s, handleToggleType: l } = nl();
    return (i, u) => (r(), x(a(q).Root, X(t, {
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (m) => n.value = m),
      "native-type": a(s)
    }), {
      default: b((m) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: b(() => [
            d(i.$slots, "before", E(D(m)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        B(a(q).Control, null, {
          default: b(() => [
            B(a(q).Native)
          ]),
          _: 1
        }),
        B(a(q).After, null, {
          default: b(() => [
            d(i.$slots, "after", E(D(m)), () => [
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
}), ll = {
  Root: sl
};
function al(e) {
  const t = c(() => g(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function il(e) {
  return {
    isDisabled: c(() => {
      const o = e.inputCodeRootContext;
      return o ? !!g(o.isDisabled) : !1;
    })
  };
}
const Gt = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function rl() {
  return U(Gt, null);
}
const ul = /* @__PURE__ */ p({
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
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = al({
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
}), cl = ["disabled", "aria-disabled"], dl = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = rl(), { isDisabled: o } = il({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), f("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, cl));
  }
}), ft = {
  Root: ul,
  Pin: dl
}, Yt = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function qt() {
  return U(Yt, null);
}
function fl(e) {
  const t = c(() => g(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function ml(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const pl = /* @__PURE__ */ p({
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
    const o = e, n = O(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: u } = Q(), { isDisabled: m } = fl({
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
}), vl = { class: "input-tags-input" }, hl = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    qt();
    const { handleEnter: t, handleTab: o } = ml();
    return (n, s) => (r(), f("div", vl, [
      T("input", {
        type: "text",
        onKeydown: [
          s[0] || (s[0] = nt(
            //@ts-ignore
            (...l) => a(t) && a(t)(...l),
            ["enter"]
          )),
          s[1] || (s[1] = nt(
            //@ts-ignore
            (...l) => a(o) && a(o)(...l),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), bl = { class: "input-tags-tags" }, gl = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return qt(), (t, o) => (r(), f("div", bl));
  }
}), vc = {
  Root: pl,
  Input: hl,
  Tags: gl
};
function _l(e) {
  const t = c(() => g(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function yl(e) {
  return {
    isDisabled: c(() => !!g(e.inputRangeRootContext?.isDisabled))
  };
}
const Kt = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function Vl() {
  return U(Kt, null);
}
const $l = /* @__PURE__ */ p({
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
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = _l({
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
}), xl = ["aria-disabled"], Cl = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = Vl(), { isDisabled: o } = yl({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), f("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, xl));
  }
}), hc = {
  Root: $l,
  Slider: Cl
}, Wt = /* @__PURE__ */ Symbol("ModalRootContextKey");
function Zt() {
  return U(Wt, null);
}
function Rl(e) {
  const t = c(() => g(e.configProviderRootContext?.props)), o = c(() => g(e.modelValue)), n = c(() => t.value?.teleportTarget);
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
function Il(e) {
  function t() {
    e.modalRootContext?.close();
  }
  return {
    close: t
  };
}
function Tl(e) {
  const t = c(() => g(e.modalRootContext?.props));
  return {
    position: c(() => t.value?.position)
  };
}
const Jt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey"), Qt = "body";
function Bl() {
  return U(Jt, {
    props: () => ({
      teleportTarget: Qt
    }),
    t: () => ""
  });
}
function Sl(e) {
  const t = c(() => g(e.props));
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
const wl = /* @__PURE__ */ p({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: { default: () => Qt },
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = Sl({
      props: () => t
    });
    return H(Jt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), Ml = {
  Root: wl
}, Al = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), l = ho(), i = Bl(), { close: u, teleportTarget: m } = Rl({
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
    }), (v, h) => (r(), x(_t, {
      to: a(m),
      disabled: !e.appendToBody
    }, [
      B(De, {
        name: "fade-in-down",
        onAfterEnter: h[1] || (h[1] = (_) => n("opened", _)),
        onAfterLeave: h[2] || (h[2] = (_) => n("closed", _))
      }, {
        default: b(() => [
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
}), kl = {}, El = { class: "modal-body" };
function Dl(e, t) {
  return r(), f("div", El, [
    d(e.$slots, "default")
  ]);
}
const Ol = /* @__PURE__ */ A(kl, [["render", Dl]]), zl = /* @__PURE__ */ p({
  __name: "ModalClose",
  setup(e) {
    const t = Zt(), { close: o } = Il({
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
}), Pl = {}, Ll = { class: "modal-header" };
function Nl(e, t) {
  return r(), f("div", Ll, [
    d(e.$slots, "default")
  ]);
}
const Xl = /* @__PURE__ */ A(Pl, [["render", Nl]]), Fl = {}, jl = { class: "modal-footer" };
function Hl(e, t) {
  return r(), f("div", jl, [
    d(e.$slots, "default")
  ]);
}
const Ul = /* @__PURE__ */ A(Fl, [["render", Hl]]), Gl = {}, Yl = { class: "modal-title" };
function ql(e, t) {
  return r(), f("div", Yl, [
    d(e.$slots, "default")
  ]);
}
const Kl = /* @__PURE__ */ A(Gl, [["render", ql]]), Wl = {}, Zl = { class: "modal-content" };
function Jl(e, t) {
  return r(), f("div", Zl, [
    d(e.$slots, "default")
  ]);
}
const Ql = /* @__PURE__ */ A(Wl, [["render", Jl]]), ea = /* @__PURE__ */ p({
  __name: "ModalDialog",
  setup(e) {
    const t = Zt(), { position: o } = Tl({
      modalRootContext: t
    });
    return (n, s) => (r(), f("div", {
      class: R(["modal-dialog", {
        [`modal-dialog--position-${a(o)}`]: a(o)
      }]),
      role: "dialog",
      onClick: s[0] || (s[0] = ht(() => {
      }, ["stop"]))
    }, [
      d(n.$slots, "default")
    ], 2));
  }
}), ne = {
  Root: Al,
  Body: Ol,
  Close: zl,
  Header: Xl,
  Footer: Ul,
  Title: Kl,
  Content: Ql,
  Dialog: ea
};
function ta(e) {
  const t = c(() => g(e.props));
  function o() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: o
  };
}
const oa = /* @__PURE__ */ p({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, n = t, { handleDelete: s } = ta({
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
}), na = /* @__PURE__ */ p({
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
  Root: oa,
  Group: na
}, sa = { class: "layout" }, la = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), f("div", sa, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), aa = {}, ia = { class: "layout-body" };
function ra(e, t) {
  return r(), f("main", ia, [
    d(e.$slots, "default")
  ]);
}
const ua = /* @__PURE__ */ A(aa, [["render", ra]]), mt = {
  Root: la,
  Body: ua
}, ca = /* @__PURE__ */ p({
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
}), da = /* @__PURE__ */ p({
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
}), fa = /* @__PURE__ */ p({
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
}), ma = /* @__PURE__ */ p({
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
}), Je = {
  Root: fa,
  Item: ma
}, pa = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Je).Root, X(t, {
      wrap: e.wrap,
      class: ["row", {
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }]
    }), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["wrap", "class"]));
  }
}), Qe = {
  Container: ca,
  Row: pa,
  Col: da
}, va = { class: "section" }, ha = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), f("section", va, [
      d(t.$slots, "default")
    ]));
  }
}), ba = {}, ga = { class: "section-header" };
function _a(e, t) {
  return r(), f("header", ga, [
    d(e.$slots, "default")
  ]);
}
const ya = /* @__PURE__ */ A(ba, [["render", _a]]), Va = {}, $a = { class: "section-title" };
function xa(e, t) {
  return r(), f("h1", $a, [
    d(e.$slots, "default")
  ]);
}
const Ca = /* @__PURE__ */ A(Va, [["render", xa]]), Ra = {}, Ia = { class: "section-footer" };
function Ta(e, t) {
  return r(), f("footer", Ia, [
    d(e.$slots, "default")
  ]);
}
const Ba = /* @__PURE__ */ A(Ra, [["render", Ta]]), Sa = {}, wa = { class: "section-body" };
function Ma(e, t) {
  return r(), f("div", wa, [
    d(e.$slots, "default")
  ]);
}
const Aa = /* @__PURE__ */ A(Sa, [["render", Ma]]), bc = {
  Root: ha,
  Header: ya,
  Title: Ca,
  Footer: Ba,
  Body: Aa
}, ka = /* @__PURE__ */ p({
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
    return (t, o) => (r(), x(a(wt).Root, {
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
      default: b(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ea = {
  Root: ka
}, Da = /* @__PURE__ */ p({
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
}), Oa = {}, za = { class: "divider-content" };
function Pa(e, t) {
  return r(), f("div", za, [
    d(e.$slots, "default")
  ]);
}
const La = /* @__PURE__ */ A(Oa, [["render", Pa]]), pt = {
  Root: Da,
  Content: La
}, gc = {}, Na = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(je).Root, E(D(t)), {
      default: b(() => [
        e.asChild ? d(o.$slots, "default", { key: 0 }) : (r(), x(a(je).Content, { key: 1 }, {
          default: b(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        }))
      ]),
      _: 3
    }, 16));
  }
}), Xa = /* @__PURE__ */ p({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(je).Group, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fa = {
  install(e) {
    e.component("VButton", Na);
  }
}, _c = {
  install(e) {
    e.component("VButtonGroup", Xa);
  }
}, ja = /* @__PURE__ */ p({
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
      default: b(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Ha = /* @__PURE__ */ p({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = Oe(e, ["title"]);
    return (o, n) => (r(), x(a(fe).Item, E(D(t)), {
      default: b(({ isActive: s }) => [
        B(a(fe).Header, null, {
          default: b(() => [
            B(a(fe).Trigger, null, {
              default: b(() => [
                B(a(fe).Title, null, {
                  default: b(() => [
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
          default: b(() => [
            d(o.$slots, "default", { isActive: s })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), Ua = {
  install(e) {
    e.component("VAccordion", ja), e.component("VAccordionItem", Ha);
  }
}, Ga = {
  key: 0,
  class: "v-avatar__label"
}, Ya = /* @__PURE__ */ p({
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
      e.label ? (r(), f("div", Ga, N(e.label), 1)) : F("", !0)
    ], 2));
  }
}), qa = {}, Ka = { class: "v-avatar-group" };
function Wa(e, t) {
  return r(), f("div", Ka, [
    d(e.$slots, "default")
  ]);
}
const Za = /* @__PURE__ */ A(qa, [["render", Wa]]), Ja = {
  install(e) {
    e.component("VAvatar", Ya);
  }
}, Qa = {
  install(e) {
    e.component("VAvatarGroup", Za);
  }
}, ei = { class: "v-alert__content" }, ti = {
  key: 0,
  class: "v-alert__title"
}, oi = {
  key: 1,
  class: "v-alert__description"
}, ni = /* @__PURE__ */ p({
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
      T("div", ei, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), f(G, { key: 1 }, [
          n.value ? (r(), f("div", ti, [
            d(l.$slots, "title", {}, () => [
              j(N(e.title), 1)
            ])
          ])) : F("", !0),
          s.value ? (r(), f("div", oi, [
            d(l.$slots, "description", {}, () => [
              j(N(e.description), 1)
            ])
          ])) : F("", !0)
        ], 64))
      ])
    ], 2));
  }
}), si = {
  install(e) {
    e.component("VAlert", ni);
  }
}, to = 0, oo = 0, li = {
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
      ...li,
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
function ai(e) {
  const t = st(), o = st(), n = c(() => W(e.props?.offsetTop) ? e.props.offsetTop : to), s = c(() => W(e.props?.offsetBottom) ? e.props.offsetBottom : oo);
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
  }), He(() => {
    u();
  }), K(() => e.props.disabled, (m) => {
    m ? u() : i();
  }), {};
}
const ii = /* @__PURE__ */ p({
  __name: "VAffix",
  props: {
    offsetTop: { default: to },
    offsetBottom: { default: oo },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = se("root"), n = se("content");
    return ai({
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
}), ri = {
  install(e) {
    e.component("VAffix", ii);
  }
}, ui = { class: "v-breadcrumbs" }, ci = /* @__PURE__ */ p({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (r(), f("nav", ui));
  }
}), di = {
  install(e) {
    e.component("VBreadcrumbs", ci);
  }
};
function fi(e) {
  return {
    content: c(() => e.props.dot ? "" : W(e.props.value) && W(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const mi = {
  key: 0,
  class: "v-badge__content"
}, pi = /* @__PURE__ */ p({
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
    const t = e, o = J(), { content: n } = fi({
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
      s.value ? (r(), f("sup", mi, [
        d(l.$slots, "content", { value: a(n) }, () => [
          j(N(a(n)), 1)
        ])
      ])) : F("", !0)
    ], 2));
  }
}), vi = {
  install(e) {
    e.component("VBadge", pi);
  }
}, hi = { class: "v-collapse" }, bi = /* @__PURE__ */ p({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (r(), f("div", hi, [
      d(t.$slots, "default")
    ]));
  }
}), gi = {
  install(e) {
    e.component("VCollapse", bi);
  }
};
function _i(e) {
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
const yi = /* @__PURE__ */ p({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: n, handleOpen: s, handleClose: l } = _i({
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
}), Vi = {
  install(e) {
    e.component("VInplace", yi);
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
      default: b(() => [
        B(a(ne).Dialog, null, {
          default: b(() => [
            B(a(ne).Content, null, {
              default: b(() => [
                B(a(ne).Header, null, {
                  default: b(() => [
                    d(i.$slots, "header", {}, () => [
                      e.title ? (r(), x(a(ne).Title, { key: 0 }, {
                        default: b(() => [
                          j(N(e.title), 1)
                        ]),
                        _: 1
                      })) : F("", !0),
                      B(a(ne).Close, null, {
                        default: b(() => [...u[5] || (u[5] = [
                          j("X", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 3
                }),
                B(a(ne).Body, null, {
                  default: b(() => [
                    d(i.$slots, "default")
                  ]),
                  _: 3
                }),
                s?.footer ? (r(), x(a(ne).Footer, { key: 0 }, {
                  default: b(() => [
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
}), $i = {
  install(e) {
    e.component("VModal", no);
  }
}, et = /* @__PURE__ */ p({
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
}), xi = {
  install(e) {
    e.component("VOverlay", et);
  }
}, Ci = { class: "v-drawer__dialog" }, Ri = {
  key: 0,
  class: "v-drawer__header"
}, Ii = { class: "v-drawer__body" }, Ti = {
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
    }), (_, $) => (r(), x(_t, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      B(De, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: b(() => [
          B(a(et), null, {
            default: b(() => [
              Y(T("div", {
                class: R(["v-drawer", {
                  "v-drawer--open": l.value
                }]),
                role: "dialog"
              }, [
                T("div", Ci, [
                  i.value ? (r(), f("div", Ri, [
                    d(_.$slots, "header", { close: m }, () => [
                      j(N(e.title), 1)
                    ]),
                    T("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: m
                    }, " x ")
                  ])) : F("", !0),
                  T("div", Ii, [
                    d(_.$slots, "default", { close: m })
                  ]),
                  u.value ? (r(), f("div", Ti, [
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
}), Bi = {
  install(e) {
    e.component("VDrawer", so);
  }
};
function yc() {
  return {};
}
const Si = /* @__PURE__ */ Symbol("VDropdownContextKey"), wi = { class: "v-dropdown__menu" }, Mi = /* @__PURE__ */ p({
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
    }), H(Si, {
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
        default: b(() => [
          Y(T("div", wi, [
            d(h.$slots, "default")
          ], 512), [
            [re, a(l)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Ai = {
  install(e) {
    e.component("VDropdown", Mi);
  }
}, ki = /* @__PURE__ */ p({
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
}), Ei = {
  install(e) {
    e.component("VImage", ki);
  }
}, Di = /* @__PURE__ */ p({
  __name: "VLayout",
  setup(e) {
    const t = J();
    return (o, n) => (r(), x(a(mt).Root, null, yt({
      default: b(() => [
        B(a(mt).Body, null, {
          default: b(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      t?.header ? {
        name: "header",
        fn: b(() => [
          d(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t?.footer ? {
        name: "footer",
        fn: b(() => [
          d(o.$slots, "footer")
        ]),
        key: "1"
      } : void 0
    ]), 1024));
  }
}), Oi = {
  install(e) {
    e.component("VLayout", Di);
  }
}, Vc = /* @__PURE__ */ p({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Qe).Container, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $c = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Qe).Row, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xc = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Qe).Col, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zi = { class: "v-pagination" }, Pi = /* @__PURE__ */ p({
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
    return (t, o) => (r(), f("div", zi));
  }
}), Li = {
  install(e) {
    e.component("VPagination", Pi);
  }
}, Ni = { class: "v-placeholder" }, Xi = /* @__PURE__ */ p({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (r(), f("div", Ni, [
      d(t.$slots, "default")
    ]));
  }
}), Fi = {
  install(e) {
    e.component("VPlaceholder", Xi);
  }
}, ji = /* @__PURE__ */ p({
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
      default: b(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Hi = {
  install(e) {
    e.component("VScrollbar", ji);
  }
}, Ui = /* @__PURE__ */ p({
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
}), Gi = {
  install(e) {
    e.component("VSpinner", Ui);
  }
}, lo = /* @__PURE__ */ Symbol("VTabsContextKey"), Yi = () => U(lo, null);
function qi() {
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
function Ki(e) {
  const t = Ge(), o = c(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const Wi = { class: "v-tabs" }, Zi = { class: "v-tabs__content" }, Ji = /* @__PURE__ */ p({
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
    } = qi();
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
    }), (v, h) => (r(), f("div", Wi, [
      T("div", Zi, [
        d(v.$slots, "default")
      ])
    ]));
  }
}), Qi = /* @__PURE__ */ p({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = J(), n = Yi(), { id: s, isActive: l } = Ki({
      context: n,
      props: t
    }), i = bo({
      id: s,
      props: t,
      slots: o
    });
    return n?.registerTab(i), Ee(() => {
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
}), er = {
  install(e) {
    e.component("VTabs", Ji), e.component("VTab", Qi);
  }
}, tr = /* @__PURE__ */ p({
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
      default: b(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), or = /* @__PURE__ */ p({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(eo).Group, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nr = {
  install(e) {
    e.component("VTag", tr);
  }
}, Cc = {
  install(e) {
    e.component("VTagGroup", or);
  }
}, sr = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Ea).Root, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), lr = {
  install(e) {
    e.component("VText", sr);
  }
}, ar = /* @__PURE__ */ p({
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
      default: b((u) => [
        d(l.$slots, "default", E(D(u)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), ir = {
  install(e) {
    e.component("VForm", ar);
  }
}, rr = /* @__PURE__ */ p({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = Oe(e, ["title"]), n = t, s = J();
    return (l, i) => (r(), x(a(_e).Item, X(o, te(n)), yt({
      default: b((u) => [
        d(l.$slots, "default", E(D(u)))
      ]),
      footer: b((u) => [
        d(l.$slots, "footer", E(D(u)), () => [
          B(a(_e).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: b((u) => [
          d(l.$slots, "header", E(D(u)), () => [
            B(a(_e).ItemTitle, null, {
              default: b(() => [
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
}), ur = {
  install(e) {
    e.component("VFormItem", rr);
  }
}, cr = /* @__PURE__ */ p({
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
      default: b(() => [
        B(a(Ie).Indicator),
        B(a(Ie).Title, null, {
          default: b(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), dr = /* @__PURE__ */ p({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Ie).Group, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), fr = {
  install(e) {
    e.component("VCheckbox", cr);
  }
}, mr = {
  install(e) {
    e.component("VCheckboxGroup", dr);
  }
}, pr = /* @__PURE__ */ p({
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
      default: b((i) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: b(() => [
            d(s.$slots, "before", E(D(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        B(a(q).Control, null, {
          default: b(() => [
            i.isTextarea ? (r(), x(a(q).Textarea, { key: 0 })) : (r(), x(a(q).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (r(), x(a(q).After, { key: 1 }, {
          default: b(() => [
            d(s.$slots, "after", E(D(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), vr = {
  install(e) {
    e.component("VInput", pr);
  }
}, hr = /* @__PURE__ */ p({
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
    return (n, s) => (r(), x(a(ft).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: b(() => [
        (r(!0), f(G, null, me(e.length, (l, i) => (r(), x(a(ft).Pin, {
          key: `pin-${i}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), br = {
  install(e) {
    e.component("VInputCode", hr);
  }
}, gr = /* @__PURE__ */ p({
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
      default: Ze
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
      default: b(() => [
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
}), _r = {
  install(e) {
    e.component("VInputNumber", gr);
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
    const t = e, o = O(e, "modelValue");
    return (n, s) => (r(), x(a(ll).Root, X({
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }, t), null, 16, ["modelValue"]));
  }
}), Vr = {
  install(e) {
    e.component("VInputPassword", yr);
  }
}, $r = /* @__PURE__ */ p({
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
      default: b(() => [
        B(a(Te).Indicator),
        B(a(Te).Title, null, {
          default: b(() => [
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
    return (o, n) => (r(), x(a(Te).Group, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cr = {
  install(e) {
    e.component("VRadio", $r);
  }
}, Rr = {
  install(e) {
    e.component("VRadioGroup", xr);
  }
}, Ir = /* @__PURE__ */ p({
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
      default: b(() => [
        B(a(ye).Value, null, {
          default: b(() => [
            d(l.$slots, "value")
          ]),
          _: 3
        }),
        B(a(ye).Dropdown, null, {
          default: b(() => [
            B(a(ye).Scrollbar, null, {
              default: b(() => [
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
}), Tr = /* @__PURE__ */ p({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(ye).Option, E(D(t)), {
      default: b((s) => [
        d(o.$slots, "default", E(D(s)))
      ]),
      _: 3
    }, 16));
  }
}), Br = {
  install(e) {
    e.component("VSelect", Ir), e.component("VOption", Tr);
  }
}, Sr = /* @__PURE__ */ p({
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
      default: b(() => [
        B(a(Fe).Indicator),
        B(a(Fe).Title, null, {
          default: b(() => [
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
    e.component("VSwitch", Sr);
  }
}, Mr = /* @__PURE__ */ p({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Ml).Root, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ar = {
  install(e) {
    e.component("VConfigProvider", Mr);
  }
}, kr = { class: "v-progress__value" }, Er = {
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
    return (t, o) => (r(), f("div", {
      class: R(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      T("div", kr, [
        e.showValue ? (r(), f("div", Er, [
          d(t.$slots, "default")
        ])) : F("", !0)
      ])
    ], 2));
  }
}), Or = {
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
    return (n, s) => (r(), x(a(pt).Root, E(D(t)), {
      default: b(() => [
        o?.default ? (r(), x(a(pt).Content, { key: 0 }, {
          default: b(() => [
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
}, Lr = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Je).Root, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nr = /* @__PURE__ */ p({
  __name: "VFlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Je).Item, E(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xr = {
  install(e) {
    e.component("VFlex", Lr);
  }
}, Rc = {
  install(e) {
    e.component("VFlexItem", Nr);
  }
};
function Fr(e) {
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
const jr = ze(() => Promise.resolve().then(() => Tu)), Hr = ze(() => Promise.resolve().then(() => Au)), Ur = ze(() => Promise.resolve().then(() => Pu)), Gr = ze(() => Promise.resolve().then(() => ju)), Yr = /* @__PURE__ */ Symbol("VTableContextKey"), qr = { class: "v-table" }, Kr = {
  key: 0,
  class: "v-table__native"
}, Wr = { key: 0 }, Zr = /* @__PURE__ */ p({
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
    } = Fr(o);
    return H(Yr, {
      props: o
    }), t({
      clearSelection: s,
      getSelectionRows: l,
      clearSort: i,
      sort: u,
      toggleAllSelection: m
    }), (v, h) => (r(), f("div", qr, [
      e.data.length ? (r(), f("table", Kr, [
        a(n) ? (r(), f("thead", Wr, [
          T("tr", null, [
            (r(!0), f(G, null, me(e.columns, (_) => (r(), x(a(Gr), {
              key: _.prop
            }, {
              default: b(() => [
                j(N(_.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : F("", !0),
        T("tbody", null, [
          (r(!0), f(G, null, me(e.data, (_, $) => (r(), x(a(jr), {
            key: `row-${$}`
          }, {
            default: b(() => [
              (r(!0), f(G, null, me(e.columns, (V) => (r(), x(a(Ur), {
                key: `row-${$}-${String(V.prop)}`
              }, {
                default: b(() => [
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
      ])) : (r(), x(a(Hr), { key: 1 }, {
        default: b(() => [
          d(v.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), Jr = {
  install(e) {
    e.component("VTable", Zr);
  }
}, Qr = /* @__PURE__ */ p({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (r(), x(a(q).Group, null, {
      default: b(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), eu = /* @__PURE__ */ p({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (r(), x(a(q).GroupAddon, null, {
      default: b(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), tu = {
  install(e) {
    e.component("VInputGroup", Qr), e.component("VInputGroupAddon", eu);
  }
}, Be = 1e3, Se = 60 * Be, we = 60 * Se, vt = 24 * we, ao = Date.now(), io = 1e3;
function ou(e) {
  const [t, o] = Z(), [n, s] = Z(), l = M(0), i = M(0), u = M(0), m = c(() => e.props.now || ao), v = c(() => e.props.interval || io), h = c(() => 0), _ = c(() => 0), $ = c(() => Math.floor(l.value / vt)), V = c(() => Math.floor(l.value % vt / we)), y = c(() => Math.floor(l.value % we / Se)), C = c(() => Math.floor(l.value % Se / Be)), S = c(() => Math.floor(l.value % Be)), w = c(() => Math.floor(l.value / we)), z = c(() => Math.floor(l.value / Se)), P = c(() => Math.floor(l.value / Be));
  function k() {
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
      let tt = function(he) {
        Xe || (Xe = he), Ce || (Ce = he);
        const ot = he - Xe;
        ot >= ee || ot + (he - Ce) / 2 >= ee ? oe() : u.value = requestAnimationFrame(tt), Ce = he;
      }, Xe, Ce;
      u.value = requestAnimationFrame(tt);
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
    L(), l.value = e.props.start, i.value = m.value + e.props.start, o(!1), k();
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
  }), He(() => {
    document.removeEventListener("visibilitychange", xe), L();
  }), K(() => e.props, (ee) => {
    l.value = ee.start, i.value = m.value + ee.start, ee.autoStart && k();
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
    start: k,
    abort: $e,
    end: ce,
    restart: Ne
  };
}
const nu = { class: "v-countdown" }, su = /* @__PURE__ */ p({
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
    } = ou({
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
    }), (S, w) => (r(), f("div", nu, [
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
}), lu = {
  install(e) {
    e.component("VCountdown", su);
  }
}, au = { class: "v-calendar" }, iu = /* @__PURE__ */ p({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", au));
  }
}), ru = {
  install(e) {
    e.component("VCalendar", iu);
  }
}, Ic = {
  install(e) {
    e.use(Ua), e.use(ri), e.use(Ja), e.use(Qa), e.use(vi), e.use(di), e.use(Fa), e.use(gi), e.use(Ar), e.use($i), e.use(Vi), e.use(Bi), e.use(Ai), e.use(Ei), e.use(Li), e.use(Fi), e.use(Hi), e.use(Gi), e.use(er), e.use(nr), e.use(lr), e.use(Oi), e.use(ir), e.use(ur), e.use(vr), e.use(fr), e.use(mr), e.use(Vr), e.use(_r), e.use(br), e.use(Cr), e.use(Rr), e.use(wr), e.use(Br), e.use(xi), e.use(si), e.use(Or), e.use(Pr), e.use(Xr), e.use(Jr), e.use(tu), e.use(lu), e.use(ru);
  }
}, uu = { class: "v-confirm__header" }, cu = { class: "v-confirm__title" }, du = { class: "v-confirm__body" }, fu = {
  key: 0,
  class: "v-confirm__text"
}, mu = ["innerHTML"], pu = { class: "v-confirm__footer" }, vu = /* @__PURE__ */ p({
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
    return (n, s) => (r(), x(a(et), null, {
      default: b(() => [
        T("div", {
          class: R(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          T("div", uu, [
            T("div", cu, N(e.title), 1),
            T("button", {
              type: "button",
              onClick: s[0] || (s[0] = (l) => o("close"))
            }, " X ")
          ]),
          T("div", du, [
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, mu)) : (r(), f("div", fu, N(e.message), 1))
          ]),
          T("div", pu, [
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
class Tc {
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
      }, l = ie(vu, {
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
const Bc = {
  install() {
  }
}, ro = 1500;
function hu(e) {
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
const bu = { class: "v-toast__header" }, gu = { class: "v-toast__title" }, _u = { class: "v-toast__body" }, yu = {
  key: 0,
  class: "v-toast__text"
}, Vu = ["innerHTML"], $u = /* @__PURE__ */ p({
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
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: u } = hu({
      props: o
    });
    return (m, v) => (r(), x(De, {
      name: "fade-in-up",
      onAfterLeave: v[3] || (v[3] = (h) => n("close"))
    }, {
      default: b(() => [
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
          T("div", bu, [
            T("div", gu, N(e.title), 1),
            e.clearable ? (r(), f("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (h) => a(l)(!1))
            }, " X ")) : F("", !0)
          ]),
          T("div", _u, [
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, Vu)) : (r(), f("div", yu, N(e.message), 1))
          ])
        ], 34), [
          [re, a(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class Sc {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = ie($u, {
      ...t,
      appContext: o
    });
    Ve(n, this.#e);
  }
}
class wc {
  static open(t, o) {
    const n = ie(no, {
      ...t,
      appContext: o
    });
    Ve(n, document.body);
  }
}
class Mc {
  static open(t, o) {
    const n = ie(so, {
      ...t,
      appContext: o
    });
    Ve(n, document.body);
  }
}
const Ac = {
  name: "ru",
  vau: {}
}, kc = {
  name: "en",
  vau: {}
}, xu = {}, Cu = { class: "v-table-row" };
function Ru(e, t) {
  return r(), f("tr", Cu, [
    d(e.$slots, "default")
  ]);
}
const Iu = /* @__PURE__ */ A(xu, [["render", Ru]]), Tu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Iu
}, Symbol.toStringTag, { value: "Module" })), Bu = {}, Su = { class: "v-table-empty" };
function wu(e, t) {
  return r(), f("div", Su, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" Данных нет ", -1))
    ])
  ]);
}
const Mu = /* @__PURE__ */ A(Bu, [["render", wu]]), Au = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mu
}, Symbol.toStringTag, { value: "Module" })), ku = {}, Eu = { class: "v-table-body-cell" }, Du = { class: "v-table-body-cell__content" };
function Ou(e, t) {
  return r(), f("td", Eu, [
    T("div", Du, [
      d(e.$slots, "default")
    ])
  ]);
}
const zu = /* @__PURE__ */ A(ku, [["render", Ou]]), Pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zu
}, Symbol.toStringTag, { value: "Module" })), Lu = {}, Nu = { class: "v-table-header-cell" };
function Xu(e, t) {
  return r(), f("th", Nu, [
    d(e.$slots, "default")
  ]);
}
const Fu = /* @__PURE__ */ A(Lu, [["render", Xu]]), ju = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Fu
}, Symbol.toStringTag, { value: "Module" }));
export {
  fe as Accordion,
  Ua as AccordionPlugin,
  ri as AffixPlugin,
  si as AlertPlugin,
  Qa as AvatarGroupPlugin,
  Ja as AvatarPlugin,
  vi as BadgePlugin,
  di as BreadcrumbsPlugin,
  je as Button,
  _c as ButtonGroupPlugin,
  Fa as ButtonPlugin,
  ru as CalendarPlugin,
  Ie as Checkbox,
  mr as CheckboxGroupPlugin,
  fr as CheckboxPlugin,
  mc as ClickOutsidePlugin,
  gi as CollapsePlugin,
  Ml as ConfigProvider,
  Ar as ConfigProviderPlugin,
  Jt as ConfigProviderRootContextKey,
  Bc as ConfirmPlugin,
  Tc as ConfirmService,
  lu as CountdownPlugin,
  tc as Direction,
  pt as Divider,
  Pr as DividerPlugin,
  Bi as DrawerPlugin,
  Mc as DrawerService,
  Ai as DropdownPlugin,
  Je as Flex,
  nc as FlexAlign,
  Rc as FlexItemPlugin,
  sc as FlexJustify,
  Xr as FlexPlugin,
  _e as Form,
  ur as FormItemPlugin,
  ir as FormPlugin,
  Qe as Grid,
  Me as INPUT_NUMBER_ACTIONS,
  Gs as INPUT_NUMBER_MAX,
  Us as INPUT_NUMBER_MIN,
  jt as INPUT_NUMBER_STEP,
  Ze as INPUT_NUMBER_VALUE_DEFAULT,
  Ys as INPUT_NUMBER_WHEEL_DELAY,
  Ei as ImagePlugin,
  Vi as InplacePlugin,
  q as Input,
  ft as InputCode,
  br as InputCodePlugin,
  tu as InputGroupPlugin,
  Qo as InputModes,
  ge as InputNativeTypes,
  Re as InputNumber,
  _r as InputNumberPlugin,
  ll as InputPassword,
  Vr as InputPasswordPlugin,
  vr as InputPlugin,
  hc as InputRange,
  vc as InputTags,
  Mt as InputTypes,
  it as IntersectionPresets,
  mt as Layout,
  Oi as LayoutPlugin,
  fc as LoadingPlugin,
  ne as Modal,
  $i as ModalPlugin,
  wc as ModalService,
  xi as OverlayPlugin,
  Li as PaginationPlugin,
  Fi as PlaceholderPlugin,
  oc as Position,
  wt as Primitive,
  Or as ProgressPlugin,
  Te as Radio,
  Rr as RadioGroupPlugin,
  Cr as RadioPlugin,
  zt as Scrollbar,
  Hi as ScrollbarPlugin,
  bc as Section,
  ye as Select,
  Br as SelectPlugin,
  ec as Sizes,
  Gi as SpinnerPlugin,
  Fe as Switch,
  wr as SwitchPlugin,
  Jr as TablePlugin,
  er as TabsPlugin,
  eo as Tag,
  Cc as TagGroupPlugin,
  nr as TagPlugin,
  Ea as Text,
  lr as TextPlugin,
  Qu as Themes,
  Sc as ToastService,
  pc as TooltipPlugin,
  ja as VAccordion,
  Ha as VAccordionItem,
  ii as VAffix,
  ni as VAlert,
  Ya as VAvatar,
  Za as VAvatarGroup,
  pi as VBadge,
  ci as VBreadcrumbs,
  Na as VButton,
  Xa as VButtonGroup,
  iu as VCalendar,
  cr as VCheckbox,
  dr as VCheckboxGroup,
  xc as VCol,
  bi as VCollapse,
  Mr as VConfigProvider,
  Vc as VContainer,
  su as VCountdown,
  zr as VDivider,
  so as VDrawer,
  Mi as VDropdown,
  Lr as VFlex,
  Nr as VFlexItem,
  ar as VForm,
  rr as VFormItem,
  ki as VImage,
  yi as VInplace,
  pr as VInput,
  hr as VInputCode,
  Qr as VInputGroup,
  eu as VInputGroupAddon,
  gr as VInputNumber,
  yr as VInputPassword,
  Di as VLayout,
  no as VModal,
  Tr as VOption,
  et as VOverlay,
  Pi as VPagination,
  Xi as VPlaceholder,
  Dr as VProgress,
  $r as VRadio,
  xr as VRadioGroup,
  $c as VRow,
  ji as VScrollbar,
  Ir as VSelect,
  Ui as VSpinner,
  Sr as VSwitch,
  Qi as VTab,
  Zr as VTable,
  Ji as VTabs,
  tr as VTag,
  or as VTagGroup,
  sr as VText,
  Ic as VauUI,
  dc as VisiblePlugin,
  Wu as booleanToBooleanish,
  be as clone,
  Ke as debounce,
  Zu as defineFormRules,
  Yu as delay,
  kc as en,
  at as getProp,
  Po as isBoolean,
  Gu as isEmpty,
  Lo as isFunction,
  Pe as isNull,
  W as isNumber,
  Ye as isObject,
  ve as isString,
  le as isUndefined,
  Ku as omit,
  qu as pick,
  St as renderSlotFragments,
  Ac as ru,
  gc as ruRU,
  qe as throttle,
  _o as useAccordionItem,
  go as useAccordionRoot,
  yo as useAccordionTrigger,
  ic as useAnimatedNumber,
  ac as useClipboard,
  Bl as useConfigProviderRootContext,
  yc as useDrawer,
  cc as useEmitProxy,
  nn as useFormItem,
  en as useFormRoot,
  Jo as useIntersectionObserver,
  lc as useLoadImage,
  Ju as usePlural,
  uc as useScrollTo,
  Z as useToggle,
  rc as useWindowScroll,
  kt as vClickOutside,
  Tn as vLoading,
  Bn as vTooltip,
  In as vVisible
};
