import { computed as e, toValue as t } from "vue";
//#region src/lib/core/components/Input/composables/useInputBase.ts
function n(n) {
	return {
		modelValue: e({
			get: () => t(n.inputRootContext?.modelValue),
			set(e) {
				n.inputRootContext && n.inputRootContext.setModelValue(e);
			}
		}),
		listeners: {
			click(e) {
				n.inputRootContext?.emit("click", e);
			},
			dblclick(e) {
				n.inputRootContext?.emit("dblclick", e);
			},
			mousedown(e) {
				n.inputRootContext?.emit("mousedown", e);
			},
			mouseup(e) {
				n.inputRootContext?.emit("mouseup", e);
			},
			mouseenter(e) {
				n.inputRootContext?.emit("mouseenter", e);
			},
			mouseleave(e) {
				n.inputRootContext?.emit("mouseleave", e);
			},
			mousemove(e) {
				n.inputRootContext?.emit("mousemove", e);
			},
			mouseover(e) {
				n.inputRootContext?.emit("mouseover", e);
			},
			mouseout(e) {
				n.inputRootContext?.emit("mouseout", e);
			},
			contextmenu(e) {
				n.inputRootContext?.emit("contextmenu", e);
			},
			focusin(e) {
				n.inputRootContext?.setFocus(!0), n.inputRootContext?.emit("focusin", e);
			},
			focusout(e) {
				n.inputRootContext?.setFocus(!1), n.inputRootContext?.emit("focusout", e);
			},
			change(e) {
				n.inputRootContext?.emit("change", e);
			},
			blur(e) {
				n.inputRootContext?.emit("blur", e);
			},
			focus(e) {
				n.inputRootContext?.emit("focus", e);
			},
			keyup(e) {
				n.inputRootContext?.emit("keyup", e);
			},
			keydown(e) {
				n.inputRootContext?.emit("keydown", e);
			},
			keypress(e) {
				n.inputRootContext?.emit("keypress", e);
			},
			paste(e) {
				n.inputRootContext?.emit("paste", e);
			},
			copy(e) {
				n.inputRootContext?.emit("copy", e);
			},
			cut(e) {
				n.inputRootContext?.emit("cut", e);
			}
		}
	};
}
//#endregion
export { n as useInputBase };

//# sourceMappingURL=useInputBase.js.map