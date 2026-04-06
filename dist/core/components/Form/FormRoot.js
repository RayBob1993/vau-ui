import { FormRootContextKey as e } from "./context/key.js";
import { useFormRoot as t } from "./composables/useFormRoot.js";
import { createElementBlock as n, defineComponent as r, mergeModels as i, normalizeClass as a, openBlock as o, provide as s, renderSlot as c, unref as l, useModel as u, withModifiers as d } from "vue";
//#region src/lib/core/components/Form/FormRoot.vue?vue&type=script&setup=true&lang.ts
var f = /* @__PURE__ */ r({
	__name: "FormRoot",
	props: /* @__PURE__ */ i({
		rules: {},
		disabled: { type: Boolean },
		scrollToError: { type: Boolean }
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ i([
		"submit",
		"valid",
		"invalid"
	], ["update:modelValue"]),
	setup(r, { expose: i, emit: f }) {
		let p = r, m = f, h = u(r, "modelValue"), { isValid: g, registerFormItem: _, unregisterFormItem: v, validate: y, clearValidate: b, reset: x } = t({
			modelValue: () => h.value,
			onValid: () => {
				m("valid");
			},
			onInvalid: () => {
				m("invalid");
			}
		});
		async function S() {
			m("submit", {
				isValid: await y(),
				reset: x
			});
		}
		return s(e, {
			props: p,
			modelValue: h,
			registerFormItem: _,
			unregisterFormItem: v
		}), i({
			validate: y,
			clearValidate: b,
			reset: x
		}), (e, t) => (o(), n("form", {
			class: a(["form", { "form--disabled": r.disabled }]),
			onSubmit: d(S, ["prevent"])
		}, [c(e.$slots, "default", { isValid: l(g) })], 34));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=FormRoot.js.map