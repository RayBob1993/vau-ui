import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Form/composables/useFormValidation.ts
function n(n) {
	let r = e(() => t(n.formItems)), i = e(() => r.value.filter((e) => e.isValidatable));
	async function a(e = !1) {
		let t = (await Promise.all(i.value.map((t) => t.validate(e)))).every(Boolean);
		return t ? n.onValid?.() : n.onInvalid?.(), t;
	}
	function o() {
		r.value.forEach((e) => e.clearValidateErrors());
	}
	return {
		validatableFormItems: i,
		validate: a,
		clearValidate: o
	};
}
//#endregion
export { n as useFormValidation };

//# sourceMappingURL=useFormValidation.js.map