import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Switch/composables/useSwitchRoot.ts
function n(n) {
	let r = e(() => t(n.props));
	return {
		isActive: e(() => t(n.modelValue)),
		isDisabled: e(() => !!(n.formRootContext?.props.disabled || n.formItemContext?.props.disabled || r.value?.disabled))
	};
}
//#endregion
export { n as useSwitchRoot };

//# sourceMappingURL=useSwitchRoot.js.map