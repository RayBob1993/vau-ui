import { useTagRoot as e } from "./composables/useTagRoot.js";
import { createCommentVNode as t, createElementBlock as n, defineComponent as r, normalizeClass as i, openBlock as a, renderSlot as o, unref as s } from "vue";
//#region src/lib/core/components/Tag/TagRoot.vue?vue&type=script&setup=true&lang.ts
var c = /* @__PURE__ */ r({
	__name: "TagRoot",
	props: {
		value: {},
		canDelete: { type: Boolean },
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	},
	emits: ["delete"],
	setup(r, { emit: c }) {
		let l = r, u = c, { handleDelete: d } = e({
			props: () => l,
			onDelete(e) {
				u("delete", e);
			}
		});
		return (e, c) => (a(), n("div", { class: i(["tag", {
			[`tag--size-${r.size}`]: r.size,
			[`tag--size-xs-${r.sizeXs}`]: r.sizeXs,
			[`tag--size-sm-${r.sizeSm}`]: r.sizeSm,
			[`tag--size-md-${r.sizeMd}`]: r.sizeMd,
			[`tag--size-lg-${r.sizeLg}`]: r.sizeLg,
			[`tag--size-xl-${r.sizeXl}`]: r.sizeXl,
			[`tag--size-xxl-${r.sizeXxl}`]: r.sizeXxl,
			[`tag--theme-${r.theme}`]: r.theme
		}]) }, [o(e.$slots, "default"), r.canDelete ? (a(), n("button", {
			key: 0,
			type: "button",
			onClick: c[0] ||= (...e) => s(d) && s(d)(...e)
		}, " X ")) : t("", !0)], 2));
	}
});
//#endregion
export { c as default };

//# sourceMappingURL=TagRoot.vue_vue_type_script_setup_true_lang.js.map