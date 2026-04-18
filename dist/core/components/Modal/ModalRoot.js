import { useConfigProviderRootContext as e } from "../ConfigProvider/context/useConfigProviderRootContext.js";
import { useEscapeKey as t } from "../../composables/useEscapeKey.js";
import { ModalRootContextKey as n } from "./context/key.js";
import { useModalRoot as r } from "./composables/useModalRoot.js";
import { Teleport as i, Transition as a, createBlock as o, createElementVNode as s, createVNode as c, defineComponent as l, mergeModels as u, mergeProps as d, openBlock as f, provide as p, renderSlot as m, unref as h, useAttrs as g, useModel as _, vShow as v, withCtx as y, withDirectives as b } from "vue";
//#region src/lib/core/components/Modal/ModalRoot.vue?vue&type=script&setup=true&lang.ts
var x = /* @__PURE__ */ l({
	inheritAttrs: !1,
	__name: "ModalRoot",
	props: /* @__PURE__ */ u({
		position: { default: "center" },
		appendToBody: {
			type: Boolean,
			default: !0
		},
		closeOnEscape: {
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
	emits: /* @__PURE__ */ u([
		"opened",
		"closed",
		"open",
		"close"
	], ["update:modelValue"]),
	setup(l, { emit: u }) {
		let x = l, S = u, C = _(l, "modelValue"), w = g(), { close: T, teleportTarget: E } = r({
			configProviderRootContext: e(),
			modelValue: C,
			props: x,
			onClose: () => {
				C.value = !1, S("close");
			},
			onOpen: () => {
				S("open");
			}
		});
		return t({
			when: () => C.value,
			enabled: () => x.closeOnEscape,
			onEscape: () => {
				T();
			}
		}), p(n, {
			props: x,
			close: T
		}), (e, t) => (f(), o(i, {
			to: h(E),
			disabled: !l.appendToBody
		}, [c(a, {
			name: "modal",
			onAfterEnter: t[1] ||= (e) => S("opened", e),
			onAfterLeave: t[2] ||= (e) => S("closed", e)
		}, {
			default: y(() => [b(s("div", d({ class: "modal" }, h(w), {
				class: {
					"modal--open": C.value,
					[`modal--position-${l.position}`]: l.position,
					[`modal--size-${l.size}`]: l.size
				},
				onClick: t[0] ||= (...e) => h(T) && h(T)(...e)
			}), [m(e.$slots, "default")], 16), [[v, C.value]])]),
			_: 3
		})], 8, ["to", "disabled"]));
	}
});
//#endregion
export { x as default };

//# sourceMappingURL=ModalRoot.js.map