import { isNull as e } from "./isNull.js";
//#region src/lib/core/utils/isObject.ts
function t(t) {
	return !e(t) && typeof t == "object" && Object.getPrototypeOf(t) === Object.prototype;
}
//#endregion
export { t as isObject };

//# sourceMappingURL=isObject.js.map