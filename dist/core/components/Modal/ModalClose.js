import { useModalRootContext as e } from "./context/useModalRootContext.js";
import { useModalClose as t } from "./composables/useModalClose.js";
import { useConfigProviderRootContext as n } from "../ConfigProvider/context/useConfigProviderRootContext.js";
import { IconRender as r } from "../ConfigProvider/icon-render.js";
import { Fragment as i, createBlock as a, createElementBlock as o, createTextVNode as s, defineComponent as c, openBlock as l, renderSlot as u, unref as d } from "vue";
//#region src/lib/core/components/Modal/ModalClose.vue?vue&type=script&setup=true&lang.ts
var f = /* @__PURE__ */ c({
	__name: "ModalClose",
	setup(c) {
		let { close: f, icon: p } = t({
			modalRootContext: e(),
			configProviderRootContext: n()
		});
		return (e, t) => (l(), o("button", {
			type: "button",
			class: "modal-close",
			onClick: t[0] ||= (...e) => d(f) && d(f)(...e)
		}, [u(e.$slots, "default", {}, () => [d(p) ? (l(), a(d(r), {
			key: 0,
			render: d(p)
		}, null, 8, ["render"])) : (l(), o(i, { key: 1 }, [s(" × ")], 64))])]));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=ModalClose.js.map