import { isNumber as e } from "../../../utils/isNumber.js";
import "../constants/index.js";
import { computed as t, toValue as n } from "vue";
//#region src/lib/core/components/InputNumber/composables/useInputNumberRoot.ts
function r(r) {
	let i = t(() => n(r.props)), a = t(() => n(r.modelValue)), o = t(() => i.value.step || 1), s = t(() => !!(r.formRootContext?.props.disabled || r.formItemContext?.props.disabled || i.value.disabled)), c = t(() => s.value || e(i.value.min) && a.value === i.value.min), l = t(() => s.value || e(i.value.max) && !(a.value < i.value.max));
	function u() {
		if (i.value.readonly) return;
		let t = a.value - o.value;
		(!e(i.value.min) || t >= i.value.min) && r.onDecrement?.(t);
	}
	function d() {
		if (i.value.readonly) return;
		let t = a.value + o.value;
		(!e(i.value.max) || t <= i.value.max) && r.onIncrement?.(t);
	}
	function f(e) {
		r.onUpdateModelValue?.(e);
	}
	return {
		step: o,
		isDisabled: s,
		isDecrementDisabled: c,
		isIncrementDisabled: l,
		handleDecrement: u,
		handleIncrement: d,
		setModelValue: f
	};
}
//#endregion
export { r as useInputNumberRoot };

//# sourceMappingURL=useInputNumberRoot.js.map