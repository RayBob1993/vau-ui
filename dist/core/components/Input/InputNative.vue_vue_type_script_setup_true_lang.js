import { useInputNative as e } from "./composables/useInputNative.js";
import { useInputBase as t } from "./composables/useInputBase.js";
import { useInputRootContext as n } from "./context/useInputRootContext.js";
import { createElementBlock as r, defineComponent as i, isRef as a, mergeProps as o, openBlock as s, toHandlers as c, unref as l, vModelDynamic as u, withDirectives as d } from "vue";
//#region src/lib/core/components/Input/InputNative.vue?vue&type=script&setup=true&lang.ts
var f = [
	"type",
	"inputmode",
	"readonly",
	"disabled",
	"autocomplete",
	"placeholder"
], p = /* @__PURE__ */ i({
	__name: "InputNative",
	setup(i) {
		let p = n(), { modelValue: m, listeners: h } = t({ inputRootContext: p }), { props: g } = e({ inputRootContext: p });
		return (e, t) => d((s(), r("input", o({
			"onUpdate:modelValue": t[0] ||= (e) => a(m) ? m.value = e : null,
			type: l(g).nativeType,
			inputmode: l(g).inputMode,
			readonly: l(g).readonly,
			disabled: l(g).disabled,
			autocomplete: l(g).autocomplete,
			placeholder: l(g).placeholder,
			class: "input-field input-field--input"
		}, c(l(h), !0)), null, 16, f)), [[u, l(m)]]);
	}
});
//#endregion
export { p as default };

//# sourceMappingURL=InputNative.vue_vue_type_script_setup_true_lang.js.map