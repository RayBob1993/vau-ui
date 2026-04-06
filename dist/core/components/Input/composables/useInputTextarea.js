import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Input/composables/useInputTextarea.ts
function n(n) {
	let r = e(() => t(n.inputRootContext?.props));
	return { props: e(() => ({
		disabled: !!t(n.inputRootContext?.isDisabled),
		placeholder: r.value?.placeholder,
		rows: r.value?.rows,
		cols: r.value?.cols,
		readonly: r.value?.readonly,
		autocomplete: r.value?.autocomplete
	})) };
}
//#endregion
export { n as useInputTextarea };

//# sourceMappingURL=useInputTextarea.js.map