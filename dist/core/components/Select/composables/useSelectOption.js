import { isUndefined as e } from "../../../utils/isUndefined.js";
import { isSelectMultiple as t } from "../utils/is-select-multiple.js";
import { computed as n, onUnmounted as r, toValue as i, useId as a, watch as o } from "vue";
//#region src/lib/core/components/Select/composables/useSelectOption.ts
function s(s) {
	let c = a(), l = n(() => i(s.selectRootContext?.modelValue)), u = n(() => i(s.props)), d = n(() => !!i(s.selectRootContext?.props)?.multiple), f = n(() => e(l.value) ? !1 : t(l.value, d.value) ? l.value.includes(u.value.value) : l.value === u.value.value), p = n(() => !!(i(s.selectRootContext?.isDisabled) || u.value?.disabled)), m = n(() => ({
		id: c,
		props: u.value
	}));
	function h(e) {
		s.selectRootContext?.setModelValue(e), s.selectRootContext?.close();
	}
	return o(m, (e) => {
		s.selectRootContext?.registerOption(e);
	}, {
		deep: !0,
		immediate: !0
	}), r(() => {
		s.selectRootContext?.unregisterOption(c);
	}), {
		isActive: f,
		isDisabled: p,
		handleChange: h
	};
}
//#endregion
export { s as useSelectOption };

//# sourceMappingURL=useSelectOption.js.map