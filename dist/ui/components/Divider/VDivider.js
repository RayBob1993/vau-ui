import { Divider as e } from "../../../core/components/Divider/index.js";
import { createBlock as t, createCommentVNode as n, defineComponent as r, guardReactiveProps as i, normalizeProps as a, openBlock as o, renderSlot as s, unref as c, useSlots as l, withCtx as u } from "vue";
//#region src/lib/ui/components/Divider/VDivider.vue?vue&type=script&setup=true&lang.ts
var d = /* @__PURE__ */ r({
	__name: "VDivider",
	props: { direction: {} },
	setup(r) {
		let d = r, f = l();
		return (r, l) => (o(), t(c(e).Root, a(i(d)), {
			default: u(() => [f?.default ? (o(), t(c(e).Content, { key: 0 }, {
				default: u(() => [s(r.$slots, "default")]),
				_: 3
			})) : n("", !0)]),
			_: 3
		}, 16));
	}
});
//#endregion
export { d as default };

//# sourceMappingURL=VDivider.js.map