import { Section as e } from "../../../core/components/Section/index.js";
import { computed as t, createBlock as n, createCommentVNode as r, createPropsRestProxy as i, createTextVNode as a, createVNode as o, defineComponent as s, guardReactiveProps as c, normalizeProps as l, openBlock as u, renderSlot as d, toDisplayString as f, unref as p, useSlots as m, withCtx as h } from "vue";
//#region src/lib/ui/components/Section/VSection.vue?vue&type=script&setup=true&lang.ts
var g = /* @__PURE__ */ s({
	__name: "VSection",
	props: {
		title: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {},
		theme: {},
		level: { default: "h1" }
	},
	setup(s) {
		let g = i(s, ["title", "level"]), _ = m(), v = t(() => !!(s.title || _?.header));
		return (t, i) => (u(), n(p(e).Root, l(c(g)), {
			default: h(() => [
				v.value ? (u(), n(p(e).Header, { key: 0 }, {
					default: h(() => [d(t.$slots, "header", {}, () => [s.title ? (u(), n(p(e).Title, {
						key: 0,
						level: s.level
					}, {
						default: h(() => [a(f(s.title), 1)]),
						_: 1
					}, 8, ["level"])) : r("", !0)])]),
					_: 3
				})) : r("", !0),
				o(p(e).Body, null, {
					default: h(() => [d(t.$slots, "default")]),
					_: 3
				}),
				_?.footer ? (u(), n(p(e).Footer, { key: 1 }, {
					default: h(() => [d(t.$slots, "footer")]),
					_: 3
				})) : r("", !0)
			]),
			_: 3
		}, 16));
	}
});
//#endregion
export { g as default };

//# sourceMappingURL=VSection.js.map