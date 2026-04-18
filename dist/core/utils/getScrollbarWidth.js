//#region src/lib/core/utils/getScrollbarWidth.ts
function e() {
	if (!window) return 0;
	let e = document.createElement("div");
	e.style.visibility = "hidden", e.style.width = "100px", e.style.position = "absolute", e.style.top = "-9999px", document.body.append(e);
	let t = e.offsetWidth;
	e.style.overflow = "scroll";
	let n = document.createElement("div");
	n.style.width = "100%", e.append(n);
	let r = n.offsetWidth;
	return e.remove(), t - r;
}
//#endregion
export { e as getScrollbarWidth };

//# sourceMappingURL=getScrollbarWidth.js.map