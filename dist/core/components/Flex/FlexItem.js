import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Flex/FlexItem.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "FlexItem",
	props: { flex: {} },
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["flex-item", { [`flex-item--flex-${t.flex}`]: t.flex }]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=FlexItem.js.map