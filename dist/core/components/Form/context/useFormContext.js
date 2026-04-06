import { useFormRootContext as e } from "./useFormRootContext.js";
import { useFormItemContext as t } from "./useFormItemContext.js";
import { computed as n } from "vue";
//#region src/lib/core/components/Form/context/useFormContext.ts
function r() {
	let r = e(), i = t();
	return {
		formRootContext: r,
		formItemContext: i,
		isValid: n(() => !!i?.validationStatus.value.isSuccess),
		isInvalid: n(() => !!i?.validationStatus.value.isError)
	};
}
//#endregion
export { r as useFormContext };

//# sourceMappingURL=useFormContext.js.map