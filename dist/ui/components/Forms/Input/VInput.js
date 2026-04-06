import { Input as e } from "../../../../core/components/Input/index.js";
import { createBlock as t, createCommentVNode as n, createVNode as r, defineComponent as i, guardReactiveProps as a, mergeModels as o, mergeProps as s, normalizeProps as c, openBlock as l, renderSlot as u, unref as d, useModel as f, useSlots as p, withCtx as m } from "vue";
//#region src/lib/ui/components/Forms/Input/VInput.vue?vue&type=script&setup=true&lang.ts
var h = /* @__PURE__ */ i({
	__name: "VInput",
	props: /* @__PURE__ */ o({
		type: {},
		clearable: { type: Boolean },
		loading: { type: Boolean },
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		autocomplete: {},
		nativeType: {},
		inputMode: {},
		rows: {},
		cols: {},
		theme: {},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: { required: !0 },
		modelModifiers: {}
	}),
	emits: ["update:modelValue"],
	setup(i) {
		let o = i, h = p(), g = f(i, "modelValue");
		return (i, f) => (l(), t(d(e).Root, s(o, {
			modelValue: g.value,
			"onUpdate:modelValue": f[0] ||= (e) => g.value = e
		}), {
			default: m((o) => [
				h?.before ? (l(), t(d(e).Before, { key: 0 }, {
					default: m(() => [u(i.$slots, "before", c(a(o)))]),
					_: 2
				}, 1024)) : n("", !0),
				r(d(e).Control, null, {
					default: m(() => [o.isTextarea ? (l(), t(d(e).Textarea, { key: 0 })) : (l(), t(d(e).Native, { key: 1 }))]),
					_: 2
				}, 1024),
				h?.after ? (l(), t(d(e).After, { key: 1 }, {
					default: m(() => [u(i.$slots, "after", c(a(o)))]),
					_: 2
				}, 1024)) : n("", !0)
			]),
			_: 3
		}, 16, ["modelValue"]));
	}
});
//#endregion
export { h as default };

//# sourceMappingURL=VInput.js.map