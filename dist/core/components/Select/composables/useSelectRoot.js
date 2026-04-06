import { useToggle as e } from "../../../composables/useToggle.js";
import { useSelectOptions as t } from "./useSelectOptions.js";
import { isSelectMultiple as n } from "../utils/is-select-multiple.js";
import { useActiveSelectOptions as r } from "./useActiveSelectOptions.js";
import { computed as i, onMounted as a, onUnmounted as o, toValue as s } from "vue";
//#region src/lib/core/components/Select/composables/useSelectRoot.ts
function c(c) {
	let l = i(() => s(c.modelValue)), u = i(() => s(c.props)), { options: d, registerOption: f, unregisterOption: p } = t(), { activeOption: m, activeOptions: h } = r({
		multiple: () => !!u.value.multiple,
		options: () => d.value,
		modelValue: () => l.value
	}), [g, _] = e(), v = i(() => n(l.value, u.value.multiple) ? l.value.length > 0 : !!l.value), y = i(() => !!(c.formRootContext?.props.disabled || c.formItemContext?.props.disabled || u.value?.disabled));
	function b(e) {
		if (!y.value) {
			if (n(l.value, u.value.multiple)) {
				let t = new Set([...l.value]);
				t.has(e) ? t.delete(e) : t.add(e), c.onChangeModel?.([...t]);
			} else c.onChangeModel?.(e);
			c.onChange?.(e);
		}
	}
	function x() {
		if (n(l.value, u.value.multiple)) {
			c.onChangeModel?.([]);
			return;
		}
		c.onChangeModel?.(""), c.onClear?.();
	}
	function S() {
		y.value || _(!0);
	}
	function C() {
		y.value || _(!1);
	}
	function w() {
		g.value ? C() : S();
	}
	return a(() => {
		c.formItemContext?.registerField({ reset: x });
	}), o(() => {
		c.formItemContext?.unregisterField();
	}), {
		activeOption: m,
		activeOptions: h,
		hasValue: v,
		isOpen: g,
		isDisabled: y,
		open: S,
		close: C,
		toggle: w,
		registerOption: f,
		unregisterOption: p,
		setModelValue: b,
		reset: x
	};
}
//#endregion
export { c as useSelectRoot };

//# sourceMappingURL=useSelectRoot.js.map