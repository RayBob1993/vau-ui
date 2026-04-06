import { useCheckboxRootContext as e } from "./context/useCheckboxRootContext.js";
import { useCheckboxIndicator as t } from "./composables/useCheckboxIndicator.js";
import { createElementBlock as n, createTextVNode as r, defineComponent as i, normalizeClass as a, openBlock as o, renderSlot as s, toDisplayString as c, unref as l } from "vue";
//#region src/lib/core/components/Checkbox/CheckboxIndicator.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ i({
	__name: "CheckboxIndicator",
	setup(i) {
		let { isDisabled: u, isActive: d, isIndeterminate: f, isValid: p, isInvalid: m } = t({ checkboxRootContext: e() });
		return (e, t) => (o(), n("span", { class: a(["checkbox-indicator", {
			"checkbox-indicator--disabled": l(u),
			"checkbox-indicator--active": l(d),
			"checkbox-indicator--indeterminate": l(f),
			"checkbox-indicator--valid": l(p),
			"checkbox-indicator--invalid": l(m)
		}]) }, [s(e.$slots, "default", {
			isDisabled: l(u),
			isActive: l(d),
			isIndeterminate: l(f),
			isValid: l(p),
			isInvalid: l(m)
		}, () => [r(c(l(d) ? "☑" : "□"), 1)])], 2));
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=CheckboxIndicator.js.map