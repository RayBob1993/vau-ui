import { isString as e } from "../../../utils/isString.js";
import { isNull as t } from "../../../utils/isNull.js";
import { isUndefined as n } from "../../../utils/isUndefined.js";
import { computed as r, toValue as i } from "vue";
//#region src/lib/core/components/ConfigProvider/composables/useConfigProviderRoot.ts
function a(a) {
	let o = r(() => i(a.props));
	function s(r) {
		if (!o.value?.locale) return "";
		let i = r.split("."), a = o.value.locale;
		for (let o of i) {
			if (n(a) || t(a) || e(a)) return r;
			a = a[o];
		}
		return e(a) ? a : r;
	}
	return { t: s };
}
//#endregion
export { a as useConfigProviderRoot };

//# sourceMappingURL=useConfigProviderRoot.js.map