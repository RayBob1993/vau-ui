import { Flex as e } from "../../../core/components/Flex/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, normalizeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Flex/VFlex.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VFlex",
	props: {
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
		return (n, u) => (a(), t(s(e).Root, i(r(l)), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VFlex.js.map