import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Grid/Container.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "Container",
	props: {
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	},
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["container", { [`container--size-${t.size}`]: t.size }]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=Container.js.map