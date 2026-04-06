import { useFormContext as e } from "../Form/context/useFormContext.js";
import { useRadioRoot as t } from "./composables/useRadioRoot.js";
import { RadioRootContextKey as n } from "./context/key.js";
import { createElementBlock as r, createElementVNode as i, defineComponent as a, mergeModels as o, mergeProps as s, normalizeClass as c, openBlock as l, provide as u, renderSlot as d, toHandlers as f, unref as p, useModel as m, vModelRadio as h, withDirectives as g } from "vue";
//#region src/lib/core/components/Radio/RadioRoot.vue?vue&type=script&setup=true&lang.ts
var _ = ["value", "disabled"], v = /* @__PURE__ */ a({
	__name: "RadioRoot",
	props: /* @__PURE__ */ o({
		disabled: { type: Boolean },
		value: {},
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ o(["change"], ["update:modelValue"]),
	setup(a, { emit: o }) {
		let v = a, y = o, b = m(a, "modelValue"), { formRootContext: x, formItemContext: S, isValid: C, isInvalid: w } = e(), { isActive: T, isDisabled: E } = t({
			formRootContext: x,
			formItemContext: S,
			props: () => v,
			modelValue: () => b.value
		});
		return u(n, {
			props: () => v,
			modelValue: () => b.value,
			isActive: () => T.value,
			isDisabled: () => E.value,
			isValid: () => C.value,
			isInvalid: () => w.value
		}), (e, t) => (l(), r("label", { class: c(["radio", {
			"radio--disabled": p(E),
			"radio--active": p(T),
			"radio--invalid": p(w),
			"radio--valid": p(C)
		}]) }, [g(i("input", s({
			"onUpdate:modelValue": t[0] ||= (e) => b.value = e,
			value: a.value,
			type: "radio",
			disabled: p(E),
			class: "radio__input"
		}, f(y, !0)), null, 16, _), [[h, b.value]]), d(e.$slots, "default")], 2));
	}
});
//#endregion
export { v as default };

//# sourceMappingURL=RadioRoot.js.map