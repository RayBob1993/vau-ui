import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Switch/composables/useSwitchIndicator.ts
function n(n) {
	return {
		isDisabled: e(() => !!t(n.switchRootContext?.isDisabled)),
		isActive: e(() => !!t(n.switchRootContext?.isActive)),
		isValid: e(() => !!t(n.switchRootContext?.isValid)),
		isInvalid: e(() => !!t(n.switchRootContext?.isInvalid))
	};
}
//#endregion
export { n as useSwitchIndicator };

//# sourceMappingURL=useSwitchIndicator.js.map