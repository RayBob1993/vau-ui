import { computed as d, toValue as b, inject as j, defineComponent as z, mergeModels as P, useModel as L, provide as M, createElementBlock as _, openBlock as h, normalizeClass as k, renderSlot as y, unref as l, withDirectives as G, createElementVNode as X, vShow as xt, ref as E, watch as K, onBeforeUnmount as In, markRaw as Sn, onMounted as Oe, onScopeDispose as Le, isRef as ke, nextTick as On, useId as It, onUnmounted as Fe, withModifiers as kn, useSlots as St, useTemplateRef as Ce, createCommentVNode as ce, normalizeProps as ve, guardReactiveProps as _e, createTextVNode as q, Fragment as J, renderList as Ot, toDisplayString as se, mergeProps as ue, toHandlers as Te, vModelDynamic as Tn, vModelText as kt, vModelCheckbox as Tt, vModelRadio as En, createBlock as tt, withCtx as ze, createVNode as Be, withKeys as nt } from "vue";
function Vn(e) {
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
function Pn(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.accordionRootContext?.modelValue)), o = d(() => !!b(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: d(() => o.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : n.value === t.value.value)
  };
}
function An(e) {
  const t = d(() => b(e.accordionItemContext?.props)), n = d(() => !!t.value?.disabled);
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
  return j(Et, null);
}
function At() {
  return j(Vt, null);
}
function Dn() {
  const e = Pt(), t = At();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const Nn = /* @__PURE__ */ z({
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
    return M(Et, {
      props: () => n,
      modelValue: () => r.value,
      setModelValue: i
    }), (s, a) => (h(), _("div", {
      class: k(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      y(s.$slots, "default")
    ], 2));
  }
}), Bn = /* @__PURE__ */ z({
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
    return M(Vt, {
      props: () => t,
      isActive: () => o.value
    }), (r, i) => (h(), _("div", {
      class: k(["accordion-item", {
        "accordion-item--open": l(o),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      y(r.$slots, "default", { isActive: l(o) })
    ], 2));
  }
}), V = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Mn = {}, jn = { class: "accordion-header" };
function Zn(e, t) {
  return h(), _("div", jn, [
    y(e.$slots, "default")
  ]);
}
const Ln = /* @__PURE__ */ V(Mn, [["render", Zn]]), Fn = {
  class: "accordion-body",
  role: "region"
}, Un = { class: "accordion-body__content" }, Xn = /* @__PURE__ */ z({
  __name: "AccordionBody",
  setup(e) {
    const t = At(), n = d(() => !!b(t?.isActive));
    return (o, r) => G((h(), _("div", Fn, [
      X("div", Un, [
        y(o.$slots, "default")
      ])
    ], 512)), [
      [xt, n.value]
    ]);
  }
}), Jn = {}, Kn = { class: "accordion-title" };
function qn(e, t) {
  return h(), _("div", Kn, [
    y(e.$slots, "default")
  ]);
}
const Gn = /* @__PURE__ */ V(Jn, [["render", qn]]), Yn = ["disabled"], Wn = /* @__PURE__ */ z({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: n } = Dn(), { isDisabled: o, handleToggle: r } = An({
      accordionRootContext: t,
      accordionItemContext: n
    });
    return (i, s) => (h(), _("button", {
      type: "button",
      disabled: l(o),
      class: "v-accordion-trigger",
      onClick: s[0] || (s[0] = //@ts-ignore
      (...a) => l(r) && l(r)(...a))
    }, [
      y(i.$slots, "default")
    ], 8, Yn));
  }
}), Lc = {
  Root: Nn,
  Item: Bn,
  Header: Ln,
  Body: Xn,
  Title: Gn,
  Trigger: Wn
};
function Hn(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const Dt = /* @__PURE__ */ Symbol("FormRootContextKey"), Nt = /* @__PURE__ */ Symbol("FormItemContextKey");
function Bt() {
  return j(Dt, null);
}
function Mt() {
  return j(Nt, null);
}
function U() {
  const e = Bt(), t = Mt(), n = d(() => !!t?.validationStatus.value.isSuccess), o = d(() => !!t?.validationStatus.value.isError);
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
    const t = e, { formRootContext: n, formItemContext: o } = U(), { isDisabled: r } = Hn({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return (i, s) => (h(), _("button", {
      class: k(["button", [
        {
          "button--disabled": l(r),
          "button--loading": e.loading,
          "button--plain": e.plain,
          "button--wide": e.wide,
          [`button--theme-${e.theme}`]: e.theme,
          [`button--size-${e.size}`]: e.size
        }
      ]]),
      disabled: l(r),
      type: e.type
    }, [
      y(i.$slots, "default")
    ], 10, Qn));
  }
}), to = /* @__PURE__ */ z({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), _("div", {
      class: k(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      y(t.$slots, "default")
    ], 2));
  }
}), Fc = {
  Root: eo,
  Group: to
};
function no() {
  const e = E([]);
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
function oo(e) {
  const t = d(() => b(e.formItems)), n = d(() => t.value.filter((i) => i.isValidatable));
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
  const t = E(e);
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
function Uc(e) {
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
function ro(e, t, n) {
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
const jt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), so = Object.freeze({
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
}), Xc = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Jc = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Kc = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), qc = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Gc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Yc = Object.freeze({
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
function io(e) {
  return typeof e == "boolean";
}
function ge(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ee(e) {
  return e === null;
}
function Ue(e) {
  return !Ee(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function be(e) {
  return typeof e > "u";
}
function Wc(e) {
  return Ee(e) || be(e) ? !0 : ge(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ue(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function ao(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function oe(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function co(e) {
  return !Ee(e) && !be(e) && Ue(e) && !Array.isArray(e);
}
function rt(e, t) {
  if (!e || !t.trim())
    return null;
  const n = t.split(".");
  let o = e;
  for (const r of n) {
    if (!co(o))
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
  if (ao(e))
    return e;
  if (Array.isArray(e)) {
    const n = [];
    t.set(e, n);
    for (let o = 0; o < e.length; o++)
      n[o] = fe(e[o], t);
    return n;
  }
  if (Ue(e)) {
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
function Hc(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Qc(e, t) {
  const n = {};
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
  return n;
}
function eu(e, t) {
  const n = { ...e };
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && delete n[o];
  return n;
}
function tu(e) {
  return e ? "true" : "false";
}
function Xe(e, t, n = {}) {
  const {
    noTrailing: o = !1,
    noLeading: r = !1,
    debounceMode: i = void 0
  } = n;
  let s = null, a = !1, c = 0, u = null;
  function f() {
    s && (clearTimeout(s), s = null);
  }
  function v(g = {}) {
    const { upcomingOnly: $ = !1 } = g;
    f(), a = !$;
  }
  function p() {
    if (c = Date.now(), u) {
      const g = u;
      e.apply(this, g), u = null;
    }
  }
  function m(...g) {
    if (a)
      return;
    const $ = Date.now() - c;
    u = g;
    function C() {
      s = null;
    }
    f(), !r && i && !s && p.call(this), be(i) && $ > t ? r ? (c = Date.now(), o || (s = setTimeout(i ? C : p.bind(this), t))) : p.call(this) : o || (s = setTimeout(
      i ? C : p.bind(this),
      be(i) ? t - $ : t
    ));
  }
  return m.cancel = v, m;
}
function Je(e, t, n = {}) {
  const { atBegin: o = !1 } = n;
  return Xe(e, t, {
    debounceMode: o
  });
}
function nu(e) {
  return Sn(e);
}
function ou(e, t, n = {}) {
  const {
    rootMargin: o = ot.LAZY_IMAGE.rootMargin,
    threshold: r = ot.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: i = !0,
    immediate: s = !1
  } = n, { stop: a } = ro(e, O, {
    rootMargin: o,
    threshold: r
  }), [c, u] = Q(), [f, v] = Q(), p = E(""), m = E(""), g = E(""), $ = ge(t) ? { src: t } : t;
  function C() {
    if (c.value || f.value)
      return;
    const T = new Image();
    T.src = $.src, $.srcset && (T.srcset = $.srcset), $.sizes && (T.sizes = $.sizes), T.onload = () => {
      p.value = $.src, m.value = $.srcset || "", g.value = $.sizes || "", u(!0), v(!1);
    }, T.onerror = () => {
      u(!1), v(!0);
    };
  }
  function O(T) {
    T.forEach((w) => {
      w.isIntersecting && !c.value && !f.value && C();
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
    imageSizes: g,
    loadImage: C,
    stop: a
  };
}
function ru() {
  return {};
}
function su() {
  if (!window)
    return {
      number: E(0),
      animate: () => {
      }
    };
  const e = E(0);
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
function iu() {
  if (!window)
    return {
      x: E(0),
      y: E(0)
    };
  const e = E(window.scrollX), t = E(window.scrollY);
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
function au(e, t) {
  (ge(e) ? document.querySelector(e) : ke(e) ? l(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function cu(e, t) {
  return {
    listeners: t.reduce((o, r) => {
      const i = r, s = String(i);
      return o[i] = ((...a) => e(s, ...a)), o;
    }, {})
  };
}
function uo(e) {
  const { formItems: t, registerFormItem: n, unregisterFormItem: o } = no(), { validate: r, clearValidate: i, validatableFormItems: s } = oo({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [a, c] = Q(!1), u = E(!1), f = E("");
  function v() {
    t.value.forEach((g) => g.reset()), i();
  }
  K(s, async (g) => {
    const $ = g.map((O) => O.id).sort().join(",");
    if ($ === f.value)
      return;
    if (f.value = $, g.length === 0) {
      u.value && c(!0);
      return;
    }
    u.value = !0;
    const C = await r(!0);
    c(C);
  }, {
    immediate: !0
  });
  const p = Je(async () => {
    const g = await r(!0);
    c(g);
  }, 400);
  async function m(g = !1) {
    const $ = await r(g);
    return c($), $;
  }
  return K(() => b(e.modelValue), () => {
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
    reset: v
  };
}
function lo() {
  const e = E();
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
function fo(e) {
  const t = d(() => b(e.data)), n = d(() => b(e.schema)), o = E({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), r = E([]);
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
    const u = await n.value.safeParseAsync(t.value);
    return i({ isValidating: !1 }), u.success ? (i({ isError: !1, isSuccess: !0 }), e.onValid?.(), !0) : (c || (i({ isError: !0, isSuccess: !1 }), u.error && (r.value = u.error.issues)), e.onInvalid?.(), !1);
  }
  return {
    validationStatus: o,
    validationErrors: r,
    clearValidateErrors: s,
    validate: a
  };
}
function R(e, t, n) {
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
    const u = s.prototype, f = Object.keys(u);
    for (let v = 0; v < f.length; v++) {
      const p = f[v];
      p in a || (a[p] = u[p].bind(a));
    }
  }
  const r = n?.Parent ?? Object;
  class i extends r {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(a) {
    var c;
    const u = n?.Parent ? new i() : this;
    o(u, a), (c = u._zod).deferred ?? (c.deferred = []);
    for (const f of u._zod.deferred)
      f();
    return u;
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
function Me(e, t) {
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
const Ut = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function xe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const po = Ke(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function ye(e) {
  if (xe(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(xe(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Xt(e) {
  return ye(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const mo = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ho(e) {
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
function vo(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function _o(e, t) {
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
function go(e, t) {
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
function bo(e, t) {
  if (!ye(t))
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
function yo(e, t) {
  if (!ye(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = Y(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return ne(this, "shape", o), o;
    }
  });
  return W(e, n);
}
function $o(e, t) {
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
function zo(e, t, n) {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = Y(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, c = { ...a };
      if (n)
        for (const u in n) {
          if (!(u in a))
            throw new Error(`Unrecognized key: "${u}"`);
          n[u] && (c[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u]);
        }
      else
        for (const u in a)
          c[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u];
      return ne(this, "shape", c), c;
    },
    checks: []
  });
  return W(t, s);
}
function Ro(e, t, n) {
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
function Re(e) {
  return typeof e == "string" ? e : e?.message;
}
function te(e, t, n) {
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const r = Re(e.inst?._zod.def?.error?.(e)) ?? Re(t?.error?.(e)) ?? Re(n.customError?.(e)) ?? Re(n.localeError?.(e)) ?? "Invalid input";
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
  }), e.message = JSON.stringify(t, Me, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, qt = R("$ZodError", Kt), Gt = R("$ZodError", Kt, { Parent: Error });
function wo(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const r of e.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: n };
}
function Co(e, t = (n) => n.message) {
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
    throw Ut(a, r?.callee), a;
  }
  return s.value;
}, He = (e) => async (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((c) => te(c, i, ee())));
    throw Ut(a, r?.callee), a;
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
}, xo = /* @__PURE__ */ Ve(Gt), Pe = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => te(s, r, ee())))
  } : { success: !0, data: i.value };
}, Io = /* @__PURE__ */ Pe(Gt), So = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return We(e)(t, n, r);
}, Oo = (e) => (t, n, o) => We(e)(t, n, o), ko = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return He(e)(t, n, r);
}, To = (e) => async (t, n, o) => He(e)(t, n, o), Eo = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ve(e)(t, n, r);
}, Vo = (e) => (t, n, o) => Ve(e)(t, n, o), Po = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Pe(e)(t, n, r);
}, Ao = (e) => async (t, n, o) => Pe(e)(t, n, o), le = /* @__PURE__ */ R("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Do = /* @__PURE__ */ R("$ZodCheckMaxLength", (e, t) => {
  var n;
  le.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
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
}), No = /* @__PURE__ */ R("$ZodCheckMinLength", (e, t) => {
  var n;
  le.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
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
}), Bo = /* @__PURE__ */ R("$ZodCheckLengthEquals", (e, t) => {
  var n;
  le.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
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
}), Mo = /* @__PURE__ */ R("$ZodCheckOverwrite", (e, t) => {
  le.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class jo {
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
const Zo = {
  major: 4,
  minor: 3,
  patch: 6
}, D = /* @__PURE__ */ R("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Zo;
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
      let u = re(s), f;
      for (const v of a) {
        if (v._zod.def.when) {
          if (!v._zod.def.when(s))
            continue;
        } else if (u)
          continue;
        const p = s.issues.length, m = v._zod.check(s);
        if (m instanceof Promise && c?.async === !1)
          throw new ie();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, s.issues.length !== p && (u || (u = re(s, p)));
          });
        else {
          if (s.issues.length === p)
            continue;
          u || (u = re(s, p));
        }
      }
      return f ? f.then(() => s) : s;
    }, i = (s, a, c) => {
      if (re(s))
        return s.aborted = !0, s;
      const u = r(a, o, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new ie();
        return u.then((f) => e._zod.parse(f, c));
      }
      return e._zod.parse(u, c);
    };
    e._zod.run = (s, a) => {
      if (a.skipChecks)
        return e._zod.parse(s, a);
      if (a.direction === "backward") {
        const u = e._zod.parse({ value: s.value, issues: [] }, { ...a, skipChecks: !0 });
        return u instanceof Promise ? u.then((f) => i(f, s, a)) : i(u, s, a);
      }
      const c = e._zod.parse(s, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new ie();
        return c.then((u) => r(u, o, a));
      }
      return r(c, o, a);
    };
  }
  I(e, "~standard", () => ({
    validate: (r) => {
      try {
        const i = xo(e, r);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Io(e, r).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Lo = /* @__PURE__ */ R("$ZodUnknown", (e, t) => {
  D.init(e, t), e._zod.parse = (n) => n;
}), Fo = /* @__PURE__ */ R("$ZodNever", (e, t) => {
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
const Uo = /* @__PURE__ */ R("$ZodArray", (e, t) => {
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
      c instanceof Promise ? i.push(c.then((u) => at(u, n, s))) : at(c, n, s);
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
  const n = vo(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function Wt(e, t, n, o, r, i) {
  const s = [], a = r.keySet, c = r.catchall._zod, u = c.def.type, f = c.optout === "optional";
  for (const v in t) {
    if (a.has(v))
      continue;
    if (u === "never") {
      s.push(v);
      continue;
    }
    const p = c.run({ value: t[v], issues: [] }, o);
    p instanceof Promise ? e.push(p.then((m) => Ie(m, n, v, t, f))) : Ie(p, n, v, t, f);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const Xo = /* @__PURE__ */ R("$ZodObject", (e, t) => {
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
    for (const u in a) {
      const f = a[u]._zod;
      if (f.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const v of f.values)
          c[u].add(v);
      }
    }
    return c;
  });
  const r = xe, i = t.catchall;
  let s;
  e._zod.parse = (a, c) => {
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
    const f = [], v = s.shape;
    for (const p of s.keys) {
      const m = v[p], g = m._zod.optout === "optional", $ = m._zod.run({ value: u[p], issues: [] }, c);
      $ instanceof Promise ? f.push($.then((C) => Ie(C, a, p, u, g))) : Ie($, a, p, u, g);
    }
    return i ? Wt(f, u, a, c, o.value, e) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), Jo = /* @__PURE__ */ R("$ZodObjectJIT", (e, t) => {
  Xo.init(e, t);
  const n = e._zod.parse, o = Ke(() => Yt(t)), r = (p) => {
    const m = new jo(["shape", "payload", "ctx"]), g = o.value, $ = (w) => {
      const x = it(w);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let O = 0;
    for (const w of g.keys)
      C[w] = `key_${O++}`;
    m.write("const newResult = {};");
    for (const w of g.keys) {
      const x = C[w], S = it(w), de = p[w]?._zod?.optout === "optional";
      m.write(`const ${x} = ${$(w)};`), de ? m.write(`
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
    return (w, x) => T(p, w, x);
  };
  let i;
  const s = xe, a = !Lt.jitless, u = a && po.value, f = t.catchall;
  let v;
  e._zod.parse = (p, m) => {
    v ?? (v = o.value);
    const g = p.value;
    return s(g) ? a && u && m?.async === !1 && m.jitless !== !0 ? (i || (i = r(t.shape)), p = i(p, m), f ? Wt([], g, p, m, v, e) : p) : n(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: g,
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
const Ko = /* @__PURE__ */ R("$ZodUnion", (e, t) => {
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
      const u = c._zod.run({
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
    return s ? Promise.all(a).then((c) => ct(c, r, e, i)) : ct(a, r, e, i);
  };
}), qo = /* @__PURE__ */ R("$ZodIntersection", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value, i = t.left._zod.run({ value: r, issues: [] }, o), s = t.right._zod.run({ value: r, issues: [] }, o);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([c, u]) => ut(n, c, u)) : ut(n, i, s);
  };
});
function je(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (ye(e) && ye(t)) {
    const n = Object.keys(t), o = Object.keys(e).filter((i) => n.indexOf(i) !== -1), r = { ...e, ...t };
    for (const i of o) {
      const s = je(e[i], t[i]);
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
      const r = e[o], i = t[o], s = je(r, i);
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
  const s = je(t.value, n.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const Go = /* @__PURE__ */ R("$ZodEnum", (e, t) => {
  D.init(e, t);
  const n = Ft(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((r) => mo.has(typeof r)).map((r) => typeof r == "string" ? ho(r) : r.toString()).join("|")})$`), e._zod.parse = (r, i) => {
    const s = r.value;
    return o.has(s) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), r;
  };
}), Yo = /* @__PURE__ */ R("$ZodTransform", (e, t) => {
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
function lt(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const Ht = /* @__PURE__ */ R("$ZodOptional", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), I(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Ge(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(n, o);
      return r instanceof Promise ? r.then((i) => lt(i, n.value)) : lt(r, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), Wo = /* @__PURE__ */ R("$ZodExactOptional", (e, t) => {
  Ht.init(e, t), I(e._zod, "values", () => t.innerType._zod.values), I(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), Ho = /* @__PURE__ */ R("$ZodNullable", (e, t) => {
  D.init(e, t), I(e._zod, "optin", () => t.innerType._zod.optin), I(e._zod, "optout", () => t.innerType._zod.optout), I(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${Ge(n.source)}|null)$`) : void 0;
  }), I(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), Qo = /* @__PURE__ */ R("$ZodDefault", (e, t) => {
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
const er = /* @__PURE__ */ R("$ZodPrefault", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", I(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), tr = /* @__PURE__ */ R("$ZodNonOptional", (e, t) => {
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
const nr = /* @__PURE__ */ R("$ZodCatch", (e, t) => {
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
}), or = /* @__PURE__ */ R("$ZodPipe", (e, t) => {
  D.init(e, t), I(e._zod, "values", () => t.in._zod.values), I(e._zod, "optin", () => t.in._zod.optin), I(e._zod, "optout", () => t.out._zod.optout), I(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
    if (o.direction === "backward") {
      const i = t.out._zod.run(n, o);
      return i instanceof Promise ? i.then((s) => we(s, t.in, o)) : we(i, t.in, o);
    }
    const r = t.in._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => we(i, t.out, o)) : we(r, t.out, o);
  };
});
function we(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, n);
}
const rr = /* @__PURE__ */ R("$ZodReadonly", (e, t) => {
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
const sr = /* @__PURE__ */ R("$ZodCustom", (e, t) => {
  le.init(e, t), D.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = (n) => {
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
class ir {
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
function ar() {
  return new ir();
}
(ht = globalThis).__zod_globalRegistry ?? (ht.__zod_globalRegistry = ar());
const he = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function cr(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function ur(e, t) {
  return new e({
    type: "never",
    ...Z(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lr(e, t) {
  return new Do({
    check: "max_length",
    ...Z(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function vt(e, t) {
  return new No({
    check: "min_length",
    ...Z(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
  return new Bo({
    check: "length_equals",
    ...Z(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
  return new Mo({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function pr(e, t, n) {
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
function mr(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Z(n)
  });
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
  const t = /* @__PURE__ */ vr((n) => (n.addIssue = (o) => {
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
function vr(e, t) {
  const n = new le({
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
function N(e, t, n = { path: [], schemaPath: [] }) {
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
    const v = e._zod.parent;
    v && (s.ref || (s.ref = v), N(v, t, f), t.seen.get(v).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(s.schema, c), t.io === "input" && B(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
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
      const v = e.external.registry.get(s[0])?.id, p = e.external.uri ?? ((g) => g);
      if (v)
        return { ref: p(v) };
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
    const a = s[1], { ref: c, defId: u } = r(s);
    a.def = { ...a.schema }, u && (a.defId = u);
    const f = a.schema;
    for (const v in f)
      delete f[v];
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
function tn(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (s) => {
    const a = e.seen.get(s);
    if (a.ref === null)
      return;
    const c = a.def ?? a.schema, u = { ...c }, f = a.ref;
    if (a.ref = null, f) {
      o(f);
      const p = e.seen.get(f), m = p.schema;
      if (m.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (c.allOf = c.allOf ?? [], c.allOf.push(m)) : Object.assign(c, m), Object.assign(c, u), s._zod.parent === f)
        for (const $ in c)
          $ === "$ref" || $ === "allOf" || $ in u || delete c[$];
      if (m.$ref && p.def)
        for (const $ in c)
          $ === "$ref" || $ === "allOf" || $ in p.def && JSON.stringify(c[$]) === JSON.stringify(p.def[$]) && delete c[$];
    }
    const v = s._zod.parent;
    if (v && v !== f) {
      o(v);
      const p = e.seen.get(v);
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
function B(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const o = e._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return B(o.element, n);
  if (o.type === "set")
    return B(o.valueType, n);
  if (o.type === "lazy")
    return B(o.getter(), n);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault")
    return B(o.innerType, n);
  if (o.type === "intersection")
    return B(o.left, n) || B(o.right, n);
  if (o.type === "record" || o.type === "map")
    return B(o.keyType, n) || B(o.valueType, n);
  if (o.type === "pipe")
    return B(o.in, n) || B(o.out, n);
  if (o.type === "object") {
    for (const r in o.shape)
      if (B(o.shape[r], n))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const r of o.options)
      if (B(r, n))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const r of o.items)
      if (B(r, n))
        return !0;
    return !!(o.rest && B(o.rest, n));
  }
  return !1;
}
const _r = (e, t = {}) => (n) => {
  const o = Qt({ ...n, processors: t });
  return N(e, o), en(o, e), tn(o, e);
}, Se = (e, t, n = {}) => (o) => {
  const { libraryOptions: r, target: i } = o ?? {}, s = Qt({ ...r ?? {}, target: i, io: t, processors: n });
  return N(e, s), en(s, e), tn(s, e);
}, gr = (e, t, n, o) => {
  n.not = {};
}, br = (e, t, n, o) => {
}, yr = (e, t, n, o) => {
  const r = e._zod.def, i = Ft(r.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, $r = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, zr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Rr = (e, t, n, o) => {
  const r = n, i = e._zod.def, { minimum: s, maximum: a } = e._zod.bag;
  typeof s == "number" && (r.minItems = s), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = N(i.element, t, { ...o, path: [...o.path, "items"] });
}, wr = (e, t, n, o) => {
  const r = n, i = e._zod.def;
  r.type = "object", r.properties = {};
  const s = i.shape;
  for (const u in s)
    r.properties[u] = N(s[u], t, {
      ...o,
      path: [...o.path, "properties", u]
    });
  const a = new Set(Object.keys(s)), c = new Set([...a].filter((u) => {
    const f = i.shape[u]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  c.size > 0 && (r.required = Array.from(c)), i.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : i.catchall ? i.catchall && (r.additionalProperties = N(i.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (r.additionalProperties = !1);
}, Cr = (e, t, n, o) => {
  const r = e._zod.def, i = r.inclusive === !1, s = r.options.map((a, c) => N(a, t, {
    ...o,
    path: [...o.path, i ? "oneOf" : "anyOf", c]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, xr = (e, t, n, o) => {
  const r = e._zod.def, i = N(r.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), s = N(r.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...a(i) ? i.allOf : [i],
    ...a(s) ? s.allOf : [s]
  ];
  n.allOf = c;
}, Ir = (e, t, n, o) => {
  const r = e._zod.def, i = N(r.innerType, t, o), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = r.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Sr = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Or = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, kr = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Tr = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
  let s;
  try {
    s = r.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = s;
}, Er = (e, t, n, o) => {
  const r = e._zod.def, i = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  N(i, t, o);
  const s = t.seen.get(e);
  s.ref = i;
}, Vr = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.readOnly = !0;
}, nn = (e, t, n, o) => {
  const r = e._zod.def;
  N(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Pr = (e, t) => {
  qt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Co(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => wo(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, Me, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, Me, 2);
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
}, F = R("ZodError", Pr, {
  Parent: Error
}), Ar = /* @__PURE__ */ We(F), Dr = /* @__PURE__ */ He(F), Nr = /* @__PURE__ */ Ve(F), Br = /* @__PURE__ */ Pe(F), Mr = /* @__PURE__ */ So(F), jr = /* @__PURE__ */ Oo(F), Zr = /* @__PURE__ */ ko(F), Lr = /* @__PURE__ */ To(F), Fr = /* @__PURE__ */ Eo(F), Ur = /* @__PURE__ */ Vo(F), Xr = /* @__PURE__ */ Po(F), Jr = /* @__PURE__ */ Ao(F), A = /* @__PURE__ */ R("ZodType", (e, t) => (D.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Se(e, "input"),
    output: Se(e, "output")
  }
}), e.toJSONSchema = _r(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(Y(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, o) => W(e, n, o), e.brand = () => e, e.register = ((n, o) => (n.add(e, o), e)), e.parse = (n, o) => Ar(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => Nr(e, n, o), e.parseAsync = async (n, o) => Dr(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => Br(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => Mr(e, n, o), e.decode = (n, o) => jr(e, n, o), e.encodeAsync = async (n, o) => Zr(e, n, o), e.decodeAsync = async (n, o) => Lr(e, n, o), e.safeEncode = (n, o) => Fr(e, n, o), e.safeDecode = (n, o) => Ur(e, n, o), e.safeEncodeAsync = async (n, o) => Xr(e, n, o), e.safeDecodeAsync = async (n, o) => Jr(e, n, o), e.refine = (n, o) => e.check($s(n, o)), e.superRefine = (n) => e.check(zs(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ fr(n)), e.optional = () => gt(e), e.exactOptional = () => cs(e), e.nullable = () => bt(e), e.nullish = () => gt(bt(e)), e.nonoptional = (n) => ms(e, n), e.array = () => Wr(e), e.or = (n) => ts([e, n]), e.and = (n) => os(e, n), e.transform = (n) => yt(e, is(n)), e.default = (n) => ds(e, n), e.prefault = (n) => ps(e, n), e.catch = (n) => vs(e, n), e.pipe = (n) => yt(e, n), e.readonly = () => bs(e), e.describe = (n) => {
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
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), Kr = /* @__PURE__ */ R("ZodUnknown", (e, t) => {
  Lo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => br();
});
function _t() {
  return /* @__PURE__ */ cr(Kr);
}
const qr = /* @__PURE__ */ R("ZodNever", (e, t) => {
  Fo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => gr(e, n, o);
});
function Gr(e) {
  return /* @__PURE__ */ ur(qr, e);
}
const Yr = /* @__PURE__ */ R("ZodArray", (e, t) => {
  Uo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Rr(e, n, o, r), e.element = t.element, e.min = (n, o) => e.check(/* @__PURE__ */ vt(n, o)), e.nonempty = (n) => e.check(/* @__PURE__ */ vt(1, n)), e.max = (n, o) => e.check(/* @__PURE__ */ lr(n, o)), e.length = (n, o) => e.check(/* @__PURE__ */ dr(n, o)), e.unwrap = () => e.element;
});
function Wr(e, t) {
  return /* @__PURE__ */ pr(Yr, e, t);
}
const Hr = /* @__PURE__ */ R("ZodObject", (e, t) => {
  Jo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => wr(e, n, o, r), I(e, "shape", () => t.shape), e.keyof = () => rs(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: _t() }), e.loose = () => e.clone({ ...e._zod.def, catchall: _t() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Gr() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => bo(e, n), e.safeExtend = (n) => yo(e, n), e.merge = (n) => $o(e, n), e.pick = (n) => _o(e, n), e.omit = (n) => go(e, n), e.partial = (...n) => zo(on, e, n[0]), e.required = (...n) => Ro(rn, e, n[0]);
});
function Qr(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...Z(t)
  };
  return new Hr(n);
}
const es = /* @__PURE__ */ R("ZodUnion", (e, t) => {
  Ko.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Cr(e, n, o, r), e.options = t.options;
});
function ts(e, t) {
  return new es({
    type: "union",
    options: e,
    ...Z(t)
  });
}
const ns = /* @__PURE__ */ R("ZodIntersection", (e, t) => {
  qo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => xr(e, n, o, r);
});
function os(e, t) {
  return new ns({
    type: "intersection",
    left: e,
    right: t
  });
}
const Ze = /* @__PURE__ */ R("ZodEnum", (e, t) => {
  Go.init(e, t), A.init(e, t), e._zod.processJSONSchema = (o, r, i) => yr(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
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
function rs(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Ze({
    type: "enum",
    entries: n,
    ...Z(t)
  });
}
const ss = /* @__PURE__ */ R("ZodTransform", (e, t) => {
  Yo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => zr(e, n), e._zod.parse = (n, o) => {
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
function is(e) {
  return new ss({
    type: "transform",
    transform: e
  });
}
const on = /* @__PURE__ */ R("ZodOptional", (e, t) => {
  Ht.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => nn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function gt(e) {
  return new on({
    type: "optional",
    innerType: e
  });
}
const as = /* @__PURE__ */ R("ZodExactOptional", (e, t) => {
  Wo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => nn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function cs(e) {
  return new as({
    type: "optional",
    innerType: e
  });
}
const us = /* @__PURE__ */ R("ZodNullable", (e, t) => {
  Ho.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ir(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function bt(e) {
  return new us({
    type: "nullable",
    innerType: e
  });
}
const ls = /* @__PURE__ */ R("ZodDefault", (e, t) => {
  Qo.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Or(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ds(e, t) {
  return new ls({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Xt(t);
    }
  });
}
const fs = /* @__PURE__ */ R("ZodPrefault", (e, t) => {
  er.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => kr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function ps(e, t) {
  return new fs({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Xt(t);
    }
  });
}
const rn = /* @__PURE__ */ R("ZodNonOptional", (e, t) => {
  tr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Sr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function ms(e, t) {
  return new rn({
    type: "nonoptional",
    innerType: e,
    ...Z(t)
  });
}
const hs = /* @__PURE__ */ R("ZodCatch", (e, t) => {
  nr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Tr(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function vs(e, t) {
  return new hs({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const _s = /* @__PURE__ */ R("ZodPipe", (e, t) => {
  or.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Er(e, n, o, r), e.in = t.in, e.out = t.out;
});
function yt(e, t) {
  return new _s({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const gs = /* @__PURE__ */ R("ZodReadonly", (e, t) => {
  rr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Vr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function bs(e) {
  return new gs({
    type: "readonly",
    innerType: e
  });
}
const ys = /* @__PURE__ */ R("ZodCustom", (e, t) => {
  sr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => $r(e, n);
});
function $s(e, t = {}) {
  return /* @__PURE__ */ mr(ys, e, t);
}
function zs(e) {
  return /* @__PURE__ */ hr(e);
}
function Rs(e) {
  const t = It(), { field: n, registerField: o, unregisterField: r } = lo(), i = d(() => b(e.props)), s = d(() => i.value.name), a = d(() => e.formRootContext?.modelValue.value), c = d(() => e.formRootContext?.props?.rules), u = d(() => s.value && a.value && rt(a.value, s.value)), f = d(() => !!(e.formRootContext?.props.disabled || i.value?.disabled)), v = d(() => {
    if (!s.value || !c.value)
      return null;
    const S = rt(c.value, s.value);
    return S instanceof A ? S : null;
  }), p = d(() => !!v.value), m = d(() => v.value ? !v.value.safeParse(void 0).success : !1), {
    validationStatus: g,
    validationErrors: $,
    clearValidateErrors: C,
    validate: O
  } = fo({
    data: () => s.value ? {
      [s.value]: u.value
    } : null,
    schema: () => !s.value || !v.value ? null : Qr({
      [s.value]: v.value
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
    validationStatus: g.value,
    isValidatable: p.value,
    isRequired: m.value,
    registerField: o,
    unregisterField: r,
    reset: w,
    validate: O,
    clearValidateErrors: C
  }));
  function w() {
    !u.value || !i.value.name || (n.value?.reset(), C());
  }
  const x = Je(() => O(), 300);
  return Fe(() => {
    x.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), K(T, (S) => {
    e.formRootContext?.registerFormItem(S);
  }, {
    deep: !0,
    immediate: !0
  }), K(u, () => x()), K(() => g.value.isSuccess, (S) => {
    S && C();
  }), {
    id: t,
    validationErrors: $,
    validationStatus: g,
    isDisabled: f,
    isRequired: m,
    reset: w,
    validate: O,
    clearValidateErrors: C,
    registerField: o,
    unregisterField: r
  };
}
const ws = /* @__PURE__ */ z({
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
      validate: u,
      clearValidate: f,
      reset: v
    } = uo({
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
        reset: v
      });
    }
    return M(Dt, {
      props: o,
      modelValue: i,
      registerFormItem: a,
      unregisterFormItem: c
    }), t({
      validate: u,
      clearValidate: f,
      reset: v
    }), (m, g) => (h(), _("form", {
      class: k(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: kn(p, ["prevent"])
    }, [
      y(m.$slots, "default", { isValid: l(s) })
    ], 34));
  }
}), Cs = {
  key: 0,
  class: "form-item__header"
}, xs = { class: "form-item__body" }, Is = {
  key: 1,
  class: "form-item__footer"
}, Ss = /* @__PURE__ */ z({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, i = St(), s = Bt(), {
      validationErrors: a,
      validationStatus: c,
      isDisabled: u,
      isRequired: f,
      registerField: v,
      unregisterField: p,
      reset: m,
      validate: g,
      clearValidateErrors: $
    } = Rs({
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
    return M(Nt, {
      props: o,
      validationStatus: c,
      validationErrors: a,
      isRequired: f,
      isDisabled: u,
      registerField: v,
      unregisterField: p,
      reset: m,
      validate: g,
      clearValidateErrors: $
    }), t({
      reset: m,
      validate: g,
      clearValidateErrors: $
    }), (T, w) => (h(), _("div", {
      ref_key: "root",
      ref: C,
      class: k(["form-item", [
        {
          "form-item--disabled": l(u),
          "form-item--required": l(f),
          "form-item--invalid": l(c).isError,
          "form-item--validating": l(c).isValidating,
          "form-item--valid": l(c).isSuccess
        }
      ]])
    }, [
      i?.header ? (h(), _("div", Cs, [
        y(T.$slots, "header", ve(_e(O.value)))
      ])) : ce("", !0),
      X("div", xs, [
        y(T.$slots, "default", ve(_e(O.value)))
      ]),
      i.footer ? (h(), _("div", Is, [
        y(T.$slots, "footer", ve(_e(O.value)))
      ])) : ce("", !0)
    ], 2));
  }
}), Os = {}, ks = { class: "form-item-title" };
function Ts(e, t) {
  return h(), _("div", ks, [
    y(e.$slots, "default")
  ]);
}
const Es = /* @__PURE__ */ V(Os, [["render", Ts]]), Vs = {}, Ps = { class: "form-item-required" };
function As(e, t) {
  return h(), _("span", Ps, [
    y(e.$slots, "default", {}, () => [
      t[0] || (t[0] = q(" * ", -1))
    ])
  ]);
}
const Ds = /* @__PURE__ */ V(Vs, [["render", As]]), Ns = { class: "form-item-errors" }, Bs = /* @__PURE__ */ z({
  __name: "FormItemErrors",
  setup(e) {
    const t = Mt(), n = d(() => t?.validationErrors.value ?? []);
    return (o, r) => (h(), _("div", Ns, [
      (h(!0), _(J, null, Ot(n.value, (i, s) => (h(), _("div", {
        key: `error-${s}`,
        class: "form-item-errors__item"
      }, se(i.message), 1))), 128))
    ]));
  }
}), uu = {
  Root: ws,
  Item: Ss,
  ItemTitle: Es,
  ItemRequired: Ds,
  ItemErrors: Bs
};
function Ms() {
  const e = E([]);
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
function js(e) {
  const t = d(() => b(e.multiple)), n = d(() => b(e.modelValue)), o = d(() => b(e.options)), r = d(() => o.value.find((s) => s.props.value === n.value)), i = d(() => {
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
function Zs(e) {
  const t = d(() => b(e.modelValue)), n = d(() => b(e.props)), { options: o, registerOption: r, unregisterOption: i } = Ms(), { activeOption: s, activeOptions: a } = js({
    multiple: () => !!n.value.multiple,
    options: () => o.value,
    modelValue: () => t.value
  }), [c, u, f] = Q(), v = d(() => ae(t.value, n.value.multiple) ? t.value.length > 0 : !!t.value), p = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.disabled));
  function m(C) {
    if (!p.value) {
      if (ae(t.value, n.value.multiple)) {
        const O = /* @__PURE__ */ new Set([...t.value]);
        O.has(C) ? O.delete(C) : O.add(C), e.onChangeModel?.([...O]), e.onChange?.([...O]);
        return;
      }
      e.onChangeModel?.(C), e.onChange?.(C), u(!1);
    }
  }
  function g() {
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
      reset: g
    });
  }), Fe(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: s,
    activeOptions: a,
    hasValue: v,
    isOpen: c,
    isDisabled: p,
    toggle: $,
    registerOption: r,
    unregisterOption: i,
    setModelValue: m,
    reset: g
  };
}
function Ls(e) {
  const t = It(), n = d(() => b(e.selectRootContext?.modelValue)), o = d(() => b(e.props)), r = d(() => !!b(e.selectRootContext?.props)?.multiple), i = d(() => ae(n.value, r.value) ? n.value.includes(o.value.value) : n.value === o.value.value), s = d(() => !!(b(e.selectRootContext?.isDisabled) || o.value?.disabled)), a = d(() => ({
    id: t,
    props: o.value
  }));
  function c(u) {
    e.selectRootContext?.setModelValue(u);
  }
  return K(a, (u) => {
    e.selectRootContext?.registerOption(u);
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
function Fs(e) {
  const t = d(() => b(e.selectRootContext?.props)), n = d(() => b(e.selectRootContext?.activeOption)), o = d(() => b(e.selectRootContext?.activeOptions) ?? []), r = d(() => !!b(e.selectRootContext?.hasValue)), i = d(() => ae(b(e.selectRootContext?.modelValue), !!t.value?.multiple)), s = d(() => t.value?.placeholder);
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
  return j(sn, null);
}
const Us = /* @__PURE__ */ z({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: c } = U(), {
      activeOption: u,
      activeOptions: f,
      hasValue: v,
      isOpen: p,
      isDisabled: m,
      toggle: g,
      registerOption: $,
      unregisterOption: C,
      setModelValue: O
    } = Zs({
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
    return M(sn, {
      activeOption: () => u.value,
      activeOptions: () => f.value,
      modelValue: () => r.value,
      props: () => n,
      hasValue: () => v.value,
      isOpen: () => p.value,
      isDisabled: () => m.value,
      toggle: g,
      registerOption: $,
      unregisterOption: C,
      setModelValue: O
    }), (T, w) => (h(), _("div", {
      class: k(["select", {
        "select--disabled": l(m),
        "select--open": l(p),
        "select--filled": l(v),
        "select--invalid": l(c),
        "select--valid": l(a)
      }])
    }, [
      y(T.$slots, "default")
    ], 2));
  }
}), Xs = /* @__PURE__ */ z({
  __name: "SelectOption",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Ae(), { isActive: o, isDisabled: r, handleChange: i } = Ls({
      selectRootContext: n,
      props: () => t
    });
    return (s, a) => (h(), _("div", {
      class: k(["select-option", {
        "select-option--active": l(o),
        "select-option--disabled": l(r)
      }]),
      onClick: a[0] || (a[0] = (c) => l(i)(e.value))
    }, [
      y(s.$slots, "default", {
        isActive: l(o),
        isDisabled: l(r)
      })
    ], 2));
  }
}), Js = /* @__PURE__ */ z({
  __name: "SelectTrigger",
  setup(e) {
    const t = Ae();
    function n() {
      t?.toggle();
    }
    return (o, r) => (h(), _("button", {
      type: "button",
      class: "select-trigger",
      onClick: n
    }, [
      y(o.$slots, "default")
    ]));
  }
}), Ks = { class: "select-dropdown" }, qs = /* @__PURE__ */ z({
  __name: "SelectDropdown",
  setup(e) {
    const t = Ae(), n = d(() => !!b(t?.isOpen));
    return (o, r) => G((h(), _("div", Ks, [
      y(o.$slots, "default")
    ], 512)), [
      [xt, n.value]
    ]);
  }
}), Gs = { class: "select-value" }, Ys = /* @__PURE__ */ z({
  __name: "SelectValue",
  setup(e) {
    const t = Ae(), { activeOption: n, activeOptions: o, hasValue: r, isMultiple: i, placeholder: s } = Fs({
      selectRootContext: t
    });
    return (a, c) => (h(), _("div", Gs, [
      y(a.$slots, "default", {}, () => [
        l(r) ? (h(), _(J, { key: 0 }, [
          l(i) ? (h(!0), _(J, { key: 0 }, Ot(l(o), (u) => (h(), _(J, null, [
            q(se(u.props.value), 1)
          ], 64))), 256)) : (h(), _(J, { key: 1 }, [
            q(se(l(n)?.props.value), 1)
          ], 64))
        ], 64)) : (h(), _(J, { key: 1 }, [
          q(se(l(s)), 1)
        ], 64))
      ])
    ]));
  }
}), lu = {
  Root: Us,
  Option: Xs,
  Trigger: Js,
  Dropdown: qs,
  Value: Ys
};
function Ws(e) {
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
function Hs(e) {
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
function Qs(e) {
  const [t, n] = Q(), o = d(() => b(e.props)), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.loading || o.value?.disabled)), i = d(() => o.value.type === jt.TEXTAREA), s = d(() => !!b(e.modelValue)?.trim());
  function a(u) {
    e.onUpdateModelValue?.(u);
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
function ei(e) {
  const t = d(() => b(e.inputRootContext?.props)), n = d(() => !!t.value?.clearable);
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
  return j(cn, null);
}
const ti = /* @__PURE__ */ z({
  __name: "InputRoot",
  props: /* @__PURE__ */ P({
    type: { default: jt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: me.TEXT },
    inputMode: { default: so.TEXT },
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
    const o = e, r = n, i = L(e, "modelValue"), { formRootContext: s, formItemContext: a, isValid: c, isInvalid: u } = U(), { isDisabled: f, isTextarea: v, hasValue: p, isFocus: m, setFocus: g, setModelValue: $, reset: C } = Qs({
      formRootContext: s,
      formItemContext: a,
      modelValue: () => i.value,
      props: () => o,
      onUpdateModelValue: (O) => {
        i.value = O;
      }
    });
    return M(cn, {
      isDisabled: () => f.value,
      props: () => o,
      modelValue: () => i.value,
      setFocus: g,
      setModelValue: $,
      reset: C,
      emit: r
    }), t({
      setFocus: g
    }), (O, T) => (h(), _("div", {
      class: k(["input", {
        "input--focus": l(m),
        "input--textarea": l(v),
        "input--filled": l(p),
        "input--disabled": l(f),
        "input--loading": e.loading,
        "input--invalid": l(u),
        "input--valid": l(c)
      }])
    }, [
      y(O.$slots, "default", {
        isTextarea: l(v),
        isFocus: l(m),
        hasValue: l(p),
        loading: !!e.loading,
        isInvalid: l(u),
        isValid: l(c)
      })
    ], 2));
  }
}), ni = {}, oi = { class: "input-before" };
function ri(e, t) {
  return h(), _("div", oi, [
    y(e.$slots, "default")
  ]);
}
const si = /* @__PURE__ */ V(ni, [["render", ri]]), ii = { class: "input-after" }, ai = /* @__PURE__ */ z({
  __name: "InputAfter",
  setup(e) {
    const t = Qe(), { isClearable: n, handleClear: o } = ei({
      inputRootContext: t
    });
    return (r, i) => (h(), _("div", ii, [
      y(r.$slots, "default"),
      l(n) ? (h(), _("button", {
        key: 0,
        type: "button",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...s) => l(o) && l(o)(...s))
      }, " × ")) : ce("", !0)
    ]));
  }
}), ci = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], ui = /* @__PURE__ */ z({
  __name: "InputNative",
  setup(e) {
    const t = Qe(), { modelValue: n, listeners: o } = an({
      inputRootContext: t
    }), { props: r } = Hs({
      inputRootContext: t
    });
    return (i, s) => G((h(), _("input", ue({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => ke(n) ? n.value = a : null),
      type: l(r).nativeType,
      inputmode: l(r).inputMode,
      readonly: l(r).readonly,
      disabled: l(r).disabled,
      autocomplete: l(r).autocomplete,
      placeholder: l(r).placeholder,
      class: "input-native"
    }, Te(l(o), !0)), null, 16, ci)), [
      [Tn, l(n)]
    ]);
  }
}), li = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], di = /* @__PURE__ */ z({
  __name: "InputTextarea",
  setup(e) {
    const t = Qe(), { modelValue: n, listeners: o } = an({
      inputRootContext: t
    }), { props: r } = Ws({
      inputRootContext: t
    });
    return (i, s) => G((h(), _("textarea", ue({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => ke(n) ? n.value = a : null),
      readonly: l(r).readonly,
      disabled: l(r).disabled,
      autocomplete: l(r).autocomplete,
      rows: l(r).rows,
      cols: l(r).cols,
      placeholder: l(r).placeholder,
      class: "input-textarea"
    }, Te(l(o), !0)), null, 16, li)), [
      [kt, l(n)]
    ]);
  }
}), fi = {}, pi = { class: "input-control" };
function mi(e, t) {
  return h(), _("div", pi, [
    y(e.$slots, "default")
  ]);
}
const hi = /* @__PURE__ */ V(fi, [["render", mi]]), vi = {}, _i = { class: "input-group" };
function gi(e, t) {
  return h(), _("div", _i, [
    y(e.$slots, "default")
  ]);
}
const bi = /* @__PURE__ */ V(vi, [["render", gi]]), yi = {}, $i = { class: "input-group-addon" };
function zi(e, t) {
  return h(), _("div", $i, [
    y(e.$slots, "default")
  ]);
}
const Ri = /* @__PURE__ */ V(yi, [["render", zi]]), pe = {
  Root: ti,
  Before: si,
  After: ai,
  Native: ui,
  Textarea: di,
  Control: hi,
  Group: bi,
  GroupAddon: Ri
}, un = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function wi() {
  return j(un, null);
}
function Ci(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), r = d(() => io(n.value) ? n.value : t.value.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : !1), i = d(() => !!(r.value || t.value?.checked)), s = d(() => !!t.value?.indeterminate);
  return {
    isActive: r,
    isDisabled: o,
    isChecked: i,
    isIndeterminate: s
  };
}
function xi(e) {
  const t = d(() => !!b(e.checkboxRootContext?.isDisabled)), n = d(() => !!b(e.checkboxRootContext?.isActive)), o = d(() => !!b(e.checkboxRootContext?.isIndeterminate)), r = d(() => !!b(e.checkboxRootContext?.isValid)), i = d(() => !!b(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isIndeterminate: o,
    isValid: r,
    isInvalid: i
  };
}
const Ii = ["value", "disabled", "checked"], Si = /* @__PURE__ */ z({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: c } = U(), { isChecked: u, isDisabled: f, isIndeterminate: v } = Ci({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    }), p = Ce("inputRef");
    return K([p, v], ([m, g]) => {
      m && (m.indeterminate = !!g);
    }, {
      immediate: !0
    }), M(un, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => u.value,
      isDisabled: () => f.value,
      isIndeterminate: () => v.value,
      isValid: () => a.value,
      isInvalid: () => c.value
    }), (m, g) => (h(), _("label", {
      class: k(["checkbox", {
        "checkbox--disabled": l(f),
        "checkbox--active": l(u),
        "checkbox--indeterminate": l(v),
        "checkbox--invalid": l(c),
        "checkbox--valid": l(a)
      }])
    }, [
      G(X("input", ue({
        ref_key: "inputRef",
        ref: p,
        "onUpdate:modelValue": g[0] || (g[0] = ($) => r.value = $),
        value: e.value,
        type: "checkbox",
        disabled: l(f),
        checked: l(u),
        class: "checkbox__input"
      }, Te(o, !0)), null, 16, Ii), [
        [Tt, r.value]
      ]),
      y(m.$slots, "default")
    ], 2));
  }
}), Oi = /* @__PURE__ */ z({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = wi(), { isDisabled: n, isActive: o, isIndeterminate: r, isValid: i, isInvalid: s } = xi({
      checkboxRootContext: t
    });
    return (a, c) => (h(), _("span", {
      class: k(["checkbox-indicator", {
        "checkbox-indicator--disabled": l(n),
        "checkbox-indicator--active": l(o),
        "checkbox-indicator--indeterminate": l(r),
        "checkbox-indicator--valid": l(i),
        "checkbox-indicator--invalid": l(s)
      }])
    }, [
      y(a.$slots, "default", {
        isDisabled: l(n),
        isActive: l(o),
        isIndeterminate: l(r),
        isValid: l(i),
        isInvalid: l(s)
      }, () => [
        q(se(l(o) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), ki = {}, Ti = { class: "checkbox-title" };
function Ei(e, t) {
  return h(), _("span", Ti, [
    y(e.$slots, "default")
  ]);
}
const Vi = /* @__PURE__ */ V(ki, [["render", Ei]]), Pi = /* @__PURE__ */ z({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), _("div", {
      class: k(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      y(t.$slots, "default")
    ], 2));
  }
}), du = {
  Root: Si,
  Indicator: Oi,
  Title: Vi,
  Group: Pi
};
function Ai(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: d(() => n.value === t.value.value),
    isDisabled: o
  };
}
function Di(e) {
  const t = d(() => !!b(e.radioRootContext?.isDisabled)), n = d(() => !!b(e.radioRootContext?.isActive)), o = d(() => !!b(e.radioRootContext?.isValid)), r = d(() => !!b(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const ln = /* @__PURE__ */ Symbol("RadioRootContextKey");
function Ni() {
  return j(ln, null);
}
const Bi = ["value", "disabled"], Mi = /* @__PURE__ */ z({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: c } = U(), { isActive: u, isDisabled: f } = Ai({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    });
    return M(ln, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => u.value,
      isDisabled: () => f.value,
      isValid: () => a.value,
      isInvalid: () => c.value
    }), (v, p) => (h(), _("label", {
      class: k(["radio", {
        "radio--disabled": l(f),
        "radio--active": l(u),
        "radio--invalid": l(c),
        "radio--valid": l(a)
      }])
    }, [
      G(X("input", ue({
        "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
        value: e.value,
        type: "radio",
        disabled: l(f),
        class: "radio__input"
      }, Te(o, !0)), null, 16, Bi), [
        [En, r.value]
      ]),
      y(v.$slots, "default")
    ], 2));
  }
}), ji = /* @__PURE__ */ z({
  __name: "RadioIndicator",
  setup(e) {
    const t = Ni(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = Di({
      radioRootContext: t
    });
    return (s, a) => (h(), _("span", {
      class: k(["radio-indicator", {
        "radio-indicator--disabled": l(n),
        "radio-indicator--active": l(o),
        "radio-indicator--valid": l(r),
        "radio-indicator--invalid": l(i)
      }])
    }, [
      y(s.$slots, "default", {
        isDisabled: l(n),
        isActive: l(o),
        isValid: l(r),
        isInvalid: l(i)
      }, () => [
        q(se(l(o) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), Zi = {}, Li = { class: "radio-title" };
function Fi(e, t) {
  return h(), _("span", Li, [
    y(e.$slots, "default")
  ]);
}
const Ui = /* @__PURE__ */ V(Zi, [["render", Fi]]), Xi = /* @__PURE__ */ z({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), _("div", {
      class: k(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      y(t.$slots, "default")
    ], 2));
  }
}), fu = {
  Root: Mi,
  Indicator: ji,
  Title: Ui,
  Group: Xi
};
function Ji(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: n,
    isDisabled: o
  };
}
function Ki(e) {
  const t = d(() => !!b(e.switchRootContext?.isDisabled)), n = d(() => !!b(e.switchRootContext?.isActive)), o = d(() => !!b(e.switchRootContext?.isValid)), r = d(() => !!b(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const dn = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function qi() {
  return j(dn, null);
}
const Gi = { class: "switch" }, Yi = ["disabled"], Wi = /* @__PURE__ */ z({
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
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = U(), { isDisabled: a, isActive: c } = Ji({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value
    });
    return M(dn, {
      props: () => t,
      isActive: () => c.value,
      isDisabled: () => a.value,
      isValid: () => i.value,
      isInvalid: () => s.value
    }), (u, f) => (h(), _("label", Gi, [
      G(X("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (v) => n.value = v),
        type: "checkbox",
        disabled: l(a),
        class: "switch__input"
      }, null, 8, Yi), [
        [Tt, n.value]
      ]),
      y(u.$slots, "default")
    ]));
  }
}), Hi = /* @__PURE__ */ z({
  __name: "SwitchIndicator",
  setup(e) {
    const t = qi(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = Ki({
      switchRootContext: t
    });
    return (s, a) => (h(), _("span", {
      class: k(["switch-indicator", {
        "switch-indicator--disabled": l(n),
        "switch-indicator--active": l(o),
        "switch-indicator--valid": l(r),
        "switch-indicator--invalid": l(i)
      }])
    }, null, 2));
  }
}), Qi = {}, ea = { class: "switch-title" };
function ta(e, t) {
  return h(), _("span", ea, [
    y(e.$slots, "default")
  ]);
}
const na = /* @__PURE__ */ V(Qi, [["render", ta]]), pu = {
  Root: Wi,
  Indicator: Hi,
  Title: na
}, fn = 1, oa = -1 / 0, ra = 1 / 0, sa = 100, pn = 0, $t = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function ia(e) {
  const t = d(() => b(e.props)), n = d(() => b(e.modelValue)), o = d(() => t.value.step || fn), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), i = d(() => r.value || oe(t.value.min) && n.value === t.value.min), s = d(() => r.value || oe(t.value.max) && !(n.value < t.value.max));
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
  function u(f) {
    e.onUpdateModelValue?.(f);
  }
  return {
    step: o,
    isDisabled: r,
    isDecrementDisabled: i,
    isIncrementDisabled: s,
    handleDecrement: a,
    handleIncrement: c,
    setModelValue: u
  };
}
function aa(e) {
  const t = d(() => b(e.mousewheel)), n = d(() => oe(t.value) && t.value > 0 ? t.value : sa);
  return {
    handleWheel: Xe((r) => {
      t.value && (r.preventDefault(), r.stopImmediatePropagation(), r.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, n.value)
  };
}
function ca(e) {
  const t = d(() => b(e.inputNumberRootContext?.props)), n = d({
    get: () => b(e.inputNumberRootContext?.modelValue) ?? pn,
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
function ua(e) {
  const t = d(() => b(e.props)), n = d(() => t.value.action === $t.DECREMENT), o = d(() => t.value.action === $t.INCREMENT), r = d(() => n.value ? !!b(e.inputNumberRootContext?.isDecrementDisabled) : !!b(e.inputNumberRootContext?.isIncrementDisabled));
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
  return j(mn, null);
}
const la = /* @__PURE__ */ z({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ P({
    mousewheel: { type: [Boolean, Number] },
    min: { default: oa },
    max: { default: ra },
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
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = U(), {
      step: a,
      isDisabled: c,
      isDecrementDisabled: u,
      isIncrementDisabled: f,
      handleDecrement: v,
      handleIncrement: p,
      setModelValue: m
    } = ia({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value,
      onUpdateModelValue: (g) => {
        n.value = g;
      },
      onDecrement: (g) => {
        n.value = g;
      },
      onIncrement: (g) => {
        n.value = g;
      }
    });
    return M(mn, {
      props: () => t,
      isDisabled: () => c.value,
      modelValue: () => n.value,
      step: () => a.value,
      isDecrementDisabled: () => u.value,
      isIncrementDisabled: () => f.value,
      handleDecrement: v,
      handleIncrement: p,
      setModelValue: m
    }), (g, $) => (h(), _("div", {
      class: k(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": l(s),
        "input-number--valid": l(i)
      }])
    }, [
      y(g.$slots, "default")
    ], 2));
  }
}), da = { class: "input-number-input" }, fa = /* @__PURE__ */ z({
  __name: "InputNumberInput",
  setup(e) {
    const t = hn(), { props: n, modelValue: o } = ca({
      inputNumberRootContext: t
    }), { handleWheel: r } = aa({
      mousewheel: () => b(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (i, s) => (h(), _("div", da, [
      G(X("input", ue({
        "onUpdate:modelValue": s[0] || (s[0] = (a) => ke(o) ? o.value = a : null),
        type: "number",
        class: "input-number-input__native"
      }, l(n), {
        onWheel: s[1] || (s[1] = //@ts-ignore
        (...a) => l(r) && l(r)(...a))
      }), null, 16), [
        [
          kt,
          l(o),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), pa = ["disabled"], ma = /* @__PURE__ */ z({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, n = hn(), { handleAction: o, isDisabled: r, isDecrement: i, isIncrement: s } = ua({
      inputNumberRootContext: n,
      props: () => t
    });
    return (a, c) => (h(), _("button", {
      class: k(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: l(r),
      type: "button",
      onClick: c[0] || (c[0] = //@ts-ignore
      (...u) => l(o) && l(o)(...u))
    }, [
      y(a.$slots, "default", {}, () => [
        l(i) ? (h(), _(J, { key: 0 }, [
          q(" - ")
        ], 64)) : l(s) ? (h(), _(J, { key: 1 }, [
          q(" + ")
        ], 64)) : ce("", !0)
      ])
    ], 10, pa));
  }
}), mu = {
  Root: la,
  Input: fa,
  Button: ma
};
function ha() {
  const e = E(me.PASSWORD);
  function t() {
    e.value === me.PASSWORD ? e.value = me.TEXT : e.value = me.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const va = /* @__PURE__ */ z({
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
    const t = e, n = St(), o = L(e, "modelValue"), { currentType: r, handleToggleType: i } = ha();
    return (s, a) => (h(), tt(l(pe).Root, ue(t, {
      modelValue: o.value,
      "onUpdate:modelValue": a[1] || (a[1] = (c) => o.value = c),
      "native-type": l(r)
    }), {
      default: ze((c) => [
        n?.before ? (h(), tt(l(pe).Before, { key: 0 }, {
          default: ze(() => [
            y(s.$slots, "before", ve(_e(c)))
          ]),
          _: 2
        }, 1024)) : ce("", !0),
        Be(l(pe).Control, null, {
          default: ze(() => [
            Be(l(pe).Native)
          ]),
          _: 1
        }),
        Be(l(pe).After, null, {
          default: ze(() => [
            y(s.$slots, "after", ve(_e(c)), () => [
              X("button", {
                type: "button",
                onClick: a[0] || (a[0] = //@ts-ignore
                (...u) => l(i) && l(i)(...u))
              }, " 👁 ")
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["modelValue", "native-type"]));
  }
}), hu = {
  Root: va
};
function _a(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function ga(e) {
  return {
    isDisabled: d(() => {
      const n = e.inputCodeRootContext;
      return n ? !!b(n.isDisabled) : !1;
    })
  };
}
const vn = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function ba() {
  return j(vn, null);
}
const ya = /* @__PURE__ */ z({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = U(), { isDisabled: s } = _a({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(vn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, c) => (h(), _("div", {
      class: k(["input-code", {
        "input-code--disabled": l(s),
        "input-code--invalid": l(i),
        "input-code--valid": l(r)
      }])
    }, [
      y(a.$slots, "default")
    ], 2));
  }
}), $a = ["disabled", "aria-disabled"], za = /* @__PURE__ */ z({
  __name: "InputCodePin",
  setup(e) {
    const t = ba(), { isDisabled: n } = ga({
      inputCodeRootContext: t
    });
    return (o, r) => (h(), _("input", {
      type: "text",
      disabled: l(n),
      "aria-disabled": l(n),
      class: "input-code-pin"
    }, null, 8, $a));
  }
}), vu = {
  Root: ya,
  Pin: za
}, _n = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function gn() {
  return j(_n, null);
}
function Ra(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function wa(e) {
  function t(o) {
  }
  function n(o) {
  }
  return {
    handleEnter: t,
    handleTab: n
  };
}
const Ca = /* @__PURE__ */ z({
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
    const n = e, o = L(e, "modelValue"), { formRootContext: r, formItemContext: i, isValid: s, isInvalid: a } = U(), { isDisabled: c } = Ra({
      formRootContext: r,
      formItemContext: i,
      props: () => n
    });
    return M(_n, {
      props: () => n,
      modelValue: () => o.value,
      isDisabled: () => c.value
    }), (u, f) => (h(), _("div", {
      class: k(["input-tags", {
        "input-tags--disabled": l(c),
        "input-tags--invalid": l(a),
        "input-tags--valid": l(s)
      }])
    }, [
      y(u.$slots, "default")
    ], 2));
  }
}), xa = { class: "input-tags-input" }, Ia = /* @__PURE__ */ z({
  __name: "InputTagsInput",
  setup(e) {
    gn();
    const { handleEnter: t, handleTab: n } = wa();
    return (o, r) => (h(), _("div", xa, [
      X("input", {
        type: "text",
        onKeydown: [
          r[0] || (r[0] = nt(
            //@ts-ignore
            (...i) => l(t) && l(t)(...i),
            ["enter"]
          )),
          r[1] || (r[1] = nt(
            //@ts-ignore
            (...i) => l(n) && l(n)(...i),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), Sa = { class: "input-tags-tags" }, Oa = /* @__PURE__ */ z({
  __name: "InputTagsTags",
  setup(e) {
    return gn(), (t, n) => (h(), _("div", Sa));
  }
}), _u = {
  Root: Ca,
  Input: Ia,
  Tags: Oa
};
function ka(e) {
  const t = d(() => b(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Ta(e) {
  return {
    isDisabled: d(() => !!b(e.inputRangeRootContext?.isDisabled))
  };
}
const bn = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function Ea() {
  return j(bn, null);
}
const Va = /* @__PURE__ */ z({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = U(), { isDisabled: s } = ka({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(bn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, c) => (h(), _("div", {
      class: k(["input-range", {
        "input-range--disabled": l(s),
        "input-range--invalid": l(i),
        "input-range--valid": l(r)
      }])
    }, [
      y(a.$slots, "default")
    ], 2));
  }
}), Pa = ["aria-disabled"], Aa = /* @__PURE__ */ z({
  __name: "InputRangeSlider",
  setup(e) {
    const t = Ea(), { isDisabled: n } = Ta({
      inputRangeRootContext: t
    });
    return (o, r) => (h(), _("div", {
      class: "input-range-slider",
      "aria-disabled": l(n)
    }, null, 8, Pa));
  }
}), gu = {
  Root: Va,
  Slider: Aa
}, Da = /* @__PURE__ */ Symbol("ModalRootContextKey");
function Na(e) {
  function t() {
    e.onClose?.();
  }
  return {
    close: t
  };
}
const Ba = { class: "modal" }, Ma = /* @__PURE__ */ z({
  __name: "ModalRoot",
  props: /* @__PURE__ */ P({
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ P(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = L(e, "modelValue"), { close: r } = Na({
      modelValue: () => o.value,
      props: () => n,
      onClose: () => {
        o.value = !1;
      }
    });
    return M(Da, {
      close: r
    }), (i, s) => (h(), _("div", Ba, [
      y(i.$slots, "default")
    ]));
  }
}), ja = {};
function Za(e, t) {
  return h(), _("div", null, [
    y(e.$slots, "default")
  ]);
}
const La = /* @__PURE__ */ V(ja, [["render", Za]]), Fa = {};
function Ua(e, t) {
  return h(), _("div");
}
const Xa = /* @__PURE__ */ V(Fa, [["render", Ua]]), Ja = {}, Ka = { class: "modal-header" };
function qa(e, t) {
  return h(), _("div", Ka, [
    y(e.$slots, "default")
  ]);
}
const Ga = /* @__PURE__ */ V(Ja, [["render", qa]]), Ya = {}, Wa = { class: "modal-footer" };
function Ha(e, t) {
  return h(), _("div", Wa, [
    y(e.$slots, "default")
  ]);
}
const Qa = /* @__PURE__ */ V(Ya, [["render", Ha]]), ec = {};
function tc(e, t) {
  return h(), _("div");
}
const nc = /* @__PURE__ */ V(ec, [["render", tc]]), oc = {}, rc = { class: "modal-content" };
function sc(e, t) {
  return h(), _("div", rc, [
    y(e.$slots, "default")
  ]);
}
const ic = /* @__PURE__ */ V(oc, [["render", sc]]), bu = {
  Root: Ma,
  Body: La,
  Close: Xa,
  Header: Ga,
  Footer: Qa,
  Title: nc,
  Content: ic
};
function ac(e) {
  const t = d(() => b(e.props));
  function n() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: n
  };
}
const cc = /* @__PURE__ */ z({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const n = e, o = t, { handleDelete: r } = ac({
      props: () => n,
      onDelete(i) {
        o("delete", i);
      }
    });
    return (i, s) => (h(), _("div", {
      class: k(["tag", {
        [`tag--size-${e.size}`]: e.size,
        [`tag--theme-${e.theme}`]: e.theme
      }])
    }, [
      y(i.$slots, "default"),
      e.canDelete ? (h(), _("button", {
        key: 0,
        type: "button",
        onClick: s[0] || (s[0] = //@ts-ignore
        (...a) => l(r) && l(r)(...a))
      }, " X ")) : ce("", !0)
    ], 2));
  }
}), uc = /* @__PURE__ */ z({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (h(), _("div", {
      class: k(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      y(t.$slots, "default")
    ], 2));
  }
}), yu = {
  Root: cc,
  Group: uc
}, yn = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey");
function $u() {
  return j(yn, {
    props: () => ({}),
    t: () => ""
  });
}
function lc(e) {
  const t = d(() => b(e.props));
  function n(o) {
    if (!t.value?.locale)
      return "";
    const r = o.split(".");
    let i = t.value.locale;
    for (const s of r) {
      if (be(i) || Ee(i) || ge(i))
        return o;
      i = i[s];
    }
    return ge(i) ? i : o;
  }
  return {
    t: n
  };
}
const dc = /* @__PURE__ */ z({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e, { t: n } = lc({
      props: () => t
    });
    return M(yn, {
      props: () => t,
      t: n
    }), (o, r) => y(o.$slots, "default");
  }
}), zu = {
  Root: dc
}, $n = 300, zn = 1, Rn = 10;
function zt(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function Rt(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function wt(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function Ct(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function fc(e) {
  const t = d(() => b(e.props)), n = d(() => t.value?.infiniteScrollOffset ?? Rn), o = d(() => t.value?.draggableMultiplier ?? zn), r = d(() => oe(t.value?.debounceDelay) ? t.value.debounceDelay : $n), [i, s] = Q(), [a, c] = Q(), u = E(0), f = E(0), v = E(0), p = E(0);
  function m() {
    c(!1), s(!1);
  }
  const g = Je((w) => {
    e.onScroll?.(w), t.value?.draggable || (v.value = zt(e.scrollbar.value, !!t.value?.vertical), p.value = Rt(e.scrollbar.value, !!t.value?.horizontal));
    const x = e.scrollbar.value, S = e.content.value, H = x ? x.clientHeight : 0, de = x ? x.clientWidth : 0, et = S ? S.scrollWidth : 0, De = S ? S.scrollHeight : 0, Ne = v.value + H, wn = p.value + de, Cn = !!(t.value?.vertical && De - Ne <= n.value), xn = !!(t.value?.horizontal && et - wn <= n.value);
    Cn && e.onScrollEndY?.(), xn && e.onScrollEndX?.();
  }, r.value), $ = Xe((w) => {
    if (e.onMousemove?.(w), !t.value?.draggable || !a.value)
      return;
    w.preventDefault(), w.stopPropagation();
    const x = e.scrollbar.value;
    if (!x)
      return;
    const S = !!t.value?.vertical, H = !!t.value?.horizontal, de = w.pageY - wt(x, S), De = (w.pageX - Ct(x, H) - u.value) * o.value, Ne = (de - f.value) * o.value;
    H && (x.scrollLeft = p.value - De), S && (x.scrollTop = v.value - Ne);
  }, r.value);
  function C(w) {
    if (e.onMousedown?.(w), !t.value?.draggable)
      return;
    c(!0), s(!0);
    const x = e.scrollbar.value;
    if (x) {
      const S = !!t.value?.vertical, H = !!t.value?.horizontal;
      f.value = w.pageY - wt(x, S), u.value = w.pageX - Ct(x, H);
    }
    v.value = zt(e.scrollbar.value, !!t.value?.vertical), p.value = Rt(e.scrollbar.value, !!t.value?.horizontal);
  }
  function O(w) {
    e.onMouseleave?.(w), t.value?.draggable && m();
  }
  function T(w) {
    e.onMouseup?.(w), t.value?.draggable && m();
  }
  return Le(() => {
    g.cancel?.(), $.cancel?.();
  }), {
    isGrabbing: i,
    handleScroll: g,
    handleMousedown: C,
    handleMouseleave: O,
    handleMouseup: T,
    handleMousemove: $
  };
}
const pc = /* @__PURE__ */ z({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: zn },
    infiniteScrollOffset: { default: Rn },
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
      handleMouseleave: u,
      handleMouseup: f,
      handleMousemove: v
    } = fc({
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
    return (p, m) => (h(), _("div", {
      ref_key: "scrollbar",
      ref: r,
      class: k(["scrollbar", {
        "scrollbar--hidden": e.hidden,
        "scrollbar--draggable": e.draggable,
        "scrollbar--vertical": e.vertical,
        "scrollbar--horizontal": e.horizontal,
        "scrollbar--grabbing": l(s),
        [`scrollbar--size-${e.size}`]: e.size,
        [`scrollbar--theme-${e.theme}`]: e.theme
      }]),
      onScroll: m[0] || (m[0] = //@ts-ignore
      (...g) => l(a) && l(a)(...g)),
      onMousedown: m[1] || (m[1] = //@ts-ignore
      (...g) => l(c) && l(c)(...g)),
      onMouseleave: m[2] || (m[2] = //@ts-ignore
      (...g) => l(u) && l(u)(...g)),
      onMouseup: m[3] || (m[3] = //@ts-ignore
      (...g) => l(f) && l(f)(...g)),
      onMousemove: m[4] || (m[4] = //@ts-ignore
      (...g) => l(v) && l(v)(...g))
    }, [
      X("div", {
        ref_key: "content",
        ref: i,
        class: "scrollbar__content"
      }, [
        y(p.$slots, "default")
      ], 512)
    ], 34));
  }
}), Ru = {
  Root: pc
}, mc = /* @__PURE__ */ z({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, n) => (h(), _("div", {
      class: k(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      y(t.$slots, "default")
    ], 2));
  }
}), hc = /* @__PURE__ */ z({
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
    return (t, n) => (h(), _("div", {
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
      y(t.$slots, "default")
    ], 2));
  }
}), vc = /* @__PURE__ */ z({
  __name: "Row",
  props: {
    guttersX: { type: Boolean, default: !0 },
    guttersY: { type: Boolean },
    align: {},
    justify: {}
  },
  setup(e) {
    return (t, n) => (h(), _("div", {
      class: k(["row", {
        [`row--justify-${e.justify}`]: e.justify,
        [`row--align-${e.align}`]: e.align,
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }])
    }, [
      y(t.$slots, "default")
    ], 2));
  }
}), wu = {
  Container: mc,
  Row: vc,
  Col: hc
}, _c = { class: "section" }, gc = /* @__PURE__ */ z({
  __name: "SectionRoot",
  setup(e) {
    return (t, n) => (h(), _("section", _c, [
      y(t.$slots, "default")
    ]));
  }
}), bc = {}, yc = { class: "section-header" };
function $c(e, t) {
  return h(), _("header", yc, [
    y(e.$slots, "default")
  ]);
}
const zc = /* @__PURE__ */ V(bc, [["render", $c]]), Rc = {}, wc = { class: "section-title" };
function Cc(e, t) {
  return h(), _("h1", wc, [
    y(e.$slots, "default")
  ]);
}
const xc = /* @__PURE__ */ V(Rc, [["render", Cc]]), Ic = {}, Sc = { class: "section-footer" };
function Oc(e, t) {
  return h(), _("footer", Sc, [
    y(e.$slots, "default")
  ]);
}
const kc = /* @__PURE__ */ V(Ic, [["render", Oc]]), Tc = {}, Ec = { class: "section-body" };
function Vc(e, t) {
  return h(), _("div", Ec, [
    y(e.$slots, "default")
  ]);
}
const Pc = /* @__PURE__ */ V(Tc, [["render", Vc]]), Cu = {
  Root: gc,
  Header: zc,
  Title: xc,
  Footer: kc,
  Body: Pc
}, Ac = { class: "layout" }, Dc = /* @__PURE__ */ z({
  __name: "LayoutRoot",
  setup(e) {
    return (t, n) => (h(), _("div", Ac, [
      y(t.$slots, "header"),
      y(t.$slots, "default"),
      y(t.$slots, "footer")
    ]));
  }
}), Nc = {}, Bc = { class: "layout-body" };
function Mc(e, t) {
  return h(), _("main", Bc, [
    y(e.$slots, "default")
  ]);
}
const jc = /* @__PURE__ */ V(Nc, [["render", Mc]]), xu = {
  Root: Dc,
  Body: jc
}, Iu = {};
export {
  Lc as Accordion,
  Fc as Button,
  du as Checkbox,
  zu as ConfigProvider,
  yn as ConfigProviderRootContextKey,
  Kc as Direction,
  Gc as FlexAlign,
  Yc as FlexJustify,
  uu as Form,
  wu as Grid,
  $t as INPUT_NUMBER_ACTIONS,
  ra as INPUT_NUMBER_MAX,
  oa as INPUT_NUMBER_MIN,
  fn as INPUT_NUMBER_STEP,
  pn as INPUT_NUMBER_VALUE_DEFAULT,
  sa as INPUT_NUMBER_WHEEL_DELAY,
  pe as Input,
  vu as InputCode,
  so as InputModes,
  me as InputNativeTypes,
  mu as InputNumber,
  hu as InputPassword,
  gu as InputRange,
  _u as InputTags,
  jt as InputTypes,
  ot as IntersectionPresets,
  xu as Layout,
  bu as Modal,
  qc as Position,
  fu as Radio,
  Ru as Scrollbar,
  Cu as Section,
  lu as Select,
  Jc as Sizes,
  pu as Switch,
  yu as Tag,
  Xc as Themes,
  tu as booleanToBooleanish,
  fe as clone,
  Je as debounce,
  nu as defineFormRules,
  Hc as delay,
  rt as getProp,
  io as isBoolean,
  Wc as isEmpty,
  ao as isFunction,
  Ee as isNull,
  oe as isNumber,
  Ue as isObject,
  ge as isString,
  be as isUndefined,
  eu as omit,
  Qc as pick,
  Iu as ruRU,
  Xe as throttle,
  Pn as useAccordionItem,
  Vn as useAccordionRoot,
  An as useAccordionTrigger,
  su as useAnimatedNumber,
  ru as useClipboard,
  $u as useConfigProviderRootContext,
  cu as useEmitProxy,
  Rs as useFormItem,
  uo as useFormRoot,
  ro as useIntersectionObserver,
  ou as useLoadImage,
  Uc as usePlural,
  au as useScrollTo,
  Q as useToggle,
  iu as useWindowScroll
};
