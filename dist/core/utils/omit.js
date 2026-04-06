//#region src/lib/core/utils/omit.ts
function e(e, t) {
	let n = { ...e };
	for (let r of t) Object.prototype.hasOwnProperty.call(e, r) && delete n[r];
	return n;
}
//#endregion
export { e as omit };

//# sourceMappingURL=omit.js.map