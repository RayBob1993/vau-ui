import { useButtonRoot as e } from "./composables/useButtonRoot.js";
import { useFormContext as t } from "../Form/context/useFormContext.js";
import { Primitive as n } from "../Primitive/index.js";
import { createBlock as r, defineComponent as i, normalizeClass as a, openBlock as o, renderSlot as s, unref as c, withCtx as l } from "vue";
//#region src/lib/core/components/Button/ButtonRoot.vue?vue&type=script&setup=true&lang.ts
var u = /* @__PURE__ */ i({
	__name: "ButtonRoot",
	props: {
		loading: { type: Boolean },
		disabled: { type: Boolean },
		plain: { type: Boolean },
		wide: { type: Boolean },
		type: { default: "button" },
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		asChild: { type: Boolean },
		as: { default: "button" }
	},
	setup(i) {
		let u = i, { formRootContext: d, formItemContext: f } = t(), { isDisabled: p } = e({
			formRootContext: d,
			formItemContext: f,
			props: () => u
		});
		return (e, t) => (o(), r(c(n).Root, {
			as: i.as,
			"as-child": i.asChild,
			class: a(["button", [{
				"button--disabled": c(p),
				"button--loading": i.loading,
				"button--plain": i.plain,
				"button--wide": i.wide,
				[`button--theme-${i.theme}`]: i.theme,
				[`button--size-${i.size}`]: i.size,
				[`button--size-xs-${i.sizeXs}`]: i.sizeXs,
				[`button--size-sm-${i.sizeSm}`]: i.sizeSm,
				[`button--size-md-${i.sizeMd}`]: i.sizeMd,
				[`button--size-lg-${i.sizeLg}`]: i.sizeLg,
				[`button--size-xl-${i.sizeXl}`]: i.sizeXl,
				[`button--size-xxl-${i.sizeXxl}`]: i.sizeXxl
			}]]),
			disabled: c(p),
			type: i.type
		}, {
			default: l(() => [s(e.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class",
			"disabled",
			"type"
		]));
	}
});
//#endregion
export { u as default };

//# sourceMappingURL=ButtonRoot.vue_vue_type_script_setup_true_lang.js.map