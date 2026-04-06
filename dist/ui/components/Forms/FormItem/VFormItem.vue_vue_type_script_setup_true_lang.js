import { Form as e } from "../../../../core/components/Form/index.js";
import { createBlock as t, createCommentVNode as n, createPropsRestProxy as r, createSlots as i, createTextVNode as a, createVNode as o, defineComponent as s, guardReactiveProps as c, mergeProps as l, normalizeProps as u, openBlock as d, renderSlot as f, toDisplayString as p, toHandlers as m, unref as h, useSlots as g, withCtx as _ } from "vue";
//#region src/lib/ui/components/Forms/FormItem/VFormItem.vue?vue&type=script&setup=true&lang.ts
var v = /* @__PURE__ */ s({
	__name: "VFormItem",
	props: {
		title: {},
		disabled: { type: Boolean },
		name: {}
	},
	emits: ["valid", "invalid"],
	setup(s, { emit: v }) {
		let y = r(s, ["title"]), b = v, x = g();
		return (r, g) => (d(), t(h(e).Item, l(y, m(b)), i({
			default: _((e) => [f(r.$slots, "default", u(c(e)))]),
			footer: _((t) => [f(r.$slots, "footer", u(c(t)), () => [o(h(e).ItemErrors)])]),
			_: 2
		}, [x.header ? {
			name: "header",
			fn: _((i) => [f(r.$slots, "header", u(c(i)), () => [o(h(e).ItemTitle, null, {
				default: _(() => [a(p(s.title) + " ", 1), i.isRequired ? (d(), t(h(e).ItemRequired, { key: 0 })) : n("", !0)]),
				_: 2
			}, 1024)])]),
			key: "0"
		} : void 0]), 1040));
	}
});
//#endregion
export { v as default };

//# sourceMappingURL=VFormItem.vue_vue_type_script_setup_true_lang.js.map