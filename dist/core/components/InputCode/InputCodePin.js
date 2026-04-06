import { useInputCodePin as e } from "./composables/useInputCodePin.js";
import { useInputCodeRootContext as t } from "./context/useInputCodeRootContext.js";
import { createElementBlock as n, defineComponent as r, openBlock as i, unref as a } from "vue";
//#region src/lib/core/components/InputCode/InputCodePin.vue?vue&type=script&setup=true&lang.ts
var o = ["disabled", "aria-disabled"], s = /* @__PURE__ */ r({
	__name: "InputCodePin",
	setup(r) {
		let { isDisabled: s } = e({ inputCodeRootContext: t() });
		return (e, t) => (i(), n("input", {
			type: "text",
			disabled: a(s),
			"aria-disabled": a(s),
			class: "input-code-pin"
		}, null, 8, o));
	}
});
//#endregion
export { s as default };

//# sourceMappingURL=InputCodePin.js.map