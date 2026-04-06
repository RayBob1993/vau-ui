import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Button/ButtonGroup.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "ButtonGroup",
	props: { direction: {} },
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["button-group", { [`button-group--direction-${t.direction}`]: t.direction }]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=ButtonGroup.js.map