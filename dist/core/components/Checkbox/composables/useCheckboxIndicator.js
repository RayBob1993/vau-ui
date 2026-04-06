import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Checkbox/composables/useCheckboxIndicator.ts
function n(n) {
	return {
		isDisabled: e(() => !!t(n.checkboxRootContext?.isDisabled)),
		isActive: e(() => !!t(n.checkboxRootContext?.isActive)),
		isIndeterminate: e(() => !!t(n.checkboxRootContext?.isIndeterminate)),
		isValid: e(() => !!t(n.checkboxRootContext?.isValid)),
		isInvalid: e(() => !!t(n.checkboxRootContext?.isInvalid))
	};
}
//#endregion
export { n as useCheckboxIndicator };

//# sourceMappingURL=useCheckboxIndicator.js.map