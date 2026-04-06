import { Tag as e } from "../../../core/components/Tag/index.js";
import { createBlock as t, defineComponent as n, mergeProps as r, openBlock as i, renderSlot as a, unref as o, withCtx as s } from "vue";
//#region src/lib/ui/components/Tag/VTag.vue?vue&type=script&setup=true&lang.ts
var c = /* @__PURE__ */ n({
	__name: "VTag",
	props: {
		value: {},
		canDelete: { type: Boolean },
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	},
	emits: ["delete"],
	setup(n, { emit: c }) {
		let l = n, u = c;
		return (n, c) => (i(), t(o(e).Root, r(l, { onDelete: c[0] ||= (e) => u("delete", e) }), {
			default: s(() => [a(n.$slots, "default")]),
			_: 3
		}, 16));
	}
});
//#endregion
export { c as default };

//# sourceMappingURL=VTag.vue_vue_type_script_setup_true_lang.js.map