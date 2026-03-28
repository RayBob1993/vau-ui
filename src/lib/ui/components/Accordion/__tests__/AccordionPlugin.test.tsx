import { describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { AccordionPlugin } from '../plugin';
import VAccordion from '../VAccordion.vue';
import VAccordionItem from '../VAccordionItem.vue';

describe('AccordionPlugin', () => {
  it('Корректно регистрирует плагин', () => {
    const app = createApp({});

    app.use(AccordionPlugin);

    const accordionComponent = app.component('VAccordion');
    const accordionItemComponent = app.component('VAccordionItem');

    expect(accordionComponent).toBeDefined();
    expect(accordionItemComponent).toBeDefined();

    expect(accordionComponent).toBe(VAccordion);
    expect(accordionItemComponent).toBe(VAccordionItem);
  });

  it('Плагин имеет функцию install', () => {
    expect(AccordionPlugin.install).toBeDefined();
    expect(typeof AccordionPlugin.install).toBe('function');
  });
});
