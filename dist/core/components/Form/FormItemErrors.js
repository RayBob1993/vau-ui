import { useFormItemContext as e } from "./context/useFormItemContext.js";
import { Fragment as t, computed as n, createElementBlock as r, defineComponent as i, openBlock as a, renderList as o, toDisplayString as s } from "vue";
//#region src/lib/core/components/Form/FormItemErrors.vue?vue&type=script&setup=true&lang.ts
var c = { class: "form-item-errors" }, l = /* @__PURE__ */ i({
	__name: "FormItemErrors",
	setup(i) {
		let l = e(), u = n(() => l?.validationErrors.value ?? []);
		return (e, n) => (a(), r("div", c, [(a(!0), r(t, null, o(u.value, (e, t) => (a(), r("div", {
			key: `error-${t}`,
			class: "form-item-errors__item"
		}, s(e.message), 1))), 128))]));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=FormItemErrors.js.map