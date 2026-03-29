import { computed as c, toValue as b, inject as G, defineComponent as p, mergeModels as I, useModel as k, provide as U, createElementBlock as m, openBlock as r, normalizeClass as R, renderSlot as d, unref as a, withDirectives as H, createElementVNode as B, vShow as re, markRaw as io, Fragment as Z, Comment as ro, mergeProps as N, cloneVNode as uo, h as ie, createBlock as $, withCtx as g, ref as D, watch as q, onBeforeUnmount as Xe, onMounted as ue, onScopeDispose as Fe, isRef as Ae, nextTick as co, useId as je, onUnmounted as Ee, withModifiers as pt, useSlots as J, useTemplateRef as se, createCommentVNode as F, normalizeProps as M, guardReactiveProps as A, createTextVNode as j, renderList as Ue, toDisplayString as X, toHandlers as te, vModelDynamic as mo, vModelText as vt, vModelCheckbox as ht, vModelRadio as fo, createVNode as T, withKeys as tt, useAttrs as po, Teleport as bt, Transition as De, createPropsRestProxy as ke, shallowRef as ot, createSlots as gt, reactive as vo, render as _e } from "vue";
import { z as nt } from "zod";
function ho(e) {
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
function bo(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.accordionRootContext?.modelValue)), n = c(() => !!b(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: c(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function go(e) {
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
function yo() {
  const e = Vt(), t = xt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const _o = /* @__PURE__ */ p({
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
    const o = e, n = t, s = k(e, "modelValue"), { setModelValue: l } = ho({
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
}), Vo = /* @__PURE__ */ p({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Vt(), { isActive: n } = bo({
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
}, xo = {}, $o = { class: "accordion-header" };
function Co(e, t) {
  return r(), m("div", $o, [
    d(e.$slots, "default")
  ]);
}
const Ro = /* @__PURE__ */ O(xo, [["render", Co]]), Io = {
  class: "accordion-body",
  role: "region"
}, Bo = { class: "accordion-body__content" }, To = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = xt(), o = c(() => !!b(t?.isActive));
    return (n, s) => H((r(), m("div", Io, [
      B("div", Bo, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [re, o.value]
    ]);
  }
}), wo = {}, So = { class: "accordion-title" };
function Mo(e, t) {
  return r(), m("div", So, [
    d(e.$slots, "default")
  ]);
}
const Ao = /* @__PURE__ */ O(wo, [["render", Mo]]), Eo = ["disabled"], Do = /* @__PURE__ */ p({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = yo(), { isDisabled: n, handleToggle: s } = go({
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
    ], 8, Eo));
  }
}), me = {
  Root: _o,
  Item: Vo,
  Header: Ro,
  Body: To,
  Title: Ao,
  Trigger: Do
};
function ko(e) {
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
function zo(e) {
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
function pu(e) {
  return ze(e) || le(e) ? !0 : pe(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ge(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Po(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function K(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function Oo(e) {
  return !ze(e) && !le(e) && Ge(e) && !Array.isArray(e);
}
function st(e, t) {
  if (!e || !t.trim())
    return null;
  const o = t.split(".");
  let n = e;
  for (const s of o) {
    if (!Oo(n))
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
  if (Po(e))
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
function vu(e) {
  return new Promise((t) => setTimeout(t, e));
}
function hu(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function bu(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function gu(e) {
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
function yu(e) {
  return io(e);
}
function Bt(e) {
  return e ? e.flatMap((t) => t.type === Z ? Bt(t.children) : [t]) : [];
}
const Lo = p({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      if (!o.default)
        return null;
      const n = Bt(o.default()), s = n.findIndex((f) => f.type !== ro);
      if (s === -1)
        return n;
      const l = n[s];
      delete l.props?.ref;
      const i = l.props ? N(t, l.props) : t, u = uo({
        ...l,
        props: {}
      }, i);
      return n.length === 1 ? u : (n[s] = u, n);
    };
  }
}), No = [
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
], Xo = p({
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
    return pe(n) && No.includes(n) ? () => ie(n, t) : n !== "template" ? () => ie(e.as, t, {
      default: o.default
    }) : () => ie(Lo, t, {
      default: o.default
    });
  }
}), qe = {
  Root: Xo
}, Fo = /* @__PURE__ */ p({
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
    const t = e, { formRootContext: o, formItemContext: n } = Q(), { isDisabled: s } = ko({
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
}), jo = /* @__PURE__ */ p({
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
  Root: Fo,
  Group: jo
};
function Uo() {
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
function Go(e) {
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
function _u(e) {
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
function Ho(e, t, o) {
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
}), Yo = Object.freeze({
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
}), Vu = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), xu = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), $u = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Cu = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Ru = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Iu = Object.freeze({
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
function Bu(e, t, o = {}) {
  const {
    rootMargin: n = lt.LAZY_IMAGE.rootMargin,
    threshold: s = lt.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: u } = Ho(e, S, {
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
function Tu() {
  return {};
}
function wu() {
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
function Su() {
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
function Mu(e, t) {
  (pe(e) ? document.querySelector(e) : Ae(e) ? a(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function Au(e, t) {
  return {
    listeners: t.reduce((n, s) => {
      const l = s, i = String(l);
      return n[l] = ((...u) => e(i, ...u)), n;
    }, {})
  };
}
function qo(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = Uo(), { validate: s, clearValidate: l, validatableFormItems: i } = Go({
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
    await co(), await x(!0);
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
function Ko() {
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
function Wo(e) {
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
function Zo(e) {
  const t = je(), { field: o, registerField: n, unregisterField: s } = Ko(), l = c(() => b(e.props)), i = c(() => l.value.name), u = c(() => e.formRootContext?.modelValue.value), f = c(() => e.formRootContext?.props?.rules), v = c(() => i.value && u.value && st(u.value, i.value)), h = c(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), y = c(() => {
    if (!i.value || !f.value)
      return null;
    const L = st(f.value, i.value);
    return L instanceof nt.ZodType ? L : null;
  }), V = c(() => !!y.value), x = c(() => y.value ? !y.value.safeParse(void 0).success : !1), {
    validationStatus: _,
    validationErrors: C,
    clearValidateErrors: w,
    validate: S
  } = Wo({
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
  const E = Ye(() => S(), 300);
  return Ee(() => {
    E.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), q(z, (L) => {
    e.formRootContext?.registerFormItem(L);
  }, {
    deep: !0,
    immediate: !0
  }), q(v, () => E()), q(() => _.value.isSuccess, (L) => {
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
const Jo = /* @__PURE__ */ p({
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
    } = qo({
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
}), Qo = {
  key: 0,
  class: "form-item__header"
}, en = { class: "form-item__body" }, tn = {
  key: 1,
  class: "form-item__footer"
}, on = /* @__PURE__ */ p({
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
    } = Zo({
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
      l?.header ? (r(), m("div", Qo, [
        d(z.$slots, "header", M(A(S.value)))
      ])) : F("", !0),
      B("div", en, [
        d(z.$slots, "default", M(A(S.value)))
      ]),
      l.footer ? (r(), m("div", tn, [
        d(z.$slots, "footer", M(A(S.value)))
      ])) : F("", !0)
    ], 2));
  }
}), nn = {}, sn = { class: "form-item-title" };
function ln(e, t) {
  return r(), m("div", sn, [
    d(e.$slots, "default")
  ]);
}
const an = /* @__PURE__ */ O(nn, [["render", ln]]), rn = {}, un = { class: "form-item-required" };
function cn(e, t) {
  return r(), m("span", un, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" * ", -1))
    ])
  ]);
}
const dn = /* @__PURE__ */ O(rn, [["render", cn]]), mn = { class: "form-item-errors" }, fn = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = It(), o = c(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), m("div", mn, [
      (r(!0), m(Z, null, Ue(o.value, (l, i) => (r(), m("div", {
        key: `error-${i}`,
        class: "form-item-errors__item"
      }, X(l.message), 1))), 128))
    ]));
  }
}), ge = {
  Root: Jo,
  Item: on,
  ItemTitle: an,
  ItemRequired: dn,
  ItemErrors: fn
};
function pn() {
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
function vn(e) {
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
function hn(e) {
  const t = c(() => b(e.modelValue)), o = c(() => b(e.props)), { options: n, registerOption: s, unregisterOption: l } = pn(), { activeOption: i, activeOptions: u } = vn({
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
function bn(e) {
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
function gn(e) {
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
const St = /* @__PURE__ */ Symbol("SelectRootContextKey");
function Pe() {
  return G(St, null);
}
const _n = {
  mounted() {
  },
  unmounted() {
  }
}, Eu = {
  install(e) {
    e.directive("visible", _n);
  }
}, Vn = {
  mounted() {
  },
  unmounted() {
  }
}, Du = {
  install(e) {
    e.directive("loading", Vn);
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
}, ku = {
  install(e) {
    e.directive("click-outside", Mt);
  }
}, xn = {
  mounted() {
  },
  unmounted() {
  }
}, zu = {
  install(e) {
    e.directive("tooltip", xn);
  }
}, $n = ["aria-disabled"], Cn = /* @__PURE__ */ p({
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
    } = hn({
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
    }), (E, L) => H((r(), m("div", {
      class: R(["select", {
        "select--disabled": a(x),
        "select--open": a(V),
        "select--filled": a(y),
        "select--invalid": a(f),
        "select--valid": a(u)
      }]),
      "aria-disabled": a(x)
    }, [
      d(E.$slots, "default")
    ], 10, $n)), [
      [a(Mt), a(C)]
    ]);
  }
}), Rn = /* @__PURE__ */ p({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Pe(), { isActive: n, isDisabled: s, handleChange: l } = bn({
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
}), In = /* @__PURE__ */ p({
  __name: "SelectTrigger",
  setup(e) {
    const t = Pe(), { open: o, close: n, toggle: s } = yn({
      selectRootContext: t
    });
    return (l, i) => d(l.$slots, "default", {
      open: a(o),
      close: a(n),
      toggle: a(s)
    });
  }
}), Bn = { class: "select-dropdown" }, Tn = /* @__PURE__ */ p({
  __name: "SelectDropdown",
  setup(e) {
    const t = Pe(), o = c(() => !!b(t?.isOpen));
    return (n, s) => H((r(), m("div", Bn, [
      d(n.$slots, "default")
    ], 512)), [
      [re, o.value]
    ]);
  }
}), wn = /* @__PURE__ */ p({
  __name: "SelectValue",
  setup(e) {
    const t = Pe(), { activeOptionValue: o, activeOptions: n, hasValue: s, isMultiple: l, placeholder: i, toggle: u } = gn({
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
function Sn(e) {
  const t = c(() => b(e.props)), o = c(() => t.value?.infiniteScrollOffset ?? Dt), n = c(() => t.value?.draggableMultiplier ?? Et), s = c(() => K(t.value?.debounceDelay) ? t.value.debounceDelay : At), [l, i] = W(), [u, f] = W(), v = D(0), h = D(0), y = D(0), V = D(0);
  function x() {
    f(!1), i(!1);
  }
  const _ = Ye((P) => {
    e.onScroll?.(P), t.value?.draggable || (y.value = at(e.scrollbar.value, !!t.value?.vertical), V.value = it(e.scrollbar.value, !!t.value?.horizontal));
    const E = e.scrollbar.value, L = e.content.value, oe = E ? E.clientHeight : 0, ae = E ? E.clientWidth : 0, Ve = L ? L.scrollWidth : 0, ce = L ? L.scrollHeight : 0, de = y.value + oe, Oe = V.value + ae, xe = !!(t.value?.vertical && ce - de <= o.value), ee = !!(t.value?.horizontal && Ve - Oe <= o.value);
    xe && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), C = He((P) => {
    if (e.onMousemove?.(P), !t.value?.draggable || !u.value)
      return;
    P.preventDefault(), P.stopPropagation();
    const E = e.scrollbar.value;
    if (!E)
      return;
    const L = !!t.value?.vertical, oe = !!t.value?.horizontal, ae = P.pageY - rt(E, L), ce = (P.pageX - ut(E, oe) - v.value) * n.value, de = (ae - h.value) * n.value;
    oe && (E.scrollLeft = V.value - ce), L && (E.scrollTop = y.value - de);
  }, s.value);
  function w(P) {
    if (e.onMousedown?.(P), !t.value?.draggable)
      return;
    f(!0), i(!0);
    const E = e.scrollbar.value;
    if (E) {
      const L = !!t.value?.vertical, oe = !!t.value?.horizontal;
      h.value = P.pageY - rt(E, L), v.value = P.pageX - ut(E, oe);
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
const Mn = /* @__PURE__ */ p({
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
    } = Sn({
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
  Root: Mn
}, An = /* @__PURE__ */ p({
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
  Root: Cn,
  Option: Rn,
  Trigger: In,
  Dropdown: Tn,
  Value: wn,
  Scrollbar: An
};
function En(e) {
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
function Dn(e) {
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
function kn(e) {
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
function zn(e) {
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
const Pn = /* @__PURE__ */ p({
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
    inputMode: { default: Yo.TEXT },
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
    const n = e, s = o, l = k(e, "modelValue"), { formRootContext: i, formItemContext: u, isValid: f, isInvalid: v } = Q(), { isDisabled: h, isTextarea: y, hasValue: V, isFocus: x, setFocus: _, setModelValue: C, reset: w } = kn({
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
        "input--valid": a(f),
        [`input--theme-${e.theme}`]: e.theme,
        [`input--size-${e.size}`]: e.size
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
}), On = {}, Ln = { class: "input-before" };
function Nn(e, t) {
  return r(), m("div", Ln, [
    d(e.$slots, "default")
  ]);
}
const Xn = /* @__PURE__ */ O(On, [["render", Nn]]), Fn = { class: "input-after" }, jn = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = Ke(), { isClearable: o, handleClear: n } = zn({
      inputRootContext: t
    });
    return (s, l) => (r(), m("div", Fn, [
      d(s.$slots, "default"),
      a(o) ? (r(), m("button", {
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
    const t = Ke(), { modelValue: o, listeners: n } = zt({
      inputRootContext: t
    }), { props: s } = Dn({
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
      class: "input-field input-field--input"
    }, te(a(n), !0)), null, 16, Un)), [
      [mo, a(o)]
    ]);
  }
}), Hn = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Yn = /* @__PURE__ */ p({
  __name: "InputTextarea",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = zt({
      inputRootContext: t
    }), { props: s } = En({
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
      class: "input-field input-field--textarea"
    }, te(a(n), !0)), null, 16, Hn)), [
      [vt, a(o)]
    ]);
  }
}), qn = {}, Kn = { class: "input-control" };
function Wn(e, t) {
  return r(), m("div", Kn, [
    d(e.$slots, "default")
  ]);
}
const Zn = /* @__PURE__ */ O(qn, [["render", Wn]]), Jn = {}, Qn = { class: "input-group" };
function es(e, t) {
  return r(), m("div", Qn, [
    d(e.$slots, "default")
  ]);
}
const ts = /* @__PURE__ */ O(Jn, [["render", es]]), os = {}, ns = { class: "input-group-addon" };
function ss(e, t) {
  return r(), m("div", ns, [
    d(e.$slots, "default")
  ]);
}
const ls = /* @__PURE__ */ O(os, [["render", ss]]), Y = {
  Root: Pn,
  Before: Xn,
  After: jn,
  Native: Gn,
  Textarea: Yn,
  Control: Zn,
  Group: ts,
  GroupAddon: ls
}, Ot = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function as() {
  return G(Ot, null);
}
function is(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = c(() => zo(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), l = c(() => !!(s.value || t.value?.checked)), i = c(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: l,
    isIndeterminate: i
  };
}
function rs(e) {
  const t = c(() => !!b(e.checkboxRootContext?.isDisabled)), o = c(() => !!b(e.checkboxRootContext?.isActive)), n = c(() => !!b(e.checkboxRootContext?.isIndeterminate)), s = c(() => !!b(e.checkboxRootContext?.isValid)), l = c(() => !!b(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: l
  };
}
const us = ["value", "disabled", "checked"], cs = /* @__PURE__ */ p({
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
    const o = e, n = t, s = k(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), { isChecked: v, isDisabled: h, isIndeterminate: y } = is({
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
      }, te(n, !0)), null, 16, us), [
        [ht, s.value]
      ]),
      d(x.$slots, "default")
    ], 2));
  }
}), ds = /* @__PURE__ */ p({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = as(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: l, isInvalid: i } = rs({
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
}), ms = {}, fs = { class: "checkbox-title" };
function ps(e, t) {
  return r(), m("span", fs, [
    d(e.$slots, "default")
  ]);
}
const vs = /* @__PURE__ */ O(ms, [["render", ps]]), hs = /* @__PURE__ */ p({
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
  Root: cs,
  Indicator: ds,
  Title: vs,
  Group: hs
};
function bs(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: c(() => o.value === t.value.value),
    isDisabled: n
  };
}
function gs(e) {
  const t = c(() => !!b(e.radioRootContext?.isDisabled)), o = c(() => !!b(e.radioRootContext?.isActive)), n = c(() => !!b(e.radioRootContext?.isValid)), s = c(() => !!b(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Lt = /* @__PURE__ */ Symbol("RadioRootContextKey");
function ys() {
  return G(Lt, null);
}
const _s = ["value", "disabled"], Vs = /* @__PURE__ */ p({
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
    const o = e, n = t, s = k(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), { isActive: v, isDisabled: h } = bs({
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
      }, te(n, !0)), null, 16, _s), [
        [fo, s.value]
      ]),
      d(y.$slots, "default")
    ], 2));
  }
}), xs = /* @__PURE__ */ p({
  __name: "RadioIndicator",
  setup(e) {
    const t = ys(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = gs({
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
}), $s = {}, Cs = { class: "radio-title" };
function Rs(e, t) {
  return r(), m("span", Cs, [
    d(e.$slots, "default")
  ]);
}
const Is = /* @__PURE__ */ O($s, [["render", Rs]]), Bs = /* @__PURE__ */ p({
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
  Root: Vs,
  Indicator: xs,
  Title: Is,
  Group: Bs
};
function Ts(e) {
  const t = c(() => b(e.props)), o = c(() => b(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function ws(e) {
  const t = c(() => !!b(e.switchRootContext?.isDisabled)), o = c(() => !!b(e.switchRootContext?.isActive)), n = c(() => !!b(e.switchRootContext?.isValid)), s = c(() => !!b(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Nt = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function Ss() {
  return G(Nt, null);
}
const Ms = { class: "switch" }, As = ["disabled"], Es = /* @__PURE__ */ p({
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
    const t = e, o = k(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: u, isActive: f } = Ts({
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
    }), (v, h) => (r(), m("label", Ms, [
      H(B("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (y) => o.value = y),
        type: "checkbox",
        disabled: a(u),
        class: "switch__input"
      }, null, 8, As), [
        [ht, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), Ds = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = Ss(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = ws({
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
}), ks = {}, zs = { class: "switch-title" };
function Ps(e, t) {
  return r(), m("span", zs, [
    d(e.$slots, "default")
  ]);
}
const Os = /* @__PURE__ */ O(ks, [["render", Ps]]), Ne = {
  Root: Es,
  Indicator: Ds,
  Title: Os
}, Xt = 1, Ls = -1 / 0, Ns = 1 / 0, Xs = 100, We = 0, Se = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Fs(e) {
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
function js(e) {
  const t = c(() => b(e.mousewheel)), o = c(() => K(t.value) && t.value > 0 ? t.value : Xs);
  return {
    handleWheel: He((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function Us(e) {
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
function Gs(e) {
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
const Hs = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ I({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Ls },
    max: { default: Ns },
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
    } = Fs({
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
}), Ys = { class: "input-number-input" }, qs = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = jt(), { props: o, modelValue: n } = Us({
      inputNumberRootContext: t
    }), { handleWheel: s } = js({
      mousewheel: () => b(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), m("div", Ys, [
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
}), Ks = ["disabled"], Ws = /* @__PURE__ */ p({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = jt(), { handleAction: n, isDisabled: s, isDecrement: l, isIncrement: i } = Gs({
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
    ], 10, Ks));
  }
}), Ce = {
  Root: Hs,
  Input: qs,
  Button: Ws
};
function Zs() {
  const e = D(be.PASSWORD);
  function t() {
    e.value === be.PASSWORD ? e.value = be.TEXT : e.value = be.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Js = /* @__PURE__ */ p({
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
    const t = e, o = J(), n = k(e, "modelValue"), { currentType: s, handleToggleType: l } = Zs();
    return (i, u) => (r(), $(a(Y).Root, N(t, {
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (f) => n.value = f),
      "native-type": a(s)
    }), {
      default: g((f) => [
        o?.before ? (r(), $(a(Y).Before, { key: 0 }, {
          default: g(() => [
            d(i.$slots, "before", M(A(f)))
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
            d(i.$slots, "after", M(A(f)), () => [
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
}), Qs = {
  Root: Js
};
function el(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function tl(e) {
  return {
    isDisabled: c(() => !!b(e.inputCodeRootContext?.isDisabled))
  };
}
const Ut = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function ol() {
  return G(Ut, null);
}
const nl = /* @__PURE__ */ p({
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
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = el({
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
}), sl = ["disabled", "aria-disabled"], ll = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = ol(), { isDisabled: o } = tl({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), m("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, sl));
  }
}), ct = {
  Root: nl,
  Pin: ll
}, Gt = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function Ht() {
  return G(Gt, null);
}
function al(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function il(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const rl = /* @__PURE__ */ p({
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
    const o = e, n = k(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: u } = Q(), { isDisabled: f } = al({
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
}), ul = { class: "input-tags-input" }, cl = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    Ht();
    const { handleEnter: t, handleTab: o } = il();
    return (n, s) => (r(), m("div", ul, [
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
}), dl = { class: "input-tags-tags" }, ml = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return Ht(), (t, o) => (r(), m("div", dl));
  }
}), Pu = {
  Root: rl,
  Input: cl,
  Tags: ml
};
function fl(e) {
  const t = c(() => b(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function pl(e) {
  return {
    isDisabled: c(() => !!b(e.inputRangeRootContext?.isDisabled))
  };
}
const Yt = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function vl() {
  return G(Yt, null);
}
const hl = /* @__PURE__ */ p({
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
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = fl({
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
}), bl = ["aria-disabled"], gl = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = vl(), { isDisabled: o } = pl({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), m("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, bl));
  }
}), Ou = {
  Root: hl,
  Slider: gl
}, qt = /* @__PURE__ */ Symbol("ModalRootContextKey");
function yl() {
  return G(qt, null);
}
function _l(e) {
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
function Vl(e) {
  function t() {
    e.modalRootContext?.close();
  }
  return {
    close: t
  };
}
const Kt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey"), Wt = "body";
function xl() {
  return G(Kt, {
    props: () => ({
      teleportTarget: Wt
    }),
    t: () => ""
  });
}
function $l(e) {
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
const Cl = /* @__PURE__ */ p({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: { default: () => Wt },
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = $l({
      props: () => t
    });
    return U(Kt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), Rl = {
  Root: Cl
}, Il = /* @__PURE__ */ p({
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
    const o = e, n = t, s = k(e, "modelValue"), l = po(), i = xl(), { close: u, teleportTarget: f } = _l({
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
}), Bl = {}, Tl = { class: "modal-body" };
function wl(e, t) {
  return r(), m("div", Tl, [
    d(e.$slots, "default")
  ]);
}
const Sl = /* @__PURE__ */ O(Bl, [["render", wl]]), Ml = /* @__PURE__ */ p({
  __name: "ModalClose",
  setup(e) {
    const t = yl(), { close: o } = Vl({
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
}), Al = {}, El = { class: "modal-header" };
function Dl(e, t) {
  return r(), m("div", El, [
    d(e.$slots, "default")
  ]);
}
const kl = /* @__PURE__ */ O(Al, [["render", Dl]]), zl = {}, Pl = { class: "modal-footer" };
function Ol(e, t) {
  return r(), m("div", Pl, [
    d(e.$slots, "default")
  ]);
}
const Ll = /* @__PURE__ */ O(zl, [["render", Ol]]), Nl = {}, Xl = { class: "modal-title" };
function Fl(e, t) {
  return r(), m("div", Xl, [
    d(e.$slots, "default")
  ]);
}
const jl = /* @__PURE__ */ O(Nl, [["render", Fl]]), Ul = {}, Gl = { class: "modal-content" };
function Hl(e, t) {
  return r(), m("div", Gl, [
    d(e.$slots, "default")
  ]);
}
const Yl = /* @__PURE__ */ O(Ul, [["render", Hl]]), ql = {};
function Kl(e, t) {
  return r(), m("div", {
    class: "modal-dialog",
    role: "dialog",
    onClick: t[0] || (t[0] = pt(() => {
    }, ["stop"]))
  }, [
    d(e.$slots, "default")
  ]);
}
const Wl = /* @__PURE__ */ O(ql, [["render", Kl]]), ne = {
  Root: Il,
  Body: Sl,
  Close: Ml,
  Header: kl,
  Footer: Ll,
  Title: jl,
  Content: Yl,
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
}), Ql = /* @__PURE__ */ p({
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
  Root: Jl,
  Group: Ql
}, ea = { class: "layout" }, ta = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), m("div", ea, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), oa = {}, na = { class: "layout-body" };
function sa(e, t) {
  return r(), m("main", na, [
    d(e.$slots, "default")
  ]);
}
const la = /* @__PURE__ */ O(oa, [["render", sa]]), dt = {
  Root: ta,
  Body: la
}, aa = /* @__PURE__ */ p({
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
}), ua = /* @__PURE__ */ p({
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
  Container: aa,
  Row: ca,
  Col: ia
}, da = { class: "section" }, ma = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), m("section", da, [
      d(t.$slots, "default")
    ]));
  }
}), fa = {}, pa = { class: "section-header" };
function va(e, t) {
  return r(), m("header", pa, [
    d(e.$slots, "default")
  ]);
}
const ha = /* @__PURE__ */ O(fa, [["render", va]]), ba = {}, ga = { class: "section-title" };
function ya(e, t) {
  return r(), m("h1", ga, [
    d(e.$slots, "default")
  ]);
}
const _a = /* @__PURE__ */ O(ba, [["render", ya]]), Va = {}, xa = { class: "section-footer" };
function $a(e, t) {
  return r(), m("footer", xa, [
    d(e.$slots, "default")
  ]);
}
const Ca = /* @__PURE__ */ O(Va, [["render", $a]]), Ra = {}, Ia = { class: "section-body" };
function Ba(e, t) {
  return r(), m("div", Ia, [
    d(e.$slots, "default")
  ]);
}
const Ta = /* @__PURE__ */ O(Ra, [["render", Ba]]), Lu = {
  Root: ma,
  Header: ha,
  Title: _a,
  Footer: Ca,
  Body: Ta
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
}), Sa = {
  Root: wa
}, Ma = /* @__PURE__ */ p({
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
}), Aa = {}, Ea = { class: "divider-content" };
function Da(e, t) {
  return r(), m("div", Ea, [
    d(e.$slots, "default")
  ]);
}
const ka = /* @__PURE__ */ O(Aa, [["render", Da]]), mt = {
  Root: Ma,
  Content: ka
}, za = /* @__PURE__ */ p({
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
}), Pa = /* @__PURE__ */ p({
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
}), Jt = {
  Root: za,
  Link: Pa
}, Nu = {}, Oa = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(Tt).Root, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), La = /* @__PURE__ */ p({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Tt).Group, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Na = {
  install(e) {
    e.component("VButton", Oa);
  }
}, Xu = {
  install(e) {
    e.component("VButtonGroup", La);
  }
}, Xa = /* @__PURE__ */ p({
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
}), Fa = /* @__PURE__ */ p({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = ke(e, ["title"]);
    return (o, n) => (r(), $(a(me).Item, M(A(t)), {
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
}), ja = {
  install(e) {
    e.component("VAccordion", Xa), e.component("VAccordionItem", Fa);
  }
}, Ua = {
  key: 0,
  class: "v-avatar__label"
}, Ga = /* @__PURE__ */ p({
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
      e.label ? (r(), m("div", Ua, X(e.label), 1)) : F("", !0)
    ], 2));
  }
}), Ha = {}, Ya = { class: "v-avatar-group" };
function qa(e, t) {
  return r(), m("div", Ya, [
    d(e.$slots, "default")
  ]);
}
const Ka = /* @__PURE__ */ O(Ha, [["render", qa]]), Wa = {
  install(e) {
    e.component("VAvatar", Ga);
  }
}, Za = {
  install(e) {
    e.component("VAvatarGroup", Ka);
  }
}, Ja = { class: "v-alert__content" }, Qa = {
  key: 0,
  class: "v-alert__title"
}, ei = {
  key: 1,
  class: "v-alert__description"
}, ti = /* @__PURE__ */ p({
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
      B("div", Ja, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), m(Z, { key: 1 }, [
          n.value ? (r(), m("div", Qa, [
            d(l.$slots, "title", {}, () => [
              j(X(e.title), 1)
            ])
          ])) : F("", !0),
          s.value ? (r(), m("div", ei, [
            d(l.$slots, "description", {}, () => [
              j(X(e.description), 1)
            ])
          ])) : F("", !0)
        ], 64))
      ])
    ], 2));
  }
}), oi = {
  install(e) {
    e.component("VAlert", ti);
  }
}, Qt = 0, eo = 0, ni = {
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
      ...ni,
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
function si(e) {
  const t = ot(), o = ot(), n = c(() => K(e.props?.offsetTop) ? e.props.offsetTop : Qt), s = c(() => K(e.props?.offsetBottom) ? e.props.offsetBottom : eo);
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
const li = /* @__PURE__ */ p({
  __name: "VAffix",
  props: {
    offsetTop: { default: Qt },
    offsetBottom: { default: eo },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = se("root"), n = se("content");
    return si({
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
}), ai = {
  install(e) {
    e.component("VAffix", li);
  }
}, ii = { class: "v-breadcrumbs" }, ri = /* @__PURE__ */ p({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (r(), m("nav", ii));
  }
}), ui = {
  install(e) {
    e.component("VBreadcrumbs", ri);
  }
};
function ci(e) {
  return {
    content: c(() => e.props.dot ? "" : K(e.props.value) && K(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const di = {
  key: 0,
  class: "v-badge__content"
}, mi = /* @__PURE__ */ p({
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
    const t = e, o = J(), { content: n } = ci({
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
      s.value ? (r(), m("sup", di, [
        d(l.$slots, "content", { value: a(n) }, () => [
          j(X(a(n)), 1)
        ])
      ])) : F("", !0)
    ], 2));
  }
}), fi = {
  install(e) {
    e.component("VBadge", mi);
  }
}, pi = { class: "v-collapse" }, vi = /* @__PURE__ */ p({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (r(), m("div", pi, [
      d(t.$slots, "default")
    ]));
  }
}), hi = {
  install(e) {
    e.component("VCollapse", vi);
  }
};
function bi(e) {
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
const gi = /* @__PURE__ */ p({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: n, handleOpen: s, handleClose: l } = bi({
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
}), yi = {
  install(e) {
    e.component("VInplace", gi);
  }
}, to = /* @__PURE__ */ p({
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
}), _i = {
  install(e) {
    e.component("VModal", to);
  }
}, Vi = { class: "v-drawer__dialog" }, xi = {
  key: 0,
  class: "v-drawer__header"
}, $i = { class: "v-drawer__body" }, Ci = {
  key: 1,
  class: "v-drawer__footer"
}, oo = /* @__PURE__ */ p({
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
            B("div", Vi, [
              i.value ? (r(), m("div", xi, [
                d(y.$slots, "header", { close: f }, () => [
                  j(X(e.title), 1)
                ]),
                B("button", {
                  class: "v-drawer__close-button",
                  type: "button",
                  onClick: f
                }, " x ")
              ])) : F("", !0),
              B("div", $i, [
                d(y.$slots, "default", { close: f })
              ]),
              u.value ? (r(), m("div", Ci, [
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
}), Ri = {
  install(e) {
    e.component("VDrawer", oo);
  }
};
function Fu() {
  return {};
}
const Ii = /* @__PURE__ */ Symbol("VDropdownContextKey"), Bi = { class: "v-dropdown__menu" }, Ti = /* @__PURE__ */ p({
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
    }), U(Ii, {
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
          H(B("div", Bi, [
            d(h.$slots, "default")
          ], 512), [
            [re, a(l)]
          ])
        ]),
        _: 3
      })
    ], 2));
  }
}), wi = {
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
}), Mi = {
  install(e) {
    e.component("VImage", Si);
  }
}, Ai = /* @__PURE__ */ p({
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
}), Ei = {
  install(e) {
    e.component("VLayout", Ai);
  }
}, Di = /* @__PURE__ */ p({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Je).Container, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ju = {
  install(e) {
    e.component("VContainer", Di);
  }
}, ki = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(Je).Row, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Uu = {
  install(e) {
    e.component("VRow", ki);
  }
}, zi = /* @__PURE__ */ p({
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
    return (o, n) => (r(), $(a(Je).Col, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Gu = {
  install(e) {
    e.component("VCol", zi);
  }
}, Pi = { class: "v-pagination" }, Oi = /* @__PURE__ */ p({
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
    return (t, o) => (r(), m("div", Pi));
  }
}), Li = {
  install(e) {
    e.component("VPagination", Oi);
  }
}, Ni = { class: "v-placeholder" }, Xi = /* @__PURE__ */ p({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (r(), m("div", Ni, [
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
    return (s, l) => (r(), $(a(kt).Root, N(o, te(n)), {
      default: g(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ui = {
  install(e) {
    e.component("VScrollbar", ji);
  }
}, Gi = /* @__PURE__ */ p({
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
}), Hi = {
  install(e) {
    e.component("VSpinner", Gi);
  }
}, no = /* @__PURE__ */ Symbol("VTabsContextKey"), Yi = () => G(no, null);
function qi() {
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
function Ki(e) {
  const t = je(), o = c(() => e.context?.modelValue.value === e.props.value);
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
    const o = e, n = t, s = k(e, "modelValue"), {
      tabs: l,
      registerTab: i,
      unregisterTab: u
    } = qi();
    function f(v) {
      s.value = v, n("change", v);
    }
    return U(no, {
      props: o,
      modelValue: s,
      tabs: l,
      handleChange: f,
      registerTab: i,
      unregisterTab: u
    }), (v, h) => (r(), m("div", Wi, [
      B("div", Zi, [
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
    }), i = vo({
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
    return (s, l) => (r(), $(a(Zt).Root, N(o, te(n)), {
      default: g(() => [
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
    return (o, n) => (r(), $(a(Zt).Group, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), nr = {
  install(e) {
    e.component("VTag", tr);
  }
}, Hu = {
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
    return (o, n) => (r(), $(a(Sa).Root, M(A(t)), {
      default: g(() => [
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
    const o = e, n = t, s = k(e, "modelValue");
    return (l, i) => (r(), $(a(ge).Root, N({
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
    }, o, te(n)), {
      default: g((u) => [
        d(l.$slots, "default", M(A(u)))
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
    const o = ke(e, ["title"]), n = t, s = J();
    return (l, i) => (r(), $(a(ge).Item, N(o, te(n)), gt({
      default: g((u) => [
        d(l.$slots, "default", M(A(u)))
      ]),
      footer: g((u) => [
        d(l.$slots, "footer", M(A(u)), () => [
          T(a(ge).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: g((u) => [
          d(l.$slots, "header", M(A(u)), () => [
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
}), dr = /* @__PURE__ */ p({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Re).Group, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), mr = {
  install(e) {
    e.component("VCheckbox", cr);
  }
}, fr = {
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
    const t = e, o = J(), n = k(e, "modelValue");
    return (s, l) => (r(), $(a(Y).Root, N(t, {
      modelValue: n.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i)
    }), {
      default: g((i) => [
        o?.before ? (r(), $(a(Y).Before, { key: 0 }, {
          default: g(() => [
            d(s.$slots, "before", M(A(i)))
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
            d(s.$slots, "after", M(A(i)))
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
}), yr = {
  install(e) {
    e.component("VInputNumber", gr);
  }
}, _r = /* @__PURE__ */ p({
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
    return (n, s) => (r(), $(a(Qs).Root, N({
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }, t), null, 16, ["modelValue"]));
  }
}), Vr = {
  install(e) {
    e.component("VInputPassword", _r);
  }
}, xr = /* @__PURE__ */ p({
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
}), $r = /* @__PURE__ */ p({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Ie).Group, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Cr = {
  install(e) {
    e.component("VRadio", xr);
  }
}, Rr = {
  install(e) {
    e.component("VRadioGroup", $r);
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
}), Br = /* @__PURE__ */ p({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(ye).Option, M(A(t)), {
      default: g((s) => [
        d(o.$slots, "default", M(A(s)))
      ]),
      _: 3
    }, 16));
  }
}), Tr = {
  install(e) {
    e.component("VSelect", Ir), e.component("VOption", Br);
  }
}, wr = /* @__PURE__ */ p({
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
}), Sr = {
  install(e) {
    e.component("VSwitch", wr);
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
    return (o, n) => (r(), $(a(Rl).Root, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ar = {
  install(e) {
    e.component("VConfigProvider", Mr);
  }
}, Er = { class: "v-progress__value" }, Dr = {
  key: 0,
  class: "v-progress__label"
}, kr = /* @__PURE__ */ p({
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
      B("div", Er, [
        e.showValue ? (r(), m("div", Dr, [
          d(t.$slots, "default")
        ])) : F("", !0)
      ])
    ], 2));
  }
}), zr = {
  install(e) {
    e.component("VProgress", kr);
  }
}, Pr = /* @__PURE__ */ p({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = J();
    return (n, s) => (r(), $(a(mt).Root, M(A(t)), {
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
}), Or = {
  install(e) {
    e.component("VDivider", Pr);
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
    return (o, n) => (r(), $(a(Ze).Root, M(A(t)), {
      default: g(() => [
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
    return (o, n) => (r(), $(a(Ze).Item, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Xr = {
  install(e) {
    e.component("VFlex", Lr);
  }
}, Yu = {
  install(e) {
    e.component("VFlexItem", Nr);
  }
}, Fr = /* @__PURE__ */ p({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (r(), $(a(Y).Group, null, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), jr = /* @__PURE__ */ p({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (r(), $(a(Y).GroupAddon, null, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Ur = {
  install(e) {
    e.component("VInputGroup", Fr), e.component("VInputGroupAddon", jr);
  }
}, Be = 1e3, Te = 60 * Be, we = 60 * Te, ft = 24 * we, so = Date.now(), lo = 1e3;
function Gr(e) {
  const [t, o] = W(), [n, s] = W(), l = D(0), i = D(0), u = D(0), f = c(() => e.props.now || so), v = c(() => e.props.interval || lo), h = c(() => 0), y = c(() => 0), V = c(() => Math.floor(l.value / ft)), x = c(() => Math.floor(l.value % ft / we)), _ = c(() => Math.floor(l.value % we / Te)), C = c(() => Math.floor(l.value % Te / Be)), w = c(() => Math.floor(l.value % Be)), S = c(() => Math.floor(l.value / we)), z = c(() => Math.floor(l.value / Te)), P = c(() => Math.floor(l.value / Be));
  function E() {
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
    L(), l.value = e.props.start, i.value = f.value + e.props.start, o(!1), E();
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
    l.value = ee.start, i.value = f.value + ee.start, ee.autoStart && E();
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
    start: E,
    abort: Ve,
    end: ce,
    restart: Oe
  };
}
const Hr = { class: "v-countdown" }, Yr = /* @__PURE__ */ p({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => lo },
    start: {},
    now: { default: () => so }
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
    } = Gr({
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
    }), (w, S) => (r(), m("div", Hr, [
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
}), qr = {
  install(e) {
    e.component("VCountdown", Yr);
  }
}, Kr = { class: "v-calendar" }, Wr = /* @__PURE__ */ p({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", Kr));
  }
}), Zr = {
  install(e) {
    e.component("VCalendar", Wr);
  }
}, qu = /* @__PURE__ */ p({
  __name: "VMenuLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" }
  },
  setup(e) {
    return (t, o) => (r(), $(a(Jt).Link, {
      as: e.as,
      "as-child": e.asChild
    }, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), Ku = /* @__PURE__ */ p({
  __name: "VMenu",
  props: {
    direction: {},
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), $(a(Jt).Root, M(A(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Wu = {
  install(e) {
    e.use(ja), e.use(ai), e.use(Wa), e.use(Za), e.use(fi), e.use(ui), e.use(Na), e.use(hi), e.use(Ar), e.use(_i), e.use(yi), e.use(Ri), e.use(wi), e.use(Mi), e.use(Li), e.use(Fi), e.use(Ui), e.use(Hi), e.use(er), e.use(nr), e.use(lr), e.use(Ei), e.use(ir), e.use(ur), e.use(vr), e.use(mr), e.use(fr), e.use(Vr), e.use(yr), e.use(br), e.use(Cr), e.use(Rr), e.use(Sr), e.use(Tr), e.use(oi), e.use(zr), e.use(Or), e.use(Xr), e.use(Ur), e.use(qr), e.use(Zr);
  }
}, Jr = { class: "v-confirm__header" }, Qr = { class: "v-confirm__title" }, eu = { class: "v-confirm__body" }, tu = {
  key: 0,
  class: "v-confirm__text"
}, ou = ["innerHTML"], nu = { class: "v-confirm__footer" }, su = /* @__PURE__ */ p({
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
      B("div", Jr, [
        B("div", Qr, X(e.title), 1),
        B("button", {
          type: "button",
          onClick: s[0] || (s[0] = (l) => o("close"))
        }, " X ")
      ]),
      B("div", eu, [
        e.useHtml ? (r(), m("div", {
          key: 1,
          class: "v-confirm__text",
          innerHTML: e.message
        }, null, 8, ou)) : (r(), m("div", tu, X(e.message), 1))
      ]),
      B("div", nu, [
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
class Zu {
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
      }, l = ie(su, {
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
const Ju = {
  install() {
  }
}, ao = 1500;
function lu(e) {
  const t = c(() => K(e.props.duration) ? e.props.duration : ao), [o, n] = W(!1);
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
const au = { class: "v-toast__header" }, iu = { class: "v-toast__title" }, ru = { class: "v-toast__body" }, uu = {
  key: 0,
  class: "v-toast__text"
}, cu = ["innerHTML"], du = /* @__PURE__ */ p({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: ao },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: u } = lu({
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
          B("div", au, [
            B("div", iu, X(e.title), 1),
            e.clearable ? (r(), m("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (h) => a(l)(!1))
            }, " X ")) : F("", !0)
          ]),
          B("div", ru, [
            e.useHtml ? (r(), m("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, cu)) : (r(), m("div", uu, X(e.message), 1))
          ])
        ], 34), [
          [re, a(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class Qu {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = ie(du, {
      ...t,
      appContext: o
    });
    _e(n, this.#e);
  }
}
class ec {
  static open(t, o) {
    const n = ie(to, {
      ...t,
      appContext: o
    });
    _e(n, document.body);
  }
}
class tc {
  static open(t, o) {
    const n = ie(oo, {
      ...t,
      appContext: o
    });
    _e(n, document.body);
  }
}
export {
  me as Accordion,
  ja as AccordionPlugin,
  ai as AffixPlugin,
  oi as AlertPlugin,
  Za as AvatarGroupPlugin,
  Wa as AvatarPlugin,
  fi as BadgePlugin,
  ui as BreadcrumbsPlugin,
  Tt as Button,
  Xu as ButtonGroupPlugin,
  Na as ButtonPlugin,
  Zr as CalendarPlugin,
  Re as Checkbox,
  fr as CheckboxGroupPlugin,
  mr as CheckboxPlugin,
  ku as ClickOutsidePlugin,
  Gu as ColPlugin,
  hi as CollapsePlugin,
  Rl as ConfigProvider,
  Ar as ConfigProviderPlugin,
  Kt as ConfigProviderRootContextKey,
  Ju as ConfirmPlugin,
  Zu as ConfirmService,
  ju as ContainerPlugin,
  qr as CountdownPlugin,
  $u as Direction,
  mt as Divider,
  Or as DividerPlugin,
  Ri as DrawerPlugin,
  tc as DrawerService,
  wi as DropdownPlugin,
  Ze as Flex,
  Ru as FlexAlign,
  Yu as FlexItemPlugin,
  Iu as FlexJustify,
  Xr as FlexPlugin,
  ge as Form,
  ur as FormItemPlugin,
  ir as FormPlugin,
  Je as Grid,
  Se as INPUT_NUMBER_ACTIONS,
  Ns as INPUT_NUMBER_MAX,
  Ls as INPUT_NUMBER_MIN,
  Xt as INPUT_NUMBER_STEP,
  We as INPUT_NUMBER_VALUE_DEFAULT,
  Xs as INPUT_NUMBER_WHEEL_DELAY,
  Mi as ImagePlugin,
  yi as InplacePlugin,
  Y as Input,
  ct as InputCode,
  br as InputCodePlugin,
  Ur as InputGroupPlugin,
  Yo as InputModes,
  be as InputNativeTypes,
  Ce as InputNumber,
  yr as InputNumberPlugin,
  Qs as InputPassword,
  Vr as InputPasswordPlugin,
  vr as InputPlugin,
  Ou as InputRange,
  Pu as InputTags,
  wt as InputTypes,
  lt as IntersectionPresets,
  dt as Layout,
  Ei as LayoutPlugin,
  Du as LoadingPlugin,
  Jt as Menu,
  ne as Modal,
  _i as ModalPlugin,
  ec as ModalService,
  Li as PaginationPlugin,
  Fi as PlaceholderPlugin,
  Cu as Position,
  qe as Primitive,
  zr as ProgressPlugin,
  Ie as Radio,
  Rr as RadioGroupPlugin,
  Cr as RadioPlugin,
  Uu as RowPlugin,
  kt as Scrollbar,
  Ui as ScrollbarPlugin,
  Lu as Section,
  ye as Select,
  Tr as SelectPlugin,
  xu as Sizes,
  Hi as SpinnerPlugin,
  Ne as Switch,
  Sr as SwitchPlugin,
  er as TabsPlugin,
  Zt as Tag,
  Hu as TagGroupPlugin,
  nr as TagPlugin,
  Sa as Text,
  lr as TextPlugin,
  Vu as Themes,
  Qu as ToastService,
  zu as TooltipPlugin,
  Xa as VAccordion,
  Fa as VAccordionItem,
  li as VAffix,
  ti as VAlert,
  Ga as VAvatar,
  Ka as VAvatarGroup,
  mi as VBadge,
  ri as VBreadcrumbs,
  Oa as VButton,
  La as VButtonGroup,
  Wr as VCalendar,
  cr as VCheckbox,
  dr as VCheckboxGroup,
  zi as VCol,
  vi as VCollapse,
  Mr as VConfigProvider,
  Di as VContainer,
  Yr as VCountdown,
  Pr as VDivider,
  oo as VDrawer,
  Ti as VDropdown,
  Lr as VFlex,
  Nr as VFlexItem,
  ar as VForm,
  rr as VFormItem,
  Si as VImage,
  gi as VInplace,
  pr as VInput,
  hr as VInputCode,
  Fr as VInputGroup,
  jr as VInputGroupAddon,
  gr as VInputNumber,
  _r as VInputPassword,
  Ai as VLayout,
  Ku as VMenu,
  qu as VMenuLink,
  to as VModal,
  Br as VOption,
  Oi as VPagination,
  Xi as VPlaceholder,
  kr as VProgress,
  xr as VRadio,
  $r as VRadioGroup,
  ki as VRow,
  ji as VScrollbar,
  Ir as VSelect,
  Gi as VSpinner,
  wr as VSwitch,
  Qi as VTab,
  Ji as VTabs,
  tr as VTag,
  or as VTagGroup,
  sr as VText,
  Wu as VauUI,
  Eu as VisiblePlugin,
  gu as booleanToBooleanish,
  he as clone,
  Ye as debounce,
  yu as defineFormRules,
  vu as delay,
  st as getProp,
  zo as isBoolean,
  pu as isEmpty,
  Po as isFunction,
  ze as isNull,
  K as isNumber,
  Ge as isObject,
  pe as isString,
  le as isUndefined,
  bu as omit,
  hu as pick,
  Bt as renderSlotFragments,
  Nu as ruRU,
  He as throttle,
  bo as useAccordionItem,
  ho as useAccordionRoot,
  go as useAccordionTrigger,
  wu as useAnimatedNumber,
  Tu as useClipboard,
  xl as useConfigProviderRootContext,
  Fu as useDrawer,
  Au as useEmitProxy,
  Zo as useFormItem,
  qo as useFormRoot,
  Ho as useIntersectionObserver,
  Bu as useLoadImage,
  _u as usePlural,
  Mu as useScrollTo,
  W as useToggle,
  Su as useWindowScroll,
  Mt as vClickOutside,
  Vn as vLoading,
  xn as vTooltip,
  _n as vVisible
};
