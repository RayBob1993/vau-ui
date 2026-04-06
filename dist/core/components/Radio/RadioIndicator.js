import { useRadioIndicator as e } from "./composables/useRadioIndicator.js";
import { useRadioRootContext as t } from "./context/useRadioRootContext.js";
import { createElementBlock as n, createTextVNode as r, defineComponent as i, normalizeClass as a, openBlock as o, renderSlot as s, toDisplayString as c, unref as l } from "vue";
//#region src/lib/core/components/Radio/RadioIndicator.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ i({
	__name: "RadioIndicator",
	setup(i) {
		let { isDisabled: u, isActive: d, isValid: f, isInvalid: p } = e({ radioRootContext: t() });
		return (e, t) => (o(), n("span", { class: a(["radio-indicator", {
			"radio-indicator--disabled": l(u),
			"radio-indicator--active": l(d),
			"radio-indicator--valid": l(f),
			"radio-indicator--invalid": l(p)
		}]) }, [s(e.$slots, "default", {
			isDisabled: l(u),
			isActive: l(d),
			isValid: l(f),
			isInvalid: l(p)
		}, () => [r(c(l(d) ? "◉" : "⭘"), 1)])], 2));
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=RadioIndicator.js.map