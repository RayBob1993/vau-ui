import { createBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i, resolveDynamicComponent as a, withCtx as o } from "vue";
//#region src/lib/core/components/Section/SectionTitle.vue?vue&type=script&setup=true&lang.ts
var s = /* @__PURE__ */ t({
	__name: "SectionTitle",
	props: { level: { default: "h1" } },
	setup(t) {
		return (s, c) => (r(), e(a(t.level), { class: n(["section-title", { [`section-title--level-${t.level}`]: t.level }]) }, {
			default: o(() => [i(s.$slots, "default")]),
			_: 3
		}, 8, ["class"]));
	}
});
//#endregion
export { s as default };

//# sourceMappingURL=SectionTitle.vue_vue_type_script_setup_true_lang.js.map