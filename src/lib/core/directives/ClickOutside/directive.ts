import type { ObjectDirective } from 'vue';

export const vClickOutside: ObjectDirective = {
  mounted (element, bind) {
    element.clickOutside = (event: MouseEvent) => {
      if (event.target instanceof Element) {
        if (!(element === event.target || element.contains(event.target))) {
          bind.value(event, element);
        }
      }
    };

    window.addEventListener('click', element.clickOutside);
  },
  unmounted (element) {
    window.removeEventListener('click', element.clickOutside);
  }
};
