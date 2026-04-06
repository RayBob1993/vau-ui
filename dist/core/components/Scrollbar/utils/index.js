//#region src/lib/core/components/Scrollbar/utils/index.ts
function e(e, t = !1) {
	return t && e ? e.scrollTop : 0;
}
function t(e, t = !1) {
	return t && e ? e.scrollLeft : 0;
}
function n(e, t = !1) {
	return t && e ? e.offsetTop : 0;
}
function r(e, t = !1) {
	return t && e ? e.offsetLeft : 0;
}
//#endregion
export { r as getOffsetLeft, n as getOffsetTop, t as getScrollLeft, e as getScrollTop };

//# sourceMappingURL=index.js.map