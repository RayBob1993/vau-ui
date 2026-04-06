import { throttle as e } from "./throttle.js";
//#region src/lib/core/utils/decorators/debounce.ts
function t(t, n, r = {}) {
	let { atBegin: i = !1 } = r;
	return e(t, n, { debounceMode: i });
}
//#endregion
export { t as debounce };

//# sourceMappingURL=debounce.js.map