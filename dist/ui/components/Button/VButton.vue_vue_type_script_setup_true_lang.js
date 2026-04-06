import { Button as e } from "../../../core/components/Button/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, normalizeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Button/VButton.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VButton",
	props: {
		loading: { type: Boolean },
		disabled: { type: Boolean },
		plain: { type: Boolean },
		wide: { type: Boolean },
		type: { default: "button" },
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(n) {
		let l = n;
		return (n, u) => (a(), t(s(e).Root, i(r(l)), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VButton.vue_vue_type_script_setup_true_lang.js.map