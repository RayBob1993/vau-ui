import { computed as c, toValue as _, inject as U, defineComponent as p, mergeModels as I, useModel as z, provide as H, createElementBlock as f, openBlock as r, normalizeClass as R, renderSlot as d, unref as a, withDirectives as Y, createElementVNode as B, vShow as ie, ref as A, watch as K, onBeforeUnmount as je, markRaw as no, Fragment as G, onMounted as re, onScopeDispose as He, isRef as Ae, nextTick as so, useId as Ue, onUnmounted as ke, withModifiers as lo, useSlots as J, useTemplateRef as ne, createCommentVNode as X, normalizeProps as E, guardReactiveProps as D, createTextVNode as j, renderList as fe, toDisplayString as N, createBlock as x, withCtx as g, mergeProps as F, toHandlers as te, vModelDynamic as ao, vModelText as vt, vModelCheckbox as ht, vModelRadio as io, createVNode as S, withKeys as ot, createPropsRestProxy as Ge, resolveDynamicComponent as ro, Comment as uo, cloneVNode as co, h as ae, shallowRef as nt, Teleport as bt, Transition as Ee, createSlots as _t, reactive as fo, defineAsyncComponent as De, render as ye } from "vue";
import { z as st } from "zod";
function mo(e) {
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
const gt = /* @__PURE__ */ Symbol("AccordionRootContextKey"), yt = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function Vt() {
  return U(gt, null);
}
function $t() {
  return U(yt, null);
}
function ho() {
  const e = Vt(), t = $t();
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
    const o = e, n = t, s = z(e, "modelValue"), { setModelValue: l } = mo({
      props: () => o,
      modelValue: () => s.value,
      onChange: (i) => n("change", i),
      onChangeModel: (i) => {
        s.value = i;
      }
    });
    return H(gt, {
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
}), _o = /* @__PURE__ */ p({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = Vt(), { isActive: n } = po({
      accordionRootContext: o,
      props: () => t
    });
    return H(yt, {
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
}), w = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, go = {}, yo = { class: "accordion-header" };
function Vo(e, t) {
  return r(), f("div", yo, [
    d(e.$slots, "default")
  ]);
}
const $o = /* @__PURE__ */ w(go, [["render", Vo]]), xo = {
  class: "accordion-body",
  role: "region"
}, Co = { class: "accordion-body__content" }, Ro = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = $t(), o = c(() => !!_(t?.isActive));
    return (n, s) => Y((r(), f("div", xo, [
      B("div", Co, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [ie, o.value]
    ]);
  }
}), Io = {}, Bo = { class: "accordion-title" };
function To(e, t) {
  return r(), f("div", Bo, [
    d(e.$slots, "default")
  ]);
}
const So = /* @__PURE__ */ w(Io, [["render", To]]), wo = ["disabled"], Mo = /* @__PURE__ */ p({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = ho(), { isDisabled: n, handleToggle: s } = vo({
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
    ], 8, wo));
  }
}), de = {
  Root: bo,
  Item: _o,
  Header: $o,
  Body: Ro,
  Title: So,
  Trigger: Mo
};
function Ao(e) {
  const t = c(() => _(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const xt = /* @__PURE__ */ Symbol("FormRootContextKey"), Ct = /* @__PURE__ */ Symbol("FormItemContextKey");
function Rt() {
  return U(xt, null);
}
function It() {
  return U(Ct, null);
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
    return (l, i) => (r(), f("button", {
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
    }, [
      d(l.$slots, "default")
    ], 10, ko));
  }
}), Do = {}, zo = { class: "button-content" };
function Oo(e, t) {
  return r(), f("span", zo, [
    d(e.$slots, "default")
  ]);
}
const Po = /* @__PURE__ */ w(Do, [["render", Oo]]), Lo = /* @__PURE__ */ p({
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
}), Fe = {
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
function Xo(e) {
  const t = c(() => _(e.formItems)), o = c(() => t.value.filter((l) => l.isValidatable));
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
function Fo(e, t, o) {
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
const Bt = Object.freeze({
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
function Ho(e) {
  return typeof e == "boolean";
}
function pe(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function ze(e) {
  return e === null;
}
function Ye(e) {
  return !ze(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function se(e) {
  return typeof e > "u";
}
function Wu(e) {
  return ze(e) || se(e) ? !0 : pe(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ye(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Uo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function W(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function Go(e) {
  return !ze(e) && !se(e) && Ye(e) && !Array.isArray(e);
}
function at(e, t) {
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
  function b(y = {}) {
    const { upcomingOnly: C = !1 } = y;
    h(), u = !C;
  }
  function V() {
    if (m = Date.now(), v) {
      const y = v;
      e.apply(this, y), v = null;
    }
  }
  function $(...y) {
    if (u)
      return;
    const C = Date.now() - m;
    v = y;
    function T() {
      i = null;
    }
    h(), !s && l && !i && V.call(this), se(l) && C > t ? s ? (m = Date.now(), n || (i = setTimeout(l ? T : V.bind(this), t))) : V.call(this) : n || (i = setTimeout(
      l ? T : V.bind(this),
      se(l) ? t - C : t
    ));
  }
  return $.cancel = b, $;
}
function Ke(e, t, o = {}) {
  const { atBegin: n = !1 } = o;
  return qe(e, t, {
    debounceMode: n
  });
}
function tc(e) {
  return no(e);
}
function Tt(e) {
  return e ? e.flatMap((t) => t.type === G ? Tt(t.children) : [t]) : [];
}
function oc(e, t, o = {}) {
  const {
    rootMargin: n = lt.LAZY_IMAGE.rootMargin,
    threshold: s = lt.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: u } = Fo(e, M, {
    rootMargin: n,
    threshold: s
  }), [m, v] = Z(), [h, b] = Z(), V = A(""), $ = A(""), y = A(""), C = pe(t) ? { src: t } : t;
  function T() {
    if (m.value || h.value)
      return;
    const O = new Image();
    O.src = C.src, C.srcset && (O.srcset = C.srcset), C.sizes && (O.sizes = C.sizes), O.onload = () => {
      V.value = C.src, $.value = C.srcset || "", y.value = C.sizes || "", v(!0), b(!1);
    }, O.onerror = () => {
      v(!1), b(!0);
    };
  }
  function M(O) {
    O.forEach((P) => {
      P.isIntersecting && !m.value && !h.value && T();
    });
  }
  return re(() => {
    if (i || l && "loading" in HTMLImageElement.prototype) {
      T();
      return;
    }
  }), {
    isLoaded: m,
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
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = No(), { validate: s, clearValidate: l, validatableFormItems: i } = Xo({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [u, m] = Z(!1), v = A(!1), h = A("");
  function b() {
    t.value.forEach((y) => y.reset()), l();
  }
  K(i, async (y) => {
    const C = y.map((M) => M.id).sort().join(",");
    if (C === h.value)
      return;
    if (h.value = C, y.length === 0) {
      v.value && m(!0);
      return;
    }
    v.value = !0;
    const T = await s(!0);
    m(T);
  }, {
    immediate: !0
  });
  const V = Ke(async () => {
    const y = await s(!0);
    m(y);
  }, 400);
  async function $(y = !1) {
    const C = await s(y);
    return m(C), C;
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
function Wo(e) {
  const t = Ue(), { field: o, registerField: n, unregisterField: s } = qo(), l = c(() => _(e.props)), i = c(() => l.value.name), u = c(() => e.formRootContext?.modelValue.value), m = c(() => e.formRootContext?.props?.rules), v = c(() => i.value && u.value && at(u.value, i.value)), h = c(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), b = c(() => {
    if (!i.value || !m.value)
      return null;
    const L = at(m.value, i.value);
    return L instanceof st.ZodType ? L : null;
  }), V = c(() => !!b.value), $ = c(() => b.value ? !b.value.safeParse(void 0).success : !1), {
    validationStatus: y,
    validationErrors: C,
    clearValidateErrors: T,
    validate: M
  } = Ko({
    data: () => i.value ? {
      [i.value]: v.value
    } : null,
    schema: () => !i.value || !b.value ? null : st.object({
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
  const k = Ke(() => M(), 300);
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
    validationErrors: C,
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
      unregisterFormItem: m,
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
    return H(xt, {
      props: n,
      modelValue: l,
      registerFormItem: u,
      unregisterFormItem: m
    }), t({
      validate: v,
      clearValidate: h,
      reset: b
    }), ($, y) => (r(), f("form", {
      class: R(["form", {
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
    const n = e, s = o, l = J(), i = Rt(), {
      validationErrors: u,
      validationStatus: m,
      isDisabled: v,
      isRequired: h,
      registerField: b,
      unregisterField: V,
      reset: $,
      validate: y,
      clearValidateErrors: C
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
      validationStatus: m.value,
      isRequired: h.value,
      errors: u.value
    }));
    return H(Ct, {
      props: n,
      validationStatus: m,
      validationErrors: u,
      isRequired: h,
      isDisabled: v,
      registerField: b,
      unregisterField: V,
      reset: $,
      validate: y,
      clearValidateErrors: C
    }), t({
      reset: $,
      validate: y,
      clearValidateErrors: C
    }), (O, P) => (r(), f("div", {
      ref_key: "root",
      ref: T,
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
      l?.header ? (r(), f("div", Jo, [
        d(O.$slots, "header", E(D(M.value)))
      ])) : X("", !0),
      B("div", Qo, [
        d(O.$slots, "default", E(D(M.value)))
      ]),
      l.footer ? (r(), f("div", en, [
        d(O.$slots, "footer", E(D(M.value)))
      ])) : X("", !0)
    ], 2));
  }
}), on = {}, nn = { class: "form-item-title" };
function sn(e, t) {
  return r(), f("div", nn, [
    d(e.$slots, "default")
  ]);
}
const ln = /* @__PURE__ */ w(on, [["render", sn]]), an = {}, rn = { class: "form-item-required" };
function un(e, t) {
  return r(), f("span", rn, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" * ", -1))
    ])
  ]);
}
const cn = /* @__PURE__ */ w(an, [["render", un]]), dn = { class: "form-item-errors" }, fn = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = It(), o = c(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), f("div", dn, [
      (r(!0), f(G, null, fe(o.value, (l, i) => (r(), f("div", {
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
  ItemErrors: fn
};
function mn() {
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
function me(e, t = !1) {
  return t && Array.isArray(e);
}
function pn(e) {
  const t = c(() => _(e.multiple)), o = c(() => _(e.modelValue)), n = c(() => _(e.options)), s = c(() => n.value.find((i) => i.props.value === o.value)), l = c(() => {
    if (!me(o.value, t.value))
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
  const t = c(() => _(e.modelValue)), o = c(() => _(e.props)), { options: n, registerOption: s, unregisterOption: l } = mn(), { activeOption: i, activeOptions: u } = pn({
    multiple: () => !!o.value.multiple,
    options: () => n.value,
    modelValue: () => t.value
  }), [m, v] = Z(), h = c(() => me(t.value, o.value.multiple) ? t.value.length > 0 : !!t.value), b = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.disabled));
  function V(M) {
    if (!b.value) {
      if (me(t.value, o.value.multiple)) {
        const O = /* @__PURE__ */ new Set([...t.value]);
        O.has(M) ? O.delete(M) : O.add(M), e.onChangeModel?.([...O]);
      } else
        e.onChangeModel?.(M);
      e.onChange?.(M);
    }
  }
  function $() {
    if (me(t.value, o.value.multiple)) {
      e.onChangeModel?.([]);
      return;
    }
    e.onChangeModel?.(""), e.onClear?.();
  }
  function y() {
    b.value || v(!0);
  }
  function C() {
    b.value || v(!1);
  }
  function T() {
    m.value ? C() : y();
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
    isOpen: m,
    isDisabled: b,
    open: y,
    close: C,
    toggle: T,
    registerOption: s,
    unregisterOption: l,
    setModelValue: V,
    reset: $
  };
}
function hn(e) {
  const t = Ue(), o = c(() => _(e.selectRootContext?.modelValue)), n = c(() => _(e.props)), s = c(() => !!_(e.selectRootContext?.props)?.multiple), l = c(() => se(o.value) ? !1 : me(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), i = c(() => !!(_(e.selectRootContext?.isDisabled) || n.value?.disabled)), u = c(() => ({
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
function bn(e) {
  const t = c(() => _(e.selectRootContext?.props)), o = c(() => _(e.selectRootContext?.activeOption)), n = c(() => o.value?.props?.title ?? o.value?.props.value), s = c(() => _(e.selectRootContext?.activeOptions) ?? []), l = c(() => !!_(e.selectRootContext?.hasValue)), i = c(() => se(e.selectRootContext?.modelValue) ? !1 : me(_(e.selectRootContext.modelValue), !!t.value?.multiple)), u = c(() => t.value?.placeholder);
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
const St = /* @__PURE__ */ Symbol("SelectRootContextKey");
function Oe() {
  return U(St, null);
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
    const o = e, n = t, s = z(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), {
      activeOption: v,
      activeOptions: h,
      hasValue: b,
      isOpen: V,
      isDisabled: $,
      open: y,
      close: C,
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
    return H(St, {
      activeOption: () => v.value,
      activeOptions: () => h.value,
      modelValue: () => s.value,
      props: () => o,
      hasValue: () => b.value,
      isOpen: () => V.value,
      isDisabled: () => $.value,
      open: y,
      close: C,
      toggle: T,
      registerOption: M,
      unregisterOption: O,
      setModelValue: P
    }), (k, L) => Y((r(), f("div", {
      class: R(["select", {
        "select--disabled": a($),
        "select--open": a(V),
        "select--filled": a(b),
        "select--invalid": a(m),
        "select--valid": a(u)
      }]),
      "aria-disabled": a($)
    }, [
      d(k.$slots, "default")
    ], 10, $n)), [
      [a(wt), a(C)]
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
    return (n, s) => Y((r(), f("div", In, [
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
    return (m, v) => (r(), f("div", {
      class: "select-value",
      onClick: v[0] || (v[0] = //@ts-ignore
      (...h) => a(u) && a(u)(...h))
    }, [
      d(m.$slots, "default", {}, () => [
        a(s) ? (r(), f(G, { key: 0 }, [
          a(l) ? (r(!0), f(G, { key: 0 }, fe(a(n), (h) => (r(), f(G, null, [
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
}), Mt = 300, At = 1, kt = 10;
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
function Sn(e) {
  const t = c(() => _(e.props)), o = c(() => t.value?.infiniteScrollOffset ?? kt), n = c(() => t.value?.draggableMultiplier ?? At), s = c(() => W(t.value?.debounceDelay) ? t.value.debounceDelay : Mt), [l, i] = Z(), [u, m] = Z(), v = A(0), h = A(0), b = A(0), V = A(0);
  function $() {
    m(!1), i(!1);
  }
  const y = Ke((P) => {
    e.onScroll?.(P), t.value?.draggable || (b.value = it(e.scrollbar.value, !!t.value?.vertical), V.value = rt(e.scrollbar.value, !!t.value?.horizontal));
    const k = e.scrollbar.value, L = e.content.value, oe = k ? k.clientHeight : 0, le = k ? k.clientWidth : 0, Ve = L ? L.scrollWidth : 0, ue = L ? L.scrollHeight : 0, ce = b.value + oe, Le = V.value + le, $e = !!(t.value?.vertical && ue - ce <= o.value), ee = !!(t.value?.horizontal && Ve - Le <= o.value);
    $e && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), C = qe((P) => {
    if (e.onMousemove?.(P), !t.value?.draggable || !u.value)
      return;
    P.preventDefault(), P.stopPropagation();
    const k = e.scrollbar.value;
    if (!k)
      return;
    const L = !!t.value?.vertical, oe = !!t.value?.horizontal, le = P.pageY - ut(k, L), ue = (P.pageX - ct(k, oe) - v.value) * n.value, ce = (le - h.value) * n.value;
    oe && (k.scrollLeft = V.value - ue), L && (k.scrollTop = b.value - ce);
  }, s.value);
  function T(P) {
    if (e.onMousedown?.(P), !t.value?.draggable)
      return;
    m(!0), i(!0);
    const k = e.scrollbar.value;
    if (k) {
      const L = !!t.value?.vertical, oe = !!t.value?.horizontal;
      h.value = P.pageY - ut(k, L), v.value = P.pageX - ct(k, oe);
    }
    b.value = it(e.scrollbar.value, !!t.value?.vertical), V.value = rt(e.scrollbar.value, !!t.value?.horizontal);
  }
  function M(P) {
    e.onMouseleave?.(P), t.value?.draggable && $();
  }
  function O(P) {
    e.onMouseup?.(P), t.value?.draggable && $();
  }
  return He(() => {
    y.cancel?.(), C.cancel?.();
  }), {
    isGrabbing: l,
    handleScroll: y,
    handleMousedown: T,
    handleMouseleave: M,
    handleMouseup: O,
    handleMousemove: C
  };
}
const wn = /* @__PURE__ */ p({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: At },
    infiniteScrollOffset: { default: kt },
    debounceDelay: { default: Mt },
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
      handleMousedown: m,
      handleMouseleave: v,
      handleMouseup: h,
      handleMousemove: b
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
    return (V, $) => (r(), f("div", {
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
      onScroll: $[0] || ($[0] = //@ts-ignore
      (...y) => a(u) && a(u)(...y)),
      onMousedown: $[1] || ($[1] = //@ts-ignore
      (...y) => a(m) && a(m)(...y)),
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
}), Et = {
  Root: wn
}, Mn = /* @__PURE__ */ p({
  __name: "SelectScrollbar",
  setup(e) {
    return (t, o) => (r(), x(a(Et).Root, { class: "select-scrollbar" }, {
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
  const [t, o] = Z(), n = c(() => _(e.props)), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.loading || n.value?.disabled)), l = c(() => n.value.type === Bt.TEXTAREA), i = c(() => !!_(e.modelValue)?.trim());
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
function Dt(e) {
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
const zt = /* @__PURE__ */ Symbol("InputRootContextKey");
function We() {
  return U(zt, null);
}
const zn = /* @__PURE__ */ p({
  __name: "InputRoot",
  props: /* @__PURE__ */ I({
    type: { default: Bt.INPUT },
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
    const n = e, s = o, l = z(e, "modelValue"), { formRootContext: i, formItemContext: u, isValid: m, isInvalid: v } = Q(), { isDisabled: h, isTextarea: b, hasValue: V, isFocus: $, setFocus: y, setModelValue: C, reset: T } = En({
      formRootContext: i,
      formItemContext: u,
      modelValue: () => l.value,
      props: () => n,
      onUpdateModelValue: (M) => {
        l.value = M;
      }
    });
    return H(zt, {
      isDisabled: () => h.value,
      props: () => n,
      modelValue: () => l.value,
      setFocus: y,
      setModelValue: C,
      reset: T,
      emit: s
    }), t({
      setFocus: y
    }), (M, O) => (r(), f("div", {
      class: R(["input", {
        "input--focus": a($),
        "input--textarea": a(b),
        "input--filled": a(V),
        "input--disabled": a(h),
        "input--loading": e.loading,
        "input--invalid": a(v),
        "input--valid": a(m)
      }])
    }, [
      d(M.$slots, "default", {
        isTextarea: a(b),
        isFocus: a($),
        hasValue: a(V),
        loading: !!e.loading,
        isInvalid: a(v),
        isValid: a(m)
      })
    ], 2));
  }
}), On = {}, Pn = { class: "input-before" };
function Ln(e, t) {
  return r(), f("div", Pn, [
    d(e.$slots, "default")
  ]);
}
const Nn = /* @__PURE__ */ w(On, [["render", Ln]]), Xn = { class: "input-after" }, Fn = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = We(), { isClearable: o, handleClear: n } = Dn({
      inputRootContext: t
    });
    return (s, l) => (r(), f("div", Xn, [
      d(s.$slots, "default"),
      a(o) ? (r(), f("button", {
        key: 0,
        type: "button",
        onClick: l[0] || (l[0] = //@ts-ignore
        (...i) => a(n) && a(n)(...i))
      }, " × ")) : X("", !0)
    ]));
  }
}), jn = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Hn = /* @__PURE__ */ p({
  __name: "InputNative",
  setup(e) {
    const t = We(), { modelValue: o, listeners: n } = Dt({
      inputRootContext: t
    }), { props: s } = kn({
      inputRootContext: t
    });
    return (l, i) => Y((r(), f("input", F({
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
    const t = We(), { modelValue: o, listeners: n } = Dt({
      inputRootContext: t
    }), { props: s } = An({
      inputRootContext: t
    });
    return (l, i) => Y((r(), f("textarea", F({
      "onUpdate:modelValue": i[0] || (i[0] = (u) => Ae(o) ? o.value = u : null),
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      rows: a(s).rows,
      cols: a(s).cols,
      placeholder: a(s).placeholder,
      class: "input-textarea"
    }, te(a(n), !0)), null, 16, Un)), [
      [vt, a(o)]
    ]);
  }
}), Yn = {}, qn = { class: "input-control" };
function Kn(e, t) {
  return r(), f("div", qn, [
    d(e.$slots, "default")
  ]);
}
const Wn = /* @__PURE__ */ w(Yn, [["render", Kn]]), Zn = {}, Jn = { class: "input-group" };
function Qn(e, t) {
  return r(), f("div", Jn, [
    d(e.$slots, "default")
  ]);
}
const es = /* @__PURE__ */ w(Zn, [["render", Qn]]), ts = {}, os = { class: "input-group-addon" };
function ns(e, t) {
  return r(), f("div", os, [
    d(e.$slots, "default")
  ]);
}
const ss = /* @__PURE__ */ w(ts, [["render", ns]]), q = {
  Root: zn,
  Before: Nn,
  After: Fn,
  Native: Hn,
  Textarea: Gn,
  Control: Wn,
  Group: es,
  GroupAddon: ss
}, Ot = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function ls() {
  return U(Ot, null);
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
    const o = e, n = t, s = z(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isChecked: v, isDisabled: h, isIndeterminate: b } = as({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    }), V = ne("inputRef");
    return K([V, b], ([$, y]) => {
      $ && ($.indeterminate = !!y);
    }, {
      immediate: !0
    }), H(Ot, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isIndeterminate: () => b.value,
      isValid: () => u.value,
      isInvalid: () => m.value
    }), ($, y) => (r(), f("label", {
      class: R(["checkbox", {
        "checkbox--disabled": a(h),
        "checkbox--active": a(v),
        "checkbox--indeterminate": a(b),
        "checkbox--invalid": a(m),
        "checkbox--valid": a(u)
      }])
    }, [
      Y(B("input", F({
        ref_key: "inputRef",
        ref: V,
        "onUpdate:modelValue": y[0] || (y[0] = (C) => s.value = C),
        value: e.value,
        type: "checkbox",
        disabled: a(h),
        checked: a(v),
        class: "checkbox__input"
      }, te(n, !0)), null, 16, rs), [
        [ht, s.value]
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
}), ds = {}, fs = { class: "checkbox-title" };
function ms(e, t) {
  return r(), f("span", fs, [
    d(e.$slots, "default")
  ]);
}
const ps = /* @__PURE__ */ w(ds, [["render", ms]]), vs = /* @__PURE__ */ p({
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
const Pt = /* @__PURE__ */ Symbol("RadioRootContextKey");
function _s() {
  return U(Pt, null);
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
    const o = e, n = t, s = z(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: u, isInvalid: m } = Q(), { isActive: v, isDisabled: h } = hs({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    });
    return H(Pt, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => h.value,
      isValid: () => u.value,
      isInvalid: () => m.value
    }), (b, V) => (r(), f("label", {
      class: R(["radio", {
        "radio--disabled": a(h),
        "radio--active": a(v),
        "radio--invalid": a(m),
        "radio--valid": a(u)
      }])
    }, [
      Y(B("input", F({
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
}), $s = {}, xs = { class: "radio-title" };
function Cs(e, t) {
  return r(), f("span", xs, [
    d(e.$slots, "default")
  ]);
}
const Rs = /* @__PURE__ */ w($s, [["render", Cs]]), Is = /* @__PURE__ */ p({
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
const Lt = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function Ss() {
  return U(Lt, null);
}
const ws = { class: "switch" }, Ms = ["disabled"], As = /* @__PURE__ */ p({
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
    const t = e, o = z(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: u, isActive: m } = Bs({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value
    });
    return H(Lt, {
      props: () => t,
      isActive: () => m.value,
      isDisabled: () => u.value,
      isValid: () => l.value,
      isInvalid: () => i.value
    }), (v, h) => (r(), f("label", ws, [
      Y(B("input", {
        "onUpdate:modelValue": h[0] || (h[0] = (b) => o.value = b),
        type: "checkbox",
        disabled: a(u),
        class: "switch__input"
      }, null, 8, Ms), [
        [ht, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), ks = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = Ss(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = Ts({
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
}), Es = {}, Ds = { class: "switch-title" };
function zs(e, t) {
  return r(), f("span", Ds, [
    d(e.$slots, "default")
  ]);
}
const Os = /* @__PURE__ */ w(Es, [["render", zs]]), Xe = {
  Root: As,
  Indicator: ks,
  Title: Os
}, Nt = 1, Ps = -1 / 0, Ls = 1 / 0, Ns = 100, Ze = 0, we = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Xs(e) {
  const t = c(() => _(e.props)), o = c(() => _(e.modelValue)), n = c(() => t.value.step || Nt), s = c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), l = c(() => s.value || W(t.value.min) && o.value === t.value.min), i = c(() => s.value || W(t.value.max) && !(o.value < t.value.max));
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
function Fs(e) {
  const t = c(() => _(e.mousewheel)), o = c(() => W(t.value) && t.value > 0 ? t.value : Ns);
  return {
    handleWheel: qe((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function js(e) {
  const t = c(() => _(e.inputNumberRootContext?.props)), o = c({
    get: () => _(e.inputNumberRootContext?.modelValue) ?? Ze,
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
  const t = c(() => _(e.props)), o = c(() => t.value.action === we.DECREMENT), n = c(() => t.value.action === we.INCREMENT), s = c(() => o.value ? !!_(e.inputNumberRootContext?.isDecrementDisabled) : !!_(e.inputNumberRootContext?.isIncrementDisabled));
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
const Xt = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function Ft() {
  return U(Xt, null);
}
const Us = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ I({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Ps },
    max: { default: Ls },
    step: { default: Nt },
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
    const t = e, o = z(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), {
      step: u,
      isDisabled: m,
      isDecrementDisabled: v,
      isIncrementDisabled: h,
      handleDecrement: b,
      handleIncrement: V,
      setModelValue: $
    } = Xs({
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
    return H(Xt, {
      props: () => t,
      isDisabled: () => m.value,
      modelValue: () => o.value,
      step: () => u.value,
      isDecrementDisabled: () => v.value,
      isIncrementDisabled: () => h.value,
      handleDecrement: b,
      handleIncrement: V,
      setModelValue: $
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
}), Gs = { class: "input-number-input" }, Ys = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = Ft(), { props: o, modelValue: n } = js({
      inputNumberRootContext: t
    }), { handleWheel: s } = Fs({
      mousewheel: () => _(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), f("div", Gs, [
      Y(B("input", F({
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
        ], 64)) : X("", !0)
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
    return (i, u) => (r(), x(a(q).Root, F(t, {
      modelValue: n.value,
      "onUpdate:modelValue": u[1] || (u[1] = (m) => n.value = m),
      "native-type": a(s)
    }), {
      default: g((m) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: g(() => [
            d(i.$slots, "before", E(D(m)))
          ]),
          _: 2
        }, 1024)) : X("", !0),
        S(a(q).Control, null, {
          default: g(() => [
            S(a(q).Native)
          ]),
          _: 1
        }),
        S(a(q).After, null, {
          default: g(() => [
            d(i.$slots, "after", E(D(m)), () => [
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
const jt = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function tl() {
  return U(jt, null);
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
    return H(jt, {
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
}), nl = ["disabled", "aria-disabled"], sl = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = tl(), { isDisabled: o } = el({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), f("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, nl));
  }
}), dt = {
  Root: ol,
  Pin: sl
}, Ht = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function Ut() {
  return U(Ht, null);
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
    const o = e, n = z(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: u } = Q(), { isDisabled: m } = ll({
      formRootContext: s,
      formItemContext: l,
      props: () => o
    });
    return H(Ht, {
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
}), rl = { class: "input-tags-input" }, ul = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    Ut();
    const { handleEnter: t, handleTab: o } = al();
    return (n, s) => (r(), f("div", rl, [
      B("input", {
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
}), cl = { class: "input-tags-tags" }, dl = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return Ut(), (t, o) => (r(), f("div", cl));
  }
}), fc = {
  Root: il,
  Input: ul,
  Tags: dl
};
function fl(e) {
  const t = c(() => _(e.props));
  return {
    isDisabled: c(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function ml(e) {
  return {
    isDisabled: c(() => !!_(e.inputRangeRootContext?.isDisabled))
  };
}
const Gt = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function pl() {
  return U(Gt, null);
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
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = fl({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return H(Gt, {
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
}), hl = ["aria-disabled"], bl = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = pl(), { isDisabled: o } = ml({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), f("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, hl));
  }
}), mc = {
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
    }), (l, i) => (r(), f("div", yl, [
      d(l.$slots, "default")
    ]));
  }
}), $l = {};
function xl(e, t) {
  return r(), f("div", null, [
    d(e.$slots, "default")
  ]);
}
const Cl = /* @__PURE__ */ w($l, [["render", xl]]), Rl = {};
function Il(e, t) {
  return r(), f("div");
}
const Bl = /* @__PURE__ */ w(Rl, [["render", Il]]), Tl = {}, Sl = { class: "modal-header" };
function wl(e, t) {
  return r(), f("div", Sl, [
    d(e.$slots, "default")
  ]);
}
const Ml = /* @__PURE__ */ w(Tl, [["render", wl]]), Al = {}, kl = { class: "modal-footer" };
function El(e, t) {
  return r(), f("div", kl, [
    d(e.$slots, "default")
  ]);
}
const Dl = /* @__PURE__ */ w(Al, [["render", El]]), zl = {};
function Ol(e, t) {
  return r(), f("div");
}
const Pl = /* @__PURE__ */ w(zl, [["render", Ol]]), Ll = {}, Nl = { class: "modal-content" };
function Xl(e, t) {
  return r(), f("div", Nl, [
    d(e.$slots, "default")
  ]);
}
const Fl = /* @__PURE__ */ w(Ll, [["render", Xl]]), pc = {
  Root: Vl,
  Body: Cl,
  Close: Bl,
  Header: Ml,
  Footer: Dl,
  Title: Pl,
  Content: Fl
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
      }, " X ")) : X("", !0)
    ], 2));
  }
}), Ul = /* @__PURE__ */ p({
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
}), Yt = {
  Root: Hl,
  Group: Ul
}, qt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey");
function vc() {
  return U(qt, {
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
    return H(qt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), ql = {
  Root: Yl
}, Kl = { class: "layout" }, Wl = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), f("div", Kl, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), Zl = {}, Jl = { class: "layout-body" };
function Ql(e, t) {
  return r(), f("main", Jl, [
    d(e.$slots, "default")
  ]);
}
const ea = /* @__PURE__ */ w(Zl, [["render", Ql]]), ft = {
  Root: Wl,
  Body: ea
}, ta = /* @__PURE__ */ p({
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
}), na = /* @__PURE__ */ p({
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
}), sa = /* @__PURE__ */ p({
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
  Root: na,
  Item: sa
}, la = /* @__PURE__ */ p({
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
    const t = Ge(e, ["guttersY", "guttersX", "wrap"]);
    return (o, n) => (r(), x(a(Je).Root, F(t, {
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
}), Qe = {
  Container: ta,
  Row: la,
  Col: oa
}, aa = { class: "section" }, ia = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), f("section", aa, [
      d(t.$slots, "default")
    ]));
  }
}), ra = {}, ua = { class: "section-header" };
function ca(e, t) {
  return r(), f("header", ua, [
    d(e.$slots, "default")
  ]);
}
const da = /* @__PURE__ */ w(ra, [["render", ca]]), fa = {}, ma = { class: "section-title" };
function pa(e, t) {
  return r(), f("h1", ma, [
    d(e.$slots, "default")
  ]);
}
const va = /* @__PURE__ */ w(fa, [["render", pa]]), ha = {}, ba = { class: "section-footer" };
function _a(e, t) {
  return r(), f("footer", ba, [
    d(e.$slots, "default")
  ]);
}
const ga = /* @__PURE__ */ w(ha, [["render", _a]]), ya = {}, Va = { class: "section-body" };
function $a(e, t) {
  return r(), f("div", Va, [
    d(e.$slots, "default")
  ]);
}
const xa = /* @__PURE__ */ w(ya, [["render", $a]]), hc = {
  Root: ia,
  Header: da,
  Title: va,
  Footer: ga,
  Body: xa
}, Ca = /* @__PURE__ */ p({
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
    }, 8, ["class"]));
  }
}), Ra = {
  Root: Ca
}, Ia = /* @__PURE__ */ p({
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
}), Ba = {}, Ta = { class: "divider-content" };
function Sa(e, t) {
  return r(), f("div", Ta, [
    d(e.$slots, "default")
  ]);
}
const wa = /* @__PURE__ */ w(Ba, [["render", Sa]]), mt = {
  Root: Ia,
  Content: wa
}, Ma = p({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: o }) {
    return () => {
      if (!o.default)
        return null;
      const n = Tt(o.default()), s = n.findIndex((m) => m.type !== uo);
      if (s === -1)
        return n;
      const l = n[s];
      delete l.props?.ref;
      const i = l.props ? F(t, l.props) : t, u = co({
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
    return (o, n) => (r(), x(a(Fe).Root, E(D(t)), {
      default: g(() => [
        S(a(Fe).Content, null, {
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
    return (o, n) => (r(), x(a(Fe).Group, E(D(t)), {
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
    return (l, i) => (r(), x(a(de).Root, F(o, {
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
    const t = Ge(e, ["title"]);
    return (o, n) => (r(), x(a(de).Item, E(D(t)), {
      default: g(({ isActive: s }) => [
        S(a(de).Header, null, {
          default: g(() => [
            S(a(de).Trigger, null, {
              default: g(() => [
                S(a(de).Title, null, {
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
        S(a(de).Body, null, {
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
}, Xa = /* @__PURE__ */ p({
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
      e.label ? (r(), f("div", Na, N(e.label), 1)) : X("", !0)
    ], 2));
  }
}), Fa = {}, ja = { class: "v-avatar-group" };
function Ha(e, t) {
  return r(), f("div", ja, [
    d(e.$slots, "default")
  ]);
}
const Ua = /* @__PURE__ */ w(Fa, [["render", Ha]]), Ga = {
  install(e) {
    e.component("VAvatar", Xa);
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
    return (l, i) => (r(), f("div", {
      class: R(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      B("div", qa, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), f(G, { key: 1 }, [
          n.value ? (r(), f("div", Ka, [
            d(l.$slots, "title", {}, () => [
              j(N(e.title), 1)
            ])
          ])) : X("", !0),
          s.value ? (r(), f("div", Wa, [
            d(l.$slots, "description", {}, () => [
              j(N(e.description), 1)
            ])
          ])) : X("", !0)
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
  #f;
  #i;
  #r;
  #t;
  #u;
  #c;
  constructor(t, o) {
    this.#e = this.#_(o), this.#o = t, this.#n = o.innerWrapper, this.#l = o.container, this.#s = 0, this.#a = 1, this.#f = !1, this.#i = !1, this.#r = !1, this.#u = void 0, this.#c = void 0, this.#t = {
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
      se(o[s]) ? n[s] = t[s] : n[s] = o[s];
    return n;
  }
}
function ei(e) {
  const t = nt(), o = nt(), n = c(() => W(e.props?.offsetTop) ? e.props.offsetTop : Kt), s = c(() => W(e.props?.offsetBottom) ? e.props.offsetBottom : Wt);
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
  }), K(() => e.props.disabled, (m) => {
    m ? u() : i();
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
    }), (s, l) => (r(), f("div", {
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
    return (t, o) => (r(), f("nav", ni));
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
    return (l, i) => (r(), f("div", {
      class: R(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      s.value ? (r(), f("sup", ii, [
        d(l.$slots, "content", { value: a(n) }, () => [
          j(N(a(n)), 1)
        ])
      ])) : X("", !0)
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
    return (t, o) => (r(), f("div", ci, [
      d(t.$slots, "default")
    ]));
  }
}), fi = {
  install(e) {
    e.component("VCollapse", di);
  }
};
function mi(e) {
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
    const o = t, { isVisible: n, handleOpen: s, handleClose: l } = mi({
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
    return (t, o) => (r(), f("div", {
      class: R(["v-overlay", {
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
    function m() {
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
    }), (b, V) => (r(), x(bt, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      S(Ee, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: g(() => [
          S(a(Pe), null, {
            default: g(() => [
              Y(B("div", {
                class: R(["v-modal", {
                  "v-modal--open": l.value
                }]),
                role: "dialog"
              }, [
                i.value ? (r(), f("div", bi, [
                  d(b.$slots, "header", { close: m }, () => [
                    j(N(e.title), 1)
                  ]),
                  B("button", {
                    class: "v-modal__close-button",
                    type: "button",
                    onClick: m
                  }, " x ")
                ])) : X("", !0),
                B("div", _i, [
                  d(b.$slots, "default", { close: m })
                ]),
                u.value ? (r(), f("div", gi, [
                  d(b.$slots, "footer", { close: m })
                ])) : X("", !0)
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
    function m() {
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
    }), (b, V) => (r(), x(bt, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      S(Ee, {
        onAfterEnter: v,
        onAfterLeave: h
      }, {
        default: g(() => [
          S(a(Pe), null, {
            default: g(() => [
              Y(B("div", {
                class: R(["v-drawer", {
                  "v-drawer--open": l.value
                }]),
                role: "dialog"
              }, [
                B("div", Vi, [
                  i.value ? (r(), f("div", $i, [
                    d(b.$slots, "header", { close: m }, () => [
                      j(N(e.title), 1)
                    ]),
                    B("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: m
                    }, " x ")
                  ])) : X("", !0),
                  B("div", xi, [
                    d(b.$slots, "default", { close: m })
                  ]),
                  u.value ? (r(), f("div", Ci, [
                    d(b.$slots, "footer", { close: m })
                  ])) : X("", !0)
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
    }), (h, b) => (r(), f("div", {
      class: R(["v-dropdown", {
        "v-dropdown--open": a(l)
      }])
    }, [
      d(h.$slots, "trigger", {
        isVisible: a(l),
        toggle: a(u),
        setVisible: a(i)
      }),
      S(Ee, {
        onAfterEnter: m,
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
}), Si = {
  install(e) {
    e.component("VDropdown", Ti);
  }
}, wi = /* @__PURE__ */ p({
  __name: "VImage",
  props: {
    src: {}
  },
  emits: ["error", "load"],
  setup(e) {
    const t = ne("image"), o = ne("root");
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
    e.component("VImage", wi);
  }
}, Ai = /* @__PURE__ */ p({
  __name: "VLayout",
  setup(e) {
    const t = J();
    return (o, n) => (r(), x(a(ft).Root, null, _t({
      default: g(() => [
        S(a(ft).Body, null, {
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
    return (o, n) => (r(), x(a(Qe).Container, E(D(t)), {
      default: g(() => [
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
    return (o, n) => (r(), x(a(Qe).Col, E(D(t)), {
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
    return (t, o) => (r(), f("div", Ei));
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
    return (t, o) => (r(), f("div", Oi, [
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
    return (s, l) => (r(), x(a(Et).Root, F(o, te(n)), {
      default: g(() => [
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
    function m(v) {
      s.value = v, n("change", v);
    }
    return H(Qt, {
      props: o,
      modelValue: s,
      tabs: l,
      handleChange: m,
      registerTab: i,
      unregisterTab: u
    }), (v, h) => (r(), f("div", Yi, [
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
    }), i = fo({
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
    return (s, l) => (r(), x(a(Yt).Root, F(o, te(n)), {
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
    return (o, n) => (r(), x(a(Yt).Group, E(D(t)), {
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
    return (o, n) => (r(), x(a(Ra).Root, E(D(t)), {
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
    return (l, i) => (r(), x(a(_e).Root, F({
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
    const o = Ge(e, ["title"]), n = t, s = J();
    return (l, i) => (r(), x(a(_e).Item, F(o, te(n)), _t({
      default: g((u) => [
        d(l.$slots, "default", E(D(u)))
      ]),
      footer: g((u) => [
        d(l.$slots, "footer", E(D(u)), () => [
          S(a(_e).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: g((u) => [
          d(l.$slots, "header", E(D(u)), () => [
            S(a(_e).ItemTitle, null, {
              default: g(() => [
                j(N(e.title) + " ", 1),
                u.isRequired ? (r(), x(a(_e).ItemRequired, { key: 0 })) : X("", !0)
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
    return (n, s) => (r(), x(a(Re).Root, F(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        S(a(Re).Indicator),
        S(a(Re).Title, null, {
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
    return (s, l) => (r(), x(a(q).Root, F(t, {
      modelValue: n.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i)
    }), {
      default: g((i) => [
        o?.before ? (r(), x(a(q).Before, { key: 0 }, {
          default: g(() => [
            d(s.$slots, "before", E(D(i)))
          ]),
          _: 2
        }, 1024)) : X("", !0),
        S(a(q).Control, null, {
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
        }, 1024)) : X("", !0)
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
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(dt).Root, F(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        (r(!0), f(G, null, fe(e.length, (l, i) => (r(), x(a(dt).Pin, {
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
      default: Ze
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = z(e, "modelValue");
    return (n, s) => (r(), x(a(Ce).Root, F(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        S(a(Ce).Button, {
          action: a(we).DECREMENT
        }, null, 8, ["action"]),
        S(a(Ce).Input),
        S(a(Ce).Button, {
          action: a(we).INCREMENT
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
    return (n, s) => (r(), x(a(Js).Root, F({
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
    return (n, s) => (r(), x(a(Ie).Root, F(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        S(a(Ie).Indicator),
        S(a(Ie).Title, null, {
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
    return (l, i) => (r(), x(a(ge).Root, F(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (u) => s.value = u),
      onChange: i[1] || (i[1] = (u) => n("change", u)),
      onClose: i[2] || (i[2] = (u) => n("close")),
      onClear: i[3] || (i[3] = (u) => n("clear"))
    }), {
      default: g(() => [
        S(a(ge).Value, null, {
          default: g(() => [
            d(l.$slots, "value")
          ]),
          _: 3
        }),
        S(a(ge).Dropdown, null, {
          default: g(() => [
            S(a(ge).Scrollbar, null, {
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
    return (n, s) => (r(), x(a(Xe).Root, F(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: g(() => [
        S(a(Xe).Indicator),
        S(a(Xe).Title, null, {
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
}), Sr = {
  install(e) {
    e.component("VConfigProvider", Tr);
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
      B("div", wr, [
        e.showValue ? (r(), f("div", Mr, [
          d(t.$slots, "default")
        ])) : X("", !0)
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
    return (n, s) => (r(), x(a(mt).Root, E(D(t)), {
      default: g(() => [
        o?.default ? (r(), x(a(mt).Content, { key: 0 }, {
          default: g(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })) : X("", !0)
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
    return (o, n) => (r(), x(a(Je).Item, E(D(t)), {
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
const Nr = De(() => Promise.resolve().then(() => Cu)), Xr = De(() => Promise.resolve().then(() => Su)), Fr = De(() => Promise.resolve().then(() => Du)), jr = De(() => Promise.resolve().then(() => Nu)), Hr = /* @__PURE__ */ Symbol("VTableContextKey"), Ur = { class: "v-table" }, Gr = {
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
          B("tr", null, [
            (r(!0), f(G, null, fe(e.columns, (b) => (r(), x(a(jr), {
              key: b.prop
            }, {
              default: g(() => [
                j(N(b.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : X("", !0),
        B("tbody", null, [
          (r(!0), f(G, null, fe(e.data, (b, V) => (r(), x(a(Nr), {
            key: `row-${V}`
          }, {
            default: g(() => [
              (r(!0), f(G, null, fe(e.columns, ($) => (r(), x(a(Fr), {
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
      ])) : (r(), x(a(Xr), { key: 1 }, {
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
}, Be = 1e3, Te = 60 * Be, Se = 60 * Te, pt = 24 * Se, eo = Date.now(), to = 1e3;
function Qr(e) {
  const [t, o] = Z(), [n, s] = Z(), l = A(0), i = A(0), u = A(0), m = c(() => e.props.now || eo), v = c(() => e.props.interval || to), h = c(() => 0), b = c(() => 0), V = c(() => Math.floor(l.value / pt)), $ = c(() => Math.floor(l.value % pt / Se)), y = c(() => Math.floor(l.value % Se / Te)), C = c(() => Math.floor(l.value % Te / Be)), T = c(() => Math.floor(l.value % Be)), M = c(() => Math.floor(l.value / Se)), O = c(() => Math.floor(l.value / Te)), P = c(() => Math.floor(l.value / Be));
  function k() {
    t.value || (o(!0), e.props?.autoStart || (l.value = e.props.start, i.value = m.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && le());
  }
  function L() {
    cancelAnimationFrame(u.value), u.value = 0;
  }
  function oe() {
    t.value && (ce(), l.value > 0 && e.onProgress?.({
      days: V.value,
      hours: $.value,
      minutes: y.value,
      seconds: C.value,
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
      let et = function(ve) {
        Ne || (Ne = ve), xe || (xe = ve);
        const tt = ve - Ne;
        tt >= ee || tt + (ve - xe) / 2 >= ee ? oe() : u.value = requestAnimationFrame(et), xe = ve;
      }, Ne, xe;
      u.value = requestAnimationFrame(et);
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
    t.value && (l.value = Math.max(0, i.value - m.value));
  }
  function Le() {
    L(), l.value = e.props.start, i.value = m.value + e.props.start, o(!1), k();
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
    l.value = ee.start, i.value = m.value + ee.start, ee.autoStart && k();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: h,
    months: b,
    days: V,
    hours: $,
    minutes: y,
    seconds: C,
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
      hours: m,
      minutes: v,
      seconds: h,
      milliseconds: b,
      start: V,
      abort: $,
      end: y,
      restart: C
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
      restart: C
    }), (T, M) => (r(), f("div", eu, [
      d(T.$slots, "default", {
        years: a(l),
        months: a(i),
        days: a(u),
        hours: a(m),
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
    return (t, o) => (r(), f("div", nu));
  }
}), lu = {
  install(e) {
    e.component("VCalendar", su);
  }
}, Ic = {
  install(e) {
    e.use(La), e.use(oi), e.use(Ga), e.use(Ya), e.use(ui), e.use(li), e.use(za), e.use(fi), e.use(Sr), e.use(yi), e.use(vi), e.use(Ri), e.use(Si), e.use(Mi), e.use(zi), e.use(Li), e.use(Xi), e.use(ji), e.use(Zi), e.use(er), e.use(or), e.use(ki), e.use(sr), e.use(ar), e.use(fr), e.use(ur), e.use(cr), e.use(_r), e.use(hr), e.use(pr), e.use(Vr), e.use($r), e.use(Br), e.use(Rr), e.use(hi), e.use(Ja), e.use(kr), e.use(Dr), e.use(Pr), e.use(Kr), e.use(Jr), e.use(ou), e.use(lu);
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
    return (n, s) => (r(), x(a(Pe), null, {
      default: g(() => [
        B("div", {
          class: R(["v-confirm", {
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
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, cu)) : (r(), f("div", uu, N(e.message), 1))
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
      }, l = ae(fu, {
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
function mu(e) {
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
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: u } = mu({
      props: o
    });
    return (m, v) => (r(), x(Ee, {
      name: "fade-in-up",
      onAfterLeave: v[3] || (v[3] = (h) => n("close"))
    }, {
      default: g(() => [
        Y(B("div", {
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
          B("div", pu, [
            B("div", vu, N(e.title), 1),
            e.clearable ? (r(), f("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (h) => a(l)(!1))
            }, " X ")) : X("", !0)
          ]),
          B("div", hu, [
            e.useHtml ? (r(), f("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, _u)) : (r(), f("div", bu, N(e.message), 1))
          ])
        ], 34), [
          [ie, a(s)]
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
    const n = ae(gu, {
      ...t,
      appContext: o
    });
    ye(n, this.#e);
  }
}
class wc {
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
  return r(), f("tr", Vu, [
    d(e.$slots, "default")
  ]);
}
const xu = /* @__PURE__ */ w(yu, [["render", $u]]), Cu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: xu
}, Symbol.toStringTag, { value: "Module" })), Ru = {}, Iu = { class: "v-table-empty" };
function Bu(e, t) {
  return r(), f("div", Iu, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = j(" Данных нет ", -1))
    ])
  ]);
}
const Tu = /* @__PURE__ */ w(Ru, [["render", Bu]]), Su = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tu
}, Symbol.toStringTag, { value: "Module" })), wu = {}, Mu = { class: "v-table-body-cell" }, Au = { class: "v-table-body-cell__content" };
function ku(e, t) {
  return r(), f("td", Mu, [
    B("div", Au, [
      d(e.$slots, "default")
    ])
  ]);
}
const Eu = /* @__PURE__ */ w(wu, [["render", ku]]), Du = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eu
}, Symbol.toStringTag, { value: "Module" })), zu = {}, Ou = { class: "v-table-header-cell" };
function Pu(e, t) {
  return r(), f("th", Ou, [
    d(e.$slots, "default")
  ]);
}
const Lu = /* @__PURE__ */ w(zu, [["render", Pu]]), Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
  Fe as Button,
  gc as ButtonGroupPlugin,
  za as ButtonPlugin,
  lu as CalendarPlugin,
  Re as Checkbox,
  cr as CheckboxGroupPlugin,
  ur as CheckboxPlugin,
  cc as ClickOutsidePlugin,
  fi as CollapsePlugin,
  ql as ConfigProvider,
  Sr as ConfigProviderPlugin,
  qt as ConfigProviderRootContextKey,
  Tc as ConfirmPlugin,
  Bc as ConfirmService,
  ou as CountdownPlugin,
  Gu as Direction,
  mt as Divider,
  Dr as DividerPlugin,
  Ri as DrawerPlugin,
  Mc as DrawerService,
  Si as DropdownPlugin,
  Je as Flex,
  qu as FlexAlign,
  Rc as FlexItemPlugin,
  Ku as FlexJustify,
  Pr as FlexPlugin,
  _e as Form,
  ar as FormItemPlugin,
  sr as FormPlugin,
  Qe as Grid,
  we as INPUT_NUMBER_ACTIONS,
  Ls as INPUT_NUMBER_MAX,
  Ps as INPUT_NUMBER_MIN,
  Nt as INPUT_NUMBER_STEP,
  Ze as INPUT_NUMBER_VALUE_DEFAULT,
  Ns as INPUT_NUMBER_WHEEL_DELAY,
  Mi as ImagePlugin,
  vi as InplacePlugin,
  q as Input,
  dt as InputCode,
  pr as InputCodePlugin,
  Jr as InputGroupPlugin,
  jo as InputModes,
  be as InputNativeTypes,
  Ce as InputNumber,
  hr as InputNumberPlugin,
  Js as InputPassword,
  _r as InputPasswordPlugin,
  fr as InputPlugin,
  mc as InputRange,
  fc as InputTags,
  Bt as InputTypes,
  lt as IntersectionPresets,
  ft as Layout,
  ki as LayoutPlugin,
  uc as LoadingPlugin,
  pc as Modal,
  yi as ModalPlugin,
  wc as ModalService,
  hi as OverlayPlugin,
  zi as PaginationPlugin,
  Li as PlaceholderPlugin,
  Yu as Position,
  bc as Primitive,
  kr as ProgressPlugin,
  Ie as Radio,
  $r as RadioGroupPlugin,
  Vr as RadioPlugin,
  Et as Scrollbar,
  Xi as ScrollbarPlugin,
  hc as Section,
  ge as Select,
  Rr as SelectPlugin,
  Uu as Sizes,
  ji as SpinnerPlugin,
  Xe as Switch,
  Br as SwitchPlugin,
  Kr as TablePlugin,
  Zi as TabsPlugin,
  Yt as Tag,
  Cc as TagGroupPlugin,
  er as TagPlugin,
  Ra as Text,
  or as TextPlugin,
  Hu as Themes,
  Sc as ToastService,
  dc as TooltipPlugin,
  Oa as VAccordion,
  Pa as VAccordionItem,
  ti as VAffix,
  Za as VAlert,
  Xa as VAvatar,
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
  wi as VImage,
  pi as VInplace,
  dr as VInput,
  mr as VInputCode,
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
  Fi as VSpinner,
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
  Ke as debounce,
  tc as defineFormRules,
  Zu as delay,
  kc as en,
  at as getProp,
  Ho as isBoolean,
  Wu as isEmpty,
  Uo as isFunction,
  ze as isNull,
  W as isNumber,
  Ye as isObject,
  pe as isString,
  se as isUndefined,
  Qu as omit,
  Ju as pick,
  Tt as renderSlotFragments,
  Ac as ru,
  _c as ruRU,
  qe as throttle,
  po as useAccordionItem,
  mo as useAccordionRoot,
  vo as useAccordionTrigger,
  sc as useAnimatedNumber,
  nc as useClipboard,
  vc as useConfigProviderRootContext,
  yc as useDrawer,
  ic as useEmitProxy,
  Wo as useFormItem,
  Yo as useFormRoot,
  Fo as useIntersectionObserver,
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
