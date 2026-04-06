import { isUndefined as e } from "../../../utils/isUndefined.js";
import { isSelectMultiple as t } from "../utils/is-select-multiple.js";
import { computed as n, toValue as r } from "vue";
//#region src/lib/core/components/Select/composables/useSelectValue.ts
function i(i) {
	let a = n(() => r(i.selectRootContext?.props)), o = n(() => r(i.selectRootContext?.activeOption)), s = n(() => o.value?.props?.title ?? o.value?.props.value), c = n(() => r(i.selectRootContext?.activeOptions) ?? []), l = n(() => !!r(i.selectRootContext?.hasValue)), u = n(() => e(i.selectRootContext?.modelValue) ? !1 : t(r(i.selectRootContext.modelValue), !!a.value?.multiple)), d = n(() => a.value?.placeholder);
	function f() {
		i.selectRootContext?.toggle();
	}
	return {
		activeOptionValue: s,
		activeOptions: c,
		hasValue: l,
		isMultiple: u,
		placeholder: d,
		toggle: f
	};
}
//#endregion
export { i as useSelectValue };

//# sourceMappingURL=useSelectValue.js.map