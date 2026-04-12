import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Alert/composable/useAlertClose.ts
function n(n) {
	return { icon: e(() => {
		let e = n.configProviderRootContext;
		if (e) return t(e.props).icons?.alertClose;
	}) };
}
//#endregion
export { n as useAlertClose };

//# sourceMappingURL=useAlertClose.js.map