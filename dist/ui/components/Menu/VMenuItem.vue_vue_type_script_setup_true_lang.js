import { Menu as e } from "../../../core/components/Menu/index.js";
import { createBlock as t, createPropsRestProxy as n, defineComponent as r, mergeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Menu/VMenuItem.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ r({
	__name: "VMenuItem",
	props: {
		active: { type: Boolean },
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: { default: "div" }
	},
	setup(r) {
		let l = n(r, ["as"]);
		return (n, u) => (a(), t(s(e).Item, i(l, { as: r.as }), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16, ["as"]));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VMenuItem.vue_vue_type_script_setup_true_lang.js.map