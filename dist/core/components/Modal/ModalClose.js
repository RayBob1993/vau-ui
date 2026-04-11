import { IconRender as e } from "../ConfigProvider/icon-render.js";
import { useConfigProviderRootContext as t } from "../ConfigProvider/context/useConfigProviderRootContext.js";
import { useModalRootContext as n } from "./context/useModalRootContext.js";
import { useModalClose as r } from "./composables/useModalClose.js";
import { Fragment as i, createBlock as a, createElementBlock as o, createTextVNode as s, defineComponent as c, openBlock as l, renderSlot as u, unref as d } from "vue";
//#region src/lib/core/components/Modal/ModalClose.vue?vue&type=script&setup=true&lang.ts
var f = /* @__PURE__ */ c({
	__name: "ModalClose",
	setup(c) {
		let { close: f, icon: p } = r({
			modalRootContext: n(),
			configProviderRootContext: t()
		});
		return (t, n) => (l(), o("button", {
			type: "button",
			class: "modal-close",
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

//# sourceMappingURL=ModalClose.js.map