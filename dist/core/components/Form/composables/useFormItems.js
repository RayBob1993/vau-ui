import { ref as e } from "vue";
//#region src/lib/core/components/Form/composables/useFormItems.ts
function t() {
	let t = e([]);
	function n(e) {
		let n = t.value.findIndex((t) => t.id === e.id);
		n === -1 ? t.value.push(e) : t.value[n] = e;
	}
	function r(e) {
		t.value = t.value.filter((t) => t.id !== e);
	}
	return {
		formItems: t,
		registerFormItem: n,
		unregisterFormItem: r
	};
}
//#endregion
export { t as useFormItems };

//# sourceMappingURL=useFormItems.js.map