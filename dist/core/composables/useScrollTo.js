import { isString as e } from "../utils/isString.js";
import { isRef as t, unref as n } from "vue";
//#region src/lib/core/composables/useScrollTo.ts
function r(r, i) {
	(e(r) ? document.querySelector(r) : t(r) ? n(r) : r)?.scrollIntoView({
		behavior: "smooth",
		...i
	});
}
//#endregion
export { r as useScrollTo };

//# sourceMappingURL=useScrollTo.js.map