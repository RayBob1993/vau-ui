import { createElementBlock as e, defineComponent as t, normalizeClass as n, openBlock as r, renderSlot as i } from "vue";
//#region src/lib/core/components/Grid/Col.vue?vue&type=script&setup=true&lang.ts
var a = /* @__PURE__ */ t({
	__name: "Col",
	props: {
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		order: {},
		orderXs: {},
		orderSm: {},
		orderMd: {},
		orderLg: {},
		orderXl: {},
		orderXxl: {},
		offset: {},
		offsetXs: {},
		offsetSm: {},
		offsetMd: {},
		offsetLg: {},
		offsetXl: {},
		offsetXxl: {}
	},
	setup(t) {
		return (a, o) => (r(), e("div", { class: n(["col", {
			[`col--size-${t.size}`]: t.size,
			[`col--size-xs-${t.sizeXs}`]: t.sizeXs,
			[`col--size-sm-${t.sizeSm}`]: t.sizeSm,
			[`col--size-md-${t.sizeMd}`]: t.sizeMd,
			[`col--size-lg-${t.sizeLg}`]: t.sizeLg,
			[`col--size-xl-${t.sizeXl}`]: t.sizeXl,
			[`col--size-xxl-${t.sizeXxl}`]: t.sizeXxl,
			[`col--offset-${t.offset}`]: t.offset,
			[`col--offset-xs-${t.offsetXs}`]: t.offsetXs,
			[`col--offset-sm-${t.offsetSm}`]: t.offsetSm,
			[`col--offset-md-${t.offsetMd}`]: t.offsetMd,
			[`col--offset-lg-${t.offsetLg}`]: t.offsetLg,
			[`col--offset-xl-${t.offsetXl}`]: t.offsetXl,
			[`col--offset-xxl-${t.offsetXxl}`]: t.offsetXxl,
			[`col--order-${t.order}`]: t.order,
			[`col--order-xs-${t.orderXs}`]: t.orderXs,
			[`col--order-sm-${t.orderSm}`]: t.orderSm,
			[`col--order-md-${t.orderMd}`]: t.orderMd,
			[`col--order-lg-${t.orderLg}`]: t.orderLg,
			[`col--order-xl-${t.orderXl}`]: t.orderXl,
			[`col--order-xxl-${t.orderXxl}`]: t.orderXxl
		}]) }, [i(a.$slots, "default")], 2));
	}
});
//#endregion
export { a as default };

//# sourceMappingURL=Col.js.map