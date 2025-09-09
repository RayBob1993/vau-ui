import { describe, expect, it } from 'vitest';
import { AccordionPlugin } from '../plugin';

describe('AccordionPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(AccordionPlugin.install).toBeDefined();
    expect(typeof AccordionPlugin.install).toBe('function');
  });
});
