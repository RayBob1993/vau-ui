import { Primitive as e } from "../Primitive/index.js";
import { createBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a, unref as o, withCtx as s } from "vue";
//#region src/lib/core/components/Text/TextRoot.vue?vue&type=script&setup=true&lang.ts
var c = /* @__PURE__ */ n({
	__name: "TextRoot",
	props: {
		tag: {},
		uppercase: { type: Boolean },
		underline: { type: Boolean },
		weight: {},
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		asChild: { type: Boolean },
		as: { default: "div" }
	},
	setup(n) {
		return (c, l) => (i(), t(o(e).Root, {
			as: n.as,
			"as-child": n.asChild,
			class: r(["text", {
				"text--uppercase": n.uppercase,
				"text--underline": n.underline,
				[`text--size-${n.size}`]: n.size,
				[`text--size-xs-${n.sizeXs}`]: n.sizeXs,
				[`text--size-sm-${n.sizeSm}`]: n.sizeSm,
				[`text--size-md-${n.sizeMd}`]: n.sizeMd,
				[`text--size-lg-${n.sizeLg}`]: n.sizeLg,
				[`text--size-xl-${n.sizeXl}`]: n.sizeXl,
				[`text--size-xxl-${n.sizeXxl}`]: n.sizeXxl,
				[`text--theme-${n.theme}`]: n.theme,
				[`text--weight-${n.weight}`]: n.weight
			}])
		}, {
			default: s(() => [a(c.$slots, "default")]),
			_: 3
		}, 8, [
			"as",
			"as-child",
			"class"
		]));
	}
});
//#endregion
export { c as default };

//# sourceMappingURL=TextRoot.js.map