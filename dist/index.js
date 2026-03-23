import { computed as c, toValue as _, inject as U, defineComponent as p, mergeModels as I, useModel as z, provide as H, createElementBlock as m, openBlock as r, normalizeClass as C, renderSlot as d, unref as a, withDirectives as Y, createElementVNode as B, vShow as ie, ref as A, watch as K, onBeforeUnmount as je, markRaw as no, Fragment as G, onMounted as re, onScopeDispose as He, isRef as Ae, nextTick as so, useId as Ue, onUnmounted as ke, withModifiers as lo, useSlots as J, useTemplateRef as ne, createCommentVNode as F, normalizeProps as E, guardReactiveProps as D, createTextVNode as j, renderList as me, toDisplayString as N, createBlock as x, withCtx as g, mergeProps as X, toHandlers as te, vModelDynamic as ao, vModelText as ft, vModelCheckbox as pt, vModelRadio as io, createVNode as w, withKeys as et, resolveDynamicComponent as ro, Comment as uo, cloneVNode as co, h as ae, createPropsRestProxy as vt, shallowRef as tt, Teleport as ht, Transition as Ee, createSlots as bt, reactive as mo, defineAsyncComponent as De, render as ye } from "vue";
import { z as ot } from "zod";
function fo(e) {
  const t = c(() => _(e.props));
  function o(n) {
    const s = _(e.modelValue);
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
function po(e) {
  const t = c(() => _(e.props)), o = c(() => _(e.accordionRootContext?.modelValue)), n = c(() => !!_(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: c(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function vo(e) {
  const t = c(() => _(e.accordionItemContext?.props)), o = c(() => !!t.value?.disabled);
  function n() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: o,
    handleToggle: n
  };
}
const _t = /* @__PURE__ */ Symbol("AccordionRootContextKey"), gt = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function yt() {
  return U(_t, null);
}
function Vt() {
  return U(gt, null);
}
function ho() {
  const e = yt(), t = Vt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const bo = /* @__PURE__ */ p({
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
    const o = e, n = t, s = z(e, "modelValue"), { setModelValue: l } = fo({
      props: () => o,
      modelValue: () => s.value,
      onChange: (i) => n("change", i),
      onChangeModel: (i) => {
        s.value = i;
      }
    });
    return H(_t, {
      props: () => o,
      modelValue: () => s.value,
      setModelValue: l
    }), (i, u) => (r(), m("div", {
      class: C(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(i.$slots, "default")
    ], 2));
  }
}), _o = /* @__PURE__ */ p({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = yt(), { isActive: n } = po({
      accordionRootContext: o,
      props: () => t
    });
    return H(gt, {
      props: () => t,
      isActive: () => n.value
    }), (s, l) => (r(), m("div", {
      class: C(["accordion-item", {
        "accordion-item--open": a(n),
        "accordion-item--disabled": e.disabled
      }])
    }, [
      d(s.$slots, "default", { isActive: a(n) })
    ], 2));
  }
}), S = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, go = {}, yo = { class: "accordion-header" };
function Vo(e, t) {
  return r(), m("div", yo, [
    d(e.$slots, "default")
  ]);
}
const $o = /* @__PURE__ */ S(go, [["render", Vo]]), xo = {
  class: "accordion-body",
  role: "region"
}, Co = { class: "accordion-body__content" }, Ro = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = Vt(), o = c(() => !!_(t?.isActive));
    return (n, s) => Y((r(), m("div", xo, [
      B("div", Co, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [ie, o.value]
    ]);
  }
}), Io = {}, Bo = { class: "accordion-title" };
function To(e, t) {
  return r(), m("div", Bo, [
    d(e.$slots, "default")
  ]);
}
const wo = /* @__PURE__ */ S(Io, [["render", To]]), So = ["disabled"], Mo = /* @__PURE__ */ p({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = ho(), { isDisabled: n, handleToggle: s } = vo({
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
    ], 8, So));
  }
}), de = {
  Root: bo,
  Item: _o,
  Header: $o,
  Body: Ro,
  Title: wo,
  Trigger: Mo
};
function Ao(e) {
  const t = c(() => _(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const $t = /* @__PURE__ */ Symbol("FormRootContextKey"), xt = /* @__PURE__ */ Symbol("FormItemContextKey");
function Ct() {
  return U($t, null);
}
function Rt() {
  return U(xt, null);
}
function Q() {
  const e = Ct(), t = Rt(), o = c(() => !!t?.validationStatus.value.isSuccess), n = c(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: o,
    isInvalid: n
  };
}
const ko = ["disabled", "type"], Eo = /* @__PURE__ */ p({
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
    const t = e, { formRootContext: o, formItemContext: n } = Q(), { isDisabled: s } = Ao({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return (l, i) => (r(), m("button", {
      class: C(["button", [
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
    }, [
      d(l.$slots, "default")
    ], 10, ko));
  }
}), Do = {}, zo = { class: "button-content" };
function Oo(e, t) {
  return r(), m("span", zo, [
    d(e.$slots, "default")
  ]);
}
const Po = /* @__PURE__ */ S(Do, [["render", Oo]]), Lo = /* @__PURE__ */ p({
  __name: "ButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["button-group", {
        [`button-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Xe = {
  Root: Eo,
  Content: Po,
  Group: Lo
};
function No() {
  const e = A([]);
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
function Fo(e) {
  const t = c(() => _(e.formItems)), o = c(() => t.value.filter((l) => l.isValidatable));
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
function Z(e = !1) {
  const t = A(e);
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
function ju(e) {
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
function Xo(e, t, o) {
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
const It = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), jo = Object.freeze({
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
}), Hu = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Uu = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Gu = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), Yu = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), qu = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Ku = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch",
  BETWEEN: "between",
  AROUND: "around"
}), nt = Object.freeze({
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
function Ho(e) {
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
function se(e) {
  return typeof e > "u";
}
function Wu(e) {
  return ze(e) || se(e) ? !0 : pe(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ge(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Uo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function W(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function Go(e) {
  return !ze(e) && !se(e) && Ge(e) && !Array.isArray(e);
}
function st(e, t) {
  if (!e || !t.trim())
    return null;
  const o = t.split(".");
  let n = e;
  for (const s of o) {
    if (!Go(n))
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
  if (Uo(e))
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
function Zu(e) {
  return new Promise((t) => setTimeout(t, e));
}
function Ju(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function Qu(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function ec(e) {
  return e ? "true" : "false";
}
function Ye(e, t, o = {}) {
  const {
    noTrailing: n = !1,
    noLeading: s = !1,
    debounceMode: l = void 0
  } = o;
  let i = null, u = !1, f = 0, v = null;
  function h() {
    i && (clearTimeout(i), i = null);
  }
  function b(y = {}) {
    const { upcomingOnly: R = !1 } = y;
    h(), u = !R;
  }
  function V() {
    if (f = Date.now(), v) {
      const y = v;
      e.apply(this, y), v = null;
    }
  }
  function $(...y) {
    if (u)
      return;
    const R = Date.now() - f;
    v = y;
    function T() {
      i = null;
    }
    h(), !s && l && !i && V.call(this), se(l) && R > t ? s ? (f = Date.now(), n || (i = setTimeout(l ? T : V.bind(this), t))) : V.call(this) : n || (i = setTimeout(
      l ? T : V.bind(this),
      se(l) ? t - R : t
    ));
  }
  return $.cancel = b, $;
}
function qe(e, t, o = {}) {
  const { atBegin: n = !1 } = o;
  return Ye(e, t, {
    debounceMode: n
  });
}
function tc(e) {
  return no(e);
}
function Bt(e) {
  return e ? e.flatMap((t) => t.type === G ? Bt(t.children) : [t]) : [];
}
function oc(e, t, o = {}) {
  const {
    rootMargin: n = nt.LAZY_IMAGE.rootMargin,
    threshold: s = nt.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: u } = Xo(e, M, {
    rootMargin: n,
    threshold: s
  }), [f, v] = Z(), [h, b] = Z(), V = A(""), $ = A(""), y = A(""), R = pe(t) ? { src: t } : t;
  function T() {
    if (f.value || h.value)
      return;
    const O = new Image();
    O.src = R.src, R.srcset && (O.srcset = R.srcset), R.sizes && (O.sizes = R.sizes), O.onload = () => {
      V.value = R.src, $.value = R.srcset || "", y.value = R.sizes || "", v(!0), b(!1);
    }, O.onerror = () => {
      v(!1), b(!0);
    };
  }
  function M(O) {
    O.forEach((P) => {
      P.isIntersecting && !f.value && !h.value && T();
    });
  }
  return re(() => {
    if (i || l && "loading" in HTMLImageElement.prototype) {
      T();
      return;
    }
  }), {
    isLoaded: f,
    hasError: h,
    imageSrc: V,
    imageSrcset: $,
    imageSizes: y,
    loadImage: T,
    stop: u
  };
}
function nc() {
  return {};
}
function sc() {
  if (!window)
    return {
      number: A(0),
      animate: () => {
      }
    };
  const e = A(0);
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
function lc() {
  if (!window)
    return {
      x: A(0),
      y: A(0)
    };
  const e = A(window.scrollX), t = A(window.scrollY);
  function o() {
    window && (e.value = window.scrollX, t.value = window.scrollY);
  }
  function n(s) {
    window.scrollTo(s);
  }
  return re(() => {
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
  (pe(e) ? document.querySelector(e) : Ae(e) ? a(e) : e)?.scrollIntoView({
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
function Yo(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = No(), { validate: s, clearValidate: l, validatableFormItems: i } = Fo({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [u, f] = Z(!1), v = A(!1), h = A("");
  function b() {
    t.value.forEach((y) => y.reset()), l();
  }
  K(i, async (y) => {
    const R = y.map((M) => M.id).sort().join(",");
    if (R === h.value)
      return;
    if (h.value = R, y.length === 0) {
      v.value && f(!0);
      return;
    }
    v.value = !0;
    const T = await s(!0);
    f(T);
  }, {
    immediate: !0
  });
  const V = qe(async () => {
    const y = await s(!0);
    f(y);
  }, 400);
  async function $(y = !1) {
    const R = await s(y);
    return f(R), R;
  }
  return K(() => _(e.modelValue), () => {
    V();
  }, {
    deep: !0
  }), re(async () => {
    await so(), await $(!0);
  }), He(() => {
    V.cancel();
  }), {
    isValid: u,
    validate: $,
    clearValidate: l,
    registerFormItem: o,
    unregisterFormItem: n,
    reset: b
  };
}
function qo() {
  const e = A();
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
function Ko(e) {
  const t = c(() => _(e.data)), o = c(() => _(e.schema)), n = A({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), s = A([]);
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
function Wo(e) {
  const t = Ue(), { field: o, registerField: n, unregisterField: s } = qo(), l = c(() => _(e.props)), i = c(() => l.value.name), u = c(() => e.formRootContext?.modelValue.value), f = c(() => e.formRootContext?.props?.rules), v = c(() => i.value && u.value && st(u.value, i.value)), h = c(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), b = c(() => {
    if (!i.value || !f.value)
      return null;
    const L = st(f.value, i.value);
    return L instanceof ot.ZodType ? L : null;
  }), V = c(() => !!b.value), $ = c(() => b.value ? !b.value.safeParse(void 0).success : !1), {
    validationStatus: y,
    validationErrors: R,
    clearValidateErrors: T,
    validate: M
  } = Ko({
    data: () => i.value ? {
      [i.value]: v.value
    } : null,
    schema: () => !i.value || !b.value ? null : ot.object({
      [i.value]: b.value
    }),
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), O = c(() => ({
    id: t,
    props: l.value,
    validationStatus: y.value,
    isValidatable: V.value,
    isRequired: $.value,
    registerField: n,
    unregisterField: s,
    reset: P,
    validate: M,
    clearValidateErrors: T
  }));
  function P() {
    !v.value || !l.value.name || (o.value?.reset(), T());
  }
  const k = qe(() => M(), 300);
  return ke(() => {
    k.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), K(O, (L) => {
    e.formRootContext?.registerFormItem(L);
  }, {
    deep: !0,
    immediate: !0
  }), K(v, () => k()), K(() => y.value.isSuccess, (L) => {
    L && T();
  }), {
    id: t,
    validationErrors: R,
    validationStatus: y,
    isDisabled: h,
    isRequired: $,
    reset: P,
    validate: M,
    clearValidateErrors: T,
    registerField: n,
    unregisterField: s
  };
}
const Zo = /* @__PURE__ */ p({
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
    const n = e, s = o, l = z(e, "modelValue"), {
      isValid: i,
      registerFormItem: u,
      unregisterFormItem: f,
      validate: v,
      clearValidate: h,
      reset: b
    } = Yo({
      modelValue: () => l.value,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    });
    async function V() {
      const $ = await v();
      s("submit", {
        isValid: $,
        reset: b
      });
    }
    return H($t, {
      props: n,
      modelValue: l,
      registerFormItem: u,
      unregisterFormItem: f
    }), t({
      validate: v,
      clearValidate: h,
      reset: b
    }), ($, y) => (r(), m("form", {
      class: C(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: lo(V, ["prevent"])
    }, [
      d($.$slots, "default", { isValid: a(i) })
    ], 34));
  }
}), Jo = {
  key: 0,
  class: "form-item__header"
}, Qo = { class: "form-item__body" }, en = {
  key: 1,
  class: "form-item__footer"
}, tn = /* @__PURE__ */ p({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = J(), i = Ct(), {
      validationErrors: u,
      validationStatus: f,
      isDisabled: v,
      isRequired: h,
      registerField: b,
      unregisterField: V,
      reset: $,
      validate: y,
      clearValidateErrors: R
    } = Wo({
      formRootContext: i,
      props: () => n,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    }), T = ne("root"), M = c(() => ({
      validationStatus: f.value,
      isRequired: h.value,
      errors: u.value
    }));
    return H(xt, {
      props: n,
      validationStatus: f,
      validationErrors: u,
      isRequired: h,
      isDisabled: v,
      registerField: b,
      unregisterField: V,
      reset: $,
      validate: y,
      clearValidateErrors: R
    }), t({
      reset: $,
      validate: y,
      clearValidateErrors: R
    }), (O, P) => (r(), m("div", {
      ref_key: "root",
      ref: T,
      class: C(["form-item", [
        {
          "form-item--disabled": a(v),
          "form-item--required": a(h),
          "form-item--invalid": a(f).isError,
          "form-item--validating": a(f).isValidating,
          "form-item--valid": a(f).isSuccess
        }
      ]])
    }, [
      l?.header ? (r(), m("div", Jo, [
        d(O.$slots, "header", E(D(M.value)))
      ])) : F("", !0),
      B("div", Qo, [
        d(O.$slots, "default", E(D(M.value)))
      ]),
      l.footer ? (r(), m("div", en, [
        d(O.$slots, "footer", E(D(M.value)))
      ])) : F("", !0)
    ], 2));
  }
}), on = {}, nn = { class: "form-item-title" };
function sn(e, t) {
  return r(), m("div", nn, [
    d(e.$slots, "default")
  ]);
}
const ln = /* @__PURE__ */ S(on, [["render", sn]]), an = {}, rn = { class: "form-item-required" };
function un(e, t) {
  return r(), m("span", rn, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" * ", -1))
    ])
  ]);
}
const cn = /* @__PURE__ */ S(an, [["render", un]]), dn = { class: "form-item-errors" }, mn = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = Rt(), o = c(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), m("div", dn, [
      (r(!0), m(G, null, me(o.value, (l, i) => (r(), m("div", {
        key: `error-${i}`,
        class: "form-item-errors__item"
      }, N(l.message), 1))), 128))
    ]));
  }
}), _e = {
  Root: Zo,
  Item: tn,
  ItemTitle: ln,
  ItemRequired: cn,
  ItemErrors: mn
};
function fn() {
  const e = A([]);
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
function pn(e) {
  const t = c(() => _(e.multiple)), o = c(() => _(e.modelValue)), n = c(() => _(e.options)), s = c(() => n.value.find((i) => i.props.value === o.value)), l = c(() => {
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
function vn(e) {
  const t = c(() => _(e.modelValue)), o = c(() => _(e.props)), { options: n, registerOption: s, unregisterOption: l } = fn(), { activeOption: i, activeOptions: u } = pn({
    multiple: () => !!o.value.multiple,
    options: () => n.value,
    modelValue: () => t.value
  }), [f, v] = Z(), h = c(() => fe(t.value, o.value.multiple) ? t.value.length > 0 : !!t.value), b = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.disabled));
  function V(M) {
    if (!b.value) {
      if (fe(t.value, o.value.multiple)) {
        const O = /* @__PURE__ */ new Set([...t.value]);
        O.has(M) ? O.delete(M) : O.add(M), e.onChangeModel?.([...O]);
      } else
        e.onChangeModel?.(M);
      e.onChange?.(M);
    }
  }
  function $() {
    if (fe(t.value, o.value.multiple)) {
      e.onChangeModel?.([]);
      return;
    }
    e.onChangeModel?.(""), e.onClear?.();
  }
  function y() {
    b.value || v(!0);
  }
  function R() {
    b.value || v(!1);
  }
  function T() {
    f.value ? R() : y();
  }
  return re(() => {
    e.formItemContext?.registerField({
      reset: $
    });
  }), ke(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: i,
    activeOptions: u,
    hasValue: h,
    isOpen: f,
    isDisabled: b,
    open: y,
    close: R,
    toggle: T,
    registerOption: s,
    unregisterOption: l,
    setModelValue: V,
    reset: $
  };
}
function hn(e) {
  const t = Ue(), o = c(() => _(e.selectRootContext?.modelValue)), n = c(() => _(e.props)), s = c(() => !!_(e.selectRootContext?.props)?.multiple), l = c(() => se(o.value) ? !1 : fe(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), i = c(() => !!(_(e.selectRootContext?.isDisabled) || n.value?.disabled)), u = c(() => ({
    id: t,
    props: n.value
  }));
  function f(v) {
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
    handleChange: f
  };
}
function bn(e) {
  const t = c(() => _(e.selectRootContext?.props)), o = c(() => _(e.selectRootContext?.activeOption)), n = c(() => o.value?.props?.title ?? o.value?.props.value), s = c(() => _(e.selectRootContext?.activeOptions) ?? []), l = c(() => !!_(e.selectRootContext?.hasValue)), i = c(() => se(e.selectRootContext?.modelValue) ? !1 : fe(_(e.selectRootContext.modelValue), !!t.value?.multiple)), u = c(() => t.value?.placeholder);
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
function _n(e) {
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
const Tt = /* @__PURE__ */ Symbol("SelectRootContextKey");
function Oe() {
  return U(Tt, null);
}
const gn = {
  mounted() {
  },
  unmounted() {
  }
}, rc = {
  install(e) {
    e.directive("visible", gn);
  }
}, yn = {
  mounted() {
  },
  unmounted() {
  }
}, uc = {
  install(e) {
    e.directive("loading", yn);
  }
}, wt = {
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
    e.directive("click-outside", wt);
  }
}, Vn = {
  mounted() {
  },
  unmounted() {
  }
}, dc = {
  install(e) {
    e.directive("tooltip", Vn);
  }
}, $n = ["aria-disabled"], xn = /* @__PURE__ */ p({
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
    const o = e, n = t, s = z(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), {
      activeOption: v,
      activeOptions: h,
      hasValue: b,
      isOpen: V,
      isDisabled: $,
      open: y,
      close: R,
      toggle: T,
      registerOption: M,
      unregisterOption: O,
      setModelValue: P
    } = vn({
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
    return H(Tt, {
      activeOption: () => v.value,
      activeOptions: () => h.value,
      modelValue: () => s.value,
      props: () => o,
      hasValue: () => b.value,
      isOpen: () => V.value,
      isDisabled: () => $.value,
      open: y,
      close: R,
      toggle: T,
      registerOption: M,
      unregisterOption: O,
      setModelValue: P
    }), (k, L) => Y((r(), m("div", {
      class: C(["select", {
        "select--disabled": a($),
        "select--open": a(V),
        "select--filled": a(b),
        "select--invalid": a(f),
        "select--valid": a(u)
      }]),
      "aria-disabled": a($)
    }, [
      d(k.$slots, "default")
    ], 10, $n)), [
      [a(wt), a(R)]
    ]);
  }
}), Cn = /* @__PURE__ */ p({
  __name: "SelectOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Oe(), { isActive: n, isDisabled: s, handleChange: l } = hn({
      selectRootContext: o,
      props: () => t
    });
    return (i, u) => (r(), m("div", {
      class: C(["select-option", {
        "select-option--active": a(n),
        "select-option--disabled": a(s)
      }]),
      onClick: u[0] || (u[0] = (f) => a(l)(e.value))
    }, [
      d(i.$slots, "default", {
        isActive: a(n),
        isDisabled: a(s)
      }, () => [
        j(N(e.title), 1)
      ])
    ], 2));
  }
}), Rn = /* @__PURE__ */ p({
  __name: "SelectTrigger",
  setup(e) {
    const t = Oe(), { open: o, close: n, toggle: s } = _n({
      selectRootContext: t
    });
    return (l, i) => d(l.$slots, "default", {
      open: a(o),
      close: a(n),
      toggle: a(s)
    });
  }
}), In = { class: "select-dropdown" }, Bn = /* @__PURE__ */ p({
  __name: "SelectDropdown",
  setup(e) {
    const t = Oe(), o = c(() => !!_(t?.isOpen));
    return (n, s) => Y((r(), m("div", In, [
      d(n.$slots, "default")
    ], 512)), [
      [ie, o.value]
    ]);
  }
}), Tn = /* @__PURE__ */ p({
  __name: "SelectValue",
  setup(e) {
    const t = Oe(), { activeOptionValue: o, activeOptions: n, hasValue: s, isMultiple: l, placeholder: i, toggle: u } = bn({
      selectRootContext: t
    });
    return (f, v) => (r(), m("div", {
      class: "select-value",
      onClick: v[0] || (v[0] = //@ts-ignore
      (...h) => a(u) && a(u)(...h))
    }, [
      d(f.$slots, "default", {}, () => [
        a(s) ? (r(), m(G, { key: 0 }, [
          a(l) ? (r(!0), m(G, { key: 0 }, me(a(n), (h) => (r(), m(G, null, [
            j(N(h.props.value), 1)
          ], 64))), 256)) : (r(), m(G, { key: 1 }, [
            j(N(a(o)), 1)
          ], 64))
        ], 64)) : (r(), m(G, { key: 1 }, [
          j(N(a(i)), 1)
        ], 64))
      ])
    ]));
  }
}), St = 300, Mt = 1, At = 10;
function lt(e, t = !1) {
  return t && e ? e.scrollTop : 0;
}
function at(e, t = !1) {
  return t && e ? e.scrollLeft : 0;
}
function it(e, t = !1) {
  return t && e ? e.offsetTop : 0;
}
function rt(e, t = !1) {
  return t && e ? e.offsetLeft : 0;
}
function wn(e) {
  const t = c(() => _(e.props)), o = c(() => t.value?.infiniteScrollOffset ?? At), n = c(() => t.value?.draggableMultiplier ?? Mt), s = c(() => W(t.value?.debounceDelay) ? t.value.debounceDelay : St), [l, i] = Z(), [u, f] = Z(), v = A(0), h = A(0), b = A(0), V = A(0);
  function $() {
    f(!1), i(!1);
  }
  const y = qe((P) => {
    e.onScroll?.(P), t.value?.draggable || (b.value = lt(e.scrollbar.value, !!t.value?.vertical), V.value = at(e.scrollbar.value, !!t.value?.horizontal));
    const k = e.scrollbar.value, L = e.content.value, oe = k ? k.clientHeight : 0, le = k ? k.clientWidth : 0, Ve = L ? L.scrollWidth : 0, ue = L ? L.scrollHeight : 0, ce = b.value + oe, Le = V.value + le, $e = !!(t.value?.vertical && ue - ce <= o.value), ee = !!(t.value?.horizontal && Ve - Le <= o.value);
    $e && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), R = Ye((P) => {
    if (e.onMousemove?.(P), !t.value?.draggable || !u.value)
      return;
    P.preventDefault(), P.stopPropagation();
    const k = e.scrollbar.value;
    if (!k)
      return;
    const L = !!t.value?.vertical, oe = !!t.value?.horizontal, le = P.pageY - it(k, L), ue = (P.pageX - rt(k, oe) - v.value) * n.value, ce = (le - h.value) * n.value;
    oe && (k.scrollLeft = V.value - ue), L && (k.scrollTop = b.value - ce);
  }, s.value);
  function T(P) {
    if (e.onMousedown?.(P), !t.value?.draggable)
      return;
    f(!0), i(!0);
    const k = e.scrollbar.value;
    if (k) {
      const L = !!t.value?.vertical, oe = !!t.value?.horizontal;
      h.value = P.pageY - it(k, L), v.value = P.pageX - rt(k, oe);
    }
    b.value = lt(e.scrollbar.value, !!t.value?.vertical), V.value = at(e.scrollbar.value, !!t.value?.horizontal);
  }
  function M(P) {
    e.onMouseleave?.(P), t.value?.draggable && $();
  }
  function O(P) {
    e.onMouseup?.(P), t.value?.draggable && $();
  }
  return He(() => {
    y.cancel?.(), R.cancel?.();
  }), {
    isGrabbing: l,
    handleScroll: y,
    handleMousedown: T,
    handleMouseleave: M,
    handleMouseup: O,
    handleMousemove: R
  };
}
const Sn = /* @__PURE__ */ p({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: Mt },
    infiniteScrollOffset: { default: At },
    debounceDelay: { default: St },
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const o = e, n = t, s = ne("scrollbar"), l = ne("content"), {
      isGrabbing: i,
      handleScroll: u,
      handleMousedown: f,
      handleMouseleave: v,
      handleMouseup: h,
      handleMousemove: b
    } = wn({
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
    return (V, $) => (r(), m("div", {
      ref_key: "scrollbar",
      ref: s,
      class: C(["scrollbar", {
        "scrollbar--hidden": e.hidden,
        "scrollbar--draggable": e.draggable,
        "scrollbar--vertical": e.vertical,
        "scrollbar--horizontal": e.horizontal,
        "scrollbar--grabbing": a(i),
        [`scrollbar--size-${e.size}`]: e.size,
        [`scrollbar--theme-${e.theme}`]: e.theme
      }]),
      onScroll: $[0] || ($[0] = //@ts-ignore
      (...y) => a(u) && a(u)(...y)),
      onMousedown: $[1] || ($[1] = //@ts-ignore
      (...y) => a(f) && a(f)(...y)),
      onMouseleave: $[2] || ($[2] = //@ts-ignore
      (...y) => a(v) && a(v)(...y)),
      onMouseup: $[3] || ($[3] = //@ts-ignore
      (...y) => a(h) && a(h)(...y)),
      onMousemove: $[4] || ($[4] = //@ts-ignore
      (...y) => a(b) && a(b)(...y))
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
  Root: Sn
}, Mn = /* @__PURE__ */ p({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, o) => (r(), x(a(kt).Root, { class: "select-scrollbar" }, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), ge = {
  Root: xn,
  Option: Cn,
  Trigger: Rn,
  Dropdown: Bn,
  Value: Tn,
  Scrollbar: Mn
};
function An(e) {
  const t = c(() => _(e.inputRootContext?.props));
  return {
    props: c(() => ({
      disabled: !!_(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function kn(e) {
  const t = c(() => _(e.inputRootContext?.props));
  return {
    props: c(() => ({
      disabled: !!_(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function En(e) {
  const [t, o] = Z(), n = c(() => _(e.props)), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.loading || n.value?.disabled)), l = c(() => n.value.type === It.TEXTAREA), i = c(() => !!_(e.modelValue)?.trim());
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
function Et(e) {
  return {
    modelValue: c({
      get: () => _(e.inputRootContext?.modelValue),
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
function Dn(e) {
  const t = c(() => _(e.inputRootContext?.props)), o = c(() => !!t.value?.clearable);
  function n() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: o,
    handleClear: n
  };
}
const Dt = /* @__PURE__ */ Symbol("InputRootContextKey");
function Ke() {
  return U(Dt, null);
}
const zn = /* @__PURE__ */ p({
  __name: "InputRoot",
  props: /* @__PURE__ */ I({
    type: { default: It.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: be.TEXT },
    inputMode: { default: jo.TEXT },
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
    const n = e, s = o, l = z(e, "modelValue"), { formRootContext: i, formItemContext: u, isValid: f, isInvalid: v } = Q(), { isDisabled: h, isTextarea: b, hasValue: V, isFocus: $, setFocus: y, setModelValue: R, reset: T } = En({
      formRootContext: i,
      formItemContext: u,
      modelValue: () => l.value,
      props: () => n,
      onUpdateModelValue: (M) => {
        l.value = M;
      }
    });
    return H(Dt, {
      isDisabled: () => h.value,
      props: () => n,
      modelValue: () => l.value,
      setFocus: y,
      setModelValue: R,
      reset: T,
      emit: s
    }), t({
      setFocus: y
    }), (M, O) => (r(), m("div", {
      class: C(["input", {
        "input--focus": a($),
        "input--textarea": a(b),
        "input--filled": a(V),
        "input--disabled": a(h),
        "input--loading": e.loading,
        "input--invalid": a(v),
        "input--valid": a(f)
      }])
    }, [
      d(M.$slots, "default", {
        isTextarea: a(b),
        isFocus: a($),
        hasValue: a(V),
        loading: !!e.loading,
        isInvalid: a(v),
        isValid: a(f)
      })
    ], 2));
  }
}), On = {}, Pn = { class: "input-before" };
function Ln(e, t) {
  return r(), m("div", Pn, [
    d(e.$slots, "default")
  ]);
}
const Nn = /* @__PURE__ */ S(On, [["render", Ln]]), Fn = { class: "input-after" }, Xn = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = Ke(), { isClearable: o, handleClear: n } = Dn({
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
}), jn = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Hn = /* @__PURE__ */ p({
  __name: "InputNative",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = Et({
      inputRootContext: t
    }), { props: s } = kn({
      inputRootContext: t
    });
    return (l, i) => Y((r(), m("input", X({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ae(o) ? o.value = u : null),
      type: a(s).nativeType,
      inputmode: a(s).inputMode,
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      placeholder: a(s).placeholder,
      class: "input-native"
    }, te(a(n), !0)), null, 16, jn)), [
      [ao, a(o)]
    ]);
  }
}), Un = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], Gn = /* @__PURE__ */ p({
  __name: "InputTextarea",
  setup(e) {
    const t = Ke(), { modelValue: o, listeners: n } = Et({
      inputRootContext: t
    }), { props: s } = An({
      inputRootContext: t
    });
    return (l, i) => Y((r(), m("textarea", X({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ae(o) ? o.value = u : null),
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      rows: a(s).rows,
      cols: a(s).cols,
      placeholder: a(s).placeholder,
      class: "input-textarea"
    }, te(a(n), !0)), null, 16, Un)), [
      [ft, a(o)]
    ]);
  }
}), Yn = {}, qn = { class: "input-control" };
function Kn(e, t) {
  return r(), m("div", qn, [
    d(e.$slots, "default")
  ]);
}
const Wn = /* @__PURE__ */ S(Yn, [["render", Kn]]), Zn = {}, Jn = { class: "input-group" };
function Qn(e, t) {
  return r(), m("div", Jn, [
    d(e.$slots, "default")
  ]);
}
const es = /* @__PURE__ */ S(Zn, [["render", Qn]]), ts = {}, os = { class: "input-group-addon" };
function ns(e, t) {
  return r(), m("div", os, [
    d(e.$slots, "default")
  ]);
}
const ss = /* @__PURE__ */ S(ts, [["render", ns]]), q = {
  Root: zn,
  Before: Nn,
  After: Xn,
  Native: Hn,
  Textarea: Gn,
  Control: Wn,
  Group: es,
  GroupAddon: ss
}, zt = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function ls() {
  return U(zt, null);
}
function as(e) {
  const t = c(() => _(e.props)), o = c(() => _(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = c(() => Ho(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), l = c(() => !!(s.value || t.value?.checked)), i = c(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: l,
    isIndeterminate: i
  };
}
function is(e) {
  const t = c(() => !!_(e.checkboxRootContext?.isDisabled)), o = c(() => !!_(e.checkboxRootContext?.isActive)), n = c(() => !!_(e.checkboxRootContext?.isIndeterminate)), s = c(() => !!_(e.checkboxRootContext?.isValid)), l = c(() => !!_(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: l
  };
}
const rs = ["value", "disabled", "checked"], us = /* @__PURE__ */ p({
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
    const o = e, n = t, s = z(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), { isChecked: v, isDisabled: h, isIndeterminate: b } = as({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    }), V = ne("inputRef");
    return K([V, b], ([$, y]) => {
      $ && ($.indeterminate = !!y);
    }, {
      immediate: !0
    }), H(zt, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isIndeterminate: () => b.value,
      isValid: () => u.value,
      isInvalid: () => f.value
    }), ($, y) => (r(), m("label", {
      class: C(["checkbox", {
        "checkbox--disabled": a(h),
        "checkbox--active": a(v),
        "checkbox--indeterminate": a(b),
        "checkbox--invalid": a(f),
        "checkbox--valid": a(u)
      }])
    }, [
      Y(B("input", X({
        ref_key: "inputRef",
        ref: V,
        "onUpdate:modelValue": y[0] || (y[0] = (R) => s.value = R),
        value: e.value,
        type: "checkbox",
        disabled: a(h),
        checked: a(v),
        class: "checkbox__input"
      }, te(n, !0)), null, 16, rs), [
        [pt, s.value]
      ]),
      d($.$slots, "default")
    ], 2));
  }
}), cs = /* @__PURE__ */ p({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = ls(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: l, isInvalid: i } = is({
      checkboxRootContext: t
    });
    return (u, f) => (r(), m("span", {
      class: C(["checkbox-indicator", {
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
}), ds = {}, ms = { class: "checkbox-title" };
function fs(e, t) {
  return r(), m("span", ms, [
    d(e.$slots, "default")
  ]);
}
const ps = /* @__PURE__ */ S(ds, [["render", fs]]), vs = /* @__PURE__ */ p({
  __name: "CheckboxGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["checkbox-group", {
        [`checkbox-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Re = {
  Root: us,
  Indicator: cs,
  Title: ps,
  Group: vs
};
function hs(e) {
  const t = c(() => _(e.props)), o = c(() => _(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: c(() => o.value === t.value.value),
    isDisabled: n
  };
}
function bs(e) {
  const t = c(() => !!_(e.radioRootContext?.isDisabled)), o = c(() => !!_(e.radioRootContext?.isActive)), n = c(() => !!_(e.radioRootContext?.isValid)), s = c(() => !!_(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Ot = /* @__PURE__ */ Symbol("RadioRootContextKey");
function _s() {
  return U(Ot, null);
}
const gs = ["value", "disabled"], ys = /* @__PURE__ */ p({
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
    const o = e, n = t, s = z(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: f } = Q(), { isActive: v, isDisabled: h } = hs({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    });
    return H(Ot, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isValid: () => u.value,
      isInvalid: () => f.value
    }), (b, V) => (r(), m("label", {
      class: C(["radio", {
        "radio--disabled": a(h),
        "radio--active": a(v),
        "radio--invalid": a(f),
        "radio--valid": a(u)
      }])
    }, [
      Y(B("input", X({
        "onUpdate:modelValue": V[0] || (V[0] = ($) => s.value = $),
        value: e.value,
        type: "radio",
        disabled: a(h),
        class: "radio__input"
      }, te(n, !0)), null, 16, gs), [
        [io, s.value]
      ]),
      d(b.$slots, "default")
    ], 2));
  }
}), Vs = /* @__PURE__ */ p({
  __name: "RadioIndicator",
  setup(e) {
    const t = _s(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = bs({
      radioRootContext: t
    });
    return (i, u) => (r(), m("span", {
      class: C(["radio-indicator", {
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
}), $s = {}, xs = { class: "radio-title" };
function Cs(e, t) {
  return r(), m("span", xs, [
    d(e.$slots, "default")
  ]);
}
const Rs = /* @__PURE__ */ S($s, [["render", Cs]]), Is = /* @__PURE__ */ p({
  __name: "RadioGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["radio-group", {
        [`radio-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ie = {
  Root: ys,
  Indicator: Vs,
  Title: Rs,
  Group: Is
};
function Bs(e) {
  const t = c(() => _(e.props)), o = c(() => _(e.modelValue)), n = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function Ts(e) {
  const t = c(() => !!_(e.switchRootContext?.isDisabled)), o = c(() => !!_(e.switchRootContext?.isActive)), n = c(() => !!_(e.switchRootContext?.isValid)), s = c(() => !!_(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Pt = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function ws() {
  return U(Pt, null);
}
const Ss = { class: "switch" }, Ms = ["disabled"], As = /* @__PURE__ */ p({
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
    const t = e, o = z(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: u, isActive: f } = Bs({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value
    });
    return H(Pt, {
      props: () => t,
      isActive: () => f.value,
      isDisabled: () => u.value,
      isValid: () => l.value,
      isInvalid: () => i.value
    }), (v, h) => (r(), m("label", Ss, [
      Y(B("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (b) => o.value = b),
        type: "checkbox",
        disabled: a(u),
        class: "switch__input"
      }, null, 8, Ms), [
        [pt, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), ks = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = ws(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = Ts({
      switchRootContext: t
    });
    return (i, u) => (r(), m("span", {
      class: C(["switch-indicator", {
        "switch-indicator--disabled": a(o),
        "switch-indicator--active": a(n),
        "switch-indicator--valid": a(s),
        "switch-indicator--invalid": a(l)
      }])
    }, null, 2));
  }
}), Es = {}, Ds = { class: "switch-title" };
function zs(e, t) {
  return r(), m("span", Ds, [
    d(e.$slots, "default")
  ]);
}
const Os = /* @__PURE__ */ S(Es, [["render", zs]]), Fe = {
  Root: As,
  Indicator: ks,
  Title: Os
}, Lt = 1, Ps = -1 / 0, Ls = 1 / 0, Ns = 100, We = 0, Se = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Fs(e) {
  const t = c(() => _(e.props)), o = c(() => _(e.modelValue)), n = c(() => t.value.step || Lt), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), l = c(() => s.value || W(t.value.min) && o.value === t.value.min), i = c(() => s.value || W(t.value.max) && !(o.value < t.value.max));
  function u() {
    if (t.value.readonly)
      return;
    const h = o.value - n.value;
    (!W(t.value.min) || h >= t.value.min) && e.onDecrement?.(h);
  }
  function f() {
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
    handleIncrement: f,
    setModelValue: v
  };
}
function Xs(e) {
  const t = c(() => _(e.mousewheel)), o = c(() => W(t.value) && t.value > 0 ? t.value : Ns);
  return {
    handleWheel: Ye((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function js(e) {
  const t = c(() => _(e.inputNumberRootContext?.props)), o = c({
    get: () => _(e.inputNumberRootContext?.modelValue) ?? We,
    set(s) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(s);
    }
  });
  return {
    props: c(() => ({
      step: _(e.inputNumberRootContext?.step),
      disabled: _(e.inputNumberRootContext?.isDisabled),
      min: t.value?.min,
      max: t.value?.max,
      readonly: t.value?.readonly,
      placeholder: t.value?.placeholder,
      autocomplete: t.value?.autocomplete
    })),
    modelValue: o
  };
}
function Hs(e) {
  const t = c(() => _(e.props)), o = c(() => t.value.action === Se.DECREMENT), n = c(() => t.value.action === Se.INCREMENT), s = c(() => o.value ? !!_(e.inputNumberRootContext?.isDecrementDisabled) : !!_(e.inputNumberRootContext?.isIncrementDisabled));
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
const Nt = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function Ft() {
  return U(Nt, null);
}
const Us = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ I({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Ps },
    max: { default: Ls },
    step: { default: Lt },
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
    const t = e, o = z(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), {
      step: u,
      isDisabled: f,
      isDecrementDisabled: v,
      isIncrementDisabled: h,
      handleDecrement: b,
      handleIncrement: V,
      setModelValue: $
    } = Fs({
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
    return H(Nt, {
      props: () => t,
      isDisabled: () => f.value,
      modelValue: () => o.value,
      step: () => u.value,
      isDecrementDisabled: () => v.value,
      isIncrementDisabled: () => h.value,
      handleDecrement: b,
      handleIncrement: V,
      setModelValue: $
    }), (y, R) => (r(), m("div", {
      class: C(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": a(i),
        "input-number--valid": a(l)
      }])
    }, [
      d(y.$slots, "default")
    ], 2));
  }
}), Gs = { class: "input-number-input" }, Ys = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = Ft(), { props: o, modelValue: n } = js({
      inputNumberRootContext: t
    }), { handleWheel: s } = Xs({
      mousewheel: () => _(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), m("div", Gs, [
      Y(B("input", X({
        "onUpdate:modelValue": i[0] || (i[0] = (u) => Ae(n) ? n.value = u : null),
        type: "number",
        class: "input-number-input__native"
      }, a(o), {
        onWheel: i[1] || (i[1] = //@ts-ignore
        (...u) => a(s) && a(s)(...u))
      }), null, 16), [
        [
          ft,
          a(n),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), qs = ["disabled"], Ks = /* @__PURE__ */ p({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = Ft(), { handleAction: n, isDisabled: s, isDecrement: l, isIncrement: i } = Hs({
      inputNumberRootContext: o,
      props: () => t
    });
    return (u, f) => (r(), m("button", {
      class: C(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: a(s),
      type: "button",
      onClick: f[0] || (f[0] = //@ts-ignore
      (...v) => a(n) && a(n)(...v))
    }, [
      d(u.$slots, "default", {}, () => [
        a(l) ? (r(), m(G, { key: 0 }, [
          j(" - ")
        ], 64)) : a(i) ? (r(), m(G, { key: 1 }, [
          j(" + ")
        ], 64)) : F("", !0)
      ])
    ], 10, qs));
  }
}), Ce = {
  Root: Us,
  Input: Ys,
  Button: Ks
};
function Ws() {
  const e = A(be.PASSWORD);
  function t() {
    e.value === be.PASSWORD ? e.value = be.TEXT : e.value = be.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Zs = /* @__PURE__ */ p({
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
    const t = e, o = J(), n = z(e, "modelValue"), { currentType: s, handleToggleType: l } = Ws();
    return (i, u) => (r(), x(a(q).Root, X(t, {
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (f) => n.value = f),
      "native-type": a(s)
    }), {
      default: g((f) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: g(() => [
            d(i.$slots, "before", E(D(f)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        w(a(q).Control, null, {
          default: g(() => [
            w(a(q).Native)
          ]),
          _: 1
        }),
        w(a(q).After, null, {
          default: g(() => [
            d(i.$slots, "after", E(D(f)), () => [
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
}), Js = {
  Root: Zs
};
function Qs(e) {
  const t = c(() => _(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function el(e) {
  return {
    isDisabled: c(() => {
      const o = e.inputCodeRootContext;
      return o ? !!_(o.isDisabled) : !1;
    })
  };
}
const Xt = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function tl() {
  return U(Xt, null);
}
const ol = /* @__PURE__ */ p({
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
    z(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = Qs({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return H(Xt, {
      props: () => t,
      isDisabled: () => i.value
    }), (u, f) => (r(), m("div", {
      class: C(["input-code", {
        "input-code--disabled": a(i),
        "input-code--invalid": a(l),
        "input-code--valid": a(s)
      }])
    }, [
      d(u.$slots, "default")
    ], 2));
  }
}), nl = ["disabled", "aria-disabled"], sl = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = tl(), { isDisabled: o } = el({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), m("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, nl));
  }
}), ut = {
  Root: ol,
  Pin: sl
}, jt = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function Ht() {
  return U(jt, null);
}
function ll(e) {
  const t = c(() => _(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function al(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const il = /* @__PURE__ */ p({
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
    const o = e, n = z(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: u } = Q(), { isDisabled: f } = ll({
      formRootContext: s,
      formItemContext: l,
      props: () => o
    });
    return H(jt, {
      props: () => o,
      modelValue: () => n.value,
      isDisabled: () => f.value
    }), (v, h) => (r(), m("div", {
      class: C(["input-tags", {
        "input-tags--disabled": a(f),
        "input-tags--invalid": a(u),
        "input-tags--valid": a(i)
      }])
    }, [
      d(v.$slots, "default")
    ], 2));
  }
}), rl = { class: "input-tags-input" }, ul = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    Ht();
    const { handleEnter: t, handleTab: o } = al();
    return (n, s) => (r(), m("div", rl, [
      B("input", {
        type: "text",
        onKeydown: [
          s[0] || (s[0] = et(
            //@ts-ignore
            (...l) => a(t) && a(t)(...l),
            ["enter"]
          )),
          s[1] || (s[1] = et(
            //@ts-ignore
            (...l) => a(o) && a(o)(...l),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), cl = { class: "input-tags-tags" }, dl = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return Ht(), (t, o) => (r(), m("div", cl));
  }
}), mc = {
  Root: il,
  Input: ul,
  Tags: dl
};
function ml(e) {
  const t = c(() => _(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function fl(e) {
  return {
    isDisabled: c(() => !!_(e.inputRangeRootContext?.isDisabled))
  };
}
const Ut = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function pl() {
  return U(Ut, null);
}
const vl = /* @__PURE__ */ p({
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
    z(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = ml({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return H(Ut, {
      props: () => t,
      isDisabled: () => i.value
    }), (u, f) => (r(), m("div", {
      class: C(["input-range", {
        "input-range--disabled": a(i),
        "input-range--invalid": a(l),
        "input-range--valid": a(s)
      }])
    }, [
      d(u.$slots, "default")
    ], 2));
  }
}), hl = ["aria-disabled"], bl = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = pl(), { isDisabled: o } = fl({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), m("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, hl));
  }
}), fc = {
  Root: vl,
  Slider: bl
}, _l = /* @__PURE__ */ Symbol("ModalRootContextKey");
function gl(e) {
  function t() {
    e.onClose?.();
  }
  return {
    close: t
  };
}
const yl = { class: "modal" }, Vl = /* @__PURE__ */ p({
  __name: "ModalRoot",
  props: /* @__PURE__ */ I({
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ I(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = z(e, "modelValue"), { close: s } = gl({
      modelValue: () => n.value,
      props: () => o,
      onClose: () => {
        n.value = !1;
      }
    });
    return H(_l, {
      close: s
    }), (l, i) => (r(), m("div", yl, [
      d(l.$slots, "default")
    ]));
  }
}), $l = {};
function xl(e, t) {
  return r(), m("div", null, [
    d(e.$slots, "default")
  ]);
}
const Cl = /* @__PURE__ */ S($l, [["render", xl]]), Rl = {};
function Il(e, t) {
  return r(), m("div");
}
const Bl = /* @__PURE__ */ S(Rl, [["render", Il]]), Tl = {}, wl = { class: "modal-header" };
function Sl(e, t) {
  return r(), m("div", wl, [
    d(e.$slots, "default")
  ]);
}
const Ml = /* @__PURE__ */ S(Tl, [["render", Sl]]), Al = {}, kl = { class: "modal-footer" };
function El(e, t) {
  return r(), m("div", kl, [
    d(e.$slots, "default")
  ]);
}
const Dl = /* @__PURE__ */ S(Al, [["render", El]]), zl = {};
function Ol(e, t) {
  return r(), m("div");
}
const Pl = /* @__PURE__ */ S(zl, [["render", Ol]]), Ll = {}, Nl = { class: "modal-content" };
function Fl(e, t) {
  return r(), m("div", Nl, [
    d(e.$slots, "default")
  ]);
}
const Xl = /* @__PURE__ */ S(Ll, [["render", Fl]]), pc = {
  Root: Vl,
  Body: Cl,
  Close: Bl,
  Header: Ml,
  Footer: Dl,
  Title: Pl,
  Content: Xl
};
function jl(e) {
  const t = c(() => _(e.props));
  function o() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: o
  };
}
const Hl = /* @__PURE__ */ p({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, n = t, { handleDelete: s } = jl({
      props: () => o,
      onDelete(l) {
        n("delete", l);
      }
    });
    return (l, i) => (r(), m("div", {
      class: C(["tag", {
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
}), Ul = /* @__PURE__ */ p({
  __name: "TagGroup",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["tag-group", {
        [`tag-group--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Gt = {
  Root: Hl,
  Group: Ul
}, Yt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey");
function vc() {
  return U(Yt, {
    props: () => ({}),
    t: () => ""
  });
}
function Gl(e) {
  const t = c(() => _(e.props));
  function o(n) {
    if (!t.value?.locale)
      return "";
    const s = n.split(".");
    let l = t.value.locale;
    for (const i of s) {
      if (se(l) || ze(l) || pe(l))
        return n;
      l = l[i];
    }
    return pe(l) ? l : n;
  }
  return {
    t: o
  };
}
const Yl = /* @__PURE__ */ p({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = Gl({
      props: () => t
    });
    return H(Yt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), ql = {
  Root: Yl
}, Kl = { class: "layout" }, Wl = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), m("div", Kl, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), Zl = {}, Jl = { class: "layout-body" };
function Ql(e, t) {
  return r(), m("main", Jl, [
    d(e.$slots, "default")
  ]);
}
const ea = /* @__PURE__ */ S(Zl, [["render", Ql]]), ct = {
  Root: Wl,
  Body: ea
}, ta = /* @__PURE__ */ p({
  __name: "Container",
  props: {
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["container", {
        [`container--size-${e.size}`]: e.size
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), oa = /* @__PURE__ */ p({
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
      d(t.$slots, "default")
    ], 2));
  }
}), na = /* @__PURE__ */ p({
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
    return (t, o) => (r(), m("div", {
      class: C(["row", {
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
        "row--gutters-y": e.guttersY,
        "row--wrap": e.wrap,
        "row--no-wrap": !e.wrap
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ze = {
  Container: ta,
  Row: na,
  Col: oa
}, sa = { class: "section" }, la = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), m("section", sa, [
      d(t.$slots, "default")
    ]));
  }
}), aa = {}, ia = { class: "section-header" };
function ra(e, t) {
  return r(), m("header", ia, [
    d(e.$slots, "default")
  ]);
}
const ua = /* @__PURE__ */ S(aa, [["render", ra]]), ca = {}, da = { class: "section-title" };
function ma(e, t) {
  return r(), m("h1", da, [
    d(e.$slots, "default")
  ]);
}
const fa = /* @__PURE__ */ S(ca, [["render", ma]]), pa = {}, va = { class: "section-footer" };
function ha(e, t) {
  return r(), m("footer", va, [
    d(e.$slots, "default")
  ]);
}
const ba = /* @__PURE__ */ S(pa, [["render", ha]]), _a = {}, ga = { class: "section-body" };
function ya(e, t) {
  return r(), m("div", ga, [
    d(e.$slots, "default")
  ]);
}
const Va = /* @__PURE__ */ S(_a, [["render", ya]]), hc = {
  Root: la,
  Header: ua,
  Title: fa,
  Footer: ba,
  Body: Va
}, $a = /* @__PURE__ */ p({
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
    return (t, o) => (r(), x(ro(e.tag), {
      class: C(["text", {
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
    }, 8, ["class"]));
  }
}), xa = {
  Root: $a
}, Ca = /* @__PURE__ */ p({
  __name: "FlexRoot",
  props: {
    wrap: { type: Boolean, default: !0 },
    align: {},
    justify: {},
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["flex", {
        "flex--wrap": e.wrap,
        "flex--no-wrap": !e.wrap,
        [`flex--justify-${e.justify}`]: e.justify,
        [`flex--align-${e.align}`]: e.align,
        [`flex--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ra = /* @__PURE__ */ p({
  __name: "FlexItem",
  props: {
    flex: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["flex-item", {
        [`flex-item--flex-${e.flex}`]: e.flex
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), qt = {
  Root: Ca,
  Item: Ra
}, Ia = /* @__PURE__ */ p({
  __name: "DividerRoot",
  props: {
    direction: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["divider", {
        [`divider--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), Ba = {}, Ta = { class: "divider-content" };
function wa(e, t) {
  return r(), m("div", Ta, [
    d(e.$slots, "default")
  ]);
}
const Sa = /* @__PURE__ */ S(Ba, [["render", wa]]), dt = {
  Root: Ia,
  Content: Sa
}, Ma = p({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      if (!o.default)
        return null;
      const n = Bt(o.default()), s = n.findIndex((f) => f.type !== uo);
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
}), Aa = [
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
], ka = p({
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
    return pe(n) && Aa.includes(n) ? () => ae(n, t) : n !== "template" ? () => ae(e.as, t, {
      default: o.default
    }) : () => ae(Ma, t, {
      default: o.default
    });
  }
}), bc = {
  Root: ka
}, _c = {}, Ea = /* @__PURE__ */ p({
  __name: "VButton",
  props: {
    asChild: { type: Boolean },
    as: {},
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
    return (o, n) => (r(), x(a(Xe).Root, E(D(t)), {
      default: g(() => [
        w(a(Xe).Content, null, {
          default: g(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), Da = /* @__PURE__ */ p({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Xe).Group, E(D(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), za = {
  install(e) {
    e.component("VButton", Ea);
  }
}, gc = {
  install(e) {
    e.component("VButtonGroup", Da);
  }
}, Oa = /* @__PURE__ */ p({
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
    const o = e, n = t, s = z(e, "modelValue");
    return (l, i) => (r(), x(a(de).Root, X(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
    }, te(n)), {
      default: g(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Pa = /* @__PURE__ */ p({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = vt(e, ["title"]);
    return (o, n) => (r(), x(a(de).Item, E(D(t)), {
      default: g(({ isActive: s }) => [
        w(a(de).Header, null, {
          default: g(() => [
            w(a(de).Trigger, null, {
              default: g(() => [
                w(a(de).Title, null, {
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
        w(a(de).Body, null, {
          default: g(() => [
            d(o.$slots, "default", { isActive: s })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), La = {
  install(e) {
    e.component("VAccordion", Oa), e.component("VAccordionItem", Pa);
  }
}, Na = {
  key: 0,
  class: "v-avatar__label"
}, Fa = /* @__PURE__ */ p({
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
      class: C(["v-avatar", {
        "v-avatar--circle": e.circle,
        [`v-avatar--size-${e.size}`]: e.size,
        [`v-avatar--theme-${e.theme}`]: e.theme
      }])
    }, [
      e.label ? (r(), m("div", Na, N(e.label), 1)) : F("", !0)
    ], 2));
  }
}), Xa = {}, ja = { class: "v-avatar-group" };
function Ha(e, t) {
  return r(), m("div", ja, [
    d(e.$slots, "default")
  ]);
}
const Ua = /* @__PURE__ */ S(Xa, [["render", Ha]]), Ga = {
  install(e) {
    e.component("VAvatar", Fa);
  }
}, Ya = {
  install(e) {
    e.component("VAvatarGroup", Ua);
  }
}, qa = { class: "v-alert__content" }, Ka = {
  key: 0,
  class: "v-alert__title"
}, Wa = {
  key: 1,
  class: "v-alert__description"
}, Za = /* @__PURE__ */ p({
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
      class: C(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      B("div", qa, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), m(G, { key: 1 }, [
          n.value ? (r(), m("div", Ka, [
            d(l.$slots, "title", {}, () => [
              j(N(e.title), 1)
            ])
          ])) : F("", !0),
          s.value ? (r(), m("div", Wa, [
            d(l.$slots, "description", {}, () => [
              j(N(e.description), 1)
            ])
          ])) : F("", !0)
        ], 64))
      ])
    ], 2));
  }
}), Ja = {
  install(e) {
    e.component("VAlert", Za);
  }
}, Kt = 0, Wt = 0, Qa = {
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
    this.#e = this.#_(o), this.#o = t, this.#n = o.innerWrapper, this.#l = o.container, this.#s = 0, this.#a = 1, this.#m = !1, this.#i = !1, this.#r = !1, this.#u = void 0, this.#c = void 0, this.#t = {
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
  #_(t) {
    return {
      ...Qa,
      ...t
    };
  }
  #g() {
    this.#n = this.#e.innerWrapper, this.#l = this.#e.container, this.#h(), this.#p(), this.#y(), this.#m = !0;
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
  #$() {
    this.#f();
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
      se(o[s]) ? n[s] = t[s] : n[s] = o[s];
    return n;
  }
}
function ei(e) {
  const t = tt(), o = tt(), n = c(() => W(e.props?.offsetTop) ? e.props.offsetTop : Kt), s = c(() => W(e.props?.offsetBottom) ? e.props.offsetBottom : Wt);
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
  return re(() => {
    e.props.disabled || i();
  }), je(() => {
    u();
  }), K(() => e.props.disabled, (f) => {
    f ? u() : i();
  }), {};
}
const ti = /* @__PURE__ */ p({
  __name: "VAffix",
  props: {
    offsetTop: { default: Kt },
    offsetBottom: { default: Wt },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = ne("root"), n = ne("content");
    return ei({
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
}), oi = {
  install(e) {
    e.component("VAffix", ti);
  }
}, ni = { class: "v-breadcrumbs" }, si = /* @__PURE__ */ p({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (r(), m("nav", ni));
  }
}), li = {
  install(e) {
    e.component("VBreadcrumbs", si);
  }
};
function ai(e) {
  return {
    content: c(() => e.props.dot ? "" : W(e.props.value) && W(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const ii = {
  key: 0,
  class: "v-badge__content"
}, ri = /* @__PURE__ */ p({
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
    const t = e, o = J(), { content: n } = ai({
      props: t
    }), s = c(() => !t.hidden && !!(n.value || t.dot || o?.content));
    return (l, i) => (r(), m("div", {
      class: C(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      s.value ? (r(), m("sup", ii, [
        d(l.$slots, "content", { value: a(n) }, () => [
          j(N(a(n)), 1)
        ])
      ])) : F("", !0)
    ], 2));
  }
}), ui = {
  install(e) {
    e.component("VBadge", ri);
  }
}, ci = { class: "v-collapse" }, di = /* @__PURE__ */ p({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (r(), m("div", ci, [
      d(t.$slots, "default")
    ]));
  }
}), mi = {
  install(e) {
    e.component("VCollapse", di);
  }
};
function fi(e) {
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
const pi = /* @__PURE__ */ p({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: n, handleOpen: s, handleClose: l } = fi({
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
}), vi = {
  install(e) {
    e.component("VInplace", pi);
  }
}, Pe = /* @__PURE__ */ p({
  __name: "VOverlay",
  props: {
    mask: { type: Boolean, default: !0 },
    blur: { type: Boolean, default: !0 }
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["v-overlay", {
        "v-overlay--mask": e.mask,
        "v-overlay--blur": e.mask && e.blur
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), hi = {
  install(e) {
    e.component("VOverlay", Pe);
  }
}, bi = {
  key: 0,
  class: "v-modal__header"
}, _i = { class: "v-modal__body" }, gi = {
  key: 1,
  class: "v-modal__footer"
}, Zt = /* @__PURE__ */ p({
  __name: "VModal",
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
    const o = e, n = t, s = J(), l = z(e, "modelValue"), i = c(() => !!o.title || !!s?.header), u = c(() => !!s?.footer);
    function f() {
      l.value = !1;
    }
    function v(b) {
      n("opened", b);
    }
    function h(b) {
      n("closed", b);
    }
    return K(l, (b) => {
      n(b ? "open" : "close");
    }), (b, V) => (r(), x(ht, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      w(Ee, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: g(() => [
          w(a(Pe), null, {
            default: g(() => [
              Y(B("div", {
                class: C(["v-modal", {
                  "v-modal--open": l.value
                }]),
                role: "dialog"
              }, [
                i.value ? (r(), m("div", bi, [
                  d(b.$slots, "header", { close: f }, () => [
                    j(N(e.title), 1)
                  ]),
                  B("button", {
                    class: "v-modal__close-button",
                    type: "button",
                    onClick: f
                  }, " x ")
                ])) : F("", !0),
                B("div", _i, [
                  d(b.$slots, "default", { close: f })
                ]),
                u.value ? (r(), m("div", gi, [
                  d(b.$slots, "footer", { close: f })
                ])) : F("", !0)
              ], 2), [
                [ie, l.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), yi = {
  install(e) {
    e.component("VModal", Zt);
  }
}, Vi = { class: "v-drawer__dialog" }, $i = {
  key: 0,
  class: "v-drawer__header"
}, xi = { class: "v-drawer__body" }, Ci = {
  key: 1,
  class: "v-drawer__footer"
}, Jt = /* @__PURE__ */ p({
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
    const o = e, n = t, s = J(), l = z(e, "modelValue"), i = c(() => !!o.title || !!s?.header), u = c(() => !!s?.footer);
    function f() {
      l.value = !1;
    }
    function v(b) {
      n("opened", b);
    }
    function h(b) {
      n("closed", b);
    }
    return K(l, (b) => {
      n(b ? "open" : "close");
    }), (b, V) => (r(), x(ht, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      w(Ee, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: g(() => [
          w(a(Pe), null, {
            default: g(() => [
              Y(B("div", {
                class: C(["v-drawer", {
                  "v-drawer--open": l.value
                }]),
                role: "dialog"
              }, [
                B("div", Vi, [
                  i.value ? (r(), m("div", $i, [
                    d(b.$slots, "header", { close: f }, () => [
                      j(N(e.title), 1)
                    ]),
                    B("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: f
                    }, " x ")
                  ])) : F("", !0),
                  B("div", xi, [
                    d(b.$slots, "default", { close: f })
                  ]),
                  u.value ? (r(), m("div", Ci, [
                    d(b.$slots, "footer", { close: f })
                  ])) : F("", !0)
                ])
              ], 2), [
                [ie, l.value]
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
    e.component("VDrawer", Jt);
  }
};
function yc() {
  return {};
}
const Ii = /* @__PURE__ */ Symbol("VDropdownContextKey"), Bi = { class: "v-dropdown__menu" }, Ti = /* @__PURE__ */ p({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, [l, i, u] = Z();
    function f(h) {
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
    }), (h, b) => (r(), m("div", {
      class: C(["v-dropdown", {
        "v-dropdown--open": a(l)
      }])
    }, [
      d(h.$slots, "trigger", {
        isVisible: a(l),
        toggle: a(u),
        setVisible: a(i)
      }),
      w(Ee, {
        onAfterEnter: f,
        onAfterLeave: v
      }, {
        default: g(() => [
          Y(B("div", Bi, [
            d(h.$slots, "default")
          ], 512), [
            [ie, a(l)]
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
    const t = ne("image"), o = ne("root");
    return (n, s) => (r(), m("figure", {
      ref_key: "root",
      ref: o,
      class: C(["v-image", [
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
    return (o, n) => (r(), x(a(ct).Root, null, bt({
      default: g(() => [
        w(a(ct).Body, null, {
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
}), ki = {
  install(e) {
    e.component("VLayout", Ai);
  }
}, Vc = /* @__PURE__ */ p({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Ze).Container, E(D(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), $c = /* @__PURE__ */ p({
  __name: "VRow",
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
    const t = e;
    return (o, n) => (r(), x(a(Ze).Row, E(D(t)), {
      default: g(() => [
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
    return (o, n) => (r(), x(a(Ze).Col, E(D(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ei = { class: "v-pagination" }, Di = /* @__PURE__ */ p({
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
    return (t, o) => (r(), m("div", Ei));
  }
}), zi = {
  install(e) {
    e.component("VPagination", Di);
  }
}, Oi = { class: "v-placeholder" }, Pi = /* @__PURE__ */ p({
  __name: "VPlaceholder",
  props: {
    animated: { type: Boolean }
  },
  setup(e) {
    return (t, o) => (r(), m("div", Oi, [
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
    return (s, l) => (r(), x(a(kt).Root, X(o, te(n)), {
      default: g(() => [
        d(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Fi = {
  install(e) {
    e.component("VScrollbar", Ni);
  }
}, Xi = /* @__PURE__ */ p({
  __name: "VSpinner",
  props: {
    size: {},
    theme: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", {
      class: C(["v-spinner", {
        [`v-spinner--size-${e.size}`]: e.size,
        [`v-spinner--theme-${e.theme}`]: e.theme
      }])
    }, null, 2));
  }
}), ji = {
  install(e) {
    e.component("VSpinner", Xi);
  }
}, Qt = /* @__PURE__ */ Symbol("VTabsContextKey"), Hi = () => U(Qt, null);
function Ui() {
  const e = A([]);
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
    const o = e, n = t, s = z(e, "modelValue"), {
      tabs: l,
      registerTab: i,
      unregisterTab: u
    } = Ui();
    function f(v) {
      s.value = v, n("change", v);
    }
    return H(Qt, {
      props: o,
      modelValue: s,
      tabs: l,
      handleChange: f,
      registerTab: i,
      unregisterTab: u
    }), (v, h) => (r(), m("div", Yi, [
      B("div", qi, [
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
    }), i = mo({
      id: s,
      props: t,
      slots: o
    });
    return n?.registerTab(i), ke(() => {
      n?.unregisterTab(i);
    }), (u, f) => Y((r(), m("div", {
      class: C(["v-tab", {
        "v-tab--active": a(l)
      }])
    }, [
      d(u.$slots, "default", { isActive: a(l) })
    ], 2)), [
      [ie, a(l)]
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
    return (s, l) => (r(), x(a(Gt).Root, X(o, te(n)), {
      default: g(() => [
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
    return (o, n) => (r(), x(a(Gt).Group, E(D(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), er = {
  install(e) {
    e.component("VTag", Ji);
  }
}, Cc = {
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
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(xa).Root, E(D(t)), {
      default: g(() => [
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
    const o = e, n = t, s = z(e, "modelValue");
    return (l, i) => (r(), x(a(_e).Root, X({
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u)
    }, o, te(n)), {
      default: g((u) => [
        d(l.$slots, "default", E(D(u)))
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
    const o = vt(e, ["title"]), n = t, s = J();
    return (l, i) => (r(), x(a(_e).Item, X(o, te(n)), bt({
      default: g((u) => [
        d(l.$slots, "default", E(D(u)))
      ]),
      footer: g((u) => [
        d(l.$slots, "footer", E(D(u)), () => [
          w(a(_e).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: g((u) => [
          d(l.$slots, "header", E(D(u)), () => [
            w(a(_e).ItemTitle, null, {
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
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(Re).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        w(a(Re).Indicator),
        w(a(Re).Title, null, {
          default: g(() => [
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
    return (o, n) => (r(), x(a(Re).Group, E(D(t)), {
      default: g(() => [
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
    const t = e, o = J(), n = z(e, "modelValue");
    return (s, l) => (r(), x(a(q).Root, X(t, {
      modelValue: n.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i)
    }), {
      default: g((i) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: g(() => [
            d(s.$slots, "before", E(D(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        w(a(q).Control, null, {
          default: g(() => [
            i.isTextarea ? (r(), x(a(q).Textarea, { key: 0 })) : (r(), x(a(q).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (r(), x(a(q).After, { key: 1 }, {
          default: g(() => [
            d(s.$slots, "after", E(D(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0)
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), mr = {
  install(e) {
    e.component("VInput", dr);
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
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(ut).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        (r(!0), m(G, null, me(e.length, (l, i) => (r(), x(a(ut).Pin, {
          key: `pin-${i}`
        }))), 128))
      ]),
      _: 1
    }, 16, ["modelValue"]));
  }
}), pr = {
  install(e) {
    e.component("VInputCode", fr);
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
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(Ce).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        w(a(Ce).Button, {
          action: a(Se).DECREMENT
        }, null, 8, ["action"]),
        w(a(Ce).Input),
        w(a(Ce).Button, {
          action: a(Se).INCREMENT
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
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(Js).Root, X({
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }, t), null, 16, ["modelValue"]));
  }
}), _r = {
  install(e) {
    e.component("VInputPassword", br);
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
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(Ie).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        w(a(Ie).Indicator),
        w(a(Ie).Title, null, {
          default: g(() => [
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
    return (o, n) => (r(), x(a(Ie).Group, E(D(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Vr = {
  install(e) {
    e.component("VRadio", gr);
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
    const o = e, n = t, s = z(e, "modelValue");
    return (l, i) => (r(), x(a(ge).Root, X(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u),
      onChange: i[1] || (i[1] = (u) => n("change", u)),
      onClose: i[2] || (i[2] = (u) => n("close")),
      onClear: i[3] || (i[3] = (u) => n("clear"))
    }), {
      default: g(() => [
        w(a(ge).Value, null, {
          default: g(() => [
            d(l.$slots, "value")
          ]),
          _: 3
        }),
        w(a(ge).Dropdown, null, {
          default: g(() => [
            w(a(ge).Scrollbar, null, {
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
}), Cr = /* @__PURE__ */ p({
  __name: "VOption",
  props: {
    value: {},
    title: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(ge).Option, E(D(t)), {
      default: g((s) => [
        d(o.$slots, "default", E(D(s)))
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
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(Fe).Root, X(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        w(a(Fe).Indicator),
        w(a(Fe).Title, null, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Br = {
  install(e) {
    e.component("VSwitch", Ir);
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
    return (o, n) => (r(), x(a(ql).Root, E(D(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wr = {
  install(e) {
    e.component("VConfigProvider", Tr);
  }
}, Sr = { class: "v-progress__value" }, Mr = {
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
    return (t, o) => (r(), m("div", {
      class: C(["v-progress", {
        "v-progress--indeterminate": e.indeterminate,
        [`v-progress--size-${e.size}`]: e.size,
        [`v-progress--theme-${e.theme}`]: e.theme
      }]),
      role: "progressbar"
    }, [
      B("div", Sr, [
        e.showValue ? (r(), m("div", Mr, [
          d(t.$slots, "default")
        ])) : F("", !0)
      ])
    ], 2));
  }
}), kr = {
  install(e) {
    e.component("VProgress", Ar);
  }
}, Er = /* @__PURE__ */ p({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = J();
    return (n, s) => (r(), x(a(dt).Root, E(D(t)), {
      default: g(() => [
        o?.default ? (r(), x(a(dt).Content, { key: 0 }, {
          default: g(() => [
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
    e.component("VDivider", Er);
  }
}, zr = /* @__PURE__ */ p({
  __name: "VFlex",
  props: {
    wrap: { type: Boolean, default: !0 },
    align: {},
    justify: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(qt).Root, E(D(t)), {
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
    return (o, n) => (r(), x(a(qt).Item, E(D(t)), {
      default: g(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Pr = {
  install(e) {
    e.component("VFlex", zr);
  }
}, Rc = {
  install(e) {
    e.component("VFlexItem", Or);
  }
};
function Lr(e) {
  const t = A([]), o = A({
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
  function f() {
    t.value.length === e.data.length ? s() : t.value = [...e.data];
  }
  return {
    isHeaderVisible: n,
    clearSelection: s,
    getSelectionRows: l,
    clearSort: i,
    sort: u,
    toggleAllSelection: f
  };
}
const Nr = De(() => Promise.resolve().then(() => Cu)), Fr = De(() => Promise.resolve().then(() => wu)), Xr = De(() => Promise.resolve().then(() => Du)), jr = De(() => Promise.resolve().then(() => Nu)), Hr = /* @__PURE__ */ Symbol("VTableContextKey"), Ur = { class: "v-table" }, Gr = {
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
      toggleAllSelection: f
    } = Lr(o);
    return H(Hr, {
      props: o
    }), t({
      clearSelection: s,
      getSelectionRows: l,
      clearSort: i,
      sort: u,
      toggleAllSelection: f
    }), (v, h) => (r(), m("div", Ur, [
      e.data.length ? (r(), m("table", Gr, [
        a(n) ? (r(), m("thead", Yr, [
          B("tr", null, [
            (r(!0), m(G, null, me(e.columns, (b) => (r(), x(a(jr), {
              key: b.prop
            }, {
              default: g(() => [
                j(N(b.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : F("", !0),
        B("tbody", null, [
          (r(!0), m(G, null, me(e.data, (b, V) => (r(), x(a(Nr), {
            key: `row-${V}`
          }, {
            default: g(() => [
              (r(!0), m(G, null, me(e.columns, ($) => (r(), x(a(Xr), {
                key: `row-${V}-${String($.prop)}`
              }, {
                default: g(() => [
                  d(v.$slots, String($.prop), { row: b }, () => [
                    j(N(b[$.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (r(), x(a(Fr), { key: 1 }, {
        default: g(() => [
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
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Zr = /* @__PURE__ */ p({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (r(), x(a(q).GroupAddon, null, {
      default: g(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Jr = {
  install(e) {
    e.component("VInputGroup", Wr), e.component("VInputGroupAddon", Zr);
  }
}, Be = 1e3, Te = 60 * Be, we = 60 * Te, mt = 24 * we, eo = Date.now(), to = 1e3;
function Qr(e) {
  const [t, o] = Z(), [n, s] = Z(), l = A(0), i = A(0), u = A(0), f = c(() => e.props.now || eo), v = c(() => e.props.interval || to), h = c(() => 0), b = c(() => 0), V = c(() => Math.floor(l.value / mt)), $ = c(() => Math.floor(l.value % mt / we)), y = c(() => Math.floor(l.value % we / Te)), R = c(() => Math.floor(l.value % Te / Be)), T = c(() => Math.floor(l.value % Be)), M = c(() => Math.floor(l.value / we)), O = c(() => Math.floor(l.value / Te)), P = c(() => Math.floor(l.value / Be));
  function k() {
    t.value || (o(!0), e.props?.autoStart || (l.value = e.props.start, i.value = f.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && le());
  }
  function L() {
    cancelAnimationFrame(u.value), u.value = 0;
  }
  function oe() {
    t.value && (ce(), l.value > 0 && e.onProgress?.({
      days: V.value,
      hours: $.value,
      minutes: y.value,
      seconds: R.value,
      milliseconds: T.value,
      totalDays: V.value,
      totalHours: M.value,
      totalMinutes: O.value,
      totalSeconds: P.value,
      totalMilliseconds: l.value
    }), le());
  }
  function le() {
    if (!t.value)
      return;
    const ee = Math.min(l.value, v.value);
    if (ee > 0) {
      let Je = function(ve) {
        Ne || (Ne = ve), xe || (xe = ve);
        const Qe = ve - Ne;
        Qe >= ee || Qe + (ve - xe) / 2 >= ee ? oe() : u.value = requestAnimationFrame(Je), xe = ve;
      }, Ne, xe;
      u.value = requestAnimationFrame(Je);
    } else
      ue();
  }
  function Ve() {
    t.value && (L(), o(!1), e.onAbort?.());
  }
  function ue() {
    t.value && (L(), l.value = 0, o(!1), e.onEnd?.());
  }
  function ce() {
    t.value && (l.value = Math.max(0, i.value - f.value));
  }
  function Le() {
    L(), l.value = e.props.start, i.value = f.value + e.props.start, o(!1), k();
  }
  function $e() {
    switch (document.visibilityState) {
      case "visible":
        u.value === 0 && n.value && (ce(), le()), s(!1);
        break;
      case "hidden":
        u.value > 0 && (s(!0), L());
        break;
    }
  }
  return re(() => {
    document.addEventListener("visibilitychange", $e);
  }), je(() => {
    document.removeEventListener("visibilitychange", $e), L();
  }), K(() => e.props, (ee) => {
    l.value = ee.start, i.value = f.value + ee.start, ee.autoStart && k();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: h,
    months: b,
    days: V,
    hours: $,
    minutes: y,
    seconds: R,
    milliseconds: T,
    start: k,
    abort: Ve,
    end: ue,
    restart: Le
  };
}
const eu = { class: "v-countdown" }, tu = /* @__PURE__ */ p({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => to },
    start: {},
    now: { default: () => eo }
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
      milliseconds: b,
      start: V,
      abort: $,
      end: y,
      restart: R
    } = Qr({
      props: n,
      onAbort: () => s("abort"),
      onEnd: () => s("end"),
      onProgress: (T) => s("progress", T),
      onStart: () => s("start")
    });
    return t({
      start: V,
      abort: $,
      end: y,
      restart: R
    }), (T, M) => (r(), m("div", eu, [
      d(T.$slots, "default", {
        years: a(l),
        months: a(i),
        days: a(u),
        hours: a(f),
        minutes: a(v),
        seconds: a(h),
        milliseconds: a(b)
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
    return (t, o) => (r(), m("div", nu));
  }
}), lu = {
  install(e) {
    e.component("VCalendar", su);
  }
}, Ic = {
  install(e) {
    e.use(La), e.use(oi), e.use(Ga), e.use(Ya), e.use(ui), e.use(li), e.use(za), e.use(mi), e.use(wr), e.use(yi), e.use(vi), e.use(Ri), e.use(wi), e.use(Mi), e.use(zi), e.use(Li), e.use(Fi), e.use(ji), e.use(Zi), e.use(er), e.use(or), e.use(ki), e.use(sr), e.use(ar), e.use(mr), e.use(ur), e.use(cr), e.use(_r), e.use(hr), e.use(pr), e.use(Vr), e.use($r), e.use(Br), e.use(Rr), e.use(hi), e.use(Ja), e.use(kr), e.use(Dr), e.use(Pr), e.use(Kr), e.use(Jr), e.use(ou), e.use(lu);
  }
}, au = { class: "v-confirm__header" }, iu = { class: "v-confirm__title" }, ru = { class: "v-confirm__body" }, uu = {
  key: 0,
  class: "v-confirm__text"
}, cu = ["innerHTML"], du = { class: "v-confirm__footer" }, mu = /* @__PURE__ */ p({
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
    return (n, s) => (r(), x(a(Pe), null, {
      default: g(() => [
        B("div", {
          class: C(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          B("div", au, [
            B("div", iu, N(e.title), 1),
            B("button", {
              type: "button",
              onClick: s[0] || (s[0] = (l) => o("close"))
            }, " X ")
          ]),
          B("div", ru, [
            e.useHtml ? (r(), m("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, cu)) : (r(), m("div", uu, N(e.message), 1))
          ]),
          B("div", du, [
            B("button", {
              type: "button",
              onClick: s[1] || (s[1] = (l) => o("success"))
            }, N(e.confirmText), 1),
            B("button", {
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
class Bc {
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
      }, l = ae(mu, {
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
      ye(l, this.#e);
    });
  }
  static close() {
    this.#e && ye(null, this.#e);
  }
}
const Tc = {
  install() {
  }
}, oo = 1500;
function fu(e) {
  const t = c(() => W(e.props.duration) ? e.props.duration : oo), [o, n] = Z(!1);
  let s = null;
  function l() {
    s && clearTimeout(s);
  }
  function i() {
    l(), t.value !== 0 && (s = setTimeout(() => {
      n(!1);
    }, t.value));
  }
  return re(() => {
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
}, _u = ["innerHTML"], gu = /* @__PURE__ */ p({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: oo },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: u } = fu({
      props: o
    });
    return (f, v) => (r(), x(Ee, {
      name: "fade-in-up",
      onAfterLeave: v[3] || (v[3] = (h) => n("close"))
    }, {
      default: g(() => [
        Y(B("div", {
          class: C(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: v[1] || (v[1] = //@ts-ignore
          (...h) => a(u) && a(u)(...h)),
          onMouseleave: v[2] || (v[2] = //@ts-ignore
          (...h) => a(i) && a(i)(...h))
        }, [
          B("div", pu, [
            B("div", vu, N(e.title), 1),
            e.clearable ? (r(), m("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (h) => a(l)(!1))
            }, " X ")) : F("", !0)
          ]),
          B("div", hu, [
            e.useHtml ? (r(), m("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, _u)) : (r(), m("div", bu, N(e.message), 1))
          ])
        ], 34), [
          [ie, a(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class wc {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = ae(gu, {
      ...t,
      appContext: o
    });
    ye(n, this.#e);
  }
}
class Sc {
  static open(t, o) {
    const n = ae(Zt, {
      ...t,
      appContext: o
    });
    ye(n, document.body);
  }
}
class Mc {
  static open(t, o) {
    const n = ae(Jt, {
      ...t,
      appContext: o
    });
    ye(n, document.body);
  }
}
const Ac = {
  name: "ru",
  vau: {}
}, kc = {
  name: "en",
  vau: {}
}, yu = {}, Vu = { class: "v-table-row" };
function $u(e, t) {
  return r(), m("tr", Vu, [
    d(e.$slots, "default")
  ]);
}
const xu = /* @__PURE__ */ S(yu, [["render", $u]]), Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xu
}, Symbol.toStringTag, { value: "Module" })), Ru = {}, Iu = { class: "v-table-empty" };
function Bu(e, t) {
  return r(), m("div", Iu, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" Данных нет ", -1))
    ])
  ]);
}
const Tu = /* @__PURE__ */ S(Ru, [["render", Bu]]), wu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tu
}, Symbol.toStringTag, { value: "Module" })), Su = {}, Mu = { class: "v-table-body-cell" }, Au = { class: "v-table-body-cell__content" };
function ku(e, t) {
  return r(), m("td", Mu, [
    B("div", Au, [
      d(e.$slots, "default")
    ])
  ]);
}
const Eu = /* @__PURE__ */ S(Su, [["render", ku]]), Du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eu
}, Symbol.toStringTag, { value: "Module" })), zu = {}, Ou = { class: "v-table-header-cell" };
function Pu(e, t) {
  return r(), m("th", Ou, [
    d(e.$slots, "default")
  ]);
}
const Lu = /* @__PURE__ */ S(zu, [["render", Pu]]), Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Lu
}, Symbol.toStringTag, { value: "Module" }));
export {
  de as Accordion,
  La as AccordionPlugin,
  oi as AffixPlugin,
  Ja as AlertPlugin,
  Ya as AvatarGroupPlugin,
  Ga as AvatarPlugin,
  ui as BadgePlugin,
  li as BreadcrumbsPlugin,
  Xe as Button,
  gc as ButtonGroupPlugin,
  za as ButtonPlugin,
  lu as CalendarPlugin,
  Re as Checkbox,
  cr as CheckboxGroupPlugin,
  ur as CheckboxPlugin,
  cc as ClickOutsidePlugin,
  mi as CollapsePlugin,
  ql as ConfigProvider,
  wr as ConfigProviderPlugin,
  Yt as ConfigProviderRootContextKey,
  Tc as ConfirmPlugin,
  Bc as ConfirmService,
  ou as CountdownPlugin,
  Gu as Direction,
  dt as Divider,
  Dr as DividerPlugin,
  Ri as DrawerPlugin,
  Mc as DrawerService,
  wi as DropdownPlugin,
  qt as Flex,
  qu as FlexAlign,
  Rc as FlexItemPlugin,
  Ku as FlexJustify,
  Pr as FlexPlugin,
  _e as Form,
  ar as FormItemPlugin,
  sr as FormPlugin,
  Ze as Grid,
  Se as INPUT_NUMBER_ACTIONS,
  Ls as INPUT_NUMBER_MAX,
  Ps as INPUT_NUMBER_MIN,
  Lt as INPUT_NUMBER_STEP,
  We as INPUT_NUMBER_VALUE_DEFAULT,
  Ns as INPUT_NUMBER_WHEEL_DELAY,
  Mi as ImagePlugin,
  vi as InplacePlugin,
  q as Input,
  ut as InputCode,
  pr as InputCodePlugin,
  Jr as InputGroupPlugin,
  jo as InputModes,
  be as InputNativeTypes,
  Ce as InputNumber,
  hr as InputNumberPlugin,
  Js as InputPassword,
  _r as InputPasswordPlugin,
  mr as InputPlugin,
  fc as InputRange,
  mc as InputTags,
  It as InputTypes,
  nt as IntersectionPresets,
  ct as Layout,
  ki as LayoutPlugin,
  uc as LoadingPlugin,
  pc as Modal,
  yi as ModalPlugin,
  Sc as ModalService,
  hi as OverlayPlugin,
  zi as PaginationPlugin,
  Li as PlaceholderPlugin,
  Yu as Position,
  bc as Primitive,
  kr as ProgressPlugin,
  Ie as Radio,
  $r as RadioGroupPlugin,
  Vr as RadioPlugin,
  kt as Scrollbar,
  Fi as ScrollbarPlugin,
  hc as Section,
  ge as Select,
  Rr as SelectPlugin,
  Uu as Sizes,
  ji as SpinnerPlugin,
  Fe as Switch,
  Br as SwitchPlugin,
  Kr as TablePlugin,
  Zi as TabsPlugin,
  Gt as Tag,
  Cc as TagGroupPlugin,
  er as TagPlugin,
  xa as Text,
  or as TextPlugin,
  Hu as Themes,
  wc as ToastService,
  dc as TooltipPlugin,
  Oa as VAccordion,
  Pa as VAccordionItem,
  ti as VAffix,
  Za as VAlert,
  Fa as VAvatar,
  Ua as VAvatarGroup,
  ri as VBadge,
  si as VBreadcrumbs,
  Ea as VButton,
  Da as VButtonGroup,
  su as VCalendar,
  ir as VCheckbox,
  rr as VCheckboxGroup,
  xc as VCol,
  di as VCollapse,
  Tr as VConfigProvider,
  Vc as VContainer,
  tu as VCountdown,
  Er as VDivider,
  Jt as VDrawer,
  Ti as VDropdown,
  zr as VFlex,
  Or as VFlexItem,
  nr as VForm,
  lr as VFormItem,
  Si as VImage,
  pi as VInplace,
  dr as VInput,
  fr as VInputCode,
  Wr as VInputGroup,
  Zr as VInputGroupAddon,
  vr as VInputNumber,
  br as VInputPassword,
  Ai as VLayout,
  Zt as VModal,
  Cr as VOption,
  Pe as VOverlay,
  Di as VPagination,
  Pi as VPlaceholder,
  Ar as VProgress,
  gr as VRadio,
  yr as VRadioGroup,
  $c as VRow,
  Ni as VScrollbar,
  xr as VSelect,
  Xi as VSpinner,
  Ir as VSwitch,
  Wi as VTab,
  qr as VTable,
  Ki as VTabs,
  Ji as VTag,
  Qi as VTagGroup,
  tr as VText,
  Ic as VauUI,
  rc as VisiblePlugin,
  ec as booleanToBooleanish,
  he as clone,
  qe as debounce,
  tc as defineFormRules,
  Zu as delay,
  kc as en,
  st as getProp,
  Ho as isBoolean,
  Wu as isEmpty,
  Uo as isFunction,
  ze as isNull,
  W as isNumber,
  Ge as isObject,
  pe as isString,
  se as isUndefined,
  Qu as omit,
  Ju as pick,
  Bt as renderSlotFragments,
  Ac as ru,
  _c as ruRU,
  Ye as throttle,
  po as useAccordionItem,
  fo as useAccordionRoot,
  vo as useAccordionTrigger,
  sc as useAnimatedNumber,
  nc as useClipboard,
  vc as useConfigProviderRootContext,
  yc as useDrawer,
  ic as useEmitProxy,
  Wo as useFormItem,
  Yo as useFormRoot,
  Xo as useIntersectionObserver,
  oc as useLoadImage,
  ju as usePlural,
  ac as useScrollTo,
  Z as useToggle,
  lc as useWindowScroll,
  wt as vClickOutside,
  yn as vLoading,
  Vn as vTooltip,
  gn as vVisible
};
