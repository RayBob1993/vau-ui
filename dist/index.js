import { computed as u, toValue as b, inject as U, defineComponent as p, mergeModels as T, useModel as E, provide as j, createElementBlock as m, openBlock as r, normalizeClass as C, renderSlot as d, unref as a, withDirectives as G, createElementVNode as I, vShow as le, ref as M, watch as K, onBeforeUnmount as Xe, markRaw as Qt, onMounted as ae, onScopeDispose as je, isRef as Se, nextTick as eo, useId as He, onUnmounted as Me, withModifiers as to, useSlots as J, useTemplateRef as ne, createCommentVNode as F, normalizeProps as z, guardReactiveProps as O, createTextVNode as X, Fragment as q, renderList as ce, toDisplayString as L, mergeProps as H, toHandlers as te, vModelDynamic as oo, vModelText as mt, vModelCheckbox as ft, vModelRadio as no, createBlock as x, withCtx as V, createVNode as A, withKeys as Qe, resolveDynamicComponent as so, createPropsRestProxy as pt, shallowRef as et, Teleport as vt, Transition as Ae, createSlots as ht, reactive as lo, defineAsyncComponent as Ee, h as De, render as be } from "vue";
import { z as tt } from "zod";
function ao(e) {
  const t = u(() => b(e.props));
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
function io(e) {
  const t = u(() => b(e.props)), o = u(() => b(e.accordionRootContext?.modelValue)), n = u(() => !!b(e.accordionRootContext?.props)?.multiple);
  return {
    isActive: u(() => n.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : o.value === t.value.value)
  };
}
function ro(e) {
  const t = u(() => b(e.accordionItemContext?.props)), o = u(() => !!t.value?.disabled);
  function n() {
    e.accordionRootContext?.setModelValue(t.value?.value);
  }
  return {
    isDisabled: o,
    handleToggle: n
  };
}
const bt = /* @__PURE__ */ Symbol("AccordionRootContextKey"), _t = /* @__PURE__ */ Symbol("AccordionItemContextKey");
function gt() {
  return U(bt, null);
}
function yt() {
  return U(_t, null);
}
function uo() {
  const e = gt(), t = yt();
  return {
    accordionRootContext: e,
    accordionItemContext: t
  };
}
const co = /* @__PURE__ */ p({
  __name: "AccordionRoot",
  props: /* @__PURE__ */ T({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = E(e, "modelValue"), { setModelValue: l } = ao({
      props: () => o,
      modelValue: () => s.value,
      onChange: (i) => n("change", i),
      onChangeModel: (i) => {
        s.value = i;
      }
    });
    return j(bt, {
      props: () => o,
      modelValue: () => s.value,
      setModelValue: l
    }), (i, c) => (r(), m("div", {
      class: C(["accordion", {
        [`accordion--size-${e.size}`]: e.size,
        [`accordion--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(i.$slots, "default")
    ], 2));
  }
}), mo = /* @__PURE__ */ p({
  __name: "AccordionItem",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = gt(), { isActive: n } = io({
      accordionRootContext: o,
      props: () => t
    });
    return j(_t, {
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
}), w = (e, t) => {
  const o = e.__vccOpts || e;
  for (const [n, s] of t)
    o[n] = s;
  return o;
}, fo = {}, po = { class: "accordion-header" };
function vo(e, t) {
  return r(), m("div", po, [
    d(e.$slots, "default")
  ]);
}
const ho = /* @__PURE__ */ w(fo, [["render", vo]]), bo = {
  class: "accordion-body",
  role: "region"
}, _o = { class: "accordion-body__content" }, go = /* @__PURE__ */ p({
  __name: "AccordionBody",
  setup(e) {
    const t = yt(), o = u(() => !!b(t?.isActive));
    return (n, s) => G((r(), m("div", bo, [
      I("div", _o, [
        d(n.$slots, "default")
      ])
    ], 512)), [
      [le, o.value]
    ]);
  }
}), yo = {}, Vo = { class: "accordion-title" };
function $o(e, t) {
  return r(), m("div", Vo, [
    d(e.$slots, "default")
  ]);
}
const xo = /* @__PURE__ */ w(yo, [["render", $o]]), Co = ["disabled"], Ro = /* @__PURE__ */ p({
  __name: "AccordionTrigger",
  setup(e) {
    const { accordionRootContext: t, accordionItemContext: o } = uo(), { isDisabled: n, handleToggle: s } = ro({
      accordionRootContext: t,
      accordionItemContext: o
    });
    return (l, i) => (r(), m("button", {
      type: "button",
      disabled: a(n),
      class: "v-accordion-trigger",
      onClick: i[0] || (i[0] = //@ts-ignore
      (...c) => a(s) && a(s)(...c))
    }, [
      d(l.$slots, "default")
    ], 8, Co));
  }
}), ue = {
  Root: co,
  Item: mo,
  Header: ho,
  Body: go,
  Title: xo,
  Trigger: Ro
};
function Io(e) {
  const t = u(() => b(e.props));
  return {
    isDisabled: u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled || t.value?.loading))
  };
}
const Vt = /* @__PURE__ */ Symbol("FormRootContextKey"), $t = /* @__PURE__ */ Symbol("FormItemContextKey");
function xt() {
  return U(Vt, null);
}
function Ct() {
  return U($t, null);
}
function Q() {
  const e = xt(), t = Ct(), o = u(() => !!t?.validationStatus.value.isSuccess), n = u(() => !!t?.validationStatus.value.isError);
  return {
    formRootContext: e,
    formItemContext: t,
    isValid: o,
    isInvalid: n
  };
}
const To = ["disabled", "type"], Bo = /* @__PURE__ */ p({
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
    const t = e, { formRootContext: o, formItemContext: n } = Q(), { isDisabled: s } = Io({
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
    ], 10, To));
  }
}), wo = {}, So = { class: "button-content" };
function Mo(e, t) {
  return r(), m("span", So, [
    d(e.$slots, "default")
  ]);
}
const Ao = /* @__PURE__ */ w(wo, [["render", Mo]]), Eo = /* @__PURE__ */ p({
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
}), Fe = {
  Root: Bo,
  Content: Ao,
  Group: Eo
};
function Do() {
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
function ko(e) {
  const t = u(() => b(e.formItems)), o = u(() => t.value.filter((l) => l.isValidatable));
  async function n(l = !1) {
    const c = (await Promise.all(o.value.map((f) => f.validate(l)))).every(Boolean);
    return c ? e.onValid?.() : e.onInvalid?.(), c;
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
function Lu(e) {
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
function zo(e, t, o) {
  let n;
  const s = K(e, (c) => {
    i(), c && (n = new IntersectionObserver(t, o), n.observe(c));
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
const Rt = Object.freeze({
  INPUT: "input",
  TEXTAREA: "textarea"
}), Oo = Object.freeze({
  NUMERIC: "numeric",
  TEL: "tel",
  TEXT: "text",
  DECIMAL: "decimal",
  SEARCH: "search",
  EMAIL: "email",
  NONE: "none",
  URL: "url"
}), ve = Object.freeze({
  TEXT: "text",
  EMAIL: "email",
  NUMBER: "number",
  TEL: "tel",
  URL: "url",
  SEARCH: "search",
  PASSWORD: "password"
}), Nu = Object.freeze({
  BASE: "base",
  PRIMARY: "primary",
  SECONDARY: "secondary",
  TERTIARY: "tertiary",
  DANGER: "danger",
  SUCCESS: "success",
  WARNING: "warning"
}), Fu = Object.freeze({
  MINI: "mini",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  BIG: "big",
  HUGE: "huge",
  MASSIVE: "massive"
}), Xu = Object.freeze({
  HORIZONTAL: "horizontal",
  VERTICAL: "vertical"
}), ju = Object.freeze({
  top: "top",
  left: "left",
  right: "right",
  center: "center",
  bottom: "bottom"
}), Hu = Object.freeze({
  START: "start",
  CENTER: "center",
  END: "end",
  BASELINE: "baseline",
  STRETCH: "stretch"
}), Uu = Object.freeze({
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
function Po(e) {
  return typeof e == "boolean";
}
function _e(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function ke(e) {
  return e === null;
}
function Ue(e) {
  return !ke(e) && typeof e == "object" && Object.getPrototypeOf(e) === Object.prototype;
}
function me(e) {
  return typeof e > "u";
}
function Gu(e) {
  return ke(e) || me(e) ? !0 : _e(e) ? e === "" : Array.isArray(e) ? !e.length : e instanceof Map || e instanceof Set ? e.size === 0 : Ue(e) ? e instanceof Date || e instanceof RegExp ? !1 : Object.keys(e).length === 0 : !1;
}
function Lo(e) {
  return Object.prototype.toString.call(e) === "[object Function]";
}
function W(e) {
  return (typeof e == "number" || e instanceof Number) && !isNaN(Number(e));
}
function No(e) {
  return !ke(e) && !me(e) && Ue(e) && !Array.isArray(e);
}
function nt(e, t) {
  if (!e || !t.trim())
    return null;
  const o = t.split(".");
  let n = e;
  for (const s of o) {
    if (!No(n))
      return null;
    n = n[s];
  }
  return n ?? null;
}
function pe(e, t = /* @__PURE__ */ new WeakMap()) {
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
      o.set(pe(s, t), pe(n, t));
    }), o;
  }
  if (e instanceof Set) {
    const o = /* @__PURE__ */ new Set();
    return t.set(e, o), e.forEach((n) => {
      o.add(pe(n, t));
    }), o;
  }
  if (e instanceof ArrayBuffer) {
    const o = e.slice(0);
    return t.set(e, o), o;
  }
  if (Lo(e))
    return e;
  if (Array.isArray(e)) {
    const o = [];
    t.set(e, o);
    for (let n = 0; n < e.length; n++)
      o[n] = pe(e[n], t);
    return o;
  }
  if (Ue(e)) {
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
        value: pe(l.value, t)
      }) : Object.defineProperty(o, s, l));
    }
    return o;
  }
  return e;
}
function Yu(e) {
  return new Promise((t) => setTimeout(t, e));
}
function qu(e, t) {
  const o = {};
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && (o[n] = e[n]);
  return o;
}
function Ku(e, t) {
  const o = { ...e };
  for (const n of t)
    Object.prototype.hasOwnProperty.call(e, n) && delete o[n];
  return o;
}
function Wu(e) {
  return e ? "true" : "false";
}
function Ge(e, t, o = {}) {
  const {
    noTrailing: n = !1,
    noLeading: s = !1,
    debounceMode: l = void 0
  } = o;
  let i = null, c = !1, f = 0, v = null;
  function _() {
    i && (clearTimeout(i), i = null);
  }
  function h(g = {}) {
    const { upcomingOnly: R = !1 } = g;
    _(), c = !R;
  }
  function y() {
    if (f = Date.now(), v) {
      const g = v;
      e.apply(this, g), v = null;
    }
  }
  function $(...g) {
    if (c)
      return;
    const R = Date.now() - f;
    v = g;
    function B() {
      i = null;
    }
    _(), !s && l && !i && y.call(this), me(l) && R > t ? s ? (f = Date.now(), n || (i = setTimeout(l ? B : y.bind(this), t))) : y.call(this) : n || (i = setTimeout(
      l ? B : y.bind(this),
      me(l) ? t - R : t
    ));
  }
  return $.cancel = h, $;
}
function Ye(e, t, o = {}) {
  const { atBegin: n = !1 } = o;
  return Ge(e, t, {
    debounceMode: n
  });
}
function Zu(e) {
  return Qt(e);
}
function Ju(e, t, o = {}) {
  const {
    rootMargin: n = ot.LAZY_IMAGE.rootMargin,
    threshold: s = ot.LAZY_IMAGE.threshold,
    enableNativeLazyLoading: l = !0,
    immediate: i = !1
  } = o, { stop: c } = zo(e, S, {
    rootMargin: n,
    threshold: s
  }), [f, v] = Z(), [_, h] = Z(), y = M(""), $ = M(""), g = M(""), R = _e(t) ? { src: t } : t;
  function B() {
    if (f.value || _.value)
      return;
    const D = new Image();
    D.src = R.src, R.srcset && (D.srcset = R.srcset), R.sizes && (D.sizes = R.sizes), D.onload = () => {
      y.value = R.src, $.value = R.srcset || "", g.value = R.sizes || "", v(!0), h(!1);
    }, D.onerror = () => {
      v(!1), h(!0);
    };
  }
  function S(D) {
    D.forEach((k) => {
      k.isIntersecting && !f.value && !_.value && B();
    });
  }
  return ae(() => {
    if (i || l && "loading" in HTMLImageElement.prototype) {
      B();
      return;
    }
  }), {
    isLoaded: f,
    hasError: _,
    imageSrc: y,
    imageSrcset: $,
    imageSizes: g,
    loadImage: B,
    stop: c
  };
}
function Qu() {
  return {};
}
function ec() {
  if (!window)
    return {
      number: M(0),
      animate: () => {
      }
    };
  const e = M(0);
  function t(o, n, s) {
    let l;
    function i(c) {
      l || (l = c);
      const f = Math.min((c - l) / s, 1);
      e.value = Math.floor(f * (n - o) + o), f < 1 && window.requestAnimationFrame(i);
    }
    window.requestAnimationFrame(i);
  }
  return {
    number: e,
    animate: t
  };
}
function tc() {
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
  return ae(() => {
    o(), window.addEventListener("scroll", o);
  }), je(() => {
    window.removeEventListener("scroll", o);
  }), {
    x: e,
    y: t,
    setScroll: n
  };
}
function oc(e, t) {
  (_e(e) ? document.querySelector(e) : Se(e) ? a(e) : e)?.scrollIntoView({
    behavior: "smooth",
    ...t
  });
}
function nc(e, t) {
  return {
    listeners: t.reduce((n, s) => {
      const l = s, i = String(l);
      return n[l] = ((...c) => e(i, ...c)), n;
    }, {})
  };
}
function Fo(e) {
  const { formItems: t, registerFormItem: o, unregisterFormItem: n } = Do(), { validate: s, clearValidate: l, validatableFormItems: i } = ko({
    formItems: () => t.value,
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), [c, f] = Z(!1), v = M(!1), _ = M("");
  function h() {
    t.value.forEach((g) => g.reset()), l();
  }
  K(i, async (g) => {
    const R = g.map((S) => S.id).sort().join(",");
    if (R === _.value)
      return;
    if (_.value = R, g.length === 0) {
      v.value && f(!0);
      return;
    }
    v.value = !0;
    const B = await s(!0);
    f(B);
  }, {
    immediate: !0
  });
  const y = Ye(async () => {
    const g = await s(!0);
    f(g);
  }, 400);
  async function $(g = !1) {
    const R = await s(g);
    return f(R), R;
  }
  return K(() => b(e.modelValue), () => {
    y();
  }, {
    deep: !0
  }), ae(async () => {
    await eo(), await $(!0);
  }), je(() => {
    y.cancel();
  }), {
    isValid: c,
    validate: $,
    clearValidate: l,
    registerFormItem: o,
    unregisterFormItem: n,
    reset: h
  };
}
function Xo() {
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
function jo(e) {
  const t = u(() => b(e.data)), o = u(() => b(e.schema)), n = M({
    isError: !1,
    isValidating: !1,
    isSuccess: !1
  }), s = M([]);
  function l(f) {
    n.value = { ...n.value, ...f };
  }
  function i() {
    s.value = [];
  }
  async function c(f = !1) {
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
    validate: c
  };
}
function Ho(e) {
  const t = He(), { field: o, registerField: n, unregisterField: s } = Xo(), l = u(() => b(e.props)), i = u(() => l.value.name), c = u(() => e.formRootContext?.modelValue.value), f = u(() => e.formRootContext?.props?.rules), v = u(() => i.value && c.value && nt(c.value, i.value)), _ = u(() => !!(e.formRootContext?.props.disabled || l.value?.disabled)), h = u(() => {
    if (!i.value || !f.value)
      return null;
    const P = nt(f.value, i.value);
    return P instanceof tt.ZodType ? P : null;
  }), y = u(() => !!h.value), $ = u(() => h.value ? !h.value.safeParse(void 0).success : !1), {
    validationStatus: g,
    validationErrors: R,
    clearValidateErrors: B,
    validate: S
  } = jo({
    data: () => i.value ? {
      [i.value]: v.value
    } : null,
    schema: () => !i.value || !h.value ? null : tt.object({
      [i.value]: h.value
    }),
    onValid: () => {
      e.onValid?.();
    },
    onInvalid: () => {
      e.onInvalid?.();
    }
  }), D = u(() => ({
    id: t,
    props: l.value,
    validationStatus: g.value,
    isValidatable: y.value,
    isRequired: $.value,
    registerField: n,
    unregisterField: s,
    reset: k,
    validate: S,
    clearValidateErrors: B
  }));
  function k() {
    !v.value || !l.value.name || (o.value?.reset(), B());
  }
  const N = Ye(() => S(), 300);
  return Me(() => {
    N.cancel(), e.formRootContext?.unregisterFormItem(t);
  }), K(D, (P) => {
    e.formRootContext?.registerFormItem(P);
  }, {
    deep: !0,
    immediate: !0
  }), K(v, () => N()), K(() => g.value.isSuccess, (P) => {
    P && B();
  }), {
    id: t,
    validationErrors: R,
    validationStatus: g,
    isDisabled: _,
    isRequired: $,
    reset: k,
    validate: S,
    clearValidateErrors: B,
    registerField: n,
    unregisterField: s
  };
}
const Uo = /* @__PURE__ */ p({
  __name: "FormRoot",
  props: /* @__PURE__ */ T({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = E(e, "modelValue"), {
      isValid: i,
      registerFormItem: c,
      unregisterFormItem: f,
      validate: v,
      clearValidate: _,
      reset: h
    } = Fo({
      modelValue: () => l.value,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    });
    async function y() {
      const $ = await v();
      s("submit", {
        isValid: $,
        reset: h
      });
    }
    return j(Vt, {
      props: n,
      modelValue: l,
      registerFormItem: c,
      unregisterFormItem: f
    }), t({
      validate: v,
      clearValidate: _,
      reset: h
    }), ($, g) => (r(), m("form", {
      class: C(["form", {
        "form--disabled": e.disabled
      }]),
      onSubmit: to(y, ["prevent"])
    }, [
      d($.$slots, "default", { isValid: a(i) })
    ], 34));
  }
}), Go = {
  key: 0,
  class: "form-item__header"
}, Yo = { class: "form-item__body" }, qo = {
  key: 1,
  class: "form-item__footer"
}, Ko = /* @__PURE__ */ p({
  __name: "FormItem",
  props: {
    disabled: { type: Boolean },
    name: {}
  },
  emits: ["valid", "invalid"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = J(), i = xt(), {
      validationErrors: c,
      validationStatus: f,
      isDisabled: v,
      isRequired: _,
      registerField: h,
      unregisterField: y,
      reset: $,
      validate: g,
      clearValidateErrors: R
    } = Ho({
      formRootContext: i,
      props: () => n,
      onValid: () => {
        s("valid");
      },
      onInvalid: () => {
        s("invalid");
      }
    }), B = ne("root"), S = u(() => ({
      validationStatus: f.value,
      isRequired: _.value,
      errors: c.value
    }));
    return j($t, {
      props: n,
      validationStatus: f,
      validationErrors: c,
      isRequired: _,
      isDisabled: v,
      registerField: h,
      unregisterField: y,
      reset: $,
      validate: g,
      clearValidateErrors: R
    }), t({
      reset: $,
      validate: g,
      clearValidateErrors: R
    }), (D, k) => (r(), m("div", {
      ref_key: "root",
      ref: B,
      class: C(["form-item", [
        {
          "form-item--disabled": a(v),
          "form-item--required": a(_),
          "form-item--invalid": a(f).isError,
          "form-item--validating": a(f).isValidating,
          "form-item--valid": a(f).isSuccess
        }
      ]])
    }, [
      l?.header ? (r(), m("div", Go, [
        d(D.$slots, "header", z(O(S.value)))
      ])) : F("", !0),
      I("div", Yo, [
        d(D.$slots, "default", z(O(S.value)))
      ]),
      l.footer ? (r(), m("div", qo, [
        d(D.$slots, "footer", z(O(S.value)))
      ])) : F("", !0)
    ], 2));
  }
}), Wo = {}, Zo = { class: "form-item-title" };
function Jo(e, t) {
  return r(), m("div", Zo, [
    d(e.$slots, "default")
  ]);
}
const Qo = /* @__PURE__ */ w(Wo, [["render", Jo]]), en = {}, tn = { class: "form-item-required" };
function on(e, t) {
  return r(), m("span", tn, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = X(" * ", -1))
    ])
  ]);
}
const nn = /* @__PURE__ */ w(en, [["render", on]]), sn = { class: "form-item-errors" }, ln = /* @__PURE__ */ p({
  __name: "FormItemErrors",
  setup(e) {
    const t = Ct(), o = u(() => t?.validationErrors.value ?? []);
    return (n, s) => (r(), m("div", sn, [
      (r(!0), m(q, null, ce(o.value, (l, i) => (r(), m("div", {
        key: `error-${i}`,
        class: "form-item-errors__item"
      }, L(l.message), 1))), 128))
    ]));
  }
}), he = {
  Root: Uo,
  Item: Ko,
  ItemTitle: Qo,
  ItemRequired: nn,
  ItemErrors: ln
};
function an() {
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
function de(e, t = !1) {
  return t && Array.isArray(e);
}
function rn(e) {
  const t = u(() => b(e.multiple)), o = u(() => b(e.modelValue)), n = u(() => b(e.options)), s = u(() => n.value.find((i) => i.props.value === o.value)), l = u(() => {
    if (!de(o.value, t.value))
      return [];
    const i = new Set(o.value);
    return n.value.filter((c) => i.has(c.props.value));
  });
  return {
    activeOption: s,
    activeOptions: l
  };
}
function un(e) {
  const t = u(() => b(e.modelValue)), o = u(() => b(e.props)), { options: n, registerOption: s, unregisterOption: l } = an(), { activeOption: i, activeOptions: c } = rn({
    multiple: () => !!o.value.multiple,
    options: () => n.value,
    modelValue: () => t.value
  }), [f, v, _] = Z(), h = u(() => de(t.value, o.value.multiple) ? t.value.length > 0 : !!t.value), y = u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || o.value?.disabled));
  function $(B) {
    if (!y.value) {
      if (de(t.value, o.value.multiple)) {
        const S = /* @__PURE__ */ new Set([...t.value]);
        S.has(B) ? S.delete(B) : S.add(B), e.onChangeModel?.([...S]), e.onChange?.([...S]);
        return;
      }
      e.onChangeModel?.(B), e.onChange?.(B), v(!1);
    }
  }
  function g() {
    if (de(t.value, o.value.multiple)) {
      e.onChangeModel?.([]), e.onChange?.([]);
      return;
    }
    e.onChangeModel?.(void 0), e.onChange?.(void 0), e.onClear?.();
  }
  function R() {
    y.value || _();
  }
  return ae(() => {
    e.formItemContext?.registerField({
      reset: g
    });
  }), Me(() => {
    e.formItemContext?.unregisterField();
  }), {
    activeOption: i,
    activeOptions: c,
    hasValue: h,
    isOpen: f,
    isDisabled: y,
    toggle: R,
    registerOption: s,
    unregisterOption: l,
    setModelValue: $,
    reset: g
  };
}
function cn(e) {
  const t = He(), o = u(() => b(e.selectRootContext?.modelValue)), n = u(() => b(e.props)), s = u(() => !!b(e.selectRootContext?.props)?.multiple), l = u(() => de(o.value, s.value) ? o.value.includes(n.value.value) : o.value === n.value.value), i = u(() => !!(b(e.selectRootContext?.isDisabled) || n.value?.disabled)), c = u(() => ({
    id: t,
    props: n.value
  }));
  function f(v) {
    e.selectRootContext?.setModelValue(v);
  }
  return K(c, (v) => {
    e.selectRootContext?.registerOption(v);
  }, {
    deep: !0,
    immediate: !0
  }), Me(() => {
    e.selectRootContext?.unregisterOption(t);
  }), {
    isActive: l,
    isDisabled: i,
    handleChange: f
  };
}
function dn(e) {
  const t = u(() => b(e.selectRootContext?.props)), o = u(() => b(e.selectRootContext?.activeOption)), n = u(() => b(e.selectRootContext?.activeOptions) ?? []), s = u(() => !!b(e.selectRootContext?.hasValue)), l = u(() => de(b(e.selectRootContext?.modelValue), !!t.value?.multiple)), i = u(() => t.value?.placeholder);
  return {
    activeOption: o,
    activeOptions: n,
    hasValue: s,
    isMultiple: l,
    placeholder: i
  };
}
const It = /* @__PURE__ */ Symbol("SelectRootContextKey");
function ze() {
  return U(It, null);
}
const mn = /* @__PURE__ */ p({
  __name: "SelectRoot",
  props: /* @__PURE__ */ T({
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
  emits: /* @__PURE__ */ T(["change", "opened", "closed", "open", "close", "clear"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = E(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: c, isInvalid: f } = Q(), {
      activeOption: v,
      activeOptions: _,
      hasValue: h,
      isOpen: y,
      isDisabled: $,
      toggle: g,
      registerOption: R,
      unregisterOption: B,
      setModelValue: S
    } = un({
      formRootContext: l,
      formItemContext: i,
      modelValue: () => s.value,
      props: () => o,
      onChangeModel: (D) => {
        s.value = D;
      },
      onChange: (D) => {
        n("change", D);
      },
      onClear: () => {
        n("clear");
      }
    });
    return j(It, {
      activeOption: () => v.value,
      activeOptions: () => _.value,
      modelValue: () => s.value,
      props: () => o,
      hasValue: () => h.value,
      isOpen: () => y.value,
      isDisabled: () => $.value,
      toggle: g,
      registerOption: R,
      unregisterOption: B,
      setModelValue: S
    }), (D, k) => (r(), m("div", {
      class: C(["select", {
        "select--disabled": a($),
        "select--open": a(y),
        "select--filled": a(h),
        "select--invalid": a(f),
        "select--valid": a(c)
      }])
    }, [
      d(D.$slots, "default")
    ], 2));
  }
}), fn = /* @__PURE__ */ p({
  __name: "SelectOption",
  props: {
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = e, o = ze(), { isActive: n, isDisabled: s, handleChange: l } = cn({
      selectRootContext: o,
      props: () => t
    });
    return (i, c) => (r(), m("div", {
      class: C(["select-option", {
        "select-option--active": a(n),
        "select-option--disabled": a(s)
      }]),
      onClick: c[0] || (c[0] = (f) => a(l)(e.value))
    }, [
      d(i.$slots, "default", {
        isActive: a(n),
        isDisabled: a(s)
      })
    ], 2));
  }
}), pn = /* @__PURE__ */ p({
  __name: "SelectTrigger",
  setup(e) {
    const t = ze();
    function o() {
      t?.toggle();
    }
    return (n, s) => (r(), m("button", {
      type: "button",
      class: "select-trigger",
      onClick: o
    }, [
      d(n.$slots, "default")
    ]));
  }
}), vn = { class: "select-dropdown" }, hn = /* @__PURE__ */ p({
  __name: "SelectDropdown",
  setup(e) {
    const t = ze(), o = u(() => !!b(t?.isOpen));
    return (n, s) => G((r(), m("div", vn, [
      d(n.$slots, "default")
    ], 512)), [
      [le, o.value]
    ]);
  }
}), bn = { class: "select-value" }, _n = /* @__PURE__ */ p({
  __name: "SelectValue",
  setup(e) {
    const t = ze(), { activeOption: o, activeOptions: n, hasValue: s, isMultiple: l, placeholder: i } = dn({
      selectRootContext: t
    });
    return (c, f) => (r(), m("div", bn, [
      d(c.$slots, "default", {}, () => [
        a(s) ? (r(), m(q, { key: 0 }, [
          a(l) ? (r(!0), m(q, { key: 0 }, ce(a(n), (v) => (r(), m(q, null, [
            X(L(v.props.value), 1)
          ], 64))), 256)) : (r(), m(q, { key: 1 }, [
            X(L(a(o)?.props.value), 1)
          ], 64))
        ], 64)) : (r(), m(q, { key: 1 }, [
          X(L(a(i)), 1)
        ], 64))
      ])
    ]));
  }
}), sc = {
  Root: mn,
  Option: fn,
  Trigger: pn,
  Dropdown: hn,
  Value: _n
};
function gn(e) {
  const t = u(() => b(e.inputRootContext?.props));
  return {
    props: u(() => ({
      disabled: !!b(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      rows: t.value?.rows,
      cols: t.value?.cols,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function yn(e) {
  const t = u(() => b(e.inputRootContext?.props));
  return {
    props: u(() => ({
      disabled: !!b(e.inputRootContext?.isDisabled),
      placeholder: t.value?.placeholder,
      nativeType: t.value?.nativeType,
      inputMode: t.value?.inputMode,
      readonly: t.value?.readonly,
      autocomplete: t.value?.autocomplete
    }))
  };
}
function Vn(e) {
  const [t, o] = Z(), n = u(() => b(e.props)), s = u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || n.value?.loading || n.value?.disabled)), l = u(() => n.value.type === Rt.TEXTAREA), i = u(() => !!b(e.modelValue)?.trim());
  function c(v) {
    e.onUpdateModelValue?.(v);
  }
  function f() {
    c("");
  }
  return {
    isFocus: t,
    isDisabled: s,
    isTextarea: l,
    hasValue: i,
    setFocus: o,
    setModelValue: c,
    reset: f
  };
}
function Tt(e) {
  return {
    modelValue: u({
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
function $n(e) {
  const t = u(() => b(e.inputRootContext?.props)), o = u(() => !!t.value?.clearable);
  function n() {
    e.inputRootContext?.reset();
  }
  return {
    isClearable: o,
    handleClear: n
  };
}
const Bt = /* @__PURE__ */ Symbol("InputRootContextKey");
function qe() {
  return U(Bt, null);
}
const xn = /* @__PURE__ */ p({
  __name: "InputRoot",
  props: /* @__PURE__ */ T({
    type: { default: Rt.INPUT },
    clearable: { type: Boolean },
    loading: { type: Boolean },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    nativeType: { default: ve.TEXT },
    inputMode: { default: Oo.TEXT },
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
  emits: /* @__PURE__ */ T(["click", "dblclick", "mousedown", "mouseup", "mouseenter", "mouseleave", "mousemove", "mouseover", "mouseout", "contextmenu", "focusin", "focusout", "change", "blur", "focus", "keyup", "keydown", "keypress", "paste", "copy", "cut"], ["update:modelValue"]),
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, l = E(e, "modelValue"), { formRootContext: i, formItemContext: c, isValid: f, isInvalid: v } = Q(), { isDisabled: _, isTextarea: h, hasValue: y, isFocus: $, setFocus: g, setModelValue: R, reset: B } = Vn({
      formRootContext: i,
      formItemContext: c,
      modelValue: () => l.value,
      props: () => n,
      onUpdateModelValue: (S) => {
        l.value = S;
      }
    });
    return j(Bt, {
      isDisabled: () => _.value,
      props: () => n,
      modelValue: () => l.value,
      setFocus: g,
      setModelValue: R,
      reset: B,
      emit: s
    }), t({
      setFocus: g
    }), (S, D) => (r(), m("div", {
      class: C(["input", {
        "input--focus": a($),
        "input--textarea": a(h),
        "input--filled": a(y),
        "input--disabled": a(_),
        "input--loading": e.loading,
        "input--invalid": a(v),
        "input--valid": a(f)
      }])
    }, [
      d(S.$slots, "default", {
        isTextarea: a(h),
        isFocus: a($),
        hasValue: a(y),
        loading: !!e.loading,
        isInvalid: a(v),
        isValid: a(f)
      })
    ], 2));
  }
}), Cn = {}, Rn = { class: "input-before" };
function In(e, t) {
  return r(), m("div", Rn, [
    d(e.$slots, "default")
  ]);
}
const Tn = /* @__PURE__ */ w(Cn, [["render", In]]), Bn = { class: "input-after" }, wn = /* @__PURE__ */ p({
  __name: "InputAfter",
  setup(e) {
    const t = qe(), { isClearable: o, handleClear: n } = $n({
      inputRootContext: t
    });
    return (s, l) => (r(), m("div", Bn, [
      d(s.$slots, "default"),
      a(o) ? (r(), m("button", {
        key: 0,
        type: "button",
        onClick: l[0] || (l[0] = //@ts-ignore
        (...i) => a(n) && a(n)(...i))
      }, " × ")) : F("", !0)
    ]));
  }
}), Sn = ["type", "inputmode", "readonly", "disabled", "autocomplete", "placeholder"], Mn = /* @__PURE__ */ p({
  __name: "InputNative",
  setup(e) {
    const t = qe(), { modelValue: o, listeners: n } = Tt({
      inputRootContext: t
    }), { props: s } = yn({
      inputRootContext: t
    });
    return (l, i) => G((r(), m("input", H({
      "onUpdate:modelValue": i[0] || (i[0] = (c) => Se(o) ? o.value = c : null),
      type: a(s).nativeType,
      inputmode: a(s).inputMode,
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      placeholder: a(s).placeholder,
      class: "input-native"
    }, te(a(n), !0)), null, 16, Sn)), [
      [oo, a(o)]
    ]);
  }
}), An = ["readonly", "disabled", "autocomplete", "rows", "cols", "placeholder"], En = /* @__PURE__ */ p({
  __name: "InputTextarea",
  setup(e) {
    const t = qe(), { modelValue: o, listeners: n } = Tt({
      inputRootContext: t
    }), { props: s } = gn({
      inputRootContext: t
    });
    return (l, i) => G((r(), m("textarea", H({
      "onUpdate:modelValue": i[0] || (i[0] = (c) => Se(o) ? o.value = c : null),
      readonly: a(s).readonly,
      disabled: a(s).disabled,
      autocomplete: a(s).autocomplete,
      rows: a(s).rows,
      cols: a(s).cols,
      placeholder: a(s).placeholder,
      class: "input-textarea"
    }, te(a(n), !0)), null, 16, An)), [
      [mt, a(o)]
    ]);
  }
}), Dn = {}, kn = { class: "input-control" };
function zn(e, t) {
  return r(), m("div", kn, [
    d(e.$slots, "default")
  ]);
}
const On = /* @__PURE__ */ w(Dn, [["render", zn]]), Pn = {}, Ln = { class: "input-group" };
function Nn(e, t) {
  return r(), m("div", Ln, [
    d(e.$slots, "default")
  ]);
}
const Fn = /* @__PURE__ */ w(Pn, [["render", Nn]]), Xn = {}, jn = { class: "input-group-addon" };
function Hn(e, t) {
  return r(), m("div", jn, [
    d(e.$slots, "default")
  ]);
}
const Un = /* @__PURE__ */ w(Xn, [["render", Hn]]), Y = {
  Root: xn,
  Before: Tn,
  After: wn,
  Native: Mn,
  Textarea: En,
  Control: On,
  Group: Fn,
  GroupAddon: Un
}, wt = /* @__PURE__ */ Symbol("CheckboxRootContextKey");
function Gn() {
  return U(wt, null);
}
function Yn(e) {
  const t = u(() => b(e.props)), o = u(() => b(e.modelValue)), n = u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled)), s = u(() => Po(o.value) ? o.value : t.value.value && Array.isArray(o.value) ? o.value.includes(t.value.value) : !1), l = u(() => !!(s.value || t.value?.checked)), i = u(() => !!t.value?.indeterminate);
  return {
    isActive: s,
    isDisabled: n,
    isChecked: l,
    isIndeterminate: i
  };
}
function qn(e) {
  const t = u(() => !!b(e.checkboxRootContext?.isDisabled)), o = u(() => !!b(e.checkboxRootContext?.isActive)), n = u(() => !!b(e.checkboxRootContext?.isIndeterminate)), s = u(() => !!b(e.checkboxRootContext?.isValid)), l = u(() => !!b(e.checkboxRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isIndeterminate: n,
    isValid: s,
    isInvalid: l
  };
}
const Kn = ["value", "disabled", "checked"], Wn = /* @__PURE__ */ p({
  __name: "CheckboxRoot",
  props: /* @__PURE__ */ T({
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
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = E(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: c, isInvalid: f } = Q(), { isChecked: v, isDisabled: _, isIndeterminate: h } = Yn({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    }), y = ne("inputRef");
    return K([y, h], ([$, g]) => {
      $ && ($.indeterminate = !!g);
    }, {
      immediate: !0
    }), j(wt, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => _.value,
      isIndeterminate: () => h.value,
      isValid: () => c.value,
      isInvalid: () => f.value
    }), ($, g) => (r(), m("label", {
      class: C(["checkbox", {
        "checkbox--disabled": a(_),
        "checkbox--active": a(v),
        "checkbox--indeterminate": a(h),
        "checkbox--invalid": a(f),
        "checkbox--valid": a(c)
      }])
    }, [
      G(I("input", H({
        ref_key: "inputRef",
        ref: y,
        "onUpdate:modelValue": g[0] || (g[0] = (R) => s.value = R),
        value: e.value,
        type: "checkbox",
        disabled: a(_),
        checked: a(v),
        class: "checkbox__input"
      }, te(n, !0)), null, 16, Kn), [
        [ft, s.value]
      ]),
      d($.$slots, "default")
    ], 2));
  }
}), Zn = /* @__PURE__ */ p({
  __name: "CheckboxIndicator",
  setup(e) {
    const t = Gn(), { isDisabled: o, isActive: n, isIndeterminate: s, isValid: l, isInvalid: i } = qn({
      checkboxRootContext: t
    });
    return (c, f) => (r(), m("span", {
      class: C(["checkbox-indicator", {
        "checkbox-indicator--disabled": a(o),
        "checkbox-indicator--active": a(n),
        "checkbox-indicator--indeterminate": a(s),
        "checkbox-indicator--valid": a(l),
        "checkbox-indicator--invalid": a(i)
      }])
    }, [
      d(c.$slots, "default", {
        isDisabled: a(o),
        isActive: a(n),
        isIndeterminate: a(s),
        isValid: a(l),
        isInvalid: a(i)
      }, () => [
        X(L(a(n) ? "☑" : "□"), 1)
      ])
    ], 2));
  }
}), Jn = {}, Qn = { class: "checkbox-title" };
function es(e, t) {
  return r(), m("span", Qn, [
    d(e.$slots, "default")
  ]);
}
const ts = /* @__PURE__ */ w(Jn, [["render", es]]), os = /* @__PURE__ */ p({
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
}), xe = {
  Root: Wn,
  Indicator: Zn,
  Title: ts,
  Group: os
};
function ns(e) {
  const t = u(() => b(e.props)), o = u(() => b(e.modelValue)), n = u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: u(() => o.value === t.value.value),
    isDisabled: n
  };
}
function ss(e) {
  const t = u(() => !!b(e.radioRootContext?.isDisabled)), o = u(() => !!b(e.radioRootContext?.isActive)), n = u(() => !!b(e.radioRootContext?.isValid)), s = u(() => !!b(e.radioRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const St = /* @__PURE__ */ Symbol("RadioRootContextKey");
function ls() {
  return U(St, null);
}
const as = ["value", "disabled"], is = /* @__PURE__ */ p({
  __name: "RadioRoot",
  props: /* @__PURE__ */ T({
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
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = E(e, "modelValue"), { formRootContext: l, formItemContext: i, isValid: c, isInvalid: f } = Q(), { isActive: v, isDisabled: _ } = ns({
      formRootContext: l,
      formItemContext: i,
      props: () => o,
      modelValue: () => s.value
    });
    return j(St, {
      props: () => o,
      modelValue: () => s.value,
      isActive: () => v.value,
      isDisabled: () => _.value,
      isValid: () => c.value,
      isInvalid: () => f.value
    }), (h, y) => (r(), m("label", {
      class: C(["radio", {
        "radio--disabled": a(_),
        "radio--active": a(v),
        "radio--invalid": a(f),
        "radio--valid": a(c)
      }])
    }, [
      G(I("input", H({
        "onUpdate:modelValue": y[0] || (y[0] = ($) => s.value = $),
        value: e.value,
        type: "radio",
        disabled: a(_),
        class: "radio__input"
      }, te(n, !0)), null, 16, as), [
        [no, s.value]
      ]),
      d(h.$slots, "default")
    ], 2));
  }
}), rs = /* @__PURE__ */ p({
  __name: "RadioIndicator",
  setup(e) {
    const t = ls(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = ss({
      radioRootContext: t
    });
    return (i, c) => (r(), m("span", {
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
        X(L(a(n) ? "◉" : "⭘"), 1)
      ])
    ], 2));
  }
}), us = {}, cs = { class: "radio-title" };
function ds(e, t) {
  return r(), m("span", cs, [
    d(e.$slots, "default")
  ]);
}
const ms = /* @__PURE__ */ w(us, [["render", ds]]), fs = /* @__PURE__ */ p({
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
}), Ce = {
  Root: is,
  Indicator: rs,
  Title: ms,
  Group: fs
};
function ps(e) {
  const t = u(() => b(e.props)), o = u(() => b(e.modelValue)), n = u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled));
  return {
    isActive: o,
    isDisabled: n
  };
}
function vs(e) {
  const t = u(() => !!b(e.switchRootContext?.isDisabled)), o = u(() => !!b(e.switchRootContext?.isActive)), n = u(() => !!b(e.switchRootContext?.isValid)), s = u(() => !!b(e.switchRootContext?.isInvalid));
  return {
    isDisabled: t,
    isActive: o,
    isValid: n,
    isInvalid: s
  };
}
const Mt = /* @__PURE__ */ Symbol("SwitchRootContextKey");
function hs() {
  return U(Mt, null);
}
const bs = { class: "switch" }, _s = ["disabled"], gs = /* @__PURE__ */ p({
  __name: "SwitchRoot",
  props: /* @__PURE__ */ T({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = E(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), { isDisabled: c, isActive: f } = ps({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value
    });
    return j(Mt, {
      props: () => t,
      isActive: () => f.value,
      isDisabled: () => c.value,
      isValid: () => l.value,
      isInvalid: () => i.value
    }), (v, _) => (r(), m("label", bs, [
      G(I("input", {
        "onUpdate:modelValue": _[0] || (_[0] = (h) => o.value = h),
        type: "checkbox",
        disabled: a(c),
        class: "switch__input"
      }, null, 8, _s), [
        [ft, o.value]
      ]),
      d(v.$slots, "default")
    ]));
  }
}), ys = /* @__PURE__ */ p({
  __name: "SwitchIndicator",
  setup(e) {
    const t = hs(), { isDisabled: o, isActive: n, isValid: s, isInvalid: l } = vs({
      switchRootContext: t
    });
    return (i, c) => (r(), m("span", {
      class: C(["switch-indicator", {
        "switch-indicator--disabled": a(o),
        "switch-indicator--active": a(n),
        "switch-indicator--valid": a(s),
        "switch-indicator--invalid": a(l)
      }])
    }, null, 2));
  }
}), Vs = {}, $s = { class: "switch-title" };
function xs(e, t) {
  return r(), m("span", $s, [
    d(e.$slots, "default")
  ]);
}
const Cs = /* @__PURE__ */ w(Vs, [["render", xs]]), Ne = {
  Root: gs,
  Indicator: ys,
  Title: Cs
}, At = 1, Rs = -1 / 0, Is = 1 / 0, Ts = 100, Ke = 0, Be = Object.freeze({
  DECREMENT: "decrement",
  INCREMENT: "increment"
});
function Bs(e) {
  const t = u(() => b(e.props)), o = u(() => b(e.modelValue)), n = u(() => t.value.step || At), s = u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value.disabled)), l = u(() => s.value || W(t.value.min) && o.value === t.value.min), i = u(() => s.value || W(t.value.max) && !(o.value < t.value.max));
  function c() {
    if (t.value.readonly)
      return;
    const _ = o.value - n.value;
    (!W(t.value.min) || _ >= t.value.min) && e.onDecrement?.(_);
  }
  function f() {
    if (t.value.readonly)
      return;
    const _ = o.value + n.value;
    (!W(t.value.max) || _ <= t.value.max) && e.onIncrement?.(_);
  }
  function v(_) {
    e.onUpdateModelValue?.(_);
  }
  return {
    step: n,
    isDisabled: s,
    isDecrementDisabled: l,
    isIncrementDisabled: i,
    handleDecrement: c,
    handleIncrement: f,
    setModelValue: v
  };
}
function ws(e) {
  const t = u(() => b(e.mousewheel)), o = u(() => W(t.value) && t.value > 0 ? t.value : Ts);
  return {
    handleWheel: Ge((s) => {
      t.value && (s.preventDefault(), s.stopImmediatePropagation(), s.deltaY < 0 ? e.onIncrement() : e.onDecrement());
    }, o.value)
  };
}
function Ss(e) {
  const t = u(() => b(e.inputNumberRootContext?.props)), o = u({
    get: () => b(e.inputNumberRootContext?.modelValue) ?? Ke,
    set(s) {
      e.inputNumberRootContext && e.inputNumberRootContext.setModelValue(s);
    }
  });
  return {
    props: u(() => ({
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
function Ms(e) {
  const t = u(() => b(e.props)), o = u(() => t.value.action === Be.DECREMENT), n = u(() => t.value.action === Be.INCREMENT), s = u(() => o.value ? !!b(e.inputNumberRootContext?.isDecrementDisabled) : !!b(e.inputNumberRootContext?.isIncrementDisabled));
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
const Et = /* @__PURE__ */ Symbol("InputNumberRootContextKey");
function Dt() {
  return U(Et, null);
}
const As = /* @__PURE__ */ p({
  __name: "InputNumberRoot",
  props: /* @__PURE__ */ T({
    mousewheel: { type: [Boolean, Number] },
    min: { default: Rs },
    max: { default: Is },
    step: { default: At },
    placeholder: {},
    disabled: { type: Boolean },
    readonly: { type: Boolean },
    autocomplete: {},
    direction: {},
    theme: {},
    size: {}
  }, {
    modelValue: {
      default: Ke
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = E(e, "modelValue"), { formRootContext: n, formItemContext: s, isValid: l, isInvalid: i } = Q(), {
      step: c,
      isDisabled: f,
      isDecrementDisabled: v,
      isIncrementDisabled: _,
      handleDecrement: h,
      handleIncrement: y,
      setModelValue: $
    } = Bs({
      formRootContext: n,
      formItemContext: s,
      props: () => t,
      modelValue: () => o.value,
      onUpdateModelValue: (g) => {
        o.value = g;
      },
      onDecrement: (g) => {
        o.value = g;
      },
      onIncrement: (g) => {
        o.value = g;
      }
    });
    return j(Et, {
      props: () => t,
      isDisabled: () => f.value,
      modelValue: () => o.value,
      step: () => c.value,
      isDecrementDisabled: () => v.value,
      isIncrementDisabled: () => _.value,
      handleDecrement: h,
      handleIncrement: y,
      setModelValue: $
    }), (g, R) => (r(), m("div", {
      class: C(["input-number", {
        [`input-number--direction-${e.direction}`]: e.direction,
        "input-number--invalid": a(i),
        "input-number--valid": a(l)
      }])
    }, [
      d(g.$slots, "default")
    ], 2));
  }
}), Es = { class: "input-number-input" }, Ds = /* @__PURE__ */ p({
  __name: "InputNumberInput",
  setup(e) {
    const t = Dt(), { props: o, modelValue: n } = Ss({
      inputNumberRootContext: t
    }), { handleWheel: s } = ws({
      mousewheel: () => b(t?.props)?.mousewheel,
      onDecrement: () => {
        t?.handleDecrement();
      },
      onIncrement: () => {
        t?.handleIncrement();
      }
    });
    return (l, i) => (r(), m("div", Es, [
      G(I("input", H({
        "onUpdate:modelValue": i[0] || (i[0] = (c) => Se(n) ? n.value = c : null),
        type: "number",
        class: "input-number-input__native"
      }, a(o), {
        onWheel: i[1] || (i[1] = //@ts-ignore
        (...c) => a(s) && a(s)(...c))
      }), null, 16), [
        [
          mt,
          a(n),
          void 0,
          { number: !0 }
        ]
      ])
    ]));
  }
}), ks = ["disabled"], zs = /* @__PURE__ */ p({
  __name: "InputNumberButton",
  props: {
    action: {}
  },
  setup(e) {
    const t = e, o = Dt(), { handleAction: n, isDisabled: s, isDecrement: l, isIncrement: i } = Ms({
      inputNumberRootContext: o,
      props: () => t
    });
    return (c, f) => (r(), m("button", {
      class: C(["input-number-button", {
        [`input-number-button--${e.action}`]: e.action
      }]),
      disabled: a(s),
      type: "button",
      onClick: f[0] || (f[0] = //@ts-ignore
      (...v) => a(n) && a(n)(...v))
    }, [
      d(c.$slots, "default", {}, () => [
        a(l) ? (r(), m(q, { key: 0 }, [
          X(" - ")
        ], 64)) : a(i) ? (r(), m(q, { key: 1 }, [
          X(" + ")
        ], 64)) : F("", !0)
      ])
    ], 10, ks));
  }
}), $e = {
  Root: As,
  Input: Ds,
  Button: zs
};
function Os() {
  const e = M(ve.PASSWORD);
  function t() {
    e.value === ve.PASSWORD ? e.value = ve.TEXT : e.value = ve.PASSWORD;
  }
  return {
    currentType: e,
    handleToggleType: t
  };
}
const Ps = /* @__PURE__ */ p({
  __name: "InputPasswordRoot",
  props: /* @__PURE__ */ T({
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
    const t = e, o = J(), n = E(e, "modelValue"), { currentType: s, handleToggleType: l } = Os();
    return (i, c) => (r(), x(a(Y).Root, H(t, {
      modelValue: n.value,
      "onUpdate:modelValue": c[1] || (c[1] = (f) => n.value = f),
      "native-type": a(s)
    }), {
      default: V((f) => [
        o?.before ? (r(), x(a(Y).Before, { key: 0 }, {
          default: V(() => [
            d(i.$slots, "before", z(O(f)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        A(a(Y).Control, null, {
          default: V(() => [
            A(a(Y).Native)
          ]),
          _: 1
        }),
        A(a(Y).After, null, {
          default: V(() => [
            d(i.$slots, "after", z(O(f)), () => [
              I("button", {
                type: "button",
                onClick: c[0] || (c[0] = //@ts-ignore
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
}), Ls = {
  Root: Ps
};
function Ns(e) {
  const t = u(() => b(e.props));
  return {
    isDisabled: u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Fs(e) {
  return {
    isDisabled: u(() => {
      const o = e.inputCodeRootContext;
      return o ? !!b(o.isDisabled) : !1;
    })
  };
}
const kt = /* @__PURE__ */ Symbol("InputCodeRootContextKey");
function Xs() {
  return U(kt, null);
}
const js = /* @__PURE__ */ p({
  __name: "InputCodeRoot",
  props: /* @__PURE__ */ T({
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
    E(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = Ns({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return j(kt, {
      props: () => t,
      isDisabled: () => i.value
    }), (c, f) => (r(), m("div", {
      class: C(["input-code", {
        "input-code--disabled": a(i),
        "input-code--invalid": a(l),
        "input-code--valid": a(s)
      }])
    }, [
      d(c.$slots, "default")
    ], 2));
  }
}), Hs = ["disabled", "aria-disabled"], Us = /* @__PURE__ */ p({
  __name: "InputCodePin",
  setup(e) {
    const t = Xs(), { isDisabled: o } = Fs({
      inputCodeRootContext: t
    });
    return (n, s) => (r(), m("input", {
      type: "text",
      disabled: a(o),
      "aria-disabled": a(o),
      class: "input-code-pin"
    }, null, 8, Hs));
  }
}), st = {
  Root: js,
  Pin: Us
}, zt = /* @__PURE__ */ Symbol("InputTagsRootContextKey");
function Ot() {
  return U(zt, null);
}
function Gs(e) {
  const t = u(() => b(e.props));
  return {
    isDisabled: u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function Ys(e) {
  function t(n) {
  }
  function o(n) {
  }
  return {
    handleEnter: t,
    handleTab: o
  };
}
const qs = /* @__PURE__ */ p({
  __name: "InputTagsRoot",
  props: /* @__PURE__ */ T({
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
  emits: /* @__PURE__ */ T(["addTag", "removeTag"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = E(e, "modelValue"), { formRootContext: s, formItemContext: l, isValid: i, isInvalid: c } = Q(), { isDisabled: f } = Gs({
      formRootContext: s,
      formItemContext: l,
      props: () => o
    });
    return j(zt, {
      props: () => o,
      modelValue: () => n.value,
      isDisabled: () => f.value
    }), (v, _) => (r(), m("div", {
      class: C(["input-tags", {
        "input-tags--disabled": a(f),
        "input-tags--invalid": a(c),
        "input-tags--valid": a(i)
      }])
    }, [
      d(v.$slots, "default")
    ], 2));
  }
}), Ks = { class: "input-tags-input" }, Ws = /* @__PURE__ */ p({
  __name: "InputTagsInput",
  setup(e) {
    Ot();
    const { handleEnter: t, handleTab: o } = Ys();
    return (n, s) => (r(), m("div", Ks, [
      I("input", {
        type: "text",
        onKeydown: [
          s[0] || (s[0] = Qe(
            //@ts-ignore
            (...l) => a(t) && a(t)(...l),
            ["enter"]
          )),
          s[1] || (s[1] = Qe(
            //@ts-ignore
            (...l) => a(o) && a(o)(...l),
            ["tab"]
          ))
        ]
      }, null, 32)
    ]));
  }
}), Zs = { class: "input-tags-tags" }, Js = /* @__PURE__ */ p({
  __name: "InputTagsTags",
  setup(e) {
    return Ot(), (t, o) => (r(), m("div", Zs));
  }
}), lc = {
  Root: qs,
  Input: Ws,
  Tags: Js
};
function Qs(e) {
  const t = u(() => b(e.props));
  return {
    isDisabled: u(() => !!(e.formRootContext?.props.disabled || e.formItemContext?.props.disabled || t.value?.disabled))
  };
}
function el(e) {
  return {
    isDisabled: u(() => !!b(e.inputRangeRootContext?.isDisabled))
  };
}
const Pt = /* @__PURE__ */ Symbol("InputRangeRootContextKey");
function tl() {
  return U(Pt, null);
}
const ol = /* @__PURE__ */ p({
  __name: "InputRangeRoot",
  props: /* @__PURE__ */ T({
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
    E(e, "modelValue");
    const { formRootContext: o, formItemContext: n, isValid: s, isInvalid: l } = Q(), { isDisabled: i } = Qs({
      formRootContext: o,
      formItemContext: n,
      props: () => t
    });
    return j(Pt, {
      props: () => t,
      isDisabled: () => i.value
    }), (c, f) => (r(), m("div", {
      class: C(["input-range", {
        "input-range--disabled": a(i),
        "input-range--invalid": a(l),
        "input-range--valid": a(s)
      }])
    }, [
      d(c.$slots, "default")
    ], 2));
  }
}), nl = ["aria-disabled"], sl = /* @__PURE__ */ p({
  __name: "InputRangeSlider",
  setup(e) {
    const t = tl(), { isDisabled: o } = el({
      inputRangeRootContext: t
    });
    return (n, s) => (r(), m("div", {
      class: "input-range-slider",
      "aria-disabled": a(o)
    }, null, 8, nl));
  }
}), ac = {
  Root: ol,
  Slider: sl
}, ll = /* @__PURE__ */ Symbol("ModalRootContextKey");
function al(e) {
  function t() {
    e.onClose?.();
  }
  return {
    close: t
  };
}
const il = { class: "modal" }, rl = /* @__PURE__ */ p({
  __name: "ModalRoot",
  props: /* @__PURE__ */ T({
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = E(e, "modelValue"), { close: s } = al({
      modelValue: () => n.value,
      props: () => o,
      onClose: () => {
        n.value = !1;
      }
    });
    return j(ll, {
      close: s
    }), (l, i) => (r(), m("div", il, [
      d(l.$slots, "default")
    ]));
  }
}), ul = {};
function cl(e, t) {
  return r(), m("div", null, [
    d(e.$slots, "default")
  ]);
}
const dl = /* @__PURE__ */ w(ul, [["render", cl]]), ml = {};
function fl(e, t) {
  return r(), m("div");
}
const pl = /* @__PURE__ */ w(ml, [["render", fl]]), vl = {}, hl = { class: "modal-header" };
function bl(e, t) {
  return r(), m("div", hl, [
    d(e.$slots, "default")
  ]);
}
const _l = /* @__PURE__ */ w(vl, [["render", bl]]), gl = {}, yl = { class: "modal-footer" };
function Vl(e, t) {
  return r(), m("div", yl, [
    d(e.$slots, "default")
  ]);
}
const $l = /* @__PURE__ */ w(gl, [["render", Vl]]), xl = {};
function Cl(e, t) {
  return r(), m("div");
}
const Rl = /* @__PURE__ */ w(xl, [["render", Cl]]), Il = {}, Tl = { class: "modal-content" };
function Bl(e, t) {
  return r(), m("div", Tl, [
    d(e.$slots, "default")
  ]);
}
const wl = /* @__PURE__ */ w(Il, [["render", Bl]]), ic = {
  Root: rl,
  Body: dl,
  Close: pl,
  Header: _l,
  Footer: $l,
  Title: Rl,
  Content: wl
};
function Sl(e) {
  const t = u(() => b(e.props));
  function o() {
    e.onDelete?.(t.value.value);
  }
  return {
    handleDelete: o
  };
}
const Ml = /* @__PURE__ */ p({
  __name: "TagRoot",
  props: {
    value: {},
    canDelete: { type: Boolean },
    theme: {},
    size: {}
  },
  emits: ["delete"],
  setup(e, { emit: t }) {
    const o = e, n = t, { handleDelete: s } = Sl({
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
        (...c) => a(s) && a(s)(...c))
      }, " X ")) : F("", !0)
    ], 2));
  }
}), Al = /* @__PURE__ */ p({
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
}), Lt = {
  Root: Ml,
  Group: Al
}, Nt = /* @__PURE__ */ Symbol("ConfigProviderRootContextKey");
function rc() {
  return U(Nt, {
    props: () => ({}),
    t: () => ""
  });
}
function El(e) {
  const t = u(() => b(e.props));
  function o(n) {
    if (!t.value?.locale)
      return "";
    const s = n.split(".");
    let l = t.value.locale;
    for (const i of s) {
      if (me(l) || ke(l) || _e(l))
        return n;
      l = l[i];
    }
    return _e(l) ? l : n;
  }
  return {
    t: o
  };
}
const Dl = /* @__PURE__ */ p({
  __name: "ConfigProviderRoot",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e, { t: o } = El({
      props: () => t
    });
    return j(Nt, {
      props: () => t,
      t: o
    }), (n, s) => d(n.$slots, "default");
  }
}), kl = {
  Root: Dl
}, Ft = 300, Xt = 1, jt = 10;
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
function zl(e) {
  const t = u(() => b(e.props)), o = u(() => t.value?.infiniteScrollOffset ?? jt), n = u(() => t.value?.draggableMultiplier ?? Xt), s = u(() => W(t.value?.debounceDelay) ? t.value.debounceDelay : Ft), [l, i] = Z(), [c, f] = Z(), v = M(0), _ = M(0), h = M(0), y = M(0);
  function $() {
    f(!1), i(!1);
  }
  const g = Ye((k) => {
    e.onScroll?.(k), t.value?.draggable || (h.value = lt(e.scrollbar.value, !!t.value?.vertical), y.value = at(e.scrollbar.value, !!t.value?.horizontal));
    const N = e.scrollbar.value, P = e.content.value, oe = N ? N.clientHeight : 0, se = N ? N.clientWidth : 0, ge = P ? P.scrollWidth : 0, ie = P ? P.scrollHeight : 0, re = h.value + oe, Pe = y.value + se, ye = !!(t.value?.vertical && ie - re <= o.value), ee = !!(t.value?.horizontal && ge - Pe <= o.value);
    ye && e.onScrollEndY?.(), ee && e.onScrollEndX?.();
  }, s.value), R = Ge((k) => {
    if (e.onMousemove?.(k), !t.value?.draggable || !c.value)
      return;
    k.preventDefault(), k.stopPropagation();
    const N = e.scrollbar.value;
    if (!N)
      return;
    const P = !!t.value?.vertical, oe = !!t.value?.horizontal, se = k.pageY - it(N, P), ie = (k.pageX - rt(N, oe) - v.value) * n.value, re = (se - _.value) * n.value;
    oe && (N.scrollLeft = y.value - ie), P && (N.scrollTop = h.value - re);
  }, s.value);
  function B(k) {
    if (e.onMousedown?.(k), !t.value?.draggable)
      return;
    f(!0), i(!0);
    const N = e.scrollbar.value;
    if (N) {
      const P = !!t.value?.vertical, oe = !!t.value?.horizontal;
      _.value = k.pageY - it(N, P), v.value = k.pageX - rt(N, oe);
    }
    h.value = lt(e.scrollbar.value, !!t.value?.vertical), y.value = at(e.scrollbar.value, !!t.value?.horizontal);
  }
  function S(k) {
    e.onMouseleave?.(k), t.value?.draggable && $();
  }
  function D(k) {
    e.onMouseup?.(k), t.value?.draggable && $();
  }
  return je(() => {
    g.cancel?.(), R.cancel?.();
  }), {
    isGrabbing: l,
    handleScroll: g,
    handleMousedown: B,
    handleMouseleave: S,
    handleMouseup: D,
    handleMousemove: R
  };
}
const Ol = /* @__PURE__ */ p({
  __name: "ScrollbarRoot",
  props: {
    vertical: { type: Boolean, default: !0 },
    horizontal: { type: Boolean },
    draggableMultiplier: { default: Xt },
    infiniteScrollOffset: { default: jt },
    debounceDelay: { default: Ft },
    draggable: { type: Boolean },
    hidden: { type: Boolean },
    size: {},
    theme: {}
  },
  emits: ["scrollEndY", "scrollEndX", "scroll", "mousedown", "mouseleave", "mouseup", "mousemove"],
  setup(e, { emit: t }) {
    const o = e, n = t, s = ne("scrollbar"), l = ne("content"), {
      isGrabbing: i,
      handleScroll: c,
      handleMousedown: f,
      handleMouseleave: v,
      handleMouseup: _,
      handleMousemove: h
    } = zl({
      props: () => o,
      scrollbar: s,
      content: l,
      onScroll: (y) => n("scroll", y),
      onMousedown: (y) => n("mousedown", y),
      onMouseleave: (y) => n("mouseleave", y),
      onMouseup: (y) => n("mouseup", y),
      onMousemove: (y) => n("mousemove", y),
      onScrollEndY: () => n("scrollEndY"),
      onScrollEndX: () => n("scrollEndX")
    });
    return (y, $) => (r(), m("div", {
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
      (...g) => a(c) && a(c)(...g)),
      onMousedown: $[1] || ($[1] = //@ts-ignore
      (...g) => a(f) && a(f)(...g)),
      onMouseleave: $[2] || ($[2] = //@ts-ignore
      (...g) => a(v) && a(v)(...g)),
      onMouseup: $[3] || ($[3] = //@ts-ignore
      (...g) => a(_) && a(_)(...g)),
      onMousemove: $[4] || ($[4] = //@ts-ignore
      (...g) => a(h) && a(h)(...g))
    }, [
      I("div", {
        ref_key: "content",
        ref: l,
        class: "scrollbar__content"
      }, [
        d(y.$slots, "default")
      ], 512)
    ], 34));
  }
}), Pl = {
  Root: Ol
}, Ll = /* @__PURE__ */ p({
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
}), Nl = /* @__PURE__ */ p({
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
}), Fl = /* @__PURE__ */ p({
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
        "row--gutters-y": e.guttersY
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), We = {
  Container: Ll,
  Row: Fl,
  Col: Nl
}, Xl = { class: "section" }, jl = /* @__PURE__ */ p({
  __name: "SectionRoot",
  setup(e) {
    return (t, o) => (r(), m("section", Xl, [
      d(t.$slots, "default")
    ]));
  }
}), Hl = {}, Ul = { class: "section-header" };
function Gl(e, t) {
  return r(), m("header", Ul, [
    d(e.$slots, "default")
  ]);
}
const Yl = /* @__PURE__ */ w(Hl, [["render", Gl]]), ql = {}, Kl = { class: "section-title" };
function Wl(e, t) {
  return r(), m("h1", Kl, [
    d(e.$slots, "default")
  ]);
}
const Zl = /* @__PURE__ */ w(ql, [["render", Wl]]), Jl = {}, Ql = { class: "section-footer" };
function ea(e, t) {
  return r(), m("footer", Ql, [
    d(e.$slots, "default")
  ]);
}
const ta = /* @__PURE__ */ w(Jl, [["render", ea]]), oa = {}, na = { class: "section-body" };
function sa(e, t) {
  return r(), m("div", na, [
    d(e.$slots, "default")
  ]);
}
const la = /* @__PURE__ */ w(oa, [["render", sa]]), uc = {
  Root: jl,
  Header: Yl,
  Title: Zl,
  Footer: ta,
  Body: la
}, aa = { class: "layout" }, ia = /* @__PURE__ */ p({
  __name: "LayoutRoot",
  setup(e) {
    return (t, o) => (r(), m("div", aa, [
      d(t.$slots, "header"),
      d(t.$slots, "default"),
      d(t.$slots, "footer")
    ]));
  }
}), ra = {}, ua = { class: "layout-body" };
function ca(e, t) {
  return r(), m("main", ua, [
    d(e.$slots, "default")
  ]);
}
const da = /* @__PURE__ */ w(ra, [["render", ca]]), ut = {
  Root: ia,
  Body: da
}, ma = /* @__PURE__ */ p({
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
    return (t, o) => (r(), x(so(e.tag), {
      class: C(["text", {
        "text--uppercase": e.uppercase,
        "text--underline": e.underline,
        [`text--size-${e.size}`]: e.size,
        [`text--theme-${e.theme}`]: e.theme,
        [`text--weight-${e.weight}`]: e.weight
      }])
    }, {
      default: V(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), fa = {
  Root: ma
}, pa = /* @__PURE__ */ p({
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
        [`flex--justify-${e.justify}`]: e.justify,
        [`flex--align-${e.align}`]: e.align,
        [`flex--direction-${e.direction}`]: e.direction
      }])
    }, [
      d(t.$slots, "default")
    ], 2));
  }
}), va = {
  Root: pa
}, ha = /* @__PURE__ */ p({
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
}), ba = {}, _a = { class: "divider-content" };
function ga(e, t) {
  return r(), m("div", _a, [
    d(e.$slots, "default")
  ]);
}
const ya = /* @__PURE__ */ w(ba, [["render", ga]]), ct = {
  Root: ha,
  Content: ya
}, cc = {}, Va = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(Fe).Root, z(O(t)), {
      default: V(() => [
        A(a(Fe).Content, null, {
          default: V(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16));
  }
}), $a = /* @__PURE__ */ p({
  __name: "VButtonGroup",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(Fe).Group, z(O(t)), {
      default: V(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), xa = {
  install(e) {
    e.component("VButton", Va);
  }
}, dc = {
  install(e) {
    e.component("VButtonGroup", $a);
  }
}, Ca = /* @__PURE__ */ p({
  __name: "VAccordion",
  props: /* @__PURE__ */ T({
    multiple: { type: Boolean },
    size: {},
    theme: {}
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = E(e, "modelValue");
    return (l, i) => (r(), x(a(ue).Root, H(o, {
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (c) => s.value = c)
    }, te(n)), {
      default: V(() => [
        d(l.$slots, "default")
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Ra = /* @__PURE__ */ p({
  __name: "VAccordionItem",
  props: {
    title: {},
    value: {},
    disabled: { type: Boolean }
  },
  setup(e) {
    const t = pt(e, ["title"]);
    return (o, n) => (r(), x(a(ue).Item, z(O(t)), {
      default: V(({ isActive: s }) => [
        A(a(ue).Header, null, {
          default: V(() => [
            A(a(ue).Trigger, null, {
              default: V(() => [
                A(a(ue).Title, null, {
                  default: V(() => [
                    d(o.$slots, "title", {}, () => [
                      X(L(e.title), 1)
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
        A(a(ue).Body, null, {
          default: V(() => [
            d(o.$slots, "default", { isActive: s })
          ]),
          _: 2
        }, 1024)
      ]),
      _: 3
    }, 16));
  }
}), Ia = {
  install(e) {
    e.component("VAccordion", Ca), e.component("VAccordionItem", Ra);
  }
}, Ta = {
  key: 0,
  class: "v-avatar__label"
}, Ba = /* @__PURE__ */ p({
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
      e.label ? (r(), m("div", Ta, L(e.label), 1)) : F("", !0)
    ], 2));
  }
}), wa = {}, Sa = { class: "v-avatar-group" };
function Ma(e, t) {
  return r(), m("div", Sa, [
    d(e.$slots, "default")
  ]);
}
const Aa = /* @__PURE__ */ w(wa, [["render", Ma]]), Ea = {
  install(e) {
    e.component("VAvatar", Ba);
  }
}, Da = {
  install(e) {
    e.component("VAvatarGroup", Aa);
  }
}, ka = { class: "v-alert__content" }, za = {
  key: 0,
  class: "v-alert__title"
}, Oa = {
  key: 1,
  class: "v-alert__description"
}, Pa = /* @__PURE__ */ p({
  __name: "VAlert",
  props: {
    title: {},
    description: {},
    showIcon: { type: Boolean },
    theme: {},
    size: {}
  },
  setup(e) {
    const t = e, o = J(), n = u(() => !!t.title || !!o?.title), s = u(() => !!t.description || !!o?.description);
    return (l, i) => (r(), m("div", {
      class: C(["v-alert", {
        [`v-alert--size-${e.size}`]: e.size,
        [`v-alert--theme-${e.theme}`]: e.theme
      }])
    }, [
      I("div", ka, [
        o?.default ? d(l.$slots, "default", { key: 0 }) : (r(), m(q, { key: 1 }, [
          n.value ? (r(), m("div", za, [
            d(l.$slots, "title", {}, () => [
              X(L(e.title), 1)
            ])
          ])) : F("", !0),
          s.value ? (r(), m("div", Oa, [
            d(l.$slots, "description", {}, () => [
              X(L(e.description), 1)
            ])
          ])) : F("", !0)
        ], 64))
      ])
    ], 2));
  }
}), La = {
  install(e) {
    e.component("VAlert", Pa);
  }
}, Ht = 0, Ut = 0, Na = {
  offsetTop: 0,
  offsetBottom: 0,
  affixClass: "is-affixed"
};
class we {
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
      ...Na,
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
    return o.outer = we.extend({
      height: "",
      position: ""
    }, o.outer), o.inner = we.extend({
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
      me(o[s]) ? n[s] = t[s] : n[s] = o[s];
    return n;
  }
}
function Fa(e) {
  const t = et(), o = et(), n = u(() => W(e.props?.offsetTop) ? e.props.offsetTop : Ht), s = u(() => W(e.props?.offsetBottom) ? e.props.offsetBottom : Ut);
  function l() {
    e.props.container ? t.value = document.querySelector(e.props.container) ?? void 0 : t.value = e.root.value?.parentElement ?? void 0;
  }
  function i() {
    l(), e.root.value && t.value && e.content.value && (o.value = new we(e.root.value, {
      offsetTop: n.value,
      offsetBottom: s.value,
      container: t.value,
      innerWrapper: e.content.value
    }));
  }
  function c() {
    o.value?.destroy(), o.value = void 0;
  }
  return ae(() => {
    e.props.disabled || i();
  }), Xe(() => {
    c();
  }), K(() => e.props.disabled, (f) => {
    f ? c() : i();
  }), {};
}
const Xa = /* @__PURE__ */ p({
  __name: "VAffix",
  props: {
    offsetTop: { default: Ht },
    offsetBottom: { default: Ut },
    disabled: { type: Boolean, default: !1 },
    container: {}
  },
  setup(e) {
    const t = e, o = ne("root"), n = ne("content");
    return Fa({
      props: t,
      root: o,
      content: n
    }), (s, l) => (r(), m("div", {
      ref_key: "root",
      ref: o,
      class: "v-affix"
    }, [
      I("div", {
        ref_key: "content",
        ref: n,
        class: "v-affix__content"
      }, [
        d(s.$slots, "default")
      ], 512)
    ], 512));
  }
}), ja = {
  install(e) {
    e.component("VAffix", Xa);
  }
}, Ha = { class: "v-breadcrumbs" }, Ua = /* @__PURE__ */ p({
  __name: "VBreadcrumbs",
  setup(e) {
    return (t, o) => (r(), m("nav", Ha));
  }
}), Ga = {
  install(e) {
    e.component("VBreadcrumbs", Ua);
  }
};
function Ya(e) {
  return {
    content: u(() => e.props.dot ? "" : W(e.props.value) && W(e.props.max) ? e.props.max < e.props.value ? `${e.props.max}+` : `${e.props.value}` : `${e.props.value}`)
  };
}
const qa = {
  key: 0,
  class: "v-badge__content"
}, Ka = /* @__PURE__ */ p({
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
    const t = e, o = J(), { content: n } = Ya({
      props: t
    }), s = u(() => !t.hidden && !!(n.value || t.dot || o?.content));
    return (l, i) => (r(), m("div", {
      class: C(["v-badge", {
        "v-badge--dot": e.dot,
        "v-badge--fixed": o?.default,
        [`v-badge--size-${e.size}`]: e.size,
        [`v-badge--theme-${e.theme}`]: e.theme
      }])
    }, [
      d(l.$slots, "default"),
      s.value ? (r(), m("sup", qa, [
        d(l.$slots, "content", { value: a(n) }, () => [
          X(L(a(n)), 1)
        ])
      ])) : F("", !0)
    ], 2));
  }
}), Wa = {
  install(e) {
    e.component("VBadge", Ka);
  }
}, Za = { class: "v-collapse" }, Ja = /* @__PURE__ */ p({
  __name: "VCollapse",
  emits: ["change"],
  setup(e) {
    return (t, o) => (r(), m("div", Za, [
      d(t.$slots, "default")
    ]));
  }
}), Qa = {
  install(e) {
    e.component("VCollapse", Ja);
  }
};
function ei(e) {
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
const ti = /* @__PURE__ */ p({
  __name: "VInplace",
  emits: ["open", "close"],
  setup(e, { emit: t }) {
    const o = t, { isVisible: n, handleOpen: s, handleClose: l } = ei({
      onOpen: () => o("open"),
      onClose: () => o("close")
    });
    return (i, c) => a(n) ? d(i.$slots, "content", {
      key: 1,
      close: a(l)
    }) : d(i.$slots, "display", {
      key: 0,
      open: a(s)
    });
  }
}), oi = {
  install(e) {
    e.component("VInplace", ti);
  }
}, Oe = /* @__PURE__ */ p({
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
}), ni = {
  install(e) {
    e.component("VOverlay", Oe);
  }
}, si = {
  key: 0,
  class: "v-modal__header"
}, li = { class: "v-modal__body" }, ai = {
  key: 1,
  class: "v-modal__footer"
}, Gt = /* @__PURE__ */ p({
  __name: "VModal",
  props: /* @__PURE__ */ T({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = J(), l = E(e, "modelValue"), i = u(() => !!o.title || !!s?.header), c = u(() => !!s?.footer);
    function f() {
      l.value = !1;
    }
    function v(h) {
      n("opened", h);
    }
    function _(h) {
      n("closed", h);
    }
    return K(l, (h) => {
      n(h ? "open" : "close");
    }), (h, y) => (r(), x(vt, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      A(Ae, {
        onAfterEnter: v,
        onAfterLeave: _
      }, {
        default: V(() => [
          A(a(Oe), null, {
            default: V(() => [
              G(I("div", {
                class: C(["v-modal", {
                  "v-modal--open": l.value
                }]),
                role: "dialog"
              }, [
                i.value ? (r(), m("div", si, [
                  d(h.$slots, "header", { close: f }, () => [
                    X(L(e.title), 1)
                  ]),
                  I("button", {
                    class: "v-modal__close-button",
                    type: "button",
                    onClick: f
                  }, " x ")
                ])) : F("", !0),
                I("div", li, [
                  d(h.$slots, "default", { close: f })
                ]),
                c.value ? (r(), m("div", ai, [
                  d(h.$slots, "footer", { close: f })
                ])) : F("", !0)
              ], 2), [
                [le, l.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), ii = {
  install(e) {
    e.component("VModal", Gt);
  }
}, ri = { class: "v-drawer__dialog" }, ui = {
  key: 0,
  class: "v-drawer__header"
}, ci = { class: "v-drawer__body" }, di = {
  key: 1,
  class: "v-drawer__footer"
}, Yt = /* @__PURE__ */ p({
  __name: "VDrawer",
  props: /* @__PURE__ */ T({
    appendToBody: { type: Boolean },
    title: {},
    destroyOnClose: { type: Boolean },
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["opened", "closed", "open", "close"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = J(), l = E(e, "modelValue"), i = u(() => !!o.title || !!s?.header), c = u(() => !!s?.footer);
    function f() {
      l.value = !1;
    }
    function v(h) {
      n("opened", h);
    }
    function _(h) {
      n("closed", h);
    }
    return K(l, (h) => {
      n(h ? "open" : "close");
    }), (h, y) => (r(), x(vt, {
      to: "body",
      disabled: !e.appendToBody
    }, [
      A(Ae, {
        onAfterEnter: v,
        onAfterLeave: _
      }, {
        default: V(() => [
          A(a(Oe), null, {
            default: V(() => [
              G(I("div", {
                class: C(["v-drawer", {
                  "v-drawer--open": l.value
                }]),
                role: "dialog"
              }, [
                I("div", ri, [
                  i.value ? (r(), m("div", ui, [
                    d(h.$slots, "header", { close: f }, () => [
                      X(L(e.title), 1)
                    ]),
                    I("button", {
                      class: "v-drawer__close-button",
                      type: "button",
                      onClick: f
                    }, " x ")
                  ])) : F("", !0),
                  I("div", ci, [
                    d(h.$slots, "default", { close: f })
                  ]),
                  c.value ? (r(), m("div", di, [
                    d(h.$slots, "footer", { close: f })
                  ])) : F("", !0)
                ])
              ], 2), [
                [le, l.value]
              ])
            ]),
            _: 3
          })
        ]),
        _: 3
      })
    ], 8, ["disabled"]));
  }
}), mi = {
  install(e) {
    e.component("VDrawer", Yt);
  }
};
function mc() {
  return {};
}
const fi = /* @__PURE__ */ Symbol("VDropdownContextKey"), pi = {
  mounted() {
  },
  unmounted() {
  }
}, vi = {
  install(e) {
    e.directive("visible", pi);
  }
}, hi = {
  mounted() {
  },
  unmounted() {
  }
}, bi = {
  install(e) {
    e.directive("loading", hi);
  }
}, qt = {
  mounted() {
  },
  unmounted() {
  }
}, _i = {
  install(e) {
    e.directive("click-outside", qt);
  }
}, gi = {
  mounted() {
  },
  unmounted() {
  }
}, yi = {
  install(e) {
    e.directive("tooltip", gi);
  }
}, Vi = { class: "v-dropdown__menu" }, $i = /* @__PURE__ */ p({
  __name: "VDropdown",
  emits: ["opened", "closed", "open", "close"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, [l, i, c] = Z(), f = () => i(!1);
    function v(h) {
      s("opened", h);
    }
    function _(h) {
      s("opened", h);
    }
    return K(l, (h) => {
      s(h ? "open" : "close");
    }), t({
      setVisible: i,
      isVisible: l
    }), j(fi, {
      props: n
    }), (h, y) => G((r(), m("div", {
      class: C(["v-dropdown", {
        "v-dropdown--open": a(l)
      }])
    }, [
      d(h.$slots, "trigger", {
        isVisible: a(l),
        toggle: a(c),
        setVisible: a(i)
      }),
      A(Ae, {
        onAfterEnter: v,
        onAfterLeave: _
      }, {
        default: V(() => [
          G(I("div", Vi, [
            d(h.$slots, "default")
          ], 512), [
            [le, a(l)]
          ])
        ]),
        _: 3
      })
    ], 2)), [
      [a(qt), f]
    ]);
  }
}), xi = {
  install(e) {
    e.component("VDropdown", $i);
  }
}, Ci = /* @__PURE__ */ p({
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
      I("picture", null, [
        I("img", {
          ref_key: "image",
          ref: t,
          class: "v-image__native",
          alt: ""
        }, null, 512)
      ])
    ], 2));
  }
}), Ri = {
  install(e) {
    e.component("VImage", Ci);
  }
}, Ii = /* @__PURE__ */ p({
  __name: "VContainer",
  props: {
    size: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(We).Container, z(O(t)), {
      default: V(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ti = {
  install(e) {
    e.component("VContainer", Ii);
  }
}, Bi = /* @__PURE__ */ p({
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
    return (o, n) => (r(), x(a(We).Col, z(O(t)), {
      default: V(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), wi = {
  install(e) {
    e.component("VCol", Bi);
  }
}, Si = /* @__PURE__ */ p({
  __name: "VRow",
  props: {
    guttersX: { type: Boolean },
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
    return (o, n) => (r(), x(a(We).Row, z(O(t)), {
      default: V(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Mi = {
  install(e) {
    e.component("VRow", Si);
  }
}, Ai = /* @__PURE__ */ p({
  __name: "VLayout",
  setup(e) {
    const t = J();
    return (o, n) => (r(), x(a(ut).Root, null, ht({
      default: V(() => [
        A(a(ut).Body, null, {
          default: V(() => [
            d(o.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 2
    }, [
      t?.header ? {
        name: "header",
        fn: V(() => [
          d(o.$slots, "header")
        ]),
        key: "0"
      } : void 0,
      t?.footer ? {
        name: "footer",
        fn: V(() => [
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
}, Di = { class: "v-pagination" }, ki = /* @__PURE__ */ p({
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
    return (t, o) => (r(), m("div", Di));
  }
}), zi = {
  install(e) {
    e.component("VPagination", ki);
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
    return (s, l) => (r(), x(a(Pl).Root, H(o, te(n)), {
      default: V(() => [
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
}, Kt = /* @__PURE__ */ Symbol("VTabsContextKey"), Hi = () => U(Kt, null);
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
  const t = He(), o = u(() => e.context?.modelValue.value === e.props.value);
  return {
    id: t,
    isActive: o
  };
}
const Yi = { class: "v-tabs" }, qi = { class: "v-tabs__content" }, Ki = /* @__PURE__ */ p({
  __name: "VTabs",
  props: /* @__PURE__ */ T({
    scrollable: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = E(e, "modelValue"), {
      tabs: l,
      registerTab: i,
      unregisterTab: c
    } = Ui();
    function f(v) {
      s.value = v, n("change", v);
    }
    return j(Kt, {
      props: o,
      modelValue: s,
      tabs: l,
      handleChange: f,
      registerTab: i,
      unregisterTab: c
    }), (v, _) => (r(), m("div", Yi, [
      I("div", qi, [
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
    }), i = lo({
      id: s,
      props: t,
      slots: o
    });
    return n?.registerTab(i), Me(() => {
      n?.unregisterTab(i);
    }), (c, f) => G((r(), m("div", {
      class: C(["v-tab", {
        "v-tab--active": a(l)
      }])
    }, [
      d(c.$slots, "default", { isActive: a(l) })
    ], 2)), [
      [le, a(l)]
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
    return (s, l) => (r(), x(a(Lt).Root, H(o, te(n)), {
      default: V(() => [
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
    return (o, n) => (r(), x(a(Lt).Group, z(O(t)), {
      default: V(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), er = {
  install(e) {
    e.component("VTag", Ji);
  }
}, fc = {
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
    return (o, n) => (r(), x(a(fa).Root, z(O(t)), {
      default: V(() => [
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
  props: /* @__PURE__ */ T({
    rules: {},
    disabled: { type: Boolean },
    scrollToError: { type: Boolean }
  }, {
    modelValue: {
      required: !0
    },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ T(["submit", "valid", "invalid"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const o = e, n = t, s = E(e, "modelValue");
    return (l, i) => (r(), x(a(he).Root, H({
      modelValue: s.value,
      "onUpdate:modelValue": i[0] || (i[0] = (c) => s.value = c)
    }, o, te(n)), {
      default: V((c) => [
        d(l.$slots, "default", z(O(c)))
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
    const o = pt(e, ["title"]), n = t, s = J();
    return (l, i) => (r(), x(a(he).Item, H(o, te(n)), ht({
      default: V((c) => [
        d(l.$slots, "default", z(O(c)))
      ]),
      footer: V((c) => [
        d(l.$slots, "footer", z(O(c)), () => [
          A(a(he).ItemErrors)
        ])
      ]),
      _: 2
    }, [
      s.header ? {
        name: "header",
        fn: V((c) => [
          d(l.$slots, "header", z(O(c)), () => [
            A(a(he).ItemTitle, null, {
              default: V(() => [
                X(L(e.title) + " ", 1),
                c.isRequired ? (r(), x(a(he).ItemRequired, { key: 0 })) : F("", !0)
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
  props: /* @__PURE__ */ T({
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
    const t = e, o = E(e, "modelValue");
    return (n, s) => (r(), x(a(xe).Root, H(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: V(() => [
        A(a(xe).Indicator),
        A(a(xe).Title, null, {
          default: V(() => [
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
    return (o, n) => (r(), x(a(xe).Group, z(O(t)), {
      default: V(() => [
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
  props: /* @__PURE__ */ T({
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
    const t = e, o = J(), n = E(e, "modelValue");
    return (s, l) => (r(), x(a(Y).Root, H(t, {
      modelValue: n.value,
      "onUpdate:modelValue": l[0] || (l[0] = (i) => n.value = i)
    }), {
      default: V((i) => [
        o?.before ? (r(), x(a(Y).Before, { key: 0 }, {
          default: V(() => [
            d(s.$slots, "before", z(O(i)))
          ]),
          _: 2
        }, 1024)) : F("", !0),
        A(a(Y).Control, null, {
          default: V(() => [
            i.isTextarea ? (r(), x(a(Y).Textarea, { key: 0 })) : (r(), x(a(Y).Native, { key: 1 }))
          ]),
          _: 2
        }, 1024),
        o?.after ? (r(), x(a(Y).After, { key: 1 }, {
          default: V(() => [
            d(s.$slots, "after", z(O(i)))
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
  props: /* @__PURE__ */ T({
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
    const t = e, o = E(e, "modelValue");
    return (n, s) => (r(), x(a(st).Root, H(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: V(() => [
        (r(!0), m(q, null, ce(e.length, (l, i) => (r(), x(a(st).Pin, {
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
  props: /* @__PURE__ */ T({
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
      default: Ke
    },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = E(e, "modelValue");
    return (n, s) => (r(), x(a($e).Root, H(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: V(() => [
        A(a($e).Button, {
          action: a(Be).DECREMENT
        }, null, 8, ["action"]),
        A(a($e).Input),
        A(a($e).Button, {
          action: a(Be).INCREMENT
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
  props: /* @__PURE__ */ T({
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
    const t = e, o = E(e, "modelValue");
    return (n, s) => (r(), x(a(Ls).Root, H({
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
  props: /* @__PURE__ */ T({
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
    const t = e, o = E(e, "modelValue");
    return (n, s) => (r(), x(a(Ce).Root, H(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: V(() => [
        A(a(Ce).Indicator),
        A(a(Ce).Title, null, {
          default: V(() => [
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
    return (o, n) => (r(), x(a(Ce).Group, z(O(t)), {
      default: V(() => [
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
  __name: "VSwitch",
  props: /* @__PURE__ */ T({
    disabled: { type: Boolean },
    theme: {},
    size: {}
  }, {
    modelValue: { type: Boolean, required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, o = E(e, "modelValue");
    return (n, s) => (r(), x(a(Ne).Root, H(t, {
      modelValue: o.value,
      "onUpdate:modelValue": s[0] || (s[0] = (l) => o.value = l)
    }), {
      default: V(() => [
        A(a(Ne).Indicator),
        A(a(Ne).Title, null, {
          default: V(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 16, ["modelValue"]));
  }
}), Cr = {
  install(e) {
    e.component("VSwitch", xr);
  }
}, Rr = /* @__PURE__ */ p({
  __name: "VConfigProvider",
  props: {
    locale: {},
    teleportTarget: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(kl).Root, z(O(t)), {
      default: V(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Ir = {
  install(e) {
    e.component("VConfigProvider", Rr);
  }
}, Tr = { class: "v-progress__value" }, Br = {
  key: 0,
  class: "v-progress__label"
}, wr = /* @__PURE__ */ p({
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
      I("div", Tr, [
        e.showValue ? (r(), m("div", Br, [
          d(t.$slots, "default")
        ])) : F("", !0)
      ])
    ], 2));
  }
}), Sr = {
  install(e) {
    e.component("VProgress", wr);
  }
}, Mr = /* @__PURE__ */ p({
  __name: "VDivider",
  props: {
    direction: {}
  },
  setup(e) {
    const t = e, o = J();
    return (n, s) => (r(), x(a(ct).Root, z(O(t)), {
      default: V(() => [
        o?.default ? (r(), x(a(ct).Content, { key: 0 }, {
          default: V(() => [
            d(n.$slots, "default")
          ]),
          _: 3
        })) : F("", !0)
      ]),
      _: 3
    }, 16));
  }
}), Ar = {
  install(e) {
    e.component("VDivider", Mr);
  }
}, Er = /* @__PURE__ */ p({
  __name: "VFlex",
  props: {
    wrap: { type: Boolean },
    align: {},
    justify: {},
    direction: {}
  },
  setup(e) {
    const t = e;
    return (o, n) => (r(), x(a(va).Root, z(O(t)), {
      default: V(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), Dr = {
  install(e) {
    e.component("VFlex", Er);
  }
};
function kr(e) {
  const t = M([]), o = M({
    prop: null,
    order: null
  }), n = u(() => e.columns.some((v) => !!v.title));
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
  function c(v, _) {
    o.value = {
      prop: v,
      order: _
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
    sort: c,
    toggleAllSelection: f
  };
}
const zr = Ee(() => Promise.resolve().then(() => yu)), Or = Ee(() => Promise.resolve().then(() => Ru)), Pr = Ee(() => Promise.resolve().then(() => Mu)), Lr = Ee(() => Promise.resolve().then(() => zu)), Nr = /* @__PURE__ */ Symbol("VTableContextKey"), Fr = { class: "v-table" }, Xr = {
  key: 0,
  class: "v-table__native"
}, jr = { key: 0 }, Hr = /* @__PURE__ */ p({
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
      sort: c,
      toggleAllSelection: f
    } = kr(o);
    return j(Nr, {
      props: o
    }), t({
      clearSelection: s,
      getSelectionRows: l,
      clearSort: i,
      sort: c,
      toggleAllSelection: f
    }), (v, _) => (r(), m("div", Fr, [
      e.data.length ? (r(), m("table", Xr, [
        a(n) ? (r(), m("thead", jr, [
          I("tr", null, [
            (r(!0), m(q, null, ce(e.columns, (h) => (r(), x(a(Lr), {
              key: h.prop
            }, {
              default: V(() => [
                X(L(h.title), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ])
        ])) : F("", !0),
        I("tbody", null, [
          (r(!0), m(q, null, ce(e.data, (h, y) => (r(), x(a(zr), {
            key: `row-${y}`
          }, {
            default: V(() => [
              (r(!0), m(q, null, ce(e.columns, ($) => (r(), x(a(Pr), {
                key: `row-${y}-${String($.prop)}`
              }, {
                default: V(() => [
                  d(v.$slots, String($.prop), { row: h }, () => [
                    X(L(h[$.prop]), 1)
                  ])
                ]),
                _: 2
              }, 1024))), 128))
            ]),
            _: 2
          }, 1024))), 128))
        ])
      ])) : (r(), x(a(Or), { key: 1 }, {
        default: V(() => [
          d(v.$slots, "empty")
        ]),
        _: 3
      }))
    ]));
  }
}), Ur = {
  install(e) {
    e.component("VTable", Hr);
  }
}, Gr = /* @__PURE__ */ p({
  __name: "VInputGroup",
  setup(e) {
    return (t, o) => (r(), x(a(Y).Group, null, {
      default: V(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), Yr = /* @__PURE__ */ p({
  __name: "VInputGroupAddon",
  setup(e) {
    return (t, o) => (r(), x(a(Y).GroupAddon, null, {
      default: V(() => [
        d(t.$slots, "default")
      ]),
      _: 3
    }));
  }
}), qr = {
  install(e) {
    e.component("VInputGroup", Gr), e.component("VInputGroupAddon", Yr);
  }
}, Re = 1e3, Ie = 60 * Re, Te = 60 * Ie, dt = 24 * Te, Wt = Date.now(), Zt = 1e3;
function Kr(e) {
  const [t, o] = Z(), [n, s] = Z(), l = M(0), i = M(0), c = M(0), f = u(() => e.props.now || Wt), v = u(() => e.props.interval || Zt), _ = u(() => 0), h = u(() => 0), y = u(() => Math.floor(l.value / dt)), $ = u(() => Math.floor(l.value % dt / Te)), g = u(() => Math.floor(l.value % Te / Ie)), R = u(() => Math.floor(l.value % Ie / Re)), B = u(() => Math.floor(l.value % Re)), S = u(() => Math.floor(l.value / Te)), D = u(() => Math.floor(l.value / Ie)), k = u(() => Math.floor(l.value / Re));
  function N() {
    t.value || (o(!0), e.props?.autoStart || (l.value = e.props.start, i.value = f.value + e.props.start), e.onStart?.(), document.visibilityState === "visible" && se());
  }
  function P() {
    cancelAnimationFrame(c.value), c.value = 0;
  }
  function oe() {
    t.value && (re(), l.value > 0 && e.onProgress?.({
      days: y.value,
      hours: $.value,
      minutes: g.value,
      seconds: R.value,
      milliseconds: B.value,
      totalDays: y.value,
      totalHours: S.value,
      totalMinutes: D.value,
      totalSeconds: k.value,
      totalMilliseconds: l.value
    }), se());
  }
  function se() {
    if (!t.value)
      return;
    const ee = Math.min(l.value, v.value);
    if (ee > 0) {
      let Ze = function(fe) {
        Le || (Le = fe), Ve || (Ve = fe);
        const Je = fe - Le;
        Je >= ee || Je + (fe - Ve) / 2 >= ee ? oe() : c.value = requestAnimationFrame(Ze), Ve = fe;
      }, Le, Ve;
      c.value = requestAnimationFrame(Ze);
    } else
      ie();
  }
  function ge() {
    t.value && (P(), o(!1), e.onAbort?.());
  }
  function ie() {
    t.value && (P(), l.value = 0, o(!1), e.onEnd?.());
  }
  function re() {
    t.value && (l.value = Math.max(0, i.value - f.value));
  }
  function Pe() {
    P(), l.value = e.props.start, i.value = f.value + e.props.start, o(!1), N();
  }
  function ye() {
    switch (document.visibilityState) {
      case "visible":
        c.value === 0 && n.value && (re(), se()), s(!1);
        break;
      case "hidden":
        c.value > 0 && (s(!0), P());
        break;
    }
  }
  return ae(() => {
    document.addEventListener("visibilitychange", ye);
  }), Xe(() => {
    document.removeEventListener("visibilitychange", ye), P();
  }), K(() => e.props, (ee) => {
    l.value = ee.start, i.value = f.value + ee.start, ee.autoStart && N();
  }, {
    deep: !0,
    immediate: !0
  }), {
    years: _,
    months: h,
    days: y,
    hours: $,
    minutes: g,
    seconds: R,
    milliseconds: B,
    start: N,
    abort: ge,
    end: ie,
    restart: Pe
  };
}
const Wr = { class: "v-countdown" }, Zr = /* @__PURE__ */ p({
  __name: "VCountdown",
  props: {
    autoStart: { type: Boolean },
    interval: { default: () => Zt },
    start: {},
    now: { default: () => Wt }
  },
  emits: ["start", "progress", "abort", "end"],
  setup(e, { expose: t, emit: o }) {
    const n = e, s = o, {
      years: l,
      months: i,
      days: c,
      hours: f,
      minutes: v,
      seconds: _,
      milliseconds: h,
      start: y,
      abort: $,
      end: g,
      restart: R
    } = Kr({
      props: n,
      onAbort: () => s("abort"),
      onEnd: () => s("end"),
      onProgress: (B) => s("progress", B),
      onStart: () => s("start")
    });
    return t({
      start: y,
      abort: $,
      end: g,
      restart: R
    }), (B, S) => (r(), m("div", Wr, [
      d(B.$slots, "default", {
        years: a(l),
        months: a(i),
        days: a(c),
        hours: a(f),
        minutes: a(v),
        seconds: a(_),
        milliseconds: a(h)
      })
    ]));
  }
}), Jr = {
  install(e) {
    e.component("VCountdown", Zr);
  }
}, Qr = { class: "v-calendar" }, eu = /* @__PURE__ */ p({
  __name: "VCalendar",
  props: {
    theme: {},
    size: {}
  },
  setup(e) {
    return (t, o) => (r(), m("div", Qr));
  }
}), tu = {
  install(e) {
    e.component("VCalendar", eu);
  }
}, pc = {
  install(e) {
    e.use(Ia), e.use(ja), e.use(Ea), e.use(Da), e.use(Wa), e.use(Ga), e.use(xa), e.use(Qa), e.use(Ir), e.use(ii), e.use(oi), e.use(mi), e.use(xi), e.use(Ri), e.use(zi), e.use(Li), e.use(Fi), e.use(ji), e.use(Zi), e.use(er), e.use(or), e.use(Ti), e.use(wi), e.use(Mi), e.use(Ei), e.use(sr), e.use(ar), e.use(mr), e.use(ur), e.use(cr), e.use(_r), e.use(hr), e.use(pr), e.use(Vr), e.use($r), e.use(Cr), e.use(ni), e.use(La), e.use(Sr), e.use(Ar), e.use(Dr), e.use(Ur), e.use(qr), e.use(Jr), e.use(tu), e.use(vi), e.use(_i), e.use(bi), e.use(yi);
  }
}, ou = { class: "v-confirm__header" }, nu = { class: "v-confirm__title" }, su = { class: "v-confirm__body" }, lu = {
  key: 0,
  class: "v-confirm__text"
}, au = ["innerHTML"], iu = { class: "v-confirm__footer" }, ru = /* @__PURE__ */ p({
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
    return (n, s) => (r(), x(a(Oe), null, {
      default: V(() => [
        I("div", {
          class: C(["v-confirm", {
            [`v-confirm--size-${e.size}`]: e.size,
            [`v-confirm--theme-${e.theme}`]: e.theme
          }])
        }, [
          I("div", ou, [
            I("div", nu, L(e.title), 1),
            I("button", {
              type: "button",
              onClick: s[0] || (s[0] = (l) => o("close"))
            }, " X ")
          ]),
          I("div", su, [
            e.useHtml ? (r(), m("div", {
              key: 1,
              class: "v-confirm__text",
              innerHTML: e.message
            }, null, 8, au)) : (r(), m("div", lu, L(e.message), 1))
          ]),
          I("div", iu, [
            I("button", {
              type: "button",
              onClick: s[1] || (s[1] = (l) => o("success"))
            }, L(e.confirmText), 1),
            I("button", {
              type: "button",
              onClick: s[2] || (s[2] = (l) => o("cancel"))
            }, L(e.cancelText), 1)
          ])
        ], 2)
      ]),
      _: 1
    }));
  }
});
class vc {
  static #e = null;
  static async open(t, o) {
    return new Promise((n) => {
      this.#e || (this.#e = document.createElement("div"), this.#e.id = "confirm-container", document.body.appendChild(this.#e));
      const s = (i) => {
        try {
          this.close(), n(i);
        } catch (c) {
          console.error(c), n(!1);
        }
      }, l = De(ru, {
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
      be(l, this.#e);
    });
  }
  static close() {
    this.#e && be(null, this.#e);
  }
}
const hc = {
  install() {
  }
}, Jt = 1500;
function uu(e) {
  const t = u(() => W(e.props.duration) ? e.props.duration : Jt), [o, n] = Z(!1);
  let s = null;
  function l() {
    s && clearTimeout(s);
  }
  function i() {
    l(), t.value !== 0 && (s = setTimeout(() => {
      n(!1);
    }, t.value));
  }
  return ae(() => {
    i(), n(!0);
  }), {
    isVisible: o,
    setVisible: n,
    clearTimer: l,
    startTimer: i
  };
}
const cu = { class: "v-toast__header" }, du = { class: "v-toast__title" }, mu = { class: "v-toast__body" }, fu = {
  key: 0,
  class: "v-toast__text"
}, pu = ["innerHTML"], vu = /* @__PURE__ */ p({
  __name: "VToast",
  props: {
    title: {},
    message: {},
    useHtml: { type: Boolean, default: !1 },
    duration: { default: Jt },
    clearable: { type: Boolean, default: !0 },
    theme: {},
    size: {}
  },
  emits: ["close"],
  setup(e, { emit: t }) {
    const o = e, n = t, { isVisible: s, setVisible: l, startTimer: i, clearTimer: c } = uu({
      props: o
    });
    return (f, v) => (r(), x(Ae, {
      name: "fade-in-up",
      onAfterLeave: v[3] || (v[3] = (_) => n("close"))
    }, {
      default: V(() => [
        G(I("div", {
          class: C(["v-toast", {
            [`v-toast--size-${e.size}`]: e.size,
            [`v-toast--theme-${e.theme}`]: e.theme
          }]),
          role: "alert",
          onMouseenter: v[1] || (v[1] = //@ts-ignore
          (..._) => a(c) && a(c)(..._)),
          onMouseleave: v[2] || (v[2] = //@ts-ignore
          (..._) => a(i) && a(i)(..._))
        }, [
          I("div", cu, [
            I("div", du, L(e.title), 1),
            e.clearable ? (r(), m("button", {
              key: 0,
              type: "button",
              class: "v-toast__button-close",
              onClick: v[0] || (v[0] = (_) => a(l)(!1))
            }, " X ")) : F("", !0)
          ]),
          I("div", mu, [
            e.useHtml ? (r(), m("div", {
              key: 1,
              class: "v-toast__text",
              innerHTML: e.message
            }, null, 8, pu)) : (r(), m("div", fu, L(e.message), 1))
          ])
        ], 34), [
          [le, a(s)]
        ])
      ]),
      _: 1
    }));
  }
});
class bc {
  static #e = null;
  static open(t, o) {
    this.#e || (this.#e = document.createElement("div"), this.#e.id = "toast-container", document.body.appendChild(this.#e));
    const n = De(vu, {
      ...t,
      appContext: o
    });
    be(n, this.#e);
  }
}
class _c {
  static open(t, o) {
    const n = De(Gt, {
      ...t,
      appContext: o
    });
    be(n, document.body);
  }
}
class gc {
  static open(t, o) {
    const n = De(Yt, {
      ...t,
      appContext: o
    });
    be(n, document.body);
  }
}
const yc = {
  name: "ru",
  vau: {}
}, Vc = {
  name: "en",
  vau: {}
}, hu = {}, bu = { class: "v-table-row" };
function _u(e, t) {
  return r(), m("tr", bu, [
    d(e.$slots, "default")
  ]);
}
const gu = /* @__PURE__ */ w(hu, [["render", _u]]), yu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: gu
}, Symbol.toStringTag, { value: "Module" })), Vu = {}, $u = { class: "v-table-empty" };
function xu(e, t) {
  return r(), m("div", $u, [
    d(e.$slots, "default", {}, () => [
      t[0] || (t[0] = X(" Данных нет ", -1))
    ])
  ]);
}
const Cu = /* @__PURE__ */ w(Vu, [["render", xu]]), Ru = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cu
}, Symbol.toStringTag, { value: "Module" })), Iu = {}, Tu = { class: "v-table-body-cell" }, Bu = { class: "v-table-body-cell__content" };
function wu(e, t) {
  return r(), m("td", Tu, [
    I("div", Bu, [
      d(e.$slots, "default")
    ])
  ]);
}
const Su = /* @__PURE__ */ w(Iu, [["render", wu]]), Mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Su
}, Symbol.toStringTag, { value: "Module" })), Au = {}, Eu = { class: "v-table-header-cell" };
function Du(e, t) {
  return r(), m("th", Eu, [
    d(e.$slots, "default")
  ]);
}
const ku = /* @__PURE__ */ w(Au, [["render", Du]]), zu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ku
}, Symbol.toStringTag, { value: "Module" }));
export {
  ue as Accordion,
  Ia as AccordionPlugin,
  ja as AffixPlugin,
  La as AlertPlugin,
  Da as AvatarGroupPlugin,
  Ea as AvatarPlugin,
  Wa as BadgePlugin,
  Ga as BreadcrumbsPlugin,
  Fe as Button,
  dc as ButtonGroupPlugin,
  xa as ButtonPlugin,
  tu as CalendarPlugin,
  xe as Checkbox,
  cr as CheckboxGroupPlugin,
  ur as CheckboxPlugin,
  _i as ClickOutsidePlugin,
  wi as ColPlugin,
  Qa as CollapsePlugin,
  kl as ConfigProvider,
  Ir as ConfigProviderPlugin,
  Nt as ConfigProviderRootContextKey,
  hc as ConfirmPlugin,
  vc as ConfirmService,
  Ti as ContainerPlugin,
  Jr as CountdownPlugin,
  Xu as Direction,
  ct as Divider,
  Ar as DividerPlugin,
  mi as DrawerPlugin,
  gc as DrawerService,
  xi as DropdownPlugin,
  va as Flex,
  Hu as FlexAlign,
  Uu as FlexJustify,
  Dr as FlexPlugin,
  he as Form,
  ar as FormItemPlugin,
  sr as FormPlugin,
  We as Grid,
  Be as INPUT_NUMBER_ACTIONS,
  Is as INPUT_NUMBER_MAX,
  Rs as INPUT_NUMBER_MIN,
  At as INPUT_NUMBER_STEP,
  Ke as INPUT_NUMBER_VALUE_DEFAULT,
  Ts as INPUT_NUMBER_WHEEL_DELAY,
  Ri as ImagePlugin,
  oi as InplacePlugin,
  Y as Input,
  st as InputCode,
  pr as InputCodePlugin,
  qr as InputGroupPlugin,
  Oo as InputModes,
  ve as InputNativeTypes,
  $e as InputNumber,
  hr as InputNumberPlugin,
  Ls as InputPassword,
  _r as InputPasswordPlugin,
  mr as InputPlugin,
  ac as InputRange,
  lc as InputTags,
  Rt as InputTypes,
  ot as IntersectionPresets,
  ut as Layout,
  Ei as LayoutPlugin,
  bi as LoadingPlugin,
  ic as Modal,
  ii as ModalPlugin,
  _c as ModalService,
  ni as OverlayPlugin,
  zi as PaginationPlugin,
  Li as PlaceholderPlugin,
  ju as Position,
  Sr as ProgressPlugin,
  Ce as Radio,
  $r as RadioGroupPlugin,
  Vr as RadioPlugin,
  Mi as RowPlugin,
  Pl as Scrollbar,
  Fi as ScrollbarPlugin,
  uc as Section,
  sc as Select,
  Fu as Sizes,
  ji as SpinnerPlugin,
  Ne as Switch,
  Cr as SwitchPlugin,
  Ur as TablePlugin,
  Zi as TabsPlugin,
  Lt as Tag,
  fc as TagGroupPlugin,
  er as TagPlugin,
  fa as Text,
  or as TextPlugin,
  Nu as Themes,
  bc as ToastService,
  yi as TooltipPlugin,
  Ca as VAccordion,
  Ra as VAccordionItem,
  Xa as VAffix,
  Pa as VAlert,
  Ba as VAvatar,
  Aa as VAvatarGroup,
  Ka as VBadge,
  Ua as VBreadcrumbs,
  Va as VButton,
  $a as VButtonGroup,
  eu as VCalendar,
  ir as VCheckbox,
  rr as VCheckboxGroup,
  Bi as VCol,
  Ja as VCollapse,
  Rr as VConfigProvider,
  Ii as VContainer,
  Zr as VCountdown,
  Mr as VDivider,
  Yt as VDrawer,
  $i as VDropdown,
  Er as VFlex,
  nr as VForm,
  lr as VFormItem,
  Ci as VImage,
  ti as VInplace,
  dr as VInput,
  fr as VInputCode,
  Gr as VInputGroup,
  Yr as VInputGroupAddon,
  vr as VInputNumber,
  br as VInputPassword,
  Ai as VLayout,
  Gt as VModal,
  Oe as VOverlay,
  ki as VPagination,
  Pi as VPlaceholder,
  wr as VProgress,
  gr as VRadio,
  yr as VRadioGroup,
  Si as VRow,
  Ni as VScrollbar,
  Xi as VSpinner,
  xr as VSwitch,
  Wi as VTab,
  Hr as VTable,
  Ki as VTabs,
  Ji as VTag,
  Qi as VTagGroup,
  tr as VText,
  pc as VauUI,
  vi as VisiblePlugin,
  Wu as booleanToBooleanish,
  pe as clone,
  Ye as debounce,
  Zu as defineFormRules,
  Yu as delay,
  Vc as en,
  nt as getProp,
  Po as isBoolean,
  Gu as isEmpty,
  Lo as isFunction,
  ke as isNull,
  W as isNumber,
  Ue as isObject,
  _e as isString,
  me as isUndefined,
  Ku as omit,
  qu as pick,
  yc as ru,
  cc as ruRU,
  Ge as throttle,
  io as useAccordionItem,
  ao as useAccordionRoot,
  ro as useAccordionTrigger,
  ec as useAnimatedNumber,
  Qu as useClipboard,
  rc as useConfigProviderRootContext,
  mc as useDrawer,
  nc as useEmitProxy,
  Ho as useFormItem,
  Fo as useFormRoot,
  zo as useIntersectionObserver,
  Ju as useLoadImage,
  Lu as usePlural,
  oc as useScrollTo,
  Z as useToggle,
  tc as useWindowScroll,
  qt as vClickOutside,
  hi as vLoading,
  gi as vTooltip,
  pi as vVisible
};
