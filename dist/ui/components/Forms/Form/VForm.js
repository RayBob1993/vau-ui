import { Form as e } from "../../../../core/components/Form/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, mergeModels as i, mergeProps as a, normalizeProps as o, openBlock as s, renderSlot as c, toHandlers as l, unref as u, useModel as d, withCtx as f } from "vue";
//#region src/lib/ui/components/Forms/Form/VForm.vue?vue&type=script&setup=true&lang.ts
var p = /* @__PURE__ */ n({
	__name: "VForm",
	props: /* @__PURE__ */ i({
		rules: {},
		disabled: { type: Boolean },
		scrollToError: { type: Boolean }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ i([
		"submit",
		"valid",
		"invalid"
	], ["update:modelValue"]),
	setup(n, { emit: i }) {
		let p = n, m = i, h = d(n, "modelValue");
		return (n, i) => (s(), t(u(e).Root, a({
			modelValue: h.value,
			"onUpdate:modelValue": i[0] ||= (e) => h.value = e
		}, p, l(m)), {
			default: f((e) => [c(n.$slots, "default", o(r(e)))]),
			_: 3
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { p as default };

//# sourceMappingURL=VForm.js.map