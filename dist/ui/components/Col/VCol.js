import { Grid as e } from "../../../core/components/Grid/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, normalizeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Col/VCol.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VCol",
	props: {
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		order: {},
		orderXs: {},
		orderSm: {},
		orderMd: {},
		orderLg: {},
		orderXl: {},
		orderXxl: {},
		offset: {},
		offsetXs: {},
		offsetSm: {},
		offsetMd: {},
		offsetLg: {},
		offsetXl: {},
		offsetXxl: {}
	},
	setup(n) {
		let l = n;
		return (n, u) => (a(), t(s(e).Col, i(r(l)), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VCol.js.map