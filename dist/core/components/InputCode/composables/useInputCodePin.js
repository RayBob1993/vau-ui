import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/InputCode/composables/useInputCodePin.ts
function n(n) {
	return { isDisabled: e(() => !!t(n.inputCodeRootContext?.isDisabled)) };
}
//#endregion
export { n as useInputCodePin };

//# sourceMappingURL=useInputCodePin.js.map