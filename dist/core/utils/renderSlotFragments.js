import { Fragment as e } from "vue";
//#region src/lib/core/utils/renderSlotFragments.ts
function t(n) {
	return n ? n.flatMap((n) => n.type === e ? t(n.children) : [n]) : [];
}
//#endregion
export { t as renderSlotFragments };

//# sourceMappingURL=renderSlotFragments.js.map