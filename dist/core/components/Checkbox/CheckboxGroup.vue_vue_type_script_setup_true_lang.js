import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Checkbox/CheckboxGroup.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "CheckboxGroup",
	props: { direction: {} },
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["checkbox-group", { [`checkbox-group--direction-${t.direction}`]: t.direction }]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=CheckboxGroup.vue_vue_type_script_setup_true_lang.js.map