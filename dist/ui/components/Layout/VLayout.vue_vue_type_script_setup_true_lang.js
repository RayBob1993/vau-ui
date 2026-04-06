import { Layout as e } from "../../../core/components/Layout/index.js";
import { createBlock as t, createSlots as n, createVNode as r, defineComponent as i, openBlock as a, renderSlot as o, unref as s, useSlots as c, withCtx as l } from "vue";
//#region src/lib/ui/components/Layout/VLayout.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ i({
	__name: "VLayout",
	setup(i) {
		let u = c();
		return (i, c) => (a(), t(s(e).Root, null, n({
			default: l(() => [r(s(e).Body, null, {
				default: l(() => [o(i.$slots, "default")]),
				_: 3
			})]),
			_: 2
		}, [u?.header ? {
			name: "header",
			fn: l(() => [o(i.$slots, "header")]),
			key: "0"
		} : void 0, u?.footer ? {
			name: "footer",
			fn: l(() => [o(i.$slots, "footer")]),
			key: "1"
		} : void 0]), 1024));
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=VLayout.vue_vue_type_script_setup_true_lang.js.map