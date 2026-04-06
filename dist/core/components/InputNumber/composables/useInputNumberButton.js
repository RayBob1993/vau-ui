import { INPUT_NUMBER_ACTIONS as e } from "../constants/index.js";
import { computed as t, toValue as n } from "vue";
//#region src/lib/core/components/InputNumber/composables/useInputNumberButton.ts
function r(r) {
	let i = t(() => n(r.props)), a = t(() => i.value.action === e.DECREMENT), o = t(() => i.value.action === e.INCREMENT), s = t(() => a.value ? !!n(r.inputNumberRootContext?.isDecrementDisabled) : !!n(r.inputNumberRootContext?.isIncrementDisabled));
	function c() {
		a.value ? r.inputNumberRootContext?.handleDecrement() : o.value && r.inputNumberRootContext?.handleIncrement();
	}
	return {
		handleAction: c,
		isDisabled: s,
		isDecrement: a,
		isIncrement: o
	};
}
//#endregion
export { r as useInputNumberButton };

//# sourceMappingURL=useInputNumberButton.js.map