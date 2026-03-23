import { computed as d, toValue as b, inject as B, defineComponent as x, mergeModels as P, useModel as L, provide as M, createElementBlock as v, openBlock as h, normalizeClass as C, renderSlot as _, unref as c, withDirectives as K, createElementVNode as G, vShow as It, ref as V, watch as q, onBeforeUnmount as kn, markRaw as Tn, Fragment as U, onMounted as ke, onScopeDispose as Fe, isRef as Te, nextTick as En, useId as St, onUnmounted as Ue, withModifiers as Vn, useSlots as Ot, useTemplateRef as we, createCommentVNode as de, normalizeProps as be, guardReactiveProps as _e, createTextVNode as J, renderList as kt, toDisplayString as Q, createBlock as Ce, withCtx as ie, mergeProps as re, toHandlers as Ee, vModelDynamic as Pn, vModelText as Tt, vModelCheckbox as Et, vModelRadio as jn, createVNode as Me, withKeys as ot, resolveDynamicComponent as An, Comment as Dn, cloneVNode as Nn, h as Be } from "vue";
function Mn(e) {
  const t = d(() => b(e.props));
  function n(o) {
    const r = b(e.modelValue);
    if (t.value.multiple && Array.isArray(r)) {
      if (!o)
        return;
      const i = new Set(r);
      i.has(o) ? i.delete(o) : i.add(o), e?.onChangeModel?.([...i]);
    } else
      e?.onChangeModel?.(o);
    e?.onChange?.(o);
  }
  return {
    setModelValue: n
  };
}
function Bn(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.accordionRootContext?.modelValue)), o = d(() => !!b(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: d(() => o.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : n.value === t.value.value)
  };
}
function Zn(e) {
  const t = d(() => b(e.accordionItemContext?.props)), n = d(() => !!t.value?.disabled);
  function o() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: n,
    handleToggle: o
  };
}
const Vt = /* @__PURE__ */ Symbol("AccordionRootContextKey"), Pt = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function jt() {
  return B(Vt, null);
}
function At() {
  return B(Pt, null);
}
function Ln() {
  const e = jt(), t = At();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const Xn = /* @__PURE__ */ x({
  __name: "AccordionRoot",
  props: /* @__PURE__ */ P({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ P(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = t, r = L(e, "modelValue"), { setModelValue: i } = Mn({
      props: () => n,
      modelValue: () => r.value,
      onChange: (s) => o("change", s),
      onChangeModel: (s) => {
        r.value = s;
      }
    });
    return M(Vt, {
      props: () => n,
      modelValue: () => r.value,
      setModelValue: i
    }), (s, a) => (h(), v("div", {
      class: C(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      _(s.$slots, "default")
    ], 2));
  }
}), Fn = /* @__PURE__ */ x({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = jt(), { isActive: o } = Bn({
      accordionRootContext: n,
      props: () => t
    });
    return M(Pt, {
      props: () => t,
      isActive: () => o.value
    }), (r, i) => (h(), v("div", {
      class: C(["accordion-item", {
        "accordion-item--open": c(o),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      _(r.$slots, "default", { isActive: c(o) })
    ], 2));
  }
}), E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Un = {}, Jn = { class: "accordion-header" };
function Kn(e, t) {
  return h(), v("div", Jn, [
    _(e.$slots, "default")
  ]);
}
const Gn = /* @__PURE__ */ E(Un, [["render", Kn]]), qn = {
  class: "accordion-body",
  role: "region"
}, Yn = { class: "accordion-body__content" }, Wn = /* @__PURE__ */ x({
  __name: "AccordionBody",
  setup(e) {
    const t = At(), n = d(() => !!b(t?.isActive));
    return (o, r) => K((h(), v("div", qn, [
      G("div", Yn, [
        _(o.$slots, "default")
      ])
    ], 512)), [
      [It, n.value]
    ]);
  }
}), Hn = {}, Qn = { class: "accordion-title" };
function eo(e, t) {
  return h(), v("div", Qn, [
    _(e.$slots, "default")
  ]);
}
const to = /* @__PURE__ */ E(Hn, [["render", eo]]), no = ["disabled"], oo = /* @__PURE__ */ x({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: n } = Ln(), { isDisabled: o, handleToggle: r } = Zn({
      accordionRootContext: t,
      accordionItemContext: n
    });
    return (i, s) => (h(), v("button", {
      type: "button",
      disabled: c(o),
      class: "v-accordion-trigger",
      onClick: s[0] || (s[0] = //@ts-ignore
      (...a) => c(r) && c(r)(...a))
    }, [
      _(i.$slots, "default")
    ], 8, no));
  }
}), hc = {
  Root: Xn,
  Item: Fn,
  Header: Gn,
  Body: Wn,
  Title: to,
  Trigger: oo
};
function ro(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const Dt = /* @__PURE__ */ Symbol("FormRootContextKey"), Nt = /* @__PURE__ */ Symbol("FormItemContextKey");
function Mt() {
  return B(Dt, null);
}
function Bt() {
  return B(Nt, null);
}
function F() {
  const e = Mt(), t = Bt(), n = d(() => !!t?.validationStatus.value.isSuccess), o = d(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: n,
    isInvalid: o
  };
}
const so = ["disabled", "type"], io = /* @__PURE__ */ x({
  __name: "ButtonRoot",
  props: {
    asChild: { type: Boolean },
    as: {},
    loading: { type: Boolean },
    disabled: { type: Boolean },
    plain: { type: Boolean },
    wide: { type: Boolean },
    type: {},
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, { formRootContext: n, formItemContext: o } = F(), { isDisabled: r } = ro({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return (i, s) => (h(), v("button", {
      class: C(["button", [
        {
          "button--disabled": c(r),
          "button--loading": e.loading,
          "button--plain": e.plain,
          "button--wide": e.wide,
          [`button--theme-${e.theme}`]: e.theme,
          [`button--size-${e.size}`]: e.size
        }
      ]]),
      disabled: c(r),
      type: e.type
    }, [
      _(i.$slots, "default")
    ], 10, so));
  }
}), ao = {}, lo = { class: "button-content" };
function co(e, t) {
  return h(), v("span", lo, [
    _(e.$slots, "default")
  ]);
}
const uo = /* @__PURE__ */ E(ao, [["render", co]]), fo = /* @__PURE__ */ x({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: C(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), vc = {
  Root: io,
  Content: uo,
  Group: fo
};
function po() {
  const e = V([]);
  function t(o) {
    const r = e.value.findIndex((i) => i.id === o.id);
    r === -1 ? e.value.push(o) : e.value[r] = o;
  }
  function n(o) {
    e.value = e.value.filter((r) => r.id !== o);
  }
  return {
    formItems: e,
    registerFormItem: t,
    unregisterFormItem: n
  };
}
function mo(e) {
  const t = d(() => b(e.formItems)), n = d(() => t.value.filter((i) => i.isValidatable));
  async function o(i = !1) {
    const a = (await Promise.all(n.value.map((l) => l.validate(i)))).every(Boolean);
    return a ? e.onValid?.() : e.onInvalid?.(), a;
  }
  function r() {
    t.value.forEach((i) => i.clearValidateErrors());
  }
  return {
    validatableFormItems: n,
    validate: o,
    clearValidate: r
  };
}
function ee(e = !1) {
  const t = V(e);
  function n(r) {
    t.value = r;
  }
  function o() {
    n(!t.value);
  }
  return [
    t,
    n,
    o
  ];
}
function gc(e) {
  const t = new Intl.PluralRules("ru-RU"), n = /* @__PURE__ */ new Map([
    ["one", e[0]],
    ["few", e[1]],
    ["many", e[2]]
  ]);
  function o(r) {
    if (Number.isNaN(r) || r < 0)
      return;
    const i = t.select(r);
    return n.get(i);
  }
  return {
    plural: o
  };
}
function ho(e, t, n) {
  let o;
  const r = q(e, (a) => {
    s(), a && (o = new IntersectionObserver(t, n), o.observe(a));
  }, {
    immediate: !0,
    flush: "post"
  });
  function i() {
    s(), r();
  }
  function s() {
    o && (o.disconnect(), o = void 0);
  }
  return kn(() => {
    i();
  }), {
    stop: i
  };
}
const Zt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), vo = Object.freeze({
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
}), yc = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), bc = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), _c = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), $c = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), xc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Rc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), rt = Object.freeze({
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
function go(e) {
  return typeof e == "boolean";
}
function fe(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ve(e) {
  return e === null;
}
function Je(e) {
  return !Ve(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function te(e) {
  return typeof e > "u";
}
function zc(e) {
  return Ve(e) || te(e) ? !0 : fe(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Je(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function yo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function ae(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function bo(e) {
  return !Ve(e) && !te(e) && Je(e) && !Array.isArray(e);
}
function st(e, t) {
  if (!e || !t.trim())
    return null;
  const n = t.split(".");
  let o = e;
  for (const r of n) {
    if (!bo(o))
      return null;
    o = o[r];
  }
  return o ?? null;
}
function he(e, t = /* @__PURE__ */ new WeakMap()) {
  if (e === null || typeof e != "object")
    return e;
  if (t.has(e))
    return t.get(e);
  if (e instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    return n.setTime(e.getTime()), n;
  }
  if (e instanceof RegExp) {
    const n = new RegExp(e.source, e.flags);
    return t.set(e, n), n;
  }
  if (e instanceof Map) {
    const n = /* @__PURE__ */ new Map();
    return t.set(e, n), e.forEach((o, r) => {
      n.set(he(r, t), he(o, t));
    }), n;
  }
  if (e instanceof Set) {
    const n = /* @__PURE__ */ new Set();
    return t.set(e, n), e.forEach((o) => {
      n.add(he(o, t));
    }), n;
  }
  if (e instanceof ArrayBuffer) {
    const n = e.slice(0);
    return t.set(e, n), n;
  }
  if (yo(e))
    return e;
  if (Array.isArray(e)) {
    const n = [];
    t.set(e, n);
    for (let o = 0; o < e.length; o++)
      n[o] = he(e[o], t);
    return n;
  }
  if (Je(e)) {
    const n = Object.create(Object.getPrototypeOf(e));
    t.set(e, n);
    const o = [
      ...Object.getOwnPropertyNames(e),
      ...Object.getOwnPropertySymbols(e)
    ];
    for (const r of o) {
      const i = Object.getOwnPropertyDescriptor(e, r);
      i && ("value" in i ? Object.defineProperty(n, r, {
        ...i,
        value: he(i.value, t)
      }) : Object.defineProperty(n, r, i));
    }
    return n;
  }
  return e;
}
function wc(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Cc(e, t) {
  const n = {};
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
  return n;
}
function Ic(e, t) {
  const n = { ...e };
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && delete n[o];
  return n;
}
function Sc(e) {
  return e ? "true" : "false";
}
function Ke(e, t, n = {}) {
  const {
    noTrailing: o = !1,
    noLeading: r = !1,
    debounceMode: i = void 0
  } = n;
  let s = null, a = !1, l = 0, u = null;
  function f() {
    s && (clearTimeout(s), s = null);
  }
  function g(y = {}) {
    const { upcomingOnly: $ = !1 } = y;
    f(), a = !$;
  }
  function p() {
    if (l = Date.now(), u) {
      const y = u;
      e.apply(this, y), u = null;
    }
  }
  function m(...y) {
    if (a)
      return;
    const $ = Date.now() - l;
    u = y;
    function O() {
      s = null;
    }
    f(), !r && i && !s && p.call(this), te(i) && $ > t ? r ? (l = Date.now(), o || (s = setTimeout(i ? O : p.bind(this), t))) : p.call(this) : o || (s = setTimeout(
      i ? O : p.bind(this),
      te(i) ? t - $ : t
    ));
  }
  return m.cancel = g, m;
}
function Ge(e, t, n = {}) {
  const { atBegin: o = !1 } = n;
  return Ke(e, t, {
    debounceMode: o
  });
}
function Oc(e) {
  return Tn(e);
}
function Lt(e) {
  return e ? e.flatMap((t) => t.type === U ? Lt(t.children) : [t]) : [];
}
function kc(e, t, n = {}) {
  const {
    rootMargin: o = rt.LAZY_IMAGE.rootMargin,
    threshold: r = rt.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: i = !0,
    immediate: s = !1
  } = n, { stop: a } = ho(e, k, {
    rootMargin: o,
    threshold: r
  }), [l, u] = ee(), [f, g] = ee(), p = V(""), m = V(""), y = V(""), $ = fe(t) ? { src: t } : t;
  function O() {
    if (l.value || f.value)
      return;
    const T = new Image();
    T.src = $.src, $.srcset && (T.srcset = $.srcset), $.sizes && (T.sizes = $.sizes), T.onload = () => {
      p.value = $.src, m.value = $.srcset || "", y.value = $.sizes || "", u(!0), g(!1);
    }, T.onerror = () => {
      u(!1), g(!0);
    };
  }
  function k(T) {
    T.forEach((w) => {
      w.isIntersecting && !l.value && !f.value && O();
    });
  }
  return ke(() => {
    if (s || i && "loading" in HTMLImageElement.prototype) {
      O();
      return;
    }
  }), {
    isLoaded: l,
    hasError: f,
    imageSrc: p,
    imageSrcset: m,
    imageSizes: y,
    loadImage: O,
    stop: a
  };
}
function Tc() {
  return {};
}
function Ec() {
  if (!window)
    return {
      number: V(0),
      animate: () => {
      }
    };
  const e = V(0);
  function t(n, o, r) {
    let i;
    function s(a) {
      i || (i = a);
      const l = Math.min((a - i) / r, 1);
      e.value = Math.floor(l * (o - n) + n), l < 1 && window.requestAnimationFrame(s);
    }
    window.requestAnimationFrame(s);
  }
  return {
    number: e,
    animate: t
  };
}
function Vc() {
  if (!window)
    return {
      x: V(0),
      y: V(0)
    };
  const e = V(window.scrollX), t = V(window.scrollY);
  function n() {
    window && (e.value = window.scrollX, t.value = window.scrollY);
  }
  function o(r) {
    window.scrollTo(r);
  }
  return ke(() => {
    n(), window.addEventListener("scroll", n);
  }), Fe(() => {
    window.removeEventListener("scroll", n);
  }), {
    x: e,
    y: t,
    setScroll: o
  };
}
function Pc(e, t) {
  (fe(e) ? document.querySelector(e) : Te(e) ? c(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function jc(e, t) {
  return {
    listeners: t.reduce((o, r) => {
      const i = r, s = String(i);
      return o[i] = ((...a) => e(s, ...a)), o;
    }, {})
  };
}
function _o(e) {
  const { formItems: t, registerFormItem: n, unregisterFormItem: o } = po(), { validate: r, clearValidate: i, validatableFormItems: s } = mo({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [a, l] = ee(!1), u = V(!1), f = V("");
  function g() {
    t.value.forEach((y) => y.reset()), i();
  }
  q(s, async (y) => {
    const $ = y.map((k) => k.id).sort().join(",");
    if ($ === f.value)
      return;
    if (f.value = $, y.length === 0) {
      u.value && l(!0);
      return;
    }
    u.value = !0;
    const O = await r(!0);
    l(O);
  }, {
    immediate: !0
  });
  const p = Ge(async () => {
    const y = await r(!0);
    l(y);
  }, 400);
  async function m(y = !1) {
    const $ = await r(y);
    return l($), $;
  }
  return q(() => b(e.modelValue), () => {
    p();
  }, {
    deep: !0
  }), ke(async () => {
    await En(), await m(!0);
  }), Fe(() => {
    p.cancel();
  }), {
    isValid: a,
    validate: m,
    clearValidate: i,
    registerFormItem: n,
    unregisterFormItem: o,
    reset: g
  };
}
function $o() {
  const e = V();
  function t(o) {
    e.value = o;
  }
  function n() {
    e.value = void 0;
  }
  return {
    field: e,
    registerField: t,
    unregisterField: n
  };
}
function xo(e) {
  const t = d(() => b(e.data)), n = d(() => b(e.schema)), o = V({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), r = V([]);
  function i(l) {
    o.value = { ...o.value, ...l };
  }
  function s() {
    r.value = [];
  }
  async function a(l = !1) {
    if (!t.value || !n.value)
      return !1;
    i({ isValidating: !0 });
    const u = await n.value.safeParseAsync(t.value);
    return i({ isValidating: !1 }), u.success ? (i({ isError: !1, isSuccess: !0 }), e.onValid?.(), !0) : (l || (i({ isError: !0, isSuccess: !1 }), u.error && (r.value = u.error.issues)), e.onInvalid?.(), !1);
  }
  return {
    validationStatus: o,
    validationErrors: r,
    clearValidateErrors: s,
    validate: a
  };
}
function R(e, t, n) {
  function o(a, l) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: l,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, l);
    const u = s.prototype, f = Object.keys(u);
    for (let g = 0; g < f.length; g++) {
      const p = f[g];
      p in a || (a[p] = u[p].bind(a));
    }
  }
  const r = n?.Parent ?? Object;
  class i extends r {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(a) {
    var l;
    const u = n?.Parent ? new i() : this;
    o(u, a), (l = u._zod).deferred ?? (l.deferred = []);
    for (const f of u._zod.deferred)
      f();
    return u;
  }
  return Object.defineProperty(s, "init", { value: o }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class ce extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Xt extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Ft = {};
function ne(e) {
  return Ft;
}
function Ut(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, r]) => t.indexOf(+o) === -1).map(([o, r]) => r);
}
function Ze(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function qe(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function Ye(e) {
  return e == null;
}
function We(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
const it = /* @__PURE__ */ Symbol("evaluating");
function S(e, t, n) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== it)
        return o === void 0 && (o = it, o = n()), o;
    },
    set(r) {
      Object.defineProperty(e, t, {
        value: r
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function se(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Y(...e) {
  const t = {};
  for (const n of e) {
    const o = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function at(e) {
  return JSON.stringify(e);
}
const Jt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Ie(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Ro = qe(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function $e(e) {
  if (Ie(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(Ie(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Kt(e) {
  return $e(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const zo = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function wo(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function W(e, t, n) {
  const o = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (o._zod.parent = e), o;
}
function Z(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function Co(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function Io(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = Y(e._zod.def, {
    get shape() {
      const s = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (s[a] = n.shape[a]);
      }
      return se(this, "shape", s), s;
    },
    checks: []
  });
  return W(e, i);
}
function So(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = Y(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete s[a];
      }
      return se(this, "shape", s), s;
    },
    checks: []
  });
  return W(e, i);
}
function Oo(e, t) {
  if (!$e(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = e._zod.def.shape;
    for (const s in t)
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const r = Y(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return se(this, "shape", i), i;
    }
  });
  return W(e, r);
}
function ko(e, t) {
  if (!$e(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = Y(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return se(this, "shape", o), o;
    }
  });
  return W(e, n);
}
function To(e, t) {
  const n = Y(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return se(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return W(e, n);
}
function Eo(e, t, n) {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = Y(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, l = { ...a };
      if (n)
        for (const u in n) {
          if (!(u in a))
            throw new Error(`Unrecognized key: "${u}"`);
          n[u] && (l[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u]);
        }
      else
        for (const u in a)
          l[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u];
      return se(this, "shape", l), l;
    },
    checks: []
  });
  return W(t, s);
}
function Vo(e, t, n) {
  const o = Y(t._zod.def, {
    get shape() {
      const r = t._zod.def.shape, i = { ...r };
      if (n)
        for (const s in n) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          n[s] && (i[s] = new e({
            type: "nonoptional",
            innerType: r[s]
          }));
        }
      else
        for (const s in r)
          i[s] = new e({
            type: "nonoptional",
            innerType: r[s]
          });
      return se(this, "shape", i), i;
    }
  });
  return W(t, o);
}
function le(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function Gt(e, t) {
  return t.map((n) => {
    var o;
    return (o = n).path ?? (o.path = []), n.path.unshift(e), n;
  });
}
function Re(e) {
  return typeof e == "string" ? e : e?.message;
}
function oe(e, t, n) {
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const r = Re(e.inst?._zod.def?.error?.(e)) ?? Re(t?.error?.(e)) ?? Re(n.customError?.(e)) ?? Re(n.localeError?.(e)) ?? "Invalid input";
    o.message = r;
  }
  return delete o.inst, delete o.continue, t?.reportInput || delete o.input, o;
}
function He(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function xe(...e) {
  const [t, n, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: o
  } : { ...t };
}
const qt = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Ze, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, Yt = R("$ZodError", qt), Wt = R("$ZodError", qt, { Parent: Error });
function Po(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const r of e.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: n };
}
function jo(e, t = (n) => n.message) {
  const n = { _errors: [] }, o = (r) => {
    for (const i of r.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((s) => o({ issues: s }));
      else if (i.code === "invalid_key")
        o({ issues: i.issues });
      else if (i.code === "invalid_element")
        o({ issues: i.issues });
      else if (i.path.length === 0)
        n._errors.push(t(i));
      else {
        let s = n, a = 0;
        for (; a < i.path.length; ) {
          const l = i.path[a];
          a === i.path.length - 1 ? (s[l] = s[l] || { _errors: [] }, s[l]._errors.push(t(i))) : s[l] = s[l] || { _errors: [] }, s = s[l], a++;
        }
      }
  };
  return o(e), n;
}
const Qe = (e) => (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new ce();
  if (s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((l) => oe(l, i, ne())));
    throw Jt(a, r?.callee), a;
  }
  return s.value;
}, et = (e) => async (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((l) => oe(l, i, ne())));
    throw Jt(a, r?.callee), a;
  }
  return s.value;
}, Pe = (e) => (t, n, o) => {
  const r = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, r);
  if (i instanceof Promise)
    throw new ce();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Yt)(i.issues.map((s) => oe(s, r, ne())))
  } : { success: !0, data: i.value };
}, Ao = /* @__PURE__ */ Pe(Wt), je = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => oe(s, r, ne())))
  } : { success: !0, data: i.value };
}, Do = /* @__PURE__ */ je(Wt), No = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Qe(e)(t, n, r);
}, Mo = (e) => (t, n, o) => Qe(e)(t, n, o), Bo = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return et(e)(t, n, r);
}, Zo = (e) => async (t, n, o) => et(e)(t, n, o), Lo = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Pe(e)(t, n, r);
}, Xo = (e) => (t, n, o) => Pe(e)(t, n, o), Fo = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return je(e)(t, n, r);
}, Uo = (e) => async (t, n, o) => je(e)(t, n, o), pe = /* @__PURE__ */ R("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Jo = /* @__PURE__ */ R("$ZodCheckMaxLength", (e, t) => {
  var n;
  pe.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Ye(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < r && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length <= t.maximum)
      return;
    const s = He(r);
    o.issues.push({
      origin: s,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), Ko = /* @__PURE__ */ R("$ZodCheckMinLength", (e, t) => {
  var n;
  pe.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Ye(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > r && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length >= t.minimum)
      return;
    const s = He(r);
    o.issues.push({
      origin: s,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: r,
      inst: e,
      continue: !t.abort
    });
  };
}), Go = /* @__PURE__ */ R("$ZodCheckLengthEquals", (e, t) => {
  var n;
  pe.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !Ye(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.minimum = t.length, r.maximum = t.length, r.length = t.length;
  }), e._zod.check = (o) => {
    const r = o.value, i = r.length;
    if (i === t.length)
      return;
    const s = He(r), a = i > t.length;
    o.issues.push({
      origin: s,
      ...a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), qo = /* @__PURE__ */ R("$ZodCheckOverwrite", (e, t) => {
  pe.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class Yo {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const o = t.split(`
`).filter((s) => s), r = Math.min(...o.map((s) => s.length - s.trimStart().length)), i = o.map((s) => s.slice(r)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of i)
      this.content.push(s);
  }
  compile() {
    const t = Function, n = this?.args, r = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...n, r.join(`
`));
  }
}
const Wo = {
  major: 4,
  minor: 3,
  patch: 6
}, A = /* @__PURE__ */ R("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Wo;
  const o = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && o.unshift(e);
  for (const r of o)
    for (const i of r._zod.onattach)
      i(e);
  if (o.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const r = (s, a, l) => {
      let u = le(s), f;
      for (const g of a) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(s))
            continue;
        } else if (u)
          continue;
        const p = s.issues.length, m = g._zod.check(s);
        if (m instanceof Promise && l?.async === !1)
          throw new ce();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, s.issues.length !== p && (u || (u = le(s, p)));
          });
        else {
          if (s.issues.length === p)
            continue;
          u || (u = le(s, p));
        }
      }
      return f ? f.then(() => s) : s;
    }, i = (s, a, l) => {
      if (le(s))
        return s.aborted = !0, s;
      const u = r(a, o, l);
      if (u instanceof Promise) {
        if (l.async === !1)
          throw new ce();
        return u.then((f) => e._zod.parse(f, l));
      }
      return e._zod.parse(u, l);
    };
    e._zod.run = (s, a) => {
      if (a.skipChecks)
        return e._zod.parse(s, a);
      if (a.direction === "backward") {
        const u = e._zod.parse({ value: s.value, issues: [] }, { ...a, skipChecks: !0 });
        return u instanceof Promise ? u.then((f) => i(f, s, a)) : i(u, s, a);
      }
      const l = e._zod.parse(s, a);
      if (l instanceof Promise) {
        if (a.async === !1)
          throw new ce();
        return l.then((u) => r(u, o, a));
      }
      return r(l, o, a);
    };
  }
  S(e, "~standard", () => ({
    validate: (r) => {
      try {
        const i = Ao(e, r);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Do(e, r).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Ho = /* @__PURE__ */ R("$ZodUnknown", (e, t) => {
  A.init(e, t), e._zod.parse = (n) => n;
}), Qo = /* @__PURE__ */ R("$ZodNever", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function lt(e, t, n) {
  e.issues.length && t.issues.push(...Gt(n, e.issues)), t.value[n] = e.value;
}
const er = /* @__PURE__ */ R("$ZodArray", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value;
    if (!Array.isArray(r))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: r,
        inst: e
      }), n;
    n.value = Array(r.length);
    const i = [];
    for (let s = 0; s < r.length; s++) {
      const a = r[s], l = t.element._zod.run({
        value: a,
        issues: []
      }, o);
      l instanceof Promise ? i.push(l.then((u) => lt(u, n, s))) : lt(l, n, s);
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
});
function Se(e, t, n, o, r) {
  if (e.issues.length) {
    if (r && !(n in o))
      return;
    t.issues.push(...Gt(n, e.issues));
  }
  e.value === void 0 ? n in o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Ht(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const n = Co(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Qt(e, t, n, o, r, i) {
  const s = [], a = r.keySet, l = r.catchall._zod, u = l.def.type, f = l.optout === "optional";
  for (const g in t) {
    if (a.has(g))
      continue;
    if (u === "never") {
      s.push(g);
      continue;
    }
    const p = l.run({ value: t[g], issues: [] }, o);
    p instanceof Promise ? e.push(p.then((m) => Se(m, n, g, t, f))) : Se(p, n, g, t, f);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const tr = /* @__PURE__ */ R("$ZodObject", (e, t) => {
  if (A.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const a = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const l = { ...a };
        return Object.defineProperty(t, "shape", {
          value: l
        }), l;
      }
    });
  }
  const o = qe(() => Ht(t));
  S(e._zod, "propValues", () => {
    const a = t.shape, l = {};
    for (const u in a) {
      const f = a[u]._zod;
      if (f.values) {
        l[u] ?? (l[u] = /* @__PURE__ */ new Set());
        for (const g of f.values)
          l[u].add(g);
      }
    }
    return l;
  });
  const r = Ie, i = t.catchall;
  let s;
  e._zod.parse = (a, l) => {
    s ?? (s = o.value);
    const u = a.value;
    if (!r(u))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), a;
    a.value = {};
    const f = [], g = s.shape;
    for (const p of s.keys) {
      const m = g[p], y = m._zod.optout === "optional", $ = m._zod.run({ value: u[p], issues: [] }, l);
      $ instanceof Promise ? f.push($.then((O) => Se(O, a, p, u, y))) : Se($, a, p, u, y);
    }
    return i ? Qt(f, u, a, l, o.value, e) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), nr = /* @__PURE__ */ R("$ZodObjectJIT", (e, t) => {
  tr.init(e, t);
  const n = e._zod.parse, o = qe(() => Ht(t)), r = (p) => {
    const m = new Yo(["shape", "payload", "ctx"]), y = o.value, $ = (w) => {
      const z = at(w);
      return `shape[${z}]._zod.run({ value: input[${z}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const O = /* @__PURE__ */ Object.create(null);
    let k = 0;
    for (const w of y.keys)
      O[w] = `key_${k++}`;
    m.write("const newResult = {};");
    for (const w of y.keys) {
      const z = O[w], I = at(w), me = p[w]?._zod?.optout === "optional";
      m.write(`const ${z} = ${$(w)};`), me ? m.write(`
        if (${z}.issues.length) {
          if (${I} in input) {
            payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${I}, ...iss.path] : [${I}]
            })));
          }
        }
        
        if (${z}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${z}.value;
        }
        
      `) : m.write(`
        if (${z}.issues.length) {
          payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${I}, ...iss.path] : [${I}]
          })));
        }
        
        if (${z}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${z}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const T = m.compile();
    return (w, z) => T(p, w, z);
  };
  let i;
  const s = Ie, a = !Ft.jitless, u = a && Ro.value, f = t.catchall;
  let g;
  e._zod.parse = (p, m) => {
    g ?? (g = o.value);
    const y = p.value;
    return s(y) ? a && u && m?.async === !1 && m.jitless !== !0 ? (i || (i = r(t.shape)), p = i(p, m), f ? Qt([], y, p, m, g, e) : p) : n(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: y,
      inst: e
    }), p);
  };
});
function ct(e, t, n, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const r = e.filter((i) => !le(i));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((i) => i.issues.map((s) => oe(s, o, ne())))
  }), t);
}
const or = /* @__PURE__ */ R("$ZodUnion", (e, t) => {
  A.init(e, t), S(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), S(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), S(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), S(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${r.map((i) => We(i.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, o = t.options[0]._zod.run;
  e._zod.parse = (r, i) => {
    if (n)
      return o(r, i);
    let s = !1;
    const a = [];
    for (const l of t.options) {
      const u = l._zod.run({
        value: r.value,
        issues: []
      }, i);
      if (u instanceof Promise)
        a.push(u), s = !0;
      else {
        if (u.issues.length === 0)
          return u;
        a.push(u);
      }
    }
    return s ? Promise.all(a).then((l) => ct(l, r, e, i)) : ct(a, r, e, i);
  };
}), rr = /* @__PURE__ */ R("$ZodIntersection", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value, i = t.left._zod.run({ value: r, issues: [] }, o), s = t.right._zod.run({ value: r, issues: [] }, o);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([l, u]) => ut(n, l, u)) : ut(n, i, s);
  };
});
function Le(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if ($e(e) && $e(t)) {
    const n = Object.keys(t), o = Object.keys(e).filter((i) => n.indexOf(i) !== -1), r = { ...e, ...t };
    for (const i of o) {
      const s = Le(e[i], t[i]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...s.mergeErrorPath]
        };
      r[i] = s.data;
    }
    return { valid: !0, data: r };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let o = 0; o < e.length; o++) {
      const r = e[o], i = t[o], s = Le(r, i);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...s.mergeErrorPath]
        };
      n.push(s.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function ut(e, t, n) {
  const o = /* @__PURE__ */ new Map();
  let r;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      r ?? (r = a);
      for (const l of a.keys)
        o.has(l) || o.set(l, {}), o.get(l).l = !0;
    } else
      e.issues.push(a);
  for (const a of n.issues)
    if (a.code === "unrecognized_keys")
      for (const l of a.keys)
        o.has(l) || o.set(l, {}), o.get(l).r = !0;
    else
      e.issues.push(a);
  const i = [...o].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (i.length && r && e.issues.push({ ...r, keys: i }), le(e))
    return e;
  const s = Le(t.value, n.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const sr = /* @__PURE__ */ R("$ZodEnum", (e, t) => {
  A.init(e, t);
  const n = Ut(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((r) => zo.has(typeof r)).map((r) => typeof r == "string" ? wo(r) : r.toString()).join("|")})$`), e._zod.parse = (r, i) => {
    const s = r.value;
    return o.has(s) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), r;
  };
}), ir = /* @__PURE__ */ R("$ZodTransform", (e, t) => {
  A.init(e, t), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new Xt(e.constructor.name);
    const r = t.transform(n.value, n);
    if (o.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((s) => (n.value = s, n));
    if (r instanceof Promise)
      throw new ce();
    return n.value = r, n;
  };
});
function dt(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const en = /* @__PURE__ */ R("$ZodOptional", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", S(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), S(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${We(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(n, o);
      return r instanceof Promise ? r.then((i) => dt(i, n.value)) : dt(r, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), ar = /* @__PURE__ */ R("$ZodExactOptional", (e, t) => {
  en.init(e, t), S(e._zod, "values", () => t.innerType._zod.values), S(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), lr = /* @__PURE__ */ R("$ZodNullable", (e, t) => {
  A.init(e, t), S(e._zod, "optin", () => t.innerType._zod.optin), S(e._zod, "optout", () => t.innerType._zod.optout), S(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${We(n.source)}|null)$`) : void 0;
  }), S(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), cr = /* @__PURE__ */ R("$ZodDefault", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => ft(i, t)) : ft(r, t);
  };
});
function ft(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const ur = /* @__PURE__ */ R("$ZodPrefault", (e, t) => {
  A.init(e, t), e._zod.optin = "optional", S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), dr = /* @__PURE__ */ R("$ZodNonOptional", (e, t) => {
  A.init(e, t), S(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (n, o) => {
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => pt(i, e)) : pt(r, e);
  };
});
function pt(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const fr = /* @__PURE__ */ R("$ZodCatch", (e, t) => {
  A.init(e, t), S(e._zod, "optin", () => t.innerType._zod.optin), S(e._zod, "optout", () => t.innerType._zod.optout), S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => oe(s, o, ne()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: r.issues.map((i) => oe(i, o, ne()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), pr = /* @__PURE__ */ R("$ZodPipe", (e, t) => {
  A.init(e, t), S(e._zod, "values", () => t.in._zod.values), S(e._zod, "optin", () => t.in._zod.optin), S(e._zod, "optout", () => t.out._zod.optout), S(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(n, o);
      return i instanceof Promise ? i.then((s) => ze(s, t.in, o)) : ze(i, t.in, o);
    }
    const r = t.in._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => ze(i, t.out, o)) : ze(r, t.out, o);
  };
});
function ze(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const mr = /* @__PURE__ */ R("$ZodReadonly", (e, t) => {
  A.init(e, t), S(e._zod, "propValues", () => t.innerType._zod.propValues), S(e._zod, "values", () => t.innerType._zod.values), S(e._zod, "optin", () => t.innerType?._zod?.optin), S(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then(mt) : mt(r);
  };
});
function mt(e) {
  return e.value = Object.freeze(e.value), e;
}
const hr = /* @__PURE__ */ R("$ZodCustom", (e, t) => {
  pe.init(e, t), A.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = (n) => {
    const o = n.value, r = t.fn(o);
    if (r instanceof Promise)
      return r.then((i) => ht(i, n, o, e));
    ht(r, n, o, e);
  };
});
function ht(e, t, n, o) {
  if (!e) {
    const r = {
      code: "custom",
      input: n,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (r.params = o._zod.def.params), t.issues.push(xe(r));
  }
}
var vt;
class vr {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const o = n[0];
    return this._map.set(t, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const o = { ...this.get(n) ?? {} };
      delete o.id;
      const r = { ...o, ...this._map.get(t) };
      return Object.keys(r).length ? r : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function gr() {
  return new vr();
}
(vt = globalThis).__zod_globalRegistry ?? (vt.__zod_globalRegistry = gr());
const ye = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
  return new e({
    type: "never",
    ...Z(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _r(e, t) {
  return new Jo({
    check: "max_length",
    ...Z(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function gt(e, t) {
  return new Ko({
    check: "min_length",
    ...Z(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function $r(e, t) {
  return new Go({
    check: "length_equals",
    ...Z(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function xr(e) {
  return new qo({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Rr(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...Z(n)
  });
}
// @__NO_SIDE_EFFECTS__
function zr(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Z(n)
  });
}
// @__NO_SIDE_EFFECTS__
function wr(e) {
  const t = /* @__PURE__ */ Cr((n) => (n.addIssue = (o) => {
    if (typeof o == "string")
      n.issues.push(xe(o, n.value, t._zod.def));
    else {
      const r = o;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = n.value), r.inst ?? (r.inst = t), r.continue ?? (r.continue = !t._zod.def.abort), n.issues.push(xe(r));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
  const n = new pe({
    check: "custom",
    ...Z(t)
  });
  return n._zod.check = e, n;
}
function tn(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? ye,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function D(e, t, n = { path: [], schemaPath: [] }) {
  var o;
  const r = e._zod.def, i = t.seen.get(e);
  if (i)
    return i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema;
  const s = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, s);
  const a = e._zod.toJSONSchema?.();
  if (a)
    s.schema = a;
  else {
    const f = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, s.schema, f);
    else {
      const p = s.schema, m = t.processors[r.type];
      if (!m)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);
      m(e, t, p, f);
    }
    const g = e._zod.parent;
    g && (s.ref || (s.ref = g), D(g, t, f), t.seen.get(g).isParent = !0);
  }
  const l = t.metadataRegistry.get(e);
  return l && Object.assign(s.schema, l), t.io === "input" && N(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function nn(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const s of e.seen.entries()) {
    const a = e.metadataRegistry.get(s[0])?.id;
    if (a) {
      const l = o.get(a);
      if (l && l !== s[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(a, s[0]);
    }
  }
  const r = (s) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const g = e.external.registry.get(s[0])?.id, p = e.external.uri ?? ((y) => y);
      if (g)
        return { ref: p(g) };
      const m = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
      return s[1].defId = m, { defId: m, ref: `${p("__shared")}#/${a}/${m}` };
    }
    if (s[1] === n)
      return { ref: "#" };
    const u = `#/${a}/`, f = s[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: f, ref: u + f };
  }, i = (s) => {
    if (s[1].schema.$ref)
      return;
    const a = s[1], { ref: l, defId: u } = r(s);
    a.def = { ...a.schema }, u && (a.defId = u);
    const f = a.schema;
    for (const g in f)
      delete f[g];
    f.$ref = l;
  };
  if (e.cycles === "throw")
    for (const s of e.seen.entries()) {
      const a = s[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const s of e.seen.entries()) {
    const a = s[1];
    if (t === s[0]) {
      i(s);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(s[0])?.id;
      if (t !== s[0] && u) {
        i(s);
        continue;
      }
    }
    if (e.metadataRegistry.get(s[0])?.id) {
      i(s);
      continue;
    }
    if (a.cycle) {
      i(s);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      i(s);
      continue;
    }
  }
}
function on(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (s) => {
    const a = e.seen.get(s);
    if (a.ref === null)
      return;
    const l = a.def ?? a.schema, u = { ...l }, f = a.ref;
    if (a.ref = null, f) {
      o(f);
      const p = e.seen.get(f), m = p.schema;
      if (m.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (l.allOf = l.allOf ?? [], l.allOf.push(m)) : Object.assign(l, m), Object.assign(l, u), s._zod.parent === f)
        for (const $ in l)
          $ === "$ref" || $ === "allOf" || $ in u || delete l[$];
      if (m.$ref && p.def)
        for (const $ in l)
          $ === "$ref" || $ === "allOf" || $ in p.def && JSON.stringify(l[$]) === JSON.stringify(p.def[$]) && delete l[$];
    }
    const g = s._zod.parent;
    if (g && g !== f) {
      o(g);
      const p = e.seen.get(g);
      if (p?.schema.$ref && (l.$ref = p.schema.$ref, p.def))
        for (const m in l)
          m === "$ref" || m === "allOf" || m in p.def && JSON.stringify(l[m]) === JSON.stringify(p.def[m]) && delete l[m];
    }
    e.override({
      zodSchema: s,
      jsonSchema: l,
      path: a.path ?? []
    });
  };
  for (const s of [...e.seen.entries()].reverse())
    o(s[0]);
  const r = {};
  if (e.target === "draft-2020-12" ? r.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? r.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? r.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const s = e.external.registry.get(t)?.id;
    if (!s)
      throw new Error("Schema is missing an `id` property");
    r.$id = e.external.uri(s);
  }
  Object.assign(r, n.def ?? n.schema);
  const i = e.external?.defs ?? {};
  for (const s of e.seen.entries()) {
    const a = s[1];
    a.def && a.defId && (i[a.defId] = a.def);
  }
  e.external || Object.keys(i).length > 0 && (e.target === "draft-2020-12" ? r.$defs = i : r.definitions = i);
  try {
    const s = JSON.parse(JSON.stringify(r));
    return Object.defineProperty(s, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Oe(t, "input", e.processors),
          output: Oe(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), s;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function N(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const o = e._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return N(o.element, n);
  if (o.type === "set")
    return N(o.valueType, n);
  if (o.type === "lazy")
    return N(o.getter(), n);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return N(o.innerType, n);
  if (o.type === "intersection")
    return N(o.left, n) || N(o.right, n);
  if (o.type === "record" || o.type === "map")
    return N(o.keyType, n) || N(o.valueType, n);
  if (o.type === "pipe")
    return N(o.in, n) || N(o.out, n);
  if (o.type === "object") {
    for (const r in o.shape)
      if (N(o.shape[r], n))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const r of o.options)
      if (N(r, n))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const r of o.items)
      if (N(r, n))
        return !0;
    return !!(o.rest && N(o.rest, n));
  }
  return !1;
}
const Ir = (e, t = {}) => (n) => {
  const o = tn({ ...n, processors: t });
  return D(e, o), nn(o, e), on(o, e);
}, Oe = (e, t, n = {}) => (o) => {
  const { libraryOptions: r, target: i } = o ?? {}, s = tn({ ...r ?? {}, target: i, io: t, processors: n });
  return D(e, s), nn(s, e), on(s, e);
}, Sr = (e, t, n, o) => {
  n.not = {};
}, Or = (e, t, n, o) => {
}, kr = (e, t, n, o) => {
  const r = e._zod.def, i = Ut(r.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Tr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Er = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Vr = (e, t, n, o) => {
  const r = n, i = e._zod.def, { minimum: s, maximum: a } = e._zod.bag;
  typeof s == "number" && (r.minItems = s), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = D(i.element, t, { ...o, path: [...o.path, "items"] });
}, Pr = (e, t, n, o) => {
  const r = n, i = e._zod.def;
  r.type = "object", r.properties = {};
  const s = i.shape;
  for (const u in s)
    r.properties[u] = D(s[u], t, {
      ...o,
      path: [...o.path, "properties", u]
    });
  const a = new Set(Object.keys(s)), l = new Set([...a].filter((u) => {
    const f = i.shape[u]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  l.size > 0 && (r.required = Array.from(l)), i.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : i.catchall ? i.catchall && (r.additionalProperties = D(i.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (r.additionalProperties = !1);
}, jr = (e, t, n, o) => {
  const r = e._zod.def, i = r.inclusive === !1, s = r.options.map((a, l) => D(a, t, {
    ...o,
    path: [...o.path, i ? "oneOf" : "anyOf", l]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, Ar = (e, t, n, o) => {
  const r = e._zod.def, i = D(r.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), s = D(r.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, l = [
    ...a(i) ? i.allOf : [i],
    ...a(s) ? s.allOf : [s]
  ];
  n.allOf = l;
}, Dr = (e, t, n, o) => {
  const r = e._zod.def, i = D(r.innerType, t, o), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = r.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Nr = (e, t, n, o) => {
  const r = e._zod.def;
  D(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Mr = (e, t, n, o) => {
  const r = e._zod.def;
  D(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, Br = (e, t, n, o) => {
  const r = e._zod.def;
  D(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Zr = (e, t, n, o) => {
  const r = e._zod.def;
  D(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
  let s;
  try {
    s = r.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = s;
}, Lr = (e, t, n, o) => {
  const r = e._zod.def, i = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  D(i, t, o);
  const s = t.seen.get(e);
  s.ref = i;
}, Xr = (e, t, n, o) => {
  const r = e._zod.def;
  D(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.readOnly = !0;
}, rn = (e, t, n, o) => {
  const r = e._zod.def;
  D(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Fr = (e, t) => {
  Yt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => jo(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Po(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, Ze, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, Ze, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, X = R("ZodError", Fr, {
  Parent: Error
}), Ur = /* @__PURE__ */ Qe(X), Jr = /* @__PURE__ */ et(X), Kr = /* @__PURE__ */ Pe(X), Gr = /* @__PURE__ */ je(X), qr = /* @__PURE__ */ No(X), Yr = /* @__PURE__ */ Mo(X), Wr = /* @__PURE__ */ Bo(X), Hr = /* @__PURE__ */ Zo(X), Qr = /* @__PURE__ */ Lo(X), es = /* @__PURE__ */ Xo(X), ts = /* @__PURE__ */ Fo(X), ns = /* @__PURE__ */ Uo(X), j = /* @__PURE__ */ R("ZodType", (e, t) => (A.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Oe(e, "input"),
    output: Oe(e, "output")
  }
}), e.toJSONSchema = Ir(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(Y(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, o) => W(e, n, o), e.brand = () => e, e.register = ((n, o) => (n.add(e, o), e)), e.parse = (n, o) => Ur(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => Kr(e, n, o), e.parseAsync = async (n, o) => Jr(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => Gr(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => qr(e, n, o), e.decode = (n, o) => Yr(e, n, o), e.encodeAsync = async (n, o) => Wr(e, n, o), e.decodeAsync = async (n, o) => Hr(e, n, o), e.safeEncode = (n, o) => Qr(e, n, o), e.safeDecode = (n, o) => es(e, n, o), e.safeEncodeAsync = async (n, o) => ts(e, n, o), e.safeDecodeAsync = async (n, o) => ns(e, n, o), e.refine = (n, o) => e.check(Ts(n, o)), e.superRefine = (n) => e.check(Es(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ xr(n)), e.optional = () => bt(e), e.exactOptional = () => ys(e), e.nullable = () => _t(e), e.nullish = () => bt(_t(e)), e.nonoptional = (n) => zs(e, n), e.array = () => as(e), e.or = (n) => ds([e, n]), e.and = (n) => ps(e, n), e.transform = (n) => $t(e, vs(n)), e.default = (n) => $s(e, n), e.prefault = (n) => Rs(e, n), e.catch = (n) => Cs(e, n), e.pipe = (n) => $t(e, n), e.readonly = () => Os(e), e.describe = (n) => {
  const o = e.clone();
  return ye.add(o, { description: n }), o;
}, Object.defineProperty(e, "description", {
  get() {
    return ye.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return ye.get(e);
  const o = e.clone();
  return ye.add(o, n[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), os = /* @__PURE__ */ R("ZodUnknown", (e, t) => {
  Ho.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Or();
});
function yt() {
  return /* @__PURE__ */ yr(os);
}
const rs = /* @__PURE__ */ R("ZodNever", (e, t) => {
  Qo.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Sr(e, n, o);
});
function ss(e) {
  return /* @__PURE__ */ br(rs, e);
}
const is = /* @__PURE__ */ R("ZodArray", (e, t) => {
  er.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Vr(e, n, o, r), e.element = t.element, e.min = (n, o) => e.check(/* @__PURE__ */ gt(n, o)), e.nonempty = (n) => e.check(/* @__PURE__ */ gt(1, n)), e.max = (n, o) => e.check(/* @__PURE__ */ _r(n, o)), e.length = (n, o) => e.check(/* @__PURE__ */ $r(n, o)), e.unwrap = () => e.element;
});
function as(e, t) {
  return /* @__PURE__ */ Rr(is, e, t);
}
const ls = /* @__PURE__ */ R("ZodObject", (e, t) => {
  nr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Pr(e, n, o, r), S(e, "shape", () => t.shape), e.keyof = () => ms(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: yt() }), e.loose = () => e.clone({ ...e._zod.def, catchall: yt() }), e.strict = () => e.clone({ ...e._zod.def, catchall: ss() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Oo(e, n), e.safeExtend = (n) => ko(e, n), e.merge = (n) => To(e, n), e.pick = (n) => Io(e, n), e.omit = (n) => So(e, n), e.partial = (...n) => Eo(sn, e, n[0]), e.required = (...n) => Vo(an, e, n[0]);
});
function cs(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...Z(t)
  };
  return new ls(n);
}
const us = /* @__PURE__ */ R("ZodUnion", (e, t) => {
  or.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => jr(e, n, o, r), e.options = t.options;
});
function ds(e, t) {
  return new us({
    type: "union",
    options: e,
    ...Z(t)
  });
}
const fs = /* @__PURE__ */ R("ZodIntersection", (e, t) => {
  rr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ar(e, n, o, r);
});
function ps(e, t) {
  return new fs({
    type: "intersection",
    left: e,
    right: t
  });
}
const Xe = /* @__PURE__ */ R("ZodEnum", (e, t) => {
  sr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (o, r, i) => kr(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (o, r) => {
    const i = {};
    for (const s of o)
      if (n.has(s))
        i[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Xe({
      ...t,
      checks: [],
      ...Z(r),
      entries: i
    });
  }, e.exclude = (o, r) => {
    const i = { ...t.entries };
    for (const s of o)
      if (n.has(s))
        delete i[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Xe({
      ...t,
      checks: [],
      ...Z(r),
      entries: i
    });
  };
});
function ms(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Xe({
    type: "enum",
    entries: n,
    ...Z(t)
  });
}
const hs = /* @__PURE__ */ R("ZodTransform", (e, t) => {
  ir.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Er(e, n), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new Xt(e.constructor.name);
    n.addIssue = (i) => {
      if (typeof i == "string")
        n.issues.push(xe(i, n.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push(xe(s));
      }
    };
    const r = t.transform(n.value, n);
    return r instanceof Promise ? r.then((i) => (n.value = i, n)) : (n.value = r, n);
  };
});
function vs(e) {
  return new hs({
    type: "transform",
    transform: e
  });
}
const sn = /* @__PURE__ */ R("ZodOptional", (e, t) => {
  en.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => rn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function bt(e) {
  return new sn({
    type: "optional",
    innerType: e
  });
}
const gs = /* @__PURE__ */ R("ZodExactOptional", (e, t) => {
  ar.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => rn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function ys(e) {
  return new gs({
    type: "optional",
    innerType: e
  });
}
const bs = /* @__PURE__ */ R("ZodNullable", (e, t) => {
  lr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Dr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function _t(e) {
  return new bs({
    type: "nullable",
    innerType: e
  });
}
const _s = /* @__PURE__ */ R("ZodDefault", (e, t) => {
  cr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Mr(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function $s(e, t) {
  return new _s({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Kt(t);
    }
  });
}
const xs = /* @__PURE__ */ R("ZodPrefault", (e, t) => {
  ur.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Br(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Rs(e, t) {
  return new xs({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Kt(t);
    }
  });
}
const an = /* @__PURE__ */ R("ZodNonOptional", (e, t) => {
  dr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Nr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function zs(e, t) {
  return new an({
    type: "nonoptional",
    innerType: e,
    ...Z(t)
  });
}
const ws = /* @__PURE__ */ R("ZodCatch", (e, t) => {
  fr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Zr(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Cs(e, t) {
  return new ws({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Is = /* @__PURE__ */ R("ZodPipe", (e, t) => {
  pr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Lr(e, n, o, r), e.in = t.in, e.out = t.out;
});
function $t(e, t) {
  return new Is({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Ss = /* @__PURE__ */ R("ZodReadonly", (e, t) => {
  mr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Xr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Os(e) {
  return new Ss({
    type: "readonly",
    innerType: e
  });
}
const ks = /* @__PURE__ */ R("ZodCustom", (e, t) => {
  hr.init(e, t), j.init(e, t), e._zod.processJSONSchema = (n, o, r) => Tr(e, n);
});
function Ts(e, t = {}) {
  return /* @__PURE__ */ zr(ks, e, t);
}
function Es(e) {
  return /* @__PURE__ */ wr(e);
}
function Vs(e) {
  const t = St(), { field: n, registerField: o, unregisterField: r } = $o(), i = d(() => b(e.props)), s = d(() => i.value.name), a = d(() => e.formRootContext?.modelValue.value), l = d(() => e.formRootContext?.props?.rules), u = d(() => s.value && a.value && st(a.value, s.value)), f = d(() => !!(e.formRootContext?.props.disabled || i.value?.disabled)), g = d(() => {
    if (!s.value || !l.value)
      return null;
    const I = st(l.value, s.value);
    return I instanceof j ? I : null;
  }), p = d(() => !!g.value), m = d(() => g.value ? !g.value.safeParse(void 0).success : !1), {
    validationStatus: y,
    validationErrors: $,
    clearValidateErrors: O,
    validate: k
  } = xo({
    data: () => s.value ? {
      [s.value]: u.value
    } : null,
    schema: () => !s.value || !g.value ? null : cs({
      [s.value]: g.value
    }),
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), T = d(() => ({
    id: t,
    props: i.value,
    validationStatus: y.value,
    isValidatable: p.value,
    isRequired: m.value,
    registerField: o,
    unregisterField: r,
    reset: w,
    validate: k,
    clearValidateErrors: O
  }));
  function w() {
    !u.value || !i.value.name || (n.value?.reset(), O());
  }
  const z = Ge(() => k(), 300);
  return Ue(() => {
    z.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), q(T, (I) => {
    e.formRootContext?.registerFormItem(I);
  }, {
    deep: !0,
    immediate: !0
  }), q(u, () => z()), q(() => y.value.isSuccess, (I) => {
    I && O();
  }), {
    id: t,
    validationErrors: $,
    validationStatus: y,
    isDisabled: f,
    isRequired: m,
    reset: w,
    validate: k,
    clearValidateErrors: O,
    registerField: o,
    unregisterField: r
  };
}
const Ps = /* @__PURE__ */ x({
  __name: "FormRoot",
  props: /* @__PURE__ */ P({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ P(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, i = L(e, "modelValue"), {
      isValid: s,
      registerFormItem: a,
      unregisterFormItem: l,
      validate: u,
      clearValidate: f,
      reset: g
    } = _o({
      modelValue: () => i.value,
      onValid: () => {
        r("valid");
      },
      onInvalid: () => {
        r("invalid");
      }
    });
    async function p() {
      const m = await u();
      r("submit", {
        isValid: m,
        reset: g
      });
    }
    return M(Dt, {
      props: o,
      modelValue: i,
      registerFormItem: a,
      unregisterFormItem: l
    }), t({
      validate: u,
      clearValidate: f,
      reset: g
    }), (m, y) => (h(), v("form", {
      class: C(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: Vn(p, ["prevent"])
    }, [
      _(m.$slots, "default", { isValid: c(s) })
    ], 34));
  }
}), js = {
  key: 0,
  class: "form-item__header"
}, As = { class: "form-item__body" }, Ds = {
  key: 1,
  class: "form-item__footer"
}, Ns = /* @__PURE__ */ x({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, i = Ot(), s = Mt(), {
      validationErrors: a,
      validationStatus: l,
      isDisabled: u,
      isRequired: f,
      registerField: g,
      unregisterField: p,
      reset: m,
      validate: y,
      clearValidateErrors: $
    } = Vs({
      formRootContext: s,
      props: () => o,
      onValid: () => {
        r("valid");
      },
      onInvalid: () => {
        r("invalid");
      }
    }), O = we("root"), k = d(() => ({
      validationStatus: l.value,
      isRequired: f.value,
      errors: a.value
    }));
    return M(Nt, {
      props: o,
      validationStatus: l,
      validationErrors: a,
      isRequired: f,
      isDisabled: u,
      registerField: g,
      unregisterField: p,
      reset: m,
      validate: y,
      clearValidateErrors: $
    }), t({
      reset: m,
      validate: y,
      clearValidateErrors: $
    }), (T, w) => (h(), v("div", {
      ref_key: "root",
      ref: O,
      class: C(["form-item", [
        {
          "form-item--disabled": c(u),
          "form-item--required": c(f),
          "form-item--invalid": c(l).isError,
          "form-item--validating": c(l).isValidating,
          "form-item--valid": c(l).isSuccess
        }
      ]])
    }, [
      i?.header ? (h(), v("div", js, [
        _(T.$slots, "header", be(_e(k.value)))
      ])) : de("", !0),
      G("div", As, [
        _(T.$slots, "default", be(_e(k.value)))
      ]),
      i.footer ? (h(), v("div", Ds, [
        _(T.$slots, "footer", be(_e(k.value)))
      ])) : de("", !0)
    ], 2));
  }
}), Ms = {}, Bs = { class: "form-item-title" };
function Zs(e, t) {
  return h(), v("div", Bs, [
    _(e.$slots, "default")
  ]);
}
const Ls = /* @__PURE__ */ E(Ms, [["render", Zs]]), Xs = {}, Fs = { class: "form-item-required" };
function Us(e, t) {
  return h(), v("span", Fs, [
    _(e.$slots, "default", {}, () => [
      t[0] || (t[0] = J(" * ", -1))
    ])
  ]);
}
const Js = /* @__PURE__ */ E(Xs, [["render", Us]]), Ks = { class: "form-item-errors" }, Gs = /* @__PURE__ */ x({
  __name: "FormItemErrors",
  setup(e) {
    const t = Bt(), n = d(() => t?.validationErrors.value ?? []);
    return (o, r) => (h(), v("div", Ks, [
      (h(!0), v(U, null, kt(n.value, (i, s) => (h(), v("div", {
        key: `error-${s}`,
        class: "form-item-errors__item"
      }, Q(i.message), 1))), 128))
    ]));
  }
}), Ac = {
  Root: Ps,
  Item: Ns,
  ItemTitle: Ls,
  ItemRequired: Js,
  ItemErrors: Gs
};
function qs() {
  const e = V([]);
  function t(o) {
    const r = e.value.findIndex((i) => i.id === o.id);
    r === -1 ? e.value.push(o) : e.value[r] = o;
  }
  function n(o) {
    e.value = e.value.filter((r) => r.id !== o);
  }
  return {
    options: e,
    registerOption: t,
    unregisterOption: n
  };
}
function ue(e, t = !1) {
  return t && Array.isArray(e);
}
function Ys(e) {
  const t = d(() => b(e.multiple)), n = d(() => b(e.modelValue)), o = d(() => b(e.options)), r = d(() => o.value.find((s) => s.props.value === n.value)), i = d(() => {
    if (!ue(n.value, t.value))
      return [];
    const s = new Set(n.value);
    return o.value.filter((a) => s.has(a.props.value));
  });
  return {
    activeOption: r,
    activeOptions: i
  };
}
function Ws(e) {
  const t = d(() => b(e.modelValue)), n = d(() => b(e.props)), { options: o, registerOption: r, unregisterOption: i } = qs(), { activeOption: s, activeOptions: a } = Ys({
    multiple: () => !!n.value.multiple,
    options: () => o.value,
    modelValue: () => t.value
  }), [l, u] = ee(), f = d(() => ue(t.value, n.value.multiple) ? t.value.length > 0 : !!t.value), g = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.disabled));
  function p(k) {
    if (!g.value) {
      if (ue(t.value, n.value.multiple)) {
        const T = /* @__PURE__ */ new Set([...t.value]);
        T.has(k) ? T.delete(k) : T.add(k), e.onChangeModel?.([...T]);
      } else
        e.onChangeModel?.(k);
      e.onChange?.(k);
    }
  }
  function m() {
    if (ue(t.value, n.value.multiple)) {
      e.onChangeModel?.([]);
      return;
    }
    e.onChangeModel?.(""), e.onClear?.();
  }
  function y() {
    g.value || u(!0);
  }
  function $() {
    g.value || u(!1);
  }
  function O() {
    l.value ? $() : y();
  }
  return ke(() => {
    e.formItemContext?.registerField({
      reset: m
    });
  }), Ue(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: s,
    activeOptions: a,
    hasValue: f,
    isOpen: l,
    isDisabled: g,
    open: y,
    close: $,
    toggle: O,
    registerOption: r,
    unregisterOption: i,
    setModelValue: p,
    reset: m
  };
}
function Hs(e) {
  const t = St(), n = d(() => b(e.selectRootContext?.modelValue)), o = d(() => b(e.props)), r = d(() => !!b(e.selectRootContext?.props)?.multiple), i = d(() => te(n.value) ? !1 : ue(n.value, r.value) ? n.value.includes(o.value.value) : n.value === o.value.value), s = d(() => !!(b(e.selectRootContext?.isDisabled) || o.value?.disabled)), a = d(() => ({
    id: t,
    props: o.value
  }));
  function l(u) {
    e.selectRootContext?.setModelValue(u), e.selectRootContext?.close();
  }
  return q(a, (u) => {
    e.selectRootContext?.registerOption(u);
  }, {
    deep: !0,
    immediate: !0
  }), Ue(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: i,
    isDisabled: s,
    handleChange: l
  };
}
function Qs(e) {
  const t = d(() => b(e.selectRootContext?.props)), n = d(() => b(e.selectRootContext?.activeOption)), o = d(() => n.value?.props?.title ?? n.value?.props.value), r = d(() => b(e.selectRootContext?.activeOptions) ?? []), i = d(() => !!b(e.selectRootContext?.hasValue)), s = d(() => te(e.selectRootContext?.modelValue) ? !1 : ue(b(e.selectRootContext.modelValue), !!t.value?.multiple)), a = d(() => t.value?.placeholder);
  function l() {
    e.selectRootContext?.toggle();
  }
  return {
    activeOptionValue: o,
    activeOptions: r,
    hasValue: i,
    isMultiple: s,
    placeholder: a,
    toggle: l
  };
}
function ei(e) {
  function t() {
    e.selectRootContext?.open();
  }
  function n() {
    e.selectRootContext?.close();
  }
  function o() {
    e.selectRootContext?.toggle();
  }
  return {
    open: t,
    close: n,
    toggle: o
  };
}
const ln = /* @__PURE__ */ Symbol("SelectRootContextKey");
function Ae() {
  return B(ln, null);
}
const ti = {
  mounted() {
  },
  unmounted() {
  }
}, Dc = {
  install(e) {
    e.directive("visible", ti);
  }
}, ni = {
  mounted() {
  },
  unmounted() {
  }
}, Nc = {
  install(e) {
    e.directive("loading", ni);
  }
}, cn = {
  mounted(e, t) {
    e.clickOutside = (n) => {
      n.target instanceof Element && (e === n.target || e.contains(n.target) || t.value(n, e));
    }, window.addEventListener("click", e.clickOutside);
  },
  unmounted(e) {
    window.removeEventListener("click", e.clickOutside);
  }
}, Mc = {
  install(e) {
    e.directive("click-outside", cn);
  }
}, oi = {
  mounted() {
  },
  unmounted() {
  }
}, Bc = {
  install(e) {
    e.directive("tooltip", oi);
  }
}, ri = ["aria-disabled"], si = /* @__PURE__ */ x({
  __name: "SelectRoot",
  props: /* @__PURE__ */ P({
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
  emits: /* @__PURE__ */ P(["change", "opened", "closed", "open", "close", "clear"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = F(), {
      activeOption: u,
      activeOptions: f,
      hasValue: g,
      isOpen: p,
      isDisabled: m,
      open: y,
      close: $,
      toggle: O,
      registerOption: k,
      unregisterOption: T,
      setModelValue: w
    } = Ws({
      formRootContext: i,
      formItemContext: s,
      modelValue: () => r.value,
      props: () => n,
      onChangeModel: (z) => {
        r.value = z;
      },
      onChange: (z) => {
        o("change", z);
      },
      onClear: () => {
        o("clear");
      }
    });
    return M(ln, {
      activeOption: () => u.value,
      activeOptions: () => f.value,
      modelValue: () => r.value,
      props: () => n,
      hasValue: () => g.value,
      isOpen: () => p.value,
      isDisabled: () => m.value,
      open: y,
      close: $,
      toggle: O,
      registerOption: k,
      unregisterOption: T,
      setModelValue: w
    }), (z, I) => K((h(), v("div", {
      class: C(["select", {
        "select--disabled": c(m),
        "select--open": c(p),
        "select--filled": c(g),
        "select--invalid": c(l),
        "select--valid": c(a)
      }]),
      "aria-disabled": c(m)
    }, [
      _(z.$slots, "default")
    ], 10, ri)), [
      [c(cn), c($)]
    ]);
  }
}), ii = /* @__PURE__ */ x({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Ae(), { isActive: o, isDisabled: r, handleChange: i } = Hs({
      selectRootContext: n,
      props: () => t
    });
    return (s, a) => (h(), v("div", {
      class: C(["select-option", {
        "select-option--active": c(o),
        "select-option--disabled": c(r)
      }]),
      onClick: a[0] || (a[0] = (l) => c(i)(e.value))
    }, [
      _(s.$slots, "default", {
        isActive: c(o),
        isDisabled: c(r)
      }, () => [
        J(Q(e.title), 1)
      ])
    ], 2));
  }
}), ai = /* @__PURE__ */ x({
  __name: "SelectTrigger",
  setup(e) {
    const t = Ae(), { open: n, close: o, toggle: r } = ei({
      selectRootContext: t
    });
    return (i, s) => _(i.$slots, "default", {
      open: c(n),
      close: c(o),
      toggle: c(r)
    });
  }
}), li = { class: "select-dropdown" }, ci = /* @__PURE__ */ x({
  __name: "SelectDropdown",
  setup(e) {
    const t = Ae(), n = d(() => !!b(t?.isOpen));
    return (o, r) => K((h(), v("div", li, [
      _(o.$slots, "default")
    ], 512)), [
      [It, n.value]
    ]);
  }
}), ui = /* @__PURE__ */ x({
  __name: "SelectValue",
  setup(e) {
    const t = Ae(), { activeOptionValue: n, activeOptions: o, hasValue: r, isMultiple: i, placeholder: s, toggle: a } = Qs({
      selectRootContext: t
    });
    return (l, u) => (h(), v("div", {
      class: "select-value",
      onClick: u[0] || (u[0] = //@ts-ignore
      (...f) => c(a) && c(a)(...f))
    }, [
      _(l.$slots, "default", {}, () => [
        c(r) ? (h(), v(U, { key: 0 }, [
          c(i) ? (h(!0), v(U, { key: 0 }, kt(c(o), (f) => (h(), v(U, null, [
            J(Q(f.props.value), 1)
          ], 64))), 256)) : (h(), v(U, { key: 1 }, [
            J(Q(c(n)), 1)
          ], 64))
        ], 64)) : (h(), v(U, { key: 1 }, [
          J(Q(c(s)), 1)
        ], 64))
      ])
    ]));
  }
}), un = 300, dn = 1, fn = 10;
function xt(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function Rt(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function zt(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function wt(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function di(e) {
  const t = d(() => b(e.props)), n = d(() => t.value?.infiniteScrollOffset ?? fn), o = d(() => t.value?.draggableMultiplier ?? dn), r = d(() => ae(t.value?.debounceDelay) ? t.value.debounceDelay : un), [i, s] = ee(), [a, l] = ee(), u = V(0), f = V(0), g = V(0), p = V(0);
  function m() {
    l(!1), s(!1);
  }
  const y = Ge((w) => {
    e.onScroll?.(w), t.value?.draggable || (g.value = xt(e.scrollbar.value, !!t.value?.vertical), p.value = Rt(e.scrollbar.value, !!t.value?.horizontal));
    const z = e.scrollbar.value, I = e.content.value, H = z ? z.clientHeight : 0, me = z ? z.clientWidth : 0, nt = I ? I.scrollWidth : 0, De = I ? I.scrollHeight : 0, Ne = g.value + H, In = p.value + me, Sn = !!(t.value?.vertical && De - Ne <= n.value), On = !!(t.value?.horizontal && nt - In <= n.value);
    Sn && e.onScrollEndY?.(), On && e.onScrollEndX?.();
  }, r.value), $ = Ke((w) => {
    if (e.onMousemove?.(w), !t.value?.draggable || !a.value)
      return;
    w.preventDefault(), w.stopPropagation();
    const z = e.scrollbar.value;
    if (!z)
      return;
    const I = !!t.value?.vertical, H = !!t.value?.horizontal, me = w.pageY - zt(z, I), De = (w.pageX - wt(z, H) - u.value) * o.value, Ne = (me - f.value) * o.value;
    H && (z.scrollLeft = p.value - De), I && (z.scrollTop = g.value - Ne);
  }, r.value);
  function O(w) {
    if (e.onMousedown?.(w), !t.value?.draggable)
      return;
    l(!0), s(!0);
    const z = e.scrollbar.value;
    if (z) {
      const I = !!t.value?.vertical, H = !!t.value?.horizontal;
      f.value = w.pageY - zt(z, I), u.value = w.pageX - wt(z, H);
    }
    g.value = xt(e.scrollbar.value, !!t.value?.vertical), p.value = Rt(e.scrollbar.value, !!t.value?.horizontal);
  }
  function k(w) {
    e.onMouseleave?.(w), t.value?.draggable && m();
  }
  function T(w) {
    e.onMouseup?.(w), t.value?.draggable && m();
  }
  return Fe(() => {
    y.cancel?.(), $.cancel?.();
  }), {
    isGrabbing: i,
    handleScroll: y,
    handleMousedown: O,
    handleMouseleave: k,
    handleMouseup: T,
    handleMousemove: $
  };
}
const fi = /* @__PURE__ */ x({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: dn },
    infiniteScrollOffset: { default: fn },
    debounceDelay: { default: un },
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = we("scrollbar"), i = we("content"), {
      isGrabbing: s,
      handleScroll: a,
      handleMousedown: l,
      handleMouseleave: u,
      handleMouseup: f,
      handleMousemove: g
    } = di({
      props: () => n,
      scrollbar: r,
      content: i,
      onScroll: (p) => o("scroll", p),
      onMousedown: (p) => o("mousedown", p),
      onMouseleave: (p) => o("mouseleave", p),
      onMouseup: (p) => o("mouseup", p),
      onMousemove: (p) => o("mousemove", p),
      onScrollEndY: () => o("scrollEndY"),
      onScrollEndX: () => o("scrollEndX")
    });
    return (p, m) => (h(), v("div", {
      ref_key: "scrollbar",
      ref: r,
      class: C(["scrollbar", {
        "scrollbar--hidden": e.hidden,
        "scrollbar--draggable": e.draggable,
        "scrollbar--vertical": e.vertical,
        "scrollbar--horizontal": e.horizontal,
        "scrollbar--grabbing": c(s),
        [`scrollbar--size-${e.size}`]: e.size,
        [`scrollbar--theme-${e.theme}`]: e.theme
      }]),
      onScroll: m[0] || (m[0] = //@ts-ignore
      (...y) => c(a) && c(a)(...y)),
      onMousedown: m[1] || (m[1] = //@ts-ignore
      (...y) => c(l) && c(l)(...y)),
      onMouseleave: m[2] || (m[2] = //@ts-ignore
      (...y) => c(u) && c(u)(...y)),
      onMouseup: m[3] || (m[3] = //@ts-ignore
      (...y) => c(f) && c(f)(...y)),
      onMousemove: m[4] || (m[4] = //@ts-ignore
      (...y) => c(g) && c(g)(...y))
    }, [
      G("div", {
        ref_key: "content",
        ref: i,
        class: "scrollbar__content"
      }, [
        _(p.$slots, "default")
      ], 512)
    ], 34));
  }
}), pi = {
  Root: fi
}, mi = /* @__PURE__ */ x({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, n) => (h(), Ce(c(pi).Root, { class: "select-scrollbar" }, {
      default: ie(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Zc = {
  Root: si,
  Option: ii,
  Trigger: ai,
  Dropdown: ci,
  Value: ui,
  Scrollbar: mi
};
function hi(e) {
  const t = d(() => b(e.inputRootContext?.props));
  return {
    props: d(() => ({
      disabled: !!b(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function vi(e) {
  const t = d(() => b(e.inputRootContext?.props));
  return {
    props: d(() => ({
      disabled: !!b(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function gi(e) {
  const [t, n] = ee(), o = d(() => b(e.props)), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.loading || o.value?.disabled)), i = d(() => o.value.type === Zt.TEXTAREA), s = d(() => !!b(e.modelValue)?.trim());
  function a(u) {
    e.onUpdateModelValue?.(u);
  }
  function l() {
    a("");
  }
  return {
    isFocus: t,
    isDisabled: r,
    isTextarea: i,
    hasValue: s,
    setFocus: n,
    setModelValue: a,
    reset: l
  };
}
function pn(e) {
  return {
    modelValue: d({
      get: () => b(e.inputRootContext?.modelValue),
      set(o) {
        e.inputRootContext && e.inputRootContext.setModelValue(o);
      }
    }),
    listeners: {
      click(o) {
        e.inputRootContext?.emit("click", o);
      },
      dblclick(o) {
        e.inputRootContext?.emit("dblclick", o);
      },
      mousedown(o) {
        e.inputRootContext?.emit("mousedown", o);
      },
      mouseup(o) {
        e.inputRootContext?.emit("mouseup", o);
      },
      mouseenter(o) {
        e.inputRootContext?.emit("mouseenter", o);
      },
      mouseleave(o) {
        e.inputRootContext?.emit("mouseleave", o);
      },
      mousemove(o) {
        e.inputRootContext?.emit("mousemove", o);
      },
      mouseover(o) {
        e.inputRootContext?.emit("mouseover", o);
      },
      mouseout(o) {
        e.inputRootContext?.emit("mouseout", o);
      },
      contextmenu(o) {
        e.inputRootContext?.emit("contextmenu", o);
      },
      focusin(o) {
        e.inputRootContext?.setFocus(!0), e.inputRootContext?.emit("focusin", o);
      },
      focusout(o) {
        e.inputRootContext?.setFocus(!1), e.inputRootContext?.emit("focusout", o);
      },
      change(o) {
        e.inputRootContext?.emit("change", o);
      },
      blur(o) {
        e.inputRootContext?.emit("blur", o);
      },
      focus(o) {
        e.inputRootContext?.emit("focus", o);
      },
      keyup(o) {
        e.inputRootContext?.emit("keyup", o);
      },
      keydown(o) {
        e.inputRootContext?.emit("keydown", o);
      },
      keypress(o) {
        e.inputRootContext?.emit("keypress", o);
      },
      paste(o) {
        e.inputRootContext?.emit("paste", o);
      },
      copy(o) {
        e.inputRootContext?.emit("copy", o);
      },
      cut(o) {
        e.inputRootContext?.emit("cut", o);
      }
    }
  };
}
function yi(e) {
  const t = d(() => b(e.inputRootContext?.props)), n = d(() => !!t.value?.clearable);
  function o() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: n,
    handleClear: o
  };
}
const mn = /* @__PURE__ */ Symbol("InputRootContextKey");
function tt() {
  return B(mn, null);
}
const bi = /* @__PURE__ */ x({
  __name: "InputRoot",
  props: /* @__PURE__ */ P({
    type: { default: Zt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: ge.TEXT },
    inputMode: { default: vo.TEXT },
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
  emits: /* @__PURE__ */ P(["click", "dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "contextmenu", "focusin", "focusout", "change", "blur", "focus", "keyup", "keydown", "keypress", "paste", "copy", "cut"], ["update:modelValue"]),
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, i = L(e, "modelValue"), { formRootContext: s, formItemContext: a, isValid: l, isInvalid: u } = F(), { isDisabled: f, isTextarea: g, hasValue: p, isFocus: m, setFocus: y, setModelValue: $, reset: O } = gi({
      formRootContext: s,
      formItemContext: a,
      modelValue: () => i.value,
      props: () => o,
      onUpdateModelValue: (k) => {
        i.value = k;
      }
    });
    return M(mn, {
      isDisabled: () => f.value,
      props: () => o,
      modelValue: () => i.value,
      setFocus: y,
      setModelValue: $,
      reset: O,
      emit: r
    }), t({
      setFocus: y
    }), (k, T) => (h(), v("div", {
      class: C(["input", {
        "input--focus": c(m),
        "input--textarea": c(g),
        "input--filled": c(p),
        "input--disabled": c(f),
        "input--loading": e.loading,
        "input--invalid": c(u),
        "input--valid": c(l)
      }])
    }, [
      _(k.$slots, "default", {
        isTextarea: c(g),
        isFocus: c(m),
        hasValue: c(p),
        loading: !!e.loading,
        isInvalid: c(u),
        isValid: c(l)
      })
    ], 2));
  }
}), _i = {}, $i = { class: "input-before" };
function xi(e, t) {
  return h(), v("div", $i, [
    _(e.$slots, "default")
  ]);
}
const Ri = /* @__PURE__ */ E(_i, [["render", xi]]), zi = { class: "input-after" }, wi = /* @__PURE__ */ x({
  __name: "InputAfter",
  setup(e) {
    const t = tt(), { isClearable: n, handleClear: o } = yi({
      inputRootContext: t
    });
    return (r, i) => (h(), v("div", zi, [
      _(r.$slots, "default"),
      c(n) ? (h(), v("button", {
        key: 0,
        type: "button",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...s) => c(o) && c(o)(...s))
      }, " × ")) : de("", !0)
    ]));
  }
}), Ci = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Ii = /* @__PURE__ */ x({
  __name: "InputNative",
  setup(e) {
    const t = tt(), { modelValue: n, listeners: o } = pn({
      inputRootContext: t
    }), { props: r } = vi({
      inputRootContext: t
    });
    return (i, s) => K((h(), v("input", re({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => Te(n) ? n.value = a : null),
      type: c(r).nativeType,
      inputmode: c(r).inputMode,
      readonly: c(r).readonly,
      disabled: c(r).disabled,
      autocomplete: c(r).autocomplete,
      placeholder: c(r).placeholder,
      class: "input-native"
    }, Ee(c(o), !0)), null, 16, Ci)), [
      [Pn, c(n)]
    ]);
  }
}), Si = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Oi = /* @__PURE__ */ x({
  __name: "InputTextarea",
  setup(e) {
    const t = tt(), { modelValue: n, listeners: o } = pn({
      inputRootContext: t
    }), { props: r } = hi({
      inputRootContext: t
    });
    return (i, s) => K((h(), v("textarea", re({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => Te(n) ? n.value = a : null),
      readonly: c(r).readonly,
      disabled: c(r).disabled,
      autocomplete: c(r).autocomplete,
      rows: c(r).rows,
      cols: c(r).cols,
      placeholder: c(r).placeholder,
      class: "input-textarea"
    }, Ee(c(o), !0)), null, 16, Si)), [
      [Tt, c(n)]
    ]);
  }
}), ki = {}, Ti = { class: "input-control" };
function Ei(e, t) {
  return h(), v("div", Ti, [
    _(e.$slots, "default")
  ]);
}
const Vi = /* @__PURE__ */ E(ki, [["render", Ei]]), Pi = {}, ji = { class: "input-group" };
function Ai(e, t) {
  return h(), v("div", ji, [
    _(e.$slots, "default")
  ]);
}
const Di = /* @__PURE__ */ E(Pi, [["render", Ai]]), Ni = {}, Mi = { class: "input-group-addon" };
function Bi(e, t) {
  return h(), v("div", Mi, [
    _(e.$slots, "default")
  ]);
}
const Zi = /* @__PURE__ */ E(Ni, [["render", Bi]]), ve = {
  Root: bi,
  Before: Ri,
  After: wi,
  Native: Ii,
  Textarea: Oi,
  Control: Vi,
  Group: Di,
  GroupAddon: Zi
}, hn = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function Li() {
  return B(hn, null);
}
function Xi(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), r = d(() => go(n.value) ? n.value : t.value.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : !1), i = d(() => !!(r.value || t.value?.checked)), s = d(() => !!t.value?.indeterminate);
  return {
    isActive: r,
    isDisabled: o,
    isChecked: i,
    isIndeterminate: s
  };
}
function Fi(e) {
  const t = d(() => !!b(e.checkboxRootContext?.isDisabled)), n = d(() => !!b(e.checkboxRootContext?.isActive)), o = d(() => !!b(e.checkboxRootContext?.isIndeterminate)), r = d(() => !!b(e.checkboxRootContext?.isValid)), i = d(() => !!b(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isIndeterminate: o,
    isValid: r,
    isInvalid: i
  };
}
const Ui = ["value", "disabled", "checked"], Ji = /* @__PURE__ */ x({
  __name: "CheckboxRoot",
  props: /* @__PURE__ */ P({
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
  emits: /* @__PURE__ */ P(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = F(), { isChecked: u, isDisabled: f, isIndeterminate: g } = Xi({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    }), p = we("inputRef");
    return q([p, g], ([m, y]) => {
      m && (m.indeterminate = !!y);
    }, {
      immediate: !0
    }), M(hn, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => u.value,
      isDisabled: () => f.value,
      isIndeterminate: () => g.value,
      isValid: () => a.value,
      isInvalid: () => l.value
    }), (m, y) => (h(), v("label", {
      class: C(["checkbox", {
        "checkbox--disabled": c(f),
        "checkbox--active": c(u),
        "checkbox--indeterminate": c(g),
        "checkbox--invalid": c(l),
        "checkbox--valid": c(a)
      }])
    }, [
      K(G("input", re({
        ref_key: "inputRef",
        ref: p,
        "onUpdate:modelValue": y[0] || (y[0] = ($) => r.value = $),
        value: e.value,
        type: "checkbox",
        disabled: c(f),
        checked: c(u),
        class: "checkbox__input"
      }, Ee(o, !0)), null, 16, Ui), [
        [Et, r.value]
      ]),
      _(m.$slots, "default")
    ], 2));
  }
}), Ki = /* @__PURE__ */ x({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = Li(), { isDisabled: n, isActive: o, isIndeterminate: r, isValid: i, isInvalid: s } = Fi({
      checkboxRootContext: t
    });
    return (a, l) => (h(), v("span", {
      class: C(["checkbox-indicator", {
        "checkbox-indicator--disabled": c(n),
        "checkbox-indicator--active": c(o),
        "checkbox-indicator--indeterminate": c(r),
        "checkbox-indicator--valid": c(i),
        "checkbox-indicator--invalid": c(s)
      }])
    }, [
      _(a.$slots, "default", {
        isDisabled: c(n),
        isActive: c(o),
        isIndeterminate: c(r),
        isValid: c(i),
        isInvalid: c(s)
      }, () => [
        J(Q(c(o) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), Gi = {}, qi = { class: "checkbox-title" };
function Yi(e, t) {
  return h(), v("span", qi, [
    _(e.$slots, "default")
  ]);
}
const Wi = /* @__PURE__ */ E(Gi, [["render", Yi]]), Hi = /* @__PURE__ */ x({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: C(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), Lc = {
  Root: Ji,
  Indicator: Ki,
  Title: Wi,
  Group: Hi
};
function Qi(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: d(() => n.value === t.value.value),
    isDisabled: o
  };
}
function ea(e) {
  const t = d(() => !!b(e.radioRootContext?.isDisabled)), n = d(() => !!b(e.radioRootContext?.isActive)), o = d(() => !!b(e.radioRootContext?.isValid)), r = d(() => !!b(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const vn = /* @__PURE__ */ Symbol("RadioRootContextKey");
function ta() {
  return B(vn, null);
}
const na = ["value", "disabled"], oa = /* @__PURE__ */ x({
  __name: "RadioRoot",
  props: /* @__PURE__ */ P({
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
  emits: /* @__PURE__ */ P(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = F(), { isActive: u, isDisabled: f } = Qi({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    });
    return M(vn, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => u.value,
      isDisabled: () => f.value,
      isValid: () => a.value,
      isInvalid: () => l.value
    }), (g, p) => (h(), v("label", {
      class: C(["radio", {
        "radio--disabled": c(f),
        "radio--active": c(u),
        "radio--invalid": c(l),
        "radio--valid": c(a)
      }])
    }, [
      K(G("input", re({
        "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
        value: e.value,
        type: "radio",
        disabled: c(f),
        class: "radio__input"
      }, Ee(o, !0)), null, 16, na), [
        [jn, r.value]
      ]),
      _(g.$slots, "default")
    ], 2));
  }
}), ra = /* @__PURE__ */ x({
  __name: "RadioIndicator",
  setup(e) {
    const t = ta(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = ea({
      radioRootContext: t
    });
    return (s, a) => (h(), v("span", {
      class: C(["radio-indicator", {
        "radio-indicator--disabled": c(n),
        "radio-indicator--active": c(o),
        "radio-indicator--valid": c(r),
        "radio-indicator--invalid": c(i)
      }])
    }, [
      _(s.$slots, "default", {
        isDisabled: c(n),
        isActive: c(o),
        isValid: c(r),
        isInvalid: c(i)
      }, () => [
        J(Q(c(o) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), sa = {}, ia = { class: "radio-title" };
function aa(e, t) {
  return h(), v("span", ia, [
    _(e.$slots, "default")
  ]);
}
const la = /* @__PURE__ */ E(sa, [["render", aa]]), ca = /* @__PURE__ */ x({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: C(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), Xc = {
  Root: oa,
  Indicator: ra,
  Title: la,
  Group: ca
};
function ua(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: n,
    isDisabled: o
  };
}
function da(e) {
  const t = d(() => !!b(e.switchRootContext?.isDisabled)), n = d(() => !!b(e.switchRootContext?.isActive)), o = d(() => !!b(e.switchRootContext?.isValid)), r = d(() => !!b(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const gn = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function fa() {
  return B(gn, null);
}
const pa = { class: "switch" }, ma = ["disabled"], ha = /* @__PURE__ */ x({
  __name: "SwitchRoot",
  props: /* @__PURE__ */ P({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = F(), { isDisabled: a, isActive: l } = ua({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value
    });
    return M(gn, {
      props: () => t,
      isActive: () => l.value,
      isDisabled: () => a.value,
      isValid: () => i.value,
      isInvalid: () => s.value
    }), (u, f) => (h(), v("label", pa, [
      K(G("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (g) => n.value = g),
        type: "checkbox",
        disabled: c(a),
        class: "switch__input"
      }, null, 8, ma), [
        [Et, n.value]
      ]),
      _(u.$slots, "default")
    ]));
  }
}), va = /* @__PURE__ */ x({
  __name: "SwitchIndicator",
  setup(e) {
    const t = fa(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = da({
      switchRootContext: t
    });
    return (s, a) => (h(), v("span", {
      class: C(["switch-indicator", {
        "switch-indicator--disabled": c(n),
        "switch-indicator--active": c(o),
        "switch-indicator--valid": c(r),
        "switch-indicator--invalid": c(i)
      }])
    }, null, 2));
  }
}), ga = {}, ya = { class: "switch-title" };
function ba(e, t) {
  return h(), v("span", ya, [
    _(e.$slots, "default")
  ]);
}
const _a = /* @__PURE__ */ E(ga, [["render", ba]]), Fc = {
  Root: ha,
  Indicator: va,
  Title: _a
}, yn = 1, $a = -1 / 0, xa = 1 / 0, Ra = 100, bn = 0, Ct = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function za(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => t.value.step || yn), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), i = d(() => r.value || ae(t.value.min) && n.value === t.value.min), s = d(() => r.value || ae(t.value.max) && !(n.value < t.value.max));
  function a() {
    if (t.value.readonly)
      return;
    const f = n.value - o.value;
    (!ae(t.value.min) || f >= t.value.min) && e.onDecrement?.(f);
  }
  function l() {
    if (t.value.readonly)
      return;
    const f = n.value + o.value;
    (!ae(t.value.max) || f <= t.value.max) && e.onIncrement?.(f);
  }
  function u(f) {
    e.onUpdateModelValue?.(f);
  }
  return {
    step: o,
    isDisabled: r,
    isDecrementDisabled: i,
    isIncrementDisabled: s,
    handleDecrement: a,
    handleIncrement: l,
    setModelValue: u
  };
}
function wa(e) {
  const t = d(() => b(e.mousewheel)), n = d(() => ae(t.value) && t.value > 0 ? t.value : Ra);
  return {
    handleWheel: Ke((r) => {
      t.value && (r.preventDefault(), r.stopImmediatePropagation(), r.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, n.value)
  };
}
function Ca(e) {
  const t = d(() => b(e.inputNumberRootContext?.props)), n = d({
    get: () => b(e.inputNumberRootContext?.modelValue) ?? bn,
    set(r) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(r);
    }
  });
  return {
    props: d(() => ({
      step: b(e.inputNumberRootContext?.step),
      disabled: b(e.inputNumberRootContext?.isDisabled),
      min: t.value?.min,
      max: t.value?.max,
      readonly: t.value?.readonly,
      placeholder: t.value?.placeholder,
      autocomplete: t.value?.autocomplete
    })),
    modelValue: n
  };
}
function Ia(e) {
  const t = d(() => b(e.props)), n = d(() => t.value.action === Ct.DECREMENT), o = d(() => t.value.action === Ct.INCREMENT), r = d(() => n.value ? !!b(e.inputNumberRootContext?.isDecrementDisabled) : !!b(e.inputNumberRootContext?.isIncrementDisabled));
  function i() {
    n.value ? e.inputNumberRootContext?.handleDecrement() : o.value && e.inputNumberRootContext?.handleIncrement();
  }
  return {
    handleAction: i,
    isDisabled: r,
    isDecrement: n,
    isIncrement: o
  };
}
const _n = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function $n() {
  return B(_n, null);
}
const Sa = /* @__PURE__ */ x({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ P({
    mousewheel: { type: [Boolean, Number] },
    min: { default: $a },
    max: { default: xa },
    step: { default: yn },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    direction: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      default: bn
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = F(), {
      step: a,
      isDisabled: l,
      isDecrementDisabled: u,
      isIncrementDisabled: f,
      handleDecrement: g,
      handleIncrement: p,
      setModelValue: m
    } = za({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value,
      onUpdateModelValue: (y) => {
        n.value = y;
      },
      onDecrement: (y) => {
        n.value = y;
      },
      onIncrement: (y) => {
        n.value = y;
      }
    });
    return M(_n, {
      props: () => t,
      isDisabled: () => l.value,
      modelValue: () => n.value,
      step: () => a.value,
      isDecrementDisabled: () => u.value,
      isIncrementDisabled: () => f.value,
      handleDecrement: g,
      handleIncrement: p,
      setModelValue: m
    }), (y, $) => (h(), v("div", {
      class: C(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": c(s),
        "input-number--valid": c(i)
      }])
    }, [
      _(y.$slots, "default")
    ], 2));
  }
}), Oa = { class: "input-number-input" }, ka = /* @__PURE__ */ x({
  __name: "InputNumberInput",
  setup(e) {
    const t = $n(), { props: n, modelValue: o } = Ca({
      inputNumberRootContext: t
    }), { handleWheel: r } = wa({
      mousewheel: () => b(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (i, s) => (h(), v("div", Oa, [
      K(G("input", re({
        "onUpdate:modelValue": s[0] || (s[0] = (a) => Te(o) ? o.value = a : null),
        type: "number",
        class: "input-number-input__native"
      }, c(n), {
        onWheel: s[1] || (s[1] = //@ts-ignore
        (...a) => c(r) && c(r)(...a))
      }), null, 16), [
        [
          Tt,
          c(o),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), Ta = ["disabled"], Ea = /* @__PURE__ */ x({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, n = $n(), { handleAction: o, isDisabled: r, isDecrement: i, isIncrement: s } = Ia({
      inputNumberRootContext: n,
      props: () => t
    });
    return (a, l) => (h(), v("button", {
      class: C(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: c(r),
      type: "button",
      onClick: l[0] || (l[0] = //@ts-ignore
      (...u) => c(o) && c(o)(...u))
    }, [
      _(a.$slots, "default", {}, () => [
        c(i) ? (h(), v(U, { key: 0 }, [
          J(" - ")
        ], 64)) : c(s) ? (h(), v(U, { key: 1 }, [
          J(" + ")
        ], 64)) : de("", !0)
      ])
    ], 10, Ta));
  }
}), Uc = {
  Root: Sa,
  Input: ka,
  Button: Ea
};
function Va() {
  const e = V(ge.PASSWORD);
  function t() {
    e.value === ge.PASSWORD ? e.value = ge.TEXT : e.value = ge.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Pa = /* @__PURE__ */ x({
  __name: "InputPasswordRoot",
  props: /* @__PURE__ */ P({
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
    const t = e, n = Ot(), o = L(e, "modelValue"), { currentType: r, handleToggleType: i } = Va();
    return (s, a) => (h(), Ce(c(ve).Root, re(t, {
      modelValue: o.value,
      "onUpdate:modelValue": a[1] || (a[1] = (l) => o.value = l),
      "native-type": c(r)
    }), {
      default: ie((l) => [
        n?.before ? (h(), Ce(c(ve).Before, { key: 0 }, {
          default: ie(() => [
            _(s.$slots, "before", be(_e(l)))
          ]),
          _: 2
        }, 1024)) : de("", !0),
        Me(c(ve).Control, null, {
          default: ie(() => [
            Me(c(ve).Native)
          ]),
          _: 1
        }),
        Me(c(ve).After, null, {
          default: ie(() => [
            _(s.$slots, "after", be(_e(l)), () => [
              G("button", {
                type: "button",
                onClick: a[0] || (a[0] = //@ts-ignore
                (...u) => c(i) && c(i)(...u))
              }, " 👁 ")
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["modelValue", "native-type"]));
  }
}), Jc = {
  Root: Pa
};
function ja(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Aa(e) {
  return {
    isDisabled: d(() => {
      const n = e.inputCodeRootContext;
      return n ? !!b(n.isDisabled) : !1;
    })
  };
}
const xn = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function Da() {
  return B(xn, null);
}
const Na = /* @__PURE__ */ x({
  __name: "InputCodeRoot",
  props: /* @__PURE__ */ P({
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
    L(e, "modelValue");
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = F(), { isDisabled: s } = ja({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(xn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, l) => (h(), v("div", {
      class: C(["input-code", {
        "input-code--disabled": c(s),
        "input-code--invalid": c(i),
        "input-code--valid": c(r)
      }])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Ma = ["disabled", "aria-disabled"], Ba = /* @__PURE__ */ x({
  __name: "InputCodePin",
  setup(e) {
    const t = Da(), { isDisabled: n } = Aa({
      inputCodeRootContext: t
    });
    return (o, r) => (h(), v("input", {
      type: "text",
      disabled: c(n),
      "aria-disabled": c(n),
      class: "input-code-pin"
    }, null, 8, Ma));
  }
}), Kc = {
  Root: Na,
  Pin: Ba
}, Rn = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function zn() {
  return B(Rn, null);
}
function Za(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function La(e) {
  function t(o) {
  }
  function n(o) {
  }
  return {
    handleEnter: t,
    handleTab: n
  };
}
const Xa = /* @__PURE__ */ x({
  __name: "InputTagsRoot",
  props: /* @__PURE__ */ P({
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
  emits: /* @__PURE__ */ P(["addTag", "removeTag"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = L(e, "modelValue"), { formRootContext: r, formItemContext: i, isValid: s, isInvalid: a } = F(), { isDisabled: l } = Za({
      formRootContext: r,
      formItemContext: i,
      props: () => n
    });
    return M(Rn, {
      props: () => n,
      modelValue: () => o.value,
      isDisabled: () => l.value
    }), (u, f) => (h(), v("div", {
      class: C(["input-tags", {
        "input-tags--disabled": c(l),
        "input-tags--invalid": c(a),
        "input-tags--valid": c(s)
      }])
    }, [
      _(u.$slots, "default")
    ], 2));
  }
}), Fa = { class: "input-tags-input" }, Ua = /* @__PURE__ */ x({
  __name: "InputTagsInput",
  setup(e) {
    zn();
    const { handleEnter: t, handleTab: n } = La();
    return (o, r) => (h(), v("div", Fa, [
      G("input", {
        type: "text",
        onKeydown: [
          r[0] || (r[0] = ot(
            //@ts-ignore
            (...i) => c(t) && c(t)(...i),
            ["enter"]
          )),
          r[1] || (r[1] = ot(
            //@ts-ignore
            (...i) => c(n) && c(n)(...i),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), Ja = { class: "input-tags-tags" }, Ka = /* @__PURE__ */ x({
  __name: "InputTagsTags",
  setup(e) {
    return zn(), (t, n) => (h(), v("div", Ja));
  }
}), Gc = {
  Root: Xa,
  Input: Ua,
  Tags: Ka
};
function Ga(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function qa(e) {
  return {
    isDisabled: d(() => !!b(e.inputRangeRootContext?.isDisabled))
  };
}
const wn = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function Ya() {
  return B(wn, null);
}
const Wa = /* @__PURE__ */ x({
  __name: "InputRangeRoot",
  props: /* @__PURE__ */ P({
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
    L(e, "modelValue");
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = F(), { isDisabled: s } = Ga({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(wn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, l) => (h(), v("div", {
      class: C(["input-range", {
        "input-range--disabled": c(s),
        "input-range--invalid": c(i),
        "input-range--valid": c(r)
      }])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Ha = ["aria-disabled"], Qa = /* @__PURE__ */ x({
  __name: "InputRangeSlider",
  setup(e) {
    const t = Ya(), { isDisabled: n } = qa({
      inputRangeRootContext: t
    });
    return (o, r) => (h(), v("div", {
      class: "input-range-slider",
      "aria-disabled": c(n)
    }, null, 8, Ha));
  }
}), qc = {
  Root: Wa,
  Slider: Qa
}, el = /* @__PURE__ */ Symbol("ModalRootContextKey");
function tl(e) {
  function t() {
    e.onClose?.();
  }
  return {
    close: t
  };
}
const nl = { class: "modal" }, ol = /* @__PURE__ */ x({
  __name: "ModalRoot",
  props: /* @__PURE__ */ P({
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ P(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = L(e, "modelValue"), { close: r } = tl({
      modelValue: () => o.value,
      props: () => n,
      onClose: () => {
        o.value = !1;
      }
    });
    return M(el, {
      close: r
    }), (i, s) => (h(), v("div", nl, [
      _(i.$slots, "default")
    ]));
  }
}), rl = {};
function sl(e, t) {
  return h(), v("div", null, [
    _(e.$slots, "default")
  ]);
}
const il = /* @__PURE__ */ E(rl, [["render", sl]]), al = {};
function ll(e, t) {
  return h(), v("div");
}
const cl = /* @__PURE__ */ E(al, [["render", ll]]), ul = {}, dl = { class: "modal-header" };
function fl(e, t) {
  return h(), v("div", dl, [
    _(e.$slots, "default")
  ]);
}
const pl = /* @__PURE__ */ E(ul, [["render", fl]]), ml = {}, hl = { class: "modal-footer" };
function vl(e, t) {
  return h(), v("div", hl, [
    _(e.$slots, "default")
  ]);
}
const gl = /* @__PURE__ */ E(ml, [["render", vl]]), yl = {};
function bl(e, t) {
  return h(), v("div");
}
const _l = /* @__PURE__ */ E(yl, [["render", bl]]), $l = {}, xl = { class: "modal-content" };
function Rl(e, t) {
  return h(), v("div", xl, [
    _(e.$slots, "default")
  ]);
}
const zl = /* @__PURE__ */ E($l, [["render", Rl]]), Yc = {
  Root: ol,
  Body: il,
  Close: cl,
  Header: pl,
  Footer: gl,
  Title: _l,
  Content: zl
};
function wl(e) {
  const t = d(() => b(e.props));
  function n() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: n
  };
}
const Cl = /* @__PURE__ */ x({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const n = e, o = t, { handleDelete: r } = wl({
      props: () => n,
      onDelete(i) {
        o("delete", i);
      }
    });
    return (i, s) => (h(), v("div", {
      class: C(["tag", {
        [`tag--size-${e.size}`]: e.size,
        [`tag--theme-${e.theme}`]: e.theme
      }])
    }, [
      _(i.$slots, "default"),
      e.canDelete ? (h(), v("button", {
        key: 0,
        type: "button",
        onClick: s[0] || (s[0] = //@ts-ignore
        (...a) => c(r) && c(r)(...a))
      }, " X ")) : de("", !0)
    ], 2));
  }
}), Il = /* @__PURE__ */ x({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: C(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), Wc = {
  Root: Cl,
  Group: Il
}, Cn = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey");
function Hc() {
  return B(Cn, {
    props: () => ({}),
    t: () => ""
  });
}
function Sl(e) {
  const t = d(() => b(e.props));
  function n(o) {
    if (!t.value?.locale)
      return "";
    const r = o.split(".");
    let i = t.value.locale;
    for (const s of r) {
      if (te(i) || Ve(i) || fe(i))
        return o;
      i = i[s];
    }
    return fe(i) ? i : o;
  }
  return {
    t: n
  };
}
const Ol = /* @__PURE__ */ x({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e, { t: n } = Sl({
      props: () => t
    });
    return M(Cn, {
      props: () => t,
      t: n
    }), (o, r) => _(o.$slots, "default");
  }
}), Qc = {
  Root: Ol
}, kl = { class: "layout" }, Tl = /* @__PURE__ */ x({
  __name: "LayoutRoot",
  setup(e) {
    return (t, n) => (h(), v("div", kl, [
      _(t.$slots, "header"),
      _(t.$slots, "default"),
      _(t.$slots, "footer")
    ]));
  }
}), El = {}, Vl = { class: "layout-body" };
function Pl(e, t) {
  return h(), v("main", Vl, [
    _(e.$slots, "default")
  ]);
}
const jl = /* @__PURE__ */ E(El, [["render", Pl]]), eu = {
  Root: Tl,
  Body: jl
}, Al = /* @__PURE__ */ x({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: C(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), Dl = /* @__PURE__ */ x({
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
    return (t, n) => (h(), v("div", {
      class: C(["col", {
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
      _(t.$slots, "default")
    ], 2));
  }
}), Nl = /* @__PURE__ */ x({
  __name: "Row",
  props: {
    wrap: { type: Boolean, default: !0 },
    guttersX: { type: Boolean, default: !0 },
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
    return (t, n) => (h(), v("div", {
      class: C(["flex row", {
        "flex--wrap": e.wrap,
        "flex--no-wrap": !e.wrap,
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
        [`flex--align-xxl-${e.alignXxl}`]: e.alignXxl,
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), tu = {
  Container: Al,
  Row: Nl,
  Col: Dl
}, Ml = { class: "section" }, Bl = /* @__PURE__ */ x({
  __name: "SectionRoot",
  setup(e) {
    return (t, n) => (h(), v("section", Ml, [
      _(t.$slots, "default")
    ]));
  }
}), Zl = {}, Ll = { class: "section-header" };
function Xl(e, t) {
  return h(), v("header", Ll, [
    _(e.$slots, "default")
  ]);
}
const Fl = /* @__PURE__ */ E(Zl, [["render", Xl]]), Ul = {}, Jl = { class: "section-title" };
function Kl(e, t) {
  return h(), v("h1", Jl, [
    _(e.$slots, "default")
  ]);
}
const Gl = /* @__PURE__ */ E(Ul, [["render", Kl]]), ql = {}, Yl = { class: "section-footer" };
function Wl(e, t) {
  return h(), v("footer", Yl, [
    _(e.$slots, "default")
  ]);
}
const Hl = /* @__PURE__ */ E(ql, [["render", Wl]]), Ql = {}, ec = { class: "section-body" };
function tc(e, t) {
  return h(), v("div", ec, [
    _(e.$slots, "default")
  ]);
}
const nc = /* @__PURE__ */ E(Ql, [["render", tc]]), nu = {
  Root: Bl,
  Header: Fl,
  Title: Gl,
  Footer: Hl,
  Body: nc
}, oc = /* @__PURE__ */ x({
  __name: "TextRoot",
  props: {
    tag: { default: "div" },
    uppercase: { type: Boolean },
    underline: { type: Boolean },
    weight: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, n) => (h(), Ce(An(e.tag), {
      class: C(["text", {
        "text--uppercase": e.uppercase,
        "text--underline": e.underline,
        [`text--size-${e.size}`]: e.size,
        [`text--theme-${e.theme}`]: e.theme,
        [`text--weight-${e.weight}`]: e.weight
      }])
    }, {
      default: ie(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), ou = {
  Root: oc
}, rc = /* @__PURE__ */ x({
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
    return (t, n) => (h(), v("div", {
      class: C(["flex", {
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
      _(t.$slots, "default")
    ], 2));
  }
}), sc = /* @__PURE__ */ x({
  __name: "FlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: C(["flex-item", {
        [`flex-item--flex-${e.flex}`]: e.flex
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), ru = {
  Root: rc,
  Item: sc
}, ic = /* @__PURE__ */ x({
  __name: "DividerRoot",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: C(["divider", {
        [`divider--direction-${e.direction}`]: e.direction
      }])
    }, [
      _(t.$slots, "default")
    ], 2));
  }
}), ac = {}, lc = { class: "divider-content" };
function cc(e, t) {
  return h(), v("div", lc, [
    _(e.$slots, "default")
  ]);
}
const uc = /* @__PURE__ */ E(ac, [["render", cc]]), su = {
  Root: ic,
  Content: uc
}, dc = x({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      if (!n.default)
        return null;
      const o = Lt(n.default()), r = o.findIndex((l) => l.type !== Dn);
      if (r === -1)
        return o;
      const i = o[r];
      delete i.props?.ref;
      const s = i.props ? re(t, i.props) : t, a = Nn({
        ...i,
        props: {}
      }, s);
      return o.length === 1 ? a : (o[r] = a, o);
    };
  }
}), fc = [
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
], pc = x({
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
  setup(e, { attrs: t, slots: n }) {
    const o = e.asChild ? "template" : e.as;
    return fe(o) && fc.includes(o) ? () => Be(o, t) : o !== "template" ? () => Be(e.as, t, {
      default: n.default
    }) : () => Be(dc, t, {
      default: n.default
    });
  }
}), iu = {
  Root: pc
}, au = {};
export {
  hc as Accordion,
  vc as Button,
  Lc as Checkbox,
  Mc as ClickOutsidePlugin,
  Qc as ConfigProvider,
  Cn as ConfigProviderRootContextKey,
  _c as Direction,
  su as Divider,
  ru as Flex,
  xc as FlexAlign,
  Rc as FlexJustify,
  Ac as Form,
  tu as Grid,
  Ct as INPUT_NUMBER_ACTIONS,
  xa as INPUT_NUMBER_MAX,
  $a as INPUT_NUMBER_MIN,
  yn as INPUT_NUMBER_STEP,
  bn as INPUT_NUMBER_VALUE_DEFAULT,
  Ra as INPUT_NUMBER_WHEEL_DELAY,
  ve as Input,
  Kc as InputCode,
  vo as InputModes,
  ge as InputNativeTypes,
  Uc as InputNumber,
  Jc as InputPassword,
  qc as InputRange,
  Gc as InputTags,
  Zt as InputTypes,
  rt as IntersectionPresets,
  eu as Layout,
  Nc as LoadingPlugin,
  Yc as Modal,
  $c as Position,
  iu as Primitive,
  Xc as Radio,
  pi as Scrollbar,
  nu as Section,
  Zc as Select,
  bc as Sizes,
  Fc as Switch,
  Wc as Tag,
  ou as Text,
  yc as Themes,
  Bc as TooltipPlugin,
  Dc as VisiblePlugin,
  Sc as booleanToBooleanish,
  he as clone,
  Ge as debounce,
  Oc as defineFormRules,
  wc as delay,
  st as getProp,
  go as isBoolean,
  zc as isEmpty,
  yo as isFunction,
  Ve as isNull,
  ae as isNumber,
  Je as isObject,
  fe as isString,
  te as isUndefined,
  Ic as omit,
  Cc as pick,
  Lt as renderSlotFragments,
  au as ruRU,
  Ke as throttle,
  Bn as useAccordionItem,
  Mn as useAccordionRoot,
  Zn as useAccordionTrigger,
  Ec as useAnimatedNumber,
  Tc as useClipboard,
  Hc as useConfigProviderRootContext,
  jc as useEmitProxy,
  Vs as useFormItem,
  _o as useFormRoot,
  ho as useIntersectionObserver,
  kc as useLoadImage,
  gc as usePlural,
  Pc as useScrollTo,
  ee as useToggle,
  Vc as useWindowScroll,
  cn as vClickOutside,
  ni as vLoading,
  oi as vTooltip,
  ti as vVisible
};
