import { useInputTagsRootContext as e } from "./context/useInputTagsRootContext.js";
import { useInputTagsInput as t } from "./composables/useInputTagsInput.js";
import { createElementBlock as n, createElementVNode as r, defineComponent as i, openBlock as a, unref as o, withKeys as s } from "vue";
//#region src/lib/core/components/InputTags/InputTagsInput.vue?vue&type=script&setup=true&lang.ts
var c = { class: "input-tags-input" }, l = /* @__PURE__ */ i({
	__name: "InputTagsInput",
	setup(i) {
		let { handleEnter: l, handleTab: u } = t({ inputTagsRootContext: e() });
		return (e, t) => (a(), n("div", c, [r("input", {
			type: "text",
			onKeydown: [t[0] ||= s((...e) => o(l) && o(l)(...e), ["enter"]), t[1] ||= s((...e) => o(u) && o(u)(...e), ["tab"])]
		}, null, 32)]));
	}
});
//#endregion
export { l as default };

//# sourceMappingURL=InputTagsInput.vue_vue_type_script_setup_true_lang.js.map