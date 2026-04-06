import { InputCode as e } from "../../../../core/components/InputCode/index.js";
import { Fragment as t, createBlock as n, createElementBlock as r, defineComponent as i, mergeModels as a, mergeProps as o, openBlock as s, renderList as c, unref as l, useModel as u, withCtx as d } from "vue";
//#region src/lib/ui/components/Forms/InputCode/VInputCode.vue?vue&type=script&setup=true&lang.ts
var f = /* @__PURE__ */ i({
	__name: "VInputCode",
	props: /* @__PURE__ */ a({
		length: {},
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
		let a = i, f = u(i, "modelValue");
		return (u, p) => (s(), n(l(e).Root, o(a, {
			modelValue: f.value,
			"onUpdate:modelValue": p[0] ||= (e) => f.value = e
		}), {
			default: d(() => [(s(!0), r(t, null, c(i.length, (t) => (s(), n(l(e).Pin, { key: `pin-${t}` }))), 128))]),
			_: 1
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=VInputCode.js.map