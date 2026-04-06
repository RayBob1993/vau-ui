import { debounce as e } from "../../../utils/decorators/debounce.js";
import { useFormItems as t } from "./useFormItems.js";
import { useFormValidation as n } from "./useFormValidation.js";
import { useToggle as r } from "../../../composables/useToggle.js";
import { nextTick as i, onMounted as a, onScopeDispose as o, ref as s, toValue as c, watch as l } from "vue";
//#region src/lib/core/components/Form/composables/useFormRoot.ts
function u(u) {
	let { formItems: d, registerFormItem: f, unregisterFormItem: p } = t(), { validate: m, clearValidate: h, validatableFormItems: g } = n({
		formItems: () => d.value,
		onValid: () => {
			u.onValid?.();
		},
		onInvalid: () => {
			u.onInvalid?.();
		}
	}), [_, v] = r(!1), y = s(!1), b = s("");
	function x() {
		d.value.forEach((e) => e.reset()), h();
	}
	l(g, async (e) => {
		let t = e.map((e) => e.id).sort().join(",");
		if (t !== b.value) {
			if (b.value = t, e.length === 0) {
				y.value && v(!0);
				return;
			}
			y.value = !0, v(await m(!0));
		}
	}, { immediate: !0 });
	let S = e(async () => {
		v(await m(!0));
	}, 400);
	async function C(e = !1) {
		let t = await m(e);
		return v(t), t;
	}
	return l(() => c(u.modelValue), () => {
		S();
	}, { deep: !0 }), a(async () => {
		await i(), await C(!0);
	}), o(() => {
		S.cancel();
	}), {
		isValid: _,
		validate: C,
		clearValidate: h,
		registerFormItem: f,
		unregisterFormItem: p,
		reset: x
	};
}
//#endregion
export { u as useFormRoot };

//# sourceMappingURL=useFormRoot.js.map