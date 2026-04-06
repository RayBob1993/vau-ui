import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Radio/composables/useRadioIndicator.ts
function n(n) {
	return {
		isDisabled: e(() => !!t(n.radioRootContext?.isDisabled)),
		isActive: e(() => !!t(n.radioRootContext?.isActive)),
		isValid: e(() => !!t(n.radioRootContext?.isValid)),
		isInvalid: e(() => !!t(n.radioRootContext?.isInvalid))
	};
}
//#endregion
export { n as useRadioIndicator };

//# sourceMappingURL=useRadioIndicator.js.map