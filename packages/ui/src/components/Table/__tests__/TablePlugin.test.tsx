import { describe, expect, it } from 'vitest';
import { createApp } from 'vue';
import { TablePlugin } from '../plugin';
import VTable from '../VTable.vue';
import VTableColumn from '../VTableColumn.vue';

describe('TablePlugin', () => {
  it('Корректно регистрирует плагин', () => {
    const app = createApp({});

    app.use(TablePlugin);

    const accordionComponent = app.component('VTable');
    const accordionItemComponent = app.component('VTableColumn');

    expect(accordionComponent).toBeDefined();
    expect(accordionItemComponent).toBeDefined();

    expect(accordionComponent).toBe(VTable);
    expect(accordionItemComponent).toBe(VTableColumn);
  });

  it('Плагин имеет функцию install', () => {
    expect(TablePlugin.install).toBeDefined();
    expect(typeof TablePlugin.install).toBe('function');
  });
});
