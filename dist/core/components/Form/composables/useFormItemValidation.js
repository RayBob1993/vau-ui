import { computed as e, ref as t, toValue as n } from "vue";
//#region src/lib/core/components/Form/composables/useFormItemValidation.ts
function r(r) {
	let i = e(() => n(r.data)), a = e(() => n(r.schema)), o = t({
		isError: !1,
		isValidating: !1,
		isSuccess: !1
	}), s = t([]);
	function c(e) {
		o.value = {
			...o.value,
			...e
		};
	}
	function l() {
		s.value = [];
	}
	async function u(e = !1) {
		if (!i.value || !a.value) return !1;
		c({ isValidating: !0 });
		let t = await a.value.safeParseAsync(i.value);
		return c({ isValidating: !1 }), t.success ? (c({
			isError: !1,
			isSuccess: !0
		}), r.onValid?.(), !0) : (e || (c({
			isError: !0,
			isSuccess: !1
		}), t.error && (s.value = t.error.issues)), r.onInvalid?.(), !1);
	}
	return {
		validationStatus: o,
		validationErrors: s,
		clearValidateErrors: l,
		validate: u
	};
}
//#endregion
export { r as useFormItemValidation };

//# sourceMappingURL=useFormItemValidation.js.map