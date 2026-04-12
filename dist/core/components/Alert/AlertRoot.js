import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Alert/AlertRoot.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "AlertRoot",
	props: {
		theme: {},
		size: {}
	},
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["alert", {
			[`alert--theme-${t.theme}`]: t.theme,
			[`alert--size-${t.size}`]: t.size
		}]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=AlertRoot.js.map