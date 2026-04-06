import { useBadgeRoot as e } from "./composables/useBadgeRoot.js";
import { createElementBlock as t, defineComponent as n, normalizeClass as r, openBlock as i, renderSlot as a } from "vue";
//#region src/lib/core/components/Badge/BadgeRoot.vue?vue&type=script&setup=true&lang.ts
var o = /* @__PURE__ */ n({
	__name: "BadgeRoot",
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
	setup(n) {
		let o = n, {} = e({ props: () => o });
		return (e, o) => (i(), t("div", { class: r(["badge", {
			[`badge--size-${n.size}`]: n.size,
			[`badge--size-xs-${n.sizeXs}`]: n.sizeXs,
			[`badge--size-sm-${n.sizeSm}`]: n.sizeSm,
			[`badge--size-md-${n.sizeMd}`]: n.sizeMd,
			[`badge--size-lg-${n.sizeLg}`]: n.sizeLg,
			[`badge--size-xl-${n.sizeXl}`]: n.sizeXl,
			[`badge--size-xxl-${n.sizeXxl}`]: n.sizeXxl,
			[`badge--theme-${n.theme}`]: n.theme
		}]) }, [a(e.$slots, "default")], 2));
	}
});
//#endregion
export { o as default };

//# sourceMappingURL=BadgeRoot.vue_vue_type_script_setup_true_lang.js.map