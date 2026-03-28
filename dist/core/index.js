import { computed as d, toValue as y, inject as B, defineComponent as R, mergeModels as P, useModel as L, provide as M, createElementBlock as g, openBlock as v, normalizeClass as C, renderSlot as _, unref as c, withDirectives as X, createElementVNode as U, vShow as Xe, markRaw as Pn, Fragment as K, Comment as An, mergeProps as W, cloneVNode as Dn, h as Me, createBlock as ne, withCtx as G, ref as V, watch as q, onBeforeUnmount as jn, onMounted as Te, onScopeDispose as Ue, isRef as Ee, nextTick as Nn, useId as St, onUnmounted as Je, withModifiers as Ot, useSlots as kt, useTemplateRef as Ie, createCommentVNode as fe, normalizeProps as _e, guardReactiveProps as $e, createTextVNode as Y, renderList as Tt, toDisplayString as te, toHandlers as Ve, vModelDynamic as Bn, vModelText as Et, vModelCheckbox as Vt, vModelRadio as Mn, createVNode as Ce, withKeys as rt, useAttrs as Zn, Teleport as Ln, Transition as Fn, createPropsRestProxy as Xn } from "vue";
function Un(e) {
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
function Jn(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.accordionRootContext?.modelValue)), o = d(() => !!y(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: d(() => o.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : n.value === t.value.value)
  };
}
function Kn(e) {
  const t = d(() => y(e.accordionItemContext?.props)), n = d(() => !!t.value?.disabled);
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
function Gn() {
  const e = Dt(), t = jt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const qn = /* @__PURE__ */ R({
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
    const n = e, o = t, r = L(e, "modelValue"), { setModelValue: i } = Un({
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
      _(s.$slots, "default")
    ], 2));
  }
}), Yn = /* @__PURE__ */ R({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Dt(), { isActive: o } = Jn({
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
      _(r.$slots, "default", { isActive: c(o) })
    ], 2));
  }
}), E = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, r] of t)
    n[o] = r;
  return n;
}, Wn = {}, Hn = { class: "accordion-header" };
function Qn(e, t) {
  return v(), g("div", Hn, [
    _(e.$slots, "default")
  ]);
}
const eo = /* @__PURE__ */ E(Wn, [["render", Qn]]), to = {
  class: "accordion-body",
  role: "region"
}, no = { class: "accordion-body__content" }, oo = /* @__PURE__ */ R({
  __name: "AccordionBody",
  setup(e) {
    const t = jt(), n = d(() => !!y(t?.isActive));
    return (o, r) => X((v(), g("div", to, [
      U("div", no, [
        _(o.$slots, "default")
      ])
    ], 512)), [
      [Xe, n.value]
    ]);
  }
}), ro = {}, so = { class: "accordion-title" };
function io(e, t) {
  return v(), g("div", so, [
    _(e.$slots, "default")
  ]);
}
const ao = /* @__PURE__ */ E(ro, [["render", io]]), lo = ["disabled"], co = /* @__PURE__ */ R({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: n } = Gn(), { isDisabled: o, handleToggle: r } = Kn({
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
      _(i.$slots, "default")
    ], 8, lo));
  }
}), $c = {
  Root: qn,
  Item: Yn,
  Header: eo,
  Body: oo,
  Title: ao,
  Trigger: co
};
function uo(e) {
  const t = d(() => y(e.props));
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
function fo(e) {
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
function Rc(e) {
  return Pe(e) || oe(e) ? !0 : pe(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ke(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function po(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function le(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function mo(e) {
  return !Pe(e) && !oe(e) && Ke(e) && !Array.isArray(e);
}
function st(e, t) {
  if (!e || !t.trim())
    return null;
  const n = t.split(".");
  let o = e;
  for (const r of n) {
    if (!mo(o))
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
  if (po(e))
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
function zc(e) {
  return new Promise((t) => setTimeout(t, e));
}
function xc(e, t) {
  const n = {};
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && (n[o] = e[o]);
  return n;
}
function wc(e, t) {
  const n = { ...e };
  for (const o of t)
    Object.prototype.hasOwnProperty.call(e, o) && delete n[o];
  return n;
}
function Cc(e) {
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
  function h(b = {}) {
    const { upcomingOnly: $ = !1 } = b;
    f(), a = !$;
  }
  function p() {
    if (l = Date.now(), u) {
      const b = u;
      e.apply(this, b), u = null;
    }
  }
  function m(...b) {
    if (a)
      return;
    const $ = Date.now() - l;
    u = b;
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
function Ic(e) {
  return Pn(e);
}
function Lt(e) {
  return e ? e.flatMap((t) => t.type === K ? Lt(t.children) : [t]) : [];
}
const ho = R({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: n }) {
    return () => {
      if (!n.default)
        return null;
      const o = Lt(n.default()), r = o.findIndex((l) => l.type !== An);
      if (r === -1)
        return o;
      const i = o[r];
      delete i.props?.ref;
      const s = i.props ? W(t, i.props) : t, a = Dn({
        ...i,
        props: {}
      }, s);
      return o.length === 1 ? a : (o[r] = a, o);
    };
  }
}), vo = [
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
], go = R({
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
    return pe(o) && vo.includes(o) ? () => Me(o, t) : o !== "template" ? () => Me(e.as, t, {
      default: n.default
    }) : () => Me(ho, t, {
      default: n.default
    });
  }
}), Ft = {
  Root: go
}, yo = /* @__PURE__ */ R({
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
    const t = e, { formRootContext: n, formItemContext: o } = J(), { isDisabled: r } = uo({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return (i, s) => (v(), ne(c(Ft).Root, {
      as: e.as,
      "as-child": e.asChild,
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
    }, {
      default: G(() => [
        _(i.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class", "disabled", "type"]));
  }
}), bo = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), Sc = {
  Root: yo,
  Group: bo
};
function _o() {
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
  const t = d(() => y(e.formItems)), n = d(() => t.value.filter((i) => i.isValidatable));
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
function re(e = !1) {
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
function Oc(e) {
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
  return jn(() => {
    i();
  }), {
    stop: i
  };
}
const Xt = Object.freeze({
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
}), ye = Object.freeze({
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  PASSWORD: "password"
}), kc = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Tc = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Ec = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Vc = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Pc = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Ac = Object.freeze({
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
function Dc(e, t, n = {}) {
  const {
    rootMargin: o = it.LAZY_IMAGE.rootMargin,
    threshold: r = it.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: i = !0,
    immediate: s = !1
  } = n, { stop: a } = Ro(e, k, {
    rootMargin: o,
    threshold: r
  }), [l, u] = re(), [f, h] = re(), p = V(""), m = V(""), b = V(""), $ = pe(t) ? { src: t } : t;
  function O() {
    if (l.value || f.value)
      return;
    const T = new Image();
    T.src = $.src, $.srcset && (T.srcset = $.srcset), $.sizes && (T.sizes = $.sizes), T.onload = () => {
      p.value = $.src, m.value = $.srcset || "", b.value = $.sizes || "", u(!0), h(!1);
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
    imageSizes: b,
    loadImage: O,
    stop: a
  };
}
function jc() {
  return {};
}
function Nc() {
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
function Bc() {
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
function Mc(e, t) {
  (pe(e) ? document.querySelector(e) : Ee(e) ? c(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function Zc(e, t) {
  return {
    listeners: t.reduce((o, r) => {
      const i = r, s = String(i);
      return o[i] = ((...a) => e(s, ...a)), o;
    }, {})
  };
}
function xo(e) {
  const { formItems: t, registerFormItem: n, unregisterFormItem: o } = _o(), { validate: r, clearValidate: i, validatableFormItems: s } = $o({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [a, l] = re(!1), u = V(!1), f = V("");
  function h() {
    t.value.forEach((b) => b.reset()), i();
  }
  q(s, async (b) => {
    const $ = b.map((k) => k.id).sort().join(",");
    if ($ === f.value)
      return;
    if (f.value = $, b.length === 0) {
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
    const b = await r(!0);
    l(b);
  }, 400);
  async function m(b = !1) {
    const $ = await r(b);
    return l($), $;
  }
  return q(() => y(e.modelValue), () => {
    p();
  }, {
    deep: !0
  }), Te(async () => {
    await Nn(), await m(!0);
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
function wo() {
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
function Co(e) {
  const t = d(() => y(e.data)), n = d(() => y(e.schema)), o = V({
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
class ue extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class Ut extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
const Jt = {};
function se(e) {
  return Jt;
}
function Kt(e) {
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
function We(e) {
  return e == null;
}
function He(e) {
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
function ae(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function H(...e) {
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
const Gt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Se(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Io = Ye(() => {
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
function qt(e) {
  return Re(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
}
const So = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Oo(e) {
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
function ko(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function To(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = H(e._zod.def, {
    get shape() {
      const s = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (s[a] = n.shape[a]);
      }
      return ae(this, "shape", s), s;
    },
    checks: []
  });
  return Q(e, i);
}
function Eo(e, t) {
  const n = e._zod.def, o = n.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = H(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete s[a];
      }
      return ae(this, "shape", s), s;
    },
    checks: []
  });
  return Q(e, i);
}
function Vo(e, t) {
  if (!Re(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = e._zod.def.shape;
    for (const s in t)
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const r = H(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return ae(this, "shape", i), i;
    }
  });
  return Q(e, r);
}
function Po(e, t) {
  if (!Re(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = H(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t };
      return ae(this, "shape", o), o;
    }
  });
  return Q(e, n);
}
function Ao(e, t) {
  const n = H(e._zod.def, {
    get shape() {
      const o = { ...e._zod.def.shape, ...t._zod.def.shape };
      return ae(this, "shape", o), o;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return Q(e, n);
}
function Do(e, t, n) {
  const r = t._zod.def.checks;
  if (r && r.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = H(t._zod.def, {
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
      return ae(this, "shape", l), l;
    },
    checks: []
  });
  return Q(t, s);
}
function jo(e, t, n) {
  const o = H(t._zod.def, {
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
      return ae(this, "shape", i), i;
    }
  });
  return Q(t, o);
}
function ce(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function Yt(e, t) {
  return t.map((n) => {
    var o;
    return (o = n).path ?? (o.path = []), n.path.unshift(e), n;
  });
}
function xe(e) {
  return typeof e == "string" ? e : e?.message;
}
function ie(e, t, n) {
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
const Wt = (e, t) => {
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
}, Ht = z("$ZodError", Wt), Qt = z("$ZodError", Wt, { Parent: Error });
function No(e, t = (n) => n.message) {
  const n = {}, o = [];
  for (const r of e.issues)
    r.path.length > 0 ? (n[r.path[0]] = n[r.path[0]] || [], n[r.path[0]].push(t(r))) : o.push(t(r));
  return { formErrors: o, fieldErrors: n };
}
function Bo(e, t = (n) => n.message) {
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
    throw new ue();
  if (s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((l) => ie(l, i, se())));
    throw Gt(a, r?.callee), a;
  }
  return s.value;
}, tt = (e) => async (t, n, o, r) => {
  const i = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const a = new (r?.Err ?? e)(s.issues.map((l) => ie(l, i, se())));
    throw Gt(a, r?.callee), a;
  }
  return s.value;
}, Ae = (e) => (t, n, o) => {
  const r = o ? { ...o, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, r);
  if (i instanceof Promise)
    throw new ue();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? Ht)(i.issues.map((s) => ie(s, r, se())))
  } : { success: !0, data: i.value };
}, Mo = /* @__PURE__ */ Ae(Qt), De = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { async: !0 }) : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, r);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => ie(s, r, se())))
  } : { success: !0, data: i.value };
}, Zo = /* @__PURE__ */ De(Qt), Lo = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return et(e)(t, n, r);
}, Fo = (e) => (t, n, o) => et(e)(t, n, o), Xo = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return tt(e)(t, n, r);
}, Uo = (e) => async (t, n, o) => tt(e)(t, n, o), Jo = (e) => (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return Ae(e)(t, n, r);
}, Ko = (e) => (t, n, o) => Ae(e)(t, n, o), Go = (e) => async (t, n, o) => {
  const r = o ? Object.assign(o, { direction: "backward" }) : { direction: "backward" };
  return De(e)(t, n, r);
}, qo = (e) => async (t, n, o) => De(e)(t, n, o), me = /* @__PURE__ */ z("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), Yo = /* @__PURE__ */ z("$ZodCheckMaxLength", (e, t) => {
  var n;
  me.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !We(r) && r.length !== void 0;
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
}), Wo = /* @__PURE__ */ z("$ZodCheckMinLength", (e, t) => {
  var n;
  me.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !We(r) && r.length !== void 0;
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
}), Ho = /* @__PURE__ */ z("$ZodCheckLengthEquals", (e, t) => {
  var n;
  me.init(e, t), (n = e._zod.def).when ?? (n.when = (o) => {
    const r = o.value;
    return !We(r) && r.length !== void 0;
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
}), Qo = /* @__PURE__ */ z("$ZodCheckOverwrite", (e, t) => {
  me.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class er {
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
const tr = {
  major: 4,
  minor: 3,
  patch: 6
}, D = /* @__PURE__ */ z("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = tr;
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
      let u = ce(s), f;
      for (const h of a) {
        if (h._zod.def.when) {
          if (!h._zod.def.when(s))
            continue;
        } else if (u)
          continue;
        const p = s.issues.length, m = h._zod.check(s);
        if (m instanceof Promise && l?.async === !1)
          throw new ue();
        if (f || m instanceof Promise)
          f = (f ?? Promise.resolve()).then(async () => {
            await m, s.issues.length !== p && (u || (u = ce(s, p)));
          });
        else {
          if (s.issues.length === p)
            continue;
          u || (u = ce(s, p));
        }
      }
      return f ? f.then(() => s) : s;
    }, i = (s, a, l) => {
      if (ce(s))
        return s.aborted = !0, s;
      const u = r(a, o, l);
      if (u instanceof Promise) {
        if (l.async === !1)
          throw new ue();
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
          throw new ue();
        return l.then((u) => r(u, o, a));
      }
      return r(l, o, a);
    };
  }
  S(e, "~standard", () => ({
    validate: (r) => {
      try {
        const i = Mo(e, r);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Zo(e, r).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), nr = /* @__PURE__ */ z("$ZodUnknown", (e, t) => {
  D.init(e, t), e._zod.parse = (n) => n;
}), or = /* @__PURE__ */ z("$ZodNever", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function ct(e, t, n) {
  e.issues.length && t.issues.push(...Yt(n, e.issues)), t.value[n] = e.value;
}
const rr = /* @__PURE__ */ z("$ZodArray", (e, t) => {
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
    t.issues.push(...Yt(n, e.issues));
  }
  e.value === void 0 ? n in o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function en(e) {
  const t = Object.keys(e.shape);
  for (const o of t)
    if (!e.shape?.[o]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${o}": expected a Zod schema`);
  const n = ko(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function tn(e, t, n, o, r, i) {
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
const sr = /* @__PURE__ */ z("$ZodObject", (e, t) => {
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
  const o = Ye(() => en(t));
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
      const m = h[p], b = m._zod.optout === "optional", $ = m._zod.run({ value: u[p], issues: [] }, l);
      $ instanceof Promise ? f.push($.then((O) => Oe(O, a, p, u, b))) : Oe($, a, p, u, b);
    }
    return i ? tn(f, u, a, l, o.value, e) : f.length ? Promise.all(f).then(() => a) : a;
  };
}), ir = /* @__PURE__ */ z("$ZodObjectJIT", (e, t) => {
  sr.init(e, t);
  const n = e._zod.parse, o = Ye(() => en(t)), r = (p) => {
    const m = new er(["shape", "payload", "ctx"]), b = o.value, $ = (w) => {
      const x = lt(w);
      return `shape[${x}]._zod.run({ value: input[${x}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const O = /* @__PURE__ */ Object.create(null);
    let k = 0;
    for (const w of b.keys)
      O[w] = `key_${k++}`;
    m.write("const newResult = {};");
    for (const w of b.keys) {
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
  const s = Se, a = !Jt.jitless, u = a && Io.value, f = t.catchall;
  let h;
  e._zod.parse = (p, m) => {
    h ?? (h = o.value);
    const b = p.value;
    return s(b) ? a && u && m?.async === !1 && m.jitless !== !0 ? (i || (i = r(t.shape)), p = i(p, m), f ? tn([], b, p, m, h, e) : p) : n(p, m) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: b,
      inst: e
    }), p);
  };
});
function ut(e, t, n, o) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const r = e.filter((i) => !ce(i));
  return r.length === 1 ? (t.value = r[0].value, r[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((i) => i.issues.map((s) => ie(s, o, se())))
  }), t);
}
const ar = /* @__PURE__ */ z("$ZodUnion", (e, t) => {
  D.init(e, t), S(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), S(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), S(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), S(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((i) => i._zod.pattern);
      return new RegExp(`^(${r.map((i) => He(i.source)).join("|")})$`);
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
}), lr = /* @__PURE__ */ z("$ZodIntersection", (e, t) => {
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
  if (i.length && r && e.issues.push({ ...r, keys: i }), ce(e))
    return e;
  const s = Le(t.value, n.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const cr = /* @__PURE__ */ z("$ZodEnum", (e, t) => {
  D.init(e, t);
  const n = Kt(t.entries), o = new Set(n);
  e._zod.values = o, e._zod.pattern = new RegExp(`^(${n.filter((r) => So.has(typeof r)).map((r) => typeof r == "string" ? Oo(r) : r.toString()).join("|")})$`), e._zod.parse = (r, i) => {
    const s = r.value;
    return o.has(s) || r.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), r;
  };
}), ur = /* @__PURE__ */ z("$ZodTransform", (e, t) => {
  D.init(e, t), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new Ut(e.constructor.name);
    const r = t.transform(n.value, n);
    if (o.async)
      return (r instanceof Promise ? r : Promise.resolve(r)).then((s) => (n.value = s, n));
    if (r instanceof Promise)
      throw new ue();
    return n.value = r, n;
  };
});
function ft(e, t) {
  return e.issues.length && t === void 0 ? { issues: [], value: void 0 } : e;
}
const nn = /* @__PURE__ */ z("$ZodOptional", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", S(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), S(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${He(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, o) => {
    if (t.innerType._zod.optin === "optional") {
      const r = t.innerType._zod.run(n, o);
      return r instanceof Promise ? r.then((i) => ft(i, n.value)) : ft(r, n.value);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, o);
  };
}), dr = /* @__PURE__ */ z("$ZodExactOptional", (e, t) => {
  nn.init(e, t), S(e._zod, "values", () => t.innerType._zod.values), S(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, o) => t.innerType._zod.run(n, o);
}), fr = /* @__PURE__ */ z("$ZodNullable", (e, t) => {
  D.init(e, t), S(e._zod, "optin", () => t.innerType._zod.optin), S(e._zod, "optout", () => t.innerType._zod.optout), S(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${He(n.source)}|null)$`) : void 0;
  }), S(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, o) => n.value === null ? n : t.innerType._zod.run(n, o);
}), pr = /* @__PURE__ */ z("$ZodDefault", (e, t) => {
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
const mr = /* @__PURE__ */ z("$ZodPrefault", (e, t) => {
  D.init(e, t), e._zod.optin = "optional", S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => (o.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, o));
}), hr = /* @__PURE__ */ z("$ZodNonOptional", (e, t) => {
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
const vr = /* @__PURE__ */ z("$ZodCatch", (e, t) => {
  D.init(e, t), S(e._zod, "optin", () => t.innerType._zod.optin), S(e._zod, "optout", () => t.innerType._zod.optout), S(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      return t.innerType._zod.run(n, o);
    const r = t.innerType._zod.run(n, o);
    return r instanceof Promise ? r.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => ie(s, o, se()))
      },
      input: n.value
    }), n.issues = []), n)) : (n.value = r.value, r.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: r.issues.map((i) => ie(i, o, se()))
      },
      input: n.value
    }), n.issues = []), n);
  };
}), gr = /* @__PURE__ */ z("$ZodPipe", (e, t) => {
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
const yr = /* @__PURE__ */ z("$ZodReadonly", (e, t) => {
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
const br = /* @__PURE__ */ z("$ZodCustom", (e, t) => {
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
class _r {
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
function $r() {
  return new _r();
}
(gt = globalThis).__zod_globalRegistry ?? (gt.__zod_globalRegistry = $r());
const be = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Rr(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function zr(e, t) {
  return new e({
    type: "never",
    ...Z(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
  return new Yo({
    check: "max_length",
    ...Z(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function yt(e, t) {
  return new Wo({
    check: "min_length",
    ...Z(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function wr(e, t) {
  return new Ho({
    check: "length_equals",
    ...Z(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Cr(e) {
  return new Qo({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t, n) {
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
function Sr(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...Z(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
  const t = /* @__PURE__ */ kr((n) => (n.addIssue = (o) => {
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
function kr(e, t) {
  const n = new me({
    check: "custom",
    ...Z(t)
  });
  return n._zod.check = e, n;
}
function on(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? be,
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
function rn(e, t) {
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
      const h = e.external.registry.get(s[0])?.id, p = e.external.uri ?? ((b) => b);
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
function sn(e, t) {
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
const Tr = (e, t = {}) => (n) => {
  const o = on({ ...n, processors: t });
  return j(e, o), rn(o, e), sn(o, e);
}, ke = (e, t, n = {}) => (o) => {
  const { libraryOptions: r, target: i } = o ?? {}, s = on({ ...r ?? {}, target: i, io: t, processors: n });
  return j(e, s), rn(s, e), sn(s, e);
}, Er = (e, t, n, o) => {
  n.not = {};
}, Vr = (e, t, n, o) => {
}, Pr = (e, t, n, o) => {
  const r = e._zod.def, i = Kt(r.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Ar = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Dr = (e, t, n, o) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, jr = (e, t, n, o) => {
  const r = n, i = e._zod.def, { minimum: s, maximum: a } = e._zod.bag;
  typeof s == "number" && (r.minItems = s), typeof a == "number" && (r.maxItems = a), r.type = "array", r.items = j(i.element, t, { ...o, path: [...o.path, "items"] });
}, Nr = (e, t, n, o) => {
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
}, Br = (e, t, n, o) => {
  const r = e._zod.def, i = r.inclusive === !1, s = r.options.map((a, l) => j(a, t, {
    ...o,
    path: [...o.path, i ? "oneOf" : "anyOf", l]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, Mr = (e, t, n, o) => {
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
}, Zr = (e, t, n, o) => {
  const r = e._zod.def, i = j(r.innerType, t, o), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = r.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Lr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Fr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.default = JSON.parse(JSON.stringify(r.defaultValue));
}, Xr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(r.defaultValue)));
}, Ur = (e, t, n, o) => {
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
}, Jr = (e, t, n, o) => {
  const r = e._zod.def, i = t.io === "input" ? r.in._zod.def.type === "transform" ? r.out : r.in : r.out;
  j(i, t, o);
  const s = t.seen.get(e);
  s.ref = i;
}, Kr = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType, n.readOnly = !0;
}, an = (e, t, n, o) => {
  const r = e._zod.def;
  j(r.innerType, t, o);
  const i = t.seen.get(e);
  i.ref = r.innerType;
}, Gr = (e, t) => {
  Ht.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Bo(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => No(e, n)
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
}, F = z("ZodError", Gr, {
  Parent: Error
}), qr = /* @__PURE__ */ et(F), Yr = /* @__PURE__ */ tt(F), Wr = /* @__PURE__ */ Ae(F), Hr = /* @__PURE__ */ De(F), Qr = /* @__PURE__ */ Lo(F), es = /* @__PURE__ */ Fo(F), ts = /* @__PURE__ */ Xo(F), ns = /* @__PURE__ */ Uo(F), os = /* @__PURE__ */ Jo(F), rs = /* @__PURE__ */ Ko(F), ss = /* @__PURE__ */ Go(F), is = /* @__PURE__ */ qo(F), A = /* @__PURE__ */ z("ZodType", (e, t) => (D.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: ke(e, "input"),
    output: ke(e, "output")
  }
}), e.toJSONSchema = Tr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.check = (...n) => e.clone(H(t, {
  checks: [
    ...t.checks ?? [],
    ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
  ]
}), {
  parent: !0
}), e.with = e.check, e.clone = (n, o) => Q(e, n, o), e.brand = () => e, e.register = ((n, o) => (n.add(e, o), e)), e.parse = (n, o) => qr(e, n, o, { callee: e.parse }), e.safeParse = (n, o) => Wr(e, n, o), e.parseAsync = async (n, o) => Yr(e, n, o, { callee: e.parseAsync }), e.safeParseAsync = async (n, o) => Hr(e, n, o), e.spa = e.safeParseAsync, e.encode = (n, o) => Qr(e, n, o), e.decode = (n, o) => es(e, n, o), e.encodeAsync = async (n, o) => ts(e, n, o), e.decodeAsync = async (n, o) => ns(e, n, o), e.safeEncode = (n, o) => os(e, n, o), e.safeDecode = (n, o) => rs(e, n, o), e.safeEncodeAsync = async (n, o) => ss(e, n, o), e.safeDecodeAsync = async (n, o) => is(e, n, o), e.refine = (n, o) => e.check(As(n, o)), e.superRefine = (n) => e.check(Ds(n)), e.overwrite = (n) => e.check(/* @__PURE__ */ Cr(n)), e.optional = () => _t(e), e.exactOptional = () => Rs(e), e.nullable = () => $t(e), e.nullish = () => _t($t(e)), e.nonoptional = (n) => Ss(e, n), e.array = () => ds(e), e.or = (n) => hs([e, n]), e.and = (n) => gs(e, n), e.transform = (n) => Rt(e, _s(n)), e.default = (n) => ws(e, n), e.prefault = (n) => Is(e, n), e.catch = (n) => ks(e, n), e.pipe = (n) => Rt(e, n), e.readonly = () => Vs(e), e.describe = (n) => {
  const o = e.clone();
  return be.add(o, { description: n }), o;
}, Object.defineProperty(e, "description", {
  get() {
    return be.get(e)?.description;
  },
  configurable: !0
}), e.meta = (...n) => {
  if (n.length === 0)
    return be.get(e);
  const o = e.clone();
  return be.add(o, n[0]), o;
}, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), as = /* @__PURE__ */ z("ZodUnknown", (e, t) => {
  nr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Vr();
});
function bt() {
  return /* @__PURE__ */ Rr(as);
}
const ls = /* @__PURE__ */ z("ZodNever", (e, t) => {
  or.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Er(e, n, o);
});
function cs(e) {
  return /* @__PURE__ */ zr(ls, e);
}
const us = /* @__PURE__ */ z("ZodArray", (e, t) => {
  rr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => jr(e, n, o, r), e.element = t.element, e.min = (n, o) => e.check(/* @__PURE__ */ yt(n, o)), e.nonempty = (n) => e.check(/* @__PURE__ */ yt(1, n)), e.max = (n, o) => e.check(/* @__PURE__ */ xr(n, o)), e.length = (n, o) => e.check(/* @__PURE__ */ wr(n, o)), e.unwrap = () => e.element;
});
function ds(e, t) {
  return /* @__PURE__ */ Ir(us, e, t);
}
const fs = /* @__PURE__ */ z("ZodObject", (e, t) => {
  ir.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Nr(e, n, o, r), S(e, "shape", () => t.shape), e.keyof = () => ys(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({ ...e._zod.def, catchall: n }), e.passthrough = () => e.clone({ ...e._zod.def, catchall: bt() }), e.loose = () => e.clone({ ...e._zod.def, catchall: bt() }), e.strict = () => e.clone({ ...e._zod.def, catchall: cs() }), e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 }), e.extend = (n) => Vo(e, n), e.safeExtend = (n) => Po(e, n), e.merge = (n) => Ao(e, n), e.pick = (n) => To(e, n), e.omit = (n) => Eo(e, n), e.partial = (...n) => Do(ln, e, n[0]), e.required = (...n) => jo(cn, e, n[0]);
});
function ps(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...Z(t)
  };
  return new fs(n);
}
const ms = /* @__PURE__ */ z("ZodUnion", (e, t) => {
  ar.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Br(e, n, o, r), e.options = t.options;
});
function hs(e, t) {
  return new ms({
    type: "union",
    options: e,
    ...Z(t)
  });
}
const vs = /* @__PURE__ */ z("ZodIntersection", (e, t) => {
  lr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Mr(e, n, o, r);
});
function gs(e, t) {
  return new vs({
    type: "intersection",
    left: e,
    right: t
  });
}
const Fe = /* @__PURE__ */ z("ZodEnum", (e, t) => {
  cr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (o, r, i) => Pr(e, o, r), e.enum = t.entries, e.options = Object.values(t.entries);
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
function ys(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((o) => [o, o])) : e;
  return new Fe({
    type: "enum",
    entries: n,
    ...Z(t)
  });
}
const bs = /* @__PURE__ */ z("ZodTransform", (e, t) => {
  ur.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Dr(e, n), e._zod.parse = (n, o) => {
    if (o.direction === "backward")
      throw new Ut(e.constructor.name);
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
function _s(e) {
  return new bs({
    type: "transform",
    transform: e
  });
}
const ln = /* @__PURE__ */ z("ZodOptional", (e, t) => {
  nn.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => an(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function _t(e) {
  return new ln({
    type: "optional",
    innerType: e
  });
}
const $s = /* @__PURE__ */ z("ZodExactOptional", (e, t) => {
  dr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => an(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Rs(e) {
  return new $s({
    type: "optional",
    innerType: e
  });
}
const zs = /* @__PURE__ */ z("ZodNullable", (e, t) => {
  fr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Zr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function $t(e) {
  return new zs({
    type: "nullable",
    innerType: e
  });
}
const xs = /* @__PURE__ */ z("ZodDefault", (e, t) => {
  pr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Fr(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ws(e, t) {
  return new xs({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : qt(t);
    }
  });
}
const Cs = /* @__PURE__ */ z("ZodPrefault", (e, t) => {
  mr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Xr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Is(e, t) {
  return new Cs({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : qt(t);
    }
  });
}
const cn = /* @__PURE__ */ z("ZodNonOptional", (e, t) => {
  hr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Lr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Ss(e, t) {
  return new cn({
    type: "nonoptional",
    innerType: e,
    ...Z(t)
  });
}
const Os = /* @__PURE__ */ z("ZodCatch", (e, t) => {
  vr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ur(e, n, o, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ks(e, t) {
  return new Os({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const Ts = /* @__PURE__ */ z("ZodPipe", (e, t) => {
  gr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Jr(e, n, o, r), e.in = t.in, e.out = t.out;
});
function Rt(e, t) {
  return new Ts({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const Es = /* @__PURE__ */ z("ZodReadonly", (e, t) => {
  yr.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Kr(e, n, o, r), e.unwrap = () => e._zod.def.innerType;
});
function Vs(e) {
  return new Es({
    type: "readonly",
    innerType: e
  });
}
const Ps = /* @__PURE__ */ z("ZodCustom", (e, t) => {
  br.init(e, t), A.init(e, t), e._zod.processJSONSchema = (n, o, r) => Ar(e, n);
});
function As(e, t = {}) {
  return /* @__PURE__ */ Sr(Ps, e, t);
}
function Ds(e) {
  return /* @__PURE__ */ Or(e);
}
function js(e) {
  const t = St(), { field: n, registerField: o, unregisterField: r } = wo(), i = d(() => y(e.props)), s = d(() => i.value.name), a = d(() => e.formRootContext?.modelValue.value), l = d(() => e.formRootContext?.props?.rules), u = d(() => s.value && a.value && st(a.value, s.value)), f = d(() => !!(e.formRootContext?.props.disabled || i.value?.disabled)), h = d(() => {
    if (!s.value || !l.value)
      return null;
    const I = st(l.value, s.value);
    return I instanceof A ? I : null;
  }), p = d(() => !!h.value), m = d(() => h.value ? !h.value.safeParse(void 0).success : !1), {
    validationStatus: b,
    validationErrors: $,
    clearValidateErrors: O,
    validate: k
  } = Co({
    data: () => s.value ? {
      [s.value]: u.value
    } : null,
    schema: () => !s.value || !h.value ? null : ps({
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
    validationStatus: b.value,
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
  }), q(T, (I) => {
    e.formRootContext?.registerFormItem(I);
  }, {
    deep: !0,
    immediate: !0
  }), q(u, () => x()), q(() => b.value.isSuccess, (I) => {
    I && O();
  }), {
    id: t,
    validationErrors: $,
    validationStatus: b,
    isDisabled: f,
    isRequired: m,
    reset: w,
    validate: k,
    clearValidateErrors: O,
    registerField: o,
    unregisterField: r
  };
}
const Ns = /* @__PURE__ */ R({
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
    } = xo({
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
    }), (m, b) => (v(), g("form", {
      class: C(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: Ot(p, ["prevent"])
    }, [
      _(m.$slots, "default", { isValid: c(s) })
    ], 34));
  }
}), Bs = {
  key: 0,
  class: "form-item__header"
}, Ms = { class: "form-item__body" }, Zs = {
  key: 1,
  class: "form-item__footer"
}, Ls = /* @__PURE__ */ R({
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
      validate: b,
      clearValidateErrors: $
    } = js({
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
      validate: b,
      clearValidateErrors: $
    }), t({
      reset: m,
      validate: b,
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
      i?.header ? (v(), g("div", Bs, [
        _(T.$slots, "header", _e($e(k.value)))
      ])) : fe("", !0),
      U("div", Ms, [
        _(T.$slots, "default", _e($e(k.value)))
      ]),
      i.footer ? (v(), g("div", Zs, [
        _(T.$slots, "footer", _e($e(k.value)))
      ])) : fe("", !0)
    ], 2));
  }
}), Fs = {}, Xs = { class: "form-item-title" };
function Us(e, t) {
  return v(), g("div", Xs, [
    _(e.$slots, "default")
  ]);
}
const Js = /* @__PURE__ */ E(Fs, [["render", Us]]), Ks = {}, Gs = { class: "form-item-required" };
function qs(e, t) {
  return v(), g("span", Gs, [
    _(e.$slots, "default", {}, () => [
      t[0] || (t[0] = Y(" * ", -1))
    ])
  ]);
}
const Ys = /* @__PURE__ */ E(Ks, [["render", qs]]), Ws = { class: "form-item-errors" }, Hs = /* @__PURE__ */ R({
  __name: "FormItemErrors",
  setup(e) {
    const t = Zt(), n = d(() => t?.validationErrors.value ?? []);
    return (o, r) => (v(), g("div", Ws, [
      (v(!0), g(K, null, Tt(n.value, (i, s) => (v(), g("div", {
        key: `error-${s}`,
        class: "form-item-errors__item"
      }, te(i.message), 1))), 128))
    ]));
  }
}), Lc = {
  Root: Ns,
  Item: Ls,
  ItemTitle: Js,
  ItemRequired: Ys,
  ItemErrors: Hs
};
function Qs() {
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
function de(e, t = !1) {
  return t && Array.isArray(e);
}
function ei(e) {
  const t = d(() => y(e.multiple)), n = d(() => y(e.modelValue)), o = d(() => y(e.options)), r = d(() => o.value.find((s) => s.props.value === n.value)), i = d(() => {
    if (!de(n.value, t.value))
      return [];
    const s = new Set(n.value);
    return o.value.filter((a) => s.has(a.props.value));
  });
  return {
    activeOption: r,
    activeOptions: i
  };
}
function ti(e) {
  const t = d(() => y(e.modelValue)), n = d(() => y(e.props)), { options: o, registerOption: r, unregisterOption: i } = Qs(), { activeOption: s, activeOptions: a } = ei({
    multiple: () => !!n.value.multiple,
    options: () => o.value,
    modelValue: () => t.value
  }), [l, u] = re(), f = d(() => de(t.value, n.value.multiple) ? t.value.length > 0 : !!t.value), h = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.disabled));
  function p(k) {
    if (!h.value) {
      if (de(t.value, n.value.multiple)) {
        const T = /* @__PURE__ */ new Set([...t.value]);
        T.has(k) ? T.delete(k) : T.add(k), e.onChangeModel?.([...T]);
      } else
        e.onChangeModel?.(k);
      e.onChange?.(k);
    }
  }
  function m() {
    if (de(t.value, n.value.multiple)) {
      e.onChangeModel?.([]);
      return;
    }
    e.onChangeModel?.(""), e.onClear?.();
  }
  function b() {
    h.value || u(!0);
  }
  function $() {
    h.value || u(!1);
  }
  function O() {
    l.value ? $() : b();
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
    open: b,
    close: $,
    toggle: O,
    registerOption: r,
    unregisterOption: i,
    setModelValue: p,
    reset: m
  };
}
function ni(e) {
  const t = St(), n = d(() => y(e.selectRootContext?.modelValue)), o = d(() => y(e.props)), r = d(() => !!y(e.selectRootContext?.props)?.multiple), i = d(() => oe(n.value) ? !1 : de(n.value, r.value) ? n.value.includes(o.value.value) : n.value === o.value.value), s = d(() => !!(y(e.selectRootContext?.isDisabled) || o.value?.disabled)), a = d(() => ({
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
  }), Je(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: i,
    isDisabled: s,
    handleChange: l
  };
}
function oi(e) {
  const t = d(() => y(e.selectRootContext?.props)), n = d(() => y(e.selectRootContext?.activeOption)), o = d(() => n.value?.props?.title ?? n.value?.props.value), r = d(() => y(e.selectRootContext?.activeOptions) ?? []), i = d(() => !!y(e.selectRootContext?.hasValue)), s = d(() => oe(e.selectRootContext?.modelValue) ? !1 : de(y(e.selectRootContext.modelValue), !!t.value?.multiple)), a = d(() => t.value?.placeholder);
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
function ri(e) {
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
const un = /* @__PURE__ */ Symbol("SelectRootContextKey");
function je() {
  return B(un, null);
}
const si = {
  mounted() {
  },
  unmounted() {
  }
}, Fc = {
  install(e) {
    e.directive("visible", si);
  }
}, ii = {
  mounted() {
  },
  unmounted() {
  }
}, Xc = {
  install(e) {
    e.directive("loading", ii);
  }
}, dn = {
  mounted(e, t) {
    e.clickOutside = (n) => {
      n.target instanceof Element && (e === n.target || e.contains(n.target) || t.value(n, e));
    }, window.addEventListener("click", e.clickOutside);
  },
  unmounted(e) {
    window.removeEventListener("click", e.clickOutside);
  }
}, Uc = {
  install(e) {
    e.directive("click-outside", dn);
  }
}, ai = {
  mounted() {
  },
  unmounted() {
  }
}, Jc = {
  install(e) {
    e.directive("tooltip", ai);
  }
}, li = ["aria-disabled"], ci = /* @__PURE__ */ R({
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
      open: b,
      close: $,
      toggle: O,
      registerOption: k,
      unregisterOption: T,
      setModelValue: w
    } = ti({
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
    return M(un, {
      activeOption: () => u.value,
      activeOptions: () => f.value,
      modelValue: () => r.value,
      props: () => n,
      hasValue: () => h.value,
      isOpen: () => p.value,
      isDisabled: () => m.value,
      open: b,
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
      _(x.$slots, "default")
    ], 10, li)), [
      [c(dn), c($)]
    ]);
  }
}), ui = /* @__PURE__ */ R({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, n = je(), { isActive: o, isDisabled: r, handleChange: i } = ni({
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
      _(s.$slots, "default", {
        isActive: c(o),
        isDisabled: c(r)
      }, () => [
        Y(te(e.title), 1)
      ])
    ], 2));
  }
}), di = /* @__PURE__ */ R({
  __name: "SelectTrigger",
  setup(e) {
    const t = je(), { open: n, close: o, toggle: r } = ri({
      selectRootContext: t
    });
    return (i, s) => _(i.$slots, "default", {
      open: c(n),
      close: c(o),
      toggle: c(r)
    });
  }
}), fi = { class: "select-dropdown" }, pi = /* @__PURE__ */ R({
  __name: "SelectDropdown",
  setup(e) {
    const t = je(), n = d(() => !!y(t?.isOpen));
    return (o, r) => X((v(), g("div", fi, [
      _(o.$slots, "default")
    ], 512)), [
      [Xe, n.value]
    ]);
  }
}), mi = /* @__PURE__ */ R({
  __name: "SelectValue",
  setup(e) {
    const t = je(), { activeOptionValue: n, activeOptions: o, hasValue: r, isMultiple: i, placeholder: s, toggle: a } = oi({
      selectRootContext: t
    });
    return (l, u) => (v(), g("div", {
      class: "select-value",
      onClick: u[0] || (u[0] = //@ts-ignore
      (...f) => c(a) && c(a)(...f))
    }, [
      _(l.$slots, "default", {}, () => [
        c(r) ? (v(), g(K, { key: 0 }, [
          c(i) ? (v(!0), g(K, { key: 0 }, Tt(c(o), (f) => (v(), g(K, null, [
            Y(te(f.props.value), 1)
          ], 64))), 256)) : (v(), g(K, { key: 1 }, [
            Y(te(c(n)), 1)
          ], 64))
        ], 64)) : (v(), g(K, { key: 1 }, [
          Y(te(c(s)), 1)
        ], 64))
      ])
    ]));
  }
}), fn = 300, pn = 1, mn = 10;
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
function hi(e) {
  const t = d(() => y(e.props)), n = d(() => t.value?.infiniteScrollOffset ?? mn), o = d(() => t.value?.draggableMultiplier ?? pn), r = d(() => le(t.value?.debounceDelay) ? t.value.debounceDelay : fn), [i, s] = re(), [a, l] = re(), u = V(0), f = V(0), h = V(0), p = V(0);
  function m() {
    l(!1), s(!1);
  }
  const b = qe((w) => {
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
    b.cancel?.(), $.cancel?.();
  }), {
    isGrabbing: i,
    handleScroll: b,
    handleMousedown: O,
    handleMouseleave: k,
    handleMouseup: T,
    handleMousemove: $
  };
}
const vi = /* @__PURE__ */ R({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: pn },
    infiniteScrollOffset: { default: mn },
    debounceDelay: { default: fn },
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
    } = hi({
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
      (...b) => c(a) && c(a)(...b)),
      onMousedown: m[1] || (m[1] = //@ts-ignore
      (...b) => c(l) && c(l)(...b)),
      onMouseleave: m[2] || (m[2] = //@ts-ignore
      (...b) => c(u) && c(u)(...b)),
      onMouseup: m[3] || (m[3] = //@ts-ignore
      (...b) => c(f) && c(f)(...b)),
      onMousemove: m[4] || (m[4] = //@ts-ignore
      (...b) => c(h) && c(h)(...b))
    }, [
      U("div", {
        ref_key: "content",
        ref: i,
        class: "scrollbar__content"
      }, [
        _(p.$slots, "default")
      ], 512)
    ], 34));
  }
}), gi = {
  Root: vi
}, yi = /* @__PURE__ */ R({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, n) => (v(), ne(c(gi).Root, { class: "select-scrollbar" }, {
      default: G(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Kc = {
  Root: ci,
  Option: ui,
  Trigger: di,
  Dropdown: pi,
  Value: mi,
  Scrollbar: yi
};
function bi(e) {
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
function _i(e) {
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
function $i(e) {
  const [t, n] = re(), o = d(() => y(e.props)), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.loading || o.value?.disabled)), i = d(() => o.value.type === Xt.TEXTAREA), s = d(() => !!y(e.modelValue)?.trim());
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
function hn(e) {
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
function Ri(e) {
  const t = d(() => y(e.inputRootContext?.props)), n = d(() => !!t.value?.clearable);
  function o() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: n,
    handleClear: o
  };
}
const vn = /* @__PURE__ */ Symbol("InputRootContextKey");
function nt() {
  return B(vn, null);
}
const zi = /* @__PURE__ */ R({
  __name: "InputRoot",
  props: /* @__PURE__ */ P({
    type: { default: Xt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: ye.TEXT },
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
    const o = e, r = n, i = L(e, "modelValue"), { formRootContext: s, formItemContext: a, isValid: l, isInvalid: u } = J(), { isDisabled: f, isTextarea: h, hasValue: p, isFocus: m, setFocus: b, setModelValue: $, reset: O } = $i({
      formRootContext: s,
      formItemContext: a,
      modelValue: () => i.value,
      props: () => o,
      onUpdateModelValue: (k) => {
        i.value = k;
      }
    });
    return M(vn, {
      isDisabled: () => f.value,
      props: () => o,
      modelValue: () => i.value,
      setFocus: b,
      setModelValue: $,
      reset: O,
      emit: r
    }), t({
      setFocus: b
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
      _(k.$slots, "default", {
        isTextarea: c(h),
        isFocus: c(m),
        hasValue: c(p),
        loading: !!e.loading,
        isInvalid: c(u),
        isValid: c(l)
      })
    ], 2));
  }
}), xi = {}, wi = { class: "input-before" };
function Ci(e, t) {
  return v(), g("div", wi, [
    _(e.$slots, "default")
  ]);
}
const Ii = /* @__PURE__ */ E(xi, [["render", Ci]]), Si = { class: "input-after" }, Oi = /* @__PURE__ */ R({
  __name: "InputAfter",
  setup(e) {
    const t = nt(), { isClearable: n, handleClear: o } = Ri({
      inputRootContext: t
    });
    return (r, i) => (v(), g("div", Si, [
      _(r.$slots, "default"),
      c(n) ? (v(), g("button", {
        key: 0,
        type: "button",
        onClick: i[0] || (i[0] = //@ts-ignore
        (...s) => c(o) && c(o)(...s))
      }, " × ")) : fe("", !0)
    ]));
  }
}), ki = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Ti = /* @__PURE__ */ R({
  __name: "InputNative",
  setup(e) {
    const t = nt(), { modelValue: n, listeners: o } = hn({
      inputRootContext: t
    }), { props: r } = _i({
      inputRootContext: t
    });
    return (i, s) => X((v(), g("input", W({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => Ee(n) ? n.value = a : null),
      type: c(r).nativeType,
      inputmode: c(r).inputMode,
      readonly: c(r).readonly,
      disabled: c(r).disabled,
      autocomplete: c(r).autocomplete,
      placeholder: c(r).placeholder,
      class: "input-native"
    }, Ve(c(o), !0)), null, 16, ki)), [
      [Bn, c(n)]
    ]);
  }
}), Ei = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Vi = /* @__PURE__ */ R({
  __name: "InputTextarea",
  setup(e) {
    const t = nt(), { modelValue: n, listeners: o } = hn({
      inputRootContext: t
    }), { props: r } = bi({
      inputRootContext: t
    });
    return (i, s) => X((v(), g("textarea", W({
      "onUpdate:modelValue": s[0] || (s[0] = (a) => Ee(n) ? n.value = a : null),
      readonly: c(r).readonly,
      disabled: c(r).disabled,
      autocomplete: c(r).autocomplete,
      rows: c(r).rows,
      cols: c(r).cols,
      placeholder: c(r).placeholder,
      class: "input-textarea"
    }, Ve(c(o), !0)), null, 16, Ei)), [
      [Et, c(n)]
    ]);
  }
}), Pi = {}, Ai = { class: "input-control" };
function Di(e, t) {
  return v(), g("div", Ai, [
    _(e.$slots, "default")
  ]);
}
const ji = /* @__PURE__ */ E(Pi, [["render", Di]]), Ni = {}, Bi = { class: "input-group" };
function Mi(e, t) {
  return v(), g("div", Bi, [
    _(e.$slots, "default")
  ]);
}
const Zi = /* @__PURE__ */ E(Ni, [["render", Mi]]), Li = {}, Fi = { class: "input-group-addon" };
function Xi(e, t) {
  return v(), g("div", Fi, [
    _(e.$slots, "default")
  ]);
}
const Ui = /* @__PURE__ */ E(Li, [["render", Xi]]), ge = {
  Root: zi,
  Before: Ii,
  After: Oi,
  Native: Ti,
  Textarea: Vi,
  Control: ji,
  Group: Zi,
  GroupAddon: Ui
}, gn = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function Ji() {
  return B(gn, null);
}
function Ki(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), r = d(() => fo(n.value) ? n.value : t.value.value && Array.isArray(n.value) ? n.value.includes(t.value.value) : !1), i = d(() => !!(r.value || t.value?.checked)), s = d(() => !!t.value?.indeterminate);
  return {
    isActive: r,
    isDisabled: o,
    isChecked: i,
    isIndeterminate: s
  };
}
function Gi(e) {
  const t = d(() => !!y(e.checkboxRootContext?.isDisabled)), n = d(() => !!y(e.checkboxRootContext?.isActive)), o = d(() => !!y(e.checkboxRootContext?.isIndeterminate)), r = d(() => !!y(e.checkboxRootContext?.isValid)), i = d(() => !!y(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isIndeterminate: o,
    isValid: r,
    isInvalid: i
  };
}
const qi = ["value", "disabled", "checked"], Yi = /* @__PURE__ */ R({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = J(), { isChecked: u, isDisabled: f, isIndeterminate: h } = Ki({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    }), p = Ie("inputRef");
    return q([p, h], ([m, b]) => {
      m && (m.indeterminate = !!b);
    }, {
      immediate: !0
    }), M(gn, {
      props: () => n,
      modelValue: () => r.value,
      isActive: () => u.value,
      isDisabled: () => f.value,
      isIndeterminate: () => h.value,
      isValid: () => a.value,
      isInvalid: () => l.value
    }), (m, b) => (v(), g("label", {
      class: C(["checkbox", {
        "checkbox--disabled": c(f),
        "checkbox--active": c(u),
        "checkbox--indeterminate": c(h),
        "checkbox--invalid": c(l),
        "checkbox--valid": c(a)
      }])
    }, [
      X(U("input", W({
        ref_key: "inputRef",
        ref: p,
        "onUpdate:modelValue": b[0] || (b[0] = ($) => r.value = $),
        value: e.value,
        type: "checkbox",
        disabled: c(f),
        checked: c(u),
        class: "checkbox__input"
      }, Ve(o, !0)), null, 16, qi), [
        [Vt, r.value]
      ]),
      _(m.$slots, "default")
    ], 2));
  }
}), Wi = /* @__PURE__ */ R({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = Ji(), { isDisabled: n, isActive: o, isIndeterminate: r, isValid: i, isInvalid: s } = Gi({
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
      _(a.$slots, "default", {
        isDisabled: c(n),
        isActive: c(o),
        isIndeterminate: c(r),
        isValid: c(i),
        isInvalid: c(s)
      }, () => [
        Y(te(c(o) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), Hi = {}, Qi = { class: "checkbox-title" };
function ea(e, t) {
  return v(), g("span", Qi, [
    _(e.$slots, "default")
  ]);
}
const ta = /* @__PURE__ */ E(Hi, [["render", ea]]), na = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), Gc = {
  Root: Yi,
  Indicator: Wi,
  Title: ta,
  Group: na
};
function oa(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: d(() => n.value === t.value.value),
    isDisabled: o
  };
}
function ra(e) {
  const t = d(() => !!y(e.radioRootContext?.isDisabled)), n = d(() => !!y(e.radioRootContext?.isActive)), o = d(() => !!y(e.radioRootContext?.isValid)), r = d(() => !!y(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const yn = /* @__PURE__ */ Symbol("RadioRootContextKey");
function sa() {
  return B(yn, null);
}
const ia = ["value", "disabled"], aa = /* @__PURE__ */ R({
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
    const n = e, o = t, r = L(e, "modelValue"), { formRootContext: i, formItemContext: s, isValid: a, isInvalid: l } = J(), { isActive: u, isDisabled: f } = oa({
      formRootContext: i,
      formItemContext: s,
      props: () => n,
      modelValue: () => r.value
    });
    return M(yn, {
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
      X(U("input", W({
        "onUpdate:modelValue": p[0] || (p[0] = (m) => r.value = m),
        value: e.value,
        type: "radio",
        disabled: c(f),
        class: "radio__input"
      }, Ve(o, !0)), null, 16, ia), [
        [Mn, r.value]
      ]),
      _(h.$slots, "default")
    ], 2));
  }
}), la = /* @__PURE__ */ R({
  __name: "RadioIndicator",
  setup(e) {
    const t = sa(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = ra({
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
      _(s.$slots, "default", {
        isDisabled: c(n),
        isActive: c(o),
        isValid: c(r),
        isInvalid: c(i)
      }, () => [
        Y(te(c(o) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), ca = {}, ua = { class: "radio-title" };
function da(e, t) {
  return v(), g("span", ua, [
    _(e.$slots, "default")
  ]);
}
const fa = /* @__PURE__ */ E(ca, [["render", da]]), pa = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), qc = {
  Root: aa,
  Indicator: la,
  Title: fa,
  Group: pa
};
function ma(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: n,
    isDisabled: o
  };
}
function ha(e) {
  const t = d(() => !!y(e.switchRootContext?.isDisabled)), n = d(() => !!y(e.switchRootContext?.isActive)), o = d(() => !!y(e.switchRootContext?.isValid)), r = d(() => !!y(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: n,
    isValid: o,
    isInvalid: r
  };
}
const bn = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function va() {
  return B(bn, null);
}
const ga = { class: "switch" }, ya = ["disabled"], ba = /* @__PURE__ */ R({
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
    const t = e, n = L(e, "modelValue"), { formRootContext: o, formItemContext: r, isValid: i, isInvalid: s } = J(), { isDisabled: a, isActive: l } = ma({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value
    });
    return M(bn, {
      props: () => t,
      isActive: () => l.value,
      isDisabled: () => a.value,
      isValid: () => i.value,
      isInvalid: () => s.value
    }), (u, f) => (v(), g("label", ga, [
      X(U("input", {
        "onUpdate:modelValue": f[0] || (f[0] = (h) => n.value = h),
        type: "checkbox",
        disabled: c(a),
        class: "switch__input"
      }, null, 8, ya), [
        [Vt, n.value]
      ]),
      _(u.$slots, "default")
    ]));
  }
}), _a = /* @__PURE__ */ R({
  __name: "SwitchIndicator",
  setup(e) {
    const t = va(), { isDisabled: n, isActive: o, isValid: r, isInvalid: i } = ha({
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
}), $a = {}, Ra = { class: "switch-title" };
function za(e, t) {
  return v(), g("span", Ra, [
    _(e.$slots, "default")
  ]);
}
const xa = /* @__PURE__ */ E($a, [["render", za]]), Yc = {
  Root: ba,
  Indicator: _a,
  Title: xa
}, _n = 1, wa = -1 / 0, Ca = 1 / 0, Ia = 100, $n = 0, It = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Sa(e) {
  const t = d(() => y(e.props)), n = d(() => y(e.modelValue)), o = d(() => t.value.step || _n), r = d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), i = d(() => r.value || le(t.value.min) && n.value === t.value.min), s = d(() => r.value || le(t.value.max) && !(n.value < t.value.max));
  function a() {
    if (t.value.readonly)
      return;
    const f = n.value - o.value;
    (!le(t.value.min) || f >= t.value.min) && e.onDecrement?.(f);
  }
  function l() {
    if (t.value.readonly)
      return;
    const f = n.value + o.value;
    (!le(t.value.max) || f <= t.value.max) && e.onIncrement?.(f);
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
function Oa(e) {
  const t = d(() => y(e.mousewheel)), n = d(() => le(t.value) && t.value > 0 ? t.value : Ia);
  return {
    handleWheel: Ge((r) => {
      t.value && (r.preventDefault(), r.stopImmediatePropagation(), r.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, n.value)
  };
}
function ka(e) {
  const t = d(() => y(e.inputNumberRootContext?.props)), n = d({
    get: () => y(e.inputNumberRootContext?.modelValue) ?? $n,
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
function Ta(e) {
  const t = d(() => y(e.props)), n = d(() => t.value.action === It.DECREMENT), o = d(() => t.value.action === It.INCREMENT), r = d(() => n.value ? !!y(e.inputNumberRootContext?.isDecrementDisabled) : !!y(e.inputNumberRootContext?.isIncrementDisabled));
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
const Rn = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function zn() {
  return B(Rn, null);
}
const Ea = /* @__PURE__ */ R({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ P({
    mousewheel: { type: [Boolean, Number] },
    min: { default: wa },
    max: { default: Ca },
    step: { default: _n },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    direction: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      default: $n
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
    } = Sa({
      formRootContext: o,
      formItemContext: r,
      props: () => t,
      modelValue: () => n.value,
      onUpdateModelValue: (b) => {
        n.value = b;
      },
      onDecrement: (b) => {
        n.value = b;
      },
      onIncrement: (b) => {
        n.value = b;
      }
    });
    return M(Rn, {
      props: () => t,
      isDisabled: () => l.value,
      modelValue: () => n.value,
      step: () => a.value,
      isDecrementDisabled: () => u.value,
      isIncrementDisabled: () => f.value,
      handleDecrement: h,
      handleIncrement: p,
      setModelValue: m
    }), (b, $) => (v(), g("div", {
      class: C(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": c(s),
        "input-number--valid": c(i)
      }])
    }, [
      _(b.$slots, "default")
    ], 2));
  }
}), Va = { class: "input-number-input" }, Pa = /* @__PURE__ */ R({
  __name: "InputNumberInput",
  setup(e) {
    const t = zn(), { props: n, modelValue: o } = ka({
      inputNumberRootContext: t
    }), { handleWheel: r } = Oa({
      mousewheel: () => y(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (i, s) => (v(), g("div", Va, [
      X(U("input", W({
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
}), Aa = ["disabled"], Da = /* @__PURE__ */ R({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, n = zn(), { handleAction: o, isDisabled: r, isDecrement: i, isIncrement: s } = Ta({
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
      _(a.$slots, "default", {}, () => [
        c(i) ? (v(), g(K, { key: 0 }, [
          Y(" - ")
        ], 64)) : c(s) ? (v(), g(K, { key: 1 }, [
          Y(" + ")
        ], 64)) : fe("", !0)
      ])
    ], 10, Aa));
  }
}), Wc = {
  Root: Ea,
  Input: Pa,
  Button: Da
};
function ja() {
  const e = V(ye.PASSWORD);
  function t() {
    e.value === ye.PASSWORD ? e.value = ye.TEXT : e.value = ye.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Na = /* @__PURE__ */ R({
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
    const t = e, n = kt(), o = L(e, "modelValue"), { currentType: r, handleToggleType: i } = ja();
    return (s, a) => (v(), ne(c(ge).Root, W(t, {
      modelValue: o.value,
      "onUpdate:modelValue": a[1] || (a[1] = (l) => o.value = l),
      "native-type": c(r)
    }), {
      default: G((l) => [
        n?.before ? (v(), ne(c(ge).Before, { key: 0 }, {
          default: G(() => [
            _(s.$slots, "before", _e($e(l)))
          ]),
          _: 2
        }, 1024)) : fe("", !0),
        Ce(c(ge).Control, null, {
          default: G(() => [
            Ce(c(ge).Native)
          ]),
          _: 1
        }),
        Ce(c(ge).After, null, {
          default: G(() => [
            _(s.$slots, "after", _e($e(l)), () => [
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
}), Hc = {
  Root: Na
};
function Ba(e) {
  const t = d(() => y(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Ma(e) {
  return {
    isDisabled: d(() => {
      const n = e.inputCodeRootContext;
      return n ? !!y(n.isDisabled) : !1;
    })
  };
}
const xn = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function Za() {
  return B(xn, null);
}
const La = /* @__PURE__ */ R({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = J(), { isDisabled: s } = Ba({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(xn, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, l) => (v(), g("div", {
      class: C(["input-code", {
        "input-code--disabled": c(s),
        "input-code--invalid": c(i),
        "input-code--valid": c(r)
      }])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), Fa = ["disabled", "aria-disabled"], Xa = /* @__PURE__ */ R({
  __name: "InputCodePin",
  setup(e) {
    const t = Za(), { isDisabled: n } = Ma({
      inputCodeRootContext: t
    });
    return (o, r) => (v(), g("input", {
      type: "text",
      disabled: c(n),
      "aria-disabled": c(n),
      class: "input-code-pin"
    }, null, 8, Fa));
  }
}), Qc = {
  Root: La,
  Pin: Xa
}, wn = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function Cn() {
  return B(wn, null);
}
function Ua(e) {
  const t = d(() => y(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Ja(e) {
  function t(o) {
  }
  function n(o) {
  }
  return {
    handleEnter: t,
    handleTab: n
  };
}
const Ka = /* @__PURE__ */ R({
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
    const n = e, o = L(e, "modelValue"), { formRootContext: r, formItemContext: i, isValid: s, isInvalid: a } = J(), { isDisabled: l } = Ua({
      formRootContext: r,
      formItemContext: i,
      props: () => n
    });
    return M(wn, {
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
      _(u.$slots, "default")
    ], 2));
  }
}), Ga = { class: "input-tags-input" }, qa = /* @__PURE__ */ R({
  __name: "InputTagsInput",
  setup(e) {
    Cn();
    const { handleEnter: t, handleTab: n } = Ja();
    return (o, r) => (v(), g("div", Ga, [
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
}), Ya = { class: "input-tags-tags" }, Wa = /* @__PURE__ */ R({
  __name: "InputTagsTags",
  setup(e) {
    return Cn(), (t, n) => (v(), g("div", Ya));
  }
}), eu = {
  Root: Ka,
  Input: qa,
  Tags: Wa
};
function Ha(e) {
  const t = d(() => y(e.props));
  return {
    isDisabled: d(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Qa(e) {
  return {
    isDisabled: d(() => !!y(e.inputRangeRootContext?.isDisabled))
  };
}
const In = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function el() {
  return B(In, null);
}
const tl = /* @__PURE__ */ R({
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
    const { formRootContext: n, formItemContext: o, isValid: r, isInvalid: i } = J(), { isDisabled: s } = Ha({
      formRootContext: n,
      formItemContext: o,
      props: () => t
    });
    return M(In, {
      props: () => t,
      isDisabled: () => s.value
    }), (a, l) => (v(), g("div", {
      class: C(["input-range", {
        "input-range--disabled": c(s),
        "input-range--invalid": c(i),
        "input-range--valid": c(r)
      }])
    }, [
      _(a.$slots, "default")
    ], 2));
  }
}), nl = ["aria-disabled"], ol = /* @__PURE__ */ R({
  __name: "InputRangeSlider",
  setup(e) {
    const t = el(), { isDisabled: n } = Qa({
      inputRangeRootContext: t
    });
    return (o, r) => (v(), g("div", {
      class: "input-range-slider",
      "aria-disabled": c(n)
    }, null, 8, nl));
  }
}), tu = {
  Root: tl,
  Slider: ol
}, Sn = /* @__PURE__ */ Symbol("ModalRootContextKey");
function rl() {
  return B(Sn, null);
}
function sl(e) {
  const t = d(() => y(e.configProviderRootContext?.props)), n = d(() => y(e.modelValue)), o = d(() => t.value?.teleportTarget);
  function r() {
    e.onClose?.();
  }
  return q(n, (i) => {
    i && e.onOpen?.();
  }), {
    close: r,
    teleportTarget: o
  };
}
function il(e) {
  function t() {
    e.modalRootContext?.close();
  }
  return {
    close: t
  };
}
const On = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey"), kn = "body";
function al() {
  return B(On, {
    props: () => ({
      teleportTarget: kn
    }),
    t: () => ""
  });
}
function ll(e) {
  const t = d(() => y(e.props));
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
const cl = /* @__PURE__ */ R({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: { default: () => kn },
    direction: {}
  },
  setup(e) {
    const t = e, { t: n } = ll({
      props: () => t
    });
    return M(On, {
      props: () => t,
      t: n
    }), (o, r) => _(o.$slots, "default");
  }
}), nu = {
  Root: cl
}, ul = /* @__PURE__ */ R({
  inheritAttrs: !1,
  __name: "ModalRoot",
  props: /* @__PURE__ */ P({
    position: { default: "center" },
    appendToBody: { type: Boolean, default: !0 },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ P(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const n = e, o = t, r = L(e, "modelValue"), i = Zn(), s = al(), { close: a, teleportTarget: l } = sl({
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
    return M(Sn, {
      props: n,
      close: a
    }), (u, f) => (v(), ne(Ln, {
      to: c(l),
      disabled: !e.appendToBody
    }, [
      Ce(Fn, {
        name: "fade-in-down",
        onAfterEnter: f[1] || (f[1] = (h) => o("opened", h)),
        onAfterLeave: f[2] || (f[2] = (h) => o("closed", h))
      }, {
        default: G(() => [
          X(U("div", W({ class: "modal" }, c(i), {
            class: {
              "modal--open": r.value,
              [`modal--position-${e.position}`]: e.position,
              [`modal--size-${e.size}`]: e.size
            },
            onClick: f[0] || (f[0] = //@ts-ignore
            (...h) => c(a) && c(a)(...h))
          }), [
            _(u.$slots, "default")
          ], 16), [
            [Xe, r.value]
          ])
        ]),
        _: 3
      })
    ], 8, ["to", "disabled"]));
  }
}), dl = {}, fl = { class: "modal-body" };
function pl(e, t) {
  return v(), g("div", fl, [
    _(e.$slots, "default")
  ]);
}
const ml = /* @__PURE__ */ E(dl, [["render", pl]]), hl = /* @__PURE__ */ R({
  __name: "ModalClose",
  setup(e) {
    const t = rl(), { close: n } = il({
      modalRootContext: t
    });
    return (o, r) => (v(), g("button", {
      type: "button",
      class: "modal-close",
      onClick: r[0] || (r[0] = //@ts-ignore
      (...i) => c(n) && c(n)(...i))
    }, [
      _(o.$slots, "default")
    ]));
  }
}), vl = {}, gl = { class: "modal-header" };
function yl(e, t) {
  return v(), g("div", gl, [
    _(e.$slots, "default")
  ]);
}
const bl = /* @__PURE__ */ E(vl, [["render", yl]]), _l = {}, $l = { class: "modal-footer" };
function Rl(e, t) {
  return v(), g("div", $l, [
    _(e.$slots, "default")
  ]);
}
const zl = /* @__PURE__ */ E(_l, [["render", Rl]]), xl = {}, wl = { class: "modal-title" };
function Cl(e, t) {
  return v(), g("div", wl, [
    _(e.$slots, "default")
  ]);
}
const Il = /* @__PURE__ */ E(xl, [["render", Cl]]), Sl = {}, Ol = { class: "modal-content" };
function kl(e, t) {
  return v(), g("div", Ol, [
    _(e.$slots, "default")
  ]);
}
const Tl = /* @__PURE__ */ E(Sl, [["render", kl]]), El = {};
function Vl(e, t) {
  return v(), g("div", {
    class: "modal-dialog",
    role: "dialog",
    onClick: t[0] || (t[0] = Ot(() => {
    }, ["stop"]))
  }, [
    _(e.$slots, "default")
  ]);
}
const Pl = /* @__PURE__ */ E(El, [["render", Vl]]), ou = {
  Root: ul,
  Body: ml,
  Close: hl,
  Header: bl,
  Footer: zl,
  Title: Il,
  Content: Tl,
  Dialog: Pl
};
function Al(e) {
  const t = d(() => y(e.props));
  function n() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: n
  };
}
const Dl = /* @__PURE__ */ R({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const n = e, o = t, { handleDelete: r } = Al({
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
      _(i.$slots, "default"),
      e.canDelete ? (v(), g("button", {
        key: 0,
        type: "button",
        onClick: s[0] || (s[0] = //@ts-ignore
        (...a) => c(r) && c(r)(...a))
      }, " X ")) : fe("", !0)
    ], 2));
  }
}), jl = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), ru = {
  Root: Dl,
  Group: jl
}, Nl = { class: "layout" }, Bl = /* @__PURE__ */ R({
  __name: "LayoutRoot",
  setup(e) {
    return (t, n) => (v(), g("div", Nl, [
      _(t.$slots, "header"),
      _(t.$slots, "default"),
      _(t.$slots, "footer")
    ]));
  }
}), Ml = {}, Zl = { class: "layout-body" };
function Ll(e, t) {
  return v(), g("main", Zl, [
    _(e.$slots, "default")
  ]);
}
const Fl = /* @__PURE__ */ E(Ml, [["render", Ll]]), su = {
  Root: Bl,
  Body: Fl
}, Xl = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), Ul = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), Jl = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), Kl = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), Gl = {
  Root: Jl,
  Item: Kl
}, ql = /* @__PURE__ */ R({
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
    const t = Xn(e, ["guttersY", "guttersX", "wrap"]);
    return (n, o) => (v(), ne(c(Gl).Root, W(t, {
      wrap: e.wrap,
      class: ["row", {
        "row--gutters-x": e.guttersX,
        "row--gutters-y": e.guttersY
      }]
    }), {
      default: G(() => [
        _(n.$slots, "default")
      ]),
      _: 3
    }, 16, ["wrap", "class"]));
  }
}), iu = {
  Container: Xl,
  Row: ql,
  Col: Ul
}, Yl = { class: "section" }, Wl = /* @__PURE__ */ R({
  __name: "SectionRoot",
  setup(e) {
    return (t, n) => (v(), g("section", Yl, [
      _(t.$slots, "default")
    ]));
  }
}), Hl = {}, Ql = { class: "section-header" };
function ec(e, t) {
  return v(), g("header", Ql, [
    _(e.$slots, "default")
  ]);
}
const tc = /* @__PURE__ */ E(Hl, [["render", ec]]), nc = {}, oc = { class: "section-title" };
function rc(e, t) {
  return v(), g("h1", oc, [
    _(e.$slots, "default")
  ]);
}
const sc = /* @__PURE__ */ E(nc, [["render", rc]]), ic = {}, ac = { class: "section-footer" };
function lc(e, t) {
  return v(), g("footer", ac, [
    _(e.$slots, "default")
  ]);
}
const cc = /* @__PURE__ */ E(ic, [["render", lc]]), uc = {}, dc = { class: "section-body" };
function fc(e, t) {
  return v(), g("div", dc, [
    _(e.$slots, "default")
  ]);
}
const pc = /* @__PURE__ */ E(uc, [["render", fc]]), au = {
  Root: Wl,
  Header: tc,
  Title: sc,
  Footer: cc,
  Body: pc
}, mc = /* @__PURE__ */ R({
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
    return (t, n) => (v(), ne(c(Ft).Root, {
      as: e.as,
      "as-child": e.asChild,
      class: C(["text", {
        "text--uppercase": e.uppercase,
        "text--underline": e.underline,
        [`text--size-${e.size}`]: e.size,
        [`text--theme-${e.theme}`]: e.theme,
        [`text--weight-${e.weight}`]: e.weight
      }])
    }, {
      default: G(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
}), lu = {
  Root: mc
}, hc = /* @__PURE__ */ R({
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
      _(t.$slots, "default")
    ], 2));
  }
}), vc = {}, gc = { class: "divider-content" };
function yc(e, t) {
  return v(), g("div", gc, [
    _(e.$slots, "default")
  ]);
}
const bc = /* @__PURE__ */ E(vc, [["render", yc]]), cu = {
  Root: hc,
  Content: bc
}, uu = {};
export {
  $c as Accordion,
  Sc as Button,
  Gc as Checkbox,
  Uc as ClickOutsidePlugin,
  nu as ConfigProvider,
  On as ConfigProviderRootContextKey,
  Ec as Direction,
  cu as Divider,
  Gl as Flex,
  Pc as FlexAlign,
  Ac as FlexJustify,
  Lc as Form,
  iu as Grid,
  It as INPUT_NUMBER_ACTIONS,
  Ca as INPUT_NUMBER_MAX,
  wa as INPUT_NUMBER_MIN,
  _n as INPUT_NUMBER_STEP,
  $n as INPUT_NUMBER_VALUE_DEFAULT,
  Ia as INPUT_NUMBER_WHEEL_DELAY,
  ge as Input,
  Qc as InputCode,
  zo as InputModes,
  ye as InputNativeTypes,
  Wc as InputNumber,
  Hc as InputPassword,
  tu as InputRange,
  eu as InputTags,
  Xt as InputTypes,
  it as IntersectionPresets,
  su as Layout,
  Xc as LoadingPlugin,
  ou as Modal,
  Vc as Position,
  Ft as Primitive,
  qc as Radio,
  gi as Scrollbar,
  au as Section,
  Kc as Select,
  Tc as Sizes,
  Yc as Switch,
  ru as Tag,
  lu as Text,
  kc as Themes,
  Jc as TooltipPlugin,
  Fc as VisiblePlugin,
  Cc as booleanToBooleanish,
  ve as clone,
  qe as debounce,
  Ic as defineFormRules,
  zc as delay,
  st as getProp,
  fo as isBoolean,
  Rc as isEmpty,
  po as isFunction,
  Pe as isNull,
  le as isNumber,
  Ke as isObject,
  pe as isString,
  oe as isUndefined,
  wc as omit,
  xc as pick,
  Lt as renderSlotFragments,
  uu as ruRU,
  Ge as throttle,
  Jn as useAccordionItem,
  Un as useAccordionRoot,
  Kn as useAccordionTrigger,
  Nc as useAnimatedNumber,
  jc as useClipboard,
  al as useConfigProviderRootContext,
  Zc as useEmitProxy,
  js as useFormItem,
  xo as useFormRoot,
  Ro as useIntersectionObserver,
  Dc as useLoadImage,
  Oc as usePlural,
  Mc as useScrollTo,
  re as useToggle,
  Bc as useWindowScroll,
  dn as vClickOutside,
  ii as vLoading,
  ai as vTooltip,
  si as vVisible
};
