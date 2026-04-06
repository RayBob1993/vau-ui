import { useFormContext as e } from "../Form/context/useFormContext.js";
import { INPUT_NUMBER_MAX as t, INPUT_NUMBER_MIN as n } from "./constants/index.js";
import { useInputNumberRoot as r } from "./composables/useInputNumberRoot.js";
import { InputNumberRootContextKey as i } from "./context/key.js";
import { createElementBlock as a, defineComponent as o, mergeModels as s, normalizeClass as c, openBlock as l, provide as u, renderSlot as d, unref as f, useModel as p } from "vue";
//#region src/lib/core/components/InputNumber/InputNumberRoot.vue?vue&type=script&setup=true&lang.ts
var m = /* @__PURE__ */ o({
	__name: "InputNumberRoot",
	props: /* @__PURE__ */ s({
		mousewheel: { type: [Boolean, Number] },
		min: { default: n },
		max: { default: t },
		step: { default: 1 },
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		autocomplete: {},
		direction: {},
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: { default: 0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(t) {
		let n = t, o = p(t, "modelValue"), { formRootContext: s, formItemContext: m, isValid: h, isInvalid: g } = e(), { step: _, isDisabled: v, isDecrementDisabled: y, isIncrementDisabled: b, handleDecrement: x, handleIncrement: S, setModelValue: C } = r({
			formRootContext: s,
			formItemContext: m,
			props: () => n,
			modelValue: () => o.value,
			onUpdateModelValue: (e) => {
				o.value = e;
			},
			onDecrement: (e) => {
				o.value = e;
			},
			onIncrement: (e) => {
				o.value = e;
			}
		});
		return u(i, {
			props: () => n,
			isDisabled: () => v.value,
			modelValue: () => o.value,
			step: () => _.value,
			isDecrementDisabled: () => y.value,
			isIncrementDisabled: () => b.value,
			handleDecrement: x,
			handleIncrement: S,
			setModelValue: C
		}), (e, n) => (l(), a("div", { class: c(["input-number", {
			[`input-number--direction-${t.direction}`]: t.direction,
			"input-number--invalid": f(g),
			"input-number--valid": f(h)
		}]) }, [d(e.$slots, "default")], 2));
	}
});
//#endregion
export { m as default };

//# sourceMappingURL=InputNumberRoot.js.map