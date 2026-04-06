import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Tag/TagGroup.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "TagGroup",
	props: { direction: {} },
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["tag-group", { [`tag-group--direction-${t.direction}`]: t.direction }]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=TagGroup.vue_vue_type_script_setup_true_lang.js.map