//#region src/lib/core/utils/pick.ts
function e(e, t) {
	let n = {};
	for (let r of t) Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
	return n;
}
//#endregion
export { e as pick };

//# sourceMappingURL=pick.js.map