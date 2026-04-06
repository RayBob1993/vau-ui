import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Section/SectionRoot.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "SectionRoot",
	props: {
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		theme: {}
	},
	setup(t) {
		return (a, o) => (r(), e("section", { class: n(["section", {
			[`section--theme-${t.theme}`]: t.theme,
			[`section--size-${t.size}`]: t.size,
			[`section--size-xs-${t.sizeXs}`]: t.sizeXs,
			[`section--size-sm-${t.sizeSm}`]: t.sizeSm,
			[`section--size-md-${t.sizeMd}`]: t.sizeMd,
			[`section--size-lg-${t.sizeLg}`]: t.sizeLg,
			[`section--size-xl-${t.sizeXl}`]: t.sizeXl,
			[`section--size-xxl-${t.sizeXxl}`]: t.sizeXxl
		}]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=SectionRoot.vue_vue_type_script_setup_true_lang.js.map