import { useFormContext as e } from "../Form/context/useFormContext.js";
import { useInputCodeRoot as t } from "./composables/useInputCodeRoot.js";
import { InputCodeRootContextKey as n } from "./context/key.js";
import { createElementBlock as r, defineComponent as i, mergeModels as a, normalizeClass as o, openBlock as s, provide as c, renderSlot as l, unref as u, useModel as d } from "vue";
//#region src/lib/core/components/InputCode/InputCodeRoot.vue?vue&type=script&setup=true&lang.ts
var f = /* @__PURE__ */ i({
	__name: "InputCodeRoot",
	props: /* @__PURE__ */ a({
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		autocomplete: {},
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
	emits: ["update:modelValue"],
	setup(i) {
		let a = i, f = d(i, "modelValue"), { formRootContext: p, formItemContext: m, isValid: h, isInvalid: g } = e(), { isDisabled: _ } = t({
			formRootContext: p,
			formItemContext: m,
			modelValue: () => f.value,
			props: () => a
		});
		return c(n, {
			props: () => a,
			isDisabled: () => _.value
		}), (e, t) => (s(), r("div", { class: o(["input-code", {
			"input-code--disabled": u(_),
			"input-code--invalid": u(g),
			"input-code--valid": u(h)
		}]) }, [l(e.$slots, "default")], 2));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=InputCodeRoot.js.map