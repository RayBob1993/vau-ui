import { Radio as e } from "../../../../core/components/Radio/index.js";
import { createBlock as t, createVNode as n, defineComponent as r, mergeModels as i, mergeProps as a, openBlock as o, renderSlot as s, unref as c, useModel as l, withCtx as u } from "vue";
//#region src/lib/ui/components/Forms/Radio/VRadio.vue?vue&type=script&setup=true&lang.ts
var d = /* @__PURE__ */ r({
	__name: "VRadio",
	props: /* @__PURE__ */ i({
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
	emits: ["update:modelValue"],
	setup(r) {
		let i = r, d = l(r, "modelValue");
		return (r, l) => (o(), t(c(e).Root, a(i, {
			modelValue: d.value,
			"onUpdate:modelValue": l[0] ||= (e) => d.value = e
		}), {
			default: u(() => [n(c(e).Indicator), n(c(e).Title, null, {
				default: u(() => [s(r.$slots, "default")]),
				_: 3
			})]),
			_: 3
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { d as default };

//# sourceMappingURL=VRadio.vue_vue_type_script_setup_true_lang.js.map