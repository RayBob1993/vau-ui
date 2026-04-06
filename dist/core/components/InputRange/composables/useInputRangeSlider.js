import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/InputRange/composables/useInputRangeSlider.ts
function n(n) {
	return { isDisabled: e(() => !!t(n.inputRangeRootContext?.isDisabled)) };
}
//#endregion
export { n as useInputRangeSlider };

//# sourceMappingURL=useInputRangeSlider.js.map