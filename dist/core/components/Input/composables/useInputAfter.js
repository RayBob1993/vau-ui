import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Input/composables/useInputAfter.ts
function n(n) {
	let r = e(() => t(n.inputRootContext?.props)), i = e(() => !!r.value?.clearable);
	function a() {
		n.inputRootContext?.reset();
	}
	return {
		isClearable: i,
		handleClear: a
	};
}
//#endregion
export { n as useInputAfter };

//# sourceMappingURL=useInputAfter.js.map