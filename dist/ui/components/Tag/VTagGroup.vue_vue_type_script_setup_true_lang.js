import { Tag as e } from "../../../core/components/Tag/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, normalizeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Tag/VTagGroup.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VTagGroup",
	props: { direction: {} },
	setup(n) {
		let l = n;
		return (n, u) => (a(), t(s(e).Group, i(r(l)), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VTagGroup.vue_vue_type_script_setup_true_lang.js.map