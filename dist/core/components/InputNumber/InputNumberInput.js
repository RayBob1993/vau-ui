import { useInputNumberWheel as e } from "./composables/useInputNumberWheel.js";
import { useInputNumberInput as t } from "./composables/useInputNumberInput.js";
import { useInputNumberRootContext as n } from "./context/useInputNumberRootContext.js";
import { createElementBlock as r, createElementVNode as i, defineComponent as a, isRef as o, mergeProps as s, openBlock as c, toValue as l, unref as u, vModelText as d, withDirectives as f } from "vue";
//#region src/lib/core/components/InputNumber/InputNumberInput.vue?vue&type=script&setup=true&lang.ts
var p = { class: "input-number-input" }, m = /* @__PURE__ */ a({
	__name: "InputNumberInput",
	setup(a) {
		let m = n(), { props: h, modelValue: g } = t({ inputNumberRootContext: m }), { handleWheel: _ } = e({
			mousewheel: () => l(m?.props)?.mousewheel,
			onDecrement: () => {
				m?.handleDecrement();
			},
			onIncrement: () => {
				m?.handleIncrement();
			}
		});
		return (e, t) => (c(), r("div", p, [f(i("input", s({
			"onUpdate:modelValue": t[0] ||= (e) => o(g) ? g.value = e : null,
			tabindex: "0",
			type: "number",
			class: "input-number-input__native"
		}, u(h), { onWheel: t[1] ||= (...e) => u(_) && u(_)(...e) }), null, 16), [[
			d,
			u(g),
			void 0,
			{ number: !0 }
		]])]));
	}
});
//#endregion
export { m as default };

//# sourceMappingURL=InputNumberInput.js.map