import { computed as c, toValue as g, inject as U, defineComponent as p, mergeModels as I, useModel as O, provide as H, createElementBlock as f, openBlock as r, normalizeClass as R, renderSlot as d, unref as a, withDirectives as Y, createElementVNode as T, vShow as re, markRaw as ro, Fragment as G, Comment as uo, mergeProps as X, cloneVNode as co, h as ie, createBlock as x, withCtx as b, ref as M, watch as K, onBeforeUnmount as je, onMounted as ue, onScopeDispose as He, isRef as Ee, nextTick as fo, useId as Ue, onUnmounted as ke, withModifiers as vt, useSlots as J, useTemplateRef as se, createCommentVNode as F, normalizeProps as k, guardReactiveProps as D, createTextVNode as j, renderList as me, toDisplayString as N, toHandlers as te, vModelDynamic as mo, vModelText as ht, vModelCheckbox as bt, vModelRadio as po, createVNode as B, withKeys as ot, useAttrs as vo, Teleport as gt, Transition as De, createPropsRestProxy as Oe, shallowRef as nt, createSlots as _t, reactive as ho, defineAsyncComponent as ze, render as Ve } from "vue";
import { z as st } from "zod";
function bo(e) {
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
function go(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.accordionRootContext?.modelValue)), n = c(() => !!g(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: c(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function _o(e) {
  const t = c(() => g(e.accordionItemContext?.props)), o = c(() => !!t.value?.disabled);
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
function yo() {
  const e = $t(), t = xt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const Vo = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { setModelValue: l } = bo({
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
}), $o = /* @__PURE__ */ p({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = $t(), { isActive: n } = go({
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
}), A = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, xo = {}, Co = { class: "accordion-header" };
function Ro(e, t) {
  return r(), f("div", Co, [
    d(e.$slots, "default")
  ]);
}
const Io = /* @__PURE__ */ A(xo, [["render", Ro]]), To = {
  class: "accordion-body",
  role: "region"
}, Bo = { class: "accordion-body__content" }, So = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = xt(), o = c(() => !!g(t?.isActive));
    return (n, s) => Y((r(), f("div", To, [
      T("div", Bo, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [re, o.value]
    ]);
  }
}), wo = {}, Mo = { class: "accordion-title" };
function Ao(e, t) {
  return r(), f("div", Mo, [
    d(e.$slots, "default")
  ]);
}
const Eo = /* @__PURE__ */ A(wo, [["render", Ao]]), ko = ["disabled"], Do = /* @__PURE__ */ p({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = yo(), { isDisabled: n, handleToggle: s } = _o({
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
    ], 8, ko));
  }
}), fe = {
  Root: Vo,
  Item: $o,
  Header: Io,
  Body: So,
  Title: Eo,
  Trigger: Do
};
function Oo(e) {
  const t = c(() => g(e.props));
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
function zo(e) {
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
function ju(e) {
  return Pe(e) || le(e) ? !0 : ve(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ge(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Po(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function W(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function Lo(e) {
  return !Pe(e) && !le(e) && Ge(e) && !Array.isArray(e);
}
function lt(e, t) {
  if (!e || !t.trim())
    return null;
  const o = t.split(".");
  let n = e;
  for (const s of o) {
    if (!Lo(n))
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
  if (Po(e))
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
function Hu(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Uu(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function Gu(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function Yu(e) {
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
function qu(e) {
  return ro(e);
}
function Bt(e) {
  return e ? e.flatMap((t) => t.type === G ? Bt(t.children) : [t]) : [];
}
const No = p({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      if (!o.default)
        return null;
      const n = Bt(o.default()), s = n.findIndex((m) => m.type !== uo);
      if (s === -1)
        return n;
      const l = n[s];
      delete l.props?.ref;
      const i = l.props ? X(t, l.props) : t, u = co({
        ...l,
        props: {}
      }, i);
      return n.length === 1 ? u : (n[s] = u, n);
    };
  }
}), Xo = [
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
], Fo = p({
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
    return ve(n) && Xo.includes(n) ? () => ie(n, t) : n !== "template" ? () => ie(e.as, t, {
      default: o.default
    }) : () => ie(No, t, {
      default: o.default
    });
  }
}), St = {
  Root: Fo
}, jo = /* @__PURE__ */ p({
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
    const t = e, { formRootContext: o, formItemContext: n } = Q(), { isDisabled: s } = Oo({
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
      default: b(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class", "disabled", "type"]));
  }
}), Ho = /* @__PURE__ */ p({
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
  Root: jo,
  Group: Ho
};
function Uo() {
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
function Go(e) {
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
function Ku(e) {
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
function Yo(e, t, o) {
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
}), qo = Object.freeze({
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
}), Wu = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Zu = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Ju = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Qu = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), ec = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), tc = Object.freeze({
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
function oc(e, t, o = {}) {
  const {
    rootMargin: n = at.LAZY_IMAGE.rootMargin,
    threshold: s = at.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: u } = Yo(e, w, {
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
function nc() {
  return {};
}
function sc() {
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
function lc() {
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
function ac(e, t) {
  (ve(e) ? document.querySelector(e) : Ee(e) ? a(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function ic(e, t) {
  return {
    listeners: t.reduce((n, s) => {
      const l = s, i = String(l);
      return n[l] = ((...u) => e(i, ...u)), n;
    }, {})
  };
}
function Ko(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = Uo(), { validate: s, clearValidate: l, validatableFormItems: i } = Go({
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
  return K(() => g(e.modelValue), () => {
    $();
  }, {
    deep: !0
  }), ue(async () => {
    await fo(), await V(!0);
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
function Wo() {
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
function Zo(e) {
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
function Jo(e) {
  const t = Ue(), { field: o, registerField: n, unregisterField: s } = Wo(), l = c(() => g(e.props)), i = c(() => l.value.name), u = c(() => e.formRootContext?.modelValue.value), m = c(() => e.formRootContext?.props?.rules), v = c(() => i.value && u.value && lt(u.value, i.value)), h = c(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), _ = c(() => {
    if (!i.value || !m.value)
      return null;
    const L = lt(m.value, i.value);
    return L instanceof st.ZodType ? L : null;
  }), $ = c(() => !!_.value), V = c(() => _.value ? !_.value.safeParse(void 0).success : !1), {
    validationStatus: y,
    validationErrors: C,
    clearValidateErrors: S,
    validate: w
  } = Zo({
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
  const E = qe(() => w(), 300);
  return ke(() => {
    E.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), K(z, (L) => {
    e.formRootContext?.registerFormItem(L);
  }, {
    deep: !0,
    immediate: !0
  }), K(v, () => E()), K(() => y.value.isSuccess, (L) => {
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
const Qo = /* @__PURE__ */ p({
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
    } = Ko({
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
}), en = {
  key: 0,
  class: "form-item__header"
}, tn = { class: "form-item__body" }, on = {
  key: 1,
  class: "form-item__footer"
}, nn = /* @__PURE__ */ p({
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
    } = Jo({
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
      l?.header ? (r(), f("div", en, [
        d(z.$slots, "header", k(D(w.value)))
      ])) : F("", !0),
      T("div", tn, [
        d(z.$slots, "default", k(D(w.value)))
      ]),
      l.footer ? (r(), f("div", on, [
        d(z.$slots, "footer", k(D(w.value)))
      ])) : F("", !0)
    ], 2));
  }
}), sn = {}, ln = { class: "form-item-title" };
function an(e, t) {
  return r(), f("div", ln, [
    d(e.$slots, "default")
  ]);
}
const rn = /* @__PURE__ */ A(sn, [["render", an]]), un = {}, cn = { class: "form-item-required" };
function dn(e, t) {
  return r(), f("span", cn, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" * ", -1))
    ])
  ]);
}
const fn = /* @__PURE__ */ A(un, [["render", dn]]), mn = { class: "form-item-errors" }, pn = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = Tt(), o = c(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), f("div", mn, [
      (r(!0), f(G, null, me(o.value, (l, i) => (r(), f("div", {
        key: `error-${i}`,
        class: "form-item-errors__item"
      }, N(l.message), 1))), 128))
    ]));
  }
}), _e = {
  Root: Qo,
  Item: nn,
  ItemTitle: rn,
  ItemRequired: fn,
  ItemErrors: pn
};
function vn() {
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
function hn(e) {
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
function bn(e) {
  const t = c(() => g(e.modelValue)), o = c(() => g(e.props)), { options: n, registerOption: s, unregisterOption: l } = vn(), { activeOption: i, activeOptions: u } = hn({
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
function gn(e) {
  const t = Ue(), o = c(() => g(e.selectRootContext?.modelValue)), n = c(() => g(e.props)), s = c(() => !!g(e.selectRootContext?.props)?.multiple), l = c(() => le(o.value) ? !1 : pe(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), i = c(() => !!(g(e.selectRootContext?.isDisabled) || n.value?.disabled)), u = c(() => ({
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
function _n(e) {
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
function yn(e) {
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
const Vn = {
  mounted() {
  },
  unmounted() {
  }
}, rc = {
  install(e) {
    e.directive("visible", Vn);
  }
}, $n = {
  mounted() {
  },
  unmounted() {
  }
}, uc = {
  install(e) {
    e.directive("loading", $n);
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
}, cc = {
  install(e) {
    e.directive("click-outside", Et);
  }
}, xn = {
  mounted() {
  },
  unmounted() {
  }
}, dc = {
  install(e) {
    e.directive("tooltip", xn);
  }
}, Cn = ["aria-disabled"], Rn = /* @__PURE__ */ p({
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
    } = bn({
      formRootContext: l,
      formItemContext: i,
      modelValue: () => s.value,
      props: () => o,
      onChangeModel: (E) => {
        s.value = E;
      },
      onChange: (E) => {
        n("change", E);
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
    }), (E, L) => Y((r(), f("div", {
      class: R(["select", {
        "select--disabled": a(V),
        "select--open": a($),
        "select--filled": a(_),
        "select--invalid": a(m),
        "select--valid": a(u)
      }]),
      "aria-disabled": a(V)
    }, [
      d(E.$slots, "default")
    ], 10, Cn)), [
      [a(Et), a(C)]
    ]);
  }
}), In = /* @__PURE__ */ p({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Le(), { isActive: n, isDisabled: s, handleChange: l } = gn({
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
}), Tn = /* @__PURE__ */ p({
  __name: "SelectTrigger",
  setup(e) {
    const t = Le(), { open: o, close: n, toggle: s } = yn({
      selectRootContext: t
    });
    return (l, i) => d(l.$slots, "default", {
      open: a(o),
      close: a(n),
      toggle: a(s)
    });
  }
}), Bn = { class: "select-dropdown" }, Sn = /* @__PURE__ */ p({
  __name: "SelectDropdown",
  setup(e) {
    const t = Le(), o = c(() => !!g(t?.isOpen));
    return (n, s) => Y((r(), f("div", Bn, [
      d(n.$slots, "default")
    ], 512)), [
      [re, o.value]
    ]);
  }
}), wn = /* @__PURE__ */ p({
  __name: "SelectValue",
  setup(e) {
    const t = Le(), { activeOptionValue: o, activeOptions: n, hasValue: s, isMultiple: l, placeholder: i, toggle: u } = _n({
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
function Mn(e) {
  const t = c(() => g(e.props)), o = c(() => t.value?.infiniteScrollOffset ?? Ot), n = c(() => t.value?.draggableMultiplier ?? Dt), s = c(() => W(t.value?.debounceDelay) ? t.value.debounceDelay : kt), [l, i] = Z(), [u, m] = Z(), v = M(0), h = M(0), _ = M(0), $ = M(0);
  function V() {
    m(!1), i(!1);
  }
  const y = qe((P) => {
    e.onScroll?.(P), t.value?.draggable || (_.value = it(e.scrollbar.value, !!t.value?.vertical), $.value = rt(e.scrollbar.value, !!t.value?.horizontal));
    const E = e.scrollbar.value, L = e.content.value, oe = E ? E.clientHeight : 0, ae = E ? E.clientWidth : 0, $e = L ? L.scrollWidth : 0, ce = L ? L.scrollHeight : 0, de = _.value + oe, Ne = $.value + ae, xe = !!(t.value?.vertical && ce - de <= o.value), ee = !!(t.value?.horizontal && $e - Ne <= o.value);
    xe && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), C = Ye((P) => {
    if (e.onMousemove?.(P), !t.value?.draggable || !u.value)
      return;
    P.preventDefault(), P.stopPropagation();
    const E = e.scrollbar.value;
    if (!E)
      return;
    const L = !!t.value?.vertical, oe = !!t.value?.horizontal, ae = P.pageY - ut(E, L), ce = (P.pageX - ct(E, oe) - v.value) * n.value, de = (ae - h.value) * n.value;
    oe && (E.scrollLeft = $.value - ce), L && (E.scrollTop = _.value - de);
  }, s.value);
  function S(P) {
    if (e.onMousedown?.(P), !t.value?.draggable)
      return;
    m(!0), i(!0);
    const E = e.scrollbar.value;
    if (E) {
      const L = !!t.value?.vertical, oe = !!t.value?.horizontal;
      h.value = P.pageY - ut(E, L), v.value = P.pageX - ct(E, oe);
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
const An = /* @__PURE__ */ p({
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
    } = Mn({
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
  Root: An
}, En = /* @__PURE__ */ p({
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
  Root: Rn,
  Option: In,
  Trigger: Tn,
  Dropdown: Sn,
  Value: wn,
  Scrollbar: En
};
function kn(e) {
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
function Dn(e) {
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
function On(e) {
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
function zn(e) {
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
function Ke() {
  return U(Lt, null);
}
const Pn = /* @__PURE__ */ p({
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
    inputMode: { default: qo.TEXT },
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
    const n = e, s = o, l = O(e, "modelValue"), { formRootContext: i, formItemContext: u, isValid: m, isInvalid: v } = Q(), { isDisabled: h, isTextarea: _, hasValue: $, isFocus: V, setFocus: y, setModelValue: C, reset: S } = On({
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
}), Ln = {}, Nn = { class: "input-before" };
function Xn(e, t) {
  return r(), f("div", Nn, [
    d(e.$slots, "default")
  ]);
}
const Fn = /* @__PURE__ */ A(Ln, [["render", Xn]]), jn = { class: "input-after" }, Hn = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = Ke(), { isClearable: o, handleClear: n } = zn({
      inputRootContext: t
    });
    return (s, l) => (r(), f("div", jn, [
      d(s.$slots, "default"),
      a(o) ? (r(), f("button", {
        key: 0,
        type: "button",
        onClick: l[0] || (l[0] = //@ts-ignore
        (...i) => a(n) && a(n)(...i))
      }, " × ")) : F("", !0)
    ]));
  }
}), Un = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Gn = /* @__PURE__ */ p({
  __name: "InputNative",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = Pt({
      inputRootContext: t
    }), { props: s } = Dn({
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
    }, te(a(n), !0)), null, 16, Un)), [
      [mo, a(o)]
    ]);
  }
}), Yn = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], qn = /* @__PURE__ */ p({
  __name: "InputTextarea",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = Pt({
      inputRootContext: t
    }), { props: s } = kn({
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
    }, te(a(n), !0)), null, 16, Yn)), [
      [ht, a(o)]
    ]);
  }
}), Kn = {}, Wn = { class: "input-control" };
function Zn(e, t) {
  return r(), f("div", Wn, [
    d(e.$slots, "default")
  ]);
}
const Jn = /* @__PURE__ */ A(Kn, [["render", Zn]]), Qn = {}, es = { class: "input-group" };
function ts(e, t) {
  return r(), f("div", es, [
    d(e.$slots, "default")
  ]);
}
const os = /* @__PURE__ */ A(Qn, [["render", ts]]), ns = {}, ss = { class: "input-group-addon" };
function ls(e, t) {
  return r(), f("div", ss, [
    d(e.$slots, "default")
  ]);
}
const as = /* @__PURE__ */ A(ns, [["render", ls]]), q = {
  Root: Pn,
  Before: Fn,
  After: Hn,
  Native: Gn,
  Textarea: qn,
  Control: Jn,
  Group: os,
  GroupAddon: as
}, Nt = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function is() {
  return U(Nt, null);
}
function rs(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = c(() => zo(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), l = c(() => !!(s.value || t.value?.checked)), i = c(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: l,
    isIndeterminate: i
  };
}
function us(e) {
  const t = c(() => !!g(e.checkboxRootContext?.isDisabled)), o = c(() => !!g(e.checkboxRootContext?.isActive)), n = c(() => !!g(e.checkboxRootContext?.isIndeterminate)), s = c(() => !!g(e.checkboxRootContext?.isValid)), l = c(() => !!g(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: l
  };
}
const cs = ["value", "disabled", "checked"], ds = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isChecked: v, isDisabled: h, isIndeterminate: _ } = rs({
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
      }, te(n, !0)), null, 16, cs), [
        [bt, s.value]
      ]),
      d(V.$slots, "default")
    ], 2));
  }
}), fs = /* @__PURE__ */ p({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = is(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: l, isInvalid: i } = us({
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
}), ms = {}, ps = { class: "checkbox-title" };
function vs(e, t) {
  return r(), f("span", ps, [
    d(e.$slots, "default")
  ]);
}
const hs = /* @__PURE__ */ A(ms, [["render", vs]]), bs = /* @__PURE__ */ p({
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
  Root: ds,
  Indicator: fs,
  Title: hs,
  Group: bs
};
function gs(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: c(() => o.value === t.value.value),
    isDisabled: n
  };
}
function _s(e) {
  const t = c(() => !!g(e.radioRootContext?.isDisabled)), o = c(() => !!g(e.radioRootContext?.isActive)), n = c(() => !!g(e.radioRootContext?.isValid)), s = c(() => !!g(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Xt = /* @__PURE__ */ Symbol("RadioRootContextKey");
function ys() {
  return U(Xt, null);
}
const Vs = ["value", "disabled"], $s = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isActive: v, isDisabled: h } = gs({
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
      }, te(n, !0)), null, 16, Vs), [
        [po, s.value]
      ]),
      d(_.$slots, "default")
    ], 2));
  }
}), xs = /* @__PURE__ */ p({
  __name: "RadioIndicator",
  setup(e) {
    const t = ys(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = _s({
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
}), Cs = {}, Rs = { class: "radio-title" };
function Is(e, t) {
  return r(), f("span", Rs, [
    d(e.$slots, "default")
  ]);
}
const Ts = /* @__PURE__ */ A(Cs, [["render", Is]]), Bs = /* @__PURE__ */ p({
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
  Root: $s,
  Indicator: xs,
  Title: Ts,
  Group: Bs
};
function Ss(e) {
  const t = c(() => g(e.props)), o = c(() => g(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function ws(e) {
  const t = c(() => !!g(e.switchRootContext?.isDisabled)), o = c(() => !!g(e.switchRootContext?.isActive)), n = c(() => !!g(e.switchRootContext?.isValid)), s = c(() => !!g(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Ft = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function Ms() {
  return U(Ft, null);
}
const As = { class: "switch" }, Es = ["disabled"], ks = /* @__PURE__ */ p({
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
    const t = e, o = O(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: u, isActive: m } = Ss({
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
    }), (v, h) => (r(), f("label", As, [
      Y(T("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (_) => o.value = _),
        type: "checkbox",
        disabled: a(u),
        class: "switch__input"
      }, null, 8, Es), [
        [bt, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), Ds = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = Ms(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = ws({
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
}), Os = {}, zs = { class: "switch-title" };
function Ps(e, t) {
  return r(), f("span", zs, [
    d(e.$slots, "default")
  ]);
}
const Ls = /* @__PURE__ */ A(Os, [["render", Ps]]), Fe = {
  Root: ks,
  Indicator: Ds,
  Title: Ls
}, jt = 1, Ns = -1 / 0, Xs = 1 / 0, Fs = 100, We = 0, Me = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function js(e) {
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
function Hs(e) {
  const t = c(() => g(e.mousewheel)), o = c(() => W(t.value) && t.value > 0 ? t.value : Fs);
  return {
    handleWheel: Ye((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function Us(e) {
  const t = c(() => g(e.inputNumberRootContext?.props)), o = c({
    get: () => g(e.inputNumberRootContext?.modelValue) ?? We,
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
function Gs(e) {
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
const Ys = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ I({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Ns },
    max: { default: Xs },
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
    } = js({
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
}), qs = { class: "input-number-input" }, Ks = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = Ut(), { props: o, modelValue: n } = Us({
      inputNumberRootContext: t
    }), { handleWheel: s } = Hs({
      mousewheel: () => g(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), f("div", qs, [
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
}), Ws = ["disabled"], Zs = /* @__PURE__ */ p({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = Ut(), { handleAction: n, isDisabled: s, isDecrement: l, isIncrement: i } = Gs({
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
    ], 10, Ws));
  }
}), Re = {
  Root: Ys,
  Input: Ks,
  Button: Zs
};
function Js() {
  const e = M(ge.PASSWORD);
  function t() {
    e.value === ge.PASSWORD ? e.value = ge.TEXT : e.value = ge.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Qs = /* @__PURE__ */ p({
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
    const t = e, o = J(), n = O(e, "modelValue"), { currentType: s, handleToggleType: l } = Js();
    return (i, u) => (r(), x(a(q).Root, X(t, {
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (m) => n.value = m),
      "native-type": a(s)
    }), {
      default: b((m) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: b(() => [
            d(i.$slots, "before", k(D(m)))
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
            d(i.$slots, "after", k(D(m)), () => [
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
}), el = {
  Root: Qs
};
function tl(e) {
  const t = c(() => g(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function ol(e) {
  return {
    isDisabled: c(() => {
      const o = e.inputCodeRootContext;
      return o ? !!g(o.isDisabled) : !1;
    })
  };
}
const Gt = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function nl() {
  return U(Gt, null);
}
const sl = /* @__PURE__ */ p({
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
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = tl({
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
}), ll = ["disabled", "aria-disabled"], al = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = nl(), { isDisabled: o } = ol({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), f("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, ll));
  }
}), dt = {
  Root: sl,
  Pin: al
}, Yt = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function qt() {
  return U(Yt, null);
}
function il(e) {
  const t = c(() => g(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function rl(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const ul = /* @__PURE__ */ p({
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
    const o = e, n = O(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: u } = Q(), { isDisabled: m } = il({
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
}), cl = { class: "input-tags-input" }, dl = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    qt();
    const { handleEnter: t, handleTab: o } = rl();
    return (n, s) => (r(), f("div", cl, [
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
}), fl = { class: "input-tags-tags" }, ml = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return qt(), (t, o) => (r(), f("div", fl));
  }
}), fc = {
  Root: ul,
  Input: dl,
  Tags: ml
};
function pl(e) {
  const t = c(() => g(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function vl(e) {
  return {
    isDisabled: c(() => !!g(e.inputRangeRootContext?.isDisabled))
  };
}
const Kt = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function hl() {
  return U(Kt, null);
}
const bl = /* @__PURE__ */ p({
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
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = pl({
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
}), gl = ["aria-disabled"], _l = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = hl(), { isDisabled: o } = vl({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), f("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, gl));
  }
}), mc = {
  Root: bl,
  Slider: _l
}, Wt = /* @__PURE__ */ Symbol("ModalRootContextKey");
function yl() {
  return U(Wt, null);
}
function Vl(e) {
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
function $l(e) {
  function t() {
    e.modalRootContext?.close();
  }
  return {
    close: t
  };
}
const Zt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey"), Jt = "body";
function xl() {
  return U(Zt, {
    props: () => ({
      teleportTarget: Jt
    }),
    t: () => ""
  });
}
function Cl(e) {
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
const Rl = /* @__PURE__ */ p({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: { default: () => Jt },
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = Cl({
      props: () => t
    });
    return H(Zt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), Il = {
  Root: Rl
}, Tl = /* @__PURE__ */ p({
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
    const o = e, n = t, s = O(e, "modelValue"), l = vo(), i = xl(), { close: u, teleportTarget: m } = Vl({
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
        default: b(() => [
          Y(T("div", X({ class: "modal" }, a(l), {
            class: {
              "modal--open": s.value,
              [`modal--position-${e.position}`]: e.position,
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
}), Bl = {}, Sl = { class: "modal-body" };
function wl(e, t) {
  return r(), f("div", Sl, [
    d(e.$slots, "default")
  ]);
}
const Ml = /* @__PURE__ */ A(Bl, [["render", wl]]), Al = /* @__PURE__ */ p({
  __name: "ModalClose",
  setup(e) {
    const t = yl(), { close: o } = $l({
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
}), El = {}, kl = { class: "modal-header" };
function Dl(e, t) {
  return r(), f("div", kl, [
    d(e.$slots, "default")
  ]);
}
const Ol = /* @__PURE__ */ A(El, [["render", Dl]]), zl = {}, Pl = { class: "modal-footer" };
function Ll(e, t) {
  return r(), f("div", Pl, [
    d(e.$slots, "default")
  ]);
}
const Nl = /* @__PURE__ */ A(zl, [["render", Ll]]), Xl = {}, Fl = { class: "modal-title" };
function jl(e, t) {
  return r(), f("div", Fl, [
    d(e.$slots, "default")
  ]);
}
const Hl = /* @__PURE__ */ A(Xl, [["render", jl]]), Ul = {}, Gl = { class: "modal-content" };
function Yl(e, t) {
  return r(), f("div", Gl, [
    d(e.$slots, "default")
  ]);
}
const ql = /* @__PURE__ */ A(Ul, [["render", Yl]]), Kl = {};
function Wl(e, t) {
  return r(), f("div", {
    class: "modal-dialog",
    role: "dialog",
    onClick: t[0] || (t[0] = vt(() => {
    }, ["stop"]))
  }, [
    d(e.$slots, "default")
  ]);
}
const Zl = /* @__PURE__ */ A(Kl, [["render", Wl]]), ne = {
  Root: Tl,
  Body: Ml,
  Close: Al,
  Header: Ol,
  Footer: Nl,
  Title: Hl,
  Content: ql,
  Dialog: Zl
};
function Jl(e) {
  const t = c(() => g(e.props));
  function o() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: o
  };
}
const Ql = /* @__PURE__ */ p({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, n = t, { handleDelete: s } = Jl({
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
}), ea = /* @__PURE__ */ p({
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
}), Qt = {
  Root: Ql,
  Group: ea
}, ta = { class: "layout" }, oa = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), f("div", ta, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), na = {}, sa = { class: "layout-body" };
function la(e, t) {
  return r(), f("main", sa, [
    d(e.$slots, "default")
  ]);
}
const aa = /* @__PURE__ */ A(na, [["render", la]]), ft = {
  Root: oa,
  Body: aa
}, ia = /* @__PURE__ */ p({
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
}), ra = /* @__PURE__ */ p({
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
}), ua = /* @__PURE__ */ p({
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
}), ca = /* @__PURE__ */ p({
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
  Root: ua,
  Item: ca
}, da = /* @__PURE__ */ p({
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
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["wrap", "class"]));
  }
}), Je = {
  Container: ia,
  Row: da,
  Col: ra
}, fa = { class: "section" }, ma = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), f("section", fa, [
      d(t.$slots, "default")
    ]));
  }
}), pa = {}, va = { class: "section-header" };
function ha(e, t) {
  return r(), f("header", va, [
    d(e.$slots, "default")
  ]);
}
const ba = /* @__PURE__ */ A(pa, [["render", ha]]), ga = {}, _a = { class: "section-title" };
function ya(e, t) {
  return r(), f("h1", _a, [
    d(e.$slots, "default")
  ]);
}
const Va = /* @__PURE__ */ A(ga, [["render", ya]]), $a = {}, xa = { class: "section-footer" };
function Ca(e, t) {
  return r(), f("footer", xa, [
    d(e.$slots, "default")
  ]);
}
const Ra = /* @__PURE__ */ A($a, [["render", Ca]]), Ia = {}, Ta = { class: "section-body" };
function Ba(e, t) {
  return r(), f("div", Ta, [
    d(e.$slots, "default")
  ]);
}
const Sa = /* @__PURE__ */ A(Ia, [["render", Ba]]), pc = {
  Root: ma,
  Header: ba,
  Title: Va,
  Footer: Ra,
  Body: Sa
}, wa = /* @__PURE__ */ p({
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
      default: b(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), Ma = {
  Root: wa
}, Aa = /* @__PURE__ */ p({
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
}), Ea = {}, ka = { class: "divider-content" };
function Da(e, t) {
  return r(), f("div", ka, [
    d(e.$slots, "default")
  ]);
}
const Oa = /* @__PURE__ */ A(Ea, [["render", Da]]), mt = {
  Root: Aa,
  Content: Oa
}, vc = {}, za = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(wt).Root, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pa = /* @__PURE__ */ p({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(wt).Group, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), La = {
  install(e) {
    e.component("VButton", za);
  }
}, hc = {
  install(e) {
    e.component("VButtonGroup", Pa);
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
}), Xa = /* @__PURE__ */ p({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = Oe(e, ["title"]);
    return (o, n) => (r(), x(a(fe).Item, k(D(t)), {
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
}), Fa = {
  install(e) {
    e.component("VAccordion", Na), e.component("VAccordionItem", Xa);
  }
}, ja = {
  key: 0,
  class: "v-avatar__label"
}, Ha = /* @__PURE__ */ p({
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
      e.label ? (r(), f("div", ja, N(e.label), 1)) : F("", !0)
    ], 2));
  }
}), Ua = {}, Ga = { class: "v-avatar-group" };
function Ya(e, t) {
  return r(), f("div", Ga, [
    d(e.$slots, "default")
  ]);
}
const qa = /* @__PURE__ */ A(Ua, [["render", Ya]]), Ka = {
  install(e) {
    e.component("VAvatar", Ha);
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
    return (l, i) => (r(), f("div", {
      class: R(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      T("div", Za, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), f(G, { key: 1 }, [
          n.value ? (r(), f("div", Ja, [
            d(l.$slots, "title", {}, () => [
              j(N(e.title), 1)
            ])
          ])) : F("", !0),
          s.value ? (r(), f("div", Qa, [
            d(l.$slots, "description", {}, () => [
              j(N(e.description), 1)
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
}, eo = 0, to = 0, oi = {
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
      ...oi,
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
function ni(e) {
  const t = nt(), o = nt(), n = c(() => W(e.props?.offsetTop) ? e.props.offsetTop : eo), s = c(() => W(e.props?.offsetBottom) ? e.props.offsetBottom : to);
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
const si = /* @__PURE__ */ p({
  __name: "VAffix",
  props: {
    offsetTop: { default: eo },
    offsetBottom: { default: to },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = se("root"), n = se("content");
    return ni({
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
}), li = {
  install(e) {
    e.component("VAffix", si);
  }
}, ai = { class: "v-breadcrumbs" }, ii = /* @__PURE__ */ p({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (r(), f("nav", ai));
  }
}), ri = {
  install(e) {
    e.component("VBreadcrumbs", ii);
  }
};
function ui(e) {
  return {
    content: c(() => e.props.dot ? "" : W(e.props.value) && W(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
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
    return (l, i) => (r(), f("div", {
      class: R(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      s.value ? (r(), f("sup", ci, [
        d(l.$slots, "content", { value: a(n) }, () => [
          j(N(a(n)), 1)
        ])
      ])) : F("", !0)
    ], 2));
  }
}), fi = {
  install(e) {
    e.component("VBadge", di);
  }
}, mi = { class: "v-collapse" }, pi = /* @__PURE__ */ p({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (r(), f("div", mi, [
      d(t.$slots, "default")
    ]));
  }
}), vi = {
  install(e) {
    e.component("VCollapse", pi);
  }
};
function hi(e) {
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
}, oo = /* @__PURE__ */ p({
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
    const o = Oe(e, ["title", "appendToBody", "position"]), n = t, s = J(), l = O(e, "modelValue");
    return (i, u) => (r(), x(a(ne).Root, X({
      modelValue: l.value,
      "onUpdate:modelValue": u[0] || (u[0] = (m) => l.value = m)
    }, o, {
      "append-to-body": e.appendToBody,
      position: e.position,
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
    }, 16, ["modelValue", "append-to-body", "position"]));
  }
}), _i = {
  install(e) {
    e.component("VModal", oo);
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
}), yi = {
  install(e) {
    e.component("VOverlay", Qe);
  }
}, Vi = { class: "v-drawer__dialog" }, $i = {
  key: 0,
  class: "v-drawer__header"
}, xi = { class: "v-drawer__body" }, Ci = {
  key: 1,
  class: "v-drawer__footer"
}, no = /* @__PURE__ */ p({
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
        default: b(() => [
          B(a(Qe), null, {
            default: b(() => [
              Y(T("div", {
                class: R(["v-drawer", {
                  "v-drawer--open": l.value
                }]),
                role: "dialog"
              }, [
                T("div", Vi, [
                  i.value ? (r(), f("div", $i, [
                    d(_.$slots, "header", { close: m }, () => [
                      j(N(e.title), 1)
                    ]),
                    T("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: m
                    }, " x ")
                  ])) : F("", !0),
                  T("div", xi, [
                    d(_.$slots, "default", { close: m })
                  ]),
                  u.value ? (r(), f("div", Ci, [
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
}), Ri = {
  install(e) {
    e.component("VDrawer", no);
  }
};
function bc() {
  return {};
}
const Ii = /* @__PURE__ */ Symbol("VDropdownContextKey"), Ti = { class: "v-dropdown__menu" }, Bi = /* @__PURE__ */ p({
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
    }), H(Ii, {
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
          Y(T("div", Ti, [
            d(h.$slots, "default")
          ], 512), [
            [re, a(l)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), Si = {
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
}), Mi = {
  install(e) {
    e.component("VImage", wi);
  }
}, Ai = /* @__PURE__ */ p({
  __name: "VLayout",
  setup(e) {
    const t = J();
    return (o, n) => (r(), x(a(ft).Root, null, _t({
      default: b(() => [
        B(a(ft).Body, null, {
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
}), Ei = {
  install(e) {
    e.component("VLayout", Ai);
  }
}, gc = /* @__PURE__ */ p({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Je).Container, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), _c = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Je).Row, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), yc = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Je).Col, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ki = { class: "v-pagination" }, Di = /* @__PURE__ */ p({
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
    return (t, o) => (r(), f("div", ki));
  }
}), Oi = {
  install(e) {
    e.component("VPagination", Di);
  }
}, zi = { class: "v-placeholder" }, Pi = /* @__PURE__ */ p({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (r(), f("div", zi, [
      d(t.$slots, "default")
    ]));
  }
}), Li = {
  install(e) {
    e.component("VPlaceholder", Pi);
  }
}, Ni = /* @__PURE__ */ p({
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
}), Xi = {
  install(e) {
    e.component("VScrollbar", Ni);
  }
}, Fi = /* @__PURE__ */ p({
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
}), ji = {
  install(e) {
    e.component("VSpinner", Fi);
  }
}, so = /* @__PURE__ */ Symbol("VTabsContextKey"), Hi = () => U(so, null);
function Ui() {
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
function Gi(e) {
  const t = Ue(), o = c(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const Yi = { class: "v-tabs" }, qi = { class: "v-tabs__content" }, Ki = /* @__PURE__ */ p({
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
    } = Ui();
    function m(v) {
      s.value = v, n("change", v);
    }
    return H(so, {
      props: o,
      modelValue: s,
      tabs: l,
      handleChange: m,
      registerTab: i,
      unregisterTab: u
    }), (v, h) => (r(), f("div", Yi, [
      T("div", qi, [
        d(v.$slots, "default")
      ])
    ]));
  }
}), Wi = /* @__PURE__ */ p({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = J(), n = Hi(), { id: s, isActive: l } = Gi({
      context: n,
      props: t
    }), i = ho({
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
}), Zi = {
  install(e) {
    e.component("VTabs", Ki), e.component("VTab", Wi);
  }
}, Ji = /* @__PURE__ */ p({
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
    return (s, l) => (r(), x(a(Qt).Root, X(o, te(n)), {
      default: b(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Qi = /* @__PURE__ */ p({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Qt).Group, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), er = {
  install(e) {
    e.component("VTag", Ji);
  }
}, Vc = {
  install(e) {
    e.component("VTagGroup", Qi);
  }
}, tr = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Ma).Root, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), or = {
  install(e) {
    e.component("VText", tr);
  }
}, nr = /* @__PURE__ */ p({
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
        d(l.$slots, "default", k(D(u)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), sr = {
  install(e) {
    e.component("VForm", nr);
  }
}, lr = /* @__PURE__ */ p({
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
      default: b((u) => [
        d(l.$slots, "default", k(D(u)))
      ]),
      footer: b((u) => [
        d(l.$slots, "footer", k(D(u)), () => [
          B(a(_e).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: b((u) => [
          d(l.$slots, "header", k(D(u)), () => [
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
}), ar = {
  install(e) {
    e.component("VFormItem", lr);
  }
}, ir = /* @__PURE__ */ p({
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
}), rr = /* @__PURE__ */ p({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Ie).Group, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ur = {
  install(e) {
    e.component("VCheckbox", ir);
  }
}, cr = {
  install(e) {
    e.component("VCheckboxGroup", rr);
  }
}, dr = /* @__PURE__ */ p({
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
            d(s.$slots, "before", k(D(i)))
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
            d(s.$slots, "after", k(D(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), fr = {
  install(e) {
    e.component("VInput", dr);
  }
}, mr = /* @__PURE__ */ p({
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
      default: b(() => [
        (r(!0), f(G, null, me(e.length, (l, i) => (r(), x(a(dt).Pin, {
          key: `pin-${i}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), pr = {
  install(e) {
    e.component("VInputCode", mr);
  }
}, vr = /* @__PURE__ */ p({
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
}), hr = {
  install(e) {
    e.component("VInputNumber", vr);
  }
}, br = /* @__PURE__ */ p({
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
    return (n, s) => (r(), x(a(el).Root, X({
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }, t), null, 16, ["modelValue"]));
  }
}), gr = {
  install(e) {
    e.component("VInputPassword", br);
  }
}, _r = /* @__PURE__ */ p({
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
}), yr = /* @__PURE__ */ p({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Te).Group, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vr = {
  install(e) {
    e.component("VRadio", _r);
  }
}, $r = {
  install(e) {
    e.component("VRadioGroup", yr);
  }
}, xr = /* @__PURE__ */ p({
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
}), Cr = /* @__PURE__ */ p({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(ye).Option, k(D(t)), {
      default: b((s) => [
        d(o.$slots, "default", k(D(s)))
      ]),
      _: 3
    }, 16));
  }
}), Rr = {
  install(e) {
    e.component("VSelect", xr), e.component("VOption", Cr);
  }
}, Ir = /* @__PURE__ */ p({
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
}), Tr = {
  install(e) {
    e.component("VSwitch", Ir);
  }
}, Br = /* @__PURE__ */ p({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Il).Root, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Sr = {
  install(e) {
    e.component("VConfigProvider", Br);
  }
}, wr = { class: "v-progress__value" }, Mr = {
  key: 0,
  class: "v-progress__label"
}, Ar = /* @__PURE__ */ p({
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
      T("div", wr, [
        e.showValue ? (r(), f("div", Mr, [
          d(t.$slots, "default")
        ])) : F("", !0)
      ])
    ], 2));
  }
}), Er = {
  install(e) {
    e.component("VProgress", Ar);
  }
}, kr = /* @__PURE__ */ p({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = J();
    return (n, s) => (r(), x(a(mt).Root, k(D(t)), {
      default: b(() => [
        o?.default ? (r(), x(a(mt).Content, { key: 0 }, {
          default: b(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })) : F("", !0)
      ]),
      _: 3
    }, 16));
  }
}), Dr = {
  install(e) {
    e.component("VDivider", kr);
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
    return (o, n) => (r(), x(a(Ze).Root, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), zr = /* @__PURE__ */ p({
  __name: "VFlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Ze).Item, k(D(t)), {
      default: b(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pr = {
  install(e) {
    e.component("VFlex", Or);
  }
}, $c = {
  install(e) {
    e.component("VFlexItem", zr);
  }
};
function Lr(e) {
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
const Nr = ze(() => Promise.resolve().then(() => Cu)), Xr = ze(() => Promise.resolve().then(() => Su)), Fr = ze(() => Promise.resolve().then(() => Du)), jr = ze(() => Promise.resolve().then(() => Nu)), Hr = /* @__PURE__ */ Symbol("VTableContextKey"), Ur = { class: "v-table" }, Gr = {
  key: 0,
  class: "v-table__native"
}, Yr = { key: 0 }, qr = /* @__PURE__ */ p({
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
    } = Lr(o);
    return H(Hr, {
      props: o
    }), t({
      clearSelection: s,
      getSelectionRows: l,
      clearSort: i,
      sort: u,
      toggleAllSelection: m
    }), (v, h) => (r(), f("div", Ur, [
      e.data.length ? (r(), f("table", Gr, [
        a(n) ? (r(), f("thead", Yr, [
          T("tr", null, [
            (r(!0), f(G, null, me(e.columns, (_) => (r(), x(a(jr), {
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
          (r(!0), f(G, null, me(e.data, (_, $) => (r(), x(a(Nr), {
            key: `row-${$}`
          }, {
            default: b(() => [
              (r(!0), f(G, null, me(e.columns, (V) => (r(), x(a(Fr), {
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
      ])) : (r(), x(a(Xr), { key: 1 }, {
        default: b(() => [
          d(v.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), Kr = {
  install(e) {
    e.component("VTable", qr);
  }
}, Wr = /* @__PURE__ */ p({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (r(), x(a(q).Group, null, {
      default: b(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Zr = /* @__PURE__ */ p({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (r(), x(a(q).GroupAddon, null, {
      default: b(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Jr = {
  install(e) {
    e.component("VInputGroup", Wr), e.component("VInputGroupAddon", Zr);
  }
}, Be = 1e3, Se = 60 * Be, we = 60 * Se, pt = 24 * we, lo = Date.now(), ao = 1e3;
function Qr(e) {
  const [t, o] = Z(), [n, s] = Z(), l = M(0), i = M(0), u = M(0), m = c(() => e.props.now || lo), v = c(() => e.props.interval || ao), h = c(() => 0), _ = c(() => 0), $ = c(() => Math.floor(l.value / pt)), V = c(() => Math.floor(l.value % pt / we)), y = c(() => Math.floor(l.value % we / Se)), C = c(() => Math.floor(l.value % Se / Be)), S = c(() => Math.floor(l.value % Be)), w = c(() => Math.floor(l.value / we)), z = c(() => Math.floor(l.value / Se)), P = c(() => Math.floor(l.value / Be));
  function E() {
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
    L(), l.value = e.props.start, i.value = m.value + e.props.start, o(!1), E();
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
    l.value = ee.start, i.value = m.value + ee.start, ee.autoStart && E();
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
    start: E,
    abort: $e,
    end: ce,
    restart: Ne
  };
}
const eu = { class: "v-countdown" }, tu = /* @__PURE__ */ p({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => ao },
    start: {},
    now: { default: () => lo }
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
    } = Qr({
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
    }), (S, w) => (r(), f("div", eu, [
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
}), ou = {
  install(e) {
    e.component("VCountdown", tu);
  }
}, nu = { class: "v-calendar" }, su = /* @__PURE__ */ p({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), f("div", nu));
  }
}), lu = {
  install(e) {
    e.component("VCalendar", su);
  }
}, xc = {
  install(e) {
    e.use(Fa), e.use(li), e.use(Ka), e.use(Wa), e.use(fi), e.use(ri), e.use(La), e.use(vi), e.use(Sr), e.use(_i), e.use(gi), e.use(Ri), e.use(Si), e.use(Mi), e.use(Oi), e.use(Li), e.use(Xi), e.use(ji), e.use(Zi), e.use(er), e.use(or), e.use(Ei), e.use(sr), e.use(ar), e.use(fr), e.use(ur), e.use(cr), e.use(gr), e.use(hr), e.use(pr), e.use(Vr), e.use($r), e.use(Tr), e.use(Rr), e.use(yi), e.use(ti), e.use(Er), e.use(Dr), e.use(Pr), e.use(Kr), e.use(Jr), e.use(ou), e.use(lu);
  }
}, au = { class: "v-confirm__header" }, iu = { class: "v-confirm__title" }, ru = { class: "v-confirm__body" }, uu = {
  key: 0,
  class: "v-confirm__text"
}, cu = ["innerHTML"], du = { class: "v-confirm__footer" }, fu = /* @__PURE__ */ p({
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
      default: b(() => [
        T("div", {
          class: R(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          T("div", au, [
            T("div", iu, N(e.title), 1),
            T("button", {
              type: "button",
              onClick: s[0] || (s[0] = (l) => o("close"))
            }, " X ")
          ]),
          T("div", ru, [
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, cu)) : (r(), f("div", uu, N(e.message), 1))
          ]),
          T("div", du, [
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
class Cc {
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
      }, l = ie(fu, {
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
const Rc = {
  install() {
  }
}, io = 1500;
function mu(e) {
  const t = c(() => W(e.props.duration) ? e.props.duration : io), [o, n] = Z(!1);
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
const pu = { class: "v-toast__header" }, vu = { class: "v-toast__title" }, hu = { class: "v-toast__body" }, bu = {
  key: 0,
  class: "v-toast__text"
}, gu = ["innerHTML"], _u = /* @__PURE__ */ p({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: io },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: u } = mu({
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
          T("div", pu, [
            T("div", vu, N(e.title), 1),
            e.clearable ? (r(), f("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (h) => a(l)(!1))
            }, " X ")) : F("", !0)
          ]),
          T("div", hu, [
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, gu)) : (r(), f("div", bu, N(e.message), 1))
          ])
        ], 34), [
          [re, a(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class Ic {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = ie(_u, {
      ...t,
      appContext: o
    });
    Ve(n, this.#e);
  }
}
class Tc {
  static open(t, o) {
    const n = ie(oo, {
      ...t,
      appContext: o
    });
    Ve(n, document.body);
  }
}
class Bc {
  static open(t, o) {
    const n = ie(no, {
      ...t,
      appContext: o
    });
    Ve(n, document.body);
  }
}
const Sc = {
  name: "ru",
  vau: {}
}, wc = {
  name: "en",
  vau: {}
}, yu = {}, Vu = { class: "v-table-row" };
function $u(e, t) {
  return r(), f("tr", Vu, [
    d(e.$slots, "default")
  ]);
}
const xu = /* @__PURE__ */ A(yu, [["render", $u]]), Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xu
}, Symbol.toStringTag, { value: "Module" })), Ru = {}, Iu = { class: "v-table-empty" };
function Tu(e, t) {
  return r(), f("div", Iu, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" Данных нет ", -1))
    ])
  ]);
}
const Bu = /* @__PURE__ */ A(Ru, [["render", Tu]]), Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Bu
}, Symbol.toStringTag, { value: "Module" })), wu = {}, Mu = { class: "v-table-body-cell" }, Au = { class: "v-table-body-cell__content" };
function Eu(e, t) {
  return r(), f("td", Mu, [
    T("div", Au, [
      d(e.$slots, "default")
    ])
  ]);
}
const ku = /* @__PURE__ */ A(wu, [["render", Eu]]), Du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ku
}, Symbol.toStringTag, { value: "Module" })), Ou = {}, zu = { class: "v-table-header-cell" };
function Pu(e, t) {
  return r(), f("th", zu, [
    d(e.$slots, "default")
  ]);
}
const Lu = /* @__PURE__ */ A(Ou, [["render", Pu]]), Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lu
}, Symbol.toStringTag, { value: "Module" }));
export {
  fe as Accordion,
  Fa as AccordionPlugin,
  li as AffixPlugin,
  ti as AlertPlugin,
  Wa as AvatarGroupPlugin,
  Ka as AvatarPlugin,
  fi as BadgePlugin,
  ri as BreadcrumbsPlugin,
  wt as Button,
  hc as ButtonGroupPlugin,
  La as ButtonPlugin,
  lu as CalendarPlugin,
  Ie as Checkbox,
  cr as CheckboxGroupPlugin,
  ur as CheckboxPlugin,
  cc as ClickOutsidePlugin,
  vi as CollapsePlugin,
  Il as ConfigProvider,
  Sr as ConfigProviderPlugin,
  Zt as ConfigProviderRootContextKey,
  Rc as ConfirmPlugin,
  Cc as ConfirmService,
  ou as CountdownPlugin,
  Ju as Direction,
  mt as Divider,
  Dr as DividerPlugin,
  Ri as DrawerPlugin,
  Bc as DrawerService,
  Si as DropdownPlugin,
  Ze as Flex,
  ec as FlexAlign,
  $c as FlexItemPlugin,
  tc as FlexJustify,
  Pr as FlexPlugin,
  _e as Form,
  ar as FormItemPlugin,
  sr as FormPlugin,
  Je as Grid,
  Me as INPUT_NUMBER_ACTIONS,
  Xs as INPUT_NUMBER_MAX,
  Ns as INPUT_NUMBER_MIN,
  jt as INPUT_NUMBER_STEP,
  We as INPUT_NUMBER_VALUE_DEFAULT,
  Fs as INPUT_NUMBER_WHEEL_DELAY,
  Mi as ImagePlugin,
  gi as InplacePlugin,
  q as Input,
  dt as InputCode,
  pr as InputCodePlugin,
  Jr as InputGroupPlugin,
  qo as InputModes,
  ge as InputNativeTypes,
  Re as InputNumber,
  hr as InputNumberPlugin,
  el as InputPassword,
  gr as InputPasswordPlugin,
  fr as InputPlugin,
  mc as InputRange,
  fc as InputTags,
  Mt as InputTypes,
  at as IntersectionPresets,
  ft as Layout,
  Ei as LayoutPlugin,
  uc as LoadingPlugin,
  ne as Modal,
  _i as ModalPlugin,
  Tc as ModalService,
  yi as OverlayPlugin,
  Oi as PaginationPlugin,
  Li as PlaceholderPlugin,
  Qu as Position,
  St as Primitive,
  Er as ProgressPlugin,
  Te as Radio,
  $r as RadioGroupPlugin,
  Vr as RadioPlugin,
  zt as Scrollbar,
  Xi as ScrollbarPlugin,
  pc as Section,
  ye as Select,
  Rr as SelectPlugin,
  Zu as Sizes,
  ji as SpinnerPlugin,
  Fe as Switch,
  Tr as SwitchPlugin,
  Kr as TablePlugin,
  Zi as TabsPlugin,
  Qt as Tag,
  Vc as TagGroupPlugin,
  er as TagPlugin,
  Ma as Text,
  or as TextPlugin,
  Wu as Themes,
  Ic as ToastService,
  dc as TooltipPlugin,
  Na as VAccordion,
  Xa as VAccordionItem,
  si as VAffix,
  ei as VAlert,
  Ha as VAvatar,
  qa as VAvatarGroup,
  di as VBadge,
  ii as VBreadcrumbs,
  za as VButton,
  Pa as VButtonGroup,
  su as VCalendar,
  ir as VCheckbox,
  rr as VCheckboxGroup,
  yc as VCol,
  pi as VCollapse,
  Br as VConfigProvider,
  gc as VContainer,
  tu as VCountdown,
  kr as VDivider,
  no as VDrawer,
  Bi as VDropdown,
  Or as VFlex,
  zr as VFlexItem,
  nr as VForm,
  lr as VFormItem,
  wi as VImage,
  bi as VInplace,
  dr as VInput,
  mr as VInputCode,
  Wr as VInputGroup,
  Zr as VInputGroupAddon,
  vr as VInputNumber,
  br as VInputPassword,
  Ai as VLayout,
  oo as VModal,
  Cr as VOption,
  Qe as VOverlay,
  Di as VPagination,
  Pi as VPlaceholder,
  Ar as VProgress,
  _r as VRadio,
  yr as VRadioGroup,
  _c as VRow,
  Ni as VScrollbar,
  xr as VSelect,
  Fi as VSpinner,
  Ir as VSwitch,
  Wi as VTab,
  qr as VTable,
  Ki as VTabs,
  Ji as VTag,
  Qi as VTagGroup,
  tr as VText,
  xc as VauUI,
  rc as VisiblePlugin,
  Yu as booleanToBooleanish,
  be as clone,
  qe as debounce,
  qu as defineFormRules,
  Hu as delay,
  wc as en,
  lt as getProp,
  zo as isBoolean,
  ju as isEmpty,
  Po as isFunction,
  Pe as isNull,
  W as isNumber,
  Ge as isObject,
  ve as isString,
  le as isUndefined,
  Gu as omit,
  Uu as pick,
  Bt as renderSlotFragments,
  Sc as ru,
  vc as ruRU,
  Ye as throttle,
  go as useAccordionItem,
  bo as useAccordionRoot,
  _o as useAccordionTrigger,
  sc as useAnimatedNumber,
  nc as useClipboard,
  xl as useConfigProviderRootContext,
  bc as useDrawer,
  ic as useEmitProxy,
  Jo as useFormItem,
  Ko as useFormRoot,
  Yo as useIntersectionObserver,
  oc as useLoadImage,
  Ku as usePlural,
  ac as useScrollTo,
  Z as useToggle,
  lc as useWindowScroll,
  Et as vClickOutside,
  $n as vLoading,
  xn as vTooltip,
  Vn as vVisible
};
