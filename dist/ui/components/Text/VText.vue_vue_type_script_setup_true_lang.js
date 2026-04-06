import { Text as e } from "../../../core/components/Text/index.js";
import { createBlock as t, defineComponent as n, guardReactiveProps as r, normalizeProps as i, openBlock as a, renderSlot as o, unref as s, withCtx as c } from "vue";
//#region src/lib/ui/components/Text/VText.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ n({
	__name: "VText",
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
		as: {}
	},
	setup(n) {
		let l = n;
		return (n, u) => (a(), t(s(e).Root, i(r(l)), {
			default: c(() => [o(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=VText.vue_vue_type_script_setup_true_lang.js.map