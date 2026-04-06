import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/InputTags/composables/useInputTagsRoot.ts
function n(n) {
	let r = e(() => t(n.props));
	return { isDisabled: e(() => !!(n.formRootContext?.props.disabled || n.formItemContext?.props.disabled || r.value?.disabled)) };
}
//#endregion
export { n as useInputTagsRoot };

//# sourceMappingURL=useInputTagsRoot.js.map