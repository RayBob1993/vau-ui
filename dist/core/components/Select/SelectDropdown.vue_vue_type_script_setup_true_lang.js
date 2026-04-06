import { useSelectRootContext as e } from "./context/useSelectRootContext.js";
import { computed as t, createElementBlock as n, defineComponent as r, openBlock as i, renderSlot as a, toValue as o, vShow as s, withDirectives as c } from "vue";
//#region src/lib/core/components/Select/SelectDropdown.vue?vue&type=script&setup=true&lang.ts
var l = { class: "select-dropdown" }, u = /* @__PURE__ */ r({
	__name: "SelectDropdown",
	setup(r) {
		let u = e(), d = t(() => !!o(u?.isOpen));
		return (e, t) => c((i(), n("div", l, [a(e.$slots, "default")], 512)), [[s, d.value]]);
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=SelectDropdown.vue_vue_type_script_setup_true_lang.js.map