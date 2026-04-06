import { Select as e } from "../../../../core/components/Select/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, normalizeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Forms/Select/VOption.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VOption",
	props: {
		value: {},
		title: {},
		disabled: { type: Boolean }
	},
	setup(n) {
		let l = n;
		return (n, u) => (a(), t(s(e).Option, i(r(l)), {
			default: c((e) => [o(n.$slots, "default", i(r(e)))]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VOption.vue_vue_type_script_setup_true_lang.js.map