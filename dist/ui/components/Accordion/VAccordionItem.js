import { Accordion as e } from "../../../core/components/Accordion/index.js";
import { createBlock as t, createPropsRestProxy as n, createTextVNode as r, createVNode as i, defineComponent as a, guardReactiveProps as o, normalizeProps as s, openBlock as c, renderSlot as l, toDisplayString as u, unref as d, withCtx as f } from "vue";
//#region src/lib/ui/components/Accordion/VAccordionItem.vue?vue&type=script&setup=true&lang.ts
var p = /* @__PURE__ */ a({
	__name: "VAccordionItem",
	props: {
		title: {},
		value: {},
		disabled: { type: Boolean }
	},
	setup(a) {
		let p = n(a, ["title"]);
		return (n, m) => (c(), t(d(e).Item, s(o(p)), {
			default: f(({ isActive: t }) => [i(d(e).Header, null, {
				default: f(() => [i(d(e).Trigger, null, {
					default: f(() => [i(d(e).Title, null, {
						default: f(() => [l(n.$slots, "title", {}, () => [r(u(a.title), 1)])]),
						_: 3
					})]),
					_: 3
				})]),
				_: 3
			}), i(d(e).Body, null, {
				default: f(() => [l(n.$slots, "default", { isActive: t })]),
				_: 2
			}, 1024)]),
			_: 3
		}, 16));
	}
});
//#endregion
export { p as default };

//# sourceMappingURL=VAccordionItem.js.map