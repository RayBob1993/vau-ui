import { defineComponent as b, mergeModels as R, useModel as A, createElementBlock as m, provide as H, openBlock as c, normalizeClass as V, unref as l, renderSlot as h, computed as p, toValue as $, inject as K, ref as M, withDirectives as W, createElementVNode as S, vShow as ye, watch as te, onBeforeUnmount as ht, markRaw as pn, onMounted as be, onScopeDispose as yt, isRef as et, nextTick as fn, useId as bt, onUnmounted as tt, withModifiers as mn, useSlots as le, useTemplateRef as de, createCommentVNode as Z, normalizeProps as L, guardReactiveProps as F, Fragment as ee, renderList as ze, toDisplayString as N, createTextVNode as J, mergeProps as U, toHandlers as ue, vModelDynamic as vn, vModelText as ao, vModelCheckbox as ro, vModelRadio as hn, createBlock as C, withCtx as x, createVNode as P, withKeys as Et, defineAsyncComponent as ot, h as nt, render as Be, createPropsRestProxy as io, Teleport as lo, Transition as st, createSlots as yn, reactive as bn, resolveDynamicComponent as gn, shallowRef as Bt } from "vue";
function _n(e) {
  const t = p(() => $(e.props));
  function o(n) {
    const s = $(e.modelValue);
    if (t.value.multiple && Array.isArray(s)) {
      if (!n)
        return;
      const a = new Set(s);
      a.has(n) ? a.delete(n) : a.add(n), e?.onChangeModel?.([...a]);
    } else
      e?.onChangeModel?.(n);
    e?.onChange?.(n);
  }
  return {
    setModelValue: o
  };
}
function $n(e) {
  const t = p(() => $(e.props)), o = p(() => $(e.accordionRootContext?.modelValue)), n = p(() => !!$(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: p(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function xn(e) {
  const t = p(() => $(e.accordionItemContext?.props)), o = p(() => !!t.value?.disabled);
  function n() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: o,
    handleToggle: n
  };
}
const uo = /* @__PURE__ */ Symbol("AccordionRootContextKey"), co = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function po() {
  return K(uo, null);
}
function fo() {
  return K(co, null);
}
function zn() {
  const e = po(), t = fo();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const wn = /* @__PURE__ */ b({
  __name: "AccordionRoot",
  props: /* @__PURE__ */ R({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = A(e, "modelValue"), { setModelValue: a } = _n({
      props: () => o,
      modelValue: () => s.value,
      onChange: (r) => n("change", r),
      onChangeModel: (r) => {
        s.value = r;
      }
    });
    return H(uo, {
      props: () => o,
      modelValue: () => s.value,
      setModelValue: a
    }), (r, i) => (c(), m("div", {
      class: V(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      h(r.$slots, "default")
    ], 2));
  }
}), Vn = /* @__PURE__ */ b({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = po(), { isActive: n } = $n({
      accordionRootContext: o,
      props: () => t
    });
    return H(co, {
      props: () => t,
      isActive: () => n.value
    }), (s, a) => (c(), m("div", {
      class: V(["accordion-item", {
        "accordion-item--open": l(n),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      h(s.$slots, "default", { isActive: l(n) })
    ], 2));
  }
}), j = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, Cn = {}, Tn = { class: "accordion-header" };
function Rn(e, t) {
  return c(), m("div", Tn, [
    h(e.$slots, "default")
  ]);
}
const Sn = /* @__PURE__ */ j(Cn, [["render", Rn]]), In = {
  class: "accordion-body",
  role: "region"
}, kn = { class: "accordion-body__content" }, On = /* @__PURE__ */ b({
  __name: "AccordionBody",
  setup(e) {
    const t = fo(), o = p(() => !!$(t?.isActive));
    return (n, s) => W((c(), m("div", In, [
      S("div", kn, [
        h(n.$slots, "default")
      ])
    ], 512)), [
      [ye, o.value]
    ]);
  }
}), En = {}, Bn = { class: "accordion-title" };
function Mn(e, t) {
  return c(), m("div", Bn, [
    h(e.$slots, "default")
  ]);
}
const An = /* @__PURE__ */ j(En, [["render", Mn]]), Dn = ["disabled"], Pn = /* @__PURE__ */ b({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = zn(), { isDisabled: n, handleToggle: s } = xn({
      accordionRootContext: t,
      accordionItemContext: o
    });
    return (a, r) => (c(), m("button", {
      type: "button",
      disabled: l(n),
      class: "v-accordion-trigger",
      onClick: r[0] || (r[0] = //@ts-ignore
      (...i) => l(s) && l(s)(...i))
    }, [
      h(a.$slots, "default")
    ], 8, Dn));
  }
}), $e = {
  Root: wn,
  Item: Vn,
  Header: Sn,
  Body: On,
  Title: An,
  Trigger: Pn
};
function Nn(e) {
  const t = p(() => $(e.props));
  return {
    isDisabled: p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const mo = /* @__PURE__ */ Symbol("FormRootContextKey"), vo = /* @__PURE__ */ Symbol("FormItemContextKey");
function ho() {
  return K(mo, null);
}
function yo() {
  return K(vo, null);
}
function re() {
  const e = ho(), t = yo(), o = p(() => !!t?.validationStatus.value.isSuccess), n = p(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: o,
    isInvalid: n
  };
}
const jn = ["disabled", "type"], Ln = /* @__PURE__ */ b({
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
    const t = e, { formRootContext: o, formItemContext: n } = re(), { isDisabled: s } = Nn({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return (a, r) => (c(), m("button", {
      class: V(["button", [
        {
          "button--disabled": l(s),
          "button--loading": e.loading,
          "button--plain": e.plain,
          "button--wide": e.wide,
          [`button--theme-${e.theme}`]: e.theme,
          [`button--size-${e.size}`]: e.size
        }
      ]]),
      disabled: l(s),
      type: e.type
    }, [
      h(a.$slots, "default")
    ], 10, jn));
  }
}), Fn = /* @__PURE__ */ b({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), bo = {
  Root: Ln,
  Group: Fn
};
function Zn() {
  const e = M([]);
  function t(n) {
    const s = e.value.findIndex((a) => a.id === n.id);
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
function Xn(e) {
  const t = p(() => $(e.formItems)), o = p(() => t.value.filter((a) => a.isValidatable));
  async function n(a = !1) {
    const r = (await Promise.all(o.value.map((i) => i.validate(a)))).every(Boolean);
    return r ? e.onValid?.() : e.onInvalid?.(), r;
  }
  function s() {
    t.value.forEach((a) => a.clearValidateErrors());
  }
  return {
    validatableFormItems: o,
    validate: n,
    clearValidate: s
  };
}
function se(e = !1) {
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
function Tp(e) {
  const t = new Intl.PluralRules("ru-RU"), o = /* @__PURE__ */ new Map([
    ["one", e[0]],
    ["few", e[1]],
    ["many", e[2]]
  ]);
  function n(s) {
    if (Number.isNaN(s) || s < 0)
      return;
    const a = t.select(s);
    return o.get(a);
  }
  return {
    plural: n
  };
}
function Hn(e, t, o) {
  let n;
  const s = te(e, (i) => {
    r(), i && (n = new IntersectionObserver(t, o), n.observe(i));
  }, {
    immediate: !0,
    flush: "post"
  });
  function a() {
    r(), s();
  }
  function r() {
    n && (n.disconnect(), n = void 0);
  }
  return ht(() => {
    a();
  }), {
    stop: a
  };
}
const go = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), Un = Object.freeze({
  NUMERIC: "numeric",
  TEL: "tel",
  TEXT: "text",
  DECIMAL: "decimal",
  SEARCH: "search",
  EMAIL: "email",
  NONE: "none",
  URL: "url"
}), ke = Object.freeze({
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  PASSWORD: "password"
}), Rp = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Sp = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Ip = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), kp = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Op = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Ep = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), Mt = Object.freeze({
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
function Yn(e) {
  return typeof e == "boolean";
}
function Me(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function at(e) {
  return e === null;
}
function gt(e) {
  return !at(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function Ce(e) {
  return typeof e > "u";
}
function Bp(e) {
  return at(e) || Ce(e) ? !0 : Me(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : gt(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Jn(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function ne(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function qn(e) {
  return !at(e) && !Ce(e) && gt(e) && !Array.isArray(e);
}
function At(e, t) {
  if (!e || !t.trim())
    return null;
  const o = t.split(".");
  let n = e;
  for (const s of o) {
    if (!qn(n))
      return null;
    n = n[s];
  }
  return n ?? null;
}
function Ie(e, t = /* @__PURE__ */ new WeakMap()) {
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
      o.set(Ie(s, t), Ie(n, t));
    }), o;
  }
  if (e instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    return t.set(e, o), e.forEach((n) => {
      o.add(Ie(n, t));
    }), o;
  }
  if (e instanceof ArrayBuffer) {
    const o = e.slice(0);
    return t.set(e, o), o;
  }
  if (Jn(e))
    return e;
  if (Array.isArray(e)) {
    const o = [];
    t.set(e, o);
    for (let n = 0; n < e.length; n++)
      o[n] = Ie(e[n], t);
    return o;
  }
  if (gt(e)) {
    const o = Object.create(Object.getPrototypeOf(e));
    t.set(e, o);
    const n = [
      ...Object.getOwnPropertyNames(e),
      ...Object.getOwnPropertySymbols(e)
    ];
    for (const s of n) {
      const a = Object.getOwnPropertyDescriptor(e, s);
      a && ("value" in a ? Object.defineProperty(o, s, {
        ...a,
        value: Ie(a.value, t)
      }) : Object.defineProperty(o, s, a));
    }
    return o;
  }
  return e;
}
function Mp(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Ap(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function Dp(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function Pp(e) {
  return e ? "true" : "false";
}
function _t(e, t, o = {}) {
  const {
    noTrailing: n = !1,
    noLeading: s = !1,
    debounceMode: a = void 0
  } = o;
  let r = null, i = !1, u = 0, d = null;
  function v() {
    r && (clearTimeout(r), r = null);
  }
  function f(_ = {}) {
    const { upcomingOnly: w = !1 } = _;
    v(), i = !w;
  }
  function y() {
    if (u = Date.now(), d) {
      const _ = d;
      e.apply(this, _), d = null;
    }
  }
  function g(..._) {
    if (i)
      return;
    const w = Date.now() - u;
    d = _;
    function I() {
      r = null;
    }
    v(), !s && a && !r && y.call(this), Ce(a) && w > t ? s ? (u = Date.now(), n || (r = setTimeout(a ? I : y.bind(this), t))) : y.call(this) : n || (r = setTimeout(
      a ? I : y.bind(this),
      Ce(a) ? t - w : t
    ));
  }
  return g.cancel = f, g;
}
function $t(e, t, o = {}) {
  const { atBegin: n = !1 } = o;
  return _t(e, t, {
    debounceMode: n
  });
}
function Np(e) {
  return pn(e);
}
function jp(e, t, o = {}) {
  const {
    rootMargin: n = Mt.LAZY_IMAGE.rootMargin,
    threshold: s = Mt.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: a = !0,
    immediate: r = !1
  } = o, { stop: i } = Hn(e, E, {
    rootMargin: n,
    threshold: s
  }), [u, d] = se(), [v, f] = se(), y = M(""), g = M(""), _ = M(""), w = Me(t) ? { src: t } : t;
  function I() {
    if (u.value || v.value)
      return;
    const k = new Image();
    k.src = w.src, w.srcset && (k.srcset = w.srcset), w.sizes && (k.sizes = w.sizes), k.onload = () => {
      y.value = w.src, g.value = w.srcset || "", _.value = w.sizes || "", d(!0), f(!1);
    }, k.onerror = () => {
      d(!1), f(!0);
    };
  }
  function E(k) {
    k.forEach((T) => {
      T.isIntersecting && !u.value && !v.value && I();
    });
  }
  return be(() => {
    if (r || a && "loading" in HTMLImageElement.prototype) {
      I();
      return;
    }
  }), {
    isLoaded: u,
    hasError: v,
    imageSrc: y,
    imageSrcset: g,
    imageSizes: _,
    loadImage: I,
    stop: i
  };
}
function Lp() {
  return {};
}
function Fp() {
  if (!window)
    return {
      number: M(0),
      animate: () => {
      }
    };
  const e = M(0);
  function t(o, n, s) {
    let a;
    function r(i) {
      a || (a = i);
      const u = Math.min((i - a) / s, 1);
      e.value = Math.floor(u * (n - o) + o), u < 1 && window.requestAnimationFrame(r);
    }
    window.requestAnimationFrame(r);
  }
  return {
    number: e,
    animate: t
  };
}
function Zp() {
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
  return be(() => {
    o(), window.addEventListener("scroll", o);
  }), yt(() => {
    window.removeEventListener("scroll", o);
  }), {
    x: e,
    y: t,
    setScroll: n
  };
}
function Xp(e, t) {
  (Me(e) ? document.querySelector(e) : et(e) ? l(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function Hp(e, t) {
  return {
    listeners: t.reduce((o, n) => {
      const s = n, a = String(s);
      return o[s] = ((...r) => e(a, ...r)), o;
    }, {})
  };
}
function Gn(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = Zn(), { validate: s, clearValidate: a, validatableFormItems: r } = Xn({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [i, u] = se(!1), d = M(!1), v = M("");
  function f() {
    t.value.forEach((_) => _.reset()), a();
  }
  te(r, async (_) => {
    const w = _.map((E) => E.id).sort().join(",");
    if (w === v.value)
      return;
    if (v.value = w, _.length === 0) {
      d.value && u(!0);
      return;
    }
    d.value = !0;
    const I = await s(!0);
    u(I);
  }, {
    immediate: !0
  });
  const y = $t(async () => {
    const _ = await s(!0);
    u(_);
  }, 400);
  async function g(_ = !1) {
    const w = await s(_);
    return u(w), w;
  }
  return te(() => $(e.modelValue), () => {
    y();
  }, {
    deep: !0
  }), be(async () => {
    await fn(), await g(!0);
  }), yt(() => {
    y.cancel();
  }), {
    isValid: i,
    validate: g,
    clearValidate: a,
    registerFormItem: o,
    unregisterFormItem: n,
    reset: f
  };
}
function Kn() {
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
function Wn(e) {
  const t = p(() => $(e.data)), o = p(() => $(e.schema)), n = M({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), s = M([]);
  function a(u) {
    n.value = { ...n.value, ...u };
  }
  function r() {
    s.value = [];
  }
  async function i(u = !1) {
    if (!t.value || !o.value)
      return !1;
    a({ isValidating: !0 });
    const d = await o.value.safeParseAsync(t.value);
    return a({ isValidating: !1 }), d.success ? (a({ isError: !1, isSuccess: !0 }), e.onValid?.(), !0) : (u || (a({ isError: !0, isSuccess: !1 }), d.error && (s.value = d.error.issues)), e.onInvalid?.(), !1);
  }
  return {
    validationStatus: n,
    validationErrors: s,
    clearValidateErrors: r,
    validate: i
  };
}
function z(e, t, o) {
  function n(i, u) {
    if (i._zod || Object.defineProperty(i, "_zod", {
      value: {
        def: u,
        constr: r,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), i._zod.traits.has(e))
      return;
    i._zod.traits.add(e), t(i, u);
    const d = r.prototype, v = Object.keys(d);
    for (let f = 0; f < v.length; f++) {
      const y = v[f];
      y in i || (i[y] = d[y].bind(i));
    }
  }
  const s = o?.Parent ?? Object;
  class a extends s {
  }
  Object.defineProperty(a, "name", { value: e });
  function r(i) {
    var u;
    const d = o?.Parent ? new a() : this;
    n(d, i), (u = d._zod).deferred ?? (u.deferred = []);
    for (const v of d._zod.deferred)
      v();
    return d;
  }
  return Object.defineProperty(r, "init", { value: n }), Object.defineProperty(r, Symbol.hasInstance, {
    value: (i) => o?.Parent && i instanceof o.Parent ? !0 : i?._zod?.traits?.has(e)
  }), Object.defineProperty(r, "name", { value: e }), r;
}
let we = class extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}, _o = class extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
};
const $o = {};
function ve(e) {
  return $o;
}
function xo(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, n]) => t.indexOf(+o) === -1).map(([o, n]) => n);
}
function ft(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function xt(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function zt(e) {
  return e == null;
}
function wt(e) {
  const t = e.startsWith("^") ? 1 : 0, o = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, o);
}
const Dt = /* @__PURE__ */ Symbol("evaluating");
function B(e, t, o) {
  let n;
  Object.defineProperty(e, t, {
    get() {
      if (n !== Dt)
        return n === void 0 && (n = Dt, n = o()), n;
    },
    set(s) {
      Object.defineProperty(e, t, {
        value: s
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function ge(e, t, o) {
  Object.defineProperty(e, t, {
    value: o,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function pe(...e) {
  const t = {};
  for (const o of e) {
    const n = Object.getOwnPropertyDescriptors(o);
    Object.assign(t, n);
  }
  return Object.defineProperties({}, t);
}
function Pt(e) {
  return JSON.stringify(e);
}
const zo = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function qe(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Qn = xt(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Ae(e) {
  if (qe(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const o = t.prototype;
  return !(qe(o) === !1 || Object.prototype.hasOwnProperty.call(o, "isPrototypeOf") === !1);
}
function wo(e) {
  return Ae(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const es = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ts(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function fe(e, t, o) {
  const n = new e._zod.constr(t ?? e._zod.def);
  return (!t || o?.parent) && (n._zod.parent = e), n;
}
function oe(e) {
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
function os(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function ns(e, t) {
  const o = e._zod.def, n = o.checks;
  if (n && n.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = pe(e._zod.def, {
    get shape() {
      const a = {};
      for (const r in t) {
        if (!(r in o.shape))
          throw new Error(`Unrecognized key: "${r}"`);
        t[r] && (a[r] = o.shape[r]);
      }
      return ge(this, "shape", a), a;
    },
    checks: []
  });
  return fe(e, s);
}
function ss(e, t) {
  const o = e._zod.def, n = o.checks;
  if (n && n.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = pe(e._zod.def, {
    get shape() {
      const a = { ...e._zod.def.shape };
      for (const r in t) {
        if (!(r in o.shape))
          throw new Error(`Unrecognized key: "${r}"`);
        t[r] && delete a[r];
      }
      return ge(this, "shape", a), a;
    },
    checks: []
  });
  return fe(e, s);
}
function as(e, t) {
  if (!Ae(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const o = e._zod.def.checks;
  if (o && o.length > 0) {
    const s = e._zod.def.shape;
    for (const a in t)
      if (Object.getOwnPropertyDescriptor(s, a) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const n = pe(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return ge(this, "shape", s), s;
    }
  });
  return fe(e, n);
}
function rs(e, t) {
  if (!Ae(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const o = pe(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t };
      return ge(this, "shape", n), n;
    }
  });
  return fe(e, o);
}
function is(e, t) {
  const o = pe(e._zod.def, {
    get shape() {
      const n = { ...e._zod.def.shape, ...t._zod.def.shape };
      return ge(this, "shape", n), n;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return fe(e, o);
}
function ls(e, t, o) {
  const n = t._zod.def.checks;
  if (n && n.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = pe(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, r = { ...a };
      if (o)
        for (const i in o) {
          if (!(i in a))
            throw new Error(`Unrecognized key: "${i}"`);
          o[i] && (r[i] = e ? new e({
            type: "optional",
            innerType: a[i]
          }) : a[i]);
        }
      else
        for (const i in a)
          r[i] = e ? new e({
            type: "optional",
            innerType: a[i]
          }) : a[i];
      return ge(this, "shape", r), r;
    },
    checks: []
  });
  return fe(t, s);
}
function us(e, t, o) {
  const n = pe(t._zod.def, {
    get shape() {
      const s = t._zod.def.shape, a = { ...s };
      if (o)
        for (const r in o) {
          if (!(r in a))
            throw new Error(`Unrecognized key: "${r}"`);
          o[r] && (a[r] = new e({
            type: "nonoptional",
            innerType: s[r]
          }));
        }
      else
        for (const r in s)
          a[r] = new e({
            type: "nonoptional",
            innerType: s[r]
          });
      return ge(this, "shape", a), a;
    }
  });
  return fe(t, n);
}
function xe(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let o = t; o < e.issues.length; o++)
    if (e.issues[o]?.continue !== !0)
      return !0;
  return !1;
}
function Vo(e, t) {
  return t.map((o) => {
    var n;
    return (n = o).path ?? (n.path = []), o.path.unshift(e), o;
  });
}
function Le(e) {
  return typeof e == "string" ? e : e?.message;
}
function he(e, t, o) {
  const n = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const s = Le(e.inst?._zod.def?.error?.(e)) ?? Le(t?.error?.(e)) ?? Le(o.customError?.(e)) ?? Le(o.localeError?.(e)) ?? "Invalid input";
    n.message = s;
  }
  return delete n.inst, delete n.continue, t?.reportInput || delete n.input, n;
}
function Vt(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function De(...e) {
  const [t, o, n] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: o,
    inst: n
  } : { ...t };
}
const Co = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, ft, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, To = z("$ZodError", Co), Ro = z("$ZodError", Co, { Parent: Error });
function cs(e, t = (o) => o.message) {
  const o = {}, n = [];
  for (const s of e.issues)
    s.path.length > 0 ? (o[s.path[0]] = o[s.path[0]] || [], o[s.path[0]].push(t(s))) : n.push(t(s));
  return { formErrors: n, fieldErrors: o };
}
function ds(e, t = (o) => o.message) {
  const o = { _errors: [] }, n = (s) => {
    for (const a of s.issues)
      if (a.code === "invalid_union" && a.errors.length)
        a.errors.map((r) => n({ issues: r }));
      else if (a.code === "invalid_key")
        n({ issues: a.issues });
      else if (a.code === "invalid_element")
        n({ issues: a.issues });
      else if (a.path.length === 0)
        o._errors.push(t(a));
      else {
        let r = o, i = 0;
        for (; i < a.path.length; ) {
          const u = a.path[i];
          i === a.path.length - 1 ? (r[u] = r[u] || { _errors: [] }, r[u]._errors.push(t(a))) : r[u] = r[u] || { _errors: [] }, r = r[u], i++;
        }
      }
  };
  return n(e), o;
}
const Ct = (e) => (t, o, n, s) => {
  const a = n ? Object.assign(n, { async: !1 }) : { async: !1 }, r = t._zod.run({ value: o, issues: [] }, a);
  if (r instanceof Promise)
    throw new we();
  if (r.issues.length) {
    const i = new (s?.Err ?? e)(r.issues.map((u) => he(u, a, ve())));
    throw zo(i, s?.callee), i;
  }
  return r.value;
}, Tt = (e) => async (t, o, n, s) => {
  const a = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let r = t._zod.run({ value: o, issues: [] }, a);
  if (r instanceof Promise && (r = await r), r.issues.length) {
    const i = new (s?.Err ?? e)(r.issues.map((u) => he(u, a, ve())));
    throw zo(i, s?.callee), i;
  }
  return r.value;
}, rt = (e) => (t, o, n) => {
  const s = n ? { ...n, async: !1 } : { async: !1 }, a = t._zod.run({ value: o, issues: [] }, s);
  if (a instanceof Promise)
    throw new we();
  return a.issues.length ? {
    success: !1,
    error: new (e ?? To)(a.issues.map((r) => he(r, s, ve())))
  } : { success: !0, data: a.value };
}, ps = /* @__PURE__ */ rt(Ro), it = (e) => async (t, o, n) => {
  const s = n ? Object.assign(n, { async: !0 }) : { async: !0 };
  let a = t._zod.run({ value: o, issues: [] }, s);
  return a instanceof Promise && (a = await a), a.issues.length ? {
    success: !1,
    error: new e(a.issues.map((r) => he(r, s, ve())))
  } : { success: !0, data: a.value };
}, fs = /* @__PURE__ */ it(Ro), ms = (e) => (t, o, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Ct(e)(t, o, s);
}, vs = (e) => (t, o, n) => Ct(e)(t, o, n), hs = (e) => async (t, o, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return Tt(e)(t, o, s);
}, ys = (e) => async (t, o, n) => Tt(e)(t, o, n), bs = (e) => (t, o, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return rt(e)(t, o, s);
}, gs = (e) => (t, o, n) => rt(e)(t, o, n), _s = (e) => async (t, o, n) => {
  const s = n ? Object.assign(n, { direction: "backward" }) : { direction: "backward" };
  return it(e)(t, o, s);
}, $s = (e) => async (t, o, n) => it(e)(t, o, n), Te = /* @__PURE__ */ z("$ZodCheck", (e, t) => {
  var o;
  e._zod ?? (e._zod = {}), e._zod.def = t, (o = e._zod).onattach ?? (o.onattach = []);
}), xs = /* @__PURE__ */ z("$ZodCheckMaxLength", (e, t) => {
  var o;
  Te.init(e, t), (o = e._zod.def).when ?? (o.when = (n) => {
    const s = n.value;
    return !zt(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < s && (n._zod.bag.maximum = t.maximum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length <= t.maximum)
      return;
    const a = Vt(s);
    n.issues.push({
      origin: a,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), zs = /* @__PURE__ */ z("$ZodCheckMinLength", (e, t) => {
  var o;
  Te.init(e, t), (o = e._zod.def).when ?? (o.when = (n) => {
    const s = n.value;
    return !zt(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > s && (n._zod.bag.minimum = t.minimum);
  }), e._zod.check = (n) => {
    const s = n.value;
    if (s.length >= t.minimum)
      return;
    const a = Vt(s);
    n.issues.push({
      origin: a,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: s,
      inst: e,
      continue: !t.abort
    });
  };
}), ws = /* @__PURE__ */ z("$ZodCheckLengthEquals", (e, t) => {
  var o;
  Te.init(e, t), (o = e._zod.def).when ?? (o.when = (n) => {
    const s = n.value;
    return !zt(s) && s.length !== void 0;
  }), e._zod.onattach.push((n) => {
    const s = n._zod.bag;
    s.minimum = t.length, s.maximum = t.length, s.length = t.length;
  }), e._zod.check = (n) => {
    const s = n.value, a = s.length;
    if (a === t.length)
      return;
    const r = Vt(s), i = a > t.length;
    n.issues.push({
      origin: r,
      ...i ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Vs = /* @__PURE__ */ z("$ZodCheckOverwrite", (e, t) => {
  Te.init(e, t), e._zod.check = (o) => {
    o.value = t.tx(o.value);
  };
});
let Cs = class {
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
`).filter((a) => a), n = Math.min(...o.map((a) => a.length - a.trimStart().length)), s = o.map((a) => a.slice(n)).map((a) => " ".repeat(this.indent * 2) + a);
    for (const a of s)
      this.content.push(a);
  }
  compile() {
    const t = Function, o = this?.args, n = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...o, n.join(`
`));
  }
};
const Ts = {
  major: 4,
  minor: 3,
  patch: 6
}, Y = /* @__PURE__ */ z("$ZodType", (e, t) => {
  var o;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ts;
  const n = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && n.unshift(e);
  for (const s of n)
    for (const a of s._zod.onattach)
      a(e);
  if (n.length === 0)
    (o = e._zod).deferred ?? (o.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const s = (r, i, u) => {
      let d = xe(r), v;
      for (const f of i) {
        if (f._zod.def.when) {
          if (!f._zod.def.when(r))
            continue;
        } else if (d)
          continue;
        const y = r.issues.length, g = f._zod.check(r);
        if (g instanceof Promise && u?.async === !1)
          throw new we();
        if (v || g instanceof Promise)
          v = (v ?? Promise.resolve()).then(async () => {
            await g, r.issues.length !== y && (d || (d = xe(r, y)));
          });
        else {
          if (r.issues.length === y)
            continue;
          d || (d = xe(r, y));
        }
      }
      return v ? v.then(() => r) : r;
    }, a = (r, i, u) => {
      if (xe(r))
        return r.aborted = !0, r;
      const d = s(i, n, u);
      if (d instanceof Promise) {
        if (u.async === !1)
          throw new we();
        return d.then((v) => e._zod.parse(v, u));
      }
      return e._zod.parse(d, u);
    };
    e._zod.run = (r, i) => {
      if (i.skipChecks)
        return e._zod.parse(r, i);
      if (i.direction === "backward") {
        const d = e._zod.parse({ value: r.value, issues: [] }, { ...i, skipChecks: !0 });
        return d instanceof Promise ? d.then((v) => a(v, r, i)) : a(d, r, i);
      }
      const u = e._zod.parse(r, i);
      if (u instanceof Promise) {
        if (i.async === !1)
          throw new we();
        return u.then((d) => s(d, n, i));
      }
      return s(u, n, i);
    };
  }
  B(e, "~standard", () => ({
    validate: (s) => {
      try {
        const a = ps(e, s);
        return a.success ? { value: a.data } : { issues: a.error?.issues };
      } catch {
        return fs(e, s).then((a) => a.success ? { value: a.data } : { issues: a.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Rs = /* @__PURE__ */ z("$ZodUnknown", (e, t) => {
  Y.init(e, t), e._zod.parse = (o) => o;
}), Ss = /* @__PURE__ */ z("$ZodNever", (e, t) => {
  Y.init(e, t), e._zod.parse = (o, n) => (o.issues.push({
    expected: "never",
    code: "invalid_type",
    input: o.value,
    inst: e
  }), o);
});
function Nt(e, t, o) {
  e.issues.length && t.issues.push(...Vo(o, e.issues)), t.value[o] = e.value;
}
const Is = /* @__PURE__ */ z("$ZodArray", (e, t) => {
  Y.init(e, t), e._zod.parse = (o, n) => {
    const s = o.value;
    if (!Array.isArray(s))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: e
      }), o;
    o.value = Array(s.length);
    const a = [];
    for (let r = 0; r < s.length; r++) {
      const i = s[r], u = t.element._zod.run({
        value: i,
        issues: []
      }, n);
      u instanceof Promise ? a.push(u.then((d) => Nt(d, o, r))) : Nt(u, o, r);
    }
    return a.length ? Promise.all(a).then(() => o) : o;
  };
});
function Ge(e, t, o, n, s) {
  if (e.issues.length) {
    if (s && !(o in n))
      return;
    t.issues.push(...Vo(o, e.issues));
  }
  e.value === void 0 ? o in n && (t.value[o] = void 0) : t.value[o] = e.value;
}
function So(e) {
  const t = Object.keys(e.shape);
  for (const n of t)
    if (!e.shape?.[n]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${n}": expected a Zod schema`);
  const o = os(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(o)
  };
}
function Io(e, t, o, n, s, a) {
  const r = [], i = s.keySet, u = s.catchall._zod, d = u.def.type, v = u.optout === "optional";
  for (const f in t) {
    if (i.has(f))
      continue;
    if (d === "never") {
      r.push(f);
      continue;
    }
    const y = u.run({ value: t[f], issues: [] }, n);
    y instanceof Promise ? e.push(y.then((g) => Ge(g, o, f, t, v))) : Ge(y, o, f, t, v);
  }
  return r.length && o.issues.push({
    code: "unrecognized_keys",
    keys: r,
    input: t,
    inst: a
  }), e.length ? Promise.all(e).then(() => o) : o;
}
const ks = /* @__PURE__ */ z("$ZodObject", (e, t) => {
  if (Y.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const r = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const i = { ...r };
        return Object.defineProperty(t, "shape", {
          value: i
        }), i;
      }
    });
  }
  const o = xt(() => So(t));
  B(e._zod, "propValues", () => {
    const r = t.shape, i = {};
    for (const u in r) {
      const d = r[u]._zod;
      if (d.values) {
        i[u] ?? (i[u] = /* @__PURE__ */ new Set());
        for (const v of d.values)
          i[u].add(v);
      }
    }
    return i;
  });
  const n = qe, s = t.catchall;
  let a;
  e._zod.parse = (r, i) => {
    a ?? (a = o.value);
    const u = r.value;
    if (!n(u))
      return r.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), r;
    r.value = {};
    const d = [], v = a.shape;
    for (const f of a.keys) {
      const y = v[f], g = y._zod.optout === "optional", _ = y._zod.run({ value: u[f], issues: [] }, i);
      _ instanceof Promise ? d.push(_.then((w) => Ge(w, r, f, u, g))) : Ge(_, r, f, u, g);
    }
    return s ? Io(d, u, r, i, o.value, e) : d.length ? Promise.all(d).then(() => r) : r;
  };
}), Os = /* @__PURE__ */ z("$ZodObjectJIT", (e, t) => {
  ks.init(e, t);
  const o = e._zod.parse, n = xt(() => So(t)), s = (f) => {
    const y = new Cs(["shape", "payload", "ctx"]), g = n.value, _ = (k) => {
      const T = Pt(k);
      return `shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`;
    };
    y.write("const input = payload.value;");
    const w = /* @__PURE__ */ Object.create(null);
    let I = 0;
    for (const k of g.keys)
      w[k] = `key_${I++}`;
    y.write("const newResult = {};");
    for (const k of g.keys) {
      const T = w[k], O = Pt(k), D = f[k]?._zod?.optout === "optional";
      y.write(`const ${T} = ${_(k)};`), D ? y.write(`
        if (${T}.issues.length) {
          if (${O} in input) {
            payload.issues = payload.issues.concat(${T}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${O}, ...iss.path] : [${O}]
            })));
          }
        }
        
        if (${T}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${T}.value;
        }
        
      `) : y.write(`
        if (${T}.issues.length) {
          payload.issues = payload.issues.concat(${T}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${O}, ...iss.path] : [${O}]
          })));
        }
        
        if (${T}.value === undefined) {
          if (${O} in input) {
            newResult[${O}] = undefined;
          }
        } else {
          newResult[${O}] = ${T}.value;
        }
        
      `);
    }
    y.write("payload.value = newResult;"), y.write("return payload;");
    const E = y.compile();
    return (k, T) => E(f, k, T);
  };
  let a;
  const r = qe, i = !$o.jitless, u = i && Qn.value, d = t.catchall;
  let v;
  e._zod.parse = (f, y) => {
    v ?? (v = n.value);
    const g = f.value;
    return r(g) ? i && u && y?.async === !1 && y.jitless !== !0 ? (a || (a = s(t.shape)), f = a(f, y), d ? Io([], g, f, y, v, e) : f) : o(f, y) : (f.issues.push({
      expected: "object",
      code: "invalid_type",
      input: g,
      inst: e
    }), f);
  };
});
function jt(e, t, o, n) {
  for (const a of e)
    if (a.issues.length === 0)
      return t.value = a.value, t;
  const s = e.filter((a) => !xe(a));
  return s.length === 1 ? (t.value = s[0].value, s[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: o,
    errors: e.map((a) => a.issues.map((r) => he(r, n, ve())))
  }), t);
}
const Es = /* @__PURE__ */ z("$ZodUnion", (e, t) => {
  Y.init(e, t), B(e._zod, "optin", () => t.options.some((s) => s._zod.optin === "optional") ? "optional" : void 0), B(e._zod, "optout", () => t.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), B(e._zod, "values", () => {
    if (t.options.every((s) => s._zod.values))
      return new Set(t.options.flatMap((s) => Array.from(s._zod.values)));
  }), B(e._zod, "pattern", () => {
    if (t.options.every((s) => s._zod.pattern)) {
      const s = t.options.map((a) => a._zod.pattern);
      return new RegExp(`^(${s.map((a) => wt(a.source)).join("|")})$`);
    }
  });
  const o = t.options.length === 1, n = t.options[0]._zod.run;
  e._zod.parse = (s, a) => {
    if (o)
      return n(s, a);
    let r = !1;
    const i = [];
    for (const u of t.options) {
      const d = u._zod.run({
        value: s.value,
        issues: []
      }, a);
      if (d instanceof Promise)
        i.push(d), r = !0;
      else {
        if (d.issues.length === 0)
          return d;
        i.push(d);
      }
    }
    return r ? Promise.all(i).then((u) => jt(u, s, e, a)) : jt(i, s, e, a);
  };
}), Bs = /* @__PURE__ */ z("$ZodIntersection", (e, t) => {
  Y.init(e, t), e._zod.parse = (o, n) => {
    const s = o.value, a = t.left._zod.run({ value: s, issues: [] }, n), r = t.right._zod.run({ value: s, issues: [] }, n);
    return a instanceof Promise || r instanceof Promise ? Promise.all([a, r]).then(([i, u]) => Lt(o, i, u)) : Lt(o, a, r);
  };
});
function mt(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Ae(e) && Ae(t)) {
    const o = Object.keys(t), n = Object.keys(e).filter((a) => o.indexOf(a) !== -1), s = { ...e, ...t };
    for (const a of n) {
      const r = mt(e[a], t[a]);
      if (!r.valid)
        return {
          valid: !1,
          mergeErrorPath: [a, ...r.mergeErrorPath]
        };
      s[a] = r.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const o = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n], a = t[n], r = mt(s, a);
      if (!r.valid)
        return {
          valid: !1,
          mergeErrorPath: [n, ...r.mergeErrorPath]
        };
      o.push(r.data);
    }
    return { valid: !0, data: o };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Lt(e, t, o) {
  const n = /* @__PURE__ */ new Map();
  let s;
  for (const i of t.issues)
    if (i.code === "unrecognized_keys") {
      s ?? (s = i);
      for (const u of i.keys)
        n.has(u) || n.set(u, {}), n.get(u).l = !0;
    } else
      e.issues.push(i);
  for (const i of o.issues)
    if (i.code === "unrecognized_keys")
      for (const u of i.keys)
        n.has(u) || n.set(u, {}), n.get(u).r = !0;
    else
      e.issues.push(i);
  const a = [...n].filter(([, i]) => i.l && i.r).map(([i]) => i);
  if (a.length && s && e.issues.push({ ...s, keys: a }), xe(e))
    return e;
  const r = mt(t.value, o.value);
  if (!r.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);
  return e.value = r.data, e;
}
const Ms = /* @__PURE__ */ z("$ZodEnum", (e, t) => {
  Y.init(e, t);
  const o = xo(t.entries), n = new Set(o);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${o.filter((s) => es.has(typeof s)).map((s) => typeof s == "string" ? ts(s) : s.toString()).join("|")})$`), e._zod.parse = (s, a) => {
    const r = s.value;
    return n.has(r) || s.issues.push({
      code: "invalid_value",
      values: o,
      input: r,
      inst: e
    }), s;
  };
}), As = /* @__PURE__ */ z("$ZodTransform", (e, t) => {
  Y.init(e, t), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      throw new _o(e.constructor.name);
    const s = t.transform(o.value, o);
    if (n.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((a) => (o.value = a, o));
    if (s instanceof Promise)
      throw new we();
    return o.value = s, o;
  };
});
function Ft(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const ko = /* @__PURE__ */ z("$ZodOptional", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", B(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), B(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${wt(o.source)})?$`) : void 0;
  }), e._zod.parse = (o, n) => {
    if (t.innerType._zod.optin === "optional") {
      const s = t.innerType._zod.run(o, n);
      return s instanceof Promise ? s.then((a) => Ft(a, o.value)) : Ft(s, o.value);
    }
    return o.value === void 0 ? o : t.innerType._zod.run(o, n);
  };
}), Ds = /* @__PURE__ */ z("$ZodExactOptional", (e, t) => {
  ko.init(e, t), B(e._zod, "values", () => t.innerType._zod.values), B(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (o, n) => t.innerType._zod.run(o, n);
}), Ps = /* @__PURE__ */ z("$ZodNullable", (e, t) => {
  Y.init(e, t), B(e._zod, "optin", () => t.innerType._zod.optin), B(e._zod, "optout", () => t.innerType._zod.optout), B(e._zod, "pattern", () => {
    const o = t.innerType._zod.pattern;
    return o ? new RegExp(`^(${wt(o.source)}|null)$`) : void 0;
  }), B(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (o, n) => o.value === null ? o : t.innerType._zod.run(o, n);
}), Ns = /* @__PURE__ */ z("$ZodDefault", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", B(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(o, n);
    if (o.value === void 0)
      return o.value = t.defaultValue, o;
    const s = t.innerType._zod.run(o, n);
    return s instanceof Promise ? s.then((a) => Zt(a, t)) : Zt(s, t);
  };
});
function Zt(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const js = /* @__PURE__ */ z("$ZodPrefault", (e, t) => {
  Y.init(e, t), e._zod.optin = "optional", B(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, n) => (n.direction === "backward" || o.value === void 0 && (o.value = t.defaultValue), t.innerType._zod.run(o, n));
}), Ls = /* @__PURE__ */ z("$ZodNonOptional", (e, t) => {
  Y.init(e, t), B(e._zod, "values", () => {
    const o = t.innerType._zod.values;
    return o ? new Set([...o].filter((n) => n !== void 0)) : void 0;
  }), e._zod.parse = (o, n) => {
    const s = t.innerType._zod.run(o, n);
    return s instanceof Promise ? s.then((a) => Xt(a, e)) : Xt(s, e);
  };
});
function Xt(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Fs = /* @__PURE__ */ z("$ZodCatch", (e, t) => {
  Y.init(e, t), B(e._zod, "optin", () => t.innerType._zod.optin), B(e._zod, "optout", () => t.innerType._zod.optout), B(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(o, n);
    const s = t.innerType._zod.run(o, n);
    return s instanceof Promise ? s.then((a) => (o.value = a.value, a.issues.length && (o.value = t.catchValue({
      ...o,
      error: {
        issues: a.issues.map((r) => he(r, n, ve()))
      },
      input: o.value
    }), o.issues = []), o)) : (o.value = s.value, s.issues.length && (o.value = t.catchValue({
      ...o,
      error: {
        issues: s.issues.map((a) => he(a, n, ve()))
      },
      input: o.value
    }), o.issues = []), o);
  };
}), Zs = /* @__PURE__ */ z("$ZodPipe", (e, t) => {
  Y.init(e, t), B(e._zod, "values", () => t.in._zod.values), B(e._zod, "optin", () => t.in._zod.optin), B(e._zod, "optout", () => t.out._zod.optout), B(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (o, n) => {
    if (n.direction === "backward") {
      const a = t.out._zod.run(o, n);
      return a instanceof Promise ? a.then((r) => Fe(r, t.in, n)) : Fe(a, t.in, n);
    }
    const s = t.in._zod.run(o, n);
    return s instanceof Promise ? s.then((a) => Fe(a, t.out, n)) : Fe(s, t.out, n);
  };
});
function Fe(e, t, o) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues }, o);
}
const Xs = /* @__PURE__ */ z("$ZodReadonly", (e, t) => {
  Y.init(e, t), B(e._zod, "propValues", () => t.innerType._zod.propValues), B(e._zod, "values", () => t.innerType._zod.values), B(e._zod, "optin", () => t.innerType?._zod?.optin), B(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      return t.innerType._zod.run(o, n);
    const s = t.innerType._zod.run(o, n);
    return s instanceof Promise ? s.then(Ht) : Ht(s);
  };
});
function Ht(e) {
  return e.value = Object.freeze(e.value), e;
}
const Hs = /* @__PURE__ */ z("$ZodCustom", (e, t) => {
  Te.init(e, t), Y.init(e, t), e._zod.parse = (o, n) => o, e._zod.check = (o) => {
    const n = o.value, s = t.fn(n);
    if (s instanceof Promise)
      return s.then((a) => Ut(a, o, n, e));
    Ut(s, o, n, e);
  };
});
function Ut(e, t, o, n) {
  if (!e) {
    const s = {
      code: "custom",
      input: o,
      inst: n,
      // incorporates params.error into issue reporting
      path: [...n._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !n._zod.def.abort
      // params: inst._zod.def.params,
    };
    n._zod.def.params && (s.params = n._zod.def.params), t.issues.push(De(s));
  }
}
var Yt;
class Us {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...o) {
    const n = o[0];
    return this._map.set(t, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const o = this._map.get(t);
    return o && typeof o == "object" && "id" in o && this._idmap.delete(o.id), this._map.delete(t), this;
  }
  get(t) {
    const o = t._zod.parent;
    if (o) {
      const n = { ...this.get(o) ?? {} };
      delete n.id;
      const s = { ...n, ...this._map.get(t) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Ys() {
  return new Us();
}
(Yt = globalThis).__zod_globalRegistry ?? (Yt.__zod_globalRegistry = Ys());
const Oe = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function qs(e, t) {
  return new e({
    type: "never",
    ...oe(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gs(e, t) {
  return new xs({
    check: "max_length",
    ...oe(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Jt(e, t) {
  return new zs({
    check: "min_length",
    ...oe(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ks(e, t) {
  return new ws({
    check: "length_equals",
    ...oe(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  return new Vs({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Qs(e, t, o) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...oe(o)
  });
}
// @__NO_SIDE_EFFECTS__
function ea(e, t, o) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...oe(o)
  });
}
// @__NO_SIDE_EFFECTS__
function ta(e) {
  const t = /* @__PURE__ */ oa((o) => (o.addIssue = (n) => {
    if (typeof n == "string")
      o.issues.push(De(n, o.value, t._zod.def));
    else {
      const s = n;
      s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = o.value), s.inst ?? (s.inst = t), s.continue ?? (s.continue = !t._zod.def.abort), o.issues.push(De(s));
    }
  }, e(o.value, o)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function oa(e, t) {
  const o = new Te({
    check: "custom",
    ...oe(t)
  });
  return o._zod.check = e, o;
}
function Oo(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? Oe,
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
function q(e, t, o = { path: [], schemaPath: [] }) {
  var n;
  const s = e._zod.def, a = t.seen.get(e);
  if (a)
    return a.count++, o.schemaPath.includes(e) && (a.cycle = o.path), a.schema;
  const r = { schema: {}, count: 1, cycle: void 0, path: o.path };
  t.seen.set(e, r);
  const i = e._zod.toJSONSchema?.();
  if (i)
    r.schema = i;
  else {
    const d = {
      ...o,
      schemaPath: [...o.schemaPath, e],
      path: o.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, r.schema, d);
    else {
      const f = r.schema, y = t.processors[s.type];
      if (!y)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      y(e, t, f, d);
    }
    const v = e._zod.parent;
    v && (r.ref || (r.ref = v), q(v, t, d), t.seen.get(v).isParent = !0);
  }
  const u = t.metadataRegistry.get(e);
  return u && Object.assign(r.schema, u), t.io === "input" && G(e) && (delete r.schema.examples, delete r.schema.default), t.io === "input" && r.schema._prefault && ((n = r.schema).default ?? (n.default = r.schema._prefault)), delete r.schema._prefault, t.seen.get(e).schema;
}
function Eo(e, t) {
  const o = e.seen.get(t);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = /* @__PURE__ */ new Map();
  for (const r of e.seen.entries()) {
    const i = e.metadataRegistry.get(r[0])?.id;
    if (i) {
      const u = n.get(i);
      if (u && u !== r[0])
        throw new Error(`Duplicate schema id "${i}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      n.set(i, r[0]);
    }
  }
  const s = (r) => {
    const i = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const v = e.external.registry.get(r[0])?.id, f = e.external.uri ?? ((g) => g);
      if (v)
        return { ref: f(v) };
      const y = r[1].defId ?? r[1].schema.id ?? `schema${e.counter++}`;
      return r[1].defId = y, { defId: y, ref: `${f("__shared")}#/${i}/${y}` };
    }
    if (r[1] === o)
      return { ref: "#" };
    const u = `#/${i}/`, d = r[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: d, ref: u + d };
  }, a = (r) => {
    if (r[1].schema.$ref)
      return;
    const i = r[1], { ref: u, defId: d } = s(r);
    i.def = { ...i.schema }, d && (i.defId = d);
    const v = i.schema;
    for (const f in v)
      delete v[f];
    v.$ref = u;
  };
  if (e.cycles === "throw")
    for (const r of e.seen.entries()) {
      const i = r[1];
      if (i.cycle)
        throw new Error(`Cycle detected: #/${i.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const r of e.seen.entries()) {
    const i = r[1];
    if (t === r[0]) {
      a(r);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(r[0])?.id;
      if (t !== r[0] && u) {
        a(r);
        continue;
      }
    }
    if (e.metadataRegistry.get(r[0])?.id) {
      a(r);
      continue;
    }
    if (i.cycle) {
      a(r);
      continue;
    }
    if (i.count > 1 && e.reused === "ref") {
      a(r);
      continue;
    }
  }
}
function Bo(e, t) {
  const o = e.seen.get(t);
  if (!o)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const n = (r) => {
    const i = e.seen.get(r);
    if (i.ref === null)
      return;
    const u = i.def ?? i.schema, d = { ...u }, v = i.ref;
    if (i.ref = null, v) {
      n(v);
      const y = e.seen.get(v), g = y.schema;
      if (g.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(g)) : Object.assign(u, g), Object.assign(u, d), r._zod.parent === v)
        for (const _ in u)
          _ === "$ref" || _ === "allOf" || _ in d || delete u[_];
      if (g.$ref && y.def)
        for (const _ in u)
          _ === "$ref" || _ === "allOf" || _ in y.def && JSON.stringify(u[_]) === JSON.stringify(y.def[_]) && delete u[_];
    }
    const f = r._zod.parent;
    if (f && f !== v) {
      n(f);
      const y = e.seen.get(f);
      if (y?.schema.$ref && (u.$ref = y.schema.$ref, y.def))
        for (const g in u)
          g === "$ref" || g === "allOf" || g in y.def && JSON.stringify(u[g]) === JSON.stringify(y.def[g]) && delete u[g];
    }
    e.override({
      zodSchema: r,
      jsonSchema: u,
      path: i.path ?? []
    });
  };
  for (const r of [...e.seen.entries()].reverse())
    n(r[0]);
  const s = {};
  if (e.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const r = e.external.registry.get(t)?.id;
    if (!r)
      throw new Error("Schema is missing an `id` property");
    s.$id = e.external.uri(r);
  }
  Object.assign(s, o.def ?? o.schema);
  const a = e.external?.defs ?? {};
  for (const r of e.seen.entries()) {
    const i = r[1];
    i.def && i.defId && (a[i.defId] = i.def);
  }
  e.external || Object.keys(a).length > 0 && (e.target === "draft-2020-12" ? s.$defs = a : s.definitions = a);
  try {
    const r = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(r, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: Ke(t, "input", e.processors),
          output: Ke(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), r;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function G(e, t) {
  const o = t ?? { seen: /* @__PURE__ */ new Set() };
  if (o.seen.has(e))
    return !1;
  o.seen.add(e);
  const n = e._zod.def;
  if (n.type === "transform")
    return !0;
  if (n.type === "array")
    return G(n.element, o);
  if (n.type === "set")
    return G(n.valueType, o);
  if (n.type === "lazy")
    return G(n.getter(), o);
  if (n.type === "promise" || n.type === "optional" || n.type === "nonoptional" || n.type === "nullable" || n.type === "readonly" || n.type === "default" || n.type === "prefault")
    return G(n.innerType, o);
  if (n.type === "intersection")
    return G(n.left, o) || G(n.right, o);
  if (n.type === "record" || n.type === "map")
    return G(n.keyType, o) || G(n.valueType, o);
  if (n.type === "pipe")
    return G(n.in, o) || G(n.out, o);
  if (n.type === "object") {
    for (const s in n.shape)
      if (G(n.shape[s], o))
        return !0;
    return !1;
  }
  if (n.type === "union") {
    for (const s of n.options)
      if (G(s, o))
        return !0;
    return !1;
  }
  if (n.type === "tuple") {
    for (const s of n.items)
      if (G(s, o))
        return !0;
    return !!(n.rest && G(n.rest, o));
  }
  return !1;
}
const na = (e, t = {}) => (o) => {
  const n = Oo({ ...o, processors: t });
  return q(e, n), Eo(n, e), Bo(n, e);
}, Ke = (e, t, o = {}) => (n) => {
  const { libraryOptions: s, target: a } = n ?? {}, r = Oo({ ...s ?? {}, target: a, io: t, processors: o });
  return q(e, r), Eo(r, e), Bo(r, e);
}, sa = (e, t, o, n) => {
  o.not = {};
}, aa = (e, t, o, n) => {
}, ra = (e, t, o, n) => {
  const s = e._zod.def, a = xo(s.entries);
  a.every((r) => typeof r == "number") && (o.type = "number"), a.every((r) => typeof r == "string") && (o.type = "string"), o.enum = a;
}, ia = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, la = (e, t, o, n) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, ua = (e, t, o, n) => {
  const s = o, a = e._zod.def, { minimum: r, maximum: i } = e._zod.bag;
  typeof r == "number" && (s.minItems = r), typeof i == "number" && (s.maxItems = i), s.type = "array", s.items = q(a.element, t, { ...n, path: [...n.path, "items"] });
}, ca = (e, t, o, n) => {
  const s = o, a = e._zod.def;
  s.type = "object", s.properties = {};
  const r = a.shape;
  for (const d in r)
    s.properties[d] = q(r[d], t, {
      ...n,
      path: [...n.path, "properties", d]
    });
  const i = new Set(Object.keys(r)), u = new Set([...i].filter((d) => {
    const v = a.shape[d]._zod;
    return t.io === "input" ? v.optin === void 0 : v.optout === void 0;
  }));
  u.size > 0 && (s.required = Array.from(u)), a.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : a.catchall ? a.catchall && (s.additionalProperties = q(a.catchall, t, {
    ...n,
    path: [...n.path, "additionalProperties"]
  })) : t.io === "output" && (s.additionalProperties = !1);
}, da = (e, t, o, n) => {
  const s = e._zod.def, a = s.inclusive === !1, r = s.options.map((i, u) => q(i, t, {
    ...n,
    path: [...n.path, a ? "oneOf" : "anyOf", u]
  }));
  a ? o.oneOf = r : o.anyOf = r;
}, pa = (e, t, o, n) => {
  const s = e._zod.def, a = q(s.left, t, {
    ...n,
    path: [...n.path, "allOf", 0]
  }), r = q(s.right, t, {
    ...n,
    path: [...n.path, "allOf", 1]
  }), i = (d) => "allOf" in d && Object.keys(d).length === 1, u = [
    ...i(a) ? a.allOf : [a],
    ...i(r) ? r.allOf : [r]
  ];
  o.allOf = u;
}, fa = (e, t, o, n) => {
  const s = e._zod.def, a = q(s.innerType, t, n), r = t.seen.get(e);
  t.target === "openapi-3.0" ? (r.ref = s.innerType, o.nullable = !0) : o.anyOf = [a, { type: "null" }];
}, ma = (e, t, o, n) => {
  const s = e._zod.def;
  q(s.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = s.innerType;
}, va = (e, t, o, n) => {
  const s = e._zod.def;
  q(s.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = s.innerType, o.default = JSON.parse(JSON.stringify(s.defaultValue));
}, ha = (e, t, o, n) => {
  const s = e._zod.def;
  q(s.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = s.innerType, t.io === "input" && (o._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
}, ya = (e, t, o, n) => {
  const s = e._zod.def;
  q(s.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = s.innerType;
  let r;
  try {
    r = s.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  o.default = r;
}, ba = (e, t, o, n) => {
  const s = e._zod.def, a = t.io === "input" ? s.in._zod.def.type === "transform" ? s.out : s.in : s.out;
  q(a, t, n);
  const r = t.seen.get(e);
  r.ref = a;
}, ga = (e, t, o, n) => {
  const s = e._zod.def;
  q(s.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = s.innerType, o.readOnly = !0;
}, Mo = (e, t, o, n) => {
  const s = e._zod.def;
  q(s.innerType, t, n);
  const a = t.seen.get(e);
  a.ref = s.innerType;
}, _a = (e, t) => {
  To.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (o) => ds(e, o)
      // enumerable: false,
    },
    flatten: {
      value: (o) => cs(e, o)
      // enumerable: false,
    },
    addIssue: {
      value: (o) => {
        e.issues.push(o), e.message = JSON.stringify(e.issues, ft, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (o) => {
        e.issues.push(...o), e.message = JSON.stringify(e.issues, ft, 2);
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
}, ae = z("ZodError", _a, {
  Parent: Error
}), $a = /* @__PURE__ */ Ct(ae), xa = /* @__PURE__ */ Tt(ae), za = /* @__PURE__ */ rt(ae), wa = /* @__PURE__ */ it(ae), Va = /* @__PURE__ */ ms(ae), Ca = /* @__PURE__ */ vs(ae), Ta = /* @__PURE__ */ hs(ae), Ra = /* @__PURE__ */ ys(ae), Sa = /* @__PURE__ */ bs(ae), Ia = /* @__PURE__ */ gs(ae), ka = /* @__PURE__ */ _s(ae), Oa = /* @__PURE__ */ $s(ae), X = /* @__PURE__ */ z("ZodType", (e, t) => (Y.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: Ke(e, "input"),
    output: Ke(e, "output")
  }
}), e.toJSONSchema = na(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...o) => e.clone(pe(t, {
  checks: [
    ...t.checks ?? [],
    ...o.map((n) => typeof n == "function" ? { _zod: { check: n, def: { check: "custom" }, onattach: [] } } : n)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (o, n) => fe(e, o, n), e.brand = () => e, e.register = ((o, n) => (o.add(e, n), e)), e.parse = (o, n) => $a(e, o, n, { callee: e.parse }), e.safeParse = (o, n) => za(e, o, n), e.parseAsync = async (o, n) => xa(e, o, n, { callee: e.parseAsync }), e.safeParseAsync = async (o, n) => wa(e, o, n), e.spa = e.safeParseAsync, e.encode = (o, n) => Va(e, o, n), e.decode = (o, n) => Ca(e, o, n), e.encodeAsync = async (o, n) => Ta(e, o, n), e.decodeAsync = async (o, n) => Ra(e, o, n), e.safeEncode = (o, n) => Sa(e, o, n), e.safeDecode = (o, n) => Ia(e, o, n), e.safeEncodeAsync = async (o, n) => ka(e, o, n), e.safeDecodeAsync = async (o, n) => Oa(e, o, n), e.refine = (o, n) => e.check(ir(o, n)), e.superRefine = (o) => e.check(lr(o)), e.overwrite = (o) => e.check(/* @__PURE__ */ Ws(o)), e.optional = () => Gt(e), e.exactOptional = () => Ja(e), e.nullable = () => Kt(e), e.nullish = () => Gt(Kt(e)), e.nonoptional = (o) => er(e, o), e.array = () => Da(e), e.or = (o) => La([e, o]), e.and = (o) => Za(e, o), e.transform = (o) => Wt(e, Ua(o)), e.default = (o) => Ka(e, o), e.prefault = (o) => Qa(e, o), e.catch = (o) => or(e, o), e.pipe = (o) => Wt(e, o), e.readonly = () => ar(e), e.describe = (o) => {
  const n = e.clone();
  return Oe.add(n, { description: o }), n;
}, Object.defineProperty(e, "description", {
  get() {
    return Oe.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...o) => {
  if (o.length === 0)
    return Oe.get(e);
  const n = e.clone();
  return Oe.add(n, o[0]), n;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (o) => o(e), e)), Ea = /* @__PURE__ */ z("ZodUnknown", (e, t) => {
  Rs.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => aa();
});
function qt() {
  return /* @__PURE__ */ Js(Ea);
}
const Ba = /* @__PURE__ */ z("ZodNever", (e, t) => {
  Ss.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => sa(e, o, n);
});
function Ma(e) {
  return /* @__PURE__ */ qs(Ba, e);
}
const Aa = /* @__PURE__ */ z("ZodArray", (e, t) => {
  Is.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ua(e, o, n, s), e.element = t.element, e.min = (o, n) => e.check(/* @__PURE__ */ Jt(o, n)), e.nonempty = (o) => e.check(/* @__PURE__ */ Jt(1, o)), e.max = (o, n) => e.check(/* @__PURE__ */ Gs(o, n)), e.length = (o, n) => e.check(/* @__PURE__ */ Ks(o, n)), e.unwrap = () => e.element;
});
function Da(e, t) {
  return /* @__PURE__ */ Qs(Aa, e, t);
}
const Pa = /* @__PURE__ */ z("ZodObject", (e, t) => {
  Os.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ca(e, o, n, s), B(e, "shape", () => t.shape), e.keyof = () => Xa(Object.keys(e._zod.def.shape)), e.catchall = (o) => e.clone({ ...e._zod.def, catchall: o }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: qt() }), e.loose = () => e.clone({ ...e._zod.def, catchall: qt() }), e.strict = () => e.clone({ ...e._zod.def, catchall: Ma() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (o) => as(e, o), e.safeExtend = (o) => rs(e, o), e.merge = (o) => is(e, o), e.pick = (o) => ns(e, o), e.omit = (o) => ss(e, o), e.partial = (...o) => ls(Ao, e, o[0]), e.required = (...o) => us(Do, e, o[0]);
});
function Na(e, t) {
  const o = {
    type: "object",
    shape: e ?? {},
    ...oe(t)
  };
  return new Pa(o);
}
const ja = /* @__PURE__ */ z("ZodUnion", (e, t) => {
  Es.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => da(e, o, n, s), e.options = t.options;
});
function La(e, t) {
  return new ja({
    type: "union",
    options: e,
    ...oe(t)
  });
}
const Fa = /* @__PURE__ */ z("ZodIntersection", (e, t) => {
  Bs.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => pa(e, o, n, s);
});
function Za(e, t) {
  return new Fa({
    type: "intersection",
    left: e,
    right: t
  });
}
const vt = /* @__PURE__ */ z("ZodEnum", (e, t) => {
  Ms.init(e, t), X.init(e, t), e._zod.processJSONSchema = (n, s, a) => ra(e, n, s), e.enum = t.entries, e.options = Object.values(t.entries);
  const o = new Set(Object.keys(t.entries));
  e.extract = (n, s) => {
    const a = {};
    for (const r of n)
      if (o.has(r))
        a[r] = t.entries[r];
      else
        throw new Error(`Key ${r} not found in enum`);
    return new vt({
      ...t,
      checks: [],
      ...oe(s),
      entries: a
    });
  }, e.exclude = (n, s) => {
    const a = { ...t.entries };
    for (const r of n)
      if (o.has(r))
        delete a[r];
      else
        throw new Error(`Key ${r} not found in enum`);
    return new vt({
      ...t,
      checks: [],
      ...oe(s),
      entries: a
    });
  };
});
function Xa(e, t) {
  const o = Array.isArray(e) ? Object.fromEntries(e.map((n) => [n, n])) : e;
  return new vt({
    type: "enum",
    entries: o,
    ...oe(t)
  });
}
const Ha = /* @__PURE__ */ z("ZodTransform", (e, t) => {
  As.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => la(e, o), e._zod.parse = (o, n) => {
    if (n.direction === "backward")
      throw new _o(e.constructor.name);
    o.addIssue = (a) => {
      if (typeof a == "string")
        o.issues.push(De(a, o.value, t));
      else {
        const r = a;
        r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = o.value), r.inst ?? (r.inst = e), o.issues.push(De(r));
      }
    };
    const s = t.transform(o.value, o);
    return s instanceof Promise ? s.then((a) => (o.value = a, o)) : (o.value = s, o);
  };
});
function Ua(e) {
  return new Ha({
    type: "transform",
    transform: e
  });
}
const Ao = /* @__PURE__ */ z("ZodOptional", (e, t) => {
  ko.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => Mo(e, o, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Gt(e) {
  return new Ao({
    type: "optional",
    innerType: e
  });
}
const Ya = /* @__PURE__ */ z("ZodExactOptional", (e, t) => {
  Ds.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => Mo(e, o, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Ja(e) {
  return new Ya({
    type: "optional",
    innerType: e
  });
}
const qa = /* @__PURE__ */ z("ZodNullable", (e, t) => {
  Ps.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => fa(e, o, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Kt(e) {
  return new qa({
    type: "nullable",
    innerType: e
  });
}
const Ga = /* @__PURE__ */ z("ZodDefault", (e, t) => {
  Ns.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => va(e, o, n, s), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ka(e, t) {
  return new Ga({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : wo(t);
    }
  });
}
const Wa = /* @__PURE__ */ z("ZodPrefault", (e, t) => {
  js.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ha(e, o, n, s), e.unwrap = () => e._zod.def.innerType;
});
function Qa(e, t) {
  return new Wa({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : wo(t);
    }
  });
}
const Do = /* @__PURE__ */ z("ZodNonOptional", (e, t) => {
  Ls.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ma(e, o, n, s), e.unwrap = () => e._zod.def.innerType;
});
function er(e, t) {
  return new Do({
    type: "nonoptional",
    innerType: e,
    ...oe(t)
  });
}
const tr = /* @__PURE__ */ z("ZodCatch", (e, t) => {
  Fs.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ya(e, o, n, s), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function or(e, t) {
  return new tr({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const nr = /* @__PURE__ */ z("ZodPipe", (e, t) => {
  Zs.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ba(e, o, n, s), e.in = t.in, e.out = t.out;
});
function Wt(e, t) {
  return new nr({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const sr = /* @__PURE__ */ z("ZodReadonly", (e, t) => {
  Xs.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ga(e, o, n, s), e.unwrap = () => e._zod.def.innerType;
});
function ar(e) {
  return new sr({
    type: "readonly",
    innerType: e
  });
}
const rr = /* @__PURE__ */ z("ZodCustom", (e, t) => {
  Hs.init(e, t), X.init(e, t), e._zod.processJSONSchema = (o, n, s) => ia(e, o);
});
function ir(e, t = {}) {
  return /* @__PURE__ */ ea(rr, e, t);
}
function lr(e) {
  return /* @__PURE__ */ ta(e);
}
function ur(e) {
  const t = bt(), { field: o, registerField: n, unregisterField: s } = Kn(), a = p(() => $(e.props)), r = p(() => a.value.name), i = p(() => e.formRootContext?.modelValue.value), u = p(() => e.formRootContext?.props?.rules), d = p(() => r.value && i.value && At(i.value, r.value)), v = p(() => !!(e.formRootContext?.props.disabled || a.value?.disabled)), f = p(() => {
    if (!r.value || !u.value)
      return null;
    const D = At(u.value, r.value);
    return D instanceof X ? D : null;
  }), y = p(() => !!f.value), g = p(() => f.value ? !f.value.safeParse(void 0).success : !1), {
    validationStatus: _,
    validationErrors: w,
    clearValidateErrors: I,
    validate: E
  } = Wn({
    data: () => r.value ? {
      [r.value]: d.value
    } : null,
    schema: () => !r.value || !f.value ? null : Na({
      [r.value]: f.value
    }),
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), k = p(() => ({
    id: t,
    props: a.value,
    validationStatus: _.value,
    isValidatable: y.value,
    isRequired: g.value,
    registerField: n,
    unregisterField: s,
    reset: T,
    validate: E,
    clearValidateErrors: I
  }));
  function T() {
    !d.value || !a.value.name || (o.value?.reset(), I());
  }
  const O = $t(() => E(), 300);
  return tt(() => {
    O.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), te(k, (D) => {
    e.formRootContext?.registerFormItem(D);
  }, {
    deep: !0,
    immediate: !0
  }), te(d, () => O()), te(() => _.value.isSuccess, (D) => {
    D && I();
  }), {
    id: t,
    validationErrors: w,
    validationStatus: _,
    isDisabled: v,
    isRequired: g,
    reset: T,
    validate: E,
    clearValidateErrors: I,
    registerField: n,
    unregisterField: s
  };
}
const cr = /* @__PURE__ */ b({
  __name: "FormRoot",
  props: /* @__PURE__ */ R({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, a = A(e, "modelValue"), {
      isValid: r,
      registerFormItem: i,
      unregisterFormItem: u,
      validate: d,
      clearValidate: v,
      reset: f
    } = Gn({
      modelValue: () => a.value,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    });
    async function y() {
      const g = await d();
      s("submit", {
        isValid: g,
        reset: f
      });
    }
    return H(mo, {
      props: n,
      modelValue: a,
      registerFormItem: i,
      unregisterFormItem: u
    }), t({
      validate: d,
      clearValidate: v,
      reset: f
    }), (g, _) => (c(), m("form", {
      class: V(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: mn(y, ["prevent"])
    }, [
      h(g.$slots, "default", { isValid: l(r) })
    ], 34));
  }
}), dr = {
  key: 0,
  class: "form-item__header"
}, pr = { class: "form-item__body" }, fr = {
  key: 1,
  class: "form-item__footer"
}, mr = /* @__PURE__ */ b({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, a = le(), r = ho(), {
      validationErrors: i,
      validationStatus: u,
      isDisabled: d,
      isRequired: v,
      registerField: f,
      unregisterField: y,
      reset: g,
      validate: _,
      clearValidateErrors: w
    } = ur({
      formRootContext: r,
      props: () => n,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    }), I = de("root"), E = p(() => ({
      validationStatus: u.value,
      isRequired: v.value,
      errors: i.value
    }));
    return H(vo, {
      props: n,
      validationStatus: u,
      validationErrors: i,
      isRequired: v,
      isDisabled: d,
      registerField: f,
      unregisterField: y,
      reset: g,
      validate: _,
      clearValidateErrors: w
    }), t({
      reset: g,
      validate: _,
      clearValidateErrors: w
    }), (k, T) => (c(), m("div", {
      ref_key: "root",
      ref: I,
      class: V(["form-item", [
        {
          "form-item--disabled": l(d),
          "form-item--required": l(v),
          "form-item--invalid": l(u).isError,
          "form-item--validating": l(u).isValidating,
          "form-item--valid": l(u).isSuccess
        }
      ]])
    }, [
      a?.header ? (c(), m("div", dr, [
        h(k.$slots, "header", L(F(E.value)))
      ])) : Z("", !0),
      S("div", pr, [
        h(k.$slots, "default", L(F(E.value)))
      ]),
      a.footer ? (c(), m("div", fr, [
        h(k.$slots, "footer", L(F(E.value)))
      ])) : Z("", !0)
    ], 2));
  }
}), vr = {}, hr = { class: "form-item-title" };
function yr(e, t) {
  return c(), m("div", hr, [
    h(e.$slots, "default")
  ]);
}
const br = /* @__PURE__ */ j(vr, [["render", yr]]), gr = {}, _r = { class: "form-item-required" };
function $r(e, t) {
  return c(), m("span", _r, [
    h(e.$slots, "default", {}, () => [
      t[0] || (t[0] = J(" * ", -1))
    ])
  ]);
}
const xr = /* @__PURE__ */ j(gr, [["render", $r]]), zr = { class: "form-item-errors" }, wr = /* @__PURE__ */ b({
  __name: "FormItemErrors",
  setup(e) {
    const t = yo(), o = p(() => t?.validationErrors.value ?? []);
    return (n, s) => (c(), m("div", zr, [
      (c(!0), m(ee, null, ze(o.value, (a, r) => (c(), m("div", {
        key: `error-${r}`,
        class: "form-item-errors__item"
      }, N(a.message), 1))), 128))
    ]));
  }
}), Ee = {
  Root: cr,
  Item: mr,
  ItemTitle: br,
  ItemRequired: xr,
  ItemErrors: wr
};
function Vr() {
  const e = M([]);
  function t(n) {
    const s = e.value.findIndex((a) => a.id === n.id);
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
function Ve(e, t = !1) {
  return t && Array.isArray(e);
}
function Cr(e) {
  const t = p(() => $(e.multiple)), o = p(() => $(e.modelValue)), n = p(() => $(e.options)), s = p(() => n.value.find((r) => r.props.value === o.value)), a = p(() => {
    if (!Ve(o.value, t.value))
      return [];
    const r = new Set(o.value);
    return n.value.filter((i) => r.has(i.props.value));
  });
  return {
    activeOption: s,
    activeOptions: a
  };
}
function Tr(e) {
  const t = p(() => $(e.modelValue)), o = p(() => $(e.props)), { options: n, registerOption: s, unregisterOption: a } = Vr(), { activeOption: r, activeOptions: i } = Cr({
    multiple: () => !!o.value.multiple,
    options: () => n.value,
    modelValue: () => t.value
  }), [u, d, v] = se(), f = p(() => Ve(t.value, o.value.multiple) ? t.value.length > 0 : !!t.value), y = p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.disabled));
  function g(I) {
    if (!y.value) {
      if (Ve(t.value, o.value.multiple)) {
        const E = /* @__PURE__ */ new Set([...t.value]);
        E.has(I) ? E.delete(I) : E.add(I), e.onChangeModel?.([...E]), e.onChange?.([...E]);
        return;
      }
      e.onChangeModel?.(I), e.onChange?.(I), d(!1);
    }
  }
  function _() {
    if (Ve(t.value, o.value.multiple)) {
      e.onChangeModel?.([]), e.onChange?.([]);
      return;
    }
    e.onChangeModel?.(void 0), e.onChange?.(void 0), e.onClear?.();
  }
  function w() {
    y.value || v();
  }
  return be(() => {
    e.formItemContext?.registerField({
      reset: _
    });
  }), tt(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: r,
    activeOptions: i,
    hasValue: f,
    isOpen: u,
    isDisabled: y,
    toggle: w,
    registerOption: s,
    unregisterOption: a,
    setModelValue: g,
    reset: _
  };
}
function Rr(e) {
  const t = bt(), o = p(() => $(e.selectRootContext?.modelValue)), n = p(() => $(e.props)), s = p(() => !!$(e.selectRootContext?.props)?.multiple), a = p(() => Ve(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), r = p(() => !!($(e.selectRootContext?.isDisabled) || n.value?.disabled)), i = p(() => ({
    id: t,
    props: n.value
  }));
  function u(d) {
    e.selectRootContext?.setModelValue(d);
  }
  return te(i, (d) => {
    e.selectRootContext?.registerOption(d);
  }, {
    deep: !0,
    immediate: !0
  }), tt(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: a,
    isDisabled: r,
    handleChange: u
  };
}
function Sr(e) {
  const t = p(() => $(e.selectRootContext?.props)), o = p(() => $(e.selectRootContext?.activeOption)), n = p(() => $(e.selectRootContext?.activeOptions) ?? []), s = p(() => !!$(e.selectRootContext?.hasValue)), a = p(() => Ve($(e.selectRootContext?.modelValue), !!t.value?.multiple)), r = p(() => t.value?.placeholder);
  return {
    activeOption: o,
    activeOptions: n,
    hasValue: s,
    isMultiple: a,
    placeholder: r
  };
}
const Po = /* @__PURE__ */ Symbol("SelectRootContextKey");
function lt() {
  return K(Po, null);
}
const Ir = /* @__PURE__ */ b({
  __name: "SelectRoot",
  props: /* @__PURE__ */ R({
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
  emits: /* @__PURE__ */ R(["change", "opened", "closed", "open", "close", "clear"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = A(e, "modelValue"), { formRootContext: a, formItemContext: r, isValid: i, isInvalid: u } = re(), {
      activeOption: d,
      activeOptions: v,
      hasValue: f,
      isOpen: y,
      isDisabled: g,
      toggle: _,
      registerOption: w,
      unregisterOption: I,
      setModelValue: E
    } = Tr({
      formRootContext: a,
      formItemContext: r,
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
    return H(Po, {
      activeOption: () => d.value,
      activeOptions: () => v.value,
      modelValue: () => s.value,
      props: () => o,
      hasValue: () => f.value,
      isOpen: () => y.value,
      isDisabled: () => g.value,
      toggle: _,
      registerOption: w,
      unregisterOption: I,
      setModelValue: E
    }), (k, T) => (c(), m("div", {
      class: V(["select", {
        "select--disabled": l(g),
        "select--open": l(y),
        "select--filled": l(f),
        "select--invalid": l(u),
        "select--valid": l(i)
      }])
    }, [
      h(k.$slots, "default")
    ], 2));
  }
}), kr = /* @__PURE__ */ b({
  __name: "SelectOption",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = lt(), { isActive: n, isDisabled: s, handleChange: a } = Rr({
      selectRootContext: o,
      props: () => t
    });
    return (r, i) => (c(), m("div", {
      class: V(["select-option", {
        "select-option--active": l(n),
        "select-option--disabled": l(s)
      }]),
      onClick: i[0] || (i[0] = (u) => l(a)(e.value))
    }, [
      h(r.$slots, "default", {
        isActive: l(n),
        isDisabled: l(s)
      })
    ], 2));
  }
}), Or = /* @__PURE__ */ b({
  __name: "SelectTrigger",
  setup(e) {
    const t = lt();
    function o() {
      t?.toggle();
    }
    return (n, s) => (c(), m("button", {
      type: "button",
      class: "select-trigger",
      onClick: o
    }, [
      h(n.$slots, "default")
    ]));
  }
}), Er = { class: "select-dropdown" }, Br = /* @__PURE__ */ b({
  __name: "SelectDropdown",
  setup(e) {
    const t = lt(), o = p(() => !!$(t?.isOpen));
    return (n, s) => W((c(), m("div", Er, [
      h(n.$slots, "default")
    ], 512)), [
      [ye, o.value]
    ]);
  }
}), Mr = { class: "select-value" }, Ar = /* @__PURE__ */ b({
  __name: "SelectValue",
  setup(e) {
    const t = lt(), { activeOption: o, activeOptions: n, hasValue: s, isMultiple: a, placeholder: r } = Sr({
      selectRootContext: t
    });
    return (i, u) => (c(), m("div", Mr, [
      h(i.$slots, "default", {}, () => [
        l(s) ? (c(), m(ee, { key: 0 }, [
          l(a) ? (c(!0), m(ee, { key: 0 }, ze(l(n), (d) => (c(), m(ee, null, [
            J(N(d.props.value), 1)
          ], 64))), 256)) : (c(), m(ee, { key: 1 }, [
            J(N(l(o)?.props.value), 1)
          ], 64))
        ], 64)) : (c(), m(ee, { key: 1 }, [
          J(N(l(r)), 1)
        ], 64))
      ])
    ]));
  }
}), qp = {
  Root: Ir,
  Option: kr,
  Trigger: Or,
  Dropdown: Br,
  Value: Ar
};
function Dr(e) {
  const t = p(() => $(e.inputRootContext?.props));
  return {
    props: p(() => ({
      disabled: !!$(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function Pr(e) {
  const t = p(() => $(e.inputRootContext?.props));
  return {
    props: p(() => ({
      disabled: !!$(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function Nr(e) {
  const [t, o] = se(), n = p(() => $(e.props)), s = p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.loading || n.value?.disabled)), a = p(() => n.value.type === go.TEXTAREA), r = p(() => !!$(e.modelValue)?.trim());
  function i(d) {
    e.onUpdateModelValue?.(d);
  }
  function u() {
    i("");
  }
  return {
    isFocus: t,
    isDisabled: s,
    isTextarea: a,
    hasValue: r,
    setFocus: o,
    setModelValue: i,
    reset: u
  };
}
function No(e) {
  return {
    modelValue: p({
      get: () => $(e.inputRootContext?.modelValue),
      set(t) {
        e.inputRootContext && e.inputRootContext.setModelValue(t);
      }
    }),
    listeners: {
      click(t) {
        e.inputRootContext?.emit("click", t);
      },
      dblclick(t) {
        e.inputRootContext?.emit("dblclick", t);
      },
      mousedown(t) {
        e.inputRootContext?.emit("mousedown", t);
      },
      mouseup(t) {
        e.inputRootContext?.emit("mouseup", t);
      },
      mouseenter(t) {
        e.inputRootContext?.emit("mouseenter", t);
      },
      mouseleave(t) {
        e.inputRootContext?.emit("mouseleave", t);
      },
      mousemove(t) {
        e.inputRootContext?.emit("mousemove", t);
      },
      mouseover(t) {
        e.inputRootContext?.emit("mouseover", t);
      },
      mouseout(t) {
        e.inputRootContext?.emit("mouseout", t);
      },
      contextmenu(t) {
        e.inputRootContext?.emit("contextmenu", t);
      },
      focusin(t) {
        e.inputRootContext?.setFocus(!0), e.inputRootContext?.emit("focusin", t);
      },
      focusout(t) {
        e.inputRootContext?.setFocus(!1), e.inputRootContext?.emit("focusout", t);
      },
      change(t) {
        e.inputRootContext?.emit("change", t);
      },
      blur(t) {
        e.inputRootContext?.emit("blur", t);
      },
      focus(t) {
        e.inputRootContext?.emit("focus", t);
      },
      keyup(t) {
        e.inputRootContext?.emit("keyup", t);
      },
      keydown(t) {
        e.inputRootContext?.emit("keydown", t);
      },
      keypress(t) {
        e.inputRootContext?.emit("keypress", t);
      },
      paste(t) {
        e.inputRootContext?.emit("paste", t);
      },
      copy(t) {
        e.inputRootContext?.emit("copy", t);
      },
      cut(t) {
        e.inputRootContext?.emit("cut", t);
      }
    }
  };
}
function jr(e) {
  const t = p(() => $(e.inputRootContext?.props)), o = p(() => !!t.value?.clearable);
  function n() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: o,
    handleClear: n
  };
}
const jo = /* @__PURE__ */ Symbol("InputRootContextKey");
function Rt() {
  return K(jo, null);
}
const Lr = /* @__PURE__ */ b({
  __name: "InputRoot",
  props: /* @__PURE__ */ R({
    type: { default: go.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: ke.TEXT },
    inputMode: { default: Un.TEXT },
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
  emits: /* @__PURE__ */ R(["click", "dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "contextmenu", "focusin", "focusout", "change", "blur", "focus", "keyup", "keydown", "keypress", "paste", "copy", "cut"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, a = A(e, "modelValue"), { formRootContext: r, formItemContext: i, isValid: u, isInvalid: d } = re(), { isDisabled: v, isTextarea: f, hasValue: y, isFocus: g, setFocus: _, setModelValue: w, reset: I } = Nr({
      formRootContext: r,
      formItemContext: i,
      modelValue: () => a.value,
      props: () => n,
      onUpdateModelValue: (E) => {
        a.value = E;
      }
    });
    return H(jo, {
      isDisabled: () => v.value,
      props: () => n,
      modelValue: () => a.value,
      setFocus: _,
      setModelValue: w,
      reset: I,
      emit: s
    }), t({
      setFocus: _
    }), (E, k) => (c(), m("div", {
      class: V(["input", {
        "input--focus": l(g),
        "input--textarea": l(f),
        "input--filled": l(y),
        "input--disabled": l(v),
        "input--loading": e.loading,
        "input--invalid": l(d),
        "input--valid": l(u)
      }])
    }, [
      h(E.$slots, "default", {
        isTextarea: l(f),
        isFocus: l(g),
        hasValue: l(y),
        loading: !!e.loading,
        isInvalid: l(d),
        isValid: l(u)
      })
    ], 2));
  }
}), Fr = {}, Zr = { class: "input-before" };
function Xr(e, t) {
  return c(), m("div", Zr, [
    h(e.$slots, "default")
  ]);
}
const Hr = /* @__PURE__ */ j(Fr, [["render", Xr]]), Ur = { class: "input-after" }, Yr = /* @__PURE__ */ b({
  __name: "InputAfter",
  setup(e) {
    const t = Rt(), { isClearable: o, handleClear: n } = jr({
      inputRootContext: t
    });
    return (s, a) => (c(), m("div", Ur, [
      h(s.$slots, "default"),
      l(o) ? (c(), m("button", {
        key: 0,
        type: "button",
        onClick: a[0] || (a[0] = //@ts-ignore
        (...r) => l(n) && l(n)(...r))
      }, " × ")) : Z("", !0)
    ]));
  }
}), Jr = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], qr = /* @__PURE__ */ b({
  __name: "InputNative",
  setup(e) {
    const t = Rt(), { modelValue: o, listeners: n } = No({
      inputRootContext: t
    }), { props: s } = Pr({
      inputRootContext: t
    });
    return (a, r) => W((c(), m("input", U({
      "onUpdate:modelValue": r[0] || (r[0] = (i) => et(o) ? o.value = i : null),
      type: l(s).nativeType,
      inputmode: l(s).inputMode,
      readonly: l(s).readonly,
      disabled: l(s).disabled,
      autocomplete: l(s).autocomplete,
      placeholder: l(s).placeholder,
      class: "input-native"
    }, ue(l(n), !0)), null, 16, Jr)), [
      [vn, l(o)]
    ]);
  }
}), Gr = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Kr = /* @__PURE__ */ b({
  __name: "InputTextarea",
  setup(e) {
    const t = Rt(), { modelValue: o, listeners: n } = No({
      inputRootContext: t
    }), { props: s } = Dr({
      inputRootContext: t
    });
    return (a, r) => W((c(), m("textarea", U({
      "onUpdate:modelValue": r[0] || (r[0] = (i) => et(o) ? o.value = i : null),
      readonly: l(s).readonly,
      disabled: l(s).disabled,
      autocomplete: l(s).autocomplete,
      rows: l(s).rows,
      cols: l(s).cols,
      placeholder: l(s).placeholder,
      class: "input-textarea"
    }, ue(l(n), !0)), null, 16, Gr)), [
      [ao, l(o)]
    ]);
  }
}), Wr = {}, Qr = { class: "input-control" };
function ei(e, t) {
  return c(), m("div", Qr, [
    h(e.$slots, "default")
  ]);
}
const ti = /* @__PURE__ */ j(Wr, [["render", ei]]), oi = {}, ni = { class: "input-group" };
function si(e, t) {
  return c(), m("div", ni, [
    h(e.$slots, "default")
  ]);
}
const ai = /* @__PURE__ */ j(oi, [["render", si]]), ri = {}, ii = { class: "input-group-addon" };
function li(e, t) {
  return c(), m("div", ii, [
    h(e.$slots, "default")
  ]);
}
const ui = /* @__PURE__ */ j(ri, [["render", li]]), Q = {
  Root: Lr,
  Before: Hr,
  After: Yr,
  Native: qr,
  Textarea: Kr,
  Control: ti,
  Group: ai,
  GroupAddon: ui
}, Lo = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function ci() {
  return K(Lo, null);
}
function di(e) {
  const t = p(() => $(e.props)), o = p(() => $(e.modelValue)), n = p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = p(() => Yn(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), a = p(() => !!(s.value || t.value?.checked)), r = p(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: a,
    isIndeterminate: r
  };
}
function pi(e) {
  const t = p(() => !!$(e.checkboxRootContext?.isDisabled)), o = p(() => !!$(e.checkboxRootContext?.isActive)), n = p(() => !!$(e.checkboxRootContext?.isIndeterminate)), s = p(() => !!$(e.checkboxRootContext?.isValid)), a = p(() => !!$(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: a
  };
}
const fi = ["value", "disabled", "checked"], mi = /* @__PURE__ */ b({
  __name: "CheckboxRoot",
  props: /* @__PURE__ */ R({
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
  emits: /* @__PURE__ */ R(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = A(e, "modelValue"), { formRootContext: a, formItemContext: r, isValid: i, isInvalid: u } = re(), { isChecked: d, isDisabled: v, isIndeterminate: f } = di({
      formRootContext: a,
      formItemContext: r,
      props: () => o,
      modelValue: () => s.value
    }), y = de("inputRef");
    return te([y, f], ([g, _]) => {
      g && (g.indeterminate = !!_);
    }, {
      immediate: !0
    }), H(Lo, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => d.value,
      isDisabled: () => v.value,
      isIndeterminate: () => f.value,
      isValid: () => i.value,
      isInvalid: () => u.value
    }), (g, _) => (c(), m("label", {
      class: V(["checkbox", {
        "checkbox--disabled": l(v),
        "checkbox--active": l(d),
        "checkbox--indeterminate": l(f),
        "checkbox--invalid": l(u),
        "checkbox--valid": l(i)
      }])
    }, [
      W(S("input", U({
        ref_key: "inputRef",
        ref: y,
        "onUpdate:modelValue": _[0] || (_[0] = (w) => s.value = w),
        value: e.value,
        type: "checkbox",
        disabled: l(v),
        checked: l(d),
        class: "checkbox__input"
      }, ue(n, !0)), null, 16, fi), [
        [ro, s.value]
      ]),
      h(g.$slots, "default")
    ], 2));
  }
}), vi = /* @__PURE__ */ b({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = ci(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: a, isInvalid: r } = pi({
      checkboxRootContext: t
    });
    return (i, u) => (c(), m("span", {
      class: V(["checkbox-indicator", {
        "checkbox-indicator--disabled": l(o),
        "checkbox-indicator--active": l(n),
        "checkbox-indicator--indeterminate": l(s),
        "checkbox-indicator--valid": l(a),
        "checkbox-indicator--invalid": l(r)
      }])
    }, [
      h(i.$slots, "default", {
        isDisabled: l(o),
        isActive: l(n),
        isIndeterminate: l(s),
        isValid: l(a),
        isInvalid: l(r)
      }, () => [
        J(N(l(n) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), hi = {}, yi = { class: "checkbox-title" };
function bi(e, t) {
  return c(), m("span", yi, [
    h(e.$slots, "default")
  ]);
}
const gi = /* @__PURE__ */ j(hi, [["render", bi]]), _i = /* @__PURE__ */ b({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), Xe = {
  Root: mi,
  Indicator: vi,
  Title: gi,
  Group: _i
};
function $i(e) {
  const t = p(() => $(e.props)), o = p(() => $(e.modelValue)), n = p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: p(() => o.value === t.value.value),
    isDisabled: n
  };
}
function xi(e) {
  const t = p(() => !!$(e.radioRootContext?.isDisabled)), o = p(() => !!$(e.radioRootContext?.isActive)), n = p(() => !!$(e.radioRootContext?.isValid)), s = p(() => !!$(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Fo = /* @__PURE__ */ Symbol("RadioRootContextKey");
function zi() {
  return K(Fo, null);
}
const wi = ["value", "disabled"], Vi = /* @__PURE__ */ b({
  __name: "RadioRoot",
  props: /* @__PURE__ */ R({
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
  emits: /* @__PURE__ */ R(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = A(e, "modelValue"), { formRootContext: a, formItemContext: r, isValid: i, isInvalid: u } = re(), { isActive: d, isDisabled: v } = $i({
      formRootContext: a,
      formItemContext: r,
      props: () => o,
      modelValue: () => s.value
    });
    return H(Fo, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => d.value,
      isDisabled: () => v.value,
      isValid: () => i.value,
      isInvalid: () => u.value
    }), (f, y) => (c(), m("label", {
      class: V(["radio", {
        "radio--disabled": l(v),
        "radio--active": l(d),
        "radio--invalid": l(u),
        "radio--valid": l(i)
      }])
    }, [
      W(S("input", U({
        "onUpdate:modelValue": y[0] || (y[0] = (g) => s.value = g),
        value: e.value,
        type: "radio",
        disabled: l(v),
        class: "radio__input"
      }, ue(n, !0)), null, 16, wi), [
        [hn, s.value]
      ]),
      h(f.$slots, "default")
    ], 2));
  }
}), Ci = /* @__PURE__ */ b({
  __name: "RadioIndicator",
  setup(e) {
    const t = zi(), { isDisabled: o, isActive: n, isValid: s, isInvalid: a } = xi({
      radioRootContext: t
    });
    return (r, i) => (c(), m("span", {
      class: V(["radio-indicator", {
        "radio-indicator--disabled": l(o),
        "radio-indicator--active": l(n),
        "radio-indicator--valid": l(s),
        "radio-indicator--invalid": l(a)
      }])
    }, [
      h(r.$slots, "default", {
        isDisabled: l(o),
        isActive: l(n),
        isValid: l(s),
        isInvalid: l(a)
      }, () => [
        J(N(l(n) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), Ti = {}, Ri = { class: "radio-title" };
function Si(e, t) {
  return c(), m("span", Ri, [
    h(e.$slots, "default")
  ]);
}
const Ii = /* @__PURE__ */ j(Ti, [["render", Si]]), ki = /* @__PURE__ */ b({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), He = {
  Root: Vi,
  Indicator: Ci,
  Title: Ii,
  Group: ki
};
function Oi(e) {
  const t = p(() => $(e.props)), o = p(() => $(e.modelValue)), n = p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function Ei(e) {
  const t = p(() => !!$(e.switchRootContext?.isDisabled)), o = p(() => !!$(e.switchRootContext?.isActive)), n = p(() => !!$(e.switchRootContext?.isValid)), s = p(() => !!$(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Zo = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function Bi() {
  return K(Zo, null);
}
const Mi = { class: "switch" }, Ai = ["disabled"], Di = /* @__PURE__ */ b({
  __name: "SwitchRoot",
  props: /* @__PURE__ */ R({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = A(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: a, isInvalid: r } = re(), { isDisabled: i, isActive: u } = Oi({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value
    });
    return H(Zo, {
      props: () => t,
      isActive: () => u.value,
      isDisabled: () => i.value,
      isValid: () => a.value,
      isInvalid: () => r.value
    }), (d, v) => (c(), m("label", Mi, [
      W(S("input", {
        "onUpdate:modelValue": v[0] || (v[0] = (f) => o.value = f),
        type: "checkbox",
        disabled: l(i),
        class: "switch__input"
      }, null, 8, Ai), [
        [ro, o.value]
      ]),
      h(d.$slots, "default")
    ]));
  }
}), Pi = /* @__PURE__ */ b({
  __name: "SwitchIndicator",
  setup(e) {
    const t = Bi(), { isDisabled: o, isActive: n, isValid: s, isInvalid: a } = Ei({
      switchRootContext: t
    });
    return (r, i) => (c(), m("span", {
      class: V(["switch-indicator", {
        "switch-indicator--disabled": l(o),
        "switch-indicator--active": l(n),
        "switch-indicator--valid": l(s),
        "switch-indicator--invalid": l(a)
      }])
    }, null, 2));
  }
}), Ni = {}, ji = { class: "switch-title" };
function Li(e, t) {
  return c(), m("span", ji, [
    h(e.$slots, "default")
  ]);
}
const Fi = /* @__PURE__ */ j(Ni, [["render", Li]]), pt = {
  Root: Di,
  Indicator: Pi,
  Title: Fi
}, Xo = 1, Zi = -1 / 0, Xi = 1 / 0, Hi = 100, St = 0, We = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Ui(e) {
  const t = p(() => $(e.props)), o = p(() => $(e.modelValue)), n = p(() => t.value.step || Xo), s = p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), a = p(() => s.value || ne(t.value.min) && o.value === t.value.min), r = p(() => s.value || ne(t.value.max) && !(o.value < t.value.max));
  function i() {
    if (t.value.readonly)
      return;
    const v = o.value - n.value;
    (!ne(t.value.min) || v >= t.value.min) && e.onDecrement?.(v);
  }
  function u() {
    if (t.value.readonly)
      return;
    const v = o.value + n.value;
    (!ne(t.value.max) || v <= t.value.max) && e.onIncrement?.(v);
  }
  function d(v) {
    e.onUpdateModelValue?.(v);
  }
  return {
    step: n,
    isDisabled: s,
    isDecrementDisabled: a,
    isIncrementDisabled: r,
    handleDecrement: i,
    handleIncrement: u,
    setModelValue: d
  };
}
function Yi(e) {
  const t = p(() => $(e.mousewheel)), o = p(() => ne(t.value) && t.value > 0 ? t.value : Hi);
  return {
    handleWheel: _t((n) => {
      t.value && (n.preventDefault(), n.stopImmediatePropagation(), n.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function Ji(e) {
  const t = p(() => $(e.inputNumberRootContext?.props)), o = p({
    get: () => $(e.inputNumberRootContext?.modelValue) ?? St,
    set(n) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(n);
    }
  });
  return {
    props: p(() => ({
      step: $(e.inputNumberRootContext?.step),
      disabled: $(e.inputNumberRootContext?.isDisabled),
      min: t.value?.min,
      max: t.value?.max,
      readonly: t.value?.readonly,
      placeholder: t.value?.placeholder,
      autocomplete: t.value?.autocomplete
    })),
    modelValue: o
  };
}
function qi(e) {
  const t = p(() => $(e.props)), o = p(() => t.value.action === We.DECREMENT), n = p(() => t.value.action === We.INCREMENT), s = p(() => o.value ? !!$(e.inputNumberRootContext?.isDecrementDisabled) : !!$(e.inputNumberRootContext?.isIncrementDisabled));
  function a() {
    o.value ? e.inputNumberRootContext?.handleDecrement() : n.value && e.inputNumberRootContext?.handleIncrement();
  }
  return {
    handleAction: a,
    isDisabled: s,
    isDecrement: o,
    isIncrement: n
  };
}
const Ho = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function Uo() {
  return K(Ho, null);
}
const Gi = /* @__PURE__ */ b({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ R({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Zi },
    max: { default: Xi },
    step: { default: Xo },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    direction: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      default: St
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = A(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: a, isInvalid: r } = re(), {
      step: i,
      isDisabled: u,
      isDecrementDisabled: d,
      isIncrementDisabled: v,
      handleDecrement: f,
      handleIncrement: y,
      setModelValue: g
    } = Ui({
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
    return H(Ho, {
      props: () => t,
      isDisabled: () => u.value,
      modelValue: () => o.value,
      step: () => i.value,
      isDecrementDisabled: () => d.value,
      isIncrementDisabled: () => v.value,
      handleDecrement: f,
      handleIncrement: y,
      setModelValue: g
    }), (_, w) => (c(), m("div", {
      class: V(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": l(r),
        "input-number--valid": l(a)
      }])
    }, [
      h(_.$slots, "default")
    ], 2));
  }
}), Ki = { class: "input-number-input" }, Wi = /* @__PURE__ */ b({
  __name: "InputNumberInput",
  setup(e) {
    const t = Uo(), { props: o, modelValue: n } = Ji({
      inputNumberRootContext: t
    }), { handleWheel: s } = Yi({
      mousewheel: () => $(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (a, r) => (c(), m("div", Ki, [
      W(S("input", U({
        "onUpdate:modelValue": r[0] || (r[0] = (i) => et(n) ? n.value = i : null),
        type: "number",
        class: "input-number-input__native"
      }, l(o), {
        onWheel: r[1] || (r[1] = //@ts-ignore
        (...i) => l(s) && l(s)(...i))
      }), null, 16), [
        [
          ao,
          l(n),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), Qi = ["disabled"], el = /* @__PURE__ */ b({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = Uo(), { handleAction: n, isDisabled: s, isDecrement: a, isIncrement: r } = qi({
      inputNumberRootContext: o,
      props: () => t
    });
    return (i, u) => (c(), m("button", {
      class: V(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: l(s),
      type: "button",
      onClick: u[0] || (u[0] = //@ts-ignore
      (...d) => l(n) && l(n)(...d))
    }, [
      h(i.$slots, "default", {}, () => [
        l(a) ? (c(), m(ee, { key: 0 }, [
          J(" - ")
        ], 64)) : l(r) ? (c(), m(ee, { key: 1 }, [
          J(" + ")
        ], 64)) : Z("", !0)
      ])
    ], 10, Qi));
  }
}), Ze = {
  Root: Gi,
  Input: Wi,
  Button: el
};
function tl() {
  const e = M(ke.PASSWORD);
  function t() {
    e.value === ke.PASSWORD ? e.value = ke.TEXT : e.value = ke.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const ol = /* @__PURE__ */ b({
  __name: "InputPasswordRoot",
  props: /* @__PURE__ */ R({
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
    const t = e, o = le(), n = A(e, "modelValue"), { currentType: s, handleToggleType: a } = tl();
    return (r, i) => (c(), C(l(Q).Root, U(t, {
      modelValue: n.value,
      "onUpdate:modelValue": i[1] || (i[1] = (u) => n.value = u),
      "native-type": l(s)
    }), {
      default: x((u) => [
        o?.before ? (c(), C(l(Q).Before, { key: 0 }, {
          default: x(() => [
            h(r.$slots, "before", L(F(u)))
          ]),
          _: 2
        }, 1024)) : Z("", !0),
        P(l(Q).Control, null, {
          default: x(() => [
            P(l(Q).Native)
          ]),
          _: 1
        }),
        P(l(Q).After, null, {
          default: x(() => [
            h(r.$slots, "after", L(F(u)), () => [
              S("button", {
                type: "button",
                onClick: i[0] || (i[0] = //@ts-ignore
                (...d) => l(a) && l(a)(...d))
              }, " 👁 ")
            ])
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16, ["modelValue", "native-type"]));
  }
}), nl = {
  Root: ol
};
function sl(e) {
  const t = p(() => $(e.props));
  return {
    isDisabled: p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function al(e) {
  return {
    isDisabled: p(() => {
      const t = e.inputCodeRootContext;
      return t ? !!$(t.isDisabled) : !1;
    })
  };
}
const Yo = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function rl() {
  return K(Yo, null);
}
const il = /* @__PURE__ */ b({
  __name: "InputCodeRoot",
  props: /* @__PURE__ */ R({
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
    A(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: a } = re(), { isDisabled: r } = sl({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return H(Yo, {
      props: () => t,
      isDisabled: () => r.value
    }), (i, u) => (c(), m("div", {
      class: V(["input-code", {
        "input-code--disabled": l(r),
        "input-code--invalid": l(a),
        "input-code--valid": l(s)
      }])
    }, [
      h(i.$slots, "default")
    ], 2));
  }
}), ll = ["disabled", "aria-disabled"], ul = /* @__PURE__ */ b({
  __name: "InputCodePin",
  setup(e) {
    const t = rl(), { isDisabled: o } = al({
      inputCodeRootContext: t
    });
    return (n, s) => (c(), m("input", {
      type: "text",
      disabled: l(o),
      "aria-disabled": l(o),
      class: "input-code-pin"
    }, null, 8, ll));
  }
}), Qt = {
  Root: il,
  Pin: ul
}, Jo = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function qo() {
  return K(Jo, null);
}
function cl(e) {
  const t = p(() => $(e.props));
  return {
    isDisabled: p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function dl(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const pl = /* @__PURE__ */ b({
  __name: "InputTagsRoot",
  props: /* @__PURE__ */ R({
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
  emits: /* @__PURE__ */ R(["addTag", "removeTag"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = A(e, "modelValue"), { formRootContext: s, formItemContext: a, isValid: r, isInvalid: i } = re(), { isDisabled: u } = cl({
      formRootContext: s,
      formItemContext: a,
      props: () => o
    });
    return H(Jo, {
      props: () => o,
      modelValue: () => n.value,
      isDisabled: () => u.value
    }), (d, v) => (c(), m("div", {
      class: V(["input-tags", {
        "input-tags--disabled": l(u),
        "input-tags--invalid": l(i),
        "input-tags--valid": l(r)
      }])
    }, [
      h(d.$slots, "default")
    ], 2));
  }
}), fl = { class: "input-tags-input" }, ml = /* @__PURE__ */ b({
  __name: "InputTagsInput",
  setup(e) {
    qo();
    const { handleEnter: t, handleTab: o } = dl();
    return (n, s) => (c(), m("div", fl, [
      S("input", {
        type: "text",
        onKeydown: [
          s[0] || (s[0] = Et(
            //@ts-ignore
            (...a) => l(t) && l(t)(...a),
            ["enter"]
          )),
          s[1] || (s[1] = Et(
            //@ts-ignore
            (...a) => l(o) && l(o)(...a),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), vl = { class: "input-tags-tags" }, hl = /* @__PURE__ */ b({
  __name: "InputTagsTags",
  setup(e) {
    return qo(), (t, o) => (c(), m("div", vl));
  }
}), Gp = {
  Root: pl,
  Input: ml,
  Tags: hl
};
function yl(e) {
  const t = p(() => $(e.props));
  return {
    isDisabled: p(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function bl(e) {
  return {
    isDisabled: p(() => !!$(e.inputRangeRootContext?.isDisabled))
  };
}
const Go = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function gl() {
  return K(Go, null);
}
const _l = /* @__PURE__ */ b({
  __name: "InputRangeRoot",
  props: /* @__PURE__ */ R({
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
    A(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: a } = re(), { isDisabled: r } = yl({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return H(Go, {
      props: () => t,
      isDisabled: () => r.value
    }), (i, u) => (c(), m("div", {
      class: V(["input-range", {
        "input-range--disabled": l(r),
        "input-range--invalid": l(a),
        "input-range--valid": l(s)
      }])
    }, [
      h(i.$slots, "default")
    ], 2));
  }
}), $l = ["aria-disabled"], xl = /* @__PURE__ */ b({
  __name: "InputRangeSlider",
  setup(e) {
    const t = gl(), { isDisabled: o } = bl({
      inputRangeRootContext: t
    });
    return (n, s) => (c(), m("div", {
      class: "input-range-slider",
      "aria-disabled": l(o)
    }, null, 8, $l));
  }
}), Kp = {
  Root: _l,
  Slider: xl
}, zl = /* @__PURE__ */ Symbol("ModalRootContextKey");
function wl(e) {
  function t() {
    e.onClose?.();
  }
  return {
    close: t
  };
}
const Vl = { class: "modal" }, Cl = /* @__PURE__ */ b({
  __name: "ModalRoot",
  props: /* @__PURE__ */ R({
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = A(e, "modelValue"), { close: s } = wl({
      modelValue: () => n.value,
      props: () => o,
      onClose: () => {
        n.value = !1;
      }
    });
    return H(zl, {
      close: s
    }), (a, r) => (c(), m("div", Vl, [
      h(a.$slots, "default")
    ]));
  }
}), Tl = {};
function Rl(e, t) {
  return c(), m("div", null, [
    h(e.$slots, "default")
  ]);
}
const Sl = /* @__PURE__ */ j(Tl, [["render", Rl]]), Il = {};
function kl(e, t) {
  return c(), m("div");
}
const Ol = /* @__PURE__ */ j(Il, [["render", kl]]), El = {}, Bl = { class: "modal-header" };
function Ml(e, t) {
  return c(), m("div", Bl, [
    h(e.$slots, "default")
  ]);
}
const Al = /* @__PURE__ */ j(El, [["render", Ml]]), Dl = {}, Pl = { class: "modal-footer" };
function Nl(e, t) {
  return c(), m("div", Pl, [
    h(e.$slots, "default")
  ]);
}
const jl = /* @__PURE__ */ j(Dl, [["render", Nl]]), Ll = {};
function Fl(e, t) {
  return c(), m("div");
}
const Zl = /* @__PURE__ */ j(Ll, [["render", Fl]]), Xl = {}, Hl = { class: "modal-content" };
function Ul(e, t) {
  return c(), m("div", Hl, [
    h(e.$slots, "default")
  ]);
}
const Yl = /* @__PURE__ */ j(Xl, [["render", Ul]]), Wp = {
  Root: Cl,
  Body: Sl,
  Close: Ol,
  Header: Al,
  Footer: jl,
  Title: Zl,
  Content: Yl
};
function Jl(e) {
  const t = p(() => $(e.props));
  function o() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: o
  };
}
const ql = /* @__PURE__ */ b({
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
      onDelete(a) {
        n("delete", a);
      }
    });
    return (a, r) => (c(), m("div", {
      class: V(["tag", {
        [`tag--size-${e.size}`]: e.size,
        [`tag--theme-${e.theme}`]: e.theme
      }])
    }, [
      h(a.$slots, "default"),
      e.canDelete ? (c(), m("button", {
        key: 0,
        type: "button",
        onClick: r[0] || (r[0] = //@ts-ignore
        (...i) => l(s) && l(s)(...i))
      }, " X ")) : Z("", !0)
    ], 2));
  }
}), Gl = /* @__PURE__ */ b({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), Ko = {
  Root: ql,
  Group: Gl
}, Wo = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey");
function Qp() {
  return K(Wo, {
    props: () => ({}),
    t: () => ""
  });
}
function Kl(e) {
  const t = p(() => $(e.props));
  function o(n) {
    if (!t.value?.locale)
      return "";
    const s = n.split(".");
    let a = t.value.locale;
    for (const r of s) {
      if (Ce(a) || at(a) || Me(a))
        return n;
      a = a[r];
    }
    return Me(a) ? a : n;
  }
  return {
    t: o
  };
}
const Wl = /* @__PURE__ */ b({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = Kl({
      props: () => t
    });
    return H(Wo, {
      props: () => t,
      t: o
    }), (n, s) => h(n.$slots, "default");
  }
}), Ql = {
  Root: Wl
}, Qo = 300, en = 1, tn = 10;
function eo(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function to(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function oo(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function no(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function eu(e) {
  const t = p(() => $(e.props)), o = p(() => t.value?.infiniteScrollOffset ?? tn), n = p(() => t.value?.draggableMultiplier ?? en), s = p(() => ne(t.value?.debounceDelay) ? t.value.debounceDelay : Qo), [a, r] = se(), [i, u] = se(), d = M(0), v = M(0), f = M(0), y = M(0);
  function g() {
    u(!1), r(!1);
  }
  const _ = $t((T) => {
    e.onScroll?.(T), t.value?.draggable || (f.value = eo(e.scrollbar.value, !!t.value?.vertical), y.value = to(e.scrollbar.value, !!t.value?.horizontal));
    const O = e.scrollbar.value, D = e.content.value, ce = O ? O.clientHeight : 0, me = O ? O.clientWidth : 0, Re = D ? D.scrollWidth : 0, _e = D ? D.scrollHeight : 0, Pe = f.value + ce, ct = y.value + me, Ne = !!(t.value?.vertical && _e - Pe <= o.value), ie = !!(t.value?.horizontal && Re - ct <= o.value);
    Ne && e.onScrollEndY?.(), ie && e.onScrollEndX?.();
  }, s.value), w = _t((T) => {
    if (e.onMousemove?.(T), !t.value?.draggable || !i.value)
      return;
    T.preventDefault(), T.stopPropagation();
    const O = e.scrollbar.value;
    if (!O)
      return;
    const D = !!t.value?.vertical, ce = !!t.value?.horizontal, me = T.pageY - oo(O, D), Re = (T.pageX - no(O, ce) - d.value) * n.value, _e = (me - v.value) * n.value;
    ce && (O.scrollLeft = y.value - Re), D && (O.scrollTop = f.value - _e);
  }, s.value);
  function I(T) {
    if (e.onMousedown?.(T), !t.value?.draggable)
      return;
    u(!0), r(!0);
    const O = e.scrollbar.value;
    if (O) {
      const D = !!t.value?.vertical, ce = !!t.value?.horizontal;
      v.value = T.pageY - oo(O, D), d.value = T.pageX - no(O, ce);
    }
    f.value = eo(e.scrollbar.value, !!t.value?.vertical), y.value = to(e.scrollbar.value, !!t.value?.horizontal);
  }
  function E(T) {
    e.onMouseleave?.(T), t.value?.draggable && g();
  }
  function k(T) {
    e.onMouseup?.(T), t.value?.draggable && g();
  }
  return yt(() => {
    _.cancel?.(), w.cancel?.();
  }), {
    isGrabbing: a,
    handleScroll: _,
    handleMousedown: I,
    handleMouseleave: E,
    handleMouseup: k,
    handleMousemove: w
  };
}
const tu = /* @__PURE__ */ b({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: en },
    infiniteScrollOffset: { default: tn },
    debounceDelay: { default: Qo },
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const o = e, n = t, s = de("scrollbar"), a = de("content"), {
      isGrabbing: r,
      handleScroll: i,
      handleMousedown: u,
      handleMouseleave: d,
      handleMouseup: v,
      handleMousemove: f
    } = eu({
      props: () => o,
      scrollbar: s,
      content: a,
      onScroll: (y) => n("scroll", y),
      onMousedown: (y) => n("mousedown", y),
      onMouseleave: (y) => n("mouseleave", y),
      onMouseup: (y) => n("mouseup", y),
      onMousemove: (y) => n("mousemove", y),
      onScrollEndY: () => n("scrollEndY"),
      onScrollEndX: () => n("scrollEndX")
    });
    return (y, g) => (c(), m("div", {
      ref_key: "scrollbar",
      ref: s,
      class: V(["scrollbar", {
        "scrollbar--hidden": e.hidden,
        "scrollbar--draggable": e.draggable,
        "scrollbar--vertical": e.vertical,
        "scrollbar--horizontal": e.horizontal,
        "scrollbar--grabbing": l(r),
        [`scrollbar--size-${e.size}`]: e.size,
        [`scrollbar--theme-${e.theme}`]: e.theme
      }]),
      onScroll: g[0] || (g[0] = //@ts-ignore
      (..._) => l(i) && l(i)(..._)),
      onMousedown: g[1] || (g[1] = //@ts-ignore
      (..._) => l(u) && l(u)(..._)),
      onMouseleave: g[2] || (g[2] = //@ts-ignore
      (..._) => l(d) && l(d)(..._)),
      onMouseup: g[3] || (g[3] = //@ts-ignore
      (..._) => l(v) && l(v)(..._)),
      onMousemove: g[4] || (g[4] = //@ts-ignore
      (..._) => l(f) && l(f)(..._))
    }, [
      S("div", {
        ref_key: "content",
        ref: a,
        class: "scrollbar__content"
      }, [
        h(y.$slots, "default")
      ], 512)
    ], 34));
  }
}), ou = {
  Root: tu
}, nu = /* @__PURE__ */ b({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), su = /* @__PURE__ */ b({
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
    return (t, o) => (c(), m("div", {
      class: V(["col", {
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
      h(t.$slots, "default")
    ], 2));
  }
}), au = /* @__PURE__ */ b({
  __name: "Row",
  props: {
    guttersX: { type: Boolean, default: !0 },
    guttersY: { type: Boolean },
    align: {},
    justify: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["row", {
        [`row--justify-${e.justify}`]: e.justify,
        [`row--align-${e.align}`]: e.align,
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), It = {
  Container: nu,
  Row: au,
  Col: su
}, ru = { class: "section" }, iu = /* @__PURE__ */ b({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (c(), m("section", ru, [
      h(t.$slots, "default")
    ]));
  }
}), lu = {}, uu = { class: "section-header" };
function cu(e, t) {
  return c(), m("header", uu, [
    h(e.$slots, "default")
  ]);
}
const du = /* @__PURE__ */ j(lu, [["render", cu]]), pu = {}, fu = { class: "section-title" };
function mu(e, t) {
  return c(), m("h1", fu, [
    h(e.$slots, "default")
  ]);
}
const vu = /* @__PURE__ */ j(pu, [["render", mu]]), hu = {}, yu = { class: "section-footer" };
function bu(e, t) {
  return c(), m("footer", yu, [
    h(e.$slots, "default")
  ]);
}
const gu = /* @__PURE__ */ j(hu, [["render", bu]]), _u = {}, $u = { class: "section-body" };
function xu(e, t) {
  return c(), m("div", $u, [
    h(e.$slots, "default")
  ]);
}
const zu = /* @__PURE__ */ j(_u, [["render", xu]]), ef = {
  Root: iu,
  Header: du,
  Title: vu,
  Footer: gu,
  Body: zu
}, wu = { class: "layout" }, Vu = /* @__PURE__ */ b({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (c(), m("div", wu, [
      h(t.$slots, "header"),
      h(t.$slots, "default"),
      h(t.$slots, "footer")
    ]));
  }
}), Cu = {}, Tu = { class: "layout-body" };
function Ru(e, t) {
  return c(), m("main", Tu, [
    h(e.$slots, "default")
  ]);
}
const Su = /* @__PURE__ */ j(Cu, [["render", Ru]]), tf = {
  Root: Vu,
  Body: Su
}, of = {}, Iu = /* @__PURE__ */ b({
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
    return (o, n) => (c(), C(l(bo).Root, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ku = /* @__PURE__ */ b({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (c(), C(l(bo).Group, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ou = {
  install(e) {
    e.component("VButton", Iu);
  }
}, nf = {
  install(e) {
    e.component("VButtonGroup", ku);
  }
}, Eu = /* @__PURE__ */ b({
  __name: "VAccordion",
  props: /* @__PURE__ */ R({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = A(e, "modelValue");
    return (a, r) => (c(), C(l($e).Root, U(o, {
      modelValue: s.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => s.value = i)
    }, ue(n)), {
      default: x(() => [
        h(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Bu = /* @__PURE__ */ b({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = io(e, ["title"]);
    return (o, n) => (c(), C(l($e).Item, L(F(t)), {
      default: x(({ isActive: s }) => [
        P(l($e).Header, null, {
          default: x(() => [
            P(l($e).Trigger, null, {
              default: x(() => [
                P(l($e).Title, null, {
                  default: x(() => [
                    h(o.$slots, "title", {}, () => [
                      J(N(e.title), 1)
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
        P(l($e).Body, null, {
          default: x(() => [
            h(o.$slots, "default", { isActive: s })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), Mu = {
  install(e) {
    e.component("VAccordion", Eu), e.component("VAccordionItem", Bu);
  }
}, Au = {
  key: 0,
  class: "v-avatar__label"
}, Du = /* @__PURE__ */ b({
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
    return (t, o) => (c(), m("div", {
      class: V(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (c(), m("div", Au, N(e.label), 1)) : Z("", !0)
    ], 2));
  }
}), Pu = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, Nu = {}, ju = { class: "v-avatar-group" };
function Lu(e, t) {
  return c(), m("div", ju, [
    h(e.$slots, "default")
  ]);
}
const Fu = /* @__PURE__ */ Pu(Nu, [["render", Lu]]), Zu = {
  install(e) {
    e.component("VAvatar", Du);
  }
}, Xu = {
  install(e) {
    e.component("VAvatarGroup", Fu);
  }
}, Hu = { class: "v-alert__content" }, Uu = {
  key: 0,
  class: "v-alert__title"
}, Yu = {
  key: 1,
  class: "v-alert__description"
}, Ju = /* @__PURE__ */ b({
  __name: "VAlert",
  props: {
    title: {},
    description: {},
    showIcon: { type: Boolean },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = le(), n = p(() => !!t.title || !!o?.title), s = p(() => !!t.description || !!o?.description);
    return (a, r) => (c(), m("div", {
      class: V(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      S("div", Hu, [
        o?.default ? h(a.$slots, "default", { key: 0 }) : (c(), m(ee, { key: 1 }, [
          n.value ? (c(), m("div", Uu, [
            h(a.$slots, "title", {}, () => [
              J(N(e.title), 1)
            ])
          ])) : Z("", !0),
          s.value ? (c(), m("div", Yu, [
            h(a.$slots, "description", {}, () => [
              J(N(e.description), 1)
            ])
          ])) : Z("", !0)
        ], 64))
      ])
    ], 2));
  }
}), qu = {
  install(e) {
    e.component("VAlert", Ju);
  }
}, on = 0, nn = 0, Gu = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class Qe {
  #e;
  #o;
  #n;
  #a;
  #s;
  #r;
  #p;
  #i;
  #l;
  #t;
  #u;
  #c;
  constructor(t, o) {
    this.#e = this.#b(o), this.#o = t, this.#n = o.innerWrapper, this.#a = o.container, this.#s = 0, this.#r = 1, this.#p = !1, this.#i = !1, this.#l = !1, this.#u = void 0, this.#c = void 0, this.#t = {
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
  #b(t) {
    return {
      ...Gu,
      ...t
    };
  }
  #g() {
    this.#n = this.#e.innerWrapper, this.#a = this.#e.container, this.#h(), this.#m(), this.#_(), this.#p = !0;
  }
  #_() {
    window.addEventListener("resize", (t) => this.#d(t), { passive: !0, capture: !1 }), window.addEventListener("scroll", (t) => this.#d(t), { passive: !0, capture: !1 }), this.#u = this.#v(this.#a, () => {
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
    t.containerTop = this.#a.offsetTop, t.containerHeight = this.#a.clientHeight, t.containerBottom = t.containerTop + t.containerHeight, t.sidebarHeight = this.#n.offsetHeight, t.sidebarWidth = this.#o.offsetWidth, t.viewportHeight = window.innerHeight, t.maxTranslateY = t.containerHeight - t.sidebarHeight, this.#f();
  }
  #f() {
    const t = this.#t;
    t.sidebarLeft = this.#o.offsetLeft, t.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, t.viewportBottom = t.viewportTop + t.viewportHeight, t.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, t.offsetTop = this.#e.offsetTop || 0, t.offsetBottom = this.#e.offsetBottom || 0, this.#s === 1 ? t.offsetTop < t.lastOffsetTop && (t.translateY += t.lastOffsetTop - t.offsetTop, this.#i = !0) : this.#s === 2 && t.offsetBottom < t.lastOffsetBottom && (t.translateY += t.lastOffsetBottom - t.offsetBottom, this.#i = !0), t.lastOffsetTop = t.offsetTop, t.lastOffsetBottom = t.offsetBottom;
  }
  #y() {
    const t = this.#t.lastOffsetTop;
    return this.#t.sidebarHeight + t < this.#t.viewportHeight;
  }
  #$() {
    const { lastViewportTop: t, viewportTop: o } = this.#t;
    if (t === o)
      return;
    const n = this.#r === 1 ? Math.min : Math.max;
    o === n(o, t) && (this.#r = this.#r === 1 ? 0 : 1);
  }
  #x() {
    this.#f();
    const t = this.#t, o = t.viewportTop + t.offsetTop;
    let n;
    o <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, n = 0) : n = this.#r === 0 ? this.#w() : this.#z();
    const s = Math.max(0, t.translateY), a = Math.min(t.containerHeight, s);
    return t.translateY = Math.round(a), t.lastViewportTop = t.viewportTop, n;
  }
  #z() {
    const t = this.#t, o = t.sidebarHeight + t.containerTop, n = t.viewportTop + t.offsetTop, s = t.viewportBottom - t.offsetBottom;
    let a = this.#s;
    return this.#y() ? t.sidebarHeight + n >= t.containerBottom ? (t.translateY = t.containerBottom - o, a = 3) : n >= t.containerTop && (t.translateY = n - t.containerTop, a = 1) : t.containerBottom <= s ? (t.translateY = t.containerBottom - o, a = 3) : o + t.translateY <= s ? (t.translateY = s - o, a = 2) : t.containerTop + t.translateY <= n && t.translateY !== 0 && t.maxTranslateY !== t.translateY && (a = 4), a;
  }
  #w() {
    const t = this.#t, o = t.sidebarHeight + t.containerTop, n = t.viewportTop + t.offsetTop, s = t.viewportBottom - t.offsetBottom;
    let a = this.#s;
    return n <= t.translateY + t.containerTop ? (t.translateY = n - t.containerTop, a = 1) : t.containerBottom <= s ? (t.translateY = t.containerBottom - o, a = 3) : this.#y() || t.containerTop <= n && t.translateY !== 0 && t.maxTranslateY !== t.translateY && (a = 4), a;
  }
  #V(t) {
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
        const s = this.#C(0, n.translateY + "px");
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
    return o.outer = Qe.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = Qe.extend({
      position: "relative",
      top: "",
      left: "",
      bottom: "",
      width: "",
      transform: ""
    }, o.inner), o;
  }
  #m(t = !1) {
    t = this.#i || t;
    const o = this.#x(), n = this.#V(o);
    function s(a) {
      const r = ne(a) ? "px" : "";
      return `${a}${r}`;
    }
    if (this.#s !== o || t) {
      o === 0 ? this.#o.classList.remove(this.#e.affixClass) : this.#o.classList.add(this.#e.affixClass);
      for (const a in n.outer)
        Object.hasOwn(n.outer, a) && (this.#o.style[a] = s(n.outer[a]));
      for (const a in n.inner)
        Object.hasOwn(n.inner, a) && (this.#n.style[a] = s(n.inner[a]));
    } else
      this.#p && (this.#n.style.left = s(n.inner.left));
    this.#s = o;
  }
  #C(t = 0, o = 0, n = 0) {
    return `translate3d(${t}, ${o}, ${n})`;
  }
  updateSticky(t) {
    this.#l || (this.#l = !0, ((o) => {
      requestAnimationFrame(() => {
        o === "scroll" ? (this.#f(), this.#$(), this.#m()) : (this.#h(), this.#m(!0)), this.#l = !1;
      });
    })(t?.type));
  }
  destroy() {
    window.removeEventListener("resize", (t) => this.#d(t), { capture: !1 }), window.removeEventListener("scroll", (t) => this.#d(t), { capture: !1 }), this.#c?.disconnect(), this.#u?.disconnect(), this.#c = void 0, this.#u = void 0, this.#o.classList.remove(this.#e.affixClass), this.#o.removeAttribute("style"), this.#n.removeAttribute("style");
  }
  static extend(t, o) {
    const n = {};
    for (const s in t)
      Ce(o[s]) ? n[s] = t[s] : n[s] = o[s];
    return n;
  }
}
function Ku(e) {
  const t = Bt(), o = Bt(), n = p(() => ne(e.props?.offsetTop) ? e.props.offsetTop : on), s = p(() => ne(e.props?.offsetBottom) ? e.props.offsetBottom : nn);
  function a() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function r() {
    a(), e.root.value && t.value && e.content.value && (o.value = new Qe(e.root.value, {
      offsetTop: n.value,
      offsetBottom: s.value,
      container: t.value,
      innerWrapper: e.content.value
    }));
  }
  function i() {
    o.value?.destroy(), o.value = void 0;
  }
  return be(() => {
    e.props.disabled || r();
  }), ht(() => {
    i();
  }), te(() => e.props.disabled, (u) => {
    u ? i() : r();
  }), {};
}
const Wu = /* @__PURE__ */ b({
  __name: "VAffix",
  props: {
    offsetTop: { default: on },
    offsetBottom: { default: nn },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = de("root"), n = de("content");
    return Ku({
      props: t,
      root: o,
      content: n
    }), (s, a) => (c(), m("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      S("div", {
        ref_key: "content",
        ref: n,
        class: "v-affix__content"
      }, [
        h(s.$slots, "default")
      ], 512)
    ], 512));
  }
}), Qu = {
  install(e) {
    e.component("VAffix", Wu);
  }
}, ec = { class: "v-breadcrumbs" }, tc = /* @__PURE__ */ b({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (c(), m("nav", ec));
  }
}), oc = {
  install(e) {
    e.component("VBreadcrumbs", tc);
  }
};
function nc(e) {
  return {
    content: p(() => e.props.dot ? "" : ne(e.props.value) && ne(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const sc = {
  key: 0,
  class: "v-badge__content"
}, ac = /* @__PURE__ */ b({
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
    const t = e, o = le(), { content: n } = nc({
      props: t
    }), s = p(() => !t.hidden && !!(n.value || t.dot || o?.content));
    return (a, r) => (c(), m("div", {
      class: V(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      h(a.$slots, "default"),
      s.value ? (c(), m("sup", sc, [
        h(a.$slots, "content", { value: l(n) }, () => [
          J(N(l(n)), 1)
        ])
      ])) : Z("", !0)
    ], 2));
  }
}), rc = {
  install(e) {
    e.component("VBadge", ac);
  }
}, ic = { class: "v-collapse" }, lc = /* @__PURE__ */ b({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (c(), m("div", ic, [
      h(t.$slots, "default")
    ]));
  }
}), uc = {
  install(e) {
    e.component("VCollapse", lc);
  }
};
function cc(e) {
  const [t, o] = se();
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
const dc = /* @__PURE__ */ b({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: n, handleOpen: s, handleClose: a } = cc({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (r, i) => l(n) ? h(r.$slots, "content", {
      key: 1,
      close: l(a)
    }) : h(r.$slots, "display", {
      key: 0,
      open: l(s)
    });
  }
}), pc = {
  install(e) {
    e.component("VInplace", dc);
  }
}, ut = /* @__PURE__ */ b({
  __name: "VOverlay",
  props: {
    mask: { type: Boolean, default: !0 },
    blur: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["v-overlay", {
        "v-overlay--mask": e.mask,
        "v-overlay--blur": e.mask && e.blur
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), fc = {
  install(e) {
    e.component("VOverlay", ut);
  }
}, mc = {
  key: 0,
  class: "v-modal__header"
}, vc = { class: "v-modal__body" }, hc = {
  key: 1,
  class: "v-modal__footer"
}, sn = /* @__PURE__ */ b({
  __name: "VModal",
  props: /* @__PURE__ */ R({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = le(), a = A(e, "modelValue"), r = p(() => !!o.title || !!s?.header), i = p(() => !!s?.footer);
    function u() {
      a.value = !1;
    }
    function d(f) {
      n("opened", f);
    }
    function v(f) {
      n("closed", f);
    }
    return te(a, (f) => {
      n(f ? "open" : "close");
    }), (f, y) => (c(), C(lo, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      P(st, {
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: x(() => [
          P(l(ut), null, {
            default: x(() => [
              W(S("div", {
                class: V(["v-modal", {
                  "v-modal--open": a.value
                }]),
                role: "dialog"
              }, [
                r.value ? (c(), m("div", mc, [
                  h(f.$slots, "header", { close: u }, () => [
                    J(N(e.title), 1)
                  ]),
                  S("button", {
                    class: "v-modal__close-button",
                    type: "button",
                    onClick: u
                  }, " x ")
                ])) : Z("", !0),
                S("div", vc, [
                  h(f.$slots, "default", { close: u })
                ]),
                i.value ? (c(), m("div", hc, [
                  h(f.$slots, "footer", { close: u })
                ])) : Z("", !0)
              ], 2), [
                [ye, a.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), yc = {
  install(e) {
    e.component("VModal", sn);
  }
}, bc = { class: "v-drawer__dialog" }, gc = {
  key: 0,
  class: "v-drawer__header"
}, _c = { class: "v-drawer__body" }, $c = {
  key: 1,
  class: "v-drawer__footer"
}, an = /* @__PURE__ */ b({
  __name: "VDrawer",
  props: /* @__PURE__ */ R({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = le(), a = A(e, "modelValue"), r = p(() => !!o.title || !!s?.header), i = p(() => !!s?.footer);
    function u() {
      a.value = !1;
    }
    function d(f) {
      n("opened", f);
    }
    function v(f) {
      n("closed", f);
    }
    return te(a, (f) => {
      n(f ? "open" : "close");
    }), (f, y) => (c(), C(lo, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      P(st, {
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: x(() => [
          P(l(ut), null, {
            default: x(() => [
              W(S("div", {
                class: V(["v-drawer", {
                  "v-drawer--open": a.value
                }]),
                role: "dialog"
              }, [
                S("div", bc, [
                  r.value ? (c(), m("div", gc, [
                    h(f.$slots, "header", { close: u }, () => [
                      J(N(e.title), 1)
                    ]),
                    S("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: u
                    }, " x ")
                  ])) : Z("", !0),
                  S("div", _c, [
                    h(f.$slots, "default", { close: u })
                  ]),
                  i.value ? (c(), m("div", $c, [
                    h(f.$slots, "footer", { close: u })
                  ])) : Z("", !0)
                ])
              ], 2), [
                [ye, a.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), xc = {
  install(e) {
    e.component("VDrawer", an);
  }
};
function sf() {
  return {};
}
const zc = /* @__PURE__ */ Symbol("VDropdownContextKey"), wc = {
  mounted() {
  },
  unmounted() {
  }
}, Vc = {
  install(e) {
    e.directive("visible", wc);
  }
}, Cc = {
  mounted() {
  },
  unmounted() {
  }
}, Tc = {
  install(e) {
    e.directive("loading", Cc);
  }
}, rn = {
  mounted() {
  },
  unmounted() {
  }
}, Rc = {
  install(e) {
    e.directive("click-outside", rn);
  }
}, Sc = {
  mounted() {
  },
  unmounted() {
  }
}, Ic = {
  install(e) {
    e.directive("tooltip", Sc);
  }
}, kc = { class: "v-dropdown__menu" }, Oc = /* @__PURE__ */ b({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, [a, r, i] = se(), u = () => r(!1);
    function d(f) {
      s("opened", f);
    }
    function v(f) {
      s("opened", f);
    }
    return te(a, (f) => {
      s(f ? "open" : "close");
    }), t({
      setVisible: r,
      isVisible: a
    }), H(zc, {
      props: n
    }), (f, y) => W((c(), m("div", {
      class: V(["v-dropdown", {
        "v-dropdown--open": l(a)
      }])
    }, [
      h(f.$slots, "trigger", {
        isVisible: l(a),
        toggle: l(i),
        setVisible: l(r)
      }),
      P(st, {
        onAfterEnter: d,
        onAfterLeave: v
      }, {
        default: x(() => [
          W(S("div", kc, [
            h(f.$slots, "default")
          ], 512), [
            [ye, l(a)]
          ])
        ]),
        _: 3
      })
    ], 2)), [
      [l(rn), u]
    ]);
  }
}), Ec = {
  install(e) {
    e.component("VDropdown", Oc);
  }
}, Bc = /* @__PURE__ */ b({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = de("image"), o = de("root");
    return (n, s) => (c(), m("figure", {
      ref_key: "root",
      ref: o,
      class: V(["v-image", [
        {
          "v-image--loading": n.isLoading,
          "v-image--center": n.center,
          "v-image--loaded": !n.isError && n.isLoaded,
          "v-image--error": n.isError
        }
      ]])
    }, [
      S("picture", null, [
        S("img", {
          ref_key: "image",
          ref: t,
          class: "v-image__native",
          alt: ""
        }, null, 512)
      ])
    ], 2));
  }
}), Mc = {
  install(e) {
    e.component("VImage", Bc);
  }
}, Ac = /* @__PURE__ */ b({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (c(), C(l(It).Container, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dc = {
  install(e) {
    e.component("VContainer", Ac);
  }
}, Pc = /* @__PURE__ */ b({
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
    return (o, n) => (c(), C(l(It).Col, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Nc = {
  install(e) {
    e.component("VCol", Pc);
  }
}, jc = /* @__PURE__ */ b({
  __name: "VRow",
  props: {
    guttersX: { type: Boolean },
    guttersY: { type: Boolean },
    align: {},
    justify: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (c(), C(l(It).Row, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Lc = {
  install(e) {
    e.component("VRow", jc);
  }
}, Fc = { class: "v-pagination" }, Zc = /* @__PURE__ */ b({
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
    return (t, o) => (c(), m("div", Fc));
  }
}), Xc = {
  install(e) {
    e.component("VPagination", Zc);
  }
}, Hc = { class: "v-placeholder" }, Uc = /* @__PURE__ */ b({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (c(), m("div", Hc, [
      h(t.$slots, "default")
    ]));
  }
}), Yc = {
  install(e) {
    e.component("VPlaceholder", Uc);
  }
}, Jc = /* @__PURE__ */ b({
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
    return (s, a) => (c(), C(l(ou).Root, U(o, ue(n)), {
      default: x(() => [
        h(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), qc = {
  install(e) {
    e.component("VScrollbar", Jc);
  }
}, Gc = /* @__PURE__ */ b({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), Kc = {
  install(e) {
    e.component("VSpinner", Gc);
  }
}, ln = /* @__PURE__ */ Symbol("VTabsContextKey"), Wc = () => K(ln, null);
function Qc() {
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
function ed(e) {
  const t = bt(), o = p(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const td = { class: "v-tabs" }, od = { class: "v-tabs__content" }, nd = /* @__PURE__ */ b({
  __name: "VTabs",
  props: /* @__PURE__ */ R({
    scrollable: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = A(e, "modelValue"), {
      tabs: a,
      registerTab: r,
      unregisterTab: i
    } = Qc();
    function u(d) {
      s.value = d, n("change", d);
    }
    return H(ln, {
      props: o,
      modelValue: s,
      tabs: a,
      handleChange: u,
      registerTab: r,
      unregisterTab: i
    }), (d, v) => (c(), m("div", td, [
      S("div", od, [
        h(d.$slots, "default")
      ])
    ]));
  }
}), sd = /* @__PURE__ */ b({
  __name: "VTab",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = le(), n = Wc(), { id: s, isActive: a } = ed({
      context: n,
      props: t
    }), r = bn({
      id: s,
      props: t,
      slots: o
    });
    return n?.registerTab(r), tt(() => {
      n?.unregisterTab(r);
    }), (i, u) => W((c(), m("div", {
      class: V(["v-tab", {
        "v-tab--active": l(a)
      }])
    }, [
      h(i.$slots, "default", { isActive: l(a) })
    ], 2)), [
      [ye, l(a)]
    ]);
  }
}), ad = {
  install(e) {
    e.component("VTabs", nd), e.component("VTab", sd);
  }
}, rd = /* @__PURE__ */ b({
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
    return (s, a) => (c(), C(l(Ko).Root, U(o, ue(n)), {
      default: x(() => [
        h(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), id = /* @__PURE__ */ b({
  __name: "VTagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (c(), C(l(Ko).Group, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ld = {
  install(e) {
    e.component("VTag", rd);
  }
}, af = {
  install(e) {
    e.component("VTagGroup", id);
  }
}, ud = ["innerHTML"], cd = /* @__PURE__ */ b({
  __name: "VText",
  props: {
    tag: { default: "div" },
    uppercase: { type: Boolean },
    underline: { type: Boolean },
    content: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (c(), C(gn(e.tag), {
      class: V(["v-text", {
        "v-text--uppercase": e.uppercase,
        "v-text--underline": e.underline,
        [`v-text--size-${e.size}`]: e.size,
        [`v-text--theme-${e.theme}`]: e.theme
      }])
    }, {
      default: x(() => [
        e.content ? (c(), m("span", {
          key: 0,
          innerHTML: e.content
        }, null, 8, ud)) : h(t.$slots, "default", { key: 1 })
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), dd = {
  install(e) {
    e.component("VText", cd);
  }
}, pd = /* @__PURE__ */ b({
  __name: "VForm",
  props: /* @__PURE__ */ R({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ R(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = A(e, "modelValue");
    return (a, r) => (c(), C(l(Ee).Root, U({
      modelValue: s.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => s.value = i)
    }, o, ue(n)), {
      default: x((i) => [
        h(a.$slots, "default", L(F(i)))
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), fd = {
  install(e) {
    e.component("VForm", pd);
  }
}, md = /* @__PURE__ */ b({
  __name: "VFormItem",
  props: {
    title: {},
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { emit: t }) {
    const o = io(e, ["title"]), n = t, s = le();
    return (a, r) => (c(), C(l(Ee).Item, U(o, ue(n)), yn({
      default: x((i) => [
        h(a.$slots, "default", L(F(i)))
      ]),
      footer: x((i) => [
        h(a.$slots, "footer", L(F(i)), () => [
          P(l(Ee).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: x((i) => [
          h(a.$slots, "header", L(F(i)), () => [
            P(l(Ee).ItemTitle, null, {
              default: x(() => [
                J(N(e.title) + " ", 1),
                i.isRequired ? (c(), C(l(Ee).ItemRequired, { key: 0 })) : Z("", !0)
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        key: "0"
      } : void 0
    ]), 1040));
  }
}), vd = {
  install(e) {
    e.component("VFormItem", md);
  }
}, hd = /* @__PURE__ */ b({
  __name: "VCheckbox",
  props: /* @__PURE__ */ R({
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
    const t = e, o = A(e, "modelValue");
    return (n, s) => (c(), C(l(Xe).Root, U(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a)
    }), {
      default: x(() => [
        P(l(Xe).Indicator),
        P(l(Xe).Title, null, {
          default: x(() => [
            h(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), yd = /* @__PURE__ */ b({
  __name: "VCheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (c(), C(l(Xe).Group, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), bd = {
  install(e) {
    e.component("VCheckbox", hd);
  }
}, gd = {
  install(e) {
    e.component("VCheckboxGroup", yd);
  }
}, _d = /* @__PURE__ */ b({
  __name: "VInput",
  props: /* @__PURE__ */ R({
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
    const t = e, o = le(), n = A(e, "modelValue");
    return (s, a) => (c(), C(l(Q).Root, U(t, {
      modelValue: n.value,
      "onUpdate:modelValue": a[0] || (a[0] = (r) => n.value = r)
    }), {
      default: x((r) => [
        o?.before ? (c(), C(l(Q).Before, { key: 0 }, {
          default: x(() => [
            h(s.$slots, "before", L(F(r)))
          ]),
          _: 2
        }, 1024)) : Z("", !0),
        P(l(Q).Control, null, {
          default: x(() => [
            r.isTextarea ? (c(), C(l(Q).Textarea, { key: 0 })) : (c(), C(l(Q).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (c(), C(l(Q).After, { key: 1 }, {
          default: x(() => [
            h(s.$slots, "after", L(F(r)))
          ]),
          _: 2
        }, 1024)) : Z("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), $d = {
  install(e) {
    e.component("VInput", _d);
  }
}, xd = /* @__PURE__ */ b({
  __name: "VInputCode",
  props: /* @__PURE__ */ R({
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
    const t = e, o = A(e, "modelValue");
    return (n, s) => (c(), C(l(Qt).Root, U(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a)
    }), {
      default: x(() => [
        (c(!0), m(ee, null, ze(e.length, (a, r) => (c(), C(l(Qt).Pin, {
          key: `pin-${r}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), zd = {
  install(e) {
    e.component("VInputCode", xd);
  }
}, wd = /* @__PURE__ */ b({
  __name: "VInputNumber",
  props: /* @__PURE__ */ R({
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
      default: St
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = A(e, "modelValue");
    return (n, s) => (c(), C(l(Ze).Root, U(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a)
    }), {
      default: x(() => [
        P(l(Ze).Button, {
          action: l(We).DECREMENT
        }, null, 8, ["action"]),
        P(l(Ze).Input),
        P(l(Ze).Button, {
          action: l(We).INCREMENT
        }, null, 8, ["action"])
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), Vd = {
  install(e) {
    e.component("VInputNumber", wd);
  }
}, Cd = /* @__PURE__ */ b({
  __name: "VInputPassword",
  props: /* @__PURE__ */ R({
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
    const t = e, o = A(e, "modelValue");
    return (n, s) => (c(), C(l(nl).Root, U({
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a)
    }, t), null, 16, ["modelValue"]));
  }
}), Td = {
  install(e) {
    e.component("VInputPassword", Cd);
  }
}, Rd = /* @__PURE__ */ b({
  __name: "VRadio",
  props: /* @__PURE__ */ R({
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
    const t = e, o = A(e, "modelValue");
    return (n, s) => (c(), C(l(He).Root, U(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a)
    }), {
      default: x(() => [
        P(l(He).Indicator),
        P(l(He).Title, null, {
          default: x(() => [
            h(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Sd = /* @__PURE__ */ b({
  __name: "VRadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (c(), C(l(He).Group, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Id = {
  install(e) {
    e.component("VRadio", Rd);
  }
}, kd = {
  install(e) {
    e.component("VRadioGroup", Sd);
  }
}, Od = /* @__PURE__ */ b({
  __name: "VSwitch",
  props: /* @__PURE__ */ R({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = A(e, "modelValue");
    return (n, s) => (c(), C(l(pt).Root, U(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (a) => o.value = a)
    }), {
      default: x(() => [
        P(l(pt).Indicator),
        P(l(pt).Title, null, {
          default: x(() => [
            h(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Ed = {
  install(e) {
    e.component("VSwitch", Od);
  }
}, Bd = /* @__PURE__ */ b({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (c(), C(l(Ql).Root, L(F(t)), {
      default: x(() => [
        h(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Md = {
  install(e) {
    e.component("VConfigProvider", Bd);
  }
}, Ad = { class: "v-progress__value" }, Dd = {
  key: 0,
  class: "v-progress__label"
}, Pd = /* @__PURE__ */ b({
  __name: "VProgress",
  props: {
    indeterminate: { type: Boolean },
    showValue: { type: Boolean, default: !0 },
    value: {},
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      S("div", Ad, [
        e.showValue ? (c(), m("div", Dd, [
          h(t.$slots, "default")
        ])) : Z("", !0)
      ])
    ], 2));
  }
}), Nd = {
  install(e) {
    e.component("VProgress", Pd);
  }
}, jd = { class: "v-divider" }, Ld = /* @__PURE__ */ b({
  __name: "VDivider",
  setup(e) {
    return (t, o) => (c(), m("div", jd, [
      h(t.$slots, "default")
    ]));
  }
}), Fd = {
  install(e) {
    e.component("VDivider", Ld);
  }
}, Zd = /* @__PURE__ */ b({
  __name: "VFlex",
  props: {
    wrap: { type: Boolean, default: !0 },
    gap: {},
    align: {},
    justify: {},
    direction: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", {
      class: V(["v-flex", {
        [`v-flex--justify-${e.justify}`]: e.justify,
        [`v-flex--align-${e.align}`]: e.align,
        [`v-flex--direction-${e.direction}`]: e.direction,
        "v-flex--no-wrap": !e.wrap
      }])
    }, [
      h(t.$slots, "default")
    ], 2));
  }
}), Xd = {
  install(e) {
    e.component("VFlex", Zd);
  }
};
function Hd(e) {
  const t = M([]), o = M({
    prop: null,
    order: null
  }), n = p(() => e.columns.some((d) => !!d.title));
  function s() {
    t.value = [];
  }
  function a() {
    return t.value;
  }
  function r() {
    o.value = {
      prop: null,
      order: null
    };
  }
  function i(d, v) {
    o.value = {
      prop: d,
      order: v
    };
  }
  function u() {
    t.value.length === e.data.length ? s() : t.value = [...e.data];
  }
  return {
    isHeaderVisible: n,
    clearSelection: s,
    getSelectionRows: a,
    clearSort: r,
    sort: i,
    toggleAllSelection: u
  };
}
const Ud = ot(() => import("./TableRow-C4GksJlG-BioD35dk.js")), Yd = ot(() => import("./TableEmpty-ZovTF4uD-k3YBHmct.js")), Jd = ot(() => import("./TableBodyCell-ClUcxQ7u-Z45GdSVB.js")), qd = ot(() => import("./TableHeaderCell-BC__GOke-D56mthVX.js")), Gd = /* @__PURE__ */ Symbol("VTableContextKey"), Kd = { class: "v-table" }, Wd = {
  key: 0,
  class: "v-table__native"
}, Qd = { key: 0 }, ep = /* @__PURE__ */ b({
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
      getSelectionRows: a,
      clearSort: r,
      sort: i,
      toggleAllSelection: u
    } = Hd(o);
    return H(Gd, {
      props: o
    }), t({
      clearSelection: s,
      getSelectionRows: a,
      clearSort: r,
      sort: i,
      toggleAllSelection: u
    }), (d, v) => (c(), m("div", Kd, [
      e.data.length ? (c(), m("table", Wd, [
        l(n) ? (c(), m("thead", Qd, [
          S("tr", null, [
            (c(!0), m(ee, null, ze(e.columns, (f) => (c(), C(l(qd), {
              key: f.prop
            }, {
              default: x(() => [
                J(N(f.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : Z("", !0),
        S("tbody", null, [
          (c(!0), m(ee, null, ze(e.data, (f, y) => (c(), C(l(Ud), {
            key: `row-${y}`
          }, {
            default: x(() => [
              (c(!0), m(ee, null, ze(e.columns, (g) => (c(), C(l(Jd), {
                key: `row-${y}-${String(g.prop)}`
              }, {
                default: x(() => [
                  h(d.$slots, String(g.prop), { row: f }, () => [
                    J(N(f[g.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (c(), C(l(Yd), { key: 1 }, {
        default: x(() => [
          h(d.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), tp = {
  install(e) {
    e.component("VTable", ep);
  }
}, op = /* @__PURE__ */ b({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (c(), C(l(Q).Group, null, {
      default: x(() => [
        h(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), np = /* @__PURE__ */ b({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (c(), C(l(Q).GroupAddon, null, {
      default: x(() => [
        h(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), sp = {
  install(e) {
    e.component("VInputGroup", op), e.component("VInputGroupAddon", np);
  }
}, Ue = 1e3, Ye = 60 * Ue, Je = 60 * Ye, so = 24 * Je, un = Date.now(), cn = 1e3;
function ap(e) {
  const [t, o] = se(), [n, s] = se(), a = M(0), r = M(0), i = M(0), u = p(() => e.props.now || un), d = p(() => e.props.interval || cn), v = p(() => 0), f = p(() => 0), y = p(() => Math.floor(a.value / so)), g = p(() => Math.floor(a.value % so / Je)), _ = p(() => Math.floor(a.value % Je / Ye)), w = p(() => Math.floor(a.value % Ye / Ue)), I = p(() => Math.floor(a.value % Ue)), E = p(() => Math.floor(a.value / Je)), k = p(() => Math.floor(a.value / Ye)), T = p(() => Math.floor(a.value / Ue));
  function O() {
    t.value || (o(!0), e.props?.autoStart || (a.value = e.props.start, r.value = u.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && me());
  }
  function D() {
    cancelAnimationFrame(i.value), i.value = 0;
  }
  function ce() {
    t.value && (Pe(), a.value > 0 && e.onProgress?.({
      days: y.value,
      hours: g.value,
      minutes: _.value,
      seconds: w.value,
      milliseconds: I.value,
      totalDays: y.value,
      totalHours: E.value,
      totalMinutes: k.value,
      totalSeconds: T.value,
      totalMilliseconds: a.value
    }), me());
  }
  function me() {
    if (!t.value)
      return;
    const ie = Math.min(a.value, d.value);
    if (ie > 0) {
      let kt = function(Se) {
        dt || (dt = Se), je || (je = Se);
        const Ot = Se - dt;
        Ot >= ie || Ot + (Se - je) / 2 >= ie ? ce() : i.value = requestAnimationFrame(kt), je = Se;
      }, dt, je;
      i.value = requestAnimationFrame(kt);
    } else
      _e();
  }
  function Re() {
    t.value && (D(), o(!1), e.onAbort?.());
  }
  function _e() {
    t.value && (D(), a.value = 0, o(!1), e.onEnd?.());
  }
  function Pe() {
    t.value && (a.value = Math.max(0, r.value - u.value));
  }
  function ct() {
    D(), a.value = e.props.start, r.value = u.value + e.props.start, o(!1), O();
  }
  function Ne() {
    switch (document.visibilityState) {
      case "visible":
        i.value === 0 && n.value && (Pe(), me()), s(!1);
        break;
      case "hidden":
        i.value > 0 && (s(!0), D());
        break;
    }
  }
  return be(() => {
    document.addEventListener("visibilitychange", Ne);
  }), ht(() => {
    document.removeEventListener("visibilitychange", Ne), D();
  }), te(() => e.props, (ie) => {
    a.value = ie.start, r.value = u.value + ie.start, ie.autoStart && O();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: v,
    months: f,
    days: y,
    hours: g,
    minutes: _,
    seconds: w,
    milliseconds: I,
    start: O,
    abort: Re,
    end: _e,
    restart: ct
  };
}
const rp = { class: "v-countdown" }, ip = /* @__PURE__ */ b({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => cn },
    start: {},
    now: { default: () => un }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, {
      years: a,
      months: r,
      days: i,
      hours: u,
      minutes: d,
      seconds: v,
      milliseconds: f,
      start: y,
      abort: g,
      end: _,
      restart: w
    } = ap({
      props: n,
      onAbort: () => s("abort"),
      onEnd: () => s("end"),
      onProgress: (I) => s("progress", I),
      onStart: () => s("start")
    });
    return t({
      start: y,
      abort: g,
      end: _,
      restart: w
    }), (I, E) => (c(), m("div", rp, [
      h(I.$slots, "default", {
        years: l(a),
        months: l(r),
        days: l(i),
        hours: l(u),
        minutes: l(d),
        seconds: l(v),
        milliseconds: l(f)
      })
    ]));
  }
}), lp = {
  install(e) {
    e.component("VCountdown", ip);
  }
}, up = { class: "v-calendar" }, cp = /* @__PURE__ */ b({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (c(), m("div", up));
  }
}), dp = {
  install(e) {
    e.component("VCalendar", cp);
  }
}, rf = {
  install(e) {
    e.use(Mu), e.use(Qu), e.use(Zu), e.use(Xu), e.use(rc), e.use(oc), e.use(Ou), e.use(uc), e.use(Md), e.use(yc), e.use(pc), e.use(xc), e.use(Ec), e.use(Mc), e.use(Xc), e.use(Yc), e.use(qc), e.use(Kc), e.use(ad), e.use(ld), e.use(dd), e.use(Dc), e.use(Nc), e.use(Lc), e.use(fd), e.use(vd), e.use($d), e.use(bd), e.use(gd), e.use(Td), e.use(Vd), e.use(zd), e.use(Id), e.use(kd), e.use(Ed), e.use(fc), e.use(qu), e.use(Nd), e.use(Fd), e.use(Xd), e.use(tp), e.use(sp), e.use(lp), e.use(dp), e.use(Vc), e.use(Rc), e.use(Tc), e.use(Ic);
  }
}, pp = { class: "v-confirm__header" }, fp = { class: "v-confirm__title" }, mp = { class: "v-confirm__body" }, vp = {
  key: 0,
  class: "v-confirm__text"
}, hp = ["innerHTML"], yp = { class: "v-confirm__footer" }, bp = /* @__PURE__ */ b({
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
    return (n, s) => (c(), C(l(ut), null, {
      default: x(() => [
        S("div", {
          class: V(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          S("div", pp, [
            S("div", fp, N(e.title), 1),
            S("button", {
              type: "button",
              onClick: s[0] || (s[0] = (a) => o("close"))
            }, " X ")
          ]),
          S("div", mp, [
            e.useHtml ? (c(), m("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, hp)) : (c(), m("div", vp, N(e.message), 1))
          ]),
          S("div", yp, [
            S("button", {
              type: "button",
              onClick: s[1] || (s[1] = (a) => o("success"))
            }, N(e.confirmText), 1),
            S("button", {
              type: "button",
              onClick: s[2] || (s[2] = (a) => o("cancel"))
            }, N(e.cancelText), 1)
          ])
        ], 2)
      ]),
      _: 1
    }));
  }
});
class lf {
  static #e = null;
  static async open(t, o) {
    return new Promise((n) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const s = (r) => {
        try {
          this.close(), n(r);
        } catch (i) {
          console.error(i), n(!1);
        }
      }, a = nt(bp, {
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
      Be(a, this.#e);
    });
  }
  static close() {
    this.#e && Be(null, this.#e);
  }
}
const uf = {
  install() {
  }
}, dn = 1500;
function gp(e) {
  const t = p(() => ne(e.props.duration) ? e.props.duration : dn), [o, n] = se(!1);
  let s = null;
  function a() {
    s && clearTimeout(s);
  }
  function r() {
    a(), t.value !== 0 && (s = setTimeout(() => {
      n(!1);
    }, t.value));
  }
  return be(() => {
    r(), n(!0);
  }), {
    isVisible: o,
    setVisible: n,
    clearTimer: a,
    startTimer: r
  };
}
const _p = { class: "v-toast__header" }, $p = { class: "v-toast__title" }, xp = { class: "v-toast__body" }, zp = {
  key: 0,
  class: "v-toast__text"
}, wp = ["innerHTML"], Vp = /* @__PURE__ */ b({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: dn },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, { isVisible: s, setVisible: a, startTimer: r, clearTimer: i } = gp({
      props: o
    });
    return (u, d) => (c(), C(st, {
      name: "fade-in-up",
      onAfterLeave: d[3] || (d[3] = (v) => n("close"))
    }, {
      default: x(() => [
        W(S("div", {
          class: V(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: d[1] || (d[1] = //@ts-ignore
          (...v) => l(i) && l(i)(...v)),
          onMouseleave: d[2] || (d[2] = //@ts-ignore
          (...v) => l(r) && l(r)(...v))
        }, [
          S("div", _p, [
            S("div", $p, N(e.title), 1),
            e.clearable ? (c(), m("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: d[0] || (d[0] = (v) => l(a)(!1))
            }, " X ")) : Z("", !0)
          ]),
          S("div", xp, [
            e.useHtml ? (c(), m("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, wp)) : (c(), m("div", zp, N(e.message), 1))
          ])
        ], 34), [
          [ye, l(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class cf {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = nt(Vp, {
      ...t,
      appContext: o
    });
    Be(n, this.#e);
  }
}
class df {
  static open(t, o) {
    const n = nt(sn, {
      ...t,
      appContext: o
    });
    Be(n, document.body);
  }
}
class pf {
  static open(t, o) {
    const n = nt(an, {
      ...t,
      appContext: o
    });
    Be(n, document.body);
  }
}
const ff = {
  name: "ru",
  vau: {}
}, mf = {
  name: "en",
  vau: {}
};
export {
  We as $,
  Ko as A,
  Pp as B,
  ef as C,
  Ie as D,
  $t as E,
  bo as F,
  Op as G,
  Np as H,
  Mp as I,
  Sp as J,
  Ip as K,
  $e as L,
  At as M,
  Yn as N,
  Jn as O,
  at as P,
  ne as Q,
  ou as R,
  Me as S,
  Ce as T,
  gt as U,
  Dp as V,
  Bp as W,
  Rp as X,
  Ep as Y,
  Ap as Z,
  Gp as _,
  Xo as a,
  Ed as a$,
  of as a0,
  _t as a1,
  $n as a2,
  _n as a3,
  xn as a4,
  Fp as a5,
  Lp as a6,
  Qp as a7,
  Hp as a8,
  ur as a9,
  lp as aA,
  Fd as aB,
  xc as aC,
  pf as aD,
  Ec as aE,
  Xd as aF,
  vd as aG,
  fd as aH,
  Mc as aI,
  pc as aJ,
  zd as aK,
  sp as aL,
  Vd as aM,
  Td as aN,
  $d as aO,
  Tc as aP,
  yc as aQ,
  df as aR,
  fc as aS,
  Xc as aT,
  Yc as aU,
  Nd as aV,
  kd as aW,
  Id as aX,
  Lc as aY,
  qc as aZ,
  Kc as a_,
  Gn as aa,
  Hn as ab,
  jp as ac,
  Tp as ad,
  Xp as ae,
  se as af,
  Zp as ag,
  Mu as ah,
  Qu as ai,
  qu as aj,
  Xu as ak,
  Zu as al,
  rc as am,
  oc as an,
  nf as ao,
  Ou as ap,
  dp as aq,
  gd as ar,
  bd as as,
  Rc as at,
  Nc as au,
  uc as av,
  Md as aw,
  uf as ax,
  lf as ay,
  Dc as az,
  Q as b,
  Sc as b$,
  tp as b0,
  ad as b1,
  af as b2,
  ld as b3,
  dd as b4,
  cf as b5,
  Ic as b6,
  Eu as b7,
  Bu as b8,
  Wu as b9,
  np as bA,
  wd as bB,
  Cd as bC,
  sn as bD,
  ut as bE,
  Zc as bF,
  Uc as bG,
  Pd as bH,
  Rd as bI,
  Sd as bJ,
  jc as bK,
  Jc as bL,
  Gc as bM,
  Od as bN,
  sd as bO,
  ep as bP,
  nd as bQ,
  rd as bR,
  id as bS,
  cd as bT,
  rf as bU,
  Vc as bV,
  mf as bW,
  ff as bX,
  sf as bY,
  rn as bZ,
  Cc as b_,
  Ju as ba,
  Du as bb,
  Fu as bc,
  ac as bd,
  tc as be,
  Iu as bf,
  ku as bg,
  cp as bh,
  hd as bi,
  yd as bj,
  Pc as bk,
  lc as bl,
  Bd as bm,
  Ac as bn,
  ip as bo,
  Ld as bp,
  an as bq,
  Oc as br,
  Zd as bs,
  pd as bt,
  md as bu,
  Bc as bv,
  dc as bw,
  _d as bx,
  xd as by,
  op as bz,
  Un as c,
  wc as c0,
  Xe as d,
  Ze as e,
  Pu as f,
  Kp as g,
  nl as h,
  Mt as i,
  go as j,
  Wp as k,
  He as l,
  ke as m,
  qp as n,
  Zi as o,
  St as p,
  kp as q,
  Xi as r,
  Hi as s,
  pt as t,
  Ee as u,
  Qt as v,
  It as w,
  tf as x,
  Wo as y,
  Ql as z
};
