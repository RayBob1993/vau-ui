import { Primitive as e } from "../Primitive/index.js";
import { createBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a, unref as o, withCtx as s } from "vue";
//#region src/lib/core/components/Menu/MenuItem.vue?vue&type=script&setup=true&lang.ts
var c = /* @__PURE__ */ n({
	__name: "MenuItem",
	props: {
		active: { type: Boolean },
		disabled: { type: Boolean },
		asChild: { type: Boolean },
		as: { default: "div" }
	},
	setup(n) {
		return (c, l) => (i(), t(o(e).Root, {
			class: r(["menu-item", {
				"menu-item--active": n.active,
				"menu-item--disabled": n.disabled
			}]),
			as: n.as,
			"as-child": n.asChild
		}, {
			default: s(() => [a(c.$slots, "default")]),
			_: 3
		}, 8, [
			"class",
			"as",
			"as-child"
		]));
	}
});
//#endregion
export { c as default };

//# sourceMappingURL=MenuItem.js.map