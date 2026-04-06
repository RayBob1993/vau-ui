import { isNull as e } from "./isNull.js";
import { isObject as t } from "./isObject.js";
import { isUndefined as n } from "./isUndefined.js";
//#region src/lib/core/utils/getProp.ts
function r(r) {
	return !e(r) && !n(r) && t(r) && !Array.isArray(r);
}
function i(e, t) {
	if (!e || !t.trim()) return null;
	let n = t.split("."), i = e;
	for (let e of n) {
		if (!r(i)) return null;
		i = i[e];
	}
	return i ?? null;
}
//#endregion
export { i as getProp };

//# sourceMappingURL=getProp.js.map