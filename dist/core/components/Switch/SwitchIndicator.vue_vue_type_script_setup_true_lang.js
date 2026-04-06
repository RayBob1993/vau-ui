import { useSwitchIndicator as e } from "./composables/useSwitchIndicator.js";
import { useSwitchRootContext as t } from "./context/useSwitchRootContext.js";
import { createElementBlock as n, defineComponent as r, normalizeClass as i, openBlock as a, unref as o } from "vue";
//#region src/lib/core/components/Switch/SwitchIndicator.vue?vue&type=script&setup=true&lang.ts
var s = /* @__PURE__ */ r({
	__name: "SwitchIndicator",
	setup(r) {
		let { isDisabled: s, isActive: c, isValid: l, isInvalid: u } = e({ switchRootContext: t() });
		return (e, t) => (a(), n("span", { class: i(["switch-indicator", {
			"switch-indicator--disabled": o(s),
			"switch-indicator--active": o(c),
			"switch-indicator--valid": o(l),
			"switch-indicator--invalid": o(u)
		}]) }, null, 2));
	}
});
//#endregion
export { s as default };

//# sourceMappingURL=SwitchIndicator.vue_vue_type_script_setup_true_lang.js.map