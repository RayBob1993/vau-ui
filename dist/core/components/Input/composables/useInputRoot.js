import { useToggle as e } from "../../../composables/useToggle.js";
import { InputTypes as t } from "../../../constants/input-types.js";
import { computed as n, toValue as r } from "vue";
//#region src/lib/core/components/Input/composables/useInputRoot.ts
function i(i) {
	let [a, o] = e(), s = n(() => r(i.props)), c = n(() => !!(i.formRootContext?.props.disabled || i.formItemContext?.props.disabled || s.value?.loading || s.value?.disabled)), l = n(() => s.value.type === t.TEXTAREA), u = n(() => !!r(i.modelValue)?.trim());
	function d(e) {
		i.onUpdateModelValue?.(e);
	}
	function f() {
		d("");
	}
	return {
		isFocus: a,
		isDisabled: c,
		isTextarea: l,
		hasValue: u,
		setFocus: o,
		setModelValue: d,
		reset: f
	};
}
//#endregion
export { i as useInputRoot };

//# sourceMappingURL=useInputRoot.js.map