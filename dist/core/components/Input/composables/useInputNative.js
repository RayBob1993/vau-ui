import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Input/composables/useInputNative.ts
function n(n) {
	let r = e(() => t(n.inputRootContext?.props));
	return { props: e(() => ({
		disabled: !!t(n.inputRootContext?.isDisabled),
		placeholder: r.value?.placeholder,
		nativeType: r.value?.nativeType,
		inputMode: r.value?.inputMode,
		readonly: r.value?.readonly,
		autocomplete: r.value?.autocomplete
	})) };
}
//#endregion
export { n as useInputNative };

//# sourceMappingURL=useInputNative.js.map