import { describe, expect, it } from 'vitest';
import { DatepickerPlugin } from '../plugin';

describe('DatepickerPlugin', () => {
  it('Плагин имеет функцию install', () => {
    expect(DatepickerPlugin.install).toBeDefined();
    expect(typeof DatepickerPlugin.install).toBe('function');
  });
});
