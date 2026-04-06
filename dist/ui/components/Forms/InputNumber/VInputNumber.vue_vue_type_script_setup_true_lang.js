import { INPUT_NUMBER_ACTIONS as e } from "../../../../core/components/InputNumber/constants/index.js";
import { InputNumber as t } from "../../../../core/components/InputNumber/index.js";
import { createBlock as n, createVNode as r, defineComponent as i, mergeModels as a, mergeProps as o, openBlock as s, unref as c, useModel as l, withCtx as u } from "vue";
//#region src/lib/ui/components/Forms/InputNumber/VInputNumber.vue?vue&type=script&setup=true&lang.ts
var d = /* @__PURE__ */ i({
	__name: "VInputNumber",
	props: /* @__PURE__ */ a({
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
	setup(i) {
		let a = i, d = l(i, "modelValue");
		return (i, l) => (s(), n(c(t).Root, o(a, {
			modelValue: d.value,
			"onUpdate:modelValue": l[0] ||= (e) => d.value = e
		}), {
			default: u(() => [
				r(c(t).Button, { action: c(e).DECREMENT }, null, 8, ["action"]),
				r(c(t).Input),
				r(c(t).Button, { action: c(e).INCREMENT }, null, 8, ["action"])
			]),
			_: 1
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { d as default };

//# sourceMappingURL=VInputNumber.vue_vue_type_script_setup_true_lang.js.map