import { isString as e } from "./isString.js";
import { isNull as t } from "./isNull.js";
import { isObject as n } from "./isObject.js";
import { isUndefined as r } from "./isUndefined.js";
//#region src/lib/core/utils/isEmpty.ts
function i(i) {
	return t(i) || r(i) ? !0 : e(i) ? i === "" : Array.isArray(i) ? !i.length : i instanceof Map || i instanceof Set ? i.size === 0 : n(i) ? i instanceof Date || i instanceof RegExp ? !1 : Object.keys(i).length === 0 : !1;
}
//#endregion
export { i as isEmpty };

//# sourceMappingURL=isEmpty.js.map