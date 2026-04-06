//#region src/lib/core/composables/usePlural.ts
function e(e) {
	let t = new Intl.PluralRules("ru-RU"), n = new Map([
		["one", e[0]],
		["few", e[1]],
		["many", e[2]]
	]);
	function r(e) {
		if (Number.isNaN(e) || e < 0) return;
		let r = t.select(e);
		return n.get(r);
	}
	return { plural: r };
}
//#endregion
export { e as usePlural };

//# sourceMappingURL=usePlural.js.map