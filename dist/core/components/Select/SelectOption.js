import { useSelectOption as e } from "./composables/useSelectOption.js";
import { useSelectRootContext as t } from "./context/useSelectRootContext.js";
import { createElementBlock as n, createTextVNode as r, defineComponent as i, normalizeClass as a, openBlock as o, renderSlot as s, toDisplayString as c, unref as l } from "vue";
//#region src/lib/core/components/Select/SelectOption.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ i({
	__name: "SelectOption",
	props: {
		value: {},
		title: {},
		disabled: { type: Boolean }
	},
	setup(i) {
		let u = i, { isActive: d, isDisabled: f, handleChange: p } = e({
			selectRootContext: t(),
			props: () => u
		});
		return (e, t) => (o(), n("div", {
			class: a(["select-option", {
				"select-option--active": l(d),
				"select-option--disabled": l(f)
			}]),
			onClick: t[0] ||= (e) => l(p)(i.value)
		}, [s(e.$slots, "default", {
			isActive: l(d),
			isDisabled: l(f)
		}, () => [r(c(i.title), 1)])], 2));
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=SelectOption.js.map