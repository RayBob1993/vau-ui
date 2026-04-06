import { isNumber as e } from "../../../utils/isNumber.js";
import { throttle as t } from "../../../utils/decorators/throttle.js";
import "../constants/index.js";
import { computed as n, toValue as r } from "vue";
//#region src/lib/core/components/InputNumber/composables/useInputNumberWheel.ts
function i(i) {
	let a = n(() => r(i.mousewheel));
	return { handleWheel: t((e) => {
		a.value && (e.preventDefault(), e.stopImmediatePropagation(), e.deltaY < 0 ? i.onIncrement() : i.onDecrement());
	}, n(() => e(a.value) && a.value > 0 ? a.value : 100).value) };
}
//#endregion
export { i as useInputNumberWheel };

//# sourceMappingURL=useInputNumberWheel.js.map