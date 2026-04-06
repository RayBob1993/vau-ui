import { FormItemContextKey as e } from "./context/key.js";
import { useFormRootContext as t } from "./context/useFormRootContext.js";
import { useFormItem as n } from "./composables/useFormItem.js";
import { computed as r, createCommentVNode as i, createElementBlock as a, createElementVNode as o, defineComponent as s, guardReactiveProps as c, normalizeClass as l, normalizeProps as u, openBlock as d, provide as f, renderSlot as p, unref as m, useSlots as h } from "vue";
//#region src/lib/core/components/Form/FormItem.vue?vue&type=script&setup=true&lang.ts
var g = {
	key: 0,
	class: "form-item__header"
}, _ = { class: "form-item__body" }, v = {
	key: 1,
	class: "form-item__footer"
}, y = /* @__PURE__ */ s({
	__name: "FormItem",
	props: {
		disabled: { type: Boolean },
		name: {}
	},
	emits: ["valid", "invalid"],
	setup(s, { expose: y, emit: b }) {
		let x = s, S = b, C = h(), { validationErrors: w, validationStatus: T, isDisabled: E, isRequired: D, registerField: O, unregisterField: k, reset: A, validate: j, clearValidateErrors: M } = n({
			formRootContext: t(),
			props: () => x,
			onValid: () => {
				S("valid");
			},
			onInvalid: () => {
				S("invalid");
			}
		}), N = r(() => ({
			validationStatus: T.value,
			isRequired: D.value,
			errors: w.value
		}));
		return f(e, {
			props: x,
			validationStatus: T,
			validationErrors: w,
			isRequired: D,
			isDisabled: E,
			registerField: O,
			unregisterField: k,
			reset: A,
			validate: j,
			clearValidateErrors: M
		}), y({
			reset: A,
			validate: j,
			clearValidateErrors: M
		}), (e, t) => (d(), a("div", { class: l(["form-item", [{
			"form-item--disabled": m(E),
			"form-item--required": m(D),
			"form-item--invalid": m(T).isError,
			"form-item--validating": m(T).isValidating,
			"form-item--valid": m(T).isSuccess
		}]]) }, [
			C?.header ? (d(), a("div", g, [p(e.$slots, "header", u(c(N.value)))])) : i("", !0),
			o("div", _, [p(e.$slots, "default", u(c(N.value)))]),
			C.footer ? (d(), a("div", v, [p(e.$slots, "footer", u(c(N.value)))])) : i("", !0)
		], 2));
	}
});
//#endregion
export { y as default };

//# sourceMappingURL=FormItem.vue_vue_type_script_setup_true_lang.js.map