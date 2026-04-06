import { useInputRangeSlider as e } from "./composables/useInputRangeSlider.js";
import { useInputRangeRootContext as t } from "./context/useInputRangeRootContext.js";
import { createElementBlock as n, defineComponent as r, openBlock as i, unref as a } from "vue";
//#region src/lib/core/components/InputRange/InputRangeSlider.vue?vue&type=script&setup=true&lang.ts
var o = ["aria-disabled"], s = /* @__PURE__ */ r({
	__name: "InputRangeSlider",
	setup(r) {
		let { isDisabled: s } = e({ inputRangeRootContext: t() });
		return (e, t) => (i(), n("div", {
			class: "input-range-slider",
			"aria-disabled": a(s)
		}, null, 8, o));
	}
});
//#endregion
export { s as default };

//# sourceMappingURL=InputRangeSlider.js.map