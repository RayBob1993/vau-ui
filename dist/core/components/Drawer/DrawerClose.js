import { IconRender as e } from "../ConfigProvider/icon-render.js";
import { useConfigProviderRootContext as t } from "../ConfigProvider/context/useConfigProviderRootContext.js";
import { useDrawerRootContext as n } from "./context/useDrawerRootContext.js";
import { useDrawerClose as r } from "./composables/useDrawerClose.js";
import { Fragment as i, createBlock as a, createElementBlock as o, createTextVNode as s, defineComponent as c, openBlock as l, renderSlot as u, unref as d } from "vue";
//#region src/lib/core/components/Drawer/DrawerClose.vue?vue&type=script&setup=true&lang.ts
var f = /* @__PURE__ */ c({
	__name: "DrawerClose",
	setup(c) {
		let { close: f, icon: p } = r({
			drawerRootContext: n(),
			configProviderRootContext: t()
		});
		return (t, n) => (l(), o("button", {
			type: "button",
			class: "drawer-close",
			"aria-label": "Close",
			tabindex: "0",
			onClick: n[0] ||= (...e) => d(f) && d(f)(...e)
		}, [u(t.$slots, "default", {}, () => [d(p) ? (l(), a(d(e), {
			key: 0,
			render: d(p)
		}, null, 8, ["render"])) : (l(), o(i, { key: 1 }, [s(" × ")], 64))])]));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=DrawerClose.js.map