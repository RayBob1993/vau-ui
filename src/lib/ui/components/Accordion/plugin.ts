import type { Plugin } from 'vue';
import VAccordion from './VAccordion.vue';
import VAccordionItem from './VAccordionItem.vue';

export const AccordionPlugin: Plugin = {
  install (app) {
    app.component('VAccordion', VAccordion);
    app.component('VAccordionItem', VAccordionItem);
  }
};
