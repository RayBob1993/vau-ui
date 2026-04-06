import { Accordion as e } from "../../../core/components/Accordion/index.js";
import { createBlock as t, defineComponent as n, mergeModels as r, mergeProps as i, openBlock as a, renderSlot as o, toHandlers as s, unref as c, useModel as l, withCtx as u } from "vue";
//#region src/lib/ui/components/Accordion/VAccordion.vue?vue&type=script&setup=true&lang.ts
var d = /* @__PURE__ */ n({
	__name: "VAccordion",
	props: /* @__PURE__ */ r({
		multiple: { type: Boolean },
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		theme: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ r(["change"], ["update:modelValue"]),
	setup(n, { emit: r }) {
		let d = n, f = r, p = l(n, "modelValue");
		return (n, r) => (a(), t(c(e).Root, i(d, {
			modelValue: p.value,
			"onUpdate:modelValue": r[0] ||= (e) => p.value = e
		}, s(f)), {
			default: u(() => [o(n.$slots, "default")]),
			_: 3
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { d as default };

//# sourceMappingURL=VAccordion.js.map