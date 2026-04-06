import { Flex as e } from "../Flex/index.js";
import { createBlock as t, createPropsRestProxy as n, defineComponent as r, mergeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/core/components/Grid/Row.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ r({
	__name: "Row",
	props: {
		guttersX: {
			type: Boolean,
			default: !0
		},
		guttersY: {
			type: Boolean,
			default: !1
		},
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
	setup(r) {
		let l = n(r, [
			"guttersY",
			"guttersX",
			"wrap"
		]);
		return (n, u) => (a(), t(s(e).Root, i(l, {
			wrap: r.wrap,
			class: ["row", {
				"row--gutters-x": r.guttersX,
				"row--gutters-y": r.guttersY
			}]
		}), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16, ["wrap", "class"]));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=Row.vue_vue_type_script_setup_true_lang.js.map