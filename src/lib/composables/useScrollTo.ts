import { isString } from '../utils';
import { type Ref, isRef, unref, type ShallowRef } from 'vue';

/**
 * @description `useScrollTo` — это функция, которая позволяет плавно прокручивать страницу к указанному элементу.
 * @description Она принимает в качестве аргумента элемент, к которому нужно прокрутить, и дополнительные параметры для настройки поведения прокрутки.
 *
 * @example
 * <template>
 *   <div ref="myElement">Hello, world!</button>
 * </template>
 *
 * <script lang="ts" setup>
 *   import { useTemplateRef } from 'vue';
 *
 *   const myElement = useTemplateRef<HTMLDivElement>();
 *
 *   function scrollToMyElement() {
 *     useScrollTo(myElement, { behavior: 'smooth' });
 *   }
 * </script>
 */
export function useScrollTo (el: Ref<Element> | Readonly<ShallowRef<Element | null>> | string, options?: ScrollIntoViewOptions) {
  const element = isString(el)
    ? document.querySelector(el)
    : isRef(el) ? unref(el) : el;

  element?.scrollIntoView({
    behavior: 'smooth',
    ...options
  });
}
