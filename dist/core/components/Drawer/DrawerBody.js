import { Scrollbar as e } from "../Scrollbar/index.js";
import { createElementBlock as t, createVNode as n, defineComponent as r, openBlock as i, renderSlot as a, unref as o, withCtx as s } from "vue";
//#region src/lib/core/components/Drawer/DrawerBody.vue?vue&type=script&setup=true&lang.ts
var c = { class: "drawer-body" }, l = /* @__PURE__ */ r({
	__name: "DrawerBody",
	setup(r) {
		return (r, l) => (i(), t("div", c, [n(o(e).Root, { class: "drawer-body__scrollbar" }, {
			default: s(() => [a(r.$slots, "default")]),
			_: 3
		})]));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=DrawerBody.js.map