import { Grid as e } from "../../../core/components/Grid/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, normalizeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Row/VRow.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VRow",
	props: {
		guttersX: {
			type: Boolean,
			default: !0
		},
		guttersY: { type: Boolean },
		wrap: {
			type: Boolean,
			default: !0
		},
		align: {},
		alignXs: {},
		alignSm: {},
		alignMd: {},
		alignLg: {},
		alignXl: {},
		alignXxl: {},
		justify: {},
		justifyXs: {},
		justifySm: {},
		justifyMd: {},
		justifyLg: {},
		justifyXl: {},
		justifyXxl: {},
		direction: {}
	},
	setup(n) {
		let l = n;
		return (n, u) => (a(), t(s(e).Row, i(r(l)), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VRow.vue_vue_type_script_setup_true_lang.js.map