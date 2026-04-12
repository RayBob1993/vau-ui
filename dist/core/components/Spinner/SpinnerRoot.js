import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r } from "vue";
//#region src/lib/core/components/Spinner/SpinnerRoot.vue?vue&type=script&setup=true&lang.ts
var i = /* @__PURE__ */ t({
	__name: "SpinnerRoot",
	props: {
		theme: {},
		size: {}
	},
	setup(t) {
		return (i, a) => (r(), e("div", {
			class: n(["spinner", {
				[`spinner--theme-${t.theme}`]: t.theme,
				[`spinner--size-${t.size}`]: t.size
			}]),
			"aria-label": "Loading"
		}, null, 2));
	}
});
//#endregion
export { i as default };

//# sourceMappingURL=SpinnerRoot.js.map