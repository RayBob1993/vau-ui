import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/InputCode/composables/useInputCodeRoot.ts
function n(n) {
	let r = e(() => t(n.props));
	return { isDisabled: e(() => !!(n.formRootContext?.props.disabled || n.formItemContext?.props.disabled || r.value?.disabled)) };
}
//#endregion
export { n as useInputCodeRoot };

//# sourceMappingURL=useInputCodeRoot.js.map