import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Flex/FlexRoot.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "FlexRoot",
	props: {
		wrap: {
			type: Boolean,
			default: !0
		},
		align: {},
		alignXs: {},
		alignSm: {},
		alignMd: {},
		alignLg: {},
		alignXl: {},
		alignXxl: {},
		justify: {},
		justifyXs: {},
		justifySm: {},
		justifyMd: {},
		justifyLg: {},
		justifyXl: {},
		justifyXxl: {},
		direction: {}
	},
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["flex", {
			"flex--wrap": t.wrap,
			"flex--no-wrap": !t.wrap,
			[`flex--direction-${t.direction}`]: t.direction,
			[`flex--justify-${t.justify}`]: t.justify,
			[`flex--justify-xs-${t.justifyXs}`]: t.justifyXs,
			[`flex--justify-sm-${t.justifySm}`]: t.justifySm,
			[`flex--justify-md-${t.justifyMd}`]: t.justifyMd,
			[`flex--justify-lg-${t.justifyLg}`]: t.justifyLg,
			[`flex--justify-xl-${t.justifyXl}`]: t.justifyXl,
			[`flex--justify-xxl-${t.justifyXxl}`]: t.justifyXxl,
			[`flex--align-${t.align}`]: t.align,
			[`flex--align-xs-${t.alignXs}`]: t.alignXs,
			[`flex--align-sm-${t.alignSm}`]: t.alignSm,
			[`flex--align-md-${t.alignMd}`]: t.alignMd,
			[`flex--align-lg-${t.alignLg}`]: t.alignLg,
			[`flex--align-xl-${t.alignXl}`]: t.alignXl,
			[`flex--align-xxl-${t.alignXxl}`]: t.alignXxl
		}]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=FlexRoot.vue_vue_type_script_setup_true_lang.js.map