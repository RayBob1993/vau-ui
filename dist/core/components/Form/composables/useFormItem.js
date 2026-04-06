import { getProp as e } from "../../../utils/getProp.js";
import { debounce as t } from "../../../utils/decorators/debounce.js";
import { useFormField as n } from "./useFormField.js";
import { useFormItemValidation as r } from "./useFormItemValidation.js";
import { computed as i, onUnmounted as a, toValue as o, useId as s, watch as c } from "vue";
import { z as l } from "zod";
//#region src/lib/core/components/Form/composables/useFormItem.ts
function u(u) {
	let d = s(), { field: f, registerField: p, unregisterField: m } = n(), h = i(() => o(u.props)), g = i(() => h.value.name), _ = i(() => u.formRootContext?.modelValue.value), v = i(() => u.formRootContext?.props?.rules), y = i(() => g.value && _.value && e(_.value, g.value)), b = i(() => !!(u.formRootContext?.props.disabled || h.value?.disabled)), x = i(() => {
		if (!g.value || !v.value) return null;
		let t = e(v.value, g.value);
		return t instanceof l.ZodType ? t : null;
	}), S = i(() => !!x.value), C = i(() => x.value ? !x.value.safeParse(void 0).success : !1), { validationStatus: w, validationErrors: T, clearValidateErrors: E, validate: D } = r({
		data: () => g.value ? { [g.value]: y.value } : null,
		schema: () => !g.value || !x.value ? null : l.object({ [g.value]: x.value }),
		onValid: () => {
			u.onValid?.();
		},
		onInvalid: () => {
			u.onInvalid?.();
		}
	}), O = i(() => ({
		id: d,
		props: h.value,
		validationStatus: w.value,
		isValidatable: S.value,
		isRequired: C.value,
		registerField: p,
		unregisterField: m,
		reset: k,
		validate: D,
		clearValidateErrors: E
	}));
	function k() {
		!y.value || !h.value.name || (f.value?.reset(), E());
	}
	let A = t(() => D(), 300);
	return a(() => {
		A.cancel(), u.formRootContext?.unregisterFormItem(d);
	}), c(O, (e) => {
		u.formRootContext?.registerFormItem(e);
	}, {
		deep: !0,
		immediate: !0
	}), c(y, () => A()), c(() => w.value.isSuccess, (e) => {
		e && E();
	}), {
		id: d,
		validationErrors: T,
		validationStatus: w,
		isDisabled: b,
		isRequired: C,
		reset: k,
		validate: D,
		clearValidateErrors: E,
		registerField: p,
		unregisterField: m
	};
}
//#endregion
export { u as useFormItem };

//# sourceMappingURL=useFormItem.js.map