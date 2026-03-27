import { computed as d, toValue as _, inject as B, defineComponent as R, mergeModels as P, useModel as L, provide as M, createElementBlock as g, openBlock as v, normalizeClass as C, renderSlot as b, unref as c, withDirectives as X, createElementVNode as U, vShow as Xe, ref as V, watch as G, onBeforeUnmount as Pn, markRaw as An, Fragment as K, onMounted as Te, onScopeDispose as Ue, isRef as Ee, nextTick as Dn, useId as St, onUnmounted as Je, withModifiers as Ot, useSlots as kt, useTemplateRef as Ie, createCommentVNode as de, normalizeProps as be, guardReactiveProps as $e, createTextVNode as q, renderList as Tt, toDisplayString as te, createBlock as fe, withCtx as H, mergeProps as Y, toHandlers as Ve, vModelDynamic as jn, vModelText as Et, vModelCheckbox as Vt, vModelRadio as Nn, createVNode as Ce, withKeys as rt, useAttrs as Bn, Teleport as Mn, Transition as Zn, createPropsRestProxy as Ln, resolveDynamicComponent as Fn, Comment as Xn, cloneVNode as Un, h as Me } from "vue";
function Jn(e) {
  const t = d(() => _(e.props));
  function n(o) {
    const r = _(e.modelValue);
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
function Kn(e) {
  const t = d(() => _(e.props)), n = d(() => _(e.accordionRootContext?.modelValue)), o = d(() => !!_(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: d(() => o.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : n.value === t.value.value)
  };
}
function Gn(e) {
  const t = d(() => _(e.accordionItemContext?.props)), n = d(() => !!t.value?.disabled);
  function o() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: n,
    handleToggle: o
  };
}
const Pt = /* @__PURE__ */ Symbol("AccordionRootContextKey"), At = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function Dt() {
  return B(Pt, null);
}
function jt() {
  return B(At, null);
}
function qn() {
  const e = Dt(), t = jt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const Yn = /* @__PURE__ */ R({
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
    const n = e, o = t, r = L(e, "modelValue"), { setModelValue: i } = Jn({
      props: () => n,
      modelValue: () => r.value,
      onChange: (s) => o("change", s),
      onChangeModel: (s) => {
        r.value = s;
      }
    });
    return M(Pt, {
      props: () => n,
      modelValue: () => r.value,
      setModelValue: i
    }), (s, a) => (v(), g("div", {
      class: C(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      b(s.$slots, "default")
    ], 2));
  }
}), Hn = /* @__PURE__ */ R({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Dt(), { isActive: o } = Kn({
      accordionRootContext: n,
      props: () => t
    });
    return M(At, {
      props: () => t,
      isActive: () => o.value
    }), (r, i) => (v(), g("div", {
      class: C(["accordion-item", {
        "accordion-item--open": c(o),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      b(r.$slots, "default", { isActive: c(o) })
    ], 2));
  }
}), E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Wn = {}, Qn = { class: "accordion-header" };
function eo(e, t) {
  return v(), g("div", Qn, [
    b(e.$slots, "default")
  ]);
}
const to = /* @__PURE__ */ E(Wn, [["render", eo]]), no = {
  class: "accordion-body",
  role: "region"
}, oo = { class: "accordion-body__content" }, ro = /* @__PURE__ */ R({
  __name: "AccordionBody",
  setup(e) {
    const t = jt(), n = d(() => !!_(t?.isActive));
    return (o, r) => X((v(), g("div", no, [
      U("div", oo, [
        b(o.$slots, "default")
      ])
    ], 512)), [
      [Xe, n.value]
    ]);
  }
}), so = {}, io = { class: "accordion-title" };
function ao(e, t) {
  return v(), g("div", io, [
    b(e.$slots, "default")
  ]);
}
const lo = /* @__PURE__ */ E(so, [["render", ao]]), co = ["disabled"], uo = /* @__PURE__ */ R({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: n } = qn(), { isDisabled: o, handleToggle: r } = Gn({
      accordionRootContext: t,
      accordionItemContext: n
    });
    return (i, s) => (v(), g("button", {
      type: "button",
      disabled: c(o),
      class: "v-accordion-trigger",
      onClick: s[0] || (s[0] = //@ts-ignore
      (...a) => c(r) && c(r)(...a))
    }, [
      b(i.$slots, "default")
    ], 8, co));
  }
}), wc = {
  Root: Yn,
  Item: Hn,
  Header: to,
  Body: ro,
  Title: lo,
  Trigger: uo
};
function fo(e) {
  const t = d(() => _(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const Nt = /* @__PURE__ */ Symbol("FormRootContextKey"), Bt = /* @__PURE__ */ Symbol("FormItemContextKey");
function Mt() {
  return B(Nt, null);
}
function Zt() {
  return B(Bt, null);
}
function J() {
  const e = Mt(), t = Zt(), n = d(() => !!t?.validationStatus.value.isSuccess), o = d(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: n,
    isInvalid: o
  };
}
const po = ["disabled", "type"], mo = /* @__PURE__ */ R({
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
    const t = e, { formRootContext: n, formItemContext: o } = J(), { isDisabled: r } = fo({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return (i, s) => (v(), g("button", {
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
      b(i.$slots, "default")
    ], 10, po));
  }
}), ho = {}, vo = { class: "button-content" };
function go(e, t) {
  return v(), g("span", vo, [
    b(e.$slots, "default")
  ]);
}
const _o = /* @__PURE__ */ E(ho, [["render", go]]), yo = /* @__PURE__ */ R({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (v(), g("div", {
      class: C(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), Cc = {
  Root: mo,
  Content: _o,
  Group: yo
};
function bo() {
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
function $o(e) {
  const t = d(() => _(e.formItems)), n = d(() => t.value.filter((i) => i.isValidatable));
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
function ne(e = !1) {
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
function Ic(e) {
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
function Ro(e, t, n) {
  let o;
  const r = G(e, (a) => {
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
  return Pn(() => {
    i();
  }), {
    stop: i
  };
}
const Lt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), zo = Object.freeze({
  NUMERIC: "numeric",
  TEL: "tel",
  TEXT: "text",
  DECIMAL: "decimal",
  SEARCH: "search",
  EMAIL: "email",
  NONE: "none",
  URL: "url"
}), _e = Object.freeze({
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  PASSWORD: "password"
}), Sc = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Oc = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), kc = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Tc = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Ec = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Vc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), st = Object.freeze({
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
function xo(e) {
  return typeof e == "boolean";
}
function pe(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Pe(e) {
  return e === null;
}
function Ke(e) {
  return !Pe(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function oe(e) {
  return typeof e > "u";
}
function Pc(e) {
  return Pe(e) || oe(e) ? !0 : pe(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ke(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function wo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function ae(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function Co(e) {
  return !Pe(e) && !oe(e) && Ke(e) && !Array.isArray(e);
}
function it(e, t) {
  if (!e || !t.trim())
    return null;
  const n = t.split(".");
  let o = e;
  for (const r of n) {
    if (!Co(o))
      return null;
    o = o[r];
  }
  return o ?? null;
}
function ve(e, t = /* @__PURE__ */ new WeakMap()) {
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
      n.set(ve(r, t), ve(o, t));
    }), n;
  }
  if (e instanceof Set) {
    const n = /* @__PURE__ */ new Set();
    return t.set(e, n), e.forEach((o) => {
      n.add(ve(o, t));
    }), n;
  }
  if (e instanceof ArrayBuffer) {
    const n = e.slice(0);
    return t.set(e, n), n;
  }
  if (wo(e))
    return e;
  if (Array.isArray(e)) {
    const n = [];
    t.set(e, n);
    for (let o = 0; o < e.length; o++)
      n[o] = ve(e[o], t);
    return n;
  }
  if (Ke(e)) {
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
        value: ve(i.value, t)
      }) : Object.defineProperty(n, r, i));
    }
    return n;
  }
  return e;
}
function Ac(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Dc(e, t) {
  const n = {};
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
  return n;
}
function jc(e, t) {
  const n = { ...e };
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && delete n[o];
  return n;
}
function Nc(e) {
  return e ? "true" : "false";
}
function Ge(e, t, n = {}) {
  const {
    noTrailing: o = !1,
    noLeading: r = !1,
    debounceMode: i = void 0
  } = n;
  let s = null, a = !1, l = 0, u = null;
  function f() {
    s && (clearTimeout(s), s = null);
  }
  function h(y = {}) {
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
    f(), !r && i && !s && p.call(this), oe(i) && $ > t ? r ? (l = Date.now(), o || (s = setTimeout(i ? O : p.bind(this), t))) : p.call(this) : o || (s = setTimeout(
      i ? O : p.bind(this),
      oe(i) ? t - $ : t
    ));
  }
  return m.cancel = h, m;
}
function qe(e, t, n = {}) {
  const { atBegin: o = !1 } = n;
  return Ge(e, t, {
    debounceMode: o
  });
}
function Bc(e) {
  return An(e);
}
function Ft(e) {
  return e ? e.flatMap((t) => t.type === K ? Ft(t.children) : [t]) : [];
}
function Mc(e, t, n = {}) {
  const {
    rootMargin: o = st.LAZY_IMAGE.rootMargin,
    threshold: r = st.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: i = !0,
    immediate: s = !1
  } = n, { stop: a } = Ro(e, k, {
    rootMargin: o,
    threshold: r
  }), [l, u] = ne(), [f, h] = ne(), p = V(""), m = V(""), y = V(""), $ = pe(t) ? { src: t } : t;
  function O() {
    if (l.value || f.value)
      return;
    const T = new Image();
    T.src = $.src, $.srcset && (T.srcset = $.srcset), $.sizes && (T.sizes = $.sizes), T.onload = () => {
      p.value = $.src, m.value = $.srcset || "", y.value = $.sizes || "", u(!0), h(!1);
    }, T.onerror = () => {
      u(!1), h(!0);
    };
  }
  function k(T) {
    T.forEach((w) => {
      w.isIntersecting && !l.value && !f.value && O();
    });
  }
  return Te(() => {
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
function Zc() {
  return {};
}
function Lc() {
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
function Fc() {
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
  return Te(() => {
    n(), window.addEventListener("scroll", n);
  }), Ue(() => {
    window.removeEventListener("scroll", n);
  }), {
    x: e,
    y: t,
    setScroll: o
  };
}
function Xc(e, t) {
  (pe(e) ? document.querySelector(e) : Ee(e) ? c(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function Uc(e, t) {
  return {
    listeners: t.reduce((o, r) => {
      const i = r, s = String(i);
      return o[i] = ((...a) => e(s, ...a)), o;
    }, {})
  };
}
function Io(e) {
  const { formItems: t, registerFormItem: n, unregisterFormItem: o } = bo(), { validate: r, clearValidate: i, validatableFormItems: s } = $o({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [a, l] = ne(!1), u = V(!1), f = V("");
  function h() {
    t.value.forEach((y) => y.reset()), i();
  }
  G(s, async (y) => {
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
  const p = qe(async () => {
    const y = await r(!0);
    l(y);
  }, 400);
  async function m(y = !1) {
    const $ = await r(y);
    return l($), $;
  }
  return G(() => _(e.modelValue), () => {
    p();
  }, {
    deep: !0
  }), Te(async () => {
    await Dn(), await m(!0);
  }), Ue(() => {
    p.cancel();
  }), {
    isValid: a,
    validate: m,
    clearValidate: i,
    registerFormItem: n,
    unregisterFormItem: o,
    reset: h
  };
}
function So() {
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
function Oo(e) {
  const t = d(() => _(e.data)), n = d(() => _(e.schema)), o = V({
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
function z(e, t, n) {
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
    for (let h = 0; h < f.length; h++) {
      const p = f[h];
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
const Ut = {};
function re(e) {
  return Ut;
}
function Jt(e) {
  const t = Object.values(e).filter((o) => typeof o == "number");
  return Object.entries(e).filter(([o, r]) => t.indexOf(+o) === -1).map(([o, r]) => r);
}
function Ze(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function Ye(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function He(e) {
  return e == null;
}
function We(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
const at = /* @__PURE__ */ Symbol("evaluating");
function S(e, t, n) {
  let o;
  Object.defineProperty(e, t, {
    get() {
      if (o !== at)
        return o === void 0 && (o = at, o = n()), o;
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
function ie(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function W(...e) {
  const t = {};
  for (const n of e) {
    const o = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, o);
  }
  return Object.defineProperties({}, t);
}
function lt(e) {
  return JSON.stringify(e);
}
const Kt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Se(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const ko = Ye(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function Re(e) {
  if (Se(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(Se(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function Gt(e) {
  return Re(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const To = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Eo(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Q(e, t, n) {
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
function Vo(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function Po(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = W(e._zod.def, {
    get shape() {
      const s = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (s[a] = n.shape[a]);
      }
      return ie(this, "shape", s), s;
    },
    checks: []
  });
  return Q(e, i);
}
function Ao(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = W(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete s[a];
      }
      return ie(this, "shape", s), s;
    },
    checks: []
  });
  return Q(e, i);
}
function Do(e, t) {
  if (!Re(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = e._zod.def.shape;
    for (const s in t)
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const r = W(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return ie(this, "shape", i), i;
    }
  });
  return Q(e, r);
}
function jo(e, t) {
  if (!Re(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = W(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return ie(this, "shape", o), o;
    }
  });
  return Q(e, n);
}
function No(e, t) {
  const n = W(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return ie(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Q(e, n);
}
function Bo(e, t, n) {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = W(t._zod.def, {
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
      return ie(this, "shape", l), l;
    },
    checks: []
  });
  return Q(t, s);
}
function Mo(e, t, n) {
  const o = W(t._zod.def, {
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
      return ie(this, "shape", i), i;
    }
  });
  return Q(t, o);
}
function le(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function qt(e, t) {
  return t.map((n) => {
    var o;
    return (o = n).path ?? (o.path = []), n.path.unshift(e), n;
  });
}
function xe(e) {
  return typeof e == "string" ? e : e?.message;
}
function se(e, t, n) {
  const o = { ...e, path: e.path ?? [] };
  if (!e.message) {
    const r = xe(e.inst?._zod.def?.error?.(e)) ?? xe(t?.error?.(e)) ?? xe(n.customError?.(e)) ?? xe(n.localeError?.(e)) ?? "Invalid input";
    o.message = r;
  }
  return delete o.inst, delete o.continue, t?.reportInput || delete o.input, o;
}
function Qe(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function ze(...e) {
  const [t, n, o] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: o
  } : { ...t };
}
const Yt = (e, t) => {
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
}, Ht = z("$ZodError", Yt), Wt = z("$ZodError", Yt, { Parent: Error });
function Zo(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const r of e.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: n };
}
function Lo(e, t = (n) => n.message) {
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
const et = (e) => (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !1 }) : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new ce();
  if (s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((l) => se(l, i, re())));
    throw Kt(a, r?.callee), a;
  }
  return s.value;
}, tt = (e) => async (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((l) => se(l, i, re())));
    throw Kt(a, r?.callee), a;
  }
  return s.value;
}, Ae = (e) => (t, n, o) => {
  const r = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, r);
  if (i instanceof Promise)
    throw new ce();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Ht)(i.issues.map((s) => se(s, r, re())))
  } : { success: !0, data: i.value };
}, Fo = /* @__PURE__ */ Ae(Wt), De = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => se(s, r, re())))
  } : { success: !0, data: i.value };
}, Xo = /* @__PURE__ */ De(Wt), Uo = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return et(e)(t, n, r);
}, Jo = (e) => (t, n, o) => et(e)(t, n, o), Ko = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return tt(e)(t, n, r);
}, Go = (e) => async (t, n, o) => tt(e)(t, n, o), qo = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ae(e)(t, n, r);
}, Yo = (e) => (t, n, o) => Ae(e)(t, n, o), Ho = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return De(e)(t, n, r);
}, Wo = (e) => async (t, n, o) => De(e)(t, n, o), me = /* @__PURE__ */ z("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Qo = /* @__PURE__ */ z("$ZodCheckMaxLength", (e, t) => {
  var n;
  me.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !He(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < r && (o._zod.bag.maximum = t.maximum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length <= t.maximum)
      return;
    const s = Qe(r);
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
}), er = /* @__PURE__ */ z("$ZodCheckMinLength", (e, t) => {
  var n;
  me.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !He(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > r && (o._zod.bag.minimum = t.minimum);
  }), e._zod.check = (o) => {
    const r = o.value;
    if (r.length >= t.minimum)
      return;
    const s = Qe(r);
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
}), tr = /* @__PURE__ */ z("$ZodCheckLengthEquals", (e, t) => {
  var n;
  me.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !He(r) && r.length !== void 0;
  }), e._zod.onattach.push((o) => {
    const r = o._zod.bag;
    r.minimum = t.length, r.maximum = t.length, r.length = t.length;
  }), e._zod.check = (o) => {
    const r = o.value, i = r.length;
    if (i === t.length)
      return;
    const s = Qe(r), a = i > t.length;
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
}), nr = /* @__PURE__ */ z("$ZodCheckOverwrite", (e, t) => {
  me.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class or {
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
const rr = {
  major: 4,
  minor: 3,
  patch: 6
}, D = /* @__PURE__ */ z("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = rr;
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
      for (const h of a) {
        if (h._zod.def.when) {
          if (!h._zod.def.when(s))
            continue;
        } else if (u)
          continue;
        const p = s.issues.length, m = h._zod.check(s);
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
        const i = Fo(e, r);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Xo(e, r).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), sr = /* @__PURE__ */ z("$ZodUnknown", (e, t) => {
  D.init(e, t), e._zod.parse = (n) => n;
}), ir = /* @__PURE__ */ z("$ZodNever", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function ct(e, t, n) {
  e.issues.length && t.issues.push(...qt(n, e.issues)), t.value[n] = e.value;
}
const ar = /* @__PURE__ */ z("$ZodArray", (e, t) => {
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
      const a = r[s], l = t.element._zod.run({
        value: a,
        issues: []
      }, o);
      l instanceof Promise ? i.push(l.then((u) => ct(u, n, s))) : ct(l, n, s);
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
});
function Oe(e, t, n, o, r) {
  if (e.issues.length) {
    if (r && !(n in o))
      return;
    t.issues.push(...qt(n, e.issues));
  }
  e.value === void 0 ? n in o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function Qt(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const n = Vo(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function en(e, t, n, o, r, i) {
  const s = [], a = r.keySet, l = r.catchall._zod, u = l.def.type, f = l.optout === "optional";
  for (const h in t) {
    if (a.has(h))
      continue;
    if (u === "never") {
      s.push(h);
      continue;
    }
    const p = l.run({ value: t[h], issues: [] }, o);
    p instanceof Promise ? e.push(p.then((m) => Oe(m, n, h, t, f))) : Oe(p, n, h, t, f);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const lr = /* @__PURE__ */ z("$ZodObject", (e, t) => {
  if (D.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
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
  const o = Ye(() => Qt(t));
  S(e._zod, "propValues", () => {
    const a = t.shape, l = {};
    for (const u in a) {
      const f = a[u]._zod;
      if (f.values) {
        l[u] ?? (l[u] = /* @__PURE__ */ new Set());
        for (const h of f.values)
          l[u].add(h);
      }
    }
    return l;
  });
  const r = Se, i = t.catchall;
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
    const f = [], h = s.shape;
    for (const p of s.keys) {
      const m = h[p], y = m._zod.optout === "optional", $ = m._zod.run({ value: u[p], issues: [] }, l);
      $ instanceof Promise ? f.push($.then((O) => Oe(O, a, p, u, y))) : Oe($, a, p, u, y);
    }
    return i ? en(f, u, a, l, o.value, e) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), cr = /* @__PURE__ */ z("$ZodObjectJIT", (e, t) => {
  lr.init(e, t);
  const n = e._zod.parse, o = Ye(() => Qt(t)), r = (p) => {
    const m = new or(["shape", "payload", "ctx"]), y = o.value, $ = (w) => {
      const x = lt(w);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const O = /* @__PURE__ */ Object.create(null);
    let k = 0;
    for (const w of y.keys)
      O[w] = `key_${k++}`;
    m.write("const newResult = {};");
    for (const w of y.keys) {
      const x = O[w], I = lt(w), he = p[w]?._zod?.optout === "optional";
      m.write(`const ${x} = ${$(w)};`), he ? m.write(`
        if (${x}.issues.length) {
          if (${I} in input) {
            payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${I}, ...iss.path] : [${I}]
            })));
          }
        }
        
        if (${x}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${x}.value;
        }
        
      `) : m.write(`
        if (${x}.issues.length) {
          payload.issues = payload.issues.concat(${x}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${I}, ...iss.path] : [${I}]
          })));
        }
        
        if (${x}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${x}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const T = m.compile();
    return (w, x) => T(p, w, x);
  };
  let i;
  const s = Se, a = !Ut.jitless, u = a && ko.value, f = t.catchall;
  let h;
  e._zod.parse = (p, m) => {
    h ?? (h = o.value);
    const y = p.value;
    return s(y) ? a && u && m?.async === !1 && m.jitless !== !0 ? (i || (i = r(t.shape)), p = i(p, m), f ? en([], y, p, m, h, e) : p) : n(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: y,
      inst: e
    }), p);
  };
});
function ut(e, t, n, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const r = e.filter((i) => !le(i));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((i) => i.issues.map((s) => se(s, o, re())))
  }), t);
}
const ur = /* @__PURE__ */ z("$ZodUnion", (e, t) => {
  D.init(e, t), S(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), S(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), S(e._zod, "values", () => {
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
    return s ? Promise.all(a).then((l) => ut(l, r, e, i)) : ut(a, r, e, i);
  };
}), dr = /* @__PURE__ */ z("$ZodIntersection", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => {
    const r = n.value, i = t.left._zod.run({ value: r, issues: [] }, o), s = t.right._zod.run({ value: r, issues: [] }, o);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([l, u]) => dt(n, l, u)) : dt(n, i, s);
  };
});
function Le(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (Re(e) && Re(t)) {
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
function dt(e, t, n) {
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
const fr = /* @__PURE__ */ z("$ZodEnum", (e, t) => {
  D.init(e, t);
  const n = Jt(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((r) => To.has(typeof r)).map((r) => typeof r == "string" ? Eo(r) : r.toString()).join("|")})$`), e._zod.parse = (r, i) => {
    const s = r.value;
    return o.has(s) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), r;
  };
}), pr = /* @__PURE__ */ z("$ZodTransform", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => {
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
function ft(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const tn = /* @__PURE__ */ z("$ZodOptional", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", S(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), S(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${We(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(n, o);
      return r instanceof Promise ? r.then((i) => ft(i, n.value)) : ft(r, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), mr = /* @__PURE__ */ z("$ZodExactOptional", (e, t) => {
  tn.init(e, t), S(e._zod, "values", () => t.innerType._zod.values), S(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), hr = /* @__PURE__ */ z("$ZodNullable", (e, t) => {
  D.init(e, t), S(e._zod, "optin", () => t.innerType._zod.optin), S(e._zod, "optout", () => t.innerType._zod.optout), S(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${We(n.source)}|null)$`) : void 0;
  }), S(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), vr = /* @__PURE__ */ z("$ZodDefault", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => pt(i, t)) : pt(r, t);
  };
});
function pt(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const gr = /* @__PURE__ */ z("$ZodPrefault", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), _r = /* @__PURE__ */ z("$ZodNonOptional", (e, t) => {
  D.init(e, t), S(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((o) => o !== void 0)) : void 0;
  }), e._zod.parse = (n, o) => {
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => mt(i, e)) : mt(r, e);
  };
});
function mt(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const yr = /* @__PURE__ */ z("$ZodCatch", (e, t) => {
  D.init(e, t), S(e._zod, "optin", () => t.innerType._zod.optin), S(e._zod, "optout", () => t.innerType._zod.optout), S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => se(s, o, re()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: r.issues.map((i) => se(i, o, re()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), br = /* @__PURE__ */ z("$ZodPipe", (e, t) => {
  D.init(e, t), S(e._zod, "values", () => t.in._zod.values), S(e._zod, "optin", () => t.in._zod.optin), S(e._zod, "optout", () => t.out._zod.optout), S(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, o) => {
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
const $r = /* @__PURE__ */ z("$ZodReadonly", (e, t) => {
  D.init(e, t), S(e._zod, "propValues", () => t.innerType._zod.propValues), S(e._zod, "values", () => t.innerType._zod.values), S(e._zod, "optin", () => t.innerType?._zod?.optin), S(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then(ht) : ht(r);
  };
});
function ht(e) {
  return e.value = Object.freeze(e.value), e;
}
const Rr = /* @__PURE__ */ z("$ZodCustom", (e, t) => {
  me.init(e, t), D.init(e, t), e._zod.parse = (n, o) => n, e._zod.check = (n) => {
    const o = n.value, r = t.fn(o);
    if (r instanceof Promise)
      return r.then((i) => vt(i, n, o, e));
    vt(r, n, o, e);
  };
});
function vt(e, t, n, o) {
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
    o._zod.def.params && (r.params = o._zod.def.params), t.issues.push(ze(r));
  }
}
var gt;
class zr {
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
function xr() {
  return new zr();
}
(gt = globalThis).__zod_globalRegistry ?? (gt.__zod_globalRegistry = xr());
const ye = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function wr(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
  return new e({
    type: "never",
    ...Z(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t) {
  return new Qo({
    check: "max_length",
    ...Z(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function _t(e, t) {
  return new er({
    check: "min_length",
    ...Z(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function Sr(e, t) {
  return new tr({
    check: "length_equals",
    ...Z(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  return new nr({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function kr(e, t, n) {
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
function Tr(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Z(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Er(e) {
  const t = /* @__PURE__ */ Vr((n) => (n.addIssue = (o) => {
    if (typeof o == "string")
      n.issues.push(ze(o, n.value, t._zod.def));
    else {
      const r = o;
      r.fatal && (r.continue = !1), r.code ?? (r.code = "custom"), r.input ?? (r.input = n.value), r.inst ?? (r.inst = t), r.continue ?? (r.continue = !t._zod.def.abort), n.issues.push(ze(r));
    }
  }, e(n.value, n)));
  return t;
}
// @__NO_SIDE_EFFECTS__
function Vr(e, t) {
  const n = new me({
    check: "custom",
    ...Z(t)
  });
  return n._zod.check = e, n;
}
function nn(e) {
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
    const h = e._zod.parent;
    h && (s.ref || (s.ref = h), j(h, t, f), t.seen.get(h).isParent = !0);
  }
  const l = t.metadataRegistry.get(e);
  return l && Object.assign(s.schema, l), t.io === "input" && N(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && s.schema._prefault && ((o = s.schema).default ?? (o.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function on(e, t) {
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
      const h = e.external.registry.get(s[0])?.id, p = e.external.uri ?? ((y) => y);
      if (h)
        return { ref: p(h) };
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
    for (const h in f)
      delete f[h];
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
function rn(e, t) {
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
    const h = s._zod.parent;
    if (h && h !== f) {
      o(h);
      const p = e.seen.get(h);
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
          input: ke(t, "input", e.processors),
          output: ke(t, "output", e.processors)
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
const Pr = (e, t = {}) => (n) => {
  const o = nn({ ...n, processors: t });
  return j(e, o), on(o, e), rn(o, e);
}, ke = (e, t, n = {}) => (o) => {
  const { libraryOptions: r, target: i } = o ?? {}, s = nn({ ...r ?? {}, target: i, io: t, processors: n });
  return j(e, s), on(s, e), rn(s, e);
}, Ar = (e, t, n, o) => {
  n.not = {};
}, Dr = (e, t, n, o) => {
}, jr = (e, t, n, o) => {
  const r = e._zod.def, i = Jt(r.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Nr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Br = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Mr = (e, t, n, o) => {
  const r = n, i = e._zod.def, { minimum: s, maximum: a } = e._zod.bag;
  typeof s == "number" && (r.minItems = s), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = j(i.element, t, { ...o, path: [...o.path, "items"] });
}, Zr = (e, t, n, o) => {
  const r = n, i = e._zod.def;
  r.type = "object", r.properties = {};
  const s = i.shape;
  for (const u in s)
    r.properties[u] = j(s[u], t, {
      ...o,
      path: [...o.path, "properties", u]
    });
  const a = new Set(Object.keys(s)), l = new Set([...a].filter((u) => {
    const f = i.shape[u]._zod;
    return t.io === "input" ? f.optin === void 0 : f.optout === void 0;
  }));
  l.size > 0 && (r.required = Array.from(l)), i.catchall?._zod.def.type === "never" ? r.additionalProperties = !1 : i.catchall ? i.catchall && (r.additionalProperties = j(i.catchall, t, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : t.io === "output" && (r.additionalProperties = !1);
}, Lr = (e, t, n, o) => {
  const r = e._zod.def, i = r.inclusive === !1, s = r.options.map((a, l) => j(a, t, {
    ...o,
    path: [...o.path, i ? "oneOf" : "anyOf", l]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, Fr = (e, t, n, o) => {
  const r = e._zod.def, i = j(r.left, t, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), s = j(r.right, t, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, l = [
    ...a(i) ? i.allOf : [i],
    ...a(s) ? s.allOf : [s]
  ];
  n.allOf = l;
}, Xr = (e, t, n, o) => {
  const r = e._zod.def, i = j(r.innerType, t, o), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = r.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Ur = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Jr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, Kr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Gr = (e, t, n, o) => {
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
}, qr = (e, t, n, o) => {
  const r = e._zod.def, i = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  j(i, t, o);
  const s = t.seen.get(e);
  s.ref = i;
}, Yr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.readOnly = !0;
}, sn = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Hr = (e, t) => {
  Ht.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Lo(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => Zo(e, n)
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
}, F = z("ZodError", Hr, {
  Parent: Error
}), Wr = /* @__PURE__ */ et(F), Qr = /* @__PURE__ */ tt(F), es = /* @__PURE__ */ Ae(F), ts = /* @__PURE__ */ De(F), ns = /* @__PURE__ */ Uo(F), os = /* @__PURE__ */ Jo(F), rs = /* @__PURE__ */ Ko(F), ss = /* @__PURE__ */ Go(F), is = /* @__PURE__ */ qo(F), as = /* @__PURE__ */ Yo(F), ls = /* @__PURE__ */ Ho(F), cs = /* @__PURE__ */ Wo(F), A = /* @__PURE__ */ z("ZodType", (e, t) => (D.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: ke(e, "input"),
    output: ke(e, "output")
  }
}), e.toJSONSchema = Pr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(W(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, o) => Q(e, n, o), e.brand = () => e, e.register = ((n, o) => (n.add(e, o), e)), e.parse = (n, o) => Wr(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => es(e, n, o), e.parseAsync = async (n, o) => Qr(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => ts(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => ns(e, n, o), e.decode = (n, o) => os(e, n, o), e.encodeAsync = async (n, o) => rs(e, n, o), e.decodeAsync = async (n, o) => ss(e, n, o), e.safeEncode = (n, o) => is(e, n, o), e.safeDecode = (n, o) => as(e, n, o), e.safeEncodeAsync = async (n, o) => ls(e, n, o), e.safeDecodeAsync = async (n, o) => cs(e, n, o), e.refine = (n, o) => e.check(Ns(n, o)), e.superRefine = (n) => e.check(Bs(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ Or(n)), e.optional = () => bt(e), e.exactOptional = () => ws(e), e.nullable = () => $t(e), e.nullish = () => bt($t(e)), e.nonoptional = (n) => Ts(e, n), e.array = () => ms(e), e.or = (n) => _s([e, n]), e.and = (n) => bs(e, n), e.transform = (n) => Rt(e, zs(n)), e.default = (n) => Ss(e, n), e.prefault = (n) => ks(e, n), e.catch = (n) => Vs(e, n), e.pipe = (n) => Rt(e, n), e.readonly = () => Ds(e), e.describe = (n) => {
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
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), us = /* @__PURE__ */ z("ZodUnknown", (e, t) => {
  sr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Dr();
});
function yt() {
  return /* @__PURE__ */ wr(us);
}
const ds = /* @__PURE__ */ z("ZodNever", (e, t) => {
  ir.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ar(e, n, o);
});
function fs(e) {
  return /* @__PURE__ */ Cr(ds, e);
}
const ps = /* @__PURE__ */ z("ZodArray", (e, t) => {
  ar.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Mr(e, n, o, r), e.element = t.element, e.min = (n, o) => e.check(/* @__PURE__ */ _t(n, o)), e.nonempty = (n) => e.check(/* @__PURE__ */ _t(1, n)), e.max = (n, o) => e.check(/* @__PURE__ */ Ir(n, o)), e.length = (n, o) => e.check(/* @__PURE__ */ Sr(n, o)), e.unwrap = () => e.element;
});
function ms(e, t) {
  return /* @__PURE__ */ kr(ps, e, t);
}
const hs = /* @__PURE__ */ z("ZodObject", (e, t) => {
  cr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Zr(e, n, o, r), S(e, "shape", () => t.shape), e.keyof = () => $s(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: yt() }), e.loose = () => e.clone({ ...e._zod.def, catchall: yt() }), e.strict = () => e.clone({ ...e._zod.def, catchall: fs() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Do(e, n), e.safeExtend = (n) => jo(e, n), e.merge = (n) => No(e, n), e.pick = (n) => Po(e, n), e.omit = (n) => Ao(e, n), e.partial = (...n) => Bo(an, e, n[0]), e.required = (...n) => Mo(ln, e, n[0]);
});
function vs(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...Z(t)
  };
  return new hs(n);
}
const gs = /* @__PURE__ */ z("ZodUnion", (e, t) => {
  ur.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Lr(e, n, o, r), e.options = t.options;
});
function _s(e, t) {
  return new gs({
    type: "union",
    options: e,
    ...Z(t)
  });
}
const ys = /* @__PURE__ */ z("ZodIntersection", (e, t) => {
  dr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Fr(e, n, o, r);
});
function bs(e, t) {
  return new ys({
    type: "intersection",
    left: e,
    right: t
  });
}
const Fe = /* @__PURE__ */ z("ZodEnum", (e, t) => {
  fr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (o, r, i) => jr(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (o, r) => {
    const i = {};
    for (const s of o)
      if (n.has(s))
        i[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new Fe({
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
    return new Fe({
      ...t,
      checks: [],
      ...Z(r),
      entries: i
    });
  };
});
function $s(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Fe({
    type: "enum",
    entries: n,
    ...Z(t)
  });
}
const Rs = /* @__PURE__ */ z("ZodTransform", (e, t) => {
  pr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Br(e, n), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new Xt(e.constructor.name);
    n.addIssue = (i) => {
      if (typeof i == "string")
        n.issues.push(ze(i, n.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push(ze(s));
      }
    };
    const r = t.transform(n.value, n);
    return r instanceof Promise ? r.then((i) => (n.value = i, n)) : (n.value = r, n);
  };
});
function zs(e) {
  return new Rs({
    type: "transform",
    transform: e
  });
}
const an = /* @__PURE__ */ z("ZodOptional", (e, t) => {
  tn.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => sn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function bt(e) {
  return new an({
    type: "optional",
    innerType: e
  });
}
const xs = /* @__PURE__ */ z("ZodExactOptional", (e, t) => {
  mr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => sn(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function ws(e) {
  return new xs({
    type: "optional",
    innerType: e
  });
}
const Cs = /* @__PURE__ */ z("ZodNullable", (e, t) => {
  hr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Xr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function $t(e) {
  return new Cs({
    type: "nullable",
    innerType: e
  });
}
const Is = /* @__PURE__ */ z("ZodDefault", (e, t) => {
  vr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Jr(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Ss(e, t) {
  return new Is({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Gt(t);
    }
  });
}
const Os = /* @__PURE__ */ z("ZodPrefault", (e, t) => {
  gr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Kr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function ks(e, t) {
  return new Os({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : Gt(t);
    }
  });
}
const ln = /* @__PURE__ */ z("ZodNonOptional", (e, t) => {
  _r.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ur(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Ts(e, t) {
  return new ln({
    type: "nonoptional",
    innerType: e,
    ...Z(t)
  });
}
const Es = /* @__PURE__ */ z("ZodCatch", (e, t) => {
  yr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Gr(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Vs(e, t) {
  return new Es({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Ps = /* @__PURE__ */ z("ZodPipe", (e, t) => {
  br.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => qr(e, n, o, r), e.in = t.in, e.out = t.out;
});
function Rt(e, t) {
  return new Ps({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const As = /* @__PURE__ */ z("ZodReadonly", (e, t) => {
  $r.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Yr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Ds(e) {
  return new As({
    type: "readonly",
    innerType: e
  });
}
const js = /* @__PURE__ */ z("ZodCustom", (e, t) => {
  Rr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Nr(e, n);
});
function Ns(e, t = {}) {
  return /* @__PURE__ */ Tr(js, e, t);
}
function Bs(e) {
  return /* @__PURE__ */ Er(e);
}
function Ms(e) {
  const t = St(), { field: n, registerField: o, unregisterField: r } = So(), i = d(() => _(e.props)), s = d(() => i.value.name), a = d(() => e.formRootContext?.modelValue.value), l = d(() => e.formRootContext?.props?.rules), u = d(() => s.value && a.value && it(a.value, s.value)), f = d(() => !!(e.formRootContext?.props.disabled || i.value?.disabled)), h = d(() => {
    if (!s.value || !l.value)
      return null;
    const I = it(l.value, s.value);
    return I instanceof A ? I : null;
  }), p = d(() => !!h.value), m = d(() => h.value ? !h.value.safeParse(void 0).success : !1), {
    validationStatus: y,
    validationErrors: $,
    clearValidateErrors: O,
    validate: k
  } = Oo({
    data: () => s.value ? {
      [s.value]: u.value
    } : null,
    schema: () => !s.value || !h.value ? null : vs({
      [s.value]: h.value
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
  const x = qe(() => k(), 300);
  return Je(() => {
    x.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), G(T, (I) => {
    e.formRootContext?.registerFormItem(I);
  }, {
    deep: !0,
    immediate: !0
  }), G(u, () => x()), G(() => y.value.isSuccess, (I) => {
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
const Zs = /* @__PURE__ */ R({
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
      reset: h
    } = Io({
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
        reset: h
      });
    }
    return M(Nt, {
      props: o,
      modelValue: i,
      registerFormItem: a,
      unregisterFormItem: l
    }), t({
      validate: u,
      clearValidate: f,
      reset: h
    }), (m, y) => (v(), g("form", {
      class: C(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: Ot(p, ["prevent"])
    }, [
      b(m.$slots, "default", { isValid: c(s) })
    ], 34));
  }
}), Ls = {
  key: 0,
  class: "form-item__header"
}, Fs = { class: "form-item__body" }, Xs = {
  key: 1,
  class: "form-item__footer"
}, Us = /* @__PURE__ */ R({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: n }) {
    const o = e, r = n, i = kt(), s = Mt(), {
      validationErrors: a,
      validationStatus: l,
      isDisabled: u,
      isRequired: f,
      registerField: h,
      unregisterField: p,
      reset: m,
      validate: y,
      clearValidateErrors: $
    } = Ms({
      formRootContext: s,
      props: () => o,
      onValid: () => {
        r("valid");
      },
      onInvalid: () => {
        r("invalid");
      }
    }), O = Ie("root"), k = d(() => ({
      validationStatus: l.value,
      isRequired: f.value,
      errors: a.value
    }));
    return M(Bt, {
      props: o,
      validationStatus: l,
      validationErrors: a,
      isRequired: f,
      isDisabled: u,
      registerField: h,
      unregisterField: p,
      reset: m,
      validate: y,
      clearValidateErrors: $
    }), t({
      reset: m,
      validate: y,
      clearValidateErrors: $
    }), (T, w) => (v(), g("div", {
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
      i?.header ? (v(), g("div", Ls, [
        b(T.$slots, "header", be($e(k.value)))
      ])) : de("", !0),
      U("div", Fs, [
        b(T.$slots, "default", be($e(k.value)))
      ]),
      i.footer ? (v(), g("div", Xs, [
        b(T.$slots, "footer", be($e(k.value)))
      ])) : de("", !0)
    ], 2));
  }
}), Js = {}, Ks = { class: "form-item-title" };
function Gs(e, t) {
  return v(), g("div", Ks, [
    b(e.$slots, "default")
  ]);
}
const qs = /* @__PURE__ */ E(Js, [["render", Gs]]), Ys = {}, Hs = { class: "form-item-required" };
function Ws(e, t) {
  return v(), g("span", Hs, [
    b(e.$slots, "default", {}, () => [
      t[0] || (t[0] = q(" * ", -1))
    ])
  ]);
}
const Qs = /* @__PURE__ */ E(Ys, [["render", Ws]]), ei = { class: "form-item-errors" }, ti = /* @__PURE__ */ R({
  __name: "FormItemErrors",
  setup(e) {
    const t = Zt(), n = d(() => t?.validationErrors.value ?? []);
    return (o, r) => (v(), g("div", ei, [
      (v(!0), g(K, null, Tt(n.value, (i, s) => (v(), g("div", {
        key: `error-${s}`,
        class: "form-item-errors__item"
      }, te(i.message), 1))), 128))
    ]));
  }
}), Jc = {
  Root: Zs,
  Item: Us,
  ItemTitle: qs,
  ItemRequired: Qs,
  ItemErrors: ti
};
function ni() {
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
function oi(e) {
  const t = d(() => _(e.multiple)), n = d(() => _(e.modelValue)), o = d(() => _(e.options)), r = d(() => o.value.find((s) => s.props.value === n.value)), i = d(() => {
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
function ri(e) {
  const t = d(() => _(e.modelValue)), n = d(() => _(e.props)), { options: o, registerOption: r, unregisterOption: i } = ni(), { activeOption: s, activeOptions: a } = oi({
    multiple: () => !!n.value.multiple,
    options: () => o.value,
    modelValue: () => t.value
  }), [l, u] = ne(), f = d(() => ue(t.value, n.value.multiple) ? t.value.length > 0 : !!t.value), h = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.disabled));
  function p(k) {
    if (!h.value) {
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
    h.value || u(!0);
  }
  function $() {
    h.value || u(!1);
  }
  function O() {
    l.value ? $() : y();
  }
  return Te(() => {
    e.formItemContext?.registerField({
      reset: m
    });
  }), Je(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: s,
    activeOptions: a,
    hasValue: f,
    isOpen: l,
    isDisabled: h,
    open: y,
    close: $,
    toggle: O,
    registerOption: r,
    unregisterOption: i,
    setModelValue: p,
    reset: m
  };
}
function si(e) {
  const t = St(), n = d(() => _(e.selectRootContext?.modelValue)), o = d(() => _(e.props)), r = d(() => !!_(e.selectRootContext?.props)?.multiple), i = d(() => oe(n.value) ? !1 : ue(n.value, r.value) ? n.value.includes(o.value.value) : n.value === o.value.value), s = d(() => !!(_(e.selectRootContext?.isDisabled) || o.value?.disabled)), a = d(() => ({
    id: t,
    props: o.value
  }));
  function l(u) {
    e.selectRootContext?.setModelValue(u), e.selectRootContext?.close();
  }
  return G(a, (u) => {
    e.selectRootContext?.registerOption(u);
  }, {
    deep: !0,
    immediate: !0
  }), Je(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: i,
    isDisabled: s,
    handleChange: l
  };
}
function ii(e) {
  const t = d(() => _(e.selectRootContext?.props)), n = d(() => _(e.selectRootContext?.activeOption)), o = d(() => n.value?.props?.title ?? n.value?.props.value), r = d(() => _(e.selectRootContext?.activeOptions) ?? []), i = d(() => !!_(e.selectRootContext?.hasValue)), s = d(() => oe(e.selectRootContext?.modelValue) ? !1 : ue(_(e.selectRootContext.modelValue), !!t.value?.multiple)), a = d(() => t.value?.placeholder);
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
function ai(e) {
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
const cn = /* @__PURE__ */ Symbol("SelectRootContextKey");
function je() {
  return B(cn, null);
}
const li = {
  mounted() {
  },
  unmounted() {
  }
}, Kc = {
  install(e) {
    e.directive("visible", li);
  }
}, ci = {
  mounted() {
  },
  unmounted() {
  }
}, Gc = {
  install(e) {
    e.directive("loading", ci);
  }
}, un = {
  mounted(e, t) {
    e.clickOutside = (n) => {
      n.target instanceof Element && (e === n.target || e.contains(n.target) || t.value(n, e));
    }, window.addEventListener("click", e.clickOutside);
  },
  unmounted(e) {
    window.removeEventListener("click", e.clickOutside);
  }
}, qc = {
  install(e) {
    e.directive("click-outside", un);
  }
}, ui = {
  mounted() {
  },
  unmounted() {
  }
}, Yc = {
  install(e) {
    e.directive("tooltip", ui);
  }
}, di = ["aria-disabled"], fi = /* @__PURE__ */ R({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = J(), {
      activeOption: u,
      activeOptions: f,
      hasValue: h,
      isOpen: p,
      isDisabled: m,
      open: y,
      close: $,
      toggle: O,
      registerOption: k,
      unregisterOption: T,
      setModelValue: w
    } = ri({
      formRootContext: i,
      formItemContext: s,
      modelValue: () => r.value,
      props: () => n,
      onChangeModel: (x) => {
        r.value = x;
      },
      onChange: (x) => {
        o("change", x);
      },
      onClear: () => {
        o("clear");
      }
    });
    return M(cn, {
      activeOption: () => u.value,
      activeOptions: () => f.value,
      modelValue: () => r.value,
      props: () => n,
      hasValue: () => h.value,
      isOpen: () => p.value,
      isDisabled: () => m.value,
      open: y,
      close: $,
      toggle: O,
      registerOption: k,
      unregisterOption: T,
      setModelValue: w
    }), (x, I) => X((v(), g("div", {
      class: C(["select", {
        "select--disabled": c(m),
        "select--open": c(p),
        "select--filled": c(h),
        "select--invalid": c(l),
        "select--valid": c(a)
      }]),
      "aria-disabled": c(m)
    }, [
      b(x.$slots, "default")
    ], 10, di)), [
      [c(un), c($)]
    ]);
  }
}), pi = /* @__PURE__ */ R({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = je(), { isActive: o, isDisabled: r, handleChange: i } = si({
      selectRootContext: n,
      props: () => t
    });
    return (s, a) => (v(), g("div", {
      class: C(["select-option", {
        "select-option--active": c(o),
        "select-option--disabled": c(r)
      }]),
      onClick: a[0] || (a[0] = (l) => c(i)(e.value))
    }, [
      b(s.$slots, "default", {
        isActive: c(o),
        isDisabled: c(r)
      }, () => [
        q(te(e.title), 1)
      ])
    ], 2));
  }
}), mi = /* @__PURE__ */ R({
  __name: "SelectTrigger",
  setup(e) {
    const t = je(), { open: n, close: o, toggle: r } = ai({
      selectRootContext: t
    });
    return (i, s) => b(i.$slots, "default", {
      open: c(n),
      close: c(o),
      toggle: c(r)
    });
  }
}), hi = { class: "select-dropdown" }, vi = /* @__PURE__ */ R({
  __name: "SelectDropdown",
  setup(e) {
    const t = je(), n = d(() => !!_(t?.isOpen));
    return (o, r) => X((v(), g("div", hi, [
      b(o.$slots, "default")
    ], 512)), [
      [Xe, n.value]
    ]);
  }
}), gi = /* @__PURE__ */ R({
  __name: "SelectValue",
  setup(e) {
    const t = je(), { activeOptionValue: n, activeOptions: o, hasValue: r, isMultiple: i, placeholder: s, toggle: a } = ii({
      selectRootContext: t
    });
    return (l, u) => (v(), g("div", {
      class: "select-value",
      onClick: u[0] || (u[0] = //@ts-ignore
      (...f) => c(a) && c(a)(...f))
    }, [
      b(l.$slots, "default", {}, () => [
        c(r) ? (v(), g(K, { key: 0 }, [
          c(i) ? (v(!0), g(K, { key: 0 }, Tt(c(o), (f) => (v(), g(K, null, [
            q(te(f.props.value), 1)
          ], 64))), 256)) : (v(), g(K, { key: 1 }, [
            q(te(c(n)), 1)
          ], 64))
        ], 64)) : (v(), g(K, { key: 1 }, [
          q(te(c(s)), 1)
        ], 64))
      ])
    ]));
  }
}), dn = 300, fn = 1, pn = 10;
function zt(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function xt(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function wt(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function Ct(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function _i(e) {
  const t = d(() => _(e.props)), n = d(() => t.value?.infiniteScrollOffset ?? pn), o = d(() => t.value?.draggableMultiplier ?? fn), r = d(() => ae(t.value?.debounceDelay) ? t.value.debounceDelay : dn), [i, s] = ne(), [a, l] = ne(), u = V(0), f = V(0), h = V(0), p = V(0);
  function m() {
    l(!1), s(!1);
  }
  const y = qe((w) => {
    e.onScroll?.(w), t.value?.draggable || (h.value = zt(e.scrollbar.value, !!t.value?.vertical), p.value = xt(e.scrollbar.value, !!t.value?.horizontal));
    const x = e.scrollbar.value, I = e.content.value, ee = x ? x.clientHeight : 0, he = x ? x.clientWidth : 0, ot = I ? I.scrollWidth : 0, Ne = I ? I.scrollHeight : 0, Be = h.value + ee, Tn = p.value + he, En = !!(t.value?.vertical && Ne - Be <= n.value), Vn = !!(t.value?.horizontal && ot - Tn <= n.value);
    En && e.onScrollEndY?.(), Vn && e.onScrollEndX?.();
  }, r.value), $ = Ge((w) => {
    if (e.onMousemove?.(w), !t.value?.draggable || !a.value)
      return;
    w.preventDefault(), w.stopPropagation();
    const x = e.scrollbar.value;
    if (!x)
      return;
    const I = !!t.value?.vertical, ee = !!t.value?.horizontal, he = w.pageY - wt(x, I), Ne = (w.pageX - Ct(x, ee) - u.value) * o.value, Be = (he - f.value) * o.value;
    ee && (x.scrollLeft = p.value - Ne), I && (x.scrollTop = h.value - Be);
  }, r.value);
  function O(w) {
    if (e.onMousedown?.(w), !t.value?.draggable)
      return;
    l(!0), s(!0);
    const x = e.scrollbar.value;
    if (x) {
      const I = !!t.value?.vertical, ee = !!t.value?.horizontal;
      f.value = w.pageY - wt(x, I), u.value = w.pageX - Ct(x, ee);
    }
    h.value = zt(e.scrollbar.value, !!t.value?.vertical), p.value = xt(e.scrollbar.value, !!t.value?.horizontal);
  }
  function k(w) {
    e.onMouseleave?.(w), t.value?.draggable && m();
  }
  function T(w) {
    e.onMouseup?.(w), t.value?.draggable && m();
  }
  return Ue(() => {
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
const yi = /* @__PURE__ */ R({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: fn },
    infiniteScrollOffset: { default: pn },
    debounceDelay: { default: dn },
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const n = e, o = t, r = Ie("scrollbar"), i = Ie("content"), {
      isGrabbing: s,
      handleScroll: a,
      handleMousedown: l,
      handleMouseleave: u,
      handleMouseup: f,
      handleMousemove: h
    } = _i({
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
    return (p, m) => (v(), g("div", {
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
      (...y) => c(h) && c(h)(...y))
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
}), bi = {
  Root: yi
}, $i = /* @__PURE__ */ R({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, n) => (v(), fe(c(bi).Root, { class: "select-scrollbar" }, {
      default: H(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Hc = {
  Root: fi,
  Option: pi,
  Trigger: mi,
  Dropdown: vi,
  Value: gi,
  Scrollbar: $i
};
function Ri(e) {
  const t = d(() => _(e.inputRootContext?.props));
  return {
    props: d(() => ({
      disabled: !!_(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function zi(e) {
  const t = d(() => _(e.inputRootContext?.props));
  return {
    props: d(() => ({
      disabled: !!_(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function xi(e) {
  const [t, n] = ne(), o = d(() => _(e.props)), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.loading || o.value?.disabled)), i = d(() => o.value.type === Lt.TEXTAREA), s = d(() => !!_(e.modelValue)?.trim());
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
function mn(e) {
  return {
    modelValue: d({
      get: () => _(e.inputRootContext?.modelValue),
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
function wi(e) {
  const t = d(() => _(e.inputRootContext?.props)), n = d(() => !!t.value?.clearable);
  function o() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: n,
    handleClear: o
  };
}
const hn = /* @__PURE__ */ Symbol("InputRootContextKey");
function nt() {
  return B(hn, null);
}
const Ci = /* @__PURE__ */ R({
  __name: "InputRoot",
  props: /* @__PURE__ */ P({
    type: { default: Lt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: _e.TEXT },
    inputMode: { default: zo.TEXT },
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
    const o = e, r = n, i = L(e, "modelValue"), { formRootContext: s, formItemContext: a, isValid: l, isInvalid: u } = J(), { isDisabled: f, isTextarea: h, hasValue: p, isFocus: m, setFocus: y, setModelValue: $, reset: O } = xi({
      formRootContext: s,
      formItemContext: a,
      modelValue: () => i.value,
      props: () => o,
      onUpdateModelValue: (k) => {
        i.value = k;
      }
    });
    return M(hn, {
      isDisabled: () => f.value,
      props: () => o,
      modelValue: () => i.value,
      setFocus: y,
      setModelValue: $,
      reset: O,
      emit: r
    }), t({
      setFocus: y
    }), (k, T) => (v(), g("div", {
      class: C(["input", {
        "input--focus": c(m),
        "input--textarea": c(h),
        "input--filled": c(p),
        "input--disabled": c(f),
        "input--loading": e.loading,
        "input--invalid": c(u),
        "input--valid": c(l)
      }])
    }, [
      b(k.$slots, "default", {
        isTextarea: c(h),
        isFocus: c(m),
        hasValue: c(p),
        loading: !!e.loading,
        isInvalid: c(u),
        isValid: c(l)
      })
    ], 2));
  }
}), Ii = {}, Si = { class: "input-before" };
function Oi(e, t) {
  return v(), g("div", Si, [
    b(e.$slots, "default")
  ]);
}
const ki = /* @__PURE__ */ E(Ii, [["render", Oi]]), Ti = { class: "input-after" }, Ei = /* @__PURE__ */ R({
  __name: "InputAfter",
  setup(e) {
    const t = nt(), { isClearable: n, handleClear: o } = wi({
      inputRootContext: t
    });
    return (r, i) => (v(), g("div", Ti, [
      b(r.$slots, "default"),
      c(n) ? (v(), g("button", {
        key: 0,
        type: "button",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...s) => c(o) && c(o)(...s))
      }, " × ")) : de("", !0)
    ]));
  }
}), Vi = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Pi = /* @__PURE__ */ R({
  __name: "InputNative",
  setup(e) {
    const t = nt(), { modelValue: n, listeners: o } = mn({
      inputRootContext: t
    }), { props: r } = zi({
      inputRootContext: t
    });
    return (i, s) => X((v(), g("input", Y({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => Ee(n) ? n.value = a : null),
      type: c(r).nativeType,
      inputmode: c(r).inputMode,
      readonly: c(r).readonly,
      disabled: c(r).disabled,
      autocomplete: c(r).autocomplete,
      placeholder: c(r).placeholder,
      class: "input-native"
    }, Ve(c(o), !0)), null, 16, Vi)), [
      [jn, c(n)]
    ]);
  }
}), Ai = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Di = /* @__PURE__ */ R({
  __name: "InputTextarea",
  setup(e) {
    const t = nt(), { modelValue: n, listeners: o } = mn({
      inputRootContext: t
    }), { props: r } = Ri({
      inputRootContext: t
    });
    return (i, s) => X((v(), g("textarea", Y({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => Ee(n) ? n.value = a : null),
      readonly: c(r).readonly,
      disabled: c(r).disabled,
      autocomplete: c(r).autocomplete,
      rows: c(r).rows,
      cols: c(r).cols,
      placeholder: c(r).placeholder,
      class: "input-textarea"
    }, Ve(c(o), !0)), null, 16, Ai)), [
      [Et, c(n)]
    ]);
  }
}), ji = {}, Ni = { class: "input-control" };
function Bi(e, t) {
  return v(), g("div", Ni, [
    b(e.$slots, "default")
  ]);
}
const Mi = /* @__PURE__ */ E(ji, [["render", Bi]]), Zi = {}, Li = { class: "input-group" };
function Fi(e, t) {
  return v(), g("div", Li, [
    b(e.$slots, "default")
  ]);
}
const Xi = /* @__PURE__ */ E(Zi, [["render", Fi]]), Ui = {}, Ji = { class: "input-group-addon" };
function Ki(e, t) {
  return v(), g("div", Ji, [
    b(e.$slots, "default")
  ]);
}
const Gi = /* @__PURE__ */ E(Ui, [["render", Ki]]), ge = {
  Root: Ci,
  Before: ki,
  After: Ei,
  Native: Pi,
  Textarea: Di,
  Control: Mi,
  Group: Xi,
  GroupAddon: Gi
}, vn = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function qi() {
  return B(vn, null);
}
function Yi(e) {
  const t = d(() => _(e.props)), n = d(() => _(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), r = d(() => xo(n.value) ? n.value : t.value.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : !1), i = d(() => !!(r.value || t.value?.checked)), s = d(() => !!t.value?.indeterminate);
  return {
    isActive: r,
    isDisabled: o,
    isChecked: i,
    isIndeterminate: s
  };
}
function Hi(e) {
  const t = d(() => !!_(e.checkboxRootContext?.isDisabled)), n = d(() => !!_(e.checkboxRootContext?.isActive)), o = d(() => !!_(e.checkboxRootContext?.isIndeterminate)), r = d(() => !!_(e.checkboxRootContext?.isValid)), i = d(() => !!_(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isIndeterminate: o,
    isValid: r,
    isInvalid: i
  };
}
const Wi = ["value", "disabled", "checked"], Qi = /* @__PURE__ */ R({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = J(), { isChecked: u, isDisabled: f, isIndeterminate: h } = Yi({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    }), p = Ie("inputRef");
    return G([p, h], ([m, y]) => {
      m && (m.indeterminate = !!y);
    }, {
      immediate: !0
    }), M(vn, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => u.value,
      isDisabled: () => f.value,
      isIndeterminate: () => h.value,
      isValid: () => a.value,
      isInvalid: () => l.value
    }), (m, y) => (v(), g("label", {
      class: C(["checkbox", {
        "checkbox--disabled": c(f),
        "checkbox--active": c(u),
        "checkbox--indeterminate": c(h),
        "checkbox--invalid": c(l),
        "checkbox--valid": c(a)
      }])
    }, [
      X(U("input", Y({
        ref_key: "inputRef",
        ref: p,
        "onUpdate:modelValue": y[0] || (y[0] = ($) => r.value = $),
        value: e.value,
        type: "checkbox",
        disabled: c(f),
        checked: c(u),
        class: "checkbox__input"
      }, Ve(o, !0)), null, 16, Wi), [
        [Vt, r.value]
      ]),
      b(m.$slots, "default")
    ], 2));
  }
}), ea = /* @__PURE__ */ R({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = qi(), { isDisabled: n, isActive: o, isIndeterminate: r, isValid: i, isInvalid: s } = Hi({
      checkboxRootContext: t
    });
    return (a, l) => (v(), g("span", {
      class: C(["checkbox-indicator", {
        "checkbox-indicator--disabled": c(n),
        "checkbox-indicator--active": c(o),
        "checkbox-indicator--indeterminate": c(r),
        "checkbox-indicator--valid": c(i),
        "checkbox-indicator--invalid": c(s)
      }])
    }, [
      b(a.$slots, "default", {
        isDisabled: c(n),
        isActive: c(o),
        isIndeterminate: c(r),
        isValid: c(i),
        isInvalid: c(s)
      }, () => [
        q(te(c(o) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), ta = {}, na = { class: "checkbox-title" };
function oa(e, t) {
  return v(), g("span", na, [
    b(e.$slots, "default")
  ]);
}
const ra = /* @__PURE__ */ E(ta, [["render", oa]]), sa = /* @__PURE__ */ R({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (v(), g("div", {
      class: C(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), Wc = {
  Root: Qi,
  Indicator: ea,
  Title: ra,
  Group: sa
};
function ia(e) {
  const t = d(() => _(e.props)), n = d(() => _(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: d(() => n.value === t.value.value),
    isDisabled: o
  };
}
function aa(e) {
  const t = d(() => !!_(e.radioRootContext?.isDisabled)), n = d(() => !!_(e.radioRootContext?.isActive)), o = d(() => !!_(e.radioRootContext?.isValid)), r = d(() => !!_(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const gn = /* @__PURE__ */ Symbol("RadioRootContextKey");
function la() {
  return B(gn, null);
}
const ca = ["value", "disabled"], ua = /* @__PURE__ */ R({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = J(), { isActive: u, isDisabled: f } = ia({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    });
    return M(gn, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => u.value,
      isDisabled: () => f.value,
      isValid: () => a.value,
      isInvalid: () => l.value
    }), (h, p) => (v(), g("label", {
      class: C(["radio", {
        "radio--disabled": c(f),
        "radio--active": c(u),
        "radio--invalid": c(l),
        "radio--valid": c(a)
      }])
    }, [
      X(U("input", Y({
        "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
        value: e.value,
        type: "radio",
        disabled: c(f),
        class: "radio__input"
      }, Ve(o, !0)), null, 16, ca), [
        [Nn, r.value]
      ]),
      b(h.$slots, "default")
    ], 2));
  }
}), da = /* @__PURE__ */ R({
  __name: "RadioIndicator",
  setup(e) {
    const t = la(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = aa({
      radioRootContext: t
    });
    return (s, a) => (v(), g("span", {
      class: C(["radio-indicator", {
        "radio-indicator--disabled": c(n),
        "radio-indicator--active": c(o),
        "radio-indicator--valid": c(r),
        "radio-indicator--invalid": c(i)
      }])
    }, [
      b(s.$slots, "default", {
        isDisabled: c(n),
        isActive: c(o),
        isValid: c(r),
        isInvalid: c(i)
      }, () => [
        q(te(c(o) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), fa = {}, pa = { class: "radio-title" };
function ma(e, t) {
  return v(), g("span", pa, [
    b(e.$slots, "default")
  ]);
}
const ha = /* @__PURE__ */ E(fa, [["render", ma]]), va = /* @__PURE__ */ R({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (v(), g("div", {
      class: C(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), Qc = {
  Root: ua,
  Indicator: da,
  Title: ha,
  Group: va
};
function ga(e) {
  const t = d(() => _(e.props)), n = d(() => _(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: n,
    isDisabled: o
  };
}
function _a(e) {
  const t = d(() => !!_(e.switchRootContext?.isDisabled)), n = d(() => !!_(e.switchRootContext?.isActive)), o = d(() => !!_(e.switchRootContext?.isValid)), r = d(() => !!_(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const _n = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function ya() {
  return B(_n, null);
}
const ba = { class: "switch" }, $a = ["disabled"], Ra = /* @__PURE__ */ R({
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
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = J(), { isDisabled: a, isActive: l } = ga({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value
    });
    return M(_n, {
      props: () => t,
      isActive: () => l.value,
      isDisabled: () => a.value,
      isValid: () => i.value,
      isInvalid: () => s.value
    }), (u, f) => (v(), g("label", ba, [
      X(U("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (h) => n.value = h),
        type: "checkbox",
        disabled: c(a),
        class: "switch__input"
      }, null, 8, $a), [
        [Vt, n.value]
      ]),
      b(u.$slots, "default")
    ]));
  }
}), za = /* @__PURE__ */ R({
  __name: "SwitchIndicator",
  setup(e) {
    const t = ya(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = _a({
      switchRootContext: t
    });
    return (s, a) => (v(), g("span", {
      class: C(["switch-indicator", {
        "switch-indicator--disabled": c(n),
        "switch-indicator--active": c(o),
        "switch-indicator--valid": c(r),
        "switch-indicator--invalid": c(i)
      }])
    }, null, 2));
  }
}), xa = {}, wa = { class: "switch-title" };
function Ca(e, t) {
  return v(), g("span", wa, [
    b(e.$slots, "default")
  ]);
}
const Ia = /* @__PURE__ */ E(xa, [["render", Ca]]), eu = {
  Root: Ra,
  Indicator: za,
  Title: Ia
}, yn = 1, Sa = -1 / 0, Oa = 1 / 0, ka = 100, bn = 0, It = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Ta(e) {
  const t = d(() => _(e.props)), n = d(() => _(e.modelValue)), o = d(() => t.value.step || yn), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), i = d(() => r.value || ae(t.value.min) && n.value === t.value.min), s = d(() => r.value || ae(t.value.max) && !(n.value < t.value.max));
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
function Ea(e) {
  const t = d(() => _(e.mousewheel)), n = d(() => ae(t.value) && t.value > 0 ? t.value : ka);
  return {
    handleWheel: Ge((r) => {
      t.value && (r.preventDefault(), r.stopImmediatePropagation(), r.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, n.value)
  };
}
function Va(e) {
  const t = d(() => _(e.inputNumberRootContext?.props)), n = d({
    get: () => _(e.inputNumberRootContext?.modelValue) ?? bn,
    set(r) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(r);
    }
  });
  return {
    props: d(() => ({
      step: _(e.inputNumberRootContext?.step),
      disabled: _(e.inputNumberRootContext?.isDisabled),
      min: t.value?.min,
      max: t.value?.max,
      readonly: t.value?.readonly,
      placeholder: t.value?.placeholder,
      autocomplete: t.value?.autocomplete
    })),
    modelValue: n
  };
}
function Pa(e) {
  const t = d(() => _(e.props)), n = d(() => t.value.action === It.DECREMENT), o = d(() => t.value.action === It.INCREMENT), r = d(() => n.value ? !!_(e.inputNumberRootContext?.isDecrementDisabled) : !!_(e.inputNumberRootContext?.isIncrementDisabled));
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
const $n = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function Rn() {
  return B($n, null);
}
const Aa = /* @__PURE__ */ R({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ P({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Sa },
    max: { default: Oa },
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
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = J(), {
      step: a,
      isDisabled: l,
      isDecrementDisabled: u,
      isIncrementDisabled: f,
      handleDecrement: h,
      handleIncrement: p,
      setModelValue: m
    } = Ta({
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
    return M($n, {
      props: () => t,
      isDisabled: () => l.value,
      modelValue: () => n.value,
      step: () => a.value,
      isDecrementDisabled: () => u.value,
      isIncrementDisabled: () => f.value,
      handleDecrement: h,
      handleIncrement: p,
      setModelValue: m
    }), (y, $) => (v(), g("div", {
      class: C(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": c(s),
        "input-number--valid": c(i)
      }])
    }, [
      b(y.$slots, "default")
    ], 2));
  }
}), Da = { class: "input-number-input" }, ja = /* @__PURE__ */ R({
  __name: "InputNumberInput",
  setup(e) {
    const t = Rn(), { props: n, modelValue: o } = Va({
      inputNumberRootContext: t
    }), { handleWheel: r } = Ea({
      mousewheel: () => _(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (i, s) => (v(), g("div", Da, [
      X(U("input", Y({
        "onUpdate:modelValue": s[0] || (s[0] = (a) => Ee(o) ? o.value = a : null),
        type: "number",
        class: "input-number-input__native"
      }, c(n), {
        onWheel: s[1] || (s[1] = //@ts-ignore
        (...a) => c(r) && c(r)(...a))
      }), null, 16), [
        [
          Et,
          c(o),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), Na = ["disabled"], Ba = /* @__PURE__ */ R({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, n = Rn(), { handleAction: o, isDisabled: r, isDecrement: i, isIncrement: s } = Pa({
      inputNumberRootContext: n,
      props: () => t
    });
    return (a, l) => (v(), g("button", {
      class: C(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: c(r),
      type: "button",
      onClick: l[0] || (l[0] = //@ts-ignore
      (...u) => c(o) && c(o)(...u))
    }, [
      b(a.$slots, "default", {}, () => [
        c(i) ? (v(), g(K, { key: 0 }, [
          q(" - ")
        ], 64)) : c(s) ? (v(), g(K, { key: 1 }, [
          q(" + ")
        ], 64)) : de("", !0)
      ])
    ], 10, Na));
  }
}), tu = {
  Root: Aa,
  Input: ja,
  Button: Ba
};
function Ma() {
  const e = V(_e.PASSWORD);
  function t() {
    e.value === _e.PASSWORD ? e.value = _e.TEXT : e.value = _e.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Za = /* @__PURE__ */ R({
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
    const t = e, n = kt(), o = L(e, "modelValue"), { currentType: r, handleToggleType: i } = Ma();
    return (s, a) => (v(), fe(c(ge).Root, Y(t, {
      modelValue: o.value,
      "onUpdate:modelValue": a[1] || (a[1] = (l) => o.value = l),
      "native-type": c(r)
    }), {
      default: H((l) => [
        n?.before ? (v(), fe(c(ge).Before, { key: 0 }, {
          default: H(() => [
            b(s.$slots, "before", be($e(l)))
          ]),
          _: 2
        }, 1024)) : de("", !0),
        Ce(c(ge).Control, null, {
          default: H(() => [
            Ce(c(ge).Native)
          ]),
          _: 1
        }),
        Ce(c(ge).After, null, {
          default: H(() => [
            b(s.$slots, "after", be($e(l)), () => [
              U("button", {
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
}), nu = {
  Root: Za
};
function La(e) {
  const t = d(() => _(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Fa(e) {
  return {
    isDisabled: d(() => {
      const n = e.inputCodeRootContext;
      return n ? !!_(n.isDisabled) : !1;
    })
  };
}
const zn = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function Xa() {
  return B(zn, null);
}
const Ua = /* @__PURE__ */ R({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = J(), { isDisabled: s } = La({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(zn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, l) => (v(), g("div", {
      class: C(["input-code", {
        "input-code--disabled": c(s),
        "input-code--invalid": c(i),
        "input-code--valid": c(r)
      }])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), Ja = ["disabled", "aria-disabled"], Ka = /* @__PURE__ */ R({
  __name: "InputCodePin",
  setup(e) {
    const t = Xa(), { isDisabled: n } = Fa({
      inputCodeRootContext: t
    });
    return (o, r) => (v(), g("input", {
      type: "text",
      disabled: c(n),
      "aria-disabled": c(n),
      class: "input-code-pin"
    }, null, 8, Ja));
  }
}), ou = {
  Root: Ua,
  Pin: Ka
}, xn = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function wn() {
  return B(xn, null);
}
function Ga(e) {
  const t = d(() => _(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function qa(e) {
  function t(o) {
  }
  function n(o) {
  }
  return {
    handleEnter: t,
    handleTab: n
  };
}
const Ya = /* @__PURE__ */ R({
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
    const n = e, o = L(e, "modelValue"), { formRootContext: r, formItemContext: i, isValid: s, isInvalid: a } = J(), { isDisabled: l } = Ga({
      formRootContext: r,
      formItemContext: i,
      props: () => n
    });
    return M(xn, {
      props: () => n,
      modelValue: () => o.value,
      isDisabled: () => l.value
    }), (u, f) => (v(), g("div", {
      class: C(["input-tags", {
        "input-tags--disabled": c(l),
        "input-tags--invalid": c(a),
        "input-tags--valid": c(s)
      }])
    }, [
      b(u.$slots, "default")
    ], 2));
  }
}), Ha = { class: "input-tags-input" }, Wa = /* @__PURE__ */ R({
  __name: "InputTagsInput",
  setup(e) {
    wn();
    const { handleEnter: t, handleTab: n } = qa();
    return (o, r) => (v(), g("div", Ha, [
      U("input", {
        type: "text",
        onKeydown: [
          r[0] || (r[0] = rt(
            //@ts-ignore
            (...i) => c(t) && c(t)(...i),
            ["enter"]
          )),
          r[1] || (r[1] = rt(
            //@ts-ignore
            (...i) => c(n) && c(n)(...i),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), Qa = { class: "input-tags-tags" }, el = /* @__PURE__ */ R({
  __name: "InputTagsTags",
  setup(e) {
    return wn(), (t, n) => (v(), g("div", Qa));
  }
}), ru = {
  Root: Ya,
  Input: Wa,
  Tags: el
};
function tl(e) {
  const t = d(() => _(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function nl(e) {
  return {
    isDisabled: d(() => !!_(e.inputRangeRootContext?.isDisabled))
  };
}
const Cn = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function ol() {
  return B(Cn, null);
}
const rl = /* @__PURE__ */ R({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = J(), { isDisabled: s } = tl({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(Cn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, l) => (v(), g("div", {
      class: C(["input-range", {
        "input-range--disabled": c(s),
        "input-range--invalid": c(i),
        "input-range--valid": c(r)
      }])
    }, [
      b(a.$slots, "default")
    ], 2));
  }
}), sl = ["aria-disabled"], il = /* @__PURE__ */ R({
  __name: "InputRangeSlider",
  setup(e) {
    const t = ol(), { isDisabled: n } = nl({
      inputRangeRootContext: t
    });
    return (o, r) => (v(), g("div", {
      class: "input-range-slider",
      "aria-disabled": c(n)
    }, null, 8, sl));
  }
}), su = {
  Root: rl,
  Slider: il
}, In = /* @__PURE__ */ Symbol("ModalRootContextKey");
function Sn() {
  return B(In, null);
}
function al(e) {
  const t = d(() => _(e.configProviderRootContext?.props)), n = d(() => _(e.modelValue)), o = d(() => t.value?.teleportTarget);
  function r() {
    e.onClose?.();
  }
  return G(n, (i) => {
    i && e.onOpen?.();
  }), {
    close: r,
    teleportTarget: o
  };
}
function ll(e) {
  function t() {
    e.modalRootContext?.close();
  }
  return {
    close: t
  };
}
function cl(e) {
  const t = d(() => _(e.modalRootContext?.props));
  return {
    position: d(() => t.value?.position)
  };
}
const On = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey"), kn = "body";
function ul() {
  return B(On, {
    props: () => ({
      teleportTarget: kn
    }),
    t: () => ""
  });
}
function dl(e) {
  const t = d(() => _(e.props));
  function n(o) {
    if (!t.value?.locale)
      return "";
    const r = o.split(".");
    let i = t.value.locale;
    for (const s of r) {
      if (oe(i) || Pe(i) || pe(i))
        return o;
      i = i[s];
    }
    return pe(i) ? i : o;
  }
  return {
    t: n
  };
}
const fl = /* @__PURE__ */ R({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: { default: () => kn },
    direction: {}
  },
  setup(e) {
    const t = e, { t: n } = dl({
      props: () => t
    });
    return M(On, {
      props: () => t,
      t: n
    }), (o, r) => b(o.$slots, "default");
  }
}), iu = {
  Root: fl
}, pl = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "ModalRoot",
  props: /* @__PURE__ */ P({
    position: {},
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ P(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = t, r = L(e, "modelValue"), i = Bn(), s = ul(), { close: a, teleportTarget: l } = al({
      configProviderRootContext: s,
      modelValue: r,
      props: n,
      onClose: () => {
        r.value = !1, o("close");
      },
      onOpen: () => {
        o("open");
      }
    });
    return M(In, {
      props: n,
      close: a
    }), (u, f) => (v(), fe(Mn, {
      to: c(l),
      disabled: !e.appendToBody
    }, [
      Ce(Zn, {
        name: "fade-in-down",
        onAfterEnter: f[1] || (f[1] = (h) => o("opened", h)),
        onAfterLeave: f[2] || (f[2] = (h) => o("closed", h))
      }, {
        default: H(() => [
          X(U("div", Y({ class: "modal" }, c(i), {
            class: {
              "modal--open": r.value,
              [`modal--size-${e.size}`]: e.size
            },
            onClick: f[0] || (f[0] = //@ts-ignore
            (...h) => c(a) && c(a)(...h))
          }), [
            b(u.$slots, "default")
          ], 16), [
            [Xe, r.value]
          ])
        ]),
        _: 3
      })
    ], 8, ["to", "disabled"]));
  }
}), ml = {}, hl = { class: "modal-body" };
function vl(e, t) {
  return v(), g("div", hl, [
    b(e.$slots, "default")
  ]);
}
const gl = /* @__PURE__ */ E(ml, [["render", vl]]), _l = /* @__PURE__ */ R({
  __name: "ModalClose",
  setup(e) {
    const t = Sn(), { close: n } = ll({
      modalRootContext: t
    });
    return (o, r) => (v(), g("button", {
      type: "button",
      class: "modal-close",
      onClick: r[0] || (r[0] = //@ts-ignore
      (...i) => c(n) && c(n)(...i))
    }, [
      b(o.$slots, "default")
    ]));
  }
}), yl = {}, bl = { class: "modal-header" };
function $l(e, t) {
  return v(), g("div", bl, [
    b(e.$slots, "default")
  ]);
}
const Rl = /* @__PURE__ */ E(yl, [["render", $l]]), zl = {}, xl = { class: "modal-footer" };
function wl(e, t) {
  return v(), g("div", xl, [
    b(e.$slots, "default")
  ]);
}
const Cl = /* @__PURE__ */ E(zl, [["render", wl]]), Il = {}, Sl = { class: "modal-title" };
function Ol(e, t) {
  return v(), g("div", Sl, [
    b(e.$slots, "default")
  ]);
}
const kl = /* @__PURE__ */ E(Il, [["render", Ol]]), Tl = {}, El = { class: "modal-content" };
function Vl(e, t) {
  return v(), g("div", El, [
    b(e.$slots, "default")
  ]);
}
const Pl = /* @__PURE__ */ E(Tl, [["render", Vl]]), Al = /* @__PURE__ */ R({
  __name: "ModalDialog",
  setup(e) {
    const t = Sn(), { position: n } = cl({
      modalRootContext: t
    });
    return (o, r) => (v(), g("div", {
      class: C(["modal-dialog", {
        [`modal-dialog--position-${c(n)}`]: c(n)
      }]),
      role: "dialog",
      onClick: r[0] || (r[0] = Ot(() => {
      }, ["stop"]))
    }, [
      b(o.$slots, "default")
    ], 2));
  }
}), au = {
  Root: pl,
  Body: gl,
  Close: _l,
  Header: Rl,
  Footer: Cl,
  Title: kl,
  Content: Pl,
  Dialog: Al
};
function Dl(e) {
  const t = d(() => _(e.props));
  function n() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: n
  };
}
const jl = /* @__PURE__ */ R({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const n = e, o = t, { handleDelete: r } = Dl({
      props: () => n,
      onDelete(i) {
        o("delete", i);
      }
    });
    return (i, s) => (v(), g("div", {
      class: C(["tag", {
        [`tag--size-${e.size}`]: e.size,
        [`tag--theme-${e.theme}`]: e.theme
      }])
    }, [
      b(i.$slots, "default"),
      e.canDelete ? (v(), g("button", {
        key: 0,
        type: "button",
        onClick: s[0] || (s[0] = //@ts-ignore
        (...a) => c(r) && c(r)(...a))
      }, " X ")) : de("", !0)
    ], 2));
  }
}), Nl = /* @__PURE__ */ R({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (v(), g("div", {
      class: C(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), lu = {
  Root: jl,
  Group: Nl
}, Bl = { class: "layout" }, Ml = /* @__PURE__ */ R({
  __name: "LayoutRoot",
  setup(e) {
    return (t, n) => (v(), g("div", Bl, [
      b(t.$slots, "header"),
      b(t.$slots, "default"),
      b(t.$slots, "footer")
    ]));
  }
}), Zl = {}, Ll = { class: "layout-body" };
function Fl(e, t) {
  return v(), g("main", Ll, [
    b(e.$slots, "default")
  ]);
}
const Xl = /* @__PURE__ */ E(Zl, [["render", Fl]]), cu = {
  Root: Ml,
  Body: Xl
}, Ul = /* @__PURE__ */ R({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, n) => (v(), g("div", {
      class: C(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), Jl = /* @__PURE__ */ R({
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
    return (t, n) => (v(), g("div", {
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
      b(t.$slots, "default")
    ], 2));
  }
}), Kl = /* @__PURE__ */ R({
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
    return (t, n) => (v(), g("div", {
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
      b(t.$slots, "default")
    ], 2));
  }
}), Gl = /* @__PURE__ */ R({
  __name: "FlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    return (t, n) => (v(), g("div", {
      class: C(["flex-item", {
        [`flex-item--flex-${e.flex}`]: e.flex
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), ql = {
  Root: Kl,
  Item: Gl
}, Yl = /* @__PURE__ */ R({
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
    const t = Ln(e, ["guttersY", "guttersX", "wrap"]);
    return (n, o) => (v(), fe(c(ql).Root, Y(t, {
      wrap: e.wrap,
      class: ["row", {
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }]
    }), {
      default: H(() => [
        b(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["wrap", "class"]));
  }
}), uu = {
  Container: Ul,
  Row: Yl,
  Col: Jl
}, Hl = { class: "section" }, Wl = /* @__PURE__ */ R({
  __name: "SectionRoot",
  setup(e) {
    return (t, n) => (v(), g("section", Hl, [
      b(t.$slots, "default")
    ]));
  }
}), Ql = {}, ec = { class: "section-header" };
function tc(e, t) {
  return v(), g("header", ec, [
    b(e.$slots, "default")
  ]);
}
const nc = /* @__PURE__ */ E(Ql, [["render", tc]]), oc = {}, rc = { class: "section-title" };
function sc(e, t) {
  return v(), g("h1", rc, [
    b(e.$slots, "default")
  ]);
}
const ic = /* @__PURE__ */ E(oc, [["render", sc]]), ac = {}, lc = { class: "section-footer" };
function cc(e, t) {
  return v(), g("footer", lc, [
    b(e.$slots, "default")
  ]);
}
const uc = /* @__PURE__ */ E(ac, [["render", cc]]), dc = {}, fc = { class: "section-body" };
function pc(e, t) {
  return v(), g("div", fc, [
    b(e.$slots, "default")
  ]);
}
const mc = /* @__PURE__ */ E(dc, [["render", pc]]), du = {
  Root: Wl,
  Header: nc,
  Title: ic,
  Footer: uc,
  Body: mc
}, hc = /* @__PURE__ */ R({
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
    return (t, n) => (v(), fe(Fn(e.tag), {
      class: C(["text", {
        "text--uppercase": e.uppercase,
        "text--underline": e.underline,
        [`text--size-${e.size}`]: e.size,
        [`text--theme-${e.theme}`]: e.theme,
        [`text--weight-${e.weight}`]: e.weight
      }])
    }, {
      default: H(() => [
        b(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fu = {
  Root: hc
}, vc = /* @__PURE__ */ R({
  __name: "DividerRoot",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, n) => (v(), g("div", {
      class: C(["divider", {
        [`divider--direction-${e.direction}`]: e.direction
      }])
    }, [
      b(t.$slots, "default")
    ], 2));
  }
}), gc = {}, _c = { class: "divider-content" };
function yc(e, t) {
  return v(), g("div", _c, [
    b(e.$slots, "default")
  ]);
}
const bc = /* @__PURE__ */ E(gc, [["render", yc]]), pu = {
  Root: vc,
  Content: bc
}, $c = R({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      if (!n.default)
        return null;
      const o = Ft(n.default()), r = o.findIndex((l) => l.type !== Xn);
      if (r === -1)
        return o;
      const i = o[r];
      delete i.props?.ref;
      const s = i.props ? Y(t, i.props) : t, a = Un({
        ...i,
        props: {}
      }, s);
      return o.length === 1 ? a : (o[r] = a, o);
    };
  }
}), Rc = [
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
], zc = R({
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
    return pe(o) && Rc.includes(o) ? () => Me(o, t) : o !== "template" ? () => Me(e.as, t, {
      default: n.default
    }) : () => Me($c, t, {
      default: n.default
    });
  }
}), mu = {
  Root: zc
}, hu = {};
export {
  wc as Accordion,
  Cc as Button,
  Wc as Checkbox,
  qc as ClickOutsidePlugin,
  iu as ConfigProvider,
  On as ConfigProviderRootContextKey,
  kc as Direction,
  pu as Divider,
  ql as Flex,
  Ec as FlexAlign,
  Vc as FlexJustify,
  Jc as Form,
  uu as Grid,
  It as INPUT_NUMBER_ACTIONS,
  Oa as INPUT_NUMBER_MAX,
  Sa as INPUT_NUMBER_MIN,
  yn as INPUT_NUMBER_STEP,
  bn as INPUT_NUMBER_VALUE_DEFAULT,
  ka as INPUT_NUMBER_WHEEL_DELAY,
  ge as Input,
  ou as InputCode,
  zo as InputModes,
  _e as InputNativeTypes,
  tu as InputNumber,
  nu as InputPassword,
  su as InputRange,
  ru as InputTags,
  Lt as InputTypes,
  st as IntersectionPresets,
  cu as Layout,
  Gc as LoadingPlugin,
  au as Modal,
  Tc as Position,
  mu as Primitive,
  Qc as Radio,
  bi as Scrollbar,
  du as Section,
  Hc as Select,
  Oc as Sizes,
  eu as Switch,
  lu as Tag,
  fu as Text,
  Sc as Themes,
  Yc as TooltipPlugin,
  Kc as VisiblePlugin,
  Nc as booleanToBooleanish,
  ve as clone,
  qe as debounce,
  Bc as defineFormRules,
  Ac as delay,
  it as getProp,
  xo as isBoolean,
  Pc as isEmpty,
  wo as isFunction,
  Pe as isNull,
  ae as isNumber,
  Ke as isObject,
  pe as isString,
  oe as isUndefined,
  jc as omit,
  Dc as pick,
  Ft as renderSlotFragments,
  hu as ruRU,
  Ge as throttle,
  Kn as useAccordionItem,
  Jn as useAccordionRoot,
  Gn as useAccordionTrigger,
  Lc as useAnimatedNumber,
  Zc as useClipboard,
  ul as useConfigProviderRootContext,
  Uc as useEmitProxy,
  Ms as useFormItem,
  Io as useFormRoot,
  Ro as useIntersectionObserver,
  Mc as useLoadImage,
  Ic as usePlural,
  Xc as useScrollTo,
  ne as useToggle,
  Fc as useWindowScroll,
  un as vClickOutside,
  ci as vLoading,
  ui as vTooltip,
  li as vVisible
};
