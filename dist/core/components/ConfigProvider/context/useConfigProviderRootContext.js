import { ConfigProviderRootContextKey as e } from "./key.js";
import { CONFIG_PROVIDER_TELEPORT_TARGET_DEFAULT as t } from "../constants/index.js";
import { inject as n } from "vue";
//#region src/lib/core/components/ConfigProvider/context/useConfigProviderRootContext.ts
function r() {
	return n(e, {
		props: () => ({ teleportTarget: t }),
		t: () => ""
	});
}
//#endregion
export { r as useConfigProviderRootContext };

//# sourceMappingURL=useConfigProviderRootContext.js.map