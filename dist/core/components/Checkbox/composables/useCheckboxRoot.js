import { isBoolean as e } from "../../../utils/isBoolean.js";
import { computed as t, toValue as n } from "vue";
//#region src/lib/core/components/Checkbox/composables/useCheckboxRoot.ts
function r(r) {
	let i = t(() => n(r.props)), a = t(() => n(r.modelValue)), o = t(() => !!(r.formRootContext?.props.disabled || r.formItemContext?.props.disabled || i.value?.disabled)), s = t(() => e(a.value) ? a.value : i.value.value && Array.isArray(a.value) ? a.value.includes(i.value.value) : !1);
	return {
		isActive: s,
		isDisabled: o,
		isChecked: t(() => !!(s.value || i.value?.checked)),
		isIndeterminate: t(() => !!i.value?.indeterminate)
	};
}
//#endregion
export { r as useCheckboxRoot };

//# sourceMappingURL=useCheckboxRoot.js.map