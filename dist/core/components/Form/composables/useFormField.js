import { ref as e } from "vue";
//#region src/lib/core/components/Form/composables/useFormField.ts
function t() {
	let t = e();
	function n(e) {
		t.value = e;
	}
	function r() {
		t.value = void 0;
	}
	return {
		field: t,
		registerField: n,
		unregisterField: r
	};
}
//#endregion
export { t as useFormField };

//# sourceMappingURL=useFormField.js.map