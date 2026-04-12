import { IconRender as e } from "../ConfigProvider/icon-render.js";
import { useConfigProviderRootContext as t } from "../ConfigProvider/context/useConfigProviderRootContext.js";
import { useAlertClose as n } from "./composable/useAlertClose.js";
import { Fragment as r, createBlock as i, createElementBlock as a, createTextVNode as o, defineComponent as s, openBlock as c, renderSlot as l, unref as u } from "vue";
//#region src/lib/core/components/Alert/AlertClose.vue?vue&type=script&setup=true&lang.ts
var d = {
	class: "alert-close",
	type: "button",
	"aria-label": "Close",
	tabindex: "0"
}, f = /* @__PURE__ */ s({
	__name: "AlertClose",
	setup(s) {
		let { icon: f } = n({ configProviderRootContext: t() });
		return (t, n) => (c(), a("button", d, [l(t.$slots, "default", {}, () => [u(f) ? (c(), i(u(e), {
			key: 0,
			render: u(f)
		}, null, 8, ["render"])) : (c(), a(r, { key: 1 }, [o(" × ")], 64))])]));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=AlertClose.js.map