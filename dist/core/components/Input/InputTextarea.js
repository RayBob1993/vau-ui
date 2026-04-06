import { useInputTextarea as e } from "./composables/useInputTextarea.js";
import { useInputBase as t } from "./composables/useInputBase.js";
import { useInputRootContext as n } from "./context/useInputRootContext.js";
import { createElementBlock as r, defineComponent as i, isRef as a, mergeProps as o, openBlock as s, toHandlers as c, unref as l, vModelText as u, withDirectives as d } from "vue";
//#region src/lib/core/components/Input/InputTextarea.vue?vue&type=script&setup=true&lang.ts
var f = [
	"readonly",
	"disabled",
	"autocomplete",
	"rows",
	"cols",
	"placeholder"
], p = /* @__PURE__ */ i({
	__name: "InputTextarea",
	setup(i) {
		let p = n(), { modelValue: m, listeners: h } = t({ inputRootContext: p }), { props: g } = e({ inputRootContext: p });
		return (e, t) => d((s(), r("textarea", o({
			"onUpdate:modelValue": t[0] ||= (e) => a(m) ? m.value = e : null,
			readonly: l(g).readonly,
			disabled: l(g).disabled,
			autocomplete: l(g).autocomplete,
			rows: l(g).rows,
			cols: l(g).cols,
			placeholder: l(g).placeholder,
			class: "input-field input-field--textarea"
		}, c(l(h), !0)), null, 16, f)), [[u, l(m)]]);
	}
});
//#endregion
export { p as default };

//# sourceMappingURL=InputTextarea.js.map