import { Alert as e } from "../../../core/components/Alert/index.js";
import { computed as t, createBlock as n, createCommentVNode as r, createPropsRestProxy as i, createTextVNode as a, createVNode as o, defineComponent as s, guardReactiveProps as c, normalizeProps as l, openBlock as u, renderSlot as d, toDisplayString as f, unref as p, useSlots as m, withCtx as h } from "vue";
//#region src/lib/ui/components/Alert/VAlert.vue?vue&type=script&setup=true&lang.ts
var g = /* @__PURE__ */ s({
	__name: "VAlert",
	props: {
		title: {},
		description: {},
		closable: { type: Boolean },
		theme: {},
		size: {}
	},
	setup(s) {
		let g = i(s, [
			"title",
			"description",
			"closable"
		]), _ = m(), v = t(() => !!(s.title || _?.title)), y = t(() => !!_?.icon), b = t(() => !!(s.description || _?.description));
		return (t, i) => (u(), n(p(e).Root, l(c(g)), {
			default: h(() => [o(p(e).Header, null, {
				default: h(() => [
					y.value ? (u(), n(p(e).Indicator, { key: 0 }, {
						default: h(() => [d(t.$slots, "icon")]),
						_: 3
					})) : r("", !0),
					v.value ? (u(), n(p(e).Title, { key: 1 }, {
						default: h(() => [d(t.$slots, "title", {}, () => [a(f(s.title), 1)])]),
						_: 3
					})) : r("", !0),
					s.closable ? (u(), n(p(e).Close, { key: 2 })) : r("", !0)
				]),
				_: 3
			}), o(p(e).Body, null, {
				default: h(() => [b.value ? (u(), n(p(e).Description, { key: 0 }, {
					default: h(() => [d(t.$slots, "description", {}, () => [a(f(s.description), 1)])]),
					_: 3
				})) : d(t.$slots, "default", { key: 1 })]),
				_: 3
			})]),
			_: 3
		}, 16));
	}
});
//#endregion
export { g as default };

//# sourceMappingURL=VAlert.js.map