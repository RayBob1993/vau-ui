import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Button/composables/useButtonRoot.ts
function n(n) {
	let r = e(() => t(n.props));
	return { isDisabled: e(() => !!(n.formRootContext?.props.disabled || n.formItemContext?.props.disabled || r.value?.disabled || r.value?.loading)) };
}
//#endregion
export { n as useButtonRoot };

//# sourceMappingURL=useButtonRoot.js.map