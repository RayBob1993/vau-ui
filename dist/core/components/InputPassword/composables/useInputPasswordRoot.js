import { InputNativeTypes as e } from "../../../constants/input-native-types.js";
import { ref as t } from "vue";
//#region src/lib/core/components/InputPassword/composables/useInputPasswordRoot.ts
function n() {
	let n = t(e.PASSWORD);
	function r() {
		n.value === e.PASSWORD ? n.value = e.TEXT : n.value = e.PASSWORD;
	}
	return {
		currentType: n,
		handleToggleType: r
	};
}
//#endregion
export { n as useInputPasswordRoot };

//# sourceMappingURL=useInputPasswordRoot.js.map