import { useInputNumberButton as e } from "./composables/useInputNumberButton.js";
import { useInputNumberRootContext as t } from "./context/useInputNumberRootContext.js";
import { Fragment as n, createCommentVNode as r, createElementBlock as i, createTextVNode as a, defineComponent as o, normalizeClass as s, openBlock as c, renderSlot as l, unref as u } from "vue";
//#region src/lib/core/components/InputNumber/InputNumberButton.vue?vue&type=script&setup=true&lang.ts
var d = ["disabled"], f = /* @__PURE__ */ o({
	__name: "InputNumberButton",
	props: { action: {} },
	setup(o) {
		let f = o, { handleAction: p, isDisabled: m, isDecrement: h, isIncrement: g } = e({
			inputNumberRootContext: t(),
			props: () => f
		});
		return (e, t) => (c(), i("button", {
			class: s(["input-number-button", { [`input-number-button--${o.action}`]: o.action }]),
			disabled: u(m),
			type: "button",
			onClick: t[0] ||= (...e) => u(p) && u(p)(...e)
		}, [l(e.$slots, "default", {}, () => [u(h) ? (c(), i(n, { key: 0 }, [a(" - ")], 64)) : u(g) ? (c(), i(n, { key: 1 }, [a(" + ")], 64)) : r("", !0)])], 10, d));
	}
});
//#endregion
export { f as default };

//# sourceMappingURL=InputNumberButton.vue_vue_type_script_setup_true_lang.js.map