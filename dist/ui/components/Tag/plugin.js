import e from "./VTag.vue.js";
import t from "./VTagGroup.vue.js";
//#region src/lib/ui/components/Tag/plugin.ts
var n = { install(t) {
	t.component("VTag", e);
} }, r = { install(e) {
	e.component("VTagGroup", t);
} };
//#endregion
export { r as TagGroupPlugin, n as TagPlugin };

//# sourceMappingURL=plugin.js.map