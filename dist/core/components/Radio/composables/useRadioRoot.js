import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Radio/composables/useRadioRoot.ts
function n(n) {
	let r = e(() => t(n.props)), i = e(() => t(n.modelValue)), a = e(() => !!(n.formRootContext?.props.disabled || n.formItemContext?.props.disabled || r.value?.disabled));
	return {
		isActive: e(() => i.value === r.value.value),
		isDisabled: a
	};
}
//#endregion
export { n as useRadioRoot };

//# sourceMappingURL=useRadioRoot.js.map