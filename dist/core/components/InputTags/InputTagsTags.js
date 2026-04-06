import { useInputTagsRootContext as e } from "./context/useInputTagsRootContext.js";
import { useInputTagsTags as t } from "./composables/useInputTagsTags.js";
import { createElementBlock as n, defineComponent as r, openBlock as i } from "vue";
//#region src/lib/core/components/InputTags/InputTagsTags.vue?vue&type=script&setup=true&lang.ts
var a = { class: "input-tags-tags" }, o = /* @__PURE__ */ r({
	__name: "InputTagsTags",
	setup(r) {
		let {} = t({ inputTagsRootContext: e() });
		return (e, t) => (i(), n("div", a));
	}
});
//#endregion
export { o as default };

//# sourceMappingURL=InputTagsTags.js.map