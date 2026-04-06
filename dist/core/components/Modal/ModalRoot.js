import { ModalRootContextKey as e } from "./context/key.js";
import { useModalRoot as t } from "./composables/useModalRoot.js";
import { useConfigProviderRootContext as n } from "../ConfigProvider/context/useConfigProviderRootContext.js";
import { Teleport as r, Transition as i, createBlock as a, createElementVNode as o, createVNode as s, defineComponent as c, mergeModels as l, mergeProps as u, openBlock as d, provide as f, renderSlot as p, unref as m, useAttrs as h, useModel as g, vShow as _, withCtx as v, withDirectives as y } from "vue";
//#region src/lib/core/components/Modal/ModalRoot.vue?vue&type=script&setup=true&lang.ts
var b = /* @__PURE__ */ c({
	inheritAttrs: !1,
	__name: "ModalRoot",
	props: /* @__PURE__ */ l({
		position: { default: "center" },
		appendToBody: {
			type: Boolean,
			default: !0
		},
		size: {},
		sizeXs: {},
		sizeSm: {},
		sizeMd: {},
		sizeLg: {},
		sizeXl: {},
		sizeXxl: {}
	}, {
		modelValue: {
			type: Boolean,
			required: !0
		},
		modelModifiers: {}
	}),
	emits: /* @__PURE__ */ l([
		"opened",
		"closed",
		"open",
		"close"
	], ["update:modelValue"]),
	setup(c, { emit: l }) {
		let b = c, x = l, S = g(c, "modelValue"), C = h(), { close: w, teleportTarget: T } = t({
			configProviderRootContext: n(),
			modelValue: S,
			props: b,
			onClose: () => {
				S.value = !1, x("close");
			},
			onOpen: () => {
				x("open");
			}
		});
		return f(e, {
			props: b,
			close: w
		}), (e, t) => (d(), a(r, {
			to: m(T),
			disabled: !c.appendToBody
		}, [s(i, {
			name: "fade-in-down",
			onAfterEnter: t[1] ||= (e) => x("opened", e),
			onAfterLeave: t[2] ||= (e) => x("closed", e)
		}, {
			default: v(() => [y(o("div", u({ class: "modal" }, m(C), {
				class: {
					"modal--open": S.value,
					[`modal--position-${c.position}`]: c.position,
					[`modal--size-${c.size}`]: c.size
				},
				onClick: t[0] ||= (...e) => m(w) && m(w)(...e)
			}), [p(e.$slots, "default")], 16), [[_, S.value]])]),
			_: 3
		})], 8, ["to", "disabled"]));
	}
});
//#endregion
export { b as default };

//# sourceMappingURL=ModalRoot.js.map