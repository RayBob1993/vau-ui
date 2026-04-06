import { useToggle as e } from "../../../../core/composables/useToggle.js";
//#region src/lib/ui/components/Inplace/composables/useInplace.ts
function t(t) {
	let [n, r] = e();
	function i() {
		r(!0), t?.onOpen?.();
	}
	function a() {
		r(!1), t?.onClose?.();
	}
	return {
		isVisible: n,
		handleOpen: i,
		handleClose: a
	};
}
//#endregion
export { t as useInplace };

//# sourceMappingURL=useInplace.js.map