import { Input as e } from "../Input/index.js";
import { useInputPasswordRoot as t } from "./composables/useInputPasswordRoot.js";
import { createBlock as n, createCommentVNode as r, createElementVNode as i, createVNode as a, defineComponent as o, guardReactiveProps as s, mergeModels as c, mergeProps as l, normalizeProps as u, openBlock as d, renderSlot as f, unref as p, useModel as m, useSlots as h, withCtx as g } from "vue";
//#region src/lib/core/components/InputPassword/InputPasswordRoot.vue?vue&type=script&setup=true&lang.ts
var _ = /* @__PURE__ */ o({
	__name: "InputPasswordRoot",
	props: /* @__PURE__ */ c({
		clearable: { type: Boolean },
		loading: { type: Boolean },
		placeholder: {},
		disabled: { type: Boolean },
		readonly: { type: Boolean },
		autocomplete: {},
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
	setup(o) {
		let c = o, _ = h(), v = m(o, "modelValue"), { currentType: y, handleToggleType: b } = t();
		return (t, o) => (d(), n(p(e).Root, l(c, {
			modelValue: v.value,
			"onUpdate:modelValue": o[1] ||= (e) => v.value = e,
			"native-type": p(y)
		}), {
			default: g((c) => [
				_?.before ? (d(), n(p(e).Before, { key: 0 }, {
					default: g(() => [f(t.$slots, "before", u(s(c)))]),
					_: 2
				}, 1024)) : r("", !0),
				a(p(e).Control, null, {
					default: g(() => [a(p(e).Native)]),
					_: 1
				}),
				a(p(e).After, null, {
					default: g(() => [f(t.$slots, "after", u(s(c)), () => [i("button", {
						type: "button",
						onClick: o[0] ||= (...e) => p(b) && p(b)(...e)
					}, " 👁 ")])]),
					_: 2
				}, 1024)
			]),
			_: 3
		}, 16, ["modelValue", "native-type"]));
	}
});
//#endregion
export { _ as default };

//# sourceMappingURL=InputPasswordRoot.vue_vue_type_script_setup_true_lang.js.map