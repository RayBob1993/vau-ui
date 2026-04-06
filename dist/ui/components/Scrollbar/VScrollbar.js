import { Scrollbar as e } from "../../../core/components/Scrollbar/index.js";
import { createBlock as t, defineComponent as n, mergeProps as r, openBlock as i, renderSlot as a, toHandlers as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Scrollbar/VScrollbar.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VScrollbar",
	props: {
		vertical: { type: Boolean },
		horizontal: { type: Boolean },
		draggableMultiplier: {},
		infiniteScrollOffset: {},
		debounceDelay: {},
		draggable: { type: Boolean },
		hidden: { type: Boolean },
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		theme: {}
	},
	emits: [
		"scrollEndY",
		"scrollEndX",
		"scroll",
		"mousedown",
		"mouseleave",
		"mouseup",
		"mousemove"
	],
	setup(n, { emit: l }) {
		let u = n, d = l;
		return (n, l) => (i(), t(s(e).Root, r(u, o(d)), {
			default: c(() => [a(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VScrollbar.js.map