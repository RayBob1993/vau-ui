import { computed as d, toValue as y, inject as M, defineComponent as z, mergeModels as P, useModel as L, provide as B, createElementBlock as v, openBlock as h, normalizeClass as k, renderSlot as b, unref as u, withDirectives as G, createElementVNode as U, vShow as xt, ref as V, watch as K, onBeforeUnmount as In, markRaw as Sn, onMounted as Oe, onScopeDispose as Le, isRef as ke, nextTick as On, useId as It, onUnmounted as Fe, withModifiers as kn, useSlots as St, useTemplateRef as Ce, createCommentVNode as ce, normalizeProps as ve, guardReactiveProps as ge, createTextVNode as q, Fragment as J, renderList as Ot, toDisplayString as se, mergeProps as le, toHandlers as Te, vModelDynamic as Tn, vModelText as kt, vModelCheckbox as Tt, vModelRadio as En, createBlock as tt, withCtx as ze, createVNode as Ne, withKeys as nt } from "vue";
function Vn(e) {
  const t = d(() => y(e.props));
  function n(o) {
    const r = y(e.modelValue);
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
function Pn(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.accordionRootContext?.modelValue)), o = d(() => !!y(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: d(() => o.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : n.value === t.value.value)
  };
}
function An(e) {
  const t = d(() => y(e.accordionItemContext?.props)), n = d(() => !!t.value?.disabled);
  function o() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: n,
    handleToggle: o
  };
}
const Et = /* @__PURE__ */ Symbol("AccordionRootContextKey"), Vt = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function Pt() {
  return M(Et, null);
}
function At() {
  return M(Vt, null);
}
function Dn() {
  const e = Pt(), t = At();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const jn = /* @__PURE__ */ z({
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
    const n = e, o = t, r = L(e, "modelValue"), { setModelValue: i } = Vn({
      props: () => n,
      modelValue: () => r.value,
      onChange: (s) => o("change", s),
      onChangeModel: (s) => {
        r.value = s;
      }
    });
    return B(Et, {
      props: () => n,
      modelValue: () => r.value,
      setModelValue: i
    }), (s, a) => (h(), v("div", {
      class: k(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      b(s.$slots, "default")
    ], 2));
  }
}), Nn = /* @__PURE__ */ z({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Pt(), { isActive: o } = Pn({
      accordionRootContext: n,
      props: () => t
    });
    return B(Vt, {
      props: () => t,
      isActive: () => o.value
    }), (r, i) => (h(), v("div", {
      class: k(["accordion-item", {
        "accordion-item--open": u(o),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      b(r.$slots, "default", { isActive: u(o) })
    ], 2));
  }
}), E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Bn = {}, Mn = { class: "accordion-header" };
function Zn(e, t) {
  return h(), v("div", Mn, [
    b(e.$slots, "default")
  ]);
}
const Ln = /* @__PURE__ */ E(Bn, [["render", Zn]]), Fn = {
  class: "accordion-body",
  role: "region"
}, Xn = { class: "accordion-body__content" }, Un = /* @__PURE__ */ z({
  __name: "AccordionBody",
  setup(e) {
    const t = At(), n = d(() => !!y(t?.isActive));
    return (o, r) => G((h(), v("div", Fn, [
      U("div", Xn, [
        b(o.$slots, "default")
      ])
    ], 512)), [
      [xt, n.value]
    ]);
  }
}), Jn = {}, Kn = { class: "accordion-title" };
function qn(e, t) {
  return h(), v("div", Kn, [
    b(e.$slots, "default")
  ]);
}
const Gn = /* @__PURE__ */ E(Jn, [["render", qn]]), Yn = ["disabled"], Wn = /* @__PURE__ */ z({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: n } = Dn(), { isDisabled: o, handleToggle: r } = An({
      accordionRootContext: t,
      accordionItemContext: n
    });
    return (i, s) => (h(), v("button", {
      type: "button",
      disabled: u(o),
      class: "v-accordion-trigger",
      onClick: s[0] || (s[0] = //@ts-ignore
      (...a) => u(r) && u(r)(...a))
    }, [
      b(i.$slots, "default")
    ], 8, Yn));
  }
}), Jc = {
  Root: jn,
  Item: Nn,
  Header: Ln,
  Body: Un,
  Title: Gn,
  Trigger: Wn
};
function Hn(e) {
  const t = d(() => y(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const Dt = /* @__PURE__ */ Symbol("FormRootContextKey"), jt = /* @__PURE__ */ Symbol("FormItemContextKey");
function Nt() {
  return M(Dt, null);
}
function Bt() {
  return M(jt, null);
}
function X() {
  const e = Nt(), t = Bt(), n = d(() => !!t?.validationStatus.value.isSuccess), o = d(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: n,
    isInvalid: o
  };
}
const Qn = ["disabled", "type"], eo = /* @__PURE__ */ z({
  __name: "ButtonRoot",
  props: {
    loading: { type: Boolean },
    disabled: { type: Boolean },
    plain: { type: Boolean },
    wide: { type: Boolean },
    type: {},
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, { formRootContext: n, formItemContext: o } = X(), { isDisabled: r } = Hn({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return (i, s) => (h(), v("button", {
      class: k(["button", [
        {
          "button--disabled": u(r),
          "button--loading": e.loading,
          "button--plain": e.plain,
          "button--wide": e.wide,
          [`button--theme-${e.theme}`]: e.theme,
          [`button--size-${e.size}`]: e.size
        }
      ]]),
      disabled: u(r),
      type: e.type
    }, [
      b(i.$slots, "default")
    ], 10, Qn));
  }
}), to = {}, no = { class: "button-content" };
function oo(e, t) {
  return h(), v("span", no, [
    b(e.$slots, "default")
  ]);
}
const ro = /* @__PURE__ */ E(to, [["render", oo]]), so = /* @__PURE__ */ z({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: k(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), Kc = {
  Root: eo,
  Content: ro,
  Group: so
};
function io() {
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
function ao(e) {
  const t = d(() => y(e.formItems)), n = d(() => t.value.filter((i) => i.isValidatable));
  async function o(i = !1) {
    const a = (await Promise.all(n.value.map((c) => c.validate(i)))).every(Boolean);
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
function Q(e = !1) {
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
function qc(e) {
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
function co(e, t, n) {
  let o;
  const r = K(e, (a) => {
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
  return In(() => {
    i();
  }), {
    stop: i
  };
}
const Mt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), lo = Object.freeze({
  NUMERIC: "numeric",
  TEL: "tel",
  TEXT: "text",
  DECIMAL: "decimal",
  SEARCH: "search",
  EMAIL: "email",
  NONE: "none",
  URL: "url"
}), me = Object.freeze({
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  PASSWORD: "password"
}), Gc = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Yc = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Wc = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Hc = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Qc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), el = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), ot = Object.freeze({
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
function uo(e) {
  return typeof e == "boolean";
}
function _e(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ee(e) {
  return e === null;
}
function Xe(e) {
  return !Ee(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function ye(e) {
  return typeof e > "u";
}
function tl(e) {
  return Ee(e) || ye(e) ? !0 : _e(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Xe(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function fo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function oe(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function po(e) {
  return !Ee(e) && !ye(e) && Xe(e) && !Array.isArray(e);
}
function rt(e, t) {
  if (!e || !t.trim())
    return null;
  const n = t.split(".");
  let o = e;
  for (const r of n) {
    if (!po(o))
      return null;
    o = o[r];
  }
  return o ?? null;
}
function fe(e, t = /* @__PURE__ */ new WeakMap()) {
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
      n.set(fe(r, t), fe(o, t));
    }), n;
  }
  if (e instanceof Set) {
    const n = /* @__PURE__ */ new Set();
    return t.set(e, n), e.forEach((o) => {
      n.add(fe(o, t));
    }), n;
  }
  if (e instanceof ArrayBuffer) {
    const n = e.slice(0);
    return t.set(e, n), n;
  }
  if (fo(e))
    return e;
  if (Array.isArray(e)) {
    const n = [];
    t.set(e, n);
    for (let o = 0; o < e.length; o++)
      n[o] = fe(e[o], t);
    return n;
  }
  if (Xe(e)) {
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
        value: fe(i.value, t)
      }) : Object.defineProperty(n, r, i));
    }
    return n;
  }
  return e;
}
function nl(e) {
  return new Promise((t) => setTimeout(t, e));
}
function ol(e, t) {
  const n = {};
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
  return n;
}
function rl(e, t) {
  const n = { ...e };
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && delete n[o];
  return n;
}
function sl(e) {
  return e ? "true" : "false";
}
function Ue(e, t, n = {}) {
  const {
    noTrailing: o = !1,
    noLeading: r = !1,
    debounceMode: i = void 0
  } = n;
  let s = null, a = !1, c = 0, l = null;
  function f() {
    s && (clearTimeout(s), s = null);
  }
  function g(_ = {}) {
    const { upcomingOnly: $ = !1 } = _;
    f(), a = !$;
  }
  function p() {
    if (c = Date.now(), l) {
      const _ = l;
      e.apply(this, _), l = null;
    }
  }
  function m(..._) {
    if (a)
      return;
    const $ = Date.now() - c;
    l = _;
    function C() {
      s = null;
    }
    f(), !r && i && !s && p.call(this), ye(i) && $ > t ? r ? (c = Date.now(), o || (s = setTimeout(i ? C : p.bind(this), t))) : p.call(this) : o || (s = setTimeout(
      i ? C : p.bind(this),
      ye(i) ? t - $ : t
    ));
  }
  return m.cancel = g, m;
}
function Je(e, t, n = {}) {
  const { atBegin: o = !1 } = n;
  return Ue(e, t, {
    debounceMode: o
  });
}
function il(e) {
  return Sn(e);
}
function al(e, t, n = {}) {
  const {
    rootMargin: o = ot.LAZY_IMAGE.rootMargin,
    threshold: r = ot.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: i = !0,
    immediate: s = !1
  } = n, { stop: a } = co(e, O, {
    rootMargin: o,
    threshold: r
  }), [c, l] = Q(), [f, g] = Q(), p = V(""), m = V(""), _ = V(""), $ = _e(t) ? { src: t } : t;
  function C() {
    if (c.value || f.value)
      return;
    const T = new Image();
    T.src = $.src, $.srcset && (T.srcset = $.srcset), $.sizes && (T.sizes = $.sizes), T.onload = () => {
      p.value = $.src, m.value = $.srcset || "", _.value = $.sizes || "", l(!0), g(!1);
    }, T.onerror = () => {
      l(!1), g(!0);
    };
  }
  function O(T) {
    T.forEach((R) => {
      R.isIntersecting && !c.value && !f.value && C();
    });
  }
  return Oe(() => {
    if (s || i && "loading" in HTMLImageElement.prototype) {
      C();
      return;
    }
  }), {
    isLoaded: c,
    hasError: f,
    imageSrc: p,
    imageSrcset: m,
    imageSizes: _,
    loadImage: C,
    stop: a
  };
}
function cl() {
  return {};
}
function ll() {
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
      const c = Math.min((a - i) / r, 1);
      e.value = Math.floor(c * (o - n) + n), c < 1 && window.requestAnimationFrame(s);
    }
    window.requestAnimationFrame(s);
  }
  return {
    number: e,
    animate: t
  };
}
function ul() {
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
  return Oe(() => {
    n(), window.addEventListener("scroll", n);
  }), Le(() => {
    window.removeEventListener("scroll", n);
  }), {
    x: e,
    y: t,
    setScroll: o
  };
}
function dl(e, t) {
  (_e(e) ? document.querySelector(e) : ke(e) ? u(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function fl(e, t) {
  return {
    listeners: t.reduce((o, r) => {
      const i = r, s = String(i);
      return o[i] = ((...a) => e(s, ...a)), o;
    }, {})
  };
}
function mo(e) {
  const { formItems: t, registerFormItem: n, unregisterFormItem: o } = io(), { validate: r, clearValidate: i, validatableFormItems: s } = ao({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [a, c] = Q(!1), l = V(!1), f = V("");
  function g() {
    t.value.forEach((_) => _.reset()), i();
  }
  K(s, async (_) => {
    const $ = _.map((O) => O.id).sort().join(",");
    if ($ === f.value)
      return;
    if (f.value = $, _.length === 0) {
      l.value && c(!0);
      return;
    }
    l.value = !0;
    const C = await r(!0);
    c(C);
  }, {
    immediate: !0
  });
  const p = Je(async () => {
    const _ = await r(!0);
    c(_);
  }, 400);
  async function m(_ = !1) {
    const $ = await r(_);
    return c($), $;
  }
  return K(() => y(e.modelValue), () => {
    p();
  }, {
    deep: !0
  }), Oe(async () => {
    await On(), await m(!0);
  }), Le(() => {
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
function ho() {
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
function vo(e) {
  const t = d(() => y(e.data)), n = d(() => y(e.schema)), o = V({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), r = V([]);
  function i(c) {
    o.value = { ...o.value, ...c };
  }
  function s() {
    r.value = [];
  }
  async function a(c = !1) {
    if (!t.value || !n.value)
      return !1;
    i({ isValidating: !0 });
    const l = await n.value.safeParseAsync(t.value);
    return i({ isValidating: !1 }), l.success ? (i({ isError: !1, isSuccess: !0 }), e.onValid?.(), !0) : (c || (i({ isError: !0, isSuccess: !1 }), l.error && (r.value = l.error.issues)), e.onInvalid?.(), !1);
  }
  return {
    validationStatus: o,
    validationErrors: r,
    clearValidateErrors: s,
    validate: a
  };
}
function w(e, t, n) {
  function o(a, c) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: c,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, c);
    const l = s.prototype, f = Object.keys(l);
    for (let g = 0; g < f.length; g++) {
      const p = f[g];
      p in a || (a[p] = l[p].bind(a));
    }
  }
  const r = n?.Parent ?? Object;
  class i extends r {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(a) {
    var c;
    const l = n?.Parent ? new i() : this;
    o(l, a), (c = l._zod).deferred ?? (c.deferred = []);
    for (const f of l._zod.deferred)
      f();
    return l;
  }
  return Object.defineProperty(s, "init", { value: o }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class ie extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Zt extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Lt = {};
function ee(e) {
  return Lt;
}
function Ft(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, r]) => t.indexOf(+o) === -1).map(([o, r]) => r);
}
function Be(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Ke(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function qe(e) {
  return e == null;
}
function Ge(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
const st = /* @__PURE__ */ Symbol("evaluating");
function I(e, t, n) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== st)
        return o === void 0 && (o = st, o = n()), o;
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
function ne(e, t, n) {
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
function it(e) {
  return JSON.stringify(e);
}
const Xt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function xe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const go = Ke(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function be(e) {
  if (xe(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(xe(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Ut(e) {
  return be(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const _o = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function yo(e) {
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
function bo(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function $o(e, t) {
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
      return ne(this, "shape", s), s;
    },
    checks: []
  });
  return W(e, i);
}
function zo(e, t) {
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
      return ne(this, "shape", s), s;
    },
    checks: []
  });
  return W(e, i);
}
function wo(e, t) {
  if (!be(t))
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
      return ne(this, "shape", i), i;
    }
  });
  return W(e, r);
}
function Ro(e, t) {
  if (!be(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = Y(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return ne(this, "shape", o), o;
    }
  });
  return W(e, n);
}
function Co(e, t) {
  const n = Y(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return ne(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return W(e, n);
}
function xo(e, t, n) {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = Y(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, c = { ...a };
      if (n)
        for (const l in n) {
          if (!(l in a))
            throw new Error(`Unrecognized key: "${l}"`);
          n[l] && (c[l] = e ? new e({
            type: "optional",
            innerType: a[l]
          }) : a[l]);
        }
      else
        for (const l in a)
          c[l] = e ? new e({
            type: "optional",
            innerType: a[l]
          }) : a[l];
      return ne(this, "shape", c), c;
    },
    checks: []
  });
  return W(t, s);
}
function Io(e, t, n) {
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
      return ne(this, "shape", i), i;
    }
  });
  return W(t, o);
}
function re(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function Jt(e, t) {
  return t.map((n) => {
    var o;
    return (o = n).path ?? (o.path = []), n.path.unshift(e), n;
  });
}
function we(e) {
  return typeof e == "string" ? e : e?.message;
}
function te(e, t, n) {
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const r = we(e.inst?._zod.def?.error?.(e)) ?? we(t?.error?.(e)) ?? we(n.customError?.(e)) ?? we(n.localeError?.(e)) ?? "Invalid input";
    o.message = r;
  }
  return delete o.inst, delete o.continue, t?.reportInput || delete o.input, o;
}
function Ye(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function $e(...e) {
  const [t, n, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: o
  } : { ...t };
}
const Kt = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, Be, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, qt = w("$ZodError", Kt), Gt = w("$ZodError", Kt, { Parent: Error });
function So(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const r of e.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: n };
}
function Oo(e, t = (n) => n.message) {
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
          const c = i.path[a];
          a === i.path.length - 1 ? (s[c] = s[c] || { _errors: [] }, s[c]._errors.push(t(i))) : s[c] = s[c] || { _errors: [] }, s = s[c], a++;
        }
      }
  };
  return o(e), n;
}
const We = (e) => (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new ie();
  if (s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((c) => te(c, i, ee())));
    throw Xt(a, r?.callee), a;
  }
  return s.value;
}, He = (e) => async (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((c) => te(c, i, ee())));
    throw Xt(a, r?.callee), a;
  }
  return s.value;
}, Ve = (e) => (t, n, o) => {
  const r = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, r);
  if (i instanceof Promise)
    throw new ie();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? qt)(i.issues.map((s) => te(s, r, ee())))
  } : { success: !0, data: i.value };
}, ko = /* @__PURE__ */ Ve(Gt), Pe = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => te(s, r, ee())))
  } : { success: !0, data: i.value };
}, To = /* @__PURE__ */ Pe(Gt), Eo = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return We(e)(t, n, r);
}, Vo = (e) => (t, n, o) => We(e)(t, n, o), Po = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return He(e)(t, n, r);
}, Ao = (e) => async (t, n, o) => He(e)(t, n, o), Do = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ve(e)(t, n, r);
}, jo = (e) => (t, n, o) => Ve(e)(t, n, o), No = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Pe(e)(t, n, r);
}, Bo = (e) => async (t, n, o) => Pe(e)(t, n, o), ue = /* @__PURE__ */ w("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Mo = /* @__PURE__ */ w("$ZodCheckMaxLength", (e, t) => {
  var n;
  ue.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !qe(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < r && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length <= t.maximum)
      return;
    const s = Ye(r);
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
}), Zo = /* @__PURE__ */ w("$ZodCheckMinLength", (e, t) => {
  var n;
  ue.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !qe(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > r && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length >= t.minimum)
      return;
    const s = Ye(r);
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
}), Lo = /* @__PURE__ */ w("$ZodCheckLengthEquals", (e, t) => {
  var n;
  ue.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !qe(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.minimum = t.length, r.maximum = t.length, r.length = t.length;
  }), e._zod.check = (o) => {
    const r = o.value, i = r.length;
    if (i === t.length)
      return;
    const s = Ye(r), a = i > t.length;
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
}), Fo = /* @__PURE__ */ w("$ZodCheckOverwrite", (e, t) => {
  ue.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class Xo {
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
const Uo = {
  major: 4,
  minor: 3,
  patch: 6
}, D = /* @__PURE__ */ w("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Uo;
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
    const r = (s, a, c) => {
      let l = re(s), f;
      for (const g of a) {
        if (g._zod.def.when) {
          if (!g._zod.def.when(s))
            continue;
        } else if (l)
          continue;
        const p = s.issues.length, m = g._zod.check(s);
        if (m instanceof Promise && c?.async === !1)
          throw new ie();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, s.issues.length !== p && (l || (l = re(s, p)));
          });
        else {
          if (s.issues.length === p)
            continue;
          l || (l = re(s, p));
        }
      }
      return f ? f.then(() => s) : s;
    }, i = (s, a, c) => {
      if (re(s))
        return s.aborted = !0, s;
      const l = r(a, o, c);
      if (l instanceof Promise) {
        if (c.async === !1)
          throw new ie();
        return l.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(l, c);
    };
    e._zod.run = (s, a) => {
      if (a.skipChecks)
        return e._zod.parse(s, a);
      if (a.direction === "backward") {
        const l = e._zod.parse({ value: s.value, issues: [] }, { ...a, skipChecks: !0 });
        return l instanceof Promise ? l.then((f) => i(f, s, a)) : i(l, s, a);
      }
      const c = e._zod.parse(s, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new ie();
        return c.then((l) => r(l, o, a));
      }
      return r(c, o, a);
    };
  }
  I(e, "~standard", () => ({
    validate: (r) => {
      try {
        const i = ko(e, r);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return To(e, r).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Jo = /* @__PURE__ */ w("$ZodUnknown", (e, t) => {
  D.init(e, t), e._zod.parse = (n) => n;
}), Ko = /* @__PURE__ */ w("$ZodNever", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function at(e, t, n) {
  e.issues.length && t.issues.push(...Jt(n, e.issues)), t.value[n] = e.value;
}
const qo = /* @__PURE__ */ w("$ZodArray", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => {
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
      const a = r[s], c = t.element._zod.run({
        value: a,
        issues: []
      }, o);
      c instanceof Promise ? i.push(c.then((l) => at(l, n, s))) : at(c, n, s);
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
});
function Ie(e, t, n, o, r) {
  if (e.issues.length) {
    if (r && !(n in o))
      return;
    t.issues.push(...Jt(n, e.issues));
  }
  e.value === void 0 ? n in o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Yt(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const n = bo(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Wt(e, t, n, o, r, i) {
  const s = [], a = r.keySet, c = r.catchall._zod, l = c.def.type, f = c.optout === "optional";
  for (const g in t) {
    if (a.has(g))
      continue;
    if (l === "never") {
      s.push(g);
      continue;
    }
    const p = c.run({ value: t[g], issues: [] }, o);
    p instanceof Promise ? e.push(p.then((m) => Ie(m, n, g, t, f))) : Ie(p, n, g, t, f);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const Go = /* @__PURE__ */ w("$ZodObject", (e, t) => {
  if (D.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const a = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...a };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const o = Ke(() => Yt(t));
  I(e._zod, "propValues", () => {
    const a = t.shape, c = {};
    for (const l in a) {
      const f = a[l]._zod;
      if (f.values) {
        c[l] ?? (c[l] = /* @__PURE__ */ new Set());
        for (const g of f.values)
          c[l].add(g);
      }
    }
    return c;
  });
  const r = xe, i = t.catchall;
  let s;
  e._zod.parse = (a, c) => {
    s ?? (s = o.value);
    const l = a.value;
    if (!r(l))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: l,
        inst: e
      }), a;
    a.value = {};
    const f = [], g = s.shape;
    for (const p of s.keys) {
      const m = g[p], _ = m._zod.optout === "optional", $ = m._zod.run({ value: l[p], issues: [] }, c);
      $ instanceof Promise ? f.push($.then((C) => Ie(C, a, p, l, _))) : Ie($, a, p, l, _);
    }
    return i ? Wt(f, l, a, c, o.value, e) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), Yo = /* @__PURE__ */ w("$ZodObjectJIT", (e, t) => {
  Go.init(e, t);
  const n = e._zod.parse, o = Ke(() => Yt(t)), r = (p) => {
    const m = new Xo(["shape", "payload", "ctx"]), _ = o.value, $ = (R) => {
      const x = it(R);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const R of _.keys)
      C[R] = `key_${O++}`;
    m.write("const newResult = {};");
    for (const R of _.keys) {
      const x = C[R], S = it(R), de = p[R]?._zod?.optout === "optional";
      m.write(`const ${x} = ${$(R)};`), de ? m.write(`
        if (${x}.issues.length) {
          if (${S} in input) {
            payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${S}, ...iss.path] : [${S}]
            })));
          }
        }
        
        if (${x}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${x}.value;
        }
        
      `) : m.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        
        if (${x}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${x}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const T = m.compile();
    return (R, x) => T(p, R, x);
  };
  let i;
  const s = xe, a = !Lt.jitless, l = a && go.value, f = t.catchall;
  let g;
  e._zod.parse = (p, m) => {
    g ?? (g = o.value);
    const _ = p.value;
    return s(_) ? a && l && m?.async === !1 && m.jitless !== !0 ? (i || (i = r(t.shape)), p = i(p, m), f ? Wt([], _, p, m, g, e) : p) : n(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: _,
      inst: e
    }), p);
  };
});
function ct(e, t, n, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const r = e.filter((i) => !re(i));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((i) => i.issues.map((s) => te(s, o, ee())))
  }), t);
}
const Wo = /* @__PURE__ */ w("$ZodUnion", (e, t) => {
  D.init(e, t), I(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), I(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), I(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), I(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${r.map((i) => Ge(i.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1, o = t.options[0]._zod.run;
  e._zod.parse = (r, i) => {
    if (n)
      return o(r, i);
    let s = !1;
    const a = [];
    for (const c of t.options) {
      const l = c._zod.run({
        value: r.value,
        issues: []
      }, i);
      if (l instanceof Promise)
        a.push(l), s = !0;
      else {
        if (l.issues.length === 0)
          return l;
        a.push(l);
      }
    }
    return s ? Promise.all(a).then((c) => ct(c, r, e, i)) : ct(a, r, e, i);
  };
}), Ho = /* @__PURE__ */ w("$ZodIntersection", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value, i = t.left._zod.run({ value: r, issues: [] }, o), s = t.right._zod.run({ value: r, issues: [] }, o);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([c, l]) => lt(n, c, l)) : lt(n, i, s);
  };
});
function Me(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (be(e) && be(t)) {
    const n = Object.keys(t), o = Object.keys(e).filter((i) => n.indexOf(i) !== -1), r = { ...e, ...t };
    for (const i of o) {
      const s = Me(e[i], t[i]);
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
      const r = e[o], i = t[o], s = Me(r, i);
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
function lt(e, t, n) {
  const o = /* @__PURE__ */ new Map();
  let r;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      r ?? (r = a);
      for (const c of a.keys)
        o.has(c) || o.set(c, {}), o.get(c).l = !0;
    } else
      e.issues.push(a);
  for (const a of n.issues)
    if (a.code === "unrecognized_keys")
      for (const c of a.keys)
        o.has(c) || o.set(c, {}), o.get(c).r = !0;
    else
      e.issues.push(a);
  const i = [...o].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (i.length && r && e.issues.push({ ...r, keys: i }), re(e))
    return e;
  const s = Me(t.value, n.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const Qo = /* @__PURE__ */ w("$ZodEnum", (e, t) => {
  D.init(e, t);
  const n = Ft(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((r) => _o.has(typeof r)).map((r) => typeof r == "string" ? yo(r) : r.toString()).join("|")})$`), e._zod.parse = (r, i) => {
    const s = r.value;
    return o.has(s) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), r;
  };
}), er = /* @__PURE__ */ w("$ZodTransform", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new Zt(e.constructor.name);
    const r = t.transform(n.value, n);
    if (o.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((s) => (n.value = s, n));
    if (r instanceof Promise)
      throw new ie();
    return n.value = r, n;
  };
});
function ut(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Ht = /* @__PURE__ */ w("$ZodOptional", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), I(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Ge(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(n, o);
      return r instanceof Promise ? r.then((i) => ut(i, n.value)) : ut(r, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), tr = /* @__PURE__ */ w("$ZodExactOptional", (e, t) => {
  Ht.init(e, t), I(e._zod, "values", () => t.innerType._zod.values), I(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), nr = /* @__PURE__ */ w("$ZodNullable", (e, t) => {
  D.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Ge(n.source)}|null)$`) : void 0;
  }), I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), or = /* @__PURE__ */ w("$ZodDefault", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => dt(i, t)) : dt(r, t);
  };
});
function dt(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const rr = /* @__PURE__ */ w("$ZodPrefault", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), sr = /* @__PURE__ */ w("$ZodNonOptional", (e, t) => {
  D.init(e, t), I(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (n, o) => {
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => ft(i, e)) : ft(r, e);
  };
});
function ft(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const ir = /* @__PURE__ */ w("$ZodCatch", (e, t) => {
  D.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => te(s, o, ee()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: r.issues.map((i) => te(i, o, ee()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), ar = /* @__PURE__ */ w("$ZodPipe", (e, t) => {
  D.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(n, o);
      return i instanceof Promise ? i.then((s) => Re(s, t.in, o)) : Re(i, t.in, o);
    }
    const r = t.in._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => Re(i, t.out, o)) : Re(r, t.out, o);
  };
});
function Re(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const cr = /* @__PURE__ */ w("$ZodReadonly", (e, t) => {
  D.init(e, t), I(e._zod, "propValues", () => t.innerType._zod.propValues), I(e._zod, "values", () => t.innerType._zod.values), I(e._zod, "optin", () => t.innerType?._zod?.optin), I(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then(pt) : pt(r);
  };
});
function pt(e) {
  return e.value = Object.freeze(e.value), e;
}
const lr = /* @__PURE__ */ w("$ZodCustom", (e, t) => {
  ue.init(e, t), D.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = (n) => {
    const o = n.value, r = t.fn(o);
    if (r instanceof Promise)
      return r.then((i) => mt(i, n, o, e));
    mt(r, n, o, e);
  };
});
function mt(e, t, n, o) {
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
    o._zod.def.params && (r.params = o._zod.def.params), t.issues.push($e(r));
  }
}
var ht;
class ur {
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
function dr() {
  return new ur();
}
(ht = globalThis).__zod_globalRegistry ?? (ht.__zod_globalRegistry = dr());
const he = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function fr(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function pr(e, t) {
  return new e({
    type: "never",
    ...Z(t)
  });
}
// @__NO_SIDE_EFFECTS__
function mr(e, t) {
  return new Mo({
    check: "max_length",
    ...Z(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function vt(e, t) {
  return new Zo({
    check: "min_length",
    ...Z(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function hr(e, t) {
  return new Lo({
    check: "length_equals",
    ...Z(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function vr(e) {
  return new Fo({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function gr(e, t, n) {
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
function _r(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Z(n)
  });
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  const t = /* @__PURE__ */ br((n) => (n.addIssue = (o) => {
    if (typeof o == "string")
      n.issues.push($e(o, n.value, t._zod.def));
    else {
      const r = o;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = n.value), r.inst ?? (r.inst = t), r.continue ?? (r.continue = !t._zod.def.abort), n.issues.push($e(r));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
  const n = new ue({
    check: "custom",
    ...Z(t)
  });
  return n._zod.check = e, n;
}
function Qt(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? he,
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
function j(e, t, n = { path: [], schemaPath: [] }) {
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
    g && (s.ref || (s.ref = g), j(g, t, f), t.seen.get(g).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(s.schema, c), t.io === "input" && N(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function en(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = /* @__PURE__ */ new Map();
  for (const s of e.seen.entries()) {
    const a = e.metadataRegistry.get(s[0])?.id;
    if (a) {
      const c = o.get(a);
      if (c && c !== s[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(a, s[0]);
    }
  }
  const r = (s) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const g = e.external.registry.get(s[0])?.id, p = e.external.uri ?? ((_) => _);
      if (g)
        return { ref: p(g) };
      const m = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
      return s[1].defId = m, { defId: m, ref: `${p("__shared")}#/${a}/${m}` };
    }
    if (s[1] === n)
      return { ref: "#" };
    const l = `#/${a}/`, f = s[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: f, ref: l + f };
  }, i = (s) => {
    if (s[1].schema.$ref)
      return;
    const a = s[1], { ref: c, defId: l } = r(s);
    a.def = { ...a.schema }, l && (a.defId = l);
    const f = a.schema;
    for (const g in f)
      delete f[g];
    f.$ref = c;
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
      const l = e.external.registry.get(s[0])?.id;
      if (t !== s[0] && l) {
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
function tn(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (s) => {
    const a = e.seen.get(s);
    if (a.ref === null)
      return;
    const c = a.def ?? a.schema, l = { ...c }, f = a.ref;
    if (a.ref = null, f) {
      o(f);
      const p = e.seen.get(f), m = p.schema;
      if (m.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(m)) : Object.assign(c, m), Object.assign(c, l), s._zod.parent === f)
        for (const $ in c)
          $ === "$ref" || $ === "allOf" || $ in l || delete c[$];
      if (m.$ref && p.def)
        for (const $ in c)
          $ === "$ref" || $ === "allOf" || $ in p.def && JSON.stringify(c[$]) === JSON.stringify(p.def[$]) && delete c[$];
    }
    const g = s._zod.parent;
    if (g && g !== f) {
      o(g);
      const p = e.seen.get(g);
      if (p?.schema.$ref && (c.$ref = p.schema.$ref, p.def))
        for (const m in c)
          m === "$ref" || m === "allOf" || m in p.def && JSON.stringify(c[m]) === JSON.stringify(p.def[m]) && delete c[m];
    }
    e.override({
      zodSchema: s,
      jsonSchema: c,
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
          input: Se(t, "input", e.processors),
          output: Se(t, "output", e.processors)
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
const $r = (e, t = {}) => (n) => {
  const o = Qt({ ...n, processors: t });
  return j(e, o), en(o, e), tn(o, e);
}, Se = (e, t, n = {}) => (o) => {
  const { libraryOptions: r, target: i } = o ?? {}, s = Qt({ ...r ?? {}, target: i, io: t, processors: n });
  return j(e, s), en(s, e), tn(s, e);
}, zr = (e, t, n, o) => {
  n.not = {};
}, wr = (e, t, n, o) => {
}, Rr = (e, t, n, o) => {
  const r = e._zod.def, i = Ft(r.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Cr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, xr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Ir = (e, t, n, o) => {
  const r = n, i = e._zod.def, { minimum: s, maximum: a } = e._zod.bag;
  typeof s == "number" && (r.minItems = s), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = j(i.element, t, { ...o, path: [...o.path, "items"] });
}, Sr = (e, t, n, o) => {
  const r = n, i = e._zod.def;
  r.type = "object", r.properties = {};
  const s = i.shape;
  for (const l in s)
    r.properties[l] = j(s[l], t, {
      ...o,
      path: [...o.path, "properties", l]
    });
  const a = new Set(Object.keys(s)), c = new Set([...a].filter((l) => {
    const f = i.shape[l]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  c.size > 0 && (r.required = Array.from(c)), i.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : i.catchall ? i.catchall && (r.additionalProperties = j(i.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (r.additionalProperties = !1);
}, Or = (e, t, n, o) => {
  const r = e._zod.def, i = r.inclusive === !1, s = r.options.map((a, c) => j(a, t, {
    ...o,
    path: [...o.path, i ? "oneOf" : "anyOf", c]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, kr = (e, t, n, o) => {
  const r = e._zod.def, i = j(r.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), s = j(r.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), a = (l) => "allOf" in l && Object.keys(l).length === 1, c = [
    ...a(i) ? i.allOf : [i],
    ...a(s) ? s.allOf : [s]
  ];
  n.allOf = c;
}, Tr = (e, t, n, o) => {
  const r = e._zod.def, i = j(r.innerType, t, o), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = r.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Er = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Vr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, Pr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Ar = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
  let s;
  try {
    s = r.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = s;
}, Dr = (e, t, n, o) => {
  const r = e._zod.def, i = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  j(i, t, o);
  const s = t.seen.get(e);
  s.ref = i;
}, jr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.readOnly = !0;
}, nn = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Nr = (e, t) => {
  qt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Oo(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => So(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, Be, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, Be, 2);
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
}, F = w("ZodError", Nr, {
  Parent: Error
}), Br = /* @__PURE__ */ We(F), Mr = /* @__PURE__ */ He(F), Zr = /* @__PURE__ */ Ve(F), Lr = /* @__PURE__ */ Pe(F), Fr = /* @__PURE__ */ Eo(F), Xr = /* @__PURE__ */ Vo(F), Ur = /* @__PURE__ */ Po(F), Jr = /* @__PURE__ */ Ao(F), Kr = /* @__PURE__ */ Do(F), qr = /* @__PURE__ */ jo(F), Gr = /* @__PURE__ */ No(F), Yr = /* @__PURE__ */ Bo(F), A = /* @__PURE__ */ w("ZodType", (e, t) => (D.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Se(e, "input"),
    output: Se(e, "output")
  }
}), e.toJSONSchema = $r(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(Y(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, o) => W(e, n, o), e.brand = () => e, e.register = ((n, o) => (n.add(e, o), e)), e.parse = (n, o) => Br(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => Zr(e, n, o), e.parseAsync = async (n, o) => Mr(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => Lr(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => Fr(e, n, o), e.decode = (n, o) => Xr(e, n, o), e.encodeAsync = async (n, o) => Ur(e, n, o), e.decodeAsync = async (n, o) => Jr(e, n, o), e.safeEncode = (n, o) => Kr(e, n, o), e.safeDecode = (n, o) => qr(e, n, o), e.safeEncodeAsync = async (n, o) => Gr(e, n, o), e.safeDecodeAsync = async (n, o) => Yr(e, n, o), e.refine = (n, o) => e.check(Cs(n, o)), e.superRefine = (n) => e.check(xs(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ vr(n)), e.optional = () => _t(e), e.exactOptional = () => fs(e), e.nullable = () => yt(e), e.nullish = () => _t(yt(e)), e.nonoptional = (n) => _s(e, n), e.array = () => ts(e), e.or = (n) => ss([e, n]), e.and = (n) => as(e, n), e.transform = (n) => bt(e, us(n)), e.default = (n) => hs(e, n), e.prefault = (n) => gs(e, n), e.catch = (n) => bs(e, n), e.pipe = (n) => bt(e, n), e.readonly = () => ws(e), e.describe = (n) => {
  const o = e.clone();
  return he.add(o, { description: n }), o;
}, Object.defineProperty(e, "description", {
  get() {
    return he.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return he.get(e);
  const o = e.clone();
  return he.add(o, n[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), Wr = /* @__PURE__ */ w("ZodUnknown", (e, t) => {
  Jo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => wr();
});
function gt() {
  return /* @__PURE__ */ fr(Wr);
}
const Hr = /* @__PURE__ */ w("ZodNever", (e, t) => {
  Ko.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => zr(e, n, o);
});
function Qr(e) {
  return /* @__PURE__ */ pr(Hr, e);
}
const es = /* @__PURE__ */ w("ZodArray", (e, t) => {
  qo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ir(e, n, o, r), e.element = t.element, e.min = (n, o) => e.check(/* @__PURE__ */ vt(n, o)), e.nonempty = (n) => e.check(/* @__PURE__ */ vt(1, n)), e.max = (n, o) => e.check(/* @__PURE__ */ mr(n, o)), e.length = (n, o) => e.check(/* @__PURE__ */ hr(n, o)), e.unwrap = () => e.element;
});
function ts(e, t) {
  return /* @__PURE__ */ gr(es, e, t);
}
const ns = /* @__PURE__ */ w("ZodObject", (e, t) => {
  Yo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Sr(e, n, o, r), I(e, "shape", () => t.shape), e.keyof = () => cs(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: gt() }), e.loose = () => e.clone({ ...e._zod.def, catchall: gt() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Qr() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => wo(e, n), e.safeExtend = (n) => Ro(e, n), e.merge = (n) => Co(e, n), e.pick = (n) => $o(e, n), e.omit = (n) => zo(e, n), e.partial = (...n) => xo(on, e, n[0]), e.required = (...n) => Io(rn, e, n[0]);
});
function os(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...Z(t)
  };
  return new ns(n);
}
const rs = /* @__PURE__ */ w("ZodUnion", (e, t) => {
  Wo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Or(e, n, o, r), e.options = t.options;
});
function ss(e, t) {
  return new rs({
    type: "union",
    options: e,
    ...Z(t)
  });
}
const is = /* @__PURE__ */ w("ZodIntersection", (e, t) => {
  Ho.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => kr(e, n, o, r);
});
function as(e, t) {
  return new is({
    type: "intersection",
    left: e,
    right: t
  });
}
const Ze = /* @__PURE__ */ w("ZodEnum", (e, t) => {
  Qo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (o, r, i) => Rr(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (o, r) => {
    const i = {};
    for (const s of o)
      if (n.has(s))
        i[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Ze({
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
    return new Ze({
      ...t,
      checks: [],
      ...Z(r),
      entries: i
    });
  };
});
function cs(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Ze({
    type: "enum",
    entries: n,
    ...Z(t)
  });
}
const ls = /* @__PURE__ */ w("ZodTransform", (e, t) => {
  er.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => xr(e, n), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new Zt(e.constructor.name);
    n.addIssue = (i) => {
      if (typeof i == "string")
        n.issues.push($e(i, n.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push($e(s));
      }
    };
    const r = t.transform(n.value, n);
    return r instanceof Promise ? r.then((i) => (n.value = i, n)) : (n.value = r, n);
  };
});
function us(e) {
  return new ls({
    type: "transform",
    transform: e
  });
}
const on = /* @__PURE__ */ w("ZodOptional", (e, t) => {
  Ht.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => nn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function _t(e) {
  return new on({
    type: "optional",
    innerType: e
  });
}
const ds = /* @__PURE__ */ w("ZodExactOptional", (e, t) => {
  tr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => nn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function fs(e) {
  return new ds({
    type: "optional",
    innerType: e
  });
}
const ps = /* @__PURE__ */ w("ZodNullable", (e, t) => {
  nr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Tr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function yt(e) {
  return new ps({
    type: "nullable",
    innerType: e
  });
}
const ms = /* @__PURE__ */ w("ZodDefault", (e, t) => {
  or.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Vr(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function hs(e, t) {
  return new ms({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ut(t);
    }
  });
}
const vs = /* @__PURE__ */ w("ZodPrefault", (e, t) => {
  rr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Pr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function gs(e, t) {
  return new vs({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Ut(t);
    }
  });
}
const rn = /* @__PURE__ */ w("ZodNonOptional", (e, t) => {
  sr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Er(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function _s(e, t) {
  return new rn({
    type: "nonoptional",
    innerType: e,
    ...Z(t)
  });
}
const ys = /* @__PURE__ */ w("ZodCatch", (e, t) => {
  ir.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ar(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function bs(e, t) {
  return new ys({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const $s = /* @__PURE__ */ w("ZodPipe", (e, t) => {
  ar.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Dr(e, n, o, r), e.in = t.in, e.out = t.out;
});
function bt(e, t) {
  return new $s({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const zs = /* @__PURE__ */ w("ZodReadonly", (e, t) => {
  cr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => jr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function ws(e) {
  return new zs({
    type: "readonly",
    innerType: e
  });
}
const Rs = /* @__PURE__ */ w("ZodCustom", (e, t) => {
  lr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Cr(e, n);
});
function Cs(e, t = {}) {
  return /* @__PURE__ */ _r(Rs, e, t);
}
function xs(e) {
  return /* @__PURE__ */ yr(e);
}
function Is(e) {
  const t = It(), { field: n, registerField: o, unregisterField: r } = ho(), i = d(() => y(e.props)), s = d(() => i.value.name), a = d(() => e.formRootContext?.modelValue.value), c = d(() => e.formRootContext?.props?.rules), l = d(() => s.value && a.value && rt(a.value, s.value)), f = d(() => !!(e.formRootContext?.props.disabled || i.value?.disabled)), g = d(() => {
    if (!s.value || !c.value)
      return null;
    const S = rt(c.value, s.value);
    return S instanceof A ? S : null;
  }), p = d(() => !!g.value), m = d(() => g.value ? !g.value.safeParse(void 0).success : !1), {
    validationStatus: _,
    validationErrors: $,
    clearValidateErrors: C,
    validate: O
  } = vo({
    data: () => s.value ? {
      [s.value]: l.value
    } : null,
    schema: () => !s.value || !g.value ? null : os({
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
    validationStatus: _.value,
    isValidatable: p.value,
    isRequired: m.value,
    registerField: o,
    unregisterField: r,
    reset: R,
    validate: O,
    clearValidateErrors: C
  }));
  function R() {
    !l.value || !i.value.name || (n.value?.reset(), C());
  }
  const x = Je(() => O(), 300);
  return Fe(() => {
    x.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), K(T, (S) => {
    e.formRootContext?.registerFormItem(S);
  }, {
    deep: !0,
    immediate: !0
  }), K(l, () => x()), K(() => _.value.isSuccess, (S) => {
    S && C();
  }), {
    id: t,
    validationErrors: $,
    validationStatus: _,
    isDisabled: f,
    isRequired: m,
    reset: R,
    validate: O,
    clearValidateErrors: C,
    registerField: o,
    unregisterField: r
  };
}
const Ss = /* @__PURE__ */ z({
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
      unregisterFormItem: c,
      validate: l,
      clearValidate: f,
      reset: g
    } = mo({
      modelValue: () => i.value,
      onValid: () => {
        r("valid");
      },
      onInvalid: () => {
        r("invalid");
      }
    });
    async function p() {
      const m = await l();
      r("submit", {
        isValid: m,
        reset: g
      });
    }
    return B(Dt, {
      props: o,
      modelValue: i,
      registerFormItem: a,
      unregisterFormItem: c
    }), t({
      validate: l,
      clearValidate: f,
      reset: g
    }), (m, _) => (h(), v("form", {
      class: k(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: kn(p, ["prevent"])
    }, [
      b(m.$slots, "default", { isValid: u(s) })
    ], 34));
  }
}), Os = {
  key: 0,
  class: "form-item__header"
}, ks = { class: "form-item__body" }, Ts = {
  key: 1,
  class: "form-item__footer"
}, Es = /* @__PURE__ */ z({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, i = St(), s = Nt(), {
      validationErrors: a,
      validationStatus: c,
      isDisabled: l,
      isRequired: f,
      registerField: g,
      unregisterField: p,
      reset: m,
      validate: _,
      clearValidateErrors: $
    } = Is({
      formRootContext: s,
      props: () => o,
      onValid: () => {
        r("valid");
      },
      onInvalid: () => {
        r("invalid");
      }
    }), C = Ce("root"), O = d(() => ({
      validationStatus: c.value,
      isRequired: f.value,
      errors: a.value
    }));
    return B(jt, {
      props: o,
      validationStatus: c,
      validationErrors: a,
      isRequired: f,
      isDisabled: l,
      registerField: g,
      unregisterField: p,
      reset: m,
      validate: _,
      clearValidateErrors: $
    }), t({
      reset: m,
      validate: _,
      clearValidateErrors: $
    }), (T, R) => (h(), v("div", {
      ref_key: "root",
      ref: C,
      class: k(["form-item", [
        {
          "form-item--disabled": u(l),
          "form-item--required": u(f),
          "form-item--invalid": u(c).isError,
          "form-item--validating": u(c).isValidating,
          "form-item--valid": u(c).isSuccess
        }
      ]])
    }, [
      i?.header ? (h(), v("div", Os, [
        b(T.$slots, "header", ve(ge(O.value)))
      ])) : ce("", !0),
      U("div", ks, [
        b(T.$slots, "default", ve(ge(O.value)))
      ]),
      i.footer ? (h(), v("div", Ts, [
        b(T.$slots, "footer", ve(ge(O.value)))
      ])) : ce("", !0)
    ], 2));
  }
}), Vs = {}, Ps = { class: "form-item-title" };
function As(e, t) {
  return h(), v("div", Ps, [
    b(e.$slots, "default")
  ]);
}
const Ds = /* @__PURE__ */ E(Vs, [["render", As]]), js = {}, Ns = { class: "form-item-required" };
function Bs(e, t) {
  return h(), v("span", Ns, [
    b(e.$slots, "default", {}, () => [
      t[0] || (t[0] = q(" * ", -1))
    ])
  ]);
}
const Ms = /* @__PURE__ */ E(js, [["render", Bs]]), Zs = { class: "form-item-errors" }, Ls = /* @__PURE__ */ z({
  __name: "FormItemErrors",
  setup(e) {
    const t = Bt(), n = d(() => t?.validationErrors.value ?? []);
    return (o, r) => (h(), v("div", Zs, [
      (h(!0), v(J, null, Ot(n.value, (i, s) => (h(), v("div", {
        key: `error-${s}`,
        class: "form-item-errors__item"
      }, se(i.message), 1))), 128))
    ]));
  }
}), pl = {
  Root: Ss,
  Item: Es,
  ItemTitle: Ds,
  ItemRequired: Ms,
  ItemErrors: Ls
};
function Fs() {
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
function ae(e, t = !1) {
  return t && Array.isArray(e);
}
function Xs(e) {
  const t = d(() => y(e.multiple)), n = d(() => y(e.modelValue)), o = d(() => y(e.options)), r = d(() => o.value.find((s) => s.props.value === n.value)), i = d(() => {
    if (!ae(n.value, t.value))
      return [];
    const s = new Set(n.value);
    return o.value.filter((a) => s.has(a.props.value));
  });
  return {
    activeOption: r,
    activeOptions: i
  };
}
function Us(e) {
  const t = d(() => y(e.modelValue)), n = d(() => y(e.props)), { options: o, registerOption: r, unregisterOption: i } = Fs(), { activeOption: s, activeOptions: a } = Xs({
    multiple: () => !!n.value.multiple,
    options: () => o.value,
    modelValue: () => t.value
  }), [c, l, f] = Q(), g = d(() => ae(t.value, n.value.multiple) ? t.value.length > 0 : !!t.value), p = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.disabled));
  function m(C) {
    if (!p.value) {
      if (ae(t.value, n.value.multiple)) {
        const O = /* @__PURE__ */ new Set([...t.value]);
        O.has(C) ? O.delete(C) : O.add(C), e.onChangeModel?.([...O]), e.onChange?.([...O]);
        return;
      }
      e.onChangeModel?.(C), e.onChange?.(C), l(!1);
    }
  }
  function _() {
    if (ae(t.value, n.value.multiple)) {
      e.onChangeModel?.([]), e.onChange?.([]);
      return;
    }
    e.onChangeModel?.(void 0), e.onChange?.(void 0), e.onClear?.();
  }
  function $() {
    p.value || f();
  }
  return Oe(() => {
    e.formItemContext?.registerField({
      reset: _
    });
  }), Fe(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: s,
    activeOptions: a,
    hasValue: g,
    isOpen: c,
    isDisabled: p,
    toggle: $,
    registerOption: r,
    unregisterOption: i,
    setModelValue: m,
    reset: _
  };
}
function Js(e) {
  const t = It(), n = d(() => y(e.selectRootContext?.modelValue)), o = d(() => y(e.props)), r = d(() => !!y(e.selectRootContext?.props)?.multiple), i = d(() => ae(n.value, r.value) ? n.value.includes(o.value.value) : n.value === o.value.value), s = d(() => !!(y(e.selectRootContext?.isDisabled) || o.value?.disabled)), a = d(() => ({
    id: t,
    props: o.value
  }));
  function c(l) {
    e.selectRootContext?.setModelValue(l);
  }
  return K(a, (l) => {
    e.selectRootContext?.registerOption(l);
  }, {
    deep: !0,
    immediate: !0
  }), Fe(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: i,
    isDisabled: s,
    handleChange: c
  };
}
function Ks(e) {
  const t = d(() => y(e.selectRootContext?.props)), n = d(() => y(e.selectRootContext?.activeOption)), o = d(() => y(e.selectRootContext?.activeOptions) ?? []), r = d(() => !!y(e.selectRootContext?.hasValue)), i = d(() => ae(y(e.selectRootContext?.modelValue), !!t.value?.multiple)), s = d(() => t.value?.placeholder);
  return {
    activeOption: n,
    activeOptions: o,
    hasValue: r,
    isMultiple: i,
    placeholder: s
  };
}
const sn = /* @__PURE__ */ Symbol("SelectRootContextKey");
function Ae() {
  return M(sn, null);
}
const qs = /* @__PURE__ */ z({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: c } = X(), {
      activeOption: l,
      activeOptions: f,
      hasValue: g,
      isOpen: p,
      isDisabled: m,
      toggle: _,
      registerOption: $,
      unregisterOption: C,
      setModelValue: O
    } = Us({
      formRootContext: i,
      formItemContext: s,
      modelValue: () => r.value,
      props: () => n,
      onChangeModel: (T) => {
        r.value = T;
      },
      onChange: (T) => {
        o("change", T);
      },
      onClear: () => {
        o("clear");
      }
    });
    return B(sn, {
      activeOption: () => l.value,
      activeOptions: () => f.value,
      modelValue: () => r.value,
      props: () => n,
      hasValue: () => g.value,
      isOpen: () => p.value,
      isDisabled: () => m.value,
      toggle: _,
      registerOption: $,
      unregisterOption: C,
      setModelValue: O
    }), (T, R) => (h(), v("div", {
      class: k(["select", {
        "select--disabled": u(m),
        "select--open": u(p),
        "select--filled": u(g),
        "select--invalid": u(c),
        "select--valid": u(a)
      }])
    }, [
      b(T.$slots, "default")
    ], 2));
  }
}), Gs = /* @__PURE__ */ z({
  __name: "SelectOption",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Ae(), { isActive: o, isDisabled: r, handleChange: i } = Js({
      selectRootContext: n,
      props: () => t
    });
    return (s, a) => (h(), v("div", {
      class: k(["select-option", {
        "select-option--active": u(o),
        "select-option--disabled": u(r)
      }]),
      onClick: a[0] || (a[0] = (c) => u(i)(e.value))
    }, [
      b(s.$slots, "default", {
        isActive: u(o),
        isDisabled: u(r)
      })
    ], 2));
  }
}), Ys = /* @__PURE__ */ z({
  __name: "SelectTrigger",
  setup(e) {
    const t = Ae();
    function n() {
      t?.toggle();
    }
    return (o, r) => (h(), v("button", {
      type: "button",
      class: "select-trigger",
      onClick: n
    }, [
      b(o.$slots, "default")
    ]));
  }
}), Ws = { class: "select-dropdown" }, Hs = /* @__PURE__ */ z({
  __name: "SelectDropdown",
  setup(e) {
    const t = Ae(), n = d(() => !!y(t?.isOpen));
    return (o, r) => G((h(), v("div", Ws, [
      b(o.$slots, "default")
    ], 512)), [
      [xt, n.value]
    ]);
  }
}), Qs = { class: "select-value" }, ei = /* @__PURE__ */ z({
  __name: "SelectValue",
  setup(e) {
    const t = Ae(), { activeOption: n, activeOptions: o, hasValue: r, isMultiple: i, placeholder: s } = Ks({
      selectRootContext: t
    });
    return (a, c) => (h(), v("div", Qs, [
      b(a.$slots, "default", {}, () => [
        u(r) ? (h(), v(J, { key: 0 }, [
          u(i) ? (h(!0), v(J, { key: 0 }, Ot(u(o), (l) => (h(), v(J, null, [
            q(se(l.props.value), 1)
          ], 64))), 256)) : (h(), v(J, { key: 1 }, [
            q(se(u(n)?.props.value), 1)
          ], 64))
        ], 64)) : (h(), v(J, { key: 1 }, [
          q(se(u(s)), 1)
        ], 64))
      ])
    ]));
  }
}), ml = {
  Root: qs,
  Option: Gs,
  Trigger: Ys,
  Dropdown: Hs,
  Value: ei
};
function ti(e) {
  const t = d(() => y(e.inputRootContext?.props));
  return {
    props: d(() => ({
      disabled: !!y(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function ni(e) {
  const t = d(() => y(e.inputRootContext?.props));
  return {
    props: d(() => ({
      disabled: !!y(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function oi(e) {
  const [t, n] = Q(), o = d(() => y(e.props)), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.loading || o.value?.disabled)), i = d(() => o.value.type === Mt.TEXTAREA), s = d(() => !!y(e.modelValue)?.trim());
  function a(l) {
    e.onUpdateModelValue?.(l);
  }
  function c() {
    a("");
  }
  return {
    isFocus: t,
    isDisabled: r,
    isTextarea: i,
    hasValue: s,
    setFocus: n,
    setModelValue: a,
    reset: c
  };
}
function an(e) {
  return {
    modelValue: d({
      get: () => y(e.inputRootContext?.modelValue),
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
function ri(e) {
  const t = d(() => y(e.inputRootContext?.props)), n = d(() => !!t.value?.clearable);
  function o() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: n,
    handleClear: o
  };
}
const cn = /* @__PURE__ */ Symbol("InputRootContextKey");
function Qe() {
  return M(cn, null);
}
const si = /* @__PURE__ */ z({
  __name: "InputRoot",
  props: /* @__PURE__ */ P({
    type: { default: Mt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: me.TEXT },
    inputMode: { default: lo.TEXT },
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
    const o = e, r = n, i = L(e, "modelValue"), { formRootContext: s, formItemContext: a, isValid: c, isInvalid: l } = X(), { isDisabled: f, isTextarea: g, hasValue: p, isFocus: m, setFocus: _, setModelValue: $, reset: C } = oi({
      formRootContext: s,
      formItemContext: a,
      modelValue: () => i.value,
      props: () => o,
      onUpdateModelValue: (O) => {
        i.value = O;
      }
    });
    return B(cn, {
      isDisabled: () => f.value,
      props: () => o,
      modelValue: () => i.value,
      setFocus: _,
      setModelValue: $,
      reset: C,
      emit: r
    }), t({
      setFocus: _
    }), (O, T) => (h(), v("div", {
      class: k(["input", {
        "input--focus": u(m),
        "input--textarea": u(g),
        "input--filled": u(p),
        "input--disabled": u(f),
        "input--loading": e.loading,
        "input--invalid": u(l),
        "input--valid": u(c)
      }])
    }, [
      b(O.$slots, "default", {
        isTextarea: u(g),
        isFocus: u(m),
        hasValue: u(p),
        loading: !!e.loading,
        isInvalid: u(l),
        isValid: u(c)
      })
    ], 2));
  }
}), ii = {}, ai = { class: "input-before" };
function ci(e, t) {
  return h(), v("div", ai, [
    b(e.$slots, "default")
  ]);
}
const li = /* @__PURE__ */ E(ii, [["render", ci]]), ui = { class: "input-after" }, di = /* @__PURE__ */ z({
  __name: "InputAfter",
  setup(e) {
    const t = Qe(), { isClearable: n, handleClear: o } = ri({
      inputRootContext: t
    });
    return (r, i) => (h(), v("div", ui, [
      b(r.$slots, "default"),
      u(n) ? (h(), v("button", {
        key: 0,
        type: "button",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...s) => u(o) && u(o)(...s))
      }, " × ")) : ce("", !0)
    ]));
  }
}), fi = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], pi = /* @__PURE__ */ z({
  __name: "InputNative",
  setup(e) {
    const t = Qe(), { modelValue: n, listeners: o } = an({
      inputRootContext: t
    }), { props: r } = ni({
      inputRootContext: t
    });
    return (i, s) => G((h(), v("input", le({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => ke(n) ? n.value = a : null),
      type: u(r).nativeType,
      inputmode: u(r).inputMode,
      readonly: u(r).readonly,
      disabled: u(r).disabled,
      autocomplete: u(r).autocomplete,
      placeholder: u(r).placeholder,
      class: "input-native"
    }, Te(u(o), !0)), null, 16, fi)), [
      [Tn, u(n)]
    ]);
  }
}), mi = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], hi = /* @__PURE__ */ z({
  __name: "InputTextarea",
  setup(e) {
    const t = Qe(), { modelValue: n, listeners: o } = an({
      inputRootContext: t
    }), { props: r } = ti({
      inputRootContext: t
    });
    return (i, s) => G((h(), v("textarea", le({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => ke(n) ? n.value = a : null),
      readonly: u(r).readonly,
      disabled: u(r).disabled,
      autocomplete: u(r).autocomplete,
      rows: u(r).rows,
      cols: u(r).cols,
      placeholder: u(r).placeholder,
      class: "input-textarea"
    }, Te(u(o), !0)), null, 16, mi)), [
      [kt, u(n)]
    ]);
  }
}), vi = {}, gi = { class: "input-control" };
function _i(e, t) {
  return h(), v("div", gi, [
    b(e.$slots, "default")
  ]);
}
const yi = /* @__PURE__ */ E(vi, [["render", _i]]), bi = {}, $i = { class: "input-group" };
function zi(e, t) {
  return h(), v("div", $i, [
    b(e.$slots, "default")
  ]);
}
const wi = /* @__PURE__ */ E(bi, [["render", zi]]), Ri = {}, Ci = { class: "input-group-addon" };
function xi(e, t) {
  return h(), v("div", Ci, [
    b(e.$slots, "default")
  ]);
}
const Ii = /* @__PURE__ */ E(Ri, [["render", xi]]), pe = {
  Root: si,
  Before: li,
  After: di,
  Native: pi,
  Textarea: hi,
  Control: yi,
  Group: wi,
  GroupAddon: Ii
}, ln = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function Si() {
  return M(ln, null);
}
function Oi(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), r = d(() => uo(n.value) ? n.value : t.value.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : !1), i = d(() => !!(r.value || t.value?.checked)), s = d(() => !!t.value?.indeterminate);
  return {
    isActive: r,
    isDisabled: o,
    isChecked: i,
    isIndeterminate: s
  };
}
function ki(e) {
  const t = d(() => !!y(e.checkboxRootContext?.isDisabled)), n = d(() => !!y(e.checkboxRootContext?.isActive)), o = d(() => !!y(e.checkboxRootContext?.isIndeterminate)), r = d(() => !!y(e.checkboxRootContext?.isValid)), i = d(() => !!y(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isIndeterminate: o,
    isValid: r,
    isInvalid: i
  };
}
const Ti = ["value", "disabled", "checked"], Ei = /* @__PURE__ */ z({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: c } = X(), { isChecked: l, isDisabled: f, isIndeterminate: g } = Oi({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    }), p = Ce("inputRef");
    return K([p, g], ([m, _]) => {
      m && (m.indeterminate = !!_);
    }, {
      immediate: !0
    }), B(ln, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => l.value,
      isDisabled: () => f.value,
      isIndeterminate: () => g.value,
      isValid: () => a.value,
      isInvalid: () => c.value
    }), (m, _) => (h(), v("label", {
      class: k(["checkbox", {
        "checkbox--disabled": u(f),
        "checkbox--active": u(l),
        "checkbox--indeterminate": u(g),
        "checkbox--invalid": u(c),
        "checkbox--valid": u(a)
      }])
    }, [
      G(U("input", le({
        ref_key: "inputRef",
        ref: p,
        "onUpdate:modelValue": _[0] || (_[0] = ($) => r.value = $),
        value: e.value,
        type: "checkbox",
        disabled: u(f),
        checked: u(l),
        class: "checkbox__input"
      }, Te(o, !0)), null, 16, Ti), [
        [Tt, r.value]
      ]),
      b(m.$slots, "default")
    ], 2));
  }
}), Vi = /* @__PURE__ */ z({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = Si(), { isDisabled: n, isActive: o, isIndeterminate: r, isValid: i, isInvalid: s } = ki({
      checkboxRootContext: t
    });
    return (a, c) => (h(), v("span", {
      class: k(["checkbox-indicator", {
        "checkbox-indicator--disabled": u(n),
        "checkbox-indicator--active": u(o),
        "checkbox-indicator--indeterminate": u(r),
        "checkbox-indicator--valid": u(i),
        "checkbox-indicator--invalid": u(s)
      }])
    }, [
      b(a.$slots, "default", {
        isDisabled: u(n),
        isActive: u(o),
        isIndeterminate: u(r),
        isValid: u(i),
        isInvalid: u(s)
      }, () => [
        q(se(u(o) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), Pi = {}, Ai = { class: "checkbox-title" };
function Di(e, t) {
  return h(), v("span", Ai, [
    b(e.$slots, "default")
  ]);
}
const ji = /* @__PURE__ */ E(Pi, [["render", Di]]), Ni = /* @__PURE__ */ z({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: k(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), hl = {
  Root: Ei,
  Indicator: Vi,
  Title: ji,
  Group: Ni
};
function Bi(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: d(() => n.value === t.value.value),
    isDisabled: o
  };
}
function Mi(e) {
  const t = d(() => !!y(e.radioRootContext?.isDisabled)), n = d(() => !!y(e.radioRootContext?.isActive)), o = d(() => !!y(e.radioRootContext?.isValid)), r = d(() => !!y(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const un = /* @__PURE__ */ Symbol("RadioRootContextKey");
function Zi() {
  return M(un, null);
}
const Li = ["value", "disabled"], Fi = /* @__PURE__ */ z({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: c } = X(), { isActive: l, isDisabled: f } = Bi({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    });
    return B(un, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => l.value,
      isDisabled: () => f.value,
      isValid: () => a.value,
      isInvalid: () => c.value
    }), (g, p) => (h(), v("label", {
      class: k(["radio", {
        "radio--disabled": u(f),
        "radio--active": u(l),
        "radio--invalid": u(c),
        "radio--valid": u(a)
      }])
    }, [
      G(U("input", le({
        "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
        value: e.value,
        type: "radio",
        disabled: u(f),
        class: "radio__input"
      }, Te(o, !0)), null, 16, Li), [
        [En, r.value]
      ]),
      b(g.$slots, "default")
    ], 2));
  }
}), Xi = /* @__PURE__ */ z({
  __name: "RadioIndicator",
  setup(e) {
    const t = Zi(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = Mi({
      radioRootContext: t
    });
    return (s, a) => (h(), v("span", {
      class: k(["radio-indicator", {
        "radio-indicator--disabled": u(n),
        "radio-indicator--active": u(o),
        "radio-indicator--valid": u(r),
        "radio-indicator--invalid": u(i)
      }])
    }, [
      b(s.$slots, "default", {
        isDisabled: u(n),
        isActive: u(o),
        isValid: u(r),
        isInvalid: u(i)
      }, () => [
        q(se(u(o) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), Ui = {}, Ji = { class: "radio-title" };
function Ki(e, t) {
  return h(), v("span", Ji, [
    b(e.$slots, "default")
  ]);
}
const qi = /* @__PURE__ */ E(Ui, [["render", Ki]]), Gi = /* @__PURE__ */ z({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: k(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), vl = {
  Root: Fi,
  Indicator: Xi,
  Title: qi,
  Group: Gi
};
function Yi(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: n,
    isDisabled: o
  };
}
function Wi(e) {
  const t = d(() => !!y(e.switchRootContext?.isDisabled)), n = d(() => !!y(e.switchRootContext?.isActive)), o = d(() => !!y(e.switchRootContext?.isValid)), r = d(() => !!y(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const dn = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function Hi() {
  return M(dn, null);
}
const Qi = { class: "switch" }, ea = ["disabled"], ta = /* @__PURE__ */ z({
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
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = X(), { isDisabled: a, isActive: c } = Yi({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value
    });
    return B(dn, {
      props: () => t,
      isActive: () => c.value,
      isDisabled: () => a.value,
      isValid: () => i.value,
      isInvalid: () => s.value
    }), (l, f) => (h(), v("label", Qi, [
      G(U("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (g) => n.value = g),
        type: "checkbox",
        disabled: u(a),
        class: "switch__input"
      }, null, 8, ea), [
        [Tt, n.value]
      ]),
      b(l.$slots, "default")
    ]));
  }
}), na = /* @__PURE__ */ z({
  __name: "SwitchIndicator",
  setup(e) {
    const t = Hi(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = Wi({
      switchRootContext: t
    });
    return (s, a) => (h(), v("span", {
      class: k(["switch-indicator", {
        "switch-indicator--disabled": u(n),
        "switch-indicator--active": u(o),
        "switch-indicator--valid": u(r),
        "switch-indicator--invalid": u(i)
      }])
    }, null, 2));
  }
}), oa = {}, ra = { class: "switch-title" };
function sa(e, t) {
  return h(), v("span", ra, [
    b(e.$slots, "default")
  ]);
}
const ia = /* @__PURE__ */ E(oa, [["render", sa]]), gl = {
  Root: ta,
  Indicator: na,
  Title: ia
}, fn = 1, aa = -1 / 0, ca = 1 / 0, la = 100, pn = 0, $t = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function ua(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => t.value.step || fn), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), i = d(() => r.value || oe(t.value.min) && n.value === t.value.min), s = d(() => r.value || oe(t.value.max) && !(n.value < t.value.max));
  function a() {
    if (t.value.readonly)
      return;
    const f = n.value - o.value;
    (!oe(t.value.min) || f >= t.value.min) && e.onDecrement?.(f);
  }
  function c() {
    if (t.value.readonly)
      return;
    const f = n.value + o.value;
    (!oe(t.value.max) || f <= t.value.max) && e.onIncrement?.(f);
  }
  function l(f) {
    e.onUpdateModelValue?.(f);
  }
  return {
    step: o,
    isDisabled: r,
    isDecrementDisabled: i,
    isIncrementDisabled: s,
    handleDecrement: a,
    handleIncrement: c,
    setModelValue: l
  };
}
function da(e) {
  const t = d(() => y(e.mousewheel)), n = d(() => oe(t.value) && t.value > 0 ? t.value : la);
  return {
    handleWheel: Ue((r) => {
      t.value && (r.preventDefault(), r.stopImmediatePropagation(), r.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, n.value)
  };
}
function fa(e) {
  const t = d(() => y(e.inputNumberRootContext?.props)), n = d({
    get: () => y(e.inputNumberRootContext?.modelValue) ?? pn,
    set(r) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(r);
    }
  });
  return {
    props: d(() => ({
      step: y(e.inputNumberRootContext?.step),
      disabled: y(e.inputNumberRootContext?.isDisabled),
      min: t.value?.min,
      max: t.value?.max,
      readonly: t.value?.readonly,
      placeholder: t.value?.placeholder,
      autocomplete: t.value?.autocomplete
    })),
    modelValue: n
  };
}
function pa(e) {
  const t = d(() => y(e.props)), n = d(() => t.value.action === $t.DECREMENT), o = d(() => t.value.action === $t.INCREMENT), r = d(() => n.value ? !!y(e.inputNumberRootContext?.isDecrementDisabled) : !!y(e.inputNumberRootContext?.isIncrementDisabled));
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
const mn = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function hn() {
  return M(mn, null);
}
const ma = /* @__PURE__ */ z({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ P({
    mousewheel: { type: [Boolean, Number] },
    min: { default: aa },
    max: { default: ca },
    step: { default: fn },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    direction: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      default: pn
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = X(), {
      step: a,
      isDisabled: c,
      isDecrementDisabled: l,
      isIncrementDisabled: f,
      handleDecrement: g,
      handleIncrement: p,
      setModelValue: m
    } = ua({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value,
      onUpdateModelValue: (_) => {
        n.value = _;
      },
      onDecrement: (_) => {
        n.value = _;
      },
      onIncrement: (_) => {
        n.value = _;
      }
    });
    return B(mn, {
      props: () => t,
      isDisabled: () => c.value,
      modelValue: () => n.value,
      step: () => a.value,
      isDecrementDisabled: () => l.value,
      isIncrementDisabled: () => f.value,
      handleDecrement: g,
      handleIncrement: p,
      setModelValue: m
    }), (_, $) => (h(), v("div", {
      class: k(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": u(s),
        "input-number--valid": u(i)
      }])
    }, [
      b(_.$slots, "default")
    ], 2));
  }
}), ha = { class: "input-number-input" }, va = /* @__PURE__ */ z({
  __name: "InputNumberInput",
  setup(e) {
    const t = hn(), { props: n, modelValue: o } = fa({
      inputNumberRootContext: t
    }), { handleWheel: r } = da({
      mousewheel: () => y(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (i, s) => (h(), v("div", ha, [
      G(U("input", le({
        "onUpdate:modelValue": s[0] || (s[0] = (a) => ke(o) ? o.value = a : null),
        type: "number",
        class: "input-number-input__native"
      }, u(n), {
        onWheel: s[1] || (s[1] = //@ts-ignore
        (...a) => u(r) && u(r)(...a))
      }), null, 16), [
        [
          kt,
          u(o),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), ga = ["disabled"], _a = /* @__PURE__ */ z({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, n = hn(), { handleAction: o, isDisabled: r, isDecrement: i, isIncrement: s } = pa({
      inputNumberRootContext: n,
      props: () => t
    });
    return (a, c) => (h(), v("button", {
      class: k(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: u(r),
      type: "button",
      onClick: c[0] || (c[0] = //@ts-ignore
      (...l) => u(o) && u(o)(...l))
    }, [
      b(a.$slots, "default", {}, () => [
        u(i) ? (h(), v(J, { key: 0 }, [
          q(" - ")
        ], 64)) : u(s) ? (h(), v(J, { key: 1 }, [
          q(" + ")
        ], 64)) : ce("", !0)
      ])
    ], 10, ga));
  }
}), _l = {
  Root: ma,
  Input: va,
  Button: _a
};
function ya() {
  const e = V(me.PASSWORD);
  function t() {
    e.value === me.PASSWORD ? e.value = me.TEXT : e.value = me.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const ba = /* @__PURE__ */ z({
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
    const t = e, n = St(), o = L(e, "modelValue"), { currentType: r, handleToggleType: i } = ya();
    return (s, a) => (h(), tt(u(pe).Root, le(t, {
      modelValue: o.value,
      "onUpdate:modelValue": a[1] || (a[1] = (c) => o.value = c),
      "native-type": u(r)
    }), {
      default: ze((c) => [
        n?.before ? (h(), tt(u(pe).Before, { key: 0 }, {
          default: ze(() => [
            b(s.$slots, "before", ve(ge(c)))
          ]),
          _: 2
        }, 1024)) : ce("", !0),
        Ne(u(pe).Control, null, {
          default: ze(() => [
            Ne(u(pe).Native)
          ]),
          _: 1
        }),
        Ne(u(pe).After, null, {
          default: ze(() => [
            b(s.$slots, "after", ve(ge(c)), () => [
              U("button", {
                type: "button",
                onClick: a[0] || (a[0] = //@ts-ignore
                (...l) => u(i) && u(i)(...l))
              }, " 👁 ")
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["modelValue", "native-type"]));
  }
}), yl = {
  Root: ba
};
function $a(e) {
  const t = d(() => y(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function za(e) {
  return {
    isDisabled: d(() => {
      const n = e.inputCodeRootContext;
      return n ? !!y(n.isDisabled) : !1;
    })
  };
}
const vn = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function wa() {
  return M(vn, null);
}
const Ra = /* @__PURE__ */ z({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = X(), { isDisabled: s } = $a({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return B(vn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, c) => (h(), v("div", {
      class: k(["input-code", {
        "input-code--disabled": u(s),
        "input-code--invalid": u(i),
        "input-code--valid": u(r)
      }])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ca = ["disabled", "aria-disabled"], xa = /* @__PURE__ */ z({
  __name: "InputCodePin",
  setup(e) {
    const t = wa(), { isDisabled: n } = za({
      inputCodeRootContext: t
    });
    return (o, r) => (h(), v("input", {
      type: "text",
      disabled: u(n),
      "aria-disabled": u(n),
      class: "input-code-pin"
    }, null, 8, Ca));
  }
}), bl = {
  Root: Ra,
  Pin: xa
}, gn = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function _n() {
  return M(gn, null);
}
function Ia(e) {
  const t = d(() => y(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Sa(e) {
  function t(o) {
  }
  function n(o) {
  }
  return {
    handleEnter: t,
    handleTab: n
  };
}
const Oa = /* @__PURE__ */ z({
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
    const n = e, o = L(e, "modelValue"), { formRootContext: r, formItemContext: i, isValid: s, isInvalid: a } = X(), { isDisabled: c } = Ia({
      formRootContext: r,
      formItemContext: i,
      props: () => n
    });
    return B(gn, {
      props: () => n,
      modelValue: () => o.value,
      isDisabled: () => c.value
    }), (l, f) => (h(), v("div", {
      class: k(["input-tags", {
        "input-tags--disabled": u(c),
        "input-tags--invalid": u(a),
        "input-tags--valid": u(s)
      }])
    }, [
      b(l.$slots, "default")
    ], 2));
  }
}), ka = { class: "input-tags-input" }, Ta = /* @__PURE__ */ z({
  __name: "InputTagsInput",
  setup(e) {
    _n();
    const { handleEnter: t, handleTab: n } = Sa();
    return (o, r) => (h(), v("div", ka, [
      U("input", {
        type: "text",
        onKeydown: [
          r[0] || (r[0] = nt(
            //@ts-ignore
            (...i) => u(t) && u(t)(...i),
            ["enter"]
          )),
          r[1] || (r[1] = nt(
            //@ts-ignore
            (...i) => u(n) && u(n)(...i),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), Ea = { class: "input-tags-tags" }, Va = /* @__PURE__ */ z({
  __name: "InputTagsTags",
  setup(e) {
    return _n(), (t, n) => (h(), v("div", Ea));
  }
}), $l = {
  Root: Oa,
  Input: Ta,
  Tags: Va
};
function Pa(e) {
  const t = d(() => y(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Aa(e) {
  return {
    isDisabled: d(() => !!y(e.inputRangeRootContext?.isDisabled))
  };
}
const yn = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function Da() {
  return M(yn, null);
}
const ja = /* @__PURE__ */ z({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = X(), { isDisabled: s } = Pa({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return B(yn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, c) => (h(), v("div", {
      class: k(["input-range", {
        "input-range--disabled": u(s),
        "input-range--invalid": u(i),
        "input-range--valid": u(r)
      }])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Na = ["aria-disabled"], Ba = /* @__PURE__ */ z({
  __name: "InputRangeSlider",
  setup(e) {
    const t = Da(), { isDisabled: n } = Aa({
      inputRangeRootContext: t
    });
    return (o, r) => (h(), v("div", {
      class: "input-range-slider",
      "aria-disabled": u(n)
    }, null, 8, Na));
  }
}), zl = {
  Root: ja,
  Slider: Ba
}, Ma = /* @__PURE__ */ Symbol("ModalRootContextKey");
function Za(e) {
  function t() {
    e.onClose?.();
  }
  return {
    close: t
  };
}
const La = { class: "modal" }, Fa = /* @__PURE__ */ z({
  __name: "ModalRoot",
  props: /* @__PURE__ */ P({
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ P(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = L(e, "modelValue"), { close: r } = Za({
      modelValue: () => o.value,
      props: () => n,
      onClose: () => {
        o.value = !1;
      }
    });
    return B(Ma, {
      close: r
    }), (i, s) => (h(), v("div", La, [
      b(i.$slots, "default")
    ]));
  }
}), Xa = {};
function Ua(e, t) {
  return h(), v("div", null, [
    b(e.$slots, "default")
  ]);
}
const Ja = /* @__PURE__ */ E(Xa, [["render", Ua]]), Ka = {};
function qa(e, t) {
  return h(), v("div");
}
const Ga = /* @__PURE__ */ E(Ka, [["render", qa]]), Ya = {}, Wa = { class: "modal-header" };
function Ha(e, t) {
  return h(), v("div", Wa, [
    b(e.$slots, "default")
  ]);
}
const Qa = /* @__PURE__ */ E(Ya, [["render", Ha]]), ec = {}, tc = { class: "modal-footer" };
function nc(e, t) {
  return h(), v("div", tc, [
    b(e.$slots, "default")
  ]);
}
const oc = /* @__PURE__ */ E(ec, [["render", nc]]), rc = {};
function sc(e, t) {
  return h(), v("div");
}
const ic = /* @__PURE__ */ E(rc, [["render", sc]]), ac = {}, cc = { class: "modal-content" };
function lc(e, t) {
  return h(), v("div", cc, [
    b(e.$slots, "default")
  ]);
}
const uc = /* @__PURE__ */ E(ac, [["render", lc]]), wl = {
  Root: Fa,
  Body: Ja,
  Close: Ga,
  Header: Qa,
  Footer: oc,
  Title: ic,
  Content: uc
};
function dc(e) {
  const t = d(() => y(e.props));
  function n() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: n
  };
}
const fc = /* @__PURE__ */ z({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const n = e, o = t, { handleDelete: r } = dc({
      props: () => n,
      onDelete(i) {
        o("delete", i);
      }
    });
    return (i, s) => (h(), v("div", {
      class: k(["tag", {
        [`tag--size-${e.size}`]: e.size,
        [`tag--theme-${e.theme}`]: e.theme
      }])
    }, [
      b(i.$slots, "default"),
      e.canDelete ? (h(), v("button", {
        key: 0,
        type: "button",
        onClick: s[0] || (s[0] = //@ts-ignore
        (...a) => u(r) && u(r)(...a))
      }, " X ")) : ce("", !0)
    ], 2));
  }
}), pc = /* @__PURE__ */ z({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: k(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), Rl = {
  Root: fc,
  Group: pc
}, bn = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey");
function Cl() {
  return M(bn, {
    props: () => ({}),
    t: () => ""
  });
}
function mc(e) {
  const t = d(() => y(e.props));
  function n(o) {
    if (!t.value?.locale)
      return "";
    const r = o.split(".");
    let i = t.value.locale;
    for (const s of r) {
      if (ye(i) || Ee(i) || _e(i))
        return o;
      i = i[s];
    }
    return _e(i) ? i : o;
  }
  return {
    t: n
  };
}
const hc = /* @__PURE__ */ z({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e, { t: n } = mc({
      props: () => t
    });
    return B(bn, {
      props: () => t,
      t: n
    }), (o, r) => b(o.$slots, "default");
  }
}), xl = {
  Root: hc
}, $n = 300, zn = 1, wn = 10;
function zt(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function wt(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function Rt(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function Ct(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function vc(e) {
  const t = d(() => y(e.props)), n = d(() => t.value?.infiniteScrollOffset ?? wn), o = d(() => t.value?.draggableMultiplier ?? zn), r = d(() => oe(t.value?.debounceDelay) ? t.value.debounceDelay : $n), [i, s] = Q(), [a, c] = Q(), l = V(0), f = V(0), g = V(0), p = V(0);
  function m() {
    c(!1), s(!1);
  }
  const _ = Je((R) => {
    e.onScroll?.(R), t.value?.draggable || (g.value = zt(e.scrollbar.value, !!t.value?.vertical), p.value = wt(e.scrollbar.value, !!t.value?.horizontal));
    const x = e.scrollbar.value, S = e.content.value, H = x ? x.clientHeight : 0, de = x ? x.clientWidth : 0, et = S ? S.scrollWidth : 0, De = S ? S.scrollHeight : 0, je = g.value + H, Rn = p.value + de, Cn = !!(t.value?.vertical && De - je <= n.value), xn = !!(t.value?.horizontal && et - Rn <= n.value);
    Cn && e.onScrollEndY?.(), xn && e.onScrollEndX?.();
  }, r.value), $ = Ue((R) => {
    if (e.onMousemove?.(R), !t.value?.draggable || !a.value)
      return;
    R.preventDefault(), R.stopPropagation();
    const x = e.scrollbar.value;
    if (!x)
      return;
    const S = !!t.value?.vertical, H = !!t.value?.horizontal, de = R.pageY - Rt(x, S), De = (R.pageX - Ct(x, H) - l.value) * o.value, je = (de - f.value) * o.value;
    H && (x.scrollLeft = p.value - De), S && (x.scrollTop = g.value - je);
  }, r.value);
  function C(R) {
    if (e.onMousedown?.(R), !t.value?.draggable)
      return;
    c(!0), s(!0);
    const x = e.scrollbar.value;
    if (x) {
      const S = !!t.value?.vertical, H = !!t.value?.horizontal;
      f.value = R.pageY - Rt(x, S), l.value = R.pageX - Ct(x, H);
    }
    g.value = zt(e.scrollbar.value, !!t.value?.vertical), p.value = wt(e.scrollbar.value, !!t.value?.horizontal);
  }
  function O(R) {
    e.onMouseleave?.(R), t.value?.draggable && m();
  }
  function T(R) {
    e.onMouseup?.(R), t.value?.draggable && m();
  }
  return Le(() => {
    _.cancel?.(), $.cancel?.();
  }), {
    isGrabbing: i,
    handleScroll: _,
    handleMousedown: C,
    handleMouseleave: O,
    handleMouseup: T,
    handleMousemove: $
  };
}
const gc = /* @__PURE__ */ z({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: zn },
    infiniteScrollOffset: { default: wn },
    debounceDelay: { default: $n },
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ce("scrollbar"), i = Ce("content"), {
      isGrabbing: s,
      handleScroll: a,
      handleMousedown: c,
      handleMouseleave: l,
      handleMouseup: f,
      handleMousemove: g
    } = vc({
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
      class: k(["scrollbar", {
        "scrollbar--hidden": e.hidden,
        "scrollbar--draggable": e.draggable,
        "scrollbar--vertical": e.vertical,
        "scrollbar--horizontal": e.horizontal,
        "scrollbar--grabbing": u(s),
        [`scrollbar--size-${e.size}`]: e.size,
        [`scrollbar--theme-${e.theme}`]: e.theme
      }]),
      onScroll: m[0] || (m[0] = //@ts-ignore
      (..._) => u(a) && u(a)(..._)),
      onMousedown: m[1] || (m[1] = //@ts-ignore
      (..._) => u(c) && u(c)(..._)),
      onMouseleave: m[2] || (m[2] = //@ts-ignore
      (..._) => u(l) && u(l)(..._)),
      onMouseup: m[3] || (m[3] = //@ts-ignore
      (..._) => u(f) && u(f)(..._)),
      onMousemove: m[4] || (m[4] = //@ts-ignore
      (..._) => u(g) && u(g)(..._))
    }, [
      U("div", {
        ref_key: "content",
        ref: i,
        class: "scrollbar__content"
      }, [
        b(p.$slots, "default")
      ], 512)
    ], 34));
  }
}), Il = {
  Root: gc
}, _c = /* @__PURE__ */ z({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, n) => (h(), v("div", {
      class: k(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), yc = /* @__PURE__ */ z({
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
      class: k(["col", {
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
      b(t.$slots, "default")
    ], 2));
  }
}), bc = /* @__PURE__ */ z({
  __name: "Row",
  props: {
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
      class: k(["row", {
        [`row--justify-${e.justify}`]: e.justify,
        [`row--justify-xs-${e.justifyXs}`]: e.justifyXs,
        [`row--justify-sm-${e.justifySm}`]: e.justifySm,
        [`row--justify-md-${e.justifyMd}`]: e.justifyMd,
        [`row--justify-lg-${e.justifyLg}`]: e.justifyLg,
        [`row--justify-xl-${e.justifyXl}`]: e.justifyXl,
        [`row--justify-xxl-${e.justifyXxl}`]: e.justifyXxl,
        [`row--align-${e.align}`]: e.align,
        [`row--align-xs-${e.alignXs}`]: e.alignXs,
        [`row--align-sm-${e.alignSm}`]: e.alignSm,
        [`row--align-md-${e.alignMd}`]: e.alignMd,
        [`row--align-lg-${e.alignLg}`]: e.alignLg,
        [`row--align-xl-${e.alignXl}`]: e.alignXl,
        [`row--align-xxl-${e.alignXxl}`]: e.alignXxl,
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), Sl = {
  Container: _c,
  Row: bc,
  Col: yc
}, $c = { class: "section" }, zc = /* @__PURE__ */ z({
  __name: "SectionRoot",
  setup(e) {
    return (t, n) => (h(), v("section", $c, [
      b(t.$slots, "default")
    ]));
  }
}), wc = {}, Rc = { class: "section-header" };
function Cc(e, t) {
  return h(), v("header", Rc, [
    b(e.$slots, "default")
  ]);
}
const xc = /* @__PURE__ */ E(wc, [["render", Cc]]), Ic = {}, Sc = { class: "section-title" };
function Oc(e, t) {
  return h(), v("h1", Sc, [
    b(e.$slots, "default")
  ]);
}
const kc = /* @__PURE__ */ E(Ic, [["render", Oc]]), Tc = {}, Ec = { class: "section-footer" };
function Vc(e, t) {
  return h(), v("footer", Ec, [
    b(e.$slots, "default")
  ]);
}
const Pc = /* @__PURE__ */ E(Tc, [["render", Vc]]), Ac = {}, Dc = { class: "section-body" };
function jc(e, t) {
  return h(), v("div", Dc, [
    b(e.$slots, "default")
  ]);
}
const Nc = /* @__PURE__ */ E(Ac, [["render", jc]]), Ol = {
  Root: zc,
  Header: xc,
  Title: kc,
  Footer: Pc,
  Body: Nc
}, Bc = { class: "layout" }, Mc = /* @__PURE__ */ z({
  __name: "LayoutRoot",
  setup(e) {
    return (t, n) => (h(), v("div", Bc, [
      b(t.$slots, "header"),
      b(t.$slots, "default"),
      b(t.$slots, "footer")
    ]));
  }
}), Zc = {}, Lc = { class: "layout-body" };
function Fc(e, t) {
  return h(), v("main", Lc, [
    b(e.$slots, "default")
  ]);
}
const Xc = /* @__PURE__ */ E(Zc, [["render", Fc]]), kl = {
  Root: Mc,
  Body: Xc
}, Tl = {};
export {
  Jc as Accordion,
  Kc as Button,
  hl as Checkbox,
  xl as ConfigProvider,
  bn as ConfigProviderRootContextKey,
  Wc as Direction,
  Qc as FlexAlign,
  el as FlexJustify,
  pl as Form,
  Sl as Grid,
  $t as INPUT_NUMBER_ACTIONS,
  ca as INPUT_NUMBER_MAX,
  aa as INPUT_NUMBER_MIN,
  fn as INPUT_NUMBER_STEP,
  pn as INPUT_NUMBER_VALUE_DEFAULT,
  la as INPUT_NUMBER_WHEEL_DELAY,
  pe as Input,
  bl as InputCode,
  lo as InputModes,
  me as InputNativeTypes,
  _l as InputNumber,
  yl as InputPassword,
  zl as InputRange,
  $l as InputTags,
  Mt as InputTypes,
  ot as IntersectionPresets,
  kl as Layout,
  wl as Modal,
  Hc as Position,
  vl as Radio,
  Il as Scrollbar,
  Ol as Section,
  ml as Select,
  Yc as Sizes,
  gl as Switch,
  Rl as Tag,
  Gc as Themes,
  sl as booleanToBooleanish,
  fe as clone,
  Je as debounce,
  il as defineFormRules,
  nl as delay,
  rt as getProp,
  uo as isBoolean,
  tl as isEmpty,
  fo as isFunction,
  Ee as isNull,
  oe as isNumber,
  Xe as isObject,
  _e as isString,
  ye as isUndefined,
  rl as omit,
  ol as pick,
  Tl as ruRU,
  Ue as throttle,
  Pn as useAccordionItem,
  Vn as useAccordionRoot,
  An as useAccordionTrigger,
  ll as useAnimatedNumber,
  cl as useClipboard,
  Cl as useConfigProviderRootContext,
  fl as useEmitProxy,
  Is as useFormItem,
  mo as useFormRoot,
  co as useIntersectionObserver,
  al as useLoadImage,
  qc as usePlural,
  dl as useScrollTo,
  Q as useToggle,
  ul as useWindowScroll
};
