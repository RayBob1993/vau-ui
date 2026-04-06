import { createElementBlock as e, defineComponent as t, openBlock as n, renderSlot as r } from "vue";
//#region src/lib/core/components/Layout/LayoutRoot.vue?vue&type=script&setup=true&lang.ts
var i = { class: "layout" }, a = /* @__PURE__ */ t({
	__name: "LayoutRoot",
	setup(t) {
		return (t, a) => (n(), e("div", i, [
			r(t.$slots, "header"),
			r(t.$slots, "default"),
			r(t.$slots, "footer")
		]));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=LayoutRoot.vue_vue_type_script_setup_true_lang.js.map