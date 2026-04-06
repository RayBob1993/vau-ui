import { useFormContext as e } from "../Form/context/useFormContext.js";
import { CheckboxRootContextKey as t } from "./context/key.js";
import { useCheckboxRoot as n } from "./composables/useCheckboxRoot.js";
import { createElementBlock as r, createElementVNode as i, defineComponent as a, mergeModels as o, mergeProps as s, normalizeClass as c, openBlock as l, provide as u, renderSlot as d, toHandlers as f, unref as p, useModel as m, useTemplateRef as h, vModelCheckbox as g, watch as _, withDirectives as v } from "vue";
//#region src/lib/core/components/Checkbox/CheckboxRoot.vue?vue&type=script&setup=true&lang.ts
var y = [
	"value",
	"disabled",
	"checked"
], b = /* @__PURE__ */ a({
	__name: "CheckboxRoot",
	props: /* @__PURE__ */ o({
		disabled: { type: Boolean },
		indeterminate: { type: Boolean },
		value: {},
		checked: { type: Boolean },
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: { type: [Boolean, Array] },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ o(["change"], ["update:modelValue"]),
	setup(a, { emit: o }) {
		let b = a, x = o, S = m(a, "modelValue"), { formRootContext: C, formItemContext: w, isValid: T, isInvalid: E } = e(), { isChecked: D, isDisabled: O, isIndeterminate: k } = n({
			formRootContext: C,
			formItemContext: w,
			props: () => b,
			modelValue: () => S.value
		}), A = h("inputRef");
		return _([A, k], ([e, t]) => {
			e && (e.indeterminate = !!t);
		}, { immediate: !0 }), u(t, {
			props: () => b,
			modelValue: () => S.value,
			isActive: () => D.value,
			isDisabled: () => O.value,
			isIndeterminate: () => k.value,
			isValid: () => T.value,
			isInvalid: () => E.value
		}), (e, t) => (l(), r("label", { class: c(["checkbox", {
			"checkbox--disabled": p(O),
			"checkbox--active": p(D),
			"checkbox--indeterminate": p(k),
			"checkbox--invalid": p(E),
			"checkbox--valid": p(T)
		}]) }, [v(i("input", s({
			ref_key: "inputRef",
			ref: A,
			"onUpdate:modelValue": t[0] ||= (e) => S.value = e,
			value: a.value,
			type: "checkbox",
			disabled: p(O),
			checked: p(D),
			class: "checkbox__input"
		}, f(x, !0)), null, 16, y), [[g, S.value]]), d(e.$slots, "default")], 2));
	}
});
//#endregion
export { b as default };

//# sourceMappingURL=CheckboxRoot.js.map