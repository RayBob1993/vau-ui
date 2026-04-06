import { ConfigProviderRootContextKey as e } from "./context/key.js";
import { CONFIG_PROVIDER_TELEPORT_TARGET_DEFAULT as t } from "./constants/index.js";
import { useConfigProviderRoot as n } from "./composables/useConfigProviderRoot.js";
import { defineComponent as r, provide as i, renderSlot as a } from "vue";
//#region src/lib/core/components/ConfigProvider/ConfigProviderRoot.vue?vue&type=script&setup=true&lang.ts
var o = /* @__PURE__ */ r({
	__name: "ConfigProviderRoot",
	props: {
		locale: {},
		teleportTarget: { default: () => t },
		direction: {},
		icons: {}
	},
	setup(t) {
		let r = t, { t: o } = n({ props: () => r });
		return i(e, {
			props: () => r,
			t: o
		}), (e, t) => a(e.$slots, "default");
	}
});
//#endregion
export { o as default };

//# sourceMappingURL=ConfigProviderRoot.vue_vue_type_script_setup_true_lang.js.map