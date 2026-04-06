import { useFormContext as e } from "../Form/context/useFormContext.js";
import { useSwitchRoot as t } from "./composables/useSwitchRoot.js";
import { SwitchRootContextKey as n } from "./context/key.js";
import { createElementBlock as r, createElementVNode as i, defineComponent as a, mergeModels as o, openBlock as s, provide as c, renderSlot as l, unref as u, useModel as d, vModelCheckbox as f, withDirectives as p } from "vue";
//#region src/lib/core/components/Switch/SwitchRoot.vue?vue&type=script&setup=true&lang.ts
var m = { class: "switch" }, h = ["disabled"], g = /* @__PURE__ */ a({
	__name: "SwitchRoot",
	props: /* @__PURE__ */ o({
		disabled: { type: Boolean },
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: {
			type: Boolean,
			required: !0
		},
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(a) {
		let o = a, g = d(a, "modelValue"), { formRootContext: _, formItemContext: v, isValid: y, isInvalid: b } = e(), { isDisabled: x, isActive: S } = t({
			formRootContext: _,
			formItemContext: v,
			props: () => o,
			modelValue: () => g.value
		});
		return c(n, {
			props: () => o,
			isActive: () => S.value,
			isDisabled: () => x.value,
			isValid: () => y.value,
			isInvalid: () => b.value
		}), (e, t) => (s(), r("label", m, [p(i("input", {
			"onUpdate:modelValue": t[0] ||= (e) => g.value = e,
			type: "checkbox",
			disabled: u(x),
			class: "switch__input"
		}, null, 8, h), [[f, g.value]]), l(e.$slots, "default")]));
	}
});
//#endregion
export { g as default };

//# sourceMappingURL=SwitchRoot.vue_vue_type_script_setup_true_lang.js.map