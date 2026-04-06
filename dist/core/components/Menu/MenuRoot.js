import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Menu/MenuRoot.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "MenuRoot",
	props: {
		direction: {},
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	},
	setup(t) {
		return (a, o) => (r(), e("nav", { class: n(["menu", {
			[`menu--direction-${t.direction}`]: t.direction,
			[`menu--theme-${t.theme}`]: t.theme,
			[`menu--size-${t.size}`]: t.size,
			[`menu--size-xs-${t.sizeXs}`]: t.sizeXs,
			[`menu--size-sm-${t.sizeSm}`]: t.sizeSm,
			[`menu--size-md-${t.sizeMd}`]: t.sizeMd,
			[`menu--size-lg-${t.sizeLg}`]: t.sizeLg,
			[`menu--size-xl-${t.sizeXl}`]: t.sizeXl,
			[`menu--size-xxl-${t.sizeXxl}`]: t.sizeXxl
		}]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=MenuRoot.js.map