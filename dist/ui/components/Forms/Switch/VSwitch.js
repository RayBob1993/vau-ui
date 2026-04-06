import { Switch as e } from "../../../../core/components/Switch/index.js";
import { createBlock as t, createVNode as n, defineComponent as r, mergeModels as i, mergeProps as a, openBlock as o, renderSlot as s, unref as c, useModel as l, withCtx as u } from "vue";
//#region src/lib/ui/components/Forms/Switch/VSwitch.vue?vue&type=script&setup=true&lang.ts
var d = /* @__PURE__ */ r({
	__name: "VSwitch",
	props: /* @__PURE__ */ i({
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

//# sourceMappingURL=VSwitch.js.map