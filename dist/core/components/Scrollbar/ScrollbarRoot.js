import { useScrollbarRoot as e } from "./composables/useScrollbarRoot.js";
import { createElementBlock as t, createElementVNode as n, defineComponent as r, normalizeClass as i, openBlock as a, renderSlot as o, unref as s, useTemplateRef as c } from "vue";
//#region src/lib/core/components/Scrollbar/ScrollbarRoot.vue?vue&type=script&setup=true&lang.ts
var l = /* @__PURE__ */ r({
	__name: "ScrollbarRoot",
	props: {
		vertical: {
			type: Boolean,
			default: !0
		},
		horizontal: { type: Boolean },
		draggableMultiplier: { default: 1 },
		infiniteScrollOffset: { default: 10 },
		debounceDelay: { default: 300 },
		draggable: { type: Boolean },
		hidden: { type: Boolean },
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		theme: {}
	},
	emits: [
		"scrollEndY",
		"scrollEndX",
		"scroll",
		"mousedown",
		"mouseleave",
		"mouseup",
		"mousemove"
	],
	setup(r, { emit: l }) {
		let u = r, d = l, f = c("scrollbar"), p = c("content"), { isGrabbing: m, handleScroll: h, handleMousedown: g, handleMouseleave: _, handleMouseup: v, handleMousemove: y } = e({
			props: () => u,
			scrollbar: f,
			content: p,
			onScroll: (e) => d("scroll", e),
			onMousedown: (e) => d("mousedown", e),
			onMouseleave: (e) => d("mouseleave", e),
			onMouseup: (e) => d("mouseup", e),
			onMousemove: (e) => d("mousemove", e),
			onScrollEndY: () => d("scrollEndY"),
			onScrollEndX: () => d("scrollEndX")
		});
		return (e, c) => (a(), t("div", {
			ref_key: "scrollbar",
			ref: f,
			class: i(["scrollbar", {
				"scrollbar--hidden": r.hidden,
				"scrollbar--draggable": r.draggable,
				"scrollbar--vertical": r.vertical,
				"scrollbar--horizontal": r.horizontal,
				"scrollbar--grabbing": s(m),
				[`scrollbar--size-${r.size}`]: r.size,
				[`scrollbar--theme-${r.theme}`]: r.theme
			}]),
			onScroll: c[0] ||= (...e) => s(h) && s(h)(...e),
			onMousedown: c[1] ||= (...e) => s(g) && s(g)(...e),
			onMouseleave: c[2] ||= (...e) => s(_) && s(_)(...e),
			onMouseup: c[3] ||= (...e) => s(v) && s(v)(...e),
			onMousemove: c[4] ||= (...e) => s(y) && s(y)(...e)
		}, [n("div", {
			ref_key: "content",
			ref: p,
			class: "scrollbar__content"
		}, [o(e.$slots, "default")], 512)], 34));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=ScrollbarRoot.js.map